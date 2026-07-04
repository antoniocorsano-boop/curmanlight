# Report: CML-352 — Residual Button Border-Radius Uniformity Microfix

## Branch e baseline
- Branch: `codex/cml-352-residual-button-border-radius-uniformity-microfix`
- Commit iniziale: `0473ad9` (CML-351 docs-only)
- Dipendenza: CML-350 (cross-tab button uniformity), CML-351 (audit)
- Tipo slice: runtime microfix (solo CSS)
- Macroprogramma: PM-07 Uniformità

## Obiettivo
Uniformare le micro-incoerenze residue dei pulsanti e degli elementi interattivi con `border-radius: 7px` o `6px`, portandoli a `8px`, in continuità con CML-350.

## Metodo
- Ricerca pattern `border-radius:7px` e `border-radius:6px` nei due file runtime
- Sostituzione globale con `border-radius:8px`
- Replica identica su root e snapshot
- Verifica assenza modifiche non-border-radius

## Occorrenze corrette

### Cluster A — border-radius:7px → 8px (39 occorrenze)

**Selettori CSS (25):**
| Selettore | Contesto |
|-----------|----------|
| `.department-import-btn` | Pulsante import dipartimento |
| `.department-import-stat` | Stat box import |
| `.local-save-btn` | Pulsante salvataggio locale |
| `.readonly-order-note` | Nota ordine readonly |
| `.gap-header` | Header gap curricolo |
| `.gap-header-unique` | Header gap unico |
| `.role-access-warning` | Warning role-access |
| `.role-access-error` | Errore role-access |
| `.grp-hd` | Header gruppo riepilogo |
| `.act-card` | Card azione riepilogo |
| `.norm-cat-title` | Titolo categoria normativa |
| `.annual-draft-field select/input/textarea` | Campi bozza annuale |
| `.annual-draft-units` | Container unità bozza |
| `.annual-draft-btn` | Pulsanti bozza annuale |
| `.annual-draft-status` | Status bozza annuale |
| `.annual-draft-privacy` | Privacy bozza annuale |
| `.uda-smart-library-filters` | Filtri libreria UDA |
| `.uda-smart-library-field input/select/textarea` | Campi libreria UDA |
| `.uda-smart-library-btn` | Pulsanti libreria UDA |
| `.uda-smart-library-status` | Status libreria UDA |
| `.uda-smart-library-preview` | Preview libreria UDA |
| `.uda-smart-library-markdown` | Markdown libreria UDA |
| `.uda-smart-library-card` | Card libreria UDA |
| `.uda-smart-library-empty` | Empty state libreria UDA |
| `.uda-smart-library-privacy` | Privacy libreria UDA |

**Inline style (14):**
| Selettore | Contesto |
|-----------|----------|
| `.mappa-disc-btn` ×14 | Pulsanti selettore mappa disciplina (italiano, matematica, scienze, tecnologia, storia, geografia, inglese, educazione civica, arte e immagine, musica, educazione fisica, seconda lingua comunitaria, religione cattolica, latino LEL) |

### Cluster B — border-radius:6px → 8px (13 occorrenze)

**Selettori CSS (11):**
| Selettore | Contesto |
|-----------|----------|
| `.stat` | Statistiche header disciplina |
| `.department-import-warning` | Warning import dipartimento |
| `.department-file-row` | Riga file dipartimento |
| `.ordine-hd` | Header ordine curricolo |
| `.norm-link` | Link normativa |
| `.orientation-note` | Nota orientamento |
| `.curricolo-riepilogo-item` | Item riepilogo curricolo |
| `.home-recommended-callout-btn` | Pulsante callout Home |
| `.didattica-uda-draft-notice` | Notice bozza UDA |
| `.didattica-uda-draft-status` | Status bozza UDA |
| `.annual-draft-unit` | Unità bozza annuale |

**Inline style JS (2):**
| Selettore | Contesto |
|-----------|----------|
| `.department-import-banner` | Banner riepilogo import dipartimento |
| `.referent-import-banner` | Banner riepilogo import referente |

## Riepilogo numerico
- Totale occorrenze corrette: **52** (39 da 7px + 13 da 6px)
- File modificati: 2 (`index.html`, `_published_snapshot/netlify-current/index.html`)
- Modifiche per file: 52 righe
- Totale insertions/deletions: 104/104

## Esclusioni intenzionali
- **Pill shape** (border-radius: 16px–999px): design intenzionale — HOLD
- **Container/box** (border-radius: 9px): standard coerente — HOLD
- **Dialog/modali** (border-radius: 14–16px): design intenzionale — HOLD
- **Card Home** (border-radius: 11px): P3 — fuori scope
- **Pannelli speciali** (border-radius: 12px): P3 — fuori scope
- **Cluster C** (border-radius: 5px): non incluso nello scope CML-352

## File modificati
- `index.html` — solo CSS/inline style border-radius
- `_published_snapshot/netlify-current/index.html` — replica identica

## Fuori perimetro
- Nessuna modifica JavaScript logica
- Nessuna modifica dati curricolari
- Nessuna modifica schema `.cml`
- Nessuna modifica export/import
- Nessuna modifica workflow, configurazioni, dipendenze
- Nessun file fuori perimetro
- `CurManLightBrain/` escluso (untracked, fuori scope)

## Controlli
- `git diff --check`: PASS
- Diff limitato a sole modifiche `border-radius`: PASS
- Parità modifiche index.html ↔ snapshot: PASS (56/56 occorrenze `border-radius:8px` nel diff)
- Assenza modifiche JavaScript sostanziali: PASS
- Assenza file fuori perimetro: PASS
- `git status --short`: vedi stato finale

## Push, PR, Deploy
- Push: **NO**
- PR: **NO**
- Deploy: **NO**

## Verdict
`CML_352_RESIDUAL_BUTTON_BORDER_RADIUS_UNIFORMITY_MICROFIX_READY_LOCAL_NOT_PUSHED`