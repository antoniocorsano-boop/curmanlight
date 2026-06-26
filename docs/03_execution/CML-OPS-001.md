# CML-OPS-001 — CLAUDE_CODE_SKILLS_AND_HOOKS_CONTRACT

## Titolo

CML-OPS-001 — Claude Code Skills and Hooks Contract

## Obiettivo

Definire un contratto operativo per sfruttare Claude Code nel progetto CurManLight, senza modificare runtime, dati curricolari o SchoolKB.

## Baseline

- **Repository**: `C:\Users\anton\CurManLight`
- **Branch**: `main`
- **HEAD locale**: `6485fa2`
- **origin/main**: `6485fa2`
- **Working tree**: pulito
- **main**: allineato con origin/main

## Stato consolidato CML

- Dati normalizzati: 10/14 discipline
- Runtime mappa: 10/14 discipline
- Shape test: 10/10 PASS
- Prossima disciplina curricolare: Educazione Fisica
- CML-177 ha stabilito che Educazione Fisica richiede audit aggiuntivo dettagliato, non data preparation immediata

## Stato consolidato SKB

- SKB-001 chiuso da remoto
- SchoolKB e' estensione opzionale, parallela, disattivata di default, reversibile
- Scope futuro massimo: `https://www.googleapis.com/auth/drive.file`
- Nessun OAuth implementato
- Nessuna credenziale/client ID reale nel repository

## Scope autorizzato

- `docs/02_system/CLAUDE-CODE-LOCAL-WORKFLOW-CONTRACT.md`
- `docs/03_execution/CML-OPS-001.md`
- `report/CML-OPS-001_claude_code_skills_and_hooks_contract.md`
- `docs/REPO-MOVELOG.md`

## Scope vietato

- `CLAUDE.md`
- `.claude/`
- `_published_snapshot/netlify-current/index.html`
- `_published_snapshot/netlify-current/sw.js`
- Root `index.html`
- `content/curriculum/`
- `tools/`
- `docs/02_system/SCHOOLKB-DRIVE-CONNECTOR-CONTRACT.md`
- `docs/03_execution/SKB-001.md`
- `report/SKB-001_schoolkb_drive_connector_contract.md`
- Schema `.cml`
- File `.cml`
- Export/import
- Funzioni evidenze/UDA
- `package.json`, `package-lock.json`
- `node_modules`
- Cache
- `.kilo`
- `CurManLight_handoff`
- `CurManLight_published_snapshot`
- `.github`
- Asset pubblici
- OAuth
- Google Drive runtime
- Deploy

## Attivita' svolte

1. Definito come Claude Code puo' essere usato nel progetto CurManLight.
2. Distinzione chiara tra modello, Claude Code, skill, hook, subagent, MCP, plugin.
3. Definito cosa usare subito (CLAUDE.md minimale, skill P0, hook P0) e cosa rinviare (subagent, MCP, plugin).
4. Definito `CLAUDE.md` proposto come specifica testuale nel contratto (non creato).
5. Definita struttura proposta `.claude/skills/` (non creata).
6. Definita struttura proposta `.claude/hooks/` (non creata).
7. Definite priorita' delle skill (8 skill, P0–P5).
8. Definiti hook consigliati (8 hook, P0–P2).
9. Definiti rischi (10 rischi con mitigazione).
10. Definita roadmap OPS (7 step, CML-OPS-001→CML-OPS-007).
11. Definito rinvio MCP e plugin con motivazione.
12. Definito che SchoolKB resta binario separato.
13. Definito che CML-178 su Educazione Fisica resta fuori da questa slice.
14. Definito che questa slice non apre, modifica o anticipa il detailed gap model di Educazione Fisica.

## File creati

- `docs/02_system/CLAUDE-CODE-LOCAL-WORKFLOW-CONTRACT.md` — contratto operativo completo (20 sezioni)
- `docs/03_execution/CML-OPS-001.md` — questo documento
- `report/CML-OPS-001_claude_code_skills_and_hooks_contract.md` — report di sintesi
- `docs/REPO-MOVELOG.md` — aggiunta voce CML-OPS-001

## Sintesi decisione

La decisione OPS e': **usare subito CLAUDE.md minimale, skill locali P0 e hook controllati P0; rinviare subagent, MCP e plugin.**

Razionale:

- CurManLight ha un workflow consolidato a slice che funziona.
- CLAUDE.md fornisce memoria di progetto senza rompere nulla.
- Le skill P0 (cml-sync, cml-docs-only-slice) automatizzano operazioni gia' manuali.
- Gli hook P0 (guard-scope, guard-secrets, guard-push) prevengono errori noti.
- Subagent, MCP e plugin aggiungerebbero complessita' senza un caso d'uso immediato.
- La roadmap e' incrementale: ogni step dipende dal precedente.

## Validazioni

- `git diff --check`: passa
- `git status --short --branch`: solo i 4 file autorizzati
- `git diff --name-only`: solo i 4 file autorizzati

## Conferme

### Conferma docs-only

Questa slice e' docs-only. Nessuna modifica al runtime, ai dati, alle dipendenze, al deploy.

### Conferma nessuna modifica runtime

`_published_snapshot/netlify-current/index.html` e `sw.js` sono invariati.

### Conferma nessuna modifica a `.claude/`

Nessuna directory o file in `.claude/` e' stato creato. La struttura proposta e' solo documentale.

### Conferma `CLAUDE.md` non creato

`CLAUDE.md` alla radice non esiste. La sua specifica e' nel contratto, sezione 6. La creazione avviene in CML-OPS-002.

### Conferma nessuna modifica dati curriculum

`content/curriculum/` e' intatto. Nessun `.normalized.json` modificato.

### Conferma nessuna modifica SchoolKB

Il contratto SchoolKB, SKB-001 e il report SKB sono intatti. Nessuna contaminazione.

### Conferma nessun deploy

Nessun deploy eseguito.

### Conferma nessun push

Nessun push eseguito.

## Verdict locale

`CML_OPS_001_CLAUDE_CODE_SKILLS_AND_HOOKS_CONTRACT_READY`
