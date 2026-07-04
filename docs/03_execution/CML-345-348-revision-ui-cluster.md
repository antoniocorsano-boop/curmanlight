# CML-345-348 — Revision UI Cluster (runtime microfix)

## Mandatory Slice Header
- Macroprogramma: PM-07 Uniformita
- Backlog: UX-021 (coerenza iconografica), UX-024 (uniformita componenti comuni)
- Dipende da: CML-345
- Aggiorna: `PRODUCT-MATURITY-PROGRESS.md` (no update in questa slice, solo riferimento governance)
- Acceptance Criteria:
  1. Sprite SVG include gli id runtime usati dai pulsanti revisione.
  2. Card pending `status === "nuovo"` con confronto aperto di default.
  3. Card pending `status === "modifica"` con confronto collassato di default.
  4. Pulsante dettaglio coerente su `aria-label` + `aria-expanded` all'avvio e al toggle.
  5. Nessun impatto su `.cml`, import/export, SW, workflow/deploy.
- Impatto sul carico cognitivo: ridotto (stati confronto piu chiari, azioni icona uniformi)

## Baseline e contesto operativo
- Repository: `antoniocorsano-boop/curmanlight`
- Branch di lavoro: `codex/cml-345-348-revision-ui-cluster`
- Commit iniziale: `5e7da6a68e63f8a4683ba4226e7faed8f2402185`
- Runtime snapshot baseline:
  - file: `_published_snapshot/netlify-current/index.html`
  - size: `869558` bytes
  - righe: `6297`
  - SHA256: `380BCA6577E2A29ED035FBCE1D95E7202110DD36B032EE559028780B7C83895D`
- Runtime root baseline:
  - file: `index.html`
  - size: `869545` bytes
  - righe: `6296`
  - SHA256: `55AC00A879C5139672CE7E4B084C3911E3B8D6113520050D8328FF24CE859FDB`
- Nota baseline: root e snapshot erano gia non allineati in pre-slice; gli interventi runtime richiesti sono stati applicati in parallelo su entrambi i file runtime.

## Audit testuale eseguito
- Individuati con ricerca testuale:
  - `cardHTML(item, type)`
  - `togglePendingDetail(id)`
  - sprite SVG `<symbol id="icon-...">`
  - CSS `.pending-detail` / `.pending-detail.open`
  - Home `#tab-home`
  - `#tab-processo` e `#tab-esportazioni` (solo verifica, non modificati)

## Modifiche applicate
1. Sprite SVG
   - Aggiunti simboli mancanti/coerenti:
     - `icon-upload`
     - `icon-landmark`
     - `icon-check`
     - `icon-x`
     - `icon-search`
     - `icon-edit`
     - `icon-trash`
   - Nessun simbolo preesistente rimosso.

2. Default open/close confronto in Revisione (`cardHTML`)
   - `status === "nuovo"`: `.pending-detail` ora parte con classe `open`.
   - `status === "modifica"`: `.pending-detail` resta collassato di default.
   - Bottone dettaglio inizializzato con:
     - `aria-label="Nascondi confronto"` e `aria-expanded="true"` se aperto.
     - `aria-label="Mostra confronto"` e `aria-expanded="false"` se chiuso.

3. Toggle dettaglio (`togglePendingDetail`)
   - Mantiene logica di apertura/chiusura esistente.
   - Aggiorna ora anche `aria-expanded` oltre ad `aria-label`.

4. Sostituzione emoji mirata sui 5 pulsanti azione pending
   - Approva -> `icon-check`
   - Mantieni testo attuale -> `icon-x`
   - Mostra/Nascondi confronto -> `icon-search`
   - Personalizza testo -> `icon-edit`
   - Rimuovi -> `icon-trash`
   - Aria-label invariati.
   - Badge testuali (`✓ Nessuna modifica`, `✅ Approvata`, `❌ Rifiutata`, `★ Nuova`) non alterati.

## Fuori perimetro confermato
- Nessuna modifica a:
  - schema `.cml`
  - localStorage/sessionStorage
  - import/export e relativi flussi
  - service worker
  - workflow GitHub Pages o configurazioni deploy
  - tab Home / Processo / Esportazioni a livello funzionale
  - backend/API/OAuth/dipendenze/build

## Controlli locali
- `git status`: PASS (modifiche solo file di scope slice)
- `git diff --check`: PASS
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS (`overallValid=true`, `invalidCount=0`)
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS (`overall: PASS`, `14/14`)
- Verifica riferimenti SVG:
  - snapshot `href="#icon-*"` senza mancanti: PASS
  - root `href="#icon-*"` senza mancanti: PASS
- Verifica statica runtime:
  - confronto default aperto su `nuovo`: PASS (classe `open` applicata in template)
  - confronto default chiuso su `modifica`: PASS
  - toggle aggiorna `aria-label` + `aria-expanded`: PASS
  - icone azione pending visibili via `<use href="#icon-...">`: PASS

## File modificati nella slice
- `_published_snapshot/netlify-current/index.html`
- `index.html`
- `docs/03_execution/CML-345-348-revision-ui-cluster.md`
- `report/CML-345-348_revision_ui_cluster.md`
- `docs/REPO-MOVELOG.md`

## Esito
- Stato: READY_LOCAL_NOT_PUSHED
- Push: non eseguito

