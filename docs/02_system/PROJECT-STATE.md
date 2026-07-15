# Project State

## Snapshot

- Last merged milestone: CML-514P — Etica tecnologica per Educazione civica
- Current `main`: `0c2d660242d17c5a6752ef81b6c6cfb22eb7c3e0`
- Active reconciliation slice: CML-515 — Program State Reconciliation
- Runtime storico: mantenuto e stabile; interventi strutturali da evitare senza necessità verificata
- React application (`curman-react/`): filone evolutivo principale da consolidare e validare
- Canonical curriculum data: invariati dalle proposte `.cml`; validazione umana obbligatoria
- Current movelog: `docs/REPO-MOVELOG-v2.md`
- Next strategic action: consolidare la libreria di proposte `.cml`, quindi avviare un pilot controllato con docenti

## Programmi e lotti completati

### Tecnologia

Completato il pilot di proposte docente su:

- IA consapevole;
- economia circolare;
- benessere digitale per l'Infanzia;
- prototipazione nella Secondaria.

### Italiano

Completato il lotto di proposte docente su:

- lettura integrale e interpretazione;
- riassunto e riscrittura;
- corsivo e scrittura manuale;
- grammatica normativa.

### Educazione civica

Completato il lotto di proposte docente su:

- cittadinanza digitale e verifica delle fonti;
- sostenibilità e cura dei beni comuni;
- Costituzione e partecipazione democratica;
- etica tecnologica.

Tutte le proposte restano esempi `teacher_proposal`, non modificano automaticamente i curricoli canonici e richiedono una decisione umana esplicita.

## Priorità di roadmap

1. CML-515 — riallineamento di stato, roadmap e governance.
2. CML-516 — consolidamento e validazione automatica della libreria `.cml`.
3. CML-517 — pilot controllato con 3-5 docenti e raccolta di evidenze osservabili.
4. CML-518 — decisione formale sul passaggio dal runtime storico all'app React.
5. CML-519 — nuovo audit PM-03, PM-06, PM-07 e PM-09 sulla baseline corrente.
6. CML-520 — suite automatica per contratti, round-trip, backup/restore e regressioni.
7. CML-521 — percorso guidato locale di valutazione prodotto per docenti non tecnici.

## Runtime Perimeter Reminder

Ogni intervento sul runtime storico deve trattare insieme:

- `index.html`;
- `_published_snapshot/netlify-current/index.html`.

Non modificare un solo file della coppia e non riscrivere da remoto file HTML grandi da contenuto potenzialmente troncato.

## Product Design Governance

La direzione di prodotto resta:

```text
B come ingresso docente + C come logica operativa + A come evoluzione istituzionale futura
```

Ogni intervento deve dichiarare:

- profilo utente servito;
- contesto d'uso;
- vista interessata;
- stato curricolare rappresentato;
- azione primaria;
- criterio di accettazione;
- elementi esclusi intenzionalmente.

## Mock Conformance Rule

Dopo un mock approvato, la UI deve inibire ciò che non è conforme. Non basta aggiungere nuovi blocchi sopra quelli precedenti.

## Pilot Validation Rule

Durante il pilot raccogliere evidenze osservabili: cosa il docente comprende, quale azione tenta, dove si blocca e quali parole o passaggi interpreta in modo ambiguo. Il gradimento generale non è sufficiente.

## Governance dei file `.cml`

Gli esempi devono mantenere:

- `schemaVersion: "1.0"`;
- `fileType: "teacher_proposal"`;
- `counts` coerenti;
- `id` e `unitaId` stabili;
- `decisione: null` prima della valutazione dipartimentale;
- `humanValidationRequired: true`;
- nessun dato personale reale;
- nessuna approvazione automatica.

## Stato di chiusura

Verdetto corrente:

```text
CML_POST_514_PROGRAM_BASELINE_RECONCILED_MAIN_0C2D6602
```
