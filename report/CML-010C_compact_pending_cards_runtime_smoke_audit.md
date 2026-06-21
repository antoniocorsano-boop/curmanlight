# CML-010C — Compact Pending Cards Runtime Smoke Audit Report

## Dettaglio verifiche

### Repository state
```
Branch: cml-008r-fix-markdown-decision-summary
HEAD:   317222a (docs: CML-010B closure report + CML-010A esito link)
Runtime commit: a240ab7 (CML-010B compact pending cards)
Working tree: pulita (solo docs/REPO-MOVELOG.md non committata)
```

### Conteggi Tecnologia (profilo Secondaria)

Dati estratti da `let DATA = {...}`:

| ID | Ordine | Tipo | Status |
|---|---|---|---|
| te_inf1 | Infanzia | Traguardo | ok |
| te_pri1 | Primaria | Traguardo | modifica |
| te_pri2 | Primaria | Traguardo | modifica |
| te_sec1 | Secondaria | Traguardo | ok |
| te_sec2 | Secondaria | Traguardo | modifica |
| te_sec3 | Secondaria | Traguardo | modifica |
| te_ob_inf | Infanzia | Obiettivo | ok |
| te_ob_pri1 | Primaria | Obiettivo | ok |
| te_ob_pri2 | Primaria | Obiettivo | modifica |
| te_ob_sec1 | Secondaria | Obiettivo | modifica |
| te_ob_sec2 | Secondaria | Obiettivo | modifica |
| te_ob_sec3 | Secondaria | Obiettivo | modifica |

**12 totali, 4 ok, 8 modifica** — corrispondono alle attese.

### Card rendering (codice sorgente)

Le 4 modalità di `cardHTML()` sono state verificate a livello di codice:
1. **ok** — `div.card.ok` → collapse-header + collapse-body con testo + pulsanti
2. **decisa** — `div.card.approvata/rifiutata` → collapse-header + collapse-body
3. **pending edit** — `div.card.pending-card` → pannelli full + textarea + ✅/❌
4. **pending compact** — `div.card.pending-card` → badge + `pending-text` (troncato) + 4 emoji ✅❌🔍🗑 + dettaglio nascosto

### Gap-header

- Singolo `gap-header-unique` aggiunto in `render()` per sezione con `hasPending`
- Vecchio `Gap 2025 della disciplina` rimosso (0 occorrenze)
- Lock-notice unica per sezione via `ordLock` (anziché per-card)

### Dettaglio espandibile

- `togglePendingDetail(id)` apre il div `pending-detail` e cambia icona
- Confronto testuale IN2012 vs proposta IN2025 nei `panel current / proposed`
- `pending-detail` è `display:none` di default, `display:block` con classe `open`

### Asset invariati

- `sw.js`: hash `a3cced9bae136ffdb2609864494b338669b28a41e844916385ef544fd259bd0c`
- `_headers`: hash `50f00fb9ab63d234290ef5d245a544b278a07f25f89883ec60a42595b14d8e88`

### Breakpoint screenshots (da CML-010B)

| Breakpoint | Dimensione | Note |
|---|---|---|
| 360px | 56494 bytes | Layout compatto, wrap verticale azioni |
| 414px | 68698 bytes | Pulsanti touch-friendly |
| 768px | 149156 bytes | Grid card-acts |
| 1280px | 184876 bytes | Desktop, riga orizzontale |

## Non regressioni

Nessuna delle seguenti aree è stata modificata:
- `usage-notice` (details collassato)
- `local-save-bar` (pulsanti compatti)
- `tecnologia-export-panel`
- Cruscotto (progresso, pulsanti, stato)
- Toolbar (filtri, export collassato)
- Tabs (Lavoro, Riepilogo, Normativa, Generali)
- Markdown generation
- PDF export
- sw.js, _headers, assets

## Verdetto

```
CML_010C_COMPACT_PENDING_CARDS_RUNTIME_SMOKE_READY
```

Prossimo step consigliato: **CML-010D — Controlled Netlify Publication (Compact Cards)**
