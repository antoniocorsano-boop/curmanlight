# CML-011B — Export and Guide Clarity Microcopy

## Stato

Implementazione Opzione A (microcopy export labels) + fix C2 (disclaimer validazione) post audit CML-011A.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `6c97da4` (CML-011A — solo audit docs)
- Working tree: modificata (solo `index.html`)
- Audit CML-011A: 7 criticità (C1-C7), selezionata Opzione A + fix C2

## Modifiche

### Toolbar export — aggiunto `(confronto)`

| Pulsante | Prima | Dopo |
|---|---|---|
| Word | 📄 Word | 📄 Word (confronto) |
| Copia per Word | 📋 Copia per Word | 📋 Copia per Word (confronto) |
| Markdown | 📝 Markdown | 📝 Markdown (confronto) |
| PDF | 🖨 PDF | 🖨 PDF (confronto) |

### Curricolo Definitivo — aggiunto `(definitivo)`

| Pulsante | Prima | Dopo |
|---|---|---|
| Copia per Word | 📋 Copia per Word | 📋 Copia per Word (definitivo) |
| PDF | 🖨 PDF | 🖨 PDF (definitivo) |

Word (definitivo) e Markdown (definitivo) avevano già l'etichetta.

### Fix C2 — disclaimer validazione

Aggiunto dopo la sezione Curricolo Definitivo:

> ⚠️ **Documento di lavoro — da validare.** Non sostituisce delibera del Collegio Docenti.

## Perimetro rispettato

- Solo microcopy testuale ✅
- Nessuna logica approvazione/rifiuto ✅
- Nessun conteggio modificato ✅
- Nessun contenuto card ✅
- Nessun CSS/JS strutturale ✅
- Nessun Markdown generation ✅
- Nessun export panel rimosso ✅

## Verdetto

```
CML_011B_EXPORT_GUIDE_CLARITY_MICROCOPY_DEPLOYED
```

## Prossimo step

CML-011C — da definire (possibile: Opzione B se necessario o chiusura ciclo).
