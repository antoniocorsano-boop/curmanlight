# CML-013F — Bottom Bar + Menu Overlay Mobile Navigation

**Data:** 2026-06-21
**Branch:** `cml-008r-fix-markdown-decision-summary`
**HEAD:** `a858374` + modifiche runtime
**Stato:** Modifica runtime + deploy completati

## Risultati

| Punto                         | Esito                                                                    |
| ----------------------------- | ------------------------------------------------------------------------ |
| CML-013E criteri accettazione | 11/11 ✅                                                                 |
| Modifica runtime              | ✅ Bottom bar + menu overlay + sidebar contestuale + breadcrumb dinamico |
| File modificato               | `_published_snapshot/netlify-current/index.html`                         |
| Breakpoint                    | ≤900px (mobile)                                                          |
| Desktop (≥901px)              | Invariato ✅                                                             |
| Deploy                        | `https://curmanlight.netlify.app`                                        |
| Verifica post-deploy          | ✅ Pagina caricata, bottom bar visibile, contenuto integro               |

## Modifiche

### Bottom bar fissa

- `✏️Rev.` / `📋Def.` / `📤Esp.` / `☰Menu`
- 44px touch target, position:fixed, padding-bottom 52px
- Tabbar nascosto a ≤900px

### Menu overlay ☰

- Fonti, Generali, Azioni secondarie, Salva/Backup/Importa/Ripristina
- Chiudibile: X, click fuori, tap voce

### Sidebar discipline

- Visibile solo nei tab Revisione e Definitivo
- Nascosta in Fonti e Generali

### Breadcrumb

- Dinamico: si aggiorna al cambio tab

## Verdetto

```
CML_013F_BOTTOM_BAR_MENU_OVERLAY_MOBILE_NAVIGATION_READY
```
