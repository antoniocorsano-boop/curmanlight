# Project State

## Snapshot

- Last milestone: CML-396 - Stable checkpoint post-tranche
- Last slice: CML-396 — Stable checkpoint post-tranche (docs-only)
- Last commit: 8e60c33 (CML-395 docs: smoke PM-03 PM-06 PM-07 tranche after push)
- Active PM: PM-03 (45%), PM-06 (70%), PM-07 (40%)
- Critical Path: Selezione nuova fase
- Next slice: TBD (Selezione nuova fase)
- Last verdict: `CML_396_STABLE_CHECKPOINT_POST_TRANCHE_READY`
- Repository status: origin/main sincronizzato, stable checkpoint raggiunto, deploy GitHub Pages aggiornato e verificato

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
