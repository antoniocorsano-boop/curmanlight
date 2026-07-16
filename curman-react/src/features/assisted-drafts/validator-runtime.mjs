import {
  ASSISTED_DRAFT_VALIDATOR_ID,
  ASSISTED_DRAFT_VALIDATOR_VERSION,
  buildTargetIndex,
  validateAssistedDraft as validateBaseDraft,
} from "./validator.mjs";

export { ASSISTED_DRAFT_VALIDATOR_ID, ASSISTED_DRAFT_VALIDATOR_VERSION, buildTargetIndex };

export function validateAssistedDraft(draft, registry) {
  const report = validateBaseDraft(draft, registry);
  const hasDeprecatedAudit = (draft?.auditTrail ?? []).some((event) => event?.code === "ADP-024");
  const alreadyReported = report.findings.some((finding) => finding.code === "ADP-024");

  if (!hasDeprecatedAudit || alreadyReported) return report;

  const findings = [...report.findings, {
    code: "ADP-024",
    severity: "warning",
    path: "auditTrail",
    message: "Il target deprecato richiede conferma umana.",
  }];
  const invalid = findings.some(({ severity }) => severity === "fatal" || severity === "blocking");
  return {
    ...report,
    findings,
    result: invalid ? "invalid" : "valid_with_warnings",
    readiness: {
      inspectable: !findings.some(({ severity }) => severity === "fatal"),
      importable: !invalid,
      teacherExportable: false,
    },
  };
}
