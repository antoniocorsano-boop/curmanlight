# CML-021 — Department Guided Teacher Proposal Import

## Stato iniziale

| Controllo | Esito |
|---|---|
| Branch | cml-008r-fix-markdown-decision-summary |
| HEAD | bcc505f |
| Working tree | Pulita |
| Runtime modificato | solo index.html |
| Deploy | Nessuno |

## Risultato funzionale

Il coordinatore può selezionare più file .cml dal computer. Ogni file viene letto localmente, classificato e validato. Le proposte valide sono raggruppate per disciplina e stato; file invalidi restano visibili nel riepilogo ma non alimentano la lista proposte.

Test integrato:

| Voce | Risultato |
|---|---:|
| File importati | 7 |
| File validi | 3 |
| File non riconoscibili | 4 |
| File da controllare | 5 |
| Proposte totali | 5 |
| Discipline | 2 |
| Proposte da controllare | 3 |

Sono stati verificati: file valido, duplicato, disciplina mista, tipo errato, JSON invalido, schema minimo mancante e file non-.cml.

## Sicurezza e rete

- Nessuna richiesta di rete generata dall'import.
- Nessuna Drive API o Apps Script.
- Nessuna autenticazione.
- Nessun endpoint reale aggiunto.
- Nessun token, chiave, ID Drive o credenziale.
- I valori importati sono escapati prima del rendering; payload HTML/XSS visualizzato come testo.
- Stato temporaneo solo in memoria; localStorage invariato.

## Regressioni

- Scarica proposta .cml: PASS, file teacher_proposal generato.
- Invia al Drive condiviso senza endpoint: PASS, messaggio di fallback invariato.
- Flusso docente e schema CML-019: invariati.
- PDF, sw.js, _headers e asset: invariati.
- Nessun deploy.

## Rischi e mitigazioni

| Rischio | Mitigazione |
|---|---|
| File errato | Estensione e fileType validati; escluso dalle proposte |
| JSON non valido | Errore esplicito, file escluso |
| Proposta incompleta | Chip senza testo/motivazione/fonte |
| Discipline miste | Avviso non bloccante |
| File duplicati | Fingerprint e segnalazione duplicato probabile |
| Docente senza CurManLight | File non riconoscibile, nessun blocco sui validi |
| Coordinatore importa file sbagliati | Riepilogo file e classificazione leggibile |

## QA interfaccia

Browser integrato non utilizzabile per policy sandbox mancante; QA svolto con Chromium headless locale tramite DevTools, senza nuove dipendenze. PASS a 390 e 1280 px, nessun overflow. Unico log: favicon.ico 404 preesistente.

## Verdetto

CML_021_DEPARTMENT_GUIDED_TEACHER_PROPOSAL_IMPORT_READY