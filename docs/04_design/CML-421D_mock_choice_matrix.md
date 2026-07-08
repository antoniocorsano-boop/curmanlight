# CML-421D — Mock Choice Matrix

## 1. Scopo

Permettere una scelta consapevole tra più modelli di mock prima di qualsiasi runtime.

## 2. Proposte alternative

## Proposta A — Cruscotto istituzionale compatto

### Idea

Una Home sobria e professionale, con quattro ambienti principali e stato lavoro sempre leggibile.

### Struttura

```text
Header compatto
Stato sintetico
4 card principali
Avviso validazione umana
Sotto-viste contestuali
```

### Punti forti

```text
molto istituzionale
chiara per dirigente/referente
equilibrata tra curricolo e processo
facile da trasformare in runtime progressivo
```

### Rischi

```text
può sembrare meno guidata per docente non tecnico
richiede microcopy molto chiaro
```

### Quando sceglierla

```text
Se l'obiettivo è uno strumento scolastico sobrio, stabile e presentabile anche a referente/dirigenza.
```

## Proposta B — Percorso guidato per docente

### Idea

Una Home orientata al compito, con percorso operativo evidente.

```text
consulta → progetta → esporta → verifica
```

### Struttura

```text
Header semplice
Percorso guidato centrale
Azioni primarie grandi
Card operative
Spiegazioni brevi passo-passo
```

### Punti forti

```text
molto accessibile per docenti non tecnici
riduce l'incertezza iniziale
favorisce test utente leggero
```

### Rischi

```text
può comprimere troppo il processo istituzionale
può sembrare meno adatta a referente/dipartimento
rischia di nascondere fonti/versioni se non progettata bene
```

### Quando sceglierla

```text
Se l'obiettivo prioritario è far usare lo strumento rapidamente ai docenti.
```

## Proposta C — Workspace professionale a pannelli

### Idea

Un ambiente operativo più ricco, con pannelli laterali e stato/fonte sempre visibili.

### Struttura

```text
Navigazione laterale
Pannello contenuto centrale
Pannello destro contesto/fonte/stato
Header compatto
```

### Punti forti

```text
molto potente per referente/dipartimento
ottimo per confronto, fonti, versioni e processo
alta densità informativa
```

### Rischi

```text
più complesso su mobile
più impegnativo per docente non tecnico
più difficile da implementare nel single-file attuale
```

### Quando sceglierla

```text
Se l'obiettivo prioritario è il lavoro curricolare continuativo di referente, dipartimento e gruppo curricolo.
```

## 3. Matrice comparativa

| Criterio | A — Cruscotto istituzionale | B — Percorso guidato | C — Workspace pannelli |
|---|---:|---:|---:|
| Sobrietà istituzionale | alta | media | alta |
| Facilità per docente non tecnico | media | alta | bassa/media |
| Potenza per referente | alta | media | alta |
| Compattezza | alta | alta | media |
| Mobile | alta | alta | media/bassa |
| Processo curricolare | alta | media | alta |
| Progettazione didattica | media | alta | alta |
| Esportazione documenti | alta | alta | alta |
| Implementabilità graduale | alta | alta | media |
| Rischio sovraccarico | basso | basso/medio | alto |

## 4. Possibile scelta ibrida

La scelta non deve essere necessariamente pura.

Opzione raccomandabile:

```text
Base A — Cruscotto istituzionale compatto
+ elementi B per docente non tecnico
+ micro-pannelli C solo in viste avanzate
```

Esempio:

```text
Home: A
Progettazione: B
Curricolo / Fonti / Versioni: A con dettagli C
Esportazione: B guidato per documento
Referente / Processo: C leggero
Mobile: B compatto
```

## 5. Domande per scegliere

```text
1. Lo strumento deve apparire prima come ambiente istituzionale o come guida operativa?
2. Il primo utente da convincere è docente, referente o dirigente?
3. Quanto deve essere visibile il processo istituzionale in Home?
4. Quanto spazio deve avere Progettazione didattica?
5. Mobile deve essere prioritario o solo compatibile?
6. Preferiamo poche card grandi o pannelli più informativi?
7. Vogliamo un look più dashboard o più percorso guidato?
```

## 6. Decisione richiesta

Prima di CML-421E, scegliere una delle seguenti opzioni:

```text
A
B
C
A+B
A+C
B+C
A+B+C con gerarchia definita
```

## 7. Raccomandazione preliminare

```text
A+B con innesti C nelle viste avanzate.
```

Motivazione:

```text
Mantiene sobrietà istituzionale.
Aiuta il docente non tecnico.
Non perde potenza per referente/dipartimento.
Resta compatibile con runtime progressivo.
```

## Verdict

```text
CML_421D_MOCK_CHOICE_MATRIX_READY
```
