# CML-295 — UX-013 Duplicate Indicators Closure

## Attivita svolta

- Verificato stato git: main allineato a origin/main (HEAD `b09dd4f`), working tree pulito
- Ricostruito significato UX-013 leggendo backlog, stato progetto e documenti recenti
- Analizzato il runtime Curriculum: identificata duplicazione tra `curricolo-disc-focus-stats` (quadro generale) e `tecnologia-norm-stats` (pannello disciplina)
- Applicata correzione minima: rimossa stringa conteggio totale dal disc-focus, preservato conteggio aggiornamenti 2025 (informazione unica)
- Modifica identica su `index.html` e `_published_snapshot/netlify-current/index.html`

## Baseline iniziale

| Campo | Valore |
|---|---|
| Branch | main |
| HEAD iniziale | `b09dd4f` |
| Working tree | pulito |
| Allineamento | allineato a origin/main |

## File modificati

- `index.html`
- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-295.md`
- `report/CML-295_ux_013_duplicate_indicators_closure.md`
- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/02_system/PRODUCT-USABILITY-BACKLOG.md`
- aggiornamento `docs/REPO-MOVELOG.md`

## Controlli eseguiti

- `git diff --check` — OK
- Runtime parity — IDENTICAL
- Validatore curriculum — 14/14 PASS (overallValid true)
- Shape test — 14/14 PASS
- Regressione UX-001 — confermata: titolo senza "curricolo della disciplina", notice preservato
- Regressione UX-009 — confermata: gen-badge e guida-note badge invariati
- Regressione UX-011 — confermata: testata snella invariata

## Stato UX-013

TODO → RISOLTO IN CML-295

## Impatto PM

- PM-04: invariato al 65% (UX-013 e P2, non blocca critical path)
- PM-07: invariato al 10%

## Push

Non eseguito.
