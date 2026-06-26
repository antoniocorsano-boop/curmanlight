# CurManLight — Claude Code Project Memory

## 1. Project Identity

CurManLight (CML): vertical curriculum static web app for I.C. Calvario-Covotta.
PWA/mobile-first. HTML/CSS/JavaScript Vanilla. No backend required.
Source of truth: `_published_snapshot/netlify-current/`.
Conservative integration (CML-001R): add, do not replace.

## 2. Current Consolidated State

- Normalized data: 10/14 disciplines
- Runtime mappa: 10/14 disciplines
- Shape test: 10/10 PASS
- Next discipline: Educazione Fisica — requires detailed gap model (CML-178) before normalization
- SchoolKB: optional, parallel, disabled by default, SKB-001 closed
- OPS: contract defined (OPS-001), CLAUDE.md created (OPS-002), skills `cml-sync`, `cml-docs-only-slice`, and `cml-readiness-audit` created; hooks not yet created

## 3. Operating Rules

- One slice at a time, with explicit authorized scope
- Mandatory Git preflight before every slice
- Selective commits; `git diff --check` before every commit
- No push unless SYNC slice explicitly authorized
- No deploy unless explicitly requested
- No runtime changes in docs-only slices
- No `content/curriculum/` changes outside data preparation slices
- No `tools/` changes outside test/tool slices
- No new dependencies without contract
- Never commit credentials, client IDs, tokens, or secrets
- CML and SKB lines are separate; do not cross-contaminate

## 4. Slice Types

| Type | Scope |
|------|-------|
| docs-only | `docs/`, `report/`, movelog — no runtime, no data |
| readiness/audit | audit docs only — no runtime, no data |
| normalized data prep | `content/curriculum/*.normalized.json` only |
| runtime integration | `_published_snapshot/netlify-current/` only |
| shape test alignment | `tools/test-runtime-mappa-dati-shape.mjs` |
| sync | controlled push + post-push verification |
| SKB/SchoolKB | SchoolKB contract — no CML runtime |
| OPS | CLAUDE.md, skills, hooks — no runtime, no data |

## 5. Validation Commands

```bash
git status --short --branch
git diff --check
node tools/validate-cml-normalized-curriculum.mjs
node tools/test-runtime-mappa-dati-shape.mjs
```

## 6. Report Format

- **Output finale breve**: task, commit, scope, verdict
- **Conferme obbligatorie**: type, invariants, no-secrets
- **Stato consolidato**: normalized/runtime/shape/OPS/SKB
- **Report completo**: only if requested or for complex audit/contract — otherwise just path + key decision

Avoid: long logs, wide box-drawing tables, duplicated content, internal reasoning.

## 7. SchoolKB Boundary

- SchoolKB is parallel to CML, not a dependency
- No OAuth/Drive runtime without dedicated SKB slice
- No real credentials or client IDs in the repository
- Maximum future OAuth scope: `drive.file`

## 8. Next Recommended Slices

- CML-OPS-004 — CML_DOCS_ONLY_AND_READINESS_SKILLS
- CML-OPS-005 — guard hooks (scope, secrets, push)
- CML-178 — Educazione Fisica detailed gap model
