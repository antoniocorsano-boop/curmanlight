# CML-OPS-004 - Docs-only and Readiness Skills Report

## 1. Scopo

Creare due skill locali Claude Code per stabilizzare le slice documentali e gli audit di readiness disciplinare: `cml-docs-only-slice` e `cml-readiness-audit`.

## 2. Baseline Tecnica

| Parametro | Valore |
|-----------|--------|
| Repository | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| HEAD | `d79956e` |
| origin/main | `d79956e` |
| Working tree | pulito |
| Stato OPS | `cml-sync` sincronizzata |

## 3. Collegamento con CML-OPS-001/002/003

CML-OPS-001 ha definito la roadmap skill/hook. CML-OPS-002 ha creato `CLAUDE.md`. CML-OPS-003 ha creato e sincronizzato `cml-sync`. CML-OPS-004 completa il primo set operativo creando le skill per lavoro documentale e readiness audit.

## 4. Perche' Creare Queste Due Skill

- `cml-docs-only-slice` riduce il rischio di modifiche fuori scope nelle slice documentali.
- `cml-readiness-audit` evita normalizzazioni premature, in particolare per Educazione Fisica e CML-178.
- Entrambe rendono espliciti preflight, blocchi, validazioni e formato finale.

## 5. File Creati

- `.claude/skills/cml-docs-only-slice/SKILL.md`
- `.claude/skills/cml-readiness-audit/SKILL.md`
- `docs/03_execution/CML-OPS-004.md`
- `report/CML-OPS-004_docs_only_and_readiness_skills.md`

File aggiornati:

- `CLAUDE.md`
- `docs/REPO-MOVELOG.md`

## 6. Skill `cml-docs-only-slice`

La skill copre contratti, audit documentali, execution docs, report, movelog, pianificazione e closure docs-only. Blocca modifiche runtime, dati, tools, hook, sync, deploy e SchoolKB runtime.

## 7. Skill `cml-readiness-audit`

La skill copre audit di discipline residue, gap model, readiness data e preparazione di CML-178. Blocca creazione di `.normalized.json`, integrazione runtime, modifiche a `content/curriculum/`, tools e SchoolKB runtime.

## 8. Regole di Preflight

Le skill richiedono verifica Git pulita, baseline coerente, collisione file controllata e `git diff --check`.

## 9. Regole di Blocco

Blocco se i file sono fuori scope, la baseline non coincide, compaiono segreti, si tenta deploy/push fuori sync, si modificano runtime/dati/tools, o l'audit produrrebbe inferenze non supportate.

## 10. Validazioni

- `git diff --check`
- `git status --short --branch`
- `git diff --name-only`
- Verifica scope autorizzato
- Verifica assenza segreti

## 11. Formato Output Finale Imposto

Markdown standard, tabella compatta, conferme obbligatorie, stato consolidato, report completo solo se necessario, verdict non troncato.

## 12. Aggiornamento `CLAUDE.md`

Aggiornata una sola riga dello stato OPS: `CLAUDE.md` creato; skill `cml-sync`, `cml-docs-only-slice` e `cml-readiness-audit` create; hook non ancora creati.

## 13. Hook Non Creati

Nessun file in `.claude/hooks/` e' stato creato. Gli hook restano previsti per CML-OPS-005.

## 14. Altre Skill Non Create

Non sono state create skill diverse da `cml-docs-only-slice` e `cml-readiness-audit`.

## 15. Invarianti Rispettate

- Docs-only / OPS-only.
- `cml-sync` invariata.
- Nessuna modifica runtime.
- Nessuna modifica a `content/curriculum/`.
- Nessuna modifica a `tools/`.
- Schema `.cml`, export/import e funzioni evidenze/UDA invariati.
- SchoolKB invariato.
- Zero credenziali, client ID o token reali.
- Nessuna dipendenza.
- Nessun deploy.
- Nessun push.

## 16. Rischi Residui

- Le skill sono documentali: richiedono adozione coerente in ogni slice.
- `cml-readiness-audit` non sostituisce validazione umana per discipline con fonti deboli.
- Gli hook automatici non sono ancora presenti e restano da creare in OPS-005.

## 17. Raccomandazione per CML-OPS-004-SYNC

Eseguire CML-OPS-004-SYNC con la skill `cml-sync`, verificando che il commit locale contenga solo i sei file autorizzati.

## 18. Raccomandazione Successiva Dopo Sync

Dopo la sync, procedere con CML-178 per il detailed gap model di Educazione Fisica oppure con CML-OPS-005 per gli hook P0.

## 19. Verdetto Finale

**CML_OPS_004_DOCS_ONLY_AND_READINESS_SKILLS_READY**
