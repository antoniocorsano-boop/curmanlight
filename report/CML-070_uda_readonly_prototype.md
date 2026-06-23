# CML-070 — UDA Read-Only Prototype — Report

## Dettagli tecnici

- **HEAD partenza:** `c9a9b43` (CML-069)
- **File runtime modificato:** `_published_snapshot/netlify-current/index.html`
- **Documenti creati:** `docs/03_execution/CML-070.md`, `report/CML-070_uda_readonly_prototype.md`
- **Repository:** `C:\Users\anton\CurManLight`

## Dati usati

2 unità Tecnologia da `TECNOLOGIA_NORM_DATA`:
- `tec_pri_5_001` (Primaria, Classe 5) — Cittadinanza tecnologica
- `tec_sec_1_002` (Secondaria, Classe 1) — Digitale, dati, procedure e sicurezza

## UDA visualizzate

| # | ID | Titolo | Ordine | Classe | Campi totali | Di cui curricolari | Di cui esempio |
|---|-----|--------|--------|--------|-------------|-------------------|----------------|
| 1 | uda_pri_5_digitale | Cittadini digitali responsabili | Primaria | 5 | 14 | 8 | 6 |
| 2 | uda_sec_1_informatica | Dal computer al documento | Secondaria | 1 | 14 | 8 | 6 |

## Output validazione

```
node tools/validate-cml-normalized-curriculum.mjs
→ PASS: 13 units, valid: true, warnings: 0
```

## Output audit

```
node tools/audit-cml-curriculum-coverage.mjs
→ 14 discipline, nessuna regressione
→ buttonTags: 101 (+1 per Progetta UDA link)
→ inlineOnclick: 117 (+3)
→ exportButtons: 27 (invariato)
→ consistencyWarnings: Religione Cattolica (preesistente)
```

## Esito smoke locale

20/20 controlli PASS:
- Home, card Didattica, tab Didattica, UDA modello, 2 UDA, badge origine, campi, read-only, nessun salvataggio, Valutazione/Evidenze, filtro ordine, Curriculum, Tecnologia, Revisione, export/import/report, role-access, mobile, JS parse, validazione

## Regressioni escluse

| Area | Esito |
|------|-------|
| Curriculum | ✅ Invariato |
| Valutazione/Evidenze | ✅ Invariato |
| Export/import/report | ✅ Invariati |
| Role-access gating | ✅ Invariato |
| Schema .cml | ✅ Invariato |
| localStorage/sessionStorage | ✅ Nessuna aggiunta |
| Mobile bottom bar | ✅ Invariata |
| Mobile menu overlay | ✅ UDA entry aggiunta |

## Raccomandazioni successive

1. Deployare su GitHub Pages e validare live (CML-070A)
2. Dopo validazione, il prototipo UDA può essere esteso con:
   - Altre discipline oltre Tecnologia
   - UDA per Infanzia
   - Filtro per ordine
   - Versione esportabile (solo dopo feedback docenti)
3. Infanzia non coperta: se necessario, aggiungere UDA modello basata su unità Infanzia

## Verdetto

`CML_070_UDA_READONLY_PROTOTYPE_READY`
