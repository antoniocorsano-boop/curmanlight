# CML-435 — Home Mock Conformance Visibility Gate Report

## Summary

Remove non-conformant blocks from Home view after CML-434 task selector introduction. Only approved mock blocks remain visible.

## Blocks removed

| Block | Reason |
|-------|--------|
| `.home-inline-banner` "Ambiente curricolare d'Istituto" | Duplicate of hub title |
| "Operazioni principali" — Curricolo vigente, Progetta cards | Covered by task selector |
| "Operazioni di supporto" — Applicazione per classi, Adeguamento IN 2025, Processo di revisione, Esportazioni cards | Covered by task selector |

## Blocks kept

- Hub (task selector, context panel, pipeline, roles, areas, governance)
- Test guidato
- Contesto di lavoro
- Curricolo applicabile
- Discipline filter
- Footer

## Button labels updated

| Task | Before | After |
|------|--------|-------|
| consulta | Azione: vai a Consulta il curricolo | Apri il curricolo |
| progetta | Azione: vai a Prepara una progettazione | Apri Progetta |
| proponi | Azione: vai a Proponi un aggiornamento | Apri proposta |
| esporta | Azione: vai a Esporta un documento | Apri Esportazioni |

## Pair alignment

Both `index.html` and `_published_snapshot/netlify-current/index.html` patched with identical changes.

## Validators

- `git diff --check`: PASS
- `validate-cml-normalized-curriculum.mjs`: 14/14 PASS
- `test-runtime-mappa-dati-shape.mjs`: 14/14 PASS

## Constraints respected

- No backend, no accounts, no remote send
- No curriculum data modified
- No service-worker changes
- No external libraries
- Blocks removed from markup (not hidden with display:none)
- Functions used elsewhere (workContextSummary, etc.) preserved
