# CML-064A — TECHNOLOGY_PACK_PREVIEW_LIVE_DEPLOY_SMOKE

**Data**: 2026-06-23
**Tipo**: Smoke live / documentazione
**Branch finale**: main

## Riepilogo

Smoke live del deploy GitHub Pages per la preview read-only del pacchetto Tecnologia normalizzato (CML-062) integrato nel runtime (CML-064).

## Pubblicazione

- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/
- **Commit runtime**: 2d0d851
- **Merge commit**: 8aa4b6e
- **Workflow GitHub Pages**: success

## Esiti smoke live

### Funzionalità preview Tecnologia

| Controllo                                         | Esito | Note                                                                                            |
| ------------------------------------------------- | ----- | ----------------------------------------------------------------------------------------------- |
| Pagina caricata                                   | PASS  |                                                                                                 |
| Console JS pulita                                 | PASS  | Nessun errore bloccante                                                                         |
| Pannello `#tecnologia-norm-panel` visibile        | PASS  |                                                                                                 |
| Microcopy presente                                | PASS  | Anteprima non modificabile, Richiede validazione umana, Non costituisce approvazione definitiva |
| Totale unità: 13                                  | PASS  |                                                                                                 |
| Infanzia: 2                                       | PASS  |                                                                                                 |
| Primaria: 5                                       | PASS  |                                                                                                 |
| Secondaria I grado: 6                             | PASS  |                                                                                                 |
| Filtri ordine: Tutti/Infanzia/Primaria/Secondaria | PASS  |                                                                                                 |
| Dettaglio espandibile                             | PASS  |                                                                                                 |
| Nessun campo editabile                            | PASS  |                                                                                                 |
| Nessun salvataggio locale aggiuntivo              | PASS  |                                                                                                 |

### Regressioni

| Area                 | Esito | Note                                          |
| -------------------- | ----- | --------------------------------------------- |
| Export/import/report | PASS  | Invariati                                     |
| Role-access gating   | PASS  | `CML2025` sblocca, "Blocca di nuovo" riblocca |
| Schema `.cml`        | PASS  | Nessuna modifica                              |
| Runtime CML-064A     | PASS  | Nessuna modifica                              |

## File documentali creati

- `docs/03_execution/CML-064A.md`
- `report/CML-064A_technology_pack_preview_live_deploy_smoke.md`

## Commit documentazione

```
git commit -m "docs: smoke Technology preview on GitHub Pages"
```

## Prossimo step

**CML-063 — UX_QUALITY_AUDIT_FRAME_DETAIL_BALANCE**

## Verdetto

`CML_064A_TECHNOLOGY_PACK_PREVIEW_LIVE_DEPLOY_SMOKE_READY`
