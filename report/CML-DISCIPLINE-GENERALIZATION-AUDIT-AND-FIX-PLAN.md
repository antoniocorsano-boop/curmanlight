# Report: CML-DISCIPLINE-GENERALIZATION-AUDIT-AND-FIX-PLAN

## Riepilogo
Audit completo dei residui Tecnologia-centrici in CurManLight dopo la normalizzazione 14/14 discipline. Identificati 18 residui: 13 runtime, 3 documentazione, 2 esempi accettabili. Selezionata prossima slice: `CML-DISCIPLINE-GENERALIZATION-RUNTIME-MICROFIX`.

## Baseline
- Branch: `main`
- HEAD: `c4969e2`
- origin/main: `c4969e2`
- Runtime: stabile, accessibilità 88/100
- Curriculum: 14/14 PASS

## Tabella residui Tecnologia-centrici

| ID | Area | Descrizione | Categoria | Priorità |
|----|------|-------------|----------|----------|
| DG-01 | Runtime | `mappaDisciplinaCorrente = 'tecnologia'` default | C | P1 |
| DG-02 | Runtime | `mappaDisciplinaCorrente === 'tecnologia'` primo in catena else-if | D | P2 |
| DG-03 | Runtime | `selectedDisc = selDisc \|\| "Tecnologia"` in `renderUdaModello()` | C | P1 |
| DG-04 | Runtime | `selDisc=DISCIPLINE[0]\|\|"Tecnologia"` | C | P1 |
| DG-05 | Runtime | `DEFAULT_PROFILE.disciplina=DISCIPLINE[0]\|\|"Tecnologia"` | C | P1 |
| DG-06 | Runtime | Home link "Tecnologia normalizzata" | D | P1 |
| DG-07 | Runtime | Button "Tecnologia" attivo in mappa | D | P2 |
| DG-08 | Runtime | `UDA_MODELI` array (2 modelli Tecnologia) | F | P1 |
| DG-09 | Runtime | Funzione `renderTecnologiaNorm()` | E | P2 |
| DG-10 | Runtime | `<div id="tecnologia-norm-panel">` | E | P2 |
| DG-11 | Runtime | CSS `.tecnologia-norm-*` (37 regole) | E | P2 |
| DG-12 | Runtime | `TECNOLOGIA_NORM` + `TECNOLOGIA_NORM_DATA` legacy | E | P2 |
| DG-13 | Runtime | `TECNOLOGIA_MAPPA_DATI_FALLBACK` + `GENERATA` legacy | E | P2 |
| DG-14 | Docs | CML-UX-CERTIFICATION-READINESS rivendica fix non applicati | H | P2 |
| DG-15 | Docs | CML-UX-MOBILE-PROGETTAZIONE-HOTFIX descrive fix come completi | H | P3 |
| DG-16 | Docs | Report CML-UX-CERTIFICATION-READINESS dice "Nessun hardcode residuo" | H | P2 |
| DG-17 | Esempio | `examples/teacher-proposal.example.cml.json` — "Tecnologia" | B | P3 |
| DG-18 | Esempio | `examples/curriculum-discipline.example.json` — "Tecnologia (esempio)" | B | P3 |

## Tabella categorie

| Categoria | Count | Descrizione |
|-----------|-------|-------------|
| A. Storico legittimo | 0 | Riferimenti a Tecnologia in report/slice storiche |
| B. Esempio accettabile | 2 | Esempi dichiarati, non fuorvianti |
| C. Default improprio | 5 | Tecnologia come fallback/default visibile |
| D. Hardcode runtime semplice | 3 | Stringhe/label sostituibili senza refactor |
| E. Hardcode runtime strutturale | 5 | Logica/vista costruita solo su Tecnologia |
| F. UDA/progettazione non generalizzata | 1 | UDA solo Tecnologia |
| G. Export/import potenzialmente disciplinare | 0 | Già generalizzato in CML-226 |
| H. Documentazione prodotto fuorviante | 3 | Docs/guida fanno sembrare Tecnologia ancora centrale |

## Tabella priorità

| Priorità | Count | Residui | Impatto |
|----------|-------|---------|---------|
| P0 | 0 | — | Blocca uso multi-disciplina |
| P1 | 7 | DG-01, DG-03, DG-04, DG-05, DG-06, DG-08, DG-07 (parz.) | Fa credere che funzioni solo per Tecnologia |
| P2 | 8 | DG-02, DG-07 (parz.), DG-09, DG-10, DG-11, DG-12, DG-13, DG-14, DG-16 | Incoerenza visibile o confusione |
| P3 | 3 | DG-15, DG-17, DG-18 | Esempio o microcopy migliorabile |

## Tabella roadmap

| # | Slice | Tipo | Focus |
|---|-------|------|-------|
| 1 | `CML-DISCIPLINE-GENERALIZATION-RUNTIME-MICROFIX` | runtime microfix | DG-01, DG-03, DG-04, DG-05, DG-06, DG-07 |
| 2 | `CML-DISCIPLINE-GENERALIZATION-UDA-MODELS` | runtime increment | DG-08 |
| 3 | `CML-DISCIPLINE-GENERALIZATION-NORM-PANEL` | runtime microfix | DG-09, DG-10, DG-11 |
| 4 | `CML-DISCIPLINE-GENERALIZATION-DOCS-CLEANUP` | docs-only | DG-14, DG-15, DG-16 |
| 5 | `CML-ANNUAL-PLAN-AND-UDA-CONTRACT` | docs-only contract | Nuovo schema/vista progettazione |

## Tabella prossima slice

| Campo | Valore |
|-------|--------|
| Nome | `CML-DISCIPLINE-GENERALIZATION-RUNTIME-MICROFIX` |
| Tipo | runtime microfix |
| Obiettivo | Correggere hardcode semplici e default impropri Tecnologia |
| Perimetro | `index.html` only |
| Residui | DG-01, DG-03, DG-04, DG-05, DG-06, DG-07 |
| Esclusi | DG-08 (UDA), DG-09/10/11 (norm panel naming), DG-12/13 (legacy data), DG-14/15/16 (docs) |

## Scope enforcement
- ✅ Solo file autorizzati modificati: `docs/03_execution/`, `report/`, `docs/REPO-MOVELOG.md`
- ✅ Nessuna modifica runtime in questa slice
- ✅ Nessuna modifica a index.html, JSON, .cml, tool, export/import
- ✅ Nessun deploy, nessun push

## Raccomandazioni
1. Eseguire la slice `CML-DISCIPLINE-GENERALIZATION-RUNTIME-MICROFIX` come prossimo step per rimuovere i default impropri più impattanti (P1).
2. Dopo la microfix runtime, aggiornare la documentazione (DG-14, DG-15, DG-16) per allineare claims a stato reale.
3. Rimandare `UDA_MODELI` (DG-08) a slice dedicata con decisione su modello generalizzato.
4. Mantenere `TECNOLOGIA_NORM` e `TECNOLOGIA_MAPPA_DATI` come legacy benchmark documentato.
5. Valutare rinominazione `renderTecnologiaNorm()` in slice di pulizia naming successiva.

## Verdict
```text
CML_DISCIPLINE_GENERALIZATION_AUDIT_AND_FIX_PLAN_READY
```
