# CML-184A - Runtime Shape Test Alignment

Data: 2026-06-27

## 1. Scopo

Allineare lo shape test `tools/test-runtime-mappa-dati-shape.mjs` alla copertura runtime 11/14 dopo l'integrazione di Educazione Fisica avvenuta in CML-184. Portare la copertura del test da 10/10 a 11/11.

## 2. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `12e698d` (allineato con `origin/main`) |
| Working tree iniziale | pulito |
| Verdict precedente | `CML_184_SYNC_CLOSED_REMOTE_WITH_SHAPE_SCOPE_NOTE` |
| Dati normalizzati | 11/14 |
| Runtime mappa | 11/14 |
| Shape test prima | 10/10 PASS |
| Skill usate | `cml-sync`, `cml-docs-only-slice`, `cml-readiness-audit` |

## 3. Collegamento con CML-184

| Aspetto | CML-184 | CML-184A |
|---|---|---|
| Runtime HTML | Modificato (EF integrato) | NON modificato |
| Shape test | NON modificato (scope vietato) | Modificato (EF aggiunto) |
| Copertura shape | 10/10 | 11/11 |
| Asimmetria runtime/shape | Si (11/14 vs 10/10) | No (11/14 vs 11/11) |
| Tools/ | Invariato | Solo shape test aggiornato |

## 4. Anomalia di copertura test

Dopo CML-184, il runtime includeva Educazione Fisica (11/14) ma lo shape test verificava solo 10 discipline. Questa asimmetria era documentata nello shape scope note di CML-184-SYNC.

## 5. Pattern shape test osservato

Il test `test-runtime-mappa-dati-shape.mjs`:
- Definisce un array `FILES` con i nomi dei JSON normalizzati da testare.
- Definisce un oggetto `EXPECTED_COUNTS` per conteggi esatti (opzionale).
- Esegue per ogni file il pipeline adapter → transformer, validando la struttura.
- Stampa PASS/FAIL per disciplina e un overall 10/10.

## 6. Modifica effettuata

File: `tools/test-runtime-mappa-dati-shape.mjs`

**FILES array**: aggiunto `'educazione-fisica.normalized.json'` dopo `'educazione-civica.normalized.json'`.

**EXPECTED_COUNTS**: aggiunto:
```
'educazione-fisica.normalized.json': { s: 7, n: 4, p: 7, d: 0 }
```

## 7. Educazione Fisica aggiunta alla copertura

| Misura | Valore |
|---|---|
| struttureSostanziali (S) | 7 |
| nodiDisciplinari (N) | 4 |
| progressioneVerticale (P) | 7 |
| decisioniCurricolari (D) | 0 |

## 8. Validatore JSON

11/11 file, 125 unità, overallValid true, 0 errori — invariato.

## 9. Shape test dopo allineamento

11/11 PASS:

```
Educazione Fisica: PASS — S=7 N=4 P=7 D=0
```
Tutte le altre 10 discipline: PASS invariato.

## 10. Runtime mappa confermata

11/14 — invariata da CML-184. Nessuna modifica runtime in CML-184A.

## 11. Cosa non è stato modificato

- `_published_snapshot/netlify-current/index.html`
- `content/curriculum/`
- Root `index.html`
- `.claude/`
- `CLAUDE.md`
- Altri file in `tools/`
- SchoolKB
- Schema `.cml`

## 12. Rischi residui

- Il test shape usa il pipeline adapter+transformer, non i dati runtime reali. Verifica la generabilità della MAPPA_DATI, non la presenza nel runtime. L'effettiva presenza runtime è stata verificata in CML-184 tramite grep delle tre modifiche (variabile, branch render, button).
- Le discipline non ancora integrate (Seconda Lingua Comunitaria, Religione Cattolica, Latino LEL) non sono coperte dal test.

## 13. Invarianti rispettate

- Runtime integration controllata: confermato.
- Educazione Fisica integrata runtime: confermato (da CML-184).
- Nessuna modifica a `_published_snapshot/netlify-current/index.html`: confermato.
- Nessuna modifica a `content/curriculum/`: confermato.
- Nessuna modifica a root `index.html`: confermato.
- Nessuna modifica `.claude/`: confermato.
- Nessuna modifica `CLAUDE.md`: confermato.
- Schema `.cml` invariato: confermato.
- Export/import invariati: confermato.
- Funzioni evidenze/UDA invariate: confermato.
- SchoolKB invariato: confermato.
- Nessuna credenziale/client ID/token: confermato.
- Nessuna dipendenza modificata: confermato.
- Nessun deploy: confermato.
- Nessun push: confermato.

## 14. Raccomandazione finale

CML-184A chiude l'asimmetria di copertura tra runtime e shape test. La prossima slice puo concentrarsi su una disciplina residua (Seconda Lingua Comunitaria, Religione Cattolica, Latino LEL) o su un incremento funzionale.

## 15. Verdetto finale

`CML_184A_RUNTIME_SHAPE_TEST_ALIGNMENT_READY` — commit locale senza push.
