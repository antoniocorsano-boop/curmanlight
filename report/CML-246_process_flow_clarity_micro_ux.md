# CML-246 PROCESS FLOW CLARITY MICRO-UX — Report

## Sintesi esecutiva

Implementata una micro-UX compatta per chiarire il percorso operativo Docente -> Dipartimento -> Referente -> Documento finale/Esportazione, mantenendo invariata la logica del runtime e senza introdurre nuovi comportamenti distruttivi.

## Problema UX affrontato

Il flusso tra ruoli era presente ma distribuito in piu punti. Serviva una lettura immediata e trasversale, soprattutto in Home e Processo, per ridurre incertezza su "cosa fare ora" e "chi fa cosa".

## Soluzione applicata

- Blocco "Percorso di lavoro" aggiunto in Home con 4 fasi numerate.
- Ogni fase esplicita ruolo, azione principale, esito atteso.
- Microtesto di orientamento "Dove mi trovo?" in chiusura.
- Allineamento del testo intro in Processo alla stessa sequenza a 4 fasi.

La soluzione resta leggera, facilmente rimovibile/modificabile in slice successive e coerente con lo stile visivo gia presente (`home-microguide`, `esport-intro-tip`).

## Dettaglio tecnico delle modifiche

- Runtime aggiornato in `_published_snapshot/netlify-current/index.html`:
  - nuovo blocco HTML in `#tab-home` con classi esistenti (`home-microguide*`)
  - revisione microcopy in `#tab-processo` (`esport-intro-tip`)
- Copia coerente runtime allineata in `index.html`
- Nessuna modifica a JavaScript applicativo o funzioni di navigazione/tab/hash

## Elenco file modificati

- `index.html`
- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-246.md`
- `report/CML-246_process_flow_clarity_micro_ux.md`
- `docs/REPO-MOVELOG.md`

## Controlli eseguiti e relativi esiti

- Preflight Git: PASS (`main` allineato a `origin/main`, tree pulito)
- `git diff --check`: PASS
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS con warning retrocompatibili noti
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS
- Smoke Home/Processo/Esportazioni + tab/hash: PASS
- Secret scan minimale file slice: PASS

## Rischi evitati

- Nessun cambiamento a schema dati o storage
- Nessuna modifica import/export contract
- Nessun nuovo endpoint o dipendenza
- Nessuna alterazione di bottoni/azioni esistenti

## Regressioni verificate

- Navigazione principale e subnav invariata
- Sezioni Processo/Esportazioni funzionanti
- Nessun impatto sulle funzioni disciplinari e sulla mappa dati

## Checklist finale

- [x] repository preflight verified;
- [x] runtime scope limited;
- [x] process flow clarified;
- [x] no schema change;
- [x] no storage change;
- [x] no import/export data contract change;
- [x] no new dependency;
- [x] validators executed or explicitly documented if unavailable;
- [x] smoke test completed;
- [x] secret scan clean;
- [x] no deploy executed;
- [x] no push executed;
- [x] verdict recorded;

## Verdict

`CML_246_PROCESS_FLOW_CLARITY_MICRO_UX_READY_LOCAL_NOT_PUSHED`
