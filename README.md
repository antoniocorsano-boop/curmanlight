# CurManLight — Curricolo Verticale I.C. Calvario-Covotta

**Versione pubblica:** https://antoniocorsano-boop.github.io/curmanlight/

CurManLight è una PWA statica per la consultazione e revisione del curricolo verticale d'istituto della scuola dell'infanzia e del primo ciclo. Funziona interamente nel browser: nessun dato viene inviato a server, nessun account richiesto.

Baseline: `main@82691b4`.

## Principi

- **Locale e privato:** tutto resta sul dispositivo. Nessun backend, nessun OAuth, nessun salvataggio su server.
- **Zero dipendenze runtime:** HTML/CSS/JavaScript vanilla. Nessun framework, nessun package manager, nessuna build.
- **Validazione umana richiesta:** lo strumento organizza la consultazione e il confronto, ma non approva automaticamente modifiche curricolari.

## Stato Attuale

| Area | Stato |
|------|-------|
| Accessibilità | **88/100** — audit-ready interno |
| Curriculum | 14/14 discipline normalizzate |
| Runtime mappa dati | 14/14 PASS |
| Validatore | 14/14 PASS |
| Repository readability | scaffold merged |
| PR aperte | nessuna |

## Accessibilità

Score interno **88/100** (audit-ready, non certificazione WCAG):

- Lighthouse desktop/mobile: 96/100
- axe: 0 serious, 0 moderate region
- Contrasto colore: remediato
- Region/landmark ARIA: remediato
- Overlay focus trap: implementato
- Breadcrumb sync: risolto
- Pulsanti icon-only: etichettati con `aria-label`
- Test NVDA interattivo reale: passato
- P0/P1/P2: 0/0/0
- Errori JS reali: 0

**Limitazioni:** non certificazione WCAG, non conformità legale completa, VoiceOver/macOS non testato, P3 naming/microcopy in backlog.

## Funzionalità

| Funzionalità | Stato |
|---|---|
| Curriculum 14/14 discipline | ✅ |
| `.cml` teacher proposal workflow | ✅ |
| Department import/validation workflow | ✅ |
| Referent import/report workflow | ✅ |
| Evidence panel (marcatura evidenze) | ✅ |
| UDA draft Markdown preview/copia/download | ✅ |
| PWA / installabile su dispositivo | ✅ |
| Guida rapida in-app | ✅ |

## Uso rapido

1. Apri https://antoniocorsano-boop.github.io/curmanlight/
2. Scegli un'area dalla barra in alto: **Curriculum** per il documento istituzionale, **Competenze e progettazione** per evidenze e UDA
3. Usa la **Home** per orientarti e seguire il percorso in 5 minuti

## Struttura Repository

| Percorso | Scopo |
|----------|-------|
| `_published_snapshot/netlify-current/index.html` | Runtime (app intera in unico file) |
| `content/curriculum/*.normalized.json` | Dati curricolari 14 discipline |
| `docs/` | Documentazione tecnica ed esecutiva |
| `report/` | Report di slice |
| `tools/` | Validazione e test |
| `examples/` | Esempi formato dati e .cml |
| `AGENTS.md` | Guida per agenti AI |
| `CONTRIBUTING.md` | Linee guida contribuzione |
| `CHANGELOG.md` | Riepilogo versioni |

## Validazione

```bash
node tools/validate-cml-normalized-curriculum.mjs
node tools/test-runtime-mappa-dati-shape.mjs
```

## Contribuzione

Vedi `CONTRIBUTING.md` e `AGENTS.md`. La cronologia delle slice è in `docs/REPO-MOVELOG.md`.

## Limitazioni note

- Le UDA sono bozze non persistite, da rigenerare quando serve
- Le UDA non sono importabili/esportabili come `.cml`
- La validazione dipartimentale rimane umana/manuale
- SchoolKB (knowledge base) non ancora integrato
- Non inserire nomi, cognomi, voti o dati sensibili di studenti
- Lo strumento non sostituisce la delibera del Collegio Docenti

## Licenza

Verificare file `LICENSE` se presente.
