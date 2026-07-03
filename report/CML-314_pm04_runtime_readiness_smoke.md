# CML-314 — PM-04 Runtime Readiness Smoke

## Branch

main

## Baseline iniziale

- commit iniziale: 0ef3655
- stato branch: main...origin/main [ahead 4]
- push iniziale: non eseguito
- deploy iniziale: non eseguito

## Tipo slice

- runtime smoke in sola lettura + documentazione

## Runtime pair vincolata

- index.html
- _published_snapshot/netlify-current/index.html

## Verifiche smoke eseguite

### Integrita runtime

- READABLE_OK index.html
- READABLE_OK _published_snapshot/netlify-current/index.html
- RUNTIME_CLEAN_WORKTREE

### Verifiche statiche esistenti

- SHAPE_TEST_PASS
- CURRICULUM_VALIDATE_PASS

### Lessico PM-04 (classificazione)

- visibile all'utente nello smoke:
  - IN 2025 (accettabile nel contesto 2012/2025)
  - Sola consultazione
- tecnico interno/non esposto in modo rilevante nello smoke:
  - readonly
  - badge
  - normalizzato
  - Runtime (occorrenze tecniche nel sorgente)
- non rilevato come visibile nello smoke:
  - Prototipo
  - snapshot
  - pacchetto curricolare
  - mappa dati

### Etichette utente consolidate

- Bozza di lavoro: presente
- Sola consultazione: presente
- Indicazioni Nazionali 2012: presente
- Indicazioni Nazionali 2025: presente

### Navigazione essenziale

- Home: raggiungibile
- Curriculum: raggiungibile
- Discipline: accessibili
- errori bloccanti di navigazione: non osservati
- console error stream completo: non testato in modo strumentale affidabile

## Matrice evidenze runtime PM-04

| criterio PM-04 | controllo eseguito | evidenza rilevata | esito | livello evidenza | impatto su PM-04 | decisione consigliata |
|---|---|---|---|---|---|---|
| Logica d'uso percepibile | Smoke browser percorso essenziale | percorso stabile, stato disciplina coerente | PASS | media | positivo | mantenere aperto |
| Indicatori comprensibili | Lettura UI in navigazione e sezione disciplina | comprensibilita plausibile, senza misura temporale | PARTIAL | media | parziale | nuova verifica dedicata |
| Terminologia glossario-compliant | Scan lessicale + etichette consolidate | nessun termine tecnico critico emerso come visibile | PASS | forte | positivo | confermare consolidamento UX-022 |
| Distinzione vigente/proposta | Verifica etichette 2012/2025 | distinzione presente | PASS | media | positivo | non sufficiente per closure |
| Comprensione entro pochi secondi | confronto con DoD PM-04 | metrica non raccolta in questa slice | NOT TESTED | debole | blocco closure | pianificare smoke temporizzato |
| Stabilita tecnica base runtime | integrita + test repository | coppia runtime integra, test passati | PASS | forte | base affidabile | pronta per prossima verifica |

## Stato PM-04

- prima CML-314: 55%, non chiusa
- dopo CML-314: 55%, non chiusa
- incremento percentuale: NO

## Residui PM-04 aperti

1. Evidenza misurabile sul criterio DoD "capisce cosa fare entro pochi secondi" non ancora prodotta.
2. Necessaria una slice successiva di smoke/readiness temporizzato con protocollo osservabile.

## File modificati

- docs/02_system/PROJECT-STATE.md
- docs/02_system/PRODUCT-MATURITY-PROGRESS.md
- docs/03_execution/CML-314.md
- report/CML-314_pm04_runtime_readiness_smoke.md
- docs/REPO-MOVELOG.md

## Push/Deploy

- push: non eseguito
- deploy: non eseguito

## Verdict

CML_314_PM04_RUNTIME_READINESS_SMOKE_READY_LOCAL_NOT_PUSHED
