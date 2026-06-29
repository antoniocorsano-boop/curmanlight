# STABLE-CANDIDATE-FREEZE-CONTRACT

## 1. Freeze Status

**CurManLight public stable candidate**

- Canonical public URL: `https://antoniocorsano-boop.github.io/curmanlight/`
- Release readiness verified in CML-224
- OPS guardrails completed in CML-OPS-006
- CLAUDE.md alignment completed in CML-234

## 2. Current Feature Inventory

| Feature                                   | Status | Reference                 |
| ----------------------------------------- | ------ | ------------------------- |
| Curriculum 14/14 discipline               | ✅     | validated/shaped          |
| `.cml` teacher proposal workflow          | ✅     | v1.0 hardened             |
| Department import/validation workflow     | ✅     | validated                 |
| Referent import/report workflow           | ✅     | validated                 |
| Evidence panel (marcatura evidenze)       | ✅     | 14/14 coverage            |
| UDA draft Markdown preview/copia/download | ✅     | localized, non-persistent |
| PWA / installabile su dispositivo         | ✅     | manifest, sw.js present   |
| Guida rapida in-app                       | ✅     | operational               |

## 3. Validation Baseline

- `node tools/validate-cml-normalized-curriculum.mjs` → 14/14 PASS
- `node tools/test-runtime-mappa-dati-shape.mjs` → 14/14 PASS
- `git diff --check` → PASS
- Secret scan → clean
- GitHub Pages smoke → HTTP 200

## 4. Frozen Baseline

The following are frozen and must not change without explicit new cycle authorization:

- Normalized data: 14/14 disciplines complete
- Runtime mappa: 14/14 disciplines integrated
- Evidence panel: 14/14 coverage
- UDA draft: Markdown export only, no persistence
- `.cml v1.0` workflow: schemaVersion enforcement, validation hardened
- OPS guardrails: skills, policy contract, templates in place
- Accessibility/responsive fixes: P1+P2 issues resolved

## 5. Allowed Post-Freeze Changes

Changes permitted without new cycle:

1. Documentation correction (README.md, docs/*)
2. Typo/microcopy correction (non-behavioral)
3. Smoke reports and validation run records
4. Known-limits register updates
5. Movelog entries

All must follow docs-only slice discipline with diff-check and secret scan.

## 6. Changes Requiring Explicit New Cycle

The following require a new CML-NNN selection + audit + implementation cycle:

1. Runtime feature change
2. Curriculum JSON update/new discipline
3. `.cml` schema/export-import change
4. SchoolKB implementation
5. UDA persistence or `.cml` UDA extension
6. Dependency additions
7. Service-worker/manifest changes
8. Public deployment/release workflow change

## 7. Maintenance Gates

Every slice must pass:

- `git status -sb` → clean or authorized
- `git diff --check` → PASS
- Secret scan → clean
- Validator → 14/14 PASS (when JSON/runtime involved)
- Shape test → 14/14 PASS (when runtime involved)
- Hash smoke → 14/14 (when runtime touched)
- GitHub Pages smoke → HTTP 200 (for public checks)

## 8. Known Limitations

_(Deferred gaps and non-goals)_

- SchoolKB deferred (CML-227)
- No `.cml` UDA package format
- No persistent UDA model
- Favicon absent (low-priority, deferred)
- No backend/OAuth capability
- No student personal data or grades stored

## 9. Privacy and Governance

- Local-first: all data remains on device
- No student personal data
- No grades stored
- Human validation required for curriculum changes
- No institutional approval claimed (tool supports but does not replace Collegio Docenti deliberation)

## 10. Release Naming

- Use **"public stable candidate"** in all documentation
- Do **not** claim final ministerial or institutional validation
- Tool status is **"ready for use"** per CML-224

## 11. CML-237 Scope

- Maintenance policy and known-limits register in `docs/04_maint/`
- Document ongoing validation cadence
- Record any new deferred items

## 12. CML-238 Scope

- Freeze closure gate
- Public smoke verification
- Final readiness for extended use
