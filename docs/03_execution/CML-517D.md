# CML-517D — Human/Synthetic Comparison Protocol

## Stato

READY FOR REVIEW.

## Obiettivo

Definire il protocollo con cui confrontare il pilot sintetico CML-517C con un pilot reale di docenti, misurando concordanze, falsi positivi, falsi negativi e necessità di calibrazione dello swarm.

## Output

- `docs/02_system/HUMAN-SYNTHETIC-COMPARISON-PROTOCOL.md`;
- campione umano minimo e raccomandato;
- unità di confronto condivisa;
- metriche di precisione, copertura e completamento;
- soglie decisionali iniziali;
- procedura di calibrazione delle personas e degli scenari;
- formato del rapporto consolidato;
- gate per l'uso dello swarm come regressione.

## Decisioni

- lo swarm resta pre-validazione;
- un finding sintetico non genera automaticamente una modifica;
- i blocchi umani critici hanno priorità anche se non previsti;
- evidenze sintetiche e umane restano separate fino al confronto;
- la validazione finale resta umana.

## Confini

- docs-only;
- nessuna modifica al runtime storico;
- nessuna modifica al comportamento React;
- nessuna modifica ai dati curricolari canonici;
- nessuna telemetria;
- nessun dato personale.

## Prossimo passo

Condurre il pilot umano controllato sugli stessi cinque scenari e compilare il primo rapporto comparativo.

## Verdetto

`CML_517D_HUMAN_SYNTHETIC_COMPARISON_PROTOCOL_READY_NO_RUNTIME_OR_CANONICAL_CHANGE`
