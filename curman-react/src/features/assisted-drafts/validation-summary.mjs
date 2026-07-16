import { validateAssistedDraft } from "./validator-runtime.mjs";

function findSuggestionId(draft, finding) {
  const directlyRelated = draft.suggestions.find((suggestion) =>
    finding.relatedIds?.includes(suggestion.suggestionId),
  );
  if (directlyRelated) return directlyRelated.suggestionId;

  const embedded = draft.suggestions.find((suggestion) =>
    finding.path.includes(suggestion.suggestionId),
  );
  if (embedded) return embedded.suggestionId;

  const indexMatch = finding.path.match(/suggestions(?:\.|\[)(\d+)/);
  if (!indexMatch) return null;
  return draft.suggestions[Number(indexMatch[1])]?.suggestionId ?? null;
}

export function buildAssistedDraftValidationSummary(draft, registry) {
  const report = validateAssistedDraft(draft, registry);
  const counts = { fatal: 0, blocking: 0, warning: 0, info: 0 };
  const findingsBySuggestionId = {};
  const packageFindings = [];

  for (const finding of report.findings) {
    counts[finding.severity] += 1;
    const suggestionId = findSuggestionId(draft, finding);
    if (suggestionId) {
      (findingsBySuggestionId[suggestionId] ??= []).push(finding);
    } else {
      packageFindings.push(finding);
    }
  }

  return { report, counts, findingsBySuggestionId, packageFindings };
}
