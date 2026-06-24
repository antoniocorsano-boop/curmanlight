# CML-106B — READINESS_COUNTER_ALIGNMENT_MICROFIX

## Contesto
- Branch: `main`
- Ultimo commit: `115b9f1` (CML-106A docs)
- Commit runtime per CML-106: `ffcd8f3`
- Pre-requisito: CML-106A con verdetto `CML_106A_GEOGRAFIA_COMPLETENESS_READINESS_LIVE_SMOKE_READY`
- Nota residua CML-106A: contatore "Sola consultazione" mostrava 8, ma l'elenco citava 7 discipline.
- Causa: discrepanza preesistente da CML-085 (contatore originale 14 invece di 13 su 14 discipline totali).

## Obiettivo
Correggere esclusivamente il contatore "Sola consultazione" da 8 a 7 in tutti i punti del runtime, rendendolo coerente con l'elenco effettivo delle 7 discipline residue.

## Perimetro
| Elemento | Azione |
|----------|--------|
| `index.html` | Modifica 3 occorrenze: contatore completezza, contatore readiness, testo "Altre 8" → "Altre 7" |
| Schema `.cml` | Non toccato |
| Export/import | Non toccato |
| Role access | Non toccato |
| Service worker | Non toccato |
| Contenuti disciplinari | Non toccati |
| Geografia | Non toccata |

## Modifiche effettuate

### File: `_published_snapshot/netlify-current/index.html`

| Linea | Prima | Dopo | Descrizione |
|-------|-------|------|-------------|
| 4544 | `counter-num">8</div>` | `counter-num">7</div>` | Completezza — "Sola consultazione" |
| 4565 | `counter-num">8</div>` | `counter-num">7</div>` | Readiness — "Sola consultazione" |
| 4576 | `Altre 8 discipline` | `Altre 7 discipline` | Readiness — testo descrittivo |

## Controlli post-fix

| Controllo | Esito |
|-----------|-------|
| `git diff --check` | ✅ Nessun whitespace error |
| "Sola consultazione" counters | ✅ 7 in entrambi (completezza e readiness) |
| "Altre 7 discipline" | ✅ Presente 1 occorrenza |
| "Bozza completa disponibile" | ✅ 7 (invariato) |
| "In revisione" | ✅ 7 (invariato) |
| "Pronte per approvazione" | ✅ 0 (invariato) |
| Geografia in revisione | ✅ 7ma disciplina confermata |

## Verdetto
`CML_106B_READINESS_COUNTER_ALIGNMENT_MICROFIX_READY`

## Prossimo step
CML-107 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT (base pulita, indicatori coerenti)
