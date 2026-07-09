# CML-434 — Home Task Selector Runtime Report

## Summary

Replace Home operation buttons with a 4-task selector (Consulta, Progetta, Propone, Esporta) plus contextual info panel. Clean up orphaned CSS from replaced hub actions.

## Changes

### Task selector (`.home-task-selector`)

- 4 buttons with icons + labels, replacing old `.home-process-hub__actions` buttons
- Active state `.home-task-btn--active` with `aria-pressed`
- First task (consulta) selected by default

### Context panel (`.home-task-context`)

- `aria-live="polite"` for accessibility
- Title, body, checklist items per task
- Action button navigates to the relevant tab

### Task → Tab mapping

| Task | Tab |
|------|-----|
| Consulta il curricolo | `curricolo` |
| Prepara una progettazione | `didattica` |
| Proponi un aggiornamento | `lavoro` |
| Esporta un documento | `esportazioni` |

### CSS cleanup

Removed orphaned `.home-process-hub__actions`, `.home-process-hub__btn`, `.home-process-hub__btn.primary` (both class definitions and media query rules).

## Pair alignment

Both `index.html` and `_published_snapshot/netlify-current/index.html` patched with identical changes (28 occurrences of `home-task` in each).

## Validators

- `git diff --check`: PASS
- `validate-cml-normalized-curriculum.mjs`: 14/14 PASS
- `test-runtime-mappa-dati-shape.mjs`: 14/14 PASS

## Constraints respected

- No backend, no accounts, no remote send
- No curriculum data modified
- No service-worker changes
- No external libraries
- No `git add .`
- No push
- Home not rebuilt from scratch; hub header, pipeline, areas, governance strip preserved
