# CML-UX-NON-TECHNICAL-MICROCOPY-RUNTIME-REMEDIATION-PLAN

## Obiettivo
Definire un piano docs-only per la futura remediation runtime del microcopy CurManLight, riducendo il linguaggio tecnico in superficie e mantenendo invariata la logica applicativa.

## Contesto
- CurManLight e usato da docenti, dipartimenti e referente curricolo.
- La UI ordinaria deve usare linguaggio scolastico, operativo e non specialistico.
- Il lessico tecnico resta in report interni e documentazione di sviluppo.
- Questa slice non modifica runtime.

## Dipendenza dall'audit precedente
Dipende da:
- `CML_UX_NON_TECHNICAL_USER_EXPERIENCE_AUDIT_READY_LOCAL_NOT_PUSHED`
- commit locale `ca1390c` (`docs: audit non technical CML user experience`), verificato come locale (`origin/main` ancora su `83084c4`).

## Principi UX per la futura runtime remediation
1. Parlare per compiti scolastici, non per tecnologia.
2. Esporre azioni chiare (carica, scarica, confronta, approva) e non formati/implementazione.
3. Ridurre il carico cognitivo nei passaggi dipartimento/referente.
4. Mantenere coerenza terminologica tra Home, Processo, Esportazioni e Guida.
5. Separare UI ordinaria da lessico tecnico interno.

## Priorita P0/P1/P2 per futuri interventi runtime
### P0 (eliminare o nascondere)
- chiavi interne `cml_*_v1` nella UI.
- riferimenti a `schema`, `storage`, `json`, `runtime` e affini in superficie utente.
- frasi che espongono dettagli implementativi invece di indicazioni operative.

### P1 (rinominare)
- `Importa`/`Import` quando usato come azione primaria.
- `Esporta`/`Export` quando la UI richiede linguaggio per obiettivo utente.
- `File .cml`, `Markdown`, footer tecnici e messaggi ad alta densita tecnica.

### P2 (migliorare)
- `read-only`, `prototipo`, formule tecniche residuali ma comprensibili.
- microcopy di stato vuoto e helper testuali non orientati al compito.

## Mappa operativa di remediation (futura runtime)
| Area UI | Testo attuale | Problema | Severita | Destinatario corretto | Azione runtime futura | Nuovo testo proposto | Criterio di accettazione | Rischio da controllare nello smoke test |
|---|---|---|---|---|---|---|---|---|
| Home micro-guida | Esporta il file .cml per il passaggio successivo | estensione tecnica in primo piano | P1 | docente | rinominare CTA | Scarica il file di lavoro CurManLight per il referente | nessun riferimento estensione tecnica in micro-guida | link/tab destinazione invariati |
| Home footer | codice operativo | lessico interno non didattico | P1 | docente | semplificare testo | Alcune azioni sono riservate ai ruoli autorizzati | rimosso linguaggio tecnico nel footer | nessuna regressione visiva footer |
| Programmazione annuale | Vista iniziale read-only | termine da sviluppo | P2 | docente | rinominare label descrittiva | Vista di sola consultazione | assenza termine read-only in area | nessun cambio stato blocco editing |
| Programmazione privacy box | chiave cml_annual_planning_draft_v1 | esposizione storage interno | P0 | docente | nascondere dettaglio tecnico | La bozza e salvata solo su questo dispositivo | nessuna chiave tecnica visibile | persistenza bozza invariata |
| Programmazione privacy box | non modifica export/import ne schema .cml | frase implementativa complessa | P0 | docente | sostituire frase | Non cambia il documento ufficiale di istituto | testo orientato al risultato | export/import tecnici invariati |
| Libreria UDA intro | Generatore controllato... schema .cml | linguaggio da sistema | P1 | docente | riscrivere intro | Strumento guidato per preparare bozze UDA da rivedere in dipartimento | intro comprensibile senza lessico tecnico | filtro/generazione invariati |
| Libreria UDA azioni | Anteprima/Copia/Scarica Markdown | termine tecnico non autoesplicativo | P1 | docente/referente | rinominare pulsanti e label | Anteprima testo / Copia testo / Scarica testo modificabile | assenza parola Markdown in UI ordinaria | funzioni copia/scarica invarianti |
| Libreria UDA privacy box | chiave cml_uda_smart_library_v1 | esposizione infrastruttura interna | P0 | docente | nascondere dettaglio tecnico | Le bozze restano solo su questo dispositivo | nessuna chiave interna visibile | libreria locale invariata |
| Footer Programmazione | Vista read-only ... export/import schema .cml | riga tecnica ad alta densita | P1 | docente | riscrivere completo | Vista di supporto alla progettazione. Nessun dato studente. Documento da validare prima dell'uso istituzionale | footer leggibile e non tecnico | nessuna regressione layout/footer |
| UDA modello | anteprima Markdown | termine tecnico ricorrente | P2 | docente | sostituire microcopy | anteprima del testo | nessuna parola Markdown nel flusso base | area preview invariata |
| Revisione disciplina | export produce bozza Markdown | doppia tecnicita | P1 | docente | rinominare pannello testo | Crea un testo di lavoro della disciplina da condividere | testo orientato a task didattico | azioni download/copy invarianti |
| Validazione dipartimentale | Importa proposte docenti / file .cml | azione tecnica e formato esplicito | P1 | dipartimento | rinominare azione + helper | Carica proposte ricevute dai docenti (file di lavoro CurManLight) | azione primaria comprensibile a primo uso | caricamento multiplo invariato |
| Validazione referente | Importa esiti dipartimentali | verbo tecnico non contestualizzato | P2 | referente | rinominare azione | Carica esiti del dipartimento per controllo finale | etichetta orientata al processo | flusso referente invariato |
| Esportazioni | Word, Markdown, PDF, .cml, copia di sicurezza | tassonomia orientata formato tecnico | P1 | docente/referente | riordinare per obiettivo | Scarica documento per stampa / Scarica testo modificabile / Salva file per il referente | ordine azioni centrato sul compito | nessuna regressione ai download |
| Guida badge | Prototipo / Read-only | lessico da rilascio software | P2 | docente | rinominare badge | Versione di prova / Sola consultazione | badge leggibili per utenza scolastica | badge style/accessibilita invariati |
| Quick action backup | Importa (backup json) | json esplicito in UI base | P1 | referente/docente avanzato | spostare/semplificare | Ripristina da copia di sicurezza | nessun riferimento json in UI base | import backup invariato |
| Messaggi di stato vuoto | Nessuna bozza selezionata. Usa anteprima Markdown | richiamo termine tecnico | P2 | docente | sostituire testo vuoto | Nessuna bozza selezionata. Apri l'anteprima del testo da una bozza in libreria | stato vuoto comprensibile | selezione bozza invariata |

## Regole linguistiche di sostituzione (future runtime)
- `Import` / `Importa` -> `Carica file ricevuto` (o `Carica proposte/esiti ricevuti` in base al contesto)
- `Export` / `Esporta` -> `Scarica documento` oppure `Salva file per il referente`
- `File .cml` -> `File di lavoro CurManLight`
- `Markdown` -> `Testo modificabile` oppure `Anteprima del testo`
- `Bozza locale` -> `Bozza salvata su questo dispositivo`
- `Validazione` -> `Controllo didattico` / `Confronto di dipartimento` / `Approvazione del referente`
- `Read-only` -> `Sola consultazione`

### Termini da non mostrare nella UI ordinaria
`JSON`, `schema`, `runtime`, `hash`, `storage`, `localStorage`, `endpoint`, `payload`, `adapter`, `fallback`, `validator`, `shape test`, `commit`, `branch`, `deploy`, `smoke test`.

Se indispensabili, vanno relegati a report tecnici o documentazione interna.

## Aree runtime candidate e strategia di intervento
| Area | Interventi sicuri | Interventi da fare con cautela | Elementi da non toccare | Controlli di regressione necessari |
|---|---|---|---|---|
| Home | rinomina micro-guida e footer | riordino frasi con icone/line-break | logica navigazione tab | apertura Home e link rapidi |
| Curriculum | microcopy descrittivo non tecnico | titoli storici normativi | contenuti normativi e fonti | rendering pannelli e anchor |
| Programmazione annuale | box privacy e label sola consultazione | testo con vincoli istituzionali | logica bozza e persistenza | salva/cancella bozza invariati |
| Libreria UDA smart | etichette preview/copia/scarica | testi che spiegano limiti d'uso | filtri, sort, struttura card | filtri UDA invariati e conteggi |
| Validazione dipartimentale | rinomina pulsanti upload | helper su file multipli | parser file e merge logico | caricamento singolo/multiplo |
| Validazione referente | rinomina CTA e helper | messaggi conflitti/esiti | logica controllo finale | workflow referente end-to-end |
| Esportazione | etichette orientate al compito | ordine dei blocchi export | funzioni download/generazione | tutti download disponibili |
| Guida | badge e glossario utente | paragrafi di compliance | contenuti policy obbligatori | guida completa e leggibile |
| Messaggi di sistema | stati vuoti e avvisi umani | messaggi errore diagnostici | codici errore interni eventuali | nessun errore bloccante nascosto |
| Pulsanti | verbi coerenti (carica/scarica) | spazio disponibile su mobile | handler onclick esistenti | click action invariata |
| Stati vuoti | copy orientato all'azione | copy troppo lungo su mobile | condizioni di visualizzazione | layout responsive invariato |
| Errori e avvisi | tono non tecnico | mantenere precisione minima | controllo eccezioni JS | assenza errori console |
| Anteprime testuali | rinominare markdown->testo | descrizioni lunghe | pipeline generazione testo | preview/copy/download ok |
| Pannelli caricamento | sostituire import linguaggio | eventuale nota estensione file | logica validazione file | upload validi/non validi |
| Pannelli scaricamento | sostituire export linguaggio | naming file mostrato all'utente | naming tecnico interno file | download file corretti |

## Esclusioni esplicite per la futura slice runtime
- nessuna modifica logica dati;
- nessuna modifica schema file;
- nessuna modifica storage;
- nessuna modifica import/export tecnico interno;
- nessuna modifica validatori;
- nessuna modifica struttura curriculum;
- nessuna nuova funzione.

## Scope raccomandato della futura slice runtime
- Solo microcopy e helper testuali.
- Eventuale riordino etichette a parita di handler esistenti.
- Correzione puntuale dei soli testi mappati in questo piano.

## Smoke test minimo consigliato (futura runtime slice)
1. Apertura Home.
2. Navigazione sezioni principali.
3. Programmazione annuale.
4. Libreria UDA smart.
5. Caricamento file di lavoro.
6. Scaricamento documento/file.
7. Anteprima testo modificabile.
8. Confronto dipartimentale.
9. Approvazione referente.
10. Verifica assenza termini tecnici visibili.
11. Verifica assenza errori console.
12. Verifica hash/nav invariati.
13. Verifica filtri UDA invariati.

## Piano operativo della futura runtime slice
1. Sostituzione microcopy P0 e P1 in Home/Programmazione/Libreria.
2. Sostituzione microcopy Processo ed Esportazioni.
3. Allineamento Guida, stati vuoti, avvisi e pulsanti.
4. Smoke test completo senza variazioni funzionali.
5. Report finale con diff semantico delle stringhe aggiornate.

## Verdict
CML_UX_NON_TECHNICAL_MICROCOPY_RUNTIME_REMEDIATION_PLAN_READY_LOCAL_NOT_PUSHED
