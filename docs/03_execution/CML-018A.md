# CML-018A — School Workspace Drive Setup Contract

## Slice

Predisposizione contratto operativo per Google Drive condiviso su Workspace della scuola.

## Branch

cml-008r-fix-markdown-decision-summary

## Commit iniziale

e5c9288

## Collegamento con CML-018

CML-018 ha definito il flusso operativo `.cml` e i ruoli. CML-018A prepara il supporto infrastrutturale: Drive condiviso Workspace, account scolastici, permessi minimi e regole di accesso.

## Razionale dell'uso di Workspace scolastico

I Drive condivisi su Workspace della scuola garantiscono:

- Proprietà collettiva dei file (non legati a singoli account)
- Controllo centralizzato sui permessi
- Accesso tramite account istituzionali
- Coerenza con la governance dell'istituto

## Decisioni progettuali approvate

| #   | Decisione                                          |
| --- | -------------------------------------------------- |
| 1   | Drive condiviso: `Revisione Curricolo Istituto`    |
| 2   | Account scolastici obbligatori                     |
| 3   | Ruolo Contributor per docenti (caricamento file)   |
| 4   | Ruolo Content manager per coordinatori e referente |
| 5   | Struttura cartelle semplice o assente              |
| 6   | Condivisione esterna disattivata o limitata        |

## Confini della slice

- Slice esclusivamente docs-only.
- Nessuna modifica runtime.
- Nessuna modifica a `index.html`.
- Nessuna modifica a `_published_snapshot`.
- Nessuna modifica a PDF.
- Nessuna modifica a `sw.js`.
- Nessuna modifica a `_headers`.
- Nessuna modifica ad asset.
- Nessun deploy.
- Nessun Apps Script.
- Nessun Google API.
- Nessuna credenziale o ID sensibile documentato.

## File creati/modificati

- `docs/02_system/SCHOOL-WORKSPACE-DRIVE-SETUP-CONTRACT.md` (nuovo)
- `report/CML-018A_school_workspace_drive_setup_contract.md` (nuovo)
- `docs/REPO-MOVELOG.md` (aggiornato)

## Verifiche eseguite

- Branch confermato: `cml-008r-fix-markdown-decision-summary`
- HEAD confermato: `e5c9288`
- Working tree pulita all'inizio
- File CML-018 presenti
- Nessuna modifica runtime aperta
- `git diff --check`: nessun problema

## Verdetto finale

CML_018A_SCHOOL_WORKSPACE_DRIVE_SETUP_CONTRACT_READY

## Prossimo step raccomandato

CML-019: file `.cml` proposta docente.
