# Project State

## Snapshot

- Last milestone: CML-400 — User Validation Entry Runtime
- Last slice: CML-400 — User Validation Entry Runtime (runtime micro-patch)
- Last commit: (local — not yet pushed)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (validation ready)
- Critical Path: Validazione con utenti
- Next slice: validazione utente in campo con docenti reali
- Last verdict: `CML_400_USER_VALIDATION_ENTRY_RUNTIME_READY_LOCAL_NOT_PUSHED`
- Repository status: origin/main sincronizzato su 2492e7c, CML-400 modifiche runtime locali non pushatte

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
