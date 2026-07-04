# Project State

## Snapshot

- Last milestone: CML-382 - Stable Checkpoint Publication Audit
- Last slice: CML-382 — Stable Checkpoint Publication Audit
- Last commit: ee94214 (CML-381 docs-only: product maturity post-refactor audit)
- Active PM: PM-06 (in corso, 60%)
- Critical Path: PM-06
- Next slice: TBD (prossima tranche funzionale basata su programmi PM incompleti)
- Last verdict: `CML_382_STABLE_CHECKPOINT_PUBLICATION_AUDIT_READY`
- Repository status: main...origin/main (allineato), stable checkpoint certificato

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
