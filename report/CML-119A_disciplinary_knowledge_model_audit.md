# Report CML-119A: Disciplinary Knowledge Model Audit

## Riepilogo

Audit completo del modello dati disciplinare esistente. Verificati tutti i file `content/curriculum/*.normalized.json` (7 discipline, 96 unità totali). Il modello attuale copre bene la struttura base (`unitaApprendimento`) ma manca di campi per mappa disciplinare epistemologica (nodi, legami, progressione verticale strutturata, competenze chiave europee, decisioni aggregate). Il validatore è mono-disciplina. Proposto modello dati minimo estensibile e roadmap CML-119B/C/D.

## File Analizzati

| File                         | Disciplina | Unità | Infanzia          | Primaria       | Secondaria     | Classi/Fasce |
| ---------------------------- | ---------- | ----- | ----------------- | -------------- | -------------- | ------------ |
| `tecnologia.normalized.json` | Tecnologia | 13    | 2 (fascie 3-4, 5) | 4 (classi 1-5) | 7 (classi 1-3) | 13           |
| `italiano.normalized.json`   | Italiano   | 14    | 3 (fascie 3-4, 5) | 5 (classi 1-5) | 6 (classi 1-3) | 14           |
| `matematica.normalized.json` | Matematica | 13    | 1 (fascia 5)      | 5 (classi 1-5) | 7 (classi 1-3) | 13           |
| `scienze.normalized.json`    | Scienze    | 15    | 2 (fascie 5)      | 5 (classi 1-5) | 8 (classi 1-3) | 15           |
| `inglese.normalized.json`    | Inglese    | 12    | 1 (fascia 5)      | 5 (classi 1-5) | 6 (classi 1-3) | 12           |
| `storia.normalized.json`     | Storia     | 15    | 1 (fascia 5)      | 5 (classi 1-5) | 9 (classi 1-3) | 15           |
| `geografia.normalized.json`  | Geografia  | 14    | 1 (fascia 5)      | 5 (classi 1-5) | 8 (classi 1-3) | 14           |

**Totale: 96 unità, 7 discipline, 11 unità Infanzia, 30 Primaria, 55 Secondaria.**

## Campi Presenti vs Campi Teorici

### Campi presenti (in ogni unità)

- Identificazione: `id`, `disciplina`, `ordine`, `classe`, `fascia`
- Contenuto: `ambito`, `nucleo` (dove presente), `competenza`, `traguardo`
- Dettaglio: `obiettivi`, `conoscenze`, `abilita`, `evidenze`, `criteriValutazione`
- Metadati: `fonte`, `stato`, `validazioneUmana`, `noteDipartimento`

### Campi teorici richiesti — Gap

| Campo teorico                    | Presente?    | Note                                                                 |
| -------------------------------- | ------------ | -------------------------------------------------------------------- |
| Statuto epistemologico           | ❌           | Richiede testo teorico specifico                                     |
| Natura/organizzazione disciplina | ❌           | Solo `metaDisciplinare` in geografia (a livello file)                |
| Sintassi disciplinare            | ❌           | Non modellizzata                                                     |
| Strutture sostanziali            | ❌           | Non modellizzate                                                     |
| Idee chiave                      | ❌           | Non modellizzate                                                     |
| Concetti fondamentali            | ⚠️ Parziale  | `ambito`/`nucleo` li esprimono implicitamente                        |
| Saperi essenziali                | ⚠️ Parziale  | `conoscenze`/`abilita` li contengono, ma non raggruppati             |
| Nodi disciplinari                | ⚠️ Parziale  | `nucleo` è il minimo, ma senza struttura ad albero                   |
| Legami interdisciplinari         | ❌           | Non modellizzati                                                     |
| Progressione verticale           | ⚠️ Implicita | Derivable da `ordine`/`classe`/`fascia`, ma non come campo esplicito |
| Competenze chiave europee        | ❌           | Solo riferimento a QCER in `fonte` (inglese)                         |
| Decisioni curricolari            | ❌           | A livello di unità in runtime, non aggregate per mappa               |

## Incongruenze Rilevate

### 1. `nucleo` vs `nucleoFondante`

- **Contratto CML-061**: campo obbligatorio `nucleoFondante`
- **Implementazione JSON**: campo `nucleo` (tranne Tecnologia)
- **Impatto**: il validatore `validate-cml-normalized-curriculum.mjs` verifica `nucleoFondante` ma nei JSON c'è `nucleo`. Il validatore attuale NON rileva questa discrepanza perché verifica solo Tecnologia (che non ha `nucleo`).

### 2. Tecnologia senza `nucleo`

- Tutte le discipline eccetto Tecnologia hanno `nucleo`
- Tecnologia ha solo `ambito`
- **Impatto**: Tecnologia non è mappabile per nodi disciplinari allo stesso livello delle altre

### 3. `metaDisciplinare` solo in geografia

- Geografia: `"metaDisciplinare": "Storico-sociale"`
- Nessun'altra disciplina lo ha
- **Impatto**: classificazione transdisciplinare non uniforme

### 4. Campi contratto assenti nei JSON

- `propostaIN2025`: definito in CML-061, ma non presente come field dedicato
- `decisione`, `motivazione`, `dataCreazione`, `dataModifica`, `autore`: definiti in CML-061, assenti nei JSON di contenuto (presenti solo in runtime)

## Validatore Attuale

**File:** `tools/validate-cml-normalized-curriculum.mjs`

| Caratteristica                     | Stato                                                       |
| ---------------------------------- | ----------------------------------------------------------- |
| Mono-disciplina                    | ✅ Sì, hardcoded su `tecnologia.normalized.json`            |
| Multi-disciplina                   | ❌ No                                                       |
| Verifica campi obbligatori         | ✅ Sì (`REQUIRED_FIELDS`)                                   |
| Verifica ordini/classi             | ✅ Sì (`VALID_ORDERS`, classi 1-5 Primaria, 1-3 Secondaria) |
| Verifica stati                     | ✅ Sì (`VALID_STATES`)                                      |
| Verifica `validazioneUmana`        | ✅ Sì                                                       |
| Verifica legami interdisciplinari  | ❌ No                                                       |
| Verifica nodi disciplinari         | ❌ No                                                       |
| Verifica progressione verticale    | ❌ No                                                       |
| Verifica coerenza multi-disciplina | ❌ No                                                       |
| Output multi-disciplina            | ❌ No                                                       |

**Conclusione:** Il validatore è mono-disciplina, non costruisce mappe, non verifica relazioni tra discipline.

## Il Modello Attuale Consente una Mappa Disciplinare?

### Si, parzialmente

- **Progressione verticale**: derivabile da `ordine` + `classe` + `fascia`
- **Nodi minimi**: derivabili da `ambito` + `nucleo` (dove presente)
- **Legami impliciti**: rilevabili da `fonte` (es. Agenda 2030, D.M. 221/2025)
- **Competenze chiave**: aggregabili da `competenza` + `traguardo`

### No, per i campi epistemologici

- **Statuto epistemologico**: richiede testo teorico specifico
- **Sintassi disciplinare**: richiede analisi del linguaggio specifico non strutturata
- **Strutture sostanziali**: richiedono definizione formale
- **Legami strutturati**: non esistono link espliciti tra unità di discipline diverse
- **Decisioni aggregate**: le decisioni sono per unità, non per mappa

## Proposta Modello Dati Minimo

### Schema: `cml-disciplinare-v1`

Estende i file esistenti con campi facoltativi in radice. Non modifica `unitaApprendimento`.

```json
{
  "schemaVersion": "cml-disciplinare-v1",
  "disciplina": "Matematica",
  "metaDisciplinare": "STEM",
  "statutoEpistemologico": {
    "definizione": "...",
    "natura": "...",
    "organizzazione": "..."
  },
  "nodiDisciplinari": [
    {
      "id": "mat_nuc_001",
      "nome": "Numeri",
      "tipo": "nucleo_fondante",
      "descrizione": "...",
      "concettiChiave": ["numeri naturali", "frazioni", "decimali"],
      "saperiEssenziali": ["sistema di numerazione", "notazione posizionale"],
      "unitaCollegate": ["mat_pri_1_001", "mat_sec_1_001"],
      "progressione": {
        "Infanzia": "contare fino a 10",
        "Primaria": "numeri naturali, frazioni",
        "Secondaria": "numeri razionali, decimali, percentuali"
      }
    }
  ],
  "legamiInterdisciplinari": [
    {
      "id": "mat_sci_001",
      "disciplinaDestinazione": "Scienze",
      "nodoDestinazione": "Metodo scientifico",
      "tipoLegame": "metodo_condiviso",
      "descrizione": "Il metodo sperimentale condiviso",
      "unitaCollegate": ["mat_pri_1_004", "sci_pri_3_001"]
    }
  ],
  "competenzeChiaveEuropee": [
    {
      "id": "keyComp_1",
      "nome": "Competenza matematica",
      "descrizione": "...",
      "unitaCollegate": ["mat_pri_1_001"]
    }
  ],
  "decisioniCurricolari": [
    {
      "id": "dec_001",
      "voce": "mat_pri_5_001",
      "decisione": "approvata",
      "motivazione": "...",
      "data": "2026-06-24"
    }
  ],
  "unitaApprendimento": [...]
}
```

## Prossimi Incrementi

| Slice        | Tipo    | Descrizione                                                                                                     |
| ------------ | ------- | --------------------------------------------------------------------------------------------------------------- |
| **CML-119B** | Runtime | VALIDATORE_MULTI_DISCIPLINA — estende validatore per tutti i file JSON, verifica coerenza, legami, progressione |
| **CML-119C** | Docs    | CONTRATTO_DATI_MAPPA_DISCIPLINARE — schema `cml-disciplinare-v1`, regole, esempi                                |
| **CML-119D** | Runtime | NORMALIZZAZIONE_PROGRESSIVA — compila mappe per 2-3 discipline pilota                                           |

## File Coinvolti

- `content/curriculum/*.normalized.json` — 7 file, letti
- `tools/validate-cml-normalized-curriculum.mjs` — validatore mono-disciplina
- `docs/02_system/NORMALIZED-CURRICULUM-DATA-CONTRACT.md` — contratto CML-061
- `docs/02_system/PRODUCT-MODEL-CURRICULUM-DIDATTICA-CONTRACT.md` — contratto CML-065

## Validazioni

- `git status --short --branch`: invariato (audit-only)
- Nessuna modifica runtime
- Nessuna modifica contenuti disciplinari
- Nessuna modifica schema .cml o export/import

## Verdetto

```text
CML_119A_DISCIPLINARY_KNOWLEDGE_MODEL_AUDIT_READY
```
