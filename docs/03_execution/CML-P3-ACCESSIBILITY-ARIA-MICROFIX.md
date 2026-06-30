# CML-P3-ACCESSIBILITY-ARIA-MICROFIX — Accessibility ARIA Microfix

## Obiettivo

Applicare microfix ARIA alle 6 issue P3 emerse dall'audit naming/microcopy: aside label, overlay dialog ARIA, breadcrumb navigazione, sidebar stato, progress live region.

## Stato Iniziale

- Branch: `main`
- HEAD: `015b283`
- `origin/main`: `015b283`
- Accessibilità: 88/100
- Audit P3: 10 issue, 6 selezionate per microfix

## Perimetro

Runtime microfix. Solo attributi ARIA in `_published_snapshot/netlify-current/index.html`. Nessun cambio flussi, dati, export, score.

## Issue Risolte

| ID | File | Modifica | Rischio |
|----|------|----------|---------|
| P3.01 | `index.html:1327` | `aside` → `aria-label="Elenco discipline"` | Nullo |
| P3.02 | `index.html:5114-5120` | Welcome overlay `role="region"` → `role="dialog" aria-modal="true" aria-labelledby="welcome-title"`, id aggiunto a h2 | Nullo |
| P3.03 | `index.html:4837-4849` | Settings modal → `role="dialog" aria-modal="true" aria-labelledby="settings-title"` su container, id aggiunto a h2, attributi su overlay | Nullo |
| P3.04 | `index.html:1294` | Breadcrumb → `role="navigation" aria-label="Percorso"` | Nullo |
| P3.05 | `index.html:3224` | Breadcrumb span corrente → `aria-current="page"` | Nullo |
| P3.07 | `index.html:3188` | Sidebar disc-btn attivo → `aria-current="true"` condizionale | Nullo |
| P3.09 | `index.html:1308` | Cruscotto progress → `aria-live="polite" aria-atomic="true"` sul contenitore | Nullo |

## Invarianti Rispettate

- Score accessibilità non aggiornato ✅
- Nessuna modifica dati curriculum ✅
- Nessuna modifica export/import ✅
- Nessuna modifica README/docs esistenti ✅

## Validazione

- `node tools/validate-cml-normalized-curriculum.mjs`: 14/14 PASS ✅
- `node tools/test-runtime-mappa-dati-shape.mjs`: 14/14 PASS ✅
- `git diff --check`: clean ✅

## Verdict

`CML_P3_ACCESSIBILITY_ARIA_MICROFIX_READY`
