# CML-230 — Targeted Accessibility/Responsive Microfix

## Summary

6 microfix applicati a `index.html` basati sulle raccomandazioni CML-229:

- 1 CSS tabbar touch target (P1)
- 3 ARIA attributi (P2: aria-current x2, aria-pressed)
- 1 HTML label textarea (P2)
- 1 CSS focus outline (P2)

## Modified file

**`_published_snapshot/netlify-current/index.html`** — 5 aggiunte, 1 modifica CSS

## Detailed runtime changes

### 1. CSS tabbar touch target — `@media(max-width:400px)`

| Before                        | After             |
| ----------------------------- | ----------------- |
| `padding:6px 3px;min-width:0` | `padding:8px 6px` |

Touch target passa da ~4.5×9mm a ~6×12mm.

### 2. CSS focus outline — `.motto-link:focus`

Outline bianco 2px visibile su sfondo header scuro. `outline-offset:2px` mantiene distanza dal testo.

### 3. HTML aria-label — textarea #disc-md-preview

Label "Anteprima Markdown" per screen reader.

### 4. JS aria-pressed — mappa disciplina buttons

Stato pressed sul bottone disciplina attivo.

### 5. JS aria-current — subnav curriculum/didattica

Indica pagina corrente nei sottomenu.

### 6. JS aria-current — tabbar

Indica sezione corrente.

## Issues addressed from CML-229

| ID    | Issue                                   | Priority | Fix                  |
| ----- | --------------------------------------- | -------- | -------------------- |
| P1-01 | Tabbar touch target <24mm a 400px       | P1       | CSS padding increase |
| P2-01 | aria-current tabbar mancante            | P2       | JS setAttribute      |
| P2-02 | aria-pressed mappa-disc-btn mancante    | P2       | JS setAttribute      |
| P2-03 | aria-current subnav mancante            | P2       | JS setAttribute      |
| P2-04 | Label textarea disc-md-preview mancante | P2       | HTML aria-label      |
| P2-07 | Focus outline motto-link disabilitato   | P2       | CSS outline restore  |

## Issues intentionally deferred

| ID    | Issue                             | Priority | Reason                                                                 |
| ----- | --------------------------------- | -------- | ---------------------------------------------------------------------- |
| P2-06 | Viewport 360px layout compression | P2       | `word-break:break-all` peggiora UX; 360px non supportato ufficialmente |
| P3-01 | Badge colore blu su sfondo blu    | P3       | Basso impatto                                                          |
| P3-02 | Grassetto screenshots             | P3       | Basso impatto                                                          |

## Smoke test results

- **Validator**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Hash smoke**: 14/14 PASS (navigation preserved)
- **Viewport smoke**: 360/390/768/1024/desktop — OK, no regressioni
- **Workflow smoke**: Tecnologia, Italiano, Matematica, Educazione Fisica, Seconda Lingua — OK
- **Evidence panel**: OK
- **UDA draft preview**: OK
- **Markdown copy/download**: OK
- **.cml export/import**: unchanged, OK
- **Curriculum JSON**: unchanged (0 files)
- **Secret scan**: clean (false positives in URL validation code)
- **Git diff --check**: clean (warning LF/CRLF pre-existing)

## Verdict

**CML_230_TARGETED_ACCESSIBILITY_RESPONSIVE_MICROFIX_COMPLETE**
