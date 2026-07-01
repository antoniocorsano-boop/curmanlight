# CML-UDA-SMART-DRAFT-GENERATOR

## Obiettivo
Aggiungere il primo generatore controllato di bozza UDA smart da programmazione annuale locale, senza alterare export/import o schema `.cml`.

## File modificati
- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-UDA-SMART-DRAFT-GENERATOR.md`
- `report/CML-UDA-SMART-DRAFT-GENERATOR.md`
- `docs/REPO-MOVELOG.md`

## Funzioni introdotte/aggiornate
- `generateUdaSmartDraftFromAnnualPlanning`
- `buildGeneratedUdaSmartDraft`
- `getAnnualUnitsByIds`
- `uniqueStrings`
- `summarizeUdaSmartDraft`
- `setGeneratedUdaSmartPreview`
- `normalizeUdaSmartState`
- aggiornate `collectUdaSmartDraft`, `saveUdaSmartDraft`, `renderUdaSmartLibrary`, `clearUdaSmartLibrary`

## Relazione tra chiavi locali
- Sorgente: `cml_annual_planning_draft_v1` (solo lettura)
- Destinazione: `cml_uda_smart_library_v1` (append bozza in testa)
- Invariante: la chiave annuale non viene riscritta dal generatore

## Schema dati generato
La bozza UDA smart generata include:
- `id`, `tipo`, `titolo`, `disciplina`, `ordine`, `classe`, `annoScolastico`, `periodo`
- `nuclei`, `unitaCollegate`, `evidenzeSelezionate`
- `obiettivoApprendimento`, `attivitaSintesi`, `criteriValutazione`, `durataOre`
- `stato` (default `bozza`)
- `autore`, `timestamp`
- `fonteCurricolo`, `fonteProgrammazioneAnnuale`
- `noteDocente`, `privacyNotice`, `esportabile`

## Limiti privacy
- UI con avviso privacy sempre visibile.
- Nessuna richiesta di dati personali studente.
- Nessun campo per voti o osservazioni individuali.
- Bozza locale da validare professionalmente.

## Esclusioni della slice
- Nessun export UDA smart dedicato.
- Nessun download markdown dedicato libreria UDA.
- Nessuna integrazione `.cml`.
- Nessuna integrazione Drive/online.
- Nessun backend/API/endpoint.
- Nessuna modifica a dati curriculum normalizzati.

## Controlli eseguiti
- Git pre/post (`git status --short --branch`)
- `git diff --name-only`
- `git diff --check`
- `git diff --cached --check` (pre-commit)
- controllo sintassi JavaScript (`node --check` su script estratto)
- secret scan sulle righe aggiunte
- validator curriculum
- shape test runtime

## Smoke test
- `setTab('didattica_programmazione')` resta valido.
- Assenza bozza annuale: messaggio chiaro in libreria UDA smart.
- Presenza bozza annuale: generazione UDA smart e salvataggio locale.
- Libreria aggiornata con nuova bozza.
- Eliminazione singola e svuotamento libreria: invariati.
- `cml_annual_planning_draft_v1`: non alterata dal generatore.
- `cml_uda_smart_library_v1`: array JSON mantenuto.
- Nessuna regressione per `didattica`, `didattica_uda`, `curricolo`, `lavoro`, `riepilogo` (controllo statico).
- Routing hash `didattica_programmazione`, breadcrumb e menu mobile: invariati (controllo statico).

## Regressioni escluse
- Export/import esistenti: invariati.
- Schema `.cml`: invariato.
- Nessun push eseguito.

## Verdetto
`CML_UDA_SMART_DRAFT_GENERATOR_READY_LOCAL_NOT_PUSHED`
