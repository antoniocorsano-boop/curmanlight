# MAINTENANCE POLICY AND KNOWN-LIMITS REGISTER

## 1. Maintenance Modes

### 1.1 Documentation-only Maintenance

- Scope: `docs/`, `report/`, `CLAUDE.md`, `REPO-MOVELOG.md`
- No runtime impact
- Required gates: `git status -sb`, `git diff --check`, secret scan
- Validator/shape-test: not required

### 1.2 Smoke/verification Maintenance

- Scope: Running validation and recording results
- No code changes
- Required gates: All preflight checks
- Validator/shape-test: run and record baseline

### 1.3 Microcopy Correction

- Scope: Typo, text improvements, non-behavioral changes
- Required gates: `git diff --check`, secret scan
- Validator/shape-test: optional

### 1.4 Defect Triage

- Scope: Classifying and documenting known limitations
- No code changes
- Required gates: Issue review, documentation update

### 1.5 Deferred Feature Review

- Scope: Periodic review of deferred items
- No code changes unless explicitly scoped
- Required gates: CML-NNN selection cycle

## 2. Known-Limits Register Format

| Field               | Description                                    |
| ------------------- | ---------------------------------------------- |
| ID                  | Unique identifier (e.g., CML-KNOWN-001)        |
| Title               | Brief description                              |
| Category            | Runtime, Data, Workflow, Governance, Deferred  |
| Severity            | P0, P1, P2, P3                                 |
| Status              | Deferred, Under Review, Not Planned, Won't Fix |
| Rationale           | Why this limitation exists                     |
| Reopening Condition | Trigger to reconsider                          |
| Future Slice Type   | Required type if reopened                      |

## 3. Known Limitations (Seeded)

| ID            | Title                               | Category   | Severity | Status      | Rationale                                              | Reopening Condition             | Future Slice Type        |
| ------------- | ----------------------------------- | ---------- | -------- | ----------- | ------------------------------------------------------ | ------------------------------- | ------------------------ |
| CML-KNOWN-001 | SchoolKB deferred                   | Deferred   | P3       | Deferred    | CML-227: Fonti tab + `fonte` field cover 142/142 needs | CML-227 reopen request          | SKB/SchoolKB             |
| CML-KNOWN-002 | No `.cml` UDA package format        | Workflow   | P3       | Not Planned | UDA draft is Markdown preview/download only            | Explicit UDA serialization need | `.cml` schema            |
| CML-KNOWN-003 | No persistent UDA model             | Workflow   | P3       | Deferred    | Local-first design, no backend                         | Backend persistence requirement | UDA persistence          |
| CML-KNOWN-004 | Favicon absent                      | Polish     | P3       | Deferred    | Low priority, does not affect functionality            | Branding requirement            | Public polish            |
| CML-KNOWN-005 | No backend/OAuth capability         | Governance | P2       | Not Planned | Static web app architecture                            | OAuth workflow need             | Runtime increment or SKB |
| CML-KNOWN-006 | No student personal data/grades     | Governance | P0       | Not Planned | Privacy design principle                               | Policy change                   | Not applicable           |
| CML-KNOWN-007 | No automatic institutional approval | Governance | P1       | Not Planned | Tool supports, does not replace Collegio Docenti       | Workflow change                 | Not applicable           |
| CML-KNOWN-008 | No AI Act legal certification claim | Governance | P0       | Not Planned | Educational tool, not certified AI system              | Legal requirement               | Not applicable           |

## 4. What Is Not a Bug

The following are **intentional design decisions**, not defects:

- Absence of backend
- Absence of OAuth
- Absence of SchoolKB implementation
- Absence of persistent UDA model
- Absence of automatic validation
- Absence of claimed institutional/approval authority
- Absence of AI Act legal certification

## 5. Issue Severity Model

| Severity            | Description                                        |
| ------------------- | -------------------------------------------------- |
| P0 Blocker          | Privacy, security, legal compliance risk           |
| P1 High Risk        | Breaks core workflow or public availability        |
| P2 Maintenance Risk | Risk of future maintenance or compatibility issues |
| P3 Polish/Deferred  | Cosmetic or future enhancement                     |

## 6. Reopening Triggers

A known limitation may be reopened for implementation when:

1. Legal/regulatory change requires it
2. School workflow explicitly requires it
3. User-tested blocker (P0/P1) surfaces
4. Curriculum data correction affects it
5. Public availability/deployment problem occurs
6. Validator/shape regression affects it

## 7. Maintenance Change Gates

Every slice must pass:

- `git status -sb` → clean or authorized
- `git diff --check` → PASS
- Secret scan → clean
- Validator → 14/14 PASS (when JSON/runtime involved)
- Shape test → 14/14 PASS (when runtime involved)
- GitHub Pages smoke → HTTP 200 (for public checks)

## 8. Future-Cycle Classification

| Type                       | Scope                                                                    |
| -------------------------- | ------------------------------------------------------------------------ |
| docs-only                  | Documentation, microcopy, movelog, known-limits                          |
| runtime microfix           | Minimal CSS/JS edits to `_published_snapshot/netlify-current/index.html` |
| curriculum data correction | `content/curriculum/*.normalized.json` only                              |
| `.cml` schema evolution    | `.cml` format, export/import JS changes                                  |
| SchoolKB revisit           | SchoolKB contract implementation                                         |
| public polish              | Favicon, branding, non-functional improvements                           |
| release/freeze closure     | Final verification and closure gates                                     |

## 9. CML-238 Recommended Scope

- Freeze closure gate verification
- Public smoke test
- Confirm maintenance register is usable
- No new feature work authorized

---

_Policy established in CML-237, effective immediately for all maintenance work._
