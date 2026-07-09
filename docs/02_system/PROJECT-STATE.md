# Project State

## Snapshot

- Last milestone: CML-433U — Specifiche utente pre-bozzetto
- Last slice: CML-433U — Specifiche utente pre-bozzetto
- Last verified main commit: 55c23ab (CML-433)
- Active branch: `codex/cml-433u-user-specifications-pre-mock`
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (specifiche utente pre-bozzetto in review)
- Critical Path: Validazione con utenti → Architettura viste docente → Specifica target → Specifiche utente pre-bozzetto → Bozzetto controllato → Runtime controllato
- Next action: review/merge CML-433U, poi CML-434 Home task selector runtime solo dopo conferma della specifica utente
- Last verdict: `CML_433U_USER_SPECIFICATIONS_PRE_BOZZETTO_READY_FOR_REVIEW_REMOTE_BRANCH`
- Repository status: branch remoto docs-only; runtime e dati curricolari invariati; movelog sync CML-432/CML-433 differito per modifica locale sicura

## Recent Refactor Chain (CML-371 → CML-380)

La catena CML-371 → CML-380 ha completato il refactor dell'accesso runtime ai dati disciplinari:

- Runtime access generalizzato via `getUnitsForDiscipline(discKey)`
- Rimozione dead code `TECNOLOGIA_NORM` / `TECNOLOGIA_NORM_DATA`
- Zero residui hardcoded disciplinari certificati
- Runtime stabile, nessuna regressione

## Runtime Perimeter Reminder

Always treat runtime scope as:

- index.html
- _published_snapshot/netlify-current/index.html

Never reference only one runtime file in execution summaries.

## Product Design Governance Reminder

Dopo CML-433U, il bozzetto grafico deve essere valutato contro le specifiche utente, non contro preferenze estetiche isolate.

Ogni bozzetto deve dichiarare:

- profilo utente servito;
- contesto d'uso supportato;
- vista o pannello interessato;
- stato curricolare rappresentato;
- azione primaria consentita;
- criterio di accettazione soddisfatto;
- elementi volutamente esclusi.

## Deferred Documentation Sync

`docs/REPO-MOVELOG.md` richiede una sincronizzazione successiva per CML-432, CML-433 e CML-433U.

La sincronizzazione non è inclusa in questa branch perché il file supera diecimila righe e una riscrittura remota basata su risposta troncata produrrebbe cancellazioni massive.
