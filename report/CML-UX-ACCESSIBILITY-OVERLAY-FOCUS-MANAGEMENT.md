# CML-UX-ACCESSIBILITY-OVERLAY-FOCUS-MANAGEMENT - Report

## Sintesi esecutiva

Microfix runtime completato sul welcome overlay. Il focus iniziale entra nell'overlay, `Tab` e `Shift+Tab` ciclano tra i controlli dell'overlay, `Escape` chiude l'overlay e il focus post-dismiss viene indirizzato a un target stabile.

La slice non modifica score, dati curricolari, export, schema `.cml`, asset, manifest o service worker. Baseline accessibilita invariata a **76/100**.

## Tabella file modificati

| File | Tipo | Note |
|------|------|------|
| `_published_snapshot/netlify-current/index.html` | runtime microfix | helper focus per welcome overlay |
| `docs/03_execution/CML-UX-ACCESSIBILITY-OVERLAY-FOCUS-MANAGEMENT.md` | documentazione | esecuzione slice |
| `report/CML-UX-ACCESSIBILITY-OVERLAY-FOCUS-MANAGEMENT.md` | report | sintesi controlli |
| `docs/REPO-MOVELOG.md` | movelog | voce slice |

## Tabella controlli funzionali

| Controllo | Esito | Evidenza |
|-----------|-------|----------|
| Overlay visibile al caricamento | PASS | `#welcome-overlay` presente |
| Focus iniziale dentro overlay | PASS | `Configura dati` attivo |
| Tab avanti | PASS | `Configura dati` -> `Inizia subito` -> `Configura dati` |
| Shift+Tab | PASS | ciclo inverso verso `Inizia subito` |
| Chiusura da `Inizia subito` | PASS | overlay rimosso, focus su `#main-content` |
| Chiusura da `Escape` | PASS | overlay rimosso, focus su `#main-content` |
| Ramo `Configura dati` | PASS | modal impostazioni aperto, focus su `#profile-nome` |
| Home dopo chiusura | PASS | contenuto principale visibile |
| Curriculum | PASS | tab raggiungibile |
| Cambio disciplina | PASS | Matematica selezionata e status live aggiornato |
| Competenze | PASS | sezione visibile |
| Export Center | PASS | sezione visibile, pulsanti export presenti |
| Menu mobile | PASS | overlay menu mobile aperto |

## Tabella controlli automatici

| Controllo | Esito |
|-----------|-------|
| `git diff --check` | PASS |
| Validatore curriculum | PASS, 14 file validi, 0 invalidi |
| Shape test runtime `MAPPA_DATI` | PASS, 14 discipline passed, 0 failed |
| Smoke CDP overlay focus | PASS |
| Errori JS reali | PASS, 0 |

## Tabella accessibilita

| Controllo | Esito | Note |
|-----------|-------|------|
| Focus trap | PASS | `Tab`/`Shift+Tab` confinati nei controlli overlay |
| Focus post-dismiss | PASS | `main-content` o `profile-nome` secondo il ramo |
| Escape | PASS | chiusura overlay implementata in modo minimo |
| Accessibility Tree | PASS | landmark `region: Benvenuto` conservato |
| axe color-contrast | non rieseguito | axe CLI non disponibile localmente |
| axe region | non rieseguito | baseline pulita mantenuta, region verificata via AX tree |
| Lighthouse | non rieseguito | CLI non disponibile localmente |
| Screen reader reale | non eseguito | resta gate separato |

## Scope enforcement

Non modificati:

- `content/curriculum/`
- `tools/`
- `manifest.json`
- `service-worker.js`
- `assets/`
- export/import `.cml`
- schema `.cml`
- dati/testi curricolari
- breadcrumb sync

`index.html` root non esiste e non e' stato aggiunto.

## Regressioni escluse

Lo smoke CDP ha verificato:

- nessuna regressione su Home;
- nessuna regressione su Curriculum;
- nessuna regressione su cambio disciplina;
- nessuna regressione su Competenze;
- nessuna regressione su Export Center;
- nessuna regressione su navigazione mobile/menu mobile;
- zero eccezioni JavaScript runtime.

## Backlog residuo

- `CML-UX-ACCESSIBILITY-BREADCRUMB-SYNC-AUDIT`
- `CML-UX-ACCESSIBILITY-REAL-SCREEN-READER-TEST`
- nuova PR readability scaffold

## Verdict

`CML_UX_ACCESSIBILITY_OVERLAY_FOCUS_MANAGEMENT_READY`