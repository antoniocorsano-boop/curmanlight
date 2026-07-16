import fs from "node:fs";
import assert from "node:assert/strict";

const source = fs.readFileSync("src/features/assisted-drafts/assisted-draft-workspace-shell.tsx", "utf8");

for (const token of [
  "recoveryDecisionRequired",
  "Ripristina copia di recupero",
  "Scarta copia di recupero",
  "Nessuna scelta viene applicata automaticamente",
  "aria-live=\"polite\"",
  "runHandled(workspace.restoreRecovery())",
  "runHandled(workspace.discardRecovery())",
]) {
  assert.equal(source.includes(token), true, `Token mancante: ${token}`);
}

assert.equal(source.includes("actionsDisabled = busy || !draft || !packageId || recoveryDecisionRequired"), true);
assert.equal(source.includes("useEffect"), false);

console.log("CML-525K PASS: explicit recovery decision and guarded workspace actions.");
