# CML-436 — Pages Stale Home Cache Invalidation Report

## Summary

After CML-435 merge, GitHub Pages served stale Home content due to service worker cache. CML-436 bumps SW cache version and registration URL to force fresh install.

## Root cause

| Element | Old value | New value |
|---------|-----------|-----------|
| CACHE_NAME | `curmanlight-cache-v454-cml2391` | `curmanlight-cache-v455-cml436` |
| SW registration | `./sw.js?v=20260701-cml2391` | `./sw.js?v=20260710-cml436` |

## Files changed

- `_published_snapshot/netlify-current/sw.js` — cache version bump
- `index.html` — SW registration URL bump
- `_published_snapshot/netlify-current/index.html` — SW registration URL bump
- `sw.js` (root) — copied from snapshot for dev parity

## Live verification

- `curl` to Pages URL with cache-busting param
- Confirmed: "Apri il curricolo" present, "Azione: vai a" absent, no duplicate blocks

## Constraints respected

- No curriculum data modified
- No backend, accounts, OAuth
- No runtime logic changes
- Only cache/service worker infrastructure
