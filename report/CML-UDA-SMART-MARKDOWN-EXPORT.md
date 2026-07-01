# CML-UDA-SMART-MARKDOWN-EXPORT

## Obiettivo
Aggiungere export Markdown locale controllato per bozze UDA smart in libreria locale.

## File modificati
- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-UDA-SMART-MARKDOWN-EXPORT.md`
- `report/CML-UDA-SMART-MARKDOWN-EXPORT.md`
- `docs/REPO-MOVELOG.md`

## Funzioni introdotte/aggiornate
Introdotte:
- `buildUdaSmartDraftMarkdown`
- `previewUdaSmartMarkdown`
- `copyUdaSmartMarkdown`
- `downloadUdaSmartMarkdown`
- `setUdaSmartMarkdownPreview`
- `buildUdaSmartMarkdownFilename`
- `sanitizeUdaSmartFilenamePart`
- `getUdaSmartDraftById`
- `markdownFallbackValue`
- `markdownListLines`

Aggiornata:
- `renderUdaSmartLibrary`

## Formato Markdown generato
Include:
- titolo UDA;
- disciplina, ordine, classe/fascia;
- anno scolastico, periodo, stato;
- nuclei;
- unita collegate;
- evidenze selezionate;
- obiettivo di apprendimento;
- attivita in sintesi;
- criteri di valutazione;
- durata ore;
- note docente;
- fonte curricolo;
- fonte programmazione annuale;
- privacy notice;
- nota di validazione professionale.

Regola fallback:
- campi vuoti -> `Da completare`.

## Relazione con storage locale
- Sorgente lettura export: `cml_uda_smart_library_v1`.
- `cml_annual_planning_draft_v1` non viene alterata.
- Le azioni preview/copy/download non modificano automaticamente le bozze.
- `cml_uda_smart_library_v1` resta array JSON.

## Limiti privacy
- Nessuna richiesta di dati personali studenti.
- Nessun campo per voti o osservazioni individuali.
- Privacy notice della libreria resta visibile.
- Markdown generato non inserisce automaticamente dati personali.

## Esclusioni della slice
- Nessun export Word/DOCX o PDF UDA smart.
- Nessuna integrazione `.cml`.
- Nessuna integrazione Drive/sync online.
- Nessun backend/API/dipendenze.
- Nessuna modifica dati curricolari normalizzati.

## Controlli eseguiti
- Git pre/post (`git status --short --branch`)
- `git diff --name-only`
- `git diff --check`
- `git diff --cached --check` (pre-commit)
- `node --check` su script runtime estratto
- secret scan su righe aggiunte
- validator curriculum
- shape test runtime

## Smoke test
- apertura `didattica_programmazione`
- presenza `Libreria UDA smart locale`
- caso libreria vuota con messaggio chiaro
- bozza UDA disponibile in libreria
- anteprima Markdown apertura su bozza
- verifica contenuto minimo Markdown (titolo/metadati/obiettivo/attivita/criteri/privacy/validazione)
- copia Markdown: OK o fallback chiaro
- download Markdown: file `.md` locale
- eliminazione singola e svuotamento libreria invariati
- `cml_annual_planning_draft_v1` non alterata
- `cml_uda_smart_library_v1` array JSON confermato
- nessuna regressione su routing/tab/breadcrumb/menu mobile (controllo statico+smoke)

## Regressioni escluse
- Export/import esistenti invariati.
- Schema `.cml` invariato.
- Push non eseguito.

## Verdetto
`CML_UDA_SMART_MARKDOWN_EXPORT_READY_LOCAL_NOT_PUSHED`
