# Project State

## Snapshot

- Last milestone: CML-424 — Work Context and School Year Runtime Patch
- Last slice: CML-424 — Work Context and School Year Runtime Patch (runtime microfix)
- Last commit: 516ad61 (CML-397 docs: select next phase after stable checkpoint)
- Active PM: PM-06 (70% → 75%), PM-05 (100%)
- Critical Path: Validazione con utenti
- Next slice: CML-399 (User validation scenario pack)
- Last verdict: `CML_424_WORK_CONTEXT_AND_SCHOOL_YEAR_RUNTIME_PATCH_READY_UNCOMMITTED`
- Repository status: origin/main sincronizzato, patch contesto lavoro e anno scolastico applicata localmente, non committata

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
