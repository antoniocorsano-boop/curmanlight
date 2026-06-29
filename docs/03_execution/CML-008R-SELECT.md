# CML-008R-SELECT — Export Readiness: Markdown strutturato della disciplina campione Tecnologia

## Stato iniziale

| Campo                    | Valore                                         |
| ------------------------ | ---------------------------------------------- |
| Branch                   | `cml-007r-post-consolidation-production-smoke` |
| HEAD partenza            | `b1e3e88` (CML-006R)                           |
| Working tree             | Untracked files (CML-007R report, spec draft)  |
| Master contiene CML-006R | sì, commit `b1e3e88`                           |

## Runtime analizzato

`_published_snapshot/netlify-current/index.html` — ~2288 righe, single-file SPA.

### Funzioni export esistenti

| Funzione                       | Righe     | Libreria                  | Dipendenza esterna   |
| ------------------------------ | --------- | ------------------------- | -------------------- |
| `exportWord(onlyApproved)`     | 1780–1937 | docx.js 8.5.0 CDN         | ❌ Richiede internet |
| `copyForWord(onlyApproved)`    | 1753–1764 | JS nativo                 | ✅ Nessuna           |
| `exportMarkdown(onlyApproved)` | 1766–1774 | JS nativo                 | ✅ Nessuna           |
| `exportPDF(onlyApproved)`      | 1944–2056 | JS nativo (browser print) | ✅ Nessuna           |
| `exportLocalBackup()`          | 1127–1142 | JS nativo                 | ✅ Nessuna           |
| `importLocalBackup(event)`     | 1144–1171 | JS nativo                 | ✅ Nessuna           |

### Struttura dati (buildDocumentModel)

- `buildDocumentModel(onlyApproved)` (righe 1562–1613): itera tutte le discipline in `DISCIPLINE`, filtra per `onlyApproved`, costruisce modello con frontespizio + discipline
- `modelToMarkdown(model, onlyApproved)` (righe 1618–1671): genera stringa Markdown per tutte le discipline
- Il modello non supporta filtro per singola disciplina
- L'output Markdown non include:
  - Nota "Documento di lavoro — da validare"
  - Riferimenti alle sezioni generali
  - Sintesi decisioni
  - Gap 2025 espliciti
  - Avvertenza finale

### Dati Tecnologia

Tecnologia è una delle 14 discipline (righe ~940–970 in DATA), con:

- `comp`: "Competenza digitale e STEM"
- `nuclei`: "Disegno tecnico · Materiali · Cicli tecnologici · Informatica"
- Traguardi: ~6-8 item tra Infanzia, Primaria, Secondaria
- Obiettivi: ~8-12 item tra Primaria e Secondaria
- Mix di status: `ok`, `modifica`, `nuovo`

## Problema

1. L'export Markdown attuale esporta sempre **tutte le discipline** — non c'è modo di esportare una singola disciplina per la revisione del dipartimento disciplinare
2. L'output Markdown è un dump tecnico senza contesto — mancano:
   - Indicazione che è un documento di lavoro, non definitivo
   - Collegamento alle sezioni generali del curricolo
   - Sintesi delle decisioni prese
   - Marcatori espliciti dei gap 2025
   - Avvertenza sul valore non deliberativo
3. Il gruppo di lavoro (Collegio Docenti, Dipartimenti) non può lavorare su una disciplina alla volta in formato condivisibile

## Obiettivo

Abilitare l'export Markdown strutturato della **sola disciplina Tecnologia**, con:

- Intestazione documento + nota "Documento di lavoro — da validare"
- Riferimenti alle 8 sezioni generali
- Sintesi decisioni (conteggi approvate/rifiutate/da decidere)
- Confronto IN2012↔IN2025 per ogni item
- Gap 2025 marcati esplicitamente
- Avvertenza finale sul carattere non deliberativo

## Opzioni valutate

### Opzione A — Markdown strutturato per singola disciplina (raccomandata)

**Interventi:**

- `buildDocumentModel()`: aggiunge parametro `opts.disciplineFilter` per filtrare discipline da esportare
- `modelToMarkdown()`: aggiunge flag strutturati (introNote, includeGeneraliRef, includeDecisionSummary, includeGapMarkers, includeDisclaimer)
- `exportMarkdown()`: nuovo parametro `disciplineFilter`
- UI: pulsante "📝 Esporta Markdown (Tecnologia)" nella barra titolo di Tecnologia
- Nessuna modifica ad altri formati di export

| Criterio                          | Valutazione                                                    |
| --------------------------------- | -------------------------------------------------------------- |
| Beneficio per il gruppo di lavoro | Alto — output utilizzabile subito per revisione disciplinare   |
| Rischio regressione               | Basso — solo Markdown toccato, comportamento legacy preservato |
| Dipendenza esterna                | Zero — JS nativo                                               |
| File toccati                      | index.html (~40-60 righe)                                      |
| Impatto workflow                  | Nullo — approve/reject/edit invariati                          |
| Impatto mobile                    | Minimo — un bottone in più nella barra disciplina              |
| Coerenza export esistente         | Alta — estende modello esistente senza romperlo                |
| Tempo stimato                     | 1-2 ore                                                        |

**Raccomandazione:** Prima scelta.

### Opzione B — Pannello export unificato con selettore disciplina

**Interventi:**

- Nuovo pannello modale "Esporta" con selettore formato + selettore disciplina/e
- Interfaccia unificata per tutti i formati di export
- Logica di raggruppamento e filtro centralizzata

| Criterio            | Valutazione                                             |
| ------------------- | ------------------------------------------------------- |
| Beneficio UX        | Alto — interfaccia unica per tutti gli export           |
| Rischio regressione | Alto — nuova modale, nuovo flusso, più punti di rottura |
| Complessità         | Media — va progettata interfaccia, gestione stati       |
| Impatto mobile      | Medio — modale da adattare a schermi piccoli            |
| Tempo stimato       | 4-6 ore                                                 |

**Raccomandazione:** Slice futura (CML-009R o successiva). Troppo impattante per questa fase.

### Opzione C — Solo miglioramento modelToMarkdown() senza filtro disciplina

**Interventi:**

- Migliora la struttura dell'output Markdown (nota, sintesi, gap, avvertenza)
- Non aggiunge filtro per singola disciplina
- L'utente deve comunque esportare tutto e selezionare manualmente la parte di interesse

| Criterio            | Valutazione                                                                  |
| ------------------- | ---------------------------------------------------------------------------- |
| Beneficio           | Parziale — output migliore ma non risolve il problema del focus disciplinare |
| Rischio regressione | Basso — solo Markdown                                                        |
| Tempo stimato       | 30-45 minuti                                                                 |

**Raccomandazione:** Non basta da sola — il punto chiave è poter esportare una disciplina per volta.

## Opzione selezionata: **Opzione A**

### Motivazione

1. **Impatto minimo sul codice esistente:** `buildDocumentModel()` già itera `DISCIPLINE` — aggiungere un filtro è un'estensione naturale, non un refactor
2. **Zero dipendenze esterne:** Markdown è testo puro, generato con JS nativo
3. **Massimo beneficio immediato:** il Dipartimento di Tecnologia può ricevere un documento di lavoro focalizzato, con contesto completo
4. **Comportamento legacy preservato:** `exportMarkdown(true)` senza filtro produce output identico al precedente
5. **Base per evoluzione futura:** il meccanismo di filtro per disciplina sarà riutilizzabile quando si estenderà ad altre discipline o formati
6. **Nessun impatto su approvazione collegiale:** il Markdown è esplicitamente marcato come "documento di lavoro — da validare", non sostituisce delibere

## Perimetro CML-008R implementativo

### File ammessi

- `_published_snapshot/netlify-current/index.html`

### File vietati

- `sw.js`, `_headers`, `manifest.webmanifest`
- Assets (icone, PDF, font)
- Qualsiasi file fuori da `_published_snapshot/netlify-current/`
- Qualsiasi modifica a `exportWord()`, `exportPDF()`, `copyForWord()`

### Dettaglio modifiche

#### A) buildDocumentModel() — nuovo parametro `opts`

```js
function buildDocumentModel(onlyApproved=false, { disciplineFilter=null, ...opts }={})
```

- Se `disciplineFilter` è un array di nomi, itera solo quelle
- Se è `null`, iterazione standard (DISCIPLINE)
- `opts` passato per estendibilità futura

#### B) modelToMarkdown() — nuovi flag

```js
function modelToMarkdown(model, onlyApproved, opts={})
```

Flag:

- `introNote` (default: true se filter attivo): "Documento di lavoro — da validare"
- `includeGeneraliRef` (default: true se filter attivo): riferimenti sezioni generali
- `includeDecisionSummary` (default: true se filter attivo): sintesi decisioni
- `includeGapMarkers` (default: true se filter attivo): gap 2025 espliciti
- `includeDisclaimer` (default: true se filter attivo): avvertenza finale

Comportamento legacy: nessun flag → output identico.

#### C) exportMarkdown() — nuovo parametro `disciplineFilter`

```js
function exportMarkdown(onlyApproved=false, disciplineFilter=null)
```

Propaga il filtro a `buildDocumentModel()` e attiva i flag strutturati.

#### D) UI — Pulsante "Esporta Markdown (Tecnologia)"

Inserito nella barra del titolo della disciplina (accanto al nome), visibile solo quando la disciplina selezionata è Tecnologia. Chiama `exportMarkdown(true, "Tecnologia")`.

Posizione esatta: dopo il titolo disciplina, prima dei bottoni di azione (approva/respingi globali).

### Criteri di accettazione

1. `exportMarkdown(true, "Tecnologia")` produce file `.md` con intestazione, nota, riferimenti generali, sintesi, confronto, gap, avvertenza
2. `exportMarkdown(undefined, "Tecnologia")` (solo confronto) produce output con gap e sintesi ma senza filtro "solo approvati"
3. `exportMarkdown(true)` senza filtro → output identico al precedente
4. `exportMarkdown(false)` senza filtro → output identico al precedente
5. Pulsante "📝 Esporta Markdown (Tecnologia)" visibile quando Tecnologia è selezionata
6. Pulsante non visibile per altre discipline
7. Nessuna modifica a exportWord, exportPDF, copyForWord
8. Nessuna modifica a sw.js, _headers, manifest
9. Nessuna nuova chiave localStorage
10. Approve/reject/edit invariati
11. 14 discipline con dati invariati

### Smoke test richiesto

```
[ ] exportMarkdown(true, "Tecnologia") → file .md scaricato
[ ] File inizia con "# Curricolo Verticale di Istituto — Export di lavoro"
[ ] File contiene "📄 Documento di lavoro — da validare"
[ ] File elenca tutte 8 sezioni generali
[ ] File contiene conteggi corretti (invariati/modificati/nuovi/approvati/rifiutati/da decidere)
[ ] File elenca item per ordine (Infanzia, Primaria, Secondaria)
[ ] File separa traguardi e obiettivi
[ ] Per ogni item: stato, decisione, confronto 2012↔2025
[ ] Gap 2025 marcati ("🧩 Gap 2025")
[ ] Avvertenza finale presente
[ ] exportMarkdown(true) → output identico a master (stessa struttura, stessi dati)
[ ] Pulsante "📝 Esporta Markdown (Tecnologia)" visibile in tab Revisione con Tecnologia selezionata
[ ] Pulsante non visibile se altra disciplina selezionata
[ ] Approve/reject/edit funzionanti dopo la modifica
[ ] Tab Curricolo definitivo preservato
[ ] Tab Sezioni generali preservato
[ ] Tab Riferimenti normativi preservato
[ ] PDF cache-safe ancora linkato
```

## Rischi residui

1. **Il Markdown generato potrebbe essere copiato e presentato come documento definitivo** — mitigato dalla nota "Documento di lavoro — da validare" e dall'avvertenza finale esplicita
2. **Il pulsante specifico per Tecnologia crea un precedente per le altre discipline** — mitigato: il meccanismo è già predisposto per filtro, si estenderà in slice future
3. **Utenti potrebbero confondere export "singola disciplina" con "tutte le discipline"** — mitigato: il pulsante è posizionato NEL contesto della disciplina, NON nella toolbar di export generale
4. **Rischio di modifica accidentale del comportamento legacy** — mitigato: test esplicito che `exportMarkdown(true)` senza filtro produca output identico

## Relazione con altre slice

- **CML-007R** (Post-Consolidation Smoke): ha identificato Export/Readiness come prossimo asse
- **CML-006R** (Visual Lightening): interfaccia più pulita per accogliere nuovi elementi UI
- **CML-005R** (Gap 2025): i gap markers nell'export Markdown riutilizzano la logica concettuale introdotta per la UI

## Conferme

- [x] Nessuna modifica al runtime (questa slice è solo audit/selezione)
- [x] Nessun deploy eseguito
- [x] Nessuna modifica a index.html, dati discipline, workflow, PDF, sw.js, _headers
- [x] Nessun backend/API/auth/Netlify Forms introdotto
- [x] Nessuna dipendenza esterna aggiunta
- [x] Documento di lavoro != documento deliberativo — esplicitato nell'output
- [x] La spec è fonte del presente SELECT
