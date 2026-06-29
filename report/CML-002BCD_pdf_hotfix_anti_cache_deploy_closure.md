# Report CML-002BCD — PDF hotfix e anti-cache deploy closure

## Scopo

Chiusura documentale delle slice:

1. `CML-002B — PDF_TERM_HOTFIX_ARIANESE`
2. `CML-002C — Anti-cache PDF Hotfix`
3. `CML-002D — Anti-cache residual motto PDF link`

La verifica finale ha confrontato il runtime locale pubblicabile con il PDF scaricato da produzione, usando una query string anti-cache a timestamp e un percorso temporaneo esplicito fuori dal repository.

## Commit coinvolti

| Slice    | Commit                                     | Esito                                           |
| -------- | ------------------------------------------ | ----------------------------------------------- |
| CML-002B | `452b42184a03b21256ad8f9217885e0648de99b9` | PDF corretto con `ariana: 0`, `arianese: 6`     |
| CML-002C | `cd5996e6ce01cebf7424a4433f6bbc98636aa477` | Link PDF versionati e service worker aggiornato |
| CML-002D | `8fd4b846a3ee5f3e62aec8b46af26f9acb6ca2c8` | Link residuo motto versionato                   |

## Stato Git iniziale

- Branch corrente: `master`
- Commit di partenza: `8fd4b846a3ee5f3e62aec8b46af26f9acb6ca2c8`
- Working tree iniziale: pulita
- Conferma presenza commit in `master`: positiva per `452b421`, `cd5996e`, `8fd4b84`

## URL verificati

- Sito produzione: `https://curmanlight.netlify.app/`
- PDF produzione: `https://curmanlight.netlify.app/Corso_CurricoloDonMilani_IN2025.pdf`
- URL PDF verificato con query anti-cache: `https://curmanlight.netlify.app/Corso_CurricoloDonMilani_IN2025.pdf?v=452b421-final-20260620183558`
- Percorso temporaneo PDF scaricato: `C:\Users\anton\AppData\Local\Temp\curmanlight-prod-final.pdf`

## Esito download produzione

- Metodo: `curl.exe -L`
- Esito: `PASS`
- Codice `curl`: `0`
- Dimensione file scaricato: `875527` byte
- SHA256 PDF scaricato: `DD9E19617397C21B6926D73280A7EA8DC8513EFA010BFAE33C45CA22A1D0564A`
- SHA256 snapshot locale: `DD9E19617397C21B6926D73280A7EA8DC8513EFA010BFAE33C45CA22A1D0564A`

## Conteggio testuale PDF produzione

Metodo: PyMuPDF, parole intere case-insensitive.

| Termine    | Conteggio produzione |
| ---------- | -------------------: |
| `ariana`   |                    0 |
| `arianese` |                    6 |

## Verifica link anti-cache locali

Runtime verificato: `_published_snapshot/netlify-current/`

| Controllo                                   | Esito |
| ------------------------------------------- | ----: |
| File PDF locale esistente                   |  PASS |
| `index.html` esistente                      |  PASS |
| `sw.js` esistente                           |  PASS |
| `motto-non-multa-sed-multum.html` esistente |  PASS |
| Riferimenti HTML al PDF                     |     4 |
| Riferimenti HTML con `?v=452b421`           |     4 |
| Riferimenti HTML non versionati             |     0 |
| PDF locale `ariana`                         |     0 |
| PDF locale `arianese`                       |     6 |

Riferimenti HTML rilevati:

- `_published_snapshot/netlify-current/index.html`
- `_published_snapshot/netlify-current/index.html`
- `_published_snapshot/netlify-current/index.html`
- `_published_snapshot/netlify-current/motto-non-multa-sed-multum.html`

Tutti i riferimenti HTML usano:

`Corso_CurricoloDonMilani_IN2025.pdf?v=452b421`

## Verifica service worker

| Controllo                                     | Esito   |
| --------------------------------------------- | ------- |
| `sw.js` contiene `curmanlight-cache-v452b421` | PASS    |
| `sw.js` contiene riferimenti al PDF           | nessuno |
| PDF rimosso dalla precache                    | PASS    |

## Verifica visiva

- Apertura automatica tentata: `PASS_ATTEMPTED`
- Comando tentato: `Invoke-Item $env:TEMP\curmanlight-prod-final.pdf`
- Pagine da controllare: `4`, `5`, `8`, `12`
- Verifica visiva manuale: `NOT_VERIFIED`

Il mancato completamento di una verifica visiva manuale non blocca la chiusura perché il PDF produzione ha superato la verifica testuale attesa: `ariana: 0`, `arianese: 6`.

## Informazioni deploy

- Deploy Netlify: già eseguito manualmente dall'utente da `_published_snapshot/netlify-current`
- `deployId` produzione: non disponibile nel log locale
- Nuovo deploy eseguito in questa slice: no

## Conferme di invariante

- `index.html` non modificato in questa slice
- `sw.js` non modificato in questa slice
- PDF non modificato in questa slice
- `motto-non-multa-sed-multum.html` non modificato in questa slice
- Nessuna logica applicativa modificata
- Nessun backend introdotto
- Nessuna API introdotta
- Nessuna autenticazione introdotta
- Nessun Netlify Form introdotto
- Nessun file `CML-002R` committato o modificato
- File non tracciati esclusi: nessuno rilevato; working tree iniziale pulita

## Rischi residui

- Alcuni client possono mantenere cache HTTP/browser indipendente dal service worker fino a refresh o riavvio.
- Il `deployId` produzione non è disponibile localmente.
- La verifica visiva delle pagine `4`, `5`, `8`, `12` resta non confermata manualmente.

## Verdetto finale

`CML_002BCD_DEPLOY_CLOSED`
