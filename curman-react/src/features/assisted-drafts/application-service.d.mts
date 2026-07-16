import type { AssistedCurriculumDraft } from "./contracts";
import type {
  AssistedDraftRecoveryRecord,
  AssistedDraftRepository,
  AssistedDraftStableRecord,
} from "./local-draft-repository.mjs";

export interface AssistedDraftInspection {
  packageId: string;
  stable: AssistedDraftStableRecord | null;
  recovery: AssistedDraftRecoveryRecord | null;
  recoveryAvailable: boolean;
  recoveryDecisionRequired: boolean;
  currentVersion: number;
}

export interface AssistedDraftConflictResult {
  status: "conflict";
  errorCode: "ADR-003";
  currentVersion: number | null;
  expectedVersion: number | null;
}

export type AssistedDraftSaveResult =
  | { status: "saved"; stable: AssistedDraftStableRecord }
  | AssistedDraftConflictResult;

export type AssistedDraftCheckpointResult =
  | { status: "recovery_saved"; recovery: AssistedDraftRecoveryRecord }
  | AssistedDraftConflictResult;

export type AssistedDraftRestoreResult =
  | { status: "restored"; stable: AssistedDraftStableRecord }
  | AssistedDraftConflictResult;

export interface AssistedDraftApplicationService {
  inspect(packageId: string): Promise<AssistedDraftInspection>;
  save(draft: AssistedCurriculumDraft, expectedVersion: number | null): Promise<AssistedDraftSaveResult>;
  checkpoint(draft: AssistedCurriculumDraft, expectedVersion: number | null): Promise<AssistedDraftCheckpointResult>;
  restore(packageId: string, expectedVersion: number | null): Promise<AssistedDraftRestoreResult>;
  discardRecovery(packageId: string): Promise<{ status: "recovery_discarded"; packageId: string }>;
}

export function createAssistedDraftApplicationService(options: {
  repository: AssistedDraftRepository;
}): AssistedDraftApplicationService;
