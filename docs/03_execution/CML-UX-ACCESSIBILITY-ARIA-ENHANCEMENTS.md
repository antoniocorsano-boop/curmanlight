# CML-UX-ACCESSIBILITY-ARIA-ENHANCEMENTS

## Stato della slice

- **Tipo**: runtime increment
- **Scope**: aggiungere aria-live announcements e aria-hidden su emoji decorativi per accessibilità screen reader
- **Runtime modificato**: `_published_snapshot/netlify-current/index.html`
- **Base piano**: audit accessibilità CML (P1 da audit interno)
- **Commit di partenza**: `3276da2` (CML UDA evidence export UI increment + hardening)
- **Verdetto**: `CML_UX_ACCESSIBILITY_ARIA_ENHANCEMENTS_READY`

## Obiettivo

Migliorare l'accessibilità per screen reader tramite:

1. **aria-live region** — annunciare cambio disciplina e cambio tab
2. **aria-hidden su emoji decorativi** — evitare che emoji puramente decorativi vengano letti dagli screen reader, riducendo rumore e migliorando l'esperienza utente

## Modifiche apportate

### `_published_snapshot/netlify-current/index.html`

| Intervento | Azione | Dettaglio |
|---|---|---|
| **aria-live status region** | Aggiunto `<div id="a11y-status" class="sr-only" role="status" aria-live="polite" aria-atomic="true">` dopo il skip-link | Regione dinamica per annunci |
| **Funzione `announceStatus()`** | Nuova funzione JS: svuota textContent, poi setTimeout 30ms per trigger lettura | Evita doppia lettura |
| **`selectDisc()`** | Chiama `announceStatus("Disciplina selezionata: "+d)` | Annuncia cambio disciplina |
| **`setTab()`** | Chiama `announceStatus("Sezione aperta: "+(tabLabels[t]\|\|t))` | Annuncia cambio tab |
| **Tabbar emoji** | Avvolti in `<span aria-hidden="true">` | 5 pulsanti tabbar |
| **Subnav emoji** | Avvolti in `<span aria-hidden="true">` | 8 pulsanti subnav |
| **Home page** | aria-hidden su tutti gli emoji: percorso (6 step + frecce), card header/icons, link, microguide, badge | 25+ elementi |
| **Cruscotto + quick-actions** | aria-hidden su pulsanti cruscotto (3), stato salvataggio, toggle azioni, tutti i quick-btn (8) | 13 elementi |
| **Didattica/Evidenze** | aria-hidden su h2, path-title, icona card, strong notice, filter buttons | 8 elementi |
| **UDA** | aria-hidden su h2, mappa summary, notice strong | 3 elementi |
| **Revisione** | aria-hidden su filter buttons (5), export panel title/buttons (6) | 11 elementi |
| **Processo** | aria-hidden su summary tags (2), report button | 3 elementi |
| **Riepilogo** | aria-hidden su h2, inline param, warning | 4 elementi |
| **Normativa/Fonti** | aria-hidden su h2, norm-cat-title (5), tutti `.norm-icon` (16), tutti norm-link (14) | 35+ elementi |
| **Esportazioni** | aria-hidden su h2, h3 (6), export buttons (14) | 21 elementi |
| **Guida** | aria-hidden su h2, h3 (6), icona inline, badges | 10 elementi |
| **Header** | aria-hidden su h1 book emoji | 1 elemento |
| **JS template: sidebar** | `aria-hidden="true"` su `<span>${meta.icon}</span>` | Sidebar discipline |
| **JS template: disc header** | `aria-hidden` su meta.icon, comp, nuclei | Header disciplina |
| **JS template: labels** | `aria-hidden` su label traguardi/obiettivi | Sezioni dinamiche |
| **JS template: sum-box** | `aria-hidden` su meta.icon | Riepilogo definitivo |
| **JS template: curricolo** | `aria-hidden` su section-title, disc-icon, validazione link | Curricolo view |

### Cosa NON è stato modificato

- `content/curriculum/` — invariato
- `manifest.json`, `service-worker.js`, `sw.js` — invariati
- JSON, export/import `.cml` — invariati
- Funzioni esportazione — nessuna modificata
- Navigazione hash — invariata
- `tools/` — invariato
- Funzioni showToast, badge dinamici — lasciati intenzionalmente (messaggi brevi / hanno testo descrittivo)
- `ORDINE_LABEL` e `DISCIPLINE_META` JS constants — non modificate (usate anche per stripping emoji in export)

## Verifiche

- **Validatore curriculum**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **git diff --check**: nessun whitespace error
- **Icon-only controls**: tutti i bottoni senza testo visibile (`✅`, `❌`, `🔍`, `✏️`, `🗑`) hanno `title` o `aria-label`
- **Regione live**: `aria-live="polite"`, `role="status"`, `aria-atomic="true"` verificati

## Rischi residui

- I template JS che usano `ORDINE_LABEL[ord]` come stringa concatenata semplice (es. curricolo-index pill e riepilogo-index) non sono stati modificati per non introdurre bug nelle esportazioni Markdown/Word che strip delle emoji con regex
- Alcuni emoji in showToast restano non marcati (messaggi brevi e auto-dismiss)
