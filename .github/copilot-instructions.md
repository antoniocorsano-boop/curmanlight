# CurManLight — Copilot Instructions

Prima di pianificare o modificare, leggere e seguire:

1. `AGENTS.md` — regole operative per agenti AI
2. `docs/02_system/AI-DEVELOPMENT-GOVERNANCE.md` — governance per sviluppo AI
3. `docs/02_system/PROJECT-STATE.md` — stato corrente del progetto
4. `docs/02_system/AGENT-REPOSITORY-MAP.md` — mappa del repository

Se una specifica tool-persistente confligge con la governance di sistema, la governance di sistema ha la precedenza.

## Regole Essenziali

- Modifica minima, nessuna regressione
- Coppia applicativa sincronizzata (`index.html` + `_published_snapshot/netlify-current/index.html`)
- Nessun push o deploy senza autorizzazione
- Nessuna nuova dipendenza senza contratto
- Controlli obbligatori prima di dichiarare concluso
