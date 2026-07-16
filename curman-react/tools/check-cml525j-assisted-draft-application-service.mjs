import fs from "node:fs";
import assert from "node:assert/strict";
import { createAssistedDraftRepository, createInMemoryDraftStorage } from "../src/features/assisted-drafts/local-draft-repository.mjs";
import { createAssistedDraftApplicationService } from "../src/features/assisted-drafts/application-service.mjs";

const read = (path) => JSON.parse(fs.readFileSync(path, "utf8"));
const corpus = read("fixtures/assisted-drafts/corpus.v1.json");
const registry = read("data/assisted-drafts/tecnologia-secondary-target-registry.v1.json");
const draft = structuredClone(corpus.fixtures.find((item) => item.fixtureId === "valid-minimal-single-source").draft);
let tick = 0;
const now = () => `2026-07-16T13:00:0${tick++}.000Z`;
const repository = createAssistedDraftRepository({ storage: createInMemoryDraftStorage(), registry, now });
const service = createAssistedDraftApplicationService({ repository });

const empty = await service.inspect(draft.packageId);
assert.equal(empty.currentVersion, 0);
assert.equal(empty.recoveryAvailable, false);

const saved = await service.save(draft, 0);
assert.equal(saved.status, "saved");
assert.equal(saved.stable.version, 1);

const edited = structuredClone(saved.stable.draft);
edited.suggestions[0].proposedText += " checkpoint";
const checkpoint = await service.checkpoint(edited, 1);
assert.equal(checkpoint.status, "recovery_saved");
assert.equal(checkpoint.recovery.basedOnVersion, 1);

const withRecovery = await service.inspect(draft.packageId);
assert.equal(withRecovery.recoveryDecisionRequired, true);
assert.equal(withRecovery.currentVersion, 1);

const restored = await service.restore(draft.packageId, 1);
assert.equal(restored.status, "restored");
assert.equal(restored.stable.version, 2);
assert.equal((await service.inspect(draft.packageId)).recoveryAvailable, false);

const staleDraft = structuredClone(restored.stable.draft);
staleDraft.suggestions[0].proposedText += " stale";
const saveConflict = await service.save(staleDraft, 1);
assert.equal(saveConflict.status, "conflict");
assert.equal(saveConflict.errorCode, "ADR-003");
assert.equal(saveConflict.currentVersion, 2);
assert.equal(saveConflict.expectedVersion, 1);

const checkpointConflict = await service.checkpoint(staleDraft, 1);
assert.equal(checkpointConflict.status, "conflict");
assert.equal(checkpointConflict.currentVersion, 2);
assert.equal((await service.inspect(draft.packageId)).recoveryAvailable, false);

const currentCheckpoint = await service.checkpoint(staleDraft, 2);
assert.equal(currentCheckpoint.status, "recovery_saved");
const discarded = await service.discardRecovery(draft.packageId);
assert.equal(discarded.status, "recovery_discarded");
assert.equal((await service.inspect(draft.packageId)).recoveryAvailable, false);

console.log("CML-525J PASS: application service outcomes, stale checkpoint rejection and recovery decisions.");
