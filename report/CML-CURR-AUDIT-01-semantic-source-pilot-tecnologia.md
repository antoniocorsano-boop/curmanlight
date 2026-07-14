# CML-CURR-AUDIT-01 — Pilot di verifica semantica delle fonti: Tecnologia

## Scopo

Verificare su una disciplina completa se il campo `fonte` consenta di distinguere con sufficiente precisione:

1. formulazione derivata dalle Indicazioni nazionali 2012;
2. contenuto collegato alle Indicazioni nazionali 2025;
3. adattamento o integrazione del curricolo d’istituto;
4. scelta didattica operativa non direttamente riconducibile a una formulazione normativa.

Il pilot non modifica i dati e non certifica la conformità giuridica dei testi.

## Corpus

File esaminato: `content/curriculum/tecnologia.normalized.json`.

- 13 unità;
- Infanzia: fasce 3–4 e 5 anni;
- Primaria: classi 1–5;
- Secondaria di primo grado: classi 1–3;
- fonte presente in tutte le unità;
- `validazioneUmana: true` in tutte le unità.

## Tipologie di fonte rilevate

### A. Riferimento singolo alle Indicazioni 2012

Formula prevalente:

`Indicazioni Nazionali 2012, D.M. 254/2012, sezione Tecnologia`

La formula identifica l’atto e la disciplina, ma non indica paragrafo, traguardo, obiettivo o pagina. È quindi formalmente riconoscibile, ma non sufficiente per dimostrare la corrispondenza puntuale del testo.

### B. Indicazioni 2012 + curricolo d’istituto

Esempi:

- `Indicazioni Nazionali 2012, D.M. 254/2012 + Curricolo di istituto — Agenda 2030`;
- `Indicazioni Nazionali 2012, D.M. 254/2012 + Curricolo di istituto — Agenda 2030 / Educazione Civica`;
- `Indicazioni Nazionali 2012, D.M. 254/2012 + Raccomandazioni digitali PTOF 2025-2028`.

Queste fonti dichiarano correttamente una composizione, ma non separano quale parte dell’unità provenga dall’atto nazionale e quale parte sia stata aggiunta dall’istituto.

### C. Indicazioni 2012 + Indicazioni 2025

Esempi:

- `Indicazioni Nazionali 2012, D.M. 254/2012 + Nuove Indicazioni D.M. 221/2025 — Educazione Civica`;
- `Indicazioni Nazionali 2012, D.M. 254/2012 + Nuove Indicazioni D.M. 221/2025 — Pensiero computazionale`.

La formula segnala una transizione normativa, ma presenta tre criticità:

1. non specifica quale quadro sia applicabile alla classe e all’anno scolastico;
2. non distingue testo vigente, testo 2025 e adattamento d’istituto;
3. usa etichette tematiche che devono essere verificate rispetto alla struttura effettiva dell’atto citato.

## Rilievi semantici

### P1 — Provenienza dei singoli campi non tracciata

Il campo `fonte` è associato all’intera unità. Non è possibile stabilire separatamente la provenienza di:

- competenza;
- traguardo;
- obiettivi;
- conoscenze;
- abilità;
- evidenze;
- criteri di valutazione.

Evidenze e criteri di valutazione appaiono spesso come elaborazioni operative d’istituto, ma il modello non lo dichiara esplicitamente.

### P1 — Quadro temporale non espresso nella fonte

Le unità che citano contemporaneamente 2012 e 2025 non dichiarano:

- anno scolastico di applicabilità;
- classe/coorte interessata;
- quadro nazionale applicabile;
- eventuale stato di transizione.

La risoluzione temporale prevista da CML-477 non è incorporata nel dato curricolare.

### P2 — Granularità normativa insufficiente

Il riferimento all’atto è generalmente privo di articolo, allegato, sezione o paragrafo puntuale. La fonte è identificabile, ma la derivazione testuale non è verificabile senza ricerca manuale nel documento.

### P2 — Contenuto normativo e scelta didattica mescolati

Nella stessa unità convivono formulazioni curricolari, strumenti specifici e attività operative, per esempio:

- LIM e tablet;
- Paint e Tux Paint;
- CAD e GeoGebra;
- Scratch e Python;
- calcolo di consumi e progettazione fotovoltaica.

Questi elementi possono essere coerenti con la disciplina, ma non devono apparire implicitamente come formulazioni letterali dell’atto nazionale.

### P2 — Etichette di sezione da validare

Formule come `Educazione Civica` e `Pensiero computazionale`, collegate al D.M. 221/2025, richiedono verifica documentale puntuale. Il pilot non dispone di una citazione interna all’atto che confermi tali etichette come sezioni canoniche.

### P3 — Uniformità editoriale

Le fonti usano separatori e denominazioni non uniformi:

- virgola;
- segno `+`;
- barra `/`;
- trattino lungo;
- `Indicazioni Nazionali`, `Nuove Indicazioni`, `Curricolo di istituto`, `PTOF`.

La leggibilità è sufficiente, ma la normalizzazione futura dovrebbe usare campi strutturati anziché una sola stringa.

## Classificazione del pilot

| Dimensione | Esito |
|---|---|
| Fonte non vuota | PASS |
| Atto principale identificabile | PASS con riserva |
| Citazione puntuale | NON DISPONIBILE |
| Separazione nazionale/istituto | PARZIALE |
| Applicabilità temporale | NON ESPRESSA NEL RECORD |
| Provenienza per campo | NON DISPONIBILE |
| Validazione umana dichiarata | PASS |
| Certificazione semantica | NON ATTRIBUIBILE AUTOMATICAMENTE |

## Modello documentale raccomandato

Per una futura revisione, senza applicarla durante l’audit, ogni unità dovrebbe poter dichiarare:

```text
fonteNormativa[]
  atto
  allegato/sezione
  paragrafo o riferimento puntuale
  quadro: IN_2012 | IN_2025
  campoInteressato[]

fonteIstituzionale[]
  documento
  versione/data
  organo di approvazione
  campoInteressato[]

naturaContenuto
  TESTO_UFFICIALE
  ADATTAMENTO_ISTITUTO
  INTEGRAZIONE_DIDATTICA
  PROPOSTA_REVISIONE
```

## Verdetto

Tecnologia è strutturalmente completa e tutte le unità hanno una fonte formalmente presente. La tracciabilità semantica è però solo parziale: il riferimento normativo è prevalentemente identificabile, mentre la derivazione dei singoli campi, la separazione tra norma e adattamento e l’applicabilità temporale non sono documentate con granularità sufficiente.

`CML_CURR_AUDIT_01_TECNOLOGIA_SOURCE_PILOT_PASS_WITH_TRACEABILITY_GAPS`