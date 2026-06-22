# CML-028 — Next Functional Block Selection Audit

## Summary

Audit di selezione per il prossimo blocco funzionale di CurManLight. Docs-only. Scelta: **Opzione C — Pacchetto handoff scuola**.

## Preflight

| Controllo | Esito |
|---|---|
| HEAD partenza | `351f2d9` — docs: smoke user handoff guide readability ✅ |
| Working tree | Pulita ✅ |
| MEMORY.md presente | ✅ non committato |
| Runtime modificato | ❌ Nessuno |

## Opzioni valutate

| Opzione | Valore scuola | Rischio tecnico | Docs-only | Deploy |
|---|---|---|---|---|
| A — Onboarding in-app | Alto | Basso | No | Sì |
| B — Pannello "Cosa devo fare ora?" | Alto | Medio-basso | No | Sì |
| **C — Pacchetto handoff scuola** | **Alto** | **Nullo** | **✅ Sì** | **No** |
| D — Micro-miglioramento report | Medio-alto | Medio | No | Sì |
| E — Archivio locale file | Alto | Medio | No | Sì |
| F — Export stampabile guida | Medio | Basso | Parziale | Solo se runtime |

## Selezione

**Opzione C — Pacchetto handoff scuola (documenti)**

Motivazione: valore reale alto per adozione nello stesso istituto, rischio nullo (docs-only), tempismo ideale dopo guida utente verificata. Non brucia le altre opzioni.

## Esito

```
CML_028_NEXT_FUNCTIONAL_BLOCK_SELECTION_AUDIT_READY
```

## Prossimo step

**CML-029** — Creazione pacchetto handoff scuola:
- `docs/04_user/PRESENTAZIONE_SINTETICA.md` (per DS e collegio)
- `docs/04_user/NOTE_PER_COLLEGIO_DOCENTI.md` (presentazione ufficiale)
- `docs/04_user/VADEMECUM_DIPARTIMENTI.md` (foglio operativo coordinatori)
- Docs-only, nessun deploy
