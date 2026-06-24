# Report CML-120: Disciplinary Knowledge Map Read-Only View

## Riepilogo
Aggiunta vista read-only "Mappa disciplinare" nella sezione "Competenze e progettazione" di `_published_snapshot/netlify-current/index.html`. La vista mostra i dati della mappa disciplinare per le 3 discipline pilota (Tecnologia, Matematica, Italiano) normalizzate in CML-119D, rispettando il contratto `cml-disciplinary-knowledge-map-v1`.

## File Modificato
- `_published_snapshot/netlify-current/index.html`

## Dati Inlineati
- `TECNOLOGIA_MAPPA_DATI`: 6 strutture, 10 progressioni, 2 decisioni
- `MATEMATICA_MAPPA_DATI`: 5 nodi, 12 strutture, 6 progressioni, 4 decisioni
- `ITALIANO_MAPPA_DATI`: 6 nodi, 13 strutture, 12 progressioni, 4 decisioni

## Interfaccia
- Posizionamento: dentro tab "Competenze e progettazione", come `<details>` collassabile
- Selettore discipline: 3 pulsanti (Tecnologia, Matematica, Italiano)
- Contenuti renderizzati:
  - Strutture sostanziali
  - Nodi disciplinari (se presenti)
  - Progressione verticale
  - Decisioni curricolari con badge `da_validare`
- Messaggio per discipline non mappate: "Mappa disciplinare non ancora predisposta per questa disciplina."
- Avviso persistente: "Documento di lavoro — da validare."

## Microcopy
- Titolo sezione: "Mappa disciplinare"
- Descrizione: "Questa sezione mostra come una disciplina organizza saperi, nodi e progressione verticale. È una base di lavoro per il confronto dipartimentale e non sostituisce la validazione professionale."

## Caratteristiche tecniche
- Nessuna chiamata di rete (fetch)
- Nessuna persistenza
- Nessun salvataggio
- Nessuna approvazione
- Dati caricati da variabili JS inlineate
- Funzioni: `setMappaDisciplina()`, `renderMappaDisciplinare()`

## Validazioni
- `node tools/validate-cml-normalized-curriculum.mjs` — PASS (7 file, 94 unità, overallValid: true)
- `git diff --check` — pulito
- Nessuna modifica a JSON disciplinari, export/import, schema `.cml`, validatore
- Nessuna parola impropria ("approvato", "definitivo", "certificato", "conforme")

## Verdetto
```text
CML_120_DISCIPLINARY_KNOWLEDGE_MAP_READ_ONLY_VIEW_READY
```
