# CML-432 — Teacher Task View Architecture and Mock Comparison

Analisi prodotto per progettare le viste CurManLight in relazione ai task reali del docente, confrontando app attuale, evidenze del primo pilota e struttura attesa del mock logico/grafico.

---

## 1. Premessa

Il primo pilota PM-09 ha prodotto una valutazione complessiva 2/5: CurManLight è percepito come utile, ma difficile.

Il problema non è una singola etichetta o una singola card. Il problema è sistemico:

```text
vista troppo ricca
↓
task docente non focalizzato
↓
carico cognitivo alto
↓
validazione/processo non percepiti
↓
funzioni utili ma difficili da usare
```

La prossima fase non deve essere una patch UI immediata. Serve prima progettare le viste in funzione di:

- criteri d'uso del docente;
- usabilità reale;
- progressività dell'informazione;
- processo curricolare in periodo transitorio;
- confronto con mock logico/grafico.

## 2. Stato del confronto con il mock

In questa esecuzione remota non è stato fornito un file mock, uno screenshot del mock o una specifica visuale completa.

Per questo il confronto viene impostato come matrice pronta:

| Livello | Stato |
|---|---|
| App attuale | analizzata tramite pilota e schermate osservate |
| Evidenze pilota | disponibili |
| Mock logico/grafico | input da allegare |
| Vista target | definita in forma testuale preliminare |
| Decisioni runtime | sospese fino a validazione target |

Regola: nessun dettaglio grafico del mock viene inventato.

## 3. Criteri d'uso del docente

Ogni vista deve essere valutata con queste domande:

| Criterio | Domanda |
|---|---|
| Orientamento | Capisco dove sono? |
| Task | Capisco cosa posso fare ora? |
| Decisione | Capisco cosa devo scegliere? |
| Output | Capisco cosa ottengo? |
| Validazione | Capisco cosa resta da validare umanamente? |
| Carico cognitivo | Posso agire senza leggere troppo? |
| Progressività | Le informazioni appaiono quando servono? |
| Uso scolastico | La vista rispetta il lavoro reale del docente? |

## 4. Contratti d'uso delle viste

### 4.1 Home

| Campo | Contratto |
|---|---|
| Utente | docente non tecnico |
| Compito primario | scegliere cosa fare oggi |
| Azione primaria | entrare in Curricolo, Progetta, Esportazioni o Fonti/Limiti |
| Cosa deve capire subito | l'app aiuta a consultare, progettare, esportare e verificare |
| Informazioni indispensabili | quattro azioni principali; contesto; validazione umana |
| Informazioni secondarie | spiegazioni estese, note metodologiche, card descrittive |
| Rischio attuale | messaggi promozionali/ripetitivi, card pesanti, validazione umana poco percepita |
| Vista target | Home come selettore rapido di compito, non come pagina di spiegazione completa |

### 4.2 Curricolo

| Campo | Contratto |
|---|---|
| Utente | docente che consulta il curricolo disciplinare |
| Compito primario | consultare curricolo in vigore e proposta di aggiornamento |
| Azione primaria | scegliere disciplina e leggere/confrontare contenuti |
| Cosa deve capire subito | disciplina attiva; curricolo vigente; proposta IN 2025; stato approvativo |
| Informazioni indispensabili | disciplina, versione, stato, confronto, periodo transitorio |
| Informazioni secondarie | indicatori estesi, note, fonti dettagliate, legenda completa |
| Rischio attuale | troppi testi e stati; disciplina attiva poco visibile; confronto IN 2012/2025 non autoesplicativo |
| Vista target | consultazione comparativa chiara con stato istituzionale esplicito |

### 4.3 Progetta

| Campo | Contratto |
|---|---|
| Utente | docente che deve costruire materiali didattici |
| Compito primario | partire dal curricolo per progettare |
| Azione primaria | scegliere percorso progettuale |
| Cosa deve capire subito | posso progettare in modi diversi, non con uno schema rigido |
| Informazioni indispensabili | curricolo di partenza; tipo di percorso; output atteso |
| Informazioni secondarie | spiegazioni generali, card introduttive, note metodologiche lunghe |
| Rischio attuale | molte possibilità non focalizzate; serve scorrere/aprire/scoprire |
| Vista target | sistema di percorsi: curricolo → progettazione annuale / UDA / piano attività / tema concreto |

### 4.4 Esportazioni

| Campo | Contratto |
|---|---|
| Utente | docente che vuole ottenere un documento o file di lavoro |
| Compito primario | esportare materiali coerenti con il task svolto |
| Azione primaria | scegliere cosa esportare e in quale formato |
| Cosa deve capire subito | differenza tra documento leggibile, bozza da rivedere, file di lavoro |
| Informazioni indispensabili | output, uso previsto, collegamento alla sezione di origine |
| Informazioni secondarie | spiegazioni generali sull'export |
| Rischio attuale | export generale comprensibile, ma non emerge l'export della progettazione |
| Vista target | export organizzato per task: curricolo, progettazione annuale, UDA, piano attività, file di lavoro |

### 4.5 Guida

| Campo | Contratto |
|---|---|
| Utente | docente in dubbio operativo |
| Compito primario | ricevere aiuto pratico nel momento del bisogno |
| Azione primaria | trovare istruzioni brevi per il task corrente |
| Cosa deve capire subito | quale guida leggere per il problema specifico |
| Informazioni indispensabili | percorsi pratici, esempi, passaggi brevi |
| Informazioni secondarie | spiegazioni generali sul sistema |
| Rischio attuale | guida informativa ma poco pratica; mancano guide specifiche per progettazione |
| Vista target | guida task-oriented e contestuale: consultare, interpretare, progettare, esportare |

### 4.6 Test guidato

| Campo | Contratto |
|---|---|
| Utente | docente tester |
| Compito primario | provare l'app e annotare osservazioni |
| Azione primaria | leggere consegna, usare app, scrivere note, esportare |
| Cosa deve capire subito | dove premere e cosa osservare |
| Informazioni indispensabili | istruzioni semplici; campo annotazioni; export |
| Informazioni secondarie | spiegazioni lunghe sul test |
| Rischio attuale | modale bloccante rende difficile navigare e prendere appunti |
| Vista target | test non bloccante o istruzioni esterne; annotazioni accessibili senza impedire la navigazione |

## 5. Matrice app attuale / evidenza / mock / vista target

| Vista | App attuale | Evidenza pilota | Mock logico/grafico | Vista target |
|---|---|---|---|---|
| Home | quattro azioni chiare ma troppe card/testi | orienta abbastanza, ma pesa; validazione non percepita | da confrontare quando disponibile | selettore rapido del compito, testi minimi, validazione visibile |
| Curricolo | molte informazioni, stati e confronti | serve concentrazione; IN 2012/2025 non autoesplicativi | da confrontare quando disponibile | disciplina attiva forte, curricolo vigente/proposta/stato, confronto progressivo |
| Progetta | molte possibilità e card iniziali | non focalizza; serve analisi del processo reale | da confrontare quando disponibile | percorsi multipli dal curricolo, non schema rigido unico |
| Esportazioni | chiara in generale | non emerge export della progettazione | da confrontare quando disponibile | export collegato al task e alla sezione di origine |
| Guida | informativa | aiuta abbastanza ma non pratica | da confrontare quando disponibile | guida breve per compiti, soprattutto Progetta |
| Test guidato | modale con scenario e textarea | il modale blocca navigazione/appunti | da confrontare quando disponibile | test non bloccante o istruzioni esterne |

## 6. Decisioni progettuali preliminari

### D1 — Home non deve spiegare tutto

La Home deve diventare un cruscotto di scelta rapida. Le spiegazioni estese vanno spostate in aiuti progressivi o contestuali.

### D2 — Curricolo deve esplicitare lo stato istituzionale

La vista deve distinguere:

- curricolo in vigore;
- proposta di aggiornamento IN 2025;
- stato della proposta;
- periodo transitorio;
- validazione umana.

### D3 — Progetta richiede prima analisi di processo

Non è opportuno fare solo un alleggerimento grafico. Bisogna modellare i modi reali di progettare:

- dal curricolo alla progettazione annuale;
- dal curricolo alla UDA;
- da tema concreto a UDA;
- da progettazione annuale a piano attività;
- da classe/livello a bisogni formativi.

### D4 — Esportazioni deve seguire il task

L'export deve rispondere a domande operative:

- sto esportando il curricolo?
- sto esportando una progettazione annuale?
- sto esportando una UDA?
- sto esportando un piano attività?
- sto salvando un file di lavoro?

### D5 — Guida deve diventare pratica

La guida deve essere meno manuale generale e più supporto per compiti:

- come consulto il curricolo;
- come interpreto IN 2012 / IN 2025;
- come parto dal curricolo per progettare;
- come preparo UDA;
- come esporto il lavoro.

### D6 — Test guidato non deve bloccare la prova

Per osservare l'app il docente deve poter navigare e annotare senza un modale che ostacola il task.

## 7. Cose da non modificare ora

- Non modificare runtime prima di validare la vista target.
- Non cambiare le quattro etichette principali Home, perché il pilota le ha giudicate chiare.
- Non introdurre backend, account o raccolta remota.
- Non modificare dati curricolari.
- Non trasformare una singola osservazione in patch isolata senza architettura.

## 8. Future slice candidate

| Priorità | Slice candidata | Natura |
|---|---|---|
| Alta | Teacher task view target spec | docs-only / design spec |
| Alta | Curricolo consultazione vigente/proposta/stato | design then runtime |
| Alta | Progetta process model with teachers | research / docs-only |
| Media-Alta | Home task-oriented reduction | runtime after target approval |
| Media-Alta | Progetta to Esportazioni linkage | design then runtime |
| Media | Guida task-oriented for Progetta | docs/runtime microcopy |
| Media | Non-blocking guided test mode | runtime microfix |

## 9. Mock comparison checklist

Quando il mock grafico sarà disponibile, confrontare ogni vista su questi punti:

| Punto | Domanda |
|---|---|
| Header | riduce o aumenta il carico? |
| Azione primaria | è più visibile dell'app attuale? |
| Densità | ci sono meno testi iniziali? |
| Stato processo | validazione/proposta/stato sono evidenti? |
| Progressività | i dettagli sono nascosti fino al bisogno? |
| Mobile | l'azione resta utilizzabile? |
| Docente non tecnico | serve meno spiegazione? |

## 10. Verdetto

```text
CML_432_TEACHER_TASK_VIEW_ARCHITECTURE_PUSHED_REMOTE
```
