# CML-CURR-AUDIT-01 — Pilot semantico delle fonti: Italiano

## 1. Scopo

Verificare la disciplina Italiano come caso strutturalmente completo, distinguendo:

- copertura per ordine e livello;
- progressione verticale dei nuclei;
- fonte normativa formalmente dichiarata;
- provenienza effettiva dei contenuti;
- adattamento d’istituto e integrazione didattica;
- applicabilità temporale delle Indicazioni 2012 e 2025.

Il controllo è documentale. Non modifica né approva i dati curricolari.

## 2. Corpus

Sorgente: `content/curriculum/italiano.normalized.json`.

- 14 unità curricolari;
- Infanzia: fasce 3–4 e 5 anni;
- Primaria: classi 1–5;
- Secondaria di primo grado: classi 1–3;
- nuclei rappresentati: ascolto, parlato, lettura, scrittura, lessico e riflessione sulla lingua;
- tutte le unità hanno `validazioneUmana: true` e `stato: nuovo`.

## 3. Esito sintetico

| Dimensione | Esito |
|---|---|
| Copertura dei livelli | completa sul piano strutturale |
| Presenza della fonte | 14/14 |
| Atto principale identificabile | sì, D.M. 254/2012 |
| Citazione puntuale | assente |
| Separazione testo ufficiale/adattamento | assente |
| Applicabilità temporale IN 2012/IN 2025 | non dichiarata per unità |
| Provenienza del corpus | critica: il metadato generale dichiara adattamento dal benchmark strutturale di Tecnologia |
| Certificazione semantica | non raggiunta |

## 4. Rilievo P1 — Provenienza generale non adeguata

Il campo `source` del documento dichiara:

> `CML-087 normalized Italian curriculum draft — adapted from Tecnologia structural benchmark`

L’uso di Tecnologia come benchmark può essere legittimo per lo schema dati, ma non costituisce una fonte disciplinare per Italiano. Il metadato non distingue:

- struttura tecnica riutilizzata;
- contenuti derivati dalle Indicazioni nazionali;
- formulazioni redazionali create per CurManLight;
- decisioni curricolari dell’istituto.

La copertura 14/14 non può quindi essere interpretata come validazione della provenienza disciplinare.

**Classificazione:** P1 — tracciabilità sostanziale insufficiente.

## 5. Indicazioni 2012

Le unità citano in modo generalmente riconoscibile:

- Indicazioni Nazionali 2012;
- D.M. 254/2012;
- campo di esperienza `I discorsi e le parole` per l’Infanzia;
- sezioni disciplinari Ascolto, Parlato, Lettura, Scrittura, Lessico e Riflessione sulla lingua.

La citazione resta però descrittiva. Non sono presenti:

- pagina, paragrafo o traguardo ufficiale;
- identificativo del testo sorgente;
- distinzione tra citazione, parafrasi e adattamento;
- collegamento specifico tra fonte e singolo campo della unità.

**Classificazione:** P1 — fonte identificabile ma non puntualmente tracciata.

## 6. Affermazioni attribuite al D.M. 221/2025

Diverse unità associano al D.M. 221/2025 formulazioni molto specifiche, fra cui:

- valorizzazione del corsivo fin dall’Infanzia;
- lettura integrale di almeno tre libri all’anno;
- lettura integrale obbligatoria;
- centralità del riassunto e della riscrittura;
- ritorno alla centralità della norma grammaticale;
- centralità della regola grammaticale.

Queste formulazioni non sono accompagnate da articolo, allegato, pagina o passaggio ufficiale. Non è quindi possibile stabilire dal repository se siano:

1. prescrizioni testuali dell’atto;
2. sintesi interpretative;
3. adattamenti del curricolo d’istituto;
4. scelte didattiche locali.

Inoltre le unità non dichiarano anno scolastico e quadro applicabile, nonostante la transizione IN 2012/IN 2025 disciplinata da CML-477.

**Classificazione:** P1 — verifica normativa puntuale e applicabilità temporale richieste.

## 7. Progressione verticale

La sequenza dei nuclei è leggibile:

- Infanzia: ascolto, parlato e primo avvicinamento alla lingua scritta;
- Primaria: ascolto, parlato, lettura, scrittura, lessico e grammatica;
- Secondaria: ascolto argomentato, lettura interpretativa, scrittura, lessico e sintassi.

Tuttavia la presenza di almeno una unità per classe non dimostra da sola la copertura completa del curricolo di Italiano. La distribuzione assegna spesso un nucleo prevalente a una singola classe, mentre l’insegnamento reale richiede normalmente compresenza e ricorsività di più nuclei nello stesso anno.

Esempi:

- Primaria 1 rappresentata principalmente da Ascolto;
- Primaria 2 da Parlato;
- Primaria 3 da Lettura;
- Primaria 5 da Riflessione sulla lingua;
- Secondaria 3 da grammatica e sintassi.

Questa struttura può essere una mappa sintetica di progressione, ma non deve essere presentata come programma annuale completo senza una decisione curricolare esplicita.

**Classificazione:** P2 — copertura verticale formalmente completa ma granularità annuale da chiarire.

## 8. Evidenze e criteri

Evidenze e criteri di valutazione sono concreti e utilizzabili, ma appaiono redatti come adattamento didattico locale. Il modello non indica se derivino da:

- documento normativo;
- curricolo deliberato;
- rubrica di istituto;
- proposta redazionale CurManLight.

Alcune soglie quantitative — minuti di ascolto, numero di righe, numero di libri, quantità di esercizi — richiedono una fonte o l’etichetta esplicita `adattamento_didattico`.

**Classificazione:** P2 — natura didattica non dichiarata.

## 9. Governance degli stati

Il documento presenta:

- `stato: bozza_generabile`;
- `readiness: in_revisione`;
- unità con `stato: nuovo`;
- `validazioneUmana: true`.

La combinazione non prova approvazione o applicabilità. Deve essere definita una relazione esplicita tra validazione tecnica, validazione disciplinare, approvazione collegiale e applicabilità temporale.

## 10. Azioni necessarie

1. Sostituire il metadato di provenienza basato sul benchmark Tecnologia con una genealogia documentale esplicita.
2. Collegare ogni formulazione 2012/2025 a un riferimento puntuale o classificarla come parafrasi.
3. Verificare nel testo ufficiale le affermazioni su corsivo, tre libri annui, riassunto e grammatica.
4. Dichiarare per ogni unità il quadro applicabile e l’anno scolastico oppure mantenere `DA_VERIFICARE`.
5. Distinguere testo ufficiale, adattamento d’istituto e integrazione didattica.
6. Chiarire che la copertura per classe rappresenta una progressione sintetica e non necessariamente l’intero programma annuale.
7. Sottoporre il corpus a validazione di docenti di Italiano prima di qualsiasi correzione dei dati.

## 11. Verdetto

Italiano è **strutturalmente completo per livelli**, ma non ancora semanticamente certificabile. La criticità principale è la genealogia del corpus: il riuso del benchmark di Tecnologia è accettabile come modello tecnico, non come provenienza disciplinare. Le integrazioni attribuite al D.M. 221/2025 richiedono verifica puntuale e applicabilità temporale.

`CML_CURR_AUDIT_01_ITALIANO_STRUCTURAL_COMPLETE_PROVENANCE_AND_2025_TRACEABILITY_REQUIRED`
