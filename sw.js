const Movie = "Movie-V2";
const assets = [
    "./",
    "./index.html",
    "./sw.js",
    "./registerSW.js",
    "./manifest.webmanifest",
    "./assets/index.e3bcc929.js",
    "./assets/index.242a0f94.css",
    "./assets/lazysizes.min.js",
    "./unknown.svg",
    "./assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.96470908.woff2",
    "./img/apple-touch-icon.png",
    "./img/favicon.ico",
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(Movie)
            .then(function (cache) {
                return cache.addAll(assets);
            })
    );
});

self.addEventListener('fetch', function (event) {
    let online = navigator.onLine
    if (!online) {
        event.respondWith(
            caches.match(event.request).then(function (res) {
                if (res) {
                    return res;
                }
                requestBackend(event);
            })
        )
    }
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys.map(function (key, i) {
                if (key !== Movie) {
                    return caches.delete(keys[i]);
                }
            }))
        })
    )
});

function requestBackend(event) {
    var url = event.request.clone();
    return fetch(url).then(function (res) {
        //if not a valid response send the error
        if (!res || res.status !== 200 || res.type !== 'basic') {
            return res;
        }
        var response = res.clone();
        caches.open(Movie).then(function (cache) {
            cache.put(event.request, response);
        });
        return res;
    })
}