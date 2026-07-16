import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const corpusPath = path.join(root, "fixtures/assisted-drafts/corpus.v1.json");
const registryPath = path.join(root, "data/assisted-drafts/tecnologia-secondary-target-registry.v1.json");

const corpus = JSON.parse(fs.readFileSync(corpusPath, "utf8"));
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const targetKeys = new Set(registry.targets.map((target) => `${target.unitId}|${target.nucleusId}|${target.fieldId}`));

function validate(draft) {
  const findings = [];
  const add = (code, severity, pathValue, message) => findings.push({ code, severity, path: pathValue, message });

  if (draft.fileType !== "assisted_curriculum_draft") add("ADP-001", "fatal", "fileType", "Tipo di pacchetto non supportato.");
  if (draft.schemaVersion !== "1.0") add("ADP-002", "fatal", "schemaVersion", "Versione schema non supportata.");
  if (draft.canonicalWriteAllowed !== false) add("ADP-003", "fatal", "canonicalWriteAllowed", "La scrittura canonica deve essere disabilitata.");
  if (draft.humanValidationRequired !== true) add("ADP-004", "fatal", "humanValidationRequired", "La validazione umana deve essere obbligatoria.");
  if (!draft.targetRegistryVersion) add("ADP-023", "blocking", "targetRegistryVersion", "Versione del registro target mancante.");

  const ids = new Set();
  for (const [index, suggestion] of (draft.suggestions ?? []).entries()) {
    if (ids.has(suggestion.suggestionId)) add("ADP-006", "blocking", `suggestions[${index}].suggestionId`, "Identificativo suggerimento duplicato.");
    ids.add(suggestion.suggestionId);

    const target = suggestion.target ?? {};
    const key = `${target.unitId}|${target.nucleusId}|${target.fieldId}`;
    if (!targetKeys.has(key)) add("ADP-008", "blocking", `suggestions[${index}].target`, "Target non presente nel registro read-only.");

    if (["teacher_accepted", "teacher_edited"].includes(suggestion.state) && !(suggestion.evidence?.length > 0)) {
      add("ADP-018", "blocking", `suggestions[${index}].evidence`, "Un elemento accettato deve conservare almeno una evidenza.");
    }
  }

  for (const event of draft.auditTrail ?? []) {
    if (event?.code === "ADP-024") add("ADP-024", "warning", "auditTrail", "Il target deprecato richiede conferma umana.");
  }

  const invalid = findings.some((finding) => finding.severity === "fatal" || finding.severity === "blocking");
  const warning = findings.some((finding) => finding.severity === "warning");
  return { result: invalid ? "invalid" : warning ? "valid_with_warnings" : "valid", findings };
}

const failures = [];
for (const fixture of corpus.fixtures) {
  const report = validate(fixture.draft);
  const codes = [...new Set(report.findings.map((finding) => finding.code))].sort();
  const expectedCodes = [...fixture.expectedCodes].sort();
  if (report.result !== fixture.expectedResult || JSON.stringify(codes) !== JSON.stringify(expectedCodes)) {
    failures.push({ fixtureId: fixture.fixtureId, expectedResult: fixture.expectedResult, actualResult: report.result, expectedCodes, actualCodes: codes });
  }
}

if (registry.readOnly !== true || registry.registryVersion !== corpus.registryVersion) {
  failures.push({ fixtureId: "registry-contract", message: "Registro non read-only o versione corpus non allineata." });
}

if (failures.length > 0) {
  console.error("CML-525G validation failed", JSON.stringify(failures, null, 2));
  process.exit(1);
}

console.log(`CML-525G PASS: ${corpus.fixtures.length} fixture, ${registry.targets.length} target read-only.`);
