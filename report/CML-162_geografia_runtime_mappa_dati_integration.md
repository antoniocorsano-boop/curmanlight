# CML-162 — Geografia runtime mappa dati integration

Data: 2026-06-26

## Sintesi

CML-162 integra la mappa disciplinare di Geografia nel runtime pubblicato locale, seguendo il modello già attivo per Tecnologia, Matematica, Italiano, Scienze e Storia.

La slice non modifica generator, adapter, transformer, validator, schema `.cml`, JSON normalizzati, service worker, workflow, dipendenze, root `index.html` o landing UI/UX.

## Preflight

- Branch: `main`
- Commit iniziale: `0bffd68`
- `origin/main`: `0bffd68`
- Working tree iniziale: pulito
- Push: non eseguito
- Deploy: non eseguito

## File modificati

- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-162.md`
- `report/CML-162_geografia_runtime_mappa_dati_integration.md`
- `docs/REPO-MOVELOG.md`

## Integrazione runtime

In `_published_snapshot/netlify-current/index.html` sono stati aggiunti:

- pulsante `Geografia` nel selettore della mappa disciplinare (tra Matematica e Storia);
- variabile `GEOGRAFIA_MAPPA_DATI`;
- ramo `geografia` in `setMappaDisciplina()`.

La mappa Geografia segue la forma già validata dal runtime:

- `disciplina`
- `struttureSostanziali`
- `nodiDisciplinari`
- `progressioneVerticale`
- `decisioniCurricolari`

## Conteggi Geografia

| Area                   | Esito                                 |
| ---------------------- | ------------------------------------- |
| Disciplina             | Geografia                             |
| Strutture sostanziali  | 12                                    |
| Nodi disciplinari      | 3                                     |
| Progressione verticale | 9 passaggi                            |
| Decisioni curricolari  | 0                                     |
| Stato decisioni        | N/A (nessun audit Geografia eseguito) |
| Ordini coperti         | Infanzia, Primaria, Secondaria        |
| Fonte base             | Curriculum normalizzato Geografia     |
| Audit preparatorio     | Nessuno (D=0 deliberato)              |

## Strutture sostanziali

1. Carte geografiche e rappresentazioni: dalla pianta alla carta tematica
2. Geopolitica, globalizzazione e sfide globali: transcalarità e cittadinanza planetaria
3. Il paesaggio: elementi naturali e antropici, prime osservazioni sul territorio
4. Italia in Europa: confronto transcalare tra territorio nazionale e continentale
5. Italia: territorio, regioni climatiche e paesaggi
6. Orientamento spaziale: posizioni, percorsi e prime rappresentazioni
7. Paesaggio: lettura, interpretazione e tutela del territorio (art. 9 Costituzione)
8. Popolazione, mobilità e dinamiche economiche: transcalarità applicata
9. Spazio vissuto: orientamento, punti di riferimento e primi elementi del paesaggio
10. Territorializzazione: comunità umane, ambiente e sviluppo sostenibile
11. Territorio locale: Irpinia e Campania come laboratorio geografico
12. Transcalarità: scale geografiche, fenomeni naturali e umani dal locale al globale

## Nodi disciplinari

- Paesaggio (4 unità, classi 1-2, fascia 5)
- Territorializzazione (3 unità, classi 2-4)
- Transcalarità (5 unità, classi 1-3-5)

## Progressione verticale

- Infanzia, 5 anni: orientamento spaziale, posizioni, percorsi e prime rappresentazioni
- Primaria 1: spazio vissuto, punti di riferimento, primi elementi del paesaggio
- Primaria 2: elementi naturali e antropici, prime osservazioni sul territorio
- Primaria 3: carte geografiche e rappresentazioni tematiche
- Primaria 4: Italia, regioni climatiche e paesaggi
- Primaria 5: Italia in Europa, confronto transcalare
- Secondaria 1: paesaggio e tutela del territorio (art. 9), transcalarità
- Secondaria 2: popolazione, mobilità, economia, territorializzazione e sostenibilità
- Secondaria 3: geopolitica, globalizzazione, territorio locale Irpinia/Campania

## Verifica codifica

- Blocco `GEOGRAFIA_MAPPA_DATI` presente: SI
- JSON parseable: SI
- `\uFFFD`: assente
- `???`: assente
- `??`: assente
- Accenti italiani: conservati (verifica campo per campo)

## Validatore curriculum

`node tools/validate-cml-normalized-curriculum.mjs`: PASS

- 7 file / 94 unità / `overallValid: true` / 0 errori
- Geografia: 12 unità, ordini Infanzia/Primaria/Secondaria coperti

## Shape runtime

`node tools/test-runtime-mappa-dati-shape.mjs`: PASS

- 7 discipline / 0 failed
- Geografia: S=12 N=3 P=9 D=0

## Discipline invarianti

- Tecnologia: invariata (S=6 N=6 P=10 D=2)
- Matematica: invariata (S=12 N=5 P=6 D=4)
- Italiano: invariato (S=12 N=6 P=10 D=4)
- Scienze: invariato (S=15 N=5 P=9 D=0)
- Storia: invariata (S=15 N=5 P=9 D=5)

## Funzioni evidenze/UDA invariate

Nessuna modifica alle funzioni `assegnaEvidenze`, `renderUDA`, o ai blocchi evidenze/UDA.

## Schema .cml / export / import invariati

Nessuna modifica a schema `.cml`, export, import, service worker, landing UI/UX o dipendenze.

## Rischi residui

- Geografia non ha audit preparatorio (CML-157C per Storia): D=0 deliberato, da validare in futuro
- Dati geografia basati sul solo JSON normalizzato, senza passaggio da audit umano
- Verifica encoding affidata a test Node, dipendente dalla corretta lettura UTF-8 del file

## Prossima azione

Sync controllato remoto (push), dopo autorizzazione.
