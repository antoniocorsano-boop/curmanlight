# CML-525D — Stable Curriculum Mapping Identifiers and Target Registry

## Objective

Define stable identifiers and a read-only target registry for assisted curriculum mappings before runtime implementation.

## Outputs

- `docs/02_system/STABLE-CURRICULUM-MAPPING-IDENTIFIERS-AND-TARGET-REGISTRY.md`
- `docs/03_execution/CML-525D.md`

## Decisions

- labels, array positions and free-text headings are not identifiers;
- all mappings target immutable registry identifiers;
- unresolved and ambiguous mappings fail closed;
- generated content cannot create canonical targets;
- curriculum and registry versions are recorded on every mapping;
- deprecated identifiers remain resolvable through explicit relations;
- canonical changes never silently retarget existing suggestions;
- deterministic sidecar generation is allowed while identifiers are not embedded in every canonical file;
- fuzzy matching may suggest candidates but never resolve automatically;
- canonical data remain read-only;
- human validation remains mandatory.

## Registry scope

The contract covers:

- disciplines;
- school orders;
- curriculum versions;
- nuclei;
- units or sections;
- controlled fields;
- canonical statements;
- composite targets;
- aliases, deprecation and supersession;
- target resolution and integrity checks;
- migration and stale-mapping handling.

## Pilot boundary

The first fixture is limited to a controlled Tecnologia subset for scuola secondaria di primo grado and must include exact, ambiguous, deprecated and stale mapping cases.

## Invariants

- historical runtime unchanged;
- React unchanged;
- canonical curriculum data unchanged;
- current `.cml` schema unchanged;
- no backend, authentication or telemetry;
- no automatic canonical promotion;
- no personal or student data.

## Next slice

CML-525E — Assisted Draft Persistence, Recovery and Validator Fixtures.

## Verdict

```text
CML_525D_STABLE_CURRICULUM_MAPPING_IDENTIFIERS_AND_TARGET_REGISTRY_READY_FOR_REVIEW_DOCS_ONLY
```
