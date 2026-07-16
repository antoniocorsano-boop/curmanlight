import fs from "node:fs";
import assert from "node:assert/strict";
import { buildAssistedDraftValidationSummary } from "../src/features/assisted-drafts/validation-summary.ts";

const read = (path) => JSON.parse(fs.readFileSync(path, "utf8"));
const corpus = read("fixtures/assisted-drafts/corpus.v1.json");
const registry = read("data/assisted-drafts/tecnologia-secondary-target-registry.v1.json");
const draft = structuredClone(corpus.fixtures.find((item) => item.fixtureId === "valid-minimal-single-source").draft);

const validSummary = buildAssistedDraftValidationSummary(draft, registry);
assert.equal(validSummary.report.readiness.inspectable, true);
assert.equal(validSummary.report.result === "invalid", false);

const invalid = structuredClone(draft);
invalid.suggestions[0].evidence = [];
const invalidSummary = buildAssistedDraftValidationSummary(invalid, registry);
assert.equal(invalidSummary.report.result, "invalid");
assert.ok(
  (invalidSummary.findingsBySuggestionId[invalid.suggestions[0].suggestionId] ?? []).length > 0,
  "validator findings must be associated with the affected suggestion",
);

const editorSource = fs.readFileSync("src/features/assisted-drafts/draft-proposal-editor.tsx", "utf8");
for (const required of [
  "Testo originario",
  "Testo proposto dopo la revisione umana",
  "Evidenze collegate",
  "canonical",
  "teacherExportable",
  "onChange",
]) {
  assert.ok(editorSource.includes(required), `editor contract missing: ${required}`);
}
assert.equal(editorSource.includes("canonicalWriteAllowed: true"), false);
assert.equal(editorSource.includes("fetch("), false);

console.log("CML-525L PASS: controlled proposal editor, evidence and local validation summary.");
