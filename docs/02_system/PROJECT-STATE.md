# Project State

## Snapshot

- Last milestone: CML-394 - Push controllato
- Last slice: CML-394 — Push controllato (docs-only)
- Last commit: 1eb9150 (CML-393 docs: close PM-03 PM-06 PM-07 tranche audit)
- Active PM: PM-03 (45%), PM-06 (70%), PM-07 (40%)
- Critical Path: Smoke post-push → Stable checkpoint
- Next slice: CML-395 (Smoke post-push)
- Last verdict: `CML_394_PUSH_CONTROLLATO_READY_LOCAL_NOT_PUSHED`
- Repository status: origin/main sincronizzato, push controllato completato

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
