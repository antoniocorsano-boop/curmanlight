# CurManLight — Curricolo Verticale I.C. Calvario-Covotta

**Versione pubblica:** https://antoniocorsano-boop.github.io/curmanlight/

CurManLight è una PWA statica per consultare, revisionare ed esportare materiali collegati al curricolo verticale d'istituto. È pensata per docenti, dipartimenti e referenti scolastici che devono lavorare su proposte curricolari mantenendo tracciabilità, semplicità operativa e validazione umana.

Funziona interamente nel browser: nessun dato viene inviato a server, nessun account è richiesto.

## Principi

- **Locale e privato:** tutto resta sul dispositivo. Nessun backend, nessun OAuth, nessun salvataggio su server.
- **Zero dipendenze runtime:** HTML/CSS/JavaScript vanilla. Nessun framework, nessun package manager, nessuna build.
- **Validazione umana richiesta:** lo strumento organizza la consultazione e il confronto, ma non approva automaticamente modifiche curricolari.
- **Repository leggibile da persone e IA:** regole, esempi, schemi e documentazione sono separati per ridurre ambiguità.

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
2. Scegli un'area dalla barra in alto: **Curriculum** per il documento istituzionale, **Competenze e progettazione** per evidenze e UDA.
3. Usa la **Home** per orientarti e seguire il percorso in 5 minuti.

## Repository map

| Percorso | Funzione |
|---|---|
| `index.html` | Entrypoint e runtime principale dell'app |
| `manifest.json` | Configurazione PWA |
| `service-worker.js` | Supporto PWA/cache |
| `assets/` | Risorse statiche |
| `content/curriculum/` | Dati curricolari normalizzati reali |
| `docs/` | Documentazione tecnica, operativa e di governance |
| `docs/index.md` | Indice documentale del repository |
| `docs/03_execution/` | Documenti di esecuzione delle slice |
| `report/` | Report, audit e verifiche |
| `examples/` | Esempi fittizi di pacchetti e dati |
| `schemas/` | Schemi JSON prudenziali |
| `tools/` | Script di validazione e test |
| `AGENTS.md` | Regole operative per agenti IA |
| `CONTRIBUTING.md` | Regole per contribuire |
| `CHANGELOG.md` | Sintesi leggibile delle modifiche |

## Lettura consigliata

- Per una visione generale: `docs/index.md`
- Per agenti IA e manutentori automatici: `AGENTS.md`
- Per i contratti dati: `docs/data-contracts.md`
- Per esempi fittizi: `examples/`
- Per schemi JSON: `schemas/`

## Limitazioni note

- Le UDA sono bozze non persistite, da rigenerare quando serve.
- Le UDA non sono importabili/esportabili come `.cml`.
- La validazione dipartimentale rimane umana/manuale.
- SchoolKB (knowledge base) non ancora integrato.
- Non inserire nomi, cognomi, voti o dati sensibili di studenti.
- Lo strumento non sostituisce la delibera del Collegio Docenti.

## Sviluppo

Validazione:

```bash
node tools/validate-cml-normalized-curriculum.mjs
node tools/test-runtime-mappa-dati-shape.mjs
```

Controlli minimi prima di una modifica:

```bash
git status --short
git diff --name-only
git diff --check
```
