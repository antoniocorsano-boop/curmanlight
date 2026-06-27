# CML-186 - Seconda Lingua Comunitaria Limited Draft Data Prep

Data: 2026-06-27

## 1. Scopo

Creare il file normalizzato di Seconda Lingua Comunitaria come bozza limitata, language-neutral e non integrata runtime, autorizzata dalla selezione formale CML-185.

## 2. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `ba051ff` (allineato con `origin/main`) |
| Working tree iniziale | pulito |
| Dati normalizzati prima | 11/14 |
| Runtime mappa | 11/14 |
| Shape test | 11/11 PASS |
| Discipline completate | Tecnologia, Italiano, Matematica, Scienze, Storia, Geografia, Inglese, Educazione Civica, Arte e Immagine, Musica, Educazione Fisica |
| Discipline residue dopo | Religione Cattolica, Latino LEL |
| Skill usate | `cml-readiness-audit` |

## 3. Collegamento con CML-172, CML-185

- CML-172: exploratory cost model — costo basso, pattern Inglese reusabile, solo Secondaria.
- CML-185: residual discipline selection audit — disciplina selezionata per limited draft.
- CML-182B: `LIMITED_DRAFT_DATA_PREP_ALLOWED` — autorizzazione di principio.

## 4. Vincoli specifici

- Solo Secondaria (classi 1, 2, 3) — confermato da CML-109 (analisi copertura), nessuna Infanzia/Primaria.
- Language-neutral: nessuna lingua target specificata (no Francese, Spagnolo, Tedesco, ecc.).
- QCER A1 (classe 1) / A1+ (classe 2) / A2 (classe 3).
- `humanValidationRequired: true` su ogni unita.
- Pattern strutturale: Inglese normalized JSON (CML-098) ma adattato a prima L2.

## 5. Metodo di costruzione JSON

1. Lettura del reference Inglese (lingua affine per schema).
2. Solo Secondaria: 6 unita, 2 per classe, 6 nuclei linguistico-comunicativi progressivi.
3. Contenuti language-neutral: L2 generica, "paesi in cui si parla la L2", nessuna tradizione specifica.
4. Marcatori draft su ogni unita.
5. Lessico controllato: nessuna invenzione culturale, nessuna certificazione linguistica, nessun riferimento a lingue specifiche.

## 6. Pattern schema

- `schemaVersion: "cml-normalized-curriculum-v1"`
- `disciplina: "Seconda Lingua Comunitaria"`
- `stato: "bozza_generabile"`, `readiness: "in_revisione"`, `humanValidationRequired: true`
- `unitaApprendimento` array con campi standard: id, disciplina, ordine, classe, fascia, nucleo, ambito, competenza, traguardo, obiettivi, conoscenze, abilita, evidenze, criteriValutazione, fonte, stato, validazioneUmana, noteDipartimento
- `validazioneUmana: true` su ogni unita
- `stato: "nuovo"` su ogni unita
- ID pattern: `slc_sec_{classe}_{numero}`

## 7. File creato

`content/curriculum/seconda-lingua-comunitaria.normalized.json` — 6 unita, 6 nuclei, 1 ordine (Secondaria).

## 8. Sintesi contenuti

| ID | Classe | Nucleo | Livello QCER |
|---|---|---|---|
| slc_sec_1_001 | 1 | Ascolto e comprensione orale | A1 |
| slc_sec_1_002 | 1 | Produzione orale e interazione | A1 |
| slc_sec_2_001 | 2 | Lettura e comprensione scritta | A1/A1+ |
| slc_sec_2_002 | 2 | Produzione scritta | A1/A1+ |
| slc_sec_3_001 | 3 | Interazione e produzione orale | A1+/A2 |
| slc_sec_3_002 | 3 | Cultura e confronto interculturale | A1+/A2 |

## 9. Marcatori limited draft

| Marcatore | Valore |
|---|---|
| `humanValidationRequired` | `true` |
| `validazioneUmana` | `true` (ogni unita) |
| `stato` livello file | `bozza_generabile` |
| `stato` unita | `nuovo` |
| note dipartimento | Rinviano a CML-186, lingua target non specificata |

## 10. Validazioni eseguite

- Validatore curriculum: 12/12 file, overallValid true, 0 errori
- Shape test: 11/11 PASS (runtime invariato — Seconda Lingua Comunitaria NON integrata)
- `git diff --check`: PASS
- Credential scan: nessuna credenziale trovata

## 11. Verifica invarianti e limiti

| Invariante | Risultato |
|---|---|
| Runtime invariato (11/14) | OK |
| Shape test invariato (11/11 PASS) | OK |
| `tools/` non modificati | OK |
| Root `index.html` non modificato | OK |
| `.claude/` non modificato | OK |
| SchoolKB non modificato | OK |
| No deploy | OK |
| No push | OK |
| `humanValidationRequired: true` | OK |
| Language-neutral | OK |
| Solo Secondaria | OK |
| Nessuna credenziale/secret/token | OK |

## 12. Decisioni chiave

1. **Language-neutral**: la bozza non specifica una lingua target — sara compito del dipartimento scegliere Francese, Spagnolo, Tedesco o altra L2 e adattare i contenuti.
2. **Solo Secondaria**: conforme all'analisi CML-109; nessuna copertura forzata di Infanzia/Primaria.
3. **QCER A1/A2**: progressione realistica per prima L2 in Secondaria (partenza da zero).
4. **6 unita, 2 per classe**: copertura bilanciata senza eccesso di draft.

## 13. Prossima slice consigliata

CML-187 — prossima disciplina residua (Religione Cattolica o Latino LEL) o runtime integration per Seconda Lingua Comunitaria dopo validazione umana dipartimentale.

## 14. Verdict

`CML_186_SECONDA_LINGUA_COMUNITARIA_LIMITED_DRAFT_DATA_PREP_READY`
