# WORK CONTEXT LAYER CONTRACT

**Stato:** Contratto docs-only
**Riferimenti:** CML-065, CML-267, CML-268
**App:** CurManLight
**Principio guida:** il contesto rende coerenti i percorsi di lavoro, ma non blocca la consultazione libera

## 1. Scopo

Definire il Work Context Layer di CurManLight: lo strato che rappresenta il contesto di lavoro dell'utente e collega ruolo, anno scolastico, classe, disciplina opzionale, versione curricolare e modalità d'uso.

Questo contratto non introduce runtime, storage, API o dipendenze. Serve a fissare il linguaggio architetturale per le future slice UI.

## 2. Definizione del Work Context Layer

Il Work Context Layer è lo strato che risponde alla domanda:

> "In quale contesto professionale sto lavorando adesso?"

Non coincide con una disciplina e non sostituisce la navigazione del prodotto.

Funzioni del layer:

- mantenere allineati i percorsi di consultazione e lavoro;
- distinguere consultazione libera e lavoro contestualizzato;
- rendere visibile il contesto attivo in modo discreto;
- supportare il passaggio tra aree e stati di lavoro senza perdere orientamento.

## 3. Consultazione libera vs contesto impostato

### 3.1 Consultazione libera

La consultazione libera è l'ingresso senza contesto selezionato.

Caratteristiche:

- l'utente può leggere, esplorare o orientarsi;
- nessun campo obbligatorio viene imposto all'avvio;
- il prodotto non blocca l'accesso ai contenuti principali;
- il sistema può invitare a impostare un contesto, ma non lo richiede subito.

### 3.2 Contesto impostato

Il contesto impostato è lo stato in cui l'utente ha selezionato dati sufficienti per legare l'attività corrente a un ruolo, una classe, un anno scolastico o un percorso.

Caratteristiche:

- le aree si leggono in relazione al contesto scelto;
- il sistema può mostrare filtri, scorciatoie o testi più specifici;
- il contesto aiuta a ridurre ambiguità e a evitare salti inutili.

### 3.3 Regola di progetto

La consultazione libera è sempre consentita. Il contesto è un acceleratore di coerenza, non una barriera.

## 4. Campi del contesto

Il Work Context Layer espone i seguenti campi concettuali:

- ruolo;
- anno scolastico;
- classe;
- disciplina opzionale;
- versione curricolare;
- modalità d'uso;
- ultimo percorso aperto.

### 4.1 Ruolo

Identifica il punto di vista dell'utente: docente, coordinatore, referente, staff, consultatore interno.

### 4.2 Anno scolastico

Indica l'anno di lavoro a cui il contesto è riferito.

### 4.3 Classe

Specifica il gruppo o la classe su cui si sta operando, quando rilevante.

### 4.4 Disciplina opzionale

È un campo facoltativo. Serve solo quando il percorso richiede un focus disciplinare.

### 4.5 Versione curricolare

Indica il quadro di riferimento curricolare attivo, ad esempio curricolo vigente o adeguamento in corso.

### 4.6 Modalità d'uso

Descrive il tipo di attività principale: consultazione, applicazione, revisione, progettazione, esportazione.

### 4.7 Ultimo percorso aperto

Memorizza l'ultimo percorso o area attraversata per favorire la continuità del lavoro.

## 5. Ruoli previsti

Il layer deve poter essere letto attraverso i ruoli seguenti:

- docente;
- dipartimento / coordinatore;
- referente curricolo;
- dirigenza / staff;
- consultatore interno.

## 6. Relazione tra contesto e aree

Il contesto non crea nuove aree. Rende più leggibile l'uso delle aree già definite.

### 6.1 Curricolo vigente

Il contesto aiuta a capire quale versione del curricolo si sta consultando o revisionando.

### 6.2 Applicazione per classi

Il contesto lega la disciplina e il curricolo alla classe o all'anno scolastico.

### 6.3 Adeguamento IN 2025

Il contesto può evidenziare se il lavoro è in lettura vigente, confronto o adeguamento.

### 6.4 Processo di revisione

Il contesto rende più chiaro se l'utente sta preparando, valutando o consolidando una proposta.

### 6.5 Progettazione e competenze

Il contesto orienta il lavoro didattico operativo verso UDA, attività e competenze.

### 6.6 Esportazioni

Il contesto aiuta a capire quale documento o pacchetto si sta producendo.

## 7. Persistenza locale non sensibile

Il layer deve rispettare queste regole:

- non introdurre dati sensibili;
- non memorizzare credenziali, token o chiavi;
- non aggiungere storage nuovo senza necessità;
- mantenere il solo necessario per ripristinare il contesto utile di lavoro;
- lasciare invariati i meccanismi esistenti se non serve una futura slice runtime esplicita.

La persistenza locale è ammessa solo come continuità operativa, non come raccolta dati personale o amministrativa.

## 8. Messaggi UI

### 8.1 Nessun contesto impostato

Messaggio guida suggerito:

> Nessun contesto impostato. Puoi consultare liberamente o impostare un contesto di lavoro.

### 8.2 Contesto incompleto

Messaggio guida suggerito:

> Contesto incompleto: alcuni campi utili non sono ancora definiti.

### 8.3 Contesto completo

Messaggio guida suggerito:

> Contesto attivo: il lavoro è allineato al tuo ruolo e al tuo percorso.

### 8.4 Cambio contesto

Messaggio guida suggerito:

> Stai cambiando contesto di lavoro. Le aree si aggiorneranno in base alla nuova selezione.

### 8.5 Reset contesto

Messaggio guida suggerito:

> Contesto resettato. Torni alla consultazione libera.

## 9. Accessibilità

Il Work Context Layer deve rispettare criteri minimi di accessibilità:

- il contesto deve essere leggibile anche senza colore;
- i controlli devono essere raggiungibili da tastiera;
- i messaggi devono essere brevi e comprensibili;
- il cambio di stato deve essere comunicabile a tecnologie assistive;
- il reset non deve sorprendere l'utente né cancellare informazioni non necessarie.

## 10. Criteri di accettazione per futura runtime slice

Una futura slice runtime potrà essere considerata conforme se:

- il contesto è visibile ma non obbligatorio per l'ingresso;
- consultazione libera e contesto impostato risultano chiaramente distinguibili;
- i campi del contesto sono leggibili e composti in modo coerente;
- il cambio contesto non interrompe inutilmente il flusso;
- il reset è semplice e comprensibile;
- i messaggi UI previsti risultano coerenti con la Home e con i contratti CML-267 e CML-268.

## 11. Relazione con i contratti precedenti

- CML-065 definisce il modello Curriculum / Didattica.
- CML-267 definisce l'ambiente curricolare professionale.
- CML-268 definisce il cruscotto e l'onboarding.
- Questo contratto definisce il contesto che tiene insieme i percorsi.
