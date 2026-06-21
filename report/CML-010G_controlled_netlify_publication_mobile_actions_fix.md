# CML-010G — Report

**Task**: Controlled Netlify Publication Mobile Actions Fix  
**Data**: 21/06/2026  
**Pre-deploy HEAD**: `4c8978b` (CML-010F2)

## Comando deploy

```
npx netlify deploy --prod --dir _published_snapshot/netlify-current
```

## Deploy

- 1 file uploadato: `index.html`
- Solo CSS pending-action modificato (42/40px → 44px)
- Durata: 4s
- URL pubblicato: https://curmanlight.netlify.app

## Conteggi

| Scope | Voci | modifica | ok | nuovo |
|---|---|---|---|---|
| Tecnologia (precedente) | 12 | 8 | 4 | 0 |
| Tutte le discipline | 104 | 54 | 41 | 9 |

I due insiemi sono coerenti: Tecnologia rappresenta 12/104 voci totali.

## Verifiche

- [x] Touch target mobile a 44px su tutti i breakpoint
- [x] Card compatte preservate
- [x] Pulsanti ✅❌🔍🗑 preservati
- [x] Dettaglio espandibile funzionante
- [x] Approvazione/rifiuto invariati
- [x] Asset invariati (sw.js, _headers, PDF)
- [x] Markdown generation / export panel invariati
- [x] Nessuna regressione bloccante

## Verdetto

`CML_010G_CONTROLLED_NETLIFY_PUBLICATION_MOBILE_ACTIONS_FIX_CLOSED`
