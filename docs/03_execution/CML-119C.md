# CML-119C — DISCIPLINARY_KNOWLEDGE_MAP_DATA_CONTRACT

## Contesto

- Slice precedente: `CML_119B_MULTI_DISCIPLINE_NORMALIZED_CURRICULUM_VALIDATOR_READY`
- CML-119A ha rilevato il gap epistemologico-disciplinare.
- CML-119B ha generalizzato il validatore multi-disciplina.
- I file `content/curriculum/*.normalized.json` sono validi ma non contengono una mappa disciplinare strutturata.
- Questo slice definisce il contratto dati per colmare il gap, senza modificare runtime, contenuti o validatore.

## Modello di riferimento

```
Fonti → Analisi disciplinare → Mappa disciplinare → Nodi → Legami → Competenze → Decisioni curricolari → Curricolo → Documenti
```

## Contratto: `cml-disciplinary-knowledge-map-v1`

### Estensione retrocompatibile

Il contratto si applica come estensione opzionale ai file `*.normalized.json` esistenti.
I campi radice aggiunti sono **facoltativi**.
L’assenza di nuovi campi non invalida il file rispetto al contratto base `cml-normalized-curriculum-v1`.

### Gerarchia `nucleo` / `nucleoFondante` / `nodiDisciplinari`

| Campo              | Status                       | Ruolo                                                                                         |
| ------------------ | ---------------------------- | --------------------------------------------------------------------------------------------- |
| `nucleo`           | Accettato (retrocompatibile) | Denominazione legacy per il nucleo fondante della disciplina                                  |
| `nucleoFondante`   | Raccomandato                 | Denominazione canonical per il nucleo fondante della disciplina                               |
| `nodiDisciplinari` | Nuovo (facoltativo)          | Array di nodi strutturati che decomporrono il nucleo in elementi epistemologici e sostanziali |

Regola: un file può usare `nucleo` oppure `nucleoFondante`, ma non entrambi (warning nel validatore CML-119B). L’adozione di `nucleoFondante` è la raccomandazione contrattuale per i nuovi file.

### Campi radice facoltativi

Tutti i campi sono aggiunti al livello radice del file JSON, accanto a `schemaVersion`, `disciplina`, `unitaApprendimento`, ecc.

#### 1. `statutoEpistemologico`

- **Tipo**: `string`
- **Descrizione**: definisce la natura della disciplina come campo di conoscenza (es. "scienza storica", "scienza sperimentale", "linguistica", "logica matematica").
- **Obbligo**: nessuno.
- **Esempio**: `"Scienza storica che indaga le trasformazioni delle società umane nel tempo"`

#### 2. `naturaDisciplina`

- **Tipo**: `string`
- **Descrizione**: sintetizza il posizionamento istituzionale e culturale della disciplina nel curricolo.
- **Obbligo**: nessuno.
- **Esempio**: `"Area storico-geografica, curricolo verticale Infanzia–Secondaria"`

#### 3. `sintassiDisciplinare`

- **Tipo**: `string`
- **Descrizione**: descrive il linguaggio, i simboli, i metodi caratteristici della disciplina.
- **Obbligo**: nessuno.
- **Esempio**: `"Uso di fonti primarie, cronologia, cartografia, concettualizzazione storica"`

#### 4. `struttureSostanziali`

- **Tipo**: `array<object>`
- **Struttura oggetto**:
  - `id`: `string` (obbligatorio)
  - `nome`: `string` (obbligatorio)
  - `descrizione`: `string` (obbligatorio)
  - `fonte`: `string` (obbligatorio) — riferimento a documento curricolare o analisi disciplinare
- **Descrizione**: elementi concettuali, metodologici o procedurali caratteristici della disciplina.
- **Obbligo**: nessuno.
- **Esempio**:
  ```json
  [
    {
      "id": "stru_001",
      "nome": "Analisi storico-critica delle fonti",
      "descrizione": "Capacità di selezionare, interpretare e contestualizzare documenti storici",
      "fonte": "DM 254/2012, Traguardi competenze storiche"
    }
  ]
  ```

#### 5. `saperiEssenziali`

- **Tipo**: `array<object>`
- **Struttura oggetto**:
  - `id`: `string` (obbligatorio)
  - `etichetta`: `string` (obbligatorio)
  - `descrizione`: `string` (obbligatorio)
  - `fonte`: `string` (obbligatorio)
- **Descrizione**: sottoinsieme dei saperi considerati imprescindibili per la disciplina, esplicitati come mediazione culturale.
- **Obbligo**: nessuno.
- **Esempio**:
  ```json
  [
    {
      "id": "sap_001",
      "etichetta": "Mutuo scambio tra culture",
      "descrizione": "Comprendere come le culture si influenzano reciprocamente attraverso i secoli",
      "fonte": "DM 254/2012, Traguardo 3"
    }
  ]
  ```

#### 6. `nodiDisciplinari`

- **Tipo**: `array<object>`
- **Struttura oggetto**:
  - `id`: `string` (obbligatorio)
  - `etichetta`: `string` (obbligatorio)
  - `tipo`: `string` (obbligatorio) — valori: `epistemologico`, `sostanziale`, `metodologico`, `procedurale`, `concettuale`
  - `descrizione`: `string` (obbligatorio)
  - `fonte`: `string` (obbligatorio)
  - `legami`: `array<string>` (facoltativo) — elenco di `id` di altri nodi
- **Descrizione**: decomposizione strutturata del nucleo fondante in nodi epistemologici e sostanziali.
- **Obbligo**: nessuno.
- **Esempio**:
  ```json
  [
    {
      "id": "nod_001",
      "etichetta": "Fatto storico come costruzione interpretativa",
      "tipo": "epistemologico",
      "descrizione": "Il fatto storico non è un dato immediato ma una costruzione fondata su fonti e interpretazioni",
      "fonte": "Analisi disciplinare dipartimento storico-letterario (2024)",
      "legami": ["nod_002", "nod_003"]
    }
  ]
  ```

#### 7. `legamiInterdisciplinari`

- **Tipo**: `array<object>`
- **Struttura oggetto**:
  - `id`: `string` (obbligatorio)
  - `disciplinaRiferimento`: `string` (obbligatorio)
  - `nodoRiferimento`: `string` (obbligatorio) — ID del nodo nella disciplina di riferimento (esterno)
  - `tipoLegame`: `string` (obbligatorio) — valori: `affinita`, `contrapposizione`, `ponte`, `integrazione`, `sequenza`
  - `motivazione`: `string` (obbligatorio) — perché esiste il legame
  - `fonte`: `string` (obbligatorio)
- **Descrizione**: collegamenti espliciti tra nodi di questa disciplina e nodi di altre discipline.
- **Obbligo**: nessuno.
- **Esempio**:
  ```json
  [
    {
      "id": "leg_001",
      "disciplinaRiferimento": "Filosofia",
      "nodoRiferimento": "filos_001",
      "tipoLegame": "ponte",
      "motivazione": "La comprensione del concetto di «tempo storico» richiede la riflessione filosofica sulla categoria del tempo",
      "fonte": "Collegio docenti, riunione 2024-05-15"
    }
  ]
  ```

#### 8. `competenzeChiaveEuropee`

- **Tipo**: `array<object>`
- **Struttura oggetto**:
  - `id`: `string` (obbligatorio)
  - `etichetta`: `string` (obbligatorio)
  - `descrizione`: `string` (obbligatorio)
  - `riferimentoQuadro`: `string` (facoltativo) — es. "Raccomandazione 2006/962/CE"
  - `nodiCollegati`: `array<string>` (facoltativo) — ID di `nodiDisciplinari`
- **Descrizione**: mappatura delle competenze chiave europee esplicitamente riferite alla disciplina.
- **Obbligo**: nessuno.
- **Esempio**:
  ```json
  [
    {
      "id": "cke_001",
      "etichetta": "Competenza alfabetica funzionale",
      "descrizione": "Capacità di leggere, interpretare e produrre testi storici e geografici",
      "riferimentoQuadro": "Raccomandazione 2006/962/CE, Allegato I, Sez. 1",
      "nodiCollegati": ["nod_002"]
    }
  ]
  ```

#### 9. `progressioneVerticale`

- **Tipo**: `array<object>`
- **Struttura oggetto**:
  - `id`: `string` (obbligatorio)
  - `ordine`: `string` (obbligatorio) — valori: `Infanzia`, `Primaria`, `Secondaria`
  - `classe`: `string` (obbligatorio, tranne Infanzia)
  - `fascia`: `string` (obbligatorio per Infanzia)
  - `descrizioneProgressione`: `string` (obbligatorio)
  - `nodiRiferimento`: `array<string>` (facoltativo) — ID di `nodiDisciplinari`
  - `fonte`: `string` (obbligatorio)
- **Descrizione**: descrive come i nodi disciplinari si sviluppano verticalmente attraverso i gradi.
- **Obbligo**: nessuno.
- **Esempio**:
  ```json
  [
    {
      "id": "pve_001",
      "ordine": "Primaria",
      "classe": "5",
      "descrizioneProgressione": "Dalla cronologia lineare alla periodizzazione complessa",
      "nodiRiferimento": ["nod_001"],
      "fonte": "DM 254/2012, Traguardo 5"
    }
  ]
  ```

#### 10. `decisioniCurricolari`

- **Tipo**: `array<object>`
- **Struttura oggetto**:
  - `id`: `string` (obbligatorio)
  - `tipo`: `string` (obbligatorio) — valori: `inclusione`, `esclusione`, `enfasi`, `riduzione`, `estensione`, `integrazione`
  - `nodiRiferimento`: `array<string>` (facoltativo) — ID di `nodiDisciplinari`
  - `unitaRiferimento`: `array<string>` (facoltativo) — ID di `unitaApprendimento`
  - `motivazione`: `string` (obbligatorio)
  - `stato`: `string` (obbligatorio) — valore fisso: `"da_validare"` (nessuna approvazione automatica)
  - `fonte`: `string` (obbligatorio)
- **Descrizione**: decisioni esplicite sui contenuti curricolari, sempre in stato `da_validare`.
- **Obbligo**: nessuno.
- **Esempio**:
  ```json
  [
    {
      "id": "dec_001",
      "tipo": "inclusione",
      "nodiRiferimento": ["nod_001"],
      "unitaRiferimento": ["sto_pri_5_001"],
      "motivazione": "Il contributo mediterraneo alla formazione europea è presente nel curricolo 2025 ma assente nel 2012",
      "stato": "da_validare",
      "fonte": "DM 221/2025, Allegato A, Sez. 3"
    }
  ]
  ```

### Regole di non inventazione contenuti

1. Ogni `nodo`, `legame`, `strutturaSostanziale`, `sapereEssenziale`, `progressioneVerticale` e `decisioneCurricolare` deve avere un campo `fonte` valorizzato.
2. Se la fonte è un’analisi interna, il formato deve essere: `"Analisi disciplinare dipartimento <nome> (<data>)"`.
3. Se la fonte è un documento ufficiale, il formato deve includere almeno: `"DM <numero>/<anno>[, sezione/titolo]"`.
4. Le `decisioniCurricolari` hanno sempre `stato: "da_validare"` — il sistema non approva automaticamente.
5. Nessun campo può contenere testo generico tipo "TBD", "da definire", "inserire qui". Se il contenuto non è disponibile, l’intero campo (o l’intero array) non è incluso.

### Impatto sul validatore CML-119B

- Il validatore esistente (`tools/validate-cml-normalized-curriculum.mjs`) non viene modificato in questo slice.
- I nuovi campi sono **facoltativi** — la loro assenza non genera errori.
- Qualora i nuovi campi siano presenti, il validatore CML-119D (o successivi) applicherà regole specifiche.
- La retrocompatibilità è preservata: tutti i file esistenti rimangono `valid: true`.

## Piano di normalizzazione pilota (CML-119D)

CML-119D applicherà questo contratto a 2–3 discipline pilota, preferendo:

1. Tecnologia (già esempio di riferimento, privo di warning `nucleo`/`nucleoFondante`)
2. Scienze o Italiano (contesti epistemologici ben definiti)
3. Una disciplina con warning `nucleo`/`nucleoFondante` (es. Geografia o Inglese)

Obiettivi CML-119D:

- Arricchire i file selezionati con i campi facoltativi del contratto.
- Verificare che il validatore CML-119B continui a dichiararli validi.
- Documentare ogni inserimento con fonte esplicita.

## Vincoli rispettati

- ✅ Nessuna modifica a `_published_snapshot/netlify-current/index.html`
- ✅ Nessuna modifica runtime
- ✅ Nessuna modifica export/import
- ✅ Nessuna modifica schema `.cml`
- ✅ Nessuna modifica contenuti JSON
- ✅ Nessuna modifica validatore in questo slice
- ✅ Nessun backend, API, persistenza, login, autenticazione
- ✅ Nessun contenuto epistemologico inventato

## File modificati/creati in questo slice

- `docs/03_execution/CML-119C.md`
- `report/CML-119C_disciplinary_knowledge_map_data_contract.md`
- `docs/REPO-MOVELOG.md`

## Verdetto

```text
CML_119C_DISCIPLINARY_KNOWLEDGE_MAP_DATA_CONTRACT_READY
```
