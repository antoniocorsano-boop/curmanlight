# CML-111 — Disciplinary Views Contextual Navigation Coherence Audit

## Stato
14/0/0 — tutte normalizzate.

## Problemi
| Livello | Problema | Impatto |
|---------|----------|---------|
| **P0** | Disallineamento hash/selDisc: URL dice Italiano, corpo mostra Tecnologia | Alto |
| P1 | renderTecnologiaNorm() hardcoded su Tecnologia | Medio |
| P1 | Sidebirda invariata in tutti i tab Curriculum | Medio |
| P2 | Export panel solo per Tecnologia | Basso |
| P3 | Badge "Sola consultazione" senza discipline | Molto basso |

## Bug confermato
Sì — il disallineamento esiste: hash `#cur-Italiano` + `selDisc="Tecnologia"` → corpo mostra Tecnologia. Causa: nessuna sincronizzazione bidirezionale tra URL hash e stato disciplina.

## Next
**CML-112** — sincronizzare hash/selectDisc: `selectDisc()` aggiorni hash, listener hashchange inizializzi selDisc, generalizzare renderTecnologiaNorm().

## Verdetto
`CML_111_DISCIPLINARY_VIEWS_CONTEXTUAL_NAV_COHERENCE_AUDIT_READY`
