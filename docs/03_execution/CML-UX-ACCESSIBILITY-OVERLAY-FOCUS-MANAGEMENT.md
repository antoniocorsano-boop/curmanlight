# CML-UX-ACCESSIBILITY-OVERLAY-FOCUS-MANAGEMENT

## Obiettivo

Migliorare la gestione del focus dell'overlay iniziale/welcome overlay correggendo i due warning emersi nel gate strutturale screen reader:

1. overlay iniziale senza focus trap;
2. focus post-dismiss non esplicito.

La slice e' un micro-intervento runtime, senza refactor grafici o funzionali e senza aggiornamento score.

## Stato iniziale

| Aspetto | Valore |
|---------|--------|
| Branch | `main` |
| HEAD iniziale | `78388f8` |
| origin/main | `78388f8` |
| Baseline accessibilita remota | 76/100 |
| Slice precedente | `CML_UX_ACCESSIBILITY_SCORE_REFRESH_POST_SCREEN_READER_STRUCTURAL_READY` |
| Gate automatici dichiarati | puliti |
| Gate screen reader reale | non eseguito |
| Gate strutturale assistivo | completato con note |

## Perimetro

File autorizzati e modificati:

- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-UX-ACCESSIBILITY-OVERLAY-FOCUS-MANAGEMENT.md`
- `report/CML-UX-ACCESSIBILITY-OVERLAY-FOCUS-MANAGEMENT.md`
- `docs/REPO-MOVELOG.md`

`index.html` root non esiste nel repository, quindi non e' stato modificato.

## Problema rilevato dal gate precedente

Il gate strutturale screen reader aveva documentato:

- focus che poteva uscire dall'overlay iniziale durante la navigazione `Tab`;
- assenza di un target esplicito dopo la chiusura dell'overlay.

Questi warning non erano P0/P1 automatici, ma riducevano la qualita dell'esperienza tastiera/screen reader e impedivano di considerare chiuso il backlog overlay focus.

## Soluzione applicata

Sono stati aggiunti helper minimi attorno al solo welcome overlay:

- `getFocusableElements(container)`;
- `trapWelcomeOverlayFocus(event)`;
- `focusWelcomeOverlay()`;
- `restoreFocusAfterWelcomeDismiss()`;
- `dismissWelcomeOverlay(options)`;
- `openSettingsFromWelcome()`.

I due handler inline dei pulsanti dell'overlay ora usano questi helper invece di rimuovere direttamente il nodo DOM.

## Dettagli focus trap

Quando `#welcome-overlay` e' visibile:

- il focus iniziale va al primo controllo utile: `Configura dati`;
- `Tab` passa da `Configura dati` a `Inizia subito`;
- un ulteriore `Tab` cicla su `Configura dati`;
- `Shift+Tab` dal primo controllo cicla su `Inizia subito`;
- `Escape` chiude l'overlay tramite `dismissWelcomeOverlay()`.

La semantica ARIA esistente dell'overlay resta invariata: `role="region"` e `aria-label="Benvenuto"`.

## Dettagli focus post-dismiss

Dopo chiusura con `Inizia subito` o `Escape`, il focus viene spostato esplicitamente su `#main-content`, che riceve `tabindex="-1"` solo come target programmatico stabile.

Nel ramo `Configura dati`, l'overlay viene chiuso senza forzare focus su `main`; viene aperto il modal impostazioni e il focus va a `#profile-nome`, primo campo utile del flusso impostazioni.

## Controlli eseguiti

| Controllo | Esito |
|-----------|-------|
| Caricamento pagina con overlay visibile | PASS |
| Focus iniziale dentro overlay | PASS (`Configura dati`) |
| Tab avanti dentro overlay | PASS |
| Shift+Tab dentro overlay | PASS |
| Escape chiude overlay | PASS |
| Chiusura da `Inizia subito` | PASS |
| Focus dopo chiusura | PASS (`#main-content`) |
| `Configura dati` apre impostazioni e focalizza campo | PASS (`#profile-nome`) |
| Accesso Home dopo chiusura | PASS |
| Accesso Curriculum | PASS |
| Cambio disciplina | PASS (`Disciplina selezionata: Matematica`) |
| Accesso Competenze e progettazione | PASS |
| Accesso Export Center | PASS |
| Navigazione mobile/menu mobile | PASS |
| Errori JavaScript reali | PASS, 0 |

## Esiti accessibilita

| Area | Esito | Note |
|------|-------|------|
| Focus trap overlay | PASS | `Tab` e `Shift+Tab` restano tra i controlli overlay |
| Focus iniziale overlay | PASS | primo bottone focalizzato |
| Focus post-dismiss | PASS | `main-content` o `profile-nome` secondo il ramo |
| Escape | PASS | chiusura minima e documentata |
| Accessibility Tree CDP | PASS | `region: Benvenuto` ancora presente |
| axe | non rieseguito | runner locale non disponibile in questa workspace |
| Lighthouse | non rieseguito | runner locale non disponibile in questa workspace |

## Validatore e shape test

| Comando | Esito |
|---------|-------|
| `node tools/validate-cml-normalized-curriculum.mjs` | PASS, 14 file validi, 0 invalidi |
| `node tools/test-runtime-mappa-dati-shape.mjs` | PASS, 14 discipline passed, 0 failed |

## Errori JS

Smoke CDP locale su `http://127.0.0.1:8125/_published_snapshot/netlify-current/index.html`:

- eccezioni runtime: 0;
- console app errors: 0;
- 404 statici/fav icon: presenti, non bloccanti.

## Invarianti rispettate

- Nessuna modifica a `content/curriculum/`.
- Nessuna modifica a `tools/`.
- Nessuna modifica a `manifest.json`.
- Nessuna modifica a `service-worker.js`.
- Nessuna modifica ad `assets/`.
- Nessuna modifica a export/import `.cml`.
- Nessuna modifica allo schema `.cml`.
- Nessuna modifica ai testi curricolari.
- Nessun deploy.
- Nessun push.
- Score non aggiornato oltre 76/100.
- Gate reale screen reader non dichiarato superato.
- Breadcrumb non corretto in questa slice.

## Limiti residui

Restano separati:

- `CML-UX-ACCESSIBILITY-BREADCRUMB-SYNC-AUDIT`;
- `CML-UX-ACCESSIBILITY-REAL-SCREEN-READER-TEST`;
- nuova PR readability scaffold.

## Verdict

`CML_UX_ACCESSIBILITY_OVERLAY_FOCUS_MANAGEMENT_READY`