# CML-UX-ERGONOMICS-AUDIT — Audit ergonomia UX

Data: 2026-06-29

## Contesto

- Branch: `main`
- Commit di partenza: `c908afd`
- Working tree: pulito
- Runtime analizzato: `_published_snapshot/netlify-current/index.html`
- Tipo slice: audit-only / docs-only / UX strategy
- Nessuna modifica runtime applicata

## Oggetto

Auditare l’esperienza utente dello strumento pubblicato, con attenzione a ergonomia, chiarezza, scroll, densità informativa, navigazione e semplicità d’uso per utenti scolastici non tecnici.

## Riepilogo

- Vista peggiore: **Revisione** e **Competenze e progettazione — Evidenze**
- Problema dominante: **scroll prolungati + azioni duplicate**
- Azione prioritaria: **centralizzare export, comprimere viste lunghe, separare Evidenze/UDA**

## 1. Mappa viste e misurazioni

| Vista | Azione primaria | Azioni secondarie | Blocchi informativi | Scroll stimato | Problema dominante |
|---|---|---|---|---|---|
| Home | Entra in Curriculum/Didattica | Impostazioni, PDF, Motto, Guida | Header, stats, 2 card, footer, microguida | 1–2 schermate | Basso |
| Curriculum / Consulta | Seleziona disciplina | Versione, filtri ordine, toggle dettagli | Header, versione-tabs, sidebar, indice, contenuti, badge, note | 3–5 schermate | Medio–alto |
| Curriculum / Revisione | Controlla voci / Approva o Modifica | Filtri, export multipli, import .cml, sidebar | Cruscotto, toolbar, sidebar, cards, export panel, import panel, progress, quick-actions | 4–6 schermate | Alto |
| Curriculum / Definitivo | Esporta Word definitivo | Copia Markdown, PDF, .cml, Drive, backup | Sum-box, export-group, stats, note | 2–3 schermate | Medio |
| Curriculum / Fonti | Leggi/naviga fonti | Scarica PDF, apri link | Lista fonti, note, link | 1–2 schermate | Basso |
| Competenze e progettazione — Evidenze | Adotta / Adatta / Escludi | Filtri ordine, reset marcature, consulta curricolo | Header, notice, stats, filtri, lista evidenze, badge, azioni | 3–6 schermate | Medio–alto |
| Competenze e progettazione — UDA modello | Genera bozza UDA | Copia Markdown, Scarica Markdown | Selector, azioni, preview, notice | 2–3 schermate | Medio |
| Esportazioni | Scegli formato e genera | Copia, download, Drive, backup | Gruppi export (istituzionale, dipartimento, disciplina) | 3–5 schermate | Alto |
| Guida | Leggi/naviga guide | — | Card, link | 2–3 schermate | Basso |

## 2. Metriche UX applicate

- Una schermata = una decisione principale: NO in Revisione, Esportazioni, Didattica.
- Azione primaria visibile senza scroll: SOLO parzialmente in Home/Definitivo.
- Massimo 2 livelli di navigazione simultanei: OK (tabbar + subnav).
- Massimo 1 pulsante primario per area decisionale: NO spesso violato.
- Clic per consultare disciplina: spesso 3.
- Clic per prima azione revisione: spesso 2 da Home, ma non da versione/tab ospite.
- Vista oltre 3 schermate verticali: SI in Consulta, Revisione, Didattica, Esportazioni.
- Badge/stati/avvisi nella prima schermata: NO (molti visibili in load).
- Menu, hash, titolo e contenuto coerenti: PARZIALMENTE.
- Linguaggio comprensibile a docente non tecnico: SI, con eccezioni.

## 3. Problemi classificati

### P0

- Navigazione ibrida hash + subnav non sincronizzata.
- Sidebar visibile dove non serve (Fonti e viste readonly).

### P1

- Scroll prolungati in Consulta, Revisione, Didattica, Esportazioni.
- Export duplicati in 3 punti.
- Azioni multiple competitive in stessa vista decisionale.

### P2

- Assenza breadcrumb coerente.
- Disclaimer verbosi e warning fatigue.
- Design system non formalizzato.

### P3

- Microcopy lunga, incoerenze stilistiche minori, touch target marginali.

## 4. Proposta architettura UX

- Consulta: solo lettura, nessuna sidebar/azioni editoriali visibili; indice accordion per ordine.
- Revisione: cards confronto + sidebar; export in pannello unico separato; riepilogo iniziale.
- Esportazioni: unico pannello contestuale; rimuovere duplicati da Revisione/Definitivo.
- Fonti: lista + filtro tipologia; sidebar rimossa.
- Competenze e progettazione: due sottoview chiare; mappa come vista/dettaglio separato.

## 5. Scorecard

| Dimensione | Punteggio 0–3 |
|---|---|
| Orientamento | 1 |
| Chiarezza del compito | 1 |
| Densita visiva | 0 |
| profondita scroll | 0 |
| Coerenza navigazione | 1 |
| Leggibilita | 2 |
| Accessibilita base | 2 |
| Controllo utente | 2 |
| Separazione consultazione/revisione/export | 1 |
| prontezza uso scolastico reale | 1 |

Punteggio stimato: 11/30

## Verdetto

`CML_UX_ERGONOMICS_AUDIT_READY`
