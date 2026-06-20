# CML-005R — Gap 2025 Operational Review Implementation

```
CML_005R_GAP_2025_OPERATIONAL_REVIEW_READY
```

## Scopo

Rendere operativo il "Gap 2025" nel workflow di Revisione per disciplina, connettendo l'avviso metodologico della tab Riferimenti normativi al luogo dove si decide, senza creare un nuovo tab e senza modificare la logica decisionale esistente.

## Opzione selezionata

Opzione B da CML-005R-SELECT:
- **Indicatore** "🧩 Gap 2025 della disciplina" nelle card da decidere
- **Microcopy/link** nella card Riferimenti normativi

## File modificati

| File | Cambiamento |
|---|---|
| `_published_snapshot/netlify-current/index.html` | +5 righe, 1 modifica |

### Microcopy — Riferimenti normativi

> I gap 2025 non modificano automaticamente il curricolo. [Apri Revisione per disciplina] per valutare ogni proposta, confrontarla con il curricolo vigente e decidere se approvarla, respingerla o modificarla.

### Indicatore — Revisione per disciplina

> 🧩 Gap 2025 della disciplina  
> Questa proposta evidenzia una possibile integrazione rispetto al curricolo vigente. Deve essere valutata dal gruppo di lavoro prima di entrare nel curricolo definitivo.  
> Base 2012, evidenze d'istituto e proposta 2025 restano distinguibili fino alla validazione.

## Conferme

- [x] Gap 2025 resta proposta di revisione, non base automatica
- [x] Workflow approve/reject/edit preservato
- [x] Dati 14 discipline preservati
- [x] Confronto IN2012→IN2025 preservato
- [x] localStorage preservato (nessuna nuova chiave)
- [x] PDF cache-safe preservato (link `Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf`)
- [x] sw.js, _headers, assets non modificati
- [x] Nessun backend/API/auth/Netlify Forms
- [x] Nessun nuovo tab "Gap 2025" creato
- [x] Nessun deploy eseguito

## Rischi residui

1. L'indicatore potrebbe essere ignorato → mitigato dal link nella normativa
2. L'indicatore aggiunge righe visibili → scompare dopo la decisione
3. Utenti esperti potrebbero trovarlo ripetitivo → trade-off accettabile per chiarezza

## Verdetto

```
CML_005R_GAP_2025_OPERATIONAL_REVIEW_READY
commit finale: da definire dopo commit
stato: implementazione completata, deploy non eseguito
```

## Prossimo passo

CML-006R-SELECT — Visual Lightening / Graphic Density Audit
