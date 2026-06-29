# OPS-PREFLIGHT-POLICY-CONTRACT

## 1. Slice Lifecycle States

Every slice passes through these states in order:

| State                | Description                                     | Gate                              |
| -------------------- | ----------------------------------------------- | --------------------------------- |
| Selection            | Choose what to do next, document options A-G    | CML-NNN selection doc             |
| Audit                | Research/inspect before implementation          | CML-NNN audit doc                 |
| Implementation       | Apply changes (runtime, JSON, docs, etc.)       | Commit with scope enforcement     |
| Smoke                | Validate changes locally                        | Validator, shape test, hash smoke |
| Controlled Push      | Push only if authorized                         | Push + post-push verification     |
| Closure Gate         | Verify cycle completeness, document limitations | CML-NNN closure doc               |
| Next-Cycle Selection | Choose next slice                               | CML-NNN selection doc             |

Slices smaller than a full cycle may combine states (e.g., `S` push slices are single-commit).

## 2. Slice Types

| Type                        | Scope                                  | Validation Gates                                     |
| --------------------------- | -------------------------------------- | ---------------------------------------------------- |
| docs-only                   | `docs/`, `report/`, movelog only       | diff-check, secret scan                              |
| runtime microfix            | `index.html` CSS/JS micro-edits        | validator, shape test, hash smoke, viewport smoke    |
| runtime increment           | `index.html` new feature               | validator, shape test, full workflow smoke           |
| curriculum JSON             | `content/curriculum/*.normalized.json` | validator required, shape test if runtime-integrated |
| `.cml` schema/export-import | `.cml` format, export/import JS        | backward compat, smoke both ways                     |
| OPS/tooling contract        | `docs/02_system/`, `CLAUDE.md`, skills | diff-check, secret scan                              |
| public smoke/release gate   | verification only, no code changes     | GH Pages HTTP 200, full workflow smoke               |
| sync                        | `git push origin main`                 | pre-push checklist, post-push alignment              |

## 3. Mandatory Preflight Checks (every slice)

```bash
# 1. Working tree
git status -sb

# 2. Alignment
git rev-parse HEAD
git rev-parse origin/main
git log --oneline origin/main..HEAD

# 3. Expected start commit must match HEAD
# 4. Working tree must be clean (unless explicitly authorized)
# 5. Allowed/forbidden file scope must be declared before any edit
# 6. Push/deploy authorization status: authorized or not
```

## 4. Mandatory Validation Gates by Slice Type

### docs-only / OPS contract

- `git diff --check`
- Targeted secret-pattern scan
- Confirm no runtime/JSON/tool changes in `git diff --name-only`

### runtime microfix / increment

- `node tools/validate-cml-normalized-curriculum.mjs` → 14/14 PASS
- `node tools/test-runtime-mappa-dati-shape.mjs` → 14/14 PASS
- Hash/navigation smoke (all 14 disciplines)
- Representative viewport smoke (360, 390, 400, 768, 1024, desktop)
- `git diff --check`
- Secret scan

### curriculum JSON data change

- Validator → PASS
- Before/after structure diff
- Shape test if discipline is already runtime-integrated
- No runtime change unless authorized

### `.cml` schema/export-import change

- Backward compatibility verified
- Export smoke (create `.cml`, verify structure)
- Import smoke (re-import, verify no data loss)

### controlled push

```bash
git status -sb
git log --oneline origin/main..HEAD   # only expected commits
git diff --check
# push only if explicitly authorized
git push origin main
git status -sb                         # verify alignment
git rev-parse HEAD
git rev-parse origin/main
```

### public smoke

- `curl -s -o /dev/null -w "%{http_code}" <URL>` → 200
- App loads (representative content visible)
- Curriculum 14/14 selectable
- Evidence panel works
- UDA draft panel works
- Markdown copy/download works
- `.cml` export/import present

## 5. Controlled Push Policy

1. Push **only** when slice scope explicitly authorizes `push`.
2. Before push, always run `git log --oneline origin/main..HEAD` and confirm every commit.
3. Never push unknown/extra commits without naming them.
4. After push, verify:
   - `git status -sb` → clean
   - `git rev-parse HEAD` matches `git rev-parse origin/main`
5. No manual deploy unless explicitly authorized.
6. No `git push --force` ever.

## 6. Docs-Only Guard Policy

1. Allowed files: `docs/`, `report/`, `CLAUDE.md`, `.claude/skills/` contents.
2. Forbidden: `_published_snapshot/`, `content/curriculum/`, `tools/`, `sw.js`, `manifest.json`, `package.json`.
3. If `git diff --name-only` shows any non-allowed file, **stop and reclassify** the slice.
4. No runtime behavior changes in docs-only slices.

## 7. Runtime Microfix Policy

1. Diff must be minimal (single lines or small blocks).
2. No broad CSS refactor, no new workflow.
3. Preserve existing workflows: curriculum, evidence, UDA, Markdown, `.cml`.
4. Preserve localStorage compatibility (`cml_evidenze_state`).
5. Preserve mobile/desktop layout behavior.
6. After push, verify public GH Pages smoke.

## 8. JSON/Data Change Policy

1. Inspect before/after structure with `git diff content/curriculum/`.
2. Validator required regardless of discipline count.
3. If discipline is already runtime-integrated, shape test required.
4. No automatic runtime sync — regeneration requires explicit slice.

## 9. `.cml` Workflow Policy

1. Schema changes require a separate contract in `docs/02_system/`.
2. Backward compatibility: old `.cml` files must still import.
3. Export smoke + import smoke required.
4. No silent format change.

## 10. Public Smoke Policy

1. Use **GitHub Pages URL** `https://antoniocorsano-boop.github.io/curmanlight/`.
2. Check HTTP 200.
3. Verify app loads with representative content.
4. Verify curriculum 14/14, evidence, UDA, fonti, export tabs.
5. Verify mobile bottom bar and tabbar navigation.
6. No manual deploy unless slice explicitly authorizes it.

## 11. Secret/Privacy Guard

1. Forbidden in commits: API keys, tokens, client IDs, client secrets, bearer tokens, `sk-...`, `-----BEGIN ...`, real OAuth tokens.
2. Forbidden in content: student personal data, grades, real student names.
3. Document false positives (e.g., `credentials` in URL validation source code).

## 12. Guard-Hook Principles

1. **Advisory first** — hooks warn, they do not block silently.
2. **No destructive automatic behavior** — no `git reset`, `git stash`, `git clean`.
3. **No automatic push** — push requires explicit slice authorization.
4. **No dependency on external services** — all checks run locally.
5. **Preserve vanilla/static project constraints** — no build step, no server, no database.
6. **Hook implementation** requires a separate slice with its own contract.
7. **Before any hook code**: define what it checks, what prevents it from running, and what it outputs on pass/fail.

## 13. Reusable Prompt Templates

### docs-only audit template

```
Expected HEAD: <commit>
Expected origin/main: <commit>
Scope allowed: <files>
Scope forbidden: <patterns>
Goal: <one-line>

Checks:
1. git status -sb
2. confirm alignment
3. inspect <references>
4. create audit docs
5. git diff --check
6. secret scan
7. confirm docs-only scope

Deliverable: commit "<type>: <message>"
```

### runtime microfix template

```
Expected HEAD: <commit>
Expected origin/main: <commit>
Goal: <minimal description>
Issues to fix: <list from audit>

Scope: index.html only, <N> lines max
Forbidden: new workflows, broad refactor, JSON, .cml

Checks:
1. git status -sb
2. validator 14/14
3. shape test 14/14
4. hash smoke
5. viewport smoke (360-1024+desktop)
6. git diff --check
7. secret scan

Smoke: evidence, UDA, Markdown, .cml
```

### controlled push template

```
Expected HEAD: <commit>
Expected origin/main: <commit>

Pre-push:
1. git status -sb
2. git log --oneline origin/main..HEAD
3. git diff --check
4. validator
5. shape test

Push:
git push origin main

Post-push:
1. git status -sb
2. verify HEAD == origin/main
3. curl URL → 200
4. public smoke (app loads, workflows OK)
```

### closure gate template

```
Expected HEAD: <commit>
Cycle: <N> — <description>

Checks:
1. git status -sb
2. confirm alignment
3. validator PASS
4. shape test PASS
5. public GH Pages HTTP 200 + app loads
6. fixed items re-verified
7. remaining limitations classified

Decision: A/B/C/D
- A: closed, no blockers
- B: closed with documented P2/P3 limitations
- C: follow-up required
- D: blocked
```

## 14. CML-OPS-006 Scope

OPS smoke and closure gate:

- Verify that templates and policy are usable in a real slice.
- Confirm no gaps in the preflight checklist.
- Confirm guard-hook principles are complete.
- Confirm all 14 contract sections are consistent.
- No executable hook required unless separately authorized in a future slice.
- Close OPS cycle C.
