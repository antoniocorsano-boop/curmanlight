# CML-218 — Evidenze/UDA Workflow Smoke and Closure Gate

## Sintesi

Il ciclo Evidenze/UDA (CML-214 contract → CML-215 evidence panel → CML-216 readiness audit → CML-217 implementation → CML-217S push → CML-218 closure) è completo e funzionante.

## Stato finale

- **Normalized data**: 14/14
- **Runtime mappa**: 14/14
- **Shape test**: 14/14 PASS
- **Validator**: 14/14 PASS
- **Evidence panel**: 14/14 discipline con evidenze marcabili (Adotta/Adatta/Escludi)
- **UDA draft panel**: generazione bozza Markdown per qualsiasi disciplina/unità
- **localStorage**: solo `cml_evidenze_state` per evidenze
- **CML workflow**: invariato, non contaminato

## Verifiche

### A. Pre-flight
- Working tree: pulito, HEAD = origin/main = `5a5f65f`
- Validator: 14/14 PASS
- Shape test: 14/14 PASS
- `git diff --check`: pulito
- Secret scan: pulito

### B. Static code analysis

| Punto | Risultato |
|---|---|
| 1. localStorage solo `cml_evidenze_state` | ✅ |
| 2. Md fields: tutte 6 sezioni presenti | ✅ |
| 3. Privacy notice presente | ✅ |
| 4. Esclusa non trattata come selezionata | ⚠️ logica corretta, label UI inconsistenti |
| 5. `.cml` workflow invariato | ✅ |

### C. Public GitHub Pages
- **URL**: https://antoniocorsano-boop.github.io/curmanlight/
- **HTTP**: 200, app caricata
- **Evidence panel**: visibile, stati funzionanti
- **UDA draft panel**: dropdown, generazione, copia/download funzionanti

### D. Representative workflow
- Tecnologia, Italiano, Matematica, Scienze, Storia: evidenze marcabili, UDA generabile

## Findings minori (non bloccanti)

1. **Label inconsistency**: `getStateLabel` mappa `non_applicabile` → `❌ Esclusa` mentre evidence panel usa `❌ Non applicabile` (righe 2706 vs 2563)
2. **Status message fuorviante**: riga 2891: "Le evidenze in stato 'proposta' non vengono incluse" — in realtà le evidenze 'proposta' sono incluse nel Markdown (riga 2808 include tutto tranne `non_applicabile`)

## Known limits (documentati)

- UDA draft non persistito (solo bozza volatile, copia/download manuale)
- Nessun export/import `.cml` per UDA draft
- Markdown = documento di output, non artefatto di validazione
- Validazione dipartimentale umana/manuale
- SchoolKB non integrato
- Nessun dato studente/classe/voto

## Verdetto

`CML_218_EVIDENZE_UDA_WORKFLOW_SMOKE_AND_CLOSURE_GATE_READY`

Il ciclo Evidenze/UDA workflow è chiuso. Prossimo: CML-219 — next-cycle selection.
