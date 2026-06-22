# Report: CML-059A — GITHUB_PAGES_LIVE_DEPLOY_SMOKE

## Dettagli esecuzione smoke live

### Ambiente
- **URL**: https://antoniocorsano-boop.github.io/curmanlight/
- **Branch**: main
- **Remote**: https://github.com/antoniocorsano-boop/curmanlight
- **Data smoke**: 2026-06-22

### Risultati per test

| # | Test | Dettaglio |
|---|------|-----------|
| T01 | Caricamento pagina | HTTP 200, titolo corretto "Curricolo Verticale 2012→2025 — I.C. Calvario-Covotta «don Lorenzo Milani», Ariano Irpino" |
| T02 | Console | 1 errore: `favicon.ico` 404 (non bloccante). Nessun errore JavaScript bloccante |
| T03 | Storage iniziale | `sessionStorage`: `welcomeShown=1`. `roleAccessGranted` assente. `localStorage`: vuoto |
| T04 | Navigazione libera | Tutte le sezioni aperte senza codice: Revisione per disciplina, Curricolo definitivo, Riferimenti normativi, Sezioni generali, Curricolo di istituto |
| T05 | Azione protetta (Importa esiti dipartimentali) | Click su `button.referent-validation-btn` → modale "Codice operativo richiesto" visibile. File picker non aperto prima del codice |
| T06 | Codice errato | Inserito `wrong` → alert "Codice non valido. Verifica il codice operativo ricevuto." visibile. Storage invariato: `roleAccessGranted` assente |
| T07 | Codice corretto | Inserito `CML2025` → sblocco. File chooser aperto (atteso). `sessionStorage.roleAccessGranted=true`. Codice `CML2025` NON presente in localStorage/sessionStorage |
| T08 | Refresh | Ricaricata pagina → `sessionStorage.roleAccessGranted=true` mantenuto. Sblocco persistente |
| T09 | Stato condiviso | Riazione protetta dopo sblocco: file chooser diretto, nessuna modale codice. Funzione `requireRoleAccess` chiama direttamente callback |
| T10 | Blocca di nuovo | Click "Blocca di nuovo" → `sessionStorage.roleAccessGranted` rimosso. Azione protetta richiede nuovamente codice. Modale codice riappare |
| T11 | Mobile | Viewport 375x812. Navigazione mobile "Navigazione mobile" con bottoni Rev./Def./Curr./Menu. Contenuti leggibili. Modale codice usabile. Nessun overflow: `scrollWidth=360`, `innerWidth=375` |
| T12 | Regressione `.cml` | Esaminati `buildTeacherCmlModel` e `buildDepartmentOutcomeCmlModel`. Nessun campo codice/accesso/autenticazione nei modelli di export o nei parser |

### Controlli storage
```
Prima dei test:
  sessionStorage: { welcomeShown: "1" }
  localStorage: {}

Dopo codice corretto:
  sessionStorage: { welcomeShown: "1", roleAccessGranted: "true" }
  localStorage: {}

Dopo refresh:
  sessionStorage: { welcomeShown: "1", roleAccessGranted: "true" }
  localStorage: {}

Dopo "Blocca di nuovo":
  sessionStorage: { welcomeShown: "1" }
  localStorage: {}
```

### Controlli runtime
- `git diff --name-only -- _published_snapshot/netlify-current`: vuoto
- Nessun file runtime modificato

### File autorizzati
- `docs/03_execution/CML-059A.md`
- `report/CML-059A_github_pages_live_deploy_smoke.md`
- `docs/REPO-MOVELOG.md`

### Verdetto
`CML_059A_GITHUB_PAGES_LIVE_DEPLOY_SMOKE_READY`
