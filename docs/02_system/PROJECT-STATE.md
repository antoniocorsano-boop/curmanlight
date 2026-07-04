# Project State

## Snapshot

- Last milestone: CML-385 - PM-03 Navigazione mobile
- Last slice: CML-385 — PM-03 Navigazione mobile
- Last commit: ae0c7bf (CML-384 runtime: Home de-densificazione)
- Active PM: PM-03 (40%), PM-06 (60%), PM-07 (20%)
- Critical Path: PM-03 → PM-06 → PM-07
- Next slice: CML-386 (PM-03 Percorsi coerenti)
- Last verdict: `CML_385_MOBILE_NAVIGATION_ORIENTATION_READY_LOCAL_NOT_PUSHED`
- Repository status: main...origin/main (allineato), navigazione mobile migliorata

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
