# CML-009A — User View Lightening Design Audit

## Problema

La vista pubblicata (`tab-lavoro` di default) espone simultaneamente:

- header con dettagli e badges (12 righe)
- tabbar (4 voci)
- quick-info-bar con save/profile/azioni (fino a 8 righe espanse)
- orientation-card con 5 step + nota (~10 righe)
- sidebar discipline
- install-hint (~3 righe)
- toolbar con 6 filtri + 5 pulsanti export + nota (~6 righe)
- usage-notice (~6 righe)
- local-save-bar con 5 pulsanti (~5 righe)
- progress-bar (~3 righe)

**~1300 parole e 50+ righe** prima del primo contenuto disciplinare.

Nessuna gerarchia: spiegazioni, azioni, esportazione, salvataggio e stato sono tutti allo stesso livello.

## Blocchi individuati

| Blocco                  | Tipo                           | Dimensione     | Azione                                   |
| ----------------------- | ------------------------------ | -------------- | ---------------------------------------- |
| orientation-card        | Spiegazione metodologica       | 10 righe       | Mantenere come primo livello? Comprimere |
| usage-notice            | Istruzioni uso ibrido          | 6 righe        | Espandibile                              |
| local-save-bar          | Barra salvataggio + 5 pulsanti | 5 righe        | Compattare in icona+stato                |
| install-hint            | Suggerimento installazione PWA | 3 righe        | Espandibile / rimuovere dopo install     |
| toolbar (6 filtri)      | Filtri disciplina              | 3 righe        | Mantenere ma dopo il cruscotto           |
| toolbar (5 export)      | Pulsanti export                | 2 righe + nota | Raggruppare sotto scheda Export          |
| progress-bar            | Avanzamento                    | 3 righe        | Compattare                               |
| Tecnologia export panel | Solo per Tecnologia            | 8 righe        | OK ma va nella scheda Export             |

## Azioni principali identificate

Queste sono le uniche azioni che l'utente DEVE vedere subito:

| Azione                         | Priorità | Note                       |
| ------------------------------ | -------- | -------------------------- |
| Scegliere una disciplina       | Alta     | Già visibile nella sidebar |
| Confrontare 2012 vs 2025       | Alta     | Deve restare primo livello |
| Valutare/decidere su ogni voce | Alta     | Cuore del workflow         |
| Esportare bozza                | Media    | Solo dopo aver lavorato    |

Tutto il resto (salvataggio, installazione, note metodologiche, filtri avanzati) è supporto.

## Proposta: architettura a 3 livelli

### Livello 1 — Cruscotto minimo (default)

Sostituire l'area pre-cards con:

```
┌─────────────────────────────────────────────┐
│  📚 Curricolo Verticale — Revisione guidata │
│                                              │
│  Stato: Revisione avviata                    │
│  Prossima azione: 12 voci da validare        │
│                                              │
│  [📖 Leggi] [✏️ Revisione] [📤 Esporta]      │
│                                              │
│  Strumento di supporto — la validazione      │
│  resta a cura del gruppo di lavoro.          │
└─────────────────────────────────────────────┘
```

- Header: solo titolo + stato
- Orientation: compresso in 1 riga (dismissibile)
- Quick-info: icona salvataggio + stato, senza pulsanti
- Install-hint: rimosso dopo prima visita
- Usage-notice: nascosto, accessibile da "?"
- Toolbar: solo filtro base (Tutti/Da decidere), export sotto scheda
- Local-save: icona con segno di spunta, pulsanti in dropdown
- Progress: numero piccolo in header

### Livello 2 — Sezioni compatte a schede

Dopo il cruscotto, riga di schede sintetiche:

| Scheda              | Contenuto                                               |
| ------------------- | ------------------------------------------------------- |
| Documento attuale   | Cosa contiene, cosa è modificabile, cosa è consultabile |
| Voci da validare    | 12 totali: 8 Gap 2025, 4 mantenimenti                   |
| Fonti e riferimenti | IN 2012, IN 2025, fonti interne, note metodologiche     |
| Esportazione        | Markdown, PDF, documento di lavoro, stato revisione     |

Ogni scheda mostra sintesi (3-4 righe max) e link "Mostra dettaglio".

### Livello 3 — Dettaglio espandibile

Solo su click:

- "Mostra dettaglio" → elenco voci
- "Apri confronto" → vista comparativa 2012/2025
- "Vedi fonte" → testo normativo
- "Mostra nota metodologica" → spiegazione
- "Visualizza voci mantenute" → lista mantenimenti

## Cosa NON toccare

- Logica applicativa (buildDocumentModel, modelToMarkdown, etc.)
- Dati delle 14 discipline
- Workflow approve/reject/edit
- PDF, sw.js, _headers, assets
- Esportazione Markdown (già corretta in CML-008R-FIX)
- Tecnologia export panel (funziona correttamente)
- Nessuna modifica funzionale
- Nessun deploy

## Priorità intervento per CML-009B

Il primo intervento (CML-009B) deve agire solo sulla **parte alta della pagina** (pre-cards):

1. Compattare header in versione minima
2. Sostituire orientation-card con cruscotto 3 pulsanti
3. Comprimere usage-notice in espandibile
4. Comprimere local-save-bar in icona-stato + dropdown
5. Comprimere install-hint (nascondere se già installato o dopo prima visita)
6. Spostare toolbar export buttons sotto scheda Esportazione
7. Ridurre filtri a "Tutti" e "Da decidere"
8. Progress-bar in piccolo in header

Non toccare ancora:

- tabs (riepilogo, normativa, generali)
- sidebar discipline
- cards-area
- tecnologia export panel
- Markdown generation
