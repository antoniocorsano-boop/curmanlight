# Project State

## Snapshot

- Last milestone: CML-434S — Runtime Remote Safety Gate
- Last slice: CML-434S — Runtime Remote Safety Gate
- Last completed design merge: 67e27da (CML-433U)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (bozzetti alternativi definiti; CML-434 runtime bloccata da safety gate remoto)
- Critical Path: Validazione con utenti → Architettura viste docente → Specifica target → Specifiche utente pre-bozzetto → Bozzetto controllato → Runtime controllato
- Next action: CML-434 Home task selector runtime micro-slice in locale o con patch atomica sicura
- Last verdict: `CML_434S_RUNTIME_REMOTE_SAFETY_GATE_MERGED_REMOTE_RUNTIME_NOT_MODIFIED`
- Repository status: main documentale riallineato; runtime e dati curricolari invariati; movelog corrente `docs/REPO-MOVELOG-v2.md`; CML-434 runtime non applicata da remoto per rischio riscrittura completa/troncata

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

Dopo CML-434D, la prima micro-slice runtime deve seguire la direzione ibrida:

```text
B come ingresso docente + C come logica operativa + A come evoluzione istituzionale futura
```

CML-434 runtime non va applicata da remoto se l'unica modalità disponibile è riscrivere integralmente file HTML grandi da contenuto potenzialmente troncato.

Ogni intervento runtime deve dichiarare:

- profilo utente servito;
- contesto d'uso supportato;
- vista o pannello interessato;
- stato curricolare rappresentato;
- azione primaria consentita;
- criterio di accettazione soddisfatto;
- elementi volutamente esclusi.

## Current Movelog

Il registro operativo corrente è:

```text
docs/REPO-MOVELOG-v2.md
```

Il file `docs/REPO-MOVELOG.md` resta archivio legacy e non va riscritto da remoto.
