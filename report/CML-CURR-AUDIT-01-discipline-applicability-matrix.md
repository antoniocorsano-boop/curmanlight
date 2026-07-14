# CML-CURR-AUDIT-01 — Matrice preliminare disciplina × ordine × livello

## Scopo

Questa matrice distingue quattro stati:

- `APPLICABILE_OBBLIGATORIO`: presenza richiesta e verificata da un contratto disciplinare esplicito;
- `APPLICABILE_AGGREGATO`: contenuto applicabile, ma rappresentato da una aggregazione pluriclasse o plurifascia;
- `NON_APPLICABILE`: livello escluso da una fonte o da un contratto esplicito;
- `DA_VERIFICARE`: assenza rilevata nei dati, senza base sufficiente per dichiararla lacuna definitiva.

Il contratto CML-477 determina il quadro nazionale applicabile nel tempo, ma non definisce da solo la granularità dei record curricolari per disciplina e classe. In assenza di una matrice disciplinare approvata, nessun livello mancante viene automaticamente classificato come `NON_APPLICABILE` o come lacuna definitiva.

## Matrice sintetica

| Disciplina | Infanzia 3–4 | Infanzia 5 | Primaria | Secondaria I grado | Esito preliminare |
|---|---|---|---|---|---|
| Arte e Immagine | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1 e 3 presenti; 2 DA_VERIFICARE; 4–5 APPLICABILE_AGGREGATO in `art_pri_3_001` | 1–3 presenti | aggregazione 3–5 documentata; classe 2 ancora da verificare |
| Educazione Civica | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1–5 presenti | 1–3 presenti | fascia 3–4 dipendente dal modello per campi di esperienza |
| Educazione Fisica | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1, 3, 5 presenti; 2 DA_VERIFICARE; 4 APPLICABILE_AGGREGATO nelle unità di classi 3 e 5 | 1–3 presenti | classe 4 aggregata 3–5; classe 2 ancora da verificare |
| Geografia | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1–5 presenti | 1–3 presenti | duplicato testuale separato |
| Inglese | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1–5 presenti | 1–3 presenti | fascia 3–4 dipendente dal modello per campi di esperienza |
| Italiano | presente | presente | 1–5 presenti | 1–3 presenti | copertura strutturale completa |
| Latino LEL | NON_APPLICABILE | NON_APPLICABILE | NON_APPLICABILE | classe 1 NON_APPLICABILE; 2–3 presenti | perimetro specifico già documentato |
| Matematica | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1 e 5 presenti; 2, 3, 4 DA_VERIFICARE | 1–3 presenti | possibile aggregazione o lacuna reale da determinare |
| Musica | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1, 3, 5 presenti; 2 e 4 DA_VERIFICARE | 1–3 presenti | nessuna aggregazione pluriclasse dichiarata |
| Religione Cattolica | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1, 3, 5 presenti; 2 e 4 DA_VERIFICARE | 1–3 presenti | nessuna aggregazione pluriclasse dichiarata; governance della validazione incoerente |
| Scienze | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1–5 presenti | 1–3 presenti | fascia 3–4 dipendente dal modello per campi di esperienza |
| Seconda Lingua Comunitaria | NON_APPLICABILE | NON_APPLICABILE | NON_APPLICABILE | 1–3 presenti | applicabilità limitata alla Secondaria I grado |
| Storia | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1–5 presenti | 1–3 presenti | applicabilità temporale CML-477 distinta |
| Tecnologia | presente | presente | 1–5 presenti | 1–3 presenti | copertura strutturale completa |

## Registro delle assenze originarie

L’audit automatico aveva rilevato 22 combinazioni disciplina/livello prive di record autonomo. I pilot disciplinari hanno riclassificato tre casi come aggregazioni documentate:

- Arte e Immagine, Primaria classe 4 → `APPLICABILE_AGGREGATO`;
- Arte e Immagine, Primaria classe 5 → `APPLICABILE_AGGREGATO`;
- Educazione Fisica, Primaria classe 4 → `APPLICABILE_AGGREGATO`.

Restano 19 combinazioni non risolte. Esse non hanno però lo stesso significato:

- 10 combinazioni Infanzia derivano da un unico problema sistemico di granularità e modello;
- 9 combinazioni Primaria restano gap disciplina/classe da verificare singolarmente.

## Infanzia 3–4 anni — un gap sistemico, dieci manifestazioni

Le dieci discipline coinvolte sono:

1. Arte e Immagine;
2. Educazione Civica;
3. Educazione Fisica;
4. Geografia;
5. Inglese;
6. Matematica;
7. Musica;
8. Religione Cattolica;
9. Scienze;
10. Storia.

La revisione trasversale mostra che le rispettive unità di fascia 5 rinviano ai cinque campi di esperienza:

- `Immagini, suoni, colori`;
- `Il corpo e il movimento`;
- `I discorsi e le parole`;
- `La conoscenza del mondo`;
- `Il sé e l'altro`.

La fascia 5 non può essere automaticamente estesa alla fascia 3–4, perché nessun metadato strutturato dichiara una validità plurifascia 3–5. Le dieci assenze restano quindi `DA_VERIFICARE`, ma devono essere governate come un solo rilievo P1 di modellazione dell’Infanzia, non come dieci lacune disciplinari indipendenti.

Decisione richiesta all’istituto:

1. unità distinte 3–4 e 5;
2. unità uniche plurifascia 3–5 con applicabilità esplicita;
3. modello nativo per campi di esperienza senza duplicazione disciplinare.

## Primaria — 9 casi ancora da verificare

- Arte e Immagine: classe 2;
- Educazione Fisica: classe 2;
- Matematica: classi 2, 3, 4;
- Musica: classi 2, 4;
- Religione Cattolica: classi 2, 4.

Casi riclassificati:

- Arte e Immagine: classi 4 e 5 `APPLICABILE_AGGREGATO` nell’unità `art_pri_3_001`, la cui fonte dichiara classi 3–4–5;
- Educazione Fisica: classe 4 `APPLICABILE_AGGREGATO` nelle unità `ef_pri_3_001` e `ef_pri_5_001`, entrambe con fonte riferita alle classi 3–4–5.

I pilot Musica e Religione Cattolica non hanno prodotto ulteriori riclassificazioni: nessuna unità o nota dichiara una copertura pluriclasse per le classi 2 o 4.

Possibili esiti dopo validazione umana:

- `APPLICABILE_OBBLIGATORIO`, se il curricolo richiede una progressione annuale distinta;
- `APPLICABILE_AGGREGATO`, se una unità copre intenzionalmente più classi;
- `NON_APPLICABILE`, solo in presenza di una fonte o delibera esplicita;
- permanenza `DA_VERIFICARE`, se la documentazione non consente ancora una decisione.

## Fonti e limiti

Fonti interne usate:

- `content/curriculum/*.normalized.json`;
- `docs/02_system/DUAL-CURRICULUM-TEMPORAL-APPLICABILITY-CONTRACT.md`;
- `report/CML-CURR-AUDIT-01-complete-documentary-findings.md`;
- `report/CML-CURR-AUDIT-01-semantic-source-pilot-arte-immagine.md`;
- `report/CML-CURR-AUDIT-01-semantic-source-pilot-educazione-fisica.md`;
- `report/CML-CURR-AUDIT-01-semantic-source-pilot-musica.md`;
- `report/CML-CURR-AUDIT-01-semantic-source-pilot-religione-cattolica.md`;
- `report/CML-CURR-AUDIT-01-infanzia-cross-discipline-granularity-review.md`.

Limiti:

- il confronto semantico puntuale con i testi normativi non è ancora completato per tutte le discipline;
- nessuna matrice disciplinare ufficiale dell’istituto è presente nel repository;
- nessuna assenza viene trasformata automaticamente in correzione dati;
- ogni cambio di stato richiede validazione disciplinare umana.

## Decisione operativa

La PR #106 deve mantenere separati:

1. copertura formale dei record;
2. applicabilità temporale IN 2012/IN 2025;
3. applicabilità disciplinare per ordine e livello;
4. granularità scelta dall’istituto;
5. qualità semantica del contenuto.

`CML_CURR_AUDIT_01_MATRIX_9_PRIMARY_GAPS_PLUS_1_SYSTEMIC_INFANZIA_GRANULARITY_ISSUE`
