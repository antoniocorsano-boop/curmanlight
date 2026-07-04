# CML-393 — PM-03/PM-06/PM-07 Tranche Closure Audit

## Sintesi
Chiusura formale della tranche incrementale PM-03/PM-06/PM-07 dopo 9 slice (CML-384 → CML-392).

## Quadro tranche

| Programma | Prima | Dopo | Delta | Slice |
|-----------|------:|-----:|------:|-------|
| PM-03 Orientamento | 30% | **45%** | +15% | CML-384, CML-385, CML-386 |
| PM-06 Accompagnamento | 60% | **70%** | +10% | CML-387, CML-388 |
| PM-07 Uniformità | 20% | **40%** | +20% | CML-389, CML-390, CML-391, CML-392 |

## Risultati per slice

### PM-03 Orientamento (+15%)
- **CML-384** (Home de-densificazione): Rimossa recommended callout, semplificato inline banner (5→2 azioni rapide), card raggruppate in 2 gruppi logici
- **CML-385** (Navigazione mobile): Etichette bottom bar uniformate ("Didattica"→"Compila", "Esporta"→"Esportazioni"), indicatore sezione corrente più visibile
- **CML-386** (Percorsi coerenti): Tabbar desktop "Compila", subnav "Curricolo", Home card "Compila", microcopy percorso esplicito

### PM-06 Accompagnamento (+10%)
- **CML-387** (Guida rapida task-oriented): Riorganizzata da struttura descrittiva a struttura operativa (5 compiti numerati)
- **CML-388** (Onboarding refresh): Allineato ai percorsi operativi, 3 passi astratti → 5 passi numerati, rimozione note ridondanti

### PM-07 Uniformità (+20%)
- **CML-389** (Sidebar legenda unica): Aggiunta legenda con 4 indicatori di stato
- **CML-390** (Microcopy uniform): "Competenze e progettazione"→"Compila" (11 location), "Consulta"→"Curricolo" (mobile menu), CTAs uniformate
- **CML-391** (Progetta terminology targeted microfix): "Compila"→"Progetta" solo in contesti UI progettazione didattica, mantenuti "compila" in dati curricolari e form-filling
- **CML-392** (PM-07 audit finale): Verificata coerenza complessiva, occorrenze residue tutte accettabili

## Lessico consolidato

| Verbo | Azione | Sezione | Occorrenze UI |
|-------|--------|---------|---------------|
| consulta | consultare il curricolo | Curricolo | ~20 |
| scegli | scegliere la disciplina | Sidebar | ~15 |
| **progetta** | progettare la proposta | Progetta | 43 |
| esporta | esportare i documenti | Esportazioni | ~10 |
| verifica | verificare e validare | Processo | ~25 |

**Percorso operativo:** consulta → scegli → **progetta** → esporta → verifica

## Verifiche tecniche

### Stato Git
- Branch: `main` ✅
- Working tree: pulito ✅
- Ultimo commit: `a225ce3` (CML-392) ✅
- `git diff --check`: nessun errore ✅

### Validazioni runtime
- `validate-cml-normalized-curriculum.mjs`: overallValid: true ✅
- `test-runtime-mappa-dati-shape.mjs`: overall: PASS ✅

### Coerenza terminologica
- "Progetta" in contesti UI: 43 occorrenze ✅
- "Compila" (C maiuscola) in contesti UI: 0 occorrenze ✅
- "compila" (minuscola) in contesti UI: 1 occorrenza (form-filling, accettabile) ✅

### Dati curricolari
- Nessuna modifica impropria ✅
- Obiettivi, evidenze, criteri, conoscenze, abilità invariati ✅

## Rischi residui

| Rischio | Probabilità | Impatto | Mitigazione |
|---------|-------------|---------|-------------|
| Smoke live post-push necessario | Alta | Medio | CML-395 dedicato |
| Stable checkpoint post-verifica | Media | Basso | CML-396 dedicato |
| Regressione runtime | Bassa | Alto | Validazioni già superate |

## Decisione operativa

### Raccomandazione
**Push controllato** → **Smoke post-push** → **Stable checkpoint**

### Motivazione
1. **Push controllato**: Tranche matura, coerenza verificata, test superati
2. **Smoke post-push**: Verifica comportamento reale in ambiente deployato
3. **Stable checkpoint**: Consolidamento formale dopo verifica live

### Slice successive
- **CML-394**: Push controllato (docs-only, registrazione)
- **CML-395**: Smoke post-push (docs-only, verifica live)
- **CML-396**: Stable checkpoint (docs-only, consolidamento)

## Prossimi passi
1. Eseguire push controllato (CML-394)
2. Verificare comportamento live (CML-395)
3. Consolidare stable checkpoint (CML-396)

## Verdict
```text
CML_393_PM030607_TRANCHE_CLOSURE_AUDIT_READY_LOCAL_NOT_PUSHED
```
