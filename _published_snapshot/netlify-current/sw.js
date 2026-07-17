const CACHE_NAME = "curmanlight-cache-v455-cml436";
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
function offlineFallbackResponse(request) {
  const acceptHeader = request.headers.get("accept") || "";
  const isHtml = request.mode === "navigate" || acceptHeader.includes("text/html");
  if (isHtml) {
    return new Response("<!doctype html><html lang=\"it\"><meta charset=\"utf-8\"><title>CurManLight offline</title><body><h1>CurManLight non disponibile offline</h1><p>Ricarica la pagina quando la connessione torna disponibile.</p></body></html>", {
      status: 503,
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
  return new Response("", { status: 504, statusText: "Offline" });
}
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await Promise.all(
        APP_SHELL.map(url =>
          cache.add(url).catch(() => {
            // Skip missing shell assets so install never fails globally.
          })
        )
      );
    })
  );
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

  // Keep HTML navigations aligned with the latest deployed artifact.
  const acceptHeader = request.headers.get("accept") || "";
  const isNavigation = request.mode === "navigate" || acceptHeader.includes("text/html");
  if (isNavigation) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request)
          .then(cached => cached || caches.match("./index.html"))
          .then(fallback => fallback || offlineFallbackResponse(request)))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        const copy = response.clone();
        if (new URL(request.url).origin === self.location.origin) {
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => caches.match("./index.html")
        .then(fallback => fallback || offlineFallbackResponse(request)));
    })
  );
});
