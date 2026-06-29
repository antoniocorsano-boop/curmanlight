# CML-130 — User-Facing Microcopy and Technical Language Audit

## 1. Fotografia iniziale

| Parametro          | Valore                                                          |
| ------------------ | --------------------------------------------------------------- |
| Branch             | `main`                                                          |
| HEAD               | `5462a814819f768cd7b3372f7cc38abc3b919c69`                      |
| origin/main        | `5462a814819f768cd7b3372f7cc38abc3b919c69`                      |
| Working tree       | pulito, ahead 0                                                 |
| Validatore         | 7 file, 94 unità, `overallValid: true`                          |
| Residui locali     | `.agents`, `skills-lock.json`, `Consultazione` — tutti ignorati |
| `git diff --check` | pulito                                                          |

## 2. File analizzato

`_published_snapshot/netlify-current/index.html` (4963 righe)

## 3. Termini tecnici scrutinati

Sono stati cercati 40+ pattern nel file, isolando solo i testi realmente visibili all'utente (pulsanti, titoli, descrizioni, tooltip, badge, avvisi, istruzioni, toast, notifiche, placeholder), escludendo nomi interni di funzioni JS, variabili e classi CSS.

## 4. Classificazione per area

### A. Home / Cruscotto

| Testo attuale                    | Problema                               | Proposta                             | Prio | Rischio |
| -------------------------------- | -------------------------------------- | ------------------------------------ | ---- | ------- |
| `Tecnologia normalizzata` (link) | "Normalizzata" è termine tecnico opaco | `Tecnologia — curricolo strutturato` | P1   | Basso   |

### B. Navigazione principale

Nessun problema rilevato. Tutti i nomi dei tab sono chiari:

- 🏠 Home, 📚 Curriculum, 🧑‍🏫 Competenze e progettazione, 📤 Esportazioni, ❔ Guida

### C. Curriculum

| Testo attuale                   | Problema                   | Proposta | Prio | Rischio |
| ------------------------------- | -------------------------- | -------- | ---- | ------- |
| `📖 IN 2025 (bozza)` (sottotab) | Chiaro — OK                | —        | —    | —       |
| `Stato: revisione avviata`      | Chiaro — OK                | —        | —    | —       |
| diciture "da validare" ripetute | OK, contesto istituzionale | —        | —    | —       |

### D. Mappa disciplinare

| Testo attuale                                   | Problema             | Proposta                              | Prio | Rischio |
| ----------------------------------------------- | -------------------- | ------------------------------------- | ---- | ------- |
| `Mappa disciplinare — Questa sezione mostra...` | Chiaro — OK          | —                                     | —    | —       |
| `...pacchetto Tecnologia normalizzato`          | "Normalizzato" opaco | `...pacchetto Tecnologia strutturato` | P2   | Basso   |

### E. Competenze e progettazione

Nessun problema rilevato. Terminologia scolastica corretta.

### F. Validazione dipartimentale

| Testo attuale                       | Problema                     | Proposta                             | Prio | Rischio |
| ----------------------------------- | ---------------------------- | ------------------------------------ | ---- | ------- |
| `Importa proposte docenti .cml`     | ".cml" è estensione criptica | `Importa proposte docenti` + tooltip | P2   | Basso   |
| `Importa esiti dipartimentali .cml` | Stesso problema .cml         | Stessa soluzione                     | P2   | Basso   |
| `Esporta esito dipartimento .cml`   | Stesso problema .cml         | Stessa soluzione                     | P2   | Basso   |

### G. Esporta / Consegna

| Testo attuale                                                                          | Problema                                  | Proposta                                                                      | Prio | Rischio |
| -------------------------------------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------- | ---- | ------- |
| `📝 Markdown (confronto)`                                                              | "Markdown" tecnico — 11 occorrenze totali | `📝 Testo (confronto)` o tooltip "formato testo strutturato"                  | P1   | Medio   |
| `📝 Markdown (definitivo)`                                                             | Stesso problema                           | `📝 Testo (definitivo)`                                                       | P1   | Medio   |
| `📝 Markdown` (Riepilogo)                                                              | Stesso problema                           | `📝 Testo`                                                                    | P1   | Medio   |
| `📝 Copia Markdown`                                                                    | Stesso problema                           | `📝 Copia testo`                                                              | P1   | Medio   |
| `📝 Scarica Markdown`                                                                  | Stesso problema                           | `📝 Scarica testo`                                                            | P1   | Medio   |
| `📤 Export del curricolo revisionato`                                                  | "Export" è anglicismo                     | `📤 Esportazione del curricolo revisionato`                                   | P2   | Basso   |
| `⬇ Azioni di export ▾`                                                                 | "export" anglicismo                       | `⬇ Azioni di esportazione ▾`                                                  | P2   | Basso   |
| `⬇️ Backup locale`                                                                     | "Backup" tecnico, ma diffuso              | `⬇️ Copia di sicurezza locale`                                                | P3   | Basso   |
| `⬆️ Importa backup`                                                                    | Stesso problema                           | `⬆️ Carica copia di sicurezza`                                                | P3   | Basso   |
| `📊 Report sintesi`                                                                    | "Report" anglicismo                       | `📊 Resoconto sintesi`                                                        | P2   | Basso   |
| `Trovi tutti gli strumenti di export...`                                               | "export" anglicismo                       | `Trovi tutti gli strumenti di esportazione...`                                | P2   | Basso   |
| `Word avanzato: richiede rete. Copia/Markdown/PDF: sicuri. .cml: per Drive condiviso.` | "Markdown" tecnico + ".cml" criptico      | `Word avanzato: richiede rete. Testo/PDF: sicuri. .cml: per Drive condiviso.` | P2   | Basso   |

### H. Import file `.cml`

| Testo attuale                                                | Problema        | Proposta                                       | Prio | Rischio |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- | ---- | ------- |
| `Importa i file .cml ricevuti dai docenti...`                | ".cml" criptico | Aggiungere tooltip "file proposta CurManLight" | P2   | Basso   |
| `Nessun dato viene inviato online: l'importazione è locale.` | Chiaro — OK     | —                                              | —    | —       |

### I. Report gruppo curricolo

| Testo attuale                     | Problema            | Proposta                             | Prio | Rischio |
| --------------------------------- | ------------------- | ------------------------------------ | ---- | ------- |
| `Scarica report gruppo di lavoro` | "report" anglicismo | `Scarica resoconto gruppo di lavoro` | P2   | Basso   |

### J. Guida

Nessun problema rilevato. I testi sono descrittivi e chiari.

### K. Stati e badge

| Testo attuale                                                 | Problema             | Proposta                                                  | Prio | Rischio |
| ------------------------------------------------------------- | -------------------- | --------------------------------------------------------- | ---- | ------- |
| `...bozza disciplinare completa e normalizzata`               | "normalizzata" opaco | `...bozza disciplinare completa e strutturata`            | P2   | Basso   |
| `...struttura normalizzata con unità, conoscenze, abilità...` | "normalizzata" opaco | `...struttura completa con unità, conoscenze, abilità...` | P2   | Basso   |
| `pacchetto curricolare normalizzato`                          | "normalizzato" opaco | `curricolo strutturato`                                   | P2   | Basso   |

## 5. Riepilogo priorità

| Priorità   | Conteggio | Descrizione                                                        |
| ---------- | :-------: | ------------------------------------------------------------------ |
| P0         |     0     | Testi bloccanti per l'utente                                       |
| P1         |     2     | "Markdown" in pulsanti di esportazione principali                  |
| P2         |     6     | Angicismi ("export", "report", "backup") + ".cml" + "normalizzato" |
| P3         |     1     | "Backup" → "copia di sicurezza" (opzionale)                        |
| **Totale** |   **9**   | **Aree interessate: Esporta/Consegna principale**                  |

## 6. Opzioni valutate

### Opzione A — Nessuna modifica

Scartata. "Markdown" è un termine tecnico che pochi docenti conoscono e appare in 11 pulsanti/descrizioni principali. Il formato è visualizzato come testo semplice nell'uso quotidiano.

### Opzione B — Riscrittura puntuale delle azioni principali ✅

Sostituzioni mirate su ~8-10 testi nelle aree più visibili: pulsanti "Markdown" → "Testo", anglicismi "export/report/backup" → italiano, ".cml" semplificato.

### Opzione C — Riscrittura media su aree sensibili

Include anche "normalizzato" (6 occorrenze) e ".cml" con tooltip esplicativi. Rischio di estensione eccessiva per una micro-slice.

### Opzione D — Revisione ampia

Scartata. Troppo estesa per le necessità emerse.

## 7. Opzione selezionata

**Opzione B** — riscrittura puntuale delle azioni principali (8-10 sostituzioni testuali).

## 8. Perimetro raccomandato per CML-131

| #   | Testo attuale                            | Testo proposto                                 | Area              | Prio |
| --- | ---------------------------------------- | ---------------------------------------------- | ----------------- | ---- |
| 1   | `📝 Markdown (confronto)`                | `📝 Testo (confronto)`                         | Esporta toolbar   | P1   |
| 2   | `📝 Markdown (definitivo)`               | `📝 Testo (definitivo)`                        | Esporta toolbar   | P1   |
| 3   | `📝 Markdown` (Riepilogo)                | `📝 Testo`                                     | Toolbar Riepilogo | P1   |
| 4   | `📝 Copia Markdown`                      | `📝 Copia testo`                               | Tecnologia export | P1   |
| 5   | `📝 Scarica Markdown`                    | `📝 Scarica testo`                             | Tecnologia export | P1   |
| 6   | `📤 Export del curricolo revisionato`    | `📤 Esportazione del curricolo revisionato`    | Tecnologia export | P2   |
| 7   | `⬇ Azioni di export ▾`                   | `⬇ Azioni di esportazione ▾`                   | Tecnologia export | P2   |
| 8   | `📊 Report sintesi`                      | `📊 Resoconto sintesi`                         | Toolbar Riepilogo | P2   |
| 9   | `Scarica report gruppo di lavoro`        | `Scarica resoconto gruppo di lavoro`           | Report referente  | P2   |
| 10  | `Trovi tutti gli strumenti di export...` | `Trovi tutti gli strumenti di esportazione...` | Guida             | P2   |

**Non inclusi** (da valutare in ciclo futuro se necessario):

- "normalizzato" (6 occorrenze) — termine tecnico ma comprensibile in contesto
- ".cml" su pulsanti (4 occorrenze) — difficile rimuovere senza perdere specificità
- "Backup" → "Copia di sicurezza" (P3, opzionale)
- "Word avanzato: richiede rete. Copia/Markdown/PDF: sicuri." → aggiornamento label

## 9. Conferme

- **Nessun runtime modificato** in questa slice
- **Nessun JSON/validator/schema/import/export modificato**
- **Nessuna modifica a CSS, layout, icone o classi**
- **Nessuna introduzione di nuove funzioni o dipendenze**
- **Nessun push eseguito**

## 10. Verdetto

`CML_130_USER_FACING_MICROCOPY_AUDIT_READY`

**Prossimo passo:** CML-131 — USER_FACING_MICROCOPY_RUNTIME_ALIGNMENT (10 sostituzioni testuali puntuali)
