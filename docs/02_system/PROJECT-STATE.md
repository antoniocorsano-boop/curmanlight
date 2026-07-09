# Project State

## Snapshot

- Last milestone: CML-426 — Apply Home D2 Context Chip Runtime Patch
- Last slice: CML-426 — Apply Home D2 Context Chip Runtime Patch (runtime microfix)
- Last commit: 3e4dc92 (CML-426)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%)
- Critical Path: Validazione con utenti
- Next slice: CML-399 (User validation scenario pack)
- Last verdict: `CML_426_HOME_D2_CONTEXT_CHIP_RUNTIME_PATCH_PUSHED_AND_LIVE_VERIFIED`
- Repository status: origin/main sincronizzato su CML-426, live su GitHub Pages

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
