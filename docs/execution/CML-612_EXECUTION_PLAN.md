# CML-612 — Piano di esecuzione controllata

## Obiettivo

Trasformare il Second Brain in una base di conoscenza locale, verificabile e riutilizzabile da persone, intelligenza artificiale e CurManLight, senza interferire con il lavoro già in corso e senza modificare prematuramente il runtime.

## Branch

`feat/cml-612-second-brain-knowledge-architecture`

## Vincoli operativi

- non modificare `main`;
- non eseguire merge o pubblicazione automatica;
- non introdurre backend, autenticazione, telemetria o servizi remoti;
- non inviare documenti o dati all'esterno;
- rispettare architettura e navigazione congelate;
- non importare massivamente i PDF durante CML-612A;
- mantenere separati fonti ufficiali, atti interni, materiali formativi e analisi derivate;
- conservare provenienza, validità, versione e necessità di validazione umana.

---

## Sequenza esecutiva

### Fase 0 — Riallineamento e controllo concorrenza

Da eseguire dopo la conclusione del prompt precedente:

1. acquisire il rapporto finale del lavoro concorrente;
2. verificare branch, commit, file modificati e stato di push;
3. aggiornare il riferimento remoto;
4. confrontare `main` con il branch CML-612;
5. integrare nel branch CML-612 gli aggiornamenti necessari senza alterare il lavoro concorrente;
6. registrare eventuali conflitti semantici nell'area Second Brain, Knowledge Companion o Documenti.

Gate:

- base remota identificata;
- nessun lavoro concorrente non contabilizzato;
- branch CML-612 riallineabile senza perdita di modifiche.

### Fase 1 — Audit del Second Brain esistente

Esaminare:

- modello dati;
- store e persistenza;
- componenti e viste;
- importazione ed esportazione;
- ricerca e filtri;
- Knowledge Companion;
- collegamenti con Progettazione, Curricolo e Documenti;
- test esistenti;
- eventuali contenuti dimostrativi o hard-coded.

Produrre:

- inventario dei file;
- mappa dei flussi;
- limiti del modello corrente;
- compatibilità con la proposta CML-612;
- elenco delle modifiche minime necessarie.

### Fase 2 — Contratti di dominio

Definire senza ancora migrare i contenuti:

- `KnowledgeSource`;
- `KnowledgeUnit`;
- `KnowledgeRelation`;
- `SourceAuthorityLevel`;
- `ValidityStatus`;
- `ValidationStatus`;
- `InstitutionalDirection`;
- `KnowledgeContextRequest`;
- `KnowledgeContextResult`.

Requisiti:

- contratti espliciti;
- nessun `any` nei confini pubblici;
- compatibilità con persistenza locale;
- migrazione progressiva dei dati esistenti;
- serializzazione stabile.

### Fase 3 — Prototipo dati rappresentativo

Usare un campione ridotto e controllato:

- D.M. 221/2025 come fonte normativa;
- Indicazioni nazionali 2012 come fonte sostituita in transizione;
- un Atto di indirizzo fittizio ma realistico;
- una scheda formativa Dirscuola;
- un'analisi derivata con IA chiaramente etichettata.

Verificare:

- gerarchia delle fonti;
- versionamento;
- relazioni;
- filtro per validità e autorità;
- recupero contestuale;
- citazione della provenienza.

### Fase 4 — Regole di recupero per IA

Implementare una funzione locale deterministica che:

1. filtra per pertinenza;
2. ordina per autorità e validità;
3. conserva eventuali fonti in conflitto;
4. limita il contesto ai segmenti necessari;
5. restituisce citazioni e avvertenze;
6. imposta `humanValidationRequired` quando opportuno.

Non integrare provider remoti.

### Fase 5 — Specifica di integrazione prodotto

Definire, senza estendere indiscriminatamente l'interfaccia:

- come Progettazione richiede un contesto;
- come Curricolo confronta versioni e fonti;
- come Documenti mostra coerenza istituzionale;
- come Valutazione recupera riferimenti formativi;
- come Knowledge Companion espone suggerimenti e provenienza.

Ogni integrazione deve dichiarare:

- evento di attivazione;
- dati richiesti;
- risultato mostrato;
- azione dell'utente;
- comportamento in assenza di fonti;
- necessità di validazione.

### Fase 6 — Piano di migrazione IN2025

Catalogare i materiali già raccolti in quattro gruppi:

1. fonti ufficiali integrali;
2. atti istituzionali della scuola;
3. materiali formativi qualificati;
4. analisi e sintesi derivate.

Per ogni documento definire:

- identificativo stabile;
- titolo normalizzato;
- autore ed ente;
- tipo e livello di autorità;
- data e periodo di validità;
- struttura di segmentazione;
- relazioni principali;
- stato di verifica;
- destinazione nella tassonomia.

Non importare i file binari nel repository senza una decisione esplicita su dimensioni, licenze e strategia di distribuzione.

---

## Validazioni richieste

- `npx tsc --noEmit`;
- `npm test`;
- `npm run build`;
- `npm run build-storybook`, se le componenti visuali vengono toccate;
- `git diff --check`;
- test unitari dei contratti e dell'ordinamento delle fonti;
- test di migrazione e serializzazione;
- test dei conflitti tra fonti;
- controllo linguistico delle etichette;
- controllo di assenza di servizi remoti e telemetria.

## Evidenze finali

Il rapporto di chiusura deve includere:

- branch e commit;
- file modificati;
- decisioni di dominio;
- esempi del prototipo dati;
- risultati dei test;
- rischi residui;
- materiali non ancora importati;
- raccomandazione motivata per CML-612B.

## Sequenza successiva proposta

- **CML-612A** — architettura della conoscenza;
- **CML-612B** — ingestione e normalizzazione;
- **CML-612C** — conoscenza istituzionale della scuola;
- **CML-612D** — navigazione della conoscenza;
- **CML-612E** — contesto strutturato per IA;
- **CML-612F** — integrazione nelle funzioni di prodotto;
- **CML-612G** — gate di validazione con docenti e casi reali.

## Verdetto atteso della prima fase

`CML_612A_SECOND_BRAIN_KNOWLEDGE_ARCHITECTURE_READY_LOCAL_NOT_MERGED`
