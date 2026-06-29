# CML-031A — Full Curriculum References Requirement Contract

## Summary

Correzione del contratto CML-031. Il requisito non è "schede sintetiche + link" ma **visualizzazione completa e navigabile** dei documenti curricolari istituzionali 2012 e 2025.

## Preflight

| Controllo          | Esito             |
| ------------------ | ----------------- |
| HEAD partenza      | `0072e03` ✅      |
| Working tree       | Pulita ✅         |
| MEMORY.md presente | ✅ non committato |
| Runtime modificato | ❌ Nessuno        |

## Requisito corretto

La sezione "Fonti curricolari" deve rendere **sempre possibile la visualizzazione completa** dei documenti:

- Indicazioni 2012 (D.M. 254/2012)
- Indicazioni 2025 (D.M. 9 dicembre 2025, n. 221)

Principi: completezza, navigabilità, fonte istituzionale, stato del documento, distinzione fonte/lavoro, nessuna falsa approvazione, nessuna riduzione a link.

## Opzioni tecniche per CML-032

| Opzione | Descrizione                         | Rischio   | Manutenzione | Raccomandazione |
| ------- | ----------------------------------- | --------- | ------------ | --------------- |
| A       | Viewer PDF ufficiale + indice       | Basso     | Bassa        | Valida          |
| B       | Testo strutturato completo nell'app | Alto      | Alta         | Sconsigliata    |
| **C**   | **Soluzione mista forte**           | **Medio** | **Media**    | **Preferita**   |

Opzione C: viewer documento completo + indice navigabile + schede sintetiche + stato istituzionale + link MIM.

## Rischi

Testo non aggiornato, fonte non ufficiale, confusione fonte/lavoro, peso app, accessibilità, manutenzione.

## Esito

```
CML_031A_FULL_CURRICULUM_REFERENCES_REQUIREMENT_CONTRACT_READY
```

## Prossimo step

**CML-032** — Scelta formato tecnico (A/C) + implementazione sezione "Fonti curricolari" + deploy + smoke.
