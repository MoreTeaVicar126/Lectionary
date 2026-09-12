// Worship Planner — offline service worker
//
// IMPORTANT: whenever you update index.html (new lectionary year, hymnal
// changes, bug fixes, etc.) you MUST change CACHE_NAME below (e.g. bump
// "v1" to "v2"). That's what tells an installed phone "there's a new
// version, go fetch it". If you forget, the phone will keep showing the
// old cached copy indefinitely, even after you re-upload to GitHub Pages.
const CACHE_NAME = 'worship-planner-v1';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// On install: download and cache every file the app needs to run offline.
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(APP_SHELL);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

// On activate: throw away any older cache versions left over from before.
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key) { return caches.delete(key); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

// Fetching: try the network first (so you get the latest version when you
// have signal), but fall back to the offline cache whenever there's no
// connection. This keeps the app working on a train, in an empty church
// hall, wherever.
self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(function (response) {
        var copy = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, copy);
        });
        return response;
      })
      .catch(function () {
        return caches.match(event.request).then(function (cached) {
          return cached || caches.match('./index.html');
        });
      })
  );
});
