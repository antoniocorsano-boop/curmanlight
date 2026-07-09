# CML-429 — User Validation Evidence Intake Model

Modello interno per ricevere, leggere e trasformare in roadmap le osservazioni raccolte con il test guidato CurManLight.

---

## 1. Finalità

Il modello serve a evitare che le osservazioni dei docenti siano trattate come commenti isolati o impressioni non governate.

Ogni restituzione deve diventare una **evidenza leggibile**, classificabile e confrontabile, senza perdere il valore qualitativo del racconto del docente.

Obiettivi:

- raccogliere osservazioni senza appesantire il docente;
- distinguere problemi reali da preferenze individuali;
- identificare aree ricorrenti di difficoltà;
- trasformare le evidenze in micro-slice CML motivate;
- proteggere il perimetro del progetto: locale, senza backend, senza account, senza invio remoto.

## 2. Fonti dell'evidenza

Fonti ammesse:

- file `.txt` esportato dal test guidato;
- eventuale nota sintetica del referente dopo colloquio con il docente;
- osservazione diretta durante la prova, se concordata;
- segnalazione spontanea del docente su parole, passaggi o schermate non chiare.

Fonti non ammesse come base decisionale unica:

- richieste generiche non collegate a un compito svolto;
- giudizi astratti senza esempio;
- preferenze estetiche isolate;
- richieste di funzionalità fuori perimetro tecnico o istituzionale.

## 3. Unità minima di evidenza

Ogni evidenza deve essere registrata in forma breve, ma completa.

| Campo | Descrizione |
|---|---|
| Codice evidenza | Identificativo progressivo, es. `EVD-001` |
| Fonte | File `.txt`, colloquio, osservazione diretta |
| Area | Home, Test guidato, Curricolo, Progetta, Esportazioni, Guida, Mobile, Globale |
| Testo osservato | Frase o sintesi fedele dell'osservazione |
| Problema interpretato | Cosa sembra non funzionare per l'utente |
| Evidenza o preferenza | Distinguere dato operativo da gusto personale |
| Severità | Alta, media, bassa |
| Ricorrenza | Singola, ripetuta, frequente |
| Azione proposta | Nessuna, testo, guida, layout, flusso, nuova slice |
| Decisione | Archiviare, osservare, candidare, aprire slice |

## 4. Classificazione per area

| Area | Quando usarla |
|---|---|
| Home | Il docente non capisce cosa fare, dove iniziare o quale card usare |
| Test guidato | Scenario, compiti, annotazioni o esportazione non sono chiari |
| Curricolo | Discipline, unità, indicatori o parti curricolari risultano difficili da leggere |
| Progetta | Il docente non capisce come arrivare a programmazione, UDA o evidenze |
| Esportazioni | Il docente non distingue documenti, file di lavoro o copia di sicurezza |
| Guida | Il supporto è troppo lungo, insufficiente o non raggiungibile nel momento giusto |
| Mobile | L'uso su schermo piccolo crea perdita di orientamento o difficoltà operative |
| Globale | Il problema attraversa più sezioni o riguarda il linguaggio generale dello strumento |

## 5. Classificazione per tipo di problema

| Tipo | Descrizione | Esempio di azione |
|---|---|---|
| Orientamento | Non è chiaro da dove partire o cosa fare dopo | Microcopy Home, card, ordine azioni |
| Linguaggio | Parole troppo tecniche o ambigue | Sostituzione testo, legenda, nota contestuale |
| Processo | Non è chiaro il ruolo di docente, dipartimento, referente o Collegio | Chiarimento governance o guida rapida |
| Fiducia | Il docente teme che lo strumento decida o valuti al posto suo | Rafforzare messaggi su validazione umana |
| Sovraccarico | Troppe informazioni nella stessa schermata | Riduzione densità o progressiva apertura sezioni |
| Navigazione | Il docente non trova la sezione corretta | Pulsante, ritorno al contesto, guida contestuale |
| Esportazione | Non è chiaro cosa esportare o cosa consegnare | Etichette e istruzioni più esplicite |
| Mobile | Il problema compare soprattutto da smartphone/tablet | Microfix responsivo |

## 6. Severità

| Severità | Criterio |
|---|---|
| Alta | Il docente non riesce a completare il compito o interpreta in modo errato una funzione centrale |
| Media | Il docente completa il compito, ma con esitazione, tentativi o richiesta di aiuto |
| Bassa | Il compito è completato, ma emergono miglioramenti di chiarezza, tono o ordine visivo |

## 7. Ricorrenza

| Ricorrenza | Criterio |
|---|---|
| Singola | Una sola osservazione isolata |
| Ripetuta | Due o più docenti segnalano lo stesso punto |
| Frequente | La stessa difficoltà compare nella maggioranza delle prove raccolte |

Regola prudente: una sola evidenza ad alta severità può giustificare una slice; una evidenza bassa richiede ricorrenza o coerenza con altri segnali.

## 8. Matrice decisionale

| Severità | Ricorrenza | Decisione consigliata |
|---|---|---|
| Alta | Singola | Candidare a slice o microfix, dopo verifica |
| Alta | Ripetuta/Frequente | Aprire slice prioritaria |
| Media | Singola | Osservare e cercare conferme |
| Media | Ripetuta/Frequente | Candidare a slice |
| Bassa | Singola | Archiviare come miglioramento possibile |
| Bassa | Ripetuta/Frequente | Accorpare in slice di rifinitura |

## 9. Registro interno evidenze

| ID | Data | Fonte | Area | Osservazione sintetica | Tipo | Severità | Ricorrenza | Decisione | Slice candidata |
|---|---|---|---|---|---|---|---|---|---|
| EVD-001 | 2026-07-09 | txt | Home | Non capisco quale azione scegliere per iniziare | Orientamento | Media | Singola | Osservare | — |
| EVD-002 | 2026-07-09 | txt | Test guidato | Non è chiaro che le note restano locali | Fiducia | Alta | Singola | Candidare | CML-xxx |
| EVD-003 | 2026-07-09 | colloquio | Esportazioni | Non distinguo documento finale e file di lavoro | Esportazione | Media | Ripetuta | Candidare | CML-xxx |

## 10. Regole per aprire una nuova slice

Aprire una nuova slice quando almeno una condizione è verificata:

- evidenza ad alta severità collegata a un compito essenziale;
- evidenza media ripetuta da almeno due docenti;
- difficoltà coerente con PM-03, PM-05, PM-06, PM-07 o PM-09;
- problema risolvibile con microcopy, guida, layout o comportamento locale;
- intervento compatibile con il perimetro CurManLight.

Non aprire una nuova slice quando:

- l'osservazione richiede account, backend, database o raccolta remota;
- l'osservazione è una preferenza estetica isolata;
- l'osservazione riguarda contenuti curricolari da validare collegialmente, non l'interfaccia;
- il problema non è riproducibile o non è collegato a un compito del test.

## 11. Mappatura verso macroprogrammi

| Evidenza prevalente | Macroprogramma |
|---|---|
| Orientamento iniziale, Home, percorsi | PM-03 Orientamento |
| Uso concreto, esportazioni, lavoro sul dispositivo | PM-05 Esperienza di lavoro |
| Guida, istruzioni, accompagnamento | PM-06 Accompagnamento |
| Lessico, coerenza, componenti e stati | PM-07 Uniformità |
| Metodo di raccolta, lettura e trasformazione evidenze | PM-09 Validazione con utenti |

## 12. Output del processo di intake

Al termine della lettura delle evidenze, produrre una breve sintesi con:

- numero di file raccolti;
- aree più segnalate;
- evidenze ad alta severità;
- evidenze ricorrenti;
- osservazioni archiviate;
- slice candidate;
- priorità proposta.

```text
CML User Validation Intake Summary

File analizzati:
Evidenze totali:
Aree più segnalate:
Evidenze ad alta severità:
Slice candidate:
Decisione:
```

## 13. Verdetto operativo

Questo modello rende possibile passare dalla prova pilota alla roadmap senza improvvisare interventi UI.

```text
CML_429_USER_VALIDATION_EVIDENCE_INTAKE_MODEL_PUSHED_REMOTE
```
