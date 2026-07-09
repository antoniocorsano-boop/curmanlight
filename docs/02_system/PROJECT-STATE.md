# Project State

## Snapshot

- Last milestone: CML-431 — PM-09 Pilot Readiness Checkpoint
- Last slice: CML-431 — PM-09 Pilot Readiness Checkpoint
- Last commit: 796411e (CML-430 push)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (ready per prova pilota)
- Critical Path: Validazione con utenti
- Next action: prova pilota reale con 2–5 docenti (fuori-repo)
- Last verdict: `CML_431_PM09_PILOT_READINESS_CHECKPOINT_READY_LOCAL_NOT_PUSHED`
- Repository status: origin/main sincronizzato su 796411e, live su GitHub Pages, CML-431 docs-only locale non pushato

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
