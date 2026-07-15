# CML-517E — Regression Swarm

## Stato

READY LOCAL — completato localmente, non ancora sottoposto a push, PR o deploy.

## Obiettivo

Introdurre nel repository una suite di regressione tecnica sintetica (swarm) che verifichi
invarianti tecnici dell'applicazione React su 30 combinazioni di personas e scenari, senza
alcuna pretesa di misurare l'usabilità reale.

## Baseline

- `origin/main`: `e5e5897c4be6263b9b1abfd9469d83ae0cdb12aa`
- Branch: `codex/cml-517e-regression-swarm` (traccia `origin/codex/cml-517e-regression-swarm`)

## File recuperati dal remoto

- `curman-react/e2e/cml-517e-regression-swarm.spec.ts`
- `curman-react/playwright.cml517e.config.ts`

## File creati localmente

- `.github/workflows/cml-517e-regression-swarm.yml`
- `docs/03_execution/CML-517E.md`

## Composizione dello swarm

- 6 personas × 5 scenari = 30 combinazioni
- Personas: `docente-poco-esperto`, `docente-esperto`, `docente-disciplinare`,
  `coordinatore-dipartimento`, `referente-curricolo`, `utente-mobile-frettoloso`
- Scenarios: `consulta-unita`, `crea-proposta`, `esporta-cml`, `importa-proposta`,
  `recupera-lavoro`
- Viewport: desktop `1440×1000` per le 5 personas desktop; mobile `390×844` per
  `utente-mobile-frettoloso`

## Natura esclusivamente tecnica

La suite verifica solo invarianti tecnici:

- risposta HTTP 200 della Home;
- visibilità del `body`;
- lunghezza del testo del body > 100 caratteri;
- presenza di almeno un elemento interattivo;
- presenza di almeno un `main`/`[role="main"]`;
- assenza di errori console;
- assenza di eccezioni di pagina.

Ogni evidenza dichiara esplicitamente:

- `regressionScope: 'technical-invariants-only'`;
- `syntheticFindingIsNotUserEvidence: true`;
- `humanReviewRequired: true`.

## Differenza tra regressione sintetica e pilot umano

| Aspetto | Swarm sintetico (CML-517E) | Pilot umano |
|---------|---------------------------|--------------|
| Soggetto | Agenti/personas sintetiche | Docenti reali |
| Misura | Invarianti tecnici | Usabilità reale |
| Obiettivo | Rilevare regressioni tecniche | Raccogliere giudizio d'uso |
| Valore probatorio | Solo tecnico | Decisionale |
| Validazione | Umana obbligatoria | Umana diretta |

Un finding dello swarm non costituisce giudizio di usabilità e non genera modifiche automatiche.

## Assenza di modifiche runtime e canoniche

- nessuna modifica a `index.html`;
- nessuna modifica a `_published_snapshot/netlify-current/index.html`;
- nessuna modifica al comportamento React dell'applicazione;
- nessuna modifica ai dati curricolari canonici (`content/curriculum/**`);
- nessuna modifica ai pacchetti Gap;
- nessun backend, autenticazione, telemetria o servizio remoto;
- uso esclusivo di dati sintetici (personas/scenari versionati).

## Workflow CI

Il file `.github/workflows/cml-517e-regression-swarm.yml`:

- si attiva su pull request verso `main`;
- si attiva per modifiche ai file CML-517E e a `agent-evaluation/**`;
- usa Node 22;
- esegue `npm ci` e `npm run build`;
- installa Playwright e Chromium (`@playwright/test@1.54.1`);
- avvia la preview Vite su `127.0.0.1:4173`;
- attende che la preview risponda;
- esegue `npx playwright test --config=playwright.cml517e.config.ts`;
- carica come artefatti `curman-react/test-results` e il log Vite;
- non invia dati all'esterno oltre agli artefatti standard GitHub Actions.

## Assenza di push, PR, merge e deploy

- push: **no**
- PR: **no**
- merge: **no**
- deploy: **no**

## Validazione umana obbligatoria

Lo swarm è uno strumento di supporto tecnico. I risultati devono essere revisionati da un
umano prima di qualsiasi decisione di modifica o integrazione.

## Verdetto

`CML_517E_REGRESSION_SWARM_READY_LOCAL_NOT_PUSHED_NO_RUNTIME_OR_CANONICAL_CHANGE`
