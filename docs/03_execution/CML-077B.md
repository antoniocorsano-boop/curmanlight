# CML-077B: Stitch Visual Affinity and Dark Mode Selection Audit

**Status:** Done
**Date:** 2026-06-23
**Commit base:** `0315bbe` (CML-077-PRE refinements)
**Type:** Docs-only — review/selezione, nessuna modifica runtime

## Context

CML-077-PRE ha creato `DESIGN.md` come fonte di verità progettuale. Stitch ha generato una proposta esterna denominata "Terra — Organic Design" con palette verde/crema, estetica organica e layout più decorativo. L'obiettivo è valutare se alcuni pattern visivi possono migliorare l'affinità grafica di CurManLight, selezionando un incremento runtime successivo prudente e leggero.

## Starting state

- Branch: `main`
- HEAD: `0315bbe`
- Tree: pulita
- DESIGN.md: presente alla root, 15 sezioni
- Proposta Stitch: "Terra — Organic Design" (esterna, non presente nel repository)

## Stitch proposal evaluated

**Nome:** Terra — Organic Design (001)
**Generato da:** Stitch, basato su DESIGN.md CML-077-PRE
**Palette:** verde oliva/crema (#7a9e7e, #f5efe6, #2c3e35)
**Stile:** organico, superfici morbide, ombre pronunciate, bordi arrotondati generosi
**Font:** remoto decorativo (Playfair Display), non presente in CurManLight
**Layout:** card più ariose, sezioni ben separate, gerarchia verticale chiara
**Dark mode:** palette scura prevista ma non implementata nella proposta
**Dipendenze:** Tailwind CDN, Google Fonts, immagini remote

### Cosa si può recuperare

1. **Ariosità delle card** — padding leggermente maggiore e margini tra sezioni più netti
2. **Separazione blocchi** — uso di spazi bianchi come gerarchia (già in DESIGN.md sezione 4)
3. **Sezioni chiaramente titolate** — didascalie sopra i blocchi (già presente in CurManLight)
4. **Dark mode automatica** — concetto valido, da implementare con `@media (prefers-color-scheme: dark)` senza dipendenze
5. **Badge leggibili su sfondo scuro** — requisito da considerare nella dark mode

### Cosa va scartato

1. **Palette verde/crema** — il blu istituzionale `#1a237e` è l'identità della scuola; cambio colore totalmente non percorribile
2. **Font decorativi remoti** — CurManLight usa `Segoe UI, system-ui, sans-serif`; Google Fonts non ammessi
3. **Tailwind CDN** — nessuna dipendenza esterna; solo CSS inline in `index.html`
4. **Ombre pronunciate e decorativismo** — CurManLight è uno strumento scolastico, non un prodotto consumer
5. **Immagini remote** — nessuna risorsa esterna
6. **Ispessimento navigazione** — 5 tab attuali sono sufficienti

## Desktop evaluation

- **Mantenere struttura esistente** — sidebar 185px + main, 5 tab, sub-nav contestuale
- **Miglioramenti possibili:**
  - Card: aumentare padding da 7px 10px a 8px 12px per maggiore ariosità
  - Sfondo pagina: valutare passaggio da `#f0f2f5` a tono leggermente più caldo
  - Separazione sezioni: rafforzare gap tra blocchi (da 12px a 14-16px)
  - Pulsanti: rivedere spaziatura interna per migliore gerarchia visiva
- **Rischio:** basso, modifiche solo CSS, nessuna nuova logica

## Mobile evaluation

- **1 colonna** — confermata, già implementata a <=900px
- **Touch target** — 44px già garantiti; nessun intervento necessario
- **Ariosità** — aumentare padding card su mobile da 7px a 8-9px
- **Azioni principali** — già visibili in bottom bar (5 voci)
- **Overflow orizzontale** — già gestito con overflow-x:auto su sidebar e tab
- **Rischio:** molto basso

## Dark mode evaluation

- **Implementazione:** `@media (prefers-color-scheme: dark)` con variabili CSS
- **Colori sfondo:** da `#f0f2f5` a `#1a1a2e` / `#121212`
- **Colori superficie:** da `#fff` a `#1e1e2e` / `#2a2a3e`
- **Testo primario:** da `#212121` a `#e0e0e0`
- **Badge stato:** da mantenere riconoscibili (sfondo più scuro, testo chiaro)
- **Card border:** da `#e0e0e0` a `#333` / `#444`
- **Gradienti:** da scurire proporzionalmente (header `#1a237e` → `#0d1442`)
- **Esclusioni:** nessun toggle manuale, nessun `localStorage` per tema
- **Rischio:** medio-basso — CSS-only, nessuna logica JS, nessuna persistenza
- **Prerequisito:** verificare che le 864 linee CSS di `index.html` possano essere convertite a variabili senza rompere selettori esistenti

## Options comparison

| Opzione | Descrizione                                    | Rischio     | Sforzo     | Valore | Raccomandata |
| ------- | ---------------------------------------------- | ----------- | ---------- | ------ | ------------ |
| **A**   | Solo review, nessun runtime                    | Nullo       | Nullo      | Basso  | ❌           |
| **B**   | Affinità visiva leggera, no dark mode          | Basso       | Medio      | Medio  | ❌           |
| **C**   | Affinità visiva leggera + dark mode automatica | Medio-basso | Medio-alto | Alto   | ✅           |
| **D**   | Cambio tema ampio ispirato a Terra             | Alto        | Alto       | Basso  | ❌           |

### Selected option: C — Light visual affinity + automatic system dark mode

**Motivazione:**

- Valorizza le proposte Stitch senza snaturare CurManLight
- La modalità scura automatica migliora accessibilità e comfort visivo
- Nessuna dipendenza esterna (solo CSS variables + `@media`)
- Nessun pulsante/salvataggio/toggle — rimozione di rischio e complessità
- Pattern già noto e testato: `prefers-color-scheme` supported da tutti i browser moderni

## Next runtime perimeter (CML-078)

**Nome:** CML-078 — LIGHT_VISUAL_AFFINITY_AND_SYSTEM_DARK_MODE_RUNTIME_INCREMENT

### Files probably involved

- `_published_snapshot/netlify-current/index.html` (solo CSS `<style>` block, linee 16-864)

### What to do

- Introdurre o razionalizzare variabili CSS semantiche
- Applicare rifiniture leggere a: sfondo pagina, card, notice box, bottoni, badge, cruscotto/home
- Rendere responsivo su mobile con padding e gap leggermente maggiori
- Aggiungere modalità scura automatica con `@media (prefers-color-scheme: dark)`

### What to NOT do

- Non aggiungere toggle manuale per tema
- Non modificare logiche JavaScript, salvo indispensabile
- Non modificare export/import, schema `.cml`, role-access gating
- Non modificare `sessionStorage` / `localStorage`
- Non introdurre CDN, font remoti, immagini remote
- Non modificare `sw.js`, `_headers`, manifest, icone, PDF
- Non sostituire DESIGN.md ufficiale

### Closure criteria

- CSS variables funzionanti su tutti i componenti principali
- Dark mode attiva solo su `prefers-color-scheme: dark`
- Badge e stati riconoscibili in entrambe le modalità
- Nessuna regressione su navigazione, esportazioni, didattica, curricolo, tecnologia
- `index.html` unico file modificato
- Nessuna nuova dipendenza esterna

## Verdict

```
CML_077B_STITCH_VISUAL_AFFINITY_DARK_MODE_NEXT_INCREMENT_SELECTED
```
