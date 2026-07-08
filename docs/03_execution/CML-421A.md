# CML-421A — Didactic Design Needs Audit

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / PM-05 Esperienza di lavoro / PM-06 Accompagnamento
- Dipende da: CML-421
- Tipo slice: docs/design-audit-only remoto
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato
- Main: non modificato

## Origine

Questa slice nasce dal rilievo:

```text
CML-421-R003 — Progettazione didattica da approfondire
```

Durante il test simulato è emerso che l'area `Progettazione didattica` non può essere trattata come semplice sezione accessoria.

## Obiettivo

Definire i bisogni reali del docente/progettista didattico prima di trasformare l'area in interfaccia runtime.

## Domande guida

```text
Che cosa deve progettare il docente?
Per quali classi?
Con quale disciplina o ambito?
Con quale riferimento curricolare?
Con quale livello di dettaglio?
Con quali obiettivi, competenze ed evidenze?
Con quali attività e metodologie?
Con quali rubriche e strumenti di valutazione?
Con quali adattamenti per inclusione?
Con quali output finali?
```

## Prima struttura da validare

```text
Progettazione didattica
├─ Parti dal curricolo
├─ Programmazione annuale
├─ Unità di apprendimento
├─ Competenze ed evidenze
├─ Obiettivi e contenuti
├─ Metodologie e attività
├─ Valutazione e rubriche
├─ Inclusione e personalizzazione
├─ Collegamenti interdisciplinari
└─ Esporta progettazione
```

## Decisioni da prendere

1. Progettazione didattica resta modulo leggero o diventa modulo completo?
2. Programmazione annuale e UDA devono essere sezioni distinte?
3. Le rubriche devono essere generate o solo collegate?
4. Il sistema deve guidare la progettazione passo-passo?
5. Quali informazioni vengono dal Contesto di lavoro?
6. Quali informazioni vengono dal Curricolo?
7. Quali parti restano completamente a cura del docente?

## Output attesi

- matrice bisogni del progettista didattico;
- struttura funzionale proposta;
- campi minimi per programmazione annuale;
- campi minimi per UDA;
- collegamenti obbligatori al curricolo;
- limiti del supporto automatico;
- raccomandazione su eventuale runtime.

## Non autorizzato

CML-421A non autorizza:

- runtime;
- generazione automatica completa di progettazioni;
- sostituzione del giudizio professionale docente;
- cambio stack;
- merge su main.

## Verdict atteso

```text
CML_421A_DIDACTIC_DESIGN_NEEDS_AUDIT_READY_REMOTE_BRANCH
```
