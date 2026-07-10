# CML-450 — B02 Consultation and Understanding Behavior Gap Audit

> Data: 2026-07-10  
> Base: `main` dopo chiusura B01  
> Tipo: audit documentale e comportamentale  
> Percorso: `B02 — Consultare e comprendere il curricolo`

## 1. Obiettivo

Verificare se il candidato React consente a un docente di:

- scegliere disciplina e ordine di scuola senza selezioni implicite;
- capire quale curricolo sta consultando;
- distinguere contenuti vigenti, in revisione e futuri;
- riconoscere fonti, stato e validazione dei contenuti;
- trovare rapidamente un nucleo, un traguardo, un obiettivo o un’unità pertinente;
- consultare senza entrare involontariamente nel processo decisionale.

Il confronto usa:

1. mappa comportamentale CML-445;
2. capacità e dati già disponibili nel candidato React;
3. esperienza e contenuti del runtime legacy;
4. evidenze visive prodotte nel ciclo B01.

## 2. Contratto comportamentale B02

### BEH-CON-01 — Scegliere una disciplina senza selezioni implicite

La vista deve partire senza privilegiare una disciplina e consentire una scelta chiara di disciplina e ordine di scuola. Tutte le discipline canoniche devono essere raggiungibili e la scelta deve restare visibile.

### BEH-CON-02 — Comprendere stato e riferimento del curricolo

L’utente deve poter riconoscere:

- disciplina;
- ordine di scuola;
- versione o riferimento temporale;
- stato del contenuto;
- fonte;
- necessità di validazione umana.

La consultazione non deve confondere il curricolo vigente con proposte o contenuti in revisione.

### BEH-CON-03 — Trovare rapidamente il contenuto pertinente

L’utente deve poter restringere l’elenco per ordine di scuola e nucleo, comprendere quanti risultati restano, azzerare i filtri e aprire soltanto il dettaglio necessario.

## 3. Evidenze del candidato React

### 3.1 Selezione della disciplina

`ConsultazioneView.tsx`:

- parte senza disciplina selezionata;
- espone tutte le 14 discipline canoniche;
- aggiorna lo stato tramite `setDisciplina`;
- mantiene la selezione durante la sessione grazie allo store applicativo.

Questo soddisfa la regola di non privilegiare Tecnologia o altre discipline.

### 3.2 Ordine di scuola

L’ordine non è selezionabile direttamente nella vista Consultazione.

Il filtro deriva esclusivamente da `profilo?.ordine`, impostato nella vista Impostazioni. Ne consegue che:

- l’utente non vede immediatamente quale ordine è attivo;
- per cambiarlo deve uscire dalla consultazione;
- la relazione tra impostazione generale e filtro corrente non è evidente;
- lo stato `Tutti` può produrre un elenco molto lungo senza spiegazione.

### 3.3 Caricamento dei dati

`useCurriculum` carica i file JSON sincronizzati per disciplina. Il modello dati contiene:

- ordine;
- classe e fascia;
- ambito;
- competenza;
- traguardo;
- obiettivi;
- conoscenze;
- abilità;
- evidenze;
- criteri di valutazione;
- fonte;
- stato;
- validazione umana;
- note di dipartimento;
- nucleo.

La maggior parte di queste informazioni non è però esposta nella consultazione corrente.

### 3.4 Fusione con il livello di revisione

`useFilteredUnita` applica `mergeGapLayer` prima di mostrare le unità. `UnitaCard` visualizza inoltre:

- indicatore del gap;
- azioni di decisione quando una proposta richiede scelta o possiede già una decisione.

La vista denominata Consultazione può quindi mostrare contenuti modificati dal livello di revisione e persino azioni di approvazione/rifiuto.

Questo mescola B02 — consultare e comprendere con B03 — confrontare e decidere.

### 3.5 Informazioni mostrate nelle card

Ogni card mostra:

- ordine e fascia;
- traguardo;
- nucleo;
- ambito;
- eventuale indicatore di gap;
- eventuali azioni decisionali.

Non mostra in modo ordinario:

- competenza;
- obiettivi;
- conoscenze e abilità;
- evidenze e criteri di valutazione;
- fonte;
- stato;
- validazione umana;
- note di dipartimento.

Il pulsante di espansione esiste nel componente, ma la vista non passa `onExpand`; il dettaglio non è quindi raggiungibile.

### 3.6 Filtri e ricerca

La funzione `useFilteredUnita` supporta il filtro per nucleo, ma la vista non espone alcun selettore del nucleo.

Non sono presenti:

- filtro per nucleo;
- ricerca testuale;
- azzeramento filtri;
- riepilogo dei filtri attivi;
- filtro diretto per ordine;
- raggruppamento per ordine o nucleo.

L’unico dato quantitativo è il numero complessivo delle unità dopo il filtro implicito dell’ordine.

### 3.7 Stati vuoti ed errori

Prima della scelta della disciplina la vista lascia una grande area vuota senza un invito operativo esplicito.

Se il file non è disponibile, appare il messaggio generico “Dati non disponibili per questa disciplina”.

Non sono distinti:

- caricamento in corso;
- file inesistente;
- file non valido;
- nessun risultato dovuto ai filtri;
- disciplina disponibile ma priva di unità per l’ordine selezionato.

## 4. Matrice comparativa

| Requisito B02 | Candidato React | Esito |
|---|---|---|
| Nessuna disciplina privilegiata | Stato iniziale vuoto | Conforme |
| Tutte le discipline canoniche raggiungibili | 14 discipline nel selettore | Conforme |
| Disciplina selezionata riconoscibile | Selettore visibile | Conforme |
| Ordine di scuola visibile nella consultazione | Deriva da Impostazioni, non mostrato | Scarto bloccante |
| Cambio rapido dell’ordine | Richiede passaggio a Impostazioni | Scarto alto |
| Stato del curricolo riconoscibile | Non mostrato | Scarto bloccante |
| Fonte riconoscibile | Presente nei dati, non mostrata | Scarto bloccante |
| Versione/riferimento temporale | Non mostrato | Scarto bloccante |
| Validazione umana riconoscibile | Presente nei dati, non mostrata | Scarto alto |
| Filtro per nucleo | Supportato internamente, non esposto | Scarto bloccante |
| Ricerca o percorso breve | Assente | Scarto alto |
| Dettaglio dell’unità | Dati presenti, espansione non collegata | Scarto bloccante |
| Consultazione separata dalle decisioni | Azioni decisionali possibili nelle card | Scarto bloccante |
| Stato vuoto orientativo | Debole o assente | Scarto medio |
| Stato filtri sempre visibile | Assente | Scarto alto |
| Densità informativa controllabile | Elenco piatto, nessuna espansione | Scarto alto |

## 5. Scarti classificati

### G-B02-01 — Consultazione e revisione mescolate

**Severità:** bloccante.

La consultazione applica il livello di revisione e può mostrare azioni decisionali. L’utente non dispone di una vista chiaramente separata del curricolo di riferimento.

**Correzione richiesta:** la consultazione deve essere read-only e mostrare il contenuto di riferimento. Gli indicatori di proposta possono essere segnalati in modo informativo, ma confronto e decisione devono restare nella vista Revisione.

### G-B02-02 — Stato, fonte e riferimento assenti

**Severità:** bloccante.

I dati contengono `fonte`, `stato` e `validazioneUmana`, ma la UI non li presenta. L’utente non può stabilire il valore istituzionale del contenuto.

**Correzione richiesta:** introdurre un riepilogo contestuale della disciplina e rendere fonte e stato disponibili nel dettaglio di ciascuna unità.

### G-B02-03 — Ordine di scuola implicito

**Severità:** bloccante.

L’ordine deriva dal profilo e non è visibile nella vista. Questo può far interpretare un elenco parziale come curricolo completo.

**Correzione richiesta:** mostrare e consentire di cambiare l’ordine direttamente nella consultazione, mantenendo coerenza con le Impostazioni.

### G-B02-04 — Filtro per nucleo non disponibile

**Severità:** bloccante.

La capacità esiste nella funzione di filtro ma non nella UI.

**Correzione richiesta:** selettore dei nuclei derivato dai dati della disciplina, combinabile con l’ordine e sempre azzerabile.

### G-B02-05 — Dettaglio curricolare irraggiungibile

**Severità:** bloccante.

Obiettivi, conoscenze, abilità, evidenze, criteri, fonte e stato sono caricati ma non consultabili.

**Correzione richiesta:** espansione accessibile della card o pannello di dettaglio, con una sola unità aperta alla volta su mobile quando necessario.

### G-B02-06 — Elenco piatto e denso

**Severità:** alta.

Con ordine `Tutti`, l’utente riceve un elenco esteso di unità senza raggruppamento o filtri sufficienti.

**Correzione richiesta:** riepilogo dei risultati, filtri visibili e raggruppamento coerente per ordine/nucleo oppure ordinamento esplicito.

### G-B02-07 — Stati vuoti insufficienti

**Severità:** media.

L’utente non riceve indicazioni chiare prima della selezione o quando una combinazione non produce risultati.

**Correzione richiesta:** distinguere invito iniziale, caricamento, errore dati e nessun risultato da filtri.

### G-B02-08 — Terminologia non uniforme

**Severità:** media.

L’intestazione usa “Consulta il curricolo”, mentre il titolo interno usa “Consultazione”.

**Correzione richiesta:** usare la stessa formulazione orientata al compito in intestazione e contenuto.

## 6. Decisioni di prodotto necessarie

Prima della realizzazione B02 devono essere consolidate queste decisioni:

1. **Consultazione read-only:** nessuna azione approva/rifiuta nella vista.
2. **Curricolo di riferimento:** definire se la vista mostra sempre il vigente oppure consente un selettore esplicito tra vigente e proposta; la scelta predefinita deve essere il vigente.
3. **Ordine locale:** selettore direttamente nella vista, sincronizzato con il contesto ma modificabile senza passare dalle Impostazioni.
4. **Nucleo:** filtro obbligatorio e derivato dai dati disponibili.
5. **Dettaglio:** card sintetica espandibile con tutte le informazioni utili e metadati.
6. **Fonti:** fonte e stato devono essere leggibili senza gergo tecnico.
7. **Ricerca testuale:** utile ma non obbligatoria nella prima implementazione se ordine+nucleo consentono già un percorso breve.

## 7. Contratto proposto per CML-451

La successiva slice di specifica deve definire:

- intestazione e riepilogo della disciplina;
- selettori disciplina, ordine e nucleo;
- comportamento di azzeramento filtri;
- separazione netta tra consultazione e revisione;
- struttura sintetica ed espansa della card;
- presentazione di stato, fonte e validazione;
- stati iniziale, caricamento, errore e nessun risultato;
- comportamento desktop e mobile;
- test automatici e audit Playwright.

## 8. Gate di chiusura B02

B02 potrà essere chiuso soltanto quando:

- nessuna disciplina è preimpostata implicitamente;
- disciplina, ordine e nucleo sono selezionabili e visibili;
- il curricolo di riferimento è inequivocabile;
- fonte, stato e validazione sono consultabili;
- il dettaglio completo delle unità è raggiungibile;
- la consultazione non contiene azioni decisionali;
- filtri e risultati sono coerenti e reversibili;
- stati vuoti ed errori indicano una possibilità di recupero;
- il percorso funziona a 390 px e su desktop;
- non vengono introdotte regressioni nel flusso Revisione.

## 9. Verdetto

Il candidato React dispone dei dati e delle funzioni di base, ma **non soddisfa ancora B02 — Consultare e comprendere il curricolo**.

Gli scarti bloccanti sono:

- consultazione mescolata alla revisione;
- ordine implicito;
- assenza di stato, fonte e riferimento;
- filtro per nucleo non esposto;
- dettaglio curricolare irraggiungibile.

```text
CML_450_B02_CONSULTATION_UNDERSTANDING_GAP_AUDIT_READY_REMOTE_BRANCH
```
