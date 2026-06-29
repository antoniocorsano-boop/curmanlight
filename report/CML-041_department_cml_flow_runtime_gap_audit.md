# CML-041 — Department CML Flow Runtime Gap Audit

## Summary

Audit tecnico-funzionale del flusso dipartimento `.cml` nel runtime. Classificazione: **PARZIALE**. 2 bug critici/maggiori impediscono il flusso completo. Raccomandato: CML-042 — fix runtime minimo (2 linee).

## Preflight

| Controllo                     | Esito                  |
| ----------------------------- | ---------------------- |
| HEAD                          | `0925774` (CML-040) ✅ |
| Working tree                  | Pulita ✅              |
| MEMORY.md / .kilo / CLAUDE.md | ✅ non committati      |

## CML-040

Commit `0925774`. 4 file `.cml` + guida. Pacchetto valido ma non pienamente utilizzabile: gli esiti dipartimento NON sono importabili dal referente per GAP 1.

## Funzioni runtime

23 funzioni coinvolte nel flusso `.cml`. Mappatura completa in `docs/03_execution/CML-041.md`.

## Gap identificati

| Gap   | Gravità      | Descrizione                                                                                                                                                   | Linea      |
| ----- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| GAP 1 | **CRITICO**  | `buildDepartmentOutcomeCmlModel` omette campo `discipline` (stringa) → referente non importa                                                                  | 2560-2585  |
| GAP 2 | **MAGGIORE** | Handling values in display format ("Confluita nella sintesi") vs underscore atteso (`confluita_nella_sintesi`) → referente conteggia tutto come "senza esito" | 2545, 3196 |
| GAP 3 | MINORE       | Pannello dipartimento senza `<details>` (non collassabile)                                                                                                    | 712        |
| GAP 4 | MINORE       | Nessuna opzione esplicita "senza esito" nel dropdown                                                                                                          | 2545       |

## Output finale

| Campo                         | Valore                                                 |
| ----------------------------- | ------------------------------------------------------ |
| Verdict                       | `CML_041_DEPARTMENT_CML_FLOW_RUNTIME_GAP_CONFIRMED`    |
| Commit hash                   | In corso                                               |
| File modificati               | Exec doc, report, MOVELOG                              |
| Commit CML-040                | `0925774` ✅                                           |
| Classificazione flusso        | **PARZIALE**                                           |
| Gap principali                | GAP 1 (discipline mancante), GAP 2 (handling mismatch) |
| Prossimo step                 | **CML-042** — runtime fix dipartimento minimo          |
| Docs-only                     | ✅                                                     |
| Runtime modificato            | ❌ Nessuno                                             |
| Deploy                        | ❌ Nessuno                                             |
| Schema `.cml` modificato      | ❌ Nessuno                                             |
| Persistenza modificata        | ❌ Nessuna                                             |
| MEMORY.md / .kilo / CLAUDE.md | ✅ non committati                                      |
