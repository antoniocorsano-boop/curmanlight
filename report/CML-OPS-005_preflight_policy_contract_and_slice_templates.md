# CML-OPS-005 — Preflight Policy Contract and Slice Templates

## Summary
Creato `docs/02_system/OPS-PREFLIGHT-POLICY-CONTRACT.md` — 14 sezioni che coprono l'intero ciclo di vita delle slice CurManLight, template riutilizzabili, e policy per ogni tipo di slice.

## Files changed
- `docs/02_system/OPS-PREFLIGHT-POLICY-CONTRACT.md` (new)
- `docs/03_execution/CML-OPS-005.md`
- `report/CML-OPS-005_preflight_policy_contract_and_slice_templates.md`
- `docs/REPO-MOVELOG.md`

## Policy summary
- **8 slice types** defined with scope and validation gates
- **13 mandatory checks** across preflight, validation, push phases
- **4 reusable prompt templates** (docs-only audit, runtime microfix, controlled push, closure gate)
- **6 guard-hook principles** (advisory, no destructive, no auto-push, local-only, vanilla constraints, hook-contract separation)
- **12 policy rules** covering docs-only, runtime, JSON, .cml, push, smoke, secrets

## Intentionally not implemented
- Executable hooks (deferred — require separate slice)
- Validation scripts (deferred)
- CLAUDE.md updates (out of scope)
- Modifications to existing OPS contracts (out of scope)

## CML-OPS-006 recommended scope
OPS smoke and closure gate: verify contract usability, confirm checklist completeness, close OPS cycle C.

## Verdict
`CML_OPS_005_PREFLIGHT_POLICY_CONTRACT_AND_SLICE_TEMPLATES_COMPLETE`
