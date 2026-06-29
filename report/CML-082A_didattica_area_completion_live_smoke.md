# CML-082A — Didattica Area Completion Live Smoke

**Commit:** `8d7d384`
**Branch:** `main`

## Smoke Points

| #   | Check                                                                   | Result |
| --- | ----------------------------------------------------------------------- | ------ |
| 1   | Didattica guidance path box (`Come usare questa sezione`)               | PASS   |
| 2   | No "Area in costruzione" in Didattica                                   | PASS   |
| 3   | Didattica stats badge `📋 Evidenze e criteri` (renderDidattica)         | PASS   |
| 4   | UDA modello `guida operativa`                                           | PASS   |
| 5   | Home card updated text `Evidenze, criteri di valutazione e UDA modello` | PASS   |
| 6   | Home card badge `Area operativa`                                        | PASS   |
| 7   | Curriculum tab intact (`curricolo-path` CSS + JS)                       | PASS   |
| 8   | Role-access / export / .cml functions intact (`requireRoleAccess` x5)   | PASS   |

**8/8 PASS** — No regression.

## Additional manual checks

- Dark mode: `.didattica-path` overrides present in `@media (prefers-color-scheme: dark)` block (lines 1050-1052), using `--cml-card-hover`, `--cml-border`, `--cml-text` variables.
- Mobile: existing responsive CSS covers `tab-didattica` through generic layout rules; `.didattica-path` inherits from `.didattica-evidence` container breakpoints.
- External resources: no new CDN/fonts added.
- Storage: no new `localStorage`/`sessionStorage` usage.

## Verdict

**CML-082A_DIDATTICA_AREA_COMPLETION_LIVE_SMOKE_PASS**
