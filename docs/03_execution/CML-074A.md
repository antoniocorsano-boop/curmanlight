# CML-074A: Professional Layout Visual System — Live Deploy Smoke

**Status:** Done
**Date:** 2026-06-23
**Commit base:** `ed8caa4` (CML-074 visual system refinements)
**Commit smoke:** `HEAD` after this slice
**URL verificato:** `https://antoniocorsano-boop.github.io/curmanlight/`

## Summary

Deploy su GitHub Pages del commit CML-074 e smoke live del sistema visivo professionale. Nessuna modifica funzionale introdotta.

## Fase 1 — Preflight

| Controllo | Esito |
|-----------|-------|
| Branch corrente | `main` |
| Working tree | Clean |
| Commit CML-074 presente | `ed8caa4` |
| CML-074 su origin/main | Push eseguito (`4ee026b..ed8caa4 main -> main`) |
| GitHub Pages deploy | Attivato automaticamente, completato |

## Fase 2 — Smoke live

| # | Controllo | Esito |
|---|-----------|-------|
| 1 | Pagina si carica senza errori bloccanti | PASS |
| 2 | Layout visivo professionale CML-074 visibile | PASS |
| 3 | Home comprensibile: stato, prossima azione, azioni principali | PASS |
| 4 | Navigazione principale (5 tab) funzionante | PASS |
| 5 | Sub-nav Curriculum (4 voci) e Didattica (2 voci) presenti | PASS |
| 6 | Mobile bottom bar visibile (🏠 📚Curr. 🧑‍🏫Did. 📤Esp. ☰Menu) | PASS |
| 7 | Azioni libere accessibili senza codice operativo | PASS |
| 8 | Azioni protette richiedono ancora codice operativo (role-access-overlay) | PASS |
| 9 | Esportazioni tab caricato con tutti i gruppi | PASS |
| 10 | Guida tab caricata con 6 card + note | PASS |
| 11 | Badge design system visibili (📋 Prototipo, 🔒 Read-only, In preparazione) | PASS |
| 12 | Nessuna regressione su sezioni generali, normativa, fonti | PASS |
| 13 | Schema .cml invariato | PASS |
| 14 | Export/import non modificati | PASS |
| 15 | Role-access gating invariato (CML2025) | PASS |

## Fase 3 — Documentazione

Creati:
- `docs/03_execution/CML-074A.md`
- `report/CML-074A_professional_layout_visual_system_live_deploy_smoke.md`
- `docs/REPO-MOVELOG.md` (aggiornato)

## Verdetto

```
CML_074A_PROFESSIONAL_LAYOUT_VISUAL_SYSTEM_LIVE_DEPLOY_SMOKE_READY
```

## Prossimo Step Raccomandato

CML-075 (da definire)
