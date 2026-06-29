# CML-010A — Compact Cards & Expandable Detail Design Audit

## Stato

Audit progettuale completato. Nessuna modifica runtime.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `d9b6cd8` (docs: CML-009E deploy report)
- URL: https://curmanlight.netlify.app
- Working tree: pulita
- Modifiche runtime: NESSUNA
- Deploy: NESSUNO

## Problemi individuati nell'area cards/detail

| #   | Problema                                                 | Impatto                     |
| --- | -------------------------------------------------------- | --------------------------- |
| P1  | Card pending troppo dense (300-400px + gap-header 120px) | Mobile perde il filo        |
| P2  | Gap-header ripetuto ad ogni card                         | Ridondanza severa           |
| P3  | Testo completo sempre visibile anche per ok/decise       | Vocioni schiacciano pending |
| P4  | Nessuna gerarchia visiva tra pending                     | Stanchezza decisionale      |
| P5  | Side-by-side panels inutili su mobile                    | Scroll infinito             |
| P6  | Lock-notice ripetuta per card fuori ordine               | Rumore visivo               |
| P7  | Troppi bottoni azione per card                           | Troppe scelte contemporanee |

## Proposta struttura schede compatte

4 sezioni collassabili (o micro-tab secondari) nel tab Lavoro:

| Scheda | Titolo                 | Azione primaria         | Dettaglio espandibile        |
| ------ | ---------------------- | ----------------------- | ---------------------------- |
| 1      | 📄 Documento attuale   | 📖 Mostra dettaglio     | Elenco testi + badge esito   |
| 2      | ⏳ Voci da validare    | ✅ Approva / ❌ Rifiuta | 🔍 Confronto IN 2012 vs 2025 |
| 3      | 📚 Fonti e riferimenti | 📖 Apri normativa       | Nota metodologica            |
| 4      | 📤 Esportazione        | 📝 Genera bozza         | Preview textarea             |

## Cosa fare in CML-010B

1. Sezioni collassabili in tab Lavoro
2. Card pending compatta (badge + riga + ✅/❌ + 🔍)
3. Card ok collassate per default
4. Gap-header come avviso unico
5. Lock-notice unica per disciplina/ordine
6. Progresso per sezione

## Cosa NON fare in CML-010B

- Non toccare cruscotto / toolbar / filtri
- Non toccare usage-notice / local-save-bar
- Non toccare tecnologia-export-panel
- Non toccare riepilogo / normativa / generali tab
- Non toccare Markdown / PDF / sw.js / assets / Netlify

## Esito

Audit completato → CML-010B ([closure](CML-010B.md))

## Verdetto

```
CML_010A_COMPACT_CARDS_EXPANDABLE_DETAIL_DESIGN_AUDIT_READY
```
