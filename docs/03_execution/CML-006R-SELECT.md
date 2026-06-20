# CML-006R-SELECT — Visual Lightening / Graphic Density Audit

## Stato iniziale

| Campo | Valore |
|---|---|
| Branch | `cml-006r-select-visual-lightening` |
| HEAD partenza | `c5ffa0a` (CML-005R) |
| Working tree | pulita |
| Master contiene CML-005R | sì, commit `c5ffa0a` |

## Runtime analizzato

`_published_snapshot/netlify-current/index.html` — ~2288 righe, CSS inline (righe 16-434).

### Componenti CSS per quantità di stile

| Componente | Righe CSS | Densità |
|---|---|---|
| Header/responsive header | ~60 | Media |
| Tab bar | ~12 | Bassa |
| Sidebar/discipline | ~8 | Bassa |
| Toolbar/filtri/esporta | ~10 | Bassa |
| **Card/badge/panels/actions** | **~55** | **Alta** |
| Normativa tab | ~25 | Media |
| Riepilogo | ~10 | Bassa |
| Orientamento | ~12 | Bassa |
| Sezioni generali | ~12 | Bassa |
| **Responsive queries** | **~130** | **Molto alta** |
| Print | ~5 | Bassa |

### Criticità visive rilevate

**1. Ombre eccessive (8 distinti `box-shadow`)**

| Selettore | Ombra |
|---|---|
| `.aside-box` | `0 1px 4px rgba(0,0,0,.1)` |
| `.toolbar` | `0 1px 4px rgba(0,0,0,.1)` |
| `.usage-notice` | `0 1px 4px rgba(0,0,0,.06)` |
| `.local-save-bar` | `0 1px 4px rgba(0,0,0,.06)` |
| `.quick-info-bar` | `0 1px 4px rgba(0,0,0,.08)` |
| `.sum-box` | `0 1px 4px rgba(0,0,0,.1)` |
| `.norm-intro` | `0 1px 4px rgba(0,0,0,.1)` |
| `.norm-card` | `0 1px 4px rgba(0,0,0,.08)` |
| `.norm-card:hover` | `0 3px 10px rgba(0,0,0,.12)` |
| `.orientation-card` | `0 1px 4px rgba(0,0,0,.08)` |

Effetto: ogni contenitore sembra galleggiare, l'occhio non ha una superficie piana di riferimento.

**2. Bordi card saturi (5 varianti colore)**

| Classe | Bordo |
|---|---|
| `.card.ok` | `#81c784` (verde) |
| `.card.modifica` | `#ffa726` (arancione) |
| `.card.nuovo` | `#42a5f5` (blu) |
| `.card.approvata` | `#43a047` (verde scuro) |
| `.card.rifiutata` | `#bdbdbd` (grigio) |

Tutti con `border: 1.5px solid` — saturazione piena. Su 14 discipline × molte card, l'effetto è una griglia di cornici colorate che stanca visivamente.

**3. Badge a piena saturazione (7 varianti)**

`.badge.ok` `#66bb6a`, `.badge.modifica` `#ffa726`, `.badge.nuovo` `#42a5f5`, `.badge.approvata` `#43a047`, `.badge.rifiutata` `#9e9e9e` — tutti testo bianco su fondo saturo. Leggibili ma aggressivi.

**4. Pulsanti azione con hover invertito**

`.act-approve` verde su fondo chiaro → hover: fondo verde, testo bianco. Stessa logica per `.act-edit` (blu), `.act-reject` (rosso). Tre pulsanti per card × molte card = molti cambi di stato visivi.

**5. Footer blu scuro dominante**

`footer{background:#263238;color:#90a4ae;padding:7px 20px}` — pur essendo piccolo, il contrasto blu scuro/grigio chiaro attira l'occhio verso il basso. Per uno strumento utility, il footer non dovrebbe competere col contenuto.

**6. Warning/notice ripetuti con bordo sinistro colorato**

`.usage-notice` (giallo), `.local-save-bar` (verde), `.install-hint` (giallo), `.norm-warning` (giallo), `.gap-header` (viola), `.readonly-order-note` (grigio). Ogni notifica ha bordo sinistro di 4px colorato. Sufficienti ma visivamente pesanti se compresenti.

**7. Pannelli confronto a due colonne**

`.panels{grid-template-columns:1fr 1fr}` — colonna sinistra `#fffde7` (giallo pallido), destra `#e8f5e9` (verde pallido). Aggiunge densità cromatica alla card.

### Elementi da preservare (non alleggerire)

| Elemento | Motivo |
|---|---|
| Colore istituzionale `#1a237e` | Identità visiva dell'istituto |
| Badge semantici (ok/modifica/nuovo) | Scansione rapida dello stato |
| Pulsanti approva (verde) / modifica (blu) / respingi (rosso) | Chiarezza semantica dell'azione |
| Bordo sinistro card `norm-card` | Gerarchia normativa |
| Progress bar | Feedback visivo avanzamento |
| Orientamento card | Aiuto per nuovi utenti |
| `#app-toast` | Feedback utente |
| Spaziatura touch (mobile) | Usabilità touch |

## Opzioni valutate

### Opzione A — Micro-alleggerimento CSS conservativo

**Interventi:**
- Ombre: da `0 1px 4px` a `0 1px 3px rgba(0,0,0,.05)` su tutti i contenitori
- Card border: da `1.5px solid` a `1px solid` con saturazione ridotta (es. `#a5d6a7` invece di `#81c784`)
- Badge: saturazione ridotta del 15-20%, testo grigio scuro invece di bianco
- Footer: colore più neutro (`#37474f` o `#455a64`)
- Warning/notice: bordo sinistro da 4px a 3px
- Hover card normativa: rimuovere `box-shadow` enhancement
- Panels: sfondi più neutri

| Criterio | Valutazione |
|---|---|
| Beneficio leggibilità | Medio-alto — riduce rumore visivo |
| Impatto mobile | Positivo — meno contrasti forti su schermi piccoli |
| Rischio regressione | Basso — solo proprietà CSS, nessuna modifica strutturale |
| File toccati | index.html (~20-30 righe CSS modificate) |
| Impatto workflow | Nullo |
| Coerenza uso scolastico | Alta — interfaccia più pulita |
| Tempo stimato | 30-45 minuti |

**Raccomandazione:** Prima scelta.

### Opzione B — Densità e layout

**Interventi:**
- Ridurre padding card (da 7-12px a 5-9px)
- Compattare sidebar (da 185px a 160px larghezza, padding ridotto)
- Ridurre spaziature verticali (margin-bottom card da 7px a 5px)
- Notifiche più compatte (padding ridotto)
- Pannelli confronto più stretti

| Criterio | Valutazione |
|---|---|
| Beneficio leggibilità | Medio — più informazioni visibili ma testo più compresso |
| Impatto mobile | Misto — può peggiorare leggibilità su schermi piccoli |
| Rischio regressione | Medio — può rompere layout responsive, testi troncati |
| File toccati | index.html (~15-20 righe) |
| Impatto workflow | Basso — solo spaziature |
| Coerenza uso scolastico | Media — rischia di rendere tutto più fitto |
| Tempo stimato | 20-30 minuti |

**Raccomandazione:** Parziale (integrare alcune riduzioni spaziatura in Opzione A se coerenti).

### Opzione C — Redesign visivo più ampio

**Interventi:**
- Nuova palette più istituzionale (grigi, blu tenui, accenti misurati)
- Layout card ridisegnato (rimuovere bordi colorati, usare icone laterali)
- Badge sostituiti con tag più sobri
- Footer ridotto a una riga
- Pannelli confronto ridisegnati

| Criterio | Valutazione |
|---|---|
| Beneficio leggibilità | Alto — interfaccia completamente rinnovata |
| Impatto mobile | Positivo — design più leggero |
| Rischio regressione | Alto — molte modifiche, possibile rottura layout |
| File toccati | index.html (~80-120 righe) |
| Impatto workflow | Medio — possibile confusione se badge cambiano aspetto |
| Coerenza uso scolastico | Alta potenzialmente, ma rischio di sovra-ingegnerizzazione |
| Tempo stimato | 2-3 ore |

**Raccomandazione:** Slice successiva (CML-007R o CML-008R) dopo aver consolidato la micro-alleggerimento.

## Opzione selezionata: **Opzione A — Micro-alleggerimento CSS conservativo**

### Motivazione

1. **Massima sicurezza:** modifica solo proprietà CSS, nessuna struttura HTML/funzioni JS/layout toccati
2. **Impatto immediato:** anche piccole riduzioni di ombre e saturazione migliorano la percezione visiva
3. **Rischio regressione minimo:** le proprietà modificate (`box-shadow`, `border-color`, `background`) non influenzano il posizionamento
4. **Coerenza con CML-003R/CML-004R/CML-005R:** non altera alcuna funzionalità già stabilizzata
5. **Prerequisito per opzioni future:** un'interfaccia più pulita è base migliore per eventuali redesign successivi
6. **Allineamento con "strumento scolastico":** meno "effetto dashboard tecnica", più chiarezza operativa

### Integrazione parziale Opzione B

Si possono includere alcune micro-ottimizzazioni di spaziatura (es. `margin-bottom` card da 7px a 6px, padding card ridotto di 1-2px) purché non impattino la leggibilità mobile.

## Perimetro CML-006R implementativo

### File ammessi
- `_published_snapshot/netlify-current/index.html` (solo proprietà CSS)

### File vietati
- HTML strutturale (tag, attributi, classi non CSS)
- Funzioni JavaScript
- Dati delle 14 discipline
- sw.js, _headers, manifest.webmanifest
- PDF, assets

### Proprietà CSS da toccare

| Proprietà | Intervento |
|---|---|
| `box-shadow` | Ridurre opacità: `rgba(0,0,0,.1)` → `rgba(0,0,0,.05)` o `.06` |
| `border-color` card | Ridurre saturazione: es. `#81c784` → `#a5d6a7`, `#ffa726` → `#ffcc80` |
| `border-width` card | `1.5px` → `1px` |
| `background` badge | Ridurre saturazione, testo grigio scuro invece di bianco |
| `background` footer | `#263238` → `#37474f` o grigio più neutro |
| `border-left` warnings | `4px` → `3px` |
| `box-shadow` hover norm-card | Rimuovere enhancement hover |
| `background` panels | Sfondo più neutro (es. `#fafafa` invece di `#fffde7`) |
| `padding` card/acts | Ridurre di 1-2px se coerente |

### Proprietà CSS da NON toccare
- Colori istituzionali (`#1a237e`, `#283593`)
- Semantica cromatica pulsanti (verde=approva, blu=modifica, rosso=respingi)
- Badge `status` (ok/modifica/nuovo — solo saturazione, non colore base)
- Spaziature touch (mobile `min-height: 42px`, `min-height: 44px`)
- Dimensioni caratteri (font-size)
- Layout grid (grid-template-columns, flex properties)
- Animation (savePulse, transitions)

### Smoke test richiesto

```
[ ] Nessuna card con bordo/taglio visibile alterato
[ ] Badge ancora leggibili (contrasto testo/sfondo sufficiente)
[ ] Footer ancora visibile ma meno dominante
[ ] Tab bar invariata
[ ] Sidebar discipline invariata
[ ] Pannelli confronto ancora distinguibili
[ ] Mobile: nessun testo troncato o illeggibile
[ ] Mobile: pulsanti ancora tappabili (min-height preservato)
[ ] Print layout preservato
[ ] Orientamento card preservato
[ ] Gap 2025 indicatore preservato
```

### Criteri di accettazione

1. Tutti i contenitori mantengono la stessa posizione e dimensione (solo colore/ombra/bordo cambiati)
2. Badge rimangono distinguibili tra loro (ok/modifica/nuovo)
3. Pulsanti azione mantengono semantica cromatica
4. Nessuna differenza di layout rispetto a master
5. Stampa funzionante

## Rischi residui

1. Saturazione ridotta potrebbe rendere badge meno distinguibili per utenti con problemi di visione — mitigato: si riduce del 15-20%, non si elimina il colore
2. Footer più chiaro potrebbe sembrare "staccato" dal design — mitigato: mantenere comunque contrasto sufficiente
3. Ombre ridotte potrebbero far sembrare i contenitori "piatti" — mitigato: non si rimuovono del tutto, solo si attenuano

## Conferme

- [x] Nessuna modifica al runtime (questa slice è solo audit/selezione)
- [x] Nessun deploy eseguito
- [x] Nessuna modifica a index.html, funzioni JS, dati discipline, workflow, confronto, tab, PDF, sw.js, _headers
- [x] Nessun backend/API/auth/Netlify Forms
- [x] Nessun codice da prototipi CML-001/CML-002
