# CML-277 - ICON SYSTEM CONTRACT

## Sintesi
Slice docs-only completata per definire il sistema icone ufficiale di CurManLight. E stata fissata la migrazione progressiva dalle emoji strutturali a un subset locale di Lucide SVG, con regole di accessibilita, fallback, mappa icone/funzioni e perimetro runtime minimo per CML-278.

## Decisioni principali
- Sistema adottato: Lucide SVG subset locale.
- Emoji: vietate come icone strutturali.
- Dipendenze esterne: vietati CDN e font iconici remoti.
- Aree principali: testo sempre visibile accanto all'icona.
- A11y: decorative `aria-hidden="true"`; bottoni solo-icona con `aria-label`.

## Documenti prodotti
- docs/02_system/ICON-SYSTEM-CONTRACT.md
- docs/03_execution/CML-277.md
- report/CML-277_icon_system_contract.md
- aggiornamento docs/REPO-MOVELOG.md

## Verifiche
- Scope docs-only rispettato.
- Nessuna modifica runtime (`index.html` root/snapshot invariati).
- Nessuna modifica schema `.cml`, dati, export/import, storage.

## Gate tecnici previsti
- `git diff --check`
- `node tools/validate-cml-normalized-curriculum.mjs`
- `node tools/test-runtime-mappa-dati-shape.mjs`
- secret scan base sui file modificati

## Commit locale
Messaggio previsto:

`docs: specify CML icon system contract`

## Verdict
`CML_277_ICON_SYSTEM_CONTRACT_READY_LOCAL_NOT_PUSHED`
