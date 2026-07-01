# Report — CML-UX-AREA-RATIONALIZATION-AND-LIGHTWEIGHT-EXPERIENCE-AUDIT

Tipo: docs-only / read-only audit · Runtime modificato: no · Push: non eseguito
HEAD/origin: `61e623d` · Verdict: `CML_UX_AREA_RATIONALIZATION_AND_LIGHTWEIGHT_EXPERIENCE_AUDIT_READY_LOCAL_NOT_PUSHED`

## 1. Sintesi esecutiva

CurManLight espone oggi **12 superfici** di navigazione (5 tab principali, 8 sotto-viste) più
cruscotto, menu Azioni e modali. L'audit rileva un buon impianto di contenuti ma **eccesso di
orientamento e sovrapposizioni**: il processo è spiegato tre volte in Home, i riferimenti normativi
sono duplicati tra "Fonti" e "Sezioni generali", "Bozza disciplina" e "Copia di sicurezza" compaiono
in più aree, e la "Programmazione annuale" concentra tre strumenti distinti in un'unica schermata
(criticità **P0**). L'obiettivo della futura remediation è passare a **7 aree** chiare secondo il
principio *una schermata, un compito, una decisione*, senza toccare dati, schema, storage,
validatori, import/export interno o filtri UDA.

## 2. Tabella area / problema / intervento

| Area | Problema rilevato | Impatto utente | Priorità | Decisione | Intervento | Rischio regressione | Controllo slice runtime |
|---|---|---|---|---|---|---|---|
| Home | Percorso + card + microguida + footer + cruscotto: orientamento triplicato | Carico cognitivo alto | P1 | Alleggerire | 1 spiegazione, 1 azione primaria | Basso | Home apre, link funzionano |
| Consulta | — | — | P3 | Mantenere | Nessuno | Nullo | Curriculum consultabile |
| Revisione | Pannello "Bozza disciplina" duplica Esportazioni | Confusione azioni | P1 | Alleggerire | Rimuovere doppione, toolbar 2 filtri | Medio | Filtri e decisioni invariati |
| Processo | Due ruoli + import tecnici nella stessa vista | Ambiguità di ruolo | P2 | Alleggerire | Un ruolo per volta, etichette chiare | Medio | Import docente/dip./ref. ok |
| Definitivo | Sovrapposizione con Esportazioni | Ridondanza | P2 | Accorpare | Confluire in "Documenti" | Medio | Definitivo accessibile |
| Fonti | Pagina normativa molto lunga | Peso in nav primaria | P2 | Accorpare/spostare | Unire a Sezioni generali; discorsivo in Guida | Basso | Fonti consultabili |
| Sezioni generali | Duplica riferimenti di Fonti; semi-nascosta | Contenuto ripetuto | P1 | Accorpare | Fondere con Fonti → "Riferimenti" | Basso | Contenuti preservati |
| Valutazione / Evidenze | Due box informativi + footer ripetuti | Testo eccessivo | P2 | Alleggerire | 1 box; "come usare" in Guida | Basso | Evidenze e filtri ok |
| Programmazione annuale | 3 strumenti in una schermata | Sovraccarico, molte decisioni | **P0** | Accorpare+alleggerire | Separare consultazione / bozza / UDA smart | Alto | Bozza + UDA smart + filtri invariati |
| UDA modello | Concetto UDA scisso da "UDA smart" | Confusione | P1 | Accorpare | Area UDA unica con due modalità | Alto | Generazione UDA invariata |
| Esportazioni | 7 gruppi / ~20 pulsanti, doppioni | Difficoltà di scelta | P1 | Alleggerire | Raggruppare per compito, dedup | Medio | Tutti i download funzionanti |
| Guida | Sottoutilizzata | — | P3 | Mantenere | Assorbire spiegazioni lunghe | Basso | Guida accessibile |
| Cruscotto | Doppia orientamento con Home | Ridondanza | P2 | Alleggerire | 1 azione primaria contestuale | Medio | Progressione/azioni ok |
| Stati vuoti | Poco orientati all'azione | Minore | P2 | Alleggerire | Testo orientato al passo successivo | Basso | Nessuna perdita dati |
| Flussi ruolo | Frammentati su 3 aree | Percorso disperso | P2 | Accorpare | Convogliare in Revisione+Processo | Medio | Role-gating invariato |

## 3. Contenuti da mantenere

- Curriculum → Consulta (viewer IN 2012 / 2025).
- Guida (struttura e testi già chiari).
- Dati, logica, storage locale, import/export `.cml`, validatori, filtri UDA: **invariati**.
- Avvisi di garanzia ("Documento di lavoro — da validare", "nessun dato studente").

## 4. Contenuti da alleggerire

- Home: da tripla spiegazione del processo a una sola + azione primaria.
- Esportazioni: da 7 gruppi a raggruppamenti per compito.
- Revisione: toolbar a 2 filtri principali + "Altri filtri".
- Valutazione / Evidenze: un solo box informativo.
- Programmazione annuale: separare i tre strumenti (P0).
- Cruscotto: una sola azione primaria contestuale.

## 5. Contenuti da spostare nella Guida

- Microguida "Usa CurManLight in 5 minuti" (oggi in Home).
- Box "Come usare questa sezione" (Valutazione / Evidenze).
- Parte discorsiva/esplicativa delle Fonti e delle note operative ripetute.

## 6. Contenuti da nascondere o rendere secondari

- "Sezioni generali" come area a sé (fondere in "Riferimenti").
- "Bozza disciplina" duplicata in Esportazioni (mantenere un solo punto d'accesso).
- "Copia di sicurezza" in Esportazioni se già presente nel menu Azioni (unificare).
- "Mappa disciplinare" annidata: valutare collocazione più visibile o dichiaratamente avanzata.

## 7. Rischi residui

- **Alto** su Programmazione annuale e UDA: separare/unificare senza alterare form, storage e filtri.
- **Medio** su Esportazioni, Revisione, Processo: dedup pulsanti senza perdere azioni.
- **Mitigazione**: spostare, non cancellare; mantenere fallback; smoke test completo (§11 execution);
  confronto docente prima della pubblicazione.

## 8. Prossima slice raccomandata

**Slice runtime "riordino leggero P0+P1"**: separare i tre strumenti della Programmazione annuale,
alleggerire la Home, deduplicare "Bozza disciplina", unire Fonti+Sezioni generali, riorganizzare
Esportazioni per compito, unificare le due UDA — con navigazione target a 7 aree, smoke test minimo
e nessuna modifica a dati/schema/storage/validatori/import-export/filtri UDA.
