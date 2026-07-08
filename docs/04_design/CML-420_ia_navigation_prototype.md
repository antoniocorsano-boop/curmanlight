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
| Come funziona, quali fonti usa e quali sono i limiti? | Wiki del curricolo |

## 3. Home prototipo

### 3.1 Scopo Home

La Home orienta e non deve contenere tutto il processo.

### 3.2 Struttura Home

```text
[Ambiente curricolare d'istituto]
Curricolo, progettazione didattica, esportazioni e wiki operativa.

[Curricolo]
Consulta, estrai e verifica fonti, versioni e processo di aggiornamento.

[Progettazione didattica]
Prepara evidenze, programmazioni e UDA collegate al curricolo.

[Esportazione]
Scarica documenti, report e file di lavoro per scopo e ruolo.

[Wiki del curricolo]
Comprendi fonti, IN2012/IN2025, ruoli, processo, lessico e limiti.

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
| Wiki del curricolo | Apri wiki | Leggi IN2012/IN2025 |

## 4. Curricolo

### 4.1 Sotto-viste

```text
Curricolo
├─ Consulta
├─ Estrai
├─ Fonti
├─ Versioni
├─ Processo aggiornamento
└─ Definitivo
```

### 4.2 Regole Curricolo

- Mostrare sempre fonte e stato quando un contenuto deriva da 2012/2025.
- Non presentare IN2025 come vigente.
- Non presentare definitivo/adottato senza fonte o atto esterno.
- Processo aggiornamento visibile solo se attivo.

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
- Vai a Wiki / Fonti
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

### 4.8 Curricolo / Definitivo

```text
[Curricolo > Definitivo]

Stati possibili:
- Non disponibile
- In preparazione
- Approvato esternamente, da registrare
- Adottato, se atto esterno presente

Nota:
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

### 5.3 Struttura vista

```text
[Progettazione didattica]

Azioni principali:
- Parti da evidenze
- Prepara programmazione annuale
- Crea UDA modello
- Verifica collegamento al curricolo

Pannello stato:
Versione curricolare di riferimento: 2012 vigente / 2025 proposta / altra
Coerenza: coerente / da verificare / da riallineare
```

## 6. Esportazione

### 6.1 Sotto-viste

```text
Esportazione
├─ Per scopo
├─ Per ruolo
├─ File .cml
└─ Report
```

### 6.2 Regola chiave

L'utente non deve partire dal formato, ma dallo scopo.

```text
Che cosa devi ottenere?
```

### 6.3 Esportazione / Per scopo

```text
[Esportazione > Per scopo]

- Documento curricolo
- Estratto disciplinare
- Programmazione annuale
- UDA modello
- Proposta docente
- Esito dipartimentale
- Report referente
- Materiale per discussione collegiale
- Copia di sicurezza
```

### 6.4 Esportazione / Per ruolo

```text
Docente:
- estratto curricolo
- programmazione/UDA
- proposta .cml

Dipartimento:
- confronto proposte
- esito dipartimentale
- report sintesi

Referente:
- import esiti
- report gruppo curricolo
- quadro decisioni aperte

Dirigente/governance:
- stato avanzamento
- materiali per atti esterni
```

### 6.5 Avvertenze export

Ogni export deve indicare:

- stato della fonte;
- stato della versione;
- uso consentito;
- necessità di verifica umana;
- nessun valore deliberativo automatico.

## 7. Wiki del curricolo

### 7.1 Sotto-viste

```text
Wiki del curricolo
├─ Come si usa
├─ IN2012 e IN2025
├─ Fonti
├─ Ruoli
├─ Processo
├─ Lessico
└─ Limiti
```

### 7.2 Regole Wiki

- Deve spiegare senza tecnicismi inutili.
- Deve contenere le cautele su fonti e versioni.
- Deve esplicitare ciò che il sistema non fa.

### 7.3 Contenuti prioritari

```text
IN2012: riferimento normativo confermato tramite D.M. 254/2012.
IN2025: materiale/proposta da verificare, non automaticamente vigente.
Fonti istituto: definite nel repo, verifica esterna pendente.
Approvazione/adottabilità: resta fuori dall'app.
```

## 8. Navigazione desktop

### 8.1 Struttura consigliata

```text
Header compatto
├─ Logo/nome ambiente
├─ Stato lavoro
├─ Azioni rapide
└─ Accesso wiki/aiuto

Navigazione principale
├─ Curricolo
├─ Progettazione
├─ Esportazione
└─ Wiki

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

## 9. Navigazione mobile

### 9.1 Struttura consigliata

```text
Topbar compatta
- Nome ambiente
- Stato breve
- Menu

Bottom bar
- Curricolo
- Progetta
- Esporta
- Wiki

Contenuto a una colonna
- Card sintetiche
- Azione primaria fissa o evidente
```

### 9.2 Regole mobile

- Quattro accessi sempre raggiungibili.
- Testi brevi.
- Nessun pannello laterale obbligatorio.
- Wiki sempre raggiungibile.
- Export guidato per scopo.

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
3. L'utente capisce dove esportare una proposta o un report?
4. L'utente capisce dove leggere spiegazioni su IN2012/IN2025?
5. L'utente capisce che IN2025 non è automaticamente vigente?
6. L'utente capisce che la validazione resta umana?
7. L'utente trova le fonti?
8. L'utente mobile trova gli stessi quattro ambienti?

## 12. Decisione di prototipo

Il prototipo CML-420 è approvabile se produce una mappa navigazionale verificabile senza pretendere di implementare subito tutte le funzioni.

## Verdict

```text
CML_420_IA_NAVIGATION_PROTOTYPE_DESIGN_READY
```
