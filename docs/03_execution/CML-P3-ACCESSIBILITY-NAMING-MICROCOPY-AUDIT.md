# CML-P3-ACCESSIBILITY-NAMING-MICROCOPY-AUDIT — Accessibility Naming and Microcopy Audit

## Obiettivo

Auditare i residui P3 accessibilità (naming, microcopy, chiarezza) dopo il ciclo accessibilità 88/100. Nessuna modifica runtime.

## Stato Iniziale

- Branch: `main`
- HEAD: `cc52e30`
- `origin/main`: `cc52e30`
- Accessibilità: 88/100, P0/P1/P2 = 0/0/0
- Working tree: pulito

## Perimetro

Docs-only audit. Nessuna modifica a runtime, README, dati, tool, scaffold.

## Metodologia

Analisi statica del runtime (`_published_snapshot/netlify-current/index.html`, 5908 linee) su:
- landmark naming e ruoli ARIA
- microcopy accessibile
- overlay e dialog ARIA
- breadcrumb e navigazione
- pulsanti, etichette, annunci
- navigazione mobile

## Percorsi Testati

| # | Percorso | Note |
|---|----------|------|
| 1 | Home | Tab iniziale, dashboard, percorso 5 passi |
| 2 | Welcome overlay | Modal iniziale Benvenuto |
| 3 | Curriculum | Consulta / Revisione / Definitivo / Fonti |
| 4 | Cambio disciplina | Sidebar, mappa discipline, hash sync |
| 5 | Competenze e progettazione | Valutazione/Evidenze, UDA modello |
| 6 | Export Center | 6 gruppi di esportazione |
| 7 | Guida | 6 card informative |
| 8 | Menu mobile | Bottom bar 5 pulsanti |
| 9 | Card proposte | Approva/Mantieni/Confronta/Personalizza/Rimuovi |
| 10 | Settings overlay | Modal impostazioni profilo |

## Discipline Testate

| # | Disciplina |
|---|------------|
| 1 | Tecnologia |
| 2 | Italiano |
| 3 | Matematica |
| 4 | Storia |
| 5 | Religione Cattolica |

## Issue P3 Rilevate

| ID | Area | Descrizione | Impatto | Microcopy/Naming Prop. | Rischio Regressione | Priorità |
|----|------|-------------|---------|------------------------|---------------------|----------|
| P3.01 | Landmark | `aside` (L1327) senza `aria-label`. Regione semantica senza nome accessibile | Basso: unico aside, ma il titolo visivo "Discipline" non è esposto agli SR | Aggiungere `aria-label="Elenco discipline"` all'`aside` | Nullo | Media |
| P3.02 | Overlay | Welcome overlay (L5114) usa `role="region"` invece di `role="dialog"`. Non semanticamente corretto per modale | Basso: focus trap e funzionalità OK, ma ruolo ARIA errato | Usare `role="dialog" aria-modal="true" aria-labelledby="welcome-title"` | Nullo se titolo aggiunto all'h2 | Media |
| P3.03 | Overlay | Settings modal (L4837) senza `role="dialog"` né `aria-modal` né `aria-labelledby`. Div statico | Medio: SR legge contenuto ma non come dialog | Aggiungere `role="dialog" aria-modal="true" aria-labelledby="settings-title"` (aggiungere id all'h2) | Nullo | Media |
| P3.04 | Breadcrumb | Container `.path-breadcrumb` (L1294) non ha `role="navigation"` né `aria-label="breadcrumb"` | Basso: unico breadcrumb, ma convenzione ARIA breadcrumb non rispettata | Aggiungere `role="navigation" aria-label="Percorso"` al div breadcrumb | Nullo | Media |
| P3.05 | Breadcrumb | Breadcrumb (L3224) usa `<span class="crumb-current">` senza `aria-current="page"` | Basso: la posizione corrente non è marcata ARIA | Aggiungere `aria-current="page"` allo span corrente | Nullo | Bassa |
| P3.06 | Mobile nav | Bottom bar (L5901-5905) etichette abbreviate: "Curr.", "Comp.", "Esp." | Medio: abbreviazioni non universalmente chiare a SR | Valutare testo completo "Curriculum", "Competenze", "Esportazioni" su mobile | Medio: layout overflow | Bassa |
| P3.07 | Sidebar | Pulsanti disciplina (L3188) attivi senza `aria-current="true"`. Stato selezionato solo visivo (classe `.active`) | Basso: contesto dell'elenco e titolo visibile, ma aria-current mancante | Aggiungere `aria-current="true"` al `disc-btn.active` | Nullo | Media |
| P3.08 | Mappa discipline | Pulsanti cambio disciplina (L1476-1489) attivi senza `aria-pressed` o `aria-current`. Stato solo visivo (colore/text) | Basso: gruppo di bottoni, ma nessun attributo ARIA per lo stato attivo | Aggiungere `aria-current="true"` al pulsante attivo | Nullo | Bassa |
| P3.09 | Progress | `#prog-label` (L1308-1309) aggiornato via `textContent` senza `aria-live`. Variazioni non annunciate | Medio: utente SR che consulta il cruscotto non percepisce aggiornamento avanzamento | Aggiungere `aria-live="polite"` al contenitore del progresso o a `#prog-label` | Nullo | Media |
| P3.10 | Footer | Testo footer (L1966) lungo con pipe come separatori, letto come unico blocco continuo | Basso: informazione non critica, ma rumore per SR | Valutare `aria-label="Informazioni istituto"` sul `<footer>` | Nullo | Bassa |

## P0/P1/P2 Rilevati

Nessuno. Tutte le issue sono P3 non bloccanti.

## Raccomandazioni

1. Intervenire su P3.02, P3.03, P3.04, P3.07 come microfix prioritari (dialog e breadcrumb sono pattern ARIA consolidati).
2. P3.01 e P3.04 sono a costo zero (solo attributi HTML).
3. P3.06 va valutato con attenzione per evitare overflow su mobile.
4. P3.09 è consigliato per coerenza con gli altri `aria-live` già presenti.
5. P3.05, P3.08, P3.10 sono backlog non urgente.

## Impatto sullo Score

Nullo. Score 88/100 invariato. Le issue P3 non modificano il punteggio complessivo. Un intervento successivo potrebbe portare margini di miglioramento marginale (< 2 punti).

## Limiti

- Audit condotto su analisi statica del sorgente, non su test screen reader reale.
- Non tutti i percorsi dinamici sono stati percorsi (es. ogni combinazione filtro+carta).
- Condizioni mobile simulate via CSS analysis, non su dispositivo reale.

## Invarianti Rispettate

- Nessuna modifica runtime ✅
- Solo file docs autorizzati ✅
- Score accessibilità non aggiornato ✅
- Nessun claim WCAG ✅

## Verdict

`CML_P3_ACCESSIBILITY_NAMING_MICROCOPY_AUDIT_READY`
