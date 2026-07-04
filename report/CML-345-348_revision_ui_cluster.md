# Report: CML-345-348 — Revision UI Cluster

## Branch e baseline
- Branch: `codex/cml-345-348-revision-ui-cluster`
- Commit iniziale: `5e7da6a68e63f8a4683ba4226e7faed8f2402185`

## Scope implementato
- Runtime microfix su:
  - `_published_snapshot/netlify-current/index.html`
  - `index.html`
- Documentazione slice:
  - `docs/03_execution/CML-345-348-revision-ui-cluster.md`
  - `docs/REPO-MOVELOG.md`
  - `report/CML-345-348_revision_ui_cluster.md`

## Modifiche principali
1. Aggiunta icone SVG mancanti/necessarie nello sprite (`upload`, `landmark`, `check`, `x`, `search`, `edit`, `trash`).
2. Card pending:
   - `status === "nuovo"`: confronto aperto di default.
   - `status === "modifica"`: confronto collassato di default.
3. Pulsante dettaglio:
   - stato iniziale coerente (`Mostra/Nascondi confronto`);
   - `aria-expanded` valorizzato in render iniziale;
   - `togglePendingDetail` aggiorna `aria-label` e `aria-expanded`.
4. Sostituzione emoji con SVG nei 5 pulsanti azione revisione pending:
   - approva, rifiuta/mantieni, dettaglio, personalizza, rimuovi.

## Esclusioni esplicite rispettate
- Nessuna modifica a `.cml`, import/export, localStorage/sessionStorage, service worker, workflow Pages, deploy config.
- Nessuna modifica architetturale (no build/no dipendenze/no backend/no API/no OAuth).
- Home/Processo/Esportazioni non alterati funzionalmente.

## Controlli eseguiti
- `git diff --check`: PASS
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS
- Verifica riferimenti `href="#icon-"` vs sprite definito: PASS (root + snapshot)
- Verifica statica HTML/SVG (tag `<svg>/<use>` dei nuovi interventi): PASS

## Esito finale
- Verdict: `READY_LOCAL_NOT_PUSHED`
- Push: non eseguito
## Stato remoto post-push branch
- Branch remoto: `origin/codex/cml-345-348-revision-ui-cluster`
- Commit pushato: `601e897`
- Stato iniziale: `CML_345_348_BRANCH_PUSHED_NOT_MERGED`
- Merge su `main`: eseguito (PR #6)
- Commit merge: `e87e023`
- Deploy Pages: eseguito con successo

## Verifica post-merge e pubblicazione
- GitHub Pages workflow run: `28698122997`
- Workflow status: completed
- Workflow conclusion: success
- URL pubblico: https://antoniocorsano-boop.github.io/curmanlight/
- HTTP status code: 200
- Smoke test pubblico: PASS
  - All tabs detected (Home, Lavoro, Processo, Esportazioni)
  - Action buttons with SVG icons functional
  - Detail toggle ARIA attributes working
  - Card states (nuovo=open, modifica=closed) verified
  - Badges preserved in UI
- Stato finale: `CML_345_348_MERGED_AND_PUBLISHED`
