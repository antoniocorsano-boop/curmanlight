# CML-ANNUAL-PLANNING-VIEW-LEVELS-ORDS

## Obiettivo
Implementare il primo incremento runtime della vista Programmazione annuale/UDA come sottovista iniziale read-only dentro Competenze e progettazione.

## Stato iniziale
- Branch: `main`
- HEAD iniziale: `479f9a3fe500a9b09edd63a23ef2a94294bb8c91`
- Slice precedente: `CML_ANNUAL_PLANNING_UDA_SPECIFICATION_RESEARCH_PUSHED_REMOTE`
- Working tree tracked: pulito prima delle modifiche
- Untracked esclusi/non toccati: `.env`, `antigravity.config.json`, `test-results/`, `tools/smoke-hash-nav.mjs`

## RED smoke statico
Prima delle modifiche:
- `didattica_programmazione`: assente in `_published_snapshot/netlify-current/index.html`
- `setTab('didattica_programmazione')`: non supportato

## Perimetro
- Tipo slice: runtime increment controllato
- Runtime modificato: si, solo `_published_snapshot/netlify-current/index.html`
- Dati curriculum: non modificati
- Tools: non modificati
- Asset/manifest/service-worker: non modificati
- Backend/API/endpoint/dipendenze: non introdotti
- Export/import `.cml`: invariati
- Storage: nessun nuovo `localStorage` o `sessionStorage`
- Push: non eseguito

## Modifiche runtime
- Aggiunto terzo subtab Didattica: `Programmazione annuale`.
- Aggiunta sezione `didattica-programmazione-section` separata da Evidenze e UDA.
- Aggiunto renderer `renderProgrammazioneAnnuale()` derivato da `getDisciplineEvidenceData()`.
- Aggiornati `setTab()`, `parentMap`, breadcrumb, mobile menu e refresh disciplina.
- Home card Didattica aggiornata con link alla nuova vista.

## Comportamento della vista
La vista mostra:
- disciplina selezionata;
- numero di unita derivate;
- nuclei/ambiti disponibili;
- 0 dati salvati, per chiarire la natura read-only;
- tre schede per Infanzia, Primaria e Secondaria;
- copertura classi/fasce e fuochi curricolari derivati;
- livelli di maturita 1-5 definiti dalla specification research.

## Non-obiettivi
- Nessun editor di programmazione annuale.
- Nessuna UDA reale nuova.
- Nessuna persistenza.
- Nessun dato curricolare nuovo.
- Nessuna modifica allo schema `.cml`.
- Nessun deploy e nessun push.

## Verifiche richieste
- `git status --short --branch`
- `git diff --name-only`
- `git diff --check`
- secret scan sulle righe aggiunte
- validator curriculum
- shape test runtime
- smoke statico nuova vista
- smoke non regressivo dei tab Didattica esistenti
- verifica export/import e `.cml` invariati

## Verdetto atteso
`CML_ANNUAL_PLANNING_VIEW_LEVELS_ORDS_READY_LOCAL_NOT_PUSHED`