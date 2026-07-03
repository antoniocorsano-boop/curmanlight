# CML-334 - PM-06 Onboarding Initial Task-Oriented Runtime Microfix (Report)

## Scope

- Slice type: runtime microfix
- Macroprogramma: PM-06 - Accompagnamento
- Focus: onboarding iniziale Home orientato al compito

## Output

1. Home onboarding resa piu esplicita su scopo e primo passo.
2. Azioni rapide riallineate su microcopy task-oriented (curricolo/didattica/guida).
3. Runtime pair aggiornata in sincrono senza redesign e senza nuove feature.

## Verifiche

- `git diff --check`: PASS
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS (14/14)
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS (`"overallValid": true`)
- Smoke browser Home: PASS
- Console: `CONSOLE_STREAM_NOT_RELIABLY_TESTED`

## Stato

- PM-06: 30%
- PM-04: resta chiusa formalmente
- Prossima slice prevista: CML-335 (guida contestuale minima in Compila)