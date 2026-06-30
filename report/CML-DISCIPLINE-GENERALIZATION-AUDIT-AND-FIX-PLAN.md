# CML-DISCIPLINE-GENERALIZATION-AUDIT-AND-FIX-PLAN Report

## Sintesi esecutiva
Audit completo dei residui Tecnologia-centrici in CurManLight dopo la normalizzazione 14/14 discipline. Identificati 18 residui: 13 runtime, 3 documentazione, 2 esempi accettabili. Selezionata prossima slice: `CML-DISCIPLINE-GENERALIZATION-RUNTIME-MICROFIX`.

## Tabella baseline
| Metrica | Valore |
|---------|--------|
| Branch | main |
| HEAD iniziale | c4969e2 |
| origin/main | allineato |
| Working tree | pulito (untracked esclusi) |
| Accessibilità | 88/100 (invariata) |
| Validatore CML | 14/14 PASS (invariato) |
| Runtime mappa dati | 14/14 PASS (invariato) |
| Shape test | 14/14 PASS (invariato) |
| Curriculum | 14/14 normalizzate (invariato) |

## Tabella residui Tecnologia-centrici
| ID | Area | Occorrenza | Categoria | Priorità |
|----|------|------------|-----------|----------|
| DG-01 | Runtime | `selectedDisc = "Tecnologia"` in `renderUdaModello()` | C | P1 |
| DG-02 | Runtime | `selDisc=DISCIPLINE[0] \|\| "Tecnologia"` | C | P1 |
| DG-03 | Runtime | `DEFAULT_PROFILE.disciplina=DISCIPLINE[0] \|\| "Tecnologia"` | C | P1 |
| DG-04 | Runtime | Home link "Tecnologia normalizzata" | D | P1 |
| DG-05 | Runtime | Button "Tecnologia" attivo nella mappa | D | P2 |
| DG-06 | Runtime | `UDA_MODELI` array (solo 2 modelli Tecnologia) | F | P1 |
| DG-07 | Runtime | Funzione `renderTecnologiaNorm()` | E | P2 |
| DG-08 | Runtime | Export panel solo per Tecnologia | G | P2 |
| DG-09 | Runtime | Titolo pagina "Tecnologia" hardcoded | D | P2 |
| DG-10 | Runtime | Breadcrumb "Tecnologia" | D | P2 |
| DG-11 | Runtime | Menu contestuale "Tecnologia" | D | P2 |
| DG-12 | Runtime | Card "Tecnologia" nei risultati ricerca | D | P2 |
| DG-13 | Runtime | Testo istruzione "Seleziona Tecnologia" | D | P2 |
| DG-14 | Documentazione | README.md esempio export Tecnologia | B | P2 |
| DG-15 | Documentazione | AGENTS.md riferimento Tecnologia come modello | H | P1 |
| DG-16 | Documentazione | CHANGELOG.md menzione Tecnologia privilegiata | H | P2 |
| DG-17 | Esempio | Commento codice "esempio Tecnologia" | B | P3 |
| DG-18 | Esempio | Label demo "Tecnologia pilota" | B | P3 |

## Tabella classificazione
| Categoria | Count | Note |
|-----------|-------|------|
| A (Storico legittimo) | 0 | Nessun caso |
| B (Esempio accettabile) | 2 | DG-17, DG-18 |
| C (Default improprio) | 3 | DG-01, DG-02, DG-03 |
| D (Hardcode semplice) | 7 | DG-04, DG-05, DG-09, DG-10, DG-11, DG-12, DG-13 |
| E (Hardcode strutturale) | 1 | DG-07 |
| F (UDA non generalizzata) | 1 | DG-06 |
| G (Export import) | 1 | DG-08 |
| H (Documentazione fuorviante) | 3 | DG-14, DG-15, DG-16 |

## Tabella priorità
| Priorità | Count | Impatto |
|----------|-------|---------|
| P0 | 0 | Nessun blocco |
| P1 | 8 | Percepita limitazione a Tecnologia |
| P2 | 8 | Incoerenza/minor confusione |
| P3 | 2 | Microcopy migliorabile |

## Tabella roadmap
| # | Slice | Obiettivo | Priorità |
|---|-------|-----------|----------|
| 1 | CML-DISCIPLINE-GENERALIZATION-RUNTIME-MICROFIX | Hardcode semplici | P1 |
| 2 | CML-ANNUAL-PLANNING-AND-UDA-GENERALIZATION-CONTRACT | Contratto UDA | P0 |
| 3 | CML-ANNUAL-PLANNING-VIEW-LEVELS-ORDS | Vista livelli/ordini | P1 |
| 4 | CML-ANNUAL-PLANNING-DATA-COLLECTION | Raccolta dati | P2 |
| 5 | CML-ANNUAL-PLANNING-IMPLEMENTATION | UDA completa | P0 |

## Tabella prossima slice
| Aspetto | Valore |
|---------|--------|
| Nome | CML-DISCIPLINE-GENERALIZATION-RUNTIME-MICROFIX |
| Obiettivo | Correggere hardcode semplici e default impropri |
| File coinvolte | index.html (runtime) |
| Termini | "Tecnologia" → disciplina corrente |
| Scope | Runtime minimo, nessun deploy |

## Scope enforcement
- Modificati: docs/03_execution/CML-DISCIPLINE-GENERALIZATION-AUDIT-AND-FIX-PLAN.md, report/CML-DISCIPLINE-GENERALIZATION-AUDIT-AND-FIX-PLAN.md, docs/REPO-MOVELOG.md
- Runtime: NON modificato
- Push: NON eseguito

## Raccomandazioni
1. Eseguire microfix per default impropri (DG-01, DG-02, DG-03).
2. Aggiornare microcopy e label (DG-04, DG-05, DG-09-DG-13).
3. Rivedere documentazione (DG-14, DG-15, DG-16).
4. Pianificare contratto UDA per slice successiva.

## Verdict
**CML_DISCIPLINE_GENERALIZATION_AUDIT_AND_FIX_PLAN_READY**