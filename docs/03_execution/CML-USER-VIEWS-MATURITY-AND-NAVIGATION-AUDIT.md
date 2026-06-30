# CML-USER-VIEWS-MATURITY-AND-NAVIGATION-AUDIT

## Obiettivo
Auditare le viste utente esistenti di CurManLight per capire quali sezioni devono essere completate, ridotte, accorpate, generalizzate o rese più mature prima di proseguire con nuove implementazioni runtime. La slice sposta il focus dalla cronologia tecnica del progetto alla qualità del prodotto per l'utente scolastico.

## Stato iniziale
- Branch: `main`
- HEAD iniziale: `5adcb3c`
- origin/main: `5adcb3c`
- Working tree: pulito (solo file non tracciati preesistenti)
- Slice precedente: `CML-VIEWS-PRODUCTION-RESTART-SELECTION`
- Verdict precedente: `CML_VIEWS_PRODUCTION_RESTART_SELECTION_PUSHED`
- Score accessibilità: 88/100 (audit-ready interno)
- Runtime: stabile

## Perimetro
- **Runtime**: non modificato
- **File modificati**: solo documenti (md) e movelog
- **Runtime non toccato**: index.html, _published_snapshot/netlify-current/index.html, manifest.json, service-worker.js, assets/, content/curriculum/, tools/, examples/, export/import .cml, schema .cml, dati curricolari reali
- **Vincoli**: nessun deploy, nessun push, nessun aggiornamento score, nessun refactor, nessuna modifica a runtime

## Baseline
- `main/origin/main`: `5adcb3c`
- Accessibilità: 88/100 (audit-ready interno)
- Curriculum: 14/14 discipline normalizzate
- Runtime mappa dati: 14/14 PASS
- P0/P1/P2: 0/0/0
- P3.01–P3.10: chiusi

## Metodologia
Auditare l'app come prodotto utente, non come repository tecnico.

## Viste/sezioni analizzate

### 1. Home / Dashboard
- **Stato**: Parziale
- **Problemi**: Troppo tecnica, non orienta all'azione principale
- **Proposta**: Ridurre a 3 azioni principali (Curricolo, Progettazione, Analisi)

### 2. Curriculum
- **Stato**: Parziale
- **Problemi**: Scrolling eccessivo, Tecnologia ancora privilegiata, non chiaro IN 2012 vs IN 2025
- **Proposta**: Migliorare navigazione a schede, chiarire transizione, ridurre scroll

### 3. Navigazione principale
- **Stato**: Immaturo
- **Problemi**: Menu non sempre affidabile, hash incoerenti
- **Proposta**: Stabilizzare menu e navigazione

### 4. Transizione IN 2012 → IN 2025
- **Stato**: Inesistente
- **Problemi**: Nessuna vista dedicata
- **Proposta**: Creare vista chiara per confronto

### 5. Progettazione annuale/UDA
- **Stato**: Immaturo
- **Problemi**: Solo Tecnologia, non generalizzata
- **Proposta**: Modello generalizzabile per tutte le discipline

### 6. Livelli scolastici
- **Stato**: Non implementato
- **Problemi**: Mancante
- **Proposta**: Aggiungere supporto infanzia/primaria/secondaria

### 7. Raccolta informazioni
- **Stato**: Frammentata
- **Problemi**: Proposte sparse tra card, export, report
- **Proposta**: Unica vista per raccolta e sintesi

### 8. Analisi
- **Stato**: Mancente
- **Problemi**: Nessuna sintesi per esiti/decisioni
- **Proposta**: Dashboard di analisi

### 9. Export Center
- **Stato**: Parziale
- **Problemi**: Ridondante, non chiaro per utente
- **Proposta**: Riorganizzare o semplificare

### 10. Guida
- **Stato**: Immaturo
- **Problemi**: Troppo lunga, spiega il progetto non l'uso
- **Proposta**: Ridurre a istruzioni pratiche

### 11. Mobile
- **Stato**: Parziale
- **Problemi**: Scrolling lungo, bottom bar poco chiaro
- **Proposta**: Ottimizzare navigazione mobile

## Problemi principali

| Area | Problema | Impatto | Severità |
|------|----------|---------|----------|
| Tutte | Tecnologia come disciplina privilegiata | Incoerenza | P1 |
| Curriculum | Scrolling eccessivo | Scomodaggio | P2 |
| Navigazione | Menu/hash non affidabili | Frustrazione | P1 |
| Progettazione | Mancante/Unt only Tecnologia | Blocco lavoro | P1 |
| Analisi | Non esistente | Mancanza decisioni | P1 |

## Maturità sezioni

| Sezione | Maturità | Note |
|---------|----------|------|
| Home | Parziale | Da ridurre |
| Curriculum | Parziale | Da migliorare navigazione |
| Navigazione | Immaturo | Da stabilizzare |
| IN 2012/IN 2025 | Inesistente | Da creare |
| Progettazione UDA | Immaturo | Solo Tecnologia |
| Livelli | Non presente | Mancante |
| Raccolta | Frammentata | Da centralizzare |
| Analisi | Mancente | Da creare |

## Residui Tecnologia-centrici
- Curriculum: Tecnologia usata come esempio/privilegiata
- Progettazione: Solo Tecnologia implementata
- UDA: Solo Tecnologia
- Navigazione: percorsi hardcodati a Tecnologia

## Stato progettazione annuale/UDA
- Solo Tecnologia implementata
- Mancano livelli scolastici
- Mancano UDA interdisciplinari
- Manca generalizzazione a tutte le discipline

## Stato raccolta/analisi
- Proposte: in export center e card
- Esiti: nei report
- Analisi: non esistente
- Sintesi dipartimentale: non supportata

## Roadmap proposta

### A. Fix UX/navigation immediati
- Stabilizzare menu principale
- Correggere hash navigation
- Ridurre scrolling eccessivo in Curriculum

### B. Generalizzazione discipline
- Rimuovere privilegio Tecnologia
- Rendere tutte le discipline equivalenti
- Applicare pattern a tutte le viste

### C. Progettazione annuale/UDA
- Creare modello generalizzabile
- Aggiungere livelli scolastici
- Connettere curricolo a progettazione

### D. Processo IN 2012 → IN 2025
- Creare vista confronto
- Chiarire processo decisionale
- Documentare transizione

### E. Raccolta e analisi
- Unificare proposte in una vista
- Creare dashboard esiti
- Permettere analisi per priorità

## Prossima slice selezionata
**CML-UX-NAVIGATION-AND-SCROLLING-STABILIZATION**

Motivo: Prima di aggiungere progettazione annuale/UDA o analisi, bisogna stabilizzare navigazione, scrolling e coerenza delle viste esistenti.

## Invarianti rispettate
- Nessun runtime modificato
- Nessun file dati toccato
- Nessun deploy
- Nessun push

## Verdetto
```text
CML_USER_VIEWS_MATURITY_AND_NAVIGATION_AUDIT_READY
```