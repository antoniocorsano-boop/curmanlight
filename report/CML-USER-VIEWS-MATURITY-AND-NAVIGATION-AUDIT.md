# CML-USER-VIEWS-MATURITY-AND-NAVIGATION-AUDIT

## Sintesi esecutiva
Audit delle viste utente di CurManLight: strumento non ancora maturo come prodotto scolastico. Navigazione fragilmente stabile, Tecnologia ancora privilegiata, progettazione/UDA mancanti o frammentate, analisi non esistente.

## Tabella viste analizzate

| Sezione | Stato | Problemi | Impatto |
|---------|-------|----------|---------|
| Home / Dashboard | Parziale | Linguaggio tecnico, non orienta azioni | P2 |
| Curriculum | Parziale | Scrolling, Tecnologia privilegiata, IN 2012/2025 poco chiaro | P2 |
| Navigazione principale | Immaturo | Menu/hash incoerenti, mobile differente | P1 |
| Transizione IN 2012 → IN 2025 | Inesistente | Nessuna vista dedicata | P1 |
| Progettazione annuale/UDA | Immaturo | Solo Tecnologia, mancanza modello | P1 |
| Livelli scolastici | Non presente | Mancante per tutte le discipline | P1 |
| Raccolta informazioni | Frammentata | Proposte sparse, export center confuso | P1 |
| Analisi | Mancante | Nessuna dashboard sintesi | P1 |
| Export Center | Parziale | Ridondante, non chiaro | P2 |
| Guida | Immaturo | Troppo lunga, tecnica | P3 |
| Mobile | Parziale | Scrolling, bottom bar poco chiaro | P2 |

## Problemi principali

| Area | Descrizione | Impatto utente | Severità prodotto | Rischio accessibilità |
|------|-------------|---------------|-------------------|----------------------|
| Tutte discipline | Tecnologia privilegiata | Incoerenza per utente | P1 | Basso |
| Curriculum | Scrolling eccessivo | Scomodaggio, perdita orientamento | P2 | Basso |
| Navigazione | Menu/hash non affidabili | Frustrazione, impossibilità accedere sezioni | P1 | Medio |
| Progettazione | Mancanza modello generale | Impossibile passare a UDA | P1 | Basso |
| Analisi | Vista mancante | Nessuna sintesi decisioni | P1 | Basso |

## Tabella maturità sezioni

| Sezione | Maturità | Scadenza | Proposta |
|---------|----------|----------|----------|
| Home | Parziale | Bassa | Semplificare a 3 azioni |
| Curriculum | Parziale | Media | Stabilizzare navigazione |
| Progettazione | Immaturo | Alta | Generalizzare da Tecnologia |
| Analisi | Mancante | Alta | Creare dashboard |
| IN 2012/2025 | Inesistente | Alta | Vista confronto |

## Roadmap

### A. Fix UX/navigation immediati
- Stabilizzare menu principale
- Correggere hash navigation
- Ridurre scrolling eccessivo

### B. Generalizzazione discipline
- Rimuovere privilegio Tecnologia
- Uniformare tutte le discipline

### C. Progettazione annuale/UDA
- Modello generale per tutte discipline
- Aggiungere livelli scolastici
- Connettere a curricolo

### D. Processo IN 2012 → IN 2025
- Vista dedicata confronto
- Processo decisionale chiaro

### E. Raccolta e analisi
- Unica entrata proposte
- Dashboard sintesi esiti

## Prossima slice selezionata
**CML-UX-NAVIGATION-AND-SCROLLING-STABILIZATION**

Motivo: Navigazione instabile blocca ogni altra evoluzione.

## Scope enforcement
- Nessun runtime modificato
- Nessun file dati toccato
- Nessun deploy
- Nessun push

## Verdetto
```text
CML_USER_VIEWS_MATURITY_AND_NAVIGATION_AUDIT_READY
```