import Dexie, { type EntityTable } from "dexie";
import type {
  AssistedDraftRecoveryRecord,
  AssistedDraftStableRecord,
  AssistedDraftStorageAdapter,
} from "./local-draft-repository.mjs";

interface AssistedDraftDatabase extends Dexie {
  stableDrafts: EntityTable<AssistedDraftStableRecord, "packageId">;
  recoveryDrafts: EntityTable<AssistedDraftRecoveryRecord, "packageId">;
}

export function createDexieDraftStorage(databaseName = "curmanlight-assisted-drafts"): AssistedDraftStorageAdapter {
  const db = new Dexie(databaseName) as AssistedDraftDatabase;
  db.version(1).stores({
    stableDrafts: "&packageId, version, savedAt",
    recoveryDrafts: "&packageId, recoveryId, basedOnVersion, createdAt",
  });

  return {
    async readStable(packageId) {
      return (await db.stableDrafts.get(packageId)) ?? null;
    },
    async commitStable(record) {
      await db.transaction("rw", db.stableDrafts, async () => {
        await db.stableDrafts.put(structuredClone(record));
      });
    },
    async readRecovery(packageId) {
      return (await db.recoveryDrafts.get(packageId)) ?? null;
    },
    async writeRecovery(record) {
      await db.transaction("rw", db.recoveryDrafts, async () => {
        await db.recoveryDrafts.put(structuredClone(record));
      });
    },
    async deleteRecovery(packageId) {
      await db.recoveryDrafts.delete(packageId);
    },
  };
}
