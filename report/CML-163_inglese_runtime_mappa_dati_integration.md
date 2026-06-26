# CML-163 — Inglese runtime mappa dati integration

Data: 2026-06-26

## Sintesi

CML-163 integra la mappa disciplinare di Inglese nel runtime pubblicato locale, seguendo il modello già attivo per Tecnologia, Matematica, Italiano, Scienze, Storia e Geografia.

La slice non modifica generator, adapter, transformer, validator, schema `.cml`, JSON normalizzati, service worker, workflow, dipendenze, root `index.html` o landing UI/UX.

## Stato iniziale

- Branch: `main`
- Commit iniziale: `0dd411d`
- `origin/main`: `0dd411d`
- Working tree iniziale: pulito (sync)
- Push: non eseguito
- Deploy: non eseguito

## File modificati

- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-163.md`
- `report/CML-163_inglese_runtime_mappa_dati_integration.md`
- `docs/REPO-MOVELOG.md`

## Integrazione runtime

In `_published_snapshot/netlify-current/index.html` sono stati aggiunti:

- pulsante `Inglese` nel selettore della mappa disciplinare (dopo Geografia);
- variabile `INGLESE_MAPPA_DATI`;
- ramo `inglese` in `setMappaDisciplina()`.

La mappa Inglese segue la forma già validata dal runtime:

- `disciplina`
- `struttureSostanziali`
- `nodiDisciplinari`
- `progressioneVerticale`
- `decisioniCurricolari`

## Conteggi Inglese

| Area | Esito |
| --- | --- |
| Disciplina | Inglese |
| Strutture sostanziali | 12 |
| Nodi disciplinari | 11 |
| Progressione verticale | 9 passaggi |
| Decisioni curricolari | 0 |
| Stato decisioni | N/A (nessun audit Inglese eseguito) |
| Ordini coperti | Infanzia, Primaria, Secondaria |
| Fonte base | Curriculum normalizzato Inglese |
| Audit preparatorio | Nessuno (D=0 deliberato) |

## Strutture sostanziali

1. Comprensione orale e scritta: testi su argomenti familiari (livello A1/A2)
2. Consolidamento A2 e preparazione al B1: produzione complessa e autonomia comunicativa
3. Cultura anglofona, letteratura giovanile e autovalutazione linguistica
4. Descrivere, raccontare e interagire in contesti quotidiani
5. Dialoghi e conversazioni su argomenti familiari
6. Interazione su temi di cittadinanza globale e culture anglofone
7. L'inglese come strumento per collaborare, argomentare e progettare
8. Parole e frasi per comunicare in classe
9. Prime parole scritte, lettura di immagini e brevi testi
10. Primo approccio alla lingua inglese attraverso suoni, ritmi e giochi
11. Testi descrittivi e narrazioni semplici
12. Testi narrativi, istruzioni e comunicazione su temi quotidiani (livello A2)

## Nodi disciplinari

- Ascolto e lettura
- Ascolto e prime parole
- Ascolto e produzione orale
- Ascolto, lettura e produzione
- Interazione e cittadinanza globale
- Interazione e cultura
- Interazione e produzione orale
- Lettura e scrittura
- Lettura e scrittura iniziale
- Produzione e autonomia linguistica
- Produzione orale e scritta

## Progressione verticale

- Infanzia, 5 anni: primo approccio alla lingua inglese attraverso suoni, ritmi e giochi
- Primaria 1: parole e frasi per comunicare in classe
- Primaria 2: prime parole scritte, lettura di immagini e brevi testi
- Primaria 3: dialoghi e conversazioni su argomenti familiari
- Primaria 4: testi descrittivi e narrazioni semplici
- Primaria 5: interazione su temi di cittadinanza globale e culture anglofone
- Secondaria 1: comprensione A1/A2, descrivere e interagire in contesti quotidiani
- Secondaria 2: testi narrativi A2, inglese come strumento collaborativo
- Secondaria 3: consolidamento A2→B1, cultura anglofona e autovalutazione

## Verifica codifica

- Blocco `INGLESE_MAPPA_DATI` presente: SI
- JSON parseable: SI
- `\uFFFD`: assente
- `???`: assente
- `??`: assente
- Accenti italiani: conservati (verifica campo per campo)

## Validatore curriculum

`node tools/validate-cml-normalized-curriculum.mjs`: PASS
- 7 file / 94 unità / `overallValid: true` / 0 errori
- Inglese: 12 unità, ordini Infanzia/Primaria/Secondaria coperti

## Shape runtime

`node tools/test-runtime-mappa-dati-shape.mjs`: PASS
- 7 discipline / 0 failed
- Inglese: S=12 N=11 P=9 D=0

## Discipline invarianti

- Tecnologia: invariata (S=6 N=6 P=10 D=2)
- Matematica: invariata (S=12 N=5 P=6 D=4)
- Italiano: invariato (S=12 N=6 P=10 D=4)
- Scienze: invariato (S=15 N=5 P=9 D=0)
- Storia: invariata (S=15 N=5 P=9 D=0)
- Geografia: invariata (S=12 N=3 P=9 D=0)

## Funzioni evidenze/UDA invariate

Nessuna modifica alle funzioni `assegnaEvidenze`, `renderUDA`, o ai blocchi evidenze/UDA.

## Schema .cml / export / import invariati

Nessuna modifica a schema `.cml`, export, import, service worker, landing UI/UX o dipendenze.

## Rischi residui

- Inglese non ha audit preparatorio: D=0 deliberato, da validare in futuro
- Dati basati sul solo JSON normalizzato, senza passaggio da audit umano

## Prossima azione

Commit locale.
