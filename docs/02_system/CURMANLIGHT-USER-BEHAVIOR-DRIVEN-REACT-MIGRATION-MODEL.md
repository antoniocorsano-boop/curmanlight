# CurManLight — Modello conclusivo di ricostruzione orientato ai comportamenti dell’utente

> **CML-444 — User-Behavior-Driven React Migration Model**  
> Data: 2026-07-10  
> Tipo: documento di governo del prodotto e della migrazione  
> Perimetro: solo documentale, nessuna modifica al runtime

## 1. Scopo

La nuova versione di CurManLight deve ricostruire il prodotto attuale in una forma più chiara, coerente e stabile, preservando ciò che è utile e rimuovendo ridondanze, ambiguità e stratificazioni che ostacolano il lavoro dell’utente.

La ricostruzione non è considerata conclusa quando tutte le funzioni risultano presenti, ma quando gli utenti previsti riescono a completare i propri compiti dall’inizio alla fine, comprendendo:

- dove si trovano;
- che cosa possono fare;
- quale contenuto stanno usando;
- quale decisione è richiesta;
- quale effetto produce l’azione;
- che cosa resta da completare;
- come conservare e riprendere il lavoro;
- quando l’attività può dirsi conclusa.

## 2. Base documentale già disponibile

Questo modello non sostituisce le ricerche già svolte. Le organizza in un quadro unico e operativo.

Riferimenti principali:

- `report/CML-443_react_full_runtime_migration_parity_plan.md` — matrice di parità legacy/React;
- `docs/superpowers/plans/2026-07-10-react-full-runtime-migration.md` — piano strategico della migrazione;
- `report/CML-UX_flow_redundancy_and_use_case_audit.md` — audit dei flussi, dei casi d’uso e delle ridondanze;
- `docs/03_execution/CML-398.md` e `report/CML-398_lightweight_user_test_protocol.md` — protocollo di validazione con utenti;
- `report/CML-428_user_validation_pilot_kit.md` — prova pilota con docenti non tecnici;
- `report/CML-429_user_validation_evidence_intake_model.md` — trasformazione delle osservazioni in evidenze e roadmap;
- `docs/02_system/PROJECT-STATE.md` — regole di governo del prodotto, conformità ai mock ed evidenze osservabili.

## 3. Principio di ricostruzione

L’unità principale del lavoro è il **comportamento completo dell’utente**.

Ogni comportamento comprende:

- una necessità reale;
- un punto di ingresso;
- le informazioni necessarie;
- un’azione principale;
- la risposta visibile del sistema;
- gli eventuali errori o impedimenti;
- la possibilità di correggere;
- una conclusione riconoscibile;
- il collegamento con il passo successivo.

Le singole schermate e funzioni sono mezzi al servizio del comportamento e non costituiscono, da sole, un risultato completo.

## 4. Rapporto con la matrice CML-443

La matrice CML-443 resta il registro di controllo della completezza e non deve essere eliminata.

Il programma di migrazione deve essere governato su tre livelli:

### Livello 1 — Comportamenti dell’utente

Decide che cosa costruire, in quale ordine e con quale risultato osservabile.

### Livello 2 — Matrice di parità

Controlla che nessuna capacità necessaria venga persa durante la ricostruzione.

### Livello 3 — Verifiche interne

Accerta che il comportamento sia stabile, conservi i dati, gestisca gli errori e funzioni nelle condizioni previste.

La parità non coincide con la riproduzione meccanica dell’interfaccia precedente. Una capacità può essere preservata con una soluzione più semplice, purché il significato operativo, i dati e l’esito per l’utente restino integri.

## 5. Principio di continuità

La nuova versione deve conservare:

- i contenuti curricolari già validati;
- le decisioni già assunte sul perimetro del prodotto;
- i ruoli previsti;
- i formati di lavoro necessari;
- la possibilità di usare il prodotto senza servizi esterni obbligatori;
- il principio della validazione umana;
- la continuità dei dati e dei lavori già prodotti.

Non devono essere trasferiti automaticamente:

- ridondanze;
- azioni duplicate;
- denominazioni ambigue;
- pannelli fuori contesto;
- informazioni non aggiornate rispetto allo stato reale;
- percorsi che obbligano l’utente a ricostruire da solo il senso dell’attività;
- privilegiamenti ingiustificati di una disciplina o di un ruolo.

## 6. Regole di non regressione

La nuova versione non deve riprodurre i problemi già rilevati negli audit:

- esportazioni duplicate in aree diverse;
- azioni non pertinenti al compito corrente;
- pannelli con nomi uguali ma funzioni diverse;
- indicatori non sincronizzati con lo stato reale;
- selezioni disciplinari implicite;
- impostazione percepita come centrata su Tecnologia;
- eccesso di scorrimento e densità informativa;
- mancanza di collegamento tra curricolo, transizione e progettazione;
- azioni senza esito visibile;
- passaggi che richiedono istruzioni esterne per essere compresi.

Dopo l’approvazione di una soluzione, gli elementi non conformi devono essere rimossi o inibiti. Non è sufficiente aggiungere nuovi blocchi sopra quelli esistenti.

## 7. Percorsi principali

### 7.1 Entrare e orientarsi

L’utente deve poter:

- comprendere immediatamente la finalità dell’ambiente;
- distinguere consultazione, revisione e progettazione;
- riconoscere l’attività più adatta al proprio bisogno;
- entrare direttamente nell’area pertinente;
- sapere sempre in quale parte del percorso si trova;
- tornare alla posizione precedente senza perdere il contesto.

**Condizione di chiusura:** un docente non tecnico sa indicare che cosa può fare e sceglie correttamente da dove iniziare.

### 7.2 Consultare e comprendere il curricolo

L’utente deve poter:

- scegliere una disciplina senza selezioni implicite o privilegiate;
- riconoscere l’ordine di scuola e il quadro di riferimento;
- leggere i contenuti pertinenti senza sovraccarico;
- distinguere il curricolo vigente, quello in revisione e gli eventuali riferimenti futuri;
- individuare nuclei, traguardi, obiettivi e progressioni;
- comprendere quale contenuto può essere usato per la progettazione.

**Condizione di chiusura:** l’utente trova il contenuto cercato, ne comprende lo stato e sa quale uso può farne.

### 7.3 Confrontare e decidere

L’utente deve poter:

- vedere con chiarezza il contenuto attuale e la proposta;
- comprendere che cosa cambia;
- riconoscere gli elementi invariati;
- approvare, rifiutare o rinviare una scelta;
- correggere una decisione;
- vedere immediatamente l’effetto prodotto;
- conoscere quali decisioni restano aperte.

**Condizione di chiusura:** tutte le proposte pertinenti hanno uno stato comprensibile e l’utente sa quali attività restano da svolgere.

### 7.4 Lavorare secondo il proprio ruolo

Il docente deve poter:

- consultare;
- formulare una proposta;
- conservarla;
- trasferirla al dipartimento.

Il dipartimento deve poter:

- ricevere più proposte;
- confrontarle;
- formulare un esito condiviso;
- conservare e trasferire l’esito.

Il referente deve poter:

- ricevere gli esiti;
- verificarne la completezza;
- individuare incoerenze o elementi mancanti;
- preparare il quadro necessario alla successiva validazione istituzionale.

Per ogni ruolo devono essere visibili soltanto le azioni pertinenti al compito svolto.

### 7.5 Progettare a partire dal curricolo

L’utente deve poter:

- partire da un contenuto curricolare riconoscibile;
- scegliere il tipo di progettazione;
- compilare le informazioni necessarie;
- comprendere quali campi mancano;
- collegare evidenze, attività e criteri di valutazione;
- salvare una bozza;
- riprendere il lavoro;
- riconoscere la versione curricolare utilizzata;
- ricevere un avviso quando la progettazione richiede un riallineamento.

**Condizione di chiusura:** la progettazione è completa, coerente con il curricolo scelto e pronta per essere utilizzata o condivisa.

### 7.6 Verificare e correggere

L’utente deve poter:

- riconoscere immediatamente incompletezze ed errori;
- sapere perché un’attività non può essere conclusa;
- raggiungere direttamente il punto da correggere;
- controllare l’esito dopo la modifica;
- distinguere ciò che è pronto da ciò che richiede ancora un intervento.

**Condizione di chiusura:** non esistono impedimenti non spiegati e ogni segnalazione conduce a una correzione possibile.

### 7.7 Conservare e riprendere

L’utente deve poter:

- interrompere il lavoro senza perderlo;
- ritrovare l’ultima attività svolta;
- riconoscere la data e lo stato del lavoro;
- creare una copia di sicurezza;
- ripristinare un lavoro precedente;
- trasferire il lavoro senza alterarne contenuti e significato.

**Condizione di chiusura:** la chiusura e la riapertura dell’ambiente non causano perdita di dati, decisioni o contesto.

### 7.8 Esportare e concludere

L’utente deve poter:

- distinguere un documento leggibile da un file destinato a proseguire il lavoro;
- scegliere l’esito necessario senza conoscere formati tecnici;
- comprendere che cosa sta producendo;
- verificare il contenuto prima della produzione;
- ricevere una conferma chiara;
- sapere a chi o a quale fase è destinato il risultato.

**Condizione di chiusura:** il prodotto ottenuto è completo, leggibile, coerente con il lavoro svolto e utilizzabile nel contesto previsto.

## 8. Mappatura iniziale verso CML-443

| Percorso utente | Capacità CML-443 principali |
|---|---|
| Entrare e orientarsi | NAV-01, NAV-02, NAV-03, NAV-13, MSG-01 |
| Consultare e comprendere | NAV-04, FUN-01, FUN-02, FUN-03, DAT-01, DAT-03 |
| Confrontare e decidere | NAV-05, FUN-04–09, DAT-02, ROL-03–05 |
| Lavorare secondo il ruolo | ROL-01–05, CML-01–04, DOC-01–02 |
| Progettare | NAV-09–11, DAT-08–10, DID-01–05 |
| Conservare e riprendere | FUN-13–15, PER-01–05, MSG-07 |
| Esportare e concludere | FUN-11–12, CML-01–08, DOC-01–05 |
| Usare in condizioni diverse | PWA-01–06, RSP-01–04, A11-01–07 |

Questa tabella è iniziale. La mappatura completa deve essere verificata capacità per capacità prima di avviare le slice realizzative.

## 9. Ciclo di completamento

Ogni percorso viene sviluppato e chiuso mediante lo stesso ciclo.

### 9.1 Individuazione

Si seleziona un solo comportamento completo e si definiscono:

- utente;
- bisogno;
- punto di partenza;
- esito finale;
- condizioni che possono impedirne il completamento.

### 9.2 Ricostruzione

Si realizza l’intero percorso, comprese:

- azioni;
- risposte visibili;
- stati vuoti;
- errori;
- correzioni;
- conservazione del contesto;
- conclusione.

### 9.3 Verifica

Il percorso viene controllato attraverso compiti osservabili.

Non è sufficiente che la funzione sia presente. L’utente deve riuscire a:

- individuarla;
- comprenderla;
- usarla;
- riconoscerne l’esito;
- recuperare da un errore;
- proseguire.

### 9.4 Correzione

Le difficoltà vengono classificate per:

- orientamento;
- linguaggio;
- comprensione del ruolo;
- fiducia;
- sovraccarico;
- navigazione;
- conservazione;
- esportazione;
- uso su schermi diversi.

Il ciclo resta aperto finché i problemi che bloccano o alterano il compito non sono risolti.

### 9.5 Chiusura

Un comportamento è chiuso quando:

- l’obiettivo è raggiungibile;
- l’esito è riconoscibile;
- i dati sono conservati;
- gli errori sono spiegati e recuperabili;
- non esistono azioni duplicate o fuori contesto;
- il percorso è coerente con i comportamenti già chiusi;
- le verifiche previste risultano superate.

## 10. Regola di priorità

L’ordine di sviluppo è determinato dalla dipendenza tra i comportamenti.

Un comportamento viene affrontato prima quando:

- è necessario per più percorsi successivi;
- impedisce a un utente di completare un compito essenziale;
- protegge dati o decisioni già esistenti;
- risolve un’ambiguità ricorrente;
- è indispensabile per verificare correttamente altri comportamenti.

I miglioramenti puramente estetici non precedono mai completezza, comprensione e conservazione del lavoro.

## 11. Verifica con utenti

La validazione deve riusare il protocollo e il modello di evidenze già presenti nel repository.

Non si chiede soltanto se il prodotto piace. Si osserva:

- che cosa l’utente comprende;
- che cosa prova a fare;
- dove si blocca;
- quali parole interpreta in modo errato;
- quali passaggi richiedono aiuto;
- se riconosce l’esito delle proprie azioni;
- se distingue documento finale, file di lavoro e copia di sicurezza;
- se comprende che la validazione resta umana.

Le evidenze vengono classificate per severità e ricorrenza secondo CML-429.

Una sola evidenza ad alta severità collegata a un compito essenziale può riaprire il ciclo. Le evidenze medie richiedono conferma o ricorrenza. Le preferenze estetiche isolate non determinano automaticamente nuove slice.

## 12. Rapporto con il prodotto attuale

Il prodotto attuale resta il riferimento per:

- contenuti;
- capacità realmente utilizzate;
- formati;
- dati;
- casi d’uso;
- condizioni particolari già gestite.

Non costituisce un modello da riprodurre fedelmente quando presenta:

- duplicazioni;
- incoerenze;
- termini poco chiari;
- sequenze frammentate;
- informazioni fuori contesto;
- azioni senza esito visibile;
- pannelli non collegati al reale stato del lavoro.

La nuova versione deve garantire continuità di significato, non riproduzione meccanica dell’interfaccia precedente.

## 13. Condizione conclusiva del prodotto

CurManLight è concluso quando:

- tutti i percorsi essenziali possono essere completati;
- ogni ruolo trova le azioni necessarie e soltanto quelle pertinenti;
- consultazione, decisione e progettazione risultano collegate;
- il lavoro può essere conservato, ripreso e trasferito;
- i risultati prodotti sono comprensibili e utilizzabili;
- la validazione umana è sempre riconoscibile;
- le principali difficoltà emerse dalle prove con gli utenti sono state risolte o formalmente escluse;
- il prodotto non dipende dalla precedente versione per completare alcuna attività essenziale;
- il passaggio alla nuova versione non comporta perdita di dati, contenuti o significato operativo.

## 14. Prossima azione raccomandata

La prossima slice deve produrre la **mappa completa comportamenti → capacità CML-443 → evidenze → criteri di chiusura**.

Per ogni percorso devono essere registrati:

| Campo | Contenuto |
|---|---|
| Utente | Docente, dipartimento, referente o altro profilo previsto |
| Bisogno | Risultato concreto ricercato |
| Punto di ingresso | Dove inizia il comportamento |
| Azione principale | Che cosa fa l’utente |
| Risposta visibile | Che cosa deve mostrare il prodotto |
| Errori recuperabili | Che cosa può impedire il completamento e come si corregge |
| Capacità CML-443 | Identificativi di parità coinvolti |
| Evidenza utente | Compito osservabile di validazione |
| Verifica interna | Controllo oggettivo necessario |
| Condizione di chiusura | Risultato che consente di chiudere la slice |

La prima realizzazione deve iniziare dal percorso **Entrare e orientarsi**, perché costituisce l’accesso a tutti i comportamenti successivi.

## 15. Verdetto

```text
CML_444_USER_BEHAVIOR_DRIVEN_REACT_MIGRATION_MODEL_READY_REMOTE_BRANCH
```
