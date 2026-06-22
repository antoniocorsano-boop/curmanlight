# ROLE-ACCESS-CODE-GATING-CONTRACT

**Stato:** Bozza implementativa  
**Riferimento:** CML-054 (selezione), CML-055 (contract)  
**App:** CurManLight — app statica su Netlify, nessun backend, nessun database

---

## A. Principio generale

Il codice operativo è un blocco locale lato client, non una password, non un login, non una autenticazione. Serve esclusivamente a ridurre usi accidentali durante la prova controllata e a distinguere i ruoli operativi.

- Non è sicurezza forte.
- Non certifica identità.
- Non sostituisce autorizzazioni, firme, delibere o validazioni degli organi competenti.
- Può essere aggirato da un utente con conoscenze tecniche (console del browser).

---

## B. Ruoli

| Ruolo | Codice operativo | Azioni protette |
|---|---|---|
| Docente | Non richiesto | Nessuna |
| Consultatore | Non richiesto | Nessuna |
| Dipartimento / Coordinatore | Richiesto | Export esito dipartimentale `.cml` |
| Referente curricolo | Richiesto | Import esiti dipartimentali, Report gruppo curricolo |

---

## C. Azioni protette

| Azione | Costante / ID | Ruolo | Blocco |
|---|---|---|---|
| Esportazione esito dipartimentale `.cml` | `departmentOutcomeExport` | Coordinatore | ✅ |
| Import esiti dipartimentali lato referente | `referentOutcomeImport` | Referente | ✅ |
| Generazione report gruppo curricolo | `referentReportGeneration` | Referente | ✅ |

### Dettaglio implementativo

- `departmentOutcomeExport`: quando l'utente preme il pulsante di esportazione esito dipartimentale, prima di generare il file mostrare la richiesta del codice operativo.
- `referentOutcomeImport`: quando l'utente seleziona file `.cml` di esito dipartimentale per l'import, prima di elaborare i file mostrare la richiesta del codice operativo.
- `referentReportGeneration`: quando l'utente preme il pulsante di generazione report, prima di generare il file mostrare la richiesta del codice operativo.

---

## D. Azioni libere

Le seguenti azioni NON richiedono codice operativo:

- Consultazione del curricolo (viewer IN 2012 / IN 2025)
- Navigazione delle sezioni generali
- Lettura di guide, schede stato, nota di rilascio
- Consultazione degli esempi `.cml`
- Esportazione proposta docente `.cml` (funzione docente)
- Personalizzazione della proposta docente
- Import proposta docente (lato dipartimento) — il file viene dalla stampa/docente, non è azione protetta
- Validazione manuale degli esiti (registrazione degli esiti nel dipartimento) — l'esportazione del file `.cml` è protetta, la validazione/lettura no
- Navigazione e consultazione di qualsiasi sezione informativa

---

## E. Comportamento UX

### Quando compare la richiesta codice

La richiesta codice compare come overlay modale/al centro della scherma:

- quando l'utente preme "Esporta esito dipartimento .cml"
- quando l'utente preme "Importa esiti dipartimentali .cml"
- quando l'utente preme "Scarica report gruppo di lavoro"

### Testi

| Elemento | Testo |
|---|---|
| **Titolo** | "Codice operativo richiesto" |
| **Testo** | "Questa funzione è riservata al ruolo indicato nella prova controllata. Inserisci il codice operativo fornito dal referente." |
| **Avvertenza** | "Il codice evita usi accidentali dello strumento. Non è una password istituzionale e non sostituisce autorizzazioni, firme o delibere." |
| **Etichetta campo** | "Codice operativo" |
| **Placeholder** | "Inserisci il codice…" |
| **Pulsante positivo** | "Sblocca funzione" |
| **Pulsante negativo** | "Annulla" |
| **Errore codice errato** | "Codice non valido. Verifica con il referente il codice operativo corretto." |

### Blocca di nuovo

Dopo aver sbloccato una funzione, l'utente può bloccarla di nuovo con un pulsante esplicito accanto all'area della funzione (es. "Blocca di nuovo") senza dover ricaricare la pagina.

### Durata sblocco

| Elemento | Scelta |
|---|---|
| Persistenza | **SessionStorage** (scompare alla chiusura della scheda) |
| localStorage | ❌ Non usare |
| Sblocco multiprocedura | Sbloccando una procedura (es. export), anche le altre due vengono sbloccate per la stessa sessione |
| Blocco manuale | Il pulsante "Blocca di nuovo" rimuove il token dalla sessionStorage e ripristina il blocco per tutte e tre le azioni |

### Flusso dettagliato

1. Utente preme pulsante azione protetta
2. Se sessionStorage non contiene `roleAccessGranted: true`:
   - Mostra overlay modale codice operativo
   - Utente inserisce codice
   - Se corretto → `roleAccessGranted: true` in sessionStorage → esegue azione
   - Se errato → mostra errore, utente può riprovare o annullare
3. Se sessionStorage contiene `roleAccessGranted: true`:
   - Esegue azione direttamente (nessuna richiesta codice)
4. Utente può premere "Blocca di nuovo" → rimuove `roleAccessGranted` da sessionStorage

---

## F. Codici operativi

### Valore predefinito per la prova controllata

```
CML2025
```

- Non sensibile (documentato nelle guide alla prova)
- Non legato a persone
- Non contiene dati personali
- Non richiede configurazione

### Cambio codice

- Per cambiare codice, aggiornare la costante JavaScript in `index.html`
- Nessuna interfaccia di configurazione in questa fase
- Nessun salvataggio di codice utente

---

## G. Persistenza

| Aspetto | Scelta |
|---|---|
| Dove | `sessionStorage` — chiave: `roleAccessGranted`, valore: `true` o `false` |
| localStorage | ❌ Non usare — evitare sblocco persistente tra sessioni |
| Durata | Fino alla chiusura della scheda o al blocco manuale |
| Dati personali | Nessuno |
| Cookie | Nessuno |
| Dati trasmessi | Nessuno |

---

## H. Sicurezza e limiti

| Aspetto | Dichiarazione |
|---|---|
| Aggirabile | ✅ Sì — un utente può aprire la console del browser e impostare `sessionStorage.setItem('roleAccessGranted', 'true')` |
| Protezione dati | Nessuna — lo strumento non gestisce dati personali o sensibili |
| Scopo reale | Ridurre errori accidentali durante la prova controllata |
| Non è | Autenticazione, autorizzazione, firma, validazione, login |
| Non certifica | Identità, ruolo istituzionale, titolo, appartenenza all'istituzione scolastica |

**Testo di disclosure consigliato** (da inserire nelle guide o nella sezione info):
> Il codice operativo è un blocco leggero che evita di attivare per errore funzioni operative. Può essere aggirato tecnicamente e non rappresenta una protezione di sicurezza. CurManLight non gestisce dati personali o sensibili.

---

## I. Compatibilità

| Componente | Modifica prevista |
|---|---|
| Schema `.cml` | ❌ Nessuna |
| File `.cml` esportati | ❌ Nessuna — non contengono traccia del codice |
| Flusso docente | ❌ Nessuna |
| Viewer curricolo | ❌ Nessuna |
| Sezioni generali | ❌ Nessuna |
| Report gruppo curricolo | ❌ Nessuna modifica al contenuto — solo richiesta codice prima della generazione |
| Guide / docs | ✅ Eventuale aggiornamento per menzionare il codice operativo |
| Backend / login / OAuth / Drive API | ❌ Nessuno — assente per architettura |

---

## J. Smoke test per implementazione futura

| ID | Test | Esito atteso |
|---|---|---|
| T01 | Viewer curricolo senza codice | Accesso libero ✅ |
| T02 | Proposta docente `.cml` senza codice | Esportazione libera ✅ |
| T03 | Export esito dipartimentale senza codice | Blocco con richiesta codice 🔒 |
| T04 | Export esito dipartimentale con codice valido | Esportazione riuscita ✅ |
| T05 | Import esiti referente senza codice | Blocco con richiesta codice 🔒 |
| T06 | Import esiti referente con codice valido | Import riuscito ✅ |
| T07 | Report gruppo curricolo senza codice | Blocco con richiesta codice 🔒 |
| T08 | Report gruppo curricolo con codice valido | Generazione riuscita ✅ |
| T09 | Codice errato | Messaggio errore non tecnico ❌ |
| T10 | Blocca di nuovo | Stato bloccato ripristinato 🔒 |
| T11 | Refresh pagina | Stato bloccato (sessionStorage perso) 🔒 |
| T12 | Nessuna modifica ai file `.cml` esportati | File invariati ✅ |
| T13 | Nessuna falsa approvazione nei testi | Avvertenza presente ✅ |

---

## Appendice — Codice JavaScript di riferimento

Implementazione minima prevista in `index.html`:

```javascript
const OPERATIVE_CODE = "CML2025";

function requireOperativeCode(callback) {
  if (sessionStorage.getItem("roleAccessGranted") === "true") {
    callback();
    return;
  }
  showCodeModal(callback);
}

function showCodeModal(callback) {
  // Mostra overlay modale (già presente nello stile CML)
  // Campi: titolo, testo, avvertenza, campo input, Sblocca/Annulla
  // Su "Sblocca": se codice === OPERATIVE_CODE → sessionStorage.setItem(...) → callback()
  // Su "Annulla": chiude modale
}

function lockAccess() {
  sessionStorage.removeItem("roleAccessGranted");
}
```

I testi microcopy sono nella sezione E. Lo stile del modale deve essere coerente con gli overlay CML esistenti.
