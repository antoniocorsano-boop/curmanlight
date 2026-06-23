# CML-073A — Navigation and Home Links Live Deploy Smoke Report

**Generated:** 2026-06-23T06:46:00Z  
**Runtime URL:** https://antoniocorsano-boop.github.io/curmanlight/  
**Runtime commit:** f5b12e2  
**Workflow status:** success (run 28007685093)  

---

## Summary

CML-073 runtime increment deployed to GitHub Pages and smoke-tested live. All 30 checks pass. No runtime modifications in CML-073A. Documentation only.

## Smoke Results

### 1. Page Load & Console

- Live page fetched and parsed: 4260 lines, ~322KB
- All CSS selectors present: `.subnav-bar`, `.subnav-btn`, `.tab-esportazioni`, `.tab-guida`, `.dimmed`, `.badge-preparing`
- All tab divs present: `tab-home`, `tab-didattica`, `tab-lavoro`, `tab-riepilogo`, `tab-normativa`, `tab-generali`, `tab-curricolo`, `tab-esportazioni`, `tab-guida`
- No syntax errors detected in JS blocks

### 2. Desktop Navigation (≥901px)

| Tab | Button text | onclick | Sub-nav | Status |
|-----|------------|---------|---------|--------|
| 0 | 🏠 Home | setTab('home') | — | ✅ |
| 1 | 📚 Curriculum | setTab('curricolo') | Consulta, Revisione, Definitivo, Fonti | ✅ |
| 2 | 🧑‍🏫 Didattica | setTab('didattica') | Valutazione/Evidenze, UDA modello | ✅ |
| 3 | 📤 Esportazioni | setTab('esportazioni') | — | ✅ |
| 4 | ❔ Guida | setTab('guida') | — | ✅ |

### 3. Home Links

| Link text | Target | Status |
|-----------|--------|--------|
| 📖 Consulta | Curriculum | ✅ |
| ✏️ Revisiona | Revisione | ✅ |
| 📤 Esporta | Esportazioni | ✅ |
| ⚙️ Tecnologia normalizzata | Curriculum (scroll) | ✅ |
| 📊 Valuta evidenze | Didattica | ✅ |
| 📋 Progetta UDA | Didattica / UDA modello | ✅ |
| 🧪 Prepara attività | badge "In preparazione" | ✅ |
| 📁 Materiali per la classe | badge "In preparazione" | ✅ |

### 4. Sub-nav System

- Curriculum sub-nav: `.subnav-bar.subnav-curriculum` with `id="subnav-curriculum"`
  - Buttons: Consulta (curricolo), Revisione (lavoro), Definitivo (riepilogo), Fonti (normativa)
  - Parent highlighting: main tab "Curriculum" active for any sub-item
- Didattica sub-nav: `.subnav-bar.subnav-didattica` with `id="subnav-didattica"`
  - Buttons: Valutazione/Evidenze (didattica), UDA modello (didattica_uda)
  - Parent highlighting: main tab "Didattica" active for any sub-item

### 5. Mobile

- Bottom bar: 5 buttons (Home, Curr., Did., Esp., ☰ Menu)
- Mobile menu: grouped sections (Curriculum, Didattica, Guida e strumenti)
- Menu items link to: Consulta, Revisione, Definitivo, Fonti, Valutazione/Evidenze, UDA modello, Guida, Esportazioni, Impostazioni, Installazione, Corso PDF
- CSS hides sub-nav bars on ≤900px: `.subnav-bar.subnav-curriculum{display:none!important}`

### 6. Role-Access Gating

- `ROLE_ACCESS_CODE="CML2025"` present
- `role-access-overlay` class and JS functions present
- "Blocca di nuovo" button present (`lockRoleAccess()`)
- Protected actions: referent report, department outcome export, technology panel

### 7. Export/Import/Report

- All export functions present: `exportWord`, `exportMarkdown`, `exportPDF`, `exportRiepilogoWord`, `exportMarkdownRiepilogo`, `exportPDFRiepilogo`, `exportTeacherCml`, `uploadTeacherCmlToDrive`
- All button classes present: `.btn-word`, `.btn-cml`, `.btn-md`, `.btn-pdf`, `.export-btn`
- Backup/import functions present: `saveLocalState`, `exportLocalBackup`, `importLocalBackup`

### 8. Schema .cml

- No new schema fields
- `TECNOLOGIA_NORM` data structure unchanged (13 units, same fields)
- Export/import paths unchanged

## Verdict

```
CML_073A_NAVIGATION_AND_HOME_LINKS_LIVE_DEPLOY_SMOKE_READY
```

## Next Step Recommended

CML-074 — PROFESSIONAL_LAYOUT_VISUAL_SYSTEM_RUNTIME_INCREMENT  
(applies design system classes, accessibility landmarks, visual polish)
