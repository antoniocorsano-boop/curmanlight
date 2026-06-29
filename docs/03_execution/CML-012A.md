# CML-012A — Real User Task Acceptance Test Design

## Stato

Progettazione del primo test con utente reale (docente/revisore) su CurManLight.
Nessuna modifica runtime, nessun deploy.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `15fc009` (CML-011D — ciclo chiuso)
- Working tree: pulita
- Nessuna modifica runtime ✅
- Nessun deploy ✅

## Obiettivo

Verificare se un docente/revisore, senza guida esterna, comprende il percorso
completo: aprire → capire lo stato → controllare una voce → dettaglio →
distinguere confronto/definitivo → disclaimer → esportare → validazione umana.

## Protocollo di test

### Identità

| Campo              | Valore                                                                         |
| ------------------ | ------------------------------------------------------------------------------ |
| Nome test          | `T01-CML-REAL-USER-TASK`                                                       |
| Versione strumento | HEAD `15fc009` — live su https://curmanlight.netlify.app                       |
| Profilo utente     | Docente di scuola secondaria di I grado (non necessariamente esperto digitale) |
| Durata prevista    | 10-15 minuti                                                                   |
| Consegna iniziale  | "Usa lo strumento per preparare il documento da portare al Collegio Docenti."  |

### Preparazione

- Dispositivo: computer o tablet (a scelta del docente)
- Browser: Chrome/Firefox/Edge/Safari (ultima versione)
- Strumento già aperto su https://curmanlight.netlify.app
- Nessun dato precaricato — lo stato è quello di default (0 decisioni)
- Osservatore presente ma non interviene salvo blocco completo (>2 minuti su un passo)

### Scenario (8 passi)

| #   | Azione richiesta                                 | Criterio di accettazione                                                                                   | Rilevazione                           |
| --- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| 1   | Apri lo strumento e trova lo stato del lavoro    | Legge "Stato: revisione avviata" e "Prossima azione: controlla le 12 voci da validare"                     | ✅ supera / ❌ non trova / ⚠️ confuso |
| 2   | Entra nella revisione di una disciplina          | Clicca "Controlla voci" o seleziona una disciplina dalla sidebar                                           | ✅ / ❌ / ⚠️                          |
| 3   | Trova una voce da decidere e aprine il dettaglio | Identifica una card marcata "⏳ Da decidere", clicca per espanderla                                        | ✅ / ❌ / ⚠️                          |
| 4   | Esporta il confronto delle proposte              | Apre "📄 Export ▾" nel toolbar, sceglie un formato con "(confronto)"                                       | ✅ / ❌ / ⚠️                          |
| 5   | Trova la sezione del documento definitivo        | Passa al tab "📋 Curricolo definitivo", trova la sezione "Curricolo Definitivo dopo Revisione"             | ✅ / ❌ / ⚠️                          |
| 6   | Individua l'avvertenza sulla validazione         | Legge il disclaimer "⚠️ Documento di lavoro — da validare. Non sostituisce delibera del Collegio Docenti." | ✅ / ❌ / ⚠️                          |
| 7   | Esporta il documento definitivo                  | Sceglie un formato con "(definitivo)" tra quelli disponibili                                               | ✅ / ❌ / ⚠️                          |
| 8   | Spiega a parole cosa resta da validare           | Dice che le proposte vanno approvate dal gruppo di lavoro/dipartimento/Collegio                            | ✅ / ❌ / ⚠️                          |

### Criteri di chiusura

| Esito                                          | Azione                                                   |
| ---------------------------------------------- | -------------------------------------------------------- |
| **8/8 superati**                               | Fase UX pronta. Chiudere ciclo CML-012.                  |
| **6-7/8 superati**, ⚠️ su passi non critici    | Micro-correzione guidata (CML-012B)                      |
| **≤5/8 superati** o ⚠️ su passo 6 (disclaimer) | Riaprire Opzione B strutturale con motivazione esplicita |

### Raccolta dati

Per ogni passo, annotare:

- Tempo impiegato (secondi)
- Commenti/testuali dell'utente
- Gesti insoliti (click sbagliati, tentativi, esitazioni)
- Risposte alla domanda "Cosa stai cercando?" (se l'osservatore deve intervenire)

### Vincoli

- ❌ Nessuna modifica runtime durante il test
- ❌ Nessuna guida verbale durante lo scenario
- ✅ Solo "Cosa stai cercando?" dopo 2 minuti di blocco
- ✅ Al termine, chiedere "Qual è la tua impressione generale?"

## Verdetto atteso (dopo esecuzione)

```
T01_CML_REAL_USER_TASK_PASSED
```

oppure

```
T01_CML_REAL_USER_TASK_FAILED_WITH_NOTE
```

## Prossimo step

- Eseguire CML-012B con il test su 1-2 docenti volontari
- Oppure passare a contenuti disciplinari / fonti se il test è già noto come superfluo
