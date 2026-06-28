# CurManLight — Claude Code Project Memory

## 1. Project Identity

CurManLight (CML): vertical curriculum static web app for I.C. Calvario-Covotta.
PWA/mobile-first. HTML/CSS/JavaScript Vanilla. No backend required.
Source of truth: `_published_snapshot/netlify-current/`.
Public URL: https://antoniocorsano-boop.github.io/curmanlight/
Conservative integration (CML-001R): add, do not replace.

## 2. Current Consolidated State

- Normalized data: 14/14
- Runtime mappa: 14/14
- Validator: 14/14 PASS
- Shape test: 14/14 PASS
- GitHub Pages: HTTP 200 — stable candidate
- Evidence panel: 14/14
- UDA draft Markdown preview/download: available
- `.cml v1.0` workflow: hardened
- Accessibility/responsive cycle: closed (1 P1, 5 P2 fixed)
- OPS guardrails cycle: closed (policy contract, 3 skills, 4 templates)
- SchoolKB: deferred (CML-227 — Fonti tab + `fonte` field 142/142 sufficient)
- No remaining normalization work

## 3. Operating Rules

- One slice at a time, with explicit authorized scope
- Mandatory Git preflight before every slice
- Selective commits; `git diff --check` before every commit
- No push unless SYNC slice explicitly authorized
- No deploy unless explicitly requested
- No runtime changes in docs-only slices
- No `content/curriculum/` changes outside data preparation slices
- No `tools/` changes outside test/tool slices
- No new dependencies without contract
- Never commit credentials, client IDs, tokens, or secrets
- CML and SKB lines are separate; do not cross-contaminate

## 4. Slice Types

| Type | Scope |
|------|-------|
| docs-only | `docs/`, `report/`, `CLAUDE.md`, movelog — no runtime, no data |
| runtime microfix | `_published_snapshot/netlify-current/index.html` — minimal CSS/JS edits |
| runtime increment | `_published_snapshot/netlify-current/index.html` — new view/feature |
| curriculum JSON | `content/curriculum/*.normalized.json` only |
| `.cml` schema/export-import | `.cml` format, export/import JS |
| OPS/tooling contract | `docs/02_system/`, `CLAUDE.md`, `.claude/skills/` |
| public smoke/release gate | verification only — no code changes |
| sync | controlled push + post-push verification |
| SKB/SchoolKB | SchoolKB contract — no CML runtime |

## 5. Validation Commands

```bash
git status --short --branch
git diff --check
node tools/validate-cml-normalized-curriculum.mjs
node tools/test-runtime-mappa-dati-shape.mjs
```

Post-push public smoke: `curl -s -o /dev/null -w "%{http_code}" https://antoniocorsano-boop.github.io/curmanlight/` → 200

## 6. Report Format

- **Output finale breve**: task, commit, scope, verdict
- **Conferme obbligatorie**: type, invariants, no-secrets
- **Stato consolidato**: normalized/runtime/shape/GH Pages/OPS/SKB
- **Report completo**: only if requested or for complex audit/contract — otherwise just path + key decision

Avoid: long logs, wide box-drawing tables, duplicated content, internal reasoning.

## 7. SchoolKB Boundary

- SchoolKB is parallel to CML, not a dependency
- Deferred by CML-227 — Fonti tab and `fonte` field already cover 142/142 needs
- No OAuth/Drive runtime without dedicated SKB slice
- No real credentials or client IDs in the repository
- Maximum future OAuth scope: `drive.file`

## 8. Preflight Policy (OPS)

See `docs/02_system/OPS-PREFLIGHT-POLICY-CONTRACT.md` for full policy. Key rules:

- **Pre-push**: verify HEAD/origin alignment, `git log --oneline origin/main..HEAD`, validator, shape test, diff-check, secret scan
- **Docs-only**: `docs/`, `report/`, `CLAUDE.md`, movelog only — if other files appear, reclassify
- **Runtime microfix**: minimal diff, preserve all workflows, post-push public smoke
- **No executable hooks** without separate slice and contract
- **No manual deploy** unless explicitly authorized
- **No destructive auto-behavior** (no reset/stash/clean/force-push)

## 9. OPS Skills (`.claude/skills/`)

- `cml-sync` — controlled push and post-push verification
- `cml-docs-only-slice` — docs-only slice workflow
- `cml-readiness-audit` — discipline readiness audit before data prep

## 10. Next Recommended Slices

- CML-234S — controlled push (after CLAUDE.md alignment)
- CML-235 — post-alignment OPS smoke and next-cycle selection
