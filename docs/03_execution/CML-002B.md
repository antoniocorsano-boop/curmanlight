# CML-002B — PDF term hotfix “arianese”

Data esecuzione: 2026-06-20

## Stato Git iniziale

- Branch rilevata: `cml-002r-published-runtime-recovery`
- Commit di partenza: `c17fd55d55013ca97789a6021efcaaaaf7b21f51` (`docs: map curmanlight existing logic baseline`)
- Working tree: non pulita; erano presenti file non tracciati della slice CML-002R, preservati senza alterazioni salvo il PDF oggetto di questa slice
- Branch creata: `cml-002b-pdf-term-hotfix-arianese`

## Asset e sorgenti

- PDF aggiornato: `_published_snapshot/netlify-current/Corso_CurricoloDonMilani_IN2025.pdf`
- Nome finale preservato: `Corso_CurricoloDonMilani_IN2025.pdf`
- Il PDF era già presente nello snapshot locale recuperato dal sito pubblicato durante CML-002R; CML-002B non ha effettuato un nuovo download
- Sorgente candidato verificato: `_handoff/sources/Curricolo disciplinare WORD.docx`
- Il DOCX non contiene la parola intera `ariana` e non è stato modificato
- Nessun altro sorgente PPTX, HTML o Markdown collegato al PDF è stato individuato

## Correzione

- Occorrenze case-insensitive della parola intera `ariana` prima: **5**
- Occorrenze case-insensitive della parola intera `ariana` dopo: **0**
- Occorrenze case-insensitive della parola intera `arianese` dopo: **6** (5 sostituzioni più 1 occorrenza già presente)
- Pagine interessate: **4, 5, 8, 12**

Metodo: PyMuPDF, con individuazione delle coordinate e degli span testuali; redazione controllata dell'intero span interessato e reinserimento del testo corretto mantenendo origine, corpo, colore e font Carlito. È stata usata la copia locale completa del font Carlito per preservare anche l'estrazione testuale Unicode. Nessuna sostituzione binaria cieca è stata eseguita.

Una copia del PDF precedente alla modifica è stata conservata nella cartella temporanea utente, fuori dal repository.

## Verifiche

- Estrazione testuale post-modifica: nessuna parola intera `ariana`
- Verifica positiva: 6 parole intere `arianese`
- Rendering comparativo delle cinque aree modificate: nessun taglio, sovrapposizione o alterazione evidente dell'impaginazione
- Nessuna modifica a HTML, JavaScript o CSS
- Nessuna modifica a localStorage o alle logiche runtime
- Nessun backend, API, autenticazione o Netlify Forms introdotto
- Nessun deploy eseguito

## Verdetto

`CML_002B_PDF_TERM_HOTFIX_ARIANESE_READY`
