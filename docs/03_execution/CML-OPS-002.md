# CML-OPS-002 — CLAUDE_MD_MINIMAL_PROJECT_MEMORY

## Titolo

CML-OPS-002 — CLAUDE.md Minimal Project Memory

## Obiettivo

Creare un file `CLAUDE.md` minimale alla radice del repository CurManLight, come memoria operativa locale per Claude Code, traducendo in forma operativa il contratto definito in CML-OPS-001.

## Baseline

- **Repository**: `C:\Users\anton\CurManLight`
- **Branch**: `main`
- **HEAD locale**: `28b697e`
- **origin/main**: `28b697e`
- **Working tree**: pulito
- **Verdict precedente**: `CML_OPS_001_CLAUDE_CODE_SKILLS_AND_HOOKS_CONTRACT_CLOSED_REMOTE`

## Scope autorizzato

- `CLAUDE.md`
- `docs/03_execution/CML-OPS-002.md`
- `report/CML-OPS-002_claude_md_minimal_project_memory.md`
- `docs/REPO-MOVELOG.md`

## Scope vietato

- `.claude/`
- `_published_snapshot/netlify-current/`
- `content/curriculum/`
- `tools/`
- Contratti di sistema (OPS-001, SKB)
- Schema `.cml`, export/import, funzioni evidenze/UDA
- Dipendenze, credenziali, deploy

## Contratto OPS di riferimento

`docs/02_system/CLAUDE-CODE-LOCAL-WORKFLOW-CONTRACT.md` — sezione 6: specifica del `CLAUDE.md` proposto.

## File creato

`CLAUDE.md` — 8 sezioni, ~75 righe, contenuto operativo minimale.

## Sintesi contenuto `CLAUDE.md`

1. **Project Identity**: CurManLight, PWA statica, JS vanilla, source of truth, conservative integration.
2. **Current Consolidated State**: 10/14 normalizzati, 10/14 runtime, 10/10 shape, Educazione Fisica pending, SchoolKB disattivato, OPS in corso.
3. **Operating Rules**: 11 regole operative (slice, preflight, push, deploy, scope, credenziali, separazione CML/SKB).
4. **Slice Types**: 8 tipi con scope corrispondente.
5. **Validation Commands**: 4 comandi (git status, diff --check, validatore curriculum, shape test).
6. **Report Format**: formato breve, conferme, stato consolidato, report completo solo se necessario.
7. **SchoolKB Boundary**: parallelo, no OAuth senza slice, no credenziali, scope massimo drive.file.
8. **Next Recommended Slices**: OPS-003, OPS-005, CML-178.

## Vincoli rispettati

- Brevita': ~75 righe (soglia 80)
- Nessuna cronologia dettagliata
- Nessun path locale sensibile
- Nessun link OAuth reale o client ID
- Nessun token, API key o segreto
- Nessuna istruzione di deploy automatico
- Nessuna autorizzazione di push automatico fuori SYNC

## Validazioni

- `git diff --check`: passa
- `git diff --name-only`: solo 4 file autorizzati
- Verifica credenziali: nessun token/API key/client secret/client ID reale/bearer/refresh/`sk-`/OAuth secret in `CLAUDE.md`
- Line count `CLAUDE.md`: ~75 righe, sotto soglia 80

## Conferme

### Conferma nessuna creazione `.claude/`

Nessuna directory `.claude/` creata.

### Conferma nessuna skill creata

Nessun file in `.claude/skills/` creato.

### Conferma nessun hook creato

Nessun file in `.claude/hooks/` creato.

### Conferma nessuna modifica runtime

`_published_snapshot/netlify-current/` intatto.

### Conferma nessuna modifica dati curriculum

`content/curriculum/` intatto.

### Conferma nessuna modifica SchoolKB

Contratto SKB e documenti SKB intatti.

### Conferma nessun deploy

Nessun deploy eseguito.

### Conferma nessun push

Nessun push eseguito.

## Verdict locale

`CML_OPS_002_CLAUDE_MD_MINIMAL_PROJECT_MEMORY_READY`
