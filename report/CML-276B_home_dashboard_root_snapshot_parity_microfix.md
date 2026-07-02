# CML-276B HOME DASHBOARD ROOT SNAPSHOT PARITY MICROFIX — Report

## Sintesi

CML-276B chiude il parity gap emerso in CML-276A tra root runtime e snapshot runtime, mantenendo invariata la UX gia validata in CML-276.

## Problema rilevato

- `617b9db` aveva aggiornato `_published_snapshot/netlify-current/index.html` ma non `index.html`;
- il confronto no-index mostrava divergenze tra root e snapshot.

## Intervento

- riallineamento 1:1 del file root mediante copia controllata dello snapshot valido;
- nessuna modifica a logica, copy o comportamento oltre la parita tecnica.

## Verifica parita

Comando:

- `git diff --no-index -- index.html _published_snapshot/netlify-current/index.html`

Esito:

- nessuna differenza.

## Controlli repository

- `git diff --check` passato;
- validator curriculum passato;
- shape test runtime passato (14/14).

## Invarianti

- UX Home invariata;
- schema `.cml` invariato;
- dati curricolari invariati;
- export/import invariati;
- storage invariato;
- nessun deploy.

## Verdict

`CML_276B_HOME_DASHBOARD_ROOT_SNAPSHOT_PARITY_MICROFIX_PUSHED`
