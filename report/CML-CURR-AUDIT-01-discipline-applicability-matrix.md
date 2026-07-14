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
| Arte e Immagine | DA_VERIFICARE | presente | 1 e 3 presenti; 2, 4, 5 DA_VERIFICARE | 1–3 presenti | verifica granularità verticale necessaria |
| Educazione Civica | DA_VERIFICARE | presente | 1–5 presenti | 1–3 presenti | solo fascia Infanzia da verificare |
| Educazione Fisica | DA_VERIFICARE | presente | 1, 3, 5 presenti; 2 e 4 DA_VERIFICARE | 1–3 presenti | possibile aggregazione pluriclasse da documentare |
| Geografia | DA_VERIFICARE | presente | 1–5 presenti | 1–3 presenti | fascia Infanzia da verificare; duplicato testuale separato |
| Inglese | DA_VERIFICARE | presente | 1–5 presenti | 1–3 presenti | fascia Infanzia da verificare |
| Italiano | presente | presente | 1–5 presenti | 1–3 presenti | copertura strutturale completa |
| Latino LEL | NON_APPLICABILE | NON_APPLICABILE | NON_APPLICABILE | classe 1 NON_APPLICABILE; 2–3 presenti | perimetro specifico già documentato |
| Matematica | DA_VERIFICARE | presente | 1 e 5 presenti; 2, 3, 4 DA_VERIFICARE | 1–3 presenti | possibile aggregazione o lacuna reale da determinare |
| Musica | DA_VERIFICARE | presente | 1, 3, 5 presenti; 2 e 4 DA_VERIFICARE | 1–3 presenti | possibile aggregazione pluriclasse da documentare |
| Religione Cattolica | DA_VERIFICARE | presente | 1, 3, 5 presenti; 2 e 4 DA_VERIFICARE | 1–3 presenti | possibile aggregazione pluriclasse da documentare |
| Scienze | DA_VERIFICARE | presente | 1–5 presenti | 1–3 presenti | solo fascia Infanzia da verificare |
| Seconda Lingua Comunitaria | NON_APPLICABILE | NON_APPLICABILE | NON_APPLICABILE | 1–3 presenti | applicabilità limitata alla Secondaria I grado |
| Storia | DA_VERIFICARE | presente | 1–5 presenti | 1–3 presenti | fascia Infanzia da verificare; applicabilità temporale CML-477 distinta |
| Tecnologia | presente | presente | 1–5 presenti | 1–3 presenti | copertura strutturale completa |

## Registro dei 22 gap candidati

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

### Primaria — 12 casi

Tutti classificati `DA_VERIFICARE` fino a verifica della granularità:

- Arte e Immagine: classi 2, 4, 5;
- Educazione Fisica: classi 2, 4;
- Matematica: classi 2, 3, 4;
- Musica: classi 2, 4;
- Religione Cattolica: classi 2, 4.

Possibili esiti dopo validazione umana:

- `APPLICABILE_OBBLIGATORIO`, se il curricolo richiede una progressione annuale distinta;
- `APPLICABILE_AGGREGATO`, se una unità copre intenzionalmente più classi;
- `NON_APPLICABILE`, solo in presenza di una fonte o delibera esplicita;
- permanenza `DA_VERIFICARE`, se la documentazione non consente ancora una decisione.

## Fonti e limiti

Fonti interne usate:

- `content/curriculum/*.normalized.json`;
- `docs/02_system/DUAL-CURRICULUM-TEMPORAL-APPLICABILITY-CONTRACT.md`;
- `report/CML-CURR-AUDIT-01-complete-documentary-findings.md`.

Limiti:

- nessun confronto semantico puntuale con i testi normativi è ancora completato;
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

`CML_CURR_AUDIT_01_DISCIPLINE_APPLICABILITY_MATRIX_PRELIMINARY_WITH_22_GAPS_TO_VALIDATE`
