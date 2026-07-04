# getUnitsForDiscipline and Tecnologia Guard Removal

## Baseline
- CML-370 ha definito il contratto `DisciplineDataAccess`
- CML-371 (Fase 1) ha introdotto `MAPPA_DATI_INDEX` + `getMappaForDiscipline`
- CML-372 è la Fase 2: `getUnitsForDiscipline` + rimozione 4 guardie Tecnologia

## Struttura introdotta

```
getUnitsForDiscipline(discKey)
         │
         ▼
ALL_CURRICULUM_DATA[discKey]?.unitaApprendimento || []
         │
         ├── getDisciplineEvidenceData(discKey)
         ├── getAnnualDraftUnitsFor(discipline)
         ├── getUdaDisciplineUnits()
         └── renderTecnologiaNorm()
```

### Prima (pattern frammentato)

| Funzione | Tecnologia branch | Altre discipline |
|---|---|---|
| `getDisciplineEvidenceData` | `TECNOLOGIA_NORM_DATA?.unitaApprendimento` | `ALL_CURRICULUM_DATA[discKey]?.unitaApprendimento` |
| `getAnnualDraftUnitsFor` | `TECNOLOGIA_NORM_DATA?.unitaApprendimento` | `ALL_CURRICULUM_DATA[discKey]?.unitaApprendimento` |
| `getUdaDisciplineUnits` | `TECNOLOGIA_NORM_DATA?.unitaApprendimento` | `ALL_CURRICULUM_DATA[key]?.unitaApprendimento` |
| `renderTecnologiaNorm` | `TECNOLOGIA_NORM_DATA.unitaApprendimento` | `ALL_CURRICULUM_DATA[discKey].unitaApprendimento` |

### Dopo (centralizzato)

Tutte e 4 le funzioni chiamano `getUnitsForDiscipline(discKey)`.

## Verifica equivalenza

| Aspetto | Prima | Dopo | Esito |
|---|---|---|---|
| Tecnologia -> unità apprendimento | `TECNOLOGIA_NORM_DATA.unitaApprendimento` | `getUnitsForDiscipline('tecnologia')` -> `ALL_CURRICULUM_DATA.tecnologia.unitaApprendimento` | Identico (stesso dato sottostante) |
| Altre discipline -> unità apprendimento | `ALL_CURRICULUM_DATA[discKey].unitaApprendimento` | `getUnitsForDiscipline(discKey)` | Identico |
| Fallback discKey invalido | `null` / `undefined` -> iterazione su `null` | `[]` -> iterazione su array vuoto | Equivalente (nessun errore) |
| Branch Tecnologia | 4 `if (discKey === 'tecnologia')` | Nessun branch speciale | Rimosso |
| `TECNOLOGIA_NORM_DATA` | Referenziata 4 volte | Zero riferimenti | Dead code |

## Impatto byte

| File | Delta approssimativo |
|---|---|
| `index.html` | ~ -150 B (netto, funzione aggiunta + 4 conversioni + rimozione branches) |
| `_published_snapshot/netlify-current/index.html` | ~ -150 B |

L'impatto è piccolo perché `getUnitsForDiscipline` (~100 B) compensa la rimozione dei 4 branch Tecnologia (~250 B totali).

## Funzioni convertite

### `getDisciplineEvidenceData(discKey)` — L2974
- Prima: `if (discKey === 'tecnologia' && typeof TECNOLOGIA_NORM_DATA !== 'undefined')` + `else if ALL_CURRICULUM_DATA`
- Dopo: `return getUnitsForDiscipline(discKey)`

### `getAnnualDraftUnitsFor(discipline)` — L3091
- Prima: identico pattern Tecnologia + `data.unitaApprendimento || data.UnitàApprendimento || []`
- Dopo: `return getUnitsForDiscipline(discKey)`
- Nota: la branch `UnitÀApprendimento` (camelCase legacy) era solo nel branch non-Tecnologia — ora `getUnitsForDiscipline` non fa questo fallback (dati normalizzati non hanno quella chiave)

### `getUdaDisciplineUnits()` — L3293
- Prima: identico pattern Tecnologia
- Dopo: `return getUnitsForDiscipline(key)`

### `renderTecnologiaNorm()` — L6362
- Prima: `var units = []; if (discKey === 'tecnologia' && ...) { ... } else if (ALL_CURRICULUM_DATA...)`
- Dopo: `var units = getUnitsForDiscipline(discKey)`

## File impattati
- `index.html`: +getUnitsForDiscipline, +4 conversioni, -4 branch Tecnologia
- `_published_snapshot/netlify-current/index.html`: identico
- `docs/03_execution/CML-372.md`: creato
- `report/CML-372_get_units_for_discipline_runtime_microrefactor.md`: creato
- `docs/REPO-MOVELOG.md`: aggiornato

## Aree non toccate
- `TECNOLOGIA_NORM` / `TECNOLOGIA_NORM_DATA` (dead code, non eliminate)
- Dati curricolari (`content/curriculum/`)
- Variabili individuali `*_MAPPA_DATI`
- Schema `.cml`, export/import
- Validazione dipartimento/referente
- Hook Drive
- Provider esterni
- UI nuove o dipendenze
- Workflow/configurazioni/package
- `CurManLightBrain/`

## Verdict
`CML_372_GET_UNITS_FOR_DISCIPLINE_RUNTIME_MICROREFACTOR_READY_LOCAL_NOT_PUSHED`
