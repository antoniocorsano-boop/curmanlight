#!/usr/bin/env bash
set -euo pipefail

rm -rf _site
mkdir -p _site/legacy

cp -a _published_snapshot/netlify-current/. _site/legacy/

npm ci --prefix curman-react
VITE_BASE_PATH=/ npm run build --prefix curman-react

cp -a curman-react/dist/. _site/

test -f _site/index.html
test -f _site/legacy/index.html

printf 'Cloudflare artifact ready: React at / and legacy runtime at /legacy/\n'
