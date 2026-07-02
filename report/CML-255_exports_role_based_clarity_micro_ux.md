# Report CML-255 — Exports Role-Based Clarity Micro-UX

**Data:** 2026-07-02

## Sintesi esecutiva

Aggiunto blocco "Quale esportazione usare?" nella sezione Esportazioni per guidare l'utente nella scelta del tipo di esportazione in base al ruolo e alla fase del percorso (Docente → Dipartimento → Referente → Documento finale). Modifica microcopy-only: nessuna nuova funzione, nessuna modifica a storage/schema/dipendenze.

## Modifiche

| File | Tipo | Descrizione |
|------|------|-------------|
| `index.html` | CSS (+6 reglie) | Stili per `.esport-role-guide` e relativi elementi |
| `index.html` | HTML (+9 lines) | Blocco "Quale esportazione usare?" inserito dopo l'intro tip |
| `_published_snapshot/netlify-current/index.html` | CSS + HTML | Stessa modifica replicata |

## Blocco guide aggiunto

```
📌 Quale esportazione usare?
- Docente → Bozza disciplina, .cml proposta
- Dipartimento → Confronto modifiche, .cml esito
- Referente → Report, Documento finale
- Tutti → Copia di sicurezza
```

Posizionato tra l'intro tip e il primo gruppo di esportazione. Compatto, scansionabile, non duplica la Guida o la Home.

## Validazione

- `git diff --check`: OK
- Curricolo normalized: 14/14 valid
- Mappa dati shape: 14/14 PASS
- Byte count identico: 838400 (index.html = snapshot)
- Contenuto guide block identico in entrambi i file

## Checklist

- [x] preflight Git verified
- [x] runtime changes limited to microcopy
- [x] both runtime files synchronized
- [x] validators 14/14 PASS
- [x] shape test 14/14 PASS
- [x] git diff --check OK
- [x] no new dependencies
- [x] no storage/schema changes
- [x] no import/export contract changes
- [x] no deploy

## Verdict

`CML_255_EXPORTS_ROLE_BASED_CLARITY_MICRO_UX_READY_LOCAL_NOT_PUSHED`
