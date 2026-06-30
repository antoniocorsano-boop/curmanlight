# CML-UX-CERTIFICATION-READINESS-CURRICULUM-UI

## Baseline tecnica

| Elemento | Valore |
|----------|--------|
| Branch | `main` |
| HEAD | `9219a3e` (origin/main) |
| origin/HEAD | `9219a3e` |
| Working tree | pulito |
| Runtime | `_published_snapshot/netlify-current/index.html` |
| Validatore | 14/14 PASS |
| Shape test | 14/14 PASS |

## Problema segnalato dall'utente

- Da mobile, esperienza debole: scroll eccessivo e contenuti ridondanti
- Dopo selezione disciplina in Curriculum, la pagina mostra quadro generale lungo prima del contenuto utile
- La vista centrale ripete discipline già presenti nella sidebar
- "Competenze e progettazione" percepita come centrata su Tecnologia
- UX/UI non ancora "audit-ready" — obiettivo: certificazione esterna

## Criteri certification-ready usati

1. **Chiarezza immediata** — entro primo viewport: dove sono, quale disciplina selezionata, prossimo passo
2. **Riduzione ridondanza** — stesse discipline non in 3 punti diversi
3. **Mobile first** — contenuto utile rapido, scroll ridotto
4. **Disciplina al centro** — disciplina selezionata in primo piano, quadro generale secondario
5. **Accessibilità preservata** — skip link, focus, ARIA accordion
6. **Coerenza istituzionale** — linguaggio chiaro, nessuna funzione percepita come sperimentale

## Evidenza dall'audit

| Problema | Impatto | Priorità |
|----------|---------|----------|
| Quadro generale (14 discipline × 3 ordini) mostrato subito, anche con disciplina selezionata | Scroll eccessivo, ridondanza | P1 |
| `mappaDisciplinaCorrente` default hardcoded a `'tecnologia'` | Progettazione percepita centrata su Tecnologia | P1 |
| `renderUdaModello` fallback hardcoded a `"Tecnologia"` | UDA statiche visibili fuori contesto | P1 |
| `selectDisc` non auto-apre il `<details>` della disciplina selezionata | L'utente deve cliccare manualmente per vedere i contenuti | P2 |
| Index pills + riepilogo + ordini completi duplicano la sidebar | Tripla ridondanza | P2 |
| `setTab` per didattica non sincronizzava `mappaDisciplinaCorrente` | Mappa mostrava disciplina sbagliata | P1 |

## Interventi runtime applicati

### A. Quadro generale collassato
- L'intero blocco (index pills + riepilogo + ordini) è stato racchiuso in `<details class="curricolo-quadro"><summary>📊 Quadro generale delle discipline</summary>`
- Chiuso di default su desktop e mobile
- L'utente lo espande solo se serve

### B. Disciplina selezionata in primo piano
- Aggiunto blocco `.curricolo-disc-focus` subito dopo la copertura, visibile solo se `selDisc` è impostato
- Mostra icona, nome, competenza, conteggio voci e proposte 2025
- La disciplina selezionata viene aperta automaticamente (`<details open>`)

### C. Fix `mappaDisciplinaCorrente` default
- Da `var mappaDisciplinaCorrente = 'tecnologia'` a `var mappaDisciplinaCorrente = discKeyFromName(selDisc) || null`
- Il default non è più hardcoded a Tecnologia

### D. Fix `renderUdaModello` fallback
- Da `var selectedDisc = selDisc || "Tecnologia"` a `var selectedDisc = selDisc || ""`
- Se nessuna disciplina selezionata: mostra messaggio guida invece di mostrare UDA di Tecnologia

### E. Sync mappa in `setTab`
- Aggiunto syncing `mappaDisciplinaCorrente` da `selDisc` prima di renderizzare le funzioni di progettazione in `setTab`

### F. `getDisciplineEvidenceData` fallback
- Aggiunto terzo livello fallback: `discKeyFromName(DISCIPLINE[0])` invece di restare su Tecnologia

## Test desktop

| Test | Risultato |
|------|-----------|
| Home | PASS |
| Curriculum — vista iniziale | PASS — quadro generale chiuso |
| Curriculum — con disciplina selezionata | PASS — focus visibile, dettagli aperti |
| Cambio disciplina (sidebar) | PASS |
| Tech | PASS |
| Italiano | PASS |
| Matematica | PASS |
| Storia | PASS |
| Inglese | PASS |
| Religione Cattolica | PASS |
| Competenze e progettazione | PASS — mappa sincronizzata |
| Evidenze/Valutazione | PASS |
| UDA | PASS — disciplina selezionata rispettata |
| Export | PASS |
| Guida | PASS |

## Test mobile (viewport 390×844, 430×932, 360×740)

| Test | Risultato |
|------|-----------|
| Primo contenuto utile rapido | PASS — quadro generale chiuso riduce scroll |
| Bottom bar funzionante | PASS |
| Menu funzionante | PASS |
| Cambio disciplina | PASS |
| Nessun overlay/blocco | PASS |
| Scroll gestibile | PASS |

## Test accessibilità

| Elemento | Risultato |
|----------|-----------|
| Skip link | PASS (preservato) |
| Focus `setTab` | PASS (preservato, non modificato) |
| Focus `selectDisc` | PASS (preservato) |
| ARIA accordion Evidenze | PASS (preservato) |
| Tastiera su accordion | PASS (Enter/Space) |
| Nuovi elementi accessibili | `<summary>` è nativamente accessibile |

## Regressioni escluse

| Test | Risultato |
|------|-----------|
| Hash navigation | PASS |
| Export Center (6 gruppi) | PASS |
| Validatore | 14/14 PASS |
| Shape test | 14/14 PASS |
| Errori JavaScript reali | 0 |

## Rischi residui

- `mappaDisciplinaCorrente` può essere `null` se `selDisc` non è impostato — gestito con fallback in `getDisciplineEvidenceData` e `renderMappaDisciplinare`
- Il quadro generale collassato potrebbe disorientare utenti abituati alla vecchia vista; risolvibile con tooltip

## Verdict

`CML_UX_CERTIFICATION_READINESS_CURRICULUM_UI_READY`
