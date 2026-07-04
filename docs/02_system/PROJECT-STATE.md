# Project State

## Snapshot

- Last milestone: CML-391 - Progetta terminology targeted microfix
- Last slice: CML-391 — Progetta terminology targeted microfix (PM-07)
- Last commit: 5baa2b3 (CML-390 runtime: Microcopy uniform)
- Active PM: PM-03 (45%), PM-06 (70%), PM-07 (35%)
- Critical Path: PM-03 → PM-06 → PM-07
- Next slice: CML-392 (PM-07 Audit finale)
- Last verdict: `CML_391_PROGETTA_TERMINOLOGY_TARGETED_MICROFIX_READY_LOCAL_NOT_PUSHED`
- Repository status: main...origin/main (allineato), terminologia "Progetta" applicata

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
