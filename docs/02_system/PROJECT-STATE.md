# Project State

## Snapshot

- Last milestone: CML-383 - PM Residual Intervention Map
- Last slice: CML-383 — PM Residual Intervention Map
- Last commit: 1c90c4f (CML-382 docs-only: stable checkpoint publication audit)
- Active PM: PM-03 (30%), PM-06 (60%), PM-07 (20%)
- Critical Path: PM-03 → PM-06 → PM-07
- Next slice: CML-384 (PM-03 Home de-densificazione)
- Last verdict: `CML_383_PM_RESIDUAL_INTERVENTION_MAP_READY`
- Repository status: main...origin/main (allineato), mappa interventi residui PM completata

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
