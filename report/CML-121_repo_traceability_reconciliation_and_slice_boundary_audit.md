# Report CML-121: Repo Traceability Reconciliation and Slice Boundary Audit

## Scope
Reconciliazione documentale tra stato Git reale e narrativa CML, senza introdurre nuove funzionalita e senza modifiche comportamentali al runtime.

## Commit/HEAD iniziale
- Branch: `main`
- HEAD iniziale: `96f2173ef44979b583b15e8382575b8615149f87`

## Stato working tree iniziale

### Comandi eseguiti
```powershell
git status --short --branch
git diff --name-status
git diff --stat
git diff --check
```

### Snapshot sintetico
- Tracked modificati: 6
- Untracked principali: docs/report del ciclo 119B-120 + rumore non core (`.agents/`, `skills-lock.json`, `Consultazione`)
- Delta tracked principali:
  - Runtime: `_published_snapshot/netlify-current/index.html`
  - JSON: `content/curriculum/{italiano,matematica,tecnologia}.normalized.json`
  - Validator: `tools/validate-cml-normalized-curriculum.mjs`
  - Docs: `docs/REPO-MOVELOG.md`

## Classificazione file

### 1) Runtime applicativo
- `_published_snapshot/netlify-current/index.html`

### 2) JSON disciplinari
- `content/curriculum/italiano.normalized.json`
- `content/curriculum/matematica.normalized.json`
- `content/curriculum/tecnologia.normalized.json`

### 3) Validator / script di controllo
- `tools/validate-cml-normalized-curriculum.mjs`

### 4) Documentazione CML
- `docs/03_execution/CML-119B.md`
- `docs/03_execution/CML-119C-bis.md`
- `docs/03_execution/CML-119C.md`
- `docs/03_execution/CML-119D.md`
- `docs/03_execution/CML-120.md`
- `docs/REPO-MOVELOG.md`

### 5) Report
- `report/CML-119B_multi_discipline_normalized_curriculum_validator.md`
- `report/CML-119C-bis_disciplinary_knowledge_content_governance_audit.md`
- `report/CML-119C_disciplinary_knowledge_map_data_contract.md`
- `report/CML-119D_disciplinary_knowledge_map_pilot_normalization.md`
- `report/CML-120_disciplinary_knowledge_map_read_only_view.md`

### 6) Rumore non funzionale / non core
- `.agents/`
- `skills-lock.json`
- `Consultazione`

## Disallineamenti trovati
1. Refuso documentale in CML-119B (`tecnologica.normalized.json`).
2. Narrative CML-120 con formulazioni assolute sui JSON non compatibili con la fotografia Git reale.
3. Collisione di numerazione CML-120 nel movelog (due significati diversi).
4. Hotfix alias dataset presente in runtime, non esplicitamente tracciato in una voce di reconciliation dedicata.

## Correzioni documentali applicate
1. Corretto refuso in `docs/03_execution/CML-119B.md`.
2. Aggiornata narrativa fattuale in `docs/03_execution/CML-120.md` con nota di tracciabilita CML-121.
3. Aggiornato `docs/REPO-MOVELOG.md`:
   - inserita voce CML-121;
   - aggiunta nota su collisione numerazione CML-120 (voce storica ambigua/deprecata);
   - tracciato hotfix alias runtime:
     - `var units=TECNOLOGIA_NORM_DATA.unitaApprendimento;`
     - `const TECNOLOGIA_NORM_DATA = TECNOLOGIA_NORM;`

## Conferme di non regressione funzionale
- Nessuna nuova funzionalita introdotta.
- Nessuna modifica applicata a runtime/JSON/validator nella micro-slice CML-121.
- Nessuna modifica a schema `.cml`, export/import, validazione dipartimentale, backend o autenticazione.
- I delta runtime/JSON/validator risultano preesistenti alla micro-slice e rimangono da consolidare separatamente.

## Decisione di chiusura
Stato non completamente consolidato a livello di boundary tra slice: rimangono changeset misti (runtime + JSON + validator + docs) nel working tree.

## Verdetto
```text
CML_121_REPO_TRACEABILITY_RECONCILIATION_PARTIAL_NEEDS_SLICE_SPLIT
```

## Next consigliato
- CML-122 — `RUNTIME_JSON_VALIDATOR_CHANGESET_CONSOLIDATION`
  - consolidamento selettivo dei delta effettivi gia presenti, separando runtime, JSON e validator da docs/report.
