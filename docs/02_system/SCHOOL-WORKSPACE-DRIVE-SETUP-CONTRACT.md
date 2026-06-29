# SCHOOL-WORKSPACE-DRIVE-SETUP-CONTRACT

## 1. Principio operativo

- Il Drive condiviso della scuola è il punto unico di deposito dei file `.cml`.
- La struttura Drive deve restare semplice.
- L'organizzazione logica dei file è demandata allo strumento, non alle cartelle.
- La scuola usa account scolastici o gruppi Workspace per governare accessi e responsabilità.

## 2. Nome consigliato

- Drive condiviso: `Revisione Curricolo Istituto`
- Eventuale cartella minima: `File CurManLight`
- Non prevedere sottocartelle obbligatorie nella prima versione.

## 3. Ruoli Workspace consigliati

| Ruolo                         | Descrizione                                   | Permessi richiesti                |
| ----------------------------- | --------------------------------------------- | --------------------------------- |
| **Docenti**                   | Caricano proposte `.cml`                      | Contributor                       |
| **Coordinatori dipartimento** | Leggono, scaricano, gestiscono file di lavoro | Content manager                   |
| **Referente curricolo**       | Accede agli esiti dipartimentali              | Content manager o Manager         |
| **Dirigente/staff**           | Visualizza o governa il processo              | Viewer, Content manager o Manager |
| **Amministratore Workspace**  | Abilita Drive condivisi e impostazioni        | Manager (intero Workspace)        |

## 4. Regole di sicurezza minime

- Usare account scolastici.
- Evitare account personali.
- Limitare o disattivare la condivisione esterna.
- Non caricare dati personali di studenti.
- Non caricare valutazioni individuali o dati sensibili.
- Non pubblicare il collegamento del Drive in aree aperte.
- Documentare solo nomi descrittivi e segnaposto.
- Non inserire token, credenziali o ID riservati nel repository.

## 5. File ammessi

- `.cml` proposta docente.
- `.cml` esito dipartimento.
- `.cml` validazione referente.
- Eventuali PDF o report finali solo se previsti da slice successive.
- Nella prima versione: nessun caricamento complesso o pacchetti ZIP.

## 6. Procedura amministrativa consigliata

1. Accedere con account scolastico autorizzato.
2. Creare il Drive condiviso `Revisione Curricolo Istituto`.
3. Aggiungere gruppi o utenti secondo i ruoli.
4. Verificare che i docenti possano caricare un file `.cml` di prova.
5. Verificare che il coordinatore possa scaricare e aprire i file caricati.
6. Verificare che il referente possa accedere agli esiti dipartimentali.
7. Annotare nel report solo esiti e ruoli, non credenziali.

## 7. Preparazione futura per caricamento automatico

- Prevedere un endpoint di caricamento configurato (CML-020).
- Il servizio salverà il file `.cml` nel Drive condiviso.
- Il pulsante nell'app sarà `Invia al Drive condiviso`.
- Deve restare disponibile il fallback `Scarica proposta`.
- Non definire ancora codice Apps Script.
- Non definire ancora endpoint reale.
- Non committare ID reali del Drive o URL riservati.

## 8. Verifiche manuali consigliate

- Upload manuale file `.cml` di prova.
- Download file `.cml` da altro account scolastico autorizzato.
- Controllo impossibilità di accesso da account non autorizzato.
- Controllo assenza di dati personali.
- Controllo che la cartella sia comprensibile senza struttura complessa.

## 9. Cosa non fare ora

- Non creare una gerarchia complessa di cartelle.
- Non collegare ancora l'app a Drive API.
- Non introdurre Apps Script.
- Non automatizzare lettura/sincronizzazione dei file.
- Non caricare dati reali sensibili.
- Non pubblicare link aperti.
- Non usare account personali come riferimento stabile.

## 10. Collegamento con slice successive

- CML-019: generazione file `.cml` proposta docente.
- CML-020: caricamento assistito al Drive condiviso.
- CML-021: import guidato proposte dipartimento.
- CML-022: esito dipartimento `.cml`.
- CML-023: import referente e controlli essenziali.
