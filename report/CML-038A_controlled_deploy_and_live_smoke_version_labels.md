# CML-038A — Controlled Deploy and Live Smoke Version Labels

## Summary

Deploy delle etichette aggiornate del selettore versione su Netlify e verifica smoke live. Etichette "IN 2012 (vigente)" e "IN 2025 (bozza)" visibili e corrette.

## Deploy

| Dato          | Valore                                                    |
| ------------- | --------------------------------------------------------- |
| HEAD partenza | `b70ffc2`                                                 |
| Deploy ID     | `6a38d9593270fa47779c678c`                                |
| URL live      | https://curmanlight.netlify.app                           |
| File caricati | 1 (index.html)                                            |
| Deploy time   | 3.4s                                                      |
| Metodo        | Draft deploy + API `restoreSiteDeploy` (--prod Forbidden) |

## Smoke live

| Controllo                   | Esito        |
| --------------------------- | ------------ |
| App caricata                | ✅ 247KB     |
| IN 2012 (vigente)           | ✅           |
| IN 2025 (bozza)             | ✅           |
| Stato documento 2012/2025   | ✅           |
| Callout sezioni generali    | ✅           |
| Sezioni generali (Premessa) | ✅           |
| Nessuna falsa approvazione  | ✅           |
| **Totale**                  | **9/9 PASS** |

## Output finale

| Campo                           | Valore                                                           |
| ------------------------------- | ---------------------------------------------------------------- |
| Verdict                         | `CML_038A_CONTROLLED_DEPLOY_AND_LIVE_SMOKE_VERSION_LABELS_READY` |
| Commit hash                     | In corso                                                         |
| URL live                        | https://curmanlight.netlify.app                                  |
| Deploy ID                       | `6a38d9593270fa47779c678c`                                       |
| Esito deploy                    | ✅ Draft + API restore                                           |
| Controlli smoke                 | 9/9 PASS                                                         |
| Runtime modificato dopo CML-038 | ❌ Nessuno                                                       |
| Logica JS modificata            | ❌ Nessuna                                                       |
| Schema `.cml` modificato        | ❌ Nessuno                                                       |
| Persistenza modificata          | ❌ Nessuna                                                       |
| MEMORY.md                       | ✅ non committato                                                |
| .kilo/                          | ✅ non committato                                                |
| CLAUDE.md                       | ✅ non committato                                                |
| Working tree finale             | Pulita ✅                                                        |
| Prossimo step                   | Decidere se chiudere il ciclo o proseguire con navigazione/UX    |
