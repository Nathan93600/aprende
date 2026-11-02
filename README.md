# ¡Aprende!

**App trilingue interactive pour apprendre l'espagnol, le lingala et l'anglais — avec RPG gamifié et révisions FSRS.**

🌐 **[Lancer l'app](https://nathan93600.github.io/aprende/)**

---

## Langues

| Langue | Drapeau | Objectif |
|--------|---------|----------|
| Espagnol | 🇪🇸 | Compréhension orale native (séries, podcasts) |
| Lingala | 🇨🇩 | Conversation courante et vocabulaire familial |
| Anglais | 🇬🇧 | Niveau C1/C2 oral américain professionnel |

## Fonctionnalités

### Parcours structuré
- Cours organisés en **sections → unités → nœuds** (leçons, quiz, dialogues)
- Progression indépendante par langue avec suivi visuel
- Leçons interactives avec exercices variés (QCM, texte à trous, matching, traduction)

### Révisions SRS (FSRS-6)
- Algorithme FSRS-6 avec rétention cible 0.9
- Flashcards recto/verso avec swipe mobile
- Revlog persistant au format `[clé, timestamp, grade, type, intervalle, durée]`

### Système RPG gamifié
- **Héros** avec niveaux, PV, XP, classes (Mage, Guerrier, Érudit, Ranger)
- **7 quêtes quotidiennes** par langue : révisions SRS, leçons, bonus trilingue
- **Boss de quête** à combattre avec chaque bonne réponse
- **Or & boutique** : potions, gels de série, récompenses personnalisées
- **Streak** avec milestones animés (7j → 365j), célébrations confettis + particules
- **Avertissement streak** : 3 niveaux d'urgence avec langues manquantes affichées

### Objectifs quotidiens
- Suivi du temps d'étude **par langue** avec barres de progression 🇪🇸🇨🇩🇬🇧
- Bonus individuels par langue + bonus trilingue

### Badges & accomplissements
- Badges par catégorie : révisions, leçons, streak, trilingue, SRS par langue
- Progression visible dans l'écran Héros

### Story Mode
- Dialogues immersifs incorporant le vocabulaire de la semaine
- Scènes interactives avec choix et personnages

## Stack technique

- **Frontend** : HTML / CSS / JavaScript vanilla (fichier unique `app.js`)
- **PWA** : Service Worker + manifest.json, installable sur mobile
- **Auth** : Firebase Authentication (Google Sign-In)
- **Base de données** : Firestore avec persistance offline
- **localStorage shim** : Sync bidirectionnel Firestore ↔ localStorage via `sync.js`
- **Mode hors-ligne** : `SYNC_LOCAL_MODE` détecte PWA standalone et bypass Firebase
- **Hébergement** : GitHub Pages

## Structure

```
├── index.html        # Point d'entrée HTML
├── app.js            # Logique complète (~10 000+ lignes)
├── style.css         # Styles et animations
├── sync.js           # Shim localStorage ↔ Firestore
├── sw.js             # Service Worker (cache offline)
├── manifest.json     # Manifest PWA
└── README.md
```

## Développement

L'app est un SPA vanilla sans build step. Pour développer :

```bash
# Cloner
git clone https://github.com/Nathan93600/aprende.git
cd aprende

# Servir localement (n'importe quel serveur statique)
npx serve .
# ou
python3 -m http.server 8000
```

Ouvrir `http://localhost:8000` dans le navigateur.

## Génération hebdomadaire

Chaque vendredi, une nouvelle génération est produite avec :
- Les mots en attente ajoutés aux cours
- Un journal de session
- Des alertes grammaticales
- Des leçons ciblées sur le vocabulaire de la semaine
- Un dialogue Story incorporant les nouveaux mots

---

*Projet personnel de Nathan Sandja — fait avec passion pour l'apprentissage des langues.*
