# Stable Curriculum Mapping Identifiers and Target Registry

## Decision

Assisted curriculum suggestions must target stable curriculum identifiers, never display labels, array positions or free-text headings.

The registry defined here is a read-only semantic index over canonical curriculum data. It does not replace canonical files, does not grant write access and does not infer approval.

Every generated mapping must either resolve to a valid registry target or remain explicitly unresolved.

## Objective

Provide a durable reference system for:

- discipline;
- school order;
- curriculum version;
- nucleus;
- unit or section;
- target field;
- canonical statement;
- aliases and historical identifiers.

The system must remain stable when labels, ordering, presentation or punctuation change.

## Core principles

1. Identifiers are immutable once published.
2. Labels are editable metadata and never identity.
3. Array position is never identity.
4. Generated content cannot create canonical identifiers.
5. Missing or ambiguous mappings fail closed.
6. Deprecated identifiers remain resolvable through explicit aliases.
7. Registry generation is deterministic and reproducible.
8. Canonical data remain read-only during mapping and review.
9. All mappings retain the registry and curriculum version used.
10. Human validation remains mandatory.

## Identifier namespace

Recommended namespace:

```text
cml:<entity-type>:<stable-id>
```

Entity types:

- `discipline`;
- `order`;
- `curriculum-version`;
- `nucleus`;
- `unit`;
- `field`;
- `statement`;
- `target`.

Examples:

```text
cml:discipline:tecnologia
cml:order:secondaria-primo-grado
cml:curriculum-version:2025
cml:nucleus:tecnologia-vedere-osservare-sperimentare
cml:unit:tecnologia-materiali-processi
cml:field:objective
cml:statement:tec-s1-v2025-obj-0042
cml:target:tec-s1-v2025-nuc-vedere-objective
```

Identifiers must contain only lowercase ASCII letters, numbers and hyphens after the entity prefix.

## Identity hierarchy

```text
curriculum version
└── school order
    └── discipline
        └── nucleus
            └── unit or section
                └── field
                    └── statement
```

A mapping target may point to:

- a container target, such as a nucleus field;
- a precise statement;
- an unresolved candidate set when evidence is insufficient.

## Discipline registry

Each discipline entry must contain:

```yaml
id: cml:discipline:tecnologia
slug: tecnologia
canonicalLabel: Tecnologia
aliases:
  - Educazione tecnica
status: active
introducedIn: registry version
supersededBy: null
```

Rules:

- `slug` may be used for routing but does not replace `id`;
- labels and aliases must not be used as foreign keys;
- aliases are matching aids only;
- retired disciplines remain addressable with `status: deprecated`.

## School-order registry

Each order entry must contain:

```yaml
id: cml:order:secondaria-primo-grado
code: secondaria_primo_grado
canonicalLabel: Scuola secondaria di primo grado
aliases: []
status: active
```

The registry must reject ambiguous generic labels such as `secondaria` unless the user resolves the intended order.

## Curriculum-version registry

A curriculum version represents the canonical reference set used for a mapping.

```yaml
id: cml:curriculum-version:2025
label: Indicazioni 2025
status: current | previous | future | archived
effectiveFrom: optional date
effectiveTo: optional date
sourceIds: []
contentHash: deterministic canonical hash
```

A mapping must record the exact curriculum version and registry version used. A later canonical version must not silently retarget an existing suggestion.

## Nucleus registry

Each nucleus must have an identifier independent from its label:

```yaml
id: cml:nucleus:tecnologia-vedere-osservare-sperimentare
disciplineId: cml:discipline:tecnologia
orderIds:
  - cml:order:secondaria-primo-grado
canonicalLabel: Vedere, osservare e sperimentare
aliases: []
status: active
```

Changing punctuation or wording does not change the identifier when the conceptual nucleus remains the same.

A conceptual split or merge requires new identifiers and explicit relations:

```yaml
relations:
  splitFrom: []
  mergedFrom: []
  supersedes: []
  relatedTo: []
```

## Unit or section registry

A unit entry identifies a stable curricular container below a nucleus when the canonical model exposes one.

```yaml
id: cml:unit:tecnologia-materiali-processi
disciplineId: cml:discipline:tecnologia
orderId: cml:order:secondaria-primo-grado
nucleusId: cml:nucleus:tecnologia-vedere-osservare-sperimentare
canonicalLabel: Materiali e processi
status: active
```

If the canonical dataset has no stable unit concept, mappings must target the nucleus field rather than inventing a unit.

## Field registry

The initial controlled field vocabulary is:

```text
objective
knowledge
skill
competence
methodology
assessment
note
```

Each field has a stable identifier:

```text
cml:field:objective
cml:field:knowledge
cml:field:skill
cml:field:competence
cml:field:methodology
cml:field:assessment
cml:field:note
```

Unknown fields are not auto-normalised. They remain unresolved until a governance decision extends the vocabulary.

## Statement identifiers

A canonical statement identifier must be stored in canonical data or in a deterministic sidecar registry.

Recommended format:

```text
cml:statement:<discipline-code>-<order-code>-<version-code>-<field-code>-<stable-sequence>
```

The sequence is an opaque stable value, not the current array position.

Example:

```text
cml:statement:tec-s1-v2025-obj-0042
```

Statement identifiers must not be regenerated because text changes. Substantive replacement creates a new statement identifier and marks the previous one as superseded.

## Composite target identifiers

A container target combines version, order, discipline, nucleus or unit and field.

Example logical object:

```yaml
targetId: cml:target:tec-s1-v2025-nuc-vedere-objective
curriculumVersionId: cml:curriculum-version:2025
orderId: cml:order:secondaria-primo-grado
disciplineId: cml:discipline:tecnologia
nucleusId: cml:nucleus:tecnologia-vedere-osservare-sperimentare
unitId: null
fieldId: cml:field:objective
statementId: null
status: active
```

`targetId` is a registry key. Its meaning is carried by the referenced identifiers, not by parsing the display string.

## Target registry entry

Each target registry record must contain:

```yaml
targetId: stable identifier
registryVersion: positive integer
curriculumVersionId: stable identifier
orderId: stable identifier
disciplineId: stable identifier
nucleusId: optional stable identifier
unitId: optional stable identifier
fieldId: stable identifier
statementId: optional stable identifier
canonicalLabelPath: human-readable labels
status: active | deprecated | superseded | unresolved
aliases: []
relations: {}
canonicalContentHash: optional hash
introducedAt: ISO-8601 timestamp
updatedAt: ISO-8601 timestamp
```

The registry itself is non-authoritative for curriculum text. Canonical content remains in canonical datasets.

## Mapping reference in assisted drafts

Each suggestion must record:

```yaml
mapping:
  registryVersion: 1
  curriculumVersionId: cml:curriculum-version:2025
  targetId: cml:target:tec-s1-v2025-nuc-vedere-objective
  disciplineId: cml:discipline:tecnologia
  orderId: cml:order:secondaria-primo-grado
  nucleusId: cml:nucleus:tecnologia-vedere-osservare-sperimentare
  unitId: null
  fieldId: cml:field:objective
  statementId: null
  resolutionState: resolved
  candidateTargetIds: []
  rationale: plain-language explanation
```

Allowed `resolutionState` values:

- `resolved`;
- `ambiguous`;
- `unresolved`;
- `stale`;
- `deprecated_target`.

Only `resolved` mappings with active targets may proceed to teacher acceptance.

## Ambiguous mappings

When multiple targets are plausible:

```yaml
resolutionState: ambiguous
targetId: null
candidateTargetIds:
  - cml:target:...
  - cml:target:...
```

The interface must show candidate label paths and evidence. It must not choose the highest-confidence target automatically.

## Missing mappings

If no valid target exists:

```yaml
resolutionState: unresolved
targetId: null
candidateTargetIds: []
```

The user may:

- revise the mapping;
- choose a valid existing target;
- reject or defer the suggestion;
- request a separate governance change to the registry.

The user may not create a canonical target from the review interface.

## Registry versioning

The registry uses monotonically increasing integer versions.

A new registry version is required when:

- an identifier is added;
- a target is deprecated or superseded;
- aliases or relations change;
- target composition changes;
- a new curriculum version is registered.

Label-only corrections that do not affect matching may be released as a patch metadata update, but every exported package must still record the effective registry version.

## Deprecation and supersession

Identifiers are never deleted from an already published registry.

Deprecated records must include:

```yaml
status: deprecated
supersededBy: optional active identifier
deprecatedAt: timestamp
deprecationReason: plain-language explanation
```

Automatic migration is allowed only when there is one explicit, lossless successor and no human decision would change.

All other migrations require review and create an audit event.

## Canonical content changes

When canonical text changes:

### Editorial change

If meaning is unchanged:

- retain the statement identifier;
- update content hash;
- record revision metadata.

### Substantive replacement

If meaning changes:

- create a new statement identifier;
- mark the prior statement as superseded;
- preserve the relation;
- mark existing mappings as stale until reviewed.

### Split or merge

- create new identifiers;
- preserve source relations;
- never auto-distribute prior decisions across new targets.

## Deterministic registry generation

Registry generation must:

1. read canonical data without modifying it;
2. validate required identifiers;
3. detect duplicate identifiers;
4. detect orphaned references;
5. produce deterministic ordering;
6. calculate registry and canonical hashes;
7. fail without partial output when invariants are violated;
8. generate a human-readable audit report.

Two runs over identical canonical inputs must produce byte-equivalent semantic output, excluding generation timestamps where applicable.

## Sidecar strategy

Until stable identifiers exist directly in every canonical file, a sidecar registry may map canonical paths to stable identifiers.

Example:

```yaml
canonicalPath:
  disciplineSlug: tecnologia
  orderCode: secondaria_primo_grado
  nucleusIndex: legacy locator only
  field: obiettivi
  statementLegacyIndex: legacy locator only
stableId: cml:statement:tec-s1-v2025-obj-0042
```

Legacy indices may be used only to bootstrap the sidecar. They must not become public identifiers or package foreign keys.

The sidecar must include hashes to detect reorder or content drift.

## Target resolution algorithm

The deterministic resolver should apply:

1. exact stable identifier match;
2. explicit alias match within the same entity type;
3. canonical code match;
4. constrained label match within known discipline, order and version;
5. unresolved or ambiguous result.

Fuzzy similarity may propose candidates but cannot resolve a target automatically.

## Integrity checks

The registry validator must reject:

- duplicate identifiers;
- duplicate active targets with the same composition;
- references to missing entities;
- active targets using deprecated parents;
- circular supersession relations;
- unsupported fields;
- missing curriculum version;
- statement identifiers tied only to array positions;
- target records without readable label paths;
- aliases colliding within the same scoped entity class.

Warnings include:

- active target without statement-level identifiers;
- label drift with unchanged content hash;
- source version nearing expiry;
- unresolved legacy path.

## Review and export gates

A suggestion cannot be accepted or exported when:

- registry version is unsupported;
- target is unresolved or ambiguous;
- target or parent is deprecated without reviewed migration;
- curriculum version differs from the package target version;
- canonical hash changed after generation;
- required identifier references are missing;
- a blocking target conflict remains.

## User interface requirements

The review interface must show:

- readable label path;
- stable target identifier in expandable technical details;
- curriculum and registry versions;
- current, deprecated or stale state;
- candidate targets for ambiguous mappings;
- reason a target cannot proceed;
- explicit remapping action;
- no automatic target creation.

Technical identifiers must remain available for audit without becoming the primary language shown to non-technical teachers.

## Initial Tecnologia pilot registry

The first registry fixture must cover one controlled subset of Tecnologia for scuola secondaria di primo grado:

- discipline identifier;
- order identifier;
- one curriculum version;
- all canonical nuclei in the selected subset;
- controlled field identifiers;
- stable unit identifiers where real units exist;
- stable statement identifiers for the selected objectives and knowledge;
- aliases for known historical labels;
- at least one deprecated or superseded fixture;
- at least one ambiguous mapping fixture.

## Required test fixtures before runtime

1. valid exact target resolution;
2. alias resolution;
3. ambiguous label collision;
4. missing target;
5. deprecated target with single successor;
6. deprecated target with multiple successors;
7. canonical text editorial revision;
8. substantive statement replacement;
9. nucleus split;
10. unit merge;
11. duplicate identifier rejection;
12. orphaned reference rejection;
13. deterministic registry regeneration;
14. stale mapping after canonical hash change;
15. round-trip preserving target identifiers;
16. package import with unsupported registry version;
17. attempted target creation from review UI;
18. legacy sidecar drift after array reorder.

## Governance

Adding or changing identifiers requires:

- documented reason;
- canonical scope;
- migration impact;
- validator pass;
- human review;
- version increment;
- changelog entry.

No model provider, parser or user role may mutate the registry during suggestion generation.

## Gate for CML-525E

The next slice may define persistence, recovery and validator fixtures for the assisted draft only after this registry contract is accepted.

Runtime implementation remains blocked until:

- CML-525A product contract is accepted;
- CML-525B source provenance schema is accepted;
- CML-525C assisted draft state machine is accepted;
- CML-525D target registry is accepted;
- deterministic validators and fixtures are prepared.

## Verdict

```text
CML_525D_STABLE_CURRICULUM_MAPPING_IDENTIFIERS_AND_TARGET_REGISTRY_READY_FOR_REVIEW_DOCS_ONLY
```
