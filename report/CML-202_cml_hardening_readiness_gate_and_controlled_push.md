# CML-202 - CML_HARDENING_READINESS_GATE_AND_CONTROLLED_PUSH

## 1. Baseline

| Item                   | Value                                    |
| ---------------------- | ---------------------------------------- |
| Repo                   | `curmanlight`                            |
| Branch                 | `main`                                   |
| Start commit           | `356534d`                                |
| `origin/main` at start | `eb3e36f`                                |
| Local commits ahead    | 2 (CML-200 `3e83d83`, CML-201 `356534d`) |
| Working tree           | Clean                                    |
| Slice type             | Readiness gate + controlled push         |
| Deploy                 | None (automatic GitHub Pages only)       |
| Push                   | Controlled push of CML-200 + CML-201     |
| Secrets                | None                                     |

## 2. Pre-Push Checks

| Check                                                                       | Result     |
| --------------------------------------------------------------------------- | ---------- |
| `git status` — clean working tree                                           | PASS       |
| `git log --oneline origin/main..HEAD` — exactly 2 commits: CML-200, CML-201 | PASS       |
| JSON validator 14/14 PASS                                                   | PASS       |
| CML-200 targeted smoke 12/12 PASS                                           | PASS       |
| CML-201 E2E smoke 33/33 PASS                                                | PASS       |
| Existing `.cml` examples: 4/4 PASS                                          | PASS       |
| Runtime shape test: pre-existing BOM failure (0/14)                         | Documented |
| BOM failure verified as pre-existing (not caused by CML-200/CML-201)        | PASS       |
| `git diff --check` — no whitespace errors                                   | PASS       |
| Secret-pattern scan — no actual secrets                                     | PASS       |
| No manual deploy                                                            | PASS       |

## 3. Commit List

| #   | Commit    | Description                                                      |
| --- | --------- | ---------------------------------------------------------------- |
| 1   | `3e83d83` | `runtime: harden cml import export validation` (CML-200)         |
| 2   | `356534d` | `docs: smoke teacher department referent cml workflow` (CML-201) |

## 4. Push

```bash
git push origin main
```

Push completed successfully. Local `main` and `origin/main` are now aligned.

## 5. Public GitHub Pages Smoke

- **URL**: https://antoniocorsano-boop.github.io/curmanlight/
- **HTTP**: 200 OK
- **App loads**: confirmed
- **Runtime curriculum**: 14/14 disciplines visible
- **Hardened validation behavior reflected publicly**:
  - Unsupported schema versions blocked
  - Missing `schemaVersion` accepted with warning
  - Malformed JSON blocked
  - Wrong `fileType` blocked
- **Manual deploy**: None
- **Pages update**: Automatic (GitHub Pages built from pushed commit)

## 6. Validation Results

### JSON Validator

```
node tools/validate-cml-normalized-curriculum.mjs
overallValid: true
totalFiles: 14
invalidCount: 0
```

**Result: 14/14 PASS**

### CML-200 Targeted Smoke

**Result: 12/12 PASS**

### CML-201 E2E Smoke

**Result: 33/33 PASS**

### Existing `.cml` Examples Compatibility

All 4 example files pass unchanged:

- `esempio_proposta_docente_tecnologia.cml`
- `esempio_proposta_docente_italiano.cml`
- `esempio_esito_dipartimento_tecnologia.cml`
- `esempio_esito_dipartimento_italiano.cml`

## 7. Runtime Shape/BOM Note

```
node tools/test-runtime-mappa-dati-shape.mjs
overall: FAIL
disciplines: 0 passed, 14 failed
```

**Status**: Pre-existing BOM failure on `content/curriculum/*.normalized.json`.
**Cause**: Not introduced by CML-200 or CML-201.
**Verification**: Stashed CML-200 changes and re-ran shape test on unmodified code; identical 14 failures observed.

## 8. Blocking Regressions

**None found.** All pre-push checks pass. No runtime behavior changes introduced by CML-200 or CML-201 break existing workflows.

## 9. Files Changed in This Slice

| File                                                                 | Change                                           |
| -------------------------------------------------------------------- | ------------------------------------------------ |
| `docs/03_execution/CML-202.md`                                       | New readiness gate documentation                 |
| `report/CML-202_cml_hardening_readiness_gate_and_controlled_push.md` | New readiness report                             |
| `docs/REPO-MOVELOG.md`                                               | Updated entry                                    |
| `tools/cml202-readiness.mjs`                                         | Temporary smoke script (removed after execution) |

## 10. Meta

| Property               | Value                                                            |
| ---------------------- | ---------------------------------------------------------------- |
| Start commit           | `356534d`                                                        |
| CML-200 commit         | `3e83d83`                                                        |
| CML-201 commit         | `356534d`                                                        |
| Final origin/main HEAD | `356534d`                                                        |
| Verdict                | `CML_202_CML_HARDENING_READINESS_GATE_AND_CONTROLLED_PUSH_READY` |

## 11. Recommended Next Cycle

The `.cml` validation hardening cycle is complete and pushed. Recommended next slices:

1. **CML-203** — Address pre-existing BOM/shape-test failure in `content/curriculum/*.normalized.json`
2. **CML-204** — Educazione Fisica detailed gap model (per CML-178)
3. **CML-205** — Drive endpoint allowlist implementation (if enabled)
4. **CML-206** — Multi-discipline package format v1 (if needed)
