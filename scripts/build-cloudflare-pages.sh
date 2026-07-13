#!/usr/bin/env bash
set -euo pipefail

rm -rf _site
mkdir -p _site/react-preview

cp -a _published_snapshot/netlify-current/. _site/

npm ci --prefix curman-react
VITE_BASE_PATH=/react-preview/ npm run build --prefix curman-react

cp -a curman-react/dist/. _site/react-preview/

printf 'Cloudflare Pages artifact ready in _site\n'
