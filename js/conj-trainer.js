// ¡Aprende! — js/conj-trainer.js : Entraîneur de conjugaison progressif
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
  { key: 'perfecto',    e: '🟤', n: 'Passé composé', d: 'he hablado, has visto', color: '#d6a36c' },
  { key: 'imperativo',  e: '❗', n: 'Impératif',    d: 'Ordres et conseils', color: '#ff9db0' },
  { key: 'subj_imperfecto', e: '⚪', n: 'Subj. imparfait', d: 'si tuviera, si fuera', color: '#cfd8e6' },
];
const CT_DIFFS = ['Facile','Normal','Difficile'];
let ct = null; // state

function ctStarsKey() { return 'ct_stars'; }
function ctGetStars() { try { return JSON.parse(localStorage.getItem(ctStarsKey()) || '{}'); } catch(e) { return {}; } }
function ctSetStars(tense, stars) { const s = ctGetStars(); s[tense] = Math.max(s[tense]||0, stars); localStorage.setItem(ctStarsKey(), JSON.stringify(s)); }
function ctStarStr(n) { return '⭐'.repeat(n) + '☆'.repeat(3-n); }

// ── Atelier conjugaison : un seul jeu, quatre modes (mixte, phrases, QCM, tableau) ──
const CT_MIX = { key: 'mix', e: '🎲', n: 'Mélange', d: 'Tous les temps', color: '#ff8ae6' };
const CT_MODES = [['mix', '🔀 Mixte'], ['fill', '✍️ Phrases'], ['qcm', '🎯 QCM'], ['table', '📋 Tableau']];
const CT_LENS = [8, 12, 16];
const CT_TILE = { presente: 'var(--mint)', preterito: 'var(--coral)', imperfecto: 'var(--sun)', futuro: 'var(--sky)', condicional: '#c9b3ff', subjuntivo: '#ffb877', perfecto: '#e3c39a', imperativo: '#ffb3c1', subj_imperfecto: '#d9e2ef', mix: 'var(--pink)' };
// Personnes qu'on peut demander pour ce verbe à ce temps (pas de « yo » à l'impératif, pas de vosotros en mode ustedes)
function ctPersons(forms, tense) { return [0, 1, 2, 3, 4, 5].filter(i => forms[i] && (typeof conjPersonOk !== 'function' || conjPersonOk(tense, i))); }
function ctPron(tense, i) { return typeof conjPron === 'function' ? conjPron(tense, i) : PRONOUNS[i]; }
function ctInfo(key) { return key === 'mix' ? CT_MIX : CT_TENSES.find(t => t.key === key); }
function ctEsc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

function initCT(mode) {
  showScreen('screen-conjtrainer');
  const keep = ct && ct.phase ? ct : {};
  ct = { phase: 'setup', mode: mode || keep.mode || 'mix', diff: keep.diff == null ? 1 : keep.diff, tense: keep.tense || null };
  ctRenderSetup();
  document.getElementById('ct-foot').style.display = 'none';
  document.getElementById('ct-fill').style.width = '0%';
  document.getElementById('ct-top').style.display = 'none';
}
function ctRenderSetup() {
  const stars = ctGetStars(), body = document.getElementById('ct-body');
  const tile = t => `<button class="cw-tile${ct.tense === t.key ? ' on' : ''}" style="--c:${CT_TILE[t.key]}" onclick="ctChooseTense('${t.key}')" aria-pressed="${ct.tense === t.key}">
      <span class="cw-tile-e">${t.e}</span><b>${t.n}</b><small>${t.d}</small><i>${ctStarStr(stars[t.key] || 0)}</i></button>`;
  body.innerHTML = `<div class="cw-setup">
    <div class="cw-head"><button class="cw-back" onclick="goHome()" aria-label="Retour">←</button><div><h2>Atelier conjugaison</h2><p>Choisis un temps, puis lance-toi.</p></div></div>
    <div class="cw-tiles">${CT_TENSES.map(tile).join('')}${tile(CT_MIX)}</div>
    <div class="cw-label">Type d'exercice</div>
    <div class="cw-chips">${CT_MODES.map(([k, l]) => `<button class="cw-chip${ct.mode === k ? ' on' : ''}" onclick="ctSetMode('${k}')">${l}</button>`).join('')}</div>
    <div class="cw-label">Longueur</div>
    <div class="cw-chips">${CT_LENS.map((n, i) => `<button class="cw-chip${ct.diff === i ? ' on' : ''}" onclick="ctSetDiff(${i})">${['Courte', 'Normale', 'Longue'][i]} · ${n}</button>`).join('')}</div>
    <div class="cw-label">2ᵉ personne du pluriel</div>
    <div class="cw-chips"><button class="cw-chip${conjUstedes() ? '' : ' on'}" onclick="conjSetUstedes(false); ctRenderSetup()">🇪🇸 vosotros (Espagne)</button><button class="cw-chip${conjUstedes() ? ' on' : ''}" onclick="conjSetUstedes(true); ctRenderSetup()">🌎 ustedes (Amérique latine)</button></div>
    <button class="gbtn cw-go" onclick="ctStart()" ${ct.tense ? '' : 'disabled'}>${ct.tense ? 'Commencer · ' + ctInfo(ct.tense).n : 'Choisis un temps'}</button>
    <p class="cw-note">Les accents comptent. Un verbe raté reviendra dans Réviser.</p>
  </div>`;
}
function ctChooseTense(k) { ct.tense = k; ctRenderSetup(); }
function ctSetMode(k) { ct.mode = k; ctRenderSetup(); }
function ctSetDiff(d) { ct.diff = d; ctRenderSetup(); }

function ctPickTense(tense) { ct.tense = tense; ctStart(); }   // ancien point d'entrée
function ctStart() {
  if(!ct.tense) return;
  ct.tenseInfo = ctInfo(ct.tense);
  const total = CT_LENS[ct.diff] || 12, tenses = CT_TENSES.map(t => t.key);
  const verbs = shuffle([...ALL_CONJ_VERBS]), exercises = [];
  for(let i = 0; exercises.length < total && i < verbs.length * 2; i++) {
    const verb = verbs[i % verbs.length], tense = ct.tense === 'mix' ? tenses[Math.floor(Math.random() * tenses.length)] : ct.tense;
    const forms = CONJ_DB[verb][tense];
    if(!forms) continue;
    const ps = ctPersons(forms, tense); if(!ps.length) continue;
    exercises.push({ verb, tense, forms, type: ct.mode === 'mix' ? ctPickType(exercises.length, total) : ct.mode, pIdx: ps[Math.floor(Math.random() * ps.length)] });
  }
  // en mode phrases : d'abord les verbes qui ont une vraie phrase à déclencheur
  if(ct.mode === 'fill' && typeof conjSentences === 'function') {
    const withS = shuffle(CONJ_SENT.map((s, i) => i).filter(i => (ct.tense === 'mix' || CONJ_SENT[i][1] === ct.tense) && conjPersonOk(CONJ_SENT[i][1], CONJ_SENT[i][2]))).slice(0, total);
    withS.forEach((si, k) => { const s = CONJ_SENT[si]; exercises[k] = { verb: s[0], tense: s[1], forms: CONJ_DB[s[0]][s[1]], type: 'fill', pIdx: s[2], sent: si }; });
  }
  Object.assign(ct, { exercises, idx: 0, correct: 0, errors: 0, streak: 0, maxStreak: 0, phase: 'play', answered: false, missed: [] });
  document.getElementById('ct-top').style.display = '';
  document.getElementById('ct-foot').style.display = '';
  ctRender();
}

function ctPickType(i, total) {
  const r = Math.random(), progress = i / total;
  if (progress < 0.3) return r < 0.5 ? 'qcm' : 'fill';
  if (progress < 0.6) return r < 0.3 ? 'qcm' : r < 0.7 ? 'fill' : 'identify';
  return r < 0.2 ? 'qcm' : r < 0.55 ? 'fill' : r < 0.75 ? 'identify' : 'table';
}

function ctVerbCard(ex, noTense) {
  const t = ctInfo(ex.tense), fr = getVerbFR(ex.verb);
  return `<div class="cw-verb" style="--c:${CT_TILE[ex.tense]}"><b>${ctEsc(ex.verb)}</b>${fr ? `<small>${ctEsc(fr)}</small>` : ''}${noTense ? '' : `<span>${t.e} ${t.n}</span>`}</div>`;
}
function ctKeys(id) { return `<div class="conj-keys">${['á', 'é', 'í', 'ó', 'ú', 'ñ'].map(ch => `<button type="button" onclick="ctType('${ch}')">${ch}</button>`).join('')}</div>`; }
function ctType(ch) {
  const inp = ct.lastInput && document.body.contains(ct.lastInput) ? ct.lastInput : document.querySelector('#ct-body input:not([readonly])');
  if(!inp || inp.readOnly) return;
  const a = inp.selectionStart == null ? inp.value.length : inp.selectionStart, b = inp.selectionEnd == null ? a : inp.selectionEnd;
  inp.value = inp.value.slice(0, a) + ch + inp.value.slice(b);
  inp.focus(); try { inp.setSelectionRange(a + 1, a + 1); } catch(e) {}
}

function ctRender() {
  if (ct.idx >= ct.exercises.length) { ctFinish(); return; }
  const ex = ct.exercises[ct.idx];
  ct.answered = false; ct.lastInput = null;
  document.getElementById('ct-foot').className = 'ls-foot';
  document.getElementById('ct-fb').innerHTML = '';
  document.getElementById('ct-btn').textContent = 'Vérifier';
  document.getElementById('ct-fill').style.width = (ct.idx / ct.exercises.length * 100) + '%';
  document.getElementById('ct-streak-n').textContent = ct.streak;
  const body = document.getElementById('ct-body');
  if (ex.type === 'qcm') ctRenderQCM(body, ex);
  else if (ex.type === 'fill') ctRenderFill(body, ex);
  else if (ex.type === 'identify') ctRenderIdentify(body, ex);
  else ctRenderTable(body, ex);
  body.querySelectorAll('input').forEach(i => i.addEventListener('focus', () => { ct.lastInput = i; }));
  window.scrollTo({ top: 0 });
}

function ctRenderQCM(body, ex) {
  const pron = ctPron(ex.tense, ex.pIdx), correct = ex.forms[ex.pIdx];
  const distractors = new Set();
  ex.forms.forEach((f, j) => { if(f && j !== ex.pIdx) distractors.add(f); });
  CT_TENSES.forEach(t => { const f = CONJ_DB[ex.verb][t.key]; if(f && t.key !== ex.tense && f[ex.pIdx]) distractors.add(f[ex.pIdx]); });   // même personne, autre temps : le vrai piège
  distractors.delete(correct);
  const opts = shuffle([correct, ...shuffle([...distractors]).slice(0, 3)]);
  ct.correctAnswer = correct; ct.opts = opts; ct.selected = null;
  body.innerHTML = `${ctVerbCard(ex)}<div class="ls-h">Quelle forme pour <span class="cw-pron">${pron}</span> ?</div>
    <div class="opts">${opts.map((o, i) => `<button class="opt" data-i="${i}" onclick="ctSelectOpt(this, ${i})">${ctEsc(o)}</button>`).join('')}</div>`;
}
function ctSelectOpt(el, i) {
  if (ct.answered) return;
  document.querySelectorAll('#ct-body .opt').forEach(b => b.classList.remove('sel'));
  el.classList.add('sel');
  ct.selected = ct.opts[i];
}

function ctRenderFill(body, ex) {
  const pron = ctPron(ex.tense, ex.pIdx), correct = ex.forms[ex.pIdx];
  ct.correctAnswer = correct;
  // une vraie phrase à déclencheur quand elle existe, sinon une amorce qui annonce le temps
  if(ex.sent == null && typeof conjSentences === 'function') { const ss = conjSentences(ex.verb, ex.tense).filter(i => conjPersonOk(ex.tense, CONJ_SENT[i][2])); if(ss.length) { ex.sent = ss[Math.floor(Math.random() * ss.length)]; ex.pIdx = CONJ_SENT[ex.sent][2]; } }
  if(ex.sent != null) ct.correctAnswer = conjAnswer(CONJ_SENT[ex.sent]);
  const s = ex.sent != null ? CONJ_SENT[ex.sent] : null;
  const p1 = pron.split('/')[0].trim();
  const text = s ? s[3] : ex.tense === 'imperativo' ? `¡___! (${p1})` : ex.tense === 'subj_imperfecto' ? `Si ${p1} ___…` : `${typeof CONJ_LEAD !== 'undefined' ? CONJ_LEAD[ex.tense] : ''} ${p1} ___`.trim();
  const parts = ctEsc(text).split('___');
  body.innerHTML = `${ctVerbCard(ex)}
    <div class="cw-sent">${parts[0]}<span class="conj-gap" id="ct-gap">${'&nbsp;'.repeat(6)}</span>${parts[1] || ''}</div>
    <div class="cw-fr">${s ? ctEsc(s[4]) : ctEsc(pron) + ' · ' + ctInfo(ex.tense).n.toLowerCase()}</div>
    <input type="text" class="cw-input" id="ct-input" placeholder="${ctEsc(ex.verb)} → …" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">
    ${ctKeys()}`;
  const inp = document.getElementById('ct-input');
  setTimeout(() => inp && inp.focus(), 100);
  inp.addEventListener('keydown', e => { if(e.key === 'Enter') { e.preventDefault(); ctAction(); } });
}

function ctRenderIdentify(body, ex) {
  const correct = ex.forms[ex.pIdx], pron = ctPron(ex.tense, ex.pIdx), me = ctInfo(ex.tense);
  // on écarte les temps dont la forme est identique (hablamos : présent et prétérit)
  const others = CT_TENSES.filter(t => t.key !== ex.tense && CONJ_DB[ex.verb][t.key] && CONJ_DB[ex.verb][t.key][ex.pIdx] !== correct);
  const opts = shuffle([me, ...shuffle(others).slice(0, 3)]);
  ct.correctAnswer = me.n; ct.opts = opts.map(t => t.n); ct.selected = null;
  body.innerHTML = `${ctVerbCard(ex, true)}<div class="cw-sent">« ${ex.tense === 'imperativo' ? '¡' : ctEsc(pron.split('/')[0]) + ' '}<b>${ctEsc(correct)}</b>${ex.tense === 'imperativo' ? '! (' + ctEsc(pron) + ')' : ''} »</div><div class="ls-h">Quel temps est-ce ?</div>
    <div class="opts">${opts.map((t, i) => `<button class="opt" data-i="${i}" onclick="ctSelectOpt(this, ${i})">${t.e} ${t.n}</button>`).join('')}</div>`;
}

function ctRenderTable(body, ex) {
  ct.correctAnswer = '__table__';
  const rows = ctPersons(ex.forms, ex.tense), reveal = ct.mode === 'table' ? 0 : 2, shown = shuffle([...rows]).slice(0, reveal);
  body.innerHTML = `${ctVerbCard(ex)}<div class="ls-h">Complète les formes</div>
    <div class="cw-table">${rows.map(i => [ctPron(ex.tense, i), i]).map(([p, i]) => `<label><span>${p}</span>${shown.includes(i)
      ? `<input class="cw-cell given" value="${ctEsc(ex.forms[i])}" readonly tabindex="-1" data-idx="${i}">`
      : `<input class="cw-cell" data-idx="${i}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="${p}">`}<em></em></label>`).join('')}</div>
    ${ctKeys()}`;
  const cells = [...body.querySelectorAll('.cw-cell:not([readonly])')];
  if(cells[0]) setTimeout(() => cells[0].focus(), 100);
  cells.forEach((inp, k) => inp.addEventListener('keydown', e => { if(e.key === 'Enter') { e.preventDefault(); if(cells[k + 1]) cells[k + 1].focus(); else ctAction(); } }));
}

function ctJudge(v, a) { return typeof conjJudge === 'function' ? conjJudge(v, a) : (String(v).trim().toLowerCase() === String(a).toLowerCase() ? 'ok' : 'ko'); }
function ctAction() {
  if (!ct || ct.phase !== 'play') return;
  if (ct.answered) { ct.idx++; ctRender(); return; }
  const ex = ct.exercises[ct.idx], foot = document.getElementById('ct-foot'), fb = document.getElementById('ct-fb');
  let isCorrect = false, note = '';

  if (ex.type === 'qcm' || ex.type === 'identify') {
    if (ct.selected == null) return;
    isCorrect = ct.selected === ct.correctAnswer;
    document.querySelectorAll('#ct-body .opt').forEach(b => {
      const v = ct.opts[+b.dataset.i];
      if(v === ct.correctAnswer) b.classList.add('good'); else if(b.classList.contains('sel')) b.classList.add('bad');
      b.disabled = true;
    });
  } else if (ex.type === 'fill') {
    const inp = document.getElementById('ct-input');
    if(!inp.value.trim()) { inp.focus(); return; }
    const verdict = ctJudge(inp.value, ct.correctAnswer);
    isCorrect = verdict === 'ok';
    if(verdict === 'accent') note = `Presque : l'accent compte. « ${ctEsc(inp.value.trim())} » → « ${ctEsc(ct.correctAnswer)} »`;
    inp.classList.add(isCorrect ? 'ok' : 'ko'); inp.readOnly = true; inp.blur();
    const gap = document.getElementById('ct-gap'); if(gap) { gap.textContent = ex.sent != null ? conjCap(CONJ_SENT[ex.sent][3], ct.correctAnswer) : ct.correctAnswer; gap.classList.add(isCorrect ? 'ok' : 'ko'); }
  } else {
    const cells = [...document.querySelectorAll('#ct-body .cw-cell:not([readonly])')];
    if(cells.every(c => !c.value.trim())) { cells[0] && cells[0].focus(); return; }
    let bad = 0, acc = 0;
    cells.forEach(inp => {
      const want = ex.forms[+inp.dataset.idx], verdict = ctJudge(inp.value, want);
      inp.classList.add(verdict === 'ok' ? 'ok' : 'ko'); inp.readOnly = true;
      if(verdict !== 'ok') { bad++; if(verdict === 'accent') acc++; inp.parentElement.querySelector('em').textContent = want; }
    });
    isCorrect = bad === 0;
    if(!isCorrect) note = `${cells.length - bad} sur ${cells.length}${acc ? ' · attention aux accents' : ''}`;
    if(document.activeElement && document.activeElement.blur) document.activeElement.blur();
  }

  ct.answered = true;
  const s = ex.sent != null && typeof CONJ_SENT !== 'undefined' ? CONJ_SENT[ex.sent] : null;
  const why = ex.type === 'fill' && typeof CONJ_WHY !== 'undefined' ? `<div class="fx">${s ? '« ' + ctEsc(s[5]) + ' » → ' : ''}${CONJ_WHY[ex.tense]}</div>` : '';
  if (isCorrect) {
    ct.correct++; ct.streak++;
    if(ct.streak > ct.maxStreak) ct.maxStreak = ct.streak;
    foot.className = 'ls-foot ok';
    fb.innerHTML = `<div class="ft">✅ ${ct.streak > 2 ? 'Série de ' + ct.streak + ' !' : 'Correct !'}</div>${why}`;
    try { if(typeof SFX !== 'undefined' && SFX.sfxEnabled()) SFX.playCorrect(); haptic('light'); } catch(e) {}
  } else {
    ct.errors++; ct.streak = 0;
    foot.className = 'ls-foot ko';
    const ans = ex.type === 'table' ? '' : `<div class="fx">Réponse : <b>${ctEsc(ct.correctAnswer)}</b></div>`;
    fb.innerHTML = `<div class="ft">❌ ${note && ex.type !== 'table' ? 'Presque' : 'Raté'}</div>${note ? `<div class="fx">${note}</div>` : ans}${why}`;
    try { if(typeof SFX !== 'undefined' && SFX.sfxEnabled()) SFX.playWrong(); haptic('error'); } catch(e) {}
    // le verbe raté revient à la fin, et dans Réviser
    if(!ex.retry) {
      if(!ct.missed.some(m => m.verb === ex.verb && m.tense === ex.tense)) ct.missed.push({ verb: ex.verb, tense: ex.tense });
      try { if(typeof conjBump === 'function') conjBump(ex.verb, ex.tense); } catch(e) {}
      ct.exercises.push({ ...ex, retry: true });
    }
  }
  document.getElementById('ct-streak-n').textContent = ct.streak;
  document.getElementById('ct-btn').textContent = 'Continuer';
  // on fait entendre la bonne réponse (voix enregistrée)
  try { const say = ex.sent != null ? conjFill(CONJ_SENT[ex.sent]) : ex.type === 'table' ? '' : ex.forms[ex.pIdx]; if(say) crsSpeak('es', say); } catch(e) {}
}

function ctFinish() {
  const total = ct.correct + ct.errors;
  const pct = total ? Math.round(ct.correct / total * 100) : 0;
  const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
  ctSetStars(ct.tense, stars);
  if(typeof badgeSoon === 'function') badgeSoon();
  const xpGain = ct.correct * 8 + ct.maxStreak * 5, goldGain = Math.floor(ct.correct * 2);
  if(typeof addXP === 'function') addXP('es', xpGain);
  if(typeof rpg !== 'undefined' && rpg) { rpgAddGold(goldGain); rpgLog(`Conjugaison ${ct.tenseInfo.n} : ${pct}% (${ctStarStr(stars)})`); rpgSave(); }
  ct.phase = 'done';
  document.getElementById('ct-top').style.display = 'none';
  document.getElementById('ct-foot').style.display = 'none';
  const missed = ct.missed.map(m => `<div class="cw-miss"><b>${ctEsc(m.verb)}</b><span>${ctInfo(m.tense).n}</span><em>${CONJ_DB[m.verb][m.tense].filter(Boolean).map(ctEsc).join(' · ')}</em></div>`).join('');
  document.getElementById('ct-body').innerHTML = `<div class="cw-done">
    <div class="cw-done-e">${stars >= 2 ? '🎉' : stars >= 1 ? '👏' : '💪'}</div>
    <h2>${ct.tenseInfo.n}</h2>
    <div class="cw-stars">${ctStarStr(stars)}</div>
    <div class="cw-kpis">
      <div style="--c:var(--mint)"><b>${ct.correct}</b><span>justes</span></div>
      <div style="--c:var(--coral)"><b>${ct.errors}</b><span>erreur${ct.errors > 1 ? 's' : ''}</span></div>
      <div style="--c:var(--sun)"><b>${ct.maxStreak}</b><span>série max</span></div>
    </div>
    <p class="cw-note">+${xpGain} XP · +${goldGain} 🪙</p>
    ${missed ? `<div class="cw-label">À revoir · ces verbes reviendront dans Réviser</div><div class="cw-missed">${missed}</div>` : ''}
    <button class="gbtn cw-go" onclick="initCT()">Rejouer</button>
    <button class="gbtn cw-ghost" onclick="goHome()">Retour aux jeux</button>
  </div>`;
  window.scrollTo({ top: 0 });
  try { if(stars >= 2) confetti('small'); } catch(e) {}
}

function ctQuit() {
  if(ct && ct.phase === 'play' && ct.idx > 0) {
    if(!confirm('Quitter l\'entraînement ?')) return;
  }
  goHome();
}
