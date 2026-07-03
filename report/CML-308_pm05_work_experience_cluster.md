# CML-308 - PM-05 Work Experience Cluster

## Branch

main

## Baseline iniziale

- Commit baseline: 8e00f3d
- Stato branch baseline: main allineato a origin/main

## UX trattate

- UX-016 - azioni non abbastanza guidate
- UX-017 - area Compila poco evidente
- UX-018 - esportazioni non guidate a step

## Interventi runtime (max 3)

1. Home:
   - aggiunto microtesto percorso operativo;
   - etichetta azione aggiornata in "Compila evidenze e progettazione".
2. Compila/Didattica:
   - percorso consigliato a step inserito nella sezione;
   - link diretto verso Esportazioni.
3. Esportazioni:
   - introduzione con percorso in 3 passi;
   - guida esportazioni riorganizzata in ordine operativo consigliato.

## File modificati

- index.html
- _published_snapshot/netlify-current/index.html
- docs/02_system/PRODUCT-USABILITY-BACKLOG.md
- docs/02_system/PRODUCT-MATURITY-PROGRESS.md
- docs/02_system/PROJECT-STATE.md
- docs/03_execution/CML-308.md
- report/CML-308_pm05_work_experience_cluster.md
- docs/REPO-MOVELOG.md

## Stato UX finale

- UX-016: PARZIALMENTE RISOLTO (CML-308)
- UX-017: PARZIALMENTE RISOLTO (CML-308)
- UX-018: PARZIALMENTE RISOLTO (CML-308)

## PM stato aggiornato

- PM-03: 30% (invariato)
- PM-04: 70% (invariato)
- PM-05: 30% (avviato)
- PM-07: 20% (invariato)

## Controlli eseguiti

- git status --short --branch
- git diff --check
- verifica parita runtime pair index.html <-> _published_snapshot/netlify-current/index.html
- validatore curriculum (14/14 PASS atteso)
- shape/runtime test (14/14 PASS atteso)
- controllo statico su testi/collegamenti modificati
- verifica non regressione su CML-304, CML-305, CML-306, CML-307 e UX chiuse
- smoke Home
- smoke Curriculum
- smoke Compila/Didattica
- smoke Esportazioni
- smoke ritorno al punto di lavoro
- smoke mobile (nessuna modifica nav mobile)
- assenza errori console bloccanti

## Esito controlli

PASS

## Push

non eseguito

## Verdict

CML_308_PM05_WORK_EXPERIENCE_CLUSTER_READY_LOCAL_NOT_PUSHED
