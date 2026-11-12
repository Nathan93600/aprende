# ¡Aprende! — Documentation technique

Ce document décrit le code, les formats de données et les outils. Pour ce que fait l'appli écran
par écran, voir [FONCTIONNEL.md](FONCTIONNEL.md). Pour l'adapter à un autre apprenant ou à d'autres
langues, voir [PERSONNALISER.md](PERSONNALISER.md).

---

## 1. Principes

- **Application statique** : HTML, CSS et JavaScript sans framework ni étape de compilation.
  Elle se sert telle quelle (GitHub Pages, ou n'importe quel serveur de fichiers).
- **Aucune IA à l'exécution** : tout le contenu (mots, exemples, fiches, leçons, histoires, voix)
  est produit à l'avance, pendant le « génère » hebdomadaire, puis poussé dans le dépôt.
  *Exception héritée* : quelques anciennes fonctions de `app.js` appellent encore l'API Anthropic
  (`loadConjugation`, `getAITip`, `startTD`, `getTDExplanation`, `generateStory`, `generateMnemonic`).
  Elles n'ont pas de clé et échouent sans bloquer l'appli. Ne pas s'en servir pour du nouveau contenu.
- **Données de l'apprenant dans le navigateur** (`localStorage`), exportables dans un fichier JSON.
- **PWA** : installable sur téléphone, fonctionne hors connexion (sauf les voix, lues en ligne).

---

## 2. Arborescence

```
index.html              tous les écrans (un <div class="screen"> par écran) et l'ordre de chargement des scripts
style.css               styles ; thème sombre d'origine + thème « pop » (fin de fichier, body.pop)
config.js               réglages de l'installation : Firebase oui/non, progression embarquée oui/non
sync.js                 stockage : localStorage natif (mode local) ou synchronisation Firebase
app.js                  toute la logique (≈ 11 000 lignes) + les paquets de mots, le journal, les histoires
courses/es.js, en.js, ln.js     cours structurés (sections, unités, mots, mini-grammaire)
courses/feedback*.js    fiches de mots (variantes, pièges, astuce) + bilan de la semaine (CRS_WEEK)
audio/manifest.js       index des voix : texte → fichier
audio/en/*.mp3, audio/es/*.mp3  voix pré-enregistrées
sw.js                   service worker (cache hors connexion)
manifest.json           manifeste PWA (nom, icône, couleurs)
tools/                  scripts de génération des voix (lancés hors de l'appli)
es.js, en.js, ln.js     (racine) anciennes versions des cours, plus chargées : ignorer
```

Ordre de chargement (fin de `index.html`) : Firebase (CDN) → `config.js` → `sync.js` →
`courses/*.js` → `courses/feedback*.js` → `audio/manifest.js` → `app.js`.

---

## 3. Réglages : `config.js`

```js
const APRENDE_CONFIG = {
  firebase: true,          // false : toujours en mode local, aucun compte
  embeddedProgress: true,  // false : ne jamais restaurer la progression embarquée dans app.js
};
```

Pour une copie de l'appli destinée à quelqu'un d'autre, mettre **les deux à `false`** :
l'appli démarre en mode local, sans écran de connexion, avec toutes les cartes à l'état « nouvelle ».

---

## 4. Stockage et sauvegarde

### Modes (`sync.js`)

| Mode | Quand | Comportement |
|---|---|---|
| **Local** | `firebase: false`, ou appli installée sur téléphone, ou `?local=1` dans l'adresse | `localStorage` du navigateur, rien n'est envoyé |
| **Firebase** | ordinateur, `firebase: true` (ou `?cloud=1`) | connexion Google ; `sync.js` remplace `localStorage` et synchronise 4 documents Firestore |

La configuration Firebase (`firebaseConfig` dans `sync.js`) est celle du projet de l'auteur.
Une copie de l'appli n'en a pas besoin : mettre `firebase: false`.

### Principales clés de `localStorage`

| Clé | Contenu |
|---|---|
| `srs_data` | cartes de révision, objet `{"<lang>:<mot>": carte}` (voir §6) |
| `srs_revlog` | historique des révisions `[clé, horodatage, note 0-3, type 0-3, intervalle, durée ms]` |
| `srs_new_per_day` | nombre de nouvelles cartes par jour |
| `es_xp`, `en_xp`, `ln_xp`, `score`, `streak` | XP par langue, score, série de jours |
| `es_mastered`, `en_mastered`, `ln_mastered`, `mastered` | mots maîtrisés dans les jeux |
| `crs_prog`, `crs_resume`, `crs_added` | progression dans les cours |
| `pron_srs`, `grammar_srs` | révision de la prononciation (anglais) et des règles de grammaire |
| `rpg` | héros, or, inventaire, quêtes |
| `genere_sent` | semaine du dernier envoi « génère » |
| `aprende_sfx`, `aprende_vibe`, `aprende_notif` | réglages sons, vibrations, notifications |

### Sauvegarde

`exportProgress()` écrit un fichier `aprende-progres-AAAA-MM-JJ.json` (format `version: 2`) avec la
progression : révisions, historique, XP, mots maîtrisés, cours, RPG, prononciation, grammaire ;
la restauration le relit (les réglages sons et notifications n'en font pas partie). Le même fichier sert au « génère » (§9).

`app.js` contient en tête une progression embarquée (`EMBEDDED_PROGRESS`, celle de l'auteur),
restaurée au premier lancement si aucune carte n'existe. `embeddedProgress: false` la désactive.

---

## 5. Contenu : formats de données

Trois langues, codées `es`, `en`, `ln`. Le français est la langue de l'interface et des traductions.

### 5.1 Paquets de mots (dans `app.js`)

| Constante | Langue | Format d'une carte |
|---|---|---|
| `VOCAB` (dédoublonné dans `DATA`) | espagnol | `{es, fr}` |
| `ENGLISH` | anglais | `{en, fr, lvl, c1, c2, say}` : niveau B2/C1/C2, équivalents C1 et C2, phrase d'exemple |
| `LINGALA` | lingala | `{ln, fr, ex_ln, ex_fr}` |

Exemples complémentaires : `ES_EXAMPLES` (`{"mot": [exemple, traduction]}`), `LN_EXTRA_EXAMPLES`
(même forme), `EN_LEVELS` (`{"mot": "C1"}`). `getDeckForLang(lang)` renvoie le paquet d'une langue.
Si un paquet est vide (copie repartie de zéro), `deckFromCourse()` le remplit au chargement avec les
mots des cours de la langue, pour que les jeux aient toujours des cartes.

### 5.2 Journal (`JOURNAL_SESSIONS`, dans `app.js`)

Une entrée par session de mots notés :

```js
{ date: "8 nov. 2026", label: "Sport · Justice · Quotidien",
  es: [["mot", "traduction", "exemple", "traduction de l'exemple"], …],
  en: [[…]], ln: [[…]],
  alertes: [ … ] }        // points de grammaire relevés (optionnel)
```

(`mots` est l'ancien nom de la liste espagnole.) Les mots du journal entrent automatiquement dans la révision.

### 5.3 Cours (`courses/<lang>.js`)

```js
const COURSE_ES = {
  sections: [["A1", "Les bases", "description"], …, ["Perso", "Sur mesure", "description", "top"]],
  units: [{
    e: "🏘️", t: "Titre de l'unité", s: 4,          // emoji, titre, index de la section
    free: true,                                      // optionnel : unité en accès libre
    g: { t: "Règle", tip: "Explication",            // mini-grammaire du guide
         q: [["Phrase à ___", ["bonne", "fausse", "fausse"], 0, "explication"], …] },
    w: [["mot", "traduction", "exemple", "traduction", 0], …]   // 5e champ : 1 = exemple à faire valider
  }, …]
};
```

`COURSES = { es: COURSE_ES, ln: COURSE_LN, en: COURSE_EN }`. La section marquée `"top"` (« Perso »)
s'affiche en tête : c'est là que vont les unités thématiques de chaque « génère ».
Chaque unité a 6 nœuds (`CRS_NODES`) : 3 leçons, révision, boss, coffre. Les leçons sont générées
à l'exécution à partir de `w` et `g` (QCM, trous, association, traduction libre, écoute).

### 5.4 Fiches de mots (`courses/feedback*.js`)

`courses/feedback.js` déclare `CRS_FB = { es: {}, ln: {}, en: {} }` et `CRS_WEEK` (bilan de la semaine) ;
les autres fichiers complètent avec `Object.assign(CRS_FB.<lang>, { … })`.

```js
"mot": {
  reg: "es",                                   // espagnol : es (Espagne) · latam · gen (partout)
                                               // lingala  : kin (Kinshasa) · std (standard) · check (à vérifier)
  alt: [["variante acceptée", "nuance"], …],   // comptée juste en traduction libre
  err: [["erreur typique", "explication"], …], // comptée fausse avec l'explication ; préfixe * = détectée partout
  tip: "astuce pour retenir"
}
```

`ficheFind(lang, mot)` retrouve la fiche (tolère casse, articles, `sb/sth`, formes « a / b »).
**Règle : tout mot révisable doit avoir une fiche.**

### 5.5 Histoires (`STORIES`, dans `app.js`)

```js
STORIES.es = [{ id, title, desc, level, chars: { T: ['🧑', 'Tú'], L: ['👩', 'Lucía'] },
  steps: [
    { type: 'line', who: 'L', text, tr },
    { type: 'choice', who: 'T', prompt, opts: [{ text, tr, best: true, note, then: [steps] },
                                               { text, tr, ok: false, note, then: [...] }, …] },
    { type: 'q', prompt, opts: [...], ans: 1 }
  ] }]
```

À la génération des voix, celle d'un personnage (homme ou femme) se déduit de son emoji.

### 5.6 Anglais oral (dans `app.js`)

`PRON_DATA` (`{"mot": [phrase, phonétique à la française, API, astuce]}`), `PRON_LESSONS`
(leçons d'accent), `NAT_C1`, `NAT_DELATIN`, `NAT_CONNECTED`, `NAT_REACT`, `NAT_STRESS` (jeux « natif »).

---

## 6. Révision espacée (FSRS-6)

- Une carte par mot et par langue, clé `"<lang>:<mot>"` dans `srs_data`.
- `srsNextState(carte, note, graine, maintenant)` calcule l'état suivant (fonction pure).
  Paramètres : `FSRS_W`, rétention visée 0,9.
- Au démarrage (`initApp`) : `srsMigrateAllToFsrs()` → `srsMigrateKeys()` (renomme les clés quand un mot
  change d'orthographe) → `srsAutoEnqueueNew()` (crée une carte « nouvelle » pour chaque mot du paquet,
  du journal et des cours qui n'en a pas) → `srsRepairFromRevlog()` (reconstruit une carte depuis
  l'historique si besoin).
- Limite de nouvelles cartes : nombre d'entrées de type 0 du jour dans `srs_revlog`.

**Conséquence importante** : renommer un mot dans les données crée une nouvelle carte. Corriger une
orthographe est sans danger (la migration suit la casse), changer le mot lui-même repart de zéro.

---

## 7. Voix

- `audio/manifest.js` : `AUDIO_MAP = { en: { "texte": "id" }, es: { … } }`.
- Fichier : `audio/<lang>/<id>.mp3`, avec `id = sha1("<lang>:" + clé).slice(0, 10)` et
  `clé = texte sans les parenthèses`.
- Voix 0 = homme, 1 = femme : imposée par le personnage dans les histoires, sinon `int(id, 16) % 2`.
- `playRecorded()` joue l'enregistrement ; s'il manque, `speakEN()` / `crsSpeak()` utilisent la voix du
  téléphone (`speechSynthesis`). Le lingala n'a pas de voix (`CRS_META.ln.tts = null`).
- Les MP3 ne passent pas par le cache du service worker (Safari les demande par morceaux).

### Outils (`tools/`)

| Script | Rôle |
|---|---|
| `voix_google.py` | génère les voix anglaises et espagnoles avec Google Cloud Text-to-Speech (Chirp 3 HD : Puck et Aoede en anglais, Achird et Aoede en espagnol). Lancé sur l'ordinateur de l'apprenant ; la clé est demandée au lancement. Lit `voix_textes.json`. |
| `voix_textes.json` | liste des textes à enregistrer `{l, k, s, id, v}` |
| `voix_lingala.py`, `voix_ln.json` | essai de voix lingala avec l'API Gemini (AI Studio). En pause : le quota gratuit est très faible. |
| `voix_collect.js` | liste les textes de l'appli sans enregistrement (chemins à adapter) |
| `voix_gen.py` | ancienne génération locale (Piper + vérification Whisper) |
| `voix_test.py` | comparaison Google / ElevenLabs |

Ajouter des voix : générer les MP3 avec le même `id`, les copier dans `audio/<lang>/`, ajouter les
entrées dans `AUDIO_MAP`. Coût Google Chirp 3 HD : 1 million de caractères gratuits par mois.

---

## 8. Interface

- Un écran = un `<div class="screen" id="…">` ; `showScreen(id)` l'affiche.
- Accueil par langue : `home` (espagnol), `home-en`, `home-ln` ; `selectLang(lang)` choisit.
- Barre d'onglets (`#crs-tabbar`, `tabGo()`) : Parcours, Réviser, Jeux, Héros, Boutique, Réglages.
- Thèmes : classe `t-es`, `t-en`, `t-ln` sur `<body>` (`crsTheme`). Le thème « pop » (`body.pop`)
  s'applique à Réviser, Jeux, tous les jeux, fiches et planning ; les écrans listés dans
  `FX_DARK_SCREENS` gardent le thème sombre. Couleurs par langue en fin de `style.css`
  (`--fx-paper`, `--fx-panel`).

---

## 9. Le « génère » (cycle hebdomadaire)

1. L'apprenant note ses mots dans une conversation Claude au fil de la semaine.
2. Le vendredi, le bouton **génère** de l'appli exporte la sauvegarde et copie le mot « génère » :
   l'apprenant dépose le fichier dans la conversation Claude.
3. Claude produit et pousse dans le dépôt :
   - les cartes : paquet (`VOCAB` / `ENGLISH` / `LINGALA`) ou session de `JOURNAL_SESSIONS` ;
   - une ou plusieurs unités thématiques dans la section « Perso » de `courses/<lang>.js` ;
   - une fiche par nouveau mot (`courses/feedback_*.js`) ;
   - les exemples, les phrases de prononciation (`PRON_DATA`), une histoire (`STORIES`) qui réemploie les mots ;
   - le bilan `CRS_WEEK`, à partir des cartes les plus ratées de la sauvegarde ;
   - les voix (script lancé par l'apprenant), puis `AUDIO_MAP` ;
   - **la version du cache** : `CACHE_NAME` dans `sw.js` (`aprende-vNN`), à incrémenter à chaque
     mise en ligne, sinon les téléphones gardent l'ancienne version.
4. Vérifications avant de pousser : `node --check app.js`, chargement de l'appli sans erreur dans un
   navigateur, chaque nouveau mot a sa fiche, rien ne casse les cartes existantes (§6).

---

## 10. Développer et tester

```bash
python3 -m http.server 8000      # à la racine du dépôt
# puis http://localhost:8000/index.html?local=1
```

- Pas de compilation. Vérifier la syntaxe : `node --check app.js`.
- Tester avec une sauvegarde réelle : la restaurer depuis Réglages, ou l'injecter dans
  `localStorage` avec un navigateur automatisé (Playwright).
- Publier : pousser sur la branche servie par GitHub Pages, après avoir incrémenté `CACHE_NAME`.
