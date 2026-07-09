# CML-434S — Runtime Remote Safety Gate

## Sintesi

È stata richiesta la prosecuzione verso CML-434, cioè la micro-slice runtime per trasformare la Home in un task selector con pannello contestuale leggero.

La modifica **non è stata applicata al runtime da remoto** perché il connettore disponibile non offre una patch testuale parziale sicura sui due file HTML principali.

## Perché non forzare

Il runtime pair è composto da:

- `index.html`
- `_published_snapshot/netlify-current/index.html`

Entrambi i file sono grandi e devono rimanere sincronizzati.

Da remoto, l'azione disponibile per modificarli richiede la sostituzione completa del contenuto del file. Poiché le risposte di lettura possono essere troncate, una riscrittura completa introdurrebbe rischio concreto di:

- cancellazione parziale del file;
- perdita di sezioni non visibili nella risposta;
- divergenza tra runtime root e snapshot;
- pubblicazione di una Home incompleta;
- regressione non testata.

## Stato rilevato della Home

La Home contiene già il blocco CML-401 `home-process-hub` con quattro azioni principali:

1. Consulta il curricolo.
2. Prepara una progettazione.
3. Esporta un documento.
4. Verifica fonti e limiti.

Questo significa che CML-434 non deve ricostruire la Home, ma solo rifinire il blocco esistente.

## Micro-patch runtime richiesta

CML-434 dovrà intervenire solo su:

```text
Home task selector + pannello contestuale leggero
```

La Home dovrà mostrare quattro azioni:

1. Consulta il curricolo.
2. Prepara una progettazione.
3. Proponi un aggiornamento.
4. Esporta un documento.

Ogni azione deve aprire o aggiornare un pannello contestuale che chiarisce:

- cosa permette di fare;
- cosa non fa;
- quale stato curricolare riguarda;
- quale passaggio umano resta necessario.

## Condizioni per procedere a CML-434 runtime

Procedere solo quando è disponibile almeno una delle seguenti condizioni:

1. repo locale aggiornato;
2. possibilità di usare patch atomica su file completi;
3. verifica `git diff --check`;
4. validatori curriculum e shape test;
5. conferma che `index.html` e `_published_snapshot/netlify-current/index.html` siano modificati nello stesso modo;
6. smoke Home desktop/mobile.

## Decisione

Non forzare CML-434 da remoto.

Preparare la patch in locale o con uno strumento che supporti modifiche testuali atomiche e verificabili.

## Verdetto

```text
CML_434S_RUNTIME_REMOTE_SAFETY_GATE_MERGED_REMOTE_RUNTIME_NOT_MODIFIED
```
