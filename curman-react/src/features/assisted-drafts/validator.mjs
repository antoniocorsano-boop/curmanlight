export const ASSISTED_DRAFT_VALIDATOR_ID = "assisted-draft-validator";
export const ASSISTED_DRAFT_VALIDATOR_VERSION = "1.1.0";

const SUPPORTED_STATES = new Set(["generated_unreviewed", "teacher_accepted", "teacher_edited", "teacher_rejected", "teacher_deferred"]);

const makeFinding = (code, severity, path, message, relatedIds) => ({ code, severity, path, message, ...(relatedIds ? { relatedIds } : {}) });
const targetKey = (target = {}) => `${target.unitId ?? ""}|${target.nucleusId ?? ""}|${target.fieldId ?? ""}`;

export function buildTargetIndex(registry) {
  return new Map((registry?.targets ?? []).map((target) => [targetKey(target), target]));
}

export function validateAssistedDraft(draft, registry) {
  const findings = [];
  const add = (...args) => findings.push(makeFinding(...args));
  const targetIndex = buildTargetIndex(registry);

  if (!draft || typeof draft !== "object") {
    add("ADP-001", "fatal", "$", "Il pacchetto non è un oggetto leggibile.");
    return finalize(findings);
  }

  if (draft.fileType !== "assisted_curriculum_draft") add("ADP-001", "fatal", "fileType", "Tipo di pacchetto non supportato.");
  if (draft.schemaVersion !== "1.0") add("ADP-002", "fatal", "schemaVersion", "Versione schema non supportata.");
  if (draft.canonicalWriteAllowed !== false) add("ADP-003", "fatal", "canonicalWriteAllowed", "La scrittura canonica deve essere disabilitata.");
  if (draft.humanValidationRequired !== true) add("ADP-004", "fatal", "humanValidationRequired", "La validazione umana deve essere obbligatoria.");
  if (!draft.packageId) add("ADP-005", "blocking", "packageId", "Identificativo del pacchetto mancante.");
  if (!draft.targetRegistryVersion || (registry?.registryVersion && draft.targetRegistryVersion !== registry.registryVersion)) add("ADP-023", "blocking", "targetRegistryVersion", "Versione del registro target mancante o non allineata.");

  const ids = new Set();
  for (const [index, suggestion] of (draft.suggestions ?? []).entries()) {
    const base = `suggestions[${index}]`;
    if (!suggestion?.suggestionId || ids.has(suggestion.suggestionId)) add("ADP-006", "blocking", `${base}.suggestionId`, "Identificativo suggerimento mancante o duplicato.");
    if (suggestion?.suggestionId) ids.add(suggestion.suggestionId);
    if (!SUPPORTED_STATES.has(suggestion?.state)) add("ADP-009", "blocking", `${base}.state`, "Stato del suggerimento non consentito.");
    if (!suggestion?.originalGeneratedText) add("ADP-017", "blocking", `${base}.originalGeneratedText`, "Testo generato originale mancante.");
    if (suggestion?.humanValidationRequired !== true) add("ADP-004", "fatal", `${base}.humanValidationRequired`, "La validazione umana deve restare obbligatoria.");
    if (suggestion?.canonicalWriteAllowed !== false) add("ADP-003", "fatal", `${base}.canonicalWriteAllowed`, "La scrittura canonica del suggerimento deve essere disabilitata.");

    const registryTarget = targetIndex.get(targetKey(suggestion?.target));
    if (!registryTarget) add("ADP-008", "blocking", `${base}.target`, "Target non presente nel registro read-only.");
    else if (registryTarget.status === "deprecated") add("ADP-024", "warning", `${base}.target`, "Il target deprecato richiede conferma umana.");

    if (!Array.isArray(suggestion?.evidence)) add("ADP-007", "blocking", `${base}.evidence`, "Riferimenti di evidenza mancanti.");
    else for (const [evidenceIndex, evidence] of suggestion.evidence.entries()) {
      if (!evidence?.sourceId || !evidence?.sourceVersionId || !evidence?.locatorValue || !evidence?.excerptHash) add("ADP-007", "blocking", `${base}.evidence[${evidenceIndex}]`, "Riferimento di evidenza incompleto.");
    }

    if (["teacher_accepted", "teacher_edited"].includes(suggestion?.state) && !(suggestion?.evidence?.length > 0)) add("ADP-018", "blocking", `${base}.evidence`, "Un elemento accettato deve conservare almeno una evidenza.");
  }

  for (const event of draft.auditTrail ?? []) {
    if (event?.code === "ADP-012") add("ADP-012", "warning", "auditTrail", "La fonte non aggiornata richiede conferma umana.");
    if (event?.code === "ADP-022") add("ADP-022", "blocking", "auditTrail", "Possibile dato personale: rimuovere prima di proseguire.");
  }

  return finalize(findings);
}

function finalize(findings) {
  const invalid = findings.some(({ severity }) => severity === "fatal" || severity === "blocking");
  const warning = findings.some(({ severity }) => severity === "warning");
  const result = invalid ? "invalid" : warning ? "valid_with_warnings" : "valid";
  return {
    validatorId: ASSISTED_DRAFT_VALIDATOR_ID,
    validatorVersion: ASSISTED_DRAFT_VALIDATOR_VERSION,
    result,
    findings,
    readiness: {
      inspectable: !findings.some(({ severity }) => severity === "fatal"),
      importable: !invalid,
      teacherExportable: !invalid && !warning,
    },
  };
}
