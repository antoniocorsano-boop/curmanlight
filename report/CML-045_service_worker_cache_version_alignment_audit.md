# CML-045 — Service Worker Cache Version Alignment Audit

## Summary

Audit tecnico-documentale su `sw.js` e gestione cache. La cache name `curmanlight-cache-v452b421` è invariata dall'ultimo bump (commit `cd5996e`), ma `index.html` ha ricevuto 26 commit di modifiche sostanziali (viewer curricolo, etichette versione, callout, fix flusso dipartimento `.cml`, report). Il cache-first strategy blinda la versione precaricata finché il nome cache non cambia. Rischio MEDIO. Raccomandato bump cache in CML-046.

## Dettaglio

| Campo | Valore |
|---|---|
| HEAD partenza | `934e395` |
| File ispezionati | `sw.js` (42 righe) |
| Cache name | `curmanlight-cache-v452b421` |
| Cache name invariato da | `cd5996e` (fix: add cache busting for course pdf link) |
| Commit divergenti sw.js ↔ HEAD | 0 (sw.js mai modificato) |
| Commit divergenti cache bump ↔ HEAD index.html | 26 |
| Strategia fetch | Cache-first (precached index.html mai ricalcolato) |
| skipWaiting | ✅ presente |
| clients.claim | ✅ presente |
| Cleanup activate | ✅ elimina cache con nome diverso |

## Rischio

| Classificazione | **MEDIO** |
|---|---|
| Causa | Cache name invariato, 26 commit non accompagnati da bump, cache-first su `index.html` |
| Impatto utente | Utenti di ritorno vedono versione obsoleta dell'app |
| Probabilità | MEDIA (solo utenti con cache preesistente) |
| Rimedio | Bump cache name in sw.js (1 riga) |

## Opzioni valutate

| Opzione | Decisione |
|---|---|
| A — Nessun intervento | ❌ |
| B — Bump versione cache | **✅ Selezionata** |
| C — Bump + cleanup esplicito | ⚠️ Ridondante (activate già pulisce) |
| D — Disabilitare cache index.html | ❌ Invasivo |
| E — Solo nota guida utente | ❌ Rimedio debole |

## Opzione selezionata

**B — Bump versione cache** (da eseguire in CML-046).

Modifica minima: `v452b421` → `v452b422` alla riga 1 di `_published_snapshot/netlify-current/sw.js`.

## Prossimo step raccomandato

CML-046: eseguire bump cache name, smoke test, deploy controllato.

## Verdetto

```
CML_045_SERVICE_WORKER_CACHE_BUMP_RECOMMENDED
```

## Confini

| Controllo | Esito |
|---|---|
| Docs-only | ✅ |
| Nessuna modifica runtime | ✅ |
| Nessun deploy | ✅ |
| Nessuna modifica schema `.cml` | ✅ |
| Nessuna modifica persistenza | ✅ |
| Nessuna modifica guide utente | ✅ |
| Nessun nuovo esempio `.cml` | ✅ |
| MEMORY.md presente come untracked | ✅ non committato |
| `.kilo/` presente come untracked | ✅ non committato |
| CLAUDE.md presente come untracked | ✅ non committato |
