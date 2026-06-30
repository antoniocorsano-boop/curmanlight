# CML-VIEWS-PRODUCTION-RESTART-SELECTION

## Obiettivo
Selezionare la prima vista/funzionalità da produrre dopo la chiusura della fase accessibilità, mantenendo la baseline accessibilità 88/100 e rispettando i vincoli operativi.

## Stato iniziale
- Branch: `main`
- HEAD iniziale: `9417015`
- origin/main: `9417015`
- Working tree: pulito (solo file non tracciati preesistenti)
- Slice precedente: `CML-ACCESSIBILITY-P3-POLISH-CLOSURE`
- Verdict precedente: `CML_ACCESSIBILITY_P3_POLISH_CLOSURE_READY`
- Score accessibilità: 88/100 (invariato)
- Runtime: stabile

## Perimetro
- **Runtime**: non modificato
- **File modificati**: solo documenti (md) e movelog
- **Runtime non toccato**: index.html, _published_snapshot/netlify-current/index.html, manifest.json, service-worker.js, assets/, content/curriculum/, tools/, examples/, export/import .cml, schema .cml, dati curricolari reali
- **Vincoli**: nessun deploy, nessun push, nessun aggiornamento score, nessun refactor, nessuna modifica a runtime

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

Scelta consigliata: **C. Vista "Controllo qualità curricolo"**
- **Valore per utente**: alta (fornisce panoramica completa del curriculum)
- **Rischio runtime**: basso (solo UI e dati esistenti)
- **Regressioni**: minime (solo UI)
- **Test necessari**: solo verifica UI, nessun test funzionale complesso

## Scelta finale
**CML-VIEWS-PRODUCTION-RESTART-SELECTION**
Vista: **Controllo qualità curricolo**
Descrizione: Vista che mostra lo stato completo del curriculum (validatore, shape test, accessibilità, export, stato di lavoro) in modo chiaro e strutturato per docenti, referenti e dipartimenti.

## Motivazione
- **Alto valore comunicativo**: permette a docenti e referenti di valutare rapidamente lo stato del curriculum.
- **Basso rischio**: utilizza solo UI esistente e dati già validati.
- **Nessun impatto su dati o export**: mantiene invarianti su content/curriculum, tools, assets.
- **Facile da testare**: può essere verificata con screenshot, test di navigazione e validazione dei dati.
- **Coerenza con CurManLight**: rispetta lo stile UI attuale (button, card, tabbar) e le convenzioni di naming.

## Documentazione da creare
- `docs/03_execution/CML-VIEWS-PRODUCTION-RESTART-SELECTION.md`
- `report/CML-VIEWS-PRODUCTION-RESTART-SELECTION.md`
- `docs/REPO-MOVELOG.md` (aggiornamento)

## Controlli da eseguire
- `git status -sb` → confermare branch e HEAD
- `git diff --name-only` → verificare file modificati
- `git diff --check` → verificare whitespace
- `node tools/validate-cml-normalized-curriculum.mjs` → 14/14 PASS
- `node tools/test-runtime-mappa-dati-shape.mjs` → 14/14 PASS

## Commit
```bash
git add docs/03_execution/CML-VIEWS-PRODUCTION-RESTART-SELECTION.md report/CML-VIEWS-PRODUCTION-RESTART-SELECTION.md docs/REPO-MOVELOG.md
git commit -m "docs: select first CML view after accessibility baseline"
```