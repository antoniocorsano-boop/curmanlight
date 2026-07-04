# Project State

## Snapshot

- Last milestone: CML-388 - Onboarding refresh
- Last slice: CML-388 — Onboarding refresh (PM-06)
- Last commit: 844c87e (CML-387 runtime: Guida rapida task-oriented)
- Active PM: PM-03 (45%), PM-06 (70%), PM-07 (20%)
- Critical Path: PM-03 → PM-06 → PM-07
- Next slice: CML-389 (PM-07 Sidebar legenda unica)
- Last verdict: `CML_388_ONBOARDING_REFRESH_READY_LOCAL_NOT_PUSHED`
- Repository status: main...origin/main (allineato), onboarding allineato ai percorsi operativi

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
