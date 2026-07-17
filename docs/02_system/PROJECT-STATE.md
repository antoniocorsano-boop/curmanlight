# Project State

## Snapshot

- Last completed local slice: CML-536 - Guided Teacher Pilot Step Flow
- Current `main`: `9a6ecacf759b68e5ef6035f5a184fd4f04b0a533`
- Active slice: nessuna (CML-536 step flow pronto localmente)
- React application (`curman-react/`): baseline evolutiva principale
- Runtime storico: stabile, mantenuto come riferimento e fallback; non esteso per default
- Canonical curriculum data: invariati; validazione umana obbligatoria
- Current movelog: `docs/REPO-MOVELOG-v2.md`
- Next strategic action: esecuzione pilot o CML-537 - Guided Teacher Pilot Evidence Intake


## CML-527 - SW Install Resilience Post-Publish Closure

- **Tipo**: docs-only / post-publish closure
- **Commit verificato**: `3ce03b04489e618d70ad38ca13ef18ac3b5ed738`
- **Run Pages**: `29558661911`
- **Esito Pages**: `completed / success`
- **Verifica live**: positiva su `https://antoniocorsano-boop.github.io/curmanlight/`
- **Runtime modificato in CML-527**: no
- **Dati curricolari modificati**: no
- **Movelog corrente**: `docs/REPO-MOVELOG-v2.md`
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato
- **Verdetto**: `CML_SW_INSTALL_RESILIENCE_PUSHED_PAGES_DEPLOYED_AND_LIVE_VERIFIED`

### Prossima sequenza consigliata

1. CML-528 - Service Worker App Shell Contract Cleanup.
2. CML-529 - Fetch Fallback Always-Response Microfix.
3. CML-530 - Offline Test and Cache Update.


## CML-528 - Service Worker App Shell Contract Audit

- **Tipo**: docs-only / service worker audit
- **Commit base**: `3ce03b04489e618d70ad38ca13ef18ac3b5ed738`
- **Runtime modificato**: no
- **Dati curricolari modificati**: no
- **Esito APP_SHELL**: 9/9 risorse presenti nello snapshot pubblicato e 9/9 HTTP 200 su Pages live
- **Rischio principale rilevato**: due fallback `fetch` possono risolversi a `undefined` se rete e `./index.html` in cache falliscono entrambi
- **URL motto canonico UI**: `/motto-non-multa-sed-multum/`; `motto-non-multa-sed-multum.html` resta presente ma non canonico nella UI corrente
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato
- **Verdetto**: `CML_528_SERVICE_WORKER_APP_SHELL_CONTRACT_AUDIT_READY_LOCAL_NOT_PUSHED`

### Prossima sequenza consigliata aggiornata

1. CML-529 - Fetch Fallback Always-Response Microfix.
2. CML-530 - Offline Test and Cache Update.

## CML-532 - Offline Service Worker Regression Check

- **Tipo**: tooling / regression check
- **Base locale**: `39ef8d915996b40162b6cac275781ede8e5b587b`
- **Runtime modificato in CML-532**: no
- **Controllo aggiunto**: `tools/check-service-worker-offline-regression.mjs`
- **Copertura**: APP_SHELL minima, motto canonico, risorse vietate assenti, fallback 503/504, install con asset mancanti, `respondWith()` sempre `Response`, sync dei due `sw.js`
- **Esito**: PASS
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato
- **Verdetto**: `CML_532_OFFLINE_SERVICE_WORKER_REGRESSION_CHECK_READY_LOCAL_NOT_PUSHED`

### Prossima sequenza consigliata aggiornata

1. Commit runtime CML-531 con soli `sw.js` e `_published_snapshot/netlify-current/sw.js`.
2. Commit test/docs CML-532.
3. Push controllato su `main`, Pages verification, poi rientro roadmap React.

## CML-533 - React Product Roadmap Re-entry Audit

- **Tipo**: docs-only / React roadmap decision audit
- **Base locale**: `9a6ecacf759b68e5ef6035f5a184fd4f04b0a533`
- **Runtime modificato**: no
- **React modificato**: no
- **Dati curricolari modificati**: no
- **Decisione**: prossimo incremento consigliato = pilot docenti guidato sulla baseline React
- **Candidato successivo**: `CML-534 - Guided Teacher Pilot Protocol for React Baseline`
- **Motivo**: riduce rischio pilot, produce evidenze reali, riusa CML-525O/P/Q e CML-526, evita duplicazione di capacita gia presenti
- **Gate**: mobile/accessibilita e flusso ruoli da verificare come P0/P1 durante scenari reali, non come grande refactor preventivo
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato
- **Verdetto**: `CML_533_REACT_PRODUCT_ROADMAP_REENTRY_AUDIT_READY_LOCAL_NOT_PUSHED`

### Prossima sequenza consigliata aggiornata

1. CML-534 - Guided Teacher Pilot Protocol for React Baseline.
2. Eventuale microfix mobile/accessibilita solo se emerge blocco P0/P1.
3. Eventuale orientamento flusso ruoli solo se il pilot mostra perdita o ambiguita reale.

## CML-534 - Guided Teacher Pilot Protocol for React Baseline

- **Tipo**: docs-only / guided teacher pilot protocol
- **Base locale**: `9a6ecacf759b68e5ef6035f5a184fd4f04b0a533`
- **Runtime modificato**: no
- **React modificato**: no
- **Dati curricolari modificati**: no
- **Decisione**: protocollo operativo breve per 3-5 docenti sulla baseline React
- **Copertura**: orientamento, consultazione, proposta, salvataggio, export, passaggio Docente -> Dipartimento -> Referente, feedback guidato
- **Vincoli**: nessun dato personale reale, nessuna modifica automatica al curricolo canonico, evidenze osservabili separate da opinioni
- **Gate**: stop esplicito per blocchi P0 mobile/accessibilita, export, salvataggio, canonico o privacy; P1 ripetuto candidato a micro-slice
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato
- **Verdetto**: `CML_534_GUIDED_TEACHER_PILOT_PROTOCOL_READY_LOCAL_NOT_PUSHED`

### Prossima sequenza consigliata aggiornata

1. CML-535 - Guided Teacher Pilot Evidence Intake.
2. Eventuale microfix mobile/accessibilita solo se emerge blocco P0/P1.
3. Eventuale orientamento flusso ruoli solo se il pilot mostra perdita o ambiguita reale.

## CML-535 - Guided Teacher Pilot Runtime Entry Point

- **Tipo**: React preview / runtime entry point
- **Branch**: `feat/cml-535-guided-teacher-pilot-entry`
- **Base locale**: `c2fcc3fe87fbd83ef0ceab8d88d9d1271ec78f97`
- **Runtime storico modificato**: no
- **React modificato**: si, ingresso Home e vista `pilot-guidato-docenti`
- **Dati curricolari modificati**: no
- **Schema `.cml`**: invariato
- **Workflow Pages**: non modificato
- **Decisione**: esporre un ingresso provvisorio e non invasivo al pilot docenti guidato
- **Copertura**: schermata iniziale, regole essenziali, durata, uscita sicura, primo compito di orientamento nella Home
- **Limiti intenzionali**: nessun motore multi-step, nessuna raccolta persistente, nessun export, nessun backend, nessuna telemetria
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato
- **Verdetto**: `CML_535_GUIDED_TEACHER_PILOT_RUNTIME_ENTRY_READY_LOCAL_NOT_PUSHED`

### Prossima sequenza consigliata aggiornata

1. Eseguire il pilot con 3-5 docenti usando il punto di ingresso CML-535.
2. Preparare CML-536 per intake e sintesi evidenze reali, senza raccolta automatica non richiesta.
3. Aprire microfix mobile/accessibilita o flusso ruoli solo se emergono P0/P1.

## CML-536 - Guided Teacher Pilot Step Flow

- **Tipo**: React preview / runtime step flow
- **Branch**: `feat/cml-536-guided-teacher-pilot-step-flow`
- **Base locale**: `9546beeb459bb65e06e6ab1e7e5f904e0e7ce21c`
- **Runtime storico modificato**: no
- **React modificato**: si, flusso multi-step nella vista `pilot-guidato-docenti`
- **Dati curricolari modificati**: no
- **Schema `.cml`**: invariato
- **Workflow Pages**: non modificato
- **Decisione**: estendere il punto di ingresso CML-535 in quattro passaggi guidati non persistenti
- **Copertura**: Home, consultazione disciplina, proposta docente, passaggio di validazione
- **Limiti intenzionali**: nessuna raccolta osservazioni, nessun localStorage, nessun export, nessun backend, nessuna telemetria
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato
- **Verdetto**: `CML_536_GUIDED_TEACHER_PILOT_STEP_FLOW_READY_LOCAL_NOT_PUSHED`

### Prossima sequenza consigliata aggiornata

1. Eseguire il pilot con 3-5 docenti usando il flusso CML-536.
2. Preparare CML-537 per intake e sintesi evidenze reali.
3. Aprire microfix mobile/accessibilita o flusso ruoli solo se emergono P0/P1.

## CML-538 - Desktop Sidebar Vertical Scroll and Reachability Fix

- **Tipo**: React preview / layout microfix
- **Branch**: `fix/cml-538-sidebar-scroll-reachability`
- **Base locale**: `d96691a72fd04ece1d0b67cbd717005a93ccb780`
- **Runtime storico modificato**: no
- **React modificato**: si, layout/sidebar
- **Dati curricolari modificati**: no
- **Schema `.cml`**: invariato
- **Workflow Pages**: non modificato
- **Decisione**: rendere la sidebar scrollabile autonomamente con viewport basse
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato
- **Verdetto**: `CML_538_DESKTOP_SIDEBAR_VERTICAL_SCROLL_REACHABILITY_FIXED`
## Serie CML-518A–E (chiusa)

- CML-518A — React Baseline and Capability Perimeter — PR #139 — merge `e3c02cb`
- CML-518B — Full App Audit + React Surface Inventory — merge `a4c477c`
- CML-518C — Teacher Export Freshness Guard — PR #142 — merge `7ba8a07`
- CML-518D — Department Conflict Guard — PR #143 — merge `134148b`
- CML-518E — Referent Completeness Guard — PR #144 — merge `afd8f7d`

Le guardie dei tre ruoli impediscono export/decisioni parziali o non aggiornati; runtime storico, schema `.cml` e dati canonici invariati.

## Decisione di baseline

La baseline evolutiva principale è `curman-react/`.

Il runtime storico formato da:

- `index.html`;
- `_published_snapshot/netlify-current/index.html`;

resta disponibile come riferimento stabile e fallback. Nuove capacità strutturali devono essere sviluppate in React salvo eccezioni motivate e approvate esplicitamente.

Il passaggio definitivo alla baseline React richiede pilot umano, chiusura dei gap bloccanti, audit accessibilità/mobile e release candidate.

## Milestone completati

### Prodotto React

- Home e contesto di lavoro;
- consultazione completa del curricolo;
- creazione, validazione ed esportazione della proposta docente;
- import, coda, decisione ed esportazione dipartimentale;
- import, validazione ed esportazione del Referente;
- round-trip dei contratti `.cml`;
- programmazione annuale e UDA essenziale;
- riutilizzo guidato dei dati curricolari;
- salvataggio, duplicazione ed esportazione locale;
- archivio locale unificato;
- backup e ripristino;
- regressione browser sintetica 6 personas × 5 scenari.

### Libreria proposte docente

Completati i lotti per:

- Tecnologia: IA consapevole, economia circolare, benessere digitale, prototipazione;
- Italiano: lettura, riassunto, scrittura manuale/corsivo, grammatica;
- Educazione civica: cittadinanza digitale, sostenibilità, Costituzione, etica tecnologica.

Tutte le proposte restano esempi `teacher_proposal`, non modificano automaticamente i curricoli canonici e richiedono una decisione umana esplicita.

## Stato delle capacità

La fonte primaria è:

`docs/02_system/REACT-BASELINE-AND-CAPABILITY-PERIMETER.md`

Sintesi:

- consultazione curricolo: completa tecnicamente;
- proposta docente: completa tecnicamente, comprensione da validare;
- processo Dipartimento: completo tecnicamente, conflitti/duplicati parziali;
- processo Referente: completo tecnicamente, consolidamento istituzionale mancante;
- progettazione didattica: completa tecnicamente;
- persistenza e backup: completi tecnicamente;
- accessibilità e mobile: parziali;
- pilot umano: non ancora eseguito;
- modalità pubblica/personale/istituto: non completa e fuori dalla prima chiusura operativa.

## Roadmap corrente

1. CML-518A — baseline React e perimetro delle capacità.
2. CML-518B — inventario tecnico verificato delle superfici React.
3. CML-518C — chiusura gap Docente end-to-end.
4. CML-518D — chiusura gap Dipartimento.
5. CML-518E — chiusura gap Referente.
6. CML-519 — audit di maturità sulla baseline React.
7. CML-520 — suite contratti, recovery e casi avversariali.
8. CML-521 — percorso guidato di valutazione umana.
9. CML-522 — primo pilot reale con 3–5 docenti.
10. CML-523 — correzioni confermate dal pilot.
11. CML-524 — release candidate React.

## Gate per il pilot umano

Il pilot richiede:

- URL React stabile;
- percorso Docente → Dipartimento → Referente accessibile;
- nessun dato personale reale;
- comprensione esplicita di salvataggio, export e validazione;
- nessuna modifica automatica del curricolo canonico;
- backup e ripristino disponibili;
- nessun blocco critico desktop/mobile;
- protocollo CML-517D applicato;
- evidenze sintetiche e umane mantenute separate.

## Runtime Perimeter Reminder

Ogni eventuale intervento sul runtime storico deve trattare insieme:

- `index.html`;
- `_published_snapshot/netlify-current/index.html`.

Non modificare un solo file della coppia e non riscrivere da remoto file HTML grandi da contenuto potenzialmente troncato.

## Product Design Governance

La direzione di prodotto resta:

```text
B come ingresso docente + C come logica operativa + A come evoluzione istituzionale futura
```

Ogni intervento deve dichiarare:

- profilo utente servito;
- contesto d'uso;
- vista interessata;
- stato curricolare rappresentato;
- azione primaria;
- criterio di accettazione;
- elementi esclusi intenzionalmente.

## Pilot Validation Rule

Durante il pilot raccogliere evidenze osservabili: cosa il docente comprende, quale azione tenta, dove si blocca, quali ritorni compie e quali parole interpreta in modo ambiguo. Il gradimento generale non è sufficiente.

## Governance dei file `.cml`

I file devono mantenere:

- `schemaVersion: "1.0"`;
- tipo coerente con il ruolo;
- `counts` coerenti;
- identificativi stabili;
- decisioni non precompilate nel passaggio precedente;
- `humanValidationRequired: true`;
- nessun dato personale reale;
- nessuna approvazione automatica.

## Stato di chiusura

```text
CML_518A_REACT_BASELINE_AND_CAPABILITY_PERIMETER_IN_PROGRESS_MAIN_80F3633C
```
