# Project State

## Snapshot

- Last milestone: CML-429 — User Validation Evidence Intake Model
- Last slice: CML-430 — User Validation Intake Summary Template
- Last commit: bcb9a0c (CML-429M repo sync); CML-429 integrato da remoto (86ad154)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (validation entry live, pilot kit pronto, intake summary template pronto)
- Critical Path: Validazione con utenti
- Next slice: prova pilota con docenti reali
- Last verdict: `CML_430_USER_VALIDATION_INTAKE_SUMMARY_TEMPLATE_READY_LOCAL_NOT_PUSHED`
- Repository status: origin/main sincronizzato su bcb9a0c, live su GitHub Pages, CML-430 docs-only locale non pushato

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
