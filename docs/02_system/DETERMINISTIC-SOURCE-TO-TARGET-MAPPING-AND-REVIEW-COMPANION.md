# Deterministic Source-to-Target Mapping and Review Companion

## Decision

The first assisted curriculum implementation must use a deterministic, inspectable source-to-target mapping pipeline. It may propose curriculum targets, but it must not infer approval, create canonical identifiers or silently choose among ambiguous alternatives.

The interface must expose source evidence, proposed mapping and human decision in one coordinated review companion.

This contract is docs-only. It does not modify the historical runtime, React application, canonical curriculum data or the current `.cml` schema.

## Product objective

A non-technical teacher must understand which source passage produced a suggestion, which target is proposed, which rules matched, why alternatives exist and what human action is required.

## Input boundary

The deterministic mapper operates only on explicitly selected registered source versions, extracted text segments with stable locators, the read-only target registry from CML-525D, versioned rules and user-selected scope.

It must not use unrestricted crawling, hidden retrieval, student data, undocumented aliases or unversioned model output.

## Pipeline

```text
registered source version
→ deterministic segmentation
→ normalization
→ statement classification
→ scope filtering
→ target candidate retrieval
→ rule evaluation
→ score breakdown
→ ambiguity/conflict checks
→ suggestion
→ human review
```

The same source version, target-registry version and rule-set version must produce semantically identical output.

## Segment contract

Each segment retains a stable ID, source and source-version IDs, exact locator, original text, text hash, language, bounded heading/context information and extraction method.

OCR is excluded from the first MVP unless separately validated. Manual corrections preserve original extraction and an audit event.

## Normalization

Allowed operations are Unicode and whitespace normalization, unambiguous dehyphenation, case-insensitive comparison, punctuation-insensitive alias lookup, approved abbreviation expansion and removal of identified page furniture.

Normalization must not paraphrase or alter meaning. Original and normalized hashes remain inspectable.

## Candidate classes

- `objective_candidate`
- `knowledge_candidate`
- `skill_candidate`
- `competence_candidate`
- `methodology_candidate`
- `assessment_candidate`
- `scope_context`
- `source_metadata`
- `non_curricular`
- `ambiguous_statement`

Classification is rule-based and exposes matched rule IDs.

## Rule-set identity

Every mapping run records rule-set ID and version, target-registry version, generation timestamp and selected discipline, school order and curriculum version.

Any semantic rule change requires a new rule-set version.

## Rule families

### Scope

Filter by discipline, school order, curriculum version, source applicability, heading context and explicit exclusions.

Out-of-scope text may be shown as context but cannot be accepted without explicit remapping.

### Field

Use explicit normative labels, section headings, controlled verbs, known source structures and approved source templates.

No clear cue means `ambiguous_statement`, never an automatic default.

### Nucleus and target

Candidate retrieval may use exact IDs, approved aliases, controlled keyword sets, heading context and explicit cross-reference tables.

Aliases never become canonical identifiers. The mapper cannot create a new canonical target.

## Score model

Scores are decomposable review aids. Components may include exact identifier, exact alias, heading context, field cue, keyword coverage, source applicability, competing-target penalty and stale-source penalty.

The formula and thresholds are versioned. Scores never preselect acceptance or change review state.

## Confidence

- `high`: one valid target, explicit evidence, no competitor;
- `medium`: one leading target but interpretation remains;
- `low`: weak or incomplete evidence;
- `conflict`: incompatible candidates or sources;
- `unmapped`: no valid target.

## Ambiguity

A suggestion is ambiguous when top candidates are within the configured margin, multiple fields are plausible, scope is unclear, a segment contains multiple statements, a target is deprecated, evidence is incomplete or required identifiers are missing.

Ambiguous suggestions cannot be accepted until the user selects or edits the target.

## Conflicts

Blocking conflicts include incompatible targets, contradictory source versions, duplicate suggestions with incompatible text, applicability disagreement, registry mismatch, deprecated target without acknowledged successor and evidence-hash mismatch.

Warnings include low confidence, stale but inspectable sources, partial keyword coverage and manual override of the leading candidate.

## Duplicate detection

Use normalized source hash, source locator, target ID, normalized proposed-text hash and rule-set version.

Near duplicates may be grouped but never merged automatically.

## Suggestion output

Each suggestion retains stable identity, state, source evidence and segment IDs, proposed and original generated text, stable mapping IDs, ranked candidate targets, score breakdown, matched rules, confidence rationale, conflicts, `humanValidationRequired: true` and `canonicalWriteAllowed: false`.

## Review companion

Desktop uses three coordinated regions:

1. **Fonte** — identity, version, authority, locator and bounded context;
2. **Proposta** — generated text, selected target, alternatives, matched rules and confidence;
3. **Decisione** — accept, edit, reject, defer and conflict resolution.

On narrow screens the sequence is Fonte → Proposta → Decisione. Current suggestion, evidence and unsaved edits remain stable across steps.

## Source region

Show title, publisher, class, authority, exact version, acquisition date, locator, bounded excerpt, matched phrases, source warnings and wider-context access.

The excerpt must not imply it is the complete source.

## Proposal region

Show proposed text; discipline, order, nucleus, unit and field; leading and competing targets; matched deterministic rules; plain-language score breakdown; confidence/conflicts; and a field-level comparison with current canonical content when available.

Generated and canonical content must be visually and programmatically distinct.

## Decision region

Actions:

- `Accetta proposta`
- `Modifica e accetta`
- `Rifiuta`
- `Rimanda`
- `Scegli un altro target`
- `Segnala conflitto`

No action is preselected. Required reasons follow CML-525C.

## Editing

Preserve original and edited text, evidence, original and selected candidates, role label, timestamp, revision, note and audit event.

Changing target triggers revalidation and may invalidate a previous decision.

## Navigation

Provide previous/next suggestion, filters by state/confidence/source/conflict, derived progress, return to last reviewed item, unsaved-state and save-status indicators.

No automatic advancement unless enabled explicitly for the current session.

## Accessibility

Require logical tab order, keyboard operation, visible focus, accessible names for states and warnings, save/decision announcements, no colour-only distinctions, correct expansion state, assistive comparison of source/generated text, stable focus after decisions and announced mobile progress.

## Safe failure

When mapping fails, preserve the source segment, create incomplete or unmapped output, explain the missing requirement, permit manual target selection, never fabricate IDs, preserve completed decisions and leave canonical data untouched.

## Test matrix

Required cases include exact ID, approved alias, heading classification, ambiguous field, close candidates, unmapped source, deprecated target, stale source, source-version conflict, exact duplicate, near duplicate without merge, manual override, decision invalidation after remap, edited text preserving original, semantic round trip, mobile sequence, keyboard-only decision and failed mapping with no canonical change.

## MVP

Limited to Tecnologia, secondaria di primo grado, one explicitly selected source set, deterministic mapping, approved aliases, a small registry fixture, suggestion-by-suggestion review, no bulk acceptance, no external provider and no canonical promotion.

## Gate

Runtime begins only after CML-525B/C/D/E are accepted, mapping fixtures with expected outputs exist, companion interaction states are specified visually and a human pilot script is approved.

## Next slice

CML-525G should create the executable fixture corpus, validator interfaces and the first Tecnologia target-registry sidecar without implementing the complete production workflow.

## Verdict

```text
CML_525F_DETERMINISTIC_SOURCE_TO_TARGET_MAPPING_AND_REVIEW_COMPANION_READY_FOR_REVIEW_DOCS_ONLY
```
