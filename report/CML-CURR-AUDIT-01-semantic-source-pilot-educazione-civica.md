# CML-CURR-AUDIT-01 — Pilot semantico delle fonti: Educazione Civica

## Perimetro

File analizzato: `content/curriculum/educazione-civica.normalized.json`.

- 11 unità curricolari;
- Infanzia: fascia 5 anni;
- Primaria: classi 1-5;
- Secondaria di I grado: classi 1-3;
- nuclei dichiarati: Costituzione, Sviluppo sostenibile, Cittadinanza digitale, Educazione finanziaria.

L'analisi è documentale. Non modifica né approva contenuti.

## Quadro delle fonti dichiarate

Le unità richiamano, con combinazioni differenti:

- Indicazioni Nazionali 2012 e D.M. 254/2012;
- Legge 20 agosto 2019, n. 92;
- Costituzione della Repubblica Italiana;
- Convenzione ONU sui diritti dell'infanzia;
- Carta dei diritti fondamentali dell'Unione europea;
- Agenda 2030 ONU;
- D.M. 183/2024;
- D.M. 221/2025.

Tutte le 11 unità hanno un campo `fonte` non vuoto, ma il campo concatena più livelli documentali senza associare ogni riferimento ai singoli campi curricolari.

## Esiti

### 1. Tracciabilità formale presente ma non granulare — P1

Le fonti sono identificabili a livello generale, ma non è possibile stabilire dal dato:

- quale atto supporti la `competenza`;
- quale passaggio supporti il `traguardo`;
- quali `obiettivi` siano normativi e quali adattamenti d'istituto;
- se `conoscenze`, `abilità`, `evidenze` e `criteriValutazione` derivino da una fonte o siano progettazione didattica locale.

Serve una futura struttura di provenienza per campo o blocco.

### 2. Educazione civica come insegnamento trasversale — coerente nel quadro generale

La Legge 92/2019 costituisce il riferimento generale per l'insegnamento scolastico dell'educazione civica. Il corpus rappresenta correttamente una progressione dall'Infanzia alla Secondaria, ma il file non conserva articolo, comma o allegato applicato a ogni unità.

### 3. Nucleo Educazione finanziaria — P1 di verifica documentale

Le unità `edu_pri_4_001` e `edu_sec_3_002` attribuiscono al D.M. 183/2024 contenuti di educazione finanziaria, assicurativa e previdenziale. La relazione è plausibile nel quadro dichiarato, ma deve essere verificata contro testo e allegati ufficiali, indicando se i contenuti sono:

- traguardi nazionali;
- obiettivi nazionali;
- esempi o temi suggeriti;
- adattamenti curricolari dell'istituto.

### 4. D.M. 221/2025 — P1 di applicabilità e provenienza

Le unità `edu_pri_3_001`, `edu_sec_2_001` e `edu_sec_3_001` citano il D.M. 221/2025 insieme a fonti precedenti. Il dato non indica:

- anno scolastico di applicabilità;
- quadro IN 2012 o IN 2025 applicato alla classe;
- se la formulazione derivi letteralmente dalle Indicazioni 2025;
- se si tratti di anticipazione progettuale o adattamento d'istituto.

La citazione deve essere collegata al contratto temporale CML-477 e a una provenienza per campo.

### 5. Agenda 2030 e documenti sovranazionali — P2 di precisione

Agenda 2030, Convenzione ONU e Carta dei diritti fondamentali UE sono fonti o quadri legittimamente utilizzabili, ma le citazioni non riportano articoli, obiettivi o target specifici. La tracciabilità va resa puntuale, per esempio:

- numero dell'articolo costituzionale o della Convenzione;
- SDG e target dell'Agenda 2030;
- articolo della Carta UE;
- sezione o allegato del decreto ministeriale.

### 6. Evidenze e criteri — progettazione locale non dichiarata

Le evidenze osservabili e i criteri di valutazione sono formulati in modo operativo e contestuale. Non risultano riconducibili direttamente alle fonti citate. Devono essere marcati come elaborazione d'istituto o proposta didattica, evitando che il campo `fonte` faccia apparire l'intera unità come testo normativo.

### 7. Stato e validazione — P1 di governance

Il file dichiara `stato: bozza_generabile`, `readiness: in_revisione` e `humanValidationRequired: true`, mentre tutte le unità hanno `stato: nuovo` e `validazioneUmana: true`.

La combinazione richiede una regola esplicita: `validazioneUmana: true` non deve essere interpretata come approvazione formale del curricolo.

## Classificazione sintetica

| Area | Esito |
|---|---|
| Presenza fonti | 11/11 |
| Identificabilità generale | sufficiente |
| Provenienza per campo | assente |
| Applicabilità temporale IN 2012/IN 2025 | non esplicita |
| Citazioni puntuali ad articoli/allegati | generalmente assenti |
| Separazione testo normativo/adattamento locale | assente |
| Validazione disciplinare conclusiva | necessaria |

## Priorità

1. Acquisire e registrare i testi ufficiali usati per D.M. 183/2024 e D.M. 221/2025.
2. Collegare le unità al resolver temporale CML-477.
3. Separare `fonteNormativa`, `adattamentoIstituto` e `progettazioneDidattica`.
4. Introdurre provenienza per competenza, traguardo e obiettivi.
5. Verificare puntualmente educazione finanziaria e cittadinanza digitale.
6. Chiarire lo stato di validazione e approvazione.

## Verdetto

Il corpus di Educazione Civica è strutturalmente ampio e progressivo, ma la fonte unica concatenata non consente ancora certificazione semantica o normativa. Non emergono motivi per correggere automaticamente i contenuti; emergono invece requisiti P1 di tracciabilità, applicabilità e governance.

`CML_CURR_AUDIT_01_EDUCAZIONE_CIVICA_SEMANTIC_SOURCE_PILOT_COMPLETE_TRACEABILITY_AND_APPLICABILITY_REQUIRED`
