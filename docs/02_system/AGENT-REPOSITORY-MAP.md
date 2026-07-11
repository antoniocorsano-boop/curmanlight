# AGENT-REPOSITORY-MAP.md — Mappa del Repository per Agenti

> Aggiornato sul branch `codex/cml-agent-repository-readiness-aligned`.
> Basato su ispezione del repository e delle regole correnti in `PROJECT-STATE.md` e `.github/workflows/pages.yml`.

## 1. Panoramica del Prodotto

CurManLight (CML) e una PWA statica per il curricolo verticale dell'I.C. Calvario-Covotta "don Lorenzo Milani", Ariano Irpino. Supporta consultazione, proposta, revisione e validazione umana del curricolo scolastico. Tratta 14 discipline da Infanzia a Secondaria di primo grado.

- **URL pubblico**: `https://antoniocorsano-boop.github.io/curmanlight/`
- **Remoto**: `origin` → `https://github.com/antoniocorsano-boop/curmanlight`
- **Branch principale**: `main`
- **Runtime legacy**: applicazione monolitica HTML/CSS/JS vanilla
- **Migrazione React**: `curman-react/`, pubblicata come preview isolata in `/react-preview/`

## 2. Architettura Tecnica

Il sito GitHub Pages distribuisce un artifact combinato:

1. `_published_snapshot/netlify-current/` viene copiato nella radice dell'artifact;
2. `curman-react/` viene compilato con Vite;
3. `curman-react/dist/` viene copiato in `_site/react-preview/`;
4. l'intero `_site` viene distribuito su GitHub Pages.

Il runtime legacy resta direttamente eseguibile senza build. La preview React richiede invece `npm ci` e `npm run build`.

**Flusso dati legacy**:

- dati curricolari: `content/curriculum/*.normalized.json` → struttura runtime incorporata;
- stato locale: `localStorage` per salvataggi, proposte, importazioni e stato UI;
- nessun backend applicativo.

## 3. Albero Ragionato delle Cartelle

```text
CurManLight/
├── index.html                          # Runtime legacy radice, copia di lavoro
├── sw.js                               # Service worker radice
├── AGENTS.md                           # Regole operative per agenti
├── CONTRIBUTING.md
├── DESIGN.md
├── CHANGELOG.md
├── README.md
│
├── _published_snapshot/
│   └── netlify-current/                # Contenuto legacy copiato nella radice Pages
│       ├── index.html
│       ├── sw.js
│       ├── manifest.webmanifest
│       ├── favicon.ico
│       ├── icons/
│       ├── assets/
│       ├── docs_distribuzione/
│       └── altri asset pubblici
│
├── curman-react/                       # Preview React pubblicata in /react-preview/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.ts
│
├── content/
│   └── curriculum/                     # 14 file *.normalized.json
│
├── docs/
│   ├── 01_product/
│   ├── 02_system/                      # Governance, contratti, architettura
│   ├── 03_execution/                   # Rapporti di slice
│   ├── 04_user/
│   ├── 04_validation/
│   ├── REPO-MOVELOG-v2.md              # Registro operativo corrente
│   └── REPO-MOVELOG.md                 # Archivio legacy: non riscrivere da remoto
│
├── report/                             # Report dettagliati e screenshot
├── tools/                              # Validatori, test, trasformazioni
│   ├── validate-cml-normalized-curriculum.mjs
│   ├── test-runtime-mappa-dati-shape.mjs
│   ├── check-app-pair.mjs
│   └── altri strumenti
│
├── .github/
│   ├── workflows/
│   │   ├── pages.yml                   # Build e deploy GitHub Pages combinato
│   │   └── react-ci.yml                # CI React
│   └── copilot-instructions.md
│
├── .codex/
├── .claude/
├── prototypes/
├── runtime-fragments/
├── stitch/
├── examples/
└── _handoff/
```

`CurManLightBrain/` e altri materiali locali non tracciati non fanno parte del perimetro remoto salvo inclusione esplicita.

## 4. File Applicativi Principali

| File o area | Ruolo | Stato operativo |
|---|---|---|
| `_published_snapshot/netlify-current/index.html` | Runtime legacy pubblicato | Fonte della radice Pages |
| `index.html` | Copia di lavoro del runtime legacy | Da mantenere sincronizzata |
| `sw.js` e `_published_snapshot/netlify-current/sw.js` | Cache offline | Coppia da verificare |
| `_published_snapshot/netlify-current/manifest.webmanifest` | Manifest PWA | Presente nella cartella pubblicata |
| `curman-react/` | Preview React | Build e deploy in `/react-preview/` |

## 5. Coppie di File da Mantenere Sincronizzate

| Coppia | Verifica | Stato osservato nella slice |
|---|---|---|
| `index.html` ↔ `_published_snapshot/netlify-current/index.html` | `node tools/check-app-pair.mjs` | **DIVERGED** di 48 byte, preesistente |
| `sw.js` ↔ `_published_snapshot/netlify-current/sw.js` | `node tools/check-app-pair.mjs` | Sincronizzati |

La divergenza del runtime legacy richiede una slice dedicata. Non va corretta incidentalmente durante altre attivita.

## 6. Dati Curricolari

- 14 file in `content/curriculum/*.normalized.json`;
- validazione: `node tools/validate-cml-normalized-curriculum.mjs`;
- controllo shape: `node tools/test-runtime-mappa-dati-shape.mjs`;
- modifiche ammesse solo in una slice dedicata e con validazione completa.

## 7. Funzioni e Aree Applicative Legacy

| Area | Descrizione |
|---|---|
| Header e navigazione | Contesto, titolo, azioni principali |
| Consultazione curricolo | Discipline, ordini, unita e dettagli |
| Proposta e revisione | Confronto, decisioni e validazione umana |
| Import/export `.cml` | Trasferimento locale dei pacchetti di lavoro |
| Export documenti | Word, Markdown e copia |
| Persistenza locale | `localStorage` |
| Service worker | Cache offline |

L'accesso disciplinare generalizzato usa `getUnitsForDiscipline(discKey)`.

## 8. Persistenza e Confini Dati

- stato applicativo locale nel browser;
- nessun backend operativo;
- nessun dato personale da introdurre;
- nessuna autenticazione o telemetria senza contratto e autorizzazione dedicati.

## 9. Importazione ed Esportazione

- formato di lavoro `.cml`;
- flusso docente → dipartimento → referente;
- validazione umana esterna allo strumento;
- eventuale CDN opzionale solo per specifiche esportazioni documentali gia presenti.

## 10. Service Worker e Cache

- coppia `sw.js` radice/published da mantenere coerente;
- ogni modifica richiede verifica della cache e del comportamento offline;
- evitare modifiche collaterali durante slice non dedicate.

## 11. Flusso di Pubblicazione GitHub Pages

La fonte di verita e `.github/workflows/pages.yml`.

Il workflow puo essere avviato manualmente con `workflow_dispatch` oppure automaticamente da un push su `main` quando cambia almeno uno dei seguenti percorsi:

```text
_published_snapshot/netlify-current/**
curman-react/**
.github/workflows/pages.yml
```

Il job:

1. installa le dipendenze React;
2. costruisce la preview React con base `/curmanlight/react-preview/`;
3. copia il contenuto legacy published nella radice dell'artifact;
4. copia la build React in `/react-preview/`;
5. distribuisce l'artifact combinato su GitHub Pages.

### Regola release-gate

Un cambiamento esclusivamente in `curman-react/**` **non e non-pubblicante** quando viene integrato o pushato su `main`: avvia il job Pages e produce un nuovo deploy del sito combinato.

Anche una modifica a `.github/workflows/pages.yml` avvia il workflow dopo il push su `main`.

Prima di ogni merge o push su `main` eseguire almeno:

```bash
git fetch origin
git diff --name-only origin/main...HEAD
```

Se il diff include uno dei tre percorsi trigger, sono obbligatori:

- autorizzazione esplicita alla pubblicazione;
- monitoraggio del workflow Pages;
- verifica post-deploy del runtime legacy e, se pertinente, della preview React;
- rapporto che distingua push su branch, merge su `main`, deploy avviato e pubblicazione verificata.

Un push su un branch dedicato non attiva questo trigger `push` perché il workflow e limitato a `main`.

## 12. Strumenti di Validazione

| Script o comando | Scopo |
|---|---|
| `node tools/validate-cml-normalized-curriculum.mjs` | Validazione dei 14 file curricolari |
| `node tools/test-runtime-mappa-dati-shape.mjs` | Controllo struttura dati runtime |
| `node tools/check-app-pair.mjs` | Confronto delle coppie applicative |
| `npm run lint` in `curman-react/` | Lint React |
| `npm run build` in `curman-react/` | Build React |
| `git diff --name-only origin/main...HEAD` | Identificazione dei percorsi di release |

`check-app-pair.mjs` termina con exit code 1 quando rileva una divergenza: lo strumento puo quindi funzionare correttamente mentre l'invariante della coppia risulta fallito.

## 13. Prove Automatiche

- runtime legacy: validatori e smoke mirati, nessuna suite E2E generale consolidata;
- React: lint, build e controlli dedicati presenti nel progetto;
- CI React: `.github/workflows/react-ci.yml`;
- deploy Pages: `.github/workflows/pages.yml`.

## 14. Documentazione di Governance

| File | Autorita |
|---|---|
| `AGENTS.md` | Regole operative principali per agenti |
| `docs/02_system/PROJECT-STATE.md` | Stato corrente e indicazioni operative |
| `docs/02_system/AI-DEVELOPMENT-GOVERNANCE.md` | Governance dello sviluppo AI |
| `docs/02_system/AGENT-WORK-CONTRACT.md` | Contratto di esecuzione |
| `docs/02_system/AGENT-TASK-TEMPLATE.md` | Modello di incarico |
| `docs/02_system/AGENT-VALIDATION-COMMANDS.md` | Comandi di controllo |
| `docs/REPO-MOVELOG-v2.md` | **Registro operativo corrente** |
| `docs/REPO-MOVELOG.md` | Archivio legacy; **non riscrivere da remoto** |
| `.github/workflows/pages.yml` | Fonte di verita per trigger e job di pubblicazione |

Quando documenti e workflow divergono, verificare il file operativo reale e aggiornare la documentazione nella stessa slice o in una correzione dedicata.

## 15. Aree ad Alto Rischio

| Area | Rischio | Motivo |
|---|---|---|
| `_published_snapshot/netlify-current/**` | ALTO | Contenuto legacy distribuito su Pages |
| `index.html` | ALTO | Coppia del runtime legacy |
| `sw.js` | ALTO | Cache e aggiornamento client |
| `content/curriculum/*.normalized.json` | ALTO | Dati curricolari strutturati |
| `.github/workflows/pages.yml` | ALTO | Trigger, build e deploy |
| `curman-react/**` | ALTO al merge su `main` | Attiva build e deploy Pages della preview |
| `tools/` | MEDIO | Guardrail e validatori |
| `docs/REPO-MOVELOG-v2.md` | MEDIO | Registro operativo corrente |
| `docs/REPO-MOVELOG.md` | PROTETTO | Archivio legacy da non riscrivere remotamente |

## 16. Aree che Richiedono Autorizzazione Esplicita

- modifiche a runtime legacy, service worker, manifest e dati;
- modifiche ai workflow;
- introduzione di dipendenze;
- push o merge su `main`;
- pubblicazione e deploy;
- integrazione in `main` di diff che includono i percorsi trigger Pages;
- riscrittura di cronologia Git condivisa.

## 17. Procedura per una Modifica Minima

1. Leggere `AGENTS.md`.
2. Leggere `docs/02_system/PROJECT-STATE.md`.
3. Confermare che il movelog corrente sia `docs/REPO-MOVELOG-v2.md`.
4. Creare o usare un branch dedicato.
5. Dichiarare file autorizzati ed esclusi.
6. Applicare la modifica minima.
7. Eseguire i controlli pertinenti.
8. Aggiornare il rapporto e, se previsto, `docs/REPO-MOVELOG-v2.md`.
9. Non modificare remotamente `docs/REPO-MOVELOG.md`.
10. Prima di push/merge, ispezionare i percorsi trigger Pages.
11. Fermarsi se push, merge o deploy non sono autorizzati.

## 18. Tabella Riepilogativa

| Area | File principali | Controlli | Impatto main |
|---|---|---|---|
| Runtime legacy | `index.html`, `_published_snapshot/.../index.html` | app-pair, smoke | Deploy Pages se published cambia |
| Service worker | `sw.js` in entrambe le posizioni | app-pair, cache smoke | Deploy se cambia la copia published |
| React preview | `curman-react/**` | lint, build, test dedicati | **Deploy Pages sempre al push su main** |
| Workflow Pages | `.github/workflows/pages.yml` | review YAML e workflow | **Deploy Pages al push su main** |
| Dati curriculum | `content/curriculum/**` | validator, shape | Nessun trigger Pages diretto |
| Governance | `docs/02_system/**`, `AGENTS.md` | diff-check | Nessun trigger Pages diretto |
| Movelog corrente | `docs/REPO-MOVELOG-v2.md` | diff-check | Nessun trigger Pages diretto |
| Movelog legacy | `docs/REPO-MOVELOG.md` | nessuna riscrittura remota | Archivio protetto |
