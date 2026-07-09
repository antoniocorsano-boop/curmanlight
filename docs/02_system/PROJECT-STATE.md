# Project State

## Snapshot

- Last milestone: CML-432 — Teacher Task View Architecture and Mock Comparison
- Last slice: CML-432 — Teacher Task View Architecture and Mock Comparison
- Last commit: 088d9bd (CML-431 push)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (primo pilota raccolto, architettura viste/task definita)
- Critical Path: Validazione con utenti → Architettura viste docente
- Next action: fornire mock logico/grafico e validare la vista target prima di nuove patch runtime
- Last verdict: `CML_432_TEACHER_TASK_VIEW_ARCHITECTURE_PUSHED_REMOTE`
- Repository status: origin/main aggiornato da remoto tramite PR CML-432; runtime invariato

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
