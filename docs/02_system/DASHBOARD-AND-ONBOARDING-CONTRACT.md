# DASHBOARD AND ONBOARDING CONTRACT

**Stato:** Contratto docs-only
**Riferimenti:** CML-065, CML-267
**App:** CurManLight
**Principio guida:** partire dal bisogno professionale, non dalla disciplina

## 1. Scopo

Definire la Home e l'onboarding di CurManLight come cruscotto professionale di accesso ai flussi di lavoro curricolari, senza trasformare l'ingresso principale in un selettore disciplinare.

Questo contratto descrive il livello Dashboard/Onboarding. Non modifica il runtime e non introduce nuove funzioni operative: serve a fissare una struttura target per le future slice UI.

## 2. Problema del modello attuale

L'impostazione attuale espone ancora la logica del prodotto attraverso la disciplina o attraverso copie introduttive troppo generiche.

Effetti principali:

- il primo contatto non parte dal bisogno professionale;
- il ruolo dell'utente non è sempre visibile subito;
- il modale iniziale rischia di occupare troppo spazio cognitivo;
- le discipline possono apparire come punto di ingresso primario, anche quando il compito reale è consultare, adeguare, revisionare o esportare.

## 3. Principio di progetto

La Home deve partire dal bisogno professionale dell'utente, non dalla disciplina.

Conseguenze:

- l'utente sceglie prima cosa deve fare;
- la disciplina resta un contesto secondario, apribile quando serve;
- Curriculum e Didattica diventano le due porte principali;
- il cruscotto deve far capire subito dove andare senza richiedere conoscenza del lessico interno del progetto.

## 4. Struttura del cruscotto

La Dashboard deve essere organizzata per livelli di priorità.

### 4.1 Livello primario

- Curriculum
- Didattica

Queste sono le macro-card principali della Home.

### 4.2 Livello operativo

- Curricolo vigente
- Applicazione per classi e anni scolastici
- Adeguamento IN 2025
- Processo di revisione
- Progettazione e competenze
- Esportazioni

### 4.3 Livello contestuale

- contesto di lavoro attivo
- disciplina selezionata solo se necessaria
- stato locale di lavoro

## 5. Messaggio iniziale minimo

L'onboarding iniziale deve essere ridotto al minimo utile.

Requisiti:

- una frase di orientamento breve;
- una sola istruzione principale;
- nessun testo che spieghi tutto il prodotto in una volta;
- nessuna copia lunga che sostituisca la struttura della Home.

Messaggio guida raccomandato:

> Scegli l'area di lavoro in base al bisogno professionale.

## 6. Gestione del modale

Il modale iniziale deve essere ridotto fortemente o eliminato, se la Home riesce già a orientare l'utente con sufficiente chiarezza.

Regole:

- il modale non deve diventare una seconda Home;
- non deve contenere troppe opzioni;
- se resta, deve spiegare solo il minimo indispensabile;
- il suo obiettivo è accompagnare il primo accesso, non sostituire la navigazione.

## 7. Schede principali della Home

Le schede principali devono coprire i bisogni professionali ricorrenti.

### 7.1 Curriculum

Entrata per consultare e governare il curricolo istituzionale.

### 7.2 Didattica

Entrata per progettare il lavoro operativo, le UDA e le attività.

### 7.3 Viste operative secondarie

Le viste operative secondarie possono essere accessi rapidi o link interni, non card concorrenti:

- Curricolo vigente
- Applicazione per classi
- Adeguamento IN 2025
- Processo di revisione
- Progettazione e competenze
- Esportazioni

## 8. Contesto di lavoro

La Dashboard deve rendere visibile il contesto attivo senza renderlo obbligatorio per l'ingresso.

Elementi attesi:

- ruolo
- anno scolastico
- classe o gruppo
- disciplina, se utile
- stato del lavoro

Il contesto deve essere leggibile ma discreto: utile per la continuità del lavoro, non un filtro che blocca l'accesso.

## 9. Menu discipline secondario

Il menu discipline deve diventare secondario, apribile e richiudibile.

Regole:

- non deve dominare la Home;
- non deve essere la prima scelta visiva;
- deve essere disponibile come strumento di navigazione laterale o contestuale;
- deve supportare l'accesso rapido quando l'utente sa già cosa cerca.

## 10. Stati vuoti

Gli stati vuoti devono orientare, non penalizzare.

Esempi:

- nessun contesto selezionato;
- nessuna disciplina aperta;
- nessun documento recente;
- nessun elemento ancora avviato nel flusso corrente.

Ogni stato vuoto deve suggerire il passo successivo più utile.

## 11. Accessibilità per pannelli apribili

I pannelli apribili devono rispettare criteri minimi di accessibilità:

- stato aperto/chiuso annunciabile;
- controllo attivabile da tastiera;
- ordine di focus prevedibile;
- testo del pulsante comprensibile senza contesto visivo;
- nessun contenuto essenziale nascosto senza modo chiaro di aprirlo.

## 12. Criteri di accettazione per la futura runtime slice

Una futura slice runtime potra essere considerata conforme se:

- la Home mostra Curriculum e Didattica come ingressi primari;
- il messaggio iniziale è minimo;
- il modale non sovraccarica il primo accesso;
- il menu discipline è secondario e richiudibile;
- il contesto di lavoro è visibile ma non obbligatorio;
- gli stati vuoti guidano l'utente;
- il comportamento resta coerente con CML-065 e CML-267.

## 13. Relazione con CML-267

Questo contratto traduce in struttura di ingresso la visione architetturale definita da CML-267.

- CML-267 definisce l'ambiente curricolare professionale.
- Questo contratto definisce come l'utente entra e si orienta nell'ambiente.
- Nessuna delle due specifiche sostituisce CML-065.
