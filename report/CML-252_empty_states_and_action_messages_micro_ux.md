# Report CML-252 — Empty States and Action Messages Micro-UX

**Data:** 2026-07-02

## Riepilogo

Migliorati 5 messaggi di stato vuoto/debole nell'area **Processo** del runtime CurManLight, aggiungendo orientamento contestuale ("Cosa puoi fare ora") basato sul linguaggio del flusso di processo (Docente → Dipartimento → Referente → Documento finale / Esportazioni).

## Aree interessate

| Area | Funzione | Tipo messaggio | Prima | Dopo |
|------|----------|---------------|-------|------|
| Fase dipartimentale — import proposte docenti | `importTeacherCmlFiles` | Nessun file selezionato | 42 caratteri | 162 caratteri |
| Fase dipartimentale — import proposte docenti | `importTeacherCmlFiles` | Nessun file valido | 42 caratteri | 240 caratteri |
| Fase referente — import esiti dipartimentali | `importDepartmentOutcomeCmlFiles` | Nessun file selezionato | 42 caratteri | 222 caratteri |
| Fase referente — import esiti dipartimentali | `importDepartmentOutcomeCmlFiles` | Nessun file valido | 42 caratteri | 282 caratteri |
| Fase referente — report gruppo lavoro | `downloadReferentGroupWorkReport` | Nessun esito caricato | 63 caratteri | 216 caratteri |

## Pattern applicato

Ogni messaggio migliorato segue la struttura:

1. **Diagnosi** — cosa non ha funzionato (stato attuale)
2. **Possibili cause** — perché potrebbe essere successo (solo per fallimenti di validità)
3. **Cosa puoi fare ora** — azione orientativa con percorso nell'interfaccia

## Verifica validità

- `git diff --check`: OK
- Curricolo normalized: 14/14 valid (nessuna regressione)
- Mappa dati shape: 14/14 PASS
- Entrambi i runtime file synchronizzati (byte count identico: 833743)
- Secret scan: nessun secret

## Impatto sugli empty state preesistenti

Questa slice lascia intatti i messaggi vuoto già ben orientati:
- `Nessuna bozza UDA salvata. Passo suggerito: ...` (linea 2877/2915)
- `Nessun risultato con i filtri attivi. ...` (linea 2924)
- `Nessuna unità per questa combinazione. ...` (linea 2856)
- `Non hai ancora approvato nessuna proposta. ...` (linea 3927)
- `Nessuna bozza in libreria — salva o genera la prima UDA smart.` (linea 2898)
