# CML-514D — Pilot crosswalk Tecnologia: Curricolo Milani ↔ CurManLight

## 1. Scopo

Collegare puntualmente i contenuti di Tecnologia del curricolo Milani alle unità normalizzate CurManLight, senza modificare il dataset canonico.

## 2. Baseline CurManLight Tecnologia

Il file canonico Tecnologia contiene 13 unità:

- Infanzia: 2;
- Primaria: 5;
- Secondaria: 6.

Le unità sono organizzate nei nuclei:

1. Osservazione e analisi;
2. Digitale e informatica;
3. Materiali e trasformazioni;
4. Disegno e rappresentazione;
5. Energia e sostenibilità;
6. Cittadinanza tecnologica.

## 3. Contenuti Milani analizzati

### Infanzia

- uso sicuro di forbici, colla, incastri e righelli;
- regole d’uso degli oggetti digitali;
- consapevolezza dell’utilità e dei limiti degli schermi;
- preferenza per gioco attivo e relazione in presenza;
- evidenza: uso corretto di strumenti semplici per produrre un collage.

### Primaria

- progettazione di manufatti grafici o plastici;
- proprietà dei materiali;
- proiezioni piane e sviluppo di solidi;
- ciclo di vita di carta, plastica e vetro;
- economia circolare, riciclo e riuso creativo;
- evidenze su sviluppo del cubo e raccolta differenziata.

### Secondaria

- trasformazione delle risorse in beni;
- conseguenze ambientali ed economiche delle scelte tecnologiche;
- struttura e funzione degli oggetti;
- manufatti e prototipi;
- comunicazione e rete in modo etico;
- proiezioni ortogonali e assonometrie;
- architettura dei sistemi informatici;
- uso consapevole dei servizi online;
- intelligenza artificiale, affidabilità dei dati, etica e bias;
- evidenze su assonometria e diagramma di flusso dell’IA.

## 4. Matrice di collegamento

| Elemento Milani | Ordine | Esito | Unità CurManLight | Campo candidato | Decisione |
|---|---|---|---|---|---|
| uso sicuro di forbici, colla e incastri | Infanzia | EQ | `tec_inf_3_001`, `tec_pri_1_001` | obiettivi/evidenze | già coperto; nessuna modifica |
| uso guidato di oggetti digitali | Infanzia | EQ | `tec_inf_5_001` | obiettivi/conoscenze | già coperto |
| limiti degli schermi e preferenza per gioco attivo | Infanzia | INT | `tec_inf_5_001` | conoscenze, evidenze, note | proposta d’istituto sulla media education precoce |
| collage ordinato con strumenti semplici | Infanzia | EQ + INT | `tec_inf_3_001` | evidenze | concetto coperto; evidenza Milani più concreta |
| proprietà dei materiali | Primaria | EQ | `tec_pri_1_001`, `tec_pri_2_001` | competenza/conoscenze | già coperto |
| ciclo di vita carta, plastica, vetro | Primaria | INT | `tec_pri_2_001`, `tec_pri_4_001` | conoscenze/obiettivi | proposta di estensione sul ciclo di vita |
| riciclo, riuso creativo ed economia circolare | Primaria | INT | `tec_pri_2_001`, `tec_pri_4_001` | traguardo, obiettivi, evidenze | integrazione coerente con Agenda 2030 |
| proiezioni piane di solidi con riga e squadra | Primaria | DEC + GOV | `tec_pri_3_001` | obiettivi/abilità/evidenze | da calibrare per classe; non imporre senza validazione |
| sviluppo bidimensionale del cubo | Primaria | INT | `tec_pri_3_001` | evidenze | buona evidenza osservabile per classe 3–5 |
| raccolta differenziata motivata | Primaria | EQ | `tec_pri_4_001` | abilità/evidenze | già coperto |
| trasformazione delle risorse in beni | Secondaria | EQ | `tec_sec_2_001` | competenza/traguardo | già coperto |
| impatti ambientali ed economici | Secondaria | EQ + INT | `tec_sec_2_002`, `tec_sec_3_002` | competenza/conoscenze | impatto ambientale coperto; dimensione economica da estendere |
| struttura e funzione degli oggetti | Secondaria | EQ | `tec_sec_1_001`, `tec_sec_2_001` | obiettivi/abilità | già coperto |
| manufatti e prototipi | Secondaria | INT | `tec_sec_1_001`, `tec_sec_2_001` | evidenze/criteri | introdurre progetto/prototipo come evidenza trasversale |
| comunicazione e rete etica | Secondaria | EQ | `tec_sec_1_002`, `tec_sec_3_002` | competenza/conoscenze | già coperto |
| proiezioni ortogonali e assonometrie | Secondaria | EQ + INT | `tec_sec_1_001` | conoscenze/abilità/evidenze | copertura presente; evidenza Milani utile |
| architettura di un sistema informatico | Secondaria | EQ | `tec_sec_1_002` | conoscenze | già coperto da hardware/software |
| selezione di programmi e servizi | Secondaria | INT | `tec_sec_1_002` | abilità/criteri | proposta su scelta motivata dello strumento |
| descrizione e uso di sistemi di IA | Secondaria | INT + DEC | `tec_sec_3_001`, `tec_sec_3_002` | nuova unità o estensione coordinata | contenuto non sufficientemente coperto |
| affidabilità dei dati e bias algoritmici | Secondaria | INT + GOV | `tec_sec_3_002` | conoscenze/evidenze/criteri | proposta prioritaria con validazione umana |
| diagramma di flusso di un algoritmo di IA | Secondaria | INT | `tec_sec_3_001` | evidenze | evidenza valida, da riformulare senza antropomorfizzare l’IA |

## 5. Esiti quantitativi

Su 21 elementi Milani individuati:

- 8 risultano sostanzialmente già coperti;
- 10 sono integrazioni compatibili, incluse le righe `EQ + INT` classificate qui per la componente incrementale;
- 3 richiedono decomposizione o decisione di governance;
- 0 richiedono sostituzione diretta delle unità canoniche.

## 6. Proposte candidate

### P1 — Benessere digitale nell’Infanzia

**Destinazione:** `tec_inf_5_001`

**Campo candidato:** conoscenze/evidenze

**Testo candidato:**

> Riconosce che gli strumenti digitali hanno tempi e finalità limitati e alterna l’uso guidato dello schermo con attività manipolative, motorie e relazionali.

**Stato:** proposta d’istituto, non contenuto canonico.

### P2 — Economia circolare nella Primaria

**Destinazioni:** `tec_pri_2_001`, `tec_pri_4_001`

**Campo candidato:** obiettivi/conoscenze/evidenze

**Testo candidato:**

> Descrive il ciclo di vita di materiali e manufatti, distingue riciclo, riuso e recupero e progetta un semplice oggetto applicando criteri di economia circolare.

**Stato:** integrazione coerente con le unità esistenti; richiede decisione dipartimentale sulla classe.

### P3 — Prototipazione nella Secondaria

**Destinazioni:** `tec_sec_1_001`, `tec_sec_2_001`

**Campo candidato:** evidenze/criteri

**Testo candidato:**

> Progetta e realizza un semplice prototipo documentando vincoli, materiali, fasi, verifiche e modifiche apportate.

**Stato:** proposta trasversale da graduare per classe.

### P4 — Intelligenza artificiale consapevole

**Destinazioni:** `tec_sec_3_001`, `tec_sec_3_002`

**Campo candidato:** nuova unità oppure estensione coordinata di digitale e cittadinanza tecnologica.

**Testo candidato:**

> Descrive in termini essenziali il funzionamento di sistemi basati su dati e modelli; valuta qualità e provenienza dei dati, limiti delle risposte, possibili errori e bias; usa tali sistemi in modo responsabile, dichiarandone l’impiego e verificando i risultati.

**Conoscenze candidate:**

- dati di addestramento e dati di input;
- modello e previsione;
- errore, allucinazione e incertezza;
- bias nei dati e negli esiti;
- verifica delle fonti;
- responsabilità dell’utilizzatore;
- tutela dei dati personali e diritto d’autore.

**Evidenze candidate:**

- confronta una risposta generata con due fonti attendibili;
- individua almeno due possibili bias in un dataset o scenario;
- costruisce un diagramma di flusso semplificato input → elaborazione → output → verifica umana;
- documenta quando e come ha utilizzato uno strumento di IA.

**Criteri candidati:**

- correttezza concettuale;
- capacità di verifica;
- riconoscimento di limiti e bias;
- rispetto di privacy e attribuzione;
- qualità dell’argomentazione etica.

**Stato:** proposta prioritaria, obbligo di validazione umana.

## 7. Contenuti da non importare letteralmente

- “spiega con un diagramma di flusso le fasi di un algoritmo di intelligenza artificiale”: formulazione troppo generica; va distinta la procedura software dal modello statistico;
- “utilizza e descrive i sistemi basati su IA”: deve includere verifica, limiti, trasparenza e protezione dei dati;
- “proiezioni piane di semplici solidi” nella Primaria: richiede definizione della classe e compatibilità con le scelte d’istituto;
- ogni etichetta `[APPROVATO 2025]`: non trasferire nello stato canonico senza estremi di delibera verificati.

## 8. Decisione del pilot

Il curricolo Milani non sostituisce alcuna delle 13 unità Tecnologia.

Il pilot identifica quattro proposte candidate:

1. benessere digitale nell’Infanzia;
2. economia circolare nella Primaria;
3. prototipazione nella Secondaria;
4. intelligenza artificiale consapevole nella classe terza Secondaria.

La proposta P4 è la più rilevante perché copre un’area solo parzialmente presente nel dataset canonico.

## 9. Passo successivo

Creare una slice distinta che trasformi **solo P4** in una proposta strutturata compatibile con il flusso Docente → Dipartimento → Referente, senza modificare direttamente `tecnologia.normalized.json`.

## 10. Verdetto

`CML_514D_TECNOLOGIA_MILANI_CROSSWALK_PILOT_READY_FOUR_PROPOSALS_NO_CANONICAL_CHANGE`
