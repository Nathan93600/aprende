// ¡Aprende! — js/core.js : État des jeux, navigation entre écrans (showScreen), utilitaires
// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
let state = {
  xp: parseInt(localStorage.getItem('xp')||'0'),
  streak: parseInt(localStorage.getItem('streak')||'0'),
  mastered: JSON.parse(localStorage.getItem('mastered')||'[]'),
  currentGame: null,
};
let gameState = {};

function saveState() {
  localStorage.setItem('xp', state.xp);
  localStorage.setItem('streak', state.streak);
  localStorage.setItem('mastered', JSON.stringify(state.mastered));
}

function updateHomeStats() {
  animateCounter(document.getElementById('stat-score'), state.xp);
  animateCounter(document.getElementById('stat-streak'), state.streak);
  animateCounter(document.getElementById('stat-mastered'), state.mastered.length);
}

// ═══════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if(target) {
    target.classList.add('active');
    // Scroll to top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Refresh SRS due badges when returning to language selector
    if(id === 'lang-select') updateSRSDueBadges();
  }
  // Desktop toggle only on the home screen on mobile, so it never covers game buttons
  const dt = document.getElementById('desktop-toggle');
  if(dt) dt.style.display = (id === 'lang-select' || document.body.classList.contains('desktop-mode')) ? '' : 'none';
}

function goHome() {
  stopSpeed();
  // Stop SRS simulation timer if running
  if(srsState && srsState.simTimer) { clearInterval(srsState.simTimer); srsState.simTimer = null; }
  updateSRSDueBadges();
  if(currentLang === 'ln') {
    updateLNStats();
    showScreen('home-ln');
  } else if(currentLang === 'en') {
    updateENStats();
    updateNativeBests();
    updatePronBadge();
    showScreen('home-en');
  } else {
    updateHomeStats();
    showScreen('home');
  }
}

function startGame(game) {
  state.currentGame = game;
  if(game === 'flashcard') initFlashcard();
  else if(game === 'qcm') initQCM();
  else if(game === 'typing') initTyping();
  else if(game === 'conjugation') initConjugation();
  else if(game === 'speed') initSpeed();
  else if(game === 'survival') initSurvival();
  else if(game === 'tempsdefi') initTD();
  else if(game === 'conjtrainer') initCT('mix');
  else if(game === 'conjqcm') initCT('qcm');
  else if(game === 'conjfill') initCT('table');
  else if(game === 'lecons') initLecons();
  else if(game === 'palette') initPalette();
  else if(game === 'mindmap') initMindMap();
  else if(game === 'story') initStory();
  else if(game === 'colorletters') initColorLetters();
  else if(game === 'aura') initAura();
  else if(game === 'imagementale') initImageMentale();
  else if(game === 'calendrier') initCalendrier();
  else if(game === 'wordle') initWordle();
  else if(game === 'anagramme') initAnagramme();
  else if(game === 'quisuisje') initQuiSuisJe();
  else if(game === 'blitz') initBlitz();
  else if(game === 'chaine') initChaine();
}

// ═══════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════
function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }
function pick(arr, n) { return shuffle(arr).slice(0, n); }
function normalize(s) {
  return s.toLowerCase().trim()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9\s]/g,'').trim();
}

function showToast(msg, type='') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast show ${type}`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2000);
}

function addXP(n) {
  if(state && typeof state.xp !== 'undefined') {
    state.xp += n;
    saveState();
  }
  // Also update localStorage XP for lingala/english contexts
  const xpKey = currentLang === 'ln' ? 'ln_xp' : currentLang === 'en' ? 'en_xp' : 'es_xp';
  const cur = parseInt(localStorage.getItem(xpKey)||'0');
  localStorage.setItem(xpKey, cur + n);
  if(n > 0) scoreRise(`+${n} XP`, 'xp');
}

/* ── Rising score indicator ── */
function scoreRise(text, type = 'xp') {
  const el = document.createElement('div');
  el.className = `score-rise ${type}`;
  el.textContent = text;
  document.body.appendChild(el);
  el.addEventListener('animationend', () => el.remove());
}

function setProgress(fillId, current, total) {
  document.getElementById(fillId).style.width = (current/total*100)+'%';
}

// ── Onglet Jeux (espagnol) : les jeux où l'on produit le mot restent visibles, les autres vont dans « Plus de jeux » ──
const GAMES_KEEP = ['typing', 'survival', 'wordle', 'blitz', 'anagramme', 'conjtrainer', 'lecons'];
function gamesTidy() {
  const home = document.getElementById('home');
  if(!home || home.dataset.tidy) return;
  home.dataset.tidy = '1';
  const first = home.querySelector('.games-grid'); if(!first) return;
  const game = c => { const m = (c.getAttribute('onclick') || '').match(/startGame\('([a-z]+)'\)/); return m ? m[1] : ''; };
  const cards = [...home.querySelectorAll('.game-card')];
  const more = document.createElement('div'); more.className = 'games-grid';
  cards.filter(c => !GAMES_KEEP.includes(game(c))).forEach(c => { c.style.gridColumn = ''; more.appendChild(c); });
  GAMES_KEEP.forEach(g => { const c = cards.find(x => game(x) === g); if(c) { c.style.gridColumn = ''; first.appendChild(c); } });
  // les anciennes sections, vidées de leurs jeux, disparaissent
  [...home.children].forEach(el => { if(el !== first && el.querySelector && el.querySelector('.games-grid') && !el.querySelector('.game-card')) el.remove(); });
  if(!more.children.length) return;
  const det = document.createElement('details'); det.className = 'more-games';
  det.innerHTML = `<summary>Plus de jeux <span>${more.children.length}</span></summary>`;
  det.appendChild(more);
  first.after(det);
}
document.addEventListener('DOMContentLoaded', () => { try { gamesTidy(); } catch(e) { console.warn('[Aprende] rangement des jeux', e); } });
