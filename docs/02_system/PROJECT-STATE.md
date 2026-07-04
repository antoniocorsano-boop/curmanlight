# Project State

## Snapshot

- Last milestone: CML-390 - Microcopy uniform
- Last slice: CML-390 — Microcopy uniform (PM-07)
- Last commit: 170b70e (CML-389 runtime: Sidebar legenda unica)
- Active PM: PM-03 (45%), PM-06 (70%), PM-07 (30%)
- Critical Path: PM-03 → PM-06 → PM-07
- Next slice: TBD (audit finale PM-07)
- Last verdict: `CML_390_MICROCOPY_UNIFORMITY_READY_LOCAL_NOT_PUSHED`
- Repository status: main...origin/main (allineato), microcopy uniformato

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
