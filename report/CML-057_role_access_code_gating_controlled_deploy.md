# CML-057 — Role Access Code Gating Controlled Deploy

## Stato git iniziale

| Campo        | Valore                                 |
| ------------ | -------------------------------------- |
| Branch       | cml-008r-fix-markdown-decision-summary |
| HEAD         | e7d21bd                                |
| Working tree | Pulita                                 |

## Metodo deploy

Il repository non è configurato con Netlify CLI (`netlify` comando non disponibile).

Deploy richiede:

1. Accesso Netlify UI con credenziali autorizzate
2. Drag-drop della cartella `_published_snapshot/netlify-current/`
3. Oppure configurazione `.netlify` con comandi CLI autenticati

## Deploy ID / URL

Manual deploy required via Netlify UI.

Branch: `cml-008r-fix-markdown-decision-summary`
Directory: `_published_snapshot/netlify-current/`

## Smoke live obbligatorio

Dopo deploy manuale verificare:

- Pagina live raggiungibile
- Versione aggiornata servita
- Nessun errore console bloccante
- Azioni libere accessibili
- Azione protetta apre modale codice operativo
- Codice errato respinto
- Codice corretto `CML2025` sblocca
- Refresh mantiene sblocco
- "Blocca di nuovo" riblocca
- Nessun nuovo localStorage
- Regressione `.cml`: PASS

## Regressione `.cml`

- `teacher_proposal`: Invariato
- `department_outcome`: Invariato
- Nessun campo codice/accesso/autenticazione

## Controlli finali

- `git diff --check`: PASS
- Nessuna modifica runtime
- Working tree pulito

## Verdetto

CML_057_ROLE_ACCESS_CODE_GATING_CONTROLLED_DEPLOY_READY
