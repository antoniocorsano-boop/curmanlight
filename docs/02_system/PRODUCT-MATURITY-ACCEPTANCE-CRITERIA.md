# Product Maturity Acceptance Criteria

Definition of Done dei macro-programmi di maturita prodotto CurManLight.

## Regola generale di chiusura programma

Un macro-programma PM puo essere dichiarato COMPLETATO solo se:
1. i criteri del programma sono soddisfatti in UI reale (non solo in documentazione);
2. le voci UX collegate sono in stato DONE o accettate come residual risk esplicito;
3. il `PRODUCT-MATURITY-PROGRESS.md` e aggiornato con percentuale e decisione di chiusura;
4. la decisione di chiusura e registrata nel report della slice e nel movelog.

## PM-03 Orientamento - Definition of Done

Completato solo se:
- l'utente capisce immediatamente dove si trova;
- ogni sezione ha un solo obiettivo principale percepibile;
- nessuna schermata genera disorientamento nel flusso principale;
- il focus e sempre prevedibile dopo cambio sezione/disciplina;
- i percorsi di ritorno sono coerenti e chiari.

## PM-04 Comprensione del Curriculum - Definition of Done

Completato solo se:
- il Curriculum ha una sola logica d'uso percepibile;
- gli indicatori sono comprensibili senza spiegazioni aggiuntive;
- la terminologia e uniforme e glossario-compliant;
- la distinzione tra vigente e proposta e immediata;
- il docente capisce cosa fare entro pochi secondi dall'ingresso in sezione.

## PM-05 Esperienza di lavoro - Definition of Done

Completato solo se:
- Compila segue il processo naturale del docente;
- Esportazioni non richiede interpretazioni per scegliere il formato corretto;
- ogni azione produce un risultato atteso esplicito;
- nessun passaggio operativo e ambiguo.

## PM-06 Accompagnamento - Definition of Done

Completato solo se:
- Guida e Guida rapida sono coerenti con la UI reale;
- onboarding e primo ingresso riducono i dubbi iniziali;
- i percorsi consigliati sono orientati ai compiti reali;
- i contenuti di supporto sono brevi, chiari e azionabili.

## PM-07 Uniformita - Definition of Done

Completato solo se:
- icone e simboli hanno significato univoco;
- badge e stati sono interpretati in modo coerente in tutte le sezioni;
- componenti comuni mantengono microcopy e semantica allineati;
- non sono presenti residue incoerenze visive o simboliche bloccanti.

## Regola obbligatoria per tutte le future slice CML

Ogni nuova slice deve aprire il documento di execution con questi quattro riferimenti:

- Macroprogramma: PM-xx
- Backlog: UX-xxx (uno o piu)
- Dipende da: CML-xxx
- Aggiorna: `PRODUCT-MATURITY-PROGRESS.md`

La slice non e considerata completa se questi riferimenti non sono presenti e coerenti con backlog/roadmap/progress.
