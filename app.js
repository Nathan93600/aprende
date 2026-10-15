// ¡Aprende! — Main application
// Course data is loaded from courses/es.js, courses/ln.js, courses/en.js

// ═══════════════════════════════════════════════
// AUTO-HYDRATE — disabled (data now comes from Firestore via sync.js)
// ═══════════════════════════════════════════════
/* EMBEDDED_PROGRESS removed — Firestore is the single source of truth */
if(false) { // kept for structure — never runs
  const EMBEDDED_PROGRESS = {"version":2,"exported_at":"2026-10-08T16:52:33.447Z","app":"aprende","srs_data":{"en:grounded":{"ef":2.5,"interval":20,"reps":3,"due":1792856886378,"lang":"en"},"en:to be off the hook":{"ef":2.5,"interval":8,"reps":2,"due":1791820117114,"lang":"en"},"en:hook":{"ef":2.5,"interval":8,"reps":2,"due":1792047111609,"lang":"en"},"en:hold (verb)":{"ef":2.5,"interval":8,"reps":2,"due":1791820056457,"lang":"en"},"en:hold on":{"ef":2.5,"interval":8,"reps":2,"due":1791820101829,"lang":"en"},"en:bereaved":{"ef":2.5,"interval":8,"reps":2,"due":1791820069575,"lang":"en"},"en:meticulous":{"ef":2.5,"interval":8,"reps":2,"due":1791819901421,"lang":"en"},"en:to corner":{"ef":2.5,"interval":8,"reps":2,"due":1791820059040,"lang":"en"},"en:to impeach":{"ef":2.0500000000000003,"interval":3,"reps":2,"due":1791698889762,"lang":"en"},"en:a fine":{"ef":2.5,"interval":8,"reps":2,"due":1791820053924,"lang":"en"},"en:fine print":{"ef":2.0500000000000003,"interval":2,"reps":2,"due":1791528707977,"lang":"en"},"en:scorched":{"ef":2.35,"interval":3,"reps":2,"due":1791615116712,"lang":"en"},"ln:Kasi":{"ef":2.35,"interval":7,"reps":3,"due":1791926782361,"lang":"ln"},"ln:Na":{"ef":2.65,"interval":12,"reps":2,"due":1792393236077,"lang":"ln"},"ln:Kozua / Kozwa":{"ef":2.2,"interval":3,"reps":2,"due":1791700530445,"lang":"ln"},"ln:Libanda ya mpepo":{"ef":2.2,"interval":1,"reps":1,"due":1791442833693,"lang":"ln"},"ln:Pamba":{"ef":2.35,"interval":0,"reps":0,"due":1791364100683,"lang":"ln"},"ln:Mobimba":{"ef":2.2,"interval":3,"reps":1,"due":1791700740832,"lang":"ln"},"ln:Bissembo":{"ef":2.35,"interval":0,"reps":0,"due":1791441348731,"lang":"ln"},"ln:Kokutana":{"ef":2.35,"interval":0,"reps":0,"due":1791356502250,"lang":"ln"},"ln:Batu / Motu":{"ef":2.2,"interval":1,"reps":1,"due":1791450537053,"lang":"ln"},"ln:Moko":{"ef":2.35,"interval":3,"reps":2,"due":1791581174326,"lang":"ln"},"ln:Sikoyo":{"ef":2.35,"interval":3,"reps":1,"due":1791699066080,"lang":"ln"},"ln:Kofuta":{"ef":2.65,"interval":18,"reps":2,"due":1792911771471,"lang":"ln"},"ln:Komesana":{"ef":2.2,"interval":1,"reps":1,"due":1791450521352,"lang":"ln"},"ln:Kobika":{"ef":2.35,"interval":1,"reps":1,"due":1790754420990,"lang":"ln"},"ln:Yoka":{"ef":2.65,"interval":18,"reps":2,"due":1792911758601,"lang":"ln"},"ln:Kotonga / Tonga":{"ef":2.35,"interval":0,"reps":0,"due":1791441378166,"lang":"ln"},"ln:Zemi":{"ef":2.2,"interval":1,"reps":1,"due":1791450525969,"lang":"ln"},"ln:Kotanga":{"ef":2.35,"interval":3,"reps":2,"due":1791615643694,"lang":"ln"},"ln:Kokuta":{"ef":2.35,"interval":0,"reps":0,"due":1791439875347,"lang":"ln"},"ln:Zua":{"ef":2.35,"interval":5,"reps":2,"due":1791796106550,"lang":"ln"},"ln:Na libanda":{"ef":2.2,"interval":1,"reps":1,"due":1791527762815,"lang":"ln"},"ln:Likambo / Makambo":{"ef":2.2,"interval":3,"reps":2,"due":1791699069796,"lang":"ln"},"ln:Kolimbisa":{"ef":2.2,"interval":3,"reps":2,"due":1791699092933,"lang":"ln"},"ln:Kobwaka":{"ef":2.65,"interval":18,"reps":2,"due":1792911653446,"lang":"ln"},"ln:Mokomi":{"ef":2.35,"interval":0,"reps":0,"due":1791439956090,"lang":"ln"},"ln:Kosomba":{"ef":2.8,"interval":28,"reps":2,"due":1793859106318,"lang":"ln"},"ln:Liputa / Maputa":{"ef":2.5,"interval":8,"reps":2,"due":1792132557198,"lang":"ln"},"ln:Pe":{"ef":2.35,"interval":0,"reps":0,"due":1791439937336,"lang":"ln"},"ln:Kotia":{"ef":2.35,"interval":1,"reps":1,"due":1791450480947,"lang":"ln"},"ln:Kobaka":{"ef":2.35,"interval":1,"reps":1,"due":1790755167647,"lang":"ln"},"ln:Kosaka":{"ef":2.35,"interval":1,"reps":1,"due":1790755130077,"lang":"ln"},"ln:Kokòma":{"ef":2.35,"interval":0,"reps":0,"due":1791441366249,"lang":"ln"},"ln:Mokolo":{"ef":2.35,"interval":0,"reps":0,"due":1791439919469,"lang":"ln"},"ln:Motema / Mitema":{"ef":2.2,"interval":3,"reps":2,"due":1791700539396,"lang":"ln"},"ln:Ngunda":{"ef":2.35,"interval":0,"reps":0,"due":1791439885264,"lang":"ln"},"ln:Elongo":{"ef":2.35,"interval":0,"reps":0,"due":1791441353681,"lang":"ln"},"ln:Libándá":{"ef":2.35,"interval":3,"reps":1,"due":1791615697934,"lang":"ln"},"ln:Kati / Katikati":{"ef":2.35,"interval":0,"reps":0,"due":1791364131036,"lang":"ln"},"ln:Nasepeli":{"ef":2.35,"interval":1,"reps":1,"due":1791527735479,"lang":"ln"},"ln:Kosepela":{"ef":2.35,"interval":1,"reps":1,"due":1790835445162,"lang":"ln"},"ln:Kutu":{"ef":2.35,"interval":0,"reps":0,"due":1791439997262,"lang":"ln"},"ln:Kosola":{"ef":2.35,"interval":0,"reps":0,"due":1790887493464,"lang":"ln"},"ln:Makasi":{"ef":2.5,"interval":8,"reps":2,"due":1792047905329,"lang":"ln"},"es:de ninguna manera":{"ef":1.7500000000000004,"interval":1,"reps":1,"due":1791525885902,"lang":"es"},"es:Parecido":{"ef":2.5,"interval":8,"reps":2,"due":1791827840414,"lang":"es"},"es:cruzar":{"ef":2.35,"interval":7,"reps":3,"due":1791961074963,"lang":"es"},"es:amañado":{"ef":2.35,"interval":7,"reps":3,"due":1791960895597,"lang":"es"},"es:dañino":{"ef":2.2,"interval":3,"reps":2,"due":1791698519246,"lang":"es"},"es:agacharse":{"ef":2.35,"interval":3,"reps":1,"due":1791580934670,"lang":"es"},"es:Proyecto":{"ef":2.65,"interval":18,"reps":2,"due":1792994749805,"lang":"es"},"es:pegar":{"ef":2.35,"interval":7,"reps":3,"due":1791741406194,"lang":"es"},"es:Adelanto":{"ef":2.35,"interval":5,"reps":2,"due":1791568620862,"lang":"es"},"es:Cupo":{"ef":2.35,"interval":3,"reps":2,"due":1791580615593,"lang":"es"},"es:echar":{"ef":2.2,"interval":3,"reps":1,"due":1791580965105,"lang":"es"},"es:buitre":{"ef":2.0500000000000003,"interval":3,"reps":1,"due":1791615520919,"lang":"es"},"es:anciano":{"ef":2.35,"interval":3,"reps":2,"due":1791580635812,"lang":"es"},"es:personas mayores":{"ef":2.65,"interval":12,"reps":2,"due":1792173458649,"lang":"es"},"es:los que":{"ef":2.0500000000000003,"interval":4,"reps":4,"due":1791785136740,"lang":"es"},"es:asistir":{"ef":2.65,"interval":18,"reps":2,"due":1792911300698,"lang":"es"},"es:asistencia":{"ef":2.65,"interval":18,"reps":2,"due":1792911383924,"lang":"es"},"es:dañar":{"ef":2.2,"interval":3,"reps":1,"due":1791580561605,"lang":"es"},"es:hacer daño":{"ef":2.5,"interval":8,"reps":2,"due":1792012945720,"lang":"es"},"es:hacerse daño":{"ef":2.5,"interval":8,"reps":2,"due":1792012556604,"lang":"es"},"es:salga":{"ef":2.5,"interval":8,"reps":2,"due":1791827830946,"lang":"es"},"es:bastante":{"ef":2.5,"interval":8,"reps":2,"due":1792012550838,"lang":"es"},"es:vuelta":{"ef":2.35,"interval":7,"reps":3,"due":1791791903311,"lang":"es"},"es:dar la vuelta":{"ef":2.0500000000000003,"interval":3,"reps":2,"due":1791615285579,"lang":"es"},"es:volver a":{"ef":2.5,"interval":8,"reps":2,"due":1791827827180,"lang":"es"},"es:descartar":{"ef":2.5,"interval":8,"reps":2,"due":1791827792792,"lang":"es"},"es:descartado":{"ef":2.5,"interval":8,"reps":2,"due":1792012569256,"lang":"es"},"es:será que":{"ef":2.5,"interval":3,"reps":1,"due":1791580585306,"lang":"es"},"es:todavía":{"ef":2.65,"interval":18,"reps":2,"due":1792911311132,"lang":"es"},"es:conseguir":{"ef":2.5,"interval":8,"reps":2,"due":1791827809861,"lang":"es"},"es:no consigo":{"ef":2.65,"interval":18,"reps":2,"due":1792911369721,"lang":"es"},"es:imaginar":{"ef":2.65,"interval":18,"reps":2,"due":1792911465514,"lang":"es"},"es:niño":{"ef":2.65,"interval":12,"reps":2,"due":1792173436894,"lang":"es"},"es:dar igual":{"ef":2.5,"interval":8,"reps":2,"due":1791878310795,"lang":"es"},"es:dándole":{"ef":2.5,"interval":8,"reps":2,"due":1791827843398,"lang":"es"},"es:dar":{"ef":2.65,"interval":18,"reps":2,"due":1792911480815,"lang":"es"},"es:salir con":{"ef":2.65,"interval":18,"reps":2,"due":1792911269411,"lang":"es"},"es:hermano":{"ef":2.8,"interval":28,"reps":2,"due":1793775279695,"lang":"es"},"es:película":{"ef":2.65,"interval":18,"reps":2,"due":1792911328533,"lang":"es"},"es:salió":{"ef":2.2,"interval":3,"reps":2,"due":1791615340136,"lang":"es"},"es:crítica":{"ef":2.65,"interval":18,"reps":2,"due":1792911305798,"lang":"es"},"es:buenísimo":{"ef":2.65,"interval":18,"reps":2,"due":1792911335834,"lang":"es"},"es:todo el mundo":{"ef":2.65,"interval":18,"reps":2,"due":1792911449946,"lang":"es"},"es:mejor":{"ef":2.65,"interval":18,"reps":2,"due":1792911364720,"lang":"es"},"es:desde que":{"ef":2.5,"interval":8,"reps":2,"due":1792012956769,"lang":"es"},"es:entrar":{"ef":2.65,"interval":18,"reps":2,"due":1792911359202,"lang":"es"},"es:sorprendido":{"ef":2.2,"interval":3,"reps":3,"due":1791580588591,"lang":"es"},"es:aliviado":{"ef":2.5,"interval":8,"reps":2,"due":1791827785359,"lang":"es"},"es:a la vez":{"ef":2.5,"interval":8,"reps":2,"due":1792012626576,"lang":"es"},"es:sobre todo":{"ef":2.65,"interval":18,"reps":2,"due":1792911321865,"lang":"es"},"es:estuvimos hablando":{"ef":2.5,"interval":8,"reps":2,"due":1791878264890,"lang":"es"},"es:convencido":{"ef":2.5,"interval":8,"reps":2,"due":1792130606923,"lang":"es"},"es:iba a ser":{"ef":2.5,"interval":8,"reps":2,"due":1792012604908,"lang":"es"},"es:fracaso":{"ef":2.65,"interval":18,"reps":2,"due":1792911525122,"lang":"es"},"es:por fin":{"ef":2.5,"interval":8,"reps":2,"due":1791827781175,"lang":"es"},"es:ver":{"ef":2.65,"interval":18,"reps":2,"due":1792911463545,"lang":"es"},"es:otra vez":{"ef":1.9000000000000004,"interval":2,"reps":4,"due":1791528980206,"lang":"es"},"es:balancearse":{"ef":2.65,"interval":18,"reps":2,"due":1792911453094,"lang":"es"},"es:literalmente":{"ef":2.65,"interval":18,"reps":2,"due":1792911242358,"lang":"es"},"es:gracioso":{"ef":2.5,"interval":8,"reps":2,"due":1791827817262,"lang":"es"},"es:recordar":{"ef":2.5,"interval":8,"reps":2,"due":1791827869166,"lang":"es"},"es:hace como":{"ef":2.35,"interval":3,"reps":2,"due":1791615333252,"lang":"es"},"es:de hecho":{"ef":2.5,"interval":8,"reps":2,"due":1792012581123,"lang":"es"},"es:predecir":{"ef":2.65,"interval":18,"reps":2,"due":1792911303197,"lang":"es"},"es:tendríamos":{"ef":2.35,"interval":7,"reps":3,"due":1791791875808,"lang":"es"},"es:Alrededor":{"ef":2.5,"interval":8,"reps":2,"due":1792012607908,"lang":"es"},"es:parece que":{"ef":2.5,"interval":8,"reps":2,"due":1791827802061,"lang":"es"},"es:promedio":{"ef":2.65,"interval":18,"reps":2,"due":1792911427210,"lang":"es"},"es:en promedio":{"ef":2.65,"interval":18,"reps":2,"due":1792911288330,"lang":"es"},"es:esposa":{"ef":2.65,"interval":18,"reps":2,"due":1792911423026,"lang":"es"},"es:turbante":{"ef":2.35,"interval":5,"reps":3,"due":1791753781648,"lang":"es"},"es:sinceramente":{"ef":2.8,"interval":28,"reps":2,"due":1793775325233,"lang":"es"},"es:si":{"ef":2.5,"interval":8,"reps":2,"due":1792012959046,"lang":"es"},"es:cabeza":{"ef":2.65,"interval":18,"reps":2,"due":1792911420576,"lang":"es"},"es:veraniego":{"ef":2.65,"interval":18,"reps":2,"due":1792911430844,"lang":"es"},"es:lograr":{"ef":2.65,"interval":18,"reps":2,"due":1792911315682,"lang":"es"},"es:Logro":{"ef":2.65,"interval":12,"reps":2,"due":1792358548771,"lang":"es"},"es:castigar":{"ef":2.2,"interval":7,"reps":3,"due":1791961099284,"lang":"es"},"es:castigo":{"ef":2.2,"interval":9,"reps":4,"due":1792217071684,"lang":"es"},"es:querer":{"ef":2.65,"interval":18,"reps":2,"due":1792911352169,"lang":"es"},"es:quiso":{"ef":1.7500000000000004,"interval":1,"reps":1,"due":1791525908571,"lang":"es"},"es:te quiero":{"ef":2.65,"interval":18,"reps":2,"due":1792911507801,"lang":"es"},"es:sin":{"ef":2.65,"interval":18,"reps":2,"due":1792911502183,"lang":"es"},"es:Poner":{"ef":2.65,"interval":16,"reps":3,"due":1792703819861,"lang":"es"},"es:firme":{"ef":2.35,"interval":7,"reps":3,"due":1791926552821,"lang":"es"},"es:patria":{"ef":2.8,"interval":28,"reps":2,"due":1793775318666,"lang":"es"},"es:fue":{"ef":2.35,"interval":7,"reps":3,"due":1791791871874,"lang":"es"},"es:irse":{"ef":2.65,"interval":18,"reps":2,"due":1792911484765,"lang":"es"},"es:cama":{"ef":2.65,"interval":18,"reps":2,"due":1792911272360,"lang":"es"},"es:me voy a la cama":{"ef":2.5,"interval":8,"reps":2,"due":1792012565405,"lang":"es"},"es:acostarse":{"ef":2.0500000000000003,"interval":3,"reps":2,"due":1791615264728,"lang":"es"},"es:dormirse":{"ef":2.65,"interval":18,"reps":2,"due":1792911387973,"lang":"es"},"es:Pelota":{"ef":2.65,"interval":18,"reps":2,"due":1792911252392,"lang":"es"},"es:hacer la pelota":{"ef":2.35,"interval":7,"reps":3,"due":1791926192275,"lang":"es"},"es:flipar":{"ef":2.2,"interval":3,"reps":2,"due":1791580990399,"lang":"es"},"es:flipante":{"ef":2.35,"interval":7,"reps":3,"due":1791741339204,"lang":"es"},"es:me flipa":{"ef":1.9000000000000004,"interval":3,"reps":2,"due":1791615470196,"lang":"es"},"es:jefe":{"ef":2.65,"interval":18,"reps":2,"due":1792911375972,"lang":"es"},"es:cansado":{"ef":2.65,"interval":18,"reps":2,"due":1792911362036,"lang":"es"},"es:cansar":{"ef":2.5,"interval":8,"reps":2,"due":1791872083958,"lang":"es"},"es:descojonarse":{"ef":2.35,"interval":8,"reps":2,"due":1792130544815,"lang":"es"},"es:cojonudo":{"ef":2.0500000000000003,"interval":1,"reps":1,"due":1791525986144,"lang":"es"},"es:ola":{"ef":2.35,"interval":7,"reps":3,"due":1791741413478,"lang":"es"},"es:arruga":{"ef":2.0500000000000003,"interval":3,"reps":2,"due":1791615435160,"lang":"es"},"es:no solo":{"ef":2.65,"interval":18,"reps":2,"due":1792911292480,"lang":"es"},"es:a lo mejor":{"ef":2.0500000000000003,"interval":3,"reps":2,"due":1791615400380,"lang":"es"},"es:preguntar":{"ef":2.65,"interval":18,"reps":2,"due":1792911343485,"lang":"es"},"es:periodista":{"ef":2.65,"interval":18,"reps":2,"due":1792911438311,"lang":"es"},"es:subir":{"ef":2.35,"interval":7,"reps":3,"due":1791741316653,"lang":"es"},"es:lamentar":{"ef":2.2,"interval":7,"reps":3,"due":1791961105118,"lang":"es"},"es:chica":{"ef":2.65,"interval":18,"reps":2,"due":1792911415841,"lang":"es"},"es:señora":{"ef":2.65,"interval":18,"reps":2,"due":1792911413492,"lang":"es"},"es:venir":{"ef":2.65,"interval":18,"reps":2,"due":1792911298081,"lang":"es"},"es:ni siquiera":{"ef":2.35,"interval":3,"reps":1,"due":1791615516986,"lang":"es"},"es:conocer":{"ef":2.65,"interval":18,"reps":2,"due":1792911238791,"lang":"es"},"es:conozco":{"ef":2.35,"interval":3,"reps":2,"due":1791615461412,"lang":"es"},"es:despertar":{"ef":2.0500000000000003,"interval":3,"reps":2,"due":1791698636375,"lang":"es"},"es:hace nada":{"ef":2.35,"interval":7,"reps":3,"due":1791741371274,"lang":"es"},"es:sortear":{"ef":2.0500000000000003,"interval":3,"reps":2,"due":1791580598225,"lang":"es"},"es:sacar":{"ef":2.35,"interval":8,"reps":2,"due":1791827725253,"lang":"es"},"ln:Kobanga":{"ef":2.5,"interval":3,"reps":1,"due":1791581167873,"lang":"ln"},"ln:Muninga":{"ef":2.5,"interval":0,"reps":0,"due":1790751192307,"lang":"ln"},"ln:Mususu / Basusu":{"ef":2.5,"interval":0,"reps":0,"due":1791439934102,"lang":"ln"},"ln:Kokita":{"ef":2.5,"interval":0,"reps":0,"due":1791356701028,"lang":"ln"},"ln:Kofinga":{"ef":2.5,"interval":0,"reps":0,"due":1791364077080,"lang":"ln"},"ln:Komeka":{"ef":2.5,"interval":0,"reps":0,"due":1790751192307,"lang":"ln"},"ln:Nzoto":{"ef":2.5,"interval":8,"reps":2,"due":1792047612792,"lang":"ln"},"ln:Mibale":{"ef":2.5,"interval":3,"reps":1,"due":1791699151571,"lang":"ln"},"ln:Kozongela":{"ef":2.5,"interval":0,"reps":0,"due":1790751192307,"lang":"ln"},"ln:Misusu":{"ef":2.5,"interval":0,"reps":0,"due":1790751192307,"lang":"ln"},"ln:Kaka boye":{"ef":2.5,"interval":0,"reps":0,"due":1791441529398,"lang":"ln"},"ln:Kozonga":{"ef":2.5,"interval":3,"reps":1,"due":1791581179460,"lang":"ln"},"ln:Tango":{"ef":2.5,"interval":0,"reps":0,"due":1791356693927,"lang":"ln"},"ln:Somo":{"ef":2.5,"interval":0,"reps":0,"due":1791439940786,"lang":"ln"},"ln:Kokenda":{"ef":2.35,"interval":1,"reps":1,"due":1791450497332,"lang":"ln"},"ln:Pa":{"ef":2.5,"interval":0,"reps":0,"due":1791356716896,"lang":"ln"},"ln:Ya":{"ef":2.5,"interval":3,"reps":1,"due":1791615666446,"lang":"ln"},"ln:Koyamba":{"ef":2.5,"interval":0,"reps":0,"due":1791439977110,"lang":"ln"},"ln:Kala":{"ef":2.5,"interval":0,"reps":0,"due":1791439915948,"lang":"ln"},"ln:Kobemba":{"ef":2.5,"interval":0,"reps":0,"due":1790751192307,"lang":"ln"},"ln:Kosimba":{"ef":2.65,"interval":7,"reps":1,"due":1792044696514,"lang":"ln"},"ln:Lokola":{"ef":2.5,"interval":0,"reps":0,"due":1791356681994,"lang":"ln"},"ln:Sukali":{"ef":2.65,"interval":7,"reps":1,"due":1791961231210,"lang":"ln"},"ln:Kolakisa":{"ef":2.5,"interval":3,"reps":1,"due":1791615689068,"lang":"ln"},"en:to ground (a flight)":{"ef":2.5,"interval":3,"reps":1,"due":1791615123912,"lang":"en"},"en:to get hold of sb":{"ef":2.2,"interval":1,"reps":1,"due":1791526107915,"lang":"en"},"en:to have a hold on sb":{"ef":2.5,"interval":3,"reps":1,"due":1791615120478,"lang":"en"},"en:impeachment":{"ef":2.35,"interval":3,"reps":2,"due":1791698956752,"lang":"en"},"en:on a par with [sth]":{"ef":2.2,"interval":1,"reps":1,"due":1791526169170,"lang":"en"},"en:stay grounded":{"ef":2.2,"interval":1,"reps":1,"due":1791526240677,"lang":"en"},"en:fathom [sth]":{"ef":2.2,"interval":2,"reps":2,"due":1791612527833,"lang":"en"},"en:hobo":{"ef":2.2,"interval":1,"reps":1,"due":1791526190839,"lang":"en"},"en:To act [sth] out":{"ef":2.2,"interval":1,"reps":1,"due":1791526197306,"lang":"en"},"en:Thirst":{"ef":2.35,"interval":3,"reps":2,"due":1791698994190,"lang":"en"},"en:bereavement":{"ef":2.5,"interval":3,"reps":1,"due":1791615204569,"lang":"en"},"en:to grant":{"ef":2.35,"interval":3,"reps":2,"due":1791698901080,"lang":"en"},"en:Quench":{"ef":2.2,"interval":1,"reps":1,"due":1791526237777,"lang":"en"},"es:cuerno":{"ef":2.2,"interval":1,"reps":1,"due":1791526011130,"lang":"es"},"es:harto":{"ef":2.5,"interval":3,"reps":1,"due":1791631805096,"lang":"es"},"es:golpe":{"ef":2.2,"interval":1,"reps":1,"due":1791525748416,"lang":"es"},"es:engañar":{"ef":2.5,"interval":3,"reps":1,"due":1791631765621,"lang":"es"},"es:tienda":{"ef":2.65,"interval":7,"reps":1,"due":1791977368706,"lang":"es"},"es:meterse":{"ef":2.5,"interval":3,"reps":1,"due":1791631762121,"lang":"es"},"es:dar fruto":{"ef":2.5,"interval":3,"reps":1,"due":1791631749003,"lang":"es"},"es:aparcar":{"ef":2.35,"interval":3,"reps":2,"due":1791698610905,"lang":"es"},"es:el cruce":{"ef":2.5,"interval":3,"reps":1,"due":1791631752621,"lang":"es"},"es:desplegar":{"ef":2.2,"interval":1,"reps":1,"due":1791525941906,"lang":"es"},"es:Crecer":{"ef":2.65,"interval":7,"reps":1,"due":1791999862676,"lang":"es"},"es:los he seguido":{"ef":2.2,"interval":1,"reps":1,"due":1791525903703,"lang":"es"},"es:pesar":{"ef":2.5,"interval":3,"reps":1,"due":1791654287829,"lang":"es"},"es:Ya":{"ef":2.65,"interval":7,"reps":1,"due":1791999871228,"lang":"es"},"es:Caliente":{"ef":2.65,"interval":7,"reps":1,"due":1791999868327,"lang":"es"},"es:fallecer":{"ef":2.35,"interval":3,"reps":2,"due":1791698767523,"lang":"es"},"es:desarrollar":{"ef":2.65,"interval":7,"reps":1,"due":1791999855157,"lang":"es"},"es:Pasado":{"ef":2.5,"interval":3,"reps":1,"due":1791654280779,"lang":"es"},"es:qué":{"ef":2.65,"interval":7,"reps":1,"due":1791999865476,"lang":"es"},"es:lado":{"ef":2.65,"interval":7,"reps":1,"due":1791999892846,"lang":"es"},"es:las que":{"ef":2.5,"interval":3,"reps":1,"due":1791654320700,"lang":"es"},"es:hermana":{"ef":2.65,"interval":7,"reps":1,"due":1791999922916,"lang":"es"},"es:en ningún momento":{"ef":2.5,"interval":3,"reps":1,"due":1791654314133,"lang":"es"},"es:sino que":{"ef":2.2,"interval":1,"reps":1,"due":1791525929490,"lang":"es"},"es:sano y salvo":{"ef":2.5,"interval":3,"reps":1,"due":1791654335619,"lang":"es"},"es:a trompadas":{"ef":2.2,"interval":1,"reps":1,"due":1791525877268,"lang":"es"},"es:búsqueda":{"ef":2.65,"interval":7,"reps":1,"due":1791999939434,"lang":"es"},"es:además":{"ef":2.5,"interval":3,"reps":1,"due":1791654296847,"lang":"es"},"es:ningún":{"ef":2.5,"interval":4,"reps":2,"due":1791784973036,"lang":"es"},"es:no sé":{"ef":2.5,"interval":3,"reps":1,"due":1791654346853,"lang":"es"},"es:puesto":{"ef":2.2,"interval":1,"reps":1,"due":1791526006996,"lang":"es"},"es:me parece bien":{"ef":2.5,"interval":3,"reps":1,"due":1791654386671,"lang":"es"},"es:predijo":{"ef":2.2,"interval":1,"reps":1,"due":1791525874350,"lang":"es"},"es:nuevo":{"ef":2.65,"interval":7,"reps":1,"due":1791999951335,"lang":"es"},"es:cuídate":{"ef":2.5,"interval":3,"reps":1,"due":1791654354919,"lang":"es"},"es:papel":{"ef":2.65,"interval":7,"reps":1,"due":1791999973073,"lang":"es"},"es:traer suerte":{"ef":2.2,"interval":1,"reps":1,"due":1791525933520,"lang":"es"},"es:castigado":{"ef":2.5,"interval":3,"reps":1,"due":1791654383806,"lang":"es"},"es:capacidad":{"ef":2.65,"interval":7,"reps":1,"due":1791999978305,"lang":"es"},"es:parte":{"ef":2.65,"interval":7,"reps":1,"due":1791999975488,"lang":"es"},"es:equivocarse":{"ef":2.65,"interval":7,"reps":1,"due":1792000087581,"lang":"es"},"es:desprestigiar":{"ef":2.5,"interval":3,"reps":1,"due":1791654509967,"lang":"es"},"es:maleta":{"ef":2.35,"interval":3,"reps":2,"due":1791698553783,"lang":"es"},"es:he bajado":{"ef":2.5,"interval":3,"reps":1,"due":1791654502885,"lang":"es"},"es:mantener":{"ef":2.65,"interval":7,"reps":1,"due":1792000126270,"lang":"es"},"es:ganar":{"ef":2.65,"interval":7,"reps":1,"due":1792000120469,"lang":"es"},"es:cerrar":{"ef":2.65,"interval":7,"reps":1,"due":1792000084165,"lang":"es"},"es:seguidores":{"ef":2.65,"interval":7,"reps":1,"due":1792000116951,"lang":"es"},"es:Pudrir":{"ef":2.65,"interval":7,"reps":1,"due":1792000123686,"lang":"es"},"es:anciana":{"ef":2.5,"interval":3,"reps":1,"due":1791654513419,"lang":"es"},"en:take for granted":{"ef":2.5,"interval":3,"reps":1,"due":1791667424573,"lang":"en"},"en:Limb":{"ef":2.35,"interval":3,"reps":2,"due":1791698918667,"lang":"en"},"en:scorched rice":{"ef":2.35,"interval":3,"reps":2,"due":1791698974570,"lang":"en"},"en:hold up":{"ef":2.35,"interval":3,"reps":2,"due":1791698961652,"lang":"en"},"en:Intercourse":{"ef":2.2,"interval":1,"reps":1,"due":1791526130501,"lang":"en"},"en:to be on edge":{"ef":2.2,"interval":1,"reps":1,"due":1791526185439,"lang":"en"},"en:become desensitised to":{"ef":2.35,"interval":3,"reps":2,"due":1791699031010,"lang":"en"},"en:not know the first thing about":{"ef":2.35,"interval":3,"reps":2,"due":1791698912648,"lang":"en"},"en:Conceited":{"ef":2.2,"interval":1,"reps":1,"due":1791526219656,"lang":"en"},"en:to cauterise":{"ef":2.2,"interval":2,"reps":2,"due":1791612536266,"lang":"en"},"es:cita":{"ef":2.35,"interval":1,"reps":1,"due":1791525981447,"lang":"es"},"es:anfitrión anfitriona":{"ef":2.35,"interval":1,"reps":1,"due":1791526003862,"lang":"es"},"es:golpear":{"ef":2.35,"interval":1,"reps":1,"due":1791525792238,"lang":"es"},"es:cine":{"ef":2.35,"interval":1,"reps":1,"due":1791525880567,"lang":"es"},"es:da igual":{"ef":2.35,"interval":1,"reps":1,"due":1791525915387,"lang":"es"},"es:agarrar":{"ef":2.35,"interval":1,"reps":1,"due":1791525974293,"lang":"es"},"es:asistir a":{"ef":2.65,"interval":7,"reps":1,"due":1792044418347,"lang":"es"},"es:pillado":{"ef":2.35,"interval":1,"reps":1,"due":1791526000845,"lang":"es"},"es:avisar":{"ef":2.35,"interval":1,"reps":1,"due":1791526024314,"lang":"es"},"es:salir":{"ef":2.5,"interval":3,"reps":1,"due":1791698758041,"lang":"es"},"en:thrill":{"ef":2.35,"interval":1,"reps":1,"due":1791528589023,"lang":"en"},"en:Ankle":{"ef":2.35,"interval":1,"reps":1,"due":1791528621676,"lang":"en"},"en:to bestow (sth on sb)":{"ef":2.35,"interval":1,"reps":1,"due":1791528606091,"lang":"en"},"en:Realm":{"ef":2.5,"interval":3,"reps":1,"due":1791701370622,"lang":"en"},"en:Crooked":{"ef":2.35,"interval":1,"reps":1,"due":1791528625660,"lang":"en"},"en:to ship [sb]":{"ef":2.35,"interval":1,"reps":1,"due":1791528618842,"lang":"en"},"en:to fine":{"ef":2.5,"interval":3,"reps":1,"due":1791701360804,"lang":"en"},"en:to pry into":{"ef":2.35,"interval":1,"reps":1,"due":1791528634260,"lang":"en"},"en:be drawn to":{"ef":2.5,"interval":3,"reps":1,"due":1791701429860,"lang":"en"},"en:scorched earth":{"ef":2.35,"interval":1,"reps":1,"due":1791528640011,"lang":"en"},"es:siguiendo":{"ef":2.35,"interval":1,"reps":1,"due":1791555839977,"lang":"es"},"es:hacer la maleta":{"ef":2.35,"interval":1,"reps":1,"due":1791555869030,"lang":"es"},"es:aún":{"ef":2.65,"interval":7,"reps":1,"due":1792074272814,"lang":"es"},"es:maletero":{"ef":2.65,"interval":7,"reps":1,"due":1792074263296,"lang":"es"},"es:jefa":{"ef":2.65,"interval":7,"reps":1,"due":1792074251628,"lang":"es"},"es:Certificado":{"ef":2.65,"interval":7,"reps":1,"due":1792074260829,"lang":"es"},"es:A pesar de que":{"ef":2.35,"interval":1,"reps":1,"due":1791555882114,"lang":"es"},"es:caminar":{"ef":2.65,"interval":7,"reps":1,"due":1792074258028,"lang":"es"},"es:capaz":{"ef":2.5,"interval":3,"reps":1,"due":1791728649395,"lang":"es"},"es:Camino":{"ef":2.65,"interval":7,"reps":1,"due":1792074244228,"lang":"es"},"es:lluvia":{"ef":2.35,"interval":1,"reps":1,"due":1791555908516,"lang":"es"},"es:Mano":{"ef":2.65,"interval":7,"reps":1,"due":1792074294882,"lang":"es"},"es:claro que":{"ef":2.35,"interval":1,"reps":1,"due":1791555904333,"lang":"es"},"es:arriba":{"ef":2.35,"interval":1,"reps":1,"due":1791555892382,"lang":"es"},"es:asistente":{"ef":2.65,"interval":7,"reps":1,"due":1792074286881,"lang":"es"},"es:al parecer":{"ef":2.35,"interval":1,"reps":1,"due":1791564036478,"lang":"es"},"es:fruto":{"ef":2.5,"interval":3,"reps":1,"due":1791736815260,"lang":"es"},"es:a propósito":{"ef":2.35,"interval":1,"reps":1,"due":1791564033328,"lang":"es"},"es:Hielo":{"ef":2.65,"interval":7,"reps":1,"due":1792074297212,"lang":"es"},"es:echar una siesta":{"ef":2.35,"interval":1,"reps":1,"due":1791564023677,"lang":"es"}},"es_xp":4110,"ln_xp":947,"en_xp":680,"score":0,"streak":0,"mastered":[],"es_mastered":[],"ln_mastered":[],"en_mastered":[],"aura_map":{}};
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
  {es:"pedir salir a alguien",fr:"Demander à qqn de sortir avec soi"},
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
      srsData[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang };
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
        srsData[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang };
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


function srsLoad() {
  return JSON.parse(localStorage.getItem('srs_data') || '{}');
}
function srsSave(data) {
  localStorage.setItem('srs_data', JSON.stringify(data));
}

function srsKey(lang, word) {
  return `${lang}:${word}`;
}

// Add a card to SRS pile if not already there
function srsAddCard(lang, word) {
  const data = srsLoad();
  const k = srsKey(lang, word);
  if(!data[k]) {
    data[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang };
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
    showToast('⏸️ Mode simulation désactivé', 'correct-toast');
  }
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
    const fr = cardData ? cardData.fr : '—';
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
function srsGetCardData(lang, word) {
  const deck = getDeckForLang(lang);
  const f = lang === 'es' ? 'es' : lang === 'ln' ? 'ln' : 'en';
  const exact = deck.find(c => c[f] === word);
  if(exact) return exact;
  // Fallback: card saved under an older spelling of the word
  const n = srsNorm(word);
  const matches = deck.filter(c => srsNorm(c[f]) === n);
  return matches.length === 1 ? matches[0] : undefined;
}
// One-time migration: rename SRS keys saved under an old spelling to the current deck spelling
function srsMigrateKeys() {
  const data = srsLoad(); let changed = 0;
  for(const key of Object.keys(data)) {
    const lang = key.split(':')[0]; const word = key.split(':').slice(1).join(':');
    const f = lang === 'es' ? 'es' : lang === 'ln' ? 'ln' : 'en';
    const deck = getDeckForLang(lang);
    if(deck.find(c => c[f] === word)) continue;
    const card = srsGetCardData(lang, word);
    if(!card) continue;
    const newKey = `${lang}:${card[f]}`;
    if(data[newKey]) { if((data[key].reps || 0) > (data[newKey].reps || 0)) data[newKey] = data[key]; }
    else data[newKey] = data[key];
    delete data[key]; changed++;
  }
  if(changed) { srsSave(data); console.log('[Aprende] SRS keys migrated:', changed); }
}

function srsRenderStack() {
  const stack = document.getElementById('srs-stack');
  stack.innerHTML = '';
  srsState.revealed = false;
  document.getElementById('srs-grade-area').style.display = 'none';

  const visible = srsState.queue.slice(0, 3);
  document.getElementById('srs-counter').textContent = `${srsState.queue.length} à réviser`;

  visible.forEach((card, i) => {
    let data = srsGetCardData(card.lang, card.word);
    // Fallback: if card no longer in deck, still render using what the SRS stored
    if(!data) {
      data = {
        [card.lang]: card.word,
        es: card.lang === 'es' ? card.word : '',
        ln: card.lang === 'ln' ? card.word : '',
        en: card.lang === 'en' ? card.word : '',
        fr: '(traduction non disponible)'
      };
    }
    const front = card.lang === 'es' ? data.es : card.lang === 'ln' ? data.ln : data.en;
    const flag = SHUF_FLAGS[card.lang];

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
    el.style.background = `linear-gradient(135deg, rgba(0,0,0,.72), rgba(0,0,0,.88)), ${langBg[card.lang]}`;
    el.style.border = `2px solid ${langBorder[card.lang]}`;

    if(i === 0) {
      // Top card only: full content + click handler
      el.innerHTML = `
        <div style="font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.6)">${flag}${card.lang === 'en' ? enLevelBadge(enLevelOf(data)) : ''}${card.leech ? '<span title="Sangsue : oubliée 8 fois ou plus" style="margin-left:.4rem;padding:.12rem .45rem;border-radius:6px;font-size:.62rem;font-weight:800;letter-spacing:.05em;background:rgba(255,23,68,.2);color:#ff6b81;border:1px solid rgba(255,23,68,.6)">🩸 SANGSUE</span>' : ''}${srsIsIntraday(card) ? '<span style="margin-left:.4rem;padding:.12rem .45rem;border-radius:6px;font-size:.62rem;font-weight:800;background:rgba(255,235,59,.15);color:#ffeb3b;border:1px solid rgba(255,235,59,.5)">⏳ APPRENTISSAGE</span>' : ''}</div>
        <div class="question-word srs-front-text" style="font-size:clamp(1.6rem,5.5vw,2.4rem);color:#fff;text-align:center;line-height:1.2;text-shadow:0 2px 12px rgba(0,0,0,.5)">${front}</div>
        <div class="srs-back-text" style="display:none;border-top:1px solid rgba(255,255,255,.2);padding-top:.8rem;width:100%;text-align:center;animation:fadeIn .3s ease">
          <div style="font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;color:var(--accent2);margin-bottom:.4rem">🇫🇷 Traduction</div>
          <div style="font-size:1.3rem;font-weight:700;color:#fff">${data.fr}</div>${cardExampleHTML(card.lang, data)}
        </div>
        <div class="srs-tap-text" style="font-size:.75rem;color:rgba(255,255,255,.55);opacity:.9">↓ Tap pour révéler</div>`;
      el.onclick = () => srsReveal();
    } else {
      // Below cards: empty (just the colored background — no bleeding text)
      el.innerHTML = '';
    }
    stack.appendChild(el);
  });

  srsState.currentCard = visible[0];
  srsState.shownAt = Date.now();
  // Update interval previews
  if(srsState.currentCard) {
    const data = srsLoad()[srsState.currentCard.key];
    [0,1,2,3].forEach(g => {
      document.getElementById(`srs-int-${g}`).textContent = srsFormatInterval(data, g, srsState.currentCard.key);
    });
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
  shuffle([...deck]).forEach(card => {
    if(added >= 10) return;
    const word = lang === 'es' ? card.es : lang === 'ln' ? card.ln : card.en;
    const k = srsKey(lang, word);
    if(!data[k]) {
      data[k] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang };
      added++;
    }
  });
  srsSave(data);
  showToast(`✨ +${added} cartes ajoutées`, 'correct-toast');
  srsRefresh();
}

// ── Historique des révisions (comme le « revlog » d'Anki) ──
// entrée : [clé, horodatage ms, note 0-3, type (0 nouvelle · 1 apprentissage · 2 révision · 3 réapprentissage), intervalle j, durée ms]
function srsRevlogLoad() { try { return JSON.parse(localStorage.getItem('srs_revlog') || '[]'); } catch(e) { return []; } }
function srsRevlogSave(log) { try { localStorage.setItem('srs_revlog', JSON.stringify(log)); } catch(e) { console.warn('[Aprende] revlog non sauvegardé', e); } }
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
  const limit = filter ? Infinity : Math.max(0, srsNewPerDay() - srsIntroducedToday(lang));
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
    return;
  }
  document.getElementById('srs-empty').style.display = 'none';
  document.getElementById('srs-active').style.display = 'block';
  srsRenderStack();
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
function crsDeckHas(lang, word) { const n = srsNorm(word); return getDeckForLang(lang).some(c => c[lang] === word || srsNorm(c[lang]) === n); }
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
    if(!data[key]) { data[key] = { ef: 2.5, interval: 0, reps: 0, due: Date.now(), lang, st: 'new' }; ns++; }
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
  getDeckForLang(lang).forEach(c => out.push([c[lang], c.fr]));
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
    const q = mode === 'test' ? crsMakeTest(lang, u) : crsMakeLesson(lang, u, n);
    const graded = q.filter(x => x.t !== 'intro' && x.t !== 'tip').length;
    crs = { lang, u, n, mode, q, i: 0, graded: 0, ok: 0, mistakes: 0, sel: null, built: [], checked: false, ko: false,
            replay: mode === 'lesson' && n < crsDone(lang, u), bossMax: graded, bossHP: graded, unit };
  }
  crsClearResume();
  const bossBar = document.getElementById('ls-boss');
  bossBar.style.display = (n === 4 && mode !== 'test') ? 'flex' : 'none';
  document.getElementById('ls-boss-name').textContent = '👹 Gardien : ' + (unit ? unit.t : '');
  document.getElementById('ls-boss-fill').style.width = resume ? Math.round(100 * crs.bossHP / Math.max(1, crs.bossMax)) + '%' : '100%';
  showScreen('screen-lesson');
  dgStartSession();
  crsShow();
}
function crsSaveResume() {
  if(!crs || crs.finished || crs.mode === 'test' || crs.i === 0) return;
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
    if(!confirm('Quitter la leçon ? Tu pourras reprendre là où tu en étais.')) { crsClearResume(); return; }
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
    h = `<div class="ls-kind">💡 Astuce de grammaire</div><div class="ls-h">${crsEsc(g.t)}</div><div class="tipbox">${crsEsc(g.tip)}</div>`;
    crsSetBtn('Continuer', true);
  } else if(ex.t === 'intro') {
    const w = ex.w;
    h = `<div class="ls-kind">🆕 Nouveau mot</div><div class="intro-card">
      ${spk ? `<button class="spk" style="float:right" onclick="crsSpeak('${L}', crs.q[crs.i].w[0])">🔊</button>` : ''}
      <div class="iw">${crsEsc(w[0])}</div><div class="if">${crsEsc(w[1])}</div>
      ${w[2] ? `<div class="ie">« ${crsEsc(w[2])} »${spk ? ` <button class="spk" onclick="crsSpeak('${L}', crs.q[crs.i].w[2])">🔊</button>` : ''}</div><div class="ief">${crsEsc(w[3])}</div>` : ''}
      ${w[4] ? '<div style="margin-top:.6rem"><span class="unv">exemple à valider avec la famille</span></div>' : ''}
    </div>`;
    crsSetBtn('Continuer', true);
    if(spk) setTimeout(() => crsSpeak(L, w[0]), 250);
  } else if(ex.t === 'tf' || ex.t === 'ft' || ex.t === 'listen' || ex.t === 'fill') {
    const w = ex.w;
    if(!ex.opts) {
      if(ex.t === 'tf') { ex.ans = w[1]; ex.opts = shuffle([w[1], ...crsDistract(L, w, 1, 3, crs.unit ? crs.unit.w : [])]); }
      else { ex.ans = w[0]; ex.opts = shuffle([w[0], ...crsDistract(L, w, 0, 3, crs.unit ? crs.unit.w : [])]); }
    }
    if(ex.t === 'tf') h = `<div class="ls-kind">Vocabulaire</div><div class="ls-h">Que veut dire…</div><div class="ls-prompt">${spk ? `<button class="spk" onclick="crsSpeak('${L}', crs.q[crs.i].w[0])">🔊</button>` : ''}<span class="pw">${crsEsc(w[0])}</span></div>`;
    else if(ex.t === 'ft') h = `<div class="ls-kind">Traduction</div><div class="ls-h">Comment dit-on « ${crsEsc(w[1])} » ?</div>`;
    else if(ex.t === 'listen') h = `<div class="ls-kind">Écoute</div><div class="ls-h">Touche ce que tu entends</div><button class="ls-big-spk" onclick="crsSpeak('${L}', crs.q[crs.i].w[0])">🔊</button>`;
    else {
      const i = crsFillIdx(w), blank = w[2].slice(0, i) + '_____' + w[2].slice(i + w[0].length);
      h = `<div class="ls-kind">Complète la phrase</div><div class="ls-h">${crsEsc(blank)}</div><div style="color:var(--muted);font-weight:700;margin:-.5rem 0 1rem">${crsEsc(w[3])}</div>`;
    }
    h += crsOptsHTML(ex.opts);
    crsSetBtn('Vérifier', false);
    if(ex.t === 'listen') setTimeout(() => crsSpeak(L, w[0]), 250);
    if(ex.t === 'tf' && spk) setTimeout(() => crsSpeak(L, w[0]), 250);
  } else if(ex.t === 'gq') {
    const g = ex.g;
    if(!ex.opts) { ex.ans = g[1][g[2]]; ex.opts = shuffle(g[1]); }
    h = `<div class="ls-kind">📘 Grammaire</div><div class="ls-h">${crsEsc(g[0])}</div>` + crsOptsHTML(ex.opts);
    crsSetBtn('Vérifier', false);
  } else if(ex.t === 'build') {
    const w = ex.w;
    if(!ex.tiles) {
      const toks = crsTok(w[2]);
      const others = []; (crs.unit ? crs.unit.w : []).forEach(x => { if(x !== w) crsTok(x[2]).forEach(t => others.push(t)); });
      const have = new Set(toks.map(crsTokN));
      const extra = shuffle(others).filter(t => !have.has(crsTokN(t)) && crsTokN(t)).slice(0, 2);
      ex.tiles = shuffle(toks.concat(extra));
    }
    h = `<div class="ls-kind">Construis la phrase</div><div class="ls-h">Traduis : « ${crsEsc(w[3])} »</div>
      <div class="build-ans" id="ls-ans"></div><div class="build-bank" id="ls-bank">${ex.tiles.map((t, i) => `<button class="tile" id="tl-${i}" onclick="crsTile(${i})">${crsEsc(t)}</button>`).join('')}</div>`;
    crsSetBtn('Vérifier', false);
  } else if(ex.t === 'match') {
    if(!ex.left) { ex.left = shuffle(ex.ws.map((w, i) => i)); ex.right = shuffle(ex.ws.map((w, i) => i)); ex.found = 0; ex.err = 0; ex.pick = null; }
    h = `<div class="ls-kind">Associe les paires</div><div class="ls-h">Touche les paires qui vont ensemble</div><div class="match">
      ${ex.left.map((wi, r) => `<button class="opt" id="ml-${wi}" onclick="crsMatch('l',${wi})">${crsEsc(ex.ws[wi][0])}</button><button class="opt" id="mr-${ex.right[r]}" onclick="crsMatch('r',${ex.right[r]})">${crsEsc(ex.ws[ex.right[r]][1])}</button>`).join('')}</div>`;
    crsSetBtn('Vérifier', false);
  }
  // NEW exercise types: dictée, traduction libre, lire et répondre
  if(!h) {
    if(ex.t === 'dictee') {
      const w = ex.w;
      h = `<div class="ls-kind">🎧 Dictée</div><div class="ls-h">Écoute et tape ce que tu entends</div>
        <button class="ls-big-spk" onclick="crsSpeak('${L}', crs.q[crs.i].w[0])">🔊</button>
        <div style="margin-top:1rem"><input type="text" class="dict-input" id="ls-dict-inp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Tape le mot…"></div>
        <div class="dict-hint">Écoute bien, puis écris le mot en ${CRS_META[L].name.toLowerCase()}</div>`;
      crsSetBtn('Vérifier', true);
      setTimeout(() => { crsSpeak(L, w[0]); document.getElementById('ls-dict-inp')?.focus(); }, 300);
    } else if(ex.t === 'freetr') {
      const w = ex.w;
      h = `<div class="ls-kind">✍️ Traduction libre</div><div class="ls-h">Traduis en ${CRS_META[L].name.toLowerCase()} :</div>
        <div class="ls-prompt"><span class="pw">${crsEsc(w[1])}</span></div>
        <div style="margin-top:1rem"><input type="text" class="dict-input" id="ls-freetr-inp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Ta traduction…"></div>
        <div class="dict-hint">Tape ta traduction (les petites fautes d'accent sont tolérées)</div>`;
      crsSetBtn('Vérifier', true);
      setTimeout(() => document.getElementById('ls-freetr-inp')?.focus(), 200);
    } else if(ex.t === 'readctx') {
      const w = ex.w;
      if(!ex.opts) {
        ex.ans = w[1];
        ex.opts = shuffle([w[1], ...crsDistract(L, w, 1, 3, crs.unit ? crs.unit.w : [])]);
      }
      const sentence = w[2] || '';
      const highlighted = sentence.replace(new RegExp('(' + w[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'i'), '<u style="color:var(--accent2);font-weight:800;text-decoration:underline">$1</u>');
      h = `<div class="ls-kind">📖 Lire et répondre</div><div class="ls-h">Que veut dire le mot souligné ?</div>
        <div class="ls-prompt" style="font-size:1.05rem;line-height:1.6">${highlighted}</div>
        <div style="color:var(--muted);font-weight:700;margin:-.3rem 0 1rem;font-size:.85rem">${crsEsc(w[3])}</div>` + crsOptsHTML(ex.opts);
      crsSetBtn('Vérifier', false);
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
  crsSetBtn('Vérifier', true);
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
    crsFoot('ok', `<div class="ft">✅ ${CRS_PRAISE[Math.floor(Math.random() * CRS_PRAISE.length)]}</div>${extra ? `<div class="fx">${crsEsc(extra)}</div>` : ''}`);
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
    crsFoot('ko', `<div class="ft">❌ ${corr ? 'Bonne réponse :' : 'Presque !'}</div>${corr ? `<div class="fx"><b>${crsEsc(corr)}</b></div>` : ''}${extra ? `<div class="fx">${crsEsc(extra)}</div>` : ''}`);
  }
  crsBar();
  crsSetBtn('Continuer', true);
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
    xp = (n === 4 ? 30 : n === 3 ? 20 : 15) + (acc === 100 ? 5 : 0);
    gold = n === 4 ? 20 : n === 3 ? 10 : 6;
    if(crs.replay) { xp = Math.round(xp / 2); gold = Math.round(gold / 2); notes.push('Entraînement : récompenses réduites de moitié.'); }
    else {
      crsSetDone(lang, u, n + 1);
      const W = COURSES[lang].units[u].w, k = Math.ceil(W.length / 3);
      const learn = n < 3 ? W.slice(n * k, (n + 1) * k) : n === 4 ? W : [];
      if(learn.length) { const r = crsLearnWords(lang, learn); if(r.ns) notes.push(`🧠 ${r.ns} carte${r.ns > 1 ? 's' : ''} ajoutée${r.ns > 1 ? 's' : ''} à ta révision SRS${r.nd ? ` (dont ${r.nd} nouveau${r.nd > 1 ? 'x' : ''} mot${r.nd > 1 ? 's' : ''} dans le deck)` : ''}`); }
      if(n === 4) { title = '🏆 Gardien vaincu !'; notes.push('Unité terminée : le coffre est débloqué.'); try { confetti('big'); } catch(e) {} }
    }
    if(!title) title = acc === 100 ? '🌟 Leçon parfaite !' : 'Leçon terminée !';
    if(acc === 100) crsSetJ('badge_perfect', true);
    if(rpg) rpg.dayLessons++;
  }
  crsAddLangXP(lang, xp);
  if(rpg) { rpgAddGold(gold); rpgSync(); }
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
  crsSetBtn('Continuer', true);
  setTimeout(badgeCheck, 500);
}

// ── Coffre ──
function crsOpenChest(lang, u) {
  crsSetDone(lang, u, CRS_NODES);
  const gold = 15 + Math.floor(Math.random() * 26);
  const potion = Math.random() < .3;
  if(rpg) { rpgAddGold(gold); if(potion) rpgHeal(rpg.cls === 'healer' ? 25 : 15); rpgLog(`🎁 Coffre : +${gold} or${potion ? ' + potion' : ''}`); rpgSave(); }
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
    <button class="gbtn ghost" onclick="crsGuide('${lang}',${u})">📘 Guide de l'unité</button>`);
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
  { id: 'rev', e: '🧠', n: 'Réviser 20 cartes SRS', max: 20 },
  { id: 'lesson', e: '🗺️', n: 'Terminer 1 leçon du parcours', max: 1 },
  { id: 'xp', e: '⚡', n: 'Gagner 100 XP', max: 100 },
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
  rpg = crsJ('rpg', null);
  const lx = rpgLangXP(), revlog = srsRevlogLoad();
  if(!rpg || typeof rpg !== 'object') {
    // ── Guard Firestore : si le cache SYNC contient des données mais rpg est null,
    // c'est un problème de parsing, PAS un vrai nouveau joueur → on ne crée pas de héros
    if(typeof SYNC !== 'undefined' && SYNC.cache && Object.keys(SYNC.cache).length > 5) {
      console.error('[RPG] ⚠️ rpg null/invalide malgré', Object.keys(SYNC.cache).length, 'clés en cache SYNC.');
      console.error('[RPG] Raw rpg value:', typeof SYNC.cache['rpg'], SYNC.cache['rpg'] ? String(SYNC.cache['rpg']).substring(0, 200) : SYNC.cache['rpg']);
      // Héros temporaire en mémoire — on ne sauvegarde PAS pour ne pas écraser Firestore
      const tot = lx.es + lx.ln + lx.en;
      rpg = { lvl: 1, xp: 0, hp: RPG_MAXHP, gold: 0, cls: null, streak: 0, best: 0, streakDay: null, freezes: 0,
              day: rpgDayKey(), dayXP: 0, dayLessons: 0, claimed: [], seen: lx, revSeen: revlog.length, boss: null, bossN: 0,
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
            day: rpgDayKey(), dayXP: 0, dayLessons: 0, claimed: [], seen: lx, revSeen: revlog.length, boss: null, bossN: 0,
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
function rpgGainXP(n) { if(rpg.cls === 'mage') n = Math.round(n * 1.2); rpg.dayXP += n; rpgGainRaw(n); }
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
  const rev = srsRevlogLoad().filter(r => r[1] >= today).length;
  return { rev, lesson: rpg.dayLessons, xp: rpg.dayXP };
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
  rpg.day = today; rpg.dayXP = 0; rpg.dayLessons = 0; rpg.claimed = [];
}
function rpgSync(silent) {
  if(!rpg) return;
  rpgCron();
  const lx = rpgLangXP(); let gained = 0;
  ['es', 'ln', 'en'].forEach(l => { const d = lx[l] - (rpg.seen[l] || 0); if(d > 0) gained += d; });
  rpg.seen = lx;
  if(gained > 0) {
    rpgGainXP(gained);
    rpg.goldFrac = (rpg.goldFrac || 0) + gained / 10;
    const g = Math.floor(rpg.goldFrac); if(g) { rpg.goldFrac -= g; rpgAddGold(g); }
  }
  const log = srsRevlogLoad();
  if(log.length > rpg.revSeen) { const hits = log.slice(rpg.revSeen).filter(r => r[2] > 0).length; if(hits) rpgBossHit(hits, true); }
  rpg.revSeen = log.length;
  const ds = rpgDailyState();
  RPG_DAILIES.forEach(d => {
    if(ds[d.id] >= d.max && !rpg.claimed.includes(d.id)) {
      rpg.claimed.push(d.id); rpgAddGold(10); rpgGainRaw(15, silent); rpgBossHit(5, true);
      // Track daily goal completions for badge
      const dgDone = dgGet(); if(dgDone['done_' + dgToday()]) { crsSetJ('badge_dg_count', (crsJ('badge_dg_count', 0)) + 1); }
      rpgLog(`✅ Quotidienne : ${d.n} (+10 or, +15 XP)`);
      if(!silent) showToast(`✅ ${d.n} : +10 🪙`, 'correct-toast');
    }
  });
  const today = rpgDayKey();
  const active = rpg.dayXP >= 10 || rpg.dayLessons > 0 || ds.rev > 0;
  if(active && rpg.streakDay !== today) {
    const y = rpgDayKey(Date.now() - 86400000);
    rpg.streak = rpg.streakDay === y ? rpg.streak + 1 : 1;
    rpg.streakDay = today; rpg.best = Math.max(rpg.best || 0, rpg.streak);
    if(!silent) showToast(`🔥 Série : ${rpg.streak} jour${rpg.streak > 1 ? 's' : ''} !`, 'correct-toast');
  }
  rpgSave();
  crsRefreshBars();
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
  return RPG_DAILIES.map(d => {
    const v = Math.min(d.max, Math.floor(ds[d.id])), ok = rpg.claimed.includes(d.id);
    return `<div class="dl${ok ? ' ok' : ''}"><span class="ck">${ok ? '✓' : d.e}</span><span class="dlt">${d.n}</span><span class="dlp">${v} / ${d.max}</span></div>`;
  }).join('');
}
function renderHub() {
  if(!rpg) return;
  const b = RPG_BOSSES[rpg.boss.i];
  document.getElementById('hub-hero').innerHTML = `<div class="hub-ava">${rpgAvatar()}<b>${rpg.lvl}</b></div><div class="hub-bars"><div class="hub-name"><span>Niveau ${rpg.lvl}${rpg.cls ? ' · ' + RPG_CLASSES[rpg.cls].n : ''}</span><small>Héros ›</small></div>${rpgBars()}</div>`;
  document.getElementById('hub-chips').innerHTML = `<span class="chip">🔥 ${rpg.streak} j</span><span class="chip">🪙 ${Math.floor(rpg.gold)}</span><span class="chip">🧊 ${rpg.freezes}</span><span class="chip">${b[0]} ${Math.ceil(rpg.boss.hp)} PV</span>`;
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
  document.getElementById('hub-dailies').innerHTML = `<div class="hub-h"><span>📋 Quotidiennes</span><span style="font-size:.75rem;color:var(--muted)">+10 🪙 chacune · −5 PV si oubliée</span></div>${rpgDailiesHTML()}${rpg.cronMsg ? `<div class="tipbox" style="margin-top:.5rem;font-size:.8rem">${crsEsc(rpg.cronMsg)}</div>` : ''}`;
  if(rpg.isNew) {
    rpg.isNew = false; rpgSave();
    setTimeout(() => crsModal(`<div style="text-align:center"><div style="font-size:3.5rem">🧑🏾⚔️</div><div class="cm-t">Ton héros est né !</div>
      <div class="cm-s">Tes ${rpg.seen.es + rpg.seen.ln + rpg.seen.en} XP déjà gagnés te placent directement au <b>niveau ${rpg.lvl}</b>, avec ${Math.floor(rpg.gold)} pièces d'or.<br><br>
      🗺️ Chaque langue a maintenant un <b>parcours</b> par unités jusqu'à ton objectif.<br>📋 3 <b>quotidiennes</b> te rapportent de l'or ; les oublier coûte des PV.<br>👹 Chaque bonne réponse (leçons et SRS) frappe le <b>boss de quête</b>.<br>🏪 Dépense ton or en potions, gels de série ou <b>tes propres récompenses</b>.</div>
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
const CRS_TAB_SCREENS = { 'screen-path': 'path', 'home': 'games', 'home-ln': 'games', 'home-en': 'games', 'screen-hero': 'hero', 'screen-shop': 'shop' };
showScreen = function(id) {
  crsOrigShowScreen(id);
  const tb = document.getElementById('crs-tabbar');
  if(tb) {
    tb.classList.toggle('show', id in CRS_TAB_SCREENS);
    tb.querySelectorAll('.tb-btn').forEach(b => b.classList.toggle('on', b.dataset.tab === CRS_TAB_SCREENS[id]));
  }
  crsTheme(id === 'lang-select' ? 'hub' : currentLang);
  document.body.classList.toggle('t-sky', ['screen-path', 'screen-lesson', 'home-ln', 'screen-hero', 'screen-shop'].includes(id));
  if(rpg) rpgSync(id === 'screen-lesson');
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
  document.addEventListener('visibilitychange', () => { if(!document.hidden && rpg) { rpgSync(); const ls = document.getElementById('lang-select'); if(ls && ls.classList.contains('active')) renderHub(); } });
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
const DG_OPTIONS = [5, 10, 15, 20]; // minutes
function dgGet() { return crsJ('daily_goal', { target: 10, sessions: {} }); }
function dgSave(dg) { crsSetJ('daily_goal', dg); }
function dgToday() { return rpgDayKey(); }
function dgAddTime(sec) {
  const dg = dgGet(), k = dgToday();
  dg.sessions[k] = (dg.sessions[k] || 0) + sec;
  // Purge old days
  const keys = Object.keys(dg.sessions).sort().slice(-7);
  const clean = {}; keys.forEach(d => clean[d] = dg.sessions[d]);
  dg.sessions = clean;
  dgSave(dg);
  dgCheckComplete(dg);
}
function dgCheckComplete(dg) {
  const k = dgToday(), done = (dg.sessions[k] || 0) / 60;
  if(done >= dg.target && !dg['done_' + k]) {
    dg['done_' + k] = true; dgSave(dg);
    showToast('🎯 Objectif quotidien atteint !', 'correct-toast');
    try { confetti('normal'); } catch(e) {}
    if(rpg) { rpgAddGold(5); rpgGainRaw(10); rpgLog('🎯 Objectif quotidien atteint'); rpgSave(); }
  }
}
function dgSetTarget(t) {
  const dg = dgGet(); dg.target = t; dgSave(dg);
  dgRenderWidget();
}
function dgRenderWidget() {
  const el = document.getElementById('dg-widget'); if(!el) return;
  const dg = dgGet(), k = dgToday(), done = Math.floor((dg.sessions[k] || 0) / 60);
  const pct = Math.min(100, Math.round(100 * done / dg.target));
  const complete = done >= dg.target;
  el.innerHTML = `<div class="dg-wrap">
    <div class="dg-row"><span>🎯 Objectif quotidien</span><span style="color:${complete ? 'var(--success)' : 'var(--accent2)'};font-weight:700">${done} / ${dg.target} min ${complete ? '✅' : ''}</span></div>
    <div class="dg-bar"><i style="width:${pct}%"></i></div>
    <div class="dg-pick">${DG_OPTIONS.map(m => `<button class="${dg.target === m ? 'on' : ''}" onclick="dgSetTarget(${m})">${m} min</button>`).join('')}</div>
  </div>`;
}
// Session timer
let _dgTimer = null, _dgStart = 0;
function dgStartSession() {
  if(_dgTimer) return;
  _dgStart = Date.now();
  _dgTimer = setInterval(() => {
    const elapsed = Math.floor((Date.now() - _dgStart) / 1000);
    if(elapsed >= 30) { // save every 30s
      dgAddTime(elapsed);
      _dgStart = Date.now();
    }
  }, 30000);
}
function dgEndSession() {
  if(!_dgTimer) return;
  clearInterval(_dgTimer); _dgTimer = null;
  const elapsed = Math.floor((Date.now() - _dgStart) / 1000);
  if(elapsed > 2) dgAddTime(elapsed);
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
  dgStartSession();
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
  dgStartSession();
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

  // Re-read state from cache (populated by sync.js)
  state.xp = parseInt(localStorage.getItem('xp')||'0');
  state.streak = parseInt(localStorage.getItem('streak')||'0');
  state.mastered = JSON.parse(localStorage.getItem('mastered')||'[]');

  updateHomeStats();
  renderJournal('es');
  srsMigrateAllToFsrs(); // SM-2 → FSRS (une seule fois, avec copie de sécurité)
  srsMigrateKeys(); // Fix cards saved under an old spelling
  updateSRSDueBadges(); // Show SRS due counts on language selector badges

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
document.addEventListener('visibilitychange', () => { if(!document.hidden) updateSRSDueBadges(); });
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

  // Daily reminder at set time
  if(h === s.reminderHour && m === s.reminderMin && !alreadySent) {
    const dg = dgGet();
    const todayMin = Math.floor((dg.sessions[todayKey] || 0) / 60);
    if(todayMin < dg.target) {
      sendLocalNotification(
        '¡Aprende! 🎓',
        `C'est l'heure de réviser ! Tu as fait ${todayMin}/${dg.target} min aujourd'hui. Ta série de ${parseInt(localStorage.getItem('streak')||'0')} jours t'attend 🔥`,
        'daily-reminder'
      );
      localStorage.setItem('notif_sent_' + todayKey, '1');
    }
  }

  // Streak danger alert at 22:00
  if(s.streakAlert && h === 22 && m === 0 && !localStorage.getItem('streak_alert_' + todayKey)) {
    const dg = dgGet();
    const todayMin = Math.floor((dg.sessions[todayKey] || 0) / 60);
    const streak = parseInt(localStorage.getItem('streak') || '0');
    if(todayMin < 1 && streak > 0) {
      sendLocalNotification(
        '🔥 Streak en danger !',
        `Tu n'as pas révisé aujourd'hui ! Ta série de ${streak} jours va se briser à minuit !`,
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