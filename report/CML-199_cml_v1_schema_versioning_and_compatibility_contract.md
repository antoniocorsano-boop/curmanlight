# CML-199 - CML_V1_SCHEMA_VERSIONING_AND_COMPATIBILITY_CONTRACT

## 1. Baseline

| Item                   | Value                         |
| ---------------------- | ----------------------------- |
| Repo                   | `curmanlight`                 |
| Branch                 | `main`                        |
| Start commit           | `32a724e`                     |
| `origin/main` at start | `32a724e`                     |
| Working tree at start  | Clean                         |
| Slice type             | Docs-only contract definition |
| Deploy                 | None                          |
| Push                   | None                          |
| Secrets                | None                          |

## 2. Files Inspected

- `C:\Users\anton\CurManLight\_published_snapshot\netlify-current\index.html`
- `docs/04_user/esempi_cml/esempio_proposta_docente_tecnologia.cml`
- `docs/04_user/esempi_cml/esempio_proposta_docente_italiano.cml`
- `docs/04_user/esempi_cml/esempio_esito_dipartimento_tecnologia.cml`
- `docs/04_user/esempi_cml/esempio_esito_dipartimento_italiano.cml`
- `docs/03_execution/CML-198.md`
- `report/CML-198_cml_schema_and_export_import_audit.md`

## 3. Contract Summary

This contract formalizes the `.cml` exchange format for CurManLight as **`.cml v1.0`** with two file types:

- `teacher_proposal`
- `department_outcome`

It covers:

- **Schema family**: `"1.0"` is the sole supported version.
- **File types**: only `teacher_proposal` and `department_outcome` are accepted.
- **Role matrix**: teacher exports proposals, department imports them and exports outcomes, referent imports outcomes and exports Markdown reports.
- **Field classifications**: required, optional, derived, and advisory fields for both file types and their nested arrays.
- **Version policy**: missing version accepted as legacy v1.0 with warning; unsupported future version blocked; malformed version value blocked.
- **Backward compatibility**: all currently exported v1.0 files are compatible without migration.
- **Duplicate policy**: warning-only for duplicate files and duplicate proposal IDs; duplicate handling IDs within a single outcome file are blocked; same discipline across files is permitted.
- **Mixed-discipline policy**: allowed for teacher proposal batches with warning; blocked only when structural data is missing; multi-discipline package format deferred.
- **discipline / disciplines consistency**: singular `discipline` is primary; plural `disciplines[]` is derived summary; divergence is warning-only.
- **Item-level validation**: `id`, `proposta`, `motivazione`, `fonte`, and `proposalId` produce warnings when absent; do not block the file.
- **Malformed/wrong-type handling**: structured codes `not_recognizable`, `invalid_json`, `wrong_type`, `missing_data`, `unsupported_schema`, `too_large`.
- **Size limits**: 5 MB warning / 20 MB block for files; 500 items warning / 2,000 items block for arrays; 100k character warning for string fields.
- **Privacy/security**: no personal data, no credentials, Drive endpoint is untrusted boundary, local/manual fallback is recommended.
- **Error taxonomy**: blocking errors, warnings, informational notices, and recovery guidance catalogued.
- **CML-200 scope**: validator hardening enforcing all contract rules.
- **CML-201 scope**: end-to-end smoke covering all roles, all error cases, and all example files.

## 4. Decisions Made

| #   | Decision                                                                               | Rationale                                                           |
| --- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 1   | `.cml v1.0` is the current and only supported schema family                            | Keeps contract simple; future versions require explicit bump        |
| 2   | Two file types only: `teacher_proposal` and `department_outcome`                       | Matches current runtime and historical workflow                     |
| 3   | Referent exports Markdown, not `.cml`                                                  | Matches current runtime (`downloadReferentGroupWorkReport`)         |
| 4   | `schemaVersion` required but missing is legacy warning, not block                      | Preserves compatibility with pre-audit files                        |
| 5   | Unsupported/malformed version is blocking                                              | Prevents silent drift into incompatible formats                     |
| 6   | Item-level semantic gaps (`proposta`, `motivazione`, `fonte`) are warnings, not blocks | Allows workflows to proceed when partial data exists                |
| 7   | Duplicate imports are warning-only, still enter state                                  | User decides whether to remove; throughput prioritized              |
| 8   | Mixed-discipline batches allowed with warning                                          | Supports multi-discipline teachers and cross-discipline departments |
| 9   | `discipline` is primary; `disciplines[]` is derived                                    | Clear single source of truth without breaking existing exports      |
| 10  | Size limits defined to protect browser memory                                          | No backend; local-first constraint                                  |
| 11  | Drive endpoint is untrusted boundary without allowlist                                 | Security-first default until IT configures explicit trust           |
| 12  | Unknown fields must be preserved, not stripped                                         | Forward-compatible import behavior                                  |
| 13  | Advisory fields (`role`, `checks`) may evolve without version bump                     | Reduces friction for minor metadata changes                         |

## 5. Rejected Alternatives

| Alternative                                      | Reason Rejected                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Block missing `schemaVersion`                    | Too aggressive; would break existing v1.0 files without version field                |
| Block duplicate proposals entirely               | Would prevent legitimate re-submissions; warning with user decision is safer         |
| Enforce `role` field strictly with `fileType`    | Redundant with `fileType`; adds validation burden with no incremental safety         |
| Require `checks` booleans to be true on import   | `checks` are advisory snapshots; recomputation is the importer's job, not the file's |
| Define multi-discipline package format in v1.0   | Scope creep; defer to v2.0 or a separate extension contract                          |
| Make `fonte` / `motivazione` blocking            | Would block valid partial drafts; sematic expectations, not structural requirements  |
| Add allowlist to Drive endpoint in this contract | Implementation detail; belongs in runtime hardening (future slice), not the contract |

## 6. CML-200 Implementation Scope

CML-200 will harden the import validators and error handling based on this contract:

1. **Schema version enforcement**: require `schemaVersion === "1.0"`; block unsupported or malformed; warn-only for missing.
2. **Item-level structural checks**: validate `id`, `proposta`, `motivazione`, `fonte` in `teacher_proposal.proposals[]`; validate `proposalId` in `department_outcome.proposalHandling[]`; emit warnings, not blocks.
3. **Duplicate detection**: implement fingerprint strategy for both file types; mark duplicates with `duplicate` code and chip.
4. **Size/array limits**: implement file size, array length, and string field length limits with warning and blocking thresholds.
5. **discipline / disciplines consistency**: enforce relationship between singular `discipline` and `disciplines[0]`.
6. **User-facing messages**: replace generic text with actionable recovery guidance tied to validation `code` fields.
7. **Unknown field preservation**: ensure imported models retain all original fields; no stripping.
8. **Structured result codes**: all validation results include `code`, `valid`, `message`, and `missing` fields.

## 7. CML-201 Smoke Scope

CML-201 will run an end-to-end smoke test across all three roles:

### Teacher Role

- Export `teacher_proposal` for single discipline → valid file.
- Export `teacher_proposal` for multiple disciplines → valid file with mixed scope.

### Department Role

- Import single valid teacher proposal → accepted.
- Import batch with mixed disciplines → accepted with mixed-discipline warning.
- Import malformed JSON → blocked (`invalid_json`).
- Import non-`.cml` file → blocked (`not_recognizable`).
- Import `teacher_proposal` as `department_outcome` file → blocked (`wrong_type`).
- Import missing `schemaVersion` → accepted with `legacy_version` warning.
- Import unsupported `schemaVersion` (`"2.0"`) → blocked (`unsupported_schema`).
- Import duplicate file → accepted with `duplicate` warning.
- Export `department_outcome` from imported proposals → valid file.

### Referent Role

- Import valid `department_outcome` → accepted.
- Import outcome with empty handling → accepted, mapped to `senza_esito`.
- Import outcome with discipline mismatch → accepted with `discipline_mismatch` warning.
- Import oversized file → blocked (`too_large`).
- Export Markdown report from imported outcomes → non-empty report produced.

### Example Files

All examples in `docs/04_user/esempi_cml/` must pass as valid input without modification.

### Pass Criteria

- All blocking errors from Section 13.1 detected and reported.
- All warnings from Section 13.2 detected and surfaced.
- No example file is unexpectedly blocked or warned.
- Mixed-discipline batches aggregate and render correctly.
- Referent Markdown export produces complete content from valid outcomes.

## 8. Scope Confirmation

- **Docs-only**: confirmed. No runtime, schema, export/import, content, validator, shape-test, service-worker, manifest, or dependency changes.
- **No deploy**: confirmed.
- **No push**: confirmed.
- **No secrets**: confirmed.

## 9. Meta

| Property     | Value                                                               |
| ------------ | ------------------------------------------------------------------- |
| Start commit | `32a724e`                                                           |
| Final commit | `bb9d0f5`                                                           |
| Verdict      | `CML_199_CML_V1_SCHEMA_VERSIONING_AND_COMPATIBILITY_CONTRACT_READY` |
