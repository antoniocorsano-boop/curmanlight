# CML-146A: Static Block Inspection Smoke

## Fotografia iniziale

| Parametro | Valore |
|-----------|--------|
| Branch | `main` |
| HEAD | `ec9d64b` |
| origin/main | `810ae84` |
| Commit locali ahead | 2 (ec9d64b, 260b4ae) |
| Working tree | Pulito (jcode/ non committato) |

## Riferimento CML-145/CML-146

- **CML-145**: Opzione C selezionata — generatore statico
- **CML-146**: Tool creato, output JS valido, BOM gestito

## Comando generatore

```bash
node tools/generate-static-mappa-dati.mjs content/curriculum/tecnologia.normalized.json
```

## Esiti verifica

| Verifica | Esito |
|----------|-------|
| `node --check tmp-tecnologia-static-mappa.js` | ✅ PASS |
| `node tools/validate-cml-normalized-curriculum.mjs` | ✅ overallValid: true |
| `rg -n "const TECNOLOGIA_MAPPA_DATI|struttureSostanziali|nodiDisciplinari|progressioneVerticale|decisioniCurricolari|descrizione|fonte|descrizioneProgressione"` | ✅ 51 matches |

## Analisi BOM / PowerShell

| Caso | Comando | Esito | Note |
|------|---------|-------|------|
| PowerShell redirect con UTF8 | `\| Out-File -Encoding utf8` | ✅ PASS | UTF-8 con BOM |
| Primi 8 byte file temporaneo | `node -e "fs.readFileSync"` | `[239,187,191,...]` | BOM UTF-8 (EF BB BF) |
| `node --check` su file con BOM | - | ✅ PASS | BOM non bloccante |

**Classificazione problema:** `Ambiente PowerShell only` — non è un bug del generatore né del test harness.

## Confronto static generated vs hardcoded

| Area | Hardcoded | Generato | Compatibilità | Rischio |
|------|-----------|----------|---------------|---------|
| disciplina | presente | presente | IDENT | BASSO |
| struttureSostanziali | 6 items | 6 items | IDENT | MEDIO |
| nodiDisciplinari | **ASSENTE** | 6 items | **NUOVO** | MEDIO-ALTO |
| progressioneVerticale | 10 items | 10 items | IDENT | MEDIO |
| decisioniCurricolari | 2 items | 2 items | IDENT | BASSO |

Differenze operative:
- Ordinamento: hardcoded segue logica didattica, generato è alfabetico
- Descrizioni: hardcoded curate manualmente, generato autogenerato
- `nodiDisciplinari`: hardcoded non ha questa sezione, generato la aggiunge

## Opzione selezionata per CML-147

**Opzione B — Integrare con fallback hardcoded**

Poter decidere:
- Usare blocco generato
- Mantenere riferimento al dato precedente come fallback
- Validare visivamente l'apparizione di `nodiDisciplinari`

## Conferme

- ✅ Runtime non modificato
- ✅ Generator non modificato (solo audit)
- ⏳ Temporanei da rimuovere

## Prossimo passo

CML-147 — Controlled Tecnologia Runtime Integration con fallback