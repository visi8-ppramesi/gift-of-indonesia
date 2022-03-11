/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

// eslint-disable-next-line no-undef
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// eslint-disable-next-line no-undef
workbox.core.setCacheNameDetails({ prefix: "gift-of-indonesia" });

var CACHE_NAME = 'gift-of-indonesia-v1';
var urlsToPrefetch = [
    'https://firebasestorage.googleapis.com/v0/b/gift-of-indonesia.appspot.com/o/city.mp4?alt=media&token=1c9c4547-37d2-41cc-bdf0-a0fcb81bcff2'
];

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

self.addEventListener('install', (event) => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToPrefetch);
        })
    );
})

self.addEventListener('fetch', (event) => {
    console.log(['event', event])
    if (event.request.url.startsWith('chrome-extension://')) return;
    if (event.request.method != 'GET') return;


    // Prevent the default, and handle the request ourselves.
    event.respondWith(async function () {
        // Try to get the response from a cache.
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(event.request);

        if (cachedResponse) {
            // If we found a match in the cache, return it, but also
            // update the entry in the cache in the background.
            //   console.log('cache hit')
            console.log(['cache hit', event])
            event.waitUntil(cache.add(event.request));
            return cachedResponse;
        }

        // If we didn't find a match in the cache, use the network.
        console.log('cache not hit')
        return fetch(event.request).then(response => {
            return caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request.url, response.clone());
                console.log(['cache cache', response])
                return response;
            });
        });;
    }());
})

console.log('testing')

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);

// eslint-disable-next-line no-undef
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
