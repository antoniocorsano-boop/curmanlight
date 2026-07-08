# CML-421 — Protocollo test utente prototipo

## 1. Scopo

Validare il prototipo informativo/navigazionale CML-420 con utenti scolastici non tecnici.

Il test non valuta la persona. Valuta se l'ambiente è comprensibile, utile e coerente con il processo scolastico.

## 2. Principio del test

Il partecipante deve ragionare ad alta voce, anche con dubbi e incertezze.

Non si cerca la risposta giusta. Si osserva:

- dove guarda;
- quali parole capisce;
- dove si aspetta di trovare una funzione;
- quali sezioni risultano confuse;
- quali cautele su fonti e validazione risultano chiare.

## 3. Materiale da mostrare

Usare i documenti CML-420:

- `docs/04_design/CML-420_ia_navigation_prototype.md`
- `docs/04_design/CML-420_wireframes_logici.md`

Non serve mostrare codice o runtime.

## 4. Script iniziale per il facilitatore

```text
Stiamo valutando la chiarezza di un prototipo di ambiente curricolare d'istituto.
Non stiamo valutando te o le tue competenze tecniche.
Ti chiederò di guardare alcune schermate logiche e di dirmi cosa capisci,
dove cliccheresti e cosa ti aspetteresti di trovare.
Puoi esprimere dubbi, critiche e suggerimenti liberamente.
Non inseriremo dati personali di studenti o colleghi.
```

## 5. Scenario A — Docente

### Situazione

```text
Devi consultare il curricolo della tua disciplina e preparare una UDA coerente.
```

### Compiti

1. Da Home, indica dove andresti per leggere il curricolo.
2. Trova dove sono indicati fonte e stato della versione.
3. Indica dove andresti per progettare una UDA.
4. Spiega cosa ti aspetti da `Collegamenti curricolo`.
5. Trova dove esporteresti una UDA o un estratto.
6. Cerca dove capire la differenza tra IN2012 e IN2025.

### Osservazioni attese

- Capisce `Curricolo` come ambiente di consultazione.
- Capisce `Progettazione didattica` come ambiente autonomo.
- Non confonde `Wiki` con una semplice guida tecnica.
- Capisce che IN2025 non è automaticamente vigente.

## 6. Scenario B — Coordinatore di dipartimento

### Situazione

```text
Hai ricevuto proposte dai docenti e devi capire come entrare nel processo di aggiornamento.
```

### Compiti

1. Da Home, indica dove cercheresti il processo di aggiornamento.
2. Spiega la sequenza Docente → Dipartimento → Referente → Organi collegiali.
3. Indica dove andresti per esportare un esito dipartimentale.
4. Cerca se l'app approva automaticamente il curricolo.
5. Individua dove sono spiegati ruoli e limiti.

### Osservazioni attese

- Trova il processo dentro Curricolo.
- Non cerca l'approvazione nella Home.
- Capisce il ruolo del dipartimento come validazione/confronto, non adozione formale.
- Capisce che gli organi collegiali restano fuori dall'app.

## 7. Scenario C — Referente curricolo

### Situazione

```text
Devi controllare fonti, versioni e stato del lavoro prima di preparare una sintesi.
```

### Compiti

1. Trova la sezione Fonti.
2. Distingui una fonte confermata da una fonte repo-defined.
3. Trova la sezione Versioni.
4. Spiega perché `Curricolo definitivo` non può essere dichiarato adottato senza fonte o atto.
5. Indica dove esporteresti un report referente.
6. Cerca nella Wiki la spiegazione dei limiti dello strumento.

### Osservazioni attese

- Comprende la cautela sulle fonti.
- Capisce che repo-defined non significa automaticamente certificato esternamente.
- Capisce la differenza tra proposta, vigente, adottato.
- Non attribuisce all'app poteri deliberativi.

## 8. Scenario D — Dirigente / governance opzionale

### Situazione

```text
Vuoi capire lo stato del processo curricolare senza entrare nel dettaglio di ogni disciplina.
```

### Compiti

1. Da Home, indica dove vedresti lo stato sintetico.
2. Trova dove leggere fonti e versioni.
3. Cerca un report di avanzamento.
4. Indica dove viene chiarito che gli atti formali restano esterni.
5. Valuta se il linguaggio è adatto a una presentazione istituzionale.

### Osservazioni attese

- Coglie il valore di sintesi senza chiedere funzioni deliberative.
- Capisce che l'app prepara materiali, non sostituisce atti.
- Valuta se `Ambiente curricolare d'istituto` è denominazione adeguata.

## 9. Domande trasversali finali

1. Quale delle quattro aree useresti per prima?
2. C'è una parola poco chiara?
3. Ti sembra chiaro cosa è vigente e cosa è proposta?
4. Ti sembra chiaro dove progettare attività didattiche?
5. Ti sembra chiaro dove esportare materiali?
6. Ti sembra chiaro che l'app non approva il curricolo?
7. Cosa manca nella Home?
8. Cosa è superfluo nella Home?
9. Useresti la Wiki? Per cosa?
10. Su smartphone, quali funzioni vorresti avere subito?

## 10. Criteri osservativi

| Criterio | Esito possibile |
|---|---|
| Trova Curricolo | sì / con aiuto / no |
| Trova Progettazione | sì / con aiuto / no |
| Trova Esportazione | sì / con aiuto / no |
| Trova Wiki | sì / con aiuto / no |
| Capisce IN2025 proposta | sì / parziale / no |
| Capisce validazione umana | sì / parziale / no |
| Capisce processo dentro Curricolo | sì / parziale / no |
| Capisce fonti repo-defined | sì / parziale / no |
| Comprende mobile | sì / parziale / no |

## 11. Criterio di passaggio

Passaggio a CML-422 consentito solo se:

```text
almeno 3 partecipanti comprendono i quattro ambienti senza spiegazione tecnica;
e nessun partecipante interpreta CML come sistema di approvazione automatica.
```

## 12. Esito possibile

| Esito | Decisione |
|---|---|
| PASS | Procedere a CML-422 Runtime Scope Decision |
| PASS con riserve | Rivedere microcopy o IA prima di CML-422 |
| FAIL | Tornare a CML-420 e semplificare prototipo |

## Verdict

```text
CML_421_USER_TEST_PROTOCOL_READY
```
