# REPO-MOVELOG v2

Registro operativo versionato delle modifiche CurManLight.

## Versione

- File: `docs/REPO-MOVELOG-v2.md`
- Versione: v2
- Data apertura: 2026-07-09
- Stato: registro corrente append-only
- Registro precedente: `docs/REPO-MOVELOG.md`

## Regola di transizione

Il file storico `docs/REPO-MOVELOG.md` resta conservato come archivio legacy e non deve essere riscritto da remoto perché supera diecimila righe e una risposta troncata può produrre cancellazioni massive.

Da CML-433M in avanti, il registro operativo corrente è `docs/REPO-MOVELOG-v2.md`.

## Regola append-only

Ogni nuova voce deve essere aggiunta in testa o in sezione dedicata senza riscrivere blocchi storici estesi.

Ogni voce deve indicare almeno:

- codice slice;
- tipo;
- stato;
- branch/commit/PR se disponibili;
- file modificati o prodotti;
- perimetro runtime;
- controlli rilevanti;
- verdetto.

---

## CML-438 — Pilot Validation Evidence Start Pack

- **Data**: 2026-07-10
- **Tipo**: docs-only / validation evidence pack
- **Stato**: branch `codex/cml-438-pilot-validation-evidence-start-pack`, non mergiata
- **Runtime**: non modificato
- **Dati curricolari**: non modificati

### Scopo

Preparare il primo pacchetto operativo per validazione pilota con docenti non tecnici, usando la Home live CML-435/436 come baseline stabile.

### File prodotti

- `docs/03_execution/CML-438.md`
- `report/CML-438_pilot_validation_evidence_start_pack.md`
- `docs/04_validation/CML-438/teacher_pilot_instructions.md`
- `docs/04_validation/CML-438/teacher_observation_grid.md`
- `docs/04_validation/CML-438/pilot_evidence_summary_template.md`

### File aggiornati

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/REPO-MOVELOG-v2.md`

### Regola metodologica

Non raccogliere gradimento generico. Raccogliere evidenze osservabili: cosa il docente capisce, cosa prova a fare, dove si blocca, quali parole o passaggi risultano ambigui.

### Verdetto

```text
CML_438_PILOT_VALIDATION_EVIDENCE_START_PACK_READY_REMOTE_BRANCH_NOT_MERGED
```

---

## CML-437 — Post CML-436 Chain State Sync

- **Data**: 2026-07-10
- **Tipo**: docs-only / post-chain state sync
- **Stato**: MERGED_REMOTE
- **PR**: #28
- **Merge commit**: `ea775da`
- **Runtime**: non modificato
- **Dati curricolari**: non modificati

### Scopo

Allineare `PROJECT-STATE`, `PRODUCT-MATURITY-PROGRESS` e `REPO-MOVELOG-v2` dopo la chiusura della catena CML-435/CML-436/CML-418/CLAUDE §10.

### Stato consolidato

```text
CML_436_PAGES_STALE_HOME_CACHE_INVALIDATION_MERGED_LIVE_CONTENT_SMOKE_PASS
CML_418_HOME_AND_MOBILE_LIVE_VISUAL_SMOKE_REPORT_PUSHED
CLAUDE_SECTION_10_MOCK_CONFORMANCE_RULE_UPDATED
```

### File modificati/prodotti

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/REPO-MOVELOG-v2.md`
- `docs/03_execution/CML-437.md`

### Regola acquisita

Dopo un mock approvato, la UI deve inibire ciò che non è conforme. Non basta aggiungere nuovi blocchi sopra quelli vecchi.

### Verdetto

```text
CML_437_POST_CML436_CHAIN_STATE_SYNC_MERGED_REMOTE
```

---

## CML-434S — Runtime Remote Safety Gate

- Tipo: docs-only / runtime safety gate / remote execution guard
- Stato: MERGED_REMOTE
- Branch: `codex/cml-434s-runtime-remote-safety-gate`
- Base: `main` dopo CML-434D
- Scopo: evitare una modifica runtime remota non sicura del runtime pair.

### Esito

CML-434 runtime non applicata da remoto.

### Motivo

Il connettore disponibile non supporta patch testuali parziali sicure sui file HTML grandi. Una riscrittura completa da contenuto potenzialmente troncato rischierebbe perdita contenuto o divergenza tra `index.html` e `_published_snapshot/netlify-current/index.html`.

### Specifica runtime confermata

```text
Home task selector + pannello contestuale leggero
```

### File prodotti

- `docs/03_execution/CML-434S.md`
- `report/CML-434_runtime_remote_safety_gate.md`

### File aggiornati

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/REPO-MOVELOG-v2.md`

### Runtime

- `index.html`: non modificato
- `_published_snapshot/netlify-current/index.html`: non modificato

### Dati curricolari

Non modificati.

### Verdetto

```text
CML_434S_RUNTIME_REMOTE_SAFETY_GATE_MERGED_REMOTE_RUNTIME_NOT_MODIFIED
```

---

## CML-434D — Bozzetti alternativi pre-runtime

- Tipo: docs-only / product design / pre-runtime mock alternatives
- Stato: MERGED_REMOTE
- Branch: `codex/cml-434d-pre-runtime-mock-alternatives`
- Base: `main` dopo CML-433M
- Scopo: produrre tre bozzetti alternativi e scegliere la direzione raccomandata prima della prima micro-slice runtime.

### Bozzetti

1. Bozzetto A — Cruscotto istituzionale.
2. Bozzetto B — Percorso guidato docente.
3. Bozzetto C — Ambiente professionale di lavoro.

### Decisione

Direzione raccomandata:

```text
B come ingresso docente + C come logica operativa + A come evoluzione istituzionale futura
```

### Prima micro-slice runtime candidata

```text
CML-434 — Home task selector + pannello contestuale leggero
```

### File prodotti

- `docs/03_execution/CML-434D.md`
- `report/CML-434D_bozzetti_alternativi_pre_runtime.md`

### File aggiornati

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/REPO-MOVELOG-v2.md`

### Runtime

- `index.html`: non modificato
- `_published_snapshot/netlify-current/index.html`: non modificato

### Dati curricolari

Non modificati.

### Verdetto

```text
CML_434D_PRE_RUNTIME_MOCK_ALTERNATIVES_MERGED_REMOTE
```

---

## CML-433M — Versioned Movelog Sync

- Tipo: docs-only / repository governance
- Stato: MERGED_REMOTE
- Branch: `codex/cml-433m-versioned-movelog-sync`
- Base: `main` dopo CML-433UP
- PR: da apertura/merge controllato remoto
- Scopo: chiudere il debito movelog senza riscrivere il file legacy molto esteso.

### Decisione

Creare un nuovo movelog versionato:

```text
`docs/REPO-MOVELOG-v2.md`
```

Il file storico resta invariato e consultabile come archivio legacy.

### File prodotti

- `docs/REPO-MOVELOG-v2.md`
- `docs/03_execution/CML-433M.md`

### File aggiornati

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`

### Runtime

- `index.html`: non modificato
- `_published_snapshot/netlify-current/index.html`: non modificato

### Dati curricolari

Non modificati.

### Verdetto

```text
CML_433M_VERSIONED_MOVELOG_SYNC_MERGED_REMOTE
```

---

## CML-433UP — User Specifications Post-Merge State Sync

- Tipo: docs-only / post-merge state sync
- Stato: MERGED_REMOTE
- PR: #20
- Merge commit: `c99dfda6caa8a28d38705c258779c4a3179ee0a4`
- Scopo: riallineare lo stato documentale dopo il merge di CML-433U.

### File prodotti

- `docs/03_execution/CML-433UP.md`

### File aggiornati

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/03_execution/CML-433U.md`

### Runtime

Non modificato.

### Dati curricolari

Non modificati.

### Verdetto

```text
CML_433UP_USER_SPECIFICATIONS_POST_MERGE_STATE_SYNC_MERGED_REMOTE
```

---

## CML-433U — Specifiche utente pre-bozzetto

- Tipo: docs-only / user specification / product design governance
- Stato: MERGED_REMOTE
- PR: #19
- Merge commit: `67e27da5326c1486f9ba6db86a8cadc4d8a51cad`
- Scopo: formalizzare le specifiche utente preliminari al bozzetto grafico.

### File prodotti

- `docs/03_execution/CML-433U.md`
- `report/CML-433U_specifiche_utente_pre_bozzetto.md`

### File aggiornati

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`

### Decisione di governance

Il bozzetto grafico deve essere valutato contro specifiche utente verificabili, non contro preferenze estetiche isolate.

### Runtime

Non modificato.

### Dati curricolari

Non modificati.

### Verdetto

```text
CML_433U_USER_SPECIFICATIONS_PRE_BOZZETTO_MERGED
```

---

## CML-433 — Teacher Task View Target Specification

- Tipo: docs-only / product design specification
- Stato: PUSHED_REMOTE
- Commit: `55c23ab98111b934d1c71ab7d0c88a519f4f753c`
- Scopo: definire la vista target task-oriented per il docente prima di nuove patch runtime.

### Output principali

- Specifica target Home task selector.
- Specifica target Curricolo vigente/proposta/stato.
- Specifica target Progetta per percorsi.
- Specifica target Esportazioni per compito.
- Specifica target Guida contestuale.
- Regola: niente micro-patch isolate prima di specifica utente/bozzetto controllato.

### Runtime

Non modificato.

### Dati curricolari

Non modificati.

### Verdetto

```text
CML_433_TEACHER_TASK_VIEW_TARGET_SPEC_PUSHED_REMOTE
```

---

## CML-432 — Teacher Task View Architecture and Mock Comparison

- Tipo: docs-only / product design audit
- Stato: PUSHED_REMOTE
- Commit noto: `4537af2`
- Scopo: analizzare le viste principali di CurManLight in relazione ai task reali del docente e confrontarle con una logica di interfaccia più professionale.

### Decisione

La progettazione deve partire dalla domanda:

```text
Il docente, in questa vista, cosa deve capire e cosa deve fare?
```

### Viste analizzate

- Home
- Curricolo
- Progetta
- Esportazioni
- Guida
- Test guidato

### Runtime

Non modificato.

### Dati curricolari

Non modificati.

### Verdetto

```text
CML_432_TEACHER_TASK_VIEW_ARCHITECTURE_AND_MOCK_COMPARISON_PUSHED_REMOTE
```

---

## CML-434 — Home Task Selector Runtime

- **Data**: 2026-07-09
- **Tipo**: runtime micro-slice
- **Stato**: merged su main via PR #24; baseline poi corretta da CML-435/CML-436
- **Runtime**: index.html + _published_snapshot/netlify-current/index.html (entrambi modificati)
- **Dati curricolari**: non modificati

### Descrizione

Sostituiti i pulsanti operativi `.home-process-hub__actions` con un selettore di 4 attività docente (Consulta, Progetta, Propone, Esporta) + pannello contestuale. Rimossa CSS morta.

### Cambiamenti

- **CSS**: rimossa `.home-process-hub__actions`, `.home-process-hub__btn`, `.home-process-hub__btn.primary`; aggiunte classi task-selector/task-context
- **HTML**: `.home-process-hub__actions` → `.home-task-selector` (4 bottoni); aggiunto `.home-task-context`
- **JS**: `HOME_TASK_CONTEXTS`, `setHomeTaskContext()`, `renderHomeTaskContext()`; chiamata in init e `setTab('home')`
- **Media query**: rimosse regole orfane per `.home-process-hub__actions`/`.home-process-hub__btn`

### Verifica

- `git diff --check`: ok
- Curriculum validator: 14/14 PASS
- Runtime shape test: 14/14 PASS
- Runtime pair allineato: 28 occorrenze `home-task` in entrambi i file

### Verdetto

```text
CML_434_HOME_TASK_SELECTOR_RUNTIME_PUSHED_BRANCH_NOT_MERGED
```

---

## CML-435 — Home Mock Conformance Visibility Gate

- **Data**: 2026-07-09
- **Tipo**: runtime micro-slice (visibility gate)
- **Stato**: mergiata su main via PR #26; poi resa live affidabile da CML-436
- **Runtime**: index.html + _published_snapshot/netlify-current/index.html (entrambi modificati)
- **Dati curricolari**: non modificati

### Descrizione

Rimossi blocchi Home non conformi al mock CML-434: seconda card "Ambiente curricolare d'Istituto", sezioni "Operazioni principali" e "Operazioni di supporto" con card duplicate. Aggiornate etichette pulsante azione pannello contestuale da "Azione: vai a ..." a testo naturale.

### Cambiamenti

- **HTML**: rimosso `.home-inline-banner`, `.home-cards` sotto "Operazioni principali" e "Operazioni di supporto"
- **JS**: etichette pulsante contesto: `btnLabels` map per task
- **CML-434**: preservato intatto (task selector, contesto)

### Blocchi rimossi

- "Ambiente curricolare d'Istituto" (card duplicata)
- "Curricolo vigente", "Progetta" (coperti da task selector)
- "Applicazione per classi", "Adeguamento IN 2025", "Processo di revisione", "Esportazioni" (coperti da task selector)

### Blocchi mantenuti

- Hub CML-401 (header, task selector, contesto, pipeline, ruoli, aree, governance)
- Test guidato, Contesto di lavoro, Curricolo applicabile, Discipline, Footer

### Verifica

- `git diff --check`: ok
- Curriculum validator: 14/14 PASS
- Runtime shape test: 14/14 PASS
- Runtime pair allineato: 27 occorrenze CML-434 markers in entrambi

### Verdetto

```text
CML_435_HOME_MOCK_CONFORMANCE_VISIBILITY_GATE_READY_FOR_MERGE_REMOTE_BRANCH
```

---

## CML-436 — Pages Stale Home Cache Invalidation and Content Smoke

- **Data**: 2026-07-10
- **Tipo**: runtime micro-fix (cache/service worker)
- **Stato**: merged/live content smoke PASS
- **Runtime**: index.html + _published_snapshot/netlify-current/index.html (entrambi modificati)
- **SW**: _published_snapshot/netlify-current/sw.js modificato; sw.js in root per dev parity
- **Dati curricolari**: non modificati

### Descrizione

CML-435 era mergiata su main ma GitHub Pages serviva Home stale a causa della cache del service worker. Bump cache version e registration URL per forzare install fresco.

### Cambiamenti

- **sw.js**: `CACHE_NAME` da `v454-cml2391` a `v455-cml436`
- **index.html (entrambi)**: SW registration URL da `./sw.js?v=20260701-cml2391` a `./sw.js?v=20260710-cml436`
- **sw.js (root)**: copiato dalla snapshot per allineamento dev locale

### Verifica live

- `curl` verso Pages URL: HTTP 200, nessun blocco duplicato, etichette naturali presenti
- Home CML-435 serve correttamente

### Verdetto

```text
CML_436_PAGES_STALE_HOME_CACHE_INVALIDATION_MERGED_LIVE_CONTENT_SMOKE_PASS
```

---

## CML-442 — React Migration Build Stabilization

- **Data**: 2026-07-10
- **Tipo**: OPS/tooling contract
- **Stato**: committed local, non pushato
- **Branch**: `codex/react-migration-stabilization`
- **Base**: `origin/main`
- **Runtime storico**: non modificato
- **Dati curricolari**: non modificati (sola generazione artefatto)

### Problema

Lo scaffold React in `curman-react/` non compilava:
1. `src/types/curriculum.ts` mancante — 6+ file importavano `@/types/curriculum`
2. `src/lib/curriculum.ts` mancante — `useCurriculum.ts` importava `filterByOrdine`, `filterByNucleo`, `mergeGapLayer`
3. `src/data/curriculum/` vuota — `import.meta.glob('../data/curriculum/*.json')` non trovava nulla
4. `package-lock.json` era placeholder `see_file`

### Decisioni architetturali

- Fonte canonica: `content/curriculum/*.normalized.json`
- Dati generati (`src/data/curriculum/*.json`) esclusi da git via `.gitignore`
- `pages.yml` invariato — unico flusso di pubblicazione
- `react-ci.yml` come sola verifica (npm ci, lint, build)
- Gap layer assente: banner ambrato in Revisione e Esportazioni

### Files creati

- `.github/workflows/react-ci.yml`
- `curman-react/src/types/curriculum.ts`
- `curman-react/src/lib/curriculum.ts`
- `curman-react/tools/sync-curriculum-data.mjs`
- `docs/03_execution/CML-442.md`

### Files modificati

- `curman-react/package.json` — script sync-data, predev, prebuild
- `curman-react/package-lock.json` — rigenerato
- `curman-react/.gitignore` — esclusi src/data/curriculum/*.json
- `curman-react/src/views/RevisioneView.tsx` — gap null handling
- `curman-react/src/views/EsportazioniView.tsx` — gap null handling
- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/REPO-MOVELOG-v2.md`

### Files eliminati

- `curman-react/.github/workflows/deploy-react.yml`
- `src/data/curriculum/arte-immagine.json` — duplicato PR n. 31
- `src/data/curriculum/educazione-civica.json` — duplicato PR n. 31

### Verifica riproducibilità

```
rm -rf node_modules dist src/data/curriculum
npm ci        # 54 pacchetti, 0 vulnerabilità
npm run lint  # 0 warnings, 0 errors
npm run build # tsc -b + vite build ✓
test -d dist  # ✓
```

### Verdetto

```text
CML_442_REACT_MIGRATION_BUILD_STABILIZATION_COMMITTED_LOCAL_NOT_PUSHED
```
