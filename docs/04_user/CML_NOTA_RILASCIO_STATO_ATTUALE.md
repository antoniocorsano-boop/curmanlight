# CurManLight — Nota di rilascio — Stato attuale

**Data:** 1 luglio 2026
**Versione:** v1.0 (Ciclo Accessibilità)
**URL:** [https://antoniocorsano-boop.github.io/curmanlight](https://antoniocorsano-boop.github.io/curmanlight)

## Stato sintetico

CurManLight è una web app statica che supporta la revisione del curricolo verticale d'istituto, dalla consultazione alla proposta, fino alla sintesi di gruppo. Funziona su qualsiasi dispositivo con browser (computer, tablet, smartphone). Può essere installata come app sul dispositivo e funziona anche offline dopo la prima visita.

## Cosa è disponibile

### Consultazione del Curriculum

- **IN 2012 (vigente)** — il testo attualmente in vigore (DM 254/2012)
- **IN 2025 (bozza)** — il testo proposto dalle nuove Indicazioni Nazionali (DM 221/2025)
- **Fonti** — premessa, profilo dello studente, valutazione, inclusione, continuità, orientamento
- **Indice navigabile** per disciplina e ordine di scuola
- **Callout informativo** "Prima di leggere le discipline"

### Competenze e progettazione

- Evidenze per competenza
- Programmazione annuale
- Bozze di Unità di Apprendimento (UDA) con anteprima e download

### Flusso operativo

- **Proposta docente** — il docente esporta un file `.cml` con le modifiche suggerite
- **Validazione dipartimentale** — il coordinatore importa le proposte, registra l'esito ed esporta
- **Verifica referente** — il referente importa gli esiti e genera un report di sintesi
- **Report gruppo di lavoro** — il referente può scaricare un report con la sintesi delle proposte, gli esiti e gli elementi da chiarire

### Controllo accesso ruoli

Le funzioni riservate (proposta docente, validazione dipartimentale, verifica referente) sono protette da un codice ruolo. I codici sono comunicati dal referente curricolo.

### Accessibilità

L'app è stata verificata con strumenti automatici e risulta utilizzabile con lo screen reader. Per miglioramenti o difficoltà, segnala al referente curricolo.

### PWA (installabile)

L'app può essere installata sul dispositivo (computer, tablet, smartphone) e funziona anche senza connessione internet dopo la prima visita.

## Discipline disponibili

Tutte le 14 discipline del curricolo verticale sono presenti in entrambe le versioni (IN 2012 e IN 2025):

1. Italiano
2. Inglese
3. Francese
4. Storia
5. Geografia
6. Matematica
7. Scienze
8. Musica
9. Arte e Immagine
10. Educazione Fisica
11. Tecnologia
12. IRC
13. Ed. Civica
14. Scienze Motorie

## Cosa resta fuori

- **Login o autenticazione** — non c'è un account, l'accesso è regolato da codici ruolo condivisi
- **Backend o database** — non c'è un server che conserva i dati. I file `.cml` sono salvati manualmente sul computer
- **Integrazione con Drive o cloud** — il passaggio dei file `.cml` avviene manualmente (email, chiavetta, condivisione file)
- **Firma digitale o approvazione formale** — lo strumento produce materiale preparatorio, non atti deliberativi
- **Modifica del curricolo direttamente nell'app** — il curricolo consultato è precaricato; le modifiche passano attraverso il flusso `.cml`

## Uso prudente dello strumento

- Tutti i contenuti sono **materiale di lavoro**.
- Le proposte simulate negli esempi `.cml` non rappresentano posizioni ufficiali.
- Il report del referente è una sintesi di lavoro, non un verbale approvato.
- Per l'adozione formale del curricolo, fare riferimento agli atti del Collegio Docenti e del Dirigente Scolastico.

## Documenti correlati

- `CML_GUIDA_RAPIDA_UTENTE.md` — come iniziare
- `CML_SCHEDA_STATO_PROGETTO.md` — scheda sintetica del progetto
- `CML_VADEMECUM_DIPARTIMENTI.md` — come gestire la validazione dipartimentale
- `CML_SCHEDA_REFERENTE_CURRICOLO.md` — come raccogliere gli esiti e generare il report
- `CML_GUIDA_SIMULAZIONE_ESEMPI.md` — passo passo con gli esempi `.cml`