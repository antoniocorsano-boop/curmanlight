# CurManLight — Guida per Agenti AI

CurManLight è una PWA statica per il curricolo verticale I.C. Calvario-Covotta.

## Stack

- HTML/CSS/JavaScript vanilla
- Nessuna dipendenza runtime
- Nessun backend, nessun framework

## Organizzazione Repository

| Percorso | Scopo |
|----------|-------|
| `_published_snapshot/netlify-current/index.html` | Runtime: app intera in unico file |
| `content/curriculum/*.normalized.json` | Dati curricolari 14 discipline |
| `docs/` | Documentazione tecnica ed esecutiva |
| `report/` | Report di slice |
| `tools/` | Script di validazione e test |
| `.cml` | Formato di esportazione/import |

## Regole Operative

- Una slice per volta, con perimetro autorizzato
- Git preflight prima di ogni slice
- `git diff --check` prima di ogni commit
- Nessun push su `main` diretto senza autorizzazione
- Nessun deploy senza richiesta esplicita
- Mai committare credenziali o secrets

## Slice Types

| Type | Descrizione |
|------|-------------|
| docs-only | Solo file in `docs/`, `report/`, movelog |
| runtime microfix | Minime modifiche CSS/JS in `index.html` |
| runtime increment | Nuova view/feature in `index.html` |
| curriculum JSON | Solo file in `content/curriculum/` |
| OPS/tooling contract | Policy e skills in `docs/02_system/` |

## File Protetti

Richiedono autorizzazione esplicita: `index.html`, `manifest.json`, `service-worker.js`, `assets/`, `content/curriculum/`, `tools/`, `_published_snapshot/`.

## Verifiche

```bash
git status --short
git diff --check
node tools/validate-cml-normalized-curriculum.mjs
node tools/test-runtime-mappa-dati-shape.mjs
```

## Riferimenti

- `docs/REPO-MOVELOG.md` — cronologia slice
- `CLAUDE.md` — stato consolidato e regole
