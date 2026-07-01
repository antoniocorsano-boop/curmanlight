# CML-239 RUNTIME CONSOLE PRE-EXISTING ERRORS AUDIT — Report

## Branch / HEAD / Stato Git

- Branch: `main`
- HEAD: `ed8ee60a6fd511a9b0e5ef81ec3bed9e60d81335`
- Stato Git iniziale: `main...origin/main` allineati
- Stato Git finale: allineato, working tree pulito
- Conferma docs-only: sì, nessun file runtime modificato

## Errori rilevati sul deploy pubblico

1. `Uncaught SyntaxError: Unexpected identifier 'open'` — P0/P1
2. `docx.umd.min.js 404` — P1/P2
3. `favicon.ico 404` — P3

## Origine probabile

- **Errore 1**: non riproducibile localmente con Node.js; il deploy serve un HTML di taglia diversa/minore del file locale, quindi possibile versione precedente/troncata o artefatto Pages non aggiornato. Non emergono identificatori `open` non validi nel sorgente locale.
- **Errore 2**: CDN esterno non raggiungibile/non presente; riferimento marcato opzionale, ma export Word dipendente.
- **Errore 3**: asset favicon mancante alla root.

## Priorità / Impatto

| Priorità | Bloccante | Impatto | Azione proposta |
|---|---|---|---|
| P0/P1 | NO (per Home) | JavaScript — possibile interruzione init | Micro-slice diagnostica deploy + ricerca origine `open` |
| P1/P2 | Parziale | Export Word/docx | CDN replacement o rimozione riferimento |
| P3 | NO | Solo icona browser | Aggiunta favicon |

## Conferme

- Errori pre-esistenti rispetto a CML-238: sì
- Errori bloccanti per Home: no
- Errori bloccanti per Curriculum/Guida/Processo/Esportazioni/UDA smart: da verificare con deploy congruente
- Nessuna modifica a curriculum JSON, tools, `.cml`, handler, storage locale, logiche di filtro/ordinamento/generazione UDA

## Prossima slice consigliata

1. **CML-239.1** — Diagnosi deploy GitHub Pages + fix selettivo `Unexpected identifier 'open'`
2. **CML-239.2** — Fix/rimozione CDN `docx.umd.min.js` e aggiunta `favicon.ico`

## Controlli

- CML validation tool: PASS
- Runtime mappa dati shape test: PASS
- git diff --check: PASS

## Verdict

`CML_239_RUNTIME_CONSOLE_PRE_EXISTING_ERRORS_AUDIT_READY_LOCAL_NOT_PUSHED`
