# CML-514C — Crosswalk Curricolo Milani ↔ CurManLight

## Obiettivo

Confrontare il curricolo verticale dell’I.C. Calvario-Covotta "don Lorenzo Milani" con il modello curricolare canonico di CurManLight, senza modificare i dati disciplinari esistenti.

## Fonte analizzata

`CURRICOLO_VERTICALE_COMPLETO_MILANI.md`

## Output

Creato:

- `report/CML-514C_curricolo_milani_curmanlight_crosswalk.md`

Il report include:

- confronto di copertura e struttura;
- matrice disciplina per disciplina;
- classificazione EQ/INT/DEC/GOV/NA/ED;
- mappatura dei campi Milani verso il contratto CurManLight;
- blocchi di governance e applicabilità;
- piano di trasformazione sicuro;
- priorità operative;
- raccomandazione di partire da Tecnologia.

## Decisioni

- nessuna sostituzione dei 142 record canonici;
- nessuna importazione automatica;
- il documento Milani è trattato come fonte istituzionale candidata;
- le integrazioni devono diventare proposte strutturate;
- Seconda lingua comunitaria, Latino/LEL e Religione/Attività alternative richiedono decisioni preliminari di perimetro;
- ogni modifica futura resta soggetta a validazione umana.

## Vincoli rispettati

- docs-only;
- nessuna modifica runtime;
- nessuna modifica ai JSON curricolari;
- nessun backend o servizio remoto;
- nessuna telemetria;
- nessun dato inviato all’esterno.

## Prossimo passo raccomandato

CML-514D — Pilot crosswalk Tecnologia: collegamento puntuale dei contenuti Milani alle unità CurManLight, senza ancora modificare il dataset canonico.

## Verdetto

`CML_514C_MILANI_CURMANLIGHT_CROSSWALK_READY_NO_CANONICAL_DATA_CHANGED`
