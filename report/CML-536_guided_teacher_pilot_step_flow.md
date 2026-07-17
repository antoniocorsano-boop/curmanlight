# CML-536 - Guided Teacher Pilot Step Flow

## Sintesi

CML-536 estende il punto di ingresso CML-535 in un percorso guidato breve a quattro passaggi. Il flusso resta runtime React, locale alla sessione, senza raccolta persistente o analisi delle osservazioni.

Verdetto:

```text
CML_536_GUIDED_TEACHER_PILOT_STEP_FLOW_READY_LOCAL_NOT_PUSHED
```

## Flusso implementato

| Passaggio | Titolo | Funzione collegata |
|-----------|--------|-------------------|
| 1 | Orientarsi nella Home | Home |
| 2 | Consultare una disciplina | Consulta il curricolo |
| 3 | Avviare una proposta | Proponi un aggiornamento |
| 4 | Riconoscere il passaggio di validazione | Segui il processo |

Ogni passaggio presenta obiettivo, istruzione breve, cosa osservare e azione per aprire la funzione interessata.

## Comportamento utente

- `Inizia la prova` apre il primo passaggio.
- `Precedente` e `Continua` navigano il flusso.
- `Vai alla funzione` apre la vista applicativa collegata.
- `Torna alle regole` riporta alla schermata iniziale.
- `Riprendi la prova` riparte dall'ultimo passaggio visitato nella sessione.
- `Esci dalla prova` torna alla Home.

## Limiti intenzionali

Non sono stati introdotti:

- campi di annotazione;
- salvataggio persistente;
- localStorage o sessionStorage dedicati;
- esportazione;
- punteggi;
- analisi automatica;
- invio di dati;
- collegamenti al Registro decisioni;
- telemetria;
- modifiche ai contratti `.cml`.

## Accessibilita e mobile

La superficie usa titoli gerarchici, pulsanti testuali, icone solo di supporto, indicatore di passaggio non basato solo sul colore e layout responsive a colonna su mobile.

## Rischi residui

- Il flusso guida la sessione ma non registra evidenze.
- La ripresa resta solo in memoria React e non sopravvive a reload o chiusura tab.
- La verifica reale con docenti resta necessaria per classificare eventuali P0/P1.

## Controlli

| Controllo | Esito |
|-----------|-------|
| RED CML-536 prima dell'implementazione | FAIL atteso per script/flow mancanti |
| `node --check curman-react/tools/check-cml536-guided-teacher-pilot-step-flow.mjs` | PASS |
| `node curman-react/tools/check-cml536-guided-teacher-pilot-step-flow.mjs` | PASS |
| `node curman-react/tools/check-cml535-guided-teacher-pilot-entry.mjs` | PASS |
| `git diff --check` | PASS |
| `npm run lint` | PASS, warning preesistenti non bloccanti |
| `npm run build` | PASS |
| `node tools/check-service-worker-offline-regression.mjs` | PASS |
| `node tools/check-app-pair.mjs` | PASS |
| `node tools/test-runtime-mappa-dati-shape.mjs` | PASS |

## Verifica browser

Desktop 1440 x 1000 e mobile 390 x 844:

- accesso Home visibile;
- regole leggibili;
- quattro passaggi navigabili;
- funzioni collegate raggiungibili;
- uscita sempre disponibile;
- nessun errore console;
- nessun page error;
- nessun overflow orizzontale.

## Verdetto

```text
CML_536_GUIDED_TEACHER_PILOT_STEP_FLOW_READY_LOCAL_NOT_PUSHED
```
