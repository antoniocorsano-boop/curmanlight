# PRODUCT MODEL — CURRICULUM / DIDATTICA CONTRACT

**Stato:** Contratto stabile
**Riferimento:** CML-065 (questo contratto)
**App:** CurManLight — app statica
**Principio:** Curriculum = documento istituzionale. Didattica = progettazione operativa.

---

## 1. Scopo

Definire una volta per tutte il modello concettuale di CurManLight, distinguendo tra area **Curriculum** (istituzionale, consultazione, revisione, validazione, esportazione) e area **Didattica** (progettazione operativa, UDA, attività, materiali, valutazione). Allineare il repository, la documentazione e la futura navigazione a questo modello, evitando che funzioni verticali diventino voci principali confuse.

---

## 2. Problema risolto

| Problema | Conseguenza | Soluzione nel contratto |
|---|---|---|
| "Tecnologia normalizzata" vista come area a sé | Quarta area principale, confusione navigazione | Non è area: è un pacchetto dentro Curriculum > Consultazione |
| Export/report visibili come azioni primarie | 25 pulsanti export, overload cognitivo | Sono strumenti secondari dentro Curriculum > Esportazione |
| Validazione referente come voce autonoma | Utente confonde azione con area | È sottoarea di Curriculum > Revisione |
| Nessuna distinzione tra consultazione e lavoro | 89 button, 96 onclick, P1 in audit UX | Home separa Curriculum e Didattica |
| Nessuna area Didattica | Ogni funzione didattica diventerebbe una nuova card | Didattica esiste come area, assorbe UDA/attività/valutazione |

---

## 3. Principi

1. **Due mondi, non venti azioni.** L'utente sceglie prima il mondo di lavoro (Curriculum o Didattica), poi l'azione.
2. **Curriculum è il documento istituzionale.** Consultazione, revisione, validazione, esportazione.
3. **Didattica è la progettazione operativa.** UDA, attività, materiali, valutazione in classe.
4. **Una funzione, una collocazione.** Nessuna funzione appare in due aree.
5. **La Home orienta, non sostituisce le sezioni.** Massimo 2 card principali. Niente pulsanti operativi in Home.
6. **I pacchetti disciplinari normalizzati sono contenuti, non aree.** Tecnologia normalizzata è un pacchetto, non una quarta area.
7. **Naming stabile.** "Curriculum", "Didattica", "Consultazione", "Revisione", "Esportazione", "Progettazione", "Attività", "Valutazione".

---

## 4. Area Curriculum

### 4.1 Definizione

Curriculum è l'area **istituzionale**. Serve a consultare, revisionare, validare ed esportare il curricolo di istituto. Dice **che cosa** la scuola dichiara come offerta formativa verticale.

### 4.2 Contiene

| Sottoarea | Cosa include |
|---|---|
| **Consultazione** | Curricolo vigente (IN 2012 / IN 2025), sezioni generali, discipline, riferimenti normativi, pacchetti disciplinari normalizzati (es. Tecnologia normalizzata) |
| **Revisione** | Proposte di modifica, decisioni motivate, confronto 2012/2025, validazione dipartimentale, verifica referente |
| **Esportazione / Report** | Report gruppo curricolo, esportazione esito dipartimentale `.cml`, import esiti dipartimentali, documenti di sintesi, output per collegio/referente |

### 4.3 Non contiene

- Progettazione UDA operativa
- Attività di classe
- Materiali per studenti
- Rubriche operative di singola attività
- Consegne didattiche
- Diario di lezione
- Programmazione annuale del docente

### 4.4 Mappa funzioni attuali → Curriculum

| Funzione attuale | Sottoarea Curriculum |
|---|---|
| Viewer curricolo (IN 2012 / IN 2025) | Consultazione |
| Sezioni generali | Consultazione |
| Riferimenti normativi | Consultazione |
| Revisione per disciplina | Revisione |
| Confronto testo attuale/proposta | Revisione |
| Proposta docente `.cml` | Revisione (input) |
| Validazione dipartimentale (esito `.cml`) | Revisione |
| Export esito dipartimentale `.cml` | Esportazione / Report |
| Import esiti dipartimentali (referente) | Revisione / Esportazione |
| Report gruppo curricolo | Esportazione / Report |
| **Tecnologia normalizzata (pacchetto pilota)** | **Consultazione** — non è area separata |

---

## 5. Area Didattica

### 5.1 Definizione

Didattica è l'area **esecutiva**. Serve a trasformare il curricolo in progettazione concreta, attività, materiali e valutazione. Dice **come** il docente realizza in classe ciò che il curricolo dichiara.

### 5.2 Contiene

| Sottoarea | Cosa include |
|---|---|
| **Progettazione** | UDA, percorsi, programmazione classe/disciplina, mappe concettuali |
| **Attività** | Laboratorio, consegne, compiti autentici, materiali per la classe, schede, esercitazioni |
| **Valutazione** | Evidenze osservabili, criteri valutazione, rubriche, griglie, osservazioni, feedback |
| **Archivio didattico** | Materiali riutilizzabili, esempi, risorse per docente, template |

### 5.3 Non contiene

- Approvazione istituzionale del curricolo
- Validazione collegiale definitiva
- Gestione del PTOF
- Revisione normativa del curricolo
- Esportazione esito dipartimentale `.cml`
- Report gruppo curricolo

### 5.4 Stato attuale

L'area Didattica è **vuota** al momento. CurManLight contiene solo funzioni Curriculum. Il modello Didattica è definito per:
- evitare che future funzioni didattiche vengano inserite come nuove card Curriculum;
- preparare la Home a ospitare entrambe le aree;
- garantire che ogni funzione didattica futura abbia una collocazione stabile.

---

## 6. Confini Curriculum / Didattica

| Aspetto | Curriculum | Didattica |
|---|---|---|
| Natura | Istituzionale, documentale | Operativa, flessibile |
| Destinatari | Scuola, dipartimento, referente, DS | Docente, consiglio di classe |
| Output | Curricolo, esiti, report, delibere | UDA, attività, materiali, valutazioni |
| Validazione | Dipartimento, referente, collegio | Docente, CdC, autovalutazione |
| Aggiornamento | Annuale / per revisione istituzionale | Continuo, per periodo didattico |
| Rigidità | Alta (segue normativa) | Bassa (adattabile al contesto) |
| Fonte | Indicazioni Nazionali, PTOF | Curricolo di istituto, esigenze classe |

### Regola di confine

> **Curriculum dice che cosa la scuola dichiara, revisiona e valida.**
> **Didattica dice come il docente lo realizza in classe.**

Se una funzione produce un output che richiede validazione collegiale o istituzionale, appartiene a Curriculum. Se produce un output che il docente usa in classe senza approvazione formale, appartiene a Didattica.

---

## 7. Posizione di Tecnologia normalizzata

**Tecnologia normalizzata** è un **pacchetto disciplinare pilota** dentro **Curriculum > Consultazione**.

- Non è un'area.
- Non è una card principale.
- Non è un tab separato.
- È un contenuto normalizzato consultabile dentro la sezione curricolo, allo stesso modo delle altre discipline.

### Implicazioni

- La preview Tecnologia (`#tecnologia-norm-panel`) rimane dentro `#tab-curricolo`.
- Non avrà mai un tab proprio nella barra principale.
- Eventuali futuri pacchetti normalizzati (altre discipline) seguiranno la stessa regola.
- La Home potrà linkare "Tecnologia normalizzata" come link secondario sotto Curriculum > Consultazione, non come card.

---

## 8. Struttura target della Home

```
┌─────────────────────────────────────────────────┐
│  Benvenuto in CurManLight                        │
│  Scegli l'area di lavoro                         │
├──────────────────────┬──────────────────────────┤
│  CURRICULUM          │  DIDATTICA                │
│                      │                           │
│  Consulta, revisiona │  Trasforma il curricolo   │
│  ed esporta il       │  in lavoro didattico:     │
│  curricolo di        │  UDA, attività,           │
│  istituto.           │  materiali, valutazione.  │
│                      │                           │
│  • Consulta          │  • Progetta UDA           │
│  • Revisiona         │  • Prepara attività       │
│  • Esporta           │  • Valuta evidenze        │
│  • Tecnologia norm.  │  • Materiali per classe   │
└──────────────────────┴──────────────────────────┘
```

### Regole Home

1. Massimo **2 card principali** (Curriculum, Didattica).
2. Massimo **3-4 link secondari** per card.
3. **Niente "Tecnologia" come card principale.**
4. **Niente export/report come card principale.**
5. **Niente validazione referente come card principale.**
6. Le funzioni operative restano raggiungibili dopo la scelta dell'area.
7. La Home orienta, non sostituisce le sezioni.

---

## 9. Regole di naming

| Termine | Uso obbligatorio | Uso vietato |
|---|---|---|
| Curriculum | Area principale istituzionale | Come sinonimo di "tutto" |
| Didattica | Area principale esecutiva | Come sinonimo di "lezioni" |
| Consultazione | Lettura e navigazione del curricolo | Come sinonimo di "area" |
| Revisione | Modifica/decisione sul curricolo | Come sinonimo di "report" |
| Esportazione / Report | Strumenti secondari di output | Come area principale |
| Tecnologia normalizzata | Pacchetto disciplinare pilota | Come tab / card / area |
| Progettazione (Didattica) | UDA, percorsi, programmazione | Come sinonimo di "curricolo" |
| Attività (Didattica) | Consegne, laboratorio, materiali | Come sinonimo di "lezioni" |
| Valutazione (Didattica) | Evidenze, rubriche, griglie | Come sinonimo di "esame" |
| Strumenti | **Evitare** se non accompagnato da specifica | Usare solo se chiarito (es. "Strumenti di esportazione") |

---

## 10. Regole UX derivate dal modello

1. **Prima l'area, poi l'azione.** L'utente sceglie Curriculum o Didattica prima di vedere pulsanti operativi.
2. **Consultazione ≠ revisione.** Le azioni di lettura sono separate visivamente dalle azioni di modifica.
3. **Export non è primario.** I pulsanti di esportazione sono raggruppati e non dominano la schermata.
4. **Tecnologia normalizzata è contenuto.** Non ha un tab proprio, non ha un pulsante Home separato.
5. **Validazione referente è un passaggio di Revisione, non un'area.** È raggiungibile solo dopo aver scelto Curriculum > Revisione.
6. **Didattica inizia vuota.** La Home mostra l'area, ma le funzioni didattiche arriveranno in slice successive.
7. **Niente etichette generiche.** "Strumenti", "Azioni", "Altro" vanno evitati o specificati.

---

## 11. Impatto su export/import/report

| Funzione | Collocazione attuale | Collocazione target |
|---|---|---|
| Export esito dipartimentale `.cml` | Pulsante in revisione | Curriculum > Revisione > (pulsante secondario) |
| Import esiti dipartimentali | Pulsante in area referente | Curriculum > Revisione > (passaggio referente) |
| Report gruppo curricolo | Pulsante in area referente | Curriculum > Esportazione / Report |
| Export proposta docente `.cml` | Pulsante docente | Curriculum > Revisione > (input docente) |
| Tecnologia preview export | Pulsante nel pannello | Curriculum > Consultazione > (pulsante secondario nel pacchetto) |

I pulsanti di export non scompaiono, ma vengono **raggruppati e spostati** in sezioni secondarie. La riduzione della densità UI (CML-063 P1) sarà affrontata in CML-066.

---

## 12. Impatto su futuri pacchetti disciplinari normalizzati

| Regola | Descrizione |
|---|---|
| Collocazione | Curriculum > Consultazione, come contenuto dentro la disciplina corrispondente |
| Accesso | Dal viewer curricolo, non da tab separato |
| Naming | `{Disciplina} normalizzata` — es. "Matematica normalizzata" |
| Preview | Read-only, badge "Richiede validazione umana" |
| Replica | Ogni nuova disciplina normalizzata segue lo stesso schema di Tecnologia |
| Nessuna card | Non appare in Home come card |

Ogni pacchetto normalizzato è un arricchimento del curricolo vigente, non una nuova funzionalità.

---

## 13. Impatto su futuri moduli didattici

| Modulo | Collocazione target | Priorità |
|---|---|---|
| UDA (Unità di Apprendimento) | Didattica > Progettazione | Alta |
| Attività didattiche | Didattica > Attività | Media |
| Consegne e compiti autentici | Didattica > Attività | Media |
| Rubriche valutazione | Didattica > Valutazione | Media |
| Evidenze osservabili | Didattica > Valutazione | Alta |
| Materiali per la classe | Didattica > Archivio didattico | Bassa |

Nessun modulo didattico entra in Curriculum. L'area Didattica inizia vuota e viene popolata progressivamente.

---

## 14. Non-obiettivi

Questo contratto **non**:

- Modifica il runtime.
- Aggiunge o rimuove pulsanti.
- Cambia lo schema `.cml`.
- Cambia la persistenza.
- Introduce backend, login, OAuth, API, Drive.
- Definisce il modello dati Didattica (sarà in slice separata).
- Implementa la Home (sarà in CML-065A).
- Riduce la densità UI (sarà in CML-066).
- Decide il primo modulo Didattica (sarà in CML-067).

---

## 15. Prossime slice consigliate

| Slice | Tipo | Descrizione |
|---|---|---|
| **CML-065A** | Runtime | HOME_DASHBOARD_TWO_AREAS — aggiungere Home con 2 card (Curriculum, Didattica) |
| **CML-065B** | Smoke | HOME_DASHBOARD_LIVE_DEPLOY_SMOKE — smoke su GitHub Pages |
| **CML-066** | Runtime | CURRICULUM_ACTION_DENSITY_REDUCTION — ridurre pulsanti visibili in revisione/export |
| **CML-067** | Audit | DIDATTICA_MODULE_SELECTION_AUDIT — decidere primo modulo Didattica |
| **CML-068** | Runtime | DIDATTICA_FIRST_READONLY_PROTOTYPE — primo prototipo didattico non invasivo |

---

## 16. Appendice — Riferimenti

| Documento | Relazione |
|---|---|
| `docs/02_system/NORMALIZED-CURRICULUM-DATA-CONTRACT.md` (CML-061) | Definisce struttura dati normalizzata, modello Curriculum |
| `docs/02_system/ROLE-ACCESS-CODE-GATING-CONTRACT.md` (CML-055) | Blocco operativo, applicato a Curriculum > Revisione |
| `docs/03_execution/CML-063.md` | Audit UX, rileva P1 su densità e assenza Home |
| `docs/03_execution/CML-062.md` | Pacchetto Tecnologia normalizzato (prima disciplina) |
| `docs/03_execution/CML-064.md` | Preview Tecnologia nel runtime |
