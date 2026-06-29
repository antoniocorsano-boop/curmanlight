# CML-035 — Curriculum Viewer General Sections Callout Runtime

## Summary

Implementato callout informativo all'inizio del viewer "Curricolo di istituto" per guidare l'utente alla consultazione delle sezioni generali (Premessa, Profilo, Valutazione, ecc.). Modifica minima HTML/CSS statico, nessuna logica JS, nessuna persistenza, nessun deploy.

## Preflight

| Data          | Valore                                   |
| ------------- | ---------------------------------------- |
| HEAD partenza | `89f80cc`                                |
| Branch        | `cml-008r-fix-markdown-decision-summary` |
| Working tree  | Pulita ✅                                |

## Modifica

| Dato                   | Valore                                                                        |
| ---------------------- | ----------------------------------------------------------------------------- |
| File                   | `_published_snapshot/netlify-current/index.html`                              |
| Linea                  | 3422                                                                          |
| Funzione               | `renderCurricoloIstituto(version)`                                            |
| Classe CSS             | `.usage-notice` (pre-esistente, linea 83)                                     |
| Posizione              | Subito dopo apertura `<div class="curricolo-viewer">`, prima dei version tabs |
| Nuovo CSS              | ❌ Nessuno — riutilizzata classe esistente                                    |
| Nuovo JS               | ❌ Nessuno — sola stringa HTML in template                                    |
| Modifica schema `.cml` | ❌ Nessuna                                                                    |
| Modifica persistenza   | ❌ Nessuna                                                                    |
| Deploy                 | ❌ Nessuno (solo commit)                                                      |

## Testo callout

> **Prima di leggere le discipline:** consulta anche le **sezioni generali** del curricolo: Premessa, Profilo dello studente, Valutazione, Inclusione, Continuità e Orientamento. Le discipline vanno lette insieme al quadro generale del curricolo di istituto.

## Smoke

| Controllo                   | Esito        |
| --------------------------- | ------------ |
| Viewer raggiungibile        | ✅           |
| Callout visibile all'inizio | ✅           |
| Version tabs visibili       | ✅           |
| Stato documento 2012/2025   | ✅           |
| Disciplinare completo       | ✅ Invariato |
| Nessuna falsa approvazione  | ✅           |
| Nessuna regressione         | ✅           |
| JS syntax                   | ✅           |

## Esito

```
CML_035_CURRICULUM_VIEWER_GENERAL_SECTIONS_CALLOUT_READY
```

## Output finale

| Campo                      | Valore                                                                                                                                  |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Verdict                    | `CML_035_CURRICULUM_VIEWER_GENERAL_SECTIONS_CALLOUT_READY`                                                                              |
| Commit hash                | In corso (dopo documentazione)                                                                                                          |
| File modificati            | `_published_snapshot/netlify-current/index.html` (+1 linea)                                                                             |
| File creati                | `docs/03_execution/CML-035.md`, `report/CML-035_curriculum_viewer_general_sections_callout_runtime.md`                                  |
| File aggiornati            | `docs/REPO-MOVELOG.md`                                                                                                                  |
| Testo callout              | "Prima di leggere le discipline: consulta anche le sezioni generali del curricolo..."                                                   |
| HTML/CSS statico           | ✅ Solo stringa HTML in template JS                                                                                                     |
| Logica JS modificata       | ❌ Nessuna                                                                                                                              |
| Schema `.cml` modificato   | ❌ Nessuno                                                                                                                              |
| Persistenza modificata     | ❌ Nessuna                                                                                                                              |
| Deploy                     | ❌ Nessuno                                                                                                                              |
| MEMORY.md                  | ✅ non committato                                                                                                                       |
| .kilo/                     | ✅ non committato                                                                                                                       |
| CLAUDE.md                  | ✅ non committato                                                                                                                       |
| Prossimo step raccomandato | Deploy del commit corrente su Netlify per rendere visibile il callout in produzione; oppure proseguire con miglioramenti UX/navigazione |
