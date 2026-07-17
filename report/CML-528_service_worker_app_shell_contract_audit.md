# CML-528 - Service Worker App Shell Contract Audit Report

## Sintesi

Audit docs-only del service worker legacy. Nessun file runtime e stato modificato. Tutti gli URL attualmente presenti in `APP_SHELL` esistono sia nello snapshot pubblicato sia nella Pages live, ma non tutti sono risorse essenziali o canoniche per la UI corrente.

Verdetto obiettivo raggiunto:

```text
CML_528_SERVICE_WORKER_APP_SHELL_CONTRACT_AUDIT_READY_LOCAL_NOT_PUSHED
```

## APP_SHELL verificato

| URL | Live | Classificazione | Azione consigliata |
|-----|------|-----------------|--------------------|
| `./` | 200 | essenziale | mantenere come entry root offline |
| `./index.html` | 200 | essenziale | mantenere come shell/fallback HTML |
| `./manifest.webmanifest` | 200 | essenziale | mantenere |
| `./motto-non-multa-sed-multum.html` | 200 | opzionale / non canonico | sostituire o affiancare con URL pulito `/motto-non-multa-sed-multum/` se il motto deve restare offline |
| `./riferimenti_istituzionali_normativa.json` | 200 | opzionale | rimuovere dal precache se non serve al primo avvio offline |
| `./docs_distribuzione/FONTI_PTOF_RAV_NORMATIVA.md` | 200 | opzionale | rimuovere dal precache se non serve al primo avvio offline |
| `./docs_distribuzione/NOTE_TESTATA_ESPANDIBILE_MOBILE.txt` | 200 | opzionale | rimuovere dal precache se non serve al primo avvio offline |
| `./icons/icon-192.png` | 200 | essenziale | mantenere |
| `./icons/icon-512.png` | 200 | essenziale | mantenere |

## Risultati principali

- `install`: resiliente rispetto al fallimento di singoli asset dopo CML-527.
- `activate`: nessun rischio `respondWith(undefined)`; non usa `respondWith`.
- `fetch`: due percorsi possono risolvere la Promise di `respondWith()` a `undefined` se rete e fallback `./index.html` falliscono entrambi.
- `fetch`: il fallback a `index.html` per richieste non-navigation puo restituire HTML al posto di asset, JSON o immagini.
- `APP_SHELL`: nessun asset mancante, ma alcune risorse documentali sembrano opzionali e non referenziate direttamente dalla UI corrente.

## Percorsi a rischio

### Navigation / HTML

Rete fallisce, cache della richiesta assente, `./index.html` assente dalla cache: la Promise puo risolversi a `undefined`.

### GET non-navigation

Cache miss, rete fallisce, `./index.html` assente dalla cache: la Promise puo risolversi a `undefined`.

## Contratto raccomandato

- Navigazioni: rete, cache richiesta, `./index.html`, poi `Response` HTML controllata.
- Asset same-origin: cache, rete, poi `Response` controllata con status esplicito.
- Cross-origin: niente fallback HTML implicito.
- `APP_SHELL`: solo shell minima e risorse PWA essenziali, con risorse documentali spostate fuori dal precache se non necessarie offline.
- Ogni `respondWith()` deve chiudere con una `Response` garantita.

## Prossime slice

- CML-529: microfix fetch fallback sempre-`Response`.
- CML-530: test offline, cache vuota, cache aggiornata e smoke post-deploy se necessario.