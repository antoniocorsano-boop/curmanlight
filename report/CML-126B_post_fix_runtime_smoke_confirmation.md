# Report CML-126B: Post-Fix Runtime Smoke Confirmation

## Premessa

CML-126 (POST_PUSH_RUNTIME_AND_NAVIGATION_SMOKE) si è concluso con verdetto bloccante: `ReferenceError: setTab is not defined` e `ReferenceError: setMappaDisciplina is not defined`. CML-127 ha corretto il problema esponendo le funzioni su `window`. CML-126B conferma che la regressione è risolta.

## Dati verifica

| Controllo                                                 | Esito                 |
| --------------------------------------------------------- | --------------------- |
| window.setTab presente nel codice (riga 4952)             | ✅                    |
| window.setMappaDisciplina presente nel codice (riga 4953) | ✅                    |
| Validatore curriculum (7 file, 94 unità)                  | ✅ overallValid: true |
| git diff --check                                          | ✅ pulito             |
| Homepage HTTP 200                                         | ✅                    |
| Curriculum tab HTTP 200                                   | ✅                    |
| Didattica tab HTTP 200                                    | ✅                    |
| Validazione dipartimentale HTTP 200                       | ✅                    |
| Riepilogo HTTP 200                                        | ✅                    |
| Esportazioni HTTP 200                                     | ✅                    |
| Guida HTTP 200                                            | ✅                    |
| Service Worker HTTP 200                                   | ✅                    |
| window.setTab nel file servito                            | ✅                    |
| window.setMappaDisciplina nel file servito                | ✅                    |
| Nessun ReferenceError setTab/setMappaDisciplina           | ✅                    |

## Stato file

- `_published_snapshot/netlify-current/index.html`: modificato (CML-127 fix, nessuna nuova modifica in CML-126B)
- Tutti gli altri file runtime: invariati

## Verdetto

`CML_126B_POST_FIX_RUNTIME_SMOKE_CONFIRMATION_READY`
