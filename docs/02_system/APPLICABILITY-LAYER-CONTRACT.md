# APPLICABILITY LAYER CONTRACT

**Stato:** Contratto docs-only
**Riferimenti:** CML-065, CML-267, CML-268, CML-269
**App:** CurManLight
**Principio guida:** il contesto dice dove si lavora, l'applicability layer dice quale curricolo vale davvero

## 1. Scopo

Definire l'Applicability Layer di CurManLight: lo strato che stabilisce quale versione del curricolo è applicabile a una specifica classe in un determinato anno scolastico, con eventuale granularità disciplinare e con stato istituzionale esplicito.

Questo contratto non modifica runtime, storage o dati. Serve a fissare il significato architetturale che guiderà le future slice UI.

## 2. Domanda guida

L'Applicability Layer risponde alla domanda:

> Quale curricolo vale per questa classe in questo anno scolastico?

La domanda è istituzionale prima che operativa. Deve quindi essere leggibile in modo stabile e non ambiguo.

## 3. Definizione dell'Applicability Layer

L'Applicability Layer è lo strato che collega:

- anno scolastico;
- classe;
- eventuale disciplina;
- versione curricolare;
- stato di applicabilità;
- note operative.

Non sostituisce il Work Context Layer: lo completa.

## 4. Struttura della matrice anno scolastico × classe

La base del layer è una matrice concettuale anno scolastico × classe.

### 4.1 Funzione della matrice

La matrice serve a indicare:

- quale versione del curricolo è in vigore per un certo anno scolastico;
- quale classe rientra nel perimetro di applicazione;
- se il curricolo è applicabile integralmente o con note di transizione;
- se esistono differenze tra ordine, grado o gruppo classe.

### 4.2 Lettura della matrice

La matrice deve essere leggibile da chi governa il curricolo e da chi lo usa operativamente.

Ogni cella logica della matrice deve poter esprimere:

- versione curricolare;
- stato;
- eventuale disciplina;
- nota operativa sintetica.

## 5. Granularità per disciplina

La granularità per disciplina è facoltativa ma prevista.

Regole:

- il livello base è classe + anno scolastico;
- la disciplina entra in gioco solo quando serve distinguere applicabilità diversa;
- la disciplina non deve frammentare inutilmente il modello;
- la granularità disciplinare deve restare leggibile dentro il quadro istituzionale della classe.

## 6. Stati di applicabilità

Il layer deve riconoscere i seguenti stati:

- vigente;
- in transizione;
- proposta di adeguamento;
- validato;
- approvato;
- da deliberare;
- non applicabile;
- archiviato.

### 6.1 Vigente

Il curricolo è quello attualmente valido per quella classe e quell'anno.

### 6.2 In transizione

Il curricolo è in passaggio tra un quadro e il successivo.

### 6.3 Proposta di adeguamento

La versione è proposta ma non ancora consolidata come riferimento applicabile.

### 6.4 Validato

Il contenuto ha ricevuto validazione istituzionale o dipartimentale secondo il processo definito.

### 6.5 Approvato

La versione ha ottenuto un esito favorevole e può essere trattata come riferimento operativo.

### 6.6 Da deliberare

La versione richiede ancora una decisione formale.

### 6.7 Non applicabile

La versione non si applica a quella classe, anno o disciplina.

### 6.8 Archiviato

La versione non è più attiva ma resta consultabile come storico.

## 7. Relazione con il Work Context Layer

Il Work Context Layer dice chi sta lavorando e in quale modalità.

L'Applicability Layer dice quale curricolo si applica a quel contesto.

Relazione pratica:

- il contesto apre il perimetro di lavoro;
- l'applicability layer seleziona il curricolo corretto;
- insieme rendono leggibili consultazione, progettazione, UDA ed esportazioni.

## 8. Relazione con Curricolo vigente

Il curricolo vigente è la base di lettura primaria.

Il layer deve distinguere chiaramente tra:

- curricolo vigente;
- curricolo in aggiornamento;
- proposta di modifica;
- storico non più applicabile.

## 9. Relazione con Adeguamento IN 2025

L'adeguamento IN 2025 è uno scenario specifico del layer.

Il sistema deve saper indicare se:

- la classe usa ancora il curricolo vigente;
- è in corso un adeguamento;
- la proposta è già applicabile;
- la proposta è solo consultabile ma non ancora operativa.

## 10. Relazione con Processo di revisione

L'Applicability Layer è il punto in cui la revisione diventa leggibile come effetto istituzionale.

Quando una proposta passa da idea a versione applicabile, il layer deve mostrare il cambiamento di stato e il suo effetto sulla classe e sull'anno scolastico.

## 11. Impatto su Progettazione e competenze

La progettazione didattica deve sapere su quale curricolo si basa.

Il layer impatta:

- la lettura delle competenze attese;
- la coerenza tra classe e obiettivi;
- la selezione del quadro istituzionale corretto per la programmazione.

## 12. Impatto su UDA

Le UDA devono dichiarare il loro riferimento applicabile.

Il layer aiuta a evitare UDA costruite su basi non coerenti o non ancora valide per la classe specifica.

## 13. Impatto su Esportazioni

Le esportazioni devono riportare il riferimento applicabile corretto.

Il layer aiuta a distinguere tra:

- esportazione del curricolo vigente;
- esportazione di una proposta;
- esportazione di un percorso in transizione;
- esportazione di uno storico archiviato.

## 14. Messaggi UI

### 14.1 Nessuna regola impostata

> Nessuna regola di applicabilità impostata. Puoi consultare liberamente o definire una matrice classe/anno.

### 14.2 Curricolo applicabile trovato

> Curricolo applicabile trovato per questa classe e questo anno scolastico.

### 14.3 Curricolo in transizione

> Curricolo in transizione: il riferimento è in aggiornamento.

### 14.4 Proposta non ancora applicabile

> Proposta non ancora applicabile per questa classe o per questo anno scolastico.

### 14.5 Stato da deliberare

> Stato da deliberare: è necessaria una decisione istituzionale prima dell'applicazione.

## 15. Accessibilità e leggibilità

L'Applicability Layer deve essere leggibile senza ambiguità.

Requisiti:

- stato e versione devono essere distinguibili a colpo d'occhio;
- la matrice deve essere comprensibile anche da tastiera o lettura assistiva;
- il linguaggio deve essere istituzionale ma semplice;
- i messaggi devono distinguere chiaramente tra vigente, transizione, proposta e storico.

## 16. Criteri di accettazione per futura runtime slice

Una futura slice runtime potrà essere considerata conforme se:

- la matrice anno scolastico × classe è leggibile;
- il riferimento applicabile è sempre esplicito;
- il filtro per disciplina è opzionale e non obbligatorio;
- gli stati di applicabilità sono distinguibili;
- il Work Context Layer e l'Applicability Layer risultano collegati senza confusione;
- le esportazioni riportano il riferimento corretto;
- le UDA dichiarano la base applicabile.

## 17. Relazione con i contratti precedenti

- CML-065 definisce il modello base Curriculum / Didattica.
- CML-267 definisce l'ambiente curricolare professionale.
- CML-268 definisce il cruscotto e l'onboarding.
- CML-269 definisce il contesto di lavoro.
- Questo contratto definisce la regola di applicabilità istituzionale.
