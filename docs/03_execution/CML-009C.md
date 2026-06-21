# CML-009C — User View Top Area Responsive Smoke Audit

## Stato

Audit responsivo completato. Nessuna modifica runtime applicata.

## Verdetto

`CML_009C_USER_VIEW_TOP_AREA_RESPONSIVE_SMOKE_READY`

## Breakpoint testati

| Breakpoint | Viewport | Esito |
|---|---|---|
| Mobile stretto | 360×800 | ✅ Passato |
| Mobile medio | 414×896 | ✅ Passato |
| Tablet | 768×1024 | ✅ Passato |
| Desktop | 1280×800 | ✅ Passato |

## Aree verificate

| Area | Mobile | Tablet | Desktop |
|---|---|---|---|
| Cruscotto minimo (stato, azione, pulsanti) | ✅ impilati full-width | ✅ row layout | ✅ row layout |
| Pulsanti principali (Controlla, Apri, Esporta) | ✅ full-width, tappabili | ✅ inline | ✅ inline |
| Barra progresso/salvataggio | ✅ wrap ok | ✅ inline compatta | ✅ inline compatta |
| Filtri (Tutti, Da decidere, toggle) | ✅ wrap ordinato | ✅ inline | ✅ inline |
| Export collassato | ✅ toggle funzionante | ✅ toggle funzionante | ✅ toggle funzionante |
| Usage notice (`<details>`) | ✅ collassato, apribile | ✅ ok | ✅ ok |
| Install hint (nascosto) | ✅ nessuno spazio vuoto | ✅ ok | ✅ ok |

## Regressioni verificate

| Area | Esito |
|---|---|
| Tabs (riepilogo, normativa, generali) | ✅ Non alterati |
| Sidebar discipline | ✅ Non alterata |
| Cards-area | ✅ Non alterata |
| Tecnologia export panel | ✅ Non alterato |
| Markdown generation | ✅ Non alterata |

## Asset verificati

| Asset | Hash | Esito |
|---|---|---|
| `sw.js` | `A3CCED9B...` | ✅ Invariato |
| `_headers` | `50F00FB9...` | ✅ Invariato |
| `PDF` | `DD9E1961...` | ✅ Invariato |

## Console JavaScript

Nessun errore JavaScript bloccante rilevato. `renderProfileSummary()` non trova più `active-profile-summary` (elemento rimosso in CML-009B), ma la guardia `if(!el) return` impedisce errori. Nessuna eccezione funzionale.

## Problemi rilevati (minori)

### P1 — Cruscotto visibile su tutti i tab
Il cruscotto è posizionato fuori dai container dei tab. I pulsanti "Controlla voci" ed "Esporta" agiscono su elementi del tab `lavoro` (`#cards-area`, `.toolbar`). Se cliccati da un tab diverso (es. riepilogo), lo scroll verso elementi nascosti non produce feedback visivo. Non è un errore JS, ma può disorientare.

**Raccomandazione:** micro-fix opzionale CML-009D: nascondere cruscotto quando non si è sul tab `lavoro`, oppure aggiungere un cambio di tab implicito.

### P2 — Pulsanti salvataggio compatti su mobile
I pulsanti della `local-save-bar` hanno `font-size:10px` e `padding:2px 7px` (inline). Su mobile, l'area tattile è inferiore ai 44px raccomandati. Accettabile perché sono azioni secondarie, ma da monitorare in test utente.

### P3 — Toggle filtri/export non sono `<button>`  
I toggle "⋯ Altri filtri" e "📄 Export ▾" sono `<span>` con `cursor:pointer` e `onclick`. Funzionano ma non hanno stati `:focus-visible` espliciti. Accessibilità marginale, non bloccante.

## Nessuna modifica runtime

Nessuna modifica al codice applicativo. Audit eseguito su `_published_snapshot/netlify-current/index.html` con server locale su porta 5001. Screenshot acquisiti a ogni breakpoint tramite Chrome headless.

## Nessun deploy

## Prossimo step consigliato

CML-009D — micro-fix opzionale: allineamento visibilità cruscotto al tab attivo (opzionale, solo se il P1 risulta fastidioso in uso reale).
