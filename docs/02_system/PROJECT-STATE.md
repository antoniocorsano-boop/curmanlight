# Project State

## Snapshot

- Last milestone: CML-397 - Next Phase Selection Audit
- Last slice: CML-397 — Next Phase Selection Audit (docs-only)
- Last commit: fa13f25 (CML-396 docs: mark stable checkpoint after PM tranche)
- Active PM: PM-03 (45%), PM-06 (70%), PM-07 (40%)
- Critical Path: Validazione con utenti
- Next slice: CML-398 (Protocollo di test utente leggero)
- Last verdict: `CML_397_NEXT_PHASE_SELECTION_AUDIT_READY`
- Repository status: origin/main sincronizzato, stable checkpoint raggiunto, prossima fase: validazione con utenti

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
