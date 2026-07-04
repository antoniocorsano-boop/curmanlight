# Project State

## Snapshot

- Last milestone: CML-392 - PM-07 Audit finale
- Last slice: CML-392 — PM-07 Audit finale (PM-07)
- Last commit: 2278b7d (CML-391 runtime: Progetta terminology targeted microfix)
- Active PM: PM-03 (45%), PM-06 (70%), PM-07 (40%)
- Critical Path: PM-03 → PM-06 → PM-07
- Next slice: TBD (valutare chiusura complessiva PM-03/PM-06/PM-07)
- Last verdict: `CML_392_PM07_FINAL_UNIFORMITY_AUDIT_READY_LOCAL_NOT_PUSHED`
- Repository status: main...origin/main (allineato), audit PM-07 completato

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
