# CML-430 — User Validation Intake Summary Template

Modello operativo per sintetizzare le evidenze raccolte dai docenti dopo la prova pilota.
Da usare con il kit CML-428 e il modello intake CML-429.

---

## 1. Scopo del modello

- Leggere in modo ordinato i file `.txt` restituiti dai docenti dopo la prova pilota.
- Evitare interpretazioni casuali o soggettive.
- Distinguere tra evidenze oggettive, preferenze personali e richieste fuori perimetro.
- Trasformare solo le evidenze rilevanti in possibili slice CML.

## 2. Dati minimi da registrare

| Dato | Descrizione |
|---|---|
| Numero file raccolti | Totale file `.txt` ricevuti |
| Numero docenti coinvolti | Distinto dal numero file (un docente pu consegnare pi file) |
| Data o periodo della prova | Giorno/i in cui stata condotta la prova |
| Ordine/scuola | Infanzia, Primaria, Secondaria o generico |
| Discipline rappresentate | Se indicate nelle annotazioni o nel contesto |
| Numero totale evidenze | Somma di tutte le osservazioni classificate |
| Aree pi segnalate | Aree dello strumento con pi segnalazioni |
| Evidenze ad alta severit | Conteggio severit Alta |
| Evidenze ricorrenti | Osservazioni ripetute da pi docenti |
| Osservazioni archiviate | Non trasformate in slice |
| Slice candidate | Elenco provvisorio di possibili nuove slice |

## 3. Tabella di sintesi evidenze

| ID | Fonte | Area | Osservazione sintetica | Tipo problema | Severit | Ricorrenza | Decisione | Slice candidata | Priorit |
|---|---|---|---|---|---|---|---|---|---|
| E01 | Doc1 | Home | Card poco chiara | Orientamento | Alta | 2/3 | Nuova slice | CML-4xx | Alta |
| E02 | Doc2 | Test guidato | Scenario lungo | Chiarimenti testuali | Bassa | 1/3 | Archiviata | — | — |
| E03 | Doc3 | Curricolo | Legenda non trovata | Guida contestuale | Media | 2/3 | Nuova slice | CML-4xx | Media |

**Legenda colonne:**

- **ID**: identificativo progressivo (E01, E02, ...).
- **Fonte**: sigla del docente o del file (Doc1, Doc2, ...).
- **Area**: Home, Test guidato, Curricolo, Progetta, Esportazioni, Guida, Mobile, Globale.
- **Osservazione sintetica**: frase breve che riassume il problema.
- **Tipo problema**: Orientamento, Microcopy, Chiarimenti testuali, Guida contestuale, Comportamento mobile, Esportazione, Non pertinente, Fuori ambito.
- **Severit**: Alta, Media, Bassa (cfr. sezione 6).
- **Ricorrenza**: frazione quoziente (es. 2/3 = 2 docenti su 3 hanno segnalato la stessa cosa).
- **Decisione**: Nuova slice, Accorpata, Archiviata, Osservazione, Esclusa.
- **Slice candidata**: CML-4xx oppure vuota.
- **Priorit**: Alta, Media, Bassa.

## 4. Schema di sintesi finale

Modello pronto all'uso:

```text
CML User Validation Intake Summary

Periodo prova:        [data o intervallo]
Docenti coinvolti:    [numero]
File analizzati:       [numero]
Evidenze totali:       [numero]

Aree pi segnalate:    [elenco]
Evidenze ad alta severit:   [numero]
Evidenze ricorrenti:        [numero]
Osservazioni archiviate:    [numero]
Richieste fuori perimetro:  [numero]
Slice candidate:            [elenco]

Decisione operativa:  [nessuna azione / microcopy / guida contestuale / microfix mobile / revisione Home / nuova slice PM-xx]
```

## 5. Criteri di decisione

| Situazione | Decisione |
|---|---|
| Evidenza singola, severit Alta | Aprire nuova slice |
| Evidenza ricorrente (2+ docenti, stessa area) | Aprire nuova slice o accorpare |
| Evidenza singola, severit Media | Accorpare con altra simile o osservare |
| Evidenza singola, severit Bassa | Archiviare |
| Preferenza personale senza impatto sul compito | Archiviare |
| Richiesta di backend, account, invio remoto | Escludere (fuori perimetro) |
| Richiesta di modifica dati curricolari | Escludere (fuori perimetro) |
| Evidenza gi risolta in slice precedente | Archiviare con nota di rinvio |

## 6. Priorit

| Priorità | Criterio |
|---|---|
| Alta | Il problema blocca il completamento del compito o genera un'interpretazione errata del dato curricolare |
| Media | Il problema rallenta o confonde, ma il compito rimane completabile |
| Bassa | Miglioria testuale, visiva o di microcopy; non impedisce l'uso |

## 7. Output atteso

Il risultato della compilazione deve essere un documento breve (1-2 pagine) che consenta di decidere:

- **Nessuna azione**: tutto ok, proseguire.
- **Microcopy**: ritoccare etichette, pulsanti o messaggi.
- **Guida contestuale**: migliorare messaggi di aiuto o legenda.
- **Microfix mobile**: correggere comportamento su schermi piccoli.
- **Revisione Home**: modificare layout, card o messaggi Home.
- **Nuova slice PM/UX**: aprire una nuova slice di intervento.

## 8. Allineamento stato progetto

`PROJECT-STATE.md` aggiornato con:

- Ultima slice: CML-430 — User Validation Intake Summary Template
- Last commit: bcb9a0c (refers to CML-429M, il repo-sync locale)
- Distinzione chiara: CML-429 integrato da remoto (86ad154), CML-429M sync locale (bcb9a0c), CML-430 docs-only locale non pushato

---

## Verdetto

CML_430_USER_VALIDATION_INTAKE_SUMMARY_TEMPLATE_READY_LOCAL_NOT_PUSHED
