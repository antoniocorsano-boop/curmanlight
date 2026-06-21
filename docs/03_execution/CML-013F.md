# CML-013F — Bottom Bar + Menu Overlay Mobile Navigation

## Stato

Implementazione della navigazione mobile ibrida (bottom bar + menu ☰) per viewport ≤900px.
Modifica runtime su `index.html`.

## Preflight

| Campo | Valore |
|---|---|
| Branch | `cml-008r-fix-markdown-decision-summary` |
| HEAD | `a858374` |
| Working tree | Pulita ✅ |
| CML-013E criteri | 11 criteri di accettazione |

## 1. Modifiche

Unico file: `_published_snapshot/netlify-current/index.html`

### A. Bottom bar (≤900px)

- 4 pulsanti fissi in basso: `✏️Rev.` / `📋Def.` / `📤Esp.` / `☰Menu`
- `position:fixed; bottom:0` con `z-index:1000`
- Padding-bottom 52px su `main` per evitare overlap contenuto
- Touch target minimo 44px per ogni pulsante
- Tabbar nascosto a ≤900px

### B. Menu overlay

- Creato dinamicamente da JS al click su ☰
- Voci: Fonti, Generali, Azioni secondarie, Install, Settings, Corso PDF, Motto, Guida, Salva/Backup/Importa/Ripristina
- Chiusura: click fuori dal menu, tap X, o tap su voce menu
- Sfondo semitrasparente (`rgba(0,0,0,0.4)`)

### C. Sidebar discipline contestuale

- Sidebar visibile su mobile SOLO nei tab Revisione e Definitivo
- Nascosta in Fonti e Generali

### D. Breadcrumb dinamico

- Breadcrumb ora si aggiorna tramite `updateBreadcrumb()` chiamato da `setTab()`

### E. setTab() sincronizzazione

- Bottom bar active state aggiornato al cambio tab
- Sidebar visibilità aggiornata al cambio tab

## 2. Criteri di accettazione CML-013E verificati

| # | Criterio | Esito |
|---|---|---|
| 1 | Max 3 destinazioni principali visibili su mobile | ✅ Rev, Def, Esp in bottom bar |
| 2 | Discipline solo nel contesto Revisione | ✅ Sidebar nascosta in Fonti/Generali |
| 3 | Azioni secondarie in menu ☰ | ✅ Tutte le funzioni ⚙️ Azioni + altre |
| 4 | Esporta in ≤2 tap | ✅ Bottom bar → tap Esp |
| 5 | Nessuna perdita funzionale | ✅ Ogni funzione preservata |
| 6 | Nessuna modifica dati | ✅ Local storage inalterato |
| 7 | Logica approvazione/rifiuto intatta | ✅ Card, dettaglio, decisioni invariati |
| 8 | Nessuna regressione desktop (≥901px) | ✅ Breakpoint verificato |
| 9 | Touch target ≥44px | ✅ Bottom bar 44px, voci menu 44px |
| 10 | Padding-bottom contenuto | ✅ 52px su main |
| 11 | Breadcrumb visibile su mobile | ✅ Dinamico, sotto header |

## 3. Cosa NON è stato toccato

- ❌ Logica approvazione/rifiuto
- ❌ Conteggi
- ❌ Card HTML/JS (cardHTML, pending-detail, collapse)
- ❌ Tecnologia export panel
- ❌ Markdown generation
- ❌ PDF, sw.js, _headers, manifest, icons
- ❌ Asset
- ❌ Desktop breakpoint (≥901px)

## 4. Verdetto

```
CML_013F_BOTTOM_BAR_MENU_OVERLAY_MOBILE_NAVIGATION_READY
```

## Output finale

| Campo | Valore |
|---|---|
| Verdetto | `CML_013F_BOTTOM_BAR_MENU_OVERLAY_MOBILE_NAVIGATION_READY` |
| Branch | `cml-008r-fix-markdown-decision-summary` |
| HEAD | `a858374` + modifiche runtime |
| File modificato | `_published_snapshot/netlify-current/index.html` |
| Breakpoint mobile | ≤900px |
| Bottom bar | ✏️ Rev. / 📋 Def. / 📤 Esp. / ☰ Menu |
| Menu ☰ | Fonti, Generali, Azioni, Salva/Backup/Importa/Ripristina |
| Sidebar discipline | Contestuale (solo Revisione/Definitivo) |
| Breadcrumb | Dinamico via updateBreadcrumb() |
| Deploy | `https://curmanlight.netlify.app` |

## Prossimo step

**CML-014** — da definire (possibile: enhanced export, real user test, o iterazione mobile).
