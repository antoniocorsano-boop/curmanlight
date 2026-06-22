# CML-043 — Controlled Deploy and Live Smoke Department CML Flow Fix

## Summary

Deploy del fix runtime dipartimento `.cml` (CML-042) su Netlify e verifica smoke live. Fix per `discipline` mancante e `handling` value attributes pubblicato in produzione.

## Deploy

| Dato | Valore |
|---|---|
| HEAD partenza | `5605949` |
| Runtime fix commit | `b303c33` |
| Deploy ID | `6a38e48de8a5ebb4a2066995` |
| URL live | https://curmanlight.netlify.app |
| File caricati | 1 (index.html) |
| Deploy time | 3.5s |
| Metodo | Draft deploy + API `restoreSiteDeploy` (`--prod` Forbidden) |

## Smoke live

| Controllo | Esito |
|---|---|
| App caricata | ✅ 248KB |
| `discipline` field in validator | ✅ |
| `value="confluita_nella_sintesi"` | ✅ |
| `value="riformulata_dal_dipartimento"` | ✅ |
| `value="assorbita_in_altra_proposta"` | ✅ |
| `value="da_chiarire"` | ✅ |
| Version label `IN 2012 (vigente)` | ✅ |
| Version label `IN 2025 (bozza)` | ✅ |
| Callout sezioni generali | ✅ |
| Viewer curricolo di istituto | ✅ |
| Referente validation functions | ✅ |
| Report group work functions | ✅ |
| Export docente/dipartimento | ✅ |
| Disclaimer "Non sostituisce delibera" | ✅ |
| Nessuna falsa approvazione | ✅ |
| **Totale** | **18/18 PASS** |

## Output finale

| Campo | Valore |
|---|---|
| Verdict | `CML_043_CONTROLLED_DEPLOY_AND_LIVE_SMOKE_DEPARTMENT_CML_FLOW_FIX_READY` |
| Commit hash | `5605949` (partenza), docs da committare |
| URL live | https://curmanlight.netlify.app |
| Deploy ID | `6a38e48de8a5ebb4a2066995` |
| Esito deploy | ✅ Draft + API restore |
| Controlli smoke | 18/18 PASS |
| Runtime modificato dopo CML-042 | ❌ Nessuno — solo deploy del fix già committato |
| Schema `.cml` modificato | ❌ Nessuno |
| Persistenza modificata | ❌ Nessuna |
| Backend/Login/Drive API/OAuth | ❌ Nessuno |
| MEMORY.md | ✅ non committato |
| .kilo/ | ✅ non committato |
| CLAUDE.md | ✅ non committato |
| Working tree finale | Pulita ✅ |
| Prossimo step | Aggiornamento guida utente, estensione esempi, nuovi micro-miglioramenti |
