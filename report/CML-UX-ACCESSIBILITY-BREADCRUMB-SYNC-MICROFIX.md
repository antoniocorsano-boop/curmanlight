# Report — Breadcrumb Sync Microfix

## Riepilogo

Aggiunto aggiornamento breadcrumb in `refreshCurrentDisciplineViews()` dopo cambio disciplina.

## Dettaglio

| Aspetto | Pre | Post |
|---------|-----|------|
| Cambio disciplina, breadcrumb aggiornato? | ✗ stale | ✓ |
| Discipline su tab "curricolo" | stale | ✓ |
| Discipline su tab "lavoro" | stale | ✓ |
| Discipline su tab "riepilogo" | stale | ✓ |

## Modifica

- **File**: `_published_snapshot/netlify-current/index.html`
- **Righe**: +4
- **Tipo**: breadcrumb sync in `refreshCurrentDisciplineViews()`
- **Commit runtime**: `5851951`

## Verdict

`CML_UX_ACCESSIBILITY_BREADCRUMB_SYNC_MICROFIX_READY`
