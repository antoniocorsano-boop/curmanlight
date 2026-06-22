# CML-064A — TECHNOLOGY_PACK_PREVIEW_LIVE_DEPLOY_SMOKE

**Obiettivo**: verificare sul sito GitHub Pages live che l'anteprima read-only del pacchetto Tecnologia normalizzato, introdotta in CML-064, sia pubblicata correttamente e non produca regressioni su navigazione, export/import/report e role-access gating.

## Contesto

- **Progetto**: CurManLight / CML
- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/
- **Branch**: main
- **Remote**: https://github.com/antoniocorsano-boop/curmanlight
- **Commit runtime**: 2d0d851 (CML-064)
- **Deploy GitHub Pages**: attivo da `main`

## Fase 0 — Verifica branch e pubblicazione

- Commit `2d0d851` presente nel merge commit `8aa4b6e`
- Feature branch `cml-060-curriculum-coverage-ux-audit` mergiata in `main`
- Push su `main` completato
- GitHub Pages pubblica da `_published_snapshot/netlify-current` su branch `main`

## Fase 1 — Workflow GitHub Pages

- Workflow: `Deploy CurManLight to GitHub Pages`
- Ultimo run: main, stato success
- Artifact pubblicato da `_published_snapshot/netlify-current`

## Fase 2 — Smoke live browser

### Verifiche

| # | Controllo | Esito |
|---|-----------|-------|
| 1 | Pagina live caricata | PASS |
| 2 | Console senza errori JS bloccanti | PASS |
| 3 | Sezione/pannello Tecnologia normalizzata visibile | PASS |
| 4 | Microcopy obbligatoria presente | PASS |
| 5 | Conteggi corretti (13, 2, 5, 6) | PASS |
| 6 | Filtri ordine funzionanti (Tutti/Infanzia/Primaria/Secondaria) | PASS |
| 7 | Dettaglio unità espandibile | PASS |
| 8 | Nessun campo editabile nella preview | PASS |
| 9 | Nessun salvataggio locale aggiuntivo | PASS |
| 10 | Export/import/report invariati | PASS |
| 11 | Role-access gating invariato | PASS |
| 12 | Mobile smoke | PASS |

### Microcopy verificata

- "Anteprima non modificabile"
- "Richiede validazione umana"
- "Non costituisce approvazione definitiva del curricolo"

### Conteggi visualizzati

- **Totale**: 13 unità
- **Infanzia**: 2 unità
- **Primaria**: 5 unità
- **Secondaria I grado**: 6 unità

### Role-access gating invariato

- Azioni libere accessibili: SI
- Azioni protette sotto codice operativo: SI
- Codice `CML2025` sblocca azioni protette: SI
- "Blocca di nuovo" riblocca: SI
- `sessionStorage.roleAccessGranted` solo in sessionStorage: SI

## Fase 3 — Regressione `.cml`

- Nessun nuovo campo codice/accesso/autenticazione nei modelli `.cml`: PASS
- Nessuna unità Tecnologia normalizzata esportata automaticamente nei flussi docente/dipartimento/referente: PASS
- Parser invariati: PASS

## File autorizzati/documentazione

- `docs/03_execution/CML-064A.md` (questo file)
- `report/CML-064A_technology_pack_preview_live_deploy_smoke.md`
- `docs/REPO-MOVELOG.md` (aggiornato)

## File non autorizzati (conferma non modificati)

- `_published_snapshot/netlify-current/index.html`: NON MODIFICATO in CML-064A
- `content/curriculum/tecnologia.normalized.json`: NON MODIFICATO
- Script di validazione: NON MODIFICATI
- Workflow: NON MODIFICATI
- Asset: NON MODIFICATI
- Schema `.cml`: NON MODIFICATO
- Configurazioni hosting: NON MODIFICATE

## Controlli finali

```
git status --short --branch --untracked-files=all
git diff --check
git diff --name-only
git diff --name-only -- _published_snapshot/netlify-current
```

- Solo file documentali modificati: SI
- Runtime non modificato in CML-064A: SI
- Nessun deploy aggiuntivo oltre GitHub Pages: SI
- Nessuna modifica schema `.cml`: SI

## Verdetto

`CML_064A_TECHNOLOGY_PACK_PREVIEW_LIVE_DEPLOY_SMOKE_READY`
