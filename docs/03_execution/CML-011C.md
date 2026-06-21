# CML-011C — Export and Guide Clarity Real Task Smoke

## Stato

Smoke test reale su microcopy CML-011B. Nessuna modifica runtime, nessun deploy.
Verifica se la microcopy risolve il problema di comprensione del flusso export/guida.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `2da61ed` (CML-011B)
- Working tree: pulita
- Nessuna modifica runtime ✅
- Nessun deploy ✅

## Scenario utente

1. **Apro la pagina** — header istituzionale, DM 254/2012 e DM 221/2025
2. **Leggo il cruscotto** — "Stato: revisione avviata — Prossima azione: controlla le 12 voci da validare"
3. **Entro nel lavoro** — toolbar filtri + export, card, dettaglio espandibile
4. **Arrivo all'area export** — pulsante "📄 Export ▾" nel toolbar
5. **Distinguo confronto vs definitivo**:
   - Toolbar: 📄 Word (confronto), 📋 Copia per Word (confronto), 📝 Markdown (confronto), 🖨 PDF (confronto)
   - Tab Riepilogo: sezione "📋 Curricolo Definitivo dopo Revisione" con labels (definitivo)
6. **Riconosco la necessità di validazione**:
   - Toolbar: "Documento di lavoro — da validare" badge
   - Definitivo: ⚠️ "Documento di lavoro — da validare. Non sostituisce delibera del Collegio Docenti."

## Chiarezza export

| Domanda | Esito | Note |
|---|---|---|
| Capisce cosa esporta? | ✅ Chiaro | (confronto) vs (definitivo) sono autoesplicativi |
| Capisce confronto vs definitivo? | ✅ Chiaro | Sezioni separate, heading e labels distinti |
| Capisce che serve validazione umana? | ✅ Chiaro | Disclaimer presente in entrambe le sezioni |
| Capisce quale formato usare? | ✅ Chiaro | Note tecniche embeddate (rete, offline) |
| Capisce quando esportare? | ✅ Chiaro | Toolbar per confronto in fase di revisione; Definitivo dopo approvazione |

## Chiarezza guida

| Domanda | Esito | Note |
|---|---|---|
| Guida vicina al punto operativo? | ✅ Sì | Note embeddate nella toolbar e nelle sezioni export |
| Disclaimer visibile ma non invasivo? | ✅ Sì | 11px, #e65100, posizionato dopo la sezione |
| Etichette comprensibili a docente non tecnico? | ✅ Sì | Italiano semplice (confronto, definitivo, validare) |
| Ambiguità bozza/proposta/confronto/definitivo? | ✅ No | Bozza="Documento di lavoro", Confronto=toolbar, Definitivo=sezione separata |

## Regressioni

- Cruscotto CML-009: ✅ preservato
- Card compatte CML-010: ✅ preservate
- Dettaglio espandibile: ✅ preservato
- Touch target mobile 44px: ✅ preservato
- Markdown/export: ✅ non alterati
- Asset (sw.js, PDF, _headers, manifest): ✅ invariati

## Responsive

| Breakpoint | Comportamento | Esito |
|---|---|---|
| 360px | Pulsanti export in colonna, wrap naturale | ✅ Accettabile |
| 414px | Idem | ✅ Accettabile |
| 768px | Toolbar a larghezza piena, bottoni flex wrap | ✅ Accettabile |
| 1280px | Layout normale, bottoni inline | ✅ Ottimale |

L'etichetta più lunga ("📋 Copia per Word (confronto)", ~24 caratteri a 12px) può occupare una riga intera a ≤360px, ma il wrapping è gestito naturalmente dal flex container del toolbar.

## Ambiguità residue

Nessuna ambiguità sostanziale rilevata. Il flusso "controllo → confronto → approvo → definitivo → validazione umana" è chiaro.

## Decisione

L'Opzione A (microcopy) + fix C2 è sufficiente. Opzione B (strutturale) non necessaria.

- **Raccomandazione**: chiudere ciclo CML-011
- **Prossimo step**: da definire (CML-012 o altro)

## Verdetto

```
CML_011C_EXPORT_GUIDE_REAL_TASK_SMOKE_READY
```
