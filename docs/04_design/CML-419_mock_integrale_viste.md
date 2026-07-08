# CML-419 — Mock integrale delle viste importanti

## 1. Obiettivo

Definire il mock logico, di design e di usabilità per tutte le viste importanti dell'ambiente curricolare d'istituto.

Il documento non produce codice e non vincola ancora il runtime. Serve a guidare la fase successiva di prototipazione verificabile.

## 2. Principio di architettura informativa

La navigazione principale deve rispondere a quattro domande dell'utente:

| Domanda | Ambiente |
|---|---|
| Che cosa dice il curricolo? | Curricolo |
| Come progetto attività didattiche coerenti? | Progettazione didattica |
| Che cosa devo esportare o consegnare? | Esportazione |
| Come funziona il sistema e qual è il quadro culturale/normativo? | Wiki del curricolo |

## 3. Home

### Scopo

La Home deve orientare, non spiegare tutto.

### Contenuti obbligatori

- Titolo: Ambiente curricolare d'istituto.
- Quattro accessi principali:
  - Curricolo;
  - Progettazione didattica;
  - Esportazione;
  - Wiki del curricolo.
- Stato sintetico del curricolo:
  - vigente;
  - in revisione;
  - aggiornamento attivo/non attivo.
- Ultima area visitata o azione consigliata.
- Principi sempre visibili:
  - dati locali;
  - nessun invio automatico;
  - validazione umana.

### Mock logico

```text
[Ambiente curricolare d'istituto]
Consulta, progetta, esporta e orienta il lavoro sul curricolo verticale.

[Curricolo] [Progettazione didattica]
[Esportazione] [Wiki del curricolo]

Stato curricolo: vigente / in revisione / proposta
Processo aggiornamento: non attivo / attivo
```

### Criteri di usabilità

- L'utente deve capire in pochi secondi i quattro ambienti.
- Il processo non deve appesantire la Home.
- L'utente deve sapere subito se sta consultando un curricolo vigente o un processo attivo.

## 4. Curricolo / Consulta

### Scopo

Consentire la lettura ordinata del curricolo.

### Contenuti obbligatori

- Selettore disciplina/campo di esperienza.
- Selettore ordine.
- Selettore classe/fascia.
- Nuclei.
- Traguardi.
- Obiettivi.
- Evidenze/criteri quando disponibili.
- Fonte e stato della voce.

### Mock logico

```text
Curricolo > Consulta

[Disciplina] [Ordine] [Classe/Fascia]

Stato: vigente
Fonte: Indicazioni 2012 / materiale 2025 / elaborazione istituto

[Nucleo]
[Traguardi]
[Obiettivi]
[Evidenze]
```

### Criteri di usabilità

- Deve essere sempre chiaro cosa è vigente e cosa è proposta.
- La fonte deve essere visibile ma non invasiva.
- La lettura deve restare agevole anche su mobile.

## 5. Curricolo / Estrai

### Scopo

Permettere l'estrazione di parti del curricolo per documenti, verbali, programmazioni, dipartimenti.

### Contenuti obbligatori

- Estrai disciplina.
- Estrai ordine.
- Estrai classe/fascia.
- Estrai nuclei.
- Estrai traguardi/obiettivi.
- Copia testo.
- Scarica estratto.

### Mock logico

```text
Curricolo > Estrai

Che cosa vuoi estrarre?
( ) Disciplina completa
( ) Ordine scolastico
( ) Classe/Fascia
( ) Nucleo
( ) Traguardi
( ) Obiettivi

[Anteprima]
[Copia] [Scarica]
```

## 6. Curricolo / Fonti

### Scopo

Raccogliere fonti ufficiali, sezioni generali e riferimenti di contesto.

### Contenuti obbligatori

- Indicazioni 2012.
- Materiali/proposte IN2025.
- Premessa.
- Profilo dello studente.
- Valutazione.
- Inclusione.
- Continuità.
- Orientamento.
- Note di cautela sullo stato delle fonti.

### Criteri di usabilità

- Distinguere fonte normativa da materiale di lavoro.
- Evitare che una proposta sia percepita come testo adottato.

## 7. Curricolo / Definitivo

### Scopo

Mostrare la versione consolidata/adottata quando disponibile.

### Stati possibili

- Non ancora disponibile.
- In preparazione.
- Approvata esternamente, da registrare.
- Adottata.

### Mock logico

```text
Curricolo > Definitivo

Stato documento: non disponibile / in preparazione / adottato
Atto: numero, data, organo competente

[Consulta documento]
[Esporta documento]
```

## 8. Curricolo / Processo aggiornamento

### Scopo

Mostrare il processo solo quando attivo.

### Pipeline

```text
Docente → Dipartimento → Referente → Organi collegiali → Registrazione avanzamento
```

### Contenuti obbligatori

- Stato fase corrente.
- Proposte docente.
- Esiti dipartimentali.
- Sintesi referente.
- Avvisi e punti da chiarire.
- Collegamento a esportazione di report.

### Mock logico

```text
Curricolo > Processo aggiornamento

Processo: attivo
Fase corrente: confronto dipartimentale

[Docente] proposta .cml
[Dipartimento] esito dipartimentale
[Referente] sintesi e controllo coerenza
[Organi collegiali] atto esterno

Decisioni aperte: n
Decisioni concluse: n
Da chiarire: n
```

### Criteri di usabilità

- Il processo deve essere comprensibile anche a utenti non tecnici.
- Nessun pulsante deve dare l'impressione di approvare formalmente il curricolo.

## 9. Curricolo / Versioni

### Scopo

Gestire stati, storico e tracciabilità del curricolo.

### Contenuti obbligatori

- Versione.
- Stato.
- Data.
- Fonte.
- Atto.
- Note.
- Storico transizioni.
- Registra avanzamento.
- Esporta report versione.

### Mock logico

```text
Curricolo > Versioni

| Versione | Stato | Data | Atto | Note | Azioni |
| 2012 | vigente | ... | ... | ... | Visualizza |
| 2025 lavoro | in revisione | ... | ... | ... | Registra avanzamento |

[Storico transizioni]
```

## 10. Progettazione didattica / Evidenze

### Scopo

Collegare competenze, evidenze osservabili, criteri e attività.

### Contenuti obbligatori

- Disciplina.
- Classe/fascia.
- Competenza.
- Evidenza.
- Criterio.
- Collegamento curricolare.

## 11. Progettazione didattica / Programmazione annuale

### Scopo

Supportare la costruzione di programmazioni annuali coerenti con il curricolo.

### Contenuti obbligatori

- Disciplina.
- Classe.
- Periodizzazione.
- Nuclei.
- Obiettivi.
- Attività.
- Valutazione.
- Collegamento a versione curricolare.

## 12. Progettazione didattica / UDA modello

### Scopo

Generare o adattare una UDA modello a partire dal curricolo.

### Contenuti obbligatori

- Titolo UDA.
- Classe/fascia.
- Durata.
- Competenze.
- Traguardi/obiettivi collegati.
- Attività.
- Evidenze.
- Valutazione.
- Esportazione.

## 13. Progettazione didattica / Collegamenti curricolo

### Scopo

Rendere esplicito a quale versione e a quali elementi curricolari si collega ogni progettazione.

### Contenuti obbligatori

- Versione curricolare di riferimento.
- Stato versione.
- Motivazione scelta versione.
- Traguardi/obiettivi collegati.
- Segnalazioni di incoerenza.
- Riallineamento necessario.

### Mock logico

```text
Progettazione > Collegamenti curricolo

Progettazione: UDA Energia
Versione curricolare: 2012 vigente
Stato: coerente / da riallineare / versione in revisione

[Elementi collegati]
[Azioni: riallinea, esporta, modifica]
```

## 14. Progettazione didattica / Riallineamento

### Scopo

Segnalare progettazioni collegate a versioni superate o in revisione.

### Stati

- Coerente con versione vigente.
- Versione in revisione.
- Versione superata.
- Riallineamento consigliato.

## 15. Esportazione / Per scopo

### Scopo

Guidare l'utente partendo dal risultato desiderato.

### Mock logico

```text
Esportazione > Per scopo

Che cosa devi ottenere?
( ) Documento curricolo
( ) Estratto disciplinare
( ) UDA
( ) Programmazione annuale
( ) Proposta docente
( ) Esito dipartimentale
( ) Report referente
( ) Materiale per Collegio
( ) Copia di sicurezza

[Prepara esportazione]
```

## 16. Esportazione / Per ruolo

### Scopo

Mostrare le esportazioni disponibili per docente, dipartimento, referente, dirigente/governance.

### Ruoli

- Docente: estratti, UDA, proposta `.cml`.
- Dipartimento: esito dipartimentale, sintesi, report confronto.
- Referente: report gruppo curricolo, quadro per disciplina, decisioni aperte.
- Dirigente/governance: report stato avanzamento, documenti per organi collegiali.

## 17. Esportazione / Per area

### Aree

- Curricolo.
- Progettazione.
- Processo.
- Wiki/materiali di supporto.
- Sicurezza.

## 18. Esportazione / File .cml

### Scopo

Chiarire natura, uso e limiti dei file di lavoro CurManLight.

### Tipi principali

- `teacher_proposal`.
- `department_outcome`.
- eventuali copie di sicurezza.

### Criteri di usabilità

- L'utente deve capire a chi consegnare il file.
- Deve essere chiaro che il file resta locale.

## 19. Esportazione / Report

### Report richiesti

- Confronto modifiche.
- Sintesi dipartimentale.
- Report referente.
- Quadro decisioni aperte.
- Report versione.
- Materiale per discussione collegiale.

## 20. Esportazione / Copia di sicurezza

### Scopo

Consentire salvataggio locale prudente.

### Criteri

- Linguaggio non tecnico.
- Avviso su dati personali.
- Nessun invio automatico.

## 21. Wiki del curricolo / Come si usa

### Contenuti

- Primo accesso.
- Quattro ambienti.
- Percorso operativo.
- Ruoli.
- Limiti.

## 22. Wiki / IN2012 e IN2025

### Contenuti

- Che cosa sono le Indicazioni 2012.
- Come trattare IN2025 nel sistema.
- Differenza tra vigente, proposta, revisione e adozione.
- Avvertenze di uso scolastico.

## 23. Wiki / Curricolo verticale

### Contenuti

- Definizione.
- Campi di esperienza.
- Discipline.
- Ordini.
- Traguardi.
- Obiettivi.
- Evidenze.
- Continuità.

## 24. Wiki / Ruoli

### Contenuti

- Docente.
- Dipartimento.
- Referente.
- Dirigente.
- Collegio.
- Consiglio di Istituto.

## 25. Wiki / Processo

### Contenuti

- Quando si attiva.
- Come si raccolgono proposte.
- Come si validano in dipartimento.
- Come il referente prepara la sintesi.
- Come si registra l'avanzamento.

## 26. Wiki / Progettazione didattica

### Contenuti

- Evidenze.
- Programmazione annuale.
- UDA.
- Collegamento a curricolo.
- Riallineamento.

## 27. Wiki / Esportazioni

### Contenuti

- Cosa esportare.
- Quando esportare.
- A chi consegnare.
- Differenza tra documento, report e file `.cml`.

## 28. Wiki / Lessico

### Contenuti minimi

- Curricolo vigente.
- Versione in revisione.
- Proposta.
- Approvata.
- Adottata.
- Superata.
- Validazione dipartimentale.
- Registrazione avanzamento.
- File di lavoro CurManLight.

## 29. Wiki / Domande frequenti

### Domande minime

- Posso usare CML senza dati personali?
- Chi approva il curricolo?
- Che cosa significa IN2025 nel sistema?
- Dove trovo la versione vigente?
- Dove preparo una UDA?
- Che file devo consegnare al dipartimento?

## 30. Wiki / Limiti dello strumento

### Contenuti

- Non approva.
- Non delibera.
- Non sostituisce organi collegiali.
- Non invia dati automaticamente.
- Non archivia atti ufficiali.
- Richiede verifica umana.

## 31. Viste per ruolo

### 31.1 Docente

- Consulta curricolo.
- Estrae materiali.
- Progetta UDA/programmazione.
- Propone modifiche se processo attivo.
- Esporta proposta o materiale didattico.

### 31.2 Dipartimento

- Importa proposte.
- Confronta.
- Riformula.
- Produce esito dipartimentale.
- Esporta sintesi.

### 31.3 Referente

- Importa esiti.
- Verifica coerenza.
- Produce report.
- Registra avanzamento.
- Prepara materiali per organi competenti.

### 31.4 Dirigente / Governance

- Consulta stato.
- Controlla avanzamento.
- Legge report.
- Usa documenti per processi esterni.

## 32. Vista mobile

### Requisiti

- Quattro accessi principali in barra inferiore o menu essenziale.
- Sottoazioni contestuali.
- Una colonna.
- Pannello stato compatto.
- Azione successiva sempre visibile.
- Esportazione guidata.
- Wiki facilmente accessibile.

## 33. Griglia di valutazione delle viste

| Criterio | Domanda |
|---|---|
| Chiarezza | L'utente capisce dove si trova? |
| Scopo | La vista risponde a un compito reale? |
| Azione successiva | È chiaro cosa fare dopo? |
| Carico cognitivo | Ci sono troppe informazioni? |
| Coerenza scolastica | Il linguaggio è adatto alla scuola? |
| Governance | Sono chiari ruoli e limiti? |
| Compatibilità IN2012/IN2025 | È chiaro cosa è vigente e cosa è proposta? |
| Mobile | La vista funziona su smartphone? |

## 34. Decisione di mock

Il mock successivo deve essere prodotto come prototipo navigabile o documento visivo strutturato, ma non deve ancora introdurre logica runtime profonda.

Priorità:

1. navigazione principale;
2. Home a quattro accessi;
3. struttura Curricolo;
4. struttura Progettazione;
5. centro Esportazione;
6. Wiki del curricolo;
7. viste di ruolo;
8. mobile.

## Verdict

```text
CML_419_FULL_VIEW_LOGICAL_DESIGN_MOCK_MAP_READY
```
