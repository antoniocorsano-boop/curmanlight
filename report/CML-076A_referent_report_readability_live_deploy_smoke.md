# CML-076A: Referent Report Readability — Live Deploy Smoke Report

## Technical Report

### Deploy Details

| Field | Value |
|-------|-------|
| Commit | `2411e3a3d9f27424c7508bb417dc20386c7ddf60` |
| Branch | `main` |
| Remote | `origin/main` |
| Push | `ed8caa4..2411e3a main -> main` |
| URL | `https://antoniocorsano-boop.github.io/curmanlight/` |
| Deploy type | GitHub Pages automatic |

### Changes Deployed

- `buildReferentGroupWorkReportMarkdown()` riscritta (linee 3980-4161 in `index.html`)
- 8 sezioni numerate vs 7 sezioni piatte precedenti
- Sintesi decisionale con tabelle, percentuale di completamento
- Separazione esplicita decisioni chiuse/aperte
- Tabella per disciplina compatta
- Indicazione passaggi successivi (dipartimento vs collegio)
- Domande guida contestuali allo stato delle decisioni

### Not Changed (verified live)

- Schema `.cml` — untouched
- Export/import — untouched
- Role-access gating — untouched
- Navigation — 5 tabs + sub-nav invariant
- PWA/service worker — untouched
- Storage — untouched

### Anomalies

None. All checks PASS.

### Verdict

```
CML_076A_REFERENT_REPORT_READABILITY_LIVE_DEPLOY_SMOKE_READY
```
