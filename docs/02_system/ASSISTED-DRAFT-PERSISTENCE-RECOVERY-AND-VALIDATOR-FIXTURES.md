# Assisted Draft Persistence, Recovery and Validator Fixtures

## Decision

The assisted curriculum workflow must persist review work locally, recover safely from interruptions and validate every imported or exported draft before it advances to the next human role.

This contract governs future `assisted_curriculum_draft` packages. It does not modify the current runtime, React application, canonical curriculum data or `.cml` schema.

## Product objective

A non-technical teacher must be able to stop and resume review without losing selected sources and versions, generated suggestions, human edits and decisions, open conflicts, audit history or export history.

Recovery must never silently replace newer work, accept corrupted content or alter canonical curriculum data.

## Storage boundary

The first implementation is local-first. Permitted layers are in-memory working state, browser-local persistent storage, explicit local export and explicit user-created backup.

Excluded are remote databases, hidden cloud synchronisation, account scraping, automatic source upload, telemetry and personal student data.

Canonical curriculum records remain read-only and outside assisted-draft storage.

## Logical records

```yaml
assistedDrafts:
  packageId: committed draft package
sourceRegistry:
  sourceId: metadata and optional local-copy reference
recoverySnapshots:
  packageId: latest recoverable snapshot
exportHistory:
  exportId: export metadata
validatorReports:
  reportId: latest report
```

## Persisted envelope

```yaml
recordType: assisted_draft_record
recordVersion: positive integer
packageId: stable UUID
packageVersion: positive integer
savedAt: ISO-8601 timestamp
saveReason: manual | autosave | import | recovery | export_checkpoint
contentHash: deterministic hash
sourceRegistryHash: deterministic hash
reviewSummaryHash: deterministic hash
payload: assisted_curriculum_draft
```

This envelope is implementation guidance only and does not amend the current `.cml` schema.

## Atomic save

A save succeeds only when package invariants pass, derived counts and hashes are recalculated, the new record is written and read back, hashes match, and the previous committed version remains recoverable until success is confirmed.

A failed save leaves the last valid package unchanged.

## Autosave

Autosave may run after a debounced semantic change: source changes, suggestion generation/edit, review-state transitions, conflict changes, rationale/note changes or target remapping.

It must not run solely because of scrolling, focus movement, panel toggles, filters or unfinished text composition.

The UI exposes `Salvataggio in corso`, `Salvato localmente` or a clear failure state.

## Recovery snapshot

A recovery snapshot is separate from the committed package and includes package/version IDs, snapshot time, base version, pending semantic changes, source references, review summary, unresolved conflicts and content hash.

It is never canonical or institutionally approved.

## Startup recovery

At startup compare committed, recovery and imported versions. Automatic replacement is forbidden.

When versions diverge, show version, timestamp, reviewed counts, unresolved conflicts, source changes and integrity status.

Allowed actions are keep current, restore recovery as a new version, retain import as a separate draft, export both or cancel without changes.

## Restore rules

Restore validates the snapshot, preserves current work, creates a new package version, appends `recovery_completed`, retains the source snapshot hash and reports success/failure. It never rewrites history or lowers the version.

## Source copies

Source metadata and source content are distinct. For web sources preserve exact URL, acquisition time, hash, publisher, title, locator and optional bounded excerpt. Never assume a current page equals the reviewed version.

## Storage pressure

When space is insufficient, do not delete drafts automatically or mark a partial write valid. Explain failure, offer metadata-only retention where safe and explicit export, and preserve the last valid version.

## Import validation pipeline

```text
read bytes
→ parse
→ validate type/version
→ validate invariants
→ validate target identifiers
→ validate source references
→ validate state history
→ recalculate derived values
→ verify hashes
→ produce report
→ explicit confirmation
→ persist as new or separate version
```

No import modifies current work before validation and confirmation succeed.

## Severity model

- `fatal`: package cannot be opened safely;
- `blocking`: inspectable but cannot advance/export;
- `warning`: continuation requires visible acknowledgement;
- `info`: explanatory only.

Severity never depends on model confidence.

## Validator report

```yaml
reportId: stable UUID
validatedAt: ISO-8601 timestamp
validatorId: assisted-draft-validator
validatorVersion: semantic version
packageId: optional
packageVersion: optional
result: valid | valid_with_warnings | invalid
findings:
  - code: stable code
    severity: fatal | blocking | warning | info
    path: package location
    message: plain-language explanation
    relatedIds: []
summary:
  fatal: integer
  blocking: integer
  warning: integer
  info: integer
readiness:
  inspectable: boolean
  importable: boolean
  teacherExportable: boolean
```

Reports contain no prompts, hidden reasoning or personal data.

## Stable validator codes

```text
ADP-001 unsupported_package_type
ADP-002 unsupported_schema_version
ADP-003 canonical_write_not_false
ADP-004 human_validation_not_true
ADP-005 duplicate_package_identifier
ADP-006 duplicate_suggestion_identifier
ADP-007 unresolved_source_reference
ADP-008 invalid_target_identifier
ADP-009 impossible_state_transition
ADP-010 missing_required_decision_note
ADP-011 unresolved_blocking_conflict
ADP-012 stale_source_unacknowledged
ADP-013 derived_count_mismatch
ADP-014 content_hash_mismatch
ADP-015 source_hash_mismatch
ADP-016 invalid_audit_chain
ADP-017 missing_original_generated_text
ADP-018 accepted_item_without_evidence
ADP-019 recovery_snapshot_older_than_base
ADP-020 storage_record_incomplete
ADP-021 unknown_fields_preserved
ADP-022 personal_data_suspected
ADP-023 target_registry_version_missing
ADP-024 target_deprecated_without_acknowledgement
ADP-025 round_trip_semantic_mismatch
```

Codes are stable contracts; wording may improve without changing meaning.

## Fail closed

Block import or advancement for unsupported type/version, canonical-write permission, missing human validation, duplicate IDs, unresolved sources, invalid targets, impossible state history, open blocking conflicts, accepted items without evidence, inconsistent hashes/counts, corrupted audit history or suspected student data pending removal.

## Warnings

Warnings include stale but inspectable sources, deprecated targets with successors, unknown safe fields, acknowledged evidence-version differences, low-confidence mappings already human-reviewed and storage pressure without data loss.

## Fixture corpus

Reserved directory:

```text
curman-react/fixtures/assisted-drafts/
```

This slice defines fixtures but does not add runtime files.

### Valid

1. `valid-minimal-single-source.json`
2. `valid-multi-source-reviewed.json`
3. `valid-teacher-edited.json`
4. `valid-conflict-resolved.json`
5. `valid-round-trip.json`

### Warning

6. `warning-stale-source.json`
7. `warning-deprecated-target.json`
8. `warning-unknown-field.json`
9. `warning-low-confidence-reviewed.json`

### Invalid structure

10. `invalid-unsupported-version.json`
11. `invalid-canonical-write-true.json`
12. `invalid-human-validation-false.json`
13. `invalid-duplicate-suggestion-id.json`
14. `invalid-missing-source.json`
15. `invalid-target-id.json`

### Invalid workflow

16. `invalid-direct-institutional-approval.json`
17. `invalid-missing-decision-note.json`
18. `invalid-open-blocking-conflict.json`
19. `invalid-accepted-without-evidence.json`
20. `invalid-audit-chain.json`

### Integrity and recovery

21. `invalid-content-hash.json`
22. `invalid-derived-counts.json`
23. `recovery-newer-than-committed.json`
24. `recovery-older-than-committed.json`
25. `recovery-divergent-versions.json`
26. `storage-incomplete-record.json`
27. `round-trip-semantic-mismatch.json`

### Privacy

28. `invalid-suspected-student-data.json`

## Fixture manifest

```yaml
fixtureId: stable identifier
file: relative path
category: valid | warning | invalid | recovery | privacy
expectedResult: valid | valid_with_warnings | invalid
expectedCodes: []
expectedReadiness:
  inspectable: boolean
  importable: boolean
  teacherExportable: boolean
```

The test runner fails when a fixture lacks a manifest entry or a manifest entry lacks a file.

## Semantic round trip

For valid packages:

```text
import → normalize → persist → export → re-import
```

must preserve package/suggestion identity, sources/hashes, original generated text, decisions, conflicts, audit semantics, target mappings, `humanValidationRequired: true` and `canonicalWriteAllowed: false`.

Formatting and property order may differ.

## Backup and deletion

Backup includes drafts, source metadata, explicitly selected local source copies, recovery snapshots, validator reports, export-history metadata, format version and integrity manifest. Restore is additive by default.

Deletion requires confirmation and explains that canonical data is unaffected. No hidden retention is permitted.

## Accessibility

Persistence and recovery interfaces require status announcements, visible local timestamps with machine-readable values, keyboard-operable version selection, non-colour integrity indicators, plain-language findings, focus restoration, no automatic restore and confirmation before destructive deletion.

## Test requirements before runtime

The validator suite must prove fixture/manifest parity, stable codes, fail-closed behaviour, warning acknowledgement, unchanged current work after failed import, preserved committed version after failed save, versioned recovery, semantic round trip, additive backup restore, no personal data, no canonical writes and no effect on existing `.cml` role files.

## MVP boundary

First runtime scope remains Tecnologia, one school order, deterministic local processing, one assisted draft at a time, browser-local persistence, manual export/backup, fixture validator, no cloud sync and no canonical promotion.

## Gate for CML-525F

CML-525F may define deterministic source-to-target mapping and the review companion only after CML-525B/C/D and this contract are accepted.

Runtime remains blocked until fixture files, validators and human-review interaction specifications exist.

## Verdict

```text
CML_525E_ASSISTED_DRAFT_PERSISTENCE_RECOVERY_AND_VALIDATOR_FIXTURES_READY_FOR_REVIEW_DOCS_ONLY
```
