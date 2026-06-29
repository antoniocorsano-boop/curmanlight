# CML-010E — Real Mobile Acceptance Smoke Report

## Summary

Smoke test su versioni simulate di iPhone 13, Galaxy S21 e Pixel 5, utilizzando Chrome headless con viewport e user agent mobili. Tutte le verifiche funzionali sono passate. Tre problemi minori non bloccanti documentati.

## Dettaglio verifiche

### Dispositivi

| Dispositivo   | Viewport | User Agent                                                                  | DOM          | Screenshot  |
| ------------- | -------- | --------------------------------------------------------------------------- | ------------ | ----------- |
| iPhone 13 Pro | 390×844  | Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 | 228629 bytes | 63797 bytes |
| Galaxy S21    | 360×800  | Mozilla/5.0 (Linux; Android 14; SM-G991B)                                   | 228629 bytes | 56494 bytes |
| Pixel 5       | 393×851  | Mozilla/5.0 (Linux; Android 14; Pixel 5)                                    | 228629 bytes | 64548 bytes |

### Rendered cards (iPhone 13, 390×844)

- 12 `pending-card` (incl. CSS + source)
- 9 `pending-detail` rendered (all hidden by default)
- 6 `collapse-body` (all collapsed by default)
- 8 `badge modifica`, 5 `badge ok`
- 9 `pending-action approve` / 9 `pending-action detail` / 9 act-edit

### Layout structure per sezione

| Sezione    | Ordine    | Tipo             | Gap-header | Readonly note |
| ---------- | --------- | ---------------- | ---------- | ------------- |
| Infanzia   | Traguardi | Tutti ok         | No         | Sì            |
| Infanzia   | Obiettivi | Tutti ok         | No         | Sì            |
| Primaria   | Traguardi | 2 pending        | Sì         | Sì            |
| Primaria   | Obiettivi | 1 pending        | Sì         | Sì            |
| Secondaria | Traguardi | 2 pending + 1 ok | Sì         | No            |
| Secondaria | Obiettivi | 3 pending        | Sì         | No            |

### Problemi rilevati

#### P1 — Touch target pending-action (min-height:34px)

Nella media query mobile (max-width:480px), i pulsanti `.pending-action` hanno `min-height:34px`. Le linee guida Apple HIG e Material Design raccomandano almeno 44px per touch target accessibili. A 34px, utenti con dita grandi o motricità fine ridotta potrebbero toccare il pulsante sbagliato.

**Impatto**: Medio. I 4 pulsanti sono affiancati con gap 5px — l'errore di tap è possibile ma non frequente.

**Soluzione proposta**: Aumentare `min-height` a 42-44px per i pulsanti `.pending-action` nella media query mobile.

#### P2 — Icona 🔍 non auto-esplicativa

Senza title tooltip (invisibile su mobile), l'icona 🔍 non comunica immediatamente "apri dettaglio e confronto". Il gap-header spiega "🔍 per vedere il confronto completo", ma va letto una volta per sezione.

**Impatto**: Basso. L'utente impara dopo la prima interazione.

#### P3 — Collapse indicator poco evidente

Le card ok/decise hanno indicatori ▸/▾ e `cursor:pointer`, ma su mobile non c'è feedback hover. Senza title tooltip, l'utente potrebbe non sapere di poter cliccare per espandere.

**Impatto**: Basso. Il badge "✓ Nessuna modifica" è chiaro e la card non sembra nascondere informazioni — l'utente scopre l'interazione provando a toccare.

### Non regressioni confermate

| Componente                                     | Stato             |
| ---------------------------------------------- | ----------------- |
| usage-notice                                   | ✅                |
| local-save-bar                                 | ✅                |
| tecnologia-export-panel                        | ✅                |
| Cruscotto                                      | ✅                |
| Toolbar / filtri                               | ✅                |
| Tabs (Lavoro, Riepilogo, Normativa, Generali)  | ✅                |
| sw.js / _headers / PDF                         | ✅ Hash invariati |
| CML-009D (padding save, setTab, focus-visible) | ✅                |

## Verdetto

```
CML_010E_REAL_MOBILE_ACCEPTANCE_SMOKE_READY
```

Nessun blocco alla pubblicazione. I 3 problemi P1-P3 non impediscono l'uso ma sono migliorabili in un futuro micro-fix.
