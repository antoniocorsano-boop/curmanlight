# CML-UX-NON-TECHNICAL-USER-EXPERIENCE-AUDIT

## Obiettivo
Eseguire un audit read-only/docs-only dell'esperienza utente per ridurre il lessico tecnico in superficie e allineare CurManLight a docenti, dipartimenti e referenti non tecnici.

## Contesto utente
- Pubblico principale: docenti, referenti di dipartimento, referente curricolo.
- Vincolo: i dettagli tecnici (storage, schema, formato, fallback, diagnostica, pipeline) devono restare nei report interni, non nella UI ordinaria.
- Questa slice non modifica runtime.

## Metodo di audit
1. Preflight git di allineamento branch/remoto.
2. Lettura diretta delle aree UI in runtime pubblicato locale: Home, Competenze e progettazione, Revisione, Processo, Riepilogo, Esportazioni, Guida.
3. Ricerca espressioni tecniche visibili all'utente.
4. Classificazione per severita (P0/P1/P2), destinatario, azione consigliata e microcopy sostitutivo.

## Aree analizzate
- Home e micro-guida iniziale.
- Programmazione annuale e Libreria UDA smart.
- UDA modello.
- Revisione disciplina (bozza/esportazione).
- Processo (dipartimento/referente).
- Esportazioni.
- Guida e messaggi di stato.

## Problemi rilevati e classificati
| Area UI | Testo attuale | Perche problematico per docente | Sev | Destinatario corretto | Azione proposta | Microcopy non tecnico proposto |
|---|---|---|---|---|---|---|
| Home | Esporta il file .cml per il passaggio successivo | Espone estensione tecnica e non il significato operativo | P1 | docente | rinominare | Scarica il file di lavoro CurManLight per il referente |
| Home footer | Le azioni protette restano sotto codice operativo | Lessico interno/tecnico non utile in uso ordinario | P1 | interno tecnico | lasciare solo nei report | Alcune azioni sono riservate ai ruoli autorizzati |
| Programmazione annuale | Vista iniziale read-only | Termino tecnico da sviluppo | P2 | docente | rinominare | Vista di sola consultazione |
| Programmazione annuale privacy | nella chiave cml_annual_planning_draft_v1 | Espone ID storage interno | P0 | interno tecnico | nascondere | La bozza resta solo su questo dispositivo |
| Programmazione annuale privacy | non modifica export/import ne schema .cml | Mixa lessico tecnico con uso docente | P0 | interno tecnico | spostare in dettagli avanzati | Non cambia il documento ufficiale di istituto |
| Libreria UDA intro | Generatore controllato... Non modifica export/import o schema .cml | Linguaggio da sistema/integrazione, non da scuola | P1 | docente | sostituire con testo didattico | Strumento guidato per preparare bozze UDA da rivedere in dipartimento |
| Libreria UDA | Anteprima Markdown UDA smart / Copia Markdown / Scarica Markdown | Markdown non e autoesplicativo per molti utenti | P1 | referente/docente avanzato | rinominare + dettagli avanzati | Anteprima testo modificabile / Copia testo / Scarica testo modificabile |
| Libreria UDA privacy | chiave cml_uda_smart_library_v1 | Espone infrastruttura interna | P0 | interno tecnico | nascondere | Le bozze restano solo su questo dispositivo |
| Footer Programmazione | Vista read-only - Dati derivati ... export/import schema .cml | Riga densa di termini tecnici, bassa comprensione | P1 | docente | riscrivere | Vista di supporto alla progettazione. Nessun dato studente. Documento da validare prima dell'uso istituzionale |
| UDA modello | Genera bozza per vedere anteprima Markdown | Termino tecnico ricorrente | P2 | docente | rinominare | Genera bozza per vedere il testo |
| Revisione - pannello bozza | L'export produce una bozza Markdown | Export + Markdown = doppia tecnicita | P1 | docente | rinominare | Crea un testo di lavoro della disciplina da condividere |
| Processo dipartimento | Importa proposte docenti / file .cml | Import e formato file tecnico in primo piano | P1 | dipartimento | rinominare + helper | Carica proposte ricevute dai docenti (file CurManLight) |
| Processo referente | Importa esiti dipartimentali | Import in primo piano senza contesto di flusso | P2 | referente | rinominare | Carica gli esiti del dipartimento per il controllo finale |
| Esportazioni | Word, Markdown, PDF, .cml, copia di sicurezza | Tassonomia tecnica non graduata per ruolo | P1 | docente/referente | riordinare per task | Scarica documento per stampa / Scarica testo modificabile / Scarica file di lavoro CurManLight |
| Quick actions | Importa (backup json) | Json e concetto di backup sono tecnici | P1 | referente/docente esperto | spostare in impostazioni avanzate | Ripristina da copia di sicurezza |
| Guida badge | Prototipo / Read-only | Lessico tecnico da rilascio software | P2 | docente | rinominare | Versione di prova / sola consultazione |

## Priorita aggregate
- P0: esposizione di chiavi interne e dettagli storage/schema in Programmazione e Libreria UDA.
- P1: lessico tecnico ricorrente (Markdown, import/export, .cml) senza mediazione didattica.
- P2: termini comprensibili ma non naturali per il contesto scolastico (read-only, prototipo).

## Regola generale di superficie utente
### Docente deve vedere
- Azioni concrete didattiche: leggi, confronta, prepara bozza, condividi, valida in team.
- Avvisi privacy in linguaggio semplice.
- Stato operativo del lavoro (in preparazione, da rivedere, pronto per confronto).

### Dipartimento deve vedere
- Flusso di raccolta proposte, confronto e sintesi.
- Indicatori di completezza didattica, non indicatori tecnici.

### Referente deve vedere
- Passi di controllo finale, conflitti da chiarire, stato di avanzamento decisionale.
- Funzioni di consolidamento documentale con lessico istituzionale.

### Solo report tecnici devono contenere
- chiavi interne (es. cml_*_v1), storage, schema, fallback, dettaglio formato.
- terminologia da QA (validator, shape, hash, smoke, endpoint, commit, branch, deploy).

### Non deve comparire nella UI ordinaria
- ID interni, chiavi storage, dettagli implementativi, diagnostica runtime.

## Tassonomia linguistica scolastica sostitutiva
- bozza locale -> bozza di lavoro su questo dispositivo
- importa -> carica file ricevuto
- esporta -> scarica documento
- validazione -> controllo didattico (docente) / confronto di dipartimento / approvazione referente
- file .cml -> file di lavoro CurManLight
- Markdown -> testo modificabile
- read-only -> sola consultazione
- copia di sicurezza -> salvataggio di riserva

## Aree prioritarie per futura slice runtime
1. Home (micro-guida e footer).
2. Programmazione annuale (privacy box e footer tecnico).
3. Libreria UDA smart (azioni e terminologia Markdown/.cml/schema).
4. Processo dipartimento/referente (import/carica, helper file).
5. Esportazioni (etichette per task, non per formato tecnico).
6. Messaggi di sistema, stati vuoti, avvisi.

## Raccomandazione prossima slice runtime
Slice proposta: CML-UX-NON-TECHNICAL-COPY-RUNTIME-MICROFIX

Perimetro suggerito:
- solo sostituzione etichette/microcopy e helper testuali;
- nessun cambio logico/funzionale;
- fallback: mantenere termini tecnici solo in pannello avanzato o documentazione interna.

## Verdict
CML_UX_NON_TECHNICAL_USER_EXPERIENCE_AUDIT_READY_LOCAL_NOT_PUSHED
