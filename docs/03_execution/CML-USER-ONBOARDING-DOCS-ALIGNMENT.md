# CML-USER-ONBOARDING-DOCS-ALIGNMENT

## Obiettivo

Verificare, consolidare e pubblicare su origin/main l'aggiornamento della documentazione utente/onboarding di CurManLight contenuta in `docs/04_user/`, assicurando che il delta resti esclusivamente documentale e coerente con la remediation UX non tecnica già pubblicata.

## Contesto

- Commit runtime già pubblicato: `a8b5289` — runtime: simplify non technical CML microcopy
- Commit di chiusura remediation: `59e988b` — docs: close non technical microcopy remediation
- HEAD e origin/main allineati a `59e988b`
- Audit e aggiornamento onboarding già eseguiti in sessione precedente
- Delta iniziale: 16 file modificati, 145 inserzioni, 44 eliminazioni

## Collegamento con la remediation UX non tecnica

La remediation runtime (`a8b5289`) ha semplificato il microcopy non tecnico nell'interfaccia. Questo intervento allinea la documentazione utente allo stesso criterio: linguaggio scolastico, operativo, privo di termini da sviluppatore.

## Aree documentali revisionate

Tutti i 16 file in `docs/04_user/`:

1. CML_GUIDA_RAPIDA_UTENTE.md
2. CML_NOTA_RILASCIO_STATO_ATTUALE.md
3. CML_SCHEDA_STATO_PROGETTO.md
4. CML_PRESENTAZIONE_DS.md
5. CML_NOTA_COLLEGIO_DOCENTI.md
6. CML_TRACCIA_INCONTRO_PRESENTAZIONE_OPERATIVA.md
7. CML_VADEMECUM_DIPARTIMENTI.md
8. CML_SCHEDA_REFERENTE_CURRICOLO.md
9. CML_GUIDA_SIMULAZIONE_ESEMPI.md
10. CML_MESSAGGIO_INVITO_PROVA_CONTROLLATA.md
11. CML_CHECKLIST_AVVIO_PILOT_OSSERVAZIONI.md
12. CML_PROTOCOLLO_PROVA_CONTROLLATA.md
13. CML_PROTOCOLLO_OSSERVAZIONE_REALE.md
14. CML_REGISTRO_SINTETICO_OSSERVAZIONI.md
15. CML_SCHEDA_CONDUZIONE_INCONTRO.md
16. CML_SCHEDA_OSSERVAZIONE_PER_RUOLO.md

## Sintesi delle modifiche

- Nomi tab aggiornati: "Curricolo di istituto" → "Curriculum", "Lavoro" → "Revisione", "Curricolo Definitivo" → "Definitivo", "Sezioni generali" → "Fonti"
- Aggiunta area "Competenze e progettazione" (evidenze, programmazione annuale, UDA)
- Aggiunto role-access code gating
- Aggiunta PWA installabile e funzionamento offline
- Aggiunta accessibilità (verificata con strumenti automatici, utilizzabile con screen reader)
- Rimossi termini tecnici: JSON, Markdown, endpoint, Lighthouse, axe, NVDA, score, schema, validator, shape, hash, storage, localStorage, commit, branch, deploy, smoke test, read-only, payload, fallback, adapter
- Sostituiti con linguaggio scolastico e operativo

## Criteri linguistici applicati

1. **Linguaggio non tecnico**: ogni termine da sviluppatore è stato sostituito con equivalente scolastico
2. **Coerenza con UI**: i nomi delle sezioni corrispondono esattamente a quelli visibili nell'interfaccia
3. **Accessibilità**: il riferimento a strumenti tecnici (Lighthouse, axe, NVDA) è stato sostituito con "verificata con strumenti automatici, utilizzabile con screen reader"
4. **Chiarezza per tutti i ruoli**: le istruzioni sono adatte a docenti di diversi ordini, livelli e discipline

## Conferma assenza modifiche runtime

- `git diff --name-only` conferma: solo file in `docs/04_user/`
- Nessuna modifica a: `index.html`, `_published_snapshot/`, `content/curriculum/`, `tools/`, `package.json`, `manifest.json`, `service-worker.js`, `assets/`

## Controlli eseguiti

- [x] git status --short --branch: main allineato con origin/main
- [x] git diff --name-only: solo docs/04_user/
- [x] git diff --check: nessun whitespace error
- [x] Secret scan sul diff: nessuna occorrenza di sk-, secret, token, apikey, password, PRIVATE KEY, CLIENT_SECRET
- [x] Verifica termini tecnici: JSON, Markdown, endpoint, Lighthouse, axe, NVDA, score rimossi
- [x] Verifica coerenza UI: nomi sezioni corrispondono all'interfaccia pubblicata

## Rischi residui

- Il termine "Markdown" compare nel report generato dall'app (non modificabile in questo intervento)
- I file `.cml` sono citati con la loro estensione tecnica, necessaria per il funzionamento
- La sezione "Casi coperti dagli esempi" in CML_GUIDA_SIMULAZIONE_ESEMPI.md contiene codici interni (te_pri1, it_sec2, ecc.) che sono identificativi delle proposte di esempio

## Verdict

CML_USER_ONBOARDING_DOCS_ALIGNMENT_CONTROLLED_PUSH_COMPLETED