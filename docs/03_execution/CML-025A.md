# CML-025A — Referent Group Work Report Export Smoke and Closure Audit

## Stato

Smoke audit completo della funzione CML-025 (Scarica report gruppo di lavoro). 
Nessuna modifica runtime — solo verifica, documentazione e chiusura.

## Preflight

| Controllo | Esito |
|---|---|
| Branch | `cml-008r-fix-markdown-decision-summary` ✅ |
| HEAD partenza | `8237036` — feat: export referent group work report ✅ |
| Working tree | Pulita (solo untracked: `.kilo/`, `CLAUDE.md`, `MEMORY.md`) ✅ |
| MEMORY.md presente | ✅ (non committato) |
| git diff --check | Nessun whitespace error ✅ |
| Modifiche runtime | ❌ Nessuna |
| Deploy | ❌ Nessuno |
| Asset (sw.js, _headers, PDF) | Invariati ✅ |

## 1. Smoke statico runtime

| Controllo | Riga | Esito |
|---|---|---|
| Pulsante "Scarica report gruppo di lavoro" presente una sola volta | 705 | ✅ PASS |
| Pulsante richiama `downloadReferentGroupWorkReport()` | 705 | ✅ PASS |
| `downloadReferentGroupWorkReport()` definita una sola volta | 3337 | ✅ PASS |
| `buildReferentGroupWorkReportMarkdown()` definita una sola volta | 3212 | ✅ PASS |
| Nessuna nuova chiamata `fetch()`/`XMLHttpRequest` | — | ✅ PASS |
| Nessuna nuova chiave `localStorage`/`sessionStorage` | — | ✅ PASS |
| Nessuna modifica allo schema `.cml` | — | ✅ PASS |
| `downloadBlob` riutilizzato (meccanismo esistente) | 3346 | ✅ PASS |
| Nessuna dipendenza esterna nuova | — | ✅ PASS |
| Nessuna Drive API, OAuth, autenticazione, backend, CDN | — | ✅ PASS |

## 2. Smoke semantico — Markdown generato

| Sezione richiesta | Presente | Esito |
|---|---|---|
| Titolo "Report di lavoro per il gruppo curricolo" | Linea 3219 | ✅ PASS |
| Nota prudente (non sostituisce delibera) | Linea 3221 | ✅ PASS |
| Sezione "Sintesi generale" | Linea 3230 | ✅ PASS |
| Sezione "Quadro per disciplina" | Linea 3239 | ✅ PASS |
| Sezione "Punti da chiarire" | Linea 3261 | ✅ PASS |
| Sezione "Elementi senza esito del confronto" | Linea 3275 | ✅ PASS |
| Sezione "Evidenze e controlli" | Linea 3289 | ✅ PASS |
| Sezione "Traccia per la discussione del gruppo" | Linea 3323 | ✅ PASS |
| Sezione "Chiusura prudente" | Linea 3332 | ✅ PASS |

## 3. Smoke comportamento

| Controllo | Esito |
|---|---|
| Se outcomes vuoto (`length === 0`), restituisce `null` e mostra toast | ✅ PASS |
| Se outcomes presente, costruisce Markdown coerente | ✅ PASS |
| Nome file segue formato `report_gruppo_curricolo_YYYY-MM-DD.md` | ✅ PASS |
| Usa `downloadBlob()` esistente | ✅ PASS |
| Flusso interamente locale (nessuna rete) | ✅ PASS |

## 4. Verdetto

```
CML_025A_REFERENT_GROUP_WORK_REPORT_EXPORT_SMOKE_READY
```

## Output finale

| Campo | Valore |
|---|---|
| Verdetto | `CML_025A_REFERENT_GROUP_WORK_REPORT_EXPORT_SMOKE_READY` |
| Branch | `cml-008r-fix-markdown-decision-summary` |
| Commit partenza | `8237036` — feat: export referent group work report |
| Nuovo commit | `HEAD` (dopo commit docs) |
| File modificati | `docs/03_execution/CML-025A.md` (nuovo), `report/CML-025A_referent_group_work_report_export_smoke.md` (nuovo), `docs/REPO-MOVELOG.md` (modificato) |
| MEMORY.md | Presente come untracked — non committato, da rimuovere/ignorare |
| Deploy | ❌ Nessuno |
| Rete, Drive API, OAuth, backend | ❌ Nessuno |
| Modifiche a schema .cml, persistenza | ❌ Nessuna |
| Modifiche a sw.js, _headers, PDF, asset | ❌ Nessuna |
| Git finale | Working tree pulita (solo untracked non pertinenti) ✅ |
| Raccomandazione | CML-025A chiuso. Prossima slice consigliata: **CML-025B** — real user micro-test del flusso referente (import esiti → report) oppure passaggio a nuovo blocco funzionale. |
