# CML-OPS-005 — PREFLIGHT POLICY CONTRACT AND SLICE TEMPLATES

## Dati slice

- **Commit base**: `93a216e` (CML-OPS-004S, aligned)
- **HEAD/origin/main**: `93a216e`
- **Tipo slice**: docs-only / OPS contract (ciclo C)
- **Oggetto**: definire contratto preflight policy, template slice, checklist by tipo

## Contratto creato

`docs/02_system/OPS-PREFLIGHT-POLICY-CONTRACT.md`

## Sezioni contratto

1. Slice lifecycle states (selection → closure)
2. Slice types (8 tipi con scope e validation gates)
3. Mandatory preflight checks
4. Validation gates by slice type
5. Controlled push policy
6. Docs-only guard policy
7. Runtime microfix policy
8. JSON/data change policy
9. `.cml` workflow policy
10. Public smoke policy
11. Secret/privacy guard
12. Guard-hook principles (advisory, no destructive, no auto-push)
13. Reusable prompt templates (4 template)
14. CML-OPS-006 scope

## Non implementato

- Hooks eseguibili (rinviati a slice futura dopo OPS-006)
- Script di validazione automatizzati (rinviati)
- Modifiche a `CLAUDE.md` (non in scope)
- Modifiche a contratti OPS esistenti (non in scope)
