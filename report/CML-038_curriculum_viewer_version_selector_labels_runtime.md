# CML-038 — Curriculum Viewer Version Selector Labels Runtime

## Summary

Aggiornate le etichette del selettore versione 2012/2025 nel viewer "Curricolo di istituto" per distinguere a colpo d'occhio la versione vigente (IN 2012) dalla bozza in revisione (IN 2025). Modifica solo testuale — nessuna logica JS, nessuna persistenza.

## Preflight

| Dato          | Valore                                   |
| ------------- | ---------------------------------------- |
| HEAD partenza | `b01acbd`                                |
| Branch        | `cml-008r-fix-markdown-decision-summary` |
| Working tree  | Pulita ✅                                |

## Modifica

| Dato                     | Valore                                           |
| ------------------------ | ------------------------------------------------ |
| File                     | `_published_snapshot/netlify-current/index.html` |
| Linee                    | 3425-3426                                        |
| Vecchio 2012             | `📖 Quadro 2012`                                 |
| Nuovo 2012               | `📖 IN 2012 (vigente)`                           |
| Vecchio 2025             | `📖 Quadro 2025`                                 |
| Nuovo 2025               | `📖 IN 2025 (bozza)`                             |
| Logica JS modificata     | ❌ Nessuna                                       |
| Schema `.cml` modificato | ❌ Nessuno                                       |
| Persistenza modificata   | ❌ Nessuna                                       |
| Deploy                   | ❌ Nessuno                                       |

## Smoke

| Controllo                | Esito                |
| ------------------------ | -------------------- |
| Etichetta 2012           | ✅ IN 2012 (vigente) |
| Etichetta 2025           | ✅ IN 2025 (bozza)   |
| Stato documento 2012     | ✅ Invariato         |
| Stato documento 2025     | ✅ Invariato         |
| Callout sezioni generali | ✅ Invariato         |
| JS syntax                | ✅ OK                |
| Diff                     | ✅ Solo 2 linee      |

## Esito

```
CML_038_CURRICULUM_VIEWER_VERSION_SELECTOR_LABELS_READY
```

## Output finale

| Campo                         | Valore                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| Verdict                       | `CML_038_CURRICULUM_VIEWER_VERSION_SELECTOR_LABELS_READY`                          |
| Commit hash                   | In corso                                                                           |
| File modificati               | `_published_snapshot/netlify-current/index.html` (+2/-2 linee)                     |
| File creati                   | `docs/03_execution/CML-038.md`, `report/CML-038_...`                               |
| File aggiornati               | `docs/REPO-MOVELOG.md`                                                             |
| Etichette precedenti          | "Quadro 2012", "Quadro 2025"                                                       |
| Etichette nuove               | "IN 2012 (vigente)", "IN 2025 (bozza)"                                             |
| Modifica solo testuale        | ✅                                                                                 |
| Logica JS modificata          | ❌ No                                                                              |
| Schema `.cml` modificato      | ❌ No                                                                              |
| Persistenza modificata        | ❌ No                                                                              |
| Deploy                        | ❌ Nessuno                                                                         |
| MEMORY.md / .kilo / CLAUDE.md | ✅ non committati                                                                  |
| Prossimo step                 | Deploy del nuovo commit per rendere visibili le etichette aggiornate in produzione |
