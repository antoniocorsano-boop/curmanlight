# CML-CURR-AUDIT-01 — Pilot semantico fonti e progressione: Matematica

## 1. Perimetro

File esaminato: `content/curriculum/matematica.normalized.json`.

Il controllo riguarda:

- completezza per ordine e livello;
- qualità e granularità delle fonti;
- coerenza verticale dei nuclei;
- compatibilità fra contenuti, classe dichiarata e ordine scolastico;
- distinzione fra formulazione normativa, adattamento d’istituto e integrazione didattica.

Nessun dato curricolare è stato modificato.

## 2. Quadro strutturale

Il file contiene 13 unità:

- Infanzia: fascia 5 anni;
- Primaria: classi 1 e 5;
- Secondaria di I grado: classe 1.

Gap candidati già rilevati:

1. Infanzia fascia 3–4;
2. Primaria classe 2;
3. Primaria classe 3;
4. Primaria classe 4.

La presenza di più unità nella classe 1 primaria e nella classe 1 secondaria non compensa automaticamente l’assenza delle classi intermedie.

## 3. Fonti

Tutte le unità hanno una fonte formalmente presente. Il riferimento principale è:

- Indicazioni Nazionali 2012;
- D.M. 254/2012;
- sezioni disciplinari o campi di esperienza.

Alcune unità associano inoltre il D.M. 221/2025 a:

- informatica come ambito della Matematica;
- educazione finanziaria;
- pensiero computazionale.

Le citazioni non riportano pagina, paragrafo, allegato o formulazione esatta. Il campo `fonte` non permette di stabilire quale parte di competenza, traguardo, obiettivi, conoscenze, abilità, evidenze e criteri provenga da ciascun atto.

## 4. Provenienza generale

Il metadato generale dichiara:

`adapted from Word doc + DATA traguardi/obiettivi + Tecnologia/Italiano structural benchmark`.

Questa dichiarazione consente di ricostruire il processo tecnico, ma non identifica:

- il documento Word sorgente;
- la versione e la data dei dati utilizzati;
- il campo importato da ciascuna sorgente;
- le parti generate o adattate attraverso benchmark di altre discipline.

**Rilievo P1 — Provenienza documentale insufficiente.**

La fonte generale deve essere sostituita, in una futura slice correttiva, da riferimenti versionati e collegabili ai singoli campi. Il riuso di benchmark strutturali non deve essere interpretato come validazione disciplinare.

## 5. Coerenza verticale e gap candidati

### 5.1 Infanzia fascia 3–4

L’assenza resta `DA_VERIFICARE`.

Matematica nell’Infanzia è ricondotta al campo di esperienza “La conoscenza del mondo”; non è quindi dimostrato che debba esistere un record disciplinare autonomo per la fascia 3–4. È però necessario verificare che i contenuti logico-matematici della fascia siano rappresentati altrove e non semplicemente assenti.

### 5.2 Primaria classi 2, 3 e 4

Le assenze risultano più critiche:

- la classe 1 contiene nuclei distinti su numeri, spazio e figure, relazioni e informatica;
- la classe 5 aggrega numeri decimali, geometria, algoritmi, strumenti digitali ed educazione finanziaria;
- non esiste un metadato che dichiari una progressione pluriclasse 1–5;
- non esiste un collegamento che dimostri che le unità di classe 1 o 5 siano applicabili anche alle classi 2–4.

Classificazione corrente:

| Gap | Esito corrente |
|---|---|
| Primaria 2 | `DA_VERIFICARE` con forte indizio di `APPLICABILE_OBBLIGATORIO` |
| Primaria 3 | `DA_VERIFICARE` con forte indizio di `APPLICABILE_OBBLIGATORIO` |
| Primaria 4 | `DA_VERIFICARE` con forte indizio di `APPLICABILE_OBBLIGATORIO` |

La conferma richiede una decisione esplicita sulla granularità del curricolo d’istituto: annuale, per bienni o per traguardi terminali.

## 6. Anomalia contenutistica nella Secondaria classe 1

Nell’unità `mat_sec_1_001`, dichiarata per la Secondaria classe 1, le conoscenze includono:

- numeri naturali entro il 20 e progressivamente entro il 100;
- conteggio progressivo e regressivo;
- addizione e sottrazione;
- valore posizionale delle cifre.

Questi contenuti non risultano coerenti con gli obiettivi e il traguardo della stessa unità, che riguardano quattro operazioni, numeri decimali, multipli, divisori e frazioni.

**Rilievo P1 — Possibile contaminazione di livello scolastico.**

È probabile una delle seguenti condizioni:

1. copia residua da un’unità della Primaria;
2. adattamento incompleto da una sorgente precedente;
3. uso improprio di conoscenze prerequisito come contenuti curricolari della classe.

La discrepanza deve essere verificata manualmente prima di qualunque uso progettuale o correzione.

## 7. Granularità e copertura dei nuclei

La classe 1 primaria presenta quattro unità, mentre le classi 2–4 non ne presentano nessuna. La classe 5 presenta una sola unità molto aggregata.

Questo modello produce due rischi:

- **sovracopertura apparente:** molti nuclei in una classe fanno sembrare completa l’intera Primaria;
- **sottorappresentazione della progressione:** non è documentato come aumentino complessità, estensione numerica, strategie di calcolo, geometria, misura, dati e problem solving nelle classi intermedie.

**Rilievo P1 — Progressione annuale non dimostrata.**

La copertura per nuclei deve essere distinta dalla copertura per classe.

## 8. Informatica ed educazione finanziaria

Le unità `mat_pri_1_004` e `mat_pri_5_001` collegano informatica ed educazione finanziaria al D.M. 221/2025.

La presenza del riferimento non dimostra:

- che il contenuto sia applicabile alla classe indicata nell’anno scolastico considerato;
- che la formulazione sia letterale;
- che l’integrazione appartenga alla Matematica anziché a Educazione Civica o Tecnologia;
- che attività, evidenze e criteri siano prescritti dalla fonte.

**Rilievo P1 — Applicabilità temporale e collocazione disciplinare non tracciate.**

## 9. Evidenze e criteri

Le evidenze includono soglie operative e prestazioni specifiche, per esempio:

- conteggio di 20 oggetti;
- dieci operazioni;
- cinque numeri decimali;
- costruzione di grafici e uso di fogli di calcolo.

Sono elementi utili alla progettazione didattica, ma non risultano qualificati come:

- testo ufficiale;
- adattamento d’istituto;
- esempio operativo;
- criterio deliberato.

**Rilievo P2 — Natura didattica non dichiarata.**

## 10. Stato e validazione

Il file generale dichiara:

- `stato: bozza_generabile`;
- `readiness: in_revisione`;
- `humanValidationRequired: true`.

Le singole unità dichiarano:

- `stato: nuovo`;
- `validazioneUmana: true`.

La combinazione non certifica approvazione o applicabilità. La presenza dell’anomalia di livello nella Secondaria conferma che `validazioneUmana: true` non può essere interpretato come validazione già conclusa.

## 11. Esito del pilot

Matematica è formalmente leggibile e ricca di contenuti, ma non può essere considerata curricolo verticale completo.

Risultati:

- 0 P0;
- 4 gap candidati;
- 3 gap della Primaria con forte indizio di obbligatorietà;
- 1 P1 di contaminazione fra livelli in `mat_sec_1_001`;
- 1 P1 di provenienza documentale insufficiente;
- 1 P1 di progressione annuale non dimostrata;
- 1 P1 su applicabilità temporale e collocazione di informatica/educazione finanziaria;
- 1 P2 sulla natura non dichiarata di evidenze e criteri.

## 12. Azioni successive

1. Definire se la granularità primaria richiesta sia annuale, biennale o terminale.
2. Verificare il documento Word e i dati sorgente indicati nel metadato generale.
3. Riesaminare `mat_sec_1_001`, soprattutto il blocco `conoscenze`.
4. Verificare puntualmente le attribuzioni al D.M. 221/2025.
5. Separare fonte normativa, adattamento d’istituto ed esempi didattici.
6. Non modificare i dati prima della validazione disciplinare umana.

## 13. Verdetto

`CML_CURR_AUDIT_01_MATEMATICA_SEMANTIC_PILOT_COMPLETE_LEVEL_CONTAMINATION_AND_PRIMARY_PROGRESSION_GAPS_FOUND`
