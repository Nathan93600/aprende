# Prompt 2 — Questionnaire de personnalisation

**À utiliser avec** : le même Claude que pour le prompt 1 (accès à ton dépôt), une fois ta copie en ligne.

Claude te pose des questions par petits groupes, te montre le plan des changements, attend ton
accord, puis modifie l'appli, la teste et pousse.

**Avant de coller** : remplace `<MON-COMPTE>/aprende` par ton dépôt.

---

```text
Tu vas personnaliser ma copie de ¡Aprende! (dépôt <MON-COMPTE>/aprende), une PWA statique
d'apprentissage de langues. Lis d'abord docs/PERSONNALISER.md et docs/TECHNIQUE.md : ils décrivent
les fichiers, les formats de données et ce qu'il faut modifier.

Règles :
- Pose-moi les questions par groupes de 3 ou 4, avec des choix proposés quand c'est possible,
  et attends mes réponses avant le groupe suivant.
- Ne modifie rien avant d'avoir toutes les réponses et de m'avoir montré le plan, puis attends mon « ok ».
- L'appli reste statique : pas de serveur, pas de Firebase, pas d'IA à l'exécution.

Groupe 1 — Moi
1. Mon prénom (il remplace « Nathan » dans les cours et les exemples).
2. Ma langue maternelle. (L'interface et les traductions sont en français ; si ce n'est pas la mienne,
   dis-moi honnêtement l'ampleur du travail avant d'aller plus loin.)
3. Pourquoi j'apprends : voyage, travail, famille, séries, examen… ?

Groupe 2 — Mes langues
4. Lesquelles je garde parmi espagnol, anglais, lingala ?
5. Est-ce que j'en remplace une par une autre langue, ou j'en ajoute une 4e ?
   (Explique-moi la différence de travail : remplacer est simple, ajouter est plus long.)
6. Pour chaque langue gardée : mon niveau actuel et le niveau visé (A1 → C2).

Groupe 3 — Variantes et voix
7. Espagnol : plutôt d'Espagne (castellano), d'Amérique latine (quel pays ?), ou les deux en les signalant ?
8. Anglais : accent américain ou britannique ? Veux-tu les équivalents plus soutenus (C1/C2) pour chaque mot ?
9. Lingala : de quelle région (RDC / Kinshasa, Congo-Brazzaville…) ?
10. Voix : j'utiliserai Google Cloud Text-to-Speech (gratuit jusqu'à 1 million de caractères par mois) ?
    Voix d'homme et de femme par langue, ou je choisis plus tard ?

Groupe 4 — Le contenu de départ
11. Je garde les mots de l'auteur (environ 560 espagnols, 200 anglais, 150 lingala, avec fiches,
    histoires et voix), ou je repars de zéro (cours de base seulement, aucun mot personnel) ?
    Explique-moi les deux options en deux phrases avant que je réponde (PERSONNALISER.md §3).
12. Si je garde les mots : je retire ceux d'une langue que je n'apprends pas ? Je garde les histoires ?
13. Combien de nouvelles cartes par jour (10, 20, 30) ?

Groupe 5 — Mon rythme
14. Le jour du « génère » hebdomadaire (vendredi par défaut).
15. Mes thèmes de vocabulaire du moment (métier, sport, séries, cuisine…), pour orienter les exemples.
16. Ton ton dans les explications : direct et concis, ou plus détaillé ?

Ensuite :
A. Résume mes réponses en un tableau et liste précisément les fichiers que tu vas modifier.
B. Après mon « ok », applique les changements :
   - option « repartir de zéro » : vider VOCAB, ENGLISH, LINGALA et JOURNAL_SESSIONS dans app.js,
     retirer les unités de la section « Perso » des cours, vider CRS_WEEK.notes (PERSONNALISER.md §3) ;
   - option « garder les mots » : remplacer le prénom, les mentions personnelles de l'auteur, vider CRS_WEEK.notes ;
   - langues, variantes, niveaux visés (CRS_META), voix (tools/voix_google.py) ;
   - langue remplacée ou ajoutée : suivre la liste de PERSONNALISER.md §5, en entier ;
   - incrémenter CACHE_NAME dans sw.js.
C. Vérifie : node --check sur les fichiers JS modifiés ; si tu as un navigateur automatisé, ouvre l'appli
   servie en local et passe sur l'accueil de chaque langue, Réviser, un jeu par langue et le journal,
   sans erreur JavaScript.
D. Pousse, puis écris le fichier docs/MON_PROFIL.md avec mes réponses (sans aucun secret) :
   il servira à ma conversation Claude de tous les jours.
E. Termine en me donnant le prompt docs/prompts/3_CONVERSATION_CLAUDE.md déjà rempli avec mes
   réponses (prénom, langues, variantes, jour du génère, dépôt), prêt à coller.
```
