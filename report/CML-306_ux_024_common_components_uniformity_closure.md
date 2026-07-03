# Report — CML-306: UX-024 Common Components Uniformity

## Sintesi

CML-306 ha uniformato 4 componenti notice/avviso con sfondo ambrato che presentavano stili diversi (bordo laterale, border-radius, font-size, colore testo) pur avendo la stessa funzione semantica. Tutti allineati al componente canonico `usage-notice`.

## Modifiche applicate

| Componente | Prima | Dopo | Variazione |
|---|---|---|---|
| `norm-warning` | no left accent, radius 6px, #795548 | left accent, radius 9px, #5d4037 | 3 proprietà |
| `guida-note` | no left accent, radius 7px | left accent, radius 9px | 2 proprietà |
| `gen-note` | no border, no left accent, 10px | border, left accent, 11px | 4 proprietà |
| `home-applicability-warning` | no left accent, radius 8px | left accent, radius 9px | 2 proprietà |

## Impatto

- **8 righe CSS modificate** (4 per file runtime), solo proprietà di stile
- **0 impatto** su HTML, JS, template, dati, schema, export, import, storage
- **0 impatto** su tool di validazione
- **0 impatto** su navigazione o comportamento

## Non regressione

Tutte le UX precedentemente chiuse confermate non regredite. CML-304 e CML-305 verificati invariati.

## Conclusione

UX-024 chiuso con micro-uniformazione leggera di 4 componenti notice. PM-07 avanza da 10% a 20%.
