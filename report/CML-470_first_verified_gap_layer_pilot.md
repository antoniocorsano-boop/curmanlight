# CML-470 — First Verified Gap Layer Pilot (Corrected)

Data: 2026-07-11

## 1. Scopo

Correggere la PR #60 dopo review semantica negativa: le 7 proposte originali derivavano da gap CML-179/CML-204 pre-polish CML-210A, rendendo la maggior parte delle entry ridondanti con il JSON normalizzato corrente.

## 2. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `codex/cml-470-gap-layer-pilot` |
| PR | #60 |
| HEAD prima della correzione | `ac3ee196205e91915d5dcc0363138ada8e0d1442` |
| HEAD dopo la correzione | `a218f5bbdb556dbcf4674c9aeb3e49e292778627` |
| base | `main` @ `171f61a89f18117227fdcaccdbc52f946e4efca3` |
| Dati normalizzati EF | 14/14 (7 unità, 4 nuclei) |
| Stato EF | bozza_generabile, in_revisione, humanValidationRequired: true |
| Validazione dipartimentale | ACCETTATA (Opzione C, 2026-06-28) |

## 3. Metodo di analisi

Confronto rigoroso di ogni entry della PR originale contro:
1. `content/curriculum/educazione-fisica.normalized.json` (stato attuale)
2. `docs/03_execution/CML-210A.md` (modifiche applicate dal polish)
3. `docs/04_user/educazione_fisica_validazione_dipartimentale.md` (decisione dipartimento)

Per ogni entry: `proposto` confrontato con il campo corrispondente nel JSON normalizzato. Entry eliminata se:
- proposto coincide sostanzialmente con il testo corrente (dopo trim + normalizzazione whitespace)
- il miglioramento e gia stato applicato da CML-210A
- la motivazione descrive un gap ormai chiuso dalla validazione dipartimentale
- la proposta non introduce una differenza reale e verificabile

## 4. Analisi per entry

### Entry 1: ef_inf_5_001 — ELIMINATA

- **Motivazione originale**: P1-4 progressione verticale debole
- **testoOriginale**: traguardo attuale (pre-CML-210A)
- **proposto**: stesso traguardo + stessi obiettivi del JSON corrente
- **Motivo eliminazione**: proposto ≡ testoOriginale ≡ JSON corrente. Nessuna differenza reale.

### Entry 2: ef_pri_1_001 — ELIMINATA

- **Motivazione originale**: P1-4 progressione verticale debole
- **proposto**: traguardo con "anche a partire dalle esperienze dell'Infanzia" + obiettivi con riferimento Infanzia
- **Motivo eliminazione**: CML-210A ha gia applicato esattamente questo testo. Il JSON corrente contiene gia "anche a partire dalle esperienze dell'Infanzia" nel traguardo e "collegandosi alle esperienze motorie dell'Infanzia" nell'obiettivo.

### Entry 3: ef_pri_3_001 — ELIMINATA

- **Motivazione originale**: P1-3 nucleo Abilita motorie monoclasso
- **proposto**: ambito con "con progressione da Primaria classe 1" + obiettivi con riferimento Primaria 1
- **Motivo eliminazione**: CML-210A ha gia aggiunto il riferimento a Primaria 1 nell'obiettivo 1 ("anche a partire dalle basi sviluppate in Primaria classe 1"). L'unica differenza residua e l'aggiunta all'ambito, che e una modifica labelling priva di impatto sostanziale. Gap P1-3 gia affrontato.

### Entry 4: ef_pri_5_001 — ELIMINATA

- **Motivazione originale**: P1-4 progressione verticale debole
- **proposto**: traguardo con "anche a partire dalle competenze motorie sviluppate in Primaria classe 3"
- **Motivo eliminazione**: CML-210A ha gia applicato questo testo. Il JSON corrente contiene gia il riferimento a Primaria classe 3 nel traguardo.

### Entry 5: ef_sec_1_001 — ELIMINATA

- **Motivazione originale**: P1-1 nucleo Salute e benessere assente
- **proposto**: aggiunta 5a conoscenza "Salute e benessere scolastico" + modifica obiettivi
- **Motivo eliminazione**: Gap P1-1 chiuso dalla validazione dipartimentale. Il dipartimento ha confermato il modello a 4 nuclei (Opzione C, 2026-06-28). Introdurre una 5a voce di conoscenza su Salute e benessere contradirebbe la decisione dipartimentale.

### Entry 6: ef_sec_2_001 — ELIMINATA

- **Motivazione originale**: P1-1 nucleo Salute e benessere assente
- **proposto**: aggiunta 5a conoscenza "Salute e benessere"
- **Motivo eliminazione**: Stessa motivazione dell'entry 5. Gap P1-1 chiuso dalla validazione dipartimentale.

### Entry 7: ef_sec_3_001 — MANTENUTA

- **Motivazione originale**: P1-4 progressione verticale debole + P2-1 wording generico
- **Differenze reali verificate**:
  1. **Obiettivo 1**: proposto aggiunge "valorizzando le competenze sviluppate in Secondaria classe 1 e 2" — NON presente nel JSON corrente
  2. **Obiettivo 3**: proposto aggiunge "con attenzione a corrette abitudini e pause attive" — NON presente nel JSON corrente
- **Fonte**: CML-210A ha aggiunto il ponte verticale a obiettivo 4 ("valorizzando le esperienze dei cicli precedenti") ma NON a obiettivi 1 e 3. Queste sono lacune genuine del polish.

## 5. Riepilogo

| Entry | Unità | Esito | Motivo |
|---|---|---|---|
| 1 | ef_inf_5_001 | ELIMINATA | proposto ≡ corrente |
| 2 | ef_pri_1_001 | ELIMINATA | applicato da CML-210A |
| 3 | ef_pri_3_001 | ELIMINATA | applicato da CML-210A (obiettivo) + labelling ambito |
| 4 | ef_pri_5_001 | ELIMINATA | applicato da CML-210A |
| 5 | ef_sec_1_001 | ELIMINATA | gap P1-1 chiuso da dipartimento |
| 6 | ef_sec_2_001 | ELIMINATA | gap P1-1 chiuso da dipartimento |
| 7 | ef_sec_3_001 | **MANTENUTA** | 2 differenze genuine vs JSON corrente |

**Pacchetto EF**: 1 entry su 7 originali.

## 6. Modifiche al validator

Aggiunte a `curman-react/tools/validate-gap-data.mjs`:

1. **`testoOriginale` obbligatorio**: rifiuta entry senza testoOriginale
2. **`proposto` ≠ `testoOriginale`**: dopo normalizzazione whitespace + lowercase, rifiuta entry identiche
3. Lint warning rimosso (variabile `curriculumUnits` non utilizzata)

## 7. Verifiche

| Comando | Esito |
|---|---|
| `npm ci` | PASS (53 packages) |
| `npm run validate:gap` | PASS (1 proposta valida) |
| `npm run sync:gap` | PASS (1 pacchetti) |
| `npm run lint` | PASS (0 warnings, 0 errors) |
| `npm run test:b01` | PASS |
| `npm run test:b02` | PASS |
| `npm run test:b03` | PASS |
| `npm run build` | PASS (977ms) |
| `git diff --check` | PASS (solo CRLF warnings) |
| `npm run check:pair` | PASS (allSync: true) |
| `npm run validate:curriculum` | PASS (14/14, 0 errors) |
| `npm run test:runtime-shape` | PASS (14/14) |

## 8. Audit Chromium

**Eseguito** con Playwright 1.61.1 su `http://localhost:5173/curmanlight/` (dev server Vite).

### Setup
- Browser: Chromium headless (no-sandbox)
- Viewport: 1280×800 (desktop), 390×844 (mobile)
- Navigazione: Home → "Proponi un aggiornamento" → RevisioneView
- Selezione disciplina: Educazione Fisica via `<select>`

### Risultati

| Check | Esito |
|---|---|
| `ef_sec_3_001` card visibile | PASS |
| Testo "Secondaria classe 1 e 2" presente | PASS |
| Testo "corrette abitudini" presente | PASS |
| Pulsante Accogli visibile | PASS |
| Pulsante Rifiuta visibile | PASS |
| Errori console | 0 |
| Persistenza dopo reload | PASS (localStorage) |
| Screenshot desktop | `report/screenshots/CML-470/revisione-ef-desktop.png` |
| Screenshot mobile | `report/screenshots/CML-470/revisione-ef-mobile.png` |

### Note
- Il gap layer ef_sec_3_001 si integra correttamente nel B03 decision workflow della RevisioneView
- Le due differenze testuali (Secondaria 1-2 in obiettivo 1, corrette abitudini in obiettivo 3) sono visibili e confrontabili
- I pulsanti Accogli/Rifiuta sono operativi (non cliccati durante l'audit per preservare lo stato)

## 9. Stato Git

```
Branch: codex/cml-470-gap-layer-pilot
HEAD: a218f5bbdb556dbcf4674c9aeb3e49e292778627
Working tree: report e tools in modifica (audit Chromium completato)
```

## 10. PR #60

PR aggiornata con i commit di correzione. Descrizione aggiornata.

## 11. Verdetto

`CML_470_FIRST_VERIFIED_GAP_LAYER_PILOT_CORRECTED_PR_60_AUDIT_COMPLETED_READY_FOR_REVIEW`
