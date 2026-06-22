# CML-056A — Runtime Syntax Recovery Before Role Access Gating Smoke

**Data:** 2026-06-22
**Branch:** `cml-008r-fix-markdown-decision-summary`
**Commit di partenza:** `a12492682adc9c758f0cf384cf21f8677b8c1914`

## Obiettivo

Ripristinare la validità sintattica e l'avvio del runtime in `_published_snapshot/netlify-current/index.html` prima degli smoke T01–T13 di CML-056, senza chiudere CML-056 in questa slice.

## Salvaguardia CML-056

La modifica role-access gating già preparata è stata isolata nello stash:

`preserve CML-056 role access gating during CML-056A`

Gli untracked `MEMORY.md`, `.kilo/` e `CLAUDE.md` non sono stati inclusi.

## Causa

- Il browser interrompeva lo script con `SyntaxError: Unexpected token '}'`.
- Il commit `60d546e` aveva rimosso firme di funzione, dichiarazioni globali e l'apertura del pannello dipartimentale, lasciando i relativi corpi e utilizzi.
- Il commit `c04d903` aveva rimosso gli escape necessari da quattro azioni dentro la stringa del menu mobile.

## Recupero

Sono state ripristinate esclusivamente le righe storiche mancanti:

- 15 firme di funzione;
- `ORDINI`, stato iniziale `selDisc/filterStatus/currentTab`, `LOCAL_SAVE_KEY` e `deferredInstallPrompt`;
- apertura di `department-import-panel`;
- escape delle quattro azioni del menu mobile.

Nessun corpo funzione, schema `.cml`, export, import o report è stato riscritto.

## Verifiche

- Parser JavaScript inline: PASS.
- Pagina locale: HTTP 200, `readyState=complete`.
- Errori console/runtime: 0.
- Render iniziale: 12 card.
- Viewer curricolo: PASS.
- Funzioni principali export/import/report: presenti.
- Modelli verificati: `teacher_proposal` e `department_outcome` invariati.
- Viewport 390 px e 1280 px: nessun overflow, contenuto principale visibile.
- `git diff --check`: PASS.
- Nessun deploy.

## Esito

CML-056A rende il runtime nuovamente avviabile. CML-056 resta distinta e deve essere ripresa applicando lo stash e rieseguendo gli smoke T01–T13 aggiornati.

`CML_056A_RUNTIME_SYNTAX_RECOVERY_READY`
