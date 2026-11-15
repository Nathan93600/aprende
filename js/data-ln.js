// ¡Aprende! — js/data-ln.js : Paquet lingala (LINGALA) et jeux lingala
// ═══════════════════════════════════════════════
// LINGALA DATA
// ═══════════════════════════════════════════════
// Paquet vide (copie de l'appli repartie de zéro) : les jeux prennent les mots des cours.
function deckFromCourse(course, f) { const out = [], seen = new Set(); ((course || {}).units || []).forEach(u => (u.w || []).forEach(w => { const k = String(w[0]).toLowerCase(); if(seen.has(k)) return; seen.add(k); out.push(f(w)); })); return out; }
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
if(!LINGALA.length && typeof COURSE_LN !== 'undefined') LINGALA.push(...deckFromCourse(COURSE_LN, w => ({ ln: w[0], fr: w[1], ex_ln: w[2] || '', ex_fr: w[3] || '' })));

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
