# CML-UX-LIGHTWEIGHT-EXPERIENCE-SECOND-CYCLE-AUDIT

Tipo slice: docs-only / read-only audit
Runtime modificato: no
Verdict atteso: `CML_UX_LIGHTWEIGHT_EXPERIENCE_SECOND_CYCLE_AUDIT_READY_LOCAL_NOT_PUSHED`

## Obiettivo

Eseguire un secondo audit dell'esperienza utente dopo il riordino runtime P0/P1 gia completato, per individuare residui P2/P3 alleggeribili senza modificare subito il runtime.

Finalita: preparare un eventuale secondo ciclo di micro-polish prudente, centrato su riduzione del carico cognitivo, chiarezza dei percorsi docente/dipartimento/referente e distinzione fra documenti, file di lavoro, report e copie di sicurezza.

Principio guida: una schermata, un compito, una decisione.

## Contesto

- Branch: `main`
- HEAD iniziale: `f14a33e4156efad1a558a70dfb42140bd846b3fb`
- `origin/main`: `f14a33e4156efad1a558a70dfb42140bd846b3fb`
- Commit corrente: `f14a33e docs: align Educazione Fisica user validation guide`
- Working tree iniziale: pulito
- Runtime P0/P1 completato e pubblicato: Home alleggerita, Revisione deduplicata, Programmazione annuale separata in Passo 1/Passo 2, UDA raccordata, Fonti e Sezioni generali separate.
- Accessibilita P3 residua gia documentata e chiusa.
- Documentazione utente/onboarding aggiornata, con qualche residuo terminologico da osservare in audit separato.

## Metodo di audit

1. Preflight Git e allineamento con `origin/main`.
2. Lettura read-only del runtime locale `_published_snapshot/netlify-current/index.html`.
3. Lettura degli audit e report P0/P1 precedenti.
4. Lettura della guida utente principale e dei documenti per dipartimento/referente.
5. Valutazione per area: scopo percepibile, azioni visibili, testi lunghi, ridondanze, sovrapposizioni, coerenza con guida, rischio per utenti non tecnici.
6. Classificazione P2/P3/HOLD, senza riaprire P0/P1 gia chiusi.

## Stato di partenza UX

Aree stabilizzate dal primo ciclo:

- Home: ora ridotta a due card operative e un footer breve.
- Revisione: azioni di scaricamento spostate in Esportazioni.
- Programmazione annuale: consultazione iniziale + Passo 1 bozza + Passo 2 UDA smart.
- UDA modello: raccordo esplicito verso Programmazione annuale Passo 2.
- Fonti e Sezioni generali: separate in tab distinti con link reciproci.

Residui da valutare:

- Esportazioni ancora dense.
- Processo ancora con due ruoli nello stesso tab.
- Valutazione/Evidenze ancora ricca di testo di supporto.
- UDA smart con filtri, form, azioni e anteprime nello stesso details.
- Guida runtime non ancora completamente aggiornata ai passi Programmazione annuale e al tab Processo.
- Stati vuoti utili ma non sempre orientati al passo successivo.

## Aree analizzate

### Home

La Home e molto piu essenziale rispetto alla baseline P0/P1: due ingressi principali, tre link per area didattica e una nota finale. Rimane un piccolo overlap con la Guida nel footer, ma e tollerabile per orientare l'utente all'avvio.

Decisione: HOLD con rifinitura P3 opzionale.

### Esportazioni / scaricamento documenti

La sezione ha sei gruppi visibili: Documento finale, Confronto modifiche, Bozza disciplina, File di lavoro CurManLight, Report e resoconti, Copia di sicurezza. Il centro documentale e utile, ma l'utente vede ancora molti pulsanti simili: Word, Copia per Word, Testo, PDF, proposta docente, esito dipartimento, report, copia.

Problema residuo: distinzione concettuale migliorabile fra documento finale, documento di confronto, file di lavoro, report e backup. Il gruppo File di lavoro include anche `Invia al Drive`, che puo sembrare una condivisione esterna forte rispetto al modello locale/manuale.

Decisione: P2, intervenire nel secondo ciclo con micro-riordino e microcopy, senza cambiare funzioni.

### Guida

La Guida runtime e chiara ma parziale: spiega Curriculum, Revisione, Definitivo, Fonti, Esportazioni e limiti. Non nomina esplicitamente il tab Processo e nella card Competenze e progettazione non cita Programmazione annuale Passo 1/Passo 2. La documentazione utente esterna contiene percorsi ruolo, ma alcune istruzioni storiche indicano ancora la scheda Revisione per azioni che nel runtime corrente sono nel tab Processo.

Problema residuo: la Guida puo assorbire spiegazioni lunghe dalle sezioni operative, ma prima va allineata ai nomi reali del runtime.

Decisione: P2, intervenire con microcopy guida e orientamento per ruoli.

### Processo

Il tab Processo contiene due `details`: Confronto di dipartimento e Verifica referente curricolo. La separazione via collapsible e buona, ma i due ruoli restano nello stesso pannello e l'utente puo non capire quale blocco usare prima. Le azioni sono comunque poche e localizzate.

Problema residuo: chiarire a colpo d'occhio che il coordinatore usa il primo pannello e il referente usa il secondo, evitando testo lungo.

Decisione: P2 leggero, non nuova funzione.

### Programmazione annuale / UDA smart

La separazione Passo 1/Passo 2 ha risolto il problema P0. Rimane una densita P2 nel Passo 2: filtri estesi, form manuale, generazione, salvataggio, svuotamento libreria, due anteprime e lista nello stesso details. Lo stato vuoto `0 UDA trovate su 0` e tecnicamente corretto ma freddo per un docente.

Problema residuo: orientare meglio lo stato iniziale e rendere piu secondarie le azioni distruttive o meno frequenti.

Decisione: P2/P3, intervenire solo su microcopy e gerarchia visiva.

### UDA modello

La vista UDA modello ha un raccordo verso UDA smart e resta utile come generatore semplice. Il testo introduttivo e il box guida sono ancora corposi, ma non bloccanti.

Decisione: P3, alleggerire solo se si interviene gia su Programmazione/UDA.

### Valutazione / Evidenze

La sezione contiene header, box Come usare, box Non sostituisce, footer prudenziale e reset marcature. Il contenuto e corretto, ma la stessa cautela appare in piu punti.

Problema residuo: testo di supporto ridondante; parte puo passare alla Guida.

Decisione: P3 o P2 basso, utile ma non prioritario rispetto a Esportazioni/Guida/Processo.

### Documenti / Definitivo

Il tab Definitivo e leggibile e rimanda a Esportazioni per scaricare. La relazione semantica fra Definitivo e Documento finale e chiara per utenti gia orientati, meno per utenti al primo accesso.

Decisione: P3, rinominare microcopy di raccordo se si lavora su Esportazioni.

### Stati vuoti e messaggi di sistema

Gli stati vuoti sono presenti: nessuna unita, nessuna bozza UDA, nessuna evidenza marcata, mappa non predisposta. Alcuni sono orientati all'azione, altri descrivono solo l'assenza.

Decisione: P2 leggero, soprattutto su UDA smart e generazione UDA.

### Azioni secondarie / Cruscotto

Il menu Azioni resta ricco: Salva, Salva copia, Importa, Ripristina, Installa, Impostazioni/onboarding, corso PDF, motto, Guida rapida. Essendo collassato, non e una priorita immediata. Le azioni backup duplicano Esportazioni, ma la duplicazione e accettabile come via rapida.

Decisione: HOLD, non intervenire nel secondo ciclo salvo evidenza utente.

## Tabella residui P2/P3/HOLD

| Area | Problema residuo | Impatto utente | Priorita | Intervento suggerito | Rischio regressione | Smoke necessario | Decisione |
|---|---|---|---|---|---|---|---|
| Esportazioni | Sei gruppi e molti pulsanti simili | Difficile scegliere il documento giusto | P2 | Raggruppare visivamente per compito e rendere secondarie le azioni meno frequenti | Medio-basso | scaricamenti principali ancora visibili | Intervenire |
| Guida | Non cita chiaramente Processo e Passo 1/Passo 2 | Utente segue percorsi non perfettamente allineati | P2 | Aggiornare card Guida con ruoli e passi reali | Basso | Guida navigabile e link invariati | Intervenire |
| Processo | Coordinatore e referente nello stesso tab | Possibile confusione di ruolo | P2 | Microcopy iniziale e intestazioni ruolo piu esplicite | Basso | carica proposte/esiti e report accessibili | Intervenire |
| Programmazione/UDA smart | Passo 2 ancora denso | Sovraccarico dopo apertura details | P2 | Stato vuoto orientato, azioni distruttive piu secondarie, spiegazioni ridotte | Medio-basso | filtri e generazione UDA invariati | Intervenire |
| Stati vuoti | Alcuni messaggi descrivono solo l'assenza | L'utente non sa il passo successivo | P2 | Microcopy orientato all'azione | Basso | stati vuoti renderizzati | Intervenire se incluso |
| Valutazione/Evidenze | Box + footer ripetono cautela | Lettura piu lunga del necessario | P3 | Ridurre un box o spostare spiegazione in Guida | Basso | lista evidenze e filtri invariati | Rinviare o includere se piccolo |
| Definitivo | Raccordo con Documento finale ancora verboso | Ambiguita leggera | P3 | Rinominare raccordo verso Esportazioni | Basso | riepilogo e export finale accessibili | Rinviare |
| Home | Footer ancora orientativo | Ridondanza minima | HOLD/P3 | Lasciare invariata o accorciare solo in coda | Basso | Home invariata | Lasciare invariata |
| Quick actions | Backup duplicato con Esportazioni | Doppia via ma collassata | HOLD | Non toccare ora | Medio | salvataggio/backup invariati | Lasciare invariato |
| Fonti/Sezioni generali | Separate e navigabili | Nessun problema nuovo | HOLD | Nessun intervento | Basso | tab separati funzionanti | Lasciare invariato |

## Proposta di secondo ciclo runtime

Massimo cinque interventi leggeri:

1. Esportazioni: micro-riordino gerarchico dei gruppi, distinguendo `Documento finale`, `Confronto`, `File di lavoro`, `Report`, `Copia di sicurezza`; lasciare tutti i pulsanti esistenti ma rendere piu evidenti le azioni primarie.
2. Guida: aggiornare la card Curriculum/Processo e la card Competenze per nominare `Processo`, `Programmazione annuale`, `Passo 1`, `Passo 2` e il percorso docente/dipartimento/referente.
3. Processo: aggiungere un breve orientamento iniziale e rendere piu esplicite le etichette `Coordinatore di dipartimento` e `Referente curricolo`.
4. UDA smart / Programmazione: migliorare stati vuoti e microcopy del Passo 2; rendere `Svuota libreria` meno prominente senza cambiare handler.
5. Stati vuoti: aggiornare messaggi principali per indicare l'azione successiva, soprattutto UDA smart, UDA modello e combinazioni senza unita.

## Cosa non fare nel secondo ciclo

- Non cambiare struttura dati.
- Non riscrivere import/export.
- Non modificare filtri UDA.
- Non modificare hash/nav.
- Non modificare validatori.
- Non aggiungere dipendenze.
- Non cambiare workflow docente/dipartimento/referente gia validati.
- Non introdurre ruoli o permessi nuovi.
- Non trasformare la UI in una nuova architettura completa.
- Non rimuovere funzioni: al massimo spostare, rinominare o rendere secondarie.

## Smoke test futuro per remediation P2/P3

- Apertura Home.
- Navigazione aree principali: Home, Curriculum, Competenze e progettazione, Esportazioni, Guida.
- Curriculum consultabile per almeno una disciplina.
- Revisione accessibile e filtri funzionanti.
- Processo: pannello coordinatore, pannello referente e report accessibili.
- Programmazione annuale: consultazione, Passo 1 e Passo 2 apribili.
- UDA smart: filtri, generazione da programmazione, anteprima, copia/scaricamento invariati.
- UDA modello: generazione bozza e stato nessuna evidenza invariati.
- Definitivo accessibile e link a Esportazioni funzionante.
- Esportazioni accessibili e pulsanti principali presenti.
- Guida accessibile e coerente con i nomi runtime.
- Assenza errori console.
- Hash/nav invariati.
- Nessuna perdita di contenuto critico.
- Nessun cambio a schema o file di lavoro.

## Raccomandazione operativa

Procedere con una futura slice runtime chiamata, ad esempio:

```text
CML_UX_LIGHTWEIGHT_EXPERIENCE_SECOND_CYCLE_P2_POLISH
```

Perimetro consigliato: Esportazioni + Guida + Processo + stati vuoti UDA/Programmazione. Evitare di toccare Home, Fonti/Sezioni generali e quick actions in assenza di evidenze utente aggiuntive.

## Esclusioni di questa slice

- Nessuna modifica a `_published_snapshot/netlify-current/index.html`.
- Nessuna modifica a `content/curriculum/`.
- Nessuna modifica a `tools/`.
- Nessuna modifica a package, lockfile, asset, service worker, manifest, validatori, schema o dati curricolari.
- Nessun deploy e nessun push.

## Verdict

```text
CML_UX_LIGHTWEIGHT_EXPERIENCE_SECOND_CYCLE_AUDIT_READY_LOCAL_NOT_PUSHED
```
