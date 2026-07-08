# CML-420 — Prototype Acceptance Report

## 1. Scopo

Verificare se il prototipo informativo/navigazionale CML-420 soddisfa i vincoli stabiliti da CML-419B.

## 2. Esito sintetico

```text
PASS come prototipo informativo/navigazionale.
NON PASS come runtime definitivo.
```

## 3. Criteri di accettazione

| Criterio | Esito | Nota |
|---|---|---|
| Quattro accessi principali visibili | PASS | Curricolo, Progettazione didattica, Esportazione, Wiki |
| Home non sovraccarica | PASS | Processo resta sintetico |
| Processo contestuale al Curricolo | PASS | Sezione dedicata, visibile solo se attivo |
| IN2025 non presentata come vigente | PASS | Microcopy prudente obbligatorio |
| Fonti repo-defined trattate con cautela | PASS | Verifica esterna pendente |
| Curricolo definitivo non anticipato | PASS | Non adottato senza fonte/atto |
| Esportazione parte dallo scopo | PASS | `Che cosa devi ottenere?` |
| Wiki spiega fonti, ruoli, processo e limiti | PASS | Sotto-voci definite |
| Mobile autonomo | PASS | Bottom bar a quattro ambienti |
| Runtime non modificato | PASS | Docs/design/prototype-only |
| Main non modificato | PASS | Ramo remoto dedicato |

## 4. Rischi residui

| Rischio | Stato | Mitigazione |
|---|---|---|
| Prototipo interpretato come runtime da implementare subito | Aperto | Richiedere test utente prima della slice runtime |
| IN2025 percepita come vigente | Mitigato | Etichetta prudente sempre visibile |
| Fonti istituto considerate certificate | Mitigato | Marcatura repo-defined/verifica esterna pendente |
| Curricolo verticale pubblicato non risolto | Aperto | Non dichiarare definitivo/adottato |
| Troppe viste nel primo runtime | Aperto | CML-421 deve selezionare subset testabile |

## 5. Decisione su CML-420

CML-420 è pronto come pacchetto di prototipo.

Non autorizza ancora:

- runtime;
- merge su main;
- redesign grafico definitivo;
- modifica dati;
- cambio stack;
- workflow Drive/Workspace;
- ruoli istituzionali avanzati.

## 6. Raccomandazione successiva

Procedere con:

```text
CML-421 — Prototype User Test Pack
```

Scopo:

- preparare test utente breve sul prototipo;
- verificare comprensione dei quattro ambienti;
- validare microcopy su IN2012/IN2025;
- validare differenza tra consultazione, progettazione, esportazione e Wiki;
- raccogliere evidenze prima di qualsiasi runtime.

## 7. CML-421 non deve fare

- modifiche runtime;
- implementazione visiva completa;
- cambio stack;
- pubblicazione su main;
- deploy.

## Verdict

```text
CML_420_IA_NAVIGATION_PROTOTYPE_ACCEPTED_FOR_USER_TEST_PACK_REMOTE_BRANCH
```
