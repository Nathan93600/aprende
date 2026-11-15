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
