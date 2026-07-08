# CML-421E-SELECTION — Selected Mock Direction D2

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / PM-03 Orientamento / PM-06 Accompagnamento / PM-07 Uniformità
- Dipende da: CML-421E
- Tipo slice: docs/decision-only remoto
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato
- Main: non modificato

## Decisione utente

La scelta emersa è:

```text
2, poi 3, ma anche 1 nella giusta misura
```

Interpretazione:

```text
Priorità 1: B — Percorso guidato per docente
Priorità 2: C — Workspace professionale a pannelli
Cornice: A — Cruscotto istituzionale nella giusta misura
```

## Nome canonico della scelta

```text
D2 — Ibrido guidato-professionale con sobrietà istituzionale
```

## Formula canonica

```text
CurManLight adotta un modello guidato per il docente come esperienza principale,
integra viste professionali a pannelli per fonti, versioni, processo e referente,
e mantiene una cornice istituzionale compatta, sobria e scolastica.
```

## Regola di composizione

```text
B = esperienza principale
C = viste avanzate
A = identità visiva e tono istituzionale
```

## Applicazione per area

| Area | Direzione scelta |
|---|---|
| Home | B con cornice A |
| Header | A compatto |
| Curricolo / Consulta | B + A |
| Curricolo / Fonti | C leggero |
| Curricolo / Versioni | C leggero |
| Curricolo / Processo aggiornamento | C leggero |
| Curricolo / Sintesi finale | A + C |
| Progettazione didattica | B pieno |
| Esportazione | B pieno |
| Riferimenti e guida | A compatto |
| Impostazioni / Contesto di lavoro | B compatto |
| Mobile | B |

## Cosa significa per l'esperienza utente

CML deve apparire:

```text
facile per il docente;
potente per referente e dipartimento;
sobrio e riconoscibile come strumento scolastico;
non commerciale;
non ludico;
non burocratico-pesante;
non tecnico.
```

## Implicazioni per il visual design

- La Home può usare la domanda guida `Cosa vuoi fare oggi?`, ma dentro una cornice istituzionale.
- Progettazione ed Esportazione devono usare percorsi guidati.
- Fonti, Versioni, Processo e Referente possono usare pannelli o viste più dense.
- Il mobile deve restare molto semplice.
- La validazione umana deve essere visibile ma non invadente.
- Il Contesto di lavoro deve stare in Impostazioni, ma può essere sintetizzato nell'header.

## Gate prima del runtime

Prima di CML-422 servono:

```text
CML-421F — Mock D2 Usability Review
CML-421G — Canonical Visual Contract
```

Oppure CML-421G può essere anticipata e usata come contratto per la review.

## Non autorizzato

Questa decisione non autorizza:

- runtime;
- deploy;
- merge su main;
- refactor di `index.html`;
- implementazione di un layout completo.

## Verdict

```text
CML_421E_SELECTED_MOCK_D2_GUIDED_PROFESSIONAL_INSTITUTIONAL_REMOTE_BRANCH
```
