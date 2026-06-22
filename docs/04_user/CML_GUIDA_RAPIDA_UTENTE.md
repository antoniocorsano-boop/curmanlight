# Guida rapida — CurManLight

## Che cos'è

CurManLight è uno strumento web che aiuta il collegio docenti a revisionare il curricolo verticale d'istituto, passaggio per passaggio. Funziona interamente nel browser: non servono installazioni, non servono account, non vengono inviati dati online.

**Versione pubblicata:** https://curmanlight.netlify.app

## A cosa serve

- Leggere il curricolo vigente (IN 2012) e le proposte di aggiornamento (IN 2025)
- Personalizzare una proposta per la propria disciplina
- Raccogliere le proposte dei docenti a livello di dipartimento
- Valutare le proposte e decidere se accoglierle, modificarle o chiederne chiarimento
- Preparare un report di lavoro per il gruppo curricolo

## A cosa non serve

- **Non** sostituisce la delibera del Collegio Docenti
- **Non** genera automaticamente un curricolo approvato
- **Non** invia dati al Drive, al registro elettronico o a piattaforme esterne
- **Non** richiede login, account o autenticazione

---

## Ruoli

### Docente

Apre la disciplina, legge le proposte IN 2025, personalizza il testo se necessario, decide se approvare o respingere, esporta il file `.cml` della propria proposta.

### Dipartimento

Importa i file `.cml` ricevuti dai docenti, esamina le proposte per disciplina, formula un esito (confluita nella sintesi, riformulata, assorbita, da chiarire), esporta il file `.cml` dell'esito dipartimentale.

### Referente curricolo

Importa gli esiti dipartimentali `.cml`, verifica completezza e coerenza, genera il report Markdown "Report di lavoro per il gruppo curricolo" da usare come base per la discussione collegiale.

---

## Flusso operativo

### 1. Il docente apre la proposta

- Aprire https://curmanlight.netlify.app
- Selezionare la propria disciplina nel pannello "Revisione per disciplina"
- Leggere ogni voce: accanto al testo vigente (IN 2012) compare la proposta IN 2025

### 2. Il docente personalizza (se necessario)

- Usare il pulsante "Personalizza testo" per modificare la proposta
- Decidere: **Approva**, **Respinta** o **Rinvia**
- Il riepilogo mostra automaticamente lo stato delle decisioni

### 3. Il docente esporta il file `.cml`

- Nel pannello "Revisione per disciplina", cliccare **"⬇️ Scarica proposta .cml"**
- Viene scaricato un file con nome tipo `proposta_docente_Italiano_2026-06-22.cml`
- Inviare il file al coordinatore di dipartimento (via email, Drive condiviso, chiavetta USB)

### 4. Il dipartimento importa le proposte

- Aprire CurManLight e andare alla sezione **"🏫 Validazione dipartimentale"**
- Cliccare **"Importa proposte docenti .cml"** e selezionare i file ricevuti
- Ogni proposta importata compare con il suo contenuto

### 5. Il dipartimento formula l'esito

- Per ogni proposta, indicare un esito:
  - *Confluita nella sintesi* — la proposta è stata assorbita nella sintesi finale
  - *Riformulata dal dipartimento* — la proposta è stata modificata
  - *Assorbita in altra proposta* — la proposta confluisce in altra
  - *Da chiarire* — serve un chiarimento prima di decidere
- Cliccare **"⬇️ Esporta esito dipartimento .cml"**
- Viene scaricato un file con nome tipo `esito_dipartimento_2026-06-22.cml`
- Inviare il file al referente curricolo

### 6. Il referente importa gli esiti

- Aprire CurManLight e andare alla sezione **"📋 Verifica referente curricolo"**
- Cliccare **"Importa esiti dipartimentali .cml"** e selezionare i file ricevuti
- Il riepilogo mostra il quadro completo: discipline presenti, esiti, elementi da chiarire

### 7. Il referente genera il report gruppo di lavoro

- Cliccare **"📄 Scarica report gruppo di lavoro"**
- Viene scaricato un file Markdown con nome `report_gruppo_curricolo_YYYY-MM-DD.md`
- Il report contiene: sintesi generale, quadro per disciplina, punti da chiarire, elementi senza esito, evidenze, traccia per la discussione

---

## Cosa scaricare e quando

| Documento | Ruolo | Quando |
|---|---|---|
| Proposta docente `.cml` | Docente | Dopo aver revisionato la propria disciplina |
| Esito dipartimentale `.cml` | Dipartimento | Dopo aver valutato le proposte dei docenti |
| Report gruppo di lavoro `.md` | Referente | Dopo aver importato tutti gli esiti dipartimentali |
| Curricolo definitivo (Word/Markdown/PDF) | Chiunque | Dalla scheda "Curricolo Definitivo", solo dopo che le voci sono state approvate |

---

## Avvertenze istituzionali

- I file prodotti da CurManLight sono **materiale di lavoro preparatorio**
- **Non sostituiscono** la delibera del Collegio Docenti, la validazione del dipartimento o l'approvazione formale del curricolo
- Ogni contenuto deve essere verificato e validato dagli organi competenti prima di diventare ufficiale
- **Non inserire dati personali o sensibili** (nomi, cognomi, email, dati di contatto) nei file `.cml` o nel report
- Lo strumento funziona localmente nel browser: il lavoro resta sul dispositivo

---

## Problemi frequenti

### "Il file non viene riconosciuto"

- Verificare che il file abbia estensione `.cml`
- Verificare che sia stato scaricato da CurManLight (non modificato manualmente)
- I file `.cml` non sono file Word o PDF: non vanno aperti con Word

### "Nessun esito importato"

- Il file `.cml` deve essere un esito dipartimentale (esportato dal pannello "Validazione dipartimentale"), non una proposta docente
- Usare il pulsante corretto: **"Importa esiti dipartimentali .cml"** (sezione referente)

### "Il report è vuoto"

- Importare prima almeno un file `.cml` valido con esiti dipartimentali
- Il pulsante "Scarica report gruppo di lavoro" genera il report solo se ci sono esiti importati

### "Ho perso il file scaricato"

- Riaprire CurManLight e riesportare: i dati sono ancora nello strumento (se non è stata cancellata la cache del browser)
- Il file `.cml` può essere rigenerato in qualsiasi momento

### "La pagina non mostra gli ultimi aggiornamenti"

- Prova a ricaricare la pagina premendo `Ctrl+F5` per forzare l'aggiornamento della cache
- Se il problema persiste, aprire la pagina in una finestra di navigazione in incognito

---

## Collegamento

**Versione pubblica:** https://curmanlight.netlify.app

*Documento aggiornato al 22/06/2026. Lo strumento è in fase di sviluppo collaborativo: le funzionalità descritte corrispondono alla versione corrente.*
