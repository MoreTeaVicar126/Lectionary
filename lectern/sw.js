// Lectern — offline service worker
//
// Lectern is one self-contained file, so everything needed is cached on first
// visit. It opens instantly from the cache (important in a church with poor
// signal) and quietly checks for a newer copy in the background; a new version
// appears the next time the app is opened. Your saved services live in the
// browser's own storage and are never touched by this file.
//
// If you change index.html, bump CACHE below so installed copies refresh cleanly.
const CACHE = 'lectern-v1';
const SHELL = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k.indexOf('lectern-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  event.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(req, { ignoreSearch: true }).then(function (cached) {
        // Conditional re-check (cheap 304 when unchanged) so the big file isn't re-downloaded every launch.
        const refresh = fetch(req, { cache: 'no-cache' }).then(function (res) {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        }).catch(function () { return null; });
        if (cached) { event.waitUntil(refresh); return cached; }
        return refresh.then(function (res) { return res || cache.match('./index.html'); });
      });
    })
  );
});
