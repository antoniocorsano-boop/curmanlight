# CML-012A — Report

**Task**: Real User Task Acceptance Test Design  
**Data**: 21/06/2026  
**Base**: CML-011D (15fc009) — ciclo CML-011 chiuso

## Descrizione

Progettazione del primo test con utente reale su CurManLight.
Nessuna modifica runtime, nessun deploy.

## Protocollo prodotto

| Elemento  | Dettaglio                                              |
| --------- | ------------------------------------------------------ |
| Nome test | `T01-CML-REAL-USER-TASK`                               |
| Profilo   | Docente secondaria I grado                             |
| Durata    | 10-15 minuti                                           |
| Passi     | 8 (da apertura a spiegazione validazione)              |
| Criteri   | 8/8 → chiusura; 6-7/8 → micro-fix; ≤5/8 → Opzione B    |
| Raccolta  | Tempi, commenti, gesti insoliti                        |
| Consegna  | "Prepara il documento da portare al Collegio Docenti." |

## Verifiche

- [x] Preflight: branch, HEAD 15fc009, working tree pulita
- [x] Nessuna modifica runtime
- [x] Nessun deploy
- [x] Protocollo copre tutti gli 8 passi richiesti
- [x] Criteri di accettazione definiti per ogni passo
- [x] Criteri di chiusura con azioni conseguenti
- [x] Vincoli di osservazione specificati

## Verdetto

```
CML_012A_REAL_USER_TEST_DESIGN_READY
```

## Prossimo step

CML-012B: esecuzione del test con 1-2 docenti volontari.
