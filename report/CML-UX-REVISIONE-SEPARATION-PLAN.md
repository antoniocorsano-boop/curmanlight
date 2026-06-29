# Report — CML UX Revisione Separation Plan

## Sintesi esecutiva

Piano docs-only per separare la vista Revisione in 4 componenti indipendenti: decidere (primario), esportare disciplina (richiamabile), strumenti processo (vista separata), esportazioni confronto (delegate a export center). Definito contratto per la slice runtime #3.

## Decisione principale

La vista Revisione ha un solo compito: **decidere** (approvare/rifiutare/modificare/aggiungere/rimuovere). Esportazioni, import e validazione appartengono ad altri spazi.

## Componenti analizzati

| Componente                              | Stato attuale               | Destinazione                             |
| --------------------------------------- | --------------------------- | ---------------------------------------- |
| Toolbar filtri (7 pulsanti)             | In Revisione                | Invariata                                |
| Toolbar export (6 pulsanti + toggle)    | In Revisione                | Rimossa (export center #4-5)             |
| Usage notice                            | Accordion espandibile       | Compattata a 1 riga                      |
| Strumenti processo (import/validazione) | Accordion in Revisione      | Nuovo tab `#tab-processo` (raccomandato) |
| Per-discipline export panel             | `display:block` dopo render | Pulsante richiamabile in toolbar         |
| cards-area (decisioni)                  | In Revisione                | Invariata                                |

## Rischi controllati

| Rischio                            | Contromisura                             |
| ---------------------------------- | ---------------------------------------- |
| Export disciplina meno accessibile | Pulsante in toolbar, ≤ 2 click           |
| Strumenti processo nascosti        | Tab esplicito in subnav, non sepolti     |
| Filtri esportazione persi          | Mantenuti export in Riepilogo fino a #5  |
| Docente non trova bozza disciplina | Pulsante esplicito "📝 Bozza disciplina" |

## Verifiche

- Solo docs modificati: OK
- `git diff --check`: OK

## Verdetto

```
CML_UX_REVISIONE_SEPARATION_PLAN_READY
```
