# Report: CML-343 — Home Onboarding Cue Runtime Microfix

## Contesto
Questa slice implementa il callout di onboarding consigliato nella Home di CurManLight per orientare i docenti al primo utilizzo.

## Decisione CML-342F
In coerenza con la soluzione raccomandata `RECOMMENDED_ACTION_CALLOUT` definita in CML-342F:
- Si implementa un banner di orientamento statico.
- Si mantiene un lessico coerente con il dominio scolastico dell'app e con la governance CurManLight.

## Modifica Effettuata
- Aggiunte definizioni CSS per `.home-recommended-callout`, `.home-recommended-callout-btn` e relative media query responsive a livello di foglio stile comune.
- Inserito il blocco HTML in cima alla Home dashboard, subito sopra il banner di orientamento generale.
- Agganciata l'azione preesistente `setTab('curricolo')` al bottone di navigazione.

## Testi Inseriti
- Testo primario: "Consulta il curricolo e prepara una proposta per il dipartimento."
- Microtesto di supporto: "La compilazione resta guidata e richiede sempre validazione umana."

## File Runtime Modificati
- `index.html`
- `_published_snapshot/netlify-current/index.html`

## File Documentali Creati/Aggiornati
- Creato `docs/03_execution/CML-343.md`
- Creato `report/CML-343_home_onboarding_cue_runtime_microfix.md`
- Aggiornato `docs/REPO-MOVELOG.md`
- Aggiornato `docs/02_system/PROJECT-STATE.md`
- Aggiornato `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`

## Controlli Eseguiti
- `git status --short --branch`
- `git diff --check` (Nessuno spazio a fine riga rilevato)
- `node tools/validate-cml-normalized-curriculum.mjs` (Valido)
- `node tools/test-runtime-mappa-dati-shape.mjs` (Passato)
- Controllo lessicale automatico dei file via script di grep per verificare l'assenza di parole vietate (esito negativo).

## Conferma Nessuna Modifica Vietata
Si conferma che non sono stati toccati file o cartelle protette come `service-worker.js`, `manifest.json`, `assets/`, `content/curriculum/`, `tools/`. Nessuna persistenza aggiunta o logica di autenticazione introdotta.

## Eventuali Rischi Residui
Nessuno rilevato. La modifica è puramente statica e reversibile (solo CSS/HTML).

## Prossima Slice Proposta
`CML-344 — Home Onboarding Cue Runtime Smoke` (verifica di integrità runtime)

## Verdict
`CML_343_HOME_ONBOARDING_CUE_RUNTIME_MICROFIX_READY_LOCAL_NOT_PUSHED`
