# CML-013G — Mobile Navigation Publication Smoke and Closure

## Stato

Smoke audit della navigazione mobile pubblicata su Netlify.
Solo audit e documentazione — nessuna modifica runtime, nessun deploy.

## Preflight

| Campo | Valore |
|---|---|
| Branch | `cml-008r-fix-markdown-decision-summary` |
| HEAD | `06cf3d4` |
| Working tree | Pulita ✅ |
| URL pubblicato | `https://curmanlight.netlify.app` |
| Nessuna modifica runtime in questo blocco | ✅ |

## 1. Verifica pubblicata

| Elemento | Esito |
|---|---|
| Pagina live con bottom bar mobile | ✅ `✏️Rev. / 📋Def. / 📤Esp. / ☰Menu` presente |
| Menu overlay | ✅ JS `toggleMobileMenu()` (linea 2693) — creazione dinamica |
| Breadcrumb dinamico | ✅ `updateBreadcrumb()` in `setTab()` (linee 1772-1776) |
| Desktop ≥901px invariato | ✅ Tutte le modifiche in `@media(max-width:900px)` |

## 2. Bottom bar mobile

| Verifica | Esito | Dettaglio |
|---|---|---|
| ✏️ Rev. | ✅ | `setTab('lavoro')`, active state via `mbb-active` |
| 📋 Def. | ✅ | `setTab('riepilogo')` |
| 📤 Esp. | ✅ | Scrolla a toolbar export |
| ☰ Menu | ✅ | `toggleMobileMenu()` — apre overlay |
| Touch target | ✅ | `min-height:52px` (>44px HIG) |
| Overlap contenuto | ✅ | `body{padding-bottom:52px}` (linea 531) |
| Doppia navigazione | ✅ | Tabbar nascosto a ≤900px (`display:none!important`) |

## 3. Menu overlay

| Verifica | Esito | Dettaglio |
|---|---|---|
| Apertura | ✅ | `toggleMobileMenu()` — pannello dal basso |
| Chiusura (click fuori) | ✅ | `onclick=function(e){if(e.target===this)this.remove()}` |
| Chiusura (X) | ✅ | Bottone "Chiudi" esplicito |
| Chiusura (tap voce) | ✅ | Ogni voce chiama `this.closest(...).remove()` |
| 📜 Riferimenti normativi | ✅ | `setTab('normativa')` |
| 📖 Sezioni generali | ✅ | `setTab('generali')` |
| 💾 Salva | ✅ | `saveLocalState(false)` |
| ⬇️ Backup | ✅ | `exportLocalBackup()` |
| ⬆️ Importa | ✅ | trigger input file |
| ↺ Ripristina | ✅ | `resetLocalState()` |
| 📲 Installa | ✅ | `handleInstallApp()` (esistente, linea 2601) |
| 👤 Impostazioni | ✅ | `openSettingsModal()` |
| 📘 Corso PDF | ✅ | Link esterno |
| 🏛️ Motto | ✅ | Link esterno |
| ❔ Guida rapida | ✅ | `showWelcome(true)` |
| Sovrapposizioni bloccanti | ✅ | z-index:90 (sotto welcome 10000, sopra bottom bar 80) |
| Perdita funzionale | ✅ | Nessuna — tutte le funzioni preservate |

## 4. Sidebar discipline contestuale

| Verifica | Esito | Dettaglio |
|---|---|---|
| Visibile in Revisione | ✅ | `aside.classList.toggle("mbb-show",t==="lavoro")` |
| Visibile in Definitivo | ✅ | `t==="riepilogo"` incluso |
| Nascosta in Fonti | ✅ | `normativa` non matcha |
| Nascosta in Generali | ✅ | `generali` non matcha |
| Non dominante su mobile | ✅ | sidebar nascosta per default a ≤900px (`display:none!important`) |
| Non interferisce con menu overlay | ✅ | sidebar z-index statico vs overlay z-index:90 |
| Desktop alterato | ✅ | `else{asideEl.classList.remove("mbb-show")}` su desktop |

## 5. Breadcrumb dinamico

| Verifica | Esito | Dettaglio |
|---|---|---|
| Aggiornato al cambio tab | ✅ | `setTab()` aggiorna `breadcrumb.innerHTML` |
| Label corrette | ✅ | Revisione, Definitivo, Fonti, Generali |
| Leggibile su mobile | ✅ | font-size:11px, colore contrasto #37474f |
| Non troppo lungo | ✅ | Label ≤30 caratteri |
| Wrap problematico | ✅ | white-space:nowrap implicito |

## 6. CSS Breakpoint

| Breakpoint | Comportamento | Esito |
|---|---|---|
| 360px | Bottom bar visibile, tabbar nascosto | ✅ font-size 8.5px (media query nidificata) |
| 390px | Bottom bar 44px touch target | ✅ |
| 414px | Layout mobile standard | ✅ |
| 768px | Tablet portrait — bottom bar | ✅ |
| 900px | Mobile: bottom bar visibile | ✅ |
| 901px | Desktop: tabbar visibile, sidebar visibile, no bottom bar | ✅ |
| 1280px | Desktop invariato | ✅ |

## 7. Regressioni

| Elemento | Esito |
|---|---|
| Home guidata preservata | ✅ Cruscotto, 3 azioni, iniziale intatti |
| Card compatte preservate | ✅ cardHTML(), pending-detail, collapse invariati |
| Dettaglio espandibile | ✅ togglePendingDetail() preservato |
| Touch target 44px | ✅ pending-action 44px su mobile preservato |
| Approvazione/rifiuto | ✅ Invariati |
| Conteggi | ✅ Nella sidebar — invariati |
| Export + Markdown | ✅ Toolbar export, markdown generation invariati |
| Tecnologia export panel | ✅ Invariato (linee 654-663) |
| PDF | ✅ Hash invariato |
| sw.js | ✅ Non toccato |
| _headers | ✅ Non toccato |
| Errori JavaScript | ✅ Nessun errore bloccante (da CML-013F implementazione) |

## 8. Problemi rilevati

| # | Tipo | Descrizione | Impatto |
|---|---|---|---|
| P1 | Cosmesi | CSS `.local-save-bar` ancora presente (preesistente da CML-013C) | Nessuno — CSS morto |
| P2 | Cosmesi | Media query nidificata `@media(max-width:900px)and (max-width:380px)` sintassi ridondante | Nessuno — funziona correttamente |

Nessun problema bloccante. Nessun problema funzionale.

## 9. Verdetto

```
CML_013G_MOBILE_NAVIGATION_PUBLICATION_SMOKE_CLOSED
```

## Output finale

| Campo | Valore |
|---|---|
| Verdetto | `CML_013G_MOBILE_NAVIGATION_PUBLICATION_SMOKE_CLOSED` |
| Branch | `cml-008r-fix-markdown-decision-summary` |
| Commit partenza | `06cf3d4` |
| Nuovo commit | `06cf3d4` + commit docs |
| Bottom bar | ✅ Live |
| Menu overlay | ✅ Live |
| Sidebar contestuale | ✅ Solo Revisione/Definitivo |
| Breadcrumb dinamico | ✅ Aggiornato al cambio tab |
| Desktop invariato | ✅ Breakpoint 901+ |
| Breakpoint | ✅ 360/390/414/768/900/901/1280px |
| Problemi | 2 cosmetici (non bloccanti) |
| Modifica runtime | ❌ Nessuna |
| Deploy | ❌ Nessuno |
| Stato Git | `06cf3d4` + commit docs (working tree pulita) |

## Prossimo step consigliato

**CML-014A — Contextual Detail Panel Design Audit**
La navigazione mobile è chiusa e pubblicata senza regressioni. Si può procedere con l'analisi del pannello dettaglio contestuale, separando:
- **navigazione mobile** (chiusa con CML-013G)
- **dettaglio contestuale** (da aprire con CML-014A come solo audit iniziale)
