# CML-038A — Controlled Deploy and Live Smoke Version Labels

## Stato

Deploy controllato su Netlify delle etichette aggiornate del selettore versione (CML-038) e verifica smoke su versione live.

## Preflight

| Controllo | Esito |
|---|---|
| HEAD | `b70ffc2` — feat: clarify curriculum viewer version labels ✅ |
| Branch | `cml-008r-fix-markdown-decision-summary` ✅ |
| Working tree | Pulita (untracked: `.kilo/`, `CLAUDE.md`, `MEMORY.md`) ✅ |
| git diff --check | Nessun errore ✅ |
| Runtime già committato | ✅ (CML-038 su `b70ffc2`) |

## Deploy

| Dato | Valore |
|---|---|
| `--prod` tentato | ❌ Forbidden (come da nota operativa) |
| Workaround | Draft deploy + API `restoreSiteDeploy` |
| Deploy ID | `6a38d9593270fa47779c678c` |
| URL live | https://curmanlight.netlify.app |
| Tempo deploy | 3.4s |
| File caricati | 1 (index.html) |

## Smoke live (9/9 PASS)

| # | Controllo | Esito |
|---|---|---|
| 1 | App caricata correttamente | ✅ |
| 2 | Selettore versioni visibile | ✅ |
| 3 | Etichetta `IN 2012 (vigente)` | ✅ |
| 4 | Etichetta `IN 2025 (bozza)` | ✅ |
| 5 | Stato documento 2012 | ✅ |
| 6 | Stato documento 2025 | ✅ |
| 7 | Callout sezioni generali | ✅ |
| 8 | Tab "Sezioni generali" (Premessa) | ✅ |
| 9 | Nessuna falsa approvazione | ✅ |

## Verdetto

```
CML_038A_CONTROLLED_DEPLOY_AND_LIVE_SMOKE_VERSION_LABELS_READY
```
