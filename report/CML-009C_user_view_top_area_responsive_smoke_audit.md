# CML-009C — User View Top Area Responsive Smoke Audit

## Oggetto

Verifica responsiva della vista alleggerita (CML-009B) prima della pubblicazione.

## Metodo

- Server locale Python HTTP su `localhost:5001`
- Screenshot Chrome headless a 360px, 414px, 768px, 1280px
- Analisi CSS dei breakpoint e comportamento media query
- Verifica console JavaScript (funzioni, riferimenti DOM)
- Verifica hash asset (sw.js, _headers, PDF)

## Esito per breakpoint

### 360×800 (mobile stretto)

```
┌──────────────────────────┐
│  STATO: REVISIONE        │
│  Prossima azione:...     │
│                          │
│  [📋 Controlla voci    ] │ ← full-width
│  [📖 Apri documento    ] │
│  [📤 Esporta           ] │
│                          │
│  💾 Save  — 0%  ██  ⚙️  │ ← wrap
├──────────────────────────┤
│  [Tutti] [Da decidere]   │
│  ⋯ Altri filtri | Export │
├──────────────────────────┤
│  💡 Uso ibrido (⏶)       │ ← collassato
│  💾 Salva Backup Import  │ ← pulsanti mini
├──────────────────────────┤
│  [sidebar discipline]    │
│  [cards-area]            │
└──────────────────────────┘
```

Esito: ✅ Ok. Impilazione verticale corretta, nessuna sovrapposizione.

### 414×896 (mobile medio)

Esito: ✅ Ok. Equivalente a 360px, margini leggermente più ampi.

### 768×1024 (tablet)

Layout a due colonne (sidebar + contenuto), cruscotto in orizzontale, toolbar compatta.

Esito: ✅ Ok. Pienamente leggibile.

### 1280×800 (desktop)

Layout completo, cruscotto a barra, toolbar esposta, sidebar sticky.

Esito: ✅ Ok. Nessuna anomalia.

## Riepilogo verifiche

| # | Verifica | Esito |
|---|---|---|
| 1 | Branch e commit di partenza corretti | ✅ `d45407a` |
| 2 | Working tree pulita prima dell'audit | ✅ |
| 3 | Cruscotto visibile e leggibile a tutti i breakpoint | ✅ |
| 4 | Stato + prossima azione visibili senza scroll | ✅ |
| 5 | Tre pulsanti principali tappabili | ✅ |
| 6 | Barra progresso/salvataggio non sovrapposta | ✅ |
| 7 | Filtri (Tutti/Da decidere) leggibili | ✅ |
| 8 | Toggle "⋯ Altri filtri" funzionante | ✅ |
| 9 | Export collassato: toggle visibile, apertura ok | ✅ |
| 10 | Usage notice collassabile senza invasività | ✅ |
| 11 | Install hint nascosto, nessuno spazio vuoto | ✅ |
| 12 | Tabs non alterati | ✅ |
| 13 | Sidebar non alterata | ✅ |
| 14 | Cards-area non alterata | ✅ |
| 15 | Tecnologia export panel non alterato | ✅ |
| 16 | Markdown generation non alterata | ✅ |
| 17 | `sw.js` invariato | ✅ |
| 18 | `_headers` invariato | ✅ |
| 19 | PDF invariato | ✅ |
| 20 | Nessun errore JavaScript bloccante | ✅ |
| 21 | Nessuna modifica runtime | ✅ |
| 22 | Nessun deploy | ✅ |

## Problemi aperti

Tutti minori, nessuno bloccante per la pubblicazione:

| # | Problema | Gravità | Raccomandazione |
|---|---|---|---|
| P1 | Cruscotto visibile su tutti i tab; pulsanti che agiscono su `lavoro` non danno feedback se attivi da altro tab | 🟡 Media | CML-009D: nascondere cruscotto o switchare tab |
| P2 | Pulsanti salvataggio compatti su mobile (touch target < 44px) | 🟢 Bassa | Monitorare in test utente |
| P3 | Toggle filtri/export sono `<span>`, non `<button>` (focus-visible assente) | 🟢 Bassa | Accessibilità marginale |

## Verdetto

```
CML_009C_USER_VIEW_TOP_AREA_RESPONSIVE_SMOKE_READY
```

Il lightening CML-009B supera lo smoke audit responsivo. Nessuna modifica richiesta prima della pubblicazione.
