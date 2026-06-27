# CML-192 - Seconda Lingua Comunitaria Runtime Mappa Integration

Data: 2026-06-27

## 1. Scopo

Integrare la disciplina Seconda Lingua Comunitaria nella mappa dati disciplinare del runtime (`_published_snapshot/netlify-current/index.html`), portando il runtime disciplinare da 11/14 a 12/14. I dati provengono dal file normalizzato `seconda-lingua-comunitaria.normalized.json` (CML-186), generato come limited draft con `humanValidationRequired: true`.

## 2. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `d711872` (CML-191; origin/main allineato) |
| Working tree iniziale | pulito |
| Dati normalizzati prima | 14/14 |
| Runtime mappa prima | 11/14 (Seconda Lingua Comunitaria NON integrata) |
| Shape test | 11/11 PASS |
| Skill usate | `cml-sync`, `cml-docs-only-slice`, `cml-readiness-audit` |

## 3. Decisioni autorizzative

- CML-191: selezione Opzione A (Runtime integration) per le 3 discipline residue.
- **CML-192**: runtime integration per Seconda Lingua Comunitaria; `humanValidationRequired: true` preservato nei dati normalizzati.

## 4. Modifiche al runtime HTML

### 4.1 Variabile MAPPA_DATI

Inserita `SECONDA_LINGUA_COMUNITARIA_MAPPA_DATI` dopo `EDUCAZIONE_FISICA_MAPPA_DATI`, prima di `var mappaDisciplinaCorrente`. Dati generati tramite pipeline manuale:

```
json-to-mappa-dati-adapter.mjs → to-runtime-mappa-dati-transformer.mjs
```

### 4.2 renderMappaDisciplinare

Aggiunto branch:

```js
else if (mappaDisciplinaCorrente === 'seconda-lingua-comunitaria' && typeof SECONDA_LINGUA_COMUNITARIA_MAPPA_DATI !== 'undefined') dati = SECONDA_LINGUA_COMUNITARIA_MAPPA_DATI;
```

### 4.3 Mappa selector

Aggiunto bottone "Seconda Lingua Comunitaria" dopo il bottone "Educazione Fisica".

### 4.4 Shape test

Aggiunto `'seconda-lingua-comunitaria.normalized.json'` all'array `FILES` in `tools/test-runtime-mappa-dati-shape.mjs` (11 → 12).

## 5. Dati integrati

| Sezione | Quantità |
|---|---|
| Strutture sostanziali | 6 (da 6 unità di apprendimento) |
| Nodi disciplinari | 6 (1 per nucleo: Ascolto, Produzione orale, Lettura, Produzione scritta, Interazione orale, Cultura) |
| Progressioni verticali | 3 (Secondaria 1/2/3) |
| Decisioni curricolari | 0 |

## 6. Copertura per ordine

| Ordine | Classi | Unità | Strutture |
|---|---|---|---|
| Secondaria | 1, 2, 3 | 6 | 6 |

Nota: Seconda Lingua Comunitaria è solo Secondaria (classi 1-3, 2 unità per classe). Nessuna Infanzia o Primaria.

## 7. Validazioni

- Validatore curriculum: 14/14 PASS
- Shape test: 12/12 PASS
- `git diff --check`: PASS
- `git status` verifica solo file autorizzati
- Credential scan: nessuna credenziale nei file modificati
- Hash smoke: `#cur-SecondaLinguaComunitaria` risolve correttamente
- Working tree: solo `_published_snapshot/netlify-current/index.html`, `tools/test-runtime-mappa-dati-shape.mjs`, `docs/03_execution/CML-192.md`, `report/CML-192_seconda_lingua_comunitaria_runtime_integration.md`, `docs/REPO-MOVELOG.md`

## 8. Discipline residue nel runtime (2/14)

| Disciplina | Stato |
|---|---|
| Religione Cattolica | Non integrata |
| Latino LEL | Non integrata |

## 9. Verdict

`CML_192_SECONDA_LINGUA_COMUNITARIA_RUNTIME_MAPPA_INTEGRATION_READY` — commit locale senza push.
