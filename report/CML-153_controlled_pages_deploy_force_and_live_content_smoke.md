# CML-153: Controlled Pages Deploy Force and Live Content Smoke

## Sintesi

CML-153 ha forzato il workflow GitHub Pages e verificato il live con cache-busting `?v=cml153`.

Esito classificato: **E - live aggiornato ma rendering Tecnologia ancora incompleto**.

## Stato repository

| Campo                           | Valore         |
| ------------------------------- | -------------- |
| Branch                          | `main`         |
| Commit iniziale                 | `eb6729f`      |
| origin/main iniziale            | `eb6729f`      |
| Push                            | non necessario |
| Commit `eb6729f` su origin/main | si             |

## Workflow Pages

| Campo                            | Valore                                       |
| -------------------------------- | -------------------------------------------- |
| Workflow                         | `.github/workflows/pages.yml`                |
| Cartella pubblicata              | `_published_snapshot/netlify-current`        |
| Trigger automatico               | solo push su path pubblicati o workflow file |
| Ultimo run automatico precedente | successo su `b3fb181`                        |
| Run forzato CML-153              | `28166929195`                                |
| Evento                           | `workflow_dispatch`                          |
| Head SHA                         | `eb6729ff22ff6f1f35a64f3caca0f85b66a543e5`   |
| Conclusione                      | `success`                                    |

## Verifica live

URL: https://antoniocorsano-boop.github.io/curmanlight/?v=cml153

| Verifica                                                           | Esito                         |
| ------------------------------------------------------------------ | ----------------------------- |
| HTTP                                                               | `200`                         |
| Lunghezza HTML                                                     | `397940`                      |
| `TECNOLOGIA_MAPPA_DATI` nel live                                   | presente                      |
| `GENERATA` nel live                                                | presente                      |
| Messaggio "Mappa disciplinare non ancora predisposta" nel sorgente | presente come markup nascosto |
| Messaggio visibile in browser                                      | no                            |

## Browser smoke

Browser plugin in-app tentato ma non utilizzabile per errore MCP `missing field sandboxPolicy`; fallback Playwright esterno usato in tooling temporaneo fuori repo (`C:\tmp\cml153-pw`).

Risultati browser:

- URL e title corretti.
- Console/page error: `SyntaxError: Unexpected identifier 'esito'`.
- `window.setMappaDisciplina`: `undefined`.
- `window.renderMappaDisciplinare`: `undefined`.
- `window.TECNOLOGIA_MAPPA_DATI`: `undefined`.
- Contenitore mappa vuoto.
- Nessun token tecnico visibile nel contenitore.

Localizzazione sintattica:

```text
inline-script-1.js:3075
'<div class="curricolo-dept-validation-subtitle">Registra l'esito del controllo dipartimentale...
                                                            ^^^^^
```

## Tecnologia / Matematica / Italiano

| Disciplina | Esito                                                                                   |
| ---------- | --------------------------------------------------------------------------------------- |
| Tecnologia | dati presenti nell'HTML live, rendering non popolato per SyntaxError runtime            |
| Matematica | dataset e bottone presenti nel sorgente, rendering bloccato dallo stesso errore globale |
| Italiano   | dataset e bottone presenti nel sorgente, rendering bloccato dallo stesso errore globale |

## Service worker/cache

`sw.js` continua a usare:

```js
const CACHE_NAME = 'curmanlight-cache-v452b422'
```

Il cache-busting `?v=cml153` ha caricato l'HTML aggiornato, quindi la cache non e' la causa primaria dell'esito CML-153. Resta pero' un rischio per URL gia' cache-ati (`./`, `./index.html`) perche' il fetch handler e' cache-first.

## Vincoli

- Nessuna modifica a generator, adapter, transformer, validator, JSON o schema `.cml`.
- Nessuna estensione ad altre discipline.
- Nessun refactoring.
- Runtime invariato.
- `.planning/codebase/` non reintrodotta.
- `jcode/` non usato.

## Raccomandazione

Aprire `CML-154` come microfix runtime dedicato:

1. escapare o convertire la stringa con `l'esito` che rompe il parser JS;
2. verificare browser smoke live Tecnologia/Matematica/Italiano;
3. valutare bump service worker/cache solo se resta un blocco cache dopo il fix.
