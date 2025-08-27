const CACHE_NAME = 'flowtrack-cache-v1';
const urlsToCache = [
  './pages/index.html',
  './styles/index.css',
  './script/index.js',
  './script/work_order.js',
  '../images/logo-main.png',
  '../images/image.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});