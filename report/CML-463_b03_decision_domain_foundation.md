# CML-463 — B03 Decision Domain Foundation

## Sintesi

La slice introduce la fondazione di dominio richiesta dal contratto CML-456 prima di intervenire sulla UI o sulla persistenza.

## Nuovi contratti

### Esiti di lavoro

- `accepted_proposal`
- `kept_current`
- `revision_requested`
- `accepted_custom`
- `reopened`

### Ambiti

- `lavoro_personale`
- `lavoro_dipartimentale`

### Policy unica

`canPerformDecisionAction(profile, context, entry, action, isSaving)` verifica:

- profilo presente;
- ruolo autorizzato;
- ordine dichiarato e coerente;
- disciplina coerente;
- ambito coerente con il ruolo;
- unità e stato coerenti con il contesto;
- stato gap azionabile;
- dati minimi completi;
- assenza di salvataggio in corso.

## Regola condivisa

`isDecisionActionableStatus()` limita B03 a:

- `proposta`;
- `non_validato`.

La stessa regola è usata da `needsDecision()`, `computeProgress()` e rimane esposta tramite `isActionableStatus()` per compatibilità progressiva.

## Protezione automatica

Aggiunto `npm run test:b03` e collegato a `.github/workflows/react-ci.yml` prima della build.

## Esclusioni intenzionali

La slice non collega ancora la policy a `RevisioneView` o `DecisioneActions`, non implementa Dexie e non cambia il modello persistito esistente. Queste attività appartengono alle slice successive.

## Rischio residuo

Il vecchio store e la vecchia UI continuano temporaneamente a usare il modello legacy `approvata/rifiutata`. Il nuovo dominio è una fondazione isolata; la migrazione deve avvenire in una slice successiva con test dedicati.

## Verdetto

```text
CML_463_B03_DECISION_DOMAIN_FOUNDATION_REMOTE_BRANCH_READY_FOR_CI
```
