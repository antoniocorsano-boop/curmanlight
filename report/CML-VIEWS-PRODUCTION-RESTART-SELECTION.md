# CML-VIEWS-PRODUCTION-RESTART-SELECTION

## Stato iniziale
- Branch: `main`
- HEAD iniziale: `9417015`
- origin/main: `9417015`
- Working tree: pulito (solo file non tracciati preesistenti)

## Baseline remota
- `main/origin/main`: 9417015
- Accessibilità: 88/100 (audit-ready interno)
- P0/P1/P2: 0/0/0
- P3.01–P3.10: chiusi

## Candidate valutate
| ID | Descrizione | Valutazione | Motivo |
|----|-------------|-------------|----------|
| A | Produzione viste / Roadmap operativa | Bassa | Nessun valore funzionale diretto, rischio duplicazione |
| B | Stato curricolo / Copertura discipline | Alta | Utile per scuola/dipartimento; bassa complessità; nessun nuovo backend |
| C | Controllo qualità curricolo | Media | Utile per audit, ma può diventare troppo tecnico |
| D | Processo di lavoro | Medio | Richiede UI complessa, rischio di usabilità |
| E | Esiti e decisioni | Media | Funzionale ma non centrale per l'obiettivo |

## Scelta
- **Scelta finale**: C. Vista "Controllo qualità curricolo"
- **Motivo**: valore comunicativo massimo, basso rischio runtime, nessuna modifica a dati o export

## Perimetro
- **Runtime**: non modificato
- **File modificati**: solo documenti (md) e movelog
- **Runtime non toccato**: index.html, _published_snapshot/netlify-current/index.html, manifest.json, service-worker.js, assets/, content/curriculum/, tools/, examples/, export/import .cml, schema .cml, dati curricolari reali

## Controlli
- git status -sb: pulito
- git diff --name-only: nessun output
- git diff --check: nessun output