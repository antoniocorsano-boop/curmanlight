# CML-276 HOME DASHBOARD MINIMAL RUNTIME REDESIGN — Report

## Sintesi

CML-276 applica il primo runtime minimo scelto in CML-275: Home orientata al bisogno professionale, onboarding non bloccante, discipline secondarie nella vista Home.

## Stato di partenza

- ciclo architetturale CML-267→275 gia consolidato e pubblicato;
- Home con copy e struttura ancora parzialmente disciplina-centriche;
- overlay di benvenuto presente in modalita automatica.

## Intervento runtime eseguito

- introdotto banner inline in Home con orientamento professionale;
- riorganizzati ingressi Home in schede operative per bisogno;
- introdotto pannello discipline secondario con stato iniziale chiuso;
- mantenuta Guida rapida solo su richiesta esplicita;
- rimossa apertura automatica del modale iniziale.

## Criteri soddisfatti

- nessun blocco iniziale della navigazione;
- orientamento contestuale persistente in Home;
- azioni principali visibili senza sovraccarico iniziale;
- discipline trattate come filtro e non come ingresso primario.

## Controlli eseguiti

- `git diff --check` passato;
- validator curriculum passato;
- runtime shape test passato (14/14).

## Invarianti

- schema `.cml` invariato;
- dati curricolari invariati;
- export/import invariati;
- storage profondo invariato;
- validatori invariati;
- nessun deploy.

## Verdict

`CML_276_HOME_DASHBOARD_MINIMAL_RUNTIME_REDESIGN_READY_LOCAL_NOT_PUSHED`
