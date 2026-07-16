import fs from "node:fs";
import { validateAssistedDraft } from "../src/features/assisted-drafts/validator-runtime.mjs";

const read = (path) => JSON.parse(fs.readFileSync(path, "utf8"));
const manifest = read("fixtures/assisted-drafts/manifest.v1.json");
const corpus = read(`fixtures/assisted-drafts/${manifest.corpusFile}`);
const registry = read("data/assisted-drafts/tecnologia-secondary-target-registry.v1.json");
const expected = new Map(manifest.fixtures.map((fixture) => [fixture.fixtureId, fixture]));
const failures = [];

for (const fixture of corpus.fixtures) {
  const expectation = expected.get(fixture.fixtureId);
  const report = validateAssistedDraft(fixture.draft, registry);
  const codes = [...new Set(report.findings.map(({ code }) => code))].sort();
  if (
    !expectation ||
    report.result !== expectation.expectedResult ||
    JSON.stringify(codes) !== JSON.stringify([...expectation.expectedCodes].sort()) ||
    JSON.stringify(report.readiness) !== JSON.stringify(expectation.expectedReadiness)
  ) failures.push({ fixtureId: fixture.fixtureId, report, expected: expectation });
  expected.delete(fixture.fixtureId);
}

for (const fixtureId of expected.keys()) failures.push({ fixtureId, message: "Fixture assente" });
if (registry.readOnly !== true || registry.registryVersion !== manifest.registryVersion || corpus.registryVersion !== manifest.registryVersion) failures.push({ fixtureId: "registry-contract" });

const malformedLists = validateAssistedDraft({
  fileType: "assisted_curriculum_draft",
  schemaVersion: "1.0",
  packageId: "malformed-lists",
  targetRegistryVersion: registry.registryVersion,
  humanValidationRequired: true,
  canonicalWriteAllowed: false,
  suggestions: {},
  auditTrail: "not-an-array",
}, registry);
if (
  malformedLists.result !== "invalid" ||
  !malformedLists.findings.some(({ code, path }) => code === "ADP-020" && path === "suggestions") ||
  !malformedLists.findings.some(({ code, path }) => code === "ADP-020" && path === "auditTrail")
) failures.push({ fixtureId: "malformed-list-fail-closed", report: malformedLists });

if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}
console.log(`CML-525H PASS: ${corpus.fixtures.length} fixture + malformed-list fail-closed.`);
