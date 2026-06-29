# CML-055 — Role Access Code Gating Contract

## Summary

Specifica implementativa completa per codice operativo di dipartimento e referente. Contratto creato in `docs/02_system/ROLE-ACCESS-CODE-GATING-CONTRACT.md`.

## Dettaglio

| Campo             | Valore                                               |
| ----------------- | ---------------------------------------------------- |
| HEAD partenza     | `1ef69a0`                                            |
| Contratto         | `docs/02_system/ROLE-ACCESS-CODE-GATING-CONTRACT.md` |
| Sezioni contratto | 10 (A–J) + appendice                                 |

## Azioni protette

| Azione                                   | Blocco |
| ---------------------------------------- | ------ |
| Esportazione esito dipartimentale `.cml` | 🔒     |
| Import esiti dipartimentali (referente)  | 🔒     |
| Generazione report gruppo curricolo      | 🔒     |

## Azioni libere

Viewer curricolo, sezioni generali, guide, esempi, proposta docente, validazione esiti (lettura).

## Persistenza

`sessionStorage` — scompare alla chiusura scheda. Nessun `localStorage`.

## Limiti dichiarati

| Limite                                   | Dichiarato |
| ---------------------------------------- | ---------- |
| Aggirabile da console browser            | ✅         |
| Non autenticazione, login, password      | ✅         |
| Non autorizzazione, firma, validazione   | ✅         |
| Non protezione dati personali            | ✅         |
| Codice predefinito `CML2025` documentato | ✅         |

## Confini

| Controllo                         | Esito             |
| --------------------------------- | ----------------- |
| Docs-only                         | ✅                |
| Nessun runtime modificato         | ✅                |
| Nessun deploy                     | ✅                |
| Nessuna modifica schema `.cml`    | ✅                |
| Nessuna modifica persistenza      | ✅                |
| MEMORY.md presente come untracked | ✅ non committato |
| `.kilo/` presente come untracked  | ✅ non committato |
| CLAUDE.md presente come untracked | ✅ non committato |

## Prossimo step raccomandato

CML-056 — ROLE_ACCESS_CODE_GATING_IMPLEMENTATION (runtime: implementare blocco in `index.html`)
