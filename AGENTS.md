# CurManLight — Guida per Agenti AI

CurManLight (CML) e una PWA statica per il curricolo verticale dell'I.C. Calvario-Covotta "don Lorenzo Milani", Ariano Irpino. Supporta consultazione, proposta, revisione e validazione umana del curricolo scolastico. Non deve sostituire le decisioni collegiali. Tratta contenuti curricolari e non deve introdurre dati personali. Privilegia semplicita, trasparenza e funzionamento locale.

## Stack

- HTML/CSS/JavaScript vanilla (applicazione monolitica single-file)
- Nessuna dipendenza runtime nel codice pubblicato
- Nessun backend, nessun framework nel runtime attivo
- React/Vite/TypeScript in `curman-react/` (migrazione in corso, pubblicata come preview isolata)

## Architettura

- **Punto di ingresso pubblico**: `_published_snapshot/netlify-current/index.html`
- **Coppia applicativa da mantenere sincronizzata**: `index.html` (radice) + `_published_snapshot/netlify-current/index.html`
- **Service worker**: `sw.js` (radice e published identici, cache v455-cml436)
- **Manifest PWA**: `_published_snapshot/netlify-current/manifest.webmanifest`
- **Nessuna fase di build** per il runtime legacy attuale: il codice e direttamente eseguibile
- **Pubblicazione GitHub Pages**: un push su `main` attiva il workflow se modifica almeno uno di questi percorsi: `_published_snapshot/netlify-current/**`, `curman-react/**`, `.github/workflows/pages.yml`
- **Artifact Pages combinato**: runtime legacy nella radice del sito + build React in `/react-preview/`; anche una modifica esclusivamente React integrata in `main` esegue il deploy Pages
- **Dati**: `content/curriculum/*.normalized.json` (14 discipline)
- **Documentazione**: `docs/` (02_system per governance, 03_execution per report)
- **Movelog operativo corrente**: `docs/REPO-MOVELOG-v2.md`
- **Movelog legacy**: `docs/REPO-MOVELOG.md` e un archivio e non va riscritto da remoto
- **Report di slice**: `report/`
- **Strumenti**: `tools/` (validazione, test, trasformazione)

## Organizzazione Repository

| Percorso | Scopo |
|----------|-------|
| `index.html` | Runtime radice (copia di lavoro) |
| `_published_snapshot/netlify-current/index.html` | Runtime pubblicato (fonte di verita per GitHub Pages) |
| `_published_snapshot/netlify-current/` | Cartella pubblicata legacy |
| `content/curriculum/*.normalized.json` | Dati curricolari 14 discipline |
| `docs/02_system/` | Governance, contratti, architettura |
| `docs/03_execution/` | Report di slice ed esecuzione |
| `docs/REPO-MOVELOG-v2.md` | Registro operativo corrente delle slice |
| `docs/REPO-MOVELOG.md` | Archivio legacy; non riscrivere da remoto |
| `report/` | Report dettagliati per slice |
| `tools/` | Script di validazione e test |
| `sw.js` | Service worker (cache offline) |
| `curman-react/` | Migrazione React pubblicata come preview isolata |
| `.codex/` | Configurazione Codex CLI |
| `.claude/skills/` | Skill Claude Code |

## Regole Operative

### Obblighi

1. Leggere questo file prima di qualsiasi intervento
2. Leggere lo stato di progetto: `docs/02_system/PROJECT-STATE.md`
3. Identificare il perimetro dell'attivita e dichiararlo
4. Ispezionare tutti i punti di utilizzo del codice coinvolto
5. Applicare la modifica minima necessaria
6. Mantenere sincronizzati i file della coppia applicativa
7. Eseguire tutti i controlli prima di dichiarare concluso
8. Aggiornare il movelog operativo corrente `docs/REPO-MOVELOG-v2.md` quando la slice richiede una registrazione; non riscrivere `docs/REPO-MOVELOG.md` da remoto
9. Prima di qualunque push o merge su `main`, ispezionare i file cambiati rispetto a `origin/main` e verificare se ricadono nei trigger Pages
10. Trattare come operazione di pubblicazione ogni push o merge su `main` che include `_published_snapshot/netlify-current/**`, `curman-react/**` oppure `.github/workflows/pages.yml`
11. Produrre un rapporto nel formato standard
12. Fermarsi prima di push, merge o pubblicazione se non esplicitamente autorizzati

### Divieti

- Non modificare solo uno dei due file applicativi (`index.html` e `_published_snapshot/netlify-current/index.html`)
- Non introdurre librerie, servizi esterni o dipendenze senza autorizzazione esplicita
- Non introdurre autenticazione, backend, analisi comportamentale o raccolta dati
- Non modificare dati curricolari senza una specifica attivita dedicata
- Non effettuare riscritture estese per una correzione locale
- Non sostituire funzioni esistenti con nuove astrazioni senza prova di necessita
- Non modificare il flusso di pubblicazione durante una normale attivita applicativa
- Non eseguire push, merge o pubblicazione senza ordine esplicito
- Non descrivere come "non pubblicante" una modifica React destinata a essere integrata in `main`: il workflow Pages viene eseguito
- Non aggiornare `docs/REPO-MOVELOG.md` da remoto; usare `docs/REPO-MOVELOG-v2.md`
- Non dichiarare controlli eseguiti se non sono stati realmente eseguiti
- Non committare credenziali, segreti, token o chiavi API
- Non eliminare codice apparentemente inutilizzato prima di verificarne tutti i riferimenti

## Slice Types

| Type | Scope |
|------|-------|
| docs-only | Solo file in `docs/`, `report/` e movelog v2 — nessun runtime, nessun dato |
| runtime microfix | Minime modifiche CSS/JS nella coppia applicativa |
| runtime increment | Nuova view/feature nella coppia applicativa |
| curriculum JSON | Solo file in `content/curriculum/*.normalized.json` |
| `.cml` schema/export-import | Formato `.cml`, JS di esportazione/importazione |
| OPS/tooling contract | Policy e skills in `docs/02_system/` |
| React preview | Modifiche in `curman-react/`; il merge su `main` attiva build e deploy Pages |
| public smoke/release gate | Verifica della pubblicazione e dei percorsi trigger |
| sync | Push controllato + verifica post-push; distinguere branch remoto da `main` |

## File Protetti e Impatto Release

Richiedono autorizzazione esplicita: `index.html`, `_published_snapshot/`, `manifest.webmanifest`, `sw.js`, `content/curriculum/`, `tools/`, `.github/workflows/`.

Le modifiche in `curman-react/**` richiedono inoltre una valutazione esplicita dell'impatto release: non modificano il runtime legacy principale, ma un push o merge su `main` attiva il workflow Pages e pubblica una nuova preview React.

## Gate Anti-Pubblicazione Involontaria

Prima di push o merge su `main`:

```bash
git fetch origin
git diff --name-only origin/main...HEAD
```

Se l'elenco contiene almeno un file sotto uno dei percorsi seguenti, il deploy Pages e atteso e deve essere autorizzato:

```text
_published_snapshot/netlify-current/**
curman-react/**
.github/workflows/pages.yml
```

Un push su un branch dedicato non pubblica il sito. L'integrazione dello stesso ramo in `main` puo invece pubblicarlo se contiene uno dei percorsi trigger.

## Controlli Minimi

Ogni intervento DEVE eseguire:

```bash
git status --short --branch
git diff --check
```

Poi i controlli pertinenti al tipo di slice:

```bash
# Validazione curricolare (se coinvolti dati)
node tools/validate-cml-normalized-curriculum.mjs

# Controllo struttura dati (se coinvolto il runtime)
node tools/test-runtime-mappa-dati-shape.mjs

# Confronto coppia applicativa (se modificato il runtime)
node tools/check-app-pair.mjs

# Smoke test React (se modificato curman-react/)
cd curman-react && npm run lint && npm run build
```

## Formato del Risultato

Ogni agente deve restituire:
- obiettivo dell'attivita
- analisi eseguita
- file modificati
- modifica effettuata (descrizione concisa)
- controlli eseguiti con esito per ciascuno
- rischi residui
- stato Git finale
- percorsi trigger Pages presenti o assenti nel diff
- distinzione tra push su branch, merge su `main`, deploy attivato e pubblicazione verificata

## Protezioni Multi-Agent

- Un agente non deve modificare file gia assegnati a un'altra attivita parallela
- Ogni attivita deve avere branch dedicato, insieme di file limitato, rapporto dedicato
- Gli agenti non devono integrare tra loro i branch
- Non risolvere conflitti scegliendo arbitrariamente una versione
- Non effettuare rebase, squash o modifica alla cronologia condivisa senza autorizzazione

## Verifiche

```bash
git status --short --branch
git diff --check
git diff --name-only origin/main...HEAD
node tools/validate-cml-normalized-curriculum.mjs
node tools/test-runtime-mappa-dati-shape.mjs
node tools/check-app-pair.mjs
```

## Riferimenti

- `docs/02_system/AGENT-REPOSITORY-MAP.md` — mappa completa del repository
- `docs/02_system/AGENT-WORK-CONTRACT.md` — contratto operativo per attivita
- `docs/02_system/AGENT-TASK-TEMPLATE.md` — modello di incarico
- `docs/02_system/AGENT-VALIDATION-COMMANDS.md` — registro comandi verificati
- `docs/03_execution/TEMPLATE-AGENT-EXECUTION.md` — modello di rapporto
- `docs/REPO-MOVELOG-v2.md` — registro operativo corrente
- `docs/REPO-MOVELOG.md` — archivio legacy; non riscrivere da remoto
- `docs/02_system/AI-DEVELOPMENT-GOVERNANCE.md` — governance sviluppo AI
- `docs/02_system/PROJECT-STATE.md` — stato di progetto e autorita sul movelog corrente
- `.github/workflows/pages.yml` — fonte di verita per i trigger di pubblicazione
- `CLAUDE.md` — stato consolidato (Claude Code)
- `CONTRIBUTING.md` — linee guida contribuzione
