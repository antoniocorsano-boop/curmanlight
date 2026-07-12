# DUAL-CURRICULUM-TEMPORAL-APPLICABILITY-CONTRACT

**Stato:** contratto di sistema — CML-477  
**Ambito:** scuola dell'infanzia, primaria, secondaria di primo grado  
**Fonte primaria:** D.M. 9 dicembre 2025, n. 221, pubblicato in G.U. n. 21 del 27 gennaio 2026  
**Entrata in vigore:** 11 febbraio 2026

## 1. Scopo

Definire come CurManLight determina e comunica quale quadro nazionale sia applicabile a una specifica combinazione di:

- anno scolastico;
- ordine di scuola;
- classe o fascia;
- disciplina;
- stato del curricolo d'istituto.

Il contratto sostituisce il modello troppo semplice basato su un solo curricolo attivo per tutto l'istituto.

## 2. Principio normativo

Dal 2026/2027 le Indicazioni nazionali 2025 si applicano:

- a tutta la scuola dell'infanzia;
- a partire dalle classi prime della scuola primaria;
- a partire dalle classi prime della secondaria di primo grado.

Le classi intermedie di primaria e secondaria già funzionanti nel 2025/2026 continuano ad applicare le Indicazioni 2012 fino alla conclusione del rispettivo corso.

Eccezione espressa:

- nell'anno scolastico 2027/2028 le classi terze della scuola primaria anticipano le Indicazioni 2025 limitatamente a Storia.

Durante la transizione i collegi dei docenti adattano e rimodulano il curricolo per le discipline la cui scansione temporale differisce dal quadro 2012.

## 3. Conseguenza architetturale

CurManLight non deve gestire soltanto due documenti monolitici:

- `IN_2012`;
- `IN_2025`.

Deve risolvere una regola di applicabilità per contesto:

```text
anno scolastico × ordine × classe/fascia × disciplina
```

La domanda canonica è:

> Quale quadro nazionale si applica a questa disciplina, in questa classe e in questo anno scolastico?

## 4. Calendario transitorio minimo

### 2026/2027

| Segmento | Quadro applicabile |
|---|---|
| Infanzia, tutte le sezioni | IN 2025 |
| Primaria classe 1 | IN 2025 |
| Primaria classi 2-5 | IN 2012 |
| Secondaria I grado classe 1 | IN 2025 |
| Secondaria I grado classi 2-3 | IN 2012 |

### 2027/2028

| Segmento | Quadro applicabile |
|---|---|
| Infanzia, tutte le sezioni | IN 2025 |
| Primaria classi 1-2 | IN 2025 |
| Primaria classe 3, Storia | IN 2025 — anticipazione disciplinare |
| Primaria classe 3, altre discipline | IN 2012 |
| Primaria classi 4-5 | IN 2012 |
| Secondaria I grado classi 1-2 | IN 2025 |
| Secondaria I grado classe 3 | IN 2012 |

### 2028/2029

| Segmento | Quadro applicabile |
|---|---|
| Infanzia, tutte le sezioni | IN 2025 |
| Primaria classi 1-3 | IN 2025 |
| Primaria classi 4-5 | IN 2012 |
| Secondaria I grado classi 1-3 | IN 2025 |

### 2029/2030

| Segmento | Quadro applicabile |
|---|---|
| Infanzia, tutte le sezioni | IN 2025 |
| Primaria classi 1-4 | IN 2025 |
| Primaria classe 5 | IN 2012 |
| Secondaria I grado classi 1-3 | IN 2025 |

### Dal 2030/2031

Tutta l'infanzia, la primaria e la secondaria di primo grado applicano le Indicazioni 2025.

## 5. Modello dati

### 5.1 Regola normativa

```json
{
  "id": "app_2027_2028_primaria_3_storia",
  "annoScolastico": "2027/2028",
  "ordine": "Primaria",
  "classe": "3",
  "disciplina": "storia",
  "quadroApplicabile": "IN_2025",
  "tipoRegola": "anticipazione_disciplinare",
  "fonteNormativa": {
    "atto": "DM_221_2025",
    "articolo": "5",
    "comma": "1"
  }
}
```

### 5.2 Esito calcolato

```json
{
  "annoScolastico": "2027/2028",
  "ordine": "Primaria",
  "classe": "3",
  "disciplina": "matematica",
  "quadroApplicabile": "IN_2012",
  "motivo": "coorte_intermedia_2025_2026",
  "statoTransizione": "in_corso",
  "requiresInstitutionalAdaptation": false,
  "humanValidationRequired": true
}
```

## 6. Tipi di regola

Valori consentiti:

- `avvio_nuova_coorte`;
- `coorte_intermedia_2012`;
- `anticipazione_disciplinare`;
- `piena_attuazione`;
- `adattamento_scansione_temporale`;
- `eccezione_normativa`;
- `da_verificare`.

## 7. Stati distinti

Il sistema deve distinguere almeno:

1. **quadro nazionale applicabile** — IN 2012 o IN 2025;
2. **curricolo d'istituto disponibile** — quale versione è stata predisposta;
3. **curricolo d'istituto validato** — esaminato dal gruppo competente;
4. **curricolo d'istituto approvato** — deliberato dall'organo competente;
5. **curricolo effettivamente applicabile** — coerente con anno, classe, disciplina e coorte.

Regole:

- `validato` non equivale a `approvato`;
- `approvato` non equivale ad applicabile a tutte le classi;
- una stessa classe può usare quadri differenti per discipline diverse;
- il quadro nazionale non modifica automaticamente il curricolo d'istituto;
- ogni esito automatico deve conservare la fonte normativa e richiedere validazione umana.

## 8. Tre categorie di gap

### 8.1 Gap contenutistico

Differenza fra formulazioni IN 2012 e IN 2025 su traguardi, obiettivi, conoscenze o altri campi.

### 8.2 Gap temporale di applicabilità

Differenza fra il quadro applicabile a classi o discipline diverse nello stesso anno scolastico.

### 8.3 Gap di adeguamento d'istituto

Differenza fra:

- quadro nazionale applicabile;
- curricolo d'istituto attuale;
- curricolo d'istituto da rielaborare o deliberare.

Il dominio B03 attuale copre soltanto una parte del gap contenutistico. Il presente contratto introduce il dominio di applicabilità temporale.

## 9. Regola di risoluzione

Ordine di precedenza:

1. eccezione normativa per disciplina e classe;
2. regola di coorte per anno scolastico e ordine;
3. cessazione generale di efficacia delle IN 2012;
4. regola istituzionale configurata;
5. fallback prudente `da_verificare`.

Pseudocodice:

```text
resolveApplicability(context):
  validate anno, ordine, classe/fascia
  if exact discipline exception exists: return exception
  if order is Infanzia and year >= 2026/2027: return IN_2025
  if order is Primaria: resolve entry cohort, with History exception in 2027/2028
  if order is Secondaria: resolve entry cohort
  if no rule is determinable: return DA_VERIFICARE
```

## 10. Messaggi UI canonici

### IN 2025 applicabile

> Per questa classe e disciplina si applicano le Indicazioni nazionali 2025.

### IN 2012 per coorte intermedia

> Questa classe continua ad applicare le Indicazioni nazionali 2012 fino alla conclusione del percorso.

### Anticipazione Storia

> Nell'anno scolastico 2027/2028 la classe terza primaria applica anticipatamente le Indicazioni 2025 per Storia.

### Adattamento richiesto

> La scuola deve verificare e rimodulare la scansione del curricolo d'istituto per questa disciplina.

### Dato incompleto

> Imposta anno scolastico, ordine, classe e disciplina per determinare il quadro applicabile.

### Esito non determinabile

> Applicabilità da verificare. Il sistema non dispone di una regola sufficiente per questo contesto.

## 11. Impatto sui moduli

### Consultazione

- mostra sempre il quadro applicabile al contesto;
- permette di consultare entrambe le versioni durante la transizione;
- non preimposta una proposta come vigente.

### Revisione

- confronta il curricolo d'istituto con il quadro nazionale applicabile;
- separa gap contenutistico, temporale e istituzionale;
- impedisce di proporre modifiche basate sul quadro sbagliato.

### Progettazione didattica

- dichiara la base curricolare usata;
- avvisa se il curricolo d'istituto è ancora da adattare;
- non usa automaticamente contenuti non approvati.

### Esportazione

Ogni output deve includere:

- anno scolastico;
- ordine;
- classe/fascia;
- disciplina;
- quadro nazionale applicabile;
- versione del curricolo d'istituto;
- stato di validazione/approvazione;
- fonte normativa della regola.

## 12. Relazione con CML-280 e CML-281

CML-280 aveva scelto correttamente una card prudente perché non esistevano regole strutturate. CML-477 fornisce ora il contratto necessario per sostituire progressivamente lo stato generico `da verificare` con una risoluzione normativa deterministica.

La card Home resta sintetica; la matrice completa appartiene a una futura vista di governo.

## 13. Perimetro delle slice successive

### CML-478 — Temporal Applicability Data and Resolver

- dataset normativo versionato;
- funzione pura `resolveCurriculumApplicability()`;
- test completi 2026/27-2030/31;
- eccezione Storia;
- nessuna modifica ai contenuti curricolari.

### CML-479 — Context-aware Applicability UI

- card Home aggiornata;
- indicatore nelle viste Consultazione, Revisione e Progettazione;
- messaggi accessibili desktop/mobile.

### CML-480 — Transition-aware Revision and Export

- blocco dei confronti contro quadro non applicabile;
- metadati di applicabilità negli export;
- distinzione gap contenutistico/temporale/istituzionale.

## 14. Vincoli

- nessun backend;
- nessuna autenticazione aggiuntiva;
- nessuna telemetria;
- nessuna modifica automatica del curricolo canonico;
- nessuna delibera simulata;
- dati normativi versionati e leggibili localmente;
- validazione umana sempre richiesta.

## 15. Verdetto

```text
CML_477_DUAL_CURRICULUM_TEMPORAL_APPLICABILITY_CONTRACT_READY_FOR_IMPLEMENTATION
```
