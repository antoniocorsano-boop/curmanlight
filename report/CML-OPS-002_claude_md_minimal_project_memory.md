# CML-OPS-002 — Claude.md Minimal Project Memory Report

## 1. Scopo

Creare il file `CLAUDE.md` alla radice del repository come memoria operativa minimale per Claude Code, traducendo il contratto OPS-001 in forma operativa.

## 2. Baseline tecnica

| Parametro       | Valore                       |
| --------------- | ---------------------------- |
| Repository      | `C:\Users\anton\CurManLight` |
| Branch          | `main`                       |
| HEAD            | `28b697e`                    |
| origin/main     | `28b697e`                    |
| Normalized data | 10/14                        |
| Runtime mappa   | 10/14                        |
| Shape test      | 10/10 PASS                   |

## 3. Collegamento con CML-OPS-001

OPS-001 ha definito il contratto operativo nella sezione 6 con la specifica del contenuto `CLAUDE.md`. OSP-002 traduce quella specifica in file reale, con le seguenti adattamenti:

- Aggiunta sezione "Slice Types" con tabella esplicita tipi/scope.
- Aggiunta sezione "Report Format" per standardizzare l'output delle slice.
- Aggiunta "Next Recommended Slices" per orientare la roadmap.
- Mantenuto tutto entro ~75 righe.

## 4. Perche' creare `CLAUDE.md`

Senza `CLAUDE.md`, Claude Code ricostruisce il contesto ad ogni sessione leggendo file sparsi. Con `CLAUDE.md`, il contesto essenziale e' disponibile immediatamente: identita', stato, regole, validazioni. Questo riduce errori di scope, push accidentali, e ridondanza narrativa.

## 5. Contenuto scelto

8 sezioni operative:

1. Project Identity (5 righe)
2. Current Consolidated State (6 righe)
3. Operating Rules (11 regole)
4. Slice Types (tabella 8 tipi)
5. Validation Commands (4 comandi)
6. Report Format (formato standard)
7. SchoolKB Boundary (4 regole)
8. Next Recommended Slices (3 slice)

Totale: ~75 righe.

## 6. Contenuto escluso

- Cronologia dettagliata delle slice passate
- Log completi o report lunghi
- Path locali sensibili
- Link OAuth reali o client ID
- Token, API key, segreti
- Istruzioni di deploy automatico
- Autorizzazioni di push automatico fuori SYNC
- Dettagli dei contratti di sistema (rimandano ai file dedicati)

## 7. Motivazione della brevita'

Un `CLAUDE.md` verboso consuma contesto e riduce la capacita' operativa di Claude Code. La brevita' assicura che la memoria sia letta integralmente ad ogni sessione senza troncamenti. Le regole operative sono dichiarative, non narrative.

## 8. Regole operative incluse

11 regole coprono: slice-bound, preflight, commit selettivo, push, deploy, scope docs-only, scope dati, scope tools, dipendenze, credenziali, separazione CML/SKB.

## 9. Stato consolidato incluso

Parametri chiave: 10/14 normalizzati, 10/14 runtime, 10/10 shape, Educazione Fisica pending con CML-178, SchoolKB disattivato, OPS in corso.

## 10. Report format incluso

Standardizzato in 4 livelli: output breve, conferme obbligatorie, stato consolidato, report completo solo se necessario.

## 11. Confine SchoolKB incluso

4 regole: parallelo a CML, no OAuth senza slice dedicata, no credenziali, scope massimo drive.file.

## 12. Skill/hook non creati

Conforme al contratto: la creazione di skill e hook avviene in CML-OPS-003 e CML-OPS-005. Questa slice crea solo `CLAUDE.md`.

## 13. Invarianti rispettate

- Runtime intatto
- Dati curriculum intatti
- Tools intatti
- Schema `.cml` intatto
- Export/import intatti
- Funzioni evidenze/UDA intatte
- SchoolKB intatto
- Zero credenziali
- Zero dipendenze
- Nessun deploy
- Nessun push

## 14. Rischi residui

| Rischio                                    | Mitigazione                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `CLAUDE.md` drift (stato non aggiornato)   | Aggiornare ad ogni slice significativa                                                      |
| `CLAUDE.md` troppo lungo (over time)       | Rigido controllo di soglia 80 righe                                                         |
| Regole ignorate da Claude Code             | Le regole sono dichiarative e ricorsivamente leggibili                                      |
| Confusione `CLAUDE.md` globale vs progetto | Questo e' il `CLAUDE.md` di progetto; esiste anche un file globale in `~/.claude/CLAUDE.md` |

## 15. Raccomandazione per CML-OPS-003

CML-OPS-003 dovrebbe creare la prima skill `cml-sync` in `.claude/skills/cml-sync.md`. La skill automatizza: preflight Git, verifica HEAD/origin, allineamento, stato working tree.

## 16. Verdetto finale

**CML_OPS_002_CLAUDE_MD_MINIMAL_PROJECT_MEMORY_READY**
