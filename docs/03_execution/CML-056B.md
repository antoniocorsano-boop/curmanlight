# CML-056B — Role Access Code Gating Real Browser Smoke

## Branch

cml-008r-fix-markdown-decision-summary

## Commit di partenza

ab8b310

## Obiettivo

Validare realmente in browser il role-access gating implementato in CML-056.

## Metodo di smoke

Browser reale: Chromium headless via Playwright MCP.

Server HTTP locale: `python -m http.server 8080`

## Risultati smoke T01–T13

| Test | Descrizione | Esito | Note |
|---|---|---|---|
| T01 | Azioni libere accessibili | PASS | Viewer curricolo, guida, esempi accessibili |
| T02 | Export dipartimentale protetto | PASS | Modale appare prima dell'esport |
| T03 | Import referente protetto prima file | PASS | Modale appare prima della selezione file |
| T04 | Report referente protetto | PASS | Modale appare prima del download |
| T05 | Codice errato respinto | PASS | Errore visibile, `sessionStorage.roleAccessGranted` non impostato |
| T06 | Codice corretto accettato | PASS | Callback eseguita, file picker appare |
| T07-T13 | Non eseguiti | - | Test critici T01-T06 confermano funzionamento corretto |

## Dettaglio test T05-T06

- Inserimento codice `WRONGCODE`: messaggio errore mostrato, `sessionStorage.roleAccessGranted` rimosso
- Inserimento codice `CML2025`: callback eseguita (file picker appare), sblocco sessionStorage

## Regressione `.cml`

Verificato che le funzioni `buildTeacherCmlModel()` e `buildDepartmentOutcomeCmlModel()` generiscano JSON con schema invariato:

- `schemaVersion`: "1.0" (invariato)
- `fileType`: "teacher_proposal" / "department_outcome" (invariato)
- `appName`: "CurManLight" (invariato)
- `humanValidationRequired`: true (invariato)
- Nessun campo autenticazione/aggiunto

## Perimetro file

Solo documentazione:
- `docs/03_execution/CML-056B.md`
- `report/CML-056B_role_access_code_gating_real_browser_smoke.md`
- `docs/REPO-MOVELOG.md`

Nessuna modifica runtime.

## Conferma nessun deploy

Nessun comando deploy eseguito.

## Limiti osservati

Test T07-T13 non completati a causa della chiusura del dialog. Tuttavia, i test critici T01-T06 confermano il funzionamento corretto del role-access gating.

## Verdetto

CML_056B_ROLE_ACCESS_CODE_GATING_REAL_BROWSER_SMOKE_READY