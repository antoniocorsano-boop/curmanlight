# CML-009D — Top Dashboard Context and Accessibility Micro-fix

## Stato

Micro-fix completata. Tre interventi minimi su `index.html`.

## Problemi risolti

### P1 — Coerenza contestuale del cruscotto

**Soluzione scelta (A):** aggiunto `setTab('lavoro')` ai pulsanti "Controlla voci" ed "Esporta". Ora entrambi attivano prima il tab corretto, poi eseguono l'azione.

- "Controlla voci": `setTab('lavoro')` + filtro `pending` + scroll a `#cards-area`
- "Apri documento": già chiamava `setTab('riepilogo')` — invariato
- "Esporta": `setTab('lavoro')` + scroll a `.toolbar`

### P3 — Toggle accessibili

- "⋯ Altri filtri": da `<span>` a `<button type="button" class="toolbar-toggle">`
- "📄 Export ▾": da `<span>` a `<button type="button" class="toolbar-toggle">`
- Aggiunta CSS `.toolbar-toggle` con reset background/border e `display:inline`
- Aggiunto responsive `.toolbar-toggle{display:inline-block;padding:6px 8px;min-height:38px}` a 900px
- Aggiunto `button:focus-visible{outline:2px solid #1a237e;outline-offset:2px;border-radius:2px}` globale

### P2 — Touch target salvataggio

Pulsanti local-save-bar:
- `padding:2px 7px;font-size:10px` → `padding:4px 9px;font-size:11px`
- Incremento minimo, nessun impatto su layout (verificato a 360px)

## Cosa non toccato

Sidebar, cards-area, tecnologia export panel, Markdown generation, sw.js, _headers, PDF, tabs.

## Verifiche

1. Branch e commit di partenza: ✅ `636581a`
2. Working tree pulita pre-modifica: ✅
3. Breakpoint 360/414/768/1280px: ✅ passati
4. Nessuna regressione su tabs, sidebar, cards, export panel: ✅
5. Asset invariati (hash): ✅ sw.js, _headers, PDF
6. Nessun errore JavaScript: ✅
7. Nessun deploy: ✅
8. Working tree pulita post-commit: ✅

## Verdetto

`CML_009D_TOP_DASHBOARD_CONTEXT_ACCESSIBILITY_READY`

## Prossimo passo

CML-009E — pubblicazione controllata Netlify.
