# CML-135 — Normalizzato → Strutturato Clarity Audit

## Contesto

Residuo P2 da CML-130: il termine "normalizzato" in 6 occorrenze del runtime è gergo tecnico non chiaro per l'utente finale. Sostituzione con "strutturato", termine più descrittivo del processo di organizzazione curricolare.

## Classificazione

| #   | Linea | Contesto                                                | Tipo               |
| --- | ----- | ------------------------------------------------------- | ------------------ |
| 1   | 1328  | `Il curricolo normalizzato richiede validazione umana.` | User-facing        |
| 2   | 1343  | `dal pacchetto Tecnologia normalizzato`                 | User-facing        |
| 3   | 1351  | `collegati al pacchetto Tecnologia normalizzato`        | User-facing        |
| 4   | 1373  | `dal pacchetto Tecnologia normalizzato`                 | User-facing        |
| 5   | 4848  | `// commento JS — pacchetto normalizzato CML-062`       | Tecnico (commento) |
| 6   | 4919  | `pacchetto curricolare normalizzato`                    | User-facing        |

**5 user-facing → sostituire**
**1 tecnico (commento JS linea 4848) → mantenere**

## Sostituzioni pianificate per CML-135A

| #   | Testo attuale                        | Testo nuovo                         |
| --- | ------------------------------------ | ----------------------------------- |
| 1   | `curricolo normalizzato`             | `curricolo strutturato`             |
| 2-4 | `Tecnologia normalizzato`            | `Tecnologia strutturato` (×3)       |
| 5   | `pacchetto curricolare normalizzato` | `pacchetto curricolare strutturato` |

## Perimetro non toccato

- JSON disciplinari, validator, schema `.cml`, import/export, CSS, JS funzioni/variabili, layout
- `.agents`, `skills-lock.json`, `Consultazione`

## Verdetto

`CML_135_NORMALIZZATO_TO_STRUTTURATO_AUDIT_READY`
