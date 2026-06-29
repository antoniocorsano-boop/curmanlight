# CML-119D — DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION

## Contesto

- Slice precedente: `CML_119C_BIS_DISCIPLINARY_KNOWLEDGE_CONTENT_GOVERNANCE_AUDIT_READY`
- CML-119C-bis ha classificato i 10 campi del contratto `cml-disciplinary-knowledge-map-v1` in categorie di derivabilità e definito le regole di non inventazione.
- CML-119D applica il contratto a 3 discipline pilota: **Tecnologia**, **Matematica**, **Italiano**, rispettando rigorosamente la governance.

## Discipline normalizzate

### Tecnologia (`content/curriculum/tecnologia.normalized.json`)

- **Unità esistenti**: 13 (2 Infanzia, 4 Primaria, 7 Secondaria)
- **Campi aggiunti**:
  - `struttureSostanziali`: 6 elementi derivati da `ambito` esistenti
  - `progressioneVerticale`: 10 voci (2 Infanzia, 5 Primaria, 3 Secondaria)
  - `decisioniCurricolari`: 2 decisioni (`inclusione`) da `noteDipartimento`
- **Campi non aggiunti** (non derivabili senza inventazione):
  - `statutoEpistemologico`
  - `naturaDisciplina`
  - `sintassiDisciplinare`
  - `saperiEssenziali`
  - `nodiDisciplinari` (assenza di `nucleo` nel file)
  - `legamiInterdisciplinari`
  - `competenzeChiaveEuropee`
- **Allineamento `nucleo`/`nucleoFondante`**: non necessario (nessun `nucleo` presente)

### Matematica (`content/curriculum/matematica.normalized.json`)

- **Unità esistenti**: 13 (1 Infanzia, 5 Primaria, 7 Secondaria)
- **Campi aggiunti**:
  - `nodiDisciplinari`: 5 nodi derivati da `nucleo` esistenti (Numeri, Spazio e figure, Relazioni e funzioni, Informatica, Dati e previsioni)
  - `struttureSostanziali`: 12 elementi derivati da `ambito` esistenti
  - `progressioneVerticale`: 6 voci (1 Infanzia, 2 Primaria, 3 Secondaria)
  - `decisioniCurricolari`: 4 decisioni (3 `inclusione`, 1 `integrazione`) da `noteDipartimento`
- **Campi non aggiunti**:
  - `statutoEpistemologico`
  - `naturaDisciplina`
  - `sintassiDisciplinare`
  - `saperiEssenziali`
  - `legamiInterdisciplinari`
  - `competenzeChiaveEuropee`
- **Allineamento `nucleo`/`nucleoFondante`**: non necessario (già usa `nucleo`, retrocompatibile)

### Italiano (`content/curriculum/italiano.normalized.json`)

- **Unità esistenti**: 14 (3 Infanzia, 5 Primaria, 6 Secondaria)
- **Campi aggiunti**:
  - `nodiDisciplinari`: 6 nodi derivati da `nucleo` esistenti (Ascolto, Parlato, Lettura, Scrittura, Riflessione sulla lingua, Acquisizione lessico)
  - `struttureSostanziali`: 13 elementi derivati da `ambito` esistenti
  - `progressioneVerticale`: 12 voci (3 Infanzia, 5 Primaria, 4 Secondaria)
  - `decisioniCurricolari`: 4 decisioni (3 `inclusione`, 1 `estensione`) da `noteDipartimento`
- **Campi non aggiunti**:
  - `statutoEpistemologico`
  - `naturaDisciplina`
  - `sintassiDisciplinare`
  - `saperiEssenziali`
  - `legamiInterdisciplinari`
  - `competenzeChiaveEuropee`
- **Allineamento `nucleo`/`nucleoFondante`**: non necessario (già usa `nucleo`, retrocompatibile)

## Criteri rispettati

### Regole di non inventazione

1. ✅ Nessun campo è stato popolato senza fonte esplicita
2. ✅ Tutti i nuovi contenuti sono marcati `stato: "da_validare"` (dove previsto dal contratto)
3. ✅ `validazioneUmana: true` preservato su tutte le unità esistenti
4. ✅ Ogni nuovo elemento ha `fonte` documentata (riferimento a unità sorgente, IN2012, DM221/2025 o noteDipartimento)
5. ✅ Nessuna approvazione automatica: solo `da_validare`

### Retrocompatibilità

- `schemaVersion` rimane `cml-normalized-curriculum-v1`
- Tutti i campi esistenti sono preservati
- I nuovi campi sono facoltativi e non influenzano il validatore CML-119B

### Copertura

| Disciplina | Unità | Infanzia | Primaria | Secondaria | Nodi | Strutture | Progressioni | Decisioni |
| ---------- | ----- | -------- | -------- | ---------- | ---- | --------- | ------------ | --------- |
| Tecnologia | 13    | 2        | 4        | 7          | 0    | 6         | 10           | 2         |
| Matematica | 13    | 1        | 5        | 7          | 5    | 12        | 6            | 4         |
| Italiano   | 14    | 3        | 5        | 6          | 6    | 13        | 12           | 4         |

## Validazioni eseguite

- `node tools/validate-cml-normalized-curriculum.mjs` — **PASS** (7 file, 94 unità, overallValid: true)
- `git diff --check` — pulito
- Nessuna modifica a `_published_snapshot/netlify-current/index.html`
- Nessuna modifica runtime, export/import, schema `.cml`, validatore
- Solo 3 file JSON disciplinari modificati

## Note tecniche

### Tecnologia

- Nessun `nucleo` presente nel file originale: `nodiDisciplinari` non aggiunto per evitare inventazione.
- `struttureSostanziali` mappate 1:1 da `ambito` (6 ambiti unici).
- `decisioniCurricolari` formalizzate da `noteDipartimento` che già citano DM221/2025 e Agenda 2030.

### Matematica

- `nodiDisciplinari` estratti da `nucleo` esistenti (5 nuclei unici).
- `struttureSostanziali` mappate 1:1 da ogni `ambito` delle unità (12 ambiti, alcuni simili ma non unificati per evitare interpretazione).
- `decisioniCurricolari` includono riferimenti a DM221/2025 e Legge 92/2019, già presenti nelle fonti delle unità.

### Italiano

- `nodiDisciplinari` estratti da `nucleo` esistenti (6 nuclei unici).
- `struttureSostanziali` mappate 1:1 da ogni `ambito` delle unità (13 ambiti).
- `decisioniCurricolari` includono riferimenti a DM221/2025 (lettura integrale, centralità della norma), già presenti nelle fonti delle unità.

## Prossimi incrementi

- **CML-119E**: possibile estensione del validatore per controllare i nuovi campi del contratto
- **CML-119F**: normalizzazione delle restanti 4 discipline (Geografia, Inglese, Scienze, Storia)
- **CML-120+**: utilizzo della mappa disciplinare in nuove viste UI (dopo audit UX dedicata)

## Vincoli rispettati

- ✅ Nessuna modifica runtime
- ✅ Nessuna modifica UI
- ✅ Nessuna modifica export/import
- ✅ Nessuna modifica schema `.cml`
- ✅ Nessuna modifica validatore
- ✅ Nessun contenuto epistemologico inventato
- ✅ Nessuna persistenza, backend, API, autenticazione
- ✅ Solo 3 JSON disciplinari modificati

## Verdetto

```text
CML_119D_DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION_READY
```
