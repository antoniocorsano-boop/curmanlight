# CML-UX-AREA-RATIONALIZATION-AND-LIGHTWEIGHT-EXPERIENCE-AUDIT

Tipo slice: **docs-only / read-only audit**
Runtime modificato: **no**
HEAD/origin atteso: `61e623d`
Verdict: `CML_UX_AREA_RATIONALIZATION_AND_LIGHTWEIGHT_EXPERIENCE_AUDIT_READY_LOCAL_NOT_PUSHED`

---

## 1. Obiettivo

Eseguire un audit trasversale, senza modifiche al codice, delle principali aree di CurManLight
per **razionalizzarle e alleggerirle**, riducendo ridondanze, sovrapposizioni, complessità visiva
e carico cognitivo per docenti, dipartimenti e referenti.

Finalità: preparare una futura semplificazione runtime che renda lo strumento più lineare e
operativo, **senza introdurre nuove funzionalità** e **senza toccare dati, logica o flussi validati**.

Principio guida: **una schermata, un compito, una decisione.**

## 2. Contesto

- CurManLight è rivolto a docenti di vari ordini, livelli e discipline.
- La remediation del microcopy non tecnico è stata completata e pubblicata.
- La documentazione utente/onboarding è stata aggiornata e pubblicata.
- Stato repo alla partenza: branch `main`, HEAD e `origin/main` allineati su `61e623d`.
- Working tree tracked con una sola modifica **preesistente e non pertinente**
  (`docs/04_user/educazione_fisica_validazione_dipartimentale.md`), non inclusa in questa slice.

## 3. Metodo di audit

1. Preflight Git (branch, allineamento HEAD/origin, working tree).
2. Lettura read-only del runtime pubblicato `_published_snapshot/netlify-current/index.html`
   (struttura navigazione, pannelli view, cruscotto, modali, stati vuoti).
3. Lettura documentazione utente (`docs/04_user/`) e movelog per coerenza terminologica.
4. Mappatura delle aree UI reali e delle azioni esposte.
5. Valutazione per area (scopo, chiarezza, ridondanza, numero decisioni, quantità testo,
   coerenza documentale/scolastica, rischio per docente non tecnico, utilità nella sequenza).
6. Classificazione decisione + priorità P0/P1/P2/P3.
7. Proposta di architettura leggera e navigazione target.
8. Definizione principi UX, scope raccomandato della futura slice runtime e smoke test minimo.

## 4. Mappa reale della navigazione (stato attuale)

**Barra principale (5 voci):** Home · Curriculum · Competenze e progettazione · Esportazioni · Guida

**Sub-nav Curriculum (5 voci):** Consulta · Revisione · Processo · Definitivo · Fonti

**Sub-nav Competenze e progettazione (3 voci):** Valutazione / Evidenze · Programmazione annuale · UDA modello

**Elementi aggiuntivi:**
- `Sezioni generali` (pannello `tab-generali`, sola consultazione) — non presente nella sub-nav,
  raggiungibile solo via link interni.
- `Cruscotto` (barra dashboard) — stato, prossima azione, 3 pulsanti (Controlla voci / Apri
  documento / Esporta), progressione, menu Azioni.
- Menu **Azioni** (quick-actions): Salva, Salva copia, Importa, Ripristina, Installa,
  Impostazioni/onboarding, Corso PDF, Motto, Guida rapida.
- Modali: Impostazioni/onboarding, benvenuto, sblocco ruolo (role-access).

Totale superfici di primo/secondo livello effettive: **12** (oltre a cruscotto, quick-actions e modali).

## 5. Aree analizzate e problemi rilevati

### 5.1 Home (`tab-home`)
Contiene simultaneamente: titolo + sottotitolo, **percorso di governo a 6 step**
(Consulta→Analizza→Proponi→Confronta→Sintetizza→Esporta), **2 card** (Curriculum e Competenze e
progettazione) con 4–5 link ciascuna più note e badge, **microguida "5 minuti"** a 5 step,
**footer** esplicativo. Sopra la Home agisce anche il **cruscotto** con altri 3 pulsanti.
→ Sovrabbondanza di orientamento: tre spiegazioni parallele del processo (percorso, card, microguida)
e molti punti d'ingresso ripetuti. Carico cognitivo alto. **P1.**

### 5.2 Curriculum → Consulta (`tab-curricolo`)
Viewer del curricolo (IN 2012 / proposte 2025). Scopo chiaro. **Mantieni.** **P3.**

### 5.3 Curriculum → Revisione (`tab-lavoro`)
Toolbar filtri (Tutti, Da decidere, "Altri filtri": Approvati/Rifiutati/Invariati/Nuovi + nascondi
invariati) + pannello a scomparsa **"Bozza disciplina"** (Genera/Copia/Scarica testo) + testo
introduttivo. Il pannello "Bozza disciplina" **duplica** l'omonimo gruppo in Esportazioni. **P1.**

### 5.4 Curriculum → Processo (`tab-processo`)
Due pannelli comprimibili: "Confronto di dipartimento" (import proposte docenti) e
"Verifica referente curricolo" (import esiti + report), con role-gating. Due ruoli distinti
nella stessa schermata; azioni tecniche di import ravvicinate. **P2.**

### 5.5 Curriculum → Definitivo (`tab-riepilogo`)
Sintesi voci approvate/invariate; rimanda esplicitamente a Esportazioni per lo scaricamento.
Sovrapposizione semantica con Esportazioni ("documento finale"). **P2.**

### 5.6 Curriculum → Fonti (`tab-normativa`)
Pagina normativa molto estesa: fonti istituzionali, PTOF/RAV, normativa nazionale, quadri europei,
gap 2025. Consultazione pura, testo lungo. Utile ma pesante per la navigazione primaria. **P2.**

### 5.7 Sezioni generali (`tab-generali`, non in sub-nav)
Premessa, IN 2025, riferimenti normativi, profilo studente, competenze chiave, livelli, obiettivi,
raccordo verticale. **Duplica** in gran parte i riferimenti normativi già presenti in Fonti.
Area semi-nascosta con contenuto ridondante. **P1.**

### 5.8 Competenze e progettazione → Valutazione / Evidenze (`tab-didattica`)
Lista evidenze + filtri per ordine + box "Come usare questa sezione" + box "Non sostituisce la
valutazione professionale" + reset marcature. Molto testo esplicativo ripetuto (due box + footer).
**P2.**

### 5.9 Competenze e progettazione → Programmazione annuale (`tab-didattica_programmazione`)
La singola schermata ospita **tre strumenti sovrapposti**: (a) vista di sola consultazione
ordini/maturità, (b) **Bozza programmazione annuale locale** (form completo con salvataggio),
(c) **Libreria UDA smart locale** (filtri estesi + form + generazione + libreria). Violazione netta
di "una schermata, un compito". Densità e numero di decisioni molto elevati. **P0.**

### 5.10 Competenze e progettazione → UDA modello (`tab-didattica_uda`)
Generatore bozza UDA da evidenze + **Mappa disciplinare** annidata in `details`. Coesiste con la
"Libreria UDA smart" della Programmazione annuale: **due concetti UDA in due punti diversi**,
potenziale confusione. **P1.**

### 5.11 Esportazioni (`tab-esportazioni`)
Sette gruppi (Documento finale, Confronto modifiche, Bozza disciplina, File di lavoro CurManLight,
Report e resoconti, Copia di sicurezza) per ~20 pulsanti. Sovrapposizioni: "Bozza disciplina"
duplica Revisione; "Copia di sicurezza" duplica il menu Azioni; "Report" duplica Processo. **P1.**

### 5.12 Guida (`tab-guida`)
Card chiare e ben scritte (Come iniziare, Curriculum, Competenze, Esportazioni, Cosa non può fare,
Installazione). Può assorbire spiegazioni oggi troppo visibili nelle altre aree. **P3.**

### 5.13 Cruscotto (barra dashboard)
Stato + prossima azione + 3 pulsanti + progressione + menu Azioni. Si sovrappone all'orientamento
già offerto dalla Home; presente anche fuori dalla Home. **P2.**

### 5.14 Modali e messaggi di sistema
Impostazioni/onboarding, benvenuto, role-access, feedback import. Coerenti; alcuni testi di
avviso ("Documento di lavoro — da validare", "nessun dato studente") si ripetono in molte aree. **P3.**

### 5.15 Stati vuoti
Presenti e prudenti (es. "Genera una bozza per vedere l'anteprima…", "0 UDA trovate su 0",
"Mappa disciplinare non ancora predisposta"). Poco orientati all'azione successiva. **P2.**

### 5.16 Flussi docente / dipartimento / referente
Distribuiti su **Revisione** (proposta), **Processo** (import dipartimento/referente) ed
**Esportazioni** (scarico proposta/esito/report). Percorso frammentato su tre aree, con
role-gating non sempre evidente. **P2.**

## 6. Classificazione priorità

| Priorità | Area / contenuto | Sintesi |
|---|---|---|
| **P0** | Programmazione annuale | 3 strumenti in una schermata: split necessario |
| **P1** | Home | Tripla spiegazione del processo + molti ingressi ripetuti |
| **P1** | Bozza disciplina (Revisione ↔ Esportazioni) | Duplicazione pulsanti |
| **P1** | Fonti ↔ Sezioni generali | Riferimenti normativi duplicati |
| **P1** | Esportazioni | 7 gruppi / ~20 pulsanti da razionalizzare per compito |
| **P1** | UDA (modello vs smart library) | Concetto UDA scisso in due aree |
| **P2** | Processo | Due ruoli/azioni tecniche nella stessa schermata |
| **P2** | Definitivo ↔ Esportazioni | Sovrapposizione semantica "documento finale" |
| **P2** | Valutazione / Evidenze | Testo esplicativo ridondante |
| **P2** | Cruscotto | Sovrapposizione con orientamento Home |
| **P2** | Stati vuoti | Poco orientati all'azione |
| **P2** | Flussi ruolo | Frammentati su tre aree |
| **P3** | Guida / Consulta / Modali | Rifiniture, assorbimento spiegazioni |

## 7. Proposta di razionalizzazione (per area)

| Area | Decisione | Intervento |
|---|---|---|
| Home | Alleggerire | Una sola spiegazione del processo; ridurre a 2 card + azione primaria; togliere microguida o spostarla in Guida |
| Consulta | Mantenere | Nessuna modifica |
| Revisione | Alleggerire | Rimuovere il pannello "Bozza disciplina" (resta in Documenti); toolbar a 2 filtri principali + "Altri filtri" |
| Processo | Alleggerire | Un solo pannello per volta per ruolo; etichette di ruolo esplicite |
| Definitivo | Accorpare | Confluire in area "Documenti" insieme a Esportazioni |
| Fonti | Accorpare / spostare | Unire a "Sezioni generali" in un'unica area "Riferimenti"; parte discorsiva verso Guida |
| Sezioni generali | Accorpare | Fondere con Fonti (elimina duplicati) |
| Valutazione / Evidenze | Alleggerire | Un solo box informativo; spostare il "come usare" nella Guida |
| Programmazione annuale | Accorpare + alleggerire | Separare i 3 strumenti; consultazione visibile, "Bozza" e "UDA smart" come passi distinti |
| UDA modello | Accorpare | Unificare "UDA modello" e "UDA smart" in un'unica area UDA con due modalità |
| Esportazioni | Alleggerire | Raggruppare per compito (Documento finale / Confronto / File di lavoro); dedup Copia sicurezza e Report |
| Guida | Mantenere | Assorbire spiegazioni lunghe delle altre aree |
| Cruscotto | Alleggerire | Massimo 1 azione primaria contestuale; evitare doppioni con Home |

## 8. Proposta di navigazione target (leggera, 5-7 aree)

**Proposta raccomandata (7 aree):**

1. **Home** — orientarsi e scegliere il primo passo (una sola spiegazione, 1 azione primaria).
2. **Curriculum** — consultare il curricolo (Consulta) e i riferimenti (Fonti + Sezioni generali unite).
3. **Revisione** — decidere sulle proposte disciplina per disciplina.
4. **Progettazione** — evidenze, programmazione annuale e UDA (in passi distinti).
5. **Documenti** — Definitivo + tutte le esportazioni/scaricamenti, raggruppati per compito.
6. **Processo** — scambio tra docente, dipartimento e referente (un ruolo alla volta).
7. **Guida** — spiegazioni, cosa fa / cosa non fa, installazione.

**Alternativa più compatta (6 aree):**
Home · Curriculum · Progettazione didattica · Revisione e confronto · Documenti · Guida
(il "Processo" confluisce dentro "Revisione e confronto").

Le denominazioni restano in linguaggio scolastico, coerenti con la documentazione utente già pubblicata.

## 9. Principi UX per la futura remediation

- Una schermata, un compito, una decisione.
- Massimo due azioni principali per area; una sola azione **primaria** evidenziata.
- Distinguere visivamente azione primaria da azioni secondarie.
- Spostare le spiegazioni lunghe nella Guida.
- Evitare duplicazioni di pulsanti (Bozza disciplina, Copia di sicurezza, Report).
- Mostrare solo le informazioni necessarie alla decisione corrente.
- Non esporre dettagli tecnici (formati, storage, ID ruolo) nella superficie primaria.
- Ridurre il testo introduttivo ripetuto.
- Stati vuoti orientati all'azione successiva.
- Mantenere invariati dati, logica e flussi già validati.

## 10. Scope raccomandato della futura slice runtime

**Ammesso:** razionalizzazione UI leggera (raggruppamenti, denominazioni, riduzione testo,
dedup pulsanti, split di viste sovraccariche, spostamento spiegazioni in Guida).

**Escluso esplicitamente:**
- Nessuna modifica ai dati curricolari.
- Nessuna modifica allo schema.
- Nessuna modifica allo storage locale.
- Nessuna modifica ai validatori.
- Nessuna modifica all'import/export interno `.cml`.
- Nessuna modifica ai filtri UDA.
- Nessuna nuova funzione.
- Nessuna eliminazione irreversibile di contenuti senza fallback (spostare, non cancellare).

## 11. Smoke test minimo per la futura remediation

- Apertura Home senza errori.
- Navigazione completa tra tutte le aree.
- Curriculum consultabile.
- Revisione accessibile e filtri funzionanti.
- Definitivo / documenti accessibili.
- Programmazione annuale funzionante.
- Libreria UDA smart funzionante.
- Filtri UDA invariati.
- Processo docente / dipartimento / referente accessibile.
- Esportazioni / scaricamento accessibili.
- Guida accessibile.
- Nessun errore in console.
- Hash / navigazione invariati.
- Nessuna perdita di contenuto critico (spostamenti, non rimozioni).

## 12. Esclusioni esplicite di questa slice

- Nessuna modifica a `_published_snapshot/netlify-current/index.html`.
- Nessuna modifica a `content/curriculum/`, `tools/`, `package.json`, lockfile, asset runtime,
  validatori, schema, dati curricolari, file di configurazione.
- Nessun intervento su file untracked preesistenti.
- La modifica tracked preesistente in `docs/04_user/educazione_fisica_validazione_dipartimentale.md`
  non è inclusa nel commit di questa slice.

## 13. Raccomandazione operativa

Procedere in step successivi, partendo dalle priorità più alte:
1. **P0** — separare i tre strumenti della Programmazione annuale.
2. **P1** — alleggerire la Home, deduplicare "Bozza disciplina", unire Fonti+Sezioni generali,
   riorganizzare Esportazioni per compito, unificare le due UDA.
3. **P2/P3** — Processo, Definitivo, Evidenze, cruscotto, stati vuoti, Guida.

La prima slice runtime raccomandata è un **riordino leggero P0+P1** con navigazione target a 7 aree,
seguita da smoke test minimo e da un confronto docente prima della pubblicazione.

## 14. Verdict

`CML_UX_AREA_RATIONALIZATION_AND_LIGHTWEIGHT_EXPERIENCE_AUDIT_READY_LOCAL_NOT_PUSHED`

- Audit trasversale completato (16 superfici valutate).
- Nessun runtime modificato.
- Nessuna nuova funzionalità introdotta.
- Aree UI classificate con decisione e priorità.
- Ridondanze e sovrapposizioni individuate.
- Proposta di navigazione target definita (7 aree, alternativa a 6).
- Prossima slice runtime raccomandata.
- Commit locale docs-only; push non eseguito.
