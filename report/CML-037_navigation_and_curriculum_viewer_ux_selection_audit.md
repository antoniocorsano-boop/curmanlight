# CML-037 — Navigation and Curriculum Viewer UX Selection Audit

## Summary

Audit di selezione UX/navigazione per il viewer "Curricolo di istituto". Valutate 7 opzioni. Selezionata **Opzione D** (selettore 2012/2025 più chiaro con etichette "vigente" e "bozza").

## Preflight

| Controllo | Esito |
|---|---|
| HEAD | `2e2687a` ✅ |
| Working tree | Pulita ✅ |
| MEMORY.md / .kilo / CLAUDE.md | ✅ non committati |
| Runtime modificato | ❌ Nessuno (audit-only) |

## Stato UX

| Elemento | Valutazione |
|---|---|
| Accesso viewer | ✅ Chiaro (tab "🏫 Curricolo di istituto") |
| Callout sezioni generali | ✅ Presente (CML-035) |
| Stato documento | ✅ Visibile ma richiede lettura |
| **Version tabs** | **❌ Non esplicitano stato vigente/bozza** |
| Navigazione discipline | ✅ Pills index |
| Sezioni generali | ✅ Tab separato |

## Opzioni valutate

| Opzione | Valore utente | Rischio tecnico | Scelta |
|---|---|---|---|
| A — Navigazione verso viewer più evidente | Basso | Basso | ❌ |
| B — Breadcrumb | Medio | Basso | ❌ |
| C — Callout operativo | Basso | Basso | ❌ |
| **D — Selettore 2012/2025 più chiaro** | **Alto** | **Molto basso** | **✅** |
| E — Integrazione bidirezionale | Medio | Medio | ❌ |
| F — Guida contestuale | Medio | Medio | ❌ |
| G — Nessun intervento | Molto basso | Nullo | ❌ |

## Decisione

| Campo | Valore |
|---|---|
| Opzione selezionata | **D** — Selettore 2012/2025 più chiaro |
| Motivazione | Distinguere "vigente" da "bozza" a colpo d'occhio è il miglioramento UX più urgente e a minor costo |
| Etichette proposte | "IN 2012 (vigente)" / "IN 2025 (bozza)" |
| Prossimo step | **CML-038** — implementazione label nel template |
| Deploy CML-038 | Sì (solo HTML in JS template) |

## Esito

```
CML_037_NAVIGATION_AND_CURRICULUM_VIEWER_UX_SELECTION_AUDIT_READY
```

## Output finale

| Campo | Valore |
|---|---|
| Verdict | `CML_037_NAVIGATION_AND_CURRICULUM_VIEWER_UX_SELECTION_AUDIT_READY` |
| Commit hash | In corso |
| File modificati | `docs/03_execution/CML-037.md`, `report/CML-037_...`, `docs/REPO-MOVELOG.md` |
| Opzioni valutate | A (nav viewer), B (breadcrumb), C (callout), D (selettore), E (bidirezionale), F (guida), G (nulla) |
| Opzione selezionata | D — Selettore etichette 2012/2025 (vigente/bozza) |
| Docs-only | ✅ |
| Runtime modificato | ❌ Nessuno |
| Deploy | ❌ Nessuno |
| MEMORY.md / .kilo / CLAUDE.md | ✅ non committati |
