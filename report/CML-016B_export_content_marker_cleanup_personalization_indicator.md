# CML-016B — Export Content Marker Cleanup and Personalization Indicator

## Summary

Applicata l'Opzione D con una micro-fix nel solo index.html: i marker editoriali [IN 2025: ...] non compaiono più nel Riepilogo o negli export, mentre i dati sorgente e la tracciabilità DM 221/2025 restano invariati. Le voci realmente personalizzate sono riconoscibili tramite ✏️.

## Risultati

| Verifica                                | Esito                                          |
| --------------------------------------- | ---------------------------------------------- |
| Marker sorgente                         | 61, invariati                                  |
| Marker nel Riepilogo                    | 0                                              |
| Marker nel modello export/Markdown      | 0                                              |
| Indicatore su testo personalizzato      | PASS                                           |
| Legenda “non indica nuova approvazione” | PASS                                           |
| Conteggi                                | 103 / 41 ok / 54 modifica / 8 nuovo, invariati |
| Logiche decisionali                     | Invariate                                      |
| Responsive                              | PASS a 360/390/414/768/900/901/1280 px         |
| Errori JavaScript applicativi           | 0                                              |
| Asset protetti                          | Invariati                                      |
| Deploy                                  | Nessuno                                        |

## QA responsive

Flusso verificato: app locale → personalizzazione controllata di una proposta → Curricolo definitivo → testo pulito e indicatore ✏️.

Il Browser integrato non era utilizzabile per una policy sandbox mancante; Playwright non era installato localmente. È stato usato Chromium headless già presente tramite DevTools, senza modificare dipendenze. Tutte le viewport richieste hanno mantenuto larghezza documento entro viewport e visibilità di indicatore/legenda.

Un solo log non applicativo: favicon.ico 404 preesistente.

## Ambito preservato

Nessuna modifica a contenuti disciplinari, fonti normative, conteggi, stati, funzioni approvazione/rifiuto/personalizzazione, pannello Tecnologia, PDF, service worker, headers o asset.

## Verdetto

CML_016B_EXPORT_MARKER_CLEANUP_PERSONALIZATION_INDICATOR_READY
