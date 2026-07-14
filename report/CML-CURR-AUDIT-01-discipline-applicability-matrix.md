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
| Arte e Immagine | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1 e 3 presenti; 2 DA_VERIFICARE con forte evidenza di gap; 4–5 APPLICABILE_AGGREGATO in `art_pri_3_001` | 1–3 presenti | aggregazione 3–5 documentata; classe 2 candidata P1 |
| Educazione Civica | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1–5 presenti | 1–3 presenti | fascia 3–4 dipendente dal modello per campi di esperienza |
| Educazione Fisica | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1, 3, 5 presenti; 2 DA_VERIFICARE con forte evidenza di gap; 4 APPLICABILE_AGGREGATO | 1–3 presenti | classe 4 aggregata 3–5; classe 2 candidata P1 |
| Geografia | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1–5 presenti | 1–3 presenti | duplicato testuale separato |
| Inglese | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1–5 presenti | 1–3 presenti | fascia 3–4 dipendente dal modello per campi di esperienza |
| Italiano | presente | presente | 1–5 presenti | 1–3 presenti | copertura strutturale completa |
| Latino LEL | NON_APPLICABILE | NON_APPLICABILE | NON_APPLICABILE | classe 1 NON_APPLICABILE; 2–3 presenti | perimetro specifico già documentato |
| Matematica | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1 e 5 presenti; 2, 3, 4 DA_VERIFICARE con forte evidenza di gap | 1–3 presenti | tre livelli candidati P1; nessuna aggregazione dichiarata |
| Musica | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1, 3, 5 presenti; 2 e 4 DA_VERIFICARE con forte evidenza di gap | 1–3 presenti | due livelli candidati P1; nessuna aggregazione dichiarata |
| Religione Cattolica | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1, 3, 5 presenti; 2 e 4 DA_VERIFICARE con forte evidenza di gap | 1–3 presenti | due livelli candidati P1; governance della validazione incoerente |
| Scienze | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1–5 presenti | 1–3 presenti | fascia 3–4 dipendente dal modello per campi di esperienza |
| Seconda Lingua Comunitaria | NON_APPLICABILE | NON_APPLICABILE | NON_APPLICABILE | 1–3 presenti | applicabilità limitata alla Secondaria I grado |
| Storia | DA_VERIFICARE — parte del gap sistemico Infanzia | presente | 1–5 presenti | 1–3 presenti | applicabilità temporale CML-477 distinta |
| Tecnologia | presente | presente | 1–5 presenti | 1–3 presenti | copertura strutturale completa |

## Registro delle assenze originarie

L’audit automatico aveva rilevato 22 combinazioni disciplina/livello prive di record autonomo. I pilot disciplinari hanno riclassificato tre casi come aggregazioni documentate:

- Arte e Immagine, Primaria classe 4 → `APPLICABILE_AGGREGATO`;
- Arte e Immagine, Primaria classe 5 → `APPLICABILE_AGGREGATO`;
- Educazione Fisica, Primaria classe 4 → `APPLICABILE_AGGREGATO`.

Restano 19 combinazioni non risolte, ma con due significati distinti:

- 10 combinazioni Infanzia derivano da un unico problema sistemico di granularità e modello;
- 9 combinazioni Primaria sono candidati P1 ad alta confidenza, ancora subordinati a validazione umana.

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

## Primaria — 9 candidati P1 ad alta confidenza

- Arte e Immagine: classe 2;
- Educazione Fisica: classe 2;
- Matematica: classi 2, 3, 4;
- Musica: classi 2, 4;
- Religione Cattolica: classi 2, 4.

Per tutti i nove casi:

- la disciplina è attiva nella Primaria;
- esistono record per annualità precedenti e successive;
- non esiste una dichiarazione di non applicabilità;
- non esiste una fonte o nota che assegni la copertura a una unità pluriclasse;
- la progressione verticale risulta interrotta.

La classificazione formale resta `DA_VERIFICARE`, ma il livello di evidenza interno è alto. Prima della chiusura del curricolo serve una validazione disciplinare esplicita che stabilisca se ciascun livello richiede un record autonomo o una aggregazione formalmente approvata.

Casi già riclassificati:

- Arte e Immagine: classi 4 e 5 `APPLICABILE_AGGREGATO` nell’unità `art_pri_3_001`;
- Educazione Fisica: classe 4 `APPLICABILE_AGGREGATO` nelle unità riferite alle classi 3–4–5.

Nessuna correzione o generazione automatica è autorizzata dall’audit.

## Fonti e limiti

Fonti interne usate:

- `content/curriculum/*.normalized.json`;
- `docs/02_system/DUAL-CURRICULUM-TEMPORAL-APPLICABILITY-CONTRACT.md`;
- `report/CML-CURR-AUDIT-01-complete-documentary-findings.md`;
- `report/CML-CURR-AUDIT-01-semantic-source-pilot-arte-immagine.md`;
- `report/CML-CURR-AUDIT-01-semantic-source-pilot-educazione-fisica.md`;
- `report/CML-CURR-AUDIT-01-semantic-source-pilot-matematica.md`;
- `report/CML-CURR-AUDIT-01-semantic-source-pilot-musica.md`;
- `report/CML-CURR-AUDIT-01-semantic-source-pilot-religione-cattolica.md`;
- `report/CML-CURR-AUDIT-01-infanzia-cross-discipline-granularity-review.md`;
- `report/CML-CURR-AUDIT-01-primary-residual-gap-assessment.md`.

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

`CML_CURR_AUDIT_01_MATRIX_9_HIGH_CONFIDENCE_PRIMARY_CANDIDATE_GAPS_PLUS_1_SYSTEMIC_INFANZIA_ISSUE`
