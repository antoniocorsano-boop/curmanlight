# CML-CURR-AUDIT-01 — Pilot semantico fonti e livelli: Arte e Immagine

## Scopo

Verificare il file `content/curriculum/arte-immagine.normalized.json` senza modificarne i dati, correlando:

- copertura per ordine e livello;
- provenienza dichiarata;
- coerenza verticale;
- distinzione fra contenuto ufficiale, ricostruzione, adattamento locale e proposta;
- classificazione dei gap candidati.

## Inventario

Il file contiene 6 unità:

- Infanzia fascia 5: 1;
- Primaria classe 1: 1;
- Primaria classe 3: 1;
- Secondaria classi 1, 2 e 3: 3.

Tutte le unità hanno una stringa `fonte`, stato `nuovo` e `validazioneUmana: true`.

## Provenienza generale

Il metadato `source` dichiara esplicitamente che il corpus è stato:

- ricostruito dal runtime DATA;
- derivato da 3 traguardi e 1 obiettivo disponibili;
- integrato tramite nuclei presenti in `DISCIPLINE_META`;
- completato con proposte IN 2025;
- prodotto a partire da dati sorgente limitati.

Questa dichiarazione è trasparente, ma conferma che il file non rappresenta una trascrizione documentale completa di una fonte ufficiale. Il contenuto combina almeno quattro livelli diversi di provenienza:

1. elementi riconducibili alle Indicazioni 2012;
2. ricostruzione strutturale interna;
3. adattamenti territoriali e d’istituto;
4. proposte attribuite al quadro 2025.

Il singolo campo `fonte` non permette di attribuire ciascun traguardo, obiettivo, conoscenza, abilità, evidenza o criterio a uno di questi livelli.

## Classificazione dei gap

### Infanzia 3–4

**Stato: `DA_VERIFICARE`.**

È presente soltanto la fascia 5. Poiché nell’Infanzia i contenuti sono organizzati per campi di esperienza, l’assenza di una unità separata 3–4 non può essere classificata automaticamente come lacuna disciplinare. Il file non dichiara però che la fascia 5 rappresenti una progressione aggregata 3–5.

### Primaria classe 2

**Stato: `DA_VERIFICARE`, con forte indizio di `APPLICABILE_OBBLIGATORIO`.**

Non esiste una unità per la classe 2 e nessuna nota dichiara che la classe 1 copra anche la classe 2. La progressione passa direttamente dai primi elementi del linguaggio visivo alla lettura di opere e beni culturali.

### Primaria classi 4 e 5

**Stato: `APPLICABILE_AGGREGATO`.**

L’unità `art_pri_3_001` è formalmente associata alla classe 3, ma:

- la fonte dichiara `Primaria classi 3-4-5`;
- la nota dipartimentale dichiara `Primaria classi 3-5`.

Le classi 4 e 5 non sono quindi assenti sul piano sostanziale, ma sono aggregate in una singola unità. Rimane una criticità di modellazione: il campo `classe: "3"` non rappresenta l’intero intervallo 3–5 e può produrre falsi gap o filtri incompleti nel runtime.

## Rilievi

### P1 — provenienza ricostruita e non granulare

Il corpus deriva da fonti interne limitate e da ricostruzione conservativa. Non è disponibile una mappa campo-per-campo fra testo e documento sorgente.

### P1 — classe 2 Primaria non coperta né aggregata

La classe 2 non compare e non è inclusa esplicitamente in un intervallo pluriclasse.

### P1 — aggregazione 3–5 non rappresentata dal contratto

`art_pri_3_001` dichiara `classe: "3"`, mentre fonte e nota la estendono alle classi 3–5. Il contratto dati non dispone di un campo esplicito per intervallo, progressione o applicabilità pluriclasse.

### P1 — riferimenti al D.M. 221/2025 privi di localizzazione

Figure femminili nell’arte, STEM-arte, cittadinanza e arte contemporanea sono attribuite al D.M. 221/2025 senza allegato, sezione, pagina o citazione puntuale. Devono rimanere contenuti da verificare, non formulazioni certificate.

### P2 — adattamenti territoriali mescolati alla fonte normativa

Ceramica arianese e patrimonio irpino sono adattamenti territoriali plausibili e utili, ma non sono separati formalmente dalle fonti nazionali.

### P2 — strumenti digitali e IA generativa

Grafica vettoriale, fotoritocco, animazione e IA generativa sono presentati insieme a contenuti attribuiti alle Indicazioni. La loro natura deve essere classificata come integrazione didattica o proposta, salvo riscontro puntuale in fonte ufficiale.

### P2 — ampiezza eccessiva della classe 2 Secondaria

L’unità `art_sec_2_001` copre arte dal Medioevo al Novecento, artiste, patrimonio locale e strumenti multimediali in un unico blocco. La formulazione appare più vicina a una sintesi pluriennale che a una unità annuale circoscritta.

## Coerenza verticale

La progressione generale è leggibile:

- esplorazione di materiali nell’Infanzia;
- produzione e linguaggio visivo nella Primaria iniziale;
- osservazione e patrimonio nella Primaria 3–5;
- produzione, storia dell’arte e interdisciplinarità nella Secondaria.

La progressione è però compressa: sei unità rappresentano l’intero percorso 3–14 anni. La completezza strutturale dei livelli non deve essere confusa con la completezza curricolare annuale.

## Decisione di audit

- Infanzia 3–4: `DA_VERIFICARE`;
- Primaria 2: `DA_VERIFICARE`, probabile gap obbligatorio;
- Primaria 4: `APPLICABILE_AGGREGATO` in `art_pri_3_001`;
- Primaria 5: `APPLICABILE_AGGREGATO` in `art_pri_3_001`;
- nessuna correzione automatica dei dati;
- necessaria futura revisione del contratto per rappresentare intervalli di classe e provenienza granulare.

## Verdetto

`CML_CURR_AUDIT_01_ARTE_IMMAGINE_PILOT_COMPLETE_PRIMARY_4_5_AGGREGATED_CLASS_2_UNRESOLVED_PROVENANCE_LIMITED`
