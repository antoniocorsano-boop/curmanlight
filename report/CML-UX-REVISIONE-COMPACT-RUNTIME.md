# Report — CML UX Revisione Compact Runtime

## Sintesi esecutiva

Vista Revisione compattata: rimosse esportazioni confronto, spostati strumenti processo in tab separato, export disciplina reso richiamabile. Service worker bumpato. 54 inserzioni / 65 rimozioni in `index.html`.

## Decisione principale

La vista Revisione ora ha un solo compito: **decidere**. Esportazioni confronto delegate a export center futuro (#4-5). Strumenti processo in `#tab-processo`.

## Modifiche

| File | Modifica |
|---|---|
| `_published_snapshot/netlify-current/index.html` | -65/+54 righe: export rimosso, notice compattata, processo in tab separato, bozza disciplina toggle |
| `_published_snapshot/netlify-current/sw.js` | CACHE_NAME bump `v453p3-consulta-compact` → `v453p4-revisione-compact` |

## Componenti Revisione dopo la slice

| Componente | Stato |
|---|---|
| Toolbar filtri (Tutti/Da decidere/Altri filtri) | Invariata |
| 📝 Bozza disciplina toggle | Nuovo, richiamabile |
| Usage notice | Compattata a 1 riga |
| cards-area (decisioni) | Invariata |
| Tab Processo (import/validazione) | Nuovo, spostato da Revisione |

## Rischi controllati

| Rischio | Contromisura |
|---|---|
| Export confronto non più accessibile da Revisione | Ancora disponibile in Riepilogo ed Esportazioni |
| Processo nascosto | Subnav esplicita `🔧 Processo` |
| Bozza disciplina non trovata | Pulsante `📝 Bozza disciplina` in toolbar |

## Verifiche

- `node --check`: SYNTAX OK
- `git diff --check`: OK
- `git diff --stat`: 2 file, 54+/65-
- Smoke hash/menu/processo: OK

## Verdict

```
CML_UX_REVISIONE_COMPACT_RUNTIME_READY
```
