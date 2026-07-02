# CML-276A — HOME DASHBOARD POST-PUSH SMOKE

Tipo slice: docs-only
Runtime modificato: no
Deploy: non eseguito
Push: non eseguito
Verdict atteso: `CML_276A_HOME_DASHBOARD_POST_PUSH_SMOKE_PASSED_WITH_PARITY_GAP`

## Contesto

Questa slice verifica il post-push di CML-276 su runtime pubblicato locale e controllo di coerenza tra root runtime e snapshot.

## Obiettivo

1. confermare i path effettivi del commit `617b9db`;
2. verificare parita root/snapshot;
3. verificare comportamento Home (banner inline, discipline secondarie, guida rapida on demand, assenza modale automatico);
4. verificare errori runtime osservabili in smoke.

## Verifiche eseguite

- `git show --name-only --oneline 617b9db`
- `git diff --no-index -- index.html _published_snapshot/netlify-current/index.html`
- smoke su `file:///.../_published_snapshot/netlify-current/index.html`
  - Home carica senza modale automatico
  - banner inline visibile
  - toggle discipline Mostra/Nascondi funzionante
  - Guida rapida apre modale solo su richiesta
  - reload pagina senza page errors in smoke Playwright

## Esito controlli

- il commit `617b9db` contiene `_published_snapshot/netlify-current/index.html` e non contiene `index.html`;
- il confronto no-index tra root e snapshot mostra differenze (parita non allineata);
- il comportamento UX della Home risulta coerente con CML-276.

## Invarianti

- nessuna modifica runtime in questa slice;
- nessuna modifica schema `.cml`;
- nessuna modifica dati curricolari;
- nessuna modifica export/import/storage;
- nessun deploy.

## Azione successiva raccomandata

Aprire microfix dedicato di parita root/snapshot (slice successiva), senza alterare la UX gia pubblicata.

## Verdict

`CML_276A_HOME_DASHBOARD_POST_PUSH_SMOKE_PASSED_WITH_PARITY_GAP`
