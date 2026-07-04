# Project State

## Snapshot

- Last milestone: CML-389 - Sidebar legenda unica
- Last slice: CML-389 — Sidebar legenda unica (PM-07)
- Last commit: e31b92f (CML-388 runtime: Onboarding refresh)
- Active PM: PM-03 (45%), PM-06 (70%), PM-07 (25%)
- Critical Path: PM-03 → PM-06 → PM-07
- Next slice: CML-390 (PM-07 Microcopy uniform)
- Last verdict: `CML_389_SIDEBAR_SINGLE_LEGEND_READY_LOCAL_NOT_PUSHED`
- Repository status: main...origin/main (allineato), sidebar con legenda unica

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
