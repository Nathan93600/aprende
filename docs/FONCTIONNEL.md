# ¡Aprende! — Documentation fonctionnelle

Ce document décrit ce que fait l'application, écran par écran, du point de vue de l'utilisateur.
Pour le code et les formats de données, voir [TECHNIQUE.md](TECHNIQUE.md) ; pour adapter l'appli à
d'autres langues ou à un autre apprenant, voir [PERSONNALISER.md](PERSONNALISER.md).

---

## 1. En bref

¡Aprende! est une application web installable sur téléphone (PWA) pour apprendre du vocabulaire et
des tournures dans trois langues, depuis le français :

| Langue | Objectif visé | Particularités |
|---|---|---|
| 🇪🇸 Espagnol | B2, compréhension orale native | chaque mot est situé : Espagne (castellano), Amérique latine ou les deux |
| 🇬🇧 Anglais | C1, oral américain | équivalents C1/C2, phonétique « à la française », exercices d'accent |
| 🇨🇩 Lingala | B2, lingala de RDC (Kinshasa) | mots non confirmés marqués « à vérifier », pas de voix |

L'appli fonctionne sans serveur et sans IA au moment de l'utilisation : tout le contenu (mots,
exemples, fiches, leçons, histoires, voix) est préparé à l'avance et livré avec l'appli.

---

## 2. Navigation

Une barre d'onglets en bas de l'écran donne accès aux six espaces :

| Onglet | Contenu |
|---|---|
| 🗺️ **Parcours** | cours structurés en unités et en nœuds (leçons, révision, boss, coffre) |
| 🧠 **Réviser** | révision espacée des cartes (algorithme FSRS) |
| 🎮 **Jeux** | les mini-jeux de la langue choisie |
| ⚔️ **Héros** | personnage RPG, quêtes du jour, badges |
| 🏪 **Boutique** | objets achetés avec l'or gagné |
| ⚙️ **Réglages** | langue, objectifs, sons, notifications, sauvegarde |

La langue active se choisit à l'ouverture (écran de choix de langue) et change le contenu de tous
les onglets. Chaque langue a sa couleur de fond dans les onglets Réviser et Jeux : pêche pour
l'espagnol, bleu pour l'anglais, turquoise pour le lingala.

---

## 3. Parcours (cours)

- Les cours sont découpés en **sections** (A1, A2, B1, B2, « Perso »…) puis en **unités** thématiques.
- Chaque unité comporte **6 nœuds** : 3 leçons de découverte, une révision, un **boss** et un **coffre**.
  Une unité se débloque quand la précédente est commencée ; les unités « accès libre » sont toujours ouvertes.
- Le bouton **📘 Guide** d'une unité affiche la règle de grammaire, la liste des mots avec leur
  exemple, le bouton 🔊 et l'accès à la fiche de chaque mot.
- Les leçons mélangent plusieurs exercices : QCM, texte à trous, association, traduction libre
  (avec correction tolérante grâce aux fiches), écoute.
- La section **« Perso »** (en tête de liste) regroupe les mots ajoutés par l'apprenant chaque semaine
  et les cartes qu'il rate le plus. Elle est mise à jour à chaque « génère » (voir §10).
- Les mots appris en cours sont ajoutés automatiquement à la pile de révision.

---

## 4. Réviser (répétition espacée)

L'écran de révision montre une carte à la fois :

1. **Recto** : le mot dans la langue étudiée, avec son niveau (anglais) et son état
   (« Apprentissage », « Sangsue »). Toucher la carte la retourne.
2. **Verso** : la traduction, l'exemple, les équivalents C1/C2 (anglais) et le bouton
   **＋ Fiche : variantes et pièges**.
3. L'apprenant se note : **Encore**, **Difficile**, **Bien** ou **Facile**. Sous chaque bouton,
   l'intervalle avant la prochaine révision (ex. « 10 min », « 3 j »).

Autres éléments de l'écran :

- compteurs **Nouvelles / À revoir / Acquis**, barre de progression de la session ;
- réglage **Nouvelles / jour** (nombre de nouvelles cartes introduites chaque jour) ;
- **↶** annule la dernière note ; **📊** statistiques ; **📅** planning des révisions à venir ;
  **📖** annuaire de tous les mots, avec filtres par source (vocabulaire, journal, cours) ;
- **Simulation** : un jour = 3 secondes, pour voir l'algorithme travailler ;
- au clavier : Espace = révéler, 1 à 4 = noter, Z = annuler.

Les cartes oubliées 8 fois deviennent des **sangsues**. Les cartes en apprentissage reviennent
dans la même séance (1 min, puis 10 min).

### Statistiques

Révisions du jour, rétention réelle sur 30 jours, série de jours, répartition des cartes
(nouvelles, en apprentissage, jeunes, matures, sangsues), carte d'activité et prévisions sur 30 jours.

---

## 5. Fiches de mots

Chaque mot révisable a une **fiche**, ouverte depuis la carte, le guide d'une unité ou le bilan :

- **variété de langue** : 🇪🇸 Espagne, 🌎 Amérique latine ou 🌐 les deux ; pour le lingala,
  forme de Kinshasa, lingala standard ou ⚠️ à vérifier ;
- **exemple** avec sa traduction et sa lecture à voix haute ;
- **💡 Pour retenir** : une astuce de mémorisation ;
- **Se dit aussi** : synonymes et variantes, avec leur nuance ;
- **⚠️ Pièges** : erreurs typiques d'un francophone, barrées, avec l'explication.

Ces mêmes données servent à corriger la traduction libre : une variante est comptée juste,
un piège est compté faux avec son explication.

---

## 6. Jeux

| 🇪🇸 Espagnol (19) | 🇬🇧 Anglais (11) | 🇨🇩 Lingala (3) |
|---|---|---|
| Flashcards, QCM rapide, Frappe le mot, Mode vitesse, Mode survie | Flashcards, QCM, Frappe le mot, Mode survie | Flashcards, QCM, Frappe le mot |
| Entraîneur, QCM et tableau de conjugaison | SRS prononciation US, Leçons accent américain | |
| Leçons subjonctif et gérondif | Phrases C1 natives, Délatinise, Connected speech, Réactions natives, Accent tonique | |
| Palette synesthésique, Mind map, Lettres colorées, Aura personnalisée, Calendrier des mots | | |
| Wordle, Anagramme, Qui suis-je ?, Blitz, Chaîne de mots | | |

Écrans communs : **Session rapide** (sous-paquet aléatoire de 15, 30 mots ou tout le paquet,
dans le mode de jeu choisi), **Réviser par jour** (les mots d'une session du journal),
**Journal des mots** (les mots classés par date d'ajout), **Grammaire** (règles et révision des règles),
**Stories** (dialogues à choix, voir ci-dessous).

### Stories

Dialogues interactifs qui réemploient le vocabulaire de la semaine. L'apprenant choisit ses
répliques : la bonne formulation, un calque du français (expliqué) ou une version correcte mais
moins idiomatique. Des questions de compréhension ponctuent l'histoire. Les répliques sont lues
avec une voix d'homme ou de femme selon le personnage.

---

## 7. Voix

- L'anglais (voix américaines) et l'espagnol (voix d'Espagne) sont lus avec des **voix
  pré-enregistrées** (Google Cloud Chirp 3 HD : Puck et Aoede en anglais, Achird et Aoede en espagnol).
- Si un texte n'a pas d'enregistrement, ou hors connexion, l'appli utilise la **voix du téléphone**.
- Le lingala n'a pas de voix pour l'instant (voir TECHNIQUE.md, §7).

---

## 8. Héros, quêtes et boutique (RPG)

- Un **héros** avec niveau, points de vie, XP et une classe (Mage, Guerrier, Érudit, Ranger…).
- **7 quêtes du jour** : réviser 7 cartes et faire une leçon dans chaque langue, étudier les trois langues.
- Un **boss** perd des PV à chaque bonne réponse ; les erreurs coûtent des PV au héros.
- L'**or** gagné s'échange à la boutique : potion de soin, gel de série (protège la série un jour
  sans activité), changement de classe.
- **Série** de jours avec paliers animés (7 j → 365 j) et alerte quand la série est menacée.
- **Badges** : premières leçons, boss, séries, cartes révisées, trilingue…
- **Objectifs du jour** : minutes d'étude par langue, avec barres de progression.

---

## 9. Réglages, sauvegarde, synchronisation

- **Sons** et **vibrations**, **notifications** de rappel (heure réglable, alerte de série).
- **Sauvegarde** : exporte toute la progression dans un fichier `aprende-progres-AAAA-MM-JJ.json`
  (partage natif sur téléphone) ; **restauration** depuis ce fichier.
- **Deux modes de stockage** :
  - **local** (par défaut sur téléphone, appli installée) : tout reste dans le téléphone, aucun compte ;
  - **synchronisé** (par défaut sur ordinateur) : connexion Google et synchronisation Firebase entre appareils.
  On force un mode avec `?local=1` ou `?cloud=1` dans l'adresse. Une copie de l'appli pour un autre
  apprenant fonctionne uniquement en mode local (`config.js`, voir TECHNIQUE.md §3).
- **Bilan de la semaine** : révisions, réussite, mots les plus ratés, et un mot de l'auteur des contenus.

---

## 10. Le « génère » du vendredi (cycle de contenu)

Le contenu évolue chaque semaine selon ce cycle :

1. Pendant la semaine, l'apprenant note les mots rencontrés (séries, conversations…).
2. Le vendredi, il envoie sa sauvegarde depuis l'appli (bouton « génère »). Un bandeau le lui rappelle.
3. Le contenu de la semaine est produit hors de l'appli et poussé sur le dépôt :
   cartes, unité thématique dans la section « Perso », fiches, exemples, histoires, phrases de
   prononciation, voix, bilan.
4. L'appli se met à jour d'elle-même au rechargement suivant.

Le détail technique de ce cycle est dans [PERSONNALISER.md](PERSONNALISER.md), §6.
