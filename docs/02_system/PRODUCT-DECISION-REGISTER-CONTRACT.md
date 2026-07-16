# Product Decision Register — Contratto Tecnico (CML-526)

Registro locale delle decisioni di prodotto con tracciabilità end-to-end:

```
PilotFinding (origine)
  ↓
Decisione (DecisionRecord)
  ↓
Intervento CML (branch / PR / merge commit)
  ↓
Verifica (verificationNotes)
  ↓
Versione pubblicata (publishedVersion / publishedAt)
```

Tutto resta locale (localStorage del browser nella preview React). Nessun backend,
servizio remoto, autenticazione, telemetria o classificazione automatica. La
validazione è umana.

## Perimetro

- Sottosistema: `curman-react/` (preview isolata; il merge su `main` attiva il deploy Pages).
- Estende `PilotFinding` / `PilotFindingsBacklog` senza modificarne il comportamento.
- Non tocca il runtime legacy (`index.html`, `_published-snapshot/`), né i dati curricolari.

## Modello dati

`DecisionRecord` (`src/features/pilot-evaluation/product-decision-register.d.mts`):

| Campo | Tipo | Note |
|-------|------|------|
| `id` | string | UUID locale |
| `createdAt` / `updatedAt` | string | ISO-8601 |
| `pilotFindingIds` | string[] | riferimenti a `PilotFinding.id` (sorgente non duplicata) |
| `title` / `description` | string | titolo e descrizione della decisione |
| `category` | DecisionCategory | UX, Funzionalità, Contenuti, Architettura, Accessibilità, Prestazioni, Documentazione, Processo |
| `area` | DecisionArea | Home, Curricolo, Laboratorio, Guida, Esportazione, Runtime, React, Documentazione, Altro |
| `priority` | DecisionPriority | bassa, media, alta, critical |
| `status` | DecisionStatus | proposto, approvato, pianificato, in_sviluppo, in_verifica, completato, archiviato |
| `rationale` | string | motivazione |
| `decision` | string | decisione presa |
| `implementationNotes` | string | intervento CML |
| `verificationNotes` | string | verifica |
| `plannedVersion` | string | versione prevista |
| `implementedVersion` | string | versione implementata |
| `branchName` / `pullRequest` / `mergeCommit` | string | tracciamento |
| `publishedVersion` / `publishedAt` | string | versione pubblicata |
| `closedAt` | string | valorizzato automaticamente a chiusura (completato/archiviato) |

- `schema`: `cml-product-decision-register-v1`
- Storage key: `curmanlight:product-decision-register:v1`

## Storage e versionamento

- `readDecisionRegister(storage?)` / `writeDecisionRegister(storage, register)`.
- `createDecision(input)` / `updateDecision(register, id, patch)` / `deleteDecision(register, id)`.
- `normalizeDecisionRegister(value)` rifiuta payload con `schema` diverso o `items`
  non array (ritorna `null`); i campi mancanti vengono normalizzati ai valori di
  default, garantendo compatibilità futura con nuove versioni dello schema.
- `updateDecision` ricalcola `closedAt` in automatico quando lo stato passa a
  `completato`/`archiviato`, e lo azzera se la decisione torna aperta.

## Collegamento a PilotFinding

- Una `DecisionRecord` può riferire 1..N `PilotFinding` via `pilotFindingIds`.
- Il contenuto di `PilotFinding` NON viene duplicato: la decisione mantiene solo
  gli id. La sorgente resta `PilotFindingsBacklog` (localStorage).
- L'export Markdown riceve in input una mappa `findingsById` per risolvere i
  titoli/estratti collegati al momento dell'esportazione.

## Interfaccia

Nuova vista `ProductDecisionRegisterView` montata su `ViewId = 'registro-decisioni'`,
raggiungibile dalla sidebar (area "Contesto", icona `gavel`). Funzionalità:

- elenco decisioni;
- filtri per stato e area + ricerca testuale libera;
- creazione, modifica, eliminazione, archiviazione;
- checkbox di collegamento alle `PilotFinding` disponibili nel backlog locale;
- esportazione Markdown (`serializeDecisionRegisterMarkdown`).

## Export Markdown

Ogni decisione espone: origine (PilotFinding collegate), motivazione, decisione,
intervento CML, versione prevista, versione pubblicata, stato. Footer con
avviso "nessuna classificazione automatica".

## Test

- `tools/check-cml526-product-decision-register.mjs` (`npm run test:cml526`):
  creazione, lettura, aggiornamento (workflow proposto→…→completato→archiviato),
  persistenza, collegamento PilotFinding senza duplicazione, export Markdown,
  eliminazione.
- Gate build: `npm run build` (tsc + vite) e `npm run lint` (oxlint, 0 errori).

## Controlli eseguiti

- `git diff --check` PASS
- `npm run test:cml526` PASS
- `npm run lint` 0 errori (warning solo su file preesistenti non toccati)
- `npm run build` PASS

## Vincoli rispettati

Nessun backend, servizio remoto, autenticazione, telemetria, sincronizzazione
cloud, AI automatica o classificazione automatica. Tutto locale, validazione umana.
