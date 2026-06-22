# CML-063 — UX_QUALITY_AUDIT_FRAME_DETAIL_BALANCE

**Obiettivo**: valutare la qualità dell'esperienza utente di CurManLight dopo l'introduzione della preview Tecnologia normalizzata, con attenzione al bilanciamento tra quadro generale e dettaglio progressivo.

**Branch**: main
**HEAD**: f5c843f
**URL live**: https://antoniocorsano-boop.github.io/curmanlight/
**Metodo**: analisi codice sorgente + metriche CML-060A

## Metriche di riferimento (CML-060A)

| Metrica | Valore |
|---------|--------|
| buttonTags | 89 |
| inlineOnclick | 96 |
| exportButtons | 25 |
| protectedActions | 3 |
| tabs | 5 |
| mobileBottomBar | true |

## Aree auditate

### 1. Home / cruscotto iniziale
**Problema**: nessun cruscotto iniziale. Atterraggio diretto sulla revisione per disciplina con overload informativo.
**Gravità**: P1. **Proposta**: aggiungere tab "Home" con 3 card grandi.
**Evidenza**: alla prima apertura, l'utente vede 12 discipline + pulsanti export + azioni operative.

### 2. Revisione per disciplina
**Problema**: troppe azioni visibili contemporaneamente (export, import, bozza, azioni protette) — 11+ pulsanti in blocchi vicini.
**Gravità**: P1. **Proposta**: raggruppare in sezioni progressive o menu "Altro".

### 3. Preview Tecnologia normalizzata
**Problema**: la funzione `renderTecnologiaNorm()` è chiamata solo all'attivazione del tab curricolo. Se l'utente non attiva il tab, il pannello non viene popolato. Nessun segnale visivo che esista un contenuto extra.
**Gravità**: P2. **Proposta**: badge di notifica sul tab curricolo che segnala "Nuovo: Tecnologia normalizzata".
**Evidenza**: codice sorgente corretto, rendering condizionato al cambio tab.

### 4. Curricolo di istituto / definitivo
**Problema**: due sezioni (lavoro/revisione e riepilogo) visivamente quasi identiche — stessa struttura card, stesse etichette.
**Gravità**: P2. **Proposta**: sottotitoli esplicativi, icone differenziate, colori di sfondo diversi.

### 5. Riferimenti normativi
**Problema**: contenuto denso senza gerarchia visiva, blocchi lunghi tutti con stessa icona.
**Gravità**: P2. **Proposta**: introdurre categorie (card o accordion) per tipo fonte.

### 6. Sezioni generali
**Problema**: testo lungo senza breaking point, paragrafi continui.
**Gravità**: P2. **Proposta**: indicatori di sezione o indice laterale.

### 7. Export / import / report
**Problema**: 25 elementi con classe `export-btn`, 12+ pulsanti export visibili in una schermata.
**Gravità**: P1. **Proposta**: menu dropdown "Esporta" con sottocategorie (Confronto / Definitivo).

### 8. Validazione dipartimentale
**Problema**: flusso a 2 step (proposta → esito) poco distinguibile visivamente — stesso colore, stessi bottoni.
**Gravità**: P2. **Proposta**: separare con step numerici o timeline.

### 9. Verifica referente
**Problema**: azioni protette da codice operativo in dropdown "Azioni ▾" — etichetta poco chiara.
**Gravità**: P2. **Proposta**: rinominare in "Solo operatori" con microcopy esplicativo.

### 10. Navigazione mobile
**Problema**: bottom bar con 5 tab occupa spazio; overlay menu mobile denso.
**Gravità**: P2. **Proposta**: ridurre bottom bar a 3-4 item, raggruppare in hamburger.

### 11. Role-access gating
**Problema**: codice operativo funzionante (`CML2025` in `sessionStorage`). Microcopy presente e corretto. Pulsante "Blocca di nuovo" presente. Dropdown label "Azioni ▾" non comunica "codice operativo".
**Gravità**: P2. **Proposta**: rinominare label per maggiore chiarezza.
**Evidenza**: codice verificato — `requireRoleAccess()` protegge 3 azioni. Modal con testi contratto CML-055.
**Conferma**: nessuna falsa sicurezza — avvertenza esplicita presente.

### 12. Salvataggio locale e messaggi di stato
**Problema**: messaggio "Ogni decisione viene conservata in questo browser. — 0%" senza icona o tooltip.
**Gravità**: P3. **Proposta**: aggiungere icona e tooltip esplicativo.

### 13. Dettaglio progressivo
**Problema**: nessuna indicazione visiva di espandibilità nelle liste discipline.
**Gravità**: P3. **Proposta**: aggiungere chevron e badge conteggio voci.

## Matrice UX completa

| Area | Problema | Gravità | Evidenza | Proposta | Rischio | File coinvolti | Raccomandazione |
|------|----------|---------|----------|----------|---------|----------------|-----------------|
| 1. Home/cruscotto | Nessun cruscotto iniziale; atterraggio diretto su revisione | P1 | Nessuna schermata benvenuto | Tab "Home" con 3 card grandi | Basso | `index.html` | **Prioritario** |
| 2. Revisione disciplina | Troppe azioni visibili (11+ pulsanti) | P1 | Blocchi export, import, bozza, protette | Sezioni progressive / menu "Altro" | Medio | `index.html` | **Prioritario** |
| 3. Preview Tecnologia | Pannello renderizzato solo su cambio tab | P2 | Render condizionato | Badge notifica su tab curricolo | Basso | `index.html` | Secondario |
| 4. Curricolo istituto | Lavoro e riepilogo visivamente identici | P2 | Stessa struttura card | Sottotitoli, icone, colori diversi | Basso | `index.html` | Miglioramento |
| 5. Riferimenti normativi | Contenuto denso senza gerarchia | P2 | Blocchi lunghi, stessa icona | Categorie card/accordion | Basso | `index.html` | Miglioramento |
| 6. Sezioni generali | Testo lungo senza break point | P2 | Paragrafi continui | Indicatori sezione / indice | Basso | `index.html` | Miglioramento |
| 7. Export/import/report | 25 export-btn, troppe opzioni | P1 | 12+ pulsanti visibili | Dropdown "Esporta" con sottocategorie | Medio | `index.html` | **Prioritario** |
| 8. Validazione dipartimentale | Flusso 2-step poco distinguibile | P2 | Colori e bottoni simili | Step numerici / timeline | Basso | `index.html` | Miglioramento |
| 9. Verifica referente | Dropdown "Azioni ▾" poco leggibile | P2 | Label non comunica codice operativo | Rinominare "Solo operatori" | Basso | `index.html` | Miglioramento |
| 10. Nav mobile | 5 tab bottom bar, overlay denso | P2 | Spazio occupato, menu lungo | 3-4 tab, hamburger secondari | Medio | `index.html` | Secondario |
| 11. Role-access gating | Label non chiara, ma codice OK | P2 | `requireRoleAccess()` funzionante | Rinominare label dropdown | Basso | `index.html` | Miglioramento |
| 12. Salvataggio locale | Messaggio senza icona/tooltip | P3 | "0%" senza contesto | Icona + tooltip | Basso | `index.html` | Cosmetica |
| 13. Dettaglio progressivo | Senza indicazione espandibilità | P3 | Nessun chevron/badge | Chevron + badge conteggio | Basso | `index.html` | Cosmetica |

## Classificazione sintetica

| Gravità | Conteggio |
|---------|-----------|
| P0 | 0 |
| P1 | 3 |
| P2 | 7 |
| P3 | 3 |

## Aree OK (nessun problema rilevato)

- Viewer curricolo (IN 2012 / IN 2025): libero, funzionante
- Proposta docente `.cml` (export/import): libero, invariato
- Guida e sezioni informative: chiare, coerenti
- Codice operativo: implementato secondo contratto, microcopy presente
- Persistenza: solo `sessionStorage`, nessun `localStorage`
- Schema `.cml`: non modificato
- File esportati: invariati
- Tab bar: 5 tab, navigazione coerente
- Footer: completo, link funzionanti

## Raccomandazione primo micro-incremento runtime

**Aggiungere un tab/cruscotto "Home" iniziale** per ridurre il carico cognitivo all'apertura, con:
1. Messaggio di benvenuto chiaro per il ruolo
2. 3 card grandi (Revisione, Curricolo, Guide) che spiegano il prossimo passo
3. Separazione tra consultazione e lavoro operativo

Motivo: P1 con rischio Basso, impatto immediato sull'esperienza d'ingresso, prerequisito per la prova controllata.

## Prossimo step

`CML-063A — UX_FRAME_DETAIL_RUNTIME_FIX` (aggiunta home/cruscotto + raggruppamento export)

## Verdetto

```
CML_063_UX_QUALITY_AUDIT_FRAME_DETAIL_BALANCE_READY
```
