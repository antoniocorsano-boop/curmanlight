# CML-081 — Curriculum Area Completion Runtime Increment

## Stato

Runtime increment completato. Modifiche solo in `renderCurricoloIstituto()` in `index.html`.

## Modifiche

| Elemento | Descrizione |
|---|---|
| **Path guidance** | Sostituito `usage-notice` con box "Il percorso del curricolo": Consulta → Revisione → Definitivo → Esporta, con link diretti ai tab, nota su sezioni generali |
| **Coverage banner** | Nuovo box "Copertura curricolo" dopo version tabs: N discipline, N voci totali, N voci con proposta 2025 |
| **Per-discipline summary** | Griglia compatta dopo l'indice: ogni disciplina con icona, nome, totale voci, conteggio modifiche (dot colorato: verde=none, giallo=<50%, rosso=>50%) |
| **Next-action callout** | Dopo ogni disciplina: "✏️ Revisiona {disciplina} · valuta le voci e decidi" con link a Revisione |
| **Ordine counts** | Nell'intestazione di ogni ordine: "N discipline, M voci" |

## Dati usati

- Solo dati già presenti in `DATA` e `DISCIPLINE_META`
- Nessun `localStorage`, nessuna nuova funzione, nessuna modifica ad altri tab
- Schema `.cml`, export/import, role-access invariati

## Vincoli rispettati

- Solo `renderCurricoloIstituto()` modificata
- Nessuna nuova funzione JS
- Nessuna modifica ad altri tab
- Nessuna dipendenza esterna
- Compatibile dark mode (CSS variables)
- Nessuna promessa di validazione istituzionale
- "Definitivo" qualificato come "documento di lavoro finale — non sostituisce la delibera"
- "Copertura curricolo" invece di "Mappa completa"
