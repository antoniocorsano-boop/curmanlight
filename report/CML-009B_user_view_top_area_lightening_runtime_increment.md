# CML-009B — User View Top Area Lightening

## Problema

La prima schermata della vista utente richiedeva la lettura di ~1300 parole prima di arrivare al primo contenuto disciplinare, senza gerarchia tra spiegazioni, azioni, salvataggio ed esportazione.

## Soluzione

Sostituita l'intera area pre-cards con un **cruscotto minimo** a tre livelli di profondità:

### Livello 1 — Cruscotto (sempre visibile, prima dei tabs)

```
┌──────────────────────────────────────────────────┐
│  STATO: REVISIONE AVVIATA                        │
│  Prossima azione: controlla le 12 voci da validare │
│                                                  │
│  [📋 Controlla voci] [📖 Apri documento] [📤 Esporta] │
│                                                  │
│  💾 Salvataggio locale  — 100%  ████████  ⚙️ Azioni │
└──────────────────────────────────────────────────┘
```

- **Stato + prossima azione**: risponde immediatamente a "cosa devo fare?"
- **3 pulsanti principali**: Controlla voci (filtra "Da decidere" + scroll), Apri documento (tab riepilogo), Esporta (scroll a toolbar)
- **Barra compatta**: salvataggio, progresso (con barra), Azioni (install, settings, PDF, motto, guida)

### Livello 2 — Sezioni compatte (nella toolbar)

- **Filtri**: "Tutti" e "Da decidere" visibili sempre; "⋯ Altri filtri" toggle per Approvati/Rifiutati/Invariati/Nuovi/Nascondi invariati
- **Export**: collassato sotto "📄 Export ▾", espande Word/Copia/Markdown/PDF
- **Uso ibrido**: collassato in `<details>`
- **Salvataggio**: barra compatta con testo + 4 pulsanti mini

### Livello 3 — Dettaglio su richiesta

- Install hint: nascosto di default, accessibile dal menu Azioni
- Contenuto disciplinare: invariato (cards-area)

## Metriche di miglioramento

| Aspetto                         | Prima | Dopo                             |
| ------------------------------- | ----- | -------------------------------- |
| Righe pre-cards                 | ~50   | ~12                              |
| Parole prima della prima azione | ~1300 | ~30                              |
| Blocchi informativi simultanei  | 7+    | 3 (cruscotto, toolbar, save bar) |
| Pulsanti visibili di default    | ~15   | 6                                |
| Azione primaria identificabile  | No    | Sì "Prossima azione"             |

## Architettura preservata

- Tutti i filtri/toggle sono ancora presenti ma nascosti sotto toggle espliciti
- Le funzioni JS esistenti non sono state modificate
- I dati delle 14 discipline sono intatti
- Il workflow approve/reject/edit è invariato

## Criterio di accettazione

**✅ Entro la prima schermata l'utente capisce cosa fare, senza leggere spiegazioni lunghe.**

## Verdetto

`CML_009B_USER_VIEW_TOP_AREA_LIGHTENING_READY`
