# CML-OPS-004 - CML_DOCS_ONLY_AND_READINESS_SKILLS

## Titolo

CML-OPS-004 - Docs-only and Readiness Audit Skills

## Obiettivo

Creare due skill locali Claude Code per CurManLight: `cml-docs-only-slice` e `cml-readiness-audit`. La slice crea solo istruzioni documentali/operative e non introduce hook, script eseguibili, modifiche runtime, dati curricolari, tools o SchoolKB.

## Baseline

- **Repository**: `C:\Users\anton\CurManLight`
- **Branch**: `main`
- **HEAD locale**: `d79956e`
- **origin/main**: `d79956e`
- **Working tree**: pulito
- **Verdict precedente**: `CML_OPS_003_SYNC_CLOSED_REMOTE`
- **Skill esistente**: `.claude/skills/cml-sync/SKILL.md`

## Scope Autorizzato

- `.claude/skills/cml-docs-only-slice/SKILL.md`
- `.claude/skills/cml-readiness-audit/SKILL.md`
- `CLAUDE.md`
- `docs/03_execution/CML-OPS-004.md`
- `report/CML-OPS-004_docs_only_and_readiness_skills.md`
- `docs/REPO-MOVELOG.md`

## Scope Vietato

- `.claude/skills/cml-sync/SKILL.md`
- `.claude/hooks/`
- Altre nuove skill
- `_published_snapshot/netlify-current/`
- Root `index.html`
- `content/curriculum/`
- `tools/`
- Contratti OPS/SKB esistenti
- Schema `.cml`, file `.cml`, export/import, funzioni evidenze/UDA
- SchoolKB runtime, OAuth, credenziali, dipendenze, deploy, push

## Contratto OPS di Riferimento

`docs/02_system/CLAUDE-CODE-LOCAL-WORKFLOW-CONTRACT.md` - sezione 7.2 e roadmap OPS: `cml-docs-only-slice` come skill P0 e `cml-readiness-audit` come skill P1.

## Skill Create

- `.claude/skills/cml-docs-only-slice/SKILL.md`
- `.claude/skills/cml-readiness-audit/SKILL.md`

## Sintesi `cml-docs-only-slice`

La skill guida slice documentali per contratti, audit, execution docs, report, movelog, pianificazione e closure docs-only. Definisce preflight Git, regole di blocco, validazioni, commit selettivo e divieto di push/deploy fuori sync.

## Sintesi `cml-readiness-audit`

La skill guida audit di readiness disciplinare prima di data preparation o runtime integration. Definisce dimensioni di valutazione, output minimo del gap model, regole di blocco contro inferenze forti e divieto di normalizzazione anticipata.

## Modifica Minima a `CLAUDE.md`

Aggiornata una sola riga dello stato OPS per indicare che le skill `cml-sync`, `cml-docs-only-slice` e `cml-readiness-audit` sono create; gli hook restano non creati.

## Eventuale Uso di `git add -f`

I file sotto `.claude/skills/` possono essere ignorati da `.gitignore`. Se necessario, lo staging usa `git add -f` solo per le due skill autorizzate.

## Validazioni

- `git diff --check`: passa
- `git status --short --branch`: solo i 6 file autorizzati
- `git diff --name-only`: solo i 6 file autorizzati
- Verifica credenziali: nessun token/API key/client secret/client ID reale/bearer/refresh/`sk-`/OAuth secret
- `CLAUDE.md`: resta minimale

## Conferme

- Nessun hook creato.
- Nessuna altra skill creata.
- Nessuna modifica runtime.
- Nessuna modifica dati curriculum.
- Nessuna modifica tools.
- Nessuna modifica SchoolKB.
- Nessun deploy.
- Nessun push.

## Verdict Locale

`CML_OPS_004_DOCS_ONLY_AND_READINESS_SKILLS_READY`
