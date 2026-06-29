# CML-217 — Minimal UDA Draft Preview + Markdown Export

## Summary

UDA draft Markdown preview panel with on-demand generation, copy-to-clipboard, and file download, sourced from existing curriculum data + local evidence markings.

## What was done

| Area        | Detail                                                                                                                                                                                                               |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CSS         | `.didattica-uda-draft-section` and related classes (purple theme)                                                                                                                                                    |
| HTML        | Selectors (discipline, unit), generate/copy/download buttons, textarea preview, status bar, privacy notice                                                                                                           |
| JS          | `renderUdaDraftPanel()`, `updateUdaUnitSelector()`, `buildUdaDraftMarkdown()`, `generateUdaDraft()`, `copyUdaMarkdown()`, `downloadUdaMarkdown()`, `discKeyFromName()`, `getUdaDisciplineUnits()`, `getStateLabel()` |
| Integration | `renderUdaDraftPanel()` called in `setTab` for `didattica` and `didattica_uda` tabs                                                                                                                                  |
| Validation  | 14/14 PASS (validator), 14/14 PASS (shape test)                                                                                                                                                                      |

## Files changed

- `_published_snapshot/netlify-current/index.html` (+297/-1)

## Acceptance criteria

- [x] Selectors show all 14 disciplines and units per discipline
- [x] Markdown preview generated on demand
- [x] Copy-to-clipboard works
- [x] File download works (named `Bozza_UDA_<Disciplina>_<date>.md`)
- [x] Empty state shown when no evidence marked
- [x] Privacy-first: no student data, no persistence, no grades
- [x] UDA draft NOT persisted in localStorage
- [x] Uses existing `cml_evidenze_state` only
- [x] No curriculum JSON changes
- [x] No `.cml`/export/import changes
- [x] No dependency changes
- [x] No manifest/service-worker changes

## Decisioni chiave

- **Opzione B** (da CML-216): preview + copia/download, nessuna persistenza
- Pannello posizionato prima dei modelli UDA statici
- Selector disciplina indipendente da `mappaDisciplinaCorrente`
- Mapping `discKeyFromName()` per lookup in ALL_CURRICULUM_DATA
- Markdown generato include placeholder per attività/adattamenti (da compilare dal docente)
- Privacy notice esplicito nel pannello e nel markdown generato

## Rischi

Nessuno. Implementazione minimale, no persistenza, no dati studenti, no modifica dati esistenti.
