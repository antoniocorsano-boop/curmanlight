# CML-184A - RUNTIME_SHAPE_TEST_ALIGNMENT

Data: 2026-06-27

## Obiettivo

Allineare lo shape test runtime alla copertura 11/14 dopo l'integrazione di Educazione Fisica (CML-184). Prima: runtime 11/14, shape 10/10. Dopo: runtime 11/14, shape 11/11.

## Baseline

| Campo              | Valore                                             |
| ------------------ | -------------------------------------------------- |
| Repository         | `C:\Users\anton\CurManLight`                       |
| Branch             | `main`                                             |
| Commit iniziale    | `12e698d`                                          |
| origin/main        | `12e698d` (allineato post CML-184-SYNC)            |
| Working tree       | pulito                                             |
| Verdict precedente | `CML_184_SYNC_CLOSED_REMOTE_WITH_SHAPE_SCOPE_NOTE` |
| Dati normalizzati  | 11/14                                              |
| Runtime mappa      | 11/14                                              |
| Shape test prima   | 10/10 PASS                                         |
| Deploy             | non eseguito                                       |

## Collegamento con CML-184

CML-184 ha integrato Educazione Fisica nel runtime (`_published_snapshot/netlify-current/index.html`) portando il runtime da 10/14 a 11/14. Il test shape `tools/test-runtime-mappa-dati-shape.mjs` non è stato aggiornato per vincolo di scope, lasciando una asimmetria: runtime 11/14, shape 10/10. CML-184A chiude questa asimmetria.

## Problema iniziale

- Runtime mappa: 11/14 (Educazione Fisica integrata)
- Shape test: 10/10 PASS (Educazione Fisica non coperta)
- Tools/ volutamente invariato in CML-184

## Modifica effettuata

File: `tools/test-runtime-mappa-dati-shape.mjs`

1. Aggiunto `'educazione-fisica.normalized.json'` nell'array `FILES` (dopo `educazione-civica.normalized.json`).
2. Aggiunto expected count in `EXPECTED_COUNTS`: `{ s: 7, n: 4, p: 7, d: 0 }`.

Nessuna altra modifica al tool.

## Scope autorizzato

- `tools/test-runtime-mappa-dati-shape.mjs`
- `docs/03_execution/CML-184A.md`
- `report/CML-184A_runtime_shape_test_alignment.md`
- `docs/REPO-MOVELOG.md`

## Scope vietato

- `_published_snapshot/netlify-current/index.html`
- `content/curriculum/`
- Root `index.html`
- `.claude/`, `CLAUDE.md`
- SchoolKB
- deploy
- push

## Validazioni eseguite

- Validatore JSON: 11/11 PASS
- Shape test: 11/11 PASS (era 10/10)
- `git diff --check`: PASS
- Credential scan: nessuna credenziale nei file

## Risultato atteso conseguito

- Runtime mappa: 11/14 (confermata, invariata)
- Shape test: 11/11 PASS (+1: Educazione Fisica)
- Dati normalizzati: 11/14 (confermati, invariati)

## Prossima slice consigliata

CML-185 — altra disciplina residua (Seconda Lingua Comunitaria, Religione Cattolica, Latino LEL) o prossimo incremento funzionale.

## Verdict locale

`CML_184A_RUNTIME_SHAPE_TEST_ALIGNMENT_READY`
