# CML-003R — Conservative Orientation Integration

## Scope

Add a lightweight orientation layer to the published CurManLight runtime to help users immediately understand the tool's purpose, workflow, and boundaries.

## Baseline

CML-002R established that the published runtime (`_published_snapshot/netlify-current/index.html`) is a functional superset of the CML-001/CML-002 prototypes. The prototypes share zero code lineage with the runtime and must not be copied.

## Constraint Map

| Constraint | Status |
|------------|--------|
| No prototype code copied | ✓ |
| No index.html architecture replaced | ✓ |
| No 14-discipline data modified | ✓ |
| No approve/reject/edit logic modified | ✓ |
| No IN2012→IN2025 comparison modified | ✓ |
| No localStorage modified | ✓ |
| No PDF modified | ✓ |
| No sw.js modified | ✓ |
| No _headers modified | ✓ |
| No backend/API/auth/Netlify Forms | ✓ |
| No deploy | ✓ |
| No old PDF link referenced as user link | ✓ |

## File Modified

- `_published_snapshot/netlify-current/index.html` — 26 insertions, 1 deletion

## Insertion Point

**Location**: between `quick-info-bar` (line 457) and `layout` (line 473) — visible on all tabs, before any workflow content.

**Approach**: static HTML card + CSS only. No new global functions. No new viste. No new localStorage keys.

## Content Added

### CSS (before `</style>`, at line 402)

- `.orientation-card` — gradient background card with flex layout, consistent with existing design
- `.orientation-steps` / `.orientation-step` — pill-shaped step badges using `rgba(26,35,126,.1)` background
- `.orientation-note` — warning-style note box
- `.orientation-dismiss` — close button
- `@media(max-width:760px)` — responsive collapse
- `@media print` — hidden during print (added to existing print rule)

### HTML (static, between quick-info-bar and layout)

- Title: "Revisione guidata del curricolo"
- Description: explains IN2012 vs IN2025 comparison purpose
- 5-step orientation pills: "Scegli una disciplina → Confronta 2012 e 2025 → Valuta e decidi → Approva, modifica o mantieni → Consulta ed esporta"
- Note: "Il sistema non approva automaticamente il curricolo: organizza il lavoro e rende tracciabili le decisioni."
- Dismiss button (×) — removes the card via inline `onclick`

### Microcopy (from spec, adapted to existing code)

```
"Revisione guidata del curricolo"
"Lo strumento aiuta a confrontare il curricolo vigente (IN 2012) con le proposte di aggiornamento (IN 2025). ..."
1. Scegli una disciplina
2. Confronta 2012 e 2025
3. Valuta e decidi
4. Approva, modifica o mantieni
5. Consulta ed esporta
"Il sistema non approva automaticamente il curricolo..."
```

## Preserved Functionality

- Sidebar discipline selection ✓
- IN2012 → IN2025 comparison cards ✓
- approve/reject/edit ✓
- Progress tracking ✓
- Filter buttons ✓
- Export (Word, Copy, Markdown, PDF) ✓
- PDF link (cache-safe `Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf`) ✓
- Welcome modal ✓
- Settings/profile modal ✓
- PWA installation ✓
- Service worker registration ✓
- Print styles ✓

## Risk Assessment

| Risk | Mitigation |
|------|------------|
| Orientation card clutters small screens | Responsive breakpoint at 760px collapses padding and wraps steps |
| Users may dismiss card and lose orientation | Card is dismissible but NOT session-persistent — it reappears on page reload (no new localStorage key) |
| CSS adds ~550 bytes | Trivial for a ~200KB+ single-file SPA |

## Next Step

After commit and merge to master, proceed with:
- Optional: add persistent "mostra orientamento" toggle in settings
- Local visual inspection and deploy smoke test
- Consider adding the orientation to the settings modal as a persistent re-show option
