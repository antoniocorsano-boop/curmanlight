# CML-014B — Enhanced Pending Detail Panel

## Stato

Implementazione del miglioramento al dettaglio espandibile delle card pending (Opzione A da CML-014A).
Modifica runtime su `index.html` (16 insertion, 7 deletion).

## Preflight

| Campo | Valore |
|---|---|
| Branch | `cml-008r-fix-markdown-decision-summary` |
| HEAD | `9243e9e` |
| Working tree | Pulita ✅ (pre-modifica) |
| CML-014A criteri | 16 criteri di accettazione |
| Modifica prevista | Solo `index.html` |
| Asset | Invariati (sw.js, _headers, PDF) |

## 1. Modifiche

### A. Etichette fonti specifiche

Prima:
- `📄 IN 2012 (attuale)` / `✨ Proposta IN 2025`
- `🆕 Non presente nel curricolo attuale`

Dopo:
- `📄 DM 254/2012 (vigente)` / `✏️ DM 221/2025 — proposta di aggiornamento`
- `🆕 DM 254/2012 — assente nel curricolo attuale`

Applicato sia nella vista pending-compatta (dettaglio 🔍) che nella modalità edit (✏️).

### B. Evidenziazione differenze visiva

- Colored left border sul dettaglio: arancione (`#f57f17`) per pannello corrente, verde (`#43a047`) per proposta
- Colori contestuali coerenti con i label di provenienza normativa

### C. "Personalizza testo" in primo piano

Prima: solo nel `card-acts` dentro il dettaglio espandibile (🔍)
Dopo: pulsante `✏️` con stile viola (`#7b1fa2`) nella `pending-actions` — sempre visibile nella riga compatta

### D. Scroll dettaglio su mobile

- `max-height:200px; overflow-y:auto` su `.pending-detail .panel-text` (desktop)
- `max-height:150px` a ≤760px (mobile)
- Preventivo per testi lunghi che altrimenti occupano troppo spazio verticale

### E. Testo proposta più lungo

- Truncation della proposta nella vista compatta aumentata da 90 a 120 caratteri

## 2. Criteri di accettazione CML-014A — Verificati

| # | Criterio | Esito | Dettaglio |
|---|---|---|---|
| 1 | Dettaglio accessibile senza perdere contesto | ✅ 🔍 apre confronto nella card |
| 2 | Confronto leggibile su desktop | ✅ Griglia 2 colonne preservata |
| 3 | Confronto leggibile su mobile | ✅ max-height 150px + scroll |
| 4 | Fonti specificate nel confronto | ✅ DM 254/2012 vs DM 221/2025 |
| 5 | Differenze evidenziate | ✅ Colored left borders (arancione/verde) |
| 6 | "Personalizza testo" in primo piano | ✅ Pulsante ✏️ nella riga azioni compatta |
| 7 | Azioni approva/rifiuta sempre chiare | ✅ ✅ ❌ invariati |
| 8 | Nessuna perdita informativa | ✅ Tutte le info preservate |
| 9 | Nessuna modifica ai dati | ✅ Local storage inalterato |
| 10 | Nessuna modifica ai conteggi | ✅ Sidebar conteggi invariati |
| 11 | Nessuna regressione mobile | ✅ Bottom bar, menu overlay funzionanti |
| 12 | Nessuna regressione desktop | ✅ Layout ≥901px invariato |
| 13 | Compatibilità bottom bar | ✅ body padding 52px preservato |
| 14 | Compatibilità breadcrumb | ✅ Invariato |
| 15 | Card ok/decise invariate | ✅ Collapse meccanismo preserved |
| 16 | Export e tecnologia panel invariati | ✅ Markdown, Word, PDF preserved |

## 3. Cosa NON è stato toccato

- ❌ Logica approvazione/rifiuto
- ❌ Conteggi
- ❌ Card ok/decise (collasso, badge, azioni)
- ❌ Tecnologia export panel
- ❌ Markdown generation
- ❌ PDF, sw.js, _headers, manifest, icons
- ❌ Asset
- ❌ Desktop breakpoint ≥901px
- ❌ Bottom bar, menu overlay, sidebar contestuale, breadcrumb
- ❌ Problemi cosmetici CML-013G (CSS morto, media query)

## 4. Verdetto

```
CML_014B_ENHANCED_PENDING_DETAIL_PANEL_READY
```

## Output finale

| Campo | Valore |
|---|---|
| Verdetto | `CML_014B_ENHANCED_PENDING_DETAIL_PANEL_READY` |
| Branch | `cml-008r-fix-markdown-decision-summary` |
| HEAD partenza | `9243e9e` |
| HEAD nuovo | `9243e9e` + commit |
| File modificato | `_published_snapshot/netlify-current/index.html` |
| Insertion | 16 |
| Deletion | 7 |
| Confronto fonti | ✅ DM 254/2012 vs DM 221/2025 |
| Differenze evidenziate | ✅ Colored left borders (arancione/verde) |
| Personalizza in primo piano | ✅ ✏️ in pending-actions |
| Scroll mobile | ✅ max-height 150px |
| Testo proposta | ✅ 120 caratteri (da 90) |
| Asset | Invariati ✅ |
| Deploy | ❌ Nessuno (CML-014C dopo) |

## Prossimo step

**CML-014C — Enhanced Pending Detail Smoke Audit**
Verifica pubblicata del dettaglio migliorato prima di procedere con altre modifiche.
