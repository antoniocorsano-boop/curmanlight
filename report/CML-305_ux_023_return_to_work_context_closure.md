# Report — CML-305: UX-023 Return to Work Context Clarity

## Sintesi

CML-305 ha aggiunto un collegamento "← Torna al punto di lavoro" nelle sezioni **Esportazioni** e **Guida**, che erano le uniche sezioni principali senza un percorso di ritorno esplicito al Curriculum. Il collegamento ripristina l'ultimo tab Curriculum visitato (Consulta, Revisione o Definitivo) con la disciplina selezionata preservata.

## Analisi pre-intervento

La navigazione in CurManLight ha 5 tab principali: Home, Curriculum, Competenze e progettazione, Esportazioni, Guida. Il breadcrumb è nascosto in Esportazioni e Guida. L'unico modo per tornare al Curriculum da queste sezioni era cliccare manualmente il tab "Curriculum" nella barra principale, atterrando su Consulta, e poi eventualmente ri-selezionare disciplina e sub-tab.

La disciplina selezionata (`selDisc`) era già preservata globalmente, ma non c'era alcun segnale visibile di questa possibilità.

## Modifica applicata

### JS (setTab, 1 riga aggiunta)

Tracciamento dell'ultimo tab Curriculum visitato in `window._lastWorkTab`.

### HTML (Esportazioni, 1 riga aggiunta)

Link "← Torna al punto di lavoro" dopo l'ultimo gruppo di esportazione.

### HTML (Guida, 1 riga aggiunta)

Link "← Torna al punto di lavoro" dopo l'avviso conclusivo.

## Impatto

- **4 righe modificate** (2 per file runtime: 1 JS + 1 HTML per sezione)
- **0 impatto** su funzionalità esistenti, dati, schema `.cml`, esportazioni, import, storage, service worker
- **0 impatto** su tool di validazione
- **0 impatto** su navigazione o comportamento esistente (link è aggiuntivo, non sostitutivo)

## Mappatura sezioni con link di ritorno

| Sezione | Prima | Dopo |
|---------|-------|------|
| Esportazioni | Nessun link di ritorno | ✅ Link "← Torna al punto di lavoro" |
| Guida | Nessun link di ritorno | ✅ Link "← Torna al punto di lavoro" |

## Non regressione

Tutti i UX item precedentemente chiusi sono stati verificati non regrediti:
- UX-001, UX-004, UX-006, UX-009, UX-011, UX-013, UX-014, UX-015, UX-022 — confermati invariati

## Conclusione

CML-305 chiude UX-023 con un micro-intervento di 4 righe totali (2 per file runtime). Il problema era limitato a due sezioni (Esportazioni, Guida) che mancavano di un collegamento di ritorno esplicito pur avendo lo stato disciplina preservato. PM-03 avanza dal 10% al 20%.
