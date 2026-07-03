# CML-317 — PM-04 Real User Test Session

## Branch

main

## Baseline iniziale

- commit iniziale: d5a49b6
- stato branch: main...origin/main [ahead 7]
- working tree: pulita
- push: non eseguito
- deploy: non eseguito

## Runtime pair

- index.html
- _published_snapshot/netlify-current/index.html

## Dati test

- Tester reale disponibile: SI
- Profilo tester: docente / utente scolastico interno
- Tipo test: osservazione informale reale
- Dati personali raccolti: nessuno
- Data sessione: 2026-07-03

## Esito generale

Il test reale non supporta la chiusura di PM-04. L'interfaccia risulta comprensibile in alcune funzioni di base, ma presenta criticita significative su identita, linguaggio, orientamento iniziale, sezione Curriculum, guida, azioni e navigazione disciplinare.

## Matrice scenari

| scenario | esito | livello evidenza |
|---|---|---|
| A — Home comprensione iniziale | PARTIAL / FAIL | reale (tester docente) |
| B — Accesso Curriculum | PASS con riserva | reale (tester docente) |
| C — Selezione disciplina | PARTIAL | reale (tester docente) |
| D — Stato e linguaggio | FAIL / PARTIAL | reale (tester docente) |
| E — Console/blocchi | PARTIAL / NOT TESTED | parziale (osservazione visiva) |

## Rilievi principali (sintesi)

Criticita alte:
- nome "Curriculum Light" non adeguato
- identita visiva assente o debole
- Home non abbastanza guidante
- Curriculum troppo lungo
- azioni non chiare (non chiarisce chi deve agire)
- menu Azioni ambiguo + icone rotte
- guida rapida incoerente (modale vecchio)
- link "Motto e metodo" errato
- scroll disciplina errato
- quadro generale discipline eccessivamente esteso
- verifica dipartimentale non contestualizzata

Criticita linguistiche:
- "e" al posto di "e'" (accento)
- etichette tecniche non user-friendly
- residui linguaggio interno (IN 2012, +6 aggiornamenti 2025, ecc.)

## Stato PM-04

- prima CML-317: 55%, non chiusa
- dopo CML-317: 55%, non chiusa
- classificazione: readiness condizionata ridimensionata; necessaria remediation prima di closure formale
- incremento percentuale: NO

## Prossima sequenza

- CML-318 — PM-04 Curriculum UX Remediation Plan (docs-only)
- CML-319 — PM-04 Curriculum UX Runtime Remediation (runtime)

## Push/Deploy

- push: non eseguito
- deploy: non eseguito

## Verdict

CML_317_PM04_REAL_USER_TEST_SESSION_READY_LOCAL_NOT_PUSHED
