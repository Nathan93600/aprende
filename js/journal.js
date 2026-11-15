// ¡Aprende! — js/journal.js : Journal des mots (JOURNAL_SESSIONS), règles de grammaire et leur révision
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
  },
  {
    date: "8 nov. 2026",
    label: "Sport · Justice · Quotidien · Commerce & aviation",
    es: [
      ["alcanzar en el marcador","Rattraper au score","Nos están alcanzando en el marcador.","Ils nous rattrapent au score."],
      ["mientras ganemos","Tant qu'on gagne","Mientras ganemos, todo bien.","Tant qu'on gagne, tout va bien."],
      ["creerse","Se croire / Se prendre pour","¿Quiénes se creen que son?","Pour qui ils se prennent ?"],
      ["pensión alimenticia","Pension alimentaire","El juez le obligó a pagar una pensión alimenticia.","Le juge l'a obligé à payer une pension alimentaire."],
      ["estar encima de","Être sur qqn (sport)","No lo dejan respirar, están encima de él.","Ils le laissent pas respirer, ils sont sur lui."],
      ["apenas mirar","À peine regarder","Apenas lo va a mirar, seguro lo ignora.","Elle va à peine le regarder, elle va sûrement l'ignorer."],
      ["apañárselas","Se débrouiller","Tuvimos que apañárnoslas sin hotel.","On a dû se débrouiller sans hôtel."],
      ["colchón","Matelas","Me compré un colchón nuevo.","Je me suis acheté un nouveau matelas."],
      ["fletar","Affréter","Fletaron aviones cargueros Boeing.","Ils ont affrété des avions-cargos Boeing."],
      ["barriga","Ventre / Bide","Después de las vacaciones, tengo que bajar esta barriga.","Après les vacances, il faut que je perde ce bide."],
      ["bodega","Soute (avion)","Están llenando las bodegas de los aviones.","Ils remplissent les soutes des avions."],
      ["arancel","Droit de douane","Los aranceles subieron un 25%.","Les droits de douane ont augmenté de 25%."]
    ],
    ln: [],
    en: [
      ["to catch up (score)","Rattraper au score","They're catching up on the scoreboard.","Ils nous rattrapent au score."],
      ["who do they think they are","Pour qui ils se prennent","Who do they think they are, cutting in line?","Pour qui ils se prennent, à nous doubler dans la file ?"],
      ["alimony","Pension alimentaire (ex-conjoint)","He's been dodging his alimony payments.","Il esquive le paiement de sa pension alimentaire."],
      ["child support","Pension alimentaire (enfants)","The court ordered him to pay child support.","Le tribunal l'a obligé à payer une pension alimentaire."],
      ["to be all over someone","Être sur qqn / Marquer de près","Every time he gets the ball, they're all over him.","À chaque fois qu'il reçoit le ballon, ils sont sur lui."],
      ["to brush off","Ignorer / Balayer (fig.)","She just brushed it off and moved on.","Elle a juste ignoré et est passée à autre chose."],
      ["to rough it","Vivre à la dure","We forgot the tent so we had to rough it.","On a oublié la tente alors on a dû faire à la dure."],
      ["mattress","Matelas","I need to replace my mattress.","Je dois changer mon matelas."],
      ["chartered","Affrété / Agréé","She's a chartered accountant.","Elle est expert-comptable."],
      ["cargo plane","Avion-cargo","They chartered Boeing cargo planes.","Ils ont affrété des avions-cargos Boeing."],
      ["belly","Ventre / Bide","The startup went belly up after six months.","La startup a fait faillite au bout de six mois."],
      ["belly hold","Soute ventrale","They're filling the belly holds of transport planes.","Ils remplissent les soutes des avions de transport."],
      ["freight","Fret","Air freight costs have skyrocketed.","Les coûts du fret aérien ont explosé."],
      ["tariff","Droit de douane","New tariffs kicked in last week.","Les nouveaux droits de douane sont entrés en vigueur la semaine dernière."],
      ["payload","Charge utile","The payload capacity of a 747 is massive.","La capacité de charge utile d'un 747 est énorme."],
      ["to go belly up","Faire faillite","Three companies went belly up this quarter.","Trois entreprises ont fait faillite ce trimestre."]
    ],
    alertes: [
      ["alcanzar : double sens","alcanzar = atteindre (physique/objectif) ET rattraper (quelqu'un/un score). Nos alcanzan = ils nous rattrapent."],
      ["creerse vs creer","creer = croire (qqch). creerse = se croire / se prendre pour. ¿Quién se cree que es? ≠ ¿Quién cree que es?"],
      ["apenas : position","Devant le verbe : apenas habla = il parle à peine. Aussi temporel : apenas llegué = dès que je suis arrivé (Latam)."],
      ["fletar / flete / fletado","fletar = affréter. flete = fret / prix du transport. fletado = affrété. Vuelo fletado = vol charter."],
      ["bodega : selon le contexte","🇪🇸 bodega = cave à vin / cellier. ✈️ bodega = soute d'avion. 🇲🇽 bodega = entrepôt / épicerie. Toujours féminin."],
      ["chartered : double sens 🇬🇧","1) Professionnel agréé (chartered accountant). 2) Affrété (chartered flight). Deux sens très différents, même adjectif."],
      ["to go belly up 🇬🇧","Métaphore du poisson mort qui flotte ventre en l'air. Toujours négatif : faillite, échec. Ne pas confondre avec belly flop (plat dans l'eau)."],
      ["alimony vs child support 🇬🇧","alimony = pension à l'ex-conjoint (🇺🇸). child support = pension pour les enfants. En français, 'pension alimentaire' couvre les deux."]
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
