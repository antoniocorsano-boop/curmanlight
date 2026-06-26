# CML-OPS-001 — Claude Code Skills and Hooks Contract Report

## 1. Scopo

Questo report documenta il contratto operativo per l'uso di Claude Code nel progetto CurManLight, ottenuto nella slice CML-OPS-001.

## 2. Baseline tecnica

| Parametro | Valore |
|-----------|--------|
| Repository | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| HEAD locale | `6485fa2` |
| origin/main | `6485fa2` |
| Working tree | pulito |
| Dati normalizzati | 10/14 discipline |
| Runtime mappa | 10/14 discipline |
| Shape test | 10/10 PASS |
| Prossima disciplina | Educazione Fisica |
| SKB-001 | chiuso da remoto |

## 3. Perche' introdurre OPS

CurManLight ha un workflow a slice consolidato che funziona, ma:

- Ogni slice richiede operazioni manuali ripetitive (preflight, validazioni, commit, movelog).
- Non esiste una memoria di progetto integrata per Claude Code: ad ogni sessione si ricostruisce contesto.
- Il rischio di errori fuori scope (push accidentali, credenziali commitate, modifiche runtime in slice docs-only) e' mitigato solo dalla disciplina manuale.

OPS offre: automazione delle operazioni ripetitive, memoria di progetto, guardrail automatici, senza cambiare il runtime o i dati.

## 4. Differenza tra modello, Claude Code e workflow locale

| Concetto | Descrizione | Contesto CML |
|----------|-------------|-------------|
| **Modello** | LLM usato nel terminale (es. Claude, GPT, GLM) | Il modello risponde; non ha memoria di progetto, non esegue comandi, non accede al repo |
| **Claude Code** | Ambiente operativo CLI di Anthropic | Accede al repo, esegue comandi, legge/scrive file, usa skill/hook, ha memoria CLAUDE.md |
| **Skill** | File markdown in `.claude/skills/` con procedure operative | Istruizioni passo-passo per Claude Code su come eseguire operazioni CML |
| **Hook** | Script in `.claude/hooks/` che girano automaticamente | Guardrail: bloccano commit/push fuori scope, validano dopo edit |
| **Subagent** | Agent paralleli per attivita' concorrenti | Audit paralleli su discipline multiple (rinviato) |
| **MCP** | Protocollo per strumenti esterni | Integrazione con API esterne (rinviato, nessun caso d'uso immediato) |
| **Plugin** | Estensioni verticali di Claude Code | UI CML, integrazione Netlify CLI (rinviato) |
| **Workflow locale** | Il processo a slice gia' esistente | OPS lo automatizza e protegge, non lo sostituisce |

La distinzione cruciale: il modello e' un interlocutore, Claude Code e' un operatore, il workflow locale e' il processo. OPS potenzia l'operatore nel processo, senza cambiare il processo.

## 5. Componenti valutati

### 5.1 CLAUDE.md

**Valutazione**: essenziale, ma minimale.
Un CLAUDE.md troppo verboso sovraccarica il contesto; uno troppo scarso non fornisce contesto sufficiente. La specifica definisce un CLAUDE.md di ~20 righe con: identita', regole chiave, stato corrente, modello scope.

**Decisione**: usare subito. Creazione in CML-OPS-002.

### 5.2 Skills

**Valutazione**: utili per operazioni ripetitive.
Le 8 skill proposte coprono l'intero ciclo slice (sync, docs, audit, data-prep, runtime, shape-test, SKB). Le piu' urgenti sono `cml-sync` e `cml-docs-only-slice` (eseguite ad ogni slice).

**Decisione**: usare subito le P0, implementare progressivamente. OPS-003 e OPS-004.

### 5.3 Hooks

**Valutazione**: necessari per la sicurezza.
I 3 hook P0 (guard-scope, guard-secrets, guard-push) prevengono gli errori piu' critici: modifiche fuori scope, credenziali commitate, push non autorizzati.

**Decisione**: usare subito i P0. OPS-005.

### 5.4 Subagents

**Valutazione**: potenzialmente utili, ma prematuri.
L'uso principale sarebbe audit paralleli su discipline multiple. Attualmente le discipline sono elaborati sequenzialmente. L'overhead di coordinamento subagent non e' giustificato per slice singole.

**Decisione**: rinviare. OPS-006, condizionato a dimostrazione di valore.

### 5.5 MCP

**Valutazione**: nessun caso d'uso immediato.
CurManLight e' statico e locale. Non ha backend, API, o servizi esterni che richiedano MCP. SchoolKB e' su binario separato e disattivato.

**Decisione**: rinviare a quando un caso d'uso emerge (es. SKB attivo, integrazione Drive).

### 5.6 Plugin

**Valutazione**: potenzialmente utile, ma premature.
Un plugin CurManLight Ops potrebbe orchestrazione slice, validazioni, e deploy. Ma il sistema skill/hook deve dimostrare valore prima di aggiungere un livello di complessita'.

**Decisione**: rinviare. OPS-007, condizionato a maturita' OPS-006.

## 6. Decisione: usare subito CLAUDE.md minimale, skill locali e hook controllati

Componenti immediati:

1. **CLAUDE.md** (OPS-002): memoria di progetto, ~20 righe.
2. **Skill P0** (OPS-003): `cml-sync`, `cml-docs-only-slice`.
3. **Hook P0** (OPS-005): `guard-scope`, `guard-secrets`, `guard-push`.

Questi tre elementi formano il minimo indispensabile per un uso sicuro e produttivo di Claude Code in CurManLight.

## 7. Decisione: rinviare subagents, MCP e plugin

- **Subagents** → OPS-006, se 3+ skill e 2+ hook sono collaudati.
- **MCP** → nessuna slice pianificata; caso d'uso da definire.
- **Plugin** → OPS-007, se subagent dimostrano valore.

## 8. Struttura proposta `.claude/skills/`

```
.claude/
  skills/
    cml-sync.md                 # P0 — sincronizza repo con origin
    cml-docs-only-slice.md      # P0 — crea slice docs-only
    cml-readiness-audit.md      # P1 — audit readiness disciplina
    cml-normalized-data-prep.md # P2 — preparazione dati normalizzati
    cml-runtime-integration.md  # P3 — integrazione mappa runtime
    cml-shape-test-alignment.md # P3 — allineamento shape test
    skb-contract.md             # P4 — gestione contratto SKB
    skb-local-prototype.md      # P5 — prototipazione locale SKB
```

Ogni skill contiene: nome, scopo, precondizioni, passi operativi, validazioni, guardrail, exit condition.

## 9. Struttura proposta `.claude/hooks/`

```
.claude/
  hooks/
    guard-scope.sh             # P0 pre-commit — blocca file fuori scope
    guard-secrets.sh           # P0 pre-commit — blocca credenziali
    guard-push.sh              # P0 pre-push — blocca push non autorizzato
    guard-runtime-docs.sh      # P1 pre-commit — blocca runtime in docs-only
    guard-curriculum-data.sh   # P1 pre-commit — blocca dati fuori data-prep
    post-edit-check.sh         # P1 post-edit — git diff --check
    post-data-validate.sh      # P2 post-commit — validatore curriculum
    post-shape-validate.sh     # P2 post-commit — shape test
```

## 10. Skill prioritarie

| Skill | Priorita' | Slice implementazione |
|-------|-----------|----------------------|
| `cml-sync` | P0 | CML-OPS-003 |
| `cml-docs-only-slice` | P0 | CML-OPS-003 |
| `cml-readiness-audit` | P1 | CML-OPS-004 |
| `cml-normalized-data-prep` | P2 | CML-OPS-004 |
| `cml-runtime-integration` | P3 | Slice runtime future |
| `cml-shape-test-alignment` | P3 | Slice runtime future |
| `skb-contract` | P4 | Slice SKB future |
| `skb-local-prototype` | P5 | Slice SKB future |

## 11. Hook prioritari

| Hook | Tipo | Priorita' | Slice implementazione |
|------|------|-----------|---------------------|
| `guard-scope` | Pre-commit | P0 | CML-OPS-005 |
| `guard-secrets` | Pre-commit | P0 | CML-OPS-005 |
| `guard-push` | Pre-push | P0 | CML-OPS-005 |
| `guard-runtime-docs` | Pre-commit | P1 | CML-OPS-005 |
| `guard-curriculum-data` | Pre-commit | P1 | CML-OPS-005 |
| `post-edit-check` | Post-edit | P1 | Slice successiva |
| `post-data-validate` | Post-commit | P2 | Slice successiva |
| `post-shape-validate` | Post-commit | P2 | Slice successiva |

## 12. Regole di sicurezza

1. **Scope-bound**: ogni attivita' opera solo nell'ambito autorizzato dalla slice.
2. **No runtime in docs**: le slice documentali non toccano il runtime.
3. **No data outside data-prep**: `content/curriculum/` e' intoccabile salvo autorizzazione.
4. **No push outside sync**: push solo in slice closure/sync autorizzate.
5. **No secrets**: zero credenziali nel repo, mai.
6. **Validate early, validate often**: validatore dopo modifiche dati, shape test dopo modifiche runtime.
7. **Diff check before commit**: ogni commit e' preceduto da `git diff --check`.
8. **Conservative integration**: aggiungere, non sostituire.
9. **CML/SKB separate**: le due linee non si contaminano.
10. **Educazione Fisica**: non aprire, modificare o anticipare il detailed gap model.

## 13. Rapporto con CML discipline

OPS e' trasversale: non e' legato a una disciplina specifica. Le skill operative (readiness-audit, data-prep, runtime-integration) saranno usate disciplina per disciplina nel ciclo esistente. OPS non accelera il ciclo, lo rende piu' sicuro e ripetibile.

Discipline residue (4/14 senza dati normalizzati): Educazione Fisica, Religione Cattolica, Arte e Immagine, Musica. OPS non anticipa l'ordine di normalizzazione, che segue il modello CML consolidato.

## 14. Rapporto con SKB/SchoolKB

OPS e SKB sono binari separati:

- Le skill OPS non toccano il contratto SKB.
- Le skill SKB (`skb-contract`, `skb-local-prototype`) sono P4/P5,_ovvero a bassa priorita'.
- OPS non abilita SchoolKB; SchoolKB non abilita OPS.
- L'eventuale attivazione SKB richiedera' slice dedicate, non skill OPS.

## 15. Roadmap CML-OPS

| Step | Slice | Oggetto | Prerequisiti |
|------|-------|---------|-------------|
| 1 | CML-OPS-001 | Contratto Claude Code locale | Nessuno |
| 2 | CML-OPS-002 | CLAUDE.md minimale | OPS-001 chiuso |
| 3 | CML-OPS-003 | Skill `cml-sync` | OPS-002 chiuso |
| 4 | CML-OPS-004 | Skill `cml-docs-only-slice` e `cml-readiness-audit` | OPS-003 chiuso |
| 5 | CML-OPS-005 | Hook `guard-scope`, `guard-secrets`, `guard-push` | OPS-002 chiuso |
| 6 | CML-OPS-006 | Subagent audit (condizionato) | OPS-004 + OPS-005 chiusi |
| 7 | CML-OPS-007 | Plugin CurManLight Ops (condizionato) | OPS-006 chiuso o archiviato |

## 16. Rischi residui

1. **Falsi positivi hook**: gli hook P0 potrebbero bloccare lavoro legittimo se gli scope sono troppo stretti. Mitigazione: documentare eccezioni, iniziare con scope ampio.
2. **CLAUDE.md drift**: lo stato nel CLAUDE.md potrebbe non essere aggiornato. Mitigazione: aggiornare ad ogni slice.
3. **Automazione over-trust**: fidarsi troppo degli hook e omettere verifiche manuali. Mitigazione: hook sono guardrail, non sostituti.
4. **Rinvio indefinito MCP/plugin**: se il caso d'uso emerge, non c'e' struttura. Mitigazione: la roadmap e' estensibile.
5. **Complessita' crescente**: ogni skill/hook aggiunge superficie di errore. Mitigazione: principi docs-first e conservative integration.
6. **Confusione modello/ambiente**: usare il modello LLM come operatore senza Claude Code. Mitigazione: distinzione chiara nel contratto.
7. **Credenziali in .claude/**: la directory `.claude/` potrebbe contenere segreti per configurazione MCP. Mitigazione: `.claude/` e' in `.gitignore` o monitorato da `guard-secrets`.
8. **Contaminazione CML/SKB**: skill SKB che introducono side-effect nel flusso CML. Mitigazione: regole esplicite di separazione.
9. **Over-automation**: troppe skill rendono il workflow opaco. Mitigazione: partire con le sole P0.
10. **Push accidentale**: nonostante guard-push, un `git push` manuale bypassa l'hook. Mitigazione: cultura team + review process.

## 17. Raccomandazione per CML-OPS-002

CML-OPS-002 dovrebbe creare il `CLAUDE.md` minimale alla radice del repository, seguendo la specifica della sezione 6 del contratto. Deve inoltre:

1. Verificare che OPS-001 sia chiuso con verdict.
2. Creare `CLAUDE.md` con il contenuto proposto.
3. Aggiornare `docs/REPO-MOVELOG.md`.
4. Creare `docs/03_execution/CML-OPS-002.md` e report.
5. Non creare `.claude/skills/` o `.claude/hooks/` (che avvengono in OPS-003 e OPS-005).
6. Non modificare runtime, dati, SchoolKB.

## 18. Verdetto finale

**CML_OPS_001_CLAUDE_CODE_SKILLS_AND_HOOKS_CONTRACT_READY**

Questa slice ha prodotto il contratto operativo per Claude Code in CurManLight. Il contratto definisce: cosa usare subito (CLAUDE.md, skill P0, hook P0), cosa rinviare (subagent, MCP, plugin), le regole CML e SKB, i guardrail Git/runtime/dati/credenziali, e la roadmap incrementale OPS-001→OPS-007. Nessun file eseguibile, directory `.claude/`, o modifica runtime e' stata creata. La prossima slice e' CML-OPS-002 per la creazione del CLAUDE.md minimale.
