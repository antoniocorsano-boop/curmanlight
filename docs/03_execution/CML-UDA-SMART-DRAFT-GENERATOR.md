# CML-UDA-SMART-DRAFT-GENERATOR

## Obiettivo
Implementare il primo generatore controllato di bozza UDA smart nella vista `didattica_programmazione`, usando solo dati locali gia disponibili:
- bozza programmazione annuale in `cml_annual_planning_draft_v1`;
- unita curricolari gia presenti nel runtime.

## Stato iniziale
- Branch: `main`
- HEAD iniziale: `a03b77eeee45a7832e6b18fe0ea6a5b924c73423`
- Commit HEAD: `a03b77e runtime: scaffold UDA smart library`
- Stato: `main...origin/main`

## Perimetro autorizzato
- Runtime: solo `_published_snapshot/netlify-current/index.html`
- Documentazione: questo file, report dedicato, `docs/REPO-MOVELOG.md`
- Nessuna modifica a `content/curriculum/`, `tools/`, `assets/`, `manifest.json`, `service-worker.js`, `.env`, `_dummy_path/`, `antigravity.config.json`, `test-results/`, `tools/smoke-hash-nav.mjs`

## Implementazione
Nella sezione `Libreria UDA smart locale` sono stati aggiunti:
- pulsante `Genera UDA da programmazione annuale`;
- messaggi espliciti quando manca la bozza annuale o quando non ci sono unita selezionate;
- conferma positiva a generazione e salvataggio riusciti;
- anteprima sintetica della bozza generata;
- mantenimento dell'avviso privacy sempre visibile.

Funzioni runtime introdotte/aggiornate:
- `generateUdaSmartDraftFromAnnualPlanning`
- `buildGeneratedUdaSmartDraft`
- `getAnnualUnitsByIds`
- `uniqueStrings`
- `summarizeUdaSmartDraft`
- `setGeneratedUdaSmartPreview`
- `normalizeUdaSmartState`
- aggiornate `collectUdaSmartDraft`, `saveUdaSmartDraft`, `renderUdaSmartLibrary`, `clearUdaSmartLibrary`

## Relazione tra chiavi locali
- Lettura: `cml_annual_planning_draft_v1`
- Scrittura: `cml_uda_smart_library_v1`
- Il generatore non modifica la chiave annuale: la usa solo in lettura.
- La libreria UDA resta un array JSON e mantiene compatibilita con bozze gia salvate.

## Schema bozza UDA smart generata
La bozza salvata usa il contratto minimo previsto:
- `id`
- `tipo`
- `titolo`
- `disciplina`
- `ordine`
- `classe`
- `annoScolastico`
- `periodo`
- `nuclei`
- `unitaCollegate`
- `evidenzeSelezionate`
- `obiettivoApprendimento`
- `attivitaSintesi`
- `criteriValutazione`
- `durataOre`
- `stato` (default per generazione automatica: `bozza`)
- `autore`
- `timestamp`
- `fonteCurricolo`
- `fonteProgrammazioneAnnuale`
- `noteDocente`
- `privacyNotice`
- `esportabile`

Stati ammessi gestiti:
- `bozza`
- `in_revisione`
- `pronta_per_confronto`
- `validata`
- `archiviato`

## Regole di generazione prudente
- Se i dati curricolari esistono, vengono riusati (nuclei, obiettivi, evidenze, criteri).
- Se i dati non bastano, viene inserito testo di lavoro esplicito da completare.
- Non vengono inventati obiettivi come ufficiali.
- Viene sempre indicata la necessita di validazione professionale.
- Nessun dato personale di studenti.

## Esclusioni esplicite rispettate
Non implementati in questa slice:
- export UDA smart dedicato;
- download Markdown UDA smart per libreria;
- modifica avanzata delle UDA;
- filtri libreria;
- integrazione `.cml`;
- integrazione Drive;
- sincronizzazione online;
- gestione studenti e rubriche individuali.

## Compatibilita e non regressione
- Export/import esistenti invariati.
- Schema `.cml` invariato.
- Dati curricolari normalizzati invariati.
- Nessun backend/API/endpoint/credenziali/dipendenze.

## Push
Non eseguito.

## Verdetto atteso
`CML_UDA_SMART_DRAFT_GENERATOR_READY_LOCAL_NOT_PUSHED`
