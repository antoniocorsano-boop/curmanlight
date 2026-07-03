# CML-319 — PM-04 Curriculum UX Runtime Remediation

## Branch

main

## Baseline iniziale

- commit iniziale: 026d933
- stato branch iniziale: main...origin/main [ahead 9]
- working tree iniziale: pulita
- push: non eseguito
- deploy: non eseguito

## Runtime pair

- index.html
- _published_snapshot/netlify-current/index.html

## Interventi P0 eseguiti

1. Menu azioni:
- etichetta esplicita "File e salvataggio"
- sostituzione icone corrotte in voci critiche con SVG coerenti

2. Motto e metodo:
- riallineamento URL in header/menu/footer a destinazione valida

3. Guida:
- accessi rapidi allineati su tab guida (no promessa di modale operativo)
- heading guida aggiornato a "Guida operativa"

4. Scroll disciplina:
- selezione disciplina con scroll su header disciplina (offset stabile)

## Interventi P1 eseguiti

1. Home:
- copy introduttiva orientata a bisogni reali (consultare, seguire revisione, progettare, esportare)
- eliminata formulazione centrata su "compito di oggi"

2. Nome visibile prodotto:
- Home: "Ambiente curricolare d'Istituto"

3. Prossima azione:
- "consulta il curricolo per disciplina"

4. Menu azioni:
- semantica centrata su file/salvataggio

5. Etichette disciplinari:
- da "+N aggiornamenti" a "N proposte IN 2025"
- fallback esplicito su "curricolo vigente IN 2012"

6. Linguistica mirata:
- correzione "cosa è valido"

## P2 rimandati

- logo definitivo
- identita visuale completa
- redesign completo pagina Curriculum
- nuova guida avanzata passo-passo
- revisione linguistica massiva globale

Rimando: CML-320+

## Controlli tecnici

- `git diff --check`: PASS
- check sintassi JS (`node --check` su script runtime estratto): PASS
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS (warning noti retrocompatibili)

## Smoke browser locale

- Home: PASS
- Curriculum: PASS
- disciplina Italiano: PASS
- disciplina Matematica: PASS
- scroll disciplina (titolo visibile): PASS
- menu file/salvataggio leggibile: PASS
- link motto: PASS
- guida rapida fuorviante: mitigata su accessi rapidi
- console: `CONSOLE_STREAM_NOT_RELIABLY_TESTED`

## Stato PM-04

- prima CML-319: 55%, non chiusa
- dopo CML-319: 55%, non chiusa
- incremento percentuale: NO
- classificazione: migliorata ma da ritestare con utente reale

## File modificati (perimetro autorizzato)

- index.html
- _published_snapshot/netlify-current/index.html
- docs/03_execution/CML-319.md
- report/CML-319_pm04_curriculum_ux_runtime_remediation.md
- docs/REPO-MOVELOG.md
- docs/02_system/PROJECT-STATE.md
- docs/02_system/PRODUCT-MATURITY-PROGRESS.md

## Push/Deploy

- push: non eseguito
- deploy: non eseguito

## Verdict

CML_319_PM04_CURRICULUM_UX_RUNTIME_REMEDIATION_READY_LOCAL_NOT_PUSHED
