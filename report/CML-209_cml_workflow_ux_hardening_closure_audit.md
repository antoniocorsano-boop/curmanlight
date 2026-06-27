# CML-209 - CML_WORKFLOW_UX_HARDENING_CLOSURE_AUDIT

## 1. Baseline

| Item | Value |
|---|---|
| Repo | `curmanlight` |
| Branch | `main` |
| Start commit | `96826aa` |
| `origin/main` at start | `96826aa` |
| Working tree at start | Clean |
| Slice type | Closure audit docs-only |
| Deploy | None |
| Push | None |
| Secrets | None |

## 2. Cycle Summary: CML-199 → CML-208S

| # | Slice | Type | Outcome |
|---|---|---|---|
| 1 | CML-199 | Contract | `.cml v1.0` schema compatibility contract defined |
| 2 | CML-200 | Runtime hardening | Import/export validation hardened |
| 3 | CML-201 | Smoke E2E | Teacher→department→referent 33/33 PASS |
| 4 | CML-202 | Readiness gate + push | Controlled push, public 14/14 |
| 5 | CML-203 | Test remediation | BOM shape-test fix, 14/14 PASS restored |
| 6 | CML-205 | Security hardening | Drive endpoint allowlist, 21/21 PASS |
| 7 | CML-206 | Audit | Multi-discipline package format: Option A (keep batch) |
| 8 | CML-207 | Audit contract | Batch import UX clarity contract defined |
| 9 | CML-208 | Runtime UX micro-increment | Helper text, mixed-discipline list, duplicate chip, summary banner |
| 10 | CML-208S | Push | UX increment pushed, public smoke PASS |

## 3. Final Operational State

### .cml v1.0 Schema
- Stable and backward compatible
- Accepted file types: `teacher_proposal`, `department_outcome`
- `schemaVersion: "1.0"` enforced; missing accepted as legacy with warning
- No formal multi-discipline package format introduced (CML-206 Option A)

### Validation
- Hardened per CML-200
- Structured codes: blocking (`not_recognizable`, `invalid_json`, `wrong_type`, `missing_data`, `unsupported_schema`, `too_large`) and warnings (`legacy_version`, missing semantic fields, `duplicate`, `mixed_discipline`, `discipline_mismatch`)
- Item-level warnings for `id`, `proposta`, `motivazione`, `fonte` without blocking

### Batch Import UX
- Multi-file selection with helper text
- Mixed-discipline warning lists actual discipline names
- Duplicate chip visible in referent (aligned with department)
- Compact summary banner after import

### Drive Endpoint
- Allowlist hardened per CML-205
- HTTPS only, explicit host allowlist (`drive.google.com`, `docs.google.com`)
- Reject: localhost, private IPs, raw IPs, credentials, malformed URLs, non-HTTPS protocols
- Manual `.cml` fallback always available

### Public Runtime
- GitHub Pages: https://antoniocorsano-boop.github.io/curmanlight/
- HTTP 200 OK, 14/14 disciplines visible
- Hardened validators and UX changes reflected publicly

## 4. Validation Status

| Check | Result |
|---|---|
| JSON validator | 14/14 PASS |
| Runtime shape test | 14/14 PASS |
| Public GitHub Pages | 200 OK, 14/14 disciplines |
| Git alignment | main == origin/main at `96826aa` |

## 5. Deferred UX Options

| Option | Rationale for Deferral |
|---|---|
| Preview panel before import | P1 but requires significant new UI state; batch import works; nice-to-have |
| Drag-and-drop | P3; adds complexity without strong demand |
| Reset/clear import button | P3; reload page is acceptable |
| Richer recovery guidance | P2; current messages are sufficient for guided recovery |

These deferred items do not block closure because the current workflow is functional, tested, and publicly stable.

## 6. Next Recommended Slice

**CML-204** — Educazione Fisica detailed gap model (content-focused work).

Alternative: optional UX follow-up slice for preview panel, drag-and-drop, or richer recovery guidance as separate incremental work.

## 7. Verification

| Check | Result |
|---|---|
| `git status` — clean | YES |
| HEAD at `96826aa` | YES |
| `origin/main` at `96826aa` | YES |
| JSON validator 14/14 PASS | YES |
| Shape test 14/14 PASS | YES |
| `git diff --check` | PASS |
| Secret scan | PASS |
| No deploy | YES |
| No push | YES |
| No secrets | YES |