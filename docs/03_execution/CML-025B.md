# CML-025B — Referent Group Work Report Real Flow Micro-Test

## Stato

Micro-test realistico del flusso referente: import esiti dipartimentali → riepilogo → report gruppo di lavoro → file Markdown. Nessuna modifica runtime — solo verifica, documentazione e chiusura.

## Preflight

| Controllo | Esito |
|---|---|
| Branch | `cml-008r-fix-markdown-decision-summary` ✅ |
| HEAD partenza | `8f8251d` — docs: smoke referent group work report export ✅ |
| Working tree | Pulita (solo untracked: `.kilo/`, `CLAUDE.md`, `MEMORY.md`) ✅ |
| MEMORY.md presente | ✅ (non committato) |
| Modifiche runtime | ❌ Nessuna |
| Deploy | ❌ Nessuno |

## Scenario simulato

### Dati di test

**File importati (2):**
1. `esito_dipartimento_2026-06-22_italiano.cml` — valido
2. `esito_dipartimento_2026-06-22_matematica.cml` — valido

**Esiti importati (2 discipline, 5 proposte totali):**
- **Italiano** (Completato): 2 proposte — 1 confluita, 1 da chiarire
- **Matematica** (In corso): 3 proposte — 1 confluita, 1 assorbita, 1 senza esito

Include: nota dipartimento "Commissione Italiano completata", una proposta senza handling.

### Flusso simulato

1. Import → `importDepartmentOutcomeCmlFiles()` ✅
2. Validazione → `validateDepartmentOutcomeCmlModel()` ✅
3. Riepilogo → `renderReferentValidation()` con statistiche ✅
4. Report Markdown → `buildReferentGroupWorkReportMarkdown()` ✅
5. Download → `downloadReferentGroupWorkReport()` via `downloadBlob()` ✅

## Controlli

| # | Controllo | Esito |
|---|---|---|
| 1 | Pulsante visibile nel referent panel (linea 705) | ✅ PASS |
| 2 | Pulsante non interferisce con altri flussi | ✅ PASS |
| 3 | Report contiene dati coerenti con esiti importati | ✅ PASS |
| 4 | Elementi `da_chiarire` riconoscibili | ✅ PASS |
| 5 | Elementi senza esito riconoscibili | ✅ PASS |
| 6 | Nota prudente chiara (report di lavoro, non delibera) | ✅ PASS |
| 7 | Report non si presenta come documento approvato | ✅ PASS |
| 8 | File Markdown leggibile fuori dall'app | ✅ PASS |
| 9 | Nessun dato sensibile reale introdotto | ✅ PASS |
| 10 | Nessuna rete, Drive API, OAuth, backend, deploy, nuova persistenza | ✅ PASS |
| 11 | Nome file: `report_gruppo_curricolo_YYYY-MM-DD.md` | ✅ PASS |
| 12 | Flusso vuoto: outcomes.length===0 → null → toast | ✅ PASS |
| 13 | MEMORY.md non committato | ✅ PASS |

## Verdetto

```
CML_025B_REFERENT_GROUP_WORK_REPORT_REAL_FLOW_MICRO_TEST_READY
```

## Output finale

| Campo | Valore |
|---|---|
| Verdetto | `CML_025B_REFERENT_GROUP_WORK_REPORT_REAL_FLOW_MICRO_TEST_READY` |
| Branch | `cml-008r-fix-markdown-decision-summary` |
| Commit partenza | `8f8251d` — docs: smoke referent group work report export |
| Nuovo commit | `HEAD` (dopo commit docs) |
| File modificati | `docs/03_execution/CML-025B.md` (nuovo), `report/CML-025B_referent_group_work_report_real_flow_micro_test.md` (nuovo), `docs/REPO-MOVELOG.md` (modificato) |
| MEMORY.md | Presente come untracked — non committato ✅ |
| Deploy | ❌ Nessuno |
| Runtime modificato | ❌ Nessuno |
| Asset (sw.js, _headers, PDF) | ✅ Invariati |
| Working tree | Pulita (untracked non pertinenti esclusi) ✅ |
| Raccomandazione | **CML-026** — prossimo blocco funzionale. Il flusso referente è testato end-to-end con micro-test PASS. |
