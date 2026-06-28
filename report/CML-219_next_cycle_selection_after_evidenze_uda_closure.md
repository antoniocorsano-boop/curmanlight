# CML-219 — Next Cycle Selection After Evidenze/UDA Closure

## Start commit

`a223915` (CML-218S, origin/main aligned)

## Opzione selezionata

**A — Microfix Evidenze/UDA wording**

## Razionale

I due findings minori di CML-218 sono l'unico debito tecnico UI aperto. Una micro-correzione (< 3 righe in `index.html`) li risolve completamente, lasciando lo stato pulito per il ciclo successivo (SchoolKB o release audit).

## Opzioni respinte

| Opzione | Motivo rifiuto |
|---|---|
| B — SchoolKB | Troppo presto: findings aperti vanno chiusi prima di un ciclo grande |
| C — Release audit | Meglio dopo microfix: stato completamente pulito |
| D — Design/UML | Nessuna urgenza, zero valore utente diretto |
| E — Content polish | Nessuna nuova validazione emersa |

## Prossima sequenza

1. CML-220 — Evidenze/UDA wording microfix (runtime)
2. CML-220S — Controlled push + public smoke
3. CML-221 — Next larger cycle selection (SchoolKB o release audit)

## Stato finale

- **Commit**: `a223915` (nessun nuovo commit — docs-only decision)
- **Docs-only**: nessuna modifica runtime, curriculum JSON, .cml, export/import, validator, shape-test, service-worker, manifest, dipendenze
- **No deploy, no push, no secrets**
- **Verdetto**: `CML_219_NEXT_CYCLE_SELECTION_AFTER_EVIDENZE_UDA_CLOSURE_READY`
