# Project State

## Snapshot

- Last milestone: CML-400 — User Validation Entry Runtime
- Last slice: CML-429 — User Validation Evidence Intake Model
- Last commit: c2ac753 (CML-428 push)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (validation entry live, pilot kit pronto, intake evidenze definito)
- Critical Path: Validazione con utenti
- Next slice: raccolta e lettura evidenze dalla prova pilota
- Last verdict: `CML_429_USER_VALIDATION_EVIDENCE_INTAKE_MODEL_PUSHED_REMOTE`
- Repository status: origin/main aggiornato da remoto tramite branch/PR CML-429; runtime invariato

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
