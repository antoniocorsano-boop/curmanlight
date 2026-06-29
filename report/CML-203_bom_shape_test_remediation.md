# CML-203 - BOM_SHAPE_TEST_REMEDIATION

## 1. Baseline

| Item                   | Value            |
| ---------------------- | ---------------- |
| Repo                   | `curmanlight`    |
| Branch                 | `main`           |
| Start commit           | `8dc1f96`        |
| `origin/main` at start | `8dc1f96`        |
| Working tree at start  | Clean            |
| Slice type             | Test remediation |
| Deploy                 | None             |
| Push                   | None             |
| Secrets                | None             |

## 2. Root Cause

The runtime shape test runs a pipeline via `execSync` with `shell: 'powershell'`:

```
node tools/json-to-mappa-dati-adapter.mjs <file> | node tools/to-runtime-mappa-dati-transformer.mjs
```

PowerShell adds a UTF-8 BOM (`U+FEFF`) to the stdout stream when piping. The transformer reads stdin and calls `JSON.parse(raw)` without stripping the BOM, causing:

```
Unexpected token '﻿', "﻿{...`
```

**The JSON files on disk do NOT contain BOM.** Verified via:

- `fs.readFileSync(filePath, 'utf8')` — first char is `{` (code `0x007b`)
- Byte-level inspection — first bytes are `7B 0A 20 20` (`{\n  `), no `EF BB BF` BOM sequence
- All 14 files checked: 0 BOM files found

## 3. Fix

Added BOM stripping in `to-runtime-mappa-dati-transformer.mjs` before `JSON.parse`:

```javascript
const cleaned = raw.replace(/^\uFEFF/, '').trim()
data = JSON.parse(cleaned)
```

This is the smallest safe fix because:

- It does not modify any curriculum JSON file
- It does not change JSON content semantics
- It makes the transformer resilient to BOM from any source (PowerShell pipe, future editors, etc.)
- It preserves existing behavior for BOM-free input

## 4. Files Changed

| File                                          | Change                                          |
| --------------------------------------------- | ----------------------------------------------- |
| `tools/to-runtime-mappa-dati-transformer.mjs` | +2 lines, -1 line (BOM strip before JSON.parse) |

**No curriculum files modified. No content semantics changed.**

## 5. Validation Results

### JSON Validator

```
node tools/validate-cml-normalized-curriculum.mjs
overallValid: true
totalFiles: 14
invalidCount: 0
```

**Result: 14/14 PASS**

### Runtime Shape Test

```
node tools/test-runtime-mappa-dati-shape.mjs
overall: PASS
disciplines: 14 passed, 0 failed
```

**Result: 14/14 PASS** (restored)

### Hash/Navigation Smoke (public GitHub Pages)

| Discipline                 | Hash                            | Result                            |
| -------------------------- | ------------------------------- | --------------------------------- |
| Tecnologia                 | `#cur-Tecnologia`               | PASS — loads, 8 units             |
| Seconda Lingua Comunitaria | `#cur-SecondaLinguaComunitaria` | PASS — loads, 2 units             |
| Religione Cattolica        | `#cur-ReligioneCattolica`       | PASS — loads, 2 units             |
| Latino LEL                 | `#cur-LatinoLEL`                | PASS — loads, 3 units, ★NEW badge |

### CML-200 Smoke Re-run

Post-fix verification: **5/5 PASS**

## 6. Verification Checklist

| Check                                     | Result |
| ----------------------------------------- | ------ |
| `git status` — clean after commit         | YES    |
| HEAD at `d7a1845`                         | YES    |
| `origin/main` at `8dc1f96` (no push)      | YES    |
| JSON validator 14/14 PASS                 | YES    |
| Shape test 14/14 PASS                     | YES    |
| Hash/navigation smoke 4/4 PASS            | YES    |
| `git diff --check` — no whitespace errors | YES    |
| Secret-pattern scan — no secrets          | YES    |
| No deploy                                 | YES    |
| No push                                   | YES    |
| No secrets                                | YES    |

## 7. Meta

| Property      | Value                                             |
| ------------- | ------------------------------------------------- |
| Start commit  | `8dc1f96`                                         |
| Final commit  | `d7a1845`                                         |
| Files changed | 1 (`tools/to-runtime-mappa-dati-transformer.mjs`) |
| Verdict       | `CML_203_BOM_SHAPE_TEST_REMEDIATION_READY`        |
