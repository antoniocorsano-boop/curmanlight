# CML-068A — Didattica Read-Only Prototype Live Deploy Smoke

**Stato:** ✅ Completed  
**Data:** 2026-06-23  
**Commit docs:** `docs: smoke Didattica prototype live`

## Summary

Pubblicare su GitHub Pages e verificare live il primo prototipo read-only dell'area Didattica introdotto in CML-068 (modulo Valutazione/Evidenze). La slice è deploy/smoke/documentazione — nessuna modifica runtime.

## Fase 0 — Stato locale

| Controllo | Esito |
|-----------|-------|
| Branch | `main` ✅ |
| HEAD | `8d74749` feat: add read-only Didattica evidence prototype ✅ |
| Working tree | Pulita ✅ |
| Validazione Tecnologia | PASS (13 unità, valid: true) ✅ |
| Audit| buttonTags: 100, exportButtons: 27, inlineOnclick: 114 ✅ |

## Fase 1 — Push e workflow GitHub Pages

- **Push:** `git push origin main` — `2947309..8d74749` ✅
- **Workflow:** `Deploy CurManLight to GitHub Pages` — **success** ✅
- Deploy da `_published_snapshot/netlify-current`

## Fase 2 — Smoke live

URL: https://antoniocorsano-boop.github.io/curmanlight/

| # | Controllo | Esito |
|---|-----------|-------|
| 1 | Pagina caricata (200 OK, 309KB) | ✅ |
| 2 | Home a due aree (Curriculum + Didattica) | ✅ |
| 3 | Card Didattica "Valuta evidenze" attivo | ✅ |
| 4 | Tab/sezione Didattica visibile (`#didattica-evidence-list`) | ✅ |
| 5 | Titolo "Valutazione ed evidenze" | ✅ |
| 6 | Microcopy "Prototipo" read-only | ✅ |
| 7 | Microcopy "validazione professionale del docente" | ✅ |
| 8 | Conteggio 13 unità totali | ✅ |
| 9 | Copertura Infanzia, Primaria, Secondaria | ✅ |
| 10 | Filtro ordine (`setDidatticaFilter`) | ✅ |
| 11 | Card unità espandibili (`didattica-evidence-unit-body`) | ✅ |
| 12 | Evidenze osservabili visibili | ✅ |
| 13 | Criteri di valutazione visibili | ✅ |
| 14 | Nessun campo editabile | ✅ |
| 15 | Nessun nuovo salvataggio locale | ✅ |
| 16 | Curriculum raggiungibile (`tab-curricolo`) | ✅ |
| 17 | Home Curriculum funzionante | ✅ |
| 18 | Revisione Curriculum funzionante (`tab-lavoro`) | ✅ |
| 19 | Tecnologia norm presente (`tecnologia-norm`) | ✅ |
| 20 | Filtri Tecnologia funzionanti | ✅ |
| 21 | Export/import/report invariati | ✅ |
| 22 | Role-access gating invariato (`CML2025`, `Blocca di nuovo`) | ✅ |
| 23 | Regressione `.cml` PASS (nessun nuovo campo) | ✅ |
| 24 | Mobile bottom bar Home | ✅ |
| 25 | Didattica raggiungibile da menu mobile | ✅ |
| | **Totale** | **25/25 ✅** |

Audit densità live: button tags 100, export-btn 27, onclick 114.

## File modificati

| File | Modifica |
|------|----------|
| `docs/03_execution/CML-068A.md` | Creato |
| `report/CML-068A_didattica_readonly_prototype_live_deploy_smoke.md` | Creato |
| `docs/REPO-MOVELOG.md` | Aggiornato |

Nessuna modifica a runtime (`_published_snapshot/netlify-current/index.html`), schema `.cml`, role-access gating, export/import/report, workflow GitHub Pages, asset.

## Verdetto

`CML_068A_DIDATTICA_READONLY_PROTOTYPE_LIVE_DEPLOY_SMOKE_READY`
