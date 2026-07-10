# CurManLight — Modello conclusivo di ricostruzione orientato ai comportamenti dell’utente

> **CML-444 — User-Behavior-Driven React Migration Model**  
> Data: 2026-07-10  
> Tipo: documento di governo del prodotto e della migrazione  
> Perimetro: solo documentale, nessuna modifica al runtime

## 1. Scopo

La nuova versione di CurManLight deve ricostruire il prodotto attuale in una forma più chiara, coerente e stabile, preservando ciò che è utile e rimuovendo ridondanze, ambiguità e stratificazioni che ostacolano il lavoro dell’utente.

La ricostruzione è conclusa quando gli utenti previsti riescono a completare i propri compiti dall’inizio alla fine, comprendendo:

- dove si trovano;
- che cosa possono fare;
- quale contenuto stanno usando;
- quale decisione è richiesta;
- quale effetto produce l’azione;
- che cosa resta da completare;
- come conservare e riprendere il lavoro;
- quando l’attività può dirsi conclusa.

## 2. Base documentale già disponibile

Questo modello organizza in un quadro unitario le ricerche già svolte:

- `report/CML-443_react_full_runtime_migration_parity_plan.md` — matrice di parità legacy/React;
- `docs/superpowers/plans/2026-07-10-react-full-runtime-migration.md` — piano strategico della migrazione;
- `report/CML-UX_flow_redundancy_and_use_case_audit.md` — audit dei flussi, dei casi d’uso e delle ridondanze;
- `docs/03_execution/CML-398.md` e `report/CML-398_lightweight_user_test_protocol.md` — protocollo di validazione con utenti;
- `report/CML-428_user_validation_pilot_kit.md` — prova pilota con docenti non tecnici;
- `report/CML-429_user_validation_evidence_intake_model.md` — trasformazione delle osservazioni in evidenze e roadmap;
- `docs/02_system/PROJECT-STATE.md` — regole di governo, conformità ai mock ed evidenze osservabili.

## 3. Principio di ricostruzione

L’unità principale del lavoro è il **comportamento completo dell’utente**.

Ogni comportamento comprende:

- una necessità reale;
- un punto di ingresso;
- le informazioni necessarie;
- un’azione principale;
- una risposta visibile;
- errori o impedimenti;
- una possibilità di correzione;
- una conclusione riconoscibile;
- il collegamento con il passo successivo.

Le schermate e le funzioni sono mezzi al servizio del comportamento e non costituiscono, da sole, un risultato completo.

## 4. Rapporto con la matrice CML-443

La matrice CML-443 resta il registro di controllo della completezza.

Il programma di migrazione è governato su tre livelli:

1. **Comportamenti dell’utente** — decidono che cosa costruire, in quale ordine e con quale esito osservabile.
2. **Matrice di parità** — controlla che nessuna capacità necessaria venga persa.
3. **Verifiche interne** — accertano stabilità, conservazione dei dati, gestione degli errori e funzionamento nelle condizioni previste.

La parità non coincide con la riproduzione meccanica dell’interfaccia precedente. Una capacità può essere preservata con una soluzione più semplice, purché significato operativo, dati ed esito per l’utente restino integri.

## 5. Principio di continuità

La nuova versione deve conservare:

- contenuti curricolari validati;
- decisioni già assunte sul perimetro;
- ruoli previsti;
- formati di lavoro necessari;
- uso senza servizi esterni obbligatori;
- validazione umana;
- continuità dei dati e dei lavori prodotti.

Non devono essere trasferiti automaticamente:

- ridondanze;
- azioni duplicate;
- denominazioni ambigue;
- pannelli fuori contesto;
- informazioni non sincronizzate;
- percorsi che obbligano l’utente a ricostruire da solo il senso dell’attività;
- privilegiamenti ingiustificati di una disciplina o di un ruolo.

## 6. Regole di non regressione

La nuova versione non deve riprodurre:

- esportazioni duplicate;
- azioni non pertinenti al compito corrente;
- pannelli con nomi uguali ma funzioni diverse;
- indicatori non sincronizzati con lo stato reale;
- selezioni disciplinari implicite;
- impostazione percepita come centrata su Tecnologia;
- eccesso di scorrimento e densità informativa;
- scollegamento tra curricolo, transizione e progettazione;
- azioni senza esito visibile;
- passaggi comprensibili solo tramite istruzioni esterne.

Dopo l’approvazione di una soluzione, gli elementi non conformi devono essere rimossi o inibiti. Non è sufficiente aggiungere nuovi blocchi sopra quelli esistenti.

## 7. Percorsi principali

### 7.1 Entrare e orientarsi

L’utente deve poter comprendere la finalità dell’ambiente, distinguere consultazione, revisione e progettazione, scegliere l’attività pertinente, sapere dove si trova e tornare indietro senza perdere il contesto.

**Condizione di chiusura:** un docente non tecnico sceglie correttamente da dove iniziare.

### 7.2 Consultare e comprendere il curricolo

L’utente deve poter scegliere disciplina e ordine di scuola, leggere i contenuti pertinenti, distinguere stato e versione del curricolo, individuare nuclei, traguardi, obiettivi e progressioni e comprendere quale contenuto può essere usato per la progettazione.

**Condizione di chiusura:** l’utente trova il contenuto cercato, ne comprende lo stato e sa quale uso può farne.

### 7.3 Confrontare e decidere

L’utente deve poter vedere contenuto attuale e proposta, comprendere le differenze, riconoscere gli elementi invariati, approvare, rifiutare o rinviare una scelta, correggerla e conoscere le decisioni ancora aperte.

**Condizione di chiusura:** tutte le proposte pertinenti hanno uno stato comprensibile.

### 7.4 Lavorare secondo il proprio ruolo

Il docente deve poter consultare, formulare una proposta, conservarla e trasferirla al dipartimento.

Il dipartimento deve poter ricevere proposte, confrontarle, formulare un esito condiviso e trasferirlo.

Il referente deve poter ricevere gli esiti, verificarne completezza e coerenza e preparare il quadro per la successiva validazione istituzionale.

Per ogni ruolo devono essere visibili soltanto le azioni pertinenti.

### 7.5 Progettare a partire dal curricolo

L’utente deve poter partire da un contenuto curricolare riconoscibile, scegliere il tipo di progettazione, compilare le informazioni necessarie, collegare evidenze, attività e criteri, salvare e riprendere una bozza, riconoscere la versione utilizzata e ricevere un avviso quando serve un riallineamento.

**Condizione di chiusura:** la progettazione è completa, coerente con il curricolo scelto e pronta per essere usata o condivisa.

### 7.6 Verificare e correggere

L’utente deve poter riconoscere incompletezze ed errori, sapere perché un’attività non può essere conclusa, raggiungere il punto da correggere, controllare l’esito dopo la modifica e distinguere ciò che è pronto da ciò che richiede ancora intervento.

**Condizione di chiusura:** non esistono impedimenti non spiegati e ogni segnalazione conduce a una correzione possibile.

### 7.7 Conservare e riprendere

L’utente deve poter interrompere il lavoro senza perderlo, ritrovare l’ultima attività, riconoscere data e stato, creare una copia di sicurezza, ripristinare un lavoro e trasferirlo senza alterazioni.

**Condizione di chiusura:** chiusura e riapertura non causano perdita di dati, decisioni o contesto.

### 7.8 Esportare e concludere

L’utente deve poter distinguere documento leggibile, file di lavoro e copia di sicurezza, scegliere l’esito necessario senza conoscere formati tecnici, verificarne il contenuto e sapere a chi o a quale fase è destinato.

**Condizione di chiusura:** il risultato è completo, leggibile, coerente e utilizzabile nel contesto previsto.

## 8. Mappatura iniziale verso CML-443

La tabella copre esattamente gli otto percorsi principali definiti nella sezione 7.

| Percorso utente | Capacità CML-443 principali |
|---|---|
| Entrare e orientarsi | NAV-01, NAV-02, NAV-03, NAV-13, MSG-01 |
| Consultare e comprendere il curricolo | NAV-04, FUN-01, FUN-02, FUN-03, FUN-10, DAT-01, DAT-03–05, MSG-01, MSG-05 |
| Confrontare e decidere | NAV-05, FUN-04–09, DAT-02, MSG-02–04, DOC-05 |
| Lavorare secondo il proprio ruolo | NAV-08, ROL-01–05, CML-01–04, DOC-01–02, DOC-04 |
| Progettare a partire dal curricolo | NAV-09–11, DAT-08–10, DID-01–05, PER-05 |
| **Verificare e correggere** | **MSG-05–07, ROL-04–05, DOC-04, A11-07** |
| Conservare e riprendere | FUN-13–15, PER-01–05, CML-05–06, DOC-03, MSG-07 |
| Esportare e concludere | FUN-11–14, CML-01–08, DOC-01–05, MSG-06 |

Le capacità relative a dispositivi, accessibilità e funzionamento offline — `NAV-13`, `RSP-01–04`, `A11-01–07`, `PWA-01–06`, `PER-06`, `MSG-08` — sono **vincoli trasversali** applicati ai percorsi pertinenti. Non costituiscono un nono percorso sostitutivo.

La mappatura completa deve essere verificata capacità per capacità prima delle slice realizzative.

## 9. Ciclo di completamento

Ogni percorso viene sviluppato e chiuso mediante lo stesso ciclo.

### 9.1 Individuazione

Si definiscono utente, bisogno, punto di partenza, esito finale e condizioni che possono impedire il completamento.

### 9.2 Ricostruzione

Si realizza l’intero percorso, comprese azioni, risposte visibili, stati vuoti, errori, correzioni, conservazione del contesto e conclusione.

### 9.3 Verifica

L’utente deve riuscire a individuare, comprendere e usare la funzione, riconoscerne l’esito, recuperare da un errore e proseguire.

### 9.4 Correzione

Le difficoltà vengono classificate per orientamento, linguaggio, ruolo, fiducia, sovraccarico, navigazione, conservazione, esportazione e uso su schermi diversi.

Il ciclo resta aperto finché i problemi che bloccano o alterano il compito non sono risolti.

### 9.5 Chiusura

Un comportamento è chiuso quando:

- l’obiettivo è raggiungibile;
- l’esito è riconoscibile;
- i dati sono conservati;
- errori e stati vuoti sono recuperabili;
- non esistono azioni duplicate o fuori contesto;
- il percorso è coerente con quelli già chiusi;
- le verifiche previste risultano superate.

## 10. Regola di priorità

Un comportamento viene affrontato prima quando è necessario per più percorsi, impedisce un compito essenziale, protegge dati o decisioni, risolve un’ambiguità ricorrente o è indispensabile per verificare altri comportamenti.

I miglioramenti puramente estetici non precedono completezza, comprensione e conservazione del lavoro.

## 11. Verifica con utenti

La validazione riusa il protocollo e il modello di evidenze già presenti nel repository.

Si osserva:

- che cosa l’utente comprende;
- che cosa prova a fare;
- dove si blocca;
- quali parole interpreta in modo errato;
- quali passaggi richiedono aiuto;
- se riconosce l’esito delle proprie azioni;
- se distingue documento finale, file di lavoro e copia di sicurezza;
- se comprende che la validazione resta umana.

Le evidenze vengono classificate per severità e ricorrenza secondo CML-429.

## 12. Rapporto con il prodotto attuale

Il prodotto attuale resta il riferimento per contenuti, capacità realmente utilizzate, formati, dati, casi d’uso e condizioni particolari già gestite.

Non costituisce un modello da riprodurre fedelmente quando presenta duplicazioni, incoerenze, termini poco chiari, sequenze frammentate, informazioni fuori contesto, azioni senza esito visibile o pannelli non collegati allo stato reale.

La nuova versione deve garantire continuità di significato, non riproduzione meccanica dell’interfaccia precedente.

## 13. Condizione conclusiva del prodotto

CurManLight è concluso quando:

- tutti i percorsi essenziali possono essere completati;
- ogni ruolo trova soltanto le azioni pertinenti;
- consultazione, decisione e progettazione risultano collegate;
- il lavoro può essere conservato, ripreso e trasferito;
- risultati ed errori sono comprensibili;
- la validazione umana è riconoscibile;
- le difficoltà principali emerse dalle prove sono risolte o formalmente escluse;
- il prodotto non dipende dalla versione precedente per attività essenziali;
- il passaggio non comporta perdita di dati, contenuti o significato operativo.

## 14. Prossima azione raccomandata

La prossima slice deve produrre la mappa completa:

**comportamenti → capacità CML-443 → evidenze → criteri di chiusura**.

Per ogni percorso devono essere registrati utente, bisogno, punto di ingresso, azione principale, risposta visibile, errori recuperabili, capacità coinvolte, evidenza utente, verifica interna e condizione di chiusura.

La prima realizzazione deve iniziare dal percorso **Entrare e orientarsi**.

## 15. Verdetto

```text
CML_444_USER_BEHAVIOR_DRIVEN_REACT_MIGRATION_MODEL_READY_REMOTE_BRANCH
```
