# CML-133 — CML File Labels Runtime Microcopy Alignment

## Fotografia iniziale

| Parametro | Valore |
|-----------|--------|
| Branch | `main` |
| HEAD iniziale | `dad4fcd80b61acaff74bf5ee6cfa92028189aabd` |
| origin/main | `8b9da1384e8a0242bafa3c519f0fd4d3fbe977eb` |
| Ahead | 1 commit |
| Validatore | 7 file, 94 unità, `overallValid: true` |
| Residui ignorati | `.agents`, `skills-lock.json`, `Consultazione` |

## Riferimento audit
CML-132 — Opzione C selezionata: pulizia pulsanti + descrizioni brevi

## 8 sostituzioni applicate

| # | Testo attuale | Testo nuovo | Linea |
|---|---------------|-------------|:-----:|
| 1 | `⬇️ Scarica proposta .cml` | `⬇️ Scarica proposta` | 1417 |
| 2 | `⬇️ Scarica proposta .cml` | `⬇️ Scarica proposta` | 1492 |
| 3 | `.cml: per Drive condiviso.` | `File proposta: per Drive condiviso.` | 1419 |
| 4 | `Importa i file .cml ricevuti dai docenti` | `Importa i file proposta ricevuti dai docenti` | 1431 |
| 5 | `Importa proposte docenti .cml` | `Importa proposte docenti` | 1434 |
| 6 | `Importa gli esiti dipartimentali .cml per controllare` | `Importa gli esiti dipartimentali per controllare` | 1442 |
| 7 | `Importa esiti dipartimentali .cml` | `Importa esiti dipartimentali` | 1445 |
| 8 | `Esporta esito dipartimento .cml` | `Esporta esito dipartimento` | 3607 |

## File runtime modificato
`_published_snapshot/netlify-current/index.html`

## Non modificati
- JSON disciplinari ✅
- Validatore ✅
- Schema `.cml` ✅
- Import/export logica ✅
- Validazione dipartimentale ✅
- CSS, layout, icone, classi ✅
- Funzioni, variabili, chiavi dati ✅
- Attributi tecnici (`accept=".cml"`, `id="*-cml-files"`) ✅

## Esito validatore
7 file, 94 unità, `overallValid: true`, 0 errori ✅

## Esito smoke rapido
- HTTP 200 (localhost:8080) ✅
- Applicazione caricata ✅
- `git diff --check`: pulito ✅
- Nessun errore evidente

## Occorrenze `.cml` residue (17, tutte tecniche/didattiche)

| Occorrenza | Motivazione |
|------------|-------------|
| `code>.cml</code>` nella microguida Home | Scopo didattico (P3, mantenuto da CML-132) |
| `accept=".cml"` (2× input) | Attributo tecnico, non visibile |
| Nomi funzione JS (`exportTeacherCml()`, ecc.) | Interno, non visibile |
| Validazione file (`endsWith(".cml")` ×2) | Logica JS, non visibile |
| Nomi file `.cml` in costanti JS (×3) | Variabile interna |
| Toast/feedback (×8) | Transiente, fuori perimetro UI persistente |

## Verdetto

`CML_133_CML_FILE_LABELS_RUNTIME_MICROCOPY_ALIGNMENT_READY`
