# Report — Breadcrumb Sync Audit

## Sintesi Esecutiva

Il breadcrumb desktop (`#breadcrumb`) **non si aggiorna** quando l'utente cambia disciplina dalla sidebar o dal menu. Il problema è riprodotto al 100% ed è causato dall'assenza di aggiornamento breadcrumb in `selectDisc()` / `refreshCurrentDisciplineViews()`.

## Tabella Controlli

| Controllo | Esito |
|-----------|-------|
| Breadcrumb si aggiorna su cambio tab | ✓ |
| Breadcrumb si aggiorna su cambio disciplina | ✗ **STALE** |
| Breadcrumb si riallinea dopo cambio tab e ritorno | ✓ |
| `aria-live` annuncia cambio disciplina | ✓ (mitigazione) |
| Breadcrumb hidden corretto | ✓ |

## Discipline Testate

| Disciplina | Breadcrumb atteso | Stale? |
|------------|-------------------|--------|
| Tecnologia | Curriculum — Consultazione — Tecnologia | default |
| Italiano | Curriculum — Consultazione — Italiano | ✓ |
| Matematica | Curriculum — Consultazione — Matematica | ✓ |
| Storia | Curriculum — Consultazione — Storia | ✓ |
| Religione Cattolica | Curriculum — Consultazione — Religione Cattolica | ✓ |

## Scenari Testati

| Scenario | Breadcrumb stale? | Severità |
|----------|-------------------|----------|
| Cambio disciplina tab "curricolo" | ✓ | P2 |
| Cambio disciplina tab "lavoro" | ✓ | P2 |
| Cambio disciplina tab "riepilogo" | ✓ | P2 |
| Navigazione tab → disciplina → cambio tab → ritorno | Riallineato | — |
| Hash URL `#cur-italiano` | Corretto | — |
| Caricamento pagina con hash | Corretto | — |

## Classificazione

| Priorità | Valore |
|----------|--------|
| P0 (impedisce uso) | No |
| P1 (comunica stato errato persistente) | No |
| **P2 (stale temporaneo aggirabile)** | **✓** |
| P3 (polish) | No |

## Risultato Desktop

Breadcrumb stale confermato su tutte le discipline. Workaround: cambio tab e ritorno.

## Risultato Mobile

Non testato direttamente ma il breadcrumb è presente anche su mobile (stesso elemento DOM). Probabilmente stesso comportamento.

## Errori JS

Nessun errore JavaScript rilevato nell'analisi codice. Il breadcrumb semplicemente non viene chiamato.

## Scope Enforcement

| Aspetto | Esito |
|---------|-------|
| Runtime modificato | No |
| File fuori perimetro | Nessuno |
| Push eseguito | No |

## Raccomandazioni

1. **Non blocca** — procedere con screen reader test reale prima del fix breadcrumb
2. **Microfix futuro**: aggiungere aggiornamento breadcrumb in `refreshCurrentDisciplineViews()`
3. **Priorità**: dopo screen reader test, prima del score refresh finale

## Verdict

`CML_UX_ACCESSIBILITY_BREADCRUMB_SYNC_AUDIT_ISSUE_CONFIRMED_READY`
