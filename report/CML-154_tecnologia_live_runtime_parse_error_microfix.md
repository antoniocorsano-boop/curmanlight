# CML-154: Tecnologia Live Runtime Parse Error Microfix

## Sintesi

CML-154 applica un microfix runtime minimo al parse error live individuato da CML-153.

Esito locale: parse error eliminato; mappe Tecnologia, Matematica e Italiano renderizzano nel browser locale.

## Stato iniziale

| Campo | Valore |
|-------|--------|
| Branch | `main` |
| HEAD iniziale | `da0c0e3` |
| origin/main iniziale | `eb6729f` |
| Stato | ahead 1 per CML-153 |
| Push pre-fix | non eseguito |

## Causa corretta

La stringa JavaScript era interrotta da un apostrofo non escapato:

```js
'<div class="curricolo-dept-validation-subtitle">Registra l'esito del controllo dipartimentale ...</div>' +
```

Il parser interpretava `esito` come identificatore inatteso e interrompeva tutto lo script runtime, lasciando non definite le funzioni/dataset mappa.

## Fix

File modificato:

```text
_published_snapshot/netlify-current/index.html
```

Cambio applicato:

```text
l'esito -> l’esito
```

Il significato del testo non cambia. Non sono state modificate logiche di rendering, dataset, generatori, adapter, transformer, validator, JSON, schema `.cml`, service worker o cache.

## Verifiche

| Verifica | Risultato |
|----------|-----------|
| Inline script syntax check | PASS |
| Pattern rotto residuo in JS | assente |
| Pattern analoghi rilevati | nessuno |
| `TECNOLOGIA_MAPPA_DATI = GENERATA || FALLBACK` | presente |
| Validatore normalized curriculum | PASS, 7 file, 94 unita', `overallValid: true` |
| Harness runtime mappa dati | PASS, 7 discipline |
| `git diff --check` | PASS |

## Smoke locale browser

Playwright locale su `file:///C:/Users/anton/CurManLight/_published_snapshot/netlify-current/index.html`:

- `window.setMappaDisciplina`: `function`
- `window.renderMappaDisciplinare`: `function`
- `window.TECNOLOGIA_MAPPA_DATI`: `object`
- Tecnologia: contenuti mappa reali renderizzati, empty state nascosto, nessun token tecnico visibile.
- Matematica: contenuti mappa reali renderizzati, empty state nascosto, nessun token tecnico visibile.
- Italiano: contenuti mappa reali renderizzati, empty state nascosto, nessun token tecnico visibile.
- Page errors: assenti.
- Console warn/error: assenti.

## Esito

Il parse error e' risolto localmente. Il prossimo passo operativo e' commit, push controllato della sequenza CML-153 + CML-154 e smoke live su `?v=cml154`.
