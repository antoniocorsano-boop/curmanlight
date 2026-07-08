# CML-421G — Canonical Visual Contract

## 1. Scopo

Definire il contratto visivo canonico di CurManLight prima di qualsiasi runtime.

Il contratto deriva dalla scelta:

```text
D2 — Ibrido guidato-professionale con sobrietà istituzionale
```

## 2. Principio guida

```text
Guidato per il docente.
Professionale nelle viste avanzate.
Sobrio nella cornice istituzionale.
```

## 3. Identità visiva

CML deve sembrare:

```text
strumento scolastico
ambiente curricolare d'istituto
spazio di lavoro professionale
supporto alla progettazione
ausilio alla revisione curricolare
```

CML non deve sembrare:

```text
app commerciale generica
gestionale ministeriale pesante
gioco didattico
social app
automazione che decide al posto della scuola
```

## 4. Tono grafico

```text
sobrio
chiaro
compatto
istituzionale ma non freddo
guidato ma non infantile
professionale ma non complesso
```

## 5. Layout canonico desktop

### Header

Sempre presente e compatto.

```text
[Logo/Nome ambiente] [Contesto attivo] [Stato lavoro] [Impostazioni] [Guida]
```

Esempio:

```text
Ambiente curricolare d'istituto | Tecnologia · Secondaria · A.S. 2026/27 | consultazione disponibile | Impostazioni | Guida
```

### Home

Home guidata con cornice istituzionale.

```text
Titolo istituzionale
Domanda guida: Cosa vuoi fare oggi?
4 accessi principali
Avviso validazione umana
Stato sintetico
```

### Navigazione principale

```text
Curricolo
Progettazione didattica
Esportazione
Riferimenti e guida
```

### Impostazioni

Non è una sezione principale, ma funzione trasversale raggiungibile dall'header.

```text
Impostazioni / Contesto di lavoro
```

## 6. Layout canonico mobile

```text
Topbar: nome ambiente + stato breve + impostazioni
Bottom bar: Curricolo | Progetta | Esporta | Guida
Contenuto a una colonna
Una azione primaria per schermata
Dettagli fonte/stato espandibili
```

Mobile privilegia B:

```text
percorso guidato
poche card
azioni chiare
no pannelli multipli permanenti
```

## 7. Regole per area

### Home

```text
B con cornice A
```

- domanda guida ammessa;
- quattro accessi principali;
- niente processo dominante;
- validazione umana visibile;
- stato sintetico ma discreto.

### Curricolo / Consulta

```text
B + A
```

- consultazione semplice;
- filtri chiari;
- fonte/stato sempre visibili;
- azioni: copia, usa in progettazione, esporta.

### Curricolo / Fonti

```text
C leggero
```

- tabella o lista strutturata;
- scheda fonte selezionata;
- livelli: confermata, candidata, repo-defined, non risolta;
- nessuna fonte ambigua senza stato.

### Curricolo / Versioni

```text
C leggero
```

- tabella versioni;
- stato versione;
- fonte/atto;
- azioni controllate;
- nessun uso di `Definitivo`.

### Curricolo / Processo aggiornamento

```text
C leggero
```

- pipeline docente → dipartimento → referente → organi esterni;
- azioni di lavoro, non di approvazione;
- validazione e approvazione fuori app sempre esplicite.

### Curricolo / Sintesi finale

```text
A + C
```

- esito tecnico della revisione;
- stato visibile;
- avviso: non equivale ad approvazione collegiale.

### Progettazione didattica

```text
B pieno
```

- domande guidate;
- parti dal curricolo;
- programmazione annuale;
- UDA;
- evidenze;
- classe/periodo/obiettivi/metodologie/verifiche;
- bozza locale e validazione professionale.

### Esportazione

```text
B pieno
```

- partire dal documento scolastico, non dal formato;
- categorie: classe, progettazione, curricolo, processo, archivio;
- ogni documento mostra requisiti di contesto e stato.

### Riferimenti e guida

```text
A compatto
```

Solo quattro accessi:

```text
Fonti e normativa
IN2012 e IN2025
Ruoli e processo
Uso e limiti
```

### Impostazioni / Contesto di lavoro

```text
B compatto
```

- impostazione guidata;
- nessun sovraccarico;
- produce chip di contesto sintetica;
- non modifica fonti ufficiali.

## 8. Componenti canonici

### Card ambiente

```text
titolo
descrizione breve
icona sobria
azione primaria
```

### Card documento

```text
nome documento
destinatario
contesto richiesto
stato documento
azione prepara/esporta
```

### Card fonte

```text
titolo fonte
livello fonte
stato verifica
uso consentito
azione apri/copia
```

### Card proposta

```text
testo vigente
testo proposto
fonte/stato
azione valuta/riformula/rinvia
```

### Badge

Badge brevi, non decorativi.

```text
Fonte confermata
Fonte candidata
Repo-defined
Non risolta
Bozza locale
Materiale da verificare
Sintesi finale pronta
In attesa di approvazione esterna
```

## 9. Icone

Regola:

```text
icone stroke-based semplici
coerenti tra loro
no emoji come icone principali
no icone giocose
```

Icone consigliate:

```text
libro = Curricolo
matita/checklist = Progettazione
freccia download/documento = Esportazione
info/libro aperto = Riferimenti e guida
ingranaggio = Impostazioni
scudo/persona = Validazione umana
```

## 10. Colori

Palette indicativa, da adattare al runtime esistente:

```text
blu istituzionale = struttura/header/curricolo
verde sobrio = progettazione/stato positivo
viola sobrio = esportazione
oro tenue = guida/riferimenti
grigio/blu chiaro = sfondi e pannelli
rosso solo per errori o blocchi reali
```

Regola:

```text
Non usare colori troppo saturi o ludici.
Non usare il colore come unico indicatore di stato.
```

## 11. Microcopy canonico

Ammessi:

```text
Cosa vuoi fare oggi?
Consulta il curricolo
Prepara una progettazione
Esporta un documento
Verifica fonti e limiti
La validazione resta umana
L'app prepara materiali di lavoro, non approva il curricolo
Indicazioni 2025 — materiale/proposta da verificare
Sintesi finale — esito tecnico della revisione
```

Da evitare:

```text
Wiki
Definitivo
Approva definitivamente
Curricolo approvato dall'app
Pubblica automaticamente
Generato ufficialmente
```

## 12. Densità informativa

Regola D2:

```text
bassa/media per docente;
media/alta solo per referente, fonti, versioni, processo.
```

## 13. Accessibilità

Minimo richiesto:

```text
contrasto sufficiente
testi leggibili
azioni con label testuali
focus visibile
non affidarsi solo al colore
mobile touch-friendly
una azione primaria per vista quando possibile
```

## 14. Divieti runtime futuri

Non implementare:

```text
layout a pannelli permanenti su tutte le viste;
Home troppo densa;
Home solo dashboard tecnica;
percorso docente senza fonti/stato;
Esportazione per formato prima che per documento;
Contesto di lavoro dentro Esportazione;
validazione nascosta;
IN2025 come vigente;
Sintesi finale come approvazione;
```

## 15. Gate di conformità visuale

Ogni futura micro-slice runtime deve dichiarare:

```text
quale area modifica;
quale modello D2 usa: B, C leggero o A;
quale componente canonico applica;
quale microcopy introduce;
come conserva validazione umana;
come si comporta su mobile;
```

## Verdict

```text
CML_421G_CANONICAL_VISUAL_CONTRACT_READY_REMOTE_BRANCH
```
