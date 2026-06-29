# CLAUDE-CODE-LOCAL-WORKFLOW-CONTRACT

## 1. Scopo

Definire un contratto operativo per l'uso di Claude Code nel progetto CurManLight, stabilendo:

- cosa Claude Code puo' aggiungere al workflow locale;
- cosa non deve cambiare;
- quali componenti usare subito e quali rinviare;
- quali guardrail applicare per evitare effetti collaterali fuori scope.

Questo contratto e' documentale: non crea file eseguibili, non modifica il runtime, non modifica dati, non modifica SchoolKB.

## 2. Contesto CurManLight

CurManLight e' un'applicazione web statica (HTML/CSS/JS vanilla) che pubblica il curricolo verticale dell'I.C. Calvario-Covotta "don Lorenzo Milani". Il source of truth e' `_published_snapshot/netlify-current/`. Il progetto opera una strategia conservativa (CML-001R) dove nuove viste sono aggiunte senza sostituire la logica esistente.

Stato consolidato al CML-OPS-001:

- 10/14 discipline con dati normalizzati;
- 10/14 discipline integrate nella mappa runtime;
- shape test: 10/10 PASS;
- prossima disciplina: Educazione Fisica (audit dettagliato, non data preparation immediata);
- SchoolKB: estensione opzionale parallela, disattivata di default, contratto SKB-001 chiuso.

## 3. Principi operativi

1. **Docs-first**: ogni automazione deve essere prima documentata, poi eventualmente implementata.
2. **Slice-bound**: ogni attivita' segue il modello a slice con scope autorizzato esplicito.
3. **No runtime touch in docs-only**: le slice documentali non modificano il runtime.
4. **No push senza autorizzazione**: nessun push o deploy al di fuori di slice esplicitamente autorizzate.
5. **No credenziali**: nessuna credenziale, client ID, token o segreto nel repository.
6. **CML/SKB separati**: le due linee di sviluppo non si contaminano.
7. **Conservative integration**: nuove funzionalita' si aggiungono, non sostituiscono.
8. **Explicit over implicit**: ogni regola, guardrail e vincolo e' dichiarato, non assunto.

## 4. Cosa Claude Code puo' aggiungere al workflow locale

1. **CLAUDE.md** come memoria di progetto minimale: istruzioni e contesto per Claude Code in ogni sessione.
2. **Skill locali** in `.claude/skills/`: comandi specializzati per operazioni ricorrenti (sync, audit, data prep).
3. **Hook locali** in `.claude/hooks/`: guardrail automatici per bloccare azioni fuori scope.
4. **Subagent** per audit paralleli su discipline multiple (fase successiva).
5. **MCP** per integrazione con strumenti esterni (rinviato).
6. **Plugin** per estensioni verticali (rinviato).
7. **Comandi slash** registrati come skill per invocazione rapida.

## 5. Cosa non deve cambiare

1. Il runtime esistente (`_published_snapshot/netlify-current/index.html`, `sw.js`) salvo slice esplicitamente autorizzate.
2. I dati curricolari normalizzati (`content/curriculum/*.normalized.json`) salvo data preparation autorizzata.
3. Le funzionalita' di import/export e validazione esistenti.
4. Lo schema `.cml`.
5. Il workflow docente/dipartimento/referente gia' documentato.
6. SchoolKB (binario separato, non contaminato da OPS).
7. Il deployment senza autorizzazione esplicita.

## 6. `CLAUDE.md` proposto — solo come specifica

Il file `CLAUDE.md` alla radice del repository deve essere minimale e contenere solo:

```markdown
# CurManLight — Claude Code Project Memory

## Identity

CurManLight: vertical curriculum static web app for I.C. Calvario-Covotta.
Source of truth: `_published_snapshot/netlify-current/`.

## Key Rules

- Edit only in `_published_snapshot/netlify-current/` for runtime changes.
- Never push or deploy without explicit slice authorization.
- Never commit credentials, client IDs, tokens, or secrets.
- CML and SKB lines are separate; do not cross-contaminate.
- Conservative integration: add, do not replace.
- Run `git diff --check` before every commit.
- Run `node tools/validate-cml-normalized-curriculum.mjs` after data changes.
- Run `node tools/test-runtime-mappa-dati-shape.mjs` after runtime/test changes.

## Current State

- Normalized data: 10/14 disciplines
- Runtime mappa: 10/14 disciplines
- Shape test: 10/10 PASS
- Next discipline: Educazione Fisica (requires detailed audit per CML-177)
- SchoolKB: optional parallel extension, disabled by default

## Scope Model

- docs-only slices: no runtime, no data, no .claude/ changes
- data-prep slices: content/curriculum/*.normalized.json only
- runtime slices: _published_snapshot/netlify-current/ only
- deploy slices: explicit push + Netlify/GitHub Pages only
```

Nota: questo e' il contenuto proposto. La creazione effettiva del file avviene in CML-OPS-002.

## 7. Skills proposte

### 7.1 Struttura `.claude/skills/`

```
.claude/
  skills/
    cml-sync.md                 # Sincronizza stato locale con origin/main
    cml-docs-only-slice.md      # Crea una slice docs-only con scope e validazioni
    cml-readiness-audit.md      # Audit di readiness per una disciplina
    cml-normalized-data-prep.md # Preparazione dati normalizzati per disciplina
    cml-runtime-integration.md  # Integrazione mappa runtime per disciplina
    cml-shape-test-alignment.md # Allineamento shape test dopo modifiche runtime
    skb-contract.md             # Gestione contratto SchoolKB (solo documentale)
    skb-local-prototype.md      # Prototipazione locale SchoolKB (solo se autorizzato)
```

### 7.2 Skill prioritarie — dettaglio

| #   | Skill                      | Priorita'       | Descrizione                                                                  | Dipendenza                 |
| --- | -------------------------- | --------------- | ---------------------------------------------------------------------------- | -------------------------- |
| 1   | `cml-sync`                 | P0 — immediata  | Sincronizza repo locale con origin/main; verifica HEAD, branch, working tree | Nessuna                    |
| 2   | `cml-docs-only-slice`      | P0 — immediata  | Crea slice documentale: contratto, execution doc, report, movelog            | `cml-sync`                 |
| 3   | `cml-readiness-audit`      | P1 — dopo P0    | Audit readiness disciplina: verifica disponibilita' dati, rischi, gap        | `cml-sync`                 |
| 4   | `cml-normalized-data-prep` | P2 — dopo P1    | Preparazione dati normalizzati: genera .normalized.json da sorgenti          | `cml-readiness-audit`      |
| 5   | `cml-runtime-integration`  | P3 — dopo P2    | Integrazione mappa runtime: aggiunge disciplina a setMappaDisciplina()       | `cml-normalized-data-prep` |
| 6   | `cml-shape-test-alignment` | P3 — dopo P3    | Allinea shape test dopo modifica runtime o test                              | `cml-runtime-integration`  |
| 7   | `skb-contract`             | P4 — estensione | Gestione contratto SchoolKB (solo documentale, no runtime)                   | `cml-sync`                 |
| 8   | `skb-local-prototype`      | P5 — estensione | Prototipazione locale SchoolKB (solo se SKB autorizzato)                     | `skb-contract`             |

### 7.3 Contenuto minimo di ogni skill

Ogni file `.claude/skills/<name>.md` deve contenere:

1. Nome skill
2. Scopo
3. Precondizioni
4. Passi operativi
5. Validazioni post-esecuzione
6. Guardrail
7. Esci condition (quando NON eseguire)

## 8. Hooks proposti

### 8.1 Struttura `.claude/hooks/`

```
.claude/
  hooks/
    guard-scope.sh             # Blocca modifiche fuori dallo scope della slice corrente
    guard-secrets.sh           # Blocca commit con credenziali/client ID/token
    guard-runtime-docs.sh      # Blocca modifiche runtime in slice docs-only
    guard-curriculum-data.sh   # Blocca modifiche content/curriculum/ fuori data-prep
    guard-push.sh              # Blocca push fuori da slice SYNC authorizzate
    post-edit-check.sh         # Esegue git diff --check dopo ogni edit
    post-data-validate.sh      # Esegue validatore curriculum dopo modifiche dati
    post-shape-validate.sh     # Esegue shape test dopo modifiche runtime/test
```

### 8.2 Hook prioritari — dettaglio

| #   | Hook                    | Tipo        | Priorita' | Condizione di attivazione                                                |
| --- | ----------------------- | ----------- | --------- | ------------------------------------------------------------------------ |
| 1   | `guard-scope`           | Pre-commit  | P0        | Verifica che i file modificati siano nello scope autorizzato della slice |
| 2   | `guard-secrets`         | Pre-commit  | P0        | Cerca pattern di credenziali, client ID, token, API key                  |
| 3   | `guard-push`            | Pre-push    | P0        | Blocca push salvo slice esplicitamente autorizzata                       |
| 4   | `guard-runtime-docs`    | Pre-commit  | P1        | Blocca modifiche a `_published_snapshot/` in slice docs-only             |
| 5   | `guard-curriculum-data` | Pre-commit  | P1        | Blocca modifiche a `content/curriculum/` fuori data-prep                 |
| 6   | `post-edit-check`       | Post-edit   | P1        | Esegue `git diff --check` dopo modifica file                             |
| 7   | `post-data-validate`    | Post-commit | P2        | Esegue validatore curriculum dopo commit su `content/curriculum/`        |
| 8   | `post-shape-validate`   | Post-commit | P2        | Esegue shape test dopo commit su runtime o test                          |

### 8.3 Pattern di blocco per `guard-secrets`

- `client_id`, `client_secret`, `api_key`, `access_token`, `refresh_token`
- Stringhe Base64 lunghe (>40 caratteri)
- URL `https://accounts.google.com/o/oauth2/`
- File `.env`, `.env.local`, `.env.production`
- Qualsiasi file contenente `GOOGLE_OAUTH` o `SCHOOLKB_CREDENTIALS`
- Qualsiasi file in `.claude/` contenente segreti

### 8.4 Pattern di blocco per `guard-scope`

Per ogni slice, lo scope autorizzato e' definito in `docs/03_execution/CML-XXX.md`. L'hook verifica che `git diff --name-only --cached` contenga solo file nell'elenco autorizzato. File fuori scope → commit bloccato.

## 9. Subagent proposti

I subagent sono rinviati a CML-OPS-006. Uso potenziale:

1. **cml-auditor**: subagent parallelo per audit readiness su multiple discipline.
2. **cml-validator**: subagent per validazione parallela di JSON e shape.
3. **cml-reporter**: subagent per generazione report da dati di audit.

Condizioni per l'attivazione:

- Almeno 3 skill P0–P1 implementate e collaudate.
- Almeno 2 hook P0 implementati e collaudati.
- Contratto CLAUDE.md in produzione.

## 10. MCP: rinvio motivato

MCP (Model Context Protocol) consentirebbe ad Claude Code di interagire con strumenti esterni (database, API, servizi). Per CurManLight:

- Il progetto e' statico e locale; non ha backend ne' API proprie.
- SchoolKB (potenziale consumer di Google Drive API) e' su binario separato.
- Non esiste un caso d'uso MCP che non sia coperto da skill/hook locali.
- L'introduzione di MCP richiederebbe autorizzazione esplicita e una slice dedicata.

Decisione: rinviare MCP a quando esistera' un caso d'uso concreto non copribile altrimenti.

## 11. Plugin: rinvio motivato

I plugin estenderebbero Claude Code con capacita' verticali (es. UI per CML, integrazione Netlify CLI). Per CurManLight:

- Il workflow e' muito semplice: edit → commit → push → deploy manuale.
- Non esiste un bisogno di plugin che giustifichi la complessita' aggiunta.
- Un plugin CurManLight Ops potrebbe essere utile in futuro per orchestrazione slice, ma richiede prima la maturazione del sistema skill/hook.

Decisione: rinviare plugin a CML-OPS-007, solo se le skill e gli hook dimostrano valore operativo.

## 12. Regole CML

1. Ogni slice ha uno scope autorizzato esplicito in `docs/03_execution/CML-XXX.md`.
2. Le slice docs-only non toccano runtime, dati, `.claude/`, export/import, schema `.cml`.
3. Le slice data-prep toccano solo `content/curriculum/*.normalized.json`.
4. Le slice runtime toccano solo `_published_snapshot/netlify-current/`.
5. Le slice deploy richiedono autorizzazione esplicita e non possono essere eseguite in combinazione con slice docs-only o data-prep.
6. Il validatore curriculum e' eseguito dopo ogni modifica ai JSON.
7. Lo shape test e' eseguito dopo ogni modifica al runtime o ai test.
8. `git diff --check` e' eseguito prima di ogni commit.
9. Nessun contenuto e' inventato: fonti sempre documentate, stato sempre `da_validare` per nuovi elementi.
10. Educazione Fisica richiede audit dettagliato (CML-178) prima di qualsiasi normalizzazione.

## 13. Regole SKB

1. SchoolKB e' un'estensione opzionale, parallela, disattivata di default.
2. Il contratto SKB-001 e' chiuso; qualsiasi riapertura richiede slice dedicata.
3. Lo scope massimo OAuth e' `https://www.googleapis.com/auth/drive.file`.
4. Nessuna credenziale/client ID OAuth nel repository.
5. CML-OPS non deve contaminare SKB: le skill OPS non toccano il contratto SKB.
6. Le skill SKB (`skb-contract`, `skb-local-prototype`) sono separate dalle skill CML.
7. SKB resta binario separato: la sua attivazione non e' prerogativa di OPS.

## 14. Guardrail Git

1. **No push fuori ciclo**: push solo in slice esplicitamente autorizzate (tipicamente closure/push).
2. **No force push**: mai `git push --force` su main.
3. **No amend senza motivazione**: preferire nuovo commit; amend solo per correzioni immediate prima di push.
4. **Diff check**: `git diff --check` passa prima di ogni commit.
5. **Scope check**: `git diff --name-only --cached` rientra nell'elenco autorizzato della slice.
6. **Branch**: lavorare sempre su main; creare branch solo se espressamente richiesto.

## 15. Guardrail runtime

1. **No modifiche runtime in docs-only**: se la slice e' docs-only, `_published_snapshot/` e' intoccabile.
2. **No modifiche runtime senza validatore**: dopo ogni modifica a `index.html`, eseguire il validatore.
3. **No modifiche runtime senza shape test**: dopo ogni modifica alla mappa, eseguire lo shape test.
4. **No nuovi framework**: mantenere JS vanilla ES6, no React/Vue/Angular.
5. **No nuove dipendenze**: nessuna dipendenza esterna salvo autorizzazione esplicita.
6. **No refactoring macroscopici**: conservative integration, non rearchitecting.

## 16. Guardrail dati curricolari

1. **No invenzione**: nessun contenuto curricolare inventato; fonti sempre documentate.
2. **No stati falsi**: ogni nuovo elemento ha stato `da_validare`; mai `validato` senza approvazione umana.
3. **No sovrascrittura di dati validati**: se un JSON ha elementi gia' validati, non sovrascrivere senza autorizzazione.
4. **No modifiche fuori data-prep**: `content/curriculum/` e' intoccabile salvo slice data-prep.
5. **Validatore sempre verde**: `node tools/validate-cml-normalized-curriculum.mjs` deve passare dopo ogni modifica JSON.

## 17. Guardrail credenziali

1. **Zero credenziali nel repo**: nessun client ID, secret, token, API key, file `.env`.
2. **guard-secrets come pre-commit hook**: cerca pattern comuni e blocca se trovati.
3. **Pattern bloccati**: vedere sezione 8.3.
4. **Se credenziali trovate in un file esistente**: non modificare il file, riportare e richiedere autorizzazione.
5. **SkB OAuth**: nessuna implementazione OAuth senza slice SKB dedicata.

## 18. Roadmap OPS

| Step | Slice       | Oggetto                                             | Tipo              | Prerequisiti     |
| ---- | ----------- | --------------------------------------------------- | ----------------- | ---------------- |
| 1    | CML-OPS-001 | Contratto Claude Code locale                        | docs-only         | Nessuno          |
| 2    | CML-OPS-002 | CLAUDE.md minimale project memory                   | docs + `.claude/` | OPS-001          |
| 3    | CML-OPS-003 | Skill `cml-sync`                                    | `.claude/skills/` | OPS-002          |
| 4    | CML-OPS-004 | Skill `cml-docs-only-slice` e `cml-readiness-audit` | `.claude/skills/` | OPS-003          |
| 5    | CML-OPS-005 | Hook `guard-scope`, `guard-secrets`, `guard-push`   | `.claude/hooks/`  | OPS-002          |
| 6    | CML-OPS-006 | Subagent audit (se giustificato)                    | `.claude/` config | OPS-004, OPS-005 |
| 7    | CML-OPS-007 | Plugin CurManLight Ops (se giustificato)            | Esterno           | OPS-006          |

### Criteri per avanzare nella roadmap

- Uno step puo' iniziare solo quando il precedente e' chiuso con verdict.
- Se uno step non e' giustificato (es. subagent inutili), viene archiviato come "rinviato" e la roadmap prosegue.
- Ogni step e' una slice autonoma con il proprio scope autorizzato.

## 19. Rischi residui

| #   | Rischio                             | Impatto                                          | Mitigazione                                                                       |
| --- | ----------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| 1   | Automazioni troppo invasive         | Hook bloccano lavoro legittimo, falso positivo   | Iniziare con hook P0, monitorare falsi positivi, aggiungere eccezioni documentate |
| 2   | Falsi positivi hook                 | Sviluppo rallentato da blocchi ingiustificati    | Ogni hook P1+ ha modalita' bypass documentata; hook P0 non hanno bypass           |
| 3   | Modifica accidentale runtime        | Slice docs-only tocca index.html per errore      | `guard-runtime-docs` pre-commit hook                                              |
| 4   | Push fuori ciclo                    | Modifiche non verificate raggiungono origin/main | `guard-push` pre-push hook                                                        |
| 5   | Credenziali in repo                 | Segreti committati per errore                    | `guard-secrets` pre-commit hook                                                   |
| 6   | Confusione CML/SKB                  | Skill OPS contaminano contratto SKB              | Regole SKB esplicite; skill SKB separate                                          |
| 7   | Sovrascrittura workflow funzionanti | Nuove skill/hook rompono processi collaudati     | Principio conservative integration; test su branch prima di main                  |
| 8   | CLAUDE.md troppo verbose            | Memoria di progetto sovraccarica il contesto     | CLAUDE.md rimane minimale; dettagli nei contratti e report                        |
| 9   | Dipendenza da Claude Code           | Il team non puo' lavorare senza Claude Code      | Le skill sono documentazione, non runtime; il repo e' autonomo senza di esse      |
| 10  | Rinvio indefinito MCP/plugin        | Caso d'uso emerge e non c'e' infrastruttura      | OPS-006/007 sono predisposti; la roadmap e' estensibile                           |

## 20. Criteri per procedere a CML-OPS-002

CML-OPS-002 (CLAUDE_MD_MINIMAL_PROJECT_MEMORY) puo' procedere quando:

1. CML-OPS-001 e' chiuso con verdict.
2. Il contratto `docs/02_system/CLAUDE-CODE-LOCAL-WORKFLOW-CONTRACT.md` e' nel repository.
3. L'execution doc `docs/03_execution/CML-OPS-001.md` e' nel repository.
4. Il report `report/CML-OPS-001_claude_code_skills_and_hooks_contract.md` e' nel repository.
5. Il REPO-MOVELOG agisce con la voce CML-OPS-001.
6. Nessuna modifica runtime, dati, `.claude/`, SchoolKB e' stata introdotta.
7. `CLAUDE.md` non e' ancora stato creato (la sua creazione e' oggetto di OPS-002).
8. Educazione Fisica non e' stata aperta, modificata o anticipata.

CML-OPS-002 creera':

- `CLAUDE.md` alla radice del repository (contenuto minimale come da specifica sezione 6).
- `.claude/settings.json` se necessario per permessi locali.
- Documentazione slice in `docs/03_execution/CML-OPS-002.md` e `report/`.
