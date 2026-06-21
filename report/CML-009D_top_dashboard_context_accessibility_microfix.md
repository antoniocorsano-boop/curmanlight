# CML-009D — Top Dashboard Context and Accessibility Micro-fix

## Interventi

### P1 — Coerenza contestuale (1 riga per pulsante)

**Problema:** il cruscotto è sempre visibile. "Controlla voci" ed "Esporta" agiscono su elementi del tab `lavoro`, ma non attivavano il tab. Se usati da un altro tab, l'azione avveniva senza feedback visivo.

**Fix:** aggiunto `setTab('lavoro')` prima dell'azione in entrambi i pulsanti.

### P3 — Toggle accessibili (2 elementi)

**Problema:** "⋯ Altri filtri" e "📄 Export ▾" erano `<span>` con `onclick`. Non focusabili da tastiera, senza ruolo button.

**Fix:** convertiti in `<button type="button" class="toolbar-toggle">`. Aggiunto CSS `.toolbar-toggle` (reset background/border, display inline) e regola mobile con touch target adeguato. Aggiunto `button:focus-visible` globale.

### P2 — Touch target (4 pulsanti)

**Problema:** pulsanti salvataggio a `font-size:10px` con `padding:2px 7px` — area tattile ridotta.

**Fix:** portati a `font-size:11px` con `padding:4px 9px`. Verificato nessun overflow o wrap indesiderato a 360px.

## Statistiche modifica

- File: `_published_snapshot/netlify-current/index.html`
- Delta: +424 righe, −420 righe (principalmente per CSS inline → classi)
- Nessun altro file modificato

## Verdetto

```
CML_009D_TOP_DASHBOARD_CONTEXT_ACCESSIBILITY_READY
```

Pronto per pubblicazione controllata.
