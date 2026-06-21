# CML-009E — Controlled Netlify Publication — Top View Lightening

## Stato

Pubblicazione completata e verificata.

## Comando deploy

```
npx netlify deploy --prod --dir _published_snapshot/netlify-current
```

- 1 file uploaded (index.html)
- 4s
- Deploy URL: https://6a378c2be64a2ac4b706115a--curmanlight.netlify.app
- Production URL: https://curmanlight.netlify.app

## Preflight

| Verifica | Esito |
|---|---|
| Branch corretto (`cml-008r-fix-markdown-decision-summary`) | ✅ |
| HEAD `b8dece8` (fix: clarify CML top dashboard actions) | ✅ |
| Working tree pulita | ✅ |
| `sw.js` invariato | ✅ hash match |
| `_headers` invariato | ✅ hash match |
| PDF invariato | ✅ hash match |

## Verifica locale pre-deploy

| Elemento | Esito |
|---|---|
| Cruscotto presente | ✅ |
| Stato + prossima azione visibili | ✅ |
| 3 pulsanti principali leggibili | ✅ |
| `setTab('lavoro')` in Controlla voci ed Esporta | ✅ |
| Toggle filtri/export come button accessibili | ✅ |
| `button:focus-visible` CSS presente | ✅ |
| Touch target salvataggio aumentati (4px/11px) | ✅ |
| Quick-info-bar rimossa | ✅ |
| Orientation-card rimossa | ✅ |
| Progress-wrap integrato nel cruscotto | ✅ |
| 27/27 verifiche locali passate | ✅ |

## Verifica responsive pre-deploy

| Breakpoint | Screenshot | Esito |
|---|---|---|
| 360×800 | 56.494 bytes | ✅ |
| 414×896 | 68.698 bytes | ✅ |
| 768×1024 | 149.597 bytes | ✅ |
| 1280×800 | 184.855 bytes | ✅ |

## Verifica post-deploy

| Verifica | Esito |
|---|---|
| Pagina caricata (191.920 bytes) | ✅ |
| Cruscotto minimo in produzione | ✅ |
| Tre pulsanti principali funzionanti | ✅ |
| Toggle filtri/export come button | ✅ |
| setTab('lavoro') nei pulsanti | ✅ |
| Cards-area preservata | ✅ |
| Sidebar preservata | ✅ |
| Tecnologia export panel preservato | ✅ |
| Tabs (riepilogo, normativa, generali) preservati | ✅ |
| Referenza sw.js presente | ✅ |
| Quick-info-bar rimossa | ✅ |
| Orientation-card rimossa | ✅ |
| 14/14 verifiche post-deploy passate | ✅ |
| Screenshot 360px produzione | 56.494 bytes ✅ |
| Screenshot 768px produzione | 149.097 bytes ✅ |

## Nessuna modifica funzionale

Nessuna modifica runtime. Solo index.html è stato deployato. sw.js, _headers, PDF e assets non sono stati toccati.

## Verdetto

`CML_009E_CONTROLLED_NETLIFY_PUBLICATION_TOP_VIEW_LIGHTENING_CLOSED`

## Prossimo passo

CML-010 — Secondo livello: schede compatte e dettaglio espandibile delle aree informative (Documento, Voci, Fonti, Esportazione).
