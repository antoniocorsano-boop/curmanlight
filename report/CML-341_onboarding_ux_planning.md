# CML-341 — Onboarding UX Planning

## Riepilogo

Slice documentale di pianificazione per il prossimo incremento UX dell'onboarding Home nell'ambito di PM-06 Accompagnamento.

## Decisione strategica

- **Chiave**: `HOME_ONBOARDING_CUE`
- **Tipo**: planning-only, senza modifiche runtime

## Contesto

Dopo l'audit CML-340, il team ha identificato come prossimo incremento ad alto valore un cue di onboarding sulla Home che renda esplicito il primo passo operativo senza aggiungere funzionalità né modificare il flusso esistente.

## Criteri di accettazione

1. L'utente vede un cue breve nella Home che indirizza a consultazione, compilazione o guida
2. Il primo passo consigliato è persistente ma non invasivo
3. La navigazione principale Home / Curriculum / Competenze e progettazione / Esportazioni / Guida rimane invariata
4. Nessun nuovo modale, nessun redesign, nessuna modifica a `index.html` o `_published_snapshot/netlify-current/index.html` in questa slice

## Prossima slice

- **Nome**: `CML-342`
- **Titolo**: Home Onboarding Cue Runtime Microfix
- **Tipo**: runtime microfix
- **Goal**: implementare il cue pianificato in `index.html` e `_published_snapshot/netlify-current/index.html` rispettando i criteri di accettazione sopra

## Gate

- PM-06: 60%
- Nessun incremento percentuale in questa slice (planning only)
- Nessun push, nessun deploy

## Allegati

- `docs/03_execution/CML-341.md`
- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/REPO-MOVELOG.md`

## Verdetto

`CML_341_ONBOARDING_UX_PLANNING_READY_LOCAL_NOT_PUSHED`
