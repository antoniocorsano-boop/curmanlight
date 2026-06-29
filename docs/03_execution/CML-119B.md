# CML-119B — MULTI_DISCIPLINE_NORMALIZED_CURRICULUM_VALIDATOR

## Contesto

- Slice precedente: `CML_119A_DISCIPLINARY_KNOWLEDGE_MODEL_AUDIT_READY`
- CML-119A ha rilevato che il validatore `tools/validate-cml-normalized-curriculum.mjs` è mono-disciplina e hardcoded su Tecnologia.
- Sono presenti 7 file JSON normalizzati in `content/curriculum/`.
- Obiettivo: generalizzare il validatore per supportare tutti i file senza modificare runtime, contenuti o schema.

## Obiettivi Raggiunti

1. ✅ Generalizzato `tools/validate-cml-normalized-curriculum.mjs`.
2. ✅ Validati tutti i file `content/curriculum/*.normalized.json`.
3. ✅ Rimosso hardcoding su Tecnologia.
4. ✅ Report console con tutti i campi richiesti.
5. ✅ Segnalata incongruenza `nucleo` vs `nucleoFondante` come warning retrocompatibile.
6. ✅ Retrocompatibilità mantenuta.
7. ✅ Nessun campo epistemologico o nodo disciplinare introdotto.

## Modifiche

### File modificato

- `tools/validate-cml-normalized-curriculum.mjs`

### Cosa è cambiato

| Elemento                            | Prima                                                                                               | Dopo                                                                                     |
| ----------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Input                               | Solo `tecnologia.normalized.json`                                                                   | Tutti i file `content/curriculum/*.normalized.json`                                      |
| Hardcoding disciplina               | `data.disciplina !== 'Tecnologia'` → errore                                                         | `data.disciplina` letta dal JSON                                                         |
| Controllo `nucleo`/`nucleoFondante` | Assente                                                                                             | Warning per unità con `nucleo` ma senza `nucleoFondante` (e viceversa), retrocompatibile |
| Report                              | Singolo oggetto JSON per Tecnologia                                                                 | Array di risultati per disciplina + summary aggregato                                    |
| Campi report                        | `totalUnits`, `ordersCovered`, `classesCovered`, `missingRequiredFields`, `emptyFields`, `warnings` | Aggiunti `file`, `disciplina`, `primariaClasses`, `secondariaClasses`, `errors` per-file |
| Exit code                           | `process.exit(1)` se errori/missing in Tecnologia                                                   | `process.exit(1)` se `overallValid === false` (qualunque file)                           |

### Struttura output

```json
{
  "totalFiles": 7,
  "totalUnits": 94,
  "overallValid": true,
  "invalidCount": 0,
  "results": [
    {
      "file": "geografia.normalized.json",
      "disciplina": "Geografia",
      "valid": true,
      "totalUnits": 12,
      "ordersCovered": ["Infanzia","Primaria","Secondaria"],
      "primariaClasses": ["1","2","3","4","5"],
      "secondariaClasses": ["1","2","3"],
      "missingRequiredFields": [],
      "emptyFields": [],
      "warnings": [...],
      "errors": []
    },
    ...
  ]
}
```

## Report Validazione

### Disciplina validate

| #   | File                       | Unità | Valid | Warning                            |
| --- | -------------------------- | ----- | ----- | ---------------------------------- |
| 1   | geografia.normalized.json  | 12    | ✅    | 12 (nucleo→nucleoFondante)         |
| 2   | inglese.normalized.json    | 12    | ✅    | 12 (nucleo→nucleoFondante)         |
| 3   | italiano.normalized.json   | 14    | ✅    | 14 (nucleo→nucleoFondante)         |
| 4   | matematica.normalized.json | 13    | ✅    | 16 (13 nucleo + 3 classi Primaria) |
| 5   | scienze.normalized.json    | 15    | ✅    | 15 (nucleo→nucleoFondante)         |
| 6   | storia.normalized.json     | 15    | ✅    | 15 (nucleo→nucleoFondante)         |
| 7   | tecnologia.normalized.json | 13    | ✅    | 0                                  |

### Incongruenze rilevate

- **`nucleo` vs `nucleoFondante`**: Tutte le discipline eccetto Tecnologia usano `nucleo` invece di `nucleoFondante` come da contratto CML-061.
  - 66 unità totali con warning retrocompatibile.
  - 0 unità con entrambi i campi.
  - 13 unità senza nessuno dei due (Tecnologia).
- **Matematica Primaria**: mancanti classi 2, 3, 4 (solo classi 1 e 5 presenti in Primaria). Warning non bloccante.

### Campi mancanti e vuoti

- Nessun campo obbligatorio mancante o vuoto in nessuna unità.

### ValidazioneUmana

- Tutte le unità hanno `validazioneUmana: true`.

## Vincoli Rispettati

- ✅ Nessuna modifica a `_published_snapshot/netlify-current/index.html`
- ✅ Nessuna modifica a export/import
- ✅ Nessuna modifica a schema `.cml`
- ✅ Nessuna modifica ai contenuti disciplinari JSON
- ✅ Nessuna modifica runtime, persistenza, backend, API, login, UI

## Prossimo Incremento

**CML-119C — CONTRATTO_DATI_MAPPA_DISCIPLINARE**

- Definire schema `cml-disciplinare-v1`
- Regole di compilazione
- Integrare warning `nucleo`/`nucleoFondante` nel contratto formale

## Verdetto

```text
CML_119B_MULTI_DISCIPLINE_NORMALIZED_CURRICULUM_VALIDATOR_READY
```
