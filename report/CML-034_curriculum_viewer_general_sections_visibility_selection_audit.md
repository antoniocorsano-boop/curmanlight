# CML-034 — Curriculum Viewer General Sections Visibility Selection Audit

## Summary

Audit di selezione per decidere come rendere più evidente la consultazione delle sezioni generali nell'esperienza "Curricolo di istituto". Valutate 5 opzioni. Selezionata **Opzione B** (collegamento evidente dal viewer disciplinare tramite callout).

## Preflight

| Controllo          | Esito                   |
| ------------------ | ----------------------- |
| HEAD               | `53589a2` ✅            |
| Working tree       | Pulita ✅               |
| MEMORY.md          | ✅ non committato       |
| Runtime modificato | ❌ Nessuno (audit-only) |

## Stato viewer

| Componente                  | Contenuto                                                                                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tab "Sezioni generali"      | Premessa, Nuove IN 2025, Riferimenti normativi, Profilo studente, 8 Competenze chiave, 4 Livelli competenza, Obiettivi generali, Raccordo verticale |
| Tab "Curricolo di istituto" | 14 discipline (traguardi + obiettivi), version 2012/2025, stato documento, fonti MIM, avvertenza                                                    |
| Gap                         | L'utente può ignorare le sezioni generali e perdere il contesto interpretativo                                                                      |

## Opzioni valutate

| Opzione                          | Valore utente | Rischio tecnico | Scelta |
| -------------------------------- | ------------- | --------------- | ------ |
| A — Tab separato invariato       | Basso         | Nullo           | ❌     |
| **B — Callout dal viewer**       | **Alto**      | **Basso**       | **✅** |
| C — Sezioni integrate nel viewer | Alto          | Alto            | ❌     |
| D — Doppio indice unico          | Alto          | Medio-Alto      | ❌     |
| E — Solo guida utente            | Molto basso   | Nullo           | ❌     |

## Decisione

| Campo               | Valore                                                                                                     |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| Opzione selezionata | **B** — Collegamento evidente dal viewer disciplinare                                                      |
| Motivazione         | Massima chiarezza per l'utente con minimo rischio runtime. Callout guida senza appesantire l'architettura. |
| Prossimo step       | **CML-035** — Implementazione callout nel viewer                                                           |
| Tipo CML-035        | Runtime (HTML/CSS)                                                                                         |
| Deploy CML-035      | Sì                                                                                                         |

## Esito

```
CML_034_CURRICULUM_VIEWER_GENERAL_SECTIONS_VISIBILITY_SELECTION_AUDIT_READY
```

## Output finale

| Campo               | Valore                                                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Verdict             | `CML_034_CURRICULUM_VIEWER_GENERAL_SECTIONS_VISIBILITY_SELECTION_AUDIT_READY`                                                             |
| Commit hash         | `53589a2` (pre-audit — docs in corso)                                                                                                     |
| File modificati     | `docs/03_execution/CML-034.md`, `report/CML-034_curriculum_viewer_general_sections_visibility_selection_audit.md`, `docs/REPO-MOVELOG.md` |
| Opzioni valutate    | A (tab invariato), B (callout), C (integrazione), D (doppio indice), E (sola guida)                                                       |
| Opzione selezionata | B — Callout evidente dal viewer disciplinare                                                                                              |
| Motivazione         | Alta chiarezza, basso rischio: callout "Prima di leggere le discipline, consulta le sezioni generali"                                     |
| Prossimo step       | CML-035 — implementazione callout (runtime)                                                                                               |
| Docs-only           | ✅                                                                                                                                        |
| Runtime modificato  | ❌ Nessuno                                                                                                                                |
| Deploy              | ❌ Nessuno                                                                                                                                |
| MEMORY.md           | ✅ non committato                                                                                                                         |
| .kilo/              | ✅ non committato                                                                                                                         |
| CLAUDE.md           | ✅ non committato                                                                                                                         |
