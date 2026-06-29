# CML-UX-ERGONOMICS-AUDIT — Audit ergonomia UX

Data: 2026-06-29

## Contesto

- Branch: `main`
- Commit di partenza: `c908afd`
- Working tree: pulito
- Runtime analizzato: `_published_snapshot/netlify-current/index.html`
- Tipo slice: audit-only / docs-only / UX strategy
- Nessuna modifica runtime applicata

## Obiettivo

Verificare ergonomia, chiarezza, scroll, densita informativa, navigazione e semplicita d’uso per utenti scolastici non tecnici (docenti, dipartimenti, referenti, dirigente/staff).

## 1. Mappa delle viste principali

| # | Vista | Sotto-vista | Descrizione sintetica |
|---|---|---|---|
| 1 | Home | — | Orientamento, quick-start e microguida operativa |
| 2 | Curriculum | Consulta | Lettura consultativa del curricolo di istituto |
|   |           | Revisione | Confronto 2012/2025 e proposta modifiche |
|   |           | Definitivo | Riepilogo voci approvate e output formale |
|   |           | Fonti | Riferimenti normativi e documenti |
| 3 | Competenze e progettazione | Valutazione / Evidenze | Marcatura locale evidenze per UDA |
|   |                            | UDA modello | Generazione bozza Markdown UDA |
| 4 | Esportazioni | — | Export multi-formato e consegne |
| 5 | Guida | — | Documentazione in-app |

### Viste contestuali

- Sidebar discipline (Curriculum/Competenze)
- Toolbar filtri/export (Revisione)
- Mappa disciplinare (Competenze, dettaglio)
- Role-access dialog (accesso aree protette)
- Quick-actions cruscotto (azioni rapide)

### Flusso decisionale principale (ruoli)

- **Docente**: Consulta → Revisione → Esportazioni
- **Dipartimento**: Validazione (import esiti) + consultazione
- **Referente**: Import esiti + resoconto gruppo di lavoro
- **Dirigente/Staff**: Consulta + Guida/approfondimenti

## 2. Analisi per vista

### 2.1 Home

| Aspetto | Valutazione |
|---|---|
| Obiettivo principale | Orientamento rapido e riduzione anxiety da primo accesso |
| Azione primaria | Entrare nell’area operativa (Curriculum o Competenze) |
| Azioni secondarie | Impostazioni, Corso PDF, Motto, Guida |
| Blocchi informativi visibili | Header, stats, 2 home card, footer, microguida |
| Profondita scroll stimata | 1–2 schermate |
| Contenuto non pertinente alla vista | Stats tecniche premature per utente al primo accesso |
| Ambiguita | Bassa |
| Coerenza titolo/menu/stato/contenuto | Alta |
| Rischio sovraccarico cognitivo | Basso |

### 2.2 Curriculum / Consulta

| Aspetto | Valutazione |
|---|---|
| Obiettivo principale | Lettura/autorizzazione documento curricolare |
| Azione primaria | Selezionare una disciplina |
| Azioni secondarie | Cambiare versione (2012/2025), filtri ordine, toggle dettagli |
| Blocchi informativi visibili | Header disciplina, versione-tabs, sidebar, indice, contenuti, badge, fonti, note |
| Profondita scroll stimata | 3–5 schermate |
| Contenuto non pertinente | Sidebar e azioni editoriali visibili in modalita consultativa |
| Ambiguita | Media (Consulta vs Revisione non sempre distinte chiaramente) |
| Coerenza titolo/menu/stato/contenuto | Media |
| Rischio sovraccarico cognitivo | Medio–alto |

### 2.3 Curriculum / Revisione

| Aspetto | Valutazione |
|---|---|
| Obiettivo principale | Confronto e proposta modifiche IN2012→IN2025 |
| Azione primaria | Controlla voci / Approva o Modifica |
| Azioni secondarie | Filtri, export multipli, import .cml, sidebar, reset |
| Blocchi informativi visibili | Cruscotto, toolbar, sidebar, cards confronto, export panel, import panel, progress bar, quick-actions |
| Profondita scroll stimata | 4–6 schermate |
| Contenuto non pertinente | Azioni di esportazione duplicate rispetto a scheda Esportazioni |
| Ambiguita | Alta (azioni di esportazione/import/validazione coesistono senza filtro percettivo) |
| Coerenza titolo/menu/stato/contenuto | Bassa |
| Rischio sovraccarico cognitivo | Alto |

### 2.4 Curriculum / Definitivo

| Aspetto | Valutazione |
|---|---|
| Obiettivo principale | Riepilogo esiti e preparazione output ufficiale |
| Azione primaria | Esporta Word definitivo |
| Azioni secondarie | Copia Markdown, PDF, .cml, Drive, backup |
| Blocchi informativi visibili | Sum-box, export-group, stats, note |
| Profondita scroll stimata | 2–3 schermate |
| Contenuto non pertinente | Export ridondanti duplicati rispetto a tab Esportazioni |
| Ambiguita | Media |
| Coerenza titolo/menu/stato/contenuto | Media |
| Rischio sovraccarico cognitivo | Medio |

### 2.5 Curriculum / Fonti

| Aspetto | Valutazione |
|---|---|
| Obiettivo principale | Consultare riferimenti normativi |
| Azione primaria | Leggere/navigare fonti |
| Azioni secondarie | Scarica PDF, apri link |
| Blocchi informativi visibili | Lista fonti, note, link |
| Profondita scroll stimata | 1–2 schermate |
| Contenuto non pertinente | Sidebar visibile (non necessaria) |
| Ambiguita | Bassa |
| Coerenza titolo/menu/stato/contenuto | Alta |
| Rischio sovraccarico cognitivo | Basso |

### 2.6 Competenze e progettazione — Valutazione / Evidenze

| Aspetto | Valutazione |
|---|---|
| Obiettivo principale | Marcare evidenze per UDA |
| Azione primaria | Adotta / Adatta / Escludi |
| Azioni secondarie | Filtri ordine, reset marcature, consulta curricolo |
| Blocchi informativi visibili | Header, notice, stats, filtri, lista evidenze, badge, azioni |
| Profondita scroll stimata | 3–6 schermate (dipende da numero unita per ordine) |
| Contenuto non pertinente | Disclaimer tecnici/gap 2025 miscelati con contenuto operativo |
| Ambiguita | Media (evidenze vs criteria vs UDA nella stessa area) |
| Coerenza titolo/menu/stato/contenuto | Media |
| Rischio sovraccarico cognitivo | Medio–alto |

### 2.7 Competenze e progettazione — UDA modello

| Aspetto | Valutazione |
|---|---|
| Obiettivo principale | Generare bozza UDA dalle evidenze marcate |
| Azione primaria | Genera bozza UDA |
| Azioni secondarie | Copia Markdown, Scarica Markdown |
| Blocchi informativi visibili | Selector disciplina/unità, azioni, preview textarea, notice |
| Profondita scroll stimata | 2–3 schermate |
| Contenuto non pertinente | Mappa disciplinare apribile nella stessa vista |
| Ambiguita | Media (mappa disciplinare come dettaglio ancillare) |
| Coerenza titolo/menu/stato/contenuto | Media |
| Rischio sovraccarico cognitivo | Medio |

### 2.8 Esportazioni

| Aspetto | Valutazione |
|---|---|
| Obiettivo principale | Produrre output in formati diversi |
| Azione primaria | Scegliere formato e generare |
| Azioni secondarie | Copia, download, Drive, backup, resoconti |
| Blocchi informativi visibili | Gruppi export (istituzionale, dipartimento, disciplina) |
| Profondita scroll stimata | 3–5 schermate |
| Contenuto non pertinente | Azioni duplicate rispetto a tab Revisione/Definitivo |
| Ambiguita | Alta (stesse funzionalita offerte in luoghi multipli) |
| Coerenza titolo/menu/stato/contenuto | Bassa |
| Rischio sovraccarico cognitivo | Alto |

### 2.9 Guida

| Aspetto | Valutazione |
|---|---|
| Obiettivo principale | Fornire documentazione operativa |
| Azione primaria | Leggere/navigare guide |
| Azioni secondarie | Nessuna azione operativa |
| Blocchi informativi visibili | Card documentative, link |
| Profondita scroll stimata | 2–3 schermate |
| Contenuto non pertinente | — |
| Ambiguita | Bassa |
| Coerenza titolo/menu/stato/contenuto | Alta |
| Rischio sovraccarico cognitivo | Basso |

## 3. Classificazione problemi UX (P0–P3)

### P0 — Blocca o disorienta

- **Navigazione ibrida hash + subnav non sincronizzata**: l’hash `#cur-{disciplina}` governa Curriculum, ma non sincronizza Revisione/Didattica/Esportazioni. Cambiando tab si mantiene stato precedente senza feedback visivo coerente.
- **Sidebar contestuale errata**: la sidebar discipline rimane visibile anche in Fonti e altre view dove non serve, disorientando l’utente.
- **Discoverability UDA/Navigazione Didattica**: la voce “Competenze e progettazione” porta a Evidenze prima di UDA, senza heading di secondo livello visibile prima del contenuto.

### P1 — Aumenta fatica, scroll o rischio errore

- **Scroll prolungati**: 4–6 schermate in Revisione e Competenze e progettazione; 3–5 in Consulta/Esportazioni.
- **Export duplicati e diffusi**: stesso export disponibile in 3 punti diversi (Revisione toolbar, Definitivo export-group, Esportazioni gruppo).
- **Azione multipla concorrente in stessa vista**: una schermata decisionale con 5+ azioni contemporaneamente compete per l’attenzione.
- **Tabbar 5 viste + subnav a 4 voci**: soglia cognitiva vicina al limite per utenti non tecnici.

### P2 — Miglioria importante ma non bloccante

- **Assenza breadcrumb**: in alcune viste non chiarifica il percorso corrente e il ritorno rapido.
- **Disclaimer verbosi**: notice box da 4–7 righe riducono leggibilità e generano warning fatigue.
- **Design system non formalizzato**: mix di stili tra tab, badge, toggle e bottoni primari/secondari.
- **Stat counters in Home**: informazioni tecniche premature per un primo accesso.

### P3 — Polish

- **Microcopy lunga** in footer e note.
- **Incoerenze stilistiche minori**: badge con/senza bordo, ombre differenziate.
- **Abbreviazioni mobile**: “Rev.” / “Def.” poco auto-esplicative.
- **Touch target marginali** in alcune toolbar a viewport ridotta.

## 4. Proposta architettura UX

### Consulta

- Mantenere solo la lettura del curricolo.
- Rimuovere sidebar discipline, toolbar azioni, export e import.
- Introdurre indice gerarchico compresso (accordion per ordine scuola).

### Revisione

- Mantenere cards confronto + sidebar disciplina.
- Comprimere export in **pannello unico** richiamabile da toggle.
- Separare import/validazione dipartimentale in pannello dedicato, non nella timeline cards.
- Introdurre **riepilogo iniziale** (quante voci da controllare, quante approvate, quante da chiarire).

### Esportazioni

- Centralizzare tutti gli export in **unico pannello contestuale** per ruolo/tab.
- Eliminare export-replica da Revisione e Definitivo; rimandare a questo pannello.
- Introdurre raggruppamento per destinazione: “Documento ufficiale”, “Condivisione Dipartimento”, “Backup locale”.

### Fonti

- Mantenere lista fonti e download.
- Rimuovere sidebar.
- Aggiungere filtro per tipologia fonte (normativa, PTOF, note).

### Competenze e progettazione

- Separare in due sottoview chiare: **Evidenze** e **UDA modello**.
- Mappa disciplinare → spostare in vista dedicata o accordion compresso.

## 5. Scorecard UX CurManLight

| Dimensione | Punteggio 0–3 | Note |
|---|---|---|
| Orientamento | 1 | Schede complesse, subnav non sempre auto-evidente |
| Chiarezza del compito | 1 | Azioni multiple competitive nella stessa vista |
| Densita visiva | 0 | Alta densita, troppi elementi concorrenti |
| profondita scroll | 0 | Molte viste oltre 3 schermate |
| Coerenza navigazione | 1 | Hash e subnav non sincronizzati |
| Leggibilita | 2 | Font leggibile, avvisi lunghi e microcopy ridondanti |
| Accessibilita base | 2 | touch target generalmente ok, mancano landmark/aria-current |
| Controllo utente | 2 | Azioni locali chiare, percorsi confusi da ridondanze |
| Separazione consultazione/revisione/export | 1 | Azioni duplicate in 3 viste |
| prontezza uso scolastico reale | 1 | Funziona, ma richiede training o adattamento |

Totale massimo: 30
Punteggio stimato: 11/30

## Verdetto

`CML_UX_ERGONOMICS_AUDIT_READY`

## 6. Dettaglio metriche integrate

### Orientamento
- Problema: subnav e sidebar non sempre sincronizzate.
- Impatto: alto per nuovi utenti/referenti.

### chiarezza del compito
- Problema: viste decisionale con 6+ azioni visibili.
- Impatto: errore, rallentamento, abbandono.

### densita visiva
- Problema: troppe card/badge/notice/toolbar insieme in load.
- Impatto: sovraccarico cognitivo immediato.

### profondita scroll
- Problema: 4–6 schermate in aree operative.
- Impatto: perdita di contesto, discovery bassa.

### coerenza navigazione
- Problema: hash e subnav non sincronizzati.
- Impatto: disorientamento e azioni fuori contesto.

### leggibilita
- Problema: font ok, ma disclaimer e footer lunghi.
- Impatto: lettura selettiva, informazione persa.

### accessibilita base
- Problema: ARIA e semantica parziali, touch target marginali a viewport ridotta.
- Impatto: barriera per utenti con difficoltà motorie o screen reader.

### controllo utente
- Problema: azioni duplicate, tante opzioni attive insieme.
- Impatto: scelta difficile, senso di perdita di controllo.

### separazione consultazione/revisione/export
- Problema: stesse azioni in più viste senza regola percettiva.
- Impatto: apprendimento lento, training obbligatorio.

### prontezza uso scolastico reale
- Problema: tool funziona a livello tecnico, ma richiede adattamento cognitivo.
- Impatto: utilizzo limitato in contesti reali.
