import fs from "node:fs";
import assert from "node:assert/strict";
import {
  AssistedDraftRepositoryError,
  createAssistedDraftRepository,
  createInMemoryDraftStorage,
} from "../src/features/assisted-drafts/local-draft-repository.mjs";

const read = (path) => JSON.parse(fs.readFileSync(path, "utf8"));
const corpus = read("fixtures/assisted-drafts/corpus.v1.json");
const registry = read("data/assisted-drafts/tecnologia-secondary-target-registry.v1.json");
const valid = structuredClone(corpus.fixtures.find((item) => item.fixtureId === "valid-minimal-single-source").draft);
let tick = 0;
const now = () => `2026-07-16T12:00:${String(tick++).padStart(2, "0")}.000Z`;
const storage = createInMemoryDraftStorage();
const repo = createAssistedDraftRepository({ storage, registry, now });

const first = await repo.save(valid, { expectedVersion: 0 });
assert.equal(first.version, 1);
assert.equal(first.draft.packageVersion, 1);

const updatedDraft = structuredClone(first.draft);
updatedDraft.suggestions[0].proposedText += " aggiornato";
const second = await repo.save(updatedDraft, { expectedVersion: 1 });
assert.equal(second.version, 2);

await assert.rejects(
  () => repo.save(updatedDraft, { expectedVersion: 1 }),
  (error) => error instanceof AssistedDraftRepositoryError && error.code === "ADR-003",
);

storage.simulateNextCommitFailure();
await assert.rejects(
  () => repo.save(updatedDraft, { expectedVersion: 2 }),
  (error) => error instanceof AssistedDraftRepositoryError && error.code === "ADR-004",
);
assert.equal((await repo.load(valid.packageId)).version, 2);

const recoveryDraft = structuredClone(second.draft);
recoveryDraft.suggestions[0].proposedText += " recovery";
const recovery = await repo.saveRecovery(recoveryDraft);
assert.equal(recovery.basedOnVersion, 2);
assert.equal((await repo.load(valid.packageId)).version, 2);

const { restoreRecovery } = repo;
const restored = await restoreRecovery(valid.packageId, { expectedVersion: 2 });
assert.equal(restored.version, 3);
assert.equal(await repo.getRecovery(valid.packageId), null);

const invalid = structuredClone(valid);
invalid.canonicalWriteAllowed = true;
await assert.rejects(
  () => repo.save(invalid),
  (error) => error instanceof AssistedDraftRepositoryError && error.code === "ADR-002",
);

const raceStorage = createInMemoryDraftStorage();
const raceRepo = createAssistedDraftRepository({ raceStorage, storage: raceStorage, registry, now });
const raceDraftA = structuredClone(valid);
const raceDraftB = structuredClone(valid);
raceDraftA.packageId = "race-package";
raceDraftB.packageId = "race-package";
raceDraftA.suggestions[0].proposedText += " A";
raceDraftB.suggestions[0].proposedText += " B";
const race = await Promise.allSettled([
  raceRepo.save(raceDraftA, { expectedVersion: 0 }),
  raceRepo.save(raceDraftB, { expectedVersion: 0 }),
]);
assert.equal(race.filter((result) => result.status === "fulfilled").length, 1);
assert.equal(race.filter((result) => result.status === "rejected" && result.reason?.code === "ADR-003").length, 1);
assert.equal((await raceRepo.load("race-package")).version, 1);

console.log("CML-525I PASS: atomic save, race conflict, detached restore, failure preservation, recovery and validation.");
