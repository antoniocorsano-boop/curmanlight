# CML-434S — Runtime Remote Safety Gate

## Macroprogramma

PM-03 Orientamento / PM-05 Esperienza di lavoro / PM-06 Accompagnamento / PM-09 Validazione con utenti

## Backlog

UX-005 / UX-007 / UX-016 / UX-017 / UX-018 / UX-020 / Runtime safety governance

## Dipende da

- CML-434D — Bozzetti alternativi pre-runtime

## Aggiorna

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/REPO-MOVELOG-v2.md`

## Type

docs-only / runtime safety gate / remote execution guard

## Stato

MERGED_REMOTE

## Obiettivo

Verificare se CML-434 può essere applicata da remoto come micro-slice runtime sul runtime pair:

- `index.html`
- `_published_snapshot/netlify-current/index.html`

## Esito della verifica

La modifica runtime non viene applicata da remoto in questa slice.

Motivo: i file runtime sono molto grandi; il connettore GitHub disponibile consente la riscrittura completa del file, ma non una patch parziale sicura. Una riscrittura completa da risposta troncata introdurrebbe rischio di perdita contenuto o divergenza del runtime pair.

## Stato runtime rilevato

La Home contiene già il blocco CML-401 `home-process-hub` con azioni principali:

- Consulta il curricolo
- Prepara una progettazione
- Esporta un documento
- Verifica fonti e limiti

CML-434 deve quindi essere una micro-patch mirata, non una ricostruzione della Home.

## Decisione

CML-434 runtime va eseguita solo con una di queste condizioni:

1. repo disponibile localmente con editor/patch atomica;
2. shell locale con `git diff --check` e validatori;
3. strumento remoto che supporti patch testuali parziali non troncate;
4. conferma che entrambi i runtime file siano aggiornati nello stesso commit.

## Specifica runtime pronta per CML-434

La futura patch deve limitarsi a:

```text
Home task selector + pannello contestuale leggero
```

### Azioni richieste

1. Consulta il curricolo.
2. Prepara una progettazione.
3. Proponi un aggiornamento.
4. Esporta un documento.

### Pannello contestuale

Ogni azione deve chiarire:

- cosa permette di fare;
- cosa non fa;
- quale stato curricolare riguarda;
- quale passaggio umano resta necessario.

## Perimetro escluso

- Nessuna modifica a `index.html` in questa slice.
- Nessuna modifica a `_published_snapshot/netlify-current/index.html` in questa slice.
- Nessuna modifica dati curricolari.
- Nessuna modifica service worker.
- Nessuna nuova dipendenza.
- Nessun backend/account/raccolta remota.

## Controlli remoti

- `index.html` letto parzialmente: OK.
- `_published_snapshot/netlify-current/index.html` letto parzialmente: OK.
- Home CML-401 individuata: OK.
- Rischio riscrittura completa/troncata: presente.
- Runtime modificato: NO.
- Dati curricolari modificati: NO.

## Verdetto

```text
CML_434S_RUNTIME_REMOTE_SAFETY_GATE_MERGED_REMOTE_RUNTIME_NOT_MODIFIED
```
