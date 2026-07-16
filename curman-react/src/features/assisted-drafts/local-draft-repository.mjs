import { validateAssistedDraft } from "./validator-runtime.mjs";

export const ASSISTED_DRAFT_REPOSITORY_VERSION = "1.0.0";

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
    async commitStable(record) {
      if (failNextCommit) {
        failNextCommit = false;
        throw new Error("simulated-storage-failure");
      }
      stable.set(record.packageId, clone(record));
    },
    async readRecovery(packageId) {
      const value = recovery.get(packageId);
      return value ? clone(value) : null;
    },
    async writeRecovery(record) {
      recovery.set(record.packageId, clone(record));
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

  return {
    async load(packageId) {
      return storage.readStable(packageId);
    },

    async save(draft, { expectedVersion = null } = {}) {
      const report = validate(draft);
      const current = await storage.readStable(draft.packageId);
      const currentVersion = current?.version ?? 0;
      if (expectedVersion !== null && expectedVersion !== currentVersion) {
        throw new AssistedDraftRepositoryError("ADR-003", "Conflitto di versione.", {
          expectedVersion,
          currentVersion,
        });
      }

      const record = {
        packageId: draft.packageId,
        version: currentVersion + 1,
        savedAt: now(),
        draft: clone({ ...draft, packageVersion: currentVersion + 1 }),
        validatorReport: clone(report),
      };

      try {
        await storage.commitStable(record);
      } catch (cause) {
        throw new AssistedDraftRepositoryError("ADR-004", "Salvataggio atomico non completato.", { cause: String(cause) });
      }
      return clone(record);
    },

    async saveRecovery(draft) {
      const report = validate(draft);
      const stableRecord = await storage.readStable(draft.packageId);
      const record = {
        packageId: draft.packageId,
        recoveryId: `${draft.packageId}:${now()}`,
        basedOnVersion: stableRecord?.version ?? 0,
        createdAt: now(),
        draft: clone(draft),
        validatorReport: clone(report),
      };
      await storage.writeRecovery(record);
      return clone(record);
    },

    async getRecovery(packageId) {
      return storage.readRecovery(packageId);
    },

    async restoreRecovery(packageId, { expectedVersion = null } = {}) {
      const recovery = await storage.readRecovery(packageId);
      if (!recovery) throw new AssistedDraftRepositoryError("ADR-005", "Snapshot di recovery non disponibile.");
      const restored = await this.save(recovery.draft, { expectedVersion });
      await storage.deleteRecovery(packageId);
      return restored;
    },

    async discardRecovery(packageId) {
      await storage.deleteRecovery(packageId);
    },
  };
}
