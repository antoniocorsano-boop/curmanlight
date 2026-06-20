# Report CML-002B — PDF_TERM_HOTFIX_ARIANESE

## Risultato

Il file `_published_snapshot/netlify-current/Corso_CurricoloDonMilani_IN2025.pdf` è stato corretto mantenendo invariato il nome finale `Corso_CurricoloDonMilani_IN2025.pdf`.

| Controllo | Esito |
|---|---:|
| `ariana` prima, parola intera e case-insensitive | 5 |
| `ariana` dopo, parola intera e case-insensitive | 0 |
| `arianese` dopo, parola intera e case-insensitive | 6 |
| Pagine modificate | 4, 5, 8, 12 |

Le 6 occorrenze finali di `arianese` comprendono le 5 sostituzioni richieste e 1 occorrenza già presente nel documento originale.

## Provenienza e sorgente

Il PDF era già presente nel repository come file non tracciato dello snapshot CML-002R, recuperato dal sito pubblicato. Non è stato riscaricato durante CML-002B.

È stato verificato `_handoff/sources/Curricolo disciplinare WORD.docx`, ma non contiene `ariana` come parola intera e non è stato modificato. Non sono stati trovati sorgenti PPTX, HTML o Markdown utilizzabili per rigenerare questo PDF.

## Metodo tecnico

La correzione è stata eseguita con PyMuPDF:

1. estrazione del testo e conteggio regex case-insensitive con confini di parola;
2. localizzazione delle coordinate e degli span delle 5 occorrenze;
3. redazione controllata degli span coinvolti;
4. reinserimento del testo corretto con origine, dimensione, colore, sfondo e variante Carlito coerenti con l'originale;
5. nuova estrazione testuale e rendering comparativo delle aree modificate.

Non sono state effettuate sostituzioni binarie nel PDF. Il PDF originale è conservato come backup nella cartella temporanea utente esterna al repository.

## Ambito rispettato

- Nessun file HTML, JS o CSS modificato.
- Nessuna navigazione o logica runtime modificata.
- Nessun localStorage, backend, API, autenticazione o Netlify Forms introdotto.
- Nessun deploy eseguito.
