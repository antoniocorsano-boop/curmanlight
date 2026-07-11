# CurManLight — Copilot Instructions

Prima di pianificare o modificare, leggere e seguire:

1. `AGENTS.md` — regole operative per agenti AI
2. `docs/02_system/AI-DEVELOPMENT-GOVERNANCE.md` — governance per sviluppo AI
3. `docs/02_system/PROJECT-STATE.md` — stato corrente del progetto e autorita sul movelog
4. `docs/02_system/AGENT-REPOSITORY-MAP.md` — mappa del repository e release-gate

Se una specifica tool-persistente confligge con la governance di sistema o con il workflow reale, prevalgono la governance corrente e i file operativi effettivi.

## Regole Essenziali

- Modifica minima, nessuna regressione.
- Coppia applicativa sincronizzata (`index.html` + `_published_snapshot/netlify-current/index.html`).
- Registro operativo corrente: `docs/REPO-MOVELOG-v2.md`.
- `docs/REPO-MOVELOG.md` e archivio legacy e non va riscritto da remoto.
- Nessun push, merge o deploy senza autorizzazione.
- Prima di un merge o push su `main`, controllare i percorsi cambiati rispetto a `origin/main`.
- I trigger Pages sono `_published_snapshot/netlify-current/**`, `curman-react/**` e `.github/workflows/pages.yml`.
- Una modifica React-only integrata in `main` attiva build e deploy GitHub Pages.
- Nessuna nuova dipendenza senza contratto.
- Controlli obbligatori prima di dichiarare concluso.
