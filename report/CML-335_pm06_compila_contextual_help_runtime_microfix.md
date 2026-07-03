# CML-335 - PM-06 Compila Contextual Help Runtime Microfix (Report)

## Scope

- Slice type: runtime microfix
- Macroprogramma: PM-06 - Accompagnamento
- Focus: guida contestuale minima in Didattica/Compila

## Output

1. Guida contestuale breve inserita vicino all'area di compilazione.
2. Risposte esplicite su cosa fare, cosa scrivere e risultato atteso.
3. Supporto immediato indicato tramite guida/esempio, senza nuovi workflow.

## Verifiche

- `git diff --check`: PASS
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS (14/14)
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS (`"overallValid": true`)
- `git diff --name-only`: runtime pair confermata
- Smoke browser Home/Didattica/Curricolo/Guida: PASS
- Console: `CONSOLE_STREAM_NOT_RELIABLY_TESTED`

## Stato

- PM-06: 40%
- PM-04: resta chiusa formalmente
- Prossima slice prevista: CML-336 (supporto in flusso durante Compila)