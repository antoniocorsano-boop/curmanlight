# CML-445 — User Behavior, Capability and Closure Map

> Data: 2026-07-10  
> Base: CML-443 parity plan + CML-444 behavior-driven migration model  
> Tipo: docs-only  
> Obiettivo: trasformare la migrazione in cicli chiudibili per comportamento utente

## 1. Regola operativa

Ogni ciclo di migrazione parte da un comportamento osservabile dell’utente, include tutte le capacità necessarie e termina solo quando l’esito è comprensibile, stabile e verificabile.

La matrice CML-443 resta il controllo di completezza. Questa mappa stabilisce l’ordine del lavoro e le condizioni di chiusura.

## 2. Ordine dei cicli

| Ciclo | Percorso | Dipende da | Priorità |
|---|---|---|---|
| B01 | Entrare e orientarsi | — | 1 |
| B02 | Consultare e comprendere | B01 | 2 |
| B03 | Confrontare e decidere | B01, B02 | 3 |
| B04 | Conservare e riprendere | B01, B03 | 4 |
| B05 | Esportare e trasferire | B03, B04 | 5 |
| B06 | Lavorare secondo il ruolo | B03, B04, B05 | 6 |
| B07 | Progettare dal curricolo | B02, B04 | 7 |
| B08 | Verificare e correggere | B03, B07 | 8 |
| B09 | Usare su dispositivi e in condizioni diverse | trasversale | continuo |
| B10 | Concludere il percorso istituzionale | B05, B06, B08 | finale |

## 3. Mappa dei comportamenti

### B01 — Entrare e orientarsi

#### BEH-ORI-01 — Comprendere da dove iniziare

- **Utente:** docente non tecnico.
- **Bisogno:** capire immediatamente la finalità dell’ambiente e scegliere l’attività pertinente.
- **Punto di ingresso:** apertura dell’applicazione.
- **Azione principale:** scegliere tra consultare il curricolo, rivedere proposte o progettare.
- **Risposta visibile:** apertura dell’area scelta con titolo, contesto e azione successiva riconoscibili.
- **Errori recuperabili:** etichette ambigue, azioni duplicate, destinazione incompleta.
- **Capacità CML-443:** NAV-01, NAV-02, NAV-03, NAV-13, MSG-01.
- **Evidenza utente:** il docente sceglie correttamente senza istruzioni esterne.
- **Verifica interna:** tutte le destinazioni sono raggiungibili; nessuna azione porta a una vista vuota o incompleta.
- **Chiusura:** compito di ingresso completato su desktop e mobile senza ambiguità bloccanti.

#### BEH-ORI-02 — Sapere sempre dove ci si trova

- **Utente:** tutti i profili.
- **Bisogno:** conservare orientamento durante la navigazione.
- **Azione principale:** muoversi tra aree e tornare al livello precedente.
- **Risposta visibile:** titolo, percorso, sezione attiva e azione successiva coerenti.
- **Errori recuperabili:** perdita della disciplina selezionata, ritorno involontario alla Home, menu incoerente.
- **Capacità CML-443:** NAV-02, NAV-03, NAV-13, PER-03.
- **Evidenza utente:** l’utente sa indicare area, disciplina e attività corrente.
- **Verifica interna:** navigazione avanti/indietro senza azzerare stato o selezioni.
- **Chiusura:** nessuna transizione principale produce perdita di orientamento.

### B02 — Consultare e comprendere

#### BEH-CON-01 — Scegliere una disciplina senza selezioni implicite

- **Utente:** docente, dipartimento, referente.
- **Bisogno:** accedere alla disciplina pertinente senza privilegiamenti.
- **Azione principale:** selezionare disciplina e ordine di scuola.
- **Risposta visibile:** contenuti coerenti con la scelta e selezione chiaramente indicata.
- **Errori recuperabili:** disciplina preimpostata, contenuti non corrispondenti, selezione persa.
- **Capacità CML-443:** FUN-01, FUN-02, DAT-01, DAT-03, PER-03.
- **Evidenza utente:** un docente di disciplina diversa da Tecnologia raggiunge i propri contenuti al primo tentativo.
- **Verifica interna:** tutte le discipline canoniche sono caricabili e filtrabili.
- **Chiusura:** nessuna disciplina appare favorita o incompleta per impostazione iniziale.

#### BEH-CON-02 — Comprendere stato e riferimento del curricolo

- **Utente:** tutti i profili scolastici.
- **Bisogno:** distinguere contenuti vigenti, in revisione e futuri.
- **Risposta visibile:** stato curricolare, fonte e versione riconoscibili senza terminologia tecnica.
- **Errori recuperabili:** confusione tra vigente e bozza; indicatori statici o non sincronizzati.
- **Capacità CML-443:** NAV-04, DAT-03, DAT-04, DAT-05, MSG-05.
- **Evidenza utente:** l’utente identifica correttamente quale contenuto è utilizzabile oggi.
- **Verifica interna:** stato mostrato coerente con i dati caricati.
- **Chiusura:** nessuna interpretazione errata del valore istituzionale del contenuto.

#### BEH-CON-03 — Trovare rapidamente il contenuto pertinente

- **Utente:** docente.
- **Bisogno:** ridurre scorrimento e sovraccarico.
- **Azione principale:** filtrare per ordine e nucleo, espandere il dettaglio necessario.
- **Risposta visibile:** elenco ridotto e coerente con i filtri attivi.
- **Errori recuperabili:** nessun risultato, filtro non evidente, dettaglio troppo denso.
- **Capacità CML-443:** FUN-02, FUN-03, FUN-10, MSG-01.
- **Evidenza utente:** il docente trova un obiettivo o un’unità senza esplorare tutta la pagina.
- **Verifica interna:** filtri combinabili e reversibili.
- **Chiusura:** percorso breve e stato dei filtri sempre visibile.

### B03 — Confrontare e decidere

#### BEH-DEC-01 — Comprendere che cosa cambia

- **Utente:** docente e dipartimento.
- **Bisogno:** confrontare vigente e proposta senza ricostruire manualmente le differenze.
- **Azione principale:** aprire una proposta e leggere differenze e parti invarianti.
- **Risposta visibile:** confronto leggibile, motivazione e stato della proposta.
- **Errori recuperabili:** confronto assente o incompleto, etichette ambigue.
- **Capacità CML-443:** NAV-05, DAT-02, MSG-02, MSG-03, DOC-05.
- **Evidenza utente:** l’utente spiega con parole proprie che cosa cambia.
- **Verifica interna:** ogni proposta deriva dal gap corretto.
- **Chiusura:** nessuna decisione possibile senza informazioni minime complete.

#### BEH-DEC-02 — Assumere e correggere una decisione

- **Utente:** docente o componente autorizzato.
- **Bisogno:** approvare, rifiutare o annullare una scelta vedendone l’effetto.
- **Risposta visibile:** stato aggiornato, contatori coerenti e prossima azione riconoscibile.
- **Errori recuperabili:** doppia attivazione, stato non salvato, annullamento non chiaro.
- **Capacità CML-443:** FUN-04–09, MSG-04, PER-01, FUN-15.
- **Evidenza utente:** l’utente modifica una decisione e riconosce il nuovo stato.
- **Verifica interna:** stato persistito e contatori sincronizzati dopo ogni operazione.
- **Chiusura:** nessuna decisione appare confermata se non è stata realmente conservata.

### B04 — Conservare e riprendere

#### BEH-SAV-01 — Interrompere e riprendere senza perdita

- **Utente:** tutti i profili operativi.
- **Bisogno:** riprendere il lavoro nel punto corretto.
- **Azione principale:** chiudere e riaprire l’applicazione.
- **Risposta visibile:** ripristino di decisioni, profilo, preferenze e contesto.
- **Errori recuperabili:** dati solo in memoria, chiusura accidentale, stato parziale.
- **Capacità CML-443:** FUN-15, PER-01–05, MSG-07.
- **Evidenza utente:** l’utente ritrova il lavoro senza reimpostare il percorso.
- **Verifica interna:** test chiusura/riapertura con confronto dello stato.
- **Chiusura:** zero perdita di dati essenziali nei casi previsti.

#### BEH-SAV-02 — Creare e ripristinare una copia di sicurezza

- **Utente:** docente o referente.
- **Bisogno:** proteggere e trasferire lo stato completo.
- **Azione principale:** creare una copia e ripristinarla.
- **Risposta visibile:** contenuto, data e risultato dell’operazione chiaramente descritti.
- **Errori recuperabili:** file non valido, versione incompatibile, sovrascrittura involontaria.
- **Capacità CML-443:** FUN-13, FUN-14, CML-05, CML-06, DOC-03, PER-04.
- **Evidenza utente:** l’utente distingue copia di sicurezza e documento finale.
- **Verifica interna:** round-trip completo senza perdita.
- **Chiusura:** stato ripristinato equivalente allo stato esportato.

### B05 — Esportare e trasferire

#### BEH-EXP-01 — Distinguere documento, file di lavoro e copia di sicurezza

- **Utente:** tutti i profili.
- **Bisogno:** scegliere l’esito corretto senza conoscere estensioni tecniche.
- **Azione principale:** selezionare che cosa produrre e per quale destinatario.
- **Risposta visibile:** nome comprensibile, finalità, destinatario e contenuto previsto.
- **Errori recuperabili:** esportazioni duplicate o etichette basate sul formato.
- **Capacità CML-443:** FUN-11–14, CML-01–06, DOC-01–05.
- **Evidenza utente:** l’utente sceglie correttamente tra documento e file per continuare il lavoro.
- **Verifica interna:** ogni azione produce il contenuto dichiarato.
- **Chiusura:** nessuna esportazione essenziale è duplicata o fuori contesto.

#### BEH-EXP-02 — Trasferire una proposta senza alterarla

- **Utente:** docente verso dipartimento.
- **Bisogno:** consegnare il lavoro affinché possa essere proseguito.
- **Azione principale:** esportare e importare il file di lavoro.
- **Risposta visibile:** conferma di completezza e identità della proposta.
- **Errori recuperabili:** file corrotto, ruolo errato, contenuti mancanti.
- **Capacità CML-443:** FUN-11, FUN-12, CML-01, CML-02, CML-07, CML-08.
- **Evidenza utente:** il dipartimento riconosce autore, disciplina e contenuto della proposta.
- **Verifica interna:** round-trip legacy/React e React/legacy.
- **Chiusura:** nessuna perdita o trasformazione semantica nel trasferimento.

### B06 — Lavorare secondo il ruolo

#### BEH-ROL-01 — Operare come docente

- **Bisogno:** consultare, formulare e consegnare una proposta.
- **Percorso:** consultazione → decisione → conservazione → esportazione.
- **Capacità CML-443:** ROL-01, ROL-02, CML-01, DOC-01, NAV-08.
- **Evidenza utente:** il docente completa il percorso senza entrare in funzioni di altri ruoli.
- **Verifica interna:** controllo delle azioni disponibili per ruolo.
- **Chiusura:** percorso docente completo e autonomo.

#### BEH-ROL-02 — Operare come dipartimento

- **Bisogno:** raccogliere proposte, confrontarle e produrre un esito condiviso.
- **Errori recuperabili:** import duplicato, proposta incompatibile, confusione tra raccolta e validazione.
- **Capacità CML-443:** CML-02, CML-03, ROL-01–05, DOC-02.
- **Evidenza utente:** il gruppo distingue raccolta delle proposte e decisione dipartimentale.
- **Verifica interna:** import multiplo, deduplicazione e generazione esito.
- **Chiusura:** esito dipartimentale completo e trasferibile.

#### BEH-ROL-03 — Operare come referente

- **Bisogno:** raccogliere esiti e verificarne completezza e coerenza.
- **Risposta visibile:** stato per disciplina, elementi mancanti e quadro complessivo.
- **Capacità CML-443:** CML-04, ROL-03–05, DOC-04.
- **Evidenza utente:** il referente identifica ciò che impedisce la chiusura.
- **Verifica interna:** coerenza tra esiti importati e riepilogo.
- **Chiusura:** quadro completo pronto per la fase istituzionale successiva.

### B07 — Progettare dal curricolo

#### BEH-DID-01 — Avviare una progettazione dal curricolo

- **Utente:** docente.
- **Bisogno:** passare dal contenuto curricolare a un’attività progettuale coerente.
- **Azione principale:** avviare programmazione annuale, UDA o evidenza.
- **Risposta visibile:** nuovo lavoro con riferimento curricolare esplicito.
- **Errori recuperabili:** progettazione scollegata dalla versione o disciplina.
- **Capacità CML-443:** NAV-09–11, DAT-08–10, DID-01–03.
- **Evidenza utente:** il docente riconosce da quale contenuto è partita la progettazione.
- **Verifica interna:** collegamento persistente tra progetto e riferimento curricolare.
- **Chiusura:** nessuna progettazione essenziale nasce senza riferimento identificabile.

#### BEH-DID-02 — Salvare e riprendere una progettazione

- **Bisogno:** lavorare in più sessioni.
- **Risposta visibile:** stato bozza, data e completezza.
- **Capacità CML-443:** DID-04, PER-05, FUN-15.
- **Evidenza utente:** il docente ritrova e continua la bozza corretta.
- **Verifica interna:** persistenza completa dei campi strutturati.
- **Chiusura:** nessuna perdita tra salvataggio e riapertura.

#### BEH-DID-03 — Concludere ed esportare una progettazione

- **Bisogno:** ottenere un documento utilizzabile nel lavoro scolastico.
- **Risposta visibile:** anteprima, completezza e conferma dell’esito.
- **Errori recuperabili:** campi obbligatori mancanti, documento incompleto.
- **Capacità CML-443:** DID-05, DOC-04, MSG-06.
- **Evidenza utente:** il docente riconosce il documento come coerente con quanto compilato.
- **Verifica interna:** confronto dati inseriti/documento prodotto.
- **Chiusura:** documento completo e senza omissioni silenziose.

### B08 — Verificare e correggere

#### BEH-VER-01 — Comprendere perché un’attività non è pronta

- **Utente:** tutti i profili operativi.
- **Bisogno:** individuare ciò che manca e correggerlo.
- **Risposta visibile:** motivo, gravità e azione correttiva.
- **Errori recuperabili:** messaggio generico, errore senza percorso di ritorno.
- **Capacità CML-443:** MSG-05–07, ROL-04, DOC-04.
- **Evidenza utente:** l’utente corregge senza assistenza esterna.
- **Verifica interna:** ogni blocco noto ha messaggio e recupero testabili.
- **Chiusura:** nessun errore essenziale lascia l’utente senza azione possibile.

### B09 — Usare in condizioni diverse

#### BEH-ENV-01 — Usare il prodotto su schermi diversi

- **Capacità CML-443:** NAV-13, RSP-01–04, A11-06.
- **Evidenza utente:** il compito essenziale è completato anche su schermo piccolo.
- **Verifica interna:** test viewport e interazione tattile.
- **Chiusura:** nessun percorso P0 dipende esclusivamente dal desktop.

#### BEH-ENV-02 — Usare il prodotto con accessibilità di base

- **Capacità CML-443:** A11-01–07.
- **Evidenza utente:** compito principale eseguibile da tastiera e comprensibile con lettore di schermo.
- **Verifica interna:** audit WCAG AA e test automatici/manuali.
- **Chiusura:** nessuna barriera critica nelle viste P0.

#### BEH-ENV-03 — Continuare a lavorare senza connessione stabile

- **Bisogno:** consultare e proseguire attività già disponibili.
- **Risposta visibile:** stato offline comprensibile e indicazione delle limitazioni.
- **Capacità CML-443:** PWA-01–06, PER-06, MSG-08.
- **Evidenza utente:** l’utente comprende cosa può fare senza connessione.
- **Verifica interna:** prova offline, aggiornamento e invalidazione cache.
- **Chiusura:** funzioni dichiarate offline realmente disponibili e dati protetti.

### B10 — Concludere il percorso istituzionale

#### BEH-END-01 — Portare gli esiti fino alla validazione umana

- **Utente:** docente, dipartimento, referente.
- **Bisogno:** completare la catena senza attribuire allo strumento decisioni istituzionali.
- **Percorso:** proposta docente → esito dipartimentale → verifica referente → validazione esterna.
- **Risposta visibile:** fase corrente, responsabilità umana e passaggio successivo.
- **Errori recuperabili:** confusione tra verifica, approvazione e adozione.
- **Capacità CML-443:** ROL-03–05, CML-01–04, DOC-01–04.
- **Evidenza utente:** ogni profilo sa chi deve compiere la decisione successiva.
- **Verifica interna:** transizioni ammesse e blocco di quelle incoerenti.
- **Chiusura:** il sistema accompagna l’intero percorso senza dichiarare autonomamente un’approvazione istituzionale.

## 4. Regole del ciclo

Ogni ciclo applica la sequenza:

1. **Scoprire:** leggere comportamento, audit, dati e implementazione corrente.
2. **Pianificare:** definire scarto tra attuale, candidato React e comportamento atteso.
3. **Realizzare:** completare ingresso, azione, feedback, errore, recupero e uscita.
4. **Verificare:** usare controlli oggettivi e compiti osservabili.
5. **Iterare:** correggere nello stesso ciclo finché la condizione di chiusura non è soddisfatta.

## 5. Condizioni generali di arresto

Un ciclo si arresta con successo quando:

- il comportamento è completabile dall’inizio alla fine;
- tutte le capacità P0 collegate sono presenti;
- stato, dati e contesto sono conservati;
- errori e stati vuoti sono recuperabili;
- il comportamento è verificato su desktop e, quando pertinente, mobile;
- non sono state trasferite ridondanze note del prodotto precedente;
- le esclusioni residue sono esplicite e non bloccanti.

Il ciclo si arresta per escalation quando:

- manca una decisione di prodotto;
- il comportamento richiede approvazione istituzionale o modifica del perimetro;
- esiste un conflitto tra dati canonici e comportamento atteso;
- il controllo oggettivo non può essere definito;
- la correzione comporta perdita o incompatibilità dei dati esistenti.

## 6. Primo ciclo esecutivo

Il primo ciclo realizzativo è **B01 — Entrare e orientarsi**.

Prima della modifica del candidato React deve essere prodotto un confronto verificabile tra:

- comportamento atteso;
- applicazione pubblicata;
- mock Home approvato;
- candidato React;
- capacità CML-443 coinvolte;
- scarti bloccanti e non bloccanti.

Output previsto: **CML-446 — Entry and Orientation Behavior Gap Audit**.

## 7. Verdetto

```text
CML_445_USER_BEHAVIOR_CAPABILITY_CLOSURE_MAP_READY_REMOTE_BRANCH
```
