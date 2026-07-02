# CML-260 — Role-Operational Language and Cognitive Load Backlog

## Report di audit multi-agente

**Data analisi:** 2026-07-02
**Repository:** CurManLight
**Branch:** main
**HEAD:** `fb306dd` (CML-259P)
**Slice precedente:** CML-259P — UX CYCLE STABILITY CLOSURE AUDIT

---

## Sintesi esecutiva

CML-260 è un audit multi-agente (5 agenti paralleli) che analizza il runtime CurManLight da 5 prospettive complementari: linguaggio di superficie, percorso ruoli scolastici, carico cognitivo per view, naming delle esportazioni, e coerenza con lessico scolastico reale.

**68 rilievi totali** (7 P0, 18 P1, 37 P2, 6 P3) distribuiti su 5 dimensioni. Il backlog consolidato produce una roadmap di 6 slice future (CML-261 → CML-266), con priorità sui fix microcopy immediati (P0 anglicismi, JSON visibile, typo) e rimandando gli interventi strutturali (ruolo Dirigente, riduzione carico cognitivo) a slice successive.

**Decisione:** `ROLE_OPERATIONALIZATION_BACKLOG_READY`

---

## Metodologia

5 agenti paralleli hanno analizzato `index.html`, `_published_snapshot/netlify-current/index.html`, `docs/04_user/` e `report/`:

| Agente | Focus | Metodo |
|--------|-------|--------|
| 1 — Surface Scanner | Termini tecnici visibili in UI | Grep pattern tecnico su runtime |
| 2 — Role Journey | Chiarezza percorso per ogni ruolo | Analisi Guida + Processo + Esportazioni |
| 3 — Cognitive Load | Densità informativa per view | Conteggio blocchi/scelte/nested view |
| 4 — Export Naming | Etichette esportazione | Analisi semantica nomi export |
| 5 — School Language | Coerenza lessico scolastico | Pattern matching vs dizionario scolastico |

---

## Findings dettagliati

### Agente 1 — Surface Language Scanner (20 findings)

| ID | Priority | Finding | File:Linea | Fix suggerito |
|----|----------|---------|------------|---------------|
| S1 | P0 | `"fonte": "JSON..."` visibile in UI area curriculum | `index.html:2142` | Rimuovere JSON, mostrare solo "dal curricolo" |
| S2 | P1 | Underscore in `option value="docente_individuale"` | `index.html:895` | Usare `data-value` con ID, label human-readable |
| S3 | P1 | Underscore in `option value="dipartimento_orizzontale"` | `index.html:896` | Stesso fix S2 |
| S4 | P1 | `.cml` come label di formato senza spiegazione | `index.html:4678` | Aggiungere didascalia "formato CurManLight" |
| S5 | P1 | Typo "Piu" al posto di "Più" | `index.html:3891` | Correggere "Più" |
| S6 | P2 | "UDA smart" usato 12+ volte in UI | `index.html:1529,1592,3122,...` | Sostituire con "UDA personalizzata" |
| S7 | P2 | "CurManLight" visibile in UI | `index.html:102` | Sostituire con "Curricolo" |
| S8 | P2 | "Prototipo" badge permanente | `index.html:112` | Rimuovere o rendere rimovibile |
| S9 | P2 | "Resoconto sintesi" ambiguo | `index.html:4650` | Non è export, è view |
| S10 | P2 | "Copia per Word" fuorviante | `index.html:4662` | "Scarica documento (docx)" |
| S11 | P2 | "Testo" troppo generico | `index.html:4668` | "Scheda testo" |
| S12 | P2 | Messaggio contraddittorio disclaimer Programmazione | `index.html:1529` | Allineare a Passo 2 |
| S13 | P2 | "Percorso di lavoro" non menziona UDA smart | `index.html:300` | Aggiungere riferimento |
| S14 | P2 | UDA smart assente da Esportazioni | `index.html:4650` | Aggiungere voce |
| S15 | P3 | CSS class naming inconsistente | `index.html` varie | Refactor classi |
| S16–S20 | P3 | ID interni, storage keys, ref minori | Varie | Backlog P3 |

### Agente 2 — Role Journey Analyzer (6 findings)

| ID | Priority | Finding | Area | Fix suggerito |
|----|----------|---------|------|---------------|
| R1 | P0 | Dirigente completamente assente da UI | Tutte | Aggiungere ruolo con vista supervisione |
| R2 | P1 | Gruppo di lavoro solo passivo | Guida, Processo | Aggiungere azioni attive |
| R3 | P1 | Dipartimento "confronta" vago | Guida | Specificare "confronta e approva" |
| R4 | P2 | Documento finale senza owner esplicito | Processo | Nominare Referente come owner |
| R5 | P2 | Nessuna selezione ruolo nel profilo | Impostazioni | Aggiungere campo ruolo |
| R6 | P2 | Role access gate Referente non visibile | Processo | Mostrare stato accesso |

### Agente 3 — Cognitive Load Analyst (10 findings)

| ID | Priority | Finding | View | Impatto |
|----|----------|---------|------|---------|
| C1 | P0 | Home — 14+ blocchi informativi, percorsi multipli | Home | Utente si perde |
| C2 | P0 | Esportazioni — 19 scelte senza filtro | Esportazioni | Paralisi decisionale |
| C3 | P1 | Processo — 4 attori in 2 pannelli | Processo | Carico alto |
| C4 | P1 | Processo — passo docente mancante | Processo | Gap operativo |
| C5 | P1 | Competenze — sequenza invisible | Competenze | Disorientamento |
| C6 | P1 | Competenze — 3 sub-view default-closed | Competenze | Contenuto nascosto |
| C7 | P2 | Home — micro-guida compete con card navigazione | Home | Conflitto visivo |
| C8 | P2 | Esportazioni — "Copia per Word" confonde | Esportazioni | Falsa aspettativa |
| C9 | P2 | Disclaimer ripetuto in più view | Cross | Stanchezza utente |
| C10 | P2 | Prototipo badge sempre visibile | Cross | Distrazione |

### Agente 4 — Export/File Naming Auditor (10 findings)

| ID | Priority | Finding | Etichetta | Fix suggerito |
|----|----------|---------|-----------|---------------|
| E1 | P0 | "Resoconto sintesi" non è export | Label export | Spostare in view separata |
| E2 | P1 | "Copia per Word" suggerisce editing | Label export | "Scarica documento (docx)" |
| E3 | P1 | "Testo" non dice cosa contiene | Label export | "Scheda testo completo" |
| E4 | P1 | `.cml` spiegato solo negativamente | Label export | Aggiungere "formato CurManLight" |
| E5 | P1 | Guida ruoli piatta/non per fase | Guida export | Rendere sequenziale |
| E6 | P2 | Nessuna distinzione export singolo/multiplo | UI export | Separare visivamente |
| E7 | P2 | "Report" non chiaro in contesto scolastico | Label export | "Scheda riepilogativa" |
| E8 | P2 | "Backup"/"Archivio" sovrapposti | Label export | Unificare o distinguere |
| E9 | P2 | Formato file mai prima del download | UI export | Hint "cosa scarichi" |
| E10 | P2 | Nessun "Cosa ottieni" per export | UI export | Tooltip descrittivo |

### Agente 5 — School Language Consistency Auditor (22 findings)

| ID | Priority | Termine | Occorrenze | Sostituzione |
|----|----------|---------|------------|--------------|
| L1 | P0 | "UDA smart" | 12+ | "UDA personalizzata" |
| L2 | P0 | "persistita" | 2 | "salvata" |
| L3 | P1 | "Reset" | 1 | "Ripristina" |
| L4 | P1 | "report" (nome inglese) | 3 | "documento"/"scheda" |
| L5 | P1 | "import" come nome | 2 | "importa" |
| L6 | P1 | "export" come nome | 4 | "esporta" |
| L7 | P1 | "JSON" in UI | 1 | "dati curricolo" |
| L8–L22 | P2 | Voce passiva, tono burocratico, incongruenze | Varie | Attivo, chiaro, coerente |

---

## Backlog consolidato per priorità

### P0 — Impedimenti immediati (7)

| ID | Descrizione | Area | Sforzo |
|----|-------------|------|--------|
| S1 | JSON visibile in UI | Curriculum | 1 riga |
| R1 | Dirigente assente | Tutta UI | ~40 righe |
| C1 | Home 14+ blocchi | Home | ~30 righe |
| C2 | 19 scelte Esportazioni | Esportazioni | ~20 righe |
| E1 | "Resoconto sintesi" non export | Esportazioni | 5 righe |
| L1 | "UDA smart" 12+ | Tutta UI | 12+ righe |
| L2 | "persistita" | Multipla | 2 righe |

### P1 — Priorità alta (18)

| ID | Descrizione | Area | Sforzo |
|----|-------------|------|--------|
| S2–S3 | Underscore value select | Filtri | 4 righe |
| S4 | .cml label negativa | Esportazioni | 2 righe |
| S5 | Typo "Piu" | UI | 1 riga |
| R2 | Gruppo lavoro passivo | Guida/Processo | ~15 righe |
| R3 | Dipartimento vago | Guida | 3 righe |
| C3–C6 | Carico Processo/Competenze | Varie | ~40 righe |
| E2–E5 | Export naming | Esportazioni | ~10 righe |
| L3–L7 | Anglicismi P1 | Varie | ~10 righe |

### P2 — Priorità media (37)

Distribuiti tra Surface Language (10), Role Journey (3), Cognitive Load (4), Export Naming (5), School Language (15).

Raggruppamenti principali:
- Tonale: voce passiva, burocratese (15 occorrenze)
- Navigazione: micro-guida in Home, filtro Esportazioni
- Chiarezza: export tooltip, formato file hint

### P3 — Bassa priorità (6)

CSS class naming, ID interni, storage keys, ref minori. Rimandati a ciclo refactoring.

---

## Roadmap esecutiva raccomandata

La roadmap segue un ordinamento per impatto/sforzo, partendo dai fix microcopy P0/P1 (rapidi, visibili) e proseguendo verso interventi strutturali maggiori.

### CML-261 — Role Language Surface Cleanup
**Tipo:** runtime microfix
**Stima:** ~20 righe modificate in `index.html` + snapshot
**Target P0/P1:**
- L1: "UDA smart" → "UDA personalizzata" (12+ occorrenze)
- L2: "persistita" → "salvata" (2 occorrenze)
- L3: "Reset" → "Ripristina"
- L4: "report" → "documento"/"scheda" (3 occorrenze)
- L5: "import" → "importa"
- L6: "export" → "esporta"
- S5: "Piu" → "Più"
- Collegate: S12 disclaimer Programmazione, L7 JSON in UI
**Rischio:** Basso (solo stringhe, nessuna logica)
**Validazione:** Validatori 14/14, shape test 14/14

### CML-262 — Export Naming Operational Microcopy
**Tipo:** runtime microfix
**Stima:** ~15 righe modificate in `index.html` + snapshot
**Target:**
- E1: Spostare "Resoconto sintesi" da export a view
- E2: "Copia per Word" → "Scarica documento (docx)"
- E3: "Testo" → "Scheda testo completo"
- S4: Aggiungere didascalia `.cml` positiva
- E6–E10: Aggiungere hint formato file, tooltip "Cosa ottieni"
**Rischio:** Basso (solo etichette)
**Validazione:** Validatori 14/14, shape test 14/14

### CML-263 — Surface Technical Terms Cleanup
**Tipo:** runtime microfix
**Stima:** ~10 righe modificate in `index.html` + snapshot
**Target:**
- S1: Rimuovere "JSON" dalla UI curriculum
- S2–S3: Sostituire underscore in option value con etichette human-readable
- S7: "CurManLight" → "Curricolo" in UI
- S8: Rimuovere/rendere rimovibile "Prototipo" badge
**Rischio:** Basso (solo stringhe e attributi)
**Validazione:** Validatori 14/14, shape test 14/14

### CML-264 — Role Journey Governance
**Tipo:** runtime increment
**Stima:** ~50 righe modificate in `index.html` + snapshot
**Target:**
- R1: Aggiungere ruolo Dirigente con vista supervisione (Guida + Processo)
- R2: Aggiungere azioni attive per Gruppo di lavoro
- R3: Specificare "confronta e approva" per Dipartimento
- R4: Nominare Referente come owner Documento finale
- R5: Aggiungere campo selezione ruolo nel profilo utente
**Rischio:** Medio (struttura ruoli, nuove view)
**Validazione:** Validatori 14/14, shape test 14/14, smoke ruoli

### CML-265 — Cognitive Load Reduction
**Tipo:** runtime increment
**Stima:** ~80 righe modificate in `index.html` + snapshot
**Target:**
- C1: Ridurre Home a 2 percorsi principali per tipo utente
- C2: Aggiungere filtro ruolo/fase a Esportazioni
- C3–C4: Riorganizzare Processo per flusso lineare
- C5–C6: Aprire Competenze con sequenza visibile
- C9–C10: Ridurre disclaimer, rimuovere badge prototipo
**Rischio:** Medio-Alto (modifiche strutturali a view)
**Validazione:** Validatori 14/14, shape test 14/14, smoke completo

### CML-266 — School Language Live Smoke
**Tipo:** live smoke + docs
**Target:** Verificare CML-261/262/263 su GitHub Pages
**Dipende da:** CML-261P, CML-262P, CML-263P

---

## Rischi e mitigazioni

| Rischio | Probabilità | Impatto | Mitigazione |
|---------|-------------|---------|-------------|
| Regressione visiva dopo fix stringhe | Bassa | Medio | Smoke test completo dopo ogni slice |
| Ruolo Dirigente aumenta complessità | Media | Alto | Validare con utenti reali prima del deploy |
| Riduzione blocchi Home perde informazioni | Media | Alto | Mantenere accesso secondario via menu |
| Modifiche Esportazioni confondono utenti esistenti | Media | Medio | Comunicare cambiamenti via changelog |
| Sync runtime/snapshot dimenticato | Bassa | Alto | Verifica byte count dopo ogni modifica |

---

## Checklist finale

- [x] repository preflight verified
- [x] runtime inspected read-only
- [x] 5 agenti paralleli completati
- [x] 68 findings consolidati (7 P0, 18 P1, 37 P2, 6 P3)
- [x] Roadmap CML-261 → CML-266 definita
- [x] Rischi e mitigazioni documentati
- [x] runtime unchanged
- [x] no deploy executed
- [x] no push executed
- [x] backlog decision recorded

---

## Verdict

```
CML_260_MULTI_AGENT_ROLE_OPERATIONAL_AUDIT_READY_LOCAL_NOT_PUSHED
```
