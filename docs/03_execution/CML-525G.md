# CML-525G — Executable Fixture Corpus, Validator Interfaces and Tecnologia Target-Registry Sidecar

## Objective

Introduce the first executable contract layer for assisted curriculum drafts without changing canonical curriculum data or enabling the complete assisted workflow.

## Outputs

- `curman-react/src/features/assisted-drafts/contracts.ts`
- `curman-react/data/assisted-drafts/tecnologia-secondary-target-registry.v1.json`
- `curman-react/fixtures/assisted-drafts/corpus.v1.json`
- `curman-react/tools/check-cml525g-assisted-draft-contracts.mjs`
- `curman-react/package.json`

## Boundaries

No changes to canonical curriculum JSON, historical runtime, UI workflow, backend, authentication, external providers or telemetry. Human validation remains mandatory and canonical writes remain disabled.

## Validation

```bash
cd curman-react
npm run test:cml525g
npm run lint
npm run build
```

Merging this React diff to `main` triggers the combined Pages deployment and therefore requires post-publish verification of both legacy root and React preview.

## Verdict

```text
CML_525G_EXECUTABLE_FIXTURE_CORPUS_VALIDATOR_INTERFACES_AND_TECNOLOGIA_TARGET_REGISTRY_READY_FOR_REVIEW
```
