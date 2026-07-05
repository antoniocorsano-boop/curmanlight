# Project State

## Snapshot

- Last milestone: CML-395 - Smoke post-push tranche PM-03/PM-06/PM-07
- Last slice: CML-395 — Smoke post-push (docs-only)
- Last commit: ba14ce2 (CML-394 docs: correct CML-394 verdict to PUSHED)
- Active PM: PM-03 (45%), PM-06 (70%), PM-07 (40%)
- Critical Path: Stable checkpoint
- Next slice: CML-396 (Stable checkpoint post-tranche)
- Last verdict: `CML_395_PM030607_TRANCHE_POST_PUSH_SMOKE_PASSED`
- Repository status: origin/main sincronizzato, smoke post-push completato, deploy GitHub Pages aggiornato

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
