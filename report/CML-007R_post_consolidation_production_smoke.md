# CML-007R — Post-Consolidation Production Smoke Audit

```
CML_007R_POST_CONSOLIDATION_SMOKE_READY
```

## Stato iniziale

- **Branch partenza:** `master` (`b1e3e88`, CML-006R)
- **Branch audit:** `cml-007r-post-consolidation-production-smoke`
- **URL produzione verificato:** https://curmanlight.netlify.app

## File analizzati

- `_published_snapshot/netlify-current/index.html`
- `_published_snapshot/netlify-current/_headers`
- `_published_snapshot/netlify-current/sw.js`
- `_published_snapshot/netlify-current/Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf`

## Esito smoke statico

- ✅ 4 tab con `setTab()` funzionanti
- ✅ 8 sezioni generali presenti nel tab Sezioni generali
- ✅ Indicatore Gap 2025 nel template revisione
- ✅ Link "Apri Revisione per disciplina" nella normativa
- ✅ Funzioni approve/reject/edit presenti
- ✅ 14 discipline con dati completi
- ✅ Solo PDF cache-safe linkato (3 occorrenze)
- ✅ _headers copre PDF e sw.js con anti-cache
- ✅ sw.js pulito (nessun riferimento a vecchio PDF)

## Esito smoke locale

- ✅ App caricata correttamente su server locale
- ✅ Tutti i tab accessibili
- ✅ Grafica alleggerita visibile

## Esito smoke produzione

- ✅ Produzione caricata correttamente
- ✅ Commit `b1e3e88` verificato (grafica alleggerita visibile)
- ✅ PDF cache-safe raggiungibile
- ✅ Nessuna regressione PWA

## Problemi rilevati

| ID | Tipo | Class. | Dettaglio |
|---|---|---|---|
| P2-01 | File legacy | P2 | Vecchio PDF `Corso_CurricoloDonMilani_IN2025.pdf` presente su disco (~2.5MB), non linkato |
| P3-01 | Polish | P3 | Nessun errore console, nessuna regressione funzionale |

**Nessun problema P0/P1.**

## Raccomandazione

Produzione stabile. Prossimo asse consigliato: export/readiness, mobile/sidebar, Tecnologia come disciplina campione, o guida rapida per colleghi.

## Conferme

- [x] Nessuna modifica runtime
- [x] Nessun deploy
- [x] Solo file di report creati

## Verdetto finale

```
CML_007R_POST_CONSOLIDATION_SMOKE_READY
commit: da definire
stato: produzione stabile, nessun problema P0/P1, tutte le slice CML-001R→CML-006R consolidate
```
