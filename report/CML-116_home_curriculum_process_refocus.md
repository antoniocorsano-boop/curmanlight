# Report CML-116: Home Curriculum Process Refocus

## Riepilogo
Intervento leggero sulla Home per allineare il sistema alla nuova Navigation Map e rendere visibile il processo di governo del curricolo. Nessuna modifica a dati, backend, schema o flussi runtime. Focus su nomi visibili, path guidance e cruscotto.

## Cambiamenti Effettuati

### 1. Process path sulla Home
Aggiunto banner `.home-process-path` con i 6 step operativi:
```
📖 Consulta → 🔍 Analizza → ✏️ Proponi → 🤝 Confronta → 📋 Sintetizza → 📤 Esporta
```
Posizionato tra il sottotitolo e le Home cards, visibile come prima cosa dopo il titolo.

### 2. Rename Didattica → Competenze e progettazione
Tutti i riferimenti utente-facing aggiornati:

| Contesto | Prima | Dopo |
|----------|-------|------|
| Tabbar | 🧑‍🏫 Didattica | 🧑‍🏫 Competenze e progettazione |
| Home card | Didattica | Competenze e progettazione |
| Home card text | "Evidenze, criteri di valutazione e UDA modello collegati al curricolo." | "Competenze chiave, progettazione per competenze, nodi disciplinari e collegamenti interdisciplinari per guidare la didattica." |
| Footer | "Curriculum e Didattica restano separati" | "Curriculum e Competenze e progettazione restano separati" |
| Tab header | "Didattica — Valutazione ed evidenze" | "Competenze e progettazione — Valutazione ed evidenze" |
| Tab header UDA | "Didattica — UDA modello" | "Competenze e progettazione — UDA modello" |
| Breadcrumb | "Didattica — Valutazione / Evidenze" | "Competenze e progettazione — Valutazione / Evidenze" |
| Mobile menu | "🧑‍🏫 Didattica" | "🧑‍🏫 Competenze e progettazione" |
| Mobile bottom bar | "Did." | "Comp." |
| Guida "Come iniziare" | "...Didattica per la progettazione operativa" | "...Competenze e progettazione per la progettazione operativa" |
| Guida card | "🧑‍🏫 Didattica" | "🧑‍🏫 Competenze e progettazione" |

### 3. Curriculum Path Guidance aggiornata
Da:
```
📖 Consulta → ✏️ Revisione → 📋 Definitivo → 📤 Esporta
```
A:
```
📖 Consulta → 🔍 Analizza → ✏️ Proponi → 🤝 Confronta → 📋 Sintetizza → 📤 Esporta
```
Link attivi per Proponi, Sintetizza e Esporta; Analizza, Confronta sono step concettuali.

### 4. Cruscotto aggiornato
"Prossima azione: controlla le 12 voci da validare" → "avvia la consultazione e la revisione del curricolo"

## Elementi invariati (protetti)
- ID tab: `tab-didattica`, `didattica_uda`
- ID subnav: `subnav-didattica`
- ID mobile: `mbb-didattica`
- Funzioni: `renderDidattica()`, `setDidatticaFilter()`, `renderUdaModello()`
- Classi CSS interne: `.didattica-evidence*`, `.didattica-uda*`, `.didattica-path*`, `.home-card-didattica`
- Routing `setTab()` e tutti i `render*` chiamati
- Dati Technologies (13 unità) e UDA (2 modelli)
- Pannello CML-114 validazione dipartimentale
- Tutti gli export/import

## File modificato
- `_published_snapshot/netlify-current/index.html`

## Validazioni
- `git diff --check`: pulito (nessun whitespace error)
- Solo modifica a file pubblicato: nessun impatto su docs/source/report
- Nessun deploy eseguito
- Test locale consigliato: aprire `index.html` e verificare Home, Curriculum, Competenze e progettazione, Mobile

## Prossimi passi
- CML-117+: arricchimento contenuti in Competenze e progettazione (competenze chiave, nodi disciplinari, continuità verticale).
- CML-118+: validazione mobile su viewport ridotte.
- CML-119+: eventuale promozione di Riepilogo a sezione autonoma nella navigazione principale.

## Verdetto
```text
CML_116_HOME_CURRICULUM_PROCESS_REFOCUS_READY
```
