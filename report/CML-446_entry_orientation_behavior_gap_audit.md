# CML-446 — Entry and Orientation Behavior Gap Audit

> Data: 2026-07-10  
> Base: `main` a `eb5ce584`  
> Tipo: audit documentale, nessuna modifica al runtime  
> Percorso: `B01 — Entrare e orientarsi`

## 1. Obiettivo

Verificare se il candidato React consente a un docente non tecnico di:

- comprendere immediatamente la finalità di CurManLight;
- distinguere le attività principali;
- scegliere correttamente da dove iniziare;
- raggiungere una destinazione realmente utilizzabile;
- sapere dove si trova;
- tornare indietro senza perdere il contesto.

Il confronto usa quattro riferimenti:

1. modello comportamentale CML-444;
2. mappa di chiusura CML-445;
3. mock Home approvato CML-440;
4. candidato React presente in `curman-react/`.

L’applicazione pubblicata resta il riferimento di continuità per contenuti e capacità, ma il mock CML-440 costituisce il riferimento approvato per la Home semplificata.

## 2. Contratto comportamentale B01

### BEH-ORI-01 — Comprendere da dove iniziare

Il docente deve riconoscere una necessità concreta e scegliere una sola azione principale pertinente, senza dover interpretare categorie interne del prodotto.

### BEH-ORI-02 — Sapere dove ci si trova

Durante la navigazione devono restare riconoscibili:

- area corrente;
- attività corrente;
- contesto istituzionale o personale, quando configurato;
- possibilità di tornare al punto precedente;
- stato delle selezioni già effettuate.

## 3. Evidenze del mock approvato

Il mock CML-440 stabilisce:

- domanda iniziale: **“Cosa vuoi fare oggi?”**;
- quattro attività esplicite:
  - Consulta il curricolo;
  - Prepara una progettazione;
  - Proponi un aggiornamento;
  - Esporta un documento;
- descrizione breve dell’esito di ciascuna attività;
- accesso esplicito alle Impostazioni;
- navigazione principale visibile;
- contesto istituzionale nell’intestazione;
- assenza di card di stato, percorsi ridondanti e test guidato in Home.

Il mock non presenta categorie generiche come scelta primaria: presenta compiti formulati nel linguaggio dell’utente.

## 4. Evidenze del candidato React

### 4.1 Home

`HomeView.tsx` presenta:

- titolo “Revisione curricolare”;
- descrizione generale;
- due sole scelte:
  - “Curriculum”;
  - “Didattica”.

Le scelte sono categorie di prodotto, non compiti completi dell’utente.

La card “Curriculum” conduce direttamente a `consultazione`, pur descrivendo anche revisione e approvazione. La destinazione non corrisponde quindi all’intero significato dichiarato.

La card “Didattica” conduce a `evidenze-valutazione`.

### 4.2 Destinazioni

Nel candidato React:

- `consultazione`, `revisione`, `processo` ed `esportazioni` hanno viste dedicate;
- `evidenze-valutazione`, `programmazione-annuale`, `uda-modello` e `guida` sono ancora segnaposto;
- il segnaposto comunica che la sezione sarà disponibile in iterazioni successive.

La Home permette quindi di scegliere “Didattica”, ma conduce a una destinazione non utilizzabile. Questo viola la regola CML-445 secondo cui nessuna azione di ingresso deve portare a una vista vuota o incompleta.

### 4.3 Intestazione

L’intestazione React mostra:

- icona di apertura/chiusura della barra laterale;
- nome “CurManLight”;
- etichetta “Revisione curricolare”;
- nome e istituto soltanto se il profilo è già disponibile.

Non mostra:

- stato del contesto di lavoro;
- accesso diretto alle impostazioni o alla configurazione;
- percorso corrente;
- distinzione esplicita tra consultazione, proposta e progettazione.

### 4.4 Navigazione laterale

La barra laterale presenta tutte le viste, comprese quelle ancora segnaposto.

Sono visibili:

- Home;
- Consultazione;
- Revisione;
- Processo;
- Esportazioni;
- Evidenze e Valutazione;
- Programmazione Annuale;
- UDA Modello;
- Guida.

Non è presente una voce Impostazioni, benché il mock approvato indichi la configurazione del contesto come passaggio esplicito.

La navigazione evidenzia la vista attiva, ma non fornisce un percorso gerarchico né un ritorno contestuale diverso dalla selezione manuale di un’altra voce.

## 5. Matrice comparativa

| Requisito B01 | Mock approvato | Candidato React | Esito |
|---|---|---|---|
| Finalità immediatamente comprensibile | Sì, domanda orientata all’azione | Parziale, titolo centrato sulla revisione | Scarto medio |
| Compiti principali distinti | Quattro attività concrete | Due categorie generiche | Scarto bloccante |
| Consultazione riconoscibile | Sì | Sì, ma inglobata in “Curriculum” | Scarto medio |
| Progettazione riconoscibile | Sì | Solo categoria “Didattica” | Scarto alto |
| Proposta di aggiornamento riconoscibile | Sì | Non presente in Home | Scarto bloccante |
| Esportazione riconoscibile | Sì | Non presente in Home | Scarto bloccante |
| Configurazione del contesto | Accesso esplicito | Assente dalla Home e dalla navigazione | Scarto bloccante |
| Destinazioni complete | Attese come azioni reali | “Didattica” porta a segnaposto | Scarto bloccante |
| Area corrente riconoscibile | Navigazione attiva | Evidenziazione laterale | Conforme parziale |
| Contesto istituzionale | Sempre visibile nel mock | Visibile solo con profilo valorizzato | Scarto medio |
| Uso mobile | Navigazione da adattare | Barra laterale richiudibile | Da verificare |
| Ritorno senza perdita di contesto | Richiesto | Non dimostrato; stato non persistente | Scarto bloccante collegato a PER-03 |

## 6. Scarti classificati

### G-B01-01 — Azioni troppo generiche

**Severità:** bloccante.

“Curriculum” e “Didattica” non consentono al docente di distinguere immediatamente consultazione, proposta, progettazione ed esportazione.

**Correzione richiesta:** Home orientata a compiti, con azioni coerenti con il mock approvato.

### G-B01-02 — Collegamento a destinazione incompleta

**Severità:** bloccante.

La scelta “Didattica” apre una vista segnaposto.

**Correzione richiesta:** non esporre come azione primaria una destinazione non completabile. L’azione può essere attivata soltanto quando esiste almeno un percorso didattico reale e chiudibile.

### G-B01-03 — Proposta ed esportazione non accessibili dalla Home

**Severità:** bloccante rispetto al mock.

Due delle quattro attività approvate non sono presenti.

**Correzione richiesta:** introdurre azioni dirette verso revisione ed esportazioni, con descrizioni basate sull’esito.

### G-B01-04 — Configurazione del contesto non raggiungibile

**Severità:** bloccante.

Il mock stabilisce che anno scolastico, ruolo, curricolo e disciplina siano gestiti da Impostazioni. Il candidato React non espone Impostazioni nella Home o nella navigazione e non include una `ViewId` dedicata.

**Correzione richiesta:** decisione esplicita sul comportamento di configurazione e destinazione reale prima dell’implementazione della Home.

### G-B01-05 — Intestazione non rappresenta il contesto corrente

**Severità:** media.

L’intestazione mostra un’etichetta fissa “Revisione curricolare”, anche quando l’utente si trova in consultazione, didattica o esportazioni.

**Correzione richiesta:** il titolo o il percorso devono riflettere l’attività corrente.

### G-B01-06 — Viste incomplete esposte nella navigazione

**Severità:** alta.

La barra laterale permette di aprire segnaposto, generando una falsa disponibilità funzionale.

**Correzione richiesta:** le viste non completate devono essere inibite o escluse dalla navigazione operativa.

### G-B01-07 — Persistenza dell’orientamento non dimostrata

**Severità:** bloccante per la chiusura B01.

La struttura definisce `ultimaVista` e `ultimaDisciplina`, ma la parità CML-443 registra la persistenza come assente. Non vi è evidenza che chiusura e riapertura conservino il contesto.

**Correzione richiesta:** la prima realizzazione B01 deve evitare dipendenze non necessarie dalla persistenza completa, ma deve almeno conservare l’orientamento durante la sessione. La persistenza tra sessioni resta collegata al ciclo B04.

## 7. Decisioni di prodotto necessarie

Prima della realizzazione occorre fissare quattro decisioni:

1. **Home a quattro azioni:** confermare il mock CML-440 come contratto della Home React.
2. **Progettazione non ancora completa:** decidere se l’azione resta nascosta/disabilitata fino al completamento del primo percorso didattico oppure se viene realizzata contestualmente.
3. **Impostazioni:** definire una destinazione reale per configurare contesto e ruolo.
4. **Navigazione:** non mostrare viste segnaposto come funzioni disponibili.

Le decisioni 1, 3 e 4 derivano già dal mock e dalle regole di conformità. La decisione 2 richiede una scelta di sequenza: non è corretto esporre una funzione incompleta.

## 8. Contratto proposto per CML-447

La successiva slice realizzativa deve limitarsi a B01 e produrre:

- Home React con quattro azioni orientate al compito;
- collegamenti reali per Consultazione, Revisione ed Esportazioni;
- comportamento prudente per Progettazione finché il percorso non è completo;
- accesso reale alla configurazione del contesto;
- navigazione senza segnaposto esposti come disponibili;
- intestazione coerente con l’area corrente;
- comportamento mobile della Home e del menu;
- test automatici delle destinazioni;
- nessuna modifica al runtime pubblicato.

## 9. Gate di chiusura B01

B01 può essere chiuso soltanto quando:

- le azioni della Home sono formulate come compiti dell’utente;
- ogni azione attiva conduce a una destinazione utilizzabile;
- proposta ed esportazione sono raggiungibili;
- il contesto di lavoro è configurabile o il relativo accesso è chiaramente disponibile;
- le viste non completate non sono presentate come operative;
- l’area corrente è riconoscibile;
- il menu funziona su desktop e mobile;
- navigazione e ritorno non perdono lo stato della sessione;
- nessun elemento noto del vecchio prodotto viene duplicato senza necessità.

## 10. Verdetto

Il candidato React **non soddisfa ancora B01 — Entrare e orientarsi**.

Gli scarti bloccanti sono:

- azioni Home non allineate al mock;
- destinazione Didattica incompleta;
- assenza di Proposta, Esportazione e Impostazioni come ingressi espliciti;
- esposizione di viste segnaposto;
- orientamento contestuale e conservazione dello stato non sufficientemente dimostrati.

```text
CML_446_ENTRY_ORIENTATION_BEHAVIOR_GAP_AUDIT_READY_REMOTE_BRANCH
```
