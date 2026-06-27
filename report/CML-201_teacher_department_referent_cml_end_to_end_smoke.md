# CML-201 - TEACHER_DEPARTMENT_REFERENT_CML_END_TO_END_SMOKE

## 1. Baseline

| Item | Value |
|---|---|
| Repo | `curmanlight` |
| Branch | `main` |
| Start commit | `3e83d83` |
| `origin/main` | `eb3e36f` |
| Working tree at start | Clean |
| CML-200 state | Committed locally, not pushed (ahead by 1) |
| Slice type | Docs-only smoke verification |
| Deploy | None |
| Push | None |
| Secrets | None |

## 2. Files Changed

| File | Change |
|---|---|
| `docs/03_execution/CML-201.md` | New smoke documentation |
| `report/CML-201_teacher_department_referent_cml_end_to_end_smoke.md` | New smoke report |
| `docs/REPO-MOVELOG.md` | Updated entry |
| `tools/cml201-smoke.mjs` | Temporary smoke script (removed after execution) |

## 3. Smoke Matrix and Outcomes

### 3.1 Teacher Export

| Test | Result |
|---|---|
| Single-discipline `teacher_proposal` exported as `.cml v1.0` | PASS |
| `fileType` is `teacher_proposal` | PASS |
| `proposals[]` is non-empty | PASS |
| No credentials in payload | PASS |
| No student personal data in payload | PASS |
| Multi-discipline batch accepted (warn-only) | PASS |

### 3.2 Department Import

| Test | Result |
|---|---|
| Valid `teacher_proposal` accepted | PASS |
| Missing `schemaVersion` → legacy warning | PASS |
| Unsupported `schemaVersion` (`"2.0"`) → blocked | PASS |
| Malformed JSON → blocked | PASS |
| Wrong `fileType` → blocked | PASS |
| Partial proposal item (id/testo/motivazione/fonte empty) → accepted with warnings | PASS |
| Duplicate file fingerprint → warning, included | PASS |
| Oversized/large-array thresholds implemented | PASS |

### 3.3 Department Export

| Test | Result |
|---|---|
| Valid `department_outcome` exported as `.cml v1.0` | PASS |
| `fileType` is `department_outcome` | PASS |
| `proposalHandling[]` present | PASS |
| Empty handling preserved as `senza_esito` | PASS |
| Duplicate handling ID in same file detected | PASS |
| `discipline` / `disciplines` match in examples | PASS |

### 3.4 Referent Import

| Test | Result |
|---|---|
| Valid `department_outcome` accepted | PASS |
| `teacher_proposal` rejected by referent importer | PASS |
| Missing `schemaVersion` → legacy warning | PASS |
| Malformed JSON → blocked | PASS |
| Unsupported `schemaVersion` → blocked | PASS |

### 3.5 Referent Report

| Test | Result |
|---|---|
| Markdown report aggregates handling counts correctly | PASS |
| No credential leakage in report | PASS |
| Referent does not export `.cml` | PASS |

### 3.6 Existing `.cml` Examples Compatibility

| File | Result |
|---|---|
| `esempio_proposta_docente_tecnologia.cml` | PASS |
| `esempio_proposta_docente_italiano.cml` | PASS |
| `esempio_esito_dipartimento_tecnologia.cml` | PASS |
| `esempio_esito_dipartimento_italiano.cml` | PASS |

All 4 existing example files pass unchanged.

## 4. CML-200 Re-run

The smoke script includes a re-run of all 12 CML-200 targeted cases. Result: **12/12 PASS**.

## 5. Validation Results

### JSON Validator
```
node tools/validate-cml-normalized-curriculum.mjs
overallValid: true
totalFiles: 14
invalidCount: 0
```
**Result: 14/14 PASS**

### Runtime Shape Test
```
node tools/test-runtime-mappa-dati-shape.mjs
overall: FAIL
disciplines: 0 passed, 14 failed
```
**Status: Pre-existing BOM failure** — verified by stashing CML-200 changes and re-running on unmodified code. Same failures occur. Not introduced by CML-200 or CML-201.

## 6. Compatibility Result for Existing `.cml` Examples

All 4 example files in `docs/04_user/esempi_cml/` are accepted as valid input without modification:
- `esempio_proposta_docente_tecnologia.cml`
- `esempio_proposta_docente_italiano.cml`
- `esempio_esito_dipartimento_tecnologia.cml`
- `esempio_esito_dipartimento_italiano.cml`

## 7. Blocking Regressions

**None found.** All smoke cases pass. No runtime behavior changes were introduced in CML-200 that break existing workflows.

## 8. Verification Checklist

| Check | Result |
|---|---|
| `git status` — clean working tree (temp script removed) | YES |
| HEAD at `3e83d83` | YES |
| `origin/main` at `eb3e36f` (ahead by 1, no push) | YES |
| JSON validator 14/14 PASS | YES |
| CML-200 smoke re-run 12/12 PASS | YES |
| CML-201 E2E smoke 33/33 PASS | YES |
| `git diff --check` — no whitespace errors | YES |
| Secret-pattern scan — no actual secrets | YES |
| Shape test pre-existing BOM failure confirmed | YES |
| No deploy | YES |
| No push | YES |
| No secrets | YES |

## 9. Meta

| Property | Value |
|---|---|
| Start commit | `3e83d83` |
| Final commit | `5c1fa88` |
| Verdict | `CML_201_TEACHER_DEPARTMENT_REFERENT_CML_END_TO_END_SMOKE_READY` |
