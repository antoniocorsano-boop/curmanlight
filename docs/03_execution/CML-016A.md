# CML-016A — Disciplinary Content, Sources and Export Quality Audit

## Stato

Audit completo della qualità dei contenuti disciplinari, delle fonti e dei documenti esportati da CurManLight.
Nessuna modifica runtime — solo analisi, progettazione e documentazione.

## Preflight

| Controllo | Esito |
|---|---|
| Branch | `cml-008r-fix-markdown-decision-summary` ✅ |
| HEAD partenza | `9a6343f` — docs: record CML detail panel real user micro-test ✅ |
| Working tree | Pulita ✅ |
| URL live | https://curmanlight.netlify.app ✅ |
| Modifiche runtime | ❌ Nessuna |
| Deploy | ❌ Nessuno |
| Asset | Invariati (sw.js, _headers, PDF) |

## 1. Contenuti disciplinari — Analisi

### Discipline presenti (14)

| Disciplina | Voci totali | Modifica | Nuovo | Ok |
|---|---|---|---|---|
| Italiano | 17 | 10 | 0 | 7 |
| Matematica | 10 | 4 | 2 | 4 |
| Scienze | 9 | 4 | 1 | 4 |
| Tecnologia | 12 | 8 | 0 | 4 |
| Storia | 9 | 6 | 0 | 3 |
| Latino (LEL) | 3 | 0 | 3 | 0 |
| Geografia | 4 | 3 | 0 | 1 |
| Inglese | 4 | 3 | 0 | 1 |
| Seconda Lingua Com. | 3 | 2 | 0 | 1 |
| Educazione Civica | 7 | 4 | 2 | 1 |
| Arte e Immagine | 3 | 2 | 0 | 1 |
| Musica | 5 | 4 | 0 | 1 |
| Educazione Fisica | 0 | 0 | 0 | 0 |
| Religione Cattolica | 0 | 0 | 0 | 0 |

**Nota:** Educazione Fisica e Religione Cattolica non hanno dati — potrebbero essere da completare in una fase successiva o gestite separatamente.

### Struttura dati

Ogni disciplina contiene `traguardi` e `obiettivi` organizzati per ordine (Infanzia/Primaria/Secondaria). Ogni voce ha:
- `id`: identificatore univoco
- `ordine`: ordine di scuola
- `classe`: opzionale, per granularità (es. "Cl. 1ª-2ª")
- `testo`: testo vigente IN 2012
- `status`: "ok" | "modifica" | "nuovo"
- `proposto`: proposta IN 2025
- `decisione`: null | "approvata" | "rifiutata"
- `testoFinale`: opzionale, personalizzato dall'utente

### Qualità dei contenuti — Giudizio

**Positivo:**
- Linguaggio adeguato a un curricolo di istituto (né troppo tecnico né troppo generico)
- Riferimenti territoriali presenti (es. "ceramica arianese" in Tecnologia, "Irpinia" in Storia/Geografia)
- Proposte IN 2025 coerenti con le novità del DM 221/2025 (corsivo, educazione finanziaria, IA, informatica)
- Distinzione chiara tra voci "modifica" e "nuovo"

**Criticità:**
- **C1 — Marker `[IN 2025: ...]` inline nel testo proposta**: I marker come `[IN 2025: valorizzazione del corsivo fin dall'infanzia]` appaiono dentro il testo della proposta. Sono utili per tracciabilità ma confondono: fanno parte della proposta o sono una nota al revisore?
- **C7 — Discipline senza dati**: Educazione Fisica e Religione Cattolica non hanno voci. Utente potrebbe chiedersi se mancano o non sono state implementate.

## 2. Fonti — Analisi

### Fonti nell'interfaccia

| Punto | Fonte mostrata | Qualità |
|---|---|---|
| Header badges | D.M. 254/2012 / ⚡ D.M. 221/2025 | ✅ Chiaro |
| Card detail (current) | 📄 DM 254/2012 (vigente) | ✅ Specifico |
| Card detail (proposal) | ✏️ DM 221/2025 — proposta di aggiornamento | ✅ Specifico |
| Card detail (new item) | 🆕 DM 254/2012 — assente nel curricolo attuale | ✅ Chiaro |
| Tab Normativa | Fonti istituzionali, PTOF, RAV, normativa nazionale, UE, DigComp, Agenda 2030 | ✅ Completo |
| Tab Generali | Premessa, IN 2025, Riferimenti, Profilo, Competenze, Livelli, Obiettivi, Raccordo | ✅ Completo |
| Export | Riferimenti DM 254/2012 e DM 221/2025 in frontespizio | ✅ Corretto |

### Criticità fonti

- **C4 — Fonti tab disconnesso dalle card**: Le card mostrano "DM 254/2012" ma non c'è un link cliccabile che porti direttamente alla scheda Normativa corrispondente. Un docente che vuole approfondire deve navigare manualmente.
- **C6 — Fonti PTOF/RAV statiche**: I riferimenti a PTOF e RAV sono testi statici. Se questi documenti vengono aggiornati, i contenuti nello strumento non si aggiornano automaticamente.

## 3. Curricolo definitivo (Tab Riepilogo) — Analisi

### Struttura
- Raggruppato per disciplina → ordine → traguardi/obiettivi
- Ogni voce mostra: badge stato, classe (opzionale), testo
- Avviso "⚠️ X voci ancora da decidere — vai a decidere →" con link
- Disclaimer: "Documento di lavoro — da validare. Non sostituisce delibera del Collegio Docenti."

### Criticità curricolo definitivo

- **C2 — Nessuna distinzione "approvato così com'è" vs "approvato con personalizzazione"**: Nel Riepilogo, una voce approvata con `testoFinale` personalizzato appare identica a una approvata con la proposta originale. L'utente non vede se ha personalizzato o meno.
- **C5 — Nome file export non localizzato**: I filename usano formato ISO (`2026-06-21`) che va bene per脚本 ma non per utenti italiani che si aspettano `21-06-2026`.

## 4. Export — Analisi

### Formati disponibili

| Formato | Confronto | Definitivo | Qualità |
|---|---|---|---|
| Markdown | ✅ Legenda, gap markers, dettaglio decisioni | ✅ Pulito, professionale | Buona |
| Word | ✅ Frontespizio, legenda, tabelle, header/footer | ✅ Idem senza confronto | Molto buona |
| PDF | ✅ HTML di stampa con stile documento | ✅ Idem | Buona |
| Copia per Word | ✅ Testo strutturato per clipboard | ✅ Idem | Sufficiente |

### Qualità export — Giudizio

**Positivo:**
- Documenti professionali con frontespizio, gerarchia, header/footer
- Markdown con gap markers e decision summary (per singola disciplina)
- Excelente distinzione confronto/definitivo
- Disclaimer validazione presente in tutti i formati

**Criticità:**
- **C3 — Export parziale non chiaro**: Quando un disciplinar ha voci approvate e altre pending, l'export "definitivo" include solo approvate+invariate. L'utente potrebbe pensare di esportare tutto il curricolo, ma in realtà esporta solo la parte validata. L'avviso nella UI è presente ma potrebbe non essere sufficiente.

## 5. Criticità — Riepilogo

| # | Criticità | Area | Gravità |
|---|---|---|---|
| C1 | Marker `[IN 2025: ...]` inline nel testo proposta | Contenuti | ⚠️ Media |
| C2 | Nessuna distinzione approvato/personalizzato | Definitivo | ⚠️ Media |
| C3 | Export parziale non segnalato abbastanza | Export | ⚠️ Bassa |
| C4 | Fonti card non linkate alla normativa | Fonti | ⚠️ Bassa |
| C5 | Nome file export in formato ISO | Export | ✅ Molto bassa |
| C6 | Fonti PTOF/RAV statiche | Fonti | ✅ Molto bassa |
| C7 | Discipline senza dati (Educazione Fisica, Religione) | Contenuti | ⚠️ Media |
| C8 | Latino (LEL) tutto nuovo — volume contenuti | Contenuti | ✅ Bassa |

## 6. Opzioni per CML-016B

### Opzione A — Separare marker `[IN 2025]` dal testo proposta

Rimuovere i marker `[IN 2025: ...]` dal testo visibile della proposta e spostarli in un campo note separato, o renderli visivamente distinti (colore grigio, parentesi tonde, nota a piè di pagina nell'export).

- **Impatto:** Basso (solo dati in DATA)
- **Rischio:** Perdita di tracciabilità se non gestito bene
- **Costi:** ~15 minuti
- **C risolta:** C1

### Opzione B — Distinguere "approvato così com'è" vs "approvato con personalizzazione"

Aggiungere indicatore ✏️ nelle card approvate e nel Riepilogo quando `testoFinale` è stato personalizzato dall'utente (diverso da `proposto`).

- **Impatto:** Medio (modifiche a `renderRiepilogo()` e `cardHTML()`)
- **Rischio:** Minimo
- **Costi:** ~30 minuti
- **C risolta:** C2

### Opzione C — Collegamento fonti card ↔ scheda normativa

Aggiungere link cliccabili dai label "DM 254/2012" nelle card alla scheda Normativa corrispondente.

- **Impatto:** Medio-alto (modifiche a `cardHTML()` + funzione jump-to-tab)
- **Rischio:** Nessuno
- **Costi:** ~45 minuti
- **C risolta:** C4

### Opzione D (consigliata) — C1 cleanup + C2 indicator

Combinazione leggera:
1. Rimuovere i marker `[IN 2025: ...]` dal testo della proposta e renderli invisibili nell'UI (ma preservarli nell'export come nota discreta)
2. Aggiungere piccolo indicatore ✏️ "testo personalizzato" nel Riepilogo per voci approvate con `testoFinale ≠ proposto`

Due micro-interventi con impatto basso che migliorano la chiarezza dei contenuti e del documento finale senza toccare l'architettura.

- **Impatto:** Basso
- **Rischio:** Minimo
- **Costi:** ~40 minuti
- **C risolte:** C1 + C2

## 7. Raccomandazione

**Selezionata Opzione D per CML-016B** — cleanup marker IN 2025 + indicatore personalizzazione nel Riepilogo.

Motivazione:
- Risolve le due criticità a media gravità (C1, C2)
- Impatto basso, rischio minimo
- Migliora la chiarezza dei contenuti sia nell'interfaccia sia nel documento finale
- Non modifica l'architettura esistente
- Preparatorio per uso reale con gruppo di lavoro

## 8. Cosa NON è stato fatto

- ❌ Nessuna modifica runtime
- ❌ Nessuna modifica a `index.html`
- ❌ Nessun deploy
- ❌ Nessun merge
- ❌ Nessuna modifica a PDF, sw.js, _headers
- ❌ Nessuna modifica a Markdown generation
- ❌ Nessuna modifica a tecnologia export panel
- ❌ Nessuna modifica alla logica approvazione/rifiuto
- ❌ Nessuna modifica ai conteggi

## 9. Verdetto

```
CML_016A_DISCIPLINARY_CONTENT_SOURCES_EXPORT_QUALITY_AUDIT_READY
```

## Output finale

| Campo | Valore |
|---|---|
| Verdetto | `CML_016A_DISCIPLINARY_CONTENT_SOURCES_EXPORT_QUALITY_AUDIT_READY` |
| Branch | `cml-008r-fix-markdown-decision-summary` |
| Commit partenza | `9a6343f` — docs: record CML detail panel real user micro-test |
| Nuovo commit | `HEAD` (dopo commit docs) |
| File modificati | `docs/03_execution/CML-016A.md` (nuovo), `report/CML-016A_disciplinary_content_sources_export_quality_audit.md` (nuovo), `docs/REPO-MOVELOG.md` (modificato) |
| Qualità contenuti | Buona — linguaggio adeguato, riferimenti territoriali, distinzione chiara vigente/proposta |
| Qualità fonti | Buona — fonti specifiche e contestuali, normativa completa, riferimenti UE |
| Qualità curricolo definitivo | Buona — struttura chiara, disclaimer presente, esportazione professionale |
| Qualità export | Molto buona — Word professionale, Markdown ricco, PDF stampabile |
| Criticità individuate | 8 (C1-C8), 2 a media gravità (C1, C2) |
| Opzioni valutate | A (cleanup marker), B (indicatore personalizzazione), C (link fonti), D (A+B combinato) |
| Opzione selezionata per CML-016B | **D** — cleanup marker IN 2025 + indicatore personalizzazione nel Riepilogo |
| Modifica runtime | ❌ Nessuna |
| Deploy | ❌ Nessuno |
| Git finale | Working tree pulita ✅ |
| Prossimo step | **CML-016B** — implementazione Opzione D (cleanup marker + indicatore personalizzazione) |
