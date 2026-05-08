const cacheName = 'pwa-cache-v1'
const assetsToCache = [
'/cis-128-homework-4/',
'./index.html',
'./style.css',
'./script.js',
'./lightblue.jpg',
'./lightgold.jpg',
'./manifest.json',



]
self.addEventListener('install', ( event ) => {
     event.waitUntil(
       caches.open(cacheName).then((cache) => {
          return cache.addAll(assetsToCache);
          })
     );
});


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});


self.addEventListener('activate', event => {
    const cacheWhitelist = [cacheName];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});