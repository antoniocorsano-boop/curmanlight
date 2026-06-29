# Report CML-002E — PDF cache hard reset

## Motivo dell'intervento

Alcuni browser e visualizzatori PDF continuano a mostrare la vecchia versione cacheata di `Corso_CurricoloDonMilani_IN2025.pdf`. Per forzare il refresh si crea una nuova URL fisica.

## File nuovo creato

`Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf`

## File originali mantenuti

`Corso_CurricoloDonMilani_IN2025.pdf` (canonico, non più linkato da HTML)

## Link aggiornati

Sostituiti 4 riferimenti in 2 file HTML:

| File                              | Linea | Vecchio link                                    | Nuovo link                                              |
| --------------------------------- | ----- | ----------------------------------------------- | ------------------------------------------------------- |
| `index.html`                      | 443   | `Corso_CurricoloDonMilani_IN2025.pdf?v=452b421` | `Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf` |
| `index.html`                      | 474   | `Corso_CurricoloDonMilani_IN2025.pdf?v=452b421` | `Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf` |
| `index.html`                      | 1945  | `Corso_CurricoloDonMilani_IN2025.pdf?v=452b421` | `Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf` |
| `motto-non-multa-sed-multum.html` | 37    | `Corso_CurricoloDonMilani_IN2025.pdf?v=452b421` | `Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf` |

## Verifica PDF vecchio e nuovo

- SHA256 identico: `DD9E19617397C21B6926D73280A7EA8DC8513EFA010BFAE33C45CA22A1D0564A`
- ariana: 0 (verifica produzione, PDF binario compresso)
- arianese: 6 (verifica produzione, PDF binario compresso)

## Verifica _headers

Creato `_published_snapshot/netlify-current/_headers` con:

- `/Corso_CurricoloDonMilani_IN2025.pdf` → `Cache-Control: no-store, no-cache, must-revalidate, max-age=0`
- `/Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf` → `Cache-Control: no-store, no-cache, must-revalidate, max-age=0`
- `/sw.js` → `Cache-Control: no-store, no-cache, must-revalidate, max-age=0`
- `/*` → `Cache-Control: no-cache, max-age=0, must-revalidate`

## Verifica sw.js

- PDF vecchio NON in precache ✅
- PDF nuovo NON in precache ✅
- Cache name: `curmanlight-cache-v452b421`
- `self.skipWaiting()` già presente ✅
- `self.clients.claim()` già presente ✅
- sw.js non modificato

## Nessun deploy

Confermato: nessun deploy eseguito.

## Rischi residui

Una scheda PDF già aperta può continuare a mostrare il vecchio contenuto finché l'utente non la chiude o ricarica.

## Istruzione per utenti

Aprire il nuovo link o chiudere la scheda PDF e ricaricare.

## Verdetto

`CML_002E_PDF_CACHE_HARD_RESET_READY`
