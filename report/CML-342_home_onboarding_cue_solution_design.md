# Report – CML-342 Home Onboarding Cue Solution Design

## Overview
This report documents the solution design for **CML-342 – Home Onboarding Cue**. The goal is to provide a clear, lightweight UI guidance for non‑technical school users to start using CurManLight without any runtime code changes.

## Analysis of the Home
- The current home page presents three columns with dense information.
- Users (referenti curricolari, dipartimento) report difficulty in identifying the first actionable step.
- No visual cue directs attention to the curriculum proposal.

## Requirements for the Micro‑Cue
1. **Visibility** – The cue must be immediately noticeable on both desktop and mobile.
2. **Neutral terminology** – Use “proposta curricolare” instead of “lezione” or “crea la tua prima lezione”.
3. **Zero runtime impact** – Implemented as static HTML/CSS only.
4. **Responsiveness** – Works with the existing mobile‑first layout.

## Design Alternatives
| # | Design | Pros | Cons |
|---|--------|------|------|
| A | Static banner at the top with icon 💡 and text “Scopri la proposta curricolare”. | No JavaScript, instantly visible. | Takes vertical space. |
| B | Tooltip on hover over the “Curriculum” button. | Contextual guidance, low visual intrusion. | Requires minimal JS. |
| C | Side card “Inizia qui” with a call‑to‑action button. | Strong visual hierarchy, highlights next step. | Requires layout restructuring. |
| D | Pulse animation on an onboarding icon. | Subtle attention‑grabber, low code. | May distract some users. |

## Comparative Matrix
- **Visibility**: A > C > B > D
- **UI Impact**: C > A > B > D
- **Implementation complexity**: A (0) > D (min) > B (light) > C (medium)

## Recommended Solution
Adopt **Alternative A** – a static banner (`RECOMMENDED_ACTION_CALLOUT`). This meets all requirements while keeping the implementation simple (pure HTML/CSS), ensuring immediate visibility without runtime changes.

## Next Steps
1. Implement the banner in `index.html` and `_published_snapshot/netlify-current/index.html`.
2. Move to `CML-343 — Home Onboarding Cue Runtime Microfix`.

**Verdict**: `CML_342_HOME_ONBOARDING_CUE_SOLUTION_DESIGN_COMMITTED_PUSHED`
