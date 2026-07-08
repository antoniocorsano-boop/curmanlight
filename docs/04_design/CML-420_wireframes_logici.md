# CML-420 — Wireframe logici

## 1. Scopo

Rendere verificabile il prototipo CML-420 tramite wireframe testuali, senza produrre codice runtime.

I wireframe servono a valutare architettura, ordine delle informazioni, azioni primarie e cautele sulle fonti.

## 2. Wireframe Home desktop

```text
┌────────────────────────────────────────────────────────────┐
│ Ambiente curricolare d'istituto                 [Wiki] [?] │
├────────────────────────────────────────────────────────────┤
│ Curricolo, progettazione didattica, esportazioni e wiki.   │
│                                                            │
│ Stato: consultazione disponibile                           │
│ Processo aggiornamento: non attivo / attivo                │
│ Validazione: sempre umana                                  │
├──────────────────────┬─────────────────────────────────────┤
│ CURRICOLO            │ PROGETTAZIONE DIDATTICA             │
│ Consulta, estrai,    │ Evidenze, programmazioni, UDA       │
│ fonti e versioni     │ collegate al curricolo              │
│ [Apri curricolo]     │ [Apri progettazione]                │
├──────────────────────┼─────────────────────────────────────┤
│ ESPORTAZIONE         │ WIKI DEL CURRICOLO                  │
│ Documenti, report,   │ Fonti, ruoli, processo, limiti      │
│ file .cml            │ e IN2012/IN2025                     │
│ [Scegli export]      │ [Apri wiki]                         │
└──────────────────────┴─────────────────────────────────────┘
```

### Verifica Home

- Quattro accessi immediati.
- Processo non dominante.
- Validazione umana visibile.
- Nessun riferimento a IN2025 come vigente.

## 3. Wireframe Curricolo / Consulta

```text
┌────────────────────────────────────────────────────────────┐
│ Curricolo > Consulta                                      │
│ Fonte/stato: Indicazioni 2012 vigente / 2025 proposta      │
├────────────────────────────────────────────────────────────┤
│ [Disciplina/Campo] [Ordine] [Classe/Fascia] [Versione]     │
├────────────────────────────────────────────────────────────┤
│ Nucleo: ...                                                │
│ Traguardi: ...                                             │
│ Obiettivi: ...                                             │
│ Evidenze: ...                                              │
├────────────────────────────────────────────────────────────┤
│ Fonte: ...                                                 │
│ Stato: vigente / proposta da verificare                    │
│ [Copia estratto] [Vai a progettazione] [Esporta]           │
└────────────────────────────────────────────────────────────┘
```

### Regole

- Stato e fonte non devono essere nascosti.
- Se contenuto 2025: usare sempre etichetta prudente.

## 4. Wireframe Curricolo / Fonti

```text
┌────────────────────────────────────────────────────────────┐
│ Curricolo > Fonti                                         │
├────────────────────────────────────────────────────────────┤
│ [Normative confermate]                                    │
│ - D.M. 254/2012 — fonte primaria confermata               │
│                                                            │
│ [Ministeriali candidate]                                  │
│ - IN2025 — fonte candidata, verifica pendente              │
│                                                            │
│ [Istituto — repo-defined]                                 │
│ - Scuola in Chiaro                                        │
│ - Sito istituto                                           │
│ - PTOF                                                    │
│ - RAV                                                     │
│                                                            │
│ [Non risolte]                                             │
│ - Curricolo verticale pubblicato                           │
└────────────────────────────────────────────────────────────┘
```

### Regole

- Distinguere fonte confermata, candidata, repo-defined, non risolta.
- Ogni fonte apre una scheda con uso consentito e cautela.

## 5. Wireframe Curricolo / Versioni

```text
┌────────────────────────────────────────────────────────────┐
│ Curricolo > Versioni                                      │
├───────────────┬──────────────┬─────────────┬──────────────┤
│ Versione      │ Stato        │ Fonte       │ Azione       │
├───────────────┼──────────────┼─────────────┼──────────────┤
│ IN2012        │ vigente      │ SRC-001     │ Visualizza   │
│ IN2025        │ proposta     │ SRC-010?    │ Verifica     │
│ Istituto      │ non risolta  │ SRC-016     │ Cerca fonte  │
└───────────────┴──────────────┴─────────────┴──────────────┘

Nota: nessuna adozione senza atto esterno.
```

## 6. Wireframe Curricolo / Processo aggiornamento

```text
┌────────────────────────────────────────────────────────────┐
│ Curricolo > Processo aggiornamento                         │
│ Stato processo: non attivo / attivo / chiuso da registrare │
├────────────────────────────────────────────────────────────┤
│ Docente       → proposta .cml                              │
│ Dipartimento  → esito dipartimentale                       │
│ Referente     → sintesi e controllo coerenza               │
│ Organi esterni→ deliberazione fuori app                    │
├────────────────────────────────────────────────────────────┤
│ [Importa proposta] [Registra esito] [Esporta report]       │
└────────────────────────────────────────────────────────────┘
```

### Regole

- Nessun pulsante `approva curricolo`.
- Usare `registra avanzamento`, `prepara report`, `esporta materiale`.

## 7. Wireframe Progettazione didattica

```text
┌────────────────────────────────────────────────────────────┐
│ Progettazione didattica                                   │
├────────────────────────────────────────────────────────────┤
│ Versione curricolare di riferimento: [seleziona]           │
│ Stato coerenza: coerente / da verificare / da riallineare  │
├──────────────────────┬─────────────────────────────────────┤
│ Evidenze             │ Programmazione annuale              │
│ [Apri]               │ [Prepara]                           │
├──────────────────────┼─────────────────────────────────────┤
│ UDA modello          │ Collegamenti curricolo              │
│ [Crea modello]       │ [Verifica collegamenti]             │
└──────────────────────┴─────────────────────────────────────┘
```

### Regole

- Progettazione autonoma, ma collegata al curricolo.
- Ogni documento deve indicare versione curricolare.

## 8. Wireframe Esportazione / Per scopo

```text
┌────────────────────────────────────────────────────────────┐
│ Esportazione > Per scopo                                  │
├────────────────────────────────────────────────────────────┤
│ Che cosa devi ottenere?                                   │
│                                                            │
│ ( ) Documento curricolo                                   │
│ ( ) Estratto disciplinare                                 │
│ ( ) Programmazione annuale                                │
│ ( ) UDA modello                                           │
│ ( ) Proposta docente .cml                                 │
│ ( ) Esito dipartimentale                                  │
│ ( ) Report referente                                      │
│ ( ) Materiale per discussione collegiale                  │
│ ( ) Copia di sicurezza                                    │
├────────────────────────────────────────────────────────────┤
│ Stato fonti: ...                                          │
│ Uso consentito: materiale di lavoro / documento verificato │
│ [Prepara esportazione]                                    │
└────────────────────────────────────────────────────────────┘
```

## 9. Wireframe Esportazione / Per ruolo

```text
┌────────────────────────────────────────────────────────────┐
│ Esportazione > Per ruolo                                  │
├────────────────────────────────────────────────────────────┤
│ [Docente]       Estratti, UDA, proposta .cml               │
│ [Dipartimento]  Confronto, esito, sintesi                  │
│ [Referente]     Report gruppo curricolo, decisioni aperte  │
│ [Dirigente]     Stato avanzamento, materiali per organi    │
└────────────────────────────────────────────────────────────┘
```

## 10. Wireframe Wiki del curricolo

```text
┌────────────────────────────────────────────────────────────┐
│ Wiki del curricolo                                        │
├────────────────────────────────────────────────────────────┤
│ [Come si usa]                                             │
│ [IN2012 e IN2025]                                         │
│ [Fonti]                                                   │
│ [Ruoli]                                                   │
│ [Processo]                                                │
│ [Lessico]                                                 │
│ [Limiti dello strumento]                                  │
└────────────────────────────────────────────────────────────┘
```

### Contenuti obbligatori Wiki

```text
IN2012: riferimento normativo confermato.
IN2025: materiale/proposta da verificare.
Fonti istituto: repo-defined, verifica esterna pendente.
Validazione: sempre umana.
Approvazione/adottabilità: fuori app.
```

## 11. Wireframe mobile

```text
┌────────────────────────────┐
│ Ambiente curricolare       │
│ Stato: consultazione       │
├────────────────────────────┤
│ Card vista corrente        │
│ Titolo                     │
│ Fonte/Stato                │
│ Azione primaria            │
├────────────────────────────┤
│ Contenuto sintetico        │
│ ...                        │
├────────────────────────────┤
│ Curricolo | Progetta       │
│ Esporta   | Wiki           │
└────────────────────────────┘
```

### Regole mobile

- Bottom bar con quattro ambienti.
- Sotto-voci dentro menu contestuale.
- Stato fonte/versione breve ma visibile.
- Una sola azione primaria per vista.

## 12. Sequenza test navigazionale

### Scenario docente

```text
Home → Curricolo → Consulta → Progettazione → Esportazione → Wiki
```

### Scenario dipartimento

```text
Home → Curricolo → Processo aggiornamento → Esportazione per ruolo → Wiki processo
```

### Scenario referente

```text
Home → Curricolo → Fonti/Versioni → Processo → Report referente → Wiki ruoli
```

### Scenario dirigente/governance

```text
Home → Curricolo → Versioni → Fonti → Esportazione report → Wiki limiti
```

## 13. Decisione wireframe

I wireframe sono sufficienti per passare a un test su carta o prototipo non runtime.

Non sono sufficienti per implementazione diretta senza ulteriore verifica utente.

## Verdict

```text
CML_420_LOGICAL_WIREFRAMES_READY
```
