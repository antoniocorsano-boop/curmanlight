# CML-184 - Educazione Fisica Runtime Mappa Integration

Data: 2026-06-27

## 1. Scopo

Integrare la disciplina Educazione Fisica nella mappa dati disciplinare del runtime (`_published_snapshot/netlify-current/index.html`), portando il runtime disciplinare da 10/14 a 11/14. I dati provengono dal file normalizzato `educazione-fisica.normalized.json` (CML-183), generato come limited draft con `humanValidationRequired: true`.

## 2. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `ed4fd48` (CML-183 committato e sincronizzato; origin/main allineato) |
| Working tree iniziale | pulito |
| Dati normalizzati prima | 11/14 (10/14 pre-CML-183 + Educazione Fisica) |
| Runtime mappa prima | 10/14 (Educazione Fisica NON integrata) |
| Shape test | 10/10 PASS (invariato — tools/ non modificati) |
| Skill usate | `cml-sync`, `cml-docs-only-slice`, `cml-readiness-audit` |

## 3. Decisioni autorizzative

- CML-180: `HUMAN_VALIDATION_REQUIRED_BEFORE_DATA_PREP` — validazione umana richiesta.
- CML-182: `VALIDATION_OUTCOME_PENDING` — troppo prudente.
- CML-182B: `LIMITED_DRAFT_DATA_PREP_ALLOWED` — bozza autorizzata come draft prudente.
- CML-183: creazione `educazione-fisica.normalized.json` come limited draft.
- **CML-184**: runtime integration autorizzata; `humanValidationRequired: true` preservato nei dati normalizzati; runtime mostra la disciplina come draft riconoscibile.

## 4. Modifiche al runtime HTML

### 4.1 Variabile MAPPA_DATI

Inserita `EDUCAZIONE_FISICA_MAPPA_DATI` dopo `ARTE_IMMAGINE_MAPPA_DATI`, prima di `var mappaDisciplinaCorrente`. Dati generati tramite pipeline:

```
json-to-mappa-dati-adapter.mjs → to-runtime-mappa-dati-transformer.mjs
```

### 4.2 renderMappaDisciplinare

Aggiunto branch:

```js
else if (mappaDisciplinaCorrente === 'educazione-fisica' && typeof EDUCAZIONE_FISICA_MAPPA_DATI !== 'undefined') dati = EDUCAZIONE_FISICA_MAPPA_DATI;
```

### 4.3 Mappa selector

Aggiunto bottone "Educazione Fisica" dopo il bottone "Musica".

## 5. Dati integrati

| Sezione | Quantità |
|---|---|
| Strutture sostanziali | 7 (da 7 unità di apprendimento) |
| Nodi disciplinari | 4 (Abilita motorie, Corpo e percezione, Espressione e inclusione, Gioco e sport) |
| Progressioni verticali | 7 (Infanzia f5, Primaria 1/3/5, Secondaria 1/2/3) |
| Decisioni curricolari | 0 |

## 6. Copertura per ordine

| Ordine | Classi/Fasce | Unità | Strutture |
|---|---|---|---|
| Infanzia | fascia 5 | 1 | 1 |
| Primaria | 1, 3, 5 | 3 | 3 |
| Secondaria | 1, 2, 3 | 3 | 3 |

## 7. Validazioni

- Shape test: 10/10 PASS (tools/ non modificati)
- `git diff --check`: PASS
- `git status` verifica solo file autorizzati
- Credential scan: nessuna credenziale nei file modificati
- Working tree: solo `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-184.md`, `report/CML-184_educazione_fisica_runtime_mappa_integration.md`, `docs/REPO-MOVELOG.md`

## 8. Discipline residue nel runtime (3/14)

| Disciplina | Stato |
|---|---|
| Seconda Lingua Comunitaria | Non integrata |
| Religione Cattolica | Non integrata |
| Latino LEL | Non integrata |

## 9. Verdict

`CML_184_EDUCAZIONE_FISICA_RUNTIME_MAPPA_INTEGRATION_READY` — commit locale senza push.
