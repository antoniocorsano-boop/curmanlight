# CML-OPS-004 — OPERATIONAL SKILLS AND SLICE TEMPLATE AUDIT

## Dati slice
- **Commit base**: `fe7b59c` (CML-232S, aligned after accessibility closure)
- **HEAD/origin/main**: `fe7b59c`
- **Tipo slice**: docs-only / audit (OPS guardrails, ciclo C)
- **Oggetto**: audit del workflow operativo, template slice, validazioni e rischi di drift

## Files ispezionati
- `docs/03_execution/CML-217.md` a `CML-232.md` (16 slice recenti)
- `docs/02_system/CLAUDE-CODE-LOCAL-WORKFLOW-CONTRACT.md` (contratto OPS)
- `CLAUDE.md` (memoria progetto)
- `docs/REPO-MOVELOG.md` (storico)
- `.claude/skills/cml-sync/SKILL.md`
- `.claude/skills/cml-docs-only-slice/SKILL.md`
- `.claude/skills/cml-readiness-audit/SKILL.md`

## Rischi operativi trovati

| ID | Rischio | Priorità | Note |
|----|--------|----------|------|
| OR-01 | CLAUDE.md stato obsoleto (10/14, CML-178, shape 10/10) | **P1** | Reflette stato pre-14/14; causa next-slice errati |
| OR-02 | Contratto OPS in docs/02_system con stato obsoleto | P2 | Idem, meno impatto (riferimento storico) |
| OR-03 | Nessun template formale per tipo slice | P2 | Prompt slice generati ad hoc, no standard |
| OR-04 | Push/deploy confusi in assenza di hook | P2 | Nessun guardrail automatico |
| OR-05 | Docs-only slice occasionalmente toccano runtime | P3 | Raro; rilevato in audit ma non bloccante |
| OR-06 | Duplicazione closure slice (es. CML-224 → CML-XX) | P3 | Pattern closure riconoscibile ma non formalizzato |
| OR-07 | Hash smoke non automatizzato | P3 | Fatto manualmente ogni ciclo |
| OR-08 | SKB/CML cross-contamination già gestita | OK | Rule funziona |
| OR-09 | Secret scan manuale ma efficace | OK | False positivi documentati |
| OR-10 | Validazione 14/14 automatizzata | OK | ./tools/ funzionano |

## Punti di forza esistenti
- Validatore + shape test automatizzati e affidabili
- Movelog ben mantenuto
- Scope authorization esplicita in ogni prompt
- Slice lifecycle ben consolidato (select → audit → implement → smoke → push → closure)
- 3 skill OPS già create (sync, docs-only, readiness)
- GH Pages deploy automatico su push a main

## Gap template slice
Mancano template standardizzati per:
1. **docs-only**: struttura base, preflight, scope, validazioni, verdetto
2. **runtime microfix**: CSS/HTML/JS limits, smoke checklist
3. **JSON data prep**: validator + shape test obbligatori
4. **controlled push**: pre-push checklist, post-push verifica
5. **public smoke**: URL, viewport, workflow checklist
6. **closure gate**: acceptance criteria, deferred items

## Raccomandazione per CML-OPS-005
**Definire un preflight policy contract** che includa:
- Guard hooks per scope (docs-only vs runtime)
- Preflight checklist obbligatoria per ogni slice
- Template slice standardizzati in `docs/02_system/`
- Nessun hook eseguibile senza contratto

## Verifiche
- `git diff --check`: OK
- Secret scan: OK (falsi positivi URL validation)
- Docs-only scope: OK
- Nessun deploy/push/secrets
