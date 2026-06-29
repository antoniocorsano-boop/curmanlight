# CML-072 — Design System and Navigation Contract Report

**Data:** 2026-06-23
**HEAD:** `536f519` (CML-071 audit) — runtime `b0003ba` (CML-070)
**URL live:** https://antoniocorsano-boop.github.io/curmanlight/
**Tipo:** Docs-only — nessuna modifica runtime, nessun deploy

---

## Indice

1. Mapping P1/P2/P3 → regole contratto
2. Decisioni UI/UX chiave
3. Rischi risolti
4. Rischi residui
5. Prossimo step

---

## 1. Mapping P1/P2/P3 → regole del contratto

| #   | Problema CML-071                       | Gravità | Regola contratto                                                         | Sezione                   |
| --- | -------------------------------------- | ------- | ------------------------------------------------------------------------ | ------------------------- |
| 1   | Link Home Didattica inattivi           | P1      | Sostituire `<a href="#">` con `<span>` dimesso + badge "In preparazione" | §4 Regole Home            |
| 2   | 7 tab desktop                          | P1      | Max 5 tab: Home, Curriculum, Didattica, Esportazioni, Guida              | §3 Navigazione target     |
| 3   | UDA sotto Valutazione/Evidenze         | P1      | UDA come sotto-sezione autonoma di Didattica. Scroll diretto da Home     | §6 Regole Didattica       |
| 4   | 27 exportButtons                       | P1      | Export raggruppati in tab Esportazioni. Max 3 visibili per gruppo        | §7 Regole Esportazioni    |
| 5   | Tab Didattica senza dashboard          | P2      | Panoramica Didattica all'apertura del tab                                | §6 Regole Didattica       |
| 6   | Microcopy "costruzione"/"preparazione" | P2      | Uniformare a "In preparazione" — sempre uguale                           | §9 Microcopy              |
| 7-8 | Disclaimer lunghi Valutazione/UDA      | P2      | Compattare a 1 riga + link "Perché questa nota?"                         | §8.4 Pannelli espandibili |
| 9   | Breadcrumb Home assente                | P2      | Breadcrumb su Home                                                       | §4 Regole Home            |
| 10  | Tecnologia a 3 click                   | P2      | Link diretto da Home card Curriculum                                     | §4 Regole Home            |
| 11  | Abbreviazioni mobile                   | P2      | Label complete su ≥414px                                                 | §3 Navigazione mobile     |
| 12  | Menu overlay 12+ voci                  | P2      | Menu contiene solo Guida, impostazioni, info, version, blocca            | §3 Navigazione mobile     |
| 13  | Home footer microcopy lunga            | P2      | Compattare a 2 righe + link                                              | §9 Microcopy              |
| 14  | Struttura HTML semantica               | P2      | Regole landmark e skip link definite, intervento in CML-074              | §10 Accessibilità         |
| 15  | Classi primario/secondario             | P3      | Design system definisce `.btn-primary`, `.btn-secondary`, ecc.           | §8.1 Pulsanti             |
| 16  | Tab senza icone uniformi               | P3      | Tutti i tab principali con icona                                         | §8.6 Tab                  |
| 17  | Scroll UDA da Home                     | P3      | Aggiungere `scrollIntoView` su #didattica-uda                            | §6 Regole Didattica       |
| 18  | Contrasto badge 🟡                     | P3      | Colore da #f9a825 a #e65100, intervento in CML-074                       | §10 Accessibilità         |

---

## 2. Decisioni UI/UX chiave

### 2.1 Navigazione 5 tab (da 7)

| Attuale                  | Target                    |
| ------------------------ | ------------------------- |
| Home                     | Home                      |
| Didattica                | Curriculum                |
| Revisione per disciplina | Didattica                 |
| Curricolo Definitivo     | Esportazioni              |
| Riferimenti normativi    | Guida                     |
| Sezioni Generali         | (assorbito in Curriculum) |
| Curricolo di Istituto    | (assorbito in Curriculum) |

### 2.2 Design system: 9 categorie componenti

1. **Pulsanti**: 6 classi (primary, secondary, tertiary, danger, protected, icon)
2. **Card**: 6 classi (area, unit, uda, info, warning, status)
3. **Badge**: 6 classi (readonly, prototype, curricolare, esempio, code, validation, preparing)
4. **Pannelli espandibili**: 3 classi (export, process, notes)
5. **Box informativi**: 5 classi (info, warning, danger, success, prototype)
6. **Tab**: con icona, max 5 primari
7. **Filtri**: filter-bar + filter-pill
8. **Sezioni read-only**: badge standard in alto a destra
9. **Sezioni protette**: badge "Codice operativo"

### 2.3 Microcopy unificata

- **14 voci** nel glossario, da usare sempre
- **Eliminata** variante "Area in costruzione" → solo "In preparazione"
- **Compattati** disclaimer Valutazione (da 6 a 1 riga + link)
- **Compattati** disclaimer UDA (da 7 a 1 riga + link)

### 2.4 Link Home Didattica

Da:

```
<a href="#">📋 Progetta UDA</a>
<a href="#">🧪 Prepara attività</a>
<a href="#">📁 Materiali per la classe</a>
```

A:

```
<a onclick="setTab('didattica-uda')">📋 Progetta UDA</a>
<span class="dimmed">🧪 Prepara attività <span class="badge--preparing">In preparazione</span></span>
<span class="dimmed">📁 Materiali per la classe <span class="badge--preparing">In preparazione</span></span>
```

---

## 3. Rischi risolti

| Rischio CML-071                                             | Soluzione nel contratto                                |
| ----------------------------------------------------------- | ------------------------------------------------------ |
| Utente non trova UDA (sotto Valutazione)                    | UDA diventa sotto-sezione autonoma con scroll diretto  |
| Frustrazione link Home Didattica inattivi                   | Link inattivi sostituiti da testo dimesso + badge      |
| Confusione tra "Curricolo di Istituto" e "Sezioni Generali" | Entrambi assorbiti in Curriculum > Consultazione       |
| Export overload                                             | Export spostati in tab dedicato, 3 visibili per gruppo |
| Warning fatigue per microcopy ripetuta                      | Disclaimer compattati, una volta per sezione           |
| Navigazione 7 tab dispersiva                                | Ridotta a 5 tab + sotto-navigazione                    |
| Microcopy "costruzione"/"preparazione" incoerente           | Uniformata a "In preparazione"                         |

---

## 4. Rischi residui

| Rischio                                                             | Probabilità | Impatto | Note                                                              |
| ------------------------------------------------------------------- | ----------- | ------- | ----------------------------------------------------------------- |
| Applicazione parziale delle regole in CML-073                       | MEDIA       | ALTO    | Richiede disciplina: applicare TUTTE le regole o nessuna          |
| Tab "Esportazioni" potrebbe sembrare vuoto se pochi export visibili | BASSA       | BASSO   | Aggiungere messaggio "Nessun export disponibile"                  |
| Didattica senza moduli futuri (Attività, Materiali)                 | ALTA        | BASSO   | Area rimane in preparazione, badge "In preparazione" già previsto |
| Contrasto badge 🟡 non risolto fino a CML-074                       | ALTA        | BASSO   | Non bloccante, ma da non dimenticare                              |
| Schema `.cml` non toccato — export invariato                        | —           | —       | Intenzionale: comportamento export non cambia                     |

---

## 5. Prossimo step

**CML-073 — NAVIGATION_AND_HOME_LINKS_RUNTIME_INCREMENT**

### Perimetro

| Area          | Intervento                                                        |
| ------------- | ----------------------------------------------------------------- |
| Home          | Fix link inattivi, breadcrumb, compattazione footer microcopy     |
| Navigazione   | Riorganizzare tab: max 5 + sotto-navigazione                      |
| UDA           | Separare da Valutazione/Evidenze, scroll diretto da Home          |
| Export        | Raccogliere in tab Esportazioni, ridurre a 3 primari per gruppo   |
| Microcopy     | Uniformare "preparazione", compattare disclaimer, glossario       |
| Mobile        | Label complete, menu overlay ridotto                              |
| Design system | Applicare classi `.btn-primary`, `.btn-secondary`, badge standard |

### Escluso da CML-073 (CML-074+)

- Struttura HTML semantica (landmark, skip link)
- Contrasto badge 🟡
- Definizione di nuovi moduli funzionali
- Schema `.cml`, export logiche, ruolo gating, viewer curricolo

---

## Verdetto

`CML_072_DESIGN_SYSTEM_AND_NAVIGATION_CONTRACT_READY`
