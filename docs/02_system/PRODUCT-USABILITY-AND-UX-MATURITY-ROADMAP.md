# Product Usability and UX Maturity Roadmap

Roadmap permanente per la maturita di usabilita e UX del prodotto CurManLight.

## PM-01 Governance

- Obiettivo: istituire il sistema permanente di governo UX (charter, standard, backlog, criteri gate).
- Stato iniziale: assenza di governance UX centralizzata e checklist obbligatoria.
- Dipendenze: nessuna (programma fondativo).
- Criteri di completamento:
  - charter, standard, backlog, IA e glossario attivi;
  - regole di accettazione integrate nelle future slice UI.
- Collegamento backlog: UX-010.

## PM-02 Audit esperienza utente

- Obiettivo: rilevare in modo sistematico criticita UX prioritarie su flussi reali scolastici.
- Stato iniziale: criticita emerse in modo distribuito e non sempre tracciate in backlog stabile.
- Stato attuale: COMPLETATO (CML-282 - primo audit completo UX).
- Dipendenze: PM-01.
- Criteri di completamento:
  - audit periodico con evidenze tracciate;
  - backlog aggiornato con priorita P0/P1/P2.
- Collegamento backlog: UX-001, UX-002, UX-003, UX-004, UX-005, UX-006, UX-007, UX-008, UX-011, UX-018, UX-020, UX-021, UX-022.

## PM-03 Orientamento

- Obiettivo: rendere immediato l'orientamento utente (Home, navigazione, focus, ritorno).
- Stato iniziale: IN CORSO (baseline definita da CML-282).
- Dipendenze: PM-01, PM-02.
- Criteri di completamento:
  - Home con decisione principale chiara;
  - navigazione prevedibile tra sezioni e sotto-sezioni;
  - focus e ritorno coerenti dopo cambio disciplina/sezione.
- Collegamento backlog: UX-002, UX-007, UX-008, UX-020, UX-023.

## PM-04 Comprensione del Curriculum

- Obiettivo: rendere il Curriculum comprensibile con linguaggio scolastico e struttura lineare.
- Stato iniziale: IN CORSO (criticita mappate in CML-282).
- Dipendenze: PM-02, PM-03.
- Criteri di completamento:
  - separazione netta delle logiche Curriculum;
  - indicatori e terminologia comprensibili;
  - distinzione vigente/proposte 2025 sempre chiara.
- Collegamento backlog: UX-001, UX-003, UX-006, UX-011, UX-013, UX-014, UX-015, UX-022.

## PM-05 Esperienza di lavoro

- Obiettivo: semplificare i flussi operativi nelle aree Compila ed Esportazioni.
- Stato iniziale: IN CORSO (flussi ad alta densita decisionale).
- Dipendenze: PM-03, PM-04.
- Criteri di completamento:
  - una decisione principale per schermata;
  - percorso operativo a step nelle esportazioni;
  - riduzione avvisi concorrenti nelle aree operative.
- Collegamento backlog: UX-016, UX-017, UX-018.

## PM-06 Accompagnamento

- Obiettivo: allineare Guida, Guida rapida e onboarding ai compiti reali.
- Stato iniziale: IN CORSO (contenuti utili ma non sempre rapidi/allineati).
- Dipendenze: PM-03, PM-04.
- Criteri di completamento:
  - allineamento pieno tra etichette UI e contenuti guida;
  - guida rapida orientata a task immediati;
  - onboarding coerente con primi passi in Home.
- Collegamento backlog: UX-004, UX-019.

## PM-07 Uniformita

- Obiettivo: uniformare icone, badge, colori semantici e componenti comuni.
- Stato iniziale: IN CORSO (incoerenze visive mappate).
- Dipendenze: PM-03, PM-04, PM-06.
- Criteri di completamento:
  - semantica icone univoca e senza residui emoji/mojibake;
  - componenti comuni con microcopy coerente;
  - significato badge/stati stabile in tutte le sezioni.
- Collegamento backlog: UX-005, UX-009, UX-012, UX-021, UX-024.

## PM-09 Validazione con utenti

- Obiettivo: validare periodicamente scelte UX con utenti scolastici reali.
- Stato iniziale: validazioni utente non strutturate in un ciclo permanente.
- Dipendenze: PM-02, PM-04, PM-05, PM-08.
- Criteri di completamento:
  - protocollo test utenti periodico attivo;
  - backlog aggiornato da evidenze di test.
- Collegamento backlog: UX-001, UX-002, UX-003, UX-007, UX-008.

## Macro-slice derivate da CML-282

### PM-03 Orientamento

1. CML-289 - de-densificazione Home per ingresso guidato al compito.
2. CML-290 - coerenza percorsi e menu.
3. CML-284 - focus management cambio disciplina.
4. CML-302 - chiarezza navigazione mobile.
5. CML-305 - ritorno al punto di lavoro.

### PM-04 Comprensione del Curriculum

1. CML-283 - separazione logica Curriculum (consultazione/revisione/azione).
2. CML-285 - razionalizzazione indicatori e stato curricolo.
3. CML-288 - pulizia terminologia Curriculum.
4. CML-293 - semplificazione testata disciplina.
5. CML-297 - chiarezza proposte 2025.
6. CML-304 - glossario enforcement in UI.

### PM-05 Esperienza di lavoro

1. CML-299 - semplificazione area Compila.
2. CML-300 - percorso Esportazioni a step.
3. CML-298 - gerarchia azioni Curriculum.

### PM-06 Accompagnamento

1. CML-286 - allineamento Guida.
2. CML-301 - rifattorizzazione Guida rapida.

### PM-07 Uniformita

1. CML-287 - normalizzazione iconografia.
2. CML-291 - unificazione semantica badge/stati.
3. CML-294 - pulizia segnali disciplina.
4. CML-303 - rimozione residui mojibake simbolici.
5. CML-306 - allineamento componenti comuni.
