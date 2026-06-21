# CML-018 — Simple Drive Handoff Workflow Contract

## Stato git iniziale

| Campo | Valore |
|---|---|
| Branch | cml-008r-fix-markdown-decision-summary |
| HEAD | 537f70cfb1c9911ad7e428d458ddb8f6dfc086d6 |
| Working tree | Pulita |

## Confirma docs-only

- Solo creazione file documentazione.
- Nessuna modifica a codice runtime, logiche o asset.

## Confirma nessuna modifica runtime

- `index.html` invariato.
- `_published_snapshot` invariato.
- Logica applicativa invariata.

## Confirma nessun deploy

- Nessun comando deploy eseguito.
- Deploy non previsto in questa slice.

## Confirma nessuna modifica a PDF, sw.js, _headers, asset

- `sw.js` invariato.
- `_headers` invariato.
- PDF invariati.
- Asset invariati.

## Sintesi decisioni progettuali

| # | Decisione | Rationale |
|---|-----------|-----------|
| 1 | Cartella Drive singola | Evita complessità organizzativa |
| 2 | File `.cml` unico | Formato di scambio semplice e riconoscibile |
| 3 | Tre ruoli distinti | Docente, Dipartimento, Referente curricolo |
| 4 | Automazione solo docente | Prima implementazione mirata |
| 5 | Import manuale Dipartimento/Referente | Evita integrazione Drive bidirezionale |
| 6 | Fallback manuale | Affidabilità operativa garantita |
| 7 | Validazione umana esplicita | Controllo qualità necessario |
| 8 | Nessuna dashboard cloud | Mantiene focus su semplicità |

## Tabella rischi/mitigazioni

| Rischio | Mitigazione |
|---|---|
| Drive non configurato | Fallback manuale "Scarica proposta" sempre disponibile |
| Caricamento automatico non disponibile | Pulsante separato con messaggio errore comprensibile |
| File errato caricato | Controlli minimi di riconoscimento e separazione file |
| Import dipartimento incompleto | Segnalazione file non riconoscibili e duplicati |
| Referente con esiti mancanti | Controlli completezza dipartimenti ricevuti/mancanti |
| Procedura troppo complessa | Flusso minimo in 3 passi per ruolo, linguaggio chiaro |

## Verdetto finale

CML_018_SIMPLE_DRIVE_HANDOFF_WORKFLOW_CONTRACT_READY