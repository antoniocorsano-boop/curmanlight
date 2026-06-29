# CML-075: Referent Report Readability and Decision Summary — Selection Audit Report

## Audit Summary

| Field                    | Value                                                         |
| ------------------------ | ------------------------------------------------------------- |
| Type                     | Docs-only / Audit-selezione                                   |
| Commit base              | `823dc26`                                                     |
| Opzioni valutate         | 4 (A, B, C, D)                                                |
| Opzione selezionata      | **B — Report referente più leggibile**                        |
| Runtime modificato       | No                                                            |
| Deploy eseguito          | No                                                            |
| Schema `.cml` modificato | No                                                            |
| Verdetto                 | `CML_075_REFERENT_REPORT_READABILITY_NEXT_INCREMENT_SELECTED` |

## Analisi current report (`buildReferentGroupWorkReportMarkdown`)

### Punti di forza

- Copre tutti gli aspetti necessari (sintesi, per-disciplina, punti aperti, evidenze)
- Include traccia per discussione e chiusura prudente
- Usa dati già presenti in `referentOutcomeState`

### Punti di miglioramento

- La sintesi iniziale non separa "accolte" da "non accolte" — tutto è aggregato
- Il referente deve scorrere l'intero report per capire quante decisioni sono chiuse
- Manca indicazione esplicita su "cosa portare al dipartimento" vs "cosa portare al collegio"
- Gerarchia informativa piatta (solo liste puntate, nessuna tabella)
- Le domande guida sono utili ma potrebbero essere più contestuali alla situazione reale

### Dimensione del cambiamento

- Funzione isolata: `buildReferentGroupWorkReportMarkdown()` (linee 3980-4103)
- ~120 righe JS
- Dati sorgente: `referentOutcomeState.outcomes` e `files`
- Impatto: solo output Markdown, nessuna modifica ai dati

## Raccomandazione per CML-076

Modificare `buildReferentGroupWorkReportMarkdown()` per:

1. **Sintesi decisionale immediata**: tabella con totali (accolte, non accolte, da discutere, da chiarire)
2. **Sezione "Decisioni chiuse"**: proposte con handling concluso (confluita, riformulata, assorbita)
3. **Sezione "Decisioni aperte"**: da chiarire, senza esito
4. **Riepilogo per organo competente**: cosa portare al dipartimento vs al collegio
5. **Tabella per discipline**: riepilogo visivo per disciplina con conteggi
6. **Mantenere**: traccia discussione, evidenze, controlli, chiusura prudente

## Files creati in questa slice

- `docs/03_execution/CML-075.md`
- `report/CML-075_referent_report_readability_and_decision_summary_selection_audit.md`
- `docs/REPO-MOVELOG.md` (aggiornato)

## Controlli

- `git status`: solo 3 file docs, `index.html` non toccato — PASS
- `git diff --check`: nessun whitespace error — PASS
- `_published_snapshot/netlify-current/index.html` non modificato — PASS
