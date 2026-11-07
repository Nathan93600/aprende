// ¡Aprende! — Main application
// Course data is loaded from courses/es.js, courses/ln.js, courses/en.js

// ═══════════════════════════════════════════════
// AUTO-HYDRATE — disabled (data now comes from Firestore via sync.js)
// ═══════════════════════════════════════════════
/* EMBEDDED_PROGRESS — hydrate ONLY when Firestore has no data for this user */
function hydrateFromBackup() {
  const EMBEDDED_PROGRESS = {"version":2,"exported_at":"2026-11-06T18:47:51.938Z","app":"aprende","srs_data":{"en:grounded":{"ef":2.5,"interval":70,"reps":4,"due":1799793873025,"lang":"en","st":"review","s":72.03994012267984,"d":4.996,"lr":1793745873025,"lapses":0,"step":null,"fr":"Cloué au sol / Puni (enfant) / Terre-à-terre","word":"grounded"},"en:to be off the hook":{"ef":2.5,"interval":46,"reps":3,"due":1797720261463,"lang":"en","st":"review","s":48.701565636662444,"d":4.996,"lr":1793745861463,"lapses":0,"step":null,"fr":"fig. Être tiré d'affaire / S'en tirer","word":"to be off the hook"},"en:hook":{"ef":2.5,"interval":47,"reps":3,"due":1797838128900,"lang":"en","st":"review","s":47.166140836995005,"d":4.996,"lr":1793777328900,"lapses":0,"step":null,"fr":"Crochet / Hameçon","word":"hook"},"en:hold (verb)":{"ef":2.5,"interval":52,"reps":3,"due":1798270155009,"lang":"en","st":"review","s":48.94037204301335,"d":4.996,"lr":1793777355009,"lapses":0,"step":null,"fr":"Tenir / Garder / Contenir","word":"hold (verb)"},"en:hold on":{"ef":2.5,"interval":45,"reps":3,"due":1797665437669,"lang":"en","st":"review","s":48.94065283565189,"d":4.996,"lr":1793777437669,"lapses":0,"step":null,"fr":"Attendre / Tenir bon / Ne pas quitter (tel.)","word":"hold on"},"en:bereaved":{"ef":2.5,"interval":46,"reps":3,"due":1797751684890,"lang":"en","st":"review","s":48.93974522524114,"d":4.996,"lr":1793777284890,"lapses":0,"step":null,"fr":"Endeuillé / En deuil (adj.)","word":"bereaved"},"en:meticulous":{"ef":2.5,"interval":51,"reps":3,"due":1798183715716,"lang":"en","st":"review","s":48.94124362047217,"d":4.996,"lr":1793777315716,"lapses":0,"step":null,"fr":"Méticuleux / Minutieux / Pointilleux","word":"meticulous"},"en:to corner":{"ef":2.5,"interval":50,"reps":3,"due":1798097388181,"lang":"en","st":"review","s":48.94060238991031,"d":4.996,"lr":1793777388181,"lapses":0,"step":null,"fr":"litt. Coincer / fig. Acculer / Piéger / Mettre au pied du mur","word":"to corner"},"en:to impeach":{"ef":2.0500000000000003,"interval":3,"reps":5,"due":1794249107697,"lang":"en","st":"review","s":3.071256858524687,"d":8.824900492973798,"lr":1793989907697,"lapses":1,"step":null,"fr":"Destituer / Mettre en accusation (haut fonctionnaire)","word":"to impeach"},"en:a fine":{"ef":2.5,"interval":3,"reps":5,"due":1794249235490,"lang":"en","st":"review","s":4.34123682333461,"d":8.332846279533998,"lr":1793990035490,"lapses":1,"step":null,"fr":"Amende / Contravention","word":"a fine"},"en:fine print":{"ef":2.0500000000000003,"interval":20,"reps":3,"due":1795505297074,"lang":"en","st":"review","s":18.18183556268622,"d":6.4944999999999995,"lr":1793777297074,"lapses":0,"step":null,"fr":"Petits caractères (contrat)","word":"fine print"},"en:scorched":{"ef":2.35,"interval":27,"reps":3,"due":1796110113237,"lang":"en","st":"review","s":27.149998385871566,"d":5.495500000000001,"lr":1793777313237,"lapses":0,"step":null,"fr":"Brûlé / Carbonisé / Roussi","word":"scorched"},"ln:Kasi":{"ef":2.35,"interval":43,"reps":4,"due":1797460315015,"lang":"ln","st":"review","s":41.30844374092461,"d":5.495500000000001,"lr":1793745115015,"lapses":0,"step":null,"fr":"Mais / Cependant","word":"Kasi"},"ln:Na":{"ef":2.65,"interval":12,"reps":2,"due":1792393236077,"lang":"ln","st":"review","s":12,"d":4.5,"lr":1791356436077,"lapses":0,"step":null,"fr":"À / Avec / Dans / De (préposition polyvalente)","word":"Na"},"ln:Kozua / Kozwa":{"ef":2.2,"interval":3,"reps":2,"due":1791700530445,"lang":"ln","st":"review","s":3,"d":5.999999999999999,"lr":1791441330445,"lapses":0,"step":null,"fr":"Prendre / Obtenir / Recevoir / Attraper","word":"Kozua / Kozwa"},"ln:Libanda ya mpepo":{"ef":2.2,"interval":1,"reps":1,"due":1791442833693,"lang":"ln","st":"review","s":1,"d":5.999999999999999,"lr":1791356433693,"lapses":0,"step":null,"fr":"Aéroport (litt. extérieur de l'avion)","word":"Libanda ya mpepo"},"ln:Pamba":{"ef":2.35,"interval":0,"reps":0,"due":1791364100683,"lang":"ln","st":"new","fr":"Pour rien / En vain / Inutilement","word":"Pamba"},"ln:Mobimba":{"ef":2.2,"interval":3,"reps":1,"due":1791700740832,"lang":"ln","st":"review","s":3,"d":5.999999999999999,"lr":1791441540832,"lapses":0,"step":null,"fr":"Tout entier, complet","word":"Mobimba"},"ln:Bissembo":{"ef":2.35,"interval":0,"reps":0,"due":1791441348731,"lang":"ln","st":"new","fr":"Justice / Équité","word":"Bissembo"},"ln:Kokutana":{"ef":2.35,"interval":0,"reps":0,"due":1791356502250,"lang":"ln","st":"new","fr":"Se rencontrer / Se trouver","word":"Kokutana"},"ln:Batu / Motu":{"ef":2.2,"interval":1,"reps":1,"due":1791450537053,"lang":"ln","st":"review","s":1,"d":5.999999999999999,"lr":1791364137053,"lapses":0,"step":null,"fr":"Personne / Gens / Individu","word":"Batu / Motu"},"ln:Moko":{"ef":2.35,"interval":3,"reps":2,"due":1791581174326,"lang":"ln","st":"review","s":3,"d":5.5,"lr":1791321974326,"lapses":0,"step":null,"fr":"Un / Seul / Unique","word":"Moko"},"ln:Sikoyo":{"ef":2.35,"interval":3,"reps":1,"due":1791699066080,"lang":"ln","st":"review","s":3,"d":5.5,"lr":1791439866080,"lapses":0,"step":null,"fr":"Maintenant","word":"Sikoyo"},"ln:Kofuta":{"ef":2.65,"interval":18,"reps":2,"due":1792911771471,"lang":"ln","st":"review","s":18,"d":4.5,"lr":1791356571471,"lapses":0,"step":null,"fr":"Payer / Compenser / Récompenser","word":"Kofuta"},"ln:Komesana":{"ef":2.2,"interval":1,"reps":1,"due":1791450521352,"lang":"ln","st":"review","s":1,"d":5.999999999999999,"lr":1791364121352,"lapses":0,"step":null,"fr":"S'habituer","word":"Komesana"},"ln:Kobika":{"ef":2.35,"interval":1,"reps":1,"due":1790754420990,"lang":"ln","st":"review","s":1,"d":5.5,"lr":1790668020990,"lapses":0,"step":null,"fr":"Être sauvé / Guérir / Survivre","word":"Kobika"},"ln:Yoka":{"ef":2.65,"interval":18,"reps":2,"due":1792911758601,"lang":"ln","st":"review","s":18,"d":4.5,"lr":1791356558601,"lapses":0,"step":null,"fr":"Écouter / Entendre","word":"Yoka"},"ln:Kotonga / Tonga":{"ef":2.35,"interval":0,"reps":0,"due":1791441378166,"lang":"ln","st":"new","fr":"Coudre / Construire / Bâtir / Tresser (ton bas)","word":"Kotonga / Tonga"},"ln:Zemi":{"ef":2.2,"interval":11,"reps":2,"due":1794695502183,"lang":"ln","st":"review","s":13.255830900738122,"d":5.994999999999999,"lr":1793745102183,"lapses":0,"step":null,"fr":"Grossesse / Femme enceinte","word":"Zemi"},"ln:Kotanga":{"ef":2.35,"interval":3,"reps":2,"due":1791615643694,"lang":"ln","st":"review","s":3,"d":5.5,"lr":1791356443694,"lapses":0,"step":null,"fr":"Lire / Compter / Étudier","word":"Kotanga"},"ln:Kokuta":{"ef":2.35,"interval":0,"reps":0,"due":1791439875347,"lang":"ln","st":"new","fr":"Trouver","word":"Kokuta"},"ln:Zua":{"ef":2.35,"interval":5,"reps":2,"due":1791796106550,"lang":"ln","st":"review","s":5,"d":5.5,"lr":1791364106550,"lapses":0,"step":null,"fr":"Prendre / Attraper","word":"Zua"},"ln:Na libanda":{"ef":2.2,"interval":1,"reps":1,"due":1791527762815,"lang":"ln","st":"review","s":1,"d":5.999999999999999,"lr":1791441362815,"lapses":0,"step":null,"fr":"Dehors (préposition)","word":"Na libanda"},"ln:Likambo / Makambo":{"ef":2.2,"interval":3,"reps":2,"due":1791699069796,"lang":"ln","st":"review","s":3,"d":5.999999999999999,"lr":1791439869796,"lapses":0,"step":null,"fr":"Affaire / Problème / Cas / Conflit","word":"Likambo / Makambo"},"ln:Kolimbisa":{"ef":2.2,"interval":0,"reps":3,"due":1793745710150,"lang":"ln","st":"relearning","s":0.9515424188179944,"d":8.6762272,"lr":1793745110150,"lapses":1,"step":0,"fr":"Pardonner","word":"Kolimbisa"},"ln:Kobwaka":{"ef":2.65,"interval":18,"reps":2,"due":1792911653446,"lang":"ln","st":"review","s":18,"d":4.5,"lr":1791356453446,"lapses":0,"step":null,"fr":"Jeter / Abandonner / Rejeter","word":"Kobwaka"},"ln:Mokomi":{"ef":2.35,"interval":0,"reps":0,"due":1791439956090,"lang":"ln","st":"new","fr":"Écrivain / Auteur","word":"Mokomi"},"ln:Kosomba":{"ef":2.8,"interval":28,"reps":2,"due":1793859106318,"lang":"ln","st":"review","s":28,"d":4.000000000000001,"lr":1791439906318,"lapses":0,"step":null,"fr":"Acheter","word":"Kosomba"},"ln:Liputa / Maputa":{"ef":2.5,"interval":8,"reps":2,"due":1792132557198,"lang":"ln","st":"review","s":8,"d":5,"lr":1791441357198,"lapses":0,"step":null,"fr":"Pagne / Tissu africain","word":"Liputa / Maputa"},"ln:Pe":{"ef":2.35,"interval":0,"reps":0,"due":1791439937336,"lang":"ln","st":"new","fr":"Aussi / Et / De même","word":"Pe"},"ln:Kotia":{"ef":2.35,"interval":1,"reps":1,"due":1791450480947,"lang":"ln","st":"review","s":1,"d":5.5,"lr":1791364080947,"lapses":0,"step":null,"fr":"Mettre / Poser / Enfiler (vêtement)","word":"Kotia"},"ln:Kobaka":{"ef":2.35,"interval":1,"reps":1,"due":1790755167647,"lang":"ln","st":"review","s":1,"d":5.5,"lr":1790668767647,"lapses":0,"step":null,"fr":"Poser / Percher (ton bas)","word":"Kobaka"},"ln:Kosaka":{"ef":2.35,"interval":0,"reps":2,"due":1793745719131,"lang":"ln","st":"relearning","s":0.5374702453339547,"d":8.5118806,"lr":1793745119131,"lapses":1,"step":0,"fr":"Tromper / Avoir par la ruse","word":"Kosaka"},"ln:Kokòma":{"ef":2.35,"interval":0,"reps":0,"due":1791441366249,"lang":"ln","st":"new","fr":"Écrire (ton bas, homophone !)","word":"Kokòma"},"ln:Mokolo":{"ef":2.35,"interval":0,"reps":0,"due":1791439919469,"lang":"ln","st":"new","fr":"Jour / Adulte / Ancien","word":"Mokolo"},"ln:Motema / Mitema":{"ef":2.2,"interval":3,"reps":2,"due":1791700539396,"lang":"ln","st":"review","s":3,"d":5.999999999999999,"lr":1791441339396,"lapses":0,"step":null,"fr":"Cœur / Force de caractère","word":"Motema / Mitema"},"ln:Ngunda":{"ef":2.35,"interval":0,"reps":0,"due":1791439885264,"lang":"ln","st":"new","fr":"Asile / Refuge / Exil (argot)","word":"Ngunda"},"ln:Elongo":{"ef":2.35,"interval":0,"reps":0,"due":1791441353681,"lang":"ln","st":"new","fr":"Ensemble / En même temps","word":"Elongo"},"ln:Libándá":{"ef":2.35,"interval":3,"reps":1,"due":1791615697934,"lang":"ln","st":"review","s":3,"d":5.5,"lr":1791356497934,"lapses":0,"step":null,"fr":"Dehors / Extérieur","word":"Libándá"},"ln:Kati / Katikati":{"ef":2.35,"interval":0,"reps":0,"due":1791364131036,"lang":"ln","st":"new","fr":"À l'intérieur / Entre / Au milieu / Centre","word":"Kati / Katikati"},"ln:Nasepeli":{"ef":2.35,"interval":0,"reps":2,"due":1793745706480,"lang":"ln","st":"relearning","s":0.5154390084423578,"d":8.5118806,"lr":1793745106480,"lapses":1,"step":0,"fr":"Je suis content(e) / J'apprécie","word":"Nasepeli"},"ln:Kosepela":{"ef":2.35,"interval":1,"reps":1,"due":1790835445162,"lang":"ln","st":"review","s":1,"d":5.5,"lr":1790749045162,"lapses":0,"step":null,"fr":"Se réjouir / Être content","word":"Kosepela"},"ln:Kutu":{"ef":2.35,"interval":0,"reps":0,"due":1791439997262,"lang":"ln","st":"new","fr":"De plus / En plus / D'ailleurs","word":"Kutu"},"ln:Kosola":{"ef":2.35,"interval":0,"reps":0,"due":1790887493464,"lang":"ln","st":"new","fr":"Tousser","word":"Kosola"},"ln:Makasi":{"ef":2.5,"interval":8,"reps":2,"due":1792047905329,"lang":"ln","st":"review","s":8,"d":5,"lr":1791356705329,"lapses":0,"step":null,"fr":"Fort / Puissant / Beaucoup (intensificateur)","word":"Makasi"},"es:de ninguna manera":{"ef":1.7500000000000004,"interval":17,"reps":3,"due":1794642075054,"lang":"es","st":"review","s":18.905143052597126,"d":7.487006499999999,"lr":1793173275054,"lapses":0,"step":null,"fr":"En aucune façon / Pas du tout","word":"de ninguna manera"},"es:Parecido":{"ef":2.5,"interval":35,"reps":3,"due":1795449780242,"lang":"es","st":"review","s":35.62439838505825,"d":4.996,"lr":1792425780242,"lapses":0,"step":null,"fr":"Semblable","word":"Parecido"},"es:cruzar":{"ef":2.35,"interval":31,"reps":4,"due":1795104166064,"lang":"es","st":"review","s":28.92854869167978,"d":5.495500000000001,"lr":1792425766064,"lapses":0,"step":null,"fr":"Traverser / Croiser","word":"cruzar"},"es:amañado":{"ef":2.35,"interval":27,"reps":4,"due":1794758604907,"lang":"es","st":"review","s":28.931308899649736,"d":5.495500000000001,"lr":1792425804907,"lapses":0,"step":null,"fr":"Truqué","word":"amañado"},"es:dañino":{"ef":2.2,"interval":3,"reps":6,"due":1794158637170,"lang":"es","st":"review","s":4.115731029919317,"d":8.659242241115733,"lr":1793899437170,"lapses":1,"step":null,"fr":"Nocif / Nuisible / Néfaste","word":"dañino"},"es:agacharse":{"ef":2.35,"interval":1,"reps":10,"due":1794063371740,"lang":"es","st":"review","s":0.3608047449106335,"d":9.866028051125555,"lr":1793976971740,"lapses":3,"step":null,"fr":"S'accroupir / Se baisser","word":"agacharse"},"es:Proyecto":{"ef":2.65,"interval":59,"reps":3,"due":1798270966677,"lang":"es","st":"review","s":60.050937888784034,"d":4.4965,"lr":1793173366677,"lapses":0,"step":null,"fr":"Projet","word":"Proyecto"},"es:pegar":{"ef":2.35,"interval":33,"reps":4,"due":1795265867626,"lang":"es","st":"review","s":31.408974534262462,"d":5.495500000000001,"lr":1792414667626,"lapses":0,"step":null,"fr":"Frapper / Coller / Attraper (maladie) / Être assorti","word":"pegar"},"es:Adelanto":{"ef":2.35,"interval":24,"reps":3,"due":1794499505787,"lang":"es","st":"review","s":27.34642175903387,"d":5.495500000000001,"lr":1792425905787,"lapses":0,"step":null,"fr":"Avance","word":"Adelanto"},"es:Cupo":{"ef":2.35,"interval":31,"reps":4,"due":1796324321742,"lang":"es","st":"review","s":33.00150248025402,"d":6.997686609700001,"lr":1793645921742,"lapses":0,"step":null,"fr":"Quota","word":"Cupo"},"es:echar":{"ef":2.2,"interval":2,"reps":4,"due":1793952115516,"lang":"es","st":"review","s":1.8507705418574978,"d":8.666909150266,"lr":1793779315516,"lapses":1,"step":null,"fr":"Chasser / Virer / Jeter / Mettre / Verser","word":"echar"},"es:buitre":{"ef":2.0500000000000003,"interval":20,"reps":2,"due":1794142660037,"lang":"es","st":"review","s":16.980289575613778,"d":6.4944999999999995,"lr":1792414660037,"lapses":0,"step":null,"fr":"Vautour (litt. et fig. profiteur, charognard)","word":"buitre"},"es:anciano":{"ef":2.35,"interval":18,"reps":3,"due":1793986169474,"lang":"es","st":"review","s":20.47361487774585,"d":5.495500000000001,"lr":1792430969474,"lapses":0,"step":null,"fr":"Personne âgée / Vieillard (respectueux)","word":"anciano"},"es:personas mayores":{"ef":2.65,"interval":45,"reps":3,"due":1796319032542,"lang":"es","st":"review","s":44.41782401818729,"d":4.4965,"lr":1792431032542,"lapses":0,"step":null,"fr":"Personnes âgées (registre poli)","word":"personas mayores"},"es:los que":{"ef":2.0500000000000003,"interval":18,"reps":5,"due":1793986288914,"lang":"es","st":"review","s":18.86635665033995,"d":6.4944999999999995,"lr":1792431088914,"lapses":0,"step":null,"fr":"Ceux qui","word":"los que"},"es:asistir":{"ef":2.65,"interval":99,"reps":3,"due":1801730126745,"lang":"es","st":"review","s":99.46086387419933,"d":2.6531562999999996,"lr":1793176526745,"lapses":0,"step":null,"fr":"Assister à / Être présent / Aider","word":"asistir"},"es:asistencia":{"ef":2.65,"interval":94,"reps":3,"due":1801295083260,"lang":"es","st":"review","s":99.3645134937175,"d":2.6531562999999996,"lr":1793173483260,"lapses":0,"step":null,"fr":"Assistance / Présence / Aide / Passe décisive (foot)","word":"asistencia"},"es:dañar":{"ef":2.2,"interval":21,"reps":2,"due":1794229057343,"lang":"es","st":"review","s":18.77515422069054,"d":5.994999999999999,"lr":1792414657343,"lapses":0,"step":null,"fr":"Endommager / Faire du mal / Abîmer","word":"dañar"},"es:hacer daño":{"ef":2.5,"interval":36,"reps":3,"due":1795536275979,"lang":"es","st":"review","s":33.089929780499716,"d":4.996,"lr":1792425875979,"lapses":0,"step":null,"fr":"Faire mal / Causer du tort","word":"hacer daño"},"es:hacerse daño":{"ef":2.5,"interval":35,"reps":3,"due":1795455174003,"lang":"es","st":"review","s":33.171816368426946,"d":4.996,"lr":1792431174003,"lapses":0,"step":null,"fr":"Se faire mal / Se blesser","word":"hacerse daño"},"es:salga":{"ef":2.5,"interval":33,"reps":3,"due":1795266285338,"lang":"es","st":"review","s":35.4848581408621,"d":4.996,"lr":1792415085338,"lapses":0,"step":null,"fr":"Que je sorte / Qu'il sorte (subj. de salir)","word":"salga"},"es:bastante":{"ef":2.5,"interval":35,"reps":3,"due":1795449772727,"lang":"es","st":"review","s":33.09413538898308,"d":4.996,"lr":1792425772727,"lapses":0,"step":null,"fr":"Assez / Pas mal / Suffisamment","word":"bastante"},"es:vuelta":{"ef":2.35,"interval":35,"reps":4,"due":1795438694917,"lang":"es","st":"review","s":30.836043811950614,"d":5.495500000000001,"lr":1792414694917,"lapses":0,"step":null,"fr":"Tour / Retour / Virage / Monnaie rendue","word":"vuelta"},"es:dar la vuelta":{"ef":2.0500000000000003,"interval":19,"reps":3,"due":1794072789462,"lang":"es","st":"review","s":17.08527681851026,"d":6.4944999999999995,"lr":1792431189462,"lapses":0,"step":null,"fr":"Faire le tour / Retourner qqch","word":"dar la vuelta"},"es:volver a":{"ef":2.5,"interval":40,"reps":3,"due":1795886902946,"lang":"es","st":"review","s":35.691189178377044,"d":4.996,"lr":1792430902946,"lapses":0,"step":null,"fr":"Refaire / Re- (+ infinitif)","word":"volver a"},"es:descartar":{"ef":2.5,"interval":10,"reps":6,"due":1794037256811,"lang":"es","st":"review","s":8.583328262322345,"d":8.325513433254462,"lr":1793173256811,"lapses":1,"step":null,"fr":"Écarter / Rejeter / Éliminer / Exclure","word":"descartar"},"es:descartado":{"ef":2.5,"interval":32,"reps":3,"due":1795190639077,"lang":"es","st":"review","s":33.09482655039439,"d":4.996,"lr":1792425839077,"lapses":0,"step":null,"fr":"Écarté / Rejeté / Éliminé","word":"descartado"},"es:será que":{"ef":2.5,"interval":2,"reps":4,"due":1793949209317,"lang":"es","st":"review","s":1.6741647100317867,"d":8.889135412439513,"lr":1793776409317,"lapses":1,"step":null,"fr":"Se pourrait-il que… / Est-ce que… (futur de conjecture)","word":"será que"},"es:todavía":{"ef":2.65,"interval":59,"reps":3,"due":1798270955571,"lang":"es","st":"review","s":61.442159753730685,"d":4.4965,"lr":1793173355571,"lapses":0,"step":null,"fr":"Encore / Toujours (temps)","word":"todavía"},"es:conseguir":{"ef":2.5,"interval":33,"reps":3,"due":1795282098872,"lang":"es","st":"review","s":35.69136119132143,"d":4.996,"lr":1792430898872,"lapses":0,"step":null,"fr":"Arriver à / Réussir à / Obtenir (irrég. e→i)","word":"conseguir"},"es:no consigo":{"ef":2.65,"interval":57,"reps":3,"due":1798101345290,"lang":"es","st":"review","s":61.49367778102726,"d":4.4965,"lr":1793176545290,"lapses":0,"step":null,"fr":"Je n'arrive pas à…","word":"no consigo"},"es:imaginar":{"ef":2.65,"interval":92,"reps":3,"due":1801122077554,"lang":"es","st":"review","s":99.35565575593303,"d":2.6531562999999996,"lr":1793173277554,"lapses":0,"step":null,"fr":"Imaginer","word":"imaginar"},"es:niño":{"ef":2.65,"interval":48,"reps":3,"due":1796561884465,"lang":"es","st":"review","s":44.13986168844806,"d":4.4965,"lr":1792414684465,"lapses":0,"step":null,"fr":"Petit garçon / Enfant","word":"niño"},"es:dar igual":{"ef":2.5,"interval":31,"reps":3,"due":1795093087066,"lang":"es","st":"review","s":34.809440229941046,"d":4.996,"lr":1792414687066,"lapses":0,"step":null,"fr":"Être égal / Ne pas faire de différence","word":"dar igual"},"es:dándole":{"ef":2.5,"interval":38,"reps":3,"due":1795709014365,"lang":"es","st":"review","s":35.62480387894893,"d":4.996,"lr":1792425814365,"lapses":0,"step":null,"fr":"En lui donnant (gérondif + pronom collé)","word":"dándole"},"es:dar":{"ef":2.65,"interval":59,"reps":3,"due":1798274148318,"lang":"es","st":"review","s":61.4919005424115,"d":4.4965,"lr":1793176548318,"lapses":0,"step":null,"fr":"Donner (verbe essentiel, irrég.)","word":"dar"},"es:salir con":{"ef":2.65,"interval":57,"reps":3,"due":1798098139874,"lang":"es","st":"review","s":61.442588143539254,"d":4.4965,"lr":1793173339874,"lapses":0,"step":null,"fr":"Sortir avec / Aller avec (qqn)","word":"salir con"},"es:hermano":{"ef":2.8,"interval":136,"reps":3,"due":1805527217734,"lang":"es","st":"review","s":141.5717096937388,"d":1.986079600000001,"lr":1793776817734,"lapses":0,"step":null,"fr":"Frère","word":"hermano"},"es:película":{"ef":2.65,"interval":66,"reps":3,"due":1798879009086,"lang":"es","st":"review","s":61.495404277072325,"d":4.4965,"lr":1793176609086,"lapses":0,"step":null,"fr":"Film","word":"película"},"es:salió":{"ef":2.2,"interval":18,"reps":3,"due":1793986277818,"lang":"es","st":"review","s":18.64915871773016,"d":5.994999999999999,"lr":1792431077818,"lapses":0,"step":null,"fr":"Il est sorti / Il apparut (prétérit)","word":"salió"},"es:crítica":{"ef":2.65,"interval":62,"reps":3,"due":1798533454598,"lang":"es","st":"review","s":61.49652659137604,"d":4.4965,"lr":1793176654598,"lapses":0,"step":null,"fr":"Critique","word":"crítica"},"es:buenísimo":{"ef":2.65,"interval":59,"reps":3,"due":1798271002631,"lang":"es","st":"review","s":61.442527796488555,"d":4.4965,"lr":1793173402631,"lapses":0,"step":null,"fr":"Excellent / Super (superlatif de bueno)","word":"buenísimo"},"es:todo el mundo":{"ef":2.65,"interval":63,"reps":3,"due":1798619873447,"lang":"es","st":"review","s":61.49446604526376,"d":4.4965,"lr":1793176673447,"lapses":0,"step":null,"fr":"Tout le monde","word":"todo el mundo"},"es:mejor":{"ef":2.65,"interval":92,"reps":3,"due":1801122226995,"lang":"es","st":"review","s":99.36337089511403,"d":2.6531562999999996,"lr":1793173426995,"lapses":0,"step":null,"fr":"Meilleur / Mieux","word":"mejor"},"es:desde que":{"ef":2.5,"interval":30,"reps":3,"due":1795022960839,"lang":"es","st":"review","s":33.16299826565644,"d":4.996,"lr":1792430960839,"lapses":0,"step":null,"fr":"Depuis que","word":"desde que"},"es:entrar":{"ef":2.65,"interval":63,"reps":3,"due":1798619878786,"lang":"es","st":"review","s":61.49604614039071,"d":4.4965,"lr":1793176678786,"lapses":0,"step":null,"fr":"Entrer","word":"entrar"},"es:sorprendido":{"ef":2.2,"interval":17,"reps":4,"due":1793894685250,"lang":"es","st":"review","s":18.851145750309513,"d":5.994999999999999,"lr":1792425885250,"lapses":0,"step":null,"fr":"Surpris","word":"sorprendido"},"es:aliviado":{"ef":2.5,"interval":22,"reps":3,"due":1794326717847,"lang":"es","st":"review","s":24.614821934918993,"d":6.671767,"lr":1792425917847,"lapses":0,"step":null,"fr":"Soulagé","word":"aliviado"},"es:a la vez":{"ef":2.5,"interval":32,"reps":3,"due":1795179510873,"lang":"es","st":"review","s":32.93301308349508,"d":4.996,"lr":1792414710873,"lapses":0,"step":null,"fr":"À la fois / En même temps","word":"a la vez"},"es:sobre todo":{"ef":2.65,"interval":58,"reps":3,"due":1798184560382,"lang":"es","st":"review","s":61.442062269220685,"d":4.4965,"lr":1793173360382,"lapses":0,"step":null,"fr":"Surtout","word":"sobre todo"},"es:estuvimos hablando":{"ef":2.5,"interval":34,"reps":3,"due":1795368746464,"lang":"es","st":"review","s":35.030576050814375,"d":4.996,"lr":1792431146464,"lapses":0,"step":null,"fr":"Nous étions en train de parler (passé progressif)","word":"estuvimos hablando"},"es:convencido":{"ef":2.5,"interval":27,"reps":3,"due":1794758561639,"lang":"es","st":"review","s":31.3307071409038,"d":4.996,"lr":1792425761639,"lapses":0,"step":null,"fr":"Convaincu","word":"convencido"},"es:iba a ser":{"ef":2.5,"interval":30,"reps":3,"due":1795023176717,"lang":"es","st":"review","s":33.17116100826133,"d":4.996,"lr":1792431176717,"lapses":0,"step":null,"fr":"Ça allait être (futur du passé)","word":"iba a ser"},"es:fracaso":{"ef":2.65,"interval":41,"reps":3,"due":1796715870644,"lang":"es","st":"review","s":44.125135593896054,"d":6.3398437,"lr":1793173470644,"lapses":0,"step":null,"fr":"Échec","word":"fracaso"},"es:por fin":{"ef":2.5,"interval":32,"reps":3,"due":1795190699458,"lang":"es","st":"review","s":35.62672214648192,"d":4.996,"lr":1792425899458,"lapses":0,"step":null,"fr":"Enfin","word":"por fin"},"es:ver":{"ef":2.65,"interval":57,"reps":3,"due":1798101449347,"lang":"es","st":"review","s":61.49384606848814,"d":4.4965,"lr":1793176649347,"lapses":0,"step":null,"fr":"Voir","word":"ver"},"es:otra vez":{"ef":1.9000000000000004,"interval":35,"reps":6,"due":1796740203466,"lang":"es","st":"review","s":32.83556264662703,"d":6.988006,"lr":1793716203466,"lapses":0,"step":null,"fr":"Une nouvelle fois / À nouveau","word":"otra vez"},"es:balancearse":{"ef":2.65,"interval":63,"reps":3,"due":1798619806192,"lang":"es","st":"review","s":61.493308230894975,"d":4.4965,"lr":1793176606192,"lapses":0,"step":null,"fr":"Se balancer","word":"balancearse"},"es:literalmente":{"ef":2.65,"interval":65,"reps":3,"due":1798792553955,"lang":"es","st":"review","s":61.49591479510326,"d":4.4965,"lr":1793176553955,"lapses":0,"step":null,"fr":"Littéralement","word":"literalmente"},"es:gracioso":{"ef":2.5,"interval":35,"reps":3,"due":1795449792800,"lang":"es","st":"review","s":35.624863402220555,"d":4.996,"lr":1792425792800,"lapses":0,"step":null,"fr":"Drôle / Marrant","word":"gracioso"},"es:recordar":{"ef":2.5,"interval":33,"reps":3,"due":1795282242273,"lang":"es","st":"review","s":35.692453318988576,"d":4.996,"lr":1792431042273,"lapses":0,"step":null,"fr":"Se souvenir / Rappeler","word":"recordar"},"es:hace como":{"ef":2.35,"interval":18,"reps":3,"due":1793970295646,"lang":"es","st":"review","s":20.091821895483115,"d":5.495500000000001,"lr":1792415095646,"lapses":0,"step":null,"fr":"Il y a environ (como = environ)","word":"hace como"},"es:de hecho":{"ef":2.5,"interval":33,"reps":3,"due":1795282310671,"lang":"es","st":"review","s":33.170553487345245,"d":4.996,"lr":1792431110671,"lapses":0,"step":null,"fr":"En fait / En réalité","word":"de hecho"},"es:predecir":{"ef":2.65,"interval":62,"reps":3,"due":1798530080484,"lang":"es","st":"review","s":61.44105432628133,"d":4.4965,"lr":1793173280484,"lapses":0,"step":null,"fr":"Prédire","word":"predecir"},"es:tendríamos":{"ef":2.35,"interval":29,"reps":4,"due":1794931400051,"lang":"es","st":"review","s":30.96382500255223,"d":5.495500000000001,"lr":1792425800051,"lapses":0,"step":null,"fr":"Nous aurions (conditionnel de tener)","word":"tendríamos"},"es:Alrededor":{"ef":2.5,"interval":32,"reps":3,"due":1795179497032,"lang":"es","st":"review","s":32.933083139728694,"d":4.996,"lr":1792414697032,"lapses":0,"step":null,"fr":"Autour","word":"Alrededor"},"es:parece que":{"ef":2.5,"interval":33,"reps":3,"due":1795282154343,"lang":"es","st":"review","s":35.69218287591243,"d":4.996,"lr":1792430954343,"lapses":0,"step":null,"fr":"Il semble que / On dirait que","word":"parece que"},"es:promedio":{"ef":2.65,"interval":66,"reps":3,"due":1798875843808,"lang":"es","st":"review","s":61.441701449884654,"d":4.4965,"lr":1793173443808,"lapses":0,"step":null,"fr":"Moyenne / Moyen / Lambda","word":"promedio"},"es:en promedio":{"ef":2.65,"interval":62,"reps":3,"due":1798533318898,"lang":"es","st":"review","s":61.49458226441521,"d":4.4965,"lr":1793176518898,"lapses":0,"step":null,"fr":"En moyenne","word":"en promedio"},"es:esposa":{"ef":2.65,"interval":59,"reps":3,"due":1798274293619,"lang":"es","st":"review","s":61.49524048401843,"d":4.4965,"lr":1793176693619,"lapses":0,"step":null,"fr":"Épouse / Femme (mariée)","word":"esposa"},"es:turbante":{"ef":2.35,"interval":28,"reps":4,"due":1794850217352,"lang":"es","st":"review","s":25.602965076656492,"d":5.495500000000001,"lr":1792431017352,"lapses":0,"step":null,"fr":"Turban","word":"turbante"},"es:sinceramente":{"ef":2.8,"interval":88,"reps":3,"due":1801379927555,"lang":"es","st":"review","s":88.63706522005197,"d":3.9970000000000008,"lr":1793776727555,"lapses":0,"step":null,"fr":"Sincèrement / Honnêtement","word":"sinceramente"},"es:si":{"ef":2.5,"interval":36,"reps":3,"due":1795541412881,"lang":"es","st":"review","s":33.16371387557426,"d":4.996,"lr":1792431012881,"lapses":0,"step":null,"fr":"Si (conditionnel — sans accent)","word":"si"},"es:cabeza":{"ef":2.65,"interval":62,"reps":3,"due":1798530145828,"lang":"es","st":"review","s":61.44019773273402,"d":4.4965,"lr":1793173345828,"lapses":0,"step":null,"fr":"Tête","word":"cabeza"},"es:veraniego":{"ef":2.65,"interval":61,"reps":3,"due":1798446932964,"lang":"es","st":"review","s":61.49246985526006,"d":4.4965,"lr":1793176532964,"lapses":0,"step":null,"fr":"D'été","word":"veraniego"},"es:lograr":{"ef":2.65,"interval":57,"reps":3,"due":1798101442587,"lang":"es","st":"review","s":61.49616653310276,"d":4.4965,"lr":1793176642587,"lapses":0,"step":null,"fr":"Réussir à / Parvenir à / Obtenir","word":"lograr"},"es:Logro":{"ef":2.65,"interval":39,"reps":3,"due":1795800754597,"lang":"es","st":"review","s":41.1437896532589,"d":4.4965,"lr":1792431154597,"lapses":0,"step":null,"fr":"Réussite","word":"Logro"},"es:castigar":{"ef":2.2,"interval":24,"reps":4,"due":1794504685376,"lang":"es","st":"review","s":26.995837720677777,"d":5.994999999999999,"lr":1792431085376,"lapses":0,"step":null,"fr":"Punir / Sanctionner / Châtier","word":"castigar"},"es:castigo":{"ef":2.2,"interval":13,"reps":9,"due":1794899965712,"lang":"es","st":"review","s":14.158102268898052,"d":8.645568317865964,"lr":1793776765712,"lapses":1,"step":null,"fr":"Punition / Châtiment / Sanction","word":"castigo"},"es:querer":{"ef":2.65,"interval":58,"reps":3,"due":1798187832209,"lang":"es","st":"review","s":61.495395840755606,"d":4.4965,"lr":1793176632209,"lapses":0,"step":null,"fr":"Vouloir / Aimer (qqn)","word":"querer"},"es:quiso":{"ef":1.7500000000000004,"interval":16,"reps":3,"due":1794559063041,"lang":"es","st":"review","s":18.816659527680212,"d":7.487006499999999,"lr":1793176663041,"lapses":0,"step":null,"fr":"Il/elle a voulu / a aimé (prétérit)","word":"quiso"},"es:te quiero":{"ef":2.65,"interval":63,"reps":3,"due":1798616542891,"lang":"es","st":"review","s":61.438713464961495,"d":4.4965,"lr":1793173342891,"lapses":0,"step":null,"fr":"Je t'aime (affection — famille, amis, couple)","word":"te quiero"},"es:sin":{"ef":2.65,"interval":56,"reps":3,"due":1798015052446,"lang":"es","st":"review","s":61.493261607304916,"d":4.4965,"lr":1793176652446,"lapses":0,"step":null,"fr":"Sans","word":"sin"},"es:Poner":{"ef":2.65,"interval":63,"reps":4,"due":1798619910568,"lang":"es","st":"review","s":59.250356850342634,"d":4.4965,"lr":1793176710568,"lapses":0,"step":null,"fr":"Mettre / poser","word":"Poner"},"es:firme":{"ef":2.35,"interval":29,"reps":4,"due":1794920319051,"lang":"es","st":"review","s":29.22336649554063,"d":5.495500000000001,"lr":1792414719051,"lapses":0,"step":null,"fr":"Ferme / Raide / Solide","word":"firme"},"es:patria":{"ef":2.8,"interval":140,"reps":3,"due":1805872771813,"lang":"es","st":"review","s":141.56886349804043,"d":1.986079600000001,"lr":1793776771813,"lapses":0,"step":null,"fr":"Patrie","word":"patria"},"es:fue":{"ef":2.35,"interval":32,"reps":4,"due":1795195735410,"lang":"es","st":"review","s":31.022542701296487,"d":5.495500000000001,"lr":1792430935410,"lapses":0,"step":null,"fr":"Il fut / Il alla (prétérit irrég. de ser/ir)","word":"fue"},"es:irse":{"ef":2.65,"interval":66,"reps":3,"due":1798875752861,"lang":"es","st":"review","s":61.43925682216298,"d":4.4965,"lr":1793173352861,"lapses":0,"step":null,"fr":"S'en aller / Partir (forme pronominale de ir)","word":"irse"},"es:cama":{"ef":2.65,"interval":63,"reps":3,"due":1798616657044,"lang":"es","st":"review","s":61.44446833331826,"d":4.4965,"lr":1793173457044,"lapses":0,"step":null,"fr":"Lit","word":"cama"},"es:me voy a la cama":{"ef":2.5,"interval":36,"reps":3,"due":1795541366855,"lang":"es","st":"review","s":33.16871193028554,"d":4.996,"lr":1792430966855,"lapses":0,"step":null,"fr":"Je vais me coucher","word":"me voy a la cama"},"es:acostarse":{"ef":2.0500000000000003,"interval":19,"reps":3,"due":1794056292948,"lang":"es","st":"review","s":16.982111950347914,"d":6.4944999999999995,"lr":1792414692948,"lapses":0,"step":null,"fr":"Se coucher (se mettre au lit)","word":"acostarse"},"es:dormirse":{"ef":2.65,"interval":64,"reps":3,"due":1798702995528,"lang":"es","st":"review","s":61.44155258794901,"d":4.4965,"lr":1793173395528,"lapses":0,"step":null,"fr":"S'endormir","word":"dormirse"},"es:Pelota":{"ef":2.65,"interval":60,"reps":3,"due":1798360657525,"lang":"es","st":"review","s":61.497452963577146,"d":4.4965,"lr":1793176657525,"lapses":0,"step":null,"fr":"Balle","word":"Pelota"},"es:hacer la pelota":{"ef":2.35,"interval":27,"reps":4,"due":1794763776764,"lang":"es","st":"review","s":29.429514630024983,"d":5.495500000000001,"lr":1792430976764,"lapses":0,"step":null,"fr":"fig. Faire de la lèche / Cirer les pompes","word":"hacer la pelota"},"es:flipar":{"ef":2.2,"interval":18,"reps":3,"due":1793986259144,"lang":"es","st":"review","s":18.8833216924493,"d":5.994999999999999,"lr":1792431059144,"lapses":0,"step":null,"fr":"fig. Kiffer / Halluciner / S'éclater (argot Espagne)","word":"flipar"},"es:flipante":{"ef":2.35,"interval":28,"reps":4,"due":1794850145117,"lang":"es","st":"review","s":31.59108445251685,"d":5.495500000000001,"lr":1792430945117,"lapses":0,"step":null,"fr":"Hallucinant / Génial / Trop bien","word":"flipante"},"es:me flipa":{"ef":1.9000000000000004,"interval":19,"reps":3,"due":1794072662291,"lang":"es","st":"review","s":15.51852178308363,"d":6.994,"lr":1792431062291,"lapses":0,"step":null,"fr":"Je kiffe / J'adore","word":"me flipa"},"es:jefe":{"ef":2.65,"interval":57,"reps":3,"due":1798098088379,"lang":"es","st":"review","s":61.43998627787248,"d":4.4965,"lr":1793173288379,"lapses":0,"step":null,"fr":"Chef / Patron / Boss / (argot) Papa","word":"jefe"},"es:cansado":{"ef":2.65,"interval":61,"reps":3,"due":1798447029207,"lang":"es","st":"review","s":61.49518420881952,"d":4.4965,"lr":1793176629207,"lapses":0,"step":null,"fr":"Fatigué","word":"cansado"},"es:cansar":{"ef":2.5,"interval":33,"reps":3,"due":1795282363243,"lang":"es","st":"review","s":35.113105160727585,"d":4.996,"lr":1792431163243,"lapses":0,"step":null,"fr":"Fatiguer","word":"cansar"},"es:descojonarse":{"ef":2.35,"interval":26,"reps":3,"due":1794677543515,"lang":"es","st":"review","s":29.463581443853432,"d":5.495500000000001,"lr":1792431143515,"lapses":0,"step":null,"fr":"fig. Se marrer / Éclater de rire (argot vulgaire)","word":"descojonarse"},"es:cojonudo":{"ef":2.0500000000000003,"interval":9,"reps":6,"due":1794554452311,"lang":"es","st":"review","s":7.970958059640652,"d":9.202703273411379,"lr":1793776852311,"lapses":1,"step":null,"fr":"Génial / Super (argot vulgaire mais positif)","word":"cojonudo"},"es:ola":{"ef":2.35,"interval":33,"reps":4,"due":1795266289768,"lang":"es","st":"review","s":31.413617263106357,"d":5.495500000000001,"lr":1792415089768,"lapses":0,"step":null,"fr":"Vague (mer / phénomène)","word":"ola"},"es:arruga":{"ef":2.0500000000000003,"interval":18,"reps":3,"due":1793986114961,"lang":"es","st":"review","s":17.08263824327671,"d":6.4944999999999995,"lr":1792430914961,"lapses":0,"step":null,"fr":"Ride / Pli","word":"arruga"},"es:no solo":{"ef":2.65,"interval":59,"reps":3,"due":1798271074230,"lang":"es","st":"review","s":61.44442003762332,"d":4.4965,"lr":1793173474230,"lapses":0,"step":null,"fr":"Non seulement / Pas seulement","word":"no solo"},"es:a lo mejor":{"ef":2.0500000000000003,"interval":20,"reps":3,"due":1794158948035,"lang":"es","st":"review","s":17.083060480231257,"d":6.4944999999999995,"lr":1792430948035,"lapses":0,"step":null,"fr":"Peut-être / Sans doute (courant à l'oral)","word":"a lo mejor"},"es:preguntar":{"ef":2.65,"interval":61,"reps":3,"due":1798447076562,"lang":"es","st":"review","s":61.496268030477594,"d":4.4965,"lr":1793176676562,"lapses":0,"step":null,"fr":"Demander / Poser une question","word":"preguntar"},"es:periodista":{"ef":2.65,"interval":96,"reps":3,"due":1801467813930,"lang":"es","st":"review","s":99.36069922124571,"d":2.6531562999999996,"lr":1793173413930,"lapses":0,"step":null,"fr":"Journaliste","word":"periodista"},"es:subir":{"ef":2.35,"interval":2,"reps":10,"due":1793949543694,"lang":"es","st":"review","s":2.763179855226207,"d":9.751904836042309,"lr":1793776743694,"lapses":2,"step":null,"fr":"Monter","word":"subir"},"es:lamentar":{"ef":2.2,"interval":29,"reps":4,"due":1794931491658,"lang":"es","st":"review","s":26.936141801542746,"d":5.994999999999999,"lr":1792425891658,"lapses":0,"step":null,"fr":"Regretter / Déplorer / Être désolé","word":"lamentar"},"es:chica":{"ef":2.65,"interval":60,"reps":3,"due":1798360639002,"lang":"es","st":"review","s":61.49446045384503,"d":4.4965,"lr":1793176639002,"lapses":0,"step":null,"fr":"Meuf / Nana (interjection familière)","word":"chica"},"es:señora":{"ef":2.65,"interval":57,"reps":3,"due":1798101434669,"lang":"es","st":"review","s":61.49442782626042,"d":4.4965,"lr":1793176634669,"lapses":0,"step":null,"fr":"Madame","word":"señora"},"es:venir":{"ef":2.65,"interval":60,"reps":3,"due":1798360725617,"lang":"es","st":"review","s":61.49782136692508,"d":4.4965,"lr":1793176725617,"lapses":0,"step":null,"fr":"Venir","word":"venir"},"es:ni siquiera":{"ef":2.35,"interval":21,"reps":2,"due":1794240209320,"lang":"es","st":"review","s":20.17257766387975,"d":5.495500000000001,"lr":1792425809320,"lapses":0,"step":null,"fr":"Même pas / Pas même","word":"ni siquiera"},"es:conocer":{"ef":2.65,"interval":62,"reps":3,"due":1798533471100,"lang":"es","st":"review","s":61.49789985560293,"d":4.4965,"lr":1793176671100,"lapses":0,"step":null,"fr":"Connaître (par expérience directe)","word":"conocer"},"es:conozco":{"ef":2.35,"interval":31,"reps":3,"due":1795109304941,"lang":"es","st":"review","s":35.23605050688737,"d":3.9873097,"lr":1792430904941,"lapses":0,"step":null,"fr":"Je connais (conocer, 1re pers. irrégulière)","word":"conozco"},"es:despertar":{"ef":2.0500000000000003,"interval":0,"reps":5,"due":1793977884304,"lang":"es","st":"relearning","s":1.0345364331815006,"d":9.220118748931133,"lr":1793976984304,"lapses":1,"step":0,"fr":"Réveiller","word":"despertar"},"es:hace nada":{"ef":2.35,"interval":34,"reps":4,"due":1795352255278,"lang":"es","st":"review","s":31.409227167873926,"d":5.495500000000001,"lr":1792414655278,"lapses":0,"step":null,"fr":"À l'instant / Il y a un instant","word":"hace nada"},"es:sortear":{"ef":2.0500000000000003,"interval":19,"reps":3,"due":1794067357755,"lang":"es","st":"review","s":17.265197458926643,"d":6.4944999999999995,"lr":1792425757755,"lapses":0,"step":null,"fr":"Contourner / Éviter / Tirer au sort","word":"sortear"},"es:sacar":{"ef":2.35,"interval":6,"reps":9,"due":1794234635765,"lang":"es","st":"review","s":4.684294771076122,"d":9.634744636372554,"lr":1793716235765,"lapses":2,"step":null,"fr":"Sortir / Tirer / Obtenir","word":"sacar"},"ln:Kobanga":{"ef":2.5,"interval":3,"reps":1,"due":1791581167873,"lang":"ln","st":"review","s":3,"d":5,"lr":1791321967873,"lapses":0,"step":null,"fr":"Avoir peur / Craindre / Respecter","word":"Kobanga"},"ln:Muninga":{"ef":2.5,"interval":0,"reps":0,"due":1790751192307,"lang":"ln","st":"new","fr":"Ami(e) / Copain / Voisin","word":"Muninga"},"ln:Mususu / Basusu":{"ef":2.5,"interval":0,"reps":0,"due":1791439934102,"lang":"ln","st":"new","fr":"Autre / Un autre / Certains","word":"Mususu / Basusu"},"ln:Kokita":{"ef":2.5,"interval":0,"reps":0,"due":1791356701028,"lang":"ln","st":"new","fr":"Atterrir / Descendre / Se poser","word":"Kokita"},"ln:Kofinga":{"ef":2.5,"interval":0,"reps":0,"due":1791364077080,"lang":"ln","st":"new","fr":"Insulter / Offenser","word":"Kofinga"},"ln:Komeka":{"ef":2.5,"interval":0,"reps":0,"due":1790751192307,"lang":"ln","st":"new","fr":"Essayer / Tester / Goûter / Mesurer","word":"Komeka"},"ln:Nzoto":{"ef":2.5,"interval":51,"reps":3,"due":1798151512529,"lang":"ln","st":"review","s":46.89933021585208,"d":4.996,"lr":1793745112529,"lapses":0,"step":null,"fr":"Corps / Santé","word":"Nzoto"},"ln:Mibale":{"ef":2.5,"interval":3,"reps":1,"due":1791699151571,"lang":"ln","st":"review","s":3,"d":5,"lr":1791439951571,"lapses":0,"step":null,"fr":"Deux / Tous les deux","word":"Mibale"},"ln:Kozongela":{"ef":2.5,"interval":0,"reps":0,"due":1790751192307,"lang":"ln","st":"new","fr":"Recommencer / Répéter / Revenir vers","word":"Kozongela"},"ln:Misusu":{"ef":2.5,"interval":0,"reps":0,"due":1790751192307,"lang":"ln","st":"new","fr":"Certains / D'autres / Quelques-uns","word":"Misusu"},"ln:Kaka boye":{"ef":2.5,"interval":0,"reps":0,"due":1791441529398,"lang":"ln","st":"new","fr":"Comme ça / Juste comme ça / Sans raison","word":"Kaka boye"},"ln:Kozonga":{"ef":2.5,"interval":3,"reps":1,"due":1791581179460,"lang":"ln","st":"review","s":3,"d":5,"lr":1791321979460,"lapses":0,"step":null,"fr":"Revenir / Retourner / Rentrer","word":"Kozonga"},"ln:Tango":{"ef":2.5,"interval":0,"reps":0,"due":1791356693927,"lang":"ln","st":"new","fr":"Quand / Temps / Moment","word":"Tango"},"ln:Somo":{"ef":2.5,"interval":0,"reps":0,"due":1791439940786,"lang":"ln","st":"new","fr":"Terreur / Peur / Horreur","word":"Somo"},"ln:Kokenda":{"ef":2.35,"interval":0,"reps":2,"due":1793745723711,"lang":"ln","st":"relearning","s":0.5179421646858448,"d":8.5118806,"lr":1793745123711,"lapses":1,"step":0,"fr":"Aller / Partir","word":"Kokenda"},"ln:Pa":{"ef":2.5,"interval":0,"reps":0,"due":1791356716896,"lang":"ln","st":"new","fr":"Chez / À la maison de","word":"Pa"},"ln:Ya":{"ef":2.5,"interval":3,"reps":1,"due":1791615666446,"lang":"ln","st":"review","s":3,"d":5,"lr":1791356466446,"lapses":0,"step":null,"fr":"De / À (préposition)","word":"Ya"},"ln:Koyamba":{"ef":2.5,"interval":0,"reps":0,"due":1791439977110,"lang":"ln","st":"new","fr":"Accueillir / Embrasser / Répondre (téléphone)","word":"Koyamba"},"ln:Kala":{"ef":2.5,"interval":0,"reps":0,"due":1791439915948,"lang":"ln","st":"new","fr":"Autrefois / Il y a longtemps / Jadis","word":"Kala"},"ln:Kobemba":{"ef":2.5,"interval":0,"reps":0,"due":1790751192307,"lang":"ln","st":"new","fr":"Voyager / Se déplacer","word":"Kobemba"},"ln:Kosimba":{"ef":2.65,"interval":7,"reps":1,"due":1792044696514,"lang":"ln","st":"review","s":7,"d":4.5,"lr":1791439896514,"lapses":0,"step":null,"fr":"Tenir / Saisir / Attraper / Coller","word":"Kosimba"},"ln:Lokola":{"ef":2.5,"interval":0,"reps":0,"due":1791356681994,"lang":"ln","st":"new","fr":"Comme / Tel que / Pareil à","word":"Lokola"},"ln:Sukali":{"ef":2.65,"interval":7,"reps":1,"due":1791961231210,"lang":"ln","st":"review","s":7,"d":4.5,"lr":1791356431210,"lapses":0,"step":null,"fr":"Sucre","word":"Sukali"},"ln:Kolakisa":{"ef":2.5,"interval":3,"reps":1,"due":1791615689068,"lang":"ln","st":"review","s":3,"d":5,"lr":1791356489068,"lapses":0,"step":null,"fr":"Montrer / Enseigner","word":"Kolakisa"},"en:to ground (a flight)":{"ef":2.5,"interval":32,"reps":2,"due":1796542138386,"lang":"en","st":"review","s":29.345523821930477,"d":4.996,"lr":1793777338386,"lapses":0,"step":null,"fr":"Clouer au sol / Immobiliser (avion)","word":"to ground (a flight)"},"en:to get hold of sb":{"ef":2.2,"interval":3,"reps":4,"due":1794249196860,"lang":"en","st":"review","s":2.4191045921536767,"d":8.660882421827198,"lr":1793989996860,"lapses":1,"step":null,"fr":"Joindre qqn / Réussir à contacter","word":"to get hold of sb"},"en:to have a hold on sb":{"ef":2.5,"interval":5,"reps":4,"due":1794421986479,"lang":"en","st":"review","s":3.578191135685512,"d":8.332846279533998,"lr":1793989986479,"lapses":1,"step":null,"fr":"Avoir de l'emprise sur qqn","word":"to have a hold on sb"},"en:impeachment":{"ef":2.35,"interval":26,"reps":3,"due":1796023764602,"lang":"en","st":"review","s":26.84084189717096,"d":5.495500000000001,"lr":1793777364602,"lapses":0,"step":null,"fr":"Procédure de destitution / Mise en accusation","word":"impeachment"},"en:on a par with [sth]":{"ef":2.2,"interval":2,"reps":6,"due":1794162728782,"lang":"en","st":"review","s":0.4861119150922673,"d":9.827341181053972,"lr":1793989928782,"lapses":1,"step":null,"fr":"Au même niveau que [qch]","word":"on a par with [sth]"},"en:stay grounded":{"ef":2.2,"interval":14,"reps":2,"due":1794986899409,"lang":"en","st":"review","s":13.197342005273727,"d":5.994999999999999,"lr":1793777299409,"lapses":0,"step":null,"fr":"Rester ancré / Rester humble","word":"stay grounded"},"en:fathom [sth]":{"ef":2.2,"interval":2,"reps":5,"due":1794162872635,"lang":"en","st":"review","s":2.938870281414772,"d":8.660882421827198,"lr":1793990072635,"lapses":1,"step":null,"fr":"Percer un mystère / Comprendre","word":"fathom [sth]"},"en:hobo":{"ef":2.2,"interval":4,"reps":4,"due":1794335779328,"lang":"en","st":"review","s":2.4198921662731783,"d":8.660882421827198,"lr":1793990179328,"lapses":1,"step":null,"fr":"Vagabond itinérant / Clochard voyageur (qui saute dans les trains)","word":"hobo"},"en:To act [sth] out":{"ef":2.2,"interval":2,"reps":5,"due":1794162813273,"lang":"en","st":"review","s":1.646186468684058,"d":9.09600160391035,"lr":1793990013273,"lapses":1,"step":null,"fr":"Jouer (un rôle)","word":"To act [sth] out"},"en:Thirst":{"ef":2.35,"interval":26,"reps":3,"due":1796023840558,"lang":"en","st":"review","s":26.84098644852366,"d":5.495500000000001,"lr":1793777440558,"lapses":0,"step":null,"fr":"Soif","word":"Thirst"},"en:bereavement":{"ef":2.5,"interval":28,"reps":2,"due":1796196591589,"lang":"en","st":"review","s":29.345415166132938,"d":4.996,"lr":1793777391589,"lapses":0,"step":null,"fr":"Deuil / Perte d'un proche","word":"bereavement"},"en:to grant":{"ef":2.35,"interval":27,"reps":3,"due":1796110196833,"lang":"en","st":"review","s":26.841171778493617,"d":5.495500000000001,"lr":1793777396833,"lapses":0,"step":null,"fr":"Accorder / Octroyer / Admettre (une demande)","word":"to grant"},"en:Quench":{"ef":2.2,"interval":1,"reps":9,"due":1794077151922,"lang":"en","st":"review","s":0.01616076866661007,"d":9.972270526628273,"lr":1793990751922,"lapses":2,"step":null,"fr":"Désaltérer / Étancher","word":"Quench"},"es:cuerno":{"ef":2.2,"interval":29,"reps":3,"due":1795734197777,"lang":"es","st":"review","s":27.867252490254828,"d":5.990004999999999,"lr":1793228597777,"lapses":0,"step":null,"fr":"Corne / fig. Trahison amoureuse (poner los cuernos)","word":"cuerno"},"es:harto":{"ef":2.5,"interval":10,"reps":5,"due":1794558220050,"lang":"es","st":"review","s":11.522473575052087,"d":8.325513433254462,"lr":1793694220050,"lapses":1,"step":null,"fr":"Fatigué, lassé","word":"harto"},"es:golpe":{"ef":2.2,"interval":25,"reps":3,"due":1795333495540,"lang":"es","st":"review","s":26.968332746224938,"d":5.990004999999999,"lr":1793173495540,"lapses":0,"step":null,"fr":"Coup / Choc / Coup d'État","word":"golpe"},"es:engañar":{"ef":2.5,"interval":22,"reps":2,"due":1794331786289,"lang":"es","st":"review","s":21.641071565923863,"d":4.996,"lr":1792430986289,"lapses":0,"step":null,"fr":"Mentir / tromper","word":"engañar"},"es:tienda":{"ef":2.65,"interval":36,"reps":2,"due":1795525482321,"lang":"es","st":"review","s":32.5088151574445,"d":4.4965,"lr":1792415082321,"lapses":0,"step":null,"fr":"Boutique / Magasin","word":"tienda"},"es:meterse":{"ef":2.5,"interval":32,"reps":3,"due":1796459017078,"lang":"es","st":"review","s":35.94223960545489,"d":6.666095233,"lr":1793694217078,"lapses":0,"step":null,"fr":"Se mettre dans / Se fourrer / S'engager","word":"meterse"},"es:dar fruto":{"ef":2.5,"interval":24,"reps":2,"due":1794504696270,"lang":"es","st":"review","s":21.642135599900623,"d":4.996,"lr":1792431096270,"lapses":0,"step":null,"fr":"Porter ses fruits / Donner des résultats","word":"dar fruto"},"es:aparcar":{"ef":2.35,"interval":22,"reps":3,"due":1794315482164,"lang":"es","st":"review","s":19.424733037141,"d":5.495500000000001,"lr":1792414682164,"lapses":0,"step":null,"fr":"Garer / Parquer","word":"aparcar"},"es:el cruce":{"ef":2.5,"interval":25,"reps":2,"due":1794590938765,"lang":"es","st":"review","s":21.64078138134922,"d":4.996,"lr":1792430938765,"lapses":0,"step":null,"fr":"Le croisement / Le carrefour","word":"el cruce"},"es:desplegar":{"ef":2.2,"interval":26,"reps":3,"due":1795419839973,"lang":"es","st":"review","s":26.967846951404997,"d":5.990004999999999,"lr":1793173439973,"lapses":0,"step":null,"fr":"Déployer / Déplier / Étaler","word":"desplegar"},"es:Crecer":{"ef":2.65,"interval":35,"reps":2,"due":1795438705619,"lang":"es","st":"review","s":32.158522003574284,"d":4.4965,"lr":1792414705619,"lapses":0,"step":null,"fr":"Grandir","word":"Crecer"},"es:los he seguido":{"ef":2.2,"interval":13,"reps":6,"due":1794899930625,"lang":"es","st":"review","s":11.85567829686069,"d":8.645568317865964,"lr":1793776730625,"lapses":1,"step":null,"fr":"Je les ai suivis","word":"los he seguido"},"es:pesar":{"ef":2.5,"interval":21,"reps":2,"due":1794245528303,"lang":"es","st":"review","s":21.451257976391926,"d":4.996,"lr":1792431128303,"lapses":0,"step":null,"fr":"Peser","word":"pesar"},"es:Ya":{"ef":2.65,"interval":36,"reps":2,"due":1795541480019,"lang":"es","st":"review","s":32.40970333244323,"d":4.4965,"lr":1792431080019,"lapses":0,"step":null,"fr":"Déjà / Maintenant","word":"Ya"},"es:Caliente":{"ef":2.65,"interval":57,"reps":2,"due":1797339462135,"lang":"es","st":"review","s":54.117976055003105,"d":2.6531562999999996,"lr":1792414662135,"lapses":0,"step":null,"fr":"Chaud","word":"Caliente"},"es:fallecer":{"ef":2.35,"interval":18,"reps":3,"due":1793986338017,"lang":"es","st":"review","s":19.558316233544847,"d":5.495500000000001,"lr":1792431138017,"lapses":0,"step":null,"fr":"Décéder / Mourir (soutenu)","word":"fallecer"},"es:desarrollar":{"ef":2.65,"interval":32,"reps":2,"due":1795195789603,"lang":"es","st":"review","s":32.40856819961675,"d":4.4965,"lr":1792430989603,"lapses":0,"step":null,"fr":"Développer","word":"desarrollar"},"es:Pasado":{"ef":2.5,"interval":10,"reps":4,"due":1794040668734,"lang":"es","st":"review","s":8.168312051020559,"d":7.7795705108478845,"lr":1793176668734,"lapses":1,"step":null,"fr":"Passé","word":"Pasado"},"es:qué":{"ef":2.65,"interval":33,"reps":2,"due":1795282157243,"lang":"es","st":"review","s":32.407916533296614,"d":4.4965,"lr":1792430957243,"lapses":0,"step":null,"fr":"Quoi / Que","word":"qué"},"es:lado":{"ef":2.65,"interval":29,"reps":2,"due":1794936522666,"lang":"es","st":"review","s":32.40697063218438,"d":4.4965,"lr":1792430922666,"lapses":0,"step":null,"fr":"Côté","word":"lado"},"es:las que":{"ef":2.5,"interval":22,"reps":2,"due":1794326575580,"lang":"es","st":"review","s":21.405064913604395,"d":4.996,"lr":1792425775580,"lapses":0,"step":null,"fr":"Celles qui","word":"las que"},"es:hermana":{"ef":2.65,"interval":57,"reps":2,"due":1797355874211,"lang":"es","st":"review","s":54.58818920853504,"d":2.6531562999999996,"lr":1792431074211,"lapses":0,"step":null,"fr":"Sœur","word":"hermana"},"es:en ningún momento":{"ef":2.5,"interval":19,"reps":2,"due":1794067395801,"lang":"es","st":"review","s":21.405295181054967,"d":4.996,"lr":1792425795801,"lapses":0,"step":null,"fr":"À aucun moment","word":"en ningún momento"},"es:sino que":{"ef":2.2,"interval":2,"reps":8,"due":1793889006558,"lang":"es","st":"review","s":3.19544748260851,"d":9.5252142785526,"lr":1793716206558,"lapses":2,"step":null,"fr":"Mais (avec verbe conjugué)","word":"sino que"},"es:sano y salvo":{"ef":2.5,"interval":22,"reps":2,"due":1794331987243,"lang":"es","st":"review","s":21.451353401526543,"d":4.996,"lr":1792431187243,"lapses":0,"step":null,"fr":"Sain et sauf","word":"sano y salvo"},"es:a trompadas":{"ef":2.2,"interval":28,"reps":3,"due":1795647834631,"lang":"es","st":"review","s":28.068409950000603,"d":5.990004999999999,"lr":1793228634631,"lapses":0,"step":null,"fr":"À coups de poing","word":"a trompadas"},"es:búsqueda":{"ef":2.65,"interval":54,"reps":2,"due":1797096582639,"lang":"es","st":"review","s":54.5850980910108,"d":2.6531562999999996,"lr":1792430982639,"lapses":0,"step":null,"fr":"Recherche","word":"búsqueda"},"es:además":{"ef":2.5,"interval":39,"reps":2,"due":1795800563081,"lang":"es","st":"review","s":37.554567985589344,"d":3.320233,"lr":1792430963081,"lapses":0,"step":null,"fr":"De plus / En plus","word":"además"},"es:ningún":{"ef":2.5,"interval":22,"reps":3,"due":1794331951946,"lang":"es","st":"review","s":23.82422925142399,"d":4.996,"lr":1792431151946,"lapses":0,"step":null,"fr":"Aucun (devant nom masculin)","word":"ningún"},"es:no sé":{"ef":2.5,"interval":23,"reps":2,"due":1794418171841,"lang":"es","st":"review","s":21.449413610755816,"d":4.996,"lr":1792430971841,"lapses":0,"step":null,"fr":"Je ne sais pas","word":"no sé"},"es:puesto":{"ef":2.2,"interval":25,"reps":3,"due":1795336683094,"lang":"es","st":"review","s":27.229802477209237,"d":5.990004999999999,"lr":1793176683094,"lapses":0,"step":null,"fr":"litt. Mis / Placé / Poste / Stand (marché)","word":"puesto"},"es:me parece bien":{"ef":2.5,"interval":20,"reps":2,"due":1794153835705,"lang":"es","st":"review","s":21.40501466119798,"d":4.996,"lr":1792425835705,"lapses":0,"step":null,"fr":"Ça me semble bien / D'accord","word":"me parece bien"},"es:predijo":{"ef":2.2,"interval":28,"reps":3,"due":1795649000288,"lang":"es","st":"review","s":27.888945072359803,"d":5.990004999999999,"lr":1793229800288,"lapses":0,"step":null,"fr":"Il a prédit (prétérit irrég.)","word":"predijo"},"es:nuevo":{"ef":2.65,"interval":53,"reps":2,"due":1797010306977,"lang":"es","st":"review","s":54.58831351798602,"d":2.6531562999999996,"lr":1792431106977,"lapses":0,"step":null,"fr":"Nouveau / Nouvelle","word":"nuevo"},"es:cuídate":{"ef":2.5,"interval":24,"reps":2,"due":1794499369648,"lang":"es","st":"review","s":21.40471976946361,"d":4.996,"lr":1792425769648,"lapses":0,"step":null,"fr":"Prends soin de toi !","word":"cuídate"},"es:papel":{"ef":2.65,"interval":56,"reps":2,"due":1797264134987,"lang":"es","st":"review","s":54.433806889927396,"d":2.6531562999999996,"lr":1792425734987,"lapses":0,"step":null,"fr":"Papier / Rôle (cinéma/théâtre)","word":"papel"},"es:traer suerte":{"ef":2.2,"interval":38,"reps":3,"due":1797060023872,"lang":"es","st":"review","s":35.46157996381949,"d":5.990004999999999,"lr":1793776823872,"lapses":0,"step":null,"fr":"Porter chance","word":"traer suerte"},"es:castigado":{"ef":2.5,"interval":23,"reps":2,"due":1794418206168,"lang":"es","st":"review","s":21.44939113257152,"d":4.996,"lr":1792431006168,"lapses":0,"step":null,"fr":"Puni / Sanctionné","word":"castigado"},"es:capacidad":{"ef":2.65,"interval":36,"reps":2,"due":1795541392903,"lang":"es","st":"review","s":32.40673819382156,"d":4.4965,"lr":1792430992903,"lapses":0,"step":null,"fr":"Capacité / Compétence","word":"capacidad"},"es:parte":{"ef":2.65,"interval":35,"reps":2,"due":1795455166261,"lang":"es","st":"review","s":32.4094282304487,"d":4.4965,"lr":1792431166261,"lapses":0,"step":null,"fr":"Partie / Épisode","word":"parte"},"es:equivocarse":{"ef":2.65,"interval":51,"reps":2,"due":1796832138687,"lang":"es","st":"review","s":54.430627168724,"d":2.6531562999999996,"lr":1792425738687,"lapses":0,"step":null,"fr":"Se tromper","word":"equivocarse"},"es:desprestigiar":{"ef":2.5,"interval":19,"reps":2,"due":1794067527641,"lang":"es","st":"review","s":21.40474508551911,"d":4.996,"lr":1792425927641,"lapses":0,"step":null,"fr":"Discréditer","word":"desprestigiar"},"es:maleta":{"ef":2.35,"interval":19,"reps":3,"due":1794056705785,"lang":"es","st":"review","s":19.428699572242323,"d":5.495500000000001,"lr":1792415105785,"lapses":0,"step":null,"fr":"Valise","word":"maleta"},"es:he bajado":{"ef":2.5,"interval":22,"reps":2,"due":1794331921522,"lang":"es","st":"review","s":21.44935924702208,"d":4.996,"lr":1792431121522,"lapses":0,"step":null,"fr":"Je suis descendu (passé composé)","word":"he bajado"},"es:mantener":{"ef":2.65,"interval":50,"reps":2,"due":1796745848293,"lang":"es","st":"review","s":54.432662212688584,"d":2.6531562999999996,"lr":1792425848293,"lapses":0,"step":null,"fr":"Maintenir / Entretenir","word":"mantener"},"es:ganar":{"ef":2.65,"interval":35,"reps":2,"due":1795455034870,"lang":"es","st":"review","s":32.40520813998221,"d":4.4965,"lr":1792431034870,"lapses":0,"step":null,"fr":"Gagner / Remporter","word":"ganar"},"es:cerrar":{"ef":2.65,"interval":53,"reps":2,"due":1796993864646,"lang":"es","st":"review","s":54.11181123732863,"d":2.6531562999999996,"lr":1792414664646,"lapses":0,"step":null,"fr":"Fermer","word":"cerrar"},"es:seguidores":{"ef":2.65,"interval":57,"reps":2,"due":1797355980202,"lang":"es","st":"review","s":54.58567137505907,"d":2.6531562999999996,"lr":1792431180202,"lapses":0,"step":null,"fr":"Abonnés / Suiveurs","word":"seguidores"},"es:Pudrir":{"ef":2.65,"interval":57,"reps":2,"due":1797350650609,"lang":"es","st":"review","s":54.432802820367904,"d":2.6531562999999996,"lr":1792425850609,"lapses":0,"step":null,"fr":"Pourrir","word":"Pudrir"},"es:anciana":{"ef":2.5,"interval":22,"reps":2,"due":1794331991679,"lang":"es","st":"review","s":21.449869601081947,"d":4.996,"lr":1792431191679,"lapses":0,"step":null,"fr":"Personne âgée (fém.) / Vieille dame","word":"anciana"},"en:take for granted":{"ef":2.5,"interval":29,"reps":2,"due":1796283092413,"lang":"en","st":"review","s":29.136972763645122,"d":4.996,"lr":1793777492413,"lapses":0,"step":null,"fr":"Tenir pour acquis / Ne pas apprécier à sa juste valeur","word":"take for granted"},"en:Limb":{"ef":2.35,"interval":3,"reps":5,"due":1794249396049,"lang":"en","st":"review","s":3.403966840001467,"d":8.496864350680598,"lr":1793990196049,"lapses":1,"step":null,"fr":"Membre du corps (bras, jambe)","word":"Limb"},"en:scorched rice":{"ef":2.35,"interval":27,"reps":3,"due":1796110122218,"lang":"en","st":"review","s":26.840615964961774,"d":5.495500000000001,"lr":1793777322218,"lapses":0,"step":null,"fr":"Riz brûlé (croûte au fond de la marmite)","word":"scorched rice"},"en:hold up":{"ef":2.35,"interval":26,"reps":3,"due":1796023732515,"lang":"en","st":"review","s":26.840703089244144,"d":5.495500000000001,"lr":1793777332515,"lapses":0,"step":null,"fr":"Tenir / Retarder / Braquer (vol)","word":"hold up"},"en:Intercourse":{"ef":2.2,"interval":2,"reps":4,"due":1794162847404,"lang":"en","st":"review","s":2.4193393316655603,"d":8.660882421827198,"lr":1793990047404,"lapses":1,"step":null,"fr":"Rapports (sexuels)","word":"Intercourse"},"en:to be on edge":{"ef":2.2,"interval":6,"reps":2,"due":1794264268008,"lang":"en","st":"review","s":8.309694342981732,"d":7.335613599999999,"lr":1793745868008,"lapses":0,"step":null,"fr":"litt. Être au bord / fig. Être à cran / Sur les nerfs","word":"to be on edge"},"en:become desensitised to":{"ef":2.35,"interval":26,"reps":3,"due":1795992336422,"lang":"en","st":"review","s":26.721847111545667,"d":5.495500000000001,"lr":1793745936422,"lapses":0,"step":null,"fr":"Devenir insensible à / S'habituer à","word":"become desensitised to"},"en:not know the first thing about":{"ef":2.35,"interval":4,"reps":5,"due":1794335699472,"lang":"en","st":"review","s":3.404005052024594,"d":8.496864350680598,"lr":1793990099472,"lapses":1,"step":null,"fr":"N'y connaître absolument rien","word":"not know the first thing about"},"en:Conceited":{"ef":2.2,"interval":1,"reps":8,"due":1794077136858,"lang":"en","st":"review","s":0.0339250315161332,"d":9.961372148338551,"lr":1793990736858,"lapses":2,"step":null,"fr":"Orgueilleux","word":"Conceited"},"en:to cauterise":{"ef":2.2,"interval":2,"reps":6,"due":1794162885107,"lang":"en","st":"review","s":1.2367836583443024,"d":9.538781668415332,"lr":1793990085107,"lapses":1,"step":null,"fr":"Cautériser · (fig.) endurcir, rendre insensible","word":"to cauterise"},"es:cita":{"ef":2.35,"interval":2,"reps":4,"due":1793949514750,"lang":"es","st":"review","s":1.559305174555274,"d":8.5028910791194,"lr":1793776714750,"lapses":1,"step":null,"fr":"Rendez-vous","word":"cita"},"es:anfitrión anfitriona":{"ef":2.35,"interval":14,"reps":6,"due":1794986397597,"lang":"es","st":"review","s":12.803640674745353,"d":8.481878118843586,"lr":1793776797597,"lapses":1,"step":null,"fr":"Hôte, hôtesse","word":"anfitrión anfitriona"},"es:golpear":{"ef":2.35,"interval":28,"reps":3,"due":1795592581139,"lang":"es","st":"review","s":29.687749408777147,"d":5.491004500000001,"lr":1793173381139,"lapses":0,"step":null,"fr":"Frapper / Cogner","word":"golpear"},"es:cine":{"ef":2.35,"interval":42,"reps":3,"due":1797323418079,"lang":"es","st":"review","s":38.23029464537066,"d":5.491004500000001,"lr":1793694618079,"lapses":0,"step":null,"fr":"Cinéma","word":"cine"},"es:da igual":{"ef":2.35,"interval":40,"reps":3,"due":1797150206074,"lang":"es","st":"review","s":38.32254722225957,"d":5.491004500000001,"lr":1793694206074,"lapses":0,"step":null,"fr":"Ça revient au même / Peu importe / C'est pareil","word":"da igual"},"es:agarrar":{"ef":2.35,"interval":2,"reps":8,"due":1793889014489,"lang":"es","st":"review","s":1.0252867076027898,"d":9.806672553563637,"lr":1793716214489,"lapses":2,"step":null,"fr":"Attraper / Saisir / Prendre","word":"agarrar"},"es:asistir a":{"ef":2.65,"interval":48,"reps":2,"due":1796578219860,"lang":"es","st":"review","s":53.29587325441125,"d":2.6531562999999996,"lr":1792431019860,"lapses":0,"step":null,"fr":"Assister à (un événement)","word":"asistir a"},"es:pillado":{"ef":2.35,"interval":29,"reps":3,"due":1795735405184,"lang":"es","st":"review","s":30.724180029428197,"d":5.491004500000001,"lr":1793229805184,"lapses":0,"step":null,"fr":"Coincé / Surpris en flagrant délit","word":"pillado"},"es:avisar":{"ef":2.35,"interval":27,"reps":3,"due":1795509497177,"lang":"es","st":"review","s":29.751219681123228,"d":5.491004500000001,"lr":1793176697177,"lapses":0,"step":null,"fr":"Prévenir / Avertir / Informer","word":"avisar"},"es:salir":{"ef":2.5,"interval":41,"reps":2,"due":1795973318011,"lang":"es","st":"review","s":36.827848293585035,"d":3.320233,"lr":1792430918011,"lapses":0,"step":null,"fr":"Sortir / Partir / Paraître (film)","word":"salir"},"en:thrill":{"ef":2.35,"interval":16,"reps":2,"due":1795159804213,"lang":"en","st":"review","s":14.4137255327324,"d":5.495500000000001,"lr":1793777404213,"lapses":0,"step":null,"fr":"litt. Frisson / fig. Sensation forte / Montée d'adrénaline","word":"thrill"},"en:Ankle":{"ef":2.35,"interval":15,"reps":2,"due":1795073488032,"lang":"en","st":"review","s":14.413801985200754,"d":5.495500000000001,"lr":1793777488032,"lapses":0,"step":null,"fr":"Cheville","word":"Ankle"},"en:to bestow (sth on sb)":{"ef":2.35,"interval":1,"reps":5,"due":1794076464345,"lang":"en","st":"review","s":0.7092865003647733,"d":9.65467102040724,"lr":1793990064345,"lapses":1,"step":null,"fr":"litt. Octroyer / Accorder / Conférer / Offrir (solennel)","word":"to bestow (sth on sb)"},"en:Realm":{"ef":2.5,"interval":31,"reps":2,"due":1796455694354,"lang":"en","st":"review","s":28.998015933086556,"d":4.996,"lr":1793777294354,"lapses":0,"step":null,"fr":"Royaume / Domaine","word":"Realm"},"en:Crooked":{"ef":2.35,"interval":1,"reps":6,"due":1794076984072,"lang":"en","st":"review","s":0.1437090885125784,"d":9.81564752506509,"lr":1793990584072,"lapses":2,"step":null,"fr":"Tordu","word":"Crooked"},"en:to ship [sb]":{"ef":2.35,"interval":12,"reps":2,"due":1794814208503,"lang":"en","st":"review","s":14.413687386533006,"d":5.495500000000001,"lr":1793777408503,"lapses":0,"step":null,"fr":"fig. Shipper qqn / Vouloir qu'ils soient ensemble (fandom)","word":"to ship [sb]"},"en:to fine":{"ef":2.5,"interval":26,"reps":2,"due":1795992257731,"lang":"en","st":"review","s":28.868384175498527,"d":4.996,"lr":1793745857731,"lapses":0,"step":null,"fr":"Infliger une amende / Pénaliser","word":"to fine"},"en:to pry into":{"ef":2.35,"interval":1,"reps":5,"due":1794076407177,"lang":"en","st":"review","s":0.7092260230969195,"d":9.65467102040724,"lr":1793990007177,"lapses":1,"step":null,"fr":"S'immiscer dans / Fouiner dans","word":"to pry into"},"en:be drawn to":{"ef":2.5,"interval":4,"reps":4,"due":1794335692132,"lang":"en","st":"review","s":3.5696880077658553,"d":8.332846279533998,"lr":1793990092132,"lapses":1,"step":null,"fr":"Être attiré par (instinctivement)","word":"be drawn to"},"en:scorched earth":{"ef":2.35,"interval":15,"reps":2,"due":1795073368220,"lang":"en","st":"review","s":14.413595561326188,"d":5.495500000000001,"lr":1793777368220,"lapses":0,"step":null,"fr":"Terre brûlée (stratégie)","word":"scorched earth"},"es:siguiendo":{"ef":2.35,"interval":43,"reps":3,"due":1797492014750,"lang":"es","st":"review","s":39.22080552544813,"d":5.491004500000001,"lr":1793776814750,"lapses":0,"step":null,"fr":"En train de suivre (gérondif de seguir)","word":"siguiendo"},"es:hacer la maleta":{"ef":2.35,"interval":41,"reps":3,"due":1797319378600,"lang":"es","st":"review","s":39.222570436543805,"d":5.491004500000001,"lr":1793776978600,"lapses":0,"step":null,"fr":"Faire sa valise","word":"hacer la maleta"},"es:aún":{"ef":2.65,"interval":49,"reps":2,"due":1796659445357,"lang":"es","st":"review","s":52.25310460737572,"d":2.6531562999999996,"lr":1792425845357,"lapses":0,"step":null,"fr":"encore","word":"aún"},"es:maletero":{"ef":2.65,"interval":2,"reps":10,"due":1793890233332,"lang":"es","st":"review","s":1.9671949769064765,"d":9.890050928578757,"lr":1793717433332,"lapses":2,"step":null,"fr":"Coffre (voiture) / Porteur de bagages","word":"maletero"},"es:jefa":{"ef":2.65,"interval":34,"reps":2,"due":1795368644688,"lang":"es","st":"review","s":31.245847102988453,"d":4.4965,"lr":1792431044688,"lapses":0,"step":null,"fr":"Cheffe / Patronne / (argot) Maman","word":"jefa"},"es:Certificado":{"ef":2.65,"interval":33,"reps":2,"due":1795277102270,"lang":"es","st":"review","s":31.163158424752616,"d":4.4965,"lr":1792425902270,"lapses":0,"step":null,"fr":"Certifié","word":"Certificado"},"es:A pesar de que":{"ef":2.35,"interval":2,"reps":4,"due":1793952133494,"lang":"es","st":"review","s":1.5621206830613044,"d":8.5028910791194,"lr":1793779333494,"lapses":1,"step":null,"fr":"Malgré que","word":"A pesar de que"},"es:caminar":{"ef":2.65,"interval":53,"reps":2,"due":1797010120027,"lang":"es","st":"review","s":52.40611366226201,"d":2.6531562999999996,"lr":1792430920027,"lapses":0,"step":null,"fr":"Marcher","word":"caminar"},"es:capaz":{"ef":2.5,"interval":24,"reps":2,"due":1794504530073,"lang":"es","st":"review","s":20.793001381304343,"d":4.996,"lr":1792430930073,"lapses":0,"step":null,"fr":"Capable / Compétent / Doué / (argot) Peut-être","word":"capaz"},"es:Camino":{"ef":2.65,"interval":54,"reps":2,"due":1797096579990,"lang":"es","st":"review","s":52.40832746500223,"d":2.6531562999999996,"lr":1792430979990,"lapses":0,"step":null,"fr":"Chemin","word":"Camino"},"es:lluvia":{"ef":2.35,"interval":27,"reps":3,"due":1795509329843,"lang":"es","st":"review","s":29.853872464487452,"d":5.491004500000001,"lr":1793176529843,"lapses":0,"step":null,"fr":"Pluie","word":"lluvia"},"es:Mano":{"ef":2.65,"interval":34,"reps":2,"due":1795368525495,"lang":"es","st":"review","s":31.243243985802962,"d":4.4965,"lr":1792430925495,"lapses":0,"step":null,"fr":"Main","word":"Mano"},"es:claro que":{"ef":2.35,"interval":28,"reps":3,"due":1795595767158,"lang":"es","st":"review","s":29.626925447708512,"d":5.491004500000001,"lr":1793176567158,"lapses":0,"step":null,"fr":"Bien sûr que","word":"claro que"},"es:arriba":{"ef":2.35,"interval":30,"reps":3,"due":1795821826583,"lang":"es","st":"review","s":30.674604991444227,"d":5.491004500000001,"lr":1793229826583,"lapses":0,"step":null,"fr":"En haut / Là-haut","word":"arriba"},"es:asistente":{"ef":2.65,"interval":27,"reps":2,"due":1794747503288,"lang":"es","st":"review","s":30.981998384878242,"d":4.4965,"lr":1792414703288,"lapses":0,"step":null,"fr":"Assistant / Participant","word":"asistente"},"es:al parecer":{"ef":2.35,"interval":29,"reps":3,"due":1795734279370,"lang":"es","st":"review","s":30.54552011190159,"d":5.491004500000001,"lr":1793228679370,"lapses":0,"step":null,"fr":"Apparemment","word":"al parecer"},"es:fruto":{"ef":2.5,"interval":22,"reps":2,"due":1794326697022,"lang":"es","st":"review","s":20.672071241955813,"d":4.996,"lr":1792425897022,"lapses":0,"step":null,"fr":"Fruit (sens large : produit / résultat / botanique)","word":"fruto"},"es:a propósito":{"ef":2.35,"interval":28,"reps":3,"due":1795592459779,"lang":"es","st":"review","s":29.531903435492374,"d":5.491004500000001,"lr":1793173259779,"lapses":0,"step":null,"fr":"D'ailleurs / À propos","word":"a propósito"},"es:Hielo":{"ef":2.65,"interval":30,"reps":2,"due":1795006698983,"lang":"es","st":"review","s":30.981761286048368,"d":4.4965,"lr":1792414698983,"lapses":0,"step":null,"fr":"Glace","word":"Hielo"},"es:echar una siesta":{"ef":2.35,"interval":29,"reps":3,"due":1795735439752,"lang":"es","st":"review","s":30.63924772784985,"d":5.491004500000001,"lr":1793229839752,"lapses":0,"step":null,"fr":"Faire une sieste","word":"echar una siesta"},"es:avecinar":{"ef":2.5,"interval":27,"reps":5,"due":1795506102720,"lang":"es","st":"review","s":27.164413128202437,"d":3.456459962586591,"step":null,"lr":1793173302720,"fr":"S'approcher","word":"avecinar"},"es:Aunque":{"ef":2.5,"interval":9,"reps":3,"due":1793954304887,"lang":"es","st":"review","s":6.82673058028573,"d":5.20158620821978,"step":null,"lr":1793176704887,"fr":"Bien que","word":"Aunque"},"es:dar pena":{"ef":2.5,"interval":13,"reps":3,"due":1794217533879,"lang":"es","st":"review","s":11.837111870842856,"d":5.103950476360559,"step":null,"lr":1793094333879,"fr":"Faire de la peine","word":"dar pena"},"es:hay":{"ef":2.5,"interval":41,"reps":2,"due":1796715867155,"lang":"es","st":"review","s":40.50362062595711,"d":1,"step":null,"lr":1793173467155,"fr":"Il y a (présent de haber)","word":"hay"},"es:en general":{"ef":2.5,"interval":49,"reps":3,"due":1797949876315,"lang":"es","st":"review","s":46.860567910662276,"d":2.115868880622067,"step":null,"lr":1793716276315,"fr":"En général / Dans l'ensemble","word":"en general"},"es:cansancio":{"ef":2.5,"interval":3,"reps":6,"due":1794158630429,"lang":"es","st":"review","s":2.333185742988998,"d":8.926060711428134,"step":null,"lr":1793899430429,"lapses":1,"fr":"Fatigue","word":"cansancio"},"es:borrar":{"ef":2.5,"interval":43,"reps":2,"due":1796888692935,"lang":"es","st":"review","s":40.50410234566945,"d":1,"step":null,"lr":1793173492935,"fr":"Effacer / Supprimer","word":"borrar"},"es:picante":{"ef":2.5,"interval":39,"reps":2,"due":1796546211909,"lang":"es","st":"review","s":40.60019565759569,"d":1,"step":null,"lr":1793176611909,"fr":"Piquant / Épicé","word":"picante"},"es:haber":{"ef":2.5,"interval":46,"reps":2,"due":1797203021902,"lang":"es","st":"review","s":42.1682872759985,"d":1,"step":null,"lr":1793228621902,"fr":"Avoir (auxiliaire) / Y avoir","word":"haber"},"es:coger":{"ef":2.5,"interval":2,"reps":9,"due":1793889031294,"lang":"es","st":"review","s":0.30390492827111526,"d":9.910044655512706,"step":null,"lr":1793716231294,"lapses":2,"fr":"Prendre / Attraper","word":"coger"},"es:moverse":{"ef":2.5,"interval":39,"reps":2,"due":1796542892369,"lang":"es","st":"review","s":40.495752416468356,"d":1,"step":null,"lr":1793173292369,"fr":"Se bouger / Se déplacer","word":"moverse"},"es:broma":{"ef":2.5,"interval":37,"reps":2,"due":1796373534940,"lang":"es","st":"review","s":40.6011754900398,"d":1,"step":null,"lr":1793176734940,"fr":"Blague / Plaisanterie / Farce","word":"broma"},"es:fruta":{"ef":2.5,"interval":36,"reps":2,"due":1796283824767,"lang":"es","st":"review","s":38.87038552521274,"d":1,"step":null,"lr":1793173424767,"fr":"Fruit (qu'on mange)","word":"fruta"},"es:fallar":{"ef":2.5,"interval":49,"reps":3,"due":1797949809586,"lang":"es","st":"review","s":46.86342924010329,"d":2.115868880622067,"step":null,"lr":1793716209586,"fr":"Rater / Échouer / Faire défaut / Décevoir","word":"fallar"},"es:hayamos":{"ef":2.5,"interval":4,"reps":9,"due":1794122337392,"lang":"es","st":"review","s":2.1187733832711384,"d":9.831464741240962,"step":null,"lr":1793776737392,"lapses":1,"fr":"Que nous ayons (subjonctif de haber)","word":"hayamos"},"es:fallido":{"ef":2.5,"interval":18,"reps":3,"due":1795201128238,"lang":"es","st":"review","s":18.93964969285846,"d":2.115868880622067,"step":null,"lr":1793645928238,"fr":"Raté / Manqué / Échoué / Défaillant","word":"fallido"},"es:volver":{"ef":2.5,"interval":43,"reps":2,"due":1796943814624,"lang":"es","st":"review","s":40.58627864845573,"d":1,"step":null,"lr":1793228614624,"fr":"Revenir / Retourner / Rentrer (o→ue, part. vuelto)","word":"volver"},"es:no me podía bajar":{"ef":2.5,"interval":11,"reps":5,"due":1794123634326,"lang":"es","st":"review","s":8.81885999203478,"d":7.817341443905074,"step":null,"lr":1793173234326,"fr":"Je ne pouvais pas descendre","word":"no me podía bajar"},"es:cualquier cosa":{"ef":2.5,"interval":5,"reps":7,"due":1794208949898,"lang":"es","st":"review","s":6.500209145497808,"d":8.39157486777631,"step":null,"lr":1793776949898,"lapses":1,"fr":"N'importe quoi","word":"cualquier cosa"},"es:meterse con":{"ef":2.5,"interval":2,"reps":7,"due":1793949798264,"lang":"es","st":"review","s":0.5950955744111587,"d":9.578222293391073,"step":null,"lr":1793776998264,"lapses":1,"fr":"S'en prendre à / Chercher des noises","word":"meterse con"},"es:Cenar":{"ef":2.5,"interval":42,"reps":2,"due":1796805486419,"lang":"es","st":"review","s":40.598450370273106,"d":1,"step":null,"lr":1793176686419,"fr":"Diner","word":"Cenar"},"es:Deber":{"ef":2.5,"interval":38,"reps":2,"due":1796456549091,"lang":"es","st":"review","s":40.4960902265532,"d":1,"step":null,"lr":1793173349091,"fr":"Devoir","word":"Deber"},"es:Oscuro":{"ef":2.5,"interval":43,"reps":2,"due":1796888466604,"lang":"es","st":"review","s":40.49308476598121,"d":1,"step":null,"lr":1793173266604,"fr":"Obscur","word":"Oscuro"},"es:lamentable":{"ef":2.5,"interval":43,"reps":2,"due":1796943853093,"lang":"es","st":"review","s":40.59904808183485,"d":1,"step":null,"lr":1793228653093,"fr":"Lamentable / Regrettable","word":"lamentable"},"es:cuidar":{"ef":2.5,"interval":46,"reps":3,"due":1797668627876,"lang":"es","st":"review","s":46.36715832268648,"d":2.115868880622067,"step":null,"lr":1793694227876,"fr":"Prendre soin / Garder / S'occuper de","word":"cuidar"},"es:amarilla":{"ef":2.5,"interval":14,"reps":4,"due":1794386346564,"lang":"es","st":"review","s":15.854562865760867,"d":5.19738462201156,"step":null,"lr":1793176746564,"fr":"Jaune (féminin)","word":"amarilla"},"es:ser capaz de":{"ef":2.5,"interval":43,"reps":2,"due":1796891814770,"lang":"es","st":"review","s":40.595915652735904,"d":1,"step":null,"lr":1793176614770,"fr":"Être capable de + infinitif","word":"ser capaz de"},"es:vecindario":{"ef":2.5,"interval":39,"reps":2,"due":1796542870372,"lang":"es","st":"review","s":40.493571187406424,"d":1,"step":null,"lr":1793173270372,"fr":"Voisinage","word":"vecindario"},"es:súmale que…":{"ef":2.5,"interval":45,"reps":2,"due":1797116628116,"lang":"es","st":"review","s":42.16417424186612,"d":1,"step":null,"lr":1793228628116,"fr":"Ajoute à ça que… (oral)","word":"súmale que…"},"es:bajar":{"ef":2.5,"interval":41,"reps":2,"due":1796715663537,"lang":"es","st":"review","s":40.49306858055921,"d":1,"step":null,"lr":1793173263537,"fr":"Descendre / Baisser","word":"bajar"},"es:Decir":{"ef":2.5,"interval":43,"reps":2,"due":1796891913403,"lang":"es","st":"review","s":40.59811246560072,"d":1,"step":null,"lr":1793176713403,"fr":"Dire","word":"Decir"},"es:casi":{"ef":2.5,"interval":23,"reps":3,"due":1795163819862,"lang":"es","st":"review","s":23.550159200245385,"d":2.115868880622067,"step":null,"lr":1793176619862,"fr":"Presque / Failli (faire qqch)","word":"casi"},"es:al día de hoy":{"ef":2.5,"interval":38,"reps":2,"due":1796456686560,"lang":"es","st":"review","s":38.87036006792473,"d":1,"step":null,"lr":1793173486560,"fr":"Au jour d'aujourd'hui / À ce jour","word":"al día de hoy"},"es:estado fallido":{"ef":2.5,"interval":42,"reps":2,"due":1796805541589,"lang":"es","st":"review","s":40.599499214779264,"d":1,"step":null,"lr":1793176741589,"fr":"État défaillant / Failli (géopolitique)","word":"estado fallido"},"es:Cierto":{"ef":2.5,"interval":22,"reps":3,"due":1795074158199,"lang":"es","st":"review","s":23.504466339406182,"d":2.115868880622067,"step":null,"lr":1793173358199,"fr":"Certain","word":"Cierto"},"es:arrugar":{"ef":2.5,"interval":4,"reps":7,"due":1794061853380,"lang":"es","st":"review","s":6.09439078222537,"d":8.353564165987416,"step":null,"lr":1793716253380,"fr":"Froisser / Plisser / Rider","word":"arrugar"},"es:sumar":{"ef":2.5,"interval":18,"reps":3,"due":1795201123881,"lang":"es","st":"review","s":18.93964890820981,"d":2.115868880622067,"step":null,"lr":1793645923881,"fr":"Additionner / Ajouter","word":"sumar"},"es:ladrón ladrona":{"ef":2.5,"interval":39,"reps":2,"due":1796542937499,"lang":"es","st":"review","s":40.49476032452936,"d":1,"step":null,"lr":1793173337499,"fr":"Voleur, voleuse","word":"ladrón ladrona"},"es:cruzarse":{"ef":2.5,"interval":50,"reps":3,"due":1798036274011,"lang":"es","st":"review","s":46.858806160008285,"d":2.115868880622067,"step":null,"lr":1793716274011,"fr":"Se croiser / Se rencontrer par hasard","word":"cruzarse"},"es:adentrarse en":{"ef":2.5,"interval":46,"reps":2,"due":1797203011664,"lang":"es","st":"review","s":42.16270437952741,"d":1,"step":null,"lr":1793228611664,"fr":"Entrer dans","word":"adentrarse en"},"es:estar de moda":{"ef":2.5,"interval":49,"reps":3,"due":1798010341023,"lang":"es","st":"review","s":48.187547845669954,"d":2.115868880622067,"step":null,"lr":1793776741023,"fr":"Être à la mode","word":"estar de moda"},"es:ha cogido":{"ef":2.5,"interval":41,"reps":2,"due":1796715853611,"lang":"es","st":"review","s":40.497117086611254,"d":1,"step":null,"lr":1793173453611,"fr":"Il a pris (passé composé)","word":"ha cogido"},"es:Disfrutar":{"ef":2.5,"interval":42,"reps":2,"due":1796802185734,"lang":"es","st":"review","s":40.49430594789799,"d":1,"step":null,"lr":1793173385734,"fr":"Profiter de","word":"Disfrutar"},"es:Lente":{"ef":2.5,"interval":4,"reps":7,"due":1794122368741,"lang":"es","st":"review","s":3.9280025856780187,"d":8.78511710907778,"step":null,"lr":1793776768741,"lapses":1,"fr":"Lentille","word":"Lente"},"es:montar":{"ef":2.5,"interval":1,"reps":7,"due":1793865718695,"lang":"es","st":"review","s":0.6758447180077014,"d":9.124029795043116,"step":null,"lr":1793779318695,"lapses":2,"fr":"litt. Monter / Organiser / fig. (argot) sens sexuel","word":"montar"},"es:Checar":{"ef":2.5,"interval":17,"reps":5,"due":1794642098618,"lang":"es","st":"review","s":18.968737109131666,"d":5.095746679358315,"step":null,"lr":1793173298618,"fr":"Vérifier","word":"Checar"},"es:Robar":{"ef":2.5,"interval":43,"reps":2,"due":1796891846462,"lang":"es","st":"review","s":40.594790987885325,"d":1,"step":null,"lr":1793176646462,"fr":"Voler","word":"Robar"},"es:hace poco":{"ef":2.5,"interval":57,"reps":2,"due":1798570731469,"lang":"es","st":"review","s":51.80649304759086,"d":1,"step":null,"lr":1793645931469,"fr":"Il y a peu / Récemment","word":"hace poco"},"es:viva":{"ef":2.5,"interval":36,"reps":2,"due":1796283817155,"lang":"es","st":"review","s":40.49534405013475,"d":1,"step":null,"lr":1793173417155,"fr":"En vie / Vivant(e)","word":"viva"},"es:y punto":{"ef":2.5,"interval":19,"reps":5,"due":1794814884939,"lang":"es","st":"review","s":18.990038117660443,"d":5.095746679358315,"step":null,"lr":1793173284939,"fr":"Et voilà / Point final (expression)","word":"y punto"},"es:según":{"ef":2.5,"interval":19,"reps":4,"due":1795418324488,"lang":"es","st":"review","s":15.918865115207897,"d":6.397076334486701,"step":null,"lr":1793776724488,"fr":"Selon / D'après / Ça dépend","word":"según"},"es:comerse":{"ef":2.5,"interval":40,"reps":2,"due":1796632719469,"lang":"es","st":"review","s":40.59404024345166,"d":1,"step":null,"lr":1793176719469,"fr":"litt. Se manger / fig. Se taper / S'envoyer (intensif)","word":"comerse"},"es:pasado de moda":{"ef":2.5,"interval":12,"reps":3,"due":1794166198995,"lang":"es","st":"review","s":11.100398939658506,"d":6.4024788133,"step":null,"lr":1793129398995,"fr":"Démodé","word":"pasado de moda"},"es:cogidos":{"ef":2.5,"interval":11,"reps":6,"due":1794727188423,"lang":"es","st":"review","s":9.315242645160147,"d":7.380726331555134,"step":null,"lr":1793776788423,"lapses":1,"fr":"Attrapés / Pris","word":"cogidos"},"es:joya":{"ef":2.5,"interval":32,"reps":3,"due":1795938246981,"lang":"es","st":"review","s":31.94459288971347,"d":1,"step":null,"lr":1793173446981,"fr":"Bijou · (fig.) Perle, trésor","word":"joya"},"es:plantilla":{"ef":2.5,"interval":1,"reps":15,"due":1794063395258,"lang":"es","st":"review","s":0.03178446562192409,"d":9.97276640629005,"step":null,"lr":1793976995258,"lapses":3,"fr":"litt. Modèle / Gabarit / fig. Effectif / Équipe (foot)","word":"plantilla"},"es:vez":{"ef":2.5,"interval":39,"reps":3,"due":1796543030090,"lang":"es","st":"review","s":42.00544889659471,"d":1,"step":null,"lr":1793173430090,"fr":"Fois","word":"vez"},"es:vergüencita":{"ef":2.5,"interval":11,"reps":7,"due":1794727405684,"lang":"es","st":"review","s":8.742216654655616,"d":8.78511710907778,"step":null,"lr":1793777005684,"lapses":1,"fr":"Petite honte (diminutif affectif)","word":"vergüencita"},"es:ido corriendo":{"ef":2.5,"interval":1,"reps":9,"due":1793863235100,"lang":"es","st":"review","s":0.8240901755677361,"d":9.88585024326539,"step":null,"lr":1793776835100,"lapses":1,"fr":"Parti en courant","word":"ido corriendo"},"es:daños colaterales":{"ef":2.5,"interval":64,"reps":2,"due":1798703033769,"lang":"es","st":"review","s":68.59692970021558,"d":1,"step":null,"lr":1793173433769,"fr":"Dommages collatéraux","word":"daños colaterales"},"es:trompada":{"ef":2.5,"interval":2,"reps":8,"due":1794072227184,"lang":"es","st":"review","s":1.283564559026957,"d":9.182471201003748,"step":null,"lr":1793899427184,"lapses":1,"fr":"Coup de poing / Pain (argot)","word":"trompada"},"es:ahora":{"ef":2.5,"interval":62,"reps":2,"due":1798530189318,"lang":"es","st":"review","s":65.55212255890166,"d":1,"step":null,"lr":1793173389318,"fr":"Maintenant","word":"ahora"},"es:maduro":{"ef":2.5,"interval":40,"reps":2,"due":1796629371577,"lang":"es","st":"review","s":38.855401479370734,"d":1,"step":null,"lr":1793173371577,"fr":"Mûr (fruit, personne mature)","word":"maduro"},"es:alejamiento":{"ef":2.5,"interval":2,"reps":11,"due":1794072268866,"lang":"es","st":"review","s":1.6609339407144157,"d":9.899973046009125,"step":null,"lr":1793899468866,"fr":"Éloignement","word":"alejamiento"},"es:Propio":{"ef":2.5,"interval":10,"reps":4,"due":1794093829818,"lang":"es","st":"review","s":10.436933806844076,"d":6.397076334486701,"step":null,"lr":1793229829818,"fr":"Propre","word":"Propio"},"es:allí":{"ef":2.5,"interval":22,"reps":4,"due":1795074192204,"lang":"es","st":"review","s":20.407872683711744,"d":5.099846525884199,"step":null,"lr":1793173392204,"fr":"Là-bas","word":"allí"},"es:golpe de suerte":{"ef":2.5,"interval":4,"reps":7,"due":1794061849441,"lang":"es","st":"review","s":3.8677078532024067,"d":8.779102428069129,"step":null,"lr":1793716249441,"fr":"Coup de chance","word":"golpe de suerte"},"es:cancha":{"ef":2.5,"interval":1,"reps":5,"due":1793865727967,"lang":"es","st":"review","s":0.9238124675218814,"d":8.800710729826703,"step":null,"lr":1793779327967,"lapses":1,"fr":"Terrain","word":"cancha"},"es:no me aclaro":{"ef":2.5,"interval":19,"reps":3,"due":1795418506868,"lang":"es","st":"review","s":20.41861874841655,"d":2.115868880622067,"step":null,"lr":1793776906868,"fr":"(fam.) Je m'y perds / Je n'y comprends rien","word":"no me aclaro"},"es:roble":{"ef":2.5,"interval":2,"reps":7,"due":1793866997282,"lang":"es","st":"review","s":1.846996990549385,"d":9.566186910672062,"step":null,"lr":1793694197282,"fr":"Chêne","word":"roble"},"es:qué vergüenza":{"ef":2.5,"interval":18,"reps":3,"due":1795332243208,"lang":"es","st":"review","s":19.78226728139427,"d":2.115868880622067,"step":null,"lr":1793777043208,"fr":"Quelle honte !","word":"qué vergüenza"},"es:partirse":{"ef":2.5,"interval":1,"reps":14,"due":1794063368881,"lang":"es","st":"review","s":0.06680333750378592,"d":9.959170624999699,"step":null,"lr":1793976968881,"lapses":2,"fr":"Se tordre de rire","word":"partirse"},"es:dar un paseo":{"ef":2.5,"interval":2,"reps":6,"due":1794072345848,"lang":"es","st":"review","s":2.0967048158257344,"d":8.366945792788858,"step":null,"lr":1793899545848,"lapses":1,"fr":"Faire une promenade","word":"dar un paseo"},"es:quitarse un peso de encima":{"ef":2.5,"interval":2,"reps":9,"due":1794072337614,"lang":"es","st":"review","s":0.49880201334272944,"d":9.731383642000134,"step":null,"lr":1793899537614,"lapses":1,"fr":"(fig.) Se libérer d'un poids","word":"quitarse un peso de encima"},"es:Seno":{"ef":2.5,"interval":8,"reps":1,"due":1793955850449,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793264650449,"fr":"Sein","word":"Seno"},"es:ninguna":{"ef":2.5,"interval":10,"reps":1,"due":1794128643553,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793264643553,"fr":"Aucune","word":"ninguna"},"es:esperar":{"ef":2.5,"interval":9,"reps":1,"due":1794042247092,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793264647092,"fr":"Attendre / Espérer","word":"esperar"},"es:matar":{"ef":2.5,"interval":4,"reps":4,"due":1794122374363,"lang":"es","st":"review","s":3.9476539375455975,"d":6.397076334486701,"step":null,"lr":1793776774363,"fr":"Tuer","word":"matar"},"es:descarte":{"ef":2.5,"interval":1,"reps":9,"due":1794008921315,"lang":"es","st":"review","s":0.10698511639441312,"d":9.859407816844008,"step":null,"lr":1793922521315,"lapses":2,"fr":"Rejet / Écart / Défausse (cartes)","word":"descarte"},"es:aclararse":{"ef":2.5,"interval":4,"reps":5,"due":1794245044565,"lang":"es","st":"review","s":3.0540985152549336,"d":7.387113445000134,"step":null,"lr":1793899444565,"lapses":1,"fr":"S'éclaircir (temps) / Y voir clair","word":"aclararse"},"es:cuidado":{"ef":2.5,"interval":21,"reps":3,"due":1795591134317,"lang":"es","st":"review","s":19.45170616331446,"d":2.115868880622067,"step":null,"lr":1793776734317,"fr":"Attention ! / Soin / Précaution / Souci","word":"cuidado"},"es:secar":{"ef":2.5,"interval":1,"reps":7,"due":1794063374862,"lang":"es","st":"review","s":0.12058895872919517,"d":9.588204970289013,"step":null,"lr":1793976974862,"lapses":2,"fr":"litt. Sécher / fig. Ignorer / Ghoster (argot)","word":"secar"},"es:¡joya!":{"ef":2.5,"interval":20,"reps":3,"due":1795444224611,"lang":"es","st":"review","s":18.223964116409213,"d":2.115868880622067,"step":null,"lr":1793716224611,"fr":"(argot 🇦🇷🇺🇾) Super ! Génial !","word":"¡joya!"},"es:especulaciones":{"ef":2.5,"interval":6,"reps":1,"due":1793910281521,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793391881521,"fr":"Spéculation","word":"especulaciones"},"es:pedir salir a alguien":{"ef":2.5,"interval":21,"reps":3,"due":1795530643281,"lang":"es","st":"review","s":18.22443099831552,"d":2.115868880622067,"step":null,"lr":1793716243281,"fr":"Demander à qqn de sortir avec soi","word":"pedir salir a alguien"},"es:así":{"ef":2.5,"interval":29,"reps":3,"due":1796282383477,"lang":"es","st":"review","s":25.770418080212227,"d":1,"step":null,"lr":1793776783477,"fr":"Comme ça","word":"así"},"es:sacarle X a alguien":{"ef":2.5,"interval":1,"reps":7,"due":1793884951428,"lang":"es","st":"review","s":0.09837163770479847,"d":9.45148902916444,"step":null,"lr":1793798551428,"lapses":1,"fr":"Avoir X d'avance (âge, dist., pts)","word":"sacarle X a alguien"},"es:desarrollo":{"ef":2.5,"interval":29,"reps":2,"due":1796282734817,"lang":"es","st":"review","s":32.163553410522084,"d":1,"step":null,"lr":1793777134817,"fr":"Développement","word":"desarrollo"},"es:Vaso":{"ef":2.5,"interval":18,"reps":3,"due":1795332041916,"lang":"es","st":"review","s":19.452969863035744,"d":2.115868880622067,"step":null,"lr":1793776841916,"fr":"Verre","word":"Vaso"},"es:hasta":{"ef":2.5,"interval":14,"reps":3,"due":1794859060371,"lang":"es","st":"review","s":16.719751145736357,"d":2.115868880622067,"step":null,"lr":1793649460371,"fr":"Jusqu'à / Même","word":"hasta"},"es:acoger":{"ef":2.5,"interval":1,"reps":12,"due":1794008918076,"lang":"es","st":"review","s":0.050070477388673276,"d":9.948574362411959,"step":null,"lr":1793922518076,"lapses":2,"fr":"Accueillir / Recevoir chaleureusement","word":"acoger"},"es:cara":{"ef":2.5,"interval":10,"reps":1,"due":1794176966454,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793312966454,"fr":"Visage / Tête","word":"cara"},"es:Rol":{"ef":2.5,"interval":9,"reps":1,"due":1794090551755,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793312951755,"fr":"Rôle","word":"Rol"},"es:bastar":{"ef":2.5,"interval":10,"reps":4,"due":1794513464673,"lang":"es","st":"review","s":9.324965465818952,"d":5.099846525884199,"step":null,"lr":1793649464673,"fr":"Suffire","word":"bastar"},"es:significar":{"ef":2.5,"interval":8,"reps":1,"due":1794004154543,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793312954543,"fr":"Signifier / Vouloir dire","word":"significar"},"es:sano como un roble":{"ef":2.5,"interval":5,"reps":4,"due":1794077926204,"lang":"es","st":"review","s":3.501770676538059,"d":6.397076334486701,"step":null,"lr":1793645926204,"fr":"Sain comme un chêne / En pleine forme","word":"sano como un roble"},"es:Ambicioso":{"ef":2.5,"interval":10,"reps":1,"due":1794176973209,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793312973209,"fr":"Ambitieux","word":"Ambicioso"},"es:altibajos":{"ef":2.5,"interval":28,"reps":2,"due":1796196358360,"lang":"es","st":"review","s":30.982191640174637,"d":1,"step":null,"lr":1793777158360,"fr":"Hauts et bas","word":"altibajos"},"es:asustar":{"ef":2.5,"interval":1,"reps":7,"due":1793884961158,"lang":"es","st":"review","s":0.0769754107398321,"d":9.713688246939407,"step":null,"lr":1793798561158,"lapses":1,"fr":"Faire peur / Effrayer","word":"asustar"},"es:sumarse a":{"ef":2.5,"interval":1,"reps":5,"due":1794063378487,"lang":"es","st":"review","s":0.4516313624566339,"d":8.37432011290176,"step":null,"lr":1793976978487,"fr":"Se joindre à","word":"sumarse a","lapses":1},"es:agarrarse":{"ef":2.5,"interval":0,"reps":9,"due":1793977862594,"lang":"es","st":"relearning","s":0.025236152073410508,"d":9.921677978013195,"step":0,"lr":1793976962594,"fr":"S'attraper / En venir aux mains","word":"agarrarse","lapses":1},"es:descuidar":{"ef":2.5,"interval":0,"reps":0,"due":1793313033766,"lang":"es","st":"new","fr":"Négliger / Ne pas faire attention","word":"descuidar"},"es:la aclaración":{"ef":2.5,"interval":0,"reps":0,"due":1793313033766,"lang":"es","st":"new","fr":"La clarification / La précision","word":"la aclaración"},"es:fallo técnico":{"ef":2.5,"interval":25,"reps":3,"due":1795936961821,"lang":"es","st":"review","s":24.856092205295656,"d":1,"step":null,"lr":1793776961821,"fr":"Problème technique / Panne","word":"fallo técnico"},"es:delantero":{"ef":2.5,"interval":13,"reps":4,"due":1794900190350,"lang":"es","st":"review","s":10.740171737936995,"d":5.099846525884199,"step":null,"lr":1793776990350,"fr":"litt. Avant / De devant / fig. Attaquant (foot)","word":"delantero"},"es:ponerse + emoción":{"ef":2.5,"interval":2,"reps":6,"due":1793949894792,"lang":"es","st":"review","s":0.8433749849296204,"d":8.792910019096876,"step":null,"lr":1793777094792,"lapses":1,"fr":"Devenir (changement passager : humeur, couleur)","word":"ponerse + emoción"},"es:basta":{"ef":2.5,"interval":2,"reps":2,"due":1793952139147,"lang":"es","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793779339147,"fr":"Ça suffit ! / Stop !","word":"basta"},"es:Faltar":{"ef":2.5,"interval":27,"reps":2,"due":1796109827700,"lang":"es","st":"review","s":30.97396765332829,"d":1,"step":null,"lr":1793777027700,"fr":"Manquer","word":"Faltar"},"es:quitarse años":{"ef":2.5,"interval":0,"reps":0,"due":1793313033766,"lang":"es","st":"new","fr":"(fig.) Se rajeunir / Mentir sur son âge","word":"quitarse años"},"es:empatar":{"ef":2.5,"interval":9,"reps":1,"due":1794090667785,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793313067785,"fr":"Égaliser / Faire match nul","word":"empatar"},"es:desatar":{"ef":2.5,"interval":0,"reps":3,"due":1793923114109,"lang":"es","st":"learning","fr":"Déclencher","word":"desatar","s":0.1031406500778523,"d":8.804264023460439,"step":1,"lr":1793922514109},"es:enterarse":{"ef":2.5,"interval":1,"reps":6,"due":1793866050745,"lang":"es","st":"review","s":0.06793292642198036,"d":9.449610645434934,"step":null,"lr":1793779650745,"fr":"Apprendre (une info) / Se rendre compte / Être au courant","word":"enterarse"},"es:capacitar":{"ef":2.5,"interval":10,"reps":1,"due":1794178376661,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793314376661,"fr":"Former / Habiliter","word":"capacitar"},"es:pillar":{"ef":2.5,"interval":1,"reps":3,"due":1793865770434,"lang":"es","st":"review","s":0.2842063592758949,"d":6.4024788133,"step":null,"lr":1793779370434,"fr":"Coincer / Surprendre en flagrant délit","word":"pillar"},"es:quitar":{"ef":2.5,"interval":0,"reps":0,"due":1793314290202,"lang":"es","st":"new","fr":"Enlever / Retirer / Ôter (≠ quitter !)","word":"quitar"},"es:estampado":{"ef":2.5,"interval":28,"reps":2,"due":1796196264839,"lang":"es","st":"review","s":30.926767444934796,"d":1,"step":null,"lr":1793777064839,"fr":"Imprimé / À motifs (adj.)","word":"estampado"},"es:el estampado":{"ef":2.5,"interval":0,"reps":0,"due":1793314290203,"lang":"es","st":"new","fr":"L'imprimé / Le motif","word":"el estampado"},"es:estampar":{"ef":2.5,"interval":0,"reps":0,"due":1793314290203,"lang":"es","st":"new","fr":"Imprimer / Apposer · (fam.) Projeter contre","word":"estampar"},"es:llevar + gerundio":{"ef":2.5,"interval":10,"reps":1,"due":1794178317194,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793314317194,"fr":"Ça fait [durée] que… (action qui continue)","word":"llevar + gerundio"},"es:se lleva diciendo":{"ef":2.5,"interval":9,"reps":1,"due":1794091935691,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793314335691,"fr":"On le dit depuis longtemps","word":"se lleva diciendo"},"es:llevar sin + infinitivo":{"ef":2.5,"interval":3,"reps":3,"due":1794038673077,"lang":"es","st":"review","s":2.306519807417651,"d":2.115868880622067,"step":null,"lr":1793779473077,"fr":"Ça fait [durée] que je ne… pas","word":"llevar sin + infinitivo"},"es:aclarar":{"ef":2.5,"interval":0,"reps":0,"due":1793314290203,"lang":"es","st":"new","fr":"Clarifier / Éclaircir / Rincer","word":"aclarar"},"es:Quedar":{"ef":2.5,"interval":2,"reps":2,"due":1793952258001,"lang":"es","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793779458001,"fr":"Rester","word":"Quedar"},"es:el tonito":{"ef":2.5,"interval":10,"reps":1,"due":1794178353675,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793314353675,"fr":"Le petit ton (condescendant, ironique)","word":"el tonito"},"es:ocasionar":{"ef":2.5,"interval":2,"reps":2,"due":1793952243790,"lang":"es","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793779443790,"fr":"Occasionner / Causer (soutenu)","word":"ocasionar"},"es:junto a alguien":{"ef":2.5,"interval":9,"reps":1,"due":1794091951013,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793314351013,"fr":"À côté de / Aux côtés de qqn","word":"junto a alguien"},"es:vencer":{"ef":2.5,"interval":0,"reps":0,"due":1793314290203,"lang":"es","st":"new","fr":"Vaincre / Battre · (fig.) Expirer, arriver à échéance","word":"vencer"},"es:el vencimiento":{"ef":2.5,"interval":1,"reps":3,"due":1793865835930,"lang":"es","st":"review","s":0.2842063592758949,"d":6.4024788133,"step":null,"lr":1793779435930,"fr":"L'échéance / La date d'expiration","word":"el vencimiento"},"es:por cierto":{"ef":2.5,"interval":1,"reps":6,"due":1793884984853,"lang":"es","st":"review","s":0.10549135449459497,"d":8.918920337562223,"step":null,"lr":1793798584853,"fr":"D'ailleurs / Au fait","word":"por cierto"},"es:meter":{"ef":2.5,"interval":0,"reps":0,"due":1793314311795,"lang":"es","st":"new","fr":"Mettre dans / Fourrer","word":"meter"},"es:plegar":{"ef":2.5,"interval":2,"reps":5,"due":1794072262016,"lang":"es","st":"review","s":1.482194503395653,"d":7.59318162977006,"step":null,"lr":1793899462016,"fr":"Plier","word":"plegar"},"es:vaya":{"ef":2.5,"interval":2,"reps":2,"due":1793952250412,"lang":"es","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793779450412,"fr":"Bref / Disons / Quoi (marqueur discursif)","word":"vaya"},"es:primera vez":{"ef":2.5,"interval":10,"reps":1,"due":1794178326419,"lang":"es","st":"review","s":8.2956,"d":1,"step":null,"lr":1793314326419,"fr":"Première fois","word":"primera vez"},"es:me da vergüenza":{"ef":2.5,"interval":2,"reps":2,"due":1793952167438,"lang":"es","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793779367438,"fr":"Ça me fait honte / Je suis gêné(e)","word":"me da vergüenza"},"es:ponerse firme":{"ef":2.5,"interval":0,"reps":0,"due":1793314311795,"lang":"es","st":"new","fr":"Se mettre au garde-à-vous (militaire)","word":"ponerse firme"},"es:aclarar dudas":{"ef":2.5,"interval":0,"reps":0,"due":1793314311795,"lang":"es","st":"new","fr":"Lever les doutes / Répondre aux questions","word":"aclarar dudas"},"es:se me había olvidado":{"ef":2.5,"interval":1,"reps":3,"due":1793884955425,"lang":"es","st":"review","s":1.3747341809338107,"d":4.754871489116483,"step":null,"lr":1793798555425,"fr":"J'avais oublié (plus-que-parfait)","word":"se me había olvidado"},"es:recuerdo":{"ef":2.5,"interval":1,"reps":3,"due":1793865847592,"lang":"es","st":"review","s":0.2842063592758949,"d":6.4024788133,"step":null,"lr":1793779447592,"fr":"Je me souviens (présent de recordar)","word":"recuerdo"},"en:Fierce":{"ef":2.5,"interval":1,"reps":3,"due":1794076887862,"lang":"en","word":"Fierce","fr":"Féroce","st":"review","s":0.2842063592758949,"d":6.4024788133,"step":null,"lr":1793990487862},"en:carry [sth] out":{"ef":2.5,"interval":3,"reps":4,"due":1794249776145,"lang":"en","word":"carry [sth] out","fr":"Emporter / Exécuter [qqch]","st":"review","s":3.2600230217253694,"d":6.737757789700338,"step":null,"lr":1793990576145},"en:a rip-off":{"ef":2.5,"interval":1,"reps":5,"due":1794076857740,"lang":"en","word":"a rip-off","fr":"Une arnaque (fam.)","st":"review","s":0.0735395661926385,"d":9.583345017361768,"step":null,"lr":1793990457740},"en:To take the stage":{"ef":2.5,"interval":0,"reps":0,"due":1793777730140,"lang":"en","word":"To take the stage","fr":"Prendre la scène / Attirer l'attention","st":"new"},"en:To eavesdrop":{"ef":2.5,"interval":0,"reps":0,"due":1793777730140,"lang":"en","word":"To eavesdrop","fr":"Espionner / Écouter discrètement","st":"new"},"en:Earnestly":{"ef":2.5,"interval":1,"reps":5,"due":1794076861306,"lang":"en","word":"Earnestly","fr":"Sérieusement","st":"review","s":0.07353923833633884,"d":9.583345017361768,"step":null,"lr":1793990461306},"en:to gut":{"ef":2.5,"interval":1,"reps":3,"due":1794076877249,"lang":"en","word":"to gut","fr":"Vider entièrement · (fig.) vider de sa substance","st":"review","s":0.2842063592758949,"d":6.4024788133,"step":null,"lr":1793990477249},"en:friends in high places":{"ef":2.5,"interval":2,"reps":3,"due":1794162635275,"lang":"en","word":"friends in high places","fr":"Avoir le bras long (des relations haut placées)","st":"review","s":2.2934456664466207,"d":6.4024788133,"step":null,"lr":1793989835275},"en:add-on":{"ef":2.5,"interval":8,"reps":2,"due":1794615096346,"lang":"en","word":"add-on","fr":"litt. Ajout / fig. Module / Extension / Supplément","st":"review","s":9.90488025757956,"d":2.1169858664885557,"step":null,"lr":1793923896346},"en:to scorch":{"ef":2.5,"interval":0,"reps":0,"due":1793777730140,"lang":"en","word":"to scorch","fr":"Brûler légèrement / Roussir / Carboniser","st":"new"},"es:asignar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"asignar","fr":"Affecter","st":"new"},"es:adherir":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"adherir","fr":"Coller","st":"new"},"es:enamorar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"enamorar","fr":"Séduire / rendre amoureux","st":"new"},"es:Rato":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Rato","fr":"Moment, instant","st":"new"},"es:adueñarse de":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"adueñarse de","fr":"S'emparer de / s'approprier de","st":"new"},"es:rebote":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"rebote","fr":"Rebond","st":"new"},"es:luego de":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"luego de","fr":"Après","st":"new"},"es:Animar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Animar","fr":"Encourager","st":"new"},"es:Pesado":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Pesado","fr":"Lourd","st":"new"},"es:Respeto":{"ef":2.5,"interval":10,"reps":1,"due":1794643509173,"lang":"es","word":"Respeto","fr":"Respect","st":"review","s":8.2956,"d":1,"step":null,"lr":1793779509173},"es:enfadado":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"enfadado","fr":"En colère","st":"new"},"es:Tras":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Tras","fr":"Après","st":"new"},"es:De acuerdo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"De acuerdo","fr":"D'accord / Ok","st":"new"},"es:Joven":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Joven","fr":"Jeune","st":"new"},"es:esos":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"esos","fr":"Ces / Ceux-là","st":"new"},"es:Helado":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Helado","fr":"Glace (crème)","st":"new"},"es:Obra":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Obra","fr":"Chantier","st":"new"},"es:Clave":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Clave","fr":"Clé","st":"new"},"es:guardados":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"guardados","fr":"Gardés","st":"new"},"es:Pues":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Pues","fr":"Car / Parce que","st":"new"},"es:agradecer":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"agradecer","fr":"Remercier","st":"new"},"es:adivinar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"adivinar","fr":"Deviner","st":"new"},"es:Luchar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Luchar","fr":"Combattre","st":"new"},"es:Apoyar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Apoyar","fr":"Soutenir","st":"new"},"es:aquel aquella":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"aquel aquella","fr":"Celui-là, celle-là","st":"new"},"es:Jaque":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Jaque","fr":"Échec (échecs)","st":"new"},"es:Guapo":{"ef":2.5,"interval":10,"reps":1,"due":1794763524550,"lang":"es","word":"Guapo","fr":"Beau","st":"review","s":8.2956,"d":1,"step":null,"lr":1793899524550},"es:Tierra":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Tierra","fr":"Terre","st":"new"},"es:demasiado":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"demasiado","fr":"Trop de","st":"new"},"es:movimiento":{"ef":2.5,"interval":2,"reps":2,"due":1793952437834,"lang":"es","word":"movimiento","fr":"Mouvement","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793779637834},"es:sonar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"sonar","fr":"Sonner","st":"new"},"es:confundir con":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"confundir con","fr":"Confondre avec","st":"new"},"es:Jabón":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Jabón","fr":"Savon","st":"new"},"es:dentro":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"dentro","fr":"À l'intérieur","st":"new"},"es:Empezar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Empezar","fr":"Commencer","st":"new"},"es:Pelear":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Pelear","fr":"Se battre","st":"new"},"es:Tarea":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Tarea","fr":"Tâche","st":"new"},"es:Charlar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"Charlar","fr":"Discuter","st":"new"},"es:más allá":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"más allá","fr":"Plus loin / Au-delà","st":"new"},"es:girarse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"girarse","fr":"Se retourner","st":"new"},"es:agachado":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"agachado","fr":"Accroupi / Baissé","st":"new"},"es:sepas":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"sepas","fr":"Que tu saches (subjonctif de saber)","st":"new"},"es:robándote":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"robándote","fr":"En train de te voler","st":"new"},"es:cogiéndote":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"cogiéndote","fr":"En train de te prendre","st":"new"},"es:acordarse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"acordarse","fr":"Se souvenir","st":"new"},"es:chaval":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"chaval","fr":"Gamin / Mec (argot)","st":"new"},"es:olvidarse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"olvidarse","fr":"Oublier","st":"new"},"es:rogar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"rogar","fr":"Supplier / Implorer","st":"new"},"es:seguir":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"seguir","fr":"Suivre / Continuer","st":"new"},"es:súbete":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"súbete","fr":"Monte ! (impératif pronominal)","st":"new"},"es:ventanilla":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"ventanilla","fr":"Guichet / Vitre de voiture","st":"new"},"es:tanto":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"tanto","fr":"Tellement / Autant","st":"new"},"es:serie":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"serie","fr":"Série","st":"new"},"es:cuántos":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"cuántos","fr":"Combien (de)","st":"new"},"es:mantenerse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"mantenerse","fr":"Se maintenir / Rester","st":"new"},"es:industria":{"ef":2.5,"interval":8,"reps":1,"due":1794590707356,"lang":"es","word":"industria","fr":"Industrie","st":"review","s":8.2956,"d":1,"step":null,"lr":1793899507356},"es:para ti":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"para ti","fr":"Pour toi","st":"new"},"es:inicio":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"inicio","fr":"Accueil / Début","st":"new"},"es:amigos":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"amigos","fr":"Amis","st":"new"},"es:mensajes":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"mensajes","fr":"Messages","st":"new"},"es:perfil":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"perfil","fr":"Profil","st":"new"},"es:escudo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"escudo","fr":"Bouclier / Écu","st":"new"},"es:pirarse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"pirarse","fr":"Se barrer / Se tirer (argot)","st":"new"},"es:sudar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"sudar","fr":"Transpirer / Suer","st":"new"},"es:me suda":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"me suda","fr":"fig. Je m'en fous","st":"new"},"es:tocar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"tocar","fr":"Toucher / Être l'heure de (impersonnel)","st":"new"},"es:levantarse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"levantarse","fr":"Se lever","st":"new"},"es:poco":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"poco","fr":"Peu / Un peu","st":"new"},"es:durante":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"durante","fr":"Pendant / Durant","st":"new"},"es:minuto":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"minuto","fr":"Minute","st":"new"},"es:memoria":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"memoria","fr":"Mémoire","st":"new"},"es:eso":{"ef":2.5,"interval":2,"reps":2,"due":1793952435332,"lang":"es","word":"eso","fr":"Ça / Cela","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793779635332},"es:aburrido":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"aburrido","fr":"Ennuyeux / Ennuyé (avec estar = s'ennuyer)","st":"new"},"es:mezclarse":{"ef":2.5,"interval":2,"reps":2,"due":1794095324847,"lang":"es","word":"mezclarse","fr":"fig. Se mélanger / Mingler","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793922524847},"es:socializar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"socializar","fr":"Socialiser","st":"new"},"es:temporada":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"temporada","fr":"Saison (série TV / sport)","st":"new"},"es:estación":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"estación","fr":"Saison (météo : printemps, été…)","st":"new"},"es:parecer":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"parecer","fr":"Sembler / Paraître / Avoir l'air","st":"new"},"es:acojonar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"acojonar","fr":"Foutre les jetons / Terroriser / Faire flipper (argot vulgaire)","st":"new"},"es:comunidad":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"comunidad","fr":"Communauté","st":"new"},"es:compartir":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"compartir","fr":"Partager","st":"new"},"es:un montón":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"un montón","fr":"Beaucoup / Un tas / Plein","st":"new"},"es:asustarse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"asustarse","fr":"Avoir peur / S'effrayer","st":"new"},"es:repaso":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"repaso","fr":"Révision / Relecture","st":"new"},"es:repasar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"repasar","fr":"Réviser / Relire","st":"new"},"es:tirar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"tirar","fr":"Lancer / Jeter / Tirer","st":"new"},"es:de repente":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"de repente","fr":"Tout à coup / Soudainement","st":"new"},"es:ganas":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"ganas","fr":"Envie / Désir / Motivation","st":"new"},"es:tener ganas de":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"tener ganas de","fr":"Avoir envie de","st":"new"},"es:trozo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"trozo","fr":"Morceau / Bout / Fragment","st":"new"},"es:joder":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"joder","fr":"litt. Baiser (vulgaire) / fig. Emmerder / Merde ! (exclamation)","st":"new"},"es:ha habido":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"ha habido","fr":"Il y a eu (passé composé de haber)","st":"new"},"es:madurar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"madurar","fr":"Mûrir (fruit, personne) / Évoluer","st":"new"},"es:madurez":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"madurez","fr":"Maturité","st":"new"},"es:picar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"picar","fr":"Piquer (insecte) / Démanger / Hacher / Picorer","st":"new"},"es:picarse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"picarse","fr":"fig. Se vexer / Se froisser (argot)","st":"new"},"es:meter la pata":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"meter la pata","fr":"fig. Gaffer / Faire une bourde","st":"new"},"es:lobo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"lobo","fr":"Loup","st":"new"},"es:loba":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"loba","fr":"Louve","st":"new"},"es:boca":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"boca","fr":"Bouche / Gueule","st":"new"},"es:boca del lobo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"boca del lobo","fr":"fig. Gueule du loup (lieu très dangereux)","st":"new"},"es:bromear":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"bromear","fr":"Plaisanter / Blaguer","st":"new"},"es:es broma":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"es broma","fr":"C'est une blague ! / Je rigole !","st":"new"},"es:llegar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"llegar","fr":"Arriver / Atteindre / Parvenir","st":"new"},"es:hoy":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"hoy","fr":"Aujourd'hui","st":"new"},"es:hoy en día":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"hoy en día","fr":"De nos jours","st":"new"},"es:pedazo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"pedazo","fr":"Morceau / Bout (intensificateur argot : pedazo de…)","st":"new"},"es:moda":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"moda","fr":"Mode / Tendance","st":"new"},"es:seguir modas":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"seguir modas","fr":"Suivre les modes / Suivre les tendances","st":"new"},"es:despliegue":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"despliegue","fr":"Déploiement","st":"new"},"es:traer":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"traer","fr":"Apporter / Amener (vers ici) ≠ llevar","st":"new"},"es:traído":{"ef":2.5,"interval":2,"reps":2,"due":1793952440687,"lang":"es","word":"traído","fr":"Apporté / Amené (participe passé)","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793779640687},"es:de golpe":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"de golpe","fr":"D'un coup / Soudainement","st":"new"},"es:ninguno":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"ninguno","fr":"Aucun (pronom / fin de phrase)","st":"new"},"es:cualquier":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"cualquier","fr":"N'importe quel (devant nom)","st":"new"},"es:cualquiera":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"cualquiera","fr":"N'importe lequel / Quiconque (pronom/fin de phrase)","st":"new"},"es:en cualquier momento":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"en cualquier momento","fr":"À tout moment","st":"new"},"es:simio":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"simio","fr":"Singe (registre + scientifique que mono)","st":"new"},"es:empate":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"empate","fr":"Match nul / Égalité (score)","st":"new"},"es:disparar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"disparar","fr":"Tirer (arme) / Tirer au but / Déclencher","st":"new"},"es:disparo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"disparo","fr":"Tir / Coup de feu","st":"new"},"es:dispararse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"dispararse","fr":"Se déclencher / S'envoler (prix)","st":"new"},"es:sano":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"sano","fr":"Sain / En bonne santé","st":"new"},"es:cuidarse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"cuidarse","fr":"Prendre soin de soi / Faire attention","st":"new"},"es:descuido":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"descuido","fr":"Négligence / Distraction / Étourderie","st":"new"},"es:descuida":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"descuida","fr":"Ne t'inquiète pas ! / T'inquiète ! (impératif)","st":"new"},"es:habría":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"habría","fr":"Il y aurait / J'aurais (conditionnel de haber)","st":"new"},"es:esposo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"esposo","fr":"Époux / Mari","st":"new"},"es:dolor de cabeza":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"dolor de cabeza","fr":"Mal de tête","st":"new"},"es:sin querer":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"sin querer","fr":"Sans le vouloir / Sans faire exprès","st":"new"},"es:ponerse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"ponerse","fr":"Se mettre / Devenir (forme pronominale de poner)","st":"new"},"es:pelota (persona)":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"pelota (persona)","fr":"Lèche-bottes / Flatteur (fig.)","st":"new"},"es:vergüenza":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"vergüenza","fr":"Honte / Gêne / Pudeur","st":"new"},"es:vergüenza ajena":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"vergüenza ajena","fr":"Honte par procuration / Cringe","st":"new"},"es:cansarse de":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"cansarse de","fr":"Se lasser de / En avoir marre de","st":"new"},"es:ola de calor":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"ola de calor","fr":"Vague de chaleur","st":"new"},"es:arrugarse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"arrugarse","fr":"Se froisser / Se rider / fig. Se dégonfler","st":"new"},"es:sino":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"sino","fr":"Mais (opposition après négation)","st":"new"},"es:no solo... sino también":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"no solo... sino también","fr":"Non seulement... mais aussi","st":"new"},"es:lo lamento":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"lo lamento","fr":"Je le regrette / Je suis désolé (soutenu)","st":"new"},"es:laísmo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"laísmo","fr":"Phénomène grammatical (la au lieu de le, Madrid)","st":"new"},"es:pegar fuerte":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"pegar fuerte","fr":"Cartonner / Marcher fort","st":"new"},"es:vienes":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"vienes","fr":"Tu viens (présent, tú)","st":"new"},"es:vengo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"vengo","fr":"Je viens (présent, yo)","st":"new"},"es:encantado de conocerte":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"encantado de conocerte","fr":"Enchanté de te connaître","st":"new"},"es:despertarse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"despertarse","fr":"Se réveiller","st":"new"},"es:despertador":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"despertador","fr":"Réveil (appareil)","st":"new"},"es:hace un rato":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"hace un rato","fr":"Il y a un moment","st":"new"},"es:sorteo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"sorteo","fr":"Tirage au sort / Tombola","st":"new"},"es:entró":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"entró","fr":"Il est entré (prétérit)","st":"new"},"es:verdadero":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"verdadero","fr":"Vrai / Véritable","st":"new"},"es:justo alrededor de":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"justo alrededor de","fr":"Juste vers / Aux alentours de","st":"new"},"es:alrededor de":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"alrededor de","fr":"Autour de / Vers (environ)","st":"new"},"es:de vuelta":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"de vuelta","fr":"De retour","st":"new"},"es:vuelto":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"vuelto","fr":"Revenu / Retourné (participe irrég.)","st":"new"},"es:todavía no":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"todavía no","fr":"Pas encore","st":"new"},"es:imaginarse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"imaginarse","fr":"S'imaginer / Se figurer","st":"new"},"es:niña":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"niña","fr":"Petite fille / Fillette / Ma petite (affectif)","st":"new"},"es:dando":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"dando","fr":"Donnant (gérondif de dar)","st":"new"},"es:dar ganas de":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"dar ganas de","fr":"Donner envie de","st":"new"},"es:dar miedo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"dar miedo","fr":"Faire peur","st":"new"},"es:echar de casa":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"echar de casa","fr":"Virer de la maison / Mettre à la porte","st":"new"},"es:echar de menos":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"echar de menos","fr":"Manquer (te echo de menos = tu me manques)","st":"new"},"es:echar una mano":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"echar una mano","fr":"Donner un coup de main","st":"new"},"es:echar un vistazo":{"ef":2.5,"interval":0,"reps":3,"due":1793977891670,"lang":"es","word":"echar un vistazo","fr":"Jeter un coup d'œil","st":"learning","s":0.16520722441748575,"d":7.60638779898022,"step":1,"lr":1793976991670},"es:echarse a llorar":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"echarse a llorar","fr":"Se mettre à pleurer","st":"new"},"es:daño":{"ef":2.5,"interval":2,"reps":2,"due":1794149786966,"lang":"es","word":"daño","fr":"Dommage / Mal / Blessure","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793976986966},"es:maletín":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"maletín","fr":"Mallette / Petit sac","st":"new"},"es:incapaz":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"incapaz","fr":"Incapable","st":"new"},"es:fallo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"fallo","fr":"Erreur / Panne / Défaillance / Verdict","st":"new"},"es:quitarse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"quitarse","fr":"S'enlever (vêtement) / Se retirer","st":"new"},"es:quitarse de en medio":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"quitarse de en medio","fr":"S'écarter / Dégager (litt. s'enlever du milieu)","st":"new"},"es:quitarse el sombrero":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"quitarse el sombrero","fr":"(fig.) Tirer son chapeau","st":"new"},"es:estamparse contra":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"estamparse contra","fr":"(fam.) S'écraser contre / Se prendre de plein fouet","st":"new"},"es:si no":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"si no","fr":"Si … ne … pas (condition, 2 mots ≠ sino)","st":"new"},"es:ponerse a + infinitivo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"ponerse a + infinitivo","fr":"Se mettre à (faire qqch)","st":"new"},"es:echarse a":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"echarse a","fr":"Se mettre soudain à (rire, pleurer…)","st":"new"},"es:volverse":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"volverse","fr":"Devenir (changement profond, caractère)","st":"new"},"es:quedarse + adjetivo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"quedarse + adjetivo","fr":"Devenir / Rester (résultat d'un événement)","st":"new"},"es:ponerse el tono de alguien":{"ef":2.5,"interval":0,"reps":0,"due":1793779289606,"lang":"es","word":"ponerse el tono de alguien","fr":"Prendre le ton de qqn / L'imiter","st":"new"},"ln:Mikolo":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Mikolo","fr":"Jours","st":"new"},"ln:Bango":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Bango","fr":"Eux / Elles","st":"new"},"ln:Kolanda":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kolanda","fr":"Suivre","st":"new"},"ln:Kobeba":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobeba","fr":"Se gâter / S'abîmer","st":"new"},"ln:Makambu":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Makambu","fr":"Affaires / Problèmes / Situations","st":"new"},"ln:Kowuta":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kowuta","fr":"Depuis / Venir de","st":"new"},"ln:Eloko":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Eloko","fr":"Objet / Chose","st":"new"},"ln:Kokoka":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kokoka","fr":"Pouvoir","st":"new"},"ln:Kobeta":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobeta","fr":"Frapper / Jouer (instrument)","st":"new"},"ln:Kovanda":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kovanda","fr":"Vivre / S'asseoir / Rester / Demeurer","st":"new"},"ln:Yango":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Yango","fr":"Ça / Cela / Celui-là","st":"new"},"ln:Yango wana":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Yango wana","fr":"C'est pourquoi / Voilà pourquoi","st":"new"},"ln:Kuna":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kuna","fr":"Là-bas / Là","st":"new"},"ln:Kobimisa ye pa na ye":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobimisa ye pa na ye","fr":"Le/la mettre dehors / L'expulser de chez lui/elle","st":"new"},"ln:Yambi":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Yambi","fr":"Bienvenue !","st":"new"},"ln:Suka / Nsuka":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Suka / Nsuka","fr":"Fin / Dernier / Limite","st":"new"},"ln:Kotambola":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kotambola","fr":"Marcher / Avancer / Se déplacer / Voyager","st":"new"},"ln:Kolona":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kolona","fr":"Semer / Planter","st":"new"},"ln:Biloko / Eloko":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Biloko / Eloko","fr":"Choses / Objets / Affaires / Bagages","st":"new"},"ln:Koganga":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Koganga","fr":"Crier / Hurler / Aboyer","st":"new"},"ln:Libota":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Libota","fr":"Famille / Clan","st":"new"},"ln:Kobota":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobota","fr":"Accoucher / Donner naissance / Mettre au monde","st":"new"},"ln:Kobotama":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobotama","fr":"Être né / Naître","st":"new"},"ln:Kokata / Kata":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kokata / Kata","fr":"Couper / Raccrocher (téléphone) / Traverser","st":"new"},"ln:Koteka / Teki":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Koteka / Teki","fr":"Vendre / fig. Trahir / Vendre quelqu'un","st":"new"},"ln:Kopanza / Panza":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kopanza / Panza","fr":"Répandre / Diffuser / Disperser","st":"new"},"ln:Mbangu":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Mbangu","fr":"Vitesse / Rapidité (ya mbangu = rapide)","st":"new"},"ln:Musika / Mosika":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Musika / Mosika","fr":"Loin / Distance / Éloignement","st":"new"},"ln:Tonga / Ntonga":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Tonga / Ntonga","fr":"Aiguille / Seringue","st":"new"},"ln:Koganga / Ganga":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Koganga / Ganga","fr":"Crier / Hurler / Aboyer","st":"new"},"ln:Na-ko- (futur)":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Na-ko- (futur)","fr":"Marqueur du FUTUR 'je vais' (na=je, ko=marqueur futur)","st":"new"},"ln:Koloba / Loba":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Koloba / Loba","fr":"Parler / Dire","st":"new"},"ln:Liloba / Maloba":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Liloba / Maloba","fr":"Mot / Parole","st":"new"},"ln:Kobenda":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobenda","fr":"Tirer / Attirer / Étirer","st":"new"},"ln:Kobenda miso":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobenda miso","fr":"Attirer l'attention (litt. tirer les yeux)","st":"new"},"ln:Kobenda nzoto":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobenda nzoto","fr":"S'étirer / Faire des étirements","st":"new"},"ln:Kondima / Dima":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kondima / Dima","fr":"Accepter / Admettre / Croire / Être d'accord","st":"new"},"ln:Nandimi te":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Nandimi te","fr":"Je ne suis pas d'accord / Je refuse","st":"new"},"ln:Kondimisa":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kondimisa","fr":"Convaincre / Persuader","st":"new"},"ln:Bondimi":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Bondimi","fr":"Foi / Croyance","st":"new"},"ln:Kolenga":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kolenga","fr":"Trembler / Frissonner / Grelotter","st":"new"},"ln:Kolengela":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kolengela","fr":"Arranger / Prendre soin / Préparer","st":"new"},"ln:Kobala":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobala","fr":"Se marier","st":"new"},"ln:Libala":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Libala","fr":"Mariage","st":"new"},"ln:Balabala":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Balabala","fr":"Rue / Route / Voie publique","st":"new"},"ln:Kosepela / Sepela":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kosepela / Sepela","fr":"Se réjouir / Apprécier / Être content","st":"new"},"ln:Kolemba":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kolemba","fr":"Être fatigué / En avoir marre / Se lasser","st":"new"},"ln:Tolemba te":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Tolemba te","fr":"On n'abandonne pas ! (expression culte)","st":"new"},"ln:Kolembisa":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kolembisa","fr":"Épuiser / Amollir / Calmer","st":"new"},"ln:Kokóma":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kokóma","fr":"Arriver / Devenir / Commencer à (ton haut)","st":"new"},"ln:Kobáka":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobáka","fr":"Attacher / Clouer / Injecter (ton haut)","st":"new"},"ln:Kobaka pardon":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobaka pardon","fr":"Demander pardon (idiomatique Kinshasa)","st":"new"},"ln:Kobakisa":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobakisa","fr":"Ajouter / Additionner","st":"new"},"ln:Kobanda / Banda":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobanda / Banda","fr":"Commencer / Débuter","st":"new"},"ln:Ebandeli":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Ebandeli","fr":"Le début / Le commencement","st":"new"},"ln:Bandá":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Bandá","fr":"Depuis (préposition)","st":"new"},"ln:Kobanza":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobanza","fr":"Penser / Réfléchir","st":"new"},"ln:Kobína / Bina":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobína / Bina","fr":"Danser","st":"new"},"ln:-zo- (progressif)":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"-zo- (progressif)","fr":"Marqueur du présent PROGRESSIF 'être en train de'","st":"new"},"ln:Mabína":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Mabína","fr":"Danse (nom)","st":"new"},"ln:Kosenga / Senga":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kosenga / Senga","fr":"Demander / Exiger / Solliciter","st":"new"},"ln:Kosengela":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kosengela","fr":"Falloir / Devoir (obligation)","st":"new"},"ln:Kobosana":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobosana","fr":"Oublier (aussi : faire des erreurs)","st":"new"},"ln:Bosana":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Bosana","fr":"Oublie ! (impératif de kobosana)","st":"new"},"ln:Nabosani":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Nabosani","fr":"J'ai oublié / J'oublie","st":"new"},"ln:Kobosana te":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kobosana te","fr":"N'oublie pas ! / N'oubliez pas !","st":"new"},"ln:Liboso":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Liboso","fr":"Avant / D'abord / En premier / Devant","st":"new"},"ln:-aka (habituel)":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"-aka (habituel)","fr":"⭐ Suffixe HABITUEL / ITÉRATIF (ex: nalingi→nalingaka = j'aime toujours)","st":"new"},"ln:Nalingaka":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Nalingaka","fr":"J'aime (habituel, toujours — kolinga + -aka)","st":"new"},"ln:Nanu":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Nanu","fr":"Encore / D'abord / En premier","st":"new"},"ln:Ezali te / Ezape":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Ezali te / Ezape","fr":"Ce n'est pas (ezape = contraction orale Kinshasa)","st":"new"},"ln:Nzambe":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Nzambe","fr":"Dieu","st":"new"},"ln:Mpo / Po":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Mpo / Po","fr":"Parce que / Pour (po = oral)","st":"new"},"ln:Yo muta / Yo nde":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Yo muta / Yo nde","fr":"C'est toi qui (particule emphatique)","st":"new"},"ln:Kokelela / Kelela":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Kokelela / Kelela","fr":"Créer / Création","st":"new"},"ln:Biso":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Biso","fr":"Nous (pronom personnel)","st":"new"},"ln:Ezali na / Ezana":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Ezali na / Ezana","fr":"Qui sont dans / Qui existent dans","st":"new"},"ln:Mokili":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"ln","word":"Mokili","fr":"Monde / Terre","st":"new"},"en:Feeble":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Feeble","fr":"Faible, frêle","st":"new"},"en:Wrinkle":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Wrinkle","fr":"Ride","st":"new"},"en:Rusty":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Rusty","fr":"Rouillé","st":"new"},"en:Refrain":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Refrain","fr":"S'abstenir","st":"new"},"en:Upon":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Upon","fr":"Sur / En +","st":"new"},"en:To slack off":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"To slack off","fr":"Se relâcher","st":"new"},"en:Chopstick":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Chopstick","fr":"Baguette (cuisine)","st":"new"},"en:To dabble in":{"ef":2.5,"interval":1,"reps":4,"due":1794077007154,"lang":"en","word":"To dabble in","fr":"S'essayer à","st":"review","s":0.12584423732556518,"d":8.796459759436978,"step":null,"lr":1793990607154},"en:grant [sb] [sth]":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"grant [sb] [sth]","fr":"Accorder quelque chose à quelqu'un","st":"new"},"en:Thrilled":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Thrilled","fr":"Ravi, surexcité","st":"new"},"en:Cluttered":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Cluttered","fr":"En désordre","st":"new"},"en:Oblivious":{"ef":2.5,"interval":1,"reps":5,"due":1794077025999,"lang":"en","word":"Oblivious","fr":"Inconscient / Qui ignore","st":"review","s":0.05879128396557075,"d":9.583345017361768,"step":null,"lr":1793990625999},"en:Reignite":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Reignite","fr":"Rallumer / Raviver","st":"new"},"en:To stage [sth]":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"To stage [sth]","fr":"Mettre en scène","st":"new"},"en:Pinch":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Pinch","fr":"Pincer","st":"new"},"en:Dwell":{"ef":2.5,"interval":1,"reps":9,"due":1794077157984,"lang":"en","word":"Dwell","fr":"Demeurer / S'attarder sur","st":"review","s":0.02346018904835034,"d":9.92317060793201,"step":null,"lr":1793990757984},"en:Flaw":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Flaw","fr":"Défaut","st":"new"},"en:Lighter":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Lighter","fr":"Plus léger / Briquet","st":"new"},"en:Rattle":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Rattle","fr":"Secouer / Faire du bruit","st":"new"},"en:Head-on":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Head-on","fr":"De front / De plein fouet","st":"new"},"en:hold out on [sb]":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"hold out on [sb]","fr":"Cacher quelque chose à quelqu'un","st":"new"},"en:To frown":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"To frown","fr":"Froncer les sourcils","st":"new"},"en:Settle":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Settle","fr":"Régler / S'installer","st":"new"},"en:Steward":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"Steward","fr":"Coordinateur / Gérant","st":"new"},"en:To soothe [sb/sth]":{"ef":2.5,"interval":1,"reps":4,"due":1794077011138,"lang":"en","word":"To soothe [sb/sth]","fr":"Apaiser / Calmer","st":"review","s":0.12584423732556518,"d":8.796459759436978,"step":null,"lr":1793990611138},"en:To spark [sth]":{"ef":2.5,"interval":1,"reps":5,"due":1794077067388,"lang":"en","word":"To spark [sth]","fr":"fig. Déclencher / Provoquer","st":"review","s":0.23304476454854733,"d":9.443053029046421,"step":null,"lr":1793990667388},"en:shift [sth]":{"ef":2.5,"interval":1,"reps":3,"due":1794077023008,"lang":"en","word":"shift [sth]","fr":"litt. Déplacer / fig. Changer de perspective","st":"review","s":1.3771622371865915,"d":5.103950476360559,"step":null,"lr":1793990623008},"en:to mingle":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to mingle","fr":"litt. Se mélanger / fig. Socialiser / Mingler","st":"new"},"en:though":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"though","fr":"Pourtant / Quand même / Cependant (fin de phrase ou conjonction)","st":"new"},"en:doable":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"doable","fr":"Faisable / Réalisable","st":"new"},"en:to depict":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to depict","fr":"Dépeindre / Représenter / Illustrer","st":"new"},"en:to cut sb some slack":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to cut sb some slack","fr":"fig. Être indulgent envers qqn / Lâcher la pression","st":"new"},"en:to back sb up":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to back sb up","fr":"litt. Reculer / fig. Soutenir qqn / Couvrir qqn","st":"new"},"en:to meddle":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to meddle","fr":"fig. S'ingérer / Se mêler des affaires des autres / Fouiner","st":"new"},"en:to belittle":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to belittle","fr":"fig. Rabaisser / Dévaloriser / Diminuer","st":"new"},"en:playwright":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"playwright","fr":"Dramaturge / Auteur de pièces de théâtre","st":"new"},"en:to bump heads":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to bump heads","fr":"litt. Se cogner la tête / fig. Être en désaccord / S'affronter","st":"new"},"en:to rack one's brain":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to rack one's brain","fr":"fig. Se creuser la tête / Se triturer les méninges","st":"new"},"en:to mess up":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to mess up","fr":"litt. Mettre le désordre / fig. Rater / Gâcher / Foutre en l'air","st":"new"},"en:full-fledged":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"full-fledged","fr":"À part entière / Complet / Pleinement développé","st":"new"},"en:to alienate":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to alienate","fr":"litt. Aliéner / fig. Mettre à l'écart / Isoler / Éloigner","st":"new"},"en:to give sb a nudge":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to give sb a nudge","fr":"litt. Donner un petit coup de coude / fig. Pousser doucement / Inciter subtilement","st":"new"},"en:a nudge":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"a nudge","fr":"litt. Petit coup de coude / fig. Coup de pouce / Légère incitation","st":"new"},"en:rail yard":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"rail yard","fr":"Dépôt ferroviaire / Gare de triage","st":"new"},"en:to relieve sb of their duties":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to relieve sb of their duties","fr":"fig. Relever qqn de ses fonctions / Décharger de ses responsabilités","st":"new"},"en:to swing out":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to swing out","fr":"litt. Balancer vers l'extérieur / fig. Se lancer / Sortir en trombe","st":"new"},"en:to get strung up":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to get strung up","fr":"litt. Se faire suspendre / fig. Se faire pendre / Être à cran","st":"new"},"en:thrilling":{"ef":2.5,"interval":2,"reps":2,"due":1794163252684,"lang":"en","word":"thrilling","fr":"Palpitant / Électrisant / Haletant","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793990452684},"en:a grant":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"a grant","fr":"Subvention / Bourse / Don","st":"new"},"en:flight":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"flight","fr":"Vol","st":"new"},"en:to let sb off the hook":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to let sb off the hook","fr":"Laisser qqn s'en tirer / Épargner qqn","st":"new"},"en:hook up":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"hook up","fr":"Brancher / Connecter / (argot) Coucher avec","st":"new"},"en:hold (noun)":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"hold (noun)","fr":"Prise / Emprise / Contrôle","st":"new"},"en:to get a hold of yourself":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to get a hold of yourself","fr":"Se ressaisir / Se reprendre","st":"new"},"en:hold back":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"hold back","fr":"Retenir / Se retenir","st":"new"},"en:hold out":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"hold out","fr":"Tenir / Résister / Tendre (main)","st":"new"},"en:the bereaved":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"the bereaved","fr":"Les endeuillés / La famille du défunt","st":"new"},"en:grief":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"grief","fr":"Chagrin / Douleur du deuil","st":"new"},"en:mourning":{"ef":2.5,"interval":1,"reps":8,"due":1794077147617,"lang":"en","word":"mourning","fr":"Deuil (processus / période)","st":"review","s":0.09011257781730742,"d":9.847620827882757,"step":null,"lr":1793990747617},"en:meticulously":{"ef":2.5,"interval":2,"reps":2,"due":1794162642736,"lang":"en","word":"meticulously","fr":"Méticuleusement / Minutieusement","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793989842736},"en:cornered":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"cornered","fr":"Coincé / Acculé","st":"new"},"en:corner":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"corner","fr":"Coin / Angle / Corner (foot)","st":"new"},"en:walk a fine line":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"walk a fine line","fr":"Marcher sur une ligne fine / Situation délicate","st":"new"},"en:scorching hot":{"ef":2.5,"interval":2,"reps":2,"due":1794163255027,"lang":"en","word":"scorching hot","fr":"Torride / Brûlant","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793990455027},"en:cork":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"cork","fr":"Bouchon de liège / Boucher","st":"new"},"en:to snoop":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to snoop","fr":"Fouiner / Espionner (péj.)","st":"new"},"en:to squat":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to squat","fr":"S'accroupir / Squatter · (argot) not know squat = n'y rien connaître","st":"new"},"en:pull toward":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"pull toward","fr":"Attirer vers / Être attiré par","st":"new"},"en:to bottle sth up":{"ef":2.5,"interval":1,"reps":3,"due":1794077017998,"lang":"en","word":"to bottle sth up","fr":"Refouler, garder pour soi (émotions)","st":"review","s":0.2842063592758949,"d":6.4024788133,"step":null,"lr":1793990617998},"en:put a lid on it":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"put a lid on it","fr":"(fam.) Ferme-la · Contenir, limiter","st":"new"},"en:nosy":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"nosy","fr":"Curieux, fouineur (péj.)","st":"new"},"en:poke your nose into":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"poke your nose into","fr":"Fourrer son nez dans","st":"new"},"en:to crouch down":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to crouch down","fr":"S'accroupir (neutre)","st":"new"},"en:gravitate toward":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"gravitate toward","fr":"Se tourner naturellement vers","st":"new"},"en:to rip out":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to rip out","fr":"Arracher (d'un coup, avec force)","st":"new"},"en:to tear out":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to tear out","fr":"Arracher (une page…)","st":"new"},"en:to yank out":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to yank out","fr":"Arracher d'un coup sec (fam.)","st":"new"},"en:to wrest":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to wrest","fr":"Arracher de force (pouvoir, contrôle) — soutenu","st":"new"},"en:belly button":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"belly button","fr":"Nombril (courant)","st":"new"},"en:navel":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"navel","fr":"Nombril (neutre, écrit)","st":"new"},"en:navel-gazing":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"navel-gazing","fr":"(fig.) Nombrilisme","st":"new"},"en:umbilicus":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"umbilicus","fr":"Ombilic (médical)","st":"new"},"en:innie / outie":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"innie / outie","fr":"Nombril creux / qui ressort (fam.)","st":"new"},"en:to pull strings":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to pull strings","fr":"Faire jouer ses relations / Pistonner","st":"new"},"en:to call in a favor":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"to call in a favor","fr":"Demander un service rendu en retour","st":"new"},"en:parole board":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"parole board","fr":"Commission des libérations conditionnelles","st":"new"},"en:on parole":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"on parole","fr":"En liberté conditionnelle","st":"new"},"en:probation":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"probation","fr":"Sursis avec mise à l'épreuve (≠ parole)","st":"new"},"en:inquiry":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"inquiry","fr":"Enquête officielle / Demande de renseignements","st":"new"},"en:a probe":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"a probe","fr":"Une enquête (langage des médias)","st":"new"},"en:an inquest":{"ef":2.5,"interval":0,"reps":0,"due":1793779289607,"lang":"en","word":"an inquest","fr":"Enquête judiciaire sur un décès","st":"new"},"es:pillar / pillado":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"pillar / pillado","fr":"Coincer / Surprendre en flagrant délit"},"es:aburrido/a":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"aburrido/a","fr":"Ennuyeux / Ennuyé (estar = s'ennuyer)"},"es:hoy / hoy en día":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"hoy / hoy en día","fr":"Aujourd'hui / De nos jours"},"es:ningún / ninguno":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"ningún / ninguno","fr":"Aucun"},"es:cualquier / cualquiera":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"cualquier / cualquiera","fr":"N'importe quel / Quiconque"},"es:agarrar / agarrarse":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"agarrar / agarrarse","fr":"Attraper / En venir aux mains"},"es:cuidar / cuidarse":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"cuidar / cuidarse","fr":"Prendre soin / Faire attention"},"es:¡descuida!":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"¡descuida!","fr":"Ne t'inquiète pas ! (idiomatique)"},"es:esposa / esposo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"esposa / esposo","fr":"Épouse / Époux"},"es:si (sans accent)":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"si (sans accent)","fr":"Si (conditionnel)"},"es:logro":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"logro","fr":"Réussite / Accomplissement"},"es:pelota":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"pelota","fr":"Balle / fig. Lèche / Cirage de pompes"},"es:jefe / jefa":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"jefe / jefa","fr":"Chef / Cheffe / Patron / (argot) Papa-Maman"},"es:sino / sino que":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"sino / sino que","fr":"Mais (opposition après négation)"},"es:despertar / despertarse":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"despertar / despertarse","fr":"(Se) Réveiller"},"es:hermano / hermana":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"hermano / hermana","fr":"Frère / Sœur"},"es:entrar / entró":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"entrar / entró","fr":"Entrer / Est entré"},"es:recordar / recuerdo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"recordar / recuerdo","fr":"Se souvenir / Je me souviens"},"es:predecir / predijo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"predecir / predijo","fr":"Prédire / Il a prédit (irrég.)"},"es:imaginar / imaginarse":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"imaginar / imaginarse","fr":"Imaginer / S'imaginer"},"es:niño / niña":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"niño / niña","fr":"Petit garçon / Petite fille / Ma petite (affectif)"},"es:dar ganas / miedo / pena":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"dar ganas / miedo / pena","fr":"Donner envie / Faire peur / De la peine"},"es:anciano / anciana":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"anciano / anciana","fr":"Personne âgée (respectueux)"},"es:los que / las que":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"los que / las que","fr":"Ceux / Celles qui"},"es:dañar / daño":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"dañar / daño","fr":"Endommager / Dommage"},"es:aguantar":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"aguantar","fr":"Supporter / Tenir le coup"},"es:chapuzas":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"chapuzas","fr":"Bricolage / Boulot bâclé"},"es:empapado":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"empapado","fr":"Trempé"},"es:encajar":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"encajar","fr":"Emboîter / Encaisser"},"es:estar al tanto":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"estar al tanto","fr":"Être au courant"},"es:gastar":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"gastar","fr":"Dépenser / User"},"es:hacerse":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"hacerse","fr":"Devenir / Se faire"},"es:jalar":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"jalar","fr":"Tirer (Lat. Am.) / Manger (argot)"},"es:madrugar":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"madrugar","fr":"Se lever tôt"},"es:malgastar":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"malgastar","fr":"Gaspiller"},"es:maña":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"maña","fr":"Astuce / Habileté"},"es:tirón":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"tirón","fr":"Coup sec / Vol à l'arraché"},"es:tutear":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"tutear","fr":"Tutoyer"},"es:cosilla":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"cosilla","fr":"Petite chose / Bricole (dim. affectueux de cosa)"},"es:ruido":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"ruido","fr":"Bruit"},"es:hacer gracia":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"hacer gracia","fr":"Faire rire / Amuser"},"es:despierta":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"despierta","fr":"Éveillée / Dégourdie (fig.)"},"es:convivir":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"convivir","fr":"Cohabiter / Vivre ensemble (au quotidien)"},"es:desapercibido":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"desapercibido","fr":"Inaperçu / Qui passe inaperçu"},"es:cortesía":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"cortesía","fr":"Politesse / Courtoisie"},"es:hacer una tontería":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"hacer una tontería","fr":"Faire une bêtise / une connerie"},"es:que le saquen":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"que le saquen","fr":"Qu'on le sorte / vire (subj. de sacar)"},"es:lupa":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"lupa","fr":"Loupe (litt.) / fig. passer au crible"},"es:hola":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"hola","fr":"Salut / Bonjour"},"es:buenos días":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"buenos días","fr":"Bonjour (le matin)"},"es:¿cómo te llamas?":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"¿cómo te llamas?","fr":"Comment tu t'appelles ?"},"es:¿de dónde eres?":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"¿de dónde eres?","fr":"D'où viens-tu ?"},"es:vivir":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"vivir","fr":"Habiter / Vivre"},"es:trabajar":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"trabajar","fr":"Travailler"},"es:hasta luego":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"hasta luego","fr":"À plus tard"},"es:gracias":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"gracias","fr":"Merci"},"es:de acuerdo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"de acuerdo","fr":"D'accord / Ok"},"es:padre":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"padre","fr":"Père"},"es:madre":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"madre","fr":"Mère"},"es:hijo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"hijo","fr":"Fils / Enfant"},"es:primo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"primo","fr":"Cousin"},"es:abuelo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"abuelo","fr":"Grand-père"},"es:tener ... años":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"tener ... años","fr":"Avoir ... ans"},"es:comer":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"comer","fr":"Manger"},"es:beber":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"beber","fr":"Boire"},"es:el desayuno":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"el desayuno","fr":"Le petit-déjeuner"},"es:la cuenta":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"la cuenta","fr":"L'addition"},"es:la casa":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"la casa","fr":"La maison"},"es:el piso":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"el piso","fr":"L'appartement (Espagne) / L'étage"},"es:la calle":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"la calle","fr":"La rue"},"es:cerca":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"cerca","fr":"Près"},"es:lejos":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"lejos","fr":"Loin"},"es:ducharse":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"ducharse","fr":"Se doucher"},"es:empezar":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"empezar","fr":"Commencer"},"es:siempre":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"siempre","fr":"Toujours"},"es:a veces":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"a veces","fr":"Parfois"},"es:mañana":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"mañana","fr":"Demain / Le matin"},"es:la semana":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"la semana","fr":"La semaine"},"es:el fin de semana":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"el fin de semana","fr":"Le week-end"},"es:hace frío":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"hace frío","fr":"Il fait froid"},"es:¿cuánto cuesta?":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"¿cuánto cuesta?","fr":"Combien ça coûte ?"},"es:barato":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"barato","fr":"Pas cher"},"es:caro":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"caro","fr":"Cher"},"es:probarse":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"probarse","fr":"Essayer (un vêtement)"},"es:la talla":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"la talla","fr":"La taille"},"es:pagar":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"pagar","fr":"Payer"},"es:ayer":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"ayer","fr":"Hier"},"es:la semana pasada":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"la semana pasada","fr":"La semaine dernière"},"es:encontrar":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"encontrar","fr":"Trouver"},"es:hizo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"hizo","fr":"Il a fait"},"es:tuve":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"tuve","fr":"J'ai eu"},"es:dijo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"dijo","fr":"Il a dit"},"es:pudo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"pudo","fr":"Il a pu"},"es:cuando era niño":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"cuando era niño","fr":"Quand j'étais petit"},"es:antes":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"antes","fr":"Avant"},"es:todos los días":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"todos los días","fr":"Tous les jours"},"es:crecer":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"crecer","fr":"Grandir"},"es:solía":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"solía","fr":"J'avais l'habitude de"},"es:el año que viene":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"el año que viene","fr":"L'année prochaine"},"es:estar de acuerdo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"estar de acuerdo","fr":"Être d'accord"},"es:ojalá":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"ojalá","fr":"Pourvu que / J'espère"},"es:para que":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"para que","fr":"Pour que"},"es:antes de que":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"antes de que","fr":"Avant que"},"es:dámelo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"dámelo","fr":"Donne-le-moi"},"es:acabar de":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"acabar de","fr":"Venir de"},"es:dejar de":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"dejar de","fr":"Arrêter de"},"es:sin embargo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"sin embargo","fr":"Cependant"},"es:en cambio":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"en cambio","fr":"En revanche"},"es:hubiera dado":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"hubiera dado","fr":"Aurait donné / suffi"},"es:si tuviera":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"si tuviera","fr":"Si j'avais"},"es:dar para":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"dar para","fr":"Suffire pour (argent)"},"es:ciudadano":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"ciudadano","fr":"Citoyen"},"es:el alquiler":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"el alquiler","fr":"Le loyer / La location"},"es:firmar":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"firmar","fr":"Signer"},"es:tomar el pelo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"tomar el pelo","fr":"Se moquer de qqn"},"es:estar en las nubes":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"estar en las nubes","fr":"Être dans la lune"},"es:ponerse las pilas":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"ponerse las pilas","fr":"Se bouger / S'y mettre"},"es:por teléfono":{"ef":2.5,"interval":0,"reps":0,"due":1793989815208,"lang":"es","word":"por teléfono","fr":"Par téléphone"},"ln:kovanda":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kovanda","fr":"Vivre / S'asseoir / Rester / Demeurer"},"ln:kosaka":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kosaka","fr":"Tromper / Avoir par la ruse"},"ln:yango":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"yango","fr":"Ça / Cela / Celui-là"},"ln:yango wana":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"yango wana","fr":"C'est pourquoi / Voilà pourquoi"},"ln:kuna":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kuna","fr":"Là-bas / Là"},"ln:kobanga":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobanga","fr":"Avoir peur / Craindre"},"ln:muninga":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"muninga","fr":"Ami(e) / Copain / Voisin"},"ln:mususu / basusu":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"mususu / basusu","fr":"Autre / Certains / D'autres"},"ln:kokita":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kokita","fr":"Atterrir / Descendre"},"ln:elongo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"elongo","fr":"Ensemble / En même temps"},"ln:kofinga":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kofinga","fr":"Insulter / Offenser"},"ln:mokolo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"mokolo","fr":"Jour / Adulte / Ancien"},"ln:komeka / meka":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"komeka / meka","fr":"Essayer / Tester"},"ln:kotia / tia":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kotia / tia","fr":"Mettre / Poser"},"ln:pe":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"pe","fr":"Aussi / Et"},"ln:zemi":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"zemi","fr":"Grossesse"},"ln:nzoto":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"nzoto","fr":"Corps / Santé"},"ln:kokuta":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kokuta","fr":"Trouver / Rencontrer"},"ln:kokutana":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kokutana","fr":"Se rencontrer mutuellement"},"ln:mibale":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"mibale","fr":"Deux / Tous les deux"},"ln:kutu":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kutu","fr":"De plus / D'ailleurs"},"ln:batu / motu":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"batu / motu","fr":"Personne / Gens"},"ln:kozongela":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kozongela","fr":"Recommencer / Répéter"},"ln:misusu":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"misusu","fr":"Certains / D'autres"},"ln:kaka boye":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kaka boye","fr":"Comme ça / Juste comme ça"},"ln:kozonga":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kozonga","fr":"Revenir / Retourner"},"ln:kofuta / futa":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kofuta / futa","fr":"Payer"},"ln:tango":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"tango","fr":"Quand / Temps / Moment"},"ln:somo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"somo","fr":"Terreur / Horreur"},"ln:kati / katikati":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kati / katikati","fr":"À l'intérieur / Entre / Au milieu"},"ln:kokenda / kende":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kokenda / kende","fr":"Aller / Partir"},"ln:pa":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"pa","fr":"Chez / À la maison de"},"ln:yambi":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"yambi","fr":"Bienvenue !"},"ln:koyamba":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"koyamba","fr":"Accueillir / Répondre"},"ln:motema / mitema":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"motema / mitema","fr":"Cœur / Force de caractère"},"ln:kala":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kala","fr":"Autrefois / Il y a longtemps"},"ln:kobemba":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobemba","fr":"Voyager"},"ln:kobwaka":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobwaka","fr":"Jeter / Abandonner"},"ln:ngunda":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"ngunda","fr":"Asile / Refuge (argot)"},"ln:kobika":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobika","fr":"Être sauvé / Guérir"},"ln:kosimba":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kosimba","fr":"Tenir / Saisir / Coller"},"ln:lokola":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"lokola","fr":"Comme / Tel que"},"ln:suka / nsuka":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"suka / nsuka","fr":"Fin / Dernier"},"ln:kolakisa / lakisa":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kolakisa / lakisa","fr":"Montrer / Enseigner"},"ln:kotanga / tangi":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kotanga / tangi","fr":"Lire / Compter / Étudier"},"ln:pamba":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"pamba","fr":"Pour rien / En vain"},"ln:makasi":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"makasi","fr":"Fort / Beaucoup (intensificateur)"},"ln:moko":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"moko","fr":"Un / Seul"},"ln:kotambola":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kotambola","fr":"Marcher / Se déplacer / Voyager"},"ln:kolona / lona":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kolona / lona","fr":"Semer / Planter"},"ln:biloko / eloko":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"biloko / eloko","fr":"Choses / Objets / Affaires"},"ln:koganga":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"koganga","fr":"Crier / Hurler"},"ln:libota":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"libota","fr":"Famille / Clan"},"ln:liputa / maputa":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"liputa / maputa","fr":"Pagne / Tissu africain"},"ln:kobota":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobota","fr":"Accoucher / Donner naissance"},"ln:kobotama":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobotama","fr":"Être né / Naître"},"ln:kokata / kata":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kokata / kata","fr":"Couper / Raccrocher / Traverser"},"ln:likambo / makambo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"likambo / makambo","fr":"Affaire / Problème / Cas"},"ln:koteka / teki":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"koteka / teki","fr":"Vendre / fig. Trahir"},"ln:kopanza / panza":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kopanza / panza","fr":"Répandre / Diffuser / Disperser"},"ln:mbangu":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"mbangu","fr":"Vitesse / ya mbangu = rapide"},"ln:musika / mosika":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"musika / mosika","fr":"Loin / Distance"},"ln:kotonga":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kotonga","fr":"Coudre / Construire / Tresser"},"ln:tonga / ntonga":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"tonga / ntonga","fr":"Aiguille / Seringue"},"ln:kasi":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kasi","fr":"Mais / Cependant"},"ln:na":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"na","fr":"À / Avec / Dans / De (préposition polyvalente)"},"ln:kozua / kozwa":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kozua / kozwa","fr":"Prendre / Obtenir / Recevoir"},"ln:na-ko- (futur)":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"na-ko- (futur)","fr":"Marqueur du futur 'je vais'"},"ln:koloba / loba":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"koloba / loba","fr":"Parler / Dire"},"ln:liloba / maloba":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"liloba / maloba","fr":"Mot / Parole"},"ln:kobenda":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobenda","fr":"Tirer / Attirer / Étirer"},"ln:kobenda miso":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobenda miso","fr":"Attirer l'attention (litt. tirer les yeux)"},"ln:kobenda nzoto":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobenda nzoto","fr":"S'étirer"},"ln:kondima / dima":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kondima / dima","fr":"Accepter / Admettre / Être d'accord"},"ln:nandimi te":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"nandimi te","fr":"Je ne suis pas d'accord / Je refuse"},"ln:kondimisa":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kondimisa","fr":"Convaincre / Persuader"},"ln:bondimi":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"bondimi","fr":"Foi / Croyance"},"ln:kolenga":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kolenga","fr":"Trembler / Frissonner"},"ln:kolengela":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kolengela","fr":"Arranger / Prendre soin / Préparer"},"ln:kobala":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobala","fr":"Se marier"},"ln:libala":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"libala","fr":"Mariage"},"ln:balabala":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"balabala","fr":"Rue / Route"},"ln:kosepela / sepela":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kosepela / sepela","fr":"Se réjouir / Apprécier"},"ln:nasepeli koyeba yo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"nasepeli koyeba yo","fr":"Ravi(e) de te connaître"},"ln:kolemba":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kolemba","fr":"Être fatigué / En avoir marre"},"ln:tolemba te":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"tolemba te","fr":"On n'abandonne pas ! (culte)"},"ln:kolembisa":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kolembisa","fr":"Épuiser / Amollir"},"ln:kokóma":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kokóma","fr":"Arriver / Devenir (ton haut)"},"ln:kokòma":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kokòma","fr":"Écrire (ton bas — homophone !)"},"ln:mokomi":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"mokomi","fr":"Écrivain / Auteur"},"ln:kobaka / kobáka":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobaka / kobáka","fr":"Poser / Attacher (deux tons)"},"ln:kobaka pardon":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobaka pardon","fr":"Demander pardon (idiomatique Kinshasa)"},"ln:kobakisa":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobakisa","fr":"Ajouter / Additionner"},"ln:kobanda / banda":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobanda / banda","fr":"Commencer / Débuter"},"ln:ebandeli":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"ebandeli","fr":"Le début"},"ln:bandá":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"bandá","fr":"Depuis (préposition)"},"ln:kobanza":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobanza","fr":"Penser / Réfléchir"},"ln:kobína / bina":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kobína / bina","fr":"Danser"},"ln:mabína":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"mabína","fr":"Danse (nom)"},"ln:kosenga / senga":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kosenga / senga","fr":"Demander / Solliciter"},"ln:kosengela":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kosengela","fr":"Falloir / Devoir (obligation)"},"ln:libándá":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"libándá","fr":"Dehors / Extérieur"},"ln:libanda ya mpepo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"libanda ya mpepo","fr":"Aéroport"},"ln:kolimbisa":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"kolimbisa","fr":"Pardonner"},"ln:Yo muta":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Yo muta","fr":"C'est toi qui (emphatique)"},"ln:Kokelela":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Kokelela","fr":"Créer / Création"},"ln:Mbote":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Mbote","fr":"Bonjour / Salut"},"ln:Sango nini ?":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Sango nini ?","fr":"Quoi de neuf ? / Comment ça va ?"},"ln:Malamu":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Malamu","fr":"Bien / Bon"},"ln:Matondo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Matondo","fr":"Merci"},"ln:Nkombo na yo nani ?":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Nkombo na yo nani ?","fr":"Comment tu t'appelles ?"},"ln:Ee / Te":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Ee / Te","fr":"Oui / Non"},"ln:Tata":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Tata","fr":"Papa / Père"},"ln:Mama":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Mama","fr":"Maman / Mère"},"ln:Ndeko":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Ndeko","fr":"Frère / Sœur / Proche"},"ln:Mwana / Bana":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Mwana / Bana","fr":"Enfant / Enfants"},"ln:Misato":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Misato","fr":"Trois"},"ln:Minei":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Minei","fr":"Quatre"},"ln:Mitano":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Mitano","fr":"Cinq"},"ln:Zomi":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Zomi","fr":"Dix"},"ln:Boni ?":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Boni ?","fr":"Combien ? / Comment ?"},"ln:Mbongo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Mbongo","fr":"Argent"},"ln:Ndako":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Ndako","fr":"Maison"},"ln:Kolia":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Kolia","fr":"Manger"},"ln:Komela":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Komela","fr":"Boire"},"ln:Mai":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Mai","fr":"Eau"},"ln:Kolinga":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Kolinga","fr":"Aimer / Vouloir"},"ln:Nzala":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Nzala","fr":"Faim"},"ln:Lelo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Lelo","fr":"Aujourd'hui"},"ln:Lobi":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Lobi","fr":"Hier / Demain (selon le temps du verbe)"},"ln:Ntongo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Ntongo","fr":"Matin"},"ln:Butu":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Butu","fr":"Nuit / Soir"},"ln:Kobela":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Kobela","fr":"Être malade"},"ln:Kosolola":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Kosolola","fr":"Discuter / Bavarder"},"ln:Zando":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Zando","fr":"Marché"},"ln:Ntalo":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"ln","word":"Ntalo","fr":"Prix"},"en:to ship sb":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"to ship sb","fr":"fig. Shipper qqn / Vouloir qu'ils soient ensemble"},"en:a nudge / to give a nudge":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"a nudge / to give a nudge","fr":"Coup de pouce / Pousser doucement"},"en:to bestow":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"to bestow","fr":"litt. Octroyer / Accorder (solennel)"},"en:to ground (flight)":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"to ground (flight)","fr":"Clouer au sol / Immobiliser"},"en:hold (v/n)":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"hold (v/n)","fr":"Tenir / Prise / Emprise"},"en:get hold of sb":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"get hold of sb","fr":"Joindre qqn"},"en:have a hold on sb":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"have a hold on sb","fr":"Avoir de l'emprise sur qqn"},"en:hold on / up / back / out":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"hold on / up / back / out","fr":"Attendre / Retarder / Retenir / Résister"},"en:bereaved / bereavement":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"bereaved / bereavement","fr":"Endeuillé / Deuil (perte d'un proche)"},"en:meticulous / meticulously":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"meticulous / meticulously","fr":"Méticuleux / Minutieusement"},"en:to corner / cornered":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"to corner / cornered","fr":"Acculer / Piéger / Coincé"},"en:to impeach / impeachment":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"to impeach / impeachment","fr":"Destituer / Mise en accusation"},"en:a fine / to fine":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"a fine / to fine","fr":"Amende / Infliger une amende"},"en:scorched / to scorch":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"scorched / to scorch","fr":"Brûlé / Roussi / Carboniser"},"en:bestow":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"bestow","fr":"Accorder / Conférer"},"en:conceited":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"conceited","fr":"Vaniteux / Prétentieux"},"en:daunting":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"daunting","fr":"Intimidant / Décourageant"},"en:disheartening":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"disheartening","fr":"Décourageant / Démoralisant"},"en:fathom":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"fathom","fr":"Comprendre / Saisir"},"en:gut-wrenching":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"gut-wrenching","fr":"Déchirant / Qui prend aux tripes"},"en:hefty":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"hefty","fr":"Costaud / Lourd"},"en:looming":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"looming","fr":"Imminent / Menaçant"},"en:outspoken":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"outspoken","fr":"Franc / Qui dit ce qu'il pense"},"en:reckoning":{"ef":2.5,"interval":1,"reps":4,"due":1794076949744,"lang":"en","word":"reckoning","fr":"Jugement / Heure de vérité","st":"review","s":0.12584423732556518,"d":8.796459759436978,"step":null,"lr":1793990549744},"en:rehab":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"rehab","fr":"Rééducation / Cure de désintox"},"en:relentless":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"relentless","fr":"Implacable / Acharné"},"en:staggering":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"staggering","fr":"Stupéfiant / Ahurissant"},"en:upheaval":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"upheaval","fr":"Bouleversement / Chamboulement"},"en:to slop":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"to slop","fr":"Renverser salement / Éclabousser (fam.)"},"en:jiggling":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"jiggling","fr":"Qui gigote / tremble / secoue"},"en:figure out":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"figure out","fr":"comprendre / trouver la solution"},"en:come up with":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"come up with","fr":"trouver (une idée)"},"en:run into":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"run into","fr":"tomber sur (qqn)"},"en:put off":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"put off","fr":"repousser / remettre à plus tard"},"en:get over":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"get over","fr":"se remettre de"},"en:look into":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"look into","fr":"se pencher sur / examiner"},"en:bring up":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"bring up","fr":"aborder (un sujet)"},"en:end up":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"end up","fr":"finir par"},"en:How's it going?":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"How's it going?","fr":"Comment ça va ?"},"en:What have you been up to?":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"What have you been up to?","fr":"Qu'est-ce que tu deviens ?"},"en:Not much, you?":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Not much, you?","fr":"Pas grand-chose, et toi ?"},"en:I hear you":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I hear you","fr":"je te comprends"},"en:Fair enough":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Fair enough","fr":"c'est de bonne guerre / OK, ça se tient"},"en:No worries":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"No worries","fr":"pas de souci"},"en:Sounds good":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Sounds good","fr":"ça marche"},"en:Catch you later":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Catch you later","fr":"à plus"},"en:I mean":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I mean","fr":"enfin / je veux dire"},"en:you know":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"you know","fr":"tu vois"},"en:kind of":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"kind of","fr":"un peu / plutôt"},"en:honestly":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"honestly","fr":"franchement"},"en:For real?":{"ef":2.5,"interval":7,"reps":1,"due":1794594972415,"lang":"en","word":"For real?","fr":"Sérieux ?","st":"review","s":8.2956,"d":1,"step":null,"lr":1793990172415},"en:No way!":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"No way!","fr":"Sans blague ! / Pas possible !"},"en:That makes sense":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"That makes sense","fr":"c'est logique"},"en:Totally":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Totally","fr":"carrément / complètement"},"en:gonna":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"gonna","fr":"going to (futur)"},"en:wanna":{"ef":2.5,"interval":9,"reps":1,"due":1794767600993,"lang":"en","word":"wanna","fr":"want to","st":"review","s":8.2956,"d":1,"step":null,"lr":1793990000993},"en:gotta":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"gotta","fr":"have got to / doit"},"en:lemme":{"ef":2.5,"interval":5,"reps":2,"due":1794422540381,"lang":"en","word":"lemme","fr":"let me","st":"review","s":3.9460540679694778,"d":1,"step":null,"lr":1793990540381},"en:gimme":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"gimme","fr":"give me"},"en:dunno":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"dunno","fr":"don't know"},"en:kinda":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"kinda","fr":"kind of"},"en:whatcha":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"whatcha","fr":"what are you / what do you"},"en:So get this":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"So get this","fr":"Écoute ça / Tiens-toi bien"},"en:out of nowhere":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"out of nowhere","fr":"sorti de nulle part"},"en:all of a sudden":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"all of a sudden","fr":"tout à coup"},"en:turns out":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"turns out","fr":"en fait / il s'avère que"},"en:long story short":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"long story short","fr":"pour faire court"},"en:I was like":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I was like","fr":"je me suis dit / j'ai fait"},"en:next thing I know":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"next thing I know","fr":"et là, d'un coup"},"en:to top it off":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"to top it off","fr":"pour couronner le tout"},"en:make a decision":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"make a decision","fr":"prendre une décision"},"en:take a break":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"take a break","fr":"faire une pause"},"en:pay attention":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"pay attention","fr":"faire attention"},"en:have a point":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"have a point","fr":"ne pas avoir tort"},"en:do research":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"do research","fr":"faire des recherches"},"en:make sense":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"make sense","fr":"avoir du sens"},"en:take into account":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"take into account","fr":"prendre en compte"},"en:raise a question":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"raise a question","fr":"soulever une question"},"en:I'd say":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I'd say","fr":"je dirais"},"en:it seems to me":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"it seems to me","fr":"il me semble"},"en:arguably":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"arguably","fr":"sans doute / on peut dire que"},"en:to some extent":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"to some extent","fr":"dans une certaine mesure"},"en:I could be wrong, but":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I could be wrong, but","fr":"je me trompe peut-être, mais"},"en:more or less":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"more or less","fr":"plus ou moins"},"en:tends to":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"tends to","fr":"a tendance à"},"en:it's not that…, it's just that":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"it's not that…, it's just that","fr":"ce n'est pas que…, c'est juste que"},"en:that said":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"that said","fr":"cela dit"},"en:even so":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"even so","fr":"quand bien même / malgré tout"},"en:whereas":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"whereas","fr":"alors que"},"en:given that":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"given that","fr":"étant donné que"},"en:as long as":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"as long as","fr":"tant que"},"en:provided that":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"provided that","fr":"à condition que"},"en:on top of that":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"on top of that","fr":"en plus de ça"},"en:by and large":{"ef":2.5,"interval":1,"reps":5,"due":1794077042069,"lang":"en","word":"by and large","fr":"dans l'ensemble","st":"review","s":0.09149607252579034,"d":9.189014509374834,"step":null,"lr":1793990642069},"en:Not only… but also":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Not only… but also","fr":"non seulement… mais aussi"},"en:Never have I…":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Never have I…","fr":"jamais je n'ai…"},"en:Little did I know":{"ef":2.5,"interval":1,"reps":4,"due":1794077036736,"lang":"en","word":"Little did I know","fr":"j'étais loin de me douter","st":"review","s":0.5496529090622859,"d":8.369642325077674,"step":null,"lr":1793990636736},"en:What I need is…":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"What I need is…","fr":"ce dont j'ai besoin, c'est…"},"en:It was… who":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"It was… who","fr":"c'est… qui"},"en:No sooner… than":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"No sooner… than","fr":"à peine… que"},"en:Under no circumstances":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Under no circumstances","fr":"en aucun cas"},"en:The thing is":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"The thing is","fr":"le truc, c'est que"},"en:If I had known":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"If I had known","fr":"si j'avais su"},"en:I wish I had":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I wish I had","fr":"je regrette de ne pas avoir"},"en:If only":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"If only","fr":"si seulement"},"en:Had I known":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Had I known","fr":"si j'avais su (soutenu)"},"en:Suppose":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Suppose","fr":"imagine que"},"en:otherwise":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"otherwise","fr":"sinon"},"en:I'd rather you didn't":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I'd rather you didn't","fr":"je préférerais que tu ne le fasses pas"},"en:It's high time":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"It's high time","fr":"il est grand temps"},"en:circle back":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"circle back","fr":"revenir sur un sujet"},"en:touch base":{"ef":2.5,"interval":1,"reps":4,"due":1794076972963,"lang":"en","word":"touch base","fr":"faire un point rapide","st":"review","s":0.12584423732556518,"d":8.796459759436978,"step":null,"lr":1793990572963},"en:bandwidth":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"bandwidth","fr":"disponibilité / capacité"},"en:low-hanging fruit":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"low-hanging fruit","fr":"gains rapides / quick wins"},"en:deliverable":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"deliverable","fr":"livrable"},"en:loop in":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"loop in","fr":"mettre dans la boucle"},"en:push back":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"push back","fr":"résister / contester"},"en:ballpark figure":{"ef":2.5,"interval":1,"reps":4,"due":1794076957439,"lang":"en","word":"ballpark figure","fr":"ordre de grandeur","st":"review","s":0.12584423732556518,"d":8.796459759436978,"step":null,"lr":1793990557439},"en:hit the nail on the head":{"ef":2.5,"interval":1,"reps":3,"due":1794076989080,"lang":"en","word":"hit the nail on the head","fr":"mettre le doigt dessus","st":"review","s":0.2842063592758949,"d":6.4024788133,"step":null,"lr":1793990589080},"en:cut corners":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"cut corners","fr":"bâcler / rogner sur la qualité"},"en:the ball is in your court":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"the ball is in your court","fr":"la balle est dans ton camp"},"en:on the fence":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"on the fence","fr":"indécis"},"en:a blessing in disguise":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"a blessing in disguise","fr":"un mal pour un bien"},"en:beat around the bush":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"beat around the bush","fr":"tourner autour du pot"},"en:get the hang of it":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"get the hang of it","fr":"prendre le coup de main"},"en:play it by ear":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"play it by ear","fr":"improviser / voir sur le moment"},"en:low-key":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"low-key","fr":"discrètement / un peu"},"en:high-key":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"high-key","fr":"clairement / carrément"},"en:no cap":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"no cap","fr":"sans mentir"},"en:salty":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"salty","fr":"vexé / aigri"},"en:to ghost":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"to ghost","fr":"disparaître sans prévenir"},"en:to flex":{"ef":2.5,"interval":2,"reps":2,"due":1794163239425,"lang":"en","word":"to flex","fr":"frimer","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793990439425},"en:sus":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"sus","fr":"louche"},"en:Bet.":{"ef":2.5,"interval":1,"reps":3,"due":1794076890746,"lang":"en","word":"Bet.","fr":"Ça marche. / Ok.","st":"review","s":0.2842063592758949,"d":6.4024788133,"step":null,"lr":1793990490746},"en:I'm bummed":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I'm bummed","fr":"je suis dégoûté / déçu"},"en:I'm stoked":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I'm stoked","fr":"je suis trop content"},"en:it drives me nuts":{"ef":2.5,"interval":1,"reps":4,"due":1794077044820,"lang":"en","word":"it drives me nuts","fr":"ça me rend dingue","st":"review","s":0.12584423732556518,"d":8.796459759436978,"step":null,"lr":1793990644820},"en:I'm freaking out":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I'm freaking out","fr":"je panique"},"en:I'm over it":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I'm over it","fr":"j'en ai ma claque / je suis passé à autre chose"},"en:it got to me":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"it got to me","fr":"ça m'a touché / atteint"},"en:I can't stand":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I can't stand","fr":"je ne supporte pas"},"en:I'm pumped":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I'm pumped","fr":"je suis surexcité"},"en:I see where you're coming from":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I see where you're coming from","fr":"je comprends ton point de vue"},"en:I'm not sure I'd go that far":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I'm not sure I'd go that far","fr":"je n'irais pas jusque-là"},"en:Fair point, however":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Fair point, however","fr":"bon point, cependant"},"en:I'd push back on that":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I'd push back on that","fr":"je ne suis pas d'accord là-dessus"},"en:That's one way to look at it":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"That's one way to look at it","fr":"c'est une façon de voir"},"en:Let's agree to disagree":{"ef":2.5,"interval":2,"reps":2,"due":1794163344835,"lang":"en","word":"Let's agree to disagree","fr":"restons-en à nos désaccords","st":"review","s":2.3065,"d":2.1169858664885557,"step":null,"lr":1793990544835},"en:With all due respect":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"With all due respect","fr":"sauf votre respect"},"en:I hear you, but":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I hear you, but","fr":"je t'entends, mais"},"en:What's up with that?":{"ef":2.5,"interval":1,"reps":3,"due":1794077161418,"lang":"en","word":"What's up with that?","fr":"C'est quoi ce délire ?","st":"review","s":1.3747341809338107,"d":4.754871489116483,"step":null,"lr":1793990761418},"en:You've got to be kidding me":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"You've got to be kidding me","fr":"Tu te fiches de moi"},"en:I'm all ears":{"ef":2.5,"interval":2,"reps":2,"due":1794163096336,"lang":"en","word":"I'm all ears","fr":"je suis tout ouïe","st":"review","s":2.298151361796992,"d":3.4698859282580456,"step":null,"lr":1793990296336},"en:That's on me":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"That's on me","fr":"c'est de ma faute"},"en:My bad":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"My bad","fr":"oups, ma faute"},"en:I've got your back":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I've got your back","fr":"je te couvre"},"en:Get out of here!":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Get out of here!","fr":"Sans déconner !"},"en:Spill the tea":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Spill the tea","fr":"balance les potins"},"en:shoulda":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"shoulda","fr":"should have"},"en:coulda":{"ef":2.5,"interval":10,"reps":1,"due":1794854088412,"lang":"en","word":"coulda","fr":"could have","st":"review","s":8.2956,"d":1,"step":null,"lr":1793990088412},"en:woulda":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"woulda","fr":"would have"},"en:didja":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"didja","fr":"did you"},"en:whaddaya":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"whaddaya","fr":"what do you"},"en:gotcha":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"gotcha","fr":"got you / compris"},"en:outta":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"outta","fr":"out of"},"en:hafta":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"hafta","fr":"have to"},"en:I'm down":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I'm down","fr":"je suis partant"},"en:It's not my thing":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"It's not my thing","fr":"ce n'est pas mon truc"},"en:I'm good":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I'm good","fr":"non merci / ça va"},"en:You do you":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"You do you","fr":"fais comme tu le sens"},"en:That's a wrap":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"That's a wrap","fr":"c'est fini / c'est bouclé"},"en:It is what it is":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"It is what it is","fr":"c'est comme ça"},"en:Let's call it a day":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"Let's call it a day","fr":"on s'arrête là pour aujourd'hui"},"en:I'll pass":{"ef":2.5,"interval":0,"reps":0,"due":1793989815209,"lang":"en","word":"I'll pass","fr":"je passe mon tour"}},"es_xp":11586,"ln_xp":985,"en_xp":2195,"score":0,"streak":0,"mastered":[],"es_mastered":[],"ln_mastered":[],"en_mastered":[],"aura_map":{},"srs_revlog":[["es:hace nada",1792414655280,2,2,34,2397],["es:dañar",1792414657343,2,2,21,1709],["es:buitre",1792414660038,2,2,20,2342],["es:Caliente",1792414662136,3,2,57,1745],["es:cerrar",1792414664647,3,2,53,2158],["es:pegar",1792414667627,2,2,33,2628],["es:a trompadas",1792414669909,2,2,10,1930],["es:de ninguna manera",1792414676734,2,2,7,6471],["es:A pesar de que",1792414680097,2,2,13,3010],["es:aparcar",1792414682164,2,2,22,1713],["es:niño",1792414684465,2,2,48,1947],["es:dar igual",1792414687067,2,2,31,2248],["es:acostarse",1792414692949,2,2,19,5529],["es:vuelta",1792414694917,2,2,35,1615],["es:Alrededor",1792414697033,2,2,32,1762],["es:Hielo",1792414698984,2,2,30,1598],["es:otra vez",1792414701341,2,2,14,2004],["es:asistente",1792414703289,2,2,27,1591],["es:Crecer",1792414705620,2,2,35,1978],["es:Cupo",1792414708540,1,2,12,2566],["es:a la vez",1792414710873,2,2,32,1980],["es:puesto",1792414713157,2,2,8,1931],["es:firme",1792414719052,2,2,29,5543],["es:lluvia",1792415079693,2,2,9,2191],["es:tienda",1792415082321,2,2,36,2270],["es:salga",1792415085340,2,2,33,2659],["es:ola",1792415089768,2,2,33,4075],["es:hace como",1792415095648,2,2,18,5524],["es:castigo",1792415100485,0,2,0,4484],["es:da igual",1792415102753,2,2,12,1914],["es:maleta",1792415105785,2,2,19,2678],["es:castigo",1792425728087,2,3,1,11686],["es:agarrar",1792425731752,2,2,9,3309],["es:papel",1792425734988,3,2,56,2883],["es:equivocarse",1792425738688,3,2,51,3347],["es:sortear",1792425757756,2,2,19,18714],["es:convencido",1792425761640,2,2,27,3531],["es:cruzar",1792425766065,2,2,31,4072],["es:cuídate",1792425769648,2,2,24,3230],["es:bastante",1792425772728,2,2,35,2726],["es:las que",1792425775581,2,2,22,2500],["es:Parecido",1792425780243,2,2,35,4309],["es:dañino",1792425782293,2,2,15,1698],["es:harto",1792425788855,0,2,0,6209],["es:gracioso",1792425792801,2,2,35,3593],["es:en ningún momento",1792425795802,2,2,19,2647],["es:tendríamos",1792425800051,2,2,29,3896],["es:amañado",1792425804907,2,2,27,4502],["es:ni siquiera",1792425809320,2,2,21,4060],["es:cine",1792425811866,2,2,13,2193],["es:dándole",1792425814366,2,2,38,2147],["es:echar",1792425818082,2,2,16,3363],["es:será que",1792425822292,1,2,13,3857],["es:descartar",1792425829801,0,2,0,7156],["es:arriba",1792425832138,2,2,10,1980],["es:me parece bien",1792425835705,2,2,20,3214],["es:descartado",1792425839078,2,2,32,3019],["es:agacharse",1792425842370,0,2,0,2939],["es:aún",1792425845357,3,2,49,2634],["es:mantener",1792425848293,3,2,50,2582],["es:Pudrir",1792425850610,3,2,57,1964],["es:sacar",1792425854423,0,2,0,3459],["es:siguiendo",1792425873013,2,2,13,6999],["es:hacer daño",1792425875979,2,2,36,2612],["es:sorprendido",1792425885250,2,2,17,8918],["es:lamentar",1792425891658,2,2,29,6054],["es:echar una siesta",1792425894172,2,2,10,2160],["es:fruto",1792425897023,2,2,22,2498],["es:por fin",1792425899458,2,2,32,2081],["es:Certificado",1792425902270,2,2,33,2459],["es:Adelanto",1792425905787,2,2,24,3163],["es:hacer la maleta",1792425910870,2,2,12,4730],["es:aliviado",1792425917848,1,2,22,6625],["es:cita",1792425923610,2,2,13,5411],["es:desprestigiar",1792425927641,2,2,19,3678],["es:harto",1792430597694,2,3,1,7420],["es:descartar",1792430601502,2,3,1,3451],["es:agacharse",1792430607094,1,3,0,5236],["es:sacar",1792430891642,1,3,0,60000],["es:avisar",1792430894940,2,2,9,2917],["es:conseguir",1792430898872,2,2,33,3573],["es:volver a",1792430902947,2,2,40,3719],["es:conozco",1792430904942,3,2,31,1639],["es:a propósito",1792430908874,2,2,9,3579],["es:traer suerte",1792430912425,2,2,12,3198],["es:arruga",1792430914962,2,2,18,2183],["es:salir",1792430918011,3,2,41,2695],["es:caminar",1792430920029,3,2,53,1664],["es:lado",1792430922668,2,2,29,2286],["es:Mano",1792430925495,2,2,34,2471],["es:capaz",1792430930073,2,2,24,4223],["es:claro que",1792430933092,2,2,9,2665],["es:fue",1792430935410,2,2,32,1965],["es:el cruce",1792430938765,2,2,25,3002],["es:quiso",1792430941372,2,2,6,2254],["es:flipante",1792430945117,2,2,28,3388],["es:a lo mejor",1792430948035,2,2,20,2564],["es:parece que",1792430954345,2,2,33,5956],["es:qué",1792430957243,2,2,33,2545],["es:desde que",1792430960839,2,2,30,3243],["es:además",1792430963081,3,2,39,1888],["es:me voy a la cama",1792430966856,2,2,36,3422],["es:anciano",1792430969474,2,2,18,2265],["es:no sé",1792430971842,2,2,23,2015],["es:hacer la pelota",1792430976766,2,2,27,4571],["es:Camino",1792430979990,3,2,54,2871],["es:búsqueda",1792430982639,3,2,54,2296],["es:engañar",1792430986289,2,2,22,3296],["es:desarrollar",1792430989605,2,2,32,2962],["es:capacidad",1792430992904,2,2,36,2946],["es:predijo",1792430996242,2,2,10,2985],["es:castigado",1792431006170,2,2,23,9575],["es:si",1792431012882,2,2,36,6359],["es:turbante",1792431017352,2,2,28,4116],["es:asistir a",1792431019860,3,2,48,2154],["es:los he seguido",1792431027696,0,2,0,7482],["es:personas mayores",1792431032542,2,2,45,4491],["es:ganar",1792431034871,2,2,35,1976],["es:recordar",1792431042274,2,2,33,7050],["es:jefa",1792431044689,2,2,34,2060],["es:subir",1792431047382,0,2,0,2340],["es:maletero",1792431050401,0,2,0,2666],["es:golpear",1792431055409,2,2,9,4655],["es:flipar",1792431059144,2,2,18,3382],["es:me flipa",1792431062292,2,2,19,2795],["es:meterse",1792431068397,1,2,12,5750],["es:desplegar",1792431071625,2,2,9,2875],["es:hermana",1792431074211,3,2,57,2233],["es:salió",1792431077820,2,2,18,3255],["es:Ya",1792431080020,2,2,36,1847],["es:castigar",1792431085376,2,2,24,1922],["es:los que",1792431088915,2,2,18,3186],["es:dar fruto",1792431096270,2,2,24,7002],["es:Pasado",1792431104692,0,2,0,8068],["es:nuevo",1792431106978,3,2,53,1933],["es:de hecho",1792431110672,2,2,33,3340],["es:despertar",1792431117130,2,2,17,6106],["es:he bajado",1792431121522,2,2,22,4039],["es:pesar",1792431128304,2,2,21,6427],["es:sino que",1792431133655,0,2,0,4997],["es:fallecer",1792431138017,2,2,18,4009],["es:descojonarse",1792431143515,2,2,26,5144],["es:estuvimos hablando",1792431146465,2,2,34,2595],["es:cuerno",1792431149332,2,2,10,2514],["es:ningún",1792431151946,2,2,22,2261],["es:Logro",1792431154599,2,2,39,2300],["es:cojonudo",1792431158542,0,2,0,3589],["es:golpe",1792431160663,2,2,9,1767],["es:cansar",1792431163244,2,2,33,2228],["es:parte",1792431166261,2,2,35,2662],["es:anfitrión anfitriona",1792431170634,0,2,0,4020],["es:hacerse daño",1792431174003,2,2,35,3014],["es:iba a ser",1792431176719,2,2,30,2363],["es:seguidores",1792431180203,3,2,57,3131],["es:al parecer",1792431184677,2,2,10,4121],["es:sano y salvo",1792431187245,2,2,22,2215],["es:dar la vuelta",1792431189463,2,2,19,1865],["es:anciana",1792431191679,2,2,22,1863],["es:pillado",1792431196457,2,2,10,4425],["es:agacharse",1792431199273,2,3,1,2462],["es:los he seguido",1792431202738,2,3,1,3111],["es:subir",1792431205724,2,3,1,2632],["es:maletero",1792431209138,0,3,0,3058],["es:Pasado",1792431211741,3,3,2,2250],["es:sino que",1792431214771,2,3,1,2678],["es:cojonudo",1792431218006,2,3,1,2881],["es:anfitrión anfitriona",1792431221478,2,3,1,3119],["es:sacar",1792431225879,2,3,1,4047],["es:maletero",1792431229311,0,3,0,3076],["es:maletero",1792431231158,2,3,1,1493],["es:haber",1792431242131,3,0,10,5218],["es:avecinar",1792431248106,1,0,0,5620],["es:hay",1792431251132,3,0,8,2671],["es:picante",1792431253098,3,0,7,1612],["es:Aunque",1792431257894,0,0,0,4442],["es:borrar",1792431261256,3,0,9,3007],["es:coger",1792431306727,0,0,0,45116],["es:Aunque",1792431309849,3,1,1,2765],["es:coger",1792431313255,3,1,1,3051],["es:avecinar",1792431315871,2,1,0,2261],["es:avecinar",1792431319480,2,1,1,3255],["es:moverse",1792431332090,3,0,8,4640],["es:cualquier cosa",1792431338707,0,0,0,6264],["es:broma",1792431344209,3,0,6,5148],["es:hayamos",1792431351353,0,0,0,6791],["es:cualquier cosa",1792431354004,3,1,1,2297],["es:hayamos",1792431360014,0,1,0,5657],["es:hayamos",1792431363980,2,1,0,3612],["es:hayamos",1792431365497,2,1,1,1163],["es:amarilla",1792431374218,0,0,0,6285],["es:Deber",1792431377833,3,0,7,3262],["es:vecindario",1792431380983,3,0,7,2797],["es:Cenar",1792431384467,3,0,8,3127],["es:súmale que…",1792431387266,3,0,10,2444],["es:bajar",1792431390480,3,0,9,2860],["es:Oscuro",1792431393022,3,0,9,2189],["es:ser capaz de",1792431395390,3,0,9,2016],["es:amarilla",1792431397691,3,1,1,1947],["es:estado fallido",1792431405466,3,0,9,5986],["es:ladrón ladrona",1792431409463,3,0,8,3644],["es:Cierto",1792431412336,2,0,0,2519],["es:casi",1792431416247,2,0,0,3558],["es:adentrarse en",1792431420458,3,0,10,3858],["es:Decir",1792431422458,3,0,9,1646],["es:Cierto",1792431424756,2,1,2,1944],["es:casi",1792431427924,2,1,2,2814],["es:y punto",1792431442448,1,0,0,6754],["es:ha cogido",1792431448979,3,0,8,6178],["es:montar",1792431460518,2,0,0,11185],["es:Robar",1792431463717,3,0,9,2845],["es:Checar",1792431467012,1,0,0,2941],["es:viva",1792431470148,3,0,6,2782],["es:Disfrutar",1792431472465,3,0,9,1964],["es:Lente",1792431475112,0,0,0,2293],["es:Lente",1792431477513,2,1,0,2046],["es:y punto",1792431479796,2,1,0,1930],["es:Checar",1792431482379,2,1,0,2229],["es:montar",1792431484997,2,1,2,2263],["es:Lente",1792431487882,2,1,1,2532],["es:y punto",1792431490513,2,1,1,2278],["es:Checar",1792431493263,2,1,1,2396],["es:joya",1792431498579,2,0,0,3230],["es:cogidos",1792431503118,2,0,0,4186],["es:vez",1792431505464,2,0,0,1992],["es:vergüencita",1792431556259,0,0,0,50441],["es:comerse",1792431561179,3,0,7,4553],["es:plantilla",1792431565758,0,0,0,4224],["es:ido corriendo",1792431580062,0,0,0,13950],["es:daños colaterales",1792431583430,3,0,6,3013],["es:vergüencita",1792431586146,2,1,0,2362],["es:plantilla",1792431588847,2,1,0,2347],["es:ido corriendo",1792431592489,2,1,0,3287],["es:joya",1792431594940,3,1,4,2095],["es:cogidos",1792431597622,2,1,2,2329],["es:vez",1792431600106,2,1,2,2129],["es:vergüencita",1792431602814,2,1,1,2354],["es:plantilla",1792431626352,2,1,1,23182],["es:ido corriendo",1792431631935,2,1,1,5229],["es:allí",1792446404049,1,0,0,4617],["es:allí",1792483306385,2,1,0,5210],["es:estar de moda",1792483310202,2,0,0,3460],["es:fruta",1792483313586,3,0,6,3028],["es:no me podía bajar",1792483320003,1,0,0,6062],["es:los he seguido",1792483324969,2,2,2,4610],["es:lamentable",1792483331669,3,0,9,6347],["es:sino que",1792483335037,2,2,2,3013],["es:fallar",1792483340168,2,0,0,4778],["es:Checar",1792483343214,2,2,3,2693],["es:arrugar",1792483348584,1,0,0,5016],["es:amarilla",1792483353679,2,2,2,4741],["es:dar pena",1792483358231,1,0,0,4198],["es:cualquier cosa",1792483363441,2,2,2,4857],["es:alejamiento",1792483368415,0,0,0,4620],["es:agacharse",1792483372434,2,2,2,3666],["es:al día de hoy",1792483376176,3,0,7,3388],["es:maletero",1792483381692,2,2,2,5162],["es:Propio",1792483385010,0,0,0,2964],["es:castigo",1792483391183,2,2,2,5820],["es:ahora",1792483395031,3,0,6,3495],["es:anfitrión anfitriona",1792483398699,2,2,2,3315],["es:en general",1792483401283,2,0,0,2231],["es:hayamos",1792483412943,0,2,0,11306],["es:cansancio",1792483418154,0,0,0,4855],["es:ido corriendo",1792483423735,0,2,0,5228],["es:cuidar",1792483428161,2,0,0,4073],["es:alejamiento",1792483431781,0,1,0,3267],["es:subir",1792483437199,1,2,2,5062],["es:cruzarse",1792483440979,2,0,0,3427],["es:vergüencita",1792483445920,0,2,0,4587],["es:Propio",1792483449270,2,1,0,2996],["es:golpe de suerte",1792483455687,0,0,0,6064],["es:descartar",1792483654213,2,2,4,60000],["es:cansancio",1792483658876,3,1,1,4282],["es:alejamiento",1792483663814,2,1,0,4580],["es:golpe de suerte",1792483667141,2,1,0,2973],["es:no me podía bajar",1792483674545,1,1,0,7047],["es:según",1792483680158,0,0,0,5257],["es:arrugar",1792483686890,2,1,0,6379],["es:y punto",1792483690456,2,2,4,3212],["es:dar pena",1792483694072,2,1,0,3263],["es:cancha",1792483699493,0,0,0,5066],["es:plantilla",1792483704557,0,2,0,4710],["es:volver",1792483709138,3,0,9,4227],["es:cojonudo",1792483715083,2,2,2,5591],["es:pasado de moda",1792483721952,0,0,0,6516],["es:avecinar",1792483726431,3,2,5,4125],["es:maduro",1792483729427,3,0,8,2643],["es:coger",1792483734259,0,2,0,4479],["es:hace poco",1792483737571,3,0,10,2958],["es:sacar",1792483743837,0,2,0,5911],["es:según",1792483747852,2,1,0,3661],["es:roble",1792483751869,0,0,0,3663],["es:cancha",1792503264847,2,1,0,4960],["es:pasado de moda",1792602343142,2,1,0,6793],["es:roble",1792602347069,0,1,0,3571],["es:allí",1792602349773,2,1,6,2351],["es:estar de moda",1792602359794,2,1,10,9670],["es:fallar",1792602364759,2,1,10,4609],["es:en general",1792602372190,2,1,10,7078],["es:no me podía bajar",1792602377995,1,1,0,5453],["es:hayamos",1792602382794,0,3,0,4445],["es:ido corriendo",1792602390445,0,3,0,7295],["es:cuidar",1792602393546,2,1,9,2747],["es:cruzarse",1792602396986,2,1,11,3086],["es:vergüencita",1792934208410,2,3,1,4713],["es:Propio",1792934211418,2,1,4,2652],["es:alejamiento",1793094318684,0,1,0,3877],["es:golpe de suerte",1793094323809,0,1,0,4769],["es:arrugar",1793094330081,0,1,0,5914],["es:dar pena",1793094333880,2,1,13,3445],["es:plantilla",1793094338862,0,3,0,4628],["es:coger",1793094759216,0,3,0,60000],["es:sacar",1793094764116,2,3,1,4523],["es:según",1793094767314,2,1,5,2840],["es:cancha",1793094771532,2,1,4,3861],["es:roble",1793094775414,0,1,0,3527],["es:no me podía bajar",1793129394808,2,1,0,5042],["es:pasado de moda",1793129398996,2,1,12,3832],["es:hayamos",1793129403494,2,3,1,4146],["es:ido corriendo",1793129412056,0,3,0,8207],["es:alejamiento",1793129415704,0,1,0,3291],["es:golpe de suerte",1793129424214,2,1,0,8155],["es:arrugar",1793129428704,2,1,0,4137],["es:roble",1793130246726,2,1,0,60000],["es:plantilla",1793173223875,0,3,0,3817],["es:coger",1793173228376,0,3,0,4141],["es:alejamiento",1793173231223,0,1,0,2489],["es:no me podía bajar",1793173234327,2,1,11,2751],["es:ido corriendo",1793173237420,2,3,1,2739],["es:golpe de suerte",1793173240341,2,1,1,2567],["es:arrugar",1793173243927,2,1,1,3233],["es:roble",1793173247224,2,1,1,2943],["es:cansancio",1793173252475,1,2,5,4897],["es:descartar",1793173256813,2,2,10,3984],["es:a propósito",1793173259781,2,2,28,2614],["es:bajar",1793173263538,2,2,41,3403],["es:Oscuro",1793173266606,2,2,43,2712],["es:vecindario",1793173270373,2,2,39,3413],["es:de ninguna manera",1793173275056,2,2,17,4329],["es:imaginar",1793173277554,3,2,92,2143],["es:predecir",1793173280485,2,2,62,2576],["es:y punto",1793173284940,2,2,19,4101],["es:jefe",1793173288380,2,2,57,3086],["es:moverse",1793173292369,2,2,39,3635],["es:alejamiento",1793173295879,2,1,0,3155],["es:Checar",1793173298620,2,2,17,2384],["es:avecinar",1793173302722,2,2,27,3748],["es:ladrón ladrona",1793173337500,2,2,39,34423],["es:salir con",1793173339874,2,2,57,2012],["es:te quiero",1793173342892,2,2,63,2663],["es:cabeza",1793173345830,2,2,62,2585],["es:Deber",1793173349092,2,2,38,2906],["es:irse",1793173352862,2,2,66,3415],["es:todavía",1793173355572,2,2,59,2355],["es:Cierto",1793173358200,2,2,22,2273],["es:sobre todo",1793173360383,2,2,58,1829],["es:los he seguido",1793173363517,2,2,7,2780],["es:Proyecto",1793173366678,2,2,59,2805],["es:maduro",1793173371578,2,2,40,4546],["es:harto",1793173378213,2,2,4,6279],["es:golpear",1793173381140,2,2,28,2574],["es:Disfrutar",1793173385736,2,2,42,4240],["es:ahora",1793173389319,3,2,62,3230],["es:allí",1793173392205,2,2,22,2530],["es:dormirse",1793173395529,2,2,64,2970],["es:Lente",1793173399143,0,2,0,3260],["es:buenísimo",1793173402632,2,2,59,3135],["es:montar",1793173410660,0,2,0,7675],["es:periodista",1793173413931,3,2,96,2917],["es:viva",1793173417156,2,2,36,2870],["es:cogidos",1793173421175,0,2,0,3664],["es:fruta",1793173424768,2,2,36,3239],["es:mejor",1793173426996,3,2,92,1874],["es:vez",1793173430092,3,2,39,2743],["es:daños colaterales",1793173433770,3,2,64,3325],["es:vergüencita",1793173437190,2,2,5,3065],["es:desplegar",1793173439974,2,2,26,2430],["es:promedio",1793173443809,2,2,66,3480],["es:joya",1793173446982,2,2,32,2819],["es:ha cogido",1793173453612,2,2,41,6275],["es:cama",1793173457045,2,2,63,3078],["es:hay",1793173467156,2,2,41,9757],["es:fracaso",1793173470645,1,2,41,3135],["es:no solo",1793173474231,2,2,59,3233],["es:agacharse",1793173479295,2,2,6,4710],["es:asistencia",1793173483261,3,2,94,3612],["es:al día de hoy",1793173486561,2,2,38,2946],["es:sino que",1793173490111,0,2,0,3196],["es:borrar",1793173492937,2,2,43,2472],["es:golpe",1793173495542,2,2,25,2252],["es:plantilla",1793176495706,0,3,0,3900],["es:coger",1793176500278,2,3,1,4214],["es:alejamiento",1793176503334,2,1,1,2701],["es:Lente",1793176506700,2,3,1,3013],["es:montar",1793176509414,2,3,1,2360],["es:cogidos",1793176512631,2,3,1,2862],["es:sino que",1793176516032,2,3,1,3046],["es:en promedio",1793176518899,2,2,62,2512],["es:sacar",1793176523729,2,2,4,4475],["es:asistir",1793176526747,3,2,99,2663],["es:lluvia",1793176529846,2,2,27,2745],["es:veraniego",1793176532965,2,2,61,2765],["es:agarrar",1793176538326,0,2,0,5007],["es:no consigo",1793176545291,2,2,57,6608],["es:dar",1793176548319,2,2,59,2673],["es:literalmente",1793176553957,2,2,65,5285],["es:claro que",1793176567159,2,2,28,12847],["es:cojonudo",1793176603496,1,2,5,35983],["es:balancearse",1793176606194,2,2,63,2343],["es:película",1793176609087,2,2,66,2538],["es:picante",1793176611910,2,2,39,2468],["es:ser capaz de",1793176614771,2,2,43,2506],["es:casi",1793176619863,2,2,23,4739],["es:subir",1793176623163,0,2,0,2946],["es:hayamos",1793176626223,2,2,2,2706],["es:cansado",1793176629208,2,2,61,2631],["es:querer",1793176632210,2,2,58,2647],["es:señora",1793176634671,2,2,57,2107],["es:chica",1793176639003,2,2,60,3978],["es:lograr",1793176642589,2,2,57,3232],["es:Robar",1793176646463,2,2,43,3520],["es:ver",1793176649348,2,2,57,2531],["es:sin",1793176652448,2,2,56,2745],["es:crítica",1793176654599,2,2,62,1796],["es:Pelota",1793176657526,2,2,60,2573],["es:quiso",1793176663042,2,2,16,5162],["es:castigo",1793176666466,2,2,7,3070],["es:Pasado",1793176668734,2,2,10,1913],["es:conocer",1793176671102,2,2,62,2014],["es:todo el mundo",1793176673448,2,2,63,1992],["es:preguntar",1793176676563,2,2,61,2760],["es:entrar",1793176678787,2,2,63,1869],["es:puesto",1793176683096,2,2,25,3953],["es:Cenar",1793176686419,2,2,42,2967],["es:cualquier cosa",1793176691156,0,2,0,4383],["es:esposa",1793176693620,2,2,59,2109],["es:avisar",1793176697178,2,2,27,3204],["es:maletero",1793176701450,0,2,0,3916],["es:Aunque",1793176704888,2,2,9,3084],["es:Poner",1793176710570,2,2,63,5329],["es:Decir",1793176713405,2,2,43,2481],["es:comerse",1793176719470,2,2,40,5707],["es:anfitrión anfitriona",1793176722885,2,2,7,3060],["es:venir",1793176725618,2,2,60,2379],["es:meterse con",1793176730594,0,0,0,4621],["es:broma",1793176734941,2,2,37,3988],["es:sumar",1793176738955,2,0,0,3659],["es:estado fallido",1793176741590,2,2,42,2281],["es:fallido",1793176744021,2,0,0,2077],["es:amarilla",1793176746565,2,2,14,2188],["es:trompada",1793176751459,0,0,0,4539],["es:meterse con",1793176754887,0,1,0,3074],["es:trompada",1793176757123,2,1,0,1881],["es:meterse con",1793176759046,2,1,0,1569],["es:plantilla",1793176764628,2,3,1,5226],["es:agarrar",1793176771178,0,3,0,6196],["es:subir",1793176775310,2,3,1,3778],["es:cualquier cosa",1793176778225,2,3,1,2561],["es:maletero",1793176781090,2,3,1,2510],["es:sumar",1793176783265,2,1,2,1821],["es:fallido",1793176787583,2,1,2,3964],["es:trompada",1793176790170,2,1,1,2234],["es:meterse con",1793176793200,2,1,1,2674],["es:agarrar",1793176796743,2,3,1,3190],["es:cualquier cosa",1793228589757,2,2,2,5021],["es:maletero",1793228593844,2,2,2,3730],["es:cuerno",1793228597778,2,2,29,3576],["es:subir",1793228601889,1,2,1,3757],["es:meterse con",1793228606836,0,2,0,4591],["es:adentrarse en",1793228611669,2,2,46,4479],["es:volver",1793228614627,2,2,43,2600],["es:agarrar",1793228618827,0,2,0,3846],["es:haber",1793228621903,2,2,46,2719],["es:montar",1793228625197,2,2,3,2939],["es:súmale que…",1793228628117,2,2,45,2565],["es:golpe de suerte",1793228631914,2,2,2,3441],["es:a trompadas",1793228634632,2,2,28,2365],["es:sino que",1793228637519,2,2,2,2534],["es:ido corriendo",1793228640648,2,2,2,2775],["es:trompada",1793228644079,2,2,2,3077],["es:roble",1793228648926,2,2,2,4494],["es:lamentable",1793228653094,2,2,43,3814],["es:coger",1793228673420,0,2,0,19973],["es:al parecer",1793228679371,2,2,29,5585],["es:meterse con",1793229788096,2,3,1,1842],["es:agarrar",1793229792438,2,3,1,3987],["es:coger",1793229796341,2,3,1,3550],["es:predijo",1793229800289,2,2,28,3594],["es:pillado",1793229805185,2,2,29,4543],["es:plantilla",1793229810989,2,2,2,5448],["es:Lente",1793229813440,2,2,2,2096],["es:alejamiento",1793229818846,2,2,2,5052],["es:arrugar",1793229822899,2,2,2,3700],["es:arriba",1793229826584,2,2,30,3330],["es:Propio",1793229829820,2,2,10,2883],["es:cogidos",1793229834108,2,2,4,3934],["es:echar una siesta",1793229839754,2,2,29,5292],["es:no me aclaro",1793229847355,2,0,0,7245],["es:no me aclaro",1793229849985,2,1,2,2276],["es:matar",1793229855865,0,0,0,4311],["es:qué vergüenza",1793229859124,2,0,0,2905],["es:matar",1793264614176,2,1,0,3083],["es:qué vergüenza",1793264616508,2,1,2,1976],["es:aclararse",1793264622974,2,0,0,6110],["es:quitarse un peso de encima",1793264629657,1,0,0,6324],["es:descarte",1793264635636,1,0,0,5623],["es:dar un paseo",1793264641021,1,0,0,5031],["es:ninguna",1793264643554,3,0,10,2180],["es:esperar",1793264647093,3,0,9,3185],["es:Seno",1793264650451,3,0,8,3004],["es:partirse",1793264656819,0,0,0,6014],["es:partirse",1793264660135,2,1,0,2963],["es:quitarse un peso de encima",1793264665243,1,1,0,4755],["es:descarte",1793264669186,1,1,0,3589],["es:dar un paseo",1793264672051,2,1,0,2511],["es:quitarse un peso de encima",1793264674783,2,1,0,2375],["es:descarte",1793264677406,2,1,0,2268],["es:matar",1793264679590,2,1,1,1830],["es:aclararse",1793264682654,2,1,2,2710],["es:partirse",1793264688053,0,1,0,5045],["es:partirse",1793264690189,2,1,0,1783],["es:dar un paseo",1793264692638,2,1,1,2094],["es:quitarse un peso de encima",1793264695929,2,1,1,2937],["es:descarte",1793264698798,2,1,1,2515],["es:partirse",1793264704466,0,1,0,5314],["es:partirse",1793264706285,2,1,0,1465],["es:partirse",1793264707985,2,1,1,1345],["es:cuidado",1793264716858,2,0,0,6136],["es:cuidado",1793281628507,2,1,2,3495],["es:sacarle X a alguien",1793281635126,0,0,0,6264],["es:Vaso",1793281639006,2,0,0,3523],["es:así",1793281641689,2,0,0,2324],["es:pedir salir a alguien",1793281646149,2,0,0,4107],["es:secar",1793281649513,0,0,0,3010],["es:desarrollo",1793281655003,3,0,6,5136],["es:¡joya!",1793281658840,2,0,0,3484],["es:hasta",1793281661287,2,0,0,2093],["es:sacarle X a alguien",1793281665321,2,1,0,3680],["es:secar",1793281668220,2,1,0,2544],["es:Vaso",1793281670737,2,1,2,2163],["es:así",1793281673822,3,1,5,2730],["es:pedir salir a alguien",1793281682208,2,1,2,8033],["es:¡joya!",1793281685489,2,1,2,2926],["es:hasta",1793281688056,2,1,2,2212],["es:sacarle X a alguien",1793281691501,2,1,1,3091],["es:secar",1793281694201,2,1,1,2345],["es:acoger",1793312949072,1,0,0,11846],["es:Rol",1793312951756,3,0,9,2326],["es:significar",1793312954544,3,0,8,2433],["es:asustar",1793312958396,0,0,0,3499],["es:bastar",1793312962495,1,0,0,3742],["es:cara",1793312966455,3,0,10,3607],["es:sano como un roble",1793312971278,0,0,0,4468],["es:Ambicioso",1793312973210,3,0,10,1576],["es:altibajos",1793312978341,3,0,6,4777],["es:asustar",1793312982325,0,1,0,3630],["es:sano como un roble",1793312984591,2,1,0,1912],["es:asustar",1793312987594,2,1,0,2650],["es:acoger",1793312991616,2,1,0,3665],["es:bastar",1793312994801,2,1,0,2830],["es:sano como un roble",1793312997179,2,1,1,2022],["es:asustar",1793313001253,2,1,1,3720],["es:acoger",1793313006133,0,1,0,4526],["es:acoger",1793313007785,2,1,0,1299],["es:bastar",1793313009698,2,1,1,1554],["es:acoger",1793313012048,2,1,1,1997],["es:fallo técnico",1793313038694,2,0,0,4924],["es:delantero",1793313045676,1,0,0,6628],["es:ponerse + emoción",1793313059239,0,0,0,13208],["es:Faltar",1793313062636,3,0,6,3043],["es:empatar",1793313067787,3,0,9,4796],["es:ponerse + emoción",1793313073691,2,1,0,5550],["es:delantero",1793313077053,2,1,0,3008],["es:fallo técnico",1793313081255,3,1,4,3847],["es:ponerse + emoción",1793313084634,2,1,1,3026],["es:delantero",1793313088116,2,1,1,3129],["es:llevar + gerundio",1793314317195,3,0,10,5394],["es:gastar",1793314321688,3,0,7,4137],["es:tutear",1793314324203,3,0,9,2156],["es:primera vez",1793314326420,3,0,10,1862],["es:maña",1793314329193,3,0,10,2418],["es:estampado",1793314332696,3,0,6,3146],["es:se lleva diciendo",1793314335693,3,0,9,2642],["es:hacer una tontería",1793314346777,3,0,9,10728],["es:junto a alguien",1793314351014,3,0,9,3882],["es:el tonito",1793314353676,3,0,10,2309],["es:cortesía",1793314356408,3,0,10,2376],["es:lupa",1793314359599,3,0,10,2837],["es:chapuzas",1793314362356,3,0,8,2402],["es:aguantar",1793314366531,3,0,8,3816],["es:ruido",1793314372064,3,0,10,5168],["es:capacitar",1793314376662,3,0,10,4236],["es:convivir",1793391213708,3,0,7,2920],["es:especulaciones",1793391881524,3,0,6,5108],["es:Cupo",1793645921743,2,2,31,2081],["es:sumar",1793645923882,2,2,18,1783],["es:sano como un roble",1793645926206,2,2,5,1966],["es:fallido",1793645928239,2,2,18,1677],["es:hace poco",1793645931470,2,2,57,2874],["es:hasta",1793649460372,2,2,14,2926],["es:bastar",1793649464674,2,2,10,3945],["es:dañino",1793694194515,0,2,0,5689],["es:roble",1793694197283,2,2,2,2411],["es:alejamiento",1793694200354,2,2,2,2716],["es:da igual",1793694206075,2,2,40,5367],["es:ponerse + emoción",1793694210868,0,2,0,4438],["es:meterse",1793694217079,2,2,32,5855],["es:harto",1793694220051,2,2,10,2614],["es:partirse",1793694224631,1,2,1,4225],["es:cuidar",1793694227877,2,2,46,2891],["es:cine",1793694618080,2,2,42,60000],["es:dañino",1793716197162,2,3,2,4822],["es:ponerse + emoción",1793716200966,2,3,1,3449],["es:otra vez",1793716203467,2,2,35,2143],["es:sino que",1793716206560,2,2,2,2738],["es:fallar",1793716209589,2,2,49,2673],["es:agarrar",1793716214490,2,2,2,4547],["es:será que",1793716221028,0,2,0,6183],["es:¡joya!",1793716224612,2,2,20,3229],["es:dar un paseo",1793716228167,0,2,0,3202],["es:coger",1793716231296,2,2,2,2769],["es:sacar",1793716235766,2,2,6,4116],["es:quitarse un peso de encima",1793716239729,0,2,0,3608],["es:pedir salir a alguien",1793716243282,2,2,21,3199],["es:golpe de suerte",1793716249443,2,2,4,5805],["es:arrugar",1793716253382,2,2,4,3585],["es:cita",1793716260303,0,2,0,6566],["es:sacarle X a alguien",1793716271212,0,2,0,10554],["es:cruzarse",1793716274012,2,2,50,2446],["es:en general",1793716276316,2,2,49,1949],["es:maletero",1793717433333,2,2,2,60000],["ln:Zemi",1793745102186,2,2,11,3085],["ln:Nasepeli",1793745106481,0,2,0,3941],["ln:Kolimbisa",1793745110152,0,2,0,3316],["ln:Nzoto",1793745112532,2,2,51,2024],["ln:Kasi",1793745115016,2,2,43,2131],["ln:Kosaka",1793745119132,0,2,0,3763],["ln:Kokenda",1793745123712,0,2,0,4227],["en:to fine",1793745857732,2,2,26,6264],["en:to be off the hook",1793745861464,2,2,46,3376],["en:to be on edge",1793745868009,1,2,6,6192],["en:grounded",1793745873027,2,2,70,4663],["en:to impeach",1793745910397,0,2,0,5306],["en:become desensitised to",1793745936422,2,2,26,3516],["en:To act [sth] out",1793745940276,0,2,0,3499],["es:será que",1793776409322,2,3,2,4027],["es:dar un paseo",1793776414705,2,3,1,5026],["es:quitarse un peso de encima",1793776708523,0,3,0,60000],["es:cita",1793776714752,2,3,2,5853],["es:sacarle X a alguien",1793776721806,1,3,0,6696],["es:según",1793776724490,2,2,19,2324],["es:sinceramente",1793776727558,2,2,88,2711],["es:los he seguido",1793776730627,2,2,13,2712],["es:cuidado",1793776734319,2,2,21,3336],["es:hayamos",1793776737393,2,2,4,2719],["es:estar de moda",1793776741025,2,2,49,3278],["es:subir",1793776743695,2,2,2,2315],["es:agacharse",1793776752147,0,2,0,8096],["es:echar",1793776759761,0,2,0,7259],["es:castigo",1793776765714,2,2,13,5599],["es:Lente",1793776768742,2,2,4,2673],["es:patria",1793776771815,3,2,140,2719],["es:matar",1793776774365,2,2,4,2196],["es:montar",1793776780607,0,2,0,5888],["es:así",1793776783478,2,2,29,2516],["es:cogidos",1793776788424,2,2,11,4591],["es:descarte",1793776794675,0,2,0,5894],["es:anfitrión anfitriona",1793776797599,2,2,14,2566],["es:cancha",1793776802373,0,2,0,4420],["es:cansancio",1793776806122,0,2,0,3392],["es:A pesar de que",1793776809535,0,2,0,3058],["es:siguiendo",1793776814752,2,2,43,4862],["es:hermano",1793776817736,3,2,136,2627],["es:traer suerte",1793776823874,2,2,38,5781],["es:ido corriendo",1793776835102,1,2,1,10873],["es:basta",1793776838099,2,0,0,2642],["es:Vaso",1793776841918,2,2,18,3463],["es:pillar",1793776847998,0,0,0,5725],["es:cojonudo",1793776852312,2,2,9,3958],["es:empapado",1793776897486,1,0,0,44819],["es:no me aclaro",1793776906869,2,2,19,9010],["es:me da vergüenza",1793776911714,2,0,0,4483],["es:pillar",1793776915386,2,1,0,3315],["es:acoger",1793776932518,0,2,0,16775],["es:encajar",1793776937225,0,0,0,4341],["es:partirse",1793776942642,0,2,0,5059],["es:tirón",1793776946769,0,0,0,3767],["es:cualquier cosa",1793776949899,2,2,5,2774],["es:el vencimiento",1793776958936,0,0,0,8683],["es:fallo técnico",1793776961822,2,2,25,2532],["es:sumarse a",1793776967224,1,0,0,5046],["es:plantilla",1793776971198,0,2,0,3619],["es:cosilla",1793776973686,0,0,0,2133],["es:hacer la maleta",1793776978602,2,2,41,4562],["es:agarrarse",1793776987110,0,0,0,8153],["es:delantero",1793776990351,2,2,13,2887],["es:recuerdo",1793776994523,0,0,0,3817],["es:meterse con",1793776998265,2,2,2,3386],["es:encajar",1793777001220,0,1,0,2599],["es:jalar",1793777003410,0,0,0,1834],["es:vergüencita",1793777005685,2,2,11,1919],["es:por cierto",1793777009052,0,0,0,3012],["es:tirón",1793777011357,0,1,0,1946],["es:trompada",1793777016837,0,2,0,5125],["es:se me había olvidado",1793777022759,2,0,0,5565],["es:el vencimiento",1793777025171,2,1,0,2058],["es:Faltar",1793777027701,2,2,27,2174],["es:plegar",1793777032566,0,0,0,4508],["es:asustar",1793777035373,0,2,0,2451],["es:cosilla",1793777037485,0,1,0,1757],["es:ocasionar",1793777040339,2,0,0,2498],["es:qué vergüenza",1793777043210,2,2,18,2516],["es:madrugar",1793777046015,0,0,0,2447],["es:estampado",1793777064841,2,2,28,18472],["es:agarrarse",1793777070992,0,1,0,5786],["es:recuerdo",1793777073893,2,1,0,2541],["es:encajar",1793777076872,0,1,0,2623],["es:jalar",1793777078892,0,1,0,1664],["es:por cierto",1793777084456,1,1,0,5206],["es:tirón",1793777086751,1,1,0,1940],["es:vaya",1793777090741,2,0,0,3631],["es:ponerse + emoción",1793777094794,2,2,2,3699],["es:plegar",1793777097423,2,1,0,2275],["es:cosilla",1793777099957,1,1,0,2178],["es:Quedar",1793777104924,2,0,0,4609],["es:aclararse",1793777111704,0,2,0,6425],["es:madrugar",1793777114095,0,1,0,2036],["es:enterarse",1793777118299,0,0,0,3847],["es:secar",1793777122071,0,2,0,3416],["es:llevar sin + infinitivo",1793777130155,2,0,0,7730],["es:desarrollo",1793777134818,2,2,29,4306],["es:agarrarse",1793777138313,2,1,0,3139],["es:encajar",1793777146773,0,1,0,8105],["es:jalar",1793777150203,0,1,0,3072],["es:despierta",1793777155042,0,0,0,4484],["es:altibajos",1793777158361,2,2,28,2964],["es:malgastar",1793777164132,0,0,0,5413],["es:madrugar",1793777166596,0,1,0,2109],["es:enterarse",1793777170267,1,1,0,3316],["es:encajar",1793777231292,0,1,0,60000],["es:jalar",1793777233537,0,1,0,1879],["es:despierta",1793777236781,0,1,0,2886],["es:malgastar",1793777238955,0,1,0,1818],["es:madrugar",1793777240952,0,1,0,1640],["es:empapado",1793777244183,0,1,0,2874],["en:to impeach",1793777273365,2,3,1,2910],["en:To act [sth] out",1793777281912,1,3,0,8193],["en:bereaved",1793777284892,2,2,46,2623],["en:Crooked",1793777291179,0,2,0,5933],["en:Realm",1793777294355,2,2,31,2822],["en:fine print",1793777297076,2,2,20,2367],["en:stay grounded",1793777299411,2,2,14,1981],["en:on a par with [sth]",1793777305055,0,2,0,5290],["en:to bestow (sth on sb)",1793777308919,0,2,0,3510],["en:scorched",1793777313239,2,2,27,3967],["en:meticulous",1793777315717,2,2,51,2124],["en:to cauterise",1793777319136,0,2,0,3064],["en:scorched rice",1793777322220,2,2,27,2728],["en:fathom [sth]",1793777326390,0,2,0,3817],["en:hook",1793777328901,2,2,47,2157],["en:hold up",1793777332517,2,2,26,3261],["en:to ground (a flight)",1793777338388,2,2,32,5517],["en:not know the first thing about",1793777343716,0,2,0,4974],["en:hobo",1793777349457,0,2,0,5387],["en:Limb",1793777352430,0,2,0,2619],["en:hold (verb)",1793777355010,2,2,52,2225],["en:Intercourse",1793777358713,0,2,0,3349],["en:impeachment",1793777364604,2,2,26,5537],["en:scorched earth",1793777368221,2,2,15,3263],["en:to get hold of sb",1793777376269,0,2,0,7694],["en:Quench",1793777383571,0,2,0,6948],["en:to corner",1793777388182,2,2,50,4252],["en:bereavement",1793777391591,2,2,28,3056],["en:to grant",1793777396834,2,2,27,4890],["en:be drawn to",1793777401810,0,2,0,4622],["en:thrill",1793777404214,2,2,16,2050],["en:to ship [sb]",1793777408504,2,2,12,3935],["en:to pry into",1793777412286,0,2,0,3428],["en:hold on",1793777437671,2,2,45,25031],["en:Thirst",1793777440559,2,2,26,2526],["en:Conceited",1793777444831,0,2,0,3917],["en:Ankle",1793777488034,2,2,15,42849],["en:take for granted",1793777492415,2,2,29,4018],["en:to have a hold on sb",1793777501837,0,2,0,9069],["en:a fine",1793777506250,0,2,0,4055],["en:Crooked",1793777510574,0,3,0,3969],["en:on a par with [sth]",1793777513916,0,3,0,2985],["en:on a par with [sth]",1793777514082,0,3,0,3151],["en:to bestow (sth on sb)",1793777523469,0,3,0,9033],["en:to cauterise",1793777528413,0,3,0,4589],["en:fathom [sth]",1793777533992,2,3,1,5225],["en:not know the first thing about",1793777547761,2,3,1,13414],["en:hobo",1793777648054,2,3,1,60000],["en:Limb",1793777650423,2,3,1,2004],["en:Intercourse",1793777652859,2,3,1,2078],["en:to get hold of sb",1793777660541,2,3,1,7327],["en:Quench",1793777663948,0,3,0,3051],["en:be drawn to",1793777666722,2,3,1,2418],["en:to pry into",1793777669872,0,3,0,2796],["en:Conceited",1793777673890,0,3,0,3663],["en:to have a hold on sb",1793777679171,2,3,1,4926],["en:a fine",1793777681805,2,3,2,2278],["en:Crooked",1793777684872,2,3,1,2712],["en:on a par with [sth]",1793777687907,2,3,1,2681],["en:to bestow (sth on sb)",1793777693391,2,3,1,5128],["en:to cauterise",1793777698175,2,3,1,4430],["en:To act [sth] out",1793777701186,2,3,1,2654],["en:Quench",1793777706655,0,3,0,5115],["en:to pry into",1793777715312,2,3,1,8304],["en:Conceited",1793777721433,0,3,0,5767],["en:Quench",1793777723940,2,3,1,2153],["en:Conceited",1793777725841,2,3,1,1547],["es:encajar",1793778379009,1,1,0,12137],["es:jalar",1793778380905,1,1,0,1539],["es:despierta",1793778383239,1,1,0,1976],["es:sumarse a",1793778387294,2,1,0,3699],["es:malgastar",1793778390195,1,1,0,2543],["en:add-on",1793778644052,2,0,0,3181],["en:a rip-off",1793778648522,0,0,0,4114],["en:Earnestly",1793778658103,0,0,0,9227],["en:friends in high places",1793778663525,0,0,0,5068],["en:carry [sth] out",1793778676110,1,0,0,12231],["es:quitarse un peso de encima",1793779306175,1,3,0,2828],["es:agacharse",1793779312523,2,3,1,5995],["es:echar",1793779315519,2,3,2,2640],["es:montar",1793779318698,2,3,1,2823],["es:descarte",1793779324776,0,3,0,5722],["es:cancha",1793779327968,2,3,1,2835],["es:cansancio",1793779330666,2,3,1,2346],["es:A pesar de que",1793779333496,2,3,2,2475],["es:por cierto",1793779336942,1,1,0,3090],["es:basta",1793779339150,2,1,2,1853],["es:enterarse",1793779364316,1,1,0,24811],["es:me da vergüenza",1793779367441,2,1,2,2761],["es:pillar",1793779370436,2,1,1,2637],["es:acoger",1793779378629,1,3,0,7837],["es:partirse",1793779383992,1,3,0,5007],["es:plantilla",1793779386734,1,3,0,2385],["es:trompada",1793779390301,1,3,0,3212],["es:sacarle X a alguien",1793779395618,1,3,0,4960],["es:se me había olvidado",1793779430880,1,1,0,34906],["es:el vencimiento",1793779435932,2,1,1,4688],["es:asustar",1793779440611,1,3,0,4323],["es:ocasionar",1793779443792,2,1,2,2827],["es:recuerdo",1793779447594,2,1,1,3447],["es:vaya",1793779450415,2,1,2,2465],["es:plegar",1793779455200,1,1,0,4429],["es:Quedar",1793779458004,2,1,2,2448],["es:aclararse",1793779463262,2,3,1,4903],["es:secar",1793779466061,2,3,1,2444],["es:llevar sin + infinitivo",1793779472796,2,1,2,6380],["es:llevar sin + infinitivo",1793779473082,2,2,3,6666],["es:agarrarse",1793779482027,1,1,0,8591],["es:sumarse a",1793779494489,2,1,1,12104],["es:eso",1793779497051,2,0,0,2197],["es:dámelo",1793779501283,0,0,0,3872],["es:movimiento",1793779503629,2,0,0,1989],["es:traído",1793779506903,2,0,0,2918],["es:Respeto",1793779509175,3,0,10,1917],["es:ayer",1793779511600,3,0,6,2069],["es:la semana pasada",1793779516238,3,0,8,4281],["es:dámelo",1793779519116,2,1,0,2523],["es:por cierto",1793779524164,2,1,0,4692],["es:enterarse",1793779532439,0,1,0,7919],["es:enterarse",1793779535394,2,1,0,2599],["es:descarte",1793779541042,2,3,1,5292],["es:eso",1793779635335,2,1,2,60000],["es:movimiento",1793779637837,2,1,2,2136],["es:traído",1793779640690,2,1,2,2495],["es:dámelo",1793779642773,2,1,1,1721],["es:por cierto",1793779647270,1,1,0,4141],["es:enterarse",1793779650747,2,1,1,3121],["es:quitarse un peso de encima",1793798361730,2,3,1,60000],["es:acoger",1793798365626,1,3,0,3512],["es:partirse",1793798374329,1,3,0,8343],["es:plantilla",1793798534670,0,3,0,60000],["es:trompada",1793798546481,2,3,1,11427],["es:sacarle X a alguien",1793798551431,2,3,1,4593],["es:se me había olvidado",1793798555429,2,1,1,3640],["es:asustar",1793798561161,2,3,1,5375],["es:plegar",1793798564212,2,1,1,2695],["es:agarrarse",1793798577338,0,1,0,12770],["es:por cierto",1793798584855,2,1,1,7160],["es:agarrarse",1793798588606,2,1,0,3394],["es:plantilla",1793798592153,2,3,1,3190],["es:agarrarse",1793798595751,2,1,1,3242],["es:acoger",1793798601336,0,3,0,5229],["es:acoger",1793798603468,2,3,1,1776],["es:partirse",1793798607136,2,3,1,3312],["es:acoger",1793899423623,0,2,0,12570],["es:trompada",1793899427186,2,2,2,3193],["es:cansancio",1793899430432,2,2,3,2890],["es:dañino",1793899437174,2,2,3,6379],["es:aclararse",1793899444567,2,2,4,7036],["es:descarte",1793899452598,0,2,0,7679],["es:el año que viene",1793899457167,3,0,6,4209],["es:plegar",1793899462018,2,2,2,4496],["es:ayer",1793899464349,3,0,6,1974],["es:alejamiento",1793899468869,2,2,2,4166],["es:mezclarse",1793899473303,2,0,0,4077],["es:agarrarse",1793899483686,0,2,0,10027],["es:echar un vistazo",1793899488174,0,0,0,4131],["es:partirse",1793899492128,0,2,0,3596],["es:desatar",1793899496384,0,0,0,3897],["es:agacharse",1793899504810,0,2,0,8069],["es:industria",1793899507359,3,0,8,2193],["es:secar",1793899513563,0,2,0,5848],["es:firmar",1793899518495,0,0,0,4576],["es:sumarse a",1793899522189,0,2,0,3338],["es:Guapo",1793899524553,3,0,10,2009],["es:despertar",1793899528482,0,2,0,3572],["es:pudo",1793899532258,0,0,0,3418],["es:quitarse un peso de encima",1793899537617,2,2,2,5003],["es:ciudadano",1793899541300,3,0,7,3330],["es:dar un paseo",1793899545851,2,2,2,4194],["es:daño",1793899549028,2,0,0,2822],["es:echar un vistazo",1793899553260,2,1,0,3874],["es:plantilla",1793899557917,0,2,0,4301],["es:desatar",1793899561050,0,1,0,2764],["es:firmar",1793922504376,0,1,0,6721],["es:pudo",1793922507565,1,1,0,2830],["es:desatar",1793922514111,2,1,0,6187],["es:acoger",1793922518079,2,3,1,3610],["es:descarte",1793922521317,2,3,1,2882],["es:mezclarse",1793922524850,2,1,2,3176],["en:a rip-off",1793923876545,0,1,0,2892],["en:Earnestly",1793923881199,0,1,0,4297],["en:friends in high places",1793923886187,2,1,0,4633],["en:carry [sth] out",1793923892482,2,1,0,5939],["en:add-on",1793923896349,2,1,8,3508],["en:meticulously",1793923899124,2,0,0,2419],["en:arguably",1793923902038,0,0,0,2559],["es:agarrarse",1793976962596,1,3,0,7503],["es:partirse",1793976968884,2,3,1,5929],["es:agacharse",1793976971742,2,3,1,2502],["es:secar",1793976974863,2,3,1,2765],["es:sumarse a",1793976978489,2,3,1,3271],["es:despertar",1793976984306,1,3,0,5462],["es:daño",1793976986968,2,1,2,2306],["es:echar un vistazo",1793976991672,1,1,0,4348],["es:plantilla",1793976995261,2,3,1,3233],["en:a rip-off",1793989825912,0,1,0,4095],["en:Earnestly",1793989832170,0,1,0,5897],["en:friends in high places",1793989835277,2,1,2,2750],["en:carry [sth] out",1793989839172,1,1,0,3539],["en:meticulously",1793989842738,2,1,2,3211],["en:to gut",1793989851699,0,0,0,8604],["en:Fierce",1793989855950,0,0,0,3896],["en:by and large",1793989861017,0,0,0,4712],["en:to flex",1793989864504,2,0,0,3132],["en:reckoning",1793989870189,0,0,0,5329],["en:ballpark figure",1793989876068,0,0,0,5525],["en:Bet.",1793989879722,0,0,0,3299],["en:thrilling",1793989884881,2,0,0,4805],["en:scorching hot",1793989890244,2,0,0,5008],["en:a rip-off",1793989892859,2,1,0,2259],["en:Earnestly",1793989895698,2,1,0,2483],["en:I'm all ears",1793989899978,1,0,0,3921],["en:to impeach",1793989907700,2,2,3,7368],["en:Little did I know",1793989913383,1,0,0,5329],["en:to gut",1793989919842,2,1,0,6104],["en:Fierce",1793989921997,2,1,0,1800],["en:by and large",1793989926064,1,1,0,3713],["en:on a par with [sth]",1793989928785,2,2,2,2367],["en:shift [sth]",1793989932786,1,0,0,3646],["en:reckoning",1793989963053,0,1,0,29913],["en:ballpark figure",1793989966169,0,1,0,2750],["en:Bet.",1793989970039,2,1,0,3512],["en:Quench",1793989974814,0,2,0,4419],["en:touch base",1793989977757,0,0,0,2587],["en:to have a hold on sb",1793989986482,2,2,5,8370],["en:lemme",1793989992112,2,0,0,5275],["en:to get hold of sb",1793989996862,2,2,3,4395],["en:wanna",1793990000995,3,0,9,3778],["en:to pry into",1793990007179,1,2,1,5829],["en:To spark [sth]",1793990010347,1,0,0,2812],["en:To act [sth] out",1793990013275,2,2,2,2573],["en:Let's agree to disagree",1793990026794,2,0,0,13164],["en:reckoning",1793990030563,2,1,0,3414],["en:ballpark figure",1793990033144,2,1,0,2226],["en:a fine",1793990035493,2,2,3,1993],["en:mourning",1793990039497,1,0,0,3650],["en:touch base",1793990044405,0,1,0,4552],["en:Intercourse",1793990047406,2,2,2,2647],["en:What's up with that?",1793990059808,2,0,0,12046],["en:to bestow (sth on sb)",1793990064348,1,2,1,4178],["en:Oblivious",1793990068796,0,0,0,4089],["en:fathom [sth]",1793990072638,2,2,2,3486],["en:To dabble in",1793990080767,0,0,0,7774],["en:to cauterise",1793990085110,2,2,2,3989],["en:coulda",1793990088414,3,0,10,2948],["en:be drawn to",1793990092134,2,2,4,3364],["en:To soothe [sb/sth]",1793990095873,0,0,0,3384],["en:not know the first thing about",1793990099474,2,2,4,3245],["en:Dwell",1793990103394,0,0,0,3565],["en:Conceited",1793990107068,0,2,0,3319],["en:touch base",1793990111653,2,1,0,4229],["en:hit the nail on the head",1793990142571,0,0,0,30562],["en:Oblivious",1793990149119,0,1,0,6184],["en:To dabble in",1793990152976,0,1,0,3497],["en:Crooked",1793990159495,0,2,0,6163],["en:To soothe [sb/sth]",1793990166889,0,1,0,7038],["en:Dwell",1793990170026,0,1,0,2782],["en:For real?",1793990172417,3,0,7,2035],["en:hobo",1793990179330,2,2,4,6557],["en:to bottle sth up",1793990186536,0,0,0,6851],["en:Limb",1793990196051,2,2,3,9160],["en:it drives me nuts",1793990200660,0,0,0,4247],["en:hit the nail on the head",1793990266990,2,1,0,60000],["en:Oblivious",1793990271366,0,1,0,4014],["en:To dabble in",1793990276249,2,1,0,4526],["en:To soothe [sb/sth]",1793990292994,2,1,0,16389],["en:I'm all ears",1793990296339,3,1,2,2978],["en:Dwell",1793990300305,0,1,0,3609],["en:Little did I know",1793990306785,0,1,0,6125],["en:to bottle sth up",1793990312577,2,1,0,5437],["en:by and large",1793990316781,0,1,0,3848],["en:it drives me nuts",1793990322103,0,1,0,4967],["en:shift [sth]",1793990327030,2,1,0,4573],["en:Oblivious",1793990329609,2,1,0,2224],["en:To spark [sth]",1793990333129,0,1,0,3165],["en:Dwell",1793990336230,2,1,0,2746],["en:Little did I know",1793990418185,2,1,0,60000],["en:mourning",1793990421057,0,1,0,2491],["en:by and large",1793990426489,2,1,0,5072],["en:it drives me nuts",1793990433177,2,1,0,6329],["en:To spark [sth]",1793990436915,0,1,0,3383],["en:to flex",1793990439428,2,1,2,2158],["en:mourning",1793990447678,0,1,0,7895],["en:thrilling",1793990452687,2,1,2,4654],["en:scorching hot",1793990455030,2,1,2,1987],["en:a rip-off",1793990457743,2,1,1,2358],["en:Earnestly",1793990461309,2,1,1,3211],["en:To spark [sth]",1793990464113,2,1,0,2450],["en:mourning",1793990468580,2,1,0,4111],["en:to gut",1793990477252,2,1,1,8318],["en:Fierce",1793990487865,2,1,1,10258],["en:Bet.",1793990490749,2,1,1,2529],["en:Quench",1793990522028,0,3,0,30926],["en:lemme",1793990540385,3,1,5,17993],["en:Let's agree to disagree",1793990544838,2,1,2,4090],["en:reckoning",1793990549746,2,1,1,4552],["en:ballpark figure",1793990557441,2,1,1,7339],["en:What's up with that?",1793990562298,1,1,0,4502],["en:Conceited",1793990569302,0,3,0,6649],["en:touch base",1793990572965,2,1,1,3306],["en:carry [sth] out",1793990576148,2,1,3,2829],["en:Crooked",1793990584074,2,3,1,7571],["en:hit the nail on the head",1793990589083,2,1,1,4654],["en:To dabble in",1793990607156,2,1,1,17718],["en:To soothe [sb/sth]",1793990611141,2,1,1,3630],["en:to bottle sth up",1793990618001,2,1,1,6504],["en:shift [sth]",1793990623011,2,1,1,4655],["en:Oblivious",1793990626001,2,1,1,2635],["en:Dwell",1793990630362,0,1,0,4007],["en:Dwell",1793990632767,2,1,0,2051],["en:Little did I know",1793990636738,2,1,1,3616],["en:by and large",1793990642072,2,1,1,4978],["en:it drives me nuts",1793990644822,2,1,1,2395],["en:To spark [sth]",1793990667391,2,1,1,22214],["en:mourning",1793990723893,0,1,0,56139],["en:mourning",1793990726363,1,1,0,2102],["en:mourning",1793990728204,2,1,0,1483],["en:Quench",1793990734314,0,3,0,5753],["en:Conceited",1793990736861,2,3,1,2192],["en:Dwell",1793990741064,0,1,0,3848],["en:Dwell",1793990743948,2,1,0,2529],["en:mourning",1793990747620,2,1,1,3317],["en:Quench",1793990751924,2,3,1,3950],["en:Dwell",1793990757987,2,1,1,5707],["en:What's up with that?",1793990761421,2,1,1,3073]],"srs_new_per_day":30,"pron_srs":{},"grammar_srs":{},"srs_algo":"fsrs6","crs_prog":{},"crs_added":{},"rpg":{"lvl":31,"xp":153,"hp":50,"gold":462,"cls":"warrior","streak":1,"best":4,"streakDay":"2026-11-06","freezes":0,"day":"2026-11-06","dayXP":1323,"dayLessons":0,"claimed":["rev_en","rev_es"],"seen":{"es":11586,"ln":985,"en":2195},"revSeen":1071,"boss":{"i":3,"hp":459,"max":600},"bossN":3,"rewards":[{"e":"📺","n":"Un épisode de série","c":30},{"e":"🍫","n":"Une pause gourmande","c":20},{"e":"🎮","n":"30 min de jeu vidéo","c":40}],"log":["2026-11-06 · 🎁 Récompense : Une pause gourmande (−20 or)","2026-11-06 · ⭐ Niveau 31 atteint (PV restaurés)","2026-11-06 · ⭐ Niveau 30 atteint (PV restaurés)","2026-11-06 · 🏅 Badge obtenu : 🐉 Chasseur","2026-11-06 · ✅ Quotidienne : Réviser 7 cartes espagnol (+10 or, +15 XP)","2026-11-06 · 🏆 Quête : le Scorpion des Faux-Amis vaincu ! +100 or, +100 XP","2026-11-06 · ✅ Quotidienne : Réviser 7 cartes anglais (+10 or, +15 XP)","2026-11-06 · 💔 Série perdue (3 j)","2026-11-06 · 💀 K.O. (quotidiennes manquées) : −1 niveau, −50 % d'or","2026-11-06 · 🌙 7 quotidiennes manquées (2026-11-05) : −35 PV","2026-11-05 · 🌙 5 quotidiennes manquées (2026-11-04) : −25 PV","2026-11-04 · ⭐ Niveau 30 atteint (PV restaurés)","2026-11-04 · ✅ Quotidienne : Réviser 7 cartes anglais (+10 or, +15 XP)","2026-11-04 · ⭐ Niveau 29 atteint (PV restaurés)","2026-11-04 · ✅ Quotidienne : Réviser 7 cartes espagnol (+10 or, +15 XP)","2026-11-04 · 💀 K.O. (quotidiennes manquées) : −1 niveau, −50 % d'or","2026-11-04 · 🌙 4 quotidiennes manquées (2026-11-03) : −20 PV","2026-11-03 · 🏅 Badge obtenu : 🌍 Triglotte","2026-11-03 · ✅ Quotidienne : Étudier les 3 langues (+20 or, +25 XP)","2026-11-03 · ✅ Quotidienne : Réviser 7 cartes lingala (+10 or, +15 XP)","2026-11-03 · ✅ Quotidienne : Réviser 7 cartes espagnol (+10 or, +15 XP)","2026-11-03 · 🌙 6 quotidiennes manquées (2026-11-02) : −30 PV","2026-11-02 · ✅ Quotidienne : Réviser 7 cartes espagnol (+10 or, +15 XP)","2026-11-02 · 🏅 Badge obtenu : 🇪🇸 Hispanista","2026-11-02 · 💀 K.O. (quotidiennes manquées) : −1 niveau, −50 % d'or","2026-11-02 · 🌙 3 quotidiennes manquées (2026-11-01) : −15 PV","2026-11-01 · 💔 Série perdue (4 j)","2026-11-01 · 🌙 3 quotidiennes manquées (2026-10-31) : −15 PV","2026-10-31 · 🌙 3 quotidiennes manquées (2026-10-30) : −15 PV","2026-10-30 · 🌙 1 quotidienne manquée (2026-10-29) : −5 PV","2026-10-29 · ⭐ Niveau 30 atteint (PV restaurés)","2026-10-29 · 🏆 Quête : le Spectre du Subjonctif vaincu ! +80 or, +100 XP","2026-10-29 · ⭐ Niveau 29 atteint (PV restaurés)","2026-10-29 · ✅ Quotidienne : Réviser 20 cartes SRS (+10 or, +15 XP)","2026-10-29 · ✅ Quotidienne : Gagner 100 XP (+10 or, +15 XP)","2026-10-29 · 🌙 1 quotidienne manquée (2026-10-28) : −5 PV","2026-10-28 · ⭐ Niveau 28 atteint (PV restaurés)","2026-10-28 · ✅ Quotidienne : Gagner 100 XP (+10 or, +15 XP)","2026-10-28 · ✅ Quotidienne : Réviser 20 cartes SRS (+10 or, +15 XP)","2026-10-28 · 🌙 2 quotidiennes manquées (2026-10-27) : −10 PV"],"trophies":["🐉 le Dragon de l'Oubli","👻 le Spectre du Subjonctif","🦂 le Scorpion des Faux-Amis"],"rest":false,"goldFrac":0.9000000000000039,"deaths":4,"isNew":false,"cronMsg":"Hier, 7 quotidiennes non faites : −35 PV","dayLessonsLang":{"es":0,"ln":0,"en":0}}};
  try {
    if(EMBEDDED_PROGRESS.srs_data) localStorage.setItem('srs_data', JSON.stringify(EMBEDDED_PROGRESS.srs_data));
    if(EMBEDDED_PROGRESS.es_xp !== undefined) localStorage.setItem('es_xp', String(EMBEDDED_PROGRESS.es_xp));
    if(EMBEDDED_PROGRESS.ln_xp !== undefined) localStorage.setItem('ln_xp', String(EMBEDDED_PROGRESS.ln_xp));
    if(EMBEDDED_PROGRESS.en_xp !== undefined) localStorage.setItem('en_xp', String(EMBEDDED_PROGRESS.en_xp));
    if(EMBEDDED_PROGRESS.score !== undefined) localStorage.setItem('score', String(EMBEDDED_PROGRESS.score));
    if(EMBEDDED_PROGRESS.streak !== undefined) localStorage.setItem('streak', String(EMBEDDED_PROGRESS.streak));
    if(EMBEDDED_PROGRESS.mastered) localStorage.setItem('mastered', JSON.stringify(EMBEDDED_PROGRESS.mastered));
    if(EMBEDDED_PROGRESS.es_mastered) localStorage.setItem('es_mastered', JSON.stringify(EMBEDDED_PROGRESS.es_mastered));
    if(EMBEDDED_PROGRESS.ln_mastered) localStorage.setItem('ln_mastered', JSON.stringify(EMBEDDED_PROGRESS.ln_mastered));
    if(EMBEDDED_PROGRESS.en_mastered) localStorage.setItem('en_mastered', JSON.stringify(EMBEDDED_PROGRESS.en_mastered));
    if(EMBEDDED_PROGRESS.aura_map) localStorage.setItem('aura_map', JSON.stringify(EMBEDDED_PROGRESS.aura_map));
    if(EMBEDDED_PROGRESS.srs_revlog) localStorage.setItem('srs_revlog', JSON.stringify(EMBEDDED_PROGRESS.srs_revlog));
    if(EMBEDDED_PROGRESS.pron_srs) localStorage.setItem('pron_srs', JSON.stringify(EMBEDDED_PROGRESS.pron_srs));
    if(EMBEDDED_PROGRESS.grammar_srs) localStorage.setItem('grammar_srs', JSON.stringify(EMBEDDED_PROGRESS.grammar_srs));
    if(EMBEDDED_PROGRESS.crs_prog) localStorage.setItem('crs_prog', JSON.stringify(EMBEDDED_PROGRESS.crs_prog));
    if(EMBEDDED_PROGRESS.crs_added) localStorage.setItem('crs_added', JSON.stringify(EMBEDDED_PROGRESS.crs_added));
    if(EMBEDDED_PROGRESS.rpg) localStorage.setItem('rpg', JSON.stringify(EMBEDDED_PROGRESS.rpg));
    console.log('[Aprende] Hydrated from embedded backup:', Object.keys(EMBEDDED_PROGRESS.srs_data || {}).length, 'SRS cards');
  } catch(e) { console.error('[Aprende] Hydration failed:', e); }
}



// ═══════════════════════════════════════════════
// LANGUE
// ═══════════════════════════════════════════════
let currentLang = 'es';

function selectLang(lang) {
  currentLang = lang;
  updateSidebarLang(lang);
  if(lang === 'es') {
    updateHomeStats();
    showScreen('home');
  } else if(lang === 'ln') {
    updateLNStats();
    showScreen('home-ln');
  } else if(lang === 'en') {
    updateENStats();
    updateNativeBests();
    updatePronBadge();
    showScreen('home-en');
  }
}

// Highlight active language in the sidebar
function updateSidebarLang(lang) {
  document.querySelectorAll('.ds-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Update SRS due badges in the sidebar (called by updateSRSDueBadges)
function updateSidebarBadges() {
  const data = JSON.parse(localStorage.getItem('srs_data') || '{}');
  const now = Date.now();
  const todayEnd = new Date(); todayEnd.setHours(23,59,59,999);
  const endMs = todayEnd.getTime();
  const counts = { es: 0, ln: 0, en: 0 };
  Object.values(data).forEach(c => {
    if(counts[c.lang] === undefined || c.reps === 0) return;
    if(c.due <= endMs) counts[c.lang]++;
  });
  ['es','ln','en'].forEach(l => {
    const badge = document.getElementById('ds-badge-' + l);
    if(!badge) return;
    if(counts[l] > 0) { badge.textContent = counts[l]; badge.classList.add('visible'); }
    else badge.classList.remove('visible');
  });
  // Grammar rules badge
  if(typeof grammarSrsDueCount === 'function') {
    const gBadge = document.getElementById('ds-grammar-badge');
    if(gBadge) {
      const n = grammarSrsDueCount();
      if(n > 0) { gBadge.textContent = n; gBadge.style.display = 'inline-block'; }
      else gBadge.style.display = 'none';
    }
  }
}

// ═══════════════════════════════════════════════
// LINGALA DATA
// ═══════════════════════════════════════════════
const LINGALA = [
  {ln:"Yoka", fr:"Écouter / Entendre", ex_ln:"Yoka nanu motuna na ngai liboso ya koyanola ngai.", ex_fr:"Écoute d'abord ma question avant de me répondre."},
  {ln:"Mobimba", fr:"Tout entier, complet", ex_ln:"Mboka mobimba ezali na kimia.", ex_fr:"Tout le pays est en paix."},
  {ln:"Ya", fr:"De / À (préposition)", ex_ln:"Ndako ya bandeko ezali na etando monene.", ex_fr:"La maison des frères est très spacieuse."},
  {ln:"Mikolo", fr:"Jours", ex_ln:"Mikolo ezali koleka noki mingi.", ex_fr:"Les jours passent très vite."},
  {ln:"Bango", fr:"Eux / Elles", ex_ln:"Bango nde balobaki maloba oyo.", ex_fr:"Ce sont eux qui ont dit ces paroles."},
  {ln:"Kolanda", fr:"Suivre", ex_ln:"Landá ngai na nzela ya ndenge malamu.", ex_fr:"Suis-moi sur le bon chemin."},
  {ln:"Kosepela", fr:"Se réjouir / Être content", ex_ln:"Nasepeli mingi na makambo oyo.", ex_fr:"Je suis très content de cette chose."},
  {ln:"Kosomba", fr:"Acheter", ex_ln:"Nalingi kosomba ndako na ngonga ya sima.", ex_fr:"Je veux acheter une maison plus tard."},
  {ln:"Kosola", fr:"Tousser", ex_ln:"Azali kosola makasi banda na ntongo.", ex_fr:"Il tousse beaucoup depuis ce matin."},
  {ln:"Kokuta", fr:"Trouver", ex_ln:"", ex_fr:""},
  {ln:"Kobeba", fr:"Se gâter / S'abîmer", ex_ln:"Mbuma oyo ekozali kobeba noki.", ex_fr:"Ce fruit est en train de s'abîmer rapidement."},
  {ln:"Makambu", fr:"Affaires / Problèmes / Situations", ex_ln:"Makambu nyonso ezali kosilama malamu.", ex_fr:"Toutes les affaires se règlent bien."},
  {ln:"Zua", fr:"Prendre / Attraper", ex_ln:"Zua nga foto ya kitoko.", ex_fr:"Prends-moi une belle photo."},
  {ln:"Komesana", fr:"S'habituer", ex_ln:"Komesana na bomoi ya sika ezali mpasi te.", ex_fr:"S'habituer à une nouvelle vie n'est pas difficile."},
  {ln:"Bissembo", fr:"Justice / Équité", ex_ln:"Basali bissembo na mokili ekozala na kimia.", ex_fr:"Si on pratique la justice, le monde aura la paix."},
  {ln:"Kolakisa", fr:"Montrer / Enseigner", ex_ln:"", ex_fr:""},
  {ln:"Kowuta", fr:"Depuis / Venir de", ex_ln:"Tobandi kozwa masano kowuta lelo na butu.", ex_fr:"Nous avons commencé à jouer depuis ce soir."},
  {ln:"Sukali", fr:"Sucre", ex_ln:"", ex_fr:""},
  {ln:"Eloko", fr:"Objet / Chose", ex_ln:"Pesa ngai eloko ya kolia.", ex_fr:"Donne-moi quelque chose à manger."},
  {ln:"Kokoka", fr:"Pouvoir", ex_ln:"", ex_fr:""},
  {ln:"Kobeta", fr:"Frapper / Jouer (instrument)", ex_ln:"Bazali kobeta ndembo na libanda.", ex_fr:"Ils jouent au football dehors."},
  {ln:"Sikoyo", fr:"Maintenant", ex_ln:"Tozali koya epayi na bino sikoyo.", ex_fr:"Nous venons vers vous maintenant."},
  {ln:"Kokutana", fr:"Se rencontrer / Se trouver", ex_ln:"", ex_fr:""},
  // ── Session 11 mai 2026 ──
  {ln:"Kovanda", fr:"Vivre / S'asseoir / Rester / Demeurer", ex_ln:"Bana bavandaki na mabele mpo na bakiti ezalaki te.", ex_fr:"Les enfants s'assirent par terre car il n'y avait pas de chaises."},
  {ln:"Kosaka", fr:"Tromper / Avoir par la ruse", ex_ln:"A kosaki ye.", ex_fr:"Il/elle l'a trompé(e)."},
  {ln:"Yango", fr:"Ça / Cela / Celui-là", ex_ln:"Nalingi ata kokanisa yango te.", ex_fr:"Je ne veux même pas y penser."},
  {ln:"Yango wana", fr:"C'est pourquoi / Voilà pourquoi", ex_ln:"Yango wana sikoyo oza awa na biso.", ex_fr:"C'est pourquoi tu es ici maintenant."},
  {ln:"Kuna", fr:"Là-bas / Là", ex_ln:"Biso tozali awa, bango bazali kuna.", ex_fr:"Nous on est ici, eux ils sont là-bas."},
  // ── Session 15 mai 2026 ──
  {ln:"Kobanga", fr:"Avoir peur / Craindre / Respecter", ex_ln:"Tina ya kobanga ezali te.", ex_fr:"Il n'y a pas de raison d'avoir peur."},
  {ln:"Muninga", fr:"Ami(e) / Copain / Voisin", ex_ln:"Lelo ya yo, lobi ya moninga.", ex_fr:"Aujourd'hui c'est pour toi, demain pour ton voisin."},
  {ln:"Mususu / Basusu", fr:"Autre / Un autre / Certains", ex_ln:"Basusu kokufa, basusu kobotama, mokili ezalaka boye.", ex_fr:"Certains meurent, d'autres naissent, le monde est ainsi."},
  {ln:"Kokita", fr:"Atterrir / Descendre / Se poser", ex_ln:"Mpepo ekiti.", ex_fr:"L'avion atterrit."},
  {ln:"Elongo", fr:"Ensemble / En même temps", ex_ln:"Tokende elongo.", ex_fr:"Allons ensemble."},
  {ln:"Kofinga", fr:"Insulter / Offenser", ex_ln:"", ex_fr:""},
  {ln:"Mokolo", fr:"Jour / Adulte / Ancien", ex_ln:"Lelo ezali mokolo ya suka.", ex_fr:"Aujourd'hui c'est le dernier jour."},
  {ln:"Kobimisa ye pa na ye", fr:"Le/la mettre dehors / L'expulser de chez lui/elle", ex_ln:"", ex_fr:""},
  {ln:"Komeka", fr:"Essayer / Tester / Goûter / Mesurer", ex_ln:"Meka nanu kotanga oyo.", ex_fr:"Essaie d'abord de lire ça."},
  {ln:"Kotia", fr:"Mettre / Poser / Enfiler (vêtement)", ex_ln:"Atia pilipili na liso na ngai.", ex_fr:"Il m'a mis du piment dans l'œil."},
  {ln:"Pe", fr:"Aussi / Et / De même", ex_ln:"Yo pe, motema na ngai.", ex_fr:"Toi aussi, mon cœur."},
  {ln:"Zemi", fr:"Grossesse / Femme enceinte", ex_ln:"Aza na zemi ya sanza misatu.", ex_fr:"Elle est enceinte de 3 mois."},
  {ln:"Nzoto", fr:"Corps / Santé", ex_ln:"Mbote, boni nzoto ?", ex_fr:"Bonjour, comment ça va ?"},
  {ln:"Kokuta", fr:"Trouver / Rencontrer", ex_ln:"A kutaki ye.", ex_fr:"Il/elle l'a trouvé(e)."},
  {ln:"Kokutana", fr:"Se rencontrer mutuellement", ex_ln:"Bakuteni mibale.", ex_fr:"Ils se sont rencontrés tous les deux."},
  {ln:"Mibale", fr:"Deux / Tous les deux", ex_ln:"Bolingo na biso mibale ekosila te.", ex_fr:"Notre amour à nous deux ne finira pas."},
  {ln:"Kutu", fr:"De plus / En plus / D'ailleurs", ex_ln:"Kutu ye azalaki te.", ex_fr:"De plus, lui n'était même pas là."},
  {ln:"Batu / Motu", fr:"Personne / Gens / Individu", ex_ln:"Ngomba na ngomba ekutanaka te kasi batu na batu bakutanaka.", ex_fr:"Les montagnes ne se rencontrent pas, mais les hommes si."},
  {ln:"Kozongela", fr:"Recommencer / Répéter / Revenir vers", ex_ln:"Zongela ngai.", ex_fr:"Répète-moi ça / Reviens vers moi."},
  {ln:"Misusu", fr:"Certains / D'autres / Quelques-uns", ex_ln:"Bazali kobatela mino malamu te, mosusu esila ngala.", ex_fr:"Ils ne conservent pas bien les médicaments, certains sont expirés."},
  {ln:"Kaka boye", fr:"Comme ça / Juste comme ça / Sans raison", ex_ln:"Osundola mwasi na yo na bana kaka boye.", ex_fr:"Tu as abandonné ta femme et les enfants comme ça."},
  {ln:"Kozonga", fr:"Revenir / Retourner / Rentrer", ex_ln:"Akozonga lisusu ? - Te, akei libela.", ex_fr:"Il reviendra ? - Non, il est parti définitivement."},
  {ln:"Kofuta", fr:"Payer / Compenser / Récompenser", ex_ln:"Kofuta ngai te, nasali yango ofele.", ex_fr:"Ne me paye pas, j'ai fait ça gratuitement."},
  {ln:"Tango", fr:"Quand / Temps / Moment", ex_ln:"Tango akitaka, akitaka na nkembo.", ex_fr:"Quand il descend, il descend dans la gloire."},
  {ln:"Somo", fr:"Terreur / Peur / Horreur", ex_ln:"Somo ekoti ngai.", ex_fr:"La terreur m'a envahi."},
  {ln:"Kati / Katikati", fr:"À l'intérieur / Entre / Au milieu / Centre", ex_ln:"Na kati ezalaki molili.", ex_fr:"À l'intérieur il faisait sombre."},
  {ln:"Kokenda", fr:"Aller / Partir", ex_ln:"Kende kozua bisaka na yo.", ex_fr:"Va prendre tes affaires."},
  {ln:"Pa", fr:"Chez / À la maison de", ex_ln:"Kende pa ngai.", ex_fr:"Viens chez moi."},
  {ln:"Yambi", fr:"Bienvenue !", ex_ln:"Yambi !", ex_fr:"Bienvenue !"},
  {ln:"Koyamba", fr:"Accueillir / Embrasser / Répondre (téléphone)", ex_ln:"Kende koyamba ye, azozela yo.", ex_fr:"Va l'accueillir, elle t'attend."},
  {ln:"Motema / Mitema", fr:"Cœur / Force de caractère", ex_ln:"Nabombi yango na kati ya motema na ngai.", ex_fr:"J'ai caché ça dans mon cœur."},
  {ln:"Kala", fr:"Autrefois / Il y a longtemps / Jadis", ex_ln:"Nakozonga kala mingi te.", ex_fr:"Je vais rentrer bientôt (litt. pas longtemps)."},
  {ln:"Kobemba", fr:"Voyager / Se déplacer", ex_ln:"Ethan na Gaby bakei mobembo.", ex_fr:"Ethan et Gaby sont partis en voyage."},
  {ln:"Kobwaka", fr:"Jeter / Abandonner / Rejeter", ex_ln:"Kobwaka bosoto na nzela te.", ex_fr:"Ne jette pas les ordures dans la rue."},
  {ln:"Ngunda", fr:"Asile / Refuge / Exil (argot)", ex_ln:"Baboti na ye babwakaki ngunda na Poto.", ex_fr:"(fig., argot) Ses parents ont demandé l'asile en Europe. Kobwaka ngunda = demander l'asile."},
  {ln:"Kobika", fr:"Être sauvé / Guérir / Survivre", ex_ln:"Osengeli komela mino po obika.", ex_fr:"Tu dois prendre tes médicaments pour guérir."},
  {ln:"Kosimba", fr:"Tenir / Saisir / Attraper / Coller", ex_ln:"Esimbi te.", ex_fr:"Ça ne tient pas / Ça ne prend pas."},
  {ln:"Lokola", fr:"Comme / Tel que / Pareil à", ex_ln:"Bazali lokola mai na moto.", ex_fr:"Ils sont comme l'eau et le feu."},
  {ln:"Suka / Nsuka", fr:"Fin / Dernier / Limite", ex_ln:"Lelo ezali mokolo ya suka.", ex_fr:"Aujourd'hui c'est le dernier jour."},
  {ln:"Kolakisa", fr:"Montrer / Enseigner", ex_ln:"Mama na ngai nde alakisa ngai kolamba.", ex_fr:"C'est ma mère qui m'a appris à cuisiner."},
  {ln:"Kotanga", fr:"Lire / Compter / Étudier", ex_ln:"Mwana na yo alingi kotanga mingi.", ex_fr:"Ton enfant veut beaucoup étudier."},
  {ln:"Pamba", fr:"Pour rien / En vain / Inutilement", ex_ln:"Abeti ngai pamba te.", ex_fr:"Elle ne m'a pas frappé pour rien."},
  {ln:"Makasi", fr:"Fort / Puissant / Beaucoup (intensificateur)", ex_ln:"Nalela yo makasi.", ex_fr:"Je t'aime fort."},
  {ln:"Moko", fr:"Un / Seul / Unique", ex_ln:"Moto moko te.", ex_fr:"Personne (litt. pas un seul homme)."},
  // ── Session 19 mai 2026 ──
  {ln:"Kotambola", fr:"Marcher / Avancer / Se déplacer / Voyager", ex_ln:"Tambola na mokili, bongo omona makambo.", ex_fr:"Parcours le monde et tu verras les problèmes."},
  {ln:"Kolona", fr:"Semer / Planter", ex_ln:"Nakolona madesu.", ex_fr:"Je vais planter des haricots."},
  {ln:"Biloko / Eloko", fr:"Choses / Objets / Affaires / Bagages", ex_ln:"Biloko na yo ezali kilo mingi.", ex_fr:"Tes bagages pèsent beaucoup."},
  {ln:"Koganga", fr:"Crier / Hurler / Aboyer", ex_ln:"Tika koganga makasi.", ex_fr:"Arrête de crier fort."},
  {ln:"Libota", fr:"Famille / Clan", ex_ln:"Libota na ngai ezali motuya mingi pona ngai.", ex_fr:"Ma famille est très importante pour moi."},
  {ln:"Liputa / Maputa", fr:"Pagne / Tissu africain", ex_ln:"Alati liputa.", ex_fr:"Elle porte un pagne."},
  {ln:"Kobota", fr:"Accoucher / Donner naissance / Mettre au monde", ex_ln:"Ndeko na ngai ya mwasi awuti kobota.", ex_fr:"Ma sœur vient d'accoucher."},
  {ln:"Kobotama", fr:"Être né / Naître", ex_ln:"Nabotamaki na Kin.", ex_fr:"Je suis né à Kin."},
  // ── Session 22 mai 2026 ──
  {ln:"Kokata / Kata", fr:"Couper / Raccrocher (téléphone) / Traverser", ex_ln:"Nakati lipa.", ex_fr:"J'ai coupé le pain."},
  {ln:"Likambo / Makambo", fr:"Affaire / Problème / Cas / Conflit", ex_ln:"Likambo nini mwasi na ngai ?", ex_fr:"Quel est le problème, ma femme ?"},
  {ln:"Koteka / Teki", fr:"Vendre / fig. Trahir / Vendre quelqu'un", ex_ln:"Akomi koteka nguba na zando.", ex_fr:"Elle a commencé à vendre des arachides au marché."},
  {ln:"Kopanza / Panza", fr:"Répandre / Diffuser / Disperser", ex_ln:"Basi oyo bazopanza basango ya lokuta.", ex_fr:"Ces filles répandent des mensonges."},
  {ln:"Mbangu", fr:"Vitesse / Rapidité (ya mbangu = rapide)", ex_ln:"Sala mbangu !", ex_fr:"Fais vite !"},
  {ln:"Musika / Mosika", fr:"Loin / Distance / Éloignement", ex_ln:"Ndako na ye ezali musika mingi.", ex_fr:"Sa maison est très loin."},
  {ln:"Kotonga / Tonga", fr:"Coudre / Construire / Bâtir / Tresser (ton bas)", ex_ln:"Batongaka mboka na maloba te.", ex_fr:"On ne construit pas une ville avec des mots."},
  {ln:"Tonga / Ntonga", fr:"Aiguille / Seringue", ex_ln:"Batubi ye tonga na misisa.", ex_fr:"Ils l'ont piqué avec une aiguille."},
  {ln:"Koganga / Ganga", fr:"Crier / Hurler / Aboyer", ex_ln:"Tika koganga makasi.", ex_fr:"Arrête de crier fort."},
  // ── Sessions récentes (mai-juin 2026) ──
  {ln:"Kasi", fr:"Mais / Cependant", ex_ln:"Nalingi kokende, kasi mbula ezali.", ex_fr:"Je veux partir, mais il pleut."},
  {ln:"Na", fr:"À / Avec / Dans / De (préposition polyvalente)", ex_ln:"Na kati ya zamba.", ex_fr:"À l'intérieur de la forêt."},
  {ln:"Kozua / Kozwa", fr:"Prendre / Obtenir / Recevoir / Attraper", ex_ln:"Nazui diplôme.", ex_fr:"J'ai obtenu le diplôme."},
  {ln:"Na-ko- (futur)", fr:"Marqueur du FUTUR 'je vais' (na=je, ko=marqueur futur)", ex_ln:"Nakolia.", ex_fr:"Je vais manger."},
  // ── Session récente (juin 2026) ──
  {ln:"Koloba / Loba", fr:"Parler / Dire", ex_ln:"Nayebi koloba lingala.", ex_fr:"Je sais parler lingala."},
  {ln:"Liloba / Maloba", fr:"Mot / Parole", ex_ln:"Batongaka mboka na maloba te.", ex_fr:"On ne construit pas une ville avec des mots."},
  {ln:"Kobenda", fr:"Tirer / Attirer / Étirer", ex_ln:"Mbisi abendi ndobo.", ex_fr:"Le poisson tire sur la ligne."},
  {ln:"Kobenda miso", fr:"Attirer l'attention (litt. tirer les yeux)", ex_ln:"Mwasi wana azali kobenda miso ya batu nyonso.", ex_fr:"Cette femme attire l'attention de tout le monde."},
  {ln:"Kobenda nzoto", fr:"S'étirer / Faire des étirements", ex_ln:"", ex_fr:""},
  {ln:"Kondima / Dima", fr:"Accepter / Admettre / Croire / Être d'accord", ex_ln:"Nandimi na yo.", ex_fr:"Je suis d'accord avec toi."},
  {ln:"Nandimi te", fr:"Je ne suis pas d'accord / Je refuse", ex_ln:"", ex_fr:""},
  {ln:"Kondimisa", fr:"Convaincre / Persuader", ex_ln:"", ex_fr:""},
  {ln:"Bondimi", fr:"Foi / Croyance", ex_ln:"", ex_fr:""},
  {ln:"Kolenga", fr:"Trembler / Frissonner / Grelotter", ex_ln:"Azolenga likolo ya kobanga.", ex_fr:"Elle tremble à cause de la peur."},
  {ln:"Kolengela", fr:"Arranger / Prendre soin / Préparer", ex_ln:"", ex_fr:""},
  {ln:"Kobala", fr:"Se marier", ex_ln:"Djo azalaki na likoki te ya kobala.", ex_fr:"Djo n'avait pas les moyens de se marier."},
  {ln:"Libala", fr:"Mariage", ex_ln:"", ex_fr:""},
  {ln:"Balabala", fr:"Rue / Route / Voie publique", ex_ln:"Bakuluna basundoli ye na balabala.", ex_fr:"Les bandits l'ont abandonné dans la rue."},
  {ln:"Kosepela / Sepela", fr:"Se réjouir / Apprécier / Être content", ex_ln:"Nasepeli koyeba yo.", ex_fr:"Ravi(e) de te connaître."},
  {ln:"Nasepeli", fr:"Je suis content(e) / J'apprécie", ex_ln:"Nasepeli makasi.", ex_fr:"J'ai beaucoup apprécié."},
  {ln:"Kolemba", fr:"Être fatigué / En avoir marre / Se lasser", ex_ln:"Nalembi mosala.", ex_fr:"Je suis fatigué du travail."},
  {ln:"Tolemba te", fr:"On n'abandonne pas ! (expression culte)", ex_ln:"", ex_fr:""},
  {ln:"Kolembisa", fr:"Épuiser / Amollir / Calmer", ex_ln:"", ex_fr:""},
  {ln:"Kokóma", fr:"Arriver / Devenir / Commencer à (ton haut)", ex_ln:"Ndaku oyo ekomi kitoko.", ex_fr:"Cette maison est devenue belle."},
  {ln:"Kokòma", fr:"Écrire (ton bas, homophone !)", ex_ln:"Koma kombo na yo.", ex_fr:"Écris ton nom."},
  {ln:"Mokomi", fr:"Écrivain / Auteur", ex_ln:"", ex_fr:""},
  {ln:"Kobaka", fr:"Poser / Percher (ton bas)", ex_ln:"", ex_fr:""},
  {ln:"Kobáka", fr:"Attacher / Clouer / Injecter (ton haut)", ex_ln:"", ex_fr:""},
  {ln:"Kobaka pardon", fr:"Demander pardon (idiomatique Kinshasa)", ex_ln:"Nabaki pardon.", ex_fr:"J'ai demandé pardon."},
  {ln:"Kobakisa", fr:"Ajouter / Additionner", ex_ln:"Bakisa matabisi.", ex_fr:"Ajoute le pourboire."},
  {ln:"Kobanda / Banda", fr:"Commencer / Débuter", ex_ln:"Nabandi kotanga buku oyo.", ex_fr:"J'ai commencé à lire ce livre."},
  {ln:"Ebandeli", fr:"Le début / Le commencement", ex_ln:"", ex_fr:""},
  {ln:"Bandá", fr:"Depuis (préposition)", ex_ln:"Bandá kala.", ex_fr:"Depuis longtemps."},
  {ln:"Kobanza", fr:"Penser / Réfléchir", ex_ln:"Nabanzi na yo.", ex_fr:"Je pense à toi."},
  {ln:"Kobína / Bina", fr:"Danser", ex_ln:"Nazobina.", ex_fr:"Je suis en train de danser."},
  {ln:"-zo- (progressif)", fr:"Marqueur du présent PROGRESSIF 'être en train de'", ex_ln:"Nazobina.", ex_fr:"Je suis en train de danser."},
  {ln:"Mabína", fr:"Danse (nom)", ex_ln:"", ex_fr:""},
  {ln:"Kosenga / Senga", fr:"Demander / Exiger / Solliciter", ex_ln:"Nasengi bolimbisi.", ex_fr:"Je demande pardon."},
  {ln:"Kosengela", fr:"Falloir / Devoir (obligation)", ex_ln:"Esengeli osala mosala.", ex_fr:"Il faut que tu travailles."},
  {ln:"Libándá", fr:"Dehors / Extérieur", ex_ln:"Malili eza makasi libanda.", ex_fr:"Il fait très froid dehors."},
  {ln:"Na libanda", fr:"Dehors (préposition)", ex_ln:"", ex_fr:""},
  {ln:"Libanda ya mpepo", fr:"Aéroport (litt. extérieur de l'avion)", ex_ln:"", ex_fr:""},
  {ln:"Kolimbisa", fr:"Pardonner", ex_ln:"Alimbisi ngai.", ex_fr:"Il m'a pardonné."},
  // ── Session 8 octobre 2026 ──
  {ln:"Kobosana", fr:"Oublier (aussi : faire des erreurs)", ex_ln:"Nazoluka nabosana, kasi nazokoka te.", ex_fr:"J'essaie d'oublier, mais je n'y arrive pas."},
  {ln:"Bosana", fr:"Oublie ! (impératif de kobosana)", ex_ln:"Bosana yango !", ex_fr:"Oublie ça !"},
  {ln:"Nabosani", fr:"J'ai oublié / J'oublie", ex_ln:"Nabosani nzela.", ex_fr:"J'ai oublié le chemin."},
  {ln:"Kobosana te", fr:"N'oublie pas ! / N'oubliez pas !", ex_ln:"Kobosana ngai te !", ex_fr:"Ne m'oublie pas !"},
  // ── Session 4 octobre 2026 — Phrase spirituelle Nzambe ──
  {ln:"Eloko", fr:"Chose / Objet (sg., pl. biloko)", ex_ln:"Eloko aliboso nalingaka.", ex_fr:"La chose que j'aime en premier."},
  {ln:"Liboso", fr:"Avant / D'abord / En premier / Devant", ex_ln:"Eloko ya liboso.", ex_fr:"La chose en premier."},
  {ln:"-aka (habituel)", fr:"⭐ Suffixe HABITUEL / ITÉRATIF (ex: nalingi→nalingaka = j'aime toujours)", ex_ln:"Nalingaka Nzambe.", ex_fr:"J'aime Dieu (toujours)."},
  {ln:"Nalingaka", fr:"J'aime (habituel, toujours — kolinga + -aka)", ex_ln:"Nalingaka yo.", ex_fr:"Je t'aime (toujours)."},
  {ln:"Nanu", fr:"Encore / D'abord / En premier", ex_ln:"Meka nanu kotanga.", ex_fr:"Essaie d'abord de lire."},
  {ln:"Ezali te / Ezape", fr:"Ce n'est pas (ezape = contraction orale Kinshasa)", ex_ln:"Ezali te eloko.", ex_fr:"Ce n'est aucune chose."},
  {ln:"Nzambe", fr:"Dieu", ex_ln:"Nalingaka Nzambe.", ex_fr:"J'aime Dieu."},
  {ln:"Mpo / Po", fr:"Parce que / Pour (po = oral)", ex_ln:"Nalingi po yo kelela ngai.", ex_fr:"J'aime parce que tu m'as créé."},
  {ln:"Yo muta / Yo nde", fr:"C'est toi qui (particule emphatique)", ex_ln:"Yo muta kelela biso.", ex_fr:"C'est toi qui nous a créés."},
  {ln:"Kokelela / Kelela", fr:"Créer / Création", ex_ln:"Nzambe akeleli biso.", ex_fr:"Dieu nous a créés."},
  {ln:"Biso", fr:"Nous (pronom personnel)", ex_ln:"Biso tozali awa.", ex_fr:"Nous sommes ici."},
  {ln:"Ezali na / Ezana", fr:"Qui sont dans / Qui existent dans", ex_ln:"Biloko ezana mokili.", ex_fr:"Les choses qui existent dans le monde."},
  {ln:"Mokili", fr:"Monde / Terre", ex_ln:"Biloko nyonso ya mokili.", ex_fr:"Toutes les choses du monde."},
];

const LN_EXTRA_EXAMPLES = {"Kokuta": ["Nakuti mbongo na nzela.", "J'ai trouvé de l'argent sur le chemin."], "Kolakisa": ["Lakisa ngai nzela.", "Montre-moi le chemin."], "Sukali": ["Tia sukali moke na kafe.", "Mets un peu de sucre dans le café."], "Kokoka": ["Nakoki kosala yango.", "Je peux le faire."], "Kokutana": ["Tokokutana lobi.", "On se retrouvera demain."], "Kofinga": ["Kofinga ngai te !", "Ne m'insulte pas !"], "Kobimisa ye pa na ye": ["Tata abimisaki ye na ndako.", "Le père l'a mis à la porte de la maison."], "Kobenda nzoto": ["Nabendi nzoto liboso ya kopota mbangu.", "Je m'étire avant de courir."], "Nandimi te": ["Nandimi likambo yango te.", "Je ne suis pas d'accord avec ça."], "Kondimisa": ["Amekaki kondimisa ngai.", "Il a essayé de me convaincre."], "Bondimi": ["Bondimi na ye ezali makasi.", "Sa foi est forte."], "Kolengela": ["Mama azali kolengela bilei.", "Maman prépare le repas."], "Libala": ["Libala na bango ekozala lobi.", "Leur mariage aura lieu demain."], "Tolemba te": ["Ata ezali pasi, tolemba te !", "Même si c'est dur, on n'abandonne pas !"], "Kolembisa": ["Mosala oyo elembisi ngai.", "Ce travail m'a épuisé."], "Mokomi": ["Alingi kozala mokomi.", "Il veut devenir écrivain."], "Kobaka": ["Ndeke ebaki na nzete.", "L'oiseau s'est perché sur l'arbre."], "Kobáka": ["Monganga abaki ngai mangwele.", "Le médecin m'a fait une piqûre."], "Ebandeli": ["Na ebandeli, ezalaki pasi.", "Au début, c'était difficile."], "Mabína": ["Nalingaka mabina.", "J'aime (toujours) la danse."], "Na libanda": ["Bana bazali kosakana na libanda.", "Les enfants jouent dehors."], "Libanda ya mpepo": ["Tokokutana na libanda ya mpepo.", "On se retrouvera à l'aéroport."]};
LINGALA.forEach(c => { if(!(c.ex_ln && c.ex_ln.trim()) && LN_EXTRA_EXAMPLES[c.ln]) { c.ex_ln = LN_EXTRA_EXAMPLES[c.ln][0]; c.ex_fr = LN_EXTRA_EXAMPLES[c.ln][1]; } });

// ── LINGALA GAME STATE ──
let lnGameState = {};

function updateLNStats() {
  const lnMastered = JSON.parse(localStorage.getItem('ln_mastered')||'[]');
  const lnXP = parseInt(localStorage.getItem('ln_xp')||'0');
  animateCounter(document.getElementById('ln-stat-score'), lnXP);
  animateCounter(document.getElementById('ln-stat-mastered'), lnMastered.length);
}

function startLNGame(game) {
  if(game === 'flashcard') initLNFlashcard();
  else if(game === 'qcm') initLNQCM();
  else if(game === 'typing') initLNTyping();
}

// ── LINGALA FLASHCARD ──
function initLNFlashcard() {
  lnGameState = { cards: shuffle(LINGALA), idx: 0, correct: 0, flipped: false };
  showScreen('screen-flashcard');
  renderLNFlashcard();
}

function renderLNFlashcard() {
  const {cards, idx} = lnGameState;
  const card = cards[idx];
  document.getElementById('fc-lang-front').textContent = '🇨🇩 Lingala';
  document.getElementById('fc-lang-back').textContent = '🇫🇷 Français';
  document.getElementById('fc-es').textContent = card.ln;
  document.getElementById('fc-fr').textContent = card.fr;
  document.getElementById('fc-counter').textContent = `${idx+1}/${cards.length}`;
  setProgress('fc-progress', idx, cards.length);
  document.getElementById('flip-inner').classList.remove('flipped');
  document.getElementById('fc-nav').style.display = 'none';
  document.getElementById('fc-ai-area').innerHTML = card.ex_ln ? `<div class="ai-bubble"><div class="ai-badge">📖 Exemple</div><div style="margin-top:.3rem"><strong>${card.ex_ln}</strong>${card.ex_fr ? '<br><span style="color:var(--muted);font-size:.85rem">'+card.ex_fr+'</span>' : ''}</div></div>` : '';
  lnGameState.flipped = false;
  document.querySelector('.flip-container').onclick = flipLNCard;
  document.getElementById('fc-nav').querySelectorAll('button').forEach((b,i) => {
    b.onclick = i === 0 ? () => fcLNRate(false) : () => fcLNRate(true);
  });
}

function flipLNCard() {
  if(!lnGameState.flipped) {
    document.getElementById('flip-inner').classList.add('flipped');
    document.getElementById('fc-nav').style.display = 'flex';
    lnGameState.flipped = true;
  }
}

function fcLNRate(knew) {
  const card = lnGameState.cards[lnGameState.idx];
  const lnMastered = JSON.parse(localStorage.getItem('ln_mastered')||'[]');
  const lnXP = parseInt(localStorage.getItem('ln_xp')||'0');
  if(knew) {
    lnGameState.correct++;
    localStorage.setItem('ln_xp', lnXP + 10);
    if(!lnMastered.includes(card.ln)) { lnMastered.push(card.ln); localStorage.setItem('ln_mastered', JSON.stringify(lnMastered)); }
    showToast('✅ +10 XP', 'correct-toast');
  } else {
    showToast('😅 À retravailler', 'wrong-toast');
  }
  lnGameState.idx++;
  if(lnGameState.idx >= lnGameState.cards.length) {
    showLNResults(lnGameState.correct, lnGameState.cards.length, []);
  } else renderLNFlashcard();
}

// ── LINGALA QCM ──
function initLNQCM() {
  lnGameState = { cards: shuffle(LINGALA), idx: 0, score: 0, streak: 0, mistakes: [] };
  showScreen('screen-qcm');
  renderLNQCM();
}

function renderLNQCM() {
  const {cards, idx} = lnGameState;
  const card = cards[idx];
  document.getElementById('qcm-word').textContent = card.ln;
  document.getElementById('qcm-hint').textContent = card.ex_ln || '';
  setProgress('qcm-progress', idx, cards.length);
  const others = shuffle(LINGALA.filter(w => w.ln !== card.ln)).slice(0,3);
  const opts = shuffle([card, ...others]);
  const cont = document.getElementById('qcm-options');
  cont.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.fr;
    btn.addEventListener('click', () => checkLNQCM(btn, opt, card));
    cont.appendChild(btn);
  });
  document.getElementById('qcm-ai-area').innerHTML = '';
  document.getElementById('qcm-score').textContent = lnGameState.score + ' pts';
  document.getElementById('qcm-streak').textContent = lnGameState.streak;
}

function checkLNQCM(btn, chosen, correct) {
  const btns = document.querySelectorAll('#qcm-options .option-btn');
  btns.forEach(b => b.disabled = true);
  const lnXP = parseInt(localStorage.getItem('ln_xp')||'0');
  if(chosen.ln === correct.ln) {
    btn.classList.add('correct');
    lnGameState.streak++;
    const bonus = Math.min(lnGameState.streak,5)*10;
    lnGameState.score += bonus;
    localStorage.setItem('ln_xp', lnXP + bonus);
    showToast(`✅ +${bonus} pts`, 'correct-toast');
    if(correct.ex_ln) document.getElementById('qcm-ai-area').innerHTML = `<div class="ai-bubble"><div class="ai-badge">📖 Exemple</div><div style="margin-top:.3rem"><strong>${correct.ex_ln}</strong><br><span style="color:var(--muted);font-size:.85rem">${correct.ex_fr}</span></div></div>`;
    setTimeout(() => { lnGameState.idx++; if(lnGameState.idx >= lnGameState.cards.length) showLNResults(lnGameState.score, lnGameState.cards.length*50, lnGameState.mistakes); else renderLNQCM(); }, correct.ex_ln ? 1800 : 800);
  } else {
    btn.classList.add('wrong');
    btns.forEach(b => { if(b.textContent === correct.fr) b.classList.add('correct'); });
    lnGameState.streak = 0;
    lnGameState.mistakes.push(correct);
    showToast(`❌ ${correct.ln} = ${correct.fr}`, 'wrong-toast');
    setTimeout(() => { lnGameState.idx++; if(lnGameState.idx >= lnGameState.cards.length) showLNResults(lnGameState.score, lnGameState.cards.length*50, lnGameState.mistakes); else renderLNQCM(); }, 2000);
  }
}

// ── LINGALA TYPING ──
function initLNTyping() {
  lnGameState = { cards: shuffle(LINGALA), idx: 0, score: 0, mistakes: [] };
  showScreen('screen-typing');
  document.getElementById('type-skip-btn').onclick = typeLNSkip;
  document.getElementById('type-check-btn').onclick = typeLNCheck;
  const inp = document.getElementById('type-input');
  inp.onkeydown = e => { if(e.key==='Enter') typeLNCheck(); };
  renderLNTyping();
}

function renderLNTyping() {
  const card = lnGameState.cards[lnGameState.idx];
  document.getElementById('type-word').textContent = card.fr;
  const inp = document.getElementById('type-input');
  inp.value = ''; inp.className = 'type-input';
  inp.placeholder = 'Écris en lingala…';
  inp.focus();
  setProgress('type-progress', lnGameState.idx, lnGameState.cards.length);
  document.getElementById('type-score').textContent = lnGameState.score + ' pts';
  document.getElementById('type-ai-area').innerHTML = '';
}

function typeLNCheck() {
  const card = lnGameState.cards[lnGameState.idx];
  const inp = document.getElementById('type-input');
  const attempt = normalize(inp.value);
  const correct = normalize(card.ln);
  if(!attempt) return;
  const lnXP = parseInt(localStorage.getItem('ln_xp')||'0');
  if(attempt === correct || levenshtein(attempt,correct) <= 1) {
    inp.classList.add('correct');
    lnGameState.score += 20;
    localStorage.setItem('ln_xp', lnXP+20);
    showToast('✅ +20 XP', 'correct-toast');
    if(card.ex_ln) document.getElementById('type-ai-area').innerHTML = `<div class="ai-bubble"><div class="ai-badge">📖 Exemple</div><strong>${card.ex_ln}</strong><br><span style="color:var(--muted);font-size:.85rem">${card.ex_fr}</span></div>`;
    setTimeout(nextLNTyping, card.ex_ln ? 1800 : 700);
  } else {
    inp.classList.add('wrong');
    lnGameState.mistakes.push(card);
    showToast(`❌ → ${card.ln}`, 'wrong-toast');
    document.getElementById('type-ai-area').innerHTML = `<div class="ai-bubble"><div class="ai-badge">❌ Correction</div><strong style="color:var(--success)">${card.ln}</strong> = ${card.fr}</div>`;
    setTimeout(nextLNTyping, 2000);
  }
}

function typeLNSkip() {
  const card = lnGameState.cards[lnGameState.idx];
  lnGameState.mistakes.push(card);
  showToast(`⏭ ${card.ln}`, '');
  nextLNTyping();
}

function nextLNTyping() {
  lnGameState.idx++;
  if(lnGameState.idx >= lnGameState.cards.length) showLNResults(lnGameState.score, lnGameState.cards.length*20, lnGameState.mistakes);
  else renderLNTyping();
}

function showLNResults(score, maxScore, mistakes) {
  const pct = Math.round(Math.min(score/maxScore,1)*100);
  document.getElementById('result-ring').style.setProperty('--pct', pct+'%');
  document.getElementById('result-pct').textContent = pct+'%';
  document.getElementById('res-correct').textContent = Math.round(pct/100*(mistakes.length+Math.round(pct/100*10)));
  document.getElementById('res-wrong').textContent = mistakes.length;
  document.getElementById('res-xp').textContent = '+'+score;
  document.getElementById('result-emoji').textContent = pct>=80?'🏆':pct>=60?'💪':'📚';
  document.getElementById('result-title').textContent = pct>=80?'Excellent !':pct>=60?'Bien joué !':'Continue !';
  if(mistakes.length>0) {
    document.getElementById('mistakes-section').style.display='block';
    document.getElementById('mistakes-list').innerHTML = mistakes.map(m=>`<div class="mistake-row"><span class="mistake-es">${m.ln}</span><span class="mistake-fr">${m.fr}</span></div>`).join('');
  } else { document.getElementById('mistakes-section').style.display='none'; }
  document.getElementById('result-replay-btn').onclick = () => showScreen('home-ln');
  showScreen('screen-results');
}

// ═══════════════════════════════════════════════
// ANGLAIS DATA & JEUX
// ═══════════════════════════════════════════════
const ENGLISH = [
  {en:"carry [sth] out",fr:"Emporter / Exécuter [qqch]"},
  {en:"Realm",fr:"Royaume / Domaine"},
  {en:"Feeble",fr:"Faible, frêle"},
  {en:"on a par with [sth]",fr:"Au même niveau que [qch]"},
  {en:"Wrinkle",fr:"Ride"},
  {en:"Rusty",fr:"Rouillé"},
  {en:"Refrain",fr:"S'abstenir"},
  {en:"Earnestly",fr:"Sérieusement"},
  {en:"Limb",fr:"Membre du corps (bras, jambe)"},
  {en:"Upon",fr:"Sur / En +"},
  {en:"To slack off",fr:"Se relâcher"},
  {en:"To act [sth] out",fr:"Jouer (un rôle)"},
  {en:"Ankle",fr:"Cheville"},
  {en:"Quench",fr:"Désaltérer / Étancher"},
  {en:"Chopstick",fr:"Baguette (cuisine)"},
  {en:"Fierce",fr:"Féroce"},
  {en:"To dabble in",fr:"S'essayer à"},
  {en:"Crooked",fr:"Tordu"},
  {en:"grant [sb] [sth]",fr:"Accorder quelque chose à quelqu'un"},
  {en:"Thrilled",fr:"Ravi, surexcité"},
  {en:"Cluttered",fr:"En désordre"},
  {en:"Oblivious",fr:"Inconscient / Qui ignore"},
  {en:"Thirst",fr:"Soif"},
  {en:"Reignite",fr:"Rallumer / Raviver"},
  {en:"To stage [sth]",fr:"Mettre en scène"},
  {en:"Pinch",fr:"Pincer"},
  {en:"Dwell",fr:"Demeurer / S'attarder sur"},
  {en:"Flaw",fr:"Défaut"},
  {en:"Lighter",fr:"Plus léger / Briquet"},
  {en:"Conceited",fr:"Orgueilleux"},
  {en:"Rattle",fr:"Secouer / Faire du bruit"},
  {en:"To eavesdrop",fr:"Espionner / Écouter discrètement"},
  {en:"Head-on",fr:"De front / De plein fouet"},
  {en:"To take the stage",fr:"Prendre la scène / Attirer l'attention"},
  {en:"Intercourse",fr:"Rapports (sexuels)"},
  {en:"hold out on [sb]",fr:"Cacher quelque chose à quelqu'un"},
  {en:"To frown",fr:"Froncer les sourcils"},
  {en:"Settle",fr:"Régler / S'installer"},
  {en:"fathom [sth]",fr:"Percer un mystère / Comprendre"},
  {en:"Steward",fr:"Coordinateur / Gérant"},
  {en:"To soothe [sb/sth]",fr:"Apaiser / Calmer"},
  {en:"To spark [sth]",fr:"fig. Déclencher / Provoquer"},
  {en:"shift [sth]",fr:"litt. Déplacer / fig. Changer de perspective"},
  // ── Session 11 mai 2026 ──
  {en:"to mingle",fr:"litt. Se mélanger / fig. Socialiser / Mingler"},
  {en:"to ship [sb]",fr:"fig. Shipper qqn / Vouloir qu'ils soient ensemble (fandom)"},
  {en:"though",fr:"Pourtant / Quand même / Cependant (fin de phrase ou conjonction)"},
  {en:"doable",fr:"Faisable / Réalisable"},
  {en:"to depict",fr:"Dépeindre / Représenter / Illustrer"},
  {en:"to cut sb some slack",fr:"fig. Être indulgent envers qqn / Lâcher la pression"},
  {en:"to back sb up",fr:"litt. Reculer / fig. Soutenir qqn / Couvrir qqn"},
  {en:"add-on",fr:"litt. Ajout / fig. Module / Extension / Supplément"},
  {en:"to be on edge",fr:"litt. Être au bord / fig. Être à cran / Sur les nerfs"},
  {en:"to meddle",fr:"fig. S'ingérer / Se mêler des affaires des autres / Fouiner"},
  {en:"to belittle",fr:"fig. Rabaisser / Dévaloriser / Diminuer"},
  {en:"playwright",fr:"Dramaturge / Auteur de pièces de théâtre"},
  {en:"to bump heads",fr:"litt. Se cogner la tête / fig. Être en désaccord / S'affronter"},
  {en:"to rack one's brain",fr:"fig. Se creuser la tête / Se triturer les méninges"},
  {en:"to mess up",fr:"litt. Mettre le désordre / fig. Rater / Gâcher / Foutre en l'air"},
  // ── Session 15 mai 2026 ──
  {en:"full-fledged",fr:"À part entière / Complet / Pleinement développé"},
  {en:"to alienate",fr:"litt. Aliéner / fig. Mettre à l'écart / Isoler / Éloigner"},
  {en:"to give sb a nudge",fr:"litt. Donner un petit coup de coude / fig. Pousser doucement / Inciter subtilement"},
  {en:"a nudge",fr:"litt. Petit coup de coude / fig. Coup de pouce / Légère incitation"},
  {en:"rail yard",fr:"Dépôt ferroviaire / Gare de triage"},
  {en:"hobo",fr:"Vagabond itinérant / Clochard voyageur (qui saute dans les trains)"},
  {en:"to relieve sb of their duties",fr:"fig. Relever qqn de ses fonctions / Décharger de ses responsabilités"},
  {en:"to swing out",fr:"litt. Balancer vers l'extérieur / fig. Se lancer / Sortir en trombe"},
  {en:"to get strung up",fr:"litt. Se faire suspendre / fig. Se faire pendre / Être à cran"},
  {en:"thrill",fr:"litt. Frisson / fig. Sensation forte / Montée d'adrénaline"},
  {en:"thrilling",fr:"Palpitant / Électrisant / Haletant"},
  // ── Session 19 mai 2026 ──
  {en:"to bestow (sth on sb)",fr:"litt. Octroyer / Accorder / Conférer / Offrir (solennel)"},
  {en:"to grant",fr:"Accorder / Octroyer / Admettre (une demande)"},
  {en:"a grant",fr:"Subvention / Bourse / Don"},
  {en:"take for granted",fr:"Tenir pour acquis / Ne pas apprécier à sa juste valeur"},
  // ── Sessions récentes (mai-juin 2026) ──
  {en:"to ground (a flight)",fr:"Clouer au sol / Immobiliser (avion)"},
  {en:"grounded",fr:"Cloué au sol / Puni (enfant) / Terre-à-terre"},
  {en:"flight",fr:"Vol"},
  {en:"stay grounded",fr:"Rester ancré / Rester humble"},
  {en:"to be off the hook",fr:"fig. Être tiré d'affaire / S'en tirer"},
  {en:"to let sb off the hook",fr:"Laisser qqn s'en tirer / Épargner qqn"},
  {en:"hook",fr:"Crochet / Hameçon"},
  {en:"hook up",fr:"Brancher / Connecter / (argot) Coucher avec"},
  {en:"hold (verb)",fr:"Tenir / Garder / Contenir"},
  {en:"hold (noun)",fr:"Prise / Emprise / Contrôle"},
  {en:"to get hold of sb",fr:"Joindre qqn / Réussir à contacter"},
  {en:"to have a hold on sb",fr:"Avoir de l'emprise sur qqn"},
  {en:"to get a hold of yourself",fr:"Se ressaisir / Se reprendre"},
  {en:"hold on",fr:"Attendre / Tenir bon / Ne pas quitter (tel.)"},
  {en:"hold up",fr:"Tenir / Retarder / Braquer (vol)"},
  {en:"hold back",fr:"Retenir / Se retenir"},
  {en:"hold out",fr:"Tenir / Résister / Tendre (main)"},
  {en:"bereaved",fr:"Endeuillé / En deuil (adj.)"},
  {en:"the bereaved",fr:"Les endeuillés / La famille du défunt"},
  {en:"bereavement",fr:"Deuil / Perte d'un proche"},
  {en:"grief",fr:"Chagrin / Douleur du deuil"},
  {en:"mourning",fr:"Deuil (processus / période)"},
  {en:"meticulous",fr:"Méticuleux / Minutieux / Pointilleux"},
  {en:"meticulously",fr:"Méticuleusement / Minutieusement"},
  {en:"to corner",fr:"litt. Coincer / fig. Acculer / Piéger / Mettre au pied du mur"},
  {en:"cornered",fr:"Coincé / Acculé"},
  {en:"corner",fr:"Coin / Angle / Corner (foot)"},
  {en:"to impeach",fr:"Destituer / Mettre en accusation (haut fonctionnaire)"},
  {en:"impeachment",fr:"Procédure de destitution / Mise en accusation"},
  {en:"a fine",fr:"Amende / Contravention"},
  {en:"to fine",fr:"Infliger une amende / Pénaliser"},
  {en:"fine print",fr:"Petits caractères (contrat)"},
  {en:"walk a fine line",fr:"Marcher sur une ligne fine / Situation délicate"},
  {en:"scorched",fr:"Brûlé / Carbonisé / Roussi"},
  {en:"to scorch",fr:"Brûler légèrement / Roussir / Carboniser"},
  {en:"scorched rice",fr:"Riz brûlé (croûte au fond de la marmite)"},
  {en:"scorched earth",fr:"Terre brûlée (stratégie)"},
  {en:"scorching hot",fr:"Torride / Brûlant"},
  // ── Session 5 octobre 2026 — mots + équivalents C1 ──
  {"en": "cork", "fr": "Bouchon de liège / Boucher", "lvl": "B2", "c1": "bottle sth up · put a lid on it", "say": "Don't bottle it up, just tell me."},
  {"en": "to snoop", "fr": "Fouiner / Espionner (péj.)", "lvl": "C1", "c1": "pry into · nosy · poke your nose into", "say": "Stop poking your nose into my business."},
  {"en": "to squat", "fr": "S'accroupir / Squatter · (argot) not know squat = n'y rien connaître", "lvl": "B2", "c1": "crouch down · not know the first thing about", "say": "He doesn't know the first thing about football."},
  {"en": "to cauterise", "fr": "Cautériser · (fig.) endurcir, rendre insensible", "lvl": "C2", "c1": "become desensitised to", "say": "You become desensitised to it after a while."},
  {"en": "pull toward", "fr": "Attirer vers / Être attiré par", "lvl": "B2", "c1": "be drawn to · gravitate toward", "say": "I tend to gravitate toward data-heavy projects."},
  {"en": "to bottle sth up", "fr": "Refouler, garder pour soi (émotions)", "lvl": "C1", "say": "Don't bottle it up, just tell me."},
  {"en": "put a lid on it", "fr": "(fam.) Ferme-la · Contenir, limiter", "lvl": "C1", "say": "Can you put a lid on it for five minutes?"},
  {"en": "to pry into", "fr": "S'immiscer dans / Fouiner dans", "lvl": "C1", "say": "I don't want to pry, but are you okay?"},
  {"en": "nosy", "fr": "Curieux, fouineur (péj.)", "lvl": "B2", "say": "Don't be so nosy!"},
  {"en": "poke your nose into", "fr": "Fourrer son nez dans", "lvl": "C1", "say": "Stop poking your nose into my business."},
  {"en": "to crouch down", "fr": "S'accroupir (neutre)", "lvl": "B2", "say": "She crouched down to tie her shoes."},
  {"en": "not know the first thing about", "fr": "N'y connaître absolument rien", "lvl": "C1", "say": "He doesn't know the first thing about football."},
  {"en": "become desensitised to", "fr": "Devenir insensible à / S'habituer à", "lvl": "C1", "say": "You become desensitised to it after a while."},
  {"en": "be drawn to", "fr": "Être attiré par (instinctivement)", "lvl": "C1", "say": "I've always been drawn to big cities."},
  {"en": "gravitate toward", "fr": "Se tourner naturellement vers", "lvl": "C1", "say": "I tend to gravitate toward data-heavy projects."},
  // ── Session 8 octobre 2026 ──
  {"en": "to rip out", "fr": "Arracher (d'un coup, avec force)", "lvl": "B2", "c1": "tear out · yank out · gut", "c2": "wrest (sth from sb)", "say": "They ripped out the old carpet last weekend."},
  {"en": "to tear out", "fr": "Arracher (une page…)", "lvl": "B2", "say": "Can you tear out a page for me?"},
  {"en": "to yank out", "fr": "Arracher d'un coup sec (fam.)", "lvl": "C1", "say": "He yanked out the plug without saving."},
  {"en": "to gut", "fr": "Vider entièrement · (fig.) vider de sa substance", "lvl": "C1", "say": "The budget cuts gutted the project."},
  {"en": "to wrest", "fr": "Arracher de force (pouvoir, contrôle) — soutenu", "lvl": "C2", "say": "The investors wrested control from the founder."},
  {"en": "a rip-off", "fr": "Une arnaque (fam.)", "lvl": "B2", "say": "Twenty bucks for a coffee? That's a rip-off!"},
  {"en": "belly button", "fr": "Nombril (courant)", "lvl": "B1", "c1": "navel · navel-gazing", "c2": "umbilicus", "say": "She got her belly button pierced last summer."},
  {"en": "navel", "fr": "Nombril (neutre, écrit)", "lvl": "C1", "say": "She has a small tattoo just above her navel."},
  {"en": "navel-gazing", "fr": "(fig.) Nombrilisme", "lvl": "C1", "say": "Less navel-gazing, more action."},
  {"en": "umbilicus", "fr": "Ombilic (médical)", "lvl": "C2", "say": "The incision was made just below the umbilicus."},
  {"en": "innie / outie", "fr": "Nombril creux / qui ressort (fam.)", "lvl": "C1", "say": "Are you an innie or an outie?"},
  {"en": "to pull strings", "fr": "Faire jouer ses relations / Pistonner", "lvl": "C1", "c1": "call in a favor", "c2": "have friends in high places", "say": "His uncle pulled some strings to get him the job."},
  {"en": "to call in a favor", "fr": "Demander un service rendu en retour", "lvl": "C1", "say": "I helped him move, so I'm calling in a favor."},
  {"en": "friends in high places", "fr": "Avoir le bras long (des relations haut placées)", "lvl": "C2", "say": "He never gets fined, he has friends in high places."},
  {"en": "parole board", "fr": "Commission des libérations conditionnelles", "lvl": "C1", "c1": "on parole", "c2": "probation", "say": "The parole board denied his request."},
  {"en": "on parole", "fr": "En liberté conditionnelle", "lvl": "C1", "say": "He was released on parole after five years."},
  {"en": "probation", "fr": "Sursis avec mise à l'épreuve (≠ parole)", "lvl": "C2", "say": "She got two years' probation instead of jail."},
  {"en": "inquiry", "fr": "Enquête officielle / Demande de renseignements", "lvl": "C1", "c1": "a probe", "c2": "an inquest", "say": "The government launched a public inquiry into the scandal."},
  {"en": "a probe", "fr": "Une enquête (langage des médias)", "lvl": "C1", "say": "Police opened a probe into the fire."},
  {"en": "an inquest", "fr": "Enquête judiciaire sur un décès", "lvl": "C2", "say": "The inquest ruled his death accidental."},
,
  {en:"to behead",fr:"Décapiter"},
  {en:"to be cleared",fr:"Être disculpé / Être innocenté"},
  {en:"to overlook",fr:"Négliger / Passer à côté de / Donner sur"},
  {en:"to despise",fr:"Mépriser / Avoir du mépris pour"},
  {en:"to burn bridges",fr:"Couper les ponts (fig.)"},
  {en:"to weigh down",fr:"Peser sur / Accabler / Plomber"},
  {en:"to predate",fr:"Précéder / Être antérieur à"},
  {en:"breeding ground",fr:"Terreau / Foyer (fig.)"},
  {en:"to get off",fr:"Descendre (d'un transport)"}
];

let enGameState = {};

function updateENStats() {
  const enMastered = JSON.parse(localStorage.getItem('en_mastered')||'[]');
  const enXP = parseInt(localStorage.getItem('en_xp')||'0');
  animateCounter(document.getElementById('en-stat-score'), enXP);
  animateCounter(document.getElementById('en-stat-mastered'), enMastered.length);
}

const EN_LEVELS = {"carry [sth] out": "B2", "Realm": "C1", "Feeble": "C1", "on a par with [sth]": "C1", "Wrinkle": "B2", "Rusty": "B2", "Refrain": "C1", "Earnestly": "C1", "Limb": "B2", "Upon": "B2", "To slack off": "C1", "To act [sth] out": "B2", "Ankle": "B1", "Quench": "C1", "Chopstick": "B1", "Fierce": "B2", "To dabble in": "C1", "Crooked": "B2", "grant [sb] [sth]": "B2", "Thrilled": "B2", "Cluttered": "C1", "Oblivious": "C1", "Thirst": "B1", "Reignite": "C1", "To stage [sth]": "B2", "Pinch": "B2", "Dwell": "C1", "Flaw": "B2", "Lighter": "B1", "Conceited": "C1", "Rattle": "B2", "To eavesdrop": "C1", "Head-on": "B2", "To take the stage": "B2", "Intercourse": "C1", "hold out on [sb]": "C1", "To frown": "B2", "Settle": "B2", "fathom [sth]": "C2", "Steward": "B2", "To soothe [sb/sth]": "C1", "To spark [sth]": "B2", "shift [sth]": "B2", "to mingle": "C1", "to ship [sb]": "C1", "though": "B1", "doable": "B2", "to depict": "C1", "to cut sb some slack": "C1", "to back sb up": "B2", "add-on": "B2", "to be on edge": "C1", "to meddle": "C1", "to belittle": "C1", "playwright": "B2", "to bump heads": "C1", "to rack one's brain": "C1", "to mess up": "B1", "full-fledged": "C1", "to alienate": "C1", "to give sb a nudge": "C1", "a nudge": "B2", "rail yard": "B2", "hobo": "C1", "to relieve sb of their duties": "C1", "to swing out": "B2", "to get strung up": "C2", "thrill": "B2", "thrilling": "B2", "to bestow (sth on sb)": "C2", "to grant": "B2", "a grant": "B2", "take for granted": "B2", "to ground (a flight)": "B2", "grounded": "B2", "flight": "B1", "stay grounded": "C1", "to be off the hook": "C1", "to let sb off the hook": "C1", "hook": "B1", "hook up": "B2", "hold (verb)": "B1", "hold (noun)": "B2", "to get hold of sb": "B2", "to have a hold on sb": "C1", "to get a hold of yourself": "C1", "hold on": "B1", "hold up": "B2", "hold back": "B2", "hold out": "B2", "bereaved": "C1", "the bereaved": "C1", "bereavement": "C1", "grief": "B2", "mourning": "C1", "meticulous": "C1", "meticulously": "C1", "to corner": "B2", "cornered": "B2", "corner": "B1", "to impeach": "C1", "impeachment": "C1", "a fine": "B1", "to fine": "B2", "fine print": "B2", "walk a fine line": "C1", "scorched": "C1", "to scorch": "C1", "scorched rice": "C1", "scorched earth": "C2", "scorching hot": "B2"};
const NAT_DELATIN = [["postpone", "put off", "Let's put off the meeting till Monday."], ["tolerate", "put up with", "I can't put up with this noise."], ["investigate", "look into", "I'll look into it and get back to you."], ["discover", "find out", "I just found out she's moving."], ["continue", "keep going", "Don't stop, keep going!"], ["cancel", "call off", "They called off the game."], ["reduce", "cut down on", "I'm trying to cut down on sugar."], ["arrive", "show up", "He showed up an hour late."], ["recover from", "get over", "It took me weeks to get over it."], ["refuse", "turn down", "She turned down the offer."], ["establish", "set up", "We set up a new team."], ["abandon (a habit)", "give up", "I gave up smoking last year."], ["resemble", "take after", "He really takes after his dad."], ["review", "go over", "Let's go over the numbers again."], ["understand (a problem)", "figure out", "I can't figure out this bug."], ["return", "come back", "When are you coming back?"], ["increase", "go up", "Prices keep going up."], ["omit", "leave out", "Don't leave anything out."], ["reprimand", "tell off", "My boss told me off."], ["invent (a story)", "make up", "He made the whole thing up."], ["eliminate", "get rid of", "We need to get rid of this old stuff."], ["maintain (contact)", "keep in touch", "Let's keep in touch!"]];
const NAT_CONNECTED = [["I'm gonna go.", "I'm going to go."], ["I wanna see it.", "I want to see it."], ["I gotta leave.", "I've got to leave."], ["Whaddaya think?", "What do you think?"], ["Didja see that?", "Did you see that?"], ["Lemme check.", "Let me check."], ["Gimme a sec.", "Give me a second."], ["Dunno.", "I don't know."], ["That's kinda weird.", "That's kind of weird."], ["A lotta people.", "A lot of people."], ["I'm outta here.", "I'm out of here."], ["You shoulda told me.", "You should have told me."], ["It coulda been worse.", "It could have been worse."], ["Wassup?", "What's up?"], ["Gotcha.", "I understand / Got you."], ["Whatcha doing?", "What are you doing?"], ["I hafta go.", "I have to go."], ["Can I get some wader?", "Can I get some water? (flap T)"], ["That's way bedder.", "That's way better. (flap T)"], ["Geddit?", "Get it?"], ["Djeet yet?", "Did you eat yet?"], ["Howzit going?", "How's it going?"]];
const NAT_REACT = [["I just got the job!", "No way, congrats!", ["It is a good new.", "I am content for you.", "Felicitations."]], ["Sorry, I'm running late.", "No worries, take your time.", ["It is not grave.", "No problem of time.", "Don't excuse you."]], ["The meeting got moved to Friday.", "Got it, thanks for the heads-up.", ["I have understood.", "OK, it is noted.", "Thank you for the information."]], ["I think we should split the bill.", "Fair enough.", ["It is just.", "You have reason.", "That is correct."]], ["I've been working 12 hours straight.", "That's rough, you should take a break.", ["It is hard for you.", "You must be very fatigued.", "Poor of you."]], ["Want to grab dinner later?", "Sure, I'm down.", ["Yes, it pleases me.", "With pleasure, I accept.", "OK for me."]], ["Can you send me the file?", "Sure thing, I'll send it over.", ["Yes, I send it you.", "Of course, I go to send it.", "Yes, I will make it."]], ["I failed my driving test again.", "Ugh, that sucks. You'll get it next time.", ["It is not of luck.", "Too bad for you.", "You will succeed the next."]], ["This place is amazing!", "Right? I love it here.", ["It is true, no?", "Yes, it is very nice place.", "I find also."]], ["Did you finish the report?", "Almost, I'm wrapping it up.", ["I am in train of finishing.", "Almost, I finish to write it.", "Not yet, I am on it since this morning."]], ["I'm thinking about quitting my job.", "Really? What's going on?", ["Ah bon? Why?", "It is serious?", "What arrives?"]], ["Thanks so much for your help!", "Anytime!", ["It is nothing.", "Of nothing.", "You are welcome of it."]], ["I don't agree with you at all.", "I hear you, but…", ["I understand your point of vue.", "You have wrong.", "I am not agree."]], ["Guess what happened today?", "What? Tell me!", ["I don't know, say me.", "What arrived?", "Tell me what it is."]]];
const NAT_STRESS = [[["pho", "to", "graph"], 0, "PHOtograph"], [["pho", "to", "gra", "phy"], 1, "phoTOgraphy — l'accent se déplace !"], [["pho", "to", "gra", "phic"], 2, "photoGRAphic"], [["e", "co", "no", "my"], 1, "eCOnomy"], [["e", "co", "no", "mic"], 2, "ecoNOmic"], [["de", "ve", "lop"], 1, "deVElop"], [["com", "for", "ta", "ble"], 0, "COMFtable — souvent 3 syllabes à l'oral"], [["ve", "ge", "ta", "ble"], 0, "VEGtable — 3 syllabes à l'oral"], [["in", "te", "res", "ting"], 0, "INteresting"], [["ho", "tel"], 1, "hoTEL"], [["a", "na", "ly", "sis"], 1, "aNAlysis"], [["a", "na", "lyze"], 0, "ANalyze"], [["per", "cen", "tage"], 1, "perCENtage"], [["de", "ter", "mine"], 1, "deTERmine — pas « déterMINE »"], [["ma", "nage", "ment"], 0, "MAnagement"], [["tech", "no", "lo", "gy"], 1, "techNOlogy"], [["a", "vai", "la", "ble"], 1, "aVAIlable"], [["im", "por", "tant"], 1, "imPORtant"], [["da", "ta"], 0, "DAta — en US : « DAY-da » (flap T)"], [["ca", "reer"], 1, "caREER — pas « CA-reer »"], [["de", "ve", "lo", "per"], 1, "deVEloper"], [["re", "cord"], 0, "REcord (nom) — mais reCORD (verbe)"]];
// ═══════════════════════════════════════════════
// ENGLISH LEVELS (CEFR) + NATIVE SPEAKING MODES
// ═══════════════════════════════════════════════
function enLevelOf(card) { return (card && (card.lvl || EN_LEVELS[card.en])) || 'B2'; }
function enLevelBadge(lvl) {
  const c = { B1:'#94a3b8', B2:'#4cc9f0', C1:'#a855f7', C2:'#ff1744' }[lvl] || '#4cc9f0';
  return `<span style="display:inline-block;margin-left:.4rem;padding:.12rem .45rem;border-radius:6px;font-size:.62rem;font-weight:800;letter-spacing:.05em;background:${c}22;color:${c};border:1px solid ${c}88;vertical-align:middle">${lvl}</span>`;
}
function enExtrasHTML(card) {
  if(!card) return '';
  let h = '';
  if(card.c1) h += `<div style="margin-top:.6rem;font-size:.78rem;color:#c4b5fd">⬆️ C1 : ${card.c1}</div>`;
  if(card.c2) h += `<div style="margin-top:.3rem;font-size:.78rem;color:#fda4af">⬆️⬆️ C2 : ${card.c2}</div>`;
  const ex = card.say || (typeof PRON_DATA !== 'undefined' && PRON_DATA[card.en] ? PRON_DATA[card.en][0] : '');
  if(ex) h += `<div style="margin-top:.35rem;font-size:.78rem;color:#7dd3fc;font-style:italic">🗣️ « ${ex} »</div>`;
  return h;
}
function speakEN(text, rate) {
  try {
    if(!('speechSynthesis' in window) || !text) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/\(.*?\)/g,''));
    u.lang = 'en-US'; u.rate = rate || 0.95;
    const v = speechSynthesis.getVoices().find(v => v.lang === 'en-US');
    if(v) u.voice = v;
    speechSynthesis.speak(u);
  } catch(e) {}
}

const NAT_C1 = [["gap", "I'm not gonna lie, I ___ data-heavy projects.", "tend to gravitate toward", ["am gravitating to the", "tend to attract myself to", "use to go toward"], "Honnêtement, j'ai tendance à aller vers les projets data.", "I'm not gonna lie, I tend to gravitate toward data-heavy projects."], ["gap", "He talks about crypto all day, but he doesn't ___ it.", "know the first thing about", ["know the first things on", "have the first idea of", "know nothing of it about"], "Il parle crypto toute la journée mais n'y connaît rien.", "He talks about crypto all day, but he doesn't know the first thing about it."], ["gap", "Come on, ___, it's his first week.", "cut him some slack", ["give him some slack off", "cut him a slack", "let him some slack"], "Allez, sois indulgent, c'est sa première semaine.", "Come on, cut him some slack, it's his first week."], ["gap", "Everyone's been ___ since the layoffs were announced.", "on edge", ["on the edge of nerves", "in edge", "at the edge"], "Tout le monde est à cran depuis l'annonce des licenciements.", "Everyone's been on edge since the layoffs were announced."], ["gap", "Don't ___, she's there for you every single time.", "take her for granted", ["take her as granted", "take her granted", "grant her for taken"], "Ne la tiens pas pour acquise, elle est toujours là pour toi.", "Don't take her for granted, she's there for you every single time."], ["gap", "I've been ___ all morning and I still can't remember his name.", "racking my brain", ["breaking my head", "racking my head", "cracking my brain"], "Je me creuse la tête depuis ce matin.", "I've been racking my brain all morning and I still can't remember his name."], ["gap", "He messed up, but I'm not gonna ___ that easily.", "let him off the hook", ["let him out of the hook", "leave him off the hook", "put him off the hook"], "Il a merdé, mais je ne vais pas le laisser s'en tirer si facilement.", "He messed up, but I'm not gonna let him off the hook that easily."], ["gap", "Honest without being rude: you have to ___.", "walk a fine line", ["walk on a thin line", "walk a thin rope", "walk the fine road"], "Franc sans être blessant : c'est un équilibre délicat.", "Honest without being rude: you have to walk a fine line."], ["gap", "If anyone questions the numbers, I'll ___.", "back you up", ["back up you", "support you up", "back you on"], "Si quelqu'un conteste les chiffres, je te soutiendrai.", "If anyone questions the numbers, I'll back you up."], ["gap", "We ___ on the strategy, but we figured it out.", "bumped heads", ["bumped our heads together", "hit heads", "bumped the heads"], "On s'est accrochés sur la stratégie, mais on a trouvé une solution.", "We bumped heads on the strategy, but we figured it out."], ["gap", "I can't ___ his attitude anymore.", "put up with", ["put on with", "support", "bear up"], "Je ne supporte plus son attitude.", "I can't put up with his attitude anymore."], ["gap", "Give me a sec, I'm trying to ___ what went wrong.", "figure out", ["figure about", "find out of", "realize me"], "Une seconde, j'essaie de comprendre ce qui a cloché.", "Give me a sec, I'm trying to figure out what went wrong."], ["gap", "Let's ___ the decision until we have the final figures.", "hold off on", ["hold back", "hold out", "hold on"], "Attendons avant de décider, le temps d'avoir les chiffres définitifs.", "Let's hold off on the decision until we have the final figures."], ["gap", "Sorry, I didn't mean to ___, I was just worried about you.", "pry", ["pry into", "snoop at", "be curious of"], "Désolé, je ne voulais pas être indiscret, je m'inquiétais.", "Sorry, I didn't mean to pry, I was just worried about you."], ["gap", "It's not rocket science, it's totally ___.", "doable", ["makeable", "faisable", "possible to do it"], "Ce n'est pas sorcier, c'est tout à fait faisable.", "It's not rocket science, it's totally doable."], ["gap", "She ___ the offer because the pay was too low.", "turned down", ["turned off", "refused down", "put down"], "Elle a refusé l'offre, le salaire était trop bas.", "She turned down the offer because the pay was too low."], ["up", "J'ai hâte de commencer.", "I can't wait to get started.", ["I have haste to begin.", "I am impatient to commence.", "I look forward to start."], "J'ai hâte de commencer.", "I can't wait to get started."], ["up", "Ça ne me dérange pas.", "I don't mind.", ["It doesn't disturb me.", "It doesn't derange me.", "It's not bothering for me."], "Ça ne me dérange pas.", "I don't mind."], ["up", "On se tient au courant.", "Let's keep each other posted.", ["We hold us at the current.", "Let's keep us informed of.", "We stay in the current."], "On se tient au courant.", "Let's keep each other posted."], ["up", "Je suis complètement débordé.", "I'm completely swamped.", ["I'm completely overflowed.", "I'm totally overflown.", "I'm full of work over."], "Je suis complètement débordé.", "I'm completely swamped."], ["up", "Ça vaut le coup.", "It's totally worth it.", ["It worths the hit.", "It's worth the blow.", "It values the shot."], "Ça vaut le coup.", "It's totally worth it."], ["up", "Laisse tomber, c'est pas grave.", "Forget it, it's no big deal.", ["Let it fall, it's not grave.", "Leave fall, it's not serious.", "Drop it, it is not grave."], "Laisse tomber, c'est pas grave.", "Forget it, it's no big deal."], ["up", "Je n'en reviens pas !", "I can't believe it!", ["I don't come back from it!", "I can't return from it!", "I'm not coming back!"], "Je n'en reviens pas !", "I can't believe it!"], ["up", "Il m'a posé un lapin.", "He stood me up.", ["He put me a rabbit.", "He posed me a rabbit.", "He left me a rabbit."], "Il m'a posé un lapin.", "He stood me up."], ["up", "On verra bien.", "We'll see how it goes.", ["We will see well.", "We see good.", "We'll well see."], "On verra bien.", "We'll see how it goes."], ["up", "Ça me tient à cœur.", "It really matters to me.", ["It holds me at heart.", "It keeps me to the heart.", "It's holding my heart."], "Ça me tient à cœur.", "It really matters to me."], ["up", "C'est pas mes oignons.", "That's none of my business.", ["It's not my onions.", "Those aren't my onions.", "It's not of my business."], "C'est pas mes oignons.", "That's none of my business."], ["up", "Il a pété un câble.", "He totally lost it.", ["He blew a cable.", "He broke a cable.", "He lost the cable."], "Il a pété un câble.", "He totally lost it."], ["up", "J'en ai marre.", "I'm sick of it.", ["I have marre of it.", "I have enough of it.", "I'm fed of it."], "J'en ai marre.", "I'm sick of it."], ["up", "Tu m'as manqué.", "I missed you.", ["You missed me.", "You have missed to me.", "You lacked me."], "Tu m'as manqué.", "I missed you."]];
const NATIVE_MODES = {
  c1:        { title:'🎙️ Phrases C1 natives', dur:120, hint:'Choisis ce qu\'un Américain dirait vraiment, puis répète à voix haute' },
  delatin:   { title:'🧱 Délatinise',        dur:60, hint:'Version formelle → choisis le phrasal verb natif' },
  connected: { title:'🔗 Connected speech',  dur:60, hint:'Forme orale américaine → que veut-elle dire ?' },
  reactions: { title:'💬 Réactions natives', dur:90, hint:'Choisis la réaction la plus naturelle' },
  stress:    { title:'🎯 Accent tonique',    dur:60, hint:'Où tombe l\'accent ?' },
};
let nat = null;
function natShuffle(a) { a = a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function natPick(a) { return a[Math.floor(Math.random()*a.length)]; }
function natOthers(pool, exclude, n) { return natShuffle(pool.filter(x => x !== exclude)).slice(0, n); }

function natQuestion(mode) {
  if(mode === 'c1') {
    const it = natPick(NAT_C1);
    const prompt = it[0] === 'gap'
      ? `<div class="nat-small">Complète comme un natif</div><div class="nat-big" style="font-size:1.15rem;line-height:1.5">${it[1].replace('___','<span style="color:#ffeb3b">_____</span>')}</div>`
      : `<div class="nat-small">Comment un Américain dirait…</div><div class="nat-big" style="font-size:1.3rem">« ${it[1]} »</div>`;
    return { prompt, opts: natShuffle([it[2], ...it[3]]), answer: it[2], speak: it[5],
      explain: `${it[0] === 'gap' ? it[4] + '<br>' : ''}🔁 Répète : « ${it[5]} »` };
  }
  if(mode === 'delatin') {
    const it = natPick(NAT_DELATIN);
    return { prompt:`<div class="nat-small">À l'oral, un Américain dirait plutôt…</div><div class="nat-big">${it[0]}</div>`,
      opts: natShuffle([it[1], ...natOthers(NAT_DELATIN, it, 3).map(x=>x[1])]), answer: it[1], speak: it[2], explain: it[2] };
  }
  if(mode === 'connected') {
    const it = natPick(NAT_CONNECTED);
    return { prompt:`<div class="nat-small">Tu entends…</div><div class="nat-big">« ${it[0]} »</div>`,
      opts: natShuffle([it[1], ...natOthers(NAT_CONNECTED, it, 3).map(x=>x[1])]), answer: it[1], speak: it[0], explain: '' };
  }
  if(mode === 'reactions') {
    const it = natPick(NAT_REACT);
    return { prompt:`<div class="nat-small">On te dit…</div><div class="nat-big" style="font-size:1.25rem">« ${it[0]} »</div>`,
      opts: natShuffle([it[1], ...it[2]]), answer: it[1], speak: it[1], explain: '' };
  }
  const it = natPick(NAT_STRESS);
  const opts = it[0].map((_, k) => it[0].map((s, j) => j === k ? s.toUpperCase() : s).join('·'));
  return { prompt:`<div class="nat-small">Accent tonique de…</div><div class="nat-big">${it[0].join('')}</div>`,
    opts, answer: opts[it[1]], speak: it[0].join(''), explain: it[2] };
}

function startNative(mode) {
  if(nat && nat.timer) clearInterval(nat.timer);
  const cfg = NATIVE_MODES[mode];
  nat = { mode, score:0, total:0, combo:0, left:cfg.dur, locked:false, timer:null };
  document.getElementById('nat-title').textContent = cfg.title;
  document.getElementById('nat-hint').textContent = cfg.hint;
  document.getElementById('nat-result').style.display = 'none';
  document.getElementById('nat-play').style.display = 'block';
  showScreen('screen-native');
  natNext();
  const t0 = Date.now();
  nat.timer = setInterval(() => {
    nat.left = cfg.dur - (Date.now() - t0) / 1000;
    const pct = Math.max(0, nat.left / cfg.dur * 100);
    document.getElementById('nat-timer').style.width = pct + '%';
    document.getElementById('nat-time').textContent = Math.max(0, Math.ceil(nat.left)) + 's';
    if(nat.left <= 0) natEnd();
  }, 100);
}

function natNext() {
  nat.q = natQuestion(nat.mode);
  nat.locked = false;
  document.getElementById('nat-prompt').innerHTML = nat.q.prompt;
  document.getElementById('nat-explain').innerHTML = '';
  document.getElementById('nat-score').textContent = nat.score;
  document.getElementById('nat-combo').textContent = nat.combo >= 2 ? `🔥 x${nat.combo}` : '';
  document.getElementById('nat-opts').innerHTML = nat.q.opts.map((o, i) =>
    `<button class="nat-opt" onclick="natAnswer(${i})">${o}</button>`).join('');
}

function natAnswer(i) {
  if(!nat || nat.locked) return;
  nat.locked = true;
  nat.total++;
  const btns = document.querySelectorAll('#nat-opts .nat-opt');
  const ok = nat.q.opts[i] === nat.q.answer;
  btns.forEach((b, k) => { if(nat.q.opts[k] === nat.q.answer) b.classList.add('ok'); });
  if(ok) { nat.score++; nat.combo++; haptic('light'); }
  else { btns[i].classList.add('ko'); nat.combo = 0; haptic('warning'); }
  if(nat.q.explain) document.getElementById('nat-explain').innerHTML = `🗣️ ${nat.q.explain}`;
  speakEN(nat.q.speak);
  const pause = nat.mode === 'c1' ? (ok ? 3200 : 4200) : (ok ? 900 : 1700);
  setTimeout(() => { if(nat && nat.left > 0) natNext(); }, pause);
}

function natEnd() {
  clearInterval(nat.timer); nat.timer = null; nat.left = 0;
  const key = 'native_best_' + nat.mode;
  const best = parseInt(localStorage.getItem(key) || '0');
  const record = nat.score > best;
  if(record) localStorage.setItem(key, String(nat.score));
  const xp = parseInt(localStorage.getItem('en_xp') || '0') + nat.score * 2;
  localStorage.setItem('en_xp', String(xp));
  if(typeof updateENStats === 'function') updateENStats();
  const acc = nat.total ? Math.round(nat.score / nat.total * 100) : 0;
  document.getElementById('nat-play').style.display = 'none';
  const r = document.getElementById('nat-result');
  r.style.display = 'block';
  r.innerHTML = `
    <div style="font-size:3.2rem;margin-bottom:.6rem">${record ? '🏆' : '⏱️'}</div>
    <div style="font-family:'Unbounded',sans-serif;font-size:1.3rem;margin-bottom:.4rem">${record ? 'Nouveau record !' : 'Temps écoulé'}</div>
    <div style="font-size:2.4rem;font-weight:900;color:#4cc9f0;margin:.6rem 0">${nat.score}</div>
    <div style="color:var(--muted);font-size:.85rem;margin-bottom:1.6rem">${acc}% de réussite · record ${Math.max(best, nat.score)} · +${nat.score * 2} XP</div>
    <div class="btn-row">
      <button class="btn btn-primary" style="background:linear-gradient(135deg,#4cc9f0,#3b82f6)" onclick="startNative('${nat.mode}')">🔁 Rejouer</button>
      <button class="btn btn-ghost" onclick="selectLang('en')">← Anglais</button>
    </div>`;
  if(record) confetti('medium');
}
function natQuit() { if(nat && nat.timer) clearInterval(nat.timer); selectLang('en'); }
function updateNativeBests() {
  Object.keys(NATIVE_MODES).forEach(m => {
    const el = document.getElementById('nat-best-' + m);
    if(el) { const b = localStorage.getItem('native_best_' + m); el.textContent = b ? `Record ${b}` : 'Pas encore joué'; }
  });
}
// Preload voices (iOS loads them lazily)
if('speechSynthesis' in window) { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices(); }

const PRON_DATA = {"to rip out": ["They ripped out the old carpet last weekend.", "they RIP-TOWT thee OHLD KAR-pit last WEEK-end", "ˌrɪp ˈaʊt", "ripped out se lie : « RIP-TOWT »"], "to tear out": ["Can you tear out a page for me?", "kin yuh TEH-ROWT uh PAYJ fer mee", "ˌtɛr ˈaʊt", "tear (déchirer) se dit « tèr », pas « tir » (= larme)"], "to yank out": ["He yanked out the plug without saving.", "hee YANK-TOWT thuh PLUG with-OWT SAY-ving", "ˌjæŋk ˈaʊt", "yank : « æ » très ouvert"], "to gut": ["The budget cuts gutted the project.", "thuh BUH-jit KUTS GUH-did thuh PRAH-jekt", "ɡʌt", "gutted → « GUH-did » (flap T)"], "to wrest": ["The investors wrested control from the founder.", "thee in-VES-terz RES-tid kun-TROHL frum thuh FOWN-der", "rɛst", "Le w est muet : « rest »"], "a rip-off": ["Twenty bucks for a coffee? That's a rip-off!", "TWEN-ee BUKS fer uh KAW-fee thats uh RI-pawf", "ˈrɪpˌɔf", "twenty → « TWEN-ee » : le t disparaît après n"], "belly button": ["She got her belly button pierced last summer.", "shee GAHT-er BE-lee BUH-dn PEERST last SUM-er", "ˈbɛli ˌbʌtən", "button → « BUH-dn » : T glottal, avalé"], "navel": ["She has a small tattoo just above her navel.", "shee haz uh SMAWL ta-TOO just uh-BUV-er NAY-vul", "ˈneɪvəl", "above her → « uh-BUV-er » (h effacé)"], "navel-gazing": ["Less navel-gazing, more action.", "LES NAY-vul gay-zing MOR AK-shun", "ˈneɪvəlˌɡeɪzɪŋ", "accent principal sur NAY"], "umbilicus": ["The incision was made just below the umbilicus.", "thee in-SI-zhun wuz MAYD just buh-LOH thee um-BI-li-kus", "ʌmˈbɪlɪkəs", "accent sur BI"], "innie / outie": ["Are you an innie or an outie?", "er yoo-uh-NI-nee or uh-NOW-dee", "ˈɪni / ˈaʊti", "outie → « OW-dee » (flap T)"], "to pull strings": ["His uncle pulled some strings to get him the job.", "hiz UNG-kul PULD sum STRINGZ tuh GE-dim thuh JAHB", "ˌpʊl ˈstrɪŋz", "get him → « GE-dim » (h effacé + flap T)"], "to call in a favor": ["I helped him move, so I'm calling in a favor.", "ai HELP-tim MOOV soh aim KAW-ling i-nuh FAY-ver", "ˌkɔl ɪn ə ˈfeɪvər", "in a → « i-nuh »"], "friends in high places": ["He never gets fined, he has friends in high places.", "hee NE-ver gets FAIND hee haz FREN-zin HAI PLAY-siz", "ˈfrɛndz ɪn ˌhaɪ ˈpleɪsɪz", "friends in → « FREN-zin », le d s'efface"], "parole board": ["The parole board denied his request.", "thuh puh-ROHL BORD di-NAID iz ri-KWEST", "pəˈroʊl ˌbɔrd", "⚠️ faux ami : parole = libération conditionnelle"], "on parole": ["He was released on parole after five years.", "hee wuz ri-LEEST ah-n puh-ROHL AF-ter FAIV YEERZ", "ɑn pəˈroʊl", "accent sur ROHL"], "probation": ["She got two years' probation instead of jail.", "shee GAHT too YEERZ proh-BAY-shun in-STE-duv JAYL", "proʊˈbeɪʃən", "instead of → « in-STE-duv »"], "inquiry": ["The government launched a public inquiry into the scandal.", "thuh GUV-er-ment LAWNCH-tuh PUB-lik IN-kwuh-ree IN-tuh thuh SKAN-dul", "ˈɪnkwəri", "US : surtout IN-kwuh-ree"], "a probe": ["Police opened a probe into the fire.", "puh-LEES OH-pun-duh PROHB IN-tuh thuh FAI-er", "proʊb", "police : accent sur LEES"], "an inquest": ["The inquest ruled his death accidental.", "thee IN-kwest ROOLD iz DETH ak-si-DEN-tul", "ˈɪnkwɛst", "death : TH sourd final"], "carry [sth] out": ["We carried out the analysis last week.", "wee KA-ree-DOWT thee uh-NA-luh-sis last WEEK", "ˌkæri ˈaʊt", "carried out se lie : « KA-ree-DOWT »"], "Realm": ["That's outside the realm of possibility.", "thats owt-SAID thuh RELM uv pah-suh-BI-luh-dee", "rɛlm", "Le « a » ne se prononce pas : « relm »"], "Feeble": ["That's a pretty feeble excuse.", "thats uh PRI-dee FEE-bul ik-SKYOOS", "ˈfibəl", "pretty → « PRI-dee » (flap T)"], "on a par with [sth]": ["Her English is on a par with a native speaker's.", "her ING-lish iz ah-nuh PAR with uh NAY-div SPEE-kerz", "ɑn ə ˈpɑr", "native → « NAY-div » (flap T)"], "Wrinkle": ["There's one little wrinkle in the plan.", "therz WUN LI-dul RING-kul in thuh PLAN", "ˈrɪŋkəl", "Le w de wrinkle est muet"], "Rusty": ["My Spanish is a little rusty.", "my SPA-nish iz uh LI-dul RUS-tee", "ˈrʌsti", "little → « LI-dul »"], "Refrain": ["Please refrain from using your phone.", "pleez ri-FRAYN frum YOO-zing yer FOHN", "rɪˈfreɪn", "your → « yer » (forme faible)"], "Earnestly": ["He earnestly believed it would work.", "hee ER-nist-lee buh-LEEVD it wud WERK", "ˈɝnɪstli", "Le R américain se prononce : « ER »"], "Limb": ["I'm not going out on a limb here.", "aim NAHT GOH-in ow-dah-nuh LIM heer", "lɪm", "Le b de limb est muet ; out on a → « ow-dah-nuh »"], "Upon": ["Once upon a time, there was a king.", "WUNS uh-PAH-nuh TAIM ther wuz uh KING", "əˈpɑn", "upon a → « uh-PAH-nuh »"], "To slack off": ["Stop slacking off and get to work.", "STAHP SLA-king AWF n get tuh WERK", "ˌslæk ˈɔf", "and → « n »"], "To act [sth] out": ["The kids acted out the whole scene.", "thuh KIDZ AK-ti-DOWT thuh hohl SEEN", "ˌækt ˈaʊt", "acted out → « AK-ti-DOWT »"], "Ankle": ["I twisted my ankle playing soccer.", "ai TWIS-tid my AN-kul PLAY-in SAH-ker", "ˈæŋkəl", "En US, soccer = foot ; football = foot américain"], "Quench": ["Nothing quenches your thirst like cold water.", "NUH-thing KWEN-chiz yer THERST laik kohld WAH-der", "kwɛntʃ", "water → « WAH-der » (flap T)"], "Chopstick": ["I still can't use chopsticks properly.", "ai STIL KANT YOOZ CHAHP-stiks PRAH-per-lee", "ˈtʃɑpˌstɪk", "can't en US : « kænt », pas « kahnt »"], "Fierce": ["It's a fierce competition out there.", "its uh FEERS kahm-puh-TI-shun OWT ther", "fɪrs", "Le r final se prononce"], "To dabble in": ["I dabbled in photography for a while.", "ai DA-buld in fuh-TAH-gruh-fee fer uh WAIL", "ˈdæbəl ɪn", "photography : accent sur TAH"], "Crooked": ["Your tie is a little crooked.", "yer TAI iz uh LI-dul KROO-kid", "ˈkrʊkɪd", "crooked (adj.) : 2 syllabes « KROO-kid »"], "grant [sb] [sth]": ["They granted him a second chance.", "they GRAN-ti-dim uh SE-kund CHANS", "ɡrænt", "« æ » ouvert en US : GRAN, pas GRAHN"], "Thrilled": ["I'm thrilled to be here.", "aim THRILD tuh bee HEER", "θrɪld", "TH : langue entre les dents, ni « s » ni « f »"], "Cluttered": ["My desk is so cluttered right now.", "my DESK iz soh KLUH-derd rait NOW", "ˈklʌtərd", "cluttered → « KLUH-derd » (flap T)"], "Oblivious": ["He was totally oblivious to the problem.", "hee wuz TOH-duh-lee uh-BLI-vee-us tuh thuh PRAH-blum", "əˈblɪviəs", "totally → « TOH-duh-lee »"], "Thirst": ["I woke up with a terrible thirst.", "ai WOH-kup with uh TE-ruh-bul THERST", "θɝst", "woke up → « WOH-kup »"], "Reignite": ["The trip reignited their friendship.", "thuh TRIP ree-ig-NAI-did ther FREND-ship", "ˌriɪɡˈnaɪt", "reignited → « ree-ig-NAI-did »"], "To stage [sth]": ["They staged a protest downtown.", "they STAYJ-duh PROH-test down-TOWN", "steɪdʒ", "staged a → « STAYJ-duh »"], "Pinch": ["Add a pinch of salt.", "A-duh PIN-chuv SAWLT", "pɪntʃ", "pinch of → « PIN-chuv »"], "Dwell": ["Don't dwell on the past.", "dohnt DWEL ahn thuh PAST", "dwɛl", "Don't : le t final presque avalé"], "Flaw": ["Every plan has a flaw.", "EV-ree PLAN ha-zuh FLAW", "flɔ", "every : 2 syllabes « EV-ree »"], "Lighter": ["Do you have a lighter?", "duh-yuh HA-vuh LAI-der", "ˈlaɪtər", "lighter → « LAI-der » (flap T)"], "Conceited": ["He's smart, but kind of conceited.", "heez SMART but KAIN-duh kun-SEE-did", "kənˈsitɪd", "kind of → « KAIN-duh »"], "Rattle": ["Something's rattling in the engine.", "SUM-thingz RAT-ling in thee EN-jin", "ˈrætəl", "the + voyelle → « thee »"], "To eavesdrop": ["Were you eavesdropping on us?", "wer yuh EEVZ-drah-ping ah-NUS", "ˈivzˌdrɑp", "on us → « ah-NUS »"], "Head-on": ["Let's tackle the problem head-on.", "lets TA-kul thuh PRAH-blum hed-AHN", "ˌhɛdˈɑn", "problem → « PRAH-blum »"], "To take the stage": ["She took the stage and the crowd went wild.", "shee TOOK thuh STAYJ n thuh KROWD went WAILD", "teɪk ðə ˈsteɪdʒ", "and → « n »"], "Intercourse": ["Careful: intercourse is rarely used in its old meaning.", "KER-ful IN-ter-kors iz RER-lee yoozd in its OHLD MEE-ning", "ˈɪntərˌkɔrs", "Accent sur IN ; sens courant aujourd'hui : sexuel"], "hold out on [sb]": ["Come on, don't hold out on me!", "kuh-MAHN dohnt hohl-DOW-dahn MEE", "ˌhoʊld ˈaʊt ɑn", "hold out on me → tout lié : « hohl-DOW-dahn-mee »"], "To frown": ["Why are you frowning?", "WAI er yuh FROW-ning", "fraʊn", "are you → « er yuh »"], "Settle": ["Let's settle this once and for all.", "lets SE-dul this WUN-sen fer AWL", "ˈsɛtəl", "settle → « SE-dul » ; once and → « WUN-sen »"], "fathom [sth]": ["I can't fathom why he did that.", "ai KANT FA-thum wai hee DID that", "ˈfæðəm", "TH sonore comme dans « this »"], "Steward": ["Ask the steward for a blanket.", "ASK thuh STOO-erd fer uh BLAN-kit", "ˈstuərd", "for a → « fer uh »"], "To soothe [sb/sth]": ["Music always soothes me.", "MYOO-zik AWL-wayz SOODHZ mee", "suð", "soothe : TH sonore final"], "To spark [sth]": ["Her comment sparked a huge debate.", "her KAH-ment SPAR-ktuh HYOOJ di-BAYT", "spɑrk", "sparked a → « SPAR-ktuh »"], "shift [sth]": ["We need to shift our focus.", "wee NEE-duh SHIF-tar FOH-kus", "ʃɪft", "need to → « NEE-duh » ; our → « ar »"], "to mingle": ["Go mingle, meet some people!", "goh MING-gul MEET sum PEE-pul", "ˈmɪŋɡəl", "some → « sum » (forme faible)"], "to ship [sb]": ["Everyone ships those two characters.", "EV-ree-wun SHIPS thohz TOO KER-ik-terz", "ʃɪp", "characters : le ch se dit « k »"], "though": ["It was fun, though.", "it wuz FUN thoh", "ðoʊ", "though en fin de phrase = « quand même »"], "doable": ["It's tight, but it's doable.", "its TAIT but its DOO-uh-bul", "ˈduəbəl", "3 syllabes : DOO-uh-bul"], "to depict": ["The movie depicts life in the nineties.", "thuh MOO-vee di-PIKTS LAIF in thuh NAIN-teez", "dɪˈpɪkt", "depicts : 3 consonnes finales « kts »"], "to cut sb some slack": ["Cut me some slack, it's my first day.", "KUT mee sum SLAK its my FERST DAY", "kʌt ... səm ˈslæk", "first day : le t s'efface → « FERS-DAY »"], "to back sb up": ["Thanks for backing me up in there.", "THANKS fer BA-king mee UP in THER", "ˌbæk ˈʌp", "thanks : TH sourd + « æ »"], "add-on": ["The add-on costs ten bucks.", "thee A-dahn KAWSTS TEN BUKS", "ˈædˌɑn", "add-on → « A-dahn »"], "to be on edge": ["I've been on edge all week.", "aiv bin ah-NEJ awl WEEK", "ɑn ˈɛdʒ", "on edge → « ah-NEJ » ; been → « bin »"], "to meddle": ["Stop meddling in my life.", "STAHP MED-ling in my LAIF", "ˈmɛdəl", "meddling : 2 syllabes"], "to belittle": ["Don't belittle what she's done.", "dohnt buh-LI-dul wut sheez DUN", "bɪˈlɪtəl", "belittle → « buh-LI-dul » (flap T)"], "playwright": ["Shakespeare is the most famous playwright ever.", "SHAYK-speer iz thuh mohst FAY-mus PLAY-rait EV-er", "ˈpleɪˌraɪt", "Le w de wright est muet"], "to bump heads": ["We bump heads, but we respect each other.", "wee BUMP HEDZ but wee ri-SPEKT ee-CHUH-ther", "ˈbʌmp ˈhɛdz", "each other → « ee-CHUH-ther »"], "to rack one's brain": ["I'm racking my brain for an answer.", "aim RA-king my BRAYN fer-uh-NAN-ser", "ræk wʌnz ˈbreɪn", "for an answer → « fer-uh-NAN-ser »"], "to mess up": ["I really messed up this time.", "ai RIL-ee MES-TUP this TAIM", "ˌmɛs ˈʌp", "messed up → « MES-TUP »"], "full-fledged": ["She's now a full-fledged data scientist.", "sheez NOW uh FUL-flejd DAY-duh SAI-un-tist", "ˌfʊlˈflɛdʒd", "data → « DAY-duh » (flap T)"], "to alienate": ["Don't alienate your best clients.", "dohnt AY-lee-uh-nayt yer BEST KLAI-ints", "ˈeɪliəˌneɪt", "alienate : accent sur AY"], "to give sb a nudge": ["Give him a nudge if he falls asleep.", "GI-vi-muh NUJ if hee fawlz uh-SLEEP", "ɡɪv ə ˈnʌdʒ", "give him a → « GI-vi-muh » (h effacé)"], "a nudge": ["Sometimes all you need is a little nudge.", "SUM-taimz AWL yuh NEED iz uh LI-dul NUJ", "nʌdʒ", "nudge : « u » court comme dans « but »"], "rail yard": ["The old rail yard is now a park.", "thee OHLD RAYL-yard iz NOW uh PARK", "ˈreɪl ˌjɑrd", "old : le d presque avalé"], "hobo": ["The hobo jumped on the freight train.", "thuh HOH-boh JUMPT ahn thuh FRAYT TRAYN", "ˈhoʊboʊ", "freight : gh muet → « frayt »"], "to relieve sb of their duties": ["He was relieved of his duties yesterday.", "hee wuz ri-LEEVD uv iz DOO-deez YES-ter-day", "rɪˈliv", "duties → « DOO-deez » en US ; his → « iz »"], "to swing out": ["The door swung out into the hallway.", "thuh DOR SWUNG OWT IN-tuh thuh HAWL-way", "ˌswɪŋ ˈaʊt", "into → « IN-tuh »"], "to get strung up": ["In old westerns, outlaws got strung up.", "in OHLD WES-ternz OWT-lawz gaht STRUNG UP", "ɡɛt ˌstrʌŋ ˈʌp", "got → « gaht » (o ouvert en US)"], "thrill": ["What a thrill!", "WUH-duh THRIL", "θrɪl", "What a → « WUH-duh » (flap T)"], "thrilling": ["The final was absolutely thrilling.", "thuh FAI-nul wuz AB-suh-loot-lee THRI-ling", "ˈθrɪlɪŋ", "absolutely : accent sur AB"], "to bestow (sth on sb)": ["The award was bestowed on her last year.", "thee uh-WORD wuz bi-STOHD ahn her LAST YEER", "bɪˈstoʊ", "award → « uh-WORD »"], "to grant": ["Your request has been granted.", "yer ri-KWEST hiz bin GRAN-tid", "ɡrænt", "has been → « hiz bin »"], "a grant": ["She got a research grant.", "shee GAH-duh REE-serch GRANT", "ɡrænt", "got a → « GAH-duh » (flap T)"], "take for granted": ["We take clean water for granted.", "wee TAYK KLEEN WAH-der fer GRAN-tid", "teɪk fər ˈɡræntɪd", "water → « WAH-der »"], "to ground (a flight)": ["All flights were grounded because of the storm.", "AWL FLAITS wer GROWN-did buh-KUZ uv thuh STORM", "ɡraʊnd", "because → « buh-KUZ »"], "grounded": ["You're grounded for a week!", "yer GROWN-did fer uh WEEK", "ˈɡraʊndɪd", "grounded = aussi « privé de sortie »"], "flight": ["My flight got delayed.", "my FLAIT gaht di-LAYD", "flaɪt", "flight : gh muet"], "stay grounded": ["Success hasn't changed him, he stays grounded.", "suk-SES HA-zunt CHAYNJ-dim hee STAYZ GROWN-did", "steɪ ˈɡraʊndɪd", "changed him → « CHAYNJ-dim »"], "to be off the hook": ["You're off the hook this time.", "yer AWF thuh HOOK this TAIM", "ɔf ðə ˈhʊk", "hook : « ou » court"], "to let sb off the hook": ["I'll let you off the hook.", "ail LE-chuh AWF thuh HOOK", "lɛt ... ɔf ðə ˈhʊk", "let you → « LE-chuh »"], "hook": ["That song has a great hook.", "that SAWNG ha-zuh GRAYT HOOK", "hʊk", "has a → « ha-zuh »"], "hook up": ["Can you hook up the speakers?", "kin yuh HOO-KUP thuh SPEE-kerz", "ˌhʊk ˈʌp", "Attention : hook up a aussi un sens sexuel"], "hold (verb)": ["Hold my bag for a sec.", "HOHLD my BAG fer uh SEK", "hoʊld", "sec = second, très oral"], "hold (noun)": ["Grab hold of the rope.", "GRAB HOHL-duv thuh ROHP", "hoʊld", "hold of → « HOHL-duv »"], "to get hold of sb": ["I couldn't get hold of him all day.", "ai KUD-nt GET HOHL-duv-im awl DAY", "ɡɛt ˈhoʊld əv", "couldn't → « KUD-nt »"], "to have a hold on sb": ["She still has a hold on him.", "shee STIL HA-zuh HOHL-dah-nim", "ˈhoʊld ɑn", "hold on him → « HOHL-dah-nim »"], "to get a hold of yourself": ["Get a hold of yourself!", "GE-duh HOHL-duv yer-SELF", "ɡɛt ə ˈhoʊld əv", "Get a → « GE-duh » (flap T)"], "hold on": ["Hold on, I'll be right back.", "hohl-DAHN ail bee rait BAK", "ˌhoʊld ˈɑn", "right back : le t s'efface"], "hold up": ["What's the hold-up?", "wuts thuh HOHL-dup", "ˈhoʊldˌʌp", "hold-up → « HOHL-dup »"], "hold back": ["Don't hold back, tell me everything.", "dohnt hohld BAK TEL mee EV-ree-thing", "ˌhoʊld ˈbæk", "back : « æ » ouvert"], "hold out": ["Hold out a little longer.", "hohl-DOW-duh LI-dul LAWN-ger", "ˌhoʊld ˈaʊt", "out a → « OW-duh »"], "bereaved": ["Our thoughts are with the bereaved family.", "ar THAWTS er with thuh buh-REEVD FAM-lee", "bɪˈrivd", "family : 2 syllabes « FAM-lee »"], "the bereaved": ["The bereaved need time and support.", "thuh buh-REEVD NEED TAIM n suh-PORT", "ðə bɪˈrivd", "support : accent sur PORT"], "bereavement": ["She's on bereavement leave this week.", "sheez ahn buh-REEV-ment LEEV this WEEK", "bɪˈrivmənt", "leave : i long « LEEV »"], "grief": ["Everyone handles grief differently.", "EV-ree-wun HAN-dulz GREEF DI-frunt-lee", "ɡrif", "differently : 3 syllabes « DI-frunt-lee »"], "mourning": ["The whole country is in mourning.", "thuh HOHL KUN-tree iz in MOR-ning", "ˈmɔrnɪŋ", "mourning = morning à l'oral !"], "meticulous": ["She's meticulous about every detail.", "sheez muh-TI-kyuh-lus uh-BOW-dev-ree DEE-tayl", "məˈtɪkjələs", "about every → « uh-BOW-dev-ree » ; detail : DEE-tayl en US"], "meticulously": ["He meticulously checked every line.", "hee muh-TI-kyuh-lus-lee CHEKT EV-ree LAIN", "məˈtɪkjələsli", "checked : 1 syllabe « CHEKT »"], "to corner": ["The reporter cornered him after the meeting.", "thuh ri-POR-der KOR-nerd-im AF-ter thuh MEE-ding", "ˈkɔrnər", "reporter, meeting : flap T"], "cornered": ["I felt cornered.", "ai FELT KOR-nerd", "ˈkɔrnərd", "Deux R américains bien prononcés"], "corner": ["Meet me at the corner.", "MEET mee a-thuh KOR-ner", "ˈkɔrnər", "at the → « a-thuh »"], "to impeach": ["Congress voted to impeach the president.", "KAHN-gris VOH-did tuh im-PEECH thuh PRE-zuh-dent", "ɪmˈpitʃ", "voted → « VOH-did »"], "impeachment": ["The impeachment trial starts Monday.", "thee im-PEECH-ment TRAI-ul STARTS MUN-day", "ɪmˈpitʃmənt", "trial : 2 syllabes « TRAI-ul »"], "a fine": ["I got a fine for speeding.", "ai GAH-duh FAIN fer SPEE-ding", "faɪn", "got a → « GAH-duh »"], "to fine": ["They fined him two hundred dollars.", "they FAIN-dim TOO HUN-drid DAH-lerz", "faɪn", "dollars : « DAH-lerz » en US"], "fine print": ["Always read the fine print.", "AWL-wayz REED thuh FAIN PRINT", "ˌfaɪn ˈprɪnt", "always : accent sur AWL"], "walk a fine line": ["You're walking a fine line here.", "yer WAW-king uh FAIN LAIN heer", "wɔk ə faɪn ˈlaɪn", "walk : le l est muet"], "scorched": ["The grass was scorched by the sun.", "thuh GRAS wuz SKORCHT bai thuh SUN", "skɔrtʃt", "grass : « æ » en US"], "to scorch": ["Careful, you'll scorch the pan.", "KER-ful yool SKORCH thuh PAN", "skɔrtʃ", "careful → « KER-ful »"], "scorched rice": ["The scorched rice at the bottom is the best part.", "thuh SKORCHT RAIS a-thuh BAH-dum iz thuh BEST PART", "ˌskɔrtʃt ˈraɪs", "bottom → « BAH-dum » (flap T)"], "scorched earth": ["They used a scorched-earth strategy.", "they YOOZ-duh SKORCHT-ERTH STRA-duh-jee", "ˌskɔrtʃt ˈɝθ", "strategy → « STRA-duh-jee »"], "scorching hot": ["It's scorching hot out there.", "its SKOR-ching HAHT OWT ther", "ˈskɔrtʃɪŋ ˈhɑt", "hot : « ah » ouvert en US"], "cork": ["Pop the cork, we're celebrating!", "PAHP thuh KORK weer SE-luh-bray-ding", "kɔrk", "celebrating → « SE-luh-bray-ding »"], "to snoop": ["Stop snooping around my room.", "STAHP SNOO-ping uh-ROWND my ROOM", "snup", "around → « uh-ROWND »"], "to squat": ["He doesn't know squat about cars.", "hee DUZ-nt NOH SKWAHT uh-BOWT KARZ", "skwɑt", "squat → « SKWAHT »"], "to cauterise": ["The doctor had to cauterize the wound.", "thuh DAHK-ter HAD tuh KAW-duh-raiz thuh WOOND", "ˈkɔtəˌraɪz", "wound (blessure) → « woond »"], "pull toward": ["I feel a strong pull toward music.", "ai FEE-luh STRAWNG PUL tord MYOO-zik", "pʊl tɔrd", "toward → « tord », une seule syllabe"], "to bottle sth up": ["Don't bottle it up, just tell me.", "dohnt BAH-duh-li-DUP just TEL mee", "ˌbɑtəl ˈʌp", "bottle it up → « BAH-duh-li-DUP », tout lié"], "put a lid on it": ["Can you put a lid on it for five minutes?", "kin yuh PUH-duh LI-dah-nit fer FAIV MI-nits", "pʊt ə ˈlɪd ɑn ɪt", "put a → « PUH-duh » ; lid on it → « LI-dah-nit »"], "to pry into": ["I don't want to pry, but are you okay?", "ai DOHN-uh PRAI but er yuh oh-KAY", "praɪ", "don't want to → « DOHN-uh »"], "nosy": ["Don't be so nosy!", "dohnt bee SOH NOH-zee", "ˈnoʊzi", "nosy : « s » se dit « z »"], "poke your nose into": ["Stop poking your nose into my business.", "STAHP POH-king yer NOHZ IN-tuh my BIZ-nis", "poʊk jər ˈnoʊz", "business : 2 syllabes « BIZ-nis »"], "to crouch down": ["She crouched down to tie her shoes.", "shee KROWCHT DOWN tuh TAI-er SHOOZ", "ˌkraʊtʃ ˈdaʊn", "tie her → « TAI-er » (h effacé)"], "not know the first thing about": ["He doesn't know the first thing about football.", "hee DUZ-nt NOH thuh FERST THING uh-BOWT FUT-bawl", "nɑt noʊ ðə ˈfɝst θɪŋ", "first thing : le t s'efface → « FERS-THING »"], "become desensitised to": ["You become desensitized to it after a while.", "yoo bi-KUM dee-SEN-suh-taiz-duh-dit AF-ter uh WAIL", "diˈsɛnsəˌtaɪzd", "desensitized to it → tout lié"], "be drawn to": ["I've always been drawn to big cities.", "aiv AWL-wayz bin DRAWN tuh BIG SI-deez", "drɔn", "cities → « SI-deez » (flap T)"], "gravitate toward": ["I tend to gravitate toward data-heavy projects.", "ai TEN-duh GRA-vuh-tayt tord DAY-duh HE-vee PRAH-jekts", "ˈɡrævəˌteɪt", "tend to → « TEN-duh » ; data → « DAY-duh »"]};
const PRON_LESSONS = [{"icon": "🔤", "title": "Lire la phonétique de l'app", "intro": "Chaque phrase du SRS Prononciation est réécrite pour un francophone. Les MAJUSCULES marquent la syllabe accentuée : plus forte, plus longue, plus aiguë.", "points": [{"h": "Les sons clés", "txt": "ay = « é-i » (day) · ee = i long (see) · i = i court (sit) · a = « è » très ouvert (cat) · ah = « a » grave (hot) · uh = son neutre (about) · oh = « o-ou » (go) · oo = « ou » (food) · ow = « aou » (now) · ai = « aï » (my) · er = R américain (her) · th = TH · d au milieu d'un mot = flap T.", "ex": [["data", "DAY-duh"], ["about", "uh-BOWT"], ["cat", "KAT"], ["hot", "HAHT"], ["go", "GOH"], ["her", "HER"]]}]}, {"icon": "🥁", "title": "Le flap T", "intro": "Le son le plus typique de l'accent américain. Entre deux voyelles (ou après un R), le T devient un D très rapide : la langue tape une seule fois derrière les dents.", "points": [{"h": "Dans un mot", "txt": "Le T disparaît au profit d'un D léger.", "ex": [["water", "WAH-der"], ["better", "BE-der"], ["city", "SI-dee"], ["party", "PAR-dee"], ["data", "DAY-duh"]]}, {"h": "Entre deux mots", "txt": "Ça marche aussi quand le mot suivant commence par une voyelle.", "ex": [["a lot of", "uh LAH-duv"], ["get it", "GE-dit"], ["what a day", "WUH-duh DAY"], ["put it on", "PU-di-DAHN"]]}, {"h": "Exception", "txt": "Au début d'une syllabe accentuée, le T reste un vrai T.", "ex": [["attack", "uh-TAK"], ["Italian", "i-TAL-yun"]]}]}, {"icon": "😶", "title": "Le schwa et les formes faibles", "intro": "Dans une phrase naturelle, les petits mots grammaticaux non accentués se réduisent à un son neutre « uh ». C'est ce qui donne le rythme américain : les mots importants ressortent, les autres glissent.", "points": [{"h": "Les réductions à connaître", "txt": "to → tuh · for → fer · and → n · of → uv / uh · you → yuh · your → yer · can → kin · was → wuz · them → um.", "ex": [["I want to go", "ai WAH-nuh GOH"], ["a cup of coffee", "uh KUH-puh KAW-fee"], ["rock and roll", "rahk-n-ROHL"], ["tell them", "TE-lum"], ["what are you doing", "WUH-der-yuh DOO-in"]]}]}, {"icon": "🎯", "title": "Accent de mot et de phrase", "intro": "Le français accentue toujours la dernière syllabe. L'anglais en choisit une, et la mettre au mauvais endroit rend le mot difficile à comprendre, même bien prononcé.", "points": [{"h": "Repères utiles", "txt": "Noms de 2 syllabes : souvent la 1re (PROject, REcord). Verbes : souvent la 2e (proJECT, reCORD). Avant -tion, -ic, -ity : l'accent tombe juste avant (inforMAtion, ecoNOmic, aBIlity).", "ex": [["photograph", "FOH-duh-graf"], ["photography", "fuh-TAH-gruh-fee"], ["photographic", "foh-duh-GRA-fik"], ["record (nom)", "RE-kerd"], ["record (verbe)", "ri-KORD"]]}, {"h": "Accent de phrase", "txt": "On accentue les mots porteurs de sens (noms, verbes, adjectifs) et on écrase les mots grammaticaux.", "ex": [["I need to finish the report", "ai NEE-duh FI-nish thuh ri-PORT"], ["It's not a big deal", "its NAH-duh BIG DEEL"]]}]}, {"icon": "🌀", "title": "Le R américain et les voyelles", "intro": "Le R américain n'est ni roulé ni dans la gorge : la langue se recourbe vers l'arrière sans rien toucher. Il se prononce partout, même en fin de mot.", "points": [{"h": "Le R partout", "txt": "Ne l'avale jamais, contrairement à l'anglais britannique.", "ex": [["car", "KAR"], ["her", "HER"], ["work", "WERK"], ["water", "WAH-der"]]}, {"h": "Trois voyelles à distinguer", "txt": "æ (cat) : bouche très ouverte, entre « è » et « a ». ɑ (hot) : « a » grave. ʌ (cut) : « eu » court et relâché.", "ex": [["cat", "KAT"], ["cut", "KUT"], ["cot", "KAHT"], ["can't", "KANT"], ["job", "JAHB"]]}]}, {"icon": "👅", "title": "TH et H : les pièges francophones", "intro": "Ce sont les deux sons qui trahissent le plus vite un accent français.", "points": [{"h": "Le TH", "txt": "Langue entre les dents. TH sourd (think) : on souffle. TH sonore (this) : les cordes vocales vibrent. Jamais « s », « z » ou « f ».", "ex": [["think", "THINK"], ["three", "THREE"], ["this", "DHIS"], ["mother", "MUH-dher"], ["thanks", "THANKS"]]}, {"h": "Le H", "txt": "Toujours soufflé en début de mot accentué, mais effacé dans les pronoms faibles au milieu d'une phrase.", "ex": [["happy", "HA-pee"], ["house", "HOWS"], ["tell him", "TE-lim"], ["give her", "GI-ver"]]}]}, {"icon": "🔗", "title": "Liaisons et réductions", "intro": "Les Américains ne prononcent pas les mots un par un : la consonne finale se colle à la voyelle suivante, et certaines combinaisons fusionnent.", "points": [{"h": "Consonne + voyelle", "txt": "La fin d'un mot se lie au début du suivant.", "ex": [["check it out", "CHE-ki-DOWT"], ["pick it up", "PI-ki-DUP"], ["hold on", "hohl-DAHN"]]}, {"h": "Fusions", "txt": "t + you → « ch » · d + you → « j ».", "ex": [["let you", "LE-chuh"], ["what do you want", "WUH-juh WAHNT"], ["did you eat", "DI-juh EET"]]}, {"h": "Formes orales", "txt": "gonna, wanna, gotta, kinda, lemme : naturelles dans un registre détendu.", "ex": [["I'm going to call you", "aim GUH-nuh KAW-lyuh"], ["let me know", "LEM-mee NOH"], ["I've got to go", "aiv GAH-duh GOH"]]}]}, {"icon": "🤐", "title": "Le T glottal (button, mountain)", "intro": "Devant un « n » non accentué, le T américain n'est ni un T ni un flap : il est avalé. La gorge se ferme une fraction de seconde, puis le « n » sort par le nez.", "points": [{"h": "T + n", "txt": "Dans -tten, -tain, -ton, le T disparaît presque. Ne prononce surtout pas « bu-TONN » à la française.", "ex": [["button", "BUH-dn"], ["mountain", "MOWN-n"], ["certain", "SER-n"], ["Manhattan", "man-HA-n"], ["written", "RI-n"]]}, {"h": "T en fin de mot", "txt": "Devant une consonne, le T final est souvent juste « retenu », sans souffle.", "ex": [["that guy", "tha GAI"], ["not now", "nah NOW"], ["I can't go", "ai KAN GOH"]]}, {"h": "Après n : le T disparaît", "txt": "Après un n, le T s'efface souvent complètement.", "ex": [["twenty", "TWEN-ee"], ["internet", "IN-er-net"], ["wanted", "WAN-id"]]}]}];
// ═══════════════════════════════════════════════
// PRONUNCIATION SRS (US accent) + ACCENT LESSONS
// ═══════════════════════════════════════════════
function pronLoad() { try { return JSON.parse(localStorage.getItem('pron_srs') || '{}'); } catch(e) { return {}; } }
function pronSave(d) { localStorage.setItem('pron_srs', JSON.stringify(d)); }
function pronIsDue(c) {
  if(!c) return false;
  if(srsState.simMode) return c.due <= Date.now();
  const n = new Date(); return c.due <= new Date(n.getFullYear(), n.getMonth(), n.getDate(), 23, 59, 59, 999).getTime();
}
function pronDueCount() {
  const d = pronLoad();
  return Object.keys(PRON_DATA).filter(k => d[k] && d[k].reps > 0 && pronIsDue(d[k])).length;
}
let pron = null;
function openPronSRS() {
  const d = pronLoad();
  const keys = Object.keys(PRON_DATA).filter(k => ENGLISH.some(c => c.en === k));
  const due = keys.filter(k => d[k] && pronIsDue(d[k]));
  const fresh = keys.filter(k => !d[k]).slice(0, 10);
  pron = { queue: due.concat(fresh), done: 0 };
  showScreen('screen-pron');
  pronRender();
}
function pronRender() {
  const box = document.getElementById('pron-card');
  document.getElementById('pron-counter').textContent = pron.queue.length ? `${pron.queue.length} à travailler` : '';
  if(!pron.queue.length) {
    const nb = Object.keys(PRON_DATA).length - Object.keys(pronLoad()).length;
    box.innerHTML = `<div style="text-align:center;padding:2.5rem 1rem">
      <div style="font-size:3.5rem;margin-bottom:.8rem">${pron.done ? '🎉' : '✅'}</div>
      <div style="font-family:'Unbounded',sans-serif;font-size:1.2rem;margin-bottom:.5rem">${pron.done ? pron.done + ' phrase' + (pron.done > 1 ? 's' : '') + ' travaillée' + (pron.done > 1 ? 's' : '') : 'Rien à réviser'}</div>
      <div style="color:var(--muted);font-size:.85rem;margin-bottom:1.5rem">${nb > 0 ? nb + ' phrases jamais travaillées : relance une session pour en découvrir 10 de plus.' : 'Toutes les phrases sont dans ton SRS.'}</div>
      <div class="btn-row"><button class="btn btn-primary" onclick="openPronSRS()">🔁 Nouvelle session</button><button class="btn btn-ghost" onclick="openAccentLessons()">📚 Leçons accent</button></div></div>`;
    return;
  }
  const key = pron.queue[0], it = PRON_DATA[key];
  const card = ENGLISH.find(c => c.en === key);
  const st = pronLoad()[key] || { ef: 2.5, interval: 0, reps: 0 };
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  box.innerHTML = `
    <div style="background:linear-gradient(135deg,rgba(0,0,0,.72),rgba(0,0,0,.88)),linear-gradient(135deg,#012169,#C8102E);border:2px solid rgba(255,255,255,.35);border-radius:20px;padding:1.6rem 1.3rem;box-shadow:0 12px 40px rgba(0,0,0,.55)">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:.5rem;margin-bottom:1rem;font-size:.75rem;color:rgba(255,255,255,.65)">
        <span>🎯 <b style="color:#fff">${key}</b>${card ? enLevelBadge(enLevelOf(card)) : ''}</span>
        <span style="font-family:monospace;color:#c4b5fd">/${it[2]}/</span>
      </div>
      <div style="font-size:clamp(1.25rem,4.5vw,1.6rem);font-weight:700;color:#fff;line-height:1.4;text-align:center;margin-bottom:1rem">${it[0]}</div>
      <div style="background:rgba(255,235,59,.08);border:1px solid rgba(255,235,59,.3);border-radius:12px;padding:.8rem;text-align:center;font-size:1rem;color:#ffeb3b;letter-spacing:.02em;line-height:1.6">${it[1]}</div>
      ${it[3] ? `<div style="margin-top:.8rem;font-size:.8rem;color:#7dd3fc;text-align:center">💡 ${it[3]}</div>` : ''}
      <div style="display:flex;gap:.5rem;justify-content:center;flex-wrap:wrap;margin-top:1.1rem">
        <button class="btn btn-ghost" style="padding:.55rem 1rem" onclick="speakEN(PRON_DATA[pron.queue[0]][0])">🔊 Écouter</button>
        <button class="btn btn-ghost" style="padding:.55rem 1rem" onclick="speakEN(PRON_DATA[pron.queue[0]][0], 0.65)">🐢 Lent</button>
        ${SR ? `<button class="btn btn-ghost" id="pron-mic" style="padding:.55rem 1rem" onclick="pronRecord()">🎤 M'enregistrer</button>` : ''}
      </div>
      <div id="pron-heard" style="margin-top:.8rem;text-align:center;font-size:.85rem;min-height:1.2rem"></div>
    </div>
    <div style="text-align:center;font-size:.72rem;color:var(--muted);text-transform:uppercase;letter-spacing:.15em;margin:1.2rem 0 .7rem">Répète à voix haute · comment c'était ?</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.5rem">
      <button class="srs-grade-btn srs-grade-again" onclick="pronGrade(0)">Encore<small>${srsFormatInterval(st, 0, 'p:' + key)}</small></button>
      <button class="srs-grade-btn srs-grade-hard" onclick="pronGrade(1)">Difficile<small>${srsFormatInterval(st, 1, 'p:' + key)}</small></button>
      <button class="srs-grade-btn srs-grade-good" onclick="pronGrade(2)">Bien<small>${srsFormatInterval(st, 2, 'p:' + key)}</small></button>
      <button class="srs-grade-btn srs-grade-easy" onclick="pronGrade(3)">Facile<small>${srsFormatInterval(st, 3, 'p:' + key)}</small></button>
    </div>`;
  setTimeout(() => speakEN(it[0]), 250);
}
function pronGrade(g) {
  const key = pron.queue.shift();
  const d = pronLoad();
  d[key] = srsUpdate(d[key] || { ef: 2.5, interval: 0, reps: 0, due: Date.now() }, g, 'p:' + key);
  pronSave(d);
  if(g === 0) pron.queue.push(key); else pron.done++;
  haptic(g === 0 ? 'warning' : 'light');
  if(typeof updateSidebarBadges === 'function') updateSidebarBadges();
  pronRender();
}
// Optional speech recognition: shows which words were understood
function pronRecord() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const out = document.getElementById('pron-heard');
  const btn = document.getElementById('pron-mic');
  if(!SR) return;
  try {
    const rec = new SR(); rec.lang = 'en-US'; rec.interimResults = false; rec.maxAlternatives = 1;
    btn.textContent = '⏺️ Parle…'; out.innerHTML = '<span style="color:var(--muted)">J\'écoute…</span>';
    rec.onresult = e => {
      const heard = e.results[0][0].transcript;
      const norm = s => s.toLowerCase().replace(/[^a-z' ]/g, ' ').split(/\s+/).filter(Boolean);
      const got = new Set(norm(heard));
      const target = PRON_DATA[pron.queue[0]][0].split(/\s+/);
      let ok = 0;
      const html = target.map(w => { const n = norm(w)[0]; const hit = n && got.has(n); if(hit) ok++; return `<span style="color:${hit ? 'var(--success)' : 'var(--error)'}">${w}</span>`; }).join(' ');
      const pct = Math.round(ok / target.length * 100);
      out.innerHTML = `${html}<div style="margin-top:.4rem;color:var(--muted);font-size:.75rem">Compris à ${pct} % · « ${heard} »</div>`;
    };
    rec.onerror = ev => { out.innerHTML = `<span style="color:var(--muted)">Micro indisponible ici (${ev.error}). Écoute, répète et note-toi toi-même.</span>`; };
    rec.onend = () => { if(btn) btn.textContent = '🎤 M\'enregistrer'; };
    rec.start();
  } catch(e) { out.innerHTML = '<span style="color:var(--muted)">Reconnaissance vocale non disponible dans ce navigateur.</span>'; }
}
// ── Accent lessons ──
function openAccentLessons() { showScreen('screen-accent'); accentRenderList(); }
function accentRenderList() {
  document.getElementById('accent-title').textContent = '📚 Leçons accent américain';
  document.getElementById('accent-body').innerHTML = PRON_LESSONS.map((l, i) => `
    <div class="game-card" style="--card-color:#4cc9f0;margin-bottom:.8rem" onclick="accentOpen(${i})">
      <span class="card-icon">${l.icon}</span>
      <div class="card-title">${i + 1}. ${l.title}</div>
      <div class="card-desc">${l.intro}</div>
    </div>`).join('') + `<div class="btn-row" style="margin-top:1rem"><button class="btn btn-primary" onclick="openPronSRS()">🎤 S'entraîner sur mes phrases</button></div>`;
}
function accentOpen(i) {
  const l = PRON_LESSONS[i];
  document.getElementById('accent-title').textContent = `${l.icon} ${l.title}`;
  document.getElementById('accent-body').innerHTML = `
    <div style="font-size:.95rem;line-height:1.7;margin-bottom:1.4rem">${l.intro}</div>
    ${l.points.map(p => `
      <div style="margin-bottom:1.5rem">
        <div style="font-family:'Unbounded',sans-serif;font-size:.95rem;color:#4cc9f0;margin-bottom:.4rem">${p.h}</div>
        <div style="font-size:.88rem;line-height:1.65;color:var(--text);margin-bottom:.7rem">${p.txt}</div>
        <div style="display:grid;gap:.45rem">${p.ex.map(e => `
          <button onclick="speakEN(${JSON.stringify(e[0]).replace(/"/g, '&quot;')})" style="display:flex;justify-content:space-between;align-items:center;gap:.6rem;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-left:3px solid #4cc9f0;border-radius:10px;padding:.6rem .8rem;color:var(--text);font-family:inherit;font-size:.88rem;cursor:pointer;text-align:left">
            <span>🔊 ${e[0]}</span><span style="color:#ffeb3b;font-size:.82rem">${e[1]}</span></button>`).join('')}</div>
      </div>`).join('')}
    <div class="btn-row">
      ${i > 0 ? `<button class="btn btn-ghost" onclick="accentOpen(${i - 1})">← Précédente</button>` : ''}
      ${i < PRON_LESSONS.length - 1 ? `<button class="btn btn-primary" onclick="accentOpen(${i + 1})">Suivante →</button>` : `<button class="btn btn-primary" onclick="openPronSRS()">🎤 Passer à la pratique</button>`}
    </div>
    <div style="text-align:center;margin-top:1rem"><button class="btn btn-ghost" style="font-size:.8rem" onclick="accentRenderList()">☰ Toutes les leçons</button></div>`;
  window.scrollTo({ top: 0 });
}
function updatePronBadge() {
  const el = document.getElementById('pron-due-badge'); if(!el) return;
  const n = pronDueCount();
  el.textContent = n > 0 ? `🧠 ${n} à réviser` : `${Object.keys(pronLoad()).length}/${Object.keys(PRON_DATA).length} phrases vues`;
}

const ES_EXAMPLES = {"quitar": ["Quita los platos de la mesa, por favor.", "Enlève les assiettes de la table, s'il te plaît."], "quitarse": ["Me quito los zapatos al entrar en casa.", "J'enlève mes chaussures en entrant."], "quitarse de en medio": ["¡Quítate de en medio, que no veo!", "Pousse-toi, je ne vois rien !"], "quitarse un peso de encima": ["Al terminar el examen me quité un peso de encima.", "Après l'examen, je me suis libéré d'un poids."], "quitarse el sombrero": ["Me quito el sombrero, lo has hecho genial.", "Chapeau, tu as été génial."], "quitarse años": ["Mi tía siempre se quita años.", "Ma tante se rajeunit toujours."], "estampado": ["Llevaba una camisa estampada de flores.", "Il portait une chemise à fleurs."], "el estampado": ["No me gusta ese estampado de leopardo.", "Je n'aime pas cet imprimé léopard."], "estampar": ["Estampó su firma al final del contrato.", "Il a apposé sa signature au bas du contrat."], "estamparse contra": ["Iba mirando el móvil y se estampó contra una farola.", "Il regardait son téléphone et s'est pris un lampadaire."], "llevar + gerundio": ["Llevo media hora esperándote.", "Ça fait une demi-heure que je t'attends."], "se lleva diciendo": ["Se lleva diciendo años que los alquileres van a bajar.", "On dit depuis des années que les loyers vont baisser."], "llevar sin + infinitivo": ["Llevo una semana sin ir al gimnasio.", "Ça fait une semaine que je ne vais pas à la salle."], "aclarar": ["Antes de empezar, quiero aclarar una cosa.", "Avant de commencer, je veux clarifier un point."], "aclararse": ["Por la tarde el cielo se aclaró.", "L'après-midi, le ciel s'est éclairci."], "la aclaración": ["Gracias por la aclaración.", "Merci pour la précision."], "aclarar dudas": ["El profe se quedó para aclarar dudas.", "Le prof est resté pour répondre aux questions."], "no me aclaro": ["Con este menú no me aclaro.", "Avec ce menu, je m'y perds."], "si no": ["Si no te das prisa, perdemos el tren.", "Si tu ne te dépêches pas, on rate le train."], "ponerse a + infinitivo": ["Llegué a casa y me puse a cocinar.", "Je suis rentré et je me suis mis à cuisiner."], "echarse a": ["Cuando vio el vídeo, se echó a reír.", "Quand il a vu la vidéo, il a éclaté de rire."], "ponerse + emoción": ["Me pongo nervioso antes de hablar en público.", "Je deviens nerveux avant de parler en public."], "volverse": ["Desde que es famoso se ha vuelto insoportable.", "Depuis qu'il est célèbre, il est devenu insupportable."], "quedarse + adjetivo": ["Se quedó callado cuando le pregunté.", "Il est resté muet quand je lui ai demandé."], "el tonito": ["¿Qué es ese tonito? Háblame bien.", "C'est quoi ce ton ? Parle-moi correctement."], "ponerse el tono de alguien": ["Mi hermano se pone el tonito de mi madre para picarme.", "Mon frère prend le ton de ma mère pour me taquiner."], "ocasionar": ["La tormenta ocasionó graves daños.", "L'orage a causé de graves dégâts."], "junto a alguien": ["Siempre ha estado junto a mí.", "Il a toujours été à mes côtés."], "joya": ["Tu abuela es una joya.", "Ta grand-mère est une perle."], "¡joya!": ["¿Nos vemos a las ocho? ¡Joya!", "On se voit à huit heures ? Génial !"], "vencer": ["España venció a Francia en la final.", "L'Espagne a battu la France en finale."], "el vencimiento": ["Mira la fecha de vencimiento del yogur.", "Regarde la date de péremption du yaourt."], "sumar": ["Suma todos los gastos del mes.", "Additionne toutes les dépenses du mois."], "súmale que…": ["Llegó tarde, y súmale que no avisó.", "Il est arrivé en retard, et ajoute à ça qu'il n'a pas prévenu."], "sumarse a": ["Varios jugadores se sumaron a la protesta.", "Plusieurs joueurs se sont joints à la protestation."], "pedir salir a alguien": ["Por fin le pidió salir a Lucía.", "Il a enfin demandé à Lucía de sortir avec lui."], "Proyecto": ["Estoy trabajando en un proyecto nuevo.", "Je travaille sur un nouveau projet."], "desatar": ["Su comentario desató una gran polémica.", "Son commentaire a déclenché une grosse polémique."], "asignar": ["Me han asignado un cliente nuevo.", "On m'a affecté un nouveau client."], "Cenar": ["¿Qué quieres cenar esta noche?", "Qu'est-ce que tu veux dîner ce soir ?"], "Quedar": ["Quedan dos minutos para el final.", "Il reste deux minutes avant la fin."], "aún": ["Aún no he terminado.", "Je n'ai pas encore fini."], "adherir": ["Esta pegatina no se adhiere bien.", "Cet autocollant ne colle pas bien."], "enamorar": ["Su sonrisa me enamoró.", "Son sourire m'a fait tomber amoureux."], "vecindario": ["El vecindario es muy tranquilo.", "Le quartier est très calme."], "pesar": ["¿Cuánto pesa esta maleta?", "Combien pèse cette valise ?"], "Mano": ["Dame la mano para cruzar.", "Donne-moi la main pour traverser."], "Camino": ["Este camino lleva al pueblo.", "Ce chemin mène au village."], "Crecer": ["Los niños crecen muy rápido.", "Les enfants grandissent très vite."], "así": ["No me hables así.", "Ne me parle pas comme ça."], "especulaciones": ["Hay muchas especulaciones sobre su fichaje.", "Il y a beaucoup de spéculations sur son transfert."], "Cupo": ["Ya no quedan cupos para el curso.", "Il n'y a plus de places pour le cours."], "Rato": ["Espérame un rato, ahora vuelvo.", "Attends-moi un moment, je reviens."], "adueñarse de": ["El club se adueñó del balón.", "Le club s'est emparé du ballon."], "ladrón ladrona": ["La policía atrapó al ladrón.", "La police a attrapé le voleur."], "Faltar": ["Me falta dinero para el viaje.", "Il me manque de l'argent pour le voyage."], "rebote": ["Marcó de rebote.", "Il a marqué sur un rebond."], "Vaso": ["¿Me das un vaso de agua?", "Tu me donnes un verre d'eau ?"], "luego de": ["Luego de cenar, salimos a pasear.", "Après le dîner, on est sortis se promener."], "Animar": ["Mis amigos me animaron a seguir.", "Mes amis m'ont encouragé à continuer."], "avecinar": ["Se avecina una tormenta.", "Un orage approche."], "Pesado": ["Esta caja es muy pesada.", "Cette boîte est très lourde."], "caminar": ["Me gusta caminar por la playa.", "J'aime marcher sur la plage."], "Ya": ["Ya lo sé.", "Je sais déjà."], "Cierto": ["Es cierto lo que dices.", "Ce que tu dis est vrai."], "amañado": ["Dicen que el partido estaba amañado.", "On dit que le match était truqué."], "anfitrión anfitriona": ["El anfitrión nos recibió con una sonrisa.", "L'hôte nous a accueillis avec un sourire."], "Respeto": ["Hay que tener respeto por los mayores.", "Il faut avoir du respect pour les aînés."], "Alrededor": ["Nos sentamos alrededor de la mesa.", "On s'est assis autour de la table."], "Hielo": ["Ponle hielo a la bebida.", "Mets de la glace dans la boisson."], "enfadado": ["Está enfadado conmigo.", "Il est fâché contre moi."], "Tras": ["Tras la reunión, me fui a casa.", "Après la réunion, je suis rentré."], "De acuerdo": ["De acuerdo, nos vemos mañana.", "D'accord, on se voit demain."], "Joven": ["Es muy joven para ese puesto.", "Il est très jeune pour ce poste."], "esos": ["Esos zapatos son míos.", "Ces chaussures-là sont à moi."], "Caliente": ["Cuidado, la sopa está caliente.", "Attention, la soupe est chaude."], "Logro": ["Ganar la liga fue un gran logro.", "Gagner le championnat a été une belle réussite."], "Ambicioso": ["Es un plan muy ambicioso.", "C'est un plan très ambitieux."], "Disfrutar": ["Disfruta del fin de semana.", "Profite du week-end."], "Poner": ["¿Dónde pongo las llaves?", "Où est-ce que je pose les clés ?"], "Helado": ["Me apetece un helado de chocolate.", "J'ai envie d'une glace au chocolat."], "engañar": ["No me engañes.", "Ne me mens pas."], "Obra": ["Hay una obra enfrente de mi casa.", "Il y a un chantier en face de chez moi."], "Aunque": ["Aunque llueva, iremos.", "Même s'il pleut, on ira."], "Clave": ["La clave es la constancia.", "La clé, c'est la régularité."], "Decir": ["¿Qué has dicho?", "Qu'est-ce que tu as dit ?"], "guardados": ["Tengo los documentos guardados en el ordenador.", "J'ai les documents gardés sur l'ordinateur."], "Pues": ["Me voy, pues ya es tarde.", "Je m'en vais, car il est déjà tard."], "subir": ["Sube al tercer piso.", "Monte au troisième étage."], "Lente": ["Llevo lentes de contacto.", "Je porte des lentilles de contact."], "agradecer": ["Te agradezco mucho tu ayuda.", "Je te remercie beaucoup pour ton aide."], "Rol": ["Su rol en el equipo es clave.", "Son rôle dans l'équipe est essentiel."], "adivinar": ["Adivina quién ha venido.", "Devine qui est venu."], "harto": ["Estoy harto de esperar.", "J'en ai marre d'attendre."], "Adelanto": ["El adelanto de la película es buenísimo.", "La bande-annonce du film est géniale."], "Luchar": ["Hay que luchar por lo que quieres.", "Il faut se battre pour ce que tu veux."], "adentrarse en": ["Se adentraron en el bosque.", "Ils se sont enfoncés dans la forêt."], "Apoyar": ["Siempre me apoya en todo.", "Il me soutient toujours en tout."], "Certificado": ["Es un profesional certificado.", "C'est un professionnel certifié."], "aquel aquella": ["¿Ves aquel edificio?", "Tu vois ce bâtiment là-bas ?"], "Parecido": ["Tu móvil es parecido al mío.", "Ton portable ressemble au mien."], "cita": ["Tengo una cita con el médico.", "J'ai rendez-vous chez le médecin."], "Jaque": ["¡Jaque mate!", "Échec et mat !"], "Guapo": ["Tu hermano es muy guapo.", "Ton frère est très beau."], "Tierra": ["La Tierra gira alrededor del Sol.", "La Terre tourne autour du Soleil."], "demasiado": ["Hay demasiada gente aquí.", "Il y a trop de monde ici."], "Checar": ["Checa si llegó el correo.", "Vérifie si le mail est arrivé."], "movimiento": ["Ese movimiento fue genial.", "Ce mouvement était génial."], "cancha": ["Los jugadores salen a la cancha.", "Les joueurs entrent sur le terrain."], "Oscuro": ["La habitación está muy oscura.", "La chambre est très sombre."], "desprestigiar": ["Intentan desprestigiar al entrenador.", "Ils essaient de discréditer l'entraîneur."], "equivocarse": ["Perdona, me he equivocado.", "Pardon, je me suis trompé."], "Robar": ["Me robaron la cartera en el metro.", "On m'a volé mon portefeuille dans le métro."], "Pelota": ["Pásame la pelota.", "Passe-moi la balle."], "sonar": ["Está sonando tu móvil.", "Ton portable sonne."], "confundir con": ["Siempre me confunden con mi primo.", "On me confond toujours avec mon cousin."], "Jabón": ["Lávate las manos con jabón.", "Lave-toi les mains avec du savon."], "dentro": ["Las llaves están dentro del cajón.", "Les clés sont à l'intérieur du tiroir."], "veraniego": ["Me encanta el ambiente veraniego.", "J'adore l'ambiance estivale."], "A pesar de que": ["A pesar de que estaba cansado, fue a entrenar.", "Bien qu'il soit fatigué, il est allé s'entraîner."], "Propio": ["Quiero tener mi propio piso.", "Je veux avoir mon propre appartement."], "Empezar": ["¿A qué hora empieza la película?", "À quelle heure commence le film ?"], "altibajos": ["Toda relación tiene sus altibajos.", "Toute relation a ses hauts et ses bas."], "Pelear": ["Mis hermanos siempre se pelean.", "Mes frères se disputent toujours."], "Tarea": ["Tengo mucha tarea hoy.", "J'ai beaucoup de devoirs aujourd'hui."], "Pudrir": ["La fruta se pudrió en la nevera.", "Le fruit a pourri dans le frigo."], "Charlar": ["Nos quedamos charlando hasta tarde.", "On est restés à discuter jusque tard."], "lado": ["Ponte a mi lado.", "Mets-toi à côté de moi."], "más allá": ["Hay que ir más allá.", "Il faut aller plus loin."], "Deber": ["Debes descansar más.", "Tu dois te reposer davantage."], "Pasado": ["Olvida el pasado.", "Oublie le passé."], "Seno": ["La campaña habla del cáncer de seno.", "La campagne parle du cancer du sein."], "girarse": ["Se giró al oír su nombre.", "Il s'est retourné en entendant son nom."], "agacharse": ["Agáchate, que no veo.", "Baisse-toi, je ne vois rien."], "agachado": ["Estaba agachado buscando la moneda.", "Il était accroupi à chercher la pièce."], "coger": ["Coge el autobús de las ocho.", "Prends le bus de huit heures."], "sepas": ["No quiero que lo sepas por otros.", "Je ne veux pas que tu l'apprennes par d'autres."], "robándote": ["¡Están robándote la cartera!", "On est en train de te voler ton portefeuille !"], "cogiéndote": ["Está cogiéndote el sitio.", "Il est en train de te prendre ta place."], "acordarse": ["No me acuerdo de su nombre.", "Je ne me souviens pas de son nom."], "alejamiento": ["El alejamiento de su familia le afectó.", "L'éloignement de sa famille l'a affecté."], "allí": ["Allí está mi casa.", "Ma maison est là-bas."], "aparcar": ["No encuentro dónde aparcar.", "Je ne trouve pas où me garer."], "arriba": ["Mi habitación está arriba.", "Ma chambre est en haut."], "bajar": ["Baja el volumen, por favor.", "Baisse le volume, s'il te plaît."], "cara": ["Tiene la cara roja.", "Il a le visage tout rouge."], "chaval": ["Ese chaval juega muy bien.", "Ce gamin joue très bien."], "claro que": ["Claro que te ayudo.", "Bien sûr que je t'aide."], "cogidos": ["Los ladrones fueron cogidos esa noche.", "Les voleurs ont été attrapés cette nuit-là."], "ha cogido": ["Ha cogido mi paraguas.", "Il a pris mon parapluie."], "he bajado": ["He bajado a comprar pan.", "Je suis descendu acheter du pain."], "ido corriendo": ["Se ha ido corriendo al tren.", "Il est parti en courant vers le train."], "los he seguido": ["Los he seguido hasta la estación.", "Je les ai suivis jusqu'à la gare."], "meter": ["Mete la ropa en la maleta.", "Mets les vêtements dans la valise."], "no me podía bajar": ["No me podía bajar del autobús.", "Je ne pouvais pas descendre du bus."], "olvidarse": ["Me olvidé de llamarte.", "J'ai oublié de t'appeler."], "pillar": ["Me pillaron copiando en el examen.", "On m'a surpris en train de tricher à l'examen."], "pillado": ["Ha sido pillado mintiendo.", "Il a été pris en flagrant délit de mensonge."], "rogar": ["Te ruego que me escuches.", "Je te supplie de m'écouter."], "sacar": ["Saca la basura, por favor.", "Sors la poubelle, s'il te plaît."], "se me había olvidado": ["Se me había olvidado por completo.", "J'avais complètement oublié."], "seguir": ["Sigue recto hasta el semáforo.", "Continue tout droit jusqu'au feu."], "súbete": ["¡Súbete al coche!", "Monte dans la voiture !"], "vaya": ["Fue un desastre, vaya.", "C'était un désastre, quoi."], "ventanilla": ["Paga en la ventanilla de enfrente.", "Paie au guichet d'en face."], "esperar": ["Espero que te guste.", "J'espère que ça te plaît."], "tanto": ["Te quiero tanto.", "Je t'aime tellement."], "nuevo": ["Me he comprado un móvil nuevo.", "Je me suis acheté un nouveau portable."], "parte": ["Ya salió la segunda parte.", "La deuxième partie est déjà sortie."], "serie": ["Estoy enganchado a esta serie.", "Je suis accro à cette série."], "hasta": ["Trabajo hasta las seis.", "Je travaille jusqu'à six heures."], "no sé": ["No sé qué hacer.", "Je ne sais pas quoi faire."], "qué": ["¿Qué quieres?", "Qu'est-ce que tu veux ?"], "cuántos": ["¿Cuántos años tienes?", "Quel âge as-tu ?"], "amarilla": ["Le sacaron tarjeta amarilla.", "Il a pris un carton jaune."], "lluvia": ["No salgas con esta lluvia.", "Ne sors pas avec cette pluie."], "mantenerse": ["Intento mantenerme en forma.", "J'essaie de rester en forme."], "mantener": ["Hay que mantener la calma.", "Il faut garder son calme."], "industria": ["Trabaja en la industria del cine.", "Il travaille dans l'industrie du cinéma."], "cine": ["Vamos al cine esta noche.", "On va au cinéma ce soir."], "viva": ["La planta sigue viva.", "La plante est toujours en vie."], "para ti": ["Este regalo es para ti.", "Ce cadeau est pour toi."], "siguiendo": ["Estoy siguiendo tu consejo.", "Je suis en train de suivre ton conseil."], "tienda": ["La tienda cierra a las nueve.", "Le magasin ferme à neuf heures."], "inicio": ["Vuelve a la página de inicio.", "Retourne à la page d'accueil."], "amigos": ["Salgo con mis amigos el sábado.", "Je sors avec mes amis samedi."], "mensajes": ["Tengo muchos mensajes sin leer.", "J'ai plein de messages non lus."], "perfil": ["Cambia tu foto de perfil.", "Change ta photo de profil."], "y punto": ["No vas a salir, y punto.", "Tu ne sors pas, point final."], "escudo": ["El escudo del club es precioso.", "L'écusson du club est magnifique."], "pirarse": ["Me piro, que es tarde.", "Je me tire, il est tard."], "sudar": ["Sudo mucho cuando corro.", "Je transpire beaucoup quand je cours."], "me suda": ["Lo que piensen, me suda.", "Ce qu'ils pensent, je m'en fiche."], "montar": ["Montaron una fiesta increíble.", "Ils ont organisé une fête incroyable."], "tocar": ["Te toca a ti.", "C'est ton tour."], "levantarse": ["Me levanto a las siete.", "Je me lève à sept heures."], "moverse": ["No te muevas, que te hago una foto.", "Ne bouge pas, je te prends en photo."], "poco": ["Habla un poco más despacio.", "Parle un peu plus lentement."], "durante": ["Dormí durante todo el viaje.", "J'ai dormi pendant tout le voyage."], "minuto": ["Dame un minuto.", "Donne-moi une minute."], "ahora": ["Ahora no puedo, luego te llamo.", "Je ne peux pas maintenant, je t'appelle plus tard."], "cerrar": ["Cierra la puerta, por favor.", "Ferme la porte, s'il te plaît."], "borrar": ["He borrado la foto sin querer.", "J'ai supprimé la photo sans faire exprès."], "memoria": ["Tengo muy mala memoria.", "J'ai une très mauvaise mémoire."], "eso": ["Eso no es verdad.", "Ça, ce n'est pas vrai."], "significar": ["¿Qué significa esta palabra?", "Que signifie ce mot ?"], "volver a": ["Vuelve a intentarlo.", "Réessaie."], "primera vez": ["Es la primera vez que vengo.", "C'est la première fois que je viens."], "vez": ["Te lo he dicho mil veces.", "Je te l'ai dit mille fois."], "aburrido": ["Estoy aburrido, no hay nada que hacer.", "Je m'ennuie, il n'y a rien à faire."], "mezclarse": ["Le cuesta mezclarse con gente nueva.", "Il a du mal à se mêler aux nouveaux."], "socializar": ["Necesito socializar un poco más.", "J'ai besoin de sortir un peu plus."], "además": ["Es barato y, además, está cerca.", "C'est pas cher et, en plus, c'est tout près."], "por cierto": ["Por cierto, ¿has visto a Ana?", "Au fait, tu as vu Ana ?"], "a propósito": ["A propósito, mañana no vengo.", "À propos, demain je ne viens pas."], "temporada": ["La nueva temporada sale en marzo.", "La nouvelle saison sort en mars."], "estación": ["Mi estación favorita es el otoño.", "Ma saison préférée, c'est l'automne."], "parecer": ["Pareces cansado.", "Tu as l'air fatigué."], "me parece bien": ["¿Quedamos a las ocho? Me parece bien.", "On se retrouve à huit heures ? Ça me va."], "al parecer": ["Al parecer, ha dimitido.", "Apparemment, il a démissionné."], "desarrollo": ["Trabaja en desarrollo de software.", "Il travaille dans le développement logiciel."], "desarrollar": ["Quiero desarrollar mis habilidades.", "Je veux développer mes compétences."], "acojonar": ["Esa película me acojonó.", "Ce film m'a foutu les jetons."], "sinceramente": ["Sinceramente, no me gustó.", "Honnêtement, ça ne m'a pas plu."], "comunidad": ["La comunidad latina es enorme aquí.", "La communauté latino est énorme ici."], "compartir": ["Comparte el vídeo con tus amigos.", "Partage la vidéo avec tes amis."], "seguidores": ["Ya tiene un millón de seguidores.", "Il a déjà un million d'abonnés."], "búsqueda": ["La búsqueda de trabajo es agotadora.", "La recherche d'emploi est épuisante."], "acoger": ["Nos acogieron como a familia.", "Ils nous ont accueillis comme de la famille."], "un montón": ["Tengo un montón de trabajo.", "J'ai plein de boulot."], "según": ["Según el médico, no es grave.", "D'après le médecin, ce n'est pas grave."], "avisar": ["Avísame cuando llegues.", "Préviens-moi quand tu arrives."], "cruzar": ["Cruza la calle con cuidado.", "Traverse la rue prudemment."], "cruzarse": ["Me crucé con tu ex en el metro.", "J'ai croisé ton ex dans le métro."], "el cruce": ["Gira a la derecha en el cruce.", "Tourne à droite au carrefour."], "asustar": ["¡Me has asustado!", "Tu m'as fait peur !"], "asustarse": ["No te asustes, soy yo.", "N'aie pas peur, c'est moi."], "plantilla": ["El club tiene una plantilla muy joven.", "Le club a un effectif très jeune."], "en general": ["En general, estoy contento.", "Dans l'ensemble, je suis content."], "repaso": ["Hagamos un repaso antes del examen.", "Faisons une révision avant l'examen."], "repasar": ["Tengo que repasar los apuntes.", "Je dois relire mes notes."], "delantero": ["El delantero marcó dos goles.", "L'attaquant a marqué deux buts."], "secar": ["Seca los platos, por favor.", "Essuie la vaisselle, s'il te plaît."], "tirar": ["No tires papeles al suelo.", "Ne jette pas de papiers par terre."], "enterarse": ["Me acabo de enterar de la noticia.", "Je viens d'apprendre la nouvelle."], "de repente": ["De repente, se fue la luz.", "Tout à coup, le courant a sauté."], "ganas": ["No tengo ganas de nada.", "Je n'ai envie de rien."], "tener ganas de": ["Tengo ganas de verte.", "J'ai envie de te voir."], "da igual": ["Da igual, no pasa nada.", "Peu importe, ce n'est rien."], "dar igual": ["Me da igual lo que digan.", "Ce qu'ils disent m'est égal."], "trozo": ["¿Quieres un trozo de pizza?", "Tu veux un morceau de pizza ?"], "papel": ["Le dieron el papel principal.", "On lui a donné le rôle principal."], "joder": ["¡Joder, qué frío hace!", "Putain, qu'est-ce qu'il fait froid !"], "puesto": ["Consiguió un buen puesto en la empresa.", "Il a obtenu un bon poste dans l'entreprise."], "cuerno": ["Le pusieron los cuernos.", "Il s'est fait tromper."], "haber": ["Debe de haber un error.", "Il doit y avoir une erreur."], "hay": ["Hay mucha gente en la playa.", "Il y a beaucoup de monde à la plage."], "ha habido": ["Ha habido un accidente en la autopista.", "Il y a eu un accident sur l'autoroute."], "madurar": ["Ha madurado mucho este año.", "Il a beaucoup mûri cette année."], "maduro": ["Este plátano no está maduro.", "Cette banane n'est pas mûre."], "madurez": ["Demuestra mucha madurez para su edad.", "Il fait preuve de beaucoup de maturité pour son âge."], "picar": ["Me ha picado un mosquito.", "Un moustique m'a piqué."], "picarse": ["No te piques, era broma.", "Ne te vexe pas, c'était une blague."], "picante": ["Esta salsa es muy picante.", "Cette sauce est très épicée."], "meterse": ["No te metas en mis asuntos.", "Ne te mêle pas de mes affaires."], "meterse con": ["Deja de meterte con tu hermano.", "Arrête de t'en prendre à ton frère."], "meter la pata": ["Metí la pata en la reunión.", "J'ai fait une gaffe en réunion."], "lobo": ["Se oyen lobos en la montaña.", "On entend des loups dans la montagne."], "loba": ["La loba protege a sus crías.", "La louve protège ses petits."], "boca": ["No hables con la boca llena.", "Ne parle pas la bouche pleine."], "boca del lobo": ["Fue directo a la boca del lobo.", "Il s'est jeté dans la gueule du loup."], "bromear": ["No te enfades, solo estaba bromeando.", "Ne te fâche pas, je plaisantais."], "broma": ["Le gastamos una broma a Pablo.", "On a fait une blague à Pablo."], "es broma": ["Tranquilo, ¡es broma!", "Tranquille, je rigole !"], "llegar": ["Llegamos tarde por el tráfico.", "On est arrivés en retard à cause des bouchons."], "al día de hoy": ["Al día de hoy, no hay respuesta.", "À ce jour, il n'y a pas de réponse."], "hoy": ["Hoy hace mucho calor.", "Il fait très chaud aujourd'hui."], "hoy en día": ["Hoy en día todo el mundo tiene móvil.", "De nos jours, tout le monde a un portable."], "comerse": ["Se comió el bocadillo entero.", "Il s'est enfilé le sandwich en entier."], "pedazo": ["¡Qué pedazo de gol!", "Quel but de malade !"], "moda": ["Esa chaqueta está de moda.", "Cette veste est à la mode."], "seguir modas": ["No me gusta seguir modas.", "Je n'aime pas suivre les tendances."], "estar de moda": ["Los vaqueros anchos están de moda otra vez.", "Les jeans larges sont de nouveau à la mode."], "pasado de moda": ["Ese peinado está pasado de moda.", "Cette coiffure est démodée."], "desplegar": ["Desplegaron el mapa sobre la mesa.", "Ils ont déplié la carte sur la table."], "despliegue": ["Hubo un gran despliegue policial.", "Il y a eu un important déploiement policier."], "plegar": ["Pliega bien la ropa.", "Plie bien les vêtements."], "traer": ["¿Me traes un café?", "Tu m'apportes un café ?"], "traído": ["Te he traído un regalo.", "Je t'ai apporté un cadeau."], "traer suerte": ["Dicen que esta pulsera trae suerte.", "On dit que ce bracelet porte chance."], "golpe": ["Se dio un golpe en la cabeza.", "Il s'est cogné la tête."], "golpear": ["Alguien está golpeando la puerta.", "Quelqu'un frappe à la porte."], "de golpe": ["Cerró la puerta de golpe.", "Il a claqué la porte d'un coup."], "golpe de suerte": ["Ganar fue un golpe de suerte.", "Gagner a été un coup de chance."], "ningún": ["No tengo ningún problema.", "Je n'ai aucun problème."], "ninguno": ["¿Libros? No tengo ninguno.", "Des livres ? Je n'en ai aucun."], "ninguna": ["No hay ninguna duda.", "Il n'y a aucun doute."], "de ninguna manera": ["De ninguna manera voy a pagar eso.", "Je ne vais en aucun cas payer ça."], "en ningún momento": ["En ningún momento dije eso.", "À aucun moment je n'ai dit ça."], "cualquier": ["Llámame a cualquier hora.", "Appelle-moi à n'importe quelle heure."], "cualquiera": ["Eso lo hace cualquiera.", "Ça, n'importe qui peut le faire."], "en cualquier momento": ["Puede llegar en cualquier momento.", "Il peut arriver à tout moment."], "cualquier cosa": ["Haría cualquier cosa por ti.", "Je ferais n'importe quoi pour toi."], "casi": ["Casi me caigo.", "J'ai failli tomber."], "agarrar": ["Agarra bien la cuerda.", "Tiens bien la corde."], "agarrarse": ["Agárrate, que vienen curvas.", "Accroche-toi, ça va secouer."], "trompada": ["Le dio una trompada en la cara.", "Il lui a mis un coup de poing dans la figure."], "a trompadas": ["Terminaron a trompadas.", "Ils ont fini par en venir aux poings."], "simio": ["El simio usa herramientas.", "Le singe utilise des outils."], "matar": ["Me vas a matar del susto.", "Tu vas me faire mourir de peur."], "ganar": ["¿Quién ganó el partido?", "Qui a gagné le match ?"], "fruto": ["Este éxito es fruto de mucho trabajo.", "Ce succès est le fruit de beaucoup de travail."], "fruta": ["Come más fruta.", "Mange plus de fruits."], "dar fruto": ["Su esfuerzo por fin dio fruto.", "Ses efforts ont enfin porté leurs fruits."], "empate": ["El partido acabó en empate.", "Le match s'est terminé sur un nul."], "empatar": ["Empataron en el último minuto.", "Ils ont égalisé à la dernière minute."], "disparar": ["Disparó desde fuera del área.", "Il a tiré de l'extérieur de la surface."], "disparo": ["Fue un disparo increíble.", "C'était un tir incroyable."], "dispararse": ["Los precios se dispararon.", "Les prix se sont envolés."], "sano": ["Llevo una vida sana.", "Je mène une vie saine."], "roble": ["Hay un roble enorme en el parque.", "Il y a un chêne énorme dans le parc."], "sano como un roble": ["Mi abuelo está sano como un roble.", "Mon grand-père est en pleine forme."], "sano y salvo": ["Volvieron sanos y salvos.", "Ils sont revenus sains et saufs."], "cuidado": ["¡Cuidado con el escalón!", "Attention à la marche !"], "cuidar": ["Cuida a tu hermano.", "Prends soin de ton frère."], "cuidarse": ["Tienes que cuidarte más.", "Tu dois prendre davantage soin de toi."], "cuídate": ["Cuídate mucho.", "Prends bien soin de toi."], "descuidar": ["Ha descuidado sus estudios.", "Il a négligé ses études."], "descuido": ["Fue un descuido mío.", "C'était une étourderie de ma part."], "descuida": ["Descuida, yo me encargo.", "T'inquiète, je m'en occupe."], "habría": ["Yo habría hecho lo mismo.", "J'aurais fait pareil."], "hayamos": ["Ojalá hayamos aprobado.", "Pourvu qu'on ait réussi."], "promedio": ["El promedio de edad es de treinta años.", "La moyenne d'âge est de trente ans."], "en promedio": ["En promedio, duermo seis horas.", "En moyenne, je dors six heures."], "esposa": ["Su esposa es médica.", "Sa femme est médecin."], "esposo": ["Su esposo trabaja en un banco.", "Son mari travaille dans une banque."], "turbante": ["Llevaba un turbante blanco.", "Il portait un turban blanc."], "sin": ["Un café sin azúcar, por favor.", "Un café sans sucre, s'il te plaît."], "si": ["Si quieres, vamos juntos.", "Si tu veux, on y va ensemble."], "cabeza": ["Me duele la cabeza.", "J'ai mal à la tête."], "dolor de cabeza": ["Tengo un dolor de cabeza terrible.", "J'ai un mal de tête terrible."], "ver": ["¿Has visto el partido?", "Tu as vu le match ?"], "lograr": ["Por fin logré dormir.", "J'ai enfin réussi à dormir."], "castigar": ["Lo castigaron sin móvil.", "On l'a puni en le privant de portable."], "castigo": ["El castigo fue muy duro.", "La punition a été très dure."], "castigado": ["Estoy castigado este fin de semana.", "Je suis puni ce week-end."], "querer": ["¿Quieres venir conmigo?", "Tu veux venir avec moi ?"], "quiso": ["Quiso ayudarme, pero no pudo.", "Il a voulu m'aider, mais il n'a pas pu."], "te quiero": ["Te quiero mucho, mamá.", "Je t'aime fort, maman."], "sin querer": ["Lo rompí sin querer.", "Je l'ai cassé sans faire exprès."], "ponerse": ["Se puso muy nervioso.", "Il est devenu très nerveux."], "firme": ["Mantén el brazo firme.", "Garde le bras bien droit."], "ponerse firme": ["¡Pónganse firmes!", "Garde-à-vous !"], "patria": ["Lo dio todo por su patria.", "Il a tout donné pour sa patrie."], "fue": ["Fue un día increíble.", "Ce fut une journée incroyable."], "me voy a la cama": ["Estoy muerto, me voy a la cama.", "Je suis crevé, je vais me coucher."], "irse": ["Me voy, que llego tarde.", "Je m'en vais, je vais être en retard."], "cama": ["Haz la cama antes de salir.", "Fais ton lit avant de sortir."], "acostarse": ["Me acuesto muy tarde entre semana.", "Je me couche très tard en semaine."], "dormirse": ["Me dormí viendo la película.", "Je me suis endormi devant le film."], "hacer la pelota": ["Deja de hacerle la pelota al jefe.", "Arrête de lécher les bottes du patron."], "pelota (persona)": ["Es un pelota, siempre le da la razón.", "C'est un lèche-bottes, il lui donne toujours raison."], "vergüenza": ["Me muero de vergüenza.", "Je meurs de honte."], "vergüencita": ["Me dio un poco de vergüencita pedirlo.", "Ça m'a un peu gêné de le demander."], "qué vergüenza": ["¡Qué vergüenza, se me cayó la bandeja!", "Quelle honte, j'ai fait tomber le plateau !"], "me da vergüenza": ["Me da vergüenza bailar en público.", "J'ai honte de danser en public."], "vergüenza ajena": ["Ese vídeo me dio vergüenza ajena.", "Cette vidéo m'a mis mal à l'aise pour lui."], "flipar": ["Flipé con el final de la serie.", "J'ai halluciné avec la fin de la série."], "flipante": ["El concierto fue flipante.", "Le concert était dingue."], "me flipa": ["Me flipa esta canción.", "Je kiffe cette chanson."], "jefe": ["Mi jefe me dio el día libre.", "Mon patron m'a donné ma journée."], "jefa": ["La jefa quiere hablar contigo.", "La cheffe veut te parler."], "cansado": ["Estoy muy cansado hoy.", "Je suis très fatigué aujourd'hui."], "cansar": ["Este trabajo me cansa mucho.", "Ce boulot me fatigue beaucoup."], "cansarse de": ["Me he cansado de esperar.", "J'en ai eu marre d'attendre."], "cansancio": ["El cansancio se nota en su cara.", "La fatigue se voit sur son visage."], "descojonarse": ["Nos descojonamos con sus chistes.", "On s'est pétés de rire avec ses blagues."], "cojonudo": ["El plan es cojonudo.", "Le plan est génial."], "partirse": ["Me partí de risa con el vídeo.", "J'ai explosé de rire devant la vidéo."], "ola": ["Hoy hay olas enormes.", "Il y a des vagues énormes aujourd'hui."], "ola de calor": ["Se avecina una ola de calor.", "Une vague de chaleur arrive."], "arruga": ["Tiene arrugas alrededor de los ojos.", "Il a des rides autour des yeux."], "arrugar": ["No arrugues la camisa.", "Ne froisse pas la chemise."], "arrugarse": ["No se arruga ante nadie.", "Il ne se dégonfle devant personne."], "no solo": ["No solo es guapo, sino también listo.", "Il n'est pas seulement beau, il est aussi intelligent."], "a lo mejor": ["A lo mejor vengo mañana.", "Je viendrai peut-être demain."], "preguntar": ["Pregúntale a qué hora sale.", "Demande-lui à quelle heure il sort."], "periodista": ["Mi prima es periodista deportiva.", "Ma cousine est journaliste sportive."], "sino": ["No es mi hermano, sino mi primo.", "Ce n'est pas mon frère, mais mon cousin."], "sino que": ["No lo perdió, sino que se lo robaron.", "Il ne l'a pas perdu, on le lui a volé."], "no solo... sino también": ["Habla no solo inglés, sino también chino.", "Il parle non seulement anglais, mais aussi chinois."], "lamentar": ["Lamento no haber venido.", "Je regrette de ne pas être venu."], "lo lamento": ["Lo lamento mucho.", "J'en suis vraiment désolé."], "lamentable": ["Su actitud fue lamentable.", "Son attitude a été lamentable."], "chica": ["Chica, ¡no te lo vas a creer!", "Ma belle, tu ne vas pas le croire !"], "laísmo": ["Decir « la dije » es un caso de laísmo.", "Dire « la dije » est un cas de laísmo."], "señora": ["Perdone, señora, ¿tiene hora?", "Pardon, madame, vous avez l'heure ?"], "pegar": ["Pega el póster en la pared.", "Colle le poster au mur."], "pegar fuerte": ["Esa canción está pegando fuerte.", "Cette chanson cartonne."], "venir": ["¿Vas a venir a la fiesta?", "Tu vas venir à la fête ?"], "vienes": ["¿Vienes conmigo?", "Tu viens avec moi ?"], "vengo": ["Vengo de la oficina.", "Je viens du bureau."], "ni siquiera": ["Ni siquiera me saludó.", "Il ne m'a même pas dit bonjour."], "conocer": ["Quiero conocer México.", "Je veux découvrir le Mexique."], "encantado de conocerte": ["Encantado de conocerte, Marta.", "Enchanté de te connaître, Marta."], "despertar": ["No me despiertes antes de las nueve.", "Ne me réveille pas avant neuf heures."], "despertarse": ["Me despierto a las seis.", "Je me réveille à six heures."], "despertador": ["No sonó el despertador.", "Le réveil n'a pas sonné."], "hace nada": ["Se fue hace nada.", "Il est parti il y a deux secondes."], "hace poco": ["Hace poco me mudé.", "J'ai déménagé récemment."], "hace un rato": ["Te llamé hace un rato.", "Je t'ai appelé il y a un moment."], "sortear": ["Sorteó al defensa y marcó.", "Il a dribblé le défenseur et a marqué."], "sorteo": ["Gané una tablet en un sorteo.", "J'ai gagné une tablette à un tirage au sort."], "sacarle X a alguien": ["Mi hermano me saca tres años.", "Mon frère a trois ans de plus que moi."], "salir con": ["Sale con una chica de Madrid.", "Il sort avec une fille de Madrid."], "hermano": ["Mi hermano vive en Londres.", "Mon frère vit à Londres."], "hermana": ["Mi hermana estudia medicina.", "Ma sœur étudie la médecine."], "película": ["¿Vemos una película esta noche?", "On regarde un film ce soir ?"], "salir": ["Salgo de trabajar a las seis.", "Je sors du travail à six heures."], "salió": ["Salió sin decir nada.", "Il est sorti sans rien dire."], "crítica": ["La película recibió buenas críticas.", "Le film a reçu de bonnes critiques."], "buenísimo": ["La paella estaba buenísima.", "La paella était excellente."], "todo el mundo": ["Todo el mundo lo sabe.", "Tout le monde le sait."], "mejor": ["Es el mejor jugador del equipo.", "C'est le meilleur joueur de l'équipe."], "desde que": ["Desde que se mudó, no lo veo.", "Depuis qu'il a déménagé, je ne le vois plus."], "entrar": ["No puedes entrar sin entrada.", "Tu ne peux pas entrer sans billet."], "entró": ["Entró en la sala sin llamar.", "Il est entré dans la salle sans frapper."], "sorprendido": ["Me quedé sorprendido con la noticia.", "La nouvelle m'a surpris."], "aliviado": ["Me siento aliviado después del examen.", "Je me sens soulagé après l'examen."], "a la vez": ["No puedo hacer dos cosas a la vez.", "Je ne peux pas faire deux choses à la fois."], "sobre todo": ["Me gusta el deporte, sobre todo el fútbol.", "J'aime le sport, surtout le foot."], "estuvimos hablando": ["Estuvimos hablando toda la noche.", "On a parlé toute la nuit."], "convencido": ["Estoy convencido de que tiene razón.", "Je suis convaincu qu'il a raison."], "iba a ser": ["Sabíamos que iba a ser difícil.", "On savait que ça allait être difficile."], "fracaso": ["El proyecto fue un fracaso total.", "Le projet a été un échec total."], "por fin": ["¡Por fin es viernes!", "Enfin vendredi !"], "verdadero": ["Es un verdadero amigo.", "C'est un vrai ami."], "otra vez": ["Otra vez llegas tarde.", "Tu arrives encore en retard."], "balancearse": ["El niño se balancea en el columpio.", "L'enfant se balance sur la balançoire."], "literalmente": ["Literalmente me quedé sin palabras.", "Je suis littéralement resté sans voix."], "gracioso": ["Tu amigo es muy gracioso.", "Ton ami est très drôle."], "recuerdo": ["Recuerdo mi primer día de cole.", "Je me souviens de mon premier jour d'école."], "recordar": ["Recuérdame comprar pan.", "Rappelle-moi d'acheter du pain."], "hace como": ["Llegó hace como diez minutos.", "Il est arrivé il y a environ dix minutes."], "de hecho": ["De hecho, ya lo sabía.", "En fait, je le savais déjà."], "predecir": ["Nadie puede predecir el futuro.", "Personne ne peut prédire l'avenir."], "predijo": ["Predijo el resultado exacto.", "Il a prédit le score exact."], "tendríamos": ["Tendríamos que salir ya.", "On devrait partir maintenant."], "justo alrededor de": ["Llegaré justo alrededor de las ocho.", "J'arriverai vers huit heures pile."], "alrededor de": ["Vendrán alrededor de cien personas.", "Une centaine de personnes vont venir."], "parece que": ["Parece que va a llover.", "On dirait qu'il va pleuvoir."], "salga": ["Espero que salga bien.", "J'espère que ça se passera bien."], "bastante": ["El examen fue bastante fácil.", "L'examen était assez facile."], "bastar": ["Con eso basta.", "Ça suffit comme ça."], "basta": ["¡Basta ya!", "Ça suffit maintenant !"], "vuelta": ["Vamos a dar una vuelta.", "On va faire un tour."], "dar la vuelta": ["Dale la vuelta a la tortilla.", "Retourne l'omelette."], "de vuelta": ["Ya estoy de vuelta en casa.", "Je suis de retour à la maison."], "volver": ["¿Cuándo vuelves de vacaciones?", "Tu rentres de vacances quand ?"], "vuelto": ["Ha vuelto más fuerte que nunca.", "Il est revenu plus fort que jamais."], "descartar": ["No descartamos ninguna opción.", "On n'écarte aucune option."], "descartado": ["Esa idea está descartada.", "Cette idée est écartée."], "descarte": ["Lo hicimos por descarte.", "On l'a fait par élimination."], "será que": ["¿Será que no me ha oído?", "Est-ce qu'il ne m'aurait pas entendu ?"], "todavía": ["Todavía vivo con mis padres.", "Je vis encore chez mes parents."], "todavía no": ["Todavía no he comido.", "Je n'ai pas encore mangé."], "conseguir": ["Por fin conseguí el trabajo.", "J'ai enfin décroché le poste."], "no consigo": ["No consigo dormir.", "Je n'arrive pas à dormir."], "imaginar": ["Imagina un mundo sin guerras.", "Imagine un monde sans guerres."], "imaginarse": ["Me imagino que estará cansado.", "J'imagine qu'il doit être fatigué."], "niña": ["La niña juega en el parque.", "La petite fille joue au parc."], "niño": ["El niño no quiere comer.", "Le petit garçon ne veut pas manger."], "dar": ["Dame tu número.", "Donne-moi ton numéro."], "dando": ["Estaba dando una charla.", "Il était en train de donner une conférence."], "dándole": ["Sigue dándole vueltas al tema.", "Il n'arrête pas de ressasser le sujet."], "dar ganas de": ["Este olor me da ganas de comer.", "Cette odeur me donne envie de manger."], "dar miedo": ["Las arañas me dan miedo.", "Les araignées me font peur."], "dar pena": ["Me da pena verlo así.", "Ça me fait de la peine de le voir comme ça."], "dar un paseo": ["Vamos a dar un paseo por el río.", "On va faire une promenade au bord de la rivière."], "echar": ["Lo echaron del trabajo.", "Il s'est fait virer de son boulot."], "echar de casa": ["Sus padres lo echaron de casa.", "Ses parents l'ont mis à la porte."], "echar de menos": ["Te echo de menos.", "Tu me manques."], "echar una mano": ["¿Me echas una mano con la mudanza?", "Tu me donnes un coup de main pour le déménagement ?"], "echar una siesta": ["Voy a echar una siesta.", "Je vais faire une sieste."], "echar un vistazo": ["Échale un vistazo a mi currículum.", "Jette un œil à mon CV."], "echarse a llorar": ["Se echó a llorar al verlo.", "Il s'est mis à pleurer en le voyant."], "buitre": ["Ese agente es un buitre.", "Cet agent est un vautour."], "anciano": ["Ayudó a un anciano a cruzar.", "Il a aidé un vieil homme à traverser."], "anciana": ["La anciana vive sola.", "La vieille dame vit seule."], "personas mayores": ["Hay que respetar a las personas mayores.", "Il faut respecter les personnes âgées."], "los que": ["Los que llegan tarde no entran.", "Ceux qui arrivent en retard n'entrent pas."], "las que": ["Las que ganaron fueron ellas.", "Ce sont elles qui ont gagné."], "asistir": ["Mucha gente asistió al evento.", "Beaucoup de gens ont assisté à l'événement."], "asistir a": ["Mañana asisto a una conferencia.", "Demain j'assiste à une conférence."], "asistencia": ["La asistencia a clase es obligatoria.", "La présence en cours est obligatoire."], "asistente": ["Mi asistente organiza la agenda.", "Mon assistant organise l'agenda."], "dañino": ["El tabaco es dañino para la salud.", "Le tabac est nocif pour la santé."], "dañar": ["El sol puede dañar la piel.", "Le soleil peut abîmer la peau."], "daño": ["El daño ya está hecho.", "Le mal est fait."], "hacer daño": ["Esos zapatos me hacen daño.", "Ces chaussures me font mal."], "hacerse daño": ["Me hice daño en la rodilla.", "Je me suis fait mal au genou."], "daños colaterales": ["La guerra deja muchos daños colaterales.", "La guerre fait beaucoup de dommages collatéraux."], "maletero": ["Mete la maleta en el maletero.", "Mets la valise dans le coffre."], "maleta": ["Ya tengo la maleta lista.", "J'ai déjà ma valise prête."], "maletín": ["Llevaba un maletín de cuero.", "Il portait une mallette en cuir."], "hacer la maleta": ["Tengo que hacer la maleta esta noche.", "Je dois faire ma valise ce soir."], "capaz": ["Es capaz de todo.", "Il est capable de tout."], "capacidad": ["Tiene mucha capacidad de trabajo.", "Il a une grande capacité de travail."], "incapaz": ["Soy incapaz de mentirle.", "Je suis incapable de lui mentir."], "capacitar": ["La empresa capacita a sus empleados.", "L'entreprise forme ses employés."], "ser capaz de": ["No soy capaz de correr diez kilómetros.", "Je ne suis pas capable de courir dix kilomètres."], "fallido": ["Fue un intento fallido.", "Ce fut une tentative ratée."], "fallar": ["Falló el penalti en el último minuto.", "Il a raté le penalty à la dernière minute."], "fallo": ["Hubo un fallo en el sistema.", "Il y a eu une panne du système."], "fallecer": ["Su abuelo falleció el año pasado.", "Son grand-père est décédé l'an dernier."], "estado fallido": ["Lo describen como un estado fallido.", "On le décrit comme un État défaillant."], "fallo técnico": ["El retraso se debe a un fallo técnico.", "Le retard est dû à un problème technique."], "conozco": ["No conozco a nadie aquí.", "Je ne connais personne ici."]};
function exampleBlock(ex, fr) {
  return `<div style="margin-top:.6rem;font-size:.82rem;color:#7dd3fc;font-style:italic">🗣️ « ${ex} »</div>` + (fr ? `<div style="font-size:.74rem;opacity:.65;margin-top:.15rem">${fr}</div>` : '');
}
function cardExampleHTML(lang, card) {
  if(!card) return '';
  if(lang === 'en') return enExtrasHTML(card);
  if(lang === 'es') { const e = ES_EXAMPLES[card.es]; return e ? exampleBlock(e[0], e[1]) : ''; }
  if(lang === 'ln') return card.ex_ln ? exampleBlock(card.ex_ln, card.ex_fr) : '';
  return '';
}
function startENGame(game) {
  if(game==='flashcard') initENFlashcard();
  else if(game==='qcm') initENQCM();
  else if(game==='typing') initENTyping();
  else if(game==='survival') initENSurvival();
}

// ── EN FLASHCARD ──
function initENFlashcard() {
  enGameState = { cards: shuffle(ENGLISH), idx:0, correct:0, flipped:false };
  showScreen('screen-flashcard');
  document.querySelector('.flip-container').onclick = flipENCard;
  document.getElementById('fc-nav').querySelectorAll('button').forEach((b,i) => {
    b.onclick = i===0 ? ()=>fcENRate(false) : ()=>fcENRate(true);
  });
  renderENFlashcard();
}
function renderENFlashcard() {
  const card = enGameState.cards[enGameState.idx];
  document.getElementById('fc-lang-front').innerHTML = '🇬🇧 Anglais' + enLevelBadge(enLevelOf(card));
  document.getElementById('fc-lang-back').textContent = '🇫🇷 Français';
  document.getElementById('fc-es').textContent = card.en;
  document.getElementById('fc-fr').innerHTML = card.fr + enExtrasHTML(card);
  document.getElementById('fc-counter').textContent = `${enGameState.idx+1}/${enGameState.cards.length}`;
  setProgress('fc-progress', enGameState.idx, enGameState.cards.length);
  document.getElementById('flip-inner').classList.remove('flipped');
  document.getElementById('fc-nav').style.display='none';
  document.getElementById('fc-ai-area').innerHTML='';
  enGameState.flipped=false;
}
function flipENCard() {
  if(!enGameState.flipped) {
    document.getElementById('flip-inner').classList.add('flipped');
    document.getElementById('fc-nav').style.display='flex';
    enGameState.flipped=true;
  }
}
function fcENRate(knew) {
  const card = enGameState.cards[enGameState.idx];
  const enMastered = JSON.parse(localStorage.getItem('en_mastered')||'[]');
  const enXP = parseInt(localStorage.getItem('en_xp')||'0');
  if(knew) {
    enGameState.correct++;
    localStorage.setItem('en_xp', enXP+10);
    if(!enMastered.includes(card.en)) { enMastered.push(card.en); localStorage.setItem('en_mastered', JSON.stringify(enMastered)); }
    showToast('✅ +10 XP','correct-toast');
  } else { showToast('😅 À retravailler','wrong-toast'); }
  enGameState.idx++;
  if(enGameState.idx>=enGameState.cards.length) showENResults(enGameState.correct*10, enGameState.cards.length*10, []);
  else renderENFlashcard();
}

// ── EN QCM ──
function initENQCM() {
  enGameState = { cards:shuffle(ENGLISH), idx:0, score:0, streak:0, mistakes:[] };
  showScreen('screen-qcm');
  renderENQCM();
}
function renderENQCM() {
  const card = enGameState.cards[enGameState.idx];
  document.getElementById('qcm-word').textContent = card.en;
  document.getElementById('qcm-hint').textContent = '';
  setProgress('qcm-progress', enGameState.idx, enGameState.cards.length);
  const others = shuffle(ENGLISH.filter(w=>w.en!==card.en)).slice(0,3);
  const opts = shuffle([card,...others]);
  const cont = document.getElementById('qcm-options');
  cont.innerHTML='';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className='option-btn'; btn.textContent=opt.fr;
    btn.addEventListener('click', ()=>checkENQCM(btn,opt,card));
    cont.appendChild(btn);
  });
  document.getElementById('qcm-ai-area').innerHTML='';
  document.getElementById('qcm-score').textContent=enGameState.score+' pts';
  document.getElementById('qcm-streak').textContent=enGameState.streak;
}
function checkENQCM(btn, chosen, correct) {
  document.querySelectorAll('#qcm-options .option-btn').forEach(b=>b.disabled=true);
  const enXP = parseInt(localStorage.getItem('en_xp')||'0');
  if(chosen.en===correct.en) {
    btn.classList.add('correct');
    enGameState.streak++;
    const bonus=Math.min(enGameState.streak,5)*10;
    enGameState.score+=bonus;
    localStorage.setItem('en_xp', enXP+bonus);
    showToast(`✅ +${bonus} pts`,'correct-toast');
    document.getElementById('qcm-score').textContent=enGameState.score+' pts';
    document.getElementById('qcm-streak').textContent=enGameState.streak;
    setTimeout(nextENQCM, 800);
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#qcm-options .option-btn').forEach(b=>{if(b.textContent===correct.fr)b.classList.add('correct');});
    enGameState.streak=0; enGameState.mistakes.push(correct);
    showToast(`❌ ${correct.en} = ${correct.fr}`,'wrong-toast');
    document.getElementById('qcm-streak').textContent='0';
    setTimeout(nextENQCM, 2000);
  }
}
function nextENQCM() {
  enGameState.idx++;
  if(enGameState.idx>=enGameState.cards.length) showENResults(enGameState.score, enGameState.cards.length*50, enGameState.mistakes);
  else renderENQCM();
}

// ── EN TYPING ──
function initENTyping() {
  enGameState = { cards:shuffle(ENGLISH), idx:0, score:0, mistakes:[] };
  showScreen('screen-typing');
  document.getElementById('type-skip-btn').onclick = typeENSkip;
  document.getElementById('type-check-btn').onclick = typeENCheck;
  const inp = document.getElementById('type-input');
  inp.onkeydown = e=>{ if(e.key==='Enter') typeENCheck(); };
  renderENTyping();
}
function renderENTyping() {
  const card = enGameState.cards[enGameState.idx];
  document.getElementById('type-word').textContent = card.fr;
  const inp = document.getElementById('type-input');
  inp.value=''; inp.className='type-input'; inp.placeholder='Write in English…'; inp.focus();
  setProgress('type-progress', enGameState.idx, enGameState.cards.length);
  document.getElementById('type-score').textContent=enGameState.score+' pts';
  document.getElementById('type-ai-area').innerHTML='';
}
function typeENCheck() {
  const card = enGameState.cards[enGameState.idx];
  const inp = document.getElementById('type-input');
  const attempt = normalize(inp.value);
  const correct = normalize(card.en.replace(/\[.*?\]/g,'').trim());
  if(!attempt) return;
  const enXP = parseInt(localStorage.getItem('en_xp')||'0');
  if(attempt===correct || levenshtein(attempt,correct)<=2) {
    inp.classList.add('correct'); inp.value=card.en;
    enGameState.score+=20; localStorage.setItem('en_xp', enXP+20);
    showToast('✅ +20 XP','correct-toast');
    setTimeout(nextENTyping, 800);
  } else {
    inp.classList.add('wrong'); enGameState.mistakes.push(card);
    showToast(`❌ → ${card.en}`,'wrong-toast');
    document.getElementById('type-ai-area').innerHTML=`<div class="ai-bubble"><div class="ai-badge">❌ Correction</div><strong style="color:var(--success)">${card.en}</strong> = ${card.fr}</div>`;
    setTimeout(nextENTyping, 2200);
  }
}
function typeENSkip() {
  enGameState.mistakes.push(enGameState.cards[enGameState.idx]);
  showToast(`⏭ ${enGameState.cards[enGameState.idx].en}`,'');
  nextENTyping();
}
function nextENTyping() {
  enGameState.idx++;
  if(enGameState.idx>=enGameState.cards.length) showENResults(enGameState.score, enGameState.cards.length*20, enGameState.mistakes);
  else renderENTyping();
}

// ── EN SURVIVAL ──
function initENSurvival() {
  enGameState = { cards:shuffle(ENGLISH), idx:0, score:0, lives:3 };
  showScreen('screen-survival');
  renderENSurvival();
}
function renderENSurvival() {
  const card = enGameState.cards[enGameState.idx % enGameState.cards.length];
  document.getElementById('survival-word').textContent = card.en;
  document.getElementById('survival-score').textContent = enGameState.score;
  document.getElementById('survival-lives').textContent = '❤️'.repeat(enGameState.lives)+'🖤'.repeat(3-enGameState.lives);
  const others = shuffle(ENGLISH.filter(w=>w.en!==card.en)).slice(0,3);
  const opts = shuffle([card,...others]);
  const cont = document.getElementById('survival-options');
  cont.innerHTML='';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className='option-btn'; btn.textContent=opt.fr;
    btn.addEventListener('click', ()=>checkENSurvival(btn,opt,card));
    cont.appendChild(btn);
  });
}
function checkENSurvival(btn, chosen, correct) {
  document.querySelectorAll('#survival-options .option-btn').forEach(b=>b.disabled=true);
  const enXP = parseInt(localStorage.getItem('en_xp')||'0');
  if(chosen.en===correct.en) {
    btn.classList.add('correct');
    enGameState.score+=10; localStorage.setItem('en_xp', enXP+10);
    showToast('✅ +10','correct-toast');
    document.getElementById('survival-score').textContent=enGameState.score;
    setTimeout(()=>{ enGameState.idx++; renderENSurvival(); }, 600);
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#survival-options .option-btn').forEach(b=>{if(b.textContent===correct.fr)b.classList.add('correct');});
    enGameState.lives--;
    document.getElementById('survival-lives').textContent='❤️'.repeat(enGameState.lives)+'🖤'.repeat(3-enGameState.lives);
    showToast(`💔 ${correct.en} = ${correct.fr}`,'wrong-toast');
    if(enGameState.lives<=0) setTimeout(()=>showENResults(enGameState.score,999,[]),1500);
    else setTimeout(()=>{ enGameState.idx++; renderENSurvival(); },1500);
  }
}
function showENResults(score, maxScore, mistakes) {
  const pct = Math.round(Math.min(score/maxScore,1)*100);
  document.getElementById('result-ring').style.setProperty('--pct', pct+'%');
  document.getElementById('result-pct').textContent=pct+'%';
  document.getElementById('res-correct').textContent=Math.round(pct/100*(mistakes.length+Math.round(pct/100*15)));
  document.getElementById('res-wrong').textContent=mistakes.length;
  document.getElementById('res-xp').textContent='+'+score;
  document.getElementById('result-emoji').textContent=pct>=80?'🏆':pct>=60?'💪':'📚';
  document.getElementById('result-title').textContent=pct>=80?'Excellent !':pct>=60?'Well done !':'Keep going !';
  if(mistakes.length>0) {
    document.getElementById('mistakes-section').style.display='block';
    document.getElementById('mistakes-list').innerHTML=mistakes.map(m=>`<div class="mistake-row"><span class="mistake-es">${m.en}</span><span class="mistake-fr">${m.fr}</span></div>`).join('');
  } else { document.getElementById('mistakes-section').style.display='none'; }
  document.getElementById('result-replay-btn').onclick=()=>showScreen('home-en');
  showScreen('screen-results');
}

// ═══════════════════════════════════════════════
// VOCAB ESPAGNOL
// ═══════════════════════════════════════════════
const VOCAB = [
  {es:"Proyecto",fr:"Projet"},{es:"desatar",fr:"Déclencher"},{es:"asignar",fr:"Affecter"},
  {es:"Cenar",fr:"Diner"},{es:"Quedar",fr:"Rester"},{es:"aún",fr:"encore"},
  {es:"adherir",fr:"Coller"},{es:"enamorar",fr:"Séduire / rendre amoureux"},
  {es:"vecindario",fr:"Voisinage"},{es:"pesar",fr:"Peser"},{es:"Mano",fr:"Main"},
  {es:"Camino",fr:"Chemin"},{es:"Crecer",fr:"Grandir"},{es:"así",fr:"Comme ça"},
  {es:"especulaciones",fr:"Spéculation"},{es:"Cupo",fr:"Quota"},{es:"Rato",fr:"Moment, instant"},
  {es:"adueñarse de",fr:"S'emparer de / s'approprier de"},{es:"ladrón ladrona",fr:"Voleur, voleuse"},
  {es:"Faltar",fr:"Manquer"},{es:"rebote",fr:"Rebond"},{es:"Vaso",fr:"Verre"},
  {es:"luego de",fr:"Après"},{es:"Animar",fr:"Encourager"},{es:"avecinar",fr:"S'approcher"},
  {es:"Pesado",fr:"Lourd"},{es:"caminar",fr:"Marcher"},{es:"Ya",fr:"Déjà / Maintenant"},
  {es:"Cierto",fr:"Certain"},{es:"amañado",fr:"Truqué"},{es:"anfitrión anfitriona",fr:"Hôte, hôtesse"},
  {es:"Respeto",fr:"Respect"},{es:"Alrededor",fr:"Autour"},{es:"Hielo",fr:"Glace"},
  {es:"enfadado",fr:"En colère"},{es:"Tras",fr:"Après"},{es:"De acuerdo",fr:"D'accord / Ok"},
  {es:"Joven",fr:"Jeune"},{es:"esos",fr:"Ces / Ceux-là"},{es:"Caliente",fr:"Chaud"},
  {es:"Logro",fr:"Réussite"},{es:"Ambicioso",fr:"Ambitieux"},{es:"Disfrutar",fr:"Profiter de"},
  {es:"Poner",fr:"Mettre / poser"},{es:"Helado",fr:"Glace (crème)"},{es:"engañar",fr:"Mentir / tromper"},
  {es:"Obra",fr:"Chantier"},{es:"Aunque",fr:"Bien que"},{es:"Clave",fr:"Clé"},
  {es:"Decir",fr:"Dire"},{es:"guardados",fr:"Gardés"},{es:"Pues",fr:"Car / Parce que"},
  {es:"subir",fr:"Monter"},{es:"Lente",fr:"Lentille"},{es:"agradecer",fr:"Remercier"},
  {es:"Rol",fr:"Rôle"},{es:"adivinar",fr:"Deviner"},{es:"harto",fr:"Fatigué, lassé"},
  {es:"Adelanto",fr:"Avance"},{es:"Luchar",fr:"Combattre"},{es:"adentrarse en",fr:"Entrer dans"},
  {es:"Apoyar",fr:"Soutenir"},{es:"Certificado",fr:"Certifié"},{es:"aquel aquella",fr:"Celui-là, celle-là"},
  {es:"Parecido",fr:"Semblable"},{es:"cita",fr:"Rendez-vous"},{es:"Jaque",fr:"Échec (échecs)"},
  {es:"Guapo",fr:"Beau"},{es:"Tierra",fr:"Terre"},{es:"demasiado",fr:"Trop de"},
  {es:"Checar",fr:"Vérifier"},{es:"movimiento",fr:"Mouvement"},{es:"cancha",fr:"Terrain"},
  {es:"Oscuro",fr:"Obscur"},{es:"desprestigiar",fr:"Discréditer"},{es:"equivocarse",fr:"Se tromper"},
  {es:"Robar",fr:"Voler"},{es:"Pelota",fr:"Balle"},{es:"sonar",fr:"Sonner"},
  {es:"confundir con",fr:"Confondre avec"},{es:"Jabón",fr:"Savon"},{es:"dentro",fr:"À l'intérieur"},
  {es:"veraniego",fr:"D'été"},{es:"A pesar de que",fr:"Malgré que"},{es:"Propio",fr:"Propre"},
  {es:"Empezar",fr:"Commencer"},{es:"altibajos",fr:"Hauts et bas"},{es:"Pelear",fr:"Se battre"},
  {es:"Tarea",fr:"Tâche"},{es:"Pudrir",fr:"Pourrir"},{es:"Charlar",fr:"Discuter"},
  {es:"lado",fr:"Côté"},{es:"más allá",fr:"Plus loin / Au-delà"},{es:"Deber",fr:"Devoir"},
  {es:"Cenar",fr:"Dîner"},{es:"Pasado",fr:"Passé"},{es:"Seno",fr:"Sein"},
  {es:"Respeto",fr:"Respect"},{es:"Rato",fr:"Instant"},{es:"Camino",fr:"Chemin"},
  {es:"así",fr:"Comme ça"},{es:"Poner",fr:"Mettre"},{es:"Faltar",fr:"Manquer"},
  // ── Ajouts TikTok ──
  {es:"girarse",fr:"Se retourner"},
  {es:"agacharse",fr:"S'accroupir / Se baisser"},
  {es:"agachado",fr:"Accroupi / Baissé"},
  {es:"coger",fr:"Prendre / Attraper"},
  {es:"sepas",fr:"Que tu saches (subjonctif de saber)"},
  {es:"robándote",fr:"En train de te voler"},
  {es:"cogiéndote",fr:"En train de te prendre"},
  // ── Session 10 mai 2026 ──
  {es:"acordarse",fr:"Se souvenir"},
  {es:"alejamiento",fr:"Éloignement"},
  {es:"allí",fr:"Là-bas"},
  {es:"aparcar",fr:"Garer / Parquer"},
  {es:"arriba",fr:"En haut / Là-haut"},
  {es:"bajar",fr:"Descendre / Baisser"},
  {es:"cara",fr:"Visage / Tête"},
  {es:"chaval",fr:"Gamin / Mec (argot)"},
  {es:"claro que",fr:"Bien sûr que"},
  {es:"cogidos",fr:"Attrapés / Pris"},
  {es:"ha cogido",fr:"Il a pris (passé composé)"},
  {es:"he bajado",fr:"Je suis descendu (passé composé)"},
  {es:"ido corriendo",fr:"Parti en courant"},
  {es:"los he seguido",fr:"Je les ai suivis"},
  {es:"meter",fr:"Mettre dans / Fourrer"},
  {es:"no me podía bajar",fr:"Je ne pouvais pas descendre"},
  {es:"olvidarse",fr:"Oublier"},
  {es:"pillar",fr:"Coincer / Surprendre en flagrant délit"},
  {es:"pillado",fr:"Coincé / Surpris en flagrant délit"},
  {es:"rogar",fr:"Supplier / Implorer"},
  {es:"sacar",fr:"Sortir / Tirer / Obtenir"},
  {es:"se me había olvidado",fr:"J'avais oublié (plus-que-parfait)"},
  {es:"seguir",fr:"Suivre / Continuer"},
  {es:"súbete",fr:"Monte ! (impératif pronominal)"},
  {es:"vaya",fr:"Bref / Disons / Quoi (marqueur discursif)"},
  {es:"ventanilla",fr:"Guichet / Vitre de voiture"},
  // ── Session 11 mai 2026 ──
  {es:"esperar",fr:"Attendre / Espérer"},
  {es:"tanto",fr:"Tellement / Autant"},
  {es:"nuevo",fr:"Nouveau / Nouvelle"},
  {es:"parte",fr:"Partie / Épisode"},
  {es:"serie",fr:"Série"},
  {es:"hasta",fr:"Jusqu'à / Même"},
  {es:"no sé",fr:"Je ne sais pas"},
  {es:"qué",fr:"Quoi / Que"},
  {es:"cuántos",fr:"Combien (de)"},
  {es:"amarilla",fr:"Jaune (féminin)"},
  {es:"lluvia",fr:"Pluie"},
  {es:"mantenerse",fr:"Se maintenir / Rester"},
  {es:"mantener",fr:"Maintenir / Entretenir"},
  {es:"industria",fr:"Industrie"},
  {es:"cine",fr:"Cinéma"},
  {es:"viva",fr:"En vie / Vivant(e)"},
  {es:"para ti",fr:"Pour toi"},
  {es:"siguiendo",fr:"En train de suivre (gérondif de seguir)"},
  {es:"tienda",fr:"Boutique / Magasin"},
  {es:"inicio",fr:"Accueil / Début"},
  {es:"amigos",fr:"Amis"},
  {es:"mensajes",fr:"Messages"},
  {es:"perfil",fr:"Profil"},
  {es:"y punto",fr:"Et voilà / Point final (expression)"},
  {es:"escudo",fr:"Bouclier / Écu"},
  {es:"pirarse",fr:"Se barrer / Se tirer (argot)"},
  {es:"sudar",fr:"Transpirer / Suer"},
  {es:"me suda",fr:"fig. Je m'en fous"},
  {es:"montar",fr:"litt. Monter / Organiser / fig. (argot) sens sexuel"},
  {es:"tocar",fr:"Toucher / Être l'heure de (impersonnel)"},
  {es:"levantarse",fr:"Se lever"},
  {es:"moverse",fr:"Se bouger / Se déplacer"},
  {es:"poco",fr:"Peu / Un peu"},
  {es:"durante",fr:"Pendant / Durant"},
  {es:"minuto",fr:"Minute"},
  {es:"ahora",fr:"Maintenant"},
  {es:"cerrar",fr:"Fermer"},
  {es:"borrar",fr:"Effacer / Supprimer"},
  {es:"memoria",fr:"Mémoire"},
  {es:"eso",fr:"Ça / Cela"},
  {es:"significar",fr:"Signifier / Vouloir dire"},
  {es:"volver a",fr:"Refaire / Re- (+ infinitif)"},
  {es:"primera vez",fr:"Première fois"},
  {es:"vez",fr:"Fois"},
  {es:"aburrido",fr:"Ennuyeux / Ennuyé (avec estar = s'ennuyer)"},
  {es:"mezclarse",fr:"fig. Se mélanger / Mingler"},
  {es:"socializar",fr:"Socialiser"},
  // ── Session 11 mai 2026 (suite) ──
  {es:"además",fr:"De plus / En plus"},
  {es:"por cierto",fr:"D'ailleurs / Au fait"},
  {es:"a propósito",fr:"D'ailleurs / À propos"},
  {es:"temporada",fr:"Saison (série TV / sport)"},
  {es:"estación",fr:"Saison (météo : printemps, été…)"},
  // ── Session 15 mai 2026 ──
  {es:"parecer",fr:"Sembler / Paraître / Avoir l'air"},
  {es:"me parece bien",fr:"Ça me semble bien / D'accord"},
  {es:"al parecer",fr:"Apparemment"},
  {es:"desarrollo",fr:"Développement"},
  {es:"desarrollar",fr:"Développer"},
  {es:"acojonar",fr:"Foutre les jetons / Terroriser / Faire flipper (argot vulgaire)"},
  {es:"sinceramente",fr:"Sincèrement / Honnêtement"},
  {es:"comunidad",fr:"Communauté"},
  {es:"compartir",fr:"Partager"},
  {es:"seguidores",fr:"Abonnés / Suiveurs"},
  {es:"búsqueda",fr:"Recherche"},
  {es:"acoger",fr:"Accueillir / Recevoir chaleureusement"},
  {es:"un montón",fr:"Beaucoup / Un tas / Plein"},
  // ── Session 19 mai 2026 ──
  {es:"según",fr:"Selon / D'après / Ça dépend"},
  {es:"avisar",fr:"Prévenir / Avertir / Informer"},
  {es:"cruzar",fr:"Traverser / Croiser"},
  {es:"cruzarse",fr:"Se croiser / Se rencontrer par hasard"},
  {es:"el cruce",fr:"Le croisement / Le carrefour"},
  {es:"asustar",fr:"Faire peur / Effrayer"},
  {es:"asustarse",fr:"Avoir peur / S'effrayer"},
  {es:"plantilla",fr:"litt. Modèle / Gabarit / fig. Effectif / Équipe (foot)"},
  {es:"en general",fr:"En général / Dans l'ensemble"},
  {es:"repaso",fr:"Révision / Relecture"},
  {es:"repasar",fr:"Réviser / Relire"},
  {es:"delantero",fr:"litt. Avant / De devant / fig. Attaquant (foot)"},
  {es:"secar",fr:"litt. Sécher / fig. Ignorer / Ghoster (argot)"},
  {es:"tirar",fr:"Lancer / Jeter / Tirer"},
  {es:"enterarse",fr:"Apprendre (une info) / Se rendre compte / Être au courant"},
  {es:"de repente",fr:"Tout à coup / Soudainement"},
  {es:"ganas",fr:"Envie / Désir / Motivation"},
  {es:"tener ganas de",fr:"Avoir envie de"},
  {es:"da igual",fr:"Ça revient au même / Peu importe / C'est pareil"},
  {es:"dar igual",fr:"Être égal / Ne pas faire de différence"},
  {es:"trozo",fr:"Morceau / Bout / Fragment"},
  {es:"papel",fr:"Papier / Rôle (cinéma/théâtre)"},
  {es:"joder",fr:"litt. Baiser (vulgaire) / fig. Emmerder / Merde ! (exclamation)"},
  {es:"puesto",fr:"litt. Mis / Placé / Poste / Stand (marché)"},
  {es:"cuerno",fr:"Corne / fig. Trahison amoureuse (poner los cuernos)"},
  {es:"haber",fr:"Avoir (auxiliaire) / Y avoir"},
  {es:"hay",fr:"Il y a (présent de haber)"},
  {es:"ha habido",fr:"Il y a eu (passé composé de haber)"},
  // ── Session 22 mai 2026 ──
  {es:"madurar",fr:"Mûrir (fruit, personne) / Évoluer"},
  {es:"maduro",fr:"Mûr (fruit, personne mature)"},
  {es:"madurez",fr:"Maturité"},
  {es:"picar",fr:"Piquer (insecte) / Démanger / Hacher / Picorer"},
  {es:"picarse",fr:"fig. Se vexer / Se froisser (argot)"},
  {es:"picante",fr:"Piquant / Épicé"},
  {es:"meterse",fr:"Se mettre dans / Se fourrer / S'engager"},
  {es:"meterse con",fr:"S'en prendre à / Chercher des noises"},
  {es:"meter la pata",fr:"fig. Gaffer / Faire une bourde"},
  {es:"lobo",fr:"Loup"},
  {es:"loba",fr:"Louve"},
  {es:"boca",fr:"Bouche / Gueule"},
  {es:"boca del lobo",fr:"fig. Gueule du loup (lieu très dangereux)"},
  {es:"bromear",fr:"Plaisanter / Blaguer"},
  {es:"broma",fr:"Blague / Plaisanterie / Farce"},
  {es:"es broma",fr:"C'est une blague ! / Je rigole !"},
  {es:"llegar",fr:"Arriver / Atteindre / Parvenir"},
  {es:"al día de hoy",fr:"Au jour d'aujourd'hui / À ce jour"},
  {es:"hoy",fr:"Aujourd'hui"},
  {es:"hoy en día",fr:"De nos jours"},
  {es:"comerse",fr:"litt. Se manger / fig. Se taper / S'envoyer (intensif)"},
  {es:"pedazo",fr:"Morceau / Bout (intensificateur argot : pedazo de…)"},
  {es:"moda",fr:"Mode / Tendance"},
  {es:"seguir modas",fr:"Suivre les modes / Suivre les tendances"},
  {es:"estar de moda",fr:"Être à la mode"},
  {es:"pasado de moda",fr:"Démodé"},
  {es:"desplegar",fr:"Déployer / Déplier / Étaler"},
  {es:"despliegue",fr:"Déploiement"},
  {es:"plegar",fr:"Plier"},
  {es:"traer",fr:"Apporter / Amener (vers ici) ≠ llevar"},
  {es:"traído",fr:"Apporté / Amené (participe passé)"},
  {es:"traer suerte",fr:"Porter chance"},
  {es:"golpe",fr:"Coup / Choc / Coup d'État"},
  {es:"golpear",fr:"Frapper / Cogner"},
  {es:"de golpe",fr:"D'un coup / Soudainement"},
  {es:"golpe de suerte",fr:"Coup de chance"},
  {es:"ningún",fr:"Aucun (devant nom masculin)"},
  {es:"ninguno",fr:"Aucun (pronom / fin de phrase)"},
  {es:"ninguna",fr:"Aucune"},
  {es:"de ninguna manera",fr:"En aucune façon / Pas du tout"},
  {es:"en ningún momento",fr:"À aucun moment"},
  // ── Session 25 mai 2026 ──
  {es:"cualquier",fr:"N'importe quel (devant nom)"},
  {es:"cualquiera",fr:"N'importe lequel / Quiconque (pronom/fin de phrase)"},
  {es:"en cualquier momento",fr:"À tout moment"},
  {es:"cualquier cosa",fr:"N'importe quoi"},
  {es:"casi",fr:"Presque / Failli (faire qqch)"},
  {es:"agarrar",fr:"Attraper / Saisir / Prendre"},
  {es:"agarrarse",fr:"S'attraper / En venir aux mains"},
  {es:"trompada",fr:"Coup de poing / Pain (argot)"},
  {es:"a trompadas",fr:"À coups de poing"},
  {es:"simio",fr:"Singe (registre + scientifique que mono)"},
  {es:"matar",fr:"Tuer"},
  {es:"ganar",fr:"Gagner / Remporter"},
  {es:"fruto",fr:"Fruit (sens large : produit / résultat / botanique)"},
  {es:"fruta",fr:"Fruit (qu'on mange)"},
  {es:"dar fruto",fr:"Porter ses fruits / Donner des résultats"},
  {es:"empate",fr:"Match nul / Égalité (score)"},
  {es:"empatar",fr:"Égaliser / Faire match nul"},
  {es:"disparar",fr:"Tirer (arme) / Tirer au but / Déclencher"},
  {es:"disparo",fr:"Tir / Coup de feu"},
  {es:"dispararse",fr:"Se déclencher / S'envoler (prix)"},
  {es:"sano",fr:"Sain / En bonne santé"},
  {es:"roble",fr:"Chêne"},
  {es:"sano como un roble",fr:"Sain comme un chêne / En pleine forme"},
  {es:"sano y salvo",fr:"Sain et sauf"},
  {es:"cuidado",fr:"Attention ! / Soin / Précaution / Souci"},
  {es:"cuidar",fr:"Prendre soin / Garder / S'occuper de"},
  {es:"cuidarse",fr:"Prendre soin de soi / Faire attention"},
  {es:"cuídate",fr:"Prends soin de toi !"},
  {es:"descuidar",fr:"Négliger / Ne pas faire attention"},
  {es:"descuido",fr:"Négligence / Distraction / Étourderie"},
  {es:"descuida",fr:"Ne t'inquiète pas ! / T'inquiète ! (impératif)"},
  {es:"habría",fr:"Il y aurait / J'aurais (conditionnel de haber)"},
  {es:"hayamos",fr:"Que nous ayons (subjonctif de haber)"},
  // ── Session 28 mai 2026 ──
  {es:"promedio",fr:"Moyenne / Moyen / Lambda"},
  {es:"en promedio",fr:"En moyenne"},
  {es:"esposa",fr:"Épouse / Femme (mariée)"},
  {es:"esposo",fr:"Époux / Mari"},
  {es:"turbante",fr:"Turban"},
  {es:"sin",fr:"Sans"},
  {es:"si",fr:"Si (conditionnel — sans accent)"},
  {es:"cabeza",fr:"Tête"},
  {es:"dolor de cabeza",fr:"Mal de tête"},
  {es:"ver",fr:"Voir"},
  {es:"lograr",fr:"Réussir à / Parvenir à / Obtenir"},
  {es:"logro",fr:"Réussite / Accomplissement"},
  {es:"castigar",fr:"Punir / Sanctionner / Châtier"},
  {es:"castigo",fr:"Punition / Châtiment / Sanction"},
  {es:"castigado",fr:"Puni / Sanctionné"},
  {es:"querer",fr:"Vouloir / Aimer (qqn)"},
  {es:"quiso",fr:"Il/elle a voulu / a aimé (prétérit)"},
  {es:"te quiero",fr:"Je t'aime (affection — famille, amis, couple)"},
  {es:"sin querer",fr:"Sans le vouloir / Sans faire exprès"},
  {es:"ponerse",fr:"Se mettre / Devenir (forme pronominale de poner)"},
  {es:"firme",fr:"Ferme / Raide / Solide"},
  {es:"ponerse firme",fr:"Se mettre au garde-à-vous (militaire)"},
  {es:"patria",fr:"Patrie"},
  {es:"fue",fr:"Il fut / Il alla (prétérit irrég. de ser/ir)"},
  {es:"me voy a la cama",fr:"Je vais me coucher"},
  {es:"irse",fr:"S'en aller / Partir (forme pronominale de ir)"},
  {es:"cama",fr:"Lit"},
  {es:"acostarse",fr:"Se coucher (se mettre au lit)"},
  {es:"dormirse",fr:"S'endormir"},
  {es:"pelota",fr:"Balle / Ballon / fig. Lèche / Cirage de pompes (argot)"},
  {es:"hacer la pelota",fr:"fig. Faire de la lèche / Cirer les pompes"},
  {es:"pelota (persona)",fr:"Lèche-bottes / Flatteur (fig.)"},
  {es:"vergüenza",fr:"Honte / Gêne / Pudeur"},
  {es:"vergüencita",fr:"Petite honte (diminutif affectif)"},
  {es:"qué vergüenza",fr:"Quelle honte !"},
  {es:"me da vergüenza",fr:"Ça me fait honte / Je suis gêné(e)"},
  {es:"vergüenza ajena",fr:"Honte par procuration / Cringe"},
  {es:"flipar",fr:"fig. Kiffer / Halluciner / S'éclater (argot Espagne)"},
  {es:"flipante",fr:"Hallucinant / Génial / Trop bien"},
  {es:"me flipa",fr:"Je kiffe / J'adore"},
  {es:"jefe",fr:"Chef / Patron / Boss / (argot) Papa"},
  {es:"jefa",fr:"Cheffe / Patronne / (argot) Maman"},
  {es:"cansado",fr:"Fatigué"},
  {es:"cansar",fr:"Fatiguer"},
  {es:"cansarse de",fr:"Se lasser de / En avoir marre de"},
  {es:"cansancio",fr:"Fatigue"},
  {es:"descojonarse",fr:"fig. Se marrer / Éclater de rire (argot vulgaire)"},
  {es:"cojonudo",fr:"Génial / Super (argot vulgaire mais positif)"},
  {es:"partirse",fr:"Se tordre de rire"},
  {es:"ola",fr:"Vague (mer / phénomène)"},
  {es:"ola de calor",fr:"Vague de chaleur"},
  {es:"arruga",fr:"Ride / Pli"},
  {es:"arrugar",fr:"Froisser / Plisser / Rider"},
  {es:"arrugarse",fr:"Se froisser / Se rider / fig. Se dégonfler"},
  {es:"no solo",fr:"Non seulement / Pas seulement"},
  {es:"a lo mejor",fr:"Peut-être / Sans doute (courant à l'oral)"},
  {es:"preguntar",fr:"Demander / Poser une question"},
  {es:"periodista",fr:"Journaliste"},
  {es:"sino",fr:"Mais (opposition après négation)"},
  {es:"sino que",fr:"Mais (avec verbe conjugué)"},
  {es:"no solo... sino también",fr:"Non seulement... mais aussi"},
  {es:"subir",fr:"Monter / Augmenter / Poster (en ligne)"},
  {es:"lamentar",fr:"Regretter / Déplorer / Être désolé"},
  {es:"lo lamento",fr:"Je le regrette / Je suis désolé (soutenu)"},
  {es:"lamentable",fr:"Lamentable / Regrettable"},
  {es:"chica",fr:"Meuf / Nana (interjection familière)"},
  {es:"laísmo",fr:"Phénomène grammatical (la au lieu de le, Madrid)"},
  {es:"señora",fr:"Madame"},
  {es:"pegar",fr:"Frapper / Coller / Attraper (maladie) / Être assorti"},
  {es:"pegar fuerte",fr:"Cartonner / Marcher fort"},
  {es:"venir",fr:"Venir"},
  {es:"vienes",fr:"Tu viens (présent, tú)"},
  {es:"vengo",fr:"Je viens (présent, yo)"},
  {es:"ni siquiera",fr:"Même pas / Pas même"},
  {es:"conocer",fr:"Connaître (par expérience directe)"},
  {es:"encantado de conocerte",fr:"Enchanté de te connaître"},
  {es:"despertar",fr:"Réveiller"},
  {es:"despertarse",fr:"Se réveiller"},
  {es:"despertador",fr:"Réveil (appareil)"},
  {es:"hace nada",fr:"À l'instant / Il y a un instant"},
  {es:"hace poco",fr:"Il y a peu / Récemment"},
  {es:"hace un rato",fr:"Il y a un moment"},
  {es:"sortear",fr:"Contourner / Éviter / Tirer au sort"},
  {es:"sorteo",fr:"Tirage au sort / Tombola"},
  {es:"sacarle X a alguien",fr:"Avoir X d'avance (âge, dist., pts)"},
  // ── Session 30 mai 2026 — Texte Spider-Man ──
  {es:"salir con",fr:"Sortir avec / Aller avec (qqn)"},
  {es:"hermano",fr:"Frère"},
  {es:"hermana",fr:"Sœur"},
  {es:"película",fr:"Film"},
  {es:"salir",fr:"Sortir / Partir / Paraître (film)"},
  {es:"salió",fr:"Il est sorti / Il apparut (prétérit)"},
  {es:"crítica",fr:"Critique"},
  {es:"buenísimo",fr:"Excellent / Super (superlatif de bueno)"},
  {es:"todo el mundo",fr:"Tout le monde"},
  {es:"mejor",fr:"Meilleur / Mieux"},
  {es:"desde que",fr:"Depuis que"},
  {es:"entrar",fr:"Entrer"},
  {es:"entró",fr:"Il est entré (prétérit)"},
  {es:"sorprendido",fr:"Surpris"},
  {es:"aliviado",fr:"Soulagé"},
  {es:"a la vez",fr:"À la fois / En même temps"},
  {es:"sobre todo",fr:"Surtout"},
  {es:"estuvimos hablando",fr:"Nous étions en train de parler (passé progressif)"},
  {es:"convencido",fr:"Convaincu"},
  {es:"iba a ser",fr:"Ça allait être (futur du passé)"},
  {es:"fracaso",fr:"Échec"},
  {es:"por fin",fr:"Enfin"},
  {es:"verdadero",fr:"Vrai / Véritable"},
  {es:"otra vez",fr:"Une nouvelle fois / À nouveau"},
  {es:"balancearse",fr:"Se balancer"},
  {es:"literalmente",fr:"Littéralement"},
  {es:"gracioso",fr:"Drôle / Marrant"},
  {es:"recuerdo",fr:"Je me souviens (présent de recordar)"},
  {es:"recordar",fr:"Se souvenir / Rappeler"},
  {es:"hace como",fr:"Il y a environ (como = environ)"},
  {es:"de hecho",fr:"En fait / En réalité"},
  {es:"predecir",fr:"Prédire"},
  {es:"predijo",fr:"Il a prédit (prétérit irrég.)"},
  {es:"tendríamos",fr:"Nous aurions (conditionnel de tener)"},
  {es:"justo alrededor de",fr:"Juste vers / Aux alentours de"},
  {es:"alrededor de",fr:"Autour de / Vers (environ)"},
  {es:"parece que",fr:"Il semble que / On dirait que"},
  // ── Session récente (mots divers, juin 2026) ──
  {es:"salga",fr:"Que je sorte / Qu'il sorte (subj. de salir)"},
  {es:"bastante",fr:"Assez / Pas mal / Suffisamment"},
  {es:"bastar",fr:"Suffire"},
  {es:"basta",fr:"Ça suffit ! / Stop !"},
  {es:"vuelta",fr:"Tour / Retour / Virage / Monnaie rendue"},
  {es:"dar la vuelta",fr:"Faire le tour / Retourner qqch"},
  {es:"de vuelta",fr:"De retour"},
  {es:"volver",fr:"Revenir / Retourner / Rentrer (o→ue, part. vuelto)"},
  {es:"vuelto",fr:"Revenu / Retourné (participe irrég.)"},
  {es:"descartar",fr:"Écarter / Rejeter / Éliminer / Exclure"},
  {es:"descartado",fr:"Écarté / Rejeté / Éliminé"},
  {es:"descarte",fr:"Rejet / Écart / Défausse (cartes)"},
  {es:"será que",fr:"Se pourrait-il que… / Est-ce que… (futur de conjecture)"},
  {es:"todavía",fr:"Encore / Toujours (temps)"},
  {es:"todavía no",fr:"Pas encore"},
  {es:"aún",fr:"Encore (synonyme de todavía)"},
  {es:"conseguir",fr:"Arriver à / Réussir à / Obtenir (irrég. e→i)"},
  {es:"no consigo",fr:"Je n'arrive pas à…"},
  {es:"imaginar",fr:"Imaginer"},
  {es:"imaginarse",fr:"S'imaginer / Se figurer"},
  {es:"niña",fr:"Petite fille / Fillette / Ma petite (affectif)"},
  {es:"niño",fr:"Petit garçon / Enfant"},
  {es:"dar",fr:"Donner (verbe essentiel, irrég.)"},
  {es:"dando",fr:"Donnant (gérondif de dar)"},
  {es:"dándole",fr:"En lui donnant (gérondif + pronom collé)"},
  {es:"dar ganas de",fr:"Donner envie de"},
  {es:"dar miedo",fr:"Faire peur"},
  {es:"dar pena",fr:"Faire de la peine"},
  {es:"dar un paseo",fr:"Faire une promenade"},
  // ── Session récente (juin 2026) ──
  {es:"echar",fr:"Chasser / Virer / Jeter / Mettre / Verser"},
  {es:"echar de casa",fr:"Virer de la maison / Mettre à la porte"},
  {es:"echar de menos",fr:"Manquer (te echo de menos = tu me manques)"},
  {es:"echar una mano",fr:"Donner un coup de main"},
  {es:"echar una siesta",fr:"Faire une sieste"},
  {es:"echar un vistazo",fr:"Jeter un coup d'œil"},
  {es:"echarse a llorar",fr:"Se mettre à pleurer"},
  {es:"buitre",fr:"Vautour (litt. et fig. profiteur, charognard)"},
  {es:"anciano",fr:"Personne âgée / Vieillard (respectueux)"},
  {es:"anciana",fr:"Personne âgée (fém.) / Vieille dame"},
  {es:"personas mayores",fr:"Personnes âgées (registre poli)"},
  {es:"los que",fr:"Ceux qui"},
  {es:"las que",fr:"Celles qui"},
  {es:"asistir",fr:"Assister à / Être présent / Aider"},
  {es:"asistir a",fr:"Assister à (un événement)"},
  {es:"asistencia",fr:"Assistance / Présence / Aide / Passe décisive (foot)"},
  {es:"asistente",fr:"Assistant / Participant"},
  {es:"dañino",fr:"Nocif / Nuisible / Néfaste"},
  {es:"dañar",fr:"Endommager / Faire du mal / Abîmer"},
  {es:"daño",fr:"Dommage / Mal / Blessure"},
  {es:"hacer daño",fr:"Faire mal / Causer du tort"},
  {es:"hacerse daño",fr:"Se faire mal / Se blesser"},
  {es:"daños colaterales",fr:"Dommages collatéraux"},
  // ── Session 4 octobre 2026 ──
  {es:"maletero",fr:"Coffre (voiture) / Porteur de bagages"},
  {es:"maleta",fr:"Valise"},
  {es:"maletín",fr:"Mallette / Petit sac"},
  {es:"hacer la maleta",fr:"Faire sa valise"},
  {es:"capaz",fr:"Capable / Compétent / Doué / (argot) Peut-être"},
  {es:"capacidad",fr:"Capacité / Compétence"},
  {es:"incapaz",fr:"Incapable"},
  {es:"capacitar",fr:"Former / Habiliter"},
  {es:"ser capaz de",fr:"Être capable de + infinitif"},
  {es:"fallido",fr:"Raté / Manqué / Échoué / Défaillant"},
  {es:"fallar",fr:"Rater / Échouer / Faire défaut / Décevoir"},
  {es:"fallo",fr:"Erreur / Panne / Défaillance / Verdict"},
  {es:"fallecer",fr:"Décéder / Mourir (soutenu)"},
  {es:"estado fallido",fr:"État défaillant / Failli (géopolitique)"},
  {es:"fallo técnico",fr:"Problème technique / Panne"},
  {es:"conozco",fr:"Je connais (conocer, 1re pers. irrégulière)"},
  // ── Session 8 octobre 2026 ──
  {es:"quitar",fr:"Enlever / Retirer / Ôter (≠ quitter !)"},
  {es:"quitarse",fr:"S'enlever (vêtement) / Se retirer"},
  {es:"quitarse de en medio",fr:"S'écarter / Dégager (litt. s'enlever du milieu)"},
  {es:"quitarse un peso de encima",fr:"(fig.) Se libérer d'un poids"},
  {es:"quitarse el sombrero",fr:"(fig.) Tirer son chapeau"},
  {es:"quitarse años",fr:"(fig.) Se rajeunir / Mentir sur son âge"},
  {es:"estampado",fr:"Imprimé / À motifs (adj.)"},
  {es:"el estampado",fr:"L'imprimé / Le motif"},
  {es:"estampar",fr:"Imprimer / Apposer · (fam.) Projeter contre"},
  {es:"estamparse contra",fr:"(fam.) S'écraser contre / Se prendre de plein fouet"},
  {es:"llevar + gerundio",fr:"Ça fait [durée] que… (action qui continue)"},
  {es:"se lleva diciendo",fr:"On le dit depuis longtemps"},
  {es:"llevar sin + infinitivo",fr:"Ça fait [durée] que je ne… pas"},
  {es:"aclarar",fr:"Clarifier / Éclaircir / Rincer"},
  {es:"aclararse",fr:"S'éclaircir (temps) / Y voir clair"},
  {es:"la aclaración",fr:"La clarification / La précision"},
  {es:"aclarar dudas",fr:"Lever les doutes / Répondre aux questions"},
  {es:"no me aclaro",fr:"(fam.) Je m'y perds / Je n'y comprends rien"},
  {es:"si no",fr:"Si … ne … pas (condition, 2 mots ≠ sino)"},
  {es:"ponerse a + infinitivo",fr:"Se mettre à (faire qqch)"},
  {es:"echarse a",fr:"Se mettre soudain à (rire, pleurer…)"},
  {es:"ponerse + emoción",fr:"Devenir (changement passager : humeur, couleur)"},
  {es:"volverse",fr:"Devenir (changement profond, caractère)"},
  {es:"quedarse + adjetivo",fr:"Devenir / Rester (résultat d'un événement)"},
  {es:"el tonito",fr:"Le petit ton (condescendant, ironique)"},
  {es:"ponerse el tono de alguien",fr:"Prendre le ton de qqn / L'imiter"},
  {es:"ocasionar",fr:"Occasionner / Causer (soutenu)"},
  {es:"junto a alguien",fr:"À côté de / Aux côtés de qqn"},
  {es:"joya",fr:"Bijou · (fig.) Perle, trésor"},
  {es:"¡joya!",fr:"(argot 🇦🇷🇺🇾) Super ! Génial !"},
  {es:"vencer",fr:"Vaincre / Battre · (fig.) Expirer, arriver à échéance"},
  {es:"el vencimiento",fr:"L'échéance / La date d'expiration"},
  {es:"sumar",fr:"Additionner / Ajouter"},
  {es:"súmale que…",fr:"Ajoute à ça que… (oral)"},
  {es:"sumarse a",fr:"Se joindre à"},
  {es:"pedir salir a alguien",fr:"Demander à qqn de sortir avec soi"},,
  {es:"se parte de risa",fr:"Se tordre de rire"},
  {es:"meter a alguien",fr:"Mettre / Fourrer qqn"},
  {es:"haber roto",fr:"Avoir cassé / Avoir rompu"},
  {es:"hasta tercero",fr:"Jusqu'en troisième (année)"},
  {es:"atrasarse",fr:"Prendre du retard / Être en retard"},
  {es:"lejos",fr:"Loin"},
  {es:"chocado",fr:"Heurté / Choqué / Accidenté"},
  {es:"hubo",fr:"Il y eut / Il y a eu (pretérito)"},
  {es:"descarrilamiento",fr:"Déraillement"},
  {es:"hacer felices",fr:"Rendre heureux (pluriel)"},
  {es:"a punto de",fr:"Sur le point de"},
  {es:"estrellarse",fr:"S'écraser / Se fracasser"},
  {es:"llanto",fr:"Pleurs / Larmes"},
  {es:"aliviar",fr:"Soulager / Alléger"},
  {es:"indeseable",fr:"Indésirable"},
  {es:"nevera",fr:"Réfrigérateur / Frigo"},
  {es:"rostro",fr:"Visage (soutenu)"},
  {es:"casado",fr:"Marié"},
  {es:"huir",fr:"Fuir / S'enfuir"},
  {es:"bajarse de",fr:"Descendre de (véhicule)"}
];
// Remove duplicates
const seen = new Set();
const DATA = VOCAB.filter(w => { const k = w.es.toLowerCase(); if(seen.has(k)) return false; seen.add(k); return true; });

const VERBS = DATA.filter(w => /ar$|er$|ir$/.test(w.es.toLowerCase().trim().split(' ')[0]) && w.es.length < 20 && !w.es.includes(' '));

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
let state = {
  xp: parseInt(localStorage.getItem('xp')||'0'),
  streak: parseInt(localStorage.getItem('streak')||'0'),
  mastered: JSON.parse(localStorage.getItem('mastered')||'[]'),
  currentGame: null,
};
let gameState = {};

function saveState() {
  localStorage.setItem('xp', state.xp);
  localStorage.setItem('streak', state.streak);
  localStorage.setItem('mastered', JSON.stringify(state.mastered));
}

function updateHomeStats() {
  animateCounter(document.getElementById('stat-score'), state.xp);
  animateCounter(document.getElementById('stat-streak'), state.streak);
  animateCounter(document.getElementById('stat-mastered'), state.mastered.length);
}

// ═══════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if(target) {
    target.classList.add('active');
    // Scroll to top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Refresh SRS due badges when returning to language selector
    if(id === 'lang-select') updateSRSDueBadges();
  }
  // Desktop toggle only on the home screen on mobile, so it never covers game buttons
  const dt = document.getElementById('desktop-toggle');
  if(dt) dt.style.display = (id === 'lang-select' || document.body.classList.contains('desktop-mode')) ? '' : 'none';
}

function goHome() {
  stopSpeed();
  // Stop SRS simulation timer if running
  if(srsState && srsState.simTimer) { clearInterval(srsState.simTimer); srsState.simTimer = null; }
  updateSRSDueBadges();
  if(currentLang === 'ln') {
    updateLNStats();
    showScreen('home-ln');
  } else if(currentLang === 'en') {
    updateENStats();
    updateNativeBests();
    updatePronBadge();
    showScreen('home-en');
  } else {
    updateHomeStats();
    showScreen('home');
  }
}

function startGame(game) {
  state.currentGame = game;
  if(game === 'flashcard') initFlashcard();
  else if(game === 'qcm') initQCM();
  else if(game === 'typing') initTyping();
  else if(game === 'conjugation') initConjugation();
  else if(game === 'speed') initSpeed();
  else if(game === 'survival') initSurvival();
  else if(game === 'tempsdefi') initTD();
  else if(game === 'conjtrainer') initCT();
  else if(game === 'conjqcm') initCQ();
  else if(game === 'conjfill') initCF();
  else if(game === 'lecons') initLecons();
  else if(game === 'palette') initPalette();
  else if(game === 'mindmap') initMindMap();
  else if(game === 'story') initStory();
  else if(game === 'colorletters') initColorLetters();
  else if(game === 'aura') initAura();
  else if(game === 'imagementale') initImageMentale();
  else if(game === 'calendrier') initCalendrier();
  else if(game === 'wordle') initWordle();
  else if(game === 'anagramme') initAnagramme();
  else if(game === 'quisuisje') initQuiSuisJe();
  else if(game === 'blitz') initBlitz();
  else if(game === 'chaine') initChaine();
}

// ═══════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════
function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }
function pick(arr, n) { return shuffle(arr).slice(0, n); }
function normalize(s) {
  return s.toLowerCase().trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9\s]/g,'').trim();
}

function showToast(msg, type='') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast show ${type}`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2000);
}

function addXP(n) {
  if(state && typeof state.xp !== 'undefined') {
    state.xp += n;
    saveState();
  }
  // Also update localStorage XP for lingala/english contexts
  const xpKey = currentLang === 'ln' ? 'ln_xp' : currentLang === 'en' ? 'en_xp' : 'es_xp';
  const cur = parseInt(localStorage.getItem(xpKey)||'0');
  localStorage.setItem(xpKey, cur + n);
}

function setProgress(fillId, current, total) {
  document.getElementById(fillId).style.width = (current/total*100)+'%';
}

// ═══════════════════════════════════════════════
// FLASHCARD
// ═══════════════════════════════════════════════
function initFlashcard() {
  gameState = { cards: shuffle(DATA), idx: 0, correct: 0, flipped: false };
  showScreen('screen-flashcard');
  renderFlashcard();
}

function renderFlashcard() {
  const {cards, idx} = gameState;
  const card = cards[idx];
  document.getElementById('fc-lang-front').textContent = '🇪🇸 Espagnol';
  document.getElementById('fc-lang-back').textContent = '🇫🇷 Français';
  document.getElementById('fc-es').textContent = card.es;
  document.getElementById('fc-fr').innerHTML = card.fr + cardExampleHTML('es', card);
  document.getElementById('fc-counter').textContent = `${idx+1}/${cards.length}`;
  setProgress('fc-progress', idx, cards.length);
  document.getElementById('flip-inner').classList.remove('flipped');
  document.getElementById('fc-nav').style.display = 'none';
  document.getElementById('fc-ai-area').innerHTML = '';
  gameState.flipped = false;
}

function flipCard() {
  if(!gameState.flipped) {
    document.getElementById('flip-inner').classList.add('flipped');
    document.getElementById('fc-nav').style.display = 'flex';
    gameState.flipped = true;
  }
}

function fcRate(knew) {
  const card = gameState.cards[gameState.idx];
  if(knew) {
    gameState.correct++;
    addXP(10);
    showToast('✅ +10 XP', 'correct-toast');
    if(!state.mastered.includes(card.es)) { state.mastered.push(card.es); saveState(); }
  } else {
    showToast('😅 À retravailler', 'wrong-toast');
    getAITip(card, 'fc-ai-area');
  }
  gameState.idx++;
  if(gameState.idx >= gameState.cards.length) {
    showResults('flashcard', gameState.correct, gameState.cards.length, []);
  } else { renderFlashcard(); }
}

// ═══════════════════════════════════════════════
// QCM
// ═══════════════════════════════════════════════
function initQCM() {
  const cards = shuffle(DATA);
  gameState = { cards, idx: 0, score: 0, streak: 0, mistakes: [] };
  showScreen('screen-qcm');
  renderQCM();
}

function renderQCM() {
  const {cards, idx} = gameState;
  const card = cards[idx];
  document.getElementById('qcm-word').textContent = card.es;
  document.getElementById('qcm-hint').textContent = '';
  setProgress('qcm-progress', idx, cards.length);

  // Build 4 options
  const others = shuffle(DATA.filter(w => w.es !== card.es)).slice(0, 3);
  const opts = shuffle([card, ...others]);

  const cont = document.getElementById('qcm-options');
  cont.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.fr;
    btn.addEventListener('click', () => checkQCM(btn, opt, card, opts));
    cont.appendChild(btn);
  });
  document.getElementById('qcm-ai-area').innerHTML = '';
  document.getElementById('qcm-score').textContent = gameState.score + ' pts';
  document.getElementById('qcm-streak').textContent = gameState.streak;
}

function checkQCM(btn, chosen, correct, opts) {
  const btns = document.querySelectorAll('#qcm-options .option-btn');
  btns.forEach(b => b.disabled = true);
  if(chosen.es === correct.es) {
    btn.classList.add('correct');
    gameState.streak++;
    const bonus = Math.min(gameState.streak, 5) * 10;
    gameState.score += bonus;
    addXP(bonus);
    showToast(`✅ +${bonus} pts${gameState.streak>1?' (x'+gameState.streak+')':''}`, 'correct-toast');
    document.getElementById('qcm-score').textContent = gameState.score + ' pts';
    document.getElementById('qcm-streak').textContent = gameState.streak;
    setTimeout(nextQCM, 800);
  } else {
    btn.classList.add('wrong');
    btns.forEach(b => { if(b.textContent === correct.fr) b.classList.add('correct'); });
    gameState.streak = 0;
    gameState.mistakes.push(correct);
    document.getElementById('qcm-streak').textContent = '0';
    showToast(`❌ ${correct.es} = ${correct.fr}`, 'wrong-toast');
    getAITip(correct, 'qcm-ai-area');
    setTimeout(nextQCM, 2200);
  }
}

function nextQCM() {
  gameState.idx++;
  if(gameState.idx >= gameState.cards.length) {
    showResults('qcm', gameState.score, gameState.cards.length * 50, gameState.mistakes);
  } else { renderQCM(); }
}

// ═══════════════════════════════════════════════
// TYPING
// ═══════════════════════════════════════════════
function initTyping() {
  const cards = shuffle(DATA);
  gameState = { cards, idx: 0, score: 0, mistakes: [] };
  showScreen('screen-typing');
  document.getElementById('type-skip-btn').onclick = typeSkip;
  document.getElementById('type-check-btn').onclick = typeCheck;
  document.getElementById('type-input').onkeydown = e => { if(e.key==='Enter') typeCheck(); };
  renderTyping();
}

function renderTyping() {
  const card = gameState.cards[gameState.idx];
  document.getElementById('type-word').textContent = card.fr;
  const inp = document.getElementById('type-input');
  inp.value = '';
  inp.className = 'type-input';
  inp.focus();
  setProgress('type-progress', gameState.idx, gameState.cards.length);
  document.getElementById('type-score').textContent = gameState.score + ' pts';
  document.getElementById('type-ai-area').innerHTML = '';
}

function typeCheck() {
  const card = gameState.cards[gameState.idx];
  const inp = document.getElementById('type-input');
  const val = inp.value;
  const correct = normalize(card.es);
  const attempt = normalize(val);
  if(!attempt) return;
  
  if(attempt === correct || levenshtein(attempt, correct) <= 1) {
    inp.classList.add('correct');
    gameState.score += 20;
    addXP(20);
    showToast('✅ +20 XP', 'correct-toast');
    setTimeout(nextTyping, 700);
  } else {
    inp.classList.add('wrong');
    gameState.mistakes.push(card);
    showToast(`❌ → ${card.es}`, 'wrong-toast');
    getAITip(card, 'type-ai-area');
    setTimeout(nextTyping, 2500);
  }
}

function typeSkip() {
  const card = gameState.cards[gameState.idx];
  gameState.mistakes.push(card);
  showToast(`⏭️ ${card.es}`, '');
  nextTyping();
}

function nextTyping() {
  gameState.idx++;
  if(gameState.idx >= gameState.cards.length) {
    showResults('typing', gameState.score, gameState.cards.length * 20, gameState.mistakes);
  } else { renderTyping(); }
}

function levenshtein(a,b){
  const m=a.length,n=b.length,dp=Array.from({length:m+1},(_,i)=>[i,...Array(n).fill(0)]);
  for(let j=0;j<=n;j++)dp[0][j]=j;
  for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[m][n];
}

// ═══════════════════════════════════════════════
// CONJUGATION (AI-POWERED)
// ═══════════════════════════════════════════════
function initConjugation() {
  const sel = document.getElementById('conj-verb-select');
  sel.innerHTML = '';
  // All verbs + some from vocab that look like verbs
  const allVerbs = DATA.filter(w => {
    const base = w.es.toLowerCase().trim().split(' ')[0];
    return /ar$|er$|ir$/.test(base) && w.es.length < 18;
  });
  allVerbs.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.es;
    opt.textContent = v.es + ' (' + v.fr + ')';
    sel.appendChild(opt);
  });
  showScreen('screen-conjugation');
}

async function loadConjugation() {
  const verb = document.getElementById('conj-verb-select').value;
  const tense = document.getElementById('conj-tense-select').value;
  const content = document.getElementById('conj-content');
  content.innerHTML = '<div class="ai-loading"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span style="margin-left:.5rem;font-size:.9rem">Claude génère la conjugaison…</span></div>';

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Conjugue le verbe espagnol "${verb}" au ${tense}. 
Réponds UNIQUEMENT en JSON valide, sans markdown, sans explication, exactement ce format :
{
  "verb": "${verb}",
  "tense": "${tense}",
  "forms": [
    {"pronoun":"yo","form":"..."},
    {"pronoun":"tú","form":"..."},
    {"pronoun":"él/ella/Ud.","form":"..."},
    {"pronoun":"nosotros","form":"..."},
    {"pronoun":"vosotros","form":"..."},
    {"pronoun":"ellos/ellas/Uds.","form":"..."}
  ],
  "note": "une note courte sur ce temps ou ce verbe (irrégularités, usage, etc.) en français"
}`
        }]
      })
    });
    const data = await res.json();
    const raw = data.content[0].text.trim().replace(/```json|```/g,'').trim();
    const conj = JSON.parse(raw);
    renderConjGame(conj);
  } catch(e) {
    content.innerHTML = '<div style="color:var(--error)">Erreur de génération. Vérifie ta connexion.</div>';
  }
}

function renderConjGame(conj) {
  const content = document.getElementById('conj-content');
  // Hide 3 random forms, user must fill them
  const hidden = shuffle([0,1,2,3,4,5]).slice(0,3);
  
  let html = `
    <div class="conj-tense-badge">${conj.tense}</div>
    <div style="font-family:'Unbounded',sans-serif;font-size:1.3rem;margin-bottom:1.2rem">${conj.verb}</div>
    <table class="conj-table">
      <thead><tr><th>Pronom</th><th>Forme</th></tr></thead>
      <tbody>
  `;
  conj.forms.forEach((f, i) => {
    if(hidden.includes(i)) {
      html += `<tr><td>${f.pronoun}</td><td><input class="conj-input" data-answer="${f.form}" data-idx="${i}" placeholder="?" autocomplete="off" spellcheck="false"></td></tr>`;
    } else {
      html += `<tr><td>${f.pronoun}</td><td style="font-weight:500;color:var(--accent3)">${f.form}</td></tr>`;
    }
  });
  html += `</tbody></table>`;
  if(conj.note) html += `<div style="font-size:.82rem;color:var(--muted);font-style:italic;margin-top:.5rem">💡 ${conj.note}</div>`;
  html += `<div class="btn-row" style="margin-top:1rem"><button class="btn btn-primary" onclick="checkConj()">Vérifier</button></div>`;
  html += `<div id="conj-feedback" style="margin-top:.8rem"></div>`;
  
  content.innerHTML = html;
  
  // Enter key support
  content.querySelectorAll('.conj-input').forEach(inp => {
    inp.addEventListener('keydown', e => { if(e.key==='Enter') checkConj(); });
  });
}

function checkConj() {
  const inputs = document.querySelectorAll('.conj-input');
  let correct = 0;
  inputs.forEach(inp => {
    const answer = normalize(inp.dataset.answer);
    const attempt = normalize(inp.value);
    if(attempt === answer || levenshtein(attempt,answer) <= 1) {
      inp.classList.remove('wrong'); inp.classList.add('correct');
      inp.value = inp.dataset.answer;
      correct++;
    } else {
      inp.classList.remove('correct'); inp.classList.add('wrong');
    }
  });
  const fb = document.getElementById('conj-feedback');
  if(correct === inputs.length) {
    addXP(30);
    fb.innerHTML = '<div style="color:var(--success);font-weight:500">🎉 Parfait ! +30 XP</div>';
    document.getElementById('conj-score').textContent = state.xp + ' XP';
  } else {
    fb.innerHTML = `<div style="color:var(--error)">${correct}/${inputs.length} corrects. Corrige les rouges !</div>`;
  }
}

// ═══════════════════════════════════════════════
// SPEED MODE
// ═══════════════════════════════════════════════
let speedTimer = null;
let speedTimeLeft = 15;

function initSpeed() {
  const cards = shuffle(DATA);
  gameState = { cards, idx: 0, score: 0 };
  showScreen('screen-speed');
  renderSpeed();
  document.getElementById('speed-input').addEventListener('keydown', e => { if(e.key==='Enter') speedCheck(); });
}

function renderSpeed() {
  const card = gameState.cards[gameState.idx];
  document.getElementById('speed-word').textContent = card.fr;
  const inp = document.getElementById('speed-input');
  inp.value = ''; inp.className = 'type-input'; inp.focus();
  setProgress('speed-progress', gameState.idx, gameState.cards.length);
  document.getElementById('speed-score').textContent = gameState.score + ' pts';
  startSpeedTimer();
}

function startSpeedTimer() {
  clearInterval(speedTimer);
  speedTimeLeft = 15;
  const fill = document.getElementById('speed-timer');
  fill.style.width = '100%';
  speedTimer = setInterval(() => {
    speedTimeLeft -= .1;
    fill.style.width = (speedTimeLeft / 15 * 100) + '%';
    if(speedTimeLeft <= 0) {
      clearInterval(speedTimer);
      const card = gameState.cards[gameState.idx];
      showToast(`⏰ ${card.es}`, 'wrong-toast');
      gameState.idx++;
      if(gameState.idx >= gameState.cards.length) {
        showResults('speed', gameState.score, gameState.cards.length * 30, []);
      } else { renderSpeed(); }
    }
  }, 100);
}

function speedCheck() {
  const card = gameState.cards[gameState.idx];
  const inp = document.getElementById('speed-input');
  const attempt = normalize(inp.value);
  if(!attempt) return;
  clearInterval(speedTimer);
  const correct = normalize(card.es);
  const timeBonus = Math.round(speedTimeLeft / 15 * 20);
  if(attempt === correct || levenshtein(attempt, correct) <= 1) {
    const pts = 10 + timeBonus;
    gameState.score += pts;
    addXP(pts);
    showToast(`⚡ +${pts} pts`, 'correct-toast');
  } else {
    showToast(`❌ ${card.es}`, 'wrong-toast');
  }
  gameState.idx++;
  if(gameState.idx >= gameState.cards.length) {
    showResults('speed', gameState.score, gameState.cards.length * 30, []);
  } else { setTimeout(renderSpeed, 500); }
}

function stopSpeed() { clearInterval(speedTimer); }

// ═══════════════════════════════════════════════
// SURVIVAL
// ═══════════════════════════════════════════════
function initSurvival() {
  const cards = shuffle(DATA);
  gameState = { cards, idx: 0, score: 0, lives: 3 };
  showScreen('screen-survival');
  renderSurvival();
}

function renderSurvival() {
  const {cards, idx, lives} = gameState;
  const card = cards[idx % cards.length];
  document.getElementById('survival-word').textContent = card.es;
  document.getElementById('survival-score').textContent = gameState.score;
  document.getElementById('survival-lives').textContent = '❤️'.repeat(lives) + '🖤'.repeat(3-lives);
  setProgress('speed-progress', idx, 30);

  const others = shuffle(DATA.filter(w => w.es !== card.es)).slice(0, 3);
  const opts = shuffle([card, ...others]);
  const cont = document.getElementById('survival-options');
  cont.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.fr;
    btn.addEventListener('click', () => checkSurvival(btn, opt, card));
    cont.appendChild(btn);
  });
}

function checkSurvival(btn, chosen, correct) {
  const btns = document.querySelectorAll('#survival-options .option-btn');
  btns.forEach(b => b.disabled = true);
  if(chosen.es === correct.es) {
    btn.classList.add('correct');
    gameState.score += 10;
    addXP(10);
    showToast(`✅ +10`, 'correct-toast');
    setTimeout(() => { gameState.idx++; renderSurvival(); }, 600);
  } else {
    btn.classList.add('wrong');
    btns.forEach(b => { if(b.textContent === correct.fr) b.classList.add('correct'); });
    gameState.lives--;
    document.getElementById('survival-lives').textContent = '❤️'.repeat(gameState.lives) + '🖤'.repeat(3-gameState.lives);
    showToast(`💔 ${correct.es} = ${correct.fr}`, 'wrong-toast');
    if(gameState.lives <= 0) {
      setTimeout(() => showResults('survival', gameState.score, 999, []), 1500);
    } else {
      setTimeout(() => { gameState.idx++; renderSurvival(); }, 1500);
    }
  }
}

// ═══════════════════════════════════════════════
// AI TIP
// ═══════════════════════════════════════════════
async function getAITip(card, areaId) {
  const area = document.getElementById(areaId);
  if(!area) return;
  area.innerHTML = `
    <div class="ai-bubble">
      <div class="ai-badge">✨ Claude</div>
      <div class="ai-loading"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span style="margin-left:.5rem">Astuce…</span></div>
    </div>`;
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Le mot espagnol "${card.es}" signifie "${card.fr}" en français. 
Donne-moi en 2-3 phrases : une astuce mnémotechnique ORIGINALE pour retenir ce mot, un exemple de phrase courte en espagnol avec sa traduction, et si c'est un verbe, sa conjugaison au présent pour yo/tú. Sois concis, utile et engageant. Réponds en français.`
        }]
      })
    });
    const data = await res.json();
    const text = data.content[0].text;
    area.innerHTML = `<div class="ai-bubble"><div class="ai-badge">✨ Claude</div>${text}</div>`;
  } catch(e) {
    area.innerHTML = '';
  }
}

// ═══════════════════════════════════════════════
// RESULTS
// ═══════════════════════════════════════════════
function showResults(game, score, maxScore, mistakes) {
  stopSpeed();
  const pct = Math.round(Math.min(score/maxScore, 1)*100);
  const correct = Math.round(pct/100 * (mistakes.length + Math.round(pct/100*20)));
  
  document.getElementById('result-ring').style.setProperty('--pct', pct+'%');
  document.getElementById('result-pct').textContent = pct+'%';
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent = mistakes.length;
  document.getElementById('res-xp').textContent = '+' + score;

  // Trigger celebration based on score
  setTimeout(() => { try { celebrate(pct); } catch(e) {} }, 300);

  const emojis = pct >= 80 ? '🏆' : pct >= 60 ? '💪' : '📚';
  const titles = pct >= 80 ? 'Excellent !' : pct >= 60 ? 'Bien joué !' : 'Continue comme ça !';
  document.getElementById('result-emoji').textContent = emojis;
  document.getElementById('result-title').textContent = titles;

  if(mistakes.length > 0) {
    const sec = document.getElementById('mistakes-section');
    sec.style.display = 'block';
    const list = document.getElementById('mistakes-list');
    list.innerHTML = mistakes.map(m => `
      <div class="mistake-row">
        <span class="mistake-es">${m.es}</span>
        <span class="mistake-fr">${m.fr}</span>
      </div>`).join('');
  } else {
    document.getElementById('mistakes-section').style.display = 'none';
  }

  document.getElementById('result-replay-btn').onclick = () => {
    if(game === 'shuffle') openShuffle(shufState.lang);
    else startGame(game);
  };
  showScreen('screen-results');
}

// ═══════════════════════════════════════════════
// DÉFI DES TEMPS
// ═══════════════════════════════════════════════
let tdState = {
  exercises: [],     // [{tense, verb, pronoun, sentence, answer, translation, hint}]
  idx: 0,
  score: 0,
  streak: 0,
  mistakes: [],
  selectedTenses: ['présent'],
  count: 5,
};

function initTD() {
  showScreen('screen-tempsdefi');
  document.getElementById('td-setup').style.display = 'block';
  document.getElementById('td-game').style.display = 'none';
  document.getElementById('td-loading').style.display = 'none';

  // Tense selector toggle
  document.querySelectorAll('#td-tense-selector .tense-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if(this.dataset.tense === 'mélange') {
        document.querySelectorAll('#td-tense-selector .tense-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        tdState.selectedTenses = ['mélange'];
      } else {
        const mel = document.querySelector('#td-tense-selector .tense-btn[data-tense="mélange"]');
        mel.classList.remove('active');
        this.classList.toggle('active');
        tdState.selectedTenses = [...document.querySelectorAll('#td-tense-selector .tense-btn.active')].map(b => b.dataset.tense);
        if(tdState.selectedTenses.length === 0) { this.classList.add('active'); tdState.selectedTenses = [this.dataset.tense]; }
      }
    });
  });
  tdState.count = 5;
  tdState.selectedTenses = ['présent'];
}

function setTDCount(n, btn) {
  tdState.count = n;
  document.querySelectorAll('[id^="td-q"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

const TENSE_LABELS = {
  'présent': 'Présent',
  'prétérit': 'Prétérit',
  'imparfait': 'Imparfait',
  'futur': 'Futur simple',
  'conditionnel': 'Conditionnel',
  'subjonctif présent': 'Subjonctif présent',
};

const TENSE_COLORS = {
  'présent': '#00f5d4',
  'prétérit': '#ff4d6d',
  'imparfait': '#ffd60a',
  'futur': '#4cc9f0',
  'conditionnel': '#c77dff',
  'subjonctif présent': '#ff9f1c',
  'mélange': '#a8ff78',
};

async function startTD() {
  const tenses = tdState.selectedTenses;
  const count = tdState.count;

  // Build a list of tense assignments
  const allTenses = tenses[0] === 'mélange'
    ? ['présent','prétérit','imparfait','futur','conditionnel','subjonctif présent']
    : tenses;

  // Pick random verbs from deck
  const allVerbs = DATA.filter(w => {
    const base = w.es.toLowerCase().trim().split(' ')[0];
    return /ar$|er$|ir$/.test(base) && w.es.length < 18 && !w.es.includes(',');
  });

  if(allVerbs.length < 3) {
    document.getElementById('td-preload-msg').textContent = 'Pas assez de verbes dans le deck.';
    return;
  }

  const assignments = [];
  for(let i = 0; i < count; i++) {
    const verb = allVerbs[Math.floor(Math.random() * allVerbs.length)];
    const tense = allTenses[i % allTenses.length];
    assignments.push({ verb, tense });
  }

  document.getElementById('td-setup').style.display = 'none';
  document.getElementById('td-loading').style.display = 'block';

  const pronouns = ['yo','tú','él','ella','nosotros','vosotros','ellos'];

  // Build prompt for batch generation
  const batchPrompt = assignments.map((a, i) => {
    const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    return `${i+1}. Verbe: "${a.verb.es}" (${a.verb.fr}), Temps: ${a.tense}, Pronom: ${pronoun}`;
  }).join('\n');

  try {
    document.getElementById('td-loading-msg').textContent = `Claude génère ${count} phrases contextuelles…`;

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Tu es un prof d'espagnol. Pour chaque entrée ci-dessous, génère un exercice à trou.
Règles strictes :
- La phrase doit être naturelle, courte (8-15 mots), utilisant le verbe conjugué au temps et pronom indiqué
- Remplace la forme conjuguée par "___"
- Fournis : la forme correcte, la traduction française de la phrase, un indice grammatical court (1 ligne)
- Réponds UNIQUEMENT en JSON valide, tableau de ${assignments.length} objets, sans markdown ni backticks :
[{"tense":"...","verb":"...","pronoun":"...","sentence":"...phrase avec ___...","answer":"...forme conjuguée...","translation":"...traduction FR...","hint":"...indice grammatical en FR..."}]

Entrées :
${batchPrompt}`
        }]
      })
    });

    const data = await res.json();
    const raw = data.content[0].text.trim().replace(/```json|```/g,'').trim();
    const exercises = JSON.parse(raw);

    tdState.exercises = exercises;
    tdState.idx = 0;
    tdState.score = 0;
    tdState.streak = 0;
    tdState.mistakes = [];

    document.getElementById('td-loading').style.display = 'none';
    document.getElementById('td-game').style.display = 'block';
    renderTD();

    document.getElementById('td-input').addEventListener('keydown', function handler(e) {
      if(e.key === 'Enter') tdCheck();
    });

  } catch(e) {
    document.getElementById('td-loading').style.display = 'none';
    document.getElementById('td-setup').style.display = 'block';
    document.getElementById('td-preload-msg').innerHTML = '<span style="color:var(--error)">Erreur de génération. Réessaie.</span>';
  }
}

function renderTD() {
  const ex = tdState.exercises[tdState.idx];
  const total = tdState.exercises.length;

  // Progress
  setProgress('td-progress', tdState.idx, total);
  document.getElementById('td-qcounter').textContent = `${tdState.idx + 1} / ${total}`;
  document.getElementById('td-score').textContent = tdState.score + ' pts';
  document.getElementById('td-streak').textContent = tdState.streak;

  // Tense badge
  const badge = document.getElementById('td-tense-badge');
  const color = TENSE_COLORS[ex.tense] || '#a8ff78';
  badge.textContent = TENSE_LABELS[ex.tense] || ex.tense;
  badge.style.background = `color-mix(in srgb, ${color} 15%, transparent)`;
  badge.style.color = color;
  badge.style.borderColor = `color-mix(in srgb, ${color} 40%, transparent)`;

  // Sentence — highlight the blank
  const sentenceEl = document.getElementById('td-sentence');
  const parts = ex.sentence.split('___');
  sentenceEl.innerHTML = parts[0] +
    `<span style="display:inline-block;min-width:80px;border-bottom:2px solid ${color};color:${color};font-weight:700;padding:0 4px">___</span>` +
    (parts[1] || '');

  // Clues: verb + pronoun
  document.getElementById('td-clues').innerHTML = `
    <span class="pronoun-tag" style="color:var(--text)">👤 ${ex.pronoun}</span>
    <span class="pronoun-tag">🔧 ${ex.verb} (${ex.translation ? '' : ''}infinitif)</span>
    <span class="pronoun-tag" style="color:${color}">🕐 ${TENSE_LABELS[ex.tense] || ex.tense}</span>
  `;

  // Translation
  document.getElementById('td-translation').textContent = '🇫🇷 ' + ex.translation;

  // Hint
  const inp = document.getElementById('td-input');
  inp.value = '';
  inp.className = 'type-input';
  inp.placeholder = ex.hint ? `Indice : ${ex.hint}` : 'Écris la forme conjuguée…';
  inp.focus();

  // Clear feedback
  document.getElementById('td-feedback').innerHTML = '';
}

function tdCheck() {
  const ex = tdState.exercises[tdState.idx];
  const inp = document.getElementById('td-input');
  const attempt = normalize(inp.value);
  const correct = normalize(ex.answer);
  if(!attempt) return;

  if(attempt === correct || levenshtein(attempt, correct) <= 1) {
    inp.classList.add('correct');
    inp.value = ex.answer; // show exact form
    tdState.streak++;
    const bonus = 10 + Math.min(tdState.streak - 1, 4) * 5;
    tdState.score += bonus;
    addXP(bonus);
    showToast(`✅ ${ex.answer} · +${bonus} pts`, 'correct-toast');
    document.getElementById('td-score').textContent = tdState.score + ' pts';
    document.getElementById('td-streak').textContent = tdState.streak;

    // Show correct sentence
    document.getElementById('td-feedback').innerHTML = `
      <div class="ai-bubble" style="text-align:left">
        <div class="ai-badge">✅ Correct</div>
        <div style="margin-top:.3rem">
          <strong style="color:var(--success)">${ex.sentence.replace('___', ex.answer)}</strong><br>
          <span style="color:var(--muted);font-size:.85rem">${ex.translation}</span>
        </div>
      </div>`;
    setTimeout(nextTD, 1400);
  } else {
    inp.classList.add('wrong');
    tdState.streak = 0;
    tdState.mistakes.push(ex);
    showToast(`❌ → ${ex.answer}`, 'wrong-toast');

    // Show correction + AI explanation
    document.getElementById('td-feedback').innerHTML = `
      <div class="ai-bubble" style="text-align:left">
        <div class="ai-badge">❌ Correction</div>
        <div style="margin-top:.3rem">
          <strong style="color:var(--error)">${ex.sentence.replace('___', ex.answer)}</strong><br>
          <span style="color:var(--muted);font-size:.85rem">${ex.translation}</span>
        </div>
      </div>`;
    getTDExplanation(ex);
    setTimeout(nextTD, 3500);
  }
}

function tdSkip() {
  const ex = tdState.exercises[tdState.idx];
  tdState.streak = 0;
  tdState.mistakes.push(ex);
  showToast(`⏭ ${ex.answer}`, '');
  nextTD();
}

function nextTD() {
  tdState.idx++;
  if(tdState.idx >= tdState.exercises.length) {
    showResults('tempsdefi', tdState.score, tdState.exercises.length * 25, tdState.mistakes);
  } else {
    renderTD();
  }
}

async function getTDExplanation(ex) {
  const area = document.getElementById('td-feedback');
  // Append loading indicator
  const div = document.createElement('div');
  div.className = 'ai-bubble';
  div.style.textAlign = 'left';
  div.innerHTML = `<div class="ai-badge">✨ Claude explique</div><div class="ai-loading" style="margin-top:.4rem"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`;
  area.appendChild(div);

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `En espagnol, la bonne réponse est "${ex.answer}" pour le verbe "${ex.verb}" au ${ex.tense}, pronom "${ex.pronoun}".
Explique en 2-3 phrases courtes pourquoi cette forme est correcte, la règle de conjugaison applicable, et un moyen de retenir cette forme. Réponds en français, de façon concise et pédagogique.`
        }]
      })
    });
    const data = await res.json();
    div.innerHTML = `<div class="ai-badge">✨ Claude explique</div><div style="margin-top:.4rem">${data.content[0].text}</div>`;
  } catch(e) {
    div.remove();
  }
}

// ═══════════════════════════════════════════════
// CONJUGATION DATABASE (offline)
// ═══════════════════════════════════════════════
// Structure: CONJ_DB[verb][tense] = [yo,tú,él,nosotros,vosotros,ellos]
const PRONOUNS = ['yo','tú','él/ella','nosotros','vosotros','ellos/ellas'];

const CONJ_DB = {
  // ── ÊTRE / AVOIR essentiels ──
  "ser":      { presente:["soy","eres","es","somos","sois","son"], preterito:["fui","fuiste","fue","fuimos","fuisteis","fueron"], imperfecto:["era","eras","era","éramos","erais","eran"], futuro:["seré","serás","será","seremos","seréis","serán"], condicional:["sería","serías","sería","seríamos","seríais","serían"], subjuntivo:["sea","seas","sea","seamos","seáis","sean"] },
  "estar":    { presente:["estoy","estás","está","estamos","estáis","están"], preterito:["estuve","estuviste","estuvo","estuvimos","estuvisteis","estuvieron"], imperfecto:["estaba","estabas","estaba","estábamos","estabais","estaban"], futuro:["estaré","estarás","estará","estaremos","estaréis","estarán"], condicional:["estaría","estarías","estaría","estaríamos","estaríais","estarían"], subjuntivo:["esté","estés","esté","estemos","estéis","estén"] },
  "haber":    { presente:["he","has","ha","hemos","habéis","han"], preterito:["hube","hubiste","hubo","hubimos","hubisteis","hubieron"], imperfecto:["había","habías","había","habíamos","habíais","habían"], futuro:["habré","habrás","habrá","habremos","habréis","habrán"], condicional:["habría","habrías","habría","habríamos","habríais","habrían"], subjuntivo:["haya","hayas","haya","hayamos","hayáis","hayan"] },
  // ── Verbes très fréquents ──
  "tener":    { presente:["tengo","tienes","tiene","tenemos","tenéis","tienen"], preterito:["tuve","tuviste","tuvo","tuvimos","tuvisteis","tuvieron"], imperfecto:["tenía","tenías","tenía","teníamos","teníais","tenían"], futuro:["tendré","tendrás","tendrá","tendremos","tendréis","tendrán"], condicional:["tendría","tendrías","tendría","tendríamos","tendríais","tendrían"], subjuntivo:["tenga","tengas","tenga","tengamos","tengáis","tengan"] },
  "hacer":    { presente:["hago","haces","hace","hacemos","hacéis","hacen"], preterito:["hice","hiciste","hizo","hicimos","hicisteis","hicieron"], imperfecto:["hacía","hacías","hacía","hacíamos","hacíais","hacían"], futuro:["haré","harás","hará","haremos","haréis","harán"], condicional:["haría","harías","haría","haríamos","haríais","harían"], subjuntivo:["haga","hagas","haga","hagamos","hagáis","hagan"] },
  "ir":       { presente:["voy","vas","va","vamos","vais","van"], preterito:["fui","fuiste","fue","fuimos","fuisteis","fueron"], imperfecto:["iba","ibas","iba","íbamos","ibais","iban"], futuro:["iré","irás","irá","iremos","iréis","irán"], condicional:["iría","irías","iría","iríamos","iríais","irían"], subjuntivo:["vaya","vayas","vaya","vayamos","vayáis","vayan"] },
  "poder":    { presente:["puedo","puedes","puede","podemos","podéis","pueden"], preterito:["pude","pudiste","pudo","pudimos","pudisteis","pudieron"], imperfecto:["podía","podías","podía","podíamos","podíais","podían"], futuro:["podré","podrás","podrá","podremos","podréis","podrán"], condicional:["podría","podrías","podría","podríamos","podríais","podrían"], subjuntivo:["pueda","puedas","pueda","podamos","podáis","puedan"] },
  "querer":   { presente:["quiero","quieres","quiere","queremos","queréis","quieren"], preterito:["quise","quisiste","quiso","quisimos","quisisteis","quisieron"], imperfecto:["quería","querías","quería","queríamos","queríais","querían"], futuro:["querré","querrás","querrá","querremos","querréis","querrán"], condicional:["querría","querrías","querría","querríamos","querríais","querrían"], subjuntivo:["quiera","quieras","quiera","queramos","queráis","quieran"] },
  "saber":    { presente:["sé","sabes","sabe","sabemos","sabéis","saben"], preterito:["supe","supiste","supo","supimos","supisteis","supieron"], imperfecto:["sabía","sabías","sabía","sabíamos","sabíais","sabían"], futuro:["sabré","sabrás","sabrá","sabremos","sabréis","sabrán"], condicional:["sabría","sabrías","sabría","sabríamos","sabríais","sabrían"], subjuntivo:["sepa","sepas","sepa","sepamos","sepáis","sepan"] },
  "venir":    { presente:["vengo","vienes","viene","venimos","venís","vienen"], preterito:["vine","viniste","vino","vinimos","vinisteis","vinieron"], imperfecto:["venía","venías","venía","veníamos","veníais","venían"], futuro:["vendré","vendrás","vendrá","vendremos","vendréis","vendrán"], condicional:["vendría","vendrías","vendría","vendríamos","vendríais","vendrían"], subjuntivo:["venga","vengas","venga","vengamos","vengáis","vengan"] },
  "poner":    { presente:["pongo","pones","pone","ponemos","ponéis","ponen"], preterito:["puse","pusiste","puso","pusimos","pusisteis","pusieron"], imperfecto:["ponía","ponías","ponía","poníamos","poníais","ponían"], futuro:["pondré","pondrás","pondrá","pondremos","pondréis","pondrán"], condicional:["pondría","pondrías","pondría","pondríamos","pondríais","pondrían"], subjuntivo:["ponga","pongas","ponga","pongamos","pongáis","pongan"] },
  "decir":    { presente:["digo","dices","dice","decimos","decís","dicen"], preterito:["dije","dijiste","dijo","dijimos","dijisteis","dijeron"], imperfecto:["decía","decías","decía","decíamos","decíais","decían"], futuro:["diré","dirás","dirá","diremos","diréis","dirán"], condicional:["diría","dirías","diría","diríamos","diríais","dirían"], subjuntivo:["diga","digas","diga","digamos","digáis","digan"] },
  "ver":      { presente:["veo","ves","ve","vemos","veis","ven"], preterito:["vi","viste","vio","vimos","visteis","vieron"], imperfecto:["veía","veías","veía","veíamos","veíais","veían"], futuro:["veré","verás","verá","veremos","veréis","verán"], condicional:["vería","verías","vería","veríamos","veríais","verían"], subjuntivo:["vea","veas","vea","veamos","veáis","vean"] },
  "dar":      { presente:["doy","das","da","damos","dais","dan"], preterito:["di","diste","dio","dimos","disteis","dieron"], imperfecto:["daba","dabas","daba","dábamos","dabais","daban"], futuro:["daré","darás","dará","daremos","daréis","darán"], condicional:["daría","darías","daría","daríamos","daríais","darían"], subjuntivo:["dé","des","dé","demos","deis","den"] },
  "salir":    { presente:["salgo","sales","sale","salimos","salís","salen"], preterito:["salí","saliste","salió","salimos","salisteis","salieron"], imperfecto:["salía","salías","salía","salíamos","salíais","salían"], futuro:["saldré","saldrás","saldrá","saldremos","saldréis","saldrán"], condicional:["saldría","saldrías","saldría","saldríamos","saldríais","saldrían"], subjuntivo:["salga","salgas","salga","salgamos","salgáis","salgan"] },
  // ── Verbes du deck ──
  "hablar":   { presente:["hablo","hablas","habla","hablamos","habláis","hablan"], preterito:["hablé","hablaste","habló","hablamos","hablasteis","hablaron"], imperfecto:["hablaba","hablabas","hablaba","hablábamos","hablabais","hablaban"], futuro:["hablaré","hablarás","hablará","hablaremos","hablaréis","hablarán"], condicional:["hablaría","hablarías","hablaría","hablaríamos","hablaríais","hablarían"], subjuntivo:["hable","hables","hable","hablemos","habléis","hablen"] },
  "comer":    { presente:["como","comes","come","comemos","coméis","comen"], preterito:["comí","comiste","comió","comimos","comisteis","comieron"], imperfecto:["comía","comías","comía","comíamos","comíais","comían"], futuro:["comeré","comerás","comerá","comeremos","comeréis","comerán"], condicional:["comería","comerías","comería","comeríamos","comeríais","comerían"], subjuntivo:["coma","comas","coma","comamos","comáis","coman"] },
  "vivir":    { presente:["vivo","vives","vive","vivimos","vivís","viven"], preterito:["viví","viviste","vivió","vivimos","vivisteis","vivieron"], imperfecto:["vivía","vivías","vivía","vivíamos","vivíais","vivían"], futuro:["viviré","vivirás","vivirá","viviremos","viviréis","vivirán"], condicional:["viviría","vivirías","viviría","viviríamos","viviríais","vivirían"], subjuntivo:["viva","vivas","viva","vivamos","viváis","vivan"] },
  "trabajar": { presente:["trabajo","trabajas","trabaja","trabajamos","trabajáis","trabajan"], preterito:["trabajé","trabajaste","trabajó","trabajamos","trabajasteis","trabajaron"], imperfecto:["trabajaba","trabajabas","trabajaba","trabajábamos","trabajabais","trabajaban"], futuro:["trabajaré","trabajarás","trabajará","trabajaremos","trabajaréis","trabajarán"], condicional:["trabajaría","trabajarías","trabajaría","trabajaríamos","trabajaríais","trabajarían"], subjuntivo:["trabaje","trabajes","trabaje","trabajemos","trabajéis","trabajen"] },
  "empezar":  { presente:["empiezo","empiezas","empieza","empezamos","empezáis","empiezan"], preterito:["empecé","empezaste","empezó","empezamos","empezasteis","empezaron"], imperfecto:["empezaba","empezabas","empezaba","empezábamos","empezabais","empezaban"], futuro:["empezaré","empezarás","empezará","empezaremos","empezaréis","empezarán"], condicional:["empezaría","empezarías","empezaría","empezaríamos","empezaríais","empezarían"], subjuntivo:["empiece","empieces","empiece","empecemos","empecéis","empiecen"] },
  "cenar":    { presente:["ceno","cenas","cena","cenamos","cenáis","cenan"], preterito:["cené","cenaste","cenó","cenamos","cenasteis","cenaron"], imperfecto:["cenaba","cenabas","cenaba","cenábamos","cenabais","cenaban"], futuro:["cenaré","cenarás","cenará","cenaremos","cenaréis","cenarán"], condicional:["cenaría","cenarías","cenaría","cenaríamos","cenaríais","cenarían"], subjuntivo:["cene","cenes","cene","cenemos","cenéis","cenen"] },
  "quedar":   { presente:["quedo","quedas","queda","quedamos","quedáis","quedan"], preterito:["quedé","quedaste","quedó","quedamos","quedasteis","quedaron"], imperfecto:["quedaba","quedabas","quedaba","quedábamos","quedabais","quedaban"], futuro:["quedaré","quedarás","quedará","quedaremos","quedaréis","quedarán"], condicional:["quedaría","quedarías","quedaría","quedaríamos","quedaríais","quedarían"], subjuntivo:["quede","quedes","quede","quedemos","quedéis","queden"] },
  "crecer":   { presente:["crezco","creces","crece","crecemos","crecéis","crecen"], preterito:["crecí","creciste","creció","crecimos","crecisteis","crecieron"], imperfecto:["crecía","crecías","crecía","crecíamos","crecíais","crecían"], futuro:["creceré","crecerás","crecerá","creceremos","creceréis","crecerán"], condicional:["crecería","crecerías","crecería","creceríamos","creceríais","crecerían"], subjuntivo:["crezca","crezcas","crezca","crezcamos","crezcáis","crezcan"] },
  "caminar":  { presente:["camino","caminas","camina","caminamos","camináis","caminan"], preterito:["caminé","caminaste","caminó","caminamos","caminasteis","caminaron"], imperfecto:["caminaba","caminabas","caminaba","caminábamos","caminabais","caminaban"], futuro:["caminaré","caminarás","caminará","caminaremos","caminaréis","caminarán"], condicional:["caminaría","caminarías","caminaría","caminaríamos","caminaríais","caminarían"], subjuntivo:["camine","camines","camine","caminemos","caminéis","caminen"] },
  "luchar":   { presente:["lucho","luchas","lucha","luchamos","lucháis","luchan"], preterito:["luché","luchaste","luchó","luchamos","luchasteis","lucharon"], imperfecto:["luchaba","luchabas","luchaba","luchábamos","luchabais","luchaban"], futuro:["lucharé","lucharás","luchará","lucharemos","lucharéis","lucharán"], condicional:["lucharía","lucharías","lucharía","lucharíamos","lucharíais","lucharían"], subjuntivo:["luche","luches","luche","luchemos","luchéis","luchen"] },
  "robar":    { presente:["robo","robas","roba","robamos","robáis","roban"], preterito:["robé","robaste","robó","robamos","robasteis","robaron"], imperfecto:["robaba","robabas","robaba","robábamos","robabais","robaban"], futuro:["robaré","robarás","robará","robaremos","robaréis","robarán"], condicional:["robaría","robarías","robaría","robaríamos","robaríais","robarían"], subjuntivo:["robe","robes","robe","robemos","robéis","roben"] },
  "subir":    { presente:["subo","subes","sube","subimos","subís","suben"], preterito:["subí","subiste","subió","subimos","subisteis","subieron"], imperfecto:["subía","subías","subía","subíamos","subíais","subían"], futuro:["subiré","subirás","subirá","subiremos","subiréis","subirán"], condicional:["subiría","subirías","subiría","subiríamos","subiríais","subirían"], subjuntivo:["suba","subas","suba","subamos","subáis","suban"] },
  "disfrutar":{ presente:["disfruto","disfrutas","disfruta","disfrutamos","disfrutáis","disfrutan"], preterito:["disfruté","disfrutaste","disfrutó","disfrutamos","disfrutasteis","disfrutaron"], imperfecto:["disfrutaba","disfrutabas","disfrutaba","disfrutábamos","disfrutabais","disfrutaban"], futuro:["disfrutaré","disfrutarás","disfrutará","disfrutaremos","disfrutaréis","disfrutarán"], condicional:["disfrutaría","disfrutarías","disfrutaría","disfrutaríamos","disfrutaríais","disfrutarían"], subjuntivo:["disfrute","disfrutes","disfrute","disfrutemos","disfrutéis","disfruten"] },
  "engañar":  { presente:["engaño","engañas","engaña","engañamos","engañáis","engañan"], preterito:["engañé","engañaste","engañó","engañamos","engañasteis","engañaron"], imperfecto:["engañaba","engañabas","engañaba","engañábamos","engañabais","engañaban"], futuro:["engañaré","engañarás","engañará","engañaremos","engañaréis","engañarán"], condicional:["engañaría","engañarías","engañaría","engañaríamos","engañaríais","engañarían"], subjuntivo:["engañe","engañes","engañe","engañemos","engañéis","engañen"] },
  "apoyar":   { presente:["apoyo","apoyas","apoya","apoyamos","apoyáis","apoyan"], preterito:["apoyé","apoyaste","apoyó","apoyamos","apoyasteis","apoyaron"], imperfecto:["apoyaba","apoyabas","apoyaba","apoyábamos","apoyabais","apoyaban"], futuro:["apoyaré","apoyarás","apoyará","apoyaremos","apoyaréis","apoyarán"], condicional:["apoyaría","apoyarías","apoyaría","apoyaríamos","apoyaríais","apoyarían"], subjuntivo:["apoye","apoyes","apoye","apoyemos","apoyéis","apoyen"] },
  "charlar":  { presente:["charlo","charlas","charla","charlamos","charláis","charlan"], preterito:["charlé","charlaste","charló","charlamos","charlasteis","charlaron"], imperfecto:["charlaba","charlabas","charlaba","charlábamos","charlabais","charlaban"], futuro:["charlaré","charlarás","charlará","charlaremos","charlaréis","charlarán"], condicional:["charlaría","charlarías","charlaría","charlaríamos","charlaríais","charlarían"], subjuntivo:["charle","charles","charle","charlemos","charléis","charlen"] },
  "pelear":   { presente:["peleo","peleas","pelea","peleamos","peleáis","pelean"], preterito:["peleé","peleaste","peleó","peleamos","peleasteis","pelearon"], imperfecto:["peleaba","peleabas","peleaba","peleábamos","peleabais","peleaban"], futuro:["pelearé","pelearás","peleará","pelearemos","pelearéis","pelearán"], condicional:["pelearía","pelearías","pelearía","pelearíamos","pelearíais","pelearían"], subjuntivo:["pelee","pelees","pelee","peleemos","peleéis","peleen"] },
  "faltar":   { presente:["falto","faltas","falta","faltamos","faltáis","faltan"], preterito:["falté","faltaste","faltó","faltamos","faltasteis","faltaron"], imperfecto:["faltaba","faltabas","faltaba","faltábamos","faltabais","faltaban"], futuro:["faltaré","faltarás","faltará","faltaremos","faltaréis","faltarán"], condicional:["faltaría","faltarías","faltaría","faltaríamos","faltaríais","faltarían"], subjuntivo:["falte","faltes","falte","faltemos","faltéis","falten"] },
  "animar":   { presente:["animo","animas","anima","animamos","animáis","animan"], preterito:["animé","animaste","animó","animamos","animasteis","animaron"], imperfecto:["animaba","animabas","animaba","animábamos","animabais","animaban"], futuro:["animaré","animarás","animará","animaremos","animaréis","animarán"], condicional:["animaría","animarías","animaría","animaríamos","animaríais","animarían"], subjuntivo:["anime","animes","anime","animemos","animéis","animen"] },
  "agradecer":{ presente:["agradezco","agradeces","agradece","agradecemos","agradecéis","agradecen"], preterito:["agradecí","agradeciste","agradeció","agradecimos","agradecisteis","agradecieron"], imperfecto:["agradecía","agradecías","agradecía","agradecíamos","agradecíais","agradecían"], futuro:["agradeceré","agradecerás","agradecerá","agradeceremos","agradeceréis","agradecerán"], condicional:["agradecería","agradecerías","agradecería","agradeceríamos","agradeceríais","agradecerían"], subjuntivo:["agradezca","agradezcas","agradezca","agradezcamos","agradezcáis","agradezcan"] },
  "deber":    { presente:["debo","debes","debe","debemos","debéis","deben"], preterito:["debí","debiste","debió","debimos","debisteis","debieron"], imperfecto:["debía","debías","debía","debíamos","debíais","debían"], futuro:["deberé","deberás","deberá","deberemos","deberéis","deberán"], condicional:["debería","deberías","debería","deberíamos","deberíais","deberían"], subjuntivo:["deba","debas","deba","debamos","debáis","deban"] },
  // ── Ajouts TikTok ──
  "girarse":  { presente:["me giro","te giras","se gira","nos giramos","os giráis","se giran"], preterito:["me giré","te giraste","se giró","nos giramos","os girasteis","se giraron"], imperfecto:["me giraba","te girabas","se giraba","nos girábamos","os girabais","se giraban"], futuro:["me giraré","te girarás","se girará","nos giraremos","os giraréis","se girarán"], condicional:["me giraría","te girarías","se giraría","nos giraríamos","os giraríais","se girarían"], subjuntivo:["me gire","te gires","se gire","nos giremos","os giréis","se giren"] },
  "agacharse":{ presente:["me agacho","te agachas","se agacha","nos agachamos","os agacháis","se agachan"], preterito:["me agaché","te agachaste","se agachó","nos agachamos","os agachasteis","se agacharon"], imperfecto:["me agachaba","te agachabas","se agachaba","nos agachábamos","os agachabais","se agachaban"], futuro:["me agacharé","te agacharás","se agachará","nos agacharemos","os agacharéis","se agacharán"], condicional:["me agacharía","te agacharías","se agacharía","nos agacharíamos","os agacharíais","se agacharían"], subjuntivo:["me agache","te agaches","se agache","nos agachemos","os agachéis","se agachen"] },
  "coger":    { presente:["cojo","coges","coge","cogemos","cogéis","cogen"], preterito:["cogí","cogiste","cogió","cogimos","cogisteis","cogieron"], imperfecto:["cogía","cogías","cogía","cogíamos","cogíais","cogían"], futuro:["cogeré","cogerás","cogerá","cogeremos","cogeréis","cogerán"], condicional:["cogería","cogerías","cogería","cogeríamos","cogeríais","cogerían"], subjuntivo:["coja","cojas","coja","cojamos","cojáis","cojan"] },
  // ── Session 10 mai 2026 ──
  "acordarse":{ presente:["me acuerdo","te acuerdas","se acuerda","nos acordamos","os acordáis","se acuerdan"], preterito:["me acordé","te acordaste","se acordó","nos acordamos","os acordasteis","se acordaron"], imperfecto:["me acordaba","te acordabas","se acordaba","nos acordábamos","os acordabais","se acordaban"], futuro:["me acordaré","te acordarás","se acordará","nos acordaremos","os acordaréis","se acordarán"], condicional:["me acordaría","te acordarías","se acordaría","nos acordaríamos","os acordaríais","se acordarían"], subjuntivo:["me acuerde","te acuerdes","se acuerde","nos acordemos","os acordéis","se acuerden"] },
  "bajar":    { presente:["bajo","bajas","baja","bajamos","bajáis","bajan"], preterito:["bajé","bajaste","bajó","bajamos","bajasteis","bajaron"], imperfecto:["bajaba","bajabas","bajaba","bajábamos","bajabais","bajaban"], futuro:["bajaré","bajarás","bajará","bajaremos","bajaréis","bajarán"], condicional:["bajaría","bajarías","bajaría","bajaríamos","bajaríais","bajarían"], subjuntivo:["baje","bajes","baje","bajemos","bajéis","bajen"] },
  "meter":    { presente:["meto","metes","mete","metemos","metéis","meten"], preterito:["metí","metiste","metió","metimos","metisteis","metieron"], imperfecto:["metía","metías","metía","metíamos","metíais","metían"], futuro:["meteré","meterás","meterá","meteremos","meteréis","meterán"], condicional:["metería","meterías","metería","meteríamos","meteríais","meterían"], subjuntivo:["meta","metas","meta","metamos","metáis","metan"] },
  "aparcar":  { presente:["aparco","aparcas","aparca","aparcamos","aparcáis","aparcan"], preterito:["aparqué","aparcaste","aparcó","aparcamos","apárcasteis","aparcaron"], imperfecto:["aparcaba","aparcabas","aparcaba","aparcábamos","aparcabais","aparcaban"], futuro:["aparcaré","aparcarás","aparcará","aparcaremos","aparcaréis","aparcarán"], condicional:["aparcaría","aparcarías","aparcaría","aparcaríamos","aparcaríais","aparcarían"], subjuntivo:["aparque","aparques","aparque","aparquemos","aparquéis","aparquen"] },
  "rogar":    { presente:["ruego","ruegas","ruega","rogamos","rogáis","ruegan"], preterito:["rogué","rogaste","rogó","rogamos","rogasteis","rogaron"], imperfecto:["rogaba","rogabas","rogaba","rogábamos","rogabais","rogaban"], futuro:["rogaré","rogarás","rogará","rogaremos","rogaréis","rogarán"], condicional:["rogaría","rogarías","rogaría","rogaríamos","rogaríais","rogarían"], subjuntivo:["ruegue","ruegues","ruegue","roguemos","roguéis","rueguen"] },
  "sacar":    { presente:["saco","sacas","saca","sacamos","sacáis","sacan"], preterito:["saqué","sacaste","sacó","sacamos","sacasteis","sacaron"], imperfecto:["sacaba","sacabas","sacaba","sacábamos","sacabais","sacaban"], futuro:["sacaré","sacarás","sacará","sacaremos","sacaréis","sacarán"], condicional:["sacaría","sacarías","sacaría","sacaríamos","sacaríais","sacarían"], subjuntivo:["saque","saques","saque","saquemos","saquéis","saquen"] },
  "pillar":   { presente:["pillo","pillas","pilla","pillamos","pilláis","pillan"], preterito:["pillé","pillaste","pilló","pillamos","pillasteis","pillaron"], imperfecto:["pillaba","pillabas","pillaba","pillábamos","pillabais","pillaban"], futuro:["pillaré","pillarás","pillará","pillaremos","pillaréis","pillarán"], condicional:["pillaría","pillarías","pillaría","pillaríamos","pillaríais","pillarían"], subjuntivo:["pille","pilles","pille","pillemos","pilléis","pillen"] },
  "seguir":   { presente:["sigo","sigues","sigue","seguimos","seguís","siguen"], preterito:["seguí","seguiste","siguió","seguimos","seguisteis","siguieron"], imperfecto:["seguía","seguías","seguía","seguíamos","seguíais","seguían"], futuro:["seguiré","seguirás","seguirá","seguiremos","seguiréis","seguirán"], condicional:["seguiría","seguirías","seguiría","seguiríamos","seguiríais","seguirían"], subjuntivo:["siga","sigas","siga","sigamos","sigáis","sigan"] },
  "olvidarse":{ presente:["me olvido","te olvidas","se olvida","nos olvidamos","os olvidáis","se olvidan"], preterito:["me olvidé","te olvidaste","se olvidó","nos olvidamos","os olvidasteis","se olvidaron"], imperfecto:["me olvidaba","te olvidabas","se olvidaba","nos olvidábamos","os olvidabais","se olvidaban"], futuro:["me olvidaré","te olvidarás","se olvidará","nos olvidaremos","os olvidaréis","se olvidarán"], condicional:["me olvidaría","te olvidarías","se olvidaría","nos olvidaríamos","os olvidaríais","se olvidarían"], subjuntivo:["me olvide","te olvides","se olvide","nos olvidemos","os olvidéis","se olviden"] },
  // ── Session 11 mai 2026 ──
  "esperar":  { presente:["espero","esperas","espera","esperamos","esperáis","esperan"], preterito:["esperé","esperaste","esperó","esperamos","esperasteis","esperaron"], imperfecto:["esperaba","esperabas","esperaba","esperábamos","esperabais","esperaban"], futuro:["esperaré","esperarás","esperará","esperaremos","esperaréis","esperarán"], condicional:["esperaría","esperarías","esperaría","esperaríamos","esperaríais","esperarían"], subjuntivo:["espere","esperes","espere","esperemos","esperéis","esperen"] },
  "mantener": { presente:["mantengo","mantienes","mantiene","mantenemos","mantenéis","mantienen"], preterito:["mantuve","mantuviste","mantuvo","mantuvimos","mantuvisteis","mantuvieron"], imperfecto:["mantenía","mantenías","mantenía","manteníamos","manteníais","mantenían"], futuro:["mantendré","mantendrás","mantendrá","mantendremos","mantendréis","mantendrán"], condicional:["mantendría","mantendrías","mantendría","mantendríamos","mantendríais","mantendrían"], subjuntivo:["mantenga","mantengas","mantenga","mantengamos","mantengáis","mantengan"] },
  "cerrar":   { presente:["cierro","cierras","cierra","cerramos","cerráis","cierran"], preterito:["cerré","cerraste","cerró","cerramos","cerrasteis","cerraron"], imperfecto:["cerraba","cerrabas","cerraba","cerrábamos","cerrabais","cerraban"], futuro:["cerraré","cerrarás","cerrará","cerraremos","cerraréis","cerrarán"], condicional:["cerraría","cerrarías","cerraría","cerraríamos","cerraríais","cerrarían"], subjuntivo:["cierre","cierres","cierre","cerremos","cerréis","cierren"] },
  "borrar":   { presente:["borro","borras","borra","borramos","borráis","borran"], preterito:["borré","borraste","borró","borramos","borrasteis","borraron"], imperfecto:["borraba","borrabas","borraba","borrábamos","borrabais","borraban"], futuro:["borraré","borrarás","borrará","borraremos","borraréis","borrarán"], condicional:["borraría","borrarías","borraría","borraríamos","borraríais","borrarían"], subjuntivo:["borre","borres","borre","borremos","borréis","borren"] },
  "significar":{ presente:["significo","significas","significa","significamos","significáis","significan"], preterito:["signifiqué","significaste","significó","significamos","significasteis","significaron"], imperfecto:["significaba","significabas","significaba","significábamos","significabais","significaban"], futuro:["significaré","significarás","significará","significaremos","significaréis","significarán"], condicional:["significaría","significarías","significaría","significaríamos","significaríais","significarían"], subjuntivo:["signifique","signifiques","signifique","signifiquemos","signifiquéis","signifiquen"] },
  "levantarse":{ presente:["me levanto","te levantas","se levanta","nos levantamos","os levantáis","se levantan"], preterito:["me levanté","te levantaste","se levantó","nos levantamos","os levantasteis","se levantaron"], imperfecto:["me levantaba","te levantabas","se levantaba","nos levantábamos","os levantabais","se levantaban"], futuro:["me levantaré","te levantarás","se levantará","nos levantaremos","os levantaréis","se levantarán"], condicional:["me levantaría","te levantarías","se levantaría","nos levantaríamos","os levantaríais","se levantarían"], subjuntivo:["me levante","te levantes","se levante","nos levantemos","os levantéis","se levanten"] },
  "moverse":  { presente:["me muevo","te mueves","se mueve","nos movemos","os movéis","se mueven"], preterito:["me moví","te moviste","se movió","nos movimos","os movisteis","se movieron"], imperfecto:["me movía","te movías","se movía","nos movíamos","os movíais","se movían"], futuro:["me moveré","te moverás","se moverá","nos moveremos","os moveréis","se moverán"], condicional:["me movería","te moverías","se movería","nos moveríamos","os moveríais","se moverían"], subjuntivo:["me mueva","te muevas","se mueva","nos movamos","os mováis","se muevan"] },
  "sudar":    { presente:["sudo","sudas","suda","sudamos","sudáis","sudan"], preterito:["sudé","sudaste","sudó","sudamos","sudasteis","sudaron"], imperfecto:["sudaba","sudabas","sudaba","sudábamos","sudabais","sudaban"], futuro:["sudaré","sudarás","sudará","sudaremos","sudaréis","sudarán"], condicional:["sudaría","sudarías","sudaría","sudaríamos","sudaríais","sudarían"], subjuntivo:["sude","sudes","sude","sudemos","sudéis","suden"] },
  "montar":   { presente:["monto","montas","monta","montamos","montáis","montan"], preterito:["monté","montaste","montó","montamos","montasteis","montaron"], imperfecto:["montaba","montabas","montaba","montábamos","montabais","montaban"], futuro:["montaré","montarás","montará","montaremos","montaréis","montarán"], condicional:["montaría","montarías","montaría","montaríamos","montaríais","montarían"], subjuntivo:["monte","montes","monte","montemos","montéis","monten"] },
  "tocar":    { presente:["toco","tocas","toca","tocamos","tocáis","tocan"], preterito:["toqué","tocaste","tocó","tocamos","tocasteis","tocaron"], imperfecto:["tocaba","tocabas","tocaba","tocábamos","tocabais","tocaban"], futuro:["tocaré","tocarás","tocará","tocaremos","tocaréis","tocarán"], condicional:["tocaría","tocarías","tocaría","tocaríamos","tocaríais","tocarían"], subjuntivo:["toque","toques","toque","toquemos","toquéis","toquen"] },
};

const TENSE_LABELS_OFFLINE = {
  presente: 'Présent',
  preterito: 'Prétérit',
  imperfecto: 'Imparfait',
  futuro: 'Futur simple',
  condicional: 'Conditionnel',
  subjuntivo: 'Subjonctif présent',
};
const TENSE_COLORS_OFFLINE = {
  presente: '#00f5d4', preterito: '#ff4d6d', imperfecto: '#ffd60a',
  futuro: '#4cc9f0', condicional: '#c77dff', subjuntivo: '#fb923c',
};

// Verb translation map (from DATA + extras)
const VERB_FR = {};
DATA.forEach(w => { VERB_FR[w.es.toLowerCase()] = w.fr; });
const EXTRA_FR = { ser:"être (identité)",estar:"être (état)",haber:"avoir (aux.)",tener:"avoir/tenir",hacer:"faire",ir:"aller",poder:"pouvoir",querer:"vouloir/aimer",saber:"savoir",venir:"venir",poner:"mettre",decir:"dire",ver:"voir",dar:"donner",salir:"sortir",hablar:"parler",comer:"manger",vivir:"vivre",trabajar:"travailler" };
Object.assign(VERB_FR, EXTRA_FR);

function getVerbFR(v) { return VERB_FR[v.toLowerCase()] || ''; }

const ALL_CONJ_VERBS = Object.keys(CONJ_DB);

// ── TENSE RULE TIPS ──
const TENSE_TIPS = {
  presente: {
    "-ar": ["o","as","a","amos","áis","an"],
    "-er": ["o","es","e","emos","éis","en"],
    "-ir": ["o","es","e","imos","ís","en"],
    note: "Terminaisons régulières : -AR → o/as/a/amos/áis/an | -ER → o/es/e/emos/éis/en | -IR → o/es/e/imos/ís/en"
  },
  preterito: {
    "-ar": ["é","aste","ó","amos","asteis","aron"],
    "-er": ["í","iste","ió","imos","isteis","ieron"],
    "-ir": ["í","iste","ió","imos","isteis","ieron"],
    note: "Prétérit régulier : -AR → é/aste/ó/amos/asteis/aron | -ER/-IR → í/iste/ió/imos/isteis/ieron"
  },
  imperfecto: {
    "-ar": ["aba","abas","aba","ábamos","abais","aban"],
    "-er": ["ía","ías","ía","íamos","íais","ían"],
    "-ir": ["ía","ías","ía","íamos","íais","ían"],
    note: "Imparfait : -AR → aba/abas/aba/ábamos/abais/aban | -ER/-IR → ía/ías/ía/íamos/íais/ían. Très régulier !"
  },
  futuro: {
    note: "Futur : infinitif + é/ás/á/emos/éis/án. Irréguliers : tener→tendr-, hacer→har-, poder→podr-, querer→querr-, saber→sabr-, venir→vendr-"
  },
  condicional: {
    note: "Conditionnel : infinitif + ía/ías/ía/íamos/íais/ían. Même radical irrégulier que le futur."
  },
  subjuntivo: {
    note: "Subjonctif présent : yo présent → enlève -o → +e/es/e/emos/éis/en (-AR) ou +a/as/a/amos/áis/an (-ER/-IR)"
  },
};

// ═══════════════════════════════════════════════
// QCM CONJUGAISON (offline)
// ═══════════════════════════════════════════════
let cqState = { questions:[], idx:0, score:0, streak:0, mistakes:[], count:10, tenses:[] };

function initCQ() {
  cqState.count = 10;
  cqState.tenses = ['presente','preterito','imperfecto','futuro','condicional','subjuntivo'];
  showScreen('screen-conjqcm');
  document.getElementById('cq-setup').style.display = 'block';
  document.getElementById('cq-game').style.display = 'none';

  document.querySelectorAll('#cq-tense-sel .tense-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      cqState.tenses = [...document.querySelectorAll('#cq-tense-sel .tense-btn.active')].map(b => b.dataset.t);
      if(cqState.tenses.length === 0) { this.classList.add('active'); cqState.tenses = [this.dataset.t]; }
    });
  });
}

function setCQCount(n, btn) {
  cqState.count = n;
  document.querySelectorAll('[id^="cq-q"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function startCQ() {
  const questions = [];
  for(let i = 0; i < cqState.count; i++) {
    const verb = ALL_CONJ_VERBS[Math.floor(Math.random() * ALL_CONJ_VERBS.length)];
    const tense = cqState.tenses[Math.floor(Math.random() * cqState.tenses.length)];
    const pIdx = Math.floor(Math.random() * 6);
    const correctForm = CONJ_DB[verb][tense][pIdx];
    // Generate 3 distractors: other forms of same conjugation + forms from other verbs
    const sameConj = CONJ_DB[verb][tense].filter((f,j) => j !== pIdx);
    const otherVerb = ALL_CONJ_VERBS.filter(v => v !== verb)[Math.floor(Math.random() * (ALL_CONJ_VERBS.length-1))];
    const otherForms = CONJ_DB[otherVerb][tense];
    const pool = shuffle([...sameConj, ...otherForms]).filter(f => f !== correctForm);
    const opts = shuffle([correctForm, pool[0], pool[1], pool[2]]);
    questions.push({ verb, tense, pIdx, pronoun: PRONOUNS[pIdx], correct: correctForm, opts });
  }
  cqState.questions = questions;
  cqState.idx = 0; cqState.score = 0; cqState.streak = 0; cqState.mistakes = [];
  document.getElementById('cq-setup').style.display = 'none';
  document.getElementById('cq-game').style.display = 'block';
  renderCQ();
}

function renderCQ() {
  const q = cqState.questions[cqState.idx];
  setProgress('cq-progress', cqState.idx, cqState.questions.length);
  document.getElementById('cq-counter').textContent = `${cqState.idx+1}/${cqState.questions.length}`;
  document.getElementById('cq-score').textContent = cqState.score + ' pts';
  document.getElementById('cq-streak').textContent = cqState.streak;
  document.getElementById('cq-verb').textContent = q.verb;
  document.getElementById('cq-verbfr').textContent = getVerbFR(q.verb);
  document.getElementById('cq-pronoun').textContent = q.pronoun;

  const badge = document.getElementById('cq-tense-badge');
  const color = TENSE_COLORS_OFFLINE[q.tense] || '#fff';
  badge.textContent = TENSE_LABELS_OFFLINE[q.tense];
  badge.style.background = `color-mix(in srgb, ${color} 15%, transparent)`;
  badge.style.color = color;
  badge.style.borderColor = `color-mix(in srgb, ${color} 40%, transparent)`;

  const cont = document.getElementById('cq-options');
  cont.innerHTML = '';
  q.opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => checkCQ(btn, opt, q));
    cont.appendChild(btn);
  });
  document.getElementById('cq-explain').innerHTML = '';
}

function checkCQ(btn, chosen, q) {
  const btns = document.querySelectorAll('#cq-options .option-btn');
  btns.forEach(b => b.disabled = true);
  const tip = TENSE_TIPS[q.tense]?.note || '';
  if(chosen === q.correct) {
    btn.classList.add('correct');
    cqState.streak++;
    const bonus = 10 + Math.min(cqState.streak-1,4)*5;
    cqState.score += bonus;
    addXP(bonus);
    showToast(`✅ ${q.correct} · +${bonus} pts`, 'correct-toast');
    document.getElementById('cq-explain').innerHTML = tip ? `<div class="ai-bubble" style="text-align:left"><div class="ai-badge">📚 Règle</div><div style="margin-top:.3rem;font-size:.85rem">${tip}</div></div>` : '';
    setTimeout(nextCQ, tip ? 1800 : 900);
  } else {
    btn.classList.add('wrong');
    btns.forEach(b => { if(b.textContent === q.correct) b.classList.add('correct'); });
    cqState.streak = 0;
    cqState.mistakes.push({ es: q.verb + ' (' + q.pronoun + ')', fr: q.correct + ' [' + TENSE_LABELS_OFFLINE[q.tense] + ']' });
    showToast(`❌ → ${q.correct}`, 'wrong-toast');
    document.getElementById('cq-explain').innerHTML = `
      <div class="ai-bubble" style="text-align:left">
        <div class="ai-badge">❌ Correction</div>
        <div style="margin-top:.3rem">
          <strong>${q.verb}</strong> (${q.pronoun}) au <strong>${TENSE_LABELS_OFFLINE[q.tense]}</strong> = <strong style="color:var(--success)">${q.correct}</strong><br>
          ${tip ? `<span style="color:var(--muted);font-size:.82rem;margin-top:.4rem;display:block">${tip}</span>` : ''}
        </div>
      </div>`;
    setTimeout(nextCQ, 2800);
  }
}

function nextCQ() {
  cqState.idx++;
  if(cqState.idx >= cqState.questions.length) {
    showResults('conjqcm', cqState.score, cqState.questions.length * 20, cqState.mistakes);
  } else renderCQ();
}

// ═══════════════════════════════════════════════
// TABLEAU À COMPLÉTER (offline)
// ═══════════════════════════════════════════════
let cfState = { verbs:[], idx:0, score:0, tense:'presente', mistakes:[] };

function initCF() {
  showScreen('screen-conjfill');
  document.getElementById('cf-setup').style.display = 'block';
  document.getElementById('cf-game').style.display = 'none';
  cfState.tense = 'presente';

  document.querySelectorAll('#cf-tense-sel .tense-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('#cf-tense-sel .tense-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      cfState.tense = this.dataset.t;
    });
  });
}

function startCF() {
  cfState.verbs = shuffle(ALL_CONJ_VERBS);
  cfState.idx = 0; cfState.score = 0; cfState.mistakes = [];
  document.getElementById('cf-setup').style.display = 'none';
  document.getElementById('cf-game').style.display = 'block';
  renderCF();
}

function renderCF() {
  const verb = cfState.verbs[cfState.idx % cfState.verbs.length];
  const tense = cfState.tense;
  const forms = CONJ_DB[verb][tense];

  document.getElementById('cf-verb').textContent = verb;
  document.getElementById('cf-verbfr').textContent = getVerbFR(verb);
  document.getElementById('cf-counter').textContent = `${cfState.idx+1} / ${cfState.verbs.length}`;
  document.getElementById('cf-score').textContent = cfState.score + ' pts';

  const badge = document.getElementById('cf-tense-badge');
  const color = TENSE_COLORS_OFFLINE[tense] || '#fff';
  badge.textContent = TENSE_LABELS_OFFLINE[tense];
  badge.style.background = `color-mix(in srgb, ${color} 15%, transparent)`;
  badge.style.color = color;
  badge.style.borderColor = `color-mix(in srgb, ${color} 40%, transparent)`;

  // Randomly hide 3 of 6 forms
  const hidden = shuffle([0,1,2,3,4,5]).slice(0,3);
  const tbody = document.getElementById('cf-tbody');
  tbody.innerHTML = '';
  PRONOUNS.forEach((pro, i) => {
    const tr = document.createElement('tr');
    const tdPro = document.createElement('td');
    tdPro.textContent = pro;
    tdPro.style.color = 'var(--muted)';
    const tdForm = document.createElement('td');
    if(hidden.includes(i)) {
      const inp = document.createElement('input');
      inp.className = 'conj-input';
      inp.dataset.answer = forms[i];
      inp.dataset.idx = i;
      inp.placeholder = '?';
      inp.autocomplete = 'off';
      inp.spellcheck = false;
      inp.addEventListener('keydown', e => { if(e.key==='Enter') cfCheck(); });
      tdForm.appendChild(inp);
    } else {
      tdForm.textContent = forms[i];
      tdForm.style.color = color;
      tdForm.style.fontWeight = '600';
    }
    const tdStatus = document.createElement('td');
    tdStatus.id = `cf-s-${i}`;
    tdStatus.style.fontSize = '1.1rem';
    tr.appendChild(tdPro); tr.appendChild(tdForm); tr.appendChild(tdStatus);
    tbody.appendChild(tr);
  });

  document.getElementById('cf-result').innerHTML = '';
  document.getElementById('cf-tip').innerHTML = '';
  // Focus first input
  const first = tbody.querySelector('.conj-input');
  if(first) first.focus();
}

function cfCheck() {
  const inputs = document.querySelectorAll('#cf-tbody .conj-input');
  let correct = 0;
  inputs.forEach(inp => {
    const ans = normalize(inp.dataset.answer);
    const att = normalize(inp.value);
    const statusEl = document.getElementById(`cf-s-${inp.dataset.idx}`);
    if(att === ans || levenshtein(att, ans) <= 1) {
      inp.classList.remove('wrong'); inp.classList.add('correct');
      inp.value = inp.dataset.answer;
      if(statusEl) statusEl.textContent = '✅';
      correct++;
    } else {
      inp.classList.remove('correct'); inp.classList.add('wrong');
      if(statusEl) statusEl.textContent = '❌';
    }
  });
  const total = inputs.length;
  const pts = correct * 5;
  cfState.score += pts;
  addXP(pts);
  document.getElementById('cf-score').textContent = cfState.score + ' pts';

  const tip = TENSE_TIPS[cfState.tense]?.note || '';
  if(correct === total) {
    document.getElementById('cf-result').innerHTML = `<span style="color:var(--success)">🎉 Parfait ! +${pts} pts</span>`;
    document.getElementById('cf-tip').innerHTML = tip ? `<div class="ai-bubble" style="text-align:left"><div class="ai-badge">📚 Règle</div><div style="margin-top:.3rem;font-size:.85rem">${tip}</div></div>` : '';
    setTimeout(nextCF, tip ? 2000 : 900);
  } else {
    document.getElementById('cf-result').innerHTML = `<span style="color:var(--error)">${correct}/${total} correct(s) — corrige les rouges</span>`;
    // Show corrections
    inputs.forEach(inp => {
      if(inp.classList.contains('wrong')) inp.value = inp.dataset.answer;
    });
    document.getElementById('cf-tip').innerHTML = tip ? `<div class="ai-bubble" style="text-align:left"><div class="ai-badge">📚 Règle</div><div style="margin-top:.3rem;font-size:.85rem">${tip}</div></div>` : '';
    // Track mistake
    cfState.mistakes.push({ es: cfState.verbs[cfState.idx % cfState.verbs.length], fr: TENSE_LABELS_OFFLINE[cfState.tense] });
    setTimeout(nextCF, 3000);
  }
}

function cfSkip() {
  // Reveal all
  document.querySelectorAll('#cf-tbody .conj-input').forEach(inp => {
    inp.value = inp.dataset.answer;
    inp.classList.add('wrong');
  });
  cfState.mistakes.push({ es: cfState.verbs[cfState.idx % cfState.verbs.length], fr: TENSE_LABELS_OFFLINE[cfState.tense] });
  setTimeout(nextCF, 1200);
}

function nextCF() {
  cfState.idx++;
  if(cfState.idx >= cfState.verbs.length) {
    showResults('conjfill', cfState.score, cfState.verbs.length * 15, cfState.mistakes);
  } else renderCF();
}

// ═══════════════════════════════════════════════
// LEÇONS : SUBJONCTIF & GÉRONDIF
// ═══════════════════════════════════════════════
let leconScore = 0;

function initLecons() {
  leconScore = 0;
  showScreen('screen-lecons');
  // Reset tabs
  document.querySelectorAll('.lesson-tab').forEach((t,i) => t.classList.toggle('active', i===0));
  showLecon('subjuntivo', document.querySelector('.lesson-tab'));
}

function showLecon(id, btn) {
  document.querySelectorAll('.lesson-tab').forEach(t => t.classList.remove('active'));
  if(btn) btn.classList.add('active');
  const el = document.getElementById('lecon-content');
  if(id === 'subjuntivo') el.innerHTML = leconSubjuntivo();
  else if(id === 'subj-exo') { el.innerHTML = renderExos(EXO_SUBJ); bindExos(); }
  else if(id === 'gerundio') el.innerHTML = leconGerundio();
  else if(id === 'ger-exo') { el.innerHTML = renderExos(EXO_GER); bindExos(); }
  el.scrollTop = 0;
}

// ── SUBJONCTIF — COURS ──
function leconSubjuntivo() {
  return `
  <div class="lesson-card">
    <h3>🔮 Le Subjonctif Présent — Formation</h3>
    <p style="color:var(--muted);font-size:.88rem;margin-bottom:.8rem">Le subjonctif exprime le doute, le souhait, l'émotion, la nécessité. Il s'utilise toujours dans une subordonnée introduite par <strong>que</strong>.</p>

    <div class="lesson-section-title">Formation régulière</div>
    <div class="lesson-rule">
      <strong>Étape 1 :</strong> Prends la 1ère personne du présent indicatif (<code>yo</code>)<br>
      <strong>Étape 2 :</strong> Enlève le <code>-o</code> final → c'est ton radical<br>
      <strong>Étape 3 :</strong> Ajoute les terminaisons opposées :<br>
      • Verbes <code>-AR</code> → <code>-e / -es / -e / -emos / -éis / -en</code><br>
      • Verbes <code>-ER/-IR</code> → <code>-a / -as / -a / -amos / -áis / -an</code>
    </div>

    <div class="lesson-section-title">Exemples avec tes verbes</div>
    <div class="example-block">
      <div class="ex-es">hablar → yo hablo → habl- → <strong>hable, hables, hable, hablemos, habléis, hablen</strong></div>
      <div class="ex-fr">parler → que je parle, que tu parles…</div>
    </div>
    <div class="example-block">
      <div class="ex-es">comer → yo como → com- → <strong>coma, comas, coma, comamos, comáis, coman</strong></div>
      <div class="ex-fr">manger → que je mange, que tu manges…</div>
    </div>
    <div class="example-block">
      <div class="ex-es">coger → yo cojo → coj- → <strong>coja, cojas, coja, cojamos, cojáis, cojan</strong></div>
      <div class="ex-fr">prendre → que je prenne… <span class="ex-note">⚠️ irrégulier au radical !</span></div>
    </div>
    <div class="example-block">
      <div class="ex-es">empezar → yo empiezo → empiece- → <strong>empiece, empieces, empiece, empecemos, empecéis, empiecen</strong></div>
      <div class="ex-fr">commencer → que je commence…</div>
    </div>
  </div>

  <div class="lesson-card">
    <h3>⚠️ Irréguliers à connaître absolument</h3>
    <div class="lesson-rule">
      Ces 6 verbes ont un subjonctif entièrement irrégulier — pas de règle, il faut les mémoriser :
    </div>
    <table class="conj-table" style="margin-top:.5rem">
      <thead><tr><th>Infinitif</th><th>yo</th><th>tú</th><th>él</th><th>nosotros</th><th>vosotros</th><th>ellos</th></tr></thead>
      <tbody>
        <tr><td><strong>ser</strong></td><td>sea</td><td>seas</td><td>sea</td><td>seamos</td><td>seáis</td><td>sean</td></tr>
        <tr><td><strong>estar</strong></td><td>esté</td><td>estés</td><td>esté</td><td>estemos</td><td>estéis</td><td>estén</td></tr>
        <tr><td><strong>ir</strong></td><td>vaya</td><td>vayas</td><td>vaya</td><td>vayamos</td><td>vayáis</td><td>vayan</td></tr>
        <tr><td><strong>haber</strong></td><td>haya</td><td>hayas</td><td>haya</td><td>hayamos</td><td>hayáis</td><td>hayan</td></tr>
        <tr><td><strong>saber</strong></td><td>sepa</td><td>sepas</td><td>sepa</td><td>sepamos</td><td>sepáis</td><td>sepan</td></tr>
        <tr><td><strong>dar</strong></td><td>dé</td><td>des</td><td>dé</td><td>demos</td><td>deis</td><td>den</td></tr>
      </tbody>
    </table>
    <div class="ex-note" style="margin-top:.6rem">💡 <strong>sepas</strong> (que tu saches) — tu l'as rencontré dans ton TikTok !</div>
  </div>

  <div class="lesson-card">
    <h3>📌 Quand utiliser le subjonctif ?</h3>

    <div class="lesson-section-title">1. Souhait / Désir — querer que, desear que, esperar que</div>
    <div class="example-block">
      <div class="ex-es">Quiero que <strong>vengas</strong> conmigo.</div>
      <div class="ex-fr">Je veux que tu viennes avec moi.</div>
    </div>
    <div class="example-block">
      <div class="ex-es">Espero que <strong>puedas</strong> luchar por eso.</div>
      <div class="ex-fr">J'espère que tu pourras te battre pour ça. <span class="ex-note">← luchar est dans ton deck</span></div>
    </div>

    <div class="lesson-section-title">2. Émotion — estar feliz de que, tener miedo de que, alegrarse de que</div>
    <div class="example-block">
      <div class="ex-es">Me alegra que <strong>disfrutes</strong> del momento.</div>
      <div class="ex-fr">Je suis content que tu profites du moment. <span class="ex-note">← disfrutar est dans ton deck</span></div>
    </div>
    <div class="example-block">
      <div class="ex-es">Es una pena que no <strong>puedas</strong> venir.</div>
      <div class="ex-fr">C'est dommage que tu ne puisses pas venir.</div>
    </div>

    <div class="lesson-section-title">3. Nécessité impersonnelle — es necesario que, es importante que, hace falta que</div>
    <div class="example-block">
      <div class="ex-es">Es necesario que <strong>sepas</strong> la verdad.</div>
      <div class="ex-fr">Il faut que tu saches la vérité. <span class="ex-note">← sepas = subj. de saber</span></div>
    </div>
    <div class="example-block">
      <div class="ex-es">Es importante que <strong>empecemos</strong> ya.</div>
      <div class="ex-fr">Il est important qu'on commence maintenant. <span class="ex-note">← empezar est dans ton deck</span></div>
    </div>

    <div class="lesson-section-title">4. Doute / Négation — no creer que, dudar que, no pensar que</div>
    <div class="example-block">
      <div class="ex-es">No creo que <strong>sea</strong> verdad.</div>
      <div class="ex-fr">Je ne crois pas que ce soit vrai.</div>
    </div>
    <div class="example-block">
      <div class="ex-es">Dudo que él <strong>engañe</strong> a alguien.</div>
      <div class="ex-fr">Je doute qu'il trompe quelqu'un. <span class="ex-note">← engañar est dans ton deck</span></div>
    </div>

    <div class="lesson-section-title">5. But — para que, a fin de que</div>
    <div class="example-block">
      <div class="ex-es">Te lo digo para que <strong>sepas</strong> lo que pasó.</div>
      <div class="ex-fr">Je te le dis pour que tu saches ce qui s'est passé.</div>
    </div>

    <div class="lesson-section-title">6. Condition / Temps futurs — cuando + subj., antes de que, aunque + subj.</div>
    <div class="example-block">
      <div class="ex-es">Cuando <strong>llegues</strong>, llámame.</div>
      <div class="ex-fr">Quand tu arriveras, appelle-moi. <span class="ex-note">⚠️ futur en FR → subjonctif en ES après cuando</span></div>
    </div>
    <div class="example-block">
      <div class="ex-es">Aunque no <strong>puedas</strong>, inténtalo.</div>
      <div class="ex-fr">Même si tu ne peux pas, essaie. <span class="ex-note">← aunque + subj. = incertitude</span></div>
    </div>
  </div>`;
}

// ── GÉRONDIF — COURS ──
function leconGerundio() {
  return `
  <div class="lesson-card">
    <h3>🌀 Le Gérondif (Gerundio) — Formation</h3>
    <p style="color:var(--muted);font-size:.88rem;margin-bottom:.8rem">Le gérondif espagnol équivaut au participe présent français (-ant) ou à "en train de + infinitif". Il est invariable.</p>

    <div class="lesson-section-title">Formation régulière</div>
    <div class="lesson-rule">
      • Verbes <code>-AR</code> → enlève <code>-ar</code> + ajoute <code><strong>-ando</strong></code><br>
      • Verbes <code>-ER / -IR</code> → enlève <code>-er/-ir</code> + ajoute <code><strong>-iendo</strong></code>
    </div>

    <div class="lesson-section-title">Exemples avec tes verbes</div>
    <div class="example-block">
      <div class="ex-es">hablar → <strong>hablando</strong></div>
      <div class="ex-fr">en train de parler / parlant</div>
    </div>
    <div class="example-block">
      <div class="ex-es">robar → <strong>robando</strong> → robándote</div>
      <div class="ex-fr">en train de voler → en train de te voler <span class="ex-note">← ton mot TikTok !</span></div>
    </div>
    <div class="example-block">
      <div class="ex-es">coger → <strong>cogiendo</strong> → cogiéndote</div>
      <div class="ex-fr">en train de prendre → en train de te prendre <span class="ex-note">← ton mot TikTok !</span></div>
    </div>
    <div class="example-block">
      <div class="ex-es">disfrutar → <strong>disfrutando</strong></div>
      <div class="ex-fr">en train de profiter</div>
    </div>
    <div class="example-block">
      <div class="ex-es">luchar → <strong>luchando</strong></div>
      <div class="ex-fr">en train de se battre / luttant</div>
    </div>
    <div class="example-block">
      <div class="ex-es">pelear → <strong>peleando</strong></div>
      <div class="ex-fr">en train de se bagarrer</div>
    </div>
  </div>

  <div class="lesson-card">
    <h3>⚠️ Irréguliers fréquents</h3>
    <div class="lesson-rule">
      Les verbes en <code>-eer</code>, <code>-oer</code> et certains <code>-ir</code> à diphtongue changent <code>-ie-</code> → <code>-ye-</code> ou ont un changement de radical :
    </div>
    <table class="conj-table" style="margin-top:.5rem">
      <thead><tr><th>Infinitif</th><th>Gérondif</th><th>Note</th></tr></thead>
      <tbody>
        <tr><td>ir</td><td><strong>yendo</strong></td><td>irrégulier total</td></tr>
        <tr><td>leer</td><td><strong>leyendo</strong></td><td>-ie- → -ye-</td></tr>
        <tr><td>poder</td><td><strong>pudiendo</strong></td><td>o → u (diphtongue)</td></tr>
        <tr><td>venir</td><td><strong>viniendo</strong></td><td>e → i</td></tr>
        <tr><td>decir</td><td><strong>diciendo</strong></td><td>e → i</td></tr>
        <tr><td>dormir</td><td><strong>durmiendo</strong></td><td>o → u</td></tr>
        <tr><td>pedir</td><td><strong>pidiendo</strong></td><td>e → i</td></tr>
        <tr><td>sentir</td><td><strong>sintiendo</strong></td><td>e → i</td></tr>
      </tbody>
    </table>
  </div>

  <div class="lesson-card">
    <h3>📌 Usages du gérondif</h3>

    <div class="lesson-section-title">1. Estar + gerundio — action en cours</div>
    <div class="lesson-rule">C'est l'usage le plus courant. <code>estar</code> se conjugue, le gérondif reste invariable.</div>
    <div class="example-block">
      <div class="ex-es">Estoy <strong>luchando</strong> por mis sueños.</div>
      <div class="ex-fr">Je suis en train de me battre pour mes rêves. <span class="ex-note">← luchar est dans ton deck</span></div>
    </div>
    <div class="example-block">
      <div class="ex-es">Está <strong>robándote</strong> la atención.</div>
      <div class="ex-fr">Il est en train de te voler l'attention. <span class="ex-note">← ton mot TikTok !</span></div>
    </div>
    <div class="example-block">
      <div class="ex-es">Estaban <strong>charlando</strong> en el vecindario.</div>
      <div class="ex-fr">Ils étaient en train de discuter dans le quartier. <span class="ex-note">← charlar + vecindario = ton deck</span></div>
    </div>

    <div class="lesson-section-title">2. Seguir / Continuar + gerundio — continuer à faire</div>
    <div class="example-block">
      <div class="ex-es">Sigo <strong>apoyando</strong> al equipo.</div>
      <div class="ex-fr">Je continue à soutenir l'équipe. <span class="ex-note">← apoyar est dans ton deck</span></div>
    </div>
    <div class="example-block">
      <div class="ex-es">Continúa <strong>creciendo</strong> cada día.</div>
      <div class="ex-fr">Il continue à grandir chaque jour. <span class="ex-note">← crecer est dans ton deck</span></div>
    </div>

    <div class="lesson-section-title">3. Llevar + temps + gerundio — depuis combien de temps</div>
    <div class="example-block">
      <div class="ex-es">Llevo dos años <strong>aprendiendo</strong> español.</div>
      <div class="ex-fr">Ça fait deux ans que j'apprends l'espagnol.</div>
    </div>

    <div class="lesson-section-title">4. Gérondif de manière — en faisant quoi</div>
    <div class="example-block">
      <div class="ex-es">Se fue <strong>llorando</strong>.</div>
      <div class="ex-fr">Il est parti en pleurant.</div>
    </div>
    <div class="example-block">
      <div class="ex-es">Me miró <strong>sonriendo</strong>.</div>
      <div class="ex-fr">Il me regarda en souriant.</div>
    </div>

    <div class="lesson-section-title">5. Pronom attaché au gérondif</div>
    <div class="lesson-rule">
      Les pronoms directs/indirects (<code>me, te, lo, la, nos, os, les…</code>) s'attachent <strong>après</strong> le gérondif :<br>
      <code>robando + te</code> → <code><strong>robándote</strong></code> (accent pour maintenir le stress original)<br>
      <code>cogiendo + te</code> → <code><strong>cogiéndote</strong></code>
    </div>
    <div class="example-block">
      <div class="ex-es">Está <strong>mirándote</strong> todo el tiempo.</div>
      <div class="ex-fr">Il est en train de te regarder tout le temps.</div>
    </div>
    <div class="example-block">
      <div class="ex-es">Sigue <strong>engañándola</strong>.</div>
      <div class="ex-fr">Il continue à la tromper. <span class="ex-note">← engañar est dans ton deck</span></div>
    </div>
  </div>`;
}

// ── EXERCICES ──
const EXO_SUBJ = [
  { sentence:"Quiero que tú ___ la verdad.", answer:"sepas", hint:"saber, tú, subj. présent — irrégulier !", fr:"Je veux que tu saches la vérité." },
  { sentence:"Es importante que nosotros ___ ahora.", answer:"empecemos", hint:"empezar, nosotros, subj. présent", fr:"Il est important qu'on commence maintenant." },
  { sentence:"Espero que él ___ luchar por sus sueños.", answer:"pueda", hint:"poder, él, subj. présent — diphtongue !", fr:"J'espère qu'il pourra se battre pour ses rêves." },
  { sentence:"Dudo que ella ___ en el vecindario.", answer:"viva", hint:"vivir, ella, subj. présent", fr:"Je doute qu'elle vive dans le quartier." },
  { sentence:"Es una pena que vosotros no ___ disfrutar.", answer:"podáis", hint:"poder, vosotros, subj. présent", fr:"C'est dommage que vous ne puissiez pas profiter." },
  { sentence:"Te lo digo para que ___ lo que pasó.", answer:"sepas", hint:"saber, tú, subj. présent — irrégulier !", fr:"Je te le dis pour que tu saches ce qui s'est passé." },
  { sentence:"Me alegra que él te ___ en eso.", answer:"apoye", hint:"apoyar, él, subj. présent", fr:"Je suis content qu'il te soutienne dans ça." },
  { sentence:"No creo que ellos ___ engañar a nadie.", answer:"quieran", hint:"querer, ellos, subj. présent — diphtongue !", fr:"Je ne crois pas qu'ils veuillent tromper quelqu'un." },
  { sentence:"Cuando ___, llámame.", answer:"llegues", hint:"llegar, tú, subj. présent — après 'cuando' futur = subj. !", fr:"Quand tu arriveras, appelle-moi." },
  { sentence:"Es necesario que yo ___ esto.", answer:"diga", hint:"decir, yo, subj. présent — irrégulier !", fr:"Il faut que je dise ça." },
  { sentence:"Aunque no ___ hacerlo, inténtalo.", answer:"puedas", hint:"poder, tú, subj. présent", fr:"Même si tu ne peux pas le faire, essaie." },
  { sentence:"Espero que vosotros ___ bien.", answer:"estéis", hint:"estar, vosotros, subj. présent — irrégulier !", fr:"J'espère que vous allez bien." },
];

const EXO_GER = [
  { sentence:"Estoy ___ por mis sueños.", answer:"luchando", hint:"luchar → gérondif régulier -AR", fr:"Je suis en train de me battre pour mes rêves." },
  { sentence:"Está ___ la atención de todos.", answer:"robando", hint:"robar → gérondif régulier -AR", fr:"Il est en train de voler l'attention de tout le monde." },
  { sentence:"Sigo ___ al equipo.", answer:"apoyando", hint:"apoyar → gérondif régulier -AR", fr:"Je continue à soutenir l'équipe." },
  { sentence:"Estaban ___ en la cancha.", answer:"peleando", hint:"pelear → gérondif régulier -AR", fr:"Ils étaient en train de se bagarrer sur le terrain." },
  { sentence:"Continúa ___ cada día.", answer:"creciendo", hint:"crecer → gérondif -ER → -iendo", fr:"Il continue à grandir chaque jour." },
  { sentence:"Lleva dos horas ___ por el camino.", answer:"caminando", hint:"caminar → gérondif régulier -AR", fr:"Ça fait deux heures qu'il marche sur le chemin." },
  { sentence:"Está ___me todo el tiempo.", answer:"mirando", hint:"mirar → gérondif, pronom attaché après", fr:"Il est en train de me regarder tout le temps." },
  { sentence:"Sigue ___ a su novia.", answer:"engañando", hint:"engañar → gérondif régulier -AR", fr:"Il continue à tromper sa copine." },
  { sentence:"Estoy ___ a caminar más.", answer:"empezando", hint:"empezar → gérondif régulier -AR", fr:"Je suis en train de commencer à marcher plus." },
  { sentence:"Están ___ del momento.", answer:"disfrutando", hint:"disfrutar → gérondif régulier -AR", fr:"Ils sont en train de profiter du moment." },
  { sentence:"¿Sigues ___ español?", answer:"aprendiendo", hint:"aprender → gérondif -ER → -iendo", fr:"Tu continues à apprendre l'espagnol ?" },
  { sentence:"Está ___ poco a poco.", answer:"pudiendo", hint:"poder → gérondif irrégulier ! o→u", fr:"Il est en train de pouvoir (progressivement)." },
];

function renderExos(list) {
  const shuffled = shuffle(list);
  return `
    <div class="exo-fill">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
        <div style="font-size:.75rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase">${list === EXO_SUBJ ? '🔮 Subjonctif' : '🌀 Gérondif'} — ${shuffled.length} exercices</div>
        <div id="exo-score-display" style="font-family:'Unbounded',sans-serif;font-size:.85rem;color:var(--accent2)">0 / ${shuffled.length}</div>
      </div>
      ${shuffled.map((ex, i) => `
        <div class="exo-card" id="exo-card-${i}">
          <div class="exo-sentence">
            ${ex.sentence.replace('___', `<input class="exo-input" id="exo-inp-${i}" data-answer="${ex.answer}" data-idx="${i}" autocomplete="off" spellcheck="false" placeholder="?">`)}
          </div>
          <div class="ex-fr" style="margin-top:.2rem">🇫🇷 ${ex.fr}</div>
          <div class="exo-hint">💡 ${ex.hint}</div>
          <div id="exo-fb-${i}" style="margin-top:.4rem;font-size:.85rem"></div>
        </div>
      `).join('')}
      <div class="btn-row">
        <button class="btn btn-primary" onclick="checkAllExos()">Corriger tout ✓</button>
        <button class="btn btn-ghost" onclick="resetExos()">Réinitialiser</button>
      </div>
      <div id="exo-final" style="margin-top:1rem;text-align:center"></div>
    </div>`;
}

function bindExos() {
  document.querySelectorAll('.exo-input').forEach(inp => {
    inp.addEventListener('keydown', e => { if(e.key === 'Enter') checkOneExo(inp); });
    inp.addEventListener('blur', () => checkOneExo(inp));
  });
}

function checkOneExo(inp) {
  if(inp.dataset.checked) return;
  const answer = normalize(inp.dataset.answer);
  const attempt = normalize(inp.value);
  if(!attempt) return;
  const fb = document.getElementById(`exo-fb-${inp.dataset.idx}`);
  if(attempt === answer || levenshtein(attempt, answer) <= 1) {
    inp.classList.add('correct'); inp.classList.remove('wrong');
    inp.value = inp.dataset.answer;
    if(fb) fb.innerHTML = `<span style="color:var(--success)">✅ Correct !</span>`;
    inp.dataset.checked = 'correct';
  } else {
    inp.classList.add('wrong'); inp.classList.remove('correct');
    if(fb) fb.innerHTML = `<span style="color:var(--error)">❌ → <strong>${inp.dataset.answer}</strong></span>`;
    inp.dataset.checked = 'wrong';
  }
  updateExoScore();
}

function checkAllExos() {
  document.querySelectorAll('.exo-input').forEach(inp => {
    if(!inp.dataset.checked) checkOneExo(inp);
  });
  const inputs = document.querySelectorAll('.exo-input');
  const correct = [...inputs].filter(i => i.dataset.checked === 'correct').length;
  const total = inputs.length;
  const pts = correct * 5;
  leconScore += pts;
  addXP(pts);
  document.getElementById('lecon-score').textContent = leconScore + ' pts';
  const final = document.getElementById('exo-final');
  if(final) {
    const pct = Math.round(correct/total*100);
    const emoji = pct === 100 ? '🏆' : pct >= 70 ? '💪' : '📚';
    final.innerHTML = `<div style="font-family:'Unbounded',sans-serif;font-size:1.1rem">${emoji} ${correct}/${total} — ${pct}%</div><div style="color:var(--accent2);font-size:.85rem;margin-top:.3rem">+${pts} XP</div>`;
  }
}

function updateExoScore() {
  const inputs = document.querySelectorAll('.exo-input');
  const correct = [...inputs].filter(i => i.dataset.checked === 'correct').length;
  const display = document.getElementById('exo-score-display');
  if(display) display.textContent = `${correct} / ${inputs.length}`;
}

function resetExos() {
  document.querySelectorAll('.exo-input').forEach(inp => {
    inp.value = '';
    inp.className = 'exo-input';
    delete inp.dataset.checked;
  });
  document.querySelectorAll('[id^="exo-fb-"]').forEach(el => el.innerHTML = '');
  const final = document.getElementById('exo-final');
  if(final) final.innerHTML = '';
  updateExoScore();
}

// ═══════════════════════════════════════════════
// JOURNAL
// ═══════════════════════════════════════════════
// ═══════════════════════════════════════════════
// GRAMMAR RULES DATABASE — structured for SRS review
// Each rule: id, lang, theme, title, rule (recto), details (verso), examples, session
// ═══════════════════════════════════════════════
const GRAMMAR_RULES = [
  // ─── 🇨🇩 LINGALA ───
  {
    id: "ln-aka-habituel",
    lang: "ln",
    theme: "Suffixes",
    title: "Suffixe -aka = habituel/itératif",
    rule: "Que signifie le suffixe -aka ajouté à un verbe en lingala ?",
    details: "Le suffixe -aka transforme un verbe en action HABITUELLE ou RÉPÉTÉE dans le temps. Il indique un état permanent, pas un moment précis.",
    examples: [
      "nalingi = j'aime (maintenant) → nalingaka = j'aime (toujours, habituellement)",
      "nasepeli = je me réjouis (maintenant) → nasepelaka = je me réjouis (habituellement)",
      "nalobi = je parle → nalobaka = je parle (habituellement)",
      "abini = il danse → abinaka = il danse (habituellement)",
    ],
    session: "4 octobre 2026"
  },
  {
    id: "ln-zo-present",
    lang: "ln",
    theme: "Temps verbaux",
    title: "Infixe -zo- = présent progressif",
    rule: "Comment former le présent progressif (être en train de) en lingala ?",
    details: "L'infixe -zo- s'ajoute entre le préfixe sujet et la racine du verbe pour indiquer une action EN COURS, en train de se faire maintenant.",
    examples: [
      "nalia = je mange → nazolia = je suis en train de manger",
      "akeyi = il va → azokeyi = il est en train d'aller",
      "tolobi = nous parlons → tozoloba = nous sommes en train de parler",
    ],
    session: "29 septembre 2026"
  },
  {
    id: "ln-nako-futur",
    lang: "ln",
    theme: "Temps verbaux",
    title: "Préfixe na-ko- = futur",
    rule: "Comment former le futur en lingala ?",
    details: "Le préfixe na-ko- (ou a-ko-, to-ko-, bo-ko-, ba-ko- selon le sujet) placé avant la racine indique une action future.",
    examples: [
      "nakosala = je ferai (na-ko-sala)",
      "akokende = il ira (a-ko-kende)",
      "tokolia = nous mangerons (to-ko-lia)",
      "bakoya = ils viendront (ba-ko-ya)",
    ],
    session: "5 juin 2026"
  },
  {
    id: "ln-trilogie-temps",
    lang: "ln",
    theme: "Temps verbaux",
    title: "Trilogie temporelle : passé / présent / futur",
    rule: "Comment construire les 3 temps principaux en lingala (passé, présent, futur) ?",
    details: "Le lingala utilise des infixes/suffixes différents pour chaque temps : -i/-aki pour le passé, -zo- pour le présent progressif, na-ko- pour le futur.",
    examples: [
      "Passé : naliaki (j'ai mangé) — infixe -aki",
      "Présent progressif : nazolia (je suis en train de manger) — infixe -zo-",
      "Habituel : nalia (je mange) ou nalingaka (j'aime toujours) — base ou -aka",
      "Futur : nakolia (je mangerai) — préfixe na-ko-",
    ],
    session: "5 juin 2026"
  },
  {
    id: "ln-kokoma-homophones",
    lang: "ln",
    theme: "Faux amis",
    title: "Kokoma — verbe homophone",
    rule: "Que signifie 'kokoma' en lingala ? (⚠️ 2 sens différents)",
    details: "Kokoma a DEUX sens complètement différents selon le contexte. Un faux ami interne — attention à la confusion.",
    examples: [
      "kokoma 1 = écrire (nakomi mokanda = j'ai écrit une lettre)",
      "kokoma 2 = devenir / arriver (akomi monene = il est devenu grand)",
      "Le contexte lève l'ambiguïté",
    ],
    session: "29 septembre 2026"
  },
  {
    id: "ln-kobaka",
    lang: "ln",
    theme: "Suffixes",
    title: "kobaka + racines (lingala urbain)",
    rule: "Comment former des expressions mixtes lingala-français à Kinshasa ?",
    details: "kobaka est un verbe utilisé à Kinshasa pour fusionner des mots français dans la grammaire lingala. Caractéristique du lingala urbain moderne.",
    examples: [
      "kobaka pardon = demander pardon (fr: pardon + grammaire ln)",
      "kobaka attention = faire attention",
      "Phénomène de code-switching institutionnalisé",
    ],
    session: "29 septembre 2026"
  },
  {
    id: "ln-ezape-contraction",
    lang: "ln",
    theme: "Prononciation",
    title: "Contractions orales de Kinshasa",
    rule: "Comment reconnaître les contractions du lingala parlé (vs standard) ?",
    details: "Le lingala de Kinshasa oral contracte systématiquement certaines formes. Essentiel à comprendre pour la musique, la radio, les films.",
    examples: [
      "ezali te → ezape / eza te (ce n'est pas)",
      "mpo → po (pour / parce que)",
      "nazali → naza (je suis)",
      "Très courant dans gospel et musique populaire",
    ],
    session: "4 octobre 2026"
  },
  {
    id: "ln-yomuta-emphase",
    lang: "ln",
    theme: "Structures",
    title: "Yo muta + verbe = C'est toi qui… (emphase)",
    rule: "Comment créer une structure emphatique en lingala (surtout religieuse) ?",
    details: "La particule 'muta' (ou 'nde') après un pronom crée une emphase forte, typique des textes religieux et des cantiques. Met en valeur le sujet.",
    examples: [
      "Yo muta kelela biso = C'est TOI qui nous a créés",
      "Ngai muta nalobi = C'est MOI qui parle",
      "Nzambe nde akeli = C'est Dieu qui a créé",
      "Registre : prières, cantiques, discours formels",
    ],
    session: "4 octobre 2026"
  },

  // ─── 🇪🇸 ESPAGNOL ───
  {
    id: "es-preterit-irreg",
    lang: "es",
    theme: "Temps verbaux",
    title: "Prétérit irrégulier (querer, predecir, etc.)",
    rule: "Comment se forment les prétérits irréguliers de querer, predecir, hacer, decir ?",
    details: "Certains verbes très fréquents ont un radical complètement différent au prétérit (passé simple). À apprendre par cœur — pas de règle logique.",
    examples: [
      "querer → quise, quisiste, quiso, quisimos, quisisteis, quisieron",
      "predecir → predije, predijiste, predijo, predijimos, predijisteis, predijeron",
      "hacer → hice, hiciste, hizo, hicimos, hicisteis, hicieron",
      "decir → dije, dijiste, dijo, dijimos, dijisteis, dijeron",
    ],
    session: "28 mai 2026"
  },
  {
    id: "es-laismo-leismo",
    lang: "es",
    theme: "Pronoms",
    title: "Laísmo vs Leísmo",
    rule: "Qu'est-ce que le laísmo et le leísmo en espagnol ?",
    details: "Erreurs/variantes régionales dans l'usage des pronoms COD/COI. Le laísmo (féminin) est stigmatisé, le leísmo (masculin humain) est accepté par la RAE à Madrid.",
    examples: [
      "Standard : La vi (COD féminin) / Le dije (COI)",
      "Laísmo (incorrect) : La dije (au lieu de Le dije)",
      "Leísmo (accepté) : Le vi (au lieu de Lo vi) pour personne masculine",
      "Castille et Madrid utilisent le leísmo couramment",
    ],
    session: "28 mai 2026"
  },
  {
    id: "es-sino-pero",
    lang: "es",
    theme: "Structures",
    title: "Sino vs Pero",
    rule: "Quand utiliser 'sino' plutôt que 'pero' en espagnol ?",
    details: "Les deux se traduisent par 'mais' en français, mais ont des usages précis. SINO = contradiction après une négation. PERO = restriction/opposition sans contradiction.",
    examples: [
      "No es rojo, SINO azul = Ce n'est pas rouge, mais bleu (contradiction)",
      "Es caro, PERO vale la pena = C'est cher, mais ça vaut le coup (opposition)",
      "No vino Juan sino Pedro = Pas Juan mais Pedro",
      "Es inteligente pero perezoso = Il est intelligent mais paresseux",
    ],
    session: "28 mai 2026"
  },
  {
    id: "es-superlatif-isimo",
    lang: "es",
    theme: "Structures",
    title: "Superlatif absolu -ísimo",
    rule: "Comment former le superlatif absolu en espagnol avec -ísimo ?",
    details: "On ajoute -ísimo/-ísima à l'adjectif (en retirant la voyelle finale) pour exprimer un degré très élevé. Équivaut à 'extrêmement + adjectif'.",
    examples: [
      "grande → grandísimo (extrêmement grand)",
      "fácil → facilísimo (ultra facile)",
      "rico → riquísimo (délicieux / très riche) ⚠️ c → qu",
      "largo → larguísimo (très long) ⚠️ g → gu",
      "feliz → felicísimo ⚠️ z → c",
    ],
    session: "30 mai 2026"
  },
  {
    id: "es-gerondif-pronom",
    lang: "es",
    theme: "Pronoms",
    title: "Gérondif + pronom collé",
    rule: "Comment attacher un pronom à un gérondif en espagnol ?",
    details: "Avec le gérondif (-ando/-iendo), les pronoms se collent EN FIN du verbe et nécessitent un accent écrit pour conserver l'accentuation originale.",
    examples: [
      "diciendo + me = diciéndome (en me disant)",
      "dando + nos + lo = dándonoslo (en nous le donnant)",
      "comprando + los = comprándolos (en les achetant)",
      "L'accent écrit est OBLIGATOIRE pour marquer la syllabe tonique",
    ],
    session: "5 juin 2026"
  },
  {
    id: "es-no-preterit",
    lang: "es",
    theme: "Structures",
    title: "No + prétérit = refus actif",
    rule: "Quelle nuance apporte 'no' + prétérit en espagnol ?",
    details: "Contrairement au français, 'no' + prétérit exprime un REFUS ACTIF ou une décision volontaire de ne pas faire, pas juste une absence d'action.",
    examples: [
      "No fui a la fiesta = J'ai refusé d'aller à la fête (décision)",
      "No comí = J'ai (volontairement) pas mangé",
      "No le respondí = Je n'ai pas voulu lui répondre",
      "Pour une simple absence : usage de l'imparfait ou autre tournure",
    ],
    session: "5 juin 2026"
  },
  {
    id: "es-fallar-fallecer",
    lang: "es",
    theme: "Faux amis",
    title: "fallar vs fallecer",
    rule: "Quelle est la différence entre 'fallar' et 'fallecer' en espagnol ?",
    details: "Deux verbes qui se ressemblent mais ont des sens complètement différents. Attention au piège : fallar = échouer, fallecer = mourir.",
    examples: [
      "fallar = échouer / rater / faire défaut (falló el examen)",
      "fallecer = décéder / mourir (soutenu) (ha fallecido su padre)",
      "⚠️ 'ha fallado' = il a échoué ≠ 'ha fallecido' = il est décédé",
      "Même racine latine (fallere = tromper) mais évolution sémantique divergente",
    ],
    session: "4 octobre 2026"
  },
  {
    id: "es-capaz-regional",
    lang: "es",
    theme: "Variantes régionales",
    title: "capaz = peut-être (Río de la Plata)",
    rule: "Que signifie 'capaz' en argot argentin/uruguayen ?",
    details: "En Argentine, Uruguay et Río de la Plata, 'capaz' est utilisé comme équivalent de 'peut-être' / 'probablement'. Synonyme oral de 'quizás' ou 'tal vez'.",
    examples: [
      "Capaz que viene = Peut-être qu'il vient",
      "Capaz llueve mañana = Il va peut-être pleuvoir demain",
      "Capaz que sí = Peut-être que oui",
      "⚠️ En Espagne, 'capaz' garde uniquement le sens de 'capable'",
    ],
    session: "4 octobre 2026"
  },
  {"id": "en-delatin", "lang": "en", "theme": "Registre", "title": "Délatiniser : phrasal verbs > mots latins", "rule": "Pourquoi un francophone sonne-t-il trop formel en anglais, et comment l'éviter ?", "details": "Le français pousse vers les mots d'origine latine (postpone, tolerate, investigate), corrects mais formels. À l'oral, les Américains préfèrent les phrasal verbs.", "examples": ["postpone → put off", "tolerate → put up with", "investigate → look into", "discover → find out", "refuse → turn down"], "session": "5 octobre 2026"},
  {"id": "en-flap-t", "lang": "en", "theme": "Prononciation", "title": "Flap T et réductions américaines", "rule": "Comment se prononce le T entre deux voyelles en anglais américain ?", "details": "Entre deux voyelles (ou après R), le T américain devient un D rapide, le « flap T ». Les mots grammaticaux se réduisent aussi à l'oral.", "examples": ["water → « wader » · better → « bedder »", "a lot of → « a lodda » · get it → « geddit »", "going to → gonna · want to → wanna", "what do you → « whaddaya »"], "session": "5 octobre 2026"},
  {"id": "es-article-possessif", "lang": "es", "theme": "Pronoms", "title": "Article au lieu du possessif (vêtements, corps)", "rule": "Comment dire « J'enlève mes chaussures » en espagnol ?", "details": "Avec les vêtements et les parties du corps, l'espagnol met l'ARTICLE, pas le possessif : le pronom réfléchi indique déjà à qui c'est. Le possessif est un calque du français.", "examples": ["✅ Me quito los zapatos · ❌ Me quito mis zapatos", "✅ Me duele la cabeza · ❌ Me duele mi cabeza", "✅ Se lavó las manos · ❌ Se lavó sus manos"], "session": "8 octobre 2026"},
  {"id": "es-quitar-quitter", "lang": "es", "theme": "Faux amis", "title": "quitar ≠ quitter", "rule": "Comment dire « quitter » un lieu ou une personne en espagnol ?", "details": "quitar = enlever, retirer. Pour quitter un lieu : salir de / irse de. Pour quitter quelqu'un : dejar.", "examples": ["Quita los platos = Enlève les assiettes", "Salí de casa = J'ai quitté la maison", "Me dejó = Il m'a quitté"], "session": "8 octobre 2026"},
  {"id": "es-llevar-gerundio", "lang": "es", "theme": "Temps verbaux", "title": "llevar + durée + gérondif", "rule": "Comment dire « Ça fait deux ans que j'étudie l'espagnol » de façon naturelle ?", "details": "llevar + durée + gérondif exprime une action commencée dans le passé qui continue encore. Plus naturel à l'oral que « desde hace ». Négatif : llevar + durée + sin + infinitif.", "examples": ["Llevo dos años estudiando español.", "¿Cuánto tiempo llevas esperando?", "Llevo tres días sin dormir bien.", "Se lleva diciendo años que… = On dit depuis des années que…"], "session": "8 octobre 2026"},
  {"id": "es-sino-si-no", "lang": "es", "theme": "Structures", "title": "sino (1 mot) ≠ si no (2 mots)", "rule": "Quelle différence entre « sino » et « si no » ?", "details": "Ils se prononcent pareil. si no = si + ne… pas (condition). sino = mais (correction après une négation). Test : si tu peux traduire « si… ne… pas », c'est deux mots.", "examples": ["Si no vienes, me voy. = Si tu ne viens pas, je pars.", "No viene él, sino ella. = Ce n'est pas lui qui vient, mais elle."], "session": "8 octobre 2026"},
  {"id": "es-devenir", "lang": "es", "theme": "Structures", "title": "Les 4 verbes de « devenir »", "rule": "Quel verbe utiliser pour « devenir » selon le type de changement ?", "details": "ponerse : changement passager (humeur, couleur). volverse : changement profond (caractère). hacerse : par effort ou choix (métier, religion). quedarse : résultat d'un événement.", "examples": ["Me pongo nervioso. (passager)", "Se volvió loco. (profond)", "Se hizo médico. (effort)", "Se quedó sorprendido / ciego. (résultat)"], "session": "8 octobre 2026"},
  {"id": "es-ito-pejoratif", "lang": "es", "theme": "Suffixes", "title": "Diminutif -ito : affectueux OU péjoratif", "rule": "Que peut exprimer le diminutif -ito en espagnol, à part « petit » ?", "details": "-ito peut être tendre (un cafecito, mi abuelita) ou ironique et méprisant (ese tonito, el listillo). C'est le contexte et l'intonation qui tranchent, comme « mon petit » en français.", "examples": ["Un cafecito = un petit café (tendresse)", "No me hables con ese tonito = Ne me parle pas sur ce ton", "¡Qué trabajito! = Quel « petit » boulot ! (ironique)"], "session": "8 octobre 2026"},
  {"id": "es-pedir-subj", "lang": "es", "theme": "Temps verbaux", "title": "Subjonctif de pedir (e → i)", "rule": "Comment se conjugue « pedir » au subjonctif présent ?", "details": "pedir change son radical e → i à toutes les personnes du subjonctif présent (comme servir, repetir, seguir).", "examples": ["pida, pidas, pida, pidamos, pidáis, pidan", "Espero que me pida salir. = J'espère qu'il me demandera de sortir avec lui.", "Que te sirva de lección. (servir → sirva)"], "session": "8 octobre 2026"},
  {"id": "es-pronom-colle", "lang": "es", "theme": "Pronoms", "title": "Pronom collé à l'infinitif et à l'impératif", "rule": "Où placer le pronom avec un infinitif ou un impératif affirmatif ?", "details": "Comme avec le gérondif, le pronom se colle à la fin de l'infinitif et de l'impératif affirmatif. Il faut parfois un accent écrit pour garder la syllabe tonique. À l'impératif négatif, il repasse devant.", "examples": ["Quiero decirte algo. (infinitif)", "Súmale que… · Dime · Hazlo (impératif)", "Dámelo (accent ajouté) · No me lo des (négatif)"], "session": "8 octobre 2026"},
  {"id": "en-parole-faux-ami", "lang": "en", "theme": "Faux amis", "title": "parole ≠ parole", "rule": "Que signifie « parole » en anglais ?", "details": "En anglais, parole = libération conditionnelle. Le sens français (« parole ») se dit word ou speech. À distinguer aussi de probation (sursis avec mise à l'épreuve, sans prison).", "examples": ["He was released on parole. = Il a été libéré sous conditionnelle.", "the parole board = la commission des libérations conditionnelles", "You have my word. = Tu as ma parole."], "session": "8 octobre 2026"},
];

// ═══════════════════════════════════════════════
// GRAMMAR SRS — SM-2 for rules, separate from word SRS
// ═══════════════════════════════════════════════
function grammarSrsLoad() {
  return JSON.parse(localStorage.getItem('grammar_srs') || '{}');
}
function grammarSrsSave(data) {
  localStorage.setItem('grammar_srs', JSON.stringify(data));
}
function grammarSrsInit(ruleId) {
  const data = grammarSrsLoad();
  if(!data[ruleId]) {
    data[ruleId] = { ef: 2.5, interval: 0, reps: 0, due: Date.now() };
    grammarSrsSave(data);
  }
}
function grammarSrsGrade(ruleId, grade) {
  const data = grammarSrsLoad();
  if(!data[ruleId]) data[ruleId] = { ef: 2.5, interval: 0, reps: 0, due: Date.now() };
  srsUpdate(data[ruleId], grade, 'g:' + ruleId);
  grammarSrsSave(data);
}
function grammarSrsIsDue(ruleId) {
  const data = grammarSrsLoad();
  const card = data[ruleId];
  if(!card) return true; // never reviewed = due
  const now = new Date();
  const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999).getTime();
  return card.due <= endOfToday;
}
function grammarSrsDueCount() {
  return GRAMMAR_RULES.filter(r => grammarSrsIsDue(r.id)).length;
}

// ═══════════════════════════════════════════════
// GRAMMAR JOURNAL — centralized view
// ═══════════════════════════════════════════════
let grammarFilter = { lang: 'all', theme: 'all' };
let grammarReviewQueue = [];
let grammarReviewIdx = 0;
let grammarRevealed = false;

function openGrammarJournal() {
  renderGrammarJournal();
  showScreen('screen-grammar');
}

function renderGrammarJournal() {
  const container = document.getElementById('grammar-content');
  if(!container) return;

  // Filter rules
  let rules = GRAMMAR_RULES.slice();
  if(grammarFilter.lang !== 'all') rules = rules.filter(r => r.lang === grammarFilter.lang);
  if(grammarFilter.theme !== 'all') rules = rules.filter(r => r.theme === grammarFilter.theme);

  // Group by theme within language
  const grouped = {};
  rules.forEach(r => {
    const key = `${r.lang}|${r.theme}`;
    if(!grouped[key]) grouped[key] = [];
    grouped[key].push(r);
  });

  const langNames = { es: '🇪🇸 Espagnol', ln: '🇨🇩 Lingala', en: '🇬🇧 Anglais' };
  const langColors = { es: '#ff6b1a', ln: '#007FFF', en: '#4cc9f0' };

  // Compute due count
  const dueCount = grammarSrsDueCount();
  const totalCount = GRAMMAR_RULES.length;

  // Available themes for filter
  const allThemes = [...new Set(GRAMMAR_RULES.map(r => r.theme))];

  let html = `
    <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.5rem;align-items:center;justify-content:space-between">
      <div style="display:flex;flex-wrap:wrap;gap:.5rem;align-items:center">
        <span style="font-size:.72rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em;margin-right:.3rem">Langue</span>
        <button class="grammar-filter-btn ${grammarFilter.lang==='all'?'active':''}" onclick="setGrammarFilter('lang','all')">Toutes</button>
        <button class="grammar-filter-btn ${grammarFilter.lang==='es'?'active':''}" onclick="setGrammarFilter('lang','es')" style="--f:#ff6b1a">🇪🇸 ES</button>
        <button class="grammar-filter-btn ${grammarFilter.lang==='ln'?'active':''}" onclick="setGrammarFilter('lang','ln')" style="--f:#007FFF">🇨🇩 LN</button>
        <button class="grammar-filter-btn ${grammarFilter.lang==='en'?'active':''}" onclick="setGrammarFilter('lang','en')" style="--f:#4cc9f0">🇬🇧 EN</button>
      </div>
      <div style="display:flex;gap:.5rem;align-items:center">
        <button onclick="startGrammarReview()" style="background:linear-gradient(135deg,#a855f7,#ec4899);border:none;color:#fff;padding:.6rem 1.1rem;border-radius:10px;font-family:'Unbounded',sans-serif;font-size:.78rem;font-weight:700;cursor:pointer;box-shadow:0 4px 16px rgba(168,85,247,.4)">
          🧠 Réviser ${dueCount>0?`(${dueCount})`:''}
        </button>
      </div>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.5rem">
      <span style="font-size:.72rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em;margin-right:.3rem;align-self:center">Thème</span>
      <button class="grammar-filter-btn ${grammarFilter.theme==='all'?'active':''}" onclick="setGrammarFilter('theme','all')">Tous</button>
      ${allThemes.map(t => `<button class="grammar-filter-btn ${grammarFilter.theme===t?'active':''}" onclick="setGrammarFilter('theme','${t}')">${t}</button>`).join('')}
    </div>
    <div style="color:var(--muted);font-size:.78rem;margin-bottom:1rem">${rules.length} règles affichées · ${dueCount} à réviser aujourd'hui · ${totalCount} au total</div>
  `;

  if(rules.length === 0) {
    html += `<div style="text-align:center;padding:3rem;color:var(--muted)">Aucune règle avec ces filtres.</div>`;
  }

  // Render grouped
  Object.entries(grouped).forEach(([key, groupRules]) => {
    const [lang, theme] = key.split('|');
    const color = langColors[lang];
    html += `
      <div style="margin-bottom:2rem">
        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.8rem">
          <div style="width:4px;height:22px;background:${color};border-radius:2px;box-shadow:0 0 8px ${color}"></div>
          <div style="font-family:'Unbounded',sans-serif;font-size:.92rem;color:var(--text)">${langNames[lang]} <span style="color:var(--muted);font-weight:400">· ${theme}</span></div>
        </div>
        <div style="display:grid;gap:.6rem">
    `;
    groupRules.forEach(r => {
      const srs = grammarSrsLoad()[r.id];
      const isDue = grammarSrsIsDue(r.id);
      const neverReviewed = !srs || srs.reps === 0;
      const badgeHtml = neverReviewed
        ? `<span style="background:rgba(0,229,255,.15);color:var(--neon-cyan);padding:.2rem .5rem;border-radius:999px;font-size:.62rem;font-weight:700">NOUVEAU</span>`
        : isDue
          ? `<span style="background:rgba(255,23,68,.15);color:var(--error);padding:.2rem .5rem;border-radius:999px;font-size:.62rem;font-weight:700">À RÉVISER</span>`
          : `<span style="background:rgba(0,255,157,.1);color:var(--success);padding:.2rem .5rem;border-radius:999px;font-size:.62rem;font-weight:700">OK · ${srs.reps}×</span>`;

      html += `
        <div onclick="openGrammarRule('${r.id}')" style="background:linear-gradient(135deg,rgba(255,255,255,.03),rgba(255,255,255,.01));border:1px solid rgba(255,255,255,.08);border-left:3px solid ${color};border-radius:12px;padding:.9rem 1rem;cursor:pointer;transition:all .2s" onmouseover="this.style.background='rgba(255,255,255,.06)';this.style.transform='translateX(2px)'" onmouseout="this.style.background='';this.style.transform=''">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:.8rem">
            <div style="flex:1;min-width:0">
              <div style="font-weight:700;color:${color};font-size:.92rem;margin-bottom:.3rem">${r.title}</div>
              <div style="color:var(--muted);font-size:.75rem;line-height:1.5">${r.rule}</div>
              <div style="color:var(--muted);font-size:.65rem;margin-top:.4rem;opacity:.6">Vu le ${r.session}</div>
            </div>
            ${badgeHtml}
          </div>
        </div>
      `;
    });
    html += `</div></div>`;
  });

  container.innerHTML = html;
}

function setGrammarFilter(key, value) {
  grammarFilter[key] = value;
  renderGrammarJournal();
}

function openGrammarRule(ruleId) {
  const rule = GRAMMAR_RULES.find(r => r.id === ruleId);
  if(!rule) return;
  const langNames = { es: '🇪🇸 Espagnol', ln: '🇨🇩 Lingala', en: '🇬🇧 Anglais' };
  const langColors = { es: '#ff6b1a', ln: '#007FFF', en: '#4cc9f0' };
  const color = langColors[rule.lang];
  const srs = grammarSrsLoad()[rule.id];
  const srsInfo = srs
    ? `${srs.reps} révision${srs.reps>1?'s':''} · intervalle ${srs.interval}j · due ${srsFormatDueDate(srs.due)}`
    : 'Jamais révisée';

  document.getElementById('grammar-modal-body').innerHTML = `
    <div style="margin-bottom:.6rem">
      <span style="background:rgba(255,255,255,.08);padding:.25rem .6rem;border-radius:999px;font-size:.65rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em">${langNames[rule.lang]} · ${rule.theme}</span>
    </div>
    <h3 style="color:${color};font-family:'Unbounded',sans-serif;font-size:1.1rem;margin-bottom:1rem">${rule.title}</h3>
    <div style="background:rgba(255,255,255,.03);border-left:3px solid ${color};padding:.8rem 1rem;border-radius:0 10px 10px 0;margin-bottom:1rem">
      <div style="font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:.15em;margin-bottom:.4rem">Question</div>
      <div style="font-size:.92rem;line-height:1.5">${rule.rule}</div>
    </div>
    <div style="margin-bottom:1rem">
      <div style="font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:.15em;margin-bottom:.4rem">Règle</div>
      <div style="font-size:.88rem;line-height:1.6;color:var(--text)">${rule.details}</div>
    </div>
    <div style="margin-bottom:1.2rem">
      <div style="font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:.15em;margin-bottom:.5rem">Exemples</div>
      <div style="display:flex;flex-direction:column;gap:.4rem">
        ${rule.examples.map(ex => `<div style="background:rgba(0,0,0,.3);padding:.5rem .8rem;border-radius:8px;font-size:.82rem;line-height:1.5;border-left:2px solid ${color}">${ex}</div>`).join('')}
      </div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding-top:1rem;border-top:1px solid rgba(255,255,255,.08);font-size:.72rem;color:var(--muted)">
      <span>Vu le ${rule.session}</span>
      <span>${srsInfo}</span>
    </div>
    <button onclick="closeGrammarModal();startGrammarReview('${rule.id}')" style="width:100%;margin-top:1rem;background:linear-gradient(135deg,#a855f7,#ec4899);border:none;color:#fff;padding:.8rem;border-radius:10px;font-family:'Unbounded',sans-serif;font-size:.82rem;font-weight:700;cursor:pointer">🧠 Réviser cette règle maintenant</button>
  `;
  document.getElementById('grammar-modal').style.display = 'flex';
}

function closeGrammarModal() {
  document.getElementById('grammar-modal').style.display = 'none';
}

// ─── Grammar review mode ───
function startGrammarReview(singleRuleId) {
  if(singleRuleId) {
    grammarReviewQueue = [GRAMMAR_RULES.find(r => r.id === singleRuleId)].filter(Boolean);
  } else {
    // Apply current filters to the review queue
    let pool = GRAMMAR_RULES.filter(r => grammarSrsIsDue(r.id));
    if(grammarFilter.lang !== 'all') pool = pool.filter(r => r.lang === grammarFilter.lang);
    if(grammarFilter.theme !== 'all') pool = pool.filter(r => r.theme === grammarFilter.theme);
    grammarReviewQueue = pool.sort(() => Math.random() - 0.5);
  }
  if(grammarReviewQueue.length === 0) {
    showToast('Aucune règle à réviser maintenant 👌', 'correct-toast');
    return;
  }
  grammarReviewIdx = 0;
  grammarRevealed = false;
  showScreen('screen-grammar-review');
  renderGrammarReviewCard();
}

function renderGrammarReviewCard() {
  if(grammarReviewIdx >= grammarReviewQueue.length) {
    // Done
    document.getElementById('grammar-review-content').innerHTML = `
      <div style="text-align:center;padding:3rem 1rem">
        <div style="font-size:4rem;margin-bottom:1rem">🎉</div>
        <div style="font-family:'Unbounded',sans-serif;font-size:1.4rem;margin-bottom:.6rem">Session terminée !</div>
        <div style="color:var(--muted);font-size:.9rem;margin-bottom:2rem">${grammarReviewQueue.length} règle${grammarReviewQueue.length>1?'s':''} révisée${grammarReviewQueue.length>1?'s':''}</div>
        <button onclick="openGrammarJournal()" style="background:linear-gradient(135deg,#a855f7,#ec4899);border:none;color:#fff;padding:.9rem 1.6rem;border-radius:12px;font-family:'Unbounded',sans-serif;font-size:.85rem;font-weight:700;cursor:pointer">📘 Retour au journal</button>
      </div>
    `;
    confetti('medium');
    haptic('success');
    return;
  }

  const rule = grammarReviewQueue[grammarReviewIdx];
  const langColors = { es: '#ff6b1a', ln: '#007FFF', en: '#4cc9f0' };
  const langNames = { es: '🇪🇸 Espagnol', ln: '🇨🇩 Lingala', en: '🇬🇧 Anglais' };
  const color = langColors[rule.lang];
  const srs = grammarSrsLoad()[rule.id] || { ef: 2.5, interval: 0, reps: 0 };

  // Grade intervals preview
  const intervals = [0,1,2,3].map(g => srsFormatInterval(srs, g, 'g:' + rule.id));

  document.getElementById('grammar-review-content').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;color:var(--muted);font-size:.8rem">
      <span>${grammarReviewIdx + 1} / ${grammarReviewQueue.length}</span>
      <span>${langNames[rule.lang]} · ${rule.theme}</span>
    </div>
    <div onclick="revealGrammarRule()" style="background:linear-gradient(135deg,rgba(0,0,0,.75),rgba(0,0,0,.9)),linear-gradient(135deg,${color} 0%,${color}99 100%);border:2px solid ${color}88;border-radius:20px;padding:2rem 1.4rem;cursor:pointer;min-height:380px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1.2rem;box-shadow:0 12px 40px rgba(0,0,0,.55)">
      <div style="font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.5);text-align:center">${rule.title}</div>
      <div style="font-size:clamp(1rem,3vw,1.4rem);color:#fff;text-align:center;line-height:1.5;font-weight:600;text-shadow:0 2px 12px rgba(0,0,0,.5)">${rule.rule}</div>
      <div id="grammar-back" style="display:none;width:100%;border-top:1px solid rgba(255,255,255,.2);padding-top:1rem;margin-top:.5rem">
        <div style="font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;color:${color};margin-bottom:.6rem;text-align:center">📖 Réponse</div>
        <div style="font-size:.85rem;line-height:1.6;color:#fff;margin-bottom:1rem">${rule.details}</div>
        <div style="display:flex;flex-direction:column;gap:.3rem">
          ${rule.examples.map(ex => `<div style="background:rgba(0,0,0,.5);padding:.5rem .7rem;border-radius:6px;font-size:.76rem;color:#fff;border-left:2px solid ${color}">${ex}</div>`).join('')}
        </div>
      </div>
      <div id="grammar-tap-hint" style="font-size:.72rem;color:rgba(255,255,255,.5)">↓ Tap pour révéler</div>
    </div>
    <div id="grammar-grade-area" style="display:none;margin-top:1rem">
      <div style="text-align:center;font-size:.72rem;color:var(--muted);text-transform:uppercase;letter-spacing:.15em;margin-bottom:.8rem">Comment c'était ?</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.5rem">
        <button class="srs-grade-btn srs-grade-again" onclick="gradeGrammarRule(0)">Encore<small>${intervals[0]}</small></button>
        <button class="srs-grade-btn srs-grade-hard" onclick="gradeGrammarRule(1)">Difficile<small>${intervals[1]}</small></button>
        <button class="srs-grade-btn srs-grade-good" onclick="gradeGrammarRule(2)">Bien<small>${intervals[2]}</small></button>
        <button class="srs-grade-btn srs-grade-easy" onclick="gradeGrammarRule(3)">Facile<small>${intervals[3]}</small></button>
      </div>
    </div>
  `;
  grammarRevealed = false;
}

function revealGrammarRule() {
  if(grammarRevealed) return;
  grammarRevealed = true;
  document.getElementById('grammar-back').style.display = 'block';
  document.getElementById('grammar-tap-hint').style.display = 'none';
  document.getElementById('grammar-grade-area').style.display = 'block';
  haptic('light');
}

function gradeGrammarRule(grade) {
  const rule = grammarReviewQueue[grammarReviewIdx];
  grammarSrsGrade(rule.id, grade);
  haptic(grade === 0 ? 'warning' : 'success');
  grammarReviewIdx++;
  renderGrammarReviewCard();
}

const JOURNAL_SESSIONS = [
  {
    date: "10 mai 2026",
    label: "Session TikTok & Quotidien",
    mots: [
      ["acordarse","Se souvenir"],["agachado","Accroupi / Baissé"],["agacharse","S'accroupir / Se baisser"],
      ["alejamiento","Éloignement"],["allí","Là-bas"],["aparcar","Garer / Parquer"],
      ["arriba","En haut / Là-haut"],["bajar","Descendre / Baisser"],["cara","Visage / Tête"],
      ["chaval","Gamin / Mec (argot)"],["claro que","Bien sûr que"],["coger","Prendre / Attraper"],
      ["cogiéndote","En train de te prendre"],["cogidos","Attrapés / Pris"],["girarse","Se retourner"],
      ["ha cogido","Il a pris (passé composé)"],["he bajado","Je suis descendu"],["ido corriendo","Parti en courant"],
      ["los he seguido","Je les ai suivis"],["meter","Mettre dans / Fourrer"],["no me podía bajar","Je ne pouvais pas descendre"],
      ["olvidarse","Oublier"],["pillar / pillado","Coincer / Surprendre en flagrant délit"],["robándote","En train de te voler"],
      ["rogar","Supplier / Implorer"],["sacar","Sortir / Tirer / Obtenir"],["se me había olvidado","J'avais oublié (plus-que-parfait)"],
      ["seguir","Suivre / Continuer"],["sepas","Que tu saches (subj. saber)"],["súbete","Monte ! (impératif pronominal)"],
      ["vaya","Bref / Disons / Quoi (marqueur discursif)"],["ventanilla","Guichet / Vitre de voiture"]
    ],
    alertes: [
      ["Impératif","súbete, ve, pon, sal…"],
      ["Participe passé","cogido, pillado, ido…"],
      ["Passé composé","ha cogido, he bajado, los he seguido…"],
      ["Plus-que-parfait","se me había olvidado…"],
      ["Pronoms COD antéposés","los he seguido, me podía bajar…"],
    ]
  },
  {
    date: "11 mai 2026",
    label: "TikTok · Séries · Apple Watch · Quotidien",
    es: [
      ["aburrido/a","Ennuyeux / Ennuyé (estar = s'ennuyer)"],["además","De plus / En plus"],
      ["ahora","Maintenant"],["amarilla","Jaune (féminin)"],["amigos","Amis"],
      ["a propósito","D'ailleurs / À propos"],["borrar","Effacer / Supprimer"],
      ["cerrar","Fermer"],["cine","Cinéma"],["cuántos","Combien (de)"],
      ["durante","Pendant / Durant"],["escudo","Bouclier / Écu"],["esperar","Attendre / Espérer"],
      ["eso","Ça / Cela"],["estación","Saison (météo)"],["hasta","Jusqu'à / Même"],
      ["industria","Industrie"],["inicio","Accueil / Début"],["levantarse","Se lever"],
      ["lluvia","Pluie"],["mantener","Maintenir / Entretenir"],["me suda","fig. Je m'en fous"],
      ["memoria","Mémoire"],["mensajes","Messages"],["mezclarse","fig. Se mélanger / Mingler"],
      ["minuto","Minute"],["montar","litt. Monter / fig. sens sexuel (argot)"],
      ["moverse","Se bouger / Se déplacer"],["no sé","Je ne sais pas"],
      ["nuevo","Nouveau / Nouvelle"],["para ti","Pour toi"],["parte","Partie / Épisode"],
      ["perfil","Profil"],["pirarse","fig. Se barrer / Se tirer (argot)"],
      ["poco","Peu / Un peu"],["por cierto","D'ailleurs / Au fait"],
      ["qué","Quoi / Que"],["serie","Série"],["significar","Signifier / Vouloir dire"],
      ["siguiendo","En train de suivre (gérondif)"],["socializar","Socialiser"],
      ["sudar","litt. Transpirer / fig. me suda = je m'en fous"],["tanto","Tellement / Autant"],
      ["temporada","Saison (série TV / sport)"],["tienda","Boutique / Magasin"],
      ["tocar","Toucher / fig. toca = c'est l'heure de"],["vez","Fois"],
      ["viva","En vie / Vivant(e)"],["volver a","Re- / Refaire (+ infinitif)"],
      ["y punto","Et voilà / Point final"]
    ],
    ln: [
      ["kovanda","Vivre / S'asseoir / Rester / Demeurer"],
      ["kosaka","Tromper / Avoir par la ruse"],
      ["yango","Ça / Cela / Celui-là"],
      ["yango wana","C'est pourquoi / Voilà pourquoi"],
      ["kuna","Là-bas / Là"],
    ],
    en: [
      ["to mingle","litt. Se mélanger / fig. Socialiser / Mingler"],
      ["to ship sb","fig. Shipper qqn / Vouloir qu'ils soient ensemble"],
      ["though","Pourtant / Quand même / Cependant"],
      ["doable","Faisable / Réalisable"],
      ["to depict","Dépeindre / Représenter / Illustrer"],
      ["to cut sb some slack","fig. Être indulgent / Lâcher la pression"],
      ["to back sb up","litt. Reculer / fig. Soutenir qqn / Couvrir"],
      ["add-on","litt. Ajout / fig. Module / Extension"],
      ["to be on edge","litt. Être au bord / fig. Être à cran"],
      ["to meddle","fig. S'ingérer / Se mêler des affaires des autres"],
      ["to belittle","fig. Rabaisser / Dévaloriser / Diminuer"],
      ["playwright","Dramaturge / Auteur de pièces de théâtre"],
      ["to bump heads","litt. Se cogner / fig. Être en désaccord"],
      ["to rack one's brain","fig. Se creuser la tête"],
      ["to mess up","litt. Mettre le désordre / fig. Rater / Gâcher"],
    ],
    alertes: [
      ["Impératif 🇪🇸","levántate, muévete, cierra…"],
      ["Passé composé 🇪🇸","hemos dicho, he bajado…"],
      ["Gérondif + pronom 🇪🇸","siguiendo, robándote…"],
    ]
  },
  {
    date: "15 mai 2026",
    label: "TikTok · Lingala · Anglais ferroviaire",
    es: [
      ["acoger","Accueillir / Recevoir chaleureusement"],
      ["acojonar","Foutre les jetons / Faire flipper (argot vulgaire)"],
      ["además","De plus / En plus"],
      ["al parecer","Apparemment"],
      ["búsqueda","Recherche"],
      ["comunidad","Communauté"],
      ["compartir","Partager"],
      ["desarrollo","Développement"],
      ["desarrollar","Développer"],
      ["estación","Saison (météo)"],
      ["me parece bien","Ça me semble bien / D'accord"],
      ["parecer","Sembler / Paraître / Avoir l'air"],
      ["por cierto","D'ailleurs / Au fait"],
      ["seguidores","Abonnés / Suiveurs"],
      ["sinceramente","Sincèrement"],
      ["temporada","Saison (série TV / sport)"],
      ["un montón","Beaucoup / Un tas / Plein"],
    ],
    ln: [
      ["kobanga","Avoir peur / Craindre"],
      ["muninga","Ami(e) / Copain / Voisin"],
      ["mususu / basusu","Autre / Certains / D'autres"],
      ["kokita","Atterrir / Descendre"],
      ["elongo","Ensemble / En même temps"],
      ["kofinga","Insulter / Offenser"],
      ["mokolo","Jour / Adulte / Ancien"],
      ["komeka / meka","Essayer / Tester"],
      ["kotia / tia","Mettre / Poser"],
      ["pe","Aussi / Et"],
      ["zemi","Grossesse"],
      ["nzoto","Corps / Santé"],
      ["kokuta","Trouver / Rencontrer"],
      ["kokutana","Se rencontrer mutuellement"],
      ["mibale","Deux / Tous les deux"],
      ["kutu","De plus / D'ailleurs"],
      ["batu / motu","Personne / Gens"],
      ["kozongela","Recommencer / Répéter"],
      ["misusu","Certains / D'autres"],
      ["kaka boye","Comme ça / Juste comme ça"],
      ["kozonga","Revenir / Retourner"],
      ["kofuta / futa","Payer"],
      ["tango","Quand / Temps / Moment"],
      ["somo","Terreur / Horreur"],
      ["kati / katikati","À l'intérieur / Entre / Au milieu"],
      ["kokenda / kende","Aller / Partir"],
      ["pa","Chez / À la maison de"],
      ["yambi","Bienvenue !"],
      ["koyamba","Accueillir / Répondre"],
      ["motema / mitema","Cœur / Force de caractère"],
      ["kala","Autrefois / Il y a longtemps"],
      ["kobemba","Voyager"],
      ["kobwaka","Jeter / Abandonner"],
      ["ngunda","Asile / Refuge (argot)"],
      ["kobika","Être sauvé / Guérir"],
      ["kosimba","Tenir / Saisir / Coller"],
      ["lokola","Comme / Tel que"],
      ["suka / nsuka","Fin / Dernier"],
      ["kolakisa / lakisa","Montrer / Enseigner"],
      ["kotanga / tangi","Lire / Compter / Étudier"],
      ["pamba","Pour rien / En vain"],
      ["makasi","Fort / Beaucoup (intensificateur)"],
      ["moko","Un / Seul"],
    ],
    en: [
      ["full-fledged","À part entière / Complet / Pleinement développé"],
      ["to alienate","litt. Aliéner / fig. Mettre à l'écart / Isoler"],
      ["a nudge / to give a nudge","Coup de pouce / Pousser doucement"],
      ["rail yard","Dépôt ferroviaire / Gare de triage"],
      ["hobo","Vagabond itinérant (sauteur de trains)"],
      ["to relieve sb of their duties","fig. Relever qqn de ses fonctions"],
      ["to swing out","litt. Balancer / fig. Se lancer / Sortir en trombe"],
      ["to get strung up","litt. Se faire pendre / fig. Être à cran"],
      ["thrill","litt. Frisson / fig. Sensation forte"],
      ["thrilling","Palpitant / Électrisant"],
    ],
    alertes: []
  },
  {
    date: "19 mai 2026",
    label: "TikTok · Foot · Lingala · Anglais",
    es: [
      ["según","Selon / D'après / Ça dépend"],
      ["avisar","Prévenir / Avertir"],
      ["cruzarse","Se croiser / Se rencontrer par hasard"],
      ["el cruce","Croisement / Carrefour"],
      ["asustar","Faire peur / Effrayer"],
      ["plantilla","Effectif / Équipe (foot) / Modèle"],
      ["en general","En général / Dans l'ensemble"],
      ["repaso","Révision / Relecture"],
      ["repasar","Réviser / Relire"],
      ["delantero","Attaquant (foot) / Avant"],
      ["secar","litt. Sécher / fig. Ghoster / Ignorer"],
      ["tirar","Lancer / Jeter / Tirer"],
      ["enterarse","Apprendre une info / Être au courant"],
      ["de repente","Tout à coup / Soudainement"],
      ["ganas","Envie / Désir / Motivation"],
      ["da igual","Ça revient au même / Peu importe"],
      ["trozo","Morceau / Bout"],
      ["papel","Papier / Rôle"],
      ["joder","fig. Emmerder / Merde ! (vulgaire)"],
      ["puesto","Mis / Placé / Poste / Stand"],
      ["cuerno","Corne / fig. poner los cuernos = tromper"],
      ["haber","Avoir (auxiliaire) / Y avoir"],
      ["hay","Il y a"],
      ["ha habido","Il y a eu"],
    ],
    ln: [
      ["kotambola","Marcher / Se déplacer / Voyager"],
      ["kolona / lona","Semer / Planter"],
      ["biloko / eloko","Choses / Objets / Affaires"],
      ["koganga","Crier / Hurler"],
      ["libota","Famille / Clan"],
      ["liputa / maputa","Pagne / Tissu africain"],
      ["kobota","Accoucher / Donner naissance"],
      ["kobotama","Être né / Naître"],
    ],
    en: [
      ["to bestow","litt. Octroyer / Accorder (solennel)"],
      ["to grant","Accorder / Octroyer"],
      ["a grant","Subvention / Bourse"],
      ["take for granted","Tenir pour acquis"],
    ],
    alertes: []
  },
  {
    date: "22 mai 2026",
    label: "TikTok · Foot · Argot · Expressions",
    es: [
      ["madurar","Mûrir / Évoluer"],
      ["maduro","Mûr / Mature"],
      ["picar","Piquer / Démanger / Hacher"],
      ["picarse","fig. Se vexer / Se froisser"],
      ["picante","Piquant / Épicé"],
      ["meterse","Se mettre dans / S'engager"],
      ["meterse con","S'en prendre à"],
      ["meter la pata","fig. Gaffer / Faire une bourde"],
      ["lobo","Loup"],
      ["boca","Bouche / Gueule"],
      ["boca del lobo","Gueule du loup (lieu dangereux)"],
      ["bromear","Plaisanter / Blaguer"],
      ["broma","Blague / Plaisanterie"],
      ["llegar","Arriver / Atteindre"],
      ["al día de hoy","Au jour d'aujourd'hui"],
      ["hoy / hoy en día","Aujourd'hui / De nos jours"],
      ["comerse","Se manger (intensif) / S'envoyer"],
      ["pedazo","Morceau / Bout (intensificateur argot)"],
      ["moda","Mode / Tendance"],
      ["seguir modas","Suivre les tendances"],
      ["estar de moda","Être à la mode"],
      ["pasado de moda","Démodé"],
      ["desplegar","Déployer / Déplier / Dérouler"],
      ["traer","Apporter (vers ici) ≠ llevar"],
      ["traído","Apporté (participe passé)"],
      ["golpe","Coup / Choc / Coup d'État"],
      ["golpear","Frapper / Cogner"],
      ["de golpe","D'un coup / Soudainement"],
      ["ningún / ninguno","Aucun"],
      ["de ninguna manera","En aucune façon / Pas du tout"],
    ],
    ln: [
      ["kokata / kata","Couper / Raccrocher / Traverser"],
      ["likambo / makambo","Affaire / Problème / Cas"],
      ["koteka / teki","Vendre / fig. Trahir"],
      ["kopanza / panza","Répandre / Diffuser / Disperser"],
      ["mbangu","Vitesse / ya mbangu = rapide"],
      ["musika / mosika","Loin / Distance"],
      ["kotonga","Coudre / Construire / Tresser"],
      ["tonga / ntonga","Aiguille / Seringue"],
      ["koganga","Crier / Hurler"],
    ],
    en: [],
    alertes: []
  },
  {
    date: "25 mai 2026",
    label: "TikTok · Foot · Expressions · Conditionnel",
    es: [
      ["cualquier / cualquiera","N'importe quel / Quiconque"],
      ["en cualquier momento","À tout moment"],
      ["casi","Presque / Failli"],
      ["agarrar / agarrarse","Attraper / En venir aux mains"],
      ["trompada","Coup de poing (argot)"],
      ["a trompadas","À coups de poing"],
      ["simio","Singe (registre scientifique)"],
      ["matar","Tuer"],
      ["ganar","Gagner / Remporter"],
      ["fruto","Fruit (sens large / résultat)"],
      ["fruta","Fruit (qu'on mange)"],
      ["dar fruto","Porter ses fruits"],
      ["empate","Match nul / Égalité"],
      ["empatar","Égaliser / Faire match nul"],
      ["disparar","Tirer (arme / au but) / Déclencher"],
      ["disparo","Tir / Coup de feu"],
      ["dispararse","S'envoler (prix)"],
      ["sano","Sain / En bonne santé"],
      ["roble","Chêne"],
      ["sano como un roble","En pleine forme"],
      ["sano y salvo","Sain et sauf"],
      ["cuidado","Attention ! / Soin"],
      ["cuidar / cuidarse","Prendre soin / Faire attention"],
      ["cuídate","Prends soin de toi !"],
      ["descuidar","Négliger"],
      ["descuido","Négligence / Étourderie"],
      ["¡descuida!","Ne t'inquiète pas ! (idiomatique)"],
      ["habría","Il y aurait / J'aurais (conditionnel)"],
      ["hayamos","Que nous ayons (subjonctif)"],
    ],
    ln: [],
    en: [],
    alertes: [
      ["Conditionnel de haber","habría, habrías, habríamos, habrían…"],
      ["Subjonctif de haber","haya, hayas, hayamos, hayan…"],
      ["Conditionnel passé","habría + participe (habría ido, habría dicho…)"],
      ["Apocope cualquier/ningún","devant un nom : cualquier momento, ningún problema"],
    ]
  },
  {
    date: "28 mai 2026",
    label: "TikTok · Argot · Verbes irréguliers · Expressions",
    es: [
      ["promedio","Moyenne / Lambda"],
      ["en promedio","En moyenne"],
      ["esposa / esposo","Épouse / Époux"],
      ["turbante","Turban"],
      ["sin","Sans"],
      ["si (sans accent)","Si (conditionnel)"],
      ["cabeza","Tête"],
      ["ver","Voir"],
      ["lograr","Réussir à / Parvenir à"],
      ["logro","Réussite / Accomplissement"],
      ["castigar","Punir / Sanctionner"],
      ["castigo","Punition / Sanction"],
      ["querer","Vouloir / Aimer"],
      ["quiso","Il/elle a voulu (prétérit)"],
      ["te quiero","Je t'aime (affection)"],
      ["sin querer","Sans le vouloir"],
      ["ponerse","Se mettre / Devenir"],
      ["firme","Ferme / Raide"],
      ["ponerse firme","Se mettre au garde-à-vous"],
      ["patria","Patrie"],
      ["fue","Il fut / Il alla (prétérit ser/ir)"],
      ["irse","S'en aller / Partir"],
      ["cama","Lit"],
      ["me voy a la cama","Je vais me coucher"],
      ["acostarse","Se coucher"],
      ["dormirse","S'endormir"],
      ["pelota","Balle / fig. Lèche / Cirage de pompes"],
      ["hacer la pelota","fig. Cirer les pompes"],
      ["vergüenza","Honte / Gêne"],
      ["vergüencita","Petite honte (diminutif affectif)"],
      ["vergüenza ajena","Honte par procuration / Cringe"],
      ["flipar","Kiffer / Halluciner (argot Espagne)"],
      ["flipante","Hallucinant / Génial"],
      ["me flipa","Je kiffe / J'adore"],
      ["jefe / jefa","Chef / Cheffe / Patron / (argot) Papa-Maman"],
      ["cansado","Fatigué"],
      ["cansarse de","En avoir marre de"],
      ["descojonarse","fig. Se marrer / Éclater de rire (argot)"],
      ["cojonudo","Génial / Super (argot vulgaire positif)"],
      ["ola","Vague (mer / chaleur)"],
      ["arruga","Ride / Pli"],
      ["arrugarse","fig. Se dégonfler"],
      ["no solo... sino también","Non seulement... mais aussi"],
      ["a lo mejor","Peut-être / Sans doute"],
      ["preguntar","Demander / Poser une question"],
      ["periodista","Journaliste"],
      ["sino / sino que","Mais (opposition après négation)"],
      ["subir","Monter / Poster (en ligne)"],
      ["lamentar","Regretter (soutenu)"],
      ["chica","Meuf / Nana (interjection)"],
      ["señora","Madame"],
      ["pegar","Frapper / Coller / Attraper (maladie)"],
      ["venir","Venir"],
      ["ni siquiera","Même pas / Pas même"],
      ["conocer","Connaître (par expérience)"],
      ["conozco","Je connais (irrégulier)"],
      ["despertar / despertarse","(Se) Réveiller"],
      ["hace nada","À l'instant / Il y a un instant"],
      ["sortear","Contourner / Éviter / Tirer au sort"],
      ["sacarle X a alguien","Avoir X d'avance"],
    ],
    ln: [],
    en: [],
    alertes: [
      ["Prétérit irrég. querer","quise, quisiste, quiso, quisimos, quisieron"],
      ["Prétérit ser/ir","fui, fuiste, fue, fuimos, fueron (même forme !)"],
      ["Présent venir","vengo, vienes, viene, venimos, venís, vienen"],
      ["Présent conocer","conozco (1ère pers.) + coces, conoce…"],
      ["Laísmo / Leísmo","Espagne centre : la/le au lieu de le/lo (COI/COD)"],
      ["No solo... sino (que) también","Structure corrélative essentielle"],
      ["Sino vs pero","sino = mais après négation, pero = mais après affirmation"],
      ["Hace + durée","hace nada / hace poco / hace 3 años"],
    ]
  },
  {
    date: "30 mai 2026",
    label: "Spider-Man: Brand New Day · Texte long",
    es: [
      ["salir con","Sortir avec (qqn)"],
      ["hermano / hermana","Frère / Sœur"],
      ["película","Film"],
      ["salir","Sortir / Paraître (film)"],
      ["salió","Il est sorti (prétérit)"],
      ["crítica","Critique"],
      ["buenísimo","Excellent (superlatif -ísimo)"],
      ["todo el mundo","Tout le monde"],
      ["mejor","Meilleur / Mieux"],
      ["desde que","Depuis que"],
      ["entrar / entró","Entrer / Est entré"],
      ["sorprendido","Surpris"],
      ["aliviado","Soulagé"],
      ["a la vez","À la fois / En même temps"],
      ["sobre todo","Surtout"],
      ["estuvimos hablando","Nous étions en train de parler"],
      ["convencido","Convaincu"],
      ["iba a ser","Ça allait être (futur du passé)"],
      ["fracaso","Échec"],
      ["por fin","Enfin"],
      ["verdadero","Vrai / Véritable"],
      ["otra vez","Une nouvelle fois / À nouveau"],
      ["balancearse","Se balancer"],
      ["literalmente","Littéralement"],
      ["gracioso","Drôle / Marrant"],
      ["recordar / recuerdo","Se souvenir / Je me souviens"],
      ["hace como","Il y a environ"],
      ["de hecho","En fait / En réalité"],
      ["predecir / predijo","Prédire / Il a prédit (irrég.)"],
      ["tendríamos","Nous aurions (conditionnel)"],
      ["alrededor de","Autour de / Vers (environ)"],
      ["parece que","Il semble que"],
    ],
    ln: [],
    en: [],
    alertes: [
      ["Superlatif -ísimo","bueno → buenísimo, grande → grandísimo, fácil → facilísimo"],
      ["Passé progressif","estar (prétérit) + gérondif : estuvimos hablando"],
      ["Futur du passé","imparfait de ir + a + inf. : iba a ser un fracaso"],
      ["Recuerdo + haber + participe","Je me souviens avoir + participe : recuerdo haber hablado"],
      ["Prétérit irrég. predecir","predije, predijiste, predijo, predijimos, predijeron"],
    ]
  },
  {
    date: "5 juin 2026",
    label: "TikTok · Trilingue · Grammaire lingala · Anglais actualité",
    es: [
      ["salga","Que je sorte / Qu'il sorte (subj. de salir)"],
      ["bastante","Assez / Pas mal / Suffisamment"],
      ["basta","Ça suffit ! / Stop !"],
      ["vuelta","Tour / Retour / Virage"],
      ["dar la vuelta","Faire le tour / Retourner qqch"],
      ["volver","Revenir / Retourner (o→ue, part. vuelto)"],
      ["descartar","Écarter / Rejeter / Éliminer"],
      ["descartado","Écarté / Rejeté"],
      ["será que","Se pourrait-il que… (futur de conjecture)"],
      ["todavía","Encore / Toujours"],
      ["todavía no","Pas encore"],
      ["conseguir","Arriver à / Réussir à (irrég. e→i)"],
      ["no consigo","Je n'arrive pas à…"],
      ["imaginar / imaginarse","Imaginer / S'imaginer"],
      ["niño / niña","Petit garçon / Petite fille / Ma petite (affectif)"],
      ["dar","Donner (essentiel, très irrég.)"],
      ["dándole","En lui donnant (gérondif + pronom collé)"],
      ["dar ganas / miedo / pena","Donner envie / Faire peur / De la peine"],
    ],
    ln: [
      ["kasi","Mais / Cependant"],
      ["na","À / Avec / Dans / De (préposition polyvalente)"],
      ["kozua / kozwa","Prendre / Obtenir / Recevoir"],
      ["na-ko- (futur)","Marqueur du futur 'je vais'"],
    ],
    en: [
      ["to ground (flight)","Clouer au sol / Immobiliser"],
      ["grounded","Cloué au sol / Puni / Terre-à-terre"],
      ["to be off the hook","fig. Être tiré d'affaire"],
      ["hook","Crochet / Hameçon"],
      ["hold (v/n)","Tenir / Prise / Emprise"],
      ["get hold of sb","Joindre qqn"],
      ["have a hold on sb","Avoir de l'emprise sur qqn"],
      ["hold on / up / back / out","Attendre / Retarder / Retenir / Résister"],
      ["bereaved / bereavement","Endeuillé / Deuil (perte d'un proche)"],
      ["meticulous / meticulously","Méticuleux / Minutieusement"],
      ["to corner / cornered","Acculer / Piéger / Coincé"],
      ["to impeach / impeachment","Destituer / Mise en accusation"],
      ["a fine / to fine","Amende / Infliger une amende"],
      ["fine print","Petits caractères (contrat)"],
      ["scorched / to scorch","Brûlé / Roussi / Carboniser"],
      ["scorched rice","Riz brûlé (croûte)"],
      ["scorched earth","Terre brûlée (stratégie)"],
    ],
    alertes: [
      ["Gérondif + pronom collé 🇪🇸","dando + le → dándole (accent obligatoire) : diciéndote, haciéndolo"],
      ["Futur du passé (o→ue) volver","vuelvo, vuelves, vuelve, volvemos, vuelven — participe vuelto"],
      ["Futur en lingala","na-ko- + racine : nakolia, okolia, akolia, tokolia, bokolia, bakolia"],
      ["Prépositions lingala","na = polyvalent (à/avec/dans/de) selon contexte"],
      ["No + prétérit querer/conseguir","= refus actif (No consigo = je n'arrive pas / je refuse)"],
    ]
  },
  {
    date: "29 septembre 2026",
    label: "Lingala urbain · Argot Kinshasa · TikTok Espagne",
    es: [
      ["echar","Chasser / Virer / Jeter / Verser"],
      ["echar de casa","Virer de chez soi / Mettre à la porte"],
      ["echar de menos","Manquer (te echo de menos)"],
      ["echar una mano","Donner un coup de main"],
      ["echar una siesta","Faire une sieste"],
      ["echar un vistazo","Jeter un coup d'œil"],
      ["buitre","Vautour (litt. + fig. profiteur)"],
      ["anciano / anciana","Personne âgée (respectueux)"],
      ["personas mayores","Personnes âgées (registre poli)"],
      ["los que / las que","Ceux / Celles qui"],
      ["asistir","Assister à / Être présent / Aider"],
      ["asistencia","Assistance / Présence / Passe décisive (foot)"],
      ["dañino","Nocif / Nuisible / Néfaste"],
      ["dañar / daño","Endommager / Dommage"],
      ["hacer daño","Faire mal"],
      ["hacerse daño","Se faire mal"],
    ],
    ln: [
      ["koloba / loba","Parler / Dire"],
      ["liloba / maloba","Mot / Parole"],
      ["kobenda","Tirer / Attirer / Étirer"],
      ["kobenda miso","Attirer l'attention (litt. tirer les yeux)"],
      ["kobenda nzoto","S'étirer"],
      ["kondima / dima","Accepter / Admettre / Être d'accord"],
      ["nandimi te","Je ne suis pas d'accord / Je refuse"],
      ["kondimisa","Convaincre / Persuader"],
      ["bondimi","Foi / Croyance"],
      ["kolenga","Trembler / Frissonner"],
      ["kolengela","Arranger / Prendre soin / Préparer"],
      ["kobala","Se marier"],
      ["libala","Mariage"],
      ["balabala","Rue / Route"],
      ["kosepela / sepela","Se réjouir / Apprécier"],
      ["nasepeli koyeba yo","Ravi(e) de te connaître"],
      ["kolemba","Être fatigué / En avoir marre"],
      ["tolemba te","On n'abandonne pas ! (culte)"],
      ["kolembisa","Épuiser / Amollir"],
      ["kokóma","Arriver / Devenir (ton haut)"],
      ["kokòma","Écrire (ton bas — homophone !)"],
      ["mokomi","Écrivain / Auteur"],
      ["kobaka / kobáka","Poser / Attacher (deux tons)"],
      ["kobaka pardon","Demander pardon (idiomatique Kinshasa)"],
      ["kobakisa","Ajouter / Additionner"],
      ["kobanda / banda","Commencer / Débuter"],
      ["ebandeli","Le début"],
      ["bandá","Depuis (préposition)"],
      ["kobanza","Penser / Réfléchir"],
      ["kobína / bina","Danser"],
      ["-zo- (progressif)","Marqueur PRÉSENT PROGRESSIF 'être en train de'"],
      ["mabína","Danse (nom)"],
      ["kosenga / senga","Demander / Solliciter"],
      ["kosengela","Falloir / Devoir (obligation)"],
      ["libándá","Dehors / Extérieur"],
      ["libanda ya mpepo","Aéroport"],
      ["kolimbisa","Pardonner"],
    ],
    en: [],
    alertes: [
      ["-zo- (progressif) 🇨🇩","Marqueur du présent continu : nazobina, ozobina, azobina, tozobina, bazobina"],
      ["Verbes homophones 🇨🇩","kokoma (arriver/devenir) vs kokoma (écrire) — ton haut vs bas"],
      ["kobaka + racines","kobaka (poser) / kobáka (attacher) / kobakisa (ajouter) / kobakola (enlever)"],
      ["Racines verbales lingala","Beaucoup de verbes commencent par ko-l- ou ko-b- avec sens complètement différents — attention au ton !"],
      ["Lingala urbain","kobaka pardon = expression Kinshasa mêlant lingala + français"],
      ["Trilogie temporelle 🇨🇩","Passé (-i/-aki), Présent (-zo-), Futur (na-ko-)"],
    ]
  },
  {
    date: "4 octobre 2026",
    label: "Famille maleta · fallar · Phrase spirituelle Nzambe · -aka habituel",
    es: [
      ["maletero","Coffre (voiture) / Porteur"],
      ["maleta","Valise"],
      ["maletín","Mallette"],
      ["hacer la maleta","Faire sa valise"],
      ["capaz","Capable / (argot) Peut-être"],
      ["capacidad","Capacité"],
      ["incapaz","Incapable"],
      ["capacitar","Former / Habiliter"],
      ["ser capaz de","Être capable de"],
      ["fallido","Raté / Manqué / Échoué"],
      ["fallar","Rater / Échouer / Faire défaut"],
      ["fallo","Erreur / Panne / Verdict"],
      ["fallecer","Décéder (soutenu)"],
      ["estado fallido","État défaillant (géopolitique)"],
      ["fallo técnico","Problème technique / Panne"],
    ],
    ln: [
      ["Eloko","Chose / Objet (biloko au pluriel)"],
      ["Liboso","Avant / D'abord / En premier"],
      ["-aka (habituel)","⭐ Suffixe HABITUEL / ITÉRATIF"],
      ["Nalingaka","J'aime (habituel = kolinga + -aka)"],
      ["Nanu","Encore / D'abord"],
      ["Ezali te / Ezape","Ce n'est pas (ezape = oral Kinshasa)"],
      ["Nzambe","Dieu"],
      ["Mpo / Po","Parce que / Pour"],
      ["Yo muta","C'est toi qui (emphatique)"],
      ["Kokelela","Créer / Création"],
      ["Biso","Nous"],
      ["Ezali na / Ezana","Qui sont dans / existent dans"],
      ["Mokili","Monde / Terre"],
    ],
    en: [],
    alertes: [
      ["⭐ Suffixe -aka (habituel) 🇨🇩","Transforme un verbe en action HABITUELLE/RÉPÉTÉE. Ex: nalingi (j'aime maintenant) → nalingaka (j'aime toujours)"],
      ["Famille habituel","nasepeli → nasepelaka · nalobi → nalobaka · abini → abinaka"],
      ["Contraction orale Kinshasa","ezali te → ezape · idem po → mpo"],
      ["Structure emphatique spirituelle","Yo muta + verbe = C'est toi qui… (prières, cantiques)"],
      ["fallar vs fallecer 🇪🇸","fallar = échouer · fallecer = décéder (ne pas confondre !)"],
      ["capaz régional 🇪🇸","En Argentine/Uruguay : capaz = peut-être (synonyme oral de tal vez)"],
    ]
  },
  {
    date: "5 octobre 2026",
    label: "Anglais B2 → C1 · Équivalents C1 · Parler comme un natif US",
    es: [],
    ln: [],
    en: [
      ["cork","Bouchon de liège"],["to snoop","Fouiner"],["to squat","S'accroupir"],["to cauterise","Cautériser"],["pull toward","Attirer vers"],
      ["to bottle sth up","Refouler (émotions)"],["put a lid on it","Ferme-la / Contenir"],["to pry into","S'immiscer dans"],["nosy","Fouineur"],["poke your nose into","Fourrer son nez dans"],
      ["to crouch down","S'accroupir"],["not know the first thing about","N'y rien connaître"],["become desensitised to","Devenir insensible à"],["be drawn to","Être attiré par"],["gravitate toward","Se tourner vers"],
    ],
    alertes: [
      ["Délatiniser 🇬🇧","Un francophone sonne formel avec postpone, tolerate… Un Américain dit put off, put up with."],
      ["Flap T 🇺🇸","Entre deux voyelles, le T américain devient un D rapide : water → « wader », data → « DAY-da »."],
      ["Réductions orales 🇺🇸","gonna, wanna, gotta, lemme, whaddaya : à comprendre et à utiliser dans un registre détendu."],
      ["gravitate toward vs be drawn to","Deux marqueurs C1 très naturels à l'oral pour dire « être attiré par »."],
    ]
  },
  {"date": "8 octobre 2026", "label": "quitar · llevar + gérondif · verbes de « devenir » · kobosana · pull strings, parole, inquiry", "es": [["quitar", "Enlever / Retirer / Ôter (≠ quitter !)"], ["quitarse", "S'enlever (vêtement) / Se retirer"], ["quitarse de en medio", "S'écarter / Dégager (litt. s'enlever du milieu)"], ["quitarse un peso de encima", "(fig.) Se libérer d'un poids"], ["quitarse el sombrero", "(fig.) Tirer son chapeau"], ["quitarse años", "(fig.) Se rajeunir / Mentir sur son âge"], ["estampado", "Imprimé / À motifs (adj.)"], ["el estampado", "L'imprimé / Le motif"], ["estampar", "Imprimer / Apposer · (fam.) Projeter contre"], ["estamparse contra", "(fam.) S'écraser contre / Se prendre de plein fouet"], ["llevar + gerundio", "Ça fait [durée] que… (action qui continue)"], ["se lleva diciendo", "On le dit depuis longtemps"], ["llevar sin + infinitivo", "Ça fait [durée] que je ne… pas"], ["aclarar", "Clarifier / Éclaircir / Rincer"], ["aclararse", "S'éclaircir (temps) / Y voir clair"], ["la aclaración", "La clarification / La précision"], ["aclarar dudas", "Lever les doutes / Répondre aux questions"], ["no me aclaro", "(fam.) Je m'y perds / Je n'y comprends rien"], ["si no", "Si … ne … pas (condition, 2 mots ≠ sino)"], ["ponerse a + infinitivo", "Se mettre à (faire qqch)"], ["echarse a", "Se mettre soudain à (rire, pleurer…)"], ["ponerse + emoción", "Devenir (changement passager : humeur, couleur)"], ["volverse", "Devenir (changement profond, caractère)"], ["quedarse + adjetivo", "Devenir / Rester (résultat d'un événement)"], ["el tonito", "Le petit ton (condescendant, ironique)"], ["ponerse el tono de alguien", "Prendre le ton de qqn / L'imiter"], ["ocasionar", "Occasionner / Causer (soutenu)"], ["junto a alguien", "À côté de / Aux côtés de qqn"], ["joya", "Bijou · (fig.) Perle, trésor"], ["¡joya!", "(argot 🇦🇷🇺🇾) Super ! Génial !"], ["vencer", "Vaincre / Battre · (fig.) Expirer, arriver à échéance"], ["el vencimiento", "L'échéance / La date d'expiration"], ["sumar", "Additionner / Ajouter"], ["súmale que…", "Ajoute à ça que… (oral)"], ["sumarse a", "Se joindre à"], ["pedir salir a alguien", "Demander à qqn de sortir avec soi"]], "ln": [["Kobosana", "Oublier (aussi : faire des erreurs)"], ["Bosana", "Oublie ! (impératif de kobosana)"], ["Nabosani", "J'ai oublié / J'oublie"], ["Kobosana te", "N'oublie pas ! / N'oubliez pas !"]], "en": [["to rip out", "Arracher (d'un coup, avec force)"], ["to tear out", "Arracher (une page…)"], ["to yank out", "Arracher d'un coup sec (fam.)"], ["to gut", "Vider entièrement · (fig.) vider de sa substance"], ["to wrest", "Arracher de force (pouvoir, contrôle) — soutenu"], ["a rip-off", "Une arnaque (fam.)"], ["belly button", "Nombril (courant)"], ["navel", "Nombril (neutre, écrit)"], ["navel-gazing", "(fig.) Nombrilisme"], ["umbilicus", "Ombilic (médical)"], ["innie / outie", "Nombril creux / qui ressort (fam.)"], ["to pull strings", "Faire jouer ses relations / Pistonner"], ["to call in a favor", "Demander un service rendu en retour"], ["friends in high places", "Avoir le bras long (des relations haut placées)"], ["parole board", "Commission des libérations conditionnelles"], ["on parole", "En liberté conditionnelle"], ["probation", "Sursis avec mise à l'épreuve (≠ parole)"], ["inquiry", "Enquête officielle / Demande de renseignements"], ["a probe", "Une enquête (langage des médias)"], ["an inquest", "Enquête judiciaire sur un décès"]], "alertes": [["Article au lieu du possessif (vêtements, corps)", "Avec les vêtements et les parties du corps, l'espagnol met l'ARTICLE, pas le possessif : le pronom réfléchi indique déjà à qui c'est. Le possessif est un calque du français."], ["quitar ≠ quitter", "quitar = enlever, retirer. Pour quitter un lieu : salir de / irse de. Pour quitter quelqu'un : dejar."], ["llevar + durée + gérondif", "llevar + durée + gérondif exprime une action commencée dans le passé qui continue encore. Plus naturel à l'oral que « desde hace ». Négatif : llevar + durée + sin + infinitif."], ["sino (1 mot) ≠ si no (2 mots)", "Ils se prononcent pareil. si no = si + ne… pas (condition). sino = mais (correction après une négation). Test : si tu peux traduire « si… ne… pas », c'est deux mots."], ["Les 4 verbes de « devenir »", "ponerse : changement passager (humeur, couleur). volverse : changement profond (caractère). hacerse : par effort ou choix (métier, religion). quedarse : résultat d'un événement."], ["Diminutif -ito : affectueux OU péjoratif", "-ito peut être tendre (un cafecito, mi abuelita) ou ironique et méprisant (ese tonito, el listillo). C'est le contexte et l'intonation qui tranchent, comme « mon petit » en français."], ["Subjonctif de pedir (e → i)", "pedir change son radical e → i à toutes les personnes du subjonctif présent (comme servir, repetir, seguir)."], ["Pronom collé à l'infinitif et à l'impératif", "Comme avec le gérondif, le pronom se colle à la fin de l'infinitif et de l'impératif affirmatif. Il faut parfois un accent écrit pour garder la syllabe tonique. À l'impératif négatif, il repasse devant."], ["parole ≠ parole", "En anglais, parole = libération conditionnelle. Le sens français (« parole ») se dit word ou speech. À distinguer aussi de probation (sursis avec mise à l'épreuve, sans prison)."]]}
,
  {
    date: "16 oct. 2026",
    label: "Session immersion & avancé",
    es: [
      ["aguantar","Supporter / Tenir le coup"],["a lo mejor","Peut-être (registre oral)"],
      ["chapuzas","Bricolage / Boulot bâclé"],["dar fruto","Porter ses fruits"],
      ["dar igual","Être égal / S'en ficher"],["desatar","Détacher / Déchaîner"],
      ["empapado","Trempé"],["encajar","Emboîter / Encaisser"],
      ["enterarse","Se rendre compte / Apprendre"],["estar al tanto","Être au courant"],
      ["gastar","Dépenser / User"],["hacerse","Devenir / Se faire"],
      ["jalar","Tirer (Lat. Am.) / Manger (argot)"],["madrugar","Se lever tôt"],
      ["malgastar","Gaspiller"],["maña","Astuce / Habileté"],
      ["capacitar","Former / Habiliter"],["pillar","Attraper / Choper (argot)"],
      ["tirón","Coup sec / Vol à l'arraché"],["tutear","Tutoyer"]
    ],
    ln: [
      ["Kosepela","Rire / Se réjouir"],["Na libanda","Dehors / À l'extérieur"]
    ],
    en: [
      ["bestow","Accorder / Conférer"],["conceited","Vaniteux / Prétentieux"],
      ["daunting","Intimidant / Décourageant"],["disheartening","Décourageant / Démoralisant"],
      ["fathom","Comprendre / Saisir"],["grounded","Ancré / Équilibré"],
      ["gut-wrenching","Déchirant / Qui prend aux tripes"],["hefty","Costaud / Lourd"],
      ["looming","Imminent / Menaçant"],["outspoken","Franc / Qui dit ce qu'il pense"],
      ["parole board","Commission de libération conditionnelle"],
      ["reckoning","Jugement / Heure de vérité"],["rehab","Rééducation / Cure de désintox"],
      ["relentless","Implacable / Acharné"],["staggering","Stupéfiant / Ahurissant"],
      ["upheaval","Bouleversement / Chamboulement"]
    ],
    alertes: [
      ["dar fruto vs dar resultado", "Dar fruto = porter ses fruits (sens figuré, effort → résultat concret sur la durée). Dar resultado = donner des résultats (plus immédiat, technique). Dar fruto implique un processus organique."],
      ["fathom : registre soutenu", "Fathom (C1) = saisir/comprendre en profondeur. I can't fathom why… est plus littéraire que I can't understand. À l'oral américain courant, on dira plutôt figure out ou wrap my head around."],
      ["tutear ≠ vouvoyer", "Tutear = tutoyer (traiter de tú). Le contraire est tratar de usted. En Espagne le tutoiement domine au quotidien ; en Amérique latine, usted reste plus fréquent même entre proches dans certains pays (Colombie, Costa Rica)."],
      ["parole ≠ parole", "En anglais, parole = libération conditionnelle. Le sens français (« parole ») se dit word ou speech. À distinguer aussi de probation (sursis avec mise à l'épreuve, sans prison)."]
    ]
  },
  {
    date: "24 oct. 2026",
    label: "Nuances du quotidien · Slang US expressif",
    es: [
      ["cosilla","Petite chose / Bricole (dim. affectueux de cosa)"],
      ["ruido","Bruit"],
      ["hacer gracia","Faire rire / Amuser"],
      ["despierta","Éveillée / Dégourdie (fig.)"],
      ["convivir","Cohabiter / Vivre ensemble (au quotidien)"],
      ["desapercibido","Inaperçu / Qui passe inaperçu"],
      ["cortesía","Politesse / Courtoisie"],
      ["hacer una tontería","Faire une bêtise / une connerie"],
      ["que le saquen","Qu'on le sorte / vire (subj. de sacar)"],
      ["lupa","Loupe (litt.) / fig. passer au crible"]
    ],
    ln: [],
    en: [
      ["to slop","Renverser salement / Éclabousser (fam.)"],
      ["jiggling","Qui gigote / tremble / secoue"]
    ],
    alertes: [
      ["Diminutif -illa (cosilla)","Le suffixe -illa est un diminutif affectueux comme -ito : cosa → cosilla (petite chose, bricole). Courant à l'oral."],
      ["hacer gracia ≠ tener gracia","hacer gracia = faire rire (me hace gracia = ça me fait rire). tener gracia = être drôle / ironique (¡tiene gracia! = c'est un comble !). Ne pas confondre."],
      ["despierto : double sens","despierto = éveillé (litt. pas endormi) et aussi dégourdi, vif d'esprit (fig.). ser despierto = être dégourdi. estar despierto = être réveillé."],
      ["sacar au subjonctif : saquen","sacar → saque, saques, saque, saquemos, saquéis, saquen. Le -c- devient -qu- devant -e pour garder le son [k]. Comme buscar → busquen, tocar → toquen."],
      ["to slop vs to spill 🇬🇧","to spill = renverser (neutre). to slop = renverser de façon sale, éclabousser en faisant du dégât. Plus visuel et familier."],
      ["jiggling vs giggling 🇬🇧","jiggling = secouer, faire trembler (physique). giggling = glousser, pouffer de rire (son). Attention à ne pas confondre : le J fait toute la différence."]
    ]
  }
,
  {
    date: "6 nov. 2026",
    label: "Sentiments & déplacements · Vocabulaire domestique · Zelda & expressions",
    es: [
      ["se parte de risa","Se tordre de rire / Mourir de rire","Mi madre se parte de risa con esa serie.","Ma mère se tord de rire devant cette série."],
      ["meter a alguien","Mettre / Fourrer qqn quelque part (fam.)","Lo metieron en la cárcel por fraude.","Ils l'ont mis en prison pour fraude."],
      ["haber roto","Avoir cassé / Avoir rompu","Parece que han roto después de cinco años.","Il paraît qu'ils ont rompu après cinq ans."],
      ["echar de menos","Manquer (à qqn) — los echo de menos = ils me manquent","Los echo mucho de menos desde que me fui.","Ils me manquent beaucoup depuis que je suis parti."],
      ["hasta tercero","Jusqu'en troisième (année)","Estudié piano hasta tercero, luego lo dejé.","J'ai étudié le piano jusqu'en troisième année, puis j'ai arrêté."],
      ["atrasarse","Prendre du retard / Être en retard","Siempre se atrasaban con el alquiler.","Ils étaient toujours en retard pour le loyer."],
      ["decidir","Décider","Al final decidí dejar el trabajo y mudarme.","Au final j'ai décidé de quitter le boulot et de déménager."],
      ["lejos","Loin","Vive lejos de su familia.","Il/Elle vit loin de sa famille."],
      ["ha habido","Il y a eu (pretérito perfecto, lié au présent)","Ha habido muchos cambios este año.","Il y a eu beaucoup de changements cette année."],
      ["chocado","Heurté / Choqué / Accidenté","Me quedé chocado cuando me enteré.","Je suis resté choqué quand j'ai appris."],
      ["hubo","Il y eut / Il y a eu (pretérito indefinido)","Hubo un terremoto en 1985.","Il y eut un tremblement de terre en 1985."],
      ["descarrilamiento","Déraillement","El descarrilamiento provocó retrasos en toda la red.","Le déraillement a provoqué des retards sur tout le réseau."],
      ["irse","S'en aller / Partir — me iba = je m'en allais","Ya me iba cuando me dijeron que se canceló.","Je partais déjà quand on m'a dit que c'était annulé."],
      ["hacer felices","Rendre heureux (pluriel)","Lo único que quería era hacer felices a sus hijos.","La seule chose qu'il voulait c'était rendre ses enfants heureux."],
      ["a punto de","Sur le point de","La luna estaba a punto de estrellarse.","La lune était sur le point de s'écraser."],
      ["estrellarse","S'écraser / Se fracasser","El avión se estrelló contra la montaña.","L'avion s'est écrasé contre la montagne."],
      ["llanto","Pleurs / Larmes (nom)","No pudo contener el llanto en el aeropuerto.","Il n'a pas pu retenir ses larmes à l'aéroport."],
      ["aliviar","Soulager / Alléger","Solo quería aliviar su dolor.","Il/Elle voulait juste soulager sa douleur."],
      ["indeseable","Indésirable","Lo trataron como a un indeseable.","Ils l'ont traité comme un indésirable."],
      ["nevera","Réfrigérateur / Frigo (Espagne)","¿Puedes sacar la leche de la nevera?","Tu peux sortir le lait du frigo ?"],
      ["rostro","Visage (littéraire, plus soutenu que cara)","Se le notaba el cansancio en el rostro.","La fatigue se lisait sur son visage."],
      ["casado","Marié","Lleva diez años casado.","Ça fait dix ans qu'il est marié."],
      ["huir","Fuir / S'enfuir — huyen = ils fuient","Miles de familias huyen de la violencia.","Des milliers de familles fuient la violence."],
      ["bajarse de","Descendre de (un véhicule)","No te bajes todavía, faltan dos paradas.","Ne descends pas encore, il reste deux arrêts."]
    ],
    ln: [],
    en: [
      ["to behead","Décapiter","King Henry VIII beheaded two of his wives.","Le roi Henri VIII a décapité deux de ses femmes."],
      ["to be cleared","Être disculpé / Être innocenté","She was cleared of all charges.","Elle a été innocentée de toutes les accusations."],
      ["to overlook","Négliger / Passer à côté de / Donner sur","It's easy to overlook small details.","C'est facile de négliger les petits détails."],
      ["to despise","Mépriser / Avoir du mépris pour","He secretly despised his coworkers.","Il méprisait secrètement ses collègues."],
      ["to burn bridges","Couper les ponts (fig.)","Don't burn bridges with your manager.","Ne coupe pas les ponts avec ton manager."],
      ["to weigh down","Peser sur / Accabler / Plomber","Don't let negativity weigh you down.","Ne laisse pas la négativité te plomber."],
      ["to predate","Précéder / Être antérieur à","This tradition predates the Roman Empire.","Cette tradition est antérieure à l'Empire romain."],
      ["breeding ground","Terreau / Foyer (fig., souvent négatif)","Social media is a breeding ground for misinformation.","Les réseaux sociaux sont un terreau pour la désinformation."],
      ["to get off","Descendre (d'un transport fermé)","I got off at the next stop.","Je suis descendu au prochain arrêt."]
    ],
    alertes: [
      ["ha habido vs hubo","ha habido = passé lié au présent (il y a eu récemment). hubo = passé coupé, révolu, narratif. En Latam, hubo est utilisé pour tout."],
      ["Haber impersonnel = toujours singulier","⚠️ ha habido / hubo + pluriel : Ha habido problemas ✅ / Han habido problemas ❌. Hubieron ❌. Toujours 3e pers. singulier."],
      ["irse vs ir","ir = aller (direction). irse = s'en aller, quitter (focus sur le départ). Me iba = je m'en allais. Iba al trabajo = j'allais au travail."],
      ["a punto de (orthographe)","Toujours en 3 mots : a punto de. ≠ apunto (n'existe pas). A punto de + infinitif = sur le point de."],
      ["estrellarse (étymologie)","De estrella (étoile). Se transformer en étoile au sol → s'écraser. Aussi fig. : me estrellé en el examen = je me suis planté."],
      ["indeseable vs indeseado","indeseable = rejeté activement (jugement de valeur). indeseado = non souhaité (neutre, factuel). Un embarazo no deseado ≠ una persona indeseable."],
      ["cara vs rostro","cara = quotidien, oral. rostro = littéraire, solennel, émotionnel. semblante = l'expression du visage (C1)."],
      ["haber roto (participio)","roto = participe passé irrégulier de romper. Han roto = ils ont rompu (perfecto). Aussi adjectif : está roto = c'est cassé."],
      ["breeding ground 🇬🇧","= terreau, foyer. Presque toujours négatif (corruption, maladie, extrémisme). Variante : hotbed (même sens). Ne pas confondre avec breading (panure)."],
      ["to weigh down : double usage 🇬🇧","Sens physique (alourdir) et figuré (accabler). Le poids est constant et durable, pas un coup ponctuel. Synonymes C1 : to burden, to encumber, to bog down."],
      ["huir : conjugaison irrégulière","Le i → y devant voyelle : huyo, huyes, huye, huyen. Pretérito : huyó, huyeron. Gérondif : huyendo."],
      ["to overlook : triple sens 🇬🇧","1) Négliger, ne pas voir. 2) Fermer les yeux sur. 3) Donner sur (a room overlooking the park). Contexte crucial."]
    ]
  }
];

function openJournal(lang) {
  const titles = { es:'🇪🇸 Journal — Espagnol', ln:'🇨🇩 Journal — Lingala', en:'🇬🇧 Journal — Anglais' };
  document.getElementById('journal-title').textContent = titles[lang] || '📅 Journal des mots';
  renderJournal(lang);
  showScreen('screen-journal');
}

function renderJournal(lang) {
  lang = lang || 'es';
  const cont = document.getElementById('journal-content');
  const colors = { es:'var(--accent)', ln:'var(--success)', en:'#4cc9f0' };
  const color = colors[lang] || 'var(--accent)';
  const colorRgb = { es:'255,77,109', ln:'0,200,150', en:'76,201,240' }[lang] || '255,77,109';

  const sessions = JOURNAL_SESSIONS.map(s => {
    const mots = lang === 'es' ? (s.es || s.mots || [])
               : lang === 'ln' ? (s.ln || [])
               : lang === 'en' ? (s.en || [])
               : [];
    return { ...s, mots };
  }).filter(s => s.mots.length > 0);

  if(sessions.length === 0) {
    cont.innerHTML = `<div style="text-align:center;padding:3rem 1rem;color:var(--muted)">
      <div style="font-size:3rem;margin-bottom:.8rem;opacity:.4">📭</div>
      <div style="font-family:'Unbounded',sans-serif">Aucun mot pour cette langue</div>
    </div>`;
    return;
  }

  // Total stats
  const totalWords = sessions.reduce((sum, s) => sum + s.mots.length, 0);
  const lastDate = sessions[sessions.length - 1].date;

  const headerStats = `
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem;margin-bottom:1.5rem;animation:fadeIn .4s ease">
      <div style="background:linear-gradient(135deg,rgba(${colorRgb},.15),rgba(${colorRgb},.05));border:1.5px solid rgba(${colorRgb},.3);border-radius:14px;padding:.9rem .5rem;text-align:center">
        <div style="font-family:'Unbounded',sans-serif;font-size:1.6rem;color:${color};line-height:1">${totalWords}</div>
        <div style="font-size:.65rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-top:.3rem">Mots</div>
      </div>
      <div style="background:linear-gradient(135deg,rgba(${colorRgb},.15),rgba(${colorRgb},.05));border:1.5px solid rgba(${colorRgb},.3);border-radius:14px;padding:.9rem .5rem;text-align:center">
        <div style="font-family:'Unbounded',sans-serif;font-size:1.6rem;color:${color};line-height:1">${sessions.length}</div>
        <div style="font-size:.65rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-top:.3rem">Sessions</div>
      </div>
      <div style="background:linear-gradient(135deg,rgba(${colorRgb},.15),rgba(${colorRgb},.05));border:1.5px solid rgba(${colorRgb},.3);border-radius:14px;padding:.9rem .5rem;text-align:center">
        <div style="font-family:'Unbounded',sans-serif;font-size:.95rem;color:${color};line-height:1.1;padding-top:.2rem">${lastDate.split(' ').slice(0,2).join(' ')}</div>
        <div style="font-size:.65rem;color:var(--muted);letter-spacing:.1em;text-transform:uppercase;margin-top:.4rem">Dernier ajout</div>
      </div>
    </div>`;

  // Sessions as expandable gallery cards
  const sessionCards = sessions.reverse().map((s, idx) => {
    const motsHtml = s.mots.map(([w, t], i) => `
      <div class="journal-word-chip" style="
        background: rgba(${colorRgb},.08);
        border: 1px solid rgba(${colorRgb},.2);
        border-radius: 10px;
        padding: .5rem .75rem;
        display: flex; align-items: center; justify-content: space-between;
        gap: .5rem; font-size: .78rem;
        animation: fadeIn .3s ease ${i * 0.02}s both;
        transition: all .2s;
      ">
        <span style="color:${color};font-weight:700;flex-shrink:0">${w}</span>
        <span style="color:var(--muted);font-size:.72rem;text-align:right;line-height:1.3">${t}</span>
      </div>`).join('');

    return `
    <div class="journal-session-card" id="js-${idx}" style="
      background: linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%);
      border: 1.5px solid var(--border);
      border-radius: 18px;
      padding: 1.2rem 1.1rem;
      margin-bottom: 1rem;
      box-shadow: 0 4px 16px rgba(0,0,0,.15);
      transition: all .3s cubic-bezier(.2,.9,.3,1.1);
      animation: fadeIn .4s ease ${idx * 0.05}s both;
    ">
      <div onclick="toggleJournalSession(${idx})" style="cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:.8rem;flex-wrap:wrap">
        <div style="flex:1;min-width:0">
          <div style="font-family:'Unbounded',sans-serif;font-size:.95rem;color:${color};margin-bottom:.3rem;display:flex;align-items:center;gap:.5rem">
            <span style="width:8px;height:8px;border-radius:50%;background:${color};box-shadow:0 0 10px ${color}">​</span>
            ${s.date}
          </div>
          <div style="font-size:.75rem;color:var(--muted);letter-spacing:.05em">${s.label}</div>
        </div>
        <div style="display:flex;align-items:center;gap:.6rem">
          <div style="background:${color};color:#fff;font-family:'Unbounded',sans-serif;font-size:.7rem;padding:.25rem .65rem;border-radius:999px;font-weight:700">${s.mots.length}</div>
          <div class="journal-chevron" style="font-size:1rem;color:var(--muted);transition:transform .3s">▾</div>
        </div>
      </div>
      <div class="journal-session-body" style="display:none;margin-top:1rem;animation:fadeIn .3s ease">
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:.4rem">
          ${motsHtml}
        </div>
        ${s.alertes && s.alertes.length > 0 && lang === 'es' ? `
        <div style="margin-top:1rem;padding:.75rem 1rem;background:rgba(255,214,10,.07);border:1px solid rgba(255,214,10,.2);border-radius:10px">
          <div style="font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent2);margin-bottom:.5rem">⚠️ Grammaire à venir</div>
          <div style="font-size:.78rem;color:var(--muted);line-height:1.8">
            ${s.alertes.map(([k,v]) => `<strong style="color:var(--text)">${k}</strong> — ${v}`).join('<br>')}
          </div>
        </div>` : ''}
      </div>
    </div>`;
  }).join('');

  cont.innerHTML = headerStats + sessionCards;

  // Auto-expand the most recent session
  if(sessions.length > 0) {
    setTimeout(() => toggleJournalSession(0), 100);
  }
}

function toggleJournalSession(idx) {
  const card = document.getElementById(`js-${idx}`);
  if(!card) return;
  const body = card.querySelector('.journal-session-body');
  const chevron = card.querySelector('.journal-chevron');
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}

// ═══════════════════════════════════════════════
// SYNESTHESIA COLOR MAP (graphème → couleur fixe)
// ═══════════════════════════════════════════════
const LETTER_COLORS = {
  a:'#ef4444',b:'#f97316',c:'#eab308',d:'#84cc16',e:'#22c55e',
  f:'#14b8a6',g:'#06b6d4',h:'#3b82f6',i:'#6366f1',j:'#8b5cf6',
  k:'#a855f7',l:'#ec4899',m:'#f43f5e',n:'#fb923c',o:'#facc15',
  p:'#4ade80',q:'#2dd4bf',r:'#38bdf8',s:'#818cf8',t:'#c084fc',
  u:'#f472b6',v:'#fb7185',w:'#fde047',x:'#86efac',y:'#67e8f9',
  z:'#a5b4fc',
  á:'#ef4444',é:'#22c55e',í:'#6366f1',ó:'#facc15',ú:'#f472b6',
  ñ:'#fb923c',ü:'#f472b6'
};

function colorWord(word) {
  return word.split('').map(ch => {
    const c = LETTER_COLORS[ch.toLowerCase()];
    return c ? `<span style="color:${c}">${ch}</span>` : `<span style="color:var(--muted)">${ch}</span>`;
  }).join('');
}

// Word → dominant color (average of first 3 consonants/vowels)
function wordToColor(word) {
  const palette = ['#ef4444','#f97316','#eab308','#84cc16','#22c55e',
                   '#14b8a6','#06b6d4','#3b82f6','#6366f1','#8b5cf6',
                   '#a855f7','#ec4899','#f43f5e','#fb923c','#facc15'];
  let hash = 0;
  for(let i=0; i<word.length; i++) hash = (hash*31 + word.charCodeAt(i)) & 0xfffffff;
  return palette[hash % palette.length];
}

// ═══════════════════════════════════════════════
// PALETTE SYNESTHÉSIQUE
// ═══════════════════════════════════════════════
let palState = { cards:[], count:5, phase:'setup', quizIdx:0, score:0 };

function initPalette() {
  palState.count = 5;
  palState.score = 0;
  showScreen('screen-palette');
  document.getElementById('pal-setup').style.display='block';
  document.getElementById('pal-memorize').style.display='none';
  document.getElementById('pal-quiz').style.display='none';
}

function setPalCount(n, btn) {
  palState.count = n;
  document.querySelectorAll('[id^="pal-m"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function startPalette() {
  const words = shuffle(DATA).slice(0, palState.count);
  palState.cards = words.map(w => ({ ...w, color: wordToColor(w.es) }));
  document.getElementById('pal-setup').style.display='none';
  document.getElementById('pal-memorize').style.display='block';

  const grid = document.getElementById('pal-cards-grid');
  grid.innerHTML = palState.cards.map((c,i) => `
    <div style="background:${c.color}22;border:2px solid ${c.color};border-radius:12px;padding:1rem .8rem;text-align:center;cursor:default">
      <div style="width:40px;height:40px;border-radius:50%;background:${c.color};margin:0 auto .6rem;box-shadow:0 0 15px ${c.color}88"></div>
      <div style="font-weight:700;font-size:.95rem;color:var(--text)">${c.es}</div>
      <div style="font-size:.75rem;color:var(--muted);margin-top:.2rem">${c.fr}</div>
    </div>`).join('');
}

function startPaletteQuiz() {
  palState.quizIdx = 0;
  document.getElementById('pal-memorize').style.display='none';
  document.getElementById('pal-quiz').style.display='block';
  renderPaletteQuiz();
}

function renderPaletteQuiz() {
  const card = palState.cards[palState.quizIdx];
  document.getElementById('pal-quiz-word').textContent = card.es;
  document.getElementById('pal-quiz-fr').textContent = card.fr;
  setProgress('pal-progress', palState.quizIdx, palState.cards.length);
  document.getElementById('pal-score').textContent = palState.score + ' pts';
  document.getElementById('pal-feedback').innerHTML = '';

  // Build color options: correct + 4 distractors
  const allColors = palState.cards.map(c => c.color);
  const extraColors = ['#ef4444','#22c55e','#3b82f6','#a855f7','#fb923c','#facc15','#ec4899','#14b8a6'];
  const pool = shuffle([...new Set([...allColors, ...extraColors])].filter(c => c !== card.color)).slice(0,4);
  const opts = shuffle([card.color, ...pool]).slice(0,5);

  const cont = document.getElementById('pal-color-opts');
  cont.innerHTML = opts.map(col => `
    <div onclick="checkPaletteColor('${col}','${card.color}')"
      style="width:60px;height:60px;border-radius:50%;background:${col};cursor:pointer;
             border:3px solid transparent;transition:all .2s;box-shadow:0 0 12px ${col}66"
      onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
    </div>`).join('');
}

function checkPaletteColor(chosen, correct) {
  const fb = document.getElementById('pal-feedback');
  const circles = document.querySelectorAll('#pal-color-opts div');
  circles.forEach(c => c.onclick = null);

  if(chosen === correct) {
    palState.score += 15;
    addXP(15);
    fb.innerHTML = `<span style="color:var(--success)">✅ Bonne couleur ! +15 pts</span>`;
    showToast('✅ +15 pts','correct-toast');
  } else {
    fb.innerHTML = `<span style="color:var(--error)">❌ C'était <span style="display:inline-block;width:16px;height:16px;border-radius:50%;background:${correct};vertical-align:middle"></span></span>`;
    showToast('❌','wrong-toast');
  }
  palState.quizIdx++;
  setTimeout(() => {
    if(palState.quizIdx >= palState.cards.length) {
      showResults('palette', palState.score, palState.cards.length*15, []);
    } else renderPaletteQuiz();
  }, 1200);
}

// ═══════════════════════════════════════════════
// MIND MAP
// ═══════════════════════════════════════════════
const MM_THEMES = {
  'Actions':['caminar','luchar','pelear','robar','disfrutar','apoyar','charlar','subir','bajar','levantarse','moverse','borrar','cerrar','esperar','seguir','tocar','sudar','montar','girarse','agacharse'],
  'Émotions':['enamorar','enfadado','harto','aburrido','acojonar'],
  'Lieux & Objets':['vecindario','camino','cancha','pelota','jabón','hielo','ventanilla','escudo'],
  'Qualités':['pesado','ambicioso','guapo','oscuro','cierto','parecido','propio'],
  'Expressions':['aún','así','ya','aunque','pues','luego de','tras','de acuerdo','claro que','por cierto','y punto','vaya','hasta','tanto'],
  'Quotidien':['cenar','quedar','Mano','Tierra','cita','tarea','rato','lado','ahora','minuto','durante','poco','vez','memoria'],
};

function initMindMap() {
  showScreen('screen-mindmap');
  setTimeout(drawMindMap, 100);
}

function drawMindMap() {
  const canvas = document.getElementById('mm-canvas');
  const container = canvas.parentElement;
  const W = container.clientWidth;
  const H = Math.max(500, window.innerHeight * 0.6);
  canvas.width = W * devicePixelRatio;
  canvas.height = H * devicePixelRatio;
  canvas.style.height = H + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(devicePixelRatio, devicePixelRatio);

  const themes = Object.entries(MM_THEMES);
  const themeColors = ['#ef4444','#f97316','#22c55e','#3b82f6','#a855f7','#ec4899'];
  const cx = W/2, cy = H/2;
  const nodes = [];

  // Center node
  nodes.push({x:cx,y:cy,r:32,label:'Vocab',color:'var(--accent)',isCenter:true,word:null,fr:null});

  // Theme nodes
  themes.forEach(([theme, words], ti) => {
    const angle = (ti / themes.length) * Math.PI * 2 - Math.PI/2;
    const dist = Math.min(W,H) * 0.28;
    const tx = cx + Math.cos(angle)*dist;
    const ty = cy + Math.sin(angle)*dist;
    const tc = themeColors[ti % themeColors.length];
    nodes.push({x:tx,y:ty,r:22,label:theme,color:tc,isTheme:true,word:null,fr:null});

    // Word nodes
    const visible = words.slice(0,6);
    visible.forEach((w, wi) => {
      const spread = (wi/(visible.length-1||1) - 0.5) * 1.2;
      const wAngle = angle + spread * 0.7;
      const wDist = Math.min(W,H) * 0.14;
      const wx = tx + Math.cos(wAngle)*wDist;
      const wy = ty + Math.sin(wAngle)*wDist;
      const vocabEntry = DATA.find(d => d.es.toLowerCase() === w.toLowerCase());
      nodes.push({x:wx,y:wy,r:14,label:w,color:tc+'aa',isWord:true,
                  word:w,fr:vocabEntry?.fr||'',themeColor:tc});
    });
  });

  // Draw edges
  ctx.lineWidth = 1.5;
  nodes.forEach(n => {
    if(n.isTheme) {
      ctx.strokeStyle = n.color+'66';
      ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(n.x,n.y); ctx.stroke();
    }
    if(n.isWord) {
      const parent = nodes.find(p => p.isTheme && p.color.startsWith(n.themeColor.slice(0,7)));
      if(parent) {
        ctx.strokeStyle = n.themeColor+'44';
        ctx.beginPath(); ctx.moveTo(parent.x,parent.y); ctx.lineTo(n.x,n.y); ctx.stroke();
      }
    }
  });

  // Draw nodes
  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
    ctx.fillStyle = n.isCenter ? '#ff4d6d' : n.isTheme ? n.color : n.color;
    ctx.fill();
    ctx.strokeStyle = '#ffffff22';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#fff';
    ctx.font = `${n.isCenter?'bold ':n.isTheme?'600 ':''}${n.isCenter?13:n.isTheme?11:9}px DM Sans, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const maxW = n.r*1.8;
    if(ctx.measureText(n.label).width > maxW && n.label.length > 8) {
      ctx.font = `${n.isTheme?'600 ':''}8px DM Sans, sans-serif`;
    }
    ctx.fillText(n.label, n.x, n.y);
  });

  // Legend
  const legend = document.getElementById('mm-legend');
  legend.innerHTML = themes.map(([t],i) =>
    `<span style="background:${themeColors[i]}22;color:${themeColors[i]};border:1px solid ${themeColors[i]}44;border-radius:999px;padding:.2rem .6rem;font-size:.7rem">${t}</span>`
  ).join('');

  // Tooltip on click
  const tooltip = document.getElementById('mm-tooltip');
  canvas.onclick = (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left);
    const my = (e.clientY - rect.top);
    const hit = nodes.find(n => Math.hypot(n.x-mx,n.y-my) < n.r+8);
    if(hit && hit.isWord && hit.fr) {
      tooltip.style.display='block';
      tooltip.style.left = (e.clientX+12)+'px';
      tooltip.style.top = (e.clientY-10)+'px';
      tooltip.innerHTML = `<strong style="color:${hit.themeColor}">${hit.word}</strong><br><span style="color:var(--muted)">${hit.fr}</span>`;
      setTimeout(()=>tooltip.style.display='none', 2500);
    } else { tooltip.style.display='none'; }
  };
}

// ═══════════════════════════════════════════════
// STORY MODE (IA)
// ═══════════════════════════════════════════════
let storyState = { words:[], storyText:'', score:0 };

function initStory() {
  storyState.score = 0;
  showScreen('screen-story');
  document.getElementById('story-setup').style.display='block';
  document.getElementById('story-read').style.display='none';
  document.getElementById('story-quiz').style.display='none';
  document.getElementById('story-loading').style.display='none';
  document.getElementById('story-score').textContent='0 pts';
}

async function generateStory() {
  const words = shuffle(DATA).slice(0,5);
  storyState.words = words;
  document.getElementById('story-setup').querySelector('.btn').style.display='none';
  document.getElementById('story-loading').style.display='block';

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:1000,
        messages:[{role:'user',content:`Écris une histoire courte et vivante en espagnol (8-10 phrases) qui utilise naturellement ces 5 mots espagnols : ${words.map(w=>w.es).join(', ')}. 
L'histoire doit être mémorable, légèrement drôle ou surprenante pour faciliter la mémorisation. 
Mets chacun des 5 mots EN MAJUSCULES dans le texte.
Après l'histoire, ajoute une ligne "TRADUCTION: " avec la traduction française complète.
Réponds uniquement avec l'histoire + la traduction, sans titre ni commentaire.`}]
      })
    });
    const data = await res.json();
    const full = data.content[0].text;
    const parts = full.split('TRADUCTION:');
    storyState.storyText = parts[0].trim();
    storyState.storyTranslation = parts[1]?.trim() || '';

    document.getElementById('story-loading').style.display='none';
    document.getElementById('story-setup').style.display='none';
    document.getElementById('story-read').style.display='block';

    // Highlight words in story
    let highlighted = storyState.storyText;
    words.forEach(w => {
      const color = wordToColor(w.es);
      highlighted = highlighted.replace(new RegExp(w.es.toUpperCase(),'g'),
        `<strong style="color:${color};background:${color}22;padding:0 3px;border-radius:4px">${w.es.toUpperCase()}</strong>`);
    });
    document.getElementById('story-text').innerHTML = highlighted +
      (storyState.storyTranslation ? `<div style="margin-top:1rem;padding-top:.8rem;border-top:1px solid var(--border);color:var(--muted);font-size:.85rem;font-style:italic">${storyState.storyTranslation}</div>` : '');

    // Word chips
    document.getElementById('story-words-display').innerHTML = words.map(w =>
      `<span style="background:${wordToColor(w.es)}22;color:${wordToColor(w.es)};border:1px solid ${wordToColor(w.es)}44;border-radius:999px;padding:.3rem .8rem;font-size:.82rem;font-weight:600">${w.es} <span style="opacity:.6;font-weight:400">= ${w.fr}</span></span>`
    ).join('');

  } catch(e) {
    document.getElementById('story-loading').style.display='none';
    document.getElementById('story-setup').querySelector('.btn').style.display='block';
    showToast('Erreur de génération','wrong-toast');
  }
}

function startStoryQuiz() {
  document.getElementById('story-read').style.display='none';
  document.getElementById('story-quiz').style.display='block';

  // Replace words in story with blanks + inputs
  let quizText = storyState.storyText;
  storyState.words.forEach((w,i) => {
    quizText = quizText.replace(new RegExp(w.es.toUpperCase(),'g'),
      `<input class="exo-input" data-answer="${w.es}" data-idx="${i}" style="width:110px;text-transform:uppercase" placeholder="?" autocomplete="off" spellcheck="false">`);
  });
  document.getElementById('story-quiz-text').innerHTML = quizText;

  // Hints
  document.getElementById('story-inputs').innerHTML = storyState.words.map((w,i) =>
    `<div style="font-size:.8rem;color:var(--muted)">Mot ${i+1} : <strong style="color:${wordToColor(w.es)}">${w.fr}</strong></div>`
  ).join('');

  document.querySelectorAll('#story-quiz-text .exo-input').forEach(inp => {
    inp.addEventListener('keydown', e => { if(e.key==='Enter') checkStory(); });
  });
}

function checkStory() {
  const inputs = document.querySelectorAll('#story-quiz-text .exo-input');
  let correct = 0;
  inputs.forEach(inp => {
    const ans = normalize(inp.dataset.answer);
    const att = normalize(inp.value);
    if(att === ans || levenshtein(att,ans) <= 1) {
      inp.classList.add('correct'); inp.value = inp.dataset.answer.toUpperCase();
      correct++;
    } else {
      inp.classList.add('wrong'); inp.value = inp.dataset.answer.toUpperCase();
    }
  });
  const pts = correct * 20;
  storyState.score += pts;
  addXP(pts);
  document.getElementById('story-score').textContent = storyState.score + ' pts';
  const pct = Math.round(correct/inputs.length*100);
  document.getElementById('story-result').innerHTML = `
    <div style="font-family:'Unbounded',sans-serif;font-size:1.1rem">${pct===100?'🏆':pct>=60?'💪':'📚'} ${correct}/${inputs.length}</div>
    <div style="color:var(--accent2);font-size:.85rem;margin-top:.3rem">+${pts} XP</div>
    <div class="btn-row" style="margin-top:1rem">
      <button class="btn btn-secondary" onclick="initStory()">Nouvelle histoire</button>
      <button class="btn btn-ghost" onclick="goHome()">Accueil</button>
    </div>`;
}

// ═══════════════════════════════════════════════
// LETTRES COLORÉES
// ═══════════════════════════════════════════════
let clState = { cards:[], idx:0, score:0, phase:'view' };

function initColorLetters() {
  clState = { cards: shuffle(DATA), idx:0, score:0, phase:'view' };
  showScreen('screen-colorletters');

  // Show alphabet preview
  const prev = document.getElementById('cl-alphabet-preview');
  prev.innerHTML = 'abcdefghijklmnopqrstuvwxyzáéíóúñ'.split('').map(l =>
    `<span style="color:${LETTER_COLORS[l]||'var(--muted)'};font-family:'Unbounded',sans-serif;font-size:.9rem;font-weight:700">${l}</span>`
  ).join('');

  document.getElementById('cl-setup').style.display='block';
  document.getElementById('cl-game').style.display='none';
}

function startColorLetters() {
  document.getElementById('cl-setup').style.display='none';
  document.getElementById('cl-game').style.display='block';
  renderColorLetters();
}

function renderColorLetters() {
  const card = clState.cards[clState.idx];
  setProgress('cl-progress', clState.idx, clState.cards.length);
  document.getElementById('cl-score').textContent = clState.score + ' pts';
  document.getElementById('cl-word-colored').innerHTML = colorWord(card.es);
  document.getElementById('cl-word-fr').textContent = card.fr;
  document.getElementById('cl-feedback').innerHTML = '';

  // Phase: view for 2s then ask QCM
  document.getElementById('cl-options-area').innerHTML = `
    <div style="font-size:.8rem;color:var(--muted);margin-bottom:.8rem">Mémorise les couleurs de ce mot…</div>
    <div style="font-size:1.8rem;font-family:'Unbounded',sans-serif">${colorWord(card.es)}</div>`;
  document.getElementById('cl-options').style.display='none';

  setTimeout(() => {
    document.getElementById('cl-options-area').innerHTML = `<div style="font-size:.8rem;color:var(--muted);margin-bottom:.6rem">Quelle est la couleur de la première lettre ?</div>`;
    const firstLetter = card.es[0].toLowerCase();
    const correctColor = LETTER_COLORS[firstLetter] || '#fff';
    const allC = Object.values(LETTER_COLORS);
    const distractors = shuffle(allC.filter(c=>c!==correctColor)).slice(0,3);
    const opts = shuffle([correctColor,...distractors]);

    const cont = document.getElementById('cl-options');
    cont.style.display='grid';
    cont.innerHTML = '';
    opts.forEach(col => {
      const btn = document.createElement('button');
      btn.className='option-btn';
      btn.style.background = col+'22';
      btn.style.borderColor = col+'66';
      btn.innerHTML = `<span style="display:inline-block;width:28px;height:28px;border-radius:50%;background:${col};vertical-align:middle;margin-right:.4rem"></span> <span style="color:${col};font-family:'Unbounded',sans-serif;font-size:.7rem">${col}</span>`;
      btn.addEventListener('click', ()=>checkColorLetters(btn, col, correctColor, card));
      cont.appendChild(btn);
    });
  }, 2000);
}

function checkColorLetters(btn, chosen, correct, card) {
  document.querySelectorAll('#cl-options .option-btn').forEach(b=>b.disabled=true);
  const fb = document.getElementById('cl-feedback');
  if(chosen===correct) {
    btn.style.borderColor=correct;
    clState.score+=10; addXP(10);
    fb.innerHTML=`<span style="color:var(--success)">✅ +10 pts — <strong style="color:${correct}">${card.es[0].toUpperCase()}</strong> = <span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${correct};vertical-align:middle"></span></span>`;
    showToast('✅ +10 pts','correct-toast');
  } else {
    fb.innerHTML=`<span style="color:var(--error)">❌ C'était <span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${correct};vertical-align:middle"></span></span>`;
    showToast('❌','wrong-toast');
  }
  document.getElementById('cl-score').textContent=clState.score+' pts';
  clState.idx++;
  setTimeout(()=>{
    if(clState.idx>=clState.cards.length) showResults('colorletters',clState.score,clState.cards.length*10,[]);
    else renderColorLetters();
  },1300);
}

// ═══════════════════════════════════════════════
// AURA PERSONNALISÉE
// ═══════════════════════════════════════════════
const AURA_COLORS = ['#ef4444','#f97316','#eab308','#84cc16','#22c55e','#14b8a6',
  '#06b6d4','#3b82f6','#6366f1','#8b5cf6','#a855f7','#ec4899','#f43f5e','#fb923c'];

let auraState = { cards:[], idx:0, score:0, quizIdx:0 };

function loadAuras() { return JSON.parse(localStorage.getItem('aura_map')||'{}'); }
function saveAura(word, color) { const m=loadAuras(); m[word]=color; localStorage.setItem('aura_map',JSON.stringify(m)); }

function initAura() {
  showScreen('screen-aura');
  document.getElementById('aura-setup').style.display='block';
  document.getElementById('aura-assign').style.display='none';
  document.getElementById('aura-quiz-area').style.display='none';
  const auras = loadAuras();
  const count = Object.keys(auras).length;
  document.getElementById('aura-saved-count').textContent = count > 0 ? `✨ ${count} mots ont déjà une aura sauvegardée` : 'Aucune aura sauvegardée — commence par en assigner !';
  document.getElementById('aura-quiz-start-btn').style.display = count >= 3 ? 'inline-flex' : 'none';
  auraState.score = 0;
}

function startAuraAssign() {
  const auras = loadAuras();
  auraState.cards = shuffle(DATA).filter(w => !auras[w.es]).slice(0, 10);
  if(auraState.cards.length === 0) { auraState.cards = shuffle(DATA).slice(0,10); }
  auraState.idx = 0;
  document.getElementById('aura-setup').style.display='none';
  document.getElementById('aura-assign').style.display='block';
  renderAuraAssign();
}

let selectedAuraColor = AURA_COLORS[0];

function renderAuraAssign() {
  const card = auraState.cards[auraState.idx];
  document.getElementById('aura-word').textContent = card.es;
  document.getElementById('aura-fr').textContent = card.fr;
  setProgress('aura-progress', auraState.idx, auraState.cards.length);
  document.getElementById('aura-counter-lbl').textContent = `${auraState.idx+1} / ${auraState.cards.length}`;
  selectedAuraColor = wordToColor(card.es); // default suggestion

  const picker = document.getElementById('aura-picker');
  picker.innerHTML = AURA_COLORS.map(c => `
    <div onclick="selectAuraColor('${c}',this)"
      style="width:44px;height:44px;border-radius:50%;background:${c};cursor:pointer;
             border:3px solid ${c===selectedAuraColor?'white':'transparent'};
             transition:all .2s;box-shadow:0 0 10px ${c}66"
      onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
    </div>`).join('');

  document.getElementById('aura-color-input').value = selectedAuraColor;
  document.getElementById('aura-color-input').oninput = function() { selectAuraColor(this.value, null); };
}

function selectAuraColor(color, el) {
  selectedAuraColor = color;
  document.querySelectorAll('#aura-picker div').forEach(d => d.style.borderColor='transparent');
  if(el) el.style.borderColor='white';
  document.getElementById('aura-word').style.textShadow = `0 0 30px ${color}`;
  document.getElementById('aura-word').style.color = color;
}

function confirmAura() {
  const card = auraState.cards[auraState.idx];
  saveAura(card.es, selectedAuraColor);
  showToast(`✨ Aura sauvegardée`, 'correct-toast');
  document.getElementById('aura-word').style.textShadow='';
  document.getElementById('aura-word').style.color='';
  auraState.idx++;
  if(auraState.idx >= auraState.cards.length) {
    initAura();
  } else renderAuraAssign();
}

function startAuraQuiz() {
  const auras = loadAuras();
  const pairs = Object.entries(auras);
  if(pairs.length < 3) return;
  auraState.cards = shuffle(pairs).slice(0,Math.min(10,pairs.length)).map(([es,color]) => {
    const entry = DATA.find(d=>d.es===es)||{es,fr:'?'};
    return {...entry, auraColor:color};
  });
  auraState.quizIdx = 0; auraState.score = 0;
  document.getElementById('aura-setup').style.display='none';
  document.getElementById('aura-quiz-area').style.display='block';
  renderAuraQuiz();
}

function renderAuraQuiz() {
  const card = auraState.cards[auraState.quizIdx];
  document.getElementById('aura-quiz-word').textContent = card.es;
  document.getElementById('aura-quiz-word').style.color = 'var(--text)';
  document.getElementById('aura-quiz-fr').textContent = card.fr;
  document.getElementById('aura-quiz-fb').innerHTML='';
  setProgress('aura-progress', auraState.quizIdx, auraState.cards.length);
  document.getElementById('aura-score').textContent = auraState.score+' pts';

  const correct = card.auraColor;
  const pool = shuffle(AURA_COLORS.filter(c=>c!==correct)).slice(0,4);
  const opts = shuffle([correct,...pool]).slice(0,5);

  const cont = document.getElementById('aura-quiz-opts');
  cont.innerHTML = opts.map(col=>`
    <div onclick="checkAuraQuiz('${col}','${correct}')"
      style="width:56px;height:56px;border-radius:50%;background:${col};cursor:pointer;
             border:3px solid transparent;transition:all .2s;box-shadow:0 0 12px ${col}66"
      onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
    </div>`).join('');
}

function checkAuraQuiz(chosen, correct) {
  document.querySelectorAll('#aura-quiz-opts div').forEach(d=>d.onclick=null);
  const fb = document.getElementById('aura-quiz-fb');
  const card = auraState.cards[auraState.quizIdx];
  if(chosen===correct) {
    document.getElementById('aura-quiz-word').style.color=correct;
    document.getElementById('aura-quiz-word').style.textShadow=`0 0 20px ${correct}`;
    auraState.score+=15; addXP(15);
    fb.innerHTML=`<span style="color:var(--success)">✅ Tu as retrouvé ton aura ! +15 pts</span>`;
    showToast('✅ +15 pts','correct-toast');
  } else {
    fb.innerHTML=`<span style="color:var(--error)">❌ Ton aura était <span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${correct};vertical-align:middle"></span></span>`;
  }
  document.getElementById('aura-score').textContent=auraState.score+' pts';
  auraState.quizIdx++;
  setTimeout(()=>{
    if(auraState.quizIdx>=auraState.cards.length) showResults('aura',auraState.score,auraState.cards.length*15,[]);
    else renderAuraQuiz();
  },1400);
}

// ═══════════════════════════════════════════════
// IMAGE MENTALE (IA)
// ═══════════════════════════════════════════════
let imState = { cards:[], idx:0, score:0 };

function initImageMentale() {
  imState = { cards: shuffle(DATA), idx:0, score:0 };
  showScreen('screen-imagementale');
  renderImageMentale();
  document.getElementById('im-input').addEventListener('keydown', e=>{ if(e.key==='Enter') generateMnemonic(); });
}

function renderImageMentale() {
  const card = imState.cards[imState.idx];
  setProgress('im-progress', imState.idx, imState.cards.length);
  document.getElementById('im-score').textContent = imState.score+' pts';
  document.getElementById('im-word').textContent = card.es;
  document.getElementById('im-word').style.color = wordToColor(card.es);
  document.getElementById('im-hint').textContent = 'Ferme les yeux 3 secondes, quelle image te vient ?';
  document.getElementById('im-input').value='';
  document.getElementById('im-input').className='type-input';
  document.getElementById('im-ai-result').innerHTML='';
  document.getElementById('im-next-area').style.display='none';
  document.getElementById('im-generate-btn').style.display='block';
}

async function generateMnemonic() {
  const card = imState.cards[imState.idx];
  const img = document.getElementById('im-input').value.trim();
  if(!img) { document.getElementById('im-hint').textContent='Décris d\'abord ton image !'; return; }

  document.getElementById('im-generate-btn').style.display='none';
  document.getElementById('im-ai-result').innerHTML=`<div class="ai-loading" style="justify-content:center"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model:'claude-sonnet-4-20250514', max_tokens:1000,
        messages:[{role:'user',content:`Le mot espagnol "${card.es}" signifie "${card.fr}".
L'apprenant a cette image mentale : "${img}".
Crée une phrase mnémotechnique COURTE et MÉMORABLE (1-2 phrases max) qui :
1. Connecte l'image mentale "${img}" au mot espagnol "${card.es}" ET à sa traduction "${card.fr}"
2. Est visuelle, surprenante ou légèrement absurde pour ancrer le lien
3. Si possible joue sur la sonorité du mot espagnol
Réponds uniquement avec la phrase mnémotechnique, rien d'autre.`}]
      })
    });
    const data = await res.json();
    const mnemonic = data.content[0].text.trim();

    document.getElementById('im-ai-result').innerHTML=`
      <div class="ai-bubble">
        <div class="ai-badge">🖼️ Mnémotechnique</div>
        <div style="margin-top:.4rem;font-size:.95rem;line-height:1.6">${mnemonic}</div>
      </div>`;

    // Show translation QCM
    const others = shuffle(DATA.filter(w=>w.es!==card.es)).slice(0,3);
    const opts = shuffle([card,...others]);
    const area = document.getElementById('im-next-area');
    area.style.display='block';
    document.getElementById('im-translation-opts').innerHTML='';
    opts.forEach(opt=>{
      const btn=document.createElement('button');
      btn.className='option-btn';
      btn.textContent=opt.fr;
      btn.addEventListener('click',()=>{
        document.querySelectorAll('#im-translation-opts .option-btn').forEach(b=>b.disabled=true);
        if(opt.es===card.es){
          btn.classList.add('correct');
          imState.score+=25; addXP(25);
          showToast('✅ +25 pts','correct-toast');
        } else {
          btn.classList.add('wrong');
          document.querySelectorAll('#im-translation-opts .option-btn').forEach(b=>{ if(b.textContent===card.fr) b.classList.add('correct'); });
        }
        document.getElementById('im-score').textContent=imState.score+' pts';
        imState.idx++;
        setTimeout(()=>{
          if(imState.idx>=imState.cards.length) showResults('imagementale',imState.score,imState.cards.length*25,[]);
          else renderImageMentale();
        },1800);
      });
      document.getElementById('im-translation-opts').appendChild(btn);
    });

  } catch(e) {
    document.getElementById('im-ai-result').innerHTML='<div style="color:var(--error)">Erreur. Réessaie.</div>';
    document.getElementById('im-generate-btn').style.display='block';
  }
}

// ═══════════════════════════════════════════════
// CALENDRIER DES MOTS
// ═══════════════════════════════════════════════
let calState = { year:2026, month:4 }; // 0-indexed, 4=mai

const MONTH_COLORS = [
  '#3b82f6','#6366f1','#8b5cf6','#a855f7',
  '#ec4899','#f43f5e','#f97316','#eab308',
  '#84cc16','#22c55e','#14b8a6','#06b6d4'
];
const MONTH_NAMES = ['Janvier','Février','Mars','Avril','Mai','Juin',
  'Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

function initCalendrier() {
  showScreen('screen-calendrier');
  renderCalendrier();
}

function calNav(dir) {
  calState.month += dir;
  if(calState.month > 11) { calState.month=0; calState.year++; }
  if(calState.month < 0) { calState.month=11; calState.year--; }
  renderCalendrier();
}

function renderCalendrier() {
  const { year, month } = calState;
  document.getElementById('cal-month-label').textContent = `${MONTH_NAMES[month]} ${year}`;
  const color = MONTH_COLORS[month];

  // Build day → words from JOURNAL_SESSIONS
  const dayMap = {};
  JOURNAL_SESSIONS.forEach(s => {
    const d = parseJournalDate(s.date);
    if(!d) return;
    if(d.getFullYear()===year && d.getMonth()===month) {
      const day = d.getDate();
      dayMap[day] = { session:s, color };
    }
  });

  const totalWords = JOURNAL_SESSIONS.reduce((acc,s)=>{
    const mots = (s.es||s.mots||[]).length;
    return acc+mots;
  },0);
  document.getElementById('cal-total').textContent = `${totalWords} mots total`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const offset = (firstDay+6)%7; // Monday first

  const grid = document.getElementById('cal-grid');
  const days = ['L','M','M','J','V','S','D'];
  let html = days.map(d=>`<div style="text-align:center;font-size:.65rem;color:var(--muted);letter-spacing:.1em;padding:.2rem 0">${d}</div>`).join('');

  for(let i=0;i<offset;i++) html+=`<div></div>`;
  for(let d=1;d<=daysInMonth;d++) {
    const hasWords = dayMap[d];
    const isToday = year===2026 && month===4 && d===12;
    const wordCount = hasWords ? (hasWords.session.es||hasWords.session.mots||[]).length : 0;
    html+=`<div onclick="showCalDay(${d})"
      style="aspect-ratio:1;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;
             cursor:${hasWords?'pointer':'default'};
             background:${hasWords?color+'22':isToday?'var(--surface2)':'transparent'};
             border:${hasWords?`2px solid ${color}66`:isToday?'1px solid var(--border)':'1px solid transparent'};
             transition:all .2s"
      onmouseover="this.style.transform='${hasWords?'scale(1.08)':'none'}'"
      onmouseout="this.style.transform='scale(1)'">
      <span style="font-size:.85rem;color:${hasWords?color:isToday?'var(--text)':'var(--muted)'};font-weight:${hasWords||isToday?'700':'400'}">${d}</span>
      ${hasWords?`<span style="font-size:.55rem;color:${color};margin-top:.1rem">${wordCount}m</span>`:''}
    </div>`;
  }
  grid.innerHTML = html;
  document.getElementById('cal-day-detail').style.display='none';
}

function parseJournalDate(dateStr) {
  const months = {janvier:0,février:1,mars:2,avril:3,mai:4,juin:5,
    juillet:6,août:7,septembre:8,octobre:9,novembre:10,décembre:11};
  const parts = dateStr.toLowerCase().split(' ');
  if(parts.length===3) {
    const day=parseInt(parts[0]);
    const month=months[parts[1]];
    const year=parseInt(parts[2]);
    if(!isNaN(day)&&month!==undefined&&!isNaN(year)) return new Date(year,month,day);
  }
  return null;
}

function showCalDay(day) {
  const { year, month } = calState;
  const color = MONTH_COLORS[month];
  const session = JOURNAL_SESSIONS.find(s => {
    const d = parseJournalDate(s.date);
    return d && d.getFullYear()===year && d.getMonth()===month && d.getDate()===day;
  });
  if(!session) return;
  const mots = session.es || session.mots || [];
  const detail = document.getElementById('cal-day-detail');
  detail.style.display='block';
  detail.style.borderColor=color+'44';
  document.getElementById('cal-day-title').textContent=`📅 ${session.date} — ${session.label}`;
  document.getElementById('cal-day-title').style.color=color;
  document.getElementById('cal-day-words').innerHTML=mots.map(([w,t])=>`
    <div style="background:var(--surface2);border-radius:8px;padding:.4rem .8rem;display:flex;justify-content:space-between;align-items:center;gap:.4rem;font-size:.78rem">
      <span style="color:${color};font-weight:600">${w}</span>
      <span style="color:var(--muted);font-size:.72rem">${t}</span>
    </div>`).join('');
  detail.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ═══════════════════════════════════════════════
// WORDLE ESPAGNOL
// ═══════════════════════════════════════════════
let wrdState = {};
const WRD_ROWS = 6;

function initWordle() {
  // Pick a word 4-8 letters, no spaces
  const pool = DATA.filter(w => w.es.length >= 4 && w.es.length <= 8 && !w.es.includes(' ') && !w.es.includes('/'));
  const target = pool[Math.floor(Math.random()*pool.length)];
  wrdState = { target: target.es.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ñ/g,'n'), targetDisplay: target.es, fr: target.fr, guesses:[], currentRow:0, currentGuess:'', done:false, score:0 };
  showScreen('screen-wordle');
  document.getElementById('wrd-fr-hint').textContent = `🇫🇷 ${target.fr}`;
  document.getElementById('wrd-score').textContent = '0 pts';
  document.getElementById('wrd-msg').textContent = '';
  buildWordleGrid();
  buildWordleKeyboard();
}

function buildWordleGrid() {
  const len = wrdState.target.length;
  const grid = document.getElementById('wrd-grid');
  grid.innerHTML = '';
  for(let r=0;r<WRD_ROWS;r++) {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:.3rem';
    row.id = `wrd-row-${r}`;
    for(let c=0;c<len;c++) {
      const cell = document.createElement('div');
      cell.id = `wrd-cell-${r}-${c}`;
      cell.style.cssText = `width:${Math.min(52, Math.floor(320/len))}px;height:${Math.min(52,Math.floor(320/len))}px;border:2px solid var(--border);border-radius:6px;display:flex;align-items:center;justify-content:center;font-family:'Unbounded',sans-serif;font-size:${len>6?'1rem':'1.2rem'};font-weight:700;transition:all .2s;text-transform:uppercase`;
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
}

function buildWordleKeyboard() {
  const rows = [['a','z','e','r','t','y','u','i','o','p'],['q','s','d','f','g','h','j','k','l','m'],['⌫','w','x','c','v','b','n','↵']];
  const kb = document.getElementById('wrd-keyboard');
  kb.innerHTML = '';
  rows.forEach(row => {
    const div = document.createElement('div');
    div.style.cssText = 'display:flex;gap:.3rem';
    row.forEach(k => {
      const btn = document.createElement('button');
      btn.id = `wrd-key-${k}`;
      const isSpecial = k==='⌫'||k==='↵';
      btn.style.cssText = `background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:${isSpecial?'.6rem .9rem':'.6rem .7rem'};font-family:'DM Sans',sans-serif;font-size:${isSpecial?'.8rem':'.85rem'};cursor:pointer;transition:all .15s;min-width:${isSpecial?'40px':'32px'}`;
      btn.textContent = k.toUpperCase();
      btn.addEventListener('click', () => wrdInput(k));
      div.appendChild(btn);
    });
    kb.appendChild(div);
  });
}

function wrdInput(k) {
  if(wrdState.done) return;
  const len = wrdState.target.length;
  if(k==='⌫') { wrdState.currentGuess = wrdState.currentGuess.slice(0,-1); }
  else if(k==='↵') { wrdSubmit(); return; }
  else if(wrdState.currentGuess.length < len) { wrdState.currentGuess += k; }
  // Update current row display
  const row = wrdState.currentRow;
  for(let c=0;c<len;c++) {
    const cell = document.getElementById(`wrd-cell-${row}-${c}`);
    cell.textContent = (wrdState.currentGuess[c]||'').toUpperCase();
    cell.style.borderColor = wrdState.currentGuess[c] ? 'var(--accent)' : 'var(--border)';
  }
}

function wrdSubmit() {
  const guess = wrdState.currentGuess;
  const target = wrdState.target;
  if(guess.length !== target.length) { document.getElementById('wrd-msg').textContent='Mot incomplet !'; return; }
  const row = wrdState.currentRow;
  const colors = Array(target.length).fill('gray');
  const used = Array(target.length).fill(false);
  // Green pass
  for(let i=0;i<target.length;i++) if(guess[i]===target[i]) { colors[i]='green'; used[i]=true; }
  // Yellow pass
  for(let i=0;i<target.length;i++) {
    if(colors[i]==='green') continue;
    for(let j=0;j<target.length;j++) {
      if(!used[j] && guess[i]===target[j]) { colors[i]='yellow'; used[j]=true; break; }
    }
  }
  const colorMap = {green:'#22c55e',yellow:'#eab308',gray:'var(--surface2)'};
  for(let c=0;c<target.length;c++) {
    const cell = document.getElementById(`wrd-cell-${row}-${c}`);
    setTimeout(()=>{
      cell.style.background = colorMap[colors[c]];
      cell.style.borderColor = colorMap[colors[c]];
      cell.style.color = colors[c]==='gray'?'var(--muted)':'#fff';
      cell.style.transform = 'scale(1.1)';
      setTimeout(()=>cell.style.transform='scale(1)',150);
    }, c*80);
  }
  // Update keyboard
  guess.split('').forEach((l,i)=>{
    const btn = document.getElementById(`wrd-key-${l}`);
    if(!btn) return;
    const cur = btn.dataset.state;
    if(cur==='green') return;
    if(colors[i]==='green') { btn.style.background='#22c55e'; btn.style.color='#fff'; btn.dataset.state='green'; }
    else if(colors[i]==='yellow' && cur!=='green') { btn.style.background='#eab308'; btn.style.color='#fff'; btn.dataset.state='yellow'; }
    else if(!cur) { btn.style.background='#374151'; btn.style.color='#9ca3af'; btn.dataset.state='gray'; }
  });

  wrdState.guesses.push(guess);
  wrdState.currentRow++;
  wrdState.currentGuess='';

  setTimeout(()=>{
    if(guess===target) {
      const pts = (WRD_ROWS-row)*20;
      wrdState.score+=pts; addXP(pts);
      document.getElementById('wrd-score').textContent=wrdState.score+' pts';
      document.getElementById('wrd-msg').innerHTML=`<span style="color:var(--success)">🎉 ${wrdState.targetDisplay} ! +${pts} pts</span>`;
      wrdState.done=true;
      setTimeout(()=>{ if(confirm('Nouvelle partie ?')) initWordle(); else goHome(); },1500);
    } else if(wrdState.currentRow>=WRD_ROWS) {
      document.getElementById('wrd-msg').innerHTML=`<span style="color:var(--error)">❌ C'était : <strong>${wrdState.targetDisplay}</strong> (${wrdState.fr})</span>`;
      wrdState.done=true;
      setTimeout(()=>{ if(confirm('Rejouer ?')) initWordle(); else goHome(); },2000);
    }
  },target.length*80+200);
}

// ═══════════════════════════════════════════════
// ANAGRAMME TAP
// ═══════════════════════════════════════════════
let anaState = { cards:[], idx:0, score:0, answer:[], remaining:[], timeLeft:15, timer:null };

function initAnagramme() {
  const pool = DATA.filter(w=>w.es.length>=3&&w.es.length<=10&&!w.es.includes(' ')&&!w.es.includes('/'));
  anaState = { cards:shuffle(pool), idx:0, score:0, answer:[], remaining:[], timeLeft:15, timer:null };
  showScreen('screen-anagramme');
  renderAnagramme();
}

function renderAnagramme() {
  clearInterval(anaState.timer);
  const card = anaState.cards[anaState.idx % anaState.cards.length];
  const letters = shuffle(card.es.split(''));
  anaState.answer=[];
  anaState.remaining=[...letters];
  anaState.timeLeft=15;
  document.getElementById('ana-fr').textContent=card.fr;
  document.getElementById('ana-feedback').innerHTML='';
  setProgress('ana-progress',anaState.idx,anaState.cards.length);
  document.getElementById('ana-score').textContent=anaState.score+' pts';
  renderAnaTiles();
  document.getElementById('ana-timer-fill').style.width='100%';
  anaState.timer=setInterval(()=>{
    anaState.timeLeft-=.1;
    document.getElementById('ana-timer-fill').style.width=(anaState.timeLeft/15*100)+'%';
    if(anaState.timeLeft<=0) { clearInterval(anaState.timer); anaFail(); }
  },100);
}

function renderAnaTiles() {
  // Answer row
  const ansRow=document.getElementById('ana-answer-row');
  ansRow.innerHTML=anaState.answer.map((l,i)=>`
    <div onclick="anaRemove(${i})" style="width:42px;height:42px;background:var(--accent);color:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:'Unbounded',sans-serif;font-size:1.1rem;font-weight:700;cursor:pointer;transition:all .15s" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">${l.toUpperCase()}</div>`).join('');
  // Remaining tiles
  const tilesEl=document.getElementById('ana-tiles');
  tilesEl.innerHTML=anaState.remaining.map((l,i)=>l?`
    <div onclick="anaTap(${i})" style="width:42px;height:42px;background:var(--surface2);color:var(--text);border:1.5px solid var(--border);border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:'Unbounded',sans-serif;font-size:1.1rem;font-weight:700;cursor:pointer;transition:all .15s" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">${l.toUpperCase()}</div>`:'<div style="width:42px;height:42px"></div>').join('');
}

function anaTap(i) {
  const l=anaState.remaining[i];
  if(!l) return;
  anaState.answer.push(l);
  anaState.remaining[i]=null;
  renderAnaTiles();
}

function anaRemove(i) {
  const l=anaState.answer.splice(i,1)[0];
  const slot=anaState.remaining.indexOf(null);
  if(slot>=0) anaState.remaining[slot]=l; else anaState.remaining.push(l);
  renderAnaTiles();
}

function anaReset() {
  const card=anaState.cards[anaState.idx%anaState.cards.length];
  anaState.remaining=shuffle(card.es.split(''));
  anaState.answer=[];
  renderAnaTiles();
}

function anaCheck() {
  clearInterval(anaState.timer);
  const card=anaState.cards[anaState.idx%anaState.cards.length];
  const attempt=anaState.answer.join('').toLowerCase();
  const correct=card.es.toLowerCase();
  const fb=document.getElementById('ana-feedback');
  if(normalize(attempt)===normalize(correct)||levenshtein(normalize(attempt),normalize(correct))<=1) {
    const pts=Math.round(10+anaState.timeLeft*2);
    anaState.score+=pts; addXP(pts);
    fb.innerHTML=`<span style="color:var(--success)">✅ ${card.es} ! +${pts} pts</span>`;
    showToast(`✅ +${pts} pts`,'correct-toast');
  } else {
    fb.innerHTML=`<span style="color:var(--error)">❌ C'était : <strong>${card.es}</strong></span>`;
    showToast(`❌ ${card.es}`,'wrong-toast');
  }
  anaState.idx++;
  setTimeout(()=>{
    if(anaState.idx>=anaState.cards.length) showResults('anagramme',anaState.score,anaState.cards.length*20,[]);
    else renderAnagramme();
  },1500);
}

function anaFail() {
  const card=anaState.cards[anaState.idx%anaState.cards.length];
  document.getElementById('ana-feedback').innerHTML=`<span style="color:var(--error)">⏰ C'était : <strong>${card.es}</strong></span>`;
  anaState.idx++;
  setTimeout(()=>{
    if(anaState.idx>=anaState.cards.length) showResults('anagramme',anaState.score,anaState.cards.length*20,[]);
    else renderAnagramme();
  },1500);
}

// ═══════════════════════════════════════════════
// QUI SUIS-JE ?
// ═══════════════════════════════════════════════
const QSJ_THEMES_MAP = {};
Object.entries(MM_THEMES).forEach(([theme,words])=>words.forEach(w=>QSJ_THEMES_MAP[w.toLowerCase()]=theme));

let qsjState={cards:[],idx:0,score:0,shownHints:0};

function initQuiSuisJe() {
  qsjState={cards:shuffle(DATA),idx:0,score:0,shownHints:0};
  showScreen('screen-quisuisje');
  renderQSJ();
}

function renderQSJ() {
  const card=qsjState.cards[qsjState.idx];
  qsjState.shownHints=1;
  setProgress('qsj-progress',qsjState.idx,qsjState.cards.length);
  document.getElementById('qsj-score').textContent=qsjState.score+' pts';
  document.getElementById('qsj-feedback').innerHTML='';

  const theme=QSJ_THEMES_MAP[card.es.toLowerCase()]||'Vocabulaire';
  const hints=[
    {label:'Catégorie',value:theme,pts:40},
    {label:'Longueur',value:`${card.es.length} lettres`,pts:30},
    {label:'Commence par',value:`"${card.es[0].toUpperCase()}…"`,pts:20},
    {label:'Traduction proche',value:card.fr.split('/')[0].trim(),pts:10},
  ];

  const ptsDisplay=document.getElementById('qsj-points-display');
  ptsDisplay.innerHTML=hints.map((h,i)=>`
    <span style="background:${i<qsjState.shownHints?'var(--accent2)':'var(--surface)'};color:${i<qsjState.shownHints?'#000':'var(--muted)'};border:1px solid ${i<qsjState.shownHints?'var(--accent2)':'var(--border)'};border-radius:999px;padding:.25rem .6rem;font-size:.7rem;font-family:'Unbounded',sans-serif">+${h.pts}</span>`).join('');

  const indicesEl=document.getElementById('qsj-indices');
  indicesEl.innerHTML=hints.slice(0,qsjState.shownHints).map(h=>`
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:.8rem 1.2rem;display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.75rem;color:var(--muted);text-transform:uppercase;letter-spacing:.1em">${h.label}</span>
      <span style="font-weight:600;color:var(--accent2)">${h.value}</span>
    </div>`).join('');

  // Options
  const others=shuffle(DATA.filter(w=>w.es!==card.es)).slice(0,3);
  const opts=shuffle([card,...others]);
  const cont=document.getElementById('qsj-options');
  cont.innerHTML='';
  opts.forEach(opt=>{
    const btn=document.createElement('button');
    btn.className='option-btn';
    btn.innerHTML=`<strong>${opt.es}</strong><br><span style="font-size:.8rem;color:var(--muted)">${opt.fr}</span>`;
    btn.style.textAlign='left';
    btn.addEventListener('click',()=>checkQSJ(btn,opt,card,hints[qsjState.shownHints-1].pts));
    cont.appendChild(btn);
  });

  // More hints button
  if(qsjState.shownHints<hints.length) {
    const moreBtn=document.createElement('button');
    moreBtn.className='btn btn-ghost';
    moreBtn.style='width:100%;margin-top:.6rem;font-size:.8rem';
    moreBtn.textContent=`Indice suivant (-${hints[qsjState.shownHints].pts}pts max) →`;
    moreBtn.onclick=()=>{ qsjState.shownHints++; renderQSJ(); };
    document.getElementById('qsj-feedback').appendChild(moreBtn);
  }
}

function checkQSJ(btn,chosen,correct,pts) {
  document.querySelectorAll('#qsj-options .option-btn').forEach(b=>b.disabled=true);
  document.getElementById('qsj-feedback').innerHTML='';
  if(chosen.es===correct.es) {
    btn.classList.add('correct');
    qsjState.score+=pts; addXP(pts);
    showToast(`✅ +${pts} pts`,'correct-toast');
    document.getElementById('qsj-score').textContent=qsjState.score+' pts';
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#qsj-options .option-btn').forEach(b=>{if(b.querySelector('strong')?.textContent===correct.es)b.classList.add('correct');});
    showToast(`❌ ${correct.es}`,'wrong-toast');
  }
  qsjState.idx++;
  setTimeout(()=>{
    if(qsjState.idx>=qsjState.cards.length) showResults('quisuisje',qsjState.score,qsjState.cards.length*40,[]);
    else renderQSJ();
  },1600);
}

// ═══════════════════════════════════════════════
// BLITZ TAP
// ═══════════════════════════════════════════════
let blitzState={cards:[],idx:0,score:0,streak:0,timer:null,timeLeft:60};

function initBlitz() {
  blitzState={cards:shuffle(DATA),idx:0,score:0,streak:0,timer:null,timeLeft:60};
  showScreen('screen-blitz');
  document.getElementById('blitz-score').textContent='0';
  document.getElementById('blitz-streak-display').textContent='🔥 0';
  renderBlitz();
  blitzState.timer=setInterval(()=>{
    blitzState.timeLeft-=.1;
    const pct=blitzState.timeLeft/60*100;
    document.getElementById('blitz-timer-fill').style.width=pct+'%';
    document.getElementById('blitz-timer').textContent=Math.ceil(blitzState.timeLeft);
    if(blitzState.timeLeft<=0) {
      clearInterval(blitzState.timer);
      showResults('blitz',blitzState.score,999,[]);
    }
  },100);
}

function renderBlitz() {
  const card=blitzState.cards[blitzState.idx%blitzState.cards.length];
  document.getElementById('blitz-word').textContent=card.es;
  document.getElementById('blitz-word').style.color=wordToColor(card.es);
  const wrong=shuffle(DATA.filter(w=>w.es!==card.es))[0];
  const opts=shuffle([card,wrong]);
  const cont=document.getElementById('blitz-opts');
  cont.innerHTML='';
  opts.forEach(opt=>{
    const btn=document.createElement('button');
    btn.style.cssText='background:var(--surface);border:2px solid var(--border);color:var(--text);border-radius:12px;padding:1.2rem;font-family:"DM Sans",sans-serif;font-size:1rem;cursor:pointer;transition:all .15s;text-align:center';
    btn.textContent=opt.fr;
    btn.addEventListener('click',()=>checkBlitz(btn,opt,card));
    btn.addEventListener('mouseover',()=>btn.style.transform='scale(1.03)');
    btn.addEventListener('mouseout',()=>btn.style.transform='scale(1)');
    cont.appendChild(btn);
  });
}

function checkBlitz(btn,chosen,correct) {
  document.querySelectorAll('#blitz-opts button').forEach(b=>b.onclick=null);
  if(chosen.es===correct.es) {
    btn.style.background='rgba(0,200,150,.2)'; btn.style.borderColor='var(--success)';
    blitzState.streak++; blitzState.score+=5+Math.min(blitzState.streak,5);
    addXP(5);
  } else {
    btn.style.background='rgba(255,68,68,.15)'; btn.style.borderColor='var(--error)';
    blitzState.streak=0;
  }
  document.getElementById('blitz-score').textContent=blitzState.score;
  document.getElementById('blitz-streak-display').textContent=`🔥 ${blitzState.streak}`;
  blitzState.idx++;
  setTimeout(renderBlitz,400);
}

function stopBlitz() { clearInterval(blitzState.timer); }

// ═══════════════════════════════════════════════
// CHAÎNE DE MOTS
// ═══════════════════════════════════════════════
let chainState={current:null,score:0,chain:[],usedEs:new Set()};

function initChaine() {
  chainState={current:null,score:0,chain:[],usedEs:new Set()};
  showScreen('screen-chaine');
  // Start with random word
  const start=DATA[Math.floor(Math.random()*DATA.length)];
  chainState.current=start;
  chainState.usedEs.add(start.es);
  chainState.chain=[start];
  document.getElementById('chain-score').textContent='0';
  document.getElementById('chain-trail').innerHTML='';
  renderChaine();
}

function renderChaine() {
  const cur=chainState.current;
  document.getElementById('chain-current').textContent=cur.es;
  document.getElementById('chain-current').style.color=wordToColor(cur.es);
  document.getElementById('chain-current-fr').textContent=cur.fr;
  document.getElementById('chain-score').textContent=chainState.score;
  document.getElementById('chain-feedback').innerHTML='';

  // Next letter = last letter of current FR translation (first word, cleaned)
  const frWord=cur.fr.split('/')[0].trim().replace(/[^a-zàâéèêëîïôùûüçœæ]/gi,'');
  const nextLetter=frWord[frWord.length-1]?.toLowerCase()||'';
  document.getElementById('chain-next-letter').textContent=nextLetter.toUpperCase();

  // Find valid words
  const valid=DATA.filter(w=>
    !chainState.usedEs.has(w.es) &&
    w.fr.split('/')[0].trim().toLowerCase().replace(/[^a-zàâéèêëîïôùûüçœæ]/gi,'')[0]===nextLetter
  );

  const cont=document.getElementById('chain-options');
  cont.innerHTML='';

  if(valid.length===0) {
    cont.innerHTML=`<div style="color:var(--muted);text-align:center;grid-column:1/-1;padding:1rem">Plus de mots disponibles ! Chaîne terminée 🎉</div>`;
    const pts=chainState.chain.length*10;
    document.getElementById('chain-feedback').innerHTML=`<strong style="color:var(--accent2)">Longueur : ${chainState.chain.length} mots · ${pts} pts</strong>`;
    addXP(pts);
    setTimeout(()=>{ if(confirm('Nouvelle chaîne ?')) initChaine(); else goHome(); },2000);
    return;
  }

  // Show 4 options: 1-2 valid + 2-3 distractors
  const validOpts=shuffle(valid).slice(0,2);
  const invalid=shuffle(DATA.filter(w=>!chainState.usedEs.has(w.es)&&!valid.includes(w))).slice(0,2);
  const opts=shuffle([...validOpts,...invalid]).slice(0,4);

  opts.forEach(opt=>{
    const btn=document.createElement('button');
    btn.className='option-btn';
    btn.innerHTML=`<strong style="color:${wordToColor(opt.es)}">${opt.es}</strong><br><span style="font-size:.8rem;color:var(--muted)">${opt.fr}</span>`;
    btn.style.textAlign='left';
    btn.addEventListener('click',()=>checkChaine(opt,nextLetter));
    cont.appendChild(btn);
  });

  // Trail
  const trail=document.getElementById('chain-trail');
  trail.innerHTML=chainState.chain.slice(-8).map(w=>
    `<span style="background:${wordToColor(w.es)}22;color:${wordToColor(w.es)};border:1px solid ${wordToColor(w.es)}44;border-radius:999px;padding:.2rem .6rem;font-size:.7rem">${w.es}</span>`
  ).join('<span style="color:var(--muted);font-size:.8rem">→</span>');
}

function checkChaine(chosen,nextLetter) {
  const frWord=chosen.fr.split('/')[0].trim().replace(/[^a-zàâéèêëîïôùûüçœæ]/gi,'');
  const startsOk=frWord[0]?.toLowerCase()===nextLetter;
  const fb=document.getElementById('chain-feedback');
  if(startsOk) {
    chainState.score+=10; addXP(10);
    chainState.chain.push(chosen);
    chainState.usedEs.add(chosen.es);
    chainState.current=chosen;
    document.getElementById('chain-score').textContent=chainState.score;
    showToast(`✅ +10`,'correct-toast');
    renderChaine();
  } else {
    fb.innerHTML=`<span style="color:var(--error)">❌ "${chosen.fr}" ne commence pas par <strong>${nextLetter.toUpperCase()}</strong></span>`;
    showToast('❌','wrong-toast');
  }
}

// ═══════════════════════════════════════════════
// SESSION RAPIDE (SHUFFLE)
// ═══════════════════════════════════════════════
let shufState = { lang:'es', count:15, mode:'flashcard', deck:[], idx:0, score:0, flipped:false };

const SHUF_FLAGS = { es:'🇪🇸 Espagnol', ln:'🇨🇩 Lingala', en:'🇬🇧 Anglais' };
const SHUF_COLORS = { es:'var(--accent)', ln:'var(--success)', en:'#4cc9f0' };

function openShuffle(lang) {
  shufState.lang = lang;
  currentLang = lang;
  shufState.count = 15;
  shufState.mode = 'flashcard';
  const titles = { es:'🔀 Session rapide — 🇪🇸', ln:'🔀 Session rapide — 🇨🇩', en:'🔀 Session rapide — 🇬🇧' };
  document.getElementById('shuffle-title').textContent = titles[lang];
  document.getElementById('shuffle-subtitle').textContent = `Entraîne-toi sur un sous-deck aléatoire en ${SHUF_FLAGS[lang]}.`;

  // Reset buttons
  document.querySelectorAll('[id^="shuf-n"]').forEach(b=>b.classList.remove('active'));
  document.getElementById('shuf-n15').classList.add('active');
  document.querySelectorAll('[id^="shuf-m"]').forEach(b=>b.classList.remove('active'));
  document.getElementById('shuf-mfc').classList.add('active');

  updateShufInfo();
  document.getElementById('shuffle-setup').style.display='block';
  document.getElementById('shuffle-fc').style.display='none';
  document.getElementById('shuffle-qcm').style.display='none';
  document.getElementById('shuffle-frappe').style.display='none';
  document.getElementById('shuffle-survie').style.display='none';
  document.getElementById('shuffle-vitesse').style.display='none';
  document.getElementById('shuffle-score').textContent='0 pts';
  showScreen('screen-shuffle');
}

function getDeckForLang(lang) {
  if(lang==='es') return DATA;
  if(lang==='ln') return LINGALA;
  if(lang==='en') return ENGLISH;
  return DATA;
}

function updateShufInfo() {
  const total = getDeckForLang(shufState.lang).length;
  const n = shufState.count === 0 ? total : Math.min(shufState.count, total);
  document.getElementById('shuffle-deck-info').textContent = `${n} mots sur ${total} au total`;
}

function setShufCount(n, btn) {
  shufState.count = n;
  document.querySelectorAll('[id^="shuf-n"]').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  updateShufInfo();
}

function setShufMode(mode, btn) {
  shufState.mode = mode;
  document.querySelectorAll('[id^="shuf-m"]').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function startShuffle() {
  const fullDeck = getDeckForLang(shufState.lang);
  const n = shufState.count === 0 ? fullDeck.length : Math.min(shufState.count, fullDeck.length);
  shufState.deck = shuffle([...fullDeck]).slice(0, n);
  shufState.idx = 0;
  shufState.score = 0;
  shufState.flipped = false;
  document.getElementById('shuffle-setup').style.display='none';
  document.getElementById('shuffle-score').textContent='0 pts';

  if(shufState.mode === 'blitz') {
    // Reuse blitz but with filtered deck
    blitzState = { cards: shufState.deck, idx:0, score:0, streak:0, timer:null, timeLeft:60 };
    showScreen('screen-blitz');
    document.getElementById('blitz-score').textContent='0';
    document.getElementById('blitz-streak-display').textContent='🔥 0';
    renderBlitz();
    blitzState.timer = setInterval(()=>{
      blitzState.timeLeft -= .1;
      document.getElementById('blitz-timer-fill').style.width=(blitzState.timeLeft/60*100)+'%';
      document.getElementById('blitz-timer').textContent=Math.ceil(blitzState.timeLeft);
      if(blitzState.timeLeft<=0){ clearInterval(blitzState.timer); showResults('blitz',blitzState.score,999,[]); }
    },100);
  } else if(shufState.mode === 'flashcard') {
    document.getElementById('shuffle-fc').style.display='block';
    renderShufFC();
  } else if(shufState.mode === 'qcm') {
    document.getElementById('shuffle-qcm').style.display='block';
    renderShufQCM();
  } else if(shufState.mode === 'frappe') {
    document.getElementById('shuffle-frappe').style.display='block';
    renderShufFrappe();
  } else if(shufState.mode === 'survie') {
    shufState.lives = 3; shufState.streak = 0;
    document.getElementById('shuffle-survie').style.display='block';
    renderShufSurvie();
  } else if(shufState.mode === 'vitesse') {
    shufState.viTimer = null;
    document.getElementById('shuffle-vitesse').style.display='block';
    renderShufVitesse();
  }
}

// ── Shuffle Flashcard ──
function getWord(card, lang) {
  if(lang==='es') return { front: card.es, back: card.fr };
  if(lang==='ln') return { front: card.ln, back: card.fr };
  if(lang==='en') return { front: card.en, back: card.fr };
  return { front: card.es, back: card.fr };
}

function renderShufFC() {
  shufState.flipped = false;
  const card = shufState.deck[shufState.idx];
  const { front, back } = getWord(card, shufState.lang);
  const color = SHUF_COLORS[shufState.lang];
  setProgress('shuf-progress', shufState.idx, shufState.deck.length);
  document.getElementById('shuf-word-front').textContent = front;
  document.getElementById('shuf-word-front').style.color = color;
  document.getElementById('shuf-word-back').textContent = back;
  document.getElementById('shuf-lang-label').textContent = SHUF_FLAGS[shufState.lang];
  document.getElementById('shuffle-score').textContent = shufState.score + ' pts';
  document.getElementById('shuf-back-area').style.display = 'none';
  document.getElementById('shuf-tap-hint').style.display = 'block';
  document.getElementById('shuf-eval-btns').style.display = 'none';
}

function flipShufCard() {
  if(shufState.flipped) return;
  shufState.flipped = true;
  document.getElementById('shuf-back-area').style.display = 'block';
  document.getElementById('shuf-tap-hint').style.display = 'none';
  document.getElementById('shuf-eval-btns').style.display = 'flex';
}

function evalShuffle(known) {
  if(known) { shufState.score += 10; addXP(10); showToast('✓ +10 pts','correct-toast'); }
  else { showToast('✗','wrong-toast'); }
  document.getElementById('shuffle-score').textContent = shufState.score+' pts';
  shufState.idx++;
  if(shufState.idx >= shufState.deck.length) {
    showResults('shuffle', shufState.score, shufState.deck.length*10, []);
  } else renderShufFC();
}

// ── Shuffle QCM ──
function renderShufQCM() {
  const card = shufState.deck[shufState.idx];
  const { front } = getWord(card, shufState.lang);
  const color = SHUF_COLORS[shufState.lang];
  setProgress('shuf-qcm-progress', shufState.idx, shufState.deck.length);
  document.getElementById('shuf-qcm-lang').textContent = SHUF_FLAGS[shufState.lang];
  document.getElementById('shuf-qcm-word').textContent = front;
  document.getElementById('shuf-qcm-word').style.color = color;
  document.getElementById('shuffle-score').textContent = shufState.score+' pts';
  document.getElementById('shuf-qcm-fb').innerHTML='';

  const fullDeck = getDeckForLang(shufState.lang);
  const others = shuffle(fullDeck.filter(w=>{
    if(shufState.lang==='es') return w.es !== card.es;
    if(shufState.lang==='ln') return w.ln !== card.ln;
    return w.en !== card.en;
  })).slice(0,3);
  const opts = shuffle([card, ...others]);

  const cont = document.getElementById('shuf-qcm-opts');
  cont.innerHTML='';
  opts.forEach(opt=>{
    const btn = document.createElement('button');
    btn.className='option-btn';
    btn.textContent = opt.fr;
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('#shuf-qcm-opts .option-btn').forEach(b=>b.disabled=true);
      const isCorrect = shufState.lang==='es' ? opt.es===card.es : shufState.lang==='ln' ? opt.ln===card.ln : opt.en===card.en;
      if(isCorrect){
        btn.classList.add('correct');
        shufState.score+=15; addXP(15);
        showToast('✅ +15 pts','correct-toast');
      } else {
        btn.classList.add('wrong');
        document.querySelectorAll('#shuf-qcm-opts .option-btn').forEach(b=>{ if(b.textContent===card.fr) b.classList.add('correct'); });
        showToast('❌','wrong-toast');
      }
      document.getElementById('shuffle-score').textContent=shufState.score+' pts';
      shufState.idx++;
      setTimeout(()=>{
        if(shufState.idx>=shufState.deck.length) showResults('shuffle',shufState.score,shufState.deck.length*15,[]);
        else renderShufQCM();
      },1400);
    });
    cont.appendChild(btn);
  });
}

// ── Shuffle Frappe ──
function renderShufFrappe() {
  const card = shufState.deck[shufState.idx];
  setProgress('shuf-fr-progress', shufState.idx, shufState.deck.length);
  document.getElementById('shuf-fr-lang').textContent = `🇫🇷 → ${SHUF_FLAGS[shufState.lang]}`;
  document.getElementById('shuf-fr-clue').textContent = card.fr;
  document.getElementById('shuf-fr-clue').style.color = SHUF_COLORS[shufState.lang];
  document.getElementById('shuf-fr-input').value = '';
  document.getElementById('shuf-fr-input').className = 'type-input';
  document.getElementById('shuf-fr-input').focus();
  document.getElementById('shuf-fr-feedback').innerHTML = '';
  document.getElementById('shuffle-score').textContent = shufState.score + ' pts';
}

function checkShufFrappe() {
  const card = shufState.deck[shufState.idx];
  const expected = shufState.lang === 'es' ? card.es : shufState.lang === 'ln' ? card.ln : card.en;
  const got = document.getElementById('shuf-fr-input').value.trim();
  const fb = document.getElementById('shuf-fr-feedback');
  const inp = document.getElementById('shuf-fr-input');
  if(normalize(got) === normalize(expected) || levenshtein(normalize(got), normalize(expected)) <= 1) {
    inp.className = 'type-input correct';
    fb.innerHTML = `<span style="color:var(--success)">✅ ${expected} ! +15 pts</span>`;
    shufState.score += 15; addXP(15);
    showToast('✅ +15 pts','correct-toast');
  } else {
    inp.className = 'type-input wrong';
    fb.innerHTML = `<span style="color:var(--error)">❌ C'était : <strong>${expected}</strong></span>`;
    showToast(`❌ ${expected}`,'wrong-toast');
  }
  shufState.idx++;
  setTimeout(()=>{
    if(shufState.idx >= shufState.deck.length) showResults('shuffle', shufState.score, shufState.deck.length*15, []);
    else renderShufFrappe();
  }, 1400);
}

// ── Shuffle Survie ──
function renderShufSurvie() {
  const card = shufState.deck[shufState.idx % shufState.deck.length];
  const { front } = getWord(card, shufState.lang);
  document.getElementById('shuf-su-lang').textContent = SHUF_FLAGS[shufState.lang];
  document.getElementById('shuf-su-word').textContent = front;
  document.getElementById('shuf-su-word').style.color = SHUF_COLORS[shufState.lang];
  document.getElementById('shuf-su-hearts').textContent = '❤️'.repeat(shufState.lives) + '🖤'.repeat(3 - shufState.lives);
  document.getElementById('shuf-su-streak').textContent = `🔥 Combo : ${shufState.streak}`;
  document.getElementById('shuffle-score').textContent = shufState.score + ' pts';

  const fullDeck = getDeckForLang(shufState.lang);
  const others = shuffle(fullDeck.filter(w => {
    if(shufState.lang === 'es') return w.es !== card.es;
    if(shufState.lang === 'ln') return w.ln !== card.ln;
    return w.en !== card.en;
  })).slice(0, 3);
  const opts = shuffle([card, ...others]);

  const cont = document.getElementById('shuf-su-opts');
  cont.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.fr;
    btn.addEventListener('click', () => {
      document.querySelectorAll('#shuf-su-opts .option-btn').forEach(b => b.disabled = true);
      const isCorrect = shufState.lang === 'es' ? opt.es === card.es : shufState.lang === 'ln' ? opt.ln === card.ln : opt.en === card.en;
      if(isCorrect) {
        btn.classList.add('correct');
        shufState.streak++;
        const pts = 10 + Math.min(shufState.streak, 10);
        shufState.score += pts; addXP(pts);
        showToast(`✅ +${pts}`,'correct-toast');
      } else {
        btn.classList.add('wrong');
        document.querySelectorAll('#shuf-su-opts .option-btn').forEach(b => { if(b.textContent === card.fr) b.classList.add('correct'); });
        shufState.lives--;
        shufState.streak = 0;
        showToast('❌ -1 vie','wrong-toast');
      }
      shufState.idx++;
      setTimeout(() => {
        if(shufState.lives <= 0) showResults('shuffle', shufState.score, 999, []);
        else renderShufSurvie();
      }, 1000);
    });
    cont.appendChild(btn);
  });
}

// ── Shuffle Vitesse ──
function renderShufVitesse() {
  if(shufState.viTimer) { clearInterval(shufState.viTimer); shufState.viTimer = null; }
  const card = shufState.deck[shufState.idx];
  const { front } = getWord(card, shufState.lang);
  document.getElementById('shuf-vi-lang').textContent = SHUF_FLAGS[shufState.lang];
  document.getElementById('shuf-vi-word').textContent = front;
  document.getElementById('shuf-vi-word').style.color = SHUF_COLORS[shufState.lang];
  document.getElementById('shuf-vi-counter').textContent = `${shufState.idx+1}/${shufState.deck.length}`;
  document.getElementById('shuffle-score').textContent = shufState.score + ' pts';

  const fullDeck = getDeckForLang(shufState.lang);
  const others = shuffle(fullDeck.filter(w => {
    if(shufState.lang === 'es') return w.es !== card.es;
    if(shufState.lang === 'ln') return w.ln !== card.ln;
    return w.en !== card.en;
  })).slice(0, 3);
  const opts = shuffle([card, ...others]);

  const cont = document.getElementById('shuf-vi-opts');
  cont.innerHTML = '';
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.fr;
    btn.addEventListener('click', () => checkShufVitesse(btn, opt, card));
    cont.appendChild(btn);
  });

  let time = 10;
  document.getElementById('shuf-vi-timer-fill').style.width = '100%';
  document.getElementById('shuf-vi-timer').textContent = '10s';
  shufState.viTimer = setInterval(() => {
    time -= 0.1;
    document.getElementById('shuf-vi-timer-fill').style.width = (time/10*100)+'%';
    document.getElementById('shuf-vi-timer').textContent = Math.max(0,time).toFixed(1)+'s';
    if(time <= 0) {
      clearInterval(shufState.viTimer);
      shufState.viTimer = null;
      showToast(`⏰ ${card.fr}`,'wrong-toast');
      shufState.idx++;
      setTimeout(() => {
        if(shufState.idx >= shufState.deck.length) showResults('shuffle', shufState.score, shufState.deck.length*20, []);
        else renderShufVitesse();
      }, 800);
    }
  }, 100);
}

function checkShufVitesse(btn, chosen, correct) {
  if(shufState.viTimer) { clearInterval(shufState.viTimer); shufState.viTimer = null; }
  document.querySelectorAll('#shuf-vi-opts .option-btn').forEach(b => b.disabled = true);
  const isCorrect = shufState.lang === 'es' ? chosen.es === correct.es : shufState.lang === 'ln' ? chosen.ln === correct.ln : chosen.en === correct.en;
  if(isCorrect) {
    btn.classList.add('correct');
    shufState.score += 20; addXP(20);
    showToast('✅ +20','correct-toast');
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('#shuf-vi-opts .option-btn').forEach(b => { if(b.textContent === correct.fr) b.classList.add('correct'); });
    showToast('❌','wrong-toast');
  }
  shufState.idx++;
  setTimeout(() => {
    if(shufState.idx >= shufState.deck.length) showResults('shuffle', shufState.score, shufState.deck.length*20, []);
    else renderShufVitesse();
  }, 800);
}

// ═══════════════════════════════════════════════
// RÉVISION PAR JOUR (réutilise les modes shuffle)
// ═══════════════════════════════════════════════
let bydayState = { lang: 'es', mode: 'flashcard', sessionIdx: -1 };

function openByDay(lang) {
  bydayState.lang = lang;
  currentLang = lang;
  bydayState.sessionIdx = -1;
  bydayState.mode = 'flashcard';
  const titles = { es: '📆 Par jour — 🇪🇸', ln: '📆 Par jour — 🇨🇩', en: '📆 Par jour — 🇬🇧' };
  document.getElementById('byday-title').textContent = titles[lang];

  // Filter sessions that have words in this language
  const sessions = JOURNAL_SESSIONS.map((s, idx) => {
    const mots = lang === 'es' ? (s.es || s.mots || [])
               : lang === 'ln' ? (s.ln || [])
               : lang === 'en' ? (s.en || [])
               : [];
    return { ...s, mots, idx };
  }).filter(s => s.mots.length > 0).reverse(); // most recent first

  const color = SHUF_COLORS[lang];
  const list = document.getElementById('byday-sessions-list');
  if(sessions.length === 0) {
    list.innerHTML = `<div style="color:var(--muted);text-align:center;padding:2rem">Aucune session avec des mots dans cette langue.</div>`;
  } else {
    list.innerHTML = sessions.map(s => `
      <button class="byday-session-btn" data-idx="${s.idx}" onclick="selectByDaySession(${s.idx})"
        style="background:linear-gradient(135deg,rgba(255,255,255,.04),rgba(255,255,255,.01));
               border:1.5px solid rgba(255,255,255,.08);
               border-radius:14px;padding:1rem 1.2rem;cursor:pointer;
               display:flex;align-items:center;justify-content:space-between;gap:.8rem;
               transition:all .25s;text-align:left;color:var(--text);font-family:inherit;width:100%"
        onmouseover="this.style.borderColor='${color}';this.style.transform='translateX(4px)'"
        onmouseout="if(!this.classList.contains('selected')){this.style.borderColor='rgba(255,255,255,.08)';this.style.transform='translateX(0)'}">
        <div>
          <div style="font-family:'Unbounded',sans-serif;font-size:.9rem;color:${color};margin-bottom:.2rem;display:flex;align-items:center;gap:.4rem">
            <span style="width:6px;height:6px;border-radius:50%;background:${color};box-shadow:0 0 8px ${color}"></span>
            ${s.date}
          </div>
          <div style="font-size:.72rem;color:var(--muted);letter-spacing:.05em">${s.label}</div>
        </div>
        <div style="background:${color};color:#fff;font-family:'Unbounded',sans-serif;font-size:.7rem;padding:.25rem .65rem;border-radius:999px;font-weight:700;flex-shrink:0">${s.mots.length} mots</div>
      </button>`).join('');
  }

  document.getElementById('byday-mode-area').style.display = 'none';
  document.getElementById('byday-score').textContent = '0 pts';
  document.getElementById('byday-setup').style.display = 'block';
  showScreen('screen-byday');
}

function selectByDaySession(idx) {
  bydayState.sessionIdx = idx;
  document.querySelectorAll('.byday-session-btn').forEach(b => {
    b.classList.remove('selected');
    b.style.borderColor = 'rgba(255,255,255,.08)';
    b.style.transform = 'translateX(0)';
  });
  const sel = document.querySelector(`.byday-session-btn[data-idx="${idx}"]`);
  if(sel) {
    const color = SHUF_COLORS[bydayState.lang];
    sel.classList.add('selected');
    sel.style.borderColor = color;
    sel.style.transform = 'translateX(4px)';
    sel.style.boxShadow = `0 0 20px -8px ${color}`;
  }
  document.getElementById('byday-mode-area').style.display = 'block';
}

function setBydayMode(mode, btn) {
  bydayState.mode = mode;
  document.querySelectorAll('[id^="bd-m"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Helper: get the deck of words for the currently selected session/language
function getBydayDeck() {
  if(bydayState.sessionIdx < 0) return null;
  const session = JOURNAL_SESSIONS[bydayState.sessionIdx];
  const lang = bydayState.lang;
  const journalMots = lang === 'es' ? (session.es || session.mots || [])
                    : lang === 'ln' ? (session.ln || [])
                    : (session.en || []);

  const fullDeck = getDeckForLang(lang);
  const deck = [];
  journalMots.forEach(([word, fr]) => {
    const cleanWord = word.split('/')[0].trim().toLowerCase();
    const found = fullDeck.find(c => {
      const w = (lang === 'es' ? c.es : lang === 'ln' ? c.ln : c.en).toLowerCase();
      return w === cleanWord || w.startsWith(cleanWord) || cleanWord.startsWith(w);
    });
    if(found) deck.push(found);
    else deck.push({
      [lang]: word,
      es: lang === 'es' ? word : '',
      ln: lang === 'ln' ? word : '',
      en: lang === 'en' ? word : '',
      fr: fr
    });
  });
  return { deck, session, lang };
}

// Add all session words to the SRS store
function addByDayToSRS() {
  const info = getBydayDeck();
  if(!info) { showToast('Choisis une session','wrong-toast'); return; }
  const { deck, session, lang } = info;
  const srsData = srsLoad();
  let added = 0, alreadyIn = 0;
  deck.forEach(card => {
    const word = lang === 'es' ? card.es : lang === 'ln' ? card.ln : card.en;
    if(!word) return;
    const k = srsKey(lang, word);
    if(!srsData[k]) {
      srsData[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word, fr: card.fr || '' };
      added++;
    } else alreadyIn++;
  });
  srsSave(srsData);
  if(added > 0) {
    showToast(`✨ +${added} carte${added>1?'s':''} ajoutée${added>1?'s':''} au SRS`, 'correct-toast');
    haptic('success');
    confetti('small');
  } else {
    showToast(`Déjà ${alreadyIn} carte${alreadyIn>1?'s':''} dans le SRS`, 'correct-toast');
  }
}

function startByday() {
  const info = getBydayDeck();
  if(!info) { showToast('Choisis une session','wrong-toast'); return; }
  const { deck, session, lang } = info;

  if(deck.length === 0) { showToast('Aucun mot trouvé pour cette session','wrong-toast'); return; }

  // ── SRS mode: filter global SRS on this session's words ──
  if(bydayState.mode === 'srs') {
    // First, ensure all session words are in the SRS store
    const srsData = srsLoad();
    let added = 0;
    const sessionKeys = new Set();
    deck.forEach(card => {
      const word = lang === 'es' ? card.es : lang === 'ln' ? card.ln : card.en;
      if(!word) return;
      const k = srsKey(lang, word);
      sessionKeys.add(k);
      if(!srsData[k]) {
        srsData[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word, fr: card.fr || '' };
        added++;
      }
    });
    srsSave(srsData);
    // Launch SRS in session-filter mode
    srsState.lang = lang;
    currentLang = lang;
    srsState.sessionFilter = sessionKeys; // Set of allowed keys
    srsState.sessionFilterLabel = session.date;
    const titles = { es: `🧠 SRS 📆 ${session.date} — 🇪🇸`, ln: `🧠 SRS 📆 ${session.date} — 🇨🇩`, en: `🧠 SRS 📆 ${session.date} — 🇬🇧` };
    document.getElementById('srs-title').textContent = titles[lang];
    const toggle = document.getElementById('srs-sim-toggle');
    if(toggle) toggle.checked = srsState.simMode;
    if(added > 0) {
      setTimeout(() => showToast(`✨ +${added} nouvelle${added>1?'s':''} carte${added>1?'s':''}`, 'correct-toast'), 400);
    }
    showScreen('screen-srs');
    srsRefresh();
    return;
  }

  // Inject into shufState and dispatch to the right mode
  shufState.lang = lang;
  shufState.mode = bydayState.mode;
  shufState.deck = shuffle(deck);
  shufState.idx = 0;
  shufState.score = 0;
  shufState.flipped = false;
  document.getElementById('byday-setup').style.display = 'none';
  document.getElementById('shuffle-score').textContent = '0 pts';

  if(bydayState.mode === 'blitz') {
    blitzState = { cards: shufState.deck, idx: 0, score: 0, streak: 0, timer: null, timeLeft: 60 };
    showScreen('screen-blitz');
    document.getElementById('blitz-score').textContent = '0';
    document.getElementById('blitz-streak-display').textContent = '🔥 0';
    renderBlitz();
    blitzState.timer = setInterval(() => {
      blitzState.timeLeft -= .1;
      document.getElementById('blitz-timer-fill').style.width = (blitzState.timeLeft/60*100) + '%';
      document.getElementById('blitz-timer').textContent = Math.ceil(blitzState.timeLeft);
      if(blitzState.timeLeft <= 0) { clearInterval(blitzState.timer); showResults('byday', blitzState.score, 999, []); }
    }, 100);
    return;
  }

  // Reset shuffle screens and show right one
  document.getElementById('shuffle-fc').style.display = 'none';
  document.getElementById('shuffle-qcm').style.display = 'none';
  document.getElementById('shuffle-frappe').style.display = 'none';
  document.getElementById('shuffle-survie').style.display = 'none';
  document.getElementById('shuffle-vitesse').style.display = 'none';
  document.getElementById('shuffle-setup').style.display = 'none';
  showScreen('screen-shuffle');
  document.getElementById('shuffle-title').textContent = `📆 ${session.date} — ${SHUF_FLAGS[lang]}`;

  if(bydayState.mode === 'flashcard') {
    document.getElementById('shuffle-fc').style.display = 'block';
    renderShufFC();
  } else if(bydayState.mode === 'qcm') {
    document.getElementById('shuffle-qcm').style.display = 'block';
    renderShufQCM();
  } else if(bydayState.mode === 'frappe') {
    document.getElementById('shuffle-frappe').style.display = 'block';
    renderShufFrappe();
  } else if(bydayState.mode === 'survie') {
    shufState.lives = 3; shufState.streak = 0;
    document.getElementById('shuffle-survie').style.display = 'block';
    renderShufSurvie();
  } else if(bydayState.mode === 'vitesse') {
    shufState.viTimer = null;
    document.getElementById('shuffle-vitesse').style.display = 'block';
    renderShufVitesse();
  }
}

// ═══════════════════════════════════════════════
// EXPORT / IMPORT — backup & restore progress
// ═══════════════════════════════════════════════
function exportProgress() {
  const now = new Date();
  const pad = n => String(n).padStart(2, '0');
  const stamp = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}`;
  const data = {
    version: 2,
    exported_at: now.toISOString(),
    app: 'aprende',
    // SRS (all languages combined)
    srs_data: JSON.parse(localStorage.getItem('srs_data') || '{}'),
    // XP
    es_xp: parseInt(localStorage.getItem('es_xp') || localStorage.getItem('score') || '0'),
    ln_xp: parseInt(localStorage.getItem('ln_xp') || '0'),
    en_xp: parseInt(localStorage.getItem('en_xp') || '0'),
    // Legacy: main app state
    score: parseInt(localStorage.getItem('score') || '0'),
    streak: parseInt(localStorage.getItem('streak') || '0'),
    // Mastered
    mastered: JSON.parse(localStorage.getItem('mastered') || '[]'),
    es_mastered: JSON.parse(localStorage.getItem('es_mastered') || '[]'),
    ln_mastered: JSON.parse(localStorage.getItem('ln_mastered') || '[]'),
    en_mastered: JSON.parse(localStorage.getItem('en_mastered') || '[]'),
    // Aura map (synesthesia)
    aura_map: JSON.parse(localStorage.getItem('aura_map') || '{}'),
    // Historique des révisions, réglages, SRS prononciation et grammaire
    srs_revlog: JSON.parse(localStorage.getItem('srs_revlog') || '[]'),
    srs_new_per_day: srsNewPerDay(),
    pron_srs: JSON.parse(localStorage.getItem('pron_srs') || '{}'),
    grammar_srs: JSON.parse(localStorage.getItem('grammar_srs') || '{}'),
    srs_algo: 'fsrs6',
    crs_prog: JSON.parse(localStorage.getItem('crs_prog') || '{}'),
    crs_added: JSON.parse(localStorage.getItem('crs_added') || '{}'),
    rpg: JSON.parse(localStorage.getItem('rpg') || 'null'),
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const filename = `aprende-progres-${stamp}.json`;

  // Prefer Web Share (mobile — allows sharing to Claude / other apps)
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const file = new File([blob], filename, { type: 'application/json' });

  if(navigator.canShare && navigator.canShare({ files: [file] })) {
    navigator.share({
      files: [file],
      title: 'Mes progrès ¡Aprende!',
      text: 'Sauvegarde ¡Aprende! du ' + stamp
    }).then(() => {
      showToast('✅ Sauvegarde envoyée', 'correct-toast');
      haptic('success');
      confetti('small');
    }).catch(err => {
      // User cancelled or Share failed — fallback to download
      if(err.name !== 'AbortError') downloadJSON(blob, filename);
    });
  } else {
    // Desktop or browsers without Web Share API — direct download
    downloadJSON(blob, filename);
  }
}

function downloadJSON(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast('✅ Fichier téléchargé', 'correct-toast');
  haptic('success');
  confetti('small');
}

function importProgress(file) {
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if(!data.app || data.app !== 'aprende') {
        if(!confirm('Ce fichier ne semble pas être une sauvegarde ¡Aprende!. Continuer quand même ?')) return;
      }
      // Ask confirmation before overwriting
      const currentSrs = Object.keys(JSON.parse(localStorage.getItem('srs_data') || '{}')).length;
      const importSrs = Object.keys(data.srs_data || {}).length;
      const msg = `Restaurer cette sauvegarde ?\n\n📥 À importer : ${importSrs} cartes SRS\n📤 État actuel : ${currentSrs} cartes SRS\n\n⚠️ Tes données actuelles seront écrasées.`;
      if(!confirm(msg)) return;

      // Restore all keys
      if(data.srs_data) localStorage.setItem('srs_data', JSON.stringify(data.srs_data));
      if(data.es_xp !== undefined) localStorage.setItem('es_xp', String(data.es_xp));
      if(data.ln_xp !== undefined) localStorage.setItem('ln_xp', String(data.ln_xp));
      if(data.en_xp !== undefined) localStorage.setItem('en_xp', String(data.en_xp));
      if(data.score !== undefined) localStorage.setItem('score', String(data.score));
      if(data.streak !== undefined) localStorage.setItem('streak', String(data.streak));
      if(data.mastered) localStorage.setItem('mastered', JSON.stringify(data.mastered));
      if(data.es_mastered) localStorage.setItem('es_mastered', JSON.stringify(data.es_mastered));
      if(data.ln_mastered) localStorage.setItem('ln_mastered', JSON.stringify(data.ln_mastered));
      if(data.en_mastered) localStorage.setItem('en_mastered', JSON.stringify(data.en_mastered));
      if(data.aura_map) localStorage.setItem('aura_map', JSON.stringify(data.aura_map));
      if(data.srs_revlog) localStorage.setItem('srs_revlog', JSON.stringify(data.srs_revlog));
      if(data.srs_new_per_day !== undefined) localStorage.setItem('srs_new_per_day', String(data.srs_new_per_day));
      if(data.pron_srs) localStorage.setItem('pron_srs', JSON.stringify(data.pron_srs));
      if(data.grammar_srs) localStorage.setItem('grammar_srs', JSON.stringify(data.grammar_srs));
      if(data.crs_prog) localStorage.setItem('crs_prog', JSON.stringify(data.crs_prog));
      if(data.crs_added) localStorage.setItem('crs_added', JSON.stringify(data.crs_added));
      if(data.rpg) localStorage.setItem('rpg', JSON.stringify(data.rpg));
      if(typeof crsMergeAdded === 'function') crsMergeAdded();
      if(data.rpg && typeof rpgInit === 'function') rpgInit();
      else if(typeof rpg !== 'undefined' && rpg) { rpg.seen = rpgLangXP(); rpg.revSeen = srsRevlogLoad().length; rpgSave(); }
      srsMigrateAllToFsrs(); // une ancienne sauvegarde SM-2 est convertie automatiquement
      srsState.undo = [];

      // Reload state in memory
      if(typeof state === 'object' && state) {
        state.xp = data.score || state.xp;
        state.streak = data.streak || state.streak;
        state.mastered = data.mastered || state.mastered;
      }

      showToast(`✅ ${importSrs} cartes SRS restaurées`, 'correct-toast');
      haptic('success');
      confetti('big');
      // Refresh visible stats
      updateSRSDueBadges();
      if(typeof updateHomeStats === 'function') updateHomeStats();
    } catch(err) {
      alert('❌ Impossible de lire le fichier : ' + err.message);
    }
  };
  reader.onerror = () => alert('❌ Erreur de lecture du fichier');
  reader.readAsText(file);
  // Reset input so same file can be re-selected
  document.getElementById('import-file-input').value = '';
}

// ═══════════════════════════════════════════════
// SRS — FSRS-6 (Free Spaced Repetition Scheduler) + étapes d'apprentissage
// Inspiré du fonctionnement d'Anki 26.9 (analyse du 12/10/2026).
// Algorithme FSRS publié en open source (open-spaced-repetition) — implémentation propre à ¡Aprende!.
// ═══════════════════════════════════════════════
// Carte SRS (rétro-compatible) :
// { lang, reps, interval (jours), due (ms), ef (héritage SM-2, inutilisé),
//   st: 'new'|'learning'|'review'|'relearning', step, s (stabilité, jours), d (difficulté 1-10),
//   lr (dernière révision, ms), lapses, leech }
// reps === 0  ⇔  carte jamais vue (convention utilisée partout dans l'app)

const SRS_GRADES = {
  0: { name: 'Encore',    factor: 0,   efDelta: -0.20 },
  1: { name: 'Difficile', factor: 1.2, efDelta: -0.15 },
  2: { name: 'Bien',      factor: 2.5, efDelta:  0    },
  3: { name: 'Facile',    factor: 4,   efDelta:  0.15 },
};
const SRS_SECOND_REV_MULT = { 1: 1.5, 2: 2.5, 3: 4 }; // héritage (plus utilisé par le moteur)

// Paramètres FSRS-6 par défaut (21 poids)
const FSRS_W = [0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001, 1.8722, 0.1666, 0.796,
                1.4835, 0.0614, 0.2629, 1.6483, 0.6014, 1.8729, 0.5425, 0.0912, 0.0658, 0.1542];
const FSRS_DECAY = -FSRS_W[20];
const FSRS_FACTOR = Math.pow(0.9, 1 / FSRS_DECAY) - 1;
const SRS_CFG = {
  desiredRetention: 0.9,       // 90 % de chances de se souvenir à l'échéance (défaut Anki)
  learnSteps: [1, 10],         // minutes (défaut Anki)
  relearnSteps: [10],          // minutes (défaut Anki)
  maxInterval: 36500,          // jours
  learnAheadMin: 20,           // une carte en apprentissage peut être montrée 20 min en avance si plus rien d'autre
  leechThreshold: 8,           // nb d'oublis avant de marquer la carte comme « sangsue »
  defaultNewPerDay: 20,        // défaut Anki
};

function srsDayMs() { return (typeof srsState !== 'undefined' && srsState.simMode) ? 3 * 1000 : 24 * 60 * 60 * 1000; }
function srsMinMs(min) { return min * 60 * 1000 * srsDayMs() / 86400000; } // minutes, mises à l'échelle en simulation

const fsrsClampD = d => Math.min(10, Math.max(1, d));
function fsrsR(t, s) { return Math.pow(1 + FSRS_FACTOR * t / s, FSRS_DECAY); }
function fsrsIvl(s) {
  const ivl = s / FSRS_FACTOR * (Math.pow(SRS_CFG.desiredRetention, 1 / FSRS_DECAY) - 1);
  return Math.min(SRS_CFG.maxInterval, Math.max(1, Math.round(ivl)));
}
function fsrsD0(G) { return fsrsClampD(FSRS_W[4] - Math.exp(FSRS_W[5] * (G - 1)) + 1); }
function fsrsNextD(d, G) {
  const dd = -FSRS_W[6] * (G - 3);
  const d1 = d + dd * (10 - d) / 9;                          // amortissement linéaire
  return fsrsClampD(FSRS_W[7] * fsrsD0(4) + (1 - FSRS_W[7]) * d1); // retour vers la moyenne
}
function fsrsRecallS(d, s, r, G) {
  const hard = G === 2 ? FSRS_W[15] : 1, easy = G === 4 ? FSRS_W[16] : 1;
  return s * (1 + Math.exp(FSRS_W[8]) * (11 - d) * Math.pow(s, -FSRS_W[9]) * (Math.exp(FSRS_W[10] * (1 - r)) - 1) * hard * easy);
}
function fsrsForgetS(d, s, r) {
  const sf = FSRS_W[11] * Math.pow(d, -FSRS_W[12]) * (Math.pow(s + 1, FSRS_W[13]) - 1) * Math.exp(FSRS_W[14] * (1 - r));
  return Math.min(sf, s / Math.exp(FSRS_W[17] * FSRS_W[18]));
}
function fsrsShortS(s, G) { // révision le même jour (étapes)
  let inc = Math.exp(FSRS_W[17] * (G - 3 + FSRS_W[18])) * Math.pow(s, -FSRS_W[19]);
  if(G >= 3) inc = Math.max(inc, 1);
  return s * inc;
}

// Fuzz (comme Anki) : décale légèrement les intervalles ≥ 3 j pour éviter que des cartes
// apprises le même jour reviennent toutes ensemble. Déterministe par carte → l'aperçu = le résultat.
function srsHash(str) { let h = 2166136261; for(let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0) / 4294967296; }
function srsFuzz(ivl, seed) {
  if(ivl < 2.5) return ivl;
  const ranges = [[2.5, 7, 0.15], [7, 20, 0.1], [20, Infinity, 0.05]];
  let delta = 1;
  for(const [a, b, f] of ranges) delta += f * Math.max(0, Math.min(ivl, b) - a);
  const lo = Math.max(2, Math.round(ivl - delta)), hi = Math.min(SRS_CFG.maxInterval, Math.round(ivl + delta));
  return lo + Math.floor(srsHash(seed) * (hi - lo + 1));
}

// Migration d'une carte SM-2 (ancien moteur) vers FSRS — sans changer son échéance actuelle
function srsEnsureFsrs(c, now) {
  if(!c || c.st) return c;
  now = now || Date.now();
  if(!c.reps) { c.st = 'new'; c.reps = 0; c.interval = 0; return c; }
  const ivl = Math.max(1, c.interval || 1);
  c.st = 'review';
  c.s = ivl;                                                     // à l'échéance, R ≈ 90 %
  c.d = fsrsClampD(5 + (2.5 - (c.ef || 2.5)) * (10 / 3));        // facilité SM-2 → difficulté
  c.lr = Math.min(now, (c.due || now) - ivl * 24 * 60 * 60 * 1000);
  c.lapses = c.lapses || 0;
  c.step = null;
  return c;
}

// Calcule l'état suivant d'une carte, SANS la modifier (sert aussi aux aperçus des boutons)
// grade : 0 Encore · 1 Difficile · 2 Bien · 3 Facile
function srsNextState(card, grade, seed, now) {
  now = now || Date.now();
  const c = srsEnsureFsrs({ ...card }, now);
  const G = grade + 1, day = srsDayMs();
  const graduate = (ivlDays) => {
    const ivl = Math.min(SRS_CFG.maxInterval, Math.max(1, Math.round(srsFuzz(ivlDays, (seed || '') + ':' + c.reps))));
    c.st = 'review'; c.step = null; c.interval = ivl; c.due = now + ivl * day;
  };
  const elapsedDays = c.lr ? Math.max(0, (now - c.lr) / day) : 0;

  if(c.st === 'new') {
    c.s = FSRS_W[G - 1]; c.d = fsrsD0(G);
    const steps = SRS_CFG.learnSteps;
    if(G === 4) { graduate(fsrsIvl(c.s)); }
    else {
      c.st = 'learning'; c.interval = 0;
      if(G === 1) { c.step = 0; c.due = now + srsMinMs(steps[0]); }
      else if(G === 2) { c.step = 0; c.due = now + srsMinMs(steps.length > 1 ? (steps[0] + steps[1]) / 2 : steps[0] * 1.5); }
      else if(steps.length > 1) { c.step = 1; c.due = now + srsMinMs(steps[1]); }
      else graduate(fsrsIvl(c.s));
    }
  } else if(c.st === 'learning' || c.st === 'relearning') {
    if(elapsedDays >= 1) { const r = fsrsR(elapsedDays, c.s); c.s = G === 1 ? fsrsForgetS(c.d, c.s, r) : fsrsRecallS(c.d, c.s, r, G); }
    else c.s = fsrsShortS(c.s, G);
    c.d = fsrsNextD(c.d, G);
    const steps = c.st === 'learning' ? SRS_CFG.learnSteps : SRS_CFG.relearnSteps;
    const step = Math.min(c.step || 0, steps.length - 1);
    if(G === 1) { c.step = 0; c.due = now + srsMinMs(steps[0]); c.interval = 0; }
    else if(G === 2) {
      c.step = step;
      const m = (step === 0 && steps.length > 1) ? (steps[0] + steps[1]) / 2 : Math.min(steps[step] * 1.5, steps[step] + 1440);
      c.due = now + srsMinMs(m); c.interval = 0;
    }
    else if(G === 3 && step + 1 < steps.length) { c.step = step + 1; c.due = now + srsMinMs(steps[step + 1]); c.interval = 0; }
    else graduate(fsrsIvl(c.s));
  } else { // review
    const r = fsrsR(elapsedDays, c.s);
    if(G === 1) {
      c.lapses = (c.lapses || 0) + 1;
      c.s = fsrsForgetS(c.d, c.s, r); c.d = fsrsNextD(c.d, 1);
      c.st = 'relearning'; c.step = 0; c.interval = 0; c.due = now + srsMinMs(SRS_CFG.relearnSteps[0]);
      if(c.lapses >= SRS_CFG.leechThreshold) c.leech = true;
    } else {
      // Ordre garanti comme dans Anki : Difficile ≤ Bien < Facile
      const sH = fsrsRecallS(c.d, c.s, r, 2), sG = fsrsRecallS(c.d, c.s, r, 3), sE = fsrsRecallS(c.d, c.s, r, 4);
      let iH = fsrsIvl(sH), iG = fsrsIvl(sG), iE = fsrsIvl(sE);
      iH = Math.min(iH, iG); iG = Math.max(iG, iH + 1); iE = Math.max(iE, iG + 1);
      c.s = G === 2 ? sH : G === 3 ? sG : sE;
      c.d = fsrsNextD(c.d, G);
      graduate(G === 2 ? iH : G === 3 ? iG : iE);
    }
  }
  c.reps = (c.reps || 0) + 1;
  c.lr = now;
  return c;
}

// Applique la note à la carte (modifie l'objet, comme l'ancien srsUpdate)
function srsUpdate(card, grade, seed) {
  const next = srsNextState(card, grade, seed);
  Object.keys(card).forEach(k => delete card[k]);
  Object.assign(card, next);
  return card;
}

function srsFormatDelay(ms) {
  const day = srsDayMs();
  if(srsState.simMode) { const s = Math.max(1, Math.round(ms / 1000)); return s < 60 ? `${s}s` : `${Math.round(s / 60)}min`; }
  const min = ms / 60000;
  if(min < 60) return `${Math.max(1, Math.round(min))} min`;
  if(min < 1440) return `${Math.round(min / 60)} h`;
  const d = Math.round(ms / day);
  if(d < 60) return `${d} j`;
  if(d < 365) { const mo = d / 30; return `${mo < 10 ? mo.toFixed(1).replace('.', ',').replace(',0', '') : Math.round(mo)} mois`; }
  return `${(d / 365).toFixed(1)} an${d >= 730 ? 's' : ''}`;
}
// Aperçu affiché sous chaque bouton (même calcul que la vraie notation)
function srsFormatInterval(card, grade, seed) {
  const now = Date.now();
  const n = srsNextState(card || { reps: 0 }, grade, seed, now);
  return srsFormatDelay(n.due - now);
}


// ── In-memory cache: avoids JSON.parse on every srsLoad call (20+ call sites)
let _srsDataCache = null;
function srsLoad() {
  if (_srsDataCache) return _srsDataCache;
  _srsDataCache = JSON.parse(localStorage.getItem('srs_data') || '{}');
  return _srsDataCache;
}
function srsSave(data) {
  _srsDataCache = data;
  localStorage.setItem('srs_data', JSON.stringify(data));
}
function srsInvalidateCache() { _srsDataCache = null; }

function srsKey(lang, word) {
  return `${lang}:${word}`;
}

// Add a card to SRS pile if not already there
function srsAddCard(lang, word) {
  const data = srsLoad();
  const k = srsKey(lang, word);
  if(!data[k]) {
    // Store translation + example so card is self-contained even if removed from deck later
    const cardData = srsGetCardData(lang, word);
    const fr = cardData ? cardData.fr : '';
    data[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word, fr };
    srsSave(data);
  }
}

// Get all cards due now for a language
// A card is "due" if its due date falls on today or before (by calendar day)
// In simulation mode, fall back to strict timestamp comparison
function srsIsDue(card) {
  if(srsState.simMode) return card.due <= Date.now();
  // Standard SM-2 / Anki behavior: card is due all day on its due date
  const now = new Date();
  const endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999).getTime();
  return card.due <= endOfToday;
}





// Format interval for display

let srsState = { lang: 'es', queue: [], currentCard: null, revealed: false, simMode: false, simTimer: null, sessionFilter: null, sessionFilterLabel: null,
  learnLater: [], counts: {}, undo: [], forceKey: null, justGraded: false, shownAt: 0, wakeTimer: null };

function toggleSRSSim() {
  const on = document.getElementById('srs-sim-toggle').checked;
  srsState.simMode = on;
  // Clear existing timer
  if(srsState.simTimer) { clearInterval(srsState.simTimer); srsState.simTimer = null; }
  if(on) {
    // Auto-refresh queue every second so cards reappear when their sim-interval expires
    srsState.simTimer = setInterval(() => {
      if(document.getElementById('screen-srs').classList.contains('active')) {
        // Only refresh if we're not in the middle of grading (revealed state)
        if(!srsState.revealed) srsRefresh();
      }
    }, 1000);
    showToast('⏩ Mode simulation activé', 'correct-toast');
  } else {
    // Reschedule cards whose due dates were set during simulation
    // (their due timestamp is way too close relative to their declared interval)
    const data = srsLoad();
    const realDay = 86400000;
    let fixed = 0;
    for (const [k, c] of Object.entries(data)) {
      if (!c.interval || c.interval < 1 || !c.lr) continue;
      const expectedMs = c.interval * realDay;
      const actualMs = c.due - c.lr;
      // If actual gap is less than half what the interval should be in real time, it was set during sim
      if (actualMs < expectedMs * 0.5) {
        c.due = c.lr + expectedMs;
        fixed++;
      }
    }
    if (fixed) {
      srsSave(data);
      console.log(`[Aprende] 🔄 Rescaled ${fixed} cards from simulation to real time`);
    }
    showToast('⏸️ Mode simulation désactivé', 'correct-toast');
  }
  srsRefresh();
}

function openSRS(lang) {
  srsState.lang = lang;
  currentLang = lang;
  srsState.sessionFilter = null; // reset — global SRS mode
  srsState.sessionFilterLabel = null;
  const titles = { es: '🧠 Révision SRS — 🇪🇸', ln: '🧠 Révision SRS — 🇨🇩', en: '🧠 Révision SRS — 🇬🇧' };
  document.getElementById('srs-title').textContent = titles[lang];
  // Sync UI checkbox with state
  const toggle = document.getElementById('srs-sim-toggle');
  if(toggle) toggle.checked = srsState.simMode;
  showScreen('screen-srs');
  srsRefresh();
}


// Clear the session filter — go back to global SRS
function srsClearFilter() {
  srsState.sessionFilter = null;
  srsState.sessionFilterLabel = null;
  const titles = { es: '🧠 Révision SRS — 🇪🇸', ln: '🧠 Révision SRS — 🇨🇩', en: '🧠 Révision SRS — 🇬🇧' };
  document.getElementById('srs-title').textContent = titles[srsState.lang];
  srsRefresh();
}

// ── Calendar / upcoming reviews ──
// Compute "calendar day" diff: 0 = today, 1 = tomorrow, etc.
// In simulation mode we fall back to raw diff/dayMs
function srsCalendarDaysDiff(due) {
  if(srsState.simMode) {
    const dayMs = 3 * 1000;
    return Math.floor((due - Date.now()) / dayMs);
  }
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const dueDate = new Date(due);
  const dueDayStart = new Date(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate()).getTime();
  return Math.round((dueDayStart - todayStart) / (24 * 60 * 60 * 1000));
}

// Group all cards (not yet due) by time bucket, using calendar days
function srsGetUpcoming(lang) {
  const data = srsLoad();
  const now = Date.now();
  const filter = srsState.sessionFilter;
  const buckets = {
    'Aujourd\'hui': [],
    'Demain': [],
    'Cette semaine (2-7j)': [],
    'Ce mois-ci (8-30j)': [],
    'Plus tard (>30j)': [],
  };
  Object.entries(data)
    .filter(([k, c]) => c.lang === lang && (!filter || filter.has(k)))
    .forEach(([k, c]) => {
      if(c.reps === 0) return; // skip new cards (handled separately)
      const entry = { key: k, word: k.split(':').slice(1).join(':'), due: c.due, interval: c.interval, reps: c.reps };
      const days = srsCalendarDaysDiff(c.due);
      if(days <= 0) buckets['Aujourd\'hui'].push(entry);
      else if(days === 1) buckets['Demain'].push(entry);
      else if(days <= 7) buckets['Cette semaine (2-7j)'].push(entry);
      else if(days <= 30) buckets['Ce mois-ci (8-30j)'].push(entry);
      else buckets['Plus tard (>30j)'].push(entry);
    });
  // Sort each bucket by due date
  Object.values(buckets).forEach(list => list.sort((a,b) => a.due - b.due));
  return buckets;
}

function srsFormatDueDate(due) {
  if(due === undefined || due === null || isNaN(due)) return '—';
  const now = Date.now();
  if(due <= now) return 'maintenant';
  if(srsState.simMode) {
    const diff = due - now;
    const secs = Math.round(diff / 1000);
    if(secs < 60) return `dans ${secs}s`;
    return `dans ${Math.round(secs/60)}min`;
  }
  const days = srsCalendarDaysDiff(due);
  if(days <= 0) return 'aujourd\'hui';
  if(days === 1) return 'demain';
  if(days < 30) return `dans ${days}j`;
  if(days < 365) return `dans ${Math.round(days/30)}mo`;
  return `dans ${(days/365).toFixed(1)}an`;
}

function showSRSCalendar() {
  const lang = srsState.lang;
  const buckets = srsGetUpcoming(lang);
  const data = srsLoad();
  const filter = srsState.sessionFilter;
  const newCards = Object.entries(data)
    .filter(([k, c]) => c.lang === lang && c.reps === 0 && (!filter || filter.has(k)))
    .map(([k, c]) => ({ key: k, word: k.split(':').slice(1).join(':') }));
  const mastered = Object.entries(data)
    .filter(([k, c]) => c.lang === lang && c.reps >= 5 && c.interval >= 21 && (!filter || filter.has(k)));

  const bucketColors = {
    'Aujourd\'hui': { c: 'var(--error)', bg: 'rgba(255,23,68,.12)', bd: 'rgba(255,23,68,.35)' },
    'Demain': { c: '#fb923c', bg: 'rgba(251,146,60,.12)', bd: 'rgba(251,146,60,.35)' },
    'Cette semaine (2-7j)': { c: '#22c55e', bg: 'rgba(34,197,94,.12)', bd: 'rgba(34,197,94,.35)' },
    'Ce mois-ci (8-30j)': { c: '#38bdf8', bg: 'rgba(56,189,248,.12)', bd: 'rgba(56,189,248,.35)' },
    'Plus tard (>30j)': { c: 'var(--neon-purple)', bg: 'rgba(213,0,249,.12)', bd: 'rgba(213,0,249,.35)' },
  };
  const langColor = SHUF_COLORS[lang];

  const wordChip = (entry) => {
    const cardData = srsGetCardData(lang, entry.word);
    const srsEntry = data[entry.key] || {};
    const fr = (cardData && cardData.fr) || srsEntry.fr || '—';
    const isNew = entry.reps === undefined || entry.reps === 0;
    const dueLabel = isNew ? 'jamais vu' : srsFormatDueDate(entry.due);
    const repsLabel = isNew ? 'nouveau' : `${entry.reps}× rev.`;
    return `<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:.5rem .75rem;display:flex;justify-content:space-between;align-items:center;gap:.5rem;font-size:.78rem">
      <div style="flex:1;min-width:0;overflow:hidden">
        <div style="color:${langColor};font-weight:700;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">${entry.word}</div>
        <div style="color:var(--muted);font-size:.7rem;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">${fr}</div>
      </div>
      <div style="font-size:.68rem;color:var(--muted);white-space:nowrap;text-align:right">
        <div>${dueLabel}</div>
        <div style="opacity:.6">${repsLabel}</div>
      </div>
    </div>`;
  };

  let html = '';

  // Show current filter
  if(srsState.sessionFilter) {
    html += `<div style="background:rgba(213,0,249,.1);border:1px solid rgba(213,0,249,.3);border-radius:10px;padding:.6rem .9rem;margin-bottom:1rem;font-size:.78rem;text-align:center;color:var(--neon-purple)">📆 Filtré sur ${srsState.sessionFilterLabel}</div>`;
  }

  // New cards
  if(newCards.length > 0) {
    html += `<div style="margin-bottom:1.2rem">
      <div style="font-family:'Unbounded',sans-serif;font-size:.78rem;color:var(--accent);margin-bottom:.6rem;display:flex;align-items:center;gap:.4rem">
        <span style="width:8px;height:8px;background:var(--accent);border-radius:50%;box-shadow:0 0 8px var(--accent)"></span>
        🆕 Nouveaux (jamais révisés) — ${newCards.length}
      </div>
      <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:.4rem">${newCards.slice(0,15).map(wordChip).join('')}${newCards.length>15?`<div style="text-align:center;color:var(--muted);font-size:.7rem;padding:.4rem">+ ${newCards.length-15} autres…</div>`:''}</div>
    </div>`;
  }

  // Leeches
  const leeches = Object.entries(data).filter(([k, c]) => c.lang === lang && c.leech && (!filter || filter.has(k)))
    .map(([k, c]) => ({ key: k, word: k.split(':').slice(1).join(':'), due: c.due, reps: c.reps, lapses: c.lapses }));
  if(leeches.length > 0) {
    html += `<div style="margin-bottom:1.2rem">
      <div style="font-family:'Unbounded',sans-serif;font-size:.78rem;color:#ff6b81;margin-bottom:.4rem">🩸 Sangsues — ${leeches.length}</div>
      <div style="font-size:.7rem;color:var(--muted);margin-bottom:.6rem;line-height:1.5">Mots oubliés 8 fois ou plus. Plutôt que de les répéter, invente-leur une image mentale ou une phrase personnelle.</div>
      <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:.4rem;background:rgba(255,23,68,.08);border:1px solid rgba(255,23,68,.3);border-radius:12px;padding:.6rem">${leeches.map(wordChip).join('')}</div>
    </div>`;
  }

  // Buckets
  let totalScheduled = 0;
  Object.entries(buckets).forEach(([name, entries]) => {
    if(entries.length === 0) return;
    totalScheduled += entries.length;
    const col = bucketColors[name] || { c: 'var(--muted)', bg: 'rgba(255,255,255,.04)', bd: 'rgba(255,255,255,.1)' };
    html += `<div style="margin-bottom:1.2rem">
      <div style="font-family:'Unbounded',sans-serif;font-size:.78rem;color:${col.c};margin-bottom:.6rem;display:flex;align-items:center;gap:.4rem">
        <span style="width:8px;height:8px;background:${col.c};border-radius:50%;box-shadow:0 0 8px ${col.c}"></span>
        ${name} — ${entries.length}
      </div>
      <div style="display:grid;grid-template-columns:minmax(0,1fr);gap:.4rem;background:${col.bg};border:1px solid ${col.bd};border-radius:12px;padding:.6rem">${entries.slice(0,20).map(wordChip).join('')}${entries.length>20?`<div style="text-align:center;color:var(--muted);font-size:.7rem;padding:.4rem">+ ${entries.length-20} autres…</div>`:''}</div>
    </div>`;
  });

  if(newCards.length === 0 && totalScheduled === 0 && mastered.length === 0) {
    html = `<div style="text-align:center;padding:2rem;color:var(--muted)"><div style="font-size:2.5rem;margin-bottom:.6rem;opacity:.4">📭</div><div>Aucune carte dans le SRS pour cette sélection.</div></div>`;
  } else if(mastered.length > 0) {
    html += `<div style="text-align:center;padding:.6rem;color:var(--success);font-size:.78rem;background:rgba(0,255,157,.08);border:1px solid rgba(0,255,157,.2);border-radius:10px;margin-top:.4rem">✨ ${mastered.length} carte${mastered.length>1?'s':''} acquise${mastered.length>1?'s':''} (>21j entre 2 révisions)</div>`;
  }

  document.getElementById('srs-calendar-content').innerHTML = html;
  document.getElementById('srs-calendar-modal').style.display = 'block';
  haptic('light');
}

function closeSRSCalendar() {
  document.getElementById('srs-calendar-modal').style.display = 'none';
}

// Update the SRS due badges shown on the language selector cards
function updateSRSDueBadges() {
  const data = srsLoad();
  const now = Date.now();
  const counts = { es: 0, ln: 0, en: 0 };
  Object.values(data).forEach(c => {
    if(!counts.hasOwnProperty(c.lang)) return;
    if(c.due <= now && c.reps > 0) counts[c.lang]++;
  });
  ['es','ln','en'].forEach(lang => {
    const badge = document.getElementById('srs-due-' + lang);
    if(!badge) return;
    const n = counts[lang];
    if(n > 0) {
      badge.style.display = 'inline-block';
      const countSpan = badge.querySelector('[data-count]');
      if(countSpan) countSpan.textContent = n;
    } else {
      badge.style.display = 'none';
    }
  });
  // Also update sidebar badges
  if(typeof updateSidebarBadges === 'function') updateSidebarBadges();
}

// Tolerant normalisation: case, accents, "to", articles, sb/sth, brackets, punctuation
function srsNorm(s) {
  return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\[[^\]]*\]/g, ' ').replace(/[()\/.,!?¿¡'’"\-]/g, ' ')
    .replace(/\b(to|a|an|the|sb|sth|someone|something)\b/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
function _srsSearchArraySources(lang, word, norm) {
  const f = lang === 'es' ? 'es' : lang === 'ln' ? 'ln' : 'en';
  // Collect all [word, fr, ...] arrays from JOURNAL_SESSIONS + COURSES
  const sources = [];
  if(typeof JOURNAL_SESSIONS !== 'undefined') {
    for(const sess of JOURNAL_SESSIONS) {
      const arr = lang === 'es' ? (sess.es || sess.mots || []) : lang === 'ln' ? (sess.ln || []) : (sess.en || []);
      if(arr.length) sources.push(arr);
      // Also check alertes (grammar notes stored as [title, desc])
      if(sess.alertes) sources.push(sess.alertes);
    }
  }
  if(typeof COURSES !== 'undefined' && COURSES[lang]) {
    for(const unit of COURSES[lang].units || []) {
      if(unit.w && unit.w.length) sources.push(unit.w);
    }
  }
  // Exact match first
  for(const arr of sources) {
    for(const entry of arr) {
      if(Array.isArray(entry) && entry[0] === word) {
        return { [f]: entry[0], fr: entry[1] || '' };
      }
    }
  }
  // Normalized match
  if(norm) {
    for(const arr of sources) {
      for(const entry of arr) {
        if(Array.isArray(entry) && srsNorm(entry[0]) === norm) {
          return { [f]: entry[0], fr: entry[1] || '' };
        }
      }
    }
  }
  return undefined;
}
function srsGetCardData(lang, word) {
  const deck = getDeckForLang(lang);
  const f = lang === 'es' ? 'es' : lang === 'ln' ? 'ln' : 'en';
  const exact = deck.find(c => c && c[f] === word);
  if(exact) return exact;
  // Fallback: card saved under an older spelling of the word
  const n = srsNorm(word);
  const matches = deck.filter(c => c && srsNorm(c[f]) === n);
  if(matches.length === 1) return matches[0];
  // Fallback 2: search in JOURNAL_SESSIONS + COURSES
  return _srsSearchArraySources(lang, word, n);
}
// One-time migration: rename SRS keys saved under an old spelling to the current deck spelling
function srsMigrateKeys() {
  const data = srsLoad(); let changed = 0;
  for(const key of Object.keys(data)) {
    const lang = key.split(':')[0]; const word = key.split(':').slice(1).join(':');
    const f = lang === 'es' ? 'es' : lang === 'ln' ? 'ln' : 'en';
    const deck = getDeckForLang(lang);
    if(deck.find(c => c && c[f] === word)) continue;
    const card = srsGetCardData(lang, word);
    if(!card) continue;
    const newKey = `${lang}:${card[f]}`;
    if(data[newKey]) { if((data[key].reps || 0) > (data[newKey].reps || 0)) data[newKey] = data[key]; }
    else data[newKey] = data[key];
    delete data[key]; changed++;
  }
  if(changed) { srsSave(data); console.log('[Aprende] SRS keys migrated:', changed); }
}
// ── Auto-enqueue: at boot, add any VOCAB/JOURNAL/COURSE words not yet in SRS ──
function srsAutoEnqueueNew() {
  const data = srsLoad(); let added = 0; let patched = 0;
  ['es', 'ln', 'en'].forEach(lang => {
    const f = lang;
    // 1) Words from VOCAB decks (DATA / LINGALA / ENGLISH)
    getDeckForLang(lang).forEach(card => {
      if(!card) return;
      const word = card[f]; if(!word) return;
      const k = srsKey(lang, word);
      if(!data[k]) { data[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word, fr: card.fr || '' }; added++; }
      else if(!data[k].fr && card.fr) { data[k].fr = card.fr; data[k].word = data[k].word || word; patched++; }
      else if(!data[k].word) { data[k].word = word; patched++; }
    });
    // 2) Words from JOURNAL_SESSIONS
    if(typeof JOURNAL_SESSIONS !== 'undefined') {
      for(const sess of JOURNAL_SESSIONS) {
        const arr = lang === 'es' ? (sess.es || sess.mots || []) : lang === 'ln' ? (sess.ln || []) : (sess.en || []);
        for(const entry of arr) {
          if(!Array.isArray(entry) || !entry[0]) continue;
          const k = srsKey(lang, entry[0]);
          if(!data[k]) { data[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word: entry[0], fr: entry[1] || '' }; added++; }
          else if(!data[k].fr && entry[1]) { data[k].fr = entry[1]; data[k].word = data[k].word || entry[0]; patched++; }
          else if(!data[k].word) { data[k].word = entry[0]; patched++; }
        }
      }
    }
    // 3) Words from COURSES (parcours)
    if(typeof COURSES !== 'undefined' && COURSES[lang]) {
      for(const unit of COURSES[lang].units || []) {
        for(const w of unit.w || []) {
          if(!Array.isArray(w) || !w[0]) continue;
          const k = srsKey(lang, w[0]);
          if(!data[k]) { data[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word: w[0], fr: w[1] || '' }; added++; }
          else if(!data[k].fr && w[1]) { data[k].fr = w[1]; data[k].word = data[k].word || w[0]; patched++; }
          else if(!data[k].word) { data[k].word = w[0]; patched++; }
        }
      }
    }
  });
  // 4) Reverse pass: patch any SRS card still missing fr by looking it up
  Object.entries(data).forEach(([k, c]) => {
    if(c.fr) return; // already has translation
    const word = c.word || k.split(':').slice(1).join(':');
    const lang = c.lang || k.split(':')[0];
    const found = srsGetCardData(lang, word);
    if(found && found.fr) { data[k].fr = found.fr; if(!data[k].word) data[k].word = word; patched++; }
    else if(!data[k].word) { data[k].word = word; }
  });
  if(added || patched) { srsSave(data); console.log('[Aprende] SRS auto-enqueue:', added, 'new,', patched, 'patched (fr/word backfill)'); }
}

function srsRenderStack() {
  try {
  const stack = document.getElementById('srs-stack');
  stack.innerHTML = '';
  srsState.revealed = false;
  document.getElementById('srs-grade-area').style.display = 'none';

  const visible = srsState.queue.slice(0, 3);
  document.getElementById('srs-counter').textContent = `${srsState.queue.length} à réviser`;

  visible.forEach((card, i) => {
    try {
    let data = srsGetCardData(card.lang, card.word);
    // Fallback: if card no longer in deck, use translation stored in SRS data
    if(!data) {
      const srsData = srsLoad()[card.key] || {};
      data = {
        [card.lang]: card.word,
        es: card.lang === 'es' ? card.word : '',
        ln: card.lang === 'ln' ? card.word : '',
        en: card.lang === 'en' ? card.word : '',
        fr: srsData.fr || '(traduction non disponible)'
      };
    }
    const front = (card.lang === 'es' ? data.es : card.lang === 'ln' ? data.ln : data.en) || card.word || '?';
    const flag = (typeof SHUF_FLAGS !== 'undefined' && SHUF_FLAGS[card.lang]) || '';

    // Per-language gradients (as requested)
    const langBg = {
      es: 'linear-gradient(135deg, #ff6b1a 0%, #d10a2e 100%)',   // orange → rouge
      ln: 'linear-gradient(135deg, #007FFF 0%, #FFDE00 100%)',   // bleu ciel → jaune (drapeau RDC)
      en: 'linear-gradient(135deg, #012169 0%, #C8102E 100%)',   // bleu → rouge (drapeau UK)
    };
    const langBorder = {
      es: 'rgba(255,235,59,.6)',
      ln: 'rgba(255,255,255,.5)',
      en: 'rgba(255,255,255,.5)',
    };

    const el = document.createElement('div');
    el.className = 'srs-card ' + (i === 0 ? 'top' : i === 1 ? 'below-1' : 'below-2');
    // Solid dark overlay + colored gradient underneath — cards remain opaque
    el.style.background = `linear-gradient(135deg, rgba(0,0,0,.72), rgba(0,0,0,.88)), ${langBg[card.lang] || langBg.es}`;
    el.style.border = `2px solid ${langBorder[card.lang] || langBorder.es}`;

    if(i === 0) {
      // Top card only: full content + click handler
      let extraBadges = '';
      try { if(card.lang === 'en') extraBadges += enLevelBadge(enLevelOf(data)); } catch(e) { console.warn('[SRS] enLevelBadge error:', e); }
      try { if(card.leech) extraBadges += '<span title="Sangsue : oubliée 8 fois ou plus" style="margin-left:.4rem;padding:.12rem .45rem;border-radius:6px;font-size:.62rem;font-weight:800;letter-spacing:.05em;background:rgba(255,23,68,.2);color:#ff6b81;border:1px solid rgba(255,23,68,.6)">🩸 SANGSUE</span>'; } catch(e) {}
      try { if(srsIsIntraday(card)) extraBadges += '<span style="margin-left:.4rem;padding:.12rem .45rem;border-radius:6px;font-size:.62rem;font-weight:800;background:rgba(255,235,59,.15);color:#ffeb3b;border:1px solid rgba(255,235,59,.5)">⏳ APPRENTISSAGE</span>'; } catch(e) {}
      let exampleHtml = '';
      try { exampleHtml = cardExampleHTML(card.lang, data); } catch(e) { console.warn('[SRS] cardExampleHTML error:', e); }
      el.innerHTML = `
        <div style="font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.6)">${flag}${extraBadges}</div>
        <div class="question-word srs-front-text" style="font-size:clamp(1.6rem,5.5vw,2.4rem);color:#fff;text-align:center;line-height:1.2;text-shadow:0 2px 12px rgba(0,0,0,.5)">${front}</div>
        <div class="srs-back-text" style="display:none;border-top:1px solid rgba(255,255,255,.2);padding-top:.8rem;width:100%;text-align:center;animation:fadeIn .3s ease">
          <div style="font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;color:var(--accent2);margin-bottom:.4rem">🇫🇷 Traduction</div>
          <div style="font-size:1.3rem;font-weight:700;color:#fff">${data.fr || '?'}</div>${exampleHtml}
        </div>
        <div class="srs-tap-text" style="font-size:.75rem;color:rgba(255,255,255,.55);opacity:.9">↓ Tap pour révéler</div>`;
      el.onclick = () => srsReveal();
    } else {
      // Below cards: empty (just the colored background — no bleeding text)
      el.innerHTML = '';
    }
    stack.appendChild(el);
    } catch(cardErr) {
      console.error('[SRS] Render error for card', card.key || card.word, ':', cardErr);
      // Render a fallback card so user can still grade and move on
      const el = document.createElement('div');
      el.className = 'srs-card ' + (i === 0 ? 'top' : i === 1 ? 'below-1' : 'below-2');
      el.style.background = 'linear-gradient(135deg, rgba(0,0,0,.72), rgba(0,0,0,.88)), linear-gradient(135deg, #ff6b1a, #d10a2e)';
      el.style.border = '2px solid rgba(255,107,26,.6)';
      if(i === 0) {
        el.innerHTML = `<div style="color:rgba(255,255,255,.6);font-size:.7rem;letter-spacing:.18em;text-transform:uppercase">⚠️ ERREUR</div>
          <div class="question-word srs-front-text" style="font-size:1.2rem;color:#fff;text-align:center">${card.word || '?'}</div>
          <div class="srs-back-text" style="display:none;padding-top:.8rem;text-align:center;color:#ffa">
            <div style="font-size:.85rem">Erreur de rendu</div>
            <div style="font-size:.7rem;margin-top:.3rem;opacity:.7">${(cardErr.message || '').substring(0, 80)}</div>
          </div>
          <div class="srs-tap-text" style="font-size:.75rem;color:rgba(255,255,255,.55)">↓ Tap pour révéler</div>`;
        el.onclick = () => srsReveal();
      }
      stack.appendChild(el);
    }
  });

  srsState.currentCard = visible[0];
  srsState.shownAt = Date.now();
  // Update interval previews
  try {
  if(srsState.currentCard) {
    const data = srsLoad()[srsState.currentCard.key];
    [0,1,2,3].forEach(g => {
      document.getElementById(`srs-int-${g}`).textContent = srsFormatInterval(data, g, srsState.currentCard.key);
    });
  }
  } catch(e) { console.error('[SRS] Interval preview error:', e); }
  } catch(fatalErr) {
    console.error('[SRS] FATAL srsRenderStack error:', fatalErr);
    const stack = document.getElementById('srs-stack');
    if(stack) stack.innerHTML = '<div style="padding:2rem;text-align:center;color:#ffa"><div style="font-size:1.5rem">⚠️</div><div style="margin-top:.5rem;font-size:.9rem">Erreur de rendu SRS</div><div style="margin-top:.3rem;font-size:.75rem;opacity:.7">' + (fatalErr.message || '') + '</div><div style="margin-top:1rem;font-size:.8rem">Recharge l\'app (↻) pour réessayer</div></div>';
  }
}

function srsReveal() {
  if(srsState.revealed) return;
  srsState.revealed = true;
  const top = document.querySelector('.srs-card.top');
  if(!top) return;
  top.querySelector('.srs-back-text').style.display = 'block';
  top.querySelector('.srs-tap-text').style.display = 'none';
  document.getElementById('srs-grade-area').style.display = 'block';
}


// Add new cards to SRS from current language deck
// ═══════════════════════════════════════════════
// STATISTIQUES (inspiré de l'écran Statistiques d'Anki)
// Une seule série par graphique · teinte unique · info-bulle au survol / focus
// ═══════════════════════════════════════════════
let statsLang = 'es';
const STATS_HEAT = ['rgba(255,255,255,.06)', '#4a3c0c', '#7d6410', '#b8920f', '#ffd60a']; // séquentiel : une teinte, du sombre au clair
const STATS_BAR = '#ffd60a';

function openStats(lang) {
  statsLang = lang || currentLang || 'es';
  showScreen('screen-stats');
  renderStats();
}
function statsSetLang(lang) { statsLang = lang; renderStats(); }

function statsTip(e, el) {
  const tip = document.getElementById('stats-tip');
  if(!tip || !el) return;
  tip.textContent = '';
  const v = document.createElement('strong'); v.textContent = el.dataset.v || '';
  const l = document.createElement('div'); l.textContent = el.dataset.l || ''; l.style.cssText = 'opacity:.7;font-size:.7rem;margin-top:.15rem';
  tip.append(v, l);
  tip.style.display = 'block';
  const r = el.getBoundingClientRect();
  const x = Math.min(window.innerWidth - tip.offsetWidth - 8, Math.max(8, r.left + r.width / 2 - tip.offsetWidth / 2));
  tip.style.left = x + 'px';
  tip.style.top = Math.max(8, r.top - tip.offsetHeight - 8) + 'px';
}
function statsTipHide() { const t = document.getElementById('stats-tip'); if(t) t.style.display = 'none'; }
function statsBindTips(root) {
  root.querySelectorAll('[data-v]').forEach(el => {
    el.addEventListener('pointerenter', e => statsTip(e, el));
    el.addEventListener('pointerleave', statsTipHide);
    el.addEventListener('focus', e => statsTip(e, el));
    el.addEventListener('blur', statsTipHide);
  });
}

function renderStats() {
  const lang = statsLang, day = 86400000, today = srsStartOfToday(), now = Date.now();
  document.querySelectorAll('.stx-tab').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  const log = srsRevlogLoad().filter(r => r[0].startsWith(lang + ':'));
  const cards = Object.entries(srsLoad()).filter(([k, c]) => c.lang === lang).map(([k, c]) => c);

  // ── Chiffres clés
  const todayLog = log.filter(r => r[1] >= today);
  const todayMin = Math.round(todayLog.reduce((a, r) => a + (r[5] || 0), 0) / 60000);
  const last30 = log.filter(r => r[1] >= today - 29 * day && r[3] === 2);
  const retention = last30.length ? Math.round(100 * last30.filter(r => r[2] > 0).length / last30.length) : null;
  const daysWith = new Set(log.map(r => Math.floor((r[1] - new Date(r[1]).getTimezoneOffset() * 60000) / day)));
  let streak = 0;
  for(let d = 0; ; d++) {
    const t = today - d * day;
    const k = Math.floor((t - new Date(t).getTimezoneOffset() * 60000) / day);
    if(daysWith.has(k)) streak++; else if(d > 0) break; else continue;
  }
  const cnt = { new: 0, learn: 0, young: 0, mature: 0, leech: 0 };
  cards.forEach(c => {
    if(!c.reps) cnt.new++;
    else if(c.st === 'learning' || c.st === 'relearning') cnt.learn++;
    else if((c.interval || 0) >= 21) cnt.mature++;
    else cnt.young++;
    if(c.leech) cnt.leech++;
  });

  const tile = (big, label, sub) => `<div class="stx-tile"><div class="stx-big">${big}</div><div class="stx-lbl">${label}</div>${sub ? `<div class="stx-sub">${sub}</div>` : ''}</div>`;
  let html = `<div class="stx-tiles">
    ${tile(todayLog.length, 'révisions aujourd\'hui', todayMin ? `${todayMin} min` : '')}
    ${tile(retention === null ? '—' : retention + ' %', 'rétention réelle (30 j)', retention === null ? 'pas encore de données' : 'objectif FSRS : 90 %')}
    ${tile(streak, streak > 1 ? 'jours d\'affilée' : 'jour d\'affilée', '')}
  </div>
  <div class="stx-tiles stx-tiles-5">
    ${tile(cnt.new, 'nouvelles', '')}${tile(cnt.learn, 'en apprentissage', '')}${tile(cnt.young, 'jeunes', '< 21 j')}${tile(cnt.mature, 'matures', '≥ 21 j')}${tile(cnt.leech, 'sangsues', '🩸')}
  </div>`;

  // ── Calendrier d'activité (26 semaines)
  const perDay = {};
  log.forEach(r => { const d = new Date(r[1]); const k = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime(); perDay[k] = (perDay[k] || 0) + 1; });
  const weeks = 26, startDow = (new Date(today).getDay() + 6) % 7; // lundi = 0
  const first = today - (weeks * 7 - 7 + startDow) * day;
  const maxDay = Math.max(1, ...Object.values(perDay));
  let cells = '';
  for(let w = 0; w < weeks; w++) {
    cells += '<div class="stx-heat-col">';
    for(let d = 0; d < 7; d++) {
      const t = first + (w * 7 + d) * day;
      const dt = new Date(t); const k = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()).getTime();
      if(k > today) { cells += '<div class="stx-heat-cell" style="visibility:hidden"></div>'; continue; }
      const n = perDay[k] || 0;
      const lvl = n === 0 ? 0 : Math.min(4, 1 + Math.floor(3 * n / maxDay));
      const dateTxt = dt.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' });
      cells += `<div class="stx-heat-cell" style="background:${STATS_HEAT[lvl]}${k === today ? ';outline:1.5px solid #fff5e1' : ''}" data-v="${n} révision${n > 1 ? 's' : ''}" data-l="${dateTxt}"></div>`;
    }
    cells += '</div>';
  }
  html += `<div class="stx-card"><div class="stx-h">Activité</div>
    <div class="stx-heat">${cells}</div>
    <div class="stx-legend"><span>Moins</span>${STATS_HEAT.map(c => `<i style="background:${c}"></i>`).join('')}<span>Plus</span></div>
    ${log.length ? '' : '<div class="stx-empty">L\'historique démarre avec cette version : chaque réponse est désormais enregistrée.</div>'}
  </div>`;

  // ── Prévisions : cartes à réviser sur les 30 prochains jours
  const fut = Array(30).fill(0);
  cards.forEach(c => {
    if(!c.reps) return;
    const d = new Date(c.due); const k = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    const i = Math.max(0, Math.round((k - today) / day));
    if(i < 30) fut[i]++;
  });
  const maxF = Math.max(1, ...fut);
  const futBars = fut.map((n, i) => {
    const label = i === 0 ? 'aujourd\'hui (+ retard)' : i === 1 ? 'demain' : `dans ${i} j`;
    return `<div class="stx-bar-hit" tabindex="0" data-v="${n} carte${n > 1 ? 's' : ''}" data-l="${label}"><div class="stx-bar" style="height:${n ? Math.max(4, 100 * n / maxF) : 0}%"></div></div>`;
  }).join('');
  const totalWeek = fut.slice(0, 7).reduce((a, b) => a + b, 0);
  html += `<div class="stx-card"><div class="stx-h">Prévisions · 30 jours <span class="stx-hsub">${totalWeek} révisions cette semaine · pic ${maxF}/jour</span></div>
    <div class="stx-bars">${futBars}</div>
    <div class="stx-axis"><span>Auj.</span><span>+7 j</span><span>+14 j</span><span>+21 j</span><span>+29 j</span></div>
    <details class="stx-table"><summary>Voir les données</summary><table>${fut.map((n, i) => n ? `<tr><td>${i === 0 ? 'Aujourd\'hui' : i === 1 ? 'Demain' : 'J+' + i}</td><td>${n}</td></tr>` : '').join('') || '<tr><td>Aucune révision prévue</td></tr>'}</table></details>
  </div>`;

  // ── Réponses (30 derniers jours, cartes en révision)
  const btn = [0, 0, 0, 0];
  last30.forEach(r => btn[r[2]]++);
  const totB = btn.reduce((a, b) => a + b, 0), maxB = Math.max(1, ...btn);
  const names = ['Encore', 'Difficile', 'Bien', 'Facile'];
  html += `<div class="stx-card"><div class="stx-h">Tes réponses · 30 jours <span class="stx-hsub">cartes en révision</span></div>
    <div class="stx-bars stx-bars-4">${btn.map((n, i) => `<div class="stx-bar-hit" tabindex="0" data-v="${n} (${totB ? Math.round(100 * n / totB) : 0} %)" data-l="${names[i]}"><div class="stx-bar-val">${totB ? Math.round(100 * n / totB) + ' %' : ''}</div><div class="stx-bar" style="height:${n ? Math.max(4, 100 * n / maxB) : 0}%"></div></div>`).join('')}</div>
    <div class="stx-axis stx-axis-4">${names.map(n => `<span>${n}</span>`).join('')}</div>
    ${totB ? '' : '<div class="stx-empty">Rien pour l\'instant : réponds à quelques cartes déjà apprises.</div>'}
  </div>`;

  const box = document.getElementById('stats-content');
  box.innerHTML = html;
  statsBindTips(box);
}

function srsAddNew() {
  const lang = srsState.lang;
  const data = srsLoad();
  const deck = getDeckForLang(lang);
  let added = 0;
  const addedKeys = [];
  shuffle([...deck]).forEach(card => {
    if(added >= 10) return;
    const word = lang === 'es' ? card.es : lang === 'ln' ? card.ln : card.en;
    const k = srsKey(lang, word);
    if(!data[k]) {
      const fr = lang === 'es' ? card.fr : lang === 'ln' ? card.fr : card.fr;
      data[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, word, fr };
      addedKeys.push(k);
      added++;
    }
  });
  srsSave(data);
  // ── FIX: Boost today's new-card limit so the just-added cards appear immediately.
  // Without this, cards are added but hidden behind the daily new-card cap.
  if(added > 0) {
    srsState._extraNew = (srsState._extraNew || 0) + added;
  }
  showToast(`✨ +${added} cartes ajoutées`, 'correct-toast');
  srsRefresh();
}

// ── Historique des révisions (comme le « revlog » d'Anki) ──
// entrée : [clé, horodatage ms, note 0-3, type (0 nouvelle · 1 apprentissage · 2 révision · 3 réapprentissage), intervalle j, durée ms]
// ── In-memory cache for revlog (11+ call sites)
let _srsRevlogCache = null;
function srsRevlogLoad() { try { if (_srsRevlogCache) return _srsRevlogCache; _srsRevlogCache = JSON.parse(localStorage.getItem('srs_revlog') || '[]'); return _srsRevlogCache; } catch(e) { return []; } }
function srsRevlogSave(log) { try { _srsRevlogCache = log; localStorage.setItem('srs_revlog', JSON.stringify(log)); } catch(e) { console.warn('[Aprende] revlog non sauvegardé', e); } }
function srsRevlogInvalidateCache() { _srsRevlogCache = null; }
function srsStartOfToday() { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime(); }

// ── Limite de nouvelles cartes par jour (par langue) ──
function srsNewPerDay() { const v = parseInt(localStorage.getItem('srs_new_per_day'), 10); return isNaN(v) ? SRS_CFG.defaultNewPerDay : v; }
function srsSetNewPerDay(delta) {
  const v = Math.min(100, Math.max(0, srsNewPerDay() + delta));
  localStorage.setItem('srs_new_per_day', String(v));
  srsRefresh();
}
function srsIntroducedToday(lang) {
  const start = srsStartOfToday();
  return srsRevlogLoad().filter(r => r[1] >= start && r[3] === 0 && r[0].startsWith(lang + ':')).length;
}

// ── Familles de mots (équivalent des « siblings » d'Anki) ──
// Deux nouvelles cartes d'une même famille (maleta / maletero / maletín) ne sont pas montrées le même jour.
function srsFamilyKey(word) {
  let w = String(word).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[¡!¿?.,()\[\]\/'’-]/g, ' ').trim();
  w = w.replace(/^(el|la|los|las|un|una|to|a|an|the)\s+/, '');
  let first = (w.split(/\s+/)[0] || w);
  if(/^ko[a-z]{3,}/.test(first)) first = first.slice(2);   // verbes lingala : ko-bosana → bosana
  return first.length < 4 ? first : first.slice(0, 4);
}

function srsIsIntraday(c) { return (c.st === 'learning' || c.st === 'relearning') && c.step != null; }

// ── Construction de la file de la session ──
function srsBuildQueue(lang) {
  const data = srsLoad(), now = Date.now(), filter = srsState.sessionFilter;
  const entries = Object.entries(data)
    .filter(([k, c]) => c.lang === lang && (!filter || filter.has(k)))
    .map(([k, c]) => ({ ...srsEnsureFsrs({ ...c }, now), key: k, word: k.split(':').slice(1).join(':') }));
  const learnNow = [], learnLater = [], reviews = [], news = [];
  entries.forEach(e => {
    if(!e.reps) news.push(e);
    else if(srsIsIntraday(e)) (e.due <= now ? learnNow : learnLater).push(e);
    else if(srsIsDue(e)) reviews.push(e);
  });
  // Familles déjà vues aujourd'hui ou déjà présentes dans la file
  const start = srsStartOfToday();
  const fams = new Set(srsRevlogLoad().filter(r => r[1] >= start && r[0].startsWith(lang + ':')).map(r => srsFamilyKey(r[0].split(':').slice(1).join(':'))));
  [...learnNow, ...learnLater, ...reviews].forEach(e => fams.add(srsFamilyKey(e.word)));
  const baseLimit = filter ? Infinity : Math.max(0, srsNewPerDay() - srsIntroducedToday(lang));
  const limit = baseLimit + (srsState._extraNew || 0);
  const picked = []; let buried = 0;
  for(const e of shuffle(news)) {
    if(picked.length >= limit) break;
    const f = srsFamilyKey(e.word);
    if(fams.has(f)) { buried++; continue; }
    fams.add(f); picked.push(e);
  }
  // Nouvelles cartes réparties régulièrement entre les révisions
  const rev = shuffle(reviews), mixed = [], total = rev.length + picked.length;
  const step = picked.length ? total / picked.length : Infinity;
  let ni = 0, ri = 0;
  for(let i = 0; i < total; i++) {
    const wantNew = ni < picked.length && (ri >= rev.length || i >= Math.floor(ni * step + step / 2));
    mixed.push(wantNew ? picked[ni++] : rev[ri++]);
  }
  learnNow.sort((a, b) => a.due - b.due);
  learnLater.sort((a, b) => a.due - b.due);
  let queue = [...learnNow, ...mixed];
  // Rien d'autre à faire : on peut avancer une carte en apprentissage (≤ 20 min, comme Anki)
  if(!queue.length && learnLater.length && learnLater[0].due <= now + srsMinMs(SRS_CFG.learnAheadMin)) queue = [learnLater.shift()];
  // Carte à garder en tête : après une annulation, ou carte affichée pendant un rafraîchissement
  const keep = srsState.forceKey || (!srsState.justGraded && srsState.currentCard && srsState.currentCard.key);
  if(keep) {
    const i = queue.findIndex(e => e.key === keep);
    if(i > 0) queue.unshift(queue.splice(i, 1)[0]);
    else if(i < 0 && srsState.forceKey) { const e = entries.find(x => x.key === keep); if(e) queue.unshift(e); }
  }
  srsState.forceKey = null; srsState.justGraded = false;
  srsState.learnLater = learnLater;
  srsState.counts = {
    newC: picked.length,
    dueC: learnNow.length + reviews.length + learnLater.length,
    learnC: learnNow.length + learnLater.length,
    buried, newLeft: Math.max(0, news.length - picked.length - buried),
    mastered: entries.filter(e => e.reps >= 5 && e.interval >= 21).length,
    leeches: entries.filter(e => e.leech).length,
  };
  return queue;
}

function srsGetDue(lang) { return srsBuildQueue(lang); }
function srsStats(lang) { srsBuildQueue(lang); return srsState.counts; }

function srsRefresh() {
  try {
  if(srsState.wakeTimer) { clearTimeout(srsState.wakeTimer); srsState.wakeTimer = null; }
  srsState.queue = srsBuildQueue(srsState.lang);
  const st = srsState.counts;
  document.getElementById('srs-new-count').textContent = st.newC;
  document.getElementById('srs-due-count').textContent = st.dueC;
  document.getElementById('srs-mastered-count').textContent = st.mastered;
  const npd = document.getElementById('srs-npd-value'); if(npd) npd.textContent = srsNewPerDay();
  const npdHint = document.getElementById('srs-npd-hint');
  if(npdHint) {
    const bits = [];
    if(st.buried) bits.push(`${st.buried} reportée${st.buried > 1 ? 's' : ''} à demain (même famille)`);
    if(st.newLeft && !srsState.sessionFilter) bits.push(`${st.newLeft} en attente`);
    npdHint.textContent = bits.join(' · ');
  }
  srsUpdateUndoBtn();

  const badge = document.getElementById('srs-filter-badge');
  if(srsState.sessionFilter) {
    badge.style.display = 'flex';
    document.getElementById('srs-filter-label').textContent = srsState.sessionFilterLabel || 'session';
  } else badge.style.display = 'none';

  const learnLeft = srsState.learnLater.length;
  document.getElementById('srs-counter').textContent = srsState.queue.length > 0
    ? `${srsState.queue.length + learnLeft} à réviser`
    : (learnLeft ? `⏳ ${learnLeft} en apprentissage` : '✓ À jour');

  if(srsState.queue.length === 0) {
    const emptyTitle = document.getElementById('srs-empty-title'), emptyDesc = document.getElementById('srs-empty-desc');
    const addBtn = document.getElementById('srs-empty-add');
    if(learnLeft) {
      // Des cartes en apprentissage reviennent dans quelques minutes : on attend puis on relance tout seul
      const next = srsState.learnLater[0].due;
      emptyTitle.textContent = '⏳ Petite pause';
      emptyDesc.innerHTML = `<strong style="color:var(--accent2)">${learnLeft}</strong> carte${learnLeft > 1 ? 's' : ''} en apprentissage reviennent dans <strong>${srsFormatDelay(next - Date.now())}</strong>.<br>C'est voulu : revoir un mot quelques minutes plus tard le fixe bien mieux.<br><br><span style="font-size:.8rem;opacity:.8">La session reprend toute seule.</span>`;
      addBtn.textContent = '⏩ Revoir maintenant';
      addBtn.onclick = () => { srsState.forceKey = srsState.learnLater[0].key; srsRefresh(); };
      const wait = Math.max(500, next - srsMinMs(SRS_CFG.learnAheadMin) - Date.now());
      srsState.wakeTimer = setTimeout(() => { if(document.getElementById('screen-srs').classList.contains('active')) srsRefresh(); }, Math.min(wait, 2147483000));
    } else {
      const data = srsLoad(), now = Date.now(), filter = srsState.sessionFilter;
      const upcoming = Object.entries(data)
        .filter(([k, c]) => c.lang === srsState.lang && c.due > now && c.reps > 0 && (!filter || filter.has(k)))
        .map(([k, c]) => c.due).sort((a, b) => a - b);
      const nextHint = upcoming.length > 0
        ? `⏰ Prochaine révision ${srsFormatDueDate(upcoming[0])} · <strong style="color:var(--accent2)">${upcoming.length}</strong> carte${upcoming.length > 1 ? 's' : ''} planifiée${upcoming.length > 1 ? 's' : ''}`
        : '';
      const limitHint = (st.newLeft || st.buried) && !filter
        ? `<br><br><span style="font-size:.8rem;opacity:.85">🆕 Limite du jour atteinte (${srsNewPerDay()} nouvelles cartes). ${st.newLeft + st.buried} nouvelle${st.newLeft + st.buried > 1 ? 's' : ''} t'attendent demain.</span>`
        : '';
      if(filter) {
        emptyTitle.textContent = '✓ Session à jour !';
        emptyDesc.innerHTML = `Tu as révisé tous les mots dus du ${srsState.sessionFilterLabel}.${nextHint ? '<br><br>' + nextHint : ''}`;
        addBtn.textContent = '🌍 Voir tout le SRS';
        addBtn.onclick = () => srsClearFilter();
      } else {
        emptyTitle.textContent = 'Aucune carte à réviser !';
        emptyDesc.innerHTML = `Tu es à jour.${nextHint ? '<br><br>' + nextHint : '<br>Reviens plus tard ou ajoute de nouveaux mots.'}${limitHint}`;
        addBtn.textContent = '+ Ajouter 10 mots';
        addBtn.onclick = () => srsAddNew();
      }
    }
    document.getElementById('srs-empty').style.display = 'block';
    document.getElementById('srs-active').style.display = 'none';
    // ── CRITICAL: flush SRS progress when queue is empty (session done) ──
    if(typeof syncCriticalFlush === 'function') syncCriticalFlush();
    return;
  }
  document.getElementById('srs-empty').style.display = 'none';
  document.getElementById('srs-active').style.display = 'block';
  srsRenderStack();
  } catch(e) {
    console.error('[SRS] FATAL srsRefresh error:', e);
    // Show error to user instead of blank screen
    const stack = document.getElementById('srs-stack');
    if(stack) stack.innerHTML = '<div style="padding:2rem;text-align:center;color:#ffa"><div style="font-size:1.5rem">⚠️</div><div style="margin-top:.5rem;font-size:.9rem">Erreur SRS</div><div style="margin-top:.3rem;font-size:.75rem;opacity:.7">' + ((e && e.message) || '') + '</div><div style="margin-top:1rem;font-size:.8rem">Recharge l\'app (↻) pour réessayer</div></div>';
    document.getElementById('srs-empty').style.display = 'none';
    document.getElementById('srs-active').style.display = 'block';
  }
}

function srsGrade(grade) {
  if(!srsState.revealed || !srsState.currentCard) return;
  const key = srsState.currentCard.key;
  const data = srsLoad();
  const card = data[key];
  if(!card) return;
  const prev = JSON.parse(JSON.stringify(card));
  srsEnsureFsrs(card);
  const type = !card.reps ? 0 : card.st === 'learning' ? 1 : card.st === 'relearning' ? 3 : 2;
  const wasLeech = !!card.leech;
  srsUpdate(card, grade, key);
  srsSave(data);
  const log = srsRevlogLoad();
  log.push([key, Date.now(), grade, type, card.interval || 0, srsState.shownAt ? Math.min(60000, Date.now() - srsState.shownAt) : 0]);
  srsRevlogSave(log);
  srsState.undo.push({ key, prev, logLen: log.length - 1 });
  if(srsState.undo.length > 30) srsState.undo.shift();
  if(grade === 0 && card.leech && (!wasLeech || (card.lapses - SRS_CFG.leechThreshold) % 4 === 0)) {
    showToast(`🩸 « ${srsState.currentCard.word} » est une sangsue : invente-toi une image mentale`, 'wrong-toast');
    haptic('error');
  }
  srsState.justGraded = true;
  const top = document.querySelector('.srs-card.top');
  if(top) top.classList.add('swipe-out');
  addXP(grade === 0 ? 2 : grade * 5);
  setTimeout(() => srsRefresh(), 350);
}

// ── Annuler la dernière réponse (Ctrl+Z / Z, comme Anki) ──
function srsUndo() {
  const u = srsState.undo.pop();
  if(!u) return;
  const data = srsLoad();
  data[u.key] = u.prev;
  srsSave(data);
  const log = srsRevlogLoad();
  if(log.length > u.logLen) { log.length = u.logLen; srsRevlogSave(log); }
  srsState.forceKey = u.key;
  showToast('↶ Dernière réponse annulée', 'correct-toast');
  haptic('light');
  srsRefresh();
}
function srsUpdateUndoBtn() {
  const b = document.getElementById('srs-undo-btn');
  if(b) b.style.display = srsState.undo.length ? 'inline-flex' : 'none';
}

// ── Raccourcis clavier (ordinateur) : Espace = révéler · 1-4 = noter · Z = annuler ──
document.addEventListener('keydown', e => {
  const scr = document.getElementById('screen-srs');
  if(!scr || !scr.classList.contains('active')) return;
  if(e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
  if((e.key === 'z' || e.key === 'Z') && !e.altKey) { e.preventDefault(); srsUndo(); return; }
  if(e.ctrlKey || e.metaKey || e.altKey) return;
  if((e.key === ' ' || e.key === 'Enter') && !srsState.revealed) { e.preventDefault(); srsReveal(); return; }
  if(srsState.revealed && ['1', '2', '3', '4'].includes(e.key)) { e.preventDefault(); srsGrade(parseInt(e.key, 10) - 1); }
});

// ── Migration unique SM-2 → FSRS, avec copie de sécurité ──
function srsMigrateAllToFsrs() {
  const now = Date.now();
  [['srs_data', true], ['pron_srs', false], ['grammar_srs', false]].forEach(([name]) => {
    let data;
    try { data = JSON.parse(localStorage.getItem(name) || '{}'); } catch(e) { return; }
    const todo = Object.values(data).filter(c => c && !c.st);
    if(!todo.length) return;
    if(!localStorage.getItem(name + '_backup_sm2')) localStorage.setItem(name + '_backup_sm2', JSON.stringify(data));
    todo.forEach(c => srsEnsureFsrs(c, now));
    localStorage.setItem(name, JSON.stringify(data));
    console.log(`[Aprende] ${name} : ${todo.length} cartes migrées vers FSRS (copie : ${name}_backup_sm2)`);
  });
}

// ═══════════════════════════════════════════════
// DYNAMIC INTERACTIONS — haptic, confetti, counters
// ═══════════════════════════════════════════════

// Haptic feedback (mobile, web)
function haptic(intensity = 'light') {
  if(!navigator.vibrate) return;
  const patterns = {
    light: 10,
    medium: 25,
    strong: [10, 30, 10],
    success: [15, 40, 25],
    error: [50, 80, 50]
  };
  try { navigator.vibrate(patterns[intensity] || 10); } catch(e) {}
}

// Confetti burst
function confetti(intensity = 'normal') {
  const layer = document.getElementById('confetti-layer');
  if(!layer) return;
  const counts = { small: 18, normal: 40, big: 80 };
  const colors = ['#ff2d75','#00f5d4','#b561ff','#ffe23d','#00ff9d','#4d8bff','#ff8c42'];
  const n = counts[intensity] || 40;
  const startX = window.innerWidth / 2;
  for(let i = 0; i < n; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    const angle = (Math.random() - 0.5) * Math.PI * 1.2;
    const dist = 80 + Math.random() * 280;
    p.style.left = startX + 'px';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.setProperty('--cx', (Math.sin(angle) * dist) + 'px');
    p.style.setProperty('--dur', (1.2 + Math.random() * 1.4) + 's');
    p.style.transform = `rotate(${Math.random()*360}deg)`;
    p.style.width = (6 + Math.random()*8) + 'px';
    p.style.height = (10 + Math.random()*8) + 'px';
    layer.appendChild(p);
    setTimeout(() => p.remove(), 3000);
  }
}

// Animate a counter from 0 to target
function animateCounter(el, target, duration = 800) {
  if(!el) return;
  const start = parseInt(el.textContent.replace(/\D/g,'')) || 0;
  const startTime = performance.now();
  const step = (t) => {
    const progress = Math.min((t - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(start + (target - start) * eased);
    el.textContent = val + (el.dataset.suffix || '');
    if(progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Bump a score chip
function bumpScore(elId) {
  const el = document.getElementById(elId);
  if(!el) return;
  el.classList.remove('bump');
  void el.offsetWidth; // restart animation
  el.classList.add('bump');
}

// Wrap addXP to add haptic + bump
const _addXP_orig = addXP;
addXP = function(n) {
  _addXP_orig(n);
  haptic(n >= 20 ? 'success' : 'light');
};

// Wrap showToast to add haptic
const _showToast_orig = showToast;
showToast = function(msg, type = '') {
  _showToast_orig(msg, type);
  if(type === 'correct-toast') haptic('light');
  else if(type === 'wrong-toast') haptic('error');
};

// Trigger confetti on big wins
function celebrate(scorePct) {
  if(scorePct === 100) { confetti('big'); haptic('success'); }
  else if(scorePct >= 80) { confetti('normal'); haptic('success'); }
  else if(scorePct >= 50) { confetti('small'); haptic('medium'); }
}

// Course data loaded from courses/*.js
const COURSES = { es: COURSE_ES, ln: COURSE_LN, en: COURSE_EN };
// ═══════════════════════════════════════════════
// PARCOURS (inspiré des mécaniques de Duolingo) + HÉROS RPG (inspiré d'Habitica, open source)
// Code et contenus propres à ¡Aprende! — aucun élément de marque repris.
// ═══════════════════════════════════════════════
const CRS_NODES = 6; // 3 leçons · révision · boss · coffre
const CRS_NODE_ICON = ['⭐', '📚', '🏋️', '🔁', '👹', '🎁'];
const CRS_NODE_NAME = ['Leçon 1 · Découverte', 'Leçon 2 · Découverte', 'Leçon 3 · Découverte', 'Révision de l\'unité', 'Boss de l\'unité', 'Coffre'];
const CRS_META = {
  es: { flag: '🇪🇸', name: 'Espagnol', target: 'B2', tts: 'es-ES' },
  ln: { flag: '🇨🇩', name: 'Lingala', target: 'B2', tts: null },
  en: { flag: '🇺🇸', name: 'Anglais', target: 'C1 / natif', tts: 'en-US' },
};
const CRS_ZIG = [0, 46, 72, 46, 0, -46, -72, -46];
const CRS_PRAISE = ['Excellent !', 'Parfait !', 'Bien joué !', 'Super !', 'Impeccable !', '¡Eso es!'];
// ── Immersion mode data ──
const CRS_IMMERSION_PROMPTS = {
  es: {
    tip: '💡 Consejo de gramática', newWord: '🆕 Palabra nueva', vocab: 'Vocabulario',
    whatMeans: '¿Qué significa…', translation: 'Traducción', howSay: '¿Cómo se dice « %s »?',
    listen: 'Escucha', listenChoose: 'Toca lo que escuchas', fillBlank: 'Completa la frase',
    grammar: '📘 Gramática', buildSentence: 'Construye la frase', translate: 'Traduce: « %s »',
    matchPairs: 'Asocia los pares', matchHint: 'Toca los pares que van juntos',
    dictation: '🎧 Dictado', dictHint: 'Escucha y escribe lo que oyes',
    freeTranslation: '✍️ Traducción libre', freeHint: 'Traduce al español:',
    readContext: '📖 Lee y responde', readQuestion: '¿Qué significa la palabra subrayada?',
    check: 'Verificar', cont: 'Continuar', correct: 'Respuesta correcta:',
    almost: '¡Casi!', quit: '¿Salir de la lección?'
  },
  en: {
    tip: '💡 Grammar tip', newWord: '🆕 New word', vocab: 'Vocabulary',
    whatMeans: 'What does it mean…', translation: 'Translation', howSay: 'How do you say « %s »?',
    listen: 'Listen', listenChoose: 'Tap what you hear', fillBlank: 'Complete the sentence',
    grammar: '📘 Grammar', buildSentence: 'Build the sentence', translate: 'Translate: « %s »',
    matchPairs: 'Match the pairs', matchHint: 'Tap the pairs that go together',
    dictation: '🎧 Dictation', dictHint: 'Listen and type what you hear',
    freeTranslation: '✍️ Free translation', freeHint: 'Translate into English:',
    readContext: '📖 Read & answer', readQuestion: 'What does the underlined word mean?',
    check: 'Check', cont: 'Continue', correct: 'Correct answer:',
    almost: 'Almost!', quit: 'Quit the lesson?'
  },
  ln: {
    tip: '💡 Toli ya grammaire', newWord: '🆕 Liloba ya sika', vocab: 'Maloba',
    whatMeans: 'Elakisi nini…', translation: 'Bobongoli', howSay: 'Balobi ndenge nini « %s »?',
    listen: 'Yoká', listenChoose: 'Finá oyo oyoki', fillBlank: 'Kokisa fraze',
    grammar: '📘 Grammaire', buildSentence: 'Tongá fraze', translate: 'Bongolelá: « %s »',
    matchPairs: 'Sangisá bapaire', matchHint: 'Finá bapaire oyo ekei esika moko',
    dictation: '🎧 Dictée', dictHint: 'Yoká pe komá oyo oyoki',
    freeTranslation: '✍️ Bobongoli ya bonsomi', freeHint: 'Bongolelá na lingala:',
    readContext: '📖 Tángá peyanolá', readQuestion: 'Liloba oyo basugi elakisi nini?',
    check: 'Vérifier', cont: 'Kokoba', correct: 'Eyano ya malamu:',
    almost: 'Presque!', quit: 'Kolongwa na leçon?'
  }
};
const CRS_IMMERSION_PRAISE = {
  es: ['¡Excelente!', '¡Perfecto!', '¡Muy bien!', '¡Genial!', '¡Impecable!', '¡Así se hace!'],
  en: ['Excellent!', 'Perfect!', 'Well done!', 'Great!', 'Spot on!', 'Nailed it!'],
  ln: ['Malamu mingi!', 'Parfait!', 'Bien joué!', 'Kitoko!', 'Impeccable!', 'Ezali bongo!']
};
function crsP(key, arg) {
  if(!crs || crs.mode !== 'immersion') {
    const fr = {tip:'💡 Astuce de grammaire',newWord:'🆕 Nouveau mot',vocab:'Vocabulaire',
      whatMeans:'Que veut dire…',translation:'Traduction',howSay:'Comment dit-on « %s » ?',
      listen:'Écoute',listenChoose:'Touche ce que tu entends',fillBlank:'Complète la phrase',
      grammar:'📘 Grammaire',buildSentence:'Construis la phrase',translate:'Traduis : « %s »',
      matchPairs:'Associe les paires',matchHint:'Touche les paires qui vont ensemble',
      dictation:'🎧 Dictée',dictHint:'Écoute et tape ce que tu entends',
      freeTranslation:'✍️ Traduction libre',freeHint:'Traduis en %s :',
      readContext:'📖 Lire et répondre',readQuestion:'Que veut dire le mot souligné ?',
      check:'Vérifier',cont:'Continuer',correct:'Bonne réponse :',almost:'Presque !',
      quit:'Quitter la leçon ?'};
    const v = fr[key] || key;
    return arg ? v.replace('%s', arg) : v;
  }
  const p = CRS_IMMERSION_PROMPTS[crs.lang] || CRS_IMMERSION_PROMPTS.es;
  const v = p[key] || key;
  return arg ? v.replace('%s', arg) : v;
}
function crsPraise() {
  if(crs && crs.mode === 'immersion') {
    const arr = CRS_IMMERSION_PRAISE[crs.lang] || CRS_IMMERSION_PRAISE.es;
    return arr[Math.floor(Math.random() * arr.length)];
  }
  return CRS_PRAISE[Math.floor(Math.random() * CRS_PRAISE.length)];
}
function crsMakeImmersion(lang, u) {
  const unit = COURSES[lang].units[u], W = unit.w;
  const tts = !!CRS_META[lang].tts;
  const pool = [];
  W.forEach(w => {
    pool.push({ t: 'ft', w }); pool.push({ t: 'tf', w });
    if(crsCanBuild(w)) pool.push({ t: 'build', w });
    if(crsFillIdx(w) >= 0) pool.push({ t: 'fill', w });
    if(tts) { pool.push({ t: 'listen', w }); pool.push({ t: 'dictee', w }); }
    if(w[2]) pool.push({ t: 'freetr', w });
    if(w[2] && w[1]) pool.push({ t: 'readctx', w });
  });
  // Harder mix: prioritize writing exercises
  const writing = pool.filter(x => ['dictee','freetr','build'].includes(x.t));
  const others = pool.filter(x => !['dictee','freetr','build'].includes(x.t));
  let picks = shuffle(writing).slice(0, Math.min(8, writing.length));
  const need = 20 - picks.length;
  picks = picks.concat(shuffle(others).slice(0, need));
  // All grammar questions
  unit.g.q.forEach(g => picks.push({ t: 'gq', g }));
  picks = shuffle(picks);
  // Add match exercise
  if(W.length >= 3) picks.splice(Math.floor(picks.length / 2), 0, { t: 'match', ws: shuffle([...W]).slice(0, 6) });
  return picks;
}
let crsLastTab = 'path';
let crs = null; // leçon en cours

function crsEsc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function crsJ(k, def) { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? def : v; } catch(e) { return def; } }
function crsSetJ(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch(e) { console.warn('[Aprende] sauvegarde impossible', k, e); } }
function crsDone(lang, u) { const p = crsJ('crs_prog', {}); return (p[lang] && p[lang][u]) || 0; }
function crsSetDone(lang, u, n) { const p = crsJ('crs_prog', {}); p[lang] = p[lang] || {}; if((p[lang][u] || 0) < n) p[lang][u] = n; crsSetJ('crs_prog', p); }
function crsCurrent(lang) {
  const U = COURSES[lang].units;
  for(let u = 0; u < U.length; u++) { const d = crsDone(lang, u); if(d < CRS_NODES) return { u, n: d }; }
  return { u: U.length, n: 0 };
}
function crsStats(lang) {
  const U = COURSES[lang].units; let nodes = 0, units = 0;
  U.forEach((u, i) => { const d = crsDone(lang, i); nodes += d; if(d >= 5) units++; });
  return { nodes, total: U.length * CRS_NODES, units, totalUnits: U.length };
}

// ── Mots du parcours → deck + SRS ──
function crsDeckHas(lang, word) { const n = srsNorm(word); return getDeckForLang(lang).some(c => c && (c[lang] === word || srsNorm(c[lang]) === n)); }
function crsPushDeck(lang, w) {
  if(lang === 'es') { DATA.push({ es: w[0], fr: w[1] }); if(w[2] && !ES_EXAMPLES[w[0]]) ES_EXAMPLES[w[0]] = [w[2], w[3]]; }
  else if(lang === 'ln') LINGALA.push({ ln: w[0], fr: w[1], ex_ln: w[2] || '', ex_fr: w[3] || '' });
  else ENGLISH.push({ en: w[0], fr: w[1], lvl: 'C1', say: w[2] || '' });
}
function crsMergeAdded() {
  const a = crsJ('crs_added', {});
  ['es', 'ln', 'en'].forEach(l => (a[l] || []).forEach(w => { if(!crsDeckHas(l, w[0])) crsPushDeck(l, w); }));
}
function crsLearnWords(lang, words) {
  const a = crsJ('crs_added', {}); a[lang] = a[lang] || [];
  const data = srsLoad(); let nd = 0, ns = 0;
  words.forEach(w => {
    if(!crsDeckHas(lang, w[0])) { crsPushDeck(lang, w); a[lang].push(w.slice(0, 4)); nd++; }
    const card = srsGetCardData(lang, w[0]);
    const key = srsKey(lang, card ? card[lang] : w[0]);
    if(!data[key]) { data[key] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, st: 'new', word: w[0], fr: w[1] || '' }; ns++; }
  });
  crsSetJ('crs_added', a); srsSave(data);
  return { nd, ns };
}

// ── Utilitaires d'exercices ──
function crsSpeak(lang, text) {
  if(!CRS_META[lang].tts || !text) return;
  if(lang === 'en') return speakEN(text);
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = 'es-ES'; u.rate = .95;
    const v = speechSynthesis.getVoices().find(v => v.lang && v.lang.startsWith('es')); if(v) u.voice = v;
    speechSynthesis.speak(u);
  } catch(e) {}
}
function crsPool(lang) {
  const out = [];
  COURSES[lang].units.forEach(u => u.w.forEach(w => out.push([w[0], w[1]])));
  getDeckForLang(lang).forEach(c => { if(c) out.push([c[lang], c.fr]); });
  return out;
}
function crsDistract(lang, w, field, n, prefer) {
  const seen = new Set([srsNorm(w[field])]), res = [];
  const cands = shuffle(prefer || []).concat(shuffle(crsPool(lang)));
  for(const c of cands) {
    const v = c[field]; if(!v) continue;
    const k = srsNorm(v); if(!k || seen.has(k)) continue;
    seen.add(k); res.push(v); if(res.length >= n) break;
  }
  return res;
}
function crsTok(s) { return String(s || '').split(/\s+/).filter(Boolean); }
function crsTokN(t) { return t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[.,!?¿¡«»"“”:;…]/g, ''); }
function crsCanBuild(w) { const n = crsTok(w[2]).length; return !!w[2] && n >= 3 && n <= 11; }
function crsFillIdx(w) {
  if(!w[2] || /[\/?]/.test(w[0])) return -1;
  const esc = w[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const m = w[2].match(new RegExp('(^|[^\\p{L}])(' + esc + ')(?=$|[^\\p{L}])', 'iu'));
  return m ? m.index + m[1].length : -1;
}

// ── Construction d'une leçon ──
function crsMakeLesson(lang, u, n) {
  const unit = COURSES[lang].units[u], W = unit.w, k = Math.ceil(W.length / 3);
  const fresh = n < 3 ? W.slice(n * k, (n + 1) * k) : [];
  const words = n < 3 ? fresh : W;
  const tts = !!CRS_META[lang].tts;
  const head = [];
  if(n === 0) head.push({ t: 'tip' });
  fresh.forEach(w => { head.push({ t: 'intro', w }); head.push({ t: 'tf', w }); });
  const pool = [];
  words.forEach(w => {
    pool.push({ t: 'ft', w });
    if(crsCanBuild(w)) pool.push({ t: 'build', w });
    if(crsFillIdx(w) >= 0) pool.push({ t: 'fill', w });
    if(tts) pool.push({ t: 'listen', w });
    if(tts) pool.push({ t: 'dictee', w }); // NEW: dictée
    if(n >= 3) pool.push({ t: 'tf', w });
    if(w[2]) pool.push({ t: 'freetr', w }); // NEW: traduction libre
    if(w[2] && w[1]) pool.push({ t: 'readctx', w }); // NEW: lire et répondre
  });
  const target = n < 3 ? 8 : n === 3 ? 12 : 14;
  let picks = shuffle(pool).slice(0, target);
  const gq = n < 3 ? [unit.g.q[n % unit.g.q.length]] : unit.g.q;
  gq.forEach(g => picks.push({ t: 'gq', g }));
  picks = shuffle(picks);
  const mw = n < 3 ? W.slice(0, Math.min(W.length, (n + 1) * k)) : W;
  if(mw.length >= 3) picks.splice(Math.floor(picks.length / 2), 0, { t: 'match', ws: shuffle(mw).slice(0, 5) });
  return head.concat(picks);
}
function crsMakeTest(lang, sec) {
  const units = COURSES[lang].units.filter(u => u.s === sec);
  const words = []; units.forEach(u => u.w.forEach(w => words.push(w)));
  const tts = !!CRS_META[lang].tts, q = [];
  shuffle(words).slice(0, 13).forEach((w, i) => {
    const types = ['tf', 'ft']; if(crsFillIdx(w) >= 0) types.push('fill'); if(tts) types.push('listen'); if(crsCanBuild(w)) types.push('build');
    q.push({ t: shuffle(types)[0], w });
  });
  shuffle(units).slice(0, 3).forEach(u => q.push({ t: 'gq', g: u.g.q[0] }));
  return shuffle(q);
}

// ── Lancement ──
function crsStart(lang, u, n, mode, resume) {
  crsCloseModal();
  const unit = mode === 'test' ? null : COURSES[lang].units[u];
  if(resume) {
    crs = { lang: resume.lang, u: resume.u, n: resume.n, mode: resume.mode,
      q: resume.q, i: resume.i, graded: resume.graded, ok: resume.ok, mistakes: resume.mistakes,
      sel: null, built: [], checked: false, ko: resume.ko || false,
      replay: resume.replay, bossMax: resume.bossMax, bossHP: resume.bossHP, unit };
  } else {
    const q = mode === 'test' ? crsMakeTest(lang, u) : mode === 'immersion' ? crsMakeImmersion(lang, u) : crsMakeLesson(lang, u, n);
    const graded = q.filter(x => x.t !== 'intro' && x.t !== 'tip').length;
    crs = { lang, u, n, mode, q, i: 0, graded: 0, ok: 0, mistakes: 0, sel: null, built: [], checked: false, ko: false,
            replay: mode === 'lesson' && n < crsDone(lang, u), bossMax: graded, bossHP: graded, unit };
  }
  crsClearResume();
  const bossBar = document.getElementById('ls-boss');
  bossBar.style.display = (n === 4 && mode !== 'test' && mode !== 'immersion') ? 'flex' : 'none';
  document.getElementById('ls-boss-name').textContent = '👹 Gardien : ' + (unit ? unit.t : '');
  document.getElementById('ls-boss-fill').style.width = resume ? Math.round(100 * crs.bossHP / Math.max(1, crs.bossMax)) + '%' : '100%';
  showScreen('screen-lesson');
  dgStartSession(lang);
  crsShow();
}
function crsSaveResume() {
  if(!crs || crs.finished || crs.mode === 'test' || crs.mode === 'immersion' || crs.i === 0) return;
  try {
    const save = { lang: crs.lang, u: crs.u, n: crs.n, mode: crs.mode,
      q: crs.q, i: crs.i, graded: crs.graded, ok: crs.ok, mistakes: crs.mistakes,
      replay: crs.replay, bossMax: crs.bossMax, bossHP: crs.bossHP, ko: crs.ko,
      ts: Date.now() };
    localStorage.setItem('crs_resume', JSON.stringify(save));
  } catch(e) { console.warn('[Resume] save failed', e); }
}
function crsClearResume() { try { localStorage.removeItem('crs_resume'); } catch(e) {} }
function crsGetResume(lang, u, n) {
  try {
    const r = JSON.parse(localStorage.getItem('crs_resume'));
    if(r && r.lang === lang && r.u === u && r.n === n && (Date.now() - r.ts) < 7 * 86400000) return r;
  } catch(e) {}
  return null;
}
function crsQuit() {
  if(crs && !crs.finished && crs.i > 0) {
    crsSaveResume();
    if(!confirm('' + crsP('quit') + ' Tu pourras reprendre là où tu en étais.')) { crsClearResume(); return; }
  }
  dgEndSession();
  try { speechSynthesis.cancel(); } catch(e) {}
  const lang = crs ? crs.lang : currentLang; crs = null; openPath(lang);
}
function crsSetBtn(label, enabled) {
  const b = document.getElementById('ls-btn'); b.textContent = label; b.disabled = !enabled;
}
function crsFoot(cls, html) {
  const f = document.getElementById('ls-foot'); f.classList.remove('ok', 'ko'); if(cls) f.classList.add(cls);
  document.getElementById('ls-fb').innerHTML = html || '';
}
function crsBar() {
  document.getElementById('ls-fill').style.width = Math.round(100 * crs.i / Math.max(1, crs.q.length)) + '%';
  document.getElementById('ls-hp').textContent = rpg ? Math.ceil(rpg.hp) : 50;
  if(crs.n === 4 && crs.mode !== 'test') document.getElementById('ls-boss-fill').style.width = Math.round(100 * crs.bossHP / Math.max(1, crs.bossMax)) + '%';
}
function crsOptsHTML(opts) {
  return `<div class="opts">${opts.map((o, i) => `<button class="opt" data-i="${i}" onclick="crsPick(${i})"><span style="opacity:.45;margin-right:.5rem">${i + 1}</span>${crsEsc(o)}</button>`).join('')}</div>`;
}
function crsShow() {
  const ex = crs.q[crs.i], L = crs.lang, body = document.getElementById('ls-body');
  crs.sel = null; crs.built = []; crs.checked = false; crsFoot('', ''); crsBar();
  const spk = CRS_META[L].tts;
  let h = '';
  if(ex.t === 'tip') {
    const g = crs.unit.g;
    h = `<div class="ls-kind">${crsP('tip')}</div><div class="ls-h">${crsEsc(g.t)}</div><div class="tipbox">${crsEsc(g.tip)}</div>`;
    crsSetBtn(crsP('cont'), true);
  } else if(ex.t === 'intro') {
    const w = ex.w;
    h = `<div class="ls-kind">${crsP('newWord')}</div><div class="intro-card">
      ${spk ? `<button class="spk" style="float:right" onclick="crsSpeak('${L}', crs.q[crs.i].w[0])">🔊</button>` : ''}
      <div class="iw">${crsEsc(w[0])}</div><div class="if">${crsEsc(w[1])}</div>
      ${w[2] ? `<div class="ie">« ${crsEsc(w[2])} »${spk ? ` <button class="spk" onclick="crsSpeak('${L}', crs.q[crs.i].w[2])">🔊</button>` : ''}</div><div class="ief">${crsEsc(w[3])}</div>` : ''}
      ${w[4] ? '<div style="margin-top:.6rem"><span class="unv">exemple à valider avec la famille</span></div>' : ''}
    </div>`;
    crsSetBtn(crsP('cont'), true);
    if(spk) setTimeout(() => crsSpeak(L, w[0]), 250);
  } else if(ex.t === 'tf' || ex.t === 'ft' || ex.t === 'listen' || ex.t === 'fill') {
    const w = ex.w;
    if(!ex.opts) {
      if(ex.t === 'tf') { ex.ans = w[1]; ex.opts = shuffle([w[1], ...crsDistract(L, w, 1, 3, crs.unit ? crs.unit.w : [])]); }
      else { ex.ans = w[0]; ex.opts = shuffle([w[0], ...crsDistract(L, w, 0, 3, crs.unit ? crs.unit.w : [])]); }
    }
    if(ex.t === 'tf') h = `<div class="ls-kind">${crsP('vocab')}</div><div class="ls-h">${crsP('whatMeans')}</div><div class="ls-prompt">${spk ? `<button class="spk" onclick="crsSpeak('${L}', crs.q[crs.i].w[0])">🔊</button>` : ''}<span class="pw">${crsEsc(w[0])}</span></div>`;
    else if(ex.t === 'ft') h = `<div class="ls-kind">${crsP('translation')}</div><div class="ls-h">${crsP('howSay', crsEsc(w[1]))}</div>`;
    else if(ex.t === 'listen') h = `<div class="ls-kind">${crsP('listen')}</div><div class="ls-h">${crsP('listenChoose')}</div><button class="ls-big-spk" onclick="crsSpeak('${L}', crs.q[crs.i].w[0])">🔊</button>`;
    else {
      const i = crsFillIdx(w), blank = w[2].slice(0, i) + '_____' + w[2].slice(i + w[0].length);
      h = `<div class="ls-kind">${crsP('fillBlank')}</div><div class="ls-h">${crsEsc(blank)}</div><div style="color:var(--muted);font-weight:700;margin:-.5rem 0 1rem">${crsEsc(w[3])}</div>`;
    }
    h += crsOptsHTML(ex.opts);
    crsSetBtn(crsP('check'), false);
    if(ex.t === 'listen') setTimeout(() => crsSpeak(L, w[0]), 250);
    if(ex.t === 'tf' && spk) setTimeout(() => crsSpeak(L, w[0]), 250);
  } else if(ex.t === 'gq') {
    const g = ex.g;
    if(!ex.opts) { ex.ans = g[1][g[2]]; ex.opts = shuffle(g[1]); }
    h = `<div class="ls-kind">${crsP('grammar')}</div><div class="ls-h">${crsEsc(g[0])}</div>` + crsOptsHTML(ex.opts);
    crsSetBtn(crsP('check'), false);
  } else if(ex.t === 'build') {
    const w = ex.w;
    if(!ex.tiles) {
      const toks = crsTok(w[2]);
      const others = []; (crs.unit ? crs.unit.w : []).forEach(x => { if(x !== w) crsTok(x[2]).forEach(t => others.push(t)); });
      const have = new Set(toks.map(crsTokN));
      const extra = shuffle(others).filter(t => !have.has(crsTokN(t)) && crsTokN(t)).slice(0, 2);
      ex.tiles = shuffle(toks.concat(extra));
    }
    h = `<div class="ls-kind">${crsP('buildSentence')}</div><div class="ls-h">${crsP('translate', crsEsc(w[3]))}</div>
      <div class="build-ans" id="ls-ans"></div><div class="build-bank" id="ls-bank">${ex.tiles.map((t, i) => `<button class="tile" id="tl-${i}" onclick="crsTile(${i})">${crsEsc(t)}</button>`).join('')}</div>`;
    crsSetBtn(crsP('check'), false);
  } else if(ex.t === 'match') {
    if(!ex.left) { ex.left = shuffle(ex.ws.map((w, i) => i)); ex.right = shuffle(ex.ws.map((w, i) => i)); ex.found = 0; ex.err = 0; ex.pick = null; }
    h = `<div class="ls-kind">${crsP('matchPairs')}</div><div class="ls-h">${crsP('matchHint')}</div><div class="match">
      ${ex.left.map((wi, r) => `<button class="opt" id="ml-${wi}" onclick="crsMatch('l',${wi})">${crsEsc(ex.ws[wi][0])}</button><button class="opt" id="mr-${ex.right[r]}" onclick="crsMatch('r',${ex.right[r]})">${crsEsc(ex.ws[ex.right[r]][1])}</button>`).join('')}</div>`;
    crsSetBtn(crsP('check'), false);
  }
  // NEW exercise types: dictée, traduction libre, lire et répondre
  if(!h) {
    if(ex.t === 'dictee') {
      const w = ex.w;
      h = `<div class="ls-kind">${crsP('dictation')}</div><div class="ls-h">${crsP('dictHint')}</div>
        <button class="ls-big-spk" onclick="crsSpeak('${L}', crs.q[crs.i].w[0])">🔊</button>
        <div style="margin-top:1rem"><input type="text" class="dict-input" id="ls-dict-inp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Tape le mot…"></div>
        <div class="dict-hint">Écoute bien, puis écris le mot en ${CRS_META[L].name.toLowerCase()}</div>`;
      crsSetBtn(crsP('check'), true);
      setTimeout(() => { crsSpeak(L, w[0]); document.getElementById('ls-dict-inp')?.focus(); }, 300);
    } else if(ex.t === 'freetr') {
      const w = ex.w;
      h = `<div class="ls-kind">${crsP('freeTranslation')}</div><div class="ls-h">${crsP('freeHint', CRS_META[L].name.toLowerCase())}</div>
        <div class="ls-prompt"><span class="pw">${crsEsc(w[1])}</span></div>
        <div style="margin-top:1rem"><input type="text" class="dict-input" id="ls-freetr-inp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Ta traduction…"></div>
        <div class="dict-hint">Tape ta traduction (les petites fautes d'accent sont tolérées)</div>`;
      crsSetBtn(crsP('check'), true);
      setTimeout(() => document.getElementById('ls-freetr-inp')?.focus(), 200);
    } else if(ex.t === 'readctx') {
      const w = ex.w;
      if(!ex.opts) {
        ex.ans = w[1];
        ex.opts = shuffle([w[1], ...crsDistract(L, w, 1, 3, crs.unit ? crs.unit.w : [])]);
      }
      const sentence = w[2] || '';
      const highlighted = sentence.replace(new RegExp('(' + w[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'i'), '<u style="color:var(--accent2);font-weight:800;text-decoration:underline">$1</u>');
      h = `<div class="ls-kind">${crsP('readContext')}</div><div class="ls-h">${crsP('readQuestion')}</div>
        <div class="ls-prompt" style="font-size:1.05rem;line-height:1.6">${highlighted}</div>
        <div style="color:var(--muted);font-weight:700;margin:-.3rem 0 1rem;font-size:.85rem">${crsEsc(w[3])}</div>` + crsOptsHTML(ex.opts);
      crsSetBtn(crsP('check'), false);
    }
  }
  body.innerHTML = h;
  window.scrollTo({ top: 0 });
  // Bind Enter key for dictée / traduction libre
  const dictInp = document.getElementById('ls-dict-inp') || document.getElementById('ls-freetr-inp');
  if(dictInp) dictInp.addEventListener('keydown', e => { if(e.key === 'Enter') { e.preventDefault(); crsAction(); } });
}
function crsPick(i) {
  if(!crs || crs.checked) return;
  crs.sel = i;
  document.querySelectorAll('#ls-body .opt').forEach(b => b.classList.toggle('sel', +b.dataset.i === i));
  crsSetBtn(crsP('check'), true);
}
function crsTile(i) {
  if(!crs || crs.checked) return;
  const k = crs.built.indexOf(i);
  if(k >= 0) crs.built.splice(k, 1); else crs.built.push(i);
  const ex = crs.q[crs.i];
  ex.tiles.forEach((t, j) => document.getElementById('tl-' + j).classList.toggle('used', crs.built.includes(j)));
  document.getElementById('ls-ans').innerHTML = crs.built.map(j => `<button class="tile" onclick="crsTile(${j})">${crsEsc(ex.tiles[j])}</button>`).join('');
  crsSetBtn('Vérifier', crs.built.length > 0);
}
function crsMatch(side, wi) {
  const ex = crs.q[crs.i]; if(crs.checked) return;
  const el = document.getElementById((side === 'l' ? 'ml-' : 'mr-') + wi);
  if(!ex.pick || ex.pick.side === side) {
    document.querySelectorAll('#ls-body .opt.sel').forEach(b => b.classList.remove('sel'));
    ex.pick = { side, wi }; el.classList.add('sel'); return;
  }
  const a = document.getElementById((ex.pick.side === 'l' ? 'ml-' : 'mr-') + ex.pick.wi);
  if(ex.pick.wi === wi) {
    [a, el].forEach(b => { b.classList.remove('sel'); b.classList.add('good'); setTimeout(() => { b.classList.remove('good'); b.classList.add('gone'); }, 350); });
    if(side === 'l') crsSpeak(crs.lang, ex.ws[wi][0]);
    ex.found++;
    if(ex.found >= ex.ws.length) setTimeout(() => crsResult(ex.err === 0, '', ex.err ? `${ex.err} erreur${ex.err > 1 ? 's' : ''} pendant l'association` : ''), 400);
  } else {
    ex.err++;
    [a, el].forEach(b => { b.classList.remove('sel'); b.classList.add('bad'); setTimeout(() => b.classList.remove('bad'), 450); });
  }
  ex.pick = null;
}
function crsCheck() {
  const ex = crs.q[crs.i], L = crs.lang;
  // NEW: dictée
  if(ex.t === 'dictee') {
    const inp = document.getElementById('ls-dict-inp'); if(!inp) return;
    const val = inp.value.trim(); if(!val) return;
    const m = fuzzyMatch(val, ex.w[0]);
    if(m.exact) { inp.classList.add('ok'); crsResult(true, ex.w[0], ex.w[2] ? `« ${ex.w[2]} » — ${ex.w[3]}` : ''); }
    else if(m.almost) { inp.classList.add('ok'); crsResult(true, ex.w[0], `<span class="almost-msg">Presque ! La réponse exacte est : <b>${crsEsc(ex.w[0])}</b></span>${ex.w[2] ? `<br>« ${crsEsc(ex.w[2])} » — ${crsEsc(ex.w[3])}` : ''}`); }
    else { inp.classList.add('ko'); crsResult(false, ex.w[0], ex.w[2] ? `« ${ex.w[2]} » — ${ex.w[3]}` : ''); }
    crsSpeak(L, ex.w[0]); return;
  }
  // NEW: traduction libre
  if(ex.t === 'freetr') {
    const inp = document.getElementById('ls-freetr-inp'); if(!inp) return;
    const val = inp.value.trim(); if(!val) return;
    const m = fuzzyMatch(val, ex.w[0]);
    if(m.exact) { inp.classList.add('ok'); crsResult(true, ex.w[0], ''); }
    else if(m.almost) { inp.classList.add('ok'); crsResult(true, ex.w[0], `<span class="almost-msg">Presque ! → <b>${crsEsc(ex.w[0])}</b></span>`); }
    else { inp.classList.add('ko'); crsResult(false, ex.w[0], ex.w[2] ? `« ${ex.w[2]} » — ${ex.w[3]}` : ''); }
    crsSpeak(L, ex.w[0]); return;
  }
  // readctx uses same logic as tf/ft
  if(['tf', 'ft', 'listen', 'fill', 'gq', 'readctx'].includes(ex.t)) {
    if(crs.sel === null) return;
    const good = ex.opts[crs.sel] === ex.ans;
    document.querySelectorAll('#ls-body .opt').forEach(b => { const v = ex.opts[+b.dataset.i]; if(v === ex.ans) b.classList.add('good'); else if(+b.dataset.i === crs.sel) b.classList.add('bad'); });
    let extra = '';
    if(ex.t === 'gq') extra = ex.g[3];
    else if(ex.w && ex.w[2]) extra = `« ${ex.w[2]} » — ${ex.w[3]}`;
    crsResult(good, ex.t === 'tf' ? ex.ans : ex.ans, extra);
    if(ex.w && (ex.t === 'fill')) crsSpeak(L, ex.w[2]);
  } else if(ex.t === 'build') {
    if(!crs.built.length) return;
    const got = crs.built.map(j => crsTokN(ex.tiles[j])).filter(Boolean).join(' ');
    const want = crsTok(ex.w[2]).map(crsTokN).filter(Boolean).join(' ');
    crsResult(got === want, ex.w[2], '');
    crsSpeak(L, ex.w[2]);
  }
}
/* ── PWA Animation Functions ── */
function celebrateBurst(x, y) {
  const cols = ['#58cc02','#ffc800','#ff4b4b','#1cb0f6','#ce82ff','#ff9600'];
  for (let i = 0; i < 12; i++) {
    const d = document.createElement('div');
    d.className = 'celebrate-ring';
    const angle = (i / 12) * 360;
    const dist = 40 + Math.random() * 60;
    d.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:10px;height:10px;border-radius:50%;background:${cols[i % cols.length]};pointer-events:none;z-index:9999;animation:celebrate-burst .7s ease-out forwards;--angle:${angle}deg;--dist:${dist}px;`;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 800);
  }
}
function particleBurst(x, y, color, count) {
  const c = color || '#58cc02';
  for (let i = 0; i < (count || 6); i++) {
    const p = document.createElement('div');
    const angle = Math.random() * 360;
    const dist = 30 + Math.random() * 80;
    p.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:6px;height:6px;border-radius:50%;background:${c};pointer-events:none;z-index:9999;opacity:1;animation:particle-fly .6s ease-out forwards;--px:${Math.cos(angle * Math.PI / 180) * dist}px;--py:${Math.sin(angle * Math.PI / 180) * dist}px;`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 700);
  }
}
function showXPPop(amount, x, y) {
  const el = document.createElement('div');
  el.textContent = '+' + amount + ' XP';
  el.style.cssText = `position:fixed;left:${x}px;top:${y}px;transform:translate(-50%,-50%);font-weight:900;font-size:24px;color:#ffc800;text-shadow:0 2px 8px rgba(255,200,0,.5);pointer-events:none;z-index:9999;animation:xp-pop .9s ease-out forwards;`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}
let _combo = 0;
function comboHit() {
  _combo++;
  if (_combo >= 2) {
    const badge = document.createElement('div');
    badge.textContent = _combo + 'x Combo!';
    badge.style.cssText = `position:fixed;top:60px;left:50%;transform:translateX(-50%);padding:6px 18px;border-radius:20px;background:linear-gradient(135deg,#ffc800,#ff9600);color:#1a0610;font-weight:800;font-size:16px;z-index:9999;animation:combo-pulse .5s ease-out forwards;pointer-events:none;`;
    document.body.appendChild(badge);
    setTimeout(() => badge.remove(), 1200);
  }
}
function comboBreak() { _combo = 0; }
function showLevelUp(lvl) {
  const ov = document.createElement('div');
  ov.innerHTML = `<div style="text-align:center;animation:lvl-up-number 1.2s ease-out forwards"><div style="font-size:60px;margin-bottom:8px">⬆️</div><div style="font-size:36px;font-weight:900;color:#ffc800;text-shadow:0 0 30px rgba(255,200,0,.6)">Niveau ${lvl}!</div><div style="font-size:16px;color:#ccc;margin-top:8px">Félicitations!</div></div>`;
  ov.style.cssText = `position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(10,2,5,.85);z-index:10000;animation:lvl-up-bg 2s ease-out forwards;pointer-events:auto;cursor:pointer;`;
  ov.onclick = () => ov.remove();
  document.body.appendChild(ov);
  setTimeout(() => ov.remove(), 3000);
  if (navigator.vibrate) navigator.vibrate([50, 50, 100]);
}
function showBossDmg(dmg, el) {
  const f = document.createElement('div');
  f.textContent = '-' + dmg;
  const rect = el ? el.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 3 };
  f.style.cssText = `position:fixed;left:${rect.left}px;top:${rect.top}px;font-size:28px;font-weight:900;color:#ff4b4b;text-shadow:0 0 10px rgba(255,75,75,.6);pointer-events:none;z-index:9999;animation:boss-dmg-float 1s ease-out forwards;`;
  document.body.appendChild(f);
  if (el) el.style.animation = 'boss-hit .4s ease-out';
  setTimeout(() => { f.remove(); if (el) el.style.animation = ''; }, 1100);
}
function heartBreak() {
  const h = document.createElement('div');
  h.textContent = '💔';
  h.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:48px;pointer-events:none;z-index:9999;animation:heart-crack .6s ease-out forwards;`;
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 700);
  if (navigator.vibrate) navigator.vibrate(150);
}
function animateStreak() {
  const el = document.querySelector('.streak-count, .rpg-streak');
  if (!el) return;
  el.style.animation = 'flame-dance 1.5s ease-in-out infinite';
}
function crsResult(good, corr, extra) {
  const ex = crs.q[crs.i];
  crs.checked = true;
  if(!ex.retry) { crs.graded++; if(good) crs.ok++; }
  if(good) {
    if(crs.n === 4 && crs.mode !== 'test') crs.bossHP = Math.max(0, crs.bossHP - 1);
    if(rpg) rpgBossHit(1, true);
    try { haptic('light'); } catch(e) {}
    // Direct SFX call (bypasses MutationObserver — works on iOS Safari)
    if(typeof SFX!=='undefined'&&SFX.sfxEnabled()){crs._sfxCombo=(crs._sfxCombo||0)+1;if(crs._sfxCombo>=5&&crs._sfxCombo%5===0){SFX.playCombo();SFX.confettiBurst();}else{SFX.playCorrect();}}
    if(typeof SFX!=='undefined'&&SFX.vibeEnabled()){SFX.vibrate(40);}
    SFX&&SFX.flashScreen&&SFX.flashScreen('rgba(88, 204, 2, 0.5)');
    document.getElementById('ls-body')?.classList.add('anim-correct'); setTimeout(() => document.getElementById('ls-body')?.classList.remove('anim-correct'), 400);
    const _xpAmt = crs.n === 4 ? 3 : 2;
    showXPPop(_xpAmt, window.innerWidth / 2, window.innerHeight / 3);
    comboHit();
    if(crs.combo >= 3) particleBurst(window.innerWidth / 2, window.innerHeight / 2.5, null, 8);
    try { haptic('light'); } catch(e) {}
    crsFoot('ok', `<div class="ft">✅ ${crsPraise()}</div>${extra ? `<div class="fx">${crsEsc(extra)}</div>` : ''}`);
  } else {
    crs.mistakes++;
    // Direct SFX call (bypasses MutationObserver — works on iOS Safari)
    if(typeof SFX!=='undefined'&&SFX.sfxEnabled()){SFX.playWrong();crs._sfxCombo=0;}
    if(typeof SFX!=='undefined'&&SFX.vibeEnabled()){SFX.vibrate([80,40,80]);}
    SFX&&SFX.flashScreen&&SFX.flashScreen('rgba(255, 75, 75, 0.5)');
    document.getElementById('ls-body')?.classList.add('anim-wrong');
    document.getElementById('ls-body').style.animation = 'shake-intense .5s ease-out';
    setTimeout(() => { document.getElementById('ls-body')?.classList.remove('anim-wrong'); document.getElementById('ls-body').style.animation = ''; }, 600);
    heartBreak();
    comboBreak();
    try { haptic('error'); } catch(e) {}
    if(ex.t !== 'match') crs.q.push({ t: ex.t, w: ex.w, g: ex.g, retry: true });
    let ko = false;
    if(rpg && crs.mode !== 'test') ko = rpgDamage(crs.n === 4 ? 2 : 1, 'leçon');
    if(ko) crs.ko = true;
    crsFoot('ko', `<div class="ft">❌ ${corr ? crsP('correct') : crsP('almost')}</div>${corr ? `<div class="fx"><b>${crsEsc(corr)}</b></div>` : ''}${extra ? `<div class="fx">${crsEsc(extra)}</div>` : ''}`);
  }
  crsBar();
  crsSetBtn(crsP('cont'), true);
}
function crsAction() {
  if(!crs) return;
  if(crs.finished) { const l = crs.lang; crs = null; openPath(l); return; }
  const ex = crs.q[crs.i];
  if(ex.t === 'intro' || ex.t === 'tip' || crs.checked) {
    if(crs.ko) return crsFinish(true);
    crs.i++;
    if(crs.i >= crs.q.length) return crsFinish(false);
    return crsShow();
  }
  if(ex.t === 'dictee' || ex.t === 'freetr') { crsCheck(); return; }
  crsCheck();
}
document.addEventListener('keydown', e => {
  const scr = document.getElementById('screen-lesson');
  if(!crs || !scr || !scr.classList.contains('active')) return;
  if(e.key === 'Enter') { e.preventDefault(); const b = document.getElementById('ls-btn'); if(!b.disabled) crsAction(); }
  else if(/^[1-5]$/.test(e.key) && !crs.checked) { const ex = crs.q[crs.i]; if(ex.opts && +e.key <= ex.opts.length) crsPick(+e.key - 1); }
});

function crsAddLangXP(lang, n) {
  if(n <= 0) return;
  if(lang === 'es' && typeof state === 'object' && state && typeof state.xp !== 'undefined') { state.xp += n; try { saveState(); } catch(e) {} }
  const key = lang + '_xp';
  localStorage.setItem(key, String(parseInt(localStorage.getItem(key) || '0') + n));
}
function crsFinish(ko) {
  const { lang, u, n, mode } = crs;
  const acc = crs.graded ? Math.round(100 * crs.ok / crs.graded) : 100;
  crs.finished = true;
  crsClearResume();
  dgEndSession();
  try { speechSynthesis.cancel(); } catch(e) {}
  let title = '', xp = 0, gold = 0, notes = [];
  if(ko) {
    title = '💀 K.O. !';
    notes.push('Tes points de vie sont tombés à zéro : la leçon s\'arrête. Bois une potion à la boutique ou réessaie.');
  } else if(mode === 'test') {
    const pass = acc >= 80;
    if(pass) {
      const units = COURSES[lang].units.map((x, i) => [x, i]).filter(([x]) => x.s === u);
      const words = []; units.forEach(([x, i]) => { crsSetDone(lang, i, CRS_NODES); x.w.forEach(w => words.push(w)); });
      const r = crsLearnWords(lang, words);
      xp = 40; gold = 50; title = '⏩ Section validée !';
      notes.push(`${units.length} unités débloquées · ${r.ns} cartes ajoutées à ta révision SRS`);
      try { confetti('big'); } catch(e) {}
    } else { title = 'Pas encore…'; notes.push(`Il faut 80 % de bonnes réponses du premier coup (tu as ${acc} %). Suis le parcours, tu y arriveras !`); xp = 5; }
  } else {
    xp = (mode === 'immersion' ? 35 : n === 4 ? 30 : n === 3 ? 20 : 15) + (acc === 100 ? 5 : 0);
    gold = mode === 'immersion' ? 25 : n === 4 ? 20 : n === 3 ? 10 : 6;
    if(crs.replay) { xp = Math.round(xp / 2); gold = Math.round(gold / 2); notes.push('Entraînement : récompenses réduites de moitié.'); }
    else {
      crsSetDone(lang, u, n + 1);
      const W = COURSES[lang].units[u].w, k = Math.ceil(W.length / 3);
      const learn = n < 3 ? W.slice(n * k, (n + 1) * k) : n === 4 ? W : [];
      if(learn.length) { const r = crsLearnWords(lang, learn); if(r.ns) notes.push(`🧠 ${r.ns} carte${r.ns > 1 ? 's' : ''} ajoutée${r.ns > 1 ? 's' : ''} à ta révision SRS${r.nd ? ` (dont ${r.nd} nouveau${r.nd > 1 ? 'x' : ''} mot${r.nd > 1 ? 's' : ''} dans le deck)` : ''}`); }
      if(n === 4) { title = '🏆 Gardien vaincu !'; notes.push('Unité terminée : le coffre est débloqué.'); try { confetti('big'); } catch(e) {} }
    }
    if(!title && mode === 'immersion') title = acc >= 90 ? '🌍 Immersion brillante !' : '🌍 Examen immersion terminé !';
    if(!title) title = acc === 100 ? '🌟 Leçon parfaite !' : 'Leçon terminée !';
    if(acc === 100) crsSetJ('badge_perfect', true);
    if(rpg) {
      rpg.dayLessons++;
      if(!rpg.dayLessonsLang) rpg.dayLessonsLang = { es: 0, ln: 0, en: 0 };
      rpg.dayLessonsLang[lang] = (rpg.dayLessonsLang[lang] || 0) + 1;
    }
  }
  crsAddLangXP(lang, xp);
  if(rpg) { rpgAddGold(gold); rpgSync(); }
  // ── CRITICAL: flush to Firestore immediately so refresh doesn't lose progress ──
  if(typeof syncCriticalFlush === 'function') syncCriticalFlush();
  document.getElementById('ls-fill').style.width = '100%';
  document.getElementById('ls-boss').style.display = 'none';
  crsFoot('', '');
  document.getElementById('ls-body').innerHTML = `<div class="res"><div style="font-size:4rem">${ko ? '💀' : mode === 'test' ? '⏩' : n === 4 ? '🏆' : '🎉'}</div>
    <div class="rt">${title}</div>
    <div class="res-tiles">
      <div class="res-tile" style="border-color:#ffc800"><div class="rh" style="background:#ffc800">XP</div><div class="rv">+${xp}</div></div>
      <div class="res-tile" style="border-color:#58cc02"><div class="rh" style="background:#58cc02">Précision</div><div class="rv">${acc} %</div></div>
      <div class="res-tile" style="border-color:#f4c430"><div class="rh" style="background:#f4c430">Or</div><div class="rv">+${gold} 🪙</div></div>
    </div>
    ${notes.map(t => `<div class="tipbox" style="margin-top:.6rem;text-align:left">${crsEsc(t)}</div>`).join('')}
  </div>`;
  crsSetBtn(crsP('cont'), true);
  setTimeout(badgeCheck, 500);
}

// ── Coffre ──
function crsOpenChest(lang, u) {
  crsSetDone(lang, u, CRS_NODES);
  const gold = 15 + Math.floor(Math.random() * 26);
  const potion = Math.random() < .3;
  if(rpg) { rpgAddGold(gold); if(potion) rpgHeal(rpg.cls === 'healer' ? 25 : 15); rpgLog(`🎁 Coffre : +${gold} or${potion ? ' + potion' : ''}`); rpgSave(); }
  // ── CRITICAL: flush chest + progression immediately ──
  if(typeof syncCriticalFlush === 'function') syncCriticalFlush();
  try { confetti('big'); } catch(e) {}
  crsModal(`<div style="text-align:center"><div style="font-size:4rem">🎁</div><div class="cm-t">Coffre ouvert !</div>
    <div class="cm-s">+${gold} 🪙${potion ? '<br>🧪 Une potion de soin ! (+PV)' : ''}</div>
    <button class="gbtn" onclick="crsCloseModal();renderPath('${lang}')">Super</button></div>`);
}

// ── Modale ──
function crsModal(html) { document.getElementById('crs-modal-box').innerHTML = html; document.getElementById('crs-modal').classList.add('show'); }
function crsCloseModal() { document.getElementById('crs-modal').classList.remove('show'); }

function crsNode(lang, u, n) {
  const d = crsDone(lang, u), cur = crsCurrent(lang);
  const unit = COURSES[lang].units[u];
  const open = n < d || (u === cur.u && n === cur.n);
  if(!open) { showToast('🔒 Termine d\'abord les étapes précédentes', 'wrong-toast'); return; }
  if(n === 5) { if(n < d) showToast('Ce coffre est déjà ouvert 🎁'); else crsOpenChest(lang, u); return; }
  const done = n < d;
  const resume = crsGetResume(lang, u, n);
  const desc = n < 3 ? `${Math.ceil(unit.w.length / 3)} nouveaux mots avec exemples, QCM, écoute, phrases à construire et une question de grammaire.`
    : n === 3 ? 'Tous les mots de l\'unité mélangés + la grammaire. Idéal pour ancrer.'
    : 'Combat final : chaque bonne réponse blesse le gardien, chaque erreur te coûte 2 PV. Les mots de l\'unité rejoignent ta révision SRS.';
  const resumeInfo = resume ? `<div class="tipbox" style="margin:.6rem 0;text-align:center">📌 Tu avais commencé cette leçon (question ${resume.i + 1}/${resume.q.length}, ${resume.ok}/${resume.graded} correct${resume.ok > 1 ? 's' : ''})</div>` : '';
  const resumeBtn = resume ? `<button class="gbtn" style="background:#58cc02" onclick="crsStart('${lang}',${u},${n},'lesson',crsGetResume('${lang}',${u},${n}))">▶️ Reprendre là où j'en étais</button>` : '';
  crsModal(`<div class="cm-t">${unit.e} ${crsEsc(unit.t)}</div><div class="cm-s"><b>${CRS_NODE_NAME[n]}</b><br>${desc}</div>${resumeInfo}${resumeBtn}
    <button class="gbtn${resume ? ' ghost' : ''}" onclick="crsClearResume();crsStart('${lang}',${u},${n},'lesson')">${done ? '🔁 S\'entraîner (½ récompense)' : resume ? '🔄 Recommencer depuis le début' : n === 4 ? '⚔️ Combattre · +30 XP' : 'Commencer · +' + (n === 3 ? 20 : 15) + ' XP'}</button>
    <button class="gbtn ghost" onclick="crsGuide('${lang}',${u})">📘 Guide de l'unité</button>
    ${d >= 3 ? '<button class="gbtn" style="background:linear-gradient(135deg,#1cb0f6,#ce82ff)" onclick="crsStart(\'' + lang + '\',' + u + ',0,\'immersion\')">🌍 Examen immersion · +35 XP</button>' : ''}`);
}
function crsGuide(lang, u) {
  const unit = COURSES[lang].units[u], spk = !!CRS_META[lang].tts;
  crsModal(`<div class="cm-t">📘 ${unit.e} ${crsEsc(unit.t)}</div>
    <div class="tipbox" style="margin-bottom:.8rem"><b>${crsEsc(unit.g.t)}</b><br>${crsEsc(unit.g.tip)}</div>
    ${unit.w.map((w, i) => `<div class="gw">${spk ? `<button class="spk" onclick="crsSpeak('${lang}', COURSES['${lang}'].units[${u}].w[${i}][0])">🔊</button>` : ''}<div><div class="gw-w">${crsEsc(w[0])}${w[4] ? '<span class="unv">à valider</span>' : ''}</div><div class="gw-f">${crsEsc(w[1])}</div>${w[2] ? `<div class="gw-e">« ${crsEsc(w[2])} » — ${crsEsc(w[3])}</div>` : ''}</div></div>`).join('')}
    <button class="gbtn ghost" onclick="crsCloseModal()">Fermer</button>`);
}
function crsAskTest(lang, sec) {
  const s = COURSES[lang].sections[sec];
  crsModal(`<div class="cm-t">⏩ Test de la section ${sec + 1} · ${s[0]}</div>
    <div class="cm-s">Tu connais déjà « ${crsEsc(s[1])} » ? 16 questions sur toute la section. Avec 80 % de bonnes réponses du premier coup, toutes ses unités sont validées et leurs mots rejoignent ta révision SRS. Aucun PV perdu.</div>
    <button class="gbtn" onclick="crsStart('${lang}',${sec},0,'test')">Passer le test</button>
    <button class="gbtn ghost" onclick="crsCloseModal()">Plus tard</button>`);
}

// ── Écran Parcours ──
function openPath(lang) {
  lang = lang || currentLang || 'es';
  currentLang = lang; crsLastTab = 'path';
  try { updateSidebarLang(lang); } catch(e) {}
  showScreen('screen-path');
  renderPath(lang);
}
function renderPath(lang) {
  const C = COURSES[lang], cur = crsCurrent(lang);
  let h = '', z = 0;
  C.sections.forEach((s, si) => {
    const units = C.units.map((x, i) => [x, i]).filter(([x]) => x.s === si);
    const allDone = units.every(([x, i]) => crsDone(lang, i) >= 5);
    h += `<div class="sec-card"><div class="sk">Section ${si + 1} · ${s[0]}${allDone ? ' · ✅' : ''}</div><div class="sn">${crsEsc(s[1])}</div><div class="sd">${crsEsc(s[2])}</div>
      ${!allDone ? `<div class="sbtn"><button class="gbtn ghost" onclick="crsAskTest('${lang}',${si})">⏩ Je connais déjà : passer le test</button></div>` : ''}</div>`;
    units.forEach(([x, ui]) => {
      const d = crsDone(lang, ui), locked = ui > cur.u && d === 0;
      h += `<div class="unit-ban${locked ? ' locked' : ''}"><span class="ue">${x.e}</span><div><div class="uk">Unité ${ui + 1}</div><div class="ut">${crsEsc(x.t)}</div></div><button class="ug" onclick="crsGuide('${lang}',${ui})">📘 Guide</button></div><div class="nodes">`;
      for(let n = 0; n < CRS_NODES; n++) {
        const st = n < d ? 'done' : (ui === cur.u && n === cur.n) ? 'cur' : 'lock';
        const off = CRS_ZIG[z++ % CRS_ZIG.length];
        const bub = st === 'cur' ? `<span class="bub">${n === 5 ? 'OUVRIR' : n === 4 ? 'COMBAT !' : d === 0 && n === 0 ? 'COMMENCER' : 'C\'EST PARTI'}</span>` : '';
        const icon = st === 'done' && n < 4 ? '✓' : CRS_NODE_ICON[n];
        h += `<button class="node ${st}${n === 4 ? ' boss' : ''}" id="node-${ui}-${n}" style="left:${off}px" onclick="crsNode('${lang}',${ui},${n})" aria-label="${CRS_NODE_NAME[n]}">${icon}${bub}</button>`;
      }
      h += '</div>';
    });
  });
  if(cur.u >= C.units.length) h += `<div class="pth-end">🏆 Parcours terminé : objectif ${CRS_META[lang].target} atteint !<br>Continue avec la révision SRS et les jeux.</div>`;
  document.getElementById('pth-body').innerHTML = h;
  document.getElementById('pth-flag').textContent = CRS_META[lang].flag;
  // Daily goal widget
  const dgSlot = document.getElementById('dg-widget'); if(dgSlot) dgRenderWidget();
  crsRefreshBars();
  animateStreak();
  setTimeout(() => {
    const el = document.getElementById(`node-${cur.u}-${cur.n}`);
    if(el) { const y = el.getBoundingClientRect().top + window.scrollY - window.innerHeight / 2.4; window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' }); }
  }, 80);
}
function crsRefreshBars() {
  if(!rpg) return;
  const set = (id, v) => { const e = document.getElementById(id); if(e) e.textContent = v; };
  set('pth-streak', rpg.streak); set('pth-gold', Math.floor(rpg.gold)); set('pth-hp', Math.ceil(rpg.hp)); set('pth-lvl', rpg.lvl);
}
function crsTheme(t) {
  const b = document.body;
  ['t-hub', 't-es', 't-ln', 't-en'].forEach(c => b.classList.remove(c));
  b.classList.add('t-' + (t || 'hub'));
}
function tabGo(t) {
  const L = currentLang || 'es';
  if(t === 'path') openPath(L);
  else if(t === 'srs') openSRS(L);
  else if(t === 'games') { crsLastTab = 'games'; crsOrigSelectLang(L); }
  else if(t === 'hero') openHero();
  else if(t === 'shop') openShop();
}

// ═══════════════════════════════════════════════
// HÉROS RPG
// Formule de niveau = celle d'Habitica (open source) · 50 PV max · or, classes, quêtes
// ═══════════════════════════════════════════════
const RPG_MAXHP = 50;
const RPG_CLASSES = {
  warrior: { e: '⚔️', n: 'Guerrier', d: '+50 % de dégâts contre les boss' },
  mage:    { e: '🧙', n: 'Mage',     d: '+20 % d\'XP sur tout' },
  rogue:   { e: '🗡️', n: 'Voleur',   d: '+30 % d\'or gagné' },
  healer:  { e: '💚', n: 'Soigneur', d: '−40 % de dégâts reçus, potions plus fortes' },
};
const RPG_BOSSES = [['🐉', 'le Dragon de l\'Oubli'], ['👻', 'le Spectre du Subjonctif'], ['🦂', 'le Scorpion des Faux-Amis'], ['🐍', 'l\'Hydre des Tons'], ['🦁', 'le Lion de la Procrastination'], ['🧟', 'le Zombie des Mots Latins']];
const RPG_DAILIES = [
  { id: 'rev_es', e: '🇪🇸', n: 'Réviser 7 cartes espagnol', max: 7, lang: 'es', cat: 'rev' },
  { id: 'rev_ln', e: '🇨🇩', n: 'Réviser 7 cartes lingala', max: 7, lang: 'ln', cat: 'rev' },
  { id: 'rev_en', e: '🇬🇧', n: 'Réviser 7 cartes anglais', max: 7, lang: 'en', cat: 'rev' },
  { id: 'lesson_es', e: '🇪🇸', n: '1 leçon espagnol', max: 1, lang: 'es', cat: 'lesson' },
  { id: 'lesson_ln', e: '🇨🇩', n: '1 leçon lingala', max: 1, lang: 'ln', cat: 'lesson' },
  { id: 'lesson_en', e: '🇬🇧', n: '1 leçon anglais', max: 1, lang: 'en', cat: 'lesson' },
  { id: 'trilingue', e: '🌍', n: 'Étudier les 3 langues', max: 3, cat: 'tri' },
];
const RPG_SHOP = [
  { id: 'potion', e: '🧪', n: 'Potion de soin', d: '+15 PV (Soigneur : +25)', cost: 25 },
  { id: 'freeze', e: '🧊', n: 'Gel de série', d: 'Protège ta série un jour sans activité (2 max)', cost: 50 },
  { id: 'respec', e: '🔄', n: 'Changer de classe', d: 'Réinitialise ta classe (niveau 10+)', cost: 40 },
];
let rpg = null;
function rpgToNext(l) { if(l < 5) return 25 * l; if(l === 5) return 150; return Math.round(((l * l) * 0.25 + 10 * l + 139.75) / 10) * 10; }
function rpgDayKey(t) { const d = new Date(t || Date.now()); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function rpgLangXP() { const g = k => parseInt(localStorage.getItem(k) || '0') || 0; return { es: g('es_xp'), ln: g('ln_xp'), en: g('en_xp') }; }
function rpgSave() { if(rpg && !rpg._noSave) crsSetJ('rpg', rpg); }
function rpgLog(t) { if(!rpg) return; rpg.log.unshift(rpgDayKey() + ' · ' + t); rpg.log = rpg.log.slice(0, 40); }
function rpgInit() {
  const _prevRpg = (typeof rpg !== 'undefined' && rpg && rpg.lvl && !rpg._noSave) ? rpg : null;
  rpg = crsJ('rpg', null);
  const lx = rpgLangXP(), revlog = srsRevlogLoad();
  if(!rpg || typeof rpg !== 'object') {
    // Guard: keep existing in-memory rpg if cache returned null but we had valid data
    if(_prevRpg) {
      console.warn('[RPG] ⚠️ Cache returned null but valid rpg was in memory (lvl:', _prevRpg.lvl, '). Keeping it.');
      rpg = _prevRpg;
      rpgBossEnsure();
      rpgSync(true);
      return;
    }
    // ── Guard Firestore : si le cache SYNC contient des données mais rpg est null,
    // c'est un problème de parsing, PAS un vrai nouveau joueur → on ne crée pas de héros
    if(typeof SYNC !== 'undefined' && SYNC.cache && Object.keys(SYNC.cache).length > 5) {
      console.error('[RPG] ⚠️ rpg null/invalide malgré', Object.keys(SYNC.cache).length, 'clés en cache SYNC.');
      console.error('[RPG] Raw rpg value:', typeof SYNC.cache['rpg'], SYNC.cache['rpg'] ? String(SYNC.cache['rpg']).substring(0, 200) : SYNC.cache['rpg']);
      // Héros temporaire en mémoire — on ne sauvegarde PAS pour ne pas écraser Firestore
      const tot = lx.es + lx.ln + lx.en;
      rpg = { lvl: 1, xp: 0, hp: RPG_MAXHP, gold: 0, cls: null, streak: 0, best: 0, streakDay: null, freezes: 0,
              day: rpgDayKey(), dayXP: 0, dayLessons: 0, dayLessonsLang: { es: 0, ln: 0, en: 0 }, claimed: [], seen: lx, revSeen: revlog.length, boss: null, bossN: 0,
              rewards: [{ e: '📺', n: 'Un épisode de série', c: 30 }, { e: '🍫', n: 'Une pause gourmande', c: 20 }, { e: '🎮', n: '30 min de jeu vidéo', c: 40 }],
              log: [], trophies: [], rest: false, goldFrac: 0, deaths: 0, _noSave: true };
      console.warn('[RPG] 🛡️ Héros temporaire créé (non sauvegardé). Recharge la page pour récupérer les vraies données.');
      rpgBossEnsure();
      return; // ← on sort SANS appeler rpgSync pour ne rien écraser
    }
    const tot = lx.es + lx.ln + lx.en;
    // série de départ = jours consécutifs avec des révisions
    const days = new Set(revlog.map(r => rpgDayKey(r[1])));
    let streak = 0, last = null;
    for(let i = 0; i < 400; i++) { const k = rpgDayKey(Date.now() - i * 86400000); if(days.has(k)) { streak++; if(!last) last = k; } else if(i > 0) break; }
    rpg = { lvl: 1, xp: 0, hp: RPG_MAXHP, gold: Math.floor(tot / 40), cls: null, streak, best: streak, streakDay: last, freezes: 1,
            day: rpgDayKey(), dayXP: 0, dayLessons: 0, dayLessonsLang: { es: 0, ln: 0, en: 0 }, claimed: [], seen: lx, revSeen: revlog.length, boss: null, bossN: 0,
            rewards: [{ e: '📺', n: 'Un épisode de série', c: 30 }, { e: '🍫', n: 'Une pause gourmande', c: 20 }, { e: '🎮', n: '30 min de jeu vidéo', c: 40 }],
            log: [], trophies: [], rest: false, goldFrac: 0, deaths: 0 };
    rpgGainRaw(tot, true);
    rpgLog(`🎉 Héros créé : tes ${tot} XP déjà gagnés → niveau ${rpg.lvl}, ${rpg.gold} pièces d'or de départ`);
    rpg.isNew = true;
  }
  rpgBossEnsure();
  rpgSync(true);
}
function rpgGainRaw(n, silent) {
  rpg.xp += n; let up = 0;
  while(rpg.xp >= rpgToNext(rpg.lvl)) { rpg.xp -= rpgToNext(rpg.lvl); rpg.lvl++; up++; }
  if(up) {
    rpg.hp = RPG_MAXHP;
    if(!silent) { rpgLog(`⭐ Niveau ${rpg.lvl} atteint (PV restaurés)`); showToast(`⭐ Niveau ${rpg.lvl} ! PV restaurés`, 'correct-toast'); try { confetti('big'); } catch(e) {} }
  }
}
function rpgGainXP(n, silent) { if(rpg.cls === 'mage') n = Math.round(n * 1.2); rpg.dayXP += n; rpgGainRaw(n, silent); }
function rpgAddGold(n) { if(n <= 0) return; if(rpg.cls === 'rogue') n *= 1.3; rpg.gold = Math.round((rpg.gold + n) * 10) / 10; }
function rpgHeal(n) { rpg.hp = Math.min(RPG_MAXHP, rpg.hp + n); }
function rpgDamage(n, why) {
  if(rpg.cls === 'healer') n *= 0.6;
  rpg.hp = Math.max(0, Math.round((rpg.hp - n) * 10) / 10);
  if(rpg.hp <= 0) { rpgDie(why); rpgSave(); return true; }
  rpgSave(); return false;
}
function rpgDie(why) {
  rpg.deaths = (rpg.deaths || 0) + 1;
  rpg.lvl = Math.max(1, rpg.lvl - 1); rpg.xp = 0; rpg.gold = Math.floor(rpg.gold / 2); rpg.hp = RPG_MAXHP;
  rpgLog(`💀 K.O. (${why}) : −1 niveau, −50 % d'or`);
  setTimeout(() => crsModal(`<div style="text-align:center"><div style="font-size:4rem">💀</div><div class="cm-t">K.O. !</div>
    <div class="cm-s">Tes PV sont tombés à zéro (${crsEsc(why)}). Comme dans Habitica, tu perds un niveau et la moitié de ton or, puis tu repars avec tous tes PV.<br>Astuce : les potions de la boutique te soignent, et le mode Auberge suspend les dégâts quand tu fais une pause.</div>
    <button class="gbtn" onclick="crsCloseModal()">Je me relève</button></div>`), 300);
}
function rpgBossEnsure() {
  if(!rpg.boss) { const i = rpg.bossN % RPG_BOSSES.length, max = 300 + 100 * rpg.bossN; rpg.boss = { i, hp: max, max }; }
}
function rpgBossHit(n, noSave) {
  rpgBossEnsure();
  if(rpg.cls === 'warrior') n *= 1.5;
  rpg.boss.hp = Math.max(0, Math.round((rpg.boss.hp - n) * 10) / 10);
  if(rpg.boss.hp <= 0) {
    const b = RPG_BOSSES[rpg.boss.i], g = 60 + 20 * rpg.bossN;
    rpgAddGold(g); rpgGainRaw(100);
    rpg.trophies.push(b[0] + ' ' + b[1]);
    rpgLog(`🏆 Quête : ${b[1]} vaincu ! +${g} or, +100 XP`);
    showToast(`🏆 ${b[0]} ${b[1]} est vaincu ! +${g} 🪙`, 'correct-toast');
    try { confetti('big'); } catch(e) {}
    rpg.bossN++; rpg.boss = null; rpgBossEnsure();
  }
  if(!noSave) rpgSave();
}
function rpgDailyState() {
  const today = srsStartOfToday();
  const todayRevs = srsRevlogLoad().filter(r => r[1] >= today);
  const rev_es = todayRevs.filter(r => r[0].startsWith('es:')).length;
  const rev_ln = todayRevs.filter(r => r[0].startsWith('ln:')).length;
  const rev_en = todayRevs.filter(r => r[0].startsWith('en:')).length;
  const dl = rpg.dayLessonsLang || { es: 0, ln: 0, en: 0 };
  // Trilingue: count how many languages have activity today (rev or lesson)
  const triActive = ['es', 'ln', 'en'].filter(l =>
    todayRevs.some(r => r[0].startsWith(l + ':')) || dl[l] > 0
  ).length;
  return {
    rev_es, rev_ln, rev_en,
    lesson_es: dl.es || 0, lesson_ln: dl.ln || 0, lesson_en: dl.en || 0,
    trilingue: triActive,
    // Legacy compat
    rev: rev_es + rev_ln + rev_en, lesson: (dl.es||0) + (dl.ln||0) + (dl.en||0), xp: rpg.dayXP
  };
}
function rpgCron() {
  const today = rpgDayKey();
  if(rpg.day === today) return;
  rpg.cronMsg = '';
  // Quotidiennes manquées : comptées une seule fois même après plusieurs jours (comme Habitica)
  const missed = RPG_DAILIES.filter(d => !rpg.claimed.includes(d.id));
  if(missed.length && !rpg.rest) {
    const dmg = missed.length * 5;
    rpgLog(`🌙 ${missed.length} quotidienne${missed.length > 1 ? 's' : ''} manquée${missed.length > 1 ? 's' : ''} (${rpg.day}) : −${dmg} PV`);
    rpg.cronMsg = `Hier, ${missed.length} quotidienne${missed.length > 1 ? 's' : ''} non faite${missed.length > 1 ? 's' : ''} : −${dmg} PV`;
    rpgDamage(dmg, 'quotidiennes manquées');
  }
  // Série (avec gel)
  const y = rpgDayKey(Date.now() - 86400000);
  if(rpg.streakDay && rpg.streakDay !== y && rpg.streakDay !== today) {
    const gap = Math.max(1, Math.round((new Date(y) - new Date(rpg.streakDay)) / 86400000));
    if(rpg.rest) { rpg.streakDay = y; }
    else if(rpg.freezes >= gap && rpg.streak > 0) { rpg.freezes -= gap; rpg.streakDay = y; rpgLog(`🧊 Gel de série utilisé (${gap})`); rpg.cronMsg = (rpg.cronMsg ? rpg.cronMsg + ' · ' : '') + '🧊 Ton gel a protégé ta série'; }
    else { if(rpg.streak) rpgLog(`💔 Série perdue (${rpg.streak} j)`); rpg.streak = 0; }
  }
  rpg.day = today; rpg.dayXP = 0; rpg.dayLessons = 0; rpg.dayLessonsLang = { es: 0, ln: 0, en: 0 }; rpg.claimed = [];
}
// ── Throttle: rpgSync is heavy (srsRevlogLoad, rpgDailyState, rpgSave, crsRefreshBars).
// Called on every showScreen, so throttle to max once per 2 seconds.
let _rpgSyncLast = 0;
function rpgSyncThrottled(silent) {
  const now = Date.now();
  if (now - _rpgSyncLast < 2000) return;
  _rpgSyncLast = now;
  rpgSync(silent);
}
function rpgSync(silent) {
  if(!rpg) return;
  rpgCron();
  const lx = rpgLangXP(); let gained = 0;
  ['es', 'ln', 'en'].forEach(l => { const d = lx[l] - (rpg.seen[l] || 0); if(d > 0) gained += d; });
  rpg.seen = lx;
  if(gained > 0) {
    rpgGainXP(gained, silent);
    rpg.goldFrac = (rpg.goldFrac || 0) + gained / 10;
    const g = Math.floor(rpg.goldFrac); if(g) { rpg.goldFrac -= g; rpgAddGold(g); }
  }
  const log = srsRevlogLoad();
  if(log.length > rpg.revSeen) { const hits = log.slice(rpg.revSeen).filter(r => r[2] > 0).length; if(hits) rpgBossHit(hits, true); }
  rpg.revSeen = log.length;
  const ds = rpgDailyState();
  RPG_DAILIES.forEach(d => {
    if(ds[d.id] >= d.max && !rpg.claimed.includes(d.id)) {
      rpg.claimed.push(d.id);
      // Trilingue bonus gets extra reward
      const isTriBonus = d.id === 'trilingue';
      const goldReward = isTriBonus ? 20 : 10;
      const xpReward = isTriBonus ? 25 : 15;
      rpgAddGold(goldReward); rpgGainRaw(xpReward, silent); rpgBossHit(isTriBonus ? 10 : 5, true);
      // Track daily goal completions for badge
      const dgDone = dgGet(); if(dgDone['done_' + dgToday()]) { crsSetJ('badge_dg_count', (crsJ('badge_dg_count', 0)) + 1); }
      // Track trilingue streak for badges
      if(isTriBonus) {
        crsSetJ('tri_days_count', (crsJ('tri_days_count', 0)) + 1);
        const triLastDay = crsJ('tri_last_day', '');
        const yesterday = rpgDayKey(Date.now() - 86400000);
        const triStreak = triLastDay === yesterday ? (crsJ('tri_streak', 0)) + 1 : 1;
        crsSetJ('tri_streak', triStreak);
        crsSetJ('tri_last_day', rpgDayKey());
        crsSetJ('tri_streak_best', Math.max(crsJ('tri_streak_best', 0), triStreak));
      }
      rpgLog(`✅ Quotidienne : ${d.n} (+${goldReward} or, +${xpReward} XP)`);
      if(!silent) showToast(`✅ ${d.n} : +${goldReward} 🪙`, 'correct-toast');
    }
  });
  const today = rpgDayKey();
  const active = rpg.dayXP >= 10 || rpg.dayLessons > 0 || ds.rev > 0;
  if(active && rpg.streakDay !== today) {
    const y = rpgDayKey(Date.now() - 86400000);
    const prevStreak = rpg.streak;
    rpg.streak = rpg.streakDay === y ? rpg.streak + 1 : 1;
    rpg.streakDay = today; rpg.best = Math.max(rpg.best || 0, rpg.streak);
    if(!silent) {
      const milestones = [7, 14, 30, 50, 100, 150, 200, 365];
      const hit = milestones.find(m => rpg.streak >= m && prevStreak < m);
      if(hit) {
        streakCelebrate(rpg.streak, hit);
      } else {
        showToast(`🔥 Série : ${rpg.streak} jour${rpg.streak > 1 ? 's' : ''} !`, 'correct-toast');
      }
    }
  }
  rpgSave();
  crsRefreshBars();
}

// ── Streak celebration + danger warning ──
const STREAK_MILESTONES = {
  7:   { e: '🔥', t: 'Flamme !',         d: '7 jours sans interruption — tu prends de bonnes habitudes !', gold: 15 },
  14:  { e: '🔥🔥', t: 'Brasier !',      d: '14 jours ! Deux semaines de régularité — impressionnant.', gold: 25 },
  30:  { e: '🌋', t: 'Volcan !',          d: '30 jours ! Un mois complet de travail quotidien !', gold: 50 },
  50:  { e: '☄️', t: 'Météore !',         d: '50 jours de série — ta discipline est en feu !', gold: 75 },
  100: { e: '💯', t: 'Centurion !',       d: '100 JOURS ! Un exploit rare — tu es imparable !', gold: 150 },
  150: { e: '⭐', t: 'Étoile !',          d: '150 jours — tu fais partie de l\'élite !', gold: 200 },
  200: { e: '🏆', t: 'Légende !',         d: '200 jours de série — légende vivante !', gold: 300 },
  365: { e: '👑', t: 'Un an !',           d: '365 JOURS ! Une année entière — chapeau !', gold: 500 },
};
function _streakSpawnSparks(container, count) {
  for(let i = 0; i < count; i++) {
    const spark = document.createElement('span');
    spark.className = 'streak-spark';
    const angle = (Math.PI * 2 * i) / count;
    const dist = 50 + Math.random() * 60;
    const dx = Math.cos(angle) * dist, dy = Math.sin(angle) * dist;
    spark.style.cssText = `left:50%;top:50%;--dx:${dx}px;--dy:${dy}px;animation-delay:${Math.random()*.3}s;background:${['#ffd700','#ff6b35','#ff4444','#ffaa00'][i%4]}`;
    container.appendChild(spark);
  }
}
function streakCelebrate(streak, milestone) {
  const m = STREAK_MILESTONES[milestone] || { e: '🔥', t: `${milestone} jours !`, d: 'Bravo !', gold: milestone };
  rpgAddGold(m.gold); rpgLog(`🔥 Milestone : ${m.t} (${streak} j, +${m.gold} or)`);
  try { confetti('big'); } catch(e) {}
  setTimeout(() => {
    crsModal(`<div style="text-align:center">
      <div class="streak-modal-bg">
        <div class="streak-sparks" id="streak-sparks-box"></div>
        <div class="streak-celebrate-anim">${m.e}</div>
      </div>
      <div class="cm-t" style="font-size:1.6rem;margin-top:.3rem">${m.t}</div>
      <div class="streak-flames" style="font-size:3rem;font-weight:900;color:var(--fire);margin:.3rem 0">
        <span class="streak-counter-anim">🔥 ${streak} jours</span>
      </div>
      <div class="cm-s">${m.d}</div>
      <div style="margin-top:.5rem;font-weight:800;color:var(--gold)">+${m.gold} 🪙</div>
      <button class="gbtn" onclick="crsCloseModal()">Continue !</button>
    </div>`);
    const box = document.getElementById('streak-sparks-box');
    if(box) _streakSpawnSparks(box, 16);
  }, 200);
}

function streakDangerHTML() {
  if(!rpg || rpg.rest || rpg.streak < 1) return '';
  const today = rpgDayKey();
  if(rpg.streakDay === today) return ''; // already active today
  const now = new Date();
  const h = now.getHours();
  const urgency = h >= 20 ? 'critical' : h >= 17 ? 'warning' : 'info';
  const msgs = {
    critical: `⚠️ Ta série de <b>${rpg.streak} j</b> se brise à minuit ! Révise vite !`,
    warning:  `🔥 N'oublie pas de réviser — ta série de <b>${rpg.streak} j</b> t'attend !`,
    info:     `💡 Ta série de <b>${rpg.streak} j</b> n'est pas encore sécurisée aujourd'hui.`
  };
  const colors = { critical: '#ff4444', warning: '#ff9800', info: 'var(--accent2)' };
  const freezeNote = rpg.freezes > 0 ? ` <span style="font-size:.75rem;opacity:.7">(🧊 ${rpg.freezes} gel${rpg.freezes > 1 ? 's' : ''} en réserve)</span>` : '';
  // Per-language status
  const todayStart = srsStartOfToday();
  const todayRevs = srsRevlogLoad().filter(r => r[1] >= todayStart);
  const dl = rpg.dayLessonsLang || { es: 0, ln: 0, en: 0 };
  const langFlags = { es: '🇪🇸', ln: '🇨🇩', en: '🇬🇧' };
  const langNames = { es: 'ES', ln: 'LN', en: 'EN' };
  const langStatus = ['es', 'ln', 'en'].map(l => {
    const active = todayRevs.some(r => r[0].startsWith(l + ':')) || (dl[l] || 0) > 0;
    return `<span class="sd-lang${active ? ' done' : ''}">${langFlags[l]} ${langNames[l]}</span>`;
  }).join('');
  return `<div class="streak-danger ${urgency}" style="border-color:${colors[urgency]}">
    <span>${msgs[urgency]}${freezeNote}</span>
    <div class="sd-langs">${langStatus}</div>
  </div>`;
}

// ── Hub (choix de la langue) ──
function rpgAvatar() { return rpg && rpg.cls ? RPG_CLASSES[rpg.cls].e : '🧑🏾'; }
function rpgBars() {
  const need = rpgToNext(rpg.lvl);
  return `<div class="rlbl"><span>❤️ ${Math.ceil(rpg.hp)} / ${RPG_MAXHP} PV</span><span>${Math.floor(rpg.xp)} / ${need} XP</span></div>
    <div class="rbar hp"><i style="width:${100 * rpg.hp / RPG_MAXHP}%"></i></div>
    <div class="rbar xp"><i style="width:${100 * rpg.xp / need}%"></i></div>`;
}
function rpgDailiesHTML() {
  const ds = rpgDailyState();
  const LANG_NAMES = { es: 'Espagnol', ln: 'Lingala', en: 'Anglais' };
  let html = '';
  // Group: SRS reviews by language
  html += '<div class="dl-group"><span class="dl-group-label">🧠 Révisions SRS</span>';
  ['es', 'ln', 'en'].forEach(l => {
    const d = RPG_DAILIES.find(x => x.id === 'rev_' + l);
    const v = Math.min(d.max, Math.floor(ds[d.id])), ok = rpg.claimed.includes(d.id);
    html += `<div class="dl${ok ? ' ok' : ''}"><span class="ck">${ok ? '✓' : d.e}</span><span class="dlt">${d.n}</span><span class="dlp">${v} / ${d.max}</span></div>`;
  });
  html += '</div>';
  // Group: Lessons by language
  html += '<div class="dl-group"><span class="dl-group-label">🗺️ Leçons</span>';
  ['es', 'ln', 'en'].forEach(l => {
    const d = RPG_DAILIES.find(x => x.id === 'lesson_' + l);
    const v = Math.min(d.max, Math.floor(ds[d.id])), ok = rpg.claimed.includes(d.id);
    html += `<div class="dl${ok ? ' ok' : ''}"><span class="ck">${ok ? '✓' : d.e}</span><span class="dlt">${d.n}</span><span class="dlp">${v} / ${d.max}</span></div>`;
  });
  html += '</div>';
  // Trilingue bonus
  const tri = RPG_DAILIES.find(x => x.id === 'trilingue');
  const triV = Math.min(tri.max, ds.trilingue), triOk = rpg.claimed.includes('trilingue');
  html += `<div class="dl tri-daily${triOk ? ' ok' : ''}"><span class="ck">${triOk ? '✓' : tri.e}</span><span class="dlt">${tri.n}</span><span class="dlp">${triV} / ${tri.max}</span></div>`;
  return html;
}
function renderHub() {
  if(!rpg) return;
  const b = RPG_BOSSES[rpg.boss.i];
  document.getElementById('hub-hero').innerHTML = `<div class="hub-ava">${rpgAvatar()}<b>${rpg.lvl}</b></div><div class="hub-bars"><div class="hub-name"><span>Niveau ${rpg.lvl}${rpg.cls ? ' · ' + RPG_CLASSES[rpg.cls].n : ''}</span><small>Héros ›</small></div>${rpgBars()}</div>`;
  const streakActive = rpg.streakDay === rpgDayKey();
  document.getElementById('hub-chips').innerHTML = `<span class="chip${rpg.streak >= 7 ? ' streak-flames' : ''}">${streakActive ? '🔥' : '💤'} <span class="${streakActive ? 'streak-counter-anim' : ''}">${rpg.streak} j</span></span><span class="chip">🪙 ${Math.floor(rpg.gold)}</span><span class="chip">🧊 ${rpg.freezes}</span><span class="chip">${b[0]} ${Math.ceil(rpg.boss.hp)} PV</span>`;
  // Streak danger warning
  const dangerSlot = document.getElementById('hub-streak-danger');
  if(dangerSlot) dangerSlot.innerHTML = streakDangerHTML();
  ['es', 'ln', 'en'].forEach(l => {
    const st = crsStats(l), cur = crsCurrent(l), C = COURSES[l];
    const unit = C.units[Math.min(cur.u, C.units.length - 1)];
    const sec = C.sections[unit.s];
    const bar = document.getElementById('hc-bar-' + l); if(bar) bar.style.width = (100 * st.nodes / st.total) + '%';
    const sub = document.getElementById('hc-sub-' + l); if(sub) sub.textContent = cur.u >= C.units.length ? 'Parcours terminé 🏆' : `Section ${unit.s + 1} · ${sec[0]} · ${sec[1]}`;
    const un = document.getElementById('hc-unit-' + l); if(un) un.textContent = cur.u >= C.units.length ? `${st.totalUnits} / ${st.totalUnits} unités` : `Unité ${cur.u + 1}/${C.units.length} : ${unit.t}`;
  });
  // Render daily goal widget in hub
  const dgSlot = document.getElementById('dg-widget');
  if(dgSlot) dgRenderWidget();
  document.getElementById('hub-dailies').innerHTML = `<div class="hub-h"><span>📋 Quotidiennes</span><span style="font-size:.75rem;color:var(--muted)">+10 🪙 chacune · −5 PV par oubli</span></div>${rpgDailiesHTML()}${rpg.cronMsg ? `<div class="tipbox" style="margin-top:.5rem;font-size:.8rem">${crsEsc(rpg.cronMsg)}</div>` : ''}`;
  if(rpg.isNew) {
    rpg.isNew = false; rpgSave();
    setTimeout(() => crsModal(`<div style="text-align:center"><div style="font-size:3.5rem">🧑🏾⚔️</div><div class="cm-t">Ton héros est né !</div>
      <div class="cm-s">Tes ${rpg.seen.es + rpg.seen.ln + rpg.seen.en} XP déjà gagnés te placent directement au <b>niveau ${rpg.lvl}</b>, avec ${Math.floor(rpg.gold)} pièces d'or.<br><br>
      🗺️ Chaque langue a maintenant un <b>parcours</b> par unités jusqu'à ton objectif.<br>📋 7 <b>quotidiennes</b> par langue te rapportent de l'or ; les oublier coûte des PV.<br>🌍 Le bonus <b>trilingue</b> récompense l'étude des 3 langues chaque jour.<br>👹 Chaque bonne réponse (leçons et SRS) frappe le <b>boss de quête</b>.<br>🏪 Dépense ton or en potions, gels de série ou <b>tes propres récompenses</b>.</div>
      <button class="gbtn" onclick="crsCloseModal();${rpg.lvl >= 10 ? 'openHero()' : ''}">${rpg.lvl >= 10 ? 'Choisir ma classe' : 'C\'est parti'}</button></div>`), 400);
  }
}

// ── Écran Héros ──
function openHero() { showScreen('screen-hero'); renderHero(); }
function rpgPickClass(c) {
  if(rpg.cls && rpg.cls !== c) return;
  rpg.cls = c; rpgLog(`🎓 Classe choisie : ${RPG_CLASSES[c].n}`); rpgSave(); showToast(`${RPG_CLASSES[c].e} Tu es ${RPG_CLASSES[c].n} !`, 'correct-toast'); renderHero();
}
function rpgToggleRest() { rpg.rest = !rpg.rest; rpgLog(rpg.rest ? '🛌 Entrée à l\'auberge (dégâts suspendus)' : '🚪 Sortie de l\'auberge'); rpgSave(); renderHero(); }
function renderHero() {
  rpgSync(true);
  const b = RPG_BOSSES[rpg.boss.i];
  let cls = '';
  if(rpg.lvl >= 10 && !rpg.cls) cls = `<div class="hero-card"><div class="hub-h">🎓 Choisis ta classe</div><div class="cls-grid">${Object.entries(RPG_CLASSES).map(([k, c]) => `<button class="cls" onclick="rpgPickClass('${k}')"><b>${c.e}</b>${c.n}<div style="font-weight:700;color:var(--muted);margin-top:.2rem">${c.d}</div></button>`).join('')}</div></div>`;
  else if(rpg.lvl < 10) cls = `<div class="hero-card"><div class="hub-h">🎓 Classe</div><div class="cm-s" style="margin:0">Débloquée au niveau 10 (encore ${10 - rpg.lvl} niveau${10 - rpg.lvl > 1 ? 'x' : ''}).</div></div>`;
  const prog = ['es', 'ln', 'en'].map(l => { const s = crsStats(l); return `<div class="dl"><span class="ck">${CRS_META[l].flag}</span><span>${CRS_META[l].name} → ${CRS_META[l].target}</span><span class="dlp">${s.units} / ${s.totalUnits} unités</span></div><div class="rbar xp" style="margin-bottom:.3rem"><i style="width:${100 * s.nodes / s.total}%"></i></div>`; }).join('');
  document.getElementById('hero-body').innerHTML = `<div class="pg-title">⚔️ Ton héros</div>
    <div class="hero-card"><div class="hero-top"><div class="hero-ava">${rpgAvatar()}</div><div style="flex:1;min-width:0"><div class="hero-nm">Niveau ${rpg.lvl}</div><div class="hero-cl">${rpg.cls ? RPG_CLASSES[rpg.cls].n + ' · ' + RPG_CLASSES[rpg.cls].d : 'Aventurier'}</div></div></div>
      ${rpgBars()}
      <div class="hub-chips" style="justify-content:flex-start;margin-top:.8rem"><span class="chip">🪙 ${Math.floor(rpg.gold)}</span><span class="chip">🔥 ${rpg.streak} j (record ${rpg.best || 0})</span><span class="chip">🧊 ${rpg.freezes}</span><span class="chip">💀 ${rpg.deaths || 0}</span></div></div>
    ${cls}
    <div class="hero-card"><div class="hub-h"><span>📋 Quotidiennes</span><span style="font-size:.72rem;color:var(--muted)">remises à zéro à minuit</span></div>${rpgDailiesHTML()}</div>
    <div class="hero-card"><div class="hub-h"><span>${b[0]} Quête : ${b[1]}</span><span style="font-size:.75rem;color:var(--muted)">${Math.ceil(rpg.boss.hp)} / ${rpg.boss.max}</span></div>
      <div class="rbar boss" style="height:14px"><i style="width:${100 * rpg.boss.hp / rpg.boss.max}%"></i></div>
      <div class="cm-s" style="margin:.6rem 0 0;font-size:.78rem">Chaque bonne réponse en leçon ou carte SRS réussie = 1 dégât${rpg.cls === 'warrior' ? ' (×1,5 Guerrier)' : ''} · chaque quotidienne = 5 dégâts. Récompense : ${60 + 20 * rpg.bossN} or + 100 XP.</div></div>
    <div class="hero-card"><div class="hub-h">🗺️ Parcours</div>${prog}</div>
    <div class="hero-card"><div class="toggle-row"><span>🛌 Auberge : suspend les dégâts des quotidiennes et protège ta série (vacances, maladie)</span><button class="gbtn ${rpg.rest ? 'green' : 'ghost'}" style="width:auto;margin:0;padding:.5rem .8rem;font-size:.8rem" onclick="rpgToggleRest()">${rpg.rest ? 'Activé' : 'Activer'}</button></div></div>
    <div class="hero-card"><div class="hub-h"><span>🏅 Badges</span><span style="font-size:.72rem;color:var(--muted)">${crsJ('badges_earned',[]).length} / ${BADGES_DEF.length}</span></div>
      <button class="gbtn ghost" onclick="openBadges()" style="width:auto;padding:.5rem 1rem;font-size:.85rem;margin:0">Voir tous les badges</button></div>
    ${rpg.trophies.length ? `<div class="hero-card"><div class="hub-h">🏆 Trophées</div>${rpg.trophies.map(t => `<div class="logl">${crsEsc(t)}</div>`).join('')}</div>` : ''}
    <div class="hero-card"><div class="hub-h">📜 Journal</div>${rpg.log.slice(0, 12).map(t => `<div class="logl">${crsEsc(t)}</div>`).join('') || '<div class="logl">Rien pour l\'instant.</div>'}</div>`;
}

// ── Boutique ──
function openShop() { showScreen('screen-shop'); renderShop(); }
function rpgBuy(id) {
  const it = RPG_SHOP.find(x => x.id === id); if(!it || rpg.gold < it.cost) return;
  if(id === 'potion' && rpg.hp >= RPG_MAXHP) { showToast('❤️ Tu as déjà tous tes PV'); return; }
  if(id === 'freeze' && rpg.freezes >= 2) { showToast('🧊 Tu as déjà 2 gels'); return; }
  if(id === 'respec' && !rpg.cls) { showToast('Pas encore de classe à changer'); return; }
  rpg.gold = Math.round((rpg.gold - it.cost) * 10) / 10;
  if(id === 'potion') rpgHeal(rpg.cls === 'healer' ? 25 : 15);
  if(id === 'freeze') rpg.freezes++;
  if(id === 'respec') rpg.cls = null;
  rpgLog(`🏪 Achat : ${it.n}`); rpgSave();
  showToast(`${it.e} ${it.n} !`, 'correct-toast');
  if(id === 'respec') return openHero();
  renderShop();
}
function rpgBuyReward(i) {
  const r = rpg.rewards[i]; if(!r || rpg.gold < r.c) return;
  rpg.gold = Math.round((rpg.gold - r.c) * 10) / 10;
  rpgLog(`🎁 Récompense : ${r.n} (−${r.c} or)`); rpgSave();
  try { confetti(); } catch(e) {}
  showToast(`🎁 Profite bien : ${r.n} !`, 'correct-toast'); renderShop();
}
function rpgAddReward() {
  const n = document.getElementById('rw-n').value.trim(), c = parseInt(document.getElementById('rw-c').value);
  if(!n || !(c > 0)) { showToast('Donne un nom et un prix', 'wrong-toast'); return; }
  rpg.rewards.push({ e: '🎁', n, c }); rpgSave(); renderShop();
}
function rpgDelReward(i) { rpg.rewards.splice(i, 1); rpgSave(); renderShop(); }
function renderShop() {
  rpgSync(true);
  const g = Math.floor(rpg.gold);
  document.getElementById('shop-body').innerHTML = `<div class="pg-title">🏪 Boutique <span class="chip" style="float:right;font-size:.95rem">🪙 ${g}</span></div>
    <div class="hero-card"><div class="hub-h">⚗️ Objets</div>${RPG_SHOP.map(it => `<div class="shop-it"><span class="si">${it.e}</span><div><div class="sn">${it.n}</div><div class="sd">${it.d}</div></div><button class="buy" ${rpg.gold < it.cost ? 'disabled' : ''} onclick="rpgBuy('${it.id}')">${it.cost} 🪙</button></div>`).join('')}</div>
    <div class="hero-card"><div class="hub-h">🎁 Mes récompenses</div><div class="cm-s" style="margin:0 0 .3rem;font-size:.78rem">Comme dans Habitica : crée tes propres récompenses de la vraie vie et achète-les avec l'or gagné en apprenant.</div>
      ${rpg.rewards.map((r, i) => `<div class="shop-it"><span class="si">${r.e}</span><div><div class="sn">${crsEsc(r.n)}</div></div><button class="buy" ${rpg.gold < r.c ? 'disabled' : ''} onclick="rpgBuyReward(${i})">${r.c} 🪙</button><button class="del" onclick="rpgDelReward(${i})" title="Supprimer">✕</button></div>`).join('')}
      <div class="rw-form"><input id="rw-n" placeholder="Ex : Soirée ciné" maxlength="40"><input id="rw-c" type="number" min="1" placeholder="Prix" value="30"><button class="gbtn" style="width:auto;padding:.55rem .9rem;font-size:.85rem" onclick="rpgAddReward()">Ajouter</button></div></div>`;
}

// ── Branchement sur la navigation existante ──
const crsOrigShowScreen = showScreen;
const crsOrigSelectLang = selectLang;
const crsOrigGoHome = goHome;
const CRS_TAB_SCREENS = { 'screen-path': 'path', 'screen-srs': 'srs', 'home': 'games', 'home-ln': 'games', 'home-en': 'games', 'screen-hero': 'hero', 'screen-shop': 'shop' };
showScreen = function(id) {
  crsOrigShowScreen(id);
  const tb = document.getElementById('crs-tabbar');
  if(tb) {
    tb.classList.toggle('show', id in CRS_TAB_SCREENS);
    tb.querySelectorAll('.tb-btn').forEach(b => b.classList.toggle('on', b.dataset.tab === CRS_TAB_SCREENS[id]));
  }
  crsTheme(id === 'lang-select' ? 'hub' : currentLang);
  document.body.classList.toggle('t-sky', ['screen-path', 'screen-lesson', 'home-ln', 'screen-hero', 'screen-shop'].includes(id));
  if(rpg) rpgSyncThrottled(id === 'screen-lesson');
  if(id === 'lang-select') renderHub();
};
selectLang = function(lang) { openPath(lang); };
goHome = function() {
  crsOrigGoHome();
  if(crsLastTab !== 'games') openPath(currentLang);
};
function crsBoot() {
  ['home', 'home-ln', 'home-en'].forEach(h => { const e = document.getElementById(h); if(e) e.classList.add('with-tabbar'); });
  try { rpgInit(); } catch(e) { console.error('[Aprende] RPG init', e); }
  crsTheme('hub');
  renderHub();
  document.addEventListener('visibilitychange', () => {
    if(document.hidden) return;
    if(rpg) { rpgSync(); const ls = document.getElementById('lang-select'); if(ls && ls.classList.contains('active')) renderHub(); }
    try { updateSRSDueBadges(); } catch(e) {}
  });
}


// ═══════════════════════════════════════════════
// FEATURE 1: EXERCICES TOLÉRANTS
// ═══════════════════════════════════════════════
function fuzzyMatch(attempt, expected) {
  // Normalize: lowercase, trim, NFD strip diacritics
  const norm = s => s.toLowerCase().trim().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ');
  const a = norm(attempt), b = norm(expected);
  if(a === b) return { exact: true, almost: false };
  // Allow Levenshtein distance <= 1 for short words, <= 2 for longer
  const maxDist = b.length <= 5 ? 1 : 2;
  const dist = levenshtein(a, b);
  if(dist <= maxDist) return { exact: false, almost: true, dist };
  // Also try without accents on the expected side too
  const a2 = a.replace(/[^a-z0-9\s]/g, ''), b2 = b.replace(/[^a-z0-9\s]/g, '');
  if(a2 === b2) return { exact: false, almost: true, dist: 0 };
  const d2 = levenshtein(a2, b2);
  if(d2 <= maxDist) return { exact: false, almost: true, dist: d2 };
  return { exact: false, almost: false };
}

// ═══════════════════════════════════════════════
// FEATURE 2: STREAK FREEZE (already in RPG_SHOP — just verify)
// Already implemented in rpgBuy and rpgCron. We're good.
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
// FEATURE 3: OBJECTIFS QUOTIDIENS
// ═══════════════════════════════════════════════
const DG_OPTIONS = [5, 10, 15, 20]; // minutes per language
const DG_LANG_LABELS = { es: '🇪🇸', ln: '🇨🇩', en: '🇬🇧' };
function dgGet() { return crsJ('daily_goal', { target: 10, sessions: {}, langSessions: {} }); }
function dgSave(dg) { crsSetJ('daily_goal', dg); }
function dgToday() { return rpgDayKey(); }
function dgAddTime(sec, lang) {
  const dg = dgGet(), k = dgToday();
  dg.sessions[k] = (dg.sessions[k] || 0) + sec;
  // Per-language tracking
  if(!dg.langSessions) dg.langSessions = {};
  if(!dg.langSessions[k]) dg.langSessions[k] = {};
  const lk = lang || currentLang || 'es';
  dg.langSessions[k][lk] = (dg.langSessions[k][lk] || 0) + sec;
  // Purge old days
  const keys = Object.keys(dg.sessions).sort().slice(-7);
  const clean = {}; keys.forEach(d => clean[d] = dg.sessions[d]);
  dg.sessions = clean;
  const lkeys = Object.keys(dg.langSessions).sort().slice(-7);
  const lclean = {}; lkeys.forEach(d => lclean[d] = dg.langSessions[d]);
  dg.langSessions = lclean;
  dgSave(dg);
  dgCheckComplete(dg);
}
function dgCheckComplete(dg) {
  const k = dgToday();
  // Check per-language goals: all 3 languages must reach target
  const ls = (dg.langSessions && dg.langSessions[k]) || {};
  const allDone = ['es', 'ln', 'en'].every(l => Math.floor((ls[l] || 0) / 60) >= dg.target);
  if(allDone && !dg['done_' + k]) {
    dg['done_' + k] = true; dgSave(dg);
    showToast('🎯 Objectif quotidien atteint pour les 3 langues !', 'correct-toast');
    try { confetti('normal'); } catch(e) {}
    if(rpg) { rpgAddGold(15); rpgGainRaw(20); rpgLog('🎯 Objectif trilingue quotidien atteint'); rpgSave(); }
  } else {
    // Check individual language completion
    ['es', 'ln', 'en'].forEach(l => {
      const lMin = Math.floor((ls[l] || 0) / 60);
      if(lMin >= dg.target && !dg['done_' + k + '_' + l]) {
        dg['done_' + k + '_' + l] = true; dgSave(dg);
        const names = { es: 'espagnol', ln: 'lingala', en: 'anglais' };
        showToast(`🎯 Objectif ${names[l]} atteint !`, 'correct-toast');
        if(rpg) { rpgAddGold(3); rpgGainRaw(5); rpgSave(); }
      }
    });
  }
}
function dgSetTarget(t) {
  const dg = dgGet(); dg.target = t; dgSave(dg);
  dgRenderWidget();
}
function dgRenderWidget() {
  const el = document.getElementById('dg-widget'); if(!el) return;
  const dg = dgGet(), k = dgToday();
  const ls = (dg.langSessions && dg.langSessions[k]) || {};
  const totalDone = Math.floor((dg.sessions[k] || 0) / 60);
  const langBars = ['es', 'ln', 'en'].map(l => {
    const lMin = Math.floor((ls[l] || 0) / 60);
    const pct = Math.min(100, Math.round(100 * lMin / dg.target));
    const ok = lMin >= dg.target;
    return `<div class="dg-lang-row"><span class="dg-flag">${DG_LANG_LABELS[l]}</span><div class="dg-bar"><i style="width:${pct}%;${ok ? 'background:var(--success)' : ''}"></i></div><span class="dg-lang-val" style="${ok ? 'color:var(--success)' : ''}">${lMin}/${dg.target}</span></div>`;
  }).join('');
  const allDone = ['es', 'ln', 'en'].every(l => Math.floor((ls[l] || 0) / 60) >= dg.target);
  el.innerHTML = `<div class="dg-wrap">
    <div class="dg-row"><span>🎯 Objectif quotidien par langue</span><span style="color:${allDone ? 'var(--success)' : 'var(--accent2)'};font-weight:700">${totalDone} min total ${allDone ? '✅' : ''}</span></div>
    ${langBars}
    <div class="dg-pick">${DG_OPTIONS.map(m => `<button class="${dg.target === m ? 'on' : ''}" onclick="dgSetTarget(${m})">${m} min</button>`).join('')}</div>
  </div>`;
}
// Session timer (per-language)
let _dgTimer = null, _dgStart = 0, _dgLang = 'es';
function dgStartSession(lang) {
  if(_dgTimer) return;
  _dgLang = lang || currentLang || 'es';
  _dgStart = Date.now();
  _dgTimer = setInterval(() => {
    const elapsed = Math.floor((Date.now() - _dgStart) / 1000);
    if(elapsed >= 30) { // save every 30s
      dgAddTime(elapsed, _dgLang);
      _dgStart = Date.now();
    }
  }, 30000);
}
function dgEndSession() {
  if(!_dgTimer) return;
  clearInterval(_dgTimer); _dgTimer = null;
  const elapsed = Math.floor((Date.now() - _dgStart) / 1000);
  if(elapsed > 2) dgAddTime(elapsed, _dgLang);
  dgRenderWidget();
}

// ═══════════════════════════════════════════════
// FEATURE 4 & 5: DICTÉE + TRADUCTION LIBRE (new exercise types in lesson engine)
// ═══════════════════════════════════════════════
// Integrated into crsMakeLesson and crsShow below via patched functions

// ═══════════════════════════════════════════════
// FEATURE 6: FLASHCARD SWIPE
// ═══════════════════════════════════════════════
let fcs = null; // flashcard swipe state
function openFCSwipe(lang) {
  lang = lang || currentLang || 'es';
  const deck = getDeckForLang(lang);
  if(deck.length < 4) { showToast('Pas assez de cartes', 'wrong-toast'); return; }
  const cards = shuffle([...deck]).slice(0, Math.min(20, deck.length));
  fcs = { lang, cards, idx: 0, known: 0, unknown: 0, startX: 0, startY: 0, dx: 0 };
  showScreen('screen-fcswipe');
  dgStartSession(lang);
  fcsRender();
}
function fcSwipeQuit() { dgEndSession(); fcs = null; openPath(currentLang); }
function fcsRender() {
  if(!fcs || fcs.idx >= fcs.cards.length) return fcsFinish();
  const c = fcs.cards[fcs.idx], L = fcs.lang;
  const word = c[L] || c.es || c.ln || c.en;
  const fr = c.fr;
  const ex = L === 'es' ? (ES_EXAMPLES[word] ? ES_EXAMPLES[word][0] : '') : (c.ex_ln || c.say || '');
  document.getElementById('fcs-counter').textContent = `${fcs.idx + 1}/${fcs.cards.length}`;
  document.getElementById('fcs-body').innerHTML = `
    <div class="fc-swipe-wrap" id="fcs-wrap">
      <div class="fc-swipe-card" id="fcs-card">
        <div class="sw-word">${crsEsc(word)}</div>
        <div class="sw-trans">${crsEsc(fr)}</div>
        ${ex ? `<div class="sw-ex">« ${crsEsc(ex)} »</div>` : ''}
      </div>
    </div>
    <div class="fc-swipe-hint"><span>← Je ne sais pas</span><span>Je sais →</span></div>
    <div class="fc-swipe-btns">
      <button class="sw-no" onclick="fcsSwipe(false)">✗</button>
      <button class="sw-yes" onclick="fcsSwipe(true)">✓</button>
    </div>`;
  // Touch/drag support
  const card = document.getElementById('fcs-card');
  let sx = 0, dragging = false;
  const onStart = e => { sx = (e.touches ? e.touches[0] : e).clientX; dragging = true; card.classList.add('dragging'); };
  const onMove = e => { if(!dragging) return; const cx = (e.touches ? e.touches[0] : e).clientX; const dx = cx - sx; card.style.transform = `translateX(${dx}px) rotate(${dx * 0.05}deg)`; card.style.opacity = Math.max(0.3, 1 - Math.abs(dx) / 300); };
  const onEnd = e => { if(!dragging) return; dragging = false; card.classList.remove('dragging'); const cx = (e.changedTouches ? e.changedTouches[0] : e).clientX; const dx = cx - sx; if(Math.abs(dx) > 80) fcsSwipe(dx > 0); else { card.style.transform = ''; card.style.opacity = ''; } };
  card.addEventListener('mousedown', onStart); card.addEventListener('touchstart', onStart, {passive:true});
  document.addEventListener('mousemove', onMove); document.addEventListener('touchmove', onMove, {passive:true});
  document.addEventListener('mouseup', onEnd); document.addEventListener('touchend', onEnd, {passive:true});
}
function fcsSwipe(known) {
  if(!fcs) return;
  if(known) { fcs.known++; showToast('✅ Je sais !', 'correct-toast'); }
  else { fcs.unknown++; showToast('🔄 À revoir', 'wrong-toast'); }
  fcs.idx++;
  fcsRender();
}
function fcsFinish() {
  if(!fcs) return;
  dgEndSession();
  const total = fcs.cards.length, pct = Math.round(100 * fcs.known / total);
  const xp = fcs.known * 3;
  crsAddLangXP(fcs.lang, xp);
  if(rpg) { rpgGainXP(xp); rpgSave(); }
  document.getElementById('fcs-body').innerHTML = `<div class="res">
    <div style="font-size:4rem">🃏</div>
    <div class="rt">Session terminée !</div>
    <div class="res-tiles">
      <div class="res-tile" style="border-color:#58cc02"><div class="rh" style="background:#58cc02">Connus</div><div class="rv">${fcs.known}</div></div>
      <div class="res-tile" style="border-color:var(--error)"><div class="rh" style="background:var(--error)">À revoir</div><div class="rv">${fcs.unknown}</div></div>
      <div class="res-tile" style="border-color:#ffc800"><div class="rh" style="background:#ffc800">XP</div><div class="rv">+${xp}</div></div>
    </div>
    <button class="gbtn" onclick="fcSwipeQuit()" style="margin-top:1rem">Continuer</button>
  </div>`;
}

// ═══════════════════════════════════════════════
// FEATURE 7: LIRE ET RÉPONDRE (new exercise type in lessons)
// ═══════════════════════════════════════════════
// Added as 'readctx' exercise type — handled in crsShow/crsCheck patches below

// ═══════════════════════════════════════════════
// FEATURE 8: ANIMATIONS CSS FEEDBACK (already done via CSS above + XP float)
// ═══════════════════════════════════════════════
function showXPFloat(n) {
  const el = document.createElement('div');
  el.className = 'xp-float';
  el.textContent = '+' + n + ' XP';
  el.style.left = (window.innerWidth / 2 - 30) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1100);
}

// ═══════════════════════════════════════════════
// FEATURE 9: BADGES & MILESTONES
// ═══════════════════════════════════════════════
const BADGES_DEF = [
  { id: 'first_lesson', e: '🌱', n: 'Premier pas', d: 'Terminer ta première leçon', check: () => { for(const l of ['es','ln','en']) { for(let u=0;u<COURSES[l].units.length;u++) if(crsDone(l,u)>0) return true; } return false; } },
  { id: 'first_boss', e: '⚔️', n: 'Tueur de boss', d: 'Vaincre ton premier boss', check: () => { for(const l of ['es','ln','en']) { for(let u=0;u<COURSES[l].units.length;u++) if(crsDone(l,u)>=5) return true; } return false; } },
  { id: 'streak7', e: '🔥', n: 'Flamme', d: '7 jours de série', check: () => rpg && rpg.streak >= 7 },
  { id: 'streak30', e: '🌋', n: 'Volcan', d: '30 jours de série', check: () => rpg && rpg.streak >= 30 },
  { id: 'words50', e: '📚', n: 'Lecteur', d: 'Apprendre 50 mots (SRS)', check: () => Object.keys(srsLoad()).length >= 50 },
  { id: 'words100', e: '🎓', n: 'Érudit', d: 'Apprendre 100 mots (SRS)', check: () => Object.keys(srsLoad()).length >= 100 },
  { id: 'words200', e: '🧠', n: 'Génie', d: 'Apprendre 200 mots (SRS)', check: () => Object.keys(srsLoad()).length >= 200 },
  { id: 'lvl5', e: '⭐', n: 'Apprenti', d: 'Atteindre le niveau 5', check: () => rpg && rpg.lvl >= 5 },
  { id: 'lvl10', e: '💎', n: 'Vétéran', d: 'Atteindre le niveau 10', check: () => rpg && rpg.lvl >= 10 },
  { id: 'lvl20', e: '👑', n: 'Légende', d: 'Atteindre le niveau 20', check: () => rpg && rpg.lvl >= 20 },
  { id: 'perfect', e: '🌟', n: 'Perfectionniste', d: 'Obtenir 100 % sur une leçon', check: () => crsJ('badge_perfect', false) },
  { id: 'trilingual', e: '🌍', n: 'Trilingue', d: 'Étudier les 3 langues', check: () => ['es','ln','en'].every(l => { for(let u=0;u<COURSES[l].units.length;u++) if(crsDone(l,u)>0) return true; return false; }) },
  { id: 'gold500', e: '🪙', n: 'Riche', d: 'Accumuler 500 or', check: () => rpg && rpg.gold >= 500 },
  { id: 'boss3', e: '🐉', n: 'Chasseur', d: 'Vaincre 3 boss de quête', check: () => rpg && rpg.bossN >= 3 },
  { id: 'srs100', e: '🔁', n: 'Régulier', d: 'Faire 100 révisions SRS', check: () => srsRevlogLoad().length >= 100 },
  { id: 'daily_goal', e: '🎯', n: 'Discipliné', d: 'Atteindre l\'objectif quotidien 5 fois', check: () => (crsJ('badge_dg_count', 0)) >= 5 },
  // Badges trilingues
  { id: 'tri_day1', e: '🌍', n: 'Triglotte', d: 'Étudier les 3 langues dans la même journée', check: () => (crsJ('tri_days_count', 0)) >= 1 },
  { id: 'tri_day7', e: '🗺️', n: 'Globe-trotter', d: '7 jours trilingues', check: () => (crsJ('tri_days_count', 0)) >= 7 },
  { id: 'tri_day30', e: '🏛️', n: 'Polyglotte', d: '30 jours trilingues', check: () => (crsJ('tri_days_count', 0)) >= 30 },
  { id: 'tri_streak3', e: '🔗', n: 'Trilingue régulier', d: '3 jours trilingues d\'affilée', check: () => (crsJ('tri_streak_best', 0)) >= 3 },
  { id: 'tri_streak7', e: '⛓️', n: 'Chaîne dorée', d: '7 jours trilingues d\'affilée', check: () => (crsJ('tri_streak_best', 0)) >= 7 },
  { id: 'tri_streak14', e: '💎', n: 'Diamant trilingue', d: '14 jours trilingues d\'affilée', check: () => (crsJ('tri_streak_best', 0)) >= 14 },
  { id: 'srs_es100', e: '🇪🇸', n: 'Hispanista', d: '100 révisions en espagnol', check: () => srsRevlogLoad().filter(r => r[0].startsWith('es:')).length >= 100 },
  { id: 'srs_ln100', e: '🇨🇩', n: 'Lingaliste', d: '100 révisions en lingala', check: () => srsRevlogLoad().filter(r => r[0].startsWith('ln:')).length >= 100 },
  { id: 'srs_en100', e: '🇬🇧', n: 'Angliciste', d: '100 révisions en anglais', check: () => srsRevlogLoad().filter(r => r[0].startsWith('en:')).length >= 100 },
];
function badgeCheck() {
  const earned = crsJ('badges_earned', []);
  let newBadges = [];
  BADGES_DEF.forEach(b => {
    if(earned.includes(b.id)) return;
    try { if(b.check()) { earned.push(b.id); newBadges.push(b); } } catch(e) {}
  });
  if(newBadges.length) {
    crsSetJ('badges_earned', earned);
    newBadges.forEach(b => {
      showToast(`🏅 Badge : ${b.e} ${b.n}`, 'correct-toast');
      if(rpg) { rpgAddGold(15); rpgLog(`🏅 Badge obtenu : ${b.e} ${b.n}`); rpgSave(); }
    });
  }
}
function openBadges() {
  badgeCheck();
  showScreen('screen-badges');
  const earned = crsJ('badges_earned', []);
  document.getElementById('badges-body').innerHTML = `<div class="pg-title">🏅 Badges & Succès</div>
    <div style="font-size:.85rem;color:var(--muted);margin-bottom:1rem">${earned.length} / ${BADGES_DEF.length} débloqués</div>
    <div class="badge-grid">${BADGES_DEF.map(b => {
      const ok = earned.includes(b.id);
      return `<div class="badge-item${ok?' earned':''}"><span class="be">${b.e}</span><b>${b.n}</b><span>${b.d}</span></div>`;
    }).join('')}</div>`;
}

// ═══════════════════════════════════════════════
// FEATURE 10: STORIES INTERACTIVES
// ═══════════════════════════════════════════════
const STORIES = {
  es: [
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
  ,
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
  story = { lang, id, data: s, step: 0, correct: 0, total: s.steps.filter(x => x.type === 'q').length };
  showScreen('screen-story-play');
  document.getElementById('story-play-title').textContent = s.title;
  document.getElementById('story-play-body').innerHTML = '';
  dgStartSession(lang);
  storyShowStep();
}
function storyShowStep() {
  if(!story || story.step >= story.data.steps.length) return storyEnd();
  const s = story.data.steps[story.step], body = document.getElementById('story-play-body');
  const btn = document.getElementById('story-next-btn');
  if(s.type === 'line') {
    const ch = story.data.chars[s.who];
    const isRight = s.who === Object.keys(story.data.chars)[1] || Object.keys(story.data.chars).length === 1;
    body.innerHTML += `<div class="story-bubble${isRight ? '' : ' right'}">
      <div class="story-ava">${ch[0]}</div>
      <div class="story-msg"><b>${ch[1]}</b><br>${crsEsc(s.text)}<br><small style="color:var(--muted)">${crsEsc(s.tr)}</small></div>
    </div>`;
    if(CRS_META[story.lang].tts) crsSpeak(story.lang, s.text);
    btn.textContent = 'Continuer';
    btn.disabled = false;
    btn.style.display = '';
    body.scrollTop = body.scrollHeight;
  } else if(s.type === 'q') {
    body.innerHTML += `<div class="story-q" id="sq-${story.step}">
      <div class="sq-prompt">${crsEsc(s.prompt)}</div>
      <div class="opts">${s.opts.map((o, i) => `<button class="opt" onclick="storyAnswer(${story.step},${i})">${crsEsc(o)}</button>`).join('')}</div>
    </div>`;
    btn.style.display = 'none';
    body.scrollTop = body.scrollHeight;
  }
}
function storyAnswer(step, idx) {
  const s = story.data.steps[step], q = document.getElementById('sq-' + step);
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
  document.getElementById('story-play-body').innerHTML += `<div class="res" style="margin-top:1rem">
    <div style="font-size:3rem">📖</div><div class="rt">Story terminée !</div>
    <div class="res-tiles">
      <div class="res-tile" style="border-color:#58cc02"><div class="rh" style="background:#58cc02">Score</div><div class="rv">${story.correct}/${story.total}</div></div>
      <div class="res-tile" style="border-color:#ffc800"><div class="rh" style="background:#ffc800">XP</div><div class="rv">+${xp}</div></div>
    </div>
  </div>`;
  document.getElementById('story-next-btn').textContent = 'Retour aux stories';
  document.getElementById('story-next-btn').onclick = () => openStories(story.lang);
  document.getElementById('story-next-btn').style.display = '';
  badgeCheck();
}
function storyQuit() { dgEndSession(); story = null; openStories(currentLang); }

crsMergeAdded(); // mots appris dans le parcours → decks (avant les migrations SRS)

// ═══════════════════════════════════════════════
// ENTRAÎNEUR CONJUGAISON (mode progressif Duolingo-style)
// ═══════════════════════════════════════════════

const CT_TENSES = [
  { key: 'presente',    e: '🟢', n: 'Présent',      d: 'La base de tout', color: '#00f5d4' },
  { key: 'preterito',   e: '🔴', n: 'Prétérit',     d: 'Actions terminées', color: '#ff4d6d' },
  { key: 'imperfecto',  e: '🟡', n: 'Imparfait',    d: 'Descriptions, habitudes', color: '#ffd60a' },
  { key: 'futuro',      e: '🔵', n: 'Futur simple', d: 'Projets, prédictions', color: '#4cc9f0' },
  { key: 'condicional', e: '🟣', n: 'Conditionnel', d: 'Hypothèses, politesse', color: '#c77dff' },
  { key: 'subjuntivo',  e: '🟠', n: 'Subjonctif',   d: 'Souhaits, doutes, émotions', color: '#fb923c' },
];
const CT_DIFFS = ['Facile','Normal','Difficile'];
let ct = null; // state

function ctStarsKey() { return 'ct_stars'; }
function ctGetStars() { try { return JSON.parse(localStorage.getItem(ctStarsKey()) || '{}'); } catch(e) { return {}; } }
function ctSetStars(tense, stars) { const s = ctGetStars(); s[tense] = Math.max(s[tense]||0, stars); localStorage.setItem(ctStarsKey(), JSON.stringify(s)); }
function ctStarStr(n) { return '⭐'.repeat(n) + '☆'.repeat(3-n); }

function initCT() {
  showScreen('screen-conjtrainer');
  ct = { phase: 'setup' };
  const stars = ctGetStars();
  const body = document.getElementById('ct-body');
  // count unlocked: first tense always unlocked, others need 1 star on previous
  let html = '<div class="ct-setup"><h2>🏋️ Entraîneur Conjugaison</h2><p class="ct-sub">Choisis un temps à entraîner</p>';
  html += '<div class="ct-tense-grid">';
  CT_TENSES.forEach((t,i) => {
    const s = stars[t.key] || 0;
    const unlocked = i === 0 || (stars[CT_TENSES[i-1].key] || 0) >= 1;
    html += `<div class="ct-tense-card${unlocked?'':' locked'}" data-tense="${t.key}" ${unlocked?`onclick="ctPickTense('${t.key}')"`:''}style="opacity:${unlocked?1:.45};${unlocked?'':'cursor:default;'}border-color:${s>0?t.color:'var(--border)'}">`;
    html += `<div class="ct-tc-e">${unlocked?t.e:'🔒'}</div>`;
    html += `<div class="ct-tc-n">${t.n}</div>`;
    html += `<div class="ct-tc-d">${unlocked?t.d:'Obtiens ⭐ au temps précédent'}</div>`;
    html += `<div class="ct-tc-stars">${unlocked?ctStarStr(s):''}</div></div>`;
  });
  html += '</div>';
  html += '<div class="ct-diff-row">';
  CT_DIFFS.forEach((d,i) => html += `<button class="ct-diff-btn${i===1?' on':''}" onclick="ctSetDiff(${i},this)">${d}</button>`);
  html += '</div></div>';
  body.innerHTML = html;
  ct.diff = 1;
  // hide foot
  document.getElementById('ct-foot').style.display = 'none';
  document.getElementById('ct-fill').style.width = '0%';
  document.getElementById('ct-top').style.display = 'none';
}

function ctSetDiff(d, el) {
  ct.diff = d;
  document.querySelectorAll('.ct-diff-btn').forEach(b => b.classList.remove('on'));
  el.classList.add('on');
}

function ctPickTense(tense) {
  ct.tense = tense;
  ct.tenseInfo = CT_TENSES.find(t => t.key === tense);
  // Build exercises
  const verbs = shuffle([...ALL_CONJ_VERBS]);
  const total = ct.diff === 0 ? 8 : ct.diff === 1 ? 12 : 16;
  const exercises = [];
  for (let i = 0; i < total && i < verbs.length; i++) {
    const verb = verbs[i];
    const forms = CONJ_DB[verb][tense];
    if (!forms) continue;
    const type = ctPickType(i, total);
    exercises.push({ verb, tense, forms, type, pIdx: Math.floor(Math.random()*6) });
  }
  ct.exercises = exercises;
  ct.idx = 0;
  ct.correct = 0;
  ct.errors = 0;
  ct.streak = 0;
  ct.maxStreak = 0;
  ct.phase = 'play';
  ct.answered = false;
  document.getElementById('ct-top').style.display = '';
  document.getElementById('ct-foot').style.display = '';
  ctRender();
}

function ctPickType(i, total) {
  // Mix exercise types: qcm, fill, identify, table
  // Easier at start, harder later
  const r = Math.random();
  const progress = i / total;
  if (progress < 0.3) return r < 0.6 ? 'qcm' : 'fill';
  if (progress < 0.6) return r < 0.3 ? 'qcm' : r < 0.6 ? 'fill' : 'identify';
  return r < 0.25 ? 'qcm' : r < 0.5 ? 'fill' : r < 0.75 ? 'identify' : 'table';
}

function ctRender() {
  if (ct.idx >= ct.exercises.length) { ctFinish(); return; }
  const ex = ct.exercises[ct.idx];
  ct.answered = false;
  document.getElementById('ct-foot').className = 'ls-foot';
  document.getElementById('ct-fb').innerHTML = '';
  document.getElementById('ct-btn').textContent = 'Vérifier';
  document.getElementById('ct-fill').style.width = (ct.idx / ct.exercises.length * 100) + '%';
  document.getElementById('ct-streak-n').textContent = ct.streak;
  const body = document.getElementById('ct-body');

  if (ex.type === 'qcm') ctRenderQCM(body, ex);
  else if (ex.type === 'fill') ctRenderFill(body, ex);
  else if (ex.type === 'identify') ctRenderIdentify(body, ex);
  else if (ex.type === 'table') ctRenderTable(body, ex);
}

function ctRenderQCM(body, ex) {
  const pron = PRONOUNS[ex.pIdx];
  const correct = ex.forms[ex.pIdx];
  // Build distractors
  const distractors = new Set();
  // Same verb other positions
  ex.forms.forEach((f,j) => { if(j !== ex.pIdx) distractors.add(f); });
  // Other verbs same tense same position
  ALL_CONJ_VERBS.forEach(v => {
    if(v !== ex.verb && CONJ_DB[v][ex.tense]) distractors.add(CONJ_DB[v][ex.tense][ex.pIdx]);
  });
  distractors.delete(correct);
  const dArr = shuffle([...distractors]).slice(0,3);
  const opts = shuffle([correct, ...dArr]);
  ct.correctAnswer = correct;

  let html = `<div class="ct-verb-card"><div class="ct-verb">${ex.verb}</div>`;
  html += `<div class="ct-verbfr">${getVerbFR(ex.verb)}</div>`;
  html += `<div class="ct-tense-tag" style="background:${ct.tenseInfo.color}">${ct.tenseInfo.n}</div></div>`;
  html += `<div class="ls-h">Conjugue <span class="ct-pronoun-tag">${pron}</span></div>`;
  html += '<div class="opts">';
  opts.forEach(o => {
    html += `<button class="opt" onclick="ctSelectOpt(this,'${o.replace(/'/g,"\\'")}')"><span style="font-weight:700;margin-right:.5rem">○</span> ${o}</button>`;
  });
  html += '</div>';
  body.innerHTML = html;
  ct.selected = null;
}

function ctSelectOpt(el, val) {
  if (ct.answered) return;
  document.querySelectorAll('#ct-body .opt').forEach(b => { b.classList.remove('sel'); b.style.borderColor = ''; });
  el.classList.add('sel');
  el.style.borderColor = 'var(--accent)';
  ct.selected = val;
}

function ctRenderFill(body, ex) {
  const pron = PRONOUNS[ex.pIdx];
  const correct = ex.forms[ex.pIdx];
  ct.correctAnswer = correct;

  // Build a sentence context
  const ctx = ctSentenceContext(ex.verb, pron, ex.pIdx);

  let html = `<div class="ct-verb-card"><div class="ct-verb">${ex.verb}</div>`;
  html += `<div class="ct-verbfr">${getVerbFR(ex.verb)}</div>`;
  html += `<div class="ct-tense-tag" style="background:${ct.tenseInfo.color}">${ct.tenseInfo.n}</div></div>`;
  html += `<div class="ls-h">${ctx ? ctx.replace('___', '<span style="border-bottom:3px solid var(--accent);padding:0 .3rem">____</span>') : `Conjugue pour <span class="ct-pronoun-tag">${pron}</span>`}</div>`;
  html += `<input type="text" class="ct-conj-input" id="ct-input" placeholder="${pron} …" autocomplete="off" spellcheck="false" autofocus>`;
  // Hint
  const hint = correct.substring(0, Math.max(2, Math.ceil(correct.length * 0.4)));
  if (ct.diff < 2) html += `<div class="ct-hint">💡 Commence par : <b>${hint}…</b></div>`;
  body.innerHTML = html;
  const inp = document.getElementById('ct-input');
  setTimeout(() => inp && inp.focus(), 100);
  inp.addEventListener('keydown', e => { if(e.key === 'Enter') ctAction(); });
}

function ctSentenceContext(verb, pron, pIdx) {
  const templates = {
    0: ['{pron} ___ todos los días', '{pron} ___ mucho', '{pron} siempre ___'],
    1: ['{pron} ___ bien', '{pron} ___ rápido', '{pron} ___ con los amigos'],
    2: ['{pron} ___ en casa', '{pron} ___ esta mañana', '{pron} ___ todo'],
    3: ['{pron} ___ juntos', '{pron} ___ en el parque'],
    4: ['{pron} ___ cada semana', '{pron} ___ después del trabajo'],
    5: ['{pron} ___ mucho', '{pron} ___ en la ciudad'],
  };
  const arr = templates[pIdx] || templates[0];
  const t = arr[Math.floor(Math.random() * arr.length)];
  return t.replace('{pron}', pron);
}

function ctRenderIdentify(body, ex) {
  // Show a conjugated form, user must identify the tense
  const correct = ex.forms[ex.pIdx];
  const pron = PRONOUNS[ex.pIdx];
  // Pick 3 other tenses as distractors
  const otherTenses = CT_TENSES.filter(t => t.key !== ex.tense && CONJ_DB[ex.verb][t.key]);
  const distTenses = shuffle(otherTenses).slice(0,3);
  const opts = shuffle([ct.tenseInfo, ...distTenses]);
  ct.correctAnswer = ct.tenseInfo.n;

  let html = `<div class="ct-verb-card"><div class="ct-verb">${ex.verb}</div>`;
  html += `<div class="ct-verbfr">${getVerbFR(ex.verb)}</div></div>`;
  html += `<div class="ls-h">« <span style="color:var(--accent)">${pron} ${correct}</span> »<br><span style="font-size:.85rem;color:var(--muted)">Quel temps est-ce ?</span></div>`;
  html += '<div class="opts">';
  opts.forEach(t => {
    html += `<button class="opt" onclick="ctSelectOpt(this,'${t.n}')" style="text-align:center"><span style="margin-right:.4rem">${t.e}</span> ${t.n}</button>`;
  });
  html += '</div>';
  body.innerHTML = html;
  ct.selected = null;
}

function ctRenderTable(body, ex) {
  // Fill the complete table for one verb+tense
  ct.correctAnswer = '__table__';
  let html = `<div class="ct-verb-card"><div class="ct-verb">${ex.verb}</div>`;
  html += `<div class="ct-verbfr">${getVerbFR(ex.verb)}</div>`;
  html += `<div class="ct-tense-tag" style="background:${ct.tenseInfo.color}">${ct.tenseInfo.n}</div></div>`;
  html += `<div class="ls-h" style="font-size:1rem">Complète les 6 formes</div>`;
  html += '<table class="ct-table">';
  // Reveal some based on difficulty
  const reveal = ct.diff === 0 ? 3 : ct.diff === 1 ? 2 : 0;
  const revealIdx = [];
  while(revealIdx.length < reveal) { const r = Math.floor(Math.random()*6); if(!revealIdx.includes(r)) revealIdx.push(r); }
  PRONOUNS.forEach((p, i) => {
    if (revealIdx.includes(i)) {
      html += `<tr><td>${p}</td><td><input class="ct-tbl-in" value="${ex.forms[i]}" readonly style="opacity:.7;border-style:dashed" data-idx="${i}"></td></tr>`;
    } else {
      html += `<tr><td>${p}</td><td><input class="ct-tbl-in" placeholder="…" data-idx="${i}" autocomplete="off" spellcheck="false"></td></tr>`;
    }
  });
  html += '</table>';
  body.innerHTML = html;
  // Focus first empty input
  const first = body.querySelector('.ct-tbl-in:not([readonly])');
  if(first) setTimeout(() => first.focus(), 100);
  // Enter key moves to next input
  body.querySelectorAll('.ct-tbl-in').forEach(inp => {
    inp.addEventListener('keydown', e => {
      if(e.key === 'Enter') {
        e.preventDefault();
        const all = [...body.querySelectorAll('.ct-tbl-in:not([readonly])')];
        const ci = all.indexOf(inp);
        if(ci < all.length-1) all[ci+1].focus();
        else ctAction();
      }
    });
  });
}

function ctAction() {
  if (ct.phase !== 'play') return;
  if (ct.answered) { ct.idx++; ctRender(); return; }

  const ex = ct.exercises[ct.idx];
  let isCorrect = false;
  let correctDisplay = ct.correctAnswer;
  const foot = document.getElementById('ct-foot');
  const fb = document.getElementById('ct-fb');
  const btn = document.getElementById('ct-btn');

  if (ex.type === 'qcm' || ex.type === 'identify') {
    if (!ct.selected) return;
    isCorrect = ct.selected === ct.correctAnswer;
    correctDisplay = ct.correctAnswer;
    // Highlight correct/wrong
    document.querySelectorAll('#ct-body .opt').forEach(b => {
      const val = b.textContent.trim().replace(/^○\s*/, '');
      if (val === ct.correctAnswer) { b.style.borderColor = '#58cc02'; b.style.background = 'rgba(88,204,2,.12)'; }
      else if (b.classList.contains('sel') && !isCorrect) { b.style.borderColor = '#ff4b4b'; b.style.background = 'rgba(255,75,75,.12)'; }
    });
  } else if (ex.type === 'fill') {
    const inp = document.getElementById('ct-input');
    const ans = (inp.value || '').trim().toLowerCase();
    isCorrect = ans === ct.correctAnswer.toLowerCase();
    correctDisplay = ct.correctAnswer;
    inp.classList.add(isCorrect ? 'ok' : 'ko');
    inp.readOnly = true;
  } else if (ex.type === 'table') {
    const inputs = document.querySelectorAll('.ct-tbl-in:not([readonly])');
    let allOk = true;
    inputs.forEach(inp => {
      const idx = parseInt(inp.dataset.idx);
      const ans = (inp.value || '').trim().toLowerCase();
      const ok = ans === ex.forms[idx].toLowerCase();
      inp.classList.add(ok ? 'ok' : 'ko');
      if(!ok) { allOk = false; inp.value = inp.value + ' → ' + ex.forms[idx]; }
      inp.readOnly = true;
    });
    isCorrect = allOk;
    correctDisplay = PRONOUNS.map((p,i) => `${p}: ${ex.forms[i]}`).join(' · ');
  }

  ct.answered = true;
  if (isCorrect) {
    ct.correct++;
    ct.streak++;
    if(ct.streak > ct.maxStreak) ct.maxStreak = ct.streak;
    foot.className = 'ls-foot ok';
    fb.innerHTML = `<div class="ft">✅ Correct !</div>${ct.streak > 2 ? `<div class="fx">🔥 Série de ${ct.streak}</div>` : ''}`;
  } else {
    ct.errors++;
    ct.streak = 0;
    foot.className = 'ls-foot ko';
    fb.innerHTML = `<div class="ft">❌ Raté</div><div class="fx">Réponse : <b>${ex.type === 'table' ? 'Voir ci-dessus' : correctDisplay}</b></div>`;
    // Replay wrong exercise at end
    ct.exercises.push({ ...ex, pIdx: Math.floor(Math.random()*6) });
  }
  btn.textContent = 'Continuer';
}

function ctFinish() {
  const total = ct.correct + ct.errors;
  const pct = Math.round(ct.correct / total * 100);
  const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
  ctSetStars(ct.tense, stars);
  // XP + gold via RPG
  const xpGain = ct.correct * 8 + ct.maxStreak * 5;
  const goldGain = Math.floor(ct.correct * 2);
  if(typeof addXP === 'function') addXP('es', xpGain);
  if(typeof rpg !== 'undefined' && rpg) { rpgAddGold(goldGain); rpgLog(`Conjugaison ${ct.tenseInfo.n} : ${pct}% (${ctStarStr(stars)})`); rpgSave(); }

  document.getElementById('ct-top').style.display = 'none';
  document.getElementById('ct-foot').style.display = 'none';
  const body = document.getElementById('ct-body');
  let html = '<div class="res">';
  html += `<div style="font-size:3rem">${stars >= 2 ? '🎉' : stars >= 1 ? '👏' : '💪'}</div>`;
  html += `<div class="rt">${ct.tenseInfo.n}</div>`;
  html += `<div style="font-size:2rem;margin-bottom:.5rem">${ctStarStr(stars)}</div>`;
  html += '<div class="res-tiles">';
  html += `<div class="res-tile" style="border-color:#58cc02"><div class="rh" style="background:#58cc02">Correct</div><div class="rv">${ct.correct}</div></div>`;
  html += `<div class="res-tile" style="border-color:#ff4b4b"><div class="rh" style="background:#ff4b4b">Erreurs</div><div class="rv">${ct.errors}</div></div>`;
  html += `<div class="res-tile" style="border-color:#ffc800"><div class="rh" style="background:#ffc800">Série max</div><div class="rv">🔥 ${ct.maxStreak}</div></div>`;
  html += '</div>';
  html += `<div style="color:var(--muted);font-size:.85rem;margin-bottom:1.2rem">+${xpGain} XP · +${goldGain} 🪙</div>`;
  html += `<button class="gbtn" onclick="initCT()" style="margin-bottom:.8rem">🔄 Rejouer</button>`;
  html += `<button class="gbtn" onclick="goHome()" style="background:var(--surface);box-shadow:0 5px 0 var(--border)">🏠 Retour</button>`;
  html += '</div>';
  body.innerHTML = html;
}

function ctQuit() {
  if(ct && ct.phase === 'play' && ct.idx > 0) {
    if(!confirm('Quitter l\'entraînement ?')) return;
  }
  goHome();
}

// ═══════════════════════════════════════════════
// INIT — called by sync.js after Firebase auth + data load
// ═══════════════════════════════════════════════
function initApp() {
  console.log('[Aprende] initApp() — booting with Firestore data');

  // Hydrate from embedded backup ONLY if Firestore has no SRS data
  const existingSrs = localStorage.getItem('srs_data');
  if (!existingSrs || existingSrs === '{}' || existingSrs === 'undefined') {
    console.log('[Aprende] No SRS data in Firestore — hydrating from embedded backup');
    hydrateFromBackup();
  } else {
    console.log('[Aprende] SRS data found in Firestore, skipping embedded backup');
  }

  // Re-read state from cache (populated by sync.js)
  state.xp = parseInt(localStorage.getItem('xp')||'0');
  state.streak = parseInt(localStorage.getItem('streak')||'0');
  state.mastered = JSON.parse(localStorage.getItem('mastered')||'[]');

  updateHomeStats();
  renderJournal('es');
  crsMergeAdded(); // Re-merge course words into decks (cache is now populated by sync.js)
  try { srsMigrateAllToFsrs(); } catch(e) { console.error('[Aprende] srsMigrateAllToFsrs error:', e); }
  try { srsMigrateKeys(); } catch(e) { console.error('[Aprende] srsMigrateKeys error:', e); }
  try { srsAutoEnqueueNew(); } catch(e) { console.error('[Aprende] srsAutoEnqueueNew error:', e); }
  try { updateSRSDueBadges(); } catch(e) { console.error('[Aprende] updateSRSDueBadges error:', e); }

  // RPG init
  rpgInit();

  // Desktop mode preference
  (function applyDesktopPref() {
    let pref = localStorage.getItem('desktop_mode');
    if(pref === null) {
      pref = window.innerWidth >= 1024 ? '1' : '0';
      localStorage.setItem('desktop_mode', pref);
    }
    if(pref === '1') {
      document.body.classList.add('desktop-mode');
      const icon = document.getElementById('desktop-toggle-icon');
      const label = document.getElementById('desktop-toggle-label');
      if(icon) icon.textContent = '📱';
      if(label) label.textContent = 'Mobile';
    }
  })();

  // Notifications boot
  (function bootNotif() {
    const s = notifGet();
    updateNotifDot();
    if(s.enabled && Notification.permission === 'granted') {
      scheduleReminder(s);
    }
  })();

  console.log('[Aprende] App ready ✓');
}

// Compute actual deck sizes dynamically for lang-select (runs immediately — no data dependency)
(function updateLangCounts() {
  const esEl = document.getElementById('lang-count-es');
  const lnEl = document.getElementById('lang-count-ln');
  const enEl = document.getElementById('lang-count-en');
  if(esEl) esEl.textContent = `${DATA.length} mots dans le deck`;
  const esSub = document.getElementById('home-sub-es');
  if(esSub) esSub.textContent = `${DATA.length} mots · Espagnol → Français`;
  if(lnEl) lnEl.textContent = `${LINGALA.length} mots dans le deck`;
  if(enEl) enEl.textContent = `${ENGLISH.length} mots dans le deck`;
  const enSub = document.getElementById('en-home-sub');
  if(enSub) enSub.textContent = `🇬🇧 ${ENGLISH.length} mots · B2 → C1 · Oral US`;
})();

// Desktop mode toggle (persisted)
function toggleDesktopMode() {
  const isOn = document.body.classList.toggle('desktop-mode');
  localStorage.setItem('desktop_mode', isOn ? '1' : '0');
  const icon = document.getElementById('desktop-toggle-icon');
  const label = document.getElementById('desktop-toggle-label');
  if(isOn) {
    icon.textContent = '📱';
    label.textContent = 'Mobile';
    showToast('🖥️ Mode desktop activé', 'correct-toast');
  } else {
    icon.textContent = '🖥️';
    label.textContent = 'Desktop';
    showToast('📱 Mode mobile', 'correct-toast');
  }
  haptic('light');
}
// Apply saved preference on load — now handled inside initApp()

// Enter key for shuffle frappe
document.getElementById('shuf-fr-input')?.addEventListener('keydown', e => { if(e.key === 'Enter') checkShufFrappe(); });
// Refresh SRS badges when the tab becomes visible again (user comes back after a day)
// visibilitychange → updateSRSDueBadges merged into crsBoot listener
// Enter submits login form
crsBoot(); // parcours + héros
setTimeout(badgeCheck, 1500); // check badges on load

// ═══════════════════════════════════════════════
// SOUND EFFECTS + HAPTICS (Duolingo-style feedback)
// ═══════════════════════════════════════════════
const SFX = (() => {
  let ctx;
  let unlocked = false; // track if AudioContext was unlocked by user gesture

  // ── Unlock AudioContext on first user gesture (mobile requirement) ──
  function unlockAudio() {
    if (unlocked) return;
    try {
      if (!ctx || ctx.state === 'closed') {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (ctx.state === 'suspended') {
        ctx.resume().then(() => { unlocked = true; }).catch(() => {});
      } else {
        unlocked = true;
      }
      // Play a silent buffer to fully unlock on iOS
      const buf = ctx.createBuffer(1, 1, 22050);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      src.start(0);
    } catch(e) {}
  }
  // Attach unlock to multiple user-gesture events (covers iOS Safari, Chrome, PWA)
  ['touchstart', 'touchend', 'click', 'keydown'].forEach(evt => {
    document.addEventListener(evt, unlockAudio, { once: false, passive: true });
  });

  function getCtx() {
    if (!ctx || ctx.state === 'closed') ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  }

  // ── Vibration helper (safe cross-browser) ──
  function vibrate(pattern) {
    try { if (navigator.vibrate) navigator.vibrate(pattern); } catch(e) {}
  }

  // ── Correct: bright ascending two-note chime ──
  function playCorrect() {
    try {
      const c = getCtx(), now = c.currentTime;
      // Note 1: E5
      const o1 = c.createOscillator(), g1 = c.createGain();
      o1.type = 'sine'; o1.frequency.value = 659.25;
      g1.gain.setValueAtTime(0.22, now);
      g1.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      o1.connect(g1); g1.connect(c.destination);
      o1.start(now); o1.stop(now + 0.25);
      // Note 2: C6 (major feel)
      const o2 = c.createOscillator(), g2 = c.createGain();
      o2.type = 'sine'; o2.frequency.value = 1046.50;
      g2.gain.setValueAtTime(0, now + 0.08);
      g2.gain.linearRampToValueAtTime(0.25, now + 0.1);
      g2.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      o2.connect(g2); g2.connect(c.destination);
      o2.start(now + 0.08); o2.stop(now + 0.4);
      // Harmonic shimmer
      const o3 = c.createOscillator(), g3 = c.createGain();
      o3.type = 'triangle'; o3.frequency.value = 1318.51;
      g3.gain.setValueAtTime(0, now + 0.08);
      g3.gain.linearRampToValueAtTime(0.08, now + 0.12);
      g3.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      o3.connect(g3); g3.connect(c.destination);
      o3.start(now + 0.08); o3.stop(now + 0.35);
    } catch(e) {}
    vibrate(40); // short success tap
  }
  // ── Wrong: low descending buzz ──
  function playWrong() {
    try {
      const c = getCtx(), now = c.currentTime;
      // Low tone
      const o1 = c.createOscillator(), g1 = c.createGain();
      o1.type = 'square'; o1.frequency.value = 185;
      o1.frequency.linearRampToValueAtTime(140, now + 0.25);
      g1.gain.setValueAtTime(0.15, now);
      g1.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      o1.connect(g1); g1.connect(c.destination);
      o1.start(now); o1.stop(now + 0.3);
      // Second dissonant tone
      const o2 = c.createOscillator(), g2 = c.createGain();
      o2.type = 'sawtooth'; o2.frequency.value = 233;
      o2.frequency.linearRampToValueAtTime(175, now + 0.2);
      g2.gain.setValueAtTime(0.07, now);
      g2.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      o2.connect(g2); g2.connect(c.destination);
      o2.start(now); o2.stop(now + 0.25);
    } catch(e) {}
    vibrate([80, 40, 80]); // double-buzz error pattern
  }
  // ── Almost: mid-range wobble ──
  function playAlmost() {
    try {
      const c = getCtx(), now = c.currentTime;
      const o = c.createOscillator(), g = c.createGain();
      o.type = 'triangle'; o.frequency.value = 440;
      o.frequency.setValueAtTime(440, now);
      o.frequency.linearRampToValueAtTime(466, now + 0.1);
      o.frequency.linearRampToValueAtTime(440, now + 0.2);
      g.gain.setValueAtTime(0.15, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      o.connect(g); g.connect(c.destination);
      o.start(now); o.stop(now + 0.3);
    } catch(e) {}
    vibrate([30, 20, 30]); // gentle double-tap
  }

  // ── Combo celebration: play when getting several correct in a row ──
  function playCombo() {
    try {
      const c = getCtx(), now = c.currentTime;
      // Rapid ascending arpeggio C5→E5→G5→C6
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const o = c.createOscillator(), g = c.createGain();
        o.type = 'sine'; o.frequency.value = freq;
        const t = now + i * 0.06;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.18, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
        o.connect(g); g.connect(c.destination);
        o.start(t); o.stop(t + 0.2);
      });
    } catch(e) {}
    vibrate([30, 20, 30, 20, 60]); // celebratory pattern
  }

  // ── Sound preference (stored in localStorage) ──
  function sfxEnabled() {
    try { return localStorage.getItem('aprende_sfx') !== 'off'; } catch(e) { return true; }
  }
  function sfxSetEnabled(on) {
    try { localStorage.setItem('aprende_sfx', on ? 'on' : 'off'); } catch(e) {}
    document.getElementById('sfx-status-dot')?.style && updateSfxDot();
  }
  function updateSfxDot() {
    const dot = document.getElementById('sfx-status-dot');
    if (!dot) return;
    dot.style.display = 'block';
    dot.style.background = sfxEnabled() ? '#58cc02' : '#777';
  }

  // ── Vibration-only preference ──
  function vibeEnabled() {
    try { return localStorage.getItem('aprende_vibe') !== 'off'; } catch(e) { return true; }
  }
  function vibeSetEnabled(on) {
    try { localStorage.setItem('aprende_vibe', on ? 'on' : 'off'); } catch(e) {}
  }

  // ── Visual flash effect (green/red overlay like Duolingo) ──
  let flashEl = null;
  function flashScreen(color) {
    if (!flashEl) {
      flashEl = document.createElement('div');
      flashEl.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:0;transition:opacity .15s ease-out';
      document.body.appendChild(flashEl);
    }
    flashEl.style.background = color;
    flashEl.style.opacity = '0.18';
    setTimeout(() => { flashEl.style.opacity = '0'; }, 180);
  }

  // ── Mini confetti burst (for combos ≥ 5) ──
  function confettiBurst() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9998';
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    const ctx2d = canvas.getContext('2d');
    const colors = ['#58cc02','#ffc800','#ff4b4b','#1cb0f6','#ce82ff','#ff9600'];
    const pieces = Array.from({length: 40}, () => ({
      x: canvas.width / 2 + (Math.random() - 0.5) * 60,
      y: canvas.height * 0.45,
      vx: (Math.random() - 0.5) * 12,
      vy: -Math.random() * 14 - 4,
      r: Math.random() * 5 + 2,
      c: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.3
    }));
    let frame = 0;
    function draw() {
      ctx2d.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.5; p.rot += p.vr;
        ctx2d.save(); ctx2d.translate(p.x, p.y); ctx2d.rotate(p.rot);
        ctx2d.fillStyle = p.c; ctx2d.fillRect(-p.r, -p.r/2, p.r*2, p.r);
        ctx2d.restore();
      });
      frame++;
      if (frame < 50) requestAnimationFrame(draw);
      else canvas.remove();
    }
    requestAnimationFrame(draw);
  }

  // ── MutationObserver: auto-detect correct/wrong classes ──
  let lastSfxTime = 0;
  let comboCount = 0;
  const DEBOUNCE = 120; // ms — avoid double-fires
  const observer = new MutationObserver(muts => {
    const now = Date.now();
    if (now - lastSfxTime < DEBOUNCE) return;
    for (const m of muts) {
      if (m.type !== 'attributes' || m.attributeName !== 'class') continue;
      const el = m.target;
      if (!el.classList) continue;
      // Skip course exercises — SFX is called directly from crsResult()
      if (el.closest && el.closest('#screen-lesson')) continue;
      if (el.classList.contains('correct') || el.classList.contains('ok')) {
        lastSfxTime = now;
        comboCount++;
        if (sfxEnabled()) {
          if (comboCount >= 5 && comboCount % 5 === 0) {
            playCombo(); confettiBurst();
          } else {
            playCorrect();
          }
        }
        if (vibeEnabled()) vibrate(40);
        flashScreen('rgba(88, 204, 2, 0.5)'); // green flash
        return;
      }
      if (el.classList.contains('wrong') || el.classList.contains('bad')) {
        lastSfxTime = now;
        comboCount = 0; // reset combo
        if (sfxEnabled()) playWrong();
        if (vibeEnabled()) vibrate([80, 40, 80]);
        flashScreen('rgba(255, 75, 75, 0.5)'); // red flash
        return;
      }
      if (el.classList.contains('almost')) {
        lastSfxTime = now;
        comboCount = 0;
        if (sfxEnabled()) playAlmost();
        if (vibeEnabled()) vibrate([30, 20, 30]);
        flashScreen('rgba(255, 200, 0, 0.5)'); // amber flash
        return;
      }
    }
  });
  observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });

  // Init dot
  setTimeout(updateSfxDot, 500);

  return { playCorrect, playWrong, playAlmost, playCombo, sfxEnabled, sfxSetEnabled,
           vibeEnabled, vibeSetEnabled, updateSfxDot, confettiBurst, vibrate };
})();

function toggleSfxBtn() {
  const on = !SFX.sfxEnabled();
  SFX.sfxSetEnabled(on);
  const btn = document.getElementById('btn-sfx');
  if (btn) btn.querySelector('span').textContent = on ? '🔊' : '🔇';
  if (on) SFX.playCorrect(); // preview sound when turning on
}

// ═══════════════════════════════════════════════
// SETTINGS MODAL (mobile-accessible)
// ═══════════════════════════════════════════════
function openSettingsModal() {
  const sfxOn = SFX.sfxEnabled();
  const vibeOn = SFX.vibeEnabled();
  const s = (typeof notifGet === 'function') ? notifGet() : { enabled: false, reminderHour: 20, reminderMin: 0, streakAlert: true, goalCelebrate: true };
  const html = `
    <div style="max-width:420px;margin:auto;max-height:80vh;overflow-y:auto;padding-right:4px">
      <h3 style="margin:0 0 1.2rem;text-align:center;font-size:1.2rem">⚙️ Réglages</h3>

      <!-- SONS & VIBRATIONS -->
      <div style="margin-bottom:1.2rem">
        <div style="font-weight:800;font-size:.95rem;margin-bottom:.5rem;color:#ffc800">🔊 Sons & Vibrations</div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.6rem">
          <div><div style="font-weight:600">🔊 Effets sonores</div><div style="font-size:.73rem;color:var(--muted)">Sons correct / faux / presque</div></div>
          <label class="notif-toggle">
            <input type="checkbox" id="settings-sfx" ${sfxOn ? 'checked' : ''} onchange="SFX.sfxSetEnabled(this.checked); if(this.checked) SFX.playCorrect();">
            <span class="notif-slider"></span>
          </label>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px">
          <div><div style="font-weight:600">📳 Vibrations</div><div style="font-size:.73rem;color:var(--muted)">Retour haptique correct / faux</div></div>
          <label class="notif-toggle">
            <input type="checkbox" id="settings-vibe" ${vibeOn ? 'checked' : ''} onchange="SFX.vibeSetEnabled(this.checked); if(this.checked) navigator.vibrate && navigator.vibrate(40);">
            <span class="notif-slider"></span>
          </label>
        </div>
      </div>

      <!-- NOTIFICATIONS -->
      <div style="margin-bottom:1.2rem">
        <div style="font-weight:800;font-size:.95rem;margin-bottom:.5rem;color:#1cb0f6">🔔 Notifications</div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.6rem">
          <span style="font-weight:600">Activer les notifications</span>
          <label class="notif-toggle">
            <input type="checkbox" id="settings-notif-on" ${s.enabled ? 'checked' : ''} onchange="toggleNotif(this.checked); document.getElementById('settings-notif-opts').style.opacity=this.checked?1:.4; document.getElementById('settings-notif-opts').style.pointerEvents=this.checked?'auto':'none';">
            <span class="notif-slider"></span>
          </label>
        </div>
        <div id="settings-notif-opts" style="${s.enabled ? '' : 'opacity:.4;pointer-events:none'}">
          <div style="padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.6rem">
            <div style="font-weight:600;margin-bottom:.4rem">⏰ Rappel quotidien</div>
            <div style="display:flex;align-items:center;gap:.5rem">
              <span style="color:var(--muted);font-size:.85rem">Heure :</span>
              <input type="number" id="settings-notif-hour" value="${s.reminderHour}" min="0" max="23" style="width:50px;padding:.3rem;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.3);color:#fff;text-align:center;font-size:1rem" onchange="document.getElementById('notif-hour')&&(document.getElementById('notif-hour').value=this.value); saveNotifTime()">
              <span style="font-weight:700">:</span>
              <input type="number" id="settings-notif-min" value="${String(s.reminderMin).padStart(2,'0')}" min="0" max="59" step="5" style="width:50px;padding:.3rem;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.3);color:#fff;text-align:center;font-size:1rem" onchange="document.getElementById('notif-min')&&(document.getElementById('notif-min').value=this.value); saveNotifTime()">
            </div>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.6rem">
            <div><div style="font-weight:600">🔥 Alerte streak</div><div style="font-size:.73rem;color:var(--muted)">Si tu vas perdre ta série</div></div>
            <label class="notif-toggle"><input type="checkbox" ${s.streakAlert ? 'checked' : ''} onchange="document.getElementById('notif-streak')&&(document.getElementById('notif-streak').checked=this.checked); saveNotifOptions()"><span class="notif-slider"></span></label>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.6rem">
            <div><div style="font-weight:600">🎯 Objectif atteint</div><div style="font-size:.73rem;color:var(--muted)">Félicitations quand tu finis</div></div>
            <label class="notif-toggle"><input type="checkbox" ${s.goalCelebrate ? 'checked' : ''} onchange="document.getElementById('notif-goal')&&(document.getElementById('notif-goal').checked=this.checked); saveNotifOptions()"><span class="notif-slider"></span></label>
          </div>
          <button onclick="testNotification()" style="width:100%;padding:.6rem;border:none;border-radius:10px;background:linear-gradient(135deg,#1cb0f6,#1899d6);color:#fff;font-weight:700;cursor:pointer;font-size:.85rem">🧪 Tester</button>
        </div>
      </div>

      <!-- DONNÉES -->
      <div style="margin-bottom:1rem">
        <div style="font-weight:800;font-size:.95rem;margin-bottom:.5rem;color:#58cc02">💾 Données</div>
        <div style="display:flex;gap:.5rem">
          <button onclick="exportProgress(); closeModal('settings-modal')" style="flex:1;padding:.7rem;border:none;border-radius:10px;background:rgba(255,255,255,.1);color:#fff;font-weight:700;cursor:pointer;font-size:.85rem">💾 Exporter</button>
          <button onclick="document.getElementById('import-file-input').click(); closeModal('settings-modal')" style="flex:1;padding:.7rem;border:none;border-radius:10px;background:rgba(255,255,255,.1);color:#fff;font-weight:700;cursor:pointer;font-size:.85rem">📂 Importer</button>
        </div>
      </div>

      <button onclick="closeModal('settings-modal')" style="width:100%;padding:.7rem;border:none;border-radius:12px;background:rgba(255,255,255,.08);color:#fff;cursor:pointer;font-size:.9rem;font-weight:600">Fermer</button>
    </div>
  `;
  showGenericModal('settings-modal', html);
}

// ═══════════════════════════════════════════════
// NOTIFICATIONS SYSTEM
// ═══════════════════════════════════════════════
const NOTIF_DEFAULTS = { enabled: false, reminderHour: 20, reminderMin: 0, streakAlert: true, goalCelebrate: true };
function notifGet() { try { return JSON.parse(localStorage.getItem('aprende_notif') || 'null') || NOTIF_DEFAULTS; } catch(e) { return NOTIF_DEFAULTS; } }
function notifSave(s) { localStorage.setItem('aprende_notif', JSON.stringify(s)); }

function updateNotifDot() {
  const dot = document.getElementById('notif-status-dot');
  if(!dot) return;
  const s = notifGet();
  dot.style.display = 'inline-block';
  dot.style.background = s.enabled ? '#58cc02' : '#888';
}

async function requestNotifPermission() {
  if(!('Notification' in window)) { showToast('Notifications non supportées sur ce navigateur', 'error-toast'); return false; }
  if(Notification.permission === 'granted') return true;
  if(Notification.permission === 'denied') { showToast('Notifications bloquées — autorise-les dans les réglages du navigateur', 'error-toast'); return false; }
  const perm = await Notification.requestPermission();
  return perm === 'granted';
}

function openNotifSettings() {
  const s = notifGet();
  const html = `
    <div style="max-width:400px;margin:auto">
      <h3 style="margin:0 0 1rem;text-align:center">🔔 Notifications</h3>

      <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.8rem">
        <span style="font-weight:700">Activer les notifications</span>
        <label class="notif-toggle">
          <input type="checkbox" id="notif-enabled" ${s.enabled ? 'checked' : ''} onchange="toggleNotif(this.checked)">
          <span class="notif-slider"></span>
        </label>
      </div>

      <div id="notif-options" style="${s.enabled ? '' : 'opacity:.4;pointer-events:none'}">
        <div style="padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.8rem">
          <div style="font-weight:600;margin-bottom:.5rem">⏰ Rappel quotidien</div>
          <div style="display:flex;align-items:center;gap:.5rem">
            <span style="color:var(--muted);font-size:.85rem">Heure :</span>
            <input type="number" id="notif-hour" value="${s.reminderHour}" min="0" max="23" style="width:50px;padding:.3rem;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.3);color:#fff;text-align:center;font-size:1rem" onchange="saveNotifTime()">
            <span style="font-weight:700">:</span>
            <input type="number" id="notif-min" value="${String(s.reminderMin).padStart(2,'0')}" min="0" max="59" step="5" style="width:50px;padding:.3rem;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.3);color:#fff;text-align:center;font-size:1rem" onchange="saveNotifTime()">
          </div>
          <div style="font-size:.75rem;color:var(--muted);margin-top:.3rem">Si tu n'as pas révisé, tu recevras un rappel</div>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.8rem">
          <div>
            <div style="font-weight:600">🔥 Alerte streak en danger</div>
            <div style="font-size:.75rem;color:var(--muted)">Si tu vas perdre ta série</div>
          </div>
          <label class="notif-toggle">
            <input type="checkbox" id="notif-streak" ${s.streakAlert ? 'checked' : ''} onchange="saveNotifOptions()">
            <span class="notif-slider"></span>
          </label>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.8rem">
          <div>
            <div style="font-weight:600">🎯 Objectif atteint</div>
            <div style="font-size:.75rem;color:var(--muted)">Félicitations quand tu finis ton objectif</div>
          </div>
          <label class="notif-toggle">
            <input type="checkbox" id="notif-goal" ${s.goalCelebrate ? 'checked' : ''} onchange="saveNotifOptions()">
            <span class="notif-slider"></span>
          </label>
        </div>
      </div>

      <button onclick="testNotification()" style="width:100%;padding:.7rem;border:none;border-radius:12px;background:linear-gradient(135deg,#1cb0f6,#1899d6);color:#fff;font-weight:700;cursor:pointer;font-size:.9rem;margin-top:.5rem">
        🧪 Tester une notification
      </button>
      <button onclick="closeModal('notif-modal')" style="width:100%;padding:.6rem;border:none;border-radius:12px;background:rgba(255,255,255,.1);color:#fff;cursor:pointer;margin-top:.5rem;font-size:.85rem">Fermer</button>
    </div>
  `;
  showGenericModal('notif-modal', html);
}

function showGenericModal(id, html) {
  let m = document.getElementById(id);
  if(m) { m.querySelector('.modal-body').innerHTML = html; m.style.display = 'flex'; return; }
  m = document.createElement('div');
  m.id = id;
  m.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(4px)';
  m.innerHTML = `<div class="modal-body" style="background:var(--card);border-radius:16px;padding:1.5rem;max-width:440px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.5)">${html}</div>`;
  m.addEventListener('click', e => { if(e.target === m) closeModal(id); });
  document.body.appendChild(m);
}
function closeModal(id) { const m = document.getElementById(id); if(m) m.style.display = 'none'; }

async function toggleNotif(on) {
  const s = notifGet();
  if(on) {
    const ok = await requestNotifPermission();
    if(!ok) { document.getElementById('notif-enabled').checked = false; return; }
    s.enabled = true;
    notifSave(s);
    scheduleReminder(s);
    showToast('🔔 Notifications activées !', 'correct-toast');
  } else {
    s.enabled = false;
    notifSave(s);
    cancelReminder();
    showToast('🔕 Notifications désactivées', '');
  }
  const opts = document.getElementById('notif-options');
  if(opts) { opts.style.opacity = on ? '1' : '.4'; opts.style.pointerEvents = on ? 'auto' : 'none'; }
  updateNotifDot();
}

function saveNotifTime() {
  const s = notifGet();
  s.reminderHour = parseInt(document.getElementById('notif-hour').value) || 20;
  s.reminderMin = parseInt(document.getElementById('notif-min').value) || 0;
  notifSave(s);
  if(s.enabled) scheduleReminder(s);
}

function saveNotifOptions() {
  const s = notifGet();
  s.streakAlert = document.getElementById('notif-streak').checked;
  s.goalCelebrate = document.getElementById('notif-goal').checked;
  notifSave(s);
}

// ── Scheduling with setInterval (works while tab is open) + SW message ──
let _notifInterval = null;
function scheduleReminder(s) {
  cancelReminder();
  // Check every 60 seconds if it's time to send a reminder
  _notifInterval = setInterval(() => {
    checkReminderTime();
  }, 60000);
  // Also try periodic sync if available
  tryPeriodicSync();
}
function cancelReminder() {
  if(_notifInterval) { clearInterval(_notifInterval); _notifInterval = null; }
}

function checkReminderTime() {
  const s = notifGet();
  if(!s.enabled) return;
  const now = new Date();
  const h = now.getHours(), m = now.getMinutes();
  const todayKey = rpgDayKey();
  const alreadySent = localStorage.getItem('notif_sent_' + todayKey);

  // Daily reminder at set time — language-aware
  if(h === s.reminderHour && m === s.reminderMin && !alreadySent) {
    const dg = dgGet();
    const ls = (dg.langSessions && dg.langSessions[todayKey]) || {};
    const langNames = { es: 'espagnol', ln: 'lingala', en: 'anglais' };
    const langFlags = { es: '🇪🇸', ln: '🇨🇩', en: '🇬🇧' };
    const missing = ['es', 'ln', 'en'].filter(l => Math.floor((ls[l] || 0) / 60) < dg.target);
    if(missing.length > 0) {
      const missingText = missing.map(l => `${langFlags[l]} ${langNames[l]}`).join(', ');
      const totalMin = Math.floor((dg.sessions[todayKey] || 0) / 60);
      sendLocalNotification(
        '¡Aprende! 🎓',
        `C'est l'heure de réviser ! Il te reste : ${missingText}. ${totalMin} min étudiées aujourd'hui. Série : ${rpg ? rpg.streak : 0} j 🔥`,
        'daily-reminder'
      );
      localStorage.setItem('notif_sent_' + todayKey, '1');
    }
  }

  // Streak danger alert at 22:00 — language-aware
  if(s.streakAlert && h === 22 && m === 0 && !localStorage.getItem('streak_alert_' + todayKey)) {
    const dg = dgGet();
    const ls = (dg.langSessions && dg.langSessions[todayKey]) || {};
    const langFlags = { es: '🇪🇸', ln: '🇨🇩', en: '🇬🇧' };
    const langNames = { es: 'espagnol', ln: 'lingala', en: 'anglais' };
    const inactive = ['es', 'ln', 'en'].filter(l => Math.floor((ls[l] || 0) / 60) < 1);
    const streak = rpg ? rpg.streak : 0;
    if(inactive.length > 0 && streak > 0) {
      const inactiveText = inactive.map(l => `${langFlags[l]} ${langNames[l]}`).join(', ');
      sendLocalNotification(
        '🔥 Streak en danger !',
        inactive.length === 3
          ? `Tu n'as pas révisé du tout aujourd'hui ! Ta série de ${streak} jours va se briser à minuit !`
          : `Il te manque : ${inactiveText}. Ta série de ${streak} jours t'attend !`,
        'streak-danger'
      );
      localStorage.setItem('streak_alert_' + todayKey, '1');
    }
  }
}

function sendLocalNotification(title, body, tag) {
  if(Notification.permission !== 'granted') return;
  // Try via service worker first (works even if tab is in background on mobile)
  if(navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'SCHEDULE_NOTIFICATION',
      delay: 0,
      title, body, tag
    });
  } else {
    // Fallback: direct notification
    try { new Notification(title, { body, tag, icon: '🎓' }); } catch(e) {}
  }
}

// Goal celebration notification
function notifGoalReached() {
  const s = notifGet();
  if(!s.enabled || !s.goalCelebrate) return;
  sendLocalNotification(
    '🎯 Bravo !',
    'Tu as atteint ton objectif quotidien ! Continue comme ça 💪',
    'goal-reached'
  );
}

// Try to register periodic background sync
async function tryPeriodicSync() {
  if(!('serviceWorker' in navigator)) return;
  try {
    const reg = await navigator.serviceWorker.ready;
    if('periodicSync' in reg) {
      await reg.periodicSync.register('aprende-reminder', { minInterval: 12 * 60 * 60 * 1000 });
    }
  } catch(e) { /* periodicSync not available — fallback to setInterval */ }
}

function testNotification() {
  if(Notification.permission !== 'granted') {
    requestNotifPermission().then(ok => {
      if(ok) doTestNotif();
    });
  } else {
    doTestNotif();
  }
}
function doTestNotif() {
  sendLocalNotification(
    '¡Aprende! 🎓 — Test',
    'Les notifications fonctionnent ! Tu recevras tes rappels quotidiens 🔥',
    'test-notif'
  );
  showToast('✅ Notification de test envoyée !', 'correct-toast');
}

// ── Boot: start scheduler if enabled — now handled inside initApp()

// ── Hook into dgCheckComplete for goal notifications ──
const _origDgCheckComplete = dgCheckComplete;
dgCheckComplete = function(dg) {
  const k = dgToday(), wasDone = dg['done_' + k];
  _origDgCheckComplete(dg);
  if(!wasDone && dg['done_' + k]) notifGoalReached();
};

// PWA Service Worker
if('serviceWorker' in navigator) {
  const swCode = "\n// \u00a1Aprende! Service Worker\nconst CACHE_NAME = 'aprende-v2';\nconst ASSETS = ['./', 'index.html'];\n\nself.addEventListener('install', e => {\n  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));\n});\n\nself.addEventListener('activate', e => {\n  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));\n});\n\nself.addEventListener('fetch', e => {\n  if(e.request.method !== 'GET') return;\n  e.respondWith(\n    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {\n      if(resp.ok && resp.type === 'basic') {\n        const clone = resp.clone();\n        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));\n      }\n      return resp;\n    }).catch(() => caches.match('./')))\n  );\n});\n";
  const swBlob = new Blob([swCode], {type: 'application/javascript'});
  const swURL = URL.createObjectURL(swBlob);
  // Blob SW won't work on all browsers, try external first
  navigator.serviceWorker.register('sw.js').catch(() => {
    // Fallback: at minimum cache the page for offline via Cache API
    if('caches' in window) {
      caches.open('aprende-v1').then(c => c.add(location.href)).catch(() => {});
    }
  });
}
// iOS standalone detection
if(window.navigator.standalone) document.body.classList.add('ios-pwa');