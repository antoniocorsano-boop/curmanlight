# CML-022 — Department Outcome CML Export

## Stato git iniziale

| Campo | Valore |
|---|---|
| Branch | cml-008r-fix-markdown-decision-summary |
| HEAD | 0434f0c |
| Working tree | Pulita |

## File runtime modificati

- `_published_snapshot/netlify-current/index.html`

## Funzioni aggiunte

| Funzione | Descrizione |
|---|---|
| `setDepartmentDecision(idx, decision)` | Registra esito del confronto dipartimentale |
| `buildDepartmentOutcomeCmlModel()` | Costruisce modello .cml per esito dipartimentale |
| `exportDepartmentOutcomeCml()` | Scarica file .cml di esito |

## Schema department_outcome

| Campo | Tipo | Descrizione |
|---|---|---|
| `schemaVersion` | string | "1.0" |
| `fileType` | string | "department_outcome" |
| `appName` | string | "CurManLight" |
| `createdAt` | string | ISO-8601 datetime |
| `role` | string | "department" |
| `disciplineWorkStatus` | string | "completed" |
| `disciplines` | array | Lista discipline |
| `proposalHandling` | array | Proposte con esiti del confronto |
| `checks` | object | Controlli validazione |
| `humanValidationRequired` | boolean | true |

## Esiti supportati

| Etichetta | Valore | Significato |
|---|---|---|
| Confluita nella sintesi | confluita_nella_sintesi | Proposta entra nel testo/sintesi |
| Riformulata dal dipartimento | riformulata_dal_dipartimento | Idea riscritta collegialmente |
| Assorbita in altra proposta | assorbita_in_altra_proposta | Assorbita in altra proposta |
| Da chiarire | da_chiarire | Serve ulteriore chiarimento |

## Controlli tecnici

| Verifica | Esito |
|---|---|
| Funzione `setDepartmentDecision()` definita | ✓ |
| Funzione `buildDepartmentOutcomeCmlModel()` definita | ✓ |
| Funzione `exportDepartmentOutcomeCml()` definita | ✓ |
| Pulsante export aggiunto nel pannello dipartimento | ✓ |
| Nessun Google API | ✓ |
| Nessun deploy | ✓ |

## Verdetto finale

CML_022_DEPARTMENT_OUTCOME_CML_EXPORT_READY