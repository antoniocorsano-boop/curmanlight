# CML-268 DASHBOARD AND ONBOARDING CONTRACT — Report

## Sintesi

CML-268 formalizza il livello Dashboard/Onboarding come specifica docs-only per il nuovo cruscotto professionale di CurManLight. La Home viene definita come ingresso per bisogno professionale, con Curriculum e Didattica come macro-card principali e con il menu discipline relegato a supporto secondario.

## Stato di partenza

- repository allineato in partenza;
- CML-267 già consolidata localmente;
- nessuna modifica runtime richiesta per questa slice;
- focus esclusivo su documentazione architetturale.

## Decisione architetturale

Il modello corrente non viene rovesciato: viene riorientato.

- CML-065 resta il contratto base del modello Curriculum/Didattica.
- CML-267 descrive l'ambiente curricolare professionale.
- CML-268 definisce il primo punto di ingresso, cioè Dashboard e onboarding.

## Contenuti fissati

- problema del modello attuale;
- principio di ingresso per bisogno professionale;
- struttura del cruscotto;
- messaggio iniziale minimo;
- modale ridotto o eliminato;
- schede principali Home;
- contesto di lavoro;
- menu discipline secondario;
- stati vuoti;
- accessibilità dei pannelli apribili;
- criteri di accettazione per la futura runtime slice.

## Controlli richiesti

- `git status` iniziale
- `git diff --name-only`
- `git diff --check`
- verifica docs-only
- validatore curriculum
- shape test runtime
- secret scan base sui file modificati
- commit locale con messaggio previsto

## Invarianti

- runtime invariato
- schema `.cml` invariato
- storage invariato
- export/import invariati
- nessun deploy
- nessun push

## Verdict

`CML_268_DASHBOARD_AND_ONBOARDING_CONTRACT_READY_LOCAL_NOT_PUSHED`
