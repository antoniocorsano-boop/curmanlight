# CML-336 - PM-06 Compila In-Flow Support Runtime Microfix (Report)

## Scope

- Slice type: runtime microfix
- Macroprogramma: PM-06 - Accompagnamento
- Focus: supporto operativo in flusso durante Compila

## Output

1. Inserito promemoria in-flusso breve vicino all'azione di compilazione.
2. Supporto centrato su partenza, compilazione concreta e controllo pre-salvataggio.
3. Nessun nuovo workflow, nessun modale, nessuna modifica logica di salvataggio/export.

## Verifiche

- `git diff --check`: PASS
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS (14/14)
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS (`"overallValid": true`)
- `git diff --name-only`: runtime pair confermata
- Smoke browser Home/Didattica/Curricolo/Guida: PASS
- Console: `CONSOLE_STREAM_NOT_RELIABLY_TESTED`

## Stato

- PM-06: 50%
- PM-04: resta chiusa formalmente
- Prossima slice prevista: CML-337 (pre-save readability cue in Compila)