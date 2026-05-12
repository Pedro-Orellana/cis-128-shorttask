const cacheName = 'shorttask-cache-1'
const assetsToCache = [
'/cis-128-shorttask/',
'/cis-128-shorttask/index.html',
'/cis-128-shorttask/index.css',
'/cis-128-shorttask/public/con-icon.svg',
'/cis-128-shorttask/public/pro-icon.svg',
'/cis-128-shorttask/public/flutter-logo.png',
'/cis-128-shorttask/public/ionic-logo.png',
'/cis-128-shorttask/public/react-native-logo.png',




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