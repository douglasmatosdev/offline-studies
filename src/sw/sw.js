import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst, NetworkFirst } from 'workbox-strategies'

precacheAndRoute(self.__WB_MANIFEST);

var CACHE_NAME = 'root.home';
var urlsToCache = [
    '/',
];

self.addEventListener('install', function (event) {
    self.skipWainting()

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});


self.addEventListener('activate', function (event) {
    event.waitUntil(
        // Retrieving all the keys from the cache.
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                // Looping through all the cached files.
                cacheNames.map(function (cacheName) {
                    // If the file in the cache is not in the whitelist
                    // it should be deleted.
                    if (urlsToCache.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
