# CML-UX-NAVIGATION-AND-ORIENTATION

## Stato della slice

- **Tipo**: runtime microfix
- **Scope**: risolvere 3 P1 dell'audit ergonomico CML_UX_ERGONOMICS_RE_AUDIT (sidebar Fonti, scroll Evidenze, breadcrumb disciplina)
- **Runtime modificato**: `_published_snapshot/netlify-current/index.html`
- **Base piano**: CML_UX_ERGONOMICS_RE_AUDIT (3 P1 raccomandati)
- **Commit di partenza**: `0f735cc` (CML_UX_ERGONOMICS_RE_AUDIT, allineato)
- **Verdetto**: `CML_UX_NAVIGATION_AND_ORIENTATION_READY`

## Obiettivo

Migliorare navigazione e orientamento nelle schede critiche, applicando il principio:

```
Una schermata, un compito, una decisione principale.
```

## Modifiche apportate

### `_published_snapshot/netlify-current/index.html`

| Intervento | Azione | Dettaglio |
|---|---|---|
| **Sidebar Fonti nascosta su desktop** | `setTab()`: `asideEl.classList.toggle("aside-hidden", t==="normativa"||t==="generali")` su desktop; `asideEl.classList.remove("aside-hidden")` su mobile quando sidebar visibile | CSS `.aside-hidden{display:none!important}` aggiunto |
| **Breadcrumb con disciplina attiva** | `setTab()`: `discLabel=selDisc&&(t==="curricolo"||t==="lavoro"||t==="riepilogo")?' — '+selDisc:''` — label `Curriculum — Consultazione — Tecnologia` ecc | Nessun nuovo CSS |
| **Evidenze raggruppate per ordine** | `renderDidattica()` riscritta: raggruppa unità per Infanzia/Primaria/Secondaria con accordion esterno; primo gruppo aperto di default | CSS `.didattica-evidence-ord-group`, `.didattica-evidence-ord-hd`, `.didattica-evidence-ord-body` |

### Cosa NON è stato modificato

- `content/curriculum/` — invariato
- `manifest.json`, `service-worker.js`, `sw.js` — invariati
- JSON, export/import `.cml` — invariati
- Funzioni esportazione — nessuna modificata
- Navigazione hash — invariata
- `tools/` — invariato

## Verifiche

- `git diff --check`: OK
- Validatore: 14/14 PASS
- Shape test: 14/14 PASS
- `git diff --stat`: (calcolato al commit)

## Gate superati

- Sidebar Fonti: nascosta su desktop in tab normativa/generali, visibile su mobile quando pertinente
- Breadcrumb: mostra disciplina attiva in Curriculum/Revisione/Definitivo
- Evidenze: 3 accordion ordine (Infanzia/Primaria/Secondaria), primo aperto, scroll drasticamente ridotto
- Filtri ordine in Evidenze: preservati e funzionanti
- Accordion unità interne: preservati

## Verdict

```
CML_UX_NAVIGATION_AND_ORIENTATION_READY
```
