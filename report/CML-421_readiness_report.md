# CML-421 — User Test Readiness Report

## 1. Scopo

Verificare se il pacchetto CML-421 è pronto per essere usato con utenti scolastici non tecnici.

## 2. Materiali disponibili

| Materiale | Stato |
|---|---|
| Piano CML-421 | pronto |
| Protocollo test utente | pronto |
| Scheda feedback | pronta |
| Wireframe CML-420 | disponibili |
| Prototipo IA CML-420 | disponibile |
| Runtime | non modificato |
| Main | non modificato |

## 3. Condizioni per eseguire il test

Il test può essere eseguito se:

- il partecipante non deve inserire dati personali;
- il facilitatore usa i wireframe CML-420, non il runtime come se fosse già modificato;
- si chiarisce che il test valuta il prototipo, non il docente;
- non si raccolgono audio/video o screenshot personali;
- si registra solo profilo generale e feedback qualitativo;
- non si presenta IN2025 come vigente;
- non si presenta CML come sistema di approvazione curricolare.

## 4. Condizioni per rinviare il test

Rinviare se:

- il facilitatore vuole mostrare direttamente il runtime attuale senza spiegare che il prototipo è documentale;
- si vuole testare una versione grafica non ancora prodotta;
- si vuole raccogliere feedback nominale o dati personali;
- si vuole far valutare il merito disciplinare dei contenuti anziché la comprensione del sistema;
- si pretende di decidere subito una modifica runtime.

## 5. Esito readiness

```text
READY_FOR_LIGHTWEIGHT_USER_TEST_ON_PROTOTYPE
```

Con vincolo:

```text
Test su prototipo documentale/wireframe, non su runtime modificato.
```

## 6. Decisione successiva

Dopo test reale o simulato con almeno tre profili:

```text
CML-422 — Runtime Scope Decision
```

oppure, se emergono criticità:

```text
Ritorno a CML-420 per revisione prototipo.
```

## 7. Non autorizzato

CML-421 non autorizza:

- merge su main;
- deploy;
- modifica runtime;
- redesign definitivo;
- cambio stack;
- approvazione o adozione del curricolo.

## Verdict

```text
CML_421_PROTOTYPE_USER_TEST_PACK_READY_REMOTE_BRANCH
```
