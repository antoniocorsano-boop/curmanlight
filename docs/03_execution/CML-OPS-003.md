# CML-OPS-003 — CML_SYNC_SKILL

## Titolo

CML-OPS-003 — CML Sync Skill

## Obiettivo

Creare la prima skill locale Claude Code per CurManLight: `cml-sync`. La skill standardizza le slice di sincronizzazione remota (`*-SYNC`), automatizzando preflight, validazioni, push controllato e formato di output.

## Baseline

- **Repository**: `C:\Users\anton\CurManLight`
- **Branch**: `main`
- **HEAD locale**: `8b1dee3`
- **origin/main**: `8b1dee3`
- **Working tree**: pulito
- **Verdict precedente**: `CML_OPS_002_SYNC_CLOSED_REMOTE`

## Scope autorizzato

- `.claude/skills/cml-sync/SKILL.md`
- `CLAUDE.md`
- `docs/03_execution/CML-OPS-003.md`
- `report/CML-OPS-003_cml_sync_skill.md`
- `docs/REPO-MOVELOG.md`

## Scope vietato

- Altre directory o file sotto `.claude/` (hooks, altre skills)
- `_published_snapshot/netlify-current/`
- `content/curriculum/`
- `tools/`
- Contratti di sistema, schema `.cml`, export/import
- Dipendenze, credenziali, deploy

## Contratto OPS di riferimento

`docs/02_system/CLAUDE-CODE-LOCAL-WORKFLOW-CONTRACT.md` — Sezione 7.2: Skill prioritarie (Skill `cml-sync` P0).

## File skill creato

`.claude/skills/cml-sync/SKILL.md` — Documentazione operativa per l'esecuzione di sync controllati.

## Sintesi contenuto skill

La skill `cml-sync` definisce un processo rigoroso in 5 fasi:
1. **Input**: Definizione di task, hash attesi e scope.
2. **Preflight**: Esecuzione di 7 comandi Git per verificare l'allineamento.
3. **Regole di Blocco**: Criteri stringenti per impedire il push (es. commit fuori scope, segreti rilevati).
4. **Push Controllato**: Esecuzione di `git push origin main` solo dopo superati i blocchi.
5. **Output Standard**: Imposizione di un formato breve, conferme obbligatorie e stato consolidato, evitando tabelle box-drawing.

## Modifica a `CLAUDE.md`

Aggiornata la sezione "Current Consolidated State":
- OPS: `CLAUDE.md` created; `cml-sync` skill created; hooks and other skills not yet created.

## Eventuale uso di `git add -f`

La directory `.claude/` e i suoi contenuti sono ignorati da `.gitignore`. Sarà necessario l'uso di `git add -f` per tracciare la skill nel repository.

## Validazioni

- `git diff --check`: passa
- `git diff --name-only`: solo i 5 file autorizzati
- Verifica credenziali: nessun token/API key/client secret/client ID reale in `SKILL.md` o `CLAUDE.md`

## Conferme

- ✅ docs-only / OPS-only
- ✅ Skill `cml-sync` creata
- ✅ Nessuna altra skill creata
- ✅ Nessun hook creato
- ✅ Nessuna modifica runtime
- ✅ Nessuna modifica dati curriculum
- ✅ Nessuna modifica SchoolKB
- ✅ Nessun deploy
- ✅ Nessun push

## Verdict locale

`CML_OPS_003_CML_SYNC_SKILL_READY`
