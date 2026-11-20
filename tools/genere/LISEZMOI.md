# Listes du « génère »

Un fichier par génère, nommé d'après sa date : `AAAA-MM-JJ.txt`. C'est le contrat du génère : **une ligne
par mot à intégrer**, mots notés dans l'appli (« + mot ») et mots notés dans la conversation réunis.

```
# commentaire
en: pay off                                        mot à intégrer
en: stitching thread => thread                     noté sous une forme, intégré sous une autre
en: hook ! déjà dans l'appli                       laissé de côté : la raison est obligatoire
fr: empêcher de => es: impedir ; en: prevent from  noté en français : une forme par langue
```

`node tools/genere.js complet [liste] [sauvegarde.json]` vérifie alors, pour chaque mot : qu'il est dans
une unité (donc dans une leçon), avec traduction, phrase d'exemple traduite, fiche, astuce « Pour retenir »,
équivalents C1 (anglais), variété Espagne / Amérique latine (espagnol), voix du mot et de l'exemple.
Et autour : nouvelles unités en accès libre, histoire qui réemploie les mots, bilan de la semaine daté,
mots notés dans l'appli tous présents dans la liste. `node tools/genere.js pret` le lance tout seul
pendant un génère. Rien n'est poussé tant qu'il n'affiche pas « Génère complet » (ou « Données complètes »
en attendant les voix).

Les lignes avec `=>` ou `!` : lancer `node tools/genere.js traites` pour que l'appli retire aussi ces formes de
« Mots en attente » (sinon elles y restent, puisqu'elles ne sont pas dans l'appli sous ce nom). `complet` le vérifie.
