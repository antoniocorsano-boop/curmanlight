# CML-534 - Guided Teacher Pilot Protocol for React Baseline

## Sintesi

CML-534 prepara il primo pilot guidato sulla baseline React senza modificare codice, dati, runtime storico o workflow. La decisione di CML-533 viene tradotta in un protocollo eseguibile con 3-5 docenti, orientato a evidenze osservabili e non a semplice gradimento.

Verdetto:

```text
CML_534_GUIDED_TEACHER_PILOT_PROTOCOL_READY_LOCAL_NOT_PUSHED
```

## Fonti considerate

- `docs/03_execution/CML-533.md`
- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/REACT-BASELINE-AND-CAPABILITY-PERIMETER.md`
- `docs/02_system/HUMAN-SYNTHETIC-COMPARISON-PROTOCOL.md`
- `report/CML-428_user_validation_pilot_kit.md`
- `report/CML-429_user_validation_evidence_intake_model.md`
- `report/CML-431_pm09_pilot_readiness_checkpoint.md`

## Partecipanti

| Campo | Regola |
|-------|--------|
| Numero minimo | 3 docenti |
| Numero raccomandato | 5 docenti |
| Profilo | ordini, discipline e familiarita digitale differenti |
| Identificazione | solo codici anonimi `T01`, `T02`, `T03` |
| Dati esclusi | nomi di alunni, classi reali, email, telefoni, BES/DSA, dati sensibili |
| Durata | 20-30 minuti a sessione |

## Script facilitatore

1. Presentare CurManLight come strumento di lavoro locale per consultare, proporre, revisionare e validare contenuti curricolari.
2. Chiarire che la prova non valuta il docente.
3. Chiarire che nessuna azione modifica automaticamente il curricolo canonico.
4. Chiedere di ragionare ad alta voce quando possibile.
5. Intervenire solo con prompt neutri: "Cosa proverebbe a fare ora?", "Dove si aspetta di trovare questa funzione?".
6. Registrare osservazioni in forma anonima.
7. Separare sempre fatti osservati e opinioni.

## Compiti di pilot

| ID | Area | Compito | Output minimo |
|----|------|---------|---------------|
| T1 | Orientamento | Aprire la React preview e indicare cosa si puo fare da docente | Nota osservatore su primo percorso tentato |
| T2 | Consultazione | Cercare una disciplina o un contenuto curricolare utile | Nota su comprensione di fonte/stato/contenuto |
| T3 | Proposta | Creare o modificare una proposta di prova senza dati personali | Stato locale o file di prova, se previsto dal flusso |
| T4 | Salvataggio | Spiegare cosa resta salvato e dove | Evidenza su comprensione di locale/browser/export |
| T5 | Export | Esportare un file `.cml` e spiegare a chi andrebbe consegnato | File locale di prova o blocco classificato |
| T6 | Ruoli | Descrivere il passaggio Docente -> Dipartimento -> Referente | Nota su chiarezza, perdita o doppia gestione |
| T7 | Feedback | Compilare feedback guidato o produrre note osservatore | Output locale importabile o sintetizzabile |

## Griglia evidenze

| Campo | Descrizione |
|-------|-------------|
| Evidence ID | `CML534-Tnn-Exx` |
| Partecipante | codice anonimo |
| Compito | `T1`-`T7` |
| Evento osservato | azione concreta, esitazione, domanda, errore, ritorno |
| Aspettativa | comportamento o comprensione attesa |
| Scarto | cosa non torna rispetto al flusso previsto |
| Severita | `P0` blocco, `P1` rischio pilot, `P2` miglioramento, `P3` nota |
| Categoria | orientamento, salvataggio, export, validazione, ruolo, mobile, accessibilita |
| Intervento | nessuno, prompt neutro, guida esplicita |
| Output | file esportato, nota, screenshot depurato, nessun output |
| Opinione collegata | gradimento o suggerimento, separato dal fatto |

## Regole decisionali

| Segnale | Azione |
|---------|--------|
| Un `P0` | Fermare o sospendere il pilot e aprire microfix mirato |
| Due `P1` uguali | Candidare slice prioritaria |
| Una opinione senza evidenza | Conservare come segnale, non aprire backlog automatico |
| Evidenza umana non vista dallo swarm | Dare priorita al comportamento umano e ricalibrare scenari sintetici |
| Finding sintetico non confermato | Conservare come rischio tecnico o falso positivo, non come UX confermata |

## Stop criteria

Il pilot si ferma se:

- l'app non e avviabile o non consente i compiti essenziali;
- il docente inserisce o tenta di inserire dati personali reali;
- il docente ritiene che il canonico sia stato modificato automaticamente;
- salvataggio o export falliscono senza output recuperabile;
- mobile, tastiera o focus impediscono completamento di orientamento, consultazione o export;
- emerge un problema di sicurezza, privacy o perdita dati.

Il pilot continua con annotazione rafforzata se:

- una stessa ambiguita non bloccante appare con un solo docente;
- il docente completa il compito ma richiede un prompt neutro;
- il problema riguarda linguaggio, ordine delle schermate o aspettativa sul flusso.

## Mobile e accessibilita come gate

La verifica minima durante il pilot riguarda:

- visibilita del focus per azioni essenziali;
- uso da tastiera dei comandi principali quando osservabile;
- leggibilita e assenza di sovrapposizioni su viewport mobile;
- possibilita di orientarsi, consultare ed esportare senza controllo preciso del mouse;
- comprensione dei messaggi di validazione e degli stati salvati.

Gli esiti `P0/P1` diventano gate prima di proseguire con un pilot esteso. Gli esiti `P2/P3` entrano nel backlog ordinario.

## Output locale esportabile

Il pacchetto minimo post-sessione contiene:

- una scheda markdown o CSV per partecipante;
- eventuali file `.cml` di prova, privi di dati personali;
- eventuale export feedback JSON/Markdown;
- sintesi consolidata compatibile con CML-525P/Q;
- candidati `PilotFinding`;
- decisioni candidate per il Registro decisioni CML-526.

## Matrice conclusiva

| Asse | Stato dopo CML-534 | Blocco al pilot | Valore del prossimo incremento | Priorita |
|------|--------------------|----------------:|-------------------------------:|---------:|
| Registro decisioni | Pronto come destinazione delle decisioni post-evidenza | Basso | Medio | P2 |
| Pilot docenti | Protocollo operativo definito; esecuzione ancora da fare | Medio | Alto | P0 |
| Mobile/accessibilita | Gate espliciti definiti, da osservare nei compiti reali | Medio | Medio-alto se emerge P0/P1 | P1 |
| Flusso ruoli | Compito di verifica incluso nel pilot | Medio | Medio-alto se emerge perdita reale | P1 |

## Rischi residui

- Il protocollo non sostituisce l'esecuzione reale con docenti.
- La qualita delle evidenze dipende dalla disciplina dell'osservatore.
- La verifica mobile/accessibilita resta gate operativo, non audit tecnico completo.
- La baseline React non viene modificata in CML-534.

## Verdetto

```text
CML_534_GUIDED_TEACHER_PILOT_PROTOCOL_READY_LOCAL_NOT_PUSHED
```
