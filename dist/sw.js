// CACHE APPLICATION IN CACHE STORAGE
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static")
        .then(cache => {
            console.log('Cached!!!');
            return cache.addAll([
                "./", 
                "./src/styles.css", 
                "./img/logo192.png",
                "./img/logo512.png",
            ])
        })
        .catch(error => {
            console.log('service worker err, unable to cache items', error);
        })
    );
});

// RETRIEVE CACHED ITEMS OFFLINE 
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(response => {
            console.log('Cached items fetched!');
            return response || fetch(e.request);
        })
        .catch(error => console.log(error))
    )
});