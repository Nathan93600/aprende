# -*- coding: utf-8 -*-
"""
Régénère toutes les voix de ¡Aprende! avec Google Cloud Text-to-Speech (voix Chirp 3 HD).

Voix choisies :
  anglais (en-US)  : homme = Puck,   femme = Aoede
  espagnol (es-ES) : homme = Achird, femme = Aoede

Lancement (dans un terminal, depuis le dossier du script) :   python voix_google.py
La clé API Google est demandée au lancement, ne s'affiche pas et n'est enregistrée nulle part.
Aucune dépendance à installer : bibliothèque standard Python uniquement.

La liste des textes (voix_textes.json) est lue à côté du script ; si elle n'y est pas, elle est
téléchargée depuis le site de l'appli.
Résultat : dossier « aprende-voix » à côté du script (en/<id>.mp3, es/<id>.mp3) et aprende-voix.zip.
Le script peut être relancé : il reprend là où il s'est arrêté et ne refait pas ce qui est déjà fait.
Consommation : environ 50 000 caractères au total (le quota gratuit Chirp 3 HD est de 1 million par mois).
"""
import base64, getpass, json, os, sys, threading, time, urllib.error, urllib.parse, urllib.request, zipfile
from concurrent.futures import ThreadPoolExecutor

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

# langue -> (code de langue Google, [voix homme, voix femme])
VOICES = {
    "en": ("en-US", ["Puck", "Aoede"]),
    "es": ("es-ES", ["Achird", "Aoede"]),   # mettre "es-US" pour un accent d'Amérique latine
}
WORKERS = 4

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "aprende-voix")
STATE = os.path.join(OUT, "etat.json")
LIST_URL = "https://nathan93600.github.io/aprende/tools/voix_textes.json"
BASE = os.environ.get("VOIX_BASE", "https://texttospeech.googleapis.com/v1/")


def voice_name(lang, v):
    code, names = VOICES[lang]
    return f"{code}-Chirp3-HD-{names[v]}"


def http(url, data=None):
    body = json.dumps(data).encode("utf-8") if data is not None else None
    req = urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"},
                                 method="POST" if body else "GET")
    with urllib.request.urlopen(req, timeout=90) as r:
        return r.read()


def err_text(e):
    if isinstance(e, urllib.error.HTTPError):
        try:
            return f"HTTP {e.code} : {e.read().decode('utf-8', 'replace')[:300]}"
        except Exception:
            return f"HTTP {e.code}"
    return str(e)


def load_jobs():
    p = os.path.join(HERE, "voix_textes.json")
    if os.path.exists(p):
        with open(p, encoding="utf-8") as f:
            return json.load(f)
    print("Téléchargement de la liste des textes…")
    return json.loads(http(LIST_URL).decode("utf-8"))


def synth(key, job):
    """Renvoie le MP3 ; réessaie en cas de quota dépassé ou d'erreur passagère."""
    lang = job["l"]
    payload = {
        "input": {"text": job["s"]},
        "voice": {"languageCode": VOICES[lang][0], "name": voice_name(lang, job["v"])},
        "audioConfig": {"audioEncoding": "MP3", "sampleRateHertz": 24000},
    }
    wait = 2
    for attempt in range(7):
        try:
            r = json.loads(http(BASE + "text:synthesize?key=" + urllib.parse.quote(key), payload))
            audio = base64.b64decode(r["audioContent"])
            if len(audio) < 300:
                raise RuntimeError("audio vide")
            return audio
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 502, 503, 504) and attempt < 6:
                time.sleep(wait); wait = min(wait * 2, 60); continue
            raise RuntimeError(err_text(e))
        except (urllib.error.URLError, TimeoutError, ConnectionError) as e:
            if attempt < 6:
                time.sleep(wait); wait = min(wait * 2, 60); continue
            raise RuntimeError(str(e))


def main():
    jobs = load_jobs()
    for l in VOICES:
        os.makedirs(os.path.join(OUT, l), exist_ok=True)
    state = {}
    if os.path.exists(STATE):
        try:
            with open(STATE, encoding="utf-8") as f:
                state = json.load(f)
        except Exception:
            state = {}

    def path(j):
        return os.path.join(OUT, j["l"], j["id"] + ".mp3")

    def done(j):
        return state.get(j["l"] + "/" + j["id"]) == voice_name(j["l"], j["v"]) and os.path.exists(path(j))

    todo = [j for j in jobs if not done(j)]
    chars = sum(len(j["s"]) for j in todo)
    print(f"{len(jobs)} textes au total, {len(jobs) - len(todo)} déjà faits, {len(todo)} à générer ({chars} caractères).")
    for l, (code, names) in VOICES.items():
        print(f"  {l} : {code}, homme = {names[0]}, femme = {names[1]}")
    if not todo:
        return finish(jobs, path)

    key = os.environ.get("GOOGLE_TTS_KEY") or getpass.getpass("Clé API Google (Text-to-Speech) : ").strip()
    if not key:
        print("Pas de clé, arrêt."); return

    # vérifie la clé et l'existence des 4 voix avant de lancer la série
    for l, (code, names) in VOICES.items():
        try:
            got = {v["name"] for v in json.loads(http(BASE + "voices?languageCode=" + code + "&key=" + urllib.parse.quote(key)))["voices"]}
        except Exception as e:
            print("ERREUR (clé refusée ou API non activée) :", err_text(e)); return
        for v in (0, 1):
            if voice_name(l, v) not in got:
                print(f"ERREUR : la voix {voice_name(l, v)} n'existe pas chez Google. Voix Chirp 3 HD disponibles pour {code} :")
                print("  " + ", ".join(sorted(n.split('-')[-1] for n in got if "Chirp3-HD" in n))); return

    lock = threading.Lock()
    count = [0, 0]
    errors = []

    def work(j):
        try:
            audio = synth(key, j)
            with open(path(j), "wb") as f:
                f.write(audio)
            with lock:
                state[j["l"] + "/" + j["id"]] = voice_name(j["l"], j["v"])
                count[0] += 1
                if count[0] % 25 == 0:
                    with open(STATE, "w", encoding="utf-8") as f:
                        json.dump(state, f)
                    print(f"  {count[0]} / {len(todo)}")
        except Exception as e:
            with lock:
                count[1] += 1
                errors.append((j["k"], str(e)))
                if count[1] <= 5:
                    print(f"  ERREUR « {j['k'][:50]} » : {e}")

    # un premier texte seul : si ça échoue, inutile de lancer le reste
    work(todo[0])
    if count[1]:
        print("Le premier essai a échoué, arrêt. Rien n'a été consommé."); return
    with ThreadPoolExecutor(WORKERS) as ex:
        list(ex.map(work, todo[1:]))
    with open(STATE, "w", encoding="utf-8") as f:
        json.dump(state, f)
    print(f"\nGénérés : {count[0]}   Erreurs : {count[1]}")
    if errors:
        print("Relance le script pour refaire uniquement les textes en erreur.")
        return
    finish(jobs, path)


def finish(jobs, path):
    missing = [j for j in jobs if not os.path.exists(path(j))]
    if missing:
        print(f"Il manque encore {len(missing)} fichiers : relance le script."); return
    z = os.path.join(HERE, "aprende-voix.zip")
    with zipfile.ZipFile(z, "w", zipfile.ZIP_STORED) as zf:
        for j in jobs:
            zf.write(path(j), j["l"] + "/" + j["id"] + ".mp3")
        zf.write(STATE, "etat.json")
    print(f"Terminé : {len(jobs)} fichiers dans {OUT}")
    print(f"Archive prête : {z} ({os.path.getsize(z) / 1e6:.1f} Mo)")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nInterrompu. Relance le script pour reprendre.")
    try:
        input("Appuie sur Entrée pour fermer.")
    except Exception:
        pass
