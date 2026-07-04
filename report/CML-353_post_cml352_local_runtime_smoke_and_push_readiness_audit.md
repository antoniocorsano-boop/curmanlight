# Report: CML-353 — Post-CML-352 Local Runtime Smoke and Push Readiness Audit

## Branch e baseline
- Branch: `codex/cml-352-residual-button-border-radius-uniformity-microfix`
- Commit iniziale: `0473ad9` (CML-351 docs-only)
- Commit CML-352: `2f30ee9` (runtime microfix)
- origin/main: `2227581`
- Commit locali ahead di origin/main: 2 (CML-351 + CML-352)
- Tipo slice: docs-only (smoke + push readiness audit)
- Macroprogramma: PM-07 Uniformità

## Obiettivo
Verificare che il microfix CSS di CML-352 sia coerente, isolato, reversibile e pronto per push controllato della catena CML-351/CML-352.

## Verifica stato iniziale
- Branch corrente: `codex/cml-352-residual-button-border-radius-uniformity-microfix` ✅
- HEAD: `2f30ee9` ✅
- Commit `0473ad9` presente: ✅
- Commit `2f30ee9` presente: ✅
- Relazione con origin/main: ahead 2 ✅
- Working tree: pulito (solo `CurManLightBrain/` untracked, fuori scope) ✅

## Verifica catena locale
| Commit | Slice | Tipo | Status |
|--------|-------|------|--------|
| `0473ad9` | CML-351 | docs-only (audit) | ✅ Presente |
| `2f30ee9` | CML-352 | runtime microfix | ✅ Presente |
| Commit estranei | — | — | ✅ Nessuno |

## Audit tecnico diff CML-352

### File modificati
| File | Tipo | Modifiche |
|------|------|-----------|
| `index.html` | Runtime | 104 insertions, 104 deletions |
| `_published_snapshot/netlify-current/index.html` | Runtime | 104 insertions, 104 deletions |
| `docs/03_execution/CML-352.md` | Docs | Nuovo |
| `report/CML-352_residual_button_border_radius_uniformity_microfix.md` | Docs | Nuovo |
| `docs/REPO-MOVELOG.md` | Docs | Aggiornato |

### Isolamento modifiche runtime
- File runtime modificati: solo `index.html` e snapshot ✅
- Modifiche limitate a `border-radius`: ✅ (nessuna diff non-border-radius)
- Modifiche JS sostanziali: assenti ✅
- Modifiche dati curricolari: assenti ✅
- Modifiche schema `.cml`: assenti ✅
- Modifiche export/import: assenti ✅

## Verifica parità runtime
| File | `border-radius:8px` nel diff |
|------|------------------------------|
| `index.html` | 56 |
| `_published_snapshot/netlify-current/index.html` | 56 |
| **Parità** | **PASS** ✅ |

## Controlli eseguiti

| Controllo | Esito |
|-----------|-------|
| `git diff --check` | ✅ PASS (exit 0) |
| `validate-cml-normalized-curriculum.mjs` | ✅ PASS (14/14, overallValid: true) |
| `test-runtime-mappa-dati-shape.mjs` | ✅ PASS (14/14, 0 failed) |
| Residui `border-radius: 7px` (index.html) | ✅ 0 |
| Residui `border-radius: 7px` (snapshot) | ✅ 0 |
| Residui `border-radius: 6px` (index.html) | ✅ 0 |
| Residui `border-radius: 6px` (snapshot) | ✅ 0 |
| File fuori perimetro | ✅ Nessuno |
| `git status --short` | ✅ Pulito (solo `CurManLightBrain/` untracked) |

## Rilievi classificati

| Livello | Conteggio | Descrizione |
|---------|-----------|-------------|
| **P0** (regressione/divergenza) | 0 | — |
| **P1** (modifica fuori scope) | 0 | — |
| **P2** (micro-incoerenza residua) | 0 | — |
| **P3** (miglioramento opzionale) | 0 | — |
| **HOLD** | Confermato | Esclusioni CML-351: pill shape (16-999px), container (9px), dialog (14-16px), card Home (11px), pannelli speciali (12px), cluster C (5px) |

## Readiness push controllato

**SÌ** — Tutti i controlli PASS, nessun P0/P1 rilevato.

La catena CML-351/CML-352 è:
- **Coerente**: modifiche runtime isolate a `border-radius`
- **Isolata**: nessun commit estraneo, nessun file fuori perimetro
- **Reversibile**: basta revert del commit `2f30ee9` per annullare CML-352
- **Paritaria**: index.html e snapshot hanno modifiche equivalenti (56/56)
- **Validata**: validatori curriculum e shape test passano

## Prossima azione raccomandata

1. **CML-354**: controlled push della catena CML-351/CML-352 su `origin/main`
2. **CML-355**: apertura PR da branch dedicato a `main` e merge
3. **CML-356**: deploy GitHub Pages e live smoke

## File creati/modificati
- `docs/03_execution/CML-353.md` (nuovo)
- `report/CML-353_post_cml352_local_runtime_smoke_and_push_readiness_audit.md` (nuovo)
- `docs/REPO-MOVELOG.md` (aggiornato)

## Fuori perimetro
- Nessuna modifica runtime (`index.html`, snapshot)
- Nessuna modifica JavaScript, dati curricolari, schema `.cml`, export/import
- Nessun push, PR o deploy
- `CurManLightBrain/` escluso

## Verdict
`CML_353_POST_CML352_LOCAL_RUNTIME_SMOKE_AND_PUSH_READINESS_AUDIT_READY_LOCAL_NOT_PUSHED`