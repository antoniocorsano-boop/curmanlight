# CML-469 — Gap Layer Data Foundation Report

## Baseline

`main` @ `b7eef422fdf60240aa77783b53623dbd98d1b075`

## Modifiche

1. Schema `gap-v1` con metadati di fonte obbligatori.
2. Directory canonica `content/gap/` separata dagli artefatti React generati.
3. Validatore senza dipendenze esterne con controllo:
   - struttura minima;
   - stato azionabile;
   - ID disciplina/unità;
   - duplicati;
   - motivazione;
   - riferimenti di fonte;
   - validazione umana.
4. Sincronizzazione deterministica verso `curman-react/src/data/gap/`.
5. Pulizia preventiva dei vecchi artefatti generati.
6. Collegamento a `predev` e `prebuild`.

## Stato dati

Pacchetti canonici disponibili: **0**.

Questo è intenzionale: non sono stati trovati nel repository dati propositivi sufficientemente tracciabili da promuovere a gap layer reale.

## Impatto

- nessuna modifica ai curricoli normalizzati;
- nessuna proposta inventata;
- nessun backend;
- nessun dato inviato all’esterno;
- CML-468 resta bloccata finché non viene fornito almeno un pacchetto disciplinare verificato.
