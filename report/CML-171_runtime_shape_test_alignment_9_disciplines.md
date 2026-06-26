# CML-171 — Runtime shape test alignment 9 disciplines

Data: 2026-06-26

## 1. Scopo

Allineare il test shape runtime `tools/test-runtime-mappa-dati-shape.mjs` alla copertura runtime effettiva di 9/14 discipline, aggiungendo Arte e Immagine alla lista delle discipline verificate.

## 2. Baseline tecnica

| Parametro | Valore |
|-----------|--------|
| Branch | `main` |
| Commit iniziale | `d565c7b` |
| origin/main | `d565c7b` |
| Working tree | Pulito (sync) |
| Runtime | 9/14 discipline integrate |
| Validatore curriculum | 9 file, 111 unità, overallValid true, 0 errori |
| Shape runtime prima | 8/8 PASS |
| Push | Non eseguito |
| Deploy | Non eseguito |

## 3. Esito CML-170

CML-170 ha integrato Arte e Immagine nel runtime con 3 edit puntuali (pulsante, variabile, switch). Copertura runtime passata da 8/14 a 9/14. Shape test rimasto a 8/8.

## 4. Problema rilevato

Il test shape `tools/test-runtime-mappa-dati-shape.mjs` aveva una lista `FILES` hardcoded su 8 discipline. Arte e Immagine era presente nel runtime ma non veniva verificata dal test, creando un debito tecnico di copertura.

## 5. Intervento effettuato

Aggiunta di una riga nella lista `FILES`:

```javascript
const FILES = [
  'tecnologia.normalized.json',
  'italiano.normalized.json',
  'matematica.normalized.json',
  'scienze.normalized.json',
  'storia.normalized.json',
  'geografia.normalized.json',
  'inglese.normalized.json',
  'educazione-civica.normalized.json',
  'arte-immagine.normalized.json'       // <-- aggiunta
];
```

Il resto del test è invariato. Il test rimane rigoroso: fallisce se una disciplina non è presente o se la shape non è coerente.

## 6. Discipline coperte dal test dopo CML-171

1. Tecnologia
2. Italiano
3. Matematica
4. Scienze
5. Storia
6. Geografia
7. Inglese
8. Educazione Civica
9. **Arte e Immagine**

## 7. Esito validatore curriculum

```json
{
  "totalFiles": 9,
  "totalUnits": 111,
  "overallValid": true,
  "invalidCount": 0
}
```

## 8. Esito shape runtime 9/9

```
Tecnologia:        PASS — S=6  N=6  P=10 D=2
Italiano:          PASS — S=12 N=6  P=10 D=4
Matematica:        PASS — S=12 N=5  P=6  D=4
Scienze:           PASS — S=15 N=5  P=9  D=0
Storia:            PASS — S=15 N=5  P=9  D=0
Geografia:         PASS — S=12 N=3  P=9  D=0
Inglese:           PASS — S=12 N=11 P=9  D=0
Educazione Civica: PASS — S=11 N=4  P=9  D=0
Arte e Immagine:   PASS — S=6  N=3  P=6  D=0

overall: PASS — 9 passed, 0 failed
```

## 9. Conteggi Arte e Immagine

| Proprietà | Valore |
|-----------|--------|
| S (strutture sostanziali) | 6 |
| N (nodi disciplinari) | 3 |
| P (progressione verticale) | 6 |
| D (decisioni curricolari) | 0 |

## 10. Verifica invarianti

| Invariante | Esito |
|------------|-------|
| Runtime (`_published_snapshot/netlify-current/index.html`) | Invariato |
| `content/curriculum/` | Invariato |
| Schema `.cml` | Invariato |
| Export/import | Invariati |
| Funzioni evidenze/UDA | Invariate |
| Service worker | Invariato |
| Nessuna dipendenza | ✅ |

## 11. Rischi residui

1. **Copertura parziale**: il test copre 9/14 discipline. Le restanti 5 (Musica, Educazione Fisica, Religione Cattolica, Seconda Lingua, Materia Alternativa) non hanno ancora file normalizzati.
2. **Shape minima**: il test verifica la presenza e completezza strutturale (campi obbligatori), non il contenuto semantico.

## 12. Raccomandazione per CML-172

Prossima disciplina candidata per data preparation e integrazione runtime. Da valutare tra Musica, Educazione Fisica, o Religione Cattolica in base a readiness documentale e priorità didattica.

## 13. Verdetto finale

```
CML_171_RUNTIME_SHAPE_TEST_ALIGNMENT_9_DISCIPLINES_READY
```
