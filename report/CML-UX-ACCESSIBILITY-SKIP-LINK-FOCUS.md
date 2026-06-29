# CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS

## Sintesi

Slice runtime mirata per migliorare accessibilita' tastiera e gestione focus di CurManLight. La modifica introduce lo skip link verso il contenuto principale e rende coerente il focus quando l'utente cambia tab o disciplina.

## File coinvolti

- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS.md`
- `report/CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS.md`
- `docs/REPO-MOVELOG.md`

## Esiti

| Area | Esito |
|---|---|
| Skip link | PASS |
| Focus `setTab` | PASS |
| Focus `selectDisc` | PASS |
| Validatore curriculum | 14/14 PASS |
| Shape test runtime | 14/14 PASS |
| Smoke tastiera/focus | `SMOKE_PASS_WITH_NON_BLOCKING_RESOURCE_WARNINGS` |
| Errori JavaScript reali | 0 |
| Resource warning non bloccanti | 3 |

## Vincoli rispettati

- Nessuna modifica a curriculum JSON.
- Nessuna modifica a export/import `.cml`.
- Nessuna modifica a manifest o service worker.
- Nessuna modifica a bottom bar mobile o Export Center.
- `.tmp/`, `test-results/` e `tools/smoke-hash-nav.mjs` esclusi dal commit.
- Nessun push eseguito.

## Verdict

```text
CML_UX_ACCESSIBILITY_SKIP_LINK_FOCUS_READY
```