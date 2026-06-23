# CML-076: Referent Report Readability — Runtime Increment Report

## Technical Report

### Function Modified

`buildReferentGroupWorkReportMarkdown()` (linee 3980-4161)

### Diff

+161 / -90 righe. Solo output Markdown ristrutturato, nessuna modifica ai dati sorgente.

### Prima vs Dopo

| Aspetto | Prima (CML-075) | Dopo (CML-076) |
|---------|-----------------|----------------|
| Sezioni | 7 sezioni piatte | 8 sezioni numerate |
| Sintesi | Lista puntata | Tabella + percentuale |
| Decisioni | Aggregate per disciplina | Chiuse vs Aperte |
| Passaggi successivi | Impliciti nelle domande guida | Espliciti (dipartimento vs collegio) |
| Tabella discipline | Dettaglio per disciplina (liste) | Tabella compatta |
| Domande guida | Fisse (5 domande) | Contestuali allo stato |
| Chiusura | 1 riga | 2 righe (identico significato) |

### Struttura output corrente

```
# Report di lavoro per il gruppo curricolo

> Nota: ...

## 1. Sintesi decisionale
[Tabella: totale, concluse, aperte, %]
[Tabella: dettaglio per esito]

## 2. Decisioni chiuse
[Sezioni: Confluita, Riformulata, Assorbita]

## 3. Decisioni aperte
[Sezioni: Da chiarire, Senza esito, con elenchi]

## 4. Quadro per disciplina
[Tabella: disciplina | stato | totale | concluse | aperte]

## 5. Passaggi successivi
[Da rinviare al dipartimento / Pronte per il Collegio]

## 6. Evidenze e controlli
[File, note, avvisi in tabelle]

## 7. Traccia per la discussione
[Domande contestuali o conferma chiusura]

## 8. Chiusura prudente
```

### Dati invariati

- `referentOutcomeState.outcomes` — invariato
- `referentOutcomeState.files` — invariato
- Categorie handling: `confluita_nella_sintesi`, `riformulata_dal_dipartimento`, `assorbita_in_altra_proposta`, `da_chiarire`, vuoto/null

### Non modificato (verifica)

- Schema `.cml` — non toccato
- Import/export — non toccati
- Role-access — non toccato
- Storage — non toccato
- Navigazione/layout — non toccati

### Verdetto

```
CML_076_REFERENT_REPORT_READABILITY_RUNTIME_INCREMENT_READY
```

### Prossimo step raccomandato

CML-076A — Referent report readability live deploy smoke (30/30 navigation + function checks)
