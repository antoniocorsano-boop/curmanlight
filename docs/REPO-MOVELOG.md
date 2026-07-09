# Repo Movelog

## CML-429 — User Validation Evidence Intake Model

- Type: docs-only / modello di analisi evidenze
- Macro-program: PM-09 Validazione con utenti
- Status: PUSHED_REMOTE
- Branch: `codex/cml-429-evidence-intake-model` → `main`
- Base: `c2ac753` (CML-428 push)
- Modello per intake delle evidenze utente: fonti ammesse, unità minima di evidenza, aree, tipi di problema, severità, ricorrenza, matrice decisionale, registro interno, criteri di apertura slice.
- Files created:
  - `docs/03_execution/CML-429.md`
  - `report/CML-429_user_validation_evidence_intake_model.md`
- Files updated:
  - `docs/02_system/PROJECT-STATE.md`
  - `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
  - `docs/REPO-MOVELOG.md`
- Runtime modificato: NO
- Dati curricolari modificati: NO
- Verdetto: CML_429_USER_VALIDATION_EVIDENCE_INTAKE_MODEL_PUSHED_REMOTE

## CML-428 — User Validation Pilot Kit

- Type: docs-only
- Macro-program: PM-09 Validazione con utenti
- Status: READY_LOCAL_NOT_PUSHED
- Branch: `main`
- Base: `4eed0b4` (CML-427 push)
- Kit operativo per prova pilota con docenti non tecnici: scopo, profilo partecipanti, messaggio invito, istruzioni operative, durata, cosa osservare, formato restituzione, griglia lettura evidenze, criteri roadmap.
- Files created:
  - `docs/03_execution/CML-428.md`
  - `report/CML-428_user_validation_pilot_kit.md`
- Files updated:
  - `docs/02_system/PROJECT-STATE.md`
  - `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
  - `docs/REPO-MOVELOG.md`
- Runtime modificato: NO
- Dati curricolari modificati: NO
- Verdetto: CML_428_USER_VALIDATION_PILOT_KIT_READY_LOCAL_NOT_PUSHED

## CML-427 — User Validation Entry Live Smoke and Pilot Readiness

- Type: audit / smoke test / product validation readiness
- Macro-program: PM-09 Validazione con utenti
- Status: READY_LOCAL_NOT_PUSHED
- Branch: `main`
- Base: `f561066` (CML-400 docs closure)
- Verifica completa che card Home "Partecipa al test guidato" e modal test guidato siano utilizzabili da un docente non tecnico e non appesantiscano l'esperienza iniziale.
- Controlli eseguiti:
  - Pre-check Git: OK (HEAD == origin/main == f561066)
  - Validatori: 14/14 PASS (curriculum) + 14/14 PASS (shape test)
  - Smoke locale: tutti gli elementi card e modal confermati
  - Verifica live GitHub Pages: tutti gli elementi presenti
  - Esportazione .txt: formato verificato (intestazione, data, contesto, scenario, annotazioni)
  - Navigazione: tutte 5 voci intatte (Home, Curricolo, Progetta, Esportazioni, Guida)
  - Nessun microfix necessario
- Files created:
  - `docs/03_execution/CML-427.md`
  - `report/CML-427_user_validation_entry_live_smoke.md`
- Files updated:
  - `docs/02_system/PROJECT-STATE.md`
  - `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
  - `docs/REPO-MOVELOG.md`
- Runtime modificato: NO
- Dati curricolari modificati: NO
- Verdetto: CML_427_USER_VALIDATION_ENTRY_LIVE_SMOKE_READY_LOCAL_NOT_PUSHED

## CML-400 — User Validation Entry Runtime

- Type: runtime micro-patch
- Macro-program: PM-09 Validazione con utenti
- Status: PUSHED_AND_LIVE_VERIFIED
- Branch: `main`
- Base: `2492e7c` (CML-399)
- Home entry per test guidato docenti: card ".home-validation-entry", modal overlay con scenario, 5 compiti osservazione, campo annotazioni, export .txt. Senza backend, account, invio remoto.
- Files created:
  - `docs/03_execution/CML-400.md`
  - `report/CML-400_user_validation_entry_runtime.md`
- Files updated:
  - `index.html`
  - `_published_snapshot/netlify-current/index.html`
  - `docs/02_system/PROJECT-STATE.md`
  - `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
  - `docs/REPO-MOVELOG.md`
- Runtime modificato: SI
- Dati curricolari modificati: NO

## CML-399 — User Validation Scenario Pack

- Type: docs-only / product validation design
- Macro-program: PM-09 Validazione con utenti
- Status: PUSHED
- Branch: `main`
- Base: `be6d81e` (CML-426 docs close)
- Pacchetto di validazione utente: profilo tester, scenario narrativo, compiti non meccanici, domande di osservazione, griglia valutazione 1-5, formato raccolta annotazioni, esiti attesi roadmap PM/UX.
- Files created:
  - `docs/03_execution/CML-399.md`
  - `report/CML-399_user_validation_scenario_pack.md`
- Files updated:
  - `docs/02_system/PROJECT-STATE.md`
  - `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
  - `docs/REPO-MOVELOG.md`
