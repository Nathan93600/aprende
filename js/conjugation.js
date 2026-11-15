// ¡Aprende! — js/conjugation.js : Conjugaison espagnole : base CONJ_DB, QCM, tableau, leçons subjonctif et gérondif
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
