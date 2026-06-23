# CurManLight — Design System

> **Nota:** Questo file descrive il sistema di design esistente di CurManLight per essere importabile in Stitch e utile agli agenti di codice. Non viene interpretato automaticamente dall'applicazione a runtime. Eventuali proposte generate da Stitch dovranno essere valutate e integrate manualmente in una slice successiva.

---

## 1. Principi di design

- **Una schermata, una decisione** — ogni vista corrisponde a un compito specifico (consultare, revisionare, esportare, guidare). Azioni secondarie non competono con l'azione principale.
- **Distinzione Curriculum/Didattica** — il curricolo istituzionale (documento) è separato dalla didattica operativa (lavoro in classe). Mai mescolati nello stesso flusso.
- **Esportazione come strumento secondario** — l'export è sempre collocato dopo la consultazione/revisione, mai come azione primaria.
- **Badge chiaro e sobrio** — ogni stato ha un badge testuale (non solo colore) per accessibilità.
- **Microcopy breve** — messaggi essenziali, nessun testo autocelebrativo.
- **Priorità alla fruizione da dispositivi mobili (mobile-first)** — touch target >= 44px, overflow-x scrollabile, barra mobile persistente.

---

## 2. Colori

### Palette primaria

| Ruolo | Colore | Uso |
|-------|--------|-----|
| Primario istituzionale | `#1a237e` | Inizio gradiente header, tab active, link, bottoni primari, bordi sinistro sezioni |
| Secondario istituzionale | `#283593` | Header gradient end, disc header |
| Accento chiaro | `#e8eaf6` (indigo 100) | Sidebar active, sfondi leggeri, badge ord-tag |

### Palette neutra

| Ruolo | Colore | Uso |
|-------|--------|-----|
| Sfondo pagina | `#f0f2f5` / mobile `#f6f7fb` | Body |
| Sfondo card/superfici | `#fff` | Card, toolbar, boxes, panel |
| Sfondo sidebar | `#37474f` (title), `#eceff1` (order) | Sidebar header/ordini |
| Bordo leggero | `#e0e0e0` | Card border, tabbar, separatori |
| Bordo medio | `#cfd8dc` | Filtri, input, btn-secondary |
| Testo primario | `#212121` / `#333` | Contenuto card, testi |
| Testo secondario | `#546e7a` / `#78909c` / `#90a4ae` | Meta, note, disabilitato |
| Testo su sfondo scuro | `#fff` / `#cfd8dc` | Header, sidebar title |

### Colori di stato

| Stato | Badge bg | Badge text | Card bg | Card border |
|-------|----------|------------|---------|-------------|
| Invariato / confermato (ok) | `#388e3c` | `#fff` | `#f1f8e9` | `#a5d6a7` |
| Modifica proposta | `#ef6c00` | `#fff` | `#fff` | `#ffcc80` |
| Nuovo | `#1976d2` | `#fff` | `#fff` | `#90caf9` |
| Eliminato | `#d32f2f` | `#fff` | `#fff8f8` | `#ef9a9a` |
| Approvato | `#2e7d32` | `#fff` | `#e8f5e9` | `#81c784` |
| Rifiutato | `#757575` | `#fff` | `#fafafa` | `#e0e0e0` |

### Badge semantici (design system, CML-074)

| Variante | Sfondo | Testo | Bordo |
|----------|--------|-------|-------|
| `badge--readonly` | `#eceff1` | `#607d8b` | `#cfd8dc` |
| `badge--prototype` | `#f3e5f5` | `#7b1fa2` | `#ce93d8` |
| `badge--warning` | `#fff3e0` | `#e65100` | `#ffcc80` |
| `badge--success` | `#e8f5e9` | `#2e7d32` | `#a5d6a7` |
| `badge--info` | `#e3f2fd` | `#1565c0` | `#90caf9` |
| `badge-preparing` | `#eceff1` | `#90a4ae` | (pill 999px) |

### Colori esportazioni

| Tipo | Sfondo | Testo |
|------|--------|-------|
| btn-word | `#1e5a96` | `#fff` |
| btn-copy | `#00695c` | `#fff` |
| btn-md | `#5e35b1` | `#fff` |
| btn-pdf | `#c0392b` | `#fff` |
| btn-cml | `#3949ab` | `#fff` |

### Gradienti

| Elemento | Gradiente |
|----------|-----------|
| Header app, Disc header | `linear-gradient(135deg, #1a237e, #283593)` |
| Progress bar fill | `linear-gradient(90deg, #43a047, #66bb6a)` |
| Orientation card / Cruscotto | `linear-gradient(135deg, #e8eaf6, #c5cae9)` |
| Didattica evidence header | `linear-gradient(135deg, #00695c, #00897b)` |
| Didattica UDA header | `linear-gradient(135deg, #4527a0, #7b1fa2)` |

### Box notice (design system, CML-074)

| Variante | Sfondo | Bordo | Testo |
|----------|--------|-------|-------|
| `.notice-box.info` | `#e3f2fd` | `#90caf9` | `#1565c0` |
| `.notice-box.warning` | `#fff8e1` | `#ffe082` | `#5d4037` |
| `.notice-box.success` | `#e8f5e9` | `#a5d6a7` | `#1b5e20` |
| `.notice-box.tip` | `#f3e5f5` | `#ce93d8` | `#4a148c` |

---

## 3. Tipografia

### Font stack

```css
font-family: 'Segoe UI', system-ui, sans-serif;
font-family: Consolas, monospace; /* solo code preview */
```

### Scala

| Dimensione | Uso |
|------------|-----|
| `9px` | aside-ord, panel-lbl, badge-preparing |
| `10px` | header .sub, aside-title, badge, norm-badge, gen-badge, export-note, didattica-footer |
| `11px` | filter-btn, export-btn, disc-btn, act, norm-desc, settings label, role-access text |
| `12px` | tabbar button, card-body, panel-text, h3 sezioni, norm-title, curricolo-item |
| `13px` | body text, curricolo-viewer, settings input, mobile menu items |
| `14px` | cruscotto-next, didattica-card-titolo |
| `15px` | disc-header h2, tecnologia-norm-title |
| `16px` | home-card-title, section-heading-accent h2 |
| `17px` | header h1 |
| `20px` | home-title |
| `clamp(17px, 4.8vw, 22px)` | header h1 su mobile |

### Pesi

| Peso | Uso |
|------|-----|
| `600` (semi-bold) | tabbar button, subnav-btn, filter-btn |
| `700` (bold) | badge, act, ord-tag, norm-title, gen-badge, home title |
| `800` (extra-bold) | aside-title, aside-ord, panel-lbl, norm-inline-link, cruscotto-state, btn-primary |

### Letter spacing

| Spacing | Uso |
|---------|-----|
| `2px` | header .sub |
| `1.5px` | aside-ord, norm-cat-title |
| `1px` | aside-title, ordine-hd, panel-lbl, cruscotto-state |
| `.5px` | tecnologia-section-title, didattica-section-title, uda-field-label |

---

## 4. Spaziatura

### Padding comuni

| Valore | Uso |
|--------|-----|
| `6px 10px` | card-acts, collapse-header |
| `7px 10px / 7px 11px` | disc-btn, pending-card, ordine-hd |
| `8px 11px / 8px 14px` | aside-title, aside-ord |
| `9px 12px / 9px 13px` | panel, toolbar, usage-notice, local-save-bar |
| `10px 12px / 10px 14px` | quick-info-bar, notice-box, home-card-links a |
| `11px 14px` | tecnologia-export-panel |
| `12px 14px / 12px 16px` | disc-header, esport-group, guida-card, sum-box, tab-generali |
| `16px` | home-dashboard, home-card |

### Gap comuni

| Valore | Uso |
|--------|-----|
| `4px` | settings-field, disc-dot gap |
| `5px` | card-acts, disc-btn gap |
| `6px` | pending-body, export-group |
| `7px` | card-hd, toolbar, add-row |
| `8px` | ordine-hd gap, stats gap, progress-wrap gap |
| `10px` | home-card-links a gap, quick-info-bar gap, notice-box padding gap |
| `12px` | layout gap, progress-wrap gap |
| `14px` | home-cards gap |

---

## 5. Border radius

| Valore | Uso |
|--------|-----|
| `4px` | badge, cl-tag, ord-tag, progress bar |
| `5px` | norm-badge, panel-text.ed |
| `6px` | stat, act, ordine-hd, pending-action |
| `7px` | act, add-btn, local-save-btn, department-import-btn, usage-notice |
| `8px` | card, btn-primary, settings input, role-access, quick-btn |
| `9px` | aside-box, toolbar, usage-notice, card (CML-074), notice-box |
| `10px` | tecnologia-export-badge, settings-school-box |
| `12px` | home-card, quick-info-bar, orientation-card, cruscotto, tecnologia-norm |
| `14px` | role-access-dialog, mobile-menu-panel |
| `18px` / `999px` | filter-btn, course-link pill, home-card-links a, badge-preparing |

---

## 6. Ombre

| Ombra | Uso |
|-------|-----|
| `0 1px 3px rgba(0,0,0,.05)` | aside-box, toolbar, usage-notice, local-save-bar |
| `0 1px 3px rgba(0,0,0,.04)` | tecnologia-export-panel, department-import-panel, quick-info-bar |
| `0 1px 2px rgba(0,0,0,.03)` | card (CML-074), card lightest |
| `0 2px 8px rgba(0,0,0,.06)` | home-card |
| `0 2px 8px rgba(26,35,126,.2)` | cruscotto-primary |
| `0 10px 40px rgba(0,0,0,.3)` | role-access-dialog |
| `0 -4px 20px rgba(0,0,0,.12)` | mobile-menu-panel |
| `0 -1px 6px rgba(0,0,0,.06)` | mobile-bottom-bar |
| `0 0 0 1px #eceff1` | aside-box subtle border replacement |

---

## 7. Layout

### Breakpoint

| Breakpoint | Layout | Specifiche |
|------------|--------|------------|
| >1180px | 2 colonne (sidebar + main) | aside 185px, sidebar sticky, max-width 1600px |
| 901-1180px | 2 colonne (sidebar più piccola) | aside 170px, gap 10px |
| <=900px | 1 colonna, sidebar scorrimento orizzontale | display block, sidebar flex orizzontale, disc-btn su border-bottom |
| <=640px | Mobile compatto | padding ridotti |
| <=560px | Mobile piccolo | font-size ridotti (h2 14px, home-title 18px) |
| <=420px | Mobile molto piccolo | card in colonna singola, padding 8px |

### Sidebar discipline (desktop)

- Larghezza: 185px (fissa, non collassabile)
- Sticky con scroll autonomo: `position: sticky; top: 12px; max-height: calc(100vh - 120px); overflow-y: auto`
- Ordini con separatori colorati e label uppercase
- Disciplina attiva: bg `#e8eaf6`, border-left `#1a237e` 4px
- Su mobile (<900px): scorrimento orizzontale con `display: flex; overflow-x: auto`

### Tab bar (desktop + mobile)

- Sticky in alto su mobile: `z-index: 50; position: sticky; top: 0`
- Altezza pulsanti: ~40px (10px padding top/bottom)
- Active state: bordo inferiore 3px `#1a237e`, colore testo `#1a237e`
- Overflow-x: auto su mobile
- 5 tab fissi: Home, Curriculum, Didattica, Esportazioni, Guida

### Sub-nav

- Presente solo per Curriculum (4 voci) e Didattica (2 voci)
- Nascosto su mobile (<900px)
- Stile: font-size 11px, border-bottom 2px trasparente, active `#1a237e`

### Mobile bottom bar

- Presente solo su mobile (<640px via @media)
- 5 pulsanti: Home, Curricolo, Didattica, Esportazioni, Menu (hamburger)
- Fixed bottom: `z-index: 80`
- Altezza: 52px
- Min-height pulsanti: 52px (touch target)

### Mobile menu overlay

- Attivato dal pulsante Menu
- Overlay semitrasparente: `rgba(0,0,0,.35)`
- Pannello dal basso: `border-radius: 14px 14px 0 0`, slide-up animation
- Voci menu con min-height 44px

### Home dashboard

- Max-width: 900px
- 2 card affiancate (Curriculum, Didattica) con griglia `1fr 1fr`
- Su mobile (<680px): `1fr` (stack verticale)
- Card con border-top colorato: Curriculum `#1a237e`, Didattica `#00897b`

### Cruscotto (status bar)

- Max-width matching layout: `calc(1600px - 24px)`
- Gradiente indigo chiaro: `linear-gradient(135deg, #e8eaf6, #c5cae9)`
- 3 sezioni: stato (upper), azioni (cruscotto-btns), barra inferiore (salvataggio + progress)
- Progress bar: 8px height bg `#c5cae9`, fill `linear-gradient(90deg, #43a047, #66bb6a)`

---

## 8. Componenti

### Card (`.card`)

- Border radius: `9px` (CML-074)
- Bordo: 1px solid, colore per stato
- Bordo sinistro 3px per stato (CML-074)
- Ombra: `0 1px 2px rgba(0,0,0,.03)`
- Margin-bottom: 7px
- Padding interno: 7px 10px (card-hd), 7px 12px (card-body), 6px 10px (card-acts)
- Stati: ok, modifica, nuovo, eliminato, approvata, rifiutata

### Pulsanti

| Gerarchia | Classe | Stile | Uso |
|-----------|--------|-------|-----|
| Primario | `btn-primary` | `#1a237e` solid, `#fff` text, 9px 14px | Azione principale |
| Secondario | `btn-secondary` | `#fff` bg, `#cfd8dc` border, `#455a64` text | Azione alternativa |
| Terziario | `btn-tertiary` | Nessun bg/bordo, `#1a237e` text | Azione testuale |
| Azione | `act` | border 1px colored, 4px 11px, 11px | Azioni su card |
| Export | `export-btn` | solid colored bg, 5px 12px, 11px | Export actions |
| Filtro | `filter-btn` | pill 18px, border `#d0d0d0`, 4px 11px | Filtri toolbar |

### Badge di stato

- Font-size: 10px
- Font-weight: 700
- Border-radius: 4px
- Padding: 2px 7px
- Colori: vedi tabella sezione 2
- Sempre testo + colore (mai solo colore)

### Badge semantici (design system)

- Stessa dimensione badge (10px, 700)
- Bordo 1px solid per distinguerli dai badge di stato
- 6 varianti: readonly, prototype, warning, success, info, preparing

### Pannello duale (`.panels`)

- Griglia 2 colonne (`1fr 1fr`)
- Colonna sinistra (current): bg `#fffef5`, bordo destro `#eee`
- Colonna destra (proposta): bg `#f1f8f0`
- Su mobile: 1 colonna (`grid-template-columns:1fr`)

### Box informativi

| Tipo | Sfondo | Bordo sinistro | Uso |
|------|--------|----------------|-----|
| usage-notice | `#fff8e1` | `#f9a825` 3px | Avvisi generici |
| notice-box.warning | `#fff8e1` | `#ffe082` 1px | Avvisi |
| notice-box.tip | `#f3e5f5` | `#ce93d8` 1px | Suggerimenti |
| notice-box.success | `#e8f5e9` | `#a5d6a7` 1px | Conferme |
| install-hint | `#fff8e1` | `#f9a825` 3px | Installazione PWA |
| tecnologia-export-panel | `#f5f5f5` | `#5e35b1` 3px | Export |
| department-import-panel | `#eef7f6` | `#00796b` 3px | Import |
| guida-note | `#fff8e1` | `#ffe082` 1px | Guida chiusura |

### Esportazioni group (`.esport-group`)

- Bordo sinistro: `#1a237e` 3px default, `#5e35b1` per tech, `#00695c` per tool
- Sfondo: `#fff`, border-radius: 9px
- Padding: 12px 14px

### Guida card (`.guida-card`)

- Bordo sinistro: `#1a237e` 3px default, `#7b1fa2` per tip
- Sfondo: `#fff`, border-radius: 9px
- Padding: 12px 14px

### Tool group (`.tool-group`)

- Bordo sinistro: `#78909c` 3px
- Sfondo: `#f5f7fa`, border-radius: 9px
- Padding: 8px 12px
- summary: 12px, 700, `#37474f`

---

## 9. Accessibilità

- **Contrasto**: badge stato con colori WCAG AA (CML-074 ha aumentato contrasto: ok `#388e3c`, modifica `#ef6c00`, ecc.)
- **Focus visible**: `outline: 2px solid #1a237e; outline-offset: 2px; border-radius: 2px` su tutti gli elementi interattivi (button, a, .disc-btn)
- **Touch target**: minimo 44px per elementi interattivi su mobile (bottom bar, menu voci, filtri)
- **Badge testuali**: ogni badge ha testo descrittivo (non solo colore)

---

## 10. Animazioni

| Animazione | Durata | Elemento |
|------------|--------|----------|
| `savePulse` | 2.2s infinite | `.save-chip` box-shadow pulse |
| `saveDotPulse` | 1.6s infinite | `.save-chip::before` dot pulse |
| `localSavedFlash` | 1.1s ease-out | `.local-save-bar.saved-flash` background flash |
| `fadeIn` | .15s | `.mobile-menu-overlay` |
| `slideUp` | .2s | `.mobile-menu-panel` |
| Stato attivo transizioni | .1s / .12s / .15s | Tab, filtro, card hover, button, disc-btn |

---

## 11. Convenzioni di naming

- **Classi badge stato**: `.badge.{stato}` (ok, modifica, nuovo, eliminato, approvata, rifiutata)
- **Classi badge semantico**: `.badge--{variante}` (readonly, prototype, warning, success, info)
- **Classi button**: `.btn-{ruolo}`, `.act-{azione}`, `.export-btn` + `.btn-{formato}`
- **Classi card**: `.card.{stato}`
- **Classi notice**: `.notice-box.{variante}`, `.usage-notice`, `.install-hint`
- **Classi panel**: `.panel.current`, `.panel.proposed`
- **Classi didattica**: `.didattica-evidence-*`, `.didattica-uda-*`
- **Classi normativa**: `.norm-*`
- **Classi tecnologia**: `.tecnologia-norm-*`, `.tecnologia-export-*`

---

## 12. Microcopy pattern

- **Documento di lavoro**: "Documento di lavoro — da validare. Non sostituisce delibera del Collegio Docenti."
- **Prototipo**: "Prototipo read-only — nessun dato viene salvato su server. Richiede validazione professionale del docente."
- **In preparazione**: "Modulo in fase di definizione" (badge-preparing)
- **Area in costruzione**: "Nessun dato viene salvato. Non sostituisce la valutazione professionale del docente."
- **Chiusura prudente**: "La validazione finale resta a cura del gruppo di lavoro e degli organi competenti."
- **Home separazione**: "Curriculum e Didattica restano separati: il primo riguarda il documento istituzionale, la seconda il lavoro operativo in classe."

---

## 13. Schema componenti navigazione

```
┌─ Header (gradient #1a237e → #283593) ─────────────────────┐
│  [sub] I.C. Calvario-Covotta                               │
│  [h1] Curricolo Verticale  IN 2012 → IN 2025              │
│  [stats badges + link motto]                               │
└────────────────────────────────────────────────────────────┘
┌─ Tab bar (sticky top su mobile) ──────────────────────────┐
│  🏠 Home | 📚 Curriculum | 🧑‍🏫 Didattica | 📤 Esp. | ❔ Guida │
├─ Sub-nav (solo Curriculum/Didattica, nascosto su mobile) ──┤
│  [Curriculum: Consulta | Revisione | Definitivo | Fonti]   │
│  [Didattica: Valutazione/Evidenze | UDA modello]           │
└────────────────────────────────────────────────────────────┘
┌─ Layout (flex max-width:1600px, padding:12px, gap:12px) ──┐
│  ┌─ Sidebar (185px, sticky) ─┐ ┌─ Main (flex:1) ────────┐ │
│  │  Disciplina 1 (active)    │ │  [content per tab]      │ │
│  │  Disciplina 2             │ │                         │ │
│  │  Disciplina 3             │ │                         │ │
│  └───────────────────────────┘ └─────────────────────────┘ │
└────────────────────────────────────────────────────────────┘
┌─ Footer (#37474f, #b0bec5 text, font-size:10px) ──────────┐
│  Istituto... | IN 2012 → D.M. 221/2025 | ...              │
└────────────────────────────────────────────────────────────┘
┌─ Mobile bottom bar (fixed, z-index:80, solo mobile) ──────┐
│  🏠Home | 📚Curr. | 🧑‍🏫Did. | 📤Esp. | ☰Menu             │
└────────────────────────────────────────────────────────────┘
```

---

## 14. Vincoli funzionali non negoziabili

- Non introdurre login reale, autenticazione o profili utente persistenti.
- Non introdurre backend, cloud, database o API remote.
- Non modificare lo schema `.cml` (validazione umana, nessun campo automatico).
- Non modificare import/export `.cml` senza slice di integrazione dedicata.
- Non simulare approvazione istituzionale, delibera o certificazione.
- Non confondere proposta docente, validazione professionale e atto deliberativo.
- Non rendere primaria l'esportazione rispetto alla consultazione/revisione.
- Non modificare il codice operativo `CML2025` o la logica di role-access gating.
- Non aggiungere persistenza oltre `sessionStorage` e `localStorage` esistenti.

---

## 15. Prompt operativo per Stitch

Usa questo DESIGN.md per generare una proposta di interfaccia coerente con CurManLight. Mantieni tono istituzionale, leggibilità alta, azioni chiare e massimo tre azioni principali per schermata. Non introdurre nuove funzioni, login, backend, cloud, approvazione automatica o modifiche allo schema `.cml`. La validazione finale resta sempre umana e istituzionale. Le proposte vanno sempre riviste manualmente e integrate tramite slice controllata.
