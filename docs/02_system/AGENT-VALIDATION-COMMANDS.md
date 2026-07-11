# AGENT-VALIDATION-COMMANDS.md — Registro Comandi Verificati

> Solo comandi realmente verificati nel repository. Aggiornato per il release-gate GitHub Pages e il movelog operativo corrente.

## 1. Controllo Git

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `git status --short --branch` | Stato working tree e branch | Root repository | Lista file modificati/tracciati, nome branch | Ogni intervento |
| `git diff --check` | Conflitti whitespace | Root repository | Nessun output, exit 0 | Prima di ogni commit |
| `git log --oneline -5` | Ultimi 5 commit | Root repository | Lista commit | All'inizio di ogni intervento |
| `git log --oneline origin/main..HEAD` | Commit del ramo non presenti in main | Root repository | Lista commit o vuoto | Prima di push o PR |
| `git rev-parse HEAD` | Hash commit corrente | Root repository | SHA commit | All'inizio e alla fine |
| `git rev-parse --abbrev-ref HEAD` | Nome branch corrente | Root repository | Nome branch | All'inizio di ogni intervento |
| `git fetch origin` | Aggiorna i riferimenti remoti | Root repository | Completamento senza errori | Prima di rebase, PR, merge o release gate |
| `git diff --name-only origin/main...HEAD` | Elenca i file effettivi della slice rispetto a main | Root repository | Elenco coerente col perimetro | Prima di push, PR e merge |

## 2. Release-Gate GitHub Pages

La fonte di verita e `.github/workflows/pages.yml`.

Un push su `main` attiva il workflow Pages se il diff contiene almeno uno dei seguenti percorsi:

```text
_published_snapshot/netlify-current/**
curman-react/**
.github/workflows/pages.yml
```

Procedura minima:

```bash
git fetch origin
git diff --name-only origin/main...HEAD
```

Interpretazione:

- presenza di `_published_snapshot/netlify-current/**`: deploy del contenuto legacy atteso;
- presenza di `curman-react/**`: build React e deploy dell'artifact Pages combinato attesi;
- presenza di `.github/workflows/pages.yml`: esecuzione del workflow Pages attesa dopo il push su `main`;
- assenza dei tre percorsi: nessun trigger automatico `push` di `pages.yml` per quella integrazione, salvo modifica concorrente o avvio manuale.

Una modifica React-only non deve essere classificata come "non pubblicante" quando viene integrata in `main`.

## 3. Validazione Dati Curricolari

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `node tools/validate-cml-normalized-curriculum.mjs` | Valida 14 file `.normalized.json` | Root repository | 14/14 PASS, 0 errori | Modifica a `content/curriculum/` |
| `node tools/test-runtime-mappa-dati-shape.mjs` | Verifica shape runtime mappa dati | Root repository | 14/14 PASS | Modifica a runtime o dati |

## 4. Confronto Coppia Applicativa

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `node tools/check-app-pair.mjs` | Confronta `index.html`/published e le copie `sw.js` | Root repository | `PAIR_SYNC` oppure dettaglio delle divergenze | Modifica al runtime legacy o controllo pre-release |

Lo script termina con exit code 1 quando almeno una coppia diverge. Distinguere sempre:

- **strumento funzionante**;
- **invariante soddisfatto o fallito**.

## 5. Controllo Struttura e Smoke Legacy

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `node tools/smoke-hash-nav.mjs` | Smoke test hash navigazione | Root repository | PASS | Verifica post-modifica runtime legacy |

## 6. Avvio Locale

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `npx serve .` | Server locale per test | Root repository | Server locale attivo | Test visivo locale |
| `python -m http.server 8000` | Server locale alternativo | Root repository | Server su porta 8000 | Test visivo locale |

## 7. Controlli React

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `npm run lint` | Lint codice React | `curman-react/` | Nessun errore | Modifica a `curman-react/` |
| `npm run build` | Build React | `curman-react/` | Build completata | Modifica a `curman-react/` |

Il superamento di lint e build non elimina l'impatto release: il merge su `main` di file React attiva `pages.yml`.

## 8. Controllo Pubblicazione

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `curl -s -o /dev/null -w "%{http_code}" https://antoniocorsano-boop.github.io/curmanlight/` | Verifica HTTP della radice legacy | Qualsiasi | `200` | Post-deploy |
| `curl -s -o /dev/null -w "%{http_code}" https://antoniocorsano-boop.github.io/curmanlight/react-preview/` | Verifica HTTP della preview React | Qualsiasi | `200` | Post-deploy con modifiche React o workflow Pages |

La sola risposta HTTP 200 non sostituisce lo smoke test funzionale.

## 9. Controllo Confronto File

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `Get-Content <file> | Measure-Object -Line` | Conta righe file | Root repository | Numero righe | Verifica dimensione file |
| `Get-FileHash <file>` | Hash file | Root repository | Hash SHA-256 | Confronto file |

## 10. Autorita Documentale

Prima di aggiornare la cronologia della slice:

- usare `docs/REPO-MOVELOG-v2.md` come registro operativo corrente;
- non riscrivere remotamente `docs/REPO-MOVELOG.md`, archivio legacy;
- verificare `docs/02_system/PROJECT-STATE.md` per eventuali variazioni dell'autorita documentale.

## Note

- I comandi devono essere eseguiti dalla root del repository salvo diversa indicazione.
- In caso di errore, fermarsi e documentare il problema.
- Per Windows usare PowerShell quando il comando dipende dalla shell.
- Eseguire i controlli in ordine logico: Git → perimetro → dati/runtime/React → release gate → deploy.
- Un push su branch dedicato e un merge su `main` sono stati distinti: solo il secondo puo attivare il trigger `push` Pages.
