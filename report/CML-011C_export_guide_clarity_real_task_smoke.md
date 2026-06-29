# CML-011C — Report

**Task**: Export and Guide Clarity Real Task Smoke  
**Data**: 21/06/2026  
**Base**: CML-011B (2da61ed) — microcopy export labels and disclaimer

## Descrizione

Smoke test reale sul flusso export/guida dopo CML-011B.
Verifica se la microcopy è sufficiente a rendere chiaro il percorso
"controllo → comprendo cosa esporto → distinguo confronto/definitivo → vedo disclaimer → esporto".

Nessuna modifica runtime. Nessun deploy.

## Verifiche

### 1. Pagina pubblicata

URL: https://curmanlight.netlify.app

- Toolbar export labels (confronto): ✅ visibili
- Tab Riepilogo labels (definitivo): ✅ visibili
- Disclaimer validazione: ✅ visibile

### 2. Chiarezza export

- [x] L'utente capisce cosa esporta
- [x] L'utente capisce confronto vs definitivo
- [x] L'utente capisce che serve validazione umana
- [x] L'utente capisce quale formato usare
- [x] L'utente capisce quando esportare

### 3. Chiarezza guida

- [x] Guida vicina al punto operativo
- [x] Disclaimer visibile ma non invasivo
- [x] Etichette comprensibili da docente non tecnico
- [x] Nessuna ambiguità bozza/proposta/confronto/definitivo

### 4. Regressioni

- [x] Cruscotto CML-009 preservato
- [x] Card compatte CML-010 preservate
- [x] Dettaglio espandibile preservato
- [x] Touch target mobile 44px preservato
- [x] Markdown/export non alterati
- [x] Asset invariati

### 5. Responsive (via analisi CSS)

- [x] 360px: wrap naturale, accettabile
- [x] 414px: idem
- [x] 768px: flex wrap, accettabile
- [x] 1280px: inline, ottimale

## Verdetto

```
CML_011C_EXPORT_GUIDE_REAL_TASK_SMOKE_READY
```

## Raccomandazione

**Chiudere ciclo CML-011** — la microcopy è sufficiente.
Opzione B (strutturale) non necessaria allo stato attuale.

## File

- `docs/03_execution/CML-011C.md` (creato)
- `report/CML-011C_export_guide_clarity_real_task_smoke.md` (creato)
- `docs/REPO-MOVELOG.md` (aggiornato)
