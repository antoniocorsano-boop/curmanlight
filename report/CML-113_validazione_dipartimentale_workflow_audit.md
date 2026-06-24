# Report CML-113 — Validazione Dipartimentale Workflow Audit

## 1. Stato Repository

| Elemento | Valore |
|----------|--------|
| Branch | `main` |
| HEAD | `1804ac5` |
| Working tree | pulita |
| Origin | ahead di 18 commit |
| Slice precedente | `CML_112A_HASH_SELECTION_SMOKE_TEST_PASSED` |
| Stato discipline | 14/14 complete, tutte "In revisione" |

## 2. Sintesi del Flusso Attuale

### A. Pannelli esistenti (Curriculum > Consultazione)

- **"Stato di completezza"** (linee 4550-4575): mostra contatori statici (14/0/0) con 14 righe "Bozza completa disponibile / In revisione". Nota: "L'approvazione resta esterna allo strumento".
- **"Readiness per approvazione"** (linee 4577-4603): mostra contatori statici (14/0/0) con 14 righe "In revisione". Nota: "Richiede controllo dipartimentale e validazione umana".
- Entrambi i pannelli sono **read-only**, **statici**, **hardcoded** — non c'è un motore di stato che li aggiorni dinamicamente.

### B. Pannello validazione dipartimentale esistente (Curriculum > Revisione)

- `<details id="department-import-panel">` (linea 1315)
- Importa file `.cml` con proposte docente
- Permette decisioni per-proposta (confluita, riformulata, assorbita, da chiarire)
- Esporta esito dipartimento `.cml`
- **Non c'è un'azione per validare/intero una disciplina completa**

### C. Pannello verifica referente (Curriculum > Revisione)

- `<details id="referent-validation-panel">` (linea 1326)
- Importa esiti dipartimentali `.cml`
- Genera report gruppo di lavoro Markdown

### D. Azioni per-item (Curriculum > Revisione)

- Ogni traguardo/obiettivo ha: ✅ approva, ❌ rifiuta, 🔍 confronto, ✏️ personalizza, 🗑 rimuovi
- Decisioni: `item.decisione = "approvata" | "rifiutata" | null`
- Il Riepilogo mostra solo elementi approvati/invariati

### E. Protezioni (role-access gating)

- `requireRoleAccess()` per: `departmentOutcomeExport`, `referentOutcomeImport`, `referentReportGeneration`
- Codice operativo `CML2025` (documentato, non segreto, non autenticazione)

### F. Nessun motore di stato centralizzato

- Nessuna costante/variabile per stati disciplinari
- Stati esistenti solo come label hardcoded: "In revisione", "Sola consultazione", "Pronte per approvazione"
- Il modello stati (CML-089) esiste come contratto docs-only, **non implementato a runtime**

## 3. Problemi Individuati

### P0 — Rischio di falsa approvazione o stato istituzionale ambiguo

- **P0.1**: I pannelli completezza/readiness mostrano 14/14 come "Bozza completa disponibile / In revisione" ma **non esiste alcun meccanismo per registrare una validazione dipartimentale effettiva**. Un osservatore esterno potrebbe interpretare lo stato come "approvato dal dipartimento".
- **P0.2**: Il termine "Definitivo" (tab Riepilogo) è ambiguo: mostra solo elementi approvati individualmente, non rappresenta una validazione dipartimentale formale.
- **P0.3**: Nessuna distinzione tra "validazione dipartimentale" e "approvazione formale del Collegio Docenti" a livello UI.

### P1 — Mancanza di un flusso chiaro per validare una disciplina

- **P1.1**: Il docente approva/rifiuta singoli item, ma non c'è un'azione "Il dipartimento ha validato questa disciplina nel suo complesso".
- **P1.2**: Il pannello "Validazione dipartimentale" importa proposte docente ma **non valida discipline complete** — il nome è fuorviante vs l'operazione reale (import proposte, non validazione disciplinare).
- **P1.3**: Il contatore "In revisione" non cambia mai — tutte le 14 discipline sono bloccate in questo stato.

### P1 — Assenza di distinzione tra validazione dipartimentale e approvazione definitiva

- **P1.4**: Non esiste rappresentazione UI per:
  - Bozza completa → controllata dal dipartimento
  - Bozza completa → validata dal dipartimento (pronta per approvazione)
  - Bozza completa → validata dal dipartimento con note
  - Bozza completa → respinta/rinviata dal dipartimento

### P2 — Microcopy poco chiaro

- **P2.1**: "Validazione dipartimentale" come label del pannello di import proposte docente è fuorviante (linea 1316).
- **P2.2**: "Readiness per approvazione" è un termine tecnico, non immediato per un docente non tecnico.
- **P2.3**: La nota "controllare e validare in dipartimento" (linea 4569) suggerisce un'azione che **non è possibile compiere nello strumento**.

### P2 — Stato non visibile o non coerente

- **P2.4**: I contatori completezza e readiness sono identici (14/0/0) — l'utente percepisce duplicazione, non informazione aggiuntiva.
- **P2.5**: Non c'é modo per un coordinatore di dipartimento di vedere lo stato di validazione delle discipline del proprio dipartimento in un'unica vista.

### P3 — Rifiniture visive

- **P3.1**: I pannelli completezza/readiness sono molto lunghi (14 righe ciascuno) senza possibilità di collasso.
- **P3.2**: Le righe per disciplina nei pannelli non hanno azioni — solo testo.

## 4. Stati Consigliati per il Ciclo di Validazione

Derivati dal contratto CML-089 con adattamento al flusso reale:

| Stato | Significato | UI consentita | UI vietata |
|-------|-------------|---------------|------------|
| **bozza_generabile** | Struttura dati presente, contenuto da verificare | Badge informativo, link a disciplina | Azioni di validazione |
| **in_revisione** | Il dipartimento sta lavorando sulla disciplina | Badge, conteggio progresso, note interne | Approvazione formale |
| **validata_dipartimento** | Il dipartimento ha esaminato e approva la disciplina | Badge verde, data validazione, referente | Pulsante "approvazione definitiva" |
| **validata_con_note** | Il dipartimento valida con rilievi da integrare | Badge giallo, note visibili, data | Stesso valore di validata |
| **pronto_approvazione** | La disciplina è completa e pronta per il Collegio | Badge blu, indicazione chiara "pronto per Collegio Docenti" | Confusione con approvazione reale |
| **approvato_esternamente** | Approvato dal Collegio (registrato manualmente) | Badge "Approvato dal Collegio Docenti", read-only | Modifica contenuti |

## 5. Azioni Consentite (per CML-114)

1. **Selezionare una disciplina** da validare (tra le 14/14 complete)
2. **Registrare l'esito della validazione dipartimentale** per disciplina:
   - "Validata dal dipartimento"
   - "Validata con note"
   - "Rinviata per approfondimenti"
   - "Da riesaminare"
3. **Aggiungere note testuali** di accompagnamento (libere, non strutturate)
4. **Vedere lo stato di validazione** nel pannello completezza/readiness
5. **Registrare la data** di validazione (tramite timestamp session)
6. **Reset dello stato** (revoca validazione)

## 6. Azioni Vietate (assolutamente)

1. ❌ **Nessun pulsante "Approva definitivamente"** — la validazione dipartimentale non è approvazione
2. ❌ **Nessuna modifica al contenuto disciplinare** — la validazione è un controllo, non un editing
3. ❌ **Nessun automatismo di promozione dello stato** — ogni transizione richiede azione umana esplicita
4. ❌ **Nessuna persistenza automatica** — `localStorage` solo su azione esplicita dell'utente
5. ❌ **Nessuna etichetta "Approvato"** né varianti (✅ ok solo a livello item, non disciplina)
6. ❌ **Nessun dato personale obbligatorio** — il nome del validatore è opzionale
7. ❌ **Nessuna autenticazione reale** — nessun login, nessuna password, nessun backend
8. ❌ **Nessuna modifica a schema `.cml`** — la validazione è UI-only in questo ciclo

## 7. Posizione UI Consigliata

### Per CML-114 (primo incremento):

**Opzione consigliata: pannello "Validazione dipartimentale" nel tab Curriculum > Consultazione**, dopo i pannelli completezza/readiness, con:

- Titolo: `🏫 Validazione dipartimentale`
- Sottotitolo: "Registra l'esito del controllo dipartimentale per ogni disciplina"
- Tabella/discipline rows con:
  - Nome disciplina
  - Stato attuale (da stato contratto)
  - Azione "Valida / Rivedi / Rinvio" (dropdown o pulsanti)
  - Note opzionali
  - Data validazione
- Pulsante "Registra validazione" per disciplina

**Alternativa scartata**: pannello nel tab Revisione (già denso, rischia confusione con azioni item)
**Alternativa scartata**: tab dedicato "Validazione" (eccessivo per primo incremento)

## 8. Primo Incremento Runtime Consigliato per CML-114

### Obiettivo

Aggiungere la possibilità di registrare l'esito della validazione dipartimentale per disciplina, con persistenza in `localStorage`, all'interno del tab Curriculum > Consultazione, dopo i pannelli esistenti.

### Perimetro minimo

1. **Struttura dati** (JS): array/oggetto `departmentValidationState` con `{disciplina, esito, note, data, validatore (opzionale)}`
2. **UI**: nuova sezione "Validazione dipartimentale" sotto i pannelli esistenti
3. **Persistenza**: `localStorage` con chiave `curmanlight.departmentValidation`
4. **Aggiornamento contatori**: i pannelli completezza/readiness devono riflettere lo stato di validazione
5. **Reset**: pulsante "Annulla validazione" per disciplina

### Non incluso in CML-114

- Filtri per stato validazione
- Vista riepilogo validazioni
- Export della validazione
- Notifiche o alert
- Collegamento con flusso referente

## 9. File da Modificare in CML-114

| File | Modifica |
|------|----------|
| `_published_snapshot/netlify-current/index.html` | Aggiungere sezione validazione + logica JS + CSS |

## 10. File da Non Modificare

| File | Motivo |
|------|--------|
| `sw.js` | Asset statico, non coinvolto |
| `_headers` | Asset statico, non coinvolto |
| `_published_snapshot/netlify-current/assets/*` | Asset non coinvolti |
| `content/curriculum/*.json` | Dati curricolari non modificati |
| `docs/02_system/*` | Contratti non modificati in runtime slice |
| `.github/workflows/pages.yml` | Workflow invariato |
| `motto-non-multa-sed-multum/*` | Asset non coinvolto |

## 11. Controlli Minimi per CML-114

- [ ] **A1**: La sezione "Validazione dipartimentale" è visibile in Curriculum > Consultazione
- [ ] **A2**: Ogni disciplina (14/14) ha un controllo di validazione
- [ ] **A3**: Almeno 3 esiti disponibili (validata, validata con note, rinviata)
- [ ] **A4**: Le note opzionali sono salvate e recuperate
- [ ] **A5**: La data di validazione è registrata
- [ ] **A6**: Il pannello completezza si aggiorna dopo validazione
- [ ] **A7**: Il pannello readiness si aggiorna dopo validazione
- [ ] **A8**: Nessun pulsante "Approva definitivamente"
- [ ] **A9**: Nessuna modifica al contenuto disciplinare
- [ ] **A10**: Il reset funziona (revoca validazione)
- [ ] **A11**: `localStorage` è l'unica persistenza
- [ ] **A12**: Schema `.cml` invariato
- [ ] **A13**: Export/import/report invariati
- [ ] **A14**: Role-access gating invariato
- [ ] **A15**: Nessuna regressione su navigazione, home, didattica

## 12. Rischi e Mitigazioni

| Rischio | Probabilità | Impatto | Mitigazione |
|---------|-------------|---------|-------------|
| Confusione validazione ≠ approvazione | Media | Alto | Microcopy esplicita "Non sostituisce l'approvazione del Collegio Docenti" |
| Uso eccessivo di localStorage | Media | Basso | Singola chiave, struttura dati leggera |
| Disallineamento con flusso referente | Bassa | Medio | Separare i due flussi: validazione dipartimentale (stato) vs referente (report) |
| Percezione di completezza fittizia | Bassa | Alto | Badge chiari, note visibili, stato reversibile |

## 13. Mappatura con Documenti Esistenti

| Documento | Relazione |
|-----------|-----------|
| `DISCIPLINARY_APPROVAL_READINESS_STATE_MODEL_CONTRACT.md` (CML-089) | Stati di riferimento, da estendere con `validata_dipartimento` e `validata_con_note` |
| `PRODUCT-MODEL-CURRICULUM-DIDATTICA-CONTRACT.md` (CML-065) | La validazione è parte di Curriculum (istituzionale), non Didattica |
| `DESIGN-SYSTEM-AND-NAVIGATION-CONTRACT.md` (CML-072) | Badge e pannelli devono seguire le classi definite |
| `CML_GUIDA_RAPIDA_UTENTE.md` | La guida va aggiornata dopo CML-114 |

## 14. Classificazione Finale

| Priorità | Componente | Problema |
|----------|-----------|----------|
| **P0** | Falsa approvazione | Nessuna distinzione validazione/approvazione |
| **P1** | Flusso assente | Nessuna azione per validare una disciplina completa |
| **P1** | Microcopy | Pannello "Validazione dipartimentale" importa proposte, non valida |
| **P2** | UI statica | Contatori 14/0/0 invariati, nessuna interazione |
| **P2** | Vista raggruppata | Mancanza vista unica validazione per coordinatore |
| **P3** | Esperienza | Pannelli lunghi senza collasso |

## 15. Verdetto Finale

```
CML_113_VALIDAZIONE_DIPARTIMENTALE_WORKFLOW_AUDIT_READY
```

Prossimo step: CML-114 — VALIDAZIONE_DIPARTIMENTALE_FIRST_RUNTIME_INCREMENT
