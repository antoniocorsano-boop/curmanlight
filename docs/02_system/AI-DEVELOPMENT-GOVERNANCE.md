# AI Development Governance

## Purpose

This document defines the permanent governance rules for any AI agent operating on CurManLight (ChatGPT, Codex, Claude, Copilot, Gemini, Cursor, Windsurf, and future agents).

## Project State Model

Governance is active and execution must remain aligned with these system sources:

- Charter: `docs/02_system/PRODUCT-MATURITY-CHARTER.md`
- Roadmap: `docs/02_system/PRODUCT-USABILITY-AND-UX-MATURITY-ROADMAP.md`
- Backlog: `docs/02_system/PRODUCT-USABILITY-BACKLOG.md`
- Progress: `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- Acceptance Criteria: `docs/02_system/PRODUCT-MATURITY-ACCEPTANCE-CRITERIA.md`
- UX Standards: `docs/02_system/UX-STANDARDS.md`

## Product Philosophy

The primary objective is not feature expansion.
The primary objective is reducing cognitive load for real users.

## Priority Order

1. User
2. Experience
3. Comprehension
4. Coherence
5. Code

## Permanent Rules

### Never

- Add functionality outside roadmap and approved slice perimeter.
- Introduce technical or internal terminology in user-facing text.
- Increase the number of user decisions required to complete a task.
- Increase visible UI elements unless explicitly required by the active roadmap scope.

### Always

- Update backlog when scope impacts UX items.
- Update progress dashboard for PM status and coverage.
- Explicitly declare macro-program (PM-*).
- Explicitly declare backlog linkage (UX-*).
- Explicitly declare dependencies.

## Runtime Perimeter (Mandatory)

Runtime is always the pair below, never a single file:

- index.html
- _published_snapshot/netlify-current/index.html

All runtime modifications must preserve parity between these two files.

## Mandatory Slice Header

Every execution slice must declare, in this order:

1. Macroprogramma
2. Backlog
3. Dipende da
4. Aggiorna
5. Acceptance Criteria
6. Impatto sul carico cognitivo

## Required Reading Before Any Runtime Change

Read these files before changing runtime behavior:

1. `docs/02_system/PRODUCT-MATURITY-CHARTER.md`
2. `docs/02_system/PRODUCT-USABILITY-AND-UX-MATURITY-ROADMAP.md`
3. `docs/02_system/PRODUCT-USABILITY-BACKLOG.md`
4. `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
5. `docs/02_system/PRODUCT-MATURITY-ACCEPTANCE-CRITERIA.md`
6. `docs/02_system/UX-STANDARDS.md`

## Operating Notes

- Keep governance independent from tool-specific files.
- Tool-specific instruction files should remain minimal and point to this document.
- When governance conflicts with convenience, governance wins.
