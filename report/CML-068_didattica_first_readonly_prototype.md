# CML-068 — Didattica — First Read-Only Prototype

## Report

### Metadata

| Field | Value |
|-------|-------|
| **CML** | CML-068 |
| **Title** | Didattica — First Read-Only Prototype (Valutazione/Evidenze) |
| **Date** | 2026-06-23 |
| **Module** | Option D — Valutazione/Evidenze (selected in CML-067) |
| **Strategy** | CML-001R — conservative integration, new view without replacing existing logic |
| **Status** | ✅ Completed |

### Summary

This is the first Didattica prototype in CurManLight. It introduces a **read-only** view of the Tecnologia vertical curriculum's 13 unità di apprendimento, displaying each unit's evidenze osservabili and criteri di valutazione (plus obiettivi, conoscenze, abilità for context). The implementation follows the CML-001R conservative approach: a new tab and render function added without modifying the existing Curriculum area, role-access gating, or schema.

### What Was Built

- **New Tab "Didattica"** (between Home and Lavoro): accessible from both the tabbar and the Home card "Valuta evidenze" link
- **Ordine Filter**: three buttons (Infanzia, Primaria, Secondaria) plus "Tutti" default, filtering the 13 units
- **Stats Bar**: total units + breakdown by ordine + "Prototipo" label
- **Expandable Unit Cards**: one card per unit with:
  - Header: ordine tag, fascia/classe, ambito, competenza
  - Body (expandable): traguardo, obiettivi, conoscenze, abilità, evidenze osservabili, criteri di valutazione, nota "Da adattare alla classe", fonte
- **Mobile Access**: entry in the mobile menu overlay

### Data

The 13 unitàApprendimento span:

| Ordine | Units | Classi/Fasce |
|--------|-------|-------------|
| Infanzia | 2 | Fascia 3-4, Fascia 5 |
| Primaria | 5 | Cl. 1, 2, 3, 4, 5 |
| Secondaria | 6 | Cl. 1 (2 units), Cl. 2 (2 units), Cl. 3 (2 units) |

- All units have non-empty `evidenze` and `criteriValutazione` arrays.
- Data is embedded as `var TECNOLOGIA_NORM_DATA` — no external JSON fetch.

### Key Design Decisions

1. **Embedded data** — avoids CORS/async loading issues, keeps the prototype self-contained in one file.
2. **Read-only** — no save/edit buttons, no localStorage, no schema changes. Microcopy everywhere signals "prototype".
3. **Expandable pattern** — reuses the `<details>`-like toggle pattern from tecnologia-norm-panel (click header to expand/collapse body).
4. **Tab routing** — routed through existing `setTab()` with `mbb-home` bottom bar mapping (no 6th bottom-bar button added).
5. **Mobile** — accessed via "Menu" overlay (no bottom-bar crowding).

### Validation Results

```
[parse]       JS_PARSE_OK
[keywords]    ALL_KYWD_CHECKS_OK
[validate]    valid: true, 13 units, 0 missing required fields
[audit]       buttonTags: 100, exportButtons: 27 (unchanged)
[audit]       CML2025 refs: 1, Locks: present
[coverage]    Curriculum area, DATA, aside: all intact
```

### Risk Assessment

- **Low**: read-only, no schema changes, no Curriculum area modifications, no data persistence
- **Medium**: HTML file size increased by ~324 lines (+14KB) — negligible for a static site
- **None**: export/import/report functions untouched

### Changelog

| Date | Change | Component |
|------|--------|-----------|
| 2026-06-23 | CSS for didattica-evidence section | index.html (CSS) |
| 2026-06-23 | #tab-didattica HTML structure | index.html (HTML) |
| 2026-06-23 | Tabbar "Didattica" button | index.html (HTML) |
| 2026-06-23 | Home card Didattica links | index.html (HTML) |
| 2026-06-23 | Mobile menu entry | index.html (HTML) |
| 2026-06-23 | setTab() extension for didattica | index.html (JS) |
| 2026-06-23 | TECNOLOGIA_NORM_DATA + renderDidattica() | index.html (JS) |
| 2026-06-23 | setDidatticaFilter() | index.html (JS) |
