# CML-517C — First Synthetic Browser Pilot

## Stato

**BLOCKED — non pronta per PR o merge.**

## Obiettivo

Eseguire il primo pilot sintetico browser sulla matrice di 6 personas × 5 scenari definita in CML-517B, producendo 30 record di evidenza, screenshot, log console e rapporto consolidato.

## Baseline

- `main`: `b84fb4e8043d74759f6e778001f90e099a0afd68`;
- branch: `codex/cml-517c-first-synthetic-browser-pilot`;
- foundation: `agent-evaluation/`;
- applicazione target: `curman-react/`;
- harness Playwright storico disponibile come riferimento: CML-473.

## Verifiche svolte

- ispezionato `curman-react/playwright.cml473.config.ts`;
- ispezionato `curman-react/e2e/cml-473-comparative-b03.spec.ts`;
- ispezionato `.github/workflows/cml-473-comparative-b03-audit.yml`;
- confermato il pattern CI che installa temporaneamente `@playwright/test` e Chromium senza modificare il lockfile;
- confermata la matrice dichiarativa di 6 personas e 5 scenari.

## Blocker

Il connettore GitHub della sessione blocca la creazione dei file TypeScript del nuovo driver Playwright. L'ambiente locale non dispone inoltre del comando `agent-browser` né di `gh` e non contiene un checkout autenticato del repository.

Non è quindi possibile, in questa sessione, eseguire o validare onestamente le 30 combinazioni browser.

## Criteri per la ripresa

CML-517C può riprendere quando è disponibile almeno una delle seguenti condizioni:

1. checkout locale autenticato con possibilità di creare e pushare file TypeScript;
2. connettore GitHub che consenta la scrittura del driver Playwright;
3. runtime `agent-browser` o Playwright disponibile per eseguire la baseline pubblicata.

## Output ancora richiesti

- `curman-react/playwright.cml517c.config.ts`;
- `curman-react/e2e/cml-517c-synthetic-swarm.spec.ts`;
- workflow GitHub Actions dedicato;
- 30 record JSON conformi a `agent-evaluation/evidence-schema.json`;
- screenshot desktop/mobile;
- report consolidato con finding sintetici distinti dalle evidenze umane.

## Confini rispettati

- nessuna modifica a `main`;
- nessuna modifica al runtime storico;
- nessuna modifica ai dati curricolari canonici;
- nessuna telemetria;
- nessun dato personale;
- nessuna dichiarazione falsa di test eseguito.

## Verdetto

`CML_517C_FIRST_SYNTHETIC_BROWSER_PILOT_BLOCKED_DRIVER_WRITE_AND_BROWSER_RUNTIME_UNAVAILABLE_NOT_MERGED`
