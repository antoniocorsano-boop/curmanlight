# SIMPLE-DRIVE-HANDOFF-WORKFLOW-CONTRACT

## 1. Principio guida

- Il Drive condiviso è un deposito unico.
- L'utente non deve organizzare cartelle.
- Lo strumento produce e riconosce i file corretti.
- La procedura deve essere comprensibile in pochi passaggi.

## 2. Ruoli

- **Docente**: propone modifiche.
- **Dipartimento**: valuta le proposte ricevute e produce un esito unitario.
- **Referente curricolo**: importa gli esiti dipartimentali, controlla evidenze e prepara la validazione.

## 3. Flusso minimo

### Docente

1. Compila o conferma le proposte.
2. Clicca `Invia al Drive condiviso`.
3. Riceve conferma.

### Dipartimento

1. Scarica o seleziona i file `.cml` dal Drive.
2. Li importa nello strumento.
3. Valuta e produce esito dipartimentale.

### Referente

1. Importa gli esiti dipartimentali `.cml`.
2. Controlla completezza, evidenze e criticità.
3. Prepara la validazione del gruppo di lavoro.

## 4. File unico `.cml`

- Il file `.cml` è il file CurManLight di scambio.
- L'utente non lo modifica a mano.
- Lo strumento riconosce almeno tre tipi:
  - `teacher_proposal`
  - `department_outcome`
  - `referent_validation`
- Il file contiene dati sufficienti per:
  - Riconoscimento
  - Importazione
  - Tracciabilità
  - Controllo minimo
  - Validazione umana

## 5. Invio automatico al Drive

- La prima automazione riguarda solo il docente.
- Pulsante previsto: `Invia al Drive condiviso`.
- Lo strumento genera il file `.cml`.
- Lo strumento lo invia a un servizio di caricamento configurato.
- Il servizio salva il file nella cartella Drive condivisa.
- Lo strumento mostra conferma o errore comprensibile.

## 6. Fallback manuale

- Deve restare disponibile: `Scarica proposta`.
- Serve se:
  - Il caricamento automatico non funziona.
  - La rete non è disponibile.
  - Il servizio Drive non è configurato.
  - La scuola preferisce caricamento manuale.

## 7. Import dipartimento

- Nella prima versione non legge automaticamente Drive.
- Il coordinatore seleziona manualmente i file `.cml`.
- Lo strumento riconosce quali file sono validi.
- Lo strumento separa:
  - File corretti.
  - File incompleti.
  - File non riconoscibili.
  - Proposte duplicate o simili.

## 8. Import referente

- Nella prima versione il referente importa manualmente gli esiti dipartimentali.
- Lo strumento segnala:
  - Dipartimenti ricevuti.
  - Dipartimenti mancanti.
  - Proposte complete.
  - Proposte da controllare.
  - Evidenze mancanti.
  - Eventuali conflitti evidenti.

## 9. Controlli minimi

- Non bloccare inutilmente il lavoro.
- Segnalare in modo chiaro:
  - Proposta senza motivazione.
  - Proposta senza fonte.
  - Testo proposto mancante.
  - Esito dipartimentale incompleto.
  - File non riconoscibile.
  - Disciplina mancante.
  - Duplicati probabili.
- Ogni controllo deve essere espresso in linguaggio comprensibile.

## 10. Cosa non fare nella prima versione

- Non creare struttura Drive complessa.
- Non sincronizzare automaticamente tutto il Drive.
- Non introdurre dashboard cloud.
- Non introdurre login complesso nell'app se non necessario.
- Non rendere Drive un database.
- Non automatizzare approvazioni.
- Non sostituire la decisione del dipartimento o del referente.
- Non produrre documento finale senza validazione umana.

## 11. Sequenza futura proposta

- CML-019: file `.cml` proposta docente.
- CML-020: invio automatico proposta docente al Drive.
- CML-021: import guidato proposte in modalità dipartimento.
- CML-022: esportazione esito dipartimento `.cml`.
- CML-023: import esiti referente e controlli essenziali.