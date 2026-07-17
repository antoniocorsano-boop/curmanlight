# CML-532 - Offline Service Worker Regression Check Report

## Sintesi

CML-532 aggiunge un controllo automatico dedicato al service worker legacy. Il controllo non modifica runtime: legge entrambe le copie `sw.js`, verifica il contratto statico e simula in VM i comportamenti offline critici.

Verdetto:

```text
CML_532_OFFLINE_SERVICE_WORKER_REGRESSION_CHECK_READY_LOCAL_NOT_PUSHED
```

## Copertura

Il nuovo script `tools/check-service-worker-offline-regression.mjs` copre:

- sincronizzazione tra `sw.js` e `_published_snapshot/netlify-current/sw.js`;
- struttura minima esatta di `APP_SHELL`;
- percorso canonico del motto: `./motto-non-multa-sed-multum/`;
- assenza delle tre risorse documentali/normative rimosse dal precache;
- assenza del vecchio percorso `./motto-non-multa-sed-multum.html`;
- presenza dei fallback HTTP 503 e 504;
- installazione resiliente con `cache.add()` sempre fallente;
- `Response 503` per navigation offline/cache vuota;
- `Response 504` per asset offline/cache vuota;
- nessun `respondWith()` simulato che risolva a `undefined`.

## Esito

```text
Service worker offline regression check: PASS
```

## Nota release

Il controllo e locale. Non produce deploy. Nel working tree complessivo resta presente la modifica runtime CML-531 su `_published_snapshot/netlify-current/sw.js`; un futuro push su `main` attivera GitHub Pages come previsto dal contratto repository.