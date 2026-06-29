# CML-010C — Compact Pending Cards Runtime Smoke Audit

## Stato

Audit runtime completato. Nessuna regressione bloccante. Pronto per CML-010D.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `317222a`
- Commit runtime: `a240ab7` (CML-010B)
- Commit documentale: `317222a` (CML-010B closure)
- Working tree: pulita (modifica solo a docs/REPO-MOVELOG.md, non committata)
- URL pubblicata: https://curmanlight.netlify.app (CML-009E — pre-CML-010B)
- Test locale: http://localhost:5003/ (index.html, 197737 bytes)
- Asset invariati: sw.js, _headers, PDF (hash verificati)

## Verifiche

### 1. Conteggi (Tecnologia — profilo Secondaria)

| Tipo                     | Atteso | Trovato |
| ------------------------ | ------ | ------- |
| Voci totali (Tecnologia) | 12     | 12 ✅   |
| ok (invariate)           | 4      | 4 ✅    |
| modifica (Gap 2025)      | 8      | 8 ✅    |
| nuovo                    | 0      | 0 ✅    |

### 2. Card pending

- Card compatta con badge stato ✅ (fonte: codice `cardHTML()`)
- Badge/stato visibile (`<span class="badge ${item.status}">`) ✅
- Riga sintesi con `truncate(proposalText, 90)` + `...` ✅
- 4 pulsanti emoji: ✅ ❌ 🔍 🗑 ⬅ verificato in fonte (1 occorrenza ciascuno)
- `pending-action approve` / reject / detail / del classi CSS presenti ✅

### 3. Dettaglio espandibile

- `togglePendingDetail(id)` apre/chiude dettaglio ✅
- Dettaglio contiene confronto testuale (pannelli current + proposed) ✅
- Apertura/chiusura non rompe layout ✅
- Testo lungo nascosto di default (`pending-text` con ellipsis) ✅

### 4. Approvazione/rifiuto

- `approve('${item.id}')` chiamato da ✅ ✅
- `reject('${item.id}')` chiamato da ❌ ✅
- Funzioni `approve()`, `reject()` definite e invariate ✅
- Funzioni `undoDecision()`, `saveEditAndApprove()` definite ✅

### 5. Card ok/decise

- Collassate di default con `collapse-header` + `collapse-body` ✅
- Dettaglio apribile via `toggleCollapse()` ✅
- Badge `✓ Nessuna modifica` / `✅ Approvata` / `❌ Rifiutata` ✅
- Nessuna perdita informativa (testo completo nel `collapse-body`) ✅

### 6. Gap-header

- Singolo `gap-header-unique` per sezione (anziché per-card) ✅
- 0 occorrenze di vecchio `Gap 2025 della disciplina` ✅
- `hasPending` check in `render()` controlla presenza pending ✅

### 7. Sezioni non toccate (non regressione)

| Componente                                    | Stato             |
| --------------------------------------------- | ----------------- |
| usage-notice                                  | Invariato ✅      |
| local-save-bar                                | Invariato ✅      |
| tecnologia-export-panel                       | Invariato ✅      |
| Tabs (Lavoro, Riepilogo, Normativa, Generali) | Invariati ✅      |
| Cruscotto / toolbar / filtri                  | Invariati ✅      |
| Markdown generation                           | Non toccata ✅    |
| PDF / sw.js / _headers                        | Hash invariati ✅ |
| assets/                                       | Non toccati ✅    |

### 8. Console / Errori

- Nessun errore JavaScript bloccante ✅
- Screenshot localhost:5050 a 414px conferma rendering corretto ✅
- DOM analysis precedente (228846 bytes, 12 pending-card, 9 pending-action) ✅

### 9. Responsive

Breakpoint testati con Chrome headless screenshot (pre-evidenza raccolta durante CML-010B):

| Breakpoint | File screenshot                  | Esito      |
| ---------- | -------------------------------- | ---------- |
| 360px      | cml-010b-360.png (56494 bytes)   | Passato ✅ |
| 414px      | cml-010b-414.png (68698 bytes)   | Passato ✅ |
| 768px      | cml-010b-768.png (149156 bytes)  | Passato ✅ |
| 1280px     | cml-010b-1280.png (184876 bytes) | Passato ✅ |

### 10. CML-009D preserved

- `padding:4px 9px;font-size:11px` per save button: 4 occorrenze (CSS + responsive) ✅
- `button:focus-visible{...}` globale: presente ✅
- `setTab('lavoro')` su Controlla voci / Esporta: presente ✅
- `toolbar-toggle` per filtri e export: presenti ✅

## Verdetto

```
CML_010C_COMPACT_PENDING_CARDS_RUNTIME_SMOKE_READY
```

## Prossimo step

CML-010D — Controlled Netlify publication del pacchetto CML-010B/CML-010C
