# CML-AGENT-REPOSITORY-READINESS — Report di Readiness del Repository per Agenti

## Stato

| Campo | Valore |
|---|---|
| Stato | COMPLETED — REVIEW FEEDBACK ADDRESSED |
| Branch iniziale | `codex/cml-444-react-legacy-capability-inventory` |
| Branch intermedio | `codex/cml-agent-repository-readiness` |
| Branch finale | `codex/cml-agent-repository-readiness-aligned` |
| Base riallineata | `0bc3e0c` — `main` con CML-455 e CML-456 |
| PR | `#50` |
| Data | 2026-07-11 |

## Obiettivo

Predisporre il repository CurManLight per agenti autonomi o semi-autonomi con:

- mappa verificabile del repository;
- contratto operativo;
- template di incarico e rapporto;
- comandi di validazione;
- protezioni multi-agent;
- release-gate contro pubblicazioni involontarie;
- autorita documentale esplicita per il movelog corrente.

## Riallineamento della Base

Il lavoro iniziale derivava dal commit `4ee7919` della linea CML-444, non antenato del nuovo `origin/main`. Il commit di readiness e stato trapiantato selettivamente sulla base `0bc3e0c`, escludendo CML-444 dalla nuova catena.

## File della Readiness

### File modificati

- `AGENTS.md`
- `.github/copilot-instructions.md`

### File creati

- `docs/02_system/AGENT-REPOSITORY-MAP.md`
- `docs/02_system/AGENT-WORK-CONTRACT.md`
- `docs/02_system/AGENT-TASK-TEMPLATE.md`
- `docs/02_system/AGENT-VALIDATION-COMMANDS.md`
- `docs/03_execution/TEMPLATE-AGENT-EXECUTION.md`
- `tools/check-app-pair.mjs`
- `docs/03_execution/CML-AGENT-REPOSITORY-READINESS.md`

Totale rispetto a `main`: **9 file**.

## Controlli Eseguiti nella Slice Locale

| Controllo | Esito |
|---|---|
| `git status --short --branch` | PASS |
| `git diff --check origin/main...HEAD` | PASS |
| Perimetro file rispetto a `origin/main` | PASS |
| Curriculum validator | PASS — 14/14 |
| Runtime shape test | PASS — 14/14 |
| No secrets scan | PASS |
| No runtime modification | PASS |
| No curriculum modification | PASS |
| No workflow modification | PASS |

## Coppia Applicativa

`tools/check-app-pair.mjs` verifica:

- `index.html` ↔ `_published_snapshot/netlify-current/index.html`;
- `sw.js` ↔ `_published_snapshot/netlify-current/sw.js`.

Esito osservato:

- strumento: funzionante;
- `sw.js`: sincronizzati;
- coppia `index.html`: `PAIR_DIVERGED`, differenza preesistente di 48 byte;
- exit code 1: atteso quando l'invariante non e soddisfatto.

La riconciliazione della coppia legacy resta fuori perimetro e richiede una slice dedicata.

## Autorita Documentale Corretta

La governance corrente in `docs/02_system/PROJECT-STATE.md` stabilisce:

```text
docs/REPO-MOVELOG-v2.md
```

come registro operativo corrente.

Il file:

```text
docs/REPO-MOVELOG.md
```

resta archivio legacy e non va riscritto da remoto.

La regola e stata propagata in:

- `AGENTS.md`;
- `.github/copilot-instructions.md`;
- `AGENT-REPOSITORY-MAP.md`;
- `AGENT-WORK-CONTRACT.md`;
- `AGENT-TASK-TEMPLATE.md`;
- `AGENT-VALIDATION-COMMANDS.md`;
- `TEMPLATE-AGENT-EXECUTION.md`.

## Release-Gate GitHub Pages Corretto

La fonte di verita e `.github/workflows/pages.yml`.

Un push su `main` attiva il workflow Pages quando cambia almeno uno dei seguenti percorsi:

```text
_published_snapshot/netlify-current/**
curman-react/**
.github/workflows/pages.yml
```

Il workflow costruisce un artifact combinato:

- runtime legacy nella radice;
- preview React in `/react-preview/`.

Di conseguenza:

- una modifica React-only integrata in `main` e release-affecting;
- non deve essere descritta come lavoro non-pubblicante;
- richiede autorizzazione al merge/pubblicazione, monitoraggio del workflow e verifica post-deploy;
- un push sul solo branch dedicato non attiva il trigger `push` limitato a `main`.

La regola e stata propagata in tutti i documenti operativi della readiness e nel template di rapporto.

## Review Feedback Affrontato

### Rilievo 1 — Trigger Pages sottostimati

**Problema:** la prima versione indicava soltanto `_published_snapshot/netlify-current/**`, omettendo `curman-react/**` e `.github/workflows/pages.yml`.

**Correzione:** trigger completi, artifact combinato e gate anti-deploy involontario documentati in modo vincolante.

### Rilievo 2 — Movelog legacy indicato come corrente

**Problema:** contratto e template indirizzavano gli agenti a `docs/REPO-MOVELOG.md`.

**Correzione:** `docs/REPO-MOVELOG-v2.md` e ora il solo registro operativo; il file legacy e esplicitamente protetto dalla riscrittura remota.

## Stato Remoto e PR

- Branch remoto: `codex/cml-agent-repository-readiness-aligned`.
- PR: `#50 — CML — Repository readiness per agenti`.
- Base: `main`.
- Modifiche runtime legacy: nessuna.
- Modifiche React: nessuna.
- Modifiche ai dati: nessuna.
- Modifiche ai workflow: nessuna.
- Modifiche a `_published_snapshot/`: nessuna.
- Deploy Pages attivato da questa PR prima del merge: no.
- Merge: non eseguito.
- Pubblicazione: non eseguita.

## Rischi Residui

1. Coppia legacy `index.html`/published divergente di 48 byte, preesistente.
2. Suite E2E generale del runtime legacy non consolidata.
3. La PR modifica governance e tooling: richiede review prima del merge.

## Gate di Integrazione

Prima del merge della PR #50 verificare:

- diff limitato ai 9 file dichiarati;
- nessun percorso trigger Pages presente;
- PR integrabile senza conflitti;
- nessun aggiornamento al movelog legacy;
- regole release e movelog coerenti tra tutti i documenti;
- nessuna pubblicazione attesa dal merge, dato che la PR non modifica i percorsi trigger.

## Verdetto

```text
CML_AGENT_REPOSITORY_READINESS_REVIEW_FEEDBACK_ADDRESSED_READY_FOR_REVIEW
```
