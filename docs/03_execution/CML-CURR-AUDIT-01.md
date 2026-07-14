# CML-CURR-AUDIT-01 — Audit documentale completo del curriculum

## Obiettivo

Verificare sistematicamente il patrimonio curricolare di CurManLight senza modificare i contenuti disciplinari, accertando completezza, coerenza, tracciabilità, applicabilità e utilizzabilità nei diversi ordini di scuola.

## Perimetro

L’audit comprende:

- 14 discipline canoniche e 142 unità curricolari;
- ordine, classe o fascia e disciplina;
- competenze, traguardi, obiettivi, conoscenze, abilità, evidenze e criteri;
- nuclei, ambiti, fonti, stato e validazione;
- progressione verticale e coerenza orizzontale;
- corrispondenza fra dato normalizzato e runtime;
- applicabilità temporale IN 2012/IN 2025.

## Classificazione

- **P0:** integrità compromessa.
- **P1:** completezza, provenienza o tracciabilità insufficiente.
- **P2:** coerenza didattica o documentale da verificare.
- **P3:** qualità editoriale.

## Vincoli

- nessuna modifica automatica ai dati curricolari;
- nessuna normalizzazione silenziosa;
- ogni rilievo collegato a disciplina, ordine, livello e campo;
- distinzione fra controllo tecnico e valutazione didattica;
- validazione umana obbligatoria prima di correzioni sostanziali.

## Stato operativo

Branch:

`codex/cml-curr-audit-01-full-curriculum-document-audit`

Completato:

- inventario automatico di 14 discipline e 142 unità;
- verifica di campi, tipi, identificativi, livelli, fonti e validazione;
- artifact GitHub Actions riproducibile anche in presenza di P0;
- rilevazione esplicita di unità prive di `ordine`;
- report direzionale iniziale;
- confronto con il contratto temporale CML-477;
- registro dei 22 gap candidati di livello;
- matrice preliminare disciplina × ordine × livello;
- pilot semantico Tecnologia;
- pilot semantico Educazione Civica;
- pilot semantico Italiano.

## Applicabilità e gap

- CML-477 determina il quadro temporale IN 2012/IN 2025, non la granularità disciplinare per classe;
- le 22 assenze sono gap candidati, non lacune automaticamente confermate;
- le 10 assenze dell’Infanzia richiedono verifica rispetto ai campi di esperienza;
- le 12 assenze della Primaria devono essere distinte fra progressione annuale, aggregazione pluriclasse e gap obbligatorio;
- Seconda Lingua Comunitaria e Latino LEL hanno perimetri specifici e non devono generare falsi gap.

## Pilot semantico Tecnologia

- 13/13 unità con fonte presente;
- D.M. 254/2012 formalmente identificabile;
- fonti miste 2012/2025 prive di applicabilità per classe e anno;
- contenuto normativo, adattamento d’istituto e integrazione didattica mescolati nello stesso campo;
- riferimenti al D.M. 221/2025 da verificare puntualmente.

Output:

`report/CML-CURR-AUDIT-01-semantic-source-pilot-tecnologia.md`

## Pilot semantico Educazione Civica

- 11/11 unità con fonte presente;
- pluralità di fonti: D.M. 254/2012, Legge 92/2019, D.M. 183/2024, D.M. 221/2025, Agenda 2030 e fonti sovranazionali;
- citazioni non granulari e prive di articolo, allegato o pagina;
- educazione finanziaria e cittadinanza digitale richiedono verifica puntuale;
- evidenze e criteri appaiono come adattamento didattico locale non esplicitamente classificato;
- stato generale e stato delle singole unità non descrivono approvazione o applicabilità.

Output:

`report/CML-CURR-AUDIT-01-semantic-source-pilot-educazione-civica.md`

## Pilot semantico Italiano

Italiano è coperto strutturalmente per Infanzia, Primaria e Secondaria, ma presenta una criticità di provenienza:

- il metadato generale dichiara che il corpus è stato adattato dal benchmark strutturale di Tecnologia;
- il riuso è ammissibile come modello tecnico, non come fonte disciplinare;
- le 14 unità hanno fonte presente, ma senza citazione puntuale o distinzione fra citazione, parafrasi e adattamento;
- corsivo, tre libri annui, riassunto e centralità grammaticale sono attribuiti al D.M. 221/2025 senza articolo, allegato o pagina;
- la presenza di almeno una unità per classe non dimostra un programma annuale completo: molti nuclei sono distribuiti uno per classe e devono essere letti come progressione sintetica;
- evidenze, soglie quantitative e criteri richiedono l’etichetta esplicita di adattamento didattico.

Output:

`report/CML-CURR-AUDIT-01-semantic-source-pilot-italiano.md`

## Output principali

- `tools/audit-cml-curriculum-complete.mjs`;
- `.github/workflows/cml-curr-audit-01.yml`;
- `report/CML-CURR-AUDIT-01-complete-documentary-findings.md`;
- `report/CML-CURR-AUDIT-01-applicability-review.md`;
- `report/CML-CURR-AUDIT-01-discipline-applicability-matrix.md`;
- i tre pilot semantici disciplinari;
- artifact `report/CML-CURR-AUDIT-01/` generato dal workflow.

## Passaggio successivo

Correlare fonte e gap candidati su una disciplina incompleta, iniziando da **Matematica** o **Arte e Immagine**, per stabilire se le classi mancanti rappresentino:

- `APPLICABILE_OBBLIGATORIO`;
- `APPLICABILE_AGGREGATO`;
- `NON_APPLICABILE`;
- `DA_VERIFICARE`.

Successivamente va consolidato un contratto di provenienza che distingua testo ufficiale, parafrasi, adattamento d’istituto e integrazione didattica.

## Verdetto corrente

`CML_CURR_AUDIT_01_THREE_SEMANTIC_PILOTS_COMPLETE_ITALIANO_PROVENANCE_GAP_CONFIRMED`
