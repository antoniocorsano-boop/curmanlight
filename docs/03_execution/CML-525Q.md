# CML-525Q — Pilot Findings Triage, Improvement Backlog and Decision Export

## Obiettivo

Trasformare manualmente una parte delle osservazioni anonime del test pilota in un backlog locale di miglioramento, senza classificazione automatica, punteggi o decisioni algoritmiche.

## Implementazione

- selezione esplicita delle singole evidenze da aggiungere al backlog;
- conservazione di tappa, identificativo anonimo ed estratto originale;
- titolo e descrizione modificabili;
- priorità manuale: bassa, media, alta;
- stato manuale: da valutare, in analisi, pianificato, chiuso;
- motivazione della priorità e decisione/prossimo passo;
- persistenza locale separata dagli import temporanei;
- funzionamento in memoria quando Web Storage non è disponibile;
- rimozione esplicita delle singole voci;
- export Markdown leggibile con dichiarazione di curatela umana.

## Confini

- nessuna trasformazione automatica di tutte le osservazioni in attività;
- nessuna analisi semantica o sentiment;
- nessun backend, upload, autenticazione o telemetria;
- nessun collegamento con identità personali;
- nessuna scrittura sul curricolo canonico.

## Verifica

```bash
cd curman-react
npm run test:cml525q
npm run build
```

Il gate copre creazione, modifica, persistenza locale, rimozione ed export del backlog.
