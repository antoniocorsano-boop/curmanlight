# CML-525A — Assisted Curriculum Population Contract

## Objective

Define the product and governance contract for assisted curriculum population before runtime implementation.

## Decision

CurManLight must not autonomously edit canonical curriculum data. Trusted sources may be parsed into structured suggestions, but every suggestion remains non-canonical and requires explicit Teacher, Department and Referent review.

## Output

Created `docs/02_system/ASSISTED-CURRICULUM-POPULATION-CONTRACT.md` covering roles, inputs, processing, provenance, confidence, review states, visual comparison, canonical protection, local-first architecture, recovery, MVP and implementation gates.

## Scope

Docs-only. No changes to runtime, React, canonical curriculum data, `.cml` schema, workflows, backend, authentication or telemetry.

## Next slices

1. CML-525B — Source Document and Provenance Schema.
2. CML-525C — Generated Draft State Machine and Data Contract.
3. CML-525D — Visual Companion Interaction Prototype.
4. CML-525E — Tecnologia Fixture and Expected Mapping Set.
5. CML-525F — Local Deterministic Parsing Prototype.
6. CML-525G — Human Review Pilot Protocol.

## Verdict

`CML_525A_ASSISTED_CURRICULUM_POPULATION_CONTRACT_READY_REMOTE_DOCS_ONLY_NOT_MERGED`
