# CML-315 — PM-04 Timed Comprehension Smoke

## Branch

main

## Baseline iniziale

- commit iniziale: 5db32d5
- stato branch: main...origin/main [ahead 5]
- working tree: pulita
- push: non eseguito
- deploy: non eseguito

## Runtime pair

- index.html
- _published_snapshot/netlify-current/index.html

## Tipologia smoke

PROXY_TIMED_SMOKE_TECNICO
Non test utente umano. Strumenti: analisi statica HTML + dati browser CML-314.
Terminale e Playwright non disponibili durante raccolta evidenze in questa sessione.

## Protocollo proxy

Soglie prudenziali (conteggio interazioni):
- A: 0-1 interazioni (capisce dove si trova)
- B: 1 interazione (accede al Curriculum)
- C: 2 interazioni (seleziona disciplina)
- D: immediato (linguaggio utente)
- E: CONSOLE_STREAM_NOT_RELIABLY_TESTED

## Scenari e esiti

| scenario | esito | livello evidenza |
|---|---|---|
| A — Home comprensione iniziale | PASS | media |
| B — Accesso Curriculum | PASS | forte |
| C — Selezione disciplina | PASS | forte |
| D — Linguaggio utente | PASS | forte |
| E — Console/blocchi | NOT TESTED | debole |

## Etichette utente verificate

- Bozza di lavoro: presente
- Sola consultazione: presente
- Indicazioni Nazionali 2012: presente
- Indicazioni Nazionali 2025: presente (con "proposta da valutare")

## Termini tecnici non visibili come testo utente

- Prototipo: non rilevato
- runtime: solo commento JS interno
- snapshot: non rilevato come testo visibile
- readonly: solo CSS class (badge--readonly)
- mappa dati: solo variabile JS
- normalizzato: solo variabile JS
- pacchetto curricolare: non rilevato
- badge: solo CSS class

## Limite dichiarato

PROXY_TIMED_SMOKE_TECNICO — non test utente umano osservato.
Criterio DoD temporale approssimato con conteggio interazioni.
Per closure formale PM-04: necessario test con docente reale.

## Stato PM-04

- prima CML-315: 55%, non chiusa
- dopo CML-315: 55%, non chiusa
- classificazione avanzata: pronta per futura closure formale previo test utente reale
- incremento percentuale: NO

## Residui aperti

1. Test utente reale per confermare criterio DoD temporale.
2. Console stream non verificato: richiedere sessione con terminale disponibile.

## File modificati

- docs/02_system/PROJECT-STATE.md
- docs/02_system/PRODUCT-MATURITY-PROGRESS.md
- docs/03_execution/CML-315.md
- report/CML-315_pm04_timed_comprehension_smoke.md
- docs/REPO-MOVELOG.md

## Push/Deploy

- push: non eseguito
- deploy: non eseguito

## Verdict

CML_315_PM04_TIMED_COMPREHENSION_SMOKE_READY_LOCAL_NOT_PUSHED
