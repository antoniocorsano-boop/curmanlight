# CML-059A — GITHUB_PAGES_LIVE_DEPLOY_SMOKE

## Obiettivo
Verificare sul sito GitHub Pages live che CurManLight sia pubblicato correttamente e che il role-access gating funzioni dopo il deploy.

## URL live
https://antoniocorsano-boop.github.io/curmanlight/

## Branch
main

## Remote
https://github.com/antoniocorsano-boop/curmanlight

## Risultato smoke

| # | Controllo | Esito |
|---|-----------|-------|
| T01 | Pagina live caricata | PASS |
| T02 | Console errori bloccanti | PASS (solo favicon.ico 404 non bloccante) |
| T03 | Storage iniziale: `roleAccessGranted` assente, `localStorage` pulito | PASS |
| T04 | Azioni libere accessibili senza codice | PASS |
| T05 | Azione protetta: modale codice operativo, file picker non aperto prima del codice | PASS |
| T06 | Codice errato: errore visibile, `roleAccessGranted` rimane assente | PASS |
| T07 | Codice corretto `CML2025`: sblocco, `roleAccessGranted=true`, codice non salvato in storage | PASS |
| T08 | Refresh: sblocco mantenuto | PASS |
| T09 | Stato condiviso: azioni protette riconoscono sblocco | PASS |
| T10 | Blocca di nuovo: `roleAccessGranted` rimosso, modale codice riappare | PASS |
| T11 | Mobile smoke: navigazione mobile OK, modale usabile, nessun overflow orizzontale | PASS |
| T12 | Regressione `.cml`: nessun campo codice/accesso/autenticazione nei modelli | PASS |

## Anomalie
- `favicon.ico` 404 (non bloccante)

## Note
- Role-access gating: `sessionStorage.roleAccessGranted` solo in sessionStorage
- `localStorage` pulito dopo tutti i test
- Codice operativo `CML2025` non salvato in localStorage/sessionStorage
- Runtime non modificato
- CML-058 non committato

## Verdetto
`CML_059A_GITHUB_PAGES_LIVE_DEPLOY_SMOKE_READY`
