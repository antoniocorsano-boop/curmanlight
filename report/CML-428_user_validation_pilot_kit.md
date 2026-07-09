# CML-428 — User Validation Pilot Kit

Kit operativo per la prova pilota di CurManLight con docenti non tecnici.
Da usare con il test guidato introdotto in CML-400 e verificato in CML-427.

---

## 1. Scopo della prova pilota

- Verificare che CurManLight sia chiaro, utile e coerente con il lavoro scolastico reale.
- Raccogliere osservazioni qualitative su orientamento, comprensione e utilit percepita.
- Non valutare il docente né le sue competenze digitali.
- Non sostituire la decisione collegiale del dipartimento.

## 2. Profilo dei partecipanti

- Docenti non tecnici di discipline e ordini diversi (Infanzia, Primaria, Secondaria).
- Partecipazione volontaria.
- Nessuna competenza digitale avanzata richiesta.
- È sufficiente saper aprire un browser e leggere una pagina web.
- Numero suggerito: 3–5 docenti per istituto, anche uno solo è utile.

## 3. Messaggio di invito

Testo pronto all'uso, in tono istituzionale, breve e chiaro:

> **Oggetto: Invito alla prova pilota di CurManLight**
>
> Caro collega, ti scrivo per invitarti a una breve prova di CurManLight, lo strumento per consultare il curricolo verticale d'istituto.
>
> La prova dura circa 10–15 minuti. Non servono competenze tecniche: solo un computer o tablet con connessione Internet.
>
> Durante la prova ti verrà chiesto di guardare la Home, consultare una disciplina, e scrivere liberamente cosa ti è chiaro e cosa miglioreresti. Le tue osservazioni ci aiuteranno a rendere lo strumento più utile per tutti.
>
> Non c'è niente da installare, nessun account da creare, nessun dato personale da inserire.
>
> Se vuoi partecipare, rispondi a questa email o parlane con il referente. Ti invierò il link e le istruzioni.
>
> Grazie per il tuo contributo.

## 4. Istruzioni operative per il docente

1. **Apri CurManLight** — usa il link che hai ricevuto via email o dal referente.
2. **Entra nella Home** — è la prima pagina che vedi.
3. **Cerca la card "Partecipa al test guidato"** — è nella parte alta della Home, ha un bordo viola a sinistra.
4. **Clicca "Avvia test guidato"** — si apre una finestra con uno scenario e 5 compiti.
5. **Leggi lo scenario** — ti spiega cosa immaginare mentre usi lo strumento.
6. **Svolgi i compiti** — sono 5 passaggi da seguire liberamente:
   - Guarda la Home e capisci cosa puoi fare oggi.
   - Consulta una disciplina del curricolo.
   - Prova a capire come preparare una progettazione.
   - Verifica che sia chiaro che la validazione resta umana.
   - Scrivi cosa hai capito subito e cosa ti ha creato dubbio.
7. **Scrivi le tue osservazioni** — nel campo "Annotazioni non vincolanti" puoi scrivere liberamente cosa ti è chiaro, cosa miglioreresti, quali parti useresti davvero.
8. **Esporta il file** — clicca "Esporta osservazioni". Il browser scaricherà un file `.txt` chiamato `curmanlight-test-guidato-osservazioni.txt`.
9. **Consegna il file** — secondo la modalità concordata dalla scuola (email al referente, cartella condivisa, penna USB).

## 5. Durata suggerita

10–15 minuti. Se il docente desidera proseguire oltre, può farlo liberamente. L'importante è che la prova non sia percepita come un peso.

## 6. Cosa osservare

Durante l'analisi delle restituzioni, verificare:

| Area | Domanda guida |
|---|---|
| Orientamento iniziale | Il docente ha capito subito cosa può fare? |
| Comprensione della Home | Le card e i messaggi sono chiari? |
| Chiarezza del test guidato | Scenario e compiti erano comprensibili? |
| Ruolo della validazione umana | È chiaro che lo strumento non decide al posto del docente? |
| Utilità per il lavoro di dipartimento | Il docente vede un uso concreto per la scuola? |
| Parole o passaggi poco chiari | Ci sono termini che hanno creato difficoltà? |
| Parti realmente utili | Quali sezioni verrebbero usate davvero? |

## 7. Formato di restituzione

Il file `.txt` esportato contiene:

```
CurManLight — Test guidato utente

Data: {data in formato italiano}
Contesto: {contesto di lavoro se configurato}
Scenario: {testo dello scenario}

Annotazioni:
{testo libero del docente}
```

Il referente pu raccogliere i file e integrarli con eventuali note raccolte a voce.

## 8. Griglia interna di lettura delle evidenze

| Evidenza raccolta | Area interessata | Tipo problema | Gravità | Possibile azione | Candidata a nuova slice | Priorità |
|---|---|---|---|---|---|---|
| (esempio) | Home | Orientamento | Media | Rivedere microcopy card | CML-xxx | Alta |
| (esempio) | Test guidato | Chiarezza | Bassa | Rivedere testo scenario | CML-xxx | Media |
| (esempio) | Curricolo | Comprensione | Alta | Aggiungere legenda | CML-xxx | Alta |

### Legenda gravità

- **Alta**: blocca il completamento del compito.
- **Media**: rallenta o confonde, ma il compito è completabile.
- **Bassa**: miglioramento estetico o di chiarezza minore.

### Legenda area interessata

- `Home` — layout, card, messaggi, navigazione iniziale.
- `Test guidato` — scenario, compiti, modal, esportazione.
- `Curricolo` — discipline, unità, indicatori, legenda.
- `Progetta` — sezione di progettazione didattica.
- `Esportazioni` — esportazione documenti.
- `Guida` — guida rapida e contestuale.
- `Mobile` — comportamento su schermi piccoli.
- `Globale` — attraversa più sezioni.

## 9. Criteri per trasformare osservazioni in roadmap

Ogni osservazione raccolta va classificata in una delle seguenti categorie per decidere se e come trasformarla in una slice CML:

| Categoria | Descrizione | Azione tipica |
|---|---|---|
| Chiarimenti testuali | Testo ambiguo o poco chiaro | Microfix testo in slice dedicata |
| Microcopy | Etichette, pulsanti, messaggi brevi | Microfix HTML/CSS |
| Orientamento Home | Difficoltà a capire cosa fare | Slice PM-03 (Orientamento) |
| Guida contestuale | Difficoltà a trovare aiuto contestuale | Slice PM-06 (Accompagnamento) |
| Comportamento mobile | Problemi su schermi piccoli | Slice PM-03 (Mobile) |
| Esportazione | Difficoltà o dubbi sull'esportazione | Slice PM-05 (Esperienza) |
| Non pertinente | Osservazione non direttamente collegata a un'area dello strumento | Archiviare per riferimento futuro |
| Fuori ambito | Richiesta di funzionalità non previste (backend, account, invio remoto) | Segnalare ma non trasformare in slice |

### Regola di esclusione

Non vengono trasformate in slice CML osservazioni che richiedono:

- backend, database o server;
- account, login o autenticazione;
- invio remoto di dati o raccolta centralizzata;
- modifica dei dati curricolari (14 discipline);
- modifiche al formato `.cml` o all'import/export.

---

## Verdetto

CML_428_USER_VALIDATION_PILOT_KIT_READY_LOCAL_NOT_PUSHED
