# Report CML-119C: Disciplinary Knowledge Map Data Contract

## Riepilogo
Definito il contratto dati `cml-disciplinary-knowledge-map-v1` come estensione retrocompatibile dei file `*.normalized.json`. Il contratto specifica 10 campi radice facoltativi, chiarisce la gerarchia `nucleo` / `nucleoFondante` / `nodiDisciplinari`, stabilisce regole di non inventazione contenuti e prepara il terreno per CML-119D (normalizzazione pilota su 2–3 discipline).

## Contratto definito: `cml-disciplinary-knowledge-map-v1`

### Struttura generale
- **Tipo**: estensione JSON ai file `*.normalized.json` esistenti
- **Compatibilità**: retrocompatibile — tutti i campi sono facoltativi
- **Impatto sul validatore CML-119B**: nessuno (non modificato in questo slice)

### Campi radice definiti

| # | Campo | Tipo | Obbligo | Scopo |
|---|-------|------|---------|-------|
| 1 | `statutoEpistemologico` | `string` | facoltativo | Natura epistemologica della disciplina |
| 2 | `naturaDisciplina` | `string` | facoltativo | Posizionamento istituzionale e culturale |
| 3 | `sintassiDisciplinare` | `string` | facoltativo | Linguaggio, simboli, metodi caratteristici |
| 4 | `struttureSostanziali` | `array<object>` | facoltativo | Elementi concettuali/metodologici/procedurali |
| 5 | `saperiEssenziali` | `array<object>` | facoltativo | Saperi imprescindibili come mediazione culturale |
| 6 | `nodiDisciplinari` | `array<object>` | facoltativo | Decomposizione nucleo in nodi epistemologici/sostanziali |
| 7 | `legamiInterdisciplinari` | `array<object>` | facoltativo | Collegamenti tra nodi di discipline diverse |
| 8 | `competenzeChiaveEuropee` | `array<object>` | facoltativo | Mappatura competenze chiave UE |
| 9 | `progressioneVerticale` | `array<object>` | facoltativo | Sviluppo verticale dei nodi per ordine/classe |
| 10 | `decisioniCurricolari` | `array<object>` | facoltativo | Decisioni esplicite, sempre `da_validare` |

### Schema oggetti principali

#### `nodiDisciplinari[]`
```json
{
  "id": "string",
  "etichetta": "string",
  "tipo": "epistemologico|sostanziale|metodologico|procedurale|concettuale",
  "descrizione": "string",
  "fonte": "string",
  "legami": ["id_nodo", "..."]
}
```

#### `legamiInterdisciplinari[]`
```json
{
  "id": "string",
  "disciplinaRiferimento": "string",
  "nodoRiferimento": "string",
  "tipoLegame": "affinita|contrapposizione|ponte|integrazione|sequenza",
  "motivazione": "string",
  "fonte": "string"
}
```

#### `decisioniCurricolari[]`
```json
{
  "id": "string",
  "tipo": "inclusione|esclusione|enfasi|riduzione|estensione|integrazione",
  "nodiRiferimento": ["id_nodo"],
  "unitaRiferimento": ["id_unita"],
  "motivazione": "string",
  "stato": "da_validare",
  "fonte": "string"
}
```

### Gerarchia `nucleo` / `nucleoFondante` / `nodiDisciplinari`

| Campo | Status | Ruolo |
|-------|--------|-------|
| `nucleo` | Accettato (retrocompatibile) | Denominazione legacy |
| `nucleoFondante` | Raccomandato | Denominazione canonical |
| `nodiDisciplinari` | Nuovo (facoltativo) | Decomposizione strutturata del nucleo |

Regola: non usare entrambi `nucleo` e `nucleoFondante` nello stesso file. Il validatore CML-119B segnala warnings in caso di ambiguità.

### Regole di non inventazione contenuti
1. Ogni nodo/legame/struttura/sapere/progressione/decisione deve avere `fonte` valorizzata.
2. Fonti interne: `"Analisi disciplinare dipartimento <nome> (<data>)"`
3. Fonti ufficiali: `"DM <numero>/<anno>[, sezione/titolo]"`
4. Decisioni curricolari: `stato` sempre `"da_validare"` (nessuna approvazione automatica).
5. Divieto di placeholder generici (`TBD`, `da definire`, `inserire qui`). Se il contenuto non è disponibile, il campo non è incluso.

## Piano di normalizzazione pilota (CML-119D)
Discipline candidate:
1. Tecnologia (privo di warning, contesto epistemologico chiaro)
2. Scienze o Italiano (epistemologie consolidate)
3. Geografia o Inglese (presentano warning `nucleo`/`nucleoFondante`)

Obiettivi CML-119D:
- Applicare il contratto ai file selezionati
- Verificare validatore CML-119B (exit 0)
- Documentare ogni inserimento con fonte esplicita

## Vincoli rispettati
- ✅ Nessuna modifica runtime
- ✅ Nessuna modifica export/import
- ✅ Nessuna modifica schema `.cml`
- ✅ Nessuna modifica contenuti JSON
- ✅ Nessuna modifica validatore
- ✅ Nessun backend/API/persistenza/login/autenticazione
- ✅ Nessun contenuto epistemologico inventato
- ✅ Modalità docs-only/contract-only

## Prossimo incremento
**CML-119D — DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION**
- Applicare `cml-disciplinary-knowledge-map-v1` a 2–3 discipline
- Verificare retrocompatibilità con validatore CML-119B

## Verdetto
```text
CML_119C_DISCIPLINARY_KNOWLEDGE_MAP_DATA_CONTRACT_READY
```
