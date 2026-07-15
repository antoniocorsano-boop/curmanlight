# CurManLight ↔ Curricolo verticale I.C. Calvario-Covotta “don Lorenzo Milani”

## 1. Scopo

Confrontare il documento `CURRICOLO_VERTICALE_COMPLETO_MILANI.md` con il patrimonio curricolare normalizzato di CurManLight senza modificare i 142 record canonici.

Il documento Milani viene trattato come **fonte curricolare d’istituto candidata**, non come sostituzione automatica dei dati correnti.

## 2. Baseline CurManLight

- 14 discipline normalizzate su 14;
- 142 unità curricolari;
- contratto per unità: ordine, classe/fascia, nucleo, ambito, competenza, traguardo, obiettivi, conoscenze, abilità, evidenze, criteri di valutazione, fonte, stato, validazione umana e note dipartimentali;
- contenuti soggetti a validazione umana;
- Seconda Lingua Comunitaria e Latino/LEL presenti come bozze limitate alla Secondaria.

## 3. Baseline documento Milani

Il documento copre le stesse 14 discipline e, per ciascuna, presenta tre macrosezioni: Infanzia, Primaria e Secondaria.

Ogni macrosezione contiene in genere:

- traguardi d’istituto;
- obiettivi annuali;
- raccordi e adeguamenti 2025;
- stato d’adozione dichiarato;
- note metodologiche;
- evidenze comportamentali.

Il documento è quindi una sintesi deliberativa verticale, non una base dati granulare pronta per l’importazione.

## 4. Scala di classificazione

| Codice | Significato | Azione |
|---|---|---|
| A | già coperto o semanticamente equivalente | nessuna modifica canonica |
| B | integrazione d’istituto plausibile | trasformare in proposta e validare |
| C | contenuto da approfondire o scomporre | crosswalk puntuale con unità CurManLight |
| D | conflitto di applicabilità o modello | non importare automaticamente |
| E | criticità formale/documentale | correggere prima di ogni adozione |

## 5. Crosswalk disciplinare

| Disciplina | Corrispondenza generale | Integrazioni Milani di maggiore valore | Criticità principali | Classificazione |
|---|---|---|---|---|
| Italiano | alta | corsivo, riassunto, lettura integrale, graphic novel, grammatica normativa | quantità minime e obbligatorietà da deliberare; distinguere indicazione nazionale e scelta d’istituto | A/B/E |
| Matematica | alta | educazione finanziaria, coding, statistica applicata al rischio | educazione assicurativa e previdenziale richiedono fonte e progressione per classe | A/B/C |
| Scienze | alta | biodiversità, risparmio idrico, transizione energetica | obiettivi Secondaria molto aggregati rispetto alle unità per classe | A/B/C |
| Tecnologia | alta | economia circolare, benessere digitale, IA consapevole ed etica | “algoritmo di IA” come evidenza è concettualmente impreciso; servono criteri e progressione per classe | A/B/C |
| Storia | alta | patrimonio locale, uso critico delle fonti, disinformazione storica | nessun conflitto rilevante; integrare per classe e nucleo | A/B |
| Geografia | alta | geolocalizzazione, geopolitica delle risorse, clima | scomporre per classi e distinguere strumenti da obiettivi | A/B/C |
| Inglese | alta | fonetica precoce, A1 Primaria, A2 Secondaria, CLIL | “CLIL in altre materie” richiede condizioni organizzative; correggere refusi | A/B/E |
| Seconda Lingua Comunitaria | media | sensibilità fonetica e plurilinguismo | CurManLight la modella Secondaria-only; Infanzia e Primaria possono essere trasversali ma non disciplina autonoma; il testo sceglie Francese mentre il dato CML resta neutro | B/D/E |
| Arte e Immagine | alta | patrimonio locale, restauro e mostre digitali | “restauro digitale” va definito come documentazione/simulazione, non intervento conservativo | A/B/C |
| Musica | alta | ecologia acustica, pratica corale, produzione digitale | obiettivi strumentali specifici possono dipendere dalle risorse d’istituto | A/B |
| Educazione Fisica | alta | postura, salute, fair play, prevenzione dipendenze | contenuti sanitari e di prevenzione richiedono raccordo interdisciplinare e formulazioni prudenti | A/B/C |
| Educazione Civica | alta | Agenda 2030, cittadinanza digitale, fact-checking | disciplina trasversale: evitare duplicazioni con Scienze, Tecnologia, Storia e Geografia | A/B/C |
| Religione / Attività Alternative | parziale | dialogo interreligioso, ecologia integrale, valori comuni | il documento fonde IRC e attività alternative; CurManLight ha Religione Cattolica come disciplina distinta | B/D/E |
| Latino / LEL | bassa-media | etimologia, confronto linguistico, rigore sintattico | CurManLight limita LEL a Secondaria classi 2-3; il documento estende la disciplina a Infanzia/Primaria e propone un latino più classico del modello esplorativo corrente | B/C/D/E |

## 6. Crosswalk strutturale dei campi

| Documento Milani | Campo CurManLight | Esito |
|---|---|---|
| disciplina | `disciplina` | diretto |
| ordine scolastico | `ordine` | diretto, salvo applicabilità anomala |
| traguardi | `traguardo` / `competenza` | richiede separazione semantica |
| obiettivi annuali | `obiettivi` | diretto dopo scomposizione per classe |
| raccordo/adeguamento | `ambito`, `competenza`, `traguardo` oppure proposta gap | richiede decisione editoriale |
| note metodologiche | `noteDipartimento` o documento guida | non sempre contenuto curricolare |
| evidenze comportamentali | `evidenze` | diretto, dopo verifica misurabilità |
| stato `[APPROVATO 2025]` | `stato` | non trasferibile senza estremi di delibera |
| fonte normativa generica | `fonte` | insufficiente: associare fonte puntuale per unità |
| criteri di valutazione | `criteriValutazione` | generalmente mancanti nel documento Milani |
| conoscenze | `conoscenze` | da ricostruire |
| abilità | `abilita` | da ricostruire |
| classe/fascia | `classe` / `fascia` | spesso assente o aggregata |
| validazione | `validazioneUmana` | dichiarata in chiusura ma non tracciata per contenuto |

## 7. Contenuti candidati prioritari

Questi elementi possono essere trasformati in proposte d’istituto con buon rapporto valore/rischio:

1. Italiano: lettura integrale, riassunto, alfabetizzazione critica e graphic novel.
2. Matematica: educazione finanziaria e uso consapevole di percentuali/dati.
3. Scienze e Tecnologia: transizione energetica, economia circolare e valutazione critica dell’IA.
4. Storia e Geografia: fonti digitali, disinformazione e geopolitica delle risorse.
5. Arte e Musica: patrimonio locale, paesaggi sonori e produzione digitale.
6. Educazione Civica: fact-checking e cittadinanza digitale, evitando duplicazioni.

## 8. Contenuti da bloccare dall’importazione automatica

- qualsiasi elemento marcato `[APPROVATO 2025]` senza numero/data della delibera;
- Seconda Lingua Comunitaria come disciplina in Infanzia e Primaria;
- Latino/LEL come disciplina autonoma in Infanzia e Primaria;
- fusione “Religione / Attività Alternative”;
- firma finale e dichiarazione di approvazione prive di estremi verificabili;
- obblighi quantitativi o organizzativi non sostenuti da delibera e fonte puntuale;
- contenuti sanitari, assicurativi o previdenziali presentati come prescrizioni senza verifica.

## 9. Criticità editoriali da correggere

Il documento contiene refusi e incongruenze lessicali, tra cui esempi come `accompagner`, `Riconose`, `simples`, `Acquidisce`, `Legere`, `sciuri`, oltre a formulazioni non uniformi tra curricolo nazionale, raccordo, obbligo, proposta e scelta d’istituto.

Serve una revisione editoriale completa prima dell’uso ufficiale.

## 10. Processo di integrazione raccomandato

1. Registrare il Markdown come fonte istituzionale candidata, con versione e hash.
2. Estrarre ogni raccordo 2025 come elemento autonomo.
3. Collegarlo alle unità CurManLight per disciplina, ordine, classe e nucleo.
4. Assegnare una delle classi A-E.
5. Per B/C, generare una proposta docente o dipartimentale, non una modifica diretta.
6. Richiedere verifica normativa e validazione del dipartimento.
7. Registrare estremi della delibera prima di impostare uno stato approvato.
8. Integrare soltanto gli elementi con tracciabilità completa.

## 11. Decisione architetturale

Il curricolo CurManLight resta la **base canonica operativa**.

Il documento Milani assume il ruolo di **fonte d’istituto candidata e livello di confronto**, utile per produrre proposte, note metodologiche e integrazioni deliberate.

Non è autorizzata alcuna sostituzione, importazione massiva o modifica dei dati curricolari in questa slice.

## 12. Verdetto

`MILANI_CURRICULUM_CROSSWALK_COMPLETE_SOURCE_CANDIDATE_NOT_CANONICAL_REPLACEMENT`
