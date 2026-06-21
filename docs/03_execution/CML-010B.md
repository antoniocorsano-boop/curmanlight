# CML-010B — Compact Cards & Expandable Detail Implementation

## Stato

Implementazione completata. Commit `a240ab7`.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `a240ab7`
- URL: https://curmanlight.netlify.app
- Working tree: pulita
- Deploy: NESSUNO (commit diretto su snapshot, attende deploy CML-008R)

## Cosa è stato fatto

### CSS (compact cards block)

- `.collapse-header / .collapse-body` — collassabili per ok e decise
- `.pending-card` — card compatta (border-color distinto per modifica/nuovo)
- `.pending-body` — riga singola con testo troncato + azioni
- `.pending-text` — ellipsis su mobile, wrap su narrow
- `.pending-actions` — flex row per 4 bottoni emoji
- `.pending-detail` — hidden, si apre con toggle
- `.gap-header-unique` — singolo avviso per sezione con pending
- Responsive: min-height per tap target, wrap verticale su narrow
- Rimossi: `.act-approve`, `.act-reject` (sostituiti da `.pending-action.*`)

### JavaScript (cardHTML, render)

- `truncate(txt, len)` — strip HTML + tronca
- `togglePendingDetail(id)` — apre/chiude dettaglio, swap icona 🔍↔📖
- `toggleCollapse(id)` — apre/chiude collapse-body, swap indicatore ▸↔▾
- `cardHTML()` — 4 modalità:
  - **ok**: collassata per default, mostra badge + classe + testo troncato + ▸
  - **decisa** (approvata/rifiutata): collassata, badge ✅ Approvata / ❌ Rifiutata
  - **pending edit**: pannelli completi con textarea + Salva/Annulla
  - **pending compact**: badge + testo troncato + ✅ ❌ 🔍 🗑 + dettaglio espandibile
- `render()`:
  - `hasPending` per mostrare `gap-header-unique` una volta per sezione
  - `ordLock` per lock-notice unica per sezione (anziché per card)

### Cose NON toccate (per CML-009E)

- usage-notice, local-save-bar, tecnologia-export-panel
- cruscotto, toolbar, filtri, tab
- riepilogo, normativa, generali tab
- Markdown, PDF, sw.js, assets, Netlify

## Verifica

- Chrome headless (360/414/768/1280px): nessun errore JS, layout corretto
- 9 pending-detail sections (tutte nascoste all'avvio)
- 9 pending-action approve buttons
- 8 badge modifica (0 badge nuovo)
- 6 collapse-body (tutti collassati)
- Old gap-header: 0 occorrenze
- ✓ rendersi correttamente con filterStatus=all, hideOk=false, disciplina=Tecnologia
