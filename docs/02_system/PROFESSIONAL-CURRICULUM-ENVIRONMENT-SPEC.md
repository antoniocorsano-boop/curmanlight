# PROFESSIONAL CURRICULUM ENVIRONMENT SPEC

**Status:** Draft specification
**Scope:** docs-only
**Related contract:** CML-065 / [PRODUCT MODEL — CURRICULUM / DIDATTICA CONTRACT](PRODUCT-MODEL-CURRICULUM-DIDATTICA-CONTRACT.md)

## 1. Purpose

Define CurManLight as a professional curriculum environment for the institute, organized into two macro-areas:

- **Curriculum**: institutional document, consultation, revision, validation, export.
- **Didattica**: operational planning, annual planning, UDA, activities, materials, assessment.

This specification does not replace CML-065. It extends it with explicit runtime-oriented layers and working-context rules so the product can remain coherent while evolving.

## 2. Relationship with CML-065

This spec is a refinement of the stable product model already defined by CML-065.

### 2.1 Confirmed by this spec

- Two macro-areas only: Curriculum and Didattica.
- Discipline content is not a third area.
- Home must orient, not overload.
- Export/report actions are subordinate to the main curriculum journey.

### 2.2 Added by this spec

- **Work Context Layer**: role, year, class, discipline, active version, local persistence.
- **Applicability Layer**: which curriculum applies to which class/year and from when.
- **IN 2025 Alignment Layer**: proposals, comparison, validation, non-validated materials.
- **Revision Process Layer**: clear journey for teacher, department, referent, leadership.
- **Didactics Layer**: annual planning, UDA, activities, materials, assessment.
- **Export and Document Layer**: documents and delivery artifacts organized by purpose before format.

### 2.3 Reconciled boundaries

- CML-065 remains the stable conceptual contract.
- This spec defines the operational layering that can guide future slices.
- If a future runtime change conflicts with CML-065, CML-065 prevails unless explicitly superseded.

## 3. Current state in the repository

| Layer | State |
|---|---|
| Curriculum | implemented and partially refined in runtime |
| Didattica | implemented in part, with annual planning and UDA surfaces |
| Work Context Layer | partial |
| Applicability Layer | partial |
| IN 2025 Alignment Layer | partial |
| Revision Process Layer | implemented in key flows |
| Export and Document Layer | implemented, but still language-heavy in places |

## 4. Professional environment model

### 4.1 Curriculum

Curriculum is the institutional layer. It contains consultation, revision, validation, and delivery of the official curriculum.

### 4.2 Didattica

Didattica is the operational layer. It contains annual planning, UDA, class work, materials, and assessment.

### 4.3 Role-centered access

The environment is read through roles:

- Docente
- Dipartimento / Coordinatore
- Referente
- Dirigente / Staff

The UI must let the user understand what to do without requiring knowledge of internal repository history.

## 5. Working context

The environment must preserve local context for work sessions.

Required conceptual fields:

- role
- school year
- class / grade
- discipline
- active curriculum version
- local working state

The spec does not define new storage keys. It only formalizes the context concept already present in the product.

## 6. Applicability

Applicability answers a practical question: which curriculum or planning layer applies to a class, year, or phase of work.

Rules:

- the curriculum must remain readable by class/year
- planning artifacts must stay tied to the right curricular basis
- applied content must remain distinguishable from official curricular text

## 7. Revision process

The revision journey is shared across roles:

1. Docente prepares a proposal.
2. Dipartimento compares and records a shared outcome.
3. Referente checks consistency and prepares the final consolidation.
4. Final document and export packages are produced.

This sequence should remain the principal narrative for the product.

## 8. Didactics layer

Didattica is the operational translation of the curriculum.

It includes:

- annual planning
- UDA
- class activities
- materials
- assessment

It must not be confused with institutional validation or final curriculum approval.

## 9. Export and document layer

Delivery artifacts must be organized by purpose:

- final document
- comparison document
- work file
- report / resoconto
- backup copy

Format is secondary to purpose.

## 10. Constraints

- No runtime change is required to adopt this document as a specification.
- No `.cml` schema change is implied.
- No new API, backend, dependency, or Drive integration is introduced.
- Existing local storage behaviors remain unchanged.

## 11. Future slices informed by this spec

- CML-268 — Dashboard and onboarding contract
- CML-269 — Work context layer contract
- CML-270 — Curriculum layer contract
- CML-271 — Applicability layer contract
- CML-272 — IN 2025 alignment layer contract
- CML-273 — Revision process layer contract
- CML-274 — Didactics layer contract
- CML-275 — Export and document layer contract
