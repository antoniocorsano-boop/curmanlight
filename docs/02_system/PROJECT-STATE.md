# Project State

## Snapshot

- Last milestone: CML-433 — Teacher Task View Target Specification
- Last slice: CML-433 — Teacher Task View Target Specification
- Last commit: 4537af2 (CML-432 merge)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (primo pilota raccolto, mock realistico tradotto in specifica target)
- Critical Path: Validazione con utenti → Architettura viste docente → Specifica target → Runtime controllato
- Next action: CML-434 Home task selector runtime, solo dopo allineamento locale e review della specifica
- Last verdict: `CML_433_TEACHER_TASK_VIEW_TARGET_SPEC_PUSHED_REMOTE`
- Repository status: origin/main aggiornato da remoto tramite PR CML-433; runtime invariato

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
