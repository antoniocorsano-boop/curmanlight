# CurManLight .cml v1.0 Schema Versioning and Compatibility Contract

## 1. Purpose

This document defines the formal contract for `.cml` (CurManLight Markup Language) file exchange between teachers, departments, and referents. It establishes schema family, file types, field classifications, version policy, compatibility rules, duplicate handling, mixed-discipline behavior, item-level validation expectations, malformed-file handling, size limits, privacy guidance, error taxonomy, and downstream implementation scope.

This contract is docs-only. It does not modify runtime behavior, export/import logic, validators, or content. It is the reference that CML-200 and CML-201 will implement and verify.

## 2. Schema Family

### 2.1 Identifier

The current supported schema family is **`.cml v1.0`**.

All `.cml` files exchanged within the CurManLight workflow must carry an explicit `schemaVersion` field with the exact string value `"1.0"`. This is the sole supported version in this contract.

### 2.2 Accepted File Types

Only two `fileType` values are accepted:

| fileType | Description |
|---|---|
| `teacher_proposal` | Exported by a teacher; imported by a department |
| `department_outcome` | Exported by a department; imported by a referent |

No other `fileType` is valid under this contract. Referents do not export `.cml`; they export Markdown reports.

## 3. Role / File-Type Matrix

| Actor | Action | Accepted fileType | Output |
|---|---|---|---|
| Teacher | Export | `teacher_proposal` | `.cml` JSON file |
| Department | Import | `teacher_proposal` | Local state only |
| Department | Export | `department_outcome` | `.cml` JSON file |
| Referent | Import | `department_outcome` | Local state only |
| Referent | Export | N/A | Markdown report (not `.cml`) |

Mixed-role files are rejected at the `fileType` gate. A department `.cml` cannot be imported as a teacher proposal, and vice versa.

## 4. Field Classifications

### 4.1 General Definitions

| Classification | Meaning |
|---|---|
| Required | Must be present and structurally valid; otherwise the file is blocked |
| Optional | May be absent; absence is informational, not blocking |
| Derived | Computed by the importer from other fields; may be absent or ignored on export |
| Advisory | Informational only; not validated and not required for processing |

### 4.2 Top-Level Fields — teacher_proposal

| Field | Type | Classification | Notes |
|---|---|---|---|
| `schemaVersion` | string | Required | Must be exact `"1.0"` |
| `fileType` | string | Required | Must be exact `"teacher_proposal"` |
| `appName` | string | Optional | Informational identity |
| `createdAt` | ISO 8601 string | Optional | Used in duplicate fingerprinting |
| `role` | string | Advisory | Must be `"teacher"` if present; otherwise ignored |
| `discipline` | string | Required | Non-empty discipline key |
| `sourceContext` | object | Optional | Framework labels |
| `counts` | object | Required | Must be a non-null object with `total`, `ok`, `modifica`, `nuovo` as numbers |
| `proposals` | array | Required | Must be a non-null array of proposal objects |
| `checks` | object | Advisory | Exported booleans; not validated on import |
| `humanValidationRequired` | boolean | Required | Must be `true` |

### 4.3 Proposal Item Fields — teacher_proposal.proposals[]

| Field | Type | Classification | Notes |
|---|---|---|---|
| `id` | string | Required | Non-empty; links to department outcome |
| `discipline` | string | Required | Non-empty; falls back to top-level `discipline` if absent |
| `ordine` | string | Optional | Order/section label |
| `classe` | string | Optional | Class label or empty |
| `type` | string | Optional | `"traguardo"` or `"obiettivo"` |
| `status` | string | Optional | `"modifica"` or `"nuovo"` |
| `decisione` | string \| null | Optional | Exported teacher decision; not consumed by department |
| `testoAttuale` | string | Optional | Current text |
| `proposta` | string | Required | Non-empty proposed text |
| `motivazione` | string | Optional | Motivation or explanation |
| `fonte` | string | Optional | Source/evidence string |

### 4.4 Top-Level Fields — department_outcome

| Field | Type | Classification | Notes |
|---|---|---|---|
| `schemaVersion` | string | Required | Must be exact `"1.0"` |
| `fileType` | string | Required | Must be exact `"department_outcome"` |
| `appName` | string | Optional | Informational identity |
| `createdAt` | ISO 8601 string | Optional | Used in duplicate fingerprinting |
| `role` | string | Advisory | Must be `"department"` if present; otherwise ignored |
| `discipline` | string | Required | Non-empty; primary discipline of the outcome |
| `disciplineWorkStatus` | string | Required | Non-empty; expected `"completed"` |
| `disciplines` | array | Optional | Array of unique discipline keys present in the outcome |
| `proposalHandling` | array | Required | Must be a non-null array of handling objects |
| `checks` | object | Advisory | Exported booleans; not validated on import |
| `humanValidationRequired` | boolean | Required | Must be `true` |

### 4.5 Proposal Handling Item Fields — department_outcome.proposalHandling[]

| Field | Type | Classification | Notes |
|---|---|---|---|
| `proposalId` | string | Required | Non-empty; must link to an imported `teacher_proposal` `id` |
| `handling` | string \| null | Optional | One of the accepted handling values, or empty/null |
| `note` | string | Optional | Outcome notes |

Accepted `handling` enum values:

- `confluita_nella_sintesi`
- `riformulata_dal_dipartimento`
- `assorbita_in_altra_proposta`
- `da_chiarire`
- Empty string or `null` (interpreted as `senza_esito` by the referent view)

## 5. Schema Version Policy

### 5.1 Supported Version

The exact string `"1.0"` is the only supported version under this contract.

### 5.2 Missing schemaVersion

Files missing `schemaVersion` are accepted as **legacy v1.0 compatibility** with a warning. They are not blocked, because all known exported `.cml` files from CurManLight to date have used `"1.0"` or omitted the field during early transitions. The importer should note the absence and proceed.

### 5.3 Unsupported Future Version

If `schemaVersion` is present and is not `"1.0"`, the file must be **blocked** with an unsupported-schema error. Downstream versions may introduce breaking changes; forward compatibility is not promised without an explicit forward-compatibility clause in a future contract.

### 5.4 Malformed Version Value

If `schemaVersion` is present but is not a string (e.g., a number, object, or array), the file must be **blocked** as structurally malformed.

### 5.5 Backward Compatibility for Already Exported v1.0 Files

All `.cml` files exported by CurManLight prior to this contract that carry `schemaVersion: "1.0"` (or omit it) are considered **backward compatible** with this contract. Existing example files, stored files, and handoff files produced by the current runtime are valid input under this contract.

No migration action is required for existing v1.0 files.

## 6. Duplicate Policy

### 6.1 Duplicate File Identity

Two files are considered duplicates when their content fingerprint matches. The fingerprint is computed as:

- Teacher proposal: `JSON.stringify([model.discipline, model.createdAt, proposals-rows])`
- Department outcome: `JSON.stringify([model.discipline, model.createdAt, proposalHandling-rows])`

where proposals-rows are `[id, discipline, test]` and proposalHandling-rows are `[proposalId, handling]`.

### 6.2 Duplicate Proposal ID

Within a single import batch, duplicate `proposal.id` values imported from different files are treated as **warning candidates** (not blocked). Each proposal enters state but is flagged with a `"Duplicato probabile"` issue chip.

### 6.3 Duplicate Department Outcome ID or Handling ID

Duplicate `proposalHandling[].proposalId` entries within a single `department_outcome` file are **blocked** as structurally invalid if they reference handling to the same proposal twice without a clear composite key (e.g., different discipline scoping). If the file contains a single handling per unique proposalId, it is valid.

Duplicate `department_outcome` files across import batches are flagged as duplicates but still enter state, following the same warning-only pattern as teacher proposals.

### 6.4 Same Discipline Repeated Across Files

Repeated discipline in separate files within the same import batch is **allowed**. The department aggregation groups proposals by discipline and renders them in per-discipline sections.

## 7. Mixed-Discipline Policy

### 7.1 Allowed with Warning

Mixed-discipline batches are **allowed** for teacher proposal import. The department importer groups proposals by discipline and shows a warning chip that disciplines are mixed. This is the standard batch workflow when a teacher manages multiple disciplines or when multiple teachers submit across disciplines.

### 7.2 Blocked Scenarios

Mixed-discipline is **blocked** only when the file itself is structurally incoherent under its declared `discipline` and the individual proposal rows contradict it without a valid `disciplines[]` array in department outcomes. Specifically:

- A `teacher_proposal` with top-level `discipline: "A"` but every `proposals[].discipline` is `"B"` is flagged as inconsistent but not blocked; the importer falls back to the row-level discipline.
- A `department_outcome` with an empty `discipline` field when `disciplines` is also empty or absent is **blocked** as missing required data.

### 7.3 Single-Discipline Workflow Behavior

When all proposals in a batch share the same discipline, the UI neutralizes the mixed-discipline warning and groups output under a single discipline heading. This is the common and expected path.

### 7.4 Multi-Discipline Package Behavior

If a future multi-discipline package format is introduced, it must use `department_outcome` with an explicit `disciplines[]` array and per-discipline handling scopes. This contract does not yet define that format; any future extension must preserve compatibility with single-discipline `teacher_proposal` and `department_outcome` files.

## 8. discipline / disciplines Consistency Rule

The singular `discipline` field on both file types is the **primary discipline identifier**.

For `department_outcome`, the `disciplines[]` array is a **derived summary** of all unique disciplines present in `proposalHandling` rows. It must be consistent with `discipline` as follows:

- If `disciplines.length === 1`, `discipline` must equal `disciplines[0]`.
- If `disciplines.length > 1`, `discipline` must equal the first element of the sorted `disciplines` array (this matches the current runtime export behavior).
- If `disciplines` is absent or empty but `discipline` is present and non-empty, the importer infers a single-discipline outcome from `discipline` and does not block.

Mismatches between `discipline` and `disciplines[0]` when `disciplines` is present are **warnings**, not blocks.

## 9. Item-Level Validation Expectations

### 9.1 Proposal Item Validation (teacher_proposal.proposals[])

| Field | Block on absence/invalid? | Notes |
|---|---|---|
| `id` | Warning | Missing `id` breaks outcome linkage but does not block import |
| `proposta` | Warning | Missing text makes the proposal semantically empty but still enters state |
| `motivazione` | Warning | Missing motivation is flagged as a chip issue |
| `fonte` | Warning | Missing source/evidence is flagged as a chip issue |
| `discipline` | Warning per item | Falls back to top-level `discipline` |

Item-level validation failures do **not** block the entire file if the top-level schema is valid. They produce per-item issue chips in the department UI.

### 9.2 Handling Item Validation (department_outcome.proposalHandling[])

| Field | Block on absence/invalid? | Notes |
|---|---|---|
| `proposalId` | Warning | Missing `proposalId` loses traceability but does not block |
| `handling` | Warning | Empty/null is treated as `senza_esito` |
| `note` | Not validated | Optional and advisory |

### 9.3 Status/Decision Fields

`status` in teacher proposals (`modifica` / `nuovo`) and `handling` in department outcomes are semantically important but not structurally enforced as enums during import. Unknown enum values are treated as free strings and displayed literally.

### 9.4 Source/Context Fields

`sourceContext` on teacher proposals is exported but not required or validated on import. It is advisory metadata.

## 10. Malformed-File and Wrong-Type Handling

### 10.1 File-Level Classification Codes

| Code | Condition | Treatment |
|---|---|---|
| `not_recognizable` | Extension not `.cml`, or top-level is array/null/not-object | Blocked; not counted as valid |
| `invalid_json` | `JSON.parse` throws | Blocked; not counted as valid |
| `wrong_type` | `fileType` does not match expected type for importer | Blocked; not counted as valid |
| `missing_data` | Required top-level fields absent or structurally invalid | Blocked; missing fields listed |
| `valid` | Passes all structural checks | Accepted; item-level issues may produce warnings |

### 10.2 Malformed JSON Details

Parsing errors are reported with a generic "JSON non valido" message. Line-level error details from `JSON.parse` are not surfaced to the user to avoid exposing raw file structure, but the file is clearly marked as structurally malformed.

### 10.3 Wrong-Type Handling

Wrong-type files are rejected by the importer role:

- Department importer rejects `fileType !== "teacher_proposal"` with the code `wrong_type`.
- Referent importer rejects `fileType !== "department_outcome"` with the code `wrong_type`.

The same user-facing message template is used for both: `"Questo file non è una ... CurManLight."` (substituted with the expected artifact name).

## 11. Import Size and Large-Array Policy

### 11.1 Practical Limits

Import is local-first and runs in the browser. There are no server-side quotas, but practical limits apply:

- **File size**: Individual `.cml` files above **5 MB** should trigger a size warning. Files above **20 MB** must be blocked as too large for safe browser parsing.
- **Array size**: `proposals[]` and `proposalHandling[]` arrays above **500 items** should trigger a performance warning. Arrays above **2,000 items** must be blocked.
- **String field size**: Individual text fields (`proposta`, `motivazione`, `fonte`, `note`) above **100,000 characters** (approx. 100 KB) should be truncated with a warning to prevent UI rendering issues.

### 11.2 Rationale

CurManLight operates without a backend. All import data lives in browser memory. Oversized imports can freeze the UI or exhaust memory on average consumer devices. These limits preserve the local-first, no-dependency constraint.

## 12. Privacy and Security Guidance

### 12.1 No Personal Data Required

`.cml` files must not contain student personal data (names, dates of birth, health information, grades, or identifying student codes). The schema fields are designed for pedagogical content (text, motivation, sources), not personal records.

### 12.2 No Credentials

`.cml` files must not contain API keys, tokens, passwords, OAuth secrets, or any credential material. If a Drive upload endpoint is configured, endpoint configuration lives in `localStorage` and is never written into the `.cml` payload.

### 12.3 Drive Endpoint Trust Boundary

The optional Drive upload function (`uploadTeacherCmlToDrive`) posts to a `localStorage`-configured endpoint. This endpoint:

- Is not validated against an allowlist in the current runtime.
- Must be considered **untrusted** unless explicitly configured by the school IT administrator.
- Should not be assumed to be a Google Drive endpoint by default.

Future tightening: an explicit endpoint pattern allowlist (e.g., matching `https://[school-domain]/api/cml-upload`) should be added before the feature is enabled in production.

### 12.4 Local / Manual Fallback

If the Drive endpoint is absent, misconfigured, or untrusted, the workflow falls back to local file download and manual upload. This fallback is the recommended production path until the endpoint trust boundary is formally constrained.

## 13. User-Facing Error Taxonomy

### 13.1 Blocking Errors

A blocking error prevents the file from entering import state. The user sees the file row marked invalid and the file excluded from proposal aggregation.

| Code | Condition | User-facing Message |
|---|---|---|
| `not_recognizable` | Not `.cml`, not object, or top-level array/null | `"Questo file non è una [tipo] CurManLight."` |
| `invalid_json` | Malformed JSON | `"Il file contiene JSON non valido."` |
| `wrong_type` | `fileType` mismatch | `"Questo file non è una [tipo] CurManLight."` |
| `missing_data` | Required top-level fields absent or structurally invalid | `"Il file è leggibile, ma mancano alcune informazioni."` + missing field list |
| `unsupported_schema` | `schemaVersion` present and not `"1.0"` | `"Versione schema non supportata."` |
| `too_large` | File or array exceeds documented limits | `"File troppo grande per l'importazione locale."` |

### 13.2 Warnings

A warning marks the file or item as needing attention but allows processing to continue.

| Code | Condition | User-facing Indication |
|---|---|---|
| `legacy_version` | `schemaVersion` missing | Chips or summary note: `"Versione schema non indicata; accettato come compatibile."` |
| `missing_semantic_field` | `proposta`, `motivazione`, or `fonte` empty in an item | Per-item issue chip: `"Senza testo"`, `"Senza motivazione"`, `"Senza fonte"` |
| `discipline_mismatch` | `discipline` and `disciplines[0]` diverge | Summary warning: mixed discipline noted |
| `duplicate` | File or proposal fingerprint matches a prior file | Chip: `"Duplicato probabile"` |
| `mixed_discipline` | Batch contains multiple disciplines | Summary warning: `"Sono presenti discipline diverse: il dato è segnalato ma non blocca la lettura."` |
| `unknown_fields` | Extra top-level or item-level fields present | Not surfaced; preserved for forward compatibility |

### 13.3 Informational Notices

Informational notices do not block or warn; they provide context.

| Condition | Example |
|---|---|
| Successful import | `"Proposte importate. Il dipartimento può ora leggerle e valutarle."` |
| No valid files | `"Nessun file .cml valido importato"` |
| Drive endpoint absent | `"Invio al Drive non ancora configurato. Puoi scaricare il file proposta .cml e caricarlo manualmente..."` |

### 13.4 Recovery Guidance

Every blocking or warning result should include actionable guidance or allow the user to retry:

- For `not_recognizable` / `wrong_type`: confirm the file is the correct export for the current role.
- For `invalid_json`: regenerate or export the `.cml` from CurManLight.
- For `missing_data`: identify the missing fields from the listed array and add them.
- For `unsupported_schema`: check if a newer CurManLight export is available.
- For `too_large`: split proposals into smaller discipline-scoped files.
- For semantic warnings: edit the proposal text, motivation, or source in the teacher view and re-export.

## 14. Unknown-Field and Reserved-Namespace Policy

CurManLight importers use `fileType` as the primary discriminator, not field presence. Unknown or future fields must be:

1. **Preserved** in the parsed model (not stripped).
2. **Ignored** by import processing (not executed).
3. **Forward-compatible**: a future schema version may introduce new fields; old importers should not reject files because of extra fields.

No reserved namespace prefix is enforced at this version. Future versions may reserve `_cmlMeta` or similar nested scopes.

## 15. CML-200 Implementation Scope

CML-200 is the validator/error-handling hardening slice. Based on this contract, its implementation scope is:

1. Enforce `schemaVersion === "1.0"` on both import paths; block unsupported or malformed values; warn-only for missing.
2. Add item-level structural checks:
   - `proposals[].id` non-empty string → warning
   - `proposals[].proposta` non-empty string → warning
   - `proposals[].motivazione` non-empty → warning
   - `proposals[].fonte` non-empty → warning
   - `proposalHandling[].proposalId` non-empty → warning
3. Implement duplicate detection with the fingerprint strategies defined in Section 6.
4. Implement size/array limits from Section 11 with user-facing warnings and blocks.
5. Enforce `discipline` / `disciplines` consistency rule from Section 8.
6. Replace generic missing-field messages with actionable recovery guidance from Section 13.
7. Ensure all unknown fields are preserved and not stripped.
8. Add structured `code` fields to all validation results for downstream formatting.

CML-200 is implementation-only. It does not change schema, file formats, or export behavior.

## 16. CML-201 End-to-End Smoke Scope

CML-201 is the end-to-end smoke test that verifies the complete `.cml` workflow across all three roles using the harded validators from CML-200. Its scope:

### 16.1 Roles Under Test

| Role | Action | Expected Outcome |
|---|---|---|
| Teacher | Export `teacher_proposal` for single discipline | Valid `.cml` produced |
| Teacher | Export `teacher_proposal` for multiple disciplines (multi-role teacher) | Valid `.cml` produced per discipline or mixed-discipline file with warning |
| Department | Import single valid teacher proposal | Accepted, no warnings |
| Department | Import batch with mixed disciplines | Accepted, mixed-discipline warning shown |
| Department | Import malformed JSON | Blocked with `invalid_json` |
| Department | Import wrong file type | Blocked with `wrong_type` |
| Department | Import missing `schemaVersion` | Accepted with `legacy_version` warning |
| Department | Import unsupported `schemaVersion` | Blocked with `unsupported_schema` |
| Department | Import duplicate file | Accepted with `duplicate` warning |
| Department | Export `department_outcome` | Valid `.cml` produced |
| Referent | Import single valid department outcome | Accepted, no warnings |
| Referent | Import file with empty `handling` | Accepted, mapped to `senza_esito` |
| Referent | Import file with discipline mismatch | Accepted with `discipline_mismatch` warning |
| Referent | Export Markdown report | Produced from imported outcomes |

### 16.2 Example Files

All existing example `.cml` files in `docs/04_user/esempi_cml/` must pass smoke as valid input for their respective importer roles without modification.

### 16.3 Pass Criteria

- All blocking errors from Section 13.1 are correctly detected and reported.
- All warnings from Section 13.2 are correctly detected and surfaced.
- No example file is blocked or produces unexpected warnings.
- Mixed-discipline batches aggregate correctly.
- Referent report generation produces non-empty Markdown from valid imported outcomes.

## 17. Contract Maintenance

This contract is versioned as **v1.0** and governed by the same `schemaVersion` semantics it defines. Future breaking changes require:

1. A new `schemaVersion` value (e.g., `"2.0"`).
2. A successor contract document.
3. A migration slice (e.g., CML-20x) that defines forward-compatible import behavior.
4. Preservation of backward compatibility for existing v1.0 files unless an explicit deprecation policy is added.

Advisory fields (`role`, `checks`) may change meaning or be removed in a future contract without requiring a schema version bump, because they are not required for structural validity. Required fields and file types require a version bump for removal or type changes.
