# Report — CML UX Export Center Deduplication Runtime

## Sintesi esecutiva

Export Center completamente riscritto con 6 gruppi di esportazione. Definitivo deduplicato (sostituito da bridge link). Aggiunte bozze disciplinari, file .cml e report gruppo lavoro. Tre funzioni inesistenti (`exportRiepilogoWord`, `exportMarkdownRiepilogo`, `exportPDFRiepilogo`) rimosse. Service worker bumpato.

## Modifiche

| File                                             | Modifica                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `_published_snapshot/netlify-current/index.html` | `#tab-esportazioni` riscritto (6 gruppi), `#tab-riepilogo` deduplicato (export rimossi → bridge) |
| `_published_snapshot/netlify-current/sw.js`      | CACHE_NAME bump `v453p4-revisione-compact` → `v453p5-export-center`                              |

## Gruppi Export Center

| Gruppo              | Pulsanti                                                     | Provenienza                                  |
| ------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| Documento finale    | Word definitivo, Copia per Word, Testo, PDF                  | Definitivo                                   |
| Confronto modifiche | Word confronto, Copia per Word, Testo, PDF                   | Esportazioni (prima via navigazione forzata) |
| Bozza disciplina    | Genera bozza, Copia testo, Scarica testo                     | Revisione (toggle)                           |
| File di lavoro .cml | Scarica proposta docente, Invia al Drive, Esito dipartimento | Definitivo + Processo                        |
| Report e resoconti  | Resoconto sintesi, Report gruppo lavoro                      | Esportazioni + Processo                      |
| Copia di sicurezza  | Salva copia, Importa copia                                   | Home + Esportazioni                          |

## Bug fix

Tre funzioni chiamate ma mai definite rimosse: `exportRiepilogoWord()`, `exportMarkdownRiepilogo()`, `exportPDFRiepilogo()` — causavano ReferenceError silenziosi.

## Rischi controllati

| Rischio                                    | Contromisura                                                                                   |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Export non più raggiungibili da Definitivo | Bridge link esplicito verso Esportazioni                                                       |
| Bozza disciplina non trovata               | Pulsanti dedicati in Export Center + toggle in Revisione                                       |
| .cml export usato senza import             | Le funzioni JS hanno già guard (es. `downloadReferentGroupWorkReport` mostra toast se assente) |

## Verifiche

- `node --check`: SYNTAX OK
- `git diff --check`: OK

## Verdict

```
CML_UX_EXPORT_CENTER_DEDUPLICATION_RUNTIME_READY
```
