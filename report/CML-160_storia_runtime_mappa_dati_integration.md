# CML-160 — Storia runtime mappa dati integration

Data: 2026-06-26

## Sintesi

CML-160 integra la mappa disciplinare di Storia nel runtime pubblicato locale, seguendo il modello già attivo per Tecnologia, Matematica, Italiano e Scienze.

La slice non modifica generator, adapter, transformer, validator, schema `.cml`, JSON normalizzati, service worker, workflow, dipendenze, root `index.html` o landing UI/UX.

## Stato iniziale

- Branch: `main`
- Commit iniziale: `90163cf`
- `origin/main`: `90163cf`
- Working tree iniziale: pulito dopo cleanup del residuo parziale Storia
- Push: non eseguito
- Deploy: non eseguito

## File modificati

- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-160.md`
- `report/CML-160_storia_runtime_mappa_dati_integration.md`
- `docs/REPO-MOVELOG.md`

## Integrazione runtime

In `_published_snapshot/netlify-current/index.html` sono stati aggiunti:

- pulsante `Storia` nel selettore della mappa disciplinare;
- variabile `STORIA_MAPPA_DATI`;
- ramo `storia` in `renderMappaDisciplinare()`.

La mappa Storia segue la forma già validata dal runtime:

- `disciplina`
- `struttureSostanziali`
- `nodiDisciplinari`
- `progressioneVerticale`
- `decisioniCurricolari`

## Matrice Storia

| Area                   | Esito                          |
| ---------------------- | ------------------------------ |
| Disciplina             | Storia                         |
| Strutture sostanziali  | 5                              |
| Nodi disciplinari      | 5                              |
| Progressione verticale | 9 passaggi                     |
| Decisioni curricolari  | 5                              |
| Stato decisioni        | `da_validare`                  |
| Ordini coperti         | Infanzia, Primaria, Secondaria |
| Fonte base             | Curriculum normalizzato Storia |
| Audit preparatorio     | CML-157C                       |

## Strutture sostanziali

- Tempo, successione e periodizzazione
- Fonti, documenti e metodo storico
- Quadri di civiltà e organizzazione delle informazioni
- Produzione storica orale e scritta
- Memoria, storia locale e cittadinanza

## Nodi disciplinari

- Strumenti concettuali e periodizzazione
- Uso delle fonti
- Organizzazione delle informazioni
- Produzione scritta e orale
- Uso delle fonti e produzione

## Progressione verticale

- Infanzia, 5 anni: tempo quotidiano, routine, memoria personale, prima/dopo, ieri/oggi/domani.
- Primaria 1: successione, durata, contemporaneità, prime linee del tempo e tracce del passato recente.
- Primaria 2: fonti orali, materiali, scritte e visive per passato personale, familiare e locale.
- Primaria 3: quadri di civiltà, preistoria e prime civiltà.
- Primaria 4: civiltà classiche, Greci e Romani, confronti e permanenze.
- Primaria 5: raccordo tardo antico/alto medioevo, con estensione fino al VII secolo d.C. da validare.
- Secondaria 1: metodo storico, medioevo e prima età moderna, con periodizzazione da validare.
- Secondaria 2: età moderna e contemporanea, rivoluzioni, Ottocento, unificazioni, seconda rivoluzione industriale.
- Secondaria 3: Novecento, Repubblica, memoria, storia locale e lettura critica delle fonti; limite fino al 1994 da validare.

## Decisioni curricolari

Tutte le decisioni sono state inserite con stato `da_validare`:

- distinguere base D.M. 254/2012 e proposta D.M. 221/2025;
- validare la periodizzazione triennale della Secondaria;
- esplicitare il raccordo Primaria 5 / Secondaria 1;
- rendere verticale il metodo delle fonti;
- integrare memoria, storia locale e cittadinanza senza sostituire la progressione cronologica.

## Rischi

- Periodizzazione: richiede validazione umana, soprattutto per raccordo tra Primaria quinta e Secondaria prima.
- Fonte: la proposta 2025 va mantenuta distinta dalla base 2012.
- UX: la sezione deve mostrare contenuto scolastico leggibile, senza token tecnici o debug.
- Contenuto: storia locale, memoria e cittadinanza devono restare integrate nel percorso storico, non isolate.

## Controlli finali

Esiti registrati:

- `git diff --check`: PASS
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS, 7 file / 94 unità / `overallValid: true` / 0 errori
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS, 7 discipline / 0 failed
- verifica codifica del blocco `STORIA_MAPPA_DATI`: PASS, nessun replacement char, nessun `???`, nessun `??`, accenti attesi presenti
- verifica assenza `.planning/codebase/`
- verifica assenza `jcode/`
- verifica assenza `57df9d8`

## Raccomandazione

La slice è candidata al commit locale: i validatori passano e la verifica di codifica conferma che il blocco `STORIA_MAPPA_DATI` è parseable e non contiene caratteri corrotti.

Prossimo slice consigliato dopo CML-160: smoke locale/live dedicato a Storia, solo dopo eventuale push/deploy autorizzato.

Verdetto atteso:

`CML_160_STORIA_CONTROLLED_RUNTIME_MAPPA_DATI_READY`
