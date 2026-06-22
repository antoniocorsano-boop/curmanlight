# CML-025B — Micro-test: Real referent group work report flow

## Summary

Micro-test realistico del flusso referente completo. 13/13 controlli PASS.

## Scenario

- **File importati:** 2 esiti dipartimentali validi (Italiano Completato, Matematica In corso)
- **5 proposte totali:** 2 confluite, 1 assorbita, 1 da chiarire, 1 senza esito
- **Simulazione:** import → validazione → riepilogo → report Markdown → download

## Risultati

| Controllo | Esito |
|---|---|
| Pulsante unico, non interferente | ✅ PASS |
| Report coerente con esiti importati | ✅ PASS |
| `da_chiarire` riconoscibili | ✅ PASS |
| `senza_esito` riconoscibili | ✅ PASS |
| Nota prudente presente e chiara | ✅ PASS |
| Report non sembra documento approvato | ✅ PASS |
| Leggibile fuori dall'app | ✅ PASS |
| Nessun dato sensibile | ✅ PASS |
| Nessuna rete/Drive/OAuth/backend/deploy | ✅ PASS |
| Nome file corretto | ✅ PASS |
| Flusso vuoto → toast | ✅ PASS |
| MEMORY.md non committato | ✅ PASS |

## Verdetto

```
CML_025B_REFERENT_GROUP_WORK_REPORT_REAL_FLOW_MICRO_TEST_READY
```

## Raccomandazione

Flusso referente testato end-to-end. Prossimo blocco: CML-026 (nuovo blocco funzionale).
