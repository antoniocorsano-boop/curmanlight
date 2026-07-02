# CML-263 VISIBLE GOVERNANCE REFERENCES CLEANUP — Report

## Sintesi esecutiva

Completata una micro-slice runtime per rimuovere dalla UI pubblica riferimenti interni di governance (codici CML) e sostituirli con formulazioni operative comprensibili ai ruoli scolastici.

## Collegamento a CML-260 e CML-262R

- CML-260: audit backlog linguaggio/UX
- CML-262R: rettifica live smoke che identifica il gap `VISIBLE_GOVERNANCE_REFERENCES_IN_UI`

## Problema

Stringhe di governance interna visibili nella UI pubblica, non operative per l'utente finale.

## Evidenze iniziali

- "contratto dati CML-061"
- "Fonte: CML-061 / CML-062"

## Tabella modifiche

| Testo precedente | Nuovo testo | Area | Motivo | Rischio |
|---|---|---|---|---|
| Anteprima consultiva basata sul contratto dati CML-061. Contenuti da validare in sede dipartimentale. | Anteprima consultiva da verificare in sede di lavoro disciplinare. | Curriculum (card consultiva) | Eliminare codice interno e chiarire azione | Basso |
| Stato: da validare · Fonte: CML-061 / CML-062 | Stato: da validare · Base di lavoro: materiali curricolari già predisposti | Curriculum (meta info) | Rimuovere riferimento governance non operativo | Basso |

## Controlli tecnici

- `git diff --check`: PASS
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS
- Ispezione `diff` e `word-diff`: PASS (solo microcopy)

## Ricerca residui

- Pattern governance (`contratto dati`, `CML-061`, `CML-062`, `Fonte: CML`) nei due runtime: nessuna occorrenza visibile residua del caso target.
- Pattern nuovi testi (`Base di lavoro`, `materiali curricolari`, `verificare in sede`, `lavoro disciplinare`): presenti in entrambe le copie runtime.

## Rischi evitati

- Nessuna modifica a logica, schema, storage o import/export
- Nessuna regressione su navigazione discipline/tab
- Nessuna variazione layout o stati operativi

## Cosa non è stato fatto

- Nessun refactor JavaScript
- Nessuna modifica a classi/ID/hook
- Nessun deploy
- Nessun push

## Raccomandazione prossima slice

Controlled push separato (CML-263P) e successivo smoke live, se richiesto.

## Checklist finale

- [x] repository state verified;
- [x] existing local runtime diff inspected;
- [x] visible governance references identified;
- [x] root runtime updated;
- [x] snapshot runtime updated;
- [x] visible CML governance codes removed from UI;
- [x] validator executed;
- [x] shape test executed;
- [x] root/snapshot consistency checked;
- [x] schema .cml unchanged;
- [x] storage unchanged;
- [x] import/export data logic unchanged;
- [x] no deploy executed;
- [x] no push executed;
- [x] verdict recorded;

## Verdict

`CML_263_VISIBLE_GOVERNANCE_REFERENCES_CLEANUP_READY_LOCAL_NOT_PUSHED`
