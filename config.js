// ¡Aprende! — réglages de l'installation. Chargé avant tout le reste (voir index.html).
// Pour une copie de l'appli (autre apprenant) : firebase: false et embeddedProgress: false.
const APRENDE_CONFIG = {
  // true  : sur ordinateur, connexion Google et synchronisation Firebase (projet de l'auteur).
  // false : toujours en mode local, partout ; aucun compte, aucune donnée envoyée.
  firebase: true,
  // true  : au tout premier lancement (aucune révision enregistrée), restaure la progression
  //         embarquée dans app.js (EMBEDDED_PROGRESS, celle de l'auteur).
  // false : un nouvel utilisateur démarre de zéro.
  embeddedProgress: true,
};
