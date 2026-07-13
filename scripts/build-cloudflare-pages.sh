#!/usr/bin/env bash
set -euo pipefail

rm -rf _site
mkdir -p _site/legacy

cp -a _published_snapshot/netlify-current/. _site/legacy/
rm -f _site/legacy/sw.js

npm ci --prefix curman-react
VITE_BASE_PATH=/ npm run build --prefix curman-react

cp -a curman-react/dist/. _site/

cat > _site/sw.js <<'EOF'
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys()
    await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)))
    await self.registration.unregister()
    await self.clients.claim()
    const clients = await self.clients.matchAll({ type: 'window' })
    for (const client of clients) {
      client.navigate(client.url)
    }
  })())
})

self.addEventListener('fetch', () => {
  // Intentionally bypass caching while the previous service worker is retired.
})
EOF

test -f _site/index.html
test -f _site/legacy/index.html
test -f _site/sw.js
test ! -f _site/legacy/sw.js

printf 'Cloudflare artifact ready: React at /, legacy at /legacy/, stale service worker reset enabled\n'
