# CML-005R — Gap 2025 Operational Review Implementation

## Stato iniziale

| Campo                           | Valore                                 |
| ------------------------------- | -------------------------------------- |
| Branch                          | `cml-005r-gap-2025-operational-review` |
| HEAD partenza                   | `5019c6a` (CML-005R-SELECT)            |
| Working tree                    | pulita                                 |
| Master contiene CML-005R-SELECT | sì, commit `5019c6a`                   |

## Opzione selezionata

Opzione B da CML-005R-SELECT: indicatore "🧩 Gap 2025 della disciplina" dentro Revisione per disciplina + microcopy/link nella card Riferimenti normativi.

## Modifiche

### File modificati

- `_published_snapshot/netlify-current/index.html` — 5 righe aggiunte, 1 riga modificata

### 1. Card Riferimenti normativi (riga 710)

Sostituito `norm-desc` con microcopy che include link cliccabile `setTab('lavoro')`:

- "I gap 2025 non modificano automaticamente il curricolo."
- Link: "Apri Revisione per disciplina"
- Istruzione chiara: valutare, confrontare, decidere

### 2. Indicatore Gap 2025 nella Revisione per disciplina (riga 1279)

Aggiunto `<div class="gap-header">` prima del `card-hd` nelle card da decidere (`modifica`/`nuovo` senza decisione).

**Contenuto:**

- Label: "🧩 Gap 2025 della disciplina"
- Spiegazione: "Questa proposta evidenzia una possibile integrazione rispetto al curricolo vigente. Deve essere valutata dal gruppo di lavoro prima di entrare nel curricolo definitivo."
- Nota: "Base 2012, evidenze d'istituto e proposta 2025 restano distinguibili fino alla validazione."

**CSS aggiunto:**

- `.gap-header` — sfondo viola chiaro `#f3e5f5`, bordo sinistro `#7b1fa2`
- `.gap-header .gap-label` — grassetto, 12px
- `.gap-header .gap-note` — 10px, opacità ridotta

### 3. Non modificato

- ✅ Dati 14 discipline
- ✅ Workflow approve/reject/edit
- ✅ Confronto IN2012→IN2025
- ✅ Tab Sezioni generali
- ✅ localStorage (nessuna nuova chiave)
- ✅ PDF cache-safe
- ✅ sw.js, _headers
- ✅ Nessun nuovo tab creato
- ✅ Nessun backend/API/auth/Netlify Forms
- ✅ Nessun deploy

## Verifiche

- [x] `git diff --check` — nessun problema di whitespace
- [x] Nessun link vecchio PDF (`Corso_CurricoloDonMilani_IN2025.pdf` senza timestamp)

## Smoke test consigliato

```
[ ] Tab "Riferimenti normativi": link "Apri Revisione per disciplina" funzionante
[ ] Tab Revisione: card "modifica" mostrano gap-header viola
[ ] Tab Revisione: card "nuovo" mostrano gap-header viola
[ ] Tab Revisione: card "approvata" NON mostrano gap-header
[ ] Tab Revisione: card "rifiutata" NON mostrano gap-header
[ ] Tab Revisione: card "ok" NON mostrano gap-header
[ ] Approva → gap-header scompare
[ ] Respingi → gap-header scompare
[ ] Modifica + salva → gap-header scompare
[ ] 14 discipline preservate
[ ] Tab Curricolo definitivo preservato
[ ] Tab Sezioni generali preservato
[ ] PDF cache-safe ancora linkato
```

## Rischi residui

1. Utente può ignorare l'indicatore — mitigato dal link nella normativa
2. L'indicatore aggiunge altezza alle card — accettabile, scompare dopo decisione
3. Utente già esperto può trovare ripetitivo — accettabile per chiarezza verso nuovi utenti

## Prossimo passo

CML-006R-SELECT — Visual Lightening / Graphic Density Audit
