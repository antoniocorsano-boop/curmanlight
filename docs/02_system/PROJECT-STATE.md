# Project State

## Snapshot

- Last milestone: CML-384 - Home de-densificazione
- Last slice: CML-384 — Home de-densificazione (PM-03)
- Last commit: 2a32c16 (CML-383 docs-only: PM residual intervention map)
- Active PM: PM-03 (35%), PM-06 (60%), PM-07 (20%)
- Critical Path: PM-03 → PM-06 → PM-07
- Next slice: CML-385 (PM-03 Navigazione mobile)
- Last verdict: `CML_384_HOME_DEDENSIFICATION_READY_LOCAL_NOT_PUSHED`
- Repository status: main...origin/main (allineato), Home de-densificata

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
