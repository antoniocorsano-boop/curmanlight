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
| Arte e Immagine | DA_VERIFICARE | presente | 1 e 3 presenti; 2 DA_VERIFICARE; 4–5 APPLICABILE_AGGREGATO in `art_pri_3_001` | 1–3 presenti | aggregazione 3–5 documentata; classe 2 ancora da verificare |
| Educazione Civica | DA_VERIFICARE | presente | 1–5 presenti | 1–3 presenti | solo fascia Infanzia da verificare |
| Educazione Fisica | DA_VERIFICARE | presente | 1, 3, 5 presenti; 2 DA_VERIFICARE; 4 APPLICABILE_AGGREGATO nelle unità di classi 3 e 5 | 1–3 presenti | classe 4 aggregata 3–5; classe 2 ancora da verificare |
| Geografia | DA_VERIFICARE | presente | 1–5 presenti | 1–3 presenti | fascia Infanzia da verificare; duplicato testuale separato |
| Inglese | DA_VERIFICARE | presente | 1–5 presenti | 1–3 presenti | fascia Infanzia da verificare |
| Italiano | presente | presente | 1–5 presenti | 1–3 presenti | copertura strutturale completa |
| Latino LEL | NON_APPLICABILE | NON_APPLICABILE | NON_APPLICABILE | classe 1 NON_APPLICABILE; 2–3 presenti | perimetro specifico già documentato |
| Matematica | DA_VERIFICARE | presente | 1 e 5 presenti; 2, 3, 4 DA_VERIFICARE | 1–3 presenti | possibile aggregazione o lacuna reale da determinare |
| Musica | DA_VERIFICARE | presente | 1, 3, 5 presenti; 2 e 4 DA_VERIFICARE | 1–3 presenti | nessuna aggregazione pluriclasse dichiarata; classi 2 e 4 ancora da verificare |
| Religione Cattolica | DA_VERIFICARE | presente | 1, 3, 5 presenti; 2 e 4 DA_VERIFICARE | 1–3 presenti | nessuna aggregazione pluriclasse dichiarata; classi 2 e 4 ancora da verificare; governance della validazione incoerente |
| Scienze | DA_VERIFICARE | presente | 1–5 presenti | 1–3 presenti | solo fascia Infanzia da verificare |
| Seconda Lingua Comunitaria | NON_APPLICABILE | NON_APPLICABILE | NON_APPLICABILE | 1–3 presenti | applicabilità limitata alla Secondaria I grado |
| Storia | DA_VERIFICARE | presente | 1–5 presenti | 1–3 presenti | fascia Infanzia da verificare; applicabilità temporale CML-477 distinta |
| Tecnologia | presente | presente | 1–5 presenti | 1–3 presenti | copertura strutturale completa |

## Registro delle assenze originarie

L’audit automatico aveva rilevato 22 combinazioni disciplina/livello prive di record autonomo. I pilot disciplinari hanno riclassificato tre casi come aggregazioni documentate:

- Arte e Immagine, Primaria classe 4 → `APPLICABILE_AGGREGATO`;
- Arte e Immagine, Primaria classe 5 → `APPLICABILE_AGGREGATO`;
- Educazione Fisica, Primaria classe 4 → `APPLICABILE_AGGREGATO`.

Restano quindi 19 casi non ancora risolti: 10 nell’Infanzia e 9 nella Primaria.

### Infanzia 3–4 anni — 10 casi

Tutti classificati `DA_VERIFICARE`:

1. Arte e Immagine
2. Educazione Civica
3. Educazione Fisica
4. Geografia
5. Inglese
6. Matematica
7. Musica
8. Religione Cattolica
9. Scienze
10. Storia

Motivo: nell’Infanzia la progettazione nazionale è spesso organizzata per campi di esperienza e sviluppo unitario, non necessariamente per discipline autonome. Serve una decisione esplicita sul modello dati d’istituto prima di dichiarare ogni assenza come P1 definitiva.

### Primaria — 9 casi ancora da verificare

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
- `report/CML-CURR-AUDIT-01-semantic-source-pilot-religione-cattolica.md`.

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

`CML_CURR_AUDIT_01_DISCIPLINE_APPLICABILITY_MATRIX_19_UNRESOLVED_GAPS_3_AGGREGATED_LEVELS`
