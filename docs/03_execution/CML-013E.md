# CML-013E — Mobile Navigation Structure Audit

## Stato

Audit della navigazione mobile e selezione della struttura target.
Nessuna modifica runtime, nessun deploy.

## Preflight

| Campo | Valore |
|---|---|
| Branch | `cml-008r-fix-markdown-decision-summary` |
| HEAD | `1c8f3ef` |
| Working tree | Pulita ✅ |
| Nessuna modifica runtime | ✅ |
| Nessun deploy | ✅ |
| CML-013A/B/C/D preservati | ✅ |

## 1. Analisi navigazione mobile attuale

Di seguito la struttura percepita dall'utente su viewport ≤760px (mobile portrait).

### Elementi, in ordine visivo:

| # | Elemento | Comportamento ≤760px | Criticità |
|---|---|---|---|
| 1 | Header compatto | Sticky top-0, toggle Dettagli ⬇ | Occupa spazio verticale prezioso |
| 2 | Tabbar (4 voci) | Scrollabile orizzontale, sticky sotto header | Troppe voci per viewport stretta; font 9px a ≤380px |
| 3 | Breadcrumb | Statico, 11px, nessun breakpoint mobile | Poco visibile, non dinamico |
| 4 | Cruscotto | Stack verticale, bottoni full-width | Usa >40% viewport iniziale su schermo piccolo |
| 5 | Sidebar discipline | Orizzontale scrollabile sotto il cruscotto | Sempre visibile, anche su tab Definitivo/Fonti |
| 6 | Toolbar | Full-width, filtri 50% ciascuno, export full-width | Molti elementi compatti |
| 7 | Area contenuto | Card a tutta larghezza | Ok |
| 8 | Quick-info-bar | Stack verticale, bottoni full-width | Visibile solo su homepage (dopo cruscotto) |
| 9 | ⚙️ Azioni | Toggle inline nel cruscotto, lista sotto | Funziona ma è in mezzo al flusso |

### Flusso utente mobile tipo per cambiare area:

```
Revisione → scroll tabbar → tap "📋 Definitivo" → scroll contenuto
Revisione → scroll tabbar → tap "📜 Fonti" → scroll contenuto
Revisione → scroll tabbar → tap "📖 Generali" → scroll contenuto
```

### Problemi principali

1. **Tabbar sovraccarica**: 4 destinazioni in uno spazio di 360-414px. L'utente deve scorrere orizzontalmente per vedere tutte le opzioni.
2. **Sidebar sempre visibile**: la lista discipline orizzontale appare su tutti i tab (Definitivo, Fonti, Generali) dove non serve.
3. **Nessuna bottom bar**: le azioni primarie (Revisione, Definitivo, Esporta) sono relegate al cruscotto nella parte alta; l'utente deve risalire per cambiarle.
4. **Cruscotto occupa troppo spazio verticale**: su mobile 360px, stato + prossima azione + 3 bottoni + barra salvataggio + toggle Azioni = >200px, più del 50% della viewport.
5. **Esporta raggiungibile in 3 tap**: cruscotto → "Esporta" → scroll → "📄 Export ▾" → scegli formato.
6. **Fonti e Generali poco usati ma sempre esposti**: nella tabbar occupano spazio per funzioni consultive non frequenti.
7. **Breadcrumb inefficace su mobile**: troppo piccolo, non aggiornato al cambio disciplina.

## 2. Opzioni valutate

### Opzione A — Bottom bar minima

Struttura:

```
┌──────────────────────────┐
│ Header (compatto)        │
├──────────────────────────┤
│ [Area contenuto attuale] │
├──────────────────────────┤
│ ✏️ Rev. │ 📋 Def. │ 📤 Esp. │  ← bottom bar fissa
└──────────────────────────┘
```

| Aspetto | Valutazione |
|---|---|
| **Valore per docente** | Le 3 azioni principali sono sempre raggiungibili con un tap. Chiarezza massima. |
| **Rischio** | Rimuovere la tabbar può disorientare utenti desktop che passano a mobile. Fonti/Generali vanno messi in menu secondario. |
| **Impatto desktop** | Nessuno se il cambiamento è solo ≤900px. |
| **Impatto mobile** | Recupero spazio in alto (niente tabbar). Bottom bar consuma ~50px in basso. |
| **File interessati** | `index.html` (CSS + HTML bottom bar, JS toggle tab). |
| **Cosa non toccare** | Logica card, approvazione/rifiuto, conteggi, asset. |
| **Raccomandazione** | ✅ Buona ma richiede menu secondario per Fonti/Generali/Discipline. |

### Opzione B — Menu a scomparsa principale

Struttura:

```
┌──────────────────────────┐
│ Header (compatto)        │
│ [☰ Menu] principale      │  ← singolo pulsante
├──────────────────────────┤
│                          │
│ [Area contenuto attuale] │
│                          │
└──────────────────────────┘

Menu aperto:
┌──────────────────────────┐
│ ✏️ Revisione per disc.   │
│ 📋 Curricolo definitivo  │
│ 📤 Esporta               │
│ 📜 Riferimenti normativi │
│ 📖 Sezioni generali      │
│ ──────────────────────── │
│ ⚙️ Azioni…              │
│ 📲 Installa…             │
└──────────────────────────┘
```

| Aspetto | Valutazione |
|---|---|
| **Valore per docente** | Massima pulizia — tutto dietro un menu. |
| **Rischio** | Le azioni principali diventano meno immediate. L'utente deve sempre "aprire menu" per navigare. |
| **Impatto desktop** | Nessuno se ≤900px. |
| **Impatto mobile** | Recupero massimo spazio verticale. Due tap per qualsiasi azione. |
| **File interessati** | `index.html` (overlay menu, JS). |
| **Cosa non toccare** | Logica card, approvazione/rifiuto, conteggi, asset. |
| **Raccomandazione** | ⚠️ Troppo radicale per un uso frequente (cambio continuo tra Revisione/Definitivo/Esporta). |

### Opzione C — Sistema ibrido (consigliata)

Struttura:

```
┌──────────────────────────┐
│ Header (compatto)        │
│ [breadcrumb compatto]    │
├──────────────────────────┤
│ Cruscotto compatto       │
├──────────────────────────┤
│ [Area contenuto attuale] │
│  + discipline inline     │
│  (solo in tab Revisione) │
├──────────────────────────┤
│ ✏️ Rev. │ 📋 Def. │ 📤 Esp. │ ☰ │  ← bottom bar
└──────────────────────────┘
  ☰ = menu secondario (Fonti, Generali, Discipline,
       Azioni, Install, Settings, Course PDF, Guida)
```

| Aspetto | Valutazione |
|---|---|
| **Valore per docente** | 3 azioni principali sempre visibili in basso. Altre destinazioni in menu ☰. Discipline inline nella vista Revisione (non globali). |
| **Rischio** | Bottom bar potrebbe interferire con contenuti lunghi. Serve padding-bottom sul main. |
| **Impatto desktop** | Nessuno (solo ≤900px). |
| **Impatto mobile** | Rispetto della regola "max 3 azioni visibili". Recupero spazio in alto rimuovendo sidebar globale. |
| **File interessati** | `index.html` (CSS bottom bar + menu overlay, JS). |
| **Cosa non toccare** | Logica card, approvazione/rifiuto, conteggi, asset. |
| **Raccomandazione** | ✅ Bilanciata. Preserva immediatezza delle 3 azioni e mette ordine tra le funzioni secondarie. |

## 3. Opzione selezionata: C — Sistema ibrido

### Motivi

1. **Continuità con CML-013B**: la home guidata mostra le 3 azioni principali; la bottom bar le mantiene sempre visibili su mobile.
2. **Rispetto del principio CML-013A**: "una schermata, una decisione" — il menu ☰ raccoglie tutto ciò che non è azione primaria.
3. **Discipline contestuali**: appaiono solo quando serve (vista Revisione), non come sidebar globale su tutti i tab.
4. **Basso rischio di regressione**: impatto solo ≤900px, struttura desktop invariata.
5. **Estendibile**: il menu ☰ può includere anche il pannello dettaglio futuro.

### Schema architetturale mobile (≤900px)

```
┌──────────────────────────────────────┐
│ Header (app-header)                  │
│ Breadcrumb compatto                  │
├──────────────────────────────────────┤
│ Cruscotto (compatto: solo stato      │
│ + prossima azione + barra salvat.)   │
├──────────────────────────────────────┤
│ Discipline orizzontali               │  ← solo in tab Revisione
│ (scrollabile, contestuale)           │
├──────────────────────────────────────┤
│ Toolbar contestuale                  │
│ + Card / Contenuto                   │
│                                      │
├──────────────────────────────────────┤
│ ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ │
│ ✏️ Rev.  │ 📋 Def.  │ 📤 Esp.  │ ☰ │  ← bottom bar
└──────────────────────────────────────┘
```

### Menu ☰ (overlay dal basso o laterale)

```
┌──────────────────────────────┐
│ ☰ Menu                      │
│ ─────────────────────────── │
│ 📜 Riferimenti normativi    │
│ 📖 Sezioni generali         │
│ 📲 Installa sul dispositivo │
│ 👤 Impostazioni/onboarding  │
│ 📘 Corso in PDF             │
│ 🏛️ Motto e metodo          │
│ ❔ Guida rapida             │
│ ─────────────────────────── │
│ 💾 Salva / ⬇️ Backup /     │
│ ⬆️ Importa / ↺ Ripristina  │
└──────────────────────────────┘
```

## 4. Criteri di accettazione per CML-013F

| # | Criterio | Note |
|---|---|---|
| 1 | Max 3 destinazioni principali visibili su mobile | Revisione, Definitivo, Esporta in bottom bar |
| 2 | Discipline accessibili solo nel contesto Revisione | Non come sidebar globale su ogni tab |
| 3 | Azioni secondarie raggiungibili da menu ☰ | Tutte le funzioni oggi in ⚙️ Azioni |
| 4 | Esporta raggiungibile in ≤2 tap | Bottom bar → tap Esporta |
| 5 | Nessuna perdita funzionale | Ogni funzione attuale deve rimanere accessibile |
| 6 | Nessuna modifica ai dati | Local storage, salvataggio, backup inalterati |
| 7 | Nessuna modifica a logica approvazione/rifiuto | Card, dettaglio, decisioni inalterati |
| 8 | Nessuna regressione desktop (≥901px) | Breakpoint desktop invariati |
| 9 | Touch target minimo 44px | Bottom bar, menu, pulsanti |
| 10 | Bottom bar fissa senza coprire contenuto | Padding-bottom sul main |
| 11 | Breadcrumb visibile su mobile | Almeno 10px, posizionato sotto header |

## 5. Cosa NON deve essere toccato

- ❌ Logica approvazione/rifiuto
- ❌ Conteggi
- ❌ Card HTML/JS (cardHTML, pending-detail, collapse)
- ❌ Tecnologia export panel
- ❌ Markdown generation
- ❌ PDF, sw.js, _headers, manifest, icons
- ❌ Asset
- ❌ Desktop breakpoint (≥901px)

## 6. Verdetto

```
CML_013E_MOBILE_NAVIGATION_STRUCTURE_AUDIT_READY
```

## Output finale

| Campo | Valore |
|---|---|
| Verdetto | `CML_013E_MOBILE_NAVIGATION_STRUCTURE_AUDIT_READY` |
| Branch | `cml-008r-fix-markdown-decision-summary` |
| Commit | `1c8f3ef` |
| Criticità mobile | 7 (tabbar sovraccarica, sidebar globale, 3 tap export, cruscotto pesante, breadcrumb piccolo, fonti sempre esposte, no bottom bar) |
| Opzioni valutate | A (bottom bar minima), B (menu solo), C (ibrido) |
| Opzione selezionata | **C — Sistema ibrido** |
| Criteri accettazione CML-013F | 11 criteri |
| Modifica runtime | ❌ Nessuna |
| Deploy | ❌ Nessuno |
| Stato Git finale | `1c8f3ef` + commit docs |

## Prossimo step

**CML-013F** — Bottom bar minima + menu a scomparsa per Discipline/Azioni (primo incremento runtime mobile navigation).
