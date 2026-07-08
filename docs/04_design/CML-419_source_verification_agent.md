# CML-419 — Source Verification Agent

## 1. Scopo

Aggiungere al tavolo tecnico CML-419 un agente dedicato alla raccolta, verifica, classificazione e tracciabilità delle fonti esterne necessarie per l'ambiente curricolare d'istituto.

L'agente non interpreta autonomamente il curricolo e non decide il valore istituzionale delle fonti. Il suo compito è costruire un quadro documentale verificabile per il tavolo tecnico umano e per gli auditors agentici.

## 2. Nome agente

```text
Source Verification Agent
```

Nome operativo italiano:

```text
Agente verifica fonti istituzionali e scolastiche
```

## 3. Mandato

L'agente deve:

1. raccogliere fonti ufficiali e scolastiche;
2. distinguere fonti normative, amministrative, informative e di lavoro;
3. verificare URL, data, provenienza e stabilità della fonte;
4. segnalare fonti non ufficiali, secondarie o ambigue;
5. produrre una matrice fonti utilizzabile nel sistema;
6. alimentare la Wiki del curricolo;
7. sostenere le viste Curricolo / Fonti, Curricolo / Versioni, Processo aggiornamento ed Esportazione;
8. evitare che materiali non adottati siano percepiti come curricolo vigente.

## 4. Fonti da presidiare

### 4.1 Fonti ministeriali e normative

Priorità massima:

- Ministero dell'Istruzione e del Merito;
- normativa pubblicata su canali istituzionali;
- decreti ministeriali;
- allegati ufficiali;
- pagine ministeriali sulle Indicazioni Nazionali;
- materiali ufficiali relativi a IN2012 e IN2025;
- eventuali note, comunicati, documenti di consultazione o allegati.

### 4.2 Scuola in Chiaro e anagrafiche scolastiche

Da verificare:

- denominazione istituto;
- codice meccanografico;
- plessi;
- ordini scolastici;
- indirizzi;
- offerta formativa pubblicata;
- collegamenti a PTOF/RAV/Rendicontazione quando disponibili;
- corrispondenza fra dati pubblici e informazioni usate nel sistema.

### 4.3 Sito istituzionale della scuola

Da raccogliere e verificare:

- PTOF pubblicato;
- RAV o rinvio a piattaforme ufficiali;
- curricolo verticale d'istituto se pubblicato;
- regolamenti e delibere pubblicate;
- comunicazioni relative ad aggiornamento curricolo;
- organigramma/funzionigramma se rilevante;
- dipartimenti e referenti se pubblicati;
- eventuali documenti su valutazione, inclusione, continuità, orientamento.

### 4.4 Fonti scolastiche interne o di lavoro

Da classificare come non automaticamente ufficiali:

- bozze di dipartimento;
- documenti di lavoro;
- materiali condivisi da docenti;
- bozze di curricolo;
- report generati da CML;
- file `.cml`;
- esportazioni non ancora validate.

### 4.5 Fonti secondarie

Utilizzabili solo come supporto, mai come base normativa primaria:

- articoli di commento;
- materiali editoriali;
- guide operative non ministeriali;
- sintesi reperite in rete;
- documenti prodotti da terzi.

## 5. Gerarchia di affidabilità

| Livello | Fonte | Uso ammesso |
|---|---|---|
| A | Normativa e documenti ufficiali MIM / canali istituzionali | Base primaria |
| B | Scuola in Chiaro / anagrafiche ufficiali | Verifica dati istituto |
| C | Sito ufficiale della scuola | Fonte istituzionale locale |
| D | Documenti interni o di lavoro della scuola | Materiale da verificare |
| E | Fonti secondarie non ufficiali | Solo orientamento, mai decisione |

## 6. Scheda fonte standard

Ogni fonte deve essere registrata con questi campi minimi:

```text
id_fonte:
titolo:
tipo_fonte:
livello_affidabilita: A/B/C/D/E
ente_autore:
url:
data_pubblicazione:
data_accesso:
stato: ufficiale / locale / lavoro / secondaria / non verificata
ambito:
collegamento_viste:
note_verifica:
rischi:
uso_consentito:
uso_non_consentito:
```

## 7. Protocollo di verifica

### 7.1 Passaggi obbligatori

1. Identificare la fonte.
2. Verificare dominio e provenienza.
3. Verificare data e versione.
4. Distinguere documento vigente, proposta, bozza o materiale di lavoro.
5. Verificare coerenza con altri riferimenti ufficiali.
6. Registrare data di accesso.
7. Assegnare livello A/B/C/D/E.
8. Collegare la fonte alle viste pertinenti.
9. Segnalare ambiguità o rischio di uso improprio.
10. Proporre formulazione prudente per la Wiki.

### 7.2 Esiti possibili

| Esito | Significato |
|---|---|
| verificata_ufficiale | Fonte primaria o istituzionale attendibile |
| verificata_locale | Fonte del sito istituzionale scolastico |
| materiale_lavoro | Documento utile ma non deliberativo |
| secondaria_supporto | Fonte non primaria, usabile solo come supporto |
| non_verificata | Fonte da non usare per decisioni |
| conflittuale | Fonte incoerente con altra documentazione |
| obsoleta | Fonte superata o non più aderente allo stato attuale |

## 8. Collegamento alle viste CML

| Vista | Uso delle fonti |
|---|---|
| Curricolo / Consulta | Mostra fonte della voce curricolare e stato vigente/proposta |
| Curricolo / Fonti | Archivio ragionato delle fonti ufficiali e scolastiche |
| Curricolo / Versioni | Collega versione, data, fonte e atto |
| Curricolo / Processo aggiornamento | Distingue materiali di lavoro da atti esterni |
| Progettazione didattica | Indica versione curricolare e fonte di riferimento |
| Esportazione | Inserisce avvertenze su stato documento e uso consentito |
| Wiki del curricolo | Spiega fonti, differenze e limiti |
| Vista dirigente/governance | Supporta controllo documentale e tracciabilità |

## 9. Avvertenze obbligatorie

L'agente deve impedire queste ambiguità:

- chiamare `vigente` ciò che è solo proposta;
- trattare un documento di lavoro come atto formale;
- presentare una bozza come curricolo adottato;
- usare fonti secondarie come base normativa;
- confondere sito scolastico, Scuola in Chiaro e MIM;
- omettere data di accesso;
- omettere stato della fonte.

## 10. Rapporto con IN2012 e IN2025

### 10.1 IN2012

Da trattare come riferimento vigente solo se confermato dal quadro normativo e/o dalla situazione dell'istituto.

### 10.2 IN2025

Da trattare con etichetta prudente fino a conferma istituzionale:

```text
materiale/proposta di aggiornamento da verificare
```

oppure, se il tavolo tecnico lo conferma:

```text
versione in revisione / proposta / adottata
```

in base allo stato effettivo.

## 11. Output dell'agente

L'agente produce:

1. matrice fonti;
2. elenco fonti primarie;
3. elenco fonti locali scolastiche;
4. elenco fonti non verificabili o ambigue;
5. note di cautela;
6. proposta di contenuti per Wiki / Fonti;
7. raccomandazioni per etichette UI;
8. rischi da sottoporre agli auditors agentici.

## 12. Matrice fonti iniziale da costruire

```text
Fonte | Tipo | Livello | URL | Data accesso | Stato | Vista collegata | Nota cautelativa
```

Esempi di righe attese:

```text
MIM - Indicazioni Nazionali 2012 | Normativa/documento ufficiale | A | ... | ... | ufficiale | Curricolo/Fonti | verificare versione e allegati
MIM - Materiali IN2025 | Documento ministeriale/proposta | A | ... | ... | da classificare | Curricolo/Versioni | non chiamare vigente se non adottato
Scuola in Chiaro - Istituto | Anagrafica ufficiale | B | ... | ... | ufficiale | Wiki/Istituto | verificare codice e plessi
Sito istituto - PTOF | Documento locale | C | ... | ... | locale | Curricolo/Wiki | verificare annualità e approvazione
Curricolo pubblicato scuola | Documento locale | C | ... | ... | locale | Curricolo/Consulta | verificare data e stato
```

## 13. Relazione con auditors agentici

Il Source Verification Agent alimenta soprattutto:

- Auditor normativo-curricolare;
- Auditor governance scolastica;
- Auditor architetturale, per tracciabilità dati;
- Auditor usabilità, per etichette e avvertenze.

## 14. Criteri di accettazione

- Ogni fonte ha stato, livello, URL e data accesso.
- Fonti ufficiali e fonti locali sono distinte.
- Fonti di lavoro e fonti adottate non sono confuse.
- IN2025 è trattata con etichetta prudente finché non è formalmente classificata.
- Il sito istituto e Scuola in Chiaro sono fonti separate.
- La Wiki riceve contenuti verificati.
- Gli export riportano stato e uso consentito.

## 15. Decisione operativa

Il tavolo tecnico CML-419 deve includere questo agente prima di procedere a CML-420.

La fase successiva non deve produrre mock definitivo finché la matrice fonti non ha almeno:

- fonti MIM essenziali;
- dati Scuola in Chiaro dell'istituto;
- sito istituto;
- PTOF/curricolo pubblicato se disponibile;
- fonti IN2012/IN2025 classificate;
- note di rischio.

## Verdict

```text
CML_419_SOURCE_VERIFICATION_AGENT_ADDED
```
