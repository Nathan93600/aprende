// ¡Aprende! — Corrections multi-variantes pour la traduction libre (freetr)
// Clé = mot cible exact (w[0]) du cours.
//   alt : [[autre réponse acceptée, nuance (optionnelle)], ...]  -> compté juste
//   err : [[erreur typique de francophone, explication], ...]    -> compté faux, avec explication ciblée
//         (préfixe "*" = l'erreur est détectée n'importe où dans la réponse)
// Rempli à chaque « génère » du vendredi pour les mots de la semaine.
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
    }
  },
  es: {},
  ln: {}
};
