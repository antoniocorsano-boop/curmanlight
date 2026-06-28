# EVIDENZE-UDA-WORKFLOW-CONTRACT

**Stato:** Contratto stabile — CML-214  
**Riferimento:** CML-213 audit, CML-212 cycle selection  
**App:** CurManLight — app statica  
**Principio:** Evidenze = cosa osservare. UDA = come organizzare l'apprendimento.  
**Boundary:** Il curricolo resta documento istituzionale. La didattica è progettazione operativa.

---

## 1. Scopo

Definire il contratto dati e workflow per il modulo Evidenze/UDA di CurManLight, stabilendo:

- la natura degli oggetti coinvolti;
- i ruoli abilitati;
- gli stati permessi;
- il confine con `.cml` e SchoolKB;
- il perimetro del primo incremento runtime (CML-215);
- i criteri di chiusura (CML-217).

---

## 2. Distinzioni concettuali

| Concetto | Definizione | Responsabile | Output |
|---|---|---|---|
| **Evidenza curricolare** | Osservabile collegato a un'unità curricolare; descrive ciò che il docente può vedere in classe | Dipartimento / docente | Lista di evidenze per unità |
| **Attività didattica** | Azione concreta in classe: laboratorio, consegna, schede, esercitazioni | Docente | Piano attività |
| **UDA (Unità di Apprendimento)** | Percorso che organizza attività, evidenze e valutazione attorno a un nucleo curricolare | Docente / dipartimento | Modello UDA |
| **Validazione dipartimentale** | Esito `.cml` sul testo curricolare; non entra nel merito didattico | Dipartimento / referente | Esito `.cml` |

**Regola di confine:**

> **Curricolo** = che cosa la scuola dichiara.  
> **Didattica** = come il docente realizza.  
> **Evidenze/UDA** = progettazione operativa, non approvazione istituzionale.

---

## 3. Oggetto: Evidenza curricolare

### 3.1 Struttura minima

```json
{
  "id": "ev_<disciplina>_<unit_id>_<seq>",
  "tipo": "evidenza_curricolare",
  "disciplina": "string",
  "nucleo": "string|null",
  "unitaId": "string",
  "ordine": "Infanzia|Primaria|Secondaria",
  "classe": "number|null",
  "fascia": "string|null",
  "traguardoRiferimento": "string|null",
  "obiettivoRiferimento": "string|null",
  "testo": "string",
  "fonteCurricolo": "string",
  "stato": "proposta|adottata|adattata|non_applicabile",
  "marcataDa": "docente|dipartimento|sistema",
  "timestampMarcatura": "ISO8601|null",
  "validazioneUmana": true|false,
  "noteDipartimento": "string|null"
}
```

### 3.2 Campi obbligatori

- `id`, `tipo`, `disciplina`, `unitaId`, `testo`, `stato`, `validazioneUmana`

### 3.3 Stati consentiti

| Stato | Significato | Chi può impostarlo |
|---|---|---|
| `proposta` | Evidenza suggerita dal curricolo | Sistema |
| `adottata` | Docente conferma utilizzo | Docente |
| `adattata` | Docente modifica contesto classe | Docente |
| `non_applicabile` | Esclusa per questa classe/anno | Docente |

### 3.4 Regole

- L'evidenza non può essere cancellata dal curricolo originale; può solo essere marcata.
- Il campo `testo` è immutabile se `fonteCurricolo` è popolato.
- `validazioneUmana` deriva dal dato curricolare esistente; non viene riscritta.

---

## 4. Oggetto: UDA draft

### 4.1 Struttura minima

```json
{
  "id": "uda_<slug>",
  "tipo": "uda_draft",
  "titolo": "string",
  "disciplina": "string",
  "nuclei": ["string"],
  "unitaCollegate": ["string"],
  "evidenzeSelezionate": ["ev_id_1", "ev_id_2"],
  "obiettivoApprendimento": "string",
  "attivitaSintesi": "string",
  "criteriValutazione": ["string"],
  "durataOre": "number|null",
  "stato": "bozza|in_uso|validato|archiviato",
  "autore": "string|null",
  "timestampCreazione": "ISO8601",
  "timestampModifica": "ISO8601|null",
  "fonteCurricolo": "string",
  "esportabile": true|false
}
```

### 4.2 Campi obbligatori

- `id`, `tipo`, `titolo`, `disciplina`, `stato`, `timestampCreazione`

### 4.3 Stati consentiti

| Stato | Significato | Chi può impostarlo |
|---|---|---|
| `bozza` | UDA in preparazione | Docente |
| `in_uso` | UDA adottata in classe | Docente |
| `validato` | UDA approvata dal dipartimento | Dipartimento |
| `archiviato` | UDA non più in uso | Docente / dipartimento |

### 4.4 Regole

- Un'UDA non può esistere senza almeno un `unitaCollegata` valida.
- `evidenzeSelezionate` deve referenziare solo evidenze della stessa `disciplina`.
- `esportabile` è `true` solo se `stato` è `validato` o `in_uso`.
- L'UDA non modifica il curricolo; è output derivato.

---

## 5. Ruoli e permessi

| Ruolo | Può | Non può |
|---|---|---|
| **Docente** | Marcare evidenze (adottata/adattata/non_applicabile), creare/modificare bozze UDA, esportare UDA proprie | Validare UDA per dipartimento, modificare curricolo |
| **Dipartimento** | Validare UDA (bozza → validato), marcare evidenze, escludere UDA | Modificare curricolo, approvare modifiche normative |
| **Referente** | Importare/esportare `.cml`, coordinare pacchetti, leggere stato UDA/evidenze | Modificare evidenze/UDA di altri, validare UDA |

---

## 6. Workflow states

### 6.1 Workflow Evidenza

```
proposta → adottata / adattata / non_applicabile
     ↓              ↓              ↓                ↓
  [docente]    [docente]    [docente]        [docente]
     ↓              ↓              ↓                ↓
  UDA draft    UDA draft    esclusa da UDA   esclusa da UDA
```

### 6.2 Workflow UDA

```
bozza → in_uso → validato → archiviato
  ↓        ↓         ↓
docente  docente  dipartimento
```

### 6.3 Workflow .cml (invariato)

```
proposta docente → validazione dipartimento → referente import/export → decisione
```

**Regola:** I due workflow non si sovrappongono. `.cml` gestisce il testo curricolare; Evidenze/UDA gestisce la progettazione didattica.

---

## 7. Permessi di lettura/scrittura

| Oggetto | Lettura | Scrittura | Eliminazione |
|---|---|---|---|
| Evidenza curricolare | Tutti | Docente (marcatura), Dipartimento (marcatura) | Mai (immutabile) |
| UDA draft | Docente autore, Dipartimento, Referente | Docente autore, Dipartimento (solo valida/archivia) | Autore |
| Curricolo JSON | Tutti | Nessuno (in questo ciclo) | Mai |

---

## 8. Cosa resta read-only nel primo incremento runtime (CML-215)

- Il curricolo JSON è read-only (nessuna modifica).
- Il testo delle evidenze è read-only (solo marcatura stato).
- La creazione/modifica UDA è read-only **a meno che** non sia esplicitamente giustificata come low-risk.
- `.cml` workflow è invariato.
- Nessun salvataggio persistente in CML-215.

---

## 9. Cosa può essere memorizzato localmente

| Dato | Dove | Quando |
|---|---|---|
| Marcatura evidenza (`stato`) | `localStorage` chiave `cml_evidenze_state` | CML-215+ |
| Bozza UDA | `localStorage` chiave `cml_uda_draft` | CML-216+ |
| Filtri/UI preferences | `localStorage` esistente | Invariato |
| Dati curricolari | Mai localmente | Sempre da sorgente |

**Regole locali:**

- Nessun dato personale studente.
- Nessun voto.
- Nessuna informazione sensibile.
- I dati locali sono una comodità, non una garanzia di persistenza.
- Il docente sa che i dati sono sul proprio dispositivo.

---

## 10. Privacy

| Categoria | Consentito | Vietato |
|---|---|---|
| Identificativi studente | Nome/cognome per classe (opzionale) | Codice fiscale, dati sanitari, foto |
| Valutazioni | Criteri di valutazione generali | Voti numerici, giudizi personalizzati |
| Dati sensibili | Nessuno | Origine etnica, condizioni sanitarie, religione (oltre curricolo) |
| Persistenza | Solo dispositivo locale | Server-side, cloud, sincronizzazione remota |

---

## 11. Relazione con `.cml`

| Aspetto | Regola |
|---|---|
| Schema `.cml` | Invariato in CML-214 e CML-215 |
| Estensione futura | Possibile solo dopo contratto separato |
| Validazione `.cml` | Resta sul testo curricolare, non su UDA/evidenze |
| Import/export `.cml` | Invariato; UDA possono essere esportate come allegato/markdown |

---

## 12. Relazione con SchoolKB

| Aspetto | Regola |
|---|---|
| Dipendenza SchoolKB | Nessuna in questo ciclo |
| Integrazione futura | Possibile dopo contratto separato |
| Dati SchoolKB | Non mescolati con evidenze/UDA |

---

## 13. Criteri di successo CML-215

1. Pannello evidenze visibile per tutte le 14 discipline.
2. Dati provenienti da sorgente curricolare esistente (`evidenze`, `traguardi`, `obiettivi`, `conoscenze`, `abilita`, `criteriValutazione`).
3. Marcatura stato evidenza (`adottata`/`adattata`/`non_applicabile`) persistita in `localStorage`.
4. Nessuna modifica al JSON sorgente.
5. Nessuna modifica a `.cml`.
6. Filtri per ordine (Infanzia/Primaria/Secondaria).
7. Microcopy prudente: "modello didattico non approvato", "da adattare alla classe".
8. Mobile responsive.
9. Nessun errore console.
10. Validatore e shape test: invariati PASS.

---

## 14. Criteri di successo CML-216

1. UDA draft creabile da disciplina/nucleo/unità selezionati.
2. Selezione evidenze da pannello CML-215.
3. Campi minimi: titolo, disciplina, obiettivo, attività sintesi, criteri, durata.
4. Draft salvabile in `localStorage`.
5. Export UDA in markdown (clipboard o download).
6. Nessuna dipendenza backend.
7. Nessuna modifica `.cml`.
8. Microcopy prudente.

---

## 15. Criteri di chiusura CML-217

1. CML-215 e CML-216 superano smoke locale.
2. GitHub Pages: HTTP 200, app carica, pannelli visibili.
3. Validatore: 14/14 PASS.
4. Shape test: 14/14 PASS.
5. Nessuna regressione su Curriculum.
6. Documentazione aggiornata.
7. Dipartimento conferma utilizzo o richiede revisione.

---

## 16. Decisioni

| Decisione | Motivazione |
|---|---|
| A — Docs-only contract prima di runtime | Evita codice non allineato e rischi di linking senza schema |
| Evidenze derivate da dati esistenti | 100% copertura già presente; nessun nuovo dato da inserire |
| UDA come draft locale | Non persiste nel curricolo; rimane progettazione docente |
| No schema `.cml` change | Separa chiaramente curricolo da didattica |
| No SchoolKB dependency | Mantiene ciclo autonomo e semplice |
| Privacy-first, local-first | Rispetta contesto scolastico, nessun dato sensibile |
| CML-215 read-only prima | Riduce rischio; abilita marcature semplici senza scrittura curricolo |
| CML-216 export markdown | Output neutro, non istituzionale, facilmente condivisibile |

---

## 17. Alternative rigettate

| Alternativa | Motivazione rigetto |
|---|---|
| B — Minimal data model senza contratto | Codice prima del contratto produce stash non allineato |
| C — Panel-only per tutte le discipline senza linking | Falsa completezza: utente vede ma non può fare |
| D — UDA export prototype prima del linking | Modelli scollegati dal curricolo |
| E — Defer completo | Spreca opportunità; tassonomia già sufficiente |

---

## 18. Prossime slice

| Slice | Tipo | Oggetto |
|---|---|---|
| **CML-215** | Runtime | Minimal evidence-linking runtime increment |
| **CML-216** | Runtime | UDA draft/export prototype |
| **CML-217** | Smoke | Workflow smoke and closure gate |

---

## 19. Verdetto

`CML_214_EVIDENZE_UDA_WORKFLOW_AND_DATA_CONTRACT_STABLE`

Questo contratto è il riferimento obbligatorio per CML-215, CML-216 e CML-217.  
Qualsiasi scostamento richiede una nuova slice di revisione contrattuale.
