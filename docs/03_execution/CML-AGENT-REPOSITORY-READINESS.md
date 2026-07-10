# CML-AGENT-REPOSITORY-READINESS — Report di Readiness del Repository per Agenti

## Stato

| Campo | Valore |
|-------|--------|
| Stato | COMPLETED |
| Branch iniziale | `codex/cml-444-react-legacy-capability-inventory` |
| Branch intermedio | `codex/cml-agent-repository-readiness` (pre-rebase) |
| Branch di sicurezza | `backup/cml-agent-repository-readiness-before-rebase` |
| Branch finale | `codex/cml-agent-repository-readiness-aligned` |
| Commit iniziale | `4ee7919` (docs: inventory legacy runtime capabilities for React parity) |
| Commit di preparazione | `3776695` (docs: prepare repository for multi-agent execution) |
| Base riallineata su | `0bc3e0c` (origin/main — CML-455 + CML-456) |
| Data | 2026-07-10 |

## Obiettivo

Predisporre il repository CurManLight per l'uso da parte di agenti di sviluppo autonomi o semi-autonomi, con:
- documentazione completa e verificabile
- strumenti di controllo replicabili
- regole operative chiare e vincolanti
- protezioni per lavoro multi-agente

## Analisi del Repository

### Stato Iniziale

- Branch: `codex/cml-444-react-legacy-capability-inventory`
- Commit HEAD: `4ee7919`
- Remote: `origin` → `https://github.com/antoniocorsano-boop/curmanlight`
- Il ramo locale derivava dalla linea CML-444, non contenuta nel nuovo `origin/main`; il commit di readiness e stato trapiantato sulla base `0bc3e0c`.
- Working tree: file non tracciati preesistenti (screenshots, CurManLightBrain, cml435_post_merge_home.png)
- Nessuna modifica preesistente ai file tracciati

### Architettura Verificata

| Componente | Stato | Note |
|------------|-------|------|
| Runtime pubblicato | `_published_snapshot/netlify-current/index.html` | 6512 righe, 860004 bytes |
| Runtime radice | `index.html` | 6513 righe, 860052 bytes |
| Coppia applicativa | DIVERGED | 48 bytes di differenza, 43 ins / 44 del |
| Service worker | `sw.js` | Identico in entrambe le posizioni |
| Manifest PWA | Solo in `_published_snapshot/` | Non presente nella root |
| Dati curriculum | 14/14 PASS | Validatore e shape test superati |
| GitHub Pages workflow | `.github/workflows/pages.yml` | Trigger su push a main con modifiche in published/ |
| React CI | `.github/workflows/react-ci.yml` | Lint + build su curman-react/ |

### Coppia Applicativa (Pre-esistente)

La coppia `index.html` / `_published_snapshot/netlify-current/index.html` era gia desincronizzata prima di questa attivita. Questo e un fatto preesistente, non causato da questa preparazione. Il nuovo script `tools/check-app-pair.mjs` rileva e documenta questa divergenza.

## File Creati (6) + Report (1) = 7 file nuovi

| File | Scopo | Verificato |
|------|-------|------------|
| `docs/02_system/AGENT-REPOSITORY-MAP.md` | Mappa completa del repository | Si |
| `docs/02_system/AGENT-WORK-CONTRACT.md` | Contratto operativo per attivita | Si |
| `docs/02_system/AGENT-TASK-TEMPLATE.md` | Modello di incarico per agenti | Si |
| `docs/02_system/AGENT-VALIDATION-COMMANDS.md` | Registro comandi verificati | Si |
| `docs/03_execution/TEMPLATE-AGENT-EXECUTION.md` | Modello di rapporto di esecuzione | Si |
| `tools/check-app-pair.mjs` | Script confronto coppia applicativa | Si — eseguito, funzionante |
| `docs/03_execution/CML-AGENT-REPOSITORY-READINESS.md` | Questo rapporto | Si |

## File Modificati (2)

| File | Tipo modifica | Contenuto |
|------|---------------|-----------|
| `AGENTS.md` | Riscrittura | Guida completa per agenti AI con regole, architettura, controlli |
| `.github/copilot-instructions.md` | Aggiornamento | Riferimento ad AGENTS.md e governance |

**Totale complessivo rispetto a `main`: 8 file di readiness + 1 rapporto di esecuzione = 9 file**

## Comandi Verificati

| Comando | Esito |
|---------|-------|
| `git status --short --branch` | PASS — mostra branch e file modificati/nuovi |
| `git diff --check` | PASS — solo warning CRLF, nessun errore |
| `node tools/validate-cml-normalized-curriculum.mjs` | PASS — 14/14 |
| `node tools/test-runtime-mappa-dati-shape.mjs` | PASS — 14/14 |
| `node tools/check-app-pair.mjs` | Strumento PASS — rileva correttamente la divergenza. Invariante coppia applicativa: FAIL PREESISTENTE — exit code 1 atteso |

## Controlli Eseguiti

| Controllo | Esito | Note |
|-----------|-------|------|
| Git status | PASS | Branch dedicato, working tree tracciabile |
| Git diff --check | PASS | Warning CRLF (normalizzazione Windows), zero errori |
| Curriculum validator | PASS | 14/14 discipline |
| Shape test | PASS | 14/14 discipline |
| App pair check | Strumento PASS (exit 0 se sincronizzati, exit 1 se divergenti). Invariante: FAIL PREESISTENTE — exit code 1 atteso, coppia non sincronizzata |
| No secrets scan | PASS | Nessuna credenziale, token o chiave API trovata |
| No runtime modification | PASS | Nessun file runtime modificato |
| No curriculum modification | PASS | Nessun file dati modificato |
| No publication flow modification | PASS | Nessun workflow modificato |
| No UI modification | PASS | Nessuna interfaccia modificata |

## Rischi Residui

1. **Coppia applicativa desincronizzata**: `index.html` e `_published_snapshot/netlify-current/index.html` sono diversi (48 bytes). Questo e pre-esistente. Una slice dedicata dovrebbe riconciliarli.
2. **Manifest mancante nella root**: `manifest.webmanifest` esiste solo nella cartella published, non nella root. Il service worker lo riferisce dalla posizione published.
3. **Nessun test E2E**: Il runtime attuale non ha test Playwright o E2E. Solo smoke test manuali e validatori scriptati.
4. **CRLF warnings**: Git segnala warning CRLF su file modificati. Non e un errore, ma indica che i file potrebbero avere line ending misti.

## Attivita Consigliate successive

1. **Correggere le incongruenze documentali** (questo commit)
2. **Aprire una PR** su `main`
3. **Revisionare e integrare** la PR
4. **Affrontare separatamente la divergenza della coppia applicativa** (slice dedicata, fuori perimetro da questa preparazione)

## Stato Git Finale

Stato locale precedente al commit del report:

```
## codex/cml-agent-repository-readiness-aligned [ahead 1]
?? docs/03_execution/CML-AGENT-REPOSITORY-READINESS.md
?? CurManLightBrain/
?? cml435_post_merge_home.png
?? report/screenshots/CML-427-*
?? report/screenshots/CML-435/
?? report/screenshots/cml-439-*
```

Stato remoto finale:

```
## codex/cml-agent-repository-readiness-aligned...origin/codex/cml-agent-repository-readiness-aligned [ahead 0]
```

## Commit Remoto

```
3776695 docs: prepare repository for multi-agent execution
9d5469d docs: update readiness report with rebased and pushed state
```

## Dichiarazioni

- **Push**: eseguito su `origin/codex/cml-agent-repository-readiness-aligned`
- **Branch remoto**: `codex/cml-agent-repository-readiness-aligned`
- **Richiesta di integrazione**: non aperta
- **Pubblicazione**: non eseguita (nessuna modifica a `_published_snapshot/`)
- **Modifiche al runtime**: nessuna
- **Modifiche ai dati curricolari**: nessuna
- **Modifiche al flusso di pubblicazione**: nessuna
- **Segreti o credenziali**: assenti
- **Branch pre-rebase**: `codex/cml-agent-repository-readiness` (abbandonato)
- **Branch di sicurezza**: `backup/cml-agent-repository-readiness-before-rebase`

## Verdetto

```
CML_AGENT_REPOSITORY_READINESS_PUSHED_REMOTE_NOT_PUBLISHED
```

## Note sulla rettifica

Correzioni applicate dopo il controllo remoto:

1. **Stato Git finale**: distinto stato intermedio (1 commit, report non tracciato) da stato remoto finale (2 commit, HEAD `9d5469d`)
2. **Elenco commit**: aggiunto `9d5469d` (aggiornamento report)
3. **Attivita future**: rimosse attivita gia concluse (commit, push); sostituite con prossimi passi reali (correzioni, PR, revisione, riconciliazione coppia)
4. **Ordine scolastico**: corretto "Secondaria II" in "Secondaria di primo grado" nella mappa del repository
5. **Relazione CML-444**: corretta la falsa affermazione "in linea con origin/main"; documentato che CML-444 non era antenato di origin/main e il commit e stato trapiantato selettivamente
6. **Esito check-app-pair.mjs**: distinto "strumento funzionante" (PASS) da "invariante coppia applicativa non soddisfatto" (FAIL preesistente, exit code 1 atteso)
7. **Conteggio file**: 8 file di readiness + 1 rapporto di esecuzione = 9 file complessivi
