# CML-525O — Pilot Evaluation Entry Point, Guided Feedback Capture and Local Export

## Obiettivo

Consolidare il percorso di valutazione già presente nella Home come funzione pilota locale, anonima e verificabile, senza introdurre questionari rigidi, backend, telemetria o invio automatico.

## Implementazione

- riuso dell’ingresso esistente nella Home, senza creare percorsi duplicati;
- modello dati versionato `cml-pilot-evaluation-v2`;
- migrazione trasparente dal precedente salvataggio locale v1;
- cinque tappe di riflessione su orientamento, consultazione, attività, supporto e giudizio complessivo;
- annotazioni sempre facoltative;
- contesto anonimo facoltativo: ruolo, ordine di scuola e familiarità d’uso;
- avviso esplicito contro l’inserimento di dati personali;
- persistenza esclusivamente in `localStorage`;
- export Markdown leggibile;
- export JSON strutturato;
- possibilità di esportare anche un percorso non ancora completato;
- cancellazione esplicita di tutte le osservazioni locali.

## Privacy e confini

- nessun nome o indirizzo email richiesto;
- nessun invio di dati;
- nessun backend, autenticazione o telemetria;
- nessun collegamento con dati curricolari canonici;
- nessun giudizio automatico sull’utente o sul prodotto.

## Verifica

```bash
cd curman-react
npm run test:cml525o
npm run lint
npm run build
```

Il gate CML-525O verifica:

- creazione del record v2;
- normalizzazione e migrazione v1;
- persistenza e lettura locale;
- completezza delle cinque tappe;
- export Markdown leggibile;
- export JSON strutturato;
- dichiarazione privacy nel file esportato.

## Verdetto atteso

`CML_525O_PILOT_EVALUATION_GUIDED_FEEDBACK_AND_LOCAL_EXPORT_READY`
