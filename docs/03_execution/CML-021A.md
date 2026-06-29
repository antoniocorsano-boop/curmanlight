# CML-021A — Department Proposal Import Smoke Audit

## Preflight

- Branch: cml-008r-fix-markdown-decision-summary
- Commit iniziale: c241213268af0ba671fa443e6142680ed03e032e
- Working tree iniziale: pulita
- Collegamento: smoke audit docs-only della funzione introdotta in CML-021

## Obiettivo e confini

Verificare stabilità, sicurezza, leggibilità e regressioni dell'import dipartimentale prima di CML-022. Nessuna modifica runtime, schema, contenuto, asset o deploy.

## Verifiche eseguite

- App, tab Revisione e pannello Validazione dipartimentale caricati correttamente.
- Import multiplo: 7 file, 3 validi, 4 esclusi, 5 proposte, 2 discipline, 3 proposte da controllare.
- JSON invalido, fileType errato, schema parziale e non-.cml segnalati senza blocco.
- Duplicato probabile e discipline miste segnalati.
- Payload HTML/XSS mostrato come testo e non eseguito.
- Nessuna richiesta di rete durante import; chiavi localStorage invariate.
- Download docente .cml operativo; fallback Drive senza endpoint invariato.
- Cleanup marker e indicatore personalizzazione CML-016B presenti.
- Responsive PASS a 390, 768 e 1280 px; nessun overflow.
- Console senza errori.
- PDF, sw.js, _headers e asset invariati.

## Criticità

Nessun blocker. Resta fisiologica la necessità di validazione umana: lo schema non certifica l'identità del docente e carichi molto superiori a quelli smoke non sono stati stress-testati.

## Decisione finale

La funzione è sufficientemente stabile per procedere alla progettazione di CML-022.

## Verdetto

CML_021A_DEPARTMENT_PROPOSAL_IMPORT_SMOKE_READY

## Prossimo step

CML-022 — esportazione controllata dell'esito dipartimentale .cml.
