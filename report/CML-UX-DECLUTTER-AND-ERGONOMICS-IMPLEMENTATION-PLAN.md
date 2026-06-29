# Report — CML UX Declutter and Ergonomics Implementation Plan

## Sintesi esecutiva

Dall'audit UX ergonomics emergono 10 aree di intervento per ridurre caos visivo, scroll e sovrapposizione tra consultazione, revisione, fonti ed export. Questo piano trasforma l'audit in una sequenza ordinata di 10 slice (4 docs-only, 6 runtime) con metriche, soglie e gate di accettazione. La prima azione raccomandata è comprimere la vista Curriculum / Consulta.

## Decisione principale

Adottare il principio **"Una schermata, un compito, una decisione principale"** come guida per tutte le modifiche UX future. Ogni vista deve servire un solo compito primario; export, sidebar e azioni editoriali non devono apparire in viste dedicate ad altri scopi.

## Priorità UX

| Priorità | Area | Motivo | Azione |
|---:|---|---|---|
| 1 | Consulta compatta | Scroll 3–5 schermate, azioni editoriali visibili in lettura | CML_UX_CURRICULUM_CONSULTA_COMPACT_RUNTIME |
| 2 | Revisione compatta | Scroll 4–6 schermate, export duplicato | CML_UX_REVISIONE_SEPARATION_PLAN + RUNTIME |
| 3 | Export centralizzato | Azioni duplicate in 3 viste | CML_UX_EXPORT_CENTER_DEDUPLICATION_PLAN + RUNTIME |
| 4 | Fonti separate | Sidebar in vista readonly | CML_UX_FONTI_SEPARATION_RUNTIME |
| 5 | Evidenze/UDA split | Due compiti nella stessa vista | CML_UX_EVIDENZE_UDA_SPLIT_PLAN + RUNTIME |
| 6 | Home orientativa | Stats tecniche premature | CML_UX_HOME_ORIENTATION_RUNTIME |
| 7 | Regressione UX | Verifica metriche e soglie | CML_UX_ERGONOMICS_REGRESSION_GATE |

## Roadmap proposta

| Step | Slice | Esito atteso |
|---:|---|---|
| 1 | CML_UX_CURRICULUM_CONSULTA_COMPACT_RUNTIME | Scroll consulta ≤ 2 schermate, azione primaria unica |
| 2 | CML_UX_REVISIONE_SEPARATION_PLAN | Contratto per vista revisione separata |
| 3 | CML_UX_REVISIONE_COMPACT_RUNTIME | Scroll revisione ≤ 3 schermate, export toggle |
| 4 | CML_UX_EXPORT_CENTER_DEDUPLICATION_PLAN | Contratto per export centralizzato |
| 5 | CML_UX_EXPORT_CENTER_DEDUPLICATION_RUNTIME | Export solo in Esportazioni |
| 6 | CML_UX_FONTI_SEPARATION_RUNTIME | Sidebar rimossa, filtro tipologia |
| 7 | CML_UX_EVIDENZE_UDA_SPLIT_PLAN | Contratto separazione |
| 8 | CML_UX_EVIDENZE_UDA_SPLIT_RUNTIME | Due sottoview distinte |
| 9 | CML_UX_HOME_ORIENTATION_RUNTIME | Home leggera e orientativa |
| 10 | CML_UX_ERGONOMICS_REGRESSION_GATE | Verifica metriche, scroll, azione unica |

## Rischi controllati

| Rischio | Contromisura |
|---|---|
| Regressione navigazione durante compattamento viste | Gate smoke hash/menu/titolo/contenuto per ogni slice |
| Perdita funzionalità export durante deduplicazione | Export center sempre presente prima di rimuovere pulsanti duplicati |
| Accordion nasconde informazioni critiche | Sezioni compresse hanno indicazione visiva di contenuto |
| Sidebar rimossa in Fonti confonde utenti che la usano per navigare | Breadcrumb aggiunto prima di rimuovere sidebar |
| Due sottoview Evidenze/UDA aumentano complessità navigazione | Navigazione esplicita con due voci di menu distinte, non toggle |

## Prima azione consigliata

```
CML_UX_CURRICULUM_CONSULTA_COMPACT_RUNTIME
```

Ridurre scroll nella vista disciplina, sintesi iniziale, sezioni compatte o accordion, export e revisione fuori dalla vista consulta, navigazione disciplinare coerente.

## Verdict

```text
CML_UX_DECLUTTER_AND_ERGONOMICS_IMPLEMENTATION_PLAN_READY
```
