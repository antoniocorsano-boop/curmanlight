# CML-140 — JSON to MAPPA_DATI Adapter Design Audit

## Fotografia Git iniziale

- **Branch:** `main`
- **HEAD:** `6b7ced5` (1 commit ahead of origin)
- **Validatore:** 7 file, 94 unità, `overallValid: true` ✅
- **Working tree:** pulito ✅

## Design dell'adapter

### Firma

```javascript
function toMappaDati(normalizedJson) → {disciplina, struttureSostanziali, nodiDisciplinari, progressioneVerticale, decisioniCurricolari?}
function toTecnologiaNorm(normalizedJson) → {schemaVersion, disciplina, humanValidationRequired, source, unitaApprendimento}
```

### Logiche di aggregazione

| MAPPA_DATI sezione        | Da JSON                                            | Metodo                                                                                                                     |
| ------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `struttureSostanziali`    | `unitaApprendimento[].ambito`                      | Raggruppa per ambito; prima competenza → descrizione                                                                       |
| `nodiDisciplinari`        | `unitaApprendimento[].nucleo` (o `nucleoFondante`) | Raggruppa per nucleo; prima competenza → descrizione                                                                       |
| `progressioneVerticale`   | `unitaApprendimento[].{ordine, classe, fascia}`    | Raggruppa per ordine+classe; competenza → descrizioneProgressione; nodiRiferimento collegati a nodiDisciplinari via nucleo |
| `decisioniCurricolari`    | pass-through se presenti                           | Non generabile altrimenti                                                                                                  |
| `NORM.unitaApprendimento` | `unitaApprendimento[]`                             | 1:1 diretto                                                                                                                |

### Discipline coverage

| Discipline | Ha unità | Ha ambito | Ha nucleo/nucleoFondante | decisioniCurricolari generabili |
| ---------- | :------: | :-------: | :----------------------: | :-----------------------------: |
| Tecnologia |    13    |    ✅     |   ⚠️ (entrambi vuoti)    |      ✅ (presenti in JSON)      |
| Italiano   |    14    |    ✅     |        ✅ nucleo         |      ✅ (presenti in JSON)      |
| Matematica |    13    |    ✅     |        ✅ nucleo         |      ✅ (presenti in JSON)      |
| Scienze    |    15    |    ✅     |        ✅ nucleo         |        ❌ (non presenti)        |
| Storia     |    15    |    ✅     |        ✅ nucleo         |        ❌ (non presenti)        |
| Geografia  |    12    |    ✅     |        ✅ nucleo         |        ❌ (non presenti)        |
| Inglese    |    12    |    ✅     |        ✅ nucleo         |        ❌ (non presenti)        |

### Rischio principale

Tecnologia ha `nucleoFondante: ""` e `nucleo: ""` — l'adapter non può raggruppare per nucleo. Per Tecnologia, cadrà sul raggruppamento per `ambito`, producendo `struttureSostanziali` ma non `nodiDisciplinari`. Necessario fix del modello dati Tecnologia prima o durante CML-141.

## Perimetro raccomandato CML-141

Implementare l'adapter come tool standalone (`tools/json-to-mappa-dati-adapter.mjs`):

1. `toMappaDati(json)` — genera struttura MAPPA_DATI
2. `toTecnologiaNorm(json)` — genera struttura NORM (alias generico, rinominare)
3. CLI: `node tools/json-to-mappa-dati-adapter.mjs <file.json> [--norm]`
4. Test A-F su output corrispondente alle MAPPA_DATI hardcoded
5. Nessuna modifica al runtime

## Modifiche effettuate

Nessuna modifica a runtime, JSON, validatore, CSS, JS applicativo.

## Verdetto

```
CML_140_JSON_TO_MAPPA_DATI_ADAPTER_DESIGN_AUDIT_READY
```
