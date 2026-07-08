# CML-421E — Mock A: Cruscotto istituzionale compatto

## 1. Idea generale

Mock pensato per presentare CML come ambiente scolastico sobrio, stabile e istituzionale.

Priorità:

```text
chiarezza
stato lavoro
fonti/versioni
validazione umana
accesso equilibrato alle 4 aree
```

## 2. Home desktop

```text
┌────────────────────────────────────────────────────────────────────┐
│ Ambiente curricolare d'istituto        Secondaria · Tecnologia     │
│ Stato: consultazione disponibile        [Impostazioni] [Guida]     │
├────────────────────────────────────────────────────────────────────┤
│ Curricolo, progettazione didattica, esportazioni e riferimenti.    │
│ Validazione sempre umana. L'app prepara materiali di lavoro.       │
├───────────────────────────────┬────────────────────────────────────┤
│ CURRICOLO                     │ PROGETTAZIONE DIDATTICA            │
│ Consulta fonti, versioni,     │ Prepara programmazioni e UDA       │
│ processo e sintesi finale.    │ collegate al curricolo.            │
│ [Apri curricolo]              │ [Apri progettazione]               │
├───────────────────────────────┼────────────────────────────────────┤
│ ESPORTAZIONE                  │ RIFERIMENTI E GUIDA                │
│ Documenti per classe,         │ Fonti, IN2012/IN2025, ruoli,       │
│ progettazione, processo.      │ processo, uso e limiti.            │
│ [Scegli documento]            │ [Apri riferimenti]                 │
└───────────────────────────────┴────────────────────────────────────┘
```

## 3. Curricolo

```text
Curricolo
├─ Consulta
├─ Estrai
├─ Fonti
├─ Versioni
├─ Processo aggiornamento
└─ Sintesi finale
```

### Consulta

```text
[Disciplina] [Ordine] [Classe/Fascia] [Versione]

Contenuto curricolare
Fonte: ...
Stato: vigente / proposta da verificare

Azioni:
[Copia estratto] [Vai a progettazione] [Esporta]
```

### Fonti

```text
Fonti confermate
Fonti candidate
Fonti definite nel repository
Fonti non risolte
Materiali di lavoro
```

### Versioni

```text
Versione | Stato | Fonte | Atto/riferimento | Azione
```

### Processo

```text
Docente → Dipartimento → Referente → Organi esterni
```

### Sintesi finale

```text
Esito tecnico del processo di revisione.
Non equivale ad approvazione collegiale.
```

## 4. Progettazione didattica

```text
Progettazione didattica
├─ Parti dal curricolo
├─ Programmazione annuale
└─ UDA modello
```

Layout:

```text
Pannello contesto
Pannello curricolo collegato
Card programmazione
Card UDA
Card evidenze
```

## 5. Esportazione

```text
Esportazione
├─ Per la classe
├─ Per la progettazione
├─ Per il curricolo
├─ Per il processo
└─ Archivio e sicurezza
```

Card documento:

```text
Nome documento
Per chi serve
Contesto richiesto
Stato documento
Azione: prepara / esporta
```

## 6. Riferimenti e guida

```text
Fonti e normativa
IN2012 e IN2025
Ruoli e processo
Uso e limiti
```

## 7. Impostazioni / Contesto di lavoro

```text
Anno scolastico
Istituto
Ordine
Plesso
Ruolo
Disciplina/ambito
Classi assegnate
Versione curricolare
```

## 8. Mobile

```text
Topbar: Ambiente + stato + impostazioni
Bottom bar: Curricolo | Progetta | Esporta | Guida
Card a colonna singola
Azioni primarie evidenti
```

## 9. Punti forti

```text
istituzionale
sobrio
facile da presentare
coerente con governance scolastica
buona base per runtime progressivo
```

## 10. Rischi

```text
meno guidato per docente non tecnico
richiede testi di aiuto molto chiari
```

## Verdict

```text
CML_421E_MOCK_A_INSTITUTIONAL_DASHBOARD_READY
```
