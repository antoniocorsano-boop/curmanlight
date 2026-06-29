# Report — CML UX Curriculum Consulta Compact Runtime

## Sintesi esecutiva

La vista Curriculum / Consulta è stata compattata: rimossi i blocchi di completezza, readiness e validazione dipartimentale (60+ righe di contenuto non pertinente alla lettura). I contenuti disciplinari sono chiusi in accordion nativo `<details>`, chiusi di default. La prima schermata passa da 3-5 schermate di scroll a ~1 schermata.

## Decisione principale

La vista Consulta serve solo a leggere e orientarsi. Revisione, validazione e cruscotti di completezza appartengono ad altre viste.

## Modifiche

| File                                             | Modifica                                                     |
| ------------------------------------------------ | ------------------------------------------------------------ |
| `_published_snapshot/netlify-current/index.html` | +8/-95 righe in `renderCurricoloIstituto()`                  |
| `_published_snapshot/netlify-current/sw.js`      | CACHE_NAME bump `v453p2-navsync` → `v453p3-consulta-compact` |

## Rischi controllati

| Rischio                                    | Contromisura                                                                  |
| ------------------------------------------ | ----------------------------------------------------------------------------- |
| Blocchi di revisione non più raggiungibili | CTA "disponibili in Revisione" presente in Consulta                           |
| Accordion nasconde contenuti               | `<summary>` mostra nome e icona disciplina; contenuto accessibile con 1 click |
| Service worker serve HTML vecchio          | CACHE_NAME bump invalida cache precedente                                     |

## Verifiche

- `git diff --check`: OK
- `node --check` JS estratto: SYNTAX OK
- Hash navigation: funzionante
- Accordion: nativo, chiuso di default

## Verdict

```
CML_UX_CURRICULUM_CONSULTA_COMPACT_RUNTIME_READY
```
