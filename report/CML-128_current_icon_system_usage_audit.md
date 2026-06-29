# CML-128 — Current Icon System Usage Audit

## Scopo

Analizzare l'uso di icone/emoji nel runtime CurManLight (`_published_snapshot/netlify-current/index.html`), identificare disallineamenti, e valutare opzioni per allineare icone "markdown" e altri casi ambigui agli stili già presenti.

---

## 1. Fotografia iniziale

| Parametro    | Valore                                      |
| ------------ | ------------------------------------------- |
| Branch       | `main`                                      |
| HEAD         | `1e876be` (CML-126B)                        |
| origin/main  | allineato                                   |
| Working tree | pulito (3 untracked: docs/report da creare) |
| Validatore   | 7/94, `overallValid: true`                  |
| Stato        | Pre-audit, nessuna modifica runtime         |

---

## 2. Inventario icone attuali

### 2a. Emoji di navigazione (barra superiore)

| Tab                        | Emoji | Classe/Ruolo |
| -------------------------- | ----- | ------------ |
| Home                       | 🏠    | `tab-btn`    |
| Curriculum                 | 📚    | `tab-btn`    |
| Competenze e progettazione | 🧑‍🏫    | `tab-btn`    |
| Esportazioni               | 📤    | `tab-btn`    |
| Guida                      | ❔    | `tab-btn`    |

### 2b. Emoji di sub-navigazione

| Elemento             | Emoji | Ruolo           |
| -------------------- | ----- | --------------- |
| Sottotab Definitivo  | 📋    | `subnav-btn`    |
| Sottotab UDA modello | 📋    | `subnav-btn`    |
| Controlla voci       | 📋    | `cruscotto-btn` |
| Percorso di governo  | 🔄    | titolo sezione  |

### 2c. Emoji esportazioni (pulsanti)

| Pulsante                      | Emoji             | Classe CSS | Linea |
| ----------------------------- | ----------------- | ---------- | ----- |
| Word (confronto)              | 📄                | `btn-word` | 1413  |
| Copia per Word (confronto)    | 📋                | `btn-copy` | 1414  |
| Markdown (confronto)          | 📝                | `btn-md`   | 1415  |
| PDF (confronto)               | — (da verificare) | `btn-pdf`  | 1416  |
| Scarica proposta .cml         | 📦                | `btn-cml`  | 1417  |
| Invia al Drive                | ☁️                | `btn-cml`  | 1418  |
| Scarica report gruppo         | 📄                | `btn-md`   | 1452  |
| Genera bozza Tecnologia       | ⚙️                | `btn-md`   | 1464  |
| Copia Markdown (Tecnologia)   | 📋                | `btn-copy` | 1468  |
| Scarica Markdown (Tecnologia) | ⬇️                | `btn-md`   | 1469  |
| Word (definitivo)             | 📄                | `btn-word` | 1482  |
| Copia per Word (definitivo)   | 📋                | `btn-copy` | 1487  |
| Markdown (definitivo)         | 📝                | `btn-md`   | 1488  |
| PDF (definitivo)              | — (da verificare) | `btn-pdf`  | 1489  |
| Word (toolbar Riepilogo)      | 📤                | `btn-word` | 1792  |
| Word definitivo (toolbar)     | 📄                | `btn-word` | 1793  |
| Markdown (toolbar Riepilogo)  | 📝                | `btn-md`   | 1794  |
| PDF (toolbar)                 | —                 | `btn-pdf`  | 1795  |
| Report sintesi                | 📝                | `btn-md`   | 1808  |

### 2d. Badge CSS disponibili (definiti ma non sempre usati)

| Classe                       |         Usata in HTML/JS          | Descrizione                         |
| ---------------------------- | :-------------------------------: | ----------------------------------- |
| `.badge--readonly`           |       ✅ (1677, 1857, 4921)       | Consultazione non modificabile      |
| `.badge--prototype`          | ✅ (1305, 1309, 1310, 1857, 4921) | Area operativa / prototipo          |
| `.badge--warning`            |          ✅ (1460, 4921)          | Documento da validare               |
| `.badge--success`            |           ❌ mai usata            | (definita in CSS, non referenziata) |
| `.badge--info`               |           ❌ mai usata            | (definita in CSS, non referenziata) |
| `.completeness-badge--ready` |   ✅ (14 discipline + CSS def)    | Completezza pronta                  |
| `.completeness-badge--base`  |           ❌ mai usata            | (definita, non referenziata)        |
| `.readiness-badge--revision` |   ✅ (14 discipline + CSS def)    | In revisione                        |
| `.readiness-badge--consult`  |             ✅ (1 JS)             | Consultazione                       |
| `.norm-badge`                |         ✅ (3 usi header)         | Badge normativi                     |
| `.norm-icon`                 |            ✅ (14 usi)            | Icone schede normative              |

### 2e. Icone discipline (DISCIPLINE_META, righe 1869-1884)

| Disciplina          | Emoji |
| ------------------- | ----- |
| Italiano            | 📝    |
| Matematica          | 🔢    |
| Scienze             | 🔬    |
| Tecnologia          | ⚙️    |
| Storia              | 🏛️    |
| Latino (LEL)        | 🏺    |
| Geografia           | 🗺️    |
| Inglese             | 🇬🇧    |
| Seconda Lingua      | 🇫🇷    |
| Educazione Civica   | ⚖️    |
| Arte e Immagine     | 🎨    |
| Musica              | 🎵    |
| Educazione Fisica   | ⚽    |
| Religione Cattolica | ⛪    |

---

## 3. Mappatura aree con disallineamenti

### A. Stessa emoji per azioni diverse (📄)

| Linea      | Testo                      | Classe                | Azione reale             |
| ---------- | -------------------------- | --------------------- | ------------------------ |
| 1411       | 📄 Esportazioni ▾          | `toolbar-toggle`      | toggle menu              |
| 1413       | 📄 Word (confronto)        | `btn-word`            | export Word              |
| 1452       | 📄 Scarica report gruppo   | `btn-md`              | export report (Markdown) |
| 1482       | 📄 Word (definitivo)       | `btn-word`            | export Word              |
| 1483       | 📄 Altre esportazioni ▾    | `export-group-toggle` | toggle submenu           |
| 1531       | 📄 Scheda PTOF             | `norm-link`           | link esterno             |
| 1543       | 📄 Scheda RAV              | `norm-link`           | link esterno             |
| 1591       | 📄 Testo PDF MIM           | `norm-link`           | link esterno             |
| 1632       | 📄 EUR-Lex                 | `norm-link`           | link esterno             |
| 1642       | 📄 DigComp 2.2             | `norm-link`           | link esterno             |
| 1790       | 📄 Documento istituzionale | `h3`                  | titolo sezione           |
| 1793       | 📄 Word definitivo         | `btn-word`            | export Word              |
| 2564, 2596 | 📄 DM 254/2012             | `panel-lbl`           | etichetta template       |
| 2997       | 📄 Documento di lavoro     | testo                 | disclaimer               |

**Risultato**: 📄 copre 5 ruoli semantici diversi (toggle, export, link, heading, disclaimer). L'icona non discrimina.

### B. Stessa azione, emoji diversa (Word)

| Linea | Testo                                   | Emoji |
| ----- | --------------------------------------- | ----- |
| 1413  | Word (confronto) — toolbar esportazioni | 📄    |
| 1792  | Word confronto — toolbar Riepilogo      | 📤    |

**Risultato**: stessa funzione "Word confronto" mostra 📄 o 📤 a seconda del toolbar.

### C. Classi btn-* con emoji non coerenti

| Linea | Classe    | Emoji | Testo                   | Problema                                                          |
| ----- | --------- | ----- | ----------------------- | ----------------------------------------------------------------- |
| 1452  | `btn-md`  | 📄    | Scarica report gruppo   | La classe `btn-md` (viola) indica Markdown, ma usa 📄 (documento) |
| 1464  | `btn-md`  | ⚙️    | Genera bozza Tecnologia | `btn-md` per azione Tecnologia, non esportazione Markdown         |
| 1801  | `btn-cml` | 📦    | Backup locale           | `btn-cml` per backup (nessuna relazione con .cml)                 |
| 1802  | `btn-cml` | 📥    | Importa backup          | `btn-cml` per import (nessuna relazione con .cml)                 |

### D. Pulsanti Markdown — inventario dettagliato

| Linea | Emoji | Testo                   | Classe     | Contesto             |
| ----- | ----- | ----------------------- | ---------- | -------------------- |
| 1415  | 📝    | Markdown (confronto)    | `btn-md`   | Toolbar esportazioni |
| 1452  | 📄    | Scarica report gruppo   | `btn-md`   | Report referente     |
| 1464  | ⚙️    | Genera bozza Tecnologia | `btn-md`   | Tecnologia           |
| 1468  | 📋    | Copia Markdown          | `btn-copy` | Tecnologia           |
| 1469  | ⬇️    | Scarica Markdown        | `btn-md`   | Tecnologia           |
| 1488  | 📝    | Markdown (definitivo)   | `btn-md`   | Toolbar esportazioni |
| 1794  | 📝    | Markdown                | `btn-md`   | Toolbar Riepilogo    |
| 1808  | 📝    | Report sintesi          | `btn-md`   | Report curricolo     |

**Risultato**: 3 emoji diverse per azioni correlate a Markdown (📝 standard, 📄 forzato, 📋 per copia, ⬇️ per download, ⚙️ per tecnologia).

### E. Icone norm-link (riferimenti normativi)

Tutti i 10 link normativi (righe 1531-1647) usano 📄 o altre emoji come `norm-icon`. Il pattern è:

- 📄 per documenti PDF/normativi (PTOF, RAV, MIUR, EUR-Lex, DigComp)
- Altre emoji specifiche (🏛️, 📘, 📊, 🧭, 📈, ⚖️, 📗, 🏫, 🧾, 🔑, 💻, 🌍, 🧩)

Le emoji delle schede normative sono tutte diverse e non c'è standardizzazione.

### F. Badge non utilizzati (CSS morto)

| Classe                      | Linea CSS | Mai usata in |
| --------------------------- | --------- | ------------ |
| `.badge--success`           | 871       | HTML né JS   |
| `.badge--info`              | 872       | HTML né JS   |
| `.completeness-badge--base` | 669       | HTML né JS   |

---

## 4. Valutazione opzioni

### Opzione A — Status quo (nessun cambiamento)

- **Pro**: nessuna modifica, zero regression risk
- **Contro**: le emoji continuano a creare confusione semantica; "\`Markdown\`" rimane testo generico non differenziato
- **Verdetto**: ❌ scartata — il report evidenzia troppe ambiguità per ignorarle

### Opzione B — Allineamento puntuale con classi esistenti (raccomandata)

Sostituire solo le emoji/icone, usando le classi già presenti:

| Linea     | Attuale                    | Proposta                   | Motivo                                                                                             |
| --------- | -------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------- |
| 1452      | 📄 Scarica report gruppo   | 📝 Scarica report gruppo   | L'azione usa `btn-md`, l'icona 📝 (memo/writing) è già usata per Markdown (righe 1415, 1488, 1794) |
| 1464      | ⚙️ Genera bozza Tecnologia | 📝 Genera bozza Tecnologia | La funzione genera Markdown, icona 📝 coerente con altre azioni btn-md                             |
| 1468      | 📋 Copia Markdown          | 📝 Copia Markdown          | L'azione è Copia Markdown, icona 📝 è più pertinente di 📋 (clipboard)                             |
| 1469      | ⬇️ Scarica Markdown        | 📝 Scarica Markdown        | Coerenza: tutte le azioni Markdown usano 📝                                                        |
| 1411      | 📄 Esportazioni ▾          | 📤 Esportazioni ▾          | 📤 è l'emoji del tab Esportazioni, coerenza con la barra superiore                                 |
| 1792      | 📤 Word confronto          | 📄 Word confronto          | Coerenza: riga 1413 usa 📄 per Word confronto                                                      |
| 1531,1543 | 📄 Scheda PTOF/RAV         | (nessuna modifica)         | Documenti esterni, 📄 è appropriato                                                                |
| 1801      | 📦 Backup locale           | (valutare)                 | `btn-cml` va rinominato o icona differenziata?                                                     |

- **Pro**: minimo sforzo, massimo impatto sulla chiarezza
- **Contro**: richiede CML-129 runtime slice
- **Verdetto**: ✅ **raccomandata**

### Opzione C — Refactoring strutturale (completo)

Oltre all'opzione B, rinominare le classi CSS e standardizzare:

- Rinominare `btn-cml` → `btn-backup` per le azioni di backup/import
- Aggiungere un sistema di icone centralizzato (evitando emoji mismatch)
- Rimuovere le classi CSS morte (`.badge--success`, `.badge--info`, `.completeness-badge--base`)
- Standardizzare `norm-icon` con un set ristretto di emoji (8-10 invece di 14)

- **Pro**: pulizia strutturale definitiva
- **Contro**: rischio regressione, più modifiche, più test
- **Verdetto**: ⏳ rimandata a ciclo futuro (CML-130+)

### Opzione D — Solo badge, niente emoji

Sostituire **tutte** le emoji con classi CSS di badge (`.badge--*`, `.norm-badge`, ecc.) dove possibile.

- **Pro**: massima accessibilità e coerenza
- **Contro**: perdita di immediatezza visiva (le emoji sono più veloci da riconoscere istintivamente)
- **Verdetto**: ❌ scartata — eccessiva per un'applicazione statica

---

## 5. Raccomandazione finale

**Opzione B** — allineamento puntuale senza cambiare struttura o funzioni.

| Categoria       | Modifiche proposte                                                                       |
| --------------- | ---------------------------------------------------------------------------------------- |
| 📝 Markdown     | Allineare 4 pulsanti a 📝 (1452, 1464, 1468, 1469)                                       |
| 📄/📤 Word      | Allineare linea 1792 a 📄 (con riga 1413)                                                |
| 📤 Esportazioni | Allineare toggle (1411) a 📤 (con tab barra superiore)                                   |
| CSS morto       | Rimuovere `.badge--success`, `.badge--info`, `.completeness-badge--base` (o documentare) |

**Impatto**: 6 sostituzioni emoji in index.html, zero modifiche strutturali.
**Verdetto**: CML-129 — CURRENT_ICON_SYSTEM_RUNTIME_ALIGNMENT

---

## Appendice: Inventario completo emoji

| Emoji | Conteggio | Usi principali                                     |
| ----- | :-------: | -------------------------------------------------- |
| 📄    |    15     | Export, link, heading, disclaimer — **overloaded** |
| 📋    |    20     | Navigazione, copy, sezioni — **overloaded**        |
| 📝    |     6     | Markdown export, DISCIPLINE_META Italiano          |
| 📤    |     2     | Tab Esportazioni + toolbar Riepilogo               |
| 🔄    |     2     | Titolo sezione + tabella statistiche               |
| 🏠    |     1     | Home tab                                           |
| 📚    |     1     | Curriculum tab                                     |
| 🧑‍🏫    |     1     | Competenze e progettazione tab                     |
| ❔    |     1     | Guida tab                                          |

**Nota**: le 14 discipline in DISCIPLINE_META hanno ciascuna un'emoji dedicata (📝, 🔢, 🔬, ⚙️, 🏛️, 🏺, 🗺️, 🇬🇧, 🇫🇷, ⚖️, 🎨, 🎵, ⚽, ⛪) — queste sono **coerenti** e non richiedono modifiche.
