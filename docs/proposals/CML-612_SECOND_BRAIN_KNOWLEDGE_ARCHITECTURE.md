# CML-612 — Second Brain Knowledge Architecture

## Stato

**Proposta di architettura della conoscenza pronta per esecuzione controllata.**

Il Second Brain viene riprogettato come base di conoscenza istituzionale e professionale di CurManLight, utile contemporaneamente a:

1. persone che devono comprendere, confrontare e utilizzare le fonti;
2. sistemi di intelligenza artificiale che devono recuperare contenuti affidabili e contestualizzati;
3. CurManLight, che deve trasformare la conoscenza in supporto concreto alla progettazione, alla revisione e alla decisione.

Non è un archivio di file. È un sistema locale, versionato e tracciabile che collega fonti, unità di conoscenza, decisioni e processi scolastici.

---

## 1. Obiettivi di prodotto

Il sistema deve consentire di rispondere in modo verificabile a queste domande:

- che cosa stabilisce una fonte;
- quale autorità possiede;
- a quale periodo e ordine di scuola si applica;
- quali obblighi, facoltà o indirizzi contiene;
- quali documenti interni richiede di aggiornare;
- come incide su curricolo, progettazione, valutazione, orientamento e formazione;
- quali contenuti sono normativi, istituzionali, formativi, interpretativi o generati con IA;
- quali passaggi richiedono validazione umana.

## 2. Principi non negoziabili

- funzionamento completamente locale;
- nessun invio di dati all'esterno;
- ogni sintesi rinvia alla fonte originale;
- ogni contenuto dichiara provenienza e livello di autorità;
- le fonti superate restano consultabili e versionate;
- le interpretazioni non sono presentate come norme;
- i contenuti prodotti con IA sono riconoscibili;
- la validazione umana rimane obbligatoria;
- la conoscenza è riutilizzabile in tutte le aree del prodotto;
- l'architettura e la navigazione congelate non vengono modificate senza un gate esplicito.

---

## 3. Livelli della conoscenza

### 3.1 Fonti originali integrali

#### Normativa nazionale e atti ministeriali

- Costituzione e norme generali richiamate;
- DPR 275/1999;
- D.M. 254/2012 e Indicazioni nazionali 2012;
- D.M. 221/2025 e Indicazioni nazionali 2025;
- disposizioni su valutazione, certificazione, orientamento, educazione civica, STEM e autonomia;
- note ministeriali e atti applicativi.

#### Atti istituzionali della scuola

- Atto di indirizzo del dirigente scolastico;
- PTOF vigente e versioni precedenti;
- Rapporto di autovalutazione;
- Piano di miglioramento;
- curricolo di istituto;
- piano annuale delle attività;
- piano di formazione;
- protocollo di valutazione;
- regolamenti, protocolli, delibere e rendicontazione sociale.

L'Atto di indirizzo è una fonte ufficiale interna e costituisce la cerniera tra quadro nazionale, priorità della scuola, PTOF e curricolo.

#### Fonti formative

- materiali di corsi e seminari;
- slide e contributi di esperti;
- guide operative;
- materiali Dirscuola;
- documentazione di formazione professionale.

#### Analisi derivate

- sintesi e comparazioni;
- schede di lettura;
- note professionali;
- contenuti prodotti con supporto IA;
- interpretazioni da validare.

### 3.2 Unità di conoscenza

Ogni documento può essere segmentato in unità autonome:

- disposizione;
- decorrenza;
- definizione;
- principio pedagogico;
- obbligo;
- facoltà;
- indirizzo istituzionale;
- procedura;
- metodologia;
- criterio valutativo;
- proposta didattica;
- criticità;
- relazione tra fonti;
- domanda aperta.

Ogni unità conserva il collegamento puntuale alla fonte e non sostituisce il documento originale.

### 3.3 Rete delle relazioni

Relazioni previste:

- deriva da;
- sostituisce;
- integra;
- modifica;
- applica;
- interpreta;
- contrasta con;
- richiede aggiornamento di;
- si applica a;
- è richiamato da;
- è valido nel periodo;
- supporta la decisione;
- è da verificare rispetto a.

### 3.4 Sintesi professionali

Per ogni tema sono previsti quattro livelli di lettura:

1. **rapida** — che cosa cambia, chi è coinvolto, da quando;
2. **professionale** — quadro normativo, pedagogico e organizzativo;
3. **comparativa** — situazione precedente, nuova situazione, invarianti e discontinuità;
4. **operativa** — attività, competenze degli organi, documenti, evidenze e controlli.

### 3.5 Azioni assistite

Il sistema può trasformare la conoscenza in supporto operativo:

- collegare una fonte a una progettazione;
- estrarre requisiti e vincoli;
- proporre una lista di controllo;
- segnalare documenti interni da aggiornare;
- verificare coerenza tra Atto di indirizzo, PTOF, curricolo e progettazioni;
- distinguere prescrizioni, facoltà e suggerimenti;
- evidenziare fonti superate o non validate;
- richiedere conferma umana prima di consolidare una decisione.

---

## 4. Contratto comune dei contenuti

Campi minimi:

```text
id
titolo
tipoContenuto
tipoFonte
livelloAutorita
autore
ente
dataDocumento
annoScolastico
periodoValidita
statoValidita
statoValidazione
ambito
destinatari
ordineScuola
discipline
temi
testoOriginale
sintesi
implicazioni
azioniRichieste
riferimentiNormativi
documentiCollegati
relazioni
versione
provenienza
dataImportazione
dataUltimaVerifica
```

### Livelli di autorità

1. normativa nazionale;
2. atto amministrativo ministeriale;
3. atto istituzionale della scuola;
4. documento collegiale interno;
5. fonte formativa qualificata;
6. analisi professionale;
7. contenuto derivato con IA;
8. nota personale.

### Stati di validità

- vigente;
- vigente in transizione;
- sostituito;
- abrogato;
- archiviato;
- da verificare.

### Stati di validazione

- verificato sulla fonte primaria;
- validato professionalmente;
- da validare;
- contestato;
- incompleto.

---

## 5. Atto di indirizzo come nodo istituzionale

L'Atto di indirizzo viene scomposto in indirizzi verificabili, ciascuno collegato a:

- priorità strategica;
- PTOF;
- RAV e Piano di miglioramento;
- curricolo di istituto;
- piano di formazione;
- dipartimenti e gruppi di lavoro;
- indicatori di attuazione;
- evidenze disponibili;
- stato di recepimento.

Esempio:

```text
Indirizzo: rafforzare la continuità verticale del curricolo.
Fonte: Atto di indirizzo 2026/2027.
Impatto: curricolo, classi ponte, dipartimenti, formazione.
Stato: da recepire nel PTOF.
Indicatori: nuclei verticali, raccordi tra segmenti, monitoraggio degli esiti.
```

---

## 6. Esperienza per le persone

La vista di prodotto deve superare l'elenco di file e offrire cinque funzioni:

### Esplora

Ricerca per tema, fonte, ordine di scuola, disciplina, anno scolastico, autorità, validità, documento interno e azione richiesta.

### Percorsi

Percorsi guidati, tra cui:

- aggiornare il curricolo;
- confrontare Indicazioni 2012 e 2025;
- predisporre il piano di formazione;
- rivedere la valutazione;
- integrare la didattica orientativa;
- verificare coerenza tra Atto di indirizzo e PTOF.

### Confronta

Confronti strutturati tra versioni, fonti, norme, atti interni e documenti di attuazione.

### Usa nel lavoro

Collegamento diretto a progettazione, curricolo, documenti, valutazione e orientamento.

### Verifica

Segnalazione di fonti non validate, documenti superati, collegamenti mancanti, conflitti e contenuti derivati senza fonte primaria.

---

## 7. Esperienza per l'intelligenza artificiale

Ordine di priorità nel recupero:

1. fonte ufficiale vigente;
2. atto istituzionale vigente della scuola;
3. documento collegiale approvato;
4. materiale formativo qualificato;
5. analisi professionale;
6. contenuto derivato con IA;
7. nota personale.

Ogni risposta assistita deve poter dichiarare:

- fonte utilizzata;
- livello di autorità;
- periodo di validità;
- eventuale interpretazione;
- conflitti rilevati;
- affidabilità;
- necessità di validazione umana.

Il contesto fornito all'IA deve essere strutturato e limitato ai contenuti pertinenti, non composto da documenti interi indiscriminati.

---

## 8. Integrazione con CurManLight

### Progettazione

- suggerimento contestuale di fonti, traguardi, obiettivi e conoscenze;
- collegamento alle priorità dell'Atto di indirizzo;
- supporto alla dimensione orientativa e valutativa.

### Curricolo

- confronto tra versioni;
- disallineamenti e transizioni;
- continuità verticale;
- distinzione tra prescrizioni e suggerimenti;
- provenienza di ogni elemento.

### Documenti

- verifica della validità delle fonti;
- collegamenti tra PTOF, RAV, Piano di miglioramento e curricolo;
- individuazione dei documenti da aggiornare.

### Valutazione

- distinzione tra valutazione formativa e sommativa;
- osservazione, documentazione, feedback e metacognizione;
- coerenza tra obiettivi, evidenze e criteri.

### Orientamento

- talenti, attitudini, consapevolezza e scelte;
- dimensione orientativa delle discipline;
- continuità dell'orientamento nel curricolo.

### Knowledge Companion

- suggerimenti contestuali basati su fonti gerarchizzate;
- citazioni e provenienza visibili;
- nessuna formulazione prescrittiva quando la fonte non lo consente.

---

## 9. Tassonomia iniziale

### Normativa e governance

Autonomia, Indicazioni nazionali, Atto di indirizzo, PTOF, RAV, Piano di miglioramento, organi collegiali, valutazione, certificazione, orientamento.

### Curricolo

Curricolo verticale, campi di esperienza, discipline, competenze, obiettivi, conoscenze, nuclei fondanti, continuità, classi ponte, transizione 2012–2025.

### Didattica

Progettazione, inclusione, valutazione formativa, laboratorio, metodologie, osservazione, documentazione, feedback, tecnologie e intelligenza artificiale.

### Sviluppo professionale

Formazione docenti, comunità professionale, dipartimenti, ricerca-azione, monitoraggio, riflessività e innovazione.

---

## 10. Confini della prima esecuzione

CML-612A deve produrre soltanto:

- modello della conoscenza;
- tassonomie;
- gerarchia delle fonti;
- relazioni;
- versionamento e stati;
- regole di recupero per IA;
- piano di migrazione dei materiali esistenti;
- specifica di integrazione con le funzioni attuali.

Non deve ancora:

- importare massivamente i PDF;
- modificare l'architettura generale dell'applicazione;
- sostituire la navigazione consolidata;
- introdurre servizi esterni;
- modificare dati curricolari canonici;
- pubblicare o integrare automaticamente su `main`.

---

## 11. Criteri di chiusura CML-612A

- contratto dei contenuti approvato;
- livelli di autorità e stati validati;
- schema delle relazioni verificato con casi reali;
- Atto di indirizzo modellato come fonte interna operativa;
- regole IA documentate;
- piano di migrazione dei materiali IN2025 definito;
- compatibilità con architettura e navigazione congelate;
- nessuna regressione runtime;
- decisione esplicita per l'avvio di CML-612B.
