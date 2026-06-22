# NORMALIZED CURRICULUM DATA CONTRACT

## Scopo
Definire la struttura dati normalizzata per il curricolo di istituto di CurManLight, in modo che ogni disciplina possa essere compilata, validata e revisionata con un modello coerente, completo e tracciabile.

## Principi
1. **Verticalità**: ogni disciplina è organizzata per ordine di scuola e classe/fascia, con progressione chiara.
2. **Conoscibilità**: ogni voce è leggibile, ricercabile e riferibile a una fonte ufficiale.
3. **Valutabilità**: ogni voce contiene elementi sufficienti per la valutazione formativa e la revisione dipartimentale.
4. **Tracciabilità**: ogni modifica è tracciata con stato, validazione umana e note.
5. **Compatibilità**: il modello è compatibile con i riferimenti istituzionali (PTOF, curricolo di istituto, Indicazioni Nazionali).
6. **Non rigidità**: i campi sono obbligatori o facoltativi secondo regole precise; le discipline con ordini specifici (es. Latino LEL, Seconda Lingua Comunitaria) hanno percorsi di compilazione dedicati.

## Modello dati

### Unità base: `unitaApprendimento`
Ogni voce del curricolo è una `unitaApprendimento`. Può rappresentare un traguardo, un obiettivo, un modulo di competenza o una unità di apprendimento, a seconda dell'ordine di scuola.

```json
{
  "id": "tec_sec3_inf_001",
  "disciplina": "Tecnologia",
  "ordine": "Secondaria",
  "classe": "3",
  "fascia": null,
  "ambito": "Disegno tecnico e informatica",
  "nucleoFondante": "Tecnologie dell'informazione e della comunicazione",
  "competenza": "Utilizza le tecnologie dell'informazione e della comunicazione per comunicare, calcolare, ricercare e archiviare dati",
  "traguardo": "Al termine del percorso lo studente sa orientarsi tra i mezzi di comunicazione e usa strumenti digitali con consapevolezza",
  "obiettivi": [
    "Conoscere le componenti di un computer e le loro funzioni",
    "Navigare in rete in modo sicuro e crítico"
  ],
  "conoscenze": [
    "Hardware: CPU, RAM, periferiche",
    "Software: sistema operativo, applicazioni",
    "Reti: terminologia base, sicurezza"
  ],
  "abilita": [
    "Accendere e spegnere correttamente un computer",
    "Creare un documento di testo con formattazione base",
    "Cercare informazioni su internet valutando le fonti"
  ],
  "evidenze": [
    "L'alunno sa spiegare la differenza tra hardware e software",
    "L'alunno produce un documento di testo corretto e lo salva in modo organizzato"
  ],
  "criteriValutazione": [
    "Correttezza terminologia tecnica",
    "Capacità di applicazione in contesto pratico",
    "Attenzione alle regole di sicurezza"
  ],
  "fonte": "Indicazioni Nazionali 2012, D.M. 254/2012, sezione Tecnologia",
  "stato": "modifica",
  "validazioneUmana": false,
  "noteDipartimento": "",
  "propostaIN2025": null,
  "decisione": null,
  "motivazione": "",
  "dataCreazione": "2026-06-22T00:00:00Z",
  "dataModifica": "2026-06-22T00:00:00Z",
  "autore": ""
}
```

## Campi obbligatori

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| `id` | `string` | Identificativo univoco della voce `{disciplina}_{ordine}_{numeroProgressivo}` |
| `disciplina` | `string` | Nome della disciplina come da `DISCIPLINE_META` |
| `ordine` | `enum` | `Infanzia` / `Primaria` / `Secondaria` |
| `classe` | `string` | Classe numerica (`"1"`, `"2"`, `"3"`, `"4"`, `"5"`) o `null` per Infanzia |
| `fascia` | `string` | Fascia per Infanzia (`"3-4"` / `"5"`) o `null` per Primaria/Secondaria |
| `ambito` / `nucleoFondante` | `string` | Ambito disciplinare o nucleo fondante |
| `competenza` | `string` | Competenza specifica in situazione |
| `traguardo` | `string` | Esito ampio e progressivo dell'apprendimento |
| `obiettivi` | `string[]` | Obiettivi operativi collegati al percorso didattico |
| `conoscenze` | `string[]` | Contenuti e saperi da acquisire |
| `abilita` | `string[]` | Azioni osservabili o capacità applicative |
| `evidenze` | `string[]` | Indicatori osservabili dimostrativi dell'apprendimento |
| `criteriValutazione` | `string[]` | Criteri per la valutazione formativa |
| `fonte` | `string` | Riferimento normativo o documentale |
| `stato` | `enum` | `ok` / `modifica` / `nuovo` / `eliminato` |
| `validazioneUmana` | `boolean` | Se la voce è stata validata da un operatore umano |
| `noteDipartimento` | `string` | Note del dipartimento disciplinare |

## Campi facoltativi

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| `propostaIN2025` | `string` | Proposta di aggiornamento dalle Indicazioni Nazionali 2025 |
| `decisione` | `enum` | `approvata` / `rifiutata` / `confluita_nella_sintesi` / `riformulata_dal_dipartimento` / `assorbita_in_altra_proposta` / `da_chiarire` |
| `motivazione` | `string` | Motivazione della decisione dipartimentale |
| `dataCreazione` | `ISO8601` | Data di creazione della voce |
| `dataModifica` | `ISO8601` | Data dell'ultima modifica |
| `autore` | `string` | Autore della modifica |

## Regole per disciplina

### Discipline con ordini multipli (Infanzia, Primaria, Secondaria)
Ogni disciplina presente su più ordini deve avere voci distinte per ogni combinazione ordine/classe o ordine/fascia. Non è permesso unificare traguardi o obiettivi tra ordini diversi.

### Discipline solo su Secondaria (Latino LEL, Seconda Lingua Comunitaria)
- `classe`: obbligatorio (`"2"` o `"3"` per Latino; `"1"`/`"2"`/`"3"` per Seconda Lingua Comunitaria)
- `fascia`: `null`
- `ambito`/`nucleoFondante`: obbligatorio
- `traguardo`: obbligatorio
- `obiettivi`: obbligatori (minimo 1)
- `conoscenze`, `abilita`: obbligatori per Secondaria; facoltativi per altri ordini
- `evidenze`, `criteriValutazione`: obbligatori per Secondaria; facoltativi per altri ordini

### Infanzia
- `classe`: `null`
- `fascia`: obbligatorio (`"3-4"` o `"5"`)
- `traguardo`: descritto come esito per fascia
- `obiettivi`: descritti come attività esperienziali
- `conoscenze`, `abilita`: possono essere aggregati in `traguardo` e `obiettivi` se non ancora formalizzati
- `evidenze`: facoltative (descritte come comportamenti osservabili)

### Primaria
- `classe`: obbligatorio (`"1"`–`"5"`)
- `fascia`: `null`
- `traguardo`: obbligatorio
- `obiettivi`: obbligatori per classe
- `conoscenze`, `abilita`: obbligatori per classe
- `evidenze`: obbligatorie per classe
- `criteriValutazione`: obbligatori per classe

### Secondaria di I grado
- `classe`: obbligatorio (`"1"`–`"3"`)
- `fascia`: `null`
- Tutti i campi obbligatori devono essere compilati
- `validazioneUmana`: deve essere `true` per le voci approvate dal dipartimento

## Regole per ordine di scuola

| Ordine | Classe/Fascia | Traguardo | Obiettivi | Conoscenze | Abilità | Evidenze | Criteri valutazione |
|--------|---------------|-----------|-----------|------------|---------|----------|---------------------|
| Infanzia | fascia | obbligatorio | obbligatori | facoltativi | facoltativi | facoltativi | facoltativi |
| Primaria | classe | obbligatorio | obbligatori | obbligatori | obbligatori | obbligatorie | obbligatori |
| Secondaria | classe | obbligatorio | obbligatori | obbligatori | obbligatori | obbligatorie | obbligatori |

## Regole per validazione umana
- Ogni voce modificata (`stato: modifica`) o nuova (`stato: nuovo`) deve avere `validazioneUmana: true` prima di essere considerata approvata dal dipartimento.
- Le voci con `validazioneUmana: true` e `stato: approvata` sono pronte per l'export.
- Le voci con `validazioneUmana: false` non possono essere esportate nel documento definitivo.
- Il campo `noteDipartimento` è obbligatorio quando `validazioneUmana: true`.

## Rapporto con export `.cml`
- Il modello `unitaApprendimento` è compatibile con l'estensione `.cml` esistente.
- L'export `.cml` deve includere tutti i campi obbligatori e facoltativi del contratto.
- I campi non compilati devono essere esclusi dall'export o valorizzati come `null` esplicitamente.
- Il parser `.cml` deve validare la presenza dei campi obbligatori e rifiutare file con campi mancanti.

## Rapporto con UI
- La UI deve presentare le voci per ordine di scuola e classe/fascia.
- Ogni voce deve mostrare: `ambito`/`nucleoFondante`, `competenza`, `traguardo`, `obiettivi`, `conoscenze`, `abilità`, `evidenze`, `criteriValutazione`, `fonte`, `stato`, `validazioneUmana`.
- Le voci non validate devono essere visivamente distinte (es. bordo arancione).
- Le voci approvate (`validazioneUmana: true`) devono essere visivamente distinte (es. bordo verde).
- Il filtro per stato deve includere: `ok`, `modifica`, `nuovo`, `eliminato`, `approvata`, `da_valutare`.

## Rapporto con UX progressiva
- **Quadro**: mostra `ambito`, `competenza`, `traguardo` e stato.
- **Dettaglio**: espande `obiettivi`, `conoscenze`, `abilità`, `evidenze`, `criteriValutazione`.
- **Azione**: mostra solo le azioni pertinenti al contesto (modifica, approva, rifiuta, esporta).
- **Mobile**: dettaglio in pannello separato, azioni in barra inferiore.

## Criteri di audit futuri
L'audit script `tools/audit-cml-curriculum-coverage.mjs` deve verificare:

1. **Presenza di ambiti**: percentuale di voci con `ambito` o `nucleoFondante` compilato.
2. **Presenza di competenze**: percentuale di voci con `competenza` non vuota.
3. **Presenza di conoscenze**: percentuale di voci con `conoscenze` array non vuoto.
4. **Presenza di abilità**: percentuale di voci con `abilita` array non vuoto.
5. **Presenza di evidenze/criteri**: percentuale di voci con `evidenze` e `criteriValutazione` non vuoti.
6. **Completezza per ordine/classe**: ogni disciplina deve avere voci per tutte le classi/fascie previste dal curricolo.
7. **Consistenza stati**: `statusTotal` deve corrispondere a `totaleVoci`.
8. **Validazione umana**: percentuale di voci validate per disciplina.

## Disciplina pilota
- **Tecnologia**: prima disciplina da completare con il modello normalizzato.
- Motivo: rappresenta tutti e tre gli ordini di scuola, ha nuclei diversificati (disegno, materiali, informatica) e permette di testare campi complessi come `conoscenze` e `abilità`.

## Criteri di qualità per la replica
1. Tutte le voci della disciplina pilota rispettano il contratto.
2. Nessuna voce ha campi obbligatori vuoti.
3. `validazioneUmana: true` per tutte le voci approvate.
4. Audit script riporta `consistencyWarnings` vuoto per la disciplina pilota.
5. UI mostra correttamente tutti i campi senza overflow.
6. Export `.cml` include tutti i campi e il parser li accetta.

## Limiti e non-obiettivi
- Non si modifica il runtime in questa slice.
- Non si espandono contenuti disciplinari nel runtime prima della disciplina pilota.
- Non si cambia lo schema `.cml` esistente; si estende in modo compatibile.
- Non si introducescono nuovi tipi di utenza o ruoli.
- Non si modifica il role-access gating.
- Non si eseguono deploy.
