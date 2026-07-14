# CML-CURR-AUDIT-01 — Risultati consolidati dell’audit documentale

## 1. Perimetro

Sorgente canonica: `content/curriculum/*.normalized.json`.

- 14 file disciplinari;
- 142 unità curricolari;
- Infanzia, Primaria e Secondaria di I grado;
- campi curricolari, fonti, stati, validazione, copertura per classe/fascia, identificativi e duplicazioni;
- nessuna modifica o approvazione dei contenuti.

## 2. Esito strutturale

| Indicatore | Esito |
|---|---:|
| Discipline | 14 |
| Unità | 142 |
| ID mancanti o duplicati | 0 |
| Campi principali compilati | 142/142 |
| Fonti formalmente presenti | 142/142 |
| `validazioneUmana: true` | 142/142 |
| P0 strutturali | 0 |
| Duplicazioni testuali esatte | 1 |

La struttura formale è completa. Questo non certifica correttezza disciplinare, approvazione o conformità puntuale alle fonti.

## 3. Riclassificazione dei 22 gap automatici

L’audit automatico aveva rilevato 22 combinazioni disciplina/livello senza record autonomo. La revisione documentale le ha riclassificate.

### 3.1 Tre casi risolti come aggregazioni

- Arte e Immagine, Primaria classe 4 → `APPLICABILE_AGGREGATO`;
- Arte e Immagine, Primaria classe 5 → `APPLICABILE_AGGREGATO`;
- Educazione Fisica, Primaria classe 4 → `APPLICABILE_AGGREGATO`.

Le fonti o le note delle unità dichiarano esplicitamente una copertura 3–4–5.

### 3.2 Nove candidati P1 Primaria ad alta confidenza

- Arte e Immagine: classe 2;
- Educazione Fisica: classe 2;
- Matematica: classi 2, 3 e 4;
- Musica: classi 2 e 4;
- Religione Cattolica: classi 2 e 4.

Per questi casi non risultano dichiarazioni di non applicabilità, aggregazione, copertura indiretta o delibera di granularità. Restano formalmente `DA_VERIFICARE`, ma l’evidenza interna li rende candidati P1 ad alta confidenza.

### 3.3 Un problema sistemico Infanzia con dieci manifestazioni

Le dieci assenze della fascia 3–4 non devono essere trattate come dieci lacune disciplinari indipendenti. Le unità di fascia 5 rinviano ai cinque campi di esperienza:

- `Immagini, suoni, colori`;
- `Il corpo e il movimento`;
- `I discorsi e le parole`;
- `La conoscenza del mondo`;
- `Il sé e l’altro`.

Manca però un metadato che dichiari copertura plurifascia 3–5. Serve una decisione d’istituto tra unità distinte 3–4/5, unità plurifascia o modello nativo per campi di esperienza.

## 4. Rilievi semantici e di governance

### P1

- Matematica `mat_sec_1_001`: possibile contaminazione di livello, con conoscenze tipiche della Primaria in una unità di Secondaria classe 1.
- Governance della validazione: Educazione Fisica e Religione Cattolica dichiarano contenuti provvisori o da validare, ma tutte le unità hanno `validazioneUmana: true`.
- Italiano: il benchmark strutturale Tecnologia/Italiano non costituisce fonte disciplinare del contenuto.
- Nove gap Primaria ad alta confidenza.
- Granularità sistemica dell’Infanzia non definita.

### P2

- Geografia: traguardo identico tra `geo_pri_1_001` e `geo_pri_3_001`.
- Fonti aggregate e non attribuite ai singoli campi.
- Riferimenti misti IN 2012/IN 2025 privi di applicabilità temporale esplicita.
- Affermazioni normative specifiche ancora da verificare sui testi ufficiali.
- Adattamenti locali e didattici non distinti dalle fonti ufficiali.

### P3

- Refusi e normalizzazione ortografica, inclusi `Elementi diagogica`, `Onomatopee` e accenti impropri ricorrenti.

Il registro analitico è in `report/CML-CURR-AUDIT-01-semantic-governance-anomaly-register.md`.

## 5. Limiti della verifica normativa

Le fonti sono formalmente presenti in tutte le unità, ma non sono ancora certificate semanticamente. Non è stato possibile completare in questa fase un confronto ufficiale puntuale e completo con tutti i testi normativi citati.

Restano da distinguere sistematicamente:

1. testo ufficiale;
2. adattamento d’istituto;
3. proposta transitoria o IN 2025;
4. integrazione didattica locale.

## 6. Decisioni operative richieste

Prima di qualsiasi correzione dati occorre:

1. approvare la granularità dell’Infanzia;
2. validare i nove candidati P1 Primaria;
3. definire il contratto di stato tra `stato`, `readiness`, `validazioneUmana` e approvazione;
4. introdurre una provenienza più granulare;
5. verificare il caso Matematica e il duplicato Geografia;
6. aprire correzioni separate, disciplina per disciplina, con validazione umana.

## 7. Verdetto

Il corpus supera l’audit strutturale: nessun P0, nessun ID duplicato e campi principali formalmente completi. Non può ancora essere dichiarato curricolo verticale completo, approvato e normativamente certificato.

Stato consolidato:

- 3 livelli riclassificati come aggregati;
- 9 candidati P1 Primaria ad alta confidenza;
- 1 problema sistemico di granularità Infanzia con 10 manifestazioni;
- 1 possibile contaminazione di livello in Matematica;
- 1 duplicazione testuale in Geografia;
- governance della validazione incoerente;
- provenienza e fonti da verificare semanticamente.

`CML_CURR_AUDIT_01_STRUCTURAL_PASS_WITH_9_HIGH_CONFIDENCE_PRIMARY_GAPS_1_SYSTEMIC_INFANZIA_ISSUE_AND_SEMANTIC_GOVERNANCE_REMEDIATION_REQUIRED`
