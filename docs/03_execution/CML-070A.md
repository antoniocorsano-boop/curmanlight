# CML-070A — UDA Read-Only Prototype Live Deploy Smoke

**Stato:** ✅ Completed  
**Data:** 2026-06-23  
**Tipo:** Deploy/smoke/documentazione — nessuna modifica runtime

## Summary

Pubblicare e verificare su GitHub Pages il prototipo UDA read-only introdotto in CML-070, controllando che le due UDA modello siano visibili, leggibili e non producano regressioni.

## Fase 0 — Stato locale

| Controllo | Esito |
|-----------|-------|
| Branch | `main` ✅ |
| HEAD | `b0003ba` feat: add read-only UDA prototype ✅ |
| Working tree | Pulita ✅ |
| Validazione Tecnologia | PASS (13 unità, valid:true) ✅ |
| Audit | buttonTags 101, onclick 117, exportButtons 27 ✅ |

## Fase 1 — Push e workflow GitHub Pages

- **Push:** `git push origin main` — `8d74749..b0003ba` ✅
- **Workflow:** `Deploy CurManLight to GitHub Pages` — **success** ✅

## Fase 2 — Smoke live

URL: https://antoniocorsano-boop.github.io/curmanlight/

| # | Controllo | Esito |
|---|-----------|-------|
| 1 | Pagina caricata (322KB) | ✅ |
| 2 | Card Curriculum presente | ✅ |
| 3 | Card Didattica presente | ✅ |
| 4 | Card Didattica "Progetta UDA" attivo | ✅ |
| 5 | Sezione UDA modello (`#didattica-uda`) | ✅ |
| 6 | 2 UDA modello visibili | ✅ |
| 7 | UDA Primaria "Cittadini digitali responsabili" | ✅ |
| 8 | UDA Secondaria "Dal computer al documento" | ✅ |
| 9 | Badge "🟢 Dato curricolare" presente | ✅ |
| 10 | Badge "🟡 Esempio didattico" presente | ✅ |
| 11 | Microcopy "Read-only" | ✅ |
| 12 | Microcopy "validazione professionale del docente" | ✅ |
| 13 | Sezione UDA senza campi editabili | ✅ |
| 14 | Valutazione/Evidenze invariata | ✅ |
| 15 | Filtro ordine Didattica funzionante | ✅ |
| 16 | Curriculum raggiungibile | ✅ |
| 17 | Tecnologia normalizzata Curriculum visibile | ✅ |
| 18 | Revisione Curriculum presente | ✅ |
| 19 | Export buttons invariati | ✅ |
| 20 | Role-access gating (`CML2025`) | ✅ |
| 21 | "Blocca di nuovo" presente | ✅ |
| 22 | Mobile bottom bar | ✅ |
| 23 | UDA in mobile menu | ✅ |
| 24 | Microcopy "Non costituisce documento istituzionale" | ✅ |
| 25 | Microcopy "Non sostituisce la progettazione del docente" | ✅ |
| | **Totale** | **25/25 ✅** |

## File modificati

| File | Modifica |
|------|----------|
| `docs/03_execution/CML-070A.md` | Creato |
| `report/CML-070A_uda_readonly_prototype_live_deploy_smoke.md` | Creato |
| `docs/REPO-MOVELOG.md` | Aggiornato |

Nessuna modifica a runtime (`_published_snapshot/netlify-current/index.html`), schema `.cml`, role-access gating, export/import/report, workflow GitHub Pages, asset.

## Verdetto

`CML_070A_UDA_READONLY_PROTOTYPE_LIVE_DEPLOY_SMOKE_READY`
