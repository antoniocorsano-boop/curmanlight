# CurManLight — Curricolo Verticale I.C. Calvario-Covotta

**Versione pubblica:** https://antoniocorsano-boop.github.io/curmanlight/

CurManLight è uno strumento web per la consultazione e revisione del curricolo verticale d'istituto della scuola dell'infanzia e del primo ciclo. Funziona interamente nel browser: nessun dato viene inviato a server, nessun account richiesto.

## Principi

- **Locale e privato:** tutto resta sul dispositivo. Nessun backend, nessun OAuth, nessun salvataggio su server.
- **Zero dipendenze runtime:** HTML/CSS/JavaScript vanilla. Nessun framework, nessun package manager, nessuna build.
- **Validazione umana richiesta:** lo strumento organizza la consultazione e il confronto, ma non approva automaticamente modifiche curricolari.

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

## Limitazioni note

- Le UDA sono bozze non persistite, da rigenerare quando serve
- Le UDA non sono importabili/esportabili come `.cml`
- La validazione dipartimentale rimane umana/manuale
- SchoolKB (knowledge base) non ancora integrato
- Non inserire nomi, cognomi, voti o dati sensibili di studenti
- Lo strumento non sostituisce la delibera del Collegio Docenti

## Sviluppo

Validazione:
```bash
node tools/validate-cml-normalized-curriculum.mjs
node tools/test-runtime-mappa-dati-shape.mjs
```
