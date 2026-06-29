# Report CML-124: Local Non-Core Artifacts Ignore Policy

## Summary

Micro-slice dedicata alla pulizia del working tree tramite policy ignore minima per artefatti locali non core.

## Baseline

- Branch: main
- Commit iniziale: 10e3732aec00b06f376456fc6012bc72afa35ab5
- Stato iniziale: main...origin/main [ahead 3]
- Residui rilevati: .agents/, Consultazione, skills-lock.json

## Verifica pre-policy

Comandi:

- git diff --check
- git check-ignore -v .agents skills-lock.json Consultazione

Esiti:

- git diff --check: nessun output
- git check-ignore -v: nessun output (nessuna regola applicabile preesistente)

## Decisione applicata per residuo

1. .agents/

- Decisione: ignorare via .gitignore
- Motivazione: artefatti locali di agent/tooling non parte del runtime CurManLight

2. skills-lock.json

- Decisione: ignorare via .gitignore
- Motivazione: lock locale tooling non necessario al prodotto pubblicato

3. Consultazione

- Decisione: ignorare via .gitignore
- Motivazione: artefatto locale non core non parte del runtime

## Modifica effettuata

Aggiornato .gitignore con:

# Local agent/tooling artifacts - not part of CurManLight runtime

/.agents/
/skills-lock.json
/Consultazione

## Garanzie di perimetro

Confermato:

- residui non committati
- nessuna cancellazione di file locali
- runtime, JSON, validator, schema, UI, export/import non modificati

## Validazioni finali richieste

- git diff --check
- git check-ignore -v .agents skills-lock.json Consultazione
- git status --short --branch
- git diff --cached --name-only
- git diff --cached --check

## Verdetto

CML_124_LOCAL_NON_CORE_ARTIFACTS_IGNORE_POLICY_READY
