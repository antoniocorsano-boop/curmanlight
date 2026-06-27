# CML-191 — Next Cycle Selection After 14/14 Data Completion

Data: 2026-06-27

## 1. Scopo

Selezionare formalmente il prossimo ciclo di lavoro CurManLight dopo il completamento 14/14 dei dati normalizzati e l'audit di chiusura CML-190.

## 2. Baseline

| Parametro | Valore |
|---|---|
| Commit | `215bfeb` (CML-190, 1 ahead origin/main) |
| Dati normalizzati | 14/14 |
| Runtime mappa | 11/14 |
| Validatore | 14/14 PASS, 0 errori |
| Shape test | 11/11 PASS |
| Working tree | Pulito |

## 3. Opzioni disponibili

| Opzione | Descrizione | Impatto utente | Rischio | Dipendenze |
|---|---|---|---|---|
| **A** — Runtime integration | Completa mappa 3 discipline residue | Alto (14/14 UI) | Basso | Dati normalizzati (✅) |
| B — Design/UML docs | Architettura, flussi, componenti | Nessuno | Basso | Nessuna |
| C — Evidenze/UDA | Workflow validazione/approvazione | Alto | Alto | Mappa runtime completa |
| D — Export/import + .cml | Esportazione dati, schema hardening | Medio | Medio | Schema maturo |
| E — SchoolKB | Knowledge base documentale | Medio | Alto | OAuth/API esterne |

## 4. Opzione selezionata: A — Runtime integration

### Motivazione

1. **Massimo rapporto impatto/rischio**: pattern già testato su CML-175 (Musica) e CML-184 (EF); dati normalizzati pronti e validati.
2. **Completamento funzionale**: dopo CML-195 tutte le 14 discipline saranno visibili nella mappa runtime.
3. **Nessuna dipendenza bloccante**: i dati normalizzati sono completi (14/14); il runtime HTML ha già 11 rami integrati.
4. **Rischio basso**: l'integrazione runtime è un'operazione meccanica (aggiungere variabile MAPPA_DATI, pulsante selettore, branch render, contatori UI).
5. **Coerenza cronologica**: è il passo logico dopo la normalizzazione dati — senza mappa runtime, i dati normalizzati non sono accessibili agli utenti finali.

### Opzioni respinte

| Opzione | Motivo |
|---|---|
| B (UML/docs) | Nessun impatto utente; utile dopo aver completato funzionalità concrete |
| C (evidenze/UDA) | Troppo presto: richiede mappa runtime completa come base |
| D (export/import) | Rischio di toccare componenti non ancora maturi; export parziale se mappa incompleta |
| E (SchoolKB) | Progetto parallelo, non completa gap funzionali; aggiunge dipendenze OAuth non necessarie ora |

## 5. Micro-slice proposte

| Slice | Disciplina | Commit previsto | Action |
|---|---|---|---|
| CML-192 | Seconda Lingua Comunitaria | .html + variabile + pulsante + branch + contatori ⬆ 12/14 | Runtime integration |
| CML-193 | Religione Cattolica | .html + variabile + pulsante + branch + contatori ⬆ 13/14 | Runtime integration |
| CML-194 | Latino LEL | .html + variabile + pulsante + branch + contatori ⬆ 14/14 | Runtime integration |
| CML-195 | 14/14 closure | shape test alignment + smoke | Shape + test |

## 6. Verdetto

`CML_191_NEXT_CYCLE_SELECTION_AFTER_14_14_DATA_COMPLETION_READY`
