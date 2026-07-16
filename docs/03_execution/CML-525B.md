# CML-525B — Source Document and Provenance Schema

## Objective

Define the operational contract for source documents used by assisted curriculum population, including Ministry publications, school websites, institutional acts, department-approved documents, teacher working notes and structured CurManLight files.

## Result

Created `docs/02_system/SOURCE-DOCUMENT-AND-PROVENANCE-SCHEMA.md`.

The contract defines source classes, authority hierarchy, stable identity, URL and local-copy handling, hashes, versioning, supersession, change detection, evidence locators, provenance links, conflict rules, privacy exclusions, source registry requirements and the controlled Tecnologia pilot source set.

## Boundaries

- docs-only;
- no runtime or React changes;
- no canonical curriculum change;
- no `.cml` schema change;
- no backend, crawling, authentication or telemetry;
- no student personal data;
- human validation mandatory.

## Next step

CML-525C — Assisted Draft Schema and Review State Machine.

## Verdict

`CML_525B_SOURCE_DOCUMENT_AND_PROVENANCE_SCHEMA_READY_FOR_REVIEW_DOCS_ONLY`
