// ¡Aprende! — js/stories.js : Histoires interactives (STORIES)
// ═══════════════════════════════════════════════
// FEATURE 10: STORIES INTERACTIVES
// ═══════════════════════════════════════════════
const STORIES = {
  es: [
    { id: 'partido', title: '🔀 Rumbo al partido', desc: 'En route pour le match avec Lucía. À toi de choisir tes répliques : l\'histoire suit tes choix.', level: 'B2',
      chars: { T: ['🧑', 'Tú'], L: ['👩', 'Lucía'] },
      steps: [
        { type: 'line', who: 'L', text: '¡Venga, que llegamos tarde al partido! ¿Has metido las cosas en el maletero?', tr: 'Allez, on va être en retard au match ! Tu as mis les affaires dans le coffre ?' },
        { type: 'choice', who: 'T', prompt: 'Tu as tout chargé. Tu réponds :', opts: [
          { text: 'Sí, ya está todo en el maletero. Solo me falta coger las entradas.', tr: 'Oui, tout est déjà dans le coffre. Il me reste juste à prendre les billets.', best: true, note: 'maletero + coger (en Espagne) : parfait.',
            then: [{ type: 'line', who: 'L', text: 'Pues cógelas ya, que nos vamos.', tr: 'Alors prends-les tout de suite, on y va.' }] },
          { text: 'Sí, todo está en el cofre. Solo debo prender las entradas.', tr: '(calque) Oui, tout est dans le coffre. Je dois juste prendre les billets.', ok: false, note: 'Deux faux-amis : cofre = coffre au trésor (coffre de voiture = maletero), et prender = allumer (prendre = coger).',
            then: [{ type: 'line', who: 'L', text: '¿En el cofre? ¿Qué somos, piratas? En el maletero, hombre. Coge las entradas y vámonos.', tr: 'Dans le coffre au trésor ? On est des pirates ? Dans le coffre de la voiture, enfin. Prends les billets et on y va.' }] },
          { text: 'Sí, lo he puesto todo en el coche. Voy a por las entradas.', tr: 'Oui, j\'ai tout mis dans la voiture. Je vais chercher les billets.', note: 'Correct et naturel. Tu évites juste le mot que Lucía attendait : maletero.',
            then: [{ type: 'line', who: 'L', text: 'Vale, date prisa.', tr: 'OK, dépêche-toi.' }] },
        ] },
        { type: 'line', who: 'L', text: '¡Cuidado! Agáchate, que el maletero no cierra bien y te vas a dar en la cabeza.', tr: 'Attention ! Baisse-toi, le coffre ferme mal et tu vas te cogner la tête.' },
        { type: 'q', prompt: 'Que veut dire « agáchate » ?', opts: ['Dépêche-toi', 'Baisse-toi', 'Accroche-toi'], ans: 1 },
        { type: 'line', who: 'L', text: 'Sube al coche. Y agárrate, que conduzco yo.', tr: 'Monte dans la voiture. Et accroche-toi, c\'est moi qui conduis.' },
        { type: 'q', prompt: '« Sube al coche » veut dire…', opts: ['Subis la voiture', 'Monte dans la voiture', 'Sors de la voiture'], ans: 1 },
        { type: 'line', who: 'L', text: '¿Has visto la plantilla de este año? Han fichado a tres jugadores nuevos.', tr: 'Tu as vu l\'effectif de cette année ? Ils ont recruté trois nouveaux joueurs.' },
        { type: 'choice', who: 'T', prompt: 'Pour toi, le problème n\'est pas l\'effectif mais l\'entraîneur. Tu dis :', opts: [
          { text: 'El problema no es la plantilla, pero el entrenador.', tr: '(calque) Le problème n\'est pas l\'effectif, mais l\'entraîneur.', ok: false, note: 'Après une négation qu\'on corrige, pero ne marche pas : il faut sino.',
            then: [{ type: 'line', who: 'L', text: 'Sino el entrenador, querrás decir. Y sí, ahí te doy la razón.', tr: '« Sino el entrenador », tu veux dire. Et oui, là je te donne raison.' }] },
          { text: 'El problema no es la plantilla, sino el entrenador. No es que el equipo juegue mal, sino que él no sabe hacer los cambios.', tr: 'Le problème, ce n\'est pas l\'effectif mais l\'entraîneur. Ce n\'est pas que l\'équipe joue mal, c\'est qu\'il ne sait pas faire les changements.', best: true, note: 'sino + nom, puis sino que + verbe conjugué : les deux dans la même réplique.',
            then: [{ type: 'line', who: 'L', text: '¡Exacto! Siempre saca a los suplentes cuando ya es tarde.', tr: 'Exactement ! Il fait toujours entrer les remplaçants quand c\'est déjà trop tard.' }] },
          { text: 'Para mí, el problema es el entrenador, no la plantilla.', tr: 'Pour moi, le problème c\'est l\'entraîneur, pas l\'effectif.', note: 'Correct : tu contournes sino en inversant la phrase. Entraîne-toi quand même à « no… sino… ».',
            then: [{ type: 'line', who: 'L', text: 'Puede ser. A ver qué pasa hoy.', tr: 'Possible. On verra bien aujourd\'hui.' }] },
        ] },
        { type: 'line', who: 'L', text: 'Por cierto, ¿sacaste las entradas por internet o hay que recogerlas en taquilla?', tr: 'Au fait, tu as pris les billets sur internet ou il faut les récupérer au guichet ?' },
        { type: 'q', prompt: 'Ici, « sacar las entradas » veut dire…', opts: ['Perdre les billets', 'Acheter / prendre les billets', 'Montrer les billets'], ans: 1 },
        { type: 'line', who: 'T', text: 'Las saqué por internet. Las llevo en el móvil.', tr: 'Je les ai prises sur internet. Je les ai sur mon portable.' },
        { type: 'line', who: 'L', text: 'Perfecto. ¡Pues a por los tres puntos!', tr: 'Parfait. Allez, on va chercher les trois points !' },
      ]
    },
    { id: 'cafe', title: '☕ En el café', desc: 'Pablo commande un café et rencontre une surprise.', level: 'A1',
      chars: { P: ['🧑', 'Pablo'], C: ['👩‍🍳', 'La camarera'] },
      steps: [
        { type: 'line', who: 'C', text: '¡Buenos días! ¿Qué desea?', tr: 'Bonjour ! Que désirez-vous ?' },
        { type: 'line', who: 'P', text: 'Un café con leche, por favor.', tr: 'Un café au lait, s\'il vous plaît.' },
        { type: 'q', prompt: 'Que commande Pablo ?', opts: ['Un thé', 'Un café con leche', 'Un jus d\'orange'], ans: 1 },
        { type: 'line', who: 'C', text: '¿Grande o pequeño?', tr: 'Grand ou petit ?' },
        { type: 'line', who: 'P', text: 'Grande, por favor. Y un croissant.', tr: 'Grand, s\'il vous plaît. Et un croissant.' },
        { type: 'q', prompt: 'Quelle taille choisit Pablo ?', opts: ['Pequeño', 'Mediano', 'Grande'], ans: 2 },
        { type: 'line', who: 'C', text: 'Son tres euros con cincuenta.', tr: 'C\'est trois euros cinquante.' },
        { type: 'line', who: 'P', text: 'Aquí tiene. ¡Gracias!', tr: 'Voici. Merci !' },
        { type: 'q', prompt: 'Traduis : « Aquí tiene »', opts: ['Ici c\'est bien', 'Voici / Tenez', 'Merci beaucoup'], ans: 1 },
      ]
    },
    { id: 'mercado', title: '🛒 En el mercado', desc: 'María fait ses courses au marché.', level: 'A1',
      chars: { M: ['👩', 'María'], V: ['👨‍🌾', 'El vendedor'] },
      steps: [
        { type: 'line', who: 'V', text: '¡Hola! ¿Qué le pongo?', tr: 'Salut ! Qu\'est-ce que je vous mets ?' },
        { type: 'line', who: 'M', text: 'Quiero un kilo de manzanas y medio kilo de tomates.', tr: 'Je veux un kilo de pommes et un demi-kilo de tomates.' },
        { type: 'q', prompt: 'Combien de tomates veut María ?', opts: ['Un kilo', 'Medio kilo', 'Dos kilos'], ans: 1 },
        { type: 'line', who: 'V', text: '¿Algo más?', tr: 'Autre chose ?' },
        { type: 'line', who: 'M', text: 'Sí, también quiero una lechuga, por favor.', tr: 'Oui, je veux aussi une laitue, s\'il vous plaît.' },
        { type: 'q', prompt: 'Traduis : « ¿Algo más? »', opts: ['C\'est tout ?', 'Autre chose ?', 'C\'est combien ?'], ans: 1 },
        { type: 'line', who: 'V', text: 'Muy bien. Son cuatro euros.', tr: 'Très bien. C\'est quatre euros.' },
        { type: 'line', who: 'M', text: '¡Perfecto! Hasta luego.', tr: 'Parfait ! À plus tard.' },
      ]
    },
    { id: 'hotel', title: '🏨 En el hotel', desc: 'Carlos arrive à l\'hôtel et demande sa chambre.', level: 'A2',
      chars: { C: ['🧑', 'Carlos'], R: ['👩‍💼', 'La recepcionista'] },
      steps: [
        { type: 'line', who: 'C', text: 'Buenas tardes. Tengo una reserva a nombre de Carlos.', tr: 'Bonsoir. J\'ai une réservation au nom de Carlos.' },
        { type: 'line', who: 'R', text: 'Un momento... Sí, una habitación doble para tres noches.', tr: 'Un moment... Oui, une chambre double pour trois nuits.' },
        { type: 'q', prompt: 'Combien de nuits reste Carlos ?', opts: ['Dos noches', 'Tres noches', 'Una semana'], ans: 1 },
        { type: 'line', who: 'R', text: '¿Necesita desayuno incluido?', tr: 'Avez-vous besoin du petit-déjeuner inclus ?' },
        { type: 'line', who: 'C', text: 'Sí, por favor. ¿A qué hora es?', tr: 'Oui, s\'il vous plaît. À quelle heure est-ce ?' },
        { type: 'line', who: 'R', text: 'De siete a diez de la mañana. Aquí tiene su llave, habitación doscientos cinco.', tr: 'De sept à dix heures du matin. Voici votre clé, chambre deux cent cinq.' },
        { type: 'q', prompt: 'Traduis : « habitación »', opts: ['Habitude', 'Chambre', 'Habitat'], ans: 1 },
      ]
    },
  
    { id: 'entrevista', title: '💼 La entrevista', desc: 'Sofía passe un entretien d\'embauche pour le poste de ses rêves.', level: 'B2+',
      chars: { S: ['👩‍💼', 'Sofía'], R: ['🧔', 'El reclutador'] },
      steps: [
        { type: 'line', who: 'R', text: 'Buenos días, Sofía. Cuénteme, ¿por qué quiere trabajar aquí?', tr: 'Bonjour Sofía. Dites-moi, pourquoi voulez-vous travailler ici ?' },
        { type: 'line', who: 'S', text: 'Llevo tres años capacitándome en marketing digital. Su empresa me encaja porque valora la maña y la creatividad.', tr: 'Cela fait trois ans que je me forme en marketing digital. Votre entreprise me convient car elle valorise l\'astuce et la créativité.' },
        { type: 'q', prompt: '¿Cuánto tiempo lleva Sofía capacitándose?', opts: ['Un año', 'Tres años', 'Cinco años'], ans: 1 },
        { type: 'line', who: 'R', text: '¿Y cómo aguanta la presión? Aquí trabajamos con plazos muy ajustados.', tr: 'Et comment supportez-vous la pression ? Ici on travaille avec des délais très serrés.' },
        { type: 'line', who: 'S', text: 'He aprendido a madrugar y a estar al tanto de cada proyecto. El esfuerzo siempre da fruto, ¿no?', tr: 'J\'ai appris à me lever tôt et à être au courant de chaque projet. L\'effort porte toujours ses fruits, non ?' },
        { type: 'q', prompt: '¿Qué significa « dar fruto » aquí?', opts: ['Donner des fruits au marché', 'Porter ses fruits / donner des résultats', 'Distribuer des cadeaux'], ans: 1 },
        { type: 'line', who: 'R', text: 'Me gusta. Pero, entre nosotros, a veces hay que encajar críticas. ¿Le da igual la opinión negativa?', tr: 'J\'aime ça. Mais entre nous, parfois il faut encaisser les critiques. L\'opinion négative vous est-elle égale ?' },
        { type: 'line', who: 'S', text: 'No me da igual. Pero me he enterado de que las críticas desatan la mejora. Prefiero eso a las chapuzas.', tr: 'Ça ne m\'est pas égal. Mais j\'ai réalisé que les critiques déclenchent l\'amélioration. Je préfère ça au travail bâclé.' },
        { type: 'q', prompt: '¿Qué prefiere Sofía a las chapuzas?', opts: ['Les critiques constructives', 'Les compliments', 'Le silence'], ans: 0 },
        { type: 'line', who: 'R', text: 'Muy bien. Bienvenida al equipo, Sofía.', tr: 'Très bien. Bienvenue dans l\'équipe, Sofía.' },
        { type: 'line', who: 'S', text: '¡Gracias! No los voy a malgastar esta oportunidad.', tr: 'Merci ! Je ne vais pas gaspiller cette opportunité.' }
      ]
    },
    { id: 'roommate', title: '🏠 La convivencia', desc: 'Marcos et sa colocataire ont une discussion sur le quotidien.', level: 'B2',
      chars: { M: ['🧑', 'Marcos'], L: ['👩', 'Lucía'] },
      steps: [
        { type: 'line', who: 'L', text: 'Marcos, tengo unas cosillas que hablar contigo.', tr: 'Marcos, j\'ai quelques bricoles à te dire.' },
        { type: 'line', who: 'M', text: '¿Qué pasa? Espero que no sea nada grave.', tr: 'Qu\'est-ce qui se passe ? J\'espère que ce n\'est rien de grave.' },
        { type: 'q', prompt: 'Que veut dire « cosillas » ?', opts: ['Des gros problèmes', 'Des petites choses / bricoles', 'Des courses'], ans: 1 },
        { type: 'line', who: 'L', text: 'Es que haces mucho ruido por la noche. No puedo dormir.', tr: 'C\'est que tu fais beaucoup de bruit la nuit. Je ne peux pas dormir.' },
        { type: 'line', who: 'M', text: 'Perdona, no quería pasar desapercibido… bueno, al revés, no sabía que se oía tanto.', tr: 'Pardon, je ne voulais pas passer inaperçu… enfin, l\'inverse, je ne savais pas que ça s\'entendait autant.' },
        { type: 'q', prompt: 'Que signifie « pasar desapercibido » ?', opts: ['Être désespéré', 'Passer inaperçu', 'Être apprécié'], ans: 1 },
        { type: 'line', who: 'L', text: 'Mira, convivir con alguien requiere un poco de cortesía, ¿no?', tr: 'Écoute, cohabiter avec quelqu\'un demande un peu de politesse, non ?' },
        { type: 'line', who: 'M', text: 'Tienes razón. No quiero hacer ninguna tontería que te moleste.', tr: 'Tu as raison. Je ne veux pas faire de bêtise qui te dérange.' },
        { type: 'q', prompt: 'Traduis : « hacer una tontería »', opts: ['Faire une bonne action', 'Faire une bêtise', 'Faire un effort'], ans: 1 },
        { type: 'line', who: 'L', text: 'Me hace gracia que digas eso, porque ayer dejaste la cocina hecha un desastre.', tr: 'Ça me fait rire que tu dises ça, parce qu\'hier tu as laissé la cuisine dans un état catastrophique.' },
        { type: 'line', who: 'M', text: 'Bueno, soy despierto para algunas cosas… y un desastre para otras. Prometo mirarlo con lupa a partir de ahora.', tr: 'Bon, je suis dégourdi pour certaines choses… et un désastre pour d\'autres. Je promets d\'y regarder à la loupe dorénavant.' },
        { type: 'q', prompt: '« Mirarlo con lupa » signifie…', opts: ['Ignorer les détails', 'Regarder à la loupe / examiner attentivement', 'Acheter une loupe'], ans: 1 },
        { type: 'line', who: 'L', text: 'Más te vale, que no quiero que te saquen del piso.', tr: 'T\'as intérêt, je ne veux pas qu\'on te vire de l\'appart.' },
        { type: 'line', who: 'M', text: '¡Descuida! A partir de mañana, soy el mejor compañero de piso del mundo.', tr: 'T\'inquiète ! À partir de demain, je suis le meilleur coloc du monde.' }
      ]
    },
    { id: 'descarrilamiento', title: '🚂 El descarrilamiento', desc: 'Un déraillement de train bouleverse la vie de deux passagers.', level: 'B2+',
      chars: { E: ['👩', 'Elena'], D: ['🧑', 'Daniel'] },
      steps: [
        { type: 'line', who: 'E', text: '¿Te enteraste? Hubo un descarrilamiento esta mañana cerca de Adamuz.', tr: 'Tu es au courant ? Il y a eu un déraillement ce matin près d\'Adamuz.' },
        { type: 'line', who: 'D', text: 'Sí, lo vi. Me quedé chocado. La gente huía por las vías.', tr: 'Oui, je l\'ai vu. Je suis resté choqué. Les gens fuyaient par les voies.' },
        { type: 'q', prompt: '¿Qué significa « huían »?', opts: ['Ils criaient', 'Ils fuyaient', 'Ils pleuraient'], ans: 1 },
        { type: 'line', who: 'E', text: 'El tren estaba a punto de estrellarse contra un puente. Menos mal que el maquinista frenó a tiempo.', tr: 'Le train était sur le point de s\'écraser contre un pont. Heureusement que le conducteur a freiné à temps.' },
        { type: 'line', who: 'D', text: 'Ha habido muchos heridos, pero al menos nadie murió. El llanto de los niños era insoportable.', tr: 'Il y a eu beaucoup de blessés, mais au moins personne n\'est mort. Les pleurs des enfants étaient insupportables.' },
        { type: 'q', prompt: '¿Qué es « el llanto »?', opts: ['Le cri de joie', 'Les pleurs / les larmes', 'Le silence'], ans: 1 },
        { type: 'line', who: 'E', text: 'Un hombre casado con tres hijos estaba lejos de su familia. Los echaba mucho de menos.', tr: 'Un homme marié avec trois enfants était loin de sa famille. Ils lui manquaient beaucoup.' },
        { type: 'line', who: 'D', text: 'Solo quería aliviar su dolor. Le dije que se bajara del vagón conmigo.', tr: 'Je voulais juste soulager sa douleur. Je lui ai dit de descendre du wagon avec moi.' },
        { type: 'q', prompt: '¿Qué quería Daniel?', opts: ['Huir solo', 'Aliviar el dolor del hombre', 'Llamar a la policía'], ans: 1 },
        { type: 'line', who: 'E', text: 'Fue un rostro que no voy a olvidar. Pero al final, decidí que esa experiencia me iba a hacer más fuerte.', tr: 'C\'est un visage que je n\'oublierai pas. Mais au final, j\'ai décidé que cette expérience allait me rendre plus forte.' },
        { type: 'q', prompt: '« Rostro » es sinónimo de…', opts: ['Cuerpo', 'Cara / Visage', 'Mirada'], ans: 1 },
      ]
    }
  ],
  ln: [
    { id: 'mbote', title: '👋 Mbote!', desc: 'Une rencontre au quartier.', level: 'A1',
      chars: { A: ['🧑', 'Alain'], B: ['👩', 'Bénédicte'] },
      steps: [
        { type: 'line', who: 'A', text: 'Mbote, Bénédicte! Ozali malamu?', tr: 'Salut, Bénédicte ! Tu vas bien ?' },
        { type: 'line', who: 'B', text: 'Ee, nazali malamu. Yo mpe?', tr: 'Oui, je vais bien. Et toi ?' },
        { type: 'q', prompt: 'Que veut dire « malamu » ?', opts: ['Fatigué', 'Bien', 'Content'], ans: 1 },
        { type: 'line', who: 'A', text: 'Nazali malamu. Ozali kokende wapi?', tr: 'Je vais bien. Tu vas où ?' },
        { type: 'line', who: 'B', text: 'Nazali kokende na zando.', tr: 'Je vais au marché.' },
        { type: 'q', prompt: 'Où va Bénédicte ?', opts: ['À l\'école', 'Au marché', 'À la maison'], ans: 1 },
      ]
    },
  ],
  en: [
    { id: 'outage', title: '🔀 The Outage', desc: 'Internet coupe juste avant une deadline. À toi de choisir tes répliques : l\'histoire suit tes choix.', level: 'C1',
      chars: { Y: ['🧑', 'You'], M: ['👩', 'Maya'] },
      steps: [
        { type: 'line', who: 'M', text: 'Hey, did the internet just go down, or is it just me?', tr: 'Hé, internet vient de couper, ou c\'est juste moi ?' },
        { type: 'choice', who: 'Y', prompt: 'Ça a coupé chez toi aussi. Tu réponds :', opts: [
          { text: 'Yes, the connection stopped working ten minutes ago.', tr: 'Oui, la connexion a cessé de fonctionner il y a dix minutes.', note: 'Correct, mais scolaire. À l\'oral, un réseau « goes down ».',
            then: [{ type: 'line', who: 'M', text: 'Stopped working, huh? You sound like tech support. Anyway, I have a deadline at midnight.', tr: 'A cessé de fonctionner, hein ? On dirait le support technique. Bref, j\'ai une deadline à minuit.' }] },
          { text: 'Yeah, it went down like ten minutes ago, for some reason.', tr: 'Ouais, ça a coupé il y a genre dix minutes, va savoir pourquoi.', best: true, note: 'went down + for some reason : exactement ce que dirait un Américain.',
            then: [{ type: 'line', who: 'M', text: 'Ugh, perfect timing. I have a deadline at midnight.', tr: 'Super, pile au bon moment. J\'ai une deadline à minuit.' }] },
          { text: 'Yes, internet fell since ten minutes.', tr: '(calque) Oui, internet est tombé depuis dix minutes.', ok: false, note: 'Deux calques. Pour un réseau, « tomber » se dit go down. Et « depuis dix minutes » pour un événement passé = ten minutes ago.',
            then: [{ type: 'line', who: 'M', text: 'It fell? You mean it went down. Either way, I have a deadline at midnight.', tr: 'Il est tombé ? Tu veux dire que ça a coupé. Dans tous les cas, j\'ai une deadline à minuit.' }] },
        ] },
        { type: 'line', who: 'M', text: 'I called the provider. I was on hold for an hour and nodded off twice.', tr: 'J\'ai appelé l\'opérateur. J\'ai attendu une heure en ligne et j\'ai piqué du nez deux fois.' },
        { type: 'q', prompt: 'Que veut dire « nodded off » ?', opts: ['A raccroché', 'S\'est assoupie', 'S\'est énervée'], ans: 1 },
        { type: 'line', who: 'M', text: 'And when I finally got someone, the guy wouldn\'t budge. No technician until Thursday.', tr: 'Et quand j\'ai enfin eu quelqu\'un, le type n\'a rien voulu savoir. Pas de technicien avant jeudi.' },
        { type: 'choice', who: 'Y', prompt: 'Maya est à bout. Tu proposes un plan :', opts: [
          { text: 'Hold on, I\'ve got an idea. Let\'s run by the café and grab some grub while we\'re at it.', tr: 'Attends, j\'ai une idée. On passe vite fait au café et on se prend à manger tant qu\'on y est.', best: true, note: 'hold on, run by, grub : trois expressions de ta semaine dans une seule phrase.',
            then: [{ type: 'line', who: 'M', text: 'Now you\'re talking. I\'m starving anyway.', tr: 'Là tu parles. De toute façon je meurs de faim.' }] },
          { text: 'Wait, I have an idea. We pass by the coffee and we take food.', tr: '(calque) Attends, j\'ai une idée. On passe au café et on prend à manger.', ok: false, note: 'Passer quelque part = run by / swing by (pass by = passer devant sans s\'arrêter). Coffee est la boisson, le lieu est café. Et on dit grab ou get food, pas take.',
            then: [{ type: 'line', who: 'M', text: 'You mean run by the café? Sure. And yes, food. Please.', tr: 'Tu veux dire passer au café ? D\'accord. Et oui, à manger. S\'il te plaît.' }] },
          { text: 'We could go to the café and use their Wi-Fi.', tr: 'On pourrait aller au café et utiliser leur Wi-Fi.', note: 'Correct et clair. Un natif glisserait un phrasal verb : run by, swing by.',
            then: [{ type: 'line', who: 'M', text: 'Works for me. Let me grab my laptop.', tr: 'Ça me va. Je prends mon ordi.' }] },
        ] },
        { type: 'line', who: 'M', text: 'If my manager finds out I missed the deadline, I\'m gonna get an earful.', tr: 'Si ma manager apprend que j\'ai raté la deadline, je vais me faire passer un savon.' },
        { type: 'q', prompt: '« Get an earful » veut dire…', opts: ['Recevoir des félicitations', 'Se faire passer un savon', 'Avoir mal aux oreilles'], ans: 1 },
        { type: 'line', who: 'Y', text: 'Don\'t dwell on it. We\'ll make our way there, you\'ll hit send, done.', tr: 'Ne ressasse pas. On y va, tu envoies, terminé.' },
        { type: 'line', who: 'M', text: 'Okay. And for the record, you\'re buying.', tr: 'OK. Et que ce soit dit, c\'est toi qui paies.' },
        { type: 'choice', who: 'Y', prompt: 'Dernier mot :', opts: [
          { text: 'I am agree, but you must me one.', tr: '(calque) Je suis d\'accord, mais tu m\'en dois une.', ok: false, note: '« I am agree » est l\'erreur classique : agree est un verbe (I agree). Et « tu m\'en dois une » = you owe me one.',
            then: [{ type: 'line', who: 'M', text: 'You agree, and I owe you one. Got it. Let\'s go.', tr: 'Tu es d\'accord, et je t\'en dois une. Compris. On y va.' }] },
          { text: 'All right, but you owe me a favor.', tr: 'D\'accord, mais tu me dois un service.', note: 'Correct. « You owe me one » est la version courte que tout le monde utilise.',
            then: [{ type: 'line', who: 'M', text: 'Deal. Let\'s go before I nod off again.', tr: 'Marché conclu. On y va avant que je pique encore du nez.' }] },
          { text: 'Fair enough. But you owe me one.', tr: 'Ça se tient. Mais tu m\'en dois une.', best: true, note: 'Fair enough : la réplique réflexe pour accepter de bonne grâce.',
            then: [{ type: 'line', who: 'M', text: 'Deal. Let\'s go before I nod off again.', tr: 'Marché conclu. On y va avant que je pique encore du nez.' }] },
        ] },
      ]
    },
    { id: 'coffee', title: '☕ Coffee shop', desc: 'Ordering coffee like a local.', level: 'B2',
      chars: { Y: ['🧑', 'You'], B: ['👩', 'Barista'] },
      steps: [
        { type: 'line', who: 'B', text: 'Hey! What can I get started for you?', tr: 'Hé ! Qu\'est-ce que je vous prépare ?' },
        { type: 'line', who: 'Y', text: 'Could I get a large iced oat milk latte?', tr: 'Je pourrais avoir un grand latte glacé au lait d\'avoine ?' },
        { type: 'q', prompt: 'What does "iced" mean?', opts: ['Chaud', 'Glacé', 'Tiède'], ans: 1 },
        { type: 'line', who: 'B', text: 'Sure thing! Any flavor shots?', tr: 'Bien sûr ! Des sirops ?' },
        { type: 'line', who: 'Y', text: 'Hmm, I\'ll pass on that. Just the latte, thanks.', tr: 'Hmm, je vais m\'en passer. Juste le latte, merci.' },
        { type: 'q', prompt: 'What does "I\'ll pass on that" mean?', opts: ['Je vais prendre ça', 'Je vais m\'en passer', 'Passez-moi ça'], ans: 1 },
        { type: 'line', who: 'B', text: 'You got it! That\'ll be five seventy-five.', tr: 'C\'est parti ! Ça fera cinq soixante-quinze.' },
      ]
    },
    { id: 'hearing', title: '⚖️ The hearing', desc: 'Marcus fait face à la commission de libération conditionnelle.', level: 'C1',
      chars: { M: ['👨', 'Marcus'], J: ['👩‍⚖️', 'Judge Campbell'] },
      steps: [
        { type: 'line', who: 'J', text: 'Mr. Davis, you\'ve been through rehab and the reports are staggering — in a good way. How do you feel?', tr: 'M. Davis, vous êtes passé par la rééducation et les rapports sont stupéfiants — dans le bon sens. Comment vous sentez-vous ?' },
        { type: 'line', who: 'M', text: 'Honestly, the journey has been gut-wrenching. But I\'m grounded now. I can fathom the harm I caused.', tr: 'Honnêtement, le parcours a été déchirant. Mais je suis ancré maintenant. Je peux comprendre le mal que j\'ai causé.' },
        { type: 'q', prompt: 'What does Marcus mean by « gut-wrenching »?', opts: ['Boring', 'Emotionally painful', 'Physically exhausting'], ans: 1 },
        { type: 'line', who: 'J', text: 'The parole board has noted your relentless effort. Still, some find your progress daunting to believe.', tr: 'La commission a noté vos efforts acharnés. Pourtant, certains trouvent votre progrès difficile à croire.' },
        { type: 'line', who: 'M', text: 'I understand. It would be conceited to say I\'m a different person. But the people who\'ve bestowed their trust on me can vouch for it.', tr: 'Je comprends. Ce serait vaniteux de dire que je suis une personne différente. Mais ceux qui m\'ont accordé leur confiance peuvent en témoigner.' },
        { type: 'q', prompt: 'What does « bestowed » mean here?', opts: ['Refused', 'Granted / Given', 'Demanded'], ans: 1 },
        { type: 'line', who: 'J', text: 'Don\'t let this be disheartening — the road ahead is a hefty one. But I\'m outspoken about second chances.', tr: 'Ne vous laissez pas décourager — la route devant vous est lourde. Mais je suis franche quand il s\'agit de secondes chances.' },
        { type: 'line', who: 'M', text: 'Thank you, Your Honor. This reckoning with myself — it\'s looming large, but I\'m ready for the upheaval.', tr: 'Merci, Votre Honneur. Ce jugement envers moi-même — il est imminent et imposant, mais je suis prêt pour le bouleversement.' },
        { type: 'q', prompt: 'What is « looming » closest to?', opts: ['Fading away', 'Approaching in a threatening way', 'Already finished'], ans: 1 }
      ]
    },
    { id: 'bridges', title: '🌉 Burning bridges', desc: 'Deux collègues discutent d\'un départ difficile au bureau.', level: 'C1',
      chars: { A: ['👩', 'Amy'], R: ['🧑', 'Ryan'] },
      steps: [
        { type: 'line', who: 'A', text: 'Did you hear? Kevin quit yesterday — and he didn\'t hold back. He basically despised everyone in management.', tr: 'Tu as entendu ? Kevin a démissionné hier — et il ne s\'est pas retenu. En gros, il méprisait tout le monde à la direction.' },
        { type: 'line', who: 'R', text: 'Yeah, he really burned bridges. No way they\'ll ever take him back.', tr: 'Ouais, il a vraiment coupé les ponts. Pas moyen qu\'ils le reprennent.' },
        { type: 'q', prompt: 'What does "burn bridges" mean?', opts: ['Build new connections', 'Destroy relationships permanently', 'Cross a bridge'], ans: 1 },
        { type: 'line', who: 'A', text: 'I get it though — the workload was weighing him down. He\'d overlook his own health just to meet deadlines.', tr: 'Je comprends quand même — la charge de travail le plombait. Il négligeait sa propre santé juste pour respecter les délais.' },
        { type: 'line', who: 'R', text: 'True. But his frustration predates this job. He told me it\'s been a breeding ground for burnout since day one.', tr: 'C\'est vrai. Mais sa frustration est antérieure à ce boulot. Il m\'a dit que c\'était un terreau pour le burnout depuis le premier jour.' },
        { type: 'q', prompt: 'What does "breeding ground" mean here?', opts: ['A farm', 'A fertile environment for something negative', 'A training center'], ans: 1 },
        { type: 'line', who: 'A', text: 'Well, he got off easy — at least he wasn\'t beheaded by HR. They could have withheld his bonus.', tr: 'Bon, il s\'en est bien sorti — au moins il n\'a pas été décapité par les RH. Ils auraient pu retenir sa prime.' },
        { type: 'line', who: 'R', text: 'He was cleared of any misconduct, so they had to pay up. Still, I wouldn\'t want to be in his shoes.', tr: 'Il a été disculpé de toute faute, donc ils ont dû payer. Quand même, je ne voudrais pas être à sa place.' },
        { type: 'q', prompt: 'What does "he was cleared" mean?', opts: ['He was fired', 'He was found innocent / exonerated', 'He was promoted'], ans: 1 },
      ]
    },
  ],
};

// ── Histoires du génère du 13/11/2026 ──
STORIES.es.push(
    { id: 'tutoria', title: '🧒 La tutoría del cole', desc: 'Réunion avec Marta, la maîtresse de ton neveu Leo, qui ne tient pas en place. À toi de choisir tes répliques.', level: 'B2',
      chars: { T: ['🧑', 'Tú'], M: ['👩', 'Marta'] },
      steps: [
        { type: 'line', who: 'M', text: 'Gracias por venir. Te lo digo claro: Leo no para quieto. En el aula se levanta cada cinco minutos.', tr: 'Merci d\'être venu. Je te le dis franchement : Leo ne tient pas en place. En classe, il se lève toutes les cinq minutes.' },
        { type: 'q', prompt: 'Que veut dire « no para quieto » ?', opts: ['Il ne s\'arrête pas de parler', 'Il ne tient pas en place', 'Il ne vient pas en classe'], ans: 1 },
        { type: 'line', who: 'M', text: 'Le digo «estate quieto» cien veces al día, pero nada. Y luego se aburre y deja de prestar atención.', tr: 'Je lui dis « arrête de bouger » cent fois par jour, mais rien. Et ensuite il s\'ennuie et arrête d\'être attentif.' },
        { type: 'choice', who: 'T', prompt: 'Tu veux dire qu\'à la maison, c\'est pareil : il ne fait pas attention. Tu réponds :', opts: [
          { text: 'En casa es igual: no presta atención y no aguanta ni diez minutos sentado.', tr: 'À la maison c\'est pareil : il n\'est pas attentif et il ne tient pas dix minutes assis.', best: true, note: 'prestar atención + estar sentado : parfait.',
            then: [{ type: 'line', who: 'M', text: 'Lo sé. Es un culo inquieto, como decimos aquí.', tr: 'Je sais. Il a la bougeotte, comme on dit ici.' }] },
          { text: 'En casa es igual: no hace atención y no puede ser sentado.', tr: '(calque) À la maison c\'est pareil : il ne fait pas attention et il ne peut pas être assis.', ok: false, note: 'Deux calques : « faire attention » = prestar atención, et « être assis » est un état → estar sentado.',
            then: [{ type: 'line', who: 'M', text: '¿«No hace atención»? Querrás decir que no presta atención. Y que no puede estar sentado, sí.', tr: '« Il ne fait pas attention » ? Tu veux dire qu\'il n\'est pas attentif. Et qu\'il ne tient pas assis, oui.' }] },
          { text: 'En casa también se mueve mucho y no escucha.', tr: 'À la maison aussi, il bouge beaucoup et n\'écoute pas.', note: 'Correct et clair, mais plus simple : prestar atención et estar sentado étaient attendus.',
            then: [{ type: 'line', who: 'M', text: 'Ya. Es lo que veo cada día.', tr: 'Oui. C\'est ce que je vois tous les jours.' }] },
        ] },
        { type: 'q', prompt: '« Es un culo inquieto » veut dire…', opts: ['Il est mal assis', 'Il a la bougeotte', 'Il est malpoli'], ans: 1 },
        { type: 'line', who: 'M', text: 'El otro día un padre me dijo: «Habría que recetarle algo, una pastilla para que se calme».', tr: 'L\'autre jour un parent m\'a dit : « Il faudrait lui prescrire quelque chose, un cachet pour qu\'il se calme ».' },
        { type: 'choice', who: 'T', prompt: 'Tu n\'es pas d\'accord : il faut d\'abord un vrai diagnostic. Tu dis :', opts: [
          { text: 'Antes de recetarle nada, habría que ver si de verdad tiene un trastorno.', tr: 'Avant de lui prescrire quoi que ce soit, il faudrait voir s\'il a vraiment un trouble.', best: true, note: 'recetar + habría que + trastorno : exactement les mots de la semaine.',
            then: [{ type: 'line', who: 'M', text: 'Totalmente. Una pastilla puede tener efectos secundarios. Eso se llama iatrogenia.', tr: 'Tout à fait. Un cachet peut avoir des effets secondaires. Ça s\'appelle l\'iatrogénie.' }] },
          { text: 'Antes de ordenarle nada, se debe ver si tiene un desorden.', tr: '(calque) Avant de lui ordonner quoi que ce soit, on doit voir s\'il a un désordre.', ok: false, note: 'Ordenar = ordonner, ranger ; « prescrire » = recetar. Un trouble médical = un trastorno, pas un desorden.',
            then: [{ type: 'line', who: 'M', text: '¿Ordenarle? Recetarle, dirás. Y no es un desorden, es un trastorno, si lo hay.', tr: 'Lui ordonner ? Lui prescrire, tu veux dire. Et ce n\'est pas un désordre, c\'est un trouble, s\'il y en a un.' }] },
          { text: 'No sé si es buena idea darle medicinas.', tr: 'Je ne sais pas si c\'est une bonne idée de lui donner des médicaments.', note: 'Correct, mais tu évites recetar et trastorno.',
            then: [{ type: 'line', who: 'M', text: 'Yo tampoco. Primero hay que entender qué le pasa.', tr: 'Moi non plus. D\'abord il faut comprendre ce qu\'il a.' }] },
        ] },
        { type: 'q', prompt: 'Que veut dire « iatrogenia » ?', opts: ['Un effet nocif causé par un traitement', 'Une allergie', 'Un trouble du sommeil'], ans: 0 },
        { type: 'line', who: 'M', text: 'Además, el colegio se creó con una idea: que cada niño encuentre su encaje. Nuestro trabajo es evitar que Leo se sienta fuera de lugar.', tr: 'En plus, l\'école a été créée avec une idée : que chaque enfant trouve sa place. Notre travail, c\'est d\'éviter que Leo se sente pas à sa place.' },
        { type: 'q', prompt: '« Encontrar su encaje » veut dire…', opts: ['Trouver sa dentelle', 'Trouver sa place', 'Trouver son rythme'], ans: 1 },
        { type: 'line', who: 'M', text: 'En la vida cotidiana, ¿qué le impide concentrarse? ¿Duerme bien?', tr: 'Dans la vie quotidienne, qu\'est-ce qui l\'empêche de se concentrer ? Il dort bien ?' },
        { type: 'choice', who: 'T', prompt: 'Les voisins font du bruit le soir et l\'empêchent de dormir. Tu réponds :', opts: [
          { text: 'No mucho. Los vecinos no le dejan dormir: ponen la música hasta las doce.', tr: 'Pas vraiment. Les voisins l\'empêchent de dormir : ils mettent la musique jusqu\'à minuit.', best: true, note: 'no dejar + infinitif : naturel et oral.',
            then: [{ type: 'line', who: 'M', text: 'Eso lo explica todo. Un niño cansado no puede estar quieto.', tr: 'Ça explique tout. Un enfant fatigué ne peut pas rester tranquille.' }] },
          { text: 'No mucho. Los vecinos le impiden de dormir con la música.', tr: '(faute) Pas vraiment. Les voisins l\'empêchent de dormir avec la musique.', ok: false, note: 'Jamais « impedir de » : impedir dormir, ou impedir que duerma.',
            then: [{ type: 'line', who: 'M', text: 'Le impiden dormir, sin «de». Pero entiendo: eso lo explica todo.', tr: 'Ils l\'empêchent de dormir, sans « de ». Mais je comprends : ça explique tout.' }] },
          { text: 'No mucho, hay mucho ruido por la noche.', tr: 'Pas vraiment, il y a beaucoup de bruit la nuit.', note: 'Correct, mais tu pouvais employer no dejar ou impedir.',
            then: [{ type: 'line', who: 'M', text: 'Pues eso influye mucho.', tr: 'Eh bien, ça joue beaucoup.' }] },
        ] },
        { type: 'line', who: 'T', text: 'Encima, sus padres se mudan el mes que viene: con lo que han subido los alquileres, se van a un piso más pequeño.', tr: 'En plus, ses parents déménagent le mois prochain : avec la hausse des loyers, ils partent dans un appart plus petit.' },
        { type: 'q', prompt: '« Se mudan » veut dire…', opts: ['Ils changent', 'Ils déménagent', 'Ils muent'], ans: 1 },
        { type: 'line', who: 'M', text: 'Muchos cambios a la vez. Le pediré a la orientadora que hable con él. Y tú, dile que cuando se pone nervioso, me pida salir un momento.', tr: 'Beaucoup de changements d\'un coup. Je demanderai à la conseillère de lui parler. Et toi, dis-lui que quand il est nerveux, il me demande de sortir un moment.' },
        { type: 'q', prompt: 'Pourquoi « le pediré », et pas « le preguntaré » ?', opts: ['Parce qu\'elle pose une question', 'Parce qu\'elle demande une chose', 'Les deux se disent'], ans: 1 },
        { type: 'line', who: 'M', text: 'Y una última cosa: ¡que no gaste toda la paga en chuches! Ayer se comió una bolsa entera en el recreo.', tr: 'Et une dernière chose : qu\'il ne dépense pas tout son argent de poche en bonbons ! Hier, il a mangé un paquet entier à la récré.' },
        { type: 'line', who: 'T', text: 'Ja, ja. Eso lo tengo grabado en la mente. Gracias, Marta.', tr: 'Ha ha. Je l\'ai gravé dans la tête. Merci, Marta.' },
      ] },
);

STORIES.en.push(
    { id: 'plant', title: '🏭 Saving the plant', desc: 'Réunion de crise : l\'usine de Dayton risque de fermer. Ton collègue Mike veut tout arrêter.', level: 'C1',
      chars: { T: ['🧑', 'You'], K: ['🧔', 'Mike'] },
      steps: [
        { type: 'line', who: 'K', text: 'So, here\'s the deal: corporate wants to shut down the Dayton plant by next year.', tr: 'Bon, voilà la situation : la direction veut fermer l\'usine de Dayton d\'ici l\'an prochain.' },
        { type: 'q', prompt: 'Here, "plant" means…', opts: ['A green plant', 'A factory', 'A plan'], ans: 1 },
        { type: 'line', who: 'K', text: 'They say the facility is too old. Half the machines date back to when it was still a steel mill.', tr: 'Ils disent que le site est trop vieux. La moitié des machines datent de l\'époque où c\'était encore une aciérie.' },
        { type: 'choice', who: 'T', prompt: 'Tu veux dire que rien ne t\'empêchera de te battre pour l\'usine. Tu dis :', opts: [
          { text: 'Well, nothing\'s gonna stop me from fighting for that factory.', tr: 'Eh bien, rien ne m\'empêchera de me battre pour cette usine.', best: true, note: 'stop sb from + -ing : parfait, et « gonna » sonne naturel à l\'oral.',
            then: [{ type: 'line', who: 'K', text: 'I figured you\'d say that.', tr: 'Je me doutais que tu dirais ça.' }] },
          { text: 'Well, nothing will prevent me to fight for this usine.', tr: '(fautes) Eh bien, rien ne m\'empêchera de me battre pour cette usine.', ok: false, note: 'Deux fautes : prevent sb FROM doing (jamais « to fight »), et « usine » est français : factory ou plant.',
            then: [{ type: 'line', who: 'K', text: 'Prevent you FROM fighting, you mean. And it\'s a factory, not a "usine".', tr: 'T\'empêcher DE te battre, tu veux dire. Et c\'est une « factory », pas une « usine ».' }] },
          { text: 'I really want to keep the factory open.', tr: 'Je veux vraiment garder l\'usine ouverte.', note: 'Correct et clair, mais plus neutre : stop me from fighting avait plus de punch.',
            then: [{ type: 'line', who: 'K', text: 'Yeah, me too.', tr: 'Ouais, moi aussi.' }] },
        ] },
        { type: 'line', who: 'K', text: 'The problem is the competition. Their products are made in sweatshops overseas, so they\'re dirt cheap.', tr: 'Le problème, c\'est la concurrence. Leurs produits sont fabriqués dans des ateliers de misère à l\'étranger, alors ils sont super bon marché.' },
        { type: 'q', prompt: 'A "sweatshop" is…', opts: ['A gym', 'A factory where workers are exploited', 'A clothing store'], ans: 1 },
        { type: 'line', who: 'T', text: 'For some reason, nobody talks about that. Low wages don\'t deter big brands from buying there.', tr: 'Pour une raison ou une autre, personne n\'en parle. Les bas salaires ne dissuadent pas les grandes marques d\'acheter là-bas.' },
        { type: 'q', prompt: '"Deter sb from buying" means…', opts: ['Encourage them to buy', 'Discourage them from buying', 'Delay their purchase'], ans: 1 },
        { type: 'line', who: 'K', text: 'And now there\'s a strike. Honestly, it\'s gonna hinder production for weeks.', tr: 'Et maintenant, il y a une grève. Franchement, ça va freiner la production pendant des semaines.' },
        { type: 'choice', who: 'T', prompt: 'Tu veux soumettre une idée à Mike avant d\'en parler au patron. Tu dis :', opts: [
          { text: 'Let me run something by you before we talk to the boss.', tr: 'Laisse-moi te soumettre une idée avant qu\'on parle au patron.', best: true, note: 'run sth by sb = soumettre une idée : très naturel en réunion.',
            then: [{ type: 'line', who: 'K', text: 'Sure, shoot.', tr: 'Bien sûr, vas-y.' }] },
          { text: 'Let me run into you an idea before the boss.', tr: '(faute) Laisse-moi tomber sur toi une idée avant le patron.', ok: false, note: 'run into = tomber sur quelqu\'un. Soumettre une idée = run sth BY sb.',
            then: [{ type: 'line', who: 'K', text: 'Run it BY me, you mean? Run into is when you bump into someone. Go ahead.', tr: 'Me la soumettre, tu veux dire ? « Run into », c\'est quand tu tombes sur quelqu\'un. Vas-y.' }] },
          { text: 'I have an idea. Can I tell you?', tr: 'J\'ai une idée. Je peux te la dire ?', note: 'Correct, mais run sth by sb est l\'expression attendue.',
            then: [{ type: 'line', who: 'K', text: 'Go for it.', tr: 'Vas-y.' }] },
        ] },
        { type: 'line', who: 'T', text: 'We could leverage the old gas works next door. Turn it into a training center. That way, we\'d have the upper hand in the negotiation.', tr: 'On pourrait exploiter l\'ancienne usine à gaz d\'à côté. La transformer en centre de formation. Comme ça, on aurait l\'avantage dans la négociation.' },
        { type: 'q', prompt: '"Have the upper hand" means…', opts: ['Be in control / have the advantage', 'Raise your hand', 'Be the boss'], ans: 0 },
        { type: 'line', who: 'K', text: 'Hold on. I was under the impression the land had been sold. Doesn\'t that preclude any expansion?', tr: 'Attends. J\'avais l\'impression que le terrain avait été vendu. Ça ne rend pas toute extension impossible ?' },
        { type: 'q', prompt: '"Preclude" means…', opts: ['Make impossible', 'Make easier', 'Introduce'], ans: 0 },
        { type: 'line', who: 'T', text: 'That\'s where it gets tricky. The sale fell through last month, but corporate tried to keep us from finding out.', tr: 'C\'est là que ça se complique. La vente est tombée à l\'eau le mois dernier, mais la direction a essayé de nous empêcher de l\'apprendre.' },
        { type: 'line', who: 'K', text: 'No way. So they hatched a plan to close us down quietly… and we can thwart it.', tr: 'Sans blague. Donc ils ont monté un plan pour nous fermer discrètement… et on peut le déjouer.' },
        { type: 'q', prompt: '"Thwart a plan" means…', opts: ['Support it', 'Stop it from succeeding', 'Write it down'], ans: 1 },
        { type: 'line', who: 'K', text: 'The boss is gonna be mad. I\'ll probably get an earful. But if he won\'t budge, we go to the union.', tr: 'Le patron va être furieux. Je vais sûrement me faire passer un savon. Mais s\'il ne cède pas, on va voir le syndicat.' },
        { type: 'line', who: 'T', text: 'Deal. Can you help out with the numbers tonight? I\'ll grab some grub for both of us.', tr: 'Marché conclu. Tu peux m\'aider avec les chiffres ce soir ? Je prends à manger pour nous deux.' },
        { type: 'q', prompt: '"Grab some grub" means…', opts: ['Get some food', 'Clean the office', 'Grab a coffee'], ans: 0 },
      ] },

    { id: 'roadtrip', title: '🚗 The long drive home', desc: 'Retour de week-end en voiture avec Jess. Sur la route, tout dérape un peu.', level: 'B2',
      chars: { T: ['🧑', 'You'], J: ['👩', 'Jess'] },
      steps: [
        { type: 'line', who: 'J', text: 'Wake up! You nodded off for like twenty minutes. Some co-pilot you are.', tr: 'Réveille-toi ! Tu t\'es assoupi genre vingt minutes. Super copilote.' },
        { type: 'q', prompt: '"Nod off" means…', opts: ['Agree', 'Fall asleep', 'Leave'], ans: 1 },
        { type: 'choice', who: 'T', prompt: 'Tu veux savoir ce qui s\'est passé pendant ton sommeil. Tu dis :', opts: [
          { text: 'Sorry! What went down while I was out?', tr: 'Désolé ! Qu\'est-ce qui s\'est passé pendant que je dormais ?', best: true, note: 'What went down? = qu\'est-ce qui s\'est passé ? Très oral, très naturel.',
            then: [{ type: 'line', who: 'J', text: 'Oh, not much. Just a dog wandering off in the middle of the highway.', tr: 'Oh, pas grand-chose. Juste un chien qui se baladait au milieu de l\'autoroute.' }] },
          { text: 'Sorry! What did go down when I slept?', tr: '(maladroit) Désolé ! Qu\'est-ce qui est descendu quand je dormais ?', ok: false, note: 'Pas de « did » dans une question sur le sujet : what went down? Et « while I was out » est plus naturel.',
            then: [{ type: 'line', who: 'J', text: 'What went down, you mean? A dog wandering off in the middle of the highway.', tr: 'Ce qui s\'est passé, tu veux dire ? Un chien qui se baladait au milieu de l\'autoroute.' }] },
          { text: 'Sorry! What happened?', tr: 'Désolé ! Qu\'est-ce qui s\'est passé ?', note: 'Correct et neutre ; what went down sonne plus américain.',
            then: [{ type: 'line', who: 'J', text: 'A dog wandering off in the middle of the highway.', tr: 'Un chien qui se baladait au milieu de l\'autoroute.' }] },
        ] },
        { type: 'q', prompt: '"Wander off" means…', opts: ['Go away without a goal, get lost', 'Run fast', 'Wonder about something'], ans: 0 },
        { type: 'line', who: 'J', text: 'It wouldn\'t budge. I had to honk like crazy. For some reason, it just sat there sniffing the asphalt.', tr: 'Il ne voulait pas bouger. J\'ai dû klaxonner comme une folle. Pour une raison ou une autre, il restait là à renifler le bitume.' },
        { type: 'q', prompt: '"It wouldn\'t budge" means…', opts: ['It didn\'t move', 'It didn\'t bark', 'It didn\'t eat'], ans: 0 },
        { type: 'line', who: 'T', text: 'Hold on, is that smoke coming out of the hood?', tr: 'Attends, c\'est de la fumée qui sort du capot ?' },
        { type: 'line', who: 'J', text: 'Great. I was under the impression this car had just been serviced.', tr: 'Génial. J\'avais l\'impression que cette voiture venait d\'être révisée.' },
        { type: 'choice', who: 'T', prompt: 'Tu proposes de demander un devis au garage le plus proche. Tu dis :', opts: [
          { text: 'Let\'s pull over and get a quote from the next garage.', tr: 'Arrêtons-nous et demandons un devis au prochain garage.', best: true, note: 'a quote = un devis : le bon mot.',
            then: [{ type: 'line', who: 'J', text: 'Good call. There\'s one at the next exit.', tr: 'Bonne idée. Il y en a un à la prochaine sortie.' }] },
          { text: 'Let\'s stop and ask a devis to the next garage.', tr: '(calque) Arrêtons-nous et demandons un devis au prochain garage.', ok: false, note: '« Devis » est français : a quote ou an estimate. Et on « get » un devis, on ne le « ask to ».',
            then: [{ type: 'line', who: 'J', text: 'A quote, you mean? Yeah, there\'s a garage at the next exit.', tr: 'Un devis, tu veux dire ? Ouais, il y a un garage à la prochaine sortie.' }] },
          { text: 'Let\'s find a mechanic.', tr: 'Trouvons un mécano.', note: 'Correct, mais a quote était le mot de la semaine dernière.',
            then: [{ type: 'line', who: 'J', text: 'Yeah, next exit.', tr: 'Ouais, prochaine sortie.' }] },
        ] },
        { type: 'line', who: 'J', text: 'The mechanic says it\'ll take two hours. Things just got tricky.', tr: 'Le mécano dit que ça prendra deux heures. Ça vient de se compliquer.' },
        { type: 'line', who: 'T', text: 'Let\'s make our way to that diner across the street. I\'m starving. I need some grub.', tr: 'Allons jusqu\'au resto en face. Je meurs de faim. J\'ai besoin de bouffe.' },
        { type: 'q', prompt: '"Make one\'s way to" means…', opts: ['Build a road', 'Go to, head to', 'Find a solution'], ans: 1 },
        { type: 'line', who: 'J', text: 'Look at that guy at the counter, chewing on a toothpick like a cowboy. He\'s been staring at us.', tr: 'Regarde ce type au comptoir, il mâchouille un cure-dent comme un cow-boy. Il nous fixe depuis tout à l\'heure.' },
        { type: 'line', who: 'T', text: 'Relax. He\'s probably just the owner. Hey, can you drop me off at my place when we get back? I\'ll help out with the gas money.', tr: 'Détends-toi. C\'est sûrement le patron. Dis, tu peux me déposer chez moi en rentrant ? Je participe à l\'essence.' },
        { type: 'q', prompt: '"Drop sb off" means…', opts: ['Abandon someone', 'Drive someone somewhere and leave them there', 'Make someone fall'], ans: 1 },
        { type: 'line', who: 'J', text: 'Deal. But next time, you drive. You can\'t nod off at the wheel.', tr: 'Ça marche. Mais la prochaine fois, c\'est toi qui conduis. Tu ne pourras pas t\'endormir au volant.' },
      ] },
);
let story = null;
function openStories(lang) {
  lang = lang || currentLang || 'es';
  showScreen('screen-stories');
  const list = STORIES[lang] || [];
  const done = crsJ('stories_done', []);
  document.getElementById('stories-body').innerHTML = `<div class="pg-title">📖 Stories · ${CRS_META[lang].name}</div>
    ${list.length === 0 ? '<div class="tipbox">Pas encore de stories pour cette langue.</div>' : ''}
    ${list.map(s => `<div class="story-card" onclick="storyPlay('${lang}','${s.id}')">
      <div class="st-title">${s.title} ${done.includes(lang+'_'+s.id) ? '✅' : ''}</div>
      <div class="st-desc">${s.desc} · ${s.level}</div>
    </div>`).join('')}`;
}
function storyPlay(lang, id) {
  const s = (STORIES[lang] || []).find(x => x.id === id);
  if(!s) return;
  // steps est une copie : les embranchements (type 'choice') y insèrent leur suite au fil des réponses
  story = { lang, id, data: s, steps: s.steps.slice(), step: 0, correct: 0, total: s.steps.filter(x => x.type === 'q' || x.type === 'choice').length };
  showScreen('screen-story-play');
  document.getElementById('story-play-title').textContent = s.title;
  document.getElementById('story-play-body').innerHTML = '';
  dgStartSession(lang);
  storyShowStep();
}
function storyShowStep() {
  if(!story || story.step >= story.steps.length) return storyEnd();
  const s = story.steps[story.step], body = document.getElementById('story-play-body');
  const btn = document.getElementById('story-next-btn');
  if(s.type === 'line') {
    const ch = story.data.chars[s.who];
    const isRight = s.who === Object.keys(story.data.chars)[1] || Object.keys(story.data.chars).length === 1;
    body.insertAdjacentHTML('beforeend', `<div class="story-bubble${isRight ? '' : ' right'}">
      <div class="story-ava">${ch[0]}</div>
      <div class="story-msg"><b>${ch[1]}</b><br>${crsEsc(s.text)}<br><small style="color:var(--muted)">${crsEsc(s.tr)}</small></div>
    </div>`);
    if(CRS_META[story.lang].tts) crsSpeak(story.lang, s.text);
    btn.textContent = 'Continuer';
    btn.disabled = false;
    btn.style.display = '';
    body.scrollTop = body.scrollHeight;
  } else if(s.type === 'q') {
    body.insertAdjacentHTML('beforeend', `<div class="story-q" id="sq-${story.step}">
      <div class="sq-prompt">${crsEsc(s.prompt)}</div>
      <div class="opts">${s.opts.map((o, i) => `<button class="opt" onclick="storyAnswer(${story.step},${i})">${crsEsc(o)}</button>`).join('')}</div>
    </div>`);
    btn.style.display = 'none';
    body.scrollTop = body.scrollHeight;
  } else if(s.type === 'choice') {
    // Embranchement : tu choisis ta réplique, l'histoire continue selon ton choix
    body.insertAdjacentHTML('beforeend', `<div class="story-q" id="sq-${story.step}">
      <div class="sq-prompt">💬 ${crsEsc(s.prompt || 'Que réponds-tu ?')}</div>
      <div class="opts">${s.opts.map((o, i) => `<button class="opt" style="text-align:left" onclick="storyChoose(${story.step},${i})">${crsEsc(o.text)}</button>`).join('')}</div>
    </div>`);
    btn.style.display = 'none';
    body.scrollTop = body.scrollHeight;
  }
}
function storyChoose(step, idx) {
  const s = story.steps[step], q = document.getElementById('sq-' + step);
  if(!q || q.dataset.answered) return;
  q.dataset.answered = '1';
  const o = s.opts[idx], good = o.ok !== false, body = document.getElementById('story-play-body');
  q.querySelectorAll('.opt').forEach((b, i) => { b.disabled = true; if(i === idx) b.classList.add(good ? 'good' : 'bad'); else if(!good && s.opts[i].best) b.classList.add('good'); });
  if(good) { story.correct++; try { haptic('light'); } catch(e) {} }
  const ch = story.data.chars[s.who] || ['🧑', 'Toi'];
  const isRight = s.who === Object.keys(story.data.chars)[1] || Object.keys(story.data.chars).length === 1;
  const tag = o.best ? '✅ Le plus naturel' : good ? '👍 Correct' : '⚠️ À éviter';
  body.insertAdjacentHTML('beforeend', `<div class="story-bubble${isRight ? '' : ' right'}">
      <div class="story-ava">${ch[0]}</div>
      <div class="story-msg"><b>${ch[1]}</b><br>${crsEsc(o.text)}<br><small style="color:var(--muted)">${crsEsc(o.tr || '')}</small></div>
    </div>
    <div class="tipbox" style="margin:.4rem 0 .8rem"><b>${tag}</b>${o.note ? ' · ' + crsEsc(o.note) : ''}</div>`);
  if(CRS_META[story.lang].tts && good) crsSpeak(story.lang, o.text); // on ne fait pas prononcer une réplique fautive
  if(o.then && o.then.length) story.steps.splice(step + 1, 0, ...o.then);
  const btn = document.getElementById('story-next-btn');
  btn.style.display = ''; btn.disabled = false; btn.textContent = 'Continuer';
  body.scrollTop = body.scrollHeight;
}
function storyAnswer(step, idx) {
  const s = story.steps[step], q = document.getElementById('sq-' + step);
  if(!q || q.dataset.answered) return;
  q.dataset.answered = '1';
  const btns = q.querySelectorAll('.opt');
  const good = idx === s.ans;
  btns.forEach((b, i) => { if(i === s.ans) b.classList.add('good'); else if(i === idx) b.classList.add('bad'); b.disabled = true; });
  if(good) { story.correct++; try { haptic('light'); } catch(e) {} }
  const btn = document.getElementById('story-next-btn');
  btn.style.display = ''; btn.disabled = false; btn.textContent = 'Continuer';
}
function storyNext() {
  if(!story) return;
  story.step++;
  storyShowStep();
}
function storyEnd() {
  dgEndSession();
  const pct = story.total ? Math.round(100 * story.correct / story.total) : 100;
  const xp = 10 + story.correct * 5;
  crsAddLangXP(story.lang, xp);
  if(rpg) { rpgGainXP(xp); rpgSave(); }
  const done = crsJ('stories_done', []);
  const key = story.lang + '_' + story.id;
  if(!done.includes(key)) { done.push(key); crsSetJ('stories_done', done); }
  document.getElementById('story-play-body').insertAdjacentHTML('beforeend', `<div class="res" style="margin-top:1rem">
    <div style="font-size:3rem">📖</div><div class="rt">Story terminée !</div>
    <div class="res-tiles">
      <div class="res-tile" style="border-color:#58cc02"><div class="rh" style="background:#58cc02">Score</div><div class="rv">${story.correct}/${story.total}</div></div>
      <div class="res-tile" style="border-color:#ffc800"><div class="rh" style="background:#ffc800">XP</div><div class="rv">+${xp}</div></div>
    </div>
  </div>`);
  document.getElementById('story-next-btn').textContent = 'Retour aux stories';
  document.getElementById('story-next-btn').onclick = () => openStories(story.lang);
  document.getElementById('story-next-btn').style.display = '';
  badgeCheck();
}
function storyQuit() { dgEndSession(); story = null; openStories(currentLang); }

crsMergeAdded(); // mots appris dans le parcours → decks (avant les migrations SRS)
