'use strict';

var cacheVersion = 1;
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};

const offlineUrl = '/static/html/offline.html';
const errorUrl = '/static/html/error.html';

this.addEventListener('install', function(event) {

    // Offline
    event.waitUntil(
        caches.open(currentCache.offline).then(function(cache) {
            return cache.addAll([
                '/static/images/offline.svg',
                offlineUrl,
                errorUrl
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {

    if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
            fetch(event.request)
            .then(function(response){
                if (!response.ok) {
                    // Fallback response
                    console.log("Status: " + response.status);
                    return caches.match(errorUrl);
                }

                return response;
            })
            .catch(function(error) {
                // Offline response
                return caches.match(offlineUrl);
            })
        );
    }
    else{
        event.respondWith(caches.match(event.request)
                        .then(function (response) {
                        return response || fetch(event.request);
            })
        );
    }
});
