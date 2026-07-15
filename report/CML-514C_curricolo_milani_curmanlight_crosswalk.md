# CML-514C — Crosswalk Curricolo Milani ↔ CurManLight

## 1. Scopo

Confrontare il documento `CURRICOLO_VERTICALE_COMPLETO_MILANI.md` con il modello curricolare canonico di CurManLight senza modificare i 142 record normalizzati esistenti.

Il documento Milani viene trattato come **fonte curricolare d’istituto candidata**, non come sostituzione automatica del dataset canonico.

## 2. Baseline CurManLight

- 14 discipline normalizzate;
- 142 unità curricolari;
- tre ordini: Infanzia, Primaria, Secondaria;
- struttura per unità: `id`, disciplina, ordine, classe/fascia, nucleo, ambito, competenza, traguardo, obiettivi, conoscenze, abilità, evidenze, criteri di valutazione, fonte, stato, validazione umana e note dipartimentali;
- validazione umana obbligatoria;
- dati utilizzati dalla consultazione React e dai flussi di proposta, programmazione ed esportazione.

## 3. Baseline del documento Milani

- 14 discipline;
- 42 macrosezioni disciplinari, generalmente 14 × 3 ordini;
- struttura narrativa per ordine scolastico;
- traguardi, obiettivi, raccordi 2025, note metodologiche ed evidenze;
- assenza sistematica di identificatori stabili, conoscenze separate, abilità separate e criteri di valutazione;
- etichette `[APPROVATO 2025]` prive, nel file, di estremi verificabili di delibera;
- certificazione finale da considerare bozza documentale finché non supportata da verbale, numero e data della deliberazione.

## 4. Classi di esito

| Codice | Significato | Azione |
|---|---|---|
| EQ | contenuto già equivalente nel modello CurManLight | nessuna modifica canonica |
| INT | integrazione d’istituto compatibile | trasformare in proposta strutturata |
| DEC | contenuto da decomporre in più unità | progettazione disciplinare necessaria |
| GOV | questione di governance o applicabilità | deliberazione/validazione obbligatoria |
| NA | non applicabile come disciplina nell’ordine indicato | mantenere come attività trasversale o rimuovere |
| ED | problema editoriale o documentale | revisione del testo e delle fonti |

## 5. Crosswalk disciplinare

| Disciplina | Copertura | Esito prevalente | Elementi Milani di valore | Criticità | Azione raccomandata |
|---|---:|---|---|---|---|
| Italiano | 3 ordini | EQ + INT + DEC | corsivo, lettura integrale, grammatica, interpretazione critica | obblighi quantitativi e metodologici troppo assertivi | mappare come proposte per nuclei lettura, scrittura e riflessione linguistica |
| Matematica | 3 ordini | EQ + INT | coding, educazione finanziaria, probabilità e rischio | educazione assicurativa da validare come integrazione trasversale | creare proposte separate per pensiero algoritmico e competenza economico-finanziaria |
| Scienze | 3 ordini | EQ + INT | biodiversità, ecosistemi, clima, transizione energetica | macro-obiettivi troppo aggregati | decomporre per classe e nucleo scientifico |
| Tecnologia | 3 ordini | EQ + INT + DEC | economia circolare, benessere digitale, IA consapevole | IA descritta senza progressione per classe; evidenze troppo sintetiche | crosswalk prioritario con unità su materiali, disegno, digitale, energia e IA |
| Storia | 3 ordini | EQ + INT | fonti, memoria locale, disinformazione storica | contenuti di classe Secondaria aggregati in percorsi molto ampi | collegare ai nuclei temporali già presenti e proporre integrazioni sulle fonti digitali |
| Geografia | 3 ordini | EQ + INT | digital mapping, geopolitica delle risorse, clima | formulazioni avanzate da calibrare per età | trasformare in proposte per orientamento, paesaggio, dati e geopolitica |
| Inglese | 3 ordini | EQ + INT + GOV | fonetica, A1/A2, CLIL | CLIL e livelli devono essere coerenti con ordine, classe e quadro QCER | validazione dipartimentale e decomposizione per abilità linguistiche |
| Seconda lingua comunitaria | 3 ordini nel file | GOV + NA | sensibilità fonetica e interculturale | CurManLight la considera Secondaria-only e lingua non ancora specificata | non importare Infanzia/Primaria come disciplina; richiedere scelta formale della lingua |
| Arte e immagine | 3 ordini | EQ + INT | patrimonio, restauro, mostre digitali | obiettivi avanzati non graduati | decomporre per produzione, lettura dell’opera e patrimonio |
| Musica | 3 ordini | EQ + INT | ecologia acustica, pratica corale, produzione digitale | numero ridotto di evidenze e assenza di criteri | integrare come proposte per ascolto, esecuzione e produzione |
| Educazione fisica | 3 ordini | EQ + INT | postura, salute, fair play, prevenzione dipendenze | salute mentale e dipendenze richiedono raccordo interdisciplinare | proposta congiunta Educazione fisica–Scienze–Educazione civica |
| Educazione civica | 3 ordini | EQ + INT + GOV | Costituzione, Agenda 2030, cittadinanza digitale | deve restare trasversale e coerente con DM 183/2024 | mappare per nuclei Costituzione, sostenibilità e cittadinanza digitale |
| Religione / attività alternative | 3 ordini | GOV + ED | dialogo interreligioso, etica ambientale | IRC e attività alternative sono fuse impropriamente | separare IRC e Attività alternative prima di qualsiasi importazione |
| Latino / LEL | 3 ordini nel file | GOV + NA + INT | etimologia, confronto linguistico, rigore sintattico | CurManLight limita LEL a Secondaria classi 2–3; Infanzia/Primaria non applicabili come disciplina | conservare i contenuti precoci come arricchimento linguistico, non come disciplina autonoma |

## 6. Corrispondenza strutturale dei campi

| Campo Milani | Campo CurManLight | Trasformazione |
|---|---|---|
| disciplina | `disciplina` | diretta dopo normalizzazione del nome |
| ordine scolastico | `ordine` | diretta, salvo casi non applicabili |
| traguardi | `traguardo` / `competenza` | separazione semantica richiesta |
| obiettivi annuali | `obiettivi[]` | suddivisione per classe/fascia |
| raccordo 2025 | proposta, `stato`, `fonte`, `noteDipartimento` | non trasformare automaticamente in contenuto approvato |
| note metodologiche | `noteDipartimento` o documento metodologico | non usare come conoscenza/abilità |
| evidenze comportamentali | `evidenze[]` | diretta, previa revisione osservabilità e livello |
| conoscenze | `conoscenze[]` | da ricavare esplicitamente; spesso assenti |
| abilità | `abilita[]` | da ricavare esplicitamente; spesso assenti |
| criteri di valutazione | `criteriValutazione[]` | da costruire; generalmente assenti |
| stato approvato | `stato` + governance | richiede prova documentale e validazione umana |
| fonte normativa | `fonte` | citazione puntuale per unità, non generica |

## 7. Blocchi prima di ogni importazione

1. Verificare gli estremi normativi citati e distinguere fonti nazionali da scelte d’istituto.
2. Acquisire numero, data e verbale della delibera collegata alle etichette di approvazione.
3. Separare contenuti canonici, integrazioni, proposte e note metodologiche.
4. Correggere refusi e formulazioni non professionali.
5. Separare IRC e attività alternative.
6. Limitare Seconda lingua comunitaria e Latino/LEL agli ordini effettivamente applicabili.
7. Decomporre ogni macrosezione in unità con classe/fascia, nucleo, conoscenze, abilità e criteri.
8. Far passare tutte le integrazioni attraverso il flusso umano Docente → Dipartimento → Referente.

## 8. Piano di trasformazione sicuro

### Fase A — Registro della fonte

Registrare il file Milani come fonte istituzionale candidata con metadati:

- istituto;
- codice meccanografico;
- anno scolastico;
- versione del documento;
- stato documentale;
- estremi di approvazione, se verificati;
- autore/responsabile;
- data di acquisizione.

### Fase B — Estrazione controllata

Per ogni disciplina e ordine:

1. estrarre traguardi, obiettivi, raccordi ed evidenze;
2. assegnare una classe di esito EQ/INT/DEC/GOV/NA/ED;
3. collegare ogni elemento a una o più unità CurManLight;
4. non produrre ancora modifiche canoniche.

### Fase C — Proposte strutturate

Solo gli elementi INT e DEC validi diventano proposte con:

- unità di destinazione;
- campo interessato;
- testo vigente;
- testo proposto;
- motivazione;
- fonte;
- note;
- validazione umana obbligatoria.

### Fase D — Validazione

Le proposte devono essere:

1. riesaminate dal docente;
2. discusse dal dipartimento;
3. validate dal Referente;
4. rese canoniche solo dopo deliberazione formalmente documentata.

## 9. Priorità operative

| Priorità | Ambito | Motivo |
|---:|---|---|
| 1 | Tecnologia | disciplina pilota, forte corrispondenza con i dati e presenza di integrazioni su IA/economia circolare |
| 2 | Italiano | numerosi raccordi significativi e facilmente decomponibili |
| 3 | Educazione civica | alto valore trasversale ma forte requisito di governance |
| 4 | Matematica e Scienze | integrazioni chiare su coding, finanza, clima ed energia |
| 5 | Seconda lingua, Latino, Religione/alternative | richiedono prima decisioni di applicabilità e separazione del perimetro |

## 10. Decisione

Il curricolo Milani è classificato come:

- **copertura disciplinare completa**;
- **compatibilità pedagogica alta**;
- **compatibilità strutturale bassa**;
- **valore istituzionale alto**;
- **non idoneo alla sostituzione diretta del dataset canonico**;
- **idoneo a generare proposte strutturate dopo revisione documentale e umana**.

## 11. Verdetto

`CML_514C_MILANI_CURMANLIGHT_CROSSWALK_READY_NO_CANONICAL_DATA_CHANGED`
