# CML-062 — REPORT: TECHNOLOGY_DISCIPLINE_FULL_PACK

## Dettaglio del contenuto prodotto
- **File JSON**: `content/curriculum/tecnologia.normalized.json`
- **Schema**: `cml-normalized-curriculum-v1`
- **Disciplina**: Tecnologia
- **Validatore**: `tools/validate-cml-normalized-curriculum.mjs`

## Sintesi delle unità per ordine/classe

### Infanzia (2 unità)
| ID          | Fascia | Ambito                                                          |
|-------------|--------|-----------------------------------------------------------------|
| tec_inf_3_001 | 3-4    | Osservazione e analisi di oggetti, strumenti e ambienti        |
| tec_inf_5_001 | 5      | Digitale, dati, procedure e sicurezza                           |

### Primaria (5 unità)
| ID          | Classe | Ambito                                      |
|-------------|--------|---------------------------------------------|
| tec_pri_1_001 | 1      | Osservazione e analisi di oggetti, strumenti e ambienti |
| tec_pri_2_001 | 2      | Materiali e trasformazioni                  |
| tec_pri_3_001 | 3      | Disegno, rappresentazione e progettazione   |
| tec_pri_4_001 | 4      | Energia, sostenibilità e ambiente           |
| tec_pri_5_001 | 5      | Cittadinanza tecnologica e uso responsabile |

### Secondaria I grado (6 unità = 2 per classe)
| ID          | Classe | Ambito                                      |
|-------------|--------|---------------------------------------------|
| tec_sec_1_001 | 1      | Disegno, rappresentazione e progettazione   |
| tec_sec_1_002 | 1      | Digitale, dati, procedure e sicurezza       |
| tec_sec_2_001 | 2      | Materiali e trasformazioni                  |
| tec_sec_2_002 | 2      | Energia, sostenibilità e ambiente           |
| tec_sec_3_001 | 3      | Digitale, dati, procedure e sicurezza       |
| tec_sec_3_002 | 3      | Cittadinanza tecnologica e uso responsabile |

## Output sintetico dello script di validazione
```json
{
  "totalUnits": 13,
  "ordersCovered": ["Infanzia", "Primaria", "Secondaria"],
  "classesCovered": ["1", "2", "3", "4", "5"],
  "missingRequiredFields": [],
  "emptyFields": [],
  "warnings": [],
  "valid": true
}
```

## Eventuali warning
Nessun warning. Tutte le classi Primaria (I-V) e Secondaria (I-III) sono coperte. Tutte le unità hanno `validazioneUmana: true`.

## Raccomandazioni per replica su altre discipline
1. Copiare la struttura JSON in `content/curriculum/{disciplina}.normalized.json`
2. Rispettare i 16 campi obbligatori del contratto CML-061
3. Compilare `noteDipartimento` per ogni unità con `validazioneUmana: true`
4. Eseguire `node tools/validate-cml-normalized-curriculum.mjs` dopo ogni modifica
5. Per discipline solo Secondaria: impostare `fascia: null` e popolare `classe`
6. Per discipline con ordini multipli: voci distinte per ogni combinazione ordine/classe o ordine/fascia
7. Tenere traccia su `docs/REPO-MOVELOG.md` ad ogni avanzamento
