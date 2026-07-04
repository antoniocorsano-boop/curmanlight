# CML-367 — Teacher Review Always-Visible Comparison and SVG Functional Icons

## Report

### Obiettivo
Migliorare la Fase 1 (revisione docente) rendendo il confronto 2012/2025 sempre visibile nelle proposte pending e sostituendo le icone emoji dei pulsanti funzionali con icone SVG reali.

### Cambiamenti

#### Confronto sempre visibile
- `.pending-detail{display:none}` → `.pending-detail{display:block}`
- Rimossa regola `.pending-detail.open{display:block}` (non più necessaria)
- Rimosso toggle JavaScript: intera funzione `togglePendingDetail(id)` eliminata
- Rimossi: `detailStartsOpen`, `detailLabel`, pulsante dettaglio con `pdb-${item.id}`, `id="pd-${item.id}"`

#### Icone SVG aggiunte allo sprite
| Symbol | viewBox | Paths |
|--------|---------|-------|
| `icon-undo` | 0 0 24 24 | 2 paths (freccia undo) |
| `icon-save` | 0 0 24 24 | 1 path + 2 polylines (floppy disk) |

#### Emoji funzionali sostituiti
| Pulsante | Emoji | SVG | Classe CSS |
|----------|-------|-----|------------|
| Modifica | `✏` | `icon-edit` | `.act.act-edit` |
| Rimuovi | `🗑` | `icon-trash` | `.act.act-delete` |
| Cambia idea | `↩` | `icon-undo` | `.act.act-undo` |
| Salva e Approva | `✅` | `icon-check` | `.act.act-save` |

#### Coerenza runtime
- `index.html` e `_published_snapshot/netlify-current/index.html` hanno modifiche equivalenti

### Elementi NON modificati
- Badge decorativi: `★ Nuova`, `📍`, `🆕`, `📄`
- Etichette di stato: `✅ Approvata`, `❌ Rifiutata`, `✏ Adattata`
- Etichette pannello: `✏ DM 221/2025...`
- Toast, notifiche, testi descrittivi
- Icona `🔍` nei testi descrittivi (gap note, empty state)

### Bug preesistenti (verifica)
- `icon-upload` e `icon-landmark`: DEFINITI con `<symbol>` completo nello sprite (linee 1422-1436). Nessun bug rilevato — segnalazione originaria non confermata.

### Verifiche
- Curricolo validator: 14/14 PASS
- Runtime shape test: 14/14 PASS
- Sintassi JS: 2 script PASS (entrambi i file)
- `git diff --check`: clean
- Working tree: pulito (solo untracked `CurManLightBrain/`)
