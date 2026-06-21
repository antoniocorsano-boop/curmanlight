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

## 4.1 Schema `.cml` implementato (CML-019)

```json
{
  "schemaVersion": "1.0",
  "fileType": "teacher_proposal",
  "appName": "CurManLight",
  "createdAt": "ISO-8601 datetime",
  "role": "teacher",
  "discipline": "nome disciplina o null",
  "sourceContext": {
    "currentFramework": "D.M. 254/2012",
    "revisionFramework": "D.M. 221/2025"
  },
  "counts": {
    "total": 103,
    "ok": 41,
    "modifica": 54,
    "nuovo": 8
  },
  "proposals": [
    {
      "id": "string",
      "discipline": "string",
      "ordine": "string",
      "classe": "string",
      "type": "traguardo|obiettivo",
      "status": "ok|modifica|nuovo",
      "decisione": "approvata|rifiutata|null",
      "testoAttuale": "string",
      "proposta": "string",
      "motivazione": "string",
      "fonte": "string"
    }
  ],
  "checks": {
    "hasProposals": true,
    "hasDiscipline": true,
    "hasSources": true
  },
  "humanValidationRequired": true
}
```

## 4.2 Schema `department_outcome` (CML-022)

```json
{
  "schemaVersion": "1.0",
  "fileType": "department_outcome",
  "appName": "CurManLight",
  "createdAt": "ISO-8601 datetime",
  "role": "department",
  "disciplines": ["string"],
  "proposals": [
    {
      "id": "string",
      "discipline": "string",
      "status": "string",
      "decision": "accolta|accolta_con_modifiche|rinviata|non_accolta",
      "section": "string",
      "type": "string",
      "classe": "string",
      "text": "string",
      "motivation": "string",
      "evidence": "string"
    }
  ],
  "checks": {
    "hasProposals": true,
    "hasDecisions": true,
    "hasDisciplines": true
  },
  "humanValidationRequired": true
}
```

## 5. Invio automatico al Drive

- La prima automazione riguarda solo il docente.
- Pulsante previsto: `Invia al Drive condivisto`.
- Lo strumento genera il file `.cml`.
- Lo strumento lo invia a un servizio di caricamento configurato.
- Il servizio salva il file nella cartella Drive condivisa.
- Lo strumento mostra conferma o errore comprensibile.
- **Download manuale sempre disponibile**: il pulsante "Scarica proposta .cml" non è mai nascosto.
- **Invio opzionale**: se l'endpoint non è configurato, lo strumento informa e offre il fallback.

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

## 7.1 Implementazione CML-021 — import manuale guidato

- Il coordinatore apre la sezione “Validazione dipartimentale” nel tab Revisione per disciplina.
- Seleziona uno o più file .cml già scaricati o ricevuti dai docenti.
- La lettura e la validazione avvengono esclusivamente nel browser, senza accesso automatico al Drive.
- Sono accettati come validi solo JSON con fileType teacher_proposal, disciplina, counts, proposals e humanValidationRequired uguale a true.
- File errati, JSON non valido e dati minimi mancanti sono elencati nel riepilogo ma esclusi dalla lista proposte.
- L'import prepara una vista di lettura e controllo; non introduce ancora decisioni o export dipartimentali.
- Lo stato è temporaneo per la sessione e resta separato dalla successiva decisione dipartimentale.

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