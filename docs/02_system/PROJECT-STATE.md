# Project State

## Snapshot

- Last milestone: CML-398 - Protocollo di test utente leggero
- Last slice: CML-398 — Protocollo di test utente leggero (docs-only)
- Last commit: 516ad61 (CML-397 docs: select next phase after stable checkpoint)
- Active PM: PM-03 (45%), PM-06 (70%), PM-07 (40%)
- Critical Path: Validazione con utenti
- Next slice: CML-399 (User validation scenario pack)
- Last verdict: `CML_398_LIGHTWEIGHT_USER_TEST_PROTOCOL_READY`
- Repository status: origin/main sincronizzato, protocollo test utente pronto, prossima fase: esecuzione test

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
