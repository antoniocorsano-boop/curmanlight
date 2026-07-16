# CML-525C — Assisted Draft Schema and Review State Machine

## Objective

Define the logical package schema and review-state machine for assisted curriculum population before any runtime implementation.

## Outputs

- `docs/02_system/ASSISTED-DRAFT-SCHEMA-AND-REVIEW-STATE-MACHINE.md`
- `docs/03_execution/CML-525C.md`

## Decisions

- assisted output remains non-canonical;
- `humanValidationRequired: true` and `canonicalWriteAllowed: false` are mandatory;
- generation, Teacher, Department, Referent and institutional states are separated;
- forbidden transitions fail closed;
- confidence and source authority never imply approval;
- every state change creates an immutable audit event;
- blocking conflicts prevent export to the next role;
- recovery preserves source evidence and completed human decisions;
- conversion to `teacher_proposal` is explicit and preserves provenance;
- canonical promotion remains outside this package and outside this slice.

## Validation perimeter

Docs-only review of:

- package invariants;
- suggestion identity and revisioning;
- role transition matrix;
- decision records;
- conflict records;
- import/export boundaries;
- persistence and recovery;
- accessibility requirements;
- pre-runtime test fixtures.

## Invariants

- historical runtime unchanged;
- React unchanged;
- canonical curriculum data unchanged;
- current `.cml` schema unchanged;
- no backend, authentication or telemetry;
- no personal or student data;
- human validation remains mandatory.

## Next slice

CML-525D — Stable Curriculum Mapping Identifiers and Target Registry.

## Verdict

```text
CML_525C_ASSISTED_DRAFT_SCHEMA_AND_REVIEW_STATE_MACHINE_READY_FOR_REVIEW_DOCS_ONLY
```
