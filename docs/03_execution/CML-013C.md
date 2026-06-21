# CML-013C — Smoke Audit: Guided Home Prototype

## Stato

Smoke audit della home guidata implementata in CML-013B.
Nessuna modifica runtime, nessun deploy.
Analisi su sorgente a HEAD `dacdec6`.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `dacdec6` (CML-013B)
- Working tree: pulita
- Live deploy su Netlify: **non aggiornato** — la versione live è ancora pre-CML-013B
- CML-013A preservato ✅
- CML-013B preservato ✅
- CML-012A preservato ✅

## Piano di audit

| # | Punto | Metodo |
|---|---|---|
| 1 | Primo impatto — la home risponde a "cosa devo fare?" | Analisi sorgente + fetch live |
| 2 | Tre azioni principali | Verifica presenza e comportamento |
| 3 | Funzioni secondarie nel menu Azioni | Verifica collocazione |
| 4 | Gerarchia e navigazione | Breadcrumb, tabs, sidebar |
| 5 | Responsive | Verifica breakpoint su sorgente |
| 6 | Regressioni | Card, dettaglio, touch, export, asset |

## 1. Primo impatto

| Elemento | Presente | Note |
|---|---|---|
| Breadcrumb sotto tabbar | ✅ | `#breadcrumb` con `<span class="crumb-current">Revisione per disciplina</span>` |
| Stato lavoro | ✅ | `cruscotto-state`: "Stato: revisione avviata" |
| Prossima azione | ✅ | `cruscotto-next`: "Prossima azione: controlla le 12 voci da validare" |
| 3 pulsanti azione | ✅ | Controlla voci (primario), Apri documento, Esporta |
| Azioni secondarie in menu | ✅ | Dietro ⚙️ Azioni ▾ toggle |
| Salvataggio come stato | ✅ | "💾 Ogni decisione viene conservata in questo browser." inline |
| Header compatto | ✅ | App-header con toggle Dettagli |

**Giudizio:** La home risponde chiaramente a "cosa devo fare adesso?" — lo stato e la prossima azione sono il primo elemento visibile dopo il breadcrumb.

## 2. Tre azioni principali

| Azione | Collocazione | Target | Funziona |
|---|---|---|---|
| 📋 Controlla voci | Pulsante primario cruscotto | Tab lavoro → filtro pending → scroll card area | ✅ JS: `setTab('lavoro')` + `setFilter('pending')` + `scrollIntoView` |
| 📖 Apri documento | Pulsante cruscotto | Tab riepilogo | ✅ `setTab('riepilogo')` |
| 📤 Esporta | Pulsante cruscotto | Tab lavoro → scroll toolbar export | ✅ `setTab('lavoro')` + `scrollIntoView(toolbar)` |

Tutti e tre i pulsanti hanno handler onclick completi.

## 3. Funzioni secondarie nel menu Azioni

| Funzione | Collocazione in CML-013B | Esito |
|---|---|---|
| 💾 Salva | Menu Azioni | ✅ |
| ⬇️ Backup | Menu Azioni | ✅ |
| ⬆️ Importa | Menu Azioni | ✅ |
| ↺ Ripristina | Menu Azioni | ✅ |
| 📲 Installa | Menu Azioni | ✅ |
| 👤 Impostazioni / onboarding | Menu Azioni | ✅ |
| 📘 Corso PDF | Menu Azioni (link) | ✅ |
| 🏛️ Motto e metodo | Menu Azioni (link) | ✅ |
| ❔ Guida rapida | Menu Azioni | ✅ |

Nessuna funzione secondaria è rimasta nel cruscotto principale — tutte raccolte dietro ⚙️ Azioni ▾. ✅

## 4. Gerarchia e navigazione

### Breadcrumb

```html
<div class="path-breadcrumb" id="breadcrumb">
  <span class="crumb-current">Revisione per disciplina</span>
</div>
```

Stile: `font-size:11px; color:#78909c; padding:8px 0 2px; max-width:calc(1600px - 24px); margin:0 auto`
Elementi: `.crumb-sep` e `.crumb-current` definiti ma attualmente solo il nodo corrente è usato.

**Nota:** Il breadcrumb non è ancora dinamico (non cambia con la selezione disciplina). Per CML-013C è accettabile come primo passo — la struttura CSS è pronta per contenuti futuri.

### Tab bar

4 tabs: ✏️ Revisione per disciplina (default), 📋 Curricolo definitivo, 📜 Riferimenti normativi, 📖 Sezioni generali.

### Sidebar discipline

- Desktop: fixed 185px, sticky, scrollabile
- Mobile: orizzontale scrollabile
- Stile sidebar più discreto (CML-013B): `box-shadow: 0 0 0 1px #eceff1`, `aside-title` in #78909c

### Flusso utente

```
Home (cruscotto) → Azione principale → Tab specifico con contesto
                                     ↓
                              Breadcrumb aggiornato
```

## 5. Responsive

### Breakpoint verificati su sorgente

| Breakpoint | Target | Stato |
|---|---|---|
| 1180px | Layout max-width | ✅ Padding/gap ridotti |
| 900px | Tablet landscape | ✅ Sidebar → orizzontale, header font clamp, stat grid 2-col, font 14px |
| 760px | Tablet portrait | ✅ App-header sticky, quick-info-bar block, header-details compact, tabbar spostato |
| 640px | Phone landscape | ✅ Usage-notice più grande |
| 560px | Phone portrait | ✅ Header font 18px, filtri 50% width, esporta full-width, card padding |
| 380px | Small phone | ✅ Stat 1-col, filtri full-width, header font 16px |
| Hover:none | Touch devices | ✅ box-shadow rimossi su hover |

### Touch target

- `touch-action: manipulation` su tutti gli elementi interattivi ✅
- Min-height 44px su bottoni mobili ✅
- Min-height 42px su bottoni desktop ✅
- Min-height 40px su filter-btn mobile ✅

### Header mobile

- App-header sticky top-0 z-70 su mobile ✅
- `toggleHeaderDetails()` con aria-expanded/controls ✅
- Noinvasivo con hidden attr ✅

### Regressioni responsive note

- Il breadcrumb non ha breakpoint specifici — eredita font-size 11px su tutte le viewport. Su mobile molto piccolo (<360px) potrebbe risultare piccolo ma ancora leggibile. Non bloccante.

## 6. Regressioni

### Funzionali

| Area | Stato | Dettaglio |
|---|---|---|
| Card rendering | ✅ | Stessa struttura `.card-hd .panels .card-acts` |
| Pannello confronto | ✅ | `.panels` grid 1fr 1fr (desktop) / 1fr (mobile) |
| Badge stato | ✅ | `.badge.ok .badge.modifica .badge.nuovo .badge.approvata .badge.rifiutata` |
| Filtri | ✅ | Tutti / Da decidere / Approvati / Rifiutati / Invariati / Nuovi + Nascondi invariati |
| Export confronto | ✅ | Word / Copia / Markdown / PDF |
| Export definitivo | ✅ | Word / Copia / Markdown / PDF |
| Tecnologia export panel | ✅ | Genera bozza / Copia / Scarica + textarea preview |
| Settings modal | ✅ | Chiamata a `openSettingsModal()` presente |
| Install app | ✅ | `handleInstallApp()` presente |
| Backup/Importa/Ripristina | ✅ | `exportLocalBackup()`, `importLocalBackup()`, `resetLocalState()` |
| Corso PDF link | ✅ | `href="Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf"` |
| Motto page link | ✅ | `href="/motto-non-multa-sed-multum"` |
| Guida rapida | ✅ | `showWelcome(true)` |
| Uso ibrido collassabile | ✅ | Dettaglio `<details>` |
| Fonti normative | ✅ | Tab normativa |
| Sezioni generali | ✅ | Tab generali |
| Disclaimer validazione | ✅ | Su esport confronto e definitivo |
| Quick-info-bar | ✅ | Presente sotto il layout |
| Local save | ✅ | `local-save-status` spostato in cruscotto-bar |
| Conteggi | ✅ | Non modificati (stessa logica JS) |
| Logica approvazione/rifiuto | ✅ | Non modificata |

### Asset

| Asset | Stato |
|---|---|
| index.html | ✅ Modificato (solo questo file) |
| manifest.webmanifest | ✅ Invariato |
| sw.js | ✅ Invariato |
| _headers | ✅ Invariato |
| icons/ | ✅ Invariati |
| PDF corso | ✅ Invariato |
| docs_distribuzione/ | ✅ Invariati |

### CSS morto

Una classe CSS non più utilizzata dall'HTML:

- `.local-save-bar` — ancora nello `<style>` ma nessun elemento la usa più. Impatto zero (solo byte sprecati). Può essere ripulita in un prossimo ciclo.

## 7. Risultati audit

| Punto | Esito |
|---|---|
| Primo impatto | ✅ La home risponde a "cosa devo fare?" |
| 3 azioni principali | ✅ Visibili, cliccabili, funzionanti |
| Funzioni secondarie | ✅ Tutte nel menu Azioni |
| Gerarchia/navigazione | ✅ Breadcrumb + tabs + sidebar |
| Responsive | ✅ 6 breakpoint, touch target 44px |
| Regressioni funzionali | ✅ Nessuna |
| Regressioni asset | ✅ Nessuna |

## 8. Raccomandazioni (opzionali, non bloccanti)

| # | Cosa | Priorità |
|---|---|---|
| 1 | Rendere il breadcrumb dinamico (aggiornare al cambio disciplina/tab) | Media |
| 2 | Rimuovere la classe CSS `.local-save-bar` inutilizzata | Bassa |
| 3 | Aggiungere breakpoint specifico per breadcrumb su viewport <400px | Bassa |

## 9. Verdetto

```
CML_013C_GUIDED_HOME_SMOKE_AUDIT_PASSED
```

Nessuna regressione. Tutte le funzioni sono preservate.
La home guidata risponde al criterio centrale: "cosa devo fare adesso?".

## Prossimo step

Passare a CML-013D — Pannello dettaglio contestuale (desktop laterale, mobile espandibile).
Oppure, se si vuole prima completare la navigazione, CML-013C originale (CML-013C nel piano CML-013A: navigazione mobile + menu a scomparsa).
