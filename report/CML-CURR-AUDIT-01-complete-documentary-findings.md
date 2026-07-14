# CML-CURR-AUDIT-01 — Risultati dell’audit documentale del curricolo

## 1. Perimetro analizzato

Sorgente canonica: `content/curriculum/*.normalized.json`.

- 14 file disciplinari;
- 142 unità curricolari;
- Infanzia, Primaria e Secondaria di I grado;
- campi, fonti, stato, validazione umana, copertura per classe/fascia, identificativi e duplicazioni testuali;
- coerenza formale con il contratto normalizzato.

L’audit non modifica né approva contenuti.

## 2. Quadro complessivo

| Indicatore | Esito |
|---|---:|
| Discipline | 14 |
| Unità curricolari | 142 |
| ID mancanti o duplicati | 0 |
| Campi principali compilati | 142/142 per ogni campo |
| Fonti formalmente presenti | 142/142 |
| Validazione umana impostata | 142/142 |
| Rilievi strutturali P0 | 0 |
| Gap candidati di livello P1 | 22 |
| Duplicazioni testuali esatte P2 | 1 |

La copertura formale dei campi è completa al 100%. Questo attesta la presenza dei valori, non la correttezza disciplinare né la conformità alle fonti.

## 3. Copertura globale

| Campo | Copertura |
|---|---:|
| Ambito | 100% |
| Competenza | 100% |
| Traguardo | 100% |
| Obiettivi | 100% |
| Conoscenze | 100% |
| Abilità | 100% |
| Evidenze | 100% |
| Criteri di valutazione | 100% |
| Fonte | 100% |
| Validazione umana | 100% |

## 4. Copertura per disciplina e livello

### Arte e Immagine — 6 unità

- Infanzia: fascia 5; assente 3–4.
- Primaria: classi 1 e 3; assenti 2, 4 e 5.
- Secondaria: classi 1–3.
- 4 gap candidati da classificare.

### Educazione Civica — 11 unità

- Infanzia: fascia 5; assente 3–4.
- Primaria e Secondaria complete.
- 1 gap candidato.

### Educazione Fisica — 7 unità

- Infanzia: fascia 5; assente 3–4.
- Primaria: classi 1, 3 e 5; assenti 2 e 4.
- Secondaria completa.
- 3 gap candidati.

### Geografia — 12 unità

- Infanzia: fascia 5; assente 3–4.
- Primaria e Secondaria complete.
- Traguardo identico tra `geo_pri_1_001` e `geo_pri_3_001`.
- 1 gap candidato e 1 P2.

### Inglese — 12 unità

- Infanzia: fascia 5; assente 3–4.
- Primaria e Secondaria complete.
- 1 gap candidato.

### Italiano — 14 unità

- Infanzia, Primaria e Secondaria complete rispetto ai livelli dichiarati.

### Latino LEL — 4 unità

- Secondaria: classi 2 e 3.
- La classe 1 è fuori dal perimetro disciplinare documentato e non viene conteggiata come gap.

### Matematica — 13 unità

- Infanzia: fascia 5; assente 3–4.
- Primaria: classi 1 e 5; assenti 2, 3 e 4.
- Secondaria completa.
- 4 gap candidati.

### Musica — 7 unità

- Infanzia: fascia 5; assente 3–4.
- Primaria: classi 1, 3 e 5; assenti 2 e 4.
- Secondaria completa.
- 3 gap candidati.

### Religione Cattolica — 7 unità

- Infanzia: fascia 5; assente 3–4.
- Primaria: classi 1, 3 e 5; assenti 2 e 4.
- Secondaria completa.
- 3 gap candidati.

### Scienze — 15 unità

- Infanzia: fascia 5; assente 3–4.
- Primaria e Secondaria complete.
- 1 gap candidato.

### Seconda Lingua Comunitaria — 6 unità

- Secondaria classi 1–3 complete.

### Storia — 15 unità

- Infanzia: fascia 5; assente 3–4.
- Primaria e Secondaria complete.
- 1 gap candidato.

### Tecnologia — 13 unità

- Infanzia, Primaria e Secondaria complete rispetto ai livelli dichiarati.

## 5. Verifica di applicabilità

Il contratto `DUAL-CURRICULUM-TEMPORAL-APPLICABILITY-CONTRACT.md` stabilisce quale quadro nazionale, IN 2012 o IN 2025, si applica a una combinazione di anno, ordine, classe e disciplina. Non costituisce però una matrice che stabilisce se ogni disciplina debba essere rappresentata autonomamente in ogni classe o fascia.

Di conseguenza, le 22 assenze sono **gap candidati di copertura**, da riclassificare mediante una matrice disciplina × ordine × classe/fascia con uno dei seguenti esiti:

- applicabile obbligatorio;
- applicabile con aggregazione pluriclasse/plurifascia;
- non applicabile;
- da verificare.

Il registro analitico è in `report/CML-CURR-AUDIT-01-applicability-review.md`.

Particolare cautela è necessaria per l’Infanzia: i contenuti sono organizzati per campi di esperienza e non devono essere automaticamente interpretati come discipline autonome.

## 6. Altri rilievi trasversali

### P2 — Duplicazione testuale in Geografia

Il traguardo di `geo_pri_3_001` coincide con quello di `geo_pri_1_001`. Va stabilito se sia una ripetizione intenzionale, un errore di copia o un traguardo comune da modellare diversamente.

### Governance degli stati

Tutte le 142 unità risultano contemporaneamente:

- `stato: nuovo`;
- `validazioneUmana: true`.

La combinazione non è vietata, ma non distingue contenuto introdotto, validato, approvato e stabilizzato. Serve una regola esplicita di transizione oppure la dichiarazione che `nuovo` descrive l’origine e non lo stato corrente.

### Fonti formalmente presenti, semanticamente non certificate

L’audit automatico non dimostra che:

- il riferimento sia corretto e vigente;
- il testo derivi dalla sezione citata;
- siano distinti testo ufficiale, adattamento d’istituto e proposta 2025;
- le citazioni siano uniformi tra discipline.

Questa verifica richiede confronto documentale e validazione disciplinare umana.

## 7. Priorità operative

1. approvare una matrice di applicabilità disciplina × ordine × livello;
2. riclassificare i 22 gap candidati;
3. verificare la duplicazione di Geografia;
4. chiarire la governance di `stato` e `validazioneUmana`;
5. verificare semanticamente le fonti delle 142 unità;
6. separare testo ufficiale, adattamento d’istituto e proposta di revisione;
7. aprire correzioni curricolari solo per gap obbligatori e dopo validazione umana.

## 8. Verdetto

Il corpus è formalmente ben strutturato: nessun P0, nessun campo principale vuoto e nessun ID duplicato. Non può ancora essere dichiarato curricolo verticale completo e normativamente certificato perché:

- 22 combinazioni di livello restano da classificare rispetto all’applicabilità disciplinare;
- permane una duplicazione testuale da verificare;
- gli stati documentali non distinguono con chiarezza le fasi di governance;
- le fonti non sono state ancora verificate semanticamente.

`CML_CURR_AUDIT_01_STRUCTURAL_PASS_WITH_22_CANDIDATE_LEVEL_GAPS_AND_SEMANTIC_VALIDATION_REQUIRED`