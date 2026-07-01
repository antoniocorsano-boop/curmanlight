# CML-UDA-SMART-LIBRARY-FILTERS

## Obiettivo
Implementare filtri locali e ordinamento nella Libreria UDA smart locale.

## File modificati
- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-UDA-SMART-LIBRARY-FILTERS.md`
- `report/CML-UDA-SMART-LIBRARY-FILTERS.md`
- `docs/REPO-MOVELOG.md`

## Funzioni introdotte
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
- `renderUdaSmartLibrary`

## Criteri di filtro
- disciplina (uguale)
- ordine (uguale)
- classe/fascia (uguale)
- periodo (uguale)
- stato (uguale)
- testo libero (contains case-insensitive) su titolo/note/obiettivo/attivita

## Criteri di ordinamento
- piu recenti
- meno recenti
- titolo A-Z
- disciplina A-Z

## Relazione con `cml_uda_smart_library_v1`
- Filtri e ordinamento agiscono solo sulla visualizzazione.
- La libreria resta array JSON.
- Le bozze non vengono modificate durante filtro/ordinamento.

## Conferma su `cml_annual_planning_draft_v1`
- Non alterata.

## Limiti privacy
- Nessun filtro o campo relativo a studenti.
- Nessun uso di voti, giudizi o osservazioni individuali.
- Privacy notice della libreria mantenuto visibile.

## Esclusioni della slice
- Nessun editor avanzato UDA.
- Nessuna modifica massiva.
- Nessuna persistenza filtri in localStorage.
- Nessun export Word/PDF aggiuntivo.
- Nessuna integrazione `.cml`/Drive/sync.
- Nessun backend/API/dipendenze.

## Controlli eseguiti
- Git pre/post
- `git diff --name-only`
- `git diff --check`
- `git diff --cached --check`
- `node --check`
- secret scan
- validator curriculum
- shape test runtime

## Smoke test
- apertura `didattica_programmazione`
- libreria vuota: messaggio chiaro
- almeno 2 bozze con metadati diversi
- filtri disciplina/ordine/classe/periodo/stato OK
- ricerca testo libero OK su titolo/note/obiettivo/attivita
- ordinamenti OK (recenti/meno recenti/titolo/disciplina)
- pulizia filtri ripristina elenco completo
- conteggio risultati coerente
- nessun risultato con messaggio chiaro
- anteprima/copia/download Markdown OK con filtri attivi
- eliminazione/svuotamento OK con filtri attivi
- `cml_annual_planning_draft_v1` non alterata
- `cml_uda_smart_library_v1` resta array JSON
- routing hash/breadcrumb/menu mobile coerenti
- export/import e schema `.cml` invariati

## Regressioni escluse
- Nessuna alterazione export/import istituzionali.
- Nessuna alterazione schema `.cml`.
- Nessun push eseguito.

## Verdetto
`CML_UDA_SMART_LIBRARY_FILTERS_READY_LOCAL_NOT_PUSHED`
