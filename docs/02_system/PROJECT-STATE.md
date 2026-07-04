# Project State

## Snapshot

- Last milestone: CML-393 - PM-03/PM-06/PM-07 Tranche Closure Audit
- Last slice: CML-393 — PM-03/PM-06/PM-07 Tranche Closure Audit (docs-only)
- Last commit: a225ce3 (CML-392 docs: audit PM-07 uniformity closure)
- Active PM: PM-03 (45%), PM-06 (70%), PM-07 (40%)
- Critical Path: Push controllato → Smoke post-push → Stable checkpoint
- Next slice: CML-394 (Push controllato)
- Last verdict: `CML_393_PM030607_TRANCHE_CLOSURE_AUDIT_READY_LOCAL_NOT_PUSHED`
- Repository status: main...origin/main (allineato), tranche PM-03/PM-06/PM-07 chiusa, ready for push

## Recent Refactor Chain (CML-371 → CML-380)

La catena CML-371 → CML-380 ha completato il refactor dell'accesso runtime ai dati disciplinari:

- Runtime access generalizzato via `getUnitsForDiscipline(discKey)`
- Rimozione dead code `TECNOLOGIA_NORM` / `TECNOLOGIA_NORM_DATA`
- Zero residui hardcoded disciplinari certificati
- Runtime stabile, nessuna regressione

## Runtime Perimeter Reminder

Always treat runtime scope as:

- index.html
- _published_snapshot/netlify-current/index.html

Never reference only one runtime file in execution summaries.
