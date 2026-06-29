# CML-010D — Controlled Netlify Publication (Compact Cards)

## Stato

Pubblicazione controllata completata. Nessuna modifica runtime.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `68ce101` (docs: CML-010C)
- Commits runtime: `a240ab7` (CML-010B)
- Working tree: pulita
- Asset invariati: sw.js, _headers, PDF (hash verificati)

## Deploy

- Comando: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
- 1 file deployato (index.html, 197737 bytes)
- Durata: 4.2s
- URL: https://curmanlight.netlify.app
- Unique deploy: `6a3794d9114aa9c340a2bb15`

## Verifica pre-deploy

Eseguita durante CML-010C (smoke audit). Nessuna modifica runtime interposta.

## Verifica post-deploy

| Check                        | Esito             |
| ---------------------------- | ----------------- |
| HTTP 200                     | ✅                |
| pending-card presente        | ✅                |
| collapse-header presente     | ✅                |
| gap-header-unique presente   | ✅                |
| badge modifica presente      | ✅                |
| cruscotto conservato         | ✅                |
| usage-notice conservato      | ✅                |
| tecnologia-export conservato | ✅                |
| .act-approve (old) assente   | ✅                |
| Vecchio gap-header assente   | ✅                |
| CML-009D preservato          | ✅                |
| Nessun JS error              | ✅                |
| 360px screenshot             | ✅ (56494 bytes)  |
| 414px screenshot             | ✅ (68698 bytes)  |
| 768px screenshot             | ✅ (148829 bytes) |
| 1280px screenshot            | ✅ (184876 bytes) |

## Cose NON fatte

- Nessuna modifica funzionale
- Nessun merge
- Nessuna modifica a PDF, sw.js, _headers, assets
- Nessuna rigenerazione automatica

## Verdetto

```
CML_010D_CONTROLLED_NETLIFY_PUBLICATION_COMPACT_CARDS_CLOSED
```
