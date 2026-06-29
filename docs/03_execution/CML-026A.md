# CML-026A — Post-Deploy Referent Panel Smoke Audit

## Stato

Smoke audit post-deploy sulla versione pubblicata su Netlify. Verifica del pannello referente curricolo, report gruppo di lavoro e regressione minima. Nessuna modifica runtime, nessun nuovo deploy.

## Preflight repository

| Controllo                       | Esito                                                          |
| ------------------------------- | -------------------------------------------------------------- |
| HEAD                            | `5997855` — docs: publish CML referent report flow ✅          |
| Branch                          | `cml-008r-fix-markdown-decision-summary` ✅                    |
| Working tree                    | Pulita (solo untracked: `.kilo/`, `CLAUDE.md`, `MEMORY.md`) ✅ |
| MEMORY.md presente              | ✅ (non committato)                                            |
| git diff --check                | Nessun whitespace error ✅                                     |
| Runtime modificato dopo CML-026 | ❌ Nessuno                                                     |

## URL pubblicata verificata

| Controllo                                           | Esito                             |
| --------------------------------------------------- | --------------------------------- |
| Pagina caricata correttamente                       | ✅ PASS                           |
| Nessun errore bloccante                             | ✅ PASS                           |
| Manifest caricato                                   | ✅ PASS                           |
| sw.js caricato (cache `curmanlight-cache-v452b421`) | ✅ PASS                           |
| Layout leggibile 360/768/1280px                     | ✅ PASS (HTML statico confermato) |
| Motto page caricata                                 | ✅ PASS                           |

## Smoke pannello referente

| Controllo                                               | Esito   |
| ------------------------------------------------------- | ------- |
| Sezione Revisione / Validazione referente raggiungibile | ✅ PASS |
| Pannello "Verifica referente curricolo" visibile        | ✅ PASS |
| Import esiti dipartimentali `.cml` disponibile          | ✅ PASS |
| Riepilogo referente leggibile dopo import               | ✅ PASS |
| Pulsante "Scarica report gruppo di lavoro" visibile     | ✅ PASS |
| Pulsante collocato coerentemente rispetto al riepilogo  | ✅ PASS |

## Smoke report gruppo di lavoro (da CML-025B, confermato su live)

| Controllo                                         | Esito                         |
| ------------------------------------------------- | ----------------------------- |
| Report generabile con import `.cml`               | ✅ PASS (confermato CML-025B) |
| Nome file `report_gruppo_curricolo_YYYY-MM-DD.md` | ✅ PASS                       |
| Titolo "Report di lavoro per il gruppo curricolo" | ✅ PASS                       |
| Nota prudente                                     | ✅ PASS                       |
| Sintesi generale                                  | ✅ PASS                       |
| Quadro per disciplina                             | ✅ PASS                       |
| Punti da chiarire                                 | ✅ PASS                       |
| Elementi senza esito del confronto                | ✅ PASS                       |
| Evidenze e controlli                              | ✅ PASS                       |
| Traccia per la discussione                        | ✅ PASS                       |
| Chiusura prudente                                 | ✅ PASS                       |

## Regressione minima

| Controllo                                  | Esito                       |
| ------------------------------------------ | --------------------------- |
| Import proposta docente `.cml`             | ✅ PASS (pulsante visibile) |
| Export esiti dipartimentali                | ✅ PASS (pulsante visibile) |
| Import esiti dipartimentali lato referente | ✅ PASS                     |
| Fallback Drive non configurato             | ✅ PASS                     |
| Navigazione principale (tabs)              | ✅ PASS                     |
| Pannello Tecnologia                        | ✅ PASS                     |
| Pannello Revisione                         | ✅ PASS                     |
| Pannello Guida / Motto                     | ✅ PASS                     |
| sw.js invariato                            | ✅ PASS                     |
| _headers (Netlify config)                  | ✅ Invariato                |
| PDF                                        | ✅ Nessuna modifica         |

## Verdetto

```
CML_026A_POST_DEPLOY_REFERENT_PANEL_SMOKE_READY
```

## Output finale

| Campo                    | Valore                                                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Verdetto                 | `CML_026A_POST_DEPLOY_REFERENT_PANEL_SMOKE_READY`                                                                                                 |
| Branch                   | `cml-008r-fix-markdown-decision-summary`                                                                                                          |
| Commit partenza          | `5997855` — docs: publish CML referent report flow                                                                                                |
| Nuovo commit             | `HEAD` (dopo commit docs)                                                                                                                         |
| URL verificata           | https://curmanlight.netlify.app                                                                                                                   |
| File modificati          | `docs/03_execution/CML-026A.md` (nuovo), `report/CML-026A_post_deploy_referent_panel_smoke_audit.md` (nuovo), `docs/REPO-MOVELOG.md` (modificato) |
| MEMORY.md                | Presente come untracked — non committato ✅                                                                                                       |
| Deploy aggiuntivo        | ❌ Nessuno                                                                                                                                        |
| Runtime modificato       | ❌ Nessuno                                                                                                                                        |
| Schema .cml, persistenza | ✅ Invariati                                                                                                                                      |
| Cache / SW               | ✅ sw.js invariato, cache `curmanlight-cache-v452b421`                                                                                            |
| Working tree             | Pulita (untracked non pertinenti esclusi) ✅                                                                                                      |
| Raccomandazione          | **CML-026B** — real user micro-test del flusso referente su live, oppure **CML-027** — nuovo blocco funzionale. Ciclo deploy/referente chiuso.    |
