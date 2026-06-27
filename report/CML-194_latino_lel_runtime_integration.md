# CML-194 - Latino LEL Runtime Mappa Integration

Data: 2026-06-27

## 1. Scopo

Integrare la disciplina Latino (LEL) nella mappa dati disciplinare del runtime (`_published_snapshot/netlify-current/index.html`), portando il runtime disciplinare da 13/14 a 14/14 — completamento della copertura runtime di tutte le 14 discipline del curriculum CurManLight.

## 2. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `aa1a27f` (CML-193; origin/main a `d711872`, 2 behind) |
| Working tree iniziale | pulito |
| Dati normalizzati prima | 14/14 |
| Runtime mappa prima | 13/14 (Latino LEL NON integrata) |
| Shape test | 13/13 PASS |

## 3. Decisioni autorizzative

- CML-191: selezione Opzione A (Runtime integration) per le 3 discipline residue.
- CML-192: runtime integration per Seconda Lingua Comunitaria (completata).
- CML-193: runtime integration per Religione Cattolica (completata).
- **CML-194**: runtime integration per Latino LEL, ultima disciplina residua; `humanValidationRequired: true` preservato nei dati normalizzati.

## 4. Modifiche al runtime HTML

### 4.1 Variabile MAPPA_DATI

Inserita `LATINO_LEL_MAPPA_DATI` dopo `RELIGIONE_CATTOLICA_MAPPA_DATI`, prima di `var mappaDisciplinaCorrente`.

### 4.2 renderMappaDisciplinare

Aggiunto branch:

```js
else if (mappaDisciplinaCorrente === 'latino-lel' && typeof LATINO_LEL_MAPPA_DATI !== 'undefined') dati = LATINO_LEL_MAPPA_DATI;
```

### 4.3 Mappa selector

Aggiunto bottone "Latino (LEL)" dopo il bottone "Religione Cattolica".

### 4.4 Shape test

Aggiunto `'latino-lel.normalized.json'` all'array `FILES` in `tools/test-runtime-mappa-dati-shape.mjs` (13 → 14).

## 5. Dati integrati

| Sezione | Quantità |
|---|---|
| Strutture sostanziali | 4 (da 4 unità di apprendimento) |
| Nodi disciplinari | 4 (Lessico e morfologia, Rapporto latino-italiano, Cultura classica, Metodo linguistico) |
| Progressioni verticali | 2 (Secondaria 2, Secondaria 3) |
| Decisioni curricolari | 0 |

## 6. Copertura per ordine

| Ordine | Classi | Unità | Strutture |
|---|---|---|---|
| Secondaria | 2, 3 | 4 | 4 |

Nota: Latino LEL è solo Secondaria classi 2-3 (2 unità per classe), 1h/sett, approccio comparativo/esplorativo.

## 7. Validazioni

- Validatore curriculum: 14/14 PASS
- Shape test: 14/14 PASS
- `git diff --check`: PASS
- Hash smoke: `#cur-LatinoLEL` risolve correttamente
- CML-192 (Seconda Lingua Comunitaria) integration intatta
- CML-193 (Religione Cattolica) integration intatta
- MAPPA_DATI variables count: 14/14 confermato
- Credential scan: nessuna credenziale nei file modificati

## 8. Copertura runtime completa

| Disciplina | Stato |
|---|---|
| Tecnologia | ✅ Integrata (CML-001R) |
| Matematica | ✅ Integrata |
| Italiano | ✅ Integrata |
| Scienze | ✅ Integrata |
| Storia | ✅ Integrata |
| Geografia | ✅ Integrata |
| Inglese | ✅ Integrata |
| Educazione Civica | ✅ Integrata |
| Arte e Immagine | ✅ Integrata |
| Musica | ✅ Integrata |
| Educazione Fisica | ✅ Integrata (CML-184) |
| Seconda Lingua Comunitaria | ✅ Integrata (CML-192) |
| Religione Cattolica | ✅ Integrata (CML-193) |
| **Latino (LEL)** | **✅ Integrata (CML-194)** |

**Runtime mappa: 14/14 — COMPLETATA**

## 9. Verdict

`CML_194_LATINO_LEL_RUNTIME_MAPPA_INTEGRATION_READY` — commit locale senza push.
