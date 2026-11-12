# Prompt 1 — Recréer ¡Aprende! sur ton GitHub

**À utiliser avec** : Claude ayant accès à GitHub (Claude Code, ou une conversation Claude reliée à
ton compte GitHub, capable de créer un dépôt, de modifier des fichiers et de pousser).

**Avant de coller** : remplace `<MON-COMPTE>` par ton nom d'utilisateur GitHub et, si tu veux,
`aprende` par le nom de dépôt de ton choix.

---

```text
Je veux ma propre copie de l'application ¡Aprende!, une PWA statique d'apprentissage de langues
(espagnol, anglais, lingala depuis le français). Dépôt d'origine : https://github.com/Nathan93600/aprende
Mon compte GitHub : <MON-COMPTE>. Nom du nouveau dépôt : aprende.

Avant tout, lis docs/TECHNIQUE.md et docs/PERSONNALISER.md du dépôt d'origine.

Fais ceci, dans l'ordre :

1. Crée le dépôt <MON-COMPTE>/aprende avec tout le contenu du dépôt d'origine (fork, ou nouveau dépôt
   public dans lequel tu pousses une copie de la branche master). Garde le nom de branche master.

2. Rends l'appli autonome, sans Firebase et sans la progression de l'auteur :
   - config.js : firebase: false et embeddedProgress: false ;
   - sw.js : CACHE_NAME = 'aprende-v1' ;
   - ne touche pas au reste du code.

3. Active GitHub Pages sur la branche master, dossier racine (par l'API GitHub ou gh si tu peux ;
   sinon dis-moi exactement où cliquer : Settings → Pages → Deploy from a branch → master / root).

4. Vérifie :
   - node --check app.js et node --check sync.js ;
   - si tu as un navigateur automatisé, charge index.html servi en local : aucune erreur JavaScript,
     pas d'écran de connexion, toutes les cartes de révision à l'état « nouvelle » ;
   - l'adresse https://<MON-COMPTE>.github.io/aprende/ répond (compte une à deux minutes après l'activation).

5. Pousse, puis donne-moi :
   - l'adresse de l'appli ;
   - comment l'installer sur mon téléphone (Safari : Partager → Sur l'écran d'accueil ;
     Chrome Android : menu → Installer l'application) ;
   - la suite : coller le prompt docs/prompts/2_QUESTIONNAIRE_PERSONNALISATION.md pour personnaliser.

Ne pousse aucun secret (clé API, mot de passe). Explique-moi chaque étape en français, simplement.
```
