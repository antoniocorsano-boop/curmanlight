# CML-042 — Department CML Flow Minimal Runtime Fix

## Summary

Correzione di 2 bug nel flusso dipartimento `.cml` identificati in CML-041. Fix minimo: 2 linee in `index.html`. Nessuna modifica schema `.cml`. Nessun deploy.

## Preflight

| Controllo | Esito |
|---|---|
| HEAD | `3243fdf` (CML-041) ✅ |
| Working tree | Pulita ✅ |
| MEMORY.md / .kilo / CLAUDE.md | ✅ non committati |

## Gap corretti

| Gap | Gravità | Fix | Linea |
|---|---|---|---|
| GAP 1 | CRITICO | Aggiunto `discipline: disciplines[0] \|\| ""` | 2570 |
| GAP 2 | MAGGIORE | Aggiunti attributi `value` ai `<option>` | 2545 |

## Smoke

| Verifica | Esito |
|---|---|
| Export include `discipline` | ✅ |
| Dropdown value underscore | ✅ |
| Referente compatibile | ✅ |
| Regressioni | ❌ Nessuna |

## Output finale

| Campo | Valore |
|---|---|
| Verdict | `CML_042_DEPARTMENT_CML_FLOW_MINIMAL_RUNTIME_FIX_READY` |
| Commit hash | In corso |
| File modificati | `index.html`, exec doc, report, MOVELOG |
| Gap corretti | GAP 1 (discipline), GAP 2 (handling) |
| Righe modificate | 2 (linee 2545, 2570) |
| Controlli PASS | 5/5 ✅ |
| Fix minimo | ✅ |
| Schema `.cml` modificato | ❌ Nessuno |
| Persistenza modificata | ❌ Nessuna |
| Deploy | ❌ Nessuno |
| MEMORY.md / .kilo / CLAUDE.md | ✅ non committati |
| Prossimo step | CML-042A — smoke end-to-end con esempi CML-040 |
