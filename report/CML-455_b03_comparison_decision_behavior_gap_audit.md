# CML-455 — B03 Comparison and Decision Behavior Gap Audit

> Data: 2026-07-10  
> Base remota: `main` @ `87f67c2ef9cbe761e4b9ea7883a7e9dc0ce5880b`  
> Tipo: audit documentale, strutturale e comportamentale; nessuna modifica runtime  
> Percorso: `B03 — Confrontare e decidere`

## 1. Obiettivo

Verificare se il candidato React consente a un utente autorizzato di:

- individuare una proposta pertinente;
- distinguere senza ambiguità il contenuto vigente dalla proposta;
- comprendere che cosa cambia e perché;
- approvare, rifiutare o annullare una decisione;
- riconoscere l'effetto della decisione;
- operare soltanto entro il proprio ruolo e ordine di scuola;
- evitare che una scelta temporanea venga rappresentata come decisione istituzionale consolidata.

L'audit confronta:

1. la mappa comportamentale CML-445;
2. il contratto `REVISION-PROCESS-LAYER-CONTRACT`;
3. il candidato React corrente;
4. il comportamento già disponibile nel runtime legacy;
5. la chiusura B02, che impone la separazione tra consultazione read-only e decisione.

## 2. Contratto comportamentale B03

### BEH-DEC-01 — Comprendere che cosa cambia

La decisione deve essere preceduta da informazioni minime complete:

- disciplina;
- ordine e nucleo;
- contenuto vigente;
- proposta;
- motivazione;
- stato della proposta;
- riferimento o fonte;
- valore non ancora definitivo del contenuto.

Il confronto deve consentire all'utente di spiegare con parole proprie che cosa cambia, senza ricostruire manualmente le differenze.

### BEH-DEC-02 — Assumere e correggere una decisione

L'utente autorizzato deve poter:

- approvare;
- rifiutare;
- eventualmente personalizzare o richiedere revisione;
- annullare una decisione;
- riconoscere il nuovo stato;
- vedere contatori coerenti;
- ricevere conferma dell'operazione;
- non perdere silenziosamente la decisione.

La UI non deve dichiarare una decisione come confermata quando è soltanto conservata nello stato volatile della pagina.

## 3. Evidenze del candidato React

### 3.1 Accesso alla superficie

`curman-react/src/types/state.ts` espone la vista `revisione` come sempre disponibile e la presenta nel menu con l'etichetta **“Proponi un aggiornamento”**.

`curman-react/src/views/RevisioneView.tsx` usa invece:

- titolo interno **“Revisione”**;
- descrizione **“Confronta il curricolo vigente con le proposte IN 2025.”**;
- pulsanti di decisione immediata.

La superficie mescola quindi tre compiti distinti:

- formulare una proposta;
- confrontare una proposta esistente;
- assumere una decisione.

### 3.2 Selezione e contesto

La vista richiede la selezione esplicita della disciplina e non preimposta Tecnologia o altre discipline.

L'ordine di scuola deriva però da `profilo?.ordine ?? 'Tutti'` e non è mostrato come filtro diretto nella vista. Se il profilo non è configurato:

- vengono mostrate tutte le unità;
- le azioni decisionali restano disponibili;
- non viene richiesto all'utente di dichiarare ruolo o contesto prima di decidere.

Non sono presenti filtri diretti per:

- ordine;
- nucleo;
- classe o fascia;
- stato del processo oltre a da decidere/approvate/rifiutate.

### 3.3 Confronto

`GapComparison.tsx` mostra due pannelli affiancati:

- `unita.traguardo` come **Testo vigente (IN 2012)**;
- `entry.proposto` come **Proposta aggiornamento (IN 2025)**.

Sono visibili anche:

- ordine;
- fascia, quando presente;
- nucleo;
- badge dello stato gap;
- motivazione, quando presente.

Il confronto non mostra:

- titolo o identificativo leggibile dell'unità;
- fonte del contenuto vigente;
- fonte della proposta;
- stato e validazione curricolare dell'unità;
- obiettivi, conoscenze, abilità, evidenze e criteri;
- parti aggiunte, rimosse e invariate;
- autore o provenienza della proposta;
- data o versione della proposta;
- avviso esplicito sul valore non definitivo della proposta.

La motivazione viene resa come testo corsivo senza etichetta semantica.

### 3.4 Azioni decisionali

`DecisioneActions.tsx` espone direttamente:

- **Approva**;
- **Rifiuta**;
- **Annulla** dopo una decisione.

Le azioni:

- non richiedono conferma;
- non richiedono motivazione;
- non verificano il ruolo;
- non verificano l'ordine di scuola;
- non impediscono attivazioni ripetute;
- non mostrano uno stato di salvataggio;
- non comunicano se la decisione è temporanea o conservata.

La funzione `canEditOrder()` esiste in `curman-react/src/lib/gap.ts`, ma non viene usata da `RevisioneView`, `GapComparison` o `DecisioneActions`.

### 3.5 Stati azionabili

`needsDecision()` considera non azionabili soltanto:

- `vigente`;
- `applicabile`;
- `archiviato`.

Di conseguenza può richiedere una decisione anche per stati quali:

- `validato`;
- `approvato`;
- `non_applicabile`.

Nello stesso file esiste `isActionableStatus()`, che limita correttamente l'azione a:

- `proposta`;
- `non_validato`.

Questa funzione non è però utilizzata nella vista. Il candidato possiede quindi una regola di dominio più prudente, ma il comportamento effettivo applica una regola più ampia e incoerente.

### 3.6 Modello della decisione

Il tipo `Decisione` prevede:

- `unitaId`;
- decisione;
- testo finale;
- timestamp;
- autore;
- ruolo;
- note.

`useRevisioneStore.ts` registra soltanto:

- `unitaId`;
- `decisione`;
- `testoFinale`;
- `timestamp`.

Non vengono registrati:

- autore;
- ruolo;
- motivazione del rifiuto;
- note;
- provenienza della decisione;
- fase istituzionale;
- decisione precedente.

### 3.7 Persistenza

`useRevisioneStore` è uno store Zustand semplice e non utilizza:

- middleware di persistenza;
- `localStorage`;
- IndexedDB/Dexie;
- salvataggio esplicito;
- importazione o ripristino.

Il tipo `PersistenzaState` e il payload `cml-local-v3` sono dichiarati in `types/state.ts`, ma non risultano implementazioni operative nel candidato corrente.

Dopo un aggiornamento della pagina, le decisioni vengono perse.

Questo comportamento contraddice la chiusura BEH-DEC-02: una decisione appare immediatamente **Approvata** o **Rifiutata**, ma non è realmente conservata.

### 3.8 Annullamento e storico

`undoDecision()` elimina la chiave della decisione dalla mappa.

L'operazione:

- non richiede conferma;
- non conserva lo stato precedente;
- elimina timestamp e metadati;
- non produce una traccia di annullamento;
- non distingue correzione, revoca o riapertura del confronto.

### 3.9 Feedback

`RevisioneView` dichiara uno stato `toast`, ma non passa alcuna funzione alle azioni e non invoca mai `setToast`.

Dopo approvazione, rifiuto o annullamento l'unico riscontro è la sostituzione locale dei pulsanti con l'etichetta di stato.

Mancano:

- conferma testuale dell'operazione;
- indicazione di salvataggio riuscito o non riuscito;
- messaggio accessibile in area live;
- possibilità di recupero da errore.

### 3.10 Contatori

`computeProgress()` include tutte le entry diverse da `vigente` e `archiviato`, non soltanto gli stati effettivamente azionabili.

Il totale può quindi comprendere elementi:

- già validati;
- già approvati a livello dati;
- non applicabili;
- non destinati a una decisione dell'utente corrente.

La percentuale può rappresentare come incompleto un processo che non richiede azione, oppure spingere l'utente a decidere su stati non pertinenti.

### 3.11 Test automatici

`curman-react/package.json` contiene:

- `test:b01`;
- `test:b02`.

Non è presente un controllo `test:b03`.

Non risultano quindi protetti automaticamente:

- autorizzazioni;
- transizioni di stato;
- contatori;
- annullamento;
- persistenza;
- feedback;
- comportamento mobile della revisione.

## 4. Confronto con il runtime legacy

Il runtime legacy dispone già di alcuni comportamenti più completi:

- confronto 2012/2025 sempre visibile nelle proposte pendenti;
- blocco delle azioni per ordine non modificabile;
- approvazione;
- rifiuto espresso come mantenimento del testo attuale;
- personalizzazione del testo e successiva approvazione;
- annullamento della decisione;
- aggiornamento di contatori e avanzamento;
- salvataggio locale dopo ogni decisione;
- messaggio di esito tramite toast;
- riepilogo delle voci ancora da decidere.

Restano nel legacy limiti istituzionali e di tracciabilità, ma il candidato React perde attualmente capacità già disponibili e osservabili:

| Capacità | Legacy | React corrente |
|---|---|---|
| Confronto vigente/proposta | Presente e sempre visibile | Presente, limitato al traguardo |
| Blocco per ordine | Presente | Funzione disponibile ma non collegata |
| Approva/rifiuta | Presente | Presente |
| Personalizza e approva | Presente | Store predisposto, UI assente |
| Annulla decisione | Presente | Presente, senza conferma o storico |
| Salvataggio locale | Presente dopo ogni azione | Assente |
| Toast di esito | Presente | Stato dichiarato ma non collegato |
| Contatori | Aggiornati sul dataset operativo | Aggiornati su stati gap troppo ampi |
| Tracciabilità autore/ruolo | Debole | Campi tipizzati ma non valorizzati |

## 5. Matrice di conformità B03

| Requisito B03 | Candidato React | Esito |
|---|---|---|
| Disciplina non preimpostata | Selezione iniziale vuota | Conforme |
| Vigente e proposta distinguibili | Due pannelli etichettati | Parziale |
| Motivazione riconoscibile | Testo corsivo senza etichetta | Scarto medio |
| Differenze comprensibili | Nessuna evidenziazione delle variazioni | Scarto alto |
| Informazioni minime prima della decisione | Metadati e dettaglio curricolare incompleti | Scarto bloccante |
| Solo stati azionabili | Regola effettiva troppo ampia | Scarto bloccante |
| Solo utenti autorizzati | Nessun controllo ruolo/ordine | Scarto bloccante |
| Profilo obbligatorio prima della decisione | Azioni disponibili anche con profilo nullo | Scarto bloccante |
| Approvazione | Presente | Parziale |
| Rifiuto motivato | Motivazione non prevista | Scarto alto |
| Personalizzazione | Non esposta | Scarto alto |
| Richiesta di revisione | Assente | Scarto alto |
| Annullamento comprensibile | Elimina la decisione senza conferma | Scarto alto |
| Storico della decisione | Assente | Scarto alto |
| Autore e ruolo registrati | Campi presenti ma non valorizzati | Scarto bloccante |
| Stato persistito | Perso al ricaricamento | Scarto bloccante |
| Feedback dell'operazione | Toast non collegato | Scarto alto |
| Contatori coerenti | Totale basato su stati non sempre azionabili | Scarto alto |
| Distinzione approvazione/applicabilità | Non spiegata nella superficie | Scarto bloccante |
| Test automatico B03 | Assente | Scarto alto |
| Parità minima col legacy | Diverse capacità perse | Scarto alto |

## 6. Scarti classificati

### G-B03-01 — Autorizzazioni non applicate

**Severità:** bloccante.

Le azioni sono disponibili senza profilo e per qualsiasi ruolo. Il ruolo `consultatore` può teoricamente approvare o rifiutare. La funzione `canEditOrder()` non è collegata alla UI.

**Correzione richiesta:** introdurre una politica unica `canDecide(profile, entry, unit)` usata prima del render e nuovamente nell'azione di store.

### G-B03-02 — Decisioni volatili rappresentate come confermate

**Severità:** bloccante.

La UI mostra “Approvata” o “Rifiutata”, ma lo stato viene perso al ricaricamento.

**Correzione richiesta:** non dichiarare la decisione consolidata senza salvataggio riuscito. Collegare B03 a un contratto minimo di persistenza, lasciando a B04 il ciclo completo di ripresa, copia e trasferimento.

### G-B03-03 — Significato istituzionale ambiguo

**Severità:** bloccante.

“Approvata” non distingue:

- scelta personale;
- esito dipartimentale;
- validazione del referente;
- approvazione istituzionale;
- applicabilità.

**Correzione richiesta:** nominare fase, ruolo e valore dell'esito; usare formule prudenti, ad esempio “Scelta registrata per la proposta” finché non esiste il passaggio istituzionale pertinente.

### G-B03-04 — Stati non azionabili inclusi nel processo decisionale

**Severità:** bloccante.

`needsDecision()` e `computeProgress()` includono stati più ampi di `isActionableStatus()`.

**Correzione richiesta:** definire una sola funzione di dominio per azionabilità, contatori, filtri e pulsanti.

### G-B03-05 — Informazioni insufficienti prima della decisione

**Severità:** bloccante.

Il confronto riguarda solo il traguardo e non espone fonte, validazione, contenuti collegati e provenienza della proposta.

**Correzione richiesta:** definire un dettaglio decisionale minimo obbligatorio e impedire l'azione quando le informazioni necessarie non sono disponibili.

### G-B03-06 — Differenze non evidenziate

**Severità:** alta.

La disposizione affiancata aiuta, ma l'utente deve ancora individuare manualmente aggiunte, rimozioni e parti invariate.

**Correzione richiesta:** evidenziazione semantica delle differenze o sintesi esplicita del cambiamento, senza affidarsi soltanto al colore.

### G-B03-07 — Rifiuto senza motivazione o percorso successivo

**Severità:** alta.

Il rifiuto è immediato e non raccoglie una ragione. Non esiste richiesta di revisione.

**Correzione richiesta:** distinguere “mantieni il vigente”, “richiedi revisione” e “rifiuta”, con nota obbligatoria quando il processo la richiede.

### G-B03-08 — Personalizzazione non disponibile

**Severità:** alta.

Lo store accetta `testoCustom`, ma la UI non lo espone. Il legacy consente di personalizzare e approvare.

**Correzione richiesta:** ripristinare un percorso esplicito e separato “Modifica la proposta”, con salvataggio controllato e testo finale distinguibile dalla proposta originaria.

### G-B03-09 — Annullamento distruttivo e senza storico

**Severità:** alta.

L'annullamento elimina la decisione e i suoi metadati.

**Correzione richiesta:** conferma, registrazione dell'evento e distinzione tra riapertura, revoca e correzione.

### G-B03-10 — Tracciabilità incompleta

**Severità:** bloccante.

Autore, ruolo e note esistono nel tipo ma non vengono valorizzati.

**Correzione richiesta:** registrare almeno autore/identità locale disponibile, ruolo dichiarato, fase, timestamp e motivazione pertinente.

### G-B03-11 — Feedback non collegato

**Severità:** alta.

Il toast della vista è codice morto. Non esistono conferme accessibili né stato di salvataggio.

**Correzione richiesta:** feedback unificato per operazione riuscita, non salvata, annullata o non autorizzata, con area live.

### G-B03-12 — Contesto e filtri insufficienti

**Severità:** alta.

Ordine e nucleo non sono selezionabili direttamente; il profilo può filtrare implicitamente l'ordine.

**Correzione richiesta:** riutilizzare il contratto di filtro B02, adattandolo alla revisione e rendendo sempre visibile il perimetro della decisione.

### G-B03-13 — Contatori potenzialmente fuorvianti

**Severità:** alta.

Il denominatore include entry non necessariamente azionabili dall'utente o dal processo corrente.

**Correzione richiesta:** conteggiare soltanto le proposte pertinenti al ruolo, ordine, filtro e fase.

### G-B03-14 — Compito e terminologia non allineati

**Severità:** media.

Il menu invita a “Proporre un aggiornamento”, mentre la vista confronta e decide proposte già esistenti.

**Correzione richiesta:** separare o rinominare chiaramente formulazione della proposta e decisione.

### G-B03-15 — Assenza di protezione contro azioni accidentali

**Severità:** media.

Approva, rifiuta e annulla agiscono al primo clic senza conferma o stato di elaborazione.

**Correzione richiesta:** conferma proporzionata al rischio e blocco di riattivazione durante l'aggiornamento.

### G-B03-16 — Nessun test automatico B03

**Severità:** alta.

Il ciclo non dispone di un controllo dedicato.

**Correzione richiesta:** introdurre un test statico/strutturale e un audit Playwright desktop/mobile per confronto, autorizzazioni, transizioni, contatori, feedback e ricaricamento.

## 7. Decisioni di prodotto necessarie

Prima della realizzazione occorre consolidare:

1. **Oggetto della decisione:** scelta personale, proposta docente, esito dipartimentale o decisione istituzionale.
2. **Ruoli autorizzati:** quali ruoli possono approvare, rifiutare, modificare, richiedere revisione o soltanto consultare.
3. **Stati azionabili:** usare una matrice unica stato × ruolo × azione.
4. **Esito del rifiuto:** mantenimento del vigente, rifiuto formale o richiesta di revisione.
5. **Personalizzazione:** se modifica la proposta originaria o produce un testo finale derivato.
6. **Persistenza minima B03:** una decisione non può apparire consolidata se non è stata conservata.
7. **Tracciabilità:** dati minimi obbligatori per ogni decisione e annullamento.
8. **Terminologia:** separare proposta, validazione, approvazione e applicabilità.
9. **Confronto minimo:** quali campi devono essere visibili prima di consentire l'azione.
10. **Continuità col legacy:** quali capacità devono essere migrate senza riprodurne le ambiguità.

## 8. Sequenza raccomandata

### CML-456 — B03 Comparison and Decision Realization Contract

Definire:

- matrice ruolo × stato × azione;
- modello dell'esito;
- dettaglio minimo del confronto;
- significato di approvazione/rifiuto/revisione;
- politica di feedback e persistenza;
- criteri desktop, mobile e accessibilità;
- test B03 obbligatorio.

### CML-457 — B03 Core Comparison and Authorization Runtime

Realizzare:

- contesto e filtri espliciti;
- confronto completo;
- autorizzazioni;
- stati azionabili unificati;
- linguaggio prudente dell'esito.

### CML-458 — B03 Decision, Feedback and Minimal Persistence Runtime

Realizzare:

- approvazione/rifiuto/revisione;
- personalizzazione;
- annullamento controllato;
- tracciabilità minima;
- feedback accessibile;
- conservazione necessaria a non produrre false conferme.

### CML-459 — B03 Visual Interactive Audit

Verificare con Chromium:

- desktop `1440 × 1000`;
- mobile `390 × 844`;
- profilo assente;
- consultatore;
- docente nell'ordine corretto e non corretto;
- stati azionabili e non azionabili;
- approvazione, rifiuto, revisione, personalizzazione e annullamento;
- contatori;
- ricaricamento;
- console;
- tastiera e area live.

### CML-460 — B03 Closure

Chiudere il ciclo soltanto dopo audit interattivo positivo e assenza di scarti bloccanti.

## 9. Gate di chiusura B03

B03 potrà essere chiuso soltanto quando:

- la superficie dichiara con precisione il compito svolto;
- vigente e proposta sono inequivocabili;
- le informazioni minime precedono ogni decisione;
- soltanto stati e ruoli autorizzati espongono azioni;
- profilo, ordine e fase sono sempre riconoscibili;
- approvazione, rifiuto, revisione e annullamento hanno significato distinto;
- autore, ruolo, timestamp e motivazione pertinente sono registrati;
- i contatori usano la stessa regola di azionabilità dei pulsanti;
- il feedback indica anche lo stato di conservazione;
- una ricarica non trasforma una scelta confermata in perdita silenziosa;
- desktop e mobile mantengono confronto e azioni leggibili;
- la tastiera consente l'intero percorso;
- la console non presenta errori;
- `test:b03` e audit Playwright risultano positivi;
- la consultazione B02 resta read-only e non regredisce.

## 10. Stato della slice

La slice modifica esclusivamente questo documento.

Non sono stati modificati:

- runtime React;
- runtime legacy;
- dati curricolari;
- gap layer;
- persistenza;
- workflow;
- dipendenze;
- configurazione di pubblicazione.

## 11. Verdetto

B03 non è pronto per la chiusura né per una microcorrezione isolata. Gli scarti riguardano il contratto decisionale, le autorizzazioni, il significato istituzionale e la conservazione dello stato.

```text
CML_455_B03_COMPARISON_DECISION_BEHAVIOR_GAP_AUDIT_READY_REMOTE_BRANCH
```

Prossima slice raccomandata:

```text
CML-456 — B03 Comparison and Decision Realization Contract
```
