# CML-198 - CML Schema and Export/Import Audit

## 1. Baseline

| Item                   | Value           |
| ---------------------- | --------------- |
| Repo                   | `curmanlight`   |
| Branch                 | `main`          |
| Start commit           | `1b533c1`       |
| `origin/main` at start | `1b533c1`       |
| Working tree at start  | Clean           |
| Slice type             | Docs-only audit |
| Deploy                 | None            |
| Push                   | None            |
| Secrets                | None            |

Stable baseline preserved: public runtime 14/14 live, normalized data 14/14, runtime map 14/14, validator 14/14 PASS, shape test 14/14 PASS, hash smoke 14/14 PASS.

## 2. Files Inspected

Runtime and examples:

- `_published_snapshot/netlify-current/index.html`
- `docs/04_user/esempi_cml/esempio_proposta_docente_tecnologia.cml`
- `docs/04_user/esempi_cml/esempio_proposta_docente_italiano.cml`
- `docs/04_user/esempi_cml/esempio_esito_dipartimento_tecnologia.cml`
- `docs/04_user/esempi_cml/esempio_esito_dipartimento_italiano.cml`

Execution and report history:

- `docs/03_execution/CML-018.md` through `docs/03_execution/CML-024.md`
- `report/CML-018_simple_drive_handoff_workflow_contract.md`
- `report/CML-019_teacher_proposal_cml_file_export.md`
- `report/CML-021_department_guided_teacher_proposal_import.md`
- `report/CML-022_department_outcome_cml_export.md`
- `report/CML-023_referent_validation_cml_import.md`
- `report/CML-024_cml_workflow_end_to_end_smoke_and_closure.md`
- `report/CML-040_demo_example_cml_package.md`
- `report/CML-041_department_cml_flow_runtime_gap_audit.md`
- `report/CML-042_department_cml_flow_minimal_runtime_fix.md`
- `report/CML-042A_department_cml_flow_end_to_end_smoke_with_examples.md`
- `docs/REPO-MOVELOG.md`

## 3. Export/Import Function Inventory

| Function                                             | Role       | Direction         | Output/Input                | Notes                                                                                          |
| ---------------------------------------------------- | ---------- | ----------------- | --------------------------- | ---------------------------------------------------------------------------------------------- |
| `downloadBlob(blob, filename)`                       | Shared     | Export helper     | Any local download          | Used for `.cml`, Markdown, other exports.                                                      |
| `buildTeacherCmlModel()`                             | Teacher    | Export builder    | `teacher_proposal` object   | Builds the teacher `.cml` model from runtime data and decisions.                               |
| `exportTeacherCml()`                                 | Teacher    | Export            | `.cml` JSON file            | Downloads `proposta_docente_<discipline>_<date>.cml`.                                          |
| `uploadTeacherCmlToDrive()`                          | Teacher    | Optional handoff  | JSON payload for endpoint   | Uses same model; endpoint is localStorage-configured and normally absent.                      |
| `validateTeacherCmlModel(model, fileName)`           | Department | Import validation | `teacher_proposal` model    | Checks extension, object shape, `fileType`, minimal required fields.                           |
| `parseTeacherCmlText(text, fileName)`                | Department | Import parser     | Text to model               | `JSON.parse`, then validator.                                                                  |
| `importTeacherCmlFiles(fileList)`                    | Department | Import reader     | Multiple local `.cml` files | Reads with `file.text()`, classifies invalid files, detects duplicates, normalizes proposals.  |
| `departmentCmlFingerprint(model)`                    | Department | Import support    | Duplicate fingerprint       | Uses discipline, `createdAt`, proposal id/discipline/text rows.                                |
| `normalizeDepartmentProposal(...)`                   | Department | Import support    | Internal proposal state     | Accepts fallback field names such as `testo`, `sintesi`, `fonti`, `evidenze`.                  |
| `setDepartmentDecision(idx, decision)`               | Department | Outcome prep      | In-memory handling value    | Captures one of four handling values, or empty.                                                |
| `buildDepartmentOutcomeCmlModel()`                   | Department | Export builder    | `department_outcome` object | Builds outcome from imported teacher proposals and selected handling values.                   |
| `exportDepartmentOutcomeCml()`                       | Department | Export            | `.cml` JSON file            | Downloads `esito_dipartimento_<date>.cml`.                                                     |
| `validateDepartmentOutcomeCmlModel(model, fileName)` | Referent   | Import validation | `department_outcome` model  | Checks extension, object shape, `fileType`, minimal required fields.                           |
| `parseDepartmentOutcomeCmlText(text, fileName)`      | Referent   | Import parser     | Text to model               | `JSON.parse`, then validator.                                                                  |
| `importDepartmentOutcomeCmlFiles(fileList)`          | Referent   | Import reader     | Multiple local `.cml` files | Reads with `file.text()`, classifies invalid files, detects duplicates, stores valid outcomes. |
| `downloadReferentGroupWorkReport()`                  | Referent   | Export            | Markdown report             | Not a `.cml` builder; produces `report_gruppo_curricolo_<date>.md` from imported outcomes.     |

## 4. Current `.cml` Schema Map

### 4.1 Teacher Proposal Export Structure

Current builder: `buildTeacherCmlModel()`.

Top-level fields:

| Field                     | Type       | Current value/source                          | Status                                                |
| ------------------------- | ---------- | --------------------------------------------- | ----------------------------------------------------- |
| `schemaVersion`           | string     | `"1.0"`                                       | Present, not enforced on import                       |
| `fileType`                | string     | `"teacher_proposal"`                          | Required by department import                         |
| `appName`                 | string     | `"CurManLight"`                               | Exported, not required                                |
| `createdAt`               | ISO string | Current datetime                              | Exported, not required; used in duplicate fingerprint |
| `role`                    | string     | `"teacher"`                                   | Exported, not required                                |
| `discipline`              | string     | `selDisc                                      |                                                       | userProfile.disciplina` | Required by import |
| `sourceContext`           | object     | Framework labels                              | Exported, not required                                |
| `counts`                  | object     | Total/ok/modifica/nuovo counts                | Required as object, inner fields not validated        |
| `proposals`               | array      | Pending non-`ok` items                        | Required as array, items weakly validated             |
| `checks`                  | object     | `hasProposals`, `hasDiscipline`, `hasSources` | Exported, not required                                |
| `humanValidationRequired` | boolean    | `true`                                        | Required by import                                    |

`proposals[]` fields:

| Field          | Type        | Source                        | Status                                                              |
| -------------- | ----------- | ----------------------------- | ------------------------------------------------------------------- |
| `id`           | string      | Runtime item id               | Implicitly important for outcome linkage; not required by validator |
| `discipline`   | string      | Current discipline key        | Used by normalization; falls back to top-level `discipline`         |
| `ordine`       | string      | Runtime item order            | Optional                                                            |
| `classe`       | string      | Runtime class or empty string | Optional                                                            |
| `type`         | string      | Derived from id includes `ob` | Optional and fragile derivation                                     |
| `status`       | string      | `modifica` / `nuovo`          | Optional in validation; used for grouping                           |
| `decisione`    | string/null | Runtime decision              | Optional; exported but not used by department outcome               |
| `testoAttuale` | string      | Current text                  | Optional                                                            |
| `proposta`     | string      | Proposed text                 | Semantically required, but only flagged as issue if missing         |
| `motivazione`  | string      | Motivation                    | Semantically expected, but not blocking                             |
| `fonte`        | string      | Source/evidence               | Semantically expected, but not blocking                             |

### 4.2 Department Outcome Export Structure

Current builder: `buildDepartmentOutcomeCmlModel()`.

Top-level fields:

| Field                     | Type       | Current value/source                            | Status                                                |
| ------------------------- | ---------- | ----------------------------------------------- | ----------------------------------------------------- |
| `schemaVersion`           | string     | `"1.0"`                                         | Present, not enforced on import                       |
| `fileType`                | string     | `"department_outcome"`                          | Required by referent import                           |
| `appName`                 | string     | `"CurManLight"`                                 | Exported, not required                                |
| `createdAt`               | ISO string | Current datetime                                | Exported, not required; used in duplicate fingerprint |
| `role`                    | string     | `"department"`                                  | Exported, not required                                |
| `discipline`              | string     | First discipline in sorted unique list          | Required by referent import                           |
| `disciplineWorkStatus`    | string     | `"completed"`                                   | Required as non-empty string                          |
| `disciplines`             | array      | Unique proposal disciplines                     | Exported, not required by referent import             |
| `proposalHandling`        | array      | Proposal id and handling rows                   | Required as array; item shape weakly validated        |
| `checks`                  | object     | `hasProposals`, `hasHandling`, `hasDisciplines` | Required as object, inner fields not validated        |
| `humanValidationRequired` | boolean    | `true`                                          | Required by referent import                           |

`proposalHandling[]` fields:

| Field        | Type        | Source                                                  | Status                                                        |
| ------------ | ----------- | ------------------------------------------------------- | ------------------------------------------------------------- |
| `proposalId` | string      | Imported teacher proposal id                            | Semantically required to link back; not required by validator |
| `handling`   | string/null | Dropdown decision                                       | May be empty/null; shown as `senza_esito` in summary          |
| `note`       | string      | Empty string in runtime builder; examples include notes | Optional and currently not captured by UI                     |

Supported handling values:

- `confluita_nella_sintesi`
- `riformulata_dal_dipartimento`
- `assorbita_in_altra_proposta`
- `da_chiarire`
- empty/null, interpreted as `senza_esito` by the referent view

### 4.3 Referent Validation/Import Structure

Referent import accepts only `department_outcome`.

Required by `validateDepartmentOutcomeCmlModel()`:

- filename ending `.cml`
- JSON object, not array
- `fileType === "department_outcome"`
- non-empty string `discipline`
- non-empty string `disciplineWorkStatus`
- array `proposalHandling`
- object `checks`
- `humanValidationRequired === true`

Not required:

- `schemaVersion`
- `appName`
- `createdAt`
- `role`
- `disciplines`
- valid handling enum values
- non-empty `proposalId`
- note content

## 5. Role/File-Type Matrix

| Actor/View                   | Exports                                          | Imports                  | Accepted `fileType`  | Wrong-type behavior                              |
| ---------------------------- | ------------------------------------------------ | ------------------------ | -------------------- | ------------------------------------------------ |
| Teacher                      | `teacher_proposal` `.cml`                        | None                     | N/A                  | N/A                                              |
| Department                   | `department_outcome` `.cml` after teacher import | Teacher proposal files   | `teacher_proposal`   | Rejected as not a CurManLight teacher proposal   |
| Referent                     | Markdown group-work report                       | Department outcome files | `department_outcome` | Rejected as not a CurManLight department outcome |
| Shared local download helper | Markdown, JSON, `.cml`                           | N/A                      | N/A                  | N/A                                              |

Mixed-role files are rejected by `fileType`. Mixed-discipline files are accepted and warned, not blocked.

## 6. Required/Optional/Implicit Field Table

| Field                           | Teacher proposal                         | Department outcome                       | Classification             | Risk                                                |
| ------------------------------- | ---------------------------------------- | ---------------------------------------- | -------------------------- | --------------------------------------------------- |
| `schemaVersion`                 | Exported                                 | Exported                                 | Undocumented/unenforced    | Version drift can pass silently                     |
| `fileType`                      | Required                                 | Required                                 | Required                   | Strong primary discriminator                        |
| `appName`                       | Optional                                 | Optional                                 | Optional                   | No current risk                                     |
| `createdAt`                     | Optional but duplicate fingerprint input | Optional but duplicate fingerprint input | Implicit                   | Missing value changes duplicate behavior            |
| `role`                          | Optional                                 | Optional                                 | Duplicated with `fileType` | Wrong role can pass if `fileType` matches           |
| `discipline`                    | Required                                 | Required                                 | Required                   | Department outcome uses first discipline when mixed |
| `disciplines`                   | N/A                                      | Exported but not required                | Optional/duplicated        | Divergence with singular `discipline` possible      |
| `sourceContext`                 | Exported only                            | N/A                                      | Optional                   | No import guarantee                                 |
| `counts`                        | Required object                          | N/A                                      | Required shape only        | Counts can be stale or wrong                        |
| `proposals`                     | Required array                           | N/A                                      | Required shape only        | Item content weakly validated                       |
| `proposalHandling`              | N/A                                      | Required array                           | Required shape only        | Item content weakly validated                       |
| `checks`                        | Exported, not required                   | Required object                          | Inconsistent               | Boolean checks can be stale or contradictory        |
| `humanValidationRequired`       | Required true                            | Required true                            | Required                   | Good safety marker                                  |
| `proposals[].id`                | Not required                             | Referenced by outcome                    | Implicit required          | Missing id breaks traceability                      |
| `proposals[].proposta`          | Not required                             | N/A                                      | Semantically required      | Missing text becomes warning, not block             |
| `proposals[].motivazione`       | Not required                             | N/A                                      | Semantically expected      | Missing motivation only chip/warning                |
| `proposals[].fonte`             | Not required                             | N/A                                      | Semantically expected      | Missing evidence only chip/warning                  |
| `proposalHandling[].proposalId` | N/A                                      | Not required                             | Implicit required          | Missing id loses link to proposal                   |
| `proposalHandling[].handling`   | N/A                                      | Not required                             | Optional                   | Empty values become `senza_esito`                   |
| `proposalHandling[].note`       | N/A                                      | Optional                                 | Optional                   | UI builder emits empty notes only                   |

## 7. Versioning Status

Current status:

- Both `.cml` structures export `schemaVersion: "1.0"`.
- Demo examples also use `"1.0"`.
- Import validators do not require `schemaVersion`.
- Import validators do not reject unsupported versions.
- There is no central schema file, migration policy, compatibility table, or deprecation rule.

Conclusion: version labels exist, but versioning is not active contract enforcement.

## 8. Malformed, Wrong-Type, Mixed-Role, and Duplicate Handling

| Case                                    | Current behavior                                           | Gap                                                        |
| --------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| Non-`.cml` file                         | Rejected before parse                                      | Message generic but understandable                         |
| Malformed JSON                          | Rejected with JSON invalid message                         | No line/field detail                                       |
| Top-level array/null                    | Rejected as not recognizable                               | Generic                                                    |
| Wrong `fileType`                        | Rejected by role-specific importer                         | Generic same-family message                                |
| Missing top-level required fields       | Rejected as missing information                            | Missing fields listed in row detail, not always actionable |
| Missing proposal text/motivation/source | Accepted; proposal chip warns                              | Semantically incomplete files can proceed                  |
| Mixed disciplines in one import batch   | Accepted; warning shown                                    | No per-discipline isolation policy                         |
| Mixed disciplines in department outcome | Exported with `discipline` first plus `disciplines[]`      | Singular/plural divergence risk                            |
| Duplicate teacher files                 | Accepted; duplicate flagged in file row and proposal issue | Duplicate proposals still enter state                      |
| Duplicate department outcomes           | Accepted into outcomes; file flagged duplicate             | Duplicate outcomes still counted                           |
| Unknown extra fields                    | Accepted                                                   | Compatibility friendly, but no reserved namespace          |
| Unsupported schema version              | Accepted because not checked                               | Backward/forward compatibility undefined                   |

## 9. Privacy and Security Risks

Current strengths:

- Import is local using file input and `file.text()`.
- No network call during import.
- No Drive API or Apps Script in current local import.
- Imported values rendered through `escapeHtml()` before `innerHTML`.
- State is in memory for imports; no permanent import persistence was found.

Risks:

- `uploadTeacherCmlToDrive()` can POST to a localStorage-configured endpoint if present; there is no visible endpoint allowlist in the audited code.
- `.cml` files can contain personal or sensitive notes in proposal text, motivation, source, and outcome notes.
- User-facing copy does not clearly warn that `.cml` files should not include student personal data or confidential staff notes.
- File content is trusted after minimal shape validation; oversized files or very large arrays have no documented limits.

## 10. Risks and Gaps by Severity

| Severity | Risk                                                                  | Type                 | Evidence                                                                         | Recommendation                                                      |
| -------- | --------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| P0       | None identified                                                       | N/A                  | No immediate exploit or data-loss blocker found in current local workflow        | N/A                                                                 |
| P1       | `schemaVersion` exported but not required or enforced                 | Schema/compatibility | Validators omit version checks                                                   | CML-199 should define accepted versions before runtime changes      |
| P1       | Weak semantic validation for arrays                                   | Validation/schema    | `proposals[]` and `proposalHandling[]` item fields are not structurally enforced | Define item-level contract and CML-200 validator scope              |
| P1       | Duplicate imports are warning-only but still counted                  | UX/validation        | Duplicate teacher proposals/outcomes enter state                                 | Decide duplicate policy in contract                                 |
| P1       | Singular `discipline` plus plural `disciplines` can diverge           | Schema/compatibility | Department outcome exports first discipline and full list                        | Define single source of truth                                       |
| P2       | `createdAt` is optional but used in duplicate fingerprints            | Schema/validation    | Missing or changed timestamps alter duplicate detection                          | Specify identity/fingerprint fields                                 |
| P2       | Wrong-version files silently accepted                                 | Compatibility        | No `schemaVersion` check                                                         | Define version fallback/reject behavior                             |
| P2       | UI messages are generic                                               | UX                   | Missing fields and wrong types are not fully instructional                       | Define message catalog and remediation hints                        |
| P2       | Empty `handling` is allowed and later becomes `senza_esito`           | Validation/UX        | No explicit export block when decisions are missing                              | Decide whether incomplete outcomes are valid draft or invalid final |
| P2       | Optional Drive endpoint lacks documented trust boundary               | Privacy/security     | Endpoint can come from localStorage                                              | Document or constrain before enabling real upload                   |
| P2       | No size/array limits documented                                       | Security/UX          | Import reads arbitrary local JSON                                                | Define practical limits                                             |
| P3       | `role` duplicates `fileType` but is not checked                       | Schema               | Role can be wrong while fileType passes                                          | Mark role informational or enforce it                               |
| P3       | `checks` can become stale                                             | Schema/validation    | Exported booleans are not recomputed by import                                   | Treat checks as advisory or recompute                               |
| P3       | `type` derivation for teacher proposal is fragile                     | Schema               | Derived from id includes `ob`                                                    | Contract should define enum source                                  |
| P3       | Outcome notes are in examples but runtime builder emits empty strings | UX/schema            | Department UI has no note capture                                                | Decide if note is future optional field                             |

## 11. Existing Coverage and Gaps

Known coverage from historical reports:

- CML-021 checked valid teacher proposal, duplicate, mixed discipline, wrong type, invalid JSON, missing minimum schema, and non-`.cml`.
- CML-023 checked valid department outcome, wrong type, invalid JSON, partial schema, `da_chiarire`, `senza_esito`, safe rendering, and no network/persistence.
- CML-024 closed an end-to-end workflow smoke.
- CML-041 found the prior department outcome compatibility gap.
- CML-042 fixed the missing singular `discipline` and handling value mismatch.
- CML-042A confirmed the examples end-to-end.

Coverage gaps:

- No formal schema validator test tied to a machine-readable contract.
- No explicit test for missing/unsupported `schemaVersion`.
- No test for unknown future version with compatible fields.
- No item-level tests for malformed `proposals[]` rows or `proposalHandling[]` rows.
- No deterministic duplicate policy test beyond warning detection.
- No test for singular/plural discipline divergence.
- No file-size or large-array stress test.
- No contract test ensuring example `.cml` files remain compatible.
- No message catalog test for user-facing import errors.

## 12. Recommended Minimal CML-199 Contract Scope

CML-199 should be docs/contract-first, still avoiding runtime changes:

1. Define `CurManLight .cml v1.0` as a formal contract with two file types: `teacher_proposal` and `department_outcome`.
2. Require `schemaVersion`, `fileType`, `appName`, `createdAt`, `humanValidationRequired`, and role-specific required fields.
3. Define item-level required fields: teacher proposal item `id`, `discipline`, `status`, `proposta`; department handling item `proposalId`, `handling`.
4. Decide which fields are advisory: `counts`, `checks`, `role`, `sourceContext`, `note`.
5. Define unknown-field policy: preserve/ignore but never execute.
6. Define version policy: accept exact `1.0`; reject missing/unsupported version or accept missing only as legacy compatibility, explicitly documented.
7. Define duplicate policy: warning-only with inclusion, or warning plus exclusion.
8. Define mixed-discipline policy: allowed batch, but department outcome must either be one discipline or explicitly multi-discipline.
9. Define user-facing error taxonomy: not `.cml`, invalid JSON, wrong file type/role, unsupported schema version, missing required fields, incomplete semantic content, duplicate candidate.
10. Define privacy guidance: no student personal data, no credentials or secrets, no confidential staff notes, local-only import statement.

## 13. Docs-Only Confirmation

CML-198 only documents the audit. It does not modify runtime source, export/import behavior, `.cml` schemas, validators, tests, service worker, manifest, dependencies, content/curriculum data, or deployment configuration.

No deploy. No secrets. No push.

Verdict: `CML_198_CML_SCHEMA_AND_EXPORT_IMPORT_AUDIT_READY`
