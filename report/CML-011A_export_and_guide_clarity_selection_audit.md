# CML-011A — Report: Export and Guide Clarity Selection Audit

**Data**: 21/06/2026  
**Tipo**: Audit di selezione (nessuna modifica runtime)

## Criticità individuate

| #   | Criticità                                                       | Gravità |
| --- | --------------------------------------------------------------- | ------- |
| C1  | Due "Markdown" semanticamente diversi (toolbar vs export panel) | Media   |
| C2  | Disclaimer validazione assente su "Curricolo Definitivo"        | Alta    |
| C3  | "Prossima azione" statica (sempre 12, nessun progresso)         | Media   |
| C4  | Guida "3️⃣ Quando hai finito" in fondo, poco visibile            | Bassa   |
| C5  | Export panel solo Tecnologia                                    | Media   |
| C6  | Tooltip non visibili su mobile                                  | Bassa   |
| C7  | "Copia per Word" — nome tecnico poco chiaro                     | Bassa   |

## Opzioni valutate

| Opzione | Descrizione                     | Rischio     | Raccomandazione   |
| ------- | ------------------------------- | ----------- | ----------------- |
| A       | Microcopy export e guida minima | Molto basso | ✅ Primaria       |
| B       | Pannello "Cosa esporti"         | Basso       | Secondaria        |
| C       | Percorso guidato step           | Medio       | Rimandare         |
| D       | Solo disclaimer su Definitivo   | Molto basso | ✅ Includere in A |

## Opzione selezionata

**Opzione A + fix C2**: microcopy etichette export + disclaimer validazione su "Curricolo Definitivo".

## File da modificare in CML-011B

- `_published_snapshot/netlify-current/index.html` (solo testo, nessuna logica)

## Esclusioni esplicite

- Card, approvazione/rifiuto, conteggi, export functions, PDF, sw.js, _headers, assets

## Verdetto

`CML_011A_EXPORT_GUIDE_CLARITY_SELECTION_AUDIT_READY`
