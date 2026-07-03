# Report CML-280 — Applicability Matrix First Runtime Selection

## Summary

Docs-only selection slice for the first runtime entry of the Applicability Layer (CML-270). Evaluated 5 architectural options and selected the hybrid approach (Option E).

## Files created

| File | Type |
|---|---|
| `docs/03_execution/CML-280.md` | Execution doc with full analysis |
| `report/CML-280_applicability_matrix_first_runtime_selection.md` | This report |

## Files modified

| File | Change |
|---|---|
| `docs/REPO-MOVELOG.md` | Added CML-280 entry |

## Options evaluated

| ID | Description | Verdict |
|---|---|---|
| A | Card Home "Curricolo applicabile" | Good but lacks future link |
| B | Mini-matrice anno × classe | Premature, complex |
| C | Nuova sezione autonoma | Too heavy for first entry |
| D | Indicatore sintetico in card contesto | Too subtle, easily missed |
| **E** | **Approccio ibrido: card Home + link a sezione futura** | **Selected** |

## Selection rationale

Option E selected because:
1. Minimal runtime impact — card pattern already proven in CML-276/279
2. No dependency on unstructed data — "da verificare" message covers missing rules
3. Clear distinction between vigente, proposta, validato, approvato
4. Connects naturally with Work Context Layer (reads from loadWorkContext)
5. Reversible — card can be removed without side effects
6. Includes text link to future "Applicazione per classi" section

## States defined for future runtime (CML-281)

9 states from "nessun contesto impostato" through "approvato/applicabile" to "da deliberare", each with a specific user-facing message.

## Security rules defined

- Non-validated material must never appear as vigente
- Validato ≠ approvato
- Approvato ≠ applicabile a tutte le classi
- Applicabilità depends on year, class, and institutional deliberations
- Didactic design must always declare the curricular base used
- System must show "da verificare" when no rules are configured

## CML-281 perimeter defined

CML-281 will implement the Home card only — no matrix, no complex data structures, no .cml changes.

## Gate results

| Gate | Result |
|---|---|
| `git status --short` | Clean (docs only) |
| `git diff --name-only` | No runtime files |
| `git diff --check` | Clean |
| `validate-cml-normalized-curriculum.mjs` | PASS (14/14) |
| `test-runtime-mappa-dati-shape.mjs` | PASS (14/14) |
| Secret scan | No secrets in new/modified files |
| Scope check | Docs-only confirmed |

## Verdict

`CML_280_APPLICABILITY_MATRIX_FIRST_RUNTIME_SELECTION_READY_LOCAL_NOT_PUSHED`
