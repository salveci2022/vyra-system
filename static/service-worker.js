self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('vyra-v1').then((cache) => cache.addAll([
      '/', '/motorista', '/cadastro', '/painel',
      '/static/style.css', '/static/manifest.json',
      '/static/manifest-motorista.json',
      '/static/manifest-confianca.json',
      '/static/icons/icon-192x192.png', '/static/icons/icon-512x512.png'
    ]))
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
