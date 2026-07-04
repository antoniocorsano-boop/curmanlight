# Project State

## Snapshot

- Last milestone: CML-387 - Guida rapida task-oriented
- Last slice: CML-387 — Guida rapida task-oriented (PM-06)
- Last commit: e660258 (CML-386 runtime: Percorsi coerenti)
- Active PM: PM-03 (45%), PM-06 (65%), PM-07 (20%)
- Critical Path: PM-03 → PM-06 → PM-07
- Next slice: CML-388 (PM-06 Onboarding refresh)
- Last verdict: `CML_387_TASK_ORIENTED_QUICK_GUIDE_READY_LOCAL_NOT_PUSHED`
- Repository status: main...origin/main (allineato), Guida rapida riorganizzata per compiti

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
