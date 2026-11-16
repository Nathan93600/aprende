// ¡Aprende! — js/conj-cards.js : Conjugaison espagnole dans Réviser (cartes verbe + temps, à taper) et phrases à déclencheur pour les leçons
// ═══════════════════════════════════════════════
// CARTES DE CONJUGAISON
// ═══════════════════════════════════════════════
// Une carte = un verbe + un temps (clé « conj:tener|preterito »), rangée dans son propre paquet
// (localStorage « conj_srs ») pour ne pas se mélanger au vocabulaire. Même algorithme FSRS que les mots.
// À chaque passage, la personne demandée change. L'accent compte : hablo ≠ habló.

// Phrases à déclencheur : [verbe, temps, personne (0-5), phrase avec ___, traduction, déclencheur]
const CONJ_SENT = [
  // ── Presente ──
  ['ser', 'presente', 0, 'Yo ___ de Francia, pero vivo en España.', 'Je viens de France, mais je vis en Espagne.', 'Yo'],
  ['estar', 'presente', 1, '¿Dónde ___ tú ahora mismo?', 'Où es-tu en ce moment ?', 'ahora mismo'],
  ['tener', 'presente', 0, 'Ahora mismo yo no ___ tiempo.', 'Là, tout de suite, je n\'ai pas le temps.', 'Ahora mismo'],
  ['hacer', 'presente', 0, 'Yo siempre ___ deporte por la mañana.', 'Je fais toujours du sport le matin.', 'siempre'],
  ['ir', 'presente', 3, 'Todos los viernes nosotros ___ al cine.', 'Tous les vendredis, nous allons au cinéma.', 'Todos los viernes'],
  ['poder', 'presente', 1, '¿Tú ___ ayudarme un momento?', 'Tu peux m\'aider un instant ?', 'Tú'],
  ['querer', 'presente', 2, 'Mi hermana ___ un café con leche.', 'Ma sœur veut un café au lait.', 'Mi hermana'],
  ['saber', 'presente', 0, 'Yo no ___ dónde están las llaves.', 'Je ne sais pas où sont les clés.', 'Yo'],
  ['venir', 'presente', 5, 'Mis primos ___ a casa cada domingo.', 'Mes cousins viennent à la maison chaque dimanche.', 'cada domingo'],
  ['poner', 'presente', 0, 'Yo ___ la mesa todos los días.', 'Je mets la table tous les jours.', 'todos los días'],
  ['decir', 'presente', 2, 'Mi madre siempre ___ la verdad.', 'Ma mère dit toujours la vérité.', 'siempre'],
  ['salir', 'presente', 0, 'Normalmente yo ___ de casa a las ocho.', 'D\'habitude, je sors de chez moi à huit heures.', 'Normalmente'],
  ['dar', 'presente', 0, 'Yo te ___ mi palabra.', 'Je te donne ma parole.', 'Yo'],
  ['ver', 'presente', 3, 'Nosotros ___ una serie cada noche.', 'Nous regardons une série chaque soir.', 'cada noche'],
  ['empezar', 'presente', 2, 'La clase ___ a las nueve en punto.', 'Le cours commence à neuf heures pile.', 'La clase'],
  ['seguir', 'presente', 0, 'Yo ___ sin entender este problema.', 'Je ne comprends toujours pas ce problème.', 'Yo'],
  ['cerrar', 'presente', 5, 'Las tiendas ___ a las diez.', 'Les magasins ferment à dix heures.', 'Las tiendas'],
  ['acordarse', 'presente', 0, 'Yo no ___ de su nombre.', 'Je ne me souviens pas de son nom.', 'Yo'],
  ['levantarse', 'presente', 1, '¿A qué hora ___ tú normalmente?', 'À quelle heure te lèves-tu d\'habitude ?', 'normalmente'],
  ['crecer', 'presente', 5, 'Los niños ___ muy rápido.', 'Les enfants grandissent très vite.', 'Los niños'],
  ['coger', 'presente', 0, 'Yo ___ el metro para ir al trabajo.', 'Je prends le métro pour aller au travail.', 'Yo'],
  ['agradecer', 'presente', 0, 'Yo te ___ mucho tu ayuda.', 'Je te remercie beaucoup pour ton aide.', 'Yo'],
  ['mantener', 'presente', 0, 'Yo ___ mi opinión.', 'Je maintiens mon avis.', 'Yo'],
  ['vivir', 'presente', 4, '¿Vosotros ___ en Madrid?', 'Vous habitez à Madrid ?', 'Vosotros'],
  ['hablar', 'presente', 5, 'Mis padres ___ tres idiomas.', 'Mes parents parlent trois langues.', 'Mis padres'],
  // ── Pretérito (action terminée, datée) ──
  ['tener', 'preterito', 0, 'Ayer yo ___ un problema con el coche.', 'Hier, j\'ai eu un problème avec la voiture.', 'Ayer'],
  ['hacer', 'preterito', 2, '¿Qué ___ Juan el sábado pasado?', 'Qu\'a fait Juan samedi dernier ?', 'el sábado pasado'],
  ['ir', 'preterito', 3, 'El verano pasado nosotros ___ a Barcelona.', 'L\'été dernier, nous sommes allés à Barcelone.', 'El verano pasado'],
  ['decir', 'preterito', 5, 'Ayer ellos me ___ que no.', 'Hier, ils m\'ont dit non.', 'Ayer'],
  ['estar', 'preterito', 0, 'Anoche yo ___ en casa de Marta.', 'Hier soir, j\'étais chez Marta.', 'Anoche'],
  ['poder', 'preterito', 0, 'Ayer yo no ___ dormir.', 'Hier, je n\'ai pas pu dormir.', 'Ayer'],
  ['poner', 'preterito', 2, 'Ella ___ las llaves en la mesa hace un rato.', 'Elle a posé les clés sur la table il y a un moment.', 'hace un rato'],
  ['venir', 'preterito', 5, 'Mis amigos ___ a verme la semana pasada.', 'Mes amis sont venus me voir la semaine dernière.', 'la semana pasada'],
  ['querer', 'preterito', 2, 'Él no ___ venir a la fiesta anoche.', 'Il n\'a pas voulu venir à la fête hier soir.', 'anoche'],
  ['saber', 'preterito', 0, 'Ayer yo ___ la noticia por la radio.', 'Hier, j\'ai appris la nouvelle à la radio.', 'Ayer'],
  ['dar', 'preterito', 2, 'Mi abuela me ___ este reloj hace diez años.', 'Ma grand-mère m\'a donné cette montre il y a dix ans.', 'hace diez años'],
  ['ver', 'preterito', 0, 'Anoche yo ___ una película muy buena.', 'Hier soir, j\'ai vu un très bon film.', 'Anoche'],
  ['ser', 'preterito', 2, 'El concierto de ayer ___ increíble.', 'Le concert d\'hier était incroyable.', 'ayer'],
  ['empezar', 'preterito', 0, 'Yo ___ a trabajar aquí en 2024.', 'J\'ai commencé à travailler ici en 2024.', 'en 2024'],
  ['sacar', 'preterito', 0, 'Ayer yo ___ dinero del cajero.', 'Hier, j\'ai retiré de l\'argent au distributeur.', 'Ayer'],
  ['seguir', 'preterito', 2, 'Después de la pausa, él ___ hablando una hora.', 'Après la pause, il a continué à parler une heure.', 'Después de la pausa'],
  ['comer', 'preterito', 3, 'Ayer nosotros ___ paella en la playa.', 'Hier, nous avons mangé une paella à la plage.', 'Ayer'],
  ['hablar', 'preterito', 1, '¿Tú ___ con tu jefe ayer?', 'Tu as parlé avec ton chef hier ?', 'ayer'],
  ['salir', 'preterito', 5, 'Anoche ellos ___ muy tarde del trabajo.', 'Hier soir, ils sont sortis très tard du travail.', 'Anoche'],
  ['vivir', 'preterito', 0, 'Yo ___ dos años en Sevilla.', 'J\'ai vécu deux ans à Séville.', 'dos años'],
  ['levantarse', 'preterito', 0, 'Esta mañana yo ___ a las seis.', 'Ce matin, je me suis levé à six heures.', 'Esta mañana'],
  ['olvidarse', 'preterito', 2, 'Ayer mi hermano ___ de mi cumpleaños.', 'Hier, mon frère a oublié mon anniversaire.', 'Ayer'],
  ['mantener', 'preterito', 2, 'Durante toda la reunión, ella ___ la calma.', 'Pendant toute la réunion, elle a gardé son calme.', 'Durante toda la reunión'],
  ['haber', 'preterito', 2, 'Ayer ___ un accidente en la autopista.', 'Hier, il y a eu un accident sur l\'autoroute.', 'Ayer'],
  ['trabajar', 'preterito', 4, '¿Vosotros ___ el domingo pasado?', 'Vous avez travaillé dimanche dernier ?', 'el domingo pasado'],
  // ── Imperfecto (décor, habitude passée) ──
  ['ser', 'imperfecto', 0, 'Cuando yo ___ niño, vivía en un pueblo.', 'Quand j\'étais petit, je vivais dans un village.', 'Cuando'],
  ['tener', 'imperfecto', 0, 'De pequeño, yo ___ un perro.', 'Petit, j\'avais un chien.', 'De pequeño'],
  ['ir', 'imperfecto', 3, 'Antes nosotros ___ a la playa todos los veranos.', 'Avant, nous allions à la plage tous les étés.', 'Antes'],
  ['ver', 'imperfecto', 2, 'De niña, ella ___ dibujos animados cada mañana.', 'Petite, elle regardait des dessins animés chaque matin.', 'De niña'],
  ['estar', 'imperfecto', 5, 'Mientras yo cocinaba, los niños ___ en el jardín.', 'Pendant que je cuisinais, les enfants étaient dans le jardin.', 'Mientras'],
  ['hacer', 'imperfecto', 2, 'Ayer ___ mucho frío cuando salí.', 'Hier, il faisait très froid quand je suis sorti.', 'cuando salí'],
  ['vivir', 'imperfecto', 3, 'En aquella época nosotros ___ en el centro.', 'À cette époque, nous habitions dans le centre.', 'En aquella época'],
  ['hablar', 'imperfecto', 2, 'Mi abuelo siempre ___ de la guerra.', 'Mon grand-père parlait toujours de la guerre.', 'siempre'],
  ['comer', 'imperfecto', 5, 'Antes ellos ___ carne todos los días.', 'Avant, ils mangeaient de la viande tous les jours.', 'Antes'],
  ['querer', 'imperfecto', 0, 'De joven, yo ___ ser futbolista.', 'Jeune, je voulais être footballeur.', 'De joven'],
  ['poder', 'imperfecto', 3, 'Antes nosotros ___ jugar en la calle sin peligro.', 'Avant, nous pouvions jouer dans la rue sans danger.', 'Antes'],
  ['saber', 'imperfecto', 1, '¿Tú ya ___ que ella estaba embarazada?', 'Tu savais déjà qu\'elle était enceinte ?', 'ya'],
  ['haber', 'imperfecto', 2, 'Antes ___ un cine en esta calle.', 'Avant, il y avait un cinéma dans cette rue.', 'Antes'],
  ['salir', 'imperfecto', 0, 'Cuando era estudiante, yo ___ todas las noches.', 'Quand j\'étais étudiant, je sortais tous les soirs.', 'Cuando era estudiante'],
  ['trabajar', 'imperfecto', 2, 'En 2020 mi padre ___ en una fábrica.', 'En 2020, mon père travaillait dans une usine.', 'En 2020'],
  ['levantarse', 'imperfecto', 0, 'Antes yo ___ a las cinco cada día.', 'Avant, je me levais à cinq heures chaque jour.', 'Antes'],
  ['decir', 'imperfecto', 2, 'Mi profesora siempre ___ que yo hablaba demasiado.', 'Ma prof disait toujours que je parlais trop.', 'siempre'],
  ['venir', 'imperfecto', 5, 'Cada Navidad mis tíos ___ a casa.', 'Chaque Noël, mes oncles venaient à la maison.', 'Cada Navidad'],
  ['dar', 'imperfecto', 2, 'El profesor nos ___ muchos deberes cada semana.', 'Le prof nous donnait beaucoup de devoirs chaque semaine.', 'cada semana'],
  ['caminar', 'imperfecto', 3, 'De niños, nosotros ___ una hora para ir al colegio.', 'Enfants, nous marchions une heure pour aller à l\'école.', 'De niños'],
  ['esperar', 'imperfecto', 0, 'Yo te ___ desde hacía una hora cuando llegaste.', 'Je t\'attendais depuis une heure quand tu es arrivé.', 'desde hacía una hora'],
  ['poner', 'imperfecto', 2, 'Mi madre siempre ___ música mientras cocinaba.', 'Ma mère mettait toujours de la musique en cuisinant.', 'siempre'],
  ['seguir', 'imperfecto', 5, 'A medianoche ellos todavía ___ hablando.', 'À minuit, ils parlaient encore.', 'todavía'],
  ['cenar', 'imperfecto', 4, '¿Vosotros ___ tan tarde cuando vivíais en España?', 'Vous dîniez si tard quand vous viviez en Espagne ?', 'cuando vivíais'],
  // ── Futuro ──
  ['tener', 'futuro', 0, 'Mañana yo ___ más tiempo.', 'Demain, j\'aurai plus de temps.', 'Mañana'],
  ['hacer', 'futuro', 2, 'Mañana ___ sol en toda España.', 'Demain, il fera soleil dans toute l\'Espagne.', 'Mañana'],
  ['ir', 'futuro', 3, 'El año que viene nosotros ___ a México.', 'L\'année prochaine, nous irons au Mexique.', 'El año que viene'],
  ['poder', 'futuro', 1, '¿Tú ___ venir mañana?', 'Tu pourras venir demain ?', 'mañana'],
  ['decir', 'futuro', 0, 'Yo te lo ___ mañana, te lo prometo.', 'Je te le dirai demain, promis.', 'mañana'],
  ['salir', 'futuro', 5, 'Los resultados ___ la semana que viene.', 'Les résultats sortiront la semaine prochaine.', 'la semana que viene'],
  ['venir', 'futuro', 2, 'Mi hermano ___ el mes que viene.', 'Mon frère viendra le mois prochain.', 'el mes que viene'],
  ['poner', 'futuro', 0, 'Mañana yo ___ la lavadora.', 'Demain, je lancerai une machine.', 'Mañana'],
  ['saber', 'futuro', 3, 'Pronto nosotros ___ la verdad.', 'Bientôt, nous saurons la vérité.', 'Pronto'],
  ['querer', 'futuro', 5, 'Seguro que ellos ___ venir también.', 'Ils voudront sûrement venir aussi.', 'Seguro que'],
  ['haber', 'futuro', 2, 'Mañana ___ huelga de trenes.', 'Demain, il y aura une grève des trains.', 'Mañana'],
  ['ser', 'futuro', 2, 'Dentro de diez años, todo ___ diferente.', 'Dans dix ans, tout sera différent.', 'Dentro de diez años'],
  ['estar', 'futuro', 0, 'Mañana a esta hora yo ___ en Barcelona.', 'Demain à cette heure-ci, je serai à Barcelone.', 'Mañana'],
  ['ver', 'futuro', 3, 'Mañana nosotros ___ qué pasa.', 'Demain, nous verrons ce qui se passe.', 'Mañana'],
  ['hablar', 'futuro', 0, 'Yo ___ con ella la próxima semana.', 'Je parlerai avec elle la semaine prochaine.', 'la próxima semana'],
  ['comer', 'futuro', 4, '¿Dónde ___ vosotros mañana?', 'Où mangerez-vous demain ?', 'mañana'],
  ['vivir', 'futuro', 5, 'En 2050 muchas personas ___ cien años.', 'En 2050, beaucoup de gens vivront cent ans.', 'En 2050'],
  ['dar', 'futuro', 2, 'El profesor nos ___ las notas el lunes que viene.', 'Le prof nous donnera les notes lundi prochain.', 'el lunes que viene'],
  ['empezar', 'futuro', 2, 'El curso ___ en septiembre próximo.', 'Le cours commencera en septembre prochain.', 'en septiembre próximo'],
  ['mantener', 'futuro', 3, 'Nosotros ___ el contacto, te lo prometo.', 'Nous garderons le contact, promis.', 'te lo prometo'],
  ['seguir', 'futuro', 0, 'Mañana yo ___ estudiando.', 'Demain, je continuerai à étudier.', 'Mañana'],
  ['trabajar', 'futuro', 1, '¿Tú ___ el sábado que viene?', 'Tu travailleras samedi prochain ?', 'el sábado que viene'],
  ['levantarse', 'futuro', 0, 'Mañana yo ___ temprano.', 'Demain, je me lèverai tôt.', 'Mañana'],
  ['acordarse', 'futuro', 1, 'Algún día tú ___ de mí.', 'Un jour, tu te souviendras de moi.', 'Algún día'],
  // ── Condicional (hypothèse, conseil, politesse) ──
  ['tener', 'condicional', 0, 'Con más dinero, yo ___ una casa en la playa.', 'Avec plus d\'argent, j\'aurais une maison à la plage.', 'Con más dinero'],
  ['hacer', 'condicional', 1, '¿Qué ___ tú en mi lugar?', 'Que ferais-tu à ma place ?', 'en mi lugar'],
  ['poder', 'condicional', 1, '¿___ tú ayudarme, por favor?', 'Pourrais-tu m\'aider, s\'il te plaît ?', 'por favor'],
  ['querer', 'condicional', 0, 'Yo ___ un café, por favor.', 'Je voudrais un café, s\'il vous plaît.', 'por favor'],
  ['decir', 'condicional', 0, 'Yo en tu lugar no ___ nada.', 'À ta place, je ne dirais rien.', 'en tu lugar'],
  ['ir', 'condicional', 3, 'Si pudiéramos, nosotros ___ a Japón.', 'Si nous pouvions, nous irions au Japon.', 'Si pudiéramos'],
  ['ser', 'condicional', 2, 'Sin ti, la vida ___ muy aburrida.', 'Sans toi, la vie serait très ennuyeuse.', 'Sin ti'],
  ['estar', 'condicional', 5, 'Con este tráfico, ellos ___ más tranquilos en casa.', 'Avec ces bouchons, ils seraient plus tranquilles à la maison.', 'Con este tráfico'],
  ['salir', 'condicional', 0, 'Yo que tú, no ___ esta noche.', 'Si j\'étais toi, je ne sortirais pas ce soir.', 'Yo que tú'],
  ['venir', 'condicional', 2, 'Él me dijo que ___ más tarde.', 'Il m\'a dit qu\'il viendrait plus tard.', 'me dijo que'],
  ['poner', 'condicional', 0, 'Yo en tu lugar ___ la mesa aquí.', 'À ta place, je mettrais la table ici.', 'en tu lugar'],
  ['saber', 'condicional', 1, '¿Tú ___ decirme dónde está la estación?', 'Saurais-tu me dire où est la gare ?', 'Tú'],
  ['haber', 'condicional', 2, 'Sin el paro, ___ menos problemas.', 'Sans le chômage, il y aurait moins de problèmes.', 'Sin el paro'],
  ['deber', 'condicional', 1, 'Tú ___ descansar un poco.', 'Tu devrais te reposer un peu.', 'Tú'],
  ['dar', 'condicional', 0, 'Yo ___ cualquier cosa por verla otra vez.', 'Je donnerais n\'importe quoi pour la revoir.', 'Yo'],
  ['ver', 'condicional', 3, 'Con gafas, nosotros ___ mucho mejor.', 'Avec des lunettes, nous verrions bien mieux.', 'Con gafas'],
  ['hablar', 'condicional', 0, 'Si tuviera tiempo, yo ___ con él.', 'Si j\'avais le temps, je parlerais avec lui.', 'Si tuviera'],
  ['comer', 'condicional', 5, 'Si pudieran, mis hijos ___ pizza todos los días.', 'S\'ils pouvaient, mes enfants mangeraient de la pizza tous les jours.', 'Si pudieran'],
  ['vivir', 'condicional', 0, 'Si pudiera elegir, yo ___ en Barcelona.', 'Si je pouvais choisir, je vivrais à Barcelone.', 'Si pudiera'],
  ['trabajar', 'condicional', 2, 'Ella dijo que ___ desde casa el lunes.', 'Elle a dit qu\'elle travaillerait de chez elle lundi.', 'dijo que'],
  ['mantener', 'condicional', 0, 'Yo en tu lugar ___ la calma.', 'À ta place, je garderais mon calme.', 'en tu lugar'],
  ['esperar', 'condicional', 0, 'Yo que tú ___ un poco más.', 'Si j\'étais toi, j\'attendrais encore un peu.', 'Yo que tú'],
  ['seguir', 'condicional', 3, 'Sin tu ayuda, nosotros ___ perdidos.', 'Sans ton aide, nous serions encore perdus.', 'Sin tu ayuda'],
  ['cerrar', 'condicional', 5, 'Sin clientes, las tiendas ___ antes.', 'Sans clients, les magasins fermeraient plus tôt.', 'Sin clientes'],
  // ── Subjuntivo presente (souhait, doute, émotion, but) ──
  ['venir', 'subjuntivo', 1, 'Quiero que tú ___ a mi fiesta.', 'Je veux que tu viennes à ma fête.', 'Quiero que'],
  ['tener', 'subjuntivo', 1, 'Espero que tú ___ un buen día.', 'J\'espère que tu passeras une bonne journée.', 'Espero que'],
  ['ser', 'subjuntivo', 2, 'No creo que ___ verdad.', 'Je ne crois pas que ce soit vrai.', 'No creo que'],
  ['estar', 'subjuntivo', 1, 'Me alegro de que tú ___ aquí.', 'Je suis content que tu sois là.', 'Me alegro de que'],
  ['hacer', 'subjuntivo', 1, 'Es importante que tú ___ los deberes.', 'Il est important que tu fasses tes devoirs.', 'Es importante que'],
  ['ir', 'subjuntivo', 3, 'Mi madre quiere que nosotros ___ a verla.', 'Ma mère veut que nous allions la voir.', 'quiere que'],
  ['poder', 'subjuntivo', 1, 'Ojalá tú ___ venir mañana.', 'Pourvu que tu puisses venir demain.', 'Ojalá'],
  ['decir', 'subjuntivo', 1, 'Necesito que tú me ___ la verdad.', 'J\'ai besoin que tu me dises la vérité.', 'Necesito que'],
  ['saber', 'subjuntivo', 5, 'No quiero que mis padres lo ___.', 'Je ne veux pas que mes parents le sachent.', 'No quiero que'],
  ['salir', 'subjuntivo', 1, 'Antes de que tú ___, cierra la ventana.', 'Avant que tu sortes, ferme la fenêtre.', 'Antes de que'],
  ['poner', 'subjuntivo', 1, 'Te pido que tú ___ el móvil en silencio.', 'Je te demande de mettre ton portable en silencieux.', 'Te pido que'],
  ['dar', 'subjuntivo', 2, 'Espero que el jefe me ___ una respuesta pronto.', 'J\'espère que le chef me donnera vite une réponse.', 'Espero que'],
  ['haber', 'subjuntivo', 2, 'Ojalá ___ sol mañana.', 'Pourvu qu\'il y ait du soleil demain.', 'Ojalá'],
  ['ver', 'subjuntivo', 5, 'Quiero que ellos ___ lo que has hecho.', 'Je veux qu\'ils voient ce que tu as fait.', 'Quiero que'],
  ['querer', 'subjuntivo', 1, 'Haz lo que tú ___.', 'Fais ce que tu veux.', 'lo que'],
  ['hablar', 'subjuntivo', 3, 'Es mejor que nosotros ___ en persona.', 'Il vaut mieux que nous parlions en personne.', 'Es mejor que'],
  ['comer', 'subjuntivo', 5, 'El médico recomienda que los niños ___ más fruta.', 'Le médecin recommande que les enfants mangent plus de fruits.', 'recomienda que'],
  ['vivir', 'subjuntivo', 1, 'Dudo que tú ___ tan lejos.', 'Je doute que tu habites si loin.', 'Dudo que'],
  ['empezar', 'subjuntivo', 3, 'Cuando nosotros ___, avísame.', 'Quand nous commencerons, préviens-moi.', 'Cuando'],
  ['seguir', 'subjuntivo', 1, 'Te recomiendo que tú ___ este consejo.', 'Je te recommande de suivre ce conseil.', 'Te recomiendo que'],
  ['acordarse', 'subjuntivo', 1, 'Espero que tú ___ de mí.', 'J\'espère que tu te souviendras de moi.', 'Espero que'],
  ['cerrar', 'subjuntivo', 1, 'Te ruego que tú ___ la puerta.', 'Je te prie de fermer la porte.', 'Te ruego que'],
  ['sacar', 'subjuntivo', 2, 'Ojalá ella ___ buena nota.', 'Pourvu qu\'elle ait une bonne note.', 'Ojalá'],
  ['trabajar', 'subjuntivo', 4, 'No me gusta que vosotros ___ tanto.', 'Je n\'aime pas que vous travailliez autant.', 'No me gusta que'],
  ['mantener', 'subjuntivo', 5, 'Es necesario que ellos ___ la calma.', 'Il faut qu\'ils gardent leur calme.', 'Es necesario que'],
  ['esperar', 'subjuntivo', 1, 'Para que tú no ___ demasiado, salgo ya.', 'Pour que tu n\'attendes pas trop, je pars tout de suite.', 'Para que'],
];

const CONJ_BASE_TENSES = ['presente', 'preterito', 'imperfecto', 'futuro', 'condicional', 'subjuntivo'];   // écrits à la main dans CONJ_DB
const CONJ_TENSES = [...CONJ_BASE_TENSES, 'perfecto', 'imperativo', 'subj_imperfecto'];                     // les trois derniers sont calculés (conjDerive)
const CONJ_TENSE_FR = { presente: 'Présent', preterito: 'Prétérit', imperfecto: 'Imparfait', futuro: 'Futur', condicional: 'Conditionnel', subjuntivo: 'Subjonctif', perfecto: 'Passé composé', imperativo: 'Impératif', subj_imperfecto: 'Subjonctif imparfait' };
// Pourquoi ce temps : rappel affiché après la réponse
const CONJ_WHY = {
  presente: 'présent : ce qui est vrai maintenant ou d\'habitude',
  preterito: 'prétérit : action terminée, à un moment précis du passé',
  imperfecto: 'imparfait : décor ou habitude du passé',
  futuro: 'futur : ce qui arrivera',
  condicional: 'conditionnel : hypothèse, conseil ou politesse',
  subjuntivo: 'subjonctif : souhait, doute, émotion ou but',
  perfecto: 'passé composé : action passée encore liée au présent (hoy, esta semana, ya, todavía no)',
  imperativo: 'impératif : ordre, conseil ou invitation',
  subj_imperfecto: 'subjonctif imparfait : hypothèse (si…), ou souhait et doute au passé',
};
// Amorce utilisée quand la carte n'a pas de phrase : elle annonce le temps
const CONJ_LEAD = { presente: 'Ahora', preterito: 'Ayer', imperfecto: 'Antes', futuro: 'Mañana', condicional: 'Con más tiempo,', subjuntivo: 'Ojalá', perfecto: 'Hoy', imperativo: '', subj_imperfecto: 'Si' };
const CONJ_NEW_MAX = 4;   // nouvelles cartes de conjugaison par jour, au plus

// ── Temps calculés : passé composé, impératif, subjonctif imparfait ──
// Ils se déduisent des temps écrits à la main ; seules les exceptions sont listées ici.
const CONJ_PART = { hacer: 'hecho', decir: 'dicho', ver: 'visto', poner: 'puesto', ser: 'sido', ir: 'ido', escribir: 'escrito', abrir: 'abierto', volver: 'vuelto', romper: 'roto', morir: 'muerto', cubrir: 'cubierto', resolver: 'resuelto', leer: 'leído', creer: 'creído', caer: 'caído', oír: 'oído', traer: 'traído', reír: 'reído' };
const CONJ_IMP_TU = { decir: 'di', hacer: 'haz', ir: 've', poner: 'pon', salir: 'sal', ser: 'sé', tener: 'ten', venir: 'ven', mantener: 'mantén' };
const CONJ_NO_IMP = ['haber', 'poder', 'querer', 'saber', 'deber', 'significar', 'faltar', 'estar'];   // pas d'ordre naturel avec ces verbes
const CONJ_REFL = ['me', 'te', 'se', 'nos', 'os', 'se'];
// Pose l'accent écrit sur la syllabe tonique d'un mot accentué sur l'avant-dernière (levanta → levánta), avant d'y coller un pronom
function conjStress(word) {
  const groups = [...word.matchAll(/[aeiouáéíóúü]+/g)];
  if(groups.length < 2 || /[áéíóú]/.test(word)) return word;
  const g = groups[groups.length - 2], v = g[0];
  let k = [...v].findIndex(ch => 'aeo'.includes(ch)); if(k < 0) k = v.length - 1;
  const acc = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' }[v[k]] || v[k];
  return word.slice(0, g.index + k) + acc + word.slice(g.index + k + 1);
}
function conjDerive() {
  const haber = ['he', 'has', 'ha', 'hemos', 'habéis', 'han'];
  for(const verb of Object.keys(CONJ_DB)) {
    const db = CONJ_DB[verb], refl = /se$/.test(verb) && /^se /.test(db.presente[2]), inf = refl ? verb.slice(0, -2) : verb;
    const bare = f => refl ? f.replace(/^(me|te|se|nos|os) /, '') : f;
    // Passé composé : haber + participe
    if(!db.perfecto) {
      const part = CONJ_PART[inf] || (/ar$/.test(inf) ? inf.slice(0, -2) + 'ado' : inf.slice(0, -2) + 'ido');
      db.perfecto = haber.map((h, i) => (refl ? CONJ_REFL[i] + ' ' : '') + h + ' ' + part);
    }
    // Subjonctif imparfait (-ra) : à partir de « ellos » au prétérit (dijeron → dijera)
    if(!db.subj_imperfecto && db.preterito && /ron$/.test(db.preterito[5])) {
      const stem = bare(db.preterito[5]).slice(0, -3), acc = stem.replace(/([ae])$/, m => ({ a: 'á', e: 'é' }[m]));
      db.subj_imperfecto = [stem + 'ra', stem + 'ras', stem + 'ra', acc + 'ramos', stem + 'rais', stem + 'ran'].map((f, i) => (refl ? CONJ_REFL[i] + ' ' : '') + f);
    }
    // Impératif affirmatif : tú, usted, nosotros, vosotros, ustedes (pas de « yo »)
    if(!db.imperativo && !CONJ_NO_IMP.includes(verb) && db.subjuntivo) {
      const tu = CONJ_IMP_TU[inf] || bare(db.presente[2]), ud = bare(db.subjuntivo[2]), nos = inf === 'ir' ? 'vamos' : bare(db.subjuntivo[3]), vos = inf.slice(0, -1) + 'd', uds = bare(db.subjuntivo[5]);
      db.imperativo = refl
        ? [null, conjStress(tu) + 'te', conjStress(ud) + 'se', conjStress(nos).slice(0, -1) + 'nos', vos.slice(0, -1) + 'os', conjStress(uds) + 'se']
        : [null, tu, ud, nos, vos, uds];
    }
  }
}
try { conjDerive(); } catch(e) { console.warn('[Aprende] temps calculés', e); }

// Espagne (vosotros) ou Amérique latine (ustedes) : avec « ustedes », la 2e personne du pluriel n'est jamais demandée
function conjUstedes() { try { return localStorage.getItem('conj_ustedes') === '1'; } catch(e) { return false; } }
function conjSetUstedes(on) { try { localStorage.setItem('conj_ustedes', on ? '1' : '0'); } catch(e) {} }
function conjPersonOk(tense, i) { return !(i === 4 && conjUstedes()) && !(tense === 'imperativo' && i === 0); }
function conjPron(tense, i) {
  if(tense === 'imperativo') return ['', 'tú', 'usted', 'nosotros', 'vosotros', 'ustedes'][i];
  if(i === 5 && conjUstedes()) return 'ellos / ustedes';
  return PRONOUNS[i];
}
// Majuscule quand le trou ouvre la phrase (¡___! → ¡Levántate!)
function conjCap(text, ans) { return /^[¡¿\s]*___/.test(String(text)) ? ans.charAt(0).toUpperCase() + ans.slice(1) : ans; }
function conjFill(s) { return s[3].replace('___', conjCap(s[3], conjAnswer(s))); }
// Forme attendue pour une phrase : celle du tableau, sauf réponse écrite à la main (impératif avec pronoms : dámelo)
function conjAnswer(s) { return s[6] || CONJ_DB[s[0]][s[1]][s[2]]; }

// ── Paquet ──
let _conjCache = null;
function conjLoad() { if(_conjCache) return _conjCache; try { _conjCache = JSON.parse(localStorage.getItem('conj_srs') || '{}'); } catch(e) { _conjCache = {}; } return _conjCache; }
function conjSave(d) { _conjCache = d; try { localStorage.setItem('conj_srs', JSON.stringify(d)); } catch(e) { console.warn('[Aprende] conjugaison non sauvegardée', e); } }
function conjInvalidateCache() { _conjCache = null; }
function conjIsKey(k) { return typeof k === 'string' && k.startsWith('conj:'); }
function conjKey(verb, tense) { return 'conj:' + verb + '|' + tense; }
function conjParse(key) { const [verb, tense] = key.slice(5).split('|'); return { verb, tense }; }
function conjNewRec() { return { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang: 'es', st: 'new' }; }
function conjPerDay() { const v = parseInt(localStorage.getItem('conj_per_day'), 10); return isNaN(v) ? 10 : v; }
function conjSetPerDay(delta) {
  const v = Math.min(50, Math.max(0, conjPerDay() + delta));
  try { localStorage.setItem('conj_per_day', String(v)); } catch(e) {}
  srsRefresh();
}

// Phrases rangées par carte
let _conjIdx = null;
function conjSentences(verb, tense) {
  if(!_conjIdx) { _conjIdx = {}; CONJ_SENT.forEach((s, i) => { (_conjIdx[s[0] + '|' + s[1]] = _conjIdx[s[0] + '|' + s[1]] || []).push(i); }); }
  return _conjIdx[verb + '|' + tense] || [];
}

// Ordre d'arrivée des nouvelles cartes : les verbes les plus courants d'abord, un temps après l'autre
let _conjOrder = null;
function conjOrder() {
  if(_conjOrder) return _conjOrder;
  _conjOrder = [];
  // un verbe après l'autre (les plus courants d'abord), ses temps dans l'ordre où on les apprend
  const seq = ['presente', 'preterito', 'perfecto', 'imperfecto', 'futuro', 'subjuntivo', 'imperativo', 'condicional', 'subj_imperfecto'];
  Object.keys(CONJ_DB).forEach(v => seq.forEach(t => { if(CONJ_DB[v][t] && CONJ_DB[v][t].length === 6) _conjOrder.push(conjKey(v, t)); }));
  return _conjOrder;
}

// Ce que la carte demande cette fois-ci : une phrase à déclencheur un passage sur deux, sinon une personne qui tourne
function conjPrompt(key, rec) {
  const { verb, tense } = conjParse(key), n = (rec && rec.p) || 0;
  const sents = conjSentences(verb, tense).filter(i => conjPersonOk(tense, CONJ_SENT[i][2]));
  const forms = CONJ_DB[verb][tense];
  if(sents.length && n % 2 === 0) {
    const s = CONJ_SENT[sents[(n >> 1) % sents.length]];
    return { verb, tense, person: s[2], answer: conjAnswer(s), text: s[3], fr: s[4], trigger: s[5], sentence: true };
  }
  const order = [0, 2, 5, 1, 3, 4].filter(i => forms[i] && conjPersonOk(tense, i));
  const person = order[(n >> 1) % order.length];
  const lead = CONJ_LEAD[tense], pron = conjPron(tense, person).split('/')[0].trim();
  const text = tense === 'imperativo' ? `¡___! (${pron})` : tense === 'subj_imperfecto' ? `Si ${pron} ___…` : `${lead} ${pron} ___`;
  return { verb, tense, person, answer: forms[person], text, fr: '', trigger: tense === 'imperativo' ? '¡…!' : lead.replace(/,$/, ''), sentence: false };
}

function conjEntry(key, rec, now) {
  const { verb, tense } = conjParse(key);
  return { ...srsEnsureFsrs({ ...(rec || conjNewRec()) }, now), key, lang: 'es', conj: true, verb, tense, word: `${verb} · ${CONJ_TENSE_FR[tense].toLowerCase()}` };
}
function conjEntryByKey(key) { if(!conjIsKey(key)) return null; const { verb, tense } = conjParse(key); if(!CONJ_DB[verb] || !CONJ_DB[verb][tense]) return null; return conjEntry(key, conjLoad()[key], Date.now()); }

// Cartes de conjugaison à mêler à la file de Réviser (espagnol seulement)
function conjQueue(now) {
  const out = { learnNow: [], learnLater: [], reviews: [], news: [], waiting: 0 };
  const cap = conjPerDay(), store = conjLoad();
  if(cap <= 0 && !Object.keys(store).length) return out;
  const start = srsStartOfToday(), seen = new Set(), intro = new Set();
  srsRevlogLoad().forEach(r => { if(r[1] >= start && conjIsKey(r[0])) { if(r[3] === 0) { intro.add(r[0]); seen.add(r[0]); } else if(r[3] === 2) seen.add(r[0]); } });
  const due = [], fresh = [];
  for(const k in store) {
    const { verb, tense } = conjParse(k);
    if(!CONJ_DB[verb] || !CONJ_DB[verb][tense]) continue;
    const e = conjEntry(k, store[k], now);
    if(!e.reps) fresh.push(e);
    else if(srsIsIntraday(e)) (e.due <= now ? out.learnNow : out.learnLater).push(e);
    else if(srsIsDue(e)) due.push(e);
  }
  let room = Math.max(0, cap - seen.size);
  due.sort((a, b) => a.due - b.due);
  out.reviews = due.slice(0, room); out.waiting = due.length - out.reviews.length; room -= out.reviews.length;
  let nNew = Math.min(room, Math.max(0, CONJ_NEW_MAX - intro.size));
  // d'abord les verbes ratés en leçon, puis l'ordre normal
  fresh.sort((a, b) => (b.pri || 0) - (a.pri || 0));
  for(const e of fresh) { if(nNew <= 0) break; out.news.push(e); nNew--; }
  if(nNew > 0) for(const k of conjOrder()) { if(nNew <= 0) break; if(store[k]) continue; out.news.push(conjEntry(k, null, now)); nNew--; }
  return out;
}

// ── Affichage de la carte ──
function conjStrip(s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, ''); }
function conjClean(s) { return String(s).toLowerCase().replace(/[.,;!?¡¿]/g, '').replace(/\s+/g, ' ').trim(); }
function conjCardHTML(card, progHTML) {
  const p = conjPrompt(card.key, conjLoad()[card.key]);
  srsState.conjPrompt = p;
  const fr = getVerbFR(p.verb), parts = crsEsc(p.text).split('___');
  let badges = `<span class="fx-tag">🔁 ${CONJ_TENSE_FR[p.tense]}</span>`;
  if(card.leech) badges += '<span class="fx-tag">🩸 Sangsue</span>';
  if(srsIsIntraday(card)) badges += '<span class="fx-tag">⏳ Apprentissage</span>';
  return `
    <div class="fx-chip">🇪🇸${badges}</div>
    <div class="fx-body conj-body">
      <div class="conj-verb">${crsEsc(p.verb)}${fr ? `<small>${crsEsc(fr)}</small>` : ''}</div>
      <div class="conj-sent">${parts[0]}<span class="conj-gap" id="conj-gap">${'&nbsp;'.repeat(6)}</span>${parts[1] || ''}</div>
      ${p.fr ? `<div class="conj-fr">${crsEsc(p.fr)}</div>` : `<div class="conj-fr">${crsEsc(conjPron(p.tense, p.person))} · ${CONJ_TENSE_FR[p.tense].toLowerCase()}</div>`}
      <div class="conj-entry" id="conj-entry">
        <input type="text" id="conj-inp" class="conj-inp" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Conjugue ${crsEsc(p.verb)}…" aria-label="Ta réponse">
        <div class="conj-keys">${['á', 'é', 'í', 'ó', 'ú', 'ñ'].map(ch => `<button type="button" onclick="conjType('${ch}')">${ch}</button>`).join('')}</div>
        <button type="button" class="fx-fiche conj-check" onclick="conjCheck()">Vérifier</button>
      </div>
      <div class="conj-result" id="conj-result" style="display:none"></div>
    </div>
    ${progHTML}`;
}
function conjType(ch) {
  const inp = document.getElementById('conj-inp'); if(!inp) return;
  const a = inp.selectionStart == null ? inp.value.length : inp.selectionStart, b = inp.selectionEnd == null ? a : inp.selectionEnd;
  inp.value = inp.value.slice(0, a) + ch + inp.value.slice(b);
  inp.focus(); try { inp.setSelectionRange(a + 1, a + 1); } catch(e) {}
}
// Compare la réponse : juste · accent manquant ou en trop · faux
function conjJudge(value, answer) {
  const v = conjClean(value), a = conjClean(answer);
  if(v === a) return 'ok';
  if(conjStrip(v) === conjStrip(a)) return 'accent';
  return 'ko';
}
function conjCheck() {
  const p = srsState.conjPrompt, inp = document.getElementById('conj-inp');
  if(!p || !inp || srsState.revealed) return;
  if(!inp.value.trim()) { inp.focus(); return; }
  const verdict = conjJudge(inp.value, p.answer), good = verdict === 'ok';
  srsState.revealed = true; srsState.conjGood = good;
  const gap = document.getElementById('conj-gap');
  if(gap) { gap.textContent = conjCap(p.text, p.answer); gap.classList.add(good ? 'ok' : 'ko'); }
  document.getElementById('conj-entry').style.display = 'none';
  const forms = CONJ_DB[p.verb][p.tense];
  const head = good ? '<b class="ok">✅ Juste</b>'
    : verdict === 'accent' ? `<b class="ko">Presque : l'accent compte</b><span>Tu as écrit « ${crsEsc(inp.value.trim())} », il fallait « ${crsEsc(p.answer)} ».</span>`
    : `<b class="ko">❌ Il fallait « ${crsEsc(p.answer)} »</b><span>Tu as écrit « ${crsEsc(inp.value.trim())} ».</span>`;
  const res = document.getElementById('conj-result');
  res.innerHTML = `${head}
    <div class="conj-why">« ${crsEsc(p.trigger)} » → ${CONJ_WHY[p.tense]}</div>
    <div class="conj-table">${forms.map((f, i) => f && conjPersonOk(p.tense, i) ? `<span${i === p.person ? ' class="me"' : ''}><i>${conjPron(p.tense, i).split('/')[0]}</i>${crsEsc(f)}</span>` : '').join('')}</div>`;
  res.style.display = 'block';
  inp.blur();
  const top = document.querySelector('.srs-card.top'); if(top) top.classList.add('revealed');
  // une réponse fausse ne peut pas être notée « Bien » ou « Facile »
  document.querySelectorAll('#srs-grade-area .srs-grade-good, #srs-grade-area .srs-grade-easy').forEach(b => { b.disabled = !good; });
  const ga = document.getElementById('srs-grade-area'); ga.style.display = 'block';
  try { ga.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } catch(e) {}
  try { haptic(good ? 'light' : 'error'); if(typeof SFX !== 'undefined' && SFX.sfxEnabled()) (good ? SFX.playCorrect : SFX.playWrong)(); } catch(e) {}
  try { crsSpeak('es', p.sentence ? p.text.replace('___', conjCap(p.text, p.answer)) : p.answer, true); } catch(e) {}
}
function conjUpdateRow() {
  const row = document.getElementById('srs-conj-row'); if(!row) return;
  const on = srsState.lang === 'es' && !srsState.sessionFilter;
  row.style.display = on ? '' : 'none';
  if(!on) return;
  document.getElementById('srs-conj-value').textContent = conjPerDay();
}

// ── Leçons : un verbe raté en contexte revient dans Réviser ──
function conjBump(verb, tense) {
  if(!CONJ_DB[verb] || !CONJ_DB[verb][tense]) return false;
  const d = conjLoad(), k = conjKey(verb, tense), now = Date.now();
  if(!d[k]) d[k] = { ...conjNewRec(), pri: 1 };
  else if(d[k].reps && !srsIsIntraday(d[k]) && d[k].due > now) d[k].due = now;
  else if(!d[k].reps) d[k].pri = 1;
  conjSave(d);
  return true;
}
// Temps déjà rencontrés dans le parcours espagnol, selon l'unité
function conjTensesForUnit(u) {
  const t = ['presente'];
  if(u >= 7) t.push('preterito');
  if(u >= 8) t.push('perfecto');
  if(u >= 9) t.push('imperfecto');
  if(u >= 10) t.push('futuro');
  if(u >= 13) t.push('subjuntivo');
  if(u >= 14) t.push('imperativo');
  if(u >= 18) t.push('condicional', 'subj_imperfecto');
  return t;
}
// Exercices de conjugaison pour une leçon : le temps le plus récent d'abord
function conjLessonPicks(u, count) {
  const tenses = conjTensesForUnit(u), last = tenses[tenses.length - 1];
  const idx = CONJ_SENT.map((s, i) => i).filter(i => tenses.includes(CONJ_SENT[i][1]) && conjPersonOk(CONJ_SENT[i][1], CONJ_SENT[i][2]));
  const recent = shuffle(idx.filter(i => CONJ_SENT[i][1] === last)), rest = shuffle(idx.filter(i => CONJ_SENT[i][1] !== last));
  const out = recent.slice(0, Math.ceil(count / 2));
  for(const i of rest) { if(out.length >= count) break; out.push(i); }
  for(const i of recent.slice(out.length)) { if(out.length >= count) break; if(!out.includes(i)) out.push(i); }
  return out.map(i => ({ t: 'conj', c: i }));
}
