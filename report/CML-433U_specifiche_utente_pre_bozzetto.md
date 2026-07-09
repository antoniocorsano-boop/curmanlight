# CML-433U — Specifiche utente pre-bozzetto

Documento di specifiche utente preliminare al bozzetto grafico di CurManLight.

---

## 1. Scopo del documento

Il presente documento definisce le specifiche utente preliminari per l'evoluzione dell'interfaccia di CurManLight, prima della produzione del bozzetto grafico.

L'obiettivo è tradurre le analisi condotte sull'interfaccia desktop di riferimento, sulle esigenze dei docenti e sul processo scolastico di gestione del curricolo in un quadro operativo chiaro, verificabile e coerente con la roadmap di CurManLight.

Il documento serve a stabilire:

- quali utenti devono essere serviti;
- quali azioni principali devono compiere;
- quali aree dell'interfaccia devono aprirsi, chiudersi o restare sempre disponibili;
- quali stati del lavoro devono essere visibili;
- quali principi grafici e funzionali devono guidare il futuro bozzetto;
- quali vincoli devono essere rispettati prima di ogni intervento sul codice.

---

## 2. Analisi di partenza

### 2.1 Analisi dell'interfaccia desktop osservata

L'interfaccia desktop presa come riferimento mostra una logica non basata su molte pagine separate, ma su una cabina di controllo operativa.

Elementi rilevanti:

- intestazione molto compatta, poco alta, ma ricca di azioni;
- aree apribili e richiudibili senza cambio continuo di schermata;
- organizzazione del lavoro in pannelli funzionali;
- distinzione tra area principale, dettaglio, revisione, comandi e indicatori di stato;
- possibilità di leggere, confrontare, decidere e agire restando nello stesso ambiente;
- principio operativo: una schermata, una decisione, più strumenti contestuali.

La logica da recuperare non è l'aspetto estetico in sé, ma il modello di funzionamento:

- l'utente deve capire dove si trova;
- deve vedere che cosa sta lavorando;
- deve disporre delle azioni possibili senza cercarle in menu dispersi;
- deve poter aprire solo il dettaglio necessario, senza perdere il contesto generale.

### 2.2 Analisi delle esigenze specifiche di CurManLight

CurManLight è un ambiente curricolare d'istituto che deve sostenere un processo scolastico delicato:

- consultazione del curricolo;
- proposta didattica del docente;
- lavoro di dipartimento;
- confronto tra curricolo vigente e Indicazioni Nazionali 2025;
- raccolta di osservazioni;
- validazione umana;
- produzione di materiali di sintesi;
- esportazione e passaggio tra ruoli.

L'interfaccia deve quindi essere:

- istituzionale, non sperimentale o ludica;
- leggibile da utenti non tecnici;
- adatta a docenti, referenti e figure di coordinamento;
- prudente nella presentazione delle proposte;
- chiara nel distinguere contenuto vigente, contenuto in lavorazione, proposta, esito e validazione umana.

---

## 3. Principio guida

CurManLight deve apparire come un ambiente professionale di lavoro curricolare, non come una raccolta di funzioni.

L'utente non deve percepire una successione di sezioni isolate, ma un percorso coerente in cui ogni area risponde a una domanda concreta:

- Dove sono?
- Su quale curricolo sto lavorando?
- Quale disciplina o ambito sto consultando?
- Che cosa devo decidere adesso?
- Quali informazioni mi servono per decidere?
- Che cosa viene salvato o esportato?
- Chi dovrà validare il lavoro?

---

## 4. Profili utente principali

### 4.1 Docente

Il docente deve poter:

- consultare il curricolo in modo semplice;
- scegliere disciplina, ordine, classe o area di lavoro;
- leggere le parti essenziali senza sovraccarico informativo;
- formulare osservazioni o proposte;
- salvare un file di lavoro locale;
- esportare una proposta da consegnare al dipartimento;
- comprendere chiaramente che la proposta non equivale a validazione.

Bisogno principale:

```text
capire, proporre, annotare, esportare
```

### 4.2 Dipartimento

Il dipartimento deve poter:

- importare più proposte dei docenti;
- confrontare proposte simili o divergenti;
- distinguere ciò che è condiviso da ciò che resta da discutere;
- produrre un esito dipartimentale;
- mantenere traccia delle decisioni;
- esportare un documento o file di sintesi.

Bisogno principale:

```text
confrontare, discutere, scegliere, sintetizzare
```

### 4.3 Referente curricolo

Il referente deve poter:

- raccogliere gli esiti dei dipartimenti;
- verificare coerenza verticale e trasversale;
- individuare parti mancanti, incoerenti o da rivedere;
- preparare materiali per passaggi collegiali;
- mantenere una visione d'insieme del lavoro.

Bisogno principale:

```text
integrare, controllare, preparare la validazione
```

### 4.4 Dirigente scolastico

Il dirigente deve poter:

- avere una visione sintetica dello stato di avanzamento;
- individuare aree incomplete o critiche;
- verificare che il processo resti coerente con il quadro normativo;
- distinguere chiaramente lavoro preparatorio, proposta e validazione;
- consultare documenti di sintesi senza entrare nei dettagli operativi inutili.

Bisogno principale:

```text
monitorare, orientare, validare il processo istituzionale
```

### 4.5 Utente in consultazione pubblica

L'utente pubblico deve poter:

- consultare contenuti e struttura del curricolo;
- non modificare dati;
- non salvare decisioni operative;
- non accedere a funzioni di approvazione;
- comprendere che si trova in modalità di sola lettura.

Bisogno principale:

```text
leggere e orientarsi senza rischi operativi
```

---

## 5. Contesti d'uso previsti

### 5.1 Consultazione pubblica

Caratteristiche:

- accesso senza autenticazione;
- sola lettura;
- nessuna modifica ai dati;
- nessuna funzione di approvazione;
- esportazioni eventualmente limitate o chiaramente dichiarate.

Messaggio chiave per l'utente:

```text
Stai consultando il curricolo. Non stai modificando il lavoro d'istituto.
```

### 5.2 Uso personale

Caratteristiche:

- lavoro individuale del docente;
- salvataggio locale o su spazio personale;
- annotazioni e proposte personali;
- esportazione di file da condividere successivamente;
- nessuna validazione istituzionale automatica.

Messaggio chiave per l'utente:

```text
Stai preparando una proposta personale da sottoporre al confronto.
```

### 5.3 Uso scolastico

Caratteristiche:

- contesto d'istituto;
- ruolo dichiarato dall'utente;
- eventuale spazio di lavoro scolastico;
- raccolta di proposte;
- esiti di dipartimento;
- sintesi per referente e dirigente;
- funzioni protette per passaggi sensibili.

Messaggio chiave per l'utente:

```text
Stai lavorando in un processo curricolare d'istituto, soggetto a validazione umana.
```

---

## 6. Struttura generale dell'interfaccia

L'interfaccia deve essere organizzata in cinque aree principali.

### 6.1 Intestazione compatta

L'intestazione deve essere bassa, stabile e sempre visibile.

Deve contenere:

- nome dell'ambiente;
- stato del lavoro;
- contesto selezionato;
- disciplina o area attiva;
- accesso rapido alle azioni principali;
- eventuali indicatori di salvataggio, esportazione o modalità di consultazione.

L'intestazione non deve diventare un grande pannello informativo. Deve funzionare come barra di governo del lavoro.

### 6.2 Area principale

L'area principale deve mostrare il contenuto su cui l'utente sta lavorando.

Può contenere:

- curricolo vigente;
- proposta;
- confronto tra versioni;
- elenco di osservazioni;
- quadro di avanzamento;
- documento di sintesi.

Deve restare sempre leggibile e non essere occupata da pannelli secondari inutilmente invasivi.

### 6.3 Pannello laterale di dettaglio

Il pannello laterale deve aprirsi solo quando serve.

Deve poter mostrare:

- dettaglio di una competenza;
- dettaglio di un obiettivo;
- spiegazione contestuale;
- fonte normativa;
- osservazioni collegate;
- esito di revisione;
- suggerimento operativo.

La sua funzione non è sostituire l'area principale, ma approfondire senza far perdere il contesto.

### 6.4 Pannello inferiore o area comandi

L'area inferiore deve servire per le azioni operative immediate.

Può contenere:

- campo annotazioni;
- comandi contestuali;
- stato del salvataggio;
- guida rapida;
- conferme di esportazione;
- avvisi non invasivi.

Deve evitare formule tecniche. L'utente deve capire chiaramente che cosa accade premendo un pulsante.

### 6.5 Menu secondario richiudibile

Il menu secondario deve contenere funzioni non sempre necessarie.

Può includere:

- fonti;
- guida;
- importazione;
- esportazione;
- impostazioni;
- riepiloghi;
- strumenti di controllo.

Non deve essere il luogo in cui l'utente cerca le azioni principali. Le azioni principali devono stare nel contesto di lavoro.

---

## 7. Logica di apertura e chiusura delle aree

### 7.1 Apertura

Un pannello si apre quando l'utente:

- seleziona un elemento da approfondire;
- chiede una spiegazione;
- confronta due versioni;
- consulta una fonte;
- avvia una revisione;
- inserisce un'annotazione;
- verifica un esito.

### 7.2 Chiusura

Un pannello si chiude quando:

- l'utente conferma l'azione;
- l'utente torna alla vista principale;
- l'elemento selezionato cambia;
- il dettaglio non è più pertinente;
- l'utente sceglie esplicitamente di ridurre l'interfaccia.

### 7.3 Persistenza del contesto

Quando un pannello si apre o si chiude, l'utente non deve perdere:

- disciplina selezionata;
- classe o ordine;
- punto del curricolo;
- stato della proposta;
- eventuali annotazioni già inserite;
- posizione nel percorso.

---

## 8. Stati del lavoro da rappresentare

### 8.1 Curricolo in vigore

Contenuto stabile, consultabile, non automaticamente modificabile.

### 8.2 Curricolo in lavorazione

Area di lavoro aperta, soggetta a confronto e verifica.

### 8.3 Proposta del docente

Contributo individuale, non ancora validato.

### 8.4 Esito di dipartimento

Sintesi condivisa, distinta dalla validazione finale.

### 8.5 Validazione istituzionale

Passaggio formale esterno al semplice uso dello strumento.

---

## 9. Requisiti dell'intestazione compatta

### 9.1 Elementi obbligatori

L'intestazione deve mostrare:

- nome dell'ambiente;
- modalità attiva: consultazione, personale, scolastica;
- ruolo attivo: docente, dipartimento, referente, dirigente o sola lettura;
- area di lavoro: curricolo, progettazione, fonti, esportazione, guida;
- stato corrente: in consultazione, in lavorazione, proposta, esito, validazione;
- azioni rapide: salva, esporta, importa, guida, cambia contesto.

### 9.2 Comportamento

L'intestazione deve:

- restare visibile durante lo scorrimento;
- non coprire il contenuto;
- non aprire finestre inutilmente grandi;
- permettere accesso rapido alle azioni frequenti;
- nascondere o ridurre le azioni non pertinenti al ruolo corrente.

### 9.3 Linguaggio

L'intestazione deve usare formule comprensibili:

- Consulta;
- Salva lavoro;
- Esporta proposta;
- Cambia contesto;
- Guida.

---

## 10. Requisiti dell'area principale

L'area principale deve rispondere a una domanda per volta.

Esempi:

- Che cosa prevede il curricolo?
- Che cosa sto proponendo?
- Che cosa è cambiato?
- Che cosa deve essere discusso?
- Che cosa è pronto per l'esportazione?

Ogni schermata principale deve avere:

- titolo chiaro;
- breve descrizione operativa;
- contenuto centrale;
- stato visibile;
- azione primaria evidente;
- eventuale azione secondaria;
- accesso al dettaglio senza cambio totale di schermata.

---

## 11. Requisiti del pannello di dettaglio

Il pannello di dettaglio deve essere contestuale.

Deve poter mostrare:

- spiegazione;
- confronto;
- fonte;
- annotazione;
- proposta;
- criticità;
- azione consigliata;
- stato della decisione.

Il pannello deve avere sempre:

- titolo breve;
- pulsante di chiusura;
- collegamento all'elemento selezionato;
- azione coerente con il ruolo;
- nessuna informazione ridondante rispetto all'area principale.

---

## 12. Requisiti per la revisione e il confronto

La funzione di revisione deve essere progettata per utenti scolastici, non tecnici.

Deve consentire di:

- confrontare curricolo vigente e proposta;
- leggere le differenze in forma chiara;
- approvare, rifiutare o rinviare una proposta;
- aggiungere una motivazione;
- mantenere traccia dell'esito;
- distinguere decisione provvisoria e validazione formale.

Azioni consigliate:

- Accogli proposta;
- Rinvia alla discussione;
- Non accogliere;
- Aggiungi osservazione;
- Prepara sintesi;
- Esporta esito.

Da evitare:

- simboli isolati senza testo;
- icone prive di spiegazione;
- linguaggio informatico;
- automatismi che sembrino sostituire il giudizio professionale.

---

## 13. Requisiti per il test con docenti non tecnici

Il futuro ambiente deve prevedere un percorso di prova semplice, rivolto ai colleghi docenti.

Il test non deve essere meccanico. Deve aiutare a capire:

- se lo strumento è comprensibile;
- se il linguaggio è chiaro;
- se il docente capisce cosa può fare;
- se la proposta appare utile;
- se il processo sembra coerente con il lavoro scolastico reale;
- quali dubbi emergono;
- quali parti generano sovraccarico.

Il percorso di test dovrebbe includere:

- una guida passo passo;
- poche azioni essenziali;
- campo annotazioni non vincolante;
- salvataggio delle osservazioni;
- esportazione del riscontro;
- nessuna richiesta tecnica al docente.

Formula guida del test:

```text
Osserva, prova, rifletti, annota.
```

---

## 14. Requisiti di linguaggio

Il linguaggio dell'interfaccia deve essere:

- professionale;
- scolastico;
- chiaro;
- moderno;
- non burocratico;
- non tecnico;
- rispettoso della responsabilità collegiale.

Devono restare fuori dall'interfaccia ordinaria termini come:

- runtime;
- snapshot;
- JSON;
- markdown;
- debug;
- smoke test;
- repository;
- deploy;
- push;
- backend;
- endpoint.

Nei documenti tecnici tali termini possono comparire solo quando necessari al governo della slice.

---

## 15. Requisiti grafici generali

Il futuro bozzetto dovrà rispettare questi criteri:

- aspetto istituzionale;
- alta leggibilità;
- gerarchia visiva evidente;
- uso misurato del colore;
- icone sobrie, preferibilmente lineari;
- nessun uso di emoji come elemento strutturale;
- pulsanti con testo chiaro;
- stati visivi distinguibili;
- spaziatura ordinata;
- pannelli apribili senza disorientare;
- contenuto principale sempre riconoscibile.

Il modello desiderato non è una schermata decorativa, ma un ambiente di lavoro professionale.

---

## 16. Direzioni possibili per il bozzetto

### 16.1 Direzione A — Cruscotto istituzionale

Adatta a dirigente, referente e coordinamento.

Caratteristiche:

- indicatori sintetici;
- stato dei lavori;
- avanzamento per aree;
- attenzione alle criticità;
- accesso ai documenti di sintesi.

Rischio da evitare:

```text
apparire troppo amministrativa e poco utile al docente operativo
```

### 16.2 Direzione B — Percorso guidato docente

Adatta a docente singolo, test con colleghi non tecnici e compilazione assistita.

Caratteristiche:

- passaggi chiari;
- una decisione per volta;
- guida contestuale;
- annotazioni semplici;
- esportazione finale.

Rischio da evitare:

```text
semplificare troppo e nascondere la complessità reale del curricolo
```

### 16.3 Direzione C — Ambiente professionale di lavoro

Adatta a uso avanzato, dipartimento, referente, confronto e revisione.

Caratteristiche:

- intestazione compatta;
- pannelli apribili;
- area principale stabile;
- dettaglio laterale;
- azioni contestuali;
- confronto tra versioni.

Rischio da evitare:

```text
risultare troppo densa per un docente non tecnico
```

### 16.4 Direzione consigliata

La direzione più coerente per CurManLight è una soluzione ibrida:

```text
A per la visione istituzionale, B per l'accompagnamento del docente, C per l'ambiente operativo di revisione.
```

Il bozzetto dovrà dimostrare che queste tre esigenze possono convivere senza generare tre applicazioni diverse.

---

## 17. Requisiti di accessibilità e usabilità

L'interfaccia deve garantire:

- testi leggibili;
- contrasti adeguati;
- pulsanti sufficientemente grandi;
- significato non affidato solo al colore;
- icone sempre accompagnate da testo o descrizione;
- navigazione coerente da tastiera;
- stati attivi chiaramente visibili;
- messaggi di errore comprensibili;
- conferme non ambigue per azioni importanti.

Per i docenti non tecnici, l'usabilità non coincide con la povertà funzionale. Significa mostrare solo ciò che serve in quel momento, mantenendo raggiungibile il resto.

---

## 18. Requisiti di prudenza istituzionale

CurManLight deve sempre rendere chiaro che:

- non sostituisce il Collegio dei docenti;
- non approva automaticamente il curricolo;
- non produce decisioni definitive senza intervento umano;
- non attribuisce valore normativo autonomo alle proposte;
- accompagna il lavoro professionale, ma non lo automatizza.

Ogni area di proposta, revisione o sintesi deve riportare in modo sobrio il principio:

```text
La validazione resta umana e istituzionale.
```

---

## 19. Requisiti minimi per il futuro bozzetto

Il bozzetto dovrà mostrare almeno:

- intestazione compatta;
- selezione del contesto;
- area curricolo;
- area proposta;
- pannello laterale di dettaglio;
- area annotazioni;
- stato del lavoro;
- azioni principali;
- funzione di guida;
- modalità sola lettura;
- modalità docente;
- modalità dipartimento o referente;
- esempio di confronto tra contenuto vigente e proposta;
- esempio di esportazione o preparazione della sintesi.

---

## 20. Criteri di accettazione del bozzetto

Il bozzetto potrà essere considerato valido solo se consente di rispondere positivamente alle seguenti domande:

- L'utente capisce subito dove si trova?
- L'utente capisce in quale modalità sta lavorando?
- L'utente distingue consultazione, proposta, esito e validazione?
- L'intestazione è compatta ma realmente utile?
- Le azioni principali sono visibili senza sovraccarico?
- I pannelli apribili migliorano il lavoro invece di complicarlo?
- Il docente non tecnico riesce a seguire il percorso?
- Il referente riesce ad avere controllo sul processo?
- Il dirigente riesce a leggere lo stato generale?
- Il linguaggio è scolastico e non tecnico?
- La validazione umana resta esplicita?
- L'interfaccia appare professionale e istituzionale?

---

## 21. Matrice requisiti → viste → componenti

| Requisito utente | Vista interessata | Componente candidato | Priorità |
|---|---|---|---|
| Capire dove si trova | Tutte | Intestazione compatta | Alta |
| Distinguere ruolo e modalità | Home / tutte | Selettore contesto + indicatore modalità | Alta |
| Consultare senza modificare | Curricolo | Stato sola lettura / curricolo in vigore | Alta |
| Proporre senza validare | Curricolo / Progetta | Area proposta + avviso validazione | Alta |
| Annotare durante il lavoro | Curricolo / Test guidato | Pannello annotazioni non vincolanti | Media |
| Confrontare vigente e proposta | Curricolo / Dipartimento | Doppio pannello di confronto | Alta |
| Preparare sintesi | Dipartimento / Referente | Documento di sintesi / esito | Alta |
| Vedere avanzamento | Home / Cruscotto | Indicatori stato lavoro | Media |
| Evitare sovraccarico | Tutte | Pannelli richiudibili e progressivi | Alta |
| Esportare correttamente | Esportazioni | Scelta per compito e destinazione | Alta |

---

## 22. Decisione operativa

Prima di qualsiasi intervento sul codice, il percorso corretto è:

1. approvare le presenti specifiche utente;
2. produrre tre bozzetti alternativi:
   - cruscotto istituzionale;
   - percorso guidato docente;
   - ambiente professionale di lavoro;
3. confrontare i tre bozzetti;
4. scegliere una direzione o una combinazione;
5. trasformare la scelta in specifiche grafiche;
6. solo dopo, definire la micro-slice di implementazione.

La priorità non è aggiungere funzioni, ma costruire un ambiente in cui le funzioni esistenti siano percepite come parte di un processo chiaro, professionale e governabile.

## 23. Verdetto

```text
CML_433U_USER_SPECIFICATIONS_PRE_BOZZETTO_READY_FOR_REVIEW_REMOTE_BRANCH
```
