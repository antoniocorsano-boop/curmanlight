# CML-011A — Export and Guide Clarity Selection Audit

## Stato

Audit di selezione sul miglioramento di esportazione e guida utente. Nessuna modifica runtime.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `e12f5ca` (CML-010G)
- Working tree: pulita
- Nessuna modifica runtime ✅
- Nessun deploy ⛔

## Analisi vista pubblicata

### Flusso utente attuale

1. **Cruscotto**: "Stato: revisione avviata" / "Prossima azione: controlla le 12 voci da validare"
2. **3 CTA**: Controlla voci (→ tab lavoro), Apri documento (→ tab riepilogo), Esporta (→ tab lavoro, scroll toolbar)
3. **Tab bar**: Revisione per disciplina | Curricolo definitivo | Riferimenti normativi | Sezioni generali
4. **Tab lavoro**: Filter toolbar, gap-header-unique istruzioni, card compatte ✅❌🔍🗑, step-guida "3️⃣ Quando hai finito → Curricolo definitivo"
5. **Tab riepilogo**: Export buttons Word/Copia/Markdown/PDF con variante "(definitivo)"
6. **Export panel (Tecnologia)**: Badge "Documento di lavoro - da validare", Genera bozza/Copia/Scarica Markdown, disclaimer validazione

### Aree esportazione esistenti

| Area | Posizione | Formati | Note |
|---|---|---|---|
| Toolbar export | Tab riepilogo | Word, Copia, Markdown, PDF | Con/senza "(definitivo)" |
| Export panel | Tab lavoro (Tecnologia) | Markdown (bozza) | Solo Tecnologia |
| Curricolo Definitivo | Tab riepilogo | Word, Copia, Markdown, PDF | onlyApproved=true |

## Criticità individuate

| # | Criticità | Gravità |
|---|---|---|
| C1 | **Due "Markdown" semanticamente diversi**: toolbar "Markdown" vs "Markdown (definitivo)" vs export panel "Genera bozza / Copia / Scarica Markdown". L'utente non capisce quale produce cosa. | Media |
| C2 | **Disclaimer validazione solo nell'export panel**: "La validazione finale resta affidata al gruppo di lavoro" appare nel pannello Tecnologia ma NON vicino ai pulsanti "Curricolo Definitivo". L'utente potrebbe pensare che "Word (definitivo)" sia un documento già validato. | Alta |
| C3 | **"Prossima azione" statica**: dice sempre "12 voci da validare" anche dopo decisioni. Nessun progress feedback. | Media |
| C4 | **Guida "3️⃣ Quando hai finito" in fondo alle card**: l'utente scrolla oltre senza vederla se ha molte card pending. | Bassa |
| C5 | **Export panel solo Tecnologia**: se l'utente lavora su un'altra disciplina, non vede il pannello e non sa perché. | Media |
| C6 | **Tooltip non visibili su mobile**: "Richiede connessione", "Funziona anche offline" — su mobile l'utente non ha feedback sul perché un pulsante fallisce. | Bassa |
| C7 | **"Copia per Word" — nome tecnico**: l'utente potrebbe non capire che produce Markdown pronto per Word (non copia un doc Word). | Bassa |

## Opzioni valutate

### Opzione A — Microcopy export e guida minima

Ridefinire etichette e testi guida per chiarire formato, scopo e stato di validazione.

| Campo | Valore |
|---|---|
| **Valore** | Chiarezza immediata, bassissimo rischio, nessuna nuova UI |
| **Rischio** | Potrebbe non bastare se il flusso concettuale resta opaco |
| **File** | index.html (solo testo) |
| **Non toccare** | Logica, card, asset, CSS structure, export functions |
| **Deploy** | Sì |
| **Raccomandazione** | ✅ Intervento minimo consigliato per CML-011B |

### Opzione B — Pannello "Cosa esporti" dentro export

Infobox esplicativo all'interno del tab riepilogo che confronta i formati (Word = impaginato con libreria, Markdown = testo strutturato, PDF = stampa browser).

| Campo | Valore |
|---|---|
| **Valore** | Guida contestuale al punto di export |
| **Rischio** | Aggiunge vertical space su mobile, possibile ridondanza con guida esistente |
| **File** | index.html (HTML+CSS) |
| **Non toccare** | Logica, card, asset, export functions |
| **Deploy** | Sì |
| **Raccomandazione** | Opzione secondaria, valutare dopo A |

### Opzione C — Percorso guidato "controlla → valida → esporta"

Step indicator nel cruscotto con progresso dinamico (es. "5/12 voci decise").

| Campo | Valore |
|---|---|
| **Valore** | Chiarezza sul percorso completo, feedback progresso |
| **Rischio** | Modifica logica cruscotto, più codice, over-engineering per il problema attuale |
| **File** | index.html (cruscotto + JS) |
| **Non toccare** | Card, asset, export functions, PDF |
| **Deploy** | Sì |
| **Raccomandazione** | Rimandare a ciclo successivo se A non basta |

### Opzione D — Solo disclaimer sul "Definitivo"

Aggiungere testo "Bozza di lavoro — non sostituisce delibera del Collegio Docenti" accanto ai pulsanti "Word (definitivo)" / "Markdown (definitivo)".

| Campo | Valore |
|---|---|
| **Valore** | Risolve C2 (la criticità più grave) con una sola riga di testo |
| **Rischio** | Molto basso |
| **File** | index.html (una riga) |
| **Non toccare** | Tutto il resto |
| **Deploy** | Sì |
| **Raccomandazione** | ✅ Da includere in CML-011B come fix puntuale C2 |

## Opzione selezionata per CML-011B

**Opzione A (microcopy)** con **inclusione del fix C2 (disclaimer su Definitivo)**.

### Motivazione

1. **C2 è la criticità più grave**: un utente potrebbe scambiare "Curricolo Definitivo" per documento validato. Una riga di disclaimer risolve.
2. **Le Opzioni B e C** sono prematuri: il flusso base funziona, serve chiarezza prima di aggiungere UI.
3. **L'Opzione A** ha il miglior rapporto valore/rischio: poche righe di testo, nessuna nuova UI, deploy minimo.
4. **Il ciclo CML-009/010 è stato lungo**: un intervento piccolo mantiene lo slancio e chiude il blocco rapidamente.

### Confini CML-011B

- Solo testo (etichette, disclaimer, guide copy)
- Nessuna modifica a CSS struttura
- Nessuna modifica a logica JS (approvazione/rifiuto, export, markdown generation)
- Nessuna modifica a card
- Nessuna modifica a PDF, sw.js, _headers, assets
- Deploy consentito

## Verdetto

```
CML_011A_EXPORT_GUIDE_CLARITY_SELECTION_AUDIT_READY
```

## Prossimo step consigliato

CML-011B — microcopy export labels and validation disclaimer.
