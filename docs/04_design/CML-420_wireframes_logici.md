# CML-420 — Wireframe logici

## 1. Scopo

Rendere verificabile il prototipo CML-420 tramite wireframe testuali, senza produrre codice runtime.

I wireframe servono a valutare architettura, ordine delle informazioni, azioni primarie e cautele sulle fonti.

## 2. Wireframe Home desktop

```text
┌────────────────────────────────────────────────────────────┐
│ Ambiente curricolare d'istituto       [Impostazioni] [?]   │
├────────────────────────────────────────────────────────────┤
│ Curricolo, progettazione didattica, esportazioni, guida.   │
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
│ ESPORTAZIONE         │ RIFERIMENTI E GUIDA                 │
│ Documenti, report,   │ Fonti, normativa, processo, limiti  │
│ file .cml            │ e IN2012/IN2025                     │
│ [Scegli export]      │ [Apri riferimenti]                  │
└──────────────────────┴─────────────────────────────────────┘
```

### Verifica Home

- Quattro accessi immediati.
- Processo non dominante.
- Validazione umana visibile.
- Nessun riferimento a IN2025 come vigente.
- Nessun uso del termine Wiki.

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
├───────────────┬─────────────────────┬─────────────┬──────────────┤
│ Versione      │ Stato               │ Fonte       │ Azione       │
├───────────────┼─────────────────────┼─────────────┼──────────────┤
│ IN2012        │ vigente             │ SRC-001     │ Visualizza   │
│ IN2025        │ proposta            │ SRC-010?    │ Verifica     │
│ Istituto      │ non risolta         │ SRC-016     │ Cerca fonte  │
│ Revisione     │ sintesi finale      │ interna     │ Controlla    │
└───────────────┴─────────────────────┴─────────────┴──────────────┘

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

## 7. Wireframe Curricolo / Sintesi finale

```text
┌────────────────────────────────────────────────────────────┐
│ Curricolo > Sintesi finale                                │
├────────────────────────────────────────────────────────────┤
│ Stato: non disponibile / in preparazione / pronta          │
│ Avanzamento: esito tecnico del processo di revisione       │
│ Approvazione: esterna all'app                              │
├────────────────────────────────────────────────────────────┤
│ [Prepara sintesi] [Esporta materiale] [Registra avanzamento]│
└────────────────────────────────────────────────────────────┘
```

### Regole

- Sintesi finale non significa curricolo approvato.
- Approvato/adottato solo dopo atto esterno.

## 8. Wireframe Progettazione didattica

```text
┌────────────────────────────────────────────────────────────┐
│ Progettazione didattica                                   │
├────────────────────────────────────────────────────────────┤
│ Versione curricolare di riferimento: [seleziona]           │
│ Stato coerenza: coerente / da verificare / da riallineare  │
│ Nota: modulo da approfondire con CML-421A                  │
├──────────────────────┬─────────────────────────────────────┤
│ Parti dal curricolo  │ Programmazione annuale              │
│ [Apri]               │ [Prepara]                           │
├──────────────────────┼─────────────────────────────────────┤
│ UDA modello          │ Collegamenti curricolo              │
│ [Crea modello]       │ [Verifica collegamenti]             │
└──────────────────────┴─────────────────────────────────────┘
```

### Regole

- Progettazione autonoma, ma collegata al curricolo.
- Ogni documento deve indicare versione curricolare.
- Nessuna implementazione runtime prima dell'audit CML-421A.

## 9. Wireframe Esportazione

```text
┌────────────────────────────────────────────────────────────┐
│ Esportazione                                              │
├────────────────────────────────────────────────────────────┤
│ Che documento devi preparare?                             │
│                                                            │
│ [Per la classe]                                           │
│ - Programmazione annuale                                  │
│ - Programma svolto                                        │
│ - Relazione finale                                        │
│ - Sintesi percorso                                        │
│                                                            │
│ [Per la progettazione]                                    │
│ - UDA                                                     │
│ - Evidenze                                                │
│ - Rubriche                                                │
│ - Collegamenti curricolo                                  │
│                                                            │
│ [Per il curricolo]                                        │
│ - Estratto disciplinare                                   │
│ - Documento curricolo                                     │
│ - Fonti e versioni                                        │
│ - Sintesi finale                                          │
│                                                            │
│ [Per il processo]                                         │
│ - Proposta docente .cml                                   │
│ - Esito dipartimentale                                    │
│ - Report referente                                        │
│ - Materiale per discussione collegiale                    │
│                                                            │
│ [Archivio e sicurezza]                                    │
│ - Copia locale                                            │
│ - Pacchetto classe                                        │
│ - Pacchetto dipartimento                                  │
│ - Backup .cml                                             │
├────────────────────────────────────────────────────────────┤
│ Nota: usa il Contesto di lavoro impostato in Impostazioni. │
│ [Prepara esportazione]                                    │
└────────────────────────────────────────────────────────────┘
```

### Regole

- Esportazione parte dal documento scolastico, non dal formato.
- Contesto di lavoro nelle Impostazioni, non dentro Esportazione.
- Nessuna implementazione runtime prima dell'audit CML-421B.

## 10. Wireframe Impostazioni / Contesto di lavoro

```text
┌────────────────────────────────────────────────────────────┐
│ Impostazioni > Contesto di lavoro                         │
├────────────────────────────────────────────────────────────┤
│ Anno scolastico                                           │
│ Istituto                                                  │
│ Ordine di scuola                                          │
│ Plesso / sede                                             │
│ Ruolo                                                     │
│ Disciplina o ambito                                       │
│ Classi assegnate                                          │
│ Versione curricolare di riferimento                       │
├────────────────────────────────────────────────────────────┤
│ [Salva contesto locale]                                   │
└────────────────────────────────────────────────────────────┘
```

### Regole

- Funzione globale.
- Alimenta Curricolo, Progettazione ed Esportazione.
- Non cambia fonti ufficiali.

## 11. Wireframe Riferimenti e guida

```text
┌────────────────────────────────────────────────────────────┐
│ Riferimenti e guida                                       │
├────────────────────────────────────────────────────────────┤
│ [Fonti e normativa]                                      │
│ [IN2012 e IN2025]                                        │
│ [Ruoli e processo]                                       │
│ [Uso e limiti]                                           │
└────────────────────────────────────────────────────────────┘
```

### Contenuti obbligatori

```text
IN2012: riferimento normativo confermato.
IN2025: materiale/proposta da verificare.
Fonti istituto: repo-defined, verifica esterna pendente.
Validazione: sempre umana.
Approvazione/adottabilità: fuori app.
```

## 12. Wireframe mobile

```text
┌────────────────────────────┐
│ Ambiente curricolare       │
│ Stato: consultazione       │
│ [Impostazioni]             │
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
│ Esporta   | Guida          │
└────────────────────────────┘
```

### Regole mobile

- Bottom bar con quattro ambienti.
- Sotto-voci dentro menu contestuale.
- Stato fonte/versione breve ma visibile.
- Una sola azione primaria per vista.
- Impostazioni raggiungibili dalla topbar.

## 13. Sequenza test navigazionale aggiornata

### Scenario docente

```text
Home → Curricolo → Consulta → Progettazione → Esportazione → Riferimenti e guida
```

### Scenario dipartimento

```text
Home → Curricolo → Processo aggiornamento → Esportazione per processo → Riferimenti e guida / Ruoli e processo
```

### Scenario referente

```text
Home → Curricolo → Fonti/Versioni → Processo → Report referente → Riferimenti e guida / Fonti e normativa
```

### Scenario dirigente/governance

```text
Home → Curricolo → Versioni → Fonti → Esportazione report → Riferimenti e guida / Uso e limiti
```

## 14. Decisione wireframe

I wireframe sono allineati alle correzioni CML-421C.

Restano necessari:

```text
CML-421A — Didactic Design Needs Audit
CML-421B — School Document Export Needs Audit
```

prima di qualsiasi scelta runtime.

## Verdict

```text
CML_420_LOGICAL_WIREFRAMES_TERMINOLOGY_ALIGNED_BY_CML_421C
```
