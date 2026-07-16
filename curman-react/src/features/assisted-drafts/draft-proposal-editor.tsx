import { useMemo } from "react";
import type {
  AssistedCurriculumDraft,
  AssistedDraftSuggestion,
  CurriculumTargetRegistry,
} from "./contracts";
import { buildAssistedDraftValidationSummary } from "./validation-summary";

export interface DraftProposalEditorProps {
  draft: AssistedCurriculumDraft;
  registry: CurriculumTargetRegistry;
  onChange: (draft: AssistedCurriculumDraft) => void;
  readOnly?: boolean;
}

const suggestionStates = ["generated", "under_review", "accepted", "rejected"] as const;

function updateSuggestion(
  draft: AssistedCurriculumDraft,
  suggestionId: string,
  update: (suggestion: AssistedDraftSuggestion) => AssistedDraftSuggestion,
) {
  return {
    ...draft,
    suggestions: draft.suggestions.map((suggestion) =>
      suggestion.suggestionId === suggestionId ? update(suggestion) : suggestion,
    ),
  };
}

export function DraftProposalEditor({
  draft,
  registry,
  onChange,
  readOnly = false,
}: DraftProposalEditorProps) {
  const summary = useMemo(
    () => buildAssistedDraftValidationSummary(draft, registry),
    [draft, registry],
  );

  return (
    <div className="space-y-5">
      <section aria-labelledby="assisted-validation-title" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 id="assisted-validation-title" className="font-semibold text-slate-950">
              Controllo locale della bozza
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Il controllo segnala problemi e avvisi, ma non approva né aggiorna il curricolo.
            </p>
          </div>
          <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-800">
            {summary.report.result === "valid" && "Bozza valida"}
            {summary.report.result === "valid_with_warnings" && "Valida con avvisi"}
            {summary.report.result === "invalid" && "Da correggere"}
          </span>
        </div>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
          <div className="rounded-lg bg-white p-3"><dt>Bloccanti</dt><dd className="font-semibold">{summary.counts.blocking + summary.counts.fatal}</dd></div>
          <div className="rounded-lg bg-white p-3"><dt>Avvisi</dt><dd className="font-semibold">{summary.counts.warning}</dd></div>
          <div className="rounded-lg bg-white p-3"><dt>Informazioni</dt><dd className="font-semibold">{summary.counts.info}</dd></div>
          <div className="rounded-lg bg-white p-3"><dt>Esportabile docente</dt><dd className="font-semibold">{summary.report.readiness.teacherExportable ? "Sì" : "No"}</dd></div>
        </dl>
        {summary.packageFindings.length > 0 && (
          <ul className="mt-4 space-y-2" aria-label="Problemi generali della bozza">
            {summary.packageFindings.map((finding, index) => (
              <li key={`${finding.code}-${index}`} className="rounded-lg border border-slate-200 bg-white p-3 text-sm">
                <strong>{finding.code}</strong>: {finding.message}
              </li>
            ))}
          </ul>
        )}
      </section>

      <ol className="space-y-5">
        {draft.suggestions.map((suggestion, index) => {
          const findings = summary.findingsBySuggestionId[suggestion.suggestionId] ?? [];
          const target = registry.targets.find((entry) =>
            entry.unitId === suggestion.target.unitId &&
            entry.nucleusId === suggestion.target.nucleusId &&
            entry.fieldId === suggestion.target.fieldId,
          );

          return (
            <li key={suggestion.suggestionId} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Proposta {index + 1}</p>
                  <h3 className="mt-1 font-semibold text-slate-950">{target?.label ?? suggestion.target.fieldId}</h3>
                  <p className="mt-1 text-xs text-slate-500">ID: {suggestion.suggestionId}</p>
                </div>
                <label className="text-sm font-medium text-slate-700">
                  Stato di revisione
                  <select
                    value={suggestion.state}
                    disabled={readOnly}
                    onChange={(event) =>
                      onChange(updateSuggestion(draft, suggestion.suggestionId, (current) => ({
                        ...current,
                        state: event.target.value,
                      })))
                    }
                    className="mt-1 block rounded-lg border border-slate-300 bg-white px-3 py-2"
                  >
                    {suggestionStates.map((state) => <option key={state} value={state}>{state}</option>)}
                  </select>
                </label>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <section aria-label="Testo originario generato" className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <h4 className="text-sm font-semibold text-slate-800">Testo originario</h4>
                  <p className="mt-2 whitespace-pre-wrap text-sm text-slate-700">{suggestion.originalGeneratedText}</p>
                </section>
                <label className="block text-sm font-semibold text-slate-800">
                  Testo proposto dopo la revisione umana
                  <textarea
                    value={suggestion.proposedText}
                    readOnly={readOnly}
                    rows={7}
                    onChange={(event) =>
                      onChange(updateSuggestion(draft, suggestion.suggestionId, (current) => ({
                        ...current,
                        proposedText: event.target.value,
                      })))
                    }
                    className="mt-2 w-full rounded-lg border border-slate-300 p-3 font-normal text-slate-900"
                  />
                </label>
              </div>

              <section aria-labelledby={`evidence-${suggestion.suggestionId}`} className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-3">
                <h4 id={`evidence-${suggestion.suggestionId}`} className="text-sm font-semibold text-sky-950">
                  Evidenze collegate
                </h4>
                {suggestion.evidence.length === 0 ? (
                  <p className="mt-2 text-sm text-sky-900">Nessuna evidenza collegata.</p>
                ) : (
                  <ul className="mt-2 space-y-3">
                    {suggestion.evidence.map((evidence) => (
                      <li key={`${evidence.sourceId}-${evidence.locatorValue}`} className="rounded-lg bg-white p-3 text-sm text-slate-800">
                        <p className="font-medium">{evidence.sourceId} · {evidence.locatorType} {evidence.locatorValue}</p>
                        <blockquote className="mt-2 border-l-2 border-sky-300 pl-3">{evidence.excerpt}</blockquote>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {findings.length > 0 && (
                <ul className="mt-4 space-y-2" aria-label={`Segnalazioni per ${suggestion.suggestionId}`}>
                  {findings.map((finding, findingIndex) => (
                    <li key={`${finding.code}-${findingIndex}`} className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-950">
                      <strong>{finding.code}</strong>: {finding.message}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
