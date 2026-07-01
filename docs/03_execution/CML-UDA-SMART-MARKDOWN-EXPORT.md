# CML-UDA-SMART-MARKDOWN-EXPORT

## Obiettivo
Implementare il primo export Markdown locale e controllato delle bozze UDA smart presenti nella libreria locale, senza alterare schema `.cml`, export/import istituzionali o dati curricolari normalizzati.

## Stato iniziale
- Branch: `main`
- HEAD iniziale: `ebf8994c1ec4c28f2a45f3dddcc7c9231d7c42eb`
- Commit HEAD: `ebf8994 runtime: generate UDA smart draft from annual planning`
- Stato iniziale: `main...origin/main`

## Perimetro autorizzato
- Runtime: `_published_snapshot/netlify-current/index.html`
- Documentazione: questo file, report dedicato, `docs/REPO-MOVELOG.md`
- Nessuna modifica a `content/curriculum/`, `tools/`, `assets/`, `manifest.json`, `service-worker.js`, `.env`, `_dummy_path/`, `antigravity.config.json`, `test-results/`, `tools/smoke-hash-nav.mjs`

## Implementazione
Nella sezione `Libreria UDA smart locale` e stata aggiunta un'area dedicata all'export Markdown:
- anteprima Markdown della bozza selezionata;
- azioni per ogni bozza in elenco:
  - `Anteprima Markdown`
  - `Copia Markdown`
  - `Scarica Markdown`

L'export:
- legge solo da `cml_uda_smart_library_v1`;
- non modifica la bozza salvata durante preview/copia/download;
- non altera `cml_annual_planning_draft_v1`;
- non introduce nuove chiavi localStorage.

## Funzioni runtime introdotte
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
- `renderUdaSmartLibrary` (azioni Markdown per ogni bozza)

## Formato Markdown generato (minimo)
Il file `.md` include:
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

Regola campi vuoti:
- fallback esplicito `Da completare`.

## Download Markdown
- Download locale via Blob/browser (`downloadMarkdownString` gia esistente nel runtime).
- Nome file prudente: `uda-smart-<disciplina>-<timestamp>.md`.
- Filename sanitizzato.
- Nessuna trasmissione online.

## Copia Markdown
- Usa `navigator.clipboard.writeText` quando disponibile.
- Fallback con copia via textarea/execCommand.
- Messaggio stato esplicito in caso di successo o fallback manuale.

## Privacy e limiti
- Nessun dato personale studente richiesto.
- Nessun campo per voti o osservazioni individuali.
- Privacy notice della libreria mantenuto visibile.
- Output Markdown dichiarato come bozza professionale da validare.

## Esclusioni rispettate
Non implementati in questa slice:
- export Word/DOCX;
- export PDF;
- integrazione `.cml`;
- integrazione Drive/sync online;
- filtri avanzati libreria;
- editor avanzato UDA;
- rubriche individuali o gestione studenti.

## Push
Non eseguito.

## Verdetto atteso
`CML_UDA_SMART_MARKDOWN_EXPORT_READY_LOCAL_NOT_PUSHED`
