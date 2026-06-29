# CML-UX-ACCESSIBILITY-SCORE-REFRESH - Report

## Riepilogo

Refresh documentale del punteggio accessibilita' CurManLight dopo le correzioni runtime gia' presenti in repository. La nuova baseline passa da **48/100** a **60/100**, con delta **+12**.

| Aspetto | Valore |
|---------|--------|
| Branch | `main` |
| Commit base locale | `c175b2c` |
| Runtime modificato | no |
| Punteggio precedente accessibilita' | 48/100 |
| Punteggio aggiornato | 60/100 |
| Delta | +12 |
| P0 residui | 0 |
| P1 residui | 2 |
| Prossima slice | `CML-UX-ACCESSIBILITY-ARIA-ENHANCEMENTS` |
| Push eseguito | no |
| Verdict | `CML_UX_ACCESSIBILITY_SCORE_REFRESH_READY` |

## Motivazione

La baseline audit iniziale fissava l'accessibilita' a 48/100. Le slice successive hanno introdotto e verificato miglioramenti mirati su accesso rapido al contenuto, focus management e stati ARIA degli accordion Evidenze.

La motivazione del delta cita solo interventi realmente consolidati: `aria-expanded`, `aria-controls`, `role="button"`, `tabindex="0"`, gestione tastiera `Enter` / `Space` e hotfix sintattico che ha preservato la patch ARIA.

Questo report non dichiara una nuova modifica runtime: registra la baseline aggiornata da cui proseguire con gli enhancement ARIA residui.

## Delta per area

| Area | Prima | Dopo | Delta |
|------|-------|------|-------|
| Skip link e accesso rapido al contenuto | 0 | 5 | +5 |
| Focus visibile e ordine di tabulazione | 6 | 7 | +1 |
| ARIA e stati dinamici | 7 | 13 | +6 |
| **Totale delta** |  |  | **+12** |

## Stato residuo

| Priorita' | Residui |
|-----------|---------|
| P0 | 0 |
| P1 | 2 |

P1 residui:

| P1 residuo | Stato |
|------------|-------|
| Emoji decorative senza `aria-hidden` | non ancora risolte sistematicamente |
| Annunci `aria-live` mancanti su cambio disciplina/tab | ancora da progettare e implementare |

Non e' stato registrato come gia' fatto nessun intervento sistematico su `aria-hidden="true"` per le emoji decorative. Non e' stato registrato come gia' attivo nessun annuncio `aria-live` sul `<main>` o sui cambi dinamici.

## Prossima slice

```
CML-UX-ACCESSIBILITY-ARIA-ENHANCEMENTS
```

Scope consigliato:

- emoji decorative;
- annunci `aria-live`;
- eventuali etichette ARIA mancanti.

La prossima slice deve evitare interventi ulteriori sugli accordion gia' corretti, salvo verifica non invasiva.

## File modificati

- `docs/03_execution/CML-UX-ACCESSIBILITY-SCORE-REFRESH.md`
- `report/CML-UX-ACCESSIBILITY-SCORE-REFRESH.md`
- `docs/REPO-MOVELOG.md`

## Esclusioni

Restano fuori commit:

- `.env`
- `antigravity.config.json`
- `test-results/`
- `tools/smoke-hash-nav.mjs`

## Conclusione

La baseline accessibilita' documentale aggiornata e' **60/100**. Il repository puo' procedere al push controllato della baseline dopo il commit docs-only di correzione.
