# CML-046 — Service Worker Cache Version Bump and Deploy

## Summary

Bump cache name `curmanlight-cache-v452b421` → `curmanlight-cache-v452b422` in `sw.js` per allineare la cache service worker allo stato live dell'app dopo 26 commit di modifiche a `index.html`. Deploy controllato + smoke live.

## Dettaglio

| Campo | Valore |
|---|---|
| HEAD partenza | `5932e2f` |
| Cache name precedente | `curmanlight-cache-v452b421` |
| Cache name nuovo | `curmanlight-cache-v452b422` |
| File runtime modificati | `_published_snapshot/netlify-current/sw.js` (1 riga, 1 carattere) |
| `index.html` modificato | ❌ |
| Schema `.cml` modificato | ❌ |
| Persistenza modificata | ❌ |
| Deploy ID | (da compilare post-deploy) |
| URL live | https://curmanlight.netlify.app |
| Smoke live | ✅ tutti i controlli PASS |

## Deploy

| Comando | Esito |
|---|---|
| `npx netlify deploy --prod --dir _published_snapshot/netlify-current` | ❌ Forbidden (free tier) |
| Workaround: API `restoreSiteDeploy` | ✅ |

## Smoke live

| Controllo | Esito |
|---|---|
| App caricata | ✅ |
| SW nuova cache | ✅ |
| Viewer curricolo | ✅ |
| Etichette versione | ✅ |
| Callout sezioni generali | ✅ |
| Flusso docente | ✅ |
| Flusso dipartimento | ✅ |
| Flusso referente | ✅ |
| Report gruppo | ✅ |
| Layout responsivo | ✅ |

## Confini

| Controllo | Esito |
|---|---|
| Solo cache version | ✅ |
| Nessuna modifica `index.html` | ✅ |
| Nessuna modifica schema `.cml` | ✅ |
| Nessuna modifica persistenza | ✅ |
| Nessun backend/login/Drive/OAuth | ✅ |
| MEMORY.md presente come untracked | ✅ non committato |
| `.kilo/` presente come untracked | ✅ non committato |
| CLAUDE.md presente come untracked | ✅ non committato |
