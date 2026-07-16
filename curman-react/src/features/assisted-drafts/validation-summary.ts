import type {
  AssistedCurriculumDraft,
  AssistedDraftValidatorFinding,
  AssistedDraftValidatorReport,
  CurriculumTargetRegistry,
} from "./contracts";
import { validateAssistedDraft } from "./validator-runtime.mjs";

export interface AssistedDraftValidationSummary {
  report: AssistedDraftValidatorReport;
  counts: Record<"fatal" | "blocking" | "warning" | "info", number>;
  findingsBySuggestionId: Record<string, AssistedDraftValidatorFinding[]>;
  packageFindings: AssistedDraftValidatorFinding[];
}

export function buildAssistedDraftValidationSummary(
  draft: AssistedCurriculumDraft,
  registry: CurriculumTargetRegistry,
): AssistedDraftValidationSummary {
  const report = validateAssistedDraft(draft, registry);
  const counts = { fatal: 0, blocking: 0, warning: 0, info: 0 };
  const findingsBySuggestionId: Record<string, AssistedDraftValidatorFinding[]> = {};
  const packageFindings: AssistedDraftValidatorFinding[] = [];

  for (const finding of report.findings) {
    counts[finding.severity] += 1;
    const suggestionId = draft.suggestions.find((suggestion) =>
      finding.path.includes(suggestion.suggestionId),
    )?.suggestionId;
    if (suggestionId) {
      (findingsBySuggestionId[suggestionId] ??= []).push(finding);
    } else {
      packageFindings.push(finding);
    }
  }

  return { report, counts, findingsBySuggestionId, packageFindings };
}
