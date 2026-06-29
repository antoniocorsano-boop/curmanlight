# CML-221 — Next Larger Cycle Selection After Evidenze/UDA and Wording Closure

## Start commit

`85a66e6` (CML-220S, origin/main aligned)

## Opzione selezionata

**A — Release readiness and public documentation polish**

## Razionale

L'app ha raggiunto uno stato stabile con tutte le funzionalità principali completate (14/14 discipline, evidenze, UDA draft, microfix). Prima di iniziare SchoolKB (prossimo grande ciclo potenziale) o promuovere l'app pubblicamente, è prudente eseguire un audit di release readiness, documentare known limits, verificare l'entry experience e preparare README/user docs.

## Opzioni respinte

| Opzione                         | Motivo rifiuto                                     |
| ------------------------------- | -------------------------------------------------- |
| B — SchoolKB                    | Rimandato a CML-225: va preceduto da release audit |
| C — Design/UML                  | Nessuna urgenza, zero valore utente diretto        |
| D — `.cml` v1.1 / UDA extension | Da valutare dopo audit, scope non chiaro           |
| E — UX polish                   | Nessuna necessità specifica dopo CML-220           |
| F — Content polish              | Nessuna nuova validazione emersa                   |

## Prossima sequenza

1. CML-222 — Public release readiness audit
2. CML-223 — README and user documentation polish
3. CML-224 — Public workflow smoke and release gate
4. CML-225 — Next cycle selection (likely SchoolKB)

## Stato finale

- **Commit**: `85a66e6` (nessun nuovo commit — docs-only decision)
- **Docs-only**: nessuna modifica runtime, curriculum JSON, .cml, export/import, validator, shape-test, service-worker, manifest, dipendenze
- **No deploy, no push, no secrets**
- **Verdetto**: `CML_221_NEXT_LARGER_CYCLE_SELECTION_AFTER_EVIDENZE_UDA_AND_WORDING_CLOSURE_READY`
