# CML-226 — Multi-discipline generalization: hardcoded Tecnologia audit and runtime increment

## Start commit

`c8ceb8e` (CML-225S, origin/main aligned)

## Files modificati

- `_published_snapshot/netlify-current/index.html` — runtime modificato
- `docs/03_execution/CML-226.md`
- `report/CML-226_multi_discipline_generalization_hardcoded_tecnologia.md`
- `docs/REPO-MOVELOG.md`

## Hardcoded Tecnologia occurrences found

### Generalized in this slice (8 categories):

1. **CSS classes** (10): `.tecnologia-export-panel/header/title/badge/desc/actions` + `.tecnologia-md-preview` + media query + print rule → `.disc-export-*` / `.disc-md-preview`
2. **HTML ids** (2): `tecnologia-export-panel` → `disc-export-panel`, `tecnologia-md-preview` → `disc-md-preview`
3. **HTML button ids** (2): `btn-copy-tec-md` → `btn-copy-disc-md`, `btn-dl-tec-md` → `btn-dl-disc-md`
4. **JS export functions** (3+1): `generateTecnologiaBozza` → `generateDiscBozza`, `copyTecnologiaMarkdown` → `copyDiscMarkdown`, `downloadTecnologiaMarkdown` → `downloadDiscMarkdown`, `_tecnologiaMarkdownCache` → `_discMarkdownCache`
5. **JS show/hide logic**: removed `selDisc === 'Tecnologia'` condition — export panel now always visible for any discipline
6. **Default discipline**: `selDisc="Tecnologia"` → `selDisc=DISCIPLINE[0]`; `DEFAULT_PROFILE.disciplina:"Tecnologia"` → `DISCIPLINE[0]`
7. **Home page text** (1): "Valutazione ed evidenze da Tecnologia" → generic text mentioning discipline selector
8. **Didattica/UDA text** (2): "dal pacchetto Tecnologia strutturato" → "dal curricolo strutturato"

### Preserved as-is:

- **Norm panel** (`renderTecnologiaNorm`, `tecnologia-norm-panel`, inline `TECNOLOGIA_NORM` data) — historical legacy prototype from CML-062, clearly documented as read-only preview
- **TECNOLOGIA_MAPPA_DATI** and all per-discipline mappa data variables — each discipline has its own
- **DISCIPLINE_META["Tecnologia"]** — legitimate data key
- **DATA["Tecnologia"]** — legitimate curriculum content data
- **discKeyFromName lookup**: `"Tecnologia": "tecnologia"` — legitimate mapping table

## Runtime changes summary

All changes are backward-compatible:
- CSS: renamed classes (only references were in the same file)
- JS: renamed functions, cache variable, panel show/hide logic
- HTML: renamed ids and class attributes
- No curriculum JSON changed
- No `.cml` schema changed
- No validator/shape-test changes
- No service-worker/manifest changes
- No dependency additions

## Smoke results

| Check | Result |
|---|---|
| Validator | 14/14 PASS |
| Shape test | 14/14 PASS |
| Hash navigation | 14/14 PASS |
| `git diff --check` | PASS |
| No old `tecnologia-export-*` refs | CLEAN |
| New `disc-export-*` refs | VERIFIED |

## Next slices

1. CML-226S — Controlled push (if desired)
2. CML-227 — Additional hardcodes (if found but deferred)

## Finale

- **Start commit**: `c8ceb8e`
- **Final commit**: da definire dopo commit
- **Scope**: runtime + docs
- **Verdetto**: `CML_226_MULTI_DISCIPLINE_GENERALIZATION_READY`
