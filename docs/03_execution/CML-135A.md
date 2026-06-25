# CML-135A — NORMALIZZATO_TO_STRUTTURATO_RUNTIME_ALIGNMENT

## Obiettivo
Applicare le 5 sostituzioni testuali "normalizzato" → "strutturato" nel runtime.

## Sostituzioni applicate

| # | Testo attuale | Testo nuovo |
|---|---------------|-------------|
| 1 | `Il curricolo normalizzato richiede validazione umana.` | → `Il curricolo strutturato richiede validazione umana.` |
| 2 | `dal pacchetto Tecnologia normalizzato` (×2) | → `dal pacchetto Tecnologia strutturato` |
| 3 | `collegati al pacchetto Tecnologia normalizzato` | → `collegati al pacchetto Tecnologia strutturato` |
| 4 | `pacchetto curricolare normalizzato` | → `pacchetto curricolare strutturato` |

## Residuo mantenuto
- Linea 4848: `// Tecnologia — anteprima read-only pacchetto normalizzato CML-062` (commento JS tecnico)

## Perimetro non toccato
- JSON disciplinari, validator, schema `.cml`, import/export, CSS, JS funzioni/variabili, layout

## Validatore
7 file, 94 unità, `overallValid: true`, 0 errori ✅
