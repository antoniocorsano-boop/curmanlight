# CML-079 Report: Microguida Operativa Home Runtime Increment

## Commit

- Commit iniziale: `81f3c8c` (CML-078 CSS variables + dark mode)
- Commit smoke: `e5ed038` (CML-078A live smoke)
- **Nuovo commit:** da eseguire

## File modificati

| File                                             | Tipo                  |
| ------------------------------------------------ | --------------------- |
| `_published_snapshot/netlify-current/index.html` | CSS + HTML microguida |

## Sintesi intervento

Aggiunta card "Usa CurManLight in 5 minuti" nella Home, tra le card Curriculum/Didattica e il footer, con:

- Titolo con ⏱ icona
- Sottotitolo descrittivo
- 5 passaggi numerati con badge circolari (1–5)
- Nota di chiusura sulla validazione finale

## Testo inserito

**Titolo:** ⏱ Usa CurManLight in 5 minuti
**Sottotitolo:** Segui il percorso minimo: leggi, confronta, decidi, esporta e condividi l'esito.
**Passaggi:**

1. Scegli una proposta di curricolo.
2. Confronta testo vigente e proposta 2025.
3. Decidi se confermare, modificare o discutere.
4. Esporta il file `.cml` per il passaggio successivo.
5. Il referente importa gli esiti e prepara la sintesi finale.
   **Nota:** La validazione finale resta a cura del gruppo di lavoro e degli organi competenti.

## Posizione microguida

Dentro `.home-dashboard`, subito dopo `.home-cards`, prima di `.home-footer`. Visibile subito sotto le card Curriculum/Didattica, non dominante.

## Compatibilità mobile

✅ Layout a una colonna, nessun overflow. Media query a 700px riduce padding e font-size.

## Compatibilità dark mode

✅ `.home-microguide` incluso nel selettore dark (linea 882), background via `var(--cml-card)`, testo via `var(--cml-text)`, bordo via `var(--cml-border)`.

## Controlli

| Check                              | Risultato                                            |
| ---------------------------------- | ---------------------------------------------------- |
| Nessuna dipendenza esterna         | ✅ PASS                                              |
| Nessuna modifica funzionale        | ✅ PASS                                              |
| Schema `.cml` invariato            | ✅ PASS                                              |
| Export/import invariati            | ✅ PASS                                              |
| Role-access invariato              | ✅ PASS                                              |
| No `localStorage`/`sessionStorage` | ✅ PASS                                              |
| No overflow orizzontale mobile     | ✅ PASS                                              |
| Validazione umana esplicita        | ✅ PASS                                              |
| Dark mode compatibile              | ✅ PASS                                              |
| Icone solo come supporto testuale  | ✅ PASS                                              |
| Massimo 5 passaggi                 | ✅ PASS (5)                                          |
| Non dominante                      | ✅ PASS (sotto le card, dopo i contenuti principali) |
| `code` tag per `.cml` referenza    | ✅ PASS                                              |

## Note per smoke live CML-079A

- Verificare che la microguida sia visibile nella Home su desktop e mobile
- Verificare che non copra le card Curriculum/Didattica
- Verificare contrasto in modalità chiara e scura
- Verificare che i badge numerici siano leggibili
- Verificare che il `<code>.cml</code>` sia renderizzato correttamente
