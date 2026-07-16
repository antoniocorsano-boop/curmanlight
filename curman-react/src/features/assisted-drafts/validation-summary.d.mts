import type { AssistedCurriculumDraft, AssistedDraftValidatorFinding, AssistedDraftValidatorReport, CurriculumTargetRegistry } from "./contracts";
export interface AssistedDraftValidationSummary {
  report: AssistedDraftValidatorReport;
  counts: Record<"fatal" | "blocking" | "warning" | "info", number>;
  findingsBySuggestionId: Record<string, AssistedDraftValidatorFinding[]>;
  packageFindings: AssistedDraftValidatorFinding[];
}
export function buildAssistedDraftValidationSummary(draft: AssistedCurriculumDraft, registry: CurriculumTargetRegistry): AssistedDraftValidationSummary;
