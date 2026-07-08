# CML-419 — Source Verification Agent audit addendum

## 1. Scopo

Questo addendum integra il confronto con auditors agentici introducendo un presidio specifico per la raccolta e verifica delle fonti esterne.

Il Source Verification Agent è necessario prima di procedere a mock e prototipi perché il sistema CML deve distinguere correttamente:

- fonti ministeriali;
- dati pubblici di Scuola in Chiaro;
- sito istituzionale della scuola;
- documenti scolastici pubblicati;
- materiali interni o di lavoro;
- fonti secondarie non ufficiali.

## 2. Valutazione auditor normativo-curricolare

### Osservazioni

1. L'agente è indispensabile per evitare confusione fra fonte normativa, materiale ministeriale, documento locale e bozza di lavoro.
2. La matrice fonti deve indicare sempre URL, data di accesso, stato, livello di affidabilità e uso consentito.
3. IN2025 deve essere classificata con etichetta prudente finché non è chiarito il suo stato istituzionale.
4. La sezione Curricolo / Fonti non deve diventare un semplice elenco di collegamenti, ma un archivio ragionato.

### Esito

```text
PASS: agente necessario prima del mock definitivo.
```

## 3. Valutazione auditor governance scolastica

### Osservazioni

1. Il sito istituzionale della scuola e Scuola in Chiaro devono essere trattati come fonti diverse.
2. PTOF, RAV, curricolo pubblicato e documenti di istituto devono essere verificati per annualità e stato.
3. Le fonti locali possono sostenere il contesto della scuola, ma non sostituiscono normativa o atti formali.
4. Gli export devono riportare stato e uso consentito quando derivano da fonti non definitive.

### Esito

```text
PASS_CON_RISERVA: usare classificazione A/B/C/D/E e data accesso obbligatoria.
```

## 4. Valutazione auditor architetturale

### Osservazioni

1. L'agente fonti non richiede modifiche runtime in CML-419.
2. La matrice fonti può essere inizialmente documentale.
3. In una fase successiva potrà diventare struttura dati separata o sezione Wiki/Fonti.
4. Non va introdotto crawling automatico dentro l'app senza decisione esplicita su privacy, responsabilità e aggiornamento.

### Esito

```text
PASS: agente compatibile con architettura prudente docs-first.
```

## 5. Valutazione auditor usabilità

### Osservazioni

1. L'utente non deve vedere la complessità della verifica fonti.
2. Le viste devono mostrare etichette semplici: ufficiale, istituto, lavoro, non verificata.
3. La Wiki deve spiegare la differenza tra fonte ufficiale, documento scolastico e materiale di lavoro.
4. Le avvertenze devono essere brevi e contestuali.

### Esito

```text
PASS: agente utile se trasforma complessità documentale in microcopy chiaro.
```

## 6. Matrice rischi specifica

| Rischio | Priorità | Mitigazione |
|---|---:|---|
| Fonte secondaria usata come primaria | P1 | Livello affidabilità obbligatorio |
| IN2025 presentata come vigente | P1 | Stato fonte e stato versione sempre visibili |
| PTOF o curricolo scuola obsoleto | P1 | Verifica annualità e data accesso |
| Scuola in Chiaro confusa con sito istituto | P2 | Campi fonte separati |
| Link non stabile o non verificato | P2 | Stato `non_verificata` e nota cautelativa |
| Export senza cautela | P2 | Uso consentito / uso non consentito nella scheda fonte |

## 7. Condizioni di accettazione aggiuntive

Prima di CML-420 il pacchetto CML-419 deve includere:

- documento Source Verification Agent;
- gerarchia fonti A/B/C/D/E;
- scheda fonte standard;
- protocollo verifica;
- collegamento alle viste CML;
- matrice fonti iniziale da costruire;
- addendum audit agentico.

## 8. Decisione

Il Source Verification Agent diventa parte stabile del tavolo tecnico CML-419.

Non è un ruolo facoltativo: senza matrice fonti non si deve procedere a mock definitivo perché mancherebbe il controllo sulla natura dei riferimenti IN2012/IN2025 e sulle fonti scolastiche locali.

## Verdict

```text
CML_419_SOURCE_VERIFICATION_AGENT_AUDIT_ADDENDUM_READY
```
