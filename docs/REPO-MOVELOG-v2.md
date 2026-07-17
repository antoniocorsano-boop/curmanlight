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

## CML-535 - Guided Teacher Pilot Runtime Entry Point

- **Data**: 2026-07-17
- **Tipo**: React preview / runtime entry point
- **Stato**: READY_LOCAL_NOT_PUSHED
- **Branch**: `feat/cml-535-guided-teacher-pilot-entry`
- **Base locale**: `c2fcc3fe87fbd83ef0ceab8d88d9d1271ec78f97`
- **Runtime storico modificato**: no
- **React modificato**: si
- **Dati curricolari canonici**: non modificati
- **Schema `.cml`**: invariato
- **Workflow Pages**: non modificato
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato
- **Trigger Pages nel diff**: `curman-react/**`, solo in caso di merge/push su `main`

### Scopo

Aggiungere nella baseline React un punto di accesso provvisorio e non invasivo alla prova guidata docenti definita da CML-534.

### Implementazione

- Nuova vista `pilot-guidato-docenti`.
- Ingresso Home "Partecipa alla prova guidata".
- Schermata iniziale con scopo, regole, durata e azioni.
- Primo compito CML-534: orientarsi nella Home.
- Uscita sicura verso Home e ritorno alle regole.
- Nessuna raccolta persistente, nessun backend, nessuna telemetria.

### File prodotti/modificati

- `curman-react/src/App.tsx`
- `curman-react/src/types/state.ts`
- `curman-react/src/components/layout/Sidebar.tsx`
- `curman-react/src/views/HomeView.tsx`
- `curman-react/src/views/GuidedTeacherPilotView.tsx`
- `curman-react/tools/check-cml535-guided-teacher-pilot-entry.mjs`
- `curman-react/package.json`
- `docs/03_execution/CML-535.md`
- `report/CML-535_guided_teacher_pilot_runtime_entry.md`
- `docs/02_system/PROJECT-STATE.md`
- `docs/REPO-MOVELOG-v2.md`

### Verdetto

```text
CML_535_GUIDED_TEACHER_PILOT_RUNTIME_ENTRY_READY_LOCAL_NOT_PUSHED
```

---## CML-534 - Guided Teacher Pilot Protocol for React Baseline

- **Data**: 2026-07-17
- **Tipo**: docs-only / guided teacher pilot protocol
- **Stato**: READY_LOCAL_NOT_PUSHED
- **Branch**: `main`
- **Base locale**: `9a6ecacf759b68e5ef6035f5a184fd4f04b0a533`
- **Runtime storico modificato**: no
- **React modificato**: no
- **Dati curricolari canonici**: non modificati
- **Schema `.cml`**: invariato
- **Workflow Pages**: non modificato
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato

### Scopo

Definire un protocollo breve per il pilot guidato con 3-5 docenti sulla baseline React, separando evidenze osservabili, opinioni e gate mobile/accessibilita.

### Evidenze

- CML-533 ha indicato il pilot docenti come prossimo incremento P0.
- La baseline React dispone gia di feedback guidato, import analisi, backlog e Registro decisioni.
- I protocolli esistenti richiedono campione minimo 3, raccomandato 5, nessun dato personale e separazione tra evidenze sintetiche e umane.

### File prodotti/modificati

- `docs/03_execution/CML-534.md`
- `report/CML-534_guided_teacher_pilot_protocol.md`
- `docs/02_system/PROJECT-STATE.md`
- `docs/REPO-MOVELOG-v2.md`

### Verdetto

```text
CML_534_GUIDED_TEACHER_PILOT_PROTOCOL_READY_LOCAL_NOT_PUSHED
```

---
## CML-533 - React Product Roadmap Re-entry Audit

- **Data**: 2026-07-17
- **Tipo**: docs-only / React roadmap decision audit
- **Stato**: READY_LOCAL_NOT_PUSHED
- **Branch**: `main`
- **Base locale**: `9a6ecacf759b68e5ef6035f5a184fd4f04b0a533`
- **Runtime storico modificato**: no
- **React modificato**: no
- **Dati curricolari canonici**: non modificati
- **Schema `.cml`**: invariato
- **Workflow Pages**: non modificato
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato

### Scopo

Rientrare nella roadmap React dopo CML-531/532 e scegliere il prossimo incremento a maggior valore tra Registro decisioni, pilot docenti, mobile/accessibilita e flusso dei tre ruoli.

### Evidenze

- Registro decisioni: CML-526 completo tecnicamente, collegato a `PilotFinding`, export Markdown e campi implementazione/verifica/pubblicazione.
- Pilot docenti: CML-525O/P/Q coprono raccolta, import, analisi descrittiva e backlog manuale.
- Mobile/accessibilita: baseline parziale, da trattare come gate P0/P1 in scenari reali.
- Flusso ruoli: CML-518C/D/E introducono guardie tecniche solide; orientamento operativo ancora da validare con utenti.

### Decisione

Il prossimo incremento consigliato e:

```text
CML-534 - Guided Teacher Pilot Protocol for React Baseline
```

Non ampliare ora il Registro decisioni; usarlo invece per tracciare decisioni derivate da evidenze reali. Non avviare un refactor preventivo mobile/accessibilita o flusso ruoli salvo blocchi osservati nel pilot.

### File prodotti/modificati

- `docs/03_execution/CML-533.md`
- `report/CML-533_react_product_roadmap_reentry_audit.md`
- `docs/02_system/PROJECT-STATE.md`
- `docs/REPO-MOVELOG-v2.md`

### Verdetto

```text
CML_533_REACT_PRODUCT_ROADMAP_REENTRY_AUDIT_READY_LOCAL_NOT_PUSHED
```

---
## CML-532 - Offline Service Worker Regression Check

- **Data**: 2026-07-17
- **Tipo**: tooling / regression check
- **Stato**: READY_LOCAL_NOT_PUSHED
- **Branch**: `main`
- **Base locale**: `39ef8d915996b40162b6cac275781ede8e5b587b`
- **Runtime storico modificato in CML-532**: no
- **Dati curricolari canonici**: non modificati
- **Schema `.cml`**: invariato
- **Workflow Pages**: non modificato
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato

### Scopo

Aggiungere un controllo automatico locale per impedire regressioni sul service worker dopo CML-529/CML-531.

### File prodotti/modificati

- `tools/check-service-worker-offline-regression.mjs`
- `docs/03_execution/CML-532.md`
- `report/CML-532_offline_service_worker_regression_check.md`
- `docs/02_system/PROJECT-STATE.md`
- `docs/REPO-MOVELOG-v2.md`

### Copertura

- Sync byte-for-byte tra `sw.js` e `_published_snapshot/netlify-current/sw.js`.
- `APP_SHELL` minima esatta.
- Motto canonico `./motto-non-multa-sed-multum/`.
- Risorse opzionali/normative escluse dal precache.
- Fallback offline 503/504 presenti.
- Install resiliente con asset mancanti.
- Navigation offline/cache vuota -> `Response 503`.
- Asset offline/cache vuota -> `Response 504`.
- Nessun `respondWith(undefined)` nei percorsi simulati.

### Controlli

- RED TDD: `node tools/check-service-worker-offline-regression.mjs` FAIL atteso per script mancante.
- GREEN: `node tools/check-service-worker-offline-regression.mjs` PASS.
- `node --check tools/check-service-worker-offline-regression.mjs` PASS.
- `node --check sw.js` PASS.
- `node --check _published_snapshot/netlify-current/sw.js` PASS.
- `node tools/check-app-pair.mjs` PASS.
- `git diff --check` PASS, solo warning CRLF non bloccanti.

### Verdetto

```text
CML_532_OFFLINE_SERVICE_WORKER_REGRESSION_CHECK_READY_LOCAL_NOT_PUSHED
```

---
## CML-528 - Service Worker App Shell Contract Audit

- **Data**: 2026-07-17
- **Tipo**: docs-only / service worker audit
- **Stato**: READY_LOCAL_NOT_PUSHED
- **Branch**: `main`
- **Commit base**: `3ce03b04489e618d70ad38ca13ef18ac3b5ed738`
- **Runtime storico modificato**: no
- **Dati curricolari canonici**: non modificati
- **Schema `.cml`**: invariato
- **Workflow Pages**: non modificato
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato

### Scopo

Audit del service worker senza modifiche runtime: inventario `APP_SHELL`, verifica pubblicazione, classificazione risorse, analisi `install`/`activate`/`fetch`, individuazione rischi `respondWith(undefined)` e contratto offline proposto.

### Evidenze APP_SHELL

- 9/9 URL presenti nello snapshot `_published_snapshot/netlify-current`.
- 9/9 URL HTTP 200 su `https://antoniocorsano-boop.github.io/curmanlight/`.
- Risorse essenziali: `./`, `./index.html`, `./manifest.webmanifest`, `./icons/icon-192.png`, `./icons/icon-512.png`.
- Risorsa opzionale/non canonica: `./motto-non-multa-sed-multum.html` perche la UI usa l'URL pulito `/motto-non-multa-sed-multum/`, anch'esso live 200.
- Risorse opzionali candidate a uscire dal precache: `./riferimenti_istituzionali_normativa.json`, `./docs_distribuzione/FONTI_PTOF_RAV_NORMATIVA.md`, `./docs_distribuzione/NOTE_TESTATA_ESPANDIBILE_MOBILE.txt`.

### Rischi individuati

- Ramo navigation: se rete, cache della richiesta e `./index.html` falliscono, `event.respondWith()` puo ricevere una Promise risolta a `undefined`.
- Ramo GET non-navigation: se cache miss, rete fallita e `./index.html` assente dalla cache, stesso rischio.
- Fallback generico a `index.html` per asset non HTML puo restituire HTML dove il chiamante attende JSON, immagine o altro asset.

### Prossime slice

- CML-529: microfix fetch fallback sempre-`Response`.
- CML-530: test offline, cache vuota, aggiornamento cache e smoke post-deploy se necessario.

### File prodotti/modificati

- `docs/03_execution/CML-528.md`
- `report/CML-528_service_worker_app_shell_contract_audit.md`
- `docs/02_system/PROJECT-STATE.md`
- `docs/REPO-MOVELOG-v2.md`

### Controlli

- `Get-Content sw.js` PASS
- `Get-Content _published_snapshot/netlify-current/sw.js` PASS
- Verifica filesystem APP_SHELL PASS, 9/9 presenti
- `Invoke-WebRequest -Method Head` su Pages PASS, 9/9 HTTP 200
- `rg` riferimenti HTML/manifest PASS
- `git diff --check` PASS, soli warning CRLF non bloccanti

### Verdetto

```text
CML_528_SERVICE_WORKER_APP_SHELL_CONTRACT_AUDIT_READY_LOCAL_NOT_PUSHED
```

---

## CML-527 - SW Install Resilience Post-Publish Closure

- **Data**: 2026-07-17
- **Tipo**: docs-only / post-publish closure
- **Stato**: COMPLETED
- **Branch**: `main`
- **Commit verificato**: `3ce03b04489e618d70ad38ca13ef18ac3b5ed738`
- **Run Pages**: `29558661911`
- **Esito live**: positivo
- **Runtime storico modificato in CML-527**: no
- **Dati curricolari canonici**: non modificati
- **Schema `.cml`**: invariato
- **Workflow Pages**: non modificato
- **Archivio legacy**: `docs/REPO-MOVELOG.md` non modificato

### Scopo

Formalizzare la chiusura del fix service worker gia pubblicato, senza riaprire CML-526 e senza modificare runtime.

### Causa radice

L'installazione del service worker era fragile: un singolo asset `APP_SHELL` non recuperabile poteva far fallire il precache e quindi l'intera fase `install`.

### Correzione verificata

Il commit `3ce03b0` gestisce localmente l'errore di ogni `cache.add(url)`, rendendo l'installazione resiliente rispetto ad asset mancanti o temporaneamente non disponibili.

### Verifica

- `gh run list --workflow pages.yml --branch main --limit 5` PASS
- `gh run view 29558661911` PASS, `headSha` = `3ce03b04489e618d70ad38ca13ef18ac3b5ed738`
- `gh run watch 29558661911 --exit-status` PASS
- Browser live pulito su GitHub Pages: HTTP 200, `h1` = `Curricolo Verticale`, service worker attivo, cache `curmanlight-cache-v455-cml436`, console errors 0, page errors 0
- `git diff --check` PASS

### File prodotti/modificati

- `docs/03_execution/CML-527.md`
- `report/CML-527_sw_install_resilience_live_verification.md`
- `docs/02_system/PROJECT-STATE.md`
- `docs/REPO-MOVELOG-v2.md`

### Rischi residui / prossime slice

- CML-528: censire e classificare `APP_SHELL` come essenziale/opzionale/obsoleto.
- CML-529: garantire fallback `fetch` sempre-`Response`.
- CML-530: test offline e aggiornamento cache.

### Verdetto

```text
CML_SW_INSTALL_RESILIENCE_PUSHED_PAGES_DEPLOYED_AND_LIVE_VERIFIED
```

---

## CML-526 — Product Decision Register and Development Traceability

- **Data**: 2026-07-16
- **Tipo**: React preview / runtime increment + docs + test
- **Stato**: locale su branch `feat/cml-526-product-decision-register`, NON pushato, NON mergiato
- **Runtime storico**: non modificato (`index.html`, `_published_snapshot/netlify-current/index.html`)
- **Schema `.cml`**: invariato
- **Dati curricolari canonici**: non modificati
- **PilotFinding / PilotFindingsBacklog**: estesi per riferimento, comportamento invariato
- **Backend/telemetria**: assenti
- **Percorsi Pages trigger**: `curman-react/**` (il merge su `main` attiverebbe il deploy Pages)

### Modello e storage

- `src/features/pilot-evaluation/product-decision-register.d.mts` (A)
- `src/features/pilot-evaluation/product-decision-register.mjs` (A)
- `DecisionRecord` con `pilotFindingIds[]` (collegamento 1..N a `PilotFinding`, sorgente non duplicata); schema `cml-product-decision-register-v1`; storage key `curmanlight:product-decision-register:v1`; funzioni `read/write/create/update/delete/normalize` + `serializeDecisionRegisterMarkdown`.

### Interfaccia

- `src/views/ProductDecisionRegisterView.tsx` (A): elenco, filtri (stato/area), ricerca, creazione, modifica, eliminazione, archiviazione, collegamento PilotFinding (solo `pilotFindingIds`, nessuna copia del contenuto), export Markdown.
- `src/lib/local-storage.ts` (A): helper condiviso `getSafeStorage`/`downloadMarkdown` (deduplicato da `PilotFeedbackAnalysisView`).
- `src/views/PilotFeedbackAnalysisView.tsx` (M): rimossa duplicazione helper, ora importa da `@/lib/local-storage`.
- `src/App.tsx` (M): mount su `ViewId = 'registro-decisioni'`.
- `src/types/state.ts` (M): `ViewId`, `NAVIGATION`, `VIEW_TITLES`.
- `src/components/layout/Sidebar.tsx` (M): icona `gavel` + hint ruolo.

### Resilienza storage (verificata per test)

- Storage assente/undefined → registro vuoto, nessun errore.
- JSON corrotto → `try/catch` → registro vuoto.
- Chiave mancante → registro vuoto.
- Schema errato o `items` non array → `normalizeDecisionRegister` ritorna `null` → registro vuoto.
- Campi mancanti → normalizzati ai default (forward-compatibility).
- Riferimento `PilotFinding` non più disponibile → mantenuto per id; export mostra "Nessuna osservazione pilota collegata." (nessuna rottura).

### Test e documentazione

- `curman-react/tools/check-cml526-product-decision-register.mjs` (A) → `npm run test:cml526`
  Casi coperti: creazione, lettura, update workflow (proposto→…→completato→archiviato),
  persistenza, collegamento PilotFinding senza duplicazione, export Markdown, eliminazione,
  registro vuoto, storage corrotto, storage assente, aggiornamento schema (forward-compat),
  eliminazione PilotFinding con riferimento orfano, export vuoto, export molti record (25).
- `curman-react/package.json` (M): script `test:cml526`
- `docs/02_system/PRODUCT-DECISION-REGISTER-CONTRACT.md` (A)

### Controlli

- `git diff --check` PASS
- `npm run test:cml526` PASS
- `npm run lint` 0 errori (warning solo su file preesistenti non toccati)
- `npm run build` (tsc -b + vite build) PASS

### Verdetto

`CML_526_PRODUCT_DECISION_REGISTER_READY_LOCAL_NOT_PUSHED`

### Roadmap successiva (non bloccante, fuori perimetro CML-526)

- **CML-527 (candidata)**: tracciabilità storica delle decisioni. Estendere `DecisionRecord`
  con `statusHistory[]`, `implementationHistory[]`, `publicationHistory[]` per ricostruire
  quando/perché è cambiato stato (utile se CurManLight diventa strumento di governance
  condiviso). Non implementata in CML-526; il modello attuale persiste solo lo stato corrente.

---

## CML-518A–E — React Baseline e Chiusura Gap dei Tre Ruoli

- **Data**: 2026-07-16
- **Tipo**: React preview / docs + guardie applicative React
- **Stato**: tutte MERGED_MAIN
- **Runtime storico**: non modificato (`index.html`, `_published_snapshot/netlify-current/index.html`)
- **Schema `.cml`**: invariato
- **Dati curricolari canonici**: non modificati
- **Backend/telemetria**: assenti
- **Baseline `main` di partenza**: `80f3633` → serie chiusa su `afd8f7d`

### CML-518A — React Baseline and Capability Perimeter

- **Tipo**: docs-only
- **PR**: #139 — merge commit `e3c02cb`
- **Branch**: `codex/cml-518a-react-baseline`
- **File**: `docs/02_system/PROJECT-STATE.md` (M), `docs/02_system/REACT-BASELINE-AND-CAPABILITY-PERIMETER.md` (A), `docs/03_execution/CML-518A.md` (A)
- **Scopo**: formalizzare `curman-react/` come baseline evolutiva principale, runtime storico come fallback; matrice capacità (completa/parziale/mancante/fuori 1.0) per Docente, Dipartimento, Referente; gate pilot umano e passaggio definitivo a React.
- **Controlli**: `git diff --check` PASS; perimetro limitato a 3 file docs; nessuna modifica runtime/canonica.
- **Verdetto**: `CML_518A_REACT_BASELINE_PR_OPEN_MERGEABLE_NOT_MERGED_NO_RUNTIME_OR_CANONICAL_CHANGE` → mergiata.

### CML-518B — Full App Audit + React Surface Inventory

- **Tipo**: docs / visual audit
- **Merge commit**: `a4c477c`
- **File**: report audit app completo + dashboard SVG (`report/CML-518B-full-app-audit-dashboard.svg`), execution record CML-518B.
- **Scopo**: inventario verificato delle superfici React e audit visivo dell'app completa.

### CML-518C — Teacher Export Freshness Guard

- **Tipo**: React runtime guard
- **PR**: #142 — merge commit `7ba8a07`
- **Commit chiave**: `a930386` ux: prevent stale teacher proposal export
- **Scopo**: impedire l'export di una proposta docente non più aggiornata rispetto alla sorgente ricaricata.

### CML-518D — Department Conflict Guard

- **Tipo**: React runtime guard
- **PR**: #143 — merge commit `134148b`
- **Commit chiave**: `daf29bf` fix: block conflicting department outcomes; `4edde85` ux: surface department decision conflicts
- **Scopo**: bloccare esiti dipartimentali in conflitto e renderli visibili in UI.

### CML-518E — Referent Completeness Guard

- **Tipo**: React runtime guard + test mirato
- **PR**: #144 — merge commit `afd8f7d` — head `174c7d3`
- **Branch**: `codex/cml-518e-referent-completeness-guard`
- **File**: `curman-react/src/lib/referentValidationExport.ts` (M), `curman-react/src/components/referente/ReferentValidationExportPanel.tsx` (M), `curman-react/tools/check-cml518e-referent-completeness-guard.mjs` (A), `curman-react/package.json` (M, script `test:cml518e`), `docs/03_execution/CML-518E.md` (A)
- **Scopo**: impedire l'esportazione di una validazione Referente parziale. Readiness vera solo con `validated > 0 && pending === 0`; guardia nel builder contro bypass UI; `checks.pendingExcluded: 0`; messaggio UI con tre stati e `role="status"`; rimosso testo obsoleto "…saranno esclusi".
- **Test CML-518E**: zero validazioni → ready false; parziale 1/2 bloccata; completa esportabile; builder parziale → errore; builder completo → `pendingExcluded === 0`, `humanValidationRequired === true`, summary coerente.
- **Controlli**: lint PASS (0 errori); build PASS; suite `test:b01/b02/b03/cml478/cml479/cml480/cml482/cml518e` PASS; `git diff --check` PASS.
- **Gate CI (head `174c7d3`)**: React CI, CML-470 B03 Persistence Audit, CML-473 Comparative B03 Audit, CML-491 React Home Mobile Visual Audit, CML-517E Regression Swarm, Cloudflare Workers preview → tutti SUCCESS. Review: 0, thread irrisolti: 0.
- **Verdetto**: `CML_518E_REFERENT_COMPLETENESS_GUARD_MERGED_MAIN_CI_GREEN_NO_CANONICAL_CHANGE`

### Verdetto serie

```text
CML_518_SERIES_REACT_BASELINE_AND_ROLE_GAP_GUARDS_MERGED_MAIN_NO_RUNTIME_OR_CANONICAL_CHANGE
```

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

---

## CML-461 — App Pair Divergence Authority Audit

- **Data**: 2026-07-11
- **Tipo**: docs-only / repository integrity audit / pre-runtime gate
- **Branch**: `codex/cml-461-app-pair-divergence-authority-audit`
- **Base**: `2fcad538a4fafbdfc842e42c6736f5b92dcb5f6f`
- **Stato**: audit completato, commit locale, non pushato

### File prodotti

- `docs/03_execution/CML-461.md`
- `report/CML-461_app_pair_divergence_authority_audit.md`

### Risultato

4 differenze identificate (CSS blank line, arrow encoding, whitespace, function position), tutte non funzionali. Autorità assegnata alla snapshot pubblicata. Direzione riconciliazione: `published → root` tramite CML-462.

### Verdetto

```text
CML_461_APP_PAIR_DIVERGENCE_AUTHORITY_AUDIT_READY_LOCAL_NOT_PUSHED
```

---

## CML-462 — App Pair Root Reconciliation + Arrow Fix

- **Data**: 2026-07-11
- **Tipo**: runtime integrity microfix / app pair reconciliation + arrow fix
- **Branch**: `codex/cml-462-app-pair-root-reconciliation`
- **Base**: `56bb9cd6aeed9170f4bfd4ec20b36fec7526e931`
- **Stato**: correzione applicata, amendato, pushato, PR #52 aggiornata

### File prodotti

- `docs/03_execution/CML-462.md`
- `report/CML-462_app_pair_root_reconciliation.md`

### Risultato

Coppia applicativa riconciliata e sincronizzata. Quattro occorrenze letterali `\u2192` sostituite con `→` in entrambe le copie. `allSync: true`. Snapshot modificata. Pages trigger atteso al merge.

### Verdetto

```text
CML_462_APP_PAIR_RECONCILIATION_ARROW_FIX_PUSHED_PR_UPDATED_READY_FOR_REVIEW
```

---

## CML-462P — Post-Merge Live Smoke (CML-462)

- **Data**: 2026-07-11
- **Tipo**: public smoke / release gate / post-merge verification
- **Branch**: `main`
- **Base**: `f20176bb006f845ce40b522e8af8e261326435c2` (CML-462 merge commit)
- **Stato**: smoke completato, pubblicazione verificata

### File prodotti

- `docs/03_execution/CML-462P.md`
- `report/CML-462P_post_merge_live_smoke.md`
- `report/screenshots/CML-462P/home-desktop-live.png`

### Risultato

Deploy GitHub Pages verificato live. 4 frecce `→` (UTF-8 `E2-86-92`) confermate nella pagina pubblicata. Nessuna occorrenza `\u2192` letterale residua. Nessuna regressione visiva. Coppia applicativa sincronizzata.

### Catena

```
CML-461 (audit) → CML-462 (reconciliation + arrow fix, PR #52 merged) → CML-462P (live smoke PASS)
```

### Verdetto

```text
CML_462P_POST_MERGE_LIVE_SMOKE_VERIFIED_PUBLISHED
```

---

## CML-470 — First Gap Layer Data Package (Pilot)

- **Data**: 2026-07-11
- **Tipo**: curriculum JSON / gap layer data
- **Branch**: `codex/cml-470-gap-layer-pilot`
- **PR**: #60
- **Stato**: PR aperta, CI PASS (2/2 builds)
- **Runtime**: non modificato
- **Dati curricolari**: non modificati (proposte in layer separato)

### Scopo

Introdotto il primo pacchetto dati gap layer per Educazione Fisica, dimostrando la pipeline CML-469 con contenuti reali derivati da CML-179 e CML-204.

### File prodotti

- `content/gap/educazione-fisica.gap.json` (7 proposte)
- `curman-react/src/data/gap/educazione-fisica.gap.json` (copia sincronizzata)
- `docs/03_execution/CML-470.md`

### Proposte

7 entries (una per unita EF), tutti `status: proposta`:
- P1-4 progressione verticale: 4 entries (ef_inf_5_001, ef_pri_1_001, ef_pri_5_001, ef_sec_3_001)
- P1-3 Abilita motorie monoclasso: 1 entry (ef_pri_3_001)
- P1-1 Salute e benessere assente: 2 entries (ef_sec_1_001, ef_sec_2_001)
- P2-1 wording generico: 1 entry (ef_sec_3_001)

### Controlli

- `validate-gap-data.mjs`: PASS (7 proposte valide)
- `sync-gap-data.mjs`: PASS (1 pacchetti)
- React CI: PASS (2/2 builds)
- Nessuna modifica runtime
- Nessuna modifica curricoli normalizzati
- Nessun deploy

### Catena

```
CML-469 (gap layer foundation) → CML-470 (first data package pilot, PR #60)
```

### Verdetto

```text
CML_470_FIRST_GAP_LAYER_DATA_PACKAGE_PILOT_READY
```

---

## CML-470 — First Verified Gap Layer Pilot (Corrected)

- **Data**: 2026-07-11
- **Tipo**: curriculum JSON / gap layer data (correction)
- **Branch**: `codex/cml-470-gap-layer-pilot`
- **PR**: #60 (aggiornata)
- **HEAD**: `a218f5bbdb556dbcf4674c9aeb3e49e292778627`
- **Stato**: PR ready for review, audit Chromium completato
- **Runtime**: non modificato
- **Dati curricolari**: non modificati

### Scopo

Correggere PR #60 dopo review semantica negativa. Le 7 proposte originali derivavano da gap CML-179/CML-204 pre-polish CML-210A. 6 di 7 entry erano ridondanti con il JSON normalizzato corrente.

### File modificati

- `content/gap/educazione-fisica.gap.json` (7 → 1 entry)
- `curman-react/src/data/gap/educazione-fisica.gap.json` (sync)
- `curman-react/tools/validate-gap-data.mjs` (checks aggiuntivi)
- `report/CML-470_first_verified_gap_layer_pilot.md` (nuovo, aggiornato con audit)
- `docs/03_execution/CML-470.md` (aggiornato)
- `docs/REPO-MOVELOG-v2.md` (aggiornato)
- `tools/audit-gap-layer.mjs` (audit script)

### Entry eliminate (6)

| Unità | Motivo |
|---|---|
| ef_inf_5_001 | proposto ≡ corrente |
| ef_pri_1_001 | applicato da CML-210A |
| ef_pri_3_001 | applicato da CML-210A + labelling |
| ef_pri_5_001 | applicato da CML-210A |
| ef_sec_1_001 | gap P1-1 chiuso da dipartimento |
| ef_sec_2_001 | gap P1-1 chiuso da dipartimento |

### Entry mantenuta (1)

| Unità | Differenze genuine |
|---|---|
| ef_sec_3_001 | +Secondaria 1-2 obiettivo 1; +corrette abitudini obiettivo 3 |

### Controlli

- validate:gap PASS (1 proposta), sync:gap PASS, lint PASS (0/0)
- test:b01/b02/b03 PASS
- build PASS (977ms)
- git diff --check PASS (CRLF warnings only)
- check:pair PASS (allSync: true)
- validate:curriculum 14/14 PASS
- test:runtime-shape 14/14 PASS

### Audit Chromium

Eseguito con Playwright 1.61.1 su dev server Vite:
- ef_sec_3_001 card visibile: PASS
- Testo "Secondaria classe 1 e 2": PASS
- Testo "corrette abitudini": PASS
- Pulsanti Accogli/Rifiuta: PASS
- Persistenza localStorage dopo reload: PASS
- Errori console: 0
- Screenshot: `report/screenshots/CML-470/revisione-ef-desktop.png`, `revisione-ef-mobile.png`

### Catena

```
CML-469 (gap layer foundation) → CML-470 v1 (7 entries, semantically rejected) → CML-470 v2 (1 verified entry, PR #60 corrected)
```

### Verdetto

```text
CML_470_FIRST_VERIFIED_GAP_LAYER_PILOT_CORRECTED_PR_60_AUDIT_COMPLETED_READY_FOR_REVIEW
```
