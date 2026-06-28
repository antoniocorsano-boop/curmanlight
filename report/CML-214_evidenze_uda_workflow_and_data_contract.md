# CML-214 — Evidenze/UDA Workflow and Data Contract

Data: 2026-06-28

## 1. Scopo

Definire il contratto dati e workflow per il modulo Evidenze/UDA prima di qualsiasi implementazione runtime, basandosi sull'audit CML-213.

## 2. File creati

- `docs/02_system/EVIDENZE-UDA-WORKFLOW-CONTRACT.md`
- `docs/03_execution/CML-214.md`
- `report/CML-214_evidenze_uda_workflow_and_data_contract.md`

## 3. Contratto: riassunto

### 3.1 Distinzioni concettuali

- **Evidenza curricolare:** osservabile collegato a unità curricolare
- **Attività didattica:** azione concreta in classe
- **UDA:** percorso che organizza attività, evidenze e valutazione
- **Validazione dipartimentale:** esito `.cml` sul testo curricolare

### 3.2 Evidenza: struttura minima

Campi obbligatori: `id`, `tipo`, `disciplina`, `unitaId`, `testo`, `stato`, `validazioneUmana`  
Stati: `proposta` → `adottata` / `adattata` / `non_applicabile`  
Marcatura: docente o dipartimento

### 3.3 UDA draft: struttura minima

Campi obbligatori: `id`, `tipo`, `titolo`, `disciplina`, `stato`, `timestampCreazione`  
Stati: `bozza` → `in_uso` → `validato` → `archiviato`  
Deve referenziare almeno un `unitaCollegata` valida

### 3.4 Ruoli

| Ruolo | Azioni principali |
|---|---|
| Docente | Marca evidenze, crea/modifica bozze UDA, esporta |
| Dipartimento | Valida UDA, marca evidenze |
| Referente | Import/export `.cml`, coordina pacchetti |

### 3.5 Workflow states

- Evidenza: `proposta` → `adottata`/`adattata`/`non_applicabile`
- UDA: `bozza` → `in_uso` → `validato` → `archiviato`
- `.cml`: invariato (separato)

### 3.6 Privacy

- No dati personali studente
- No voti
- No informazioni sensibili
- Local-first

### 3.7 CML-215 scope

- Pannello evidenze per tutte le 14 discipline
- Marcatura stato in `localStorage`
- Nessuna modifica JSON
- Nessuna modifica `.cml`
- Read-only a meno di giustificazione low-risk

### 3.8 CML-216 scope

- UDA draft da disciplina/nucleo/unità
- Selezione evidenze da CML-215
- Export markdown
- Salvataggio `localStorage`

### 3.9 CML-217 scope

- Smoke CML-215 + CML-216
- GitHub Pages verify
- Validatore/shape test invariati PASS
- Documentazione aggiornata

## 4. Decisioni

- A — contract prima di runtime
- Evidenze da dati esistenti (100% copertura)
- UDA come draft locale
- No `.cml` change
- No SchoolKB dependency
- Privacy-first, local-first
- CML-215 read-only prima
- CML-216 export markdown

## 5. Alternative rigettate

- B — data model senza contratto
- C — panel-only senza linking
- D — UDA export senza linking
- E — defer completo

## 6. Verdetto

`CML_214_EVIDENZE_UDA_WORKFLOW_AND_DATA_CONTRACT_READY`
