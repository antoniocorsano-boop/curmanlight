# CML-UX-MOBILE-PROGETTAZIONE-HOTFIX

## Stato della slice

- **Tipo**: runtime hotfix mirata + documentazione di chiusura
- **Branch**: `main`
- **Commit iniziale**: `3c8b54d` (docs-only score refresh locale, non pushato)
- **Commit remoto di riferimento**: `0c9371c` (`origin/main`)
- **Runtime modificato**: si, `_published_snapshot/netlify-current/index.html`
- **JSON disciplinari modificati**: no
- **Push eseguito**: no
- **Verdict**: `CML_UX_MOBILE_PROGETTAZIONE_HOTFIX_READY`

## Problema segnalato

L'utente ha segnalato che da mobile "non funziona nulla" e che la sezione "Competenze e progettazione" sembrava funzionare solo per Tecnologia o comunque non aggiornare correttamente disciplina e contenuti.

## Riproduzione

Smoke reale con Chrome headless via CDP su viewport mobile:

- 390x844
- 430x932
- 360x740

Flussi verificati:

- caricamento Home;
- bottom bar Home, Curriculum, Competenze, Esportazioni;
- menu mobile e apertura Guida;
- subtab Valutazione / Evidenze;
- subtab UDA modello;
- cambio disciplina mobile.

## Diagnosi

Il mobile essenziale non era bloccato: bottom bar, menu mobile e tab principali rispondevano. Il problema P1 era nella coerenza della progettazione per disciplina.

Cause individuate:

1. `getDisciplineEvidenceData()` usava `mappaDisciplinaCorrente` come sorgente primaria. Entrando in Competenze da Home con `selDisc=Italiano`, `mappaDisciplinaCorrente` restava `tecnologia`, quindi Evidenze mostrava i dati di Tecnologia.
2. `setTab('didattica')` e `setTab('didattica_uda')` non sincronizzavano la mappa con `selDisc` prima del rendering.
3. `renderUdaDraftPanel()` manteneva il valore precedente della select UDA invece di riallinearsi alla disciplina selezionata.
4. Le card statiche `UDA_MODELI` sono due esempi Tecnologia. Mostrale su discipline diverse produceva un messaggio operativo fuorviante. Non sono stati creati nuovi contenuti: per discipline non Tecnologia il pannello statico ora rimanda al generatore bozza UDA, che usa i dati curricolari della disciplina selezionata.

## Fix applicato

File modificato: `_published_snapshot/netlify-current/index.html`.

Interventi minimi:

- `getDisciplineEvidenceData()` ora deriva la chiave da `selDisc` tramite `discKeyFromName(selDisc)` e usa `mappaDisciplinaCorrente` solo come fallback.
- `setTab()` sincronizza `mappaDisciplinaCorrente` dalla disciplina selezionata prima di renderizzare Competenze/UDA.
- `renderUdaDraftPanel()` seleziona la disciplina corrente (`selDisc`) come default.
- `renderUdaModello()` mostra le card statiche solo quando corrispondono alla disciplina selezionata; per altre discipline mostra una nota e mantiene il generatore UDA come percorso operativo.

Non sono stati modificati contenuti curricolari, schema `.cml`, service worker, manifest, asset o configurazioni Pages.

## Test mobile post-fix

| Viewport | Esito |
| -------- | ----- |
| 390x844  | PASS  |
| 430x932  | PASS  |
| 360x740  | PASS  |

Evidenza chiave post-fix su Italiano:

- `selDisc`: `Italiano`
- `mappaDisciplinaCorrente`: `italiano`
- Evidenze: 14 unita totali
- UDA draft discipline: `Italiano`
- UDA draft units: 14
- Mappa: `Disciplina: Italiano`

## Discipline testate

| Disciplina | Evidenze | UDA draft | Mappa      | Esito |
| ---------- | -------- | --------- | ---------- | ----- |
| Tecnologia | 13 unita | 13 unita  | Tecnologia | PASS  |
| Italiano   | 14 unita | 14 unita  | Italiano   | PASS  |
| Matematica | 13 unita | 13 unita  | Matematica | PASS  |
| Storia     | 15 unita | 15 unita  | Storia     | PASS  |
| Inglese    | 12 unita | 12 unita  | Inglese    | PASS  |

## Regressioni escluse

- Navigazione mobile: PASS.
- Bottom bar: PASS.
- Menu mobile: PASS.
- Curriculum: PASS.
- Evidenze: PASS.
- UDA generator: PASS.
- Export: PASS.
- Guida: PASS.
- Hash disciplina: PASS su `#cur-Tecnologia`, `#cur-Italiano`, `#cur-Matematica`, `#cur-Storia`, `#cur-Inglese`.
- ARIA accordion: preservata; nessuna modifica al markup accordion.
- Skip link/focus: nessuna modifica al codice relativo.

## Verifiche

| Check                         | Esito                                             |
| ----------------------------- | ------------------------------------------------- |
| Inline script `node --check`  | PASS                                              |
| Validatore curriculum         | 14/14 PASS                                        |
| Shape test runtime MAPPA_DATI | 14/14 PASS                                        |
| Smoke mobile CDP HTTP         | PASS                                              |
| Errori JavaScript reali       | 0                                                 |
| Warning/404 non bloccanti     | 1 risorsa statica 404 per viewport, non bloccante |

## Stato commit docs-only precedente

Il commit `3c8b54d` resta locale e non pushato. La presente hotfix parte da quel commit, quindi il branch resta avanti rispetto a `origin/main` e non deve essere pushato senza controllo esplicito.

## Verdict

`CML_UX_MOBILE_PROGETTAZIONE_HOTFIX_READY`
