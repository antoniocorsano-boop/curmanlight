# CML-OPS-003 — CML Sync Skill Report

## 1. Scopo

Implementare la prima skill operativa di Claude Code per CurManLight: `cml-sync`. L'obiettivo è eliminare la variabilità nell'esecuzione delle slice di sincronizzazione remota, garantendo che ogni push sia preceduto da un preflight rigoroso e seguito da un report standardizzato.

## 2. Baseline tecnica

| Parametro | Valore |
|-----------|--------|
| Repository | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| HEAD | `8b1dee3` |
| origin/main | `8b1dee3` |
| Stato OPS | `CLAUDE.md` sincronizzato |

## 3. Collegamento con CML-OPS-001 e CML-OPS-002

CML-OPS-001 ha definito la `cml-sync` come skill P0 (priorità massima). CML-OPS-002 ha creato la memoria di progetto `CLAUDE.md` necessaria affinché Claude Code possa richiamare e seguire le istruzioni della skill in ogni sessione.

## 4. Perche' creare prima `cml-sync`

La sincronizzazione remota e' l'azione piu' critica del workflow. Automatizzare il preflight e standardizzare l'output riduce il rischio di:
- Push di file fuori scope.
- Commit con whitespace errati.
- Push di credenziali accidentali.
- Report incompleti o corrotti (come osservato in CML-OPS-002).

## 5. File creato

`.claude/skills/cml-sync/SKILL.md`

## 6. Struttura della skill

La skill e' organizzata in 13 sezioni operative:
- Inquadramento (Nome, Scopo, Quando usarla/non usarla).
- Input e Preflight (Comandi standard e dati attesi).
- Guardrail (Regole di blocco esplicite).
- Validazioni per tipo slice (Data prep vs Runtime).
- Esecuzione (Push controllato).
- Post-Push (Verifiche di allineamento).
- Standard di Output (Template e divieti).
- Verdict standard.

## 7. Regole di preflight

La skill impone l'esecuzione di:
- `git status --short --branch`
- `git rev-parse --short HEAD` & `origin/main`
- `git log --oneline -8`
- `git show --stat --name-status --oneline HEAD`
- `git diff --check HEAD~1..HEAD`
- `git diff HEAD~1..HEAD --name-only`

## 8. Regole di blocco

Il push viene bloccato se:
- HEAD locale o origin/main differiscono dagli attesi.
- Branch diverso da `main` o non esattamente `ahead 1`.
- Working tree sporco.
- File nel commit diversi dallo scope autorizzato.
- `git diff --check` fallisce.
- Rilevazione di segreti/token.

## 9. Validazioni per tipo slice

La skill differenzia i controlli finali:
- **Data Prep**: richiedere `validate-cml-normalized-curriculum.mjs`.
- **Runtime**: richiedere `test-runtime-mappa-dati-shape.mjs`.
- **Docs**: verifica rigorosa di scope.

## 10. Formato output finale imposto

Obbligo di Markdown standard. Divieto di tabelle box-drawing larghe, log ridondanti e ragionamenti interni. Struttura fissa: Output breve → Conferme → Stato consolidato → Report completo (se necessario) → Verdict.

## 11. Divieti di output

- No `Thought for`.
- No troncamento di campi critici.
- No verdict abbreviati.
- No invenzione dello stato remoto.

## 12. Aggiornamento `CLAUDE.md`

Il file `CLAUDE.md` e' stato aggiornato nella sezione "Current Consolidated State" per riflettere la creazione della skill `cml-sync`.

## 13. Skill/hook non creati

Conforme allo scope:
- Altre skill (docs-only, readiness, ecc.) rinviate a OPS-004.
- Hook (guard-scope, ecc.) rinviati a OPS-005.

## 14. Invarianti rispettate

- Nessuna modifica al runtime applicativo.
- Nessuna modifica ai dati curricolari.
- Nessuna modifica a tools o SchoolKB.
- Zero credenziali/token.
- Nessun deploy.
- Nessun push eseguito durante questa slice.

## 15. Rischi residui

- **Adozione**: la skill e' un documento; Claude Code deve essere istruito a seguirla rigorosamente ad ogni sync.
- **Manutenzione**: se i comandi di validazione cambiano, la skill va aggiornata.

## 16. Raccomandazione per CML-OPS-004 o CML-OPS-005

Si raccomanda di procedere a **CML-OPS-004** per creare le skill di `docs-only` e `readiness audit`, completando così il set di strumenti per la preparazione delle slice. In alternativa, CML-OPS-005 puo' essere anticipato per introdurre i guardrail automatici (hook).

## 17. Verdetto finale

**CML_OPS_003_CML_SYNC_SKILL_READY**
