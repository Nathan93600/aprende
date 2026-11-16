// ¡Aprende! — js/conj-sentences.js : Phrases à déclencheur ajoutées à CONJ_SENT (une par carte de conjugaison), temps calculés compris
// Chargé après conj-cards.js. Une ligne = verbe|personne (0 à 5)|phrase avec ___|traduction|déclencheur[|réponse écrite à la main]
// Les phrases sont ajoutées À LA FIN de CONJ_SENT : ne jamais en retirer ni en déplacer (les leçons en cours les repèrent par leur rang).
(function() {
  const S = (tense, block) => block.trim().split('\n').forEach(line => {
    const p = line.trim().split('|'); if(p.length < 5) return;
    const row = [p[0], tense, +p[1], p[2], p[3], p[4]]; if(p[5]) row.push(p[5]);
    CONJ_SENT.push(row);
  });

  S('presente', `
haber|2|Hoy Juan ___ comido demasiado.|Aujourd'hui, Juan a trop mangé.|Hoy
comer|0|Yo ___ en la oficina casi todos los días.|Je mange au bureau presque tous les jours.|casi todos los días
trabajar|0|Yo ___ en una consultora desde 2024.|Je travaille dans un cabinet de conseil depuis 2024.|desde 2024
cenar|3|En casa nosotros ___ siempre a las nueve.|À la maison, nous dînons toujours à neuf heures.|siempre
quedar|3|Los sábados nosotros ___ con los amigos en el centro.|Le samedi, nous retrouvons les amis dans le centre.|Los sábados
caminar|2|Mi abuela ___ una hora cada mañana.|Ma grand-mère marche une heure chaque matin.|cada mañana
luchar|5|Ellos ___ cada día por sus derechos.|Ils se battent chaque jour pour leurs droits.|cada día
robar|5|En esta zona ___ muchas bicicletas.|Dans ce coin, on vole beaucoup de vélos.|En esta zona
subir|0|Yo siempre ___ por las escaleras.|Je monte toujours par les escaliers.|siempre
disfrutar|1|¿Tú ___ de tu trabajo?|Est-ce que tu prends plaisir à ton travail ?|Tú
engañar|5|Las apariencias ___ a menudo.|Les apparences sont souvent trompeuses.|a menudo
apoyar|5|Mis padres me ___ en todo lo que hago.|Mes parents me soutiennent dans tout ce que je fais.|Mis padres
charlar|3|Nosotros ___ un rato cada tarde después del trabajo.|Nous bavardons un moment chaque soir après le travail.|cada tarde
pelear|5|Mis gatos ___ todo el tiempo.|Mes chats se battent tout le temps.|todo el tiempo
faltar|2|Todavía ___ una semana para las vacaciones.|Il reste encore une semaine avant les vacances.|Todavía
animar|2|Mi entrenador me ___ en cada carrera.|Mon coach m'encourage à chaque course.|en cada carrera
deber|0|Yo te ___ veinte euros.|Je te dois vingt euros.|Yo
girarse|2|Ella siempre ___ cuando oye su nombre.|Elle se retourne toujours quand elle entend son nom.|siempre
agacharse|0|Yo ___ para atarme los zapatos.|Je me baisse pour lacer mes chaussures.|Yo
bajar|5|Los precios nunca ___ en verano.|Les prix ne baissent jamais en été.|nunca
meter|0|Yo siempre ___ las llaves en el mismo bolsillo.|Je mets toujours les clés dans la même poche.|siempre
aparcar|1|¿Dónde ___ tú normalmente?|Où te gares-tu d'habitude ?|normalmente
rogar|0|Yo te ___ que no se lo digas a nadie.|Je te prie de ne le dire à personne.|Yo
sacar|2|Mi hermana ___ buenas notas todos los años.|Ma sœur a de bonnes notes tous les ans.|todos los años
pillar|0|Yo no ___ el chiste, explícamelo.|Je ne saisis pas la blague, explique-moi.|Yo
olvidarse|1|Tú siempre ___ de cerrar la puerta.|Tu oublies toujours de fermer la porte.|siempre
esperar|3|Nosotros te ___ aquí, no tardes.|Nous t'attendons ici, ne tarde pas.|aquí
borrar|0|Yo ___ los mensajes viejos cada mes.|J'efface les vieux messages chaque mois.|cada mes
significar|2|¿Qué ___ esta palabra?|Que signifie ce mot ?|esta palabra
moverse|2|El perro no ___ de la puerta.|Le chien ne bouge pas de la porte.|El perro
sudar|0|Yo ___ muchísimo cuando corro.|Je transpire énormément quand je cours.|cuando corro
montar|5|Mis hijos ___ en bici todos los domingos.|Mes enfants font du vélo tous les dimanches.|todos los domingos
tocar|2|Mi vecino ___ la guitarra cada noche.|Mon voisin joue de la guitare chaque soir.|cada noche`);

  S('preterito', `
cenar|3|Anoche nosotros ___ en un japonés.|Hier soir, nous avons dîné dans un japonais.|Anoche
quedar|0|El sábado pasado yo ___ con Laura para tomar algo.|Samedi dernier, j'ai retrouvé Laura pour boire un verre.|El sábado pasado
crecer|2|Mi hijo ___ diez centímetros el año pasado.|Mon fils a grandi de dix centimètres l'an dernier.|el año pasado
caminar|3|Ayer nosotros ___ veinte kilómetros.|Hier, nous avons marché vingt kilomètres.|Ayer
luchar|2|Mi abuelo ___ en la guerra en 1940.|Mon grand-père a combattu à la guerre en 1940.|en 1940
robar|5|Ayer me ___ la cartera en el metro.|Hier, on m'a volé mon portefeuille dans le métro.|Ayer
subir|5|Los precios ___ mucho el mes pasado.|Les prix ont beaucoup augmenté le mois dernier.|el mes pasado
disfrutar|0|Yo ___ muchísimo del concierto de anoche.|J'ai énormément profité du concert d'hier soir.|anoche
engañar|2|Aquel vendedor me ___ con el precio.|Ce vendeur m'a trompé sur le prix.|Aquel vendedor
apoyar|5|Mis amigos me ___ cuando perdí el trabajo.|Mes amis m'ont soutenu quand j'ai perdu mon travail.|cuando perdí
charlar|3|Ayer nosotros ___ durante dos horas.|Hier, nous avons bavardé pendant deux heures.|Ayer
pelear|5|Los dos equipos ___ hasta el último minuto.|Les deux équipes se sont battues jusqu'à la dernière minute.|hasta el último minuto
faltar|2|Ayer ___ poco para que perdiéramos el tren.|Hier, il s'en est fallu de peu qu'on rate le train.|Ayer
animar|5|Aquel día mis compañeros me ___ a presentarme.|Ce jour-là, mes collègues m'ont encouragé à me présenter.|Aquel día
agradecer|0|Yo le ___ su ayuda al final de la reunión.|Je l'ai remercié de son aide à la fin de la réunion.|al final de la reunión
deber|2|Él ___ avisarme antes de irse.|Il aurait dû me prévenir avant de partir.|antes de irse
girarse|2|De repente, ella ___ y me miró.|Soudain, elle s'est retournée et m'a regardé.|De repente
agacharse|0|Yo ___ para recoger las llaves y me di un golpe.|Je me suis baissé pour ramasser les clés et je me suis cogné.|me di un golpe
coger|3|Ayer nosotros ___ un taxi para volver.|Hier, nous avons pris un taxi pour rentrer.|Ayer
acordarse|0|Ayer yo ___ de ti al pasar por tu calle.|Hier, j'ai pensé à toi en passant dans ta rue.|Ayer
bajar|0|Ayer yo ___ del autobús en la parada equivocada.|Hier, je suis descendu du bus au mauvais arrêt.|Ayer
meter|2|Ella ___ la pata en la cena de ayer.|Elle a fait une gaffe au dîner d'hier.|ayer
aparcar|0|Ayer yo ___ a diez minutos de aquí.|Hier, je me suis garé à dix minutes d'ici.|Ayer
rogar|5|Ellos me ___ que me quedara.|Ils m'ont supplié de rester.|que me quedara
pillar|2|Anoche la policía lo ___ con las manos en la masa.|Hier soir, la police l'a pris la main dans le sac.|Anoche
esperar|0|Ayer yo te ___ una hora entera.|Hier, je t'ai attendu une heure entière.|Ayer
cerrar|5|Ayer las tiendas ___ a las dos por la fiesta.|Hier, les magasins ont fermé à deux heures à cause de la fête.|Ayer
borrar|0|Sin querer, yo ___ todas las fotos anoche.|Sans le vouloir, j'ai effacé toutes les photos hier soir.|anoche
significar|2|Aquel viaje ___ mucho para mí.|Ce voyage a beaucoup compté pour moi.|Aquel viaje
moverse|2|Durante la foto, nadie ___.|Pendant la photo, personne n'a bougé.|Durante la foto
sudar|3|Ayer nosotros ___ la camiseta en el partido.|Hier, nous avons mouillé le maillot pendant le match.|Ayer
montar|5|El verano pasado ellos ___ un negocio juntos.|L'été dernier, ils ont monté une affaire ensemble.|El verano pasado
tocar|2|Anoche me ___ a mí pagar la cuenta.|Hier soir, c'était à moi de payer l'addition.|Anoche`);

  S('imperfecto', `
empezar|2|Antes el colegio ___ a las ocho.|Avant, l'école commençait à huit heures.|Antes
quedar|3|De jóvenes, nosotros ___ en la plaza cada tarde.|Jeunes, nous nous retrouvions sur la place chaque après-midi.|De jóvenes
crecer|5|Antes aquí ___ muchos naranjos.|Avant, beaucoup d'orangers poussaient ici.|Antes
luchar|2|Mi abuela siempre ___ por su familia.|Ma grand-mère se battait toujours pour sa famille.|siempre
robar|5|En aquella época ___ mucho en el barrio.|À cette époque, on volait beaucoup dans le quartier.|En aquella época
subir|0|De niño, yo ___ a los árboles sin miedo.|Enfant, je grimpais aux arbres sans peur.|De niño
disfrutar|3|Antes nosotros ___ más de las pequeñas cosas.|Avant, nous profitions davantage des petites choses.|Antes
engañar|2|Mi primo siempre ___ a todos jugando a las cartas.|Mon cousin trompait toujours tout le monde aux cartes.|siempre
apoyar|2|Mi madre me ___ en todo cuando era joven.|Ma mère me soutenait en tout quand j'étais jeune.|cuando era joven
charlar|5|Las vecinas ___ durante horas en el portal.|Les voisines bavardaient pendant des heures dans l'entrée.|durante horas
pelear|3|De pequeños, mi hermano y yo ___ por todo.|Petits, mon frère et moi nous disputions pour tout.|De pequeños
faltar|2|Cuando llegué, todavía ___ mucha gente.|Quand je suis arrivé, il manquait encore beaucoup de monde.|todavía
animar|2|Mi padre siempre me ___ a seguir estudiando.|Mon père m'encourageait toujours à continuer mes études.|siempre
agradecer|2|Ella siempre ___ los pequeños detalles.|Elle était toujours reconnaissante des petites attentions.|siempre
deber|0|En aquel momento yo ___ mucho dinero al banco.|À ce moment-là, je devais beaucoup d'argent à la banque.|En aquel momento
girarse|5|Todos ___ cada vez que ella entraba.|Tout le monde se retournait chaque fois qu'elle entrait.|cada vez que
agacharse|2|En sus últimos años, mi abuelo ___ con dificultad.|Dans ses dernières années, mon grand-père se baissait avec difficulté.|En sus últimos años
coger|0|Antes yo ___ el autobús de las siete.|Avant, je prenais le bus de sept heures.|Antes
acordarse|2|Mi abuela siempre ___ de todos los cumpleaños.|Ma grand-mère se souvenait toujours de tous les anniversaires.|siempre
bajar|3|En verano nosotros ___ al río todas las tardes.|L'été, nous descendions à la rivière tous les après-midi.|todas las tardes
meter|2|Mi hermano siempre ___ la pata en las cenas familiares.|Mon frère faisait toujours des gaffes aux repas de famille.|siempre
aparcar|0|Antes yo ___ delante de casa sin problema.|Avant, je me garais devant chez moi sans problème.|Antes
rogar|2|Cada noche, el niño ___ que le leyeran un cuento.|Chaque soir, l'enfant suppliait qu'on lui lise une histoire.|Cada noche
sacar|0|En el instituto, yo ___ muy buenas notas.|Au lycée, j'avais de très bonnes notes.|En el instituto
pillar|2|El profesor siempre ___ a los que copiaban.|Le prof attrapait toujours ceux qui trichaient.|siempre
olvidarse|0|De joven, yo ___ de todo.|Jeune, j'oubliais tout.|De joven
mantener|2|En aquellos años, mi abuelo ___ a toda la familia con un solo sueldo.|Dans ces années-là, mon grand-père faisait vivre toute la famille avec un seul salaire.|En aquellos años
cerrar|5|Antes las tiendas ___ los domingos.|Avant, les magasins fermaient le dimanche.|Antes
borrar|2|La profesora ___ la pizarra después de cada clase.|La prof effaçait le tableau après chaque cours.|después de cada clase
significar|2|Para mí, aquel trabajo ___ mucho.|Pour moi, ce travail comptait beaucoup.|aquel trabajo
moverse|5|Los árboles ___ con el viento aquella noche.|Les arbres bougeaient avec le vent cette nuit-là.|aquella noche
sudar|0|Yo ___ de los nervios antes de cada examen.|Je transpirais de nervosité avant chaque examen.|antes de cada examen
montar|3|De niños, nosotros ___ en bici todo el día.|Enfants, nous faisions du vélo toute la journée.|De niños
tocar|2|Mi padre ___ el piano cuando yo era pequeño.|Mon père jouait du piano quand j'étais petit.|cuando yo era pequeño`);

  S('futuro', `
cenar|3|Esta noche nosotros ___ fuera.|Ce soir, nous dînerons dehors.|Esta noche
quedar|3|Mañana nosotros ___ a las ocho en la plaza.|Demain, nous nous retrouverons à huit heures sur la place.|Mañana
crecer|2|La empresa ___ mucho el año que viene.|L'entreprise grandira beaucoup l'an prochain.|el año que viene
caminar|3|Mañana nosotros ___ hasta la cima.|Demain, nous marcherons jusqu'au sommet.|Mañana
luchar|0|Yo ___ hasta el final, pase lo que pase.|Je me battrai jusqu'au bout, quoi qu'il arrive.|pase lo que pase
robar|5|Si dejas la bici ahí, te la ___.|Si tu laisses le vélo là, on te le volera.|Si dejas
subir|5|Los precios ___ otra vez en enero.|Les prix augmenteront encore en janvier.|en enero
disfrutar|1|Ya verás, tú ___ mucho del viaje.|Tu verras, tu profiteras bien du voyage.|Ya verás
engañar|2|Ese tipo te ___ en cuanto pueda.|Ce type te trompera dès qu'il le pourra.|en cuanto pueda
apoyar|0|Yo te ___ siempre, decidas lo que decidas.|Je te soutiendrai toujours, quoi que tu décides.|decidas lo que decidas
charlar|3|Mañana nosotros ___ con calma de todo esto.|Demain, nous parlerons tranquillement de tout ça.|Mañana
pelear|5|Mañana los dos equipos ___ por el título.|Demain, les deux équipes se battront pour le titre.|Mañana
faltar|2|Seguro que mañana ___ gente en la oficina.|Il manquera sûrement du monde au bureau demain.|mañana
animar|3|El domingo nosotros ___ a nuestro equipo en el estadio.|Dimanche, nous encouragerons notre équipe au stade.|El domingo
agradecer|1|Algún día tú me lo ___.|Un jour, tu me remercieras.|Algún día
deber|1|Mañana tú ___ levantarte temprano.|Demain, tu devras te lever tôt.|Mañana
girarse|2|Cuando la llames, ella ___.|Quand tu l'appelleras, elle se retournera.|Cuando la llames
agacharse|0|Luego yo ___ para que puedas pasar.|Tout à l'heure, je me baisserai pour que tu puisses passer.|Luego
coger|0|Mañana yo ___ el primer tren.|Demain, je prendrai le premier train.|Mañana
bajar|5|Las temperaturas ___ este fin de semana.|Les températures baisseront ce week-end.|este fin de semana
meter|0|Luego yo ___ la ropa en la lavadora.|Tout à l'heure, je mettrai le linge dans la machine.|Luego
aparcar|3|Mañana nosotros ___ cerca de la estación.|Demain, nous nous garerons près de la gare.|Mañana
rogar|2|Si hace falta, él te ___ que vuelvas.|S'il le faut, il te suppliera de revenir.|Si hace falta
sacar|0|Mañana yo ___ las entradas por internet.|Demain, je prendrai les billets sur internet.|Mañana
pillar|5|Tarde o temprano los ___.|Tôt ou tard, on les attrapera.|Tarde o temprano
olvidarse|2|Con el tiempo, él ___ de todo esto.|Avec le temps, il oubliera tout ça.|Con el tiempo
esperar|3|Nosotros te ___ en la salida mañana.|Nous t'attendrons à la sortie demain.|mañana
cerrar|5|El lunes que viene los bancos ___ por la fiesta.|Lundi prochain, les banques fermeront pour le jour férié.|El lunes que viene
borrar|0|Después yo ___ los archivos que sobran.|Ensuite, j'effacerai les fichiers en trop.|Después
significar|2|A partir de enero, ese cambio ___ más trabajo para todos.|À partir de janvier, ce changement signifiera plus de travail pour tous.|A partir de enero
moverse|0|Tranquilo, yo no ___ de aquí hasta que vuelvas.|T'inquiète, je ne bougerai pas d'ici jusqu'à ton retour.|hasta que vuelvas
sudar|1|Con este calor, mañana tú ___ en la carrera.|Avec cette chaleur, demain tu vas transpirer pendant la course.|mañana
montar|5|El año que viene ellos ___ su propia empresa.|L'an prochain, ils monteront leur propre entreprise.|El año que viene
tocar|2|La próxima vez te ___ a ti.|La prochaine fois, ce sera ton tour.|La próxima vez`);

  S('condicional', `
empezar|0|Yo en tu lugar ___ por lo más difícil.|À ta place, je commencerais par le plus difficile.|en tu lugar
cenar|3|Con más tiempo, nosotros ___ en casa cada noche.|Avec plus de temps, nous dînerions à la maison chaque soir.|Con más tiempo
quedar|0|Yo ___ contigo, pero tengo que trabajar.|Je te verrais bien, mais je dois travailler.|pero
crecer|2|Con más inversión, la empresa ___ más rápido.|Avec plus d'investissement, l'entreprise grandirait plus vite.|Con más inversión
caminar|0|Si no lloviera, yo ___ hasta el trabajo.|S'il ne pleuvait pas, j'irais au travail à pied.|Si no lloviera
luchar|0|Yo ___ por ti sin dudarlo.|Je me battrais pour toi sans hésiter.|sin dudarlo
robar|2|Él nunca ___ a un amigo.|Il ne volerait jamais un ami.|nunca
subir|0|Yo que tú no ___ ahí sin casco.|À ta place, je ne monterais pas là-haut sans casque.|Yo que tú
disfrutar|1|Tú ___ más si dejaras el móvil.|Tu profiterais plus si tu lâchais ton téléphone.|si dejaras
engañar|0|Yo nunca te ___, lo sabes.|Je ne te tromperais jamais, tu le sais.|nunca
apoyar|5|Mis padres me ___ aunque me equivocara.|Mes parents me soutiendraient même si je me trompais.|aunque me equivocara
charlar|0|Yo ___ contigo toda la noche, pero mañana madrugo.|Je bavarderais bien avec toi toute la nuit, mais je me lève tôt demain.|pero
pelear|5|Sin reglas, los niños ___ todo el día.|Sans règles, les enfants se battraient toute la journée.|Sin reglas
faltar|2|Sin ti, nos ___ lo más importante.|Sans toi, il nous manquerait l'essentiel.|Sin ti
animar|0|Yo en tu lugar ___ a tu hermana a intentarlo.|À ta place, j'encouragerais ta sœur à essayer.|en tu lugar
agradecer|0|Yo te ___ mucho que me avisaras antes.|Je te serais très reconnaissant de me prévenir avant.|que me avisaras
girarse|0|Yo que tú no ___ ahora: te está mirando.|À ta place, je ne me retournerais pas maintenant : il te regarde.|Yo que tú
agacharse|0|Yo ___ a recogerlo, pero me duele la espalda.|Je me baisserais bien pour le ramasser, mais j'ai mal au dos.|pero
coger|0|Yo en tu lugar ___ el metro, es más rápido.|À ta place, je prendrais le métro, c'est plus rapide.|en tu lugar
acordarse|2|Dijo que ___ de comprar el pan.|Il a dit qu'il penserait à acheter le pain.|Dijo que
bajar|5|Con más competencia, los precios ___.|Avec plus de concurrence, les prix baisseraient.|Con más competencia
meter|0|Yo que tú no ___ todo el dinero en un solo banco.|À ta place, je ne mettrais pas tout l'argent dans une seule banque.|Yo que tú
aparcar|0|Yo ___ aquí, pero está prohibido.|Je me garerais bien ici, mais c'est interdit.|pero
rogar|0|Yo te ___ que lo pensaras dos veces.|Je te prierais d'y réfléchir à deux fois.|que lo pensaras
sacar|1|Con un poco de esfuerzo, tú ___ mejores notas.|Avec un peu d'effort, tu aurais de meilleures notes.|Con un poco de esfuerzo
pillar|5|Si copiaras, te ___ enseguida.|Si tu trichais, on t'attraperait tout de suite.|Si copiaras
olvidarse|0|Yo nunca ___ de tu cumpleaños.|Je n'oublierais jamais ton anniversaire.|nunca
borrar|0|Yo en tu lugar ___ ese mensaje ahora mismo.|À ta place, j'effacerais ce message tout de suite.|en tu lugar
significar|2|Aceptar ___ mudarnos a otra ciudad.|Accepter voudrait dire déménager dans une autre ville.|Aceptar
levantarse|0|Yo ___ más temprano si me acostara antes.|Je me lèverais plus tôt si je me couchais avant.|si me acostara
moverse|0|Yo que tú no ___ de aquí.|À ta place, je ne bougerais pas d'ici.|Yo que tú
sudar|1|Con ese abrigo, tú ___ muchísimo.|Avec ce manteau, tu transpirerais énormément.|Con ese abrigo
montar|0|Con más ahorros, yo ___ mi propio negocio.|Avec plus d'économies, je monterais ma propre affaire.|Con más ahorros
tocar|2|Con más práctica, ella ___ mucho mejor.|Avec plus de pratique, elle jouerait bien mieux.|Con más práctica`);

  S('subjuntivo', `
cenar|3|¿Quieres que nosotros ___ juntos esta noche?|Tu veux qu'on dîne ensemble ce soir ?|Quieres que
quedar|3|Te propongo que nosotros ___ el viernes.|Je te propose qu'on se voie vendredi.|Te propongo que
crecer|5|Quiero que mis hijos ___ felices.|Je veux que mes enfants grandissent heureux.|Quiero que
caminar|1|El médico quiere que tú ___ media hora al día.|Le médecin veut que tu marches une demi-heure par jour.|quiere que
luchar|1|Espero que tú ___ por lo que quieres.|J'espère que tu te battras pour ce que tu veux.|Espero que
robar|5|Ten cuidado, no vaya a ser que te ___ el móvil.|Fais attention, qu'on n'aille pas te voler ton portable.|no vaya a ser que
subir|5|No creo que los precios ___ más.|Je ne crois pas que les prix augmentent encore.|No creo que
disfrutar|1|Espero que tú ___ de las vacaciones.|J'espère que tu profiteras des vacances.|Espero que
engañar|5|No dejes que te ___ con ese precio.|Ne les laisse pas te tromper avec ce prix.|No dejes que
apoyar|1|Necesito que tú me ___ en esto.|J'ai besoin que tu me soutiennes là-dessus.|Necesito que
charlar|3|Cuando nosotros ___ con calma, lo entenderás.|Quand nous en parlerons calmement, tu comprendras.|Cuando
pelear|5|No quiero que los niños ___ en la mesa.|Je ne veux pas que les enfants se battent à table.|No quiero que
faltar|2|Espero que no ___ nadie mañana.|J'espère qu'il ne manquera personne demain.|Espero que
animar|1|Quiero que tú me ___ desde la grada.|Je veux que tu m'encourages depuis les tribunes.|Quiero que
agradecer|1|Espero que tú le ___ el regalo.|J'espère que tu le remercieras pour le cadeau.|Espero que
deber|2|No creo que él te ___ tanto dinero.|Je ne crois pas qu'il te doive autant d'argent.|No creo que
girarse|1|Cuando tú ___, la verás.|Quand tu te retourneras, tu la verras.|Cuando
agacharse|1|Es mejor que tú ___ para pasar.|Il vaut mieux que tu te baisses pour passer.|Es mejor que
coger|1|Te aconsejo que tú ___ un paraguas.|Je te conseille de prendre un parapluie.|Te aconsejo que
bajar|1|Te pido que tú ___ la música.|Je te demande de baisser la musique.|Te pido que
meter|1|No quiero que tú ___ la pata otra vez.|Je ne veux pas que tu fasses encore une gaffe.|No quiero que
aparcar|1|Es mejor que tú ___ en el parking.|Il vaut mieux que tu te gares au parking.|Es mejor que
rogar|2|No hace falta que él me lo ___.|Il n'a pas besoin de me supplier.|No hace falta que
pillar|5|Ojalá no te ___ copiando.|Pourvu qu'on ne t'attrape pas en train de tricher.|Ojalá
olvidarse|1|Espero que tú no ___ de llamarme.|J'espère que tu n'oublieras pas de m'appeler.|Espero que
borrar|1|Te pido que tú ___ esa foto.|Je te demande d'effacer cette photo.|Te pido que
significar|2|No creo que eso ___ nada.|Je ne crois pas que ça veuille dire quoi que ce soit.|No creo que
levantarse|1|Quiero que tú ___ temprano mañana.|Je veux que tu te lèves tôt demain.|Quiero que
moverse|1|Te pido que tú no ___ de aquí.|Je te demande de ne pas bouger d'ici.|Te pido que
sudar|1|No me extraña que tú ___ con este calor.|Ça ne m'étonne pas que tu transpires avec cette chaleur.|No me extraña que
montar|5|Me alegra que ellos ___ su propio negocio.|Je suis content qu'ils montent leur propre affaire.|Me alegra que
tocar|1|Me encanta que tú ___ la guitarra.|J'adore que tu joues de la guitare.|Me encanta que`);

  // ── Passé composé : haber + participe ──
  S('perfecto', `
ser|2|Esta semana ___ muy larga.|Cette semaine a été très longue.|Esta semana
estar|1|¿Tú ___ alguna vez en México?|Es-tu déjà allé au Mexique ?|alguna vez
haber|2|Hoy ___ mucho tráfico.|Aujourd'hui, il y a eu beaucoup de circulation.|Hoy
tener|0|Hoy yo ___ un día horrible.|Aujourd'hui, j'ai eu une journée horrible.|Hoy
hacer|1|¿Qué ___ tú hoy?|Qu'as-tu fait aujourd'hui ?|hoy
ir|3|Este año nosotros ___ dos veces a Barcelona.|Cette année, nous sommes allés deux fois à Barcelone.|Este año
poder|0|Todavía yo no ___ hablar con ella.|Je n'ai pas encore pu lui parler.|Todavía
querer|2|Ella nunca ___ decirme la verdad.|Elle n'a jamais voulu me dire la vérité.|nunca
saber|0|Yo siempre ___ que podía contar contigo.|J'ai toujours su que je pouvais compter sur toi.|siempre
venir|5|Mis padres ___ a verme esta mañana.|Mes parents sont venus me voir ce matin.|esta mañana
poner|1|¿Dónde ___ tú mis llaves esta mañana?|Où as-tu mis mes clés ce matin ?|esta mañana
decir|2|El jefe ya ___ que sí.|Le chef a déjà dit oui.|ya
ver|1|¿Tú ya ___ la última temporada?|Tu as déjà vu la dernière saison ?|ya
dar|5|Todavía no me ___ una respuesta.|Ils ne m'ont pas encore donné de réponse.|Todavía no
salir|2|El tren ya ___.|Le train est déjà parti.|ya
hablar|3|Nosotros ya ___ de este tema.|Nous avons déjà parlé de ce sujet.|ya
comer|0|Hoy yo ___ demasiado.|Aujourd'hui, j'ai trop mangé.|Hoy
vivir|0|Yo siempre ___ en esta ciudad.|J'ai toujours vécu dans cette ville.|siempre
trabajar|1|¿Tú ___ mucho esta semana?|Tu as beaucoup travaillé cette semaine ?|esta semana
empezar|2|La reunión ya ___.|La réunion a déjà commencé.|ya
cenar|3|Esta noche nosotros ___ muy pronto.|Ce soir, nous avons dîné très tôt.|Esta noche
quedar|0|Hoy yo ___ con Marta para comer.|Aujourd'hui, j'ai retrouvé Marta pour déjeuner.|Hoy
crecer|2|¡Cuánto ___ tu hija este año!|Comme ta fille a grandi cette année !|este año
caminar|3|Hoy nosotros ___ más de diez kilómetros.|Aujourd'hui, nous avons marché plus de dix kilomètres.|Hoy
luchar|5|Ellos siempre ___ por sus ideas.|Ils se sont toujours battus pour leurs idées.|siempre
robar|5|¡Me ___ el móvil esta mañana!|On m'a volé mon portable ce matin !|esta mañana
subir|5|Los precios ___ mucho este mes.|Les prix ont beaucoup augmenté ce mois-ci.|este mes
disfrutar|3|Nosotros ___ mucho de la cena de hoy.|Nous avons beaucoup apprécié le dîner d'aujourd'hui.|hoy
engañar|2|Creo que ese vendedor me ___ hoy.|Je crois que ce vendeur m'a trompé aujourd'hui.|hoy
apoyar|1|Gracias, tú siempre me ___.|Merci, tu m'as toujours soutenu.|siempre
charlar|3|Esta tarde nosotros ___ un buen rato.|Cet après-midi, nous avons bavardé un bon moment.|Esta tarde
pelear|5|Los niños ___ toda la mañana.|Les enfants se sont battus toute la matinée.|toda la mañana
faltar|2|Hoy ___ la mitad de la clase.|Aujourd'hui, la moitié de la classe était absente.|Hoy
animar|5|Mis amigos me ___ mucho esta semana.|Mes amis m'ont beaucoup encouragé cette semaine.|esta semana
agradecer|0|Todavía yo no le ___ su ayuda.|Je ne l'ai pas encore remercié de son aide.|Todavía
deber|2|Él ___ de olvidarse, porque no ha venido.|Il a dû oublier, parce qu'il n'est pas venu.|porque no ha venido
girarse|2|Ella ___ al oír mi voz hace un momento.|Elle s'est retournée en entendant ma voix il y a un instant.|hace un momento
agacharse|0|Yo ___ demasiado rápido y me he mareado.|Je me suis baissé trop vite et j'ai eu la tête qui tourne.|me he mareado
coger|0|Hoy yo ___ el autobús equivocado.|Aujourd'hui, j'ai pris le mauvais bus.|Hoy
acordarse|0|Hoy yo ___ de ti.|Aujourd'hui, j'ai pensé à toi.|Hoy
bajar|5|Las temperaturas ___ mucho esta semana.|Les températures ont beaucoup baissé cette semaine.|esta semana
meter|1|¿Dónde ___ tú mi cargador hoy?|Où as-tu fourré mon chargeur aujourd'hui ?|hoy
aparcar|0|Hoy yo ___ muy lejos.|Aujourd'hui, je me suis garé très loin.|Hoy
rogar|5|Me ___ mil veces que vuelva.|Ils m'ont supplié mille fois de revenir.|mil veces
sacar|0|Yo ya ___ las entradas.|J'ai déjà pris les billets.|ya
pillar|5|Esta mañana ___ a dos ladrones en el barrio.|Ce matin, on a attrapé deux voleurs dans le quartier.|Esta mañana
seguir|1|¿Tú ___ mi consejo al final?|As-tu suivi mon conseil finalement ?|al final
olvidarse|0|¡Otra vez yo ___ de las llaves!|J'ai encore oublié les clés !|Otra vez
esperar|3|Nosotros te ___ toda la tarde.|Nous t'avons attendu tout l'après-midi.|toda la tarde
mantener|2|Ella ___ su palabra hasta hoy.|Elle a tenu parole jusqu'à aujourd'hui.|hasta hoy
cerrar|5|Hoy las tiendas ___ antes.|Aujourd'hui, les magasins ont fermé plus tôt.|Hoy
borrar|1|¿Tú ya ___ los mensajes?|Tu as déjà effacé les messages ?|ya
significar|2|Tu apoyo ___ mucho para mí este año.|Ton soutien a beaucoup compté pour moi cette année.|este año
levantarse|0|Hoy yo ___ muy tarde.|Aujourd'hui, je me suis levé très tard.|Hoy
moverse|2|El gato no ___ del sofá en todo el día.|Le chat n'a pas bougé du canapé de toute la journée.|en todo el día
sudar|0|Hoy yo ___ muchísimo en el gimnasio.|Aujourd'hui, j'ai énormément transpiré à la salle.|Hoy
montar|5|Este año ellos ___ una tienda en línea.|Cette année, ils ont monté une boutique en ligne.|Este año
tocar|2|Esta semana me ___ a mí cocinar.|Cette semaine, c'est moi qui ai dû cuisiner.|Esta semana`);

  // ── Subjonctif imparfait : si + hypothèse, ou souhait et doute au passé ──
  S('subj_imperfecto', `
ser|2|Si ___ más barato, lo compraría.|Si c'était moins cher, je l'achèterais.|Si
estar|1|Si tú ___ aquí, todo sería más fácil.|Si tu étais ici, tout serait plus facile.|Si
haber|2|Si ___ más tiempo, lo haríamos mejor.|S'il y avait plus de temps, nous le ferions mieux.|Si
tener|0|Si yo ___ dinero, viajaría más.|Si j'avais de l'argent, je voyagerais plus.|Si
hacer|2|Si ___ buen tiempo, iríamos a la playa.|S'il faisait beau, nous irions à la plage.|Si
ir|1|Me gustaría que tú ___ conmigo.|J'aimerais que tu viennes avec moi.|Me gustaría que
poder|0|Si yo ___, te ayudaría.|Si je pouvais, je t'aiderais.|Si
querer|1|Si tú ___, podríamos empezar hoy.|Si tu voulais, on pourrait commencer aujourd'hui.|Si
saber|0|Si yo lo ___, te lo diría.|Si je le savais, je te le dirais.|Si
venir|5|Me encantaría que ellos ___ a la boda.|J'adorerais qu'ils viennent au mariage.|Me encantaría que
poner|1|Te pedí que tú ___ la mesa.|Je t'ai demandé de mettre la table.|Te pedí que
decir|2|Quería que él me ___ la verdad.|Je voulais qu'il me dise la vérité.|Quería que
ver|1|Si tú ___ cómo vive, lo entenderías.|Si tu voyais comment il vit, tu comprendrais.|Si
dar|5|Ojalá me ___ el trabajo.|Si seulement ils me donnaient le poste.|Ojalá
salir|3|Si nosotros ___ antes, llegaríamos a tiempo.|Si nous partions plus tôt, nous arriverions à l'heure.|Si
hablar|1|Si tú ___ más despacio, te entendería.|Si tu parlais plus lentement, je te comprendrais.|Si
comer|5|Si los niños ___ menos azúcar, dormirían mejor.|Si les enfants mangeaient moins de sucre, ils dormiraient mieux.|Si
vivir|3|Si nosotros ___ más cerca, nos veríamos más.|Si nous habitions plus près, nous nous verrions plus.|Si
trabajar|0|Si yo ___ menos, tendría más tiempo libre.|Si je travaillais moins, j'aurais plus de temps libre.|Si
empezar|3|Sería mejor que nosotros ___ ya.|Il vaudrait mieux que nous commencions maintenant.|Sería mejor que
cenar|3|Me gustaría que nosotros ___ juntos más a menudo.|J'aimerais que nous dînions ensemble plus souvent.|Me gustaría que
quedar|3|Estaría bien que nosotros ___ un día de estos.|Ce serait bien qu'on se voie un de ces jours.|Estaría bien que
crecer|2|Si la empresa ___ más, contrataríamos a más gente.|Si l'entreprise grandissait plus, nous embaucherions davantage.|Si
caminar|1|Si tú ___ más, te sentirías mejor.|Si tu marchais plus, tu te sentirais mieux.|Si
luchar|5|Si ellos ___ juntos, ganarían.|S'ils se battaient ensemble, ils gagneraient.|Si
robar|5|Tenía miedo de que me ___ la bici.|J'avais peur qu'on me vole mon vélo.|Tenía miedo de que
subir|5|Si los precios ___ más, no podríamos pagarlo.|Si les prix augmentaient encore, nous ne pourrions pas payer.|Si
disfrutar|1|Me gustaría que tú ___ más del momento.|J'aimerais que tu profites plus du moment.|Me gustaría que
engañar|2|No esperaba que él me ___.|Je ne m'attendais pas à ce qu'il me trompe.|No esperaba que
apoyar|1|Necesitaba que tú me ___ aquel día.|J'avais besoin que tu me soutiennes ce jour-là.|Necesitaba que
charlar|3|Estaría bien que nosotros ___ un rato.|Ce serait bien qu'on bavarde un moment.|Estaría bien que
pelear|5|No quería que los niños ___.|Je ne voulais pas que les enfants se battent.|No quería que
faltar|2|Si ___ alguien, avísame.|S'il manquait quelqu'un, préviens-moi.|Si
animar|1|Me habría gustado que tú me ___ más.|J'aurais aimé que tu m'encourages plus.|Me habría gustado que
agradecer|2|Esperaba que él me lo ___.|Je m'attendais à ce qu'il me remercie.|Esperaba que
deber|0|Si yo te ___ dinero, te lo devolvería.|Si je te devais de l'argent, je te le rendrais.|Si
girarse|1|Si tú ___ ahora, lo verías.|Si tu te retournais maintenant, tu le verrais.|Si
agacharse|1|Te dije que tú ___ al pasar por la puerta.|Je t'ai dit de te baisser en passant la porte.|Te dije que
coger|1|Te aconsejé que tú ___ un taxi.|Je t'ai conseillé de prendre un taxi.|Te aconsejé que
acordarse|1|Me sorprendió que tú ___ de mi nombre.|J'ai été surpris que tu te souviennes de mon nom.|Me sorprendió que
bajar|5|Si los precios ___, compraríamos una casa.|Si les prix baissaient, nous achèterions une maison.|Si
meter|1|Te pedí que tú no ___ la pata.|Je t'ai demandé de ne pas faire de gaffe.|Te pedí que
aparcar|1|Sería mejor que tú ___ en otra calle.|Il vaudrait mieux que tu te gares dans une autre rue.|Sería mejor que
rogar|2|No hizo falta que él me lo ___.|Il n'a pas eu besoin de me supplier.|No hizo falta que
sacar|1|Me alegró que tú ___ tan buena nota.|J'ai été content que tu aies une si bonne note.|Me alegró que
pillar|5|Tenía miedo de que nos ___.|J'avais peur qu'on nous attrape.|Tenía miedo de que
seguir|1|Te recomendé que tú ___ recto.|Je t'ai recommandé de continuer tout droit.|Te recomendé que
olvidarse|1|Me dolió que tú ___ de mi cumpleaños.|Ça m'a fait mal que tu oublies mon anniversaire.|Me dolió que
esperar|1|Te pedí que tú me ___ en la puerta.|Je t'ai demandé de m'attendre à la porte.|Te pedí que
mantener|5|Era importante que ellos ___ la calma.|Il était important qu'ils gardent leur calme.|Era importante que
cerrar|1|Te pedí que tú ___ la ventana.|Je t'ai demandé de fermer la fenêtre.|Te pedí que
borrar|1|Preferiría que tú ___ esa foto.|Je préférerais que tu effaces cette photo.|Preferiría que
significar|2|Como si eso ___ algo para él.|Comme si ça voulait dire quelque chose pour lui.|Como si
levantarse|1|Si tú ___ antes, no llegarías tarde.|Si tu te levais plus tôt, tu n'arriverais pas en retard.|Si
moverse|2|Le pedí al perro que no ___.|J'ai demandé au chien de ne pas bouger.|Le pedí
sudar|0|Si yo ___ menos, usaría esa camisa.|Si je transpirais moins, je porterais cette chemise.|Si
montar|5|Me encantaría que ellos ___ un restaurante.|J'adorerais qu'ils ouvrent un restaurant.|Me encantaría que
tocar|1|Me gustaría que tú ___ algo al piano.|J'aimerais que tu joues quelque chose au piano.|Me gustaría que`);

  // ── Impératif : 1 = tú, 2 = usted, 3 = nosotros, 4 = vosotros, 5 = ustedes ──
  S('imperativo', `
ser|1|¡___ bueno con tu hermana!|Sois gentil avec ta sœur !|¡
tener|1|___ cuidado con el escalón, hijo.|Fais attention à la marche, mon fils.|hijo
hacer|1|___ los deberes antes de cenar, por favor.|Fais tes devoirs avant de dîner, s'il te plaît.|por favor
ir|1|___ a la panadería y compra pan, anda.|Va à la boulangerie et achète du pain, allez.|anda
venir|1|___ aquí un momento, por favor.|Viens ici un instant, s'il te plaît.|por favor
poner|1|___ la mesa, que ya está la cena.|Mets la table, le dîner est prêt.|que ya está
decir|1|___ la verdad, no pasa nada.|Dis la vérité, ce n'est pas grave.|no pasa nada
ver|2|___ usted mismo el resultado.|Voyez vous-même le résultat.|usted
dar|2|___ usted la vuelta al final de la calle.|Faites demi-tour au bout de la rue.|usted
salir|1|¡___ de ahí ahora mismo!|Sors de là tout de suite !|ahora mismo
hablar|2|___ más despacio, por favor, señor.|Parlez plus lentement, s'il vous plaît, monsieur.|señor
comer|1|___ más verdura, te sentará bien.|Mange plus de légumes, ça te fera du bien.|te sentará bien
vivir|1|¡___ tu vida y deja a los demás!|Vis ta vie et laisse les autres !|¡
trabajar|3|¡___ juntos en esto!|Travaillons ensemble là-dessus !|¡
empezar|3|___ por el principio, ¿vale?|Commençons par le début, d'accord ?|¿vale?
cenar|4|Niños, ___ ya, que se enfría.|Les enfants, dînez maintenant, ça refroidit.|Niños
quedar|3|___ a las ocho delante del cine, ¿te parece?|Retrouvons-nous à huit heures devant le cinéma, ça te va ?|¿te parece?
crecer|1|¡___ de una vez y asume tus errores!|Grandis un peu et assume tes erreurs !|¡
caminar|2|___ usted todo recto hasta el semáforo.|Marchez tout droit jusqu'au feu.|usted
luchar|1|¡___ por tus sueños!|Bats-toi pour tes rêves !|¡
robar|1|¡___ el balón, vamos!|Prends-lui le ballon, allez !|¡
subir|1|___ el volumen, que no oigo nada.|Monte le son, je n'entends rien.|que no oigo
disfrutar|4|¡___ del viaje, chicos!|Profitez du voyage, les gars !|chicos
engañar|1|¡___ al portero con una finta!|Trompe le gardien avec une feinte !|¡
apoyar|1|___ la escalera contra la pared, por favor.|Appuie l'échelle contre le mur, s'il te plaît.|por favor
charlar|3|___ un rato, que hace mucho que no nos vemos.|Bavardons un moment, ça fait longtemps qu'on ne s'est pas vus.|que hace mucho
pelear|1|¡___ hasta el final, campeón!|Bats-toi jusqu'au bout, champion !|¡
animar|4|¡___ a vuestro equipo, chicos!|Encouragez votre équipe, les gars !|chicos
agradecer|1|___ el regalo a tu abuela, anda.|Remercie ta grand-mère pour le cadeau, allez.|anda
girarse|1|___ despacio y mira quién ha venido.|Retourne-toi doucement et regarde qui est venu.|y mira
agacharse|1|¡___, que viene una rama!|Baisse-toi, il y a une branche !|¡
coger|1|___ un paraguas, que va a llover.|Prends un parapluie, il va pleuvoir.|que va a llover
acordarse|1|___ de llamar a tu madre, ¿eh?|Pense à appeler ta mère, hein ?|¿eh?
bajar|1|___ la música, por favor, que es tarde.|Baisse la musique, s'il te plaît, il est tard.|por favor
meter|1|___ la leche en la nevera, por favor.|Mets le lait au frigo, s'il te plaît.|por favor
aparcar|2|___ usted aquí, por favor.|Garez-vous ici, s'il vous plaît.|usted
rogar|1|___ a tu jefe que te dé otra oportunidad.|Supplie ton chef de te donner une autre chance.|que te dé
sacar|1|___ la basura antes de irte, anda.|Sors la poubelle avant de partir, allez.|anda
pillar|1|___ sitio para los dos, que llego tarde.|Garde une place pour nous deux, j'arrive en retard.|que llego tarde
seguir|2|___ usted todo recto y gire a la derecha.|Continuez tout droit et tournez à droite.|usted
olvidarse|1|¡___ de él, no te merece!|Oublie-le, il ne te mérite pas !|¡
esperar|1|___ un momento, que ya voy.|Attends un instant, j'arrive.|que ya voy
mantener|2|___ usted la calma, por favor.|Gardez votre calme, s'il vous plaît.|usted
cerrar|1|___ la puerta al salir, por favor.|Ferme la porte en sortant, s'il te plaît.|por favor
borrar|1|___ ese mensaje ahora mismo.|Efface ce message tout de suite.|ahora mismo
levantarse|1|¡___, que ya son las diez!|Lève-toi, il est déjà dix heures !|¡
moverse|1|¡No te quedes ahí, ___!|Ne reste pas planté là, bouge !|¡
sudar|1|¡___ la camiseta, que es la final!|Mouille le maillot, c'est la finale !|¡
montar|3|___ la tienda de campaña antes de que anochezca.|Montons la tente avant la nuit.|antes de que anochezca
tocar|1|___ otra canción, por favor.|Joue une autre chanson, s'il te plaît.|por favor
dar|1|¡___ ahora mismo, que es mío!|Donne-le-moi tout de suite, c'est à moi ! (da + me + lo)|ahora mismo|dámelo
decir|1|___ de una vez, no me hagas esperar.|Dis-le-moi une bonne fois, ne me fais pas attendre. (di + me + lo)|de una vez|dímelo
poner|1|Hace frío: ___ la chaqueta.|Il fait froid : mets ta veste. (pon + te)|Hace frío|ponte
ir|1|¡___ de aquí y déjame en paz!|Va-t'en d'ici et laisse-moi tranquille ! (ve + te)|¡|vete
hacer|1|No lo pienses más: ___ ya.|N'y pense plus : fais-le maintenant. (haz + lo)|No lo pienses más|hazlo
esperar|1|¡___, que voy contigo!|Attends-moi, je viens avec toi ! (espera + me)|¡|espérame
decir|2|___ usted, ¿en qué puedo ayudarle?|Dites-moi, en quoi puis-je vous aider ? (diga + me)|usted|dígame
dar|1|___ un abrazo de mi parte a tu madre.|Fais un câlin à ta mère de ma part. (da + le)|de mi parte|dale`);
})();
