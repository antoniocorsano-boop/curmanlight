# CML-UX-CERTIFICATION-READINESS-CURRICULUM-UI — Report

## Riepilogo esecutivo

Revisione runtime mirata sulla UX di Curriculum e Competenze e progettazione per avvicinare il prodotto a uno stato "audit-ready". L'intervento ha collassato la ridondanza del quadro generale, messo la disciplina selezionata in primo piano, eliminato hardcode di Tecnologia nei fallback, e sincronizzato la mappa disciplinare con la selezione corrente.

## Prima / dopo

| Aspetto | Prima | Dopo |
|---------|-------|------|
| Vista Curriculum con disciplina | Quadro 14 discipline + tripla ridondanza + scroll infinito | Focus sulla disciplina + quadro generale collassato |
| `mappaDisciplinaCorrente` | Hardcoded `'tecnologia'` | Deriva da `selDisc` o `null` |
| `renderUdaModello` fallback | `"Tecnologia"` se `selDisc` vuoto | Messaggio guida neutrale |
| Disciplina selezionata auto-open | No — `<details>` chiuso | Sì — `<details open>` |
| Sync mappa in `setTab('didattica')` | Assente | Presente |

## Ridondanze rimosse o collassate

- **Index pills** (14 discipline per ordine) — spostato dentro `<details>` chiuso
- **Riepilogo** (14 discipline con dot) — spostato dentro `<details>` chiuso
- **Ordini completi** (7–15 voci per disciplina × 14 discipline) — spostato dentro `<details>` chiuso

## Impatto su mobile

- Scroll iniziale ridotto del ~60% nella vista Curriculum con disciplina selezionata
- Il quadro generale non occupa più il primo viewport
- Contenuto della disciplina visibile subito dopo il focus header

## Impatto su Curriculum

- Disciplina selezionata ora visibile immediatamente dopo copertura
- Quadro generale espandibile su richiesta
- Auto-apertura dei dettagli della disciplina selezionata

## Impatto su Competenze e progettazione

- Mappa disciplinare sincronizzata con `selDisc` all'ingresso della scheda
- Nessun hardcode residuo di Tecnologia nei fallback
- Evidenze caricate dalla disciplina corrente

## Risultati test

- Validatore: 14/14 PASS
- Shape test: 14/14 PASS
- Desktop smoke: 11/11 PASS
- Mobile smoke: 6/6 PASS
- Accessibilità: 6/6 PASS
- Regressioni: 5/5 PASS

## Errori console

- Errori JavaScript reali: 0
- Resource warning: 0
- 404 non bloccanti: 1 (favicon locale — preesistente)
- localStorage try-catch: gestito

## Raccomandazione successiva

Il prodotto è più vicino a una verifica esterna UX/UI. Per arrivare a "certification-ready" completo, resta:

1. **Aria-live announcements** su cambio disciplina/tab (P2)
2. **Emoji decorative senza `aria-hidden`** (P2)
3. **Test con utenti reali** su mobile e tablet

## Verdict

`CML_UX_CERTIFICATION_READINESS_CURRICULUM_UI_READY`
