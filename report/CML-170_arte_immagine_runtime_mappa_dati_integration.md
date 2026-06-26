# CML-170 — Arte e Immagine runtime mappa dati integration

Data: 2026-06-26

## 1. Scopo

Integrare Arte e Immagine nella mappa disciplinare runtime del frontend (`_published_snapshot/netlify-current/index.html`), rendendo disponibile la mappa dati all'utente finale tramite pulsante selettore, variabile JavaScript e branch switch nel renderer.

## 2. Baseline tecnica

| Parametro | Valore |
|-----------|--------|
| Branch | `main` |
| Commit iniziale | `b237cb2` |
| origin/main | `b237cb2` |
| Working tree | Pulito (sync) |
| Shape runtime | 8/8 PASS |
| Validatore curriculum | 9 file, 111 unità, overallValid true, 0 errori |
| Push | Non eseguito |
| Deploy | Non eseguito |

## 3. Esito CML-169

CML-169 ha preparato `content/curriculum/arte-immagine.normalized.json` con 6 unità su 3 nuclei (Esprimersi e comunicare, Osservare, Comprendere le opere d'arte), copertura Infanzia/Primaria/Secondaria, D=0.

Generazione statica (CML-169-SYNC): S=6 N=3 P=6 D=0.

## 4. Dato normalizzato usato

```
content/curriculum/arte-immagine.normalized.json
```

Validato da `tools/validate-cml-normalized-curriculum.mjs` (9/9 file, 111 unità, overallValid true, 0 errori).

## 5. Metodo di integrazione runtime

Tre edit puntuali in `_published_snapshot/netlify-current/index.html`:

1. Aggiunta pulsante nella barra selettore discipline
2. Dichiarazione variabile `ARTE_IMMAGINE_MAPPA_DATI` con JSON inline
3. Aggiunta branch `else if` in `renderMappaDisciplinare()` per caricare il dato

## 6. Punto di integrazione runtime

### Pulsante

Inserito dopo il pulsante Educazione Civica nella barra selettore:

```html
<button class="mappa-disc-btn" onclick="setMappaDisciplina('arte-immagine',this)" ...>Arte e Immagine</button>
```

### Variabile

Variabile JavaScript dichiarata dopo `EDUCAZIONE_CIVICA_MAPPA_DATI`:

```javascript
var ARTE_IMMAGINE_MAPPA_DATI = {"disciplina":"Arte e Immagine", ...};
```

### Branch/switch

Branch aggiunto in `renderMappaDisciplinare()` dopo il branch `educazione-civica`:

```javascript
else if (mappaDisciplinaCorrente === 'arte-immagine' && typeof ARTE_IMMAGINE_MAPPA_DATI !== 'undefined') dati = ARTE_IMMAGINE_MAPPA_DATI;
```

## 7. Conteggi Arte e Immagine

| Proprietà | Valore |
|-----------|--------|
| S (strutture sostanziali) | 6 |
| N (nodi disciplinari) | 3 |
| P (progressione verticale) | 6 |
| D (decisioni curricolari) | 0 |

## 8. Validatore curriculum

```json
{
  "totalFiles": 9,
  "totalUnits": 111,
  "overallValid": true,
  "invalidCount": 0
}
```

Arte e Immagine incluso come file 1/9: `arte-immagine.normalized.json` — valid: true, 6 unità, 0 errori.

## 9. Shape runtime 8/8 invariata

```
Tecnologia:    PASS — S=6  N=6  P=10 D=2
Italiano:      PASS — S=12 N=6  P=10 D=4
Matematica:    PASS — S=12 N=5  P=6  D=4
Scienze:       PASS — S=15 N=5  P=9  D=0
Storia:        PASS — S=15 N=5  P=9  D=0
Geografia:     PASS — S=12 N=3  P=9  D=0
Inglese:       PASS — S=12 N=11 P=9  D=0
Educazione Civica: PASS — S=11 N=4  P=9  D=0

overall: PASS — 8 passed, 0 failed
```

Arte e Immagine non ancora presente nel test shape — rimandato a CML-171.

## 10. Verifica codifica

- Variabile `ARTE_IMMAGINE_MAPPA_DATI`: JSON valido ✅
- Accenti: presenti (`unità`, `Espressivo`, `Comunicare`, `Osservare`) ✅
- Assenza U+FFFD ✅
- Assenza `???` ✅

## 11. Discipline invarianti

Le 8 discipline già integrate (Tecnologia, Italiano, Matematica, Scienze, Storia, Geografia, Inglese, Educazione Civica) NON sono state modificate.

## 12. Verifica invarianti

| Invariante | Esito |
|------------|-------|
| `content/curriculum/` | Invariato |
| `tools/` | Invariati |
| Schema `.cml` | Invariato |
| Export/import | Invariati |
| Funzioni evidenze/UDA | Invariate |
| Nessuna dipendenza | ✅ |

## 13. Rischi residui

1. **Test shape non allineato**: il test runtime continua a verificare 8/8 discipline. Arte e Immagine non sarà validata dallo shape test finché non verrà aggiornato (CML-171).
2. **D=0 deliberato**: Arte e Immagine non ha decisioni curricolari strutturate. Da rivalutare in futuro se emergono necessità dipartimentali.
3. **Warning retrocompatibilità**: 7 warning "nucleo presente ma nucleoFondante assente" in arte-immagine.normalized.json — retrocompatibili, nessun impatto runtime.

## 14. Raccomandazione per CML-171

**Aggiornare il test shape** da 8/8 a 9/9 discipline in `tools/test-runtime-mappa-dati-shape.mjs`:

- Aggiungere `'arte-immagine.normalized.json'` alla lista `FILES`
- Verificare che il test passi con S=6 N=3 P=6 D=0

## 15. Verdetto finale

```
CML_170_ARTE_IMMAGINE_RUNTIME_MAPPA_DATI_READY
```
