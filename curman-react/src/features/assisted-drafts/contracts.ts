export const ASSISTED_DRAFT_FILE_TYPE = "assisted_curriculum_draft" as const;

export type ValidatorSeverity = "fatal" | "blocking" | "warning" | "info";
export type ValidatorResult = "valid" | "valid_with_warnings" | "invalid";

export type AssistedDraftValidatorCode =
  | "ADP-001"
  | "ADP-002"
  | "ADP-003"
  | "ADP-004"
  | "ADP-006"
  | "ADP-007"
  | "ADP-008"
  | "ADP-009"
  | "ADP-010"
  | "ADP-011"
  | "ADP-012"
  | "ADP-013"
  | "ADP-014"
  | "ADP-016"
  | "ADP-018"
  | "ADP-022"
  | "ADP-023"
  | "ADP-024"
  | "ADP-025";

export interface AssistedDraftTargetReference {
  registryVersion: string;
  disciplineId: string;
  orderId: string;
  unitId: string;
  nucleusId: string;
  fieldId:
    | "competenza"
    | "traguardo"
    | "obiettivi"
    | "conoscenze"
    | "abilita"
    | "evidenze"
    | "criteriValutazione";
  statementId?: string;
}

export interface AssistedDraftEvidenceReference {
  sourceId: string;
  sourceVersionId: string;
  locatorType: "page" | "section" | "paragraph" | "heading" | "url_fragment" | "text_anchor";
  locatorValue: string;
  excerpt: string;
  excerptHash: string;
}

export interface AssistedDraftSuggestion {
  suggestionId: string;
  state: string;
  originalGeneratedText: string;
  proposedText: string;
  target: AssistedDraftTargetReference;
  evidence: AssistedDraftEvidenceReference[];
  humanValidationRequired: true;
  canonicalWriteAllowed: false;
}

export interface AssistedCurriculumDraft {
  schemaVersion: "1.0";
  fileType: typeof ASSISTED_DRAFT_FILE_TYPE;
  packageId: string;
  packageVersion: number;
  humanValidationRequired: true;
  canonicalWriteAllowed: false;
  targetRegistryVersion: string;
  suggestions: AssistedDraftSuggestion[];
  auditTrail: unknown[];
}

export interface AssistedDraftValidatorFinding {
  code: AssistedDraftValidatorCode;
  severity: ValidatorSeverity;
  path: string;
  message: string;
  relatedIds?: string[];
}

export interface AssistedDraftValidatorReport {
  validatorId: "assisted-draft-validator";
  validatorVersion: string;
  result: ValidatorResult;
  findings: AssistedDraftValidatorFinding[];
  readiness: {
    inspectable: boolean;
    importable: boolean;
    teacherExportable: boolean;
  };
}

export interface CurriculumTargetRegistryEntry {
  targetId: string;
  disciplineId: string;
  orderId: string;
  unitId: string;
  nucleusId: string;
  fieldId: AssistedDraftTargetReference["fieldId"];
  label: string;
  canonicalPath: string;
  status: "active" | "deprecated";
  aliases: string[];
}

export interface CurriculumTargetRegistry {
  registryType: "curriculum_target_registry";
  registryVersion: string;
  canonicalDataVersion: string;
  disciplineId: string;
  orderId: string;
  readOnly: true;
  generatedFrom: string;
  targets: CurriculumTargetRegistryEntry[];
}
