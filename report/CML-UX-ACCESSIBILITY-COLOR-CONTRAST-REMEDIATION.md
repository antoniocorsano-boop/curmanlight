# Report — Remediation Contrasto Colore CurManLight

## Riepilogo Esecutivo

9 problemi `color-contrast` serious risolti con modifiche minime ai valori colore CSS. Nessun redesign. Nessun cambiamento di layout. 0 serious residui.

## Prima/Dopo

| Metrica | Prima | Dopo |
|---------|-------|------|
| axe violazioni totali | 16 | 7 |
| `color-contrast` serious | 9 | **0** |
| `region` moderate | 7 | 7 |
| Lighthouse desktop | 96/100 | 96/100 |
| Lighthouse mobile | 96/100 | 96/100 |

## Tabella Problemi Contrasto

| Elemento | Colore vecchio | Colore nuovo | Contrast ratio |
|----------|---------------|-------------|----------------|
| Titolo card didattica | `#00897b` | `#00695c` | 3.3:1 → 4.6:1 |
| Badge dimmed (2x) | `#90a4ae` | `#546e7a` | 2.7:1 → 5.3:1 |
| Nota home card | `#90a4ae` | `#546e7a` | 2.7:1 → 5.3:1 |
| Link nota home card | `#00897b` | `#00695c` | 3.3:1 → 4.6:1 |
| Footer microguida | `var(--cml-text-muted)` | `var(--cml-text-secondary)` | 2.8:1 → 5.0:1 |
| Footer home p | `#78909c` | `#546e7a` | 2.8:1 → 4.9:1 |
| Bottom bar buttons (2x) | `#78909c` | `#546e7a` | 3.5:1 → 5.3:1 |

## Impatto su Leggibilità

Tutti i testi ora superano WCAG AA 4.5:1. Nessun cambiamento percettibile di tonalità — i nuovi colori sono semplicemente più scuri della stessa tinta.

## Risultato axe Post-Fix

Confermato: 0 `color-contrast` violations su test locale con axe CLI 4.12.1.

## Cosa Non È Stato Modificato

- Curriculum logic / JSON
- UDA / Evidenze
- Export Center
- aria-live / aria-hidden
- Icon-only labels
- Layout / comportamento
- Service worker / manifest

## Prossima Raccomandazione

1. Slice docs-only: `CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-CONTRAST` per aggiornare score sopra 70
2. Slice runtime separata: `CML-UX-ACCESSIBILITY-LANDMARK-REGION` per i 7 `region` moderate
3. Poi screen reader smoke test
