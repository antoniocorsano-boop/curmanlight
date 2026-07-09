# Project State

## Snapshot

- Last milestone: CML-399 — User Validation Scenario Pack
- Last slice: CML-399 — User Validation Scenario Pack (docs-only / product validation design)
- Last commit: be6d81e (CML-426 docs close)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (in prep)
- Critical Path: Validazione con utenti
- Next slice: CML-400 (runtime — pulsante provvisorio Home / guida test / campo annotazioni)
- Last verdict: `CML_399_USER_VALIDATION_SCENARIO_PACK_READY_LOCAL_NOT_PUSHED`
- Repository status: origin/main sincronizzato su be6d81e, live su GitHub Pages

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
