# -*- coding: utf-8 -*-
"""
Comparaison de voix pour ¡Aprende! : Google Cloud (Chirp 3 HD) contre ElevenLabs.
Génère les mêmes phrases avec les deux services, en anglais, en espagnol et en lingala (ElevenLabs seulement),
dans le dossier « aprende-voix-test » à côté de ce script.

Lancement (dans un terminal, depuis le dossier du script) :   python voix_test.py
Les clés sont demandées au lancement, ne s'affichent pas à l'écran et ne sont enregistrées nulle part.
Laisse une clé vide pour sauter ce service.
Aucune dépendance à installer : bibliothèque standard Python uniquement.
Consommation : environ 1 000 caractères chez chaque service (gratuit dans les deux cas).
"""
import base64, getpass, json, os, sys, urllib.error, urllib.parse, urllib.request

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "aprende-voix-test")
TEXTS = {
    "en": "For some reason, my internet went down. He's gonna run by the store on his way home. "
          "If you ask me, that deadline is unrealistic. Don't dwell on your mistakes, learn from them and move on.",
    "es": "¿Qué haces el fin de semana? Voy a coger el metro para ir al centro. Hizo un gol increíble.",
    "ln": "Libota na ngai ezali motuya mingi pona ngai. Ngomba na ngomba ekutanaka te kasi batu na batu bakutanaka.",
}


def http(url, data=None, headers=None, method=None):
    body = json.dumps(data).encode("utf-8") if data is not None else None
    h = {"Content-Type": "application/json"}
    h.update(headers or {})
    req = urllib.request.Request(url, data=body, headers=h, method=method or ("POST" if body else "GET"))
    try:
        with urllib.request.urlopen(req, timeout=90) as r:
            return r.read()
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"HTTP {e.code} : {e.read().decode('utf-8', 'replace')[:400]}")


def save(name, audio):
    os.makedirs(OUT, exist_ok=True)
    p = os.path.join(OUT, name + ".mp3")
    with open(p, "wb") as f:
        f.write(audio)
    print("  OK ", name)


# ───────────── Google Cloud, voix Chirp 3 HD ─────────────
def google(key):
    base = "https://texttospeech.googleapis.com/v1/"
    q = "?key=" + urllib.parse.quote(key)
    # deux voix par langue (une femme, une homme) parmi les voix Chirp 3 HD disponibles
    for lang, codes in (("en", ["en-US"]), ("es", ["es-ES", "es-US"])):
        for code in codes:
            try:
                voices = json.loads(http(base + "voices" + q + "&languageCode=" + code))["voices"]
            except Exception as e:
                print(f"  ERREUR liste des voix {code} : {e}")
                continue
            chirp = [v for v in voices if "Chirp3-HD" in v["name"] and code in v["languageCodes"]]
            picks = []
            for g in ("FEMALE", "MALE"):
                c = [v for v in chirp if v.get("ssmlGender") == g]
                if c:
                    picks.append(c[0])
            if not picks:
                print(f"  (pas de voix Chirp 3 HD pour {code})")
                continue
            for v in picks:
                try:
                    r = json.loads(http(base + "text:synthesize" + q, {
                        "input": {"text": TEXTS[lang]},
                        "voice": {"languageCode": code, "name": v["name"]},
                        "audioConfig": {"audioEncoding": "MP3"},
                    }))
                    g = "femme" if v.get("ssmlGender") == "FEMALE" else "homme"
                    save(f"{lang.upper()} Google - {v['name'].split('-')[-1]} ({g}, {code})", base64.b64decode(r["audioContent"]))
                except Exception as e:
                    print(f"  ERREUR {v['name']} : {e}")


# ───────────── ElevenLabs ─────────────
def eleven(key):
    base = "https://api.elevenlabs.io/v1/"
    H = {"xi-api-key": key}
    models = json.loads(http(base + "models", headers=H))
    tts = [m for m in models if m.get("can_do_text_to_speech")]
    print("  Modèles disponibles :", ", ".join(m["model_id"] for m in tts))

    def best_for(lang):
        # le modèle le plus récent qui déclare la langue ; à défaut, le plus récent tout court
        order = ["v4", "v3", "multilingual_v2", "turbo", "flash"]
        rank = lambda m: next((i for i, o in enumerate(order) if o in m["model_id"]), 99)
        ok = [m for m in tts if any(l.get("language_id") == lang for l in m.get("languages", []))]
        return (sorted(ok, key=rank) or sorted(tts, key=rank) or [None])[0], bool(ok)

    voices = json.loads(http(base + "voices", headers=H))["voices"]

    def pick(gender):
        lab = lambda v: v.get("labels") or {}
        c = [v for v in voices if lab(v).get("gender") == gender and "americ" in str(lab(v).get("accent", "")).lower()]
        c = c or [v for v in voices if lab(v).get("gender") == gender]
        return c[0] if c else None

    picks = [v for v in (pick("female"), pick("male")) if v]
    for lang in ("en", "es", "ln"):
        model, declared = best_for(lang)
        if not model:
            print("  (aucun modèle de synthèse disponible)")
            return
        if lang == "ln" and not declared:
            print(f"  Attention : aucun modèle ne déclare le lingala, essai quand même avec {model['model_id']}")
        for v in picks:
            try:
                audio = http(base + f"text-to-speech/{v['voice_id']}?output_format=mp3_44100_128",
                             {"text": TEXTS[lang], "model_id": model["model_id"]}, headers=H)
                g = "femme" if (v.get("labels") or {}).get("gender") == "female" else "homme"
                save(f"{lang.upper()} ElevenLabs - {v['name'].split(' ')[0]} ({g}, {model['model_id']})", audio)
            except Exception as e:
                print(f"  ERREUR {v['name']} {lang} : {e}")


if __name__ == "__main__":
    print("Comparaison de voix ¡Aprende! : les fichiers iront dans", OUT)
    gk = getpass.getpass("Clé API Google (Text-to-Speech), Entrée pour sauter : ").strip()
    ek = getpass.getpass("Clé API ElevenLabs, Entrée pour sauter : ").strip()
    if gk:
        print("\nGoogle Cloud :")
        try:
            google(gk)
        except Exception as e:
            print("  ERREUR :", e)
    if ek:
        print("\nElevenLabs :")
        try:
            eleven(ek)
        except Exception as e:
            print("  ERREUR :", e)
    print("\nTerminé. Ouvre le dossier aprende-voix-test pour écouter.")
    try:
        input("Appuie sur Entrée pour fermer.")
    except Exception:
        pass
