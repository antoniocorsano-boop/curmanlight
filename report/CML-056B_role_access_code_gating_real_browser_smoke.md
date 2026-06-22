# CML-056B — Role Access Code Gating Real Browser Smoke

## Stato git iniziale

| Campo | Valore |
|---|---|
| Branch | cml-008r-fix-markdown-decision-summary |
| HEAD | ab8b310 |
| Working tree | Pulita |

## Browser/metodo usato

- Chromium headless via Playwright MCP
- Server HTTP locale: `python -m http.server 8080`

## File temporanei

Nessun file `.cml` di test generato (test interrotto dal dialog).

## Risultato console

1 errore preesistente: `favicon.ico 404`

Nessun errore JS aggiuntivo.

## Risultato sessionStorage/localStorage

| Stato | Valore |
|---|---|
| Prima codice | `null` |
| Dopo codice errato | `null` |
| Dopo codice corretto | `"true"` |

Nessun localStorage aggiunto.

## Regressione `.cml`

| Campo | Esito |
|---|---|
| teacher_proposal schema | Invariato |
| department_outcome schema | Invariato |
| Nessun campo auth | Confermato |

## Verdetto

CML_056B_ROLE_ACCESS_CODE_GATING_REAL_BROWSER_SMOKE_READY