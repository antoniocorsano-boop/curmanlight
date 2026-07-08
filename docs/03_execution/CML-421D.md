# CML-421D — Design System and Mock Choice Plan

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / PM-03 Orientamento / PM-06 Accompagnamento / PM-07 Uniformità
- Dipende da: CML-421A, CML-421B, CML-421C
- Tipo slice: docs/design-only remoto
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato
- Main: non modificato

## Origine

Dopo CML-421A/B/C è emerso che non bisogna passare subito al runtime.

Prima serve una fase di design in cui il referente/proprietario dello strumento possa scegliere tra più proposte di mock, invece di ricevere una singola soluzione già decisa.

## Obiettivo

Definire un sistema di scelta tra mock alternativi per l'Ambiente curricolare d'istituto.

La slice deve produrre:

```text
1. design system minimo;
2. modelli di vista;
3. tre direzioni grafiche alternative;
4. criteri di scelta;
5. elenco viste da mockare;
6. gate prima del runtime.
```

## Principio

```text
Prima si sceglie il modello di esperienza.
Poi si decide cosa implementare.
```

Il runtime non deve anticipare scelte di layout, gerarchia visiva, header, navigazione, card, stati e microcopy.

## Aree principali da progettare

```text
Curricolo
Progettazione didattica
Esportazione
Riferimenti e guida
Impostazioni / Contesto di lavoro
```

## Design system minimo

### Identità visiva

```text
sobria
istituzionale
scolastica
non ludica
non tecnica
adatta a docenti e referenti
```

### Componenti base

```text
Header compatto
Card ambiente
Card documento
Card fonte
Card proposta
Badge stato fonte
Badge stato documento
Badge validazione umana
Tab principale
Sotto-tab contestuale
Pannello contesto
Pannello avvisi
Pulsante primario
Pulsante secondario
Pulsante cautelativo
Tabella versioni
Pipeline processo
Wizard esportazione
```

### Stati visivi

```text
consultazione disponibile
bozza locale
materiale da verificare
in lavorazione
sintesi finale pronta
in attesa di approvazione esterna
approvato esternamente
adottato se atto presente
fonte confermata
fonte candidata
fonte repo-defined
fonte non risolta
```

## Tre proposte di mock da preparare

### Proposta A — Cruscotto istituzionale compatto

Caratteristiche:

```text
Home sobria a quattro card
header alto ma compatto
stato lavoro sempre visibile
contesto utente in chip sintetica
sotto-navigazioni solo quando servono
forte chiarezza su fonti/versioni/validazione
```

Adatta se si vuole uno strumento istituzionale e rassicurante.

### Proposta B — Percorso guidato per docente

Caratteristiche:

```text
Home orientata alle azioni
consulta → progetta → esporta → verifica
wizard più evidente
azioni primarie molto guidate
meno densità informativa iniziale
maggiore supporto per utente non tecnico
```

Adatta se il primo target è il docente non tecnico.

### Proposta C — Workspace professionale a pannelli

Caratteristiche:

```text
layout più operativo
pannello sinistro per ambienti
pannello centrale per contenuto
pannello destro per contesto/fonte/stato
maggiore densità informativa
più adatto a referente/dipartimento
```

Adatta se il target principale è lavoro curricolare strutturato e continuativo.

## Criteri di scelta

Ogni proposta va valutata con questi criteri:

| Criterio | Domanda |
|---|---|
| Chiarezza | un docente capisce subito cosa fare? |
| Sobrietà | sembra uno strumento scolastico professionale? |
| Compattezza | evita sovraccarico visivo? |
| Processo | distingue lavoro tecnico e approvazione esterna? |
| Progettazione | fa capire dove preparare programmazione/UDA? |
| Esportazione | parte dai documenti scolastici reali? |
| Mobile | resta utilizzabile su smartphone? |
| Evoluzione | permette crescita futura senza cambiare tutto? |

## Viste da mockare

### Set minimo obbligatorio

```text
Home desktop
Home mobile
Curricolo / Consulta
Curricolo / Fonti
Curricolo / Versioni
Curricolo / Processo aggiornamento
Curricolo / Sintesi finale
Progettazione / Parti dal curricolo
Progettazione / Programmazione annuale
Progettazione / UDA
Esportazione / Per la classe
Esportazione / Per il processo
Riferimenti e guida
Impostazioni / Contesto di lavoro
```

### Set opzionale successivo

```text
Esportazione / Archivio e sicurezza
Progettazione / Rubriche
Progettazione / Inclusione
Dipartimento / confronto proposte
Referente / report gruppo curricolo
```

## Gate prima del runtime

Non passare a CML-422 finché non è stato scelto almeno:

```text
1. stile generale A/B/C o combinazione;
2. modello header;
3. modello Home;
4. modello navigazione mobile;
5. modello Curricolo;
6. modello Progettazione;
7. modello Esportazione;
8. collocazione definitiva di Impostazioni / Contesto di lavoro.
```

## Output attesi

```text
docs/04_design/CML-421D_design_system_and_view_models.md
docs/04_design/CML-421D_mock_choice_matrix.md
report/CML-421D_design_pre_runtime_decision_report.md
```

## Non autorizzato

CML-421D non autorizza:

- runtime;
- deploy;
- merge su main;
- refactor del file `index.html`;
- scelta automatica di un mock senza revisione umana.

## Verdict atteso

```text
CML_421D_DESIGN_SYSTEM_AND_MOCK_CHOICE_PLAN_READY_REMOTE_BRANCH
```
