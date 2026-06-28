# CML-237 Maintenance Policy and Known-Limits Register

## Summary
Created maintenance policy and known-limits register for CurManLight stable candidate.

## Status
**COMPLETE**

## Maintenance Modes Defined
1. **Documentation-only maintenance** — docs/, report/, CLAUDE.md, movelog
2. **Smoke/verification maintenance** — validation runs, no code changes
3. **Microcopy correction** — typo/text fixes, non-behavioral
4. **Defect triage** — classifying/documenting limitations
5. **Deferred feature review** — periodic deferred item review

## Known-Limits Register (Seeded)
| ID | Title | Category | Severity | Status |
|----|-------|----------|----------|--------|
| 001 | SchoolKB deferred | Deferred | P3 | Deferred |
| 002 | No `.cml` UDA package | Workflow | P3 | Not Planned |
| 003 | No persistent UDA model | Workflow | P3 | Deferred |
| 004 | Favicon absent | Polish | P3 | Deferred |
| 005 | No backend/OAuth | Governance | P2 | Not Planned |
| 006 | No student data/grades | Governance | P0 | Not Planned |
| 007 | No auto approval | Governance | P1 | Not Planned |
| 008 | No AI Act claim | Governance | P0 | Not Planned |

## Severity Model
- P0: Privacy/security/legal blocker
- P1: High risk, core workflow
- P2: Maintenance risk
- P3: Polish/deferred

## Reopening Triggers
Legal/regulatory change, school workflow need, P0/P1 blocker, curriculum correction, public availability, validator regression.

## CML-238 Recommended Scope
- Freeze closure gate
- Public smoke verification
- No new feature work

---

*Maintained under docs-only slice discipline. No push performed.*