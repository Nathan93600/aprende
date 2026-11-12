// ¡Aprende! — Corrections multi-variantes pour la traduction libre (freetr)
// Clé = mot cible exact (w[0]) du cours.
//   alt : [[autre réponse acceptée, nuance (optionnelle)], ...]  -> compté juste
//   tip : astuce pour retenir (optionnelle), affichée dans la fiche du mot
//   err : [[erreur typique de francophone, explication], ...]    -> compté faux, avec explication ciblée
//         (préfixe "*" = l'erreur est détectée n'importe où dans la réponse)
// Rempli à chaque « génère » du vendredi pour les mots de la semaine.
// Le mot de la semaine, affiché dans le bilan. Réécrit à chaque « génère ».
const CRS_WEEK = {
  date: "13/11/2026",
  notes: [
    "Grosse semaine : 1 458 révisions, environ 80 % de bonnes réponses en espagnol comme en anglais. Garde ce rythme, mais limite les nouvelles cartes tant que « À revoir » dépasse 100.",
    "Tes cartes les plus ratées sont des mots anglais abstraits : arguably, dwell, relentless, upheaval, gravitate toward. Écris une phrase sur ta propre vie avec chacun : un mot que tu as utilisé toi-même se retient bien mieux.",
    "Espagnol : acordarse revient 7 fois en « Encore ». Retiens la structure : me acuerdo DE ti (pronominal + de), comme se souvenir de. Sans « me », c'est acordar = se mettre d'accord.",
    "Plantilla et agacharse sont tombés 4 fois chacun depuis le début : plantilla = l'effectif (d'une équipe, d'une entreprise), agacharse = se baisser (¡agáchate!)."
  ]
};

const CRS_FB = {
  en: {
    // ── Adverbial phrases — Opinion ──
    "as far as I'm concerned": {
      alt: [["as far as I am concerned"], ["personally", "plus court, neutre"], ["as for me", "plus léger, pour enchaîner après l'avis de quelqu'un d'autre"], ["speaking for myself", "insiste : je ne parle que pour moi"], ["for my part", "plus soutenu"]],
      err: [["as far as I concern", "« concerned » est un participe : as far as I'M concernED."], ["in what concerns me", "Calque de « en ce qui me concerne ». L'anglais dit : as far as I'm concerned."], ["concerning me", "Calque. « Concerning » introduit un sujet (concerning your email), pas un avis."], ["according to me", "« According to » sert à citer quelqu'un d'autre (according to him). Pour soi : as far as I'm concerned / in my opinion."]]
    },
    "if anything": {
      alt: [["on the contrary", "plus formel, contredit frontalement"], ["quite the opposite", "plus appuyé"], ["if anything at all"]],
      err: [["at the contrary", "La préposition est ON : on the contrary."], ["in the contrary", "La préposition est ON : on the contrary."], ["if something", "Calque. L'expression figée est « if anything »."]]
    },
    "for what it's worth": {
      alt: [["for what it is worth"], ["just my two cents", "familier US : « c'est juste mon avis »"]],
      err: [["for what it worth", "Il manque le verbe : for what it'S worth."], ["for what it costs", "« Worth » = valoir. « Cost » = coûter (un prix)."], ["for what it values", "« Value » ne s'emploie pas ici : for what it's worth."]]
    },
    "to be fair": {
      alt: [["in all fairness", "plus soutenu"], ["in fairness"], ["to be honest", "nuance : honnêteté (je dis ce que je pense) plutôt qu'équité (je rends justice à l'autre)"], ["honestly", "nuance : honnêteté plutôt qu'équité"]],
      err: [["to be just", "« Just » = juste au sens moral/juridique, très rare ici. Équitable = fair."], ["to be right", "« To be right » = avoir raison."], ["to be correct", "« Correct » = exact. Pour rendre justice à quelqu'un : to be fair."]]
    },
    "if you ask me": {
      alt: [["in my opinion", "neutre, passe partout"], ["if you want my opinion"], ["the way I see it", "très naturel à l'oral"], ["in my view", "plus soutenu"], ["I'd say", "léger, pour glisser un avis"]],
      err: [["according to me", "Erreur classique : « according to » ne s'emploie que pour les autres. Dis : if you ask me / in my opinion."], ["if you ask to me", "« Ask » est transitif direct : ask me, sans « to »."], ["to my opinion", "La préposition est IN : in my opinion."], ["on my opinion", "La préposition est IN : in my opinion."]]
    },
    "at the end of the day": {
      alt: [["ultimately", "plus soutenu, un seul mot"], ["in the end", "neutre"], ["when all is said and done", "plus appuyé"], ["all things considered", "= tout bien considéré"]],
      err: [["at the end", "« At the end » situe dans le temps ou l'espace (at the end of the film). Pour conclure un raisonnement : in the end / at the end of the day."], ["in the end of the day", "C'est AT the end of the day (mais IN the end tout seul)."], ["finally", "« Finally » = enfin (après une attente) ou « dernier point ». Pas « en fin de compte »."], ["at the end of the count", "Calque de « en fin de compte »."]]
    },
    "truth be told": {
      alt: [["to tell the truth"], ["to tell you the truth"], ["to be honest", "le plus courant à l'oral"], ["honestly"], ["frankly", "plus direct"], ["truth is", "oral : « Truth is, I forgot. »"], ["the truth is"]],
      err: [["to say the truth", "On dit TELL the truth, jamais « say the truth »."], ["truth be said", "L'expression figée est « truth be told »."], ["at true saying", "Calque de « à vrai dire »."]]
    },
    "for the record": {
      alt: [["just for the record"], ["just so you know", "plus conversationnel"], ["just so we're clear", "plus ferme"], ["FYI", "écrit / très informel"]],
      err: [["for information", "Calque de « pour info ». Dis : FYI / just so you know / for the record."], ["for info", "Calque de « pour info ». Dis : FYI / just so you know."], ["for the recording", "« Recording » = un enregistrement audio. Ici : for the record."]]
    },

    // ── Adverbial phrases — Temps ──
    "for the time being": {
      alt: [["for now", "le plus courant à l'oral"], ["for the moment"], ["at this point", "= à ce stade"], ["for the present", "soutenu"]],
      err: [["for the instant", "Calque de « pour l'instant ». Dis : for now / for the time being."], ["at the time being", "La préposition est FOR : for the time being."], ["for the time", "Il manque « being » : for the time being."], ["while waiting", "Traduction littérale de « en attendant » : il faut un complément (while waiting for the bus). Seul : for the time being / in the meantime."]]
    },
    "in the meantime": {
      alt: [["meanwhile", "un seul mot, tout aussi courant"], ["in the meanwhile"], ["until then", "= d'ici là"], ["in the interim", "soutenu, pro"]],
      err: [["in waiting", "Calque de « en attendant »."], ["waiting", "Calque de « en attendant ». Dis : in the meantime / meanwhile."], ["during this time", "Compréhensible mais pas idiomatique. Un natif dit : in the meantime / meanwhile."], ["between time", "L'expression est « in the meantime »."]]
    },
    "sooner or later": {
      alt: [["eventually", "attention au faux-ami : eventually = « finalement, tôt ou tard », pas « éventuellement »"], ["at some point", "moins fataliste"], ["one of these days", "familier"]],
      err: [["early or late", "Calque. L'expression figée utilise les comparatifs : sooner or later."], ["soon or late", "Il faut les comparatifs : soonER or latER."], ["sooner or after", "C'est sooner or LATER."]]
    },
    "at some point": {
      alt: [["at one point", "plutôt pour raconter le passé"], ["sometime", "sans s = un jour, à un moment indéterminé"], ["at some stage", "plutôt UK"], ["eventually", "= ça finira par arriver"]],
      err: [["at a given moment", "Calque de « à un moment donné ». Dis : at some point."], ["at a moment", "Calque. Dis : at some point."], ["at one moment", "Calque. Dis : at some point / at one point."], ["sometimes", "Avec un s = parfois. « À un moment » = sometime / at some point."]]
    },
    "every now and then": {
      alt: [["from time to time"], ["once in a while"], ["every so often"], ["now and then"], ["every now and again", "plutôt UK"], ["occasionally", "plus soutenu"], ["sometimes", "plus plat"]],
      err: [["time to time", "Il manque FROM : from time to time."], ["from times to times", "Pas de pluriel : from time to time."], ["sometime", "Sans s = « un jour ». Parfois = sometimes."], ["every now and than", "THEN (ensuite), pas « than » (que)."]]
    },
    "once in a while": {
      alt: [["every once in a while"], ["from time to time"], ["every now and then"], ["every so often"], ["now and then"], ["occasionally", "plus soutenu"]],
      err: [["once a while", "Il manque IN : once in a while."], ["one time in a while", "On dit « once », pas « one time »."], ["from time to other", "Calque de « de temps à autre »."], ["time to time", "Il manque FROM : from time to time."]]
    },
    "right off the bat": {
      alt: [["right away", "= tout de suite"], ["from the start"], ["right from the start"], ["from the get-go", "familier US"], ["straight away", "UK"], ["from the outset", "soutenu"], ["immediately", "neutre"]],
      err: [["at first", "« At first » = au début, et sous-entend que ça a changé ensuite. D'entrée de jeu = right off the bat."], ["from the entrance", "Calque de « d'entrée »."], ["at the beginning", "= au début (situe dans le temps), sans l'idée d'immédiateté. Dis : right off the bat / from the start."]]
    },
    "as of now": {
      alt: [["at the moment"], ["currently", "neutre, pro"], ["right now", "oral"], ["at present", "soutenu"], ["as of today"], ["as of right now", "oral US"]],
      err: [["actually", "Faux-ami : actually = en fait. « Actuellement » = currently / as of now."], ["at the actual hour", "Calque de « à l'heure actuelle »."], ["as for now", "« As for » = quant à. Ici : as OF now."], ["nowadays", "= de nos jours (époque), pas « à l'instant où je parle »."]]
    },

    // ── Adverbial phrases — Contraste ──
    "that being said": {
      alt: [["that said", "version courte, très courante"], ["having said that"], ["with that said"], ["even so", "= malgré ça"], ["still", "oral, en tête de phrase"]],
      err: [["that been said", "BEING (en train d'être), pas « been »."], ["this said", "Calque de « ceci dit ». L'anglais utilise THAT : that said."], ["it said", "L'expression est « that said » / « that being said »."]]
    },
    "having said that": {
      alt: [["that being said"], ["that said", "version courte"], ["with that said"]],
      err: [["having say that", "Après « having » il faut le participe passé : having SAID that."], ["after saying that", "Littéral : ça décrit une chronologie, pas une concession. L'expression est « having said that »."], ["this being said", "L'anglais dit plutôt THAT being said."]]
    },
    "regardless": {
      alt: [["anyway", "oral, neutre"], ["either way"], ["in any case"], ["no matter what", "plus déterminé"], ["nevertheless", "soutenu"], ["at any rate"], ["be that as it may", "très soutenu"]],
      err: [["irregardless", "Forme non standard, à éviter : regardless."], ["regardless of", "Seul, « regardless of » attend un complément (regardless of the cost). En fin ou début de phrase : regardless."], ["whatever", "Seul, « whatever » sonne désinvolte (« m'en fiche »)."], ["no matter", "Il faut compléter : no matter what."]]
    },
    "all the same": {
      alt: [["anyway", "oral"], ["still", "en tête de phrase"], ["even so"], ["nevertheless", "soutenu"], ["nonetheless", "soutenu"], ["regardless"], ["though", "oral, en fin de phrase : « I want to try, though. »"]],
      err: [["even though", "« Even though » = bien que, et introduit une proposition. Quand même = all the same / still / anyway."], ["the same", "Il manque ALL : all the same."], ["when even", "Calque de « quand même »."]]
    },
    "for all I know": {
      alt: [["for all we know"], ["maybe", "plus plat : on perd l'idée « je n'en sais rien »"]],
      err: [["as far as I know", "Nuance inverse ! As far as I know = d'après ce que je sais (j'affirme prudemment). For all I know = je n'en sais rien, tout est possible."], ["for all I knew", "Présent : for all I know (sauf récit au passé)."], ["if it finds itself", "Calque de « si ça se trouve »."]]
    },
    "be that as it may": {
      alt: [["regardless"], ["even so"], ["nevertheless"], ["that said", "moins soutenu"], ["in any case"], ["anyway", "oral"]],
      err: [["be it as it may", "L'expression figée est : be THAT as it may."], ["be that as it might", "L'expression figée est : be that as it MAY."], ["whatever it is", "= quoi que ce soit (une chose). Quoi qu'il en soit = be that as it may / regardless."]]
    },
    "then again": {
      alt: [["but then again"], ["on the other hand", "plus structuré, souvent après « on the one hand »"], ["that said"], ["mind you", "UK, oral"]],
      err: [["in the other hand", "La préposition est ON : on the other hand."], ["on the other side", "Calque de « côté ». L'anglais dit HAND : on the other hand."], ["from another side", "Calque. Dis : then again / on the other hand."]]
    },
    "either way": {
      alt: [["in any case"], ["anyway", "oral"], ["anyways", "familier US"], ["in both cases", "littéral et correct, mais moins idiomatique"], ["one way or the other"], ["regardless"]],
      err: [["in the two cases", "Calque. Dis : either way / in both cases."], ["any way", "En deux mots = « n'importe quelle manière ». De toute façon = anyway."], ["in all ways", "= à tous points de vue. De toute façon = either way / anyway."], ["of all way", "Calque de « de toute façon »."]]
    },

    // ── Adverbial phrases — Cause & conséquence ──
    "as a result": {
      alt: [["so", "le plus simple à l'oral"], ["as a consequence", "plus formel"], ["consequently", "soutenu"], ["therefore", "soutenu, logique"], ["because of that"], ["that's why", "oral"], ["in consequence", "rare, très formel"]],
      err: [["as result", "Il manque l'article : as A result."], ["in result", "C'est AS A result."], ["by consequence", "Calque de « par conséquent ». Dis : as a result / consequently."], ["of the coup", "Calque de « du coup » 😄 Dis : so / as a result."]]
    },
    "for some reason": {
      alt: [["for whatever reason", "un peu plus appuyé"], ["somehow", "= sans que je sache comment/pourquoi"], ["for some reason or other"], ["who knows why", "oral"], ["god knows why", "familier"]],
      err: [["for a reason", "Sens opposé ! For a reason = pour une bonne raison (ce n'est pas un hasard)."], ["for any reason", "= pour n'importe quelle raison (if for any reason you can't come…)."], ["for some reasons", "Expression figée au singulier : for some reason."], ["go know why", "Calque de « va savoir pourquoi »."]]
    },
    "needless to say": {
      alt: [["it goes without saying", "= ça va sans dire"], ["obviously", "oral, direct"], ["of course"], ["unsurprisingly", "= sans surprise"]],
      err: [["useless to say", "Calque de « inutile de dire ». L'anglais dit NEEDless to say."], ["no need to say", "L'expression figée est « needless to say »."], ["needless to tell", "C'est SAY : needless to say."], ["it goes without say", "Il faut -ing : it goes without sayING."]]
    },
    "on account of": {
      alt: [["because of", "le plus courant"], ["due to", "neutre, pro"], ["owing to", "soutenu"], ["as a result of"]],
      err: [["in reason of", "Calque de « en raison de ». Dis : because of / on account of."], ["because", "Sans OF, « because » introduit une proposition (because it rained). Devant un nom : because of."], ["due of", "C'est due TO."], ["on the account of", "Pas d'article : on account of."]]
    },
    "with that in mind": {
      alt: [["with this in mind"], ["bearing that in mind", "plus soutenu"], ["keeping that in mind"], ["from that perspective", "= sous cet angle"], ["in light of that", "= au vu de ça"], ["on that basis", "pro"]],
      err: [["in this optic", "Calque de « dans cette optique ». Dis : with that in mind."], ["in this optics", "Calque de « dans cette optique ». Dis : with that in mind."], ["with that in head", "C'est MIND, pas « head »."], ["in that perspective", "La préposition est FROM : from that perspective."]]
    },
    "for that matter": {
      alt: [["come to that", "UK"], ["or … for that matter"]],
      err: [["by the way", "« By the way » = au fait (on change de sujet). « For that matter » étend ce qu'on vient de dire à autre chose."], ["moreover", "« Moreover » ajoute un argument (de plus), en registre formel. Ici on étend la remarque : for that matter."], ["besides", "« Besides » = en plus / de toute façon. Pour étendre une remarque à autre chose : for that matter."], ["elsewhere", "Faux sens : elsewhere = ailleurs (lieu)."]]
    },
    "in that case": {
      alt: [["then", "oral : « Then let's postpone. »"], ["if so"], ["if that's the case"], ["in which case", "pour enchaîner dans la même phrase"], ["in this case", "nuance : in this case = dans le cas présent ; in that case = en réaction à ce qu'on vient d'apprendre"]],
      err: [["at that case", "La préposition est IN : in that case."], ["on that case", "La préposition est IN : in that case."], ["in that cases", "Singulier : in that case."]]
    },
    "as it turns out": {
      alt: [["it turns out"], ["turns out", "oral, très naturel : « Turns out she was right. »"], ["it turned out"], ["as it turned out"], ["as it happens", "= il se trouve que"], ["actually", "= en fait"], ["in fact"]],
      err: [["it proves that", "« Prove » = prouver. Il s'avère que = it turns out (that)."], ["it reveals that", "Calque de « il se révèle que ». Dis : it turns out."], ["it appears that", "= il semble que (apparence, pas encore confirmé). « It turns out » = on a découvert que c'est vrai."], ["it avers that", "Calque de « il s'avère »."]]
    },
    // ── Phrasal verbs du quotidien ──
    "figure out": { alt: [["work out", "plutôt UK"], ["understand", "comprendre, sans l'idée d'effort"], ["solve", "résoudre (un problème)"], ["get to the bottom of", "= aller au fond des choses"], ["find the solution", "correct mais littéral. Le réflexe natif : figure out"]], err: [["find out", "Find out = découvrir une information (apprendre). Figure out = comprendre en réfléchissant."], ["figure", "Il manque la particule : figure OUT."]] },
    "come up with": { alt: [["think of", "= penser à"], ["think up", "inventer"], ["devise", "soutenu"], ["find", "plus plat"]], err: [["come with", "Come with = venir avec. Trouver une idée = come UP with."], ["come up", "Come up = surgir (something came up). Il manque WITH."], ["invent", "Invent = inventer un objet, un procédé. Pour une idée : come up with."]] },
    "run into": { alt: [["bump into", "synonyme exact, un peu plus léger"], ["come across", "plutôt pour une chose trouvée par hasard"], ["meet by chance"]], err: [["fall on", "Calque de « tomber sur »."], ["fall into", "Fall into = tomber dans. Tomber sur quelqu'un = run into."], ["run over", "Run over = écraser (avec une voiture) !"], ["cross", "Cross = traverser. Croiser quelqu'un par hasard = run into."]] },
    "put off": { alt: [["postpone", "plus formel"], ["delay", "retarder"], ["push back", "décaler une date"], ["procrastinate", "sans complément : remettre toujours à plus tard"]], err: [["put out", "Put out = éteindre (un feu) / sortir (les poubelles)."], ["report", "Faux-ami : report = signaler / faire un rapport. Reporter = put off / postpone."], ["push off", "Push off = dégage ! (UK). Repousser = put off."], ["put away", "Put away = ranger."]] },
    "get over": { alt: [["recover from", "plus formel"], ["move on from", "= tourner la page"], ["bounce back from", "= rebondir après"]], err: [["get through", "Get through = traverser, survivre à (pendant que ça dure). Get over = s'en remettre (après)."], ["get on", "Get on = monter (dans un bus) / s'entendre."], ["recover of", "La préposition est FROM : recover from."], ["get over of", "Pas de préposition en plus : get over something."]] },
    "look into": { alt: [["investigate", "plus formel"], ["check out", "plus familier"], ["examine"], ["dig into", "= creuser"]], err: [["look at", "Look at = regarder. Look into = examiner en détail, enquêter."], ["look for", "Look for = chercher (quelque chose de perdu)."], ["look after", "Look after = s'occuper de."], ["look in", "La particule est INTO : look into."]] },
    "bring up": { alt: [["raise", "plus formel : raise an issue"], ["mention"], ["broach", "soutenu, pour un sujet délicat"]], err: [["bring", "Il manque la particule : bring UP."], ["bring out", "Bring out = sortir (un produit) / faire ressortir."], ["approach", "Approach a subject existe mais = traiter un sujet d'une certaine façon. Le mettre sur la table = bring up."], ["talk", "Talk demande une préposition (talk about). Aborder = bring up."]] },
    "end up": { alt: [["wind up", "synonyme, familier US"], ["finish up"]], err: [["finish by", "Calque de « finir par ». L'anglais dit end up + -ing."], ["end by", "Calque de « finir par ». L'anglais dit end up + -ing."], ["end", "Il manque UP : end up."], ["finally", "Finally est un adverbe. « Finir par faire » = end up doing."]] },

    // ── Small talk à l'américaine ──
    "How's it going?": { alt: [["how is it going"], ["how are you doing"], ["how are you", "neutre"], ["how you doing", "oral, familier"], ["what's up", "plus familier"], ["how's everything"]], err: [["how do you go", "Calque de « comment vas-tu »."], ["how do you do", "Très formel et vieilli, pour une première rencontre uniquement."], ["how it's going", "Dans une question, on inverse : how IS IT going?"], ["how are you going", "Australien uniquement. US : how's it going / how are you doing."]] },
    "What have you been up to?": { alt: [["what've you been up to"], ["what are you up to", "nuance : en ce moment (pas « ces derniers temps »)"], ["what's new", "plus court"], ["how have you been", "= comment tu vas depuis le temps"]], err: [["what do you become", "Calque de « qu'est-ce que tu deviens »."], ["what are you becoming", "Calque de « qu'est-ce que tu deviens »."], ["what did you do", "Prétérit = une action terminée précise. Pour « ces derniers temps » : present perfect continu, what have you been up to."]] },
    "Not much, you?": { alt: [["not much, and you"], ["nothing much, you"], ["not a lot, you"], ["not much, how about you"], ["same old, you", "= la routine"]], err: [["not big thing, and you", "Calque de « pas grand-chose »."], ["no much, you", "C'est NOT much."], ["nothing, and you", "Trop sec : « rien ». L'usage : not much."]] },
    "I hear you": { alt: [["I get it"], ["I feel you", "familier"], ["I get you"], ["I know what you mean"], ["I understand you", "correct, plus plat"], ["I understand", "juste, mais on perd la nuance d'empathie de « I hear you »"]], err: [["I listen you", "Listen = écouter (et demande TO). Ici : I hear you."], ["I ear you", "Ear = l'oreille. Le verbe est HEAR."]] },
    "Fair enough": { alt: [["fair", "oral, très court"], ["fair point"], ["that's fair"], ["all right then"]], err: [["good war", "Calque de « de bonne guerre » 😄"], ["enough fair", "L'ordre est fair ENOUGH."], ["just enough", "Just enough = juste assez. Ici : fair enough."]] },
    "No worries": { alt: [["no problem"], ["don't worry about it"], ["no biggie", "familier"], ["it's all good", "familier US"], ["don't sweat it", "familier US"]], err: [["no worry", "Toujours au pluriel : no worrieS."], ["not worry", "L'expression est no worries / don't worry."], ["no care", "Calque de « pas de souci »."], ["no trouble", "Rare. L'usage : no worries / no problem."]] },
    "Sounds good": { alt: [["sounds great"], ["sounds like a plan"], ["works for me"], ["deal"], ["it works", "plus plat"]], err: [["it walks", "Calque de « ça marche » 😄 Walk = marcher à pied."], ["sound good", "Avec le s de la 3e personne : soundS good."], ["sounds well", "Après sound, un adjectif : sounds GOOD."], ["that walks", "Calque de « ça marche »."]] },
    "Catch you later": { alt: [["see you later"], ["see ya"], ["later", "très familier"], ["talk to you later"], ["catch you later, man"]], err: [["to more", "Calque de « à plus » 😄"], ["at later", "Pas de préposition : see you later."], ["see you after", "After demande un complément. « À plus » = see you later."], ["catch you after", "C'est catch you LATER."]] },

    // ── Réactions et fillers ──
    "I mean": { alt: [["well", "pour hésiter"], ["what I mean is", "pour reformuler"]], err: [["I want to say", "Calque de « je veux dire ». L'anglais dit I mean."], ["I wanna say", "Calque de « je veux dire ». L'anglais dit I mean."], ["finally", "Faux sens : finally = enfin (après une attente). « Enfin » de reformulation = I mean."], ["I means", "Pas de s : I mean."]] },
    "you know": { alt: [["y'know", "graphie orale"], ["you see"], ["you know what I mean"]], err: [["you see it", "L'expression est you see / you know."], ["you look", "Calque de « tu vois »."], ["do you see", "Trop littéral. Le tic de langage : you know."]] },
    "kind of": { alt: [["kinda", "graphie orale"], ["sort of"], ["a bit"], ["a little"], ["somewhat", "soutenu"], ["rather", "plutôt UK"]], err: [["a few", "A few = quelques (dénombrable). Un peu = a bit / kind of."], ["kind", "Il manque OF : kind of."], ["a little bit of", "Devant un adjectif, sans of : a little bit nervous."]] },
    "honestly": { alt: [["frankly"], ["to be honest"], ["truthfully"], ["for real", "familier"], ["seriously"]], err: [["franchly", "Le mot est frankly."], ["honnestly", "Un seul n : honestly."], ["sincerely", "Sincerely sert surtout en fin de lettre. À l'oral : honestly."]] },
    "For real?": { alt: [["seriously"], ["really"], ["are you serious"], ["for real"], ["no kidding", "= sans blague"], ["you serious", "oral"]], err: [["serious", "L'adjectif seul ne marche pas : seriously? / are you serious?"], ["in real", "L'expression est FOR real."], ["for true", "L'expression est for REAL."], ["it's true", "= c'est vrai (affirmation), pas l'exclamation « sérieux ? »."]] },
    "No way!": { alt: [["you're kidding"], ["get out of here", "familier US"], ["seriously"], ["shut up", "familier, entre amis : « arrête ! »"], ["no kidding"], ["impossible", "compréhensible, mais ce n'est pas l'exclamation naturelle : no way!"]], err: [["not possible", "Calque. L'exclamation est no way!"], ["without joke", "Calque de « sans blague »."], ["no joke", "No joke = « je ne plaisante pas » (c'est moi qui insiste). La surprise : no way!"]] },
    "That makes sense": { alt: [["makes sense"], ["it makes sense"], ["that adds up"], ["that figures", "= ça ne m'étonne pas"], ["that's logical", "correct mais raide"]], err: [["that has sense", "Calque de « ça a du sens ». L'anglais dit MAKE sense."], ["it has sense", "Calque de « ça a du sens ». L'anglais dit MAKE sense."], ["that does sense", "C'est MAKE sense."], ["it's logic", "Logic est un nom. L'adjectif : logical. Et le naturel : that makes sense."]] },
    "Totally": { alt: [["completely"], ["absolutely"], ["for sure"], ["definitely"], ["a hundred percent", "oral"]], err: [["carrement", "Mot français."], ["totaly", "Deux l : totally."], ["squarely", "Calque de « carrément »."], ["at all", "At all ne s'emploie qu'en négation ou question (not at all)."]] },

    // ── Gonna, wanna, gotta ──
    "gonna": { alt: [["going to", "la forme complète, toujours correcte à l'écrit"]], err: [["gonna to", "Gonna contient déjà « to » : I'm gonna grab, pas « gonna to grab »."], ["will", "Will existe, mais ici on vise la réduction de going to."], ["gona", "Deux n : gonna."]] },
    "wanna": { alt: [["want to", "la forme complète"]], err: [["wanna to", "Wanna contient déjà « to »."], ["wana", "Deux n : wanna."], ["wants to", "Wanna ne marche qu'avec I / you / we / they. He wants to ne se réduit pas."]] },
    "gotta": { alt: [["have got to", "la forme complète"], ["have to"], ["got to"], ["need to", "nuance : besoin plutôt qu'obligation"]], err: [["gotta to", "Gotta contient déjà « to »."], ["must", "Must est plus formel et plus fort. À l'oral US : gotta / have to."], ["gota", "Deux t : gotta."]] },
    "lemme": { alt: [["let me", "la forme complète"]], err: [["leme", "Deux m : lemme."], ["let's me", "Let's = let us. Ici : let me."], ["leave me", "Leave me = laisse-moi (tranquille), quitte-moi. Laisse-moi faire = let me."]] },
    "gimme": { alt: [["give me", "la forme complète"]], err: [["gime", "Deux m : gimme."], ["give to me", "Sans to : give me a sec."], ["gimme me", "Gimme contient déjà « me »."]] },
    "dunno": { alt: [["don't know", "la forme complète"], ["I don't know"], ["no idea"], ["not sure"], ["beats me", "familier"]], err: [["duno", "Deux n : dunno."], ["don't no", "Know (savoir), pas « no »."], ["I know not", "Archaïque."]] },
    "kinda": { alt: [["kind of", "la forme complète"], ["sort of"], ["sorta", "même réduction pour sort of"]], err: [["kinda of", "Kinda contient déjà « of »."], ["kindda", "Un seul d : kinda."]] },
    "whatcha": { alt: [["what are you", "la forme complète"], ["what do you"], ["whaddaya", "autre réduction de what do you"]], err: [["watcha", "Avec un h : whatcha."], ["what you", "Il manque l'auxiliaire dans la forme complète : what ARE you."]] },

    // ── Raconter une histoire ──
    "So get this": { alt: [["get this"], ["listen to this"], ["check this out"], ["you're not gonna believe this"], ["guess what"], ["hear this", "compréhensible, mais l'expression figée est get this"]], err: [["listen that", "Listen demande TO, et on dit this : listen to this."], ["hold you well", "Calque de « tiens-toi bien » 😄"], ["so take this", "L'expression est get this."]] },
    "out of nowhere": { alt: [["out of the blue", "= sans prévenir"], ["from nowhere"], ["all of a sudden", "= tout à coup"], ["out of thin air", "pour une chose qui apparaît"]], err: [["out from nowhere", "C'est out OF nowhere."], ["exit of nowhere", "Calque de « sorti de nulle part »."], ["from no where", "Nowhere en un seul mot."], ["out of anywhere", "Anywhere = n'importe où. Ici : nowhere."]] },
    "all of a sudden": { alt: [["suddenly"], ["out of nowhere"], ["out of the blue"], ["all at once"], ["just like that"]], err: [["all of sudden", "Il manque l'article : all of A sudden."], ["all the sudden", "Variante fautive courante. La forme correcte : all of a sudden."], ["all at a sudden", "C'est all OF a sudden."], ["at once", "At once = immédiatement / en même temps. Tout à coup = all of a sudden."]] },
    "turns out": { alt: [["it turns out"], ["as it turns out"], ["it turned out"], ["actually", "= en fait"], ["in fact"], ["apparently", "nuance : d'après ce qu'on dit"]], err: [["turn out", "À la 3e personne : turnS out."], ["it proves that", "Prove = prouver. Il s'avère que = it turns out."], ["it appears", "= il semble (pas encore confirmé). Turns out = on a découvert que c'est vrai."]] },
    "long story short": { alt: [["to make a long story short", "la forme complète"], ["to cut a long story short", "UK"], ["in short"], ["basically"], ["long story short,"]], err: [["to make short", "Calque de « pour faire court »."], ["for doing short", "Calque de « pour faire court »."], ["short story long", "L'ordre est long story short."], ["in brief", "Très formel, écrit. À l'oral : long story short."]] },
    "I was like": { alt: [["I went", "familier : « and I went, what? »"], ["I said"], ["I thought"], ["I'm like", "au présent de narration"], ["I told myself", "correct mais plus réfléchi. Le tic de récit oral : I was like"]], err: [["I told", "Tell demande un complément : I told him. Pour rapporter ses propres mots : I was like / I said."], ["I said me", "Calque de « je me suis dit ». Dis : I was like / I thought."], ["I made", "Calque de « j'ai fait ». Dis : I was like / I went."]] },
    "next thing I know": { alt: [["the next thing I know"], ["next thing I knew", "au passé"], ["before I knew it", "= avant même de m'en rendre compte"], ["all of a sudden"]], err: [["next thing I known", "Know / knew, pas « known » ici."], ["and there, suddenly", "Calque de « et là, d'un coup »."], ["following thing I know", "L'expression figée est NEXT thing I know."]] },
    "to top it off": { alt: [["to top it all off"], ["on top of that"], ["to make matters worse", "= pour ne rien arranger"], ["to cap it all", "UK"], ["as if that wasn't enough"]], err: [["to crown the all", "Calque de « pour couronner le tout »."], ["to crown it all", "Existe en anglais britannique vieilli. US : to top it off."], ["to top it of", "Off avec deux f."], ["for top it off", "C'est TO top it off."]] },

    // ── Collocations clés ──
    "make a decision": { alt: [["decide"], ["make a call", "oral, pro"], ["make up my mind", "= se décider"], ["take a decision", "UK uniquement ; US : make a decision"], ["come to a decision", "soutenu"]], err: [["do a decision", "C'est MAKE a decision."], ["take decision", "Il manque l'article, et l'américain dit MAKE a decision."], ["make decision", "Il manque l'article : make A decision."], ["have a decision", "C'est MAKE a decision."]] },
    "take a break": { alt: [["have a break", "UK"], ["take five", "familier : cinq minutes"], ["take a breather", "= souffler"], ["take a pause", "rare"]], err: [["do a break", "Calque de « faire une pause ». L'anglais dit TAKE a break."], ["make a break", "Make a break (for it) = tenter de s'échapper ! Faire une pause = take a break."], ["do a pause", "Calque. L'anglais dit take a break."], ["make a pause", "Calque. L'anglais dit take a break."]] },
    "pay attention": { alt: [["pay attention to"], ["be careful", "nuance : prudence face à un danger"], ["watch out", "= attention, danger !"], ["focus", "= se concentrer"]], err: [["make attention", "Calque de « faire attention ». L'anglais dit PAY attention."], ["do attention", "Calque de « faire attention ». L'anglais dit PAY attention."], ["give attention", "On dit PAY attention."], ["take attention", "On dit PAY attention."]] },
    "have a point": { alt: [["you have a point"], ["you've got a point"], ["fair point"], ["be right about that"], ["good point"]], err: [["not have wrong", "Calque de « ne pas avoir tort »."], ["have reason", "Calque de « avoir raison ». L'anglais dit be right / have a point."], ["be not wrong", "On dit you're not wrong, ou plus naturel : you have a point."], ["have a right", "Have a right = avoir le droit."]] },
    "do research": { alt: [["do some research"], ["research", "en verbe"], ["look into", "= se pencher sur"], ["conduct research", "formel, académique"], ["carry out research", "formel"]], err: [["make research", "C'est DO research."], ["do researches", "Research est indénombrable : pas de pluriel."], ["make researches", "C'est DO research, sans pluriel."], ["do a research", "Indénombrable : do research / do SOME research."]] },
    "make sense": { alt: [["add up", "= tenir debout"], ["be logical"], ["hold up", "= tenir la route"], ["make any sense", "en question ou négation"]], err: [["have sense", "Calque de « avoir du sens ». L'anglais dit MAKE sense."], ["do sense", "C'est MAKE sense."], ["have a sense", "Have a sense of = avoir le sens de (l'humour…). Avoir du sens = make sense."], ["make a sense", "Sans article : make sense."]] },
    "take into account": { alt: [["take into consideration"], ["factor in", "pro, très courant"], ["account for"], ["consider"], ["bear in mind", "= garder à l'esprit"]], err: [["take in account", "La préposition est INTO : take into account."], ["take in count", "Calque de « prendre en compte ». C'est take into ACCOUNT."], ["take into count", "C'est ACCOUNT, pas count."], ["take on account", "La préposition est INTO."]] },
    "raise a question": { alt: [["bring up a question"], ["raise an issue", "= soulever un problème"], ["pose a question", "soutenu"], ["beg the question", "usage courant : « ça amène la question »"]], err: [["rise a question", "Rise = monter (tout seul, intransitif). Soulever quelque chose = RAISE."], ["lift a question", "Lift = soulever un objet. Pour une question : raise."], ["raise up a question", "Sans up : raise a question."], ["ask a question", "Ask = poser. Soulever (faire émerger) = raise."]] },

    // ── Nuancer (hedging) ──
    "I'd say": { alt: [["I would say"], ["I'd guess"], ["I reckon", "UK / sud des US"], ["I'd estimate", "pour un chiffre"], ["my guess is"]], err: [["I will say", "Will affirme. Pour nuancer : conditionnel, I WOULD say."], ["I'd tell", "Tell demande un complément (tell you). Ici : I'd say."], ["I say", "Sans would, c'est trop affirmatif. Pour nuancer : I'd say."]] },
    "it seems to me": { alt: [["it seems to me that"], ["it looks to me like"], ["I feel like", "oral"], ["I get the impression", "= j'ai l'impression"], ["from where I stand"]], err: [["it seems me", "Il manque TO : it seems TO me."], ["it looks me", "On dit it looks TO me like…"], ["it seems for me", "La préposition est TO."], ["it appears me", "Il manque TO : it appears to me."]] },
    "arguably": { alt: [["you could argue that"], ["probably"], ["possibly"], ["it could be argued that", "soutenu"]], err: [["without doubt", "Sens trop fort : without a doubt = sans aucun doute. Arguably = « on peut soutenir que »."], ["undoubtedly", "Sens trop fort. Arguably laisse la place au débat."], ["arguable", "Arguable est l'adjectif. L'adverbe : arguably."], ["doubtless", "Sens trop fort. Arguably laisse la place au débat."]] },
    "to some extent": { alt: [["to a certain extent"], ["to some degree"], ["up to a point"], ["in a way"], ["partly"], ["somewhat"]], err: [["in a certain measure", "Calque de « dans une certaine mesure »."], ["in some extent", "La préposition est TO."], ["to some extend", "Extend est le verbe (étendre). Le nom : extenT."], ["at some extent", "La préposition est TO."]] },
    "I could be wrong, but": { alt: [["I may be wrong, but"], ["I might be wrong, but"], ["correct me if I'm wrong, but"], ["don't quote me on this, but", "= ne me cite pas là-dessus"], ["I could be wrong"]], err: [["I maybe wrong, but", "May be en deux mots ici : I MAY BE wrong."], ["I can be wrong, but", "Can = capacité générale. Pour une possibilité ici et maintenant : could / may / might."], ["I mistake maybe, but", "Calque de « je me trompe peut-être »."]] },
    "more or less": { alt: [["pretty much", "oral, très courant"], ["roughly"], ["basically"], ["give or take", "pour un chiffre"], ["kind of"]], err: [["more and less", "C'est more OR less."], ["plus or minus", "Plus or minus est mathématique (± 5 %)."], ["more less", "Il manque OR."], ["most or less", "C'est MORE or less."]] },
    "tends to": { alt: [["has a tendency to"], ["is prone to", "pour un défaut"], ["is inclined to", "soutenu"], ["is likely to", "nuance : probabilité"], ["usually", "plus simple"]], err: [["has tendency to", "Il manque l'article : has A tendency to."], ["tends at", "La préposition est TO."], ["uses to", "Used to = avait l'habitude (passé uniquement)."], ["tend to", "À la 3e personne : tendS to."]] },
    "it's not that…, it's just that": { alt: [["it's not that, it's just that"], ["it isn't that, it's just that"]], err: [["it's not that, it's only that", "L'expression figée utilise JUST."], ["it's not what, it's just what", "C'est THAT (conjonction), pas what."]] },

    // ── Connecteurs C1 ──
    "that said": { alt: [["that being said"], ["having said that"], ["still"], ["even so"], ["then again"]], err: [["this said", "Calque de « ceci dit ». L'anglais utilise THAT."], ["it said", "L'expression est that said."], ["that say", "Participe passé : that SAID."]] },
    "even so": { alt: [["still"], ["nevertheless", "soutenu"], ["all the same"], ["regardless"], ["nonetheless", "soutenu"]], err: [["even though", "Even though = bien que, et introduit une proposition. Malgré tout = even so."], ["even if", "Even if = même si (hypothèse)."], ["even", "Even seul = même. Il faut even SO."], ["so even", "L'ordre est even so."]] },
    "whereas": { alt: [["while"], ["but"], ["whilst", "UK, soutenu"]], err: [["when", "When est temporel. Pour opposer deux faits : whereas / while."], ["where as", "En un seul mot : whereas."], ["then that", "Calque de « alors que »."], ["although", "Although = bien que (concession). Whereas oppose deux faits en parallèle."]] },
    "given that": { alt: [["since"], ["seeing as", "oral"], ["considering that"], ["as"], ["given the fact that", "lourd mais correct"]], err: [["being given that", "Calque de « étant donné que ». L'anglais dit simplement given that."], ["giving that", "Participe passé : givEN that."], ["given than", "That, pas than."], ["due to", "Due to + nom. Devant une proposition : given that / since."]] },
    "as long as": { alt: [["so long as"], ["provided that", "= à condition que"], ["provided"], ["while", "sens temporel"]], err: [["as much as", "As much as = autant que."], ["so much that", "= tellement que."], ["until that", "Until ne prend pas « that »."], ["as long that", "C'est as long AS."]] },
    "provided that": { alt: [["provided"], ["providing that", "accepté, surtout à l'oral"], ["as long as"], ["on condition that", "soutenu"], ["so long as"], ["only if"]], err: [["at condition that", "Calque. C'est ON condition that, ou provided that."], ["in condition that", "La préposition est ON."], ["provide that", "Participe passé : providED that."]] },
    "on top of that": { alt: [["besides"], ["what's more"], ["plus", "oral"], ["in addition", "formel"], ["to top it off"]], err: [["in more of that", "Calque de « en plus de ça »."], ["on the top of that", "Sans article : on top of that."], ["more of that", "Calque."], ["at top of that", "La préposition est ON."]] },
    "by and large": { alt: [["on the whole"], ["overall"], ["for the most part"], ["all in all"], ["generally speaking"], ["in general"]], err: [["in the ensemble", "Calque de « dans l'ensemble »."], ["by and big", "L'expression figée est by and LARGE."], ["by large", "Il manque AND : by and large."], ["in the whole", "La préposition est ON : on the whole."]] },

    // ── Inversion et emphase ──
    "Never have I…": { alt: [["never have I"], ["I have never", "ordre neutre, sans l'emphase"], ["I've never", "ordre neutre, sans l'emphase"]], err: [["never I have", "Après never en tête de phrase, on inverse : never HAVE I."], ["never I've", "Après never en tête de phrase, on inverse : never HAVE I."], ["never had I", "Had = plus-que-parfait (jamais je n'avais). Ici : never HAVE I."]] },
    "What I need is…": { alt: [["what I need is"], ["all I need is", "= tout ce dont j'ai besoin"], ["the thing I need is"]], err: [["what I need it's", "Pas de pronom en plus : what I need IS."], ["that I need is", "What, pas that."], ["what I need of is", "Calque de « ce dont » : need est transitif direct."]] },
    "It was… who": { alt: [["it was who"], ["it was that", "possible pour une chose, ou à l'oral"], ["it is who", "au présent"]], err: [["it was which", "Pour une personne : who (ou that)."], ["it was whom", "Whom = complément. Ici la personne est sujet : who."], ["this was who", "La structure d'emphase commence par IT."]] },
    "No sooner… than": { alt: [["no sooner than"], ["hardly when", "même structure : hardly had I… when"], ["as soon as", "neutre, sans inversion"]], err: [["no sooner that", "C'est THAN."], ["no sooner then", "Than (que), pas then (ensuite)."], ["no sooner when", "No sooner… THAN ; hardly… WHEN."]] },
    "Not only… but also": { alt: [["not only, but also"], ["not only but also"]], err: [["not only but too", "La paire est not only… but ALSO."], ["no only but also", "C'est NOT only."]] },
    "Little did I know": { alt: [["little did I realize"], ["I had no idea"], ["I never suspected"]], err: [["little I knew", "Après little en tête de phrase, on inverse : little DID I know."], ["I was far to doubt", "Calque de « j'étais loin de me douter »."], ["little did I knew", "Après did, base verbale : know."], ["few did I know", "Few = peu de (dénombrable). Ici : little."]] },
    "Under no circumstances": { alt: [["on no account", "soutenu"], ["in no case", "rare"], ["no matter what"], ["never"]], err: [["in no circumstances", "Variante britannique. US : UNDER no circumstances."], ["in none case", "Calque de « en aucun cas »."], ["under no circumstance", "Toujours au pluriel : circumstanceS."], ["under any circumstances", "Avec any, il faut une négation avant (not under any circumstances)."]] },
    "The thing is": { alt: [["the thing is,"], ["here's the thing"], ["the problem is"], ["the point is"], ["thing is", "oral"]], err: [["the stuff is", "Stuff ne s'emploie pas ici : the thing is."], ["the trick is", "The trick is = l'astuce, c'est… Le truc (le problème) = the thing is."], ["the thing it's", "Pas de pronom en plus : the thing IS."]] },

    // ── Conditionnels et regrets ──
    "If I had known": { alt: [["if I'd known"], ["had I known", "soutenu, avec inversion"], ["if only I'd known", "= si seulement"]], err: [["if I would have known", "Jamais would après if : if I HAD known."], ["if I knew", "If I knew = si je savais (maintenant). Regret passé : if I had known."], ["if I have known", "Past perfect : if I HAD known."], ["if I had knew", "Participe passé : knoWN."]] },
    "I wish I had": { alt: [["I wish I'd"], ["if only I had"], ["I regret not having", "plus formel"]], err: [["I wish I have", "Après wish pour un regret passé : past perfect, I wish I HAD."], ["I wish I would have", "Pas de would have après wish : I wish I had."], ["I regret to not have", "On dit I regret not having."]] },
    "If only": { alt: [["I wish"], ["if only,"]], err: [["if alone", "Calque de « si seulement » (seul = alone)."], ["only if", "Sens différent : only if = seulement si (condition)."], ["if just", "L'expression figée est if ONLY."]] },
    "Had I known": { alt: [["if I had known", "neutre"], ["if I'd known"]], err: [["have I known", "Past perfect : HAD I known."], ["had I knew", "Participe passé : knoWN."], ["if had I known", "Avec l'inversion, pas de if : had I known."]] },
    "Suppose": { alt: [["supposing"], ["imagine"], ["say", "oral : « say they refuse… »"], ["what if"], ["let's say"], ["imagine that", "correct. Mais retiens aussi suppose, très courant pour lancer une hypothèse"]], err: [["supposed", "Supposed = censé. Pour l'hypothèse : suppose."], ["suppose that if", "Pas de if après suppose."]] },
    "otherwise": { alt: [["or else"], ["or"], ["if not"]], err: [["if no", "Calque de « sinon ». Dis : otherwise / or else / if not."], ["else", "Seul, else ne suffit pas : or else."], ["other way", "Calque. Dis : otherwise."], ["either", "Either = l'un ou l'autre / non plus."]] },
    "I'd rather you didn't": { alt: [["I would rather you didn't"], ["I'd prefer it if you didn't"], ["I'd prefer you not to"], ["please don't", "plus direct"]], err: [["I'd rather you don't", "Après I'd rather + sujet, verbe au prétérit : you DIDN'T."], ["I'd rather you wouldn't", "Après I'd rather + sujet, prétérit simple : you didn't."], ["I'd prefer that you don't do it", "Lourd. Naturel : I'd rather you didn't."]] },
    "It's high time": { alt: [["it's about time"], ["it's time"], ["it is high time"]], err: [["it's big time", "Calque de « grand temps ». Big time = (familier) énormément."], ["it's great time", "L'expression figée est HIGH time."], ["it's high time to we", "Après it's high time + sujet, prétérit : it's high time we talked."]] },

    // ── Anglais pro (consulting) ──
    "circle back": { alt: [["come back to", "neutre"], ["get back to"], ["follow up on"], ["revisit", "formel"], ["return to"]], err: [["circle again", "L'expression est circle BACK."], ["come back on", "Calque de « revenir sur ». Dis : come back TO / circle back ON."], ["turn back", "Turn back = faire demi-tour."], ["return on", "Return ON = retour sur (investissement). Revenir sur un sujet : circle back on / return to."]] },
    "touch base": { alt: [["check in"], ["catch up"], ["sync up", "tech"], ["have a quick sync"], ["touch base with"]], err: [["make a point", "Faux-ami : make a point = faire valoir un argument. Faire un point = touch base / catch up."], ["do a point", "Calque de « faire un point »."], ["touch the base", "Sans article : touch base."], ["touch bases", "Singulier : touch base."]] },
    "bandwidth": { alt: [["capacity"], ["time"], ["availability"], ["room on my plate", "imagé : « de la place dans mon assiette »"]], err: [["disponibility", "Ce mot n'existe pas. Disponibilité = availability."], ["band width", "En un seul mot : bandwidth."], ["bandwith", "Il manque un d : banDwidth."], ["disponible", "Mot français. Disponible = available."]] },
    "low-hanging fruit": { alt: [["low hanging fruit"], ["quick wins"], ["easy wins"], ["quick win"]], err: [["low-hanging fruits", "Fruit reste au singulier dans cette expression."], ["low hanging fruits", "Fruit reste au singulier dans cette expression."], ["fast gains", "Calque de « gains rapides ». Dis : quick wins."], ["rapid gains", "Calque. Dis : quick wins."]] },
    "deliverable": { alt: [["output"], ["work product", "juridique, conseil"], ["a deliverable"]], err: [["delivery", "Delivery = la livraison (l'acte). Le livrable = deliverable."], ["livrable", "Mot français."], ["deliverables", "Au singulier ici : a deliverable."], ["delivrable", "Avec un e : delivErable."]] },
    "loop in": { alt: [["keep in the loop", "= tenir au courant"], ["bring in"], ["include"], ["cc", "sur un e-mail"], ["keep posted", "= tenir informé"]], err: [["put in the loop", "On dit loop in ou keep in the loop."], ["loop", "Il manque IN : loop someone in."], ["put in the buckle", "Calque de « mettre dans la boucle » 😄"], ["loop on", "La particule est IN."]] },
    "push back": { alt: [["challenge"], ["object"], ["resist"], ["stand your ground", "= tenir sa position"], ["disagree"]], err: [["push", "Il manque BACK : push back."], ["contest", "Contest existe (soutenu), mais avec un client on dit push back."], ["pull back", "Pull back = se retirer, reculer."], ["push away", "Push away = repousser physiquement."]] },
    "ballpark figure": { alt: [["ballpark"], ["rough estimate"], ["ballpark estimate"], ["rough figure"], ["order of magnitude", "plus technique"], ["ballpark number", "compréhensible, mais la collocation est ballpark FIGURE"]], err: [["size order", "Calque de « ordre de grandeur »."], ["order of size", "Calque. Dis : ballpark figure / order of magnitude."], ["ball park figure", "Ballpark en un seul mot."]] },

    // ── Idioms C1 ──
    "hit the nail on the head": { alt: [["nail it", "familier : « you nailed it »"], ["be spot on"], ["be right on the money", "US"], ["put your finger on it", "= mettre le doigt dessus"]], err: [["put the finger on it", "On dit put YOUR finger on it. Et l'idiome ici : hit the nail on the head."], ["hit the nail in the head", "C'est ON the head."], ["touch the nail on the head", "C'est HIT."], ["hit the nail on head", "Il manque l'article : on THE head."]] },
    "cut corners": { alt: [["take shortcuts"], ["skimp on", "+ complément"], ["do a rush job"], ["do a sloppy job"]], err: [["cut the corners", "Sans article : cut corners."], ["cut angles", "Calque. L'idiome : cut corners."], ["cut corner", "Toujours au pluriel : cornerS."], ["botch", "Botch = rater, saboter. Rogner sur la qualité = cut corners."]] },
    "the ball is in your court": { alt: [["the ball's in your court"], ["it's your move"], ["it's your call"], ["it's up to you"], ["over to you"]], err: [["the ball is in your camp", "Calque de « dans ton camp ». L'anglais dit COURT (terrain de tennis)."], ["the ball is on your court", "C'est IN your court."], ["the ball is in your field", "C'est COURT."], ["the ball is in your side", "C'est in your COURT."]] },
    "on the fence": { alt: [["undecided"], ["torn", "= partagé"], ["of two minds", "US"], ["in two minds", "UK"], ["sitting on the fence"]], err: [["in the fence", "C'est ON the fence (assis sur la barrière)."], ["indecise", "Ce mot n'existe pas. Indécis = undecided / indecisive."], ["on the wall", "L'idiome est on the FENCE."], ["between two chairs", "Calque de « entre deux chaises »."]] },
    "a blessing in disguise": { alt: [["blessing in disguise"], ["a silver lining", "= le bon côté d'un malheur"], ["a good thing in the end"]], err: [["a bad for a good", "Calque de « un mal pour un bien »."], ["a blessing in disguised", "Disguise est ici un nom : in disguise."], ["a benediction in disguise", "C'est BLESSING."], ["a blessing disguised", "L'expression figée : a blessing IN disguise."]] },
    "beat around the bush": { alt: [["beat about the bush", "UK"], ["dodge the question"], ["skirt around the issue"], ["avoid the point"]], err: [["turn around the pot", "Calque de « tourner autour du pot » 😄"], ["beat around the bushes", "Bush au singulier."], ["turn around the bush", "C'est BEAT around the bush."], ["beat round the pot", "C'est the BUSH."]] },
    "get the hang of it": { alt: [["get the hang of"], ["get the knack of it"], ["get used to it", "nuance : s'habituer"], ["pick it up", "= apprendre sur le tas"]], err: [["take the hand", "Calque de « prendre la main »."], ["take the hang of it", "C'est GET the hang of it."], ["get the hand of it", "HanG, pas hand."], ["get the hang on it", "C'est OF it."]] },
    "play it by ear": { alt: [["wing it", "familier : y aller sans préparation"], ["improvise"], ["see how it goes"], ["go with the flow", "= se laisser porter"]], err: [["play it by the ear", "Sans article : by ear."], ["play it by hear", "Ear (l'oreille), pas hear."], ["see on the moment", "Calque de « voir sur le moment »."], ["play by ear", "Il manque IT : play it by ear."]] },

    // ── Slang US ──
    "low-key": { alt: [["lowkey", "graphie courante en ligne"], ["low key"], ["kind of"], ["secretly"], ["a little bit"], ["discreetly", "sens propre uniquement. En slang, low-key = « un peu, sans trop l'avouer »"], ["quietly", "sens propre. En slang : low-key"]], err: [["low-keys", "Pas de s."]] },
    "high-key": { alt: [["highkey"], ["high key"], ["really"], ["totally"], ["straight up", "familier"], ["clearly", "juste pour le sens, mais on vise le slang : high-key"]], err: [["highly", "Highly = hautement (highly recommended)."], ["high-keys", "Pas de s."]] },
    "no cap": { alt: [["for real"], ["no lie"], ["not gonna lie"], ["ngl", "abréviation écrite de not gonna lie"], ["I swear"], ["deadass", "slang new-yorkais"], ["without lying", "correct mais littéral. Le slang : no cap"]], err: [["without lie", "Calque de « sans mentir »."], ["no caps", "Singulier : no cap."], ["not cap", "C'est NO cap."]] },
    "salty": { alt: [["bitter"], ["sore", "= mauvais perdant"], ["upset"], ["annoyed"], ["butthurt", "familier, moqueur"]], err: [["salted", "Salted = salé (au sens propre : salted butter)."], ["vexed", "Vexed est soutenu et vieilli."], ["salt", "Salt est le nom. L'adjectif : salty."], ["sour", "Sour = aigre (goût). Vexé, en slang : salty."]] },
    "to ghost": { alt: [["ghost someone"], ["cut off", "= couper les ponts"], ["go silent on"], ["stop replying to"], ["blank", "UK"]], err: [["phantom", "C'est GHOST."], ["disappear", "Disappear = disparaître (tout court). Ne plus répondre à quelqu'un : ghost."], ["ghoster", "Mot français. En anglais : to ghost."], ["do a ghost", "C'est un verbe : to ghost someone."]] },
    "to flex": { alt: [["show off"], ["brag", "= se vanter (en paroles)"], ["boast", "soutenu"], ["flex on", "+ personne"]], err: [["frime", "Mot français."], ["show", "Il manque OFF : show off."], ["make the beautiful", "Calque de « faire le beau » 😄"], ["flexing", "La base verbale : flex."]] },
    "sus": { alt: [["suspicious", "la forme complète"], ["sketchy", "familier US, très courant"], ["shady"], ["fishy"], ["suspect"]], err: [["louche", "Mot français (louche existe en anglais, mais rare et soutenu)."], ["suss", "Suss (out) = (UK) piger. Louche = sus."], ["sussy", "Variante de mème, pas la forme de base."]] },
    "Bet.": { alt: [["sounds good"], ["deal"], ["ok"], ["cool"], ["you got it"], ["for sure"]], err: [["I bet", "I bet = j'imagine / tu m'étonnes. Pour dire « ok » : bet."], ["it walks", "Calque de « ça marche » 😄"]] },

    // ── Exprimer ses émotions ──
    "I'm bummed": { alt: [["I'm bummed out"], ["I'm disappointed", "neutre"], ["I'm gutted", "UK"], ["that sucks", "familier"], ["I'm so bummed"]], err: [["I'm disgusted", "Faux-ami : disgusted = écœuré (physiquement, moralement). Dégoûté au sens déçu = bummed."], ["I'm deceived", "Faux-ami : deceived = trompé. Déçu = disappointed."], ["I'm bumed", "Deux m : bummed."], ["I'm deception", "Faux-ami : deception = tromperie. Déception = disappointment."]] },
    "I'm stoked": { alt: [["I'm pumped"], ["I'm thrilled", "plus soutenu"], ["I'm psyched"], ["I'm so excited"], ["I'm hyped"]], err: [["I'm too happy", "Calque de « trop content ». Too = excessivement. Dis : I'm so happy / I'm stoked."], ["I'm too content", "Calque. Dis : I'm stoked."], ["I'm stocked", "Stocked = approvisionné. Avec un seul c : stoked."], ["I'm excited of", "La préposition est ABOUT."]] },
    "it drives me nuts": { alt: [["it drives me crazy"], ["it drives me up the wall"], ["it bugs me", "plus léger"], ["it gets on my nerves"], ["it drives me insane"]], err: [["it makes me nuts", "On dit DRIVES me nuts (ou makes me crazy)."], ["it renders me crazy", "Calque de « ça me rend fou »."], ["it drives me nut", "Toujours au pluriel : nutS."], ["it turns me crazy", "C'est DRIVES me crazy."]] },
    "I'm freaking out": { alt: [["I'm panicking"], ["I'm losing it"], ["I'm stressing out"], ["I'm having a meltdown", "plus fort"], ["I'm freaked out", "nuance : état (je suis flippé)"]], err: [["I panic", "Au présent simple = une habitude. En ce moment : I'm panicking / I'm freaking out."], ["I'm panicing", "Avec un k : panicKing."], ["I'm freaking", "Il manque OUT."], ["I'm in panic", "On dit I'm in A panic, ou plus naturel : I'm freaking out."]] },
    "I'm over it": { alt: [["I'm done with it"], ["I've moved on"], ["I've had enough"], ["I'm sick of it", "= j'en ai marre"], ["I'm so over it"]], err: [["I'm on it", "Sens différent : I'm on it = je m'en occupe."], ["I'm above it", "Above = au-dessus (physiquement, ou moralement supérieur)."], ["I have my slap", "Calque de « j'en ai ma claque » 😄"], ["I'm over", "Il manque IT."]] },
    "it got to me": { alt: [["it affected me"], ["it hit me hard", "plus fort"], ["it upset me"], ["it bothered me"], ["it got under my skin", "= ça m'a agacé en profondeur"]], err: [["it touched me", "Touched = ému (positivement). Atteint, affecté : it got to me."], ["it reached me", "Reach = atteindre physiquement. Ici : it got to me."], ["it got me", "It got me = ça m'a eu / surpris. Il faut TO."], ["it attained me", "Calque de « ça m'a atteint »."]] },
    "I can't stand": { alt: [["I can't bear", "plus soutenu"], ["I hate"], ["I can't put up with"], ["I can't stand it when"], ["I can't take", "= je n'en peux plus de"]], err: [["I don't support", "Faux-ami classique : support = soutenir. Supporter (endurer) = stand / bear."], ["I can't support", "Faux-ami classique : support = soutenir. Supporter (endurer) = stand / bear."], ["I can't stand of", "Sans préposition : I can't stand people who…"], ["I can't suffer", "Calque. Dis : I can't stand."]] },
    "I'm pumped": { alt: [["I'm stoked"], ["I'm hyped"], ["I'm fired up"], ["I'm psyched"], ["I'm pumped up"]], err: [["I'm overexcited", "Overexcited est plutôt négatif (un enfant surexcité). Positif : pumped / stoked."], ["I'm pomped", "Avec un u : pumped."], ["I'm excited of", "La préposition est ABOUT / FOR."]] },

    // ── Être en désaccord poliment ──
    "I see where you're coming from": { alt: [["I see where you are coming from"], ["I see your point"], ["I get where you're coming from"], ["I understand your point of view"], ["I take your point", "UK"]], err: [["I see from where you come", "Calque. La préposition va à la fin : where you're coming FROM."], ["I see where you come from", "Au présent simple = ton origine géographique ! Pour un point de vue : where you're comING from."], ["I understand your point of vue", "View, pas vue."]] },
    "I'm not sure I'd go that far": { alt: [["I wouldn't go that far"], ["I wouldn't go as far as that"], ["I'm not sure I would go that far"], ["that's a bit of a stretch", "= c'est un peu exagéré"]], err: [["I wouldn't go until there", "Calque de « jusque-là »."], ["I'm not sure I'd go so far", "On dit THAT far (ou so far AS to say…)."], ["I wouldn't go to that far", "Sans to : go that far."]] },
    "Fair point, however": { alt: [["fair point, but"], ["good point, however"], ["fair enough, but"], ["that's a fair point, but"], ["point taken, but"]], err: [["good point, meanwhile", "Meanwhile = pendant ce temps. Cependant = however."], ["fair point, however that", "Pas de that après however."], ["just point, however", "Fair, pas just."]] },
    "I'd push back on that": { alt: [["I would push back on that"], ["I'm not sure I agree"], ["I see it differently"], ["I'd challenge that"], ["I disagree", "plus sec"]], err: [["I'm not agree", "Erreur classique : agree est un verbe. I DON'T agree / I disagree."], ["I am not agree", "Erreur classique : agree est un verbe. I DON'T agree / I disagree."], ["I'd push back that", "Il manque ON : push back ON that."], ["I'm not okay there", "Calque de « je ne suis pas d'accord là-dessus »."]] },
    "That's one way to look at it": { alt: [["that's one way of looking at it"], ["that's one way to see it"], ["that's one perspective"], ["I guess you could see it that way"]], err: [["it's a way to see", "Il manque le complément : to see IT. Et l'expression : that's ONE way to look at it."], ["that's one way to look it", "Look demande AT : look AT it."], ["that's a manner to see", "Calque de « une façon de voir »."]] },
    "Let's agree to disagree": { alt: [["we'll have to agree to disagree"], ["let's leave it at that", "= restons-en là"], ["we can agree to disagree"]], err: [["let's agree to not agree", "L'expression figée : agree to DISAGREE."], ["let's stay on our disagreements", "Calque."], ["let's agree to disagreeing", "Base verbale : to disagree."]] },
    "With all due respect": { alt: [["with respect"], ["with the greatest respect", "UK, très formel"], ["no offense, but", "familier"], ["respectfully"]], err: [["with all the respect", "L'expression figée : with all DUE respect."], ["save your respect", "Calque de « sauf votre respect »."], ["with all my respect", "L'expression figée : with all DUE respect."], ["with all due respects", "Singulier : respect."]] },
    "I hear you, but": { alt: [["I get that, but"], ["I understand, but"], ["I see your point, but"], ["I know, but"], ["I feel you, but", "familier"]], err: [["I listen you, but", "Listen demande TO, et l'expression est I HEAR you."], ["I ear you, but", "Ear = l'oreille. Le verbe : hear."], ["I heard you, but", "Au passé = « j'ai entendu ce que tu as dit ». L'expression d'empathie : I HEAR you."]] },

    // ── Répliques de séries ──
    "What's up with that?": { alt: [["what's that about"], ["what's the deal with that"], ["what's going on with that"], ["what is up with that"], ["what the hell"], ["what's up with this", "possible, mais l'expression figée est with THAT"]], err: [["what is this delirium", "Calque de « c'est quoi ce délire » 😄"], ["what's up of that", "La préposition est WITH."]] },
    "You've got to be kidding me": { alt: [["you have got to be kidding me"], ["you gotta be kidding me"], ["are you kidding me"], ["you're kidding"], ["you've got to be joking", "plutôt UK"], ["you must be joking"]], err: [["you make fun of me", "Make fun of = se moquer de (ridiculiser). « Tu te fiches de moi » = you've got to be kidding me."], ["you kid me", "On dit you're kidding me / are you kidding me."], ["you've got to kidding me", "Il manque BE : got to BE kidding."], ["you laugh of me", "Calque. Et on dit laugh AT."]] },
    "I'm all ears": { alt: [["go ahead"], ["I'm listening"], ["shoot", "familier : « vas-y, balance »"], ["tell me"]], err: [["I'm all ear", "Toujours au pluriel : all earS."], ["I'm all hearing", "Calque de « tout ouïe »."], ["I'm all listening", "L'idiome : I'm all ears."], ["I'm full ears", "C'est ALL ears."]] },
    "That's on me": { alt: [["my bad", "plus léger"], ["that's my fault"], ["I take the blame"], ["it's on me"], ["my mistake"], ["I own that", "pro"]], err: [["it's of my fault", "Sans of : it's my fault."], ["that's my false", "Faux-ami : false = faux (inexact). La faute = fault."], ["that's from me", "= ça vient de moi. Pour assumer : that's ON me."], ["it's on my", "On me, pas on my."]] },
    "My bad": { alt: [["my mistake"], ["sorry about that"], ["oops, my fault"], ["that's on me"], ["my fault"]], err: [["my false", "Faux-ami : false = inexact. Ma faute = my fault / my bad."], ["my wrong", "On dit my bad."], ["mine bad", "My, pas mine."]] },
    "I've got your back": { alt: [["I got your back"], ["I have your back"], ["I've got you"], ["I got you"], ["I'm with you"], ["I'll cover for you", "= je te couvre (au travail)"]], err: [["I cover you", "Cover for you = remplacer / couvrir au travail. Le soutien général : I've got your back."], ["I've got your backs", "Singulier : back."], ["I have your behind", "Behind = le derrière 😄 C'est BACK."], ["I've got you back", "Your, pas you : I've got YOUR back."]] },
    "Get out of here!": { alt: [["no way"], ["shut up", "familier, entre amis"], ["you're kidding"], ["get outta here"], ["get out", "plus court"]], err: [["without joking", "Calque de « sans déconner »."], ["exit from here", "Trop littéral 😄"], ["go out of here", "L'expression est GET out of here."], ["get out from here", "C'est get out OF here."]] },
    "Spill the tea": { alt: [["spill"], ["spill it"], ["spill the beans", "= vendre la mèche"], ["give me the gossip"], ["dish", "familier"], ["tell me everything"]], err: [["spill the tee", "Tea (le thé), pas tee."], ["throw the gossips", "Calque. Et gossip est indénombrable."], ["spill the coffee", "C'est the TEA."], ["balance the gossip", "Faux-ami : balance = équilibrer."]] },

    // ── Réductions avancées ──
    "shoulda": { alt: [["should have", "la forme complète"], ["should've"]], err: [["should of", "Faute courante même chez les natifs : c'est should HAVE."], ["shoulda have", "Shoulda contient déjà « have »."], ["shouda", "Avec un l : shoulda."]] },
    "coulda": { alt: [["could have", "la forme complète"], ["could've"]], err: [["could of", "Faute courante : c'est could HAVE."], ["coulda have", "Coulda contient déjà « have »."]] },
    "woulda": { alt: [["would have", "la forme complète"], ["would've"]], err: [["would of", "Faute courante : c'est would HAVE."], ["woulda have", "Woulda contient déjà « have »."]] },
    "didja": { alt: [["did you", "la forme complète"], ["did ya"]], err: [["did you did", "Un seul did."], ["didya", "La graphie habituelle : didja (le son « dj »)."]] },
    "whaddaya": { alt: [["what do you", "la forme complète"], ["whatcha"], ["what are you", "whaddaya peut aussi réduire what are you"]], err: [["what you", "Il manque l'auxiliaire dans la forme complète : what DO you."], ["wadaya", "Graphie habituelle : whaddaya."]] },
    "gotcha": { alt: [["got you", "la forme complète"], ["got it"], ["understood"], ["I see"], ["roger that", "familier"]], err: [["I have you", "Calque. Dis : got it / gotcha."], ["gotchya", "Graphie habituelle : gotcha."], ["comprised", "Faux-ami : comprised = composé de. Compris = understood / got it."], ["I got", "Il manque le complément : I got IT."]] },
    "outta": { alt: [["out of", "la forme complète"]], err: [["outa", "Deux t : outta."], ["outta of", "Outta contient déjà « of »."], ["out off", "C'est out OF."]] },
    "hafta": { alt: [["have to", "la forme complète"], ["gotta"], ["need to"]], err: [["hafta to", "Hafta contient déjà « to »."], ["hasta", "Hasta = has to (3e personne). Avec I / you / we / they : hafta."], ["must to", "Jamais to après must."]] },

    // ── Tournures natives ──
    "I'm down": { alt: [["I'm in"], ["I'm game"], ["count me in"], ["I'm up for it"], ["let's do it"], ["sure"]], err: [["I'm partant", "Mot français."], ["I'm leaving", "Calque de « partant » : leaving = en train de partir."], ["I'm feeling down", "Contresens : feeling down = déprimé."], ["I'm ok for", "Calque de « je suis ok pour ». Dis : I'm down / I'm in."]] },
    "It's not my thing": { alt: [["it's not really my thing"], ["it's not for me"], ["not my cup of tea"], ["I'm not into it"], ["it's not my jam", "familier US"]], err: [["it's not my trick", "Calque de « truc » : trick = astuce, tour."], ["it's not my stuff", "Stuff = mes affaires. Ici : thing."], ["it's not my truck", "Truck = camion 😄"], ["it's not my things", "Singulier : thing."]] },
    "I'm good": { alt: [["no thanks"], ["I'm fine"], ["I'm okay"], ["I'm all set", "US"], ["I'm good, thanks"]], err: [["I'm well", "I'm well = je vais bien (santé). Pour décliner une offre : I'm good."], ["no, thank", "Thanks, avec s."], ["it goes", "Calque de « ça va »."], ["that goes", "Calque de « ça va »."]] },
    "You do you": { alt: [["do your thing"], ["suit yourself", "peut sonner un peu sec"], ["whatever works for you"], ["it's your call"], ["up to you"]], err: [["do like you feel", "Calque de « fais comme tu le sens »."], ["do as you feel it", "Calque."], ["you make you", "C'est DO."], ["do you", "L'expression complète : YOU do you."]] },
    "That's a wrap": { alt: [["it's a wrap"], ["we're done"], ["that's it"], ["we're all done"], ["that wraps it up"], ["it's finished", "correct mais plat. Pour clore une séance : that's a wrap"]], err: [["that's a rap", "Rap = la musique. Avec un w : wrap."], ["that's a wrapped", "Wrap est ici un nom."], ["that's wrap", "Il manque l'article : that's A wrap."]] },
    "It is what it is": { alt: [["that's life"], ["that's just how it is"], ["that's the way it goes"], ["such is life", "soutenu, ironique"], ["oh well"]], err: [["it's like that", "Calque de « c'est comme ça ». L'expression de résignation : it is what it is."], ["it is how it is", "L'expression figée : it is WHAT it is."], ["it's so", "Calque."], ["that is what it is", "L'expression figée commence par IT."]] },
    "Let's call it a day": { alt: [["let's wrap it up"], ["let's stop here"], ["let's call it a night", "le soir"], ["that's enough for today"], ["let's pack it in", "UK"], ["let's stop there for today", "correct mais littéral. L'idiome : let's call it a day"]], err: [["let's call it the day", "C'est A day."], ["let's call a day", "Il manque IT : call IT a day."], ["let's name it a day", "C'est CALL."]] },
    "I'll pass": { alt: [["I'm good"], ["no thanks"], ["I'll sit this one out", "= je ne participe pas cette fois"], ["count me out"], ["not for me"], ["hard pass", "familier, catégorique"]], err: [["I pass my turn", "Calque de « je passe mon tour »."], ["I pass", "Au présent, ça sonne comme au poker. Pour décliner : I'LL pass."], ["I'll skip my turn", "Skip a turn = sauter un tour (jeu de société)."], ["I'll past", "Pass, pas past."]] },

    // ── Mots du quotidien US ──
    "to slop": { alt: [["spill", "renverser, neutre"], ["splash", "éclabousser"], ["slosh", "pour un liquide qui déborde en bougeant"]], err: [["slap", "Slap = gifler."], ["slope", "Slope = une pente."], ["reverse", "Faux-ami : reverse = inverser / faire marche arrière. Renverser un liquide = spill."], ["overturn", "Overturn = retourner (un objet, une décision). Renverser un liquide = spill / slop."]] },
    "jiggling": { alt: [["wiggling", "qui gigote"], ["shaking", "qui tremble, neutre"], ["bouncing", "qui rebondit"], ["fidgeting", "qui ne tient pas en place"], ["wobbling", "qui vacille"]], err: [["juggling", "Juggling = jongler."], ["giggling", "Giggling = glousser de rire."], ["jogging", "Jogging = courir."], ["trembling", "Trembling = trembler de peur ou de froid. Un petit mouvement rapide et répété : jiggling."]] },

    // ── Sur mesure — Tes faux pas (erreurs réelles relevées dans tes messages) ──
    "for the first hour": {
      alt: [["during the first hour", "correct, insiste sur « au cours de »"], ["in the first hour", "= à un moment à l'intérieur de la première heure"], ["for the first hour or so", "= à peu près"]],
      err: [["at the first hour", "Ton erreur du 10/11. AT désigne un moment précis (at 5 pm, at the start). Pour une durée : FOR the first hour."], ["since the first hour", "Since = depuis (un point de départ jusqu'à maintenant)."], ["the first hour", "Il manque la préposition : FOR the first hour."], ["during one hour", "« Pendant une heure » = for an hour. Ici : for the first hour."]]
    },
    "get to": {
      alt: [["reach", "un peu plus soutenu, sans préposition : reach Hyrule"], ["arrive in", "pour une ville, un pays, une région"], ["arrive at", "pour un lieu précis (gare, bâtiment)"], ["make it to", "= réussir à arriver"]],
      err: [["arrive to", "Erreur classique : on dit arrive AT ou arrive IN, jamais « arrive to »."], ["come to", "Ta version du 10/11. Pas faux, mais come = venir vers l'endroit où se trouve celui qui parle. Pour « arriver à un endroit » dans un récit, le réflexe natif est get to."], ["arrive", "Il manque la préposition : arrive AT / IN, ou get TO."], ["go to", "Go to = aller à (le trajet). Get to = arriver à (le moment où on y est)."]]
    },
    "performance": {
      alt: [["the performance"]],
      err: [["performances", "Ton erreur du 10/11. Pour un jeu ou une machine, performance est indénombrable : the performance IS decent. « Performances » = des prestations (acteurs, sportifs)."], ["the performances", "Pour un jeu ou une machine, performance est indénombrable : the performance IS decent."]]
    },
    "drop": {
      alt: [["dip", "baisse légère et passagère"], ["tank", "familier : s'effondrer"], ["fall", "neutre"], ["plummet", "chute brutale, soutenu"], ["decrease", "formel"], ["go down", "ta version du 10/11 : correcte mais plate. Un joueur dit « the FPS drops »"]],
      err: [["fall down", "Fall down = tomber par terre (une personne, un objet). Pour un chiffre : drop / fall."], ["chute", "Faux-ami : a chute = une goulotte, un toboggan."]]
    },
    "I had issues": {
      alt: [["I had problems"], ["I had some issues"], ["I was having issues", "insiste sur la durée"], ["I ran into issues", "= je suis tombé sur des problèmes"], ["I had trouble"]],
      err: [["I got issues", "Ton erreur du 10/11. « I got issues » = (familier) j'ai des problèmes, au présent. Pour un problème passé et réglé : I HAD issues."], ["I have had issues", "Present perfect = encore d'actualité. Ici c'est réglé : prétérit, I had issues."], ["I have issues", "Présent. Ici c'est du passé : I had issues."]]
    },
    "handed them the win": {
      alt: [["handed them the victory"], ["he handed them the win"], ["he handed them the victory"], ["gifted them the win", "très courant dans le commentaire sportif, souvent pour une erreur"], ["gifted them the victory"], ["gave them the win", "plus plat"], ["gave them the victory", "plus plat"]],
      err: [["offered them the victory", "Faux-ami relevé le 09/11 : offer = proposer (on peut refuser). Offrir au sens de donner : hand / gift / give."], ["offered them the win", "Faux-ami : offer = proposer (on peut refuser). Offrir au sens de donner : hand / gift / give."], ["he offered them the victory", "Faux-ami : offer = proposer (on peut refuser). Offrir au sens de donner : hand / gift / give."], ["he offered them the win", "Faux-ami : offer = proposer (on peut refuser). Offrir au sens de donner : hand / gift / give."]]
    },

    // ── Sur mesure — Tes bêtes noires (cartes SRS les plus ratées) ──
    "Quench": {
      tip: "Pense à « thirst-quencher », le mot des pubs de soda pour « désaltérant ». Quench rime avec drench (tremper) : de l'eau dans les deux cas.",
      alt: [["quench your thirst"], ["slake", "littéraire"]],
      err: [["refresh", "Refresh = rafraîchir (une page, la mémoire). Étancher la soif = quench."], ["hydrate", "Hydrate = hydrater. Désaltérer, étancher = quench."]]
    },
    "Conceited": {
      tip: "Vient de conceit (vanité), même famille que concept : quelqu'un de conceited a une trop haute idée de lui-même.",
      alt: [["arrogant"], ["full of himself", "oral, très courant"], ["full of yourself"], ["cocky", "familier : trop sûr de lui, plus que vaniteux"], ["vain", "= vaniteux, surtout sur l'apparence"], ["pretentious", "= prétentieux, qui se donne un genre"], ["proud", "nuance : proud est neutre ou positif (fier) ; conceited est toujours un reproche"]],
      err: [["concerned", "Confusion fréquente : concerned = inquiet / concerné. Orgueilleux = conceited."], ["orgulous", "Calque du français : ce mot ne s'emploie pas."]]
    },
    "to bestow (sth on sb)": {
      tip: "be + stow (déposer, ranger) : déposer solennellement quelque chose SUR quelqu'un, d'où bestow ON.",
      alt: [["grant", "accorder (un droit, une demande)"], ["award", "décerner (un prix)"], ["confer", "très soutenu, pour un titre ou un diplôme"], ["give", "juste, mais perd tout le côté solennel"]],
      err: [["offer", "Offer = proposer. Pour un octroi solennel : bestow / grant / award."], ["bestow to", "La préposition est ON : bestow something ON someone."]]
    },
    "Crooked": {
      tip: "A crook, c'est un crochet (la crosse du berger) et aussi un escroc. Ce qui est crooked est tordu comme un crochet ; a crooked cop est un flic « tordu », un ripou.",
      alt: [["bent", "plié, courbé"], ["twisted", "vrillé"], ["lopsided", "de travers, asymétrique"], ["wonky", "familier UK"]],
      err: [["crocked", "Crocked = (argot) bourré ou blessé. Tordu = crooked, avec deux o."], ["curved", "Curved = courbe, arrondi (c'est voulu). Crooked = tordu, de travers (c'est un défaut)."], ["torded", "Calque du français."]]
    },
    "Dwell": {
      tip: "A dwelling = une habitation. Dwell on something, c'est « habiter » dans une pensée et ne plus en sortir.",
      alt: [["dwell on", "s'attarder sur"], ["linger", "s'attarder (dans un lieu)"], ["reside", "demeurer, soutenu"], ["live", "demeurer, neutre"]],
      err: [["delay", "Delay = retarder. S'attarder sur = dwell on."], ["stay late", "Stay late = rester tard. S'attarder sur un sujet = dwell on."]]
    }
  },
  es: {
    // ── Sur mesure — Tus bestias negras (cartes SRS les plus ratées) ──
    "agacharse": {
      tip: "Gacho = baissé, tombant (con la cabeza gacha = la tête basse). A-gach-arse, c'est se mettre « gacho ».",
      alt: [["ponerse en cuclillas", "s'accroupir précisément, sur les talons"], ["acuclillarse", "plus rare"], ["inclinarse", "se pencher (le buste seulement)"]],
      err: [["bajarse", "Bajarse = descendre (d'un bus, d'un vélo). Se baisser = agacharse."], ["bajar", "Bajar = descendre, ou baisser quelque chose. Se baisser = agacharse."], ["agachar", "Verbe pronominal : agacharSE."]]
    },
    "subir": {
      tip: "Faux-ami total : subir = monter. Retiens la paire subir / bajar (monter / descendre), comme dans « sube el volumen ».",
      alt: [["montar", "monter sur ou dans (un cheval, un vélo), ou assembler"], ["ascender", "soutenu : ascension, promotion"]],
      err: [["levantar", "Levantar = lever, soulever. Monter = subir."], ["sufrir", "Sufrir = subir (au sens français). Le verbe espagnol subir veut dire monter."]]
    },
    "agarrar": {
      tip: "Vient de garra (la griffe, la serre) : agarrar, c'est attraper comme avec des griffes.",
      alt: [["coger", "Espagne (vulgaire en Amérique latine)"], ["tomar", "prendre, neutre, partout"], ["atrapar", "attraper ce qui s'échappe"], ["pillar", "familier, Espagne"]],
      err: [["prender", "Faux-ami : prender = allumer, accrocher. Prendre = coger, tomar, agarrar."], ["agarar", "Deux r : agarrar."]]
    },
    "plantilla": {
      tip: "Petite planta (plante du pied) : la plantilla est d'abord la semelle intérieure, donc un gabarit, puis la liste type du personnel, l'effectif.",
      alt: [["la plantilla"], ["modelo", "modèle, au sens général"], ["equipo", "l'équipe"], ["patrón", "patron (couture)"], ["plantel", "effectif d'une équipe, Amérique latine"]],
      err: [["efectivo", "Faux-ami : efectivo = argent liquide (pagar en efectivo). L'effectif d'une équipe = la plantilla."], ["plantillo", "Féminin : la plantilla."], ["planta", "Planta = plante, ou étage."]]
    },
    "sacar": {
      tip: "Pense à un sac : sacar, c'est sortir quelque chose du sac. Sacar una nota, sacar dinero, sacar fotos : on tire toujours quelque chose de quelque part.",
      alt: [["obtener", "obtenir, plus soutenu"], ["conseguir", "obtenir en y arrivant"], ["extraer", "extraire"]],
      err: [["salir", "Salir = sortir soi-même (intransitif). Sortir quelque chose = sacar."], ["tirar", "Faux-ami : tirar = jeter, lancer. Tirer quelque chose de = sacar."], ["sortir", "Mot français. En espagnol : salir (soi-même), sacar (quelque chose)."]]
    },
    "sino que": {
      tip: "No A, sino B. Si B contient un verbe conjugué, ajoute QUE : no me llamó, sino QUE me escribió.",
      alt: [],
      err: [["pero", "Après une négation qu'on corrige (« non pas A mais B »), l'espagnol exige sino / sino que, pas pero."], ["sino", "Sino seul va devant un nom, un adjectif ou un infinitif. Devant un verbe conjugué : sino QUE."], ["pero que", "La forme est sino que."], ["mas", "Mas = mais, littéraire et vieilli."]]
    },
    "maletero": {
      tip: "maleta (valise) + -ero (l'endroit prévu pour) : là où vont les valises.",
      alt: [["el maletero"], ["baúl", "Argentine, Colombie"], ["cajuela", "Mexique"], ["maletera", "Pérou, Chili"]],
      err: [["cofre", "Faux-ami : cofre = coffre au trésor, coffret. Coffre de voiture = maletero."], ["maleta", "Maleta = la valise. Le coffre = el maletero."], ["caja", "Caja = boîte, caisse."]]
    },
    "coger": {
      tip: "Même origine que « cueillir » (latin colligere) : coger, c'est cueillir, donc prendre. À éviter en Amérique latine.",
      alt: [["tomar", "neutre, partout"], ["agarrar", "Amérique latine"], ["pillar", "familier, Espagne"], ["atrapar", "attraper"]],
      err: [["prender", "Faux-ami : prender = allumer, accrocher."], ["cojer", "Avec un g : coger (mais yo cojo)."]]
    }
  },
  ln: {}
};
