# ARCHITECTURE SYNTHESIS AND FIRST RUNTIME SELECTION CONTRACT

**Stato:** Contratto docs-only
**Riferimenti:** CML-065, CML-267, CML-268, CML-269, CML-270, CML-271, CML-272, CML-273, CML-274
**App:** CurManLight
**Principio guida:** consolidare la visione prima di toccare il runtime

## 1. Scopo

Definire una sintesi architetturale dei layer CML-267→274 e selezionare il primo intervento runtime minimo ad alto valore, senza implementarlo ancora.

Questo contratto non modifica runtime, storage o dati. Serve a trasformare la sequenza di contratti in una decisione operativa chiara.

## 2. Visone operativa fissata

La nuova architettura di CurManLight e stata definita come ambiente curricolare professionale che si legge in otto livelli coerenti:

- ambiente curricolare professionale;
- cruscotto e onboarding;
- contesto di lavoro;
- applicabilita per classe e anno scolastico;
- allineamento IN 2025;
- processo di revisione;
- didattica;
- esportazione e produzione documentale.

Questa visione ha un principio centrale:

> il sistema parte dal bisogno professionale, non dalla disciplina o dal formato file.

## 3. Sintesi dei layer consolidati

### 3.1 Ambiente curricolare professionale

CurManLight non e un selettore disciplinare. E un ambiente curricolare professionale d'istituto.

### 3.2 Cruscotto e onboarding

La Home deve orientare per bisogno professionale, con Curriculum e Didattica come ingressi primari.

### 3.3 Contesto di lavoro

Il contesto rende coerenti ruolo, anno scolastico, classe, disciplina opzionale e modalità d'uso.

### 3.4 Applicabilita

L'applicabilita risponde alla domanda: quale curricolo vale per questa classe e per questo anno.

### 3.5 Allineamento IN 2025

Lo stato del contenuto deve essere distinguibile tra vigente, proposta, non validato, validato, approvato, applicabile e archiviato.

### 3.6 Processo di revisione

La revisione definisce chi attraversa gli stati e con quali atti.

### 3.7 Didattica

La didattica non e un ambiente separato, ma l'uso operativo del curricolo applicabile.

### 3.8 Esportazione e documenti

L'esportazione parte dal documento da produrre, non dal formato.

## 4. Quale parte dell'interfaccia attuale e piu incoerente

La maggiore incoerenza visibile e la Home ancora percepibile come accesso disciplinare o come raccolta di voci operative non ancora ordinate per bisogno professionale.

Le aree piu sensibili sono:

- Home/cruscotto;
- modale iniziale;
- menu discipline nella Home;
- fascia del contesto di lavoro;
- organizzazione delle esportazioni.

## 5. Criteri di selezione del primo runtime

Il primo runtime minimo deve essere:

- ad alto valore percepito;
- a basso rischio;
- non invasivo per dati, schema e storage;
- coerente con il nuovo modello;
- facilmente verificabile.

## 6. Valutazione dei candidati runtime

### 6.1 Home / cruscotto

Pro:

- mostra subito il cambio di visione;
- allinea il primo ingresso al bisogno professionale;
- rende il sistema piu leggibile.

Contro:

- richiede attenzione alla gerarchia visiva;
- puo toccare piu elementi contemporaneamente.

### 6.2 Modale iniziale

Pro:

- e il punto in cui si può ridurre il carico cognitivo;
- e spesso il primo contatto reale.

Contro:

- se isolato, non risolve la struttura della Home.

### 6.3 Menu discipline secondario

Pro:

- riduce la centralita delle discipline;
- supporta la nuova logica di ingresso.

Contro:

- non basta da solo a cambiare la visione del prodotto.

### 6.4 Contesto di lavoro visibile

Pro:

- rafforza la coerenza di ruolo e classe;
- aiuta il lavoro continuativo.

Contro:

- e piu efficace come secondo passo che come unico cambiamento.

### 6.5 Esportazioni riorganizzate per documento

Pro:

- coerente con CML-274;
- utile, ma meno immediatamente visibile dell'ingresso Home.

Contro:

- non produce da solo il cambio di paradigma iniziale.

## 7. Decisione raccomandata

La prima selezione runtime consigliata e:

1. Home / cruscotto come ingresso per bisogno professionale;
2. modale iniziale ridotto al minimo o trasformato in messaggio minimo;
3. menu discipline secondario, apribile e richiudibile.

Questa sequenza e quella a valore piu alto perche l'utente percepisce subito il cambio di visione senza alterare dati o schema.

## 8. Motivo della scelta

Questa combinazione e il miglior primo runtime perche:

- cambia il punto di ingresso senza introdurre nuova complessita di dominio;
- allinea il linguaggio del prodotto alla nuova architettura;
- prepara il terreno per contesto, applicabilita e didattica;
- resta compatibile con i dati e con i contratti esistenti.

## 9. Cose da non fare ancora

- non implementare il runtime;
- non aprire nuove feature teoriche;
- non modificare schema o storage;
- non introdurre un ulteriore layer concettuale;
- non trasformare la sintesi in una riscrittura dell'interfaccia.

## 10. Criteri di accettazione per una futura runtime slice

Una futura slice runtime potra essere considerata coerente se:

- la Home parla per bisogni professionali;
- il modale non sovraccarica il primo accesso;
- le discipline sono secondarie;
- il contesto di lavoro resta visibile ma discreto;
- le esportazioni sono orientate al documento da produrre;
- il comportamento complessivo riflette CML-267→274 senza introdurre un secondo modello.

## 11. Relazione con i contratti precedenti

- CML-065 definisce il modello base Curriculum / Didattica.
- CML-267 definisce l'ambiente curricolare professionale.
- CML-268 definisce il cruscotto e l'onboarding.
- CML-269 definisce il contesto di lavoro.
- CML-270 definisce l'applicabilita.
- CML-271 definisce l'allineamento IN 2025.
- CML-272 definisce il processo di revisione.
- CML-273 definisce la didattica.
- CML-274 definisce l'esportazione e i documenti.
- Questo contratto sintetizza la sequenza e seleziona il primo runtime minimo.
