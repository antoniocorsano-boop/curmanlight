# CurManLight — Project Status

**Formal status:** `LEGACY_STABLE / MAINTENANCE_ONLY`

**Status effective date:** 2026-09-19

**Repository state at transition:** `main@7cc338459b9d80ee9b8ea602a1fd53b3565130e6`

**Public application:** https://antoniocorsano-boop.github.io/curmanlight/

> The repository head above identifies the source baseline used for this maintenance declaration. This document does not assert that the currently published GitHub Pages artifact is built from the same SHA unless separately verified by deployment evidence.

## 1. Meaning of this status

CurManLight has completed its active development cycle for the original scope of the project and is retained as a stable, usable and auditable implementation.

This repository is **not abandoned**. It enters maintenance-only mode: functional evolution continues in the successor repositories listed below, while this codebase remains available for reference, historical continuity, critical fixes and compatibility maintenance.

The status does **not** mean that the wider CurManLight product domain is feature-complete.

## 2. Scope preserved here

This repository remains the stable reference implementation for:

- local-first consultation of the vertical curriculum;
- 14/14 normalized curriculum disciplines;
- teacher `.cml` proposal workflow;
- department import and validation workflow;
- referent import/report workflow;
- evidence marking;
- UDA draft generation/preview/copy/download;
- installable PWA behavior;
- human validation as the final authority.

## 3. Explicit non-goals

The following are not goals of further development in this repository:

- introducing a backend or server-side account system;
- adding server persistence for UDA drafts;
- integrating SchoolKB as a new subsystem here;
- turning local workflow state into institutional authority;
- replacing human validation, department deliberation or Collegio dei Docenti decisions;
- moving new curriculum visualization or semantic-navigation development back into this repository.

## 4. Known residual debt

The transition to maintenance mode does not erase known limitations:

- accessibility P3 naming/microcopy backlog remains visible;
- VoiceOver/macOS has not been verified as part of the original accessibility evidence;
- UDA drafts are not importable/exportable as `.cml`;
- UDA drafts are not persistently stored;
- department validation remains human/manual;
- SchoolKB is not integrated in this implementation.

These items are historical product constraints unless a reopening trigger below is explicitly activated.

## 5. Supported maintenance

Changes remain appropriate when they are limited to:

- critical defects;
- security or privacy defects;
- browser/PWA compatibility regressions;
- material accessibility defects;
- broken public runtime behavior;
- documentation corrections required to keep the repository truthful and auditable.

Maintenance changes should use a dedicated branch and pull request. Direct feature development on `main` is not part of the maintenance model.

## 6. Reopening triggers

A new development milestone for this repository requires an explicit decision and a documented reason, for example:

- a school deployment requires a capability that cannot reasonably live in Arena, Curriculum Atlas or Docente OS;
- a critical compatibility change cannot be addressed as a bounded maintenance fix;
- preservation/migration work requires changes to the legacy runtime itself.

A reopening decision must define scope, acceptance criteria and the relationship with the successor repositories before implementation begins.

## 7. Evolution path

The project now has a deliberate separation of responsibilities:

1. **CurManLight** — stable legacy/reference implementation of the original local-first curriculum workflow.
2. **CurManLight Arena** — governed curriculum engine and controlled maturity/release environment.
3. **Curriculum Atlas** — canonical visual, spatial and semantic representation layer for curriculum navigation.
4. **Docente OS 2026/27** — operational teacher environment that consumes curriculum knowledge in planning, classes, materials and assisted workflows.

Repositories:

- CurManLight Arena: https://github.com/antoniocorsano-boop/CurManLight_arena
- Curriculum Atlas: https://github.com/antoniocorsano-boop/Curriculum-Atlas
- Docente OS 2026/27: https://github.com/antoniocorsano-boop/docente-os-2026-27

## 8. Governance principle

CurManLight remains a support tool. It can organize, compare, validate technically and make curriculum evidence easier to inspect, but it does not acquire institutional authority by software execution.

Formal curriculum adoption and educational decisions remain subject to the competent human and collegial bodies.

---

**Canonical status token:** `CURMANLIGHT_LEGACY_STABLE_MAINTENANCE_ONLY`
