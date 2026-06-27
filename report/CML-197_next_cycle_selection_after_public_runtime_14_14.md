# CML-197 - Next Cycle Selection after Public Runtime 14/14

Data: 2026-06-27

## 1. Scopo

Selezionare formalmente il prossimo ciclo funzionale dopo il completamento del runtime 14/14 pubblico.

## 2. Stato attuale

| Indicatore | Valore |
|---|---|
| HEAD / origin/main | `660f2e1` |
| Working tree | Pulito |
| Normalizzati | 14/14 |
| Runtime mappa | 14/14 |
| Validatore | 14/14 PASS |
| Shape test | 14/14 PASS |
| GitHub Pages | Live — HTTP 200, 14/14 discipline visibili |

## 3. Opzioni valutate

### B (selezionata) — Export/import e schema .cml hardening

Il layer di consultazione è completo. Il prossimo collo di bottiglia è la robustezza del formato `.cml` usato per lo scambio dati tra docenti, dipartimenti e referenti. Senza uno schema versionato e validato, i flussi successivi (evidenze/UDA, SchoolKB) opererebbero su basi inconsistenti.

### C — Evidenze/UDA workflow

Rinviata. Dipende da uno schema di scambio stabile; va costruita su `.cml` robusto.

### D — SchoolKB / knowledge base

Rinviata. Parallela a CML ma prioritaria la chiusura del ciclo funzionale prima di aprire un nuovo fronte laterale.

### E — Design/UML documentation

Rinviata. Utile ma secondaria rispetto alla tenuta funzionale.

## 4. Sequenza proposta CML-198 → CML-202

| Slice | Titolo |
|---|---|
| CML-198 | .cml schema and export/import audit |
| CML-199 | .cml schema versioning and compatibility contract |
| CML-200 | Import validation/error handling hardening |
| CML-201 | Teacher/department/referent end-to-end .cml smoke |
| CML-202 | Public workflow readiness gate |

## 5. Perimetro

Solo documentazione. Nessuna modifica a runtime, dati, strumenti, dipendenze. Nessun deploy.
