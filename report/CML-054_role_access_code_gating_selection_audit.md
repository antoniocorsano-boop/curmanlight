# CML-054 — Role Access Code Gating Selection Audit

## Summary

Audit di selezione per introdurre codice operativo di ruolo in CurManLight. Opzione selezionata: **C — Codice per dipartimento e referente**.

## Dettaglio

| Campo | Valore |
|---|---|
| HEAD partenza | `f6f87a9` |
| Opzioni valutate | 6 (A–F) |
| Opzione selezionata | **C — Codice operativo per dipartimento e referente** |
| Motivazione | Riduce usi accidentali durante la prova, mantiene consultazione libera, impatto runtime minimo |

## Opzioni a confronto

| Opzione | Voto | Motivazione |
|---|---|---|
| A — Nessun codice | ⚠️ | Non risolve il problema |
| B — Solo dipartimento | ❌ | Copertura incompleta |
| **C — Dipartimento + referente** | **✅** | **Protegge azioni critiche, impatto minimo** |
| D — Selettore ruolo | ⚠️ | Protezione nulla |
| E — Codice configurabile | ❌ | Complessità eccessiva |
| F — Login reali | ❌ | Non compatibile |

## Azioni da proteggere

| Azione | Codice richiesto |
|---|---|
| Esportazione esito dipartimentale `.cml` | ✅ |
| Import esiti dipartimentali (referente) | ✅ |
| Generazione report gruppo curricolo | ✅ |
| Reset dati locali | ❌ Non necessaria |

## Azioni da lasciare libere

Lettura curricolo, sezioni generali, guide, esempi, proposta docente, import proposta, validazione esiti.

## Microcopy

**Titolo:** "Codice operativo richiesto"
**Testo:** "Questa funzione è riservata al ruolo indicato nella prova controllata. Inserisci il codice operativo fornito dal referente."
**Avvertenza:** "Il codice evita usi accidentali. Non è una password istituzionale e non sostituisce autorizzazioni, firme o delibere."
**Pulsanti:** "Sblocca funzione" / "Annulla"

## Confini

| Controllo | Esito |
|---|---|
| Docs-only | ✅ |
| Nessun runtime modificato | ✅ |
| Nessun deploy | ✅ |
| Nessuna modifica schema `.cml` | ✅ |
| Nessuna modifica persistenza | ✅ |
| MEMORY.md presente come untracked | ✅ non committato |
| `.kilo/` presente come untracked | ✅ non committato |
| CLAUDE.md presente come untracked | ✅ non committato |

## Prossimo step raccomandato

CML-055 — ROLE_ACCESS_CODE_GATING_CONTRACT (docs-only, specifica implementativa prima del runtime)
