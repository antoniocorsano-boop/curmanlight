# CML-068A — Didattica Read-Only Prototype Live Deploy Smoke

## Report

| Field | Value |
|-------|-------|
| **CML** | CML-068A |
| **Title** | Didattica Read-Only Prototype Live Deploy Smoke |
| **Date** | 2026-06-23 |
| **Type** | Deploy / Smoke / Documentazione |
| **Runtime** | Nessuna modifica |
| **URL** | https://antoniocorsano-boop.github.io/curmanlight/ |

## Deploy

- **Push:** `git push origin main` → `2947309..8d74749`
- **Workflow:** `Deploy CurManLight to GitHub Pages` — **success**
- **Deploy da:** `_published_snapshot/netlify-current`

## Smoke Results

**25/25 controlli PASS:**

### Didattica prototype (1–15)
- ✅ Pagina caricata (200 OK, 309KB)
- ✅ Home a due aree visibile
- ✅ Card Didattica "Valuta evidenze" attivo
- ✅ Tab/sezione Didattica presente (`didattica-evidence-list`)
- ✅ Titolo "Valutazione ed evidenze"
- ✅ Microcopy "Prototipo" read-only
- ✅ Microcopy "validazione professionale del docente"
- ✅ Conteggio 13 unità totali
- ✅ Copertura Infanzia, Primaria, Secondaria
- ✅ Filtro ordine funzionante (`setDidatticaFilter`)
- ✅ Card unità espandibili (`didattica-evidence-unit-body`)
- ✅ Evidenze osservabili visibili
- ✅ Criteri di valutazione visibili
- ✅ Nessun campo editabile (nessuna classe `didattica-edit` o funzione `didatticaSave`)
- ✅ Nessun nuovo salvataggio locale (nessun `didatticaStorage`/`didatticaSave`)

### Curriculum invariato (16–21)
- ✅ Curriculum raggiungibile (`tab-curricolo`)
- ✅ Home Curriculum funzionante
- ✅ Revisione Curriculum funzionante (`tab-lavoro`)
- ✅ Tecnologia normalizzata presente (`tecnologia-norm`)
- ✅ Filtri Tecnologia funzionanti
- ✅ Export/import/report invariati

### Gating e regressioni (22–25)
- ✅ Role-access gating invariato (`CML2025`, `Blocca di nuovo`)
- ✅ Regressione `.cml` PASS (nessun nuovo campo codice/accesso/autenticazione)
- ✅ Mobile bottom bar Home
- ✅ Didattica raggiungibile da menu mobile

### Audit densità live
- button tags: 100
- export-btn: 27
- onclick: 114
- requireRoleAccess: 5
- tab-: 31
- mobile-bottom-bar: YES

## File modificati

| File | Modifica |
|------|----------|
| `docs/03_execution/CML-068A.md` | Creato |
| `report/CML-068A_didattica_readonly_prototype_live_deploy_smoke.md` | Creato |
| `docs/REPO-MOVELOG.md` | Aggiornato |

## Verdetto

`CML_068A_DIDATTICA_READONLY_PROTOTYPE_LIVE_DEPLOY_SMOKE_READY`
