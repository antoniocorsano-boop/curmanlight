# CML-276B — HOME DASHBOARD ROOT SNAPSHOT PARITY MICROFIX

Tipo slice: runtime microfix + docs
Runtime modificato: si (solo parita root/snapshot)
Deploy: non eseguito
Push: non eseguito
Verdict atteso: `CML_276B_HOME_DASHBOARD_ROOT_SNAPSHOT_PARITY_MICROFIX_PUSHED`

## Contesto

Dopo CML-276 e CML-276A il comportamento Home risulta corretto sul runtime snapshot, ma permane una divergenza tecnica tra i due runtime equivalenti del repository.

## Obiettivo

Riallineare i file runtime:

- `index.html`
- `_published_snapshot/netlify-current/index.html`

senza introdurre nuove funzionalita e senza alterare la UX gia validata.

## Intervento eseguito

- copia controllata del runtime valido da `_published_snapshot/netlify-current/index.html` a `index.html`;
- nessuna modifica funzionale ulteriore.

## Scope

Ammesso:

- parita root/snapshot runtime;
- documentazione di slice.

Escluso:

- redesign aggiuntivi;
- modifiche a dati curricolari;
- modifiche schema `.cml`;
- modifiche export/import;
- modifiche storage;
- modifiche validatori.

## File prodotti/modificati

- `index.html`
- `docs/03_execution/CML-276B.md`
- `report/CML-276B_home_dashboard_root_snapshot_parity_microfix.md`
- aggiornamento `docs/REPO-MOVELOG.md`

## Verifiche

- `git diff --no-index -- index.html _published_snapshot/netlify-current/index.html` -> nessuna differenza
- `git diff --check`
- `node tools/validate-cml-normalized-curriculum.mjs`
- `node tools/test-runtime-mappa-dati-shape.mjs`

## Invarianti rispettate

- UX Home invariata rispetto a CML-276
- schema `.cml` invariato
- dati curricolari invariati
- export/import invariati
- storage invariato
- nessun deploy

## Verdict

`CML_276B_HOME_DASHBOARD_ROOT_SNAPSHOT_PARITY_MICROFIX_PUSHED`
