# CML-071 — Professional UI/UX System Audit Report

**Data:** 2026-06-23
**HEAD:** `9a6ae32` (CML-070A docs) — runtime `b0003ba` (CML-070)
**URL live:** https://antoniocorsano-boop.github.io/curmanlight/
**Dimensione pagina:** 322KB
**Valutazione:** Docs-only — nessuna modifica runtime, nessun deploy

---

## Indice

1. Audit esteso per area
2. Matrice problemi (P0/P1/P2/P3)
3. Cosa funziona bene
4. Rischi UX
5. Debiti UI
6. Proposta design system leggero
7. Roadmap raccomandata

---

## 1. Audit esteso per area

### 1.1 Home

| Aspetto | Valutazione |
|---------|-------------|
| Architettura | Chiara: 2 card (Curriculum, Didattica) con microcopy di contesto. Modello solido. |
| Link card Didattica | 4 link, solo 2 attivi (Valuta evidenze, Progetta UDA). "Prepara attività" e "Materiali per la classe" sono `<a href="#">` dimessi — fuorvianti per l'utente. |
| Microcopy footer | "La Home non modifica i dati. Curriculum e Didattica restano separati..." — utile ma lungo. |
| Cruscotto | Stato "revisione avviata", "Prossima azione: controlla le 12 voci da validare" — ancora riferito a Revisione, non aggiornato per Didattica. |
| Menu Azioni (⚙️) | 9 voci (Salva, Backup, Importa, Ripristina, Installa, Impostazioni, Corso PDF, Motto, Guida). Alta densità. |

### 1.2 Navigazione desktop

| Aspetto | Valutazione |
|---------|-------------|
| Tab count | **7 tab**: Home, Didattica, Revisione, Curricolo Definitivo, Riferimenti, Sezioni Generali, Curricolo di Istituto. Troppi. |
| Etichette | Miste: alcune con icona (🏠 Home), altre senza. |
| Ordine | Didattica in posizione 1 (dopo Home) — corretto per modello, ma il tab Didattica mostra solo Valutazione/Evidenze, non una dashboard didattica. |
| Sovrapposizione | "Curricolo di Istituto" (viewer) e "Sezioni Generali" sono entrambi consultazione — l'utente può confondersi. |
| Breadcrumb | Assente sulla Home. Presente solo dopo setTab() nelle altre sezioni. |

### 1.3 Navigazione mobile

| Aspetto | Valutazione |
|---------|-------------|
| Bottom bar | 5 items: Home, Rev., Def., Curr., Menu. OK ma "Rev." e "Def." sono ambigue per nuovo utente. |
| Menu overlay | 12+ voci (Fonti, Generali, Azioni, Salva, Backup, Importa, ecc.) — overload. |
| Touch target | 44-52px — adeguati. |
| Scopribilità | UDA e Valutazione non hanno voce diretta in bottom bar — solo da Home o dal tab Didattica. |

### 1.4 Curriculum (Revisione)

| Aspetto | Valutazione |
|---------|-------------|
| Densità | 4 aree funzionali: esportazioni, process tools, export tecnologia, linee guida. Ancora alta nonostante CML-066. |
| Export group | "📄 Esportazioni ▾" con 4 formati + 2 azioni (.cml, Drive) + nota — 7 elementi sotto un toggle. OK ma al limite. |
| Process tools | "🔧 Strumenti di processo" con 2 pannelli interni, ognuno con pulsanti. Logica ma pesante. |
| "Nascondi invariati" toggle | Utile ma poco visibile — ultimo elemento della filter row. |

### 1.5 Export/Import/Report

| Aspetto | Valutazione |
|---------|-------------|
| buttonTags export | 27 — invariato da CML-070. Ancora alto. |
| Formati | 4 (Word, Copy, Markdown, PDF) × 2 modalità (confronto, definitivo) = 8 combinazioni + .cml + Drive. |
| Duplicazione | .cml e Drive compaiono sia in confronto che in definitivo. |
| Raggruppamento | "Altre esportazioni ▾" riduce visibilità ma non elimina la complessità. |

### 1.6 Validazione protetta (role-access)

| Aspetto | Valutazione |
|---------|-------------|
| Gating | 3 azioni protette, codice `CML2025`, sessionStorage. Funzionale. |
| UI | "Blocca di nuovo" presente — buono per revoca. |
| Visibilità | I pannelli sono visibili anche senza sblocco — l'utente vede cosa potrebbe fare. OK. |

### 1.7 Tecnologia normalizzata

| Aspetto | Valutazione |
|---------|-------------|
| Posizione | Sotto Curriculum > Consultazione > sezione tecnologia-norm. Raggiungibile ma nascosta (3 click: Home → Curriculum → ⚙️ Tecnologia normalizzata). |
| Read-only | OK, microcopy prudenziale presente. |
| Filtri | OK (Tutti, Infanzia, Primaria, Secondaria). |

### 1.8 Didattica Valutazione/Evidenze

| Aspetto | Valutazione |
|---------|-------------|
| Posizione | Tab Didattica → first section. Buona. |
| Filtro ordine | Funzionante. OK. |
| Microcopy | 6 righe di disclaimer (🔨 + 4 bullet + footer). Troppo ridondante. |
| Badge | "Prototipo read-only" in header e footer — duplicato. |
| Card | 13 unità, espandibili. OK. |

### 1.9 UDA Read-Only

| Aspetto | Valutazione |
|---------|-------------|
| Posizione | Sotto Valutazione/Evidenze nello stesso tab Didattica — **sovrapposizione**: l'utente deve scorrere oltre Valutazione per trovare UDA. |
| Visibilità | Link "Progetta UDA" dalla Home → setTab('didattica') porta a Didattica ma non fa scroll a UDA. |
| Badge origine | 🟢/🟡 funzionale e trasparente. OK. |
| Microcopy box | 7 righe di disclaimer (🔨 + 5 bullet + nota finale). Troppo lungo, rischio di lettura saltata. |
| Campi | 14 per UDA, ben organizzati. |

### 1.10 Microcopy

| Testo | Valutazione |
|-------|-------------|
| "Non costituisce documento istituzionale" | Presente in 4+ punti (Home footer, Valutazione, UDA, Export). Efficace ma ridondante. |
| "Da adattare alla classe" | UDA. OK. |
| "Richiede validazione professionale del docente" | Valutazione + UDA. OK. |
| "Non sostituisce la progettazione" | UDA. OK. |
| "Documento di lavoro — da validare" | Export + Curricolo Definitivo. OK. |
| "Nessun dato viene salvato" | Valutazione + UDA. Ridondante — già implicito dal read-only. |
| "🔨 Area in costruzione" vs "🔨 Area in preparazione" | **Incoerenza**: Valutazione usa "Area in costruzione", Home card Didattica usa "Area in preparazione". |
| Footer lungo Home | 4 righe di microcopy. Da compattare. |

### 1.11 Accessibilità base

| Aspetto | Valutazione |
|---------|-------------|
| Struttura HTML | Nessun `<nav>`, `<main>`, `<section>` semantico. Tutto `<div>`. |
| Skip link | Assente. |
| Focus visible | `button:focus-visible` definito (da CML-009D). OK. |
| Emoji | Uso estensivo (📚, 🧑‍🏫, ✏️, ecc.). Alcune hanno funzione semantica (🟢/🟡 badge). |
| Contrasto | Badge 🟡 (#f9a825) su sfondo chiaro — potrebbe essere basso. |
| Colore | La comprensione non dipende dal solo colore (emoji + testo). OK. |
| Touch target | 44px bottom bar, 42-44px azioni card. OK. |
| Ridimensionamento testo | Non testato formalmente. |

---

## 2. Matrice problemi

| # | Area | Osservazione | Gravità | Evidenza | Impatto utente | Raccomandazione | Prossimo intervento |
|---|------|-------------|---------|----------|----------------|------------------|---------------------|
| 1 | Home | Link card Didattica "Prepara attività" e "Materiali per la classe" sono `<a href="#">` dimessi senza microcopy | **P1** | DOM: `href="#"`, nessun cursor change | Docente clicca e non succede nulla — frustrazione | Sostituire con testo dimesso o microcopy "Prossimamente" senza `<a>` | CML-073 |
| 2 | Navigazione | 7 tab desktop — soglia cognitiva alta | **P1** | Tabbar: 7 elementi | Utente deve ricordare 7 voci — dispersione | Raggruppare: max 5 tab + overflow menu | CML-072 (contratto) |
| 3 | Didattica/UDA | UDA sotto Valutazione/Evidenze — stessa pagina, stesso tab | **P1** | DOM: `#didattica-uda` dopo `#didattica-evidence` | Docente non vede UDA — scopribilità bassa | Separare in sotto-tab o sezione con heading visibile | CML-072 (contratto) |
| 4 | Export | 27 pulsanti export — ancora alta densità percepita | **P1** | Audit: exportButtons=27 | Utente si sente sovraccarico di opzioni | Ridurre a 1-2 primari, resto in secondario o icona | CML-073 |
| 5 | Tab "Didattica" | Porta a Valutazione/Evidenze, non a una dashboard Didattica | **P2** | setTab('didattica') = renderDidattica() | Docente cerca area Didattica e trova sub-modulo senza contesto | Aggiungere mini-dashboard o intestazione con sotto-navigazione | CML-072 (contratto) |
| 6 | Microcopy | "🔨 Area in costruzione" vs "Area in preparazione" — incoerenza | **P2** | Valutazione box vs Home card | Sembrano due sezioni diverse non collegate | Uniformare: usare sempre "Area in preparazione" | CML-073 |
| 7 | Microcopy | Disclaimer Valutazione: 6 righe (1 header + 4 bullet + footer) | **P2** | Sezione didattica-evidence header | Docente salta il contenuto — warning fatigue | Compattare: 1 riga + link "Perché questa nota?" | CML-073 |
| 8 | Microcopy | Disclaimer UDA: 7 righe (1 header + 5 bullet + footer) | **P2** | Sezione didattica-uda header | Idem | Idem | CML-073 |
| 9 | Navigazione | Breadcrumb assente su Home | **P2** | updateBreadcrumb() non chiamato per 'home' | Utente non sa dove si trova nel percorso | Aggiungere breadcrumb "Home" | CML-073 |
| 10 | Tecnologia | 3 click per raggiungere (Home → Consulta → ⚙️ Tecnologia normalizzata) | **P2** | Percorso: setTab('curricolo') → scroll → click tec-norm | Bassa scopribilità | Aggiungere link diretto da Home card Curriculum | CML-073 |
| 11 | Mobile | "Rev." e "Def." in bottom bar — abbreviazioni non auto-esplicative | **P2** | Bottom bar: "✏️ Rev." / "📋 Def." | Nuovo utente non capisce | Usare icone più chiare o label più lunghe su schermi ≥414px | CML-073 |
| 12 | Mobile | Menu overlay con 12+ voci — overload informativo | **P2** | Menu ☰: Fonti, Generali, Azioni, Salva, Backup... | Scroll verticale lungo per trovare voce | Raggruppare: max 8 voci, resto in secondo livello | CML-072 (contratto) |
| 13 | Microcopy | Home footer microcopy: 4 righe | **P2** | Sotto le 2 card | Testo lungo ignorato | Compattare a 2 righe + link "Maggiori informazioni" | CML-073 |
| 14 | Accessibilità | Nessuna struttura HTML semantica (`<nav>`, `<main>`, ecc.) | **P2** | DOM: tutto `<div>`/`<span>` | Screen reader non beneficia di landmark | Aggiungere ruoli ARIA e landmark region | CML-074+ |
| 15 | Design system | Nessuna distinzione formale tra pulsante primario/secondario | **P3** | CSS: nessuna classe `.btn-primary` / `.btn-secondary` | Incoerenza visiva tra azioni simili | Definire palette pulsanti nel contratto design system | CML-072 (contratto) |
| 16 | Design system | Tab misti: con icona (🏠 Home) e senza (Revisione) | **P3** | Tabbar: Home ha icona, Curricolo Definitivo no | Leggera incoerenza | Uniformare: tutte le tab con icona o tutte senza | CML-073 |
| 17 | UDA | "Progetta UDA" → setTab('didattica') non fa scroll a UDA | **P3** | setTab non chiama scroll alla sezione | Docente arriva nella pagina ma deve scorrere | Aggiungere `location.hash` o scrollTo dopo render | CML-073 |
| 18 | Accessibilità | Badge 🟡 (#f9a825) su sfondo chiaro — contrasto marginale | **P3** | CSS badge `Esempio didattico` | Leggibilità ridotta su schermi non ottimali | Scurire colore o aggiungere bordo | CML-074+ |

---

## 3. Cosa funziona bene

1. **Modello concettuale Curriculum/Didattica**: la separazione tra documento istituzionale e lavoro operativo è chiara e ben comunicata dalla Home
2. **Microcopy prudenziale**: "Non costituisce documento istituzionale", "Richiede validazione professionale", "Da adattare alla classe" — oneste e protettive
3. **Badge origine dati** 🟢 Dato curricolare / 🟡 Esempio didattico in UDA: trasparenza massima verso il docente
4. **Role-access gating**: codice operativo, non autenticazione, microcopy onesta — equilibrio tra protezione e accessibilità
5. **Version switcher 2012/2025**: chiaro, immediato, con stato documento
6. **Valutazione/Evidenze**: filtro ordine funzionante, card espandibili, dati collegati al curricolo
7. **Mobile bottom bar**: touch target adeguati (44-52px), 5 pulsanti, presenza costante
8. **Process tools**: "Strumenti di processo" toggle raggruppa Validazione + Referente — logico
9. **UDA read-only**: campi separati per origine dati, nessun campo editabile

---

## 4. Rischi UX

| Rischio | Probabilità | Impatto | Mitigazione |
|---------|-------------|---------|-------------|
| Utente non trova UDA (sotto Valutazione) | ALTA | MEDIO | Separare in navigazione o sotto-tab |
| Utente ignora warning box (7 righe) | ALTA | BASSO | Compattare microcopy |
| Confusione tra "Curricolo di Istituto" e "Sezioni Generali" | MEDIA | MEDIO | Rinominare o unificare |
| Frustrazione link Home Didattica inattivi | MEDIA | ALTO | Disabilitare visivamente senza `<a>` |
| Export overload — utente non sa quale formato scegliere | MEDIA | MEDIO | Ridurre a 1-2 primari visibili |
| Warning fatigue per microcopy ripetuta | ALTA | BASSO | Variare formulazione o nascondere in dettaglio |

---

## 5. Debiti UI

| Debito | Età (CML) | Impatto | Note |
|--------|-----------|---------|------|
| CSS `.local-save-bar` morto | CML-013F | Basso | Non rimosso, non visibile ma presente |
| Link dimessi `<a href="#">` | CML-065A | Medio | 2 link Didattica non funzionanti |
| Microcopy incoerente "costruzione"/"preparazione" | CML-068 | Basso | Da uniformare |
| Nessun `<nav>`/`<main>` semantico | Origine | Medio | Accessibilità |
| Breadcrumb assente su Home | CML-065A | Basso | Da aggiungere |
| Tab senza icone uniformi | Origine | Basso | Incoerenza visiva |
| Badge 🟡 contrasto marginale | CML-070 | Basso | Colore da scurire |

---

## 6. Proposta design system leggero

Componenti da definire nel contratto CML-072:

| Componente | Stato attuale | Regola proposta |
|------------|---------------|-----------------|
| **Pulsante primario** | Nessuna classe dedicata | `.btn-primary`: colore pieno, azione principale per contesto |
| **Pulsante secondario** | Nessuna classe dedicata | `.btn-secondary`: outline o colore neutro |
| **Link testuale** | Misto `<a>` e `<button>` | `<button>` per azioni, `<a>` per navigazione |
| **Card** | `.home-card`, `.didattica-evidence-card` | Unificare in `.card` + variazioni `.card--curriculum`, `.card--didattica` |
| **Badge** | Inline CSS color | `.badge` + `.badge--curricolare`, `.badge--esempio` |
| **Box avviso** | `.usage-notice`, `.didattica-evidence-warning` | Unificare in `.notice` + varianti `.notice--warning`, `.notice--info` |
| **Tab** | Mix icona/testo | Tutte con icona o tutte senza — decidere |
| **Toggle** | `.toolbar-toggle`, `.export-group` | Standardizzare con classe `.toggle` + `.toggle--content` |
| **Sezione read-only** | `.tecnologia-norm`, `.didattica-uda` | Badge "Read-only" standard in alto a destra |
| **Sezione prototipo** | `.didattica-evidence`, `.didattica-uda` | Badge "Prototipo" standard |
| **Filtro** | Inline | Classe `.filter-bar` con `.filter-pill` |

---

## 7. Roadmap raccomandata

```
CML-071 (questo) — Professional UI/UX System Audit
    │
    ▼
CML-072 — DESIGN_SYSTEM_AND_NAVIGATION_CONTRACT (docs-only)
    │   • Regole design system leggero (10 componenti)
    │   • Ri-organizzazione navigazione (max 5 tab)
    │   • Modello navigazione Didattica (sotto-tab o sezioni)
    │   • Standardizzazione microcopy
    │
    ▼
CML-073 — UI/UX RUNTIME CONSOLIDATION
    │   • Fix link Home Didattica inattivi (#1 P1)
    │   • Compattazione microcopy (Valutazione, UDA, Home footer)
    │   • Breadcrumb Home
    │   • Uniformare "costruzione"/"preparazione"
    │   • Scroll UDA da link Home
    │   • Riorganizzazione export (ridurre visibili)
    │
    ▼
CML-074 — ACCESSIBILITY RUNTIME INCREMENT
    │   • Aggiungere landmark ARIA
    │   • Skip link
    │   • Contrasto badge 🟡
    │
    ▼
Nuovi moduli funzionali (CML-075+)
```

---

## Verdetto

`CML_071_PROFESSIONAL_UI_UX_SYSTEM_AUDIT_READY`
