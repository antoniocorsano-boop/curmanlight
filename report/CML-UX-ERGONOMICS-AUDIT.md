# Report — CML UX Ergonomics Audit

## Sintesi esecutiva

L'audit ha analizzato 9 viste dello strumento pubblicato, valutando ergonomia, chiarezza, scroll, densità informativa e navigazione per utenti scolastici non tecnici.

**Punteggio complessivo: 11/30**

**Vista peggiore**: Revisione e Competenze e progettazione — Evidenze

**Problema dominante**: scroll prolungati + azioni duplicate

**Azione prioritaria**: centralizzare export, comprimere viste lunghe, separare Evidenze/UDA

## Scorecard UX CurManLight

| Dimensione                                 | Punteggio 0–3 | Evidenza                                             |
| ------------------------------------------ | ------------: | ---------------------------------------------------- |
| Orientamento                               |             1 | Schede complesse, subnav non sempre auto-evidente    |
| Chiarezza del compito                      |             1 | Azioni multiple competitive nella stessa vista       |
| Densità visiva                             |             0 | Alta densità, troppi elementi concorrenti            |
| Profondità scroll                          |             0 | Molte viste oltre 3 schermate                        |
| Coerenza navigazione                       |             1 | Hash e subnav non sincronizzati                      |
| Leggibilità                                |             2 | Font leggibile, avvisi lunghi e microcopy ridondanti |
| Accessibilità base                         |             2 | Touch target ok, mancano landmark/aria-current       |
| Controllo utente                           |             2 | Azioni locali chiare, percorsi confusi da ridondanze |
| Separazione consultazione/revisione/export |             1 | Azioni duplicate in 3 viste                          |
| Prontezza uso scolastico reale             |             1 | Funziona ma richiede training o adattamento          |

## Punteggio complessivo

**11/30** — Lo strumento è funzionalmente completo ma presenta problemi significativi di ergonomia e navigazione che ne limitano l'adozione immediata in contesti scolastici reali senza training o adattamento.

## Evidenze principali

- **Viste operative sovraccariche**: Revisione (4–6 schermate) ed Esportazioni (3–5 schermate) superano la soglia di attenzione per un utente non tecnico
- **Export frammentati**: le stesse funzionalità di esportazione appaiono in Revisione, Definitivo ed Esportazioni, creando confusione
- **Sidebar intrusiva**: la barra laterale delle discipline appare anche in viste dove non serve (Fonti)
- **Navigazione ibrida instabile**: hash URL e subnav non sempre sincronizzati

## Mappa rischi

| Priorità | Problema                                    | Impatto utente      | Azione consigliata                   |
| -------- | ------------------------------------------- | ------------------- | ------------------------------------ |
| P0       | Navigazione hash + subnav non sincronizzata | Disorientamento     | Sincronizzare hash/subnav            |
| P0       | Sidebar in viste readonly                   | Disorientamento     | Rimuovere sidebar dove non serve     |
| P1       | Scroll 4–6 schermate                        | Perdita contesto    | Comprimere viste, accordion          |
| P1       | Export duplicati in 3 punti                 | Scelta difficile    | Centralizzare in Esportazioni        |
| P1       | Azioni multiple competitive                 | Sovraccarico        | Ridurre a 1 primaria per area        |
| P2       | Breadcrumb assente                          | Percorso non chiaro | Aggiungere breadcrumb                |
| P2       | Disclaimer verbosi                          | Warning fatigue     | Comprimere notice box                |
| P3       | Touch target marginali                      | Difficoltà motorie  | Aumentare padding a viewport ridotta |

## Vista per vista

### Home

- **Scroll**: 1–2 schermate
- **Rischio**: Basso
- **Criticità**: Stats tecniche premature per primo accesso
- **Coerenza**: Alta

### Curriculum / Consulta

- **Scroll**: 3–5 schermate
- **Rischio**: Medio–alto
- **Criticità**: Sidebar e azioni editoriali visibili in modalità consultativa
- **Coerenza**: Media

### Curriculum / Revisione

- **Scroll**: 4–6 schermate
- **Rischio**: Alto
- **Criticità**: Export duplicati, azioni concorrenti, sidebar
- **Coerenza**: Bassa

### Curriculum / Definitivo

- **Scroll**: 2–3 schermate
- **Rischio**: Medio
- **Criticità**: Export ridondanti rispetto a Esportazioni

### Curriculum / Fonti

- **Scroll**: 1–2 schermate
- **Rischio**: Basso
- **Criticità**: Sidebar non necessaria
- **Coerenza**: Alta

### Competenze e progettazione — Evidenze

- **Scroll**: 3–6 schermate
- **Rischio**: Medio–alto
- **Criticità**: Disclaimer tecnici miscelati con contenuto operativo

### Competenze e progettazione — UDA modello

- **Scroll**: 2–3 schermate
- **Rischio**: Medio
- **Criticità**: Mappa disciplinare ancillare nella stessa vista

### Esportazioni

- **Scroll**: 3–5 schermate
- **Rischio**: Alto
- **Criticità**: Azioni duplicate rispetto a Revisione/Definitivo
- **Coerenza**: Bassa

### Guida

- **Scroll**: 2–3 schermate
- **Rischio**: Basso
- **Coerenza**: Alta

## Raccomandazioni operative

1. **Centralizzare export** in unico pannello contestuale in Esportazioni; rimuovere da Revisione e Definitivo
2. **Comprimere viste lunghe**: accordion per ordine scuola in Consulta, toggle per pannelli secondari in Revisione
3. **Separare Evidenze/UDA** in due sottoview chiare con navigazione esplicita
4. **Rimuovere sidebar** da Fonti e viste readonly
5. **Aggiungere breadcrumb** in tutte le viste
6. **Ridurre notice box** a massimo 2 righe; warning fatigue è reale
7. **Sincronizzare hash/subnav**: lo stato della navigazione deve essere coerente
8. **Aumentare touch target** a viewport ridotta per toolbar e tabbar

## Prima slice runtime consigliata

CML-UX-001 — Centralizzare export e comprimere scroll in Revisione (P1)

## Verdict

```text
CML_UX_ERGONOMICS_AUDIT_READY
```
