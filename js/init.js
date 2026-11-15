// ¡Aprende! — js/init.js : Démarrage de l'appli (initApp, appelé par sync.js)
// ═══════════════════════════════════════════════
// INIT — called by sync.js after Firebase auth + data load
// ═══════════════════════════════════════════════
function initApp() {
  console.log('[Aprende] initApp() — booting with Firestore data');

  // Hydrate from embedded backup ONLY if Firestore has no SRS data
  const existingSrs = localStorage.getItem('srs_data');
  const embeddedOk = typeof APRENDE_CONFIG === 'undefined' || APRENDE_CONFIG.embeddedProgress !== false;
  if (embeddedOk && (!existingSrs || existingSrs === '{}' || existingSrs === 'undefined')) {
    console.log('[Aprende] No SRS data in Firestore — hydrating from embedded backup');
    hydrateFromBackup();
  } else {
    console.log('[Aprende] SRS data found in Firestore, skipping embedded backup');
  }

  // Re-read state from cache (populated by sync.js)
  state.xp = parseInt(localStorage.getItem('xp')||'0');
  state.streak = parseInt(localStorage.getItem('streak')||'0');
  state.mastered = JSON.parse(localStorage.getItem('mastered')||'[]');

  updateHomeStats();
  renderJournal('es');
  crsMergeAdded(); // Re-merge course words into decks (cache is now populated by sync.js)
  try { srsMigrateAllToFsrs(); } catch(e) { console.error('[Aprende] srsMigrateAllToFsrs error:', e); }
  try { srsMigrateKeys(); } catch(e) { console.error('[Aprende] srsMigrateKeys error:', e); }
  try { srsAutoEnqueueNew(); } catch(e) { console.error('[Aprende] srsAutoEnqueueNew error:', e); }
  try { srsRepairFromRevlog(); } catch(e) { console.error('[Aprende] srsRepairFromRevlog error:', e); }
  try { updateSRSDueBadges(); } catch(e) { console.error('[Aprende] updateSRSDueBadges error:', e); }

  // RPG init
  rpgInit();

  // Desktop mode preference
  (function applyDesktopPref() {
    let pref = localStorage.getItem('desktop_mode');
    if(pref === null) {
      pref = window.innerWidth >= 1024 ? '1' : '0';
      localStorage.setItem('desktop_mode', pref);
    }
    if(pref === '1') {
      document.body.classList.add('desktop-mode');
      const icon = document.getElementById('desktop-toggle-icon');
      const label = document.getElementById('desktop-toggle-label');
      if(icon) icon.textContent = '📱';
      if(label) label.textContent = 'Mobile';
    }
  })();

  // Notifications boot
  (function bootNotif() {
    const s = notifGet();
    updateNotifDot();
    if(s.enabled && Notification.permission === 'granted') {
      scheduleReminder(s);
    }
  })();

  console.log('[Aprende] App ready ✓');
}

// Compute actual deck sizes dynamically for lang-select (runs immediately — no data dependency)
(function updateLangCounts() {
  const esEl = document.getElementById('lang-count-es');
  const lnEl = document.getElementById('lang-count-ln');
  const enEl = document.getElementById('lang-count-en');
  if(esEl) esEl.textContent = `${DATA.length} mots dans le deck`;
  const esSub = document.getElementById('home-sub-es');
  if(esSub) esSub.textContent = `${DATA.length} mots · Espagnol → Français`;
  if(lnEl) lnEl.textContent = `${LINGALA.length} mots dans le deck`;
  if(enEl) enEl.textContent = `${ENGLISH.length} mots dans le deck`;
  const enSub = document.getElementById('en-home-sub');
  if(enSub) enSub.textContent = `🇬🇧 ${ENGLISH.length} mots · B2 → C1 · Oral US`;
})();

// Desktop mode toggle (persisted)
function toggleDesktopMode() {
  const isOn = document.body.classList.toggle('desktop-mode');
  localStorage.setItem('desktop_mode', isOn ? '1' : '0');
  const icon = document.getElementById('desktop-toggle-icon');
  const label = document.getElementById('desktop-toggle-label');
  if(isOn) {
    icon.textContent = '📱';
    label.textContent = 'Mobile';
    showToast('🖥️ Mode desktop activé', 'correct-toast');
  } else {
    icon.textContent = '🖥️';
    label.textContent = 'Desktop';
    showToast('📱 Mode mobile', 'correct-toast');
  }
  haptic('light');
}
// Apply saved preference on load — now handled inside initApp()

// Enter key for shuffle frappe
document.getElementById('shuf-fr-input')?.addEventListener('keydown', e => { if(e.key === 'Enter') checkShufFrappe(); });
// Refresh SRS badges when the tab becomes visible again (user comes back after a day)
// visibilitychange → updateSRSDueBadges merged into crsBoot listener
// Enter submits login form
crsBoot(); // parcours + héros
setTimeout(badgeCheck, 1500); // check badges on load
