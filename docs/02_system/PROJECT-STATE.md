# Project State

## Snapshot

- Last milestone: CML-381 - Product Maturity Post-Refactor Audit
- Last slice: CML-381 — Product Maturity Post-Refactor Audit
- Last commit: f4af23a (CML-380 docs-only: post-refactor runtime stability audit)
- Active PM: PM-06 (in corso, 60%)
- Critical Path: PM-06
- Next slice: CML-382 (stable checkpoint publication audit)
- Last verdict: `CML_381_PRODUCT_MATURITY_POST_REFACTOR_AUDIT_READY`
- Repository status: main...origin/main (allineato), docs-only CML-381 pronta al commit locale controllato

## Recent Refactor Chain (CML-371 → CML-380)

La catena CML-371 → CML-380 ha completato il refactor dell'accesso runtime ai dati disciplinari:

- Runtime access generalizzato via `getUnitsForDiscipline(discKey)`
- Rimozione dead code `TECNOLOGIA_NORM` / `TECNOLOGIA_NORM_DATA`
- Zero residui hardcoded disciplinari certificati
- Runtime stabile, nessuna regressione

## Runtime Perimeter Reminder

Always treat runtime scope as:

- index.html
- _published_snapshot/netlify-current/index.html

Never reference only one runtime file in execution summaries.
