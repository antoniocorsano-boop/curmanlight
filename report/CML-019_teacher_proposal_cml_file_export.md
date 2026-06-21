# CML-019 — Teacher Proposal CML File Export

## Stato git iniziale

| Campo | Valore |
|---|---|
| Branch | cml-008r-fix-markdown-decision-summary |
| HEAD | aa78b47 |
| Working tree | Pulita |

## Conferma docs-only

- Unica modifica runtime: aggiunta funzione `exportTeacherCml()` e pulsanti.
- Documentazione creata.

## Conferma nessuna modifica runtime

- Logica decisionale invariata.
- Contenuti disciplinari invariati.

## Conferma nessun deploy

- Nessun comando deploy eseguito.
- Deploy non previsto in questa slice.

## Conferma nessuna modifica a PDF, sw.js, _headers, asset

- `sw.js` invariato.
- `_headers` invariato.
- PDF invariati.
- Asset invariati.

## Schema `.cml` implementato

| Campo | Tipo | Descrizione |
|---|---|---|
| `schemaVersion` | string | "1.0" |
| `fileType` | string | "teacher_proposal" |
| `appName` | string | "CurManLight" |
| `createdAt` | string | ISO-8601 datetime |
| `role` | string | "teacher" |
| `discipline` | string | Disciplina selezionata o null |
| `sourceContext` | object | currentFramework, revisionFramework |
| `counts` | object | total, ok, modifica, nuovo |
| `proposals` | array | Lista voci con modifica/nuovo |
| `checks` | object | hasProposals, hasDiscipline, hasSources |
| `humanValidationRequired` | boolean | true |

## Controlli tecnici

| Verifica | Esito |
|---|---|
| Funzione `exportTeacherCml()` definita | ✓ |
| Pulsante toolbar aggiunto | ✓ |
| Pulsante Riepilogo aggiunto | ✓ |
| Esportazione JSON valida | ✓ |
| Nessun Google API | ✓ |
| Nessun Apps Script | ✓ |
| Nessun endpoint reale | ✓ |

## Verdetto finale

CML_019_TEACHER_PROPOSAL_CML_FILE_EXPORT_READY