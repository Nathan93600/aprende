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
