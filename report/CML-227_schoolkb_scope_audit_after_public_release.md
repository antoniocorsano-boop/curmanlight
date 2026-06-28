# CML-227 — SchoolKB scope audit after public release and multi-discipline generalization

## Start commit

`26bb195` (CML-226S, aligned)

## Files inspected

- `README.md`
- `docs/02_system/SCHOOLKB-DRIVE-CONNECTOR-CONTRACT.md`
- `docs/02_system/SCHOOL-WORKSPACE-DRIVE-SETUP-CONTRACT.md`
- `docs/02_system/EVIDENZE-UDA-WORKFLOW-CONTRACT.md`
- `docs/02_system/UX-MENU-ACTION-CONTRACT.md`
- Docs 04_user (20 files)
- Reports SKB-001, CML-178 through CML-226
- `_published_snapshot/netlify-current/index.html` (tab Fonti)
- `content/curriculum/*.normalized.json` (fonte field coverage)

## SchoolKB problem definition

SchoolKB was framed as a Google Drive-based knowledge base for norms, curricular sources, and collaboration. Its intended purposes were:

1. Consultare documenti normativi
2. Consultare fonti curricolari per disciplina
3. Collegare fonti a discipline/nuclei/evidenze
4. Supportare validazione dipartimentale
5. Supportare UDA

**Current state assessment**: All five purposes are already met by the existing CurManLight tool without SchoolKB:

1. Tab Fonti: 12+ static reference cards with institutional, national, and European sources
2. Fonte field: 142/142 units across 14 disciplines carry source references
3. Evidence/UDA workflow already links discipline/nuclei/evidenze
4. `.cml` workflow covers department validation
5. UDA draft preview + Markdown export covers teacher planning

## Existing source/doc readiness

| Source type | Status |
|---|---|
| Tab Fonti (normativa) | 12+ reference cards including IN 2012, PTOF, RAV, EU framework, DigComp, Agenda 2030 |
| Fonte field per unit | 142/142 units across 14 disciplines (100% coverage) |
| User documentation (04_user) | 20 files covering pilot, observation, department, roles; none mention SchoolKB |
| SKB-001 contract | Complete technical/UX/privacy contract for Drive connector (210 lines) |

## Options compared

| Option | Effort | Value vs current state | Risk |
|---|---|---|---|
| A — Static source index | Low | Low (already exists as Fonti tab) | Minimal |
| B — Discipline-linked panel | Medium | Medium (data exists, no user request) | Minimal |
| C — Evidence/UDA layer | Medium-high | Low (workflow already works) | Medium (overlap) |
| D — `.cml` workflow help | Low | Low (already documented) | Minimal |
| **E — Defer SchoolKB** | **None** | **None needed** | **None** |

## Recommendation

**E — Defer SchoolKB indefinitely.**

Rationale:
- The Fonti tab already provides a comprehensive static knowledge base
- 142/142 units carry source references embedded in curriculum data
- Evidence/UDA/`.cml` workflows operate independently and are complete
- SchoolKB would introduce OAuth, token lifecycle, Drive API dependency — complexity without demonstrated user need
- The SKB-001 contract already defines SchoolKB as optional, parallel, and disabled by default — this recommendation confirms that status as final
- No blocking or requested feature requires SchoolKB

## Rejected alternatives

| Alternative | Rationale |
|---|---|
| A (Static source index) | Fonti tab already sufficient |
| B (Discipline-linked panel) | Creates runtime code without demonstrated need |
| C (Evidence/UDA support) | Would couple independent workflows |
| D (`.cml` help layer) | Already covered by user guides |

## Finale

| Field | Value |
|---|---|
| Start commit | `26bb195` |
| Final commit | da definire |
| Scope | docs-only |
| No runtime | Confirmed |
| No JSON | Confirmed |
| No SchoolKB implementation | Confirmed |
| No deploy | Confirmed |
| No push | Confirmed |
| No secrets | Confirmed |
| Verdict | `CML_227_SCHOOLKB_DEFERRED_CONFIRMED` |
| Next recommendation | CML-228 — decide next cycle (release maintenance, UX menu action, or close functional cycle) |
