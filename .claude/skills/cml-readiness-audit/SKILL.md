# Skill: `cml-readiness-audit`

## 1. Nome e Scopo

**Skill**: `cml-readiness-audit`

**Scopo**: valutare la readiness disciplinare prima di data preparation o runtime integration.

## 2. Quando Usarla

- Audit di disciplina residua.
- Gap model.
- Readiness data.
- Verifica se procedere a `.normalized.json`.
- Confronto con il contratto curricolare esistente.
- Preparazione di CML-178 e slice simili.

## 3. Quando NON Usarla

- Creare file `.normalized.json`.
- Integrare runtime.
- Modificare `content/curriculum/`.
- Modificare `tools/`.
- Deploy.
- Sync remota.
- SchoolKB runtime.

## 4. Input Richiesti

- Disciplina.
- Task ID.
- Documenti precedenti.
- Baseline HEAD/origin.
- Fonti disponibili.
- Output atteso: audit, report o gap model.

## 5. Preflight

- Git clean.
- Baseline coerente.
- Collisione file controllata.
- Scope docs-only.

## 6. Dimensioni di Valutazione Readiness

- Copertura documentale.
- Completezza nuclei.
- Progressione I/II/III.
- Obiettivi e traguardi.
- Lessico istituzionale.
- Coerenza con schema CML.
- Rischio dati.
- Rischio istituzionale.
- Readiness verdict.

## 7. Output Minimo dell'Audit

- Classificazione readiness.
- Gap principali.
- Dati mancanti.
- Rischi.
- Raccomandazione prossima slice.
- Divieto di data-prep se readiness bassa.

## 8. Regole di Blocco

Bloccare se:

- L'audit richiede dati non disponibili.
- Il risultato produrrebbe inferenze troppo forti.
- Serve validazione umana prima di procedere.
- Si tenta di creare JSON normalizzato senza autorizzazione.

## 9. Validazioni

- `git diff --check`
- Scope docs-only.
- No runtime.
- No `content/curriculum/`.
- No `tools/`.
- No secrets.

## 10. Formato Finale

- Markdown standard.
- Tabella compatta.
- Readiness verdict.
- Gap model.
- Prossima slice consigliata.

## 11. Divieti

- No box-drawing table.
- No `Thought for`.
- No log lunghi.
- No dati inventati.
- No normalizzazione anticipata.
- No runtime integration.

## 12. Verdict Standard

- `*_READINESS_READY`
- `*_READINESS_NOT_READY`
- `*_GAP_MODEL_READY`
- `*_BLOCKED`
