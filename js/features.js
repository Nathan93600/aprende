// ¡Aprende! — js/features.js : Réponses tolérantes, objectifs du jour, flashcards à glisser, XP flottant, badges
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
// ── Succès par langue (anglais, espagnol) ──
// p() renvoie [où j'en suis, objectif] : sert à la fois au test et à la barre de progression.
const BADGE_GROUPS = [['gen', '🏅 Général'], ['en', '🇬🇧 Anglais'], ['es', '🇪🇸 Espagnol']];
let _bc = null;   // données lues une seule fois par vérification
function bcData() {
  if(_bc) return _bc;
  const data = srsLoad(), log = srsRevlogLoad(), now = Date.now(), DAY = 864e5, d = { now };
  for(const l of ['en', 'es']) {
    const o = d[l] = { mature: 0, rev: 0, units: 0, unitsAll: 0, ret: null, ret30n: 0, prodOk: 0, ecouteOk: 0, maxIv: 0 };
    for(const k in data) if(k.startsWith(l + ':')) { const c = data[k]; if(c.reps && (c.interval || 0) >= 21) o.mature++; if((c.interval || 0) > o.maxIv) o.maxIv = c.interval || 0; }
    try { const U = COURSES[l].units; o.unitsAll = U.length; U.forEach((u, i) => { if(crsDone(l, i) >= CRS_NODES) o.units++; }); } catch(e) {}
  }
  let conjOk = 0; const conjTenses = new Set();
  const r30 = { en: [0, 0], es: [0, 0] }, since = now - 30 * DAY, days = {};
  for(const r of log) {
    const k = r[0], ok = r[2] > 0;
    if(k.startsWith('en:') || k.startsWith('es:')) {
      const l = k.slice(0, 2); d[l].rev++;
      if(r[3] === 2 && r[1] >= since) { r30[l][0]++; if(ok) r30[l][1]++; }
      if(r[1] >= now - 60 * DAY) { const day = new Date(r[1]).toDateString(); (days[l] = days[l] || {})[day] = ((days[l] || {})[day] || 0) + 1; }
    } else if(k.startsWith('conj:')) { if(ok) { conjOk++; conjTenses.add(k.split('|')[1]); } }
    else if(/^(prod|ecoute):/.test(k) && ok) { const p = k.split(':'); if(d[p[1]]) d[p[1]][p[0] + 'Ok']++; }
  }
  for(const l of ['en', 'es']) { d[l].ret = r30[l][0] >= 200 ? Math.round(100 * r30[l][1] / r30[l][0]) : null; d[l].ret30n = r30[l][0]; d[l].bigDay = Math.max(0, ...Object.values(days[l] || {})); }
  d.conjOk = conjOk; d.conjTenses = conjTenses.size;
  const stars = (typeof ctGetStars === 'function' && ctGetStars()) || {}, tens = (typeof CONJ_TENSES !== 'undefined' ? CONJ_TENSES : []);
  d.atelier3 = Object.values(stars).filter(x => x >= 3).length; d.atelierAll = tens.filter(t => (stars[t] || 0) >= 1).length; d.atelierTot = tens.length;
  const rep = typeof orLoad === 'function' ? orLoad() : [];
  d.reports = rep.filter(r => r.lang === 'en').length; d.reportsC1 = rep.some(r => r.lang === 'en' && /C1|C2/i.test(r.level || ''));
  d.reportsSrc = new Set(rep.filter(r => r.lang === 'en').map(r => r.src).filter(Boolean)).size;
  // programme C1 : une semaine du programme entièrement cochée (7 jours complets)
  d.c1Week = 0;
  try { const L = c1Log(), start = new Date(C1_PLAN.start + 'T00:00:00').getTime();
    for(let w = 0; w < C1_PLAN.weeks.length; w++) { let n = 0; for(let i = 0; i < 7; i++) { const x = L[c1Day(new Date(start + (w * 7 + i) * DAY))]; if(x && x.done) n++; } d.c1Week = Math.max(d.c1Week, n); } } catch(e) {}
  const sd = crsJ('stories_done', []), st = l => { try { const S = STORIES[l]; return (Array.isArray(S) ? S : Object.values(S || {})).filter(Boolean).length; } catch(e) { return 0; } };
  for(const l of ['en', 'es']) { d[l].stories = sd.filter(k => k.startsWith(l + '_')).length; d[l].storiesAll = st(l); }
  return (_bc = d);
}
const bcP = (f, goal) => () => { const v = f(bcData()); return [Math.min(v, goal), goal]; };
const bcAll = (f, g) => () => { const d = bcData(), v = f(d), t = g(d); return [Math.min(v, t), t]; };
BADGES_DEF.push(
  // 🇬🇧 Anglais
  { g: 'en', id: 'en_mature25', e: '🌿', n: 'Racines', d: '25 mots anglais acquis (révision à 21 jours ou plus)', p: bcP(d => d.en.mature, 25) },
  { g: 'en', id: 'en_mature100', e: '🌳', n: 'Vocabulaire solide', d: '100 mots anglais acquis', p: bcP(d => d.en.mature, 100) },
  { g: 'en', id: 'en_mature300', e: '🗽', n: 'New Yorkais', d: '300 mots anglais acquis', p: bcP(d => d.en.mature, 300) },
  { g: 'en', id: 'en_mature690', e: '🏆', n: 'Vocabulaire C1', d: '690 mots anglais acquis : la cible du programme', p: bcP(d => d.en.mature, 690) },
  { g: 'en', id: 'en_rev500', e: '🔁', n: 'Endurant', d: '500 révisions en anglais', p: bcP(d => d.en.rev, 500) },
  { g: 'en', id: 'en_rev2500', e: '🏃', n: 'Marathonien', d: '2 500 révisions en anglais', p: bcP(d => d.en.rev, 2500) },
  { g: 'en', id: 'en_day150', e: '⚡', n: 'Grosse journée', d: '150 révisions d\'anglais en un jour', p: bcP(d => d.en.bigDay, 150) },
  { g: 'en', id: 'en_units10', e: '🧭', n: 'Explorateur', d: '10 unités anglaises terminées', p: bcP(d => d.en.units, 10) },
  { g: 'en', id: 'en_unitsAll', e: '🎓', n: 'Parcours bouclé', d: 'Toutes les unités anglaises terminées', p: bcAll(d => d.en.units, d => d.en.unitsAll) },
  { g: 'en', id: 'en_stories', e: '🎬', n: 'Scénariste', d: 'Toutes les histoires anglaises terminées', p: bcAll(d => d.en.stories, d => d.en.storiesAll) },
  { g: 'en', id: 'en_ret90', e: '🎯', n: 'Mémoire d\'éléphant', d: '90 % de rétention en anglais sur 30 jours (200 révisions au moins)', p: () => { const d = bcData().en; return [d.ret != null && d.ret >= 90 ? 1 : 0, 1]; }, info: () => { const d = bcData().en; return d.ret == null ? `${d.ret30n}/200 révisions` : `${d.ret} %`; } },
  { g: 'en', id: 'en_prod50', e: '🗣️', n: 'Ça sort tout seul', d: '50 cartes de production réussies en anglais', p: bcP(d => d.en.prodOk, 50) },
  { g: 'en', id: 'en_ecoute50', e: '🎧', n: 'Oreille américaine', d: '50 cartes d\'écoute réussies en anglais', p: bcP(d => d.en.ecouteOk, 50) },
  { g: 'en', id: 'en_report1', e: '🎙️', n: 'Premier rapport', d: 'Importer un rapport d\'oral', p: bcP(d => d.reports, 1) },
  { g: 'en', id: 'en_report10', e: '📻', n: 'Bavard', d: '10 rapports d\'oral importés', p: bcP(d => d.reports, 10) },
  { g: 'en', id: 'en_report30', e: '🎤', n: 'Orateur', d: '30 rapports d\'oral importés', p: bcP(d => d.reports, 30) },
  { g: 'en', id: 'en_both', e: '🤝', n: 'Deux coachs', d: 'Un rapport de Gemini et un de ChatGPT', p: bcP(d => d.reportsSrc, 2) },
  { g: 'en', id: 'en_c1level', e: '🦅', n: 'Niveau C1', d: 'Un rapport d\'oral qui te donne C1', p: () => [bcData().reportsC1 ? 1 : 0, 1] },
  { g: 'en', id: 'en_c1week', e: '📅', n: 'Semaine parfaite', d: 'Les 7 jours d\'une semaine du programme C1 complets', p: bcP(d => d.c1Week, 7) },
  // 🇪🇸 Espagnol
  { g: 'es', id: 'es_mature25', e: '🌱', n: 'Semilla', d: '25 mots espagnols acquis', p: bcP(d => d.es.mature, 25) },
  { g: 'es', id: 'es_mature100', e: '🌻', n: 'Girasol', d: '100 mots espagnols acquis', p: bcP(d => d.es.mature, 100) },
  { g: 'es', id: 'es_mature300', e: '⛪', n: 'Sagrada Família', d: '300 mots espagnols acquis', p: bcP(d => d.es.mature, 300) },
  { g: 'es', id: 'es_rev1000', e: '💃', n: 'Flamenco', d: '1 000 révisions en espagnol', p: bcP(d => d.es.rev, 1000) },
  { g: 'es', id: 'es_rev5000', e: '🐂', n: 'Incansable', d: '5 000 révisions en espagnol', p: bcP(d => d.es.rev, 5000) },
  { g: 'es', id: 'es_day150', e: '☀️', n: 'Día de sol', d: '150 révisions d\'espagnol en un jour', p: bcP(d => d.es.bigDay, 150) },
  { g: 'es', id: 'es_units15', e: '🗺️', n: 'Camino', d: '15 unités espagnoles terminées', p: bcP(d => d.es.units, 15) },
  { g: 'es', id: 'es_unitsAll', e: '🎓', n: 'Graduado', d: 'Toutes les unités espagnoles terminées', p: bcAll(d => d.es.units, d => d.es.unitsAll) },
  { g: 'es', id: 'es_stories', e: '📖', n: 'Cuentacuentos', d: 'Toutes les histoires espagnoles terminées', p: bcAll(d => d.es.stories, d => d.es.storiesAll) },
  { g: 'es', id: 'es_ret90', e: '🧠', n: 'Memoria de hierro', d: '90 % de rétention en espagnol sur 30 jours (200 révisions au moins)', p: () => { const d = bcData().es; return [d.ret != null && d.ret >= 90 ? 1 : 0, 1]; }, info: () => { const d = bcData().es; return d.ret == null ? `${d.ret30n}/200 révisions` : `${d.ret} %`; } },
  { g: 'es', id: 'es_conj50', e: '🔁', n: 'Conjugador', d: '50 cartes de conjugaison réussies', p: bcP(d => d.conjOk, 50) },
  { g: 'es', id: 'es_conj300', e: '⚙️', n: 'Máquina', d: '300 cartes de conjugaison réussies', p: bcP(d => d.conjOk, 300) },
  { g: 'es', id: 'es_tenses', e: '⏳', n: 'Maître du temps', d: 'Une carte réussie à chacun des 9 temps', p: bcAll(d => d.conjTenses, () => (typeof CONJ_TENSES !== 'undefined' ? CONJ_TENSES.length : 9)) },
  { g: 'es', id: 'es_atelier3', e: '⭐', n: 'Sans faute', d: '3 étoiles à un temps de l\'Atelier conjugaison', p: bcP(d => d.atelier3, 1) },
  { g: 'es', id: 'es_atelierAll', e: '🌠', n: 'Tous les temps', d: 'Au moins une étoile à chaque temps de l\'Atelier', p: bcAll(d => d.atelierAll, d => d.atelierTot) },
  { g: 'es', id: 'es_prod50', e: '🗣️', n: 'Lengua suelta', d: '50 cartes de production réussies en espagnol', p: bcP(d => d.es.prodOk, 50) },
  { g: 'es', id: 'es_ecoute50', e: '👂', n: 'Buen oído', d: '50 cartes d\'écoute réussies en espagnol', p: bcP(d => d.es.ecouteOk, 50) },
);
BADGES_DEF.forEach(b => { if(!b.g) b.g = /_en|^en_/.test(b.id) ? 'en' : /_es|^es_/.test(b.id) ? 'es' : 'gen'; if(b.p && !b.check) b.check = () => { const [v, t] = b.p(); return t > 0 && v >= t; }; });
function badgeCheck() {
  _bc = null;
  const earned = crsJ('badges_earned', []);
  let newBadges = [];
  BADGES_DEF.forEach(b => {
    if(earned.includes(b.id)) return;
    try { if(b.check()) { earned.push(b.id); newBadges.push(b); } } catch(e) {}
  });
  _bc = null;
  if(newBadges.length) {
    crsSetJ('badges_earned', earned);
    newBadges.slice(0, 3).forEach((b, i) => setTimeout(() => showToast(`🏅 Succès : ${b.e} ${b.n}`, 'correct-toast'), i * 1600));
    if(newBadges.length > 3) setTimeout(() => showToast(`🏅 Et ${newBadges.length - 3} autre(s) succès débloqué(s)`, 'correct-toast'), 4800);
    if(rpg) { rpgAddGold(15 * newBadges.length); newBadges.forEach(b => rpgLog(`🏅 Badge obtenu : ${b.e} ${b.n}`)); rpgSave(); }
  }
  return newBadges;
}
// Vérification groupée, quelques secondes après une activité (révision, leçon, atelier, rapport)
let _badgeT = null;
function badgeSoon() { clearTimeout(_badgeT); _badgeT = setTimeout(() => { try { badgeCheck(); } catch(e) {} }, 2500); }
function openBadges() {
  badgeCheck();
  showScreen('screen-badges');
  const earned = crsJ('badges_earned', []), esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  _bc = null;
  const item = b => {
    const ok = earned.includes(b.id); let prog = '';
    if(!ok && b.p) { try { const [v, t] = b.p(); if(t > 1) prog = `<i class="bprog"><i style="width:${Math.round(100 * v / t)}%"></i></i><small>${v.toLocaleString('fr-FR')} / ${t.toLocaleString('fr-FR')}</small>`; else if(b.info) prog = `<small>${esc(b.info())}</small>`; } catch(e) {} }
    return `<div class="badge-item${ok ? ' earned' : ''}" title="${esc(b.d)}"><span class="be">${b.e}</span><b>${esc(b.n)}</b><span>${esc(b.d)}</span>${prog}</div>`;
  };
  document.getElementById('badges-body').innerHTML = `<div class="pg-title">🏅 Badges & Succès</div>
    <div style="font-size:.85rem;color:var(--muted);margin-bottom:1rem">${earned.length} / ${BADGES_DEF.length} débloqués</div>
    ${BADGE_GROUPS.map(([g, name]) => { const list = BADGES_DEF.filter(b => b.g === g), n = list.filter(b => earned.includes(b.id)).length;
      // à débloquer : les plus avancés d'abord
      const score = b => { try { const [v, t] = b.p ? b.p() : [0, 1]; return t ? v / t : 0; } catch(e) { return 0; } };
      const sorted = [...list.filter(b => earned.includes(b.id)), ...list.filter(b => !earned.includes(b.id)).sort((a, b) => score(b) - score(a))];
      return `<div class="badge-sec"><div class="badge-sec-h">${name}<span>${n} / ${list.length}</span></div><div class="badge-grid">${sorted.map(item).join('')}</div></div>`; }).join('')}`;
  _bc = null;
}
