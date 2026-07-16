import { validateAssistedDraft } from "./validator-runtime.mjs";

export const ASSISTED_DRAFT_REPOSITORY_VERSION = "1.1.0";

export class AssistedDraftRepositoryError extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = "AssistedDraftRepositoryError";
    this.code = code;
    this.details = details;
  }
}

const clone = (value) => structuredClone(value);

export function createInMemoryDraftStorage() {
  const stable = new Map();
  const recovery = new Map();
  let failNextCommit = false;

  return {
    async readStable(packageId) {
      const value = stable.get(packageId);
      return value ? clone(value) : null;
    },
    async commitStable(record, expectedVersion) {
      if (failNextCommit) {
        failNextCommit = false;
        throw new Error("simulated-storage-failure");
      }
      const currentVersion = stable.get(record.packageId)?.version ?? 0;
      if (currentVersion !== expectedVersion) return { committed: false, currentVersion };
      stable.set(record.packageId, clone(record));
      return { committed: true, currentVersion: record.version };
    },
    async readRecovery(packageId) {
      const value = recovery.get(packageId);
      return value ? clone(value) : null;
    },
    async commitRecovery(record, expectedStableVersion) {
      const currentVersion = stable.get(record.packageId)?.version ?? 0;
      if (currentVersion !== expectedStableVersion) return { committed: false, currentVersion };
      recovery.set(record.packageId, clone(record));
      return { committed: true, currentVersion };
    },
    async deleteRecovery(packageId) {
      recovery.delete(packageId);
    },
    simulateNextCommitFailure() {
      failNextCommit = true;
    },
  };
}

export function createAssistedDraftRepository({ storage, registry, now = () => new Date().toISOString() }) {
  if (!storage) throw new AssistedDraftRepositoryError("ADR-001", "Storage adapter mancante.");

  const validate = (draft) => {
    const report = validateAssistedDraft(draft, registry);
    if (!report.readiness.importable) {
      throw new AssistedDraftRepositoryError("ADR-002", "Draft non valido: salvataggio rifiutato.", { report });
    }
    return report;
  };

  const save = async (draft, { expectedVersion = null } = {}) => {
    const report = validate(draft);
    const current = await storage.readStable(draft.packageId);
    const observedVersion = current?.version ?? 0;
    if (expectedVersion !== null && expectedVersion !== observedVersion) {
      throw new AssistedDraftRepositoryError("ADR-003", "Conflitto di versione.", {
        expectedVersion,
        currentVersion: observedVersion,
      });
    }

    const record = {
      packageId: draft.packageId,
      version: observedVersion + 1,
      savedAt: now(),
      draft: clone({ ...draft, packageVersion: observedVersion + 1 }),
      validatorReport: clone(report),
    };

    try {
      const result = await storage.commitStable(record, observedVersion);
      if (!result?.committed) {
        throw new AssistedDraftRepositoryError("ADR-003", "Conflitto di versione.", {
          expectedVersion: observedVersion,
          currentVersion: result?.currentVersion ?? null,
        });
      }
    } catch (cause) {
      if (cause instanceof AssistedDraftRepositoryError) throw cause;
      throw new AssistedDraftRepositoryError("ADR-004", "Salvataggio atomico non completato.", { cause: String(cause) });
    }
    return clone(record);
  };

  return {
    async load(packageId) {
      return storage.readStable(packageId);
    },

    save,

    async saveRecovery(draft, { expectedVersion = null } = {}) {
      const report = validate(draft);
      const stableRecord = await storage.readStable(draft.packageId);
      const observedVersion = stableRecord?.version ?? 0;
      if (expectedVersion !== null && expectedVersion !== observedVersion) {
        throw new AssistedDraftRepositoryError("ADR-003", "Conflitto di versione.", {
          expectedVersion,
          currentVersion: observedVersion,
        });
      }
      const record = {
        packageId: draft.packageId,
        recoveryId: `${draft.packageId}:${now()}`,
        basedOnVersion: observedVersion,
        createdAt: now(),
        draft: clone(draft),
        validatorReport: clone(report),
      };
      const result = await storage.commitRecovery(record, observedVersion);
      if (!result?.committed) {
        throw new AssistedDraftRepositoryError("ADR-003", "Conflitto di versione.", {
          expectedVersion: observedVersion,
          currentVersion: result?.currentVersion ?? null,
        });
      }
      return clone(record);
    },

    async getRecovery(packageId) {
      return storage.readRecovery(packageId);
    },

    async restoreRecovery(packageId, { expectedVersion = null } = {}) {
      const recovery = await storage.readRecovery(packageId);
      if (!recovery) throw new AssistedDraftRepositoryError("ADR-005", "Snapshot di recovery non disponibile.");
      const restored = await save(recovery.draft, { expectedVersion });
      await storage.deleteRecovery(packageId);
      return restored;
    },

    async discardRecovery(packageId) {
      await storage.deleteRecovery(packageId);
    },
  };
}
