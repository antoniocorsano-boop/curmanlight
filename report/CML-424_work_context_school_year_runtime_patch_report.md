# Report CML-424 — Work Context and School Year Runtime Patch

## Stato

PATCH APPLICATA — NON COMMITTATA — NON PUSHATA

## Files modificati

- `index.html` (24 insertions, 3 deletions)
- `_published_snapshot/netlify-current/index.html` (24 insertions, 3 deletions)

## Summary delle modifiche

| # | Modifica | File | Riga (approx) |
|---|---|---|---|
| 1 | DEFAULT_PROFILE + `annoScolastico` | index.html | 3569 |
| 2 | Helper functions (getSchoolYearLabel, getWorkContextChip, requiresSchoolYearMessage) | index.html | 3587+ |
| 3 | `renderProfileSummary` → usa `getWorkContextChip()` | index.html | 3584 |
| 4 | Campo UI "Anno scolastico" nel pannello Impostazioni | index.html | 5485 |
| 5 | Salvataggio annoScolastico in saveSettingsProfile | index.html | 5511-5512 |
| 6 | Riga "Anno scolastico" in buildUdaDraftMarkdown | index.html | 3420 |

## Retrocompatibilità

- `loadLocalState()` e `importLocalBackup()` usano `{...DEFAULT_PROFILE,...payload.profile}` — se `annoScolastico` manca dal salvataggio precedente, rimane stringa vuota
- `saveLocalState()` salva `profile:userProfile` — `annoScolastico` incluso automaticamente
- `exportLocalBackup()` idem

## Validazione

- Curriculum validator: 14/14 pass
- Runtime shape test: 14/14 pass
- `git diff --check`: ok (no whitespace errors)

## Verdetto

CML-424_WORK_CONTEXT_AND_SCHOOL_YEAR_RUNTIME_PATCH_READY_UNCOMMITTED
