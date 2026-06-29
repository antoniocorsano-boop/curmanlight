# CML-146A — STATIC_BLOCK_INSPECTION_SMOKE

**Stato:** Completato.
**Verdetto:** `CML_146A_STATIC_BLOCK_INSPECTION_SMOKE_READY`

## Obiettivo

Verificare il blocco statico generato da `tools/generate-static-mappa-dati.mjs` prima di qualsiasi integrazione runtime.

## Stato iniziale

| Parametro  | Valore                                      |
| ---------- | ------------------------------------------- |
| Branch     | `main`                                      |
| HEAD       | `ec9d64b` (2 ahead of origin)               |
| Validatore | 7 file / 94 unità / `overallValid: true` ✅ |

## Confronto generated static vs MAPPA_DATI hardcoded

| Area                      | Hardcoded attuale                    | Static generated              | Compatibilità | Rischio    |
| ------------------------- | ------------------------------------ | ----------------------------- | ------------- | ---------- |
| disciplina                | ✅ presente                          | ✅ presente                   | IDENT         | BASSO      |
| struttureSostanziali      | 6 items                              | 6 items                       | IDENT         | MEDIO      |
| - nome                    | manuale                              | da ambito JSON                | IDENT         | -          |
| - descrizione             | testuale curato                      | autogenerata                  | DIFF 6/6      | MEDIO      |
| - fonte                   | con riferimento unità                | "JSON curriculum strutturato" | DIFF stile    | BASSO      |
| nodiDisciplinari          | **ASSENTE**                          | 6 items                       | **NUOVO**     | MEDIO-ALTO |
| progressioneVerticale     | 10 items                             | 10 items                      | IDENT         | MEDIO      |
| - descrizioneProgressione | testuale curato                      | autogenerata                  | DIFF 10/10    | MEDIO      |
| - fonte                   | con riferimento unità                | "JSON curriculum strutturato" | DIFF stile    | BASSO      |
| decisioniCurricolari      | 2 items                              | 2 items                       | IDENT         | BASSO      |
| ordinamento               | Osservaz.→Digit.→Mat.→Dis.→En.→Citt. | Alfabetico                    | **DIFF**      | MEDIO      |

## Analisi BOM / PowerShell

| Caso                | Comando                      | Esito               | Note                              |
| ------------------- | ---------------------------- | ------------------- | --------------------------------- |
| PowerShell redirect | `\| Out-File -Encoding utf8` | ✅ PASS             | UTF-8 con BOM, gestito dal tool   |
| Primi 8 byte file   | `node -e "fs.readFileSync"`  | `[239,187,191,...]` | BOM UTF-8 (EF BB BF) presente     |
| `node --check`      | su file con BOM              | ✅ PASS             | Il tool gestisce il BOM in stdout |

**Classificazione:** `Ambiente PowerShell only` — il problem è solo nel file temporaneo generato da PowerShell, non nel tool. Il tool gestisce correttamente il BOM.

## Opzione selezionata per CML-147

**Opzione B — Integrare con fallback hardcoded**

Motivazione:

- Il blocco è compatibile structuralmente con il runtime
- `nodiDisciplinari` è nuovo (hardcoded ne ha 0) — richiede verifica UI
- Ordinamento e descrizioni differiscono — fallback consigliato
- BOM issue non è bloccante per il workflow

## Conferme

- ✅ Runtime non modificato
- ✅ Generator non modificato (solo audit)
- ✅ Temporanei da rimuovere
