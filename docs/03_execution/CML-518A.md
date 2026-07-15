# CML-518A — React Baseline and Capability Perimeter

## Stato

READY FOR REVIEW.

## Obiettivo

Formalizzare `curman-react/` come baseline evolutiva principale e definire le capacità complete, parziali e mancanti prima del pilot umano.

## Baseline

- `main`: `80f3633cb44d0a6e92d82f9d5d6cb7cc3483be36`;
- ultimo milestone: CML-517E;
- runtime storico invariato;
- dati curricolari canonici invariati;
- validazione umana obbligatoria.

## Output

- nuovo perimetro delle capacità React;
- `PROJECT-STATE.md` riallineato;
- matrice Docente, Dipartimento e Referente;
- gate per pilot umano e passaggio definitivo;
- sequenza CML-518B → CML-524.

## Decisioni

1. React è la baseline evolutiva principale.
2. Il runtime storico resta fallback e riferimento.
3. Implementazione tecnica e validazione di usabilità restano distinte.
4. Lo swarm sintetico non sostituisce il pilot umano.
5. Nessun ruolo modifica automaticamente il curricolo canonico.

## Confini

Slice esclusivamente documentale. Nessuna modifica al runtime, al comportamento React o ai dati canonici. Nessun servizio applicativo remoto e nessuna approvazione automatica.

## Prossimo passo

CML-518B — inventario tecnico verificato delle superfici React, collegando ogni capacità ai componenti, store, parser, test e workflow effettivi.

## Verdetto

`CML_518A_REACT_BASELINE_AND_CAPABILITY_PERIMETER_READY_NO_RUNTIME_OR_CANONICAL_CHANGE`
