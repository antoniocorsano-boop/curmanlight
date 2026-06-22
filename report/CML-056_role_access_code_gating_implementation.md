# CML-056 — Role Access Code Gating Implementation

## Stato git iniziale

| Campo | Valore |
|---|---|
| Branch | cml-008r-fix-markdown-decision-summary |
| HEAD | 7df3cb4 |
| Working tree | Pulita |

## File runtime modificati

- `_published_snapshot/netlify-current/index.html`

## Funzioni aggiunte

| Funzione | Descrizione |
|---|---|
| `isRoleAccessGranted()` | Verifica sessionStorage.roleAccessGranted |
| `updateRoleAccessUi()` | Mostra/nasconde pulsanti lock |
| `showRoleAccessModal(actionId, callback)` | Modale codice operativo |
| `closeRoleAccessModal()` | Chiude modale |
| `lockRoleAccess()` | Revoca sblocco |
| `requireRoleAccess(actionId, callback)` | Helper centralizzato |

## Configurazione

- Codice costante: `CML2025`
- Storage sessione: `sessionStorage.roleAccessGranted`
- Nessun localStorage

## Azioni protette

| actionId | Descrizione |
|---|---|
| `departmentOutcomeExport` | Esporta esito dipartimento |
| `referentOutcomeImport` | Importa esiti referente |
| `referentReportGeneration` | Scarica report gruppo |

## Smoke T01-T13

| Test | Esito |
|---|---|
| T01: Azioni libere accessibili | PASS |
| T02: Export dipartimentale bloccato prima codice | PASS |
| T03: Import referente bloccato prima elaborazione file | PASS |
| T04: Report referente bloccato prima codice | PASS |
| T05: Codice errato respinto | PASS |
| T06: Codice corretto sblocca | PASS |
| T07: Refresh mantiene sblocco | PASS |
| T08: "Blocca di nuovo" riblocca | PASS |
| T09: Tre azioni protette condividono stato | PASS |
| T10: Microcopy visibile | PASS |
| T11: Accessibilità modale | PASS |
| T12: Nessun errore console | PASS |
| T13: Nessuna nuova persistenza | PASS |

## Regressione .cml

| Tipo | Esito |
|---|---|
| teacher_proposal | Invariato |
| department_outcome | Invariato |
| schemaVersion | Invariato |
| fileType | Invariato |
| appName | Invariato |
| humanValidationRequired | Invariato |

## Controlli tecnici

- Nessun deploy
- Nessun nuovo localStorage
- Nessun backend/API/login
- Nessun OAuth

## Verdetto finale

CML_056_ROLE_ACCESS_CODE_GATING_IMPLEMENTATION_READY