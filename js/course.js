// ¡Aprende! — js/course.js : Parcours et moteur de leçons ; thèmes (clair, sombre, fond d'écran) ; barre d'onglets
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
function crsSetDone(lang, u, n) { const p = crsJ('crs_prog', {}); p[lang] = p[lang] || {}; if((p[lang][u] || 0) < n) { if(lang === 'en' && typeof c1Mark === 'function') { const l = (c1Log()[c1Day()] || {}); c1Mark('unit', (l.unit || 0) + (n - (p[lang][u] || 0))); } p[lang][u] = n; } crsSetJ('crs_prog', p); }
function crsCurrent(lang) {
  const U = COURSES[lang].units;
  for(let u = 0; u < U.length; u++) { if(U[u].free) continue; const d = crsDone(lang, u); if(d < CRS_NODES) return { u, n: d }; }
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
function crsSpeak(lang, text, noRec) {
  if(!CRS_META[lang].tts || !text) return;
  if(lang === 'en') return speakEN(text);
  if(!noRec && playRecorded(lang, text, 0, () => crsSpeak(lang, text, true))) return;
  try {
    if(_recAudio) { const old = _recAudio; _recAudio = null; try { old.pause(); } catch(e) {} }
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
/* ── Corrections multi-variantes (traduction libre) — données dans courses/feedback.js ── */
function crsFbNorm(s) {
  return String(s || '').replace(/[’‘`´]/g, "'").replace(/…/g, '').toLowerCase().trim()
    .replace(/[.!?,;:]+$/g, '').replace(/^to\s+(?=\S)/, '').replace(/\s+/g, ' ').trim();
}
function crsFbCheck(lang, w, val) {
  const fb = (typeof CRS_FB !== 'undefined' && CRS_FB[lang] && CRS_FB[lang][w[0]]) || null;
  const v = crsFbNorm(val);
  const alts = fb && fb.alt ? fb.alt : [];
  // variantes à montrer : pas celles qui ne diffèrent de la réponse attendue que par la ponctuation
  const tn = crsFbNorm(w[0]);
  const shown = alts.filter(a => crsFbNorm(a[0]) !== tn).slice(0, 4);
  const others = shown.length ? `<span class="almost-msg">Se dit aussi : ${shown.map(a => `<b>${crsEsc(a[0])}</b>`).join(' · ')}</span>` : '';
  // 1. réponse attendue (chaque variante séparée par « / » compte)
  const bare = String(w[0]).replace(/\s*[(\[][^)\]]*[)\]]/g, '').trim();
  const targets = [w[0], bare, ...bare.split(/\s+\/\s+/)].filter(Boolean);
  let almost = false;
  for(const t of targets) {
    const m = fuzzyMatch(v, crsFbNorm(t));
    if(m.exact) return { kind: 'exact', others };
    if(m.almost) almost = true;
  }
  // 1 bis. lingala : l'impératif (yamba) donné à la place de l'infinitif (koyamba)
  if(lang === 'ln' && /^ko/i.test(bare) && !/\s/.test(bare) && v && v === crsFbNorm(bare).slice(2) && !alts.some(a => crsFbNorm(a[0]) === v))
    return { kind: 'err', msg: `« ${v} » est l'impératif. L'infinitif prend le préfixe ko- : ${bare.toLowerCase()}.` };
  // 2. erreurs typiques — testées avant la tolérance aux fautes de frappe,
  //    sinon « at the time being » passerait pour une coquille de « for the time being »
  if(fb && fb.err) for(const e of fb.err) {
    const sub = e[0][0] === '*', pat = crsFbNorm(sub ? e[0].slice(1) : e[0]);
    if(sub ? v.includes(pat) : v === pat) return { kind: 'err', msg: e[1] };
  }
  // 3. autres formulations acceptées
  for(const strict of [true, false]) for(const a of alts) {
    if(a[0].includes('…')) continue;
    const m = fuzzyMatch(v, crsFbNorm(a[0]));
    if(strict ? m.exact : (m.almost && a[0].length > 6)) return { kind: 'alt', text: a[0], note: a[1] || '' };
  }
  if(almost) return { kind: 'almost', others };
  return { kind: 'miss', others };
}
function crsCheck() {
  const ex = crs.q[crs.i], L = crs.lang;
  // NEW: dictée
  if(ex.t === 'dictee') {
    const inp = document.getElementById('ls-dict-inp'); if(!inp) return;
    const val = inp.value.trim(); if(!val) return;
    const m = fuzzyMatch(val, ex.w[0]);
    if(m.exact) { inp.classList.add('ok'); crsResult(true, ex.w[0], ex.w[2] ? `« ${ex.w[2]} » — ${ex.w[3]}` : ''); }
    else if(m.almost) { inp.classList.add('ok'); crsResult(true, ex.w[0], ex.w[2] ? `« ${ex.w[2]} » — ${ex.w[3]}` : '', `<span class="almost-msg">Presque ! La réponse exacte est : <b>${crsEsc(ex.w[0])}</b></span>`); }
    else { inp.classList.add('ko'); crsResult(false, ex.w[0], ex.w[2] ? `« ${ex.w[2]} » — ${ex.w[3]}` : ''); }
    crsSpeak(L, ex.w[0]); return;
  }
  // NEW: traduction libre
  if(ex.t === 'freetr') {
    const inp = document.getElementById('ls-freetr-inp'); if(!inp) return;
    const val = inp.value.trim(); if(!val) return;
    const r = crsFbCheck(L, ex.w, val);
    const exLine = ex.w[2] ? `« ${ex.w[2]} » — ${ex.w[3]}` : '';
    if(r.kind === 'exact') { inp.classList.add('ok'); crsResult(true, ex.w[0], '', r.others); }
    else if(r.kind === 'almost') { inp.classList.add('ok'); crsResult(true, ex.w[0], '', `<span class="almost-msg">Presque ! → <b>${crsEsc(ex.w[0])}</b></span>`); }
    else if(r.kind === 'alt') { inp.classList.add('ok'); crsResult(true, ex.w[0], exLine, `<span class="almost-msg">✔︎ <b>${crsEsc(r.text)}</b> est valable aussi${r.note ? ' — ' + crsEsc(r.note) : ''}.<br>Ici on visait : <b>${crsEsc(ex.w[0])}</b></span>`); }
    else if(r.kind === 'err') { inp.classList.add('ko'); crsResult(false, ex.w[0], exLine, `<span class="almost-msg">⚠️ <b>${crsEsc(val)}</b> — ${crsEsc(r.msg)}</span>`); }
    else { inp.classList.add('ko'); crsResult(false, ex.w[0], exLine, r.others); }
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
function crsResult(good, corr, extra, html) {
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
    crsFoot('ok', `<div class="ft">✅ ${crsPraise()}</div>${extra ? `<div class="fx">${crsEsc(extra)}</div>` : ''}${html ? `<div class="fx">${html}</div>` : ''}`);
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
    crsFoot('ko', `<div class="ft">❌ ${corr ? crsP('correct') : crsP('almost')}</div>${corr ? `<div class="fx"><b>${crsEsc(corr)}</b></div>` : ''}${extra ? `<div class="fx">${crsEsc(extra)}</div>` : ''}${html ? `<div class="fx">${html}</div>` : ''}`);
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
  const open = n < d || (u === cur.u && n === cur.n) || (unit.free && n === d);
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
    ${unit.w.map((w, i) => `<div class="gw">${spk ? `<button class="spk" onclick="crsSpeak('${lang}', COURSES['${lang}'].units[${u}].w[${i}][0])">🔊</button>` : ''}<div style="flex:1"><div class="gw-w">${crsEsc(w[0])}${w[4] ? '<span class="unv">à valider</span>' : ''}</div><div class="gw-f">${crsEsc(w[1])}</div>${w[2] ? `<div class="gw-e">« ${crsEsc(w[2])} » — ${crsEsc(w[3])}</div>` : ''}</div>${ficheHas(lang, w[0]) ? `<button class="spk" title="Fiche" onclick="openFiche('${lang}', COURSES['${lang}'].units[${u}].w[${i}][0], () => crsGuide('${lang}', ${u}))">＋</button>` : ''}</div>`).join('')}
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
  // sections « sur mesure » (4e champ = 'top') affichées en premier ; leurs unités sont en accès libre
  const secOrder = C.sections.map((s, i) => i).sort((a, b) => (C.sections[b][3] ? 1 : 0) - (C.sections[a][3] ? 1 : 0));
  secOrder.forEach(si => {
    const s = C.sections[si];
    const units = C.units.map((x, i) => [x, i]).filter(([x]) => x.s === si);
    const allDone = units.every(([x, i]) => crsDone(lang, i) >= 5);
    h += `<div class="sec-card"><div class="sk">${s[3] ? '🎯 ' + s[0] : 'Section ' + (si + 1) + ' · ' + s[0]}${allDone ? ' · ✅' : ''}</div><div class="sn">${crsEsc(s[1])}</div><div class="sd">${crsEsc(s[2])}</div>
      ${!allDone && !s[3] ? `<div class="sbtn"><button class="gbtn ghost" onclick="crsAskTest('${lang}',${si})">⏩ Je connais déjà : passer le test</button></div>` : ''}</div>`;
    units.forEach(([x, ui]) => {
      const d = crsDone(lang, ui), locked = !x.free && ui > cur.u && d === 0;
      h += `<div class="unit-ban${locked ? ' locked' : ''}"><span class="ue">${x.e}</span><div><div class="uk">${x.free ? 'Accès libre' : 'Unité ' + (ui + 1)}</div><div class="ut">${crsEsc(x.t)}</div></div><button class="ug" onclick="crsGuide('${lang}',${ui})">📘 Guide</button></div><div class="nodes">`;
      for(let n = 0; n < CRS_NODES; n++) {
        const st = n < d ? 'done' : ((ui === cur.u && n === cur.n) || (x.free && n === d)) ? 'cur' : 'lock';
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
// ── Apparence : mode clair / sombre / auto, fond d'écran par langue ──
function fxThemePref() { try { return localStorage.getItem('aprende_theme') || 'auto'; } catch(e) { return 'auto'; } }
function fxWallPref() { try { return localStorage.getItem('aprende_wall') !== '0'; } catch(e) { return true; } }
function fxApplyTheme() {
  const p = fxThemePref(), dark = p === 'dark' || (p === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const b = document.body; b.classList.add('pop'); b.classList.toggle('dark', dark); b.classList.toggle('wall', fxWallPref());
  const paper = getComputedStyle(b).getPropertyValue('--fx-paper').trim() || '#ffcf9f';
  document.documentElement.style.background = paper; document.documentElement.classList.toggle('pre-dark', dark);
  const m = document.querySelector('meta[name="theme-color"]'); if(m) m.setAttribute('content', paper);
}
function fxSetTheme(v) { try { localStorage.setItem('aprende_theme', v); } catch(e) {} fxApplyTheme(); try { openSettingsModal(); } catch(e) {} }
function fxSetWall(on) { try { localStorage.setItem('aprende_wall', on ? '1' : '0'); } catch(e) {} fxApplyTheme(); }
try { window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', fxApplyTheme); } catch(e) {}
document.addEventListener('DOMContentLoaded', fxApplyTheme);
function crsTheme(t) {
  const b = document.body;
  ['t-hub', 't-es', 't-ln', 't-en'].forEach(c => b.classList.remove(c));
  b.classList.add('t-' + (t || 'hub'));
  try { fxApplyTheme(); } catch(e) {}
}
function tabGo(t) {
  const L = currentLang || 'es';
  if(t === 'path') openPath(L);
  else if(t === 'srs') openSRS(L);
  else if(t === 'games') { crsLastTab = 'games'; crsOrigSelectLang(L); }
  else if(t === 'hero') openHero();
  else if(t === 'shop') openShop();
}
