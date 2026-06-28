# CML-OPS-004 — Operational Skills and Slice Template Audit

## Summary
Audit del workflow operativo CurManLight dopo 16 slice recenti (CML-217→CML-232). Identificati 10 rischi (2 P1/P2/P3, 3 OK). Raccomandata definizione di preflight policy contract in CML-OPS-005.

## Files inspected
- 16 execution docs (CML-217→CML-232)
- `docs/02_system/CLAUDE-CODE-LOCAL-WORKFLOW-CONTRACT.md`
- `CLAUDE.md`
- `.claude/skills/` (3 skills)

## Operational risks
| ID | Risk | Priority |
|----|------|----------|
| OR-01 | CLAUDE.md stale (10/14 instead of 14/14) | **P1** |
| OR-02 | OPS contract stale in docs/02_system | P2 |
| OR-03 | No slice-type templates | P2 |
| OR-04 | No guard hooks for push/deploy | P2 |
| OR-05 | Occasional docs-only scope drift | P3 |
| OR-06 | No standardized closure pattern | P3 |
| OR-07 | No automated hash smoke | P3 |
| OR-08→OR-10 | Existing strengths (OK) | — |

## Existing strengths
- Validator + shape test: automated
- Movelog: maintained
- Slice lifecycle: established
- 3 OPS skills: created
- GH Pages: auto-deploy on push
- Secret scan: manual but effective

## Slice-template gaps
Missing templates for: docs-only, runtime microfix, JSON data prep, controlled push, public smoke, closure gate.

## Recommendation for CML-OPS-005
Define a **preflight policy contract** covering:
- Guard hooks contract (scope enforcement)
- Preflight checklist
- Slice templates in `docs/02_system/`
- No executable hooks without contract

## Verdict
`CML_OPS_004_OPERATIONAL_SKILLS_AND_SLICE_TEMPLATE_AUDIT_COMPLETE`
