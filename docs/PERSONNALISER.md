# ¡Aprende! — Reprendre et personnaliser l'appli

Ce guide s'adresse à quelqu'un qui veut sa propre ¡Aprende!, avec ses mots et ses leçons.
La base est trilingue (🇪🇸 espagnol, 🇬🇧 anglais, 🇨🇩 lingala, depuis le français) ; on peut ensuite
remplacer ou ajouter une langue.

On travaille comme l'auteur : **Claude** note les mots au fil de la semaine et fait le « génère »
du vendredi, qui produit le contenu et le pousse sur ton dépôt GitHub. L'appli elle-même reste
100 % statique : pas de serveur, pas de compte, pas d'IA pendant l'utilisation.

Trois prompts prêts à coller sont dans [`prompts/`](prompts/) :

| Étape | Prompt | Résultat |
|---|---|---|
| 1 | [`1_RECREER_SUR_GITHUB.md`](prompts/1_RECREER_SUR_GITHUB.md) | ta copie de l'appli sur ton GitHub, en ligne, en mode local |
| 2 | [`2_QUESTIONNAIRE_PERSONNALISATION.md`](prompts/2_QUESTIONNAIRE_PERSONNALISATION.md) | Claude te pose une série de questions et adapte l'appli (garder les mots de l'auteur ou repartir de zéro) |
| 3 | [`3_CONVERSATION_CLAUDE.md`](prompts/3_CONVERSATION_CLAUDE.md) | les instructions de ta conversation Claude de tous les jours (noter les mots, « génère ») |

---

## 1. Ce qu'il te faut

- Un compte **GitHub** (gratuit).
- **Claude** avec accès à ton dépôt GitHub : Claude Code (sur le web ou dans un terminal), ou une
  conversation Claude reliée à GitHub qui peut cloner, modifier et pousser.
- Pour les voix (facultatif) : un compte **Google Cloud** avec l'API Text-to-Speech activée et une
  clé API. Le premier million de caractères par mois est gratuit (voix Chirp 3 HD).
- Python 3 sur ton ordinateur, seulement pour lancer le script des voix.

Pas besoin de Firebase : ta copie fonctionne en **mode local** (les données restent dans ton
navigateur ; sauvegarde et restauration par fichier depuis les Réglages).

---

## 2. Recréer l'appli sur ton GitHub

Le prompt 1 fait tout ; à la main, cela revient à :

1. Créer un dépôt à partir de `Nathan93600/aprende` (fork, ou nouveau dépôt avec une copie des fichiers).
2. Dans `config.js` : `firebase: false` et `embeddedProgress: false`.
3. Dans `sw.js` : remettre `CACHE_NAME` à `'aprende-v1'` (ou un nom à toi).
4. Dans `manifest.json` et `index.html` (`<title>`) : le nom de ton appli si tu veux le changer.
5. Activer GitHub Pages : *Settings → Pages → Deploy from a branch → `master` (ou `main`) / root*.
6. Ouvrir `https://<ton-compte>.github.io/<ton-dépôt>/` sur ton téléphone et l'ajouter à l'écran d'accueil.

---

## 3. Garder les mots de l'auteur, ou repartir de zéro

### Option A : garder les mots

Tu pars avec tout le contenu existant : environ 560 mots espagnols, 200 anglais et 150 lingala
dans les paquets, 17 sessions de journal, les cours et leurs unités « Perso », les fiches, les
histoires et plus de 2 200 voix. Ta progression, elle, démarre à zéro (`embeddedProgress: false`).

À adapter quand même :
- le prénom **Nathan** dans `courses/es.js` et `courses/ln.js` (« me llamo… », « nkombo na ngai… ») ;
- les mentions **EY** (`courses/en.js`, `courses/feedback_en_deck2.js`) et **Aulnay** (`courses/es.js`) ;
- le bilan `CRS_WEEK` dans `courses/feedback.js` (il parle des erreurs de l'auteur) : le vider ;
- la fin du `README.md`.

### Option B : repartir de zéro

Tu gardes l'appli, les cours de base (A1 → B2/C1) et les jeux, mais aucun mot personnel :

| Fichier | À faire |
|---|---|
| `app.js` | `const VOCAB = [];`, `const ENGLISH = [];`, `const LINGALA = [];`, `const JOURNAL_SESSIONS = [];` |
| `courses/es.js`, `courses/en.js` | supprimer les unités dont `s` est l'index de la section « Perso » (garder la section elle-même, vide) |
| `courses/feedback.js` | vider `CRS_WEEK.notes` |
| `app.js` | `STORIES` : garder ou retirer les histoires (elles réemploient le vocabulaire de l'auteur) |

Les paquets vides ne posent pas de problème : tant qu'un paquet est vide, les jeux utilisent les mots
des cours de la langue. Les fiches, exemples et voix des mots retirés peuvent rester (ils sont
indexés par mot et ne s'affichent que si le mot existe).

---

## 4. Personnaliser

| Quoi | Où |
|---|---|
| Nom, niveau visé, voix d'une langue | `CRS_META` dans `app.js` (`target`, `tts`) |
| Variante d'espagnol (Espagne ou Amérique latine) | les fiches (`reg`), les étiquettes des cartes ; voix `es-ES` ou `es-US` dans `tools/voix_google.py` |
| Accent anglais (américain ou britannique) | voix `en-US` ou `en-GB` dans `tools/voix_google.py`, `CRS_META.en.tts`, contenus « US » des jeux natifs |
| Couleurs par langue | fin de `style.css` : `body.pop.t-es`, `.t-en`, `.t-ln` (`--fx-paper`, `--fx-panel`) |
| Nouvelles cartes par jour | dans l'appli, écran Réviser |
| Titre des accueils de langue | `index.html`, écrans `home`, `home-en`, `home-ln` |

---

## 5. Remplacer ou ajouter une langue

### Remplacer une langue (le plus simple)

Garder le code d'une langue (par exemple `ln`) et changer son contenu : `LINGALA`, `courses/ln.js`,
`CRS_FB.ln`, `STORIES.ln`, le drapeau et le nom dans `CRS_META.ln`, l'écran `home-ln` et le choix de
langue. Le code interne `ln` reste, seul l'affichage change. C'est ainsi qu'a été faite une variante
darija (arabe algérien) de l'appli, dans un dépôt séparé.

### Ajouter une 4e langue

Plus long : les trois langues sont codées en dur à plusieurs endroits. Liste de contrôle
(exemple avec le code `it` pour l'italien) :

1. **Données** : `const ITALIAN = [{it, fr, …}]` dans `app.js` ; `courses/it.js` (`const COURSE_IT`)
   chargé dans `index.html` ; `CRS_FB.it = {}` dans `courses/feedback.js` ; `STORIES.it = []`.
2. **Câblage** : `COURSES`, `CRS_META`, `getDeckForLang`, `selectLang`, `JOURNAL_SESSIONS` (clé `it`),
   `AUDIO_MAP.it`, `playRecorded`/`crsSpeak` (voix du téléphone `it-IT`).
3. **Écrans** : un accueil `home-it` dans `index.html` (copie de `home-ln`), le bouton dans le choix de
   langue et la barre latérale, le thème `t-it` (fin de `style.css`).
4. **Progression** : clés `it_xp` et `it_mastered` dans `exportProgress`, la restauration et la liste des
   clés synchronisées de `sync.js` ; quêtes et objectifs du jour du RPG.
5. **Voix** : ajouter la langue dans `VOICES` de `tools/voix_google.py`.
6. **Vérifier** : chercher `'ln'` dans `app.js` et traiter chaque endroit ; tester toute l'appli.

Le plus sûr est de demander à Claude de le faire avec cette liste et de tester chaque écran.

---

## 6. La semaine type

1. **Au fil de la semaine**, tu envoies à Claude les mots rencontrés (« usine en espagnol et anglais »,
   une capture d'écran, une phrase entendue). Claude répond avec la traduction, la variante, des exemples,
   et tient la **liste des mots en attente**.
2. **Le vendredi**, dans l'appli : bouton **génère**. Il exporte ta sauvegarde et copie le mot « génère ».
   Tu déposes le fichier dans la conversation Claude.
3. **Claude** ajoute les mots (cartes, unité « Perso », fiches, exemples, histoire, prononciation, bilan),
   vérifie, incrémente `CACHE_NAME` dans `sw.js` et pousse.
4. **Les voix** : Claude met à jour `tools/voix_textes.json` ; tu lances `python voix_google.py` sur ton
   ordinateur (ta clé Google t'est demandée, elle n'est jamais donnée à Claude), puis Claude ajoute les MP3.
5. Tu recharges l'appli : le nouveau contenu est là.

Le détail des formats est dans [TECHNIQUE.md](TECHNIQUE.md).
