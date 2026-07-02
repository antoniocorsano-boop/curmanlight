# CML-248 POST-LIVE PROCESS FLOW NEXT UX SELECTION — Report

## Sintesi

Audit di pianificazione post-live per selezionare la prossima priorità UX dopo CML-247. Decisione: CML-249 — GUIDE FLOW ALIGNMENT MICRO-UX.

## Stato tecnico di partenza

- Branch: `main`
- HEAD: `6b2a32a`
- Allineato con `origin/main`: sì
- Working tree: pulito

## Riepilogo CML-247

- Deploy live HTTP 200
- "Percorso di lavoro" visibile
- 4 fasi visibili
- Smoke Home/Processo/Esportazioni/selezione disciplina: PASS
- Console: 0 errori, 0 warning nuovi
- Responsive: verificato
- Runtime invariato

## Aree candidate analizzate

1. **Guida**
   - Allineamento con "Percorso di lavoro"
   - Collegamento ruoli/azioni/schermate
   - Riduzione istruzioni tecniche

2. **Esportazioni**
   - Chiarezza tra formati
   - Riduzione ridondanze
   - Chiarezza per ruolo

3. **Stati vuoti e messaggi**
   - Miglioramento schermate senza dati
   - Chiarezza import mancanti
   - Errori orientativi

4. **UDA smart / Programmazione**
   - Integrazione bozze/filtri/stati
   - Chiarimento relazioni

## Decisione

Selezionata: **CML-249 — GUIDE FLOW ALIGNMENT MICRO-UX**

Motivazione: coerenza con percorso di lavoro, impatto utente, rischio tecnico contenuto.

## Perimetro CML-249

- Intervento runtime piccolo
- Nessuna nuova funzione
- Nessuna modifica storage/schema/.cml/import-export
- Allineamento Guida a ruoli/azioni/esiti
- Microblocco "Cosa fare in base al ruolo"
- Nessuna duplicazione Home

## Rischi da evitare

- Modifiche runtime ampie
- Duplicazione contenuti
- Introduzione dipendenze
- Modifiche schema/storage

## Criteri accettazione CML-249

- Guida allineata a percorso Docente → Dipartimento → Referente → Esportazioni
- Nessuna nuova funzione
- Nessuna modifica a storage/schema/.cml/import-export
- Smoke Home/Guida/Processo/Esportazioni PASS
- Console 0 errori bloccanti

## Checklist

- [x] repository preflight verified
- [x] CML-247 live result reviewed
- [x] UX candidate areas reviewed
- [x] next runtime slice selected
- [x] runtime unchanged
- [x] no deploy executed
- [x] no push executed
- [x] verdict recorded
