# DESIGN SYSTEM AND NAVIGATION CONTRACT

**Stato:** Contratto stabile
**Riferimento:** CML-072 (questo contratto)
**App:** CurManLight — app statica
**Base:** Audit CML-071 (P1=4, P2=10, P3=6)

---

## 1. Principi UI/UX

1. **Una schermata, un compito principale.** Ogni vista ha una sola azione primaria riconoscibile.
2. **Prima l'area, poi l'azione.** L'utente sceglie Curriculum o Didattica prima di vedere pulsanti operativi.
3. **Curriculum e Didattica devono restare distinti visivamente e concettualmente.** Il primo è istituzionale, la seconda è operativa.
4. **Le funzioni istituzionali non devono sembrare funzioni didattiche.** Niente UDA in Curriculum, niente revisione normativa in Didattica.
5. **Le funzioni didattiche read-only non devono sembrare editor.** Nessun campo editabile, nessun salvataggio, nessun falso "modifica".
6. **Export/report sono strumenti secondari, non navigazione primaria.** Non compaiono nella tab principale.
7. **Le azioni protette sono riconoscibili ma non dominanti.** Badge "codice operativo", non blocchi intrusivi.
8. **Mobile-first: nessuna sezione dipende da layout largo.** Ogni vista funziona su 360px.
9. **Microcopy breve, docente-oriented, non tecnico.** Frasi dirette, nessun termine IT.
10. **Ogni prototipo dichiara il proprio stato.** Badge "Prototipo", "Read-only", "In preparazione" standardizzati.

---

## 2. Architettura informativa target

### Aree principali (max 5)

```
Home
├── Curriculum
│   ├── Consultazione curricolo (viewer 2012/2025, sezioni generali, riferimenti)
│   ├── Tecnologia normalizzata (consultazione pacchetto pilota)
│   ├── Revisione (proposte, decisioni, confronto)
│   ├── Validazione (dipartimento, referente)
│   └── Esportazione / Report (output istituzionali)
│
├── Didattica
│   ├── Valutazione / Evidenze
│   ├── UDA modello
│   ├── [futuri: Attività, Materiali, Programmazione]
│   └── [future: Archivio didattico]
│
├── Esportazioni / Consegne
│   ├── Export docente (.cml, Word, Markdown, PDF)
│   ├── Report gruppo curricolo
│   ├── Esito dipartimentale
│   └── Backup / Drive
│
└── Guida / Info
    ├── Istruzioni
    ├── Limiti e validazione umana
    ├── Codice operativo
    └── Uso locale / installazione
```

### Regole

- **Curriculum** contiene solo consultazione, revisione, validazione, esportazione istituzionale.
- **Didattica** contiene solo progettazione operativa: UDA, attività, valutazione, materiali.
- **Esportazioni / Consegne** raccoglie tutti gli output (export, report, .cml, handoff). Non mescolato con consultazione.
- **Guida / Info** raccoglie istruzioni, limiti, installazione, codice operativo — non è primaria.
- **Nessuna funzione compare in due aree.**

---

## 3. Navigazione target

### Desktop (≥901px) — 5 tab massimo

| Posizione | Tab | Destinazione | Icona |
|-----------|-----|-------------|-------|
| 0 | Home | Dashboard due aree | 🏠 |
| 1 | Curriculum | Consultazione curricolo + sotto-navigazione | 📚 |
| 2 | Didattica | Panoramica Didattica + sotto-navigazione | 🧑‍🏫 |
| 3 | Esportazioni | Export, report, .cml, handoff | 📤 |
| 4 | Guida | Istruzioni, limiti, codice | ❔ |

### Tab secondari / sotto-navigazione

Dentro Curriculum:
- Consultazione (default)
- Revisione
- Validazione

Dentro Didattica:
- Valutazione / Evidenze (default)
- UDA modello
- [futuri moduli]

Dentro Esportazioni:
- Export docente
- Report gruppo
- Esito dipartimentale
- Backup / Drive

### Mobile (≤900px) — bottom bar 5 voci

| Posizione | Voce | Icona |
|-----------|------|-------|
| 0 | Home | 🏠 |
| 1 | Curriculum | 📚 |
| 2 | Didattica | 🧑‍🏫 |
| 3 | Esporta | 📤 |
| 4 | Menu | ☰ |

Menu ☰ contiene:
- Guida
- Impostazioni leggere
- Info progetto / limiti
- Version switcher
- Blocca codice operativo

### Regole navigazione

1. **Massimo 5 voci principali.** Oltre: menu secondario o sotto-navigazione.
2. **Ogni tab principale è un'area, non uno strumento.** Non esistono tab per singole funzioni.
3. **Didattica ha una panoramica iniziale**, non apre direttamente su Valutazione/Evidenze.
4. **Esportazioni non sono disseminate nei tab.** Unico punto di raccolta.
5. **Guida non è "Menu generico".** Ha contenuto informativo proprio.
6. **Mobile bottom bar rispecchia la navigazione desktop**, con "Menu" per voci eccedenti.

---

## 4. Regole Home

### Cosa la Home deve fare

- Mantenere le 2 aree (Curriculum, Didattica) come card principali.
- Mostrare **massimo 3 azioni per area**.
- Distinguere visivamente:
  - **Azione disponibile** → link attivo, stile normale
  - **Azione in preparazione** → testo dimesso, badge "In preparazione", nessun `<a>` cliccabile
  - **Azione protetta** → badge "Codice operativo"
  - **Azione informativa** → link a Guida o Info
- Non mostrare export/report come azione primaria.
- Breadcrumb visibile: "Home".

### Cosa la Home non deve fare

- Non sostituisce le sezioni.
- Non esegue azioni operative (export, salvataggio, revisione).
- Non mostra stato di revisione o cruscotto operativo.
- Non ha menu Azioni (⚙️) — le azioni sono nelle rispettive aree.

### Trattamento link Home

| Stato | Markup | Microcopy |
|-------|--------|-----------|
| Funzionante | `<a onclick="setTab(...)">` | Nome azione |
| In preparazione | `<span class="dimmed">` + badge | "In preparazione" |
| Protetto | `<a>` + badge | "Richiede codice operativo" |
| Informativo | `<a>` a Guida | "Maggiori informazioni" |

### Regola link inattivi

> **Nessun `<a href="#">` nella Home.** Se una funzione non è pronta, non deve apparire come link. Deve apparire come testo dimesso con badge "In preparazione".

---

## 5. Regole Curriculum

### Identità

Area istituzionale. Serve a **consultare, revisionare, validare ed esportare** il curricolo di istituto. Dice **che cosa** la scuola dichiara come offerta formativa verticale.

### Contenuto

| Sottoarea | Contenuto | Stato attuale |
|-----------|-----------|---------------|
| Consultazione | Viewer 2012/2025, sezioni generali, riferimenti normativi | ✅ Pubblicato |
| Tecnologia normalizzata | Pacchetto pilota read-only in Consultazione | ✅ Pubblicato |
| Revisione | Proposte, decisioni, confronto testo | ✅ Pubblicato |
| Validazione | Dipartimentale + referente (protetto) | ✅ Pubblicato |
| Esportazione / Report | Export istituzionali, report, .cml | ✅ Pubblicato |

### Pattern visivi

- **Consultazione** = card informative, nessuna azione primaria.
- **Revisione** = azione guidata, toggle per dettagli, badge stato.
- **Validazione** = processo protetto, badge "Codice operativo".
- **Esportazione / Report** = sezione strumenti, non primaria.

### Non contiene

- UDA
- Attività didattiche
- Materiali per la classe
- Programmazione annuale docente

---

## 6. Regole Didattica

### Identità

Area operativa. Serve a **trasformare il curricolo in progettazione concreta**. Dice **come** il docente realizza in classe ciò che il curricolo dichiara.

### Struttura target (senza modificare runtime)

```
Didattica
├── Panoramica (intestazione, stato area)
├── Valutazione / Evidenze
├── UDA modello
├── [futuri: Attività, Materiali, Programmazione]
```

### Regola UDA

- **UDA non deve stare sotto Valutazione/Evidenze.** Deve avere sezione separata nella navigazione Didattica.
- UDA deve mantenere badge origine dati 🟢/🟡 invariati.
- UDA deve restare read-only fino a nuovo contratto che definisca editor/salvataggio.
- "Progetta UDA" dalla Home deve navigare direttamente alla sezione UDA.

### Regola stato

- Ogni sotto-sezione Didattica dichiara il proprio stato:
  - "Prototipo" per moduli iniziali
  - "Read-only" per nessun salvataggio
  - "In preparazione" per moduli futuri

### Non contiene

- Approvazione istituzionale del curricolo
- Validazione collegiale definitiva
- Revisione normativa
- Esportazione esito dipartimentale `.cml`

---

## 7. Regole Esportazioni / Consegne

### Identità

Area strumentale secondaria. Raccoglie tutti gli output in un unico punto, senza mescolarli con consultazione o didattica.

### Contenuto target

| Strumento | Destinatario | Formato |
|-----------|-------------|---------|
| Export proposta docente | Docente | `.cml` |
| Export esito dipartimentale | Dipartimento | `.cml` |
| Report gruppo curricolo | Referente | Markdown |
| Export Word confronto | Scuola | Word |
| Export Word definitivo | Scuola | Word |
| Copy Markdown | Scuola | Markdown |
| PDF confronto/definitivo | Scuola | PDF |
| Backup / Drive | Scuola | `.cml` |

### Regole

1. **Un unico tab "Esportazioni"** — non disseminate in Curriculum/Revisione.
2. Raggruppate per **scopo** (docente, dipartimento, referente, backup).
3. **Massimo 3 pulsanti visibili** per gruppo. Il resto sotto toggle.
4. **Non modificare** schema `.cml`, comportamento export, logica generazione.
5. **Mantenere** pulsante "Scarica proposta .cml" e "Invia al Drive" esistenti.

---

## 8. Design system leggero

### 8.1 Pulsanti

| Classe | Uso | Aspetto target |
|--------|-----|----------------|
| `.btn-primary` | Una sola azione principale per blocco | Colore pieno, peso semibold |
| `.btn-secondary` | Azione utile non principale | Outline, colore neutro |
| `.btn-tertiary` | Navigazione o dettaglio | Link testuale, nessun bordo |
| `.btn-danger` | Reset, eliminazione, blocco | Rosso, outline o pieno |
| `.btn-protected` | Azione con codice operativo | Badge "Codice operativo" integrato |
| `.btn-icon` | Solo icona (azione nota) | Senza testo, tooltip |

Regola: **mai più di un `.btn-primary` visibile per blocco**.

### 8.2 Card

| Classe | Tipo | Contenuto |
|--------|------|-----------|
| `.card--area` | Card area principale (Home) | Icona, titolo, descrizione, link |
| `.card--unit` | Card unità curricolare | Titolo, badge, dettaglio espandibile |
| `.card--uda` | Card UDA | Campi con badge origine, read-only |
| `.card--info` | Card informativa | Testo, link, nessuna azione |
| `.card--warning` | Avviso o limite | Bordo colorato, icona avviso |
| `.card--status` | Stato sezione | Badge, microcopy breve |

### 8.3 Badge

| Classe | Testo | Colore |
|--------|-------|--------|
| `.badge--readonly` | Read-only | Grigio |
| `.badge--prototype` | Prototipo | Viola |
| `.badge--curricolare` | Dato curricolare | Verde 🟢 |
| `.badge--esempio` | Esempio didattico | Ambra scuro 🟡 |
| `.badge--code` | Codice operativo | Arancione |
| `.badge--validation` | Richiede validazione umana | Giallo |
| `.badge--preparing` | In preparazione | Grigio chiaro |

### 8.4 Pannelli espandibili (toggle)

| Classe | Uso |
|--------|-----|
| `.toggle` | Contenitore toggle con header cliccabile |
| `.toggle--content` | Contenuto nascosto/mostrato |
| `.toggle--export` | Export avanzati |
| `.toggle--process` | Strumenti di processo |
| `.toggle--notes` | Note lunghe / microcopy |

Regola: **non usare toggle per nascondere il compito principale della pagina.**

### 8.5 Box informativi

| Classe | Tipo | Colore bordo |
|--------|------|-------------|
| `.notice--info` | Informazione | Blu |
| `.notice--warning` | Avviso / limite | Arancione |
| `.notice--danger` | Attenzione / blocco | Rosso |
| `.notice--success` | Conferma | Verde |
| `.notice--prototype` | Stato prototipo | Viola |

### 8.6 Tab

- Tutti i tab principali con icona.
- Tab attivo: sottolineatura o colore pieno.
- Tab secondario (sotto-navigazione): solo testo, dimensione minore.
- Massimo 5 tab primari.

### 8.7 Filtri

| Classe | Uso |
|--------|-----|
| `.filter-bar` | Barra filtri orizzontale |
| `.filter-pill` | Singolo filtro (selezionabile) |
| `.filter-pill--active` | Filtro attivo |

### 8.8 Sezioni read-only

- Badge "Read-only" standard in alto a destra della sezione.
- Nessun campo `<input>`, `<textarea>`, `contenteditable`.
- Microcopy standard: "Prototipo read-only — nessun dato viene salvato."

### 8.9 Sezioni protette

- Badge "Codice operativo" accanto al titolo.
- Pannello visibile ma azioni bloccate fino a sblocco.
- "Blocca di nuovo" sempre presente dopo sblocco.

---

## 9. Microcopy

### Regole generali

1. **Frasi brevi** (max 15 parole per frase informativa).
2. **Niente termini IT**: "read-only" va accompagnato o sostituito.
3. **Niente inglese non necessario**: preferire italiano.
4. **Coerenza**: stessi concetti, stesse parole.
5. **Una volta per sezione**: non ripetere lo stesso avviso in ogni card.

### Glossario microcopy

| Situazione | Testo target |
|------------|-------------|
| Azione disponibile | "Consulta il curricolo" / "Rivedi proposte" |
| Azione protetta | "Richiede codice operativo" |
| In preparazione | "In preparazione" |
| Modello non approvato | "UDA modello — da adattare alla classe" |
| Dato dal curricolo | "Dato curricolare" (🟢) |
| Dato di esempio | "Esempio didattico" (🟡) |
| Stato read-only | "Prototipo read-only — nessun dato viene salvato" |
| Validazione necessaria | "Richiede validazione professionale del docente" |
| Non documento ufficiale | "Non costituisce documento istituzionale approvato" |
| Non sostituisce docente | "Non sostituisce la progettazione del docente" |
| Export disclaimer | "Documento di lavoro — da validare" |
| Home separazione | "Curriculum e Didattica restano separati" |
| Area in allestimento | "In preparazione" (sempre uguale, mai "in costruzione") |

### Casi da evitare

- "🔨 Area in costruzione" → usare sempre "In preparazione"
- "Nessun dato viene salvato" in ogni card → una volta per sezione
- "Non costituisce documento istituzionale" in Home footer + sezioni → una volta per area

---

## 10. Accessibilità base

| Regola | Specifica |
|--------|-----------|
| Contrasto badge | Badge 🟡: colore da #f9a825 a #e65100 o aggiungere bordo scuro |
| Colore + testo | Nessuna informazione data solo dal colore |
| Focus visibile | `button:focus-visible` già presente — estendere a link e toggle |
| Touch target | Minimo 44px per azioni tattili (già coperto su bottom bar) |
| Azioni = button, Nav = link | `<button>` per azioni, `<a>` per navigazione tra sezioni |
| Icone + testo | Ogni icona accompagnata da testo (già presente) |
| Titoli gerarchici | `<h1>` per Home, `<h2>` per sezioni, `<h3>` per sotto-sezioni |
| Landmark | Aggiungere `<nav>`, `<main>`, `<section>` con ruoli ARIA in CML-074 |

---

## 11. Priorità runtime successive

### Raccomandazione

**CML-073 — NAVIGATION_AND_HOME_LINKS_RUNTIME_INCREMENT**

### Cosa risolve (mapping problemi CML-071)

| # | Problema CML-071 | Gravità | Soluzione CML-073 |
|---|-----------------|---------|-------------------|
| 1 | Link Home Didattica inattivi | P1 | Sostituire `<a href="#">` con `<span>` dimesso + badge "In preparazione" |
| 2 | 7 tab desktop | P1 | Riorganizzare in 5 tab + sotto-navigazione: Home, Curriculum, Didattica, Esportazioni, Guida |
| 3 | UDA sotto Valutazione/Evidenze | P1 | Separare UDA in sotto-sezione autonoma entro Didattica; scroll diretto da Home |
| 4 | 27 pulsanti export | P1 | Raccogliere export in tab "Esportazioni", ridurre a 3 primari per gruppo |
| 5 | Tab Didattica senza dashboard | P2 | Aggiungere panoramica Didattica all'apertura del tab |
| 6 | Microcopy "costruzione"/"preparazione" | P2 | Uniformare a "In preparazione" |
| 7-8 | Disclaimer lunghi Valutazione/UDA | P2 | Compattare a 1 riga + link "Perché questa nota?" |
| 9 | Breadcrumb Home assente | P2 | Aggiungere |
| 10 | Tecnologia a 3 click | P2 | Link diretto da Home card Curriculum |
| 11 | Abbreviazioni mobile | P2 | "Rev." → "Revisione" su ≥414px |
| 12 | Menu overlay 12+ voci | P2 | Raggruppare, max 8 voci |
| 13 | Home footer microcopy lunga | P2 | Compattare a 2 righe |
| 16 | Tab senza icone uniformi | P3 | Uniformare |
| 17 | Scroll UDA da Home | P3 | Aggiungere scrollTo |

### Interventi esclusi da CML-073 (previsti per CML-074+)

| # | Problema | Gravità | Intervento |
|---|---------|---------|------------|
| 14 | Struttura HTML semantica | P2 | Landmark ARIA, skip link |
| 15 | Classi primario/secondario | P3 | Applicazione classi design system |
| 18 | Contrasto badge 🟡 | P3 | Colore da scurire |

### Roadmap

```
CML-072 (questo) — DESIGN_SYSTEM_AND_NAVIGATION_CONTRACT
    │
    ▼
CML-073 — NAVIGATION_AND_HOME_LINKS_RUNTIME_INCREMENT
    │   Risolve: P1 #1 #2 #3 #4, P2 #5 #6 #7 #8 #9 #10 #11 #12 #13, P3 #16 #17
    │   Non tocca: schema .cml, export logiche, ruolo gating, curriculum viewer
    │
    ▼
CML-074 — ACCESSIBILITY_AND_VISUAL_POLISH_RUNTIME_INCREMENT
    │   Risolve: P2 #14, P3 #15 #18
    │
    ▼
CML-075+ — Nuovi moduli funzionali
```

---

## 12. Non-obiettivi

Questo contratto **non**:

- Modifica il runtime.
- Cambia UI live.
- Fa deploy.
- Modifica schema `.cml`.
- Introduce editor UDA.
- Introduce export UDA.
- Introduce salvataggi.
- Introduce backend/API/login/OAuth.
- Crea nuovo design visuale completo (fogli di stile nuovi).
- Aggiunge nuove funzioni.
- Risolve problemi di accessibilità strutturale (P2 #14, P3 #18 — rinviati a CML-074).
- Applica le classi design system al runtime (sarà in CML-073/CML-074).

---

## 13. Appendice — Riferimenti

| Documento | Relazione |
|-----------|-----------|
| `docs/03_execution/CML-071.md` | Audit UI/UX — input problemi |
| `report/CML-071_professional_ui_ux_system_audit.md` | Audit dettagliato — matrice 18 problemi |
| `docs/02_system/PRODUCT-MODEL-CURRICULUM-DIDATTICA-CONTRACT.md` | Modello prodotto — base del presente contratto |
| `docs/02_system/ROLE-ACCESS-CODE-GATING-CONTRACT.md` | Contratto codice operativo |
| `docs/03_execution/CML-065.md` | Allineamento modello prodotto |
| `docs/03_execution/CML-066.md` | Riduzione densità azioni |
| `docs/03_execution/CML-068.md` | Prototipo Didattica Valutazione/Evidenze |
| `docs/03_execution/CML-070.md` | Prototipo UDA read-only |
