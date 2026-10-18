// ¡Aprende! Service Worker v10 — fix RPG level-up loop + Oct 18
const CACHE_NAME = 'aprende-v10';
const ASSETS = [
  './',
  'index.html',
  'style.css',
  'sync.js',
  'app.js',
  'courses/es.js',
  'courses/ln.js',
  'courses/en.js',
  'manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      if(resp.ok && resp.type === 'basic') {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
      }
      return resp;
    }).catch(() => caches.match('./')))
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(cs => {
      if (cs.length > 0) { cs[0].focus(); } else { clients.openWindow('./'); }
    })
  );
});

self.addEventListener('periodicsync', e => {
  if (e.tag === 'aprende-reminder') e.waitUntil(checkAndNotify());
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SCHEDULE_NOTIFICATION') {
    const { delay, title, body, tag } = e.data;
    setTimeout(() => {
      self.registration.showNotification(title, {
        body, tag,
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎓</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎓</text></svg>',
        vibrate: [200, 100, 200], renotify: true, requireInteraction: false
      });
    }, delay);
  }
  if (e.data && e.data.type === 'CHECK_REMINDER') checkAndNotify();
});

async function checkAndNotify() {
  try {
    const cs = await clients.matchAll({ type: 'window' });
    if (cs.length === 0) {
      await self.registration.showNotification('¡Aprende! 🎓', {
        body: "C'est l'heure de réviser ! Ta série t'attend 🔥",
        tag: 'daily-reminder',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🎓</text></svg>',
        vibrate: [200, 100, 200], renotify: true
      });
    }
  } catch(err) {}
}
