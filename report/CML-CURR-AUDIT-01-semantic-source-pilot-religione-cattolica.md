# CML-CURR-AUDIT-01 — Pilot semantico fonti: Religione Cattolica

## Scopo

Verificare copertura per livello, provenienza, coerenza interna e stato di validazione del file `content/curriculum/religione-cattolica.normalized.json`, senza modificare i dati curricolari.

## Inventario

Il corpus contiene 7 unità:

- Infanzia fascia 5: 1;
- Primaria classi 1, 3 e 5: 3;
- Secondaria I grado classi 1, 2 e 3: 3.

Le classi Primaria 2 e 4 non hanno record autonomi.

## Applicabilità per livello

### Infanzia 3–4

Non esiste una unità dedicata né una dichiarazione di aggregazione plurifascia. Stato: `DA_VERIFICARE`.

### Primaria classe 2

Nessuna unità, fonte o nota dichiara che la classe 1 o 3 copra anche la classe 2. Stato: `DA_VERIFICARE`.

### Primaria classe 4

Nessuna unità, fonte o nota dichiara che la classe 3 o 5 copra anche la classe 4. Stato: `DA_VERIFICARE`.

La sequenza 1–3–5 descrive una progressione sintetica, ma non dimostra una aggregazione formalizzata.

## Provenienza

Il metadato generale dichiara un limited draft basato su DPR 175/2012 e D.M. 254/2012. Le fonti delle unità ripetono tali riferimenti, ma senza articolo, allegato, pagina o collegamento campo-per-campo.

Per le unità `rc_pri_5_001` e `rc_sec_3_001` compaiono riferimenti al D.M. 221/2025 per pluralismo culturale, religioso e cittadinanza globale. Queste attribuzioni richiedono confronto puntuale con il testo ufficiale e con la disciplina specifica dell’IRC.

Il campo `fonte` non distingue:

- testo ufficiale;
- parafrasi;
- adattamento d’istituto;
- integrazione didattica;
- proposta transitoria IN 2025.

## Contraddizione di governance — P1

Tutte le unità riportano `validazioneUmana: true`, mentre le note dipartimentali dichiarano ripetutamente:

- “da validare con dipartimento IRC”;
- “contenuti da validare con dipartimento IRC”.

Il flag tecnico non può quindi essere interpretato come approvazione disciplinare effettiva. Serve distinguere almeno:

- validazione tecnica del record;
- revisione disciplinare;
- approvazione dipartimentale;
- applicabilità deliberata.

## Ulteriori rilievi

- Le evidenze quantitative o operative, ad esempio “in 3 frasi”, “in 4 punti” e “3 elementi”, appaiono adattamenti didattici locali e devono essere classificati come tali.
- La terminologia interreligiosa richiede revisione specialistica IRC per evitare semplificazioni improprie.
- Il riferimento al D.M. 254/2012 insieme al DPR 175/2012 deve essere descritto con maggiore precisione, perché la disciplina IRC dispone di un proprio quadro specifico.

## Classificazione

- P0: nessuno.
- P1: classi Primaria 2 e 4 prive di copertura o aggregazione dichiarata; contraddizione tra flag di validazione e note “da validare”; fonti non granulari.
- P2: progressione sintetica 1–3–5 e formulazioni interreligiose da revisione specialistica.
- P3: nessun errore editoriale grave rilevato nel pilot.

## Decisione

Nessun dato curricolare viene modificato. Primaria classi 2 e 4 restano `DA_VERIFICARE` fino a una decisione esplicita del dipartimento IRC o a una matrice disciplinare approvata.

`CML_CURR_AUDIT_01_RELIGIONE_CATTOLICA_PILOT_COMPLETE_WITH_TWO_UNRESOLVED_PRIMARY_GAPS_AND_VALIDATION_GOVERNANCE_CONFLICT`
