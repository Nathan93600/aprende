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
  *Exception héritée* : quelques anciennes fonctions de `js/` appellent encore l'API Anthropic
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
js/                     la logique, découpée par domaine (26 fichiers, chargés dans l'ordre de index.html) :
  progress-embedded.js    progression embarquée de l'auteur (voir config.js)
  lang.js                 langue courante
  data-es.js, data-en.js, data-ln.js   paquets de mots (VOCAB, ENGLISH, LINGALA)
  en-oral.js              anglais oral : niveaux, prononciation, accent
  core.js                 état, navigation (showScreen), utilitaires
  games-basic.js, games-memory.js, games-words.js, sessions.js   les jeux
  conjugation.js, conj-trainer.js      conjugaison espagnole (base CONJ_DB, jeux)
  conj-cards.js           cartes de conjugaison dans Réviser, temps calculés, phrases à déclencheur (CONJ_SENT)
  conj-sentences.js       suite de CONJ_SENT : une phrase par carte, au format compact
  journal.js              journal des mots (JOURNAL_SESSIONS) et règles de grammaire
  backup.js               sauvegarde / restauration, bouton « génère »
  srs.js                  révision espacée FSRS-6, écran Réviser, planning, fiches
  stats.js                statistiques
  course.js               parcours, moteur de leçons, thèmes clair / sombre / fond d'écran
  rpg.js, features.js, fx.js, sfx.js   héros, objectifs, badges, effets, sons
  stories.js              histoires (STORIES)
  settings.js             réglages et notifications
  plan-c1.js              programme C1 (rappels de l'accueil)
  extra-cards.js          cartes en plus dans Réviser : production et écoute (paquet extra_srs)
  leech.js                atelier des cartes difficiles (entraînement libre)
  oral-reports.js         import des rapports d'oral (Gemini, ChatGPT) vers les mots en attente
  pending.js              mots notés dans l'appli (« + mot »), en attente du génère
  init.js                 démarrage (initApp)
tests/run.js            tests automatiques (voir §10)
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
`courses/*.js` → `courses/feedback*.js` → `audio/manifest.js` → `js/*.js` (dans l'ordre listé dans `index.html`).

Les fichiers de `js/` sont des scripts classiques qui partagent la même portée globale (pas de
`import`). L'ordre compte : une constante doit être déclarée avant le fichier qui s'en sert au
chargement. Tout nouveau fichier doit être ajouté **à la fois** dans `index.html` et dans la liste
du cache de `sw.js`.

---

## 3. Réglages : `config.js`

```js
const APRENDE_CONFIG = {
  firebase: true,          // false : toujours en mode local, aucun compte
  embeddedProgress: true,  // false : ne jamais restaurer la progression embarquée dans js/progress-embedded.js
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
| `srs_new_per_day_<langue>` | limite de nouvelles cartes par jour, propre à chaque langue (`srs_new_per_day` = ancienne limite commune, valeur de départ) |
| `extra_srs`, `xc_<prod|ecoute>_per_day_<langue>` | cartes en plus (`prod:en:mot`, `ecoute:en:mot`) et leur limite par jour |
| `oral_reports` | rapports d'oral importés : `[{d, src, lang, theme, level, priority, n, added, raw}]` (60 derniers) |
| `c1_log` | programme C1 : tâches cochées par jour |
| `pending_words` | mots notés avec « + mot » : `[{w, l, c, t}]`, `l` = `es`, `en`, `ln` ou `fr` (à traduire vers les deux) |
| `conj_srs`, `conj_per_day`, `conj_ustedes` | cartes de conjugaison espagnole (`conj:verbe|temps`), leur limite par jour, et le choix vosotros / ustedes |
| `rpg` | héros, or, inventaire, quêtes |
| `genere_sent` | semaine du dernier envoi « génère » |
| `aprende_sfx`, `aprende_vibe`, `aprende_notif` | réglages sons, vibrations, notifications |

### Sauvegarde

`exportProgress()` écrit un fichier `aprende-progres-AAAA-MM-JJ.json` (format `version: 2`) avec la
progression : révisions, historique, XP, mots maîtrisés, cours, RPG, prononciation, grammaire ;
la restauration le relit (les réglages sons et notifications n'en font pas partie). Le même fichier sert au « génère » (§9).

`js/progress-embedded.js` contient une progression embarquée (`EMBEDDED_PROGRESS`, celle de l'auteur),
restaurée au premier lancement si aucune carte n'existe. `embeddedProgress: false` la désactive.

---

## 5. Contenu : formats de données

Trois langues, codées `es`, `en`, `ln`. Le français est la langue de l'interface et des traductions.

### 5.1 Paquets de mots (dans `js/data-es.js`, `js/data-en.js`, `js/data-ln.js`)

| Constante | Langue | Format d'une carte |
|---|---|---|
| `VOCAB` (dédoublonné dans `DATA`) | espagnol | `{es, fr}` |
| `ENGLISH` | anglais | `{en, fr, lvl, c1, c2, say}` : niveau B2/C1/C2, équivalents C1 et C2, phrase d'exemple |
| `LINGALA` | lingala | `{ln, fr, ex_ln, ex_fr}` |

Exemples complémentaires : `ES_EXAMPLES` (`{"mot": [exemple, traduction]}`), `LN_EXTRA_EXAMPLES`
(même forme), `EN_LEVELS` (`{"mot": "C1"}`). `getDeckForLang(lang)` renvoie le paquet d'une langue.
Si un paquet est vide (copie repartie de zéro), `deckFromCourse()` le remplit au chargement avec les
mots des cours de la langue, pour que les jeux aient toujours des cartes.

### 5.2 Journal (`JOURNAL_SESSIONS`, dans `js/journal.js`)

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
`courses/feedback_tips.js`, chargé en dernier, ajoute l'astuce `tip` aux fiches qui n'en ont pas, sans
toucher au reste. Le test `fiches` vérifie que chaque fiche a son astuce.

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

### 5.5 Histoires (`STORIES`, dans `js/stories.js`)

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

### 5.6 Anglais oral (dans `js/en-oral.js`)

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

### Cartes en plus : production et écoute (`js/extra-cards.js`)

- Elles s'ajoutent aux cartes de base, sans les remplacer. Paquet à part `extra_srs`, clés
  `prod:<langue>:<mot>` et `ecoute:<langue>:<mot>`, même FSRS et même historique que le reste.
- `xcQueue(lang)` est mêlée à la file par `srsBuildQueue`. Une carte en plus n'est créée que si la carte
  de base est bien connue (intervalle ≥ 7 jours pour la production, ≥ 4 pour l'écoute), 4 nouvelles par
  type et par jour au plus, et jamais le jour où la carte de base (ou l'autre carte en plus du même mot)
  est révisée.
- Production : le français est affiché, on tape le mot ou on le dit puis on révèle. `xcJudgeWord` accepte
  l'article ou « to » en moins, une variante « a / b », une lettre d'écart ; en espagnol l'accent compte.
- Écoute (espagnol, anglais) : `xcListen` choisit la phrase d'exemple si elle a une voix enregistrée, sinon
  le mot. Un mot sans voix n'a pas de carte d'écoute.
- Réponse fausse : seulement « Encore » ou « Difficile ». Révélée sans rien taper : on se note soi-même.

### Atelier des cartes difficiles (`js/leech.js`)

`lzList(lang)` : sangsues, puis cartes oubliées au moins 2 fois. L'atelier montre l'astuce, le mot et les
pièges, puis teste (8 cartes). Il ne modifie ni `srs_data` ni `srs_revlog`.

### Rapports d'oral (`js/oral-reports.js`)

`C1_PLAN.reportFormat` fixe le format du rapport (bloc `=== RAPPORT APRENDE ===`, sections `ERREURS:`,
`A DIRE PLUTOT:`, `MOTS FRANCAIS:`, `VOCABULAIRE:`, `PRONONCIATION:`…). Deux consignes le contiennent :
`audioPrompt`, `freePrompt` et `readPrompt` (Gemini, envoyées avec un enregistrement : thème de la semaine,
vocal libre, lecture d'un texte) et `chatPrompt` (ChatGPT, conversation ; on écrit
RAPPORT à la fin). `orParse` lit le rapport collé, tolère le texte autour et le gras ; les éléments cochés
partent dans `pending_words`, le rapport dans `oral_reports`, et la conversation du jour est cochée.

### Conjugaison espagnole (`js/conj-cards.js`)

- Une carte = un verbe + un temps, clé `conj:tener|preterito`, rangée dans `conj_srs` (jamais dans
  `srs_data`). Même algorithme FSRS, même historique (`srs_revlog`, clé préfixée `conj:`).
- `srsBuildQueue('es')` y mêle les cartes renvoyées par `conjQueue()` : au plus `conj_per_day`
  cartes par jour (révisions d'abord), dont au plus `CONJ_NEW_MAX` nouvelles.
- La carte se tape. `conjJudge()` exige les accents (`hablo` ≠ `habló`) ; une réponse fausse ne peut
  être notée que « Encore » ou « Difficile ». À chaque réussite, la personne demandée change (`p`).
- Neuf temps. Six sont écrits à la main dans `CONJ_DB` (`CONJ_BASE_TENSES`) ; `conjDerive()` en calcule
  trois au chargement : `perfecto` (haber + participe, irréguliers dans `CONJ_PART`), `subj_imperfecto`
  (à partir de « ellos » au prétérit : dijeron → dijera) et `imperativo` (tú, usted, nosotros, vosotros,
  ustedes ; pas de « yo », donc `null` au rang 0 ; verbes sans ordre naturel dans `CONJ_NO_IMP`).
  Ajouter un verbe = ses six temps de base, plus son participe ou son impératif « tú » s'ils sont irréguliers.
- `CONJ_SENT` : phrases à déclencheur `[verbe, temps, personne, phrase avec ___, traduction, déclencheur]`,
  plus une réponse écrite à la main en 7ᵉ position pour l'impératif avec pronoms (`dámelo`). Sinon la forme
  attendue vient de `CONJ_DB` (`conjAnswer`). Les 148 premières sont dans `conj-cards.js`, la suite dans
  `conj-sentences.js` (une ligne `verbe|personne|phrase|traduction|déclencheur`). On n'ajoute qu'à la fin :
  les leçons en cours repèrent une phrase par son rang. Le test `conjugaison` vérifie chaque phrase et
  que chaque carte en a au moins une.
- `conj_ustedes` = `1` : la 2ᵉ personne du pluriel (vosotros) n'est plus demandée (`conjPersonOk`).
- Leçons espagnoles : `conjLessonPicks(u, n)` ajoute 2 ou 3 exercices `{t:'conj', c}` limités aux
  temps déjà vus (`conjTensesForUnit`). Pour ajouter un verbe : une entrée dans `CONJ_DB` suffit.
- Une erreur en leçon (`crsMissToSrs`) avance la carte du mot au lendemain, sans toucher à sa
  mémoire, et met le verbe raté en tête des nouvelles cartes de conjugaison (`conjBump`).

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
| `genere.js` | outil du « génère » : doublons, vérifications, liste des voix, rangement des mp3, cache (§9) |
| `voix_gen.py` | ancienne génération locale (Piper + vérification Whisper) |
| `voix_test.py` | comparaison Google / ElevenLabs |

Ajouter des voix : générer les MP3 avec le même `id`, les copier dans `audio/<lang>/`, ajouter les
entrées dans `AUDIO_MAP`. Coût Google Chirp 3 HD : 1 million de caractères gratuits par mois.

---

## 8. Interface

- Un écran = un `<div class="screen" id="…">` ; `showScreen(id)` l'affiche.
- Accueil par langue : `home` (espagnol), `home-en`, `home-ln` ; `selectLang(lang)` choisit.
- Barre d'onglets (`#crs-tabbar`, `tabGo()`) : Parcours, Réviser, Jeux, Héros, Boutique, Réglages.
- Thèmes : classe `t-es`, `t-en`, `t-ln` sur `<body>` (`crsTheme`). Tout l'appli utilise le thème « pop »
  (`body.pop`, fin de `style.css`) : `--ink` pour les contours, les ombres et le texte sur couleur vive, `--tx` pour
  le texte courant, `--fx-paper` / `--fx-panel` / `--fx-field` pour les fonds, une palette par langue.
- Mode clair ou sombre : `body.dark`, réglage `aprende_theme` (`auto`, `light`, `dark` ; `auto` suit le système),
  appliqué par `fxApplyTheme()` et dès le chargement par un petit script dans `index.html` (pas de flash).
- Fonds d'écran : `#fx-wall` (fixe, sous tout le contenu), `img/wall-<langue>-light.jpg` (mode clair) et `img/wall-<langue>-dark.jpg` (mode sombre), pour `en`, `es` et `ln`, (clair) avec un voile de la
  couleur du thème ; réglage `aprende_wall` (`0` = désactivé). Pour une nouvelle langue : ajouter `img/wall-<lang>.jpg`
  et les deux règles `body.pop.wall.t-<lang> #fx-wall` (clair et sombre).

---

## 9. Le « génère » (cycle hebdomadaire)

1. L'apprenant note ses mots au fil de la semaine : dans l'appli (bouton **+ mot**, hors connexion,
   `js/pending.js`, liste `pending_words`) ou dans une conversation Claude.
2. Le vendredi, le bouton **génère** de l'appli exporte la sauvegarde (qui contient `pending_words`)
   et copie le mot « génère » : l'apprenant dépose le fichier dans la conversation Claude.
3. Claude trie la liste, puis produit et pousse dans le dépôt :
   - les cartes : paquet (`VOCAB` / `ENGLISH` / `LINGALA`) ou session de `JOURNAL_SESSIONS` ;
   - une ou plusieurs unités thématiques dans la section « Perso » de `courses/<lang>.js` ;
   - une fiche par nouveau mot (`courses/feedback_*.js`), astuce « Pour retenir » comprise ;
   - les exemples, les phrases de prononciation (`PRON_DATA`), une histoire (`STORIES`) qui réemploie les mots ;
   - le bilan `CRS_WEEK`, à partir des cartes les plus ratées de la sauvegarde ;
   - une version idiomatique de chaque rapport d'oral anglais (`courses/oral_idiomatic.js`, clé « date|thème »), avec les expressions de l'appli en gras ;
   - les voix (script lancé par l'apprenant), puis `AUDIO_MAP`.

### L'outil `tools/genere.js`

| Commande | Rôle |
|---|---|
| `node tools/genere.js doublons sauvegarde.json` | pour chaque mot noté : *nouveau*, *DÉJÀ* (avec l'endroit) ou *proche*. Accepte aussi `en:"pay off\|hook" es:lujo` ou un fichier texte `langue: mot` |
| `node tools/genere.js complet [liste] [sauvegarde.json]` | **le contrôle du génère** : pour chaque mot de la liste `tools/genere/AAAA-MM-JJ.txt`, il faut une unité, une traduction, un exemple traduit, une fiche avec astuce, les équivalents C1 (anglais), la variété (espagnol, lingala), les voix. Autour : unités `free: true`, histoire qui réemploie les mots, `CRS_WEEK` daté, mots notés dans l'appli tous dans la liste. Format de la liste : `tools/genere/LISEZMOI.md` |
| `node tools/genere.js traites` | écrit `courses/genere_traites.js` : les formes notées puis intégrées autrement (`=>`) ou laissées de côté (`!`) dans les listes. L'appli s'en sert pour les retirer de « Mots en attente » ; `complet` refuse le génère si ce fichier n'est pas à jour |
| `node tools/genere.js verif` | les fichiers se chargent ; **aucun compteur ne baisse depuis le dernier commit** (mots, fiches, unités, histoires, voix : un fichier tronqué est vu tout de suite) ; aucun mot renommé ; format des unités, fiches, histoires ; chaque voix a son fichier ; `sw.js` à jour ; aucune clé dans le dépôt |
| `node tools/genere.js voix` | liste ce que l'appli peut lire et qui n'a pas d'enregistrement, et l'ajoute à `tools/voix_textes.json` (marqué `n:1`) |
| `node tools/genere.js audio <dossier ou .zip>` | range les mp3 reçus dans `audio/<langue>/` et complète `audio/manifest.js` |
| `node tools/genere.js cache` | incrémente `CACHE_NAME` dans `sw.js` (une seule fois par mise en ligne) |
| `node tools/genere.js pret` | `verif` + tests automatiques (§10). **À lancer avant chaque `git push`.** |

`voix` et `pret` demandent Playwright (`NODE_PATH=$(npm root -g)`), les autres commandes rien.

`pret` lance `complet` tout seul dès qu'une liste récente existe et que les cours ont changé, ainsi que
`tests/genere.js` (les tests de l'outil lui-même).

Ordre type : écrire la liste → `doublons` → rédaction des données → `traites` → `complet` → `voix` → (voix générées sur le PC) → `audio` →
`cache` → `pret` → `git push`.

---

## 10. Développer et tester

```bash
python3 -m http.server 8000      # à la racine du dépôt
# puis http://localhost:8000/index.html?local=1
```

- Pas de compilation.
- **Tests automatiques** (Playwright ; le script lance son propre serveur) :

  ```bash
  npm i -g playwright && npx playwright install chromium     # une fois
  NODE_PATH=$(npm root -g) node tests/run.js                  # tout
  NODE_PATH=$(npm root -g) node tests/run.js fiches lecons    # seulement certains groupes
  APRENDE_BACKUP=ma-sauvegarde.json node tests/run.js sauvegarde   # avec une vraie sauvegarde
  ```

  Groupes : `boot` (démarrage sans erreur), `srs` (calcul FSRS), `donnees` (format des cours),
  `fiches` (chaque mot a sa fiche), `audio` (chaque voix de l'index existe), `progression`
  (les cartes existantes ne bougent pas), `ecrans` (tous les écrans, clair et sombre, et lisibilité
  de chaque texte sur son fond ; détail avec `node tests/run.js ecrans --contraste`), `lecons`,
  `histoires`, `conjugaison`, `bonus`, `rapport`, `difficiles`, `mots`, `c1`, `sauvegarde`. À lancer avant chaque mise en ligne.
- Tester avec une sauvegarde réelle : la restaurer depuis Réglages, ou l'injecter dans
  `localStorage` avec un navigateur automatisé (Playwright).
- Publier : pousser sur la branche servie par GitHub Pages, après avoir incrémenté `CACHE_NAME`.
