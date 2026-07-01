# CML-UDA-SMART-LIBRARY-RUNTIME-SCAFFOLD

## Sintesi
La slice introduce lo scaffold runtime minimo della Libreria UDA smart dentro `didattica_programmazione`. La libreria e locale, non invasiva e separata da export/import e schema `.cml`.

## File modificati
- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-UDA-SMART-LIBRARY-RUNTIME-SCAFFOLD.md`
- `report/CML-UDA-SMART-LIBRARY-RUNTIME-SCAFFOLD.md`
- `docs/REPO-MOVELOG.md`

## Chiave locale
- `cml_uda_smart_library_v1`

## Funzioni runtime introdotte
- `loadUdaSmartLibrary`
- `persistUdaSmartLibrary`
- `renderUdaSmartLibrary`
- `saveUdaSmartDraft`
- `deleteUdaSmartDraft`
- `clearUdaSmartLibrary`

## Cosa fa
- Mostra una sezione Libreria UDA smart locale.
- Permette salvataggio base di una bozza UDA manuale.
- Mostra l'elenco delle bozze locali.
- Permette eliminazione singola e cancellazione completa della libreria.

## Cosa non fa
- Non genera automaticamente UDA dalla programmazione annuale.
- Non esporta Markdown UDA smart.
- Non filtra la libreria.
- Non modifica export/import esistenti.
- Non modifica schema `.cml`.
- Non tocca dati curricolari normalizzati.

## Controlli da eseguire
- Git status pre/post
- `git diff --check`
- JS syntax check
- secret scan
- validator curriculum
- shape test runtime
- smoke statici della nuova sezione e non regressione delle viste esistenti

## Push
Non eseguito.

## Verdetto
`CML_UDA_SMART_LIBRARY_RUNTIME_SCAFFOLD_READY_LOCAL_NOT_PUSHED`
