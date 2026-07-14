# CML-CURR-AUDIT-01 — Audit documentale completo del curriculum

## Obiettivo

Verificare sistematicamente il patrimonio curricolare di CurManLight senza modificare i contenuti disciplinari, accertando completezza, coerenza, tracciabilità, applicabilità e utilizzabilità nei diversi ordini di scuola.

## Perimetro

- 14 discipline canoniche;
- 142 unità curricolari;
- Infanzia, Primaria e Secondaria di I grado;
- competenze, traguardi, obiettivi, conoscenze, abilità, evidenze, criteri, nuclei, ambiti, fonti, stati e validazione;
- progressione verticale, copertura per livello e applicabilità temporale IN 2012/IN 2025.

## Vincoli

- nessuna modifica automatica ai dati curricolari;
- nessuna normalizzazione silenziosa;
- distinzione fra controllo tecnico e valutazione didattica;
- validazione umana obbligatoria prima di correzioni sostanziali.

## Stato operativo

Branch:

`codex/cml-curr-audit-01-full-curriculum-document-audit`

Completato:

- audit automatico riproducibile con artifact GitHub Actions;
- controllo di 14 file e 142 unità;
- verifica di identificativi, campi, fonti, ordine, livello e validazione;
- gestione artifact anche in caso di P0;
- rilevazione esplicita di `ordine` mancante;
- matrice disciplina × ordine × livello;
- revisione dell’applicabilità temporale;
- pilot semantici Tecnologia, Educazione Civica, Italiano, Matematica, Arte e Immagine, Educazione Fisica, Musica e Religione Cattolica;
- revisione trasversale dell’Infanzia;
- valutazione comparativa dei gap Primaria;
- registro consolidato delle anomalie semantiche e di governance;
- aggiornamento del report principale.

## Esito strutturale

- 0 P0;
- 0 ID mancanti o duplicati;
- campi principali formalmente presenti 142/142;
- fonti formalmente presenti 142/142;
- `validazioneUmana: true` in 142/142 unità;
- 1 duplicazione testuale esatta in Geografia.

## Riclassificazione della copertura

L’audit automatico aveva individuato 22 assenze di record autonomi.

### Risolte come aggregazioni

- Arte e Immagine, Primaria classi 4 e 5;
- Educazione Fisica, Primaria classe 4.

### Candidati P1 Primaria ad alta confidenza

- Arte e Immagine classe 2;
- Educazione Fisica classe 2;
- Matematica classi 2, 3 e 4;
- Musica classi 2 e 4;
- Religione Cattolica classi 2 e 4.

### Infanzia

Le dieci assenze 3–4 anni sono un unico problema sistemico di granularità, non dieci lacune disciplinari indipendenti. Le unità fascia 5 rinviano ai cinque campi di esperienza, ma non dichiarano copertura plurifascia 3–5.

## Anomalie principali

### P1

- possibile contaminazione di livello in `mat_sec_1_001`;
- governance incoerente tra `validazioneUmana: true` e contenuti dichiarati provvisori o da validare;
- provenienza disciplinare insufficiente nel corpus Italiano;
- nove gap Primaria ad alta confidenza;
- modello Infanzia non definito.

### P2

- duplicazione testuale Geografia;
- fonti aggregate e non granulari;
- applicabilità temporale IN 2012/IN 2025 non esplicitata nelle unità;
- riferimenti normativi specifici ancora da verificare puntualmente;
- adattamenti locali non distinti dalle fonti ufficiali.

### P3

- refusi e normalizzazione ortografica, inclusi `Elementi diagogica`, `Onomatopee` e accenti impropri.

## Output principali

- `tools/audit-cml-curriculum-complete.mjs`;
- `.github/workflows/cml-curr-audit-01.yml`;
- `report/CML-CURR-AUDIT-01-complete-documentary-findings.md`;
- `report/CML-CURR-AUDIT-01-discipline-applicability-matrix.md`;
- `report/CML-CURR-AUDIT-01-infanzia-cross-discipline-granularity-review.md`;
- `report/CML-CURR-AUDIT-01-primary-residual-gap-assessment.md`;
- `report/CML-CURR-AUDIT-01-semantic-governance-anomaly-register.md`;
- pilot semantici disciplinari;
- artifact `report/CML-CURR-AUDIT-01/` generato dal workflow.

## Passaggio successivo

Prima della chiusura definitiva della PR:

1. rieseguire CI sull’ultimo head;
2. verificare eventuali nuovi thread di review;
3. aggiornare la descrizione della PR con il verdetto consolidato;
4. eseguire review finale del diff documentale;
5. richiedere autorizzazione esplicita prima del merge.

## Verdetto corrente

`CML_CURR_AUDIT_01_STRUCTURAL_PASS_WITH_9_HIGH_CONFIDENCE_PRIMARY_GAPS_1_SYSTEMIC_INFANZIA_ISSUE_AND_SEMANTIC_GOVERNANCE_REMEDIATION_REQUIRED`
