# CML-009A — User View Lightening Design Audit

## Stato

Audit progettuale completato senza modifiche al codice.

## Problemi individuati

La vista pubblicata (`tab-lavoro`) espone ~1300 parole di spiegazioni, barre, note e pulsanti prima del primo contenuto disciplinare. Non c'è gerarchia informativa: spiegazioni metodologiche, azioni operative, esportazione e salvataggio sono tutti allo stesso livello.

## Architettura proposta

### Livello 1 — Cruscotto minimo

Stato + prossima azione + 3 pulsanti principali.

### Livello 2 — Sezioni compatte a schede

Documento attuale, Voci da validare, Fonti, Esportazione (sintesi, non dettaglio).

### Livello 3 — Dettaglio espandibile

Su richiesta: mostra dettaglio, apri confronto, vedi fonte, mostra nota, visualizza mantenimenti.

## Blocchi da compattare (per CML-009B)

| Blocco           | Azione                               |
| ---------------- | ------------------------------------ |
| orientation-card | → Cruscotto minimo 3 pulsanti        |
| usage-notice     | → Espandibile                        |
| local-save-bar   | → Icona + dropdown                   |
| install-hint     | → Nascondere dopo prima visita       |
| toolbar export   | → Spostare sotto scheda Esportazione |
| toolbar filtri   | → Ridurre a Tutti/Da decidere        |
| progress-bar     | → In piccolo nell'header             |

## Cosa non toccare

Logica applicativa, dati discipline, workflow approve/reject/edit, PDF, sw.js, _headers, assets, Markdown generation, Tecnologia export panel.

## Prossimo passo

CML-009B — Primo alleggerimento della home pubblicata (solo parte alta, pre-cards).
