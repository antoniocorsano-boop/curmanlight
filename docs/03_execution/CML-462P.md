# CML-462P — Post-Merge Live Smoke (CML-462)

- **Data**: 2026-07-11
- **Tipo**: public smoke / release gate / post-merge verification
- **Branch**: `main`
- **Base**: `f20176bb006f845ce40b522e8af8e261326435c2` (CML-462 merge commit)

## Obiettivo

Verificare che il deploy GitHub Pages prodotto dal merge di CML-462 serva correttamente, con frecce `→` visibili e senza regressioni.

## Contesto iniziale

CML-462 ha riconciliato la coppia applicativa e corretto quattro occorrenze letterali `\u2192` con il carattere reale `→`. Il merge su `main` ha attivato il workflow GitHub Pages. Lo smoke post-merge verifica che il deploy sia effettivo e che la correzione sia visibile agli utenti.

## Verifiche eseguite

### 1. Fetch live HTML

URL: `https://antoniocorsano-boop.github.io/curmanlight/`

Risultato: HTTP 200, HTML completo recuperato.

### 2. Verifica frecce `→`

| Check | Risultato |
|-------|-----------|
| Frecce `→` (UTF-8 `E2-86-92`) | 4 occorrenze confermate |
| Occorrenze `\u2192` letterali | 0 |
| Bytes UTF-8 per freccia | `E2-86-92` (corretto) |

### 3. Validazioni locali (post-merge)

| Comando | Esito |
|---------|-------|
| `check-app-pair` | `allSync: true`, PAIR_SYNC (index.html + sw.js) |
| curriculum validator | 14/14 PASS |
| runtime shape test | 14/14 PASS |
| `git diff --check` | clean |
| `git status --short --branch` | clean su main |

### 4. Screenshot live

Desktop 1440×900: `report/screenshots/CML-462P/home-desktop-live.png`

## Esiti

| Controllo | Esito |
|-----------|-------|
| Deploy Pages completato | si |
| Frecce `→` visibili | si |
| `\u2192` letterali residui | 0 |
| Coppia applicativa sincronizzata | si |
| Regressioni visive | nessuna |

## Release-gate GitHub Pages

### Percorsi trigger nel diff del merge

| Percorso | Presente | Effetto |
|----------|----------|---------|
| `_published_snapshot/netlify-current/**` | si | Deploy legacy |
| `curman-react/**` | no | — |
| `.github/workflows/pages.yml` | no | — |

### Classificazione

| Campo | Valore |
|-------|--------|
| Push su branch dedicato | eseguito (CML-462) |
| PR aperta | #52 |
| Merge su `main` | eseguito (`f20176bb`) |
| Deploy Pages attivato | si |
| Workflow Pages avviato | si |
| Pubblicazione verificata | si |

## Rischi residui

Nessuno. La correzione è limitata a 4 occorrenze in elementi HTML statici. Smoke visivo confermato.

## Stato Git finale

```text
## main...origin/main
f20176b runtime: reconcile app pair and restore home arrows (CML-462)
56bb9cd docs: audit app pair divergence authority (CML-461)
2fcad53 docs: prepare repository for governed multi-agent work
```

## Movelog

| Campo | Valore |
|-------|--------|
| `docs/REPO-MOVELOG-v2.md` aggiornato | si |
| `docs/REPO-MOVELOG.md` modificato | no |

## Verdetto

```text
CML_462P_POST_MERGE_LIVE_SMOKE_VERIFIED_PUBLISHED
```

---

> **Dichiarazione**: merge su `main` eseguito da CML-462. Deploy Pages attivato e verificato. Nessuna modifica applicativa aggiuntiva eseguita durante CML-462P.
