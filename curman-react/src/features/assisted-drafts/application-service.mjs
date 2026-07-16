import { AssistedDraftRepositoryError } from "./local-draft-repository.mjs";

export const ASSISTED_DRAFT_APPLICATION_SERVICE_VERSION = "1.1.0";

const clone = (value) => (value == null ? value : structuredClone(value));

function conflictOutcome(error, fallbackExpectedVersion) {
  return {
    status: "conflict",
    errorCode: error.code,
    currentVersion: error.details.currentVersion ?? null,
    expectedVersion: error.details.expectedVersion ?? fallbackExpectedVersion ?? null,
  };
}

export function createAssistedDraftApplicationService({ repository }) {
  if (!repository) throw new Error("Assisted draft repository mancante.");

  async function inspect(packageId) {
    const [stable, recovery] = await Promise.all([
      repository.load(packageId),
      repository.getRecovery(packageId),
    ]);

    return {
      packageId,
      stable: clone(stable),
      recovery: clone(recovery),
      recoveryAvailable: Boolean(recovery),
      recoveryDecisionRequired: Boolean(recovery),
      currentVersion: stable?.version ?? 0,
    };
  }

  async function save(draft, expectedVersion) {
    try {
      const stable = await repository.save(draft, { expectedVersion });
      return { status: "saved", stable: clone(stable) };
    } catch (error) {
      if (error instanceof AssistedDraftRepositoryError && error.code === "ADR-003") {
        return conflictOutcome(error, expectedVersion);
      }
      throw error;
    }
  }

  async function checkpoint(draft, expectedVersion) {
    try {
      const recovery = await repository.saveRecovery(draft, { expectedVersion });
      return { status: "recovery_saved", recovery: clone(recovery) };
    } catch (error) {
      if (error instanceof AssistedDraftRepositoryError && error.code === "ADR-003") {
        return conflictOutcome(error, expectedVersion);
      }
      throw error;
    }
  }

  async function restore(packageId, expectedVersion) {
    try {
      const stable = await repository.restoreRecovery(packageId, { expectedVersion });
      return { status: "restored", stable: clone(stable) };
    } catch (error) {
      if (error instanceof AssistedDraftRepositoryError && error.code === "ADR-003") {
        return conflictOutcome(error, expectedVersion);
      }
      throw error;
    }
  }

  async function discardRecovery(packageId) {
    await repository.discardRecovery(packageId);
    return { status: "recovery_discarded", packageId };
  }

  return { inspect, save, checkpoint, restore, discardRecovery };
}
