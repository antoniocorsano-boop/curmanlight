# CML UX Ergonomics Audit

## Stato della slice

- **Tipo**: audit-only / docs-only / UX strategy
- **Scope**: ergonomia, chiarezza, scroll, densità informativa, navigazione
- **Runtime analizzato**: `_published_snapshot/netlify-current/index.html`
- **Commit di partenza**: `c908afd`
- **Verdetto**: `CML_UX_ERGONOMICS_AUDIT_READY`

## Obiettivo

Auditare l'esperienza utente dello strumento pubblicato, con attenzione a ergonomia, chiarezza, scroll, densità informativa, navigazione e semplicità d'uso per utenti scolastici non tecnici (docenti, dipartimenti, referenti, dirigente/staff).

## Vincoli rispettati

- Nessuna modifica runtime applicata
- Branch: `main`
- Working tree: pulito

## Metodo di audit

Analisi per vista delle 9 schermate principali dello strumento, con misurazione di:

- Azione primaria e azioni secondarie
- Blocchi informativi visibili
- Profondità scroll stimata
- Ambiguïtà e coerenza titolo/menu/stato/contenuto
- Rischio sovraccarico cognitivo

## Viste analizzate

### Home

- **Azione primaria**: Entrare nell'area operativa (Curriculum o Competenze)
- **Azioni secondarie**: Impostazioni, Corso PDF, Motto, Guida
- **Blocchi informativi**: Header, stats, 2 home card, footer, microguida
- **Scroll stimato**: 1–2 schermate
- **Problema**: Stats tecniche premature per utente al primo accesso
- **Rischio**: Basso
- **Coerenza**: Alta

### Curriculum / Consulta

- **Azione primaria**: Selezionare una disciplina
- **Azioni secondarie**: Cambiare versione (2012/2025), filtri ordine, toggle dettagli
- **Blocchi informativi**: Header disciplina, versione-tabs, sidebar, indice, contenuti, badge, fonti, note
- **Scroll stimato**: 3–5 schermate
- **Problema**: Sidebar e azioni editoriali visibili in modalità consultativa
- **Rischio**: Medio–alto

### Curriculum / Revisione

- **Azione primaria**: Controlla voci / Approva o Modifica
- **Azioni secondarie**: Filtri, export multipli, import `.cml`, sidebar, reset
- **Blocchi informativi**: Cruscotto, toolbar, sidebar, cards confronto, export panel, import panel, progress bar, quick-actions
- **Scroll stimato**: 4–6 schermate
- **Problema**: Azioni di esportazione duplicate rispetto a scheda Esportazioni
- **Rischio**: Alto

### Curriculum / Definitivo

- **Azione primaria**: Esporta Word definitivo
- **Azioni secondarie**: Copia Markdown, PDF, `.cml`, Drive, backup
- **Blocchi informativi**: Sum-box, export-group, stats, note
- **Scroll stimato**: 2–3 schermate
- **Problema**: Export ridondanti duplicati rispetto a tab Esportazioni
- **Rischio**: Medio

### Curriculum / Fonti

- **Azione primaria**: Leggere/navigare fonti
- **Azioni secondarie**: Scarica PDF, apri link
- **Blocchi informativi**: Lista fonti, note, link
- **Scroll stimato**: 1–2 schermate
- **Problema**: Sidebar visibile (non necessaria)
- **Rischio**: Basso
- **Coerenza**: Alta

### Competenze e progettazione — Evidenze

- **Azione primaria**: Adotta / Adatta / Escludi
- **Azioni secondarie**: Filtri ordine, reset marcature, consulta curricolo
- **Blocchi informativi**: Header, notice, stats, filtri, lista evidenze, badge, azioni
- **Scroll stimato**: 3–6 schermate
- **Problema**: Disclaimer tecnici miscelati con contenuto operativo
- **Rischio**: Medio–alto

### Competenze e progettazione — UDA modello

- **Azione primaria**: Genera bozza UDA
- **Azioni secondarie**: Copia Markdown, Scarica Markdown
- **Blocchi informativi**: Selector disciplina/unità, azioni, preview textarea, notice
- **Scroll stimato**: 2–3 schermate
- **Problema**: Mappa disciplinare apribile nella stessa vista
- **Rischio**: Medio

### Esportazioni

- **Azione primaria**: Scegliere formato e generare
- **Azioni secondarie**: Copia, download, Drive, backup, resoconti
- **Blocchi informativi**: Gruppi export (istituzionale, dipartimento, disciplina)
- **Scroll stimato**: 3–5 schermate
- **Problema**: Azioni duplicate rispetto a Revisione/Definitivo
- **Rischio**: Alto

### Guida

- **Azione primaria**: Leggere/navigare guide
- **Azioni secondarie**: Nessuna
- **Blocchi informativi**: Card documentative, link
- **Scroll stimato**: 2–3 schermate
- **Rischio**: Basso
- **Coerenza**: Alta

## Metriche applicate

| Metrica | Soglia / criterio | Esito sintetico |
|---|---|---|
| Una schermata = una decisione principale | Revisione, Esportazioni, Didattica violano | NO |
| Azione primaria visibile senza scroll | Solo Home/Definitivo parzialmente | PARZIALE |
| Max 2 livelli navigazione simultanei | tabbar + subnav | OK |
| Max 1 pulsante primario per area decisionale | Spesso violato | NO |
| Clic per consultare disciplina | Spesso 3 | ALTO |
| Clic per prima azione revisione | Spesso 2 da Home | MEDIO |
| Vista oltre 3 schermate verticali | Consulta, Revisione, Didattica, Esportazioni | SI |
| Badge/stati/avvisi nella prima schermata | Molti visibili in load | NO |
| Menu, hash, titolo e contenuto coerenti | Non sempre | PARZIALE |
| Linguaggio comprensibile a docente non tecnico | Con eccezioni | SI |

## Problemi classificati

### P0 — Disorientamento o blocco

- **Navigazione ibrida hash + subnav non sincronizzata**: l'hash `#cur-{disciplina}` governa Curriculum ma non sincronizza Revisione/Didattica/Esportazioni
- **Sidebar contestuale errata**: sidebar discipline visibile anche in Fonti
- **Discoverability UDA**: voce "Competenze e progettazione" porta a Evidenze prima di UDA senza heading di secondo livello

### P1 — Fatica elevata o rischio errore

- **Scroll prolungati**: 4–6 schermate in Revisione e Competenze; 3–5 in Consulta/Esportazioni
- **Export duplicati in 3 punti**: Revisione toolbar, Definitivo export-group, Esportazioni gruppo
- **Azione multipla concorrente**: 5+ azioni visibili contemporaneamente in stessa vista
- **Tabbar 5 viste + subnav 4 voci**: soglia cognitiva vicina al limite

### P2 — Miglioria importante

- **Assenza breadcrumb**: percorso corrente non chiarificato
- **Disclaimer verbosi**: notice box 4–7 righe, warning fatigue
- **Design system non formalizzato**: mix stili tra tab, badge, toggle, bottoni
- **Stat counters in Home**: info tecniche premature per primo accesso

### P3 — Rifinitura

- **Microcopy lunga** in footer e note
- **Incoerenze stilistiche minori**: badge con/senza bordo, ombre differenziate
- **Abbreviazioni mobile**: "Rev." / "Def." poco auto-esplicative
- **Touch target marginali** in toolbar a viewport ridotta

## Proposta di architettura UX

### Consulta

Solo lettura, nessuna sidebar/azioni editoriali visibili. Indice accordion per ordine scuola.

### Revisione

Cards confronto + sidebar disciplina. Export in pannello unico richiamabile da toggle. Import/validazione separato. Riepilogo iniziale (conteggio voci).

### Esportazioni

Unico pannello contestuale per ruolo/tab. Eliminare export-replica da Revisione e Definitivo. Raggruppamento per destinazione.

### Fonti

Lista fonti + filtro per tipologia. Sidebar rimossa.

### Competenze e progettazione

Due sottoview chiare: Evidenze e UDA modello. Mappa disciplinare in vista dedicata o accordion compresso.

### Guida

Invariata. Mantenere struttura attuale.

## Gate di accettazione per le prossime slice

- Vista Revisione sotto 3 schermate
- Export centralizzato in Esportazioni
- Sidebar assente in Fonti e viste readonly
- Breadcrumb presente in tutte le viste
- Una sola azione primaria per area decisionale

## Verdict finale

`CML_UX_ERGONOMICS_AUDIT_READY`
