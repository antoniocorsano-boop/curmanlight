# CML-030 — Next Runtime or Support Block Selection Audit

## Summary

Audit di selezione per il prossimo blocco CurManLight dopo chiusura ciclo handoff scuola. Docs-only.
Scelta: **Opzione D — Pacchetto esempi dimostrativi**.

## Preflight

| Controllo          | Esito             |
| ------------------ | ----------------- |
| HEAD partenza      | `6db3cb8` ✅      |
| Working tree       | Pulita ✅         |
| MEMORY.md presente | ✅ non committato |
| Runtime modificato | ❌ Nessuno        |

## Opzioni valutate

| #     | Opzione                    | Valore     | Rischio   | Docs-only | Deploy | Raccomandazione      |
| ----- | -------------------------- | ---------- | --------- | --------- | ------ | -------------------- |
| A     | Onboarding in-app          | Alto       | Basso     | No        | Sì     | Rimandare            |
| B     | Guida contestuale          | Medio-alto | Basso     | No        | Sì     | Rimandare            |
| C     | Archivio locale file       | Alto       | Medio     | No        | Sì     | Rimandare            |
| **D** | **Esempi dimostrativi**    | **Alto**   | **Nullo** | **✅**    | **No** | **Selezionata**      |
| E     | Versione stampabile        | Medio      | Nullo     | Sì        | No     | Secondario           |
| F     | Micro-miglioramento report | Medio-alto | Medio     | No        | Sì     | Rimandare            |
| G     | Release notes              | Medio      | Nullo     | Sì        | No     | Dopo prossimo blocco |

## Selezione

**Opzione D — Pacchetto esempi dimostrativi**

Motivazione: file `.cml` di esempio permettono di simulare il flusso completo senza dati reali. Docs-only. Alto valore per formazione e adozione. Completa il pacchetto handoff.

## Esito

```
CML_030_NEXT_RUNTIME_OR_SUPPORT_BLOCK_SELECTION_AUDIT_READY
```

## Prossimo step

**CML-031** — Creazione esempi dimostrativi:

- `docs/04_user/esempi/` con readme + file `.cml` (proposta docente, esito dipartimento)
- Istruzioni per simulazione
- Docs-only, nessun deploy
