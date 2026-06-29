# CML-193 - Religione Cattolica Runtime Mappa Integration

Data: 2026-06-27

## 1. Scopo

Integrare la disciplina Religione Cattolica nella mappa dati disciplinare del runtime (`_published_snapshot/netlify-current/index.html`), portando il runtime disciplinare da 12/14 a 13/14. I dati provengono dal file normalizzato `religione-cattolica.normalized.json` (CML-187), generato come limited draft con `humanValidationRequired: true`.

## 2. Baseline tecnica

| Parametro               | Valore                                                 |
| ----------------------- | ------------------------------------------------------ |
| Root Git                | `C:\Users\anton\CurManLight`                           |
| Branch                  | `main`                                                 |
| Commit iniziale         | `d1513d1` (CML-192; origin/main a `d711872`, 1 behind) |
| Working tree iniziale   | pulito                                                 |
| Dati normalizzati prima | 14/14                                                  |
| Runtime mappa prima     | 12/14 (Religione Cattolica NON integrata)              |
| Shape test              | 12/12 PASS                                             |

## 3. Decisioni autorizzative

- CML-191: selezione Opzione A (Runtime integration) per le 3 discipline residue.
- CML-192: runtime integration per Seconda Lingua Comunitaria (completata, intatta).
- **CML-193**: runtime integration per Religione Cattolica; `humanValidationRequired: true` preservato nei dati normalizzati.

## 4. Modifiche al runtime HTML

### 4.1 Variabile MAPPA_DATI

Inserita `RELIGIONE_CATTOLICA_MAPPA_DATI` dopo `SECONDA_LINGUA_COMUNITARIA_MAPPA_DATI`, prima di `var mappaDisciplinaCorrente`.

### 4.2 renderMappaDisciplinare

Aggiunto branch:

```js
else if (mappaDisciplinaCorrente === 'religione-cattolica' && typeof RELIGIONE_CATTOLICA_MAPPA_DATI !== 'undefined') dati = RELIGIONE_CATTOLICA_MAPPA_DATI;
```

### 4.3 Mappa selector

Aggiunto bottone "Religione Cattolica" dopo il bottone "Seconda Lingua Comunitaria".

### 4.4 Shape test

Aggiunto `'religione-cattolica.normalized.json'` all'array `FILES` in `tools/test-runtime-mappa-dati-shape.mjs` (12 → 13).

## 5. Dati integrati

| Sezione                | Quantità                                                                 |
| ---------------------- | ------------------------------------------------------------------------ |
| Strutture sostanziali  | 7 (da 7 unità di apprendimento)                                          |
| Nodi disciplinari      | 3 (Dio e l'uomo, La Bibbia e le altre fonti, I valori etici e religiosi) |
| Progressioni verticali | 7 (Infanzia f5, Primaria 1/3/5, Secondaria 1/2/3)                        |
| Decisioni curricolari  | 0                                                                        |

## 6. Copertura per ordine

| Ordine     | Classi/Fasce | Unità | Strutture |
| ---------- | ------------ | ----- | --------- |
| Infanzia   | fascia 5     | 1     | 1         |
| Primaria   | 1, 3, 5      | 3     | 3         |
| Secondaria | 1, 2, 3      | 3     | 3         |

## 7. Validazioni

- Validatore curriculum: 14/14 PASS
- Shape test: 13/13 PASS
- `git diff --check`: PASS
- Hash smoke: `#cur-ReligioneCattolica` risolve correttamente
- CML-192 (Seconda Lingua Comunitaria) integration intatta
- Latino LEL non integrato
- Credential scan: nessuna credenziale nei file modificati
- Working tree: solo `_published_snapshot/netlify-current/index.html`, `tools/test-runtime-mappa-dati-shape.mjs`, `docs/03_execution/CML-193.md`, `report/CML-193_religione_cattolica_runtime_integration.md`, `docs/REPO-MOVELOG.md`

## 8. Discipline residue nel runtime (1/14)

| Disciplina | Stato         |
| ---------- | ------------- |
| Latino LEL | Non integrata |

## 9. Verdict

`CML_193_RELIGIONE_CATTOLICA_RUNTIME_MAPPA_INTEGRATION_READY` — commit locale senza push.
