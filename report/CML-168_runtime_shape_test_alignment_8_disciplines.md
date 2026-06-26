# CML-168 — Runtime shape test alignment to 8 disciplines

Data: 2026-06-26

## 1. Scopo

Allineare `tools/test-runtime-mappa-dati-shape.mjs` alla copertura runtime effettiva (8/14), aggiungendo Educazione Civica al test.

## 2. Baseline tecnica

- Branch: `main`
- Commit iniziale: `a83c66e`
- origin/main: `a83c66e`
- Working tree iniziale: pulito (sync)

## 3. Esito CML-167

CML-167 ha integrato Educazione Civica nel runtime: 8/14 discipline, conteggi S=11 N=4 P=9 D=0, validatore curriculum PASS.

## 4. Problema rilevato

- Test shape hardcoded: 7/7 discipline (pre-CML-166)
- Runtime effettivo: 8/14 discipline
- Disallineamento: test non copriva Educazione Civica

## 5. Intervento effettuato

Aggiunta di `'educazione-civica.normalized.json'` alla lista `FILES` in `tools/test-runtime-mappa-dati-shape.mjs:19`.

## 6. Discipline coperte dal test dopo CML-168

1. Tecnologia
2. Italiano
3. Matematica
4. Scienze
5. Storia
6. Geografia
7. Inglese
8. **Educazione Civica** (aggiunta)

## 7. Esito validatore curriculum

- 8 file
- 105 unità
- overallValid: true
- 0 errori
- ✅

## 8. Esito shape runtime 8/8

| Disciplina | Esito |
|------------|:-----:|
| Tecnologia | PASS — S=6 N=6 P=10 D=2 |
| Italiano | PASS — S=12 N=6 P=10 D=4 |
| Matematica | PASS — S=12 N=5 P=6 D=4 |
| Scienze | PASS — S=15 N=5 P=9 D=0 |
| Storia | PASS — S=15 N=5 P=9 D=0 |
| Geografia | PASS — S=12 N=3 P=9 D=0 |
| Inglese | PASS — S=12 N=11 P=9 D=0 |
| **Educazione Civica** | **PASS — S=11 N=4 P=9 D=0** |
| **Totale** | **8/8 PASS** ✅ |

## 9. Conteggi Educazione Civica

| Campo | Valore |
|-------|:------:|
| struttureSostanziali | 11 |
| nodiDisciplinari | 4 |
| progressioneVerticale | 9 |
| decisioniCurricolari | 0 |

## 10. Verifica invarianti

- Runtime (`_published_snapshot/netlify-current/index.html`) — invariato ✅
- `content/curriculum/` — invariato ✅
- schema `.cml` — invariato ✅
- export/import — invariati ✅
- funzioni evidenze/UDA — invariate ✅
- service worker — invariato ✅
- dipendenze — nessuna introdotta ✅

## 11. Rischi residui

- Il test continua a basarsi sul pipeline adapter → transformer, non sulla variabile runtime effettiva. La coerenza tra la shape generata e la variabile runtime è garantita dal processo di integrazione manuale, non dal test.
- `D=0` per Educazione Civica: nessuna decisione curricolare ancora formulata.

## 12. Raccomandazione per CML-169

- Formulare le prime decisioni curricolari per Educazione Civica
- Oppure normalizzare la prossima disciplina (Musica o Arte e Immagine)
- Oppure preparare audit per le discipline residue

## 13. Verdetto finale

`CML_168_RUNTIME_SHAPE_TEST_ALIGNMENT_8_DISCIPLINES_READY`
