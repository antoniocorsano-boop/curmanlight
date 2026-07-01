# CML-UDA-SMART-LIBRARY-FILTERS

## Obiettivo
Aggiungere filtri locali e ordinamento semplice alla sezione `Libreria UDA smart locale` della vista `didattica_programmazione`, agendo solo sulla visualizzazione.

## Stato iniziale
- Branch: `main`
- HEAD iniziale: `34b7e8099039635f3e3c960f46a8d0cf8bcc8a30`
- Commit HEAD: `34b7e80 runtime: export UDA smart drafts to markdown`
- Stato iniziale: `main...origin/main`

## Perimetro autorizzato
- Runtime: `_published_snapshot/netlify-current/index.html`
- Documentazione: questo file, report dedicato, `docs/REPO-MOVELOG.md`
- Nessuna modifica a file esclusi (`content/curriculum/`, `tools/`, `assets/`, `manifest.json`, `service-worker.js`, `.env`, `_dummy_path/`, `antigravity.config.json`, `test-results/`, `tools/smoke-hash-nav.mjs`)

## Implementazione
Aggiunto pannello filtri nella libreria UDA smart con:
- filtro disciplina;
- filtro ordine;
- filtro classe/fascia;
- filtro periodo;
- filtro stato;
- ricerca testo libero su titolo/note/obiettivo/attivita;
- ordinamento:
  - piu recenti;
  - meno recenti;
  - titolo A-Z;
  - disciplina A-Z.

Azioni UI aggiunte:
- `Applica filtri`
- `Pulisci filtri`
- conteggio risultati (`X UDA trovate su Y`)
- messaggio chiaro per nessun risultato con filtri attivi

## Funzioni runtime introdotte/aggiornate
Introdotte:
- `setUdaSmartLibraryFiltersToUi`
- `getUdaSmartLibraryFiltersFromUi`
- `compareCaseInsensitive`
- `normalizeSearchText`
- `ensureSelectHasValue`
- `updateUdaSmartFilterSelect`
- `populateUdaSmartLibraryFilterOptions`
- `matchUdaSmartDraftFilters`
- `sortUdaSmartDrafts`
- `setUdaSmartLibraryResultsCount`
- `applyUdaSmartLibraryFilters`
- `clearUdaSmartLibraryFilters`
- `getUdaSmartDraftTimestamp`

Aggiornata:
- `renderUdaSmartLibrary` (filtraggio, ordinamento, conteggio, messaggio no result)

## Criteri filtro
Filtraggio applicato per uguaglianza su:
- disciplina
- ordine
- classe/fascia
- periodo
- stato

Ricerca testo libero applicata in contains case-insensitive su:
- titolo
- noteDocente
- obiettivoApprendimento
- attivitaSintesi

## Criteri ordinamento
- `recent_desc` (piu recenti)
- `recent_asc` (meno recenti)
- `title_asc` (titolo A-Z)
- `disc_asc` (disciplina A-Z, poi titolo)

## Relazione con storage
- Libreria UDA letta da `cml_uda_smart_library_v1`.
- Nessuna modifica ai contenuti delle bozze per filtro/ordinamento.
- `cml_annual_planning_draft_v1` non alterata.
- Nessuna nuova chiave localStorage introdotta (filtri non persistiti).

## Privacy
- Nessun campo filtro su studenti.
- Nessun filtro per nomi, voti, giudizi o osservazioni individuali.
- Privacy notice della libreria resta visibile.

## Esclusioni rispettate
Non implementati:
- editor avanzato UDA;
- modifica massiva;
- tag persistenti;
- export Word/PDF;
- integrazione `.cml`;
- integrazione Drive/sync;
- rubriche individuali/gestione studenti.

## Push
Non eseguito.

## Verdetto atteso
`CML_UDA_SMART_LIBRARY_FILTERS_READY_LOCAL_NOT_PUSHED`
