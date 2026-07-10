# AGENT-REPOSITORY-MAP.md — Mappa del Repository per Agenti

> Generato il 2026-07-10 dal branch `codex/cml-agent-repository-readiness`.
> Basato su analisi reale del repository, non su ipotesi.

## 1. Panoramica del Prodotto

CurManLight (CML) e una PWA statica per il curricolo verticale dell'I.C. Calvario-Covotta "don Lorenzo Milani", Ariano Irpino. Supporta consultazione, proposta, revisione e validazione umana del curricolo scolastico. Tratta 14 discipline da Infanzia a Secondaria II.

- **URL pubblico**: `https://antoniocorsano-boop.github.io/curmanlight/`
- **Remoto**: `origin` → `https://github.com/antoniocorsano-boop/curmanlight`
- **Branch principale**: `main`
- **Runtime attuale**: applicazione monolitica single-file HTML/CSS/JS vanilla
- **Migrazione**: React/Vite/TypeScript in `curman-react/` (non produttiva)

## 2. Architettura Tecnica

L'applicazione e un singolo file HTML autocontenuto con CSS inline, JavaScript inline e dati curriculum integrati a runtime. Non esiste una fase di build per il runtime attuale. Il codice e direttamente eseguibile nel browser.

**Percorso di esecuzione**:
1. GitHub Pages serve `_published_snapshot/netlify-current/index.html`
2. Il file carica CSS, JS e dati tutto inline
3. Service worker (`sw.js`) gestisce la cache offline
4. `manifest.webmanifest` abilita l'installazione PWA

**Flusso dati**:
- Dati curricolari: `content/curriculum/*.normalized.json` → trasformati in `MAPPA_DATI` inline nel runtime
- Stato locale: `localStorage` per salvataggi, proposte, importazioni
- Nessuna chiamata API esterna (tranne CDN opzionale per esportazione Word)

## 3. Albero Ragionato delle Cartelle

```
CurManLight/
├── index.html                          # Runtime radice (copia di lavoro)
├── sw.js                               # Service worker (identico a published)
├── AGENTS.md                           # Guida per agenti AI
├── CLAUDE.md                           # Memoria progetto Claude Code (.gitignored)
├── CONTRIBUTING.md                     # Linee guida contribuzione
├── DESIGN.md                           # Sistema di design
├── CHANGELOG.md                        # Versioni stabili
├── README.md                           # Readme principale
├── README-FIRST.md                     # Readme introduttivo
│
├── _published_snapshot/
│   └── netlify-current/                # CARTELLA PUBBLICATA (fonte di verita)
│       ├── index.html                  # Runtime pubblicato
│       ├── sw.js                       # Service worker pubblicato
│       ├── manifest.webmanifest        # Manifest PWA
│       ├── favicon.ico
│       ├── icons/                      # Icone PWA (192, 512)
│       ├── assets/                     # Asset statici
│       ├── docs_distribuzione/         # Documenti distribuzione
│       ├── motto-non-multa-sed-multum.html
│       ├── motto-non-multa-sed-multum/
│       ├── riferimenti_istituzionali_normativa.json
│       └── Corso_CurricoloDonMilani_*.pdf
│
├── content/
│   └── curriculum/                     # 14 file .normalized.json
│       ├── italiano.normalized.json
│       ├── matematica.normalized.json
│       ├── scienze.normalized.json
│       ├── storia.normalized.json
│       ├── geografia.normalized.json
│       ├── inglese.normalized.json
│       ├── tecnologia.normalized.json
│       ├── educazione-civica.normalized.json
│       ├── educazione-fisica.normalized.json
│       ├── arte-immagine.normalized.json
│       ├── musica.normalized.json
│       ├── seconda-lingua-comunitaria.normalized.json
│       ├── religione-cattolica.normalized.json
│       └── latino-lel.normalized.json
│
├── docs/
│   ├── 01_product/                     # Documentazione prodotto
│   ├── 02_system/                      # Governance, contratti, architettura (37 file)
│   ├── 03_execution/                   # Report di slice (600+ file)
│   ├── 04_user/                        # Guida utente
│   ├── 04_user_guide/
│   ├── 04_validation/
│   ├── REPO-MOVELOG.md                 # Cronologia slice (10000+ righe)
│   └── REPO-MOVELOG-v2.md
│
├── report/                             # Report dettagliati per slice (580+ file)
│   └── screenshots/                    # Screenshot di verifica
│
├── tools/                              # Script di validazione e test
│   ├── validate-cml-normalized-curriculum.mjs
│   ├── test-runtime-mappa-dati-shape.mjs
│   ├── check-app-pair.mjs             # Confronto coppia applicativa (da creare)
│   ├── generate-static-mappa-dati.mjs
│   ├── json-to-mappa-dati-adapter.mjs
│   ├── to-runtime-mappa-dati-transformer.mjs
│   ├── smoke-hash-nav.mjs
│   └── audit-cml-curriculum-coverage.mjs
│
├── curman-react/                       # Migrazione React (non produttiva)
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
├── .github/
│   ├── workflows/
│   │   ├── pages.yml                   # Deploy GitHub Pages
│   │   └── react-ci.yml               # CI React
│   └── copilot-instructions.md         # Istruzioni Copilot
│
├── .codex/                             # Configurazione Codex CLI
│   ├── AGENTS.md
│   ├── config.toml
│   └── agents/
│
├── .claude/                            # Configurazione Claude Code
│   └── skills/
│       ├── cml-docs-only-slice/
│       ├── cml-readiness-audit/
│       ├── cml-sync/
│       └── curmanlight/
│
├── prototypes/                         Prototipi
├── runtime-fragments/                  Frammenti runtime
├── stitch/                             Stitch (design tool)
├── examples/                           Esempi
├── _handoff/                           Pacchetto handoff
└── CurManLightBrain/                   Obsidian vault locale
```

## 4. File Applicativi Principali

| File | Ruolo | Linee | Stato |
|------|-------|-------|-------|
| `_published_snapshot/netlify-current/index.html` | Runtime pubblicato | 6512 | Fonte di verita |
| `index.html` | Runtime radice (copia di lavoro) | 6513 | Potenzialmente desincronizzato |
| `sw.js` | Service worker | 59 | Identico in entrambe le posizioni |
| `_published_snapshot/netlify-current/manifest.webmanifest` | Manifest PWA | 30 | Solo nella cartella pubblicata |

## 5. Coppie di File da Mantenere Sincronizzati

| Coppia | Verifica | Stato attuale |
|--------|----------|---------------|
| `index.html` ↔ `_published_snapshot/netlify-current/index.html` | `node tools/check-app-pair.mjs` | **DIVERSI** (43 ins / 44 del) |
| `sw.js` (radice) ↔ `_published_snapshot/netlify-current/sw.js` | Confronto hash | Identici |

**ATTENZIONE**: `index.html` e `_published_snapshot/netlify-current/index.html` sono attualmente DESINCRONIZZATI. Il runtime pubblicato (published) e la fonte di verita. Qualsiasi modifica runtime deve applicarsi a ENTRAMBI i file.

## 6. Dati Curricolari

- 14 file `content/curriculum/*.normalized.json`
- Struttura: array di `unitaApprendimento` con campi: id, disciplina, ordine, classe, fascia, ambito, nucleoFondante, competenza, traguardo, obiettivi, conoscenze, abilita, evidenze, criteriValutazione, fonte, stato, validazioneUmana, noteDipartimento
- Validati: 14/14 PASS con `node tools/validate-cml-normalized-curriculum.mjs`
- Shape test: 14/14 PASS con `node tools/test-runtime-mappa-dati-shape.mjs`
- **Non modificare senza attivita dedicata**

## 7. Funzioni e Aree Applicative Principali

Il runtime e organizzato inthese aree all'interno di `index.html`:

| Area | Descrizione |
|------|-------------|
| Header | Titolo, motto, statistiche |
| Sidebar | Navigazione discipline per ordine |
| Toolbar | Filtri, azioni, esportazione |
| Main content | Vista curriculum, dettaglio unita |
| Tab bar | Navigazione sezioni (Consulta, Progetta, Processo, Guida) |
| Export panel | Esportazione Word/Markdown/Copy |
| Import panel | Importazione proposte .cml |
| Referent validation | Validazione referente |
| UDA draft | Bozza UDA in Markdown |
| Local save bar | Salvataggio locale |
| Service worker | Cache offline |

**Accesso dati runtime**: `getUnitsForDiscipline(discKey)` — accesso generalizzato (refactor CML-371→CML-380).

## 8. Persistenza Locale

- `localStorage` per salvataggi, proposte, importazioni, stato UI
- Nessun backend, nessuna chiamata API
- Service worker per cache offline

## 9. Importazione ed Esportazione

- **Esportazione**: Word (.docx via CDN opzionale), Markdown, Copy
- **Importazione**: File `.cml` (formato proprietario v1.0)
- **Flusso dipartimentale**: Proposta → Importazione → Validazione
- **Flusso referente**: Importazione → Report

## 10. Service Worker e Cache

- Cache name: `curmanlight-cache-v455-cml436`
- Strategia: cache-first per asset shell, network-first per navigazione
- File cached: index.html, manifest, motto page, fonti, icone
- Identico in `sw.js` (radice) e `_published_snapshot/netlify-current/sw.js`

## 11. Flusso di Pubblicazione

- **GitHub Actions**: `.github/workflows/pages.yml`
- **Trigger**: push su `main` con modifiche in `_published_snapshot/netlify-current/**`
- **Alternativa**: `workflow_dispatch`
- **Percorso osservato**: `_published_snapshot/netlify-current`
- **Artifact upload**: `actions/upload-pages-artifact@v3`
- **Deploy**: `actions/deploy-pages@v4`
- **Branch**: solo `main`

**Rischio pubblicazione involontaria**: Qualsiasi push a `main` con modifiche nella cartella published attiva il deploy automatico.

## 12. Strumenti di Validazione

| Script | Scopo | Dipendenze |
|--------|-------|------------|
| `tools/validate-cml-normalized-curriculum.mjs` | Valida 14 file .normalized.json | fs, path |
| `tools/test-runtime-mappa-dati-shape.mjs` | Verifica shape runtime mappa dati | fs, child_process, path |
| `tools/check-app-pair.mjs` | Confronta coppia applicativa | fs, crypto (da creare) |
| `tools/smoke-hash-nav.mjs` | Smoke test hash navigazione | — |
| `tools/audit-cml-curriculum-coverage.mjs` | Audit copertura curriculum | — |
| `tools/generate-static-mappa-dati.mjs` | Genera mappa dati statica | — |

## 13. Prove Automatiche

- **Nessun Playwright o test E2E configurato** nel runtime attuale
- `curman-react/` ha lint (`oxlint`) e build (`tsc -b && vite build`)
- React CI: `.github/workflows/react-ci.yml`
- Smoke test: HTTP 200 da URL pubblico dopo deploy

## 14. Documentazione di Governance del Progetto

| File | Scopo |
|------|-------|
| `docs/02_system/AI-DEVELOPMENT-GOVERNANCE.md` | Governance per agenti AI |
| `docs/02_system/PROJECT-STATE.md` | Stato corrente del progetto |
| `docs/02_system/OPS-PREFLIGHT-POLICY-CONTRACT.md` | Policy preflight |
| `docs/02_system/STABLE-CANDIDATE-FREEZE-CONTRACT.md` | Freeze del candidato stabile |
| `docs/02_system/PRODUCT-MATURITY-CHARTER.md` | Charter maturita prodotto |
| `docs/02_system/PRODUCT-USABILITY-AND-UX-MATURITY-ROADMAP.md` | Roadmap UX |
| `docs/02_system/PRODUCT-USABILITY-BACKLOG.md` | Backlog UX |
| `docs/02_system/PRODUCT-MATURITY-PROGRESS.md` | Progresso maturita |
| `docs/02_system/UX-STANDARDS.md` | Standard UX |
| `docs/02_system/TERMINOLOGY-GLOSSARY.md` | Glossario termini |
| `docs/REPO-MOVELOG.md` | Cronologia completa slice |
| `CONTRIBUTING.md` | Linee guida contribuzione |
| `DESIGN.md` | Sistema di design |

## 15. Aree ad Alto Rischio

| Area | Rischio | Motivo |
|------|---------|--------|
| `_published_snapshot/netlify-current/index.html` | ALTO | Modifica diretta del runtime pubblico |
| `index.html` | ALTO | Coppia applicativa — deve restare sincronizzato |
| `sw.js` | ALTO | Service worker — cache invalidation |
| `content/curriculum/*.normalized.json` | ALTO | Dati curricolari — struttura rigida |
| `.github/workflows/pages.yml` | ALTO | Flusso di pubblicazione |
| `tools/` | MEDIO | Strumenti di validazione |
| `manifest.webmanifest` | MEDIO | PWA installazione |
| `curman-react/` | BASSO | Non produttivo, isolate |

## 16. Aree che Richiedono Autorizzazione Esplicita

- Qualsiasi modifica a `_published_snapshot/`
- Qualsiasi modifica a `index.html`
- Qualsiasi modifica a `sw.js`
- Qualsiasi modifica a `content/curriculum/`
- Qualsiasi modifica a `.github/workflows/`
- Qualsiasi modifica a `tools/`
- Push, merge, deploy, pubblicazione
- Introduzione di nuove dipendenze

## 17. Procedura Consigliata per una Modifica Minima

1. Leggere `AGENTS.md`
2. Leggere `docs/02_system/PROJECT-STATE.md`
3. Creare branch dedicato: `codex/cml-[NUMERO]-[descrizione]`
4. Identificare il tipo di slice (docs-only, runtime microfix, runtime increment, curriculum JSON)
5. Dichiarare il perimetro: file autorizzati e file esclusi
6. Ispezionare tutti i punti di utilizzo del codice coinvolto
7. Applicare la modifica minima necessaria
8. Se runtime: modificare ENTRAMBI i file della coppia applicativa
9. Eseguire i controlli minimi:
   ```bash
   git status --short --branch
   git diff --check
   ```
10. Eseguire i controlli pertinenti al tipo di slice
11. Produrre rapporto nel formato standard
12. Fermarsi — non eseguire push senza autorizzazione

## Tabella Riepilogativa

| Area | File principali | Funzione | Rischio | Controlli richiesti |
|------|----------------|----------|---------|---------------------|
| Runtime pubblico | `_published_snapshot/netlify-current/index.html` | Applicazione utente | ALTO | check-app-pair, smoke |
| Runtime radice | `index.html` | Coppia di lavoro | ALTO | check-app-pair |
| Service worker | `sw.js` (entrambe le posizioni) | Cache offline | ALTO | Confronto hash |
| Manifest PWA | `_published_snapshot/netlify-current/manifest.webmanifest` | Installazione PWA | MEDIO | Verifica struttura |
| Dati curriculum | `content/curriculum/*.normalized.json` | 14 discipline | ALTO | validate-cml, shape-test |
| Strumenti validazione | `tools/*.mjs` | Controllo qualita | MEDIO | Esecuzione singola |
| Workflow CI/CD | `.github/workflows/pages.yml` | Pubblicazione GH Pages | ALTO | Nessuna modifica |
| Workflow React CI | `.github/workflows/react-ci.yml` | Build React | BASSO | lint + build |
| Governance | `docs/02_system/` | Regole, contratti | BASSO | diff-check |
| Report | `report/`, `docs/03_execution/` | Documentazione | BASSO | diff-check |
| React migration | `curman-react/` | Migrazione futuro | BASSO | lint + build |
