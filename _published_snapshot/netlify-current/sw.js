const CACHE_NAME = "curmanlight-cache-v453p1fix";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",

  "./motto-non-multa-sed-multum.html",
  "./riferimenti_istituzionali_normativa.json",
  "./docs_distribuzione/FONTI_PTOF_RAV_NORMATIVA.md",
  "./docs_distribuzione/NOTE_TESTATA_ESPANDIBILE_MOBILE.txt",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : undefined)))
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        const copy = response.clone();
        if (new URL(request.url).origin === self.location.origin) {
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
