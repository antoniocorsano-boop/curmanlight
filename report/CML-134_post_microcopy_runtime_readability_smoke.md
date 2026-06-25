# CML-134 — Post-Microcopy Runtime Readability Smoke

## 1. Fotografia iniziale

| Parametro | Valore |
|-----------|--------|
| Branch | `main` |
| HEAD | `1e4d25471adc3666d2db92ee6677b3aab2b0b6cf` |
| origin/main | `1e4d25471adc3666d2db92ee6677b3aab2b0b6cf` |
| Working tree | pulito |
| Validatore | 7 file, 94 unità, `overallValid: true`, 0 errori |
| Residui ignorati | `.agents`, `skills-lock.json`, `Consultazione` |

## 2. Riferimento cicli
- CML-130→CML-131A: microcopy alignment (10 sostituzioni)
- CML-132→CML-133A: CML file labels clarity (8 sostituzioni)
- **18 sostituzioni testuali totali su `index.html`**

## 3. Etichette nuove verificate (16)

| # | Etichetta | Presente |
|---|-----------|:--------:|
| 1 | `📝 Testo (confronto)` | ✅ |
| 2 | `📝 Testo (definitivo)` | ✅ |
| 3 | `📝 Testo` (Riepilogo) | ✅ |
| 4 | `📝 Copia testo` | ✅ |
| 5 | `📝 Scarica testo` | ✅ |
| 6 | `📤 Esportazione del curricolo revisionato` | ✅ |
| 7 | `⬇ Azioni di esportazione ▾` (×3) | ✅ |
| 8 | `📊 Resoconto sintesi` | ✅ |
| 9 | `📝 Scarica resoconto gruppo di lavoro` | ✅ |
| 10 | `strumenti di esportazione` | ✅ |
| 11 | `⬇️ Scarica proposta` (×2) | ✅ |
| 12 | `File proposta: per Drive condiviso.` | ✅ |
| 13 | `Importa i file proposta ricevuti dai docenti` | ✅ |
| 14 | `Importa proposte docenti` | ✅ |
| 15 | `Importa gli esiti dipartimentali` (descr. + btn) | ✅ |
| 16 | `⬇️ Esporta esito dipartimento` | ✅ |

## 4. Vecchie etichette principali assenti (13)

| # | Etichetta vecchia | Residua |
|---|-------------------|:--------:|
| 1 | `Markdown (confronto)` | ❌ |
| 2 | `Markdown (definitivo)` | ❌ |
| 3 | `Copia Markdown` | ❌ |
| 4 | `Scarica Markdown` | ❌ |
| 5 | `Export del curricolo` | ❌ |
| 6 | `Azioni di export` | ❌ |
| 7 | `Report sintesi` | ❌ |
| 8 | `Scarica report gruppo` | ❌ |
| 9 | `Scarica proposta .cml` | ❌ |
| 10 | `.cml: per Drive condiviso` | ❌ |
| 11 | `Importa proposte docenti .cml` | ❌ |
| 12 | `Importa esiti dipartimentali .cml` | ❌ |
| 13 | `Esporta esito dipartimento .cml` | ❌ |

## 5. Esito smoke

| Check | Esito |
|-------|:-----:|
| Apertura applicazione (HTTP 200) | ✅ |
| Navigazione principale (tabbar, tabs) | ✅ |
| Sezione Esportazione / consegna | ✅ |
| Etichette Testo, Esportazione, Resoconto | ✅ |
| Area proposta docente: Scarica proposta | ✅ |
| Area Drive: File proposta | ✅ |
| Area dipartimento: Importa proposte docenti | ✅ |
| Area esiti: Importa esiti dipartimentali | ✅ |
| Area esito: Esporta esito dipartimento | ✅ |
| Funzioni import/export presenti (69 hit) | ✅ |
| Struttura navigazione integra (56 hit) | ✅ |
| Nessuna regressione su Curriculum | ✅ |
| Nessuna regressione su import/export | ✅ |
| Nessuna regressione su validazione dipartimentale | ✅ |

## 6. Note di leggibilità
Nessuna nota negativa. I nuovi testi sono coerenti:
- "Testo" è più chiaro di "Markdown" per il pubblico docente
- "Esportazione", "esportazione" sostituiscono l'anglicismo "export"
- "Resoconto" è più italiano di "Report"
- "File proposta" descrive il contenuto meglio dell'estensione ".cml"
- I pulsanti senza ".cml" sono più operativi e immediati

## 7. Confirm
- **Nessun runtime modificato** in questa slice
- **Nessuna modifica a JSON, validator, schema, import/export, CSS, layout, icone, classi, funzioni**

## 8. Verdetto

`CML_134_POST_MICROCOPY_RUNTIME_READABILITY_SMOKE_READY`

## Prossimo passo raccomandato
Ciclo microcopy e file labels chiuso. Prossimo ciclo può essere su:
- "normalizzato" → "strutturato" (P2, 6 occorrenze residue)
- Oppure aprire nuovo ciclo su area funzionale diversa
