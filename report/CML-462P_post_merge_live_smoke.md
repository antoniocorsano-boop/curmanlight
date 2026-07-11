# CML-462P — Post-Merge Live Smoke

## Verdetto

```
CML_462P_POST_MERGE_LIVE_SMOKE_VERIFIED_PUBLISHED
```

## Riepilogo

Smoke post-merge del deploy GitHub Pages prodotto da CML-462. Verifica che la correzione frecce (`\u2192` → `→`) sia effettivamente pubblicata e visibile.

**Risultato**: Deploy completato. 4 frecce `→` (UTF-8 `E2-86-92`) confermate nella pagina live. Nessuna occorrenza `\u2192` letterale residua. Nessuna regressione visiva.

## Verifiche

| Check | Risultato |
|-------|-----------|
| Deploy Pages completato | si (run `29140824499`) |
| Live HTML fetch | HTTP 200 |
| Frecce `→` UTF-8 | 4 occorrenze, `E2-86-92` |
| `\u2192` letterali | 0 |
| check-app-pair | `allSync: true` |
| curriculum validator | 14/14 PASS |
| runtime shape test | 14/14 PASS |
| git status | clean su main |
| git diff --check | clean |

## Screenshot

`report/screenshots/CML-462P/home-desktop-live.png` — Desktop 1440×900

## Trigger Pages

| Percorso | Nel diff del merge | Effetto |
|----------|-------------------|---------|
| `_published_snapshot/netlify-current/**` | si | Deploy legacy |
| `curman-react/**` | no | — |
| `.github/workflows/pages.yml` | no | — |

## Catena completa

```
CML-461 (audit) → CML-462 (reconciliation + arrow fix, PR #52 merged) → CML-462P (live smoke PASS)
```
