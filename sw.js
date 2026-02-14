self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('ramadan-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'adhkar.html',
        'tasbeeh.html'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
