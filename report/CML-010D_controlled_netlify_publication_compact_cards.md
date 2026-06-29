# CML-010D — Controlled Netlify Publication (Compact Cards)

## Summary

Pubblicato su Netlify il pacchetto CML-010B/C: schede pending compatte con dettaglio espandibile, gap-header unico, card ok/decise collassabili.

## Pre-deploy

| Item           | Valore                                                             |
| -------------- | ------------------------------------------------------------------ |
| Branch         | `cml-008r-fix-markdown-decision-summary`                           |
| HEAD           | `68ce101`                                                          |
| Runtime commit | `a240ab7`                                                          |
| Working tree   | Pulita                                                             |
| sw.js hash     | `a3cced9bae136ffdb2609864494b338669b28a41e844916385ef544fd259bd0c` |
| _headers hash  | `50f00fb9ab63d234290ef5d245a544b278a07f25f89883ec60a42595b14d8e88` |
| PDF hash       | `dd9e19617397c21b6926d73280a7ea8dc8513efa010bfae33c45ca22a1d0564a` |

## Deploy

- Comando: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
- File: 1 (index.html)
- Durata: 4.2s
- URL: https://curmanlight.netlify.app

## Post-deploy verification

### HTTP

```
200 OK, 196511 bytes
```

### Markers (source content)

| Marker                                    | Presente     |
| ----------------------------------------- | ------------ |
| pending-card                              | ✅           |
| collapse-header                           | ✅           |
| gap-header-unique                         | ✅           |
| cruscotto-next                            | ✅           |
| usage-notice                              | ✅           |
| tecnologia-export-panel                   | ✅           |
| act-approve (OLD)                         | ❌ (rimosso) |
| Gap 2025 della disciplina (OLD)           | ❌ (rimosso) |
| padding:4px 9px;font-size:11px (CML-009D) | ✅           |

### Chrome headless DOM (live URL, 228629 bytes)

| Check             | Esito |
| ----------------- | ----- |
| cards-area        | ✅    |
| pending-card      | ✅    |
| collapse-header   | ✅    |
| gap-header-unique | ✅    |
| cruscotto         | ✅    |
| badge modifica    | ✅    |

### Screenshots

| Breakpoint | Bytes  | Esito |
| ---------- | ------ | ----- |
| 360px      | 56494  | ✅    |
| 414px      | 68698  | ✅    |
| 768px      | 148829 | ✅    |
| 1280px     | 184876 | ✅    |

## Conteggi confermati (Tecnologia, profilo Secondaria)

- 12 voci totali
- 4 ok (voci mantenute)
- 8 modifica (proposte Gap 2025)
- 0 nuovo

## Asset invariati

- sw.js: hash invariato ✅
- _headers: hash invariato ✅
- PDF: hash invariato ✅
- assets/: esterno CDN, non toccato ✅

## Rischi residui

Nessuno. Lo smoke audit CML-010C e la verifica post-deploy CML-010D confermano che il pacchetto è pronto per l'uso.

## Prossimo passo suggerito

Secondo il piano del richiedente:

- Test reale da cellulare oppure
- CML-011 per rifinire esportazione/guida senza riaprire le card
