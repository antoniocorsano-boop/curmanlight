# CML-068B — Didattica Prototype UX Density Audit

**Stato:** ✅ Completed  
**Data:** 2026-06-23  
**Tipo:** Audit/docs — nessuna modifica runtime

## Obiettivo

Valutare la qualità UX del primo prototipo Didattica read-only (CML-068) prima di aggiungere nuovi moduli (UDA, attività, materiali). Stabilire se procedere a CML-069 (UDA) o se serve prima un alleggerimento (CML-068C).

## Contesto

- CML-065: modello prodotto Curriculum / Didattica
- CML-065A/B: Home a due aree introdotta e validata
- CML-066/066A: densità azioni Curriculum ridotta
- CML-067: selezionato modulo Valutazione/Evidenze
- CML-068: implementato prototipo Didattica read-only
- CML-068A: validato live 25/25
- HEAD: `fb5750c`, tree pulita

## Aree auditate

1. Home → card Didattica
2. Tab/sezione Didattica
3. Titolo e microcopy del prototipo
4. Stats bar / conteggi
5. Filtri ordine
6. Card unità
7. Dettaglio espandibile
8. Evidenze osservabili
9. Criteri di valutazione
10. Mobile
11. Distinzione Curriculum / Didattica
12. Rischio densità pulsanti/card
13. Preparazione al futuro modulo UDA

## Esito

**P0: 0** — nessun problema bloccante  
**P1: 0** — nessun problema di confusione grave  
**P2: 3** — rumore/sovraccarico non bloccante  
**P3: 2** — miglioramenti cosmetici

## Matrice UX

| # | Area | Problema | Gravità | Evidenza | Proposta | Rischio | File coinvolti | Raccomandazione |
|---|------|----------|---------|----------|----------|---------|----------------|-----------------|
| 1 | Home Didattica | Tre link secondari dimessi (`#`) non funzionanti ma visibili | P2 | `Verifica competenze`, `Programmazione didattica`, `Documenti e materiali` sono link con `#` e classe `.dimmed` — l'utente può cliccarli senza effetto | Nascondere link non pronti o sostituirli con testo statico "Prossimamente" | Medio — utente potrebbe pensare che l'app non funzioni | `index.html` (Home card) | Risolvere prima o insieme a CML-069 |
| 2 | Card unità | 13 card visibili contemporaneamente su "Tutti", nessun filtro per classe/ambito | P2 | Con "Tutti" selezionato, 13 unità occupano molto spazio verticale; per navigare servono molti click | Aggiungere filtro per classe (es. "Cl. 1ª-2ª-3ª"/"Cl. 1"/"Fascia 3-4") o raggruppamento per ambito/nucleo | Basso — non blocca ma affatica su mobile | `index.html` (filtri + render) | Annotare come debt post-MVP; valutare se risolvere in CML-069 |
| 3 | Mobile | Didattica non ha un pulsante diretto nella bottom bar | P2 | Su mobile (≤900px), la tabbar è sostituita da bottom bar con 5 pulsanti (Home, Rev., Def., Curr., Menu). Didattica è accessibile solo da menu overlay → 2 tap invece di 1 | Aggiungere Didattica alla bottom bar (sostituendo uno dei pulsanti esistenti o espandendo a 6) | Medio — riduce scopribilità del prototipo su mobile | `index.html` (bottom bar) | Valutare in CML-069 se UDA giustifica un pulsante diretto |
| 4 | Stats bar | Etichetta "Prototipo" come stat | P3 | Stats bar mostra: `13 Unità totali`, `2 Infanzia`, `5 Primaria`, `6 Secondaria`, `Prototipo`. L'ultimo elemento non è un conteggio | Spostare "Prototipo" in un badge separato fuori dalla stats bar | Molto basso — nessun impatto funzionale | `index.html` (stats render) | Debito cosmetico, risolvere quando si tocca stats |
| 5 | Home Didattica | Placeholder poco visibili | P3 | Link dimessi hanno classe `.dimmed` (opacity ridotta), ma non c'è microcopy "Prossimamente" o "Non disponibile" — solo `href="#"` | Aggiungere `title="Non ancora disponibile"` o badge "In arrivo" | Molto basso — utente esperto capisce che non sono cliccabili | `index.html` (Home card) | Miglioramento opzionale pre-UDA |

## Cosa funziona bene

1. **Separazione Curriculum/Didattica** — chiara, due card colorate diverse, tabbar organizzata
2. **Microcopy** — completa e prudente ("Prototipo read-only", "Da adattare alla classe", "Non costituisce documento istituzionale approvato")
3. **Filtro ordine** — 4 pulsanti chiari con icone, funzionanti
4. **Dettaglio espandibile** — pattern familiare, coerente con tecnologia-norm-panel
5. **Contenuti** — evidenze e criteri ben formattati, 3 per unità, consistenti
6. **Read-only** — nessun campo editabile, nessun salvataggio, nessuna falsa aspettativa
7. **Dati embedded** — nessuna dipendenza esterna
8. **Footer microcopy** — esaustivo, copre tutti i rischi di comunicazione

## Rischi prima di UDA

| Rischio | Probabilità | Impatto | Mitigazione |
|---------|-------------|---------|-------------|
| Utente clicca link dimessi Home e pensa che l'app non funzioni | Media | Medio | Risolvere P2#1 (nascondere/non mostrare link non pronti) |
| Utente mobile non trova Didattica | Media | Basso | L'entry nel menu overlay è presente — va migliorata la scopribilità |
| 13 card fitte senza filtro classe confondono su mobile | Alta | Basso | Il filtro ordine riduce a 2/5/6 — tollerabile |

## Decisione prossimo step

**Nessun P1 emerso.** Tutti i problemi sono P2/P3.

⏩ **Procedere a CML-069 — DIDATTICA_UDA_MODULE_SELECTION_AUDIT**

Debiti annotati:
- P2#1 (Home link dimessi): risolvere prima o insieme a CML-069
- P2#2 (filtro classe/ambito): debt post-MVP
- P2#3 (mobile bottom bar): valutare in CML-069
- P3#4 (stats "Prototipo"): cosmetico
- P3#5 (placeholder title): opzionale

Non serve CML-068C (alleggerimento) — il prototipo è già sufficientemente leggero.

## Verdetto

`CML_068B_DIDATTICA_PROTOTYPE_UX_DENSITY_AUDIT_READY`
