# AGENT-VALIDATION-COMMANDS.md — Registro Comandi Verificati

> Solo comandi realmente verificati nel repository. Aggiornato il 2026-07-10.

## 1. Controllo Git

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `git status --short --branch` | Stato working tree e branch | Root repository | Lista file modificati/tracciati, nome branch | Ogni intervento |
| `git diff --check` | Conflitti whitespace e syntax | Root repository | Nessun output (exit 0) | Prima di ogni commit |
| `git log --oneline -5` | Ultimi 5 commit | Root repository | Lista commit | All'inizio di ogni intervento |
| `git log --oneline origin/main..HEAD` | Commit locali non pushati | Root repository | Lista commit o vuoto | Prima di push |
| `git rev-parse HEAD` | Hash commit corrente | Root repository | Hash SHA-256 | All'inizio di ogni intervento |
| `git rev-parse --abbrev-ref HEAD` | Nome branch corrente | Root repository | Nome branch | All'inizio di ogni intervento |

## 2. Validazione Dati Curricolari

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `node tools/validate-cml-normalized-curriculum.mjs` | Valida 14 file .normalized.json | Root repository | 14/14 PASS, 0 errors | Modifica a `content/curriculum/` |
| `node tools/test-runtime-mappa-dati-shape.mjs` | Verifica shape runtime mappa dati | Root repository | 14/14 PASS | Modifica a runtime o dati |

## 3. Confronto Coppia Applicativa

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `node tools/check-app-pair.mjs` | Confronta index.html e published index.html | Root repository | PAIR_SYNC o dettaglio divergenze | Modifica a runtime |

## 4. Controllo Struttura Dati

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `node tools/smoke-hash-nav.mjs` | Smoke test hash navigazione | Root repository | PASS | Verifica post-modifica runtime |

## 5. Avvio Locale

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `npx serve .` | Server locale per test | Root repository | Server su porta 3000 | Test visivo locale |
| `python -m http.server 8000` | Server locale alternativo | Root repository | Server su porta 8000 | Test visivo locale |

## 6. Smoke Test React

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `npm run lint` | Lint codice React | `curman-react/` | Nessun errore | Modifica a `curman-react/` |
| `npm run build` | Build React | `curman-react/` | Build completata | Modifica a `curman-react/` |

## 7. Controllo Pubblicazione

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `curl -s -o /dev/null -w "%{http_code}" https://antoniocorsano-boop.github.io/curmanlight/` | Verifica HTTP status | Qualsiasi | `200` | Post-push, post-deploy |

## 8. Controllo Confronto File

| Comando | Scopo | Cartella di esecuzione | Esito atteso | Quando usarlo |
|---------|-------|----------------------|---------------|---------------|
| `Get-Content <file> \| Measure-Object -Line` | Conta righe file | Root repository | Numero righe | Verifica dimensione file |
| `Get-FileHash <file>` | Hash file | Root repository | Hash SHA-256 | Confronto file |

## Note

- I comandi devono essere eseguiti dalla root del repository salvo diversa indicazione
- Nessun comando modifica i file del repository
- In caso di errore, fermarsi e documentare il problema
- Per Windows: usare PowerShell (non bash)
- Per la validazione: eseguire i comandi in ordine logico (Git → dati → runtime → deploy)
