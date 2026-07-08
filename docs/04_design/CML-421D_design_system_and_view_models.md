# CML-421D — Design System and View Models

## 1. Scopo

Definire il sistema visivo minimo e i modelli di vista dell'Ambiente curricolare d'istituto prima del runtime.

Il documento non sceglie ancora un mock definitivo. Prepara il terreno per la scelta tra proposte alternative.

## 2. Tono visivo

```text
istituzionale
sobrio
chiaro
compatto
scolastico
accessibile
non ludico
non tecnico
```

## 3. Navigazione principale

```text
Curricolo
Progettazione didattica
Esportazione
Riferimenti e guida
```

## 4. Funzione trasversale

```text
Impostazioni / Contesto di lavoro
```

Contiene:

```text
anno scolastico
istituto
ordine
plesso
ruolo
disciplina/ambito
classi assegnate
versione curricolare di riferimento
preferenze esportazione
dati locali
accessibilità
```

## 5. Header compatto

Elementi raccomandati:

```text
nome ambiente
stato lavoro
contesto attivo sintetico
azioni rapide
impostazioni
riferimenti/guida
menu mobile
```

Esempio:

```text
Ambiente curricolare d'istituto | Secondaria · Tecnologia · A.S. 2026/27 | [Impostazioni] [Guida]
```

## 6. Componenti base

### Card ambiente

Uso:

```text
Home e accessi principali
```

Contenuto:

```text
titolo
descrizione breve
stato sintetico
azione primaria
```

### Card fonte

Contenuto:

```text
titolo fonte
livello fonte
stato verifica
ambito
uso consentito
azione: apri scheda / copia riferimento
```

### Card proposta

Contenuto:

```text
testo vigente
testo proposto
fonte/stato
azione: valuta / riformula / rinvia
```

### Card documento

Contenuto:

```text
nome documento
destinatario
contesto richiesto
stato documento
formato disponibile
azione: prepara / esporta
```

## 7. Badge e stati

### Stati fonte

```text
Fonte confermata
Fonte candidata
Fonte definita nel repository
Fonte non risolta
Materiale di lavoro
```

### Stati documento

```text
Bozza locale
Materiale da verificare
In lavorazione
Sintesi finale pronta
In attesa di approvazione esterna
Approvato esternamente
Adottato se atto presente
```

### Stati processo

```text
Non attivo
Attivo
Chiuso da registrare
```

## 8. Modelli vista

### Home

```text
Header compatto
Stato sintetico
4 card principali
Avviso validazione umana
Accesso impostazioni
```

### Curricolo / Consulta

```text
selettori disciplina/ordine/classe/versione
contenuto curricolare
fonte e stato
azioni: copia estratto, vai a progettazione, esporta
```

### Curricolo / Fonti

```text
fonti confermate
fonti candidate
fonti repository
fonti non risolte
materiali di lavoro
```

### Curricolo / Versioni

```text
tabella versioni
stato
fonte
atto/riferimento
azione
```

### Curricolo / Processo aggiornamento

```text
pipeline docente → dipartimento → referente → organi esterni
stato processo
azioni controllate
```

### Curricolo / Sintesi finale

```text
esito tecnico del processo
stato sintesi
avviso: non equivale ad approvazione collegiale
azioni: prepara sintesi, esporta materiale, registra avanzamento
```

### Progettazione / Parti dal curricolo

```text
scelta disciplina/classe/unità
evidenze collegate
azioni: usa in programmazione, usa in UDA
```

### Progettazione / Programmazione annuale

```text
classe
periodi/unità
traguardi/obiettivi collegati
metodologie
verifiche
note inclusione
stato documento
```

### Progettazione / UDA

```text
titolo
classe
unità/evidenze
attività
metodologie
valutazione
rubrica
prodotto
export bozza
```

### Esportazione / Per la classe

```text
programmazione annuale
programma svolto
relazione finale
sintesi percorso
contesto richiesto
```

### Esportazione / Per il processo

```text
proposta docente .cml
esito dipartimentale .cml
report referente
materiale discussione collegiale
```

### Riferimenti e guida

```text
Fonti e normativa
IN2012 e IN2025
Ruoli e processo
Uso e limiti
```

### Impostazioni / Contesto di lavoro

```text
profilo operativo
classi assegnate
disciplina/ambito
versione curricolare
preferenze esportazione
dati locali
```

## 9. Pattern mobile

```text
topbar compatta
bottom bar con 4 ambienti
impostazioni in alto
contenuti a una colonna
una sola azione primaria per vista
stati fonte/versione brevi ma visibili
```

## 10. Regole di contenuto

```text
Non usare Wiki.
Non usare Definitivo per il curricolo revisionato.
Usare Sintesi finale per l'esito tecnico.
Usare Riferimenti e guida per fonti/ruoli/limiti.
Dichiarare sempre validazione umana dove serve.
Distinguere documento scolastico e file .cml.
```

## 11. Decisione

Questo design system è base comune per le proposte mock A/B/C.

Non autorizza runtime.

## Verdict

```text
CML_421D_DESIGN_SYSTEM_AND_VIEW_MODELS_READY
```
