# CML-README-ACCESSIBILITY-AND-REPO-OVERVIEW — README Accessibility and Repo Overview

## Obiettivo

Aggiornare README.md per riflettere lo stato consolidato di CurManLight: accessibilità 88/100, scaffold readability, struttura repository.

## Stato Iniziale

- Branch: `main`
- HEAD: `82691b4`
- `origin/main`: `82691b4`
- Working tree: pulito
- README esistente: 47 linee, senza sezione accessibilità né struttura repo

## Perimetro

Docs-only. Solo `README.md` + documentazione slice.

## File Modificati

- `README.md` — aggiornato
- `docs/03_execution/CML-README-ACCESSIBILITY-AND-REPO-OVERVIEW.md` — creato
- `report/CML-README-ACCESSIBILITY-AND-REPO-OVERVIEW.md` — creato
- `docs/REPO-MOVELOG.md` — aggiornato

## Sezioni README Aggiornate

| Sezione | Contenuto |
|---------|-----------|
| Stato Attuale | Baseline, accessibilità 88/100, curriculum, validatori |
| Accessibilità | Score, evidenze, limitazioni |
| Struttura Repository | Mappa percorsi chiave del repo |
| Validazione | Comandi validatore e shape test |
| Contribuzione | Rinvio a CONTRIBUTING.md, AGENTS.md, movelog |
| Licenza | Disclaimer |
| Altre sezioni | Preservate: Principi, Funzionalità, Uso rapido, Limitazioni |

## Riferimenti Verificati

- `AGENTS.md`: esiste ✅
- `CONTRIBUTING.md`: esiste ✅
- `CHANGELOG.md`: esiste ✅
- `examples/`: esiste ✅
- `docs/REPO-MOVELOG.md`: esiste ✅
- `tools/validate-cml-normalized-curriculum.mjs`: esiste ✅
- `tools/test-runtime-mappa-dati-shape.mjs`: esiste ✅

## Claim Evitati

- ❌ Certificazione WCAG formale
- ❌ Conformità legale completa
- ❌ Score 100/100
- ❌ Schemas/ directory inesistente
- ❌ docs/index.md inesistente

## Invarianti Rispettate

- Nessuna modifica runtime ✅
- Solo file docs + README autorizzati ✅

## Controlli Eseguiti

- `git diff --name-only`: solo 4 file autorizzati
- `git diff --check`: clean
- `git status --short`: nessuna modifica fuori perimetro

## Verdict

`CML_README_ACCESSIBILITY_AND_REPO_OVERVIEW_READY`
