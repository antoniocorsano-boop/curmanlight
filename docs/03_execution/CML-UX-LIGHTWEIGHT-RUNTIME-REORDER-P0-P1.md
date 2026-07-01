# CML-UX-LIGHTWEIGHT-RUNTIME-REORDER-P0-P1

Tipo slice: runtime microfix / runtime reorder leggero
Ambito: `_published_snapshot/netlify-current/index.html`
Verdetto target: `CML_UX_LIGHTWEIGHT_RUNTIME_REORDER_P0_P1_READY_LOCAL_NOT_PUSHED`

## 1. Obiettivo

Applicare un riordino runtime leggero sulle criticita P0/P1 emerse nell'audit UX:

- P0: Programmazione annuale troppo densa (tre strumenti nella stessa schermata).
- P1: Home ridondante.
- P1: duplicazione "Bozza disciplina" tra Revisione ed Esportazioni.
- P1: confusione Fonti/Sezioni generali nella navigazione curriculum.
- P1: UDA distribuita in modo poco lineare.

Vincolo principale: nessuna modifica a dati, logica curricolare, schema, storage, validatori, filtri UDA o flussi interni `.cml`.

## 2. Preflight

- Branch: `main`
- HEAD/origin: allineati su `9fb4ad5` in partenza
- Working tree con modifica preesistente non pertinente:
  `docs/04_user/educazione_fisica_validazione_dipartimentale.md` (non inclusa nella slice)

## 3. Modifiche runtime applicate

### 3.1 Home alleggerita (P1)

- Rimossa la fascia "Percorso di governo del curricolo" (step ridondanti).
- Rimossa la microguida "Usa CurManLight in 5 minuti" dalla superficie principale.
- Ridotto il testo introduttivo e semplificate le descrizioni card.
- Rimosso il link ridondante "Curriculum normalizzato" dalla card Home.
- Rimossi i placeholder dimmed "In preparazione" dalla card didattica.

Effetto: riduzione del carico cognitivo mantenendo i percorsi operativi principali.

### 3.2 Revisione deduplicata (P1)

- Rimossi nel tab Revisione:
  - toggle toolbar "Bozza disciplina"
  - pannello `disc-export-panel`
  - azioni duplicate di generazione/copia/scaricamento bozza
- Inserito rinvio esplicito a Esportazioni per le azioni di scaricamento.

Effetto: un solo punto di accesso alle azioni documentali, senza alterare funzioni di export.

### 3.3 Programmazione annuale in passi (P0)

Nel tab Programmazione annuale:

- mantenuta la vista di consultazione iniziale (statistiche, ordini, livelli).
- introdotti due contenitori `details`:
  - Passo 1 — Bozza programmazione annuale
  - Passo 2 — Libreria UDA smart

Effetto: separazione visiva dei tre strumenti (consultazione, bozza annuale, UDA smart)
con logica invariata e stesso markup funzionale interno.

### 3.4 UDA resa piu lineare (P1)

Nel tab UDA modello:

- aggiunto rinvio operativo a Programmazione annuale -> Passo 2
  per filtri e archivio UDA smart.

Effetto: riduce la frammentazione concettuale tra "UDA modello" e "UDA smart".

### 3.5 Fonti vs Sezioni generali rese distinte (P1)

- Aggiunto in subnav curriculum il pulsante dedicato "Sezioni generali" (`setTab('generali')`).
- Corretto `setTab(...)`:
  - `tab-normativa` visibile solo con `normativa`
  - `tab-generali` visibile solo con `generali`
  - aggiornati label/accessibilita breadcrumb e stato attivo subnav.
- Inseriti link di cross-navigation:
  - in Fonti: link ad apertura Sezioni generali
  - in Sezioni generali: link di ritorno a Fonti

Effetto: separazione chiara di due aree prima sovrapposte nella stessa vista.

## 4. Vincoli confermati

- Nessuna modifica ai dati curricolari.
- Nessuna modifica a schema o storage.
- Nessuna modifica ai validatori.
- Nessuna modifica ai filtri UDA.
- Nessuna modifica ai flussi `.cml` (docente/dipartimento/referente).
- Nessuna nuova funzionalita introdotta.

## 5. Verifiche eseguite

- `get_errors` su `index.html`: nessun errore.
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS (14/14 discipline).
- `node tools/validate-cml-normalized-curriculum.mjs`: output con warning retrocompatibili gia noti (`nucleo`/`nucleoFondante`), nessun intervento richiesto in questa slice.

## 6. Rischi residui

- Basso: possibili attese utente sul vecchio pannello bozza in Revisione.
- Medio-basso: adattamento iniziale alla nuova distinzione Fonti/Sezioni generali.

Mitigazione: link espliciti cross-area e mantenimento integrale delle funzioni di export in Esportazioni.

## 7. Raccomandazione successiva

Eseguire una micro-slice di rifinitura P2 focalizzata su:

- stati vuoti orientati all'azione,
- riduzione testo ridondante in Valutazione/Evidenze,
- eventuale raggruppamento ulteriore delle Esportazioni per compito.

## 8. Verdict

`CML_UX_LIGHTWEIGHT_RUNTIME_REORDER_P0_P1_READY_LOCAL_NOT_PUSHED`
