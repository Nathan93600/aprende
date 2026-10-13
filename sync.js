// ═══════════════════════════════════════════════════════════
// ¡Aprende! — sync.js v2 · Firebase Auth + Firestore (100% online)
// Loaded BEFORE app.js — replaces localStorage entirely
// ═══════════════════════════════════════════════════════════

// Firebase SDK loaded via CDN <script> tags in index.html
const firebaseConfig = {
  apiKey: "AIzaSyDM70jiVoSQCEy3DWy2eiDhIaeJKtTNf44",
  authDomain: "aprende-61173.firebaseapp.com",
  projectId: "aprende-61173",
  storageBucket: "aprende-61173.firebasestorage.app",
  messagingSenderId: "590162929317",
  appId: "1:590162929317:web:8bd75ed37c194859d78f4c",
  measurementId: "G-NZKD1GQ4BF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Enable offline persistence
db.enablePersistence({ synchronizeTabs: true }).catch(err => {
  if (err.code === 'failed-precondition') {
    console.warn('[Sync] Persistence failed: multiple tabs open');
  } else if (err.code === 'unimplemented') {
    console.warn('[Sync] Persistence not available in this browser');
  }
});

// ═══════════════════════════════════════════════════════════
// SYNC STATE
// ═══════════════════════════════════════════════════════════
const SYNC = {
  uid: null,
  ready: false,
  cache: {},            // in-memory mirror — all values are STRINGS (like real localStorage)
  _listeners: [],
  _unsubs: [],          // Firestore real-time listener unsubscribers
  _writeTimer: null,
  _loadFailed: false,   // true if Firestore read failed (rules, network…)
  _appBooted: false,    // prevent double initApp()
};

// ── Documents mapping ────────────────────────────────────
const DOC_MAP = {
  state: [
    'srs_data', 'es_xp', 'ln_xp', 'en_xp', 'score', 'streak',
    'mastered', 'es_mastered', 'ln_mastered', 'en_mastered',
    'aura_map', 'srs_revlog', 'pron_srs', 'grammar_srs', 'rpg',
    'srs_new_per_day', 'badge_dg_count'
  ],
  courses: [
    'crs_prog', 'crs_added', 'crs_resume'
    // + dynamic keys: crs_done_es_0, crs_done_ln_0, etc.
  ],
  settings: [
    'aprende_sfx', 'aprende_vibe', 'aprende_notif',
    'daily_goal', 'desktop_mode'
  ],
  games: [
    // dynamic keys: native_best_*, ct_stars_*
  ]
};

const KEY_TO_DOC = {};
for (const [doc, keys] of Object.entries(DOC_MAP)) {
  for (const k of keys) KEY_TO_DOC[k] = doc;
}

function docForKey(key) {
  if (KEY_TO_DOC[key]) return KEY_TO_DOC[key];
  if (key.startsWith('crs_done_')) return 'courses';
  if (key.startsWith('native_best_')) return 'games';
  if (key.startsWith('ct_stars_')) return 'games';
  if (key.startsWith('notif_sent_') || key.startsWith('streak_alert_')) return 'settings';
  return 'state';
}

// ═══════════════════════════════════════════════════════════
// localStorage SHIM
// ═══════════════════════════════════════════════════════════

const _realLS = window.localStorage;

const syncStorage = {
  getItem(key) {
    const val = SYNC.cache[key];
    if (val === undefined || val === null) return null;
    return val;
  },
  setItem(key, value) {
    SYNC.cache[key] = value;
    if (SYNC.uid) syncScheduleWrite(key);
  },
  removeItem(key) {
    delete SYNC.cache[key];
    if (SYNC.uid) syncScheduleWrite(key, true);
  },
  clear() { SYNC.cache = {}; },
  get length() { return Object.keys(SYNC.cache).length; },
  key(index) { return Object.keys(SYNC.cache)[index] || null; }
};

Object.defineProperty(window, 'localStorage', {
  get() { return syncStorage; },
  configurable: true
});

// ═══════════════════════════════════════════════════════════
// DEBOUNCED WRITES
// ═══════════════════════════════════════════════════════════

const _pendingKeys = new Set();

function syncScheduleWrite(key, isDelete) {
  _pendingKeys.add(key);
  if (SYNC._writeTimer) clearTimeout(SYNC._writeTimer);
  SYNC._writeTimer = setTimeout(syncFlush, 500);
}

async function syncFlush() {
  if (!SYNC.uid || _pendingKeys.size === 0) return;

  const docUpdates = {};
  for (const key of _pendingKeys) {
    const doc = docForKey(key);
    if (!docUpdates[doc]) docUpdates[doc] = {};
    const val = SYNC.cache[key];
    if (val === undefined) {
      docUpdates[doc][key] = firebase.firestore.FieldValue.delete();
    } else {
      docUpdates[doc][key] = val;
    }
  }
  _pendingKeys.clear();

  for (const [docName, data] of Object.entries(docUpdates)) {
    const ref = db.collection('users').doc(SYNC.uid).collection('data').doc(docName);
    try {
      await ref.set(data, { merge: true });
    } catch (err) {
      console.error(`[Sync] ❌ Write failed for ${docName}:`, err);
      syncShowError(`Sauvegarde échouée (${err.code || err.message}). Vérifie les règles Firestore.`);
    }
  }
}

window.addEventListener('beforeunload', () => {
  if (_pendingKeys.size > 0) syncFlush();
});

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && _pendingKeys.size > 0) syncFlush();
});

// ═══════════════════════════════════════════════════════════
// ERROR UI — visible feedback when Firestore fails
// ═══════════════════════════════════════════════════════════

function syncShowError(msg) {
  let banner = document.getElementById('sync-error-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'sync-error-banner';
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#d32f2f;color:#fff;padding:12px 16px;font-size:14px;text-align:center;font-family:system-ui,sans-serif;';
    document.body.appendChild(banner);
  }
  banner.textContent = '⚠️ ' + msg;
  banner.style.display = 'block';
  // Auto-hide after 8s
  clearTimeout(banner._timer);
  banner._timer = setTimeout(() => { banner.style.display = 'none'; }, 8000);
}

// ═══════════════════════════════════════════════════════════
// AUTH — Google Sign-In
// ═══════════════════════════════════════════════════════════

function syncShowLogin() {
  let overlay = document.getElementById('sync-login-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'sync-login-overlay';
    overlay.innerHTML = `
      <div class="sync-login-box">
        <div class="sync-login-logo">¡Aprende!</div>
        <p class="sync-login-sub">Connecte-toi pour synchroniser ta progression</p>
        <button id="sync-google-btn" class="sync-google-btn" onclick="syncGoogleLogin()">
          <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          Connexion avec Google
        </button>
        <p class="sync-login-offline">Tes données seront sauvegardées en ligne et synchronisées sur tous tes appareils</p>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  overlay.classList.add('visible');
}

function syncHideLogin() {
  const overlay = document.getElementById('sync-login-overlay');
  if (overlay) overlay.classList.remove('visible');
}

async function syncGoogleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    const btn = document.getElementById('sync-google-btn');
    if (btn) { btn.disabled = true; btn.textContent = 'Connexion…'; }
    await auth.signInWithPopup(provider);
  } catch (err) {
    console.error('[Sync] Google login failed:', err);
    const btn = document.getElementById('sync-google-btn');
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg> Connexion avec Google`;
    }
    if (err.code === 'auth/popup-blocked') {
      alert('Pop-up bloqué ! Autorise les pop-ups pour ce site.');
    } else if (err.code !== 'auth/popup-closed-by-user') {
      alert('Erreur de connexion : ' + err.message);
    }
  }
}

function syncLogout() {
  // Unsubscribe from real-time listeners
  for (const unsub of SYNC._unsubs) {
    try { unsub(); } catch(e) {}
  }
  SYNC._unsubs = [];
  auth.signOut();
  SYNC.cache = {};
  SYNC.uid = null;
  SYNC.ready = false;
  SYNC._appBooted = false;
  syncShowLogin();
}

// ═══════════════════════════════════════════════════════════
// LOAD DATA FROM FIRESTORE
// ═══════════════════════════════════════════════════════════

async function syncLoadAll(uid) {
  SYNC.uid = uid;
  SYNC._loadFailed = false;
  const docs = ['state', 'courses', 'settings', 'games'];

  try {
    const snaps = await Promise.all(
      docs.map(d => db.collection('users').doc(uid).collection('data').doc(d).get())
    );

    let totalKeys = 0;
    for (const snap of snaps) {
      if (snap.exists) {
        const data = snap.data();
        for (const [key, val] of Object.entries(data)) {
          // Firestore stores our values as strings (from localStorage shim)
          // Keep them as-is — crsJ() will JSON.parse them
          SYNC.cache[key] = val;
          totalKeys++;
        }
      }
    }

    console.log(`[Sync] ✅ Loaded ${totalKeys} keys from Firestore`);

    if (totalKeys === 0) {
      console.log('[Sync] ℹ️ No data in Firestore yet (new user or rules blocking reads)');
    }
  } catch (err) {
    console.error('[Sync] ❌ Failed to load from Firestore:', err);
    SYNC._loadFailed = true;

    if (err.code === 'permission-denied') {
      syncShowError('Accès Firestore refusé ! Les règles de sécurité doivent être configurées. Voir la console.');
      console.error('[Sync] 🔒 PERMISSION DENIED — Tu dois configurer les règles Firestore :\n' +
        'Va dans Firebase Console → Firestore Database → Règles et colle :\n\n' +
        'rules_version = \'2\';\n' +
        'service cloud.firestore {\n' +
        '  match /databases/{database}/documents {\n' +
        '    match /users/{userId}/data/{doc} {\n' +
        '      allow read, write: if request.auth != null && request.auth.uid == userId;\n' +
        '    }\n' +
        '  }\n' +
        '}\n');
    } else {
      syncShowError(`Erreur de chargement (${err.code || err.message})`);
    }
  }

  SYNC.ready = true;

  // Notify waiting code
  for (const cb of SYNC._listeners) {
    try { cb(); } catch (e) { console.error('[Sync] onReady callback error:', e); }
  }
  SYNC._listeners = [];
}

// ── Real-time listeners for cross-device sync ───────────
function syncStartListeners(uid) {
  const docs = ['state', 'courses', 'settings', 'games'];

  for (const docName of docs) {
    const ref = db.collection('users').doc(uid).collection('data').doc(docName);
    const unsub = ref.onSnapshot(snap => {
      if (!snap.exists) return;
      const data = snap.data();
      let changed = false;
      for (const [key, val] of Object.entries(data)) {
        // Only update if value differs (avoid loops)
        if (SYNC.cache[key] !== val) {
          SYNC.cache[key] = val;
          changed = true;
        }
      }
      if (changed && SYNC._appBooted) {
        console.log(`[Sync] 🔄 Remote update received for doc: ${docName}`);
        // Refresh RPG and UI if state changed
        if (docName === 'state' && typeof rpgInit === 'function') {
          try { rpgInit(); } catch(e) {}
          try { updateHomeStats(); } catch(e) {}
        }
      }
    }, err => {
      console.warn(`[Sync] Listener error for ${docName}:`, err.code || err.message);
    });
    SYNC._unsubs.push(unsub);
  }
}

// ── Migrate localStorage → Firestore (first login only) ──
async function syncMigrateFromLocal(uid) {
  // Check if user already has data in Firestore
  try {
    const stateDoc = await db.collection('users').doc(uid).collection('data').doc('state').get();
    if (stateDoc.exists && Object.keys(stateDoc.data()).length > 0) {
      console.log('[Sync] ✅ User already has Firestore data, skipping migration');
      return false;
    }
  } catch (err) {
    if (err.code === 'permission-denied') {
      console.error('[Sync] ❌ Cannot check for existing data — permission denied. Skipping migration.');
      return false;
    }
    throw err;
  }

  // Read from real localStorage (the original, not the shim)
  const keysToMigrate = [
    'srs_data', 'es_xp', 'ln_xp', 'en_xp', 'score', 'streak',
    'mastered', 'es_mastered', 'ln_mastered', 'en_mastered',
    'aura_map', 'srs_revlog', 'pron_srs', 'grammar_srs',
    'crs_prog', 'crs_added', 'rpg', 'srs_new_per_day',
    'aprende_sfx', 'aprende_vibe', 'aprende_notif',
    'daily_goal', 'desktop_mode', 'crs_resume', 'badge_dg_count'
  ];

  const migrated = {};
  let count = 0;
  for (const key of keysToMigrate) {
    const val = _realLS.getItem(key);
    if (val !== null) {
      migrated[key] = val;
      count++;
    }
  }

  // Also migrate dynamic keys
  for (let i = 0; i < _realLS.length; i++) {
    const key = _realLS.key(i);
    if (key && (key.startsWith('crs_done_') || key.startsWith('native_best_') || key.startsWith('ct_stars_'))) {
      migrated[key] = _realLS.getItem(key);
      count++;
    }
  }

  if (count === 0) {
    console.log('[Sync] ℹ️ No localStorage data to migrate');
    return false;
  }

  // Group by doc and write to Firestore
  const docUpdates = {};
  for (const [key, val] of Object.entries(migrated)) {
    const doc = docForKey(key);
    if (!docUpdates[doc]) docUpdates[doc] = {};
    docUpdates[doc][key] = val;
  }

  try {
    const batch = db.batch();
    for (const [docName, data] of Object.entries(docUpdates)) {
      const ref = db.collection('users').doc(uid).collection('data').doc(docName);
      batch.set(ref, data, { merge: true });
    }
    await batch.commit();
    console.log(`[Sync] ✅ Migrated ${count} keys from localStorage to Firestore`);

    // Also populate cache immediately so initApp finds data
    for (const [key, val] of Object.entries(migrated)) {
      SYNC.cache[key] = val;
    }

    return true;
  } catch (err) {
    console.error('[Sync] ❌ Migration write failed:', err);
    if (err.code === 'permission-denied') {
      syncShowError('Migration échouée — règles Firestore non configurées !');
    }
    return false;
  }
}

// ═══════════════════════════════════════════════════════════
// AUTH STATE LISTENER
// ═══════════════════════════════════════════════════════════

auth.onAuthStateChanged(async user => {
  if (user) {
    console.log('[Sync] Signed in as', user.displayName || user.email, '— UID:', user.uid);
    syncHideLogin();
    syncUpdateUI(user);

    // Try migrate from real localStorage on first login
    try {
      await syncMigrateFromLocal(user.uid);
    } catch (e) {
      console.warn('[Sync] Migration error:', e);
    }

    // Load all data from Firestore
    await syncLoadAll(user.uid);

    // Start real-time listeners for cross-device sync
    syncStartListeners(user.uid);

    // Boot the app (only once per auth session)
    if (!SYNC._appBooted && typeof initApp === 'function') {
      SYNC._appBooted = true;
      initApp();
    }
  } else {
    // Unsubscribe listeners
    for (const unsub of SYNC._unsubs) {
      try { unsub(); } catch(e) {}
    }
    SYNC._unsubs = [];
    SYNC.uid = null;
    SYNC.ready = false;
    SYNC._appBooted = false;
    syncShowLogin();
  }
});

// ═══════════════════════════════════════════════════════════
// UI HELPERS
// ═══════════════════════════════════════════════════════════

function syncUpdateUI(user) {
  let avatar = document.getElementById('sync-avatar');
  if (!avatar) {
    avatar = document.createElement('div');
    avatar.id = 'sync-avatar';
    avatar.style.cssText = 'position:fixed;top:10px;right:10px;z-index:10000;display:flex;align-items:center;gap:8px;cursor:pointer;';
    avatar.onclick = () => {
      if (confirm('Déconnexion ?')) syncLogout();
    };
    document.body.appendChild(avatar);
  }

  const photoURL = user.photoURL || '';
  const name = user.displayName || user.email || '';
  avatar.innerHTML = photoURL
    ? `<img src="${photoURL}" style="width:32px;height:32px;border-radius:50%;border:2px solid var(--accent1,#d500f9);" alt="${name}" title="${name} — Tap pour déconnexion">`
    : `<span style="width:32px;height:32px;border-radius:50%;background:var(--accent1,#d500f9);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;color:#fff;" title="${name} — Tap pour déconnexion">${(name[0] || '?').toUpperCase()}</span>`;
}

// ═══════════════════════════════════════════════════════════
// SYNC READY HELPERS
// ═══════════════════════════════════════════════════════════

function onSyncReady(cb) {
  if (SYNC.ready) cb();
  else SYNC._listeners.push(cb);
}

function isSyncReady() { return SYNC.ready; }
function getSyncUID() { return SYNC.uid; }
function syncForceFlush() {
  if (SYNC._writeTimer) clearTimeout(SYNC._writeTimer);
  syncFlush();
}

console.log('[Sync] Firebase sync module loaded (v2)');
