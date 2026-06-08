const CACHE = 'wochenende-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/zug.jpg',
  '/assets/sonnenaufgang.jpg',
  '/assets/brief.jpg',
  '/assets/tierwelt.jpg',
  '/assets/baumgartner.jpg',
  '/assets/icons.jpg',
  '/assets/masenberg.jpg',
  '/assets/poellauberg.jpg',
  '/assets/riegerbauer.jpg',
  '/assets/waldhof.jpg',
  '/assets/karte.jpg',
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&family=Dancing+Script:wght@600;700&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
