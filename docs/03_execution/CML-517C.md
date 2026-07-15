# CML-517C — First Synthetic Browser Pilot

## Stato

Implementazione remota del primo pilot sintetico browser sulla base della foundation CML-517B.

## Ambito

- 6 personas;
- 5 scenari;
- 30 combinazioni eseguite con Playwright;
- desktop 1440 × 1000;
- mobile 390 × 844 per il profilo mobile-first;
- dati esclusivamente sintetici;
- nessuna telemetria;
- nessuna modifica al curricolo canonico;
- evidenze sintetiche non equiparate a feedback di docenti reali.

## Output

- `curman-react/playwright.cml517c.config.ts`;
- `curman-react/e2e/cml-517c-synthetic-swarm.spec.ts`;
- `.github/workflows/cml-517c-synthetic-browser-pilot.yml`;
- artefatto GitHub Actions con JSON, screenshot e log runtime.

## Criteri

Ogni combinazione deve caricare la baseline React, produrre un record di evidenza e verificare:

1. pagina leggibile;
2. presenza di controlli interattivi;
3. assenza di errori console;
4. formato uniforme del record;
5. human review obbligatoria.

## Vincoli interpretativi

Il test corrente è un pilot di orientamento e stabilità, non un agente autonomo capace di decidere liberamente il percorso. La comprensione reale dei compiti resta da validare con docenti e con driver agentico successivo.

## Verdetto atteso

`CML_517C_FIRST_SYNTHETIC_BROWSER_PILOT_30_RUNS_PASS_NO_RUNTIME_OR_CANONICAL_CHANGE`
