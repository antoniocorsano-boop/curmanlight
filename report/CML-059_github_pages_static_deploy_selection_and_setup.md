# Report: CML-059 — GITHUB_PAGES_STATIC_DEPLOY_SELECTION_AND_SETUP

## Dettagli tecnici del workflow
Il workflow GitHub Actions è definito in `.github/workflows/pages.yml` e ha le seguenti caratteristiche:

- **Trigger**:
  - `workflow_dispatch`: permette l'esecuzione manuale dal tab Actions.
  - `push`: si attiva quando si pushano commit sulla branch `cml-008r-fix-markdown-decision-summary` che modificano i file nella cartella `_published_snapshot/netlify-current` o il workflow stesso.
- **Permissions**:
  - `contents: read`: necessario per il checkout del repository.
  - `pages: write`: necessario per creare l'artifact e effettuare il deploy su GitHub Pages.
  - `id-token: write`: necessario per l'autenticazione OIDC con l'ambiente GitHub Pages.
- **Concurrency**:
  - Gruppo `curmanlight-pages` per evitare eseguizioni concorrenti dello stesso deploy.
  - `cancel-in-progress: false` permette che un workflow in corso continui anche se ne viene avviato uno nuovo (ma il nuovo sarà in coda finché il precedente non termina).
- **Job `deploy`**:
  - Runs su `ubuntu-latest`.
  - Utilizza l'ambiente `github-pages` (da creare nelle impostazioni del repository se non esiste).
  - Steps:
    1. `actions/checkout@v4`: ottiene il codice sorgente.
    2. `actions/configure-pages@v5`: configura l'ambiente per GitHub Pages.
    3. `actions/upload-pages-artifact@v3`: carica l'artifact dalla cartella `_published_snapshot/netlify-current`.
    4. `actions/deploy-pages@v4`: effettua il deploy e imposta l'URL di output.

## File autorizzati
Durante lo slice CML-059 sono autorizzati i seguenti file:
- `.github/workflows/pages.yml`
- `docs/03_execution/CML-059.md`
- `report/CML-059_github_pages_static_deploy_selection_and_setup.md`
- `docs/REPO-MOVELOG.md`

Tutti gli altri file, in particolare quelli dentro `_published_snapshot/netlify-current/`, devono rimanere invariati.

## Controlli eseguiti
Prima di committare, sono stati effettuati i seguenti controlli:
1. `Test-Path _published_snapshot\netlify-current\index.html` → vero (il file esiste).
2. Verifica che il workflow sia stato creato correttamente (presenza e contenuto).
3. `git diff --check` → nessun errore di spaziatura.
4. `git diff --name-only` → elenca solo i file autorizzati (vedi sezione successiva).
5. `git diff --name-only -- _published_snapshot/netlify-current` → output vuoto, confermando che nessun file nella cartella di pubblicazione è stato modificato.

## Conferma nessun runtime modificato
L'output di `git diff --name-only -- _published_snapshot/netlify-current` è vuoto, quindi nessun file nel runtime statale è stato alterato. Inoltre, i controlli sopra mostrano che i soli file modificati sono quelli esplicitamente autorizzati per lo slice.

## Conferma nessun deploy locale
Non è stato eseguito alcun comando di deploy locale (ad esempio, nessun push manuale a Netlify o Coolify, nessun comando di upload a GitHub Pages esterno al workflow). Il deploy avverrà esclusivamente tramite il workflow GitHub Actions dopo il push e l'esecuzione dello stesso.

## Procedura per smoke post-deploy
Dopo che il workflow ha eseguito correttamente il deploy su GitHub Pages, procedere come segue:

1. Ottenere l'URL del deploy dalle impostazioni di GitHub Pages (repository → Settings → Pages) o dall'output del workflow step `Deploy to GitHub Pages` (variabile `deployment.outputs.page_url`).
2. Aprire l'URL in un browser e verificare:
   - Pagina caricata correttamente (HTTP 200).
   - Azioni libere (viewer, proposta docente, sezioni generali) funzionanti.
   - Modale codice operativo appare sulle azioni protette (export esito dipartimentale, import esito referente, report gruppo).
   - Inserimento di codice errato mostra errore e non sblocca.
   - Inserimento del codice operativo `CML2025` sblocca le azioni protette.
   - Refresh della pagina mantiene lo stato di sblocco.
   - Azione “Blocca di nuovo” revoca lo stato di sblocco.
   - Nessun nuovo voce di `localStorage` creata dallo sblocco (solo `sessionStorage`).
   - Regressione minima sullo schema `.cml` (nessuna modifica).
3. Documentare i risultati dello smoke test in un nuovo report o aggiornare la documentazione esistente.

## Note sui controlli eseguiti
I controlli sono stati eseguiti su un repository locale con il remote impostato su `https://github.com/anton/CurManLight` (esempio dal report CML-058). Si raccomanda di verificare che l'URL del remote corrisponda al repository effettivo e di avere i diritti di push prima di eseguire il push della branch.