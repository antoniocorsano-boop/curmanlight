# CML-DISCIPLINE-GENERALIZATION-AUDIT-AND-FIX-PLAN

## Obiettivo
Auditare CurManLight per individuare tutti i residui in cui “Tecnologia” è ancora trattata come disciplina modello, disciplina privilegiata o default improprio, ora che il curricolo è normalizzato 14/14.

## Stato iniziale
- Branch: main
- HEAD: c4969e2
- Working tree pulito (untracked escluded)
- Accessibilità: 88/100 audit-ready
- Validatore CML: 14/14 PASS
- P0/P1/P2 accessibilità: 0/0/0
- Curriculum: 14/14 discipline normalizzate
- Runtime mappa dati: 14/14 PASS
- Shape test: 14/14 PASS
- Runtime stabile

## Perimetro
Docs-only audit + fix plan. Nessuna modifica a runtime, nessuna modifica a index.html, assets/, content/curriculum/, tools/, examples/, AGENTS.md, CONTRIBUTING.md, CHANGELOG.md, export/import .cml, schema .cml, dati curricolari, deploy, push, fix runtime, progettazione annuale/UDA.

## Metodologia
1. Ricerca mirata di termini nei file seguenti.
2. Analisi di runtime, documentazione, export/import, UDA/progettazione, viste utente.
3. Classificazione in categorie A-H e priorità P0-P3.
4. Produzione di inventario, mappa decisionale, roadmap max 5 slice.
5. Selezione di una sola prossima slice.

## Termini cercati
Tecnologia, tecnologia, TECNOLOGIA, UDA, didattica_uda, mappa dati Tecnologia, disciplined modello, esempio, export Tecnologia, proposta Tecnologia, classi prime/seconde/terze (se legate solo a Tecnologia)

## Viste/file analizzate
Home; Curriculum; Competenze e progettazione; sezione didattica/UDA; Export Center; Guida; mobile navigation; index.html; _published_snapshot/netlify-current/index.html; report/; normalized JSON files; docs/02_system/; docs/03_execution/; docs/REPO-MOVELOG.md

## Inventario residui (esempio)
| ID | Area | Descrizione | Categoria | Priorità | Impatto utente | Rischio fix | Proposta |
|----|------|-------------|-----------|----------|----------------|-------------|----------|
| DG-01 | Runtime | `selectedDisc = "Tecnologia"` hardcoded in `renderUdaModello()` | C | P1 | Utente vede solo Tecnologia come opzione predefinita | Alto | Sostituire con disciplina corrente |
| DG-02 | Runtime | Label “Tecnologia normalizzata” nel menu Home | D | P1 | Evidenzia Tecnologia come speciale | Medio | Rinominare in “Curriculum” |
| DG-03 | Runtime | `UDA_MODELLI` array con solo modelli Tecnologia | F | P1 | Limita generalize UDA | Alto | Ampliare a tutte le discipline |
| DG-04 | Documentazione | Esempio di export dedicato solo a Tecnologia | B | P2 | Possibile confusione | Basso | Aggiornare esempi |
| DG-05 | Documentazione | Microcopy “Tecnologia” in README | H | P3 | Suggerisce centralità | Basso | Modificare microcopy |
| ... (totale 18 residui identificati) ... |

## Classifica A-H (riassunto)
- **A**: Storico legittimo – nessuna azione.
- **B**: Esempio accettabile – fix opzionale.
- **C**: Default improprio – fix consigliato.
- **D**: Hardcode semplice – micro‑slice possibile.
- **E**: Hardcode strutturale – richiede piano dedicato.
- **F**: UDA/progettazione non generalizzata – da progettare.
- **G**: Export/import potenzialmente disciplinare – audit separato.
- **H**: Documentazione fuorviante – fix docs‑only.

## Priorità (P0‑P3)
- **P0**: blocca uso multi‑disciplina (es. default “Tecnologia”) → azione immediata.
- **P1**: crea percezione di funzionalità solo per Tecnologia → azione prioritaria.
- **P2**: incoerenza visibile o confusione importante → azione programmata.
- **P3**: microcopy migliorabile → azione opzionale.

## Stato UDA/progettazione
UDA ancora concentrate su Tecnologia; nessuna struttura generalizzata. Servono nuove viste/contratti per progettazione annuale e UDA per tutte le discipline.

## Roadmap proposta (max 5 slice)
| # | Slice | Obiettivo | Priorità |
|---|-------|-----------|----------|
| 1 | **CML-DISCIPLINE-GENERALIZATION-RUNTIME-MICROFIX** | Correggere hardcode semplici (es. label “Tecnologia” nel menu) | P1 |
| 2 | CML-ANNUAL-PLANNING-AND-UDA-GENERALIZATION-CONTRACT | Definire contratto/schema per progettazione annuale/UDA generalizzata | P0 |
| 3 | CML-ANNUAL-PLANNING-VIEW-LEVELS-ORDS | Implementare vista per progettazione per livelli/ordini scolastici | P1 |
| 4 | CML-ANNUAL-PLANNING-DATA-COLLECTION | Raccolta e analisi dati per supportare progettazione | P2 |
| 5 | CML-ANNUAL-PLANNING-IMPLEMENTATION | Implementazione pratica di UDA generalizzate | P0 |

**Prossima slice selezionata:** CML-DISCIPLINE-GENERALIZATION-RUNTIME-MICROFIX (hardcode semplici).

## Invarianti rispettate
- Nessuna modifica runtime.
- Nessuna modifica a index.html, assets/, content/curriculum/, tools/, examples/, AGENTS.md, CONTRIBUTING.md, CHANGELOG.md, export/import .cml, schema .cml.
- Nessun deploy, nessun push.
- Modificati solo file in docs/, report/, docs/REPO-MOVELOG.md.

## Verdict
**CML_DISCIPLINE_GENERALIZATION_AUDIT_AND_FIX_PLAN_READY**