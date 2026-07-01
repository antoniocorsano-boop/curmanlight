# CML-237 PROCESSO UX RUNTIME MICRO-SLICE — Report

## Sintesi

Micro-aggiornamento del tab Processo: sequenza ruoli, distinzione coordinatore/referente, nota Drive manuale e validazione umana. Comportamento applicativo invariato.

## Intervento

| Elemento | Modifica |
|---|---|
| Intestazione | «Processo di revisione» + sottotitolo `.cml` locale |
| Sequenza | Box con docente → coordinatore → dipartimento → referente |
| Fase dipartimentale | Badge ruolo + microcopy docente/coordinatore/dipartimento |
| Fase referente | Badge + distinzione dal coordinatore |
| CSS referente | Pannello con bordo blu distintivo |
| Nota finale | Validazione umana, import non approva automaticamente |

## Smoke test (ispezione statica)

| Verifica | Esito |
|---|---|
| `#tab-processo` presente | PASS |
| «Processo di revisione» | PASS |
| Fase dipartimentale / Fase referente | PASS |
| Ruoli docente, coordinatore, dipartimento, referente | PASS |
| Nota Drive manuale | PASS |
| Validazione umana | PASS |
| Handler import invariati | PASS |
| JS syntax check | PASS |
| Guida/Esportazioni non toccate | PASS |

## Invarianti

- Funzioni JS e handler: non modificati
- Formato `.cml`: non modificato
- JSON curriculum: non modificati
- Tools: non modificati

## Rischi residui

| Rischio | Livello | Nota |
|---|---|---|
| Due pannelli collapsible ancora nello stesso tab | Basso | Mitigato da badge e colori distinti |
| UDA smart stati vuoti | Basso | Slice futura backlog |

## Prossima slice consigliata

**CML-237S — controlled push**, poi **CML-238 — UDA smart empty states micro-slice**.
