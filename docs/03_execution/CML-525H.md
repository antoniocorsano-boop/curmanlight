# CML-525H — Validator Runtime Module and Fixture Manifest

## Obiettivo

Estrarre il validator dei draft assistiti in un modulo riusabile e rendere verificabile la parità tra corpus, manifest, risultati attesi e readiness.

## Modifiche

- `validator.mjs`: nucleo deterministico senza side effect;
- `validator-runtime.mjs`: entry point pubblico;
- `validator.d.ts`: dichiarazioni TypeScript;
- `manifest.v1.json`: risultato, codici e readiness attesi;
- `check-cml525h-validator-runtime.mjs`: gate manifest/corpus;
- `npm run test:cml525h`.

## Invarianti

Nessuna modifica ai dati canonici, al runtime storico o allo schema `.cml`. Nessuna UI o persistenza di produzione. Validazione umana obbligatoria, scrittura canonica disabilitata, registro target read-only, nessun backend o telemetria.

## Validazione

```bash
cd curman-react
npm run test:cml525g
npm run test:cml525h
npm run lint
npm run build
```

Il diff include `curman-react/**`; il merge su `main` attiva il deploy Pages combinato.

```text
CML_525H_VALIDATOR_RUNTIME_MODULE_AND_FIXTURE_MANIFEST_READY_FOR_REVIEW
```
