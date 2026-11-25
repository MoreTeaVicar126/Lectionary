// Worship Apps (landing page) — offline service worker
//
// This only looks after the landing page itself. Each app (worship-planner/,
// lectern/) has its own service worker and its own cache in its own folder.
// Bump CACHE if you change index.html here.
const CACHE = 'landing-v1';
const SHELL = ['./', './index.html', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
const OWN = new Set(SHELL.map(function (p) { return new URL(p, self.registration.scope).pathname; }));

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k.indexOf('landing-') === 0 && k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Network first (so changes show straight away), cache when offline.
// Anything that is not a landing-page file (the apps' own folders) is left alone.
self.addEventListener('fetch', function (event) {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || !OWN.has(url.pathname)) return;
  event.respondWith(
    fetch(req).then(function (res) {
      const copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(req, copy); });
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) { return hit || caches.match('./index.html'); });
    })
  );
});
