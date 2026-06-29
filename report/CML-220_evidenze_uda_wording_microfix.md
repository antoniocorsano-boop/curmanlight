# CML-220 — Evidenze/UDA Wording Microfix

## Start commit

`c072af2` (CML-219S, origin/main aligned)

## Fine commit

Da definire dopo commit.

## File modificati

- `_published_snapshot/netlify-current/index.html` — 3 righe, 3 cambiamenti testuali
- `docs/03_execution/CML-220.md`
- `report/CML-220_evidenze_uda_wording_microfix.md`
- `docs/REPO-MOVELOG.md`

## Wording modificato

| Prima                            | Dopo                                       | Riga |
| -------------------------------- | ------------------------------------------ | ---- |
| `'❌ Esclusa'`                   | `'❌ Non applicabile'`                     | 2706 |
| `\[❌ Esclusa\]`                 | `\[❌ Non applicabile\]`                   | 2878 |
| `"proposta" non vengono incluse` | `escluse non sono incluse nella bozza UDA` | 2891 |

## Comportamento preservato

- Marcatura evidenze: ✅
- UDA draft generation: ✅
- Markdown copy/download: ✅
- localStorage `cml_evidenze_state` con valore `non_applicabile`: ✅
- Hash navigation 14/14: ✅
- Validatore 14/14: ✅
- Shape test 14/14: ✅
- Nessuna modifica JSON/.cml/export-import/validator/shape-test/dipendenze: ✅

## Verdetto

`CML_220_EVIDENZE_UDA_WORDING_MICROFIX_READY`

## Next recommended

1. CML-220S — Controlled push + public smoke
2. CML-221 — Next larger cycle selection
