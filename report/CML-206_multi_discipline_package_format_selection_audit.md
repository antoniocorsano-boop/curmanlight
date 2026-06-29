# CML-206 - MULTI_DISCIPLINE_PACKAGE_FORMAT_SELECTION_AUDIT

## 1. Baseline

| Item                   | Value           |
| ---------------------- | --------------- |
| Repo                   | `curmanlight`   |
| Branch                 | `main`          |
| Start commit           | `f0f9817`       |
| `origin/main` at start | `f0f9817`       |
| Working tree at start  | Clean           |
| Slice type             | Audit docs-only |
| Deploy                 | None            |
| Push                   | None            |
| Secrets                | None            |

## 2. Current Batch Import Behavior

The runtime already supports multi-file batch import for both `teacher_proposal` and `department_outcome`:

- `importTeacherCmlFiles(fileList)` iterates an array of `File` objects, parses each through `parseTeacherCmlText()`, validates via `validateTeacherCmlModel()`, and aggregates all valid proposals into `departmentImportState.proposals`.
- `importDepartmentOutcomeCmlFiles(fileList)` does the same for outcomes, storing them in `referentOutcomeState.outcomes`.
- Duplicate detection uses a content fingerprint (`departmentCmlFingerprint` for proposals, `buildOutcomeFingerprint` for outcomes) based on `discipline`, `createdAt`, and item content. Duplicates are flagged with a "Duplicato probabile" chip but still enter state.
- Mixed-discipline batches are explicitly supported: the department UI groups proposals by discipline and shows a warning chip if multiple disciplines are present. This is the standard workflow for multi-discipline teachers.
- Single-discipline batches show no mixed-discipline warning.
- Both importers already handle multiple files with different `fileType` values rejected at the gate, malformed JSON skipped, and missing/unsupported `schemaVersion` warned or blocked per CML-200 rules.

In short: the operational need "import proposals/outcomes from multiple files across disciplines" is fully satisfied today.

## 3. Option Comparison

| Dimension                          | A — Keep batch          | B — Lightweight package in v1.0 | C — New `multi_discipline_package`   | D — Defer to v1.1/v2.0 | E — UX guidance only |
| ---------------------------------- | ----------------------- | ------------------------------- | ------------------------------------ | ---------------------- | -------------------- |
| Compatibility with existing `.cml` | Full                    | Full                            | Requires new handling                | Full                   | Full                 |
| Implementation risk                | None                    | Medium (semantic ambiguity)     | High (new validator, export, import) | Low (deferred)         | Low                  |
| User-facing clarity                | Medium (batch of files) | Medium (package field)          | High (explicit package)              | N/A                    | Medium-High          |
| Workflow impact                    | None                    | Medium                          | High                                 | None                   | Low                  |
| Duplicate/mixed handling           | Existing                | Existing + new rules            | New rules                            | N/A                    | Existing             |
| Schema versioning impact           | None                    | None (no bump)                  | May need bump                        | Deferred               | None                 |
| Local-first fit                    | Perfect                 | Good                            | Good                                 | N/A                    | Perfect              |
| Zero-dependency fit                | Perfect                 | Perfect                         | Good                                 | N/A                    | Perfect              |
| Privacy/security impact            | None                    | Low                             | Medium                               | None                   | None                 |
| Test burden                        | None                    | Medium                          | High                                 | None                   | Low                  |
| Premature complexity risk          | Low                     | Medium                          | High                                 | Low                    | Low                  |

## 4. Selected Option

**Option A — Keep current v1.0 single-file types and batch import.**

Rationale:

1. Current behavior satisfies the core operational need: multi-file, multi-discipline import works today.
2. No evidence that schools require an explicit "package" artifact.
3. Avoids premature schema complexity and test burden.
4. Preserves 100% backward compatibility with existing `.cml` files.
5. If a package format becomes necessary later, it can be introduced in a future schema version with proper contract definition.

## 5. Rejected Alternatives

| Option                                      | Reason                                                                                                                             |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| B — Lightweight package manifest in v1.0    | Semantic ambiguity (is a file with `package:` a package or single proposal?); complexity not justified by evidence                 |
| C — New `multi_discipline_package` fileType | Introduces 3-way role/file-type matrix; requires new validators, exports, imports, UI flows, and tests; no strong operational need |
| D — Defer to v1.1 or v2.0                   | Overly conservative; Option A suffices without needing future contracts                                                            |
| E — UX guidance only                        | Useful as a follow-up improvement but does not address the package-format question; better handled as a separate UX slice          |

## 6. Compatibility Impact

- **Existing `.cml` files**: No change. All `teacher_proposal` and `department_outcome` files remain valid.
- **Batch import**: No change. Multi-file selection continues to work.
- **Validators**: No change.
- **Export**: No change.
- **Schema version**: No bump required.

## 7. Implementation Risk

**None.** This is a docs-only audit slice. No runtime, schema, or workflow changes are introduced.

## 8. Recommended Next Slice

If UX improvement is desired without schema changes, a future slice could enhance the batch import UI (multi-select clarity, drag-and-drop, file preview before import) while keeping the same `.cml` schema and behavior.

## 9. Verification

| Check                                     | Result |
| ----------------------------------------- | ------ |
| `git status` — clean working tree         | YES    |
| HEAD at `f0f9817`                         | YES    |
| `origin/main` at `f0f9817`                | YES    |
| `git diff --check` — no whitespace errors | YES    |
| Secret scan — no secrets                  | YES    |
| No deploy                                 | YES    |
| No push                                   | YES    |
| No secrets                                | YES    |

## 10. Meta

| Property     | Value                                                           |
| ------------ | --------------------------------------------------------------- |
| Start commit | `f0f9817`                                                       |
| Final commit | _TBD after docs commit_                                         |
| Verdict      | `CML_206_MULTI_DISCIPLINE_PACKAGE_FORMAT_SELECTION_AUDIT_READY` |
