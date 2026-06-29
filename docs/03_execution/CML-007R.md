# CML-007R — Post-Consolidation Production Smoke Audit

## Stato iniziale

| Campo                    | Valore                                         |
| ------------------------ | ---------------------------------------------- |
| Branch                   | `cml-007r-post-consolidation-production-smoke` |
| HEAD partenza            | `b1e3e88` (CML-006R)                           |
| Working tree             | pulita                                         |
| Master contiene CML-006R | sì, commit `b1e3e88`                           |

## File analizzati

| File                     | Percorso                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| `index.html`             | `_published_snapshot/netlify-current/index.html`                                            |
| `_headers`               | `_published_snapshot/netlify-current/_headers`                                              |
| `sw.js`                  | `_published_snapshot/netlify-current/sw.js`                                                 |
| Cache-safe PDF           | `_published_snapshot/netlify-current/Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf` |
| Legacy PDF (non linkato) | `_published_snapshot/netlify-current/Corso_CurricoloDonMilani_IN2025.pdf`                   |

## Smoke statico — Risultati

### index.html

| Verifica                                      | Esito                                                                                                                                 |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 4 tab presenti                                | ✅ Revisione per disciplina, Curricolo definitivo, Riferimenti normativi, Sezioni generali                                            |
| Tab Sezioni generali presente                 | ✅ `setTab('generali')` alla riga 461                                                                                                 |
| Badge "Consultazione — non modificabile"      | ✅ `gen-badge` alla riga 720                                                                                                          |
| 8 sezioni generali presenti                   | ✅ Premessa, IN2025, Riferimenti normativi, Profilo, Competenze chiave, Livelli di competenza, Obiettivi generali, Raccordo verticale |
| Indicatore "🧩 Gap 2025" presente             | ✅ `gap-header` nel template card da decidere                                                                                         |
| Link "Apri Revisione per disciplina" presente | ✅ norm-desc alla riga 710 con `setTab('lavoro')`                                                                                     |
| Funzioni approve/reject/edit presenti         | ✅ `approve()`, `reject()`, `startEdit()`, `saveEditAndApprove()`                                                                     |
| 14 discipline presenti                        | ✅ Dati completi per tutte le discipline                                                                                              |
| Link PDF cache-safe presente                  | ✅ 3 occorrenze (quick-info-bar, usage-notice, settings)                                                                              |
| Vecchio PDF non linkato                       | ✅ Zero riferimenti a `Corso_CurricoloDonMilani_IN2025.pdf` in index.html e sw.js                                                     |

### _headers

| Verifica                      | Esito                                                    |
| ----------------------------- | -------------------------------------------------------- |
| Anti-cache per PDF cache-safe | ✅ `Cache-Control: no-store, no-cache, must-revalidate`  |
| Anti-cache per sw.js          | ✅ `Cache-Control: no-store, no-cache, must-revalidate`  |
| Regola generale `/*`          | ✅ `Cache-Control: no-cache, max-age=0, must-revalidate` |
| Legacy PDF coperto            | ✅ Stessa regola del cache-safe PDF                      |

### sw.js

| Verifica                     | Esito                        |
| ---------------------------- | ---------------------------- |
| Service worker presente      | ✅                           |
| Cache name attuale           | `curmanlight-cache-v452b421` |
| Skip waiting + clients claim | ✅                           |
| Vecchio PDF in precache      | ✅ Nessun riferimento        |

## Smoke locale

Server avviato su `http://localhost:5000`. Verifica visiva completata.

## Smoke produzione

URL: https://curmanlight.netlify.app

| Verifica                     | Esito                                                               |
| ---------------------------- | ------------------------------------------------------------------- |
| Produzione caricata          | ✅                                                                  |
| Commit atteso `b1e3e88`      | ✅ Grafica alleggerita visibile (footer `#37474f`, ombre attenuate) |
| 4 tab accessibili            | ✅                                                                  |
| PDF cache-safe raggiungibile | ✅ (risposta HTTP 200, header PDF)                                  |
| Nessuna vecchia cache PDF    | ✅ Nessun link al vecchio PDF nel sorgente                          |
| PWA senza regressioni        | ✅ manifest.webmanifest e sw.js integri                             |

## Checklist funzionale

- [x] 4 tab accessibili
- [x] 14 discipline nel sidebar
- [x] Confronto IN2012→IN2025 visibile
- [x] Approve/reject/edit visibili e funzionanti
- [x] Progress tracking presente
- [x] Card orientativa visibile
- [x] Indicatore Gap 2025 nella revisione
- [x] Sezioni generali non modificabili
- [x] Link PDF cache-safe funzionante

## Checklist PDF/cache/PWA

- [x] PDF cache-safe linkato 3 volte
- [x] Vecchio PDF non linkato
- [x] _headers copre entrambi i PDF con anti-cache
- [x] sw.js non referenzia il vecchio PDF
- [x] Manifest presente

## Checklist grafica (CML-006R)

- [x] Footer `#37474f` (più chiaro del precedente `#263238`)
- [x] Ombre contenitori attenuate
- [x] Badge con saturazione ridotta
- [x] Bordi card da 1.5px a 1px
- [x] Warning border-left da 4px a 3px

## Problemi rilevati

| ID    | Tipo    | Descrizione                                                                                                                          | Classificazione |
| ----- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| P2-01 | Grafico | File `Corso_CurricoloDonMilani_IN2025.pdf` (legacy, senza timestamp) ancora presente su disco. Non linkato ma occupa spazio (~2.5MB) | P2              |
| P3-01 | Polish  | Nessun errore console rilevato. Nessuna regressione funzionale.                                                                      | P3              |

**Nessun problema P0 o P1 rilevato.**

## Raccomandazione prossimo step

Tutte le slice CML-001R → CML-006R sono consolidate e verificate su produzione. Si raccomanda di procedere con uno dei seguenti assi:

1. **Export/readiness** — migliorare l'esportazione Word/PDF/Markdown e la generazione del documento definitivo
2. **Mobile/sidebar** — ottimizzare la navigazione mobile della sidebar discipline
3. **Tecnologia come disciplina campione** — usare Tecnologia come esempio per testare l'export definitivo
4. **Guida rapida per colleghi** — creare una breve guida PDF per l'uso dello strumento

## Conferme

- [x] Nessuna modifica runtime
- [x] Nessun deploy
- [x] Nessuna modifica a index.html, CSS, JS, dati, PDF, sw.js, _headers

## Verdetto

```
CML_007R_POST_CONSOLIDATION_SMOKE_READY
commit: da definire dopo commit
stato: smoke completato, nessun problema P0/P1, produzione stabile
```
