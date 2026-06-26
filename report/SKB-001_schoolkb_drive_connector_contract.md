# SKB-001 - SchoolKB Drive Connector Contract

Data: 2026-06-26

## 1. Scopo

SKB-001 definisce se, come e con quali vincoli puo' essere sviluppata una futura estensione opzionale Google Drive / SchoolKB per CurManLight.

SchoolKB e' una base di conoscenza scolastica separata dal flusso curricolo locale. La sua prima finalita' e' creare o autorizzare una cartella Drive `schoolkb` con struttura iniziale prudente e template di configurazione collegati al lavoro curricolare e al D.M. 221/2025.

## 2. Baseline tecnica

| Controllo | Esito |
|-----------|-------|
| Root Git | `C:/Users/anton/CurManLight` |
| Branch | `main` |
| Commit iniziale | `fd5c952` |
| origin/main | `90ab240` |
| Working tree iniziale | Pulito; branch avanti di 1 commit |
| `git diff --check` preflight | PASS |
| Collisioni SKB-001 | Assenti |
| Deploy | Non eseguito |

Il branch era gia' avanti rispetto a `origin/main`; la richiesta imponeva stop solo in caso di working tree non pulito. Nessun push e' stato eseguito.

## 3. Decisione architetturale

SchoolKB puo' procedere solo come estensione:

- opzionale;
- separata dal flusso curricolo;
- disattivata di default;
- reversibile;
- protetta da feature flag prima di ogni integrazione runtime;
- senza backend nella prima fase;
- senza framework;
- senza credenziali reali in repository.

La PWA CurManLight resta locale e funzionante senza OAuth, senza Google API e senza rete obbligatoria.

## 4. Principi architetturali

| Area | Regola |
|------|--------|
| Linguaggio | JavaScript Vanilla ES6 modules |
| Framework | Nessun React, Vue, Angular |
| Backend | Nessuno nella prima fase |
| Librerie esterne | Solo librerie ufficiali Google |
| Google Identity | `https://accounts.google.com/gsi/client` |
| Google API client | `https://apis.google.com/js/api.js` |
| Stato feature | Disattivata di default |
| Integrazione | Opzionale e reversibile |

## 5. Privacy e sicurezza

Scope consentito:

```text
https://www.googleapis.com/auth/drive.file
```

Vincoli:

- Nessun accesso all'intero Drive.
- Vietato scope completo `https://www.googleapis.com/auth/drive`.
- Token solo in memoria o `sessionStorage`.
- Vietato `localStorage` per token.
- Nessuna credenziale reale nel repository.
- Nessun client ID reale nel repository.
- Nessun refresh token in app statica.
- Logout/disconnessione esplicita.
- Messaggi chiari all'utente.
- Nessun dato personale di studenti.

## 6. Vincolo Drive

Con `drive.file`, SchoolKB puo' lavorare solo sui file e sulle cartelle creati dall'app o esplicitamente autorizzati dall'utente.

La cartella `schoolkb` deve essere:

1. creata dall'app dopo consenso; oppure
2. selezionata/autorizzata dall'utente.

La ricerca deve restare limitata ai file/cartelle accessibili all'app. Non si deve suggerire o simulare accesso all'intero Drive.

## 7. Modulo previsto

Modulo futuro:

```text
driveConnector.js
```

Metodi:

| Metodo | Scopo |
|--------|-------|
| `initGapiClient()` | Inizializzare librerie Google e client Drive. |
| `requestAccessToken()` | Richiedere consenso OAuth con scope `drive.file`. |
| `restoreSessionToken()` | Ripristinare token di sessione se ancora valido. |
| `checkAndCreateRootFolder(folderName)` | Verificare o creare la root `schoolkb`. |
| `createSubFolder(parentFolderId, subFolderName)` | Creare sottocartelle nella root autorizzata. |
| `uploadConfigTemplate(parentFolderId, fileName, textContent)` | Caricare template testuali iniziali. |
| `disconnect()` | Rimuovere token/stato locale e disconnettere SchoolKB. |

## 8. Struttura SchoolKB proposta

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

Questa struttura e' solo proposta contrattuale. SKB-001 non crea cartelle reali e non crea file nel runtime.

## 9. Template iniziali

| Template | Funzione |
|----------|----------|
| `schoolkb-config.json` | Configurazione descrittiva, versione e note privacy. |
| `README-SchoolKB.txt` | Spiegazione leggibile della cartella SchoolKB. |
| `dm-221-2025-alignment.txt` | Nota prudente di allineamento a D.M. 221/2025. |
| `curricolo-index.json` | Indice leggero dei riferimenti curricolari. |

I template non devono contenere token, client ID, ID Drive reali, credenziali o dati personali.

## 10. UX Material Design 3

Componente opzionale:

```text
connect-drive-btn
```

Stati:

| Stato applicativo | Testo UI |
|-------------------|----------|
| Idle | `Connetti a SchoolKB` |
| Loading | `Inizializzazione in corso...` |
| Synced | `Sincronizzato` |
| Error | `Errore connessione` |
| Disconnect | `Disconnetti` |

Accessibilita':

- `aria-live="polite"` per i messaggi di stato;
- focus state visibile;
- messaggio privacy breve prima del consenso;
- errori chiari e non tecnici.

## 11. Stati applicativi

Stati minimi:

1. `idle`
2. `loadingGoogleLibraries`
3. `waitingForConsent`
4. `connected`
5. `initializingSchoolKB`
6. `synced`
7. `error`
8. `disconnected`

Lo stato `error` non deve bloccare il flusso locale CurManLight.

## 12. Rischi

| Rischio | Nota |
|---------|------|
| Dipendenza da Google Cloud OAuth Client ID | Richiede configurazione esterna al repo. |
| Authorized origins | Servono per localhost e produzione. |
| Restrizioni Workspace scuola | Possibile blocco per policy istituto. |
| Consenso OAuth | L'utente puo' negare o revocare. |
| Token expiration | Serve richiesta nuovo token, senza refresh token statico. |
| XSS e `sessionStorage` | Token leggibile da script compromessi; preferire memoria quando possibile. |
| Complessita' rispetto al locale | Mitigare con feature flag e fallback locale. |
| Confusione dati locali/Drive | Copy e UX devono separare SchoolKB dal curricolo locale. |

## 13. Non-obiettivi

SKB-001 non implementa:

- runtime;
- OAuth reale;
- client ID reale;
- credenziali;
- deploy;
- sincronizzazione bidirezionale;
- import automatico da Drive;
- accesso a file personali Drive;
- modifica del ciclo curricolo/discipline;
- modifica export/import curricolari;
- modifica funzioni evidenze/UDA;
- modifica schema `.cml`;
- dipendenze.

## 14. Roadmap proposta

| Slice | Obiettivo |
|-------|-----------|
| SKB-001 | Contratto. |
| SKB-002 | Prototipo locale isolato. |
| SKB-003 | Schema cartelle SchoolKB. |
| SKB-004 | Smoke UI. |
| SKB-005 | Privacy/workspace audit. |
| SKB-006 | Eventuale integrazione controllata. |

## 15. Validazioni e conferme

- Docs-only.
- Nessuna modifica runtime.
- Nessuna modifica a Drive/OAuth runtime.
- Nessuna credenziale inserita.
- Nessun client ID reale.
- Nessuna modifica a `content/curriculum/`.
- Nessuna modifica a `tools/`.
- Nessuna modifica a schema `.cml`.
- Nessuna modifica export/import.
- Nessuna modifica funzioni evidenze/UDA.
- Nessuna dipendenza.
- Nessun deploy.
- Nessun push.

## 16. Verdetto

`SKB_001_SCHOOLKB_DRIVE_CONNECTOR_CONTRACT_READY`
