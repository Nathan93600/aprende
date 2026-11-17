// ¡Aprende! — js/lang.js : Langue courante et choix de langue
// ═══════════════════════════════════════════════
// LANGUE
// ═══════════════════════════════════════════════
let currentLang = 'es';

function selectLang(lang) {
  currentLang = lang;
  updateSidebarLang(lang);
  if(lang === 'es') {
    updateHomeStats();
    showScreen('home');
  } else if(lang === 'ln') {
    updateLNStats();
    showScreen('home-ln');
  } else if(lang === 'en') {
    updateENStats();
    updateNativeBests();
    updatePronBadge();
    if(typeof oralTextsBadge === 'function') oralTextsBadge();
    showScreen('home-en');
  }
}

// Highlight active language in the sidebar
function updateSidebarLang(lang) {
  document.querySelectorAll('.ds-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Update SRS due badges in the sidebar (called by updateSRSDueBadges)
function updateSidebarBadges() {
  const data = JSON.parse(localStorage.getItem('srs_data') || '{}');
  const now = Date.now();
  const todayEnd = new Date(); todayEnd.setHours(23,59,59,999);
  const endMs = todayEnd.getTime();
  const counts = { es: 0, ln: 0, en: 0 };
  Object.values(data).forEach(c => {
    if(counts[c.lang] === undefined || c.reps === 0) return;
    if(c.due <= endMs) counts[c.lang]++;
  });
  ['es','ln','en'].forEach(l => {
    const badge = document.getElementById('ds-badge-' + l);
    if(!badge) return;
    if(counts[l] > 0) { badge.textContent = counts[l]; badge.classList.add('visible'); }
    else badge.classList.remove('visible');
  });
  // Grammar rules badge
  if(typeof grammarSrsDueCount === 'function') {
    const gBadge = document.getElementById('ds-grammar-badge');
    if(gBadge) {
      const n = grammarSrsDueCount();
      if(n > 0) { gBadge.textContent = n; gBadge.style.display = 'inline-block'; }
      else gBadge.style.display = 'none';
    }
  }
}
