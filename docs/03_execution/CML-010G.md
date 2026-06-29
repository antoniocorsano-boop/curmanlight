# CML-010G — Controlled Netlify Publication Mobile Actions Fix

## Stato

Pubblicazione controllata su Netlify della micro-fix mobile CML-010F2.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- Pre-deploy HEAD: `4c8978b` (CML-010F2)
- Working tree: pulita
- Deploy path: `_published_snapshot/netlify-current`
- Comando: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`

## Chiarimento conteggi

| Riferimento | Conteggio                   | Scope                                                      |
| ----------- | --------------------------- | ---------------------------------------------------------- |
| CML-010C/D  | 12 voci, 8 modifica, 4 ok   | Solo disciplina **Tecnologia** (6 traguardi + 6 obiettivi) |
| CML-010F2   | 54 modifica, 41 ok, 9 nuovo | **Tutte le discipline** del dataset completo               |

Non è una regressione. Il dataset completo contiene 104 voci distribuite su 17 discipline. Tecnologia ne rappresenta 12 (11.5%). I due conteggi sono coerenti: 12 Tecnologia + 92 altre discipline = 104 totali.

## Deploy

- 1 file uploadato (index.html) — solo CSS modificato
- Tempo: 4s
- URL: https://curmanlight.netlify.app

## Verifiche post-deploy

- [x] Pagina caricata correttamente
- [x] Tutte le sezioni presenti (cruscotto, card, esportazione, fonti)
- [x] Stato "revisione avviata" / "12 voci da validare" corretto
- [x] Card compatte preservate
- [x] Pulsanti ✅❌🔍🗑 preservati
- [x] Dettaglio espandibile preservato
- [x] Approvazione/rifiuto invariati
- [x] Esportazione e Markdown generation preservati
- [x] Nessun deploy di asset non necessari
- [x] Nessuna modifica a sw.js, _headers, PDF
- [x] Nessuna regressione bloccante

## Verdetto

```
CML_010G_CONTROLLED_NETLIFY_PUBLICATION_MOBILE_ACTIONS_FIX_CLOSED
```

## Rischi residui

Nessuno rilevato. Ciclo CML-009/010 chiuso.
