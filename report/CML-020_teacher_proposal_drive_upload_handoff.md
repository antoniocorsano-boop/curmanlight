# CML-020 — Teacher Proposal Drive Upload Handoff

## Stato git iniziale

| Campo | Valore |
|---|---|
| Branch | cml-008r-fix-markdown-decision-summary |
| HEAD | 1cee756 |
| Working tree | Pulita |

## File runtime modificati

- `_published_snapshot/netlify-current/index.html`

## Funzioni aggiunte

| Funzione | Descrizione |
|---|---|
| `uploadTeacherCmlToDrive()` | Invia il file .cml all'endpoint configurato |
| `getDriveUploadEndpoint()` | Recupera l'endpoint da localStorage |

## Conferma riuso schema .cml di CML-019

Il modello .cml è generato tramite `buildTeacherCmlModel()`, confermando:
- `fileType: "teacher_proposal"`
- `humanValidationRequired: true`
- `discipline`
- `counts`
- `proposals`
- `checks`

## Conferma nessun endpoint reale committato

L'endpoint viene letto da `localStorage.getItem('curmanlight.driveUploadEndpoint')`, valore vuoto di default.

## Conferma nessun token/ID/credenziale

Nessuna credenziale, token o ID sensibile è presente nel codice.

## Conferma nessuna Drive API diretta

La funzione usa `fetch` verso un endpoint astratto, senza librerie Google.

## Conferma nessun import automatico da Drive

Nessuna lettura automatica dei file Drive.

## Conferma fallback manuale

Il pulsante "Scarica proposta .cml" è sempre presente e funzionante.

## Controlli manuali eseguiti

- Verifica presenza `exportTeacherCml()` e `buildTeacherCmlModel()`
- Verifica struttura HTML dei pulsanti aggiunti
- Verifica funzione JavaScript aggiunta
- Verifica assenza stringhe sensibili nel repository

## Tabella rischi/mitigazioni

| Rischio | Mitigazione |
|---|---|
| Endpoint non configurato | Messaggio informativo con fallback download |
| Errore invio | Messaggio di errore con fallback download |
| Doppi invii | Pulsante disabilitato durante invio |
| File non valido | Usa lo stesso schema validato in CML-019 |
| Utente senza rete | Download manuale sempre disponibile |
| Drive non predisposto | Configurazione esterna al repository |
| Uso accidentale di dati sensibili | Nessun dato sensibile nel payload |

## Verdetto finale

CML_020_TEACHER_PROPOSAL_DRIVE_UPLOAD_HANDOFF_READY_ENDPOINT_NOT_CONFIGURED