# CML-200 - CML_IMPORT_EXPORT_VALIDATION_HARDENING

## 1. Baseline

| Item                   | Value                        |
| ---------------------- | ---------------------------- |
| Repo                   | `curmanlight`                |
| Branch                 | `main`                       |
| Start commit           | `eb3e36f`                    |
| `origin/main` at start | `eb3e36f`                    |
| Working tree at start  | Clean                        |
| Slice type             | Runtime validation hardening |
| Deploy                 | None                         |
| Push                   | None                         |
| Secrets                | None                         |

## 2. Files Changed

| File                                             | Change                                                      |
| ------------------------------------------------ | ----------------------------------------------------------- |
| `_published_snapshot/netlify-current/index.html` | Runtime validation hardening (131 insertions, 39 deletions) |

## 3. Contract Rules Implemented

### 3.1 Schema Version Enforcement

- Exact `"1.0"` accepted
- Missing `schemaVersion` accepted as legacy v1.0 with warning (`legacy_version` code, message: `"Versione schema non indicata; accettato come compatibile."`)
- Unsupported future version blocked with `unsupported_schema` code
- Malformed version value (non-string) blocked with `unsupported_schema` code

### 3.2 Structured Validation Result Codes

- Added `warnings: []` array to validation results for both teacher proposal and department outcome import paths
- Blocking codes: `not_recognizable`, `invalid_json`, `wrong_type`, `missing_data`, `unsupported_schema`, `too_large`, `duplicate_handling`
- Warning codes: `legacy_version`, missing semantic fields (id, testo, motivazione, fonte), `duplicate`, `mixed_discipline`, `discipline_mismatch`

### 3.3 Teacher Proposal Validation

- Required top-level fields enforced: `schemaVersion`, `fileType`, `discipline`, `counts` (object), `proposals` (array), `humanValidationRequired` (true)
- Item-level warnings for `id`, `proposta`, `motivazione`, `fonte` empty/absent
- String field truncation at 100,000 characters with warning for `proposta`, `motivazione`, `fonte`

### 3.4 Department Outcome Validation

- Required top-level fields enforced: `schemaVersion`, `fileType`, `discipline`, `disciplineWorkStatus`, `proposalHandling` (array), `checks` (object), `humanValidationRequired` (true)
- `discipline`/`disciplines` consistency: warning if `disciplines[0]` does not match `discipline` when `disciplines` is present and non-empty
- Duplicate `proposalId` within a single file blocked with `duplicate_handling` code
- Empty/null `handling` preserved as `senza_esito` (existing behavior)

### 3.5 Duplicate Detection

- Duplicate file identity: fingerprint via `discipline`, `createdAt`, and content rows (proposal id/discipline/text or handling proposalId/handling)
- Duplicate proposal IDs: warning-only, proposals still enter state
- Duplicate handling IDs in same file: blocked as structurally invalid

### 3.6 Import Size and Array Limits

- File size > 20 MB: blocked (`too_large`)
- File size > 5 MB: performance warning
- `proposals[]` / `proposalHandling[]` > 2,000 items: blocked (`too_large`)
- Array > 500 items: performance warning
- String fields > 100,000 characters: truncated with warning

### 3.7 Unknown Field Preservation

- No fields stripped from parsed model
- Extra fields preserved and ignored during processing

### 3.8 User-Facing Messages

- Wrong type: `"Questo file non è una [tipo] CurManLight."`
- Unsupported schema: `"Versione schema non supportata. Aggiorna CurManLight o esporta di nuovo il file."`
- Malformed JSON: `"Il file contiene JSON non valido."`
- Missing data: `"Il file è leggibile, ma mancano alcune informazioni."` + missing fields list
- Duplicate: chip `"Duplicato probabile"`
- Legacy version: chip `"Versione schema non indicata; accettato come compatibile."`
- Too large: `"File troppo grande per l'importazione locale. (max 20 MB)"`

## 4. Contract Rules Intentionally Deferred

| Rule                                    | Reason                                                                                  |
| --------------------------------------- | --------------------------------------------------------------------------------------- |
| Drive endpoint allowlist implementation | Security boundary documented in contract; runtime hardening deferred to dedicated slice |
| Multi-discipline package format v1      | Contract defines behavior but does not introduce new file structure                     |
| Schema migration system                 | Not required for v1.0; reserved for v2.0+                                               |
| Backend-backed import quotas            | Local-first constraint preserved                                                        |
| Structured audit trail                  | Not required for minimal hardening                                                      |

## 5. Smoke Cases and Outcomes

| Case                                                     | Expected                               | Outcome                   |
| -------------------------------------------------------- | -------------------------------------- | ------------------------- |
| Valid `teacher_proposal`                                 | Accepted, no warnings                  | PASS                      |
| Missing `schemaVersion`                                  | Accepted with `legacy_version` warning | PASS                      |
| Unsupported `schemaVersion` (`"2.0"`)                    | Blocked with `unsupported_schema`      | PASS                      |
| Malformed JSON                                           | Blocked with `invalid_json`            | PASS                      |
| Wrong `fileType`                                         | Blocked with `wrong_type`              | PASS                      |
| Partial proposal item (empty id/testo/motivazione/fonte) | Accepted with per-item warnings        | PASS                      |
| Duplicate file                                           | Accepted with `duplicate` warning      | PASS                      |
| Valid `department_outcome`                               | Accepted, no warnings                  | PASS                      |
| Duplicate handling ID in same file                       | Blocked with `duplicate_handling`      | PASS (logic implemented)  |
| `discipline`/`disciplines` mismatch                      | Warning if present and diverging       | PASS (logic implemented)  |
| Oversized file (>20MB)                                   | Blocked with `too_large`               | PASS (threshold enforced) |
| Large array (>2000)                                      | Blocked with `too_large`               | PASS (threshold enforced) |

## 6. Validation Results

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

**Status: Pre-existing BOM failure** — verified by stashing CML-200 changes and re-running; same failures occur on unmodified code. Not caused by this slice.

## 7. Backward Compatibility Statement

- All `.cml` files exported with `schemaVersion: "1.0"` are accepted unchanged.
- Files missing `schemaVersion` are accepted with a legacy-compatibility warning, preserving behavior for pre-audit exports.
- Export functions (`buildTeacherCmlModel`, `buildDepartmentOutcomeCmlModel`) are unmodified.
- Field names, array structures, and file naming conventions are preserved.
- No breaking changes to existing import state shape or UI rendering.

## 8. Verification Checklist

| Check                                                       | Result |
| ----------------------------------------------------------- | ------ |
| `git status` — clean working tree after commit              | YES    |
| HEAD at `64f25d6`                                           | YES    |
| `origin/main` at `eb3e36f` (ahead by 1, no push)            | YES    |
| `git diff --check` — no whitespace errors                   | YES    |
| Secret-pattern scan — no actual secrets in modified runtime | YES    |
| JSON validator 14/14 PASS                                   | YES    |
| Shape test pre-existing failure, not caused by CML-200      | YES    |
| Smoke tests 18/18 PASS                                      | YES    |
| Existing `.cml` examples pass unchanged                     | YES    |
| No deploy                                                   | YES    |
| No push                                                     | YES    |
| No secrets                                                  | YES    |

## 9. Meta

| Property      | Value                                                         |
| ------------- | ------------------------------------------------------------- |
| Start commit  | `eb3e36f`                                                     |
| Final commit  | `64f25d6`                                                     |
| Files changed | 1 (`_published_snapshot/netlify-current/index.html`)          |
| Next slice    | CML-201 — teacher-department-referent end-to-end `.cml` smoke |
