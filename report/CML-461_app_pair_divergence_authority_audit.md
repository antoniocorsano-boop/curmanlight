# CML-461 — App Pair Divergence Authority Audit

## Verdetto

```
CML_461_APP_PAIR_DIVERGENCE_AUTHORITY_AUDIT_READY_LOCAL_NOT_PUSHED
```

## Riepilogo

Audita completa della divergenza tra `index.html` e `_published_snapshot/netlify-current/index.html`.

**Risultato**: 4 differenze identificate. Tre erano non funzionali; l'hunk relativo alle frecce era funzionale (in HTML statico `\u2192` viene mostrato letteralmente). Autorità assegnata alla snapshot pubblicata. Correzione applicata in CML-462 durante review PR #52.

## Hash

| File | Blob hash |
|------|-----------|
| `index.html` | `b90ce3555c62f6baa3b4c9a80ccf34bf7b0c504a` |
| `_published_snapshot/netlify-current/index.html` | `0db23f818e92abd351fbc1115f7580289912c616` |

## Differenze

| # | Hunk | Tipo | Funzionale? |
|---|------|------|-------------|
| 1 | CSS blank line dopo `.home-dashboard` | editoriale | no |
| 2 | Arrow encoding (`→` vs `\u2192`), 4 occorrenze | encoding letterale non interpretato | **sì** (corretto in CML-462) |
| 3 | `refreshCurrentDisciplineViews()` whitespace | formatting | no |
| 4 | `renderHomeWorkContext()` position + commento | ricollocamento | no (hoisting) |

## Origine

La divergenza corrente deriva dalla catena CML-439 ed era già presente nella mainline prima del merge della PR #50. La PR #50, non includendo modifiche a `index.html` o alla snapshot pubblicata, ha preservato la divergenza preesistente e non l'ha reintrodotta.

## Autorità

```
AUTORITÀ = _published_snapshot/netlify-current/index.html
DIREZIONE = published → root
```

## Prossimo passo

CML-462 — App Pair Root Reconciliation (docs-only consentito, modifica solo `index.html`).
