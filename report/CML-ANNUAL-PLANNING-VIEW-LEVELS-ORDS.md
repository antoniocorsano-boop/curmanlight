# CML-ANNUAL-PLANNING-VIEW-LEVELS-ORDS

## Sintesi
La slice introduce localmente la prima vista runtime per Programmazione annuale dentro l'area Didattica. La vista e read-only, derivata dai dati curricolari gia presenti e progettata come base per futuri incrementi su programmazione editabile, UDA smart e raccolta evidenze sul campo.

## Base tecnica
- Runtime target: `_published_snapshot/netlify-current/index.html`
- Area target: `#tab-didattica`
- Nuovo tab logico: `didattica_programmazione`
- Dati usati: `getDisciplineEvidenceData()`, `DISCIPLINE`, `ALL_CURRICULUM_DATA`

## RED iniziale
Il controllo statico iniziale ha confermato che:
- `didattica_programmazione` non era presente;
- `setTab('didattica_programmazione')` non era supportato.

## Implementazione
- Subnav Didattica estesa da 2 a 3 sottoviste.
- Vista Programmazione annuale separata da Evidenze e UDA.
- Rendering per ordini: Infanzia, Primaria, Secondaria.
- Livelli di maturita 1-5 visibili in pagina.
- Router aggiornato per breadcrumb, subnav active state, mobile menu e refresh disciplina.

## Vincoli rispettati
- Nessun backend/API/endpoint.
- Nessuna credenziale.
- Nessuna nuova dipendenza.
- Nessun nuovo storage.
- Nessun editor e nessun salvataggio.
- Nessuna modifica ai dati curricolari normalizzati.
- Nessuna modifica a export/import `.cml`.
- Nessun push.

## Rischio residuo
La vista e un primo incremento strutturale: non pianifica periodi reali e non produce documenti. La slice successiva dovra decidere se restare read-only o introdurre un editor locale sotto nuovo contratto operativo.

## Prossima slice consigliata
`CML-ANNUAL-PLANNING-EDITABLE-PROGRAMMAZIONE`, solo dopo smoke e autorizzazione esplicita.

## Verdetto
`CML_ANNUAL_PLANNING_VIEW_LEVELS_ORDS_READY_LOCAL_NOT_PUSHED`