# CML-375 — Runtime Access Refactor Chain Pre-Push Audit

## Meta

- **Data audit:** 2026-07-04
- **HEAD auditato:** `fa8d084` (CML-374)
- **Branch:** `codex/cml-372-get-units-for-discipline`
- **Slice type:** docs-only

## Risultati audit

| Controllo | Esito |
|-----------|:-----:|
| git status — working tree pulito | ✅ |
| git log — catena 4 commit lineare | ✅ |
| git diff --check — nessun whitespace error | ✅ |
| TECNOLOGIA_NORM / TECNOLOGIA_NORM_DATA | 0 hits ✅ |
| Pattern *_NORM | 0 hits ✅ |
| ALL_CURRICULUM_DATA.<disciplina> dot-access | 0 hits ✅ |
| discKey === 'tecnologia' branch | 0 hits ✅ |
| validate-cml-normalized-curriculum.mjs | overallValid: true ✅ |
| test-runtime-mappa-dati-shape.mjs | overall: PASS ✅ |

## Verdict

```text
CML_375_RUNTIME_ACCESS_REFACTOR_CHAIN_PRE_PUSH_AUDIT_READY_LOCAL_NOT_PUSHED
```
