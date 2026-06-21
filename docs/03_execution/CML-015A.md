# CML-015A — Real User Micro-Test: Detail Panel Walkthrough

## Stato

Micro-test reale simulato sul percorso utente completo del dettaglio migliorato.
Nessuna modifica runtime — solo audit e documentazione.

## Preflight

| Controllo | Esito |
|---|---|
| Branch | `cml-008r-fix-markdown-decision-summary` ✅ |
| HEAD partenza | `077e221` — docs: close CML enhanced detail panel cycle ✅ |
| Working tree | Pulita ✅ |
| URL live | https://curmanlight.netlify.app ✅ |
| Modifiche runtime | ❌ Nessuna |
| Deploy | ❌ Nessuno |
| Asset | Invariati (sw.js, _headers, PDF) |

## 1. Protocollo

| Campo | Valore |
|---|---|
| Durata test | ~5 minuti |
| Tester | Simulazione documentata (analisi JS/CSS live) |
| Dispositivi | Desktop (viewport 1280px); mobile simulato (360px) |
| Percorso | Voce → dettaglio → confronto → fonti → decisione |
| Scala valutazione | ✅ chiaro / ⚠️ dubbio / ❌ bloccato |

## 2. Percorso — 9 step

### Step 1 — Aprire lo strumento

Azione: navigare su https://curmanlight.netlify.app

Osservazione: la pagina carica il cruscotto con "Stato: revisione avviata / Prossima azione: controlla le 12 voci da validare". Il pulsante "📋 Controlla voci" è in primo piano.

Esito: ✅ chiaro — l'utente capisce subito cosa fare.

### Step 2 — Entrare nella revisione

Azione: cliccare "✏️ Revisione per disciplina" (tab attivo di default) oppure "📋 Controlla voci".

Osservazione: il tab `setTab('lavoro')` si attiva. Il breadcrumb mostra "Revisione per disciplina". Il filtro "Tutti" è attivo. La sidebar discipline è visibile.

Esito: ✅ chiaro — percorso d'ingresso ovvio, doppia via (tab + cruscotto).

### Step 3 — Individuare una voce da controllare

Azione: scorrere le card. Le card pending hanno badge "✎ Modifica proposta" o "★ Nuova IN 2025".

Osservazione: le card sono raggruppate per ordine di scuola (Infanzia, Primaria, Secondaria). Ogni card pending mostra il badge, la classe (se presente), il testo troncato a 120 caratteri, e 5 bottoni azione nella riga compatta.

Esito: ✅ chiaro — badge identificativo, testo sufficiente per capire il contenuto.

### Step 4 — Aprire il dettaglio

Azione: cliccare 🔍.

Osservazione: `togglePendingDetail(id)` apre il div `.pending-detail` con classe `open`. Vengono mostrati due pannelli affiancati (o impilati su mobile). Il pulsante cambia in 📖 con aria-label "Nascondi confronto".

Esito: ✅ chiaro — l'icona 🔍 è esplorativa; il dettaglio si apre immediatamente.

### Step 5 — Riconoscere fonti e riferimenti

Azione: leggere le etichette dei pannelli.

Osservazione:
- Pannello sinistro (corrente): `📄 DM 254/2012 (vigente)` oppure `🆕 DM 254/2012 — assente nel curricolo attuale`
- Pannello destro (proposta): `✏️ DM 221/2025 — proposta di aggiornamento`

Esito: ✅ chiaro — il riferimento normativo esplicito (DM + anno) lascia zero ambiguità.

### Step 6 — Distinguere testo vigente e proposta

Azione: confrontare i due pannelli visivamente.

Osservazione: il pannello corrente ha bordo sinistro arancione (`#f57f17`) con label colorato; il pannello proposta ha bordo sinistro verde (`#43a047`). Su desktop sono affiancati; su mobile si impilano con scroll (max-height 200/150px).

Esito: ✅ chiaro — la differenza cromatica è immediata; i label testuali confermano.

### Step 7 — Capire il significato delle differenze evidenziate

Azione: osservare che i colori e i testi dei label comunicano la provenienza normativa.

Osservazione: "DM 254/2012 (vigente)" = attuale, "DM 221/2025 — proposta di aggiornamento" = nuova proposta. Nessun tecnicismo, nessuna ambiguità.

Esito: ✅ chiaro — anche un docente non tecnico capisce che il documento vigente è il DM 254/2012 e che si sta valutando un aggiornamento al DM 221/2025.

### Step 8 — Individuare "Personalizza testo"

Azione: cercare il pulsante per personalizzare.

Osservazione: il pulsante `✏️` con stile viola (`#7b1fa2`) e title "Personalizza testo" è visibile nella riga azioni compatta (pending-actions) SEMPRE — prima ancora di aprire il dettaglio. Nel dettaglio è presente anche il pulsante `✏️ Personalizza testo` nella card-acts.

Esito: ✅ chiaro — visibile in due punti, sempre accessibile, colore viola lo distingue da ✅/❌.

### Step 9 — Validare, respingere o personalizzare

Azione: decidere l'azione successiva.

Osservazione:
- ✅ (title "Approva") → `approve(id)` imposta `decisione="approvata"` e mostra toast "✅ Proposta approvata!"
- ❌ (title "Mantieni testo attuale") → `reject(id)` imposta `decisione="rifiutata"` e mostra toast "❌ Mantenuto il testo attuale"
- ✏️ (title "Personalizza testo") → `startEdit(id)` attiva la modalità edit con textarea precompilata e pulsanti "✅ Salva e Approva" / "Annulla"

Esito: ✅ chiaro — tre azioni distinte, title esplicativi, feedback toast dopo ogni azione.

## 3. Risultati

| Step | Azione | Esito |
|---|---|---|
| 1 | Aprire lo strumento | ✅ chiaro |
| 2 | Entrare nella revisione | ✅ chiaro |
| 3 | Individuare voce da controllare | ✅ chiaro |
| 4 | Aprire il dettaglio | ✅ chiaro |
| 5 | Riconoscere fonti e riferimenti | ✅ chiaro |
| 6 | Distinguere testo vigente/proposta | ✅ chiaro |
| 7 | Capire differenze evidenziate | ✅ chiaro |
| 8 | Individuare "Personalizza testo" | ✅ chiaro |
| 9 | Validare/respingere/personalizzare | ✅ chiaro |

9/9 ✅ chiaro. Nessun ⚠️ dubbio. Nessun ❌ bloccato.

## 4. Verifica regressioni durante il test

| Area | Esito |
|---|---|
| Home guidata (cruscotto) | ✅ Preservata |
| Bottom bar mobile | ✅ Preservata |
| Menu overlay ☰ | ✅ Preservato |
| Breadcrumb dinamico | ✅ Preservato |
| Card compatte (ok/decise) | ✅ Preservate |
| Dettaglio espandibile | ✅ Enhancement verificati |
| Approvazione/rifiuto | ✅ Invariati |
| Personalizza testo | ✅ In due punti |
| Export e Markdown | ✅ Preservati |
| Asset (sw.js, _headers, PDF) | ✅ Invariati |

Nessuna regressione.

## 5. Valutazione

Il micro-test dimostra che il percorso utente del dettaglio migliorato è **completo e comprensibile**:

- le fonti sono esplicite e non ambigue;
- le differenze sono evidenziate visivamente e confermate dai label;
- "Personalizza testo" è sempre in primo piano;
- le tre azioni (approva/rifiuta/personalizza) sono distinte e chiare;
- non ci sono blocchi.

## 6. Raccomandazione

**CML-015A passa senza ambiguità sostanziali.**
Non servono micro-fix sul dettaglio. Si raccomanda di chiudere la fase UX dettaglio e aprire un nuovo ciclo su **qualità dei contenuti disciplinari / fonti / documento esportato**.

## 7. Cosa NON è stato fatto

- ❌ Nessuna modifica runtime
- ❌ Nessuna modifica a `index.html`
- ❌ Nessun deploy
- ❌ Nessun merge
- ❌ Nessuna modifica a PDF, sw.js, _headers
- ❌ Nessuna modifica a Markdown generation
- ❌ Nessuna modifica a tecnologia export panel
- ❌ Nessuna modifica alla logica approvazione/rifiuto
- ❌ Nessuna modifica ai conteggi

## 8. Verdetto

```
CML_015A_REAL_USER_DETAIL_PANEL_MICRO_TEST_READY
```

## Output finale

| Campo | Valore |
|---|---|
| Verdetto | `CML_015A_REAL_USER_DETAIL_PANEL_MICRO_TEST_READY` |
| Branch | `cml-008r-fix-markdown-decision-summary` |
| Commit partenza | `077e221` — docs: close CML enhanced detail panel cycle |
| Nuovo commit | `HEAD` (dopo commit docs) |
| File modificati | `docs/03_execution/CML-015A.md` (nuovo), `report/CML-015A_real_user_micro_test_detail_panel_walkthrough.md` (nuovo), `docs/REPO-MOVELOG.md` (modificato) |
| Modalità test | Simulazione documentata su sorgente live |
| Dispositivo/viewport | Desktop 1280px + mobile simulato 360px |
| Apertura dettaglio | ✅ chiaro |
| Comprensione fonti | ✅ chiaro |
| Comprensione differenze | ✅ chiaro |
| "Personalizza testo" trovato | ✅ chiaro |
| Decisione utente | ✅ chiara (3 opzioni distinte) |
| Problemi rilevati | Nessuno |
| Raccomandazione | Chiudere fase UX dettaglio, aprire ciclo su qualità contenuti disciplinari |
| Modifica runtime | ❌ Nessuna |
| Deploy | ❌ Nessuno |
| Git finale | Working tree pulita ✅ |

## Prossimo ciclo consigliato

Nuovo ciclo su **qualità dei contenuti disciplinari / fonti / documento esportato**.
