# CML-ANNUAL-PLANNING-EDITABLE-PROGRAMMAZIONE

## Sintesi
La slice aggiunge una bozza editabile locale alla vista Programmazione annuale. Il quadro read-only precedente resta visibile; la nuova sezione consente di comporre una programmazione annuale minima a partire da disciplina, ordine, classe/fascia e unita curricolari gia presenti nel runtime.

## File modificati
- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-ANNUAL-PLANNING-EDITABLE-PROGRAMMAZIONE.md`
- `report/CML-ANNUAL-PLANNING-EDITABLE-PROGRAMMAZIONE.md`
- `docs/REPO-MOVELOG.md`

## Chiave locale
- `cml_annual_planning_draft_v1`

La chiave salva una sola bozza locale sul dispositivo. La cancellazione della bozza rimuove la chiave da `localStorage`.

## Privacy
La UI avvisa di non inserire dati personali di studenti. I campi sono limitati a descrittori di programmazione: disciplina, ordine, classe/fascia, anno scolastico, unita curricolari, periodo, stato e note generiche.

## Controlli da eseguire
- Git status pre/post
- `git diff --check`
- JS syntax check
- secret scan
- validator curriculum
- shape test runtime
- smoke statici della nuova sezione e delle viste esistenti

## Regressioni escluse
- Export/import esistenti non alterati.
- Schema `.cml` non alterato.
- Dati curricolari normalizzati non modificati.
- Nessun backend/API/endpoint/credenziale/dipendenza introdotta.
- Nessun dato studente richiesto.

## Push
Non eseguito.

## Verdetto
`CML_ANNUAL_PLANNING_EDITABLE_PROGRAMMAZIONE_READY_LOCAL_NOT_PUSHED`
