import type { AssistedCurriculumDraft, AssistedDraftValidatorReport, CurriculumTargetRegistry, CurriculumTargetRegistryEntry } from "./contracts";

export const ASSISTED_DRAFT_VALIDATOR_ID: "assisted-draft-validator";
export const ASSISTED_DRAFT_VALIDATOR_VERSION: string;
export function buildTargetIndex(registry: CurriculumTargetRegistry): Map<string, CurriculumTargetRegistryEntry>;
export function validateAssistedDraft(draft: AssistedCurriculumDraft | unknown, registry: CurriculumTargetRegistry): AssistedDraftValidatorReport;
