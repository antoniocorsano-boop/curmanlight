# CML-427 — User Validation Entry Live Smoke Report

## Identificativo slice
- **ID**: CML-427
- **Tipo**: audit / smoke test / product validation readiness
- **Runtime modificato**: NO
- **Dati curricolari modificati**: NO
- **Commit**: f561066 (base), nessun commit runtime

## Verdetto
**CML_427_USER_VALIDATION_ENTRY_LIVE_SMOKE_READY_LOCAL_NOT_PUSHED**

## Riepilogo controlli

### 1. Pre-check Git
- Branch: `main`
- HEAD: `f561066`
- Origin/main: sincronizzato
- Working tree: pulito (tracciati)
- `git diff --check`: OK

### 2. Validatori
| Validatore | Esito |
|---|---|
| `validate-cml-normalized-curriculum.mjs` | 14/14 PASS |
| `test-runtime-mappa-dati-shape.mjs` | 14/14 PASS |

### 3. Smoke locale

#### Home — Partecipa al test guidato
- Classe CSS `.home-validation-entry`: presente
- Titolo: "Partecipa al test guidato"
- Descrizione: "Aiuta a verificare se lo strumento è chiaro, utile e coerente con il lavoro scolastico reale."
- Pulsante: "Avvia test guidato" → chiama `openValidationPanel()`

#### Modal test guidato
- Overlay semitrasparente (`validation-overlay`)
- Dialog centrato (`validation-dialog`)
- Titolo: "Test guidato per docenti"
- Intro: "Questo percorso serve a raccogliere osservazioni sull'usabilità dello strumento..."
- Scenario: scenario docenti (5 task)
- Textarea: "Annotazioni non vincolanti"
- Avvertenza: note in calce (validazione umana)
- Pulsanti: "Esporta osservazioni" e "Chiudi"
- Chiusura: click "Chiudi" o tasto Escape

#### Esportazione
- File: `curmanlight-test-guidato-osservazioni.txt`
- Intestazione: "CurManLight — Test guidato utente"
- Data: generata automaticamente (locale IT)
- Contesto: recuperato da `getWorkContextChip()`
- Scenario: verbatim come nel dialog
- Annotazioni: contenuto textarea o "(nessuna annotazione)"
- Riutilizza `downloadBlob()` esistente

#### Navigazione
- Tutte le 5 voci intatte (Home, Curricolo, Progetta, Esportazioni, Guida)
- Barra mobile e sidebar desktop presenti

### 4. Verifica live (GitHub Pages)
- URL: `https://antoniocorsano-boop.github.io/curmanlight/`
- Cache-busting: `?_cb=427`
- Card Home: verificata
- Elementi modal: verificati tramite analisi codice risposta
- Nessuna dipendenza esterna, account, invio remoto

### 5. Screenshot

| File | Dimensione | Contenuto |
|---|---|---|
| `CML-427-home-desktop.png` | 178 KB | Home desktop 1280×800 — card test guidato visibile |
| `CML-427-home-mobile.png` | 63 KB | Home mobile 375×812 — card test guidato visibile, layout responsive |
| `CML-427-validation-modal-desktop.png` | — | Non acquisito (limitazione headless) |

## Microfix
Nessuno. Runtime non modificato.

## Osservazioni
- La card Home si integra coerentemente con le altre card esistenti (bordo sinistro viola, stessa gerarchia visiva)
- Il modal segue il pattern delle overlay esistenti (`.work-context-overlay`), con z-index 10001 (sopra tutto)
- La textarea è etichettata con `<label for="validation-notes">` per accessibilità
- Il pulsante "Esporta osservazioni" produce un file .txt puro, senza invio remoto
- Le annotazioni esplicite chiariscono che non si tratta di valutazione del docente
- Pronto per validazione con utenti reali

## File modificati
Solo documentazione (docs + report).

## Push
Non eseguito.
