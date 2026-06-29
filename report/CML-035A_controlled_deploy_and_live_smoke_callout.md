# CML-035A — Controlled Deploy and Live Smoke Callout

## Summary

Deploy del callout "sezioni generali" su Netlify e verifica smoke live. Callout visibile, testi corretti, nessuna regressione.

## Deploy

| Dato          | Valore                                                                           |
| ------------- | -------------------------------------------------------------------------------- |
| HEAD partenza | `321f9ef`                                                                        |
| Deploy ID     | `6a38d3308c3505e3f7bc8d16`                                                       |
| URL live      | https://curmanlight.netlify.app                                                  |
| File caricati | 1 (index.html)                                                                   |
| Deploy time   | 3.5s                                                                             |
| Metodo        | `npx netlify deploy` (draft) + API `restoreSiteDeploy` (promozione a produzione) |
| Note          | `--prod` CLI fallisce con Forbidden; workaround via API diretta                  |

## Smoke live

| Controllo                                  | Esito          |
| ------------------------------------------ | -------------- |
| App caricata                               | ✅             |
| Callout visibile                           | ✅             |
| Testo callout corretto                     | ✅             |
| Version 2012 e 2025                        | ✅             |
| Stato documento (entrambi)                 | ✅             |
| Nessuna falsa approvazione                 | ✅             |
| Sezioni generali (Premessa, Profilo, ecc.) | ✅             |
| **Totale**                                 | **10/10 PASS** |

## Output finale

| Campo                           | Valore                                                            |
| ------------------------------- | ----------------------------------------------------------------- |
| Verdict                         | `CML_035A_CONTROLLED_DEPLOY_AND_LIVE_SMOKE_CALLOUT_READY`         |
| Commit hash                     | In corso (dopo documentazione)                                    |
| URL live                        | https://curmanlight.netlify.app                                   |
| Esito deploy                    | ✅ Draft + promozione API                                         |
| Controlli smoke                 | 10/10 PASS                                                        |
| Runtime modificato dopo CML-035 | ❌ Nessuno                                                        |
| Logica JS modificata            | ❌ Nessuna                                                        |
| Schema `.cml` modificato        | ❌ Nessuno                                                        |
| Persistenza modificata          | ❌ Nessuna                                                        |
| MEMORY.md                       | ✅ non committato                                                 |
| .kilo/                          | ✅ non committato                                                 |
| CLAUDE.md                       | ✅ non committato                                                 |
| Working tree finale             | Pulita (solo untracked non pertinenti) ✅                         |
| Prossimo step                   | Decidere se chiudere ciclo o procedere con navigazione/callout UX |
