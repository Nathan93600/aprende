// ¡Aprende! — js/settings.js : Réglages et notifications
// ═══════════════════════════════════════════════
// SETTINGS MODAL (mobile-accessible)
// ═══════════════════════════════════════════════
function openSettingsModal() {
  const sfxOn = SFX.sfxEnabled();
  const vibeOn = SFX.vibeEnabled();
  const s = (typeof notifGet === 'function') ? notifGet() : { enabled: false, reminderHour: 20, reminderMin: 0, streakAlert: true, goalCelebrate: true };
  const html = `
    <div style="max-width:420px;margin:auto;max-height:80vh;overflow-y:auto;padding-right:4px">
      <h3 style="margin:0 0 1.2rem;text-align:center;font-size:1.2rem">⚙️ Réglages</h3>

      <!-- APPARENCE -->
      <div style="margin-bottom:1.2rem">
        <div class="set-h">🎨 Apparence</div>
        <div class="set-seg">${[['auto','Auto'],['light','☀️ Clair'],['dark','🌙 Sombre']].map(([v,l]) => `<button class="${fxThemePref() === v ? 'on' : ''}" onclick="fxSetTheme('${v}')">${l}</button>`).join('')}</div>
        <label class="set-row"><span>🖼️ Fond d'écran (Times Square, Barcelone)</span><input type="checkbox" ${fxWallPref() ? 'checked' : ''} onchange="fxSetWall(this.checked)"></label>
        <label class="set-row"><span>🌫️ Voile sur le fond (texte plus lisible)</span><input type="checkbox" ${fxVeilPref() ? 'checked' : ''} onchange="fxSetVeil(this.checked)"></label>
      </div>

      <!-- SONS & VIBRATIONS -->
      <div style="margin-bottom:1.2rem">
        <div style="font-weight:800;font-size:.95rem;margin-bottom:.5rem;color:#ffc800">🔊 Sons & Vibrations</div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.6rem">
          <div><div style="font-weight:600">🔊 Effets sonores</div><div style="font-size:.73rem;color:var(--muted)">Sons correct / faux / presque</div></div>
          <label class="notif-toggle">
            <input type="checkbox" id="settings-sfx" ${sfxOn ? 'checked' : ''} onchange="SFX.sfxSetEnabled(this.checked); if(this.checked) SFX.playCorrect();">
            <span class="notif-slider"></span>
          </label>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px">
          <div><div style="font-weight:600">📳 Vibrations</div><div style="font-size:.73rem;color:var(--muted)">Retour haptique correct / faux</div></div>
          <label class="notif-toggle">
            <input type="checkbox" id="settings-vibe" ${vibeOn ? 'checked' : ''} onchange="SFX.vibeSetEnabled(this.checked); if(this.checked) navigator.vibrate && navigator.vibrate(40);">
            <span class="notif-slider"></span>
          </label>
        </div>
      </div>

      <!-- NOTIFICATIONS -->
      <div style="margin-bottom:1.2rem">
        <div style="font-weight:800;font-size:.95rem;margin-bottom:.5rem;color:#1cb0f6">🔔 Notifications</div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.6rem">
          <span style="font-weight:600">Activer les notifications</span>
          <label class="notif-toggle">
            <input type="checkbox" id="settings-notif-on" ${s.enabled ? 'checked' : ''} onchange="toggleNotif(this.checked); document.getElementById('settings-notif-opts').style.opacity=this.checked?1:.4; document.getElementById('settings-notif-opts').style.pointerEvents=this.checked?'auto':'none';">
            <span class="notif-slider"></span>
          </label>
        </div>
        <div id="settings-notif-opts" style="${s.enabled ? '' : 'opacity:.4;pointer-events:none'}">
          <div style="padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.6rem">
            <div style="font-weight:600;margin-bottom:.4rem">⏰ Rappel quotidien</div>
            <div style="display:flex;align-items:center;gap:.5rem">
              <span style="color:var(--muted);font-size:.85rem">Heure :</span>
              <input type="number" id="settings-notif-hour" value="${s.reminderHour}" min="0" max="23" style="width:50px;padding:.3rem;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.3);color:#fff;text-align:center;font-size:1rem" onchange="document.getElementById('notif-hour')&&(document.getElementById('notif-hour').value=this.value); saveNotifTime()">
              <span style="font-weight:700">:</span>
              <input type="number" id="settings-notif-min" value="${String(s.reminderMin).padStart(2,'0')}" min="0" max="59" step="5" style="width:50px;padding:.3rem;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.3);color:#fff;text-align:center;font-size:1rem" onchange="document.getElementById('notif-min')&&(document.getElementById('notif-min').value=this.value); saveNotifTime()">
            </div>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.6rem">
            <div><div style="font-weight:600">🔥 Alerte streak</div><div style="font-size:.73rem;color:var(--muted)">Si tu vas perdre ta série</div></div>
            <label class="notif-toggle"><input type="checkbox" ${s.streakAlert ? 'checked' : ''} onchange="document.getElementById('notif-streak')&&(document.getElementById('notif-streak').checked=this.checked); saveNotifOptions()"><span class="notif-slider"></span></label>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.6rem">
            <div><div style="font-weight:600">🎯 Objectif atteint</div><div style="font-size:.73rem;color:var(--muted)">Félicitations quand tu finis</div></div>
            <label class="notif-toggle"><input type="checkbox" ${s.goalCelebrate ? 'checked' : ''} onchange="document.getElementById('notif-goal')&&(document.getElementById('notif-goal').checked=this.checked); saveNotifOptions()"><span class="notif-slider"></span></label>
          </div>
          <button onclick="testNotification()" style="width:100%;padding:.6rem;border:none;border-radius:10px;background:linear-gradient(135deg,#1cb0f6,#1899d6);color:#fff;font-weight:700;cursor:pointer;font-size:.85rem">🧪 Tester</button>
        </div>
      </div>

      <!-- DONNÉES -->
      <div style="margin-bottom:1rem">
        <div style="font-weight:800;font-size:.95rem;margin-bottom:.5rem;color:#58cc02">💾 Données</div>
        <div style="display:flex;gap:.5rem">
          <button onclick="exportProgress(); closeModal('settings-modal')" style="flex:1;padding:.7rem;border:none;border-radius:10px;background:rgba(255,255,255,.1);color:#fff;font-weight:700;cursor:pointer;font-size:.85rem">💾 Exporter</button>
          <button onclick="document.getElementById('import-file-input').click(); closeModal('settings-modal')" style="flex:1;padding:.7rem;border:none;border-radius:10px;background:rgba(255,255,255,.1);color:#fff;font-weight:700;cursor:pointer;font-size:.85rem">📂 Importer</button>
        </div>
      </div>

      <button onclick="closeModal('settings-modal')" style="width:100%;padding:.7rem;border:none;border-radius:12px;background:rgba(255,255,255,.08);color:#fff;cursor:pointer;font-size:.9rem;font-weight:600">Fermer</button>
    </div>
  `;
  showGenericModal('settings-modal', html);
}

// ═══════════════════════════════════════════════
// NOTIFICATIONS SYSTEM
// ═══════════════════════════════════════════════
const NOTIF_DEFAULTS = { enabled: false, reminderHour: 20, reminderMin: 0, streakAlert: true, goalCelebrate: true };
function notifGet() { try { return JSON.parse(localStorage.getItem('aprende_notif') || 'null') || NOTIF_DEFAULTS; } catch(e) { return NOTIF_DEFAULTS; } }
function notifSave(s) { localStorage.setItem('aprende_notif', JSON.stringify(s)); }

function updateNotifDot() {
  const dot = document.getElementById('notif-status-dot');
  if(!dot) return;
  const s = notifGet();
  dot.style.display = 'inline-block';
  dot.style.background = s.enabled ? '#58cc02' : '#888';
}

async function requestNotifPermission() {
  if(!('Notification' in window)) { showToast('Notifications non supportées sur ce navigateur', 'error-toast'); return false; }
  if(Notification.permission === 'granted') return true;
  if(Notification.permission === 'denied') { showToast('Notifications bloquées — autorise-les dans les réglages du navigateur', 'error-toast'); return false; }
  const perm = await Notification.requestPermission();
  return perm === 'granted';
}

function openNotifSettings() {
  const s = notifGet();
  const html = `
    <div style="max-width:400px;margin:auto">
      <h3 style="margin:0 0 1rem;text-align:center">🔔 Notifications</h3>

      <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.8rem">
        <span style="font-weight:700">Activer les notifications</span>
        <label class="notif-toggle">
          <input type="checkbox" id="notif-enabled" ${s.enabled ? 'checked' : ''} onchange="toggleNotif(this.checked)">
          <span class="notif-slider"></span>
        </label>
      </div>

      <div id="notif-options" style="${s.enabled ? '' : 'opacity:.4;pointer-events:none'}">
        <div style="padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.8rem">
          <div style="font-weight:600;margin-bottom:.5rem">⏰ Rappel quotidien</div>
          <div style="display:flex;align-items:center;gap:.5rem">
            <span style="color:var(--muted);font-size:.85rem">Heure :</span>
            <input type="number" id="notif-hour" value="${s.reminderHour}" min="0" max="23" style="width:50px;padding:.3rem;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.3);color:#fff;text-align:center;font-size:1rem" onchange="saveNotifTime()">
            <span style="font-weight:700">:</span>
            <input type="number" id="notif-min" value="${String(s.reminderMin).padStart(2,'0')}" min="0" max="59" step="5" style="width:50px;padding:.3rem;border-radius:8px;border:1px solid rgba(255,255,255,.2);background:rgba(0,0,0,.3);color:#fff;text-align:center;font-size:1rem" onchange="saveNotifTime()">
          </div>
          <div style="font-size:.75rem;color:var(--muted);margin-top:.3rem">Si tu n'as pas révisé, tu recevras un rappel</div>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.8rem">
          <div>
            <div style="font-weight:600">🔥 Alerte streak en danger</div>
            <div style="font-size:.75rem;color:var(--muted)">Si tu vas perdre ta série</div>
          </div>
          <label class="notif-toggle">
            <input type="checkbox" id="notif-streak" ${s.streakAlert ? 'checked' : ''} onchange="saveNotifOptions()">
            <span class="notif-slider"></span>
          </label>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem;background:rgba(255,255,255,.05);border-radius:12px;margin-bottom:.8rem">
          <div>
            <div style="font-weight:600">🎯 Objectif atteint</div>
            <div style="font-size:.75rem;color:var(--muted)">Félicitations quand tu finis ton objectif</div>
          </div>
          <label class="notif-toggle">
            <input type="checkbox" id="notif-goal" ${s.goalCelebrate ? 'checked' : ''} onchange="saveNotifOptions()">
            <span class="notif-slider"></span>
          </label>
        </div>
      </div>

      <button onclick="testNotification()" style="width:100%;padding:.7rem;border:none;border-radius:12px;background:linear-gradient(135deg,#1cb0f6,#1899d6);color:#fff;font-weight:700;cursor:pointer;font-size:.9rem;margin-top:.5rem">
        🧪 Tester une notification
      </button>
      <button onclick="closeModal('notif-modal')" style="width:100%;padding:.6rem;border:none;border-radius:12px;background:rgba(255,255,255,.1);color:#fff;cursor:pointer;margin-top:.5rem;font-size:.85rem">Fermer</button>
    </div>
  `;
  showGenericModal('notif-modal', html);
}

function showGenericModal(id, html) {
  let m = document.getElementById(id);
  if(m) { m.querySelector('.modal-body').innerHTML = html; m.style.display = 'flex'; return; }
  m = document.createElement('div');
  m.id = id;
  m.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(4px)';
  m.innerHTML = `<div class="modal-body" style="background:var(--card);border-radius:16px;padding:1.5rem;max-width:440px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,.5)">${html}</div>`;
  m.addEventListener('click', e => { if(e.target === m) closeModal(id); });
  document.body.appendChild(m);
}
function closeModal(id) { const m = document.getElementById(id); if(m) m.style.display = 'none'; }

async function toggleNotif(on) {
  const s = notifGet();
  if(on) {
    const ok = await requestNotifPermission();
    if(!ok) { document.getElementById('notif-enabled').checked = false; return; }
    s.enabled = true;
    notifSave(s);
    scheduleReminder(s);
    showToast('🔔 Notifications activées !', 'correct-toast');
  } else {
    s.enabled = false;
    notifSave(s);
    cancelReminder();
    showToast('🔕 Notifications désactivées', '');
  }
  const opts = document.getElementById('notif-options');
  if(opts) { opts.style.opacity = on ? '1' : '.4'; opts.style.pointerEvents = on ? 'auto' : 'none'; }
  updateNotifDot();
}

function saveNotifTime() {
  const s = notifGet();
  s.reminderHour = parseInt(document.getElementById('notif-hour').value) || 20;
  s.reminderMin = parseInt(document.getElementById('notif-min').value) || 0;
  notifSave(s);
  if(s.enabled) scheduleReminder(s);
}

function saveNotifOptions() {
  const s = notifGet();
  s.streakAlert = document.getElementById('notif-streak').checked;
  s.goalCelebrate = document.getElementById('notif-goal').checked;
  notifSave(s);
}

// ── Scheduling with setInterval (works while tab is open) + SW message ──
let _notifInterval = null;
function scheduleReminder(s) {
  cancelReminder();
  // Check every 60 seconds if it's time to send a reminder
  _notifInterval = setInterval(() => {
    checkReminderTime();
  }, 60000);
  // Also try periodic sync if available
  tryPeriodicSync();
}
function cancelReminder() {
  if(_notifInterval) { clearInterval(_notifInterval); _notifInterval = null; }
}

function checkReminderTime() {
  const s = notifGet();
  if(!s.enabled) return;
  const now = new Date();
  const h = now.getHours(), m = now.getMinutes();
  const todayKey = rpgDayKey();
  const alreadySent = localStorage.getItem('notif_sent_' + todayKey);

  // Daily reminder at set time — language-aware
  if(h === s.reminderHour && m === s.reminderMin && !alreadySent) {
    const dg = dgGet();
    const ls = (dg.langSessions && dg.langSessions[todayKey]) || {};
    const langNames = { es: 'espagnol', ln: 'lingala', en: 'anglais' };
    const langFlags = { es: '🇪🇸', ln: '🇨🇩', en: '🇬🇧' };
    const missing = ['es', 'ln', 'en'].filter(l => Math.floor((ls[l] || 0) / 60) < dg.target);
    if(missing.length > 0) {
      const missingText = missing.map(l => `${langFlags[l]} ${langNames[l]}`).join(', ');
      const totalMin = Math.floor((dg.sessions[todayKey] || 0) / 60);
      sendLocalNotification(
        '¡Aprende! 🎓',
        `C'est l'heure de réviser ! Il te reste : ${missingText}. ${totalMin} min étudiées aujourd'hui. Série : ${rpg ? rpg.streak : 0} j 🔥`,
        'daily-reminder'
      );
      localStorage.setItem('notif_sent_' + todayKey, '1');
    }
  }

  // Streak danger alert at 22:00 — language-aware
  if(s.streakAlert && h === 22 && m === 0 && !localStorage.getItem('streak_alert_' + todayKey)) {
    const dg = dgGet();
    const ls = (dg.langSessions && dg.langSessions[todayKey]) || {};
    const langFlags = { es: '🇪🇸', ln: '🇨🇩', en: '🇬🇧' };
    const langNames = { es: 'espagnol', ln: 'lingala', en: 'anglais' };
    const inactive = ['es', 'ln', 'en'].filter(l => Math.floor((ls[l] || 0) / 60) < 1);
    const streak = rpg ? rpg.streak : 0;
    if(inactive.length > 0 && streak > 0) {
      const inactiveText = inactive.map(l => `${langFlags[l]} ${langNames[l]}`).join(', ');
      sendLocalNotification(
        '🔥 Streak en danger !',
        inactive.length === 3
          ? `Tu n'as pas révisé du tout aujourd'hui ! Ta série de ${streak} jours va se briser à minuit !`
          : `Il te manque : ${inactiveText}. Ta série de ${streak} jours t'attend !`,
        'streak-danger'
      );
      localStorage.setItem('streak_alert_' + todayKey, '1');
    }
  }
}

function sendLocalNotification(title, body, tag) {
  if(Notification.permission !== 'granted') return;
  // Try via service worker first (works even if tab is in background on mobile)
  if(navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'SCHEDULE_NOTIFICATION',
      delay: 0,
      title, body, tag
    });
  } else {
    // Fallback: direct notification
    try { new Notification(title, { body, tag, icon: '🎓' }); } catch(e) {}
  }
}

// Goal celebration notification
function notifGoalReached() {
  const s = notifGet();
  if(!s.enabled || !s.goalCelebrate) return;
  sendLocalNotification(
    '🎯 Bravo !',
    'Tu as atteint ton objectif quotidien ! Continue comme ça 💪',
    'goal-reached'
  );
}

// Try to register periodic background sync
async function tryPeriodicSync() {
  if(!('serviceWorker' in navigator)) return;
  try {
    const reg = await navigator.serviceWorker.ready;
    if('periodicSync' in reg) {
      await reg.periodicSync.register('aprende-reminder', { minInterval: 12 * 60 * 60 * 1000 });
    }
  } catch(e) { /* periodicSync not available — fallback to setInterval */ }
}

function testNotification() {
  if(Notification.permission !== 'granted') {
    requestNotifPermission().then(ok => {
      if(ok) doTestNotif();
    });
  } else {
    doTestNotif();
  }
}
function doTestNotif() {
  sendLocalNotification(
    '¡Aprende! 🎓 — Test',
    'Les notifications fonctionnent ! Tu recevras tes rappels quotidiens 🔥',
    'test-notif'
  );
  showToast('✅ Notification de test envoyée !', 'correct-toast');
}

// ── Boot: start scheduler if enabled — now handled inside initApp()

// ── Hook into dgCheckComplete for goal notifications ──
const _origDgCheckComplete = dgCheckComplete;
dgCheckComplete = function(dg) {
  const k = dgToday(), wasDone = dg['done_' + k];
  _origDgCheckComplete(dg);
  if(!wasDone && dg['done_' + k]) notifGoalReached();
};

// PWA Service Worker
if('serviceWorker' in navigator) {
  const swCode = "\n// \u00a1Aprende! Service Worker\nconst CACHE_NAME = 'aprende-v2';\nconst ASSETS = ['./', 'index.html'];\n\nself.addEventListener('install', e => {\n  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));\n});\n\nself.addEventListener('activate', e => {\n  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));\n});\n\nself.addEventListener('fetch', e => {\n  if(e.request.method !== 'GET') return;\n  e.respondWith(\n    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {\n      if(resp.ok && resp.type === 'basic') {\n        const clone = resp.clone();\n        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));\n      }\n      return resp;\n    }).catch(() => caches.match('./')))\n  );\n});\n";
  const swBlob = new Blob([swCode], {type: 'application/javascript'});
  const swURL = URL.createObjectURL(swBlob);
  // Blob SW won't work on all browsers, try external first
  navigator.serviceWorker.register('sw.js').catch(() => {
    // Fallback: at minimum cache the page for offline via Cache API
    if('caches' in window) {
      caches.open('aprende-v1').then(c => c.add(location.href)).catch(() => {});
    }
  });
}
// iOS standalone detection
if(window.navigator.standalone) document.body.classList.add('ios-pwa');
/* ── Menus Jeux : pastilles de catégorie construites à partir des sections existantes ── */
function gamesMenuInit() {
  try { gamesTidy(); } catch(e) { console.warn('[Aprende] rangement des jeux', e); }
  ['home', 'home-ln', 'home-en'].forEach(id => {
    const scr = document.getElementById(id); if(!scr || scr.querySelector('.gm-chips')) return;
    const grids = [...scr.querySelectorAll('.games-grid')].filter(g => !g.closest('.more-games')); if(!grids.length) return;
    const short = t => /conjug|gramm/i.test(t) ? '📋 Conjugaison' : /visuel|synesth/i.test(t) ? '🎨 Visuel' : /tap/i.test(t) ? '⚡ Tap' : /natif|pronon|accent|parler/i.test(t) ? '🗣️ Oral' : t.trim().slice(0, 16);
    const secs = grids.map((g, i) => {
      const wrap = g.parentElement === scr ? g : g.parentElement;
      const head = wrap !== g && wrap.firstElementChild !== g ? wrap.firstElementChild.textContent : '';
      if(wrap !== g) wrap.classList.add('gm-sec');
      return { el: wrap, label: i === 0 && !head.trim() ? '🃏 Vocabulaire' : short(head) };
    });
    const bar = document.createElement('div'); bar.className = 'gm-chips';
    const apply = k => {
      secs.forEach((s, i) => s.el.classList.toggle('gm-hide', k !== -1 && k !== i));
      bar.querySelectorAll('.gm-chip[data-k]').forEach(b => b.classList.toggle('on', +b.dataset.k === k));
    };
    const chip = (txt, k) => { const b = document.createElement('button'); b.className = 'gm-chip'; b.textContent = txt; b.dataset.k = k; b.onclick = () => apply(k); bar.appendChild(b); };
    if(secs.length > 1) { chip('Tous', -1); secs.forEach((s, i) => chip(s.label, i)); }
    const det = document.createElement('button'); det.className = 'gm-chip gm-det'; det.textContent = 'ⓘ Détails';
    det.onclick = () => { det.classList.toggle('on', scr.classList.toggle('gm-details')); };
    bar.appendChild(det);
    secs[0].el.parentElement.insertBefore(bar, secs[0].el);
    apply(-1);
  });
}
try { gamesMenuInit(); } catch(e) { console.warn('[Aprende] menu jeux', e); }
