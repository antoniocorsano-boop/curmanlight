# CML-291 — UX-009 Residual Runtime Closure

## Attivita svolta

- Verificato stato git: main allineato a origin/main (HEAD `8fbd32d`), working tree pulito
- Ricostruito significato UX-009 leggendo PRODUCT-USABILITY-BACKLOG.md, CML-287.md, report CML-287
- Identificato il residuo: badge `badge--readonly` con stili diversi in tab-generali (`gen-badge`, pillola), Guida (inline styles) e Curriculum (box indaco con bordo)
- Applicata correzione minima:
  - CSS: allineato `.gen-badge` a `.tecnologia-norm-badge` (border-radius, border, padding)
  - CSS: aggiunta regola `.guida-note` per badge Design System
  - HTML: testo uniformato a "Sola consultazione" in tab-generali
  - HTML: rimossi stili inline dalla Guida
- Applicata modifica identica su entrambi i runtime

## Baseline iniziale

| Campo | Valore |
|---|---|
| Branch | main |
| HEAD iniziale | `8fbd32d` |
| Working tree | pulito |
| Allineamento | allineato a origin/main |

## File modificati

- `index.html`
- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-291.md`
- `report/CML-291_ux_009_residual_runtime_closure.md`
- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/02_system/PRODUCT-USABILITY-BACKLOG.md`
- aggiornamento `docs/REPO-MOVELOG.md`

## Controlli eseguiti

- `git diff --check` — OK (nessun trailing whitespace)
- Runtime parity — IDENTICAL
- Validatore curriculum — 14/14 PASS (overallValid true)
- Shape test — 14/14 PASS
- Regressione UX-001 — confermata: titolo senza "curricolo della disciplina", notice preservato, meta line rimossa
- Regressione UX-011 — confermata: titolo snello, badge+notice come unico orientamento
- badge--readonly ora coerente in tutte le sezioni (Curriculo, tab-generali, Guida)

## Stato UX-009

Da PARZIALMENTE RISOLTO (CML-283, CML-285) → RISOLTO IN CML-291

## Impatto PM-07

PM-07 passa da 0% a 10% (primo contributo misurabile: 1/4 item risolto).

## Push

Non eseguito.
