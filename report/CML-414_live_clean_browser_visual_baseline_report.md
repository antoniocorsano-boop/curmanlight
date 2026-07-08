# CML-414 — Live Clean Browser Visual Baseline Report

## 1. Baseline tecnica

| Parametro | Valore |
|-----------|--------|
| URL | https://antoniocorsano-boop.github.io/curmanlight/ |
| Sorgente | `_published_snapshot/netlify-current` (workflow Pages) |
| HEAD commit | `bed0e3d` |
| Ultima modifica runtime | `13d65f8` — align guide collegio role (CML-408) |
| Metodo analisi | HTTP download + analisi struttura HTML |
| Browser | CLI — analisi testuale; screenshot da acquisire in browser reale |

## 2. Metodo di acquisizione

La pagina pubblicata è stata scaricata e analizzata strutturalmente (tab, sezioni, contenuti testuali, navigazione). Le viste sono state identificate attraverso i marcatori HTML `id="tab-*"` e la navigazione presente nel DOM. Gli screenshot reali in browser pulito/incognito sono raccomandati ma non acquisiti in questa slice.

## 3. Elenco screenshot raccomandati

16 screenshot consigliati, viewport desktop (1280x900) e mobile (375x812):

| # | Vista | Viewport | Note |
|---|-------|----------|------|
| 1 | Home completo | Desktop | Vista default |
| 2 | Curricolo | Desktop | Tab iniziale |
| 3 | Revisione | Desktop | — |
| 4 | Processo | Desktop | — |
| 5 | Finale in verifica | Desktop | — |
| 6 | Fonti | Desktop | — |
| 7 | Sezioni generali | Desktop | — |
| 8 | Progetta / Valutazione-Evidenze | Desktop | Sub-tab attivo |
| 9 | Programmazione annuale | Desktop | Sub-tab |
| 10 | UDA modello | Desktop | Sub-tab |
| 11 | Esportazioni | Desktop | — |
| 12 | Guida | Desktop | — |
| 13 | Home | Mobile 375px | Viewport ridotto |
| 14 | Bottom bar mobile | Mobile | Navigazione |
| 15 | Pannello Discipline espanso | Desktop | Home |
| 16 | Contesto di lavoro (modale) | Desktop | Dialog aperto |

## 4. Tabella vista per vista

### Home

| Aspetto | Rilevato |
|---------|----------|
| Titolo | Ambiente curricolare d'Istituto (banner) + Hub del processo curricolare |
| Tab attivo | Home |
| Percorso operativo | Consulta → Scegli → Progetta → Esporta → Verifica |
| Pipeline ruoli | Docente → Dipartimento → Referente → Collegio |
| Aree sistema | Curricolo, Progetta, Esportazioni, Guida |
| Governance | Dati locali, Nessun invio automatico, Validazione umana |
| Card principali | Curricolo vigente, Progetta |
| Card supporto | Applicazione classi, Adeguamento IN 2025, Processo revisione, Esportazioni |
| Pannelli | Contesto di lavoro, Curricolo applicabile, Discipline (espandibile) |

### Curricolo

| Aspetto | Rilevato |
|---------|----------|
| Struttura | viewer con versione IN 2012 / IN 2025 |
| Contenuto | Traguardi, obiettivi per ordine/classe |
| Filtri | Discipline, ordini scolastici |
| Stato | Vista principale di consultazione |

### Progetta / Valutazione-Evidenze

| Aspetto | Rilevato |
|---------|----------|
| Sub-tab | Valutazione/Evidenze, Programmazione annuale, UDA modello |
| Contenuto | Evidenze e criteri valutativi |
| Stato | Vista operativa di progettazione |

### Revisione

| Aspetto | Rilevato |
|---------|----------|
| Contenuto | Card con stato pending/modificato |
| Azioni | Filtri, Verifica voci |
| Stato | Vista di lavoro su modifiche curricolari |

### Processo

| Aspetto | Rilevato |
|---------|----------|
| Contenuto | Dashboard processo curricolare |
| Stato | Vista di monitoraggio |

### Finale in verifica

| Aspetto | Rilevato |
|---------|----------|
| Contenuto | Documento finale in bozza |
| Stato | Vista riepilogativa |

### Fonti

| Aspetto | Rilevato |
|---------|----------|
| Contenuto | Riferimenti normativi (IN 2012, IN 2025) |
| Stato | Vista consultazione fonti |

### Sezioni generali

| Aspetto | Rilevato |
|---------|----------|
| Contenuto | Sezioni generali del curricolo |
| Stato | Vista consultazione |

### Esportazioni

| Aspetto | Rilevato |
|---------|----------|
| Contenuto | Opzioni di export documento |
| Stato | Vista operativa |

### Guida

| Aspetto | Rilevato |
|---------|----------|
| Percorso | Consulta → Scegli → Progetta → Esporta → Verifica |
| Ruoli | Docente, Dipartimento, Referente, Collegio |
| Contenuto | Card operative con ruoli allineati alla Home |
| Stato | Allineata alla Home (CML-408) |

## 5. Differenze tra mock e UI reale

Nessun mock di riferimento approvato come baseline. I mock prodotti in fasi precedenti (CML-400, CML-401) non sono stati validati come stato implementato. La prima baseline visuale reale è questa. Ogni confronto mock/UI va fatto con screenshot reali in una slice successiva.

## 6. Problemi UX osservati

| # | Problema | Impatto | Note |
|---|----------|---------|------|
| 1 | Home contiene due titoli (banner + hub) potenzialmente ridondanti | Medio | "Ambiente curricolare d'Istituto" e "Hub del processo curricolare" |
| 2 | Percorso operativo (5 step) e pipeline ruoli (4 step) sono separati ma semanticamente complementari | Basso | Utente potrebbe non collegare i due percorsi |
| 3 | Pannello Discipline inizialmente chiuso — utile ma nascosto | Basso | Richiede click per espandere |
| 4 | Curricolo: due versioni (2012 / 2025) possono confondere | Medio | Nuovo utente potrebbe non capire quale sia vigente |
| 5 | Terminologia "Progetta" vs "Valutazione/Evidenze" non allineata | Basso | Sub-tab ha label diversa dal tab principale |
| 6 | Navigazione mobile: bottom bar 5 voci + menu hamburger | Basso | Spazio limitato, alcune voci nascoste in menu |

## 7. Cose da non toccare

| Elemento | Motivo |
|----------|--------|
| Blocco Hub del processo curricolare | Appena integrato (CML-401), coerente con Guida e pipeline |
| Pipeline Docente → Dipartimento → Referente → Collegio | Simmetria Home ↔ Guida verificata (CML-408) |
| Struttura tab: Home, Curricolo, Progetta, Esportazioni, Guida | Stabile, corrisponde al percorso utente |
| Separazione IN 2012 / IN 2025 | Decisione curricolare, non UX |
| Dati locali, nessun invio automatico | Principi di governance fondanti |
| Validazione umana | Requisito istituzionale |
| CurManLightBrain/ | Non tracciato, non va aggiunto |

## 8. Priorità consigliate

| Priorità | Area | Azione consigliata |
|----------|------|--------------------|
| P3 | Home | Valutare se unificare titolo banner e hub |
| P3 | Guida | Verificare coerenza iconografica con Home |
| P3 | Mobile | Test navigazione bottom bar su dispositivo reale |
| P4 | Curricolo | Valutare indicatore più chiaro della versione vigente |
| P4 | Progetta | Allineare label sub-tab al tab principale |

## 9. Prossime micro-slice consigliate

| Slice | Tipo | Oggetto |
|-------|------|---------|
| CML-415 | UX review | Screenshot reali desktop + mobile, confronto mock |
| CML-416 | Docs | Report di confronto mock vs UI reale |
| CML-417 | UX microfix | Eventuali ajustamenti Home (priorità P3) |

## 10. Verdict

```text
CML_414_LIVE_CLEAN_BROWSER_VISUAL_BASELINE_REPORT_READY_LOCAL_NOT_PUSHED
```
