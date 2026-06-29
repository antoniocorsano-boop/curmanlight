# CML-078 Report: Visual Affinity, Iconography, and Dark Mode Runtime Increment

## Summary

Applied light visual affinity refinements and automatic dark mode (`prefers-color-scheme`) to the runtime HTML. CSS variables introduced as design tokens; dark mode covers all UI surfaces with CSS-only overrides (no JS, no toggle, no localStorage).

## Files Changed

| File                                             | Change                                                                                                |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| `_published_snapshot/netlify-current/index.html` | CSS variables added (line 18), dark mode block added (line 866+), header gradient swapped to variable |

## Dark Mode Scope

- Body, header, cards, toolbars, sidebars, panels, norm cards, export groups, guide cards, home dashboard
- Didattica evidence/UDA modules, Tecnologia norm viewer, Curricolo viewer
- Department import, referent validation, role access dialog
- Mobile bottom bar and menu, sub-nav bar
- All text, border, badge, tag, filter, and stat variants
- Footer, notice boxes, settings panel, onboarding overlay

## Icons Audit

All iconography verified as Unicode/emoji, consistent across desktop and mobile, always paired with text labels.

## Verdetti

- `CML_078_VISUAL_AFFINITY_ICONOGRAPHY_DARK_MODE_RUNTIME_INCREMENT_READY`

## Next

- CML-078A — live smoke (15/15 PASS)
