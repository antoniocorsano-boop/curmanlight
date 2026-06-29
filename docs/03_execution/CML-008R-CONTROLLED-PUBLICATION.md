# CML-008R — Controlled Publication on Netlify

## Stato pre-deploy

- **Branch:** `cml-008r-fix-markdown-decision-summary`
- **HEAD:** `8c92fea` (audit chiusura)
- **Working tree:** CLEAN
- **Fix già validata da audit:** `CML_008R_FIX_CLOSURE_AUDIT_READY_FOR_CONTROLLED_PUBLICATION`

## Deploy

```bash
npx netlify deploy --prod --dir _published_snapshot/netlify-current
```

- Sito collegato: `curmanlight` (`https://curmanlight.netlify.app`)
- Deploy completato in 4s
- 1 file caricato (`index.html`)

## Post-deploy

Verifica su produzione conferma:

- "Voci da validare" presente ✅
- "Dettaglio delle proposte di modifica / Gap 2025" presente ✅
- "Voci mantenute da validare" presente ✅
- "Da decidere" assente ✅
- Disclaimer pulito (no D.M. 221/2025) ✅
- PDF cache-safe preservato ✅

## File coinvolti

| File                                                   | Azione                                    |
| ------------------------------------------------------ | ----------------------------------------- |
| `_published_snapshot/netlify-current/index.html`       | Deployato (invariato da commit `9179418`) |
| `report/CML-008R_controlled_netlify_publication.md`    | Creato                                    |
| `docs/03_execution/CML-008R-CONTROLLED-PUBLICATION.md` | Creato                                    |

## Verdetto

```
CML_008R_CONTROLLED_NETLIFY_PUBLICATION_CLOSED
```
