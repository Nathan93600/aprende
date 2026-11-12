# -*- coding: utf-8 -*-
"""
Voix lingala de ¡Aprende! avec l'API Gemini (Google AI Studio), qui lit le lingala.

Voix : homme = Achird, femme = Aoede (les mêmes que pour l'espagnol).

1) Échantillon de 10 phrases, à écouter avant tout :   python voix_lingala.py essai
2) Tout générer (349 textes) :                          python voix_lingala.py

La clé API AI Studio est demandée au lancement, ne s'affiche pas et n'est enregistrée nulle part
(ou variable d'environnement GEMINI_API_KEY). Bibliothèque standard Python uniquement.
Résultat : dossier « aprende-voix-ln » à côté du script, et aprende-voix-ln.zip à la fin.
Le script peut être relancé : il reprend là où il s'est arrêté (utile si le quota gratuit
du jour est atteint : il repart à zéro à minuit, heure du Pacifique, soit 9 h à Paris).
"""
import base64, getpass, json, os, struct, sys, time, urllib.error, urllib.request, zipfile

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

VOICES = ["Achird", "Aoede"]          # 0 = homme, 1 = femme
MODELS = ["gemini-3.8-flash-tts", "gemini-3.8-flash-lite-tts",
          "gemini-3.1-flash-tts-preview", "gemini-2.5-flash-preview-tts"]

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "aprende-voix-ln")
LIST_URL = "https://nathan93600.github.io/aprende/tools/voix_ln.json"
API = "https://generativelanguage.googleapis.com/v1beta/models/{}:generateContent"


class Stop(Exception):
    pass


def load_jobs():
    p = os.path.join(HERE, "voix_ln.json")
    if os.path.exists(p):
        with open(p, encoding="utf-8") as f:
            return json.load(f)
    print("Téléchargement de la liste des textes…")
    with urllib.request.urlopen(LIST_URL, timeout=60) as r:
        return json.loads(r.read().decode("utf-8"))


def to_wav(raw, mime):
    if raw[:4] == b"RIFF":
        return raw
    rate = 24000
    for part in (mime or "").split(";"):
        if part.strip().startswith("rate="):
            rate = int(part.strip()[5:])
    head = b"RIFF" + struct.pack("<I", 36 + len(raw)) + b"WAVEfmt " + struct.pack("<IHHIIHH", 16, 1, 1, rate, rate * 2, 2, 16)
    return head + b"data" + struct.pack("<I", len(raw)) + raw


def synth(key, model, text, voice):
    body = {
        "contents": [{"parts": [{"text": text}]}],   # le texte seul : aucune consigne, sinon elle serait lue
        "generationConfig": {
            "responseModalities": ["AUDIO"],
            "speechConfig": {"voiceConfig": {"prebuiltVoiceConfig": {"voiceName": voice}}},
        },
    }
    req = urllib.request.Request(API.format(model), data=json.dumps(body).encode("utf-8"), method="POST",
                                 headers={"Content-Type": "application/json", "x-goog-api-key": key})
    with urllib.request.urlopen(req, timeout=120) as r:
        res = json.loads(r.read().decode("utf-8"))
    for part in res["candidates"][0]["content"]["parts"]:
        d = part.get("inlineData") or part.get("inline_data")
        if d:
            return to_wav(base64.b64decode(d["data"]), d.get("mimeType") or d.get("mime_type"))
    raise RuntimeError("réponse sans audio")


def http_err(e):
    try:
        return e.code, e.read().decode("utf-8", "replace")
    except Exception:
        return getattr(e, "code", 0), ""


def pick_model(key, job):
    for m in MODELS:
        try:
            wav = synth(key, m, job["s"], VOICES[job["v"]])
            print(f"Modèle utilisé : {m}")
            return m, wav
        except urllib.error.HTTPError as e:
            code, txt = http_err(e)
            if code in (400, 401, 403) and "API key" in txt:
                raise Stop("Clé refusée par Google : vérifie que c'est bien une clé AI Studio.\n" + txt[:300])
            print(f"  {m} indisponible (HTTP {code}), essai du suivant…")
    raise Stop("Aucun modèle de voix Gemini n'a répondu. Réessaie plus tard.")


def run(key, jobs, folder, names):
    os.makedirs(folder, exist_ok=True)
    todo = [j for j in jobs if not os.path.exists(os.path.join(folder, names(j)))]
    print(f"{len(jobs) - len(todo)} déjà faits, {len(todo)} à générer.")
    model = None
    for n, j in enumerate(todo, 1):
        path = os.path.join(folder, names(j))
        for attempt in range(6):
            try:
                if model is None:
                    model, wav = pick_model(key, j)
                else:
                    wav = synth(key, model, j["s"], VOICES[j["v"]])
                with open(path + ".part", "wb") as f:
                    f.write(wav)
                os.replace(path + ".part", path)
                print(f"[{n}/{len(todo)}] {j['s'][:60]}")
                break
            except urllib.error.HTTPError as e:
                code, txt = http_err(e)
                if code == 429 and ("PerDay" in txt or "per day" in txt.lower()):
                    raise Stop("Quota gratuit du jour atteint. Relance la même commande demain après 9 h : le script reprendra ici.")
                if code in (429, 500, 502, 503, 504):
                    wait = 20 * (attempt + 1)
                    print(f"  pause {wait} s (HTTP {code})…")
                    time.sleep(wait)
                    continue
                raise Stop(f"Erreur HTTP {code} sur « {j['s']} » :\n{txt[:400]}")
            except (urllib.error.URLError, TimeoutError, RuntimeError) as e:
                print(f"  nouvel essai ({e})…")
                time.sleep(10)
        else:
            raise Stop(f"Échec répété sur « {j['s']} ». Relance la commande plus tard.")


def main():
    essai = len(sys.argv) > 1 and sys.argv[1].lower().startswith("essai")
    jobs = load_jobs()
    key = os.environ.get("GEMINI_API_KEY") or getpass.getpass("Clé API Google AI Studio (rien ne s'affiche, colle puis Entrée) : ").strip()
    if not key:
        print("Pas de clé, arrêt.")
        return
    try:
        if essai:
            sample = [j for j in jobs if j.get("essai")]
            folder = os.path.join(OUT, "essai")
            if os.path.isdir(folder):   # on repart d'un dossier vide à chaque essai
                for f in os.listdir(folder):
                    os.remove(os.path.join(folder, f))
            safe = lambda j: "".join(c if c.isalnum() or c in " -" else "_" for c in j["s"])[:40].strip() + f" ({VOICES[j['v']]}).wav"
            run(key, sample, folder, safe)
            print(f"\nÉchantillon prêt dans : {folder}\nÉcoute-les et dis à Claude si l'accent te va.")
            if os.name == "nt":
                os.startfile(folder)
        else:
            folder = os.path.join(OUT, "ln")
            run(key, jobs, folder, lambda j: j["id"] + ".wav")
            zp = os.path.join(HERE, "aprende-voix-ln.zip")
            with zipfile.ZipFile(zp, "w", zipfile.ZIP_DEFLATED) as z:
                for j in jobs:
                    z.write(os.path.join(folder, j["id"] + ".wav"), "ln/" + j["id"] + ".wav")
            print(f"\nTerminé : {len(jobs)} voix. Archive : {zp}\nDis à Claude « c'est fait » pour qu'il les ajoute à l'appli.")
    except Stop as s:
        print("\n" + str(s))
    except KeyboardInterrupt:
        print("\nInterrompu. Relance la commande pour reprendre.")


if __name__ == "__main__":
    main()
