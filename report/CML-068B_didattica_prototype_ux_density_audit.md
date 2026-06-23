# CML-068B — Didattica Prototype UX Density Audit Report

**Stato:** ✅ Completed  
**Data:** 2026-06-23  
**HEAD:** `fb5750c` (CML-068A docs, pre-audit)  
**Nessuna modifica runtime, nessun deploy**

## Riassunto

Audit UX del prototipo Didattica Valutazione/Evidenze (CML-068) su 13 aree. Esito: **P0=0, P1=0, P2=3, P3=2**. Nessun bloccante. Raccomandazione: procedere a CML-069 (UDA module selection) senza alleggerimento intermedio.

## Aree auditate e metriche live

| # | Area | Esito | Note |
|---|------|-------|------|
| 1 | Home → card Didattica | ✅ tema teal, struttura 4 link | 3 link dimessi (`#`) non funzionanti (P2) |
| 2 | Tab/sezione Didattica | ✅ `<div id="tab-didattica">`, header, box, stats, filters, list, footer | struttura chiara |
| 3 | Titolo e microcopy | ✅ "Prototipo read-only", "Da adattare alla classe", "validazione professionale", "Non costituisce documento istituzionale approvato" | tutto presente |
| 4 | Stats bar | ✅ 13/2/5/6 count | etichetta "Prototipo" come stat fuori posto (P3) |
| 5 | Filtri ordine | ✅ 4 pulsanti (Tutti/Infanzia/Primaria/Secondaria) | manca filtro classe/ambito (P2) |
| 6 | Card unità | ✅ 13 card, expandibili su header click | 13 card visibili su "Tutti" (P2) |
| 7 | Dettaglio espandibile | ✅ pattern `.open` CSS, onclick toggle | ok |
| 8 | Evidenze osservabili | ✅ 3 per unità, formato icona ✅ | ok |
| 9 | Criteri di valutazione | ✅ 3 per unità, formato icona 📋 | ok |
| 10 | Mobile | ✅ bottom bar, menu overlay, responsive CSS | Didattica non in bottom bar diretta (P2) |
| 11 | Distinzione Curriculum/Didattica | ✅ colori diversi, tab separati, struttura diversa | ok |
| 12 | Densità pulsanti/card | ✅ buttonTags=100, exportButtons=27, onclick=114 | stabile |
| 13 | Preparazione UDA | ✅ `TECNOLOGIA_NORM_DATA` completo, read-only chiaro | ok |

## Classificazione problemi

### P2 — Rumore/sovraccarico (non bloccante)

| # | Problema | Impatto | Proposta |
|---|----------|---------|----------|
| 1 | 3 link dimessi Home card Didattica con `href="#"` — l'utente clicca senza effetto | Medio — può sembrare che l'app non funzioni | Nascondere link non pronti o usare "Prossimamente" |
| 2 | 13 card su "Tutti", no filtro classe/ambito | Basso — affatica su mobile | Aggiungere filtro classe in futura iterazione |
| 3 | Didattica non in bottom bar mobile (solo via menu overlay) | Medio — +1 tap su mobile | Valutare in CML-069 |

### P3 — Cosmetici

| # | Problema | Proposta |
|---|----------|----------|
| 4 | "Prototipo" come stat nella stats bar | Spostare in badge separato |
| 5 | Link dimessi senza `title="Non ancora disponibile"` | Aggiungere title opzionale |

## Aspetti positivi

Separazione Curriculum/Didattica chiara ✅, microcopy prudente completa ✅, filtro ordine funzionante ✅, dettaglio espandibile coerente ✅, dati embedded ✅, read-only ✅, nessuna falsa aspettativa ✅

## Decisione

**Nessun P1 → procedere a CML-069 (UDA module selection) senza CML-068C.**

Debiti P2/P3 annotati per risoluzione futura.

## Verdetto

`CML_068B_DIDATTICA_PROTOTYPE_UX_DENSITY_AUDIT_READY`
