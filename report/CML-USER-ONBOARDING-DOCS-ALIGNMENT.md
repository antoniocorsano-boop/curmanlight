# Report — CML-USER-ONBOARDING-DOCS-ALIGNMENT

## Sintesi operativa

Completato l'allineamento della documentazione utente/onboarding in `docs/04_user/` allo stato attuale del progetto CurManLight, con rimozione dei termini tecnici e adozione di linguaggio scolastico coerente con la remediation UX non tecnica già pubblicata.

## File revisionati (16)

| # | File | Modifiche |
|---|------|-----------|
| 1 | CML_GUIDA_RAPIDA_UTENTE.md | Riscritta: nomi tab, role-access, PWA, accessibilità semplificata |
| 2 | CML_NOTA_RILASCIO_STATO_ATTUALE.md | Riscritta: 14 discipline, accessibilità semplificata, rimossi termini tecnici |
| 3 | CML_SCHEDA_STATO_PROGETTO.md | Aggiornata: Competenze e progettazione, role-access, accessibilità |
| 4 | CML_PRESENTAZIONE_DS.md | Aggiornata: sezioni app, role-access, accessibilità |
| 5 | CML_NOTA_COLLEGIO_DOCENTI.md | Aggiornata: sezioni app, role-access, PWA |
| 6 | CML_TRACCIA_INCONTRO_PRESENTAZIONE_OPERATIVA.md | Aggiornata: nomi sezioni, role-access, Competenze e progettazione |
| 7 | CML_VADEMECUM_DIPARTIMENTI.md | Aggiornato: role-access, Revisione, linguaggio non tecnico |
| 8 | CML_SCHEDA_REFERENTE_CURRICOLO.md | Aggiornata: role-access, Revisione |
| 9 | CML_GUIDA_SIMULAZIONE_ESEMPI.md | Aggiornata: Revisione, role-access, rimossi JSON/endpoint/endpoint |
| 10 | CML_MESSAGGIO_INVITO_PROVA_CONTROLLATA.md | Aggiornato: role-access, PWA, Competenze e progettazione |
| 11 | CML_CHECKLIST_AVVIO_PILOT_OSSERVAZIONI.md | Aggiornata: "Fonti" al posto di "sezioni generali" |
| 12 | CML_PROTOCOLLO_PROVA_CONTROLLATA.md | Aggiornato: "Fonti" al posto di "Sezioni generali" |
| 13 | CML_PROTOCOLLO_OSSERVAZIONE_REALE.md | Aggiornato: "Fonti" al posto di "Sezioni generali" |
| 14 | CML_REGISTRO_SINTETICO_OSSERVAZIONI.md | Aggiornato: aree osservate con Fonti e Competenze |
| 15 | CML_SCHEDA_CONDUZIONE_INCONTRO.md | Aggiornata: "Fonti" al posto di "sezioni generali" |
| 16 | CML_SCHEDA_OSSERVAZIONE_PER_RUOLO.md | Aggiornata: Curriculum, Fonti, domande guida |

## Coerenza con UI reale

- Nomi tab: Home, Curriculum, Revisione, Definitivo, Fonti, Competenze e progettazione ✓
- Role-access code gating: documentato in tutti i file pertinenti ✓
- PWA installabile e offline: menzionata in guida rapida, presentazione DS, nota collegio, messaggio invito ✓
- Accessibilità: descritta come "verificata con strumenti automatici, utilizzabile con screen reader" ✓

## Termini tecnici rimossi o sostituiti

| Termine rimosso | Sostituito con |
|-----------------|---------------|
| JSON | "formato testo strutturato" / "struttura standard" |
| Markdown | "documento" / "report" (dove riferito a file scaricabile) |
| endpoint | rimosso (riferimento a upload non configurato) |
| Lighthouse | "verificata con strumenti automatici" |
| axe | "verificata con strumenti automatici" |
| NVDA | "utilizzabile con screen reader" |
| score | rimosso |
| schema (riferito a JSON schema) | "struttura standard" |
| validator, shape, hash, storage | non presenti nei file aggiornati |

## Limiti residui

- Il termine "Markdown" rimane in una citazione del report generato dall'app (testo non modificabile)
- L'estensione `.cml` è necessaria per il funzionamento e non sostituibile
- I codici interni (te_pri1, it_sec2, ecc.) nella tabella esempi sono identificativi delle proposte

## Decisione di chiusura

Tutti i controlli sono verdi. Scope documentale confermato. Nessun runtime modificato. Secret scan pulito. Pronto per commit e push.

Verdict: CML_USER_ONBOARDING_DOCS_ALIGNMENT_CONTROLLED_PUSH_COMPLETED