# CML-018A — School Workspace Drive Setup Contract

## Stato git iniziale

| Campo | Valore |
|---|---|
| Branch | cml-008r-fix-markdown-decision-summary |
| HEAD | e5c9288 |
| Working tree | Pulita |

## Conferma docs-only

- Solo creazione file documentazione.
- Nessuna modifica a codice runtime, logiche o asset.

## Conferma nessuna modifica runtime

- `index.html` invariato.
- `_published_snapshot` invariato.
- Logica applicativa invariata.

## Conferma nessun deploy

- Nessun comando deploy eseguito.
- Deploy non previsto in questa slice.

## Conferma nessuna modifica a PDF, sw.js, _headers, asset

- `sw.js` invariato.
- `_headers` invariato.
- PDF invariati.
- Asset invariati.

## Checklist Drive Workspace

| Elemento | Stato |
|---|---|
| Drive condiviso previsto | ✓ (`Revisione Curricolo Istituto`) |
| Account scolastico | ✓ (obbligatorio) |
| Ruoli minimi | ✓ (Contributor/Content manager) |
| Condivisione esterna limitata | ✓ (disattivata o fortemente limitata) |
| File `.cml` ammessi | ✓ (proposte, esiti, validazioni) |
| Fallback manuale | ✓ (`Scarica proposta`) |
| Nessuna credenziale documentata | ✓ (solo nomi descrittivi) |

## Tabella rischi/mitigazioni

| Rischio | Mitigazione |
|---|---|
| Account personale usato per errore | Documentare solo "account scolastico", verifica manuale preliminare |
| Permessi troppo ampi | Ruolo Contributor per docenti, Content manager per coordinatori |
| Condivisione esterna non limitata | Disattivare o limitare fortemente, policy Workspace |
| File caricati non riconoscibili | Controlli minimi nello strumento (sezione 9 di contract) |
| Assenza di Drive condiviso | Creare Drive in Workspace, condividere con gruppi |
| Caricamento automatico non ancora disponibile | Fallback `Scarica proposta` sempre disponibile |
| Procedura troppo complessa per i docenti | Flusso in 3 passi, linguaggio chiaro, struttura semplice |

## Verdetto finale

CML_018A_SCHOOL_WORKSPACE_DRIVE_SETUP_CONTRACT_READY