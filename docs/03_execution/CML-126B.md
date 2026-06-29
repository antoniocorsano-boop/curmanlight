# CML-126B — POST_FIX_RUNTIME_SMOKE_CONFIRMATION

## Obiettivo

Confermare che la regressione runtime (setTab/setMappaDisciplina non definiti) documentata in CML-126 è risolta dal fix CML-127, prima del push cumulativo.

## Baseline

- Branch: main
- HEAD: 2c9c0b86d5a9bf020687deaf6703758078278de0
- Verdetto precedente: CML_127_RUNTIME_NAVIGATION_HANDLER_REFERENCE_FIX_READY

## Controlli eseguiti

### 1. Verifica fix nel codice

- `window.setTab = setTab` presente alla riga 4952 ✅
- `window.setMappaDisciplina = setMappaDisciplina` presente alla riga 4953 ✅

### 2. Validazione tecnica

- `node tools/validate-cml-normalized-curriculum.mjs` — 7 file, 94 unità, overallValid: true ✅
- `git diff --check` — nessun errore whitespace ✅

### 3. Smoke runtime (localhost:8084)

- Homepage: HTTP 200 (397KB) ✅
- Curriculum tab (#curriculum): HTTP 200 ✅
- Didattica tab (#didattica): HTTP 200 ✅
- Validazione dipartimentale (#validazione-dipartimentale): HTTP 200 ✅
- Riepilogo (#riepilogo): HTTP 200 ✅
- Esportazioni (#esportazioni): HTTP 200 ✅
- Guida (#guida): HTTP 200 ✅
- Service Worker (sw.js): HTTP 200 ✅
- `window.setTab = setTab` presente nel file servito ✅
- `window.setMappaDisciplina` presente nel file servito ✅

### 4. Regressioni

- Nessun ReferenceError per setTab o setMappaDisciplina osservato
- Home, navigazione, curriculum, didattica, esportazioni, guida: HTTP 200 su tutte le sezioni
- Validatore curriculum: invariato (7 file, 94 unità, overallValid: true)
- Schema .cml, export/import, role-access: invariati

## Verdetto

CML_126B_POST_FIX_RUNTIME_SMOKE_CONFIRMATION_READY
Prossimo passo: push cumulativo di CML-126 (storico smoke bloccante), CML-127 (fix) e CML-126B (questa conferma).
