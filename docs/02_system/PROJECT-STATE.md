# Project State

## Snapshot

- Last milestone: CML-386 - PM-03 Percorsi coerenti
- Last slice: CML-386 — PM-03 Percorsi coerenti
- Last commit: 6ea0b84 (CML-385 runtime: Navigazione mobile)
- Active PM: PM-03 (45%), PM-06 (60%), PM-07 (20%)
- Critical Path: PM-03 → PM-06 → PM-07
- Next slice: CML-387 (PM-06 Guida rapida task-oriented)
- Last verdict: `CML_386_COHERENT_ORIENTATION_PATHS_READY_LOCAL_NOT_PUSHED`
- Repository status: main...origin/main (allineato), percorsi coerenti uniformati

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
