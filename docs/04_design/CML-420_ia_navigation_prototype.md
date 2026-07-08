# CML-420 — Prototipo IA e navigazione principale

## 1. Scopo

Definire il prototipo informativo e navigazionale dell'Ambiente curricolare d'istituto.

Il documento non introduce codice runtime. Serve come base verificabile per successivi mock visuali, test utente e solo dopo eventuale implementazione.

## 2. Principio UX

L'utente deve capire subito quale ambiente usare in base al proprio compito:

| Domanda utente | Ambiente |
|---|---|
| Che cosa dice il curricolo? | Curricolo |
| Come progetto attività coerenti? | Progettazione didattica |
| Che cosa devo scaricare o consegnare? | Esportazione |
| Dove trovo fonti, spiegazioni, ruoli e limiti? | Riferimenti e guida |

## 3. Home prototipo

### 3.1 Scopo Home

La Home orienta e non deve contenere tutto il processo.

### 3.2 Struttura Home

```text
[Ambiente curricolare d'istituto]
Curricolo, progettazione didattica, esportazioni, riferimenti e guida.

[Curricolo]
Consulta, estrai e verifica fonti, versioni e processo di aggiornamento.

[Progettazione didattica]
Prepara evidenze, programmazioni e UDA collegate al curricolo.

[Esportazione]
Scarica documenti, report e file di lavoro per scopo e ruolo.

[Riferimenti e guida]
Consulta fonti, IN2012/IN2025, ruoli, processo e limiti.

[Stato sintetico]
- Curricolo: consultazione disponibile
- Processo aggiornamento: non attivo / attivo
- Fonti: alcune fonti istituto definite nel repo; verifica esterna pendente
- Validazione: sempre umana
```

### 3.3 Azioni Home

| Card | Azione primaria | Azione secondaria |
|---|---|---|
| Curricolo | Apri curricolo | Vedi fonti |
| Progettazione didattica | Apri progettazione | Vedi collegamenti curricolo |
| Esportazione | Scegli cosa esportare | Vedi file `.cml` |
| Riferimenti e guida | Apri riferimenti | Leggi IN2012/IN2025 |

## 4. Curricolo

### 4.1 Sotto-viste

```text
Curricolo
├─ Consulta
├─ Estrai
├─ Fonti
├─ Versioni
├─ Processo aggiornamento
└─ Sintesi finale
```

### 4.2 Regole Curricolo

- Mostrare sempre fonte e stato quando un contenuto deriva da 2012/2025.
- Non presentare IN2025 come vigente.
- Non presentare approvato/adottato senza fonte o atto esterno.
- Processo aggiornamento visibile solo se attivo.
- La Sintesi finale è esito tecnico del lavoro di revisione, non approvazione collegiale.

### 4.3 Stato fonte/versione

Esempi di microcopy:

```text
Indicazioni Nazionali 2012 — riferimento normativo confermato tramite D.M. 254/2012.
```

```text
Indicazioni 2025 — materiale/proposta da verificare; non sostituisce automaticamente il curricolo vigente.
```

```text
Fonte istituto definita nel repository; verifica esterna pendente.
```

```text
La validazione resta umana. L'app prepara materiali di lavoro, non approva il curricolo.
```

### 4.4 Curricolo / Consulta

```text
[Curricolo > Consulta]

Selettori:
- Disciplina/Campo
- Ordine
- Classe/Fascia
- Versione/Stato

Contenuto:
- Nuclei
- Traguardi
- Obiettivi
- Evidenze
- Fonte
- Stato

Azioni:
- Copia estratto
- Vai a Progettazione
- Vai a Esportazione
```

### 4.5 Curricolo / Fonti

```text
[Curricolo > Fonti]

Sezioni:
- Fonti normative confermate
- Fonti ministeriali candidate
- Fonti istituto repo-defined
- Fonti locali non risolte
- Materiali di lavoro

Azioni:
- Apri scheda fonte
- Copia riferimento
- Vai a Riferimenti e guida / Fonti e normativa
```

### 4.6 Curricolo / Versioni

```text
[Curricolo > Versioni]

Tabella:
- Versione
- Stato
- Fonte
- Data
- Atto / riferimento
- Note

Esempi stati:
- vigente
- in revisione
- proposta
- sintesi finale pronta
- approvata esternamente
- adottata
- superata
```

### 4.7 Curricolo / Processo aggiornamento

```text
[Curricolo > Processo aggiornamento]

Visibile solo se attivo.

Pipeline:
Docente → Dipartimento → Referente → Organi collegiali → Registrazione avanzamento

Azioni:
- Importa proposta docente
- Registra esito dipartimento
- Prepara sintesi referente
- Esporta report
```

### 4.8 Curricolo / Sintesi finale

```text
[Curricolo > Sintesi finale]

Stati possibili:
- Non disponibile
- In preparazione
- Sintesi finale pronta
- In attesa di approvazione esterna
- Approvato esternamente, da registrare
- Adottato, se atto esterno presente

Nota:
La Sintesi finale raccoglie l'esito tecnico del processo di revisione.
Non equivale ad approvazione collegiale.
Non dichiarare adottato senza fonte o atto.
```

## 5. Progettazione didattica

### 5.1 Sotto-viste

```text
Progettazione didattica
├─ Evidenze
├─ Programmazione annuale
├─ UDA modello
└─ Collegamenti curricolo
```

### 5.2 Regole Progettazione

- Ogni progettazione deve indicare versione curricolare di riferimento.
- Le UDA non devono apparire come documenti istituzionali approvati.
- Se la versione curricolare è in revisione, la progettazione va marcata come da verificare/riallineare.
- L'area richiede audit dedicato CML-421A prima di qualsiasi runtime.

### 5.3 Struttura vista provvisoria

```text
[Progettazione didattica]

Azioni principali provvisorie:
- Parti dal curricolo
- Prepara programmazione annuale
- Crea UDA modello
- Verifica collegamento al curricolo

Pannello stato:
Versione curricolare di riferimento: 2012 vigente / 2025 proposta / altra
Coerenza: coerente / da verificare / da riallineare

Nota:
Modulo da approfondire con CML-421A.
```

## 6. Esportazione

### 6.1 Sotto-viste provvisorie

```text
Esportazione
├─ Per la classe
├─ Per la progettazione
├─ Per il curricolo
├─ Per il processo
└─ Archivio e sicurezza
```

### 6.2 Regola chiave

L'utente non deve partire dal formato, ma dal bisogno scolastico.

```text
Che documento devi preparare?
Per quale classe, ruolo o fase di lavoro?
```

### 6.3 Contesto di lavoro

Il Contesto di lavoro non appartiene a Esportazione.

Sta in:

```text
Impostazioni / Contesto di lavoro
```

Esportazione usa il contesto già configurato. Se manca, mostra:

```text
Per generare documenti per classe devi prima completare il Contesto di lavoro nelle Impostazioni.
```

### 6.4 Esportazione aggiornata dopo test

```text
[Esportazione]

Per la classe:
- Programmazione annuale
- Programma svolto
- Relazione finale
- Sintesi percorso

Per la progettazione:
- UDA
- Evidenze
- Rubriche
- Collegamenti curricolo

Per il curricolo:
- Estratto disciplinare
- Documento curricolo
- Fonti e versioni
- Sintesi finale

Per il processo:
- Proposta docente .cml
- Esito dipartimentale
- Report referente
- Materiale per discussione collegiale

Archivio e sicurezza:
- Copia locale
- Pacchetto classe
- Pacchetto dipartimento
- Backup .cml
```

### 6.5 Avvertenze export

Ogni export deve indicare:

- stato della fonte;
- stato della versione;
- uso consentito;
- necessità di verifica umana;
- nessun valore deliberativo automatico.

L'area richiede audit dedicato CML-421B prima di qualsiasi runtime.

## 7. Riferimenti e guida

### 7.1 Sotto-viste compatte

```text
Riferimenti e guida
├─ Fonti e normativa
├─ IN2012 e IN2025
├─ Ruoli e processo
└─ Uso e limiti
```

### 7.2 Regole Riferimenti e guida

- Deve spiegare senza tecnicismi inutili.
- Deve contenere le cautele su fonti e versioni.
- Deve esplicitare ciò che il sistema non fa.
- Deve restare compatta.

### 7.3 Contenuti prioritari

```text
Fonti e normativa: fonti confermate, repo-defined, candidate e non risolte.
IN2012 e IN2025: cosa è vigente e cosa è proposta/materiale da verificare.
Ruoli e processo: docente, dipartimento, referente, dirigente/organi collegiali.
Uso e limiti: dati locali, validazione umana, cosa l'app non fa.
```

## 8. Navigazione desktop

### 8.1 Struttura consigliata

```text
Header compatto
├─ Logo/nome ambiente
├─ Stato lavoro
├─ Azioni rapide
├─ Impostazioni
└─ Riferimenti e guida

Impostazioni
├─ Contesto di lavoro
├─ Preferenze esportazione
├─ Dati locali
└─ Accessibilità

Navigazione principale
├─ Curricolo
├─ Progettazione
├─ Esportazione
└─ Riferimenti e guida

Area contenuto
├─ Titolo vista
├─ Stato/fonte
├─ Azione primaria
└─ Contenuto
```

### 8.2 Regole desktop

- Non mostrare troppe sotto-voci sempre aperte.
- Mostrare sotto-navigazione solo dentro l'ambiente scelto.
- Mantenere visibile lo stato fonte/versione dove serve.
- Tenere il Contesto di lavoro nelle Impostazioni.

## 9. Navigazione mobile

### 9.1 Struttura consigliata

```text
Topbar compatta
- Nome ambiente
- Stato breve
- Impostazioni

Bottom bar
- Curricolo
- Progetta
- Esporta
- Guida

Contenuto a una colonna
- Card sintetiche
- Azione primaria fissa o evidente
```

### 9.2 Regole mobile

- Quattro accessi sempre raggiungibili.
- Testi brevi.
- Nessun pannello laterale obbligatorio.
- Riferimenti e guida sempre raggiungibile.
- Export guidato per documento scolastico.

## 10. Stato di processo

Il processo di aggiornamento può avere tre stati globali:

```text
non_attivo
attivo
chiuso_da_registrare
```

Visualizzazione consigliata:

| Stato | Home | Curricolo |
|---|---|---|
| non_attivo | badge discreto | sezione nascosta o informativa |
| attivo | badge visibile | sezione Processo attiva |
| chiuso_da_registrare | avviso moderato | richiesta registrazione avanzamento |

## 11. Checklist per verifica utente

Domande da testare:

1. L'utente capisce dove consultare il curricolo?
2. L'utente capisce dove progettare una UDA?
3. L'utente capisce dove esportare documenti scolastici ricorrenti?
4. L'utente capisce dove leggere spiegazioni su IN2012/IN2025?
5. L'utente capisce che IN2025 non è automaticamente vigente?
6. L'utente capisce che la validazione resta umana?
7. L'utente trova le fonti?
8. L'utente capisce che il Contesto di lavoro sta nelle Impostazioni?
9. L'utente mobile trova gli stessi quattro ambienti?

## 12. Decisione di prototipo dopo CML-421C

Il prototipo CML-420 è corretto nella terminologia IA principale, ma resta bloccato per runtime finché non sono completati:

```text
CML-421A — Didactic Design Needs Audit
CML-421B — School Document Export Needs Audit
```

## Verdict

```text
CML_420_IA_NAVIGATION_PROTOTYPE_TERMINOLOGY_ALIGNED_BY_CML_421C
```
