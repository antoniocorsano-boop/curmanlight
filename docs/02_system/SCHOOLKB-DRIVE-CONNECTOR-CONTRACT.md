# SCHOOLKB-DRIVE-CONNECTOR-CONTRACT

## 1. Scopo

SchoolKB e' una futura estensione opzionale e separata dal flusso curricolo locale di CurManLight.

L'obiettivo e' permettere, in una linea di sviluppo parallela, la creazione o selezione autorizzata di una cartella Google Drive denominata `schoolkb` e di una struttura iniziale di cartelle e file di configurazione collegata al lavoro curricolare e al D.M. 221/2025.

SchoolKB non sostituisce:

- il ciclo locale `.cml`;
- la validazione umana;
- i dati curricolari locali;
- il flusso docente/dipartimento/referente gia' documentato.

## 2. Principi architetturali

- JavaScript Vanilla con ES6 modules.
- Nessun React, Vue, Angular o framework applicativo.
- Nessun backend nella prima fase.
- Nessun OAuth introdotto nel runtime CurManLight finche' la feature non viene esplicitamente autorizzata.
- Nessuna dipendenza esterna oltre alle librerie ufficiali Google:
  - `https://accounts.google.com/gsi/client`
  - `https://apis.google.com/js/api.js`
- Feature disattivata di default.
- Feature flag obbligatorio prima di qualsiasi integrazione runtime.
- Integrazione opzionale, reversibile e isolata dal flusso curricolo.
- Fallback locale CurManLight sempre disponibile.

## 3. Privacy e sicurezza

Scope OAuth consentito:

```text
https://www.googleapis.com/auth/drive.file
```

Regole obbligatorie:

- Nessun accesso all'intero Drive.
- Nessun uso dello scope completo `https://www.googleapis.com/auth/drive`.
- Token conservati solo in memoria o in `sessionStorage`.
- Nessun token in `localStorage`.
- Nessuna credenziale reale nel repository.
- Nessun client ID reale nel repository.
- Nessun refresh token in app statica.
- Logout o disconnessione esplicita sempre disponibile.
- Messaggi chiari all'utente su cosa viene creato o letto.
- Nessun caricamento di dati personali di studenti o dati sensibili.
- Nessuna assunzione che l'app possa leggere file non creati o non autorizzati dall'utente.

Nota di rischio: `sessionStorage` riduce la persistenza ma non elimina il rischio XSS. Ogni futura implementazione deve mantenere igiene DOM rigorosa e non interpolare contenuti non fidati in HTML.

## 4. Vincolo Drive

Con lo scope `drive.file`, SchoolKB puo' operare solo sui file e sulle cartelle creati dall'app o esplicitamente selezionati/autorizzati dall'utente.

La cartella root `schoolkb` deve quindi essere:

1. creata dall'app dopo consenso OAuth; oppure
2. selezionata/autorizzata dall'utente tramite un flusso consentito.

Il connector non deve assumere accesso a cartelle preesistenti non create o non autorizzate dall'app.

La ricerca Drive deve essere limitata ai file/cartelle accessibili all'app. Qualsiasi UI futura deve spiegare che SchoolKB non sta leggendo l'intero Drive.

## 5. Modulo previsto

Modulo futuro:

```text
driveConnector.js
```

Metodi previsti:

| Metodo                                                        | Responsabilita'                                                                         |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `initGapiClient()`                                            | Carica e inizializza le librerie Google consentite e il client Drive.                   |
| `requestAccessToken()`                                        | Richiede consenso e access token con solo scope `drive.file`.                           |
| `restoreSessionToken()`                                       | Ripristina token da memoria/sessione se ancora valido, senza refresh token persistente. |
| `checkAndCreateRootFolder(folderName)`                        | Cerca tra le cartelle accessibili all'app o crea `schoolkb`.                            |
| `createSubFolder(parentFolderId, subFolderName)`              | Crea una sottocartella sotto la root autorizzata.                                       |
| `uploadConfigTemplate(parentFolderId, fileName, textContent)` | Crea o carica un template testuale iniziale.                                            |
| `disconnect()`                                                | Revoca/azzera lo stato locale e rimuove token in memoria/sessione.                      |

Il modulo deve restare indipendente dal codice curricolare esistente. Ogni chiamata runtime futura deve passare da un layer opzionale con feature flag.

## 6. Struttura SchoolKB proposta

Struttura iniziale prudente:

```text
schoolkb/
  00_CONFIG/
  01_CURRICOLO_ISTITUTO/
  02_FONTI_NORMATIVE/
  03_DISCIPLINE/
  04_DIPARTIMENTI/
  05_REVISIONI/
  99_EXPORT/
```

La struttura e' una base di conoscenza, non un database applicativo. Le cartelle non devono sostituire lo schema dati locale o la validazione umana.

## 7. Template iniziali

Template previsti, da definire in una slice successiva senza crearli nel runtime in SKB-001:

| File                        | Scopo                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| `schoolkb-config.json`      | Configurazione descrittiva della KB, versione schema, data creazione, note privacy.        |
| `README-SchoolKB.txt`       | Spiegazione leggibile per utenti scolastici e amministratori.                              |
| `dm-221-2025-alignment.txt` | Nota di allineamento prudente con D.M. 221/2025 e fonti normative.                         |
| `curricolo-index.json`      | Indice leggero dei riferimenti curricolari, senza duplicare automaticamente i dati locali. |

Nessun template deve contenere credenziali, ID Drive reali, client ID, token o dati personali.

## 8. UX Material Design 3

Componente opzionale previsto:

```text
connect-drive-btn
```

Stati testuali minimi:

| Stato      | Testo UI                       |
| ---------- | ------------------------------ |
| Idle       | `Connetti a SchoolKB`          |
| Loading    | `Inizializzazione in corso...` |
| Synced     | `Sincronizzato`                |
| Error      | `Errore connessione`           |
| Disconnect | `Disconnetti`                  |

Requisiti UX:

- Messaggio privacy breve prima del consenso.
- Indicazione chiara dello scope: accesso solo ai file creati o autorizzati per SchoolKB.
- Stato di focus visibile.
- Area messaggi con `aria-live="polite"`.
- Errore comprensibile e non tecnico.
- Pulsante disconnessione sempre raggiungibile quando connesso.
- Nessun blocco del flusso locale CurManLight se Drive non e' disponibile.

## 9. Stati applicativi

Stati minimi futuri:

| Stato                    | Significato                                              |
| ------------------------ | -------------------------------------------------------- |
| `idle`                   | Feature disponibile ma non avviata.                      |
| `loadingGoogleLibraries` | Librerie Google in caricamento.                          |
| `waitingForConsent`      | Attesa consenso OAuth utente.                            |
| `connected`              | Token ottenuto e client pronto.                          |
| `initializingSchoolKB`   | Creazione/verifica root `schoolkb` e struttura iniziale. |
| `synced`                 | Struttura base verificata o creata.                      |
| `error`                  | Errore di librerie, consenso, permessi o Drive API.      |
| `disconnected`           | Token locale rimosso e sessione SchoolKB chiusa.         |

Le transizioni devono essere esplicite e reversibili. Lo stato `error` non deve compromettere l'uso locale della PWA.

## 10. Rischi

| Rischio                                                 | Mitigazione contrattuale                                                                     |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Dipendenza da Google Cloud OAuth Client ID              | Usare solo placeholder in repo; configurazione reale fuori repository.                       |
| Authorized origins necessari per localhost e produzione | Documentare origins in audit privacy/workspace prima dell'integrazione.                      |
| Restrizioni Workspace scuola                            | Prevedere SKB-005 privacy/workspace audit.                                                   |
| Consenso OAuth non concesso                             | Fallback locale e stato `disconnected`.                                                      |
| Token expiration                                        | Richiedere nuovo consenso/token; nessun refresh token statico.                               |
| XSS con token in `sessionStorage`                       | Preferire memoria; se sessione necessaria, sanitizzazione rigorosa e nessun HTML non fidato. |
| Complessita' superiore al CurManLight locale            | Feature flag, modulo isolato, roadmap separata.                                              |
| Confusione tra dati locali e dati Drive                 | UX e copy devono dichiarare che SchoolKB e' estensione parallela.                            |
| Scope troppo ampio                                      | Vietato scope `drive`; ammesso solo `drive.file`.                                            |
| Accesso implicito a cartelle preesistenti               | Vietato assumere accesso non autorizzato.                                                    |

## 11. Non-obiettivi

SKB-001 non implementa:

- codice runtime;
- OAuth reale;
- client ID reale;
- credenziali reali;
- deploy;
- sincronizzazione bidirezionale;
- import automatico da Drive;
- accesso a file personali Drive;
- modifica del ciclo curricolo/discipline;
- modifica di export/import curricolari esistenti;
- modifica di funzioni evidenze/UDA;
- modifica dello schema `.cml`;
- nuova dipendenza nel progetto.

## 12. Roadmap proposta

| Slice   | Scopo                                                                      |
| ------- | -------------------------------------------------------------------------- |
| SKB-001 | Contratto tecnico, privacy, UX e architetturale.                           |
| SKB-002 | Prototipo locale isolato, non collegato al runtime CurManLight pubblicato. |
| SKB-003 | Schema cartelle e template SchoolKB con soli placeholder.                  |
| SKB-004 | Smoke UI Material Design 3 del componente opzionale.                       |
| SKB-005 | Privacy/workspace audit: OAuth client, origins, policy scuola, rischi.     |
| SKB-006 | Eventuale integrazione controllata dietro feature flag.                    |

## Verdetto contrattuale

SchoolKB puo' essere sviluppata solo come estensione opzionale, reversibile e separata dal flusso curricolare locale. La prima implementazione ammessa deve usare scope `drive.file`, nessuna credenziale reale in repository, nessun refresh token e nessun accesso all'intero Drive.
