# CML-535 - Guided Teacher Pilot Runtime Entry Point

## Sintesi

CML-535 aggiunge nella baseline React un ingresso runtime provvisorio per il pilot docenti guidato definito in CML-534. L'intervento introduce solo orientamento iniziale e primo compito, senza raccolta persistente, analisi automatica o modifica del curricolo.

Verdetto:

```text
CML_535_GUIDED_TEACHER_PILOT_RUNTIME_ENTRY_READY_LOCAL_NOT_PUSHED
```

## Punto di ingresso

La Home mostra una superficie secondaria "Partecipa alla prova guidata" con testo di supporto:

```text
Esplora alcune funzioni di CurManLight e annota cio che risulta chiaro, difficile o migliorabile.
```

L'ingresso e distinto dalle card operative principali e porta alla nuova vista `pilot-guidato-docenti`.

## Schermata iniziale

La vista `GuidedTeacherPilotView` presenta:

- titolo: "Prova guidata per docenti";
- scopo: capire se lo strumento e chiaro, utile e adatto al lavoro reale dei docenti;
- regole essenziali su dati personali, documenti riservati, curricolo d'istituto e assenza di risposte giuste o sbagliate;
- durata indicativa 15-20 minuti;
- azioni "Inizia la prova" e "Torna alla Home".

## Primo compito

Il primo compito deriva da CML-534:

```text
Aprire la React preview e indicare cosa si puo fare da docente.
```

Nel runtime e formulato come:

```text
Compito 1 - Orientati nella Home
Apri la Home e osserva da dove inizieresti senza istruzioni esterne.
```

La superficie indica obiettivo, cosa osservare, nota di sicurezza sui dati reali, azione "Vai alla Home" e ritorno "Torna alle regole".

## Stato e limiti intenzionali

- Stato React locale limitato a `intro` e `task-1`.
- Nessun salvataggio permanente.
- Nessun localStorage dedicato al pilot.
- Nessuna esportazione o raccolta completa di osservazioni.
- Nessun backend, telemetria, invio remoto o autenticazione.
- Nessun ampliamento del Registro decisioni.
- Nessun motore multi-step del protocollo.

## Accessibilita e mobile

La nuova superficie usa:

- titoli gerarchici;
- pulsanti `button` con testo visibile;
- icone solo come supporto, non come unico segnale;
- layout responsive a colonna su mobile;
- focus browser standard preservato;
- uscita verso Home disponibile in intro e nel primo compito.

## Controlli

| Controllo | Esito |
|-----------|-------|
| Script CML-535 RED prima dell'implementazione | FAIL atteso per vista mancante |
| `node --check curman-react/tools/check-cml535-guided-teacher-pilot-entry.mjs` | PASS |
| `node curman-react/tools/check-cml535-guided-teacher-pilot-entry.mjs` | PASS |
| `git diff --check` | PASS |
| `cd curman-react; npm run lint` | PASS |
| `cd curman-react; npm run build` | PASS |
| `node tools/check-service-worker-offline-regression.mjs` | PASS |
| `node tools/check-app-pair.mjs` | PASS |
| `node tools/test-runtime-mappa-dati-shape.mjs` | PASS |

## Verifica browser

Verificati desktop 1440 x 1000 e mobile 390 x 844:

- Home caricata;
- accesso "Partecipa alla prova guidata" visibile;
- schermata iniziale aperta;
- regole leggibili;
- "Inizia la prova" funzionante;
- primo compito visualizzato;
- "Vai alla Home" funzionante;
- "Torna alla Home" e "Torna alle regole" disponibili;
- nessun errore console;
- nessuna sovrapposizione o scroll orizzontale osservato.

## Perimetro escluso

Non sono stati modificati:

- runtime storico;
- service worker;
- dati curricolari canonici;
- workflow Pages;
- schema o contratti `.cml`;
- archivio legacy `docs/REPO-MOVELOG.md`.

## Verdetto

```text
CML_535_GUIDED_TEACHER_PILOT_RUNTIME_ENTRY_READY_LOCAL_NOT_PUSHED
```
