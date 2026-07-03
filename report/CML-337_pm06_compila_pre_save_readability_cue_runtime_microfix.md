# CML-337 - PM-06 Compila Pre-save Readability Cue Runtime Microfix (Report)

## Scope

- Slice type: runtime microfix
- Macroprogramma: PM-06 - Accompagnamento
- Focus: cue di leggibilita pre-salvataggio in Compila

## Output

1. Inserito un richiamo breve e visibile nel Compila aperto di default.
2. Il cue invita a rileggere titolo, obiettivo, destinatari, tempi e materiali prima di salvare.
3. Nessun nuovo workflow, nessun modale, nessuna modifica alla logica di salvataggio/export.

## Verifiche

- `git diff --check`: PASS
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS (14/14)
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS (`"overallValid": true`)
- Smoke browser Home/Didattica/Curricolo/Guida: PASS
- Cue pre-save visibile nel Compila aperto: PASS
- Console: `CONSOLE_STREAM_NOT_RELIABLY_TESTED`

## Stato

- PM-06: 60%
- PM-04: resta chiusa formalmente
- Prossima slice prevista: CML-338 o nuovo ciclo