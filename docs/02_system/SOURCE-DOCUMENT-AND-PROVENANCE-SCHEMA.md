# Source Document and Provenance Schema

## Decision

CurManLight must treat every curriculum suggestion as inseparable from its source evidence.

A source is not merely a file or a URL. It is a versioned, attributable and inspectable record that preserves where the content came from, when it was acquired, which authority published it and which exact passage supports the generated suggestion.

No suggestion may be reviewed, exported or promoted without a valid source record.

## Source classes

### 1. National normative source

Examples:

- ministerial decrees;
- national guidelines;
- official annexes;
- laws, regulations and ministerial notes;
- documents published on official Ministry or government domains.

Required authority level: `national_official`.

### 2. Regional or territorial official source

Examples:

- regional education office documents;
- territorial school-office notices;
- formally issued regional guidance.

Required authority level: `territorial_official`.

### 3. School institutional source

Examples:

- PTOF;
- curricolo verticale d’istituto;
- regolamenti;
- delibere di Collegio o Consiglio;
- criteri di valutazione;
- official pages or downloadable acts from the school website.

Required authority level: `school_official`.

### 4. Department-approved source

Examples:

- department minutes;
- approved discipline frameworks;
- departmental synthesis documents;
- locally approved objectives or content maps.

Required authority level: `department_approved`.

### 5. Teacher-selected working source

Examples:

- teacher notes;
- working drafts;
- manually selected reference documents;
- local instructional materials.

Required authority level: `teacher_working`.

These sources may generate suggestions but cannot override official or institutionally approved sources.

### 6. CurManLight structured source

Examples:

- canonical curriculum files;
- `teacher_proposal` packages;
- `department_outcome` packages;
- `referent_validation` packages;
- future non-canonical assisted drafts.

Required authority level depends on file type and validation state.

## Source authority hierarchy

The hierarchy is:

```text
national_official
→ territorial_official
→ school_official
→ department_approved
→ teacher_working
```

This hierarchy does not automatically resolve conflicts. It controls warning severity and review order only.

A lower-level source may propose local contextualisation, but it must not silently replace a higher-level obligation.

## Required source record

Each imported or linked source must produce a stable record containing at least:

```json
{
  "sourceId": "src-stable-id",
  "sourceType": "ministerial_document",
  "authorityLevel": "national_official",
  "title": "Document title",
  "issuingBody": "Issuing authority",
  "documentNumber": "optional formal number",
  "publicationDate": "YYYY-MM-DD or null",
  "effectiveFrom": "YYYY-MM-DD or null",
  "effectiveTo": null,
  "sourceUrl": "https://... or null",
  "retrievedAt": "ISO-8601 timestamp",
  "localFileName": "optional original file name",
  "mimeType": "application/pdf",
  "contentHash": "sha256:...",
  "versionLabel": "official or local version label",
  "language": "it",
  "schoolId": "optional institution identifier",
  "status": "active",
  "supersedesSourceId": null,
  "humanValidationRequired": true
}
```

## Mandatory identity rules

A source record must have:

- a stable `sourceId` independent of browser session;
- a visible title;
- a source class;
- an authority level;
- an issuing body or declared author;
- an acquisition timestamp;
- a content hash for imported files or captured copies;
- a status;
- `humanValidationRequired: true`.

A URL alone is not sufficient identity.

A filename alone is not sufficient identity.

## Ministry and government websites

For official web sources, CurManLight must retain:

- the exact page URL;
- the issuing domain;
- page title;
- retrieval timestamp;
- linked document URL when present;
- local hash of the imported or captured document;
- document number and date when available;
- whether the page is the primary publication or a secondary reference.

The product must not perform unrestricted crawling.

The user must explicitly select the page or document to acquire.

## School website sources

For school website content, CurManLight must distinguish:

- official act or downloadable document;
- institutional information page;
- news or announcement;
- embedded third-party content;
- informal or outdated page.

A school website source must retain:

- school name and, when configured, institution identifier;
- exact URL;
- page or document title;
- publication or protocol date when visible;
- retrieval timestamp;
- local copy hash;
- declared institutional category;
- current, archived or superseded status.

Content from the school website is not automatically canonical. It becomes authoritative only when its institutional nature is explicit and human reviewers confirm it.

## Local institutional documents

PTOF, curriculum documents, regulations and resolutions must additionally retain:

- school year or validity period;
- approving body;
- approval date;
- resolution or protocol reference when available;
- document version;
- relationship to prior versions;
- scope: institution, school order, discipline, department or class level.

## Source status lifecycle

Allowed source states:

- `acquired_unverified`;
- `verified_active`;
- `verified_archived`;
- `superseded`;
- `withdrawn`;
- `unavailable`;
- `rejected`.

Only `verified_active` sources may support high-confidence suggestions.

Other states remain inspectable but must trigger warnings.

## Versioning and change detection

When a source is re-imported or reacquired:

1. compare source identity;
2. compare content hash;
3. preserve the previous record;
4. create a new version when content changed;
5. mark the relationship through `supersedesSourceId` or `previousVersionId`;
6. identify suggestions derived from the old version;
7. require re-review when the supporting passage changed.

No source record may be silently overwritten.

## Evidence locator

Each generated suggestion must point to evidence using one or more locators:

- PDF page number;
- section heading;
- paragraph index;
- article or comma number;
- table or annex identifier;
- HTML heading and text range;
- structured-data path;
- excerpt hash.

The displayed excerpt must be sufficient for human verification but must not replace the complete original source.

## Provenance link for every suggestion

Every suggestion must contain:

```json
{
  "sourceId": "src-stable-id",
  "sourceVersionId": "src-version-id",
  "locator": {
    "kind": "pdf_page_section",
    "page": 12,
    "section": "Traguardi per lo sviluppo delle competenze"
  },
  "excerpt": "short supporting excerpt",
  "excerptHash": "sha256:...",
  "mappingRationale": "why this passage maps to the target field",
  "confidenceClass": "medium"
}
```

A generated statement without provenance must be marked `missing_source` and cannot be accepted.

## Conflict rules

The system must flag:

- two active official sources with incompatible statements;
- a local source that appears to contradict a national obligation;
- a school document that has been superseded;
- different school-year versions used in one draft;
- duplicate documents with different file names;
- an inaccessible URL without a preserved local copy;
- a suggestion whose excerpt no longer exists in the active source version.

Conflicts cannot be resolved automatically.

## Source trust and confidence are distinct

Authority level describes who issued the source.

Confidence describes how reliably a passage maps to a curriculum target.

A national source may still have a low-confidence mapping.

A teacher working note may have a clear mapping but low institutional authority.

The UI must display both dimensions separately.

## Local-first acquisition rules

Phase 1 supports:

- manual file upload;
- manually entered URL metadata;
- user-initiated download or local capture;
- local parsing;
- local hash generation;
- no automatic site traversal;
- no background monitoring;
- no cloud account scraping.

The source remains on the device unless the user explicitly exports a package.

## Privacy and exclusion rules

The importer must reject or warn on:

- student personal data;
- health, disability or disciplinary records;
- credentials or access tokens;
- private email exports;
- unrestricted folders;
- pages requiring authenticated scraping;
- documents without a declared educational purpose.

The first implementation must not process personal student data.

## Source package boundary

A future non-canonical source package may reserve:

```text
fileType: curriculum_source_bundle
role: source_registry
canonicalWriteAllowed: false
humanValidationRequired: true
```

This is a design reservation only. CML-525B does not change schema version 1.0.

## UI requirements

The source registry must show:

- source title;
- source class and authority;
- issuing body;
- date and version;
- URL or local filename;
- active, archived or superseded status;
- content hash availability;
- number of linked suggestions;
- warning count;
- open-source action;
- inspect-evidence action.

The teacher must always be able to answer:

1. Where did this content come from?
2. Is this the current version?
3. Who issued or approved it?
4. Which exact passage supports the suggestion?
5. Has the source changed since the suggestion was created?

## Minimum source set for the Tecnologia pilot

The controlled pilot should use:

- one official ministerial or national document;
- one current school institutional document, preferably the curriculum or PTOF extract;
- one department-approved Tecnologia document;
- optionally one teacher working note.

Each source must be manually selected, locally stored or captured, hashed and human-verified before suggestion generation.

## Acceptance gates before implementation

CML-525B is complete only when the following are accepted:

- source classes and authority hierarchy;
- stable source identity;
- version and supersession rules;
- URL and local-copy handling;
- evidence locator format;
- source-to-suggestion provenance link;
- conflict rules;
- privacy exclusions;
- source registry UI requirements;
- Tecnologia pilot source set.

## Invariants

- no automatic canonical writes;
- no unrestricted crawling;
- no source without visible provenance;
- no silent source replacement;
- no student personal data;
- no external transmission by default;
- no automatic approval based on authority or confidence;
- all institutional transitions require human validation.
