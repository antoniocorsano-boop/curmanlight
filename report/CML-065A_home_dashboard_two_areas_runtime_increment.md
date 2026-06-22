# CML-065A — Home Dashboard Two Areas Runtime Increment

## Report

| Campo | Valore |
|---|---|
| HEAD partenza | `24de80d` |
| Modello di riferimento | CML-065 |
| File runtime modificato | `_published_snapshot/netlify-current/index.html` |
| File documentali | `docs/03_execution/CML-065A.md`, `report/CML-065A_home_dashboard_two_areas_runtime_increment.md`, `docs/REPO-MOVELOG.md` |
| Validazione Tecnologia | PASS |
| Deploy | Non eseguito |

## Home aggiunta

La Home è la prima vista all'apertura dell'app. Sostituisce la precedente vista "Revisione per disciplina" come default.

### Card 1 — Curriculum

| Link | Destinazione |
|---|---|
| 📖 Consulta | `setTab('curricolo')` |
| ✏️ Revisiona | `setTab('lavoro')` |
| 📤 Esporta | `setTab('lavoro')` + scroll toolbar |
| ⚙️ Tecnologia normalizzata | `setTab('curricolo')` + scroll to pannello |

### Card 2 — Didattica

| Link | Stato |
|---|---|
| 📋 Progetta UDA | Disabilitato (in preparazione) |
| 🧪 Prepara attività | Disabilitato (in preparazione) |
| 📊 Valuta evidenze | Disabilitato (in preparazione) |
| 📁 Materiali per la classe | Disabilitato (in preparazione) |

### Microcopy presente

- "La Home non modifica i dati."
- "Curriculum e Didattica restano separati: il primo riguarda il documento istituzionale, la seconda il lavoro operativo in classe."
- "Le azioni protette restano sotto codice operativo."
- "Il curricolo normalizzato richiede validazione umana."

### Regressioni escluse

| Funzione | Stato |
|---|---|
| Tab Revisione per disciplina | Invariata, raggiungibile da Home o tabbar |
| Tab Curricolo definitivo | Invariato |
| Tab Riferimenti normativi | Invariato |
| Tab Sezioni generali | Invariato |
| Tab Curricolo di istituto | Invariato, Tecnologia normalizzata raggiungibile |
| Export/import/report | Invariati |
| Role-access gating | `CML2025`, invariato |
| Schema `.cml` | Non modificato |
| Persistenza | Solo `sessionStorage`, invariata |
| Mobile bottom bar | Home aggiunto (5 pulsanti) |
| Mobile menu overlay | Invariato |

### Dettaglio modifiche a `index.html`

| Area | Modifica |
|---|---|
| CSS | Aggiunte classi `.home-dashboard`, `.home-card`, ecc. |
| Tabbar | Aggiunto pulsante "Home" in posizione 0 (attivo) |
| HTML | Aggiunto `#tab-home` con 2 card + footer |
| setTab() | Aggiunto case "home": mostra/nasconde tab, cruscotto, breadcrumb; mappa tabbar a 6 voci |
| Inizializzazione | `currentTab` da `"lavoro"` a `"home"` |
| Cruscotto | `hidden` di default, mostrato da setTab per tab non-home |
| Breadcrumb | `hidden` di default, mostrato da setTab per tab non-home |
| Tab-lavoro | Aggiunto `style="display:none"` |
| Mobile bottom bar | Aggiunto `mbb-home` in posizione 0 (attivo) |
| mbbMap | Aggiunto `home:"mbb-home"` |

## Raccomandazioni successive

1. **CML-065B** — deploy e smoke live su GitHub Pages
2. **CML-066** — ridurre densità pulsanti in revisione/export (P1 UX audit)
3. **CML-067** — selezionare primo modulo Didattica
4. **CML-068** — primo prototipo didattico read-only
