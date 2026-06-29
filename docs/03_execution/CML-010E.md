# CML-010E — Real Mobile Acceptance Smoke

## Stato

Smoke test su dispositivi mobili simulati completato. Nessuna modifica runtime.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `ba4bd5e` (docs: CML-010D)
- Working tree: pulita
- Nessuna modifica runtime
- Nessun deploy

## Dispositivi simulati

| Dispositivo   | Viewport | User Agent        | Screenshot  |
| ------------- | -------- | ----------------- | ----------- |
| iPhone 13 Pro | 390×844  | Safari iOS 17     | 63797 bytes |
| Galaxy S21    | 360×800  | Chrome Android 14 | 56494 bytes |
| Pixel 5       | 393×851  | Chrome Android 14 | 64548 bytes |

## Verifiche

### 1. Caricamento pagina

- HTTP 200, DOM 228629 bytes ✅
- Cards-area, cruscotto, local-save-bar presenti ✅

### 2. Cruscotto

- `cruscotto-next` con stato e prossima azione ✅
- Tre pulsanti principali (`Controlla voci`, `Apri documento`, `Esporta`) ✅
- `setTab('lavoro')` su pulsanti (CML-009D preservato) ✅
- Progress-bar integrata ✅

### 3. Tab Lavoro / Card pending compatte

- 9 pending-detail sections (tutte nascoste) ✅
- 8 badge modifica + 5 badge ok ✅
- 9 pulsanti ✅ / 9 ❌ / 9 🔍 / 9 🗑 ✅
- Testo troncato con ellipsis in ogni card ✅
- Gap-header-unico (4 sezioni) con istruzioni ✅
- Readonly-order-note per ordini fuori profilo ✅

### 4. Dettaglio espandibile

- `togglePendingDetail()` presente in ogni card ✅
- Icona 🔍 visibile, swap a 📖 (dal codice) ✅
- Pannelli confronto IN2012 vs IN2025 nel dettaglio ✅
- `act-edit` nel dettaglio per personalizzazione ✅

### 5. Approvazione/rifiuto

- `approve()`, `reject()` invocate correttamente ✅
- `undoDecision()`, `saveEditAndApprove()` definite ✅
- Nessuna modifica alla logica ✅

### 6. Touch target (responsive CSS)

- `.pending-action{min-height:34px;padding:5px 10px;font-size:12px}` (mobile) — **P1: 34px sotto il minimo HIG 44px**
- `.act{min-height:42px;padding:9px 10px;font-size:12px}` (mobile) — OK ✅
- `.collapse-header{min-height:40px}` (mobile) — OK ✅
- `.add-btn{min-height:42px}` (mobile) — OK ✅

### 7. Filtri ed esportazione

- `more-filters` toggle presente ✅
- `tecnologia-export-panel` presente ✅
- Toolbar compatta con toggle ✅

### 8. Installazione/salvataggio

- `local-save-bar` visibile ✅
- `install-hint` nascosto (come da CML-009B) ✅
- Pulsanti salvataggio compatti (CML-009D) ✅

### 9. Asset e regressioni

- sw.js: invariato ✅
- _headers: invariato ✅
- PDF: invariato ✅
- Nessun deploy ⛔
- Nessuna modifica runtime ✅

## Problemi rilevati

| #   | Problema                                                                                                                                                                                         | Gravità |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| P1  | Touch target `.pending-action` ha min-height:34px su mobile, sotto il minimo consigliato Apple HIG (44px). Utenti con dita grandi potrebbero sbagliare tasto.                                    | Media   |
| P2  | Icona 🔍 ("Dettaglio e confronto") non auto-esplicativa senza title tooltip (che non appare su mobile). Dipende dal testo gap-header letto una volta per sezione.                                | Bassa   |
| P3  | Collapse indicator ▸ su ok/decise cards: utente potrebbe non sapere che sono cliccabili senza il title tooltip (non visibile su mobile). La riga ha `cursor:pointer` ma su mobile non c'è hover. | Bassa   |

## Verdetto

```
CML_010E_REAL_MOBILE_ACCEPTANCE_SMOKE_READY
```

## Prossimo step

Scegliere tra:

- **CML-011A — Export and Guide Clarity Audit** (migliorare esportazione e guida)
- **CML-011B — Real User Task Flow Audit** (percorso completo apro→controllo→valido→esporto)
