# MAPPA_DATI_INDEX and getMappaForDiscipline Runtime Microrefactor

## Baseline
- CML-370 ha definito il contratto `DisciplineDataAccess`
- CML-371 è la Fase 1 del piano di migrazione: primo microrefactor runtime

## Modifiche

### Struttura introdotta

```
MAPPA_DATI_INDEX (oggetto) ──┬── 'tecnologia' ──→ TECNOLOGIA_MAPPA_DATI
                             ├── 'matematica'  ──→ MATEMATICA_MAPPA_DATI
                             ├── 'italiano'    ──→ ITALIANO_MAPPA_DATI
                             ├── ... (altre 11 discipline)
                             └── 'latino-lel'  ──→ LATINO_LEL_MAPPA_DATI
                                      │
                                      ▼
                          getMappaForDiscipline(discKey)
                                      │
                                      ▼
                          renderMappaDisciplinare()
```

### Prima
```javascript
// 14 righe di if/else if
var dati = null;
if (mappaDisciplinaCorrente === 'tecnologia' && typeof TECNOLOGIA_MAPPA_DATI !== 'undefined') dati = TECNOLOGIA_MAPPA_DATI;
else if (mappaDisciplinaCorrente === 'matematica' && typeof MATEMATICA_MAPPA_DATI !== 'undefined') dati = MATEMATICA_MAPPA_DATI;
// ... 12 altri rami
```

### Dopo
```javascript
// 1 riga
var dati = getMappaForDiscipline(mappaDisciplinaCorrente);
```

## Verifica equivalenza

| Aspetto | Prima | Dopo | Esito |
|---|---|---|---|
| HTML prodotto | if/else → `dati` → render | `getMappaForDiscipline` → render | Identico |
| Fallback `!dati` | `if (!dati)` mostra empty | `if (!dati)` mostra empty | Identico |
| Ordine discipline | if/else ordine arbitrario | Chiavi oggetto | Equivalente (stessi dati) |
| Selezione disciplina | `mappaDisciplinaCorrente` | `mappaDisciplinaCorrente` | Invariata |
| Variable hoisting | `var` variables hoisted | `var MAPPA_DATI_INDEX` hoisted | Equivalente |

## Impatto byte

| File | Prima (bytes) | Dopo (bytes) | Delta |
|---|---|---|---|
| `index.html` | ~2.6 MB | ~2.6 MB + ~800 B | ~800 B aggiunti |
| `_published_snapshot/netlify-current/index.html` | ~2.6 MB | ~2.6 MB + ~800 B | ~800 B aggiunti |

Il delta positivo (~800 B per file) è compensato dall'eliminazione futura di `TECNOLOGIA_NORM` (~3.5 KB) in CML-373.

## File impattati
- `index.html`: +MAPPA_DATI_INDEX, +getMappaForDiscipline, -14 if/else righe
- `_published_snapshot/netlify-current/index.html`: identico
- `docs/03_execution/CML-371.md`: creato
- `report/CML-371_mappa_dati_index_runtime_microrefactor.md`: creato
- `docs/REPO-MOVELOG.md`: aggiornato

## Aree non toccate
- Dati curricolari (`content/curriculum/`)
- Contenuto mappe disciplinari (solo rif. variabili esistenti)
- Schema `.cml`, export/import
- Validazione dipartimento/referente
- Hook Drive
- Provider esterni
- UI nuove o dipendenze
- Workflow/configurazioni/package
- `CurManLightBrain/`

## Verdict
`CML_371_MAPPA_DATI_INDEX_RUNTIME_MICROREFACTOR_READY_LOCAL_NOT_PUSHED`
