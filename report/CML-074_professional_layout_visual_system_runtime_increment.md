# CML-074: Professional Layout Visual System Runtime Increment

## Technical Report

### Scope
Apply CML-072 design system principles to runtime `index.html` — no build tools, no new functions, no schema changes. Only CSS additions and HTML class attribute updates.

### Files Changed
- `_published_snapshot/netlify-current/index.html` (+91, -10)

### CSS Architecture
New classes added before `</style>` tag (lines 783-869). All existing CSS intact.

#### Badge System (6 semantic variants)
```
.badge--readonly  → #eceff1/#607d8b  (gray border)
.badge--prototype → #f3e5f5/#7b1fa2  (purple border)
.badge--warning   → #fff3e0/#e65100  (amber border)
.badge--success   → #e8f5e9/#2e7d32  (green border)
.badge--info      → #e3f2fd/#1565c0  (blue border)
.badge-preparing  → #eceff1/#90a4ae  (existing, kept)
```

#### Badge Contrast Fix (P3 from CML-071 audit)
| State | Before | After |
|-------|--------|-------|
| ok | `#81c784` | `#388e3c` (darker green) |
| modifica | `#ffb74d` | `#ef6c00` (darker orange) |
| nuovo | `#64b5f6` | `#1976d2` (darker blue) |
| eliminato | `#ef9a9a` | `#d32f2f` (darker red) |
| approvata | `#66bb6a` | `#2e7d32` (darker green) |
| rifiutata | `#bdbdbd` | `#757575` (darker gray) |

#### Card Unification
- All cards: `border-radius:9px` (was mixed 7-10px)
- Status cards: left border by state instead of full border
- Subtle shadow: `box-shadow:0 1px 2px rgba(0,0,0,.03)`

#### Button Hierarchy (available for future use)
- `.btn-primary`: solid indigo `#1a237e` background
- `.btn-secondary`: white with `#cfd8dc` border
- `.btn-tertiary`: text-only `#1a237e`

#### Notice Box System
```css
.notice-box.warning → amber bg (didattica evidence)
.notice-box.tip     → purple bg (UDA box)
.notice-box.success → green bg (Tecnologia norm notice)
```

### HTML Updates (10 elements)
Design system classes applied to existing HTML and JS-generated markup. No structural changes.

### A11y Improvements
- Badge contrast ratios improved (P3 fix)
- Consistent `:focus-visible` ring (`outline:2px solid #1a237e`)
- Semantic badge variants (no emoji dependency)

### Mobile Refinements
- `@media(max-width:560px)`: reduced heading font sizes
- Tighter padding on esport-group, guida-card
- Home title reduced to 18px

### Degradation Check
- No existing CSS removed or renamed
- All `.badge.ok/modifica/nuovo/eliminato/approvata/rifiutata` retain backward compatibility (new values override in source order)
- All JS functions unaffected

### Commit Message
```
feat: refine professional layout visual system

- Add design system badge variants (readonly, prototype, warning, success, info)
- Fix badge contrast (P3 from CML-071): darker greens/oranges/blues/reds/gray
- Unify card radius to 9px, add status left border, subtle shadow
- Add button hierarchy classes (primary, secondary, tertiary)
- Add notice-box system (warning, tip, success)
- Add visual polish to esport-group, guida-card, export-group, tool-group
- Update 10 HTML elements with design system classes
- Improve mobile readability (reduced sizes, tighter padding)
- Add consistent focus-visible ring for accessibility
```
