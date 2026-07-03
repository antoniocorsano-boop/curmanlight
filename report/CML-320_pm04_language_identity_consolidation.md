# CML-320 — PM-04 UX Language and Identity Consolidation — Report

## Metadati slice

| Campo | Valore |
|---|---|
| Nome slice | CML-320 |
| Tipo | docs-only (audit + consolidation plan) |
| Macroprogramma | PM-04 — Comprensione del Curriculum |
| Dipende da | CML-319 |
| Commit iniziale | `39169af` |
| Commit finale | `39169af` (nessuna modifica runtime) |
| Branch | `main` |
| Push | non eseguito |
| Deploy | non eseguito |

## Sintesi audit

Audit eseguito su tre assi: lingua, identità, mojibake. Il runtime `index.html` (e snapshot Netlify) è stato analizzato tramite search mirate su pattern di naming, emoji corrotte, caratteri accentati e riferimenti istituzionali.

## Risultati principali

### Asse Lingua — VERDETTO: accettabile, P2 residuale

- La convivenza "Curricolo Verticale" (nome documento) / "Curriculum" (tab utente) è funzionale e non ambigua
- Naming istituzionale corretto in tutti i punti critici (header, title, school profile)
- Inconsistenze terminologiche residue (`curricolo` vs `curriculum` in JS, `DM` vs `D.M.`) classificate P2

### Asse Identità — VERDETTO: accettabile, mojibake su icone

- Riferimenti istituzionali (scuola, codice meccanografico, comune) corretti
- Nome tecnico `CurManLight` non esposto all'utente — corretto
- 4 icone disciplinari su 14 presentano mojibake da variation selector (Tecnologia, Storia, Geografia, Educazione Civica)

### Asse Mojibake — VERDETTO: intervento necessario (P0)

**Emoji con variation selector danneggiato**: ~60 occorrenze totali di `ï¸` al posto del corretto U+FE0F. Pattern meccanico, riparabile con sostituzione testuale.

**Mojibake grave Educazione Motoria**: ~20 occorrenze di `ï¿½` (replacement character U+FFFD male interpretato) nei dati `EDUCAZIONE_MOTORIA_MAPPA_DATI`. I caratteri originali `à` ed `è` sono persi nel JSON inline. Richiede correzione manuale sui dati sorgente o rigenerazione del JSON dal curriculum normalizzato.

## Piano remediation

| Priorità | Intervento | Tipo slice successiva |
|---|---|---|
| P0 | Riparare ~60 occorrenze emoji con variation selector rotto | Runtime microfix (CML-321) |
| P0 | Riparare ~20 occorrenze mojibake Educazione Motoria | Runtime microfix (CML-321) |
| P1 | Uniformare etichette versione IN 2012 / IN 2025 | CML-321 |
| P1 | Verificare icone DISCIPLINE_META e home card | CML-321 |
| P2 | Rinominare variabili JS curricolo→curriculum | CML-322+ |
| P2 | Revisione linguistica estesa | CML-322+ |
| P2 | Logo e identità visuale | CML-322+ |

## File creati/modificati

- `docs/03_execution/CML-320.md` — execution doc
- `report/CML-320_pm04_language_identity_consolidation.md` — questo file
- `docs/02_system/PROJECT-STATE.md` — aggiornamento
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md` — aggiornamento
- `docs/REPO-MOVELOG.md` — aggiornamento

## Controlli

- `git diff --check`: PASS (nessuna modifica runtime)
- Nessuna modifica a `index.html`, `_published_snapshot/`, `content/curriculum/`, `tools/`

## Esito PM-04

- **Prima CML-320**: 55%, non chiusa
- **Dopo CML-320**: 55%, non chiusa (nessuna modifica runtime)
- **Prossima slice**: CML-321 — PM-04 Mojibake and Emoji Runtime Fix

## Verdetto

`CML_320_PM04_LANGUAGE_IDENTITY_CONSOLIDATION_AUDIT_PLAN_READY_LOCAL_NOT_PUSHED`