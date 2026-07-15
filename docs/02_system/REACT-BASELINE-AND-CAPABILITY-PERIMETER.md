# React Baseline and Capability Perimeter

## Decisione

La directory `curman-react/` è la baseline evolutiva principale di CurManLight.

Il runtime storico composto da `index.html` e `_published_snapshot/netlify-current/index.html` resta disponibile come riferimento stabile e fallback, ma non deve ricevere nuove capacità strutturali salvo correzioni motivate, sincronizzate e approvate esplicitamente.

Questa decisione non equivale ancora alla dismissione del runtime storico. Il passaggio definitivo richiede pilot umano, chiusura dei gap bloccanti e release candidate.

## Baseline

- `main`: `80f3633cb44d0a6e92d82f9d5d6cb7cc3483be36`;
- ultimo milestone integrato: CML-517E — Regression Swarm;
- applicazione evolutiva: `curman-react/`;
- runtime storico: stabile, mantenuto ma non esteso per default;
- dati curricolari canonici: invariati;
- persistenza: locale nel browser;
- servizi remoti applicativi: assenti;
- validazione umana: obbligatoria.

## Criteri di classificazione

Ogni capacità è classificata come:

- **completa**: implementata, persistente dove necessario, esportabile o trasferibile e coperta da verifiche coerenti;
- **parziale**: superficie presente ma con lacune di chiarezza, robustezza, copertura o validazione umana;
- **mancante**: non disponibile in modo utilizzabile;
- **fuori 1.0**: esclusa intenzionalmente dalla prima release.

## Matrice delle capacità

### Trasversali

| Capacità | Stato | Evidenza | Gap residuo |
|---|---|---|---|
| Impostazione del contesto di lavoro | Parziale | Home e contesto CML-488→490 | verificare comprensione con docenti reali; consolidare modalità d'uso |
| Consultazione del curricolo | Completa tecnica | CML-491→493, dati canonici disponibili | pilot umano su fonti, stato e orientamento |
| Navigazione per ruoli | Parziale | CML-507 | ruolo visibile, ma la comprensione del passaggio resta da validare |
| Archivio locale unificato | Completa tecnica | CML-513 | usabilità e recupero da casi reali da validare |
| Backup e ripristino | Completa tecnica | CML-514 | test umano della comprensione e casi avversariali |
| Contratti `.cml` e round-trip | Completa tecnica | CML-505, CML-506, CML-516 | ampliare regressioni e file malformati |
| Regressione browser sintetica | Completa tecnica | CML-517A→E | non sostituisce il pilot umano |
| Accessibilità | Parziale | audit e controlli esistenti | audit completo con tastiera, focus, screen reader e contrasto |
| Mobile | Parziale | viewport e audit automatici | compiti reali su dispositivo mobile |
| Modalità pubblica/personale/istituto | Mancante per 1.0 | direzione definita | nessuna integrazione Drive/Workspace completa |

### Docente

| Capacità | Stato | Evidenza | Gap residuo |
|---|---|---|---|
| Consultare disciplina e unità | Completa tecnica | CML-491→493 | comprensione reale da pilotare |
| Creare proposta docente | Completa tecnica | CML-494→496 | chiarire differenza tra bozza, proposta ed effetto sul canonico |
| Salvare e recuperare proposta | Parziale | persistenza locale e archivio | verificare recupero dopo interruzioni e più bozze |
| Esportare `teacher_proposal.cml` | Completa tecnica | CML-497, CML-506, libreria CML-516 | prova con utenti non tecnici |
| Programmazione annuale | Completa tecnica | CML-508, CML-510→512 | validazione qualitativa e stampa/formati avanzati fuori perimetro |
| UDA essenziale | Completa tecnica | CML-509→512 | validazione qualitativa con docenti |
| Duplicare documenti | Completa tecnica | CML-511 | nessun archivio multi-copia nella stessa classe |
| Comprendere salvataggio, export e validazione | Parziale | cue e testi presenti | gate umano CML-521/CML-522 |

### Dipartimento

| Capacità | Stato | Evidenza | Gap residuo |
|---|---|---|---|
| Importare più proposte | Completa tecnica | CML-498 | file malformati e duplicati da stressare |
| Visualizzare coda dipartimentale | Completa tecnica | CML-499 | priorità, filtri e comprensione da pilotare |
| Confrontare contenuti | Completa tecnica | CML-499→500 | leggibilità su proposte complesse |
| Accettare, rifiutare o sospendere | Completa tecnica | CML-500 | motivazioni e linguaggio da verificare |
| Esportare `department_outcome.cml` | Completa tecnica | CML-501, CML-506 | prova con coordinatori reali |
| Gestire conflitti e duplicati | Parziale | controlli contrattuali | casi multipli sulla stessa unità e fusioni motivate |
| Tracciabilità della decisione | Parziale | riferimenti e stati presenti | audit di completezza e leggibilità |

### Referente

| Capacità | Stato | Evidenza | Gap residuo |
|---|---|---|---|
| Importare esiti dipartimentali | Completa tecnica | CML-502 | casi eterogenei e file incompatibili |
| Validare gli esiti | Completa tecnica | CML-503 | comprensione del ruolo e delle responsabilità |
| Esportare `referent_validation.cml` | Completa tecnica | CML-504, CML-506 | prova end-to-end con referente reale |
| Distinguere proposta, esito e canonico | Parziale | processo e testi presenti | evidenza umana obbligatoria |
| Preparare consolidamento istituzionale | Mancante | non ancora superficie 1.0 completa | report leggibile per Collegio/Consiglio senza applicazione automatica |
| Applicare modifiche al canonico | Fuori 1.0 | esclusione intenzionale | deve restare processo umano esterno |

## Gap bloccanti prima del pilot umano

Il pilot può iniziare solo quando:

1. esiste un URL stabile della baseline React;
2. il percorso Docente → Dipartimento → Referente è accessibile senza dati personali;
3. ogni ruolo comprende cosa viene salvato e cosa viene esportato;
4. nessuna azione implica modifica automatica del curricolo canonico;
5. backup e ripristino sono disponibili e comprensibili;
6. desktop e mobile non presentano blocchi critici;
7. le evidenze del pilot possono essere raccolte localmente e anonimizzate;
8. il protocollo CML-517D è applicato senza confondere risultati sintetici e umani.

## Gate per il passaggio definitivo a React

React diventa prodotto pubblico principale quando:

- 3–5 docenti completano i cinque scenari minimi;
- nessun blocco critico resta aperto;
- i falsi negativi dello swarm sui blocchi critici sono pari a zero;
- la copertura sintetica dei problemi umani raggiunge almeno il 70%;
- backup/restore e round-trip `.cml` superano i test avversariali;
- il flusso dei tre ruoli è validato da almeno un referente o coordinatore;
- accessibilità e mobile non presentano P0/P1;
- la documentazione utente minima è disponibile;
- una release candidate è congelata e verificata.

## Sequenza operativa

```text
CML-518A  baseline e perimetro capacità
CML-518B  inventario tecnico verificato delle superfici React
CML-518C  chiusura gap Docente end-to-end
CML-518D  chiusura gap Dipartimento
CML-518E  chiusura gap Referente
CML-519   audit maturità sulla baseline React
CML-520   suite contratti, recovery e casi avversariali
CML-521   percorso guidato di valutazione umana
CML-522   primo pilot reale con docenti
CML-523   correzioni confermate dal pilot
CML-524   release candidate React
```

## Confini

- nessuna modifica al runtime storico;
- nessuna modifica al comportamento React in questa slice;
- nessuna modifica ai dati curricolari canonici;
- nessun backend, autenticazione o telemetria;
- nessuna approvazione automatica;
- validazione umana finale obbligatoria.

## Verdetto

`CML_518A_REACT_BASELINE_AND_CAPABILITY_PERIMETER_READY_NO_RUNTIME_OR_CANONICAL_CHANGE`
