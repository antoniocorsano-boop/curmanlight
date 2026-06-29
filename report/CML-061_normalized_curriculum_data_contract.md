# Report: CML-061 — NORMALIZED_CURRICULUM_DATA_CONTRACT

## Riepilogo

Contratto dati normalizzato definito per il curricolo di istituto di CurManLight. Documento principale: `docs/02_system/NORMALIZED-CURRICULUM-DATA-CONTRACT.md`.

## Struttura definita

- **Unità base**: `unitaApprendimento`
- **Campi obbligatori**: 16
- **Campi facoltativi**: 6
- **Regole per ordine**: Infanzia (fascia), Primaria (classe, tutti i campi), Secondaria (classe, tutti i campi + validazione umana)
- **Regole per discipline solo Secondaria**: Latino LEL, Seconda Lingua Comunitaria (classe obbligatoria, tutti i campi strutturati)

## Distinzioni lessicali

- **Traguardo**: esito ampio e progressivo.
- **Obiettivo**: elemento operativo collegato al percorso didattico.
- **Conoscenza**: contenuto/sapere.
- **Abilità**: azione osservabile o capacità applicativa.
- **Competenza**: integrazione di conoscenze, abilità e atteggiamenti in situazione.
- **Evidenza/criterio**: elemento utile alla valutazione e alla revisione dipartimentale.

## Disciplina pilota

- **Tecnologia**: prima disciplina da completare con il modello normalizzato (CML-062).

## Criteri di audit futuri

1. Presenza di ambiti/nuclei.
2. Presenza di competenze.
3. Presenza di conoscenze.
4. Presenza di abilità.
5. Presenza di evidenze/criteri.
6. Completezza per ordine/classe.
7. Consistenza stati (`totaleVoci` == `statusTotal`).
8. Percentuale di validazione umana.

## Prossimo step

`CML-062 — TECHNOLOGY_DISCIPLINE_FULL_PACK`

## Verdetto

`CML_061_NORMALIZED_CURRICULUM_DATA_CONTRACT_READY`
