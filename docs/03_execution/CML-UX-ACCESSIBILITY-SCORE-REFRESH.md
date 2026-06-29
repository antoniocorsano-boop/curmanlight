# CML-UX-ACCESSIBILITY-SCORE-REFRESH

## Stato della slice

- **Tipo**: docs-only / score refresh
- **Commit base locale**: `c175b2c`
- **Runtime modificato**: no
- **Push eseguito**: no
- **Verdict di uscita**: `CML_UX_ACCESSIBILITY_SCORE_REFRESH_READY`

## Scopo

Registrare la nuova baseline documentale del punteggio accessibilita' dopo le slice runtime su skip link/focus e accordion ARIA Evidenze.

La slice non introduce modifiche runtime. Formalizza soltanto il passaggio dalla baseline audit iniziale alla baseline aggiornata da usare per le prossime slice.

## Punteggio aggiornato

| Aspetto                             | Valore                                   |
| ----------------------------------- | ---------------------------------------- |
| Punteggio precedente accessibilita' | 48/100                                   |
| Punteggio aggiornato                | 60/100                                   |
| Delta                               | +12                                      |
| P0 residui                          | 0                                        |
| P1 residui                          | 2                                        |
| Prossima slice                      | `CML-UX-ACCESSIBILITY-ARIA-ENHANCEMENTS` |

## Delta per area consolidata

| Area                                    | Prima | Dopo | Delta   |
| --------------------------------------- | ----- | ---- | ------- |
| Skip link e accesso rapido al contenuto | 0     | 5    | +5      |
| Focus visibile e ordine di tabulazione  | 6     | 7    | +1      |
| ARIA e stati dinamici                   | 7     | 13   | +6      |
| **Totale delta**                        |       |      | **+12** |

## Razionale del delta

Il delta +12 consolida solo gli interventi gia' eseguiti e verificati:

- skip link al contenuto principale;
- gestione focus dopo cambio tab/disciplina;
- accordion Evidenze con `aria-expanded` e `aria-controls`;
- pattern interattivo degli accordion preservato con `role="button"`, `tabindex="0"` e gestione tastiera `Enter` / `Space`;
- hotfix sintattico che ha preservato la patch ARIA e ripristinato il runtime.

Non vengono considerati come gia' risolti:

- `aria-hidden="true"` sulle emoji decorative, ancora da applicare sistematicamente;
- annunci `aria-live` su cambio disciplina/tab, ancora da progettare e implementare.

La baseline aggiornata mantiene P0 residui pari a 0. Restano 2 P1 da trattare nella prossima slice dedicata agli enhancement ARIA.

## P1 residui

| P1 residuo                                            | Stato                         |
| ----------------------------------------------------- | ----------------------------- |
| Emoji decorative senza `aria-hidden`                  | da risolvere sistematicamente |
| Annunci `aria-live` mancanti su cambio disciplina/tab | da progettare e implementare  |

## Prossima slice consigliata

`CML-UX-ACCESSIBILITY-ARIA-ENHANCEMENTS`

Scope consigliato e limitato:

- emoji decorative;
- annunci `aria-live`;
- eventuali etichette ARIA mancanti.

La prossima slice non deve intervenire di nuovo sugli accordion gia' corretti, salvo verifica non invasiva.

## Scope rispettato

Non sono stati modificati:

- `_published_snapshot/netlify-current/index.html`;
- `index.html`;
- `content/`;
- `tools/`;
- service worker, manifest, asset o deploy config.

## File della slice

- `docs/03_execution/CML-UX-ACCESSIBILITY-SCORE-REFRESH.md`
- `report/CML-UX-ACCESSIBILITY-SCORE-REFRESH.md`
- `docs/REPO-MOVELOG.md`

## Verdict

`CML_UX_ACCESSIBILITY_SCORE_REFRESH_READY`
