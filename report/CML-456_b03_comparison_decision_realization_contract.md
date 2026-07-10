# CML-456 — B03 Comparison and Decision Realization Contract

> Data: 2026-07-10  
> Base remota: `main` @ `6f5b54c51d5c16b2c03eeee51c9b76e79a7274ab`  
> Tipo: contratto realizzativo docs-only; nessuna modifica runtime  
> Percorso: `B03 — Confrontare e decidere`  
> Deriva da: `CML-455 — B03 Comparison and Decision Behavior Gap Audit`

## 1. Scopo

Definire il comportamento obbligatorio della futura superficie React dedicata al confronto e alla decisione sulle proposte curricolari.

Il contratto risolve prima della realizzazione gli scarti rilevati da CML-455 e stabilisce:

- quale decisione viene realmente registrata;
- quali ruoli possono agire;
- quali stati sono azionabili;
- quali informazioni devono precedere la scelta;
- come distinguere proposta, scelta di lavoro, validazione, approvazione e applicabilità;
- quali dati devono essere conservati;
- come gestire rifiuto, revisione, personalizzazione e riapertura;
- quali feedback devono essere restituiti;
- quali controlli automatici e interattivi devono proteggere B03.

La futura implementazione non deve limitarsi a rendere più completi i pulsanti esistenti. Deve applicare un unico contratto di dominio a interfaccia, store, filtri, contatori e persistenza.

## 2. Decisione di prodotto fondamentale

### 2.1 Oggetto di B03

B03 registra una **scelta di lavoro sulla singola proposta curricolare**.

La scelta di lavoro può essere formulata da un utente abilitato nel proprio contesto, ma non equivale automaticamente a:

- validazione del referente;
- approvazione del dirigente;
- deliberazione collegiale;
- entrata in vigore;
- applicabilità alla classe o all'anno scolastico.

La superficie non deve quindi mostrare la sola etichetta generica **“Approvata”**.

### 2.2 Formulazioni obbligatorie

Le formulazioni principali sono:

| Valore interno | Etichetta utente | Significato |
|---|---|---|
| `accepted_proposal` | **Proposta accolta nel lavoro corrente** | La proposta viene scelta come testo di lavoro nel contesto locale dichiarato |
| `kept_current` | **Testo vigente mantenuto** | La proposta non viene accolta e resta il contenuto vigente |
| `revision_requested` | **Revisione richiesta** | La proposta necessita di integrazioni prima di una nuova decisione |
| `accepted_custom` | **Testo personalizzato accolto nel lavoro corrente** | L'utente ha prodotto un testo derivato e lo ha scelto come esito di lavoro |
| `reopened` | **Decisione riaperta** | Una scelta precedente viene resa nuovamente modificabile senza cancellarne la traccia |

La UI può usare forme brevi nelle card, ma il dettaglio deve sempre chiarire che si tratta di una **scelta di lavoro** e indicare il contesto nel quale è stata registrata.

### 2.3 Piani istituzionali distinti

Il modello deve distinguere almeno:

1. proposta;
2. scelta di lavoro;
3. esito dipartimentale;
4. verifica del referente;
5. approvazione o validazione istituzionale;
6. applicabilità.

B03 implementa il secondo piano e prepara dati leggibili per i successivi cicli di ruolo e chiusura istituzionale. Non deve simulare i piani successivi.

## 3. Perimetro e invarianti

### 3.1 Incluso in B03

- selezione esplicita del contesto;
- confronto vigente/proposta;
- metadati minimi decisionali;
- controllo ruolo, ordine e stato;
- accoglimento della proposta;
- mantenimento del vigente;
- richiesta di revisione;
- personalizzazione del testo;
- riapertura controllata;
- contatori coerenti;
- feedback accessibile;
- conservazione minima della scelta;
- tracciabilità locale minima;
- test statici e audit Chromium.

### 3.2 Escluso da B03

- autenticazione remota;
- autorizzazioni certificate da Workspace;
- firma digitale;
- deliberazione collegiale;
- approvazione istituzionale definitiva;
- gestione completa di fascicoli e verbali;
- sincronizzazione multiutente;
- storico remoto centralizzato;
- trasferimento tra dispositivi;
- copia di sicurezza completa;
- applicabilità finale.

Questi elementi appartengono a B04, B05, B06 e B10.

### 3.3 Invarianti

La realizzazione deve mantenere:

- B02 interamente read-only;
- nessuna disciplina preimpostata;
- 14 discipline canoniche disponibili;
- nessun backend;
- nessun servizio esterno obbligatorio;
- nessuna credenziale incorporata;
- validazione umana sempre esplicita;
- dati legacy invariati salvo attività espressamente previste in slice dedicate;
- assenza di linguaggio che attribuisca valore istituzionale non dimostrato.

## 4. Modello del contesto decisionale

Prima di mostrare azioni, la superficie deve disporre di un contesto completo.

### 4.1 Campi minimi

```text
DecisionContext
- disciplina
- ordine
- nucleo
- unitaId
- ruolo dichiarato
- ambitoDecisione
- statoGap
- versioneCurricolare
- fonteVigente
- fonteProposta
```

### 4.2 Ambito della decisione

`ambitoDecisione` deve indicare il perimetro nel quale la scelta è registrata.

Valori minimi:

- `lavoro_personale`;
- `lavoro_dipartimentale`.

Nella prima realizzazione B03:

- il docente opera in `lavoro_personale`;
- il dipartimento opera in `lavoro_dipartimentale`;
- consultatore, referente e dirigenza accedono in sola lettura nella superficie B03;
- le azioni proprie del referente e della dirigenza saranno definite nei cicli B06 e B10.

Questa scelta è prudenziale: un profilo locale dichiarato non costituisce prova sufficiente per attribuire una validazione istituzionale.

### 4.3 Profilo obbligatorio

Senza profilo configurato:

- il confronto può essere consultato;
- nessuna azione decisionale è disponibile;
- deve apparire un messaggio operativo;
- l'utente deve poter raggiungere direttamente le impostazioni del profilo;
- disciplina e filtri già selezionati devono essere conservati al ritorno.

Messaggio raccomandato:

> Configura ruolo e ordine di scuola per registrare una scelta. Puoi comunque consultare il confronto.

## 5. Matrice ruolo × azione

| Ruolo | Consulta | Accoglie proposta | Mantiene vigente | Richiede revisione | Personalizza | Riapre | Valore dell'esito |
|---|---:|---:|---:|---:|---:|---:|---|
| Docente | sì | sì | sì | sì | sì | sì, sulle proprie scelte locali | Scelta di lavoro personale |
| Dipartimento | sì | sì | sì | sì | sì | sì, nel contesto dipartimentale locale | Esito di lavoro dipartimentale non ancora validato |
| Referente | sì | no in B03 | no in B03 | no in B03 | no in B03 | no in B03 | Consultazione preparatoria |
| Dirigenza | sì | no in B03 | no in B03 | no in B03 | no in B03 | no in B03 | Consultazione preparatoria |
| Consultatore | sì | no | no | no | no | no | Sola lettura |
| Profilo assente | sì | no | no | no | no | no | Sola lettura con invito alla configurazione |

### 5.1 Regola unica di autorizzazione

Deve esistere una sola funzione di dominio equivalente a:

```text
canPerformDecisionAction(profile, context, entry, action)
```

La funzione deve verificare almeno:

- profilo presente;
- ruolo autorizzato;
- ambito decisionale coerente;
- ordine coerente con il profilo;
- disciplina coerente;
- stato azionabile;
- disponibilità dei dati minimi;
- assenza di operazione di salvataggio già in corso.

La stessa funzione o lo stesso modulo di politica deve essere usato:

- per mostrare o disabilitare le azioni;
- nell'handler dell'azione;
- nello store;
- nei test;
- nei messaggi di impossibilità.

Nascondere un pulsante non costituisce controllo sufficiente.

## 6. Matrice stato × azione

### 6.1 Stati gap azionabili

Solo questi stati possono iniziare una nuova scelta:

- `proposta`;
- `non_validato`.

### 6.2 Stati gap non azionabili

Devono essere consultabili ma senza azioni B03:

- `vigente`;
- `validato`;
- `approvato`;
- `applicabile`;
- `non_applicabile`;
- `archiviato`.

### 6.3 Matrice

| Stato gap | Nuova scelta | Richiesta revisione | Personalizzazione | Riapertura | Motivo UI |
|---|---:|---:|---:|---:|---|
| `proposta` | sì | sì | sì | se esiste scelta precedente | Proposta da valutare |
| `non_validato` | sì | sì | sì | se esiste scelta precedente | Contenuto non ancora validato |
| `vigente` | no | no | no | no | Nessuna proposta da decidere |
| `validato` | no | no | no | no | Fase successiva al lavoro B03 |
| `approvato` | no | no | no | no | Stato istituzionale non modificabile qui |
| `applicabile` | no | no | no | no | Contenuto operativo nel perimetro definito |
| `non_applicabile` | no | no | no | no | Nessuna decisione B03 richiesta |
| `archiviato` | no | no | no | no | Contenuto storico |

### 6.4 Regola unica di azionabilità

`needsDecision`, filtri, contatori, progressione e pulsanti devono dipendere dalla stessa regola.

Non deve più esistere divergenza tra:

- `needsDecision()`;
- `isActionableStatus()`;
- `computeProgress()`;
- condizioni di rendering delle azioni.

## 7. Contratto del confronto

### 7.1 Intestazione

Ogni confronto deve mostrare prima dei testi:

- disciplina;
- ordine;
- classe o fascia, quando disponibile;
- nucleo;
- stato della proposta;
- ambito della decisione;
- avviso sul valore non definitivo.

### 7.2 Metadati minimi

Devono essere raggiungibili senza uscire dalla card:

- fonte del vigente;
- fonte della proposta;
- versione o data di riferimento;
- necessità di validazione umana;
- motivazione della proposta;
- provenienza o autore, quando disponibile;
- nota dipartimentale pertinente;
- completezza dei dati necessari alla decisione.

### 7.3 Contenuti

Il confronto principale deve mostrare:

- testo vigente;
- testo proposto;
- sintesi del cambiamento;
- eventuale testo personalizzato dopo la modifica.

Il dettaglio deve rendere disponibili, quando presenti:

- competenza;
- obiettivi;
- conoscenze;
- abilità;
- evidenze;
- criteri di valutazione.

### 7.4 Evidenziazione delle differenze

La futura implementazione deve fornire almeno una delle seguenti soluzioni:

1. differenze testuali semantiche con aggiunte e rimozioni;
2. sintesi strutturata “Aggiunge / modifica / mantiene”;
3. combinazione delle due.

Requisiti:

- non affidarsi soltanto al colore;
- usare etichette testuali;
- non modificare il testo originale;
- gestire contenuti vuoti o nuovi;
- evitare differenze fuorvianti dovute soltanto a spaziatura o punteggiatura, quando tecnicamente ragionevole.

### 7.5 Blocco per dati incompleti

Quando mancano informazioni minime:

- il confronto resta consultabile;
- le azioni sono disabilitate;
- la UI indica quali dati mancano;
- non viene registrata una decisione parziale.

Informazioni bloccanti minime:

- identificativo dell'unità;
- disciplina;
- ordine;
- testo vigente o dichiarazione esplicita di nuova voce;
- testo proposto;
- stato gap;
- fonte o riferimento della proposta.

## 8. Contratto delle azioni

### 8.1 Accogli proposta

Effetto:

- registra `accepted_proposal`;
- usa come testo finale la proposta originale;
- conserva riferimento alla proposta valutata;
- non cambia automaticamente `GapStatus` in `approvato` o `applicabile`;
- mostra il valore dell'esito nel contesto corrente.

Etichetta raccomandata:

**Accogli proposta**

Conferma finale:

**Registra la scelta**

### 8.2 Mantieni testo vigente

Effetto:

- registra `kept_current`;
- mantiene il testo vigente come testo finale del lavoro corrente;
- non elimina la proposta;
- consente di consultare successivamente la motivazione della scelta.

Etichetta raccomandata:

**Mantieni il vigente**

La motivazione è:

- facoltativa nel lavoro personale;
- obbligatoria nel lavoro dipartimentale.

### 8.3 Richiedi revisione

Effetto:

- registra `revision_requested`;
- non produce un testo finale approvato;
- conserva la proposta e la rende riconoscibile come da integrare;
- richiede una nota obbligatoria.

Etichetta:

**Richiedi revisione**

La nota deve spiegare almeno uno tra:

- contenuto da chiarire;
- integrazione richiesta;
- fonte da verificare;
- coerenza curricolare da riesaminare.

### 8.4 Personalizza testo

Il percorso deve essere separato dalla decisione immediata.

Sequenza:

1. apri modifica;
2. mostra proposta originale non modificabile come riferimento;
3. modifica una copia;
4. consenti annullamento senza perdita della proposta;
5. valida testo non vuoto;
6. mostra anteprima o confronto con la proposta originaria;
7. registra `accepted_custom` soltanto dopo conferma e salvataggio.

Il sistema deve conservare:

- proposta originale;
- testo personalizzato;
- autore locale;
- ruolo;
- timestamp;
- eventuale nota.

### 8.5 Riapri decisione

La riapertura non deve eliminare la decisione precedente.

Effetto:

- aggiunge un evento `reopened`;
- conserva il record precedente;
- riporta l'elemento tra quelli da decidere;
- richiede conferma;
- nel contesto dipartimentale richiede una motivazione breve.

Etichetta raccomandata:

**Riapri la decisione**

Non usare una semplice azione distruttiva “Annulla” che cancelli timestamp e metadati.

## 9. Modello minimo della decisione

La futura implementazione deve estendere o sostituire il tipo corrente con un modello equivalente a:

```text
DecisionRecord
- unitaId: string
- disciplina: string
- ordine: string
- decisionType:
  - accepted_proposal
  - kept_current
  - revision_requested
  - accepted_custom
- scope:
  - lavoro_personale
  - lavoro_dipartimentale
- sourceGapStatus: GapStatus
- sourceProposalText: string
- finalText: string | null
- reason: string | null
- actorName: string | null
- actorRole: Ruolo
- createdAt: ISO timestamp
- updatedAt: ISO timestamp
- persistenceStatus: saved | error
- history: DecisionEvent[]
```

Evento minimo:

```text
DecisionEvent
- eventType: created | updated | reopened
- decisionType: valore o null
- actorName: string | null
- actorRole: Ruolo
- reason: string | null
- timestamp: ISO timestamp
```

### 9.1 Identità locale

In assenza di autenticazione:

- `actorName` deriva dal profilo dichiarato;
- può essere nullo se nome e cognome non sono compilati;
- `actorRole` è sempre obbligatorio;
- la UI deve definire questi dati come **dichiarati localmente**, non verificati.

### 9.2 Integrità

Il record deve mantenere un riferimento stabile alla proposta valutata. La realizzazione può utilizzare:

- copia del testo sorgente;
- versione;
- impronta del contenuto;
- combinazione equivalente.

Una proposta modificata dopo la decisione non deve sembrare la stessa proposta già valutata senza avviso.

## 10. Persistenza minima B03

### 10.1 Principio

Una scelta non può essere mostrata come registrata finché la scrittura locale non è riuscita.

### 10.2 Stati dell'operazione

Ogni azione attraversa:

1. `idle`;
2. `confirming`;
3. `saving`;
4. `saved` oppure `error`.

Durante `saving`:

- i comandi della card sono disabilitati;
- non è possibile una doppia attivazione;
- lo stato è annunciato in modo accessibile.

### 10.3 Tecnologia

Il contratto non impone in questa slice una libreria specifica.

La futura implementazione deve però usare un meccanismo locale reale e verificabile, coerente con l'architettura React, per esempio:

- livello di persistenza già previsto dal progetto;
- IndexedDB tramite dipendenza già disponibile;
- persistenza Zustand controllata;
- soluzione equivalente.

Non è sufficiente il solo stato volatile del componente o dello store.

### 10.4 Confine con B04

B03 richiede soltanto ciò che evita false conferme:

- salvataggio locale della decisione;
- rilettura dopo ricaricamento;
- errore esplicito se il salvataggio fallisce.

B04 resta responsabile di:

- ripresa completa del contesto;
- copia di sicurezza;
- importazione;
- migrazione di versione;
- recupero avanzato;
- trasferimento tra dispositivi.

## 11. Feedback e messaggi

### 11.1 Area live

La superficie deve disporre di un'area `aria-live` collegata alle operazioni.

Messaggi minimi:

- scelta in salvataggio;
- proposta accolta e salvata;
- testo vigente mantenuto e scelta salvata;
- revisione richiesta e salvata;
- testo personalizzato salvato;
- decisione riaperta;
- operazione non autorizzata;
- salvataggio non riuscito;
- dati insufficienti per decidere.

### 11.2 Linguaggio prudente

Esempio corretto:

> Proposta accolta nel lavoro corrente e salvata su questo dispositivo.

Esempio vietato:

> Curricolo approvato.

### 11.3 Errore di salvataggio

In caso di errore:

- la UI non deve mostrare lo stato come registrato;
- il record in memoria non deve diventare la fonte di verità visiva;
- deve essere possibile riprovare;
- il testo inserito non deve essere perso quando tecnicamente recuperabile.

## 12. Filtri, contatori e progressione

### 12.1 Filtri

La revisione deve riutilizzare il modello di B02 per:

- disciplina;
- ordine;
- nucleo;
- azzeramento dei filtri.

Aggiunge il filtro decisionale:

- tutte le proposte pertinenti;
- da decidere;
- proposta accolta;
- vigente mantenuto;
- revisione richiesta;
- testo personalizzato;
- decisione riaperta.

### 12.2 Conservazione del contesto

Il cambio di filtro non deve perdere:

- disciplina;
- ordine;
- nucleo;
- proposta selezionata, quando ancora visibile;
- eventuale testo in modifica non ancora confermato senza un avviso.

### 12.3 Contatori

Il denominatore deve comprendere soltanto le proposte:

- nello stato azionabile;
- pertinenti al ruolo;
- pertinenti all'ordine;
- pertinenti all'ambito decisionale;
- incluse nel perimetro della disciplina.

I contatori devono usare la stessa funzione di dominio delle azioni.

Contatori minimi:

- da decidere;
- proposta accolta;
- vigente mantenuto;
- revisione richiesta;
- personalizzate.

La percentuale di completamento non deve includere stati non azionabili.

## 13. Struttura della superficie

### 13.1 Titolo e navigazione

Etichetta di navigazione raccomandata:

**Confronta e decidi**

Titolo interno:

**Confronta e decidi le proposte**

Descrizione:

> Esamina il testo vigente e la proposta, quindi registra una scelta di lavoro nel contesto selezionato.

“Proponi un aggiornamento” deve essere riservato a una futura superficie di formulazione della proposta oppure rimosso da questa vista.

### 13.2 Stato iniziale

Senza disciplina:

- nessuna proposta viene selezionata;
- compare l'invito a scegliere una disciplina;
- ordine e nucleo restano disabilitati;
- non compaiono contatori fuorvianti.

### 13.3 Card desktop

Desktop `1440 × 1000`:

- contesto e stato in testa;
- confronto a due colonne quando lo spazio lo consente;
- metadati e motivazione chiaramente etichettati;
- azioni separate dal contenuto;
- esito registrato chiaramente distinto dal `GapStatus`.

### 13.4 Card mobile

Mobile `390 × 844`:

- vigente e proposta impilati con intestazioni persistenti;
- nessun confronto orizzontale obbligatorio;
- azioni con etichetta testuale, non sole icone;
- pannelli di conferma interamente visibili;
- nessuna barra fissa che copra il contenuto;
- ritorno all'elenco senza perdita di filtri;
- testo personalizzato modificabile senza scorrimento laterale.

## 14. Accessibilità

Requisiti obbligatori:

- comandi nativi `button` e campi associati a `label`;
- `aria-expanded` e `aria-controls` per dettagli e pannelli;
- stato selezionato non comunicato soltanto dal colore;
- indicatore del punto attivo visibile;
- sequenza di tabulazione coerente;
- focus spostato al pannello di conferma quando si apre;
- focus restituito al comando di origine quando si annulla;
- area live per salvataggio ed errori;
- motivazione dell'impossibilità associata al comando disabilitato o resa immediatamente vicina;
- icone sempre accompagnate da testo o nome accessibile;
- percorso completo eseguibile da tastiera.

## 15. Sicurezza e prevenzione degli errori

### 15.1 Conferme

- accoglimento della proposta: conferma contestuale semplice;
- mantenimento del vigente: conferma con riepilogo dell'effetto;
- richiesta di revisione: nota obbligatoria e conferma;
- testo personalizzato: anteprima e conferma;
- riapertura: conferma esplicita e motivazione nel contesto dipartimentale.

Non utilizzare `window.confirm()` come interfaccia finale React.

### 15.2 Doppia attivazione

Durante la scrittura:

- pulsanti disabilitati;
- un solo comando in corso per unità;
- operazioni duplicate ignorate o rifiutate in modo deterministico.

### 15.3 Cambio di contesto con modifiche non salvate

Se l'utente cambia disciplina, ordine, nucleo o vista durante la personalizzazione:

- deve ricevere un avviso;
- può restare e salvare oppure abbandonare;
- non deve perdere silenziosamente il testo.

## 16. Contratto di test B03

### 16.1 Comando

Aggiungere al progetto React:

```text
npm run test:b03
```

Il controllo deve verificare almeno:

- presenza della politica unica di autorizzazione;
- stati azionabili limitati a `proposta` e `non_validato`;
- contatori basati sulla stessa politica;
- profilo assente in sola lettura;
- consultatore in sola lettura;
- ordine non pertinente in sola lettura;
- etichette prudenti dell'esito;
- tracciabilità minima;
- persistenza non volatile;
- area live collegata;
- nessuna azione B03 nella consultazione B02.

### 16.2 Audit interattivo

L'audit Chromium deve coprire:

#### Desktop

- `1440 × 1000`;
- profilo assente;
- consultatore;
- docente nell'ordine corretto;
- docente nell'ordine non corretto;
- dipartimento;
- proposta;
- non validato;
- validato;
- approvato;
- non applicabile;
- archiviato;
- accoglimento;
- mantenimento vigente;
- richiesta revisione;
- personalizzazione;
- riapertura;
- filtri e contatori;
- ricaricamento;
- errore di salvataggio simulato;
- console.

#### Mobile

- `390 × 844`;
- confronto impilato;
- azioni leggibili;
- pannelli di conferma;
- tastiera;
- focus;
- area live;
- ricaricamento.

### 16.3 Gate numerico

La chiusura non dipende da un numero minimo arbitrario di controlli. Tuttavia ogni riga della matrice ruolo × stato × azione deve avere almeno un'evidenza automatica o interattiva.

Devono risultare:

- 0 controlli obbligatori falliti;
- 0 errori console;
- 0 regressioni in `test:b01`;
- 0 regressioni in `test:b02`;
- build positiva.

## 17. Mappatura degli scarti CML-455

| Scarto | Regola di questo contratto |
|---|---|
| G-B03-01 autorizzazioni | sezioni 4, 5 e 6 |
| G-B03-02 decisioni volatili | sezione 10 |
| G-B03-03 significato ambiguo | sezione 2 |
| G-B03-04 stati incoerenti | sezione 6 |
| G-B03-05 informazioni insufficienti | sezione 7 |
| G-B03-06 differenze non evidenziate | sezione 7.4 |
| G-B03-07 rifiuto senza percorso | sezioni 8.2 e 8.3 |
| G-B03-08 personalizzazione assente | sezione 8.4 |
| G-B03-09 annullamento distruttivo | sezione 8.5 |
| G-B03-10 tracciabilità incompleta | sezione 9 |
| G-B03-11 feedback non collegato | sezione 11 |
| G-B03-12 contesto e filtri | sezioni 4 e 12 |
| G-B03-13 contatori fuorvianti | sezione 12.3 |
| G-B03-14 terminologia | sezione 13.1 |
| G-B03-15 azioni accidentali | sezione 15 |
| G-B03-16 test assente | sezione 16 |

Tutti i 16 scarti risultano coperti da una regola realizzativa o da un gate verificabile.

## 18. Sequenza realizzativa vincolante

### CML-457 — B03 Core Comparison and Authorization Runtime

Deve realizzare soltanto il nucleo strutturale:

- titolo e compito coerenti;
- filtri disciplina, ordine e nucleo;
- contesto decisionale esplicito;
- confronto completo e metadati minimi;
- sintesi delle differenze;
- politica unica ruolo × stato × azione;
- soli stati `proposta` e `non_validato` azionabili;
- contatori coerenti;
- linguaggio prudente;
- B02 invariata.

CML-457 non deve ancora dichiarare completato B03 se la persistenza e le azioni complete non sono presenti.

### CML-458 — B03 Decision, Feedback and Minimal Persistence Runtime

Deve realizzare:

- accogli proposta;
- mantieni vigente;
- richiedi revisione;
- personalizza;
- riapri;
- modello decisionale esteso;
- tracciabilità locale;
- persistenza minima;
- feedback e area live;
- gestione errori;
- prevenzione doppia attivazione;
- `test:b03`.

### CML-459 — B03 Visual Interactive Audit

Deve eseguire l'audit desktop/mobile completo senza modificare il contratto per adattarlo a un'implementazione incompleta.

### CML-460 — B03 Closure

Può chiudere B03 soltanto dopo:

- integrazione di CML-457 e CML-458;
- audit CML-459 positivo;
- build e test B01/B02/B03 positivi;
- 0 errori console;
- nessuno scarto bloccante residuo.

## 19. Criteri di accettazione per CML-457

CML-457 è pronta per audit quando:

- la vista è denominata “Confronta e decidi” in navigazione e titolo;
- nessuna azione appare senza profilo;
- consultatore, referente e dirigenza sono read-only in B03;
- docente e dipartimento agiscono soltanto nell'ordine coerente;
- soltanto `proposta` e `non_validato` sono azionabili;
- i contatori usano lo stesso insieme delle azioni;
- fonte, stato, motivazione e validazione sono consultabili;
- vigente e proposta sono distinguibili su desktop e mobile;
- le differenze dispongono di una sintesi testuale;
- i dati incompleti bloccano la decisione con motivazione;
- B02 resta read-only;
- nessuna modifica viene introdotta nel runtime legacy.

## 20. Criteri di accettazione per CML-458

CML-458 è pronta per audit quando:

- tutte le quattro scelte principali sono disponibili nei casi autorizzati;
- riapertura e storico non cancellano la decisione precedente;
- autore dichiarato, ruolo, ambito e timestamp sono registrati;
- le decisioni sopravvivono al ricaricamento;
- nessuna conferma positiva appare prima del salvataggio riuscito;
- l'errore di scrittura è recuperabile;
- il testo personalizzato conserva la proposta originale;
- la richiesta di revisione richiede una nota;
- il mantenimento del vigente richiede motivazione nel contesto dipartimentale;
- l'area live annuncia esito ed errore;
- la doppia attivazione è impedita;
- `npm run test:b03` è positivo;
- `npm run test:b01`, `npm run test:b02` e build restano positivi.

## 21. Stato della slice

La slice modifica esclusivamente questo documento.

Non sono stati modificati:

- runtime React;
- runtime legacy;
- dati curricolari;
- gap layer;
- store;
- persistenza;
- test;
- workflow;
- dipendenze;
- configurazione di pubblicazione.

## 22. Verdetto

Il contratto realizzativo di B03 è definito. Gli scarti di CML-455 sono tradotti in regole, matrici, modello dati, gate e sequenza di implementazione.

```text
CML_456_B03_COMPARISON_DECISION_REALIZATION_CONTRACT_READY_REMOTE_BRANCH
```

Prossima slice:

```text
CML-457 — B03 Core Comparison and Authorization Runtime
```
