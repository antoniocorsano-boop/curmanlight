import fs from "node:fs";
import { validateAssistedDraft } from "../src/features/assisted-drafts/validator-runtime.mjs";
const read=(p)=>JSON.parse(fs.readFileSync(p,"utf8"));
const manifest=read("fixtures/assisted-drafts/manifest.v1.json");
const corpus=read(`fixtures/assisted-drafts/${manifest.corpusFile}`);
const registry=read("data/assisted-drafts/tecnologia-secondary-target-registry.v1.json");
const expected=new Map(manifest.fixtures.map(x=>[x.fixtureId,x]));
const failures=[];
for(const fixture of corpus.fixtures){const e=expected.get(fixture.fixtureId);const r=validateAssistedDraft(fixture.draft,registry);const codes=[...new Set(r.findings.map(x=>x.code))].sort();if(!e||r.result!==e.expectedResult||JSON.stringify(codes)!==JSON.stringify([...e.expectedCodes].sort())||JSON.stringify(r.readiness)!==JSON.stringify(e.expectedReadiness))failures.push({fixtureId:fixture.fixtureId,report:r,expected:e});expected.delete(fixture.fixtureId)}
for(const fixtureId of expected.keys())failures.push({fixtureId,message:"Fixture assente"});
if(registry.readOnly!==true||registry.registryVersion!==manifest.registryVersion||corpus.registryVersion!==manifest.registryVersion)failures.push({fixtureId:"registry-contract"});
if(failures.length){console.error(JSON.stringify(failures,null,2));process.exit(1)}
console.log(`CML-525H PASS: ${corpus.fixtures.length} fixture.`);
