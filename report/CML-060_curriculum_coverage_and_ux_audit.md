# Report — CML-060 Curriculum Coverage and UX Audit

## Sintesi

CML-060 avvia due linee parallele e coordinate:

1. copertura disciplinare completa e normalizzata;
2. audit della qualità dell'esperienza utente.

Il runtime non è stato modificato. È stato introdotto uno script di audit per trasformare le impressioni di uso in dati verificabili.

## Evidenze dal runtime corrente

Il runtime dichiara 13 discipline nel blocco `DISCIPLINE_META` e costruisce l'elenco operativo con `Object.keys(DISCIPLINE_META)`.

La struttura dati `DATA` è centrata su:

- `traguardi`;
- `obiettivi`.

Questa impostazione è funzionale per una revisione guidata, ma non è ancora sufficiente per dichiarare completato un curricolo disciplinare pieno secondo la logica PTOF/curricolo di istituto.

## Gap curricolare individuato

Campi da normalizzare per ogni disciplina:

| Campo             | Stato attuale                       | Azione richiesta                |
| ----------------- | ----------------------------------- | ------------------------------- |
| Disciplina        | presente                            | mantenere                       |
| Ordine            | presente nelle voci                 | consolidare                     |
| Classe/fascia     | presente in parte                   | normalizzare                    |
| Ambito/nucleo     | presente come `nuclei` nei metadati | portare a livello voce          |
| Competenza        | presente come descrizione generale  | portare a livello voce o gruppo |
| Traguardo         | presente                            | mantenere e collegare           |
| Obiettivi         | presenti                            | mantenere e articolare          |
| Conoscenze        | non sistematiche                    | introdurre                      |
| Abilità           | non sistematiche                    | introdurre                      |
| Evidenze/criteri  | non sistematici                     | introdurre gradualmente         |
| Fonte             | presente in note testuali           | normalizzare                    |
| Validazione umana | presente come logica generale       | rendere esplicita nei pacchetti |

## Gap UX individuato

La UI ha già molte funzioni utili, ma deve evitare di mostrare tutto nello stesso livello. Il rischio attuale è che l'utente veda contemporaneamente:

- navigazione per discipline;
- schede di revisione;
- pulsanti di export;
- import dipartimentale;
- report referente;
- filtri;
- salvataggio locale;
- riepiloghi e stati.

La direzione raccomandata è:

1. primo livello: che cosa devo fare ora;
2. secondo livello: perché questa decisione conta;
3. terzo livello: dettaglio tecnico, fonti, export, import e report.

## Script introdotto

File:

```text
 tools/audit-cml-curriculum-coverage.mjs
```

Comando:

```bash
node tools/audit-cml-curriculum-coverage.mjs
```

Output previsto:

- elenco discipline nei metadati;
- elenco discipline nei dati;
- discipline metadata-only;
- discipline data-only;
- conteggi per ordine;
- conteggi per stato;
- presenza dei campi istituzionali;
- indicatori di densità UI.

## Interpretazione del risultato atteso

Se il report evidenzia che le discipline esistono ma non hanno campi `conoscenze` e `abilita`, il prossimo passo non deve essere aggiungere pulsanti. Deve essere creare un contratto dati curricolare e poi completare i contenuti disciplina per disciplina.

## Prossime slice raccomandate

### CML-061 — NORMALIZED_CURRICULUM_DATA_CONTRACT

Definire lo schema curricolare comune.

### CML-062 — TECHNOLOGY_DISCIPLINE_FULL_PACK

Applicare lo schema a Tecnologia come disciplina pilota.

### CML-063 — UX_QUALITY_AUDIT_FRAME_DETAIL_BALANCE

Valutare la qualità dell'esperienza utente con criteri misurabili.

### CML-064 — UX_SIMPLIFICATION_FIRST_RUNTIME_INCREMENT

Ridurre il primo livello di pulsanti e dettagli visibili.

## Perimetro

Non modificati:

- runtime pubblicato;
- workflow GitHub Pages;
- schema `.cml`;
- role-access gating;
- export/import/report;
- localStorage/sessionStorage.

## Verdetto

`CML_060_CURRICULUM_DISCIPLINE_COVERAGE_AND_UX_AUDIT_READY`
