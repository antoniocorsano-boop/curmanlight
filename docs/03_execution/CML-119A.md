# CML-119A — DISCIPLINARY_KNOWLEDGE_MODEL_AUDIT

## Contesto

- Slice precedente: `CML_118_COMPETENZE_E_PROGETTAZIONE_CONTENT_REFOCUS_AUDIT_READY`
- CML-118 ha definito il contenuto target di **Competenze e progettazione** e proposto CML-119 come primo incremento.
- Documento teorico di riferimento richiede: _analisi disciplinare, statuto epistemologico, sintassi, strutture sostanziali, concetti chiave, saperi essenziali, legami, sviluppo longitudinale_.

## Obiettivi

1. Verificare tutti i file `content/curriculum/*.normalized.json`.
2. Elencare discipline, unità, ordini, classi.
3. Verificare i campi oggi presenti.
4. Verificare se esistono campi per modello teorico richiesto.
5. Verificare se il modello attuale consente una mappa disciplinare senza inventare contenuti.
6. Verificare il validatore attuale (mono-disciplina? multi-disciplina?).
7. Proporre modello dati minimo per `disciplinaryKnowledgeMap`.
8. Proporre prossimi incrementi: CML-119B, CML-119C, CML-119D.

## Stato Attuale

### File e copertura

| File                         | Disciplina       | Unità        | Infanzia | Primaria | Secondaria | Totale |
| ---------------------------- | ---------------- | ------------ | -------- | -------- | ---------- | ------ |
| `tecnologia.normalized.json` | Tecnologia       | 13           | 2        | 4        | 7          | 13     |
| `italiano.normalized.json`   | Italiano         | 14           | 3        | 5        | 6          | 14     |
| `matematica.normalized.json` | Matematica       | 13           | 1        | 5        | 7          | 13     |
| `scienze.normalized.json`    | Scienze          | 15           | 2        | 5        | 8          | 15     |
| `inglese.normalized.json`    | Inglese          | 12           | 1        | 5        | 6          | 12     |
| `storia.normalized.json`     | Storia           | 15           | 1        | 5        | 9          | 15     |
| `geografia.normalized.json`  | Geografia        | 14           | 1        | 5        | 8          | 14     |
| **Totale**                   | **7 discipline** | **96 unità** | **11**   | **30**   | **55**     | **96** |

### Ordini e classi coperti

- **Infanzia**: fasce 3-4, 5 (tutte le discipline eccerto Latino e Seconda Lingua)
- **Primaria**: classi 1,2,3,4,5 (tutte le discipline)
- **Secondaria**: classi 1,2,3 (tutte le discipline)
- **Senza classi**: Latino (LEL), Seconda Lingua Comunitaria (non ancora normalizzate in file dedicati; presenti in index.html come contatori 14/0/0)

### Campi presenti in ogni unità

| Campo                | Tipo        | Note                                                                                              |
| -------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| `id`                 | string      | Formato `{disc}_{ordine}_{classe/fascia}_{seq}`                                                   |
| `disciplina`         | string      | Nome disciplina                                                                                   |
| `ordine`             | string      | `Infanzia` / `Primaria` / `Secondaria`                                                            |
| `classe`             | string/null | Numero classe o `null` per Infanzia                                                               |
| `fascia`             | string/null | `"3-4"` / `"5"` o `null`                                                                          |
| `ambito`             | string      | Ambito disciplinare                                                                               |
| `nucleo`             | string      | **Presente in italiano, matematica, scienze, storia, geografia, inglese. ASSENTE in tecnologia.** |
| `competenza`         | string      | Competenza specifica                                                                              |
| `traguardo`          | string      | Esito ampio progressivo                                                                           |
| `obiettivi`          | string[]    | Obiettivi operativi                                                                               |
| `conoscenze`         | string[]    | Saperi da acquisire                                                                               |
| `abilita`            | string[]    | Capacità applicative                                                                              |
| `evidenze`           | string[]    | Indicatori osservabili                                                                            |
| `criteriValutazione` | string[]    | Criteri valutazione formativa                                                                     |
| `fonte`              | string      | Riferimento normativo                                                                             |
| `stato`              | string      | `ok` / `modifica` / `nuovo` / `eliminato`                                                         |
| `validazioneUmana`   | boolean     | Deve essere `true`                                                                                |
| `noteDipartimento`   | string      | Note dipartimento                                                                                 |

### Campi teorici richiesti — GAP ANALYSIS

| Campo teorico                                | Presente?    | Dove / Come                                                                                                                                   |
| -------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Statuto epistemologico**                   | ❌           | Mancante                                                                                                                                      |
| **Natura e organizzazione della disciplina** | ❌           | Mancante; solo `metaDisciplinare` in geografia (a livello file)                                                                               |
| **Sintassi disciplinare**                    | ❌           | Mancante                                                                                                                                      |
| **Strutture sostanziali**                    | ❌           | Mancante                                                                                                                                      |
| **Idee chiave**                              | ❌           | Mancante                                                                                                                                      |
| **Concetti fondamentali**                    | ⚠️ Parziale  | `ambito` e `nucleo` esprimono concetti, ma non come lista strutturata                                                                         |
| **Saperi essenziali**                        | ⚠️ Parziale  | `conoscenze` + `abilita` coprono i saperi, ma non raggruppati per nodo                                                                        |
| **Nodi disciplinari**                        | ⚠️ Parziale  | `nucleo` (dove presente) è l'equivalente minimo, ma senza struttura ad albero                                                                 |
| **Legami interdisciplinari**                 | ❌           | Mancante                                                                                                                                      |
| **Progressione verticale**                   | ⚠️ Implicita | `ordine` + `classe` + `fascia` definiscono la progressione, ma senza campo esplicito di collegamento tra ordini                               |
| **Competenze chiave europee**                | ❌           | Mancante; in `fonte` si cita QCER per inglese, ma senza field dedicato                                                                        |
| **Decisioni curricolari**                    | ❌           | Mancante a livello di mappa; le decisioni per unità sono in `stato` + `decisione` + `motivazione` dentro `index.html` (runtime), non nel JSON |

### Incongruenze rilevate

1. **`nucleo` vs `nucleoFondante`**:
   - Contratto CML-061 definisce `nucleoFondante`
   - Implementazione JSON usa `nucleo` (tranne Tecnologia, che ha solo `ambito`)
   - **Impatto**: il validatore CML-061 non verifica `nucleo` perché richiede `nucleoFondante`

2. **Tecnologia senza `nucleo`**:
   - Tutte le altre discipline hanno `nucleo`
   - Tecnologia ha solo `ambito`
   - **Impatto**: mappa disomogenea, Tecnologia non è mappabile per nodi

3. **`metaDisciplinare` solo in geografia**:
   - Geografia ha `"metaDisciplinare": "Storico-sociale"`
   - Nessun'altra disciplina lo ha
   - **Impatto**: classificazione non uniforme

4. **Campi contratto CML-061 assenti nei JSON**:
   - `propostaIN2025` (il campo esiste nel contratto, nei JSON è dentro `fonte` o nel testo, ma non come field dedicato in tutte le unità)
   - `decisione`, `motivazione`, `dataCreazione`, `dataModifica`, `autore` — presenti in runtime (index.html) ma non nei JSON di contenuto

### Validatore attuale

**File:** `tools/validate-cml-normalized-curriculum.mjs`

| Caratteristica                     | Stato                                             |
| ---------------------------------- | ------------------------------------------------- |
| Mono-disciplina                    | ✅ Sì — hardcoded su `tecnologia.normalized.json` |
| Multi-disciplina                   | ❌ No                                             |
| Verifica campi obbligatori         | ✅ Sì                                             |
| Verifica ordini/classi             | ✅ Sì                                             |
| Verifica stati                     | ✅ Sì                                             |
| Verifica `validazioneUmana`        | ✅ Sì                                             |
| Verifica legami interdisciplinari  | ❌ No                                             |
| Verifica nodi disciplinari         | ❌ No                                             |
| Verifica progressione verticale    | ❌ No                                             |
| Verifica competenze chiave europee | ❌ No                                             |
| Verifica coerenza multi-disciplina | ❌ No                                             |

**Conclusioni sul validatore:**

- È mono-disciplina per progettazione
- Non costruisce mappe
- Non verifica relazioni tra discipline
- Non produce output strutturato per `disciplinaryKnowledgeMap`

## Il modello attuale consente una mappa disciplinare senza inventare contenuti?

**Sì, parzialmente, ma con limiti:**

### Ciò che SI può derivare

1. **Progressione verticale**: da `ordine` + `classe` + `fascia` si può ricostruire la progressione per ogni disciplina
2. **Nodi disciplinari minimi**: da `ambito` + `nucleo` (dove presente) si può estrarre una mappa minimale
3. **Legami interdisciplinari impliciti**: da `fonte` si possono rilevare riferimenti comuni (es. Agenda 2030, Educazione Civica, D.M. 221/2025)
4. **Competenze chiave**: da `competenza` + `traguardo` si possono aggregare le competenze trasversali

### Ciò che NON si può derivare senza inventare

1. **Statuto epistemologico**: richiede testo teorico specifico per ogni disciplina
2. **Sintassi disciplinare**: richiede analisi del linguaggio specifico (es. "idee chiave" di matematica non sono esplicitate)
3. **Strutture sostanziali**: richiedono definizione formale (es. "nuclei" come nodi di un grafo)
4. **Legami strutturati**: non esistono link espliciti tra unità di discipline diverse
5. **Decisioni curricolari aggregate**: le decisioni sono per unità/revisione, non per mappa disciplinare

### Verdetto

Il modello attuale produce **dati sufficienti per una mappa minimale di progressione e nodi**, ma **non sufficienti per una mappa epistemologica completa**. Per costruire quest'ultima serve arricchimento documentale dedicato, non solo riorganizzazione dei dati esistenti.

## Proposta modello dati minimo per `disciplinaryKnowledgeMap`

### Principi

1. **Estensione, non sostituzione**: aggiunge campi ai file esistenti, non li modifica
2. **Nessun contenuto inventato**: i nuovi campi sono vuoti/null fino a compilazione umana
3. **Retrocompatibilità**: il validatore esistente continua a funzionare sui campi obbligatori
4. **Separazione**: la mappa è un oggetto separato da `unitaApprendimento`

### Schema proposto

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

### Campi della mappa

| Campo                                              | Tipo     | Obbligatorio | Note                                                              |
| -------------------------------------------------- | -------- | ------------ | ----------------------------------------------------------------- |
| `schemaVersion`                                    | string   | Sì           | `"cml-disciplinare-v1"`                                           |
| `disciplina`                                       | string   | Sì           | Come da `DISCIPLINE_META`                                         |
| `metaDisciplinare`                                 | string   | No           | Es. `"STEM"`, `"Storico-sociale"`, `"Linguistico"`                |
| `statutoEpistemologico`                            | object   | No           | `{definizione, natura, organizzazione}`                           |
| `nodiDisciplinari`                                 | array    | No           | Nodi della mappa                                                  |
| `nodiDisciplinari[].id`                            | string   | Sì           | Es. `"mat_nuc_001"`                                               |
| `nodiDisciplinari[].nome`                          | string   | Sì           | Nome del nodo                                                     |
| `nodiDisciplinari[].tipo`                          | string   | Sì           | `"nucleo_fondante"` / `"concetto_chiave"` / `"sapere_essenziale"` |
| `nodiDisciplinari[].concettiChiave`                | string[] | No           | Lista concetti fondamentali                                       |
| `nodiDisciplinari[].saperiEssenziali`              | string[] | No           | Lista saperi                                                      |
| `nodiDisciplinari[].unitaCollegate`                | string[] | No           | ID unità nel file                                                 |
| `nodiDisciplinari[].progressione`                  | object   | No           | `{Infanzia, Primaria, Secondaria}`                                |
| `legamiInterdisciplinari`                          | array    | No           | Collegamenti tra discipline                                       |
| `legamiInterdisciplinari[].id`                     | string   | Sì           |                                                                   |
| `legamiInterdisciplinari[].disciplinaDestinazione` | string   | Sì           |                                                                   |
| `legamiInterdisciplinari[].nodoDestinazione`       | string   | Sì           |                                                                   |
| `legamiInterdisciplinari[].tipoLegame`             | string   | Sì           | Es. `"metodo_condiviso"`, `"concetto_trasversale"`                |
| `legamiInterdisciplinari[].unitaCollegate`         | string[] | No           | ID unità coinvolte                                                |
| `competenzeChiaveEuropee`                          | array    | No           | Competenze chiave UE mappate                                      |
| `decisioniCurricolari`                             | array    | No           | Decisioni aggregate per disciplina                                |

### Perché questo modello è "minimo"

1. **Non forza contenuti**: tutti i nuovi campi sono facoltativi
2. **Non rompe il validatore esistente**: il validatore CML-061 continua a validare solo `unitaApprendimento`
3. **Nessun invento**: ogni campo è derivabile da dati esistenti o compilabile ex-novo
4. **Estensibile**: si può aggiungere `legamiInterdisciplinari` progressivamente senza modificare lo schema
5. **Multi-disciplina ready**: la struttura è pensata per essere letta da un validatore che accede a più file

## Prossimi incrementi proposti

### CML-119B — VALIDATORE_MULTI_DISCIPLINA

**Cosa include:**

- Estende il validatore attuale per leggere tutti i file `content/curriculum/*.normalized.json`
- Verifica coerenza tra discipline:
  - Tutte le discipline hanno `schemaVersion` corretta
  - Tutte le discipline coprono Infanzia/Primaria/Secondaria (dove previsto)
  - Nessuna unità ha `id` duplicato tra discipline
- Verifica integrità `nodiDisciplinari` e `legamiInterdisciplinari` (se presenti)
- Verifica che `unitaCollegate` nei nodi/legami referenzino ID esistenti
- Output: report multi-disciplina con coverage matrix

**Cosa NON include:**

- Modifica runtime
- Modifica schema .cml
- Nuovi contenuti disciplinari

### CML-119C — CONTRATTO_DATI_MAPPA_DISCIPLINARE

**Cosa include:**

- Documento `docs/02_system/DISCIPLINARY-KNOWLEDGE-MAP-CONTRACT.md`
- Definisce schema JSON completo per `cml-disciplinare-v1`
- Regole di compilazione per ogni campo
- Esempi per Matematica e Tecnologia
- Integrazione con contratto CML-061 esistente

**Cosa NON include:**

- Modifica runtime
- Normalizzazione contenuti

### CML-119D — NORMALIZZAZIONE_PROGRESSIVA_MAPPE_DISCIPLINARI

**Cosa include:**

- Normalizzazione della mappa disciplinare per le prime 2-3 discipline (es. Tecnologia, Matematica, Italiano)
- Compilazione `nodiDisciplinari` basandosi su `ambito`/`nucleo` esistenti
- Identificazione `legamiInterdisciplinari` minimi (es. Matematica-Scienze, Italiano-Storia)
- Compilazione `competenzeChiaveEuropee` per ogni disciplina

**Cosa NON include:**

- Tutte le discipline (approccio progressivo)
- Validatore runtime
- Export nuovi

## Non-obiettivi di CML-119A

- Modificare runtime
- Modificare `_published_snapshot/netlify-current/index.html`
- Modificare schema `.cml`
- Modificare contenuti disciplinari
- Introdurre persistenza, backend, API, login
- Rinominare sezioni runtime
- Aggiungere nodi o competenze inventati

## Verdetto

```text
CML_119A_DISCIPLINARY_KNOWLEDGE_MODEL_AUDIT_READY
```
