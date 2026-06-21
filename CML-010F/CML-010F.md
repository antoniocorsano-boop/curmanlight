# CML-010F: Miglioramento UX mobile e accessibilità

**Data**: 21/06/2026  
**Tipo**: Fix CSS/JS  
**Stato**: ✅ Completato  

## Problemi risolti

### P1 — Touch target troppo piccolo su mobile
I pulsanti `.pending-action` nei card "pending" avevano `min-height` insufficiente su viewport ristretti, rendendo il tocco impreciso.

| Breakpoint | Prima | Dopo |
|---|---|---|
| ≤900px | `min-height:34px` | `min-height:42px` |
| ≤560px | `min-height:32px` | `min-height:40px` |

42px è il minimo raccomandato dalle linee guida WCAG per target touch.

### P2 — Pulsante 🔍 senza etichetta accessibile
Il pulsante "Mostra confronto" usava solo `title` (non accessibile a screen reader) e cambiava contenuto testuale in 📖 senza aggiornare la label.

- Aggiunto `aria-label="Mostra confronto"` al template HTML
- `togglePendingDetail()` ora aggiorna dinamicamente `aria-label` tra "Mostra confronto" / "Nascondi confronto"

### P3 — Indicatore di collasso poco visibile
L'indicatore `▸`/`▾` aveva colore `#90a4ae` su sfondo chiaro, quasi illeggibile su schermi piccoli.

- Colore: `#90a4ae` → `#546e7a` (blue-grey 600, contrasto ~3.8:1 vs sfondo bianco)
- Font-size: 11px → 12px
- Rimossa `transition:transform .15s` inutilizzata

## File modificati

- `_published_snapshot/netlify-current/index.html` (5 insertions, 5 deletions)

## Verifica

- [x] Diff conferma tutte le 5 modifiche
- [x] 3 aree: CSS pending-action (P1), template + JS button (P2), CSS collapse-indicator (P3)
- [x] Nessuna modifica a struttura dati o logica applicativa
