# Report CML-122: Dirty Worktree Split and Selective Consolidation

## Summary

Consolidamento selettivo del dirty worktree post CML-121 completato, separando core applicativo (runtime + JSON + validator) da rumore non core. Nessuna nuova funzionalita introdotta.

## Branch e baseline

- Branch: `main`
- HEAD iniziale: `7d840bf4ab22640c824a884f6417436637245852`

## Fotografia iniziale

Comandi eseguiti:

```powershell
git rev-parse HEAD
git status --short --branch
git diff --name-status
git diff --stat
git diff --check
```

Sintesi iniziale:

- tracked modificati: runtime + 3 JSON + validator
- untracked: docs/report CML 119C/119D/120 e rumore non core (`.agents/`, `skills-lock.json`, `Consultazione`)

## Classificazione e decisioni

### Core consolidato

1. Runtime applicativo

- `_published_snapshot/netlify-current/index.html`

2. JSON disciplinari

- `content/curriculum/italiano.normalized.json`
- `content/curriculum/matematica.normalized.json`
- `content/curriculum/tecnologia.normalized.json`

3. Validator

- `tools/validate-cml-normalized-curriculum.mjs`

### Documentazione/report inclusi

- `docs/03_execution/CML-119C-bis.md`
- `docs/03_execution/CML-119C.md`
- `docs/03_execution/CML-119D.md`
- `docs/03_execution/CML-122.md`
- `report/CML-119B_multi_discipline_normalized_curriculum_validator.md`
- `report/CML-119C-bis_disciplinary_knowledge_content_governance_audit.md`
- `report/CML-119C_disciplinary_knowledge_map_data_contract.md`
- `report/CML-119D_disciplinary_knowledge_map_pilot_normalization.md`
- `report/CML-120_disciplinary_knowledge_map_read_only_view.md`
- `report/CML-122_dirty_worktree_split_and_selective_consolidation.md`
- `docs/REPO-MOVELOG.md`

### Rumore non core lasciato fuori commit

- `.agents/`
- `skills-lock.json`
- `Consultazione`

## Verifica tecnica blocco core

Controlli runtime confermati:

- mappa disciplinare read-only presente;
- alias dataset presente:
  - `var units=TECNOLOGIA_NORM_DATA.unitaApprendimento;`
  - `const TECNOLOGIA_NORM_DATA = TECNOLOGIA_NORM;`

Validatore eseguito:

```powershell
node tools/validate-cml-normalized-curriculum.mjs
```

Esito:

- `overallValid: true`
- `invalidCount: 0`
- `totalFiles: 7`
- `totalUnits: 94`

## Conformita vincoli

- Nessun push/merge/rebase/reset distruttivo.
- Nessuna modifica ulteriore a UI/CSS/schema `.cml` oltre al delta preesistente consolidato.
- Nessuna nuova funzione implementata in questa slice.
- Nessun file non core committato.

## Verdetto

```text
CML_122_DIRTY_WORKTREE_SPLIT_AND_CORE_CHANGESET_CONSOLIDATED
```

## Next consigliato

- Micro-slice di repository hygiene per decidere il destino di `.agents/`, `skills-lock.json`, `Consultazione`.
