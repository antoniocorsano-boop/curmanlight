# CML-070A — UDA Read-Only Prototype Live Deploy Smoke Report

**Stato:** ✅ Completed  
**Data:** 2026-06-23  
**HEAD:** `b0003ba` (CML-070) — nessuna modifica runtime in CML-070A

## Dettagli deploy

- **Repository:** `antoniocorsano-boop/curmanlight`
- **Branch:** `main`
- **HEAD:** `b0003ba`
- **Workflow:** `Deploy CurManLight to GitHub Pages` — success
- **URL live:** `https://antoniocorsano-boop.github.io/curmanlight/`
- **Size:** 322KB

## Esito smoke live

25/25 controlli PASS ✅

### UDA modello: 2/2 visibili

| UDA | Titolo | Ordine | Classe | Unità Tecnologia |
|-----|--------|--------|--------|------------------|
| 1 | Cittadini digitali responsabili | Primaria | 5 | tec_pri_5_001 |
| 2 | Dal computer al documento | Secondaria | 1 | tec_sec_1_002 |

### Campi: 14 per UDA

| Categoria | Campi | Badge |
|-----------|-------|-------|
| Derivati dal curricolo | competenza, traguardo, obiettivi, conoscenze, abilità, evidenze, criteri, fonte | 🟢 Dato curricolare |
| Statici/esempio | titolo, durata, attività, metodologia, materiali, adattamenti, nota docente | 🟡 Esempio didattico |

### Regressioni escluse

| Area | Esito |
|------|-------|
| Didattica Valutazione/Evidenze | ✅ Invariata |
| Curriculum | ✅ Invariato |
| Export/import/report | ✅ Invariati |
| Role-access gating (`CML2025`) | ✅ Invariato |
| Schema `.cml` | ✅ Invariato |
| localStorage/sessionStorage | ✅ Nessuna aggiunta |
| Mobile bottom bar | ✅ Invariata |

### Runtime

Confermato: runtime non modificato in CML-070A (`git diff --name-only -- _published_snapshot/netlify-current` vuoto).

## Prossimo step

`CML-071 — PROFESSIONAL_UI_UX_SYSTEM_AUDIT`

## Verdetto

`CML_070A_UDA_READONLY_PROTOTYPE_LIVE_DEPLOY_SMOKE_READY`
